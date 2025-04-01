/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "GrbR3FRx136R1fbRwn7A8d25jJB2WGdA8HGS9zKuuYqsiUCSCY6UUtUgHwWE2zS4zTvXUkx6WqxkytHi47pB8sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfyzHWqYV4ECKU5xzk7dpCkU9yqoptBtY1NSgRHq2UZMhbxYeVyZUYkzfK6Ces1SwSQ1Fc6mJswMrNuwkSwUU7U",
  "key1": "3EGjJFr8fmGb8gbpJLvENZbHLqPZbWceTsFjC7vLvG5rBWy2tgFt9VEQfS2f8MGe8ygNWXQpnKUcgtgQ4vqp4rUx",
  "key2": "4zBR7qo6XE198QHjnyB2s6aLpsjc74qx2ok3jHMTe3CH73WCzB4nrWXhTi3ac3wKUCEKjwR7fCeT7iCrdZawYF2o",
  "key3": "4JQGemNymz2F729zYRT9fEdBU3qbGk1koXgZxwhxzMg9Zb93bba1vVuETAoGk4xK6J93uYudUB49ZB6eWapwnesv",
  "key4": "4uuDjm9TWMipXYZKiPwxVZ4N7fXpVnEtwSdTjrAU4ZFT5rMuQ1ueaAPyujkWaT97QtSLcrbVVB2Ssp44vq6bHi9m",
  "key5": "5wi1TqcToY8G9KsYifuWE794X5avMP76jkfrqRmbnAcCP84HXTsTwjWMkJN8Hvqoj6P1vZThUPtqEFsinD9Wugdt",
  "key6": "63av4VtTjbc7TfRoCi3sKfodR1VbeC7XXcru5GxdLoqhWZ2D78e1g6eg1WosiMMBPSty7wubPoNTqEksCyxMQ6b3",
  "key7": "22YmCNRkwhjyNr4B614M6X4gndubLAfiPRoubAdo8ADD8jnFzh9DSwJPR5Yuj3uYFXeWh63qVeiz8KFGknU48iog",
  "key8": "3VfSmrFxcp1K2kDvBu5qVS32NaBG7RdCAHv3S4e6nnGH3NGJpfNNprqnoXTbfXhvFCbq8RiP1cPf8TFUQuxpedy9",
  "key9": "2kw9LJFgZW5KUNWnyfw3DAesKhWf4hrMiyw3S1mmUWizS93XXVgA8GqMNF15E7NqZuS6VwtUj5TtMvXSmkSxcJTh",
  "key10": "4mhruS4CrxwFDYzzjiCKT83ohFswbqyQTNMDYEwbCCt2daBL9is3ppMGWhKn8bWYehXmj8w263GzLMWMd8K2bMTD",
  "key11": "3Dg7B1yKJgQ5KHrVx52yBXpQhRjrYkt75LbL47eXPqVbrcqeatihPmWjwFaV6kJmgqkS9e2DXcKRN1XacMiJRB5N",
  "key12": "FaXVQSJg1aS1NBTyJBR2tSMxbt9Zh85XjBnXe67UScqZkKf5xcnKm49orqZhz7DR5kgeEErsYvkJMWfx5Mxs8Sx",
  "key13": "2SRaoiJeh1nWSFSadyVHooeHhi3SDTrqpJT8kM6yAPK8T92nBtT4NKRv6xBhamoVv4vKFgLKeVxwb6RoJL2JdwiD",
  "key14": "5r5k6UnvvuasxSrT6CfYGsLhMYkFRbnayZS9ncPo82HduDJM7c1vmJ9g8wu9BFXMrRxvmyJViBwm5mRXQXZN8bf2",
  "key15": "4PcL2FbYfGKhYS54jnta9JQ4S8fdQF9u3udEU4WBDKPKLrPBhatgc4bcbYv4RrX78MnWDag7exFS7qmrFyGV6NSM",
  "key16": "3A9rfbHAsM3tKTeQyRPpPmnnDQVFrKgppEqzrbjNmzpPWDenfyw6dosArGg4ozLB4p8LeTjXhjkX4org7ui1TWWH",
  "key17": "27GoBP5Jc8QJLeC22nNUyHQjAgr2A9cZjugUBPo92nrk5D8otZ5BAL5uE4YFu1SXvyKDM38Be9fMhEfVx2ubuo5s",
  "key18": "2Zj1awNL3jV9AabdwE89oRKSc4Bqf8X5ouD5WsddWSdUrHTxNp9RqNVGTsFgnz9zGfomqRYCroratPqdwhYHFweH",
  "key19": "Qjy4XmCTMNjPG2yunCKrR7c19kTur7QcgvTSmRNQMpVQC9F1kyU5hDMDCKLutEvLdnV6V1xzH4pWXfHNYWQSxu8",
  "key20": "4NtFrta2SP43HwhkhmTrcJ17SVGDfg2k85bQd2utXjKJ6W91AQCbQ22ETFREfkW6WEbSL41ZSPKgBwqf8jfpWXuf",
  "key21": "5UmLDGMbtajs9gDrGSxChHs7G4NpMtqzxDhtoXDFdGQfgerXvVYPu4VPHkFeQALsedkfjFVEVsN8UviD5YpuWE4d",
  "key22": "33UnAi3C9xD4RYYj1E6qbw2twegWJEDV9h4LGsYrovsPHutMmjXPonjCaMqGxuWKjCt8YUD1a1SmY2PP5gDg6bk2",
  "key23": "28XEdCV6HKYyVut2deJFNDih5xVj9uKx4mYVUWQh7tqkPx5Eqdn8iCaz6zUismssavHCQXiqPsiqiAwQ3ufGK9Dp",
  "key24": "2FYwhEeoP46iJDc56USBdvUQa3jdV5geCk7hzDEmq6cyo93KfhgKJa4LLMtCHqz2oQV4TnVgvZtH9wARd5hgxV77",
  "key25": "4DwRAKTZz6xPbxB3yZn3eNsvfKa3JZ2o8FNmvee4FgBoufXR8Vs6cS3duyshnAGngBSv92DCmSB2sBuprX8Fk4ND",
  "key26": "5fFW8gFKyoUTewYtg6XtuaKQGUDMPpiiWJVHbyZBxQutENaWekfRyFbcZBiA25GE3yAqSX7tKGzpyNB2fo1zbeXo",
  "key27": "5FvujkDZSFophPUMyXAfsEUt9LwvMTknJmoEBmbpuX7VJ94KfUUu7vDVsNgZi1voynPwracK31i2BCqtCtFvh8bX",
  "key28": "64krnexMMfzUg6feVS3t1iVsVaukWvoDY7MpDdLCkmAA4LPRN925YXsnbJYGDpFVajKvEzZJSY4AuKoNapvcJpqa",
  "key29": "3gZEs1dj36UZEKodjTZr3P33x9XRV71LDLZjuVnkY9JiMzSAJwEbezt3mQaLGtZR1R7M9KsKYnFqcaX3ftDKqkw9",
  "key30": "4fbEQuT4oNBs95FdfHCoApitVArcZvd286HaixreneW39hZUjtopCe44SqBtJQAaD9R9E1J76ENXvduA78ACb47n",
  "key31": "5iK8TmQ7ZzCsHkw1eALdhzVsbqotJiPowyJ5Aosgk23tTcpAWVdBFnmHRVZd7Xosye7LV9zQ1JrvWFnw5NDtS3ni",
  "key32": "3g1du61YPk4hBiS1YztLqLefY1uxX32VWmejkJF6EioL2jW2bZtMGAapwV1u4Ciu6jSktwnUPXSTtLr8wnHidptn",
  "key33": "2FDBcZaGWfe1nXqb1VVo7QZuJhQitpqod1tidG3HwgLGZxR9LPJYZsmh2Ae9114Y8YBQUDtkdVxeSSGdM3JdLDDb",
  "key34": "52y1WEW6sv9ryu2hJMuZmYyUaSf4YEgcdq1WfFGDeKt22Srnxyak2K1y16fEKYbbbkywYgt8QJpH5sqk6gCRspkd",
  "key35": "46bJ4X7Bux2bpL9RdYkAA31M7LnpC8VnkEtVw93QcLUZwzdwCtLMBiakWmt69pqiihT194ouu7tSS2HZrDAC984y",
  "key36": "4VYN9dj23cHUxaJatfa3t725U7VuTVSaGgCum4eRrzXVZdPLjyumEig8HpDV1SW5ff3gvneGnW9nnrgcM4fxJ5ky",
  "key37": "3vKjnef2TZo7f9KX5SwW7F383WEALpswQygzsKodVqWQzdruLX29Gyo4qcy5ioWu8e67A5dfUGCNyXyNbbSQea5j",
  "key38": "He6SADudtm4niAU2Nta8gQ7a5cy3AJ7powJgeiHj43iJ8vNPCyP7m5xF7PaydadsuYUL4bAfWX8JArK7529yfaR",
  "key39": "2o5evd1WCDVAeRaVxbcSaMVTUero8vtuZmjCaNnXRpL6to8GFhx64cwm6Ne5JrcxyLWuEbPEesHuB6bof1apidBm",
  "key40": "4NsjScUGoh8WWxiqqbnh6W9s5VS1Em8oPqkXijXZJ6N8S1cN42r3bqfV6LPF4ExPnoG8Ww7zLwDUxvtXmsAE3ofC",
  "key41": "5gYX9hu6jLFwnxCeUbe3yn68cy3Pp98DvZo7P9Pif4EdFP4DiR9bWDkGSKFr1KuLzJMUxAwupLQEk56cDX2ofdZp",
  "key42": "37TbNCnamraJDYB3DHi8JHskJnXEYNzbQazhgYukG8AFtQYpe1QYXe95iy9cUCxTH4RXKdasFBcwC6Nyt65mc9ea",
  "key43": "2QdPiHuFccUFsdszVbp9LXbx5eS2M143wrC1Q5jqRrqXikRtbC6mkfPZVWFy3TY94YC7c7VxRZtAVAYU6CXfZPkr",
  "key44": "MYQKTU469DR1rzCr5Zn3Mdzdmz65jy8LAb265Gwnmfg72MLj87oW5qnZ2kHvrnLgkgRhzPcBBSaofYWXXnjQCsF",
  "key45": "29xAaqRRdjqmN93dCdt9gT1Q8GjbbwqKXyFYq3biyYkXZnN9q2NCJmu9AfZoJJDXuqXo3V91ifKiUmPqaJw1Vdrp",
  "key46": "5GLvebjvidWjJLph7K2jV1aTM1Sg4Avwj54kjqCV8mRR5wXN7c2FK56qpfXz4ryoYGQHf3j53eAS8eGdJwmqYdYj"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

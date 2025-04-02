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
    "Un9u4KYgNpiABar7zeVrjdFo59FQMGygDgLb9HDYDyif5zgXcJRZKCsF7ZcktZmXuHyfCMWgYVsLNtkMB3rofiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51jsxtN9Xv1xfh3TMzedaDmdx1uJYpSyBEchPjYVGD6NBpY1ZemLapDVCQhQAC6RuQvCYJvPMU7oC9mwFDK7Kp86",
  "key1": "3Wzt5JY5J3cpSX7wemw6guN2hFivE8L3GnfJZDpofVYNvxbXHDzxbgX2VKTNanMMcAfSkeYS3SCiRduyKWPELjyN",
  "key2": "SAcTiGUBEnv33x8N9Y3mRRWU9JGEuxMQsdHaCAYrZnBcMsAUz6aKYR2Fa5UL7b8Nr62hhWTAXqADUsLQRdYdPbn",
  "key3": "3YYEar4wkgaFqqxZ6UUXsBrXgQ8cLvHj743k6UqaPMnL1vnJ4mmVaPjQFrySeBR5oG8aEhhyQ8188FarRPgLfpBV",
  "key4": "38YAsZ34tBUdXvvSx15mrQuKsr4riPwEBiLLgzjf8ULgeJKXx92LYcohmF3iFp94kuKkSs7XBkmmDSGDkM2mjrba",
  "key5": "M4esso3DgoPmaB9zBYN7L2ekgLEWMH739bHPUygvpT4jDTejRru3ZmqE2MPZFwmJipCzDuSmsXG2JQVZVNj9evf",
  "key6": "64gPbNBJoN41gmnPjk3hbDGdJ8hk4ZLzyTv9nkMSWmBNgzcDYoaLnLdghhuWcuAdzkv373UqyXRruHomUKG3Neiu",
  "key7": "56tR1KRgSyYJDd2eB71wx1pA9CZ39nZ2Pg99dziYpSmk5Fi2vSg8mH944R9HkkmkRHoomUPPKvAZRUpKREKbPF3S",
  "key8": "5dk7J571BXWtGBiXcT2saweBxiSjkvdUwHX563zAMQjZpMnwhwch5ubXEPG4r2ukDvb5Yc3RapwJXhzP3QfM2M3Y",
  "key9": "5XUiHm1hwcviS2n4QkRogGbvd4xCDHhQzXT7Mgt9TrRqoXQX5Ep9gEJK9jLxNkyr3cCfuaNF8z9UqerKeiZFX8Tu",
  "key10": "2VJkKCZrnmJ9xTbXw1FtmMHY1H4T3ab5EssvwmWa97PuDgfYiWiVFc1QEzH8CftNSB6GBncsZLEP659HygoBEMFU",
  "key11": "2rRqdfN3uXiu7U4sNYsS4GE5zEHhCrSiLBnSyCKdm194ERP4Z3DaLn4q6L88aGMcfBY98YcV24gUWMKghwjW7uh5",
  "key12": "Bd64G7vEdHur9n3eVQ9nenVx6FYUGjpmdqtbzKB4hchPFPhX8gdDhgM227fgMd8Wtpnfx85yxQvVzNxtW4rXAvD",
  "key13": "hYfZjyXMN2an2s64ji9yQRfLXC4Skz4i5Y3LaEqb4xSHZ3YGfLapeRDEZeUG8jLkMsgVzkk9gss5ViLVp9BwNNi",
  "key14": "TKWaoLcK9G7bVgo3HUz88pWK7Vn9qub9rKwN9K2vKnjExHWRjBK2SMUFrKi4SE3S3QzahTXuHqcMQSXxcQJeA4d",
  "key15": "MmqT84mFV4uqXJgM9Tuqy6FrEFVGoaRH2QSDJ12isURJDBmAbLdUvx9Kwg6M353eVtLCT1aS7KxFdEin5QTJ7Zu",
  "key16": "euQPLk4yG6ZbWVH5nBkuBnZvCDEQKDK79PdbaqgKdhPPnKFjtwy2qdArKBquFV2u8yNr2uewwcm12mizovms5GB",
  "key17": "5gLMN4n8xe8ymoi6cCmkZGxdqxbCJNfrjeAj9885hAa1UM1VjQj6J5eqokt7MFf43FttQ1KeXy74GPYXfPwF7mA8",
  "key18": "2MYUXFj3pjksFvBwWUZce3xHjCFitgyL2bC2DGLBehNFyJftSGvfT6rQktRZya4w8ReAE2dms2o2KZDzzirLwKYT",
  "key19": "WQKyBtwJubFCMLdybhZvs4BKEMcwXmxeJnrzcVkTVqbnpZu6UcdPeEgJtDrzpmdoahzaV2YuUnv4CsNijx5q6x5",
  "key20": "3NW6CRtJ8XeiZova3raKk9QAVxEhVv5JXc1nQDNj7jfzGxEkQZq43tTexze2KsR2newuqTB4P65p2T2o4RGVUihb",
  "key21": "27iRV6P41x12wZUJHRVabnbJDNP7Ggmbq7dtdEN2FWCxMPAutuoipSnFFrbjcLWsmcCWAM5GC2BYvHjzg3WZxymc",
  "key22": "mqDvakVe8SrJJUoV44u1n1WXQWje1pC5kwYeJXViM3VmsYvMiRpXJPf69nGi2Gmo334q38sykkKrcARRX3drhqK",
  "key23": "5epggutNgqFgRq91VQjYkJr1mKnPwCLya4PW8CQdGB9iC7jukD3PcpE96BGVV8SXUiUx59MNPDA8LCHoJjU9ANT7",
  "key24": "7RVwScqtKcUoEnUjJhgz96bpmZtsPGNm51mH1jxtg1PXyNCkDF2PGUHYPwFLqz2tdBhR2Jn48AQpzk4RRkT2g3e",
  "key25": "2XozcvMysnwbFVho1M9vJyupt3xyKUyd4vVqMDUGCG6uE7KajbaS9DvLTsoaqjJH738aRML4smuHodTHJ41JkVsP",
  "key26": "352hChsoqadtpPZi9qjw1RyQmPXqTxRQmAoghbuDvYnfDGo1H5oTcAv8AmkmGv4ryosTfM6xv5yUq3hUnTipk5G",
  "key27": "3QWbL6Vd7eKXLNrHjU3S7cK6z4gfyvp3o1EVXT3LfY7d1RLKpPUmpGFWBBM7ad5nnXfFVpReQ7zNuYCwhqSiYHAR",
  "key28": "4vKd3PPVcVedZZpuKwnLtw25oPE11zQjMC1jXpFmXSvbam44oP71pKB5ugTo2qHRQtetaFUBi9h49a5DvEKf3afc",
  "key29": "2yBxvbE9RDvb1kWaopxJoyqmB5k75K3GE6y4Du4FCdBgvvDCfUafvEC73fFCo8eqPiC9TpSjXY8YFKtpvFWNz4mT",
  "key30": "4WNVvfQZgutW3euV2sm5rrhRyXB8dj2S7jSoJ8FcQUzezrQ7XfzAz1bptbwtSWwh3XpGCm4Kmf1W4dqxJAP3AHqu",
  "key31": "CTfHEGpgSMMEe2FzsfTRV5wdH72BCRhb612mvY1y2sndNbZBDBXFh4bygYMMFCgyVmfA63aZMUbgijzt5uHnZNv",
  "key32": "4augvBtqAbdrgMZbQ99joiechUAbbMM7Ns2A8RHi7dugeifs45EQ3YawqgLQj48fggPPUYH81x9iUDDRSQpNh7eB",
  "key33": "3XmR1V7NMzjjbdQNbC4cJoN4FvRYWsSWBinBprjjGrTt5cWrrr2ig2QeH8BGsiX1AuM9GZXP9jHx6fGX3bJrcknp",
  "key34": "4UuCo7HLoicaexCCwJvMpC4jEWbpuSM49rg25dVr1P8Xc3Awynp82951TZiQG8MbWUjzPwS9SXCTFa1sPVj7ZSDF",
  "key35": "3ic36iBC5m5xVXx5nxGeawwAtX797tgHDdxPDTkq13oKB486QNz2nXiii8dc3DbZp8UJeprdA3HYyzAFrCAPJQd",
  "key36": "2JhfX8Jtesqen5Qt7sh6ZRNwBqXSLCYAycLkjfSxWCv1pHQrQpT89HJAR5T5TjvkiF23g7cfRSWzrN9tu7TrGiYD",
  "key37": "2ttEJzHQ1ZfmLEmJExsQ71iq9F5YfxjdcnC2hZ1tLnr3YJDCMNcZa3deTVr6616DHTPbCciCn5BBbDQNdFmBR9Ni",
  "key38": "p8wJ8F5yjQqUygTfsvfaHf8wLN4jgLbM66uno3Rujaierh2pt6DJKiUFETR7nHzm6GBfTZNsXBLnbXtn8FWoFU5",
  "key39": "5YNoUe6fXh1My521urpmHDkT441jFQFGMj9GUnWAiDG2dFC8TGXccEuHxzGHcZghA9wbNHoQjP7v6wybtFnJub7Y",
  "key40": "52PFDS4BwnQ4uejgZWSzBT9NvzwtuZHSyqLU4wsjCDAgNRwX38RgVsEJZT5pDyVASxv6PRTshkrUEcMMJV5n4v6d",
  "key41": "5Z4xrG6PTcCSmM81CEvmkLQWyXR3yKqAc9nMfPzg8mKS83mpnb1qDtdJoqTWoynXVYWDiEWvH3aQS4cRj8bvjdr9",
  "key42": "2ngPCzhC7WWywnZaW4Yqvr1ajmW7R7WWJbmepmYAzoqPdGwMjUVdewpL38nQxvzWd5RkWDZFCy9SEHTg1dSqgm25",
  "key43": "4XofgQrhe76dyzZ4ixbWjn3vpzShb1HMsTZpcowNwETjJVyvgTCJNEd4ZSGa6UpKtS16khtaPZuMmcbFE3HCW68B",
  "key44": "vnUeGD1erzzwYiRHAWkUk6XH5YBPZNGMHcwRziWvNJC2fkrscdf4fBzYJNETx5uS9qyhvjBsbJRzdnVEh6tGdpX",
  "key45": "33dZFnPQzVC3FYEzkgf3Kf4czfd41w7x9R5oWVs7Y6caugtsbL26tmALv2BrystL5sxTmBb93BGuDJsV1BaKPuZy"
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

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
    "qgZsZ3zprZzcU6r5PcmWfzRHharrpyf3NWe2prEENUL5uCRAtHs5UzY4o7dFji9FVDx4aTAgLk7WbAaULYvhZoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Fia5CZFz8ZH49JF5AWZGQiinvYbmFmaU2JtafQ2wpTrZTtaZ2BTeYFp9zqDrcQAzF4GhJMUBsTubm4xGGjL71z",
  "key1": "3gxpwKWMMZsPEd7EhcV6Um8bY3jTncPEYkdwMtFna7xtVVt6JKwfLAh9gqH7WJKzH5GgVk3fTjTWq1pCUHWz75rM",
  "key2": "28MycZrDwUFjGbgieq4uiwR2NNZBk6LQSKYydFbo81Aw5SWXfxnLfbWWtVUaYf14hSfsyeoWsgUjfDw3VHC9ufdg",
  "key3": "5aJyDP3wKTD5TrFkim2f1EwATVtESiYJC1dmb5XrsCYNXWRcYyRgTENo3htMB6rpeyefv5mw6nNhmrGZE6NSQd4S",
  "key4": "2p2VHtGZCGxX96Q6BAvL9WMqgTJMHaWCBr5KyktcatT58HnzkAMtysWssVgNKNT1Xk5ywaSjyXzidEZ7NfMx2iZz",
  "key5": "4dJsKhZxZSix92RKC2CXHvyMWBqyunY8CF5x9qb1GuJUL6x5T8e96R8m3JbhrWXu4fg4YLBh2bm6fF38qbjQ4MXx",
  "key6": "42ri4oKtBZpagqD8gzajnLx2sS8AoruboRijNyxYJg4a8AzH2KourXR1P1sL5ohJyEnBqex1SNijpKUm5F6dU8jv",
  "key7": "3Cjhe5bfG2rq32ReDmrGXy1EsdvDM8XVPqjkDYqJvx7SnWJGgtvpDQYnTaRYgF7ZtaZFoTerzWnoJm8J7VzD8iEe",
  "key8": "4KrCQnxyedwHiSMPLnWnnnkKnqiWy3UNq8giKar8ccJ4R8nUcMZpjYw8ZQ9xkkJsVU4XhLMxG9dxN5SNMjXM9Dv6",
  "key9": "4HMsTMMDgUumKxkgdQLrQou3K54RX8bypQQP6P6u9gv34xeFJ1aGhQEjTKPjRwyb9VYZCyUKZC9kzbDvRn4rpM8L",
  "key10": "5VfKi3QwN199tX3k7KfXpFh5hp8wYh9BY4fYMiDxKyXWgXMis6YutPd8Cc5pdbmzgeK6EPFR1SstbU7TtrvWkSgW",
  "key11": "5EZbSHkZxkdWf2vDEvZWh8x8h1VLJxhKHxNjXyW2Y5u59wk4UcAkVepXXDXCBZZp9qDSKJNEbXfW32Uq7a6hHmaV",
  "key12": "4uSmaq9YkFvQ9GoWnJGg9FY28gQfpZKVdYasvCxNtfePKsXuipVfnWNshEvEJNBsK3pB9a7KHNouHViurcEEmT5n",
  "key13": "26Q8jT7KLpcvufDXut4iKZbnQFaFxRCUBMHDEMM115Dwfsx9U4RzrZkJfqB7C1hDBcwUbw6XJh1ePdm5DorZQk2H",
  "key14": "4SDXAGEe7oy9HcLtcBU1qEkQQ351pDpqSDfEdT7dnZQgi35LotZ3rysT692nsNYTBHLUmYNCHQ1hoDm7HfY6KoTn",
  "key15": "3eHMv3ni1Gub3h68Lug9mgKH4uFGYTSgZGiN6gNECWE8ixvxZjhn18zXaxJ8mnXwjLcqR2S15BgwFyJt4Cx3732S",
  "key16": "4meijj27C4CMoyMmobjkbv8rn5AWkNj5xNzkxWYBnhY3ZoTf25m2y3FWKj2krhyToWngFgf7XLuKWiCX9BT8nDWJ",
  "key17": "3MtVpFxLdHt6iErSNMmevMLnotYtFHwYmZUHHFjHpdr2x9WDeudQyCWYo2fjJgmSrWqfbmk13jFhpFyg3994RPY7",
  "key18": "48ZQc5y7MACPYghZsNJEBuedgzDs6xNKfkhyP2Eh7DkzK3QdqYzTwNkoisFm69PdqWeRkDpPu1WAuR22aucFnyVz",
  "key19": "e68rxPvBxnHZpJJxhw2SyL1d8Sw3n2C2V7HGRb6yMgGmLhazT3X6yDtWFifMfECLWhjLSxfoMp3JdoNNzVyWNZe",
  "key20": "5ku6sDpSP4GaEeLMX9yBtHFxGHqZzd1oXdY1z6sqJsbeLSdYerpG9Nuswa39RBUrvmjptiXcBCQdoD4Z2DRS9XbR",
  "key21": "5uBJfkUEtjtR5buZeiGsuJbyZGAvKQK51tw5XQXM68CNTBUhPyhGFaDCY7XwWBEfepwVzqV2wSHghQB1nNwH3bXx",
  "key22": "43TRQs3PSMYvjntua5pAc36nsWXnTQ5LEDjuLVfN5asDXHfEW5Ci83Gyxa1kfprmfvZ6uY9yZWMupRCT5vgQzBjw",
  "key23": "2EqAHhVCxpphZ1i68wVSoTErHyMVWPVaScqgyVs3S6YzYFhZTmSdcEZyrBk2URt7jp2LmukcKEF9USM8iNUC6Ebk",
  "key24": "56Svn2HEnQifLVcgypazWptqXZgPTtksMVnnWL6hMryv2vMgkcG9ivM9qgReZ9DrCz7q2eRVU2UrVuTgs8LaFUfa",
  "key25": "5wW2TYzddXqVez5bS8Kkg31HNiobz4GUCmvbFtxeFRoKfF7xHSkHP2KjzsrTbLfrY8QxtsouWHxCnDVo2Fz99y28",
  "key26": "3jdjX58nPT6qus153sDZEPzFckTx4odsWbyoXDbdGJiq61Hft2UUxL5NhEsA4AdHJRv3TvXqcCjdYssbS68mhq7w",
  "key27": "2WNaq7Bid9vSFKbkoLCLKTQAk13sYRqbof7duKLrNzJJHK2Q1ZdZZsP1dAq2WFvcbhpcXoux4GfeouLCs5r9UNr3",
  "key28": "5ZP4G9BEDvw9pvGBsWbeyvtiFuLQVN8z82W22ZmyrPMpmJ1N36zfiojJKzsrDHJUHRh9Fxyfo9PWzsyZY32xA3Cq",
  "key29": "5haEkJn5vTzkRvtt3rDXP3uf84UnrkwvmcbvP1Cy1yTuFdrVFvkcF4vb1JNveaF4165yjCTmweTwenGVUJXtfRYj",
  "key30": "4n4jCnYtyyFzom1k5bUBdFfBhm8cLMTWvHuC2DhJcsph9PrrhBM3VujLgfREusVT2J2kJw1H85Mn1tW4z5ePqS72",
  "key31": "4NSozuMskm1W2tuoC3ij59ehAeB4MdkJWsLGBzdXoSMrgr4fFpnmmqU9s9SQBVgQhPfZL3rmm8zbSTKcePC8yD4U",
  "key32": "5myDbMsUzGPwyVNwX8mnyTEEAqq8ZZQUpiJZXUVV1qhedCUDfBMx4uqkc6veTRCRBTfDyDSJzS1HUA1BQHJArBhd",
  "key33": "DNxzNgL718TD4RyV7BZxi9YusTYMaUpRCged9MsTyYQ2bpRgJBpmXfN2wdY1YSZFKTR4ArFoYk6dVyzreynoxQY",
  "key34": "y53eViKnLYdhhL85ur53NANxx7U9ptm9NCqwm7eJCEw8qwHETMRWw35ztaMdZTg1U8AhBF3L7S5J3t2a3DHKEcq",
  "key35": "4u53uFWU5r19mtQUnPN2RHd22NTshksTEnbs1omYQR3KFuZbZkvPBgc7zea9NJ5W2xHmXj2jJDce4VDRpUyWih8",
  "key36": "3RmaqtWY5yeLuhsxtFHSbPRNowYxowooLKVrLwCdRxJBbM7Dr1WcMoz7jioAFFWnUYVNetcCSP3sZhAyjMADdWgD",
  "key37": "5a2XWwXNvMhUfMrhdjX45TzdF6rhUrxdJUGuTVLkA85fwxQwyvyUuiYvYrdb45GxuhLUWS7cCMmLW2j1FRzzCA4A",
  "key38": "3zdRAKs7UKtYEhgRJKAcEv4sXoEqMBnnbsG9MUFUQ43juK8gVSgrobf2fcm7wH15kf2BQ92tACUuu7HjqA7w2ViU",
  "key39": "5ny8zYdauHhE6PAeUCadCdDMkZPQuK2d5LDSN3XxjnRGyGNmJZwAfqTW9kbpjgYrnfmMVrJXnN3N99eLqxVPE1zs"
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

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
    "baxdA6uZ7Byqyo6qNNALKbEpzthiSGdmcAtdBXhVQvD4xY1bE3Gxx5cgYZSzPYBCHCjXC2sqnbHGpic4PRQZPc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqk5rrd6kNVhYe9H5cG9zzaE69dG8RXES7oDDLfcgSf9GN5rZLToDSGpvnddVY5EYSjkQfFTV9ahGHs62eoksGB",
  "key1": "5GsbimJc8YkipyPg1mWoYjnBFpMXU7hqBSaJXFQg9TJCH3HYoXw3SxUFgyQsQhVXL97zBDg2KJi8BQKwehMpkKSZ",
  "key2": "27NUWEoCV1iP9MHAvxLiZnL5oSZdkd4ZvWBrnEVw4iFdsESy7aQWHeXUAJq8VzmUCUhQE7tCCL3jFMBvEjCppD76",
  "key3": "2n3c7Hp3b7tjXz1BGGTrMuJ1Pe7LrHQ7CdoE4DnAv69ghV9zDuKsyU4DXUiJHKbd4YXPWmFEjoifg1efuBwCQrDk",
  "key4": "3C5HMcrtjczbTkj8nDPM4Q4MpiCxALC9wNkyxnTNARGoJyviPtsXLhirHAZV2xqzKcYxfNDTfCsj8geLwY5w5o26",
  "key5": "4hXk615m8EhXao7rjUYKfErG5o6xWS8PJACjtLZDxx3qNEiCguRt4ZHR7hppN5TzFNHKRWDw7X9cERVNu4GEmNt1",
  "key6": "4PJeSfmUnyRTpsjzK3kvL8fjgEdvSUzZQkvdnvymYPeHyNCjdvHkVQyDm91PvRMpzyA2LboLgNxaRPmbM1AmFKi9",
  "key7": "2PwcJ5ffVpH2oobuNBW7xK95W5Nc6F8RSn6oXd8YudEWKgVQYhbfUohNG8dRfw7uEHQAqnk39mZtm96yG8gERcqg",
  "key8": "nhCSKDoRQfogpjx4J3nBzny2eTbzcp9mjYaahRHEnmAteTLVAx5G8s9gXFzvMd9EYvGXgo4XzrXBiounuppTkoT",
  "key9": "3ZyBgV5JmPGPRbgwwPuzW8zJ3PcRysPG9k6vTg6wfUaA6USYdzvnvxh92yN1TW1qDYVM17nWNvhQeGMwoo2dtuRc",
  "key10": "D9rjNHsZJZSfwDkkQe6gYXggP3ogUrPyv4fHjwrxDfMT7giYjnChUoZiunFZU4k1HFEa4QvyBn39gv15rNM7JQ8",
  "key11": "4fycvdCDXDD3GpenZ39xRJZv42oFLAttnjPxPXPe2niTNK8E49mhNqsZSZpSRjjg3kUexXkAGNEpv4DWg5t2NvNb",
  "key12": "49oZSknPUMLewp6NnBid5Qhgepb2u2MXWhuosYSx2pTzv7z5YYqkjLA2WzkcwFLnyzpjESbyDPmcxWY11627cQnQ",
  "key13": "2ivEk8emoXUoRrQ28q6UNKuPGAihy41CgWeQYHD7AcPFCi7xJb4HT4ymAPnftKE5KxbvBCZSeJmHewJPKEXPR7gq",
  "key14": "5BotP5EF3jJQ5oQTzNg4hhB5k6oFzqaovDtrg5dHrbHfsH9GWaoAVUrTtkS2BggJ6ETdKfxeCZi96vfh84EuJFEa",
  "key15": "aaoGPtywGFRunT1TVgjAxVuesfhUt4zp4F6sAc4B7npWZmNesVZ4XiRo1vX11TmccPre6dWDt9QugdLyXFGvEBD",
  "key16": "2DtG8TJN1LzXxdxKinQYmLcAKhmdp5RLAvYjPDUoFDpsYgW6WzVd96b1VqqFCKNvRxzjrAXQeZFxJ9ZtjHGwbWrQ",
  "key17": "3fuk39vWNkSeH2kmCTdNrVcq1g86antwHQWQAcuCeEzk8gCaxjEJqpzw88UgsKp9uJwwm2AeXdS8YUiTtNKJDEFk",
  "key18": "4HxcM9iDfAbGE7i1qR4xhqKqCwzsuVipT5ocSCNZHuBxF78DwfxYHamSiLS7udbPZJsER27a8EXxutVfrzRrv5Ej",
  "key19": "5vtzh9QDq1m3Q3Lu9Q78fNuvdUM7E7PBeMqJbXLCBSnYGcvkaBe5x8DC946rrGLGKw8no4zCBd12yY51WCECTHCc",
  "key20": "43S4pTgGKKwaxQu34vNboKzSBLALTrTzbyLQnZZobfaHGymPqPcGAg6xkztAMyirKE2zs5Gm19FiXaeBFysE7Epz",
  "key21": "4L2X4ndH8JSu4MF5np9kteTyEbVkUcDPG9ZQNV923ZQeT55XjvE6Nt4xy8sfgpa9SQYVSKDd624QrWLNVdSMHJSt",
  "key22": "5tm4bnjA2qda6ePtyJbkbNNYvG5AW1YqiVuHBFBDf1azBXtUq2fKPijg74zQvoUkLLdpB4CpJkJmTGi3c4Ju39qw",
  "key23": "318b6WeocC9eG5XHF97Z2w3HugbQb4nFkoqwtRCHifvwYmT8htitWaYHSQhsEoMZ5aGfALGF6SnPZhBDk6Fu6DYx",
  "key24": "3wirADKiAdb2ENaoYpjCfBzEveV6wokJbzqQHknYjd2XB94PstGzWp2Q7QLqpEhofYReepTB2gAhBEo1ZbmUPgmK",
  "key25": "4o85YjHgovxE8BRoM2BoegwTRtr8fbgcDVrggb3mHbdCnXTkMxGt5GhRzuP2nSDsfb6nkDBWgVX1x6wyrwNgRdZP",
  "key26": "4E4SyfTrKRbpdW8PQrcA4Xrjn1YvkMxbqoTEJj2TRCCUHZFFoAzEKobCoee2rNEwQLunh2zWhztX5FGZQCzy3uBH",
  "key27": "zVxjSd35Cqq2C4zs9J1Qr9Gi22qp91So77BUviuDEHoVLZgLT8SsGjxG4tzPd8T9trSs18RR1admGVUJZsMkofe",
  "key28": "3vQ8zbipNNYFjSYmSZfTt6JPd12x74g5Wpr37rA6LY7A519SY5qa17BBSKgWE231s9LZV6ebxrT7HxjbaWjoqA4z",
  "key29": "5i8MuM4spoZvCQTRzDVr1XmJuabM5tznW9xk7bAk1PrWHN6jiJ3xyDSqNoiedpM7RuuXsF6S6E1GtGs3A9K3d2EL",
  "key30": "2qmKXhhdeZGT2r1v9c8R8JNEyc3y37Hs7cMAhR8bVHPT9rwEYhTxfaiXFovdzqd14kgGrBZ4wwLkVaGC1tRxBrvM",
  "key31": "2MvkWtVuapXStMGSgZD4oDRv7PZQmjebtZj6CJwUVYzDnz3y4FB4J9fqJgmFkQ4eMMqABdRPGGnm1pgJLFi2973K",
  "key32": "2J9yfAEYTjYTFwLRKULU7sHe3gAhkEqiUCnUP8phxsR2NJAMkvu5qZYKRG5iwKeGBC8nMRqmxdFN5FnUguxbhYrG",
  "key33": "47SJ89KJuUWKsJtXyQNN1M5mDbP8duDjwR71RmdYP7rhRV5MchP5TkWqVuEoQFkuhoXkonsawzJNJFce31fNuR4n",
  "key34": "5ujBPWCZoMZqsjYcWX3tycoVwLn4U2v1hLiLNxdfKjRrVYhyjvY9yJcguAijHgsMpE9U2G2AVz6PaGXerxegn5yU",
  "key35": "2wckKn4WMXM6L4qNsDfdP88EpN25PTbFMkSaKUmwzZTihioFEhLk5jX6DVZQtsyZzwQUjWWjDe5ePKDFRwgz1Xph",
  "key36": "5VNGwxMmzXGHehNexgwzMFj8YvgCk6D6YpwGHis6DLTkzqUkfpVMYLoSQRZo4fWBmWYM6zwKSHz1SeMmQU8vLCjA",
  "key37": "mzUtb39SgzRnE5QMBq6wewgjay9QF5Q4bUEujH4LBYLh2267NanDZdpJXZ6uWNhftvA1Gv51hiuDDVCjR8KAsAL",
  "key38": "ys2i2rVfCoUdG3YJJ5jmR9dUkgS3aqhQJqcvoU1J6a2wsrevHaBmWvwDB7Aom3TCK9TNaQZpKgMhM6PTizhkPHC",
  "key39": "4FE2gSmrkRcQHZFo9c5QJYRttS2UJJJJkN9bzsywWutTe9G7Lq1qt97TnrGm6o983uKYCJWk8BsCFp4XduH4AwYx",
  "key40": "3bm9Q22yChz1P8fW9N9cT37h7rwZqKxLU7C2Wd4XURyx8REhzR74yofHjBq86om4kXGsUNyVADXQAkERLzqQm9Ny",
  "key41": "5rNnwiUpPd79btNo3ErxmV2pewSr1RvNo8pjLcSJKfANreuD9vnqib8jk75KZ4NCqGcLzCzwPfKWxwd6psTzAubQ",
  "key42": "48BhdkBLvjZZwyDvXwvaWUUJ3q9i5g7jNSWg6spnKBLLxbwkdfLDqyN3MUoerrRnHozCcKJ4YZRp6Z4zK8AbVcHV",
  "key43": "5955t5zM1sRgDHF2xs4yiRabij4ipKinBzFcYHXTT8xX4qT3yAhDN2YMxqxABziyjhUSErPQWg6ovPn28QFpj1iv",
  "key44": "2sJhekTWMu2GgyjKUe7AUTjSDSrcWzzUB4WSK4gozXgH3XpAjvwiuk4WMAXMLNW1s7TimSswtBKW3KkSNoMW1EEZ",
  "key45": "3s8mCDpBGUEertB9D7uoRUaJWYZy41FYd7d8dvT7DtDeaKVgBgGZAzgd8avUs17LCnn1Cx6ETtGtXfj7eg7596Cm",
  "key46": "3vcWpbxJygDTqnF8bdXcb53X4M6xVWHyqa87L4umX8A5LQuutZzqSj3VaCMqy1YUJsuhvhkUkRPRJG7bYJddAKQY",
  "key47": "5hQFTGzxUVE5hid92wtdiSGP5GGoMMFkaJHKXZUVgAuRV896bouCXuNGcD5n2PFgHRdnQcrxswyToUza4fPkeXET",
  "key48": "3JtfzZKXTuJ4DrK1w1xkzLQ4qoHxJ54XVnJTJLrwS5jqVMdrovvshbnXVWhh6RqVCKGn82DRksovc5bEZJrJZbbF",
  "key49": "Lah1hNHaUyBtc24Ke1L2AM5yyUniMyvzseYvcH2TbBfvt4b6FJyvb5BL3Sak7XM7H4bNGWJ1WjkJQqrfX3GQRzS"
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

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
    "3KjJHhQCJ3wrnShWhqnNtKPG7tqRfb4jRRbUmKRKH9aJCkK2yoyMWdds8EjCzkhb7ZvBnmzrAuJ3DQMKKtduHPZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4wJRATY5rcKpBLw1hRZ8AdfBm5nLtdYz3wMhYVT1fkmtsqC13Gk8SbeeXJFJnwhFkxTxLpTnT6c44gxiDddF2D",
  "key1": "2z5Wm8pSjdUkArkb23TyZHGL8on7hmXpAeG9tLwjN3vnTkcRfkwNspUCbi83vGsvjhqTvjntvhwR8HvgKbjznset",
  "key2": "5UvrMNqvh9RPDjTfNYLX1JRx9mEnv3mU2tF57JQDbzuPpEPvMwveQWeePZBUxzijRxwSuMo7BTpXvrNLLAnqXzci",
  "key3": "4RecuNzis3VaDxaBnWQ19vt6QcSNExYKviSMH9v67Nkqxou9Zpjexb3hJdqo4o31HZyWDaPkdWpbWRQSocW4Ky7Y",
  "key4": "5CkaJRdfk5A8dx9d1y5VRDuCkNYnXbWgg7uWNbnrJaSsLirtsT8sTqKAGxpceVv8G5MjRWuariYZaT9i2wDK5wBV",
  "key5": "BJisi2BfxTQoZLAFSeuWMvR9JBaTsUzkre9ST6fijQJhsJVU1j1S1BEZwF4QGTyYVbbtqramWAJPwfbhFzxRaCq",
  "key6": "2Jj3TRju9moHNvQ99kxg7k3pXC5zwasEGiiN4hWPDiTRnGrS4dCdn81wCMJsuWZpbN2KzNfgHAW9rU3ydcXjifMJ",
  "key7": "41ZWmpzPr4QacqGXYQpMYE7hxd7UaHwzULcwinxGVHxJJG375xQijP3LnqBHPhNRvgUcHBQfgoQb63yS6KgxBuPq",
  "key8": "2ZqQnoYd7Nsi2xSVYhanrKUt7NAog5HZmGEy2fhHLZJELbvbuG7Wt5QyqDwgZDfXsYtxBdEe2wmYkRdQHBoskxe5",
  "key9": "3Tb3Q5PsvoRY8ut1URQoKMqfou9iXUX5vHXWHuuLQGr8175pwm7imLv4Xir6mw4bNFgqFU6gKSJJegrAELJStRiz",
  "key10": "4nNSbUvtsQFRj1iA1hKG9YMCdanGUX2muoWfSFu8NNFqmunn1u626F1W3iaNQyeq6twrFuVD8voRyRet47fqB56G",
  "key11": "5VB7hzCbbFXzhJ9JW3ih3UEYYKUqSjofdgsLg5gHefap24nGRbYeUoxrGMCQw4nWJgUZqrDcjWodoJ3aXUa7MQJ7",
  "key12": "5P9Kxj84NyXckW7emfkjaddAK8MTjNPG9RpQ1iEJcZc6CiKBNypd6UUehxWmJhiMxfTcmQdvcJEBRyGFUuj8R7UP",
  "key13": "37eNDdEJgDjvaQE4Dbxx3hnwbmUm8yKTREvMmhX8nsiLrd21oaynrySB9ouSNkeeMj7inGrE5bwgAQ5T6Pb2cbTz",
  "key14": "47Asaw5FASPYKh13N29NPgdRfzd9ifA4uTEeTdtiqyScdXjFGYc1VKTdBZj7dicnHhPCuaFYSxD2mRSH9nyxg6NB",
  "key15": "3ufPAMmLPSZgqQoPrWRmFGhKfcYGoTBDvPY3aFKWpDTPbWDE3kxveY2nFtD9LSck2zFynXLj7Yn8MHYaE62W1kPS",
  "key16": "YW1bcYv4nBEqrtZhHWiB6nYajv5tZLQP6D6PT4mkKSznzs88Lbt9DcQz8dGDzK2FD3Ayeg2UJX7KGtp2GcAf2Rv",
  "key17": "3inE5vpfZZVYhuHpSffLJ5DcnMyvBVz5ghNFjTzHrAaddKSwxDxkCS7aNUzjaNAqQetZuv22Ss5rWPBFUAmpJ9AU",
  "key18": "rEmoicAiyLXwM9iE3HjsVbkuShMnEVsGcry4jwV8oAVYdfX2vxpbqESsbSK69vYXNNitu8ZC6En3jG3ZGCFxAUM",
  "key19": "2FJTS5YsLzG4yjJWRtmx4tJcJFH4ndE2kt1mz8yrCuNh1XweAxUomAcx5GMo6FFSpbfoKZR7U94prfg4xBaS6nNJ",
  "key20": "4AWhD6kHqoH1nfQ6yQSme76JGcG6iaT3DRrhvF7wXWReC9MC23zHaybC6UbfVejEK9GiTszGSJkHMrwFXXBkiKpk",
  "key21": "HE9qXgdLqz1HdBTBo7emyjrDUyMSMEYtc3rxqZkeVHneYU1ftYbqcfduD5ydarz19bPqNLSmJdvtyVEW75Pd5en",
  "key22": "2ixgYWehGqU4vFHHBKU8HGc8XhCqTxS4Z6k6yCYCkg3d8ZQeMRGU7PdT4rWV1fuMj4PkZKYMmUR9RY2jMoyDzva6",
  "key23": "5b1vmR4wkLnna3wjEKVSNQ6ts81U15UTfYRLRbe4reAjjKYD1BjCNoGbBDVWgdhQdGrjbBvEthgTxQy3qhEvJUKC",
  "key24": "4vLPdoWGYkeNcJkmivm37k7T9hsu349Z3uWXpZ6nApzwtQabTtu7bdqAv5oxUrcM2VxyHbzEm2df1biAjN17NRKr",
  "key25": "5ot2jXvPCuhSk9pxFP8mPeVKodrTr6D6UK3swdTW5tDPWymFHk5fSwivPWGwUA3UfHd3ZS9D8sjFZwNu5bJpD18s",
  "key26": "kuJfGhBVL6ruuvhzd96ckj2CrwrUVoy6dx23A4ygxU2E8Yjrctuk1DHFz17eeCHWyzuLVh7rDmmkchVNAsgdqzD",
  "key27": "2BqTgYq3DWTdYn7brrgZhzv1LpBF2pGu6LeQ6qbS216qgcu8qDiRpmEgniKmSnae8ifo5h3zHh7dy9wxg4msbtqm",
  "key28": "5YK851noi47E5MJBr4yEdYq17bhjghWBbFF6SYANdNAFyKMxdxVz5yKHc7mmNm8TMsEjvVTsG7NJudjt16Myma2N",
  "key29": "5AeSctKsgGWXcYwxP75ZaB7zSkS9SAqRkVNXM227HZVkEc3mpWJCPWxMk4ZFS679pFqT92Hyu6w1jJusMdq7j9KR",
  "key30": "3TKpG4Sj9mbPovdABuRNB5ysyAb8FEr6ErAxnF6CBFGx4e9QxwkSnbd2GboGSjAvLx62ZbS1yPd9mQsfi7gZvHAH",
  "key31": "4rxY9vUtaVYd67suG9vmngnJM1bKZ8UJ5ZDaDR9h2sBZMYDTjjtdhd7HPvRu1Er7AV5Hjk2btwLSvwGMFMwc31fr",
  "key32": "5j8jPiPJZv79mTUQAzkpr2X9nB3tZy3PxomV1dS7hWM5jTGZTr3tgdvno8WYAcFvKVpk3CWRMjgmJNfLV8mea1o2",
  "key33": "codVZLtkwgZEZ5okU67m5HPpEDuXErxTpHmEjEQUdNkhRjtoPh1gVRBhFKT94fczMxGJsgfWmkmARKWAKohCKNn",
  "key34": "5BDJuiMiKRLPmEhTFyg4TFQM7D6zbrWNKSCzeeUteofQzZNTDwcFdaMD3AhqpZetE4RexH1UKkJyCQLer5Wn7nHs",
  "key35": "MAQVmBTyFGoeyAvbvcLyHdSdD5yKxBWVhNW8FBXUE3LeQZXAehZfcp2QHsHiPcmApUkVHuV29gAqtyRf2ozT2Rq",
  "key36": "5uMLzETLVPkV8ao11ob9Cbfk5JArhjKickT6P3jGXS5hEbNFGF2EWmwwVr9HYSqDYByp67bPHYPhMg3cd7i3cNjr",
  "key37": "AgoWsNPF7pyG8fJxFPuHJQFTt5zKGkY7RPk8sdg2vE5rax899b7RsVcDEQP7UUprF1j2arsXa4CT6zujANJKqmZ",
  "key38": "FWowpFJb3kaVMr5hQtbscaEmCZXw49z1iYJGL4pz852uA9UZsJ4LbVyPNyqK5db8YkWAW37bC8vN8iSnw33ZL1a",
  "key39": "UmoSzHNa5xpqavEJTzz8AnPN3Nj8b6WpFeWxiBJQMc2d7JwsmxjFuLBm3sp4E3NdFV78ThzucoioH7PHZqmd9HE",
  "key40": "5Xt2TKS9SdngBk7aYEJDNdkGHUDnqC24UEfiBUd9LTNJwnho4SrHoKczW8BgV5JRNKKfzs8Ttd2cmFNC22tmySVe",
  "key41": "4pafQGYV1p1PowS9fg1brTjRZMXJdrVzvKMRz8YiK1tk3X8wB6VpLiJ4TpaRWbCvERrd5UJYhGZmemURSPCd5TXa",
  "key42": "5nafay9oEZg7Q32unFfcWZL3FCZeW238KGxMVv1fShFMVQtLg8sArcSY7pN1XNpK6bi55dL42xxr1ma79BPp49pY"
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

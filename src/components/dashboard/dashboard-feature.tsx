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
    "2muekZXPAT2eRYn5aUmYdroEyYv2fwWFjSoqcaagVKS5oYJJ8kDVnnWeebTFoB99a7c3KXWNucPLikwEV97hyo9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkymgrQT6stCrgomK1ULmzh2yUMPgA9ogdVGGBpswXeMmN5zc2v3yjJgzsKt1GRnCgLGVSjDdvHiDxnrorMANB3",
  "key1": "2HVPwQAD7X1nAVuAEyH8BT1cmW2hhYdoHh57oX6EjFGvebggGaYPt1tHmDAuKHDNdDXbexKRHLfBYY471mxWqvk6",
  "key2": "4QvVQJLbLLph5ftu7j2SFKgXXEPNj1pepQJQgbTmeHA4LKuYKu6USwoh4TZzFdxMwE7LnuJrUUGXaLy6VcGiLuj8",
  "key3": "4PNhTZpHVkQcXvajLXbHATwWLrnfYLA3fUDtkK6RC3BiVVXGQVy46Pcaqfs2LqY64iM3rBbZNkSpULTNWW6ugkU2",
  "key4": "BaKsbX5ieTz7YmhoHQoETv2oaQTiN3TuB4aso9GAibXAD9jggwikDCXr7amb727etDNJt3Q8SPiJacemwn5QQGY",
  "key5": "5prT4E4KyeRjGM1vqDt1yJXvcXzuMRvHepPuzW2NF9RogYtzjwZcnFSD7pWQUhUUdks1e8j3a2CtVmeKkdKmZXdx",
  "key6": "4P6kKEhSL7bXC6sSvWyTdzwbS8Unx5iHVFXQMkcA6gAAdAQX2ohkCtCNqUEUXzXvMbQpo3XDNjsmzVM6Yxno3WTH",
  "key7": "4doeUkK1TzTtW6cfNBzJcjCsD2S1Tpqxayx8TcaoG5bK6J6bw5344wFkAcps7VZczu11RC9odEkeZzy8GjWuyUu2",
  "key8": "2JidC6WDxjvRHx1d8GUTrb8N1mrVMR1ep7dqNc9qpXTz5HZjh7QsCZzsD4UpfTGqN9TMrS32CFg5k8hNasy5AjuQ",
  "key9": "5Bz11hFpMF1Trq4E1Zt6i5SXXqDhZTKfFNqdUKPzUi3HMyu8NBxUJQrdnj1DkRx4LxyMQFY3ki1KBh3DdE6aM5rD",
  "key10": "5fFnc5AfBidTX41dLdWjgtu8WPUhDYKh6r9N9GRZAtHGVCjRshc2aR7Aaiyhnh4EsK3BTZtCpAvhM4gkApH4jHKM",
  "key11": "32xBrUdMS5o7f2HNGVB2dEPSxT9QXEHRGEW9ivsfcJGkFM3eTpqv21qMpJQxuxqbCjmQo2HirTB5HdygzfyoZM6q",
  "key12": "5AJ5yRK5n3uc5rNSyxdNo41MLyDNLphTC3ciuQdPN5USRrBMhMkD4vMsK7ZjyNMkudcgfqth58HDQP1maM9AQ42X",
  "key13": "2ErDHzn4iELnSREx4f27uScL5JWvEgxi6mJNd2iJfPvJfqN492ihYv5amoCtQLWvLrL5Fnp3R2LMQFm2b36E7B8A",
  "key14": "47DkFovhyyVMpzvJuRJTVvhTZrHtmAUMREt87SpLMEoXDmBp9FwphxuD4fqoMA7QRcaGjkTupR6ACjHKLt6CMK8K",
  "key15": "3pcakim5hLrNXqYZBcwbpDKRygiJQgaJvhkHGucGJGGsskiLwVCoij9E4noBt9g2HfZ56ZWsatq8HBVSjo5ydHts",
  "key16": "4Ei9sp7uA6gzcujueCu7vqTK6bbGxeWVrzGHzVprU4Cb3WGo5usof6gH4mb1orSh7JxVko6u8BVhnEexZ2nBr3z8",
  "key17": "663rrZCyUEQFAJVJ4E2WwgRa4N2HJbkwcAN4TBhfCKm4P9jGKt2hTwPYBWnnENtnSi4wZZLyVGVhHd7usP2qdRWW",
  "key18": "UCeXqY7d8WqxYrMM1PTDi7LaRriaYeNacGfHuWLaUiCbZhu9y2k36VrQa7DuLXJjY6kxtYLb55T2b81w9a8pn72",
  "key19": "4EdPBXNoDwUrHVnZUPLowKrYmKmX95UNB5mFkPvkFBG4crz8DdzE1dXQmi4hsBqfsNvfbsVvNb4t9xT6KpS8iPpQ",
  "key20": "4PGwK49xmE1HYMaHeWJnfsP8ENWbz7HGev2rpkAeYieGZsBeSinXQusAg6BoYaWj1jgsv66BLWFUSsqsouNWr1Mf",
  "key21": "2M1UdPvGR3FjWyFCd6mXxCA8BZ6CrcXbppuXrLeB7JzdE1JVqmx5Pdc8nMi8zhhkcY5oaoQ1iE9nxcTL3mxYqo39",
  "key22": "bhUutqreMbdq43cK8RuCsuRMcbCC8XJTFUvhASKmuvLNVbi7wJi3oHqd4D2awVVRbXvJwXyjpFKAoH2R3roasuy",
  "key23": "2bT62QQQeGrGrG8os9aPTkF9eEvvESAxmffnRoMgorSMKbKWXK2NnJQ1TpvVtF9ZnUEbUfujjRUNEYQMj8LQJXek",
  "key24": "4xmRiyJmxTujqWAPUs5nsXPAHWX9sQNPZqwQ4WeGomWkQnGdZF4BwC6bJhqmYNVeEGU2KWLziagHY38d4GVLZqv1",
  "key25": "2p3ccSJkqrxiqmj8sYHzNM4HKhoyoptPjrt99zS6j8dy7hGqAcrmPRmtds632Hsv3kJVqp4AixV3KkXN8WsvaFYM",
  "key26": "WJtXdTyVUVSZGCnodgeeVykuhy3JTXL7C7B1ARmR4fkQnVdiRr6in2pVLw3i612hg58NoFqTAoCnfQXgKiCmgTC",
  "key27": "4mwsc1k843YJ4odAYpGZNJyeoJ2xbzGJLewxB5PMvEWf8pmX6XA8ZJ5CeQ93Cc8aJgrxxqyZhib3RTF2u4GsNEaj",
  "key28": "4J9nPiRRyUcxFvHnJsrSNagVEmfe2G1wyZwtoVJRY9RPFCy3EaHEbqLjjtqG478fMkMX1f5nSCZP8Unb1LdUheJ1",
  "key29": "4xT3UkkNoRf3JpTrfdj97CA7izaPmVDwzEx5XyqkqFKY7GEGKPq6YFhUyePdUbJUq9BeJvkNVQbzwRzw115vq9r6",
  "key30": "4TAE1KYpDJhP75RWufnbS7KzHNaoXFqo53pXMoLPNXfo1H3tDdwByKj8iLrfC7MS9M3pucfLBwB12qp6npQUv79U",
  "key31": "4vb7GrsV3qLfgYn14jBA9gAZjPquz4yF8vWoMCcFgKs3BJUBfpa4LE6UK5dVDuRyndJjjCG81x9WxyiBD5iF4Dkn",
  "key32": "595Pv8qs4PfAjkuFW8hz4DdPkMNK6XrBkpgdbDNp7GhY9o57c3ewSh6mLk4JFNoUmiBAhieodjPNqhQ1SmDvaoFp",
  "key33": "3KW4jNwAe6ytBsBa81vyitfmsYZxXPRLMs42Uvdijh4EPn7SvapvEgZYGM6BdEiWPVxtvY1hAE1mL2SgA93SHk47",
  "key34": "C6bEFURkYBt6WXZLvz68DWhpRU7ffsm4X7R3UA9qb7LhnkwnNGgz7wc5EU68jk7spmYtsdJWCDQ2hsUgrw59Ghd",
  "key35": "2vVrFvABcazhLBkPQ6sDPra5d7MMTLDid45JKQiEmHoH19PLfBT18E7cXe5JJDQR2B6ndvBvaNCwBRqPnC7wKGsa",
  "key36": "54xTpS1cXnL4AUbU1E1qq8brvFKvvrHDV374sqReA8kZyCSBAbLrtCbJ4UJ7giXYXCJmiGB2m1fJYCwqedhfUAo"
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

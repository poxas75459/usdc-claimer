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
    "3LG83GM89nQ2YTs3ejf9LzJgD8Y8EkXiH6a1Fj37U8CNCdtmLKFcngdordRcupH8N3tndoUJkwGGwK8EtYf8ptMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvFTEjXH99157RT3PN9hDUfdNR7wSWEsjkjPvGSUAKXv42JuQdg18ybtcKStXHygexSdnhVvkPrxZThKsU847F9",
  "key1": "5DG2zv8Y5iWeAwZfhQeRjKc7E2iH1kGqxqwfprT1vzvLyoscQtYJScpQRDibSovASqcJjwPVqAt6jmQzhzbfVQ79",
  "key2": "3PHESnQkM9wn4fvLm8y9ZwR3vFfpbUic1eBohT8BQHhZL6Yvxxx1uQmWt4jWf8HXKQoWf9r8JbX7AwaEWgZowBZK",
  "key3": "2hXi1gZYEG7sSnFGsRR1RKT38xVgADrgYxqQjGrFKPiy9oGJ7SUjFXc759g6VLBgeGKDJ6NNRfC7K5uxvWhvNjNF",
  "key4": "mSdVWtqFSvURBevND2yWsfdubRxW669bfibSXgwp8cyyzhbsJUNgEGxCgBLJgAUxMmdA9zqzooVgmJXdwwAe7NF",
  "key5": "5b8QNgrgeUVqwDBUWCqXNBb5kHRrJipXEtFuZvE1Shod7QJCHQcVJf2FGHnLacUdmhZQoJwM24a7vcBa3XRbHbSu",
  "key6": "3jRqBDMfCp47Qeu8SavgNC62NS3oZHbTj4tq7w3yHFEh1SeebzLzQu5FQfmAv3pwWtSJ9UPPncuBX6TjGY78ov2Y",
  "key7": "3cQPDe3wKLPFGwgJ4nRq29wozpKuCYC8yxh14rXu5Gy6B4SVQtg1nBdMdzZ8QBDxD4KmnBhurBiA4GdALWT5NHym",
  "key8": "o5rffiYP1HPTt4fqsf1AWypgS3hLFEvEdK6YoBN8Bb7iJFyYHsoEfzYrQV5VFEYxooLFwSUuFA4mgkYubtU6Uqq",
  "key9": "3BwvH6QyzTcHo6A6RfLY68kxHMTDYYwwusDRdNnHwxMCRnEubEmfjiTKxHhxoMRR3jqBWmbc9H4NYZH4vEJBq1h4",
  "key10": "3Fz8sLt7XmbhvjQvmXEdsdFNoCyMZV7oosTrMtKWdqgkr1iFG5WKCJRrybWUmGyXgejEvQbfkLWVeXUYQRFmHHuf",
  "key11": "3R2dri5z7z8W8kzBVpdGa7tiAoUx7LfVTfekK5seCBmMFzHRegrEX6XVfiS6hmAVbpcKUPryQpg5SjWBYgjoYjjF",
  "key12": "2fJnHXVcSe3zuAPTNpCFhexofSX15iSCMBL5bG4oh6FUKVWF2i9Rvvtu2W8uSpC4KvDVo7hsrvuhRaoB4jXPmFLE",
  "key13": "4C9DAxswz13nWJwvmZhzFNd9JB186432Z9EAWzc3he4egEjAWsAX5NnHy78Ru8JmSTAAzbhpYH4DJy9Jr5gWdPPU",
  "key14": "4Jo61diBmwcibegDD7XNw5HcpakEVGUnRhKaiybfM4iX6Ydc5hUL4XtUJwiN5YKgN2xM2VXfXVTWdDAQZEM6do95",
  "key15": "5m5FMJ2oVF2tSmA85Ez3HxA3U2ayzXEBd4HKVnwt7AsmmT8wm2uvCnxvhhhgDxXpSFwzxp7n7VEo9dQtkHV3GAD1",
  "key16": "uzxTXAPo4gfQo5SKccrtH6fyR5KsPu3cXq6XDuGL9gdd4MDfbbpsx7RdxKTBdoEsYRoyrfBnPV5dWV7kWq99BXH",
  "key17": "G5WwZznyVDu4bfpuez8pedkn4jS3ufGgPL83wzJoFrqL4Z6tY3mNgexiAmoPVGDt8oSJ9Ctfy55xALWjn7Piovu",
  "key18": "31toyC3WUx1MPLYHkBCYZosCQyq8UBrJ9EuL85VcHmrh5rmW1TqgQQ3yhUPRsrhPP7YEgfG88HGUZBgGmNjKuqHR",
  "key19": "dPHpYuEsxbQXgxPQedECat49quUNa2KaVrFWpMnBcib9ry8N5Pso581aick2gp5afPmz7wfWKyUCJ1Rbjhs311k",
  "key20": "3BjKj8kVL8egPW2GpTi1RQzCuDaF3o9Qk4UNQssSUDgJx2PQ5SFPx184NF9CfGCoDv3D4G7oK93Apk2MtaDRGajR",
  "key21": "58C12FARB3k7jCmzSfFS9EhSXc6VPNHZEug2fUrWnJiHNWXStPmRKXQi4KmWthaZiT6xZZQAUTsH8WrUX12qrzxj",
  "key22": "4EZF2KjiYe9XC1aX2KQ1mSdbCWQo4oGpyTVW4ueJEjARtZQ6saWDvWyjzyhxpSH5jcyReC4iWke4nB2aqLBLzHNm",
  "key23": "e1WYrm7HPG5c1tcmL7ntj4CeTUmjPKVGN97HtVYjboJJRxJdopiLiEMYTZ96iDKKpbTdpsYvqMAhZxrj2rweMqS",
  "key24": "2wfSDE48REehAfPqB5RHXyAgrWTmuc7zce92VtSitEstqrQfNnSywuZpEZsXQqeLDHV62RGcpD2ZEuTjBcKJ4Mib",
  "key25": "3bDwfLAjTqGqa3H6okB221iNbh3xwsAGvcZeJgWoB4SWB6LbzhAtWJ3hHx2KpKLLKS6n7gawhrVLT4yfetTNMi7p",
  "key26": "5ayLuKZm2NrKjAXzHqEDNqhFjtQE45SL45mkjDudgJujRxWrippVYGH6SEzcX7uhaETFhVR9xUcTCS4dh1zQeQw9",
  "key27": "5ZCoy9129xwsrNqnaNsr3zHfJjTdZ1Kx7GaDvsbKwFkCrybBM26eyuTdJapZjozMMPxnfm546U4zV4JtjTmo9CtK",
  "key28": "5mm25LfawE9Kmezw3A15vVzGQS6C9LLYMABfpxbgWtUR6svmzadHiaZxSxD4qg2VumBgUARSjRQcR6hPYSHQbS9c",
  "key29": "3s7Gf7UP7XpzXvviWovbKBzZ5jSj5iFMfUsJAxnGeyzEv5ymK82oDWySujTwL61CtftuYeLCDhectb3QFr2GCxUe",
  "key30": "2Qee8vNasaRxbg7TqzUexkfJzShUAdcfxHh85M8upikwCW9FWWtUiHNf9ahduDsQGNChctruuheFwK5tgj2uCdp9",
  "key31": "t8WdEV98f2CkUbktjq44K4ci1LnpGyeNJEEsZmjB55jFLaR6eLtFiRXNmmfiHoDiywC3wubkjuan4UrCcLmb8mj",
  "key32": "tTu6REAQpLSNeSAVK2eBecbSi64oWfvoEEfJKpSqWR4x4sWu2wFmEwEqQFDSsDs7G1Q45WircU6vWV15dpXMM74",
  "key33": "2UVHQjCdm4azE1xuqHHDKP73PufEXtJgYSFu6tYRzsYJ5NwsbEMqf5m3ACnBz67QRxTDrEMC9GLXMUR84LvoWfW2",
  "key34": "5aoDqg1oHPbbidCtq5VuXgqeLimi4WC1xbFms2sF7mWnhVKyeavkRSFCRHkLWxVPn4jRF2sGMVMk2FJ3a94h9s6r",
  "key35": "3yX1Ja3RAquSzVUUAUpiRL9zNDFnhCRN7EWA7pBGz9zHTj16WK43fvYdzQVHUKYKXw7vz4bGyEkhnATRWZrtU9sv"
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

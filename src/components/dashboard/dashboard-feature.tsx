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
    "2fecQBHPri27RJjkhw8qzvA7sUoKPe5UM6N1SKZECZYxHRTE37RWK8wvLRCzpQK3Y2nxSiY1AmEKd9TPt121W9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMVNFDFNyyhY3UyigTLW7um3T3HZe1U2wEp9oLj4B4WF6VASquks8HaJFS5zbta8R6q1zN4RZJUrNMgJizfGSuR",
  "key1": "5RRJg447Agz1azw3R7wFHWvc2gqGt1XaHreq45PEeHBcPbmtn399FdFfqgh7bp5rgqDfaHnEcpc71euQs3uFPgMM",
  "key2": "5heoZAtj9qTjH1kE7oszy34QvBRxJspx1iob6qWx7ok9yRAHs8gXxFakzVaW86w2LD9K63BgrjgB8Ea2NfVJzywG",
  "key3": "49Jn1W9uTkqCFjzy3fEkTQgLmHfvxLGRc6saswsxAUskn8mFu9s8hq8bASWaZBq4jKQUGqQUYsDvrEEJHpd9WsVq",
  "key4": "3gTm2v2HwJi9wMJbf75zkZ14rgnXDUXNKFGngsneQxsvT6exNeUF4zwKLTNoRwFw8USjf7gghdvNDyBFtFDAtaTX",
  "key5": "2AUvpJxnqYbeg7YYipKMiWej9yTFkaURDiCqyuzcQ6G5eQ8ewStdqkTueA3ZcRGaz89TU3tyeot9HwLKBZhvbUxN",
  "key6": "31mG6wHnM6MaSjePNLWxmAaEA7KUHXYrhEW3R4QRErmGcEToDRGmWBGTrk3gGZjLAaWC73mX4fbkDZWgZfeJwRWP",
  "key7": "3tLiakxKhXXuSAX2wq8QeF7HbaGk8hjCevvrpAiPyisyPh2JK5KXEpHe9TFeEoGPrjVWwHi5PzzG5dvsR7HYTHdV",
  "key8": "4CTStsbLoeZSGMcnEdU2X3Mkt5umSHZuVHsEmTz4BfrYBeexqu1NCoWxtF1SRywY1dqg5T3Pez9xRgdcqhGkRiN1",
  "key9": "2des3ut8N9og3t3E1BNcE58eaijrCiGvmWKxtphkvXsZ4VspvYn8mtsBo2JeL5qywUmsPoVRkJBXeaTLfFtzVFx1",
  "key10": "4d51fcfWXUuNWxQvzr3K8ihq2a6SLAypB1cB6N6rDENYuVQyKFiYzCrUF7JAgjhnAWZvm9uDMGEBqp7xKhoXyaTP",
  "key11": "2mtTeK4kfQdzVPJTSzuJM5GhqA7ZiqTi68jmABBnSEixS5DZE3dCPzxbMadB1Eg5JKKschBnePPpPjGCqwb2A2NY",
  "key12": "2nf2Gx2hXAQTbyw2vLfmDA3jKNoHKPDR7zPRkkYdUWoCZn3oENcTAvV5jRqHTi4FSJenQNkmKnxiqRnTC1ceCkut",
  "key13": "5Ay1MqHmPGme8TR1jhf34yx72QfR6csMbiVQaeFnZbAqjdJfmP4YmKzdDnPMXwh27iJSjkuGpMGC1eFAGjdLouCu",
  "key14": "2VyuaE67H7rnEjgk2eVuSA72gEhf7p6U9Qg7EH9epjppyQM1Fi59frU8P1PiZeGnDhLf7crru7rxqR2xZFwsu94W",
  "key15": "2W1oa7tWH2uvTTpypEvA3vKbhrb4WhMuPqRgr6C9Tv25yAH8SExhKXWwb96981fsHFHi5wHsPpGDLkdwPvFscRx4",
  "key16": "2VXRkLWenRK4bbvKtYEKz7jCqzXApa69Trqa15wJL42tPtAi43sPmSFg1gZKugogbefZqjMZE56FeLKThWhXTk3c",
  "key17": "3NtrL4NkRq61kkTytYaxnAWziVtgPzHAh8MXxjnsUhQYAoxppAZ3k4w14ZGjsAie1itN2g6RbMTjAsaMschtoGnY",
  "key18": "5eFV3HzUsktYGbouQxcVXwGa2CwcA6763Up8NbshpR6dJnAKMc8JLxF8B4RSKBLcKnxGAyNNRun3BLa7M84MMipn",
  "key19": "4x837KTjuus8bVS2uRHXcQ8qAgpk8utmt4dWjgkAHCEPReoikLXdiMYZWZSZMg5SNnuwq9ZvF91MMPMzqiwposAq",
  "key20": "5r6kCEZkdKwLj3dzUy1UJKdh3iYhXmHzuxY9eV47hQgxpEMMtSeAzwuwpkAKkAxMQ95ET5zXtyrZEFv7cKHG8Ysp",
  "key21": "4asU9L86kHb1ry7UwAtqA25TZ7STpujZbaEHTCCnBhKRbhbiu7GyGh1R5jkiwuQHTgV4xHYt2CqG2qnMTt2DTjU9",
  "key22": "2NUUiPjV6jM1ywXVGF2AuBzeLrpr7vfSe2ryUXkwjkCB7vJRMWsxZbkuFAcad3MbUQGQQJsNUkmb4oRboCuvzVFn",
  "key23": "5wob7MEcdZuBLLc8V3Deug7TnvoDc5mZT69T18V84cnT5BHPVHtAYN6uFHopV7hKpw44ZBqKhNwsGe1Jupq4K4pA",
  "key24": "4D8ZxFTy9Vg5uc987MvPVb3qfkBRkaQUsZWEZ1xHQaadZDa9L68iL1z5d1gseCJxgUU4csZxNcEGDLctTMKMYfJd",
  "key25": "24gBCHgoLs7xgj787N72h4qC3eqpk2nU82JdFwsryXTgyYzUBHCY1q58xY5HanCWdusxLRC3bfpQ6nH4A4dXXWMV",
  "key26": "3mzQF13M71e5PB7qqE718Sd7u7b8e9Xv6urS8GVuAqhmi26ifNkGWdax1Ww2T5MEbiP9nTPFZFs5nqd7yccszxR3",
  "key27": "4ki1Y8u5xj2kmTHimz1W3MwkgraYvkZT5G5BAUBrwsovQM9pSn73ss2hYykSXaCpT1MzwQA3kxJnckC9mXCUstVm",
  "key28": "X5o8HdNifWNvn9CaYPtv1foYUcScL2B8b2fmkvnGQkzjVHpgLdDWrRcGbDHMtmVidyFknGLhoXBPQJdsTNnXoAj",
  "key29": "4vsY8ptVtKQV9hL99dQQt835Mq1jemU2q31Pa4mh1kQLDKFPGGuGsrRKJXrYpdg175sqt882kYhAMXyU5DMb3xzG",
  "key30": "8iVMDDiV7v2w6HF7Kaf1WzPQ6yAueUWdhd6Dmvmz5yZkRDmvPLkqcJgjnntBiY88ZTZSWTTq5PrzkdbQupCETjV",
  "key31": "5bktpMu8owLvf3WD1NeZ4yMGuWayLEzZtyWnbcKWvy16Siu3Gpe9g6W1VZVN58Snihic2y1oHU9W6UpQ6FUwzk61",
  "key32": "4MaN9fAwwqjHBTHxAnNTSteWLnMWS92HcAc9CSNVryy9DwzBGuMWH8Z7S2Xyw8eTkbkBfBm93eUCHKeTerQzJ2br",
  "key33": "39Fn4KZXyRAigKcL1uCugiiSAXQN6wLH4zpD1pPvhHQbNCkSJQswipP1tkhzrRdt3L6btpjxQToA1v4MSFap1kgc",
  "key34": "5fGdwnrzJ2xtELFhtb94wcYrPSGLtXuSjW3PqhTTHLByxe13hF1opdqe8T3QPSnUZkCrz4A6u3Tjq93Q6ABryJGe",
  "key35": "5JBUJuLx5tAwfjZCRaFT93CW9CLQCgNcL9j6dpPeauCrV5aQpfqQEnmS9gBhkzoc1iup6srKdtLY8NkfhM4HvFhZ",
  "key36": "28BbouQHFJdDz8GQje2PFpRNskYo7JaJtWN8GgtB3Tf1pnPThXmTcocvmLVfZKzdJXFb5WgEQ8DZ1yPz8KcHV89a",
  "key37": "3VsaHnQ4GoES3aFMbLCSUNwair2JfFYzXmfTtkCLBc886sHU1iuYYNm7UWB8aptjqDfo17rXizXCJuJruUri97Pf",
  "key38": "5afbM6f11dLRc6VL696QwaWbnH5YU7VFJgzADRbG6oN6uNmBJjHz6kZSByE2KLi7syfMyLVZc6ytaYVMvGEZRrTp",
  "key39": "2upuzicb996eYU9S1sPsRANhg6AtvgCsyKAp424aS69wV4qKopGLfJSg725rk9yyDi86NPeW8CWVuPoqQ9FHL2te",
  "key40": "44RiioAfWeafSPxTT6fR4vurXfVFatbwdzhrhYkVsFjQBgmihgEpNC245xWGiQggEmqoMPvzYa3Ej6CzVJJw2B27",
  "key41": "2W9AoS7ncX1nFmqLg2p3A8AmBzdAzeFyPS6B1fjtM6rkCy12iNivDtAwPGpFmLdtbhrgDa5zHbCDB5PLSo9AUr7P"
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

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
    "3p8EfEpdxjyGx5iTLHkrF7GLnkin8fLjMK6hdT5W8wEMoCdN5rxBXnGjsdM9dVqWGCM6TAtU61VAVhmevyxvyRWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9EJLcTGvCFSfF5SnNDi7GRZxRQoiA4hgGExJw7KWAVw7Lh6txeveXVEScSdv8n9v8B9qVq1PoV7sxa1fYBZdaxL",
  "key1": "pGoSswcwsHZ3g4PAwNGPmQSBf4UhGKpSvEZRVwidTaCeZqdQKs36X4UjgsV25CznqyTwecJkrmRvmnFi1oFdCrV",
  "key2": "3TTGwCk8h1eLJNCrpnp5UPD9eNeDhHbijwvgZqoY6NHNVdac9nvkCnSryrc3ZCBdCYPvWP2GJFjStBTQRz9sh8oQ",
  "key3": "iiGjv9RkFJ2hy6A8dhVeVDthgsQgXDB5962GX2UT7uWFUtAWvURLhbCED3yqvP6sWew2xZKzWrESPLh4JgA7sSb",
  "key4": "2WT9zkwq2KK8kPE1Y2rXZdcQ8GDxd8FANzDAb5gQ6CMcL1ZSBmNeiS5TePwDhu3L5CP7YF7d9J8GkEsLLbkMKBby",
  "key5": "3n97Y7pih1GxksVA1Aa7dmafN6r1oAXTnRx3KhMvuA7q41eNG5rBywdSmgMw3byid5cJVMhKvXAohQkDNsvfHbG9",
  "key6": "3dnwn2131EFdgjV4B1Aiq3DrvSfLrLL7JX2uzjmmNkqciwcCVD48vUhJd41VKBzFhm6sYpwwUNCYv233PUvAjffF",
  "key7": "48zL958hDf3P3BCJsyVYZMZqnQKzDnZaciRztv8mnsZpiDdpcnfHk3JerdFLEVDSDKzqs1RBTktEboyVr1T5oYb1",
  "key8": "f7yhLu5JUNsfMDmMexecKjQsTwZatsQE24ygEZ5pmdUdUig1QCZ5HdfqYUKJ6pMLMVoWhB73gHP3X4t2TwTy6bv",
  "key9": "5AxBDNMsgwVAjwmpf9pCWRf8MWZigRagbEHwVYvVT666GmDMVp8o12j6WihQxgMpYD7FNZ572aT1772rcegUJnbG",
  "key10": "t8g27dszULUtSH18WpuREQqMHdKzYrn713VvqJ9gf296FvJj4R2aDekr7pxT9vYpbDh7QRq4Efxf9Udy2SRABnK",
  "key11": "2gWYJ9noXSvHr12qYVFR9winYgBiF8YGC9LybHEsebqCvqAoWjdCfgompzgQkjCks9YcDRFtyWb3EA656rEM4ifN",
  "key12": "4eQQhY1EbXLvziWouKj3t8TpSbnA63KYLBH1ucSeFT5x8bVM4DXx5rmmattQ8qe8Mehuo2nNBQ6izJfJinbxGNHe",
  "key13": "AZdPQThwsnZLr1HCAHeqhKo8yqhUoD6PEtMQRT4cVngsk2nBXaazUt7LCr1bZQWD6hv3UGVsEmuG5wzxziGSJGy",
  "key14": "4KR8FYKJmkHJ9S8V7zPu4bu7qfoqGQLf7TqZ64HJ6Gfy62qvAT5sGQ8qasLSM1UNik21XJeFirtdTHysGJUfNS4k",
  "key15": "5Px5Fwo4iMXWpsPAwSZDPd6BqrcTtWGK39EkGw1sWsC9sPtzWKzdKVqifSQPrGJURhUTnestaViMeDVrPXH14q8R",
  "key16": "3GVU4R8RMFBgbsZQoWfFVijao9BhepBiTKo6wchpFtbGq3WD6tTU27eaJVpYoSDuz3nifa81h9jGN3UqTQGJwnG4",
  "key17": "2SF41tY9m4BN3R86WG7rY3pLNCM8iDtZrRKYZovpiZLtfifutjLw7sPaGaJo3iYGubmyFFKeJZemKcpM5i3e33aU",
  "key18": "55uW6Rqxia3KPVgHK5f1vFMc3o2h8hLGejTk3oxmNWBCxRZFMdDkD67r2SeDuSRKouA9hti6qr3WSzDRz4bDyqN2",
  "key19": "iq1TM59ZMLSLz8hEQ8LMRomqDgmkyL1DZBHzTYWjYQw6fojq6mpR3HoZUXqCVQgB6LQLkpasqpa21e7djauUGy2",
  "key20": "4QgSo3wtxr8YNoo8GksDvCM4w3ebFpQYBwRhYYzHxaTJnXUmPRr3aftDaFj4xPScSJ2dZJQAyhKYa7yuXN3mLWs7",
  "key21": "2XP8zwraQWvXZnCH16uw5qySQATNtfGyTvskvPudHRdXTvVfuFhmgbFqcg6JCZEwxAv9aEpong48t7hz7w9fJ7RF",
  "key22": "5YHEH1g6JvPN9pwQhciAZ6EasaAvt9Y37giTUKVLkCiyjVt8GM2N3zQA1wUtSmqMBBjdfb1qLg3sEzfGymeDSwMV",
  "key23": "5xgWeEYSF3HQG62bc4TnGrLMeLSFh5snZ8aYqZ85bGZqjkc6yiJPxw1yEApMSArvGTPJ6W3B9sBrrHdJT5vpZcen",
  "key24": "5SaQWUuP5RALUGgvLDfqDYc3aGuTqCyck3zaLkWKejSaSKCAYNVSKEx73boAgFFvQ6rLqG5ACQuN1dZJueYSmwje",
  "key25": "xZDyvkG44CAkAoFUNrfVtr3QMJhFazZTJv4dqEKQbBJvkWzXKRUnTqSYrDuyQw3MF1GZR6fKK87v1gpT78yLeyr",
  "key26": "3ZgyiD3MYy4L5RjrUMLyQiXhuF45ZhQMwLJPM7ZW77JBJkb3UTEtdn4MdcnoHbPfWGqWQvxBKtZapsFzfuQqfmbX",
  "key27": "2NFmG7jiW3q75xVUxeGvNZdSisuVvLuTWxq29i6SpsN5sk9gLzfmVrR2jcBvd9mCiRgJBt2LeCyK1JSjcfeXSwEc",
  "key28": "3KQm2Y4DADAokFo94773bfkX1btnWSWLrFQeG58XTaNyRrin8DkxzUynWZoXYtj2WgbYtMHaMJpoCNuVpmep3But",
  "key29": "3pWh1jxs4eqpJjWxsfx2toRcv35RnXxyJQFHNPPBYPbanUnrmqnpNyzYN6bzMcCeNFrJQU2ZqGVWceL5RTYG4D8y",
  "key30": "46XzEqB1cdivwWgcKx3bWLY94kfzwn2Hat3AKZyzxmE3C5NNnqp7ubFkGLxggS7yGwZfPyX8mp3kiuPHrJDPb1js",
  "key31": "3KWwzDSyzmMh7fxNP9vTvGcCV3yH5Upfi7TiyzzUuooJ15BupHuEMKLTKc5omcUzuQc3pBX8qtxtKHjdHdGAXq1N",
  "key32": "5qiEYFPypG2MRsknL37fHmyZd8eN9s4cXK1jprJgZgS5W7PCKqh5WewEuKKTJB3mvvrdVnhjtFGpESqzRVKirFJr"
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

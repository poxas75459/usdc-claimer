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
    "5UwHY4ubGBvYcoyLAF51ddWANAYynXnxaDQCwhAuuVqc8KKxvMcZoKt4yLiiGFQLe74NVz5kREyJaJA9WXUFk9cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVKGSkw4Xg7jdPVgNFzYYvT273PjLbccfJkGXVyVTVpTMqbhBWKRVCAJBp1xsboeCHUspxQiLPiPrKqsct95AXs",
  "key1": "3GZwe8QgHLgUYgs9WurbRxa7TcmaXx9wc8ykw5teCs1EwUazyVcVKsPpqB4XZeJRuFQyjzTF7gDG4HRVT2NV4kTb",
  "key2": "45TxFJtv2PiaASBmvXh4dS81XQ6rumtsmjBRKpodU2xQCp8ReZNAY3GrHqj9W7RbguynW81sL4CJyL3xM1xewkJw",
  "key3": "2QtVhefW6uhwPWDKvLdGyZGNuWpxGr2YLUeZyoY3UjPM9rH8qnC7kXGjZdo3dU5zXnMKT3nQwU6ydrmHh9cm4Bq1",
  "key4": "Q5sYxjpAgKGEPC7sDZkn8MSpbNtVTBxNPGJ6hVnCRUAHRdYHhW6utQWh6bHCW4Zd8MaLsyo4kxvnA61dDDdiFvs",
  "key5": "2xuEAxhpG9skc54NB59Xgfead2yYWukMpgH8jKMmRVoYbtKwRTVvnxS27QNVaBUp3eix7UVvQCYbd1HMqRNUsS3s",
  "key6": "51XFwFtAtjwXVUqDL3b2uJhho2L8Bciuhx3URf7iubDxXnjmZczf6YigvACQGE4aYYVk1xTq7WTF4JVagiXv2m9b",
  "key7": "5eGuU1Dk7abuLHzwggXDnDdrhSAVeTmeyJdfJ7CRdW8Xd4Hy9DZ9CJqe1tykiUeTuhszMr5SzjgT8pU2vquqWPqK",
  "key8": "27Y6dLKMkqRQuD85ZwLshemc6N4griqVaVBQJRioiaGD9uGxNNbdBzPHA1oEZ6kpwkYJT3GXkEzmsNkyjjnVgUJM",
  "key9": "58SwPztpkp7pN1fJtbgBMi9mXZ97Ddpt9wMPNUP8cZk2BviS7NeYvqoBocUrSg6uawjGSKyomwGBJXZXYSZGe6hu",
  "key10": "3vopDvzVwgBGeFmHC6McW6rfesQWeQWxvTFTmfbNxsiofLsS4wk5vFxZeGLs1nARab4wA6NEDjF9hjWEfv4yYDYC",
  "key11": "2gE1NBYanJyy2GhkS7PiE72hEGkhx2EPekWndxz4xowzitWyZwjQgjHVqqhBWBG63F8RTjkFDBsFdhhAhoYfXYA6",
  "key12": "5pW8rd1eYG3pbt62aTTrp2b8wrbA7BcVjxh8Hzckc7rKAjgCTfY5d6rFY9c5qxD9j2iCKAjyB2Co2ghc8uTr1bbK",
  "key13": "kNerv54geVxJvmLh5xDAbB8kA91b44MsDyuTz1KXeiPNbaBaWGdmUJGqdxWK6BdMWY4U2Y8e1qD6uRQhEF8dM9i",
  "key14": "3VYfkFU3y4eQiKr73AgrVuZp93KKU6W81rG4SzAaYrLuQj5k9HdiqW6sYPvG4gk4wMGwcdVpYcxq3E6sJAwpmPDe",
  "key15": "3jnoTpr3gguA4UjrGA1a6bDGCFG6wMzBd82qBBVHFLqWn8DsRAUSKHRuK4yF8wX2TPKUnKWjfYjH1PSXGgEZyu6W",
  "key16": "58EWQqWzDaVYMjB5cQtfMt8DWJXnnavhVGgSigpakRSZ2H2L7nMUBQMHa4Fjgwz8kRZqdNDPkaQgsyPaHiG6Sbmk",
  "key17": "3mihkRe1T2bJAyXuh9m9X3a1hSJXGNZ14VpgBQ2MATZQHnypRmmQxUWh89CceGHsbbD6CYfZXufi5ctWsXNn6taB",
  "key18": "2bvC2bsfyyCm6XNigMKpYyB2k6XssdPtVSDY1pVenF2MbUEsxPYj2K5nWKSmQNoDX7ju1D34JmnAVY6q8HeiKNU6",
  "key19": "213daBS4CCnEynyAR95EHJkBhd7QMBAbuwv4GfGE2B59jNS1Hq7evB4fKxLJY8ncuz8jkYVrZErtZxhyyhtD4B7Q",
  "key20": "2x8pN8QSJeLTC1WZ97XR8YAY7yP5RxtBKf1KvH6w9nDQLv1CMR28EkQ5p15SaPmgrLdJf5eszwWujpJLrpcT6aqF",
  "key21": "4pJzVUCpVFDydo9pMMmXap2USta395FWXCCRaQ53SyHTtwNtPVdyf1r94oeWFUD7YTNQE9HFdZiTJvq2sy5CkCSJ",
  "key22": "4zKeuB5sdQkXGFTyWyZG9JPSE69biXH8j7puuk9vvTyUhMkC9PM2JNub7zcNN7LQsAPoE4gXUpZmu5JF9sbGUf9S",
  "key23": "5xD6AozXN46umqoLhpppya7gbxemYSzEwuKmiMu6MYKfqvZFjimp7waZkw7qEQ2H65Ku9XVcnZLdvfR53toarUeM",
  "key24": "4RnQpwaZTN23yYnLc6HPRnKC8VETo8NJEMf9WvASbLnPzFTndahMD7KQsbCVn72gjjXEkcDHcuQZpT88wVgh6xYu",
  "key25": "4ZFUwxV9bXmf9hPbgktNNb7evzUr6XSDzij8q4pFmeLQQ84UNZ7tWfBNNxNLbnN75KhRG1uJjJyQ6gSwg1Z7uPM3",
  "key26": "oygHeGrUR3dBbBosjdJtEaKCqwbkTwUusjoB9GWPB67WEnciMA3jP9GjjSMoeFQvfQnz9kymPWAYbWPYYwo7HSu",
  "key27": "61X6oxNsnE8USWUBf7uLCqabkwtP5WaX5mkCpQFgUNnP6s4uxpiAUoXdn3DhceDb7SzSiHNDRPaQHL3yWxcFrLhr",
  "key28": "7TcWv8TyhNshCeLt7hxzuH3DqiBDDHE4hq4yS2bym1L99pSoaEf3z2jQ3x2z4944WHTuPfKve3iny82haWqnAzU",
  "key29": "25ArMH9begEAVQRbVNDVjX15X77Zd6yVHXAih93gKGpB9XsSwbW32QYVvCjExAZ6Hd1eFYDhgoBmZwdNRU9y8rqw",
  "key30": "4e4BMpknGemyLVyfmgnRqjdp4sEZmAmuvDMhsxsLgftvvaWk3ea54Gj2qinwdPX5BwdJ1ZrgvFG826T7FTn1yELC",
  "key31": "59brEz3GwNdYZLYsK9LiixEUWrw3pNMxLqwnqVDzPEDJv7bnkFXgtYdhLavVnf5qqZYTB8bHGnGKEb8i2JvA3RfN",
  "key32": "2iiAyhS2xvUxoCYYbCpcp5qGATaNSPmE7xLtTqtq1wPHPWpTzobf6gFQkLVDSNdMChRduWJdoAZpRzNJGXr1UenX",
  "key33": "2jboJvLYeD6XwhAc3D5SMfhg51jMEBFV8qcYMa8Wyzy6VR238SZDZZrE37vb8uLbVrhuVYswAQQvYQptucbjhrLv",
  "key34": "fR6VGANR75wT21mc1meAM2XMwu2vSSys4AL1KyDa1aMkKZs7pXq4Y4SuaaLXAr7LmFUFAfKV9mxZF45v61RPope"
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

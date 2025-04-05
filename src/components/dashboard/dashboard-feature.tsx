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
    "5hwnerwA2PfUAvtpKhpeYyV5JFnwnVfdA986eTYq5jwXdD8FPDQ8Gn9p6aB9AiMwmbujmjyF4vzRo3Ms9CHWV3vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRYUJDPGRGjfhig7nqkJfXFkj3mD3FRXacH1NAnUthwPSd8GQNwxMvgJUiC8FpoJrhdTrKu8aUss8489vFvHzgC",
  "key1": "53SSQvcaAZ6mv55EWkmK6hj5PU6LUZDPhMdHNHJPTDVju7QqSTtNtPZq42QbDcJ7HBCYprhHRNTnsEtfZ3SRLQTZ",
  "key2": "a7qk1zwrC1jfZEpvqZEyY7TgzGCvXRpGEC8AVPVFoiDerg1GraJ7D7eK4yeq2kj1DppnyE7uo2NfwLH4JLNEMN9",
  "key3": "62JXYpsBS8QqDEij4hjvgn2bpe7Gz9g2y5j5Hv7QmfsS235Kdoab6rA8wC7rYczErqGoH2nb1WbwtJSq5nUH3z1A",
  "key4": "5fPiLxEC8QMGxHUFC6bCsXhFUPxUoukWGeT8UcGeGXR5VAViCgAYH4par7a1sQ4jWQPtfbizMqjps6f23G4LZ5M8",
  "key5": "5ZshKe2gPbqnv2GVWXPPEVxL2ytJcs7M9yej2URKwdnhoRvqY4bTij9zySu5ve9wXZDm6Ej9BV5deocoSdnXdfiH",
  "key6": "4s9bRKw4qeq86LoA2pgrZBujXSwCDW5vLhZEAaLUs8A2hWSSLyxj3DMqnFL8CCsZiJ46n69bPMAJEQ5GUk7uatcW",
  "key7": "3DEs11fSjrBpNgmctPmRA58atiKj6N8mN24eubHuymVEybpkqxs8xAPxhN5UwqfLPgUZJ18xiTgvtdbYh3TQ4X3i",
  "key8": "aRhBsf2iPjmJCYvLL31Eu6uMPx278gHLrMWhJptot52VZzZ2j4GkSvvi1XXy2PwsH6xw6VmbH4x6jaN2bZnGUZB",
  "key9": "2PB4Q1ywULF4WzNivRFQnjcrJphJ8YbbcTVyhF1k94VNyveZNn3e7qD6czpSJ8fLfoJkKN27zFWyUUvrpHzL1oK7",
  "key10": "3ToKW1b5CrLxPeKdHYsawEg3nX8vg4sb5yKRVmSMLfXpzw41z6kEX2bsnZ8TzSWi1G9hV519ZjTwKVLnP5deqiBE",
  "key11": "LJPZFVqUo9RSYnMtc6Q39KzdXjbURYQm5JLV8fCm5Rh7QwkChy7eCdGqtcw9soRAZt5FMnLF5jmpjeHFCaz1MW5",
  "key12": "4fVAWasreQ8qsv2AzFJet7VqGWj9rvK2zeFaSQtoLrNi99b1quotZtKfuMgKVwja3yEPoLpbbRJx4zbff3Pmv25U",
  "key13": "5nAs6u3EqfXL5rNkAa9sdyPbqF55HMTGyTGomoCdqSqooJp1exKQvBGUxgeouu93YyYJTnq8PqqRMGeXavL8CpwA",
  "key14": "3e2EnmnyzYJb4QTGNj3eUBQDaGXzpmwuCUE3d3y9Sayec24tbZKKbADppUzS6qy1cU9WGUtmUiGzHFiWVZtzKVcF",
  "key15": "2GCtRCpFrwX1FLC9bQg3TN6GtdsaiNkrvmZmrm2K7E5CK1DXoFEbXk52SXMeqyuiMQZtWbUdV8K4PRqdMi8mjZFu",
  "key16": "5emDGwW75yryNB22QUdiU4aH15KZLPiPGpsh2H2BYtk7mjYRksmWJaSEsxVB4CmofuD7YaCc1rCcLJb8GUZ3sQvA",
  "key17": "5AggJz9h7nibnm1uj8WZ9vdqGN6yQhLxRWn1DuHYucDb4bHpFaCztUoY5CDETYRzN1sSff1DV9Uy57SwVYQJcvHw",
  "key18": "MuP3cKgJvUz4GydVx4d965nqaVyY8k2Rz8Rq4Fe8cBhpBKNj9YtDQmweNd5Vzkf7TEhuZZD36NyMc29LmAbTPjd",
  "key19": "2ZLXrZ5hs8Jv7soiPNBAnBSkHm2o5LZrxT5BMaQoN1effyNbEpLGsVkKpuUSwoqmuy95j9fAWVCm8CamaV9R9H4C",
  "key20": "4gcCptkNfQFc9AUShzHfVwqpwBvGqShNS7znC5nvGeuPmM9cXK1H4T76iHkSJbca5Gnmm1wZrBXGfnN1F98togmv",
  "key21": "3MeaCE5qiuuMhYGw2wQ1oBVUtLnLnmpWiq45WGxhP2SDxAhuPwhDsNV2i94ixUASBRu9eCFpQm2myKrwpo5TTGmg",
  "key22": "26S5qdAF7WcGiUGTJ36koCVa1SM78dpwUYMN8azM4Q8JtEto7zHU5ZTtjAhmMZ5hBSzo7k2qepJp1HPRA12FzMhk",
  "key23": "PusdruQh6u2FxNyYqzDryghxniNnH3x2PK7pMycw3wGLmtMVLFuPs1iwfLkkGZDXjYNgofA3ggrVKEj3fcg1jpn",
  "key24": "539KndSH8M7wH9ytkzcF1C6YfamT9uxEZ9KzDDXS44jQcYXY7p4HRoQhvJtEyPraj1PU5MsBhEZH9byRrEwBufGC"
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

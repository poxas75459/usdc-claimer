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
    "4Vky4hyTvVgLJxNLMf1SqsviTZQBPVtRKmr47PAiTbSGhPGBSKchFrDq34y6AsxxUrMWaPRUUENd9f6HGcS63RMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHTJ18n3pKs8xXtSfPjURfyBs5UGAjvtLPFvmfG8q4Yij8kuQCygDoDQGCvqzMFpJohn2pYqvd7GbpHXvoKni2C",
  "key1": "Xxu9G2HmKDfjHqbeedEDbUwDQ85ppCdxbdPvf1CdJ9oXLi7FjSrZVkCwNqnAFDSxsBEnToajvyRyMjuKMYvSJrc",
  "key2": "3Tt1jSpXtJcbnxH9Z1XEdD4yUw1u1oKZzGrRVUPQxY3jz7w2cNX1XA7iaEBBUTjsFi4RJLkareSHcZE8HmnZUGyA",
  "key3": "27qiD6w2QysHbBn6Y3Dygqo1oTMBBsmwNGQ171S5C4R6W9ERCBzxQTrDYBTJQCbXGZSHpAFhU9T4Szk6uMX49xF6",
  "key4": "3rCRRdV7PCLoDqxbAMfopniajAPaw3Rrw1Pmjr1DDqCq37aixYhgmRApCUAvxG3LvH4sNyebPQGmmi5PwacC53Z7",
  "key5": "2kkwa9dkFpFqcBHyt5jAVhjYPjwFdYQVHxpvHroWz4L16YMBq791JdhDxBvVex5gBBYJc9euYA4vPnDigbD3fL2k",
  "key6": "2nxkqtNiEHrxvL92hepno8xEtcX4CHx3KvWKjzaeSNG6KDetE9BUzSeVnK7vo586PWboqpUV153xFUCXQVQBYUv1",
  "key7": "2TwJ3jZ5rhEhsSxzH7gPQiq3UV5yAVbxHdEEaMjMepRzGSiPaDRMomxtLU5ky5w1kEQcCzrbFjHWo9KQvr3Nq8wn",
  "key8": "4vivb92HxFyX2YQ6pfD4C3FqdMbtGBbUvPfKsgAuD7bJ2wN4ftoh3rs6poHHYCAcJFmFzZbj4iNugu7VPgc4RPX5",
  "key9": "2cW3UE3sgakDzCdVehhkYxz4eLiLLhq6VmjvtD7T43XunYUUKrSkJhaiT6nWZgatMnkhdJAamxTrSSgXBQm6uoSP",
  "key10": "Gctwvwb2rsKUkbXP5ckzhArHGaoVW9478SXKfsvnQgm11qxb4ujuyGTcc9P7mxH2cpyzp5j2S23wQQa7oDZCdoX",
  "key11": "3Q56vb6KoUPXTHSu2WwN27nAkK38eRihkYaj68X4JiwCbXjRrgxRu2CSFsjV9mq1ypqpofVKaTkgbrrkJQYH8ojm",
  "key12": "PFK5zYpKC5QK5mr8saMhJkVs3VBcEKgYwTFrfM74xYrtTBDsavReRNJd9Zhw3o8zmofiQhJxWtAZ1B4Fzi4vqLg",
  "key13": "b5LaxTq2Me1ifghWFFx6ctWutYjSKHm8NjZzPWG8mkqkcvtVR1gP1EmhiJt7GkuggN86Y39X4pM5N6QXB73Awmy",
  "key14": "5p6dcy8dWwRdJEhsWZgp8sJWGJTiZwhfAYiBQ4poT2LWA1GqhSiJvdFNiv5Fz8NVQ2uyT6RxMSijSJFo52pq6Rci",
  "key15": "4TqPPPSDqQqgZEnb6XTPLkk7LYaM6p43vRi3r8geDZuUSwSLXkC3cDMTPitWRrtTnSDaz4wBh58frkAZQwfT7sSp",
  "key16": "2Yxde3T3PA9B5mDknR2FKcYx3KXDkruDa8SLvcwjK1CMrg6jCYH5WyUeXck9ZzHkZRiCCyEjuQk5Ta99sPJHFvgU",
  "key17": "fJkJGbG4LzBzmqaqhki3WUH6zXmD2WSEgqvsdRijfsnwKBX8QLTLqxz8wNi5kjUq82Q9CYH78VhwfPwyzgKhcxb",
  "key18": "i88UFji3zcL9qW7vNZYLXa6uPEJK7S8trJeYV9QX7MC2rCf3MU8UGZ8d1oWQsq3cr7tgLNQPgPEtvjRWJf34Wu1",
  "key19": "5A8e1szFDygSmPLC6ggXjTtVBXvbEqV93THNq5LJSq365A2TfMkxG22TJq1cRiGEnAxmiFFsKSWiqRhsJXMMsfv7",
  "key20": "4PpkXcx7wEtieYHP2qJtaVtKmHEMpPmzpXgWK3GxwY9fjoCiXv55Cgpz6LjwYU5LkXt25JK1XwV4Gb1h23JDc6gB",
  "key21": "2sJtnNd54RWsFCMFX94GiXxbqK73fZSPiksbiWz3wzEqgJ7FPmhwPStvBw25Dw9N95Df7DHABCtyHrHz8zYpSv8B",
  "key22": "551AefCGUesdR3rREuF6oBD86AfaAmykr8QanU12akvF44PhkLunHmHfVHM58CxLKdCroVqS8b15QnRqsTqKj4xk",
  "key23": "3t1h33KxafRDkbks4qX5m7htiWaDt4sn7xRyUyXFZVMBQQXZzNqdbt4nk95mxdp1j6GeoinyAgXS4gfvk6dTwaYk",
  "key24": "5YsUXjFoRqDRYWKd3GzTQ7jv5CLpGHJWm2v4dowVs5G75EmxyLvJ5cxmBd2T9b82sgSeWRdmhipH88V6WU5yGTV8",
  "key25": "266cpRe5kZg6PPVeRWvKdBuLDS4FacEqVgx66ATYD4HuSQPvW5xyHLV7kVDq25ZxujEnxvXbouL17VATbcjBzqCH"
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

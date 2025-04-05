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
    "vTwkiY1tLQoNpksgp4FGzxQff2JbTME5H1L6yC8SFFmb7eUFhWFJvkjZZVwPyLSGWfcU3C4HE3yLd3AHQVmASTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvmND5Un3s1sJ7Leyscv6Kq3ssoPZtw27Cor8tq5u4vezLRB3s4U44oHTKzYW1Wta4mvceNPxE2ePe3BahsBTdZ",
  "key1": "4mF3FwirNpiBRco8tn8YU7Y4adammBuUyWdFFiKf4Zwxyg4VM9r4t4pfqSE5tgjLzyB4zHdNKBCHASrFgDVFiFfQ",
  "key2": "UkDmZdtdSXwp7Ng9mCLmCszuU2WLT8zKpHkfKZqB3EzQVhKBAd1fcwSqNpDidUV13A8M889iCaAa5n85f5mo6L4",
  "key3": "2mTVsqY2WCJn9A6UVnGdn5rJzD71AhJcXD9k5uC6G9spBmLX6R1VgH9yRKa1SCNJxoLo1QQDLNB84Hxrwfe8MGMe",
  "key4": "3Y3ZEBUz2rsrBgsRYEr58y3WtA5nQ7p1z6qUdnVL6wpKYSpcZ7PVQEPWh6meb2PrqEs7gf4jWK6pBZjPrjHXeRqe",
  "key5": "3kSLCmdmQb2VjYnc7kUcFHMieHZDq8koP3iCcCMthjTf6TQiLUVU13s7k8SaK92uLjCbsmrsvLRUYZmidRYmHmN5",
  "key6": "4Wo4TRWMxunRNUvWS4gyGoYogPCveowQNTVrCN9adsikZKRTZbn9A2vjLA4LhmHxpyUD6e2oHuVFPymp3CfJMktm",
  "key7": "4dfrGn9WNB5X33w4B1TeNk4sPgBZoea4tBQxYPseMcv1wVLs9APkcjVUJpyfWG82eXj136kiQVAcvGrHW5vcdJho",
  "key8": "3n3D9ekWjKyWn9oGsQ923iLqZ88uxzE4XcodBhRtkKmKUX2B1VWaqUL3Q7m4cFBmNQgmouTNEHL1yJH9y7DepNWj",
  "key9": "67XCR8zYoFETkBV7UQiJF15eKYKuHgGdM8ZAgM67PBw8zjv3qEsQbRfximTwkia6HHzbV5cgsWwPMXGjCAkgenEk",
  "key10": "3eSh4nn3NynfYZhLuwzpQBLnUf7vbz5STi1maprvQbhPErHFCLpk7bmNHfDzEXsXk8ueMaoMRdTn45kuDsNYNGno",
  "key11": "4xLsuqvccYe6uKGdew1cGU8JaNJHeya8tReNxfXRfkFkpm3iCUkEub7Av2TL4zUeprxT3hxHTtrXwsiR95mbPmCB",
  "key12": "2RugLSSLgexYZxCUkNQSjWBTkCFQQgT65r65ZqDUUR2s4ug8mvJAqHnbn2iy5G75h9XiazaPFQ8otX2ReKL3wHuG",
  "key13": "2QDVD2bynAooxQ5iia3o2LehbFpdYJg1YgoRETFA1Cpm82tpTspESbsnEE9hJKhhfcpwMiv1owaTQz9JCi5de5Pq",
  "key14": "5LE2P9KYGzemWSnPRsz5UXghHfTYif145bEz6W43hZABFq7uHqG3bqcEBV6w4tuiTLMYT4De9T7SnEZ7dBW4ayZW",
  "key15": "3qHh1GDc5kNEH1d5prKPN2uXYwMtUAweF5prPmmxLfiYwWZR4ujhJapq3ARtmRWBRh4dZKgrjMiQY1bA1qKB8iFL",
  "key16": "3iX2ATzcT9m991idAmW9xCyC42DA8EbjhLLfiuBmcnYSVEJumvZG337JaUwQxKHUFYUdcepQZzAxaGhg5wVV4qaq",
  "key17": "2F7ngxjF5wvBSdNVMytxqw4S4Vw5ZAhNcUhzFmtCHpuHuA4brt9EFLbJShWtNL1ByxNJFo86sAUExD3HH2sfQqAy",
  "key18": "3iiZM9ve12NEbvzhTMq3i9GpmV7nXm2GQbt3yCSqXCboW5gvq7AapZXYHg3sEhdyrwBFEG3U9iQY29hNw1HH7C6E",
  "key19": "3dhnRmJ8Sco51DXA71qDCLUqbj9W2PaKovSkX3LQ6zNkfnJD2nQgXwF6kCiQqhQfN7cMHPWYAbhuAw4HVgrDuuTc",
  "key20": "2JUnEnw5AhjdyUo3VHwwTEavvoymKN4jfjQhQ3jDeDQBA37p7b8WK4oy3iJbV47ZXWqjw2yxncptc4fLbqrN6eaC",
  "key21": "2hZ5Hr4qxWGsJAxizie14auCFtC52R7hS2osn16Ecu5MJiVsw4MSPTkYiYDmLEJ83NZ8noCwbbz2wHrTziaQD45z",
  "key22": "4Ro4kCxjMMoAoYLcKbWzaRKNTdBJjEfD4csWKmBYuPJ5sZGYtU4rSGKUNbsD7xgvToTQ2QmgeKwXZCweJXGQKZV1",
  "key23": "3qyekYPDFDvCqmsksVrcaU72gpVd9K8Xk5fVPRmEoqRaxtV371pCT3EthsnqyQrieN6xq7PRicYFXw7nCkSbcbCG",
  "key24": "3YeUEQ29mWdezSZDAW7uSUPUaDifBFZNnCrUtbY5s85LtbPEELjfaYKhJVkr4KWyRKSLqJEVkSv3vmhu8KZFTZT2",
  "key25": "3J9CM4YjhGJ8jfm8DhX8wgKzdLzuwKBN2sKH1b76zCcyfh4mrUc5uV7qvdKr6utZgL1LUWbD65pCEQTFe98mdF1r",
  "key26": "4AxEaktkGkCHVyM6MgKs5JLngA529ADavkk8zQQdYUaRLJQiVfyNToX2rzS5RVaKW11czeSPNLTYtDeiweHLdFbd",
  "key27": "4hgdD3hRyX65oXQyFMfNL4ASohjRnybqbP9AdEVZV2h1rkJJw1Dn3Z8QG3MBCQyfFLqjdReeRVFPwciUSePUobTJ",
  "key28": "4mUcFgJ7CtiZN97i1SVAfKYpdaSbE5mhRDLS3DR2X5J1AnGs2sQKd4Sfh3jEBRdvg31jhZApwTvu2LCZgFrnwz6A",
  "key29": "x6dJV9qYtZWhJBgUi8CnXCAgBVHtBKN1fp5az6jNEsus3sKHMxG1wWcGoQEwkHE4Ux9nKVbA4YUQbVq3jt5bzZD",
  "key30": "54Z8PK9gxtqvWnKCfdesGNCf9N8hyBmBbYW3iNeSfjsyQD38j5sZjJyiS48RMCTaNBRmKUXhrW4ReiweLnNjVUCN",
  "key31": "5wMUWuDwVqebH6YHvZYatkLcLGWxZPDCNhgnQ4XhtywZbTrfWVX8zanF49DXfMJ1s4Nqi3UfwdyLQAj8RzJ3hokR",
  "key32": "5tvdph6cLntsusxDmA3KX438qjkL521FjFrv9zZ6H2s4fW4B1Yt4yk2nDtsC1Tb9hvAn4SjP9tkupZsSEeQN5vbb",
  "key33": "3tuxxe3w3QppUyZsAobPeci9YUDgCK5EoUVVzGkVg7XikCgKXvWsbAV1ADiQ71Hxnt9whbMLf8fMkzyXVaeJ7wj4"
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

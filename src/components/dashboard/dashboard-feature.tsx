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
    "2jcxhqZkY9e27rSep6pjimziFu4CTBD4X9Z5HBvU1Pt5jUVK8q4Zd4dLzY4QkJysHzmBmBTps4qJLRAuxuJUq9an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTwKXAs1jG4grShQ5BaM5EKZfJeaai2jBuaBjcRsAUTfMTcDLhvL7zSbuGBSbFDNtznkTxbLKTRGSNZfutjPrPY",
  "key1": "7kgGES2H1K7ZmWQFud6GjNjhVk4aZzgYDG1xeBt2qdkKqThNcPm5r7ZNTA5Lk6QWa48KkBLfscum4xGZaoEBt4v",
  "key2": "48Y2f9G6kvNSCmb2Tdhh6FYsJFGAZRrmJbHo4sAEqKXSuefMhJQfvE6AaRS3ZrCGrvaNxnqsdjXYmH4nRHSsQQQv",
  "key3": "4KFMGRzAM3iUPWaQY86Mw35cusUQQ6pCqxWPp8BRCwQJBATAHqMSBewBFQ9MWkMZkyDfzjSTxRQUGgt8HVtFvh9D",
  "key4": "296m7ie1qhy8yWpHZQvXXWVADbrbSjXSUKcmik3jrt8iBx8B9nCxTfJ5bMGBqHoHKYLyWoo14ztXvHEbNJnnnYdE",
  "key5": "4uNMnq9hJjs8sHKP8eUCGTJuhyZmxm5VMfdYxM639GAnheP9GcVpo3Le5kTYGx6cGXN8FxhJULjzuMWYQVfLgySV",
  "key6": "3KUSGCuPCAthcXJSfA4YKXSAKWvQzkEHeVMPT8ZyngNjnBJe7R5TxVnrxzqrvogt5qcQ1koKXh5X1VkTLtJbNXAW",
  "key7": "ZbKQiq1epX4K1igx9xzDwqRYUHkscGXNCWxAFMyWxrzJqEWJ9M6a4SUggs3pqbTLbWQvrTvE4Nj2zSQd6BTEcyc",
  "key8": "5pzaVhomcoDZuaMVk3nMC5vZSk66YYK1rhutu1RQSaZZpjQxWA4juSRf328hNZK8GFJUa19Kz43MZcvJAMyAyp5M",
  "key9": "2AKJo4g84sLm47hCJru77EXVVY8xMDyvGwwyYRtS7eh9vNfQU76siDUubwdht7zGTazkF85j8vHH7JhcYugzNwdD",
  "key10": "3c9b87qY1VAXScBs3sCvgQwdQtMds7mdNLPBuETobowMHEwPZHFVWGguHcmXRH5KesUUf9FCCX9LPjhuD21KP9YQ",
  "key11": "3rKwG6oAqQWRDYdpCqdWe2YtBbPLMGkgA9vYxFxm8fsCwJ2FQmRBeBxJePoQKSjSxHk1DPmbcADJfhdpN1pnftnY",
  "key12": "3Jc2wMdERkBEDRSZXrUFWz9oSEx3QDpiFZkAbD3hb6rudtNaPw7VLTxjpvVgDAYF1nng6dDVoJrBiLgePLFcTLSz",
  "key13": "61Ph9oz2rWH1HxEfqhecEM54vdrwobyJm58K8U7cRyU2rh53z54g7X2v5V6hR9HELQHTkS7bJXMT3Ef7YgRRajje",
  "key14": "53jGHeTE8ciNv8TCiorzHvCZKD6aYULc4Jqco5hVPu329jSTSuda2Hoj2QXMDKDFwPwJvHtTcNanKgW9N7C9ZNa6",
  "key15": "3JQMFkyuFxSVDTgNgesAuYVnNTd1n7SnXqiCSRRWQNkCgYCuFCVW2nggV8Y8Rw7N3BtHUocojxX724h1Lo297BMq",
  "key16": "4APsfSGCpK8msiWeFoAGLjYPBf5DgkitMeLuZCCrWKBZeNxsHzhCSnWWCo51Y7XbeTspFj8yQeztkxTNwRQpLniW",
  "key17": "3X9TY8eb2P8KVMcWQVmPQYdFRUsUZVtNUY4z6G7Kbm3W1xo6XPX6oHGhFja63Hpe5P43Kh9M6s5FJo3JPg75rpKa",
  "key18": "2MzcqKqJFgfWDDhtGENUHKTvXhSNbVYtrg3jfViKpT6TnNXAxYbNc6MwtocsnuS5gGgQYzPhqaFCQiSALnkHxCGi",
  "key19": "4e1RsdH6EXMSgBSWoeg6h7UA6hw2ZS8fVA287GLKCq7fvPErUdDgRX8dwiSQWfWjRaRXAjwbbyYM4j6bELg4zrA6",
  "key20": "5iH13vzevEVQ7cT3PkmqfcQZyduxKifgPFLqMqMvMrn9AYX4NHD1mw6ZoroE8vW6epCZwV3UmcYHe933ZDMsBaPE",
  "key21": "2zHVeudrLJVEPAihtp8fgkGg8jh8urD8TDEXDvVaRUN2KvrFUfnPMEcdufusxdCcqBEUbF7HcvL1kBb6UTszgp3X",
  "key22": "o5YuUt4g5GGgXvpySKCmRvE1aGqh972esTPPmiZ3xUiy2gmBb43Je9BrxPq743J1fQb17sF3XDQRyEhjutxVese",
  "key23": "66zCJrfTb2UPwAjFfERHBVN6eieoQTjxhLkHwCm1QK1dgB8SgnaDS3dFMd8w2ru9jZJQRu6wrMjBfBr75Pnv1hz5",
  "key24": "5cK49hBgDLk4sJ4CNrPCpzfTV9Gb5sCDfCAwehSwTc772kL7fpLuLWVrfoRn7W4rYaB97P67yn8QbkuYZA5YXCVM",
  "key25": "dZvZAv3VqzGnNTC4uijTfxa7ChKApX3FSJh9hm1UGiN9ZEf5JYffDy5so6GeCc4de1ycAfa4nMQLJXcA2rzjyRx",
  "key26": "NjB8DwkscujH6eUn94zByKXfiPfSGJ4Qj4EkTf2K19WwifLFTD9XA8D9wcgJEYgbLsYXLshXkfhiWzsrZF1k7MH"
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

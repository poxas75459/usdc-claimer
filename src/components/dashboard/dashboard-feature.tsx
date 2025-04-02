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
    "3GEGkaFw3dkwRdz75exB4iLCrTEVjceA3DjyEzavV433GmvTvtLG43iYotUSC6NbT6FVvqxYFGkAZJNQqXhAdz8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HT1vYBymrBNkE1vu4H7tQj6RRGj13nj28fJJXtUXDafMVg6WptUWC9YX1vJvKHr3KKUWEYdquZ24Gu22gppfPT",
  "key1": "3u1aveVyVjEoBZrXoKDGbeNUEfXq6NZ83NphYvdk8C6XBXANL8MvdNKxYgiAduv2jZosctD58WBut3JEj9QNUP14",
  "key2": "5xXBKx9C3TELFtXrn6g93u6CdDnVtknnSfz871Cmtshkdm9tZyQ1TucYb31jpasaUcnyvdWYkcZPiJmzCJiG93q1",
  "key3": "2LMnXQuG7d3bTXfXtibMPMutWusDX9XHTo92yDRsMoHTexiFKqUda3jXbE2y8QBVaD7cx2yS5agcNt2bBQFkeB3V",
  "key4": "3A93grWTw73qbuMqD7mvWPxv2BsCgUKfM37Nw6yCratKe7qDutVyCAF7vtBpQwUWLoDpF2VdLo4Yby5qEKe2hx7B",
  "key5": "4qWLV9YqAXbMerpjL5MgvjtyDkN1C4jZsURHjB6JJMDfuobFmLfYGdbo1SdkDURuwUFnHMMXsWWhwrLCZevcTk7R",
  "key6": "3QwLLVFj5HKnPFnaDgQdNvrrM1cWWfN7yM3KFKtsxZn8Gedis2RBwLmYG2G168Zw5vKiBCXoK98crwEDY3hqkQQn",
  "key7": "4mxotXpGBYFavapjbKE5rqeHgXUtFuSB5SoWvV2hpWdWhDKLBok5f4tf85SrMZ89dNSV2LbSHu66Ank2dCy2H1uz",
  "key8": "3tEfSHVxmV2ZEmCVJL9sjPy7hRJKAYqntkAxYQfGcFyAreiUuZw7KtGeHN4JJdzyZ2SHdYfUgaTtfEhnysSpzSxF",
  "key9": "AhtdRjssgtAHkvk2fGkxa4rtyBvXRz3iYJjv8xdc4Km2vjchAHcM2FW9jKJX4xFmK2wjAq7xWbTz5HbfbEVm7fm",
  "key10": "528nvUkUFaBvGPMQnAY7uFamtAkTFU4k7Zk4zhTiC8iPmZDaMD6iBijX8YVvLpw76EGPgja9YexZ6PjzkBSobXW5",
  "key11": "4WSgLD47u49pxVEFSQ1bnLKyMALfz9aHt6FsDxpeg12vLS9ogmgqYfCdvSFNHMo9QdNPykqE3NqXnkxyU5PVUEFX",
  "key12": "2TRMcSQ8pVY4C5uqgM1xtF9gQyP7UMJGBx1NaPejYucuBrgEVo3pEVFNga6zss2Z7R7mzUEa1Eao2HmMDqCGNZoD",
  "key13": "2749QG2Ss3mGPgLAJRsfQqEqDkwintp2rHZYeEecoQxHhDGRDydfZUDcgesr2rX92xHy2NFLcR9JAeD1gyLvFKuM",
  "key14": "2bdQRMiCFgZ1anzWZHXgf7cQjAxT5hZHZ1ohj6jdfr5ytvEHSj3mrDaBQjm6U6tW1ndD7eVQtb6DGgre8Gzc9Q5",
  "key15": "HHFRHncbccmXKvmj5VUpytQQwuoBN84nFjfnuaEa2pBfgxPEu7MBC3Hmi9KRsiGE7FDY3Xj8dH6CnvpjCF99D21",
  "key16": "5xMr4RCAxx7Sa4RozGgVWNxRYsCw7PK4BZWsEfr42VgnfYN9fVT7WpeE6P7kkeUPxPf6crPackUFpXwjHNus7pa1",
  "key17": "4bLFy9S72AurKUxiHe9cxUXfpbLLdsEnHi725UAdnP9iokQPVdDjo94Hx8TrTw8B7sJPr5vet5ELh4yHNcoVgZ5t",
  "key18": "554NATnAv589gvTJh9Ua4HDnhp71RHg25uULYmcj3dwN4zRApjBZbniG6gjGp4gNKwnsw8v4E4FKc6uEi5iKXxK9",
  "key19": "3p5UzbaFw7u2mUb3xXRwunYNaZb52u8RvYDG2dhbC85XfvQkEXdP9kB1HayJdqGdEaJ9nCnoqqRAiw12Ew72xrLK",
  "key20": "5e6Ngh9icG1e3WRYz7kzpZ4qYjxz74QGBVT3wjq8g8DhYaunQ2k2vdeVn8wF5CEQEReE32e2pbm7i27RbXo8bpJ4",
  "key21": "41cyczNkAxFjNkkT8BcXvGs5H3rPTk1G2zow9t854erpzWrX3QBULCDQymxVy9q5QhsKBEtqA9aJYXdzgphW2UPn",
  "key22": "5ENofjPD7WZwsjRr3tmJRcv11nGoBXakNf4qRn8fLdPzzmBMS7yitCtVBZo4GVuUn6xU77rZHncvz9CigDZ9aoqr",
  "key23": "3TipXdxzE9PENabxa3ywaAqtAZ11LxrSbqWsseb1EEz66ypsNDhY6kaQCyET34SP2JPGxrDksoKySnrqEDMvVzyH",
  "key24": "4cQiQsK5nDsb4F7md7moo5Ur8xHmhtgJJonpy9bMwSwqmnz8rT7VW2B5iQGR4Xgrgu76uUZtB6nLLBh5eR1nDBz2",
  "key25": "3HWBjzW6doHX1BVGCPLCzP2gy4SywB6PaQpUx4msENAGyWvL8szqWHG6qFStfT45d1XJexr8tqrho2Bt712wuRz3",
  "key26": "2ohwA5dRatzUQntR8qTHUA7e9se5PhjfQ1dimSqMDaK476awwghjbFR2pgXTGbiaNi1R1CmkWvaA7owpdkMXubSP",
  "key27": "3VRu3ytyZ3RkJSYWUnoZg7DNC1BrVgEUrcbRW55dvt2tSbbRrRK6tbwytLXo9Dv4oHiKoKozVnEumWfL8bixkZ3m",
  "key28": "SggCBd95s36aZTCDedvrrkvzAmuziaTFDuMJ8sVtwGMyakUvMzagxhkJo9a2RHXyapdWgkp139FgNt3cvxyT1vT",
  "key29": "de6aRxdss2cFN5brdRSNy17XNi3PfJYZ9ioAi7Q1bCmGRh8s5c5ickw1ncz76bkCAHyieY3a419bqMpe2N8eqf3",
  "key30": "3uYN25BK5ATTfE6MNoHs38dNhACux8XnbcQXHyDyjz1rywxxTZpCMTHw2xpcuVT6z8eb9kYhmGAZmqG6TTrPrUMw",
  "key31": "4x491pisTJPw4PRGPPvbUhQD61xqBBLnqVicRtyvnoycZxj95upnLVkW3Rm5nDncGe53uyVVyNCBQArSUGzD9xWX",
  "key32": "4tX6LbJDCTukht8jnMnmMmqm85bTt7nuhcva24iWU912Xx1LmGrgfr5Q7C68sRKtJqHQGrviHK9QxGYYcqSKZcUe",
  "key33": "4ocp1FJDdDqDk4J5LSzR6MwZAcXsiAYicgqZFk7hhbNecbNq2ouiYQ249d6KFscNp7wddW4Wx4x5ZembBiXviy3U"
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

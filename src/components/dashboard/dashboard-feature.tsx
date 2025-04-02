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
    "35QHYYr3KaxRw9JqpmgdkwoZbTqg1B69WDu4CMZm1H3CRynvWwjR7Skoveaksb55rZfW4XN4sEhf8GgB3pRDiheZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HAhzgu59EfzH4gsjJwCyBjw8xpDRatL9fukVk3AHe7QUczvEZnhCKWxwhFBAARUskiJLzoVWvJRMN8mzo5oaVz2",
  "key1": "2GmzdXy1LZaRbkaph1h5AHcLkT1K8m4HcY3oH2WUkTFnuxUp3tCvEq31i3h4Q12YczY6QWCGRWG2Rt5SbcVgzqCW",
  "key2": "5sDHrWWWMPef9ZWJZBNoNg2Y8YYJTpv9X5GubKoigkSk5iFyqMGUJPjh7Q6pjoYwD4qsCCnPmvfZdyT1fpPbDiBP",
  "key3": "2QXk2rEZc9crAa8beKbpkQhC75VHDQd5cn9MGEzm3k6vHeW7n4Uef1PhvUdE3LLW5YYLvpvV5d8U48djjvL4iovv",
  "key4": "4y69syRyQJVoWmZTFieuzUA5pz87HcdHQJcyUR1bYvuhiz6pEH3RD4kwJMUC8xjCTreUXcmFHR5uxNdhtw4sthAD",
  "key5": "H934HjXRVqKE3RhEoqDPa3i9FMaQfDGVdqbTgdwiLZRWsMpEQ6ivJWg9exD6c6SbGvrM6TDUJ5HPX8PAh3AUKBz",
  "key6": "ScUWAZyBhQZ8CkWEozzqs3AWtPA67PzqeLkUtbcLrmwWVd1mY41JiQMXtehEJLDqp5RAnfcNf2QLR8G2aeJ3g5p",
  "key7": "2JRLgUVkuyPztrSxgkxmE9uZ3Rgr7FzdhZ8pK34sbbAdZUnb5VcMWNAyagEK7uYyQy4vcyPgJuH175guqZHqN4m6",
  "key8": "54X8ZuoTVCAa9fxkURSJ8u5UofHRgBJPJmv2DqYZHpLAWi71ZrkoM4d6pYrmL7ThDoQhxcuJ9cm5aN26p9oRXK4J",
  "key9": "2YXfG7VzHZnBhvTGkdkLkyHxxxNi1VhVTZGWNCwPJzZw6oZYfdgoRjzJUNwYoqsoJK1h6Ft9KbXS2wDiz2XCYjeA",
  "key10": "3ToE9TBm2KwTxJHqhcqFNNraCExRRVnWDf5dQvF56wqv8gGNQbo8NVrLjQdTNvKt4ncizJpLpmGbyVdTF6J6XdGB",
  "key11": "NdJByWjkqyjcG16nF3NZ5dqP6sK7BkFRkgcBAFS4eEBsJPWgkGm8JJhSRX5VtbmmEbYATS4aBB789TKLTGrSsQF",
  "key12": "5k7A7b6Gqdp9qhfSa3gDfUZqrp7X7UhZcuto5DR6P8jCJgxadkR94vHg5tvKNcM1PCY7nE3EajvgYz9TfnNqkk74",
  "key13": "2sby2M42R4EkjJ6hsnKDLiKqputMBbwj6UGa6rb3YUTNjoMx9QJWGoKxLYZv3zaBfzWLXuvreHsMLPPRvw76NrxS",
  "key14": "3xZXacqbLYtW9FiMjdVvbiMu8oBeqMaLgTeAunXqt32FWEqQsafRueECoZEwCtG9wKdPVbF4MRH3E1utFuG3qtNC",
  "key15": "5wqPu86ewBgGQoeVHjZztxoUTgaLh7ZGjC5kxs47jHAfm5yvHSc1VkRPthr55nvPM82is4E8EuTcUSzdaPFtg3Vu",
  "key16": "4TTMnRwxLzxwAvkwatVhSGfWwE5dKYgDrD25X5V21ciSXeVvSvq54NmqcUhUySgcSu2mcoRnjzaz5yJPmVMFkyCf",
  "key17": "4or5q14XYqReutJmkQnBGgt9BBeQf5cQ6GU3TP5eMxRFXZjBWZQPKCBPwfGSoXCoyxM81gGD8PuxFYSz33mnc6iC",
  "key18": "37dmzx6usUw2cPdTxjBdNLLWWX77gNQKCPWPTVitmyPi88w5AV7n9oBUg3HDouZHVzB8e1vWS18ELqCvjdqodBQR",
  "key19": "3XvBw7tVz3NC2vvMjbDVSfyMwgcPpXVxZpHVy4avFuGA8WQ13yXUNAMxc7qD7NUvWHbHrUveZztGm4nuPFykw9bb",
  "key20": "2dV8UpLrMZJWBvWxNUUNTU7STHQQsBYKz7aB3tWwVsHbqYE9dqaDGVSPDnsEw8im1KirKQBEnR6Asrx9GVZssHxa",
  "key21": "6598t3g9VCs6aGD54etwe6zsTkchFNhPZLrtBcA22S2hEFSX5d1rhGF63EfckkuZdv5VjmEDjjAbVqUAgsU2awoz",
  "key22": "33a83QbVgAmBc58YySTMf8G89epFLvkhNpxzHDbfUkJkmT4MaZNTrUcpc2RzGY9dDVU8VQhM1PKsjMtiGfEoW612",
  "key23": "431WFVekmxwViCgXajkos1TuXKSeu7wTAsLvNvyLJhuiZWKQVUd3QD39WvbGU5T5wuBXBie9kuDcjkEqyjsnsYVj",
  "key24": "2MKVB8YdWam25QKtGPwfWWXXW7kQne25473EzyzPHx5wZo8LYGyoAFuWsvvR1BM7dFr9pr488iTaHnYZckvpc9mY"
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

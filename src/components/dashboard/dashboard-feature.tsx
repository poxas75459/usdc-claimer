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
    "3QEXjidwcE1KAbUwaNiyFZ5syu9rZy1KJtqkmRq4hrXoNcL9agiBNHsn6SMNApkxqwtyEiRjKBFKBJvR1Qh8HXNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LSNMPgWBSsi1767oAcRwPYQT7xEhh7wdteQuFyzikXNHcBtajGPn1gxhpRfMor9G6dSPn9auSBoCuBoHnrr9c3",
  "key1": "2EC3rV5ewLyAFBj8Q3FCtq4nbQMmeJ9r72Vp27FYg4y5TgFvGAf4nQN3YaiJGGGgTeaEhWE2ofDnUWKLavtAtpbc",
  "key2": "5J813QrWWmwE3B8tjVin2f68bYkb3S2bNGXwWBj7aFZjYrkwkUj3QyWkmvNUMSCcAH6noVYDpAjV2MAywMYKfVRt",
  "key3": "B6JsMuY4atZinGYkURFzosgTp1Wsvr2rKRy55SwWks9L3bQP6QF12wrm2WQyeKaf2AE1jv7CYsAb5UvysXR8sDV",
  "key4": "HtCTrG7foqa7CF7Nn4wS7NmhY3AberaveXwHH4ctX1kxD8KWsKeFej3Vu3u4Z1SLM2UYd2u9gR1X7h2qby7bFCg",
  "key5": "3tcDLRiVcxde44YYsasSYvL7KusvSaquqTnbJwkJTEuxnA8xTb5act9XWHVTtrHgVgZXsreMJPobEj8zsPRsFpd",
  "key6": "4BUoc7GNs8kQxzKM95JxQLpfU6XaeCr6LYj2TjCTaqbS5fjufwL7DpcbZYGKg4CSmR6K94iFG17vF7NAw2jUT1Pr",
  "key7": "iVAzMeBNThV3VtC7cPiDsQbaAJytJFKCji5xrBHSzGdQdZ4w3C3ceyyAtGJVKwZ3PrVQfNfXk63BHpkjx8ibX21",
  "key8": "64FqmaHb4gtCn6EznzWDLVEXnmWDhmdEpzLbAMnnfMWWbDJToS9XbhLC21UEyfiQasLmLUdv6JwTUyxD9xEBQuMc",
  "key9": "4hw3FcQXV1CtQE9zTU9jDJYjvKsLezCD93aeEb66MZqRraUL219x1vAQZXretc4uSWw4U1EbzuwEQpJYqZUJ72Wy",
  "key10": "6vfEUTLny8QRZGYK1QUqyjDSKSvcnpJc8UncyJRPmh9wonBooVmDyqCrwyctNHGWmtAo9w9CrAt7AfCtdLaDjw7",
  "key11": "5JsRjDM6RTr7gS1r2A8LHbr6HfZppAs5msavfTuQoKBh9Fx1u1TUgeWKvYbvkPyhTU52ZhBrfJX7yaxtirtSzpVn",
  "key12": "3QPMverfqSUFHpVoahJfkHD41usqDQbyqmkAbxtmDEyVdbk5qDDacdg1pq3CbLct1twTCgrs7ecmmjiVkKyJN9Td",
  "key13": "MYMrUtEmcAfdAAWWwrvkE7LjKV6RkELvKvAifCdYGJrCwFJiwtf2Cnyj11GuFABYWQC1MSo4iZdyizRRt58ii13",
  "key14": "p4cwHdF7sztez9CcaXU694MEZJkrNU3hzehc7va6fNbqg4DQkm5amJgnYsV4ZwhiEWsKt1h1D4XVY22VHsLPXkK",
  "key15": "2zAYiFNfFrHJTRWsj3ZEC7keyWUxsb9n3weKWrhtzLtnfHpx5uuewvLgLDxQ35GCdx8pQRk1JGeC723nkn1s1JqQ",
  "key16": "2cfar4yS797h2CuUc8d2LU8gHyFWvUJzcbPMuXXnPLFvasjrA9nRWMMRJZW6TMME6ZH3qqMFJBqnWRXn3jb7C37U",
  "key17": "4wX3PCRPxsnruAKV876WdQDutcTiC6gHE9mAzN2feEMRXFw5izNdBJifes9d63aHNYGmbNtoPXWp5bqxyhpuPpef",
  "key18": "3waddjDw19STfhY6p8VhiRASbriR3yH8QTjSNTzrBmLiLLuRXuo1ZdtWZAJ3cwZobk3Uj3UkLGK4iXhdQkyYExpT",
  "key19": "3JY1dpa8JEkG3WNmtZ226CdaJLF32RmAg8y1wGptoEC3B5tfeNDaVKam9eDwf4eoEGbtWCwexSHXU4VxvZRT6NRx",
  "key20": "juRS8mrxDk51KsCRwk8Z2XEGtc1ASoU332sjbNbNj4jHDDL2inSuKVds2vjukJZAKuKoJADFAmTGW8yjniUmjTN",
  "key21": "3Jx2CrbQKk4ewoXxZcMf8aiSnBfKvdFuZka6mUekKEM7Dmuty7K4PuPHxKeeCZg1tHC7M7sZzSGRgNn5XmcWodbE",
  "key22": "5ZdfTpuZumKz7SPY9p694jnFfhTcdHyGTEuomqKAdbmW5dJBmLkiVVq5Zi8B9nKF5FrkUw1NwzpYWMhjA1nUgUwd",
  "key23": "2R1AEjLF64ed3mWYxir71VXYvjaK4QbtGb14FpPKaxQbi8LszVdMY6EnwAfWEP91FH8vDQyeE7nbHDTdBXFYYxBN",
  "key24": "5a7pu6toQtwBFR4FG2WCWYAw2HU7WdV1wfRC5BFuZmgYPhdhFJ4mJhhbEYGA86UC6ytjAufnaFtrTuNbpCfmw4tg",
  "key25": "61RZHHvWLzV9iU1tvLUJigzzoKVR72rL1HmuEkY9LE82YcF9uZVpVJGqzx464J67LaCFNk1bDuW8a6NHYMZtU9KM"
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

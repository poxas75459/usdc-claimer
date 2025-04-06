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
    "9AzN3wJ9z4tP99FiJaLRToXGF9c1itPn6QpE3i2zCvtjiQtpE5egfTnKvbvuhLTQjiQFzdxn2w18q6o8fJLBox7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WLYMZpEhsW85rMxPwx9gg1tFUsMXNkMchoskrAmX89ZUNjuHxhQb1dE8JSqRgzwTQGUf7YbigJHwiF8rwpDD7QW",
  "key1": "3W5sSZiVtBBNrw2PXBZxQ5Dyz2B6Xc9xf3Wq3Uw8XnRHqSRxBdaRFJt6WGhftoTsfPiVRy7JW58UdgZARoA69woc",
  "key2": "249hit1WweZy4cQvJj1EzHZJxTPNv5Jin3T6RDqGypp7qbNjjr3P3N4tDtFHEzMuTvJav6FRVnuH9weENf7TZo2k",
  "key3": "67py9BcoR5bohmgzupnkzvnjnfJk55XyKQtKq9rrET5hjQhqeunkmrTXALkJcPfzLT9GtMMYXPYxKeUGMYJGLfVG",
  "key4": "4fCfvbcFkScXUSfJoufsbEsChpM2Y672N4zGsEdiY851ntsQ48caoc53fZ59FaDpLm8rHq1y6wKGufQu2faUG1CA",
  "key5": "4LY1tDM2Ke4KBAiGFgt6tsKd5jrvZmcPGWTZxdpeSGQzAbBqQJk7UnLncBMfBUqzx5mbYnVRB5MvNFVcjc2HMkAg",
  "key6": "5yvD4aZ5bEcLjjbA5MVAfvo2pPusrv4vBcEncgWUHyp1DKCPGomZQ3Pi7q9ud77YLoy2V1wZA6AAvAobtuCwyg4z",
  "key7": "HLZzfBLgxvvgCiPsYtMy6aDnHwkpqyxLvjifWn2JrFhn5w8wtopnfnwxgwaV3YBoD44MSxuUn6c1RMvfgPzPPm2",
  "key8": "2ca4dmpuVS5TNXjRXnPcZkixarw7tnVJcVsKAQGc9wVjgWjknZf6zSyVVbSnZLesvukkAELLiBtsRdgqfjx5eTr5",
  "key9": "NXmNCySvLoHXGRPKvorWFNo6gjCUADRJ3NxSfUATNRaMwgKuPMW15D6RTtFLHPPpRyk2iS8E6Da6fcgrngBiUXt",
  "key10": "e5sqqhsr1joG2rZe4eYGUQBtVHpzm839ccg8EV9BmaekAThcDDvmHpLL6wGkjBYvaRxLkDbKT4anGrjQfhGAh4F",
  "key11": "3rVpNodUrg7Ay1WqMGxqtgp4gqFbZxK7JBXGUGGLV9Lgw9PF8axxRcUhCPLqtiK2NePxFsxGpmEPnHBtXp6nUz5a",
  "key12": "4E32bhmtdJsyM9VSRogVRDf4Y7vgkyLZ8sXsg7HNqkojFmjv5rBx45qJP1F76WMk2AvxnmSsppjuXMNUsnscv1nQ",
  "key13": "5qn6JU5BHuBZSJiWwyhS6fNkUq74AH9vBeLYEijRQZzPyYBmZtYTZ2ySJGA8hxksYyZgMbwrcdzJnoBPGM2byKzn",
  "key14": "5T43fYYtCryxLpHLEuSXXGY2zqeSmoe8PDCzQqWSgz3pCU8AMZ1NopyPUprqfraNkRxCHVKEjwd8fTyhaTnQZEHR",
  "key15": "5JjpwUzrzQ7Ds4UDMCYsk9DvtectvKByBkj6bZ9igHUYprnez9yjPmekEWGKZTobjguavwBvyQzi2j7GuvSbtzGY",
  "key16": "3AfUb8XyCDtaH5BRPEmHXmMrAT1p4MRxLtPk7SZhHrQDDmGNVBbKgBPzhX7vYBrzruyTvHjufqiHEn7GjB3zXNmY",
  "key17": "4o5m1Y41fcR1BayBHtqYZ99ageShQcKstDNRghPaqpb5bbcrcQA4JALQevkiEm81pcvDyGojLUwFcWvzBBHM9fS6",
  "key18": "27iKGS5AUs54G3r35YSbLaBnmbJgGXiaXbgBvRRYTkpPx1NxCUPJz1vt2Su1uaJMEuCnqC1NwRGKNVcpRm2TD2pM",
  "key19": "k26hgeYZyWSHuL4Ee5KQ3mXYYuMtqS9exnNswW8zq6AuVzjFGrRdJ5TKybAWLC1dSAJHkHR8GDeGwgVuiLkGbpL",
  "key20": "5kdqmUNwzH6qqgvxiAPTS3KVg1nDNHny4FPyxMM9JhrG5LNbHsVPvkcY9twQ11HdBx7YdaWrnZ8pDMzybR4W7eH7",
  "key21": "3DXZrt9CQMW5VgkwL3qzKRdhR6DHXzYUrRnrFcFfGQh1dSABQxjFNRVwCgv5piAc6nGAZzUdDrVicSnz3UutfGye",
  "key22": "bK3RDDAtzZjaC9nGVSEXaKQBhtcM2qwGAGyEq12Lka5SuJEPXZfm5fLfzQSP9cXhjeVNytoUK1RqZ5R4PkhKmUT",
  "key23": "2dJGYd2JBLqxF683m8r1cCfJFF8WiCi2BR3EEvTkC4sLWjhaVTkETfzzeJDUTZZaKFwmxPRCX8SzkAxcEWz59E9U",
  "key24": "2gZZ7ZGbJjszKWTBP5ir9huKtJAmENoNjACoS1kDEwwkzxU3Ra4EeuDmVvvgqZJzd1XdTWEtkB8BwjZAkQQxh8i5",
  "key25": "vXL9FcuU3Qjf6uM8uh9JUwB9ff8NxqN8dY1N98T9bv1BVsdUX1BtCsq1Xn5nBtXgSrjgSY2iEYtF2Bbq5heKtgU",
  "key26": "Nd8gQQKkgrsGuXbxamNzNz7gaLHQwSsZEvhfC7PeffwxNZP4bhREDhNxgvyhZUhqeqKgaWzUi29gS3T3fUSStSd",
  "key27": "3RHsCVTwStf7o6xoNGnjdmEw4yGwfytp5Qy7MXL4GYEyCswJ67XETauQFVrsZAnUKtSXVgLr6Ga2oLaor67FvgYU",
  "key28": "2pccEFDSi7rEA9YMcpK2a7bnHpQLKfZMz88tABKo7UNCTBjPoYA1QJLptrmgqtN8we1b5Er7JyUKFo2KE7p148AF",
  "key29": "2XjSuiXynqgcq3jYjL8LyucbfKoHVFk1fC9sJo7yNX4fY1u8uiaFmbup3YGRZypWPVDkhLLMREXdyVL2NKm6qPm5",
  "key30": "4C9cmGH3ksmt67NE1vJ3sERioXXJie2VundVRKcvxZWJaX9dWcCayDRbSgpCTTmfHnKGgZG7mEqdZzU5dpwCLMD3",
  "key31": "57KNoUV2txYaT8J3sTFzFg9C4NVuZHckqGEZzB65fSkcKEd6mjxso8imHBrD8mJsVYbBwWNDe8ksB5cKJnzpysa",
  "key32": "67PNy6ABFp7qAJVwsjkpdfqSycKTZ2kdX7t68GDAwkxfXJbc5hJ8ksCSmWVxcw49hWabZcBd2ZfsyyJnpaooa5dh"
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

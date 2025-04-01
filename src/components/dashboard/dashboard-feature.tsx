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
    "AGffVnuPwGdPQufeD7XGEEQYzmtKxpJVLj1CshchafizXFLAvYCTfKEQ9Pb8nhXKugsNtpPPPSo9Qtt3Yxpm5mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UA8rrh9PXEnkaW5PKUdxjcH4Q4gR7Yuy16S7M2CzvimXqZRoWzTgyrr8qCpRGjU5Mb5q7FExCaQJbU7Cdmisss",
  "key1": "2Yq7XGR9rDfUmNuNDzvj5e825c4H2bNhdB9PwtgxFCn1dd4YTas9auHVqqh9A8iYtwpa4B8xgkr6jMBYoLmRGdA6",
  "key2": "3u7jUfzxmkeobbALkMXJCyftKxLmsjaY9U1DZWSEjsi5zEitcMWooCD6WTkCw3C5wZjWfhrnTPgtuPypQ6KQYDcE",
  "key3": "27gGYc8Kk6UAY36c7cWQbpUQVcDDhj2n9ND1yb8ikDiUsJ1VKhDW47J9qgsJXVuzTnkF2F9FHjDP3VrNmTGZTWbN",
  "key4": "5oVuTCc3zcRQdJa1XWrVWq8ZiAr3GG59CP21NDNnddo3d6N5sKXHRZ8uqJxdTTHnH6SS5NtunHHZwr8DXxX8F65V",
  "key5": "5dBnwXry2afzQFmB89egtrpfiZgYJzc1oF4qBWoPoJVHmN4qKckwNLQ6qNo6jwP8BX6CsTRfGgjsiM9zEwfAWrTr",
  "key6": "G7RxcyvP2Z9nuT522x6vK5nkPdhGyCVv138dzgdKTaP2AFecSqfP9GSKp5vSzNxoWQrjwup7HM4P8daxoM5gStu",
  "key7": "52zRRoRwLM4sXBrGvNLz7PajMS5rBsDdscPZvTMRRc7n4phyB5uS2p7gZbZRriBDrhdJvZf58HY6Rxy9ZVrgBCR7",
  "key8": "uwApksTcNR9chwq4bNab7Eu6i94sY5PzGKkjaNhuTnvzj2qqp1cRvoakJ9rDqbCjgbCisaiBxYXy3d2pWnppVn9",
  "key9": "4SptsxGdysA78n3a3ewWZE7HkmDziwBZJ59rtLN8U1Z2Zj2jR7HYrVfQhrximpRMz2BoBpvmJxA412xY645znA9s",
  "key10": "4taz1x4PqnLZhnqJBVLBh21nNxs4MSykyPMU2yDzxeW7hDpL3EcCFz1gAURyKJzSNGKmfkZf8B6LFRtESYvePRtw",
  "key11": "2b9yLYYZp2YQHsWeFZ35V5Zg9Ji8teScZAZR3DgYbEuv5FQpiq3PMvDtSQHFjx5jRKTp9h6pBtoHomjNRArZRVky",
  "key12": "5tn4f5hAdJ4xXeq4L3QhrwGoBeNzAL2z9TqcejaboPYoatEfUJPTkrj8D1J6TNU7QqK2qxnCGpAgsHsSQrVLkntE",
  "key13": "4rhJrkirNaZeEmHPm7CqcVLbrC8whaHH3PABV6M2wgUucm7pcAbnadXn3omyjGhbMRNYZDWryuhNzcDbUiY69U61",
  "key14": "2bd2db88voFt23RtP6f8thhYyj6g6iTL3PKorhrUhri5QiKfmngtBrUw7ugtz2SavykxVARwjRNkVCEAF2baCiNe",
  "key15": "oqjwuxZqU8bUR8s9y9u5kBH3xoxd7QTtNUvDiKs5JHF5GfsihUS1pKuJvumm7NDcmgT1gF8XAQrSQqQhS47yf4E",
  "key16": "4fRgzrG1wd7wdnFvNHPUcAkJ7Baazuq8azpgcPZPLawHBp95zFimbfVaY2hv2rnJr8JJ8Twq3JSKYwQ9A1JJMUwo",
  "key17": "62dReX7aHdHsECf44qe7itL7GJTCQK4uZV6bAq9ykoj25bjCpe8CvwaadtnwCZ7JnnJVppwmasi3E5cHDQ93u9i1",
  "key18": "5Lw3L81PoVPYe6hUcJWfAfP49iZFDRRwKowpEDFnSQBseSadNwWiFaEmqTwTbno2vhiEhRtTf4tufJzB4nKCWbiZ",
  "key19": "33KKAiVhZHWzXA4SCtvfz3amf4t6DqTvhBNq2nniBkLytoyrVxLMTbMczEhn4UxPmupqaGeP5HxTVsA55yFLDvyM",
  "key20": "WHyaitgcfJXcMspUpLMB2xes2pcb1fqhfDtHKJ5LGb9TDB2fuih4gS9S1GNZVf8swePG9ZvU1nVp2nZJ3qDhBo4",
  "key21": "39pCeh9ScMWRaGoU1vi7qpbnDCdjpdWUZaazp5YgJ6bqSbTHVKBMfDoMXZR1GXgmwaBdqkPNUQuzrA5MGeohEDKH",
  "key22": "3wW6VGFQkEXd4zs61SgsKj94ykE973BuitV6m9pDvpZHzDAXTdV1QbcfzFgSW3pDFU3jT6k735H3VpDiDBam99aZ",
  "key23": "5xEY7EsukL9ngph55w9jPxiywvGZKEB2TcqTGwCJjBLtZLeSVZBcxGq3ttLZtYJEWgcExiUMdbSqmchSdpTxWRJC",
  "key24": "vPc7DrpD4jg1gJthBNfCAaqwFiMRYiuD8m5ocr5PSoEYSYahUQReSA1HydnvUbtEHz6qkRrvAVDpTh9MDnBqZwY",
  "key25": "2fpQbKtw83HiJcPgNEQL2wSpcN1HsbMnikdzfmjSTEdNpYgjAWTZtvX9HVJaLi81iBUKz3gVRjecJFgWBF2cVo4Y",
  "key26": "QsoGnajkN17NWNYdDGmc6beTAH8fgs2eXB4cQYtdG4KiHMxdLtR4xn1SEYssPecKB3XZf6v6WyAjgyy3ii5L5d3",
  "key27": "3hWkL9TG8QPgcfqn1MAyAResgcWYsTvZVxuPMDF3rn4Uaq1W57pL9Grz8RJp4QX2SZtzkbvm1BXjN94uYRZWgPrM"
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

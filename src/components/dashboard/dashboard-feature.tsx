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
    "p6hyN2cApevb6cbQ8RfApdG9j1a1UC3GQ8bGEhATC6UU55hjzVfRvGREkqncSkG3Tbwzzxobj5UuY6xmJZ7gtSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34GmUjvs1RocwcqPLLJjd7FpA6sasXp8wJKURuuq3KSGj5PzWPzrhSXQXEa2xNAhz3NwmEE1vB3QQ3xEJDQ3w7ru",
  "key1": "unJ9m8aihPDP9812Uzu8BRPSoRCf9Jjw7inF91rZMCtSm5ovUZ6cmR9uyCsjDrTEmoNEYD7mKNvssGmMrj7BbmM",
  "key2": "2ELjDJSQUGPstF13Hdx1Yzc16qNHSVSAnZALqkcQWh617Rr5iyinP1DsyvcKSWznCbWXUtkfhfgLrvEEXCE8Jfg8",
  "key3": "5BVJKRgvsWewD24NphAgTKuUHwteg9MN2YsytYeWbjzYjMzbbXpxDdpAWkBVFBxQZndYfCpJFoZJb2D63C13Afg4",
  "key4": "tH2oZKWh9VH8ropHpV544SVRtRcJ5wHGnhxX8GZiCEsWENXCgJz7hF8Ki7pqPfKS9EhsT8aUkcwxQNsNqckaWfL",
  "key5": "2d41ogiu1GuCQ9FVUAHpbbcTwt68vUaQ2GDMMfpJqkZbxgTojWxgpsuyY5LaA39DNypHErYeCTFrqd2iJKYXbFfK",
  "key6": "4bUKvpDashyRavdgYyiNWriHNZe4VCjkqLtctKUPgjxAUhQko9jegKQjSQRFDVWkcgv5GGi9h9TgeRqDjvfwRZJf",
  "key7": "3dHyHS6sAJrjsfTfdQDh6CobDjAZy696tHtxATwxPVcB6UNWKp7YYpwZUehw4pmY94wkgfDZydMCN9mWz3eAHFBy",
  "key8": "J8c7TjHheYpQdQyu97x86JD2GA52Bi3fUQXwktVgYDM3RqapuuL9G1WWU5zZfwXuZ8cHE1FEE9BVk5fwW64CVPS",
  "key9": "4GJ6dbK5LXBogvJViMaqYbJFQBF1jenvo4nntvTy11RddAJNB3CbVQxfeF3hQNxmsQXUmPkdPA3Y5HziFu1iBvzY",
  "key10": "3VE8PYM4rgz9vPJSzDy5afhb6iU2SVyLuUs97NmAgfmDZCT6RLM6xDCuAt3ykmtASAj5NF27vW7Hdbx2XsQq5FFT",
  "key11": "2vSS4jTrWrkhSreohfM9NFt6uLHUGPwq8mXRaE4CVBBJk1khgSePWZLPH5VeACRjNZWAPBm3HRBcWSvyPKKJmjn",
  "key12": "2T7FP5bgh3dLbN4wx4fB53ej6FgU7LhqfwnXGFCzDqr7t3BmwfVoii4YNBeps4ATDcPwBB3BcspwtpaiwtTYi6Uz",
  "key13": "3A4br7DG7rLo3uGL4NZQhLJSJzFbFpAJLQixHyv7ryTT4hQcHwiMbDRKNFbxzaEatqGGBaNGEa6FXSFedTrUtYJS",
  "key14": "FAQW7qsVPK5nWB4JYtvYKp3LdPtUHVGQynKhi6HqQsz7VDYv1ZUqc2WL49PLpyvx6kTuwX4bSmMtDGwJKiMfmon",
  "key15": "n61Jt7hvvTP8NC1udDv9bpZtN9FweKT2yTVn2AwgUsoDgDAtVo5Q9DPGwLm9yYqR9SVTn9UKHQmYn69JTJWrsq4",
  "key16": "58quctCisqAx3bz5KkUKxcGUVgTHyGCYLpm7bXD1zDv87y2DMVnexQZipXZQ3nqdKsTksoHRa9tkV5jAt3P4fG2o",
  "key17": "5M1eswDU6syVfaZ8X9AeMTnjjspoKu9MWQbr5nHHN7ZRo91LfevtnxRZjR6tYCF7Q1AbXceWsuAB6um2EfDFduST",
  "key18": "2VDbLqrMNKVcGGobk4Zy3icsNGPrtGsFQfBSTVAvsvgQ3T3AW4cNG5NvEsRFjBkf8E6gMpcn1Nr5aKSY8ex1ewTv",
  "key19": "3HcDkrBKmq1oETxugSmthZMtJ8FCg7n5aSH1prPD7p8ZWoLviGfELKU1fBGiwU3SWemYnb5MzXeBrsJzVZWciTYE",
  "key20": "42Gps7mqjGCc7PX8JAoacXdTNhj1qrY3Tx7JzUArgL6VGnpYcjmiPrq2yRaodjSN6sHvN3nE27Dnsy7bAD5gxuTb",
  "key21": "56hraYyb3kRqg68beDbVRy616SDn6HXrWt4VqVESdgDVRNPtffPMrsxoTrJSo39TGt89UPMFBNs7cjr1mKHc7EsD",
  "key22": "iayoc6DTucrRrVE7Lr8PFqRYFFqUvXn4SJ4QBGhntro2wZtyYm9GgHdHcQfjyrnm5k5smHk5g1WBXrVhEwJAcdx",
  "key23": "43kiZgJPxCMshW5AniX2GfK4QpXvmFZ8mqpTCZC4Y5BwdZAC65qHtMXMH5mzL6s7GqdvNtLPfbN4wrehwbtsyweU",
  "key24": "4DV4WbJeMeyGrEBJAnYVHeXvyfaBcBFNHts1GNSJyuoHfdM28a7qG19ab1Kzfg4ZCX4AfcNob5dZ1CK7CFURoxsW",
  "key25": "46acspyZb3B3zWeNZsx9QMKBk3qYn4e9om9E1CN38rxN67sR1ikwcVdokLwSPf86SF79HgQQi1QW82wCDNE9PzDC",
  "key26": "26g7AuRCQe6M64oqxxb4PZRoEmY5CejXTAf9CCF7rtvE9HkNvsN8wQ9XWqTRZTHuztQYkNr9vLN4SBDtsMphUyYb",
  "key27": "2JG7FkZczEMprDrfV4jJqQ79U6BkTq5Dkf1EKbmhPHfQHK8hDuMDzuinufUs9ZqDtwTG8GC2wyLa6BJCA9pYtfbS"
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

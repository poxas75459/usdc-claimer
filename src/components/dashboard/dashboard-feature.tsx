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
    "6SqbLgtanXsEKL9KdGNpQmUTjhY7NkHTaK1KnqtUC4gK8V6AWJt5D7PYTXBP3EiVmPqB3xkcxird378AyMCwDCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4obATnDyheEJS1ywyTVVA8QRqj792ZbCjGZDmyUZGNwHvQ5DhnCWq3YwszGxnwbHTiXxop6pxNV5oiWf33G7CC",
  "key1": "2E5ak3XGft91UZSnaeLeF2WL3KWggG8WKYNsxwLCd12dHrczKRjjm53B6rL8gEzTo1DfvP16PruzDLmfhVj49W6s",
  "key2": "4b7PNYXDfvxz6xzCApAB5216oDtNK8QEh5PBZEHRkvrsAA6T2CSmdfUtJRK1tLqdkcoL1idXKWY7GTuR2A3siZgD",
  "key3": "4SC3kYWs5t9yYyTNV3SLkFANhGABYsXMwyYaUNxP3qdqVbq4jy76c37JUXGcnTjpZTZ6eXEuwtyiMGTQmXPMtct3",
  "key4": "2iTXFkbmyZScBj9mLaU5FfThXCWtnvhQUyFiVZYouefmMSSGaA5srBXJuuZETpSpcjpQZSxWpru7uz2ufqjBdnnh",
  "key5": "4XwcbFtNoCjb2MKpWycBHqsmML1hsFGi3AzxSwNP1zRWTrywUrywCceUrK3XzDxWkeWzjTcG3hVN2EL9bEWEwnQb",
  "key6": "5kJftBa8PjLxX3zP7futohBR2TRWGZ3Hj3dNPGTATiNpwQJ9597GehHg9hgF8MDaF45AZvwDnEREuiZsajxcJ4s7",
  "key7": "3NBEBvui4YkoGW9HmHPEbfno1EUpHadEuevNfZ1V777wqxJC8J2QXyAC1iCmjy76JQue9ibkJEwpyPNZu9TYFctA",
  "key8": "3GsGLMqdBwWSPzviAZqZpF4FNDbXTukMSVQ5eX1RBF2iU7UR9tQRdWJNgx9Ztxjz8YwMLxYhSvR8Uh63EyRYEnD5",
  "key9": "2R3fMs2nv1J5Z6p5DWfCWgtjp7J6PWoNpyPTjHx9pHebCSLE8zDX79hhGxgt2wLvWSyixdZ9Ems1jAMNK21omaeZ",
  "key10": "3fSy5dFE4GHhpQrXGgV8LiW9UM6KAVDeHoKBoTx57HmQG6v2H6hVkaQcNpWuAhMAHv6KzDwHDYfotZHfgRaKC4Pd",
  "key11": "3rLXcu28rvhriSTb1JR7pqL7r2i4x5mrDA5iQM9UpubC6L4oHMFJixsfn6Rdu7TRirWhZ2VdrJCCqJMNfQwaZ46m",
  "key12": "5zt57t2Qj4ibBt2vZjA9i7xHUqYXnLdfPqsVQRz88gXYwM6U5W22nbyTYiYbRufgqnDmdaE8L2PJoQTr3zLCRcU1",
  "key13": "qndVTsrietDTHUY4Z4GwHNTFwsTRCSPyVHbkGmbanqxn3XyHVnXuCC3ckHo6XBQ5cuccWmMjdBdmKG5o4UWtsuZ",
  "key14": "2g7Sbhq8Q5NpXBnmvFnHYxFYYfpUTB37Sv4GhUTQJRQs668J4RJucfXhh8NNUq1baboK7DcK7krdySwnz2dDWXZD",
  "key15": "J6VBs3bKVBpRqDRrzWsYzfAaABiMZdbMgSNmsLtUQknmHYSoTL6xhnBYqi8THeCYkWoz6ZPdqATnU9DdMJHGeCL",
  "key16": "4GKcrjp1RebXGH1SmM35fLioe7Vpfv2rVHc3vRN1yq36UCU8rKSsG7LDQmaPMePZ3QqjnXVhfJ9LD2wwYeGetQ8X",
  "key17": "4NF2SCjZ3AJ6y3MTPAMwxzyPLK5oJ7GmwkNSScsxcGYZfvxUZarD9KYEKHsVF3ZPxnSKWUAxEuhLrQDfRDBY7Ydo",
  "key18": "5muuWt9Zz69158V62g51BabWGKvMAiXPjFXmwHVNtgXAWwfNrppzsL6Wu15q7eu7Nzy4f4CjJaa7N4R3NFTGZNwL",
  "key19": "4P8YwpQsdJNCQtJVfDpdQaqA71D4F9i3e9eq1d5hhnxfKBF6mxkpY8jwR3NKKxRmEBDGupSPoSk3Em9z9xeV3eMp",
  "key20": "28Bu9HXfedpGZvGP9HWCQ82aA8PXa3Hh8VB6eahFKK1WkXGniVBGqfnLFBU8Gg6eTQrd4Yd7wgWsoU5QBGVSvuiQ",
  "key21": "UjjK8L19dTysvTGoxYLaYjFxD1d7FUK6yjufUPFdGB6z8m5bDSyS6mMK3LVAiBXwESnoCKD1FBBRMSDBerPxWJ7",
  "key22": "3d2J3pnvNGuq2iUhPRPRmQXaKuZpMSps6c5syAFvVpxrcC7DdWXb12X89oGZCbG41o5pDWsL2fu5Zu653r4gj7xW",
  "key23": "3GVb6iztgudBrXxASNN4HmtAaFmFWyY5E9Ujqr4zB7226yn1TtVLPXQg8RUWz46jkvy7hUoHmGfiMpcwGMGKPs1",
  "key24": "5BEQh8yp2MjaJPJaG9mPoXtCStvQsSGg47UyXJSB8ADadrys9G1SQyQbePGFk5bEZxXj9EDyTc5rKjzPkHVrtabs",
  "key25": "5d1WPhAjPQNFaYQFP8M5CfVv5kZvFnQgjoxdWbmZkR7WMSkEMJm3FrCMKgyyysq61p1GHQbNAYCJxHxEpuvWrQhZ",
  "key26": "nyGcy8cvyLWPx3eBV4WCeQAzUzGeYZGz2pbN58ocxdM3o9KZfraLP6JjfN73ZBU5nKDiV3SoaY798sGvmeUoHdV",
  "key27": "2ZXpNmWBLoJwzNBE5pAWhhkk7JvkG87hxcMrzd5SMo17Yv6B7rgpzB5Ah17sXXrzGesEiNasGdWbXemcrsfR4e2s"
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

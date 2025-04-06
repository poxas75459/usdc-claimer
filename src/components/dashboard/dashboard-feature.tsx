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
    "217G5gbHdYf3d3GJvmfC3a4LHxG411spo9wUPLpYp8hugnNHhDNDb8rh1Z812gT4keYjFohqFtSym25Ppu1sFohD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzFWTQXKG4reshvk614T7YEG9QQxZyFMrBcKtB1JpJBuZvNTp8mD9ccEFhsHrD8k9NKbzDxkDr7kB6pDPNLUazn",
  "key1": "4z7VJFeJxNnQzbGxSoWL9F3WG7NZz7twfgeysmMjo5dNmCJHRiA5sKYEaesNZseTQ3VeVHhgSNaF6AqMJivxYYEd",
  "key2": "41TSQWqQvgBETrpxcb2wistkLJ2LQaRoLYK6wvfWb9D53pUdtvoqShbx3xuvAacHc8CuDF5nQSwXLvUmKLgc4mda",
  "key3": "4xV4qyioyQF2BMtZDGtRgcyqWtqbS7uGwJktoW23CwtHmw1B1m8gUxSJe6vdhucT7Cn5Kn5WtDk5qHHxwRt1b54b",
  "key4": "5ueALP5L6C2TtV9jGEawHkL74Tsy8Ji5PTR4xHB3QPeW12UqmkTXy2x1A5wbtfHcjX9SgQSu3CtSUrGJKfDkkWyg",
  "key5": "4VjbjeZgKfxp3dgB8Eq5zncipHF4w9EybRtg2rZUAaoqCE88CxFU7mcbp8fYe4pmzVh9tadj5zc8msyN5VixtPEA",
  "key6": "39QBuAyRAqEPTpc5resSb34ZKpkwVCRVQAeGcCebq8ZeX2t9m1fDFk9vc9vD6eVAmafpDBFcorg6dvcX8KJtokUj",
  "key7": "64geSYrRVLsgLEEHZGJMiAtHk2R7N5zqmRukqBM8e2z94p6xRzyrX8aBTSGqkHm7g1J9hLuhfcTMAB3mCRgptSox",
  "key8": "3cfZ8duhEdn86sEDAwsamZHtJ4ZPEJXUVKTMjcWJkCoW6GsLcJDs5zbAtj4dqY8X23uipfHmFneLAJBiEKxQrzKF",
  "key9": "5GvSHd4vMhPxr6v2FbCX68ves1DKbdmhwEU3hk8ikFDDE9pZf1Ac3oL7uFRVJxn2kKjd8iTZd9NLfn2EHcsnKTGS",
  "key10": "9HUSub6vhtqbvmYkn8GxK55FiyxbgkUZT3n8k9bZ6tXMMXMq9MPwZ1hzxY23qTm5zC5n5iCKrdHHMF6kEyHipzn",
  "key11": "5ES2SjNtRDHdUL7ksP6XwH48H4tdQpZy28PxWGcg2t7AGxMw8F32v2qLYSACaCjZpjyKGsbgfwne54AifjVjXmex",
  "key12": "5WdG9sGnVtAYyK3uyttKyrdPC4aSR3hiwMsizV7QtBMW9jvBfyKDEVsbuKTaHHgiwT3T4f513R7B59ZVHnYe3Nt7",
  "key13": "4cYEEieFiCEVWGycWettn8VuhmR1T7SHFGa4cSKbXimx98AUrJ4Xf5Xj8WVucSGyLiXP6Aw8pXNiDH4Ec2Ky28CU",
  "key14": "5udu6DFHuDhmynMPhNAQWHjXZFvmj6pjeYqJG4KrAj331Vq9ACpM3zb72fK8MXrwGdqZuJsiTTTsXTdHuquxgGkZ",
  "key15": "3dVYsc2XaL9aNqFt5VBzsHYzzoW26NduyayaVUa47K5LwnXeYiRmGDCZvXWmZ6FK9KSfowVseoZRnq1dj73Razyb",
  "key16": "3HagEhMucErQCLdTB3m1tXLfyj9WkppsrDzDEx8vJ7wXxiJxkxECQJdBFs4Dg1ERBwBN53rQ1h6G1CbLheuBqFCf",
  "key17": "5gaCH4mjDU1oJZQbKgaRf2QDJfZrPdAiqVv1BWsRpF96nZKQR1Ljj2majxCUSc1oNyVBzJVcdhDFyhPam7wL53hQ",
  "key18": "4HYJQ17VfixM4ErdoUrsbtfWo3psqmriu2Gn6QicCbZQoq5BCeHwhdAFUL4z8XvTRthGTxs8wLsUbF7r9hN3ZdDX",
  "key19": "2bJfM6KNen4DtRtaftCuVf9276y5pmzqVeAm9fu3oh2QnqSQskF6Hz24q8f3Xr2giK2bu8Dm6emTv6c7QeurCwhu",
  "key20": "4ffc1V2Mpc5snhHeLyHMmk8V8fyzXGxnsoCUswuK1z8Xag35AkyS7EeXLNZmwUFE77aAbPSbyLoePrdGgofPTpC3",
  "key21": "4HvVikBToCznYn8nedDkEvyfo65uRgjyTqFDhVMwoL4euJEiR9fq8j7QLcpBbEov8xYHmKjTi7WJbP53dbshydoa",
  "key22": "45w9rEGJazdYUW7Nk7shTmBLAnpskFy4JZp2VrGLjY4T6YPEE8HdtQtZbP2z3tZobnDgWSVeU8omBEEwgvBmsW3w",
  "key23": "3zfRdTvNYzACPA5ouNrg6EWt9wbax8x3wcFusHBoPa3Fv8cM2748Ew37fPLVexxdAs8GLDbbyjXuE7xWYBXp9Yzy",
  "key24": "5Bgab2o4HRMuWQUVKtGYixVvt31pxzsVAnZsh96q6TdYdpQawbcW4SuXHchWppgCPuxNvshwpbKWYEJehb3bHpvn",
  "key25": "59D3Wvs3TbJDQVKnQY4Mb7EiybKu8D1vaYGQqgtbKfX34DZbvr9gxze7SjFbq9CaBMjXomD7vSH2UuF8CWa8xqmc",
  "key26": "356qLJGvBzuDJWXcYoAXWFqyfya3H6FCeB7BKee3jy4bvyAZcCjgshT1kWPwJXQ2jGCNMCkVQBHtJHK6GLLbffcQ",
  "key27": "5VfSXKHxmdZniHyiRKZZzm7x4n1SmuxGu1EzvsgMBGRYqg2cDsJYkfGTL1Y7BWYUDNBsuQaGU6PRz7nhtU7VdSWa",
  "key28": "3jgbV9pkCBUBxpALi2MNB2dvdQhEedDi1CJBuyipzjcRFAjvJ7KcDVmTKZdGt9gFJqmXzmPwCGrRqSCDSMKnzJk3",
  "key29": "jR1xJ5cjyQaAvKkFEC9PPEWGjEuVByfjog2KDwScy2BvPyqZjA7W9tMKqPKZVzAinTxX1ihUbVowxu1edPtNKG4",
  "key30": "5tkMLWiLB4QidUDEZtYcmCawK3dTdEUZjJaV6oL6vuo7es93oezAF4r2Vf6ybDninQau99jDYudWnA1nayoLAuRf"
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

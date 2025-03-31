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
    "5nJxMXLJT9ocPn7NC6pbg3duVVA6iFkVMSLG3XSPoshTjvixrdUFcAmPX4yJZmriiEiR2x3bmGUxHnLteUtkKsne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCttoUbz1TCs96xrLQXtyQwXeSM1rDn3eGZNwggkq483j8g8j5wjd7GmLdQdZeZL7AQW66Hekb7xNGawv1kzGQo",
  "key1": "3wJZVarVX1L1HhwgGEt2SZhpdXhBeZjPyPCx1QfkUoou9ouQitXYr1aon95WJGv9u37RygCgkpz9onAo53ywk2fG",
  "key2": "eGyyaohRnFk5kaZrbNbEuJKmcAZVncfRFWY2F2Znk2iDxUqupcsA6ufrZYFgaqpeDbu37LdbnAuuxAVZytQR6b5",
  "key3": "2QWR94udEE4cSE67b5zd1BFfZm9P5MPWmg1hWDxCkN4EkNmzbS3oHspxqEYoL56oare7Cj51TU9DSQY4aasu8C8t",
  "key4": "2kfq4AXjZXPLfCmaFMihFc7ahMyndcZJPKH1yNvoff4XVhBSJbpK5RVDsbRTnkA8ahcEHQgdKPz2pYa8cKZXqRr7",
  "key5": "5wB4dhbqCWcK1ac4ojpjbNDywpaHCWZ9tryTPExSfNm8Rf4UpYiF464gkFrQtBrb5DYMBGs3e7KNkZtYnSF8yN3F",
  "key6": "2K3YdvFRoDuxUBu6T2xg5aPeuGyAWMNW3ZHyWLQekfg61KESef5U6jc3CdTKrDu4JZu8mdGAFUCCAGbA3KDY4oTR",
  "key7": "3Ex9xWAtWBAQ6WPHRi5RDGfH9VaqBcZEkNYXLQhd12xXuiLVqMCoKCKXSjgpSoPkxxvafNCsCrrocL7RiyjBCAB1",
  "key8": "5zuKwxuKmcH3Kqn4JEuG2SPBwRdECsPCRx5sHbjzLQAjCUmieC6m7uTZKSCUe2C38iVY2LatK1t6kYo9ZWs55s3i",
  "key9": "NpucsiwwZfPxCoyAVu7UZQ3hpzVRF2NTXJUHmaUd6CKnqmFiBAZmLA8TXywmE2zJxtevJvqaZz8gXSJdVXV1pRi",
  "key10": "3y1BwPTbKYVNZCNNXKMkfuyYZNUxCsAgwVCSjLHwDkndiqMNL4iro2MX326ZLfG4mwQmwBXaJLkWBHcrgHJ88v7G",
  "key11": "2328YWYCzAxPF94KRHLHnihkjD3MuJnYRHWW9DEpj4mXqWzoqr8n9yeiVGgDy6KiQYN41YqKWdoji5P6BEWnUUCL",
  "key12": "3Bp3Yyr6ecwaQsF2WgAJ1hUPN64PGRATFY3beQw5H8TcDvgGxYaq5ysmPbT7AFnWz7Khe1mxdCrNy7gNeFwSYCqq",
  "key13": "2mqpW8hXXVvNFsdBnJCqUjwycmt1goacCoJp4F2HmTsfTzxwP3zkffegEM9Xn2fopzJEhnrHzrU9FpkJrSrBxdu8",
  "key14": "3gSvng3mGPKKJ3zECShAV2YNNooCmZTKTVauynoBgHuU5rjuhZvCSCsQzCVgLLjjFRtnEUwuF6TsehxMNCi5uzwA",
  "key15": "5mE972kQ3HJgzuzU1qGqqA5nJu2SjxVZode2bvWt7Uyyzm9AB656EaWHQdfNA4xbB3y1gsuxv6UTBLNugkWhejFr",
  "key16": "5QMVKdi2ofUNzGyththZkpfugFCCQpbdLfQYHJLJvnJe1r5a6jYjsAz36uDLyatC1VoQYuGMcRajRW2653TR375E",
  "key17": "34PH4ifp8hiVD3ZRsAeBBob6GZWDgbdvo618kRrASrBYEEmupmRXB3qKJUYL4yNYxQUZFXhwrvzCAKUw5EoWGDML",
  "key18": "2ybHqTBoRp5GnFYrjzMFF4NA1nDNPURbvXxtiK4BQufw6D72XaLkTqjd4fCqk24fWMeBvuYz3uTnT4o92mfYjUW2",
  "key19": "5n21VbymJ4L7BNmUJbvxz15pE2aZqW4CGAnMZU4Z6h3juVgvvcbycCNX6vZjm3XW8uawQHRpzyXMBX8mvjDdW9Tq",
  "key20": "2yJhQqMig8RUnekJWWviSocyTwmPkHciymn86KfTdRH6SbbManFeLgg3p8zcVE3imeR3w2shr6CjkXbtbHBSbMJE",
  "key21": "3E3FBg55zUSBZMQF9H9QJfsevFJ3nJETbdEoKe3UE19hBtGXrzyvGf12Uo78AjxbMzZhH6Q6BaAHweoQeLJPcjPm",
  "key22": "2cVMJ4XtoVqPpzmJLmavBdAEsgUiEGRWFQf583Bs9ceJG1szQAaJoUpkMZxmP9wvAHp6Tu3UUKrytoZYrwXUSsfh",
  "key23": "3Bqu5VeJ2bqCtcsTxRvtb2MtYm5wPy1EXUzaUEFCxryTc8Hu1DeSwDZoq7BHPfjXDYWeqWGG7LsyoKsDJvKGwXmr",
  "key24": "2R2G2eavJhvqZ2Do9qDAaVUSpYgm3ciNJiJGk32fTAYR3o1xYRLBSLRYDBdbdo7Sd53ZyvKrZcG92q3cerjGGsRs",
  "key25": "5AsXM1z4PQ6UshHb6eokSN1pzbrBM9Z1yqQ3mCLmFw9bNExmbDH2FJ58KccGxVeEJnrrHGGU9uoBm75F1FHKFwgE",
  "key26": "2mutaB6154UXJ1PDMynVsD6ku5RPTzWJoWwdJc2FyB1jX2ey4VcHqMnTwBxnBZxLcQfwedoBhcgVeZhAcHMJw9GA",
  "key27": "3JGuLV6m3qoCBp6SzskwXpUmQrULtMJ5jXCABnGm3JbkrEvkgBEzpAvqFLFobA6mty6hzcmoGT3CoecoPoH7QYy4",
  "key28": "2BK66QqvcsFvnSprTtmRYFU6DyhLtBjdbNxZXfPJeJ9E55kiLA2MB2BDYK7g3vnQj28Eek5cb9dPFXh8bum6cYWY",
  "key29": "26JkJhfg644XPfDowX7RMtcGkVqzdPDXSDxGMNkCktVM5uPXB5P3aX1tSF8MQFzeB84DNwgafivpkTe2QV9WVfqZ",
  "key30": "5YPkNMam8vAHfA1WhFHJFHBFqQ2ETXpzsG3Hw6bgZpidW7MKCgjCnEHozkJFPxDKWyixkqrAQ3q6sMmCL6PNWXiG",
  "key31": "3Lqgyuzi2qdUt9kNWvd2NR7vLMu1RJFfn3VgAqQMNFZBYpHhGYq6P9vdczuL67itx2woTxUsfdv1K2YZuprhXQSx",
  "key32": "42vAfC4PE3FA4PxoNhkRQd5qUk4B2XSqenaYTK9uEeHhBZrznDa4gXgEgZ7kDitE7QyJDL2UEZQPDVWt1c92HqLV",
  "key33": "41rehWq1xDJy636z2oL3eVptkDgqCYyptXnWWDsFcVwMcUoeYqJNXWKdPprPY72x3bK47Mno41ez9vsTTpaPHVLA",
  "key34": "jJj4igPEgeGjMkqwRrQPAgbhi5mvHBhu5VJX12Swyj8xwHJiWjMLbqoVDfoMK8mygQALBSmfcRvWejE1y8zv9vU",
  "key35": "dmp9AxHp5n3fQLtUSgwummoVDJVHwij17WaJjKPUiygaYAwTEwdiiGRYr3wDGHuauTdr61zKeqNvKPUA3cfF9TB",
  "key36": "5235bwXHf8qYBFwibQKmtu4L8eonfRiKEjwTUQR77VsRfUVqN4YAw9bzCFunM6vDdahdKknzaGJoJiqMB7sxYP2g"
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

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
    "4SfCVRDM9hM6YgS7NGw4CuEL2dnPqY5yMq6Sm6shCH8qNEGyFMt8VMSN1vk3vP5WB3Z3NETvMFmSE6QE1X9b1sC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MGVdgnmPeuvxLqGKctwYQeZARU2dbjtm1xDYDNe1PLCGx3FTbWCexboc9vTyx9QweVSkvuKTx7qgiCcFx7WyGiT",
  "key1": "3YEuxPCCTgLAtTQ5wJD9W713DegpuJW4zDbqe7dnKkTxYC441L6BT54hginZqtMT785zKgWL5cCPNjYKm2KdiMUs",
  "key2": "5XuSRtRyJszELaCU1F6q62CbAcAfvqUvggpGDNGJXaaStQx8DDmJRNHc9JHvk2V6rk4aVvvCrfVH4zRDLNjmSmKX",
  "key3": "2fwp3KsvTruiGRFBP79Sxn8wfX33yqH3kyz497VRFdMWzn2LAfJP8YqvqKjrWVRHCJkvgLXUPCWYgjRDKUjAyC4V",
  "key4": "2FgmSH3nq1EKspZV1wNqdCc5pkYU95a6X534ETob9rn4rsWZWYCtXfLg5UAcFDr7qUJzGFd3bHVqid6H5zr6JR4W",
  "key5": "5LR61oRxsEw3oK5yT1toNgMKdcH8Qozc2bsAYcYV6GPb3PyXueSLjT5zonYXaBh2ApvyKZ4EWUcdwdzo6Jr9U2Bx",
  "key6": "3Qm8JVUiNGJD9J7YVfQt9oiwE2puWYE7XcxJSGfP7BTdwk2c4TgC8DYfUU6D7Pm8Z9MPksF1cGqL6prwPFUXe5FC",
  "key7": "5cM2nGuDtL7KvCbLn57ibzP8tpFxUbb7cupryvSWKGVUbXMC8gwoLF7Gj8KXCSKDqZ1bZDwNc4qRa89bihhowz6f",
  "key8": "2CEyXnS3gFV7BLR9HTAkRCz2PDxKZRmkARyirNw2MS3i2c4ntXDNiu645wXD6dNiM9SxF9RuQddVppYuDsXUqb9",
  "key9": "1aE6nLwTgzrF8vYqMPUNGxwE8m2Ge62zn7NU8cqyTJfH27PDWkwYo2kuNvQgPUHPYha8HyYabLPmQNhFbRcJDKr",
  "key10": "2BebW5puKaPiRtNsvnnjKko4F1rDb2EmhpuFYo5goftjAoUSLk2b4boEKTtoXMuePDfL2RPpVos2jWoqJS1SePk7",
  "key11": "5hSicmsfDQRAtN6hYVoJD8JtMNMJ1q56gDWPQfsgBQB5Z3pQebRC22Sbv4ACjUjGG5qkEW9ViRX2mYYYAxbjc5bn",
  "key12": "5AJPdLsfhpaeqd6kDMfXYs4jzQpq5VsBvsPm252Re6hGdisVPoASQVSPukuVEsyDHPfVVmo9KRhBe8AWx5dmWbfM",
  "key13": "5qjauEvPk1sUgi5JLfJRteqEFN8zVCJPxpRdX2BT8LoS16aWMKuo7ZzYrQpMENj17FNKj8a6g2Nhf8ui1tv3QphC",
  "key14": "5uiCNc389KUUe6k3YfZ4ys1nZEW2i8q3DsZXAXriaLFhYEvQqMEqJyLmzKfQpsCZXyqFMm1FgjuZQFuUkKmcRC2e",
  "key15": "3RhQfgDs48mTt3mVyS2PKJ5P14baexG2rMHjEk21iwKGugZgYfLwUdFMxJbgnHojvEMEE5GBtTTLSmB363He4cEY",
  "key16": "4uZZw1qSa8coCKatA3mTCPUyJftPb6XuYPLuRvMY3EvM2vYgxhm3KXxkufiB6nz7sV5MNhpCoi58NGyN3QeVHFe6",
  "key17": "2j4PD5oPe4EfXWsRCqx6zVj2aoAZLSSA2c2RiUE6Gms6XtzN1otMFUzbjP2GJh9rgTMyYXhWPefGzXZyCcqWXaxS",
  "key18": "33y7iXV1CibDZzuyMHH6hEZubQ8xMHq7rTaVnKSLDkFvgoUtU9YbFiLYWVANeo4uqiDqtqBzqTjj5Z2wbD1GJmib",
  "key19": "2EbKqFNB72WrjV3Wyis7eDUsG13V5S4SAk43rGwsaj2Br3JzubMRDG6Dvj4g9hC7kLgey7ZoQsSCA2iDZm7zcnFd",
  "key20": "955DyeruBPzBWR9aQj933xxzNb55Zx2PXycb4BYZAaQLEQF9zWkWkqivSZGr4dmWpMgrBfQAuQ3mL4ZyxAHnqvM",
  "key21": "25yW7Z2f6m2JZrZc11kdY9M7mhZmU8WdEfoUTYSkkL5ZUqMUbDagnQyCfogwAaJ1gL92xj6wMjyHxFtMG18unYdf",
  "key22": "27EwJSuN6v96Q5HPNF66Cp1Cox9KPBBsN7aULPSejcNXpgm9hZCx6fakGJz8QzA6kybS6ngUjBKAottvU6X8m1v5",
  "key23": "55YCk63nDDmNLYUYimifUTaienSsdm365xMcybc5GwrAiLWdJJWBBrLeWSJjDr91kxaKRcNE2PyQRcYU3dhgzBXc",
  "key24": "1VppKSmQR8xeKcgS6AWwyAMUoE1QW1r7Ls8G1ovh32uJFC5ixwitdj5np28F19KsWHXeDJhM8doa16K42DeTqeK"
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

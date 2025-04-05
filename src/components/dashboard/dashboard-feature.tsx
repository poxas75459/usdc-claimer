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
    "2rzwzn7Pj5zWt7xrEucodBz2UTWbjnDnqiNma7CKjaD5gfvMkvaFDntwDMS2r4AnLfeguy3cjDK28hWMgPhsLAQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JfwTvNo1gEdsW8wFCtyfE6x9UKyaM2TfiqQgZPizXMty5Ve3X4Tmnp2cJ29eyK4aFQ5E9GKrx2oUTMWz7Bo6rRe",
  "key1": "2qZuS2K4bTdBXhXhiJbYvmhNsY1GiFnDNp8upNWt6WGBLFTHGakexoyWAB2gvqa1p3vMPzZdjBTx1JorRA1z9w8z",
  "key2": "5w27UPLu8eMqDBeU3L3k6SWGmLoLVB3W1anavB5fbpg3YuShN5STe43bB6UYTRcQtZCU3yj4tJfTUZmwqD2giidq",
  "key3": "P8wDTi3SxouneJk2yYxq42ocQUrryvSKxjhUycMaER5m5ywPRp4t6H7DzuFP44aXdcDu9m1W4mvdY7fSC6u7hyF",
  "key4": "4hcPf5UTxUqW4vhBhhuyz429nCxx9tJ3RyRmtKHge8RL7mHqMpJk7mVR5vhra2CjRdaUcYAnXSPB6s1523Je8Z2e",
  "key5": "5p7v4ejXVPkPeT7oSGvMVikJFE1bBX1162uYNHrs3F6KThgN8xYh6uGYTYUrkGSHWzW8d7h9tvrnQDz3aT1Qm5Su",
  "key6": "h8pdq9sbfrgpM1s2ZeDwdUxdR5VcQEEX9P1szcsnB3Wz6mbT456auefVP879oLorezsdF6RzvCWps4dL8JSsrDq",
  "key7": "2NwpuaLvtGthhdJ7P82j4rGjasBCxiqbxhtKVSQZ4sCPC3NcnePGYmXpEbMBzmagThDmtnSAbx8L6sz9FTmEuoZR",
  "key8": "5oYMW5sxpDUBwBTJg4xkx8sZaC9fTJ2W4Mtkzvhkf9rPYAZGwMBcrKyfTJmNZuZS3VvY2hgY13UfVTThBXj9yWaH",
  "key9": "31hfWiBXnK6WZRJrN4ppaBS8vE9L1uf78AepVUkLW4EK4TsaFLZR1eKRrZhJ6EEkGxdjUQDxsuo7uD12H5MSPThB",
  "key10": "5wZMdPgYXqrF5gLzmdU6cL7Xu6Qry1mR7xT5y1g8Bn6fR36y1n8oMSBGp6v4ZoThzWZ1siafcqTf1WSYYSfAoqDh",
  "key11": "637BZPGpY3LJreY4vwyAVeMbS2EwVk9ea88tBGQC5PRSNXv45YzCEsZWoGQayqw2Wnkw2refryDikU58uR9oYUfm",
  "key12": "4V36BYshp1mwYFAiUvWbyhUZzoZ9fkiGJmr7cyeQGRJJ8WpvNJuDZqsYLq3QFswooEfAa3yGevgqdBDeY48UkUVk",
  "key13": "4AaQp5JbVqr8TAioSUqk6Nqp5iXoCcHM3UhRGffkPZgxgDiYZZXnpjLKNq4xQgGV6maiEv31ebrLhYoDWWnThss6",
  "key14": "qHH4suoxdaJmCedtZ4rCxYymRZSPUEnkvRhsLYsC2vK7SHUPx7jAqNUTVLA4sPj3fuyEtgVEzqiNTnsQBEFq9VT",
  "key15": "UNTeWMq83vo6KiY9bisFGaJvtqehbpUQVT3ovMvv9UCs2M88BXYGrP1sVkv7iy7tcXgVcTZnMBcKHNcTj8jqfez",
  "key16": "5Zb6qEa2BBKwDTiDdbWZAwsmw2njfDJ3rkghGKqrU3vt9bQeuhbJcMrJPettYQaya8bph9Gmwasrvsq4Rm5hwRZT",
  "key17": "48gRGqWdx1MJkx1SVCxkL4WTzsGUf2GYkEezp6oXEyRhhHaiQrjBcpgetaKaDQ8CQvKpfXX4JhAfQUmVgpe8S1dy",
  "key18": "594yWJNqF5d5XFqZDa3kZFiC9PhdmxXyU9rHJZdmPGs99hDMDkwE2jMHMaKsKCMrJf6ULMq8FhcVekJ3LEX3Bw5m",
  "key19": "pgb53VKCWUeZ4v1nPPm5M7n4Rg2g9sgQMZGWJ3esGKnYPYvfDGW3oQJxbRBPdHsVfaGszQKkBZJF7X2vk6cUrfH",
  "key20": "2Tn1M9JzVUwfsMGDqJUR3UdiQZZ5mZUKQ5gNaAyhb47uX5stNbzJifbkGMtKW1uYTnRn967bft7ewC9QAWyMYbKc",
  "key21": "3FFSZBxr283bmXvBS5FEo7DgR1bSitCTHGaB5aVd6dA9jFRCuY7jswdJXZo2VngzhfkJg2gZuMfX1e56m4hGVn8h",
  "key22": "YD7PeJ2Gtdd2vgNiDDQHE6SwapfBthky7TGRRhkkmjqcyoXMU6hykGM4FiFKw6yEQ4rU7roYHekkBfeMjfsV9jh",
  "key23": "4GR8hFGs39FEk9GbnenkMqUiZLaDetgXdoa3BnnWFXKjtFuTiaCteCJDCioLc834HhA5HfDHKCfR5tNy8TmEGrNx",
  "key24": "pFaUkGw6xnywzga6eBX8xu3Kme1QqGSR7UMVLsfjvzCpaXubzFNRVbHPpGkxfRwZ5mkCKB5D5wURMVHdx1wqfeW",
  "key25": "5FKEHZkTvYv4eNBAFFwxDcjQfw7gXhXmKxyDi5FpNet1Xeq6oMacYmioDdMjCma15U4VToSazbNZqLp6Z3qLzhjJ"
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

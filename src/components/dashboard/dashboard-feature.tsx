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
    "5JkuPnqvSELqBc4prcKpFv7naHJpBnNYJhD8QZ7n2PmScHozHnnRYHWtRqNWPjx4vvMXoXfDah4SV7e4B9o5xhWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDpknfYFhdbXDDX5a4vqma2K2SQZxiqY1dDASja8cXykBaC9aGrgwxEfSjJbBFobRt6BTSKip4d2fE1wFpyTN8W",
  "key1": "2cpWTziK4zHZZdBMFQyeDD3uZke4SG26T1HZAt2bY9kT1HYobQZMFDGPSapiNEmGz1Ecpyte8M4bHSVcGKtcJTD2",
  "key2": "2dvFGQex3fpkNBMsqcDYZngQvYqXqESfu2Sek8QcKNC9yCwHWq8aeNanCXmt4siTUA5S2AE8WD1TaJDqNdkdBLT9",
  "key3": "1nHtJFwewKxwLdMsYzKGgmrM39vc34gkqsBGHPozE7RK9DPkTQKHJn3sShdhS5GwQpDNbRwDic7tCpn6PLUs2yB",
  "key4": "3whtxRx3xixahsKKxAy9C4z1TgNXgbbJUa96fnMqZxHYS7j9spdYxFQJUsQiUiguZRTLoevwBm8LuxdLxxbVbyji",
  "key5": "5CftdETXtZXhvhjuUtgagKZdQskRuAX3VpsD6mCPBRfYRpxStfGWdejQZec8NUDEgEpnsAeVm58ijCgxhaZW67hX",
  "key6": "4L42ZFrSpgfkziVjKQ7FuseY68dVo3z2HBWMgy5DtZNQs2La5YUWipXjiHFnNjP8q32bxuMwkHzDCPsfPp5gmcFU",
  "key7": "5gi6S5KaQtqun4NhYhHwPZiUNtGDpeUuSNYaAnGM8awimzHx7KPAPGaH7CTZvEMn6XyYSTk1XrnS6y1Nb3RydzZ9",
  "key8": "2sFssJa2q2eRFhf8EVgRTBDtcNAarMjWEY2WoSXJPBcfCYcGiJ5P2MxJBbhifLBKWNu3kuv6nVzNTFnwh76Eow6Q",
  "key9": "3TNU83GcJvcNXmo7dMqUB7z4K155bCeGupx4hAXcL4sjy2JnURRbdd1JGjzttKYwqGWhpn4XMZqbkziiUfdj5TCJ",
  "key10": "57UJPRHmRPRFXqC4KLukgAtoxAp8bXSV7NgYZRG6Yytm5bSQrn51NaHrC2DZLSyTm1H3aSb8FCcny23KgzxoiSPR",
  "key11": "5LFgwrtLAdFVLYPkCSHotp9S53gLTTvs81jaL3J5TKJzKfrRhtrfExoG3kUMiAfLqe8Nwn3bxzB5BQxHymBJWsF1",
  "key12": "5DT7xoSNPVoq3eSx4pK9JPjryfEMTRrEP5zKmiHEX9Lg65va3EHwdNhpoLZ2LdWLzcC28xUbPvZ4ptnRk7mC6i9V",
  "key13": "3oJ4RBu5yjLxD39SWCVzEvnZ8kxokW7DApT7foNrEGzVJZStGWkh3bpM1ojSGjogfd5SUduu3QoCEzrUkW3Vx1xv",
  "key14": "3dQ4eRR2ztjvxAkbM7XSkafwTjmFaekFoujBaHecAzZzRU1Wxp4LQ7KUrEBaoMfEhiHsPKkG18R8zuHZMu4hJpQF",
  "key15": "7BhfoP1HQs6nWJYSBikjdtwHwE8F72FbmXV7o6ZU7tJ1p1C37vAChoUQmTffY7zNx1PAs1tLrENHMB2fThNofds",
  "key16": "3vPnE2Du4ByUuxCB1tkung7skjJYxt9yDtwqznpnbWLFYASUkDC9rfEtP7R1EYPU7PHMJCy74ekYroNy6aQCXP8X",
  "key17": "5Gj1nGEUyS3m6NUiLRx26yq2Wb3BSsC5tpudKuW8dDQf5RUYBCgNbpbDRnhJykBVgPECnWUF1q3PFtzDZy9ZsMZY",
  "key18": "aoLZdbe3TCbkVVT9Kp8E9knj22zLXzLVDjczTD1HQS5e2coCVuVcvShz6nAwxwHow4k7H2ExS3EgPyYifefgf23",
  "key19": "4eQVDRvxti5VRjQ6BwWstqSAZ6CXTFVqfuv7yjwABcK1SMS5fvyG1NQGad7G2n291ev9Y1jzvqCRAopwrnwggnxC",
  "key20": "3H85gNB4E4MQ5okHebWCu7RySTsqM9sGWbPUizn8AHKS3xXTfyM9YuED6TUu7fq23vBWChCs4Nwp3vXrDDvtVxjX",
  "key21": "4951mgaPH7y8osgpDvCAvVy6VQ9HKvFr7jmfFkx81GEmCXx1sLop9Trnk69R5kLkeRBuPkfPDZREackfhPsF3FDQ",
  "key22": "3rs8MZBHZ4S8pDJ8mGACPt1PqAvkKeZjDqD11PUJN4mC3EYsej9Gd4KVfn3qz4YgtWge339pX4SEL4LMSvACuNzk",
  "key23": "48eSGzSGv3nMvGTVBUdbC63TZZQAa4JHnWpfRK4TtwvZuxo2mMa1C92YSznFtdGmjFveUeLfnjc9JK4EVkvyGXjZ",
  "key24": "66ZDQDnxoCPE8bpnT7wSr37vezVA3NAVKepmZE2JGaWGjxUFGzVMGWJgtWkSX7m9siw4zmXXaGqiWos9oY9cfQwN",
  "key25": "3oKmCpCGgEsygWCDLmgjqq7gsmnuHHcwao6S9XdzfFCaW3SgyPpqmivDdFUoZzECRgvWYrnFueyPNXjATUW7kYAN",
  "key26": "5YXRm9dfZV2VguHK6KQkCJzzJAe7LeysmHetnRBVWn5ZuAWYWj1xBR8k5hYcER2ftwhAYPqcxoaKg6NirVVqu7qm",
  "key27": "4fxn8s7WRhBUQh7yRXr83f6WJKRpK5AbXVL5Tdt9xHHSbZgxLjyLrJ14HkuqTqE7Wb3kDfLDXD4L8MniD1oAShvd",
  "key28": "23B5my7p2f67FMTvNmXbz1YX1LaMhoj1jyxZNY9U4BhSQLpTWJb9g5B5fXb5aRu3ic19oNwqXrSx1vQUGdzSZxg7",
  "key29": "4vDygfWSCi2sqxKvXt5xTpd7ytJWCHEKSgGsfK7izJsFgqzShkBZqiqNoLq5jbUDi1wR6A5x4TdLGCerQi1L7sTq",
  "key30": "f3F1J3MFrpRNivNig12Z6Hcowkid2qKsqPts5f3T3o8nbqUP5AoNaJktJZEH3bZ2zVaz2Wt2N7LN6QA7GPdELfi",
  "key31": "eAjoQ82Z1vAtRLYxxpkizpPj1xuF2YkuGw6idznQTQmpXtPDm5S3Ku5sibJ95PSCQrCvHtQ53aRxjNus5ZGeZGG"
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

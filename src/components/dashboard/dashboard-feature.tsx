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
    "3T8wRXsjyaWPxWugETBpdDtsmKYpuQjtMAWb9oL3EGRbkW7zCHda1X238MVL8cJX9YUSbjAP5dBoK36dqfVNrwqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSwfo7nTnoH8iSY1XSNhZP3VJeg6sye5pW3kCkzgtwDEk1L3q9BzY8SefspAXdU3MrSoPzKcur24yaYYGotu3km",
  "key1": "33Q9pkV1xCjm4xoquzLnwKXeQDUJHQpxq2Q96LDGAzFMpNVhGAhNooTrecsVr9HRQyikuNAZVXeR6CoEPub4Ky5E",
  "key2": "4pweBt7ZKov9LeRtmTCjqYkJNDMEGDWEJbSymWFRMswgY8MU6Jd4WeA4FtBxNk6WwGYsoiS5LkQ8U7uQFpnEk5Ga",
  "key3": "45sUEe6Cu5QKWqG1Z4oVosL1v3Qi1RNpJcLhuofYS6bETegDq1BhXRYogqAX2XiPvCj4HtA2xsmdHiuFZdtpEBJr",
  "key4": "4isU62EPfc6v5vnFxVaHJrb8UEswyWMVMsgAeuDBzZF17ycfmoJni5kb8UKLo16mu1h6R4Dak7qmXMyWpSFjkwmD",
  "key5": "5jcG8owfrzd1WZEt1xn8XpZemj6buQWRQBhXvjtgAj8vhdixwguscQCTx2S3dowdW4tTEn6xUoggJvFbxBqePF3z",
  "key6": "4Sfaj56VFBdUA8z3JpU6SMPxyZaYCx3TdDY2kJcHVnriDrLQh9q2btJ3ZyvwTLb711iWGboKAQTpQCX3iNKAoFB9",
  "key7": "NJvMVN8XT5s7hKwCgzznLGgRNzNSugtz3BvdfiNp3dXixfTiMPTxRCNJQwmJifcQQmTqHmGnBo7FDPDCMTCJnKQ",
  "key8": "4CSy4uhRVUkzM74ULpbUdP74hro29ThvNMECs3k1Qgy3LAgUcQ7CG7iLzSrZupJKtuoVxs5s68LeHxMfHqqtutUS",
  "key9": "2EaueTKGYx9QYipB9bu4DjkddLPJ3NqnxyvDhhqaomzijbQVFSeD1d6FeetyKPckoqVzug4irMCFEz3BxxNE8FCc",
  "key10": "3Cu5bgmFZEc342effC2Atb2FxMX9ah9n9oTTZnstv65c85BzoXgrrbZYwg6zUoyWy5AJ7xvS7FJkovfUq89xz6Ac",
  "key11": "33XKr6j3ZSF5zqouD5tQjSYL8mHkCWwNmLmK8fpEUDUBdEFF77rBmVPaMuqjduzDt3XzXrkXAUeXqWF23T93SRqQ",
  "key12": "4imbvP2EZCaMKEuH7CfZ1DwuB98E1Fhwe5DQUtou98AxtNTnAE17Eq4CZyF5H7612RU5AAgpBpLMRn4EF3hhoNBS",
  "key13": "5b9xbRU1iCYR21X4LCpaGzkrkKwYZzx6reqapsbmifdqj84n6cdVqfrrmaxi28h1bbRMRe45dUyVhyXfgSWWGgEc",
  "key14": "3knj3uMAMywWmA42uHKAHTppPvJWyL8p6erd1pKPQtwrTjiCmyV9mWUUCCPz5VHTETK7s9uLpDcPBVSGAmB4jwbt",
  "key15": "gfSo4vQ5UxC7hQvWomx3dr9sA8GEsRweBqM6MZDJqNn3dCH2pWKySvUTDDQwpcS7bKiVdi7yPE8PzohUzaMJHzg",
  "key16": "sZrmM7pAgZ3r7QDHFtPbksS4qhEQS33QCX93KmVR4vxASXRr1W34ec4onqf4jV8fabqFCY6hcuT523n5ZpxhU1N",
  "key17": "3xeUaqybp6QHwpWPxLUFc8n5mZvpkNvhurfeA6J5AyhzZ215Ud9h7jcDPBLQk5NKwnQge8pzAdhd8QFrB9zv7gu2",
  "key18": "2JMXeAvRoDhks6xmfamQ9XSEdAUYyDUerLSeRcxvE9j8KiC5s7semJEiYXpPcYhNUuVepriz1gk6cshEY4KNPGEw",
  "key19": "WaT92r2rwbS94BBZUyhtnPEs6FxWhqqcRJJd6cqHbFBrKF6Ms8iEvsnm8A1Qn5DA2f1yfr65RmB88ToRyR7jjq9",
  "key20": "5rpWbGnrfE972dke3KFkKHAKzZUUrDXBEuHg268hegNzEMbYXaMXxAZnbgvPihRvSmMnGBNnumTX7t2KZGVqLqa5",
  "key21": "3GkfZRShqkpeTKPfFD6oHUNGzXsikA4MgHKQX8FiVbT5KEHpZvzciZVcZ7ssHtSZoZx5F1PsQGXU68naeZekkHtp",
  "key22": "5U9mJckta6ThD5SXUwD58QgM8ptTAFwRF37ynWo55wiRi3AcSnso74CYeK1zuTx5rXTYrYaTQBW7pphB31hnY2ox",
  "key23": "4Lijw2hSRChZEkAtAFq6yheXVEhquDXfQ22w3wkp1ov2UcnFmCcwiWzMsTULeBQpjVfE1Qfmq4EAREweNK49BsX4",
  "key24": "3RpyFr6cAaMijwFLErBfjTezkqGxYGanx4SkqUicGG5aL5Y6LUKUn9FFtDJdRQJvuwST1wSshddbZ8Zd22REtSrs",
  "key25": "5XE9Eaoz3fSHfqoaKSuv9iizYEVFKmcvHAuwhsTEbUMDJLkhSGo3bXezN4famg3APxzcfQnh5H4ykBgqxszCQWHx",
  "key26": "5PPhfYEjCWDreXU5V5Ptg3aYfhLoYTmz965xqq3YVc3ompLgEeHnjWvPKHjBQh4G3r8piws9AWJwU3iXDUtMi8Y9",
  "key27": "4hPKGetkHUjjFYpmyDrRpKtLnyuMx8QcbcKfvAL3P7ecHVwhhc5799FV2845imbechoeKzFjc9BQqFGrQGMYDw1D",
  "key28": "4skTSi1tmLruTRe97Jf69dhw46WfkgWvczXKs63wm4W9ThNA5s2RPZPT9KagLfYT5zTNTDMK77A5MTHAvyr2C8Sm",
  "key29": "bxVEMArpaJvXBXvubaPihzWeey5JkPv9JSvmutHnhciw6wVPTZNcqwGPNyN3UJkSy1GHQxfXMQX7xHQHPmc7qFT",
  "key30": "35BWxxhHYfFCA9qrLiGqX7DjcEWhr97ZE98Fa2kKpu6vUC5AAd2irkb7y29BfJj5vNbv4AXvKrrCTQTUf8NJGdND",
  "key31": "5eLcv2cTBreWEm7bFCakMSh79exomL6B89L1hP7y9PZSybTnV5Sa7rZF4PqkiQqBeS3vzuADE25rHcNyXDeHAvFf",
  "key32": "5AYLxWkqXaRQYfWhK1ERigYQCTLSe8egLkrtANmbW6jPBoWTG1KnkFRPEfbBS4Ci5WQH9WnSrmPr9ncHmfq5TY7n",
  "key33": "4jdeoVgQbMRYVwKTi6dYEAKdr3DUE92RhqYrQAieBVauwqtQtsibZizNVNje6DdAM8wWhFUy6SHUnqAp7JBrdFLV",
  "key34": "ZuBZJMaHHDqZu6x2wjQkrN44PkHVRa1YE6hKmtbkWXF2eW2DUyJ1Jmyow5XbCMVs6vRS3pm6eZr2fsbKfiMFHWv",
  "key35": "2WyXLRuPAGD1xfokQ2JxNwTFhi7pLvpnziPC61K4LCCLMP5Td4NfSdYeV6A6DT811Gr5uQhhGxy9zcf6ADEhfSYJ",
  "key36": "5AdFmzWxpa363zxW9ZEnZrcbohsezpG4Go39Wbt8QGnekXeiP9L1SqyiJRjKiku3T5dNieQDMATf1XH2QRmUVKBP",
  "key37": "2PU5JrdG6u8xfMBzVgPYWsbx1TghkpzUZQEc6FrJZU1VWJRXRm2VtTqXiUbgWkTQJJuEYysh93cUnVZmyRLH1UuU",
  "key38": "64kmhUjshTePUwpfX18oxMKXjrEbqRYN9xh7Fjz4bfKefxqDm9ZLgB5Kx939Xtmx5u8ZikDgxEbtdWshY2B15LM1"
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

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
    "3c5heQBadkajyvCfkvqviwxzHW5oG3GejXJBoiKfWMx2VH3duPkNbGeLZJpngRH3kA1RYsw8PoEXZFkZ9hjCUG8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpbGRpQX3q4c9jhsEX9VhRWhdUst41QDfFn9gj8kJ7bgLtEqsBwjp8rGsa9s8XYp8yj3QJk95rmt7zdpntwQaNw",
  "key1": "89S58mfMHgdF9WtfJRCeAfzaB7anTfyU3hz7a9mAPUEAz6RiTHH8wxKA14mXby3xSsC9bMwM6RSvDCyMurUsiG4",
  "key2": "3cf5NDLxTrLzt53mtjiLqTk6vUtQijVydpitLik193LtiuRXRVrnJQDwNAnBYwnTfzQZNiHsKFPakTTxJJiDUY33",
  "key3": "3bA9VKmohfXKhpEjWztmhk6L3y28TqJoP69cxq84bN8wwbao36TAnmLKrQcYh2wNjHPXH8MgYGn4hvQauxC8b2Pz",
  "key4": "5YX2CQQ5X5cQddT8eVSXniAJoKooTX7TeYYUydXYz6X85W5LPvfcjGkCrQPeTXgGP5BnSB3rTwrx7E1vB3JtFm3C",
  "key5": "QWZCMchjQYvSpBCtU5Gm1iYyMYFAdWqm7S23E5kvMcdU7ckivj1MQQxPiNGtE3Q3k39sg7h8tAkQTQDZfN6JcFe",
  "key6": "tVHh6cGJQqXDwU5oHKmpwaGdUPea17tBQ9nJ4ziuqAkzev34EEvgdK2NUS47Stm7iCjByoW7vs4erYxzkYudATj",
  "key7": "4oJ1L1M6F3Cu3sXza6K93KBEmsztjueG4oukwXJ4QDre8bnkmNxPjBccm9r8zmHUsC7h7N96oPZmgrHGnKvbBqWn",
  "key8": "2z5qLhCT1jpAyswRXpaXXsXou3FqAwNrRWkW6yhxJeD3rPHhuR8kzgozxSFt9J4h6maLhtj8QP8Mh3w2JiRPuxEZ",
  "key9": "3rmPNoFkTb8X3AEtrVLEx4d8Fx2YXuDDZ3jG89uokAVQG9WAGesUza6voHGEmra2obx4vdtGYGjQ2yxtEZ1HF1tr",
  "key10": "3SmGFoUambqZ7zwZcHrUQoZ1kw2dJDo7ShDPBx78FN2tKjZWtyQgMPafCoV5tdExosbR3H3GxuUuhzMbocVWDPqu",
  "key11": "5ACy5hZg1hNp2HuoiMcHNFiTiJJ5hQWoc8dSE6Mq5mLgieHMPUEzcqQ1UC5RUY4k5oUEvaT2piBKmzbCzvQP7hPs",
  "key12": "MJbwMuBSETStJFgT1YzQ86pYP1UvPtBW4q3hYwenR3Jf8TrFwjFJqBPqJThkHXVvNLYAzcCBU6amPbsh8VmXpqg",
  "key13": "5PWZr2h81tT7EdFUAva5iuY9Ngz4dzumGXzocPbKMhZjhUk9oohPsSPe1PeajyzVL88HsxBb9AYsc8ENnq2VWdjf",
  "key14": "2NTmN2G34GQFWZCytYVJ9ziBAnvZ4idsudrSpgfEaE8yiZRU9nEX4hbtavLnEtAG9EJCWjALfDei5YoezH5G3936",
  "key15": "4r778X8JFvYZNrGEAoRLx5pae8PdiYbcccxrZyDN5wf7jbXhMjm7aqKFPbnFna137s5hfu9B3fyEWVB3ZRtgpLhm",
  "key16": "5MLuXjroq3fPbZMMtDMkZD4rpFaDYXWz6gtQZrFNYqaZ6cD7318Jjr56muE4XJRDvQ338LbA9VQRncvTi2MGgPk6",
  "key17": "427JVCAXZHoGPKAAnGqsokar5tiX7kcThundNKPhCzHrTyRTa8ytB3AhwLPoKrXMn4p3jg1fkDK7vt949N92BRrj",
  "key18": "3zkmfZNxzW4c8zx5m8sPe9MV1A5B4WChTHKfYM5CDH46ZHs1L6Nq4DYMNLTMAyWucr1encdY4D4qTdpRAeDmUzrQ",
  "key19": "4ZuufrT2rJqNkETYpLQEdCmHChXN3HNFPHYZXRQPNB73NYg6kj3c15ndPurgtP7YHLcUhyyqnAzsXCUQbduBwvqd",
  "key20": "5TvEPowuxkPtqktvRPbBZyPD7Yz3gjZ9x7QN7JACEB6VsScBAeiMMoRDsDy1qcscocYgoa7Kqst266aNPQrBrAca",
  "key21": "2LQuWntUWyof2qqkwPV6eESN1fKHuii2BpoEQcdhLsaisWnJ5wgxzFTVcsWF6kase9YjuAcNK2xuU9fJJneDkr8x",
  "key22": "482yi1dHc2JybCtFfyNy7nGEyutzKF43Tuv1baTG3sBKDzZSQVEeR3dsS3gpBUZeVD9tn2UgcJgNGMrE9wTzs3Lz",
  "key23": "5FGNesjjjB17P4HmkLGpUXRg6b2pY9EtuchgkQamgo581PLysrEeqJNr3DV55ZX9uhURz4nF7pqKFrThxPE1pqXX",
  "key24": "3HziQjnM3Kj6yzHKTS9ScesHHWkyJZGZXHpAMJjNDXVfeMvqir86m1GjaTLaiMYMkjRU9ptkSv1ktvtuYQqhW5dV",
  "key25": "2556gWgCkmmaudRDcsb9FS2rpwQG31wT5LVoFoA3c5oNPEz32o4hzsLprAgKQFAfCqD2UrnEYyihaGYkFXS4wmPK",
  "key26": "2s4eaQFYUTwUFcvVyCvJpGcXH4Yyu1JtnYwE1aQg2bruRbhUEm9zYna2fSbpALbQ7TbZrWvpFCcquWcg5P1Y7afU",
  "key27": "26q5YxNP1JZ3nEzimZPegD8mbS5rKyh2LVTwk7RorKpMtkFVqA4tRNKANgCM9nbqwY5eVFprBQkRqWW7MsXoScDZ"
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

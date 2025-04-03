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
    "5sat9niQKnx3p6LKqocqDefc2UkVLA1DdWLhjZju5wQqFBZxmKjJ9zPx5HvoF5BbwFgWXoMqHBydpr876RypaRYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrMBFMFjzSCXPGLcYskkwGCrV9nr31BYoemGMHXVxUBo5pjZEApWL7F2Epc9zi3YUxKtWdcVboYpry7TWJVDFrs",
  "key1": "2YL5QKUhw69F9JJNAb9Rxz3iM9Yn1583MiWdHvuZ8xotY2UXT298T8XoF2E4316JhWN7Hf89ytcKRTKHhM8iLboq",
  "key2": "p4QRPwXZzBh2YHP3vL3fftQnpawMQ4gUwzPeh7Sdyfuoknx13aVsRnm4ycdwzNN9XGPXYw3jisLSkZtumSLquEm",
  "key3": "z5zr9pftEVTLYogtZVT9PpMHNCxRCVDWbtEYJiDMe7SCaD87LmsnXFcGzRibZyHoVyJAWuPBR3oU72BFeVipRBm",
  "key4": "3bLGvPADJeN9d68HLMuLaMWgJwV4yJRh82yXoKmk2mAqdzo44bKmsPyoa4ttHniTmjgzAynKJ6eL3FzgFmNPzjav",
  "key5": "2RDopNe4FeE3qydaDkvDUv2nvRYswVLftumUsTwcLwxX9EZBCzgDN91nrBUdAtmuox2dWky63o7QURqZKxq2wS2E",
  "key6": "2HhcLzMMuZqSwnVcJ7qrnWUc4WtDhBefomgfREJAyAnBP7NeB3h3jEVbXg8j3gCbXnuvXEBfRGDfHKSJpvXZbHy4",
  "key7": "4Bs1cvUMqZC829L5oFGkWXGkJJtmX5DZN8WW6oEt2cSsqeua1ePPqyUMnDU5UwqBhqDt5Db867L63F5LA3HCHwLL",
  "key8": "4m3oTLHw1hrY4sjcYWNFA1KmPTPcJY3nvpgVrnvGNepN69nhpoCLLCSXzXXcY8SUAksBByKhgKJv34Bdx19ypMTm",
  "key9": "3SvXuEVQgxognvFKBuMt2wGzHXTQ8oxEu2TQ4GKWWzXXHagarosELNNQfcZR9ou2FPKtVqU6ASUnJ85zpVofd72S",
  "key10": "wyjT48RtugAZj8soZSt4TjzpppzbRpH1kqeYHSD9EtwW6v8jaKca49J8atSviTfLgqe94m3n5gX3JruyLijEPtj",
  "key11": "4yfNrGJY12fQLpCKsbV1aTth1PpzkHMCxK9FPGtUrLS1nB2siDAqj87mnPGhuDHwdqMhwVNXkNjY8Kjbu25qSCf2",
  "key12": "siSoQ2fh5LQhtJmWYbmr5ZUhAWzWdoNrLPJdMDi14BRH49B4a8ZqfvaJbRzKKsCFAzkb6Ynpz819MoDCLsfoVbL",
  "key13": "LkJp1kY7BxJigr3sP1AzXytHhuGdsZSNPWWDfZ3Sc6DAorWYQV3jEyRMKgestTCciezZ2pNcFyVuinPD74NGX9j",
  "key14": "4a6RmgqTb8i66epUuDMnjPMyCjrLKB923vvcQFksyxtyWWMSRPpj217utTEMVFc5XZDdNL5hsd5vtrf3M6YCUVrX",
  "key15": "iKFAa3wxhB4wHE7hJ3uB11ZUTteC5o77dvoW4vojYRJPRdL4KfoDL6eCKs3xoFmUepBTHRcdhjzLzXdzwKpkJxp",
  "key16": "4nzrkvrF4w7iWN4joM8sj5FMFukw5pHoqB1WoKNpUrahPXFXYNHto1sEWPoGk7GvEiK1rLDyoEWkayWAowWAQmtr",
  "key17": "2cVR7d5HTgXtfaB8Qzn1EWrpVLX7SCameqfYUXukvkGsWmkVYyNSJcY4j2E24pWrnzeSabYGr69ckNwBUBhVc9SP",
  "key18": "4X44EvwT89d7P3Z7LgYcL2W68iDHnkugC6YNrrAqbxzs554ToRAzUyNGjR3dgqCjmbM5JVYELSoKJDEgmiYRZT2E",
  "key19": "wYCcgzK4rMTFaCKGNHz5igQN2twn6mLd7336S5VpyUH75tB3jBstemq672pswwikoeZLKjnnhxae9TsJ9n9RxAC",
  "key20": "3tgxpm4i6bcZKp7DMQ7e3UGdRXHXx6nebqhgb5Ds3xNaXf6yTMJkvG6r4oABRG2fWHkCKLBuwCMdXWa3NzPwUrSt",
  "key21": "327fteqALeQ15eNw8r8RSwsevFcwHXn9TyRaEYXsgyujhqj3QacCkB9jhn5uW6vfa2WEPhVNTuTte5nGwWPibRqS",
  "key22": "YKXFcLzwxF7ERwQFZQ6NeaY1e23hrAf4RK4BKnDZBZBEudh2G3jYcSRst6NsQxxt9MoFRD5LouLgrQND83mnEEE",
  "key23": "xPJmUaxhRX95svnfyx4ayt3ftHm5w7RBTBCJKP5KbU5vsWnXftxB9RNBmAaXKCYxgBEsNTwxPhsRrVqydrVBtcA",
  "key24": "4izFkVJeRUft9keYRKC5vBh2U9YVbTk31ALdpLR7GoDvZrr4SVLcHkNXxkDnUeUhGnVrSgWRJuRoPjyZfziCmqtV"
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

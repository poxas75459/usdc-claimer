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
    "2CoM1pWnR9BZTqM8VrNjzBT7DeJvpFy7Km5H832Cn53H3g5wT7BopnHFg32davrAEuTMDoWL5W8afZXXKY5RDQN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZxEpkfzw4GzpPFqvBKqSPUMjYLBjJdcKPWKgS3ro6UPVZKzKaYsjs7cpEKg26D9fXJ8rjFswrTZsp8JrNTqGTF",
  "key1": "448BJyRkoh6dJVDcqExqtbLFmNEgL3LJMDAcQzavg7DRHuAgocpF9fruFXemTTh2X4WeTUagd37kzijYyM7VotnE",
  "key2": "3tNzf7m1XWYZV8k535E67Cr3yZrKywYk1LPkp7JCcbVGgGvRJvPARiciBnWNBBJUXW8HVkSNCnQFHct3cazA7Stv",
  "key3": "oAi5X9ngNMhD3jpGYpbv1hGAAQXUuHBFfCEdNd2crT4odPnX2Cdd1C9xRP2tC37CLfvaRL4eeobddYd83BRnucq",
  "key4": "2jFC2z776rb1hQ9JjanvFURVWLqwgZMrKRw5LBSq2XWWMVqvzPhCM2FC7HjQh8BZP4SrkzSho6Li6Rxt4qWAn1CZ",
  "key5": "43VQwWrWLaYXbaRi4vePcjwQn16GBZVfKayLQEx4M8sACBiGZ1XF3Y6kECVmgZQtYNWUhGEWds4hp9a7tARShqfX",
  "key6": "4c8J1PtTvZJGJALwcZjZj6nFnCrbRCDM6YBsVprWCqhDuVuhhwmJ3P36XPw8FoNwrSEwfb4CeRees5DMHDFPn2t9",
  "key7": "5WRNiqHTRVPyjpNY2ekaJEnsEqJanTGQsRckeqPF9d3oMZFVJD2ZbhkMvLXCxetMzGwDk86YrLE7y2uCgQw8pWZm",
  "key8": "2bCrj9rBE5v7d4qCkxdLzkAcg5tx8KTXEFxAGpbTE9qTj6arbFqBEGbxqEq6FDqwPoJ3wYLvER7QLQ4CdpWmPVVQ",
  "key9": "5Cj3ShxxXGZiBm6KR2viaETzcxKTLEnWESgi8vXX5XdugfvoYbsY5ekjecL3eGnXf1UntU1Z9mSNFfFHHpnPRRYX",
  "key10": "36CDUhdwa5qsG2b1FCKm7u7vc6wgbrfb4YxPses4a6gBQp6YUs17dFimfJxCzxYg5vNqMyPHdgNpQiprEQps5dyw",
  "key11": "5U6D4o24HqFm52rNEs8QkWR5hwVamHqGF4rukszSNRRyXmDPKUPM7KtXQQKE8dzcjg3bqwywuCMQ2PeCvA9CCRty",
  "key12": "4Qor85hBqHidCXhopj1UtokwGBiWNvbU6VrL9SzSbYd8K5AaZBdgAe4Cp2Qn95QmjicNbsGekYsVr2WNwrZiS5HV",
  "key13": "aca1eTPyYZgRu2hTjTmaHmS2XX4skcPqwCkxWcaTcjWuntY1VVCj65UbF7HrNAWj3NZ8z7nQeUjnjziXuR57SMw",
  "key14": "3NiZv384ZSqUAYDGhbHfgMrpLmkZivovEZLn7FUqzQ2xrERELby7XJabRSamrH3xYrrAgHDsWFwRCgVc24jgncAm",
  "key15": "4bD3DnQK1VUa5TV5hibkh17X9WjvPHbwUy5vBae6XXPrH3Q2Vx3ndZhtq4xtnBnAptmYWuCNobhRF8LQKNPBsuDd",
  "key16": "3vkXyYYjaSQmocyk5Hz4L2vZ2o7bxpnVBpzg1Ra2QR1vSzkPT3DB5jEt1AdVDnEmBBugN2KcEGu5tUwroQ1CR9dy",
  "key17": "KJzJ1zj4tEsdmBUhDYtBXwkm8KzWPL2xnycmB1VBFGGPpE16ojoXfRNt2E1heCrxwTSoeXiGobaKv9HKwqew6S6",
  "key18": "s5U8UAuYztu278e2M5Z8qUNNYniwTaUYqhbw3ufZ4oRMdNik9MshfHih97WnPcp8LsvsoBA7mE3fpctNfi38Faz",
  "key19": "wSsHetkqPpRvLfvWxjMbj5fqGvbvjtLxnpvezTLKgGE3YyTk6NtWHJxWqhrBfPTnie4QKtXBhai7D7ZRzYu1vx6",
  "key20": "4oMbjjKhHu8qCHns2Tywd1jbX6uYHuagyWYHYpLoDaJmEtz8eBHqG8jPsfSkFkMk1WaZty6TA3wrdfgHjXCgaU7t",
  "key21": "YyArtsXLR5udFPijTFu1fx96nVPc4sCXZS9oDg6n33F9j9tkfqRdpZBjHF8nZYTEni16qFVW9fLXiDEZcpqmRQW",
  "key22": "3TRPeegf1tWCzowdovGg3iu8ezi8uw63LHPoNggn4C6GUiUAe1EfWVVzNtvVHcbeZWoD8Hf8HN5XjJXReDcMj5gV",
  "key23": "4gpzrJkUZipFij9HKyTEAoHZpRMaE5pn2jzyRrLs1dWMEVp2BrCna8wTqmhfWgjVRL4qnCxCXrnNVCBiQHA36LAw",
  "key24": "5bKHADBgZHuk1upaL3a6ABEfW5ghoC9EDnss3YBxKBm3yx9SAjVstw7RYThA5NgvkUPgGCWtR9SP3FpCV4tH2e3N",
  "key25": "5uQKZiDzr5jDnoGYCYKRbLwj9G8sKxWiiMhvT7fChGJHCbNetv9bEeXJ2P38SX6m6ZkWkuWpsspBqcj5uYBPWDMj",
  "key26": "4mL9nT5DZcKEjVUet1yxmo2ZVJQS1QrgEf3x2GgjF94oXgnU99A2REDtzzZgY16f4z2EgiirQh2N3xShJUN1LVvd",
  "key27": "4bpMvKTnK3woGPt23UV7qkm5kBej2iL1vWFPXfYzNsT7kmdsYtced2WGmiv5ES9SHCseU1GQyGEtDQZEJarhJvwX",
  "key28": "5UdR3Aqnui5GLCAXfPAsaPgc9QcA7rnR7Xya4wg1EWoX47KkW2SqQmJBhhkJGuHUuXCSWy28VRxvqRydF4B9hmGD",
  "key29": "4fGoxXyBCesxgm2WEqCUVdSJ4nbCezRs9khhFmy5MZFHyBVDeV4mq9uHM82TDkHFCigxCW3dE1SyfiXRoGbDjb3c",
  "key30": "2NKZ1xJ8mv6FmqvFpPFxsQwt9jfNYsWXpuRhgCiiSo7UwJdaq8rTx9mGwqsquMh6sgVPixbkzt6e6mi8NfKuLUgi",
  "key31": "4jBU75agk316CJR22ViSNWrNvniDjPQnL4akBBowTCeHTFD27NimAy3nns5fQD6GG3XSWPpv2ao1aJSx51fVWyYb",
  "key32": "6sbo7RzA2eubnVDKfENdJfkhJQ9CWEjidQtEX8TbBitjp5ifREGXsBFjswM9yVBiutZNJLSjJSXF1L8a7BjvQBQ",
  "key33": "mM6RK7BcifBJd7Wv6KkuVBtyFoXAxKQ3utjCNwPDvxFMKzWcD6PVhozaPPstmBeukoWUjxB5ttyTAuSwYmo8oQN",
  "key34": "5QHXR9294ekLdMCWzv24uaGqjVpRembHzjanpMuEkvQh8CNmEEmsp5UERKYecLnXRxrg1JWY7zWNAxFTEXq8XD7K",
  "key35": "ZoDRWuaFufSXtRipWq512jmy98WzE6LgUYYcPmDg3P6h4YHPdrexyns1dVwJsCx9JoqHVgGao4uMgPMqbbWPAg4",
  "key36": "5kLyfzzByAn3SMAjCBuin2wRQKEFqB5RH3rdicaymw8T5yB1SS9AJAKpcyo5c8hWTNibCrbdYjkZMEBVSmGASyuX",
  "key37": "5aiv18cJWgT8xV1hLvZf1fqwfbWy91CXm7NnfeUiGZZuUwAPj3ong2ENjh32FrJtoFedRqgRfc9UoqzxT8EhqGm9",
  "key38": "37M1oBVyM16dBJfX9qahhgKZJHPAHW8PHGzXGsVuT5sfRK21rdnrJndrUCceuPp4j4g3NWgfzfLEZSN4bTwA7Enx",
  "key39": "4T95GuDGgbqiEj14oDsGzjRySoonjDUxvayUFxnQaUKCJPT9HefE6jcowVoUtzSX2zLkFAMJmrySP9PXoAKWNVKY",
  "key40": "aECHCv6452bXNDPM7CBUnNZqgDKLonmTFtqwjvWEbvQamWqxdUTREh4x8aArBG1nnQ3fW191TSGqpUuPmgfcBPE"
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

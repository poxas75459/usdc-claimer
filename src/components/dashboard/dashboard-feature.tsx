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
    "4L2F1xDGWX7jPqtgacD1uybrE5BcHmY9oYDrsy6LKE596vnbNU7fwEzWmAdpczTjyQfeRhUwbb8hoeWH9hWnVtnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VyHDERPtC6sF5JvuA6tZvYVd5asAcFyJo7Qz8TEdPfP1gWjKt7B56e6es2WYcpevEtKPmkR93LFYu91ZzxfCzD4",
  "key1": "2Gfb7ViVAuCw7EgsTv1bmWZ89aqXMaX1EYLHnmF3dVG6AanjAfomxemCzFovBiejL8U8hTadKSLkv74UxAhjKrdT",
  "key2": "4dmPrm7JTucAAWmwMwjfLX6uoNQxmo3AqDXV7JpL5bcM3ERECZWUBg4PDsTdSHT9hqDThiAwPzUG6iKukQbpwo8q",
  "key3": "2jkVZXyhrJeVHpFjACRyK7VCKTSbiAurg53QPMQ99XCCgMvrLq23azDiaeFKXQ1MsKj9vdf8Jy596QAYpLWftQaF",
  "key4": "4qq5ZNjCQYzLGi5WB1XnSn6MSZedLXG2M3sxpKqNuBAd6m13VZ9q59in11xBrU8agttLkXoyK6WyJnucmu3QM1uv",
  "key5": "3wsRSNmuvqDKAQrRgRWFfcLipFiVyva5jL9raeKDqhQuDZ4cAs5yqLAUEcoAL3hN4R9RyuWTPwwYVm5h8bFXFkoL",
  "key6": "2pAq6DiwFVZZSMi4iis3uijTAsBkXgZnuEFyAFnTP3oYTZETWLZKkJBoP8jFvfJaVsrTeVUXT2J85uxZKPBnREuF",
  "key7": "4z1iTpamGRAibSpKEN8G26tqJbxsz2tWXWFUVYj4gUPFwYRfCmKjxXph1ABGJA9bzjDY6K4hfkVTFym63ZEdV85X",
  "key8": "29CZJoH5eeo621mjzoUNUgTcaQ2Wis5SJCtT4s1LzsTx9f3U8CX46dU9YwjWoBaxR8oAyGyfKxBqNoXvLobcQJVH",
  "key9": "3hk6iWMuJ3ahsxbpUNSRDhof894vfFZ4RAZ8PMTzNwS1T2TGo7QJVWn3QvzthzjfEz3caWNDKZrsDPWDja74za1L",
  "key10": "4pjNhovwAmrh4q3VREhTojpFfzDbuSBPTka4e6AbN9S3Gb8LrtEk4b2x5BWMKiQEu1ybenwDhwa6KfbbC1bZkUP7",
  "key11": "4cr7xoehkRaF9LAsciMwkqBCCRCAYRiC918E7urExzTgeZy5ajGBi1Naz9PcAGWPeqjs9CL1ze8hegf2zo8uSGcs",
  "key12": "56AQXGvkKPjN9bUzhRmyhg1zt4LsZk5wWL7RrdWMMTubjGxb5QSxRknaqjWkUuY8GwACzZ445QYPxSxmDHChh9nC",
  "key13": "4HVnrujdUnsZ5QYFPe5JK3yxqprBDdX7qFDsTntQob4NfqPSsLBYmjtdqXiBFFuUGA7DNbtfUbARz2q4cuYtCkc9",
  "key14": "yhzhPP6cNCzo45J22PUx8Y14WgpmrBtQ8pvhohv99FdtpmSs1JEkZmAnoAvu5cJPYzosAyTDJvB5Y4vAA5SWqsH",
  "key15": "5yLLjpLy48bpCVnFQftZ5KLhvh46EWYYvRURcdJiLbnMpACbbWL31ivrfkLC1B4sXP9CRaoiePH74dt5pnFtKGDA",
  "key16": "2D1pAZVPu4pj16etRimmtuzZg1wnHQ5zdDa8xHjkkCRfodzZV7TC8pLrQxrHzNxkNtUuhaMCh7YJn2btxQwMWMUX",
  "key17": "4vqX89zfrLTR9Ty6DvFWYX5BLFd6XTQ2DSk1XtQnSVXZV4XJjNDFR9YkkVSfkYqCVbJex8Jqa47ZCLHPmQm2Eve",
  "key18": "4En8Zvxh2PFV6v9AoFyoYpmNr9mP6xbQWqTMbmvSrpSi37ehvQa518DExDFTr5BQ7KsgScpW4wqHomn8SV4FUG6C",
  "key19": "4RHRvhxiNu1yEKMHoW1nCEJiDtasqrt3w62TujHJYTQrvjaQWuZsRmSUWkLMsob7mecF3H9cyJUMWU2qJP6oMtP6",
  "key20": "5duPFMokm39YAW87UGMgR9o1wagCksnTETrVSox1fjt7aGjjWeDTn6X6dw5mZiJSQpXYS9fnErtWgmKJSZV2XZuv",
  "key21": "3N1ngtg2gitmsLwRTUJNRveBExLCj2c81SbLWpcKnVHm9jwr3uPPb8xKviAQULYjXqjZ1hgeGiScMp8dxuGYsn6b",
  "key22": "3Sdu6Ts672F3583zRPesBzdyaQQY9wDRAtjSu7T72veGgVByyAU49HCrggEDtDWzReEcmM1AfQN7P4B8WNd5TEBi",
  "key23": "4mo3FscsxZGAK3zYz9DKBupWcjq5TNEoPh8cKPgV2cRU1K8NQRvZk5GiJGMdLh5yP4MmPGo9WXHvn8SrXN6ssbjZ",
  "key24": "5PbBVTSxeaCoTd8h2mNTBJACcE3tSXjAipGARDLqTA6McVdWWm9364JCnm7MhwDrzMFS6udCrqN6GxT8Qcgasu1",
  "key25": "5ajTkgAXDxU4tGja5FFVwhD4m372Y2AKJM3x4VWCPVEWRrit6EZK1R1XVvQ6foSaKJZq3rmyM7wtY2EsG2Z4DiKH",
  "key26": "5nmTKiChoCQkhhaPLUsgmwPxdSUtRF4PtuWgFZQjY6oTHVUpm5LvtbeH1b5dupeUi7GsdttU6Bp86W51nAmEMUEZ",
  "key27": "2X8fUUVzF39LyR76NvGaQnFXbW3EbXLMr1nyoXEeQU3PHF6aDkMbUxhzAMx8b1NqLw8A55S4mnBsf9B9rPb3Qr7z",
  "key28": "4NTFSi1dMGg6PnRBpsoNX5HeY6U4Y91VUYRWMMdu7D76wWRzrqDHR5ZfSCcvzDNYkizLyoaq9K5WvvXB9aaX678z",
  "key29": "28miozi9gaBC1jveJnyVQS6Bn39CQCpYbLfy5kUqtDAazZNS4QQVwwmNeDrWr6k3xbZnarsHihPoHAmkbyEtGZj3",
  "key30": "4oBW2Vci2a7zEcgx8b3519oFzBbVis9TH4boBFWWY2Ff7rEtJqyeppz5mB7NwXwQaPtRFaqQ1mnkK4gccWEV2Edf",
  "key31": "37R8GyoaV7VbGYtM8YYQvufR7uuKm28vpYzkmBjmKa1iq3omjdMVoxpCmq96rnqRVAYCJWspNfjnft3GiDpnCJXU",
  "key32": "sWZjJaEhaLv2j9uLj2SY5eaUx9hbNUFiYAiYGHMvUVoLLEkGTUvFQYJh5dyyeQgZSx9c2bLBqCEswnpLSuTYTVC",
  "key33": "54gGpWGrQEFhDcsfyN4oF3hrV1G3eZeTBCjbhtVfG6RcCLzwg4mqyULtSNpYzhjz8LBFBixqRR4doHJmpZgVwVy2",
  "key34": "3xQewBhacDNvXedaMvBoD8crdmBH6kkYDg9Gmoh75v1d8NcGi8wRM5DmcVEgzedhzHq9Wa1bqij4QaJM3UE1K2tD",
  "key35": "2Vy9Zzs2A65H1CAFditaMFnnLHQVFGaxroG8eFKhm3PGWkHyyYs5WGoBCyp6Kr4XZtnZUnqRwkAJxKvNHE65TbMb",
  "key36": "55CdFcGLPbfUYMNF7SsB5hLGKxnhivvRzFxpuBECWKxVzJBGoLbNCpBzDsH7d6K37WRj3cxRF9uxLnwVoSjhUwLo",
  "key37": "2eKE41HeoqxH7bC7MmaN1aJcDKa9Z2tpiWF3h5gG96ow5ZqRzPUxBFPsiqbXo5LFycZKeSGFBG4trHf9vQ4WLwkC",
  "key38": "5yM5KX2FckZKQ1AK7XXatWoVvGrweeWbC5Q98QiSucx6VPB3dH6ESJbSwj3RAczZ5xgfynMXbWtFZKQWYDw9HjcF",
  "key39": "52cD5g7NTWUSkeb47XyEf44AqX4RDWsUpFn5HiSfJFud9AmA8wZL6DmZrnQ5KuWeFESzGjpLXo9QiCmhdfmsy9LA",
  "key40": "4EUHQxQvXh84e2WSi5BUzYfJREjpKTuRETheoXTGnFHjsR6DZiktBgG626NYKtaiFEhiSugyQK38xQLYrGwdRsD",
  "key41": "3HUigYnZFjVkaRyd4Pi8bHSVvBr4KnTVvc8eKUjmV1L7i2iuwEF6XzpzyUfbF1gz5akQwRgSvSqfnHAJvkc6LpUC",
  "key42": "2QEozYp9hLoCKA5KdB4LjRHYch3KFyPXTN6zNhFUW1WiQ1E9yCQm8ppaRvBPR8WGaKmzgjFqZNzEnjbpZs1UjoDU",
  "key43": "oD7pbeK8vfgxQqp9v1CqPsWdG7KrXjAhTbVLbS1Zo1nPTwXZZWvAhyWbN5X4TRvJzWA6hR5quK8B5ZCVP47vxiX",
  "key44": "eLFCge4XjmUD7CC2XUNX44kbWiFZ6ThsfRke7HhXWGUCgWvzoZnMPVfjBvWGEFrkU8RVELo71YTgWyNyKuxceFq",
  "key45": "3fVGiBhroGRvtXSaZxXjixbGFt4pvMUqTQTL4ydZZx2gx3PU3ExJJucnWrUNzykZmhZZdQcLYC8rnfnAgi43FFHa",
  "key46": "281FwCa7j7n4PFThWsMgfjXjmFmz8wQXT3AGTCeSiQ64q8NLUidjkfif6VZEDeaUSWVPjzGyGnuZuthXyNDT3eF8"
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

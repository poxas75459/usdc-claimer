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
    "5ak9GkpLCmHpVi9owxwMKdFw8aZv39chCecNP3dmJ8fx6F2vhzZW9gXtW2k6paPrShJRfT652SkCrS1ZNeTtQTeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSmLXG3Hy97Kkt3dcpZmGqnfGNiRu5LPzn4AunpQ41717p1XKjzCAsPVaL9SFv5FR2bqUv6fPKegWDt35yyPKde",
  "key1": "jswczmd2YcmPHP21Zr37n6ym5cfHjrAb6A7FeT7N6ZVJm5ov5QG9J1mgvGigNvK5dtDGcwJubbX9Hn3FGNEURcj",
  "key2": "2Lz7HqKXaYjpctzZFEagxx7GUNkFAXKMAc8XqgqizkQrwsxhq7Q9r95FE9nRcrhBWJKW52uiwjNXiVoXT8AjpDc2",
  "key3": "2KbuXJhGDv3ed3q2JwUjF13YLv9ASXndyk7EDWvnJbYLgLycc2pXTqsDkdVfvbU6FGpnALunG9R8pQdRMJosjk26",
  "key4": "4fiEeNUvy25wv83u9dRcXh5bRE2Zvuj2caedaLh1FdypGZe5oTQCZM1LD1RxVJ4iCNwZwaH7jyqWw4gPctwBbS6h",
  "key5": "4bcE46H9A9DfQzSvnTWLQMUkDYDo8yHNXvD6z5A43i2DEmq2CfjMWvmirsf558BU3o29AxPVeZT1usdeZzqRGmjG",
  "key6": "zUB5nLhmMxQMQoTaQeEFxDJcFs4qLKgj68geNrGszVr6PCbrEG2bymGGfMZgyy6Bme4dxjgLQwZaR69MzXVR2U5",
  "key7": "3EBDCZk5RR3auypnH2VrpWqY6NfzNgM3qhzZJT1bbsY6LeqLcvRVmVDQfmPM5dW2QBPXXWCxSC2PCUWXcVy3i1bj",
  "key8": "4ob5SFcXq5xfPtoGrbDDmt9nD5HRzpM2rTqC4VocVS1wQhxgX6QCqx6BrjKXHchgvqxQ9qK5hCthBCxs2jPWGPJ3",
  "key9": "mhH7EFw2qAZDpqCsoi6oXCGpXUZBprLw1qEDhj6XuDPJFLhs7vqQ7Qtprbz9KKhZbDBbh4sx5AdzjCD3fPnaGhG",
  "key10": "4a2LpekYUjJ8ZEsRqUbjV9CUkqWKDtLvzg9GukkrnMVPLkuR6qWjYNR3wfr4empwV6giCFYcNWt4xkCcrN1C9Jz5",
  "key11": "5rH9whQpVtR6zuVznwFwoerp2sFiGN3dYSDFSXoALH2NChYLTMuXRLqkzG8FvxkHpxTMA6jN54mWsuGY2siBMuRE",
  "key12": "36yNRMF3tmNJQSErBnY8txYHV2si6RQywhFSvzBh3kDyssLWTTbv2BqiegmTXxCUwPXSWwBVwkGPBaFxtY98qA9n",
  "key13": "33T47ncVyd53WRpsEmmJGp1F8b4S4c2nMD2kRbMNM4io1JxdPu6XrdhW8DPGHWLSknQTqJJ3dWzgeCgh7GTSjCw9",
  "key14": "4dV2v8ECLc1RGyvEjp7yyHTtnipFvvVQhaR3sX658Vmz2xtnyjrCKiaNXfAR2xEji6WeLT7tTtpbaHGwx8YTyX8q",
  "key15": "2sb4NKdzbgNTJccFHEKWSMq7RpuRENdmyL9mJyFwVP3JTwmrV6ryZBiENGRR2YQV5nbEyx4dkhoy9wtxLrwf6JMK",
  "key16": "2FKuTXZnef93LC1sboxCoziH9Bp1pkaU7dMQnsk3jZnZLd2adfCiwJktwnuKPWuCv15PZr95pTEwiYm85DP7XQGg",
  "key17": "27R3X8rwkxLmnZXwrbeMu5WhPffMuG9TQEGPfrg4YCcRrKTz4NfXFxNaa9Pbg1phWSezxMLX1JMzQE4nfyx496y6",
  "key18": "5VHPqtcRph3qBH8hiCpNdY3KHoJSK6TNS9dT3aLMX5zihZ2tJtju1PZWVxZzf9yU43Ud7CWAga9MpYzWpXkN9CAs",
  "key19": "3eGHFCJVo2nZPuJzypFr52cPqFoXCkcfgfu7R7s4FQviozbocagSTk8weNqYF1NykotvpPEfZXWhgjxRp7scc4qS",
  "key20": "3XGua3K8RDezaBT8iamYbs23AzXgWNqQVmXGQsAQ7q9mweGVnatbZxXfzA5bTBWPvEipbqarpTQLNs7tXFpaNqyE",
  "key21": "2hHLab7W9wbgLHz96wKBGaNLgmaR3gjnuXrSjEDMMbjqk9UEh19BY3vTsHRsPwAKFm1jcWed3jenoiCq8XYoQ8VH",
  "key22": "31v1SDuPrWafLT22KV33chVYtvaBw4F8uMp5dUV8xq6cT7d7Lm8hhJQCph9V2aGpwFMW1g3QZA8mxdgEjs2WxJup",
  "key23": "61D2BXEeghFJYFUAQxdKEEDiXoj9x5rvMKSLMsdBTvg4q4RHiTxNR26tToxh9qrW1PFq82eZ9cUo2PmgNsoXJrFC",
  "key24": "2jc1Lpr9kkuNsrXxzQPqs2AzZcdP859GUXNSkPDzSmVLknoK6rk3DgUBT95TP3iZR8GPaAJwBZ9M1GWhbwNJE1X8",
  "key25": "Ghd4mEqJz9Ez7ZBtuektNHSSTsrvANNhf5mgydHe1N5nwRb7sFY1gzcGDMRsZbRVxgWGNYDHqevY8LK3WJaovTb",
  "key26": "2RZpfH5GT9NFXkgGqbL12jv8NyUmgcVdnyttccTyNVL4tS2CELbGXgG5gR6KhkL2oJT3VrXvzSaDjeExfhs5KiHW",
  "key27": "o1SSgb6d1KZGny1zmQCmUxPitwE6VhQQnyTy62u8SkUiC7rh6buRQemRA4kRWyB9PWnqkBap7AZAyKKGrT2WwXD",
  "key28": "3Tbn1Vk4ZNd96EVNqbLMpg1CY8pZyawzGAcfmg2Q3JGbDiuv8P3ERfoitHnLCoNMeYLq6YRmobTKygrVqrSgwvB9",
  "key29": "2ukFniqaSHpY4u7PXPsHaUYayufVc9X6CDqHeRZyJZgYqNjMRHM98px9WAw7xQjexV7cUVvwonBWur7yGgKiSPHi",
  "key30": "PyMdZRDvWADApTSRnoxGLtNgwSWtsTry9GW3Gog7BgJxLs8GduXmz4f3WfQKoxQzLucTyUbumCT9dviroTfoEz3",
  "key31": "4R9UuSFAUXhZjr7BWKM2u5UY9ywQjSX2yLaGYKd4FMfqeHBFFuqwByKinSARu5xoDTYfYKTRtXdVhYjTmAxn5HNR",
  "key32": "5RBD641U7wYTWRySB8CR4XHaRaeyS66nxmvQ6oRRvFEJ3qjrNzirnWQATMwedvjrfynNqh22rCftoio7JBBN5qZ3",
  "key33": "TKQiMVkT9tHapyjZwDhdgYj8whWYC9Pf5wNkHsoEKJxfzxt4bCKocPrU3v8m66Fy2LyorQcxSZYT4AZM7dU27NG",
  "key34": "2kzmwRveazfcaPdSzwoTGeZN6JS1T4yqyLMvoL5DT9xV98azqmVun1b4ihAG7tucugQHxs6gdEF4EHAzPGNzAs3A",
  "key35": "3CZgQJBmYUs1xFZ3v5Map9QktEMDkR6dLawa2rin9uY6FtRp1iHvx5mBZPd4gmiDTLrsJ76ZKf8c63EAtueEJGQw",
  "key36": "3CHuQFkLTEtXm3UKFGYtQsoEk61ezjPSupuxPas7vaSZu9pVFc7LUdK2wArbzmk88nxJcNh2knmrgKsSjG11hCt7",
  "key37": "gWZPRARyUCTCqNc3ZsMshMEJGfFZzp8prBABN56qf3q3PNkoWCWGt7yMZPvk2F9p9thZGJVuJML4LChtGLwCYZb",
  "key38": "5Gi8A6MpMyNeYgRS1UfjEEZBBxxMPv3DGhSSfYpRg6PuQANVECn42efxobPE8mfnW87XAdDXEsvM1JKgLWAKJrDs",
  "key39": "5nQiMVE4TFg7z6mxYST3wKFnPWiuTL18czJB2qg4J8yjRzehLMGEMzfFzouXxuRhxuA52E9t6XbqXr9AWsS8SXNt",
  "key40": "3Ts3XbJAPC1KuHhe4a2WNVmw8pJrrcD2YsDMZgR5GjHGBvfLgs3w2tkU8WnUo4fjbTq3QUSPWGqnMUDR3gq876Zx",
  "key41": "2tn8qf5aHQW9X9dbArjBaBe4Pbox7RMt94HVf7pEXnt8uUSUtBYrWYMYpYVQss5cRHTwYN5M5uesBbYMK5MqM3G4",
  "key42": "2a1h9Ke2kfxA5Vt7CwE7L4oCzUwgHyJ2Sdg6v9ev9u5oSuiJSryQjfYcg1u4FSG739ecRKtGYmjodyi9kZ5MFTi9",
  "key43": "4Zo3Kp4gLB7qCFv87F9QN1SUH6KVMiFYPMW9Qa9yV6itTpDByWQbg5F4m711phjUKC5CDLdyShvMfRGHswG4AoYP"
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

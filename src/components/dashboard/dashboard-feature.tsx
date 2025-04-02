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
    "46Fse8qAGqTkdgSzPmMWSKQYGyV59pUdP9S9zu8orKRqgwK7XMc3MyV2Fab39EUSLtyef5Trc1d4r4TNFrXwcS6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHDhTJumRKCQtNFDWvGnm4UJB5BS8aULJAmgigFLEh8nruSGfAg9q6eafB9aw3cUxryg3Py3Vk8XqwrCY8GhBXk",
  "key1": "3o5jFmB8nUGF6wvVp3vT4fHdE1AzfcRspEPKzHbnjo7zpL8evz6XMQRGn6PwUr4NRczGZJpANBhfccj3FNaDRkJ",
  "key2": "x4dVjGDh5F6bJkostc1uKDJtBwknf169MWomXHC96P6VMo7bqwcUX5eKrXKp8ZddozgiQchgeiNS8BJDXKtTPtb",
  "key3": "2s9vnTE4g8wQDWWKb9pLZHRq1q6yBe4cPWVK8tGn48BQMJBE5oEX4iwCAjZFmzCX2WPM7Df2atDP7TuRgi1spWcG",
  "key4": "4DPriDHGdjPwM7GvDa1UU2wkeZ1gvXz6gZNt1DDkYLuo6yMziV1AFmLdvpu6jgkeJTaTDGyecvn5pgw2xdcqe5og",
  "key5": "5Tdv9Jth3AGgEvRBzv9wwGoLQAYDeGp1nEttGJ1sLPiNNDXv13bMmKdH1f9u4W8N9fujkonz5GeJjm1Z5bDrq1ge",
  "key6": "3P75TVMcuakKowTwQicnWWqGi2AAUR75mvxFv1jruv1NDrkEbouAZdj36dxjTdmut2e4C6ayVm5SbdQZqPWrz1dk",
  "key7": "5jWSc5gVGTJ14rUTwWZR85hVCwRtryZMbdPp6HGsqGCdbcnPn8o2zUvRgQaLNyBNYW8m1mCXh4XsWponJKsVfuu7",
  "key8": "43g7xh5YGYscnd4JNZvsx4dxb5tdgaCTBuf2wKW4cVDuu79AQ8ZNkvz7T9vtVZE4MiifesyM9fFfjj25B7SpWfJc",
  "key9": "2w58KKbnLY5YL3XAAqKdsEz2CYrx8U6LSRnnuS1CKMRJPx4Fq4kG3Pvr78WYR9dtcM6bu4Jsgb6yCqL8ZSP8RaCJ",
  "key10": "5e8budXrdp7AQ9juVGYqjysBj5pDYZ46qD3Lc91utEJKQZTg6WGbnqhGkMKSc3LFKRTJW78x91RdwJM7gqF4FG9X",
  "key11": "3JfSN74rH9SEAKJ71aQSUEi9iGicJTfwodNWvAbyEfLhrVSzbZf9jxyY2F472GjfJE4VfQNpuaNcSUwqtAqjmjNW",
  "key12": "5mPgAMtMYAR3p9tDuoPbfWaTBPXeZX5WSXnTo8RCjaHnyACq2mxhmmBzkcqo65fKft33N1LSD4VVRbRcRPm9DUNk",
  "key13": "4fixMBUnz7Vf1TSNAjEzBCzn4kB2Gfi1CwWtF6tsF9HkTtjFJ5Bq6hkGgTVafDtAsX58w1kjjjaZdpFC6Mfk3F33",
  "key14": "5oPfwrGGFAfZHYXG5rEEcP5ASf1PYMfJFycFyfUqneVDQU4qGkfd3F8XE8zXzmujgwQpWsLDiGZwxeahENzqyYFZ",
  "key15": "66DHRcD5wP1LcLpDCGnyjtPaW9Zu31FrVHUhpcuGPcsjRMF1GDrscG4NdCd89Bbrws1zTNN2Th2BRJFce3XtnGyM",
  "key16": "3r1pMzQbeRM3PZK3HHvcyZWRaAJgfguPQWQXpytLVubwEY4cSvZ9DHskurHqtFG7Yb6vx1ynfLGcmrEzGsSk6HX8",
  "key17": "2CGfjztUJUqQheczfLB7czwvDP7h9Mt4NeXKe4peZCfokg6SvjFAcidVT2WXuzqZP7GcSqY5H6WGHFGjjdEvurCq",
  "key18": "VzroUuwt6fK5ZB5aUDMG9fKzBhFMyAwtJkTBPpGetTAYingpEGFCotxmbG9jYR8ohiNb6ULm12mdWL7qXx8AuNt",
  "key19": "3BwpaMEr3TJ2zExcf2Z74p5Witwx1cLpzmmxxveMKHstRE1KPUxGfPst3RhPvb4WocoZ5Erv5NqHzHykDDh8fWaK",
  "key20": "iJYa6irDMyfsGiwFsCuyqkDwjY2svE3A7WMuXc3PtodBQRM34WoouMu9tqHqbPHjbUDpnkMGKU4fNBMWRXo7JF7",
  "key21": "3x4X13X6mpv7Y77H2A8e6ca2n5kKxk4KNNHL7e2x3oKgNCg1BezDFJrxonuMZfBJvJDnETUeWBpgY39CS8TogibA",
  "key22": "J4BGuBZq96nTL4knFgXzBj1CzdFE2f5xcmmhrA1XpgMjMBEGk4pW35JZDC9d8EdEykq67WWjtRd9ZZMB6ebsmYQ",
  "key23": "Acj7WDUzDcEUw3ekYbUTVxG1bi3b159A1gZ6pLKiUd26PRiEDU8bW3ePXxhLPYRqzKVAwt5hyzpaW9qyriei2Mt",
  "key24": "ddqRuHTUG9Y9y6d734TWgxp1MqrH8yPHByYvY1pXAMshGbd7eD8LPNW5vnWMiMhdKK76TN3bpJ47D9jSm5xEePG",
  "key25": "dLfZ69oKTephcLub8DcoL5mABKESSdSbX41iMZgY3h2K8RWBjzy1QGsxYe77Lo3Zbf3yQ75ncroeGMNXqdpbgbw",
  "key26": "3jDUMpB6UAtzx3jqv7GdmgqDyavF8o8ZSxyE4XVDqWBnjM3VQwe5N976VUe4nQAL3MxZeQh9Zt54Qxt8VdmnsGSg",
  "key27": "2gh7RukhAudphAh2r5MuTdmbHDbtZScHPLVAqGUv4bDMVSTFao4EY5nDantCWrXP2mx4gxhXupAu8jhLpVyAFmW3",
  "key28": "4CULrg7cQAi7yXYzVN8EpzcrnkMrEUQpLaCrrLtEnL5y1FStsRhUVTRXv9bQnVVB5nyvCbxPYT6G48WJWtQegrYd",
  "key29": "4xFmtRQDJCiWsTRExEfVqxMHQ1xqAtngqvJDwGXC1LiLmFQhfho9b55veWk3u7cDPeeTYqHbuLBk5qzAMwskr94v",
  "key30": "3QYpqqxNFET2XX1ZZFzAPXNmT96Sz1ZPQEzZvBU5speRxHzmveqyjHutmaUFvioaAQwvt3rewv99RugVAdrwdHYG",
  "key31": "62oAj68xtycjsKBp29Ho5sFr1NewrBcV7A6NS3QbbRWsnba7JUT3oZE1hsAf6m5L2Zqx3L5d1pcQJ2XF2MVUrHU",
  "key32": "xFaK1Jp7L18YLQXJcucsqjUJKsnFf7pe8EMKRWjCaqh5BWoK1bQvRbKph58GgFVXdc9A9FYoauQ3WiJGAkJDxTU",
  "key33": "3WL4sV26ir41m5VsmWPagPHLbhGLRE3bcVHw1zpG43DCgJmB3ngaEo3XHFJB6CYPxLvNSimGEgTjxXrT94wz6Fet",
  "key34": "q5QEHACPHkV2NDztq7bNPZv3odXfXVVpWBUm6pHhYrUTfbyDTAW8Jq42kLkWgidmD4vhEnZosWd9GowsRrKgxnn"
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

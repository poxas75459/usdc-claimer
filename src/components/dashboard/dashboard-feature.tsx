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
    "gi5GL7C2NhcqESP3GLHezJt1P4epD4nJsk7HoREGVMzRWpWjw5udTcJ2tsD6tsvFtHFkg8d1GPsNbNMSFZqfiDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEg3f3rBxhj8MfAAtkQ7rs2BPNwc6Ju76pDnvvR3jSX5QREPjKdLgvrjZYTP9Vr5TKx9acqREDdNcgCYwSEUtp6",
  "key1": "3gFAPtkXW2Ph321PAPd54dj4gZLxwNUGL4YZ3PmXErAQq7iKiLAcdCB6q3gevoP1WSNCd6suTXkeFDwPUPX4MAzz",
  "key2": "6ZJzZ64R1EDzJhjXGbseWzXvBDW5kNtHxFcRbTRreJfj7heHBp5qQcwbRf4nZsoe174NVvQ7VCZrB81hThbYPVs",
  "key3": "5Gpt3qufHyVQrKdohwYFs7YMG2SJKxnwVZxffFftsag3FEMzicjDjwmquDJFkoRegttHmffCjQj7mfwrv537FvC6",
  "key4": "3iz4jFGUbxbkeh6hQkuZHPjBLCoi7Ji3KcCMDaVdqca1tkThnd13HohxZuRDdq7Bsm9qAiWei52tqCcTAarhr6v4",
  "key5": "56UMYHisNTp8ECJiTq5c8avSVgPmGu3orUENLFKXidiUxzZ1nD2Xh2ske6YT8dwYCffA2ehf6B54MR9mS3t1rQup",
  "key6": "4PyYp8XrAe3Bx7DjQRa7Dat6yZJYGWGgkyW6HCmMpuCxo4EdZB9SmyZzr7DKfzWda9DKULZwB6SwkdAKDWQGDHtA",
  "key7": "3E1ZKPjStHUFA6HbhCLWiTN7WUfcxW6sYHWcmES7kzRC25Bm9ex7mxpT813tnmsvkDjGAFgfzEn4jUxoMpqwsu2c",
  "key8": "4w4GvmeVYNrUofEdC3QSijpe1d1X2LxqH1AySRYHKjoH5jHn5Lw6whqKYZp5QBnU6uubVwUXq4svJaCxJqZ1RMgq",
  "key9": "3VAPtX5WU93AP3vbmCWbsxiLjwzxXfJZXA6BAYtLFVh5WbVtBdvZgLa8UhXXMBjgPsmihCt92AswRhumd3pdW2rS",
  "key10": "TpQLcSHEVguktY9B32oRbxMrHy2pWufteUMopkFdS5MsnYtMNzJsCTQA1wDCg8u1anMZtrXQeNrTHncGuVVNUov",
  "key11": "5SgphZg2uX475M2U9Xp7f21YHayP7i3iJ7ecJB5w6UWhVodCYmCXS5mzxUuVWbJJvSigENiX41Be8VW8w27xeU4z",
  "key12": "3qrQPSCVeqg9wJTbeeWtbFeVDjrtBHdEo6kcpoZJCBwgbQNUGGs8KeW5KQ1LPrJT4sL2tvjjZW1yMjte1Y1jWs4G",
  "key13": "3cx6TPqZgZjjqxUSShUs1C1T5NzNGLAQ76rR2s8R9rX9WZgCqQuAP4YWUFwFyeSTujUzBfgQeN1qH27vQd2wbbZN",
  "key14": "oL3dKpKwbYf8YcqZoFyM2i7J37VTdyXNLL3USgnUgCAteoR52F2BWmxF6cEKUpgCeJV5isjJEZj2hh9qcuxisN4",
  "key15": "pwAvMjR9AFiukYbgoAzvgioJPv7ym3568CGSvDaG5SXP8M3de23PFYR7gWVvWMxDF2YfpwWxzEL3pjcRwfRFNBj",
  "key16": "3xpYnncTU2DgwZUACJfBbVfTaWZWFpjNda646N7TzjuNv7S1UzkiJtepYW1FTarhk85yPc615w7bc66mGnGGaLHQ",
  "key17": "3XCPHrcSQYvteRovmfqpPnBnw2VDo1MzzZL8ir1PHoRj8h4tiHxCaDKU3ZZcgaAY3kAJRExMMkm9BkVdAMKvBdko",
  "key18": "2Nf3fk28eBMtUbCRGRHGNchF4hm27yBR7QLt7qz8RjsmNUtLPaezFcmeyAQDBcbVcstkeKN3A3LYGdveqCJaC9TK",
  "key19": "5yh6pteXa6tVzBtwGxGsDur5Cwi7TK1NCpe7XgRYLosYDPgtSmSawTQ7wdNgiaSjPtd2FbinBup7hN8y5CMVECUy",
  "key20": "2mg77HUH7bc74gY8WZT6EkUUUMS6PZ5zFFMkfhRNpxuiVbfyMc9xa3CVZngNrqAX4ETSvq8CoLgUphUf6iD9cdwB",
  "key21": "2YAN6LkpHL6Hz5mGMDCtHxG6QyPhb4z9sDeaAGwG6tRkzS5QgK5Tn2TRZqyZoZnXsnf3XpbAu76a2gSaiRBCC951",
  "key22": "mHF65SD5885HjQyxbm1jmE7zj1dk6fnrhpYyo7pFAL9nMYjnqk6sV8k3AsqH1xsUcgFm4i3V2ERYBf5iwiykkkn",
  "key23": "3xqepCbqfJ8srCiQyzeDhKcdogxnVL36vyCpjpBgy6QQwYhtVLX35ocCHAgGhHSE5Xm85ABMgigi27gz6LDEiBUk",
  "key24": "4gCUHhaXtFNitiEG4LtaqqW6f8dRsu8XQWz6S57uL2bCYCBhCtv6aqqbtAP7SJfpQkAJ8u8XKRtFdNkki7ckAzMZ",
  "key25": "4CiYWscsYa8hV5Q41NDqkDTB2Qa8s5H6rc1yzXMNCQWDrQdMMfq6mC9iEJnzCfBYdHTRPtNaMRfoxZGRdueMnBxJ",
  "key26": "X7kvphuHhxsxaQBd3ibgcLzk7hR3QJiXCHDvKTxvQhx3ZpF4wW3mCLigavjtRkqeSWMHUFodhCjjoby33xEtfDV",
  "key27": "pG1CxunLviApRNeLW13fRAJ9LCpCpnMvMC53UTYWLdu83GL6FZocAwee7Kxt88N2VFEEpiiXqseVvfHJ97MBNV2",
  "key28": "5Gyi6DLjCNGYug9gYTbGbJ8dSdS8WaqvcSh9XtCRkafbYZDhgpXtbuMX5JrUi82v8wFzS2d2JoLq9FQRX1dRaNPv",
  "key29": "4w6gS2TLy9eaZinGTFZdgvp49pBV9PYTUTrdonnSUYNy6c9gsB35XoHpewV2bWsVBWCM8eWd8gXnq9xXqvZq71ms",
  "key30": "4YaZ7RBc3APcuvUAqj2KpsjqX6VEFhct8GjW5HU4hVCv1tpoV7v62ad6M1kZ3s4Hy6BqJ1iC7CAHdJtDvm13YGfF",
  "key31": "4WYtA7j1LLq8Ei2HfuSWv2kxuaySXeWia7TL7zUiEK7g95VgEQbYoK4iP36U5KiNkvmwpwFLYThMMRUaZ3cjk5bw",
  "key32": "4nE7ZC8G6yCi2MbEhUB2BsG7sKc2okvmHvsTJwjvPf3TpxonZ9FTKD12yGMXw3L8CCzpM8YTGauqzzWZWo5F94SP",
  "key33": "3Bed1FDTsBjoHhpNgZckxt9Qdm3hrJFDnU4hhTZor5KMsDbUqn3FcxFex91zdHTTPQpNYeCtCidGGgVuX6StLRjt",
  "key34": "36yRVMLTUzgG5ZHbK7ggxtCdAgnpYcM8vDvb3dU5UrtJKvg6jVcuFqCouPLtGP84mQGMc1wZt91Qzt4Zy1E7vsTg",
  "key35": "5mtBeKyxRfopypfHKzT953HFt9yWYJRjwJuyaB5hBjuL5yHqDBKpNWP7SdXcbHnNPTPPCnL3LhG7rQFE3tdNd4N",
  "key36": "5hnAE36vCSYjJasePPmJfyiEqqP5wwFwpG3ciPpkYAuS8C3ws8hwSi2DMafcd6yfL6pfu2yAJGof6BgAU3huothi"
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

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
    "5Y5AptoBkMrKE8v6YKLyS5koNtMjctmVomNMbSJiy4TywL1GNkzVx6NUwGQ2aPzqrj7YrrtntuqhuDKg6DPQCAVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123ztPvDAah8itTncP8Au56RT8osGoq95ZZgoMYuVLQDmhrwyXccWQPGLWyUxui2ZWrCgMLHHgij1HQxRL67EG9G",
  "key1": "2D6y4viK2vJGwaYYwZw1dKhS2v68oxqpCCVYaw8thdGD3k28658dREnRWs33RRSK8oZs2c3apcDRjkuCWcMLNxhT",
  "key2": "5DiS7CqTniKmV13g1Ch123jyWU6Xtg31XjZY8j76vcaG3VwPwtohFVTfZgWrP3dQdL5thZZmcn5VK4jEtLKDKcou",
  "key3": "4WZYuw9gtvjhPRL6FJyWRBkE86gG71rCiNVTSuc9HomDTeAg22oDsw85bepwCsB2RTzUBuxHWoT5FRb7ZDrzWsiP",
  "key4": "4Lwnmc65AtcbHdX556aFExxqAeEq8SnArM6LgeoGMNw26H5b1inZH4xNfKmDKPM7ZGiCNxogK2tdHW64sMfGCmmA",
  "key5": "22WHGn4Bc8seWdSPmaTu9WAWiyf1FcW8D9vpoPCYPainEuzsZn1SHTsCC6CeTgQttJbsiw5qLWnfhSzkVaaH8647",
  "key6": "35cn5JAa7h7J7qpvduYqPzc66wjaU6XP2XznFCHRHhmBmCPLXicFJHtAArwcXCs9XopBVQayEMj8fe6KGHaMUND8",
  "key7": "58YXucAsk4PBktYRb1UqevRQCgJzm9YNYzG9mMgnygePgADsGvZc55EjpkB9D2beqTeCpLAdmho3amYddv7Kr4iz",
  "key8": "3SHgS6jquLKGNgKDtMFwFfvcZYmSzwbYVRXbLSEZDaGCCFsCx1SzrBwu24pynGekL53uEGa73VPetaWqrYVdTrB1",
  "key9": "5suARgYdbzxgk7ocLvYnt1WHCXtYC23Cvv2UwRmrMWtfLNYN6ESPpwgroHsRRCUa2NbEQCcmkvM1wfwx8SJw8nSv",
  "key10": "5t56DL51Tb7coQVk2uzYkW8BHhgPDtEYb2nah959sK2s2GT38PBA5GDRAN1tvaQHccpmTo1k2ZwMjS4cRSL45qwq",
  "key11": "5sir36dWoYZQmd8WHnCtZmcXqMGMrvt8RshanHmi7R6bc7nd3HK5Q8rELQTmagm4aaNT57yi3f99AiDj7GBskpkL",
  "key12": "32aKAo6a2v1uY7VncKS5QWKt8dxo26CzEJV8ZwuZJ5aHbsmvA7prXihpkSU6oZBoddskT4vct2FmvNuSw97AeRnG",
  "key13": "5KgVuCs17kH9sHhJLCrMSsd5oWx4fTyy2sdDq4KGKf4bn4rsWhqSxzEd45YQhw5stCpHg4Msf5gVr6fVFfSsSoiK",
  "key14": "3mrrpQsFcRKH75ZqFn7Td5rfzLtbJ57mFZQbmDGhDykp3RrPhSH45yq7pJBGWyS4FCMvDws6vBNDnQifEY2gvqLa",
  "key15": "3AL6eL6sNeGdq8PEcKSUR9vdw3mdHr25cXKVW3s6xZZnzYGLSsGy6xfqfGGdNEacvW6oFvhirw6L3pxJPpTMB6Jj",
  "key16": "rDizBzGqAVTNABF7zuB4ZdqnwAAhhyGxFaMBT686pqrJpSWgacFy8mWkuDzpGqNDqzt6ytg4f4KNvNdYFoU9MVm",
  "key17": "44UrmJzDoNSYpS8W2wNNcRATxYMUvWAMfTXVUGHDcdcJrnfrZhtvV2MRBVkMq3yzoBtJphcPcus9ueBnbQXo6vbe",
  "key18": "5tJcZTCPzbrexWKeLRa1xfvDQ8fPZg7aT5gvrHXTUWeAdh2vQoVCniyfUCgmiw1Phku7Eajoc55t3tbraRssui63",
  "key19": "2NoFbpexuVKMcQhXncCaBvxbFxuaDN74C3yykJAtxEfj9JV3FP8CTQDThp9oj5rM1Csbuj8YJqHCDtmxrY5F9Cy8",
  "key20": "3nThhN5CnGpCku2wqAfK95Kd5nxvMVge7QgkTL37qQydipBqE1RiaWNzpCKpVRGpas4Mt6c9GBSPEJLbnsNK4X8U",
  "key21": "5oCAfGNZNa9qiXLCJKjtLSRnsY5QKBGY3bB1myQJ66QyZZnk2s6J3wx8EbCq7FGGwvicuBYiN5gM2D7Gypt5RgZU",
  "key22": "nPaTKc31ghgVHXcpvnHn69AcEiyjhJdosyPMNyC5GnD6DdJbopcTdBhS4FDmNApqtk5SS5F2MWEyznVaYJjzZtX",
  "key23": "bAWUG4D5o2nBWjqanvqjTvAAPazjwy4KrK1Ht5xqKDLw8cnzq9gwtk9SPtn6BZ2jmLrxAaFGagRt9J3ynZn7p3W",
  "key24": "4zn9sn8R1f6FyfQXzWSpv6KjbNmfvD7ZnLitYcoytCFHeymd8XpSCRvaqEX56iAqRuWGMT6fotPJn7n37661eY8",
  "key25": "5rkW5xdfs4ouzCkRJK4FzqnSqXCCBg1w5g85WgwYeKErd2H1wW83oKPuTmv98eMHvfQT33veUkkuBiogjPuvEw1A",
  "key26": "57bAjzFfFVMGp2KDcgpmLSxrSNbrbhHZ1eseeAwxC4CkVqifbJxPdpQg7X8gyFchmsnpEStx3Wxc3enL4d172Agj",
  "key27": "64w4hLJCLW1oydbCjdS2jakHiHH74E8PC8xv1JZcF5siphAMhCAbpCoLuYgsnqycWPxcZDzY48iMobJQW9xrZSv3",
  "key28": "2vVPZb833JzuSSo7TFZKU5iVVJWMPkNBdFdGFVxGE9bV9h15rP4DnRmPHmExfuR7GehJBjh9dFE4mRid23WVELr",
  "key29": "5YyvMZukeqrWU1Nacv1TaLhASm8Dptc7xTzk3rXbnWWBHYFgCRtyKyZbn8T2dD8ZeAUSPwXTp6vvv9wwem1x9EdT",
  "key30": "64F8emvkoSPjVUZcvpvYKPB2TrKrutffgwLEBmrdwzTxBtbFxHyZGHV7qxmgoACr94q7oh3RvGsUvGvYDYLPYcMf",
  "key31": "31qiEuyy2TTMHknnGtJ9EwrReP5UUqXUuzgJVKHiAS4JNzHDyLSfX54mrPknALo8gJatVFTGPK9Qo4utJUvWrDiy",
  "key32": "FHdFBzVcL7NSQmWqEY3FSvHmsu1anowv61PkgbzqtaJdP8A61AfcicPBYg3ogqMtAFaqdsUdov1EETb9tW3Mzcs",
  "key33": "3XE7jXsGvrRCv1wmisXbqiXMzdybkeTQJWRi9TrwKZkT28ibnaB6hSHz6mdidM9eGiN8NzfKTBtj2mFNk1Fx3uzm",
  "key34": "5qWeEyMyGMLwFCwXq48fcw6jFjkFCKfopiQrEewyUpGKsdzJzcnZ9jvhPvmbZEfpmcsNvpQw2cfNmhYPEsxSm7E",
  "key35": "41EbHeVThZUPWzzc4aiVfmhwwB9aWY1Xe1d48KFEuv2kGMpg9SLtMHjervpdk9BSY8Y17dRHB3F4JyZvc3nymSp2",
  "key36": "67X3PCwMQRqG3FAQeZNTTafU4bRrEapJbQWEudm4SFjKmuEUqggEGEDLBDLT7VvLMn5Du1g75w8EdGkQ4UjyxTd1",
  "key37": "3tsdB1HpDwcaSzEGrxvsDvdd6uAhwMkMhRNHMzbhMqjo7p1ZaLjNZVAvi6wSsCjpV22aycvfYvkxZBQG6xDzp6Zh",
  "key38": "2yxhnAikaB6CsD6wzwDhDPHq1XyqAnj4TXqhq6VgYJJEsQKXpeoYQneUAp7jrytA35ncqXvHxafr4Uzm5czkXfVq",
  "key39": "W2e8pNv23zjLJ7qMy8BaYj7yG6G74nRPw5UNfr8epU5uzoYveBFGpkQL7YEqAAPdNcQ2AUkwPvY8kZjhKo1kWdV",
  "key40": "auXDesDPTZ1PmY4rUKDxkkRZCihRfPrFptuJntsfdAgD1Ci2vVtGZZuDgaJxrDB5GNeC3oxhEriyFDsg2oqRbjY",
  "key41": "a99weKJr7Nppdn7mjQJCsqZPx8vkcR5JwL11bbi3wZpMZuioSKEAJSxZWgj1SnC1mLdVm7MicToXeWC3a6phzce",
  "key42": "fg3ERZFKiwSQoTTNHFkNCCk2Nj9RNKpDKmgKBa2cb8e6g7BqDk5sRqN5fcucsUfgkH72amSeGfRdBuDQtykmsrz",
  "key43": "2DfQ1TYGmfuPfyDcLp7e2FDdZwmrzjoz2yZ3B4C7hNrZxX9TksnffwJ72cGsChcAaE15iBjNxjdkJGRNrHvzmJbs",
  "key44": "4dxTUQs7EKcuRKENSy9e44zzuETJaHZnFD7AUgJmTeC5aSzCAJNL7iwdFpurAyvkHL9N7Jiz96ma1QWoQ28LQxe4",
  "key45": "65KJKxABdkfbd8cwDJv9HWdX4h1WyiNXZk3z3fvqeSkZox2LtMGmfvVhRivW3nBDstod1FpguCfsSSGeTQZUEXep",
  "key46": "ois38WP9A68HobHuYpYnw6TMGRsBRe76Bjxtp5fJxsXmGg25rCE6PffSofeNLTWwaEo3BrmYoqHNuGpzRYqk2PJ",
  "key47": "TA7ptwUAQMisZ8T954XC4Bs4dHe7ofpuEw7BkqvLr4HXrCAqNxvVgwhXemgP5q5YcRSGm67Ggijc7hHfJ8TQAaK",
  "key48": "5XtLGCwztFRYCNR9tp7ajYw5iw3ehekTZzxJzuQt1NDkustzuacMyEBV9zXrHdYhCkuSmYoKhoVSc1BGC3x6K29w"
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

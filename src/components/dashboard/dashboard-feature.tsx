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
    "5RB3SkX1j2aw4A5xnXF5cWgGnKVocswvwnJcaSbmAvxCtKYWbGaitMftkmGtuA8FLaEd1cjfbYQHRPBPev5LK3vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjZwqiN9WdKzecaot349M7rirCFFakYgyFsc5Raz4yBtdjWaK93ED7sTXaHNwNXtHidnhnwkYG2C7qX7z3MYawi",
  "key1": "EgamF5kzzeZN1nMEYtqt4FLMogaJXoAbhw9gNLB3M5UYPHUT1Q6x4o6A472bUjLQfqQt391dcUHER4Dk2hZxdVW",
  "key2": "atMCUJi4swTwjaeq4nYWh7hyfJaWbF9ZDHRxrEx4W6jbA7DR561enWBnwGm1hLp4gaQz61nuM6mFKvXBrKxLmje",
  "key3": "k25CRbtCV4jjyuaJXCJCXiPECDxjq4LJfLMURBEpDiqXTeqfyFSRDnznacsoUsbau7ocDw7yePxg1FTvoVXGgE4",
  "key4": "2ADjTFwhxjVHqJ99KV2T1XnqeExFTxLquBbgbwrY7tqKzqDsfJHRSGbJHjFUat3dPinyViJ5CjLNwE6KUwgnXXoL",
  "key5": "3G74A9bVZTx129SttpU4WfHfRAkpydNRxnVHt7dRo5iWwAN1qgCCbhfd84MnwDwoya3yPmbLjQkeArmgmeLYNkz4",
  "key6": "58Lhr8j786NgtnqMwoGLCJzv9avoKtu1bo7SAwZiAWW7nEirPJUmKro31xJ4uTKbWRo6S8XG2am6y7ZperAwvfsy",
  "key7": "SMcgRLMhfM8g4XS51NfALScQMnmfFBxKjSVuRE7gLPfdcSJeu7WpUXUumd7Sjz9oeatjpB8hLb4JNq4EZuePrAj",
  "key8": "2Mo8kSMsf33LU76DGekj48CKHiS9sutLqALu2cuGeR81Peuu6ENgzps5CjNzEsuAw1T1rj3PaAoDZneeAypc9tEt",
  "key9": "21CtpNA2n2jksVsNukTr34xkqL8ammQdPEAT5ijoXRnCCvVmzTmRvnbiosS1uQXpu2yjnExL36r44cudh4dDMCLM",
  "key10": "2KoR7VatEyKjHJZVS9dR4v6vHQ3VCPRx81cTrepakH6MSu87PFP1zAoHqjKGALF9Kp39gPcgTi7ZaUHB57vAyPHM",
  "key11": "4nAiDvRU2A7UF2YM7kkmPJT24YVgWGUmdHA8UWJvG13xyxxsEa1WTdmoN86PoTomMEh9PL8VbyRfeUon87AQvWYy",
  "key12": "2qiSLCB1j68n5tD3uvpxut3TKYmwTh1wgQy8423qttJuZDGLJzqzYGSe2YwngJAk1hEeV2xRCXLQDCkU1nwgvAju",
  "key13": "647M5tzYECo2syi3rPQCaFgQnPYmivxNSr17ZKwsv28nFhauGL2C9bk4KjQb38RVLQuZrdLNdU7W9uVckZXh9eoF",
  "key14": "7EMGrNLNcNaEKAiYz6fjnYfWin1sek8YoDehTdMaAemKRKcenvDHdYmfzQa1fS8o1vvpZ4VwWHcSq6V8V9e7euc",
  "key15": "tbAdvvP8U3wPmGRKgksNwv2oHmyfknFLY8Hd8N1sPaA8mDs6WYzZxcQiWn9HkoRVsS3r73QGMuAWmbUNZ8nJMqx",
  "key16": "5F2m8Mr7f3qEoTjPwiGGPJYNrY2jg41wNe3EwXyragNmi6mfPBAN6YvyscsSTsouVk68t87rMrqYJzG5dVFptAA3",
  "key17": "KCEUQW3RT6uV8vpCsxcdejMH8MYn4Ln9a11ZaqLwzYmiHANAftMYDbwfPhtU5YHY5QJaZkXQZQSmax237t1Zdsh",
  "key18": "essyaxp2bTs9ivNafRLdnd927vERzL3aBHtott2XUQ1NsshoeQa2vY73J1WxQQahP5hqQ59NgtTUQfqAyQc3VyF",
  "key19": "4sXceYiHQTEqUVdWDNj39RJEe49tBnR7PkAkUKMBKc45PZaFSGVpK3zo4C4vv7w5SfMgjvPftJwjZDQwsZyzcRHp",
  "key20": "5boWDgJhddjWZukN4EpPi1CKLs3zHqKT8x4A7SuSHmVpTH8aSoUpxyrS9vWRJKJ3XVerHtSYDr9ZJ5Dia4U4WT7m",
  "key21": "29cnjTkSvpgje3jhnvDgsLJBuB3aS5TKUA3i7knf4F98mMqtQfBjEBiTNDv6ySvCrz5sJzbGLu4E7yb7pd2ewRYt",
  "key22": "37oCUHcMoHo8YFe3z5niGnab65d4uUcLrWKtPJ3FHEqi11ZKfjmGfDyzDL863mMJFuKuTb23La7zxzAStFxAu32c",
  "key23": "3E7jWYRAzB5HN79Eby7G6eRUobD3vw5gEGhAFPYNehWbCPrDDGooJUjprGthHnqz7eXFkUDUD3DNMz7SKRo3J8n",
  "key24": "3H9TuSP8gW5MPKgFK7Fpsom56F1jpcfAoHQD8LYSiJZZRCQjFnLiDGaVvMTHYiFC3a3YiDaBQjf31nCdSyCQeSA6",
  "key25": "5TteLDshY4hEYH1iVDo6jyxgE56kRE3okpVy9MbFQwv3bs4NCLQ3H6nAHPv2XE3yvD6KsL3sGH6ZLppBeZZ5Jiht",
  "key26": "u28APP64MUvRBz89cWYCj3K4BU4CQDxBtMkKc5uHJeisy7MoD6AsWSZ65M1bbNjaWq2YxwzWYqM3jC27PL89Fpf",
  "key27": "5XwYKPqU85j2xZzeXH7AvCDKc7cnwfG57EPpXTAt1psnfaWNvijSGaqiS2znR3pEQV3hjF6Xs9iHR3QbGWqRqhTf",
  "key28": "hv1qTxxZ51qgxgkQ62DcMLDcZm7hPFfFdh6akbUEuTgRgmQbejT9jFgdSrB2D8n1btPaRw7bndPLwMUkgiNRmhd",
  "key29": "5vRN6kzLV4BX9DLEUxkxyUhy2fm8GuDsyp1NbE7jiW6guEFo4uockk1X7vsnvY553grdogYfkasQbrKBuTzunvTt",
  "key30": "4J5wGHHE5ePjrcjV8evdK8qhbTi5DamFnMqncPDP5qzU4aXQieBiKABpSJ3EofiAkhcC1EGRUn8UNt8tFvYCs6w3",
  "key31": "65DSRhrM731nVs2ucanWazu6u8Eb9yBeCobzUenfAPpgz4DLqNm1h7Ro62mVasm1JBZB3dFRe4kwvUAK8aYLThGv",
  "key32": "3WugeaFA8BbysjREM9MikuTzdJqRfQxnu7q7pUUnsAac9fT8CpLirMeHqBS4Sdh5W3EetBXuTUm8coXQwFgRDKrb",
  "key33": "2Mb6WBF3qt1jc86cedHJgs9tuvPwGaDrowQosRggzENyJ2GfAQWR7MEodisAnwL3TyQdQLjkv9doYGwFKwSCWmgG",
  "key34": "5se32PvzRgUcFgq4TrEST2Udms5uw4P8zj7ypWNCE7j7Bpfvvf7YLtn7cY81ZgorJTUgTeLmJibQcqU8AkzW3nZW",
  "key35": "57cgoKnVXu6sdSbnaMXWqRFpUsGcQ9nF33jfEzMYJ5oH2zNPjF275u6EV2Nb3tKC9z92E6o6DvZVHtwiCS7sZB6b",
  "key36": "d7hTHjVMuMCk3jby3M6TFfQugdQuw86trxi2ckFSv3sRU4zgEr9rdGkkgZyN2FVJFewmHp4gckPcsnrgC3RQ9xS",
  "key37": "27PXJQ8iP7ZgxN3MYKd2KxeGLnBdTgWBwntWNhtdaU8NLwrfwUCfqhaW1NsP3kJvZ6vhD5PM7JhryaH93iARt4qc",
  "key38": "LkJUqmGtjtR4ZNDfS6atU3XrkdJKzXdumJRHg2Z5oXqRE4X2qxF3MTQ9CvJkw9HJeDCV2stD5Ud8mLemboLhkGm",
  "key39": "5neAVtLnYcfWQFfvLKNg4P76nbQLhgN3top1hkjZ6HpU7vB8EhQKfx6aULfskvFjTXwu3aB14M1n2XqWEj1pxede",
  "key40": "3hebv8qePdHzX5dawuP29UJFMiTbVZQAXS8GaQbv84JnGxUcZ8epcqqEW86t4K1RqsySNkmBiM1KVWvRPNNECCdM",
  "key41": "2b1ivZdfi7nq5p7Rxt4ULAehbg6xAAiykXKHr6XZCutPqLLqYNTA9CzT8UTYkChGugR5WwLQNa82cn1Lf5LcX3t2",
  "key42": "2LnDJPPuGT7vVAV7B3SJe342F8bmAke5Kvnt4yap8uwBRGGyE2NEgWQ7m5ySH5SQF4bXYRXcSGf97ixHMmSKVtJX"
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

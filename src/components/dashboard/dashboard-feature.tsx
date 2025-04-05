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
    "358n4CEDwf6SGN1HxR7LhXpfPSLF8ynahkRhq6RUmJpRjpo2mT48Uv34etb51Sbk3BsuiX83tNqF8Wc6qjJxjKTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6qjaXC5f9RtwSQ2KD8YNLJFzJbB5c5qSuuVgqMPYhvNimVgfxQtghiu6oGojkkTcw7bDhoYx9PpoK789EnaMSk",
  "key1": "4nvpFsHws1aeBJ8Hr86ZXcMSEhHxsAmfMTPtprRRoNZCNFkbTfLa7iwWSd47hPJcBW8ri5GzXeeqbttxJp5UHvYe",
  "key2": "4fNEs34Nn2RAJtQwCA6azJzoT6P8qq4p54vqyQrBAzuUzkUVy5fdkoC2E2H9bmmA1eXbgFYbDX1NiXb4tNnMi8Tm",
  "key3": "2oCdTStfvac5rLYtXjzrjBZ7K7KD492MnXXhewY1HJxjpHYfwAA21NG4deWHwdY1EcbwSMeaP9r7atBxE9yoeb2L",
  "key4": "47isYQ5mBskPb31GcFwSSVDVGJR4L1AHCvs5qurg1HDaLhtgkM6yLorSRbLQDiisXAqZ3JuUpLqYdGi9WbbAj4oE",
  "key5": "41DHbP9vBTiMamDAvVac1yhC8u5Jr6d2nBWfzj6CA7PGYr8DSNBbqTzXMPA9i776GkTz8WnoC2VNtoYENiBJiZuK",
  "key6": "3CRXSVhHAgZUYrFc2GGyJiHGzTx27U1UtHRLoRkJkxevs9A88NnCSo8fjpemCg9G5jzi3TmXGc2CodgAnxn4SRHb",
  "key7": "5nK4hfX6wXZmhoYV2URpntFm8xTaijwWFJebBhP9F5uGQqsWqBx8RK4pe9a9c71HmofWeVab3NCHTWZFDYP3wgNP",
  "key8": "5hH8oupXTwTXLnPqMq3KXmzVtU5PqDnCdBSLJmkLS4fxxrDszjuCNgK1UYVdf1LswDzc4thvcxWqtUAADGRAviYF",
  "key9": "3oCc149wuauUspx91MvxhzfdvZLqwdGAgbcZiRysFmipdqWTaXTGrt3aGBWpj5TngcfxsMoK9XksgYgR6EdYs1D",
  "key10": "5obA19Kfw6xb8jT72YdGa5gMPSk6tr6bkqZTeAxW4z1rjEuxLFsz4cFDJeGqxNymPrZY1oKnScqnxXJT45X1tnaz",
  "key11": "2rRUcFVnRdnDJGPmTQXgcNFPCAwSwQ3Z22ic7BXSiFme8NDxFyxMuuTBN5U7s8c5C847quaLjs7aoEjFxMkfmpgA",
  "key12": "2mqEkiuywVC6J2SsuF29Xmj2bVKNvq41zmiogQWMrmHcenqMihvRChAaJX1tGHTevrYV7Qgb6pzYLKfSCY3avnyc",
  "key13": "54b4uMgT54B9dh5MocpEycuj7HqiKzJtAigu9Bxs9sCzUYCyk4roM79sFChHExrpEaCTVEJD8fYEyLbfksDgLW5Z",
  "key14": "5ozjnxd9qcigFvkCkWBRC5Liu2MowmE2KY8LBmXFxUCE4fvNNwUGc5DGkWvHxjDunaY9LpTNmwU7ckaMR6tpfBDZ",
  "key15": "43rSnkbwtpm4mnbjLxx8Mdkj53txLnq2BqMDgEvfc1EU44ra4ttXPMg3nyJaHq6U96KFY6Lpb6c5FanuRKrZQVuG",
  "key16": "52Z8BGU61JL849RJxLK1WfGwUcLCuUKDqoTpxv4pniaBQ58pNJRNKZWvJC9QKjorEcEiRyxFDVFuqZy6nCcfm7P",
  "key17": "38pqeCjKZZormQQqTnAhdXUGsYXGq6ZtYXVQ7DEWLJBHiis7RBLU6zPV2AGD5Zva1k655foXK5GBWDAGqDY4M8nF",
  "key18": "2cxdfMMbWxgxK8XqV2Xgu1mo8tj2UxGm6mGBt1YFfHdrzjRynNFLqdLMFeYPWC4pXADG9L1G57w8HLSSwcV1jgiM",
  "key19": "R96P7fKEQLpzdw8EC95iYPJRuV2ykMBE1EgmkMeVk5ugwDUgF55nx4sVKWhsNm4ThdwPLgJZaf1hRamuWp9ZXDR",
  "key20": "uLjfKFZFcJ6n6vvCzS6T1hbFNcpm51gKihZ5TfpDm7WfTgRkcUDMR4R7CFvqyZZjvwXxSCRmVXfQ6UMD7y5DUef",
  "key21": "2MVz8d6cApAE7C7AjrZNUNzjwrSCZpy73pTREKaMYuqXN8Yj5RAUxzxqRQVvV8cWxF637bRUPMq4rnqmn33MLwN4",
  "key22": "3A1PwxrQ7ZWoHQwbr79S3Q74CZmqqfxy7BcvbNz1x3x7pLJqx4vHBcVifa42YfvdgvtCPNnQ1LekjX6ZKKdQP8m4",
  "key23": "4ZoKDvVsm8fBfrJXpLqRnjiD236k9D9HYJHSTCBRJjA2zuF37uLxxmZ2Z6jqsptiPAakuvPttdpReAWnTQp17mVi",
  "key24": "kUoJmGWrUXGiuLDyAF4wLNEKoamjzgVmvjqmn2NVziqTmezS2W913jUbBNtSPQexuyrefZZ1dApZMDrUtm7JRfh",
  "key25": "rom8dqvubqG1NZJQEmTFzjY6iW41MxWSMCAFaLLQRD9gK44DtE8dWaxp9F8LGANK4oy9A68sAECdJVGZWkMEb5W",
  "key26": "igqmJdxRNMABUkt9K4cryoEhwvhEJmMXVeXtU3T7LwHumEy2AEbFr4ZXp6PvqCRTH46yr6GQ2R5N6Qp1TRXyvCu",
  "key27": "5aYTh4htjjEUd72jFSpK8yYF7mMwcfWjZ8ViEY8tDKdaguuWJPRxf7HRw4PepVhqFp62F9KVPBuLvAU8MQ1FoB62",
  "key28": "4TKD5oZUqHeXhJRz4xqAUVgi9muyrchUf4YryYmbGQE2oQst6u165s2tx3iPpBm1mPwJeU26CVNHVX9LySEzFuWa",
  "key29": "45sBsqbEJVuPrqrdwH1ttVqDAzGi5pUvQsc4Tg22xxoHkvfT5r5CbpYsPyjmuMkRBexx1gWLAi5qMKc218xs3JcZ",
  "key30": "F4Gyrz92Sj9go33ACLkoC56t6KUjcopAhwzbTARVje8qWzTFcsckgzWDxLPqCyujsgPL6QFwVpUXnYErdy9om4K",
  "key31": "3wJHKwEBZuubKvdAqaazkLNYp4yt5TaPjvgQMPVkDJb2D4gk1ULMju8Y22apd6F1aeiNxRvNchCdZp5ekf8V9hRA",
  "key32": "49cNi7jr1QFY3PtGzKg3jynMiJLQ9Bd8Rknx3zbXcdG6pU8mip9xP5XKHTaELs9inLMZkCmu761MF7zEhbYTy7w6",
  "key33": "5AKdpWbqDKEQTN4QgGSpyFxQK1B4zrYTMKxk1N3YW2hVHbqB7aNqENUC8Uujymbr5ShvQGRhkCMLYLw3aYvPDZot",
  "key34": "aeaaomLUMaPa3JiJSHBf3r63mYi1PuDoCZdz6yVUKPCakBxsLXZ6NPzoqYhKsisyqe8XpVsiMC2KvFsH2xCXW9M",
  "key35": "3y9dvKr9qSm9ncoCfQH1tbwSqeQCLPb1u9DXifzNXRnN74HSC6gARw74v3sJVzxiGW22LWsrpUEJNBREMxYQ2uAR",
  "key36": "tXShpFMu4ZJ958qFXQFNCvSg7Kx6tYPnW8Tr6pvcBMB9qfx3uqy4EM854SpU59oSk8DMtQF9kPDGEBGtUemRXTz",
  "key37": "4bs1J7oopfGdu6FTkZ3VkXS2CYL3ECZWoS5jU3CHGAG9avpssvKFjhneYfNueu35xJ8cUptCisztVKG9D3jcy1F5",
  "key38": "CQs2c3mTGSc7Yj8sMqZnWW5sNZodKs4rFQVy6RSYfyTMHruUFnmqz6JMpy3aNQFracSJMzig2pnq4qxbnpJ3KwZ",
  "key39": "2KBgNBxsPSSEtJxCGLZCZEutJAx1Re8oMg4Lr5CMryMfemMJYH97PzLV3ZaP4AJrwvSL4pCgMDGWExuce7PXKAP2",
  "key40": "47xEpAWzDQUNNpJU3xzfmYhPwrkfDwFiwKehVL1RuK62koC3F52obvC7Ez39msEibpnx7Hdxc9TR7sX7YY5Pd75B",
  "key41": "MTPXyQ717rD46pw687JiuA77yzWFzTsSvy2WEQrGXZuSFZ2MRpZ1qW183dyZnfaXWue2Qwq2pBfmCCkBJRP5ugp",
  "key42": "3xpjZtUjFSTfjWNXca1QeFvQSFjyRTEmvR9iwc8HdJgqn9RQfJDHhb3CAiZKeTM1YiCD8mtXWmrb4vs3GCw34nFm",
  "key43": "4X32RYEvAxpGn4Wx27VizVUu9mGMU6PPHBVHbhd1briXupBBpU842SGnk7tiLJXN6PJu3s2h2yiyhwYLRHmmHb47"
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

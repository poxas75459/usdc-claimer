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
    "3hySfcEP2dg4Gx6HxCXG9AWdTR4ByUD8TsxZ8hVqdunNvL8N2ephTqk8oMGPixo6HTZnTZftmSHM5qzGibGGpYRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXgQk6BLKS9LH7ATWz8UmXhEaWnEqYuRR22wWBAYmQ3rgi8EiYTUrXNdpVe2DVdSEffZRxeBbGjxdva8icYnBRb",
  "key1": "2h241iCqPThFwv6DGEdHgyg1TTtfUUYEPkNhn9h4FFCr2A7QifQB2mEGn7ykq6GfdZVUFeQah6MF9qE6EsnQmpnE",
  "key2": "5HaDnGX2tqMUematc1FD2N41eoznVBxxVQrEhomokMruFbZP2YT9VqYEdnnPShVS7LYUcG4ExPGojk7TDtVwXQ4n",
  "key3": "2d9LUTYvUd96J2XiRfEsWUeDdJpEoHphJFWckYSj9LG8yTf4muyRUa842UxKJdsdYoqR1iC25m7uW8vSsRtPbwgo",
  "key4": "4baaSCFZLXZFp2cd65CVPvuG8dnRRLH6wUbobPz5xnFJr1iigKRpqfdPjPwZk24RPWLCe6XSeZh68cSnBg2sMLdM",
  "key5": "25z3jwTopZocfx8CriizBmCh8FYjridRWYQuWppQdBvuY4y9XewpiwVoAhNenUCzLzACMAWG3hG8kBoUjRLkURLA",
  "key6": "5i2Ji4QVabAaAFyFMXDfCsxv6cUdhLJAwm3b4GEyZUZoQdXSbg9son6hBdZtMbqTYBsVaCY9jMfQqcM79iu9uYeP",
  "key7": "5qWTKNLKxCeyvLXM1x6w6CARa8U2cRVMVBtLQhwLVgmQyieZMWYWSatQoXCc3r625U5ZCvzFVuNXXcaBkTxEiHn3",
  "key8": "5UHMnGZcXjjb7HDksxY1tBtRykhet9jZCTYhsAdJLiqtaLTzfdmEHb2fJVrNN8gfSXAnhc4EJLqvEYcjpS8TsaiK",
  "key9": "9GfqLnjXyWYscVzGpQ562nbwDgbFzU1ANKg3Azic7Wq6rFst4vMBYYBMwhRQUGkxG9fVJDbKS4PLvJiJ4REACYh",
  "key10": "4wtHH7XVzB2TVbvJqt8RXFA5e6nU6aJNCYeFkmkPdFT316xrhiiTEsSw6X3wAbf17i7BvYsEfmism6a7SQDBR3Mw",
  "key11": "3HMvykrwRBBBuobJfNJcd2avHGYvKpMkjshcnoVdyQa1c2neGAx9RH5tGvpRMMneoaQihc3HJj8fiA54hJ4F7nKJ",
  "key12": "5SodCpELZwtz8LKqarnSKyA7oYBEJtxEDVrk4FG1hbKV22Zqqbfr2FZCQBeBr8oCpuSyQCKAbLUpaBqyZffTfWrS",
  "key13": "3oPt6X8P9bcpvwGkffppGuANzenJ4kCvrGovU2tFuTUo6QX3tBKJMpbht5DF6P45GNjdkrQQyAzaRZMpBLdXf38Z",
  "key14": "3YdttkHBAo88ic4b14QVZGNrSauNEiSmuzMdhrjHehXr9usNDirrivc8khyzi4M5ojyPBNsYsJdcoDG9SzkvGbfg",
  "key15": "5jAtkkM2A966NUx2EH3866SCbyQLRmZScuQgJY5FBBkHM1d55AMgPh2v2cStLNk355ZGfbp2ZwrvoeFtp8tb63wS",
  "key16": "3Sc8HDgmnTsQhNKVGnuSy2GXEbkfQNdhZ1Ryjdc3RJ1uGpwyqozrrbm13nzRAqSoZbhBQdJyQ1pzenzWYuuweTmy",
  "key17": "3YeRii57t6XZ9QukW1KTF8Dy5DSD3cXwTfoSMkWCG4GmGBB4ki9kKgS7pQZRXyaAfSjYYfC98UvJQH7wBSieWzaY",
  "key18": "4MUAHiKntHuB5eQwHPV3VmzXo9F2eibVy64X34oey2qsv9qD1hhaFxc3D5fUrMeYT5aEsMWpv4tgXRWRTd7brUFS",
  "key19": "39snUERNAV2kfu2K95hVAs1deYUAQz5SBscVTAygu8bA73yZrWVcUW4gkziGuJcaj3RBwZxMeZSnXLP9SgdMNnyr",
  "key20": "5e7f1BaZvCYt6A3Wqw7ZVCZAKVoj51EuhyRqpGmSTkeGt8y9AQcKzN9MTEyjB717MWrgdbbphfqVzxvM3pUbBnq6",
  "key21": "5Th6FGYhDo5aZidaFXBE7fJsoR6rRxMS3qcvQG3h3RnxHBfSifsSsZ7nGA3QqVjcjWrgrj5xNzhVXg6tVWUa9xe2",
  "key22": "3mnHHNuKozELmQkNqEGeX312oqVUkPYNWHyobosjja6yGYcBVArP7MLfbpwdxzDenh9QqGmUZqBjUKWxdLjUKeB",
  "key23": "2HLSWAdukmKJ59CPFp7gxhabhcVFL71ACmWQMJVLa98Dv9ZYQEdCLPKC7pjFYpNZf5DPnFWNRjidjLD9NLWkAaid",
  "key24": "37jqdH1Deo53iD7zDQuc3hY6YjkbUUsMUUB3XLie1gtyxAAWJj5CPESUfgWpZbjqXeDrLy8xu3u3si9AULMWjC3s",
  "key25": "5V6MvmsFn1nBb3CSyvnG4xFDTzZJgctf7jRcfofvNZM9r8ArGmpKHC4BpgNEweGXjo3mxDy8zdJtGJjHts3A4oMc",
  "key26": "3gcSRRyGSdQUDQFauFazQ8WCfaHfh7cm1GUm6sogjy6uuy4ftxRuDtkA4m5q4WfHjbEn2zJ9JzShrMoJMNHbHdqw",
  "key27": "DTQv1xWLbsdd4NaqRPduYnD35feHZisDr7bpUo2UvSrkS7CvtqodA5vuhg1vh5ujuYAd6b7yWrAgHafTdiJBnFr",
  "key28": "nBHXmeGo1cf4WJWP7RWHXq4C68YNF8C4A1QQiQtUV2b8hY3ax2LNpvxatrbwKDLAfo1pgnfdXQiMC8WqZwxoUfH",
  "key29": "4cXgcSVf78uZQM9T6H4itUuYoWxj11fdxGDfN6MDQLZyriZ8RKzyGF4djTHWBhxSsHtwds7RzpaKaH3nL7Dw3dS",
  "key30": "UFcZgu8NG4xXCAWBzSJkXnZ22bjP9uDsp8Uc7Qg5xTk24HM4PtdSofeDsKXv8uZR6AAUjuzuJw24cF9sTZMj2eb",
  "key31": "amjhwH2UvCAewP658kQGLVfUuVGWd4cJYHignD23s1x1yWE3i8wUyjMuBB37Fb9H33cSGBnpiDJDjiXZ2DpQp7p",
  "key32": "8BKqMHYS1NzEGq7FyWJwnt9GNxrufbN1WosZbnR9wwUojkfjBEqf8C7QeA2NbS4c7brYhB7WzeNP1sjQ1K6kqNh",
  "key33": "4BCgka8ZfnbHiiQ1EeZSfypmYH9Q2FtSChBiPW86Zw2MtGrXTZcKkmxbnXydpCLNcr5MFCeuxjgf9V4fNWTbMxJa"
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

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
    "4SuuURz3xLucj4weQXTG7HxeYH41gBQmEqjBjtyoEWPrZhsH2QVxnihUvThB3bjzDRqjRadyohcPftHZQ9jWQUmG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYPYtznQBzpT1ggjbqVY78mCMoS17DimR4ghsisCqML23w52KFEiWF49RjbNsEoxqnAbiYFErecJg3XomrGm1cL",
  "key1": "YyN25ZzjWpWfTvNjMwuXQrnZgXko62Hn6qqmwCTaEihdwJgz6uc1GMm8JFDXEdfvB4yb8bU5DLEDkY9Lzgsb1FS",
  "key2": "5TaGw7usEdxDCywVuh6n5C2FQFuAcXQtmD4xuPb6eNTjTXf9YuS3iZEZbmhFzeQkpxEfVXrFX3k9d5ShC52rE57W",
  "key3": "65ypWTgY1wEgyeoYoUxsUxA5o2yPP2XEkUu5j2x7Q9vqbrtz4Cfc4WQPbLGHhFMJsdRi5ZZ94LEScEJ8cfT989nE",
  "key4": "iftYMsVtYRo1gV8HMmq64KxPxKg7H3pKVMubgmf4VbjZF25NmimBkCoQeF4ueAr4LPxrupvnwcd6yzeHdnxA3yW",
  "key5": "2TkBQ1auQRB8gF1Kd9rqpozrUREZpYBMWXQSo8X1L4g8T6HF98kTYbC7vtwxdMzM8wwjzF9T56rqxK5eaoeATnMg",
  "key6": "3qW7qCGkhK6fXne19k3yf61Ymz4yHG27Csp3kTMsoLkMWgCK66t7svQ9346ZCjg4dnc8ZTm4FQaT6K5vtUgkdkcv",
  "key7": "6kfPGe4jA6PgWHxWBsHGBNgQotui2yApVewhU872Go8fBhqsgEkxNnKSBbroGXPaVMkaiGn3bjXHad916WnQxsZ",
  "key8": "37rruC29Ks99RUBc5PVtodbkHpF2xRwkx9faLDi59HBL7iA14fhVy3dZCQ64YavKWhGVfMZTdSprEoW6fKgViA6R",
  "key9": "2M7PGe7AqaRNPyqrX2wCSSVkt18CruXQRhpSTjd8UBqE2o2z5nFBjii3UgBjP9iPfr5tNiAeXRMChtkZnPjKYTRa",
  "key10": "4N8qgqat6ZUQwdp9ErHt2sTAMeaJEopndrYEk7NkstxMSKMra8Kf5MkA9Qqg6Jeg1HZbfNZtLCiBYvkU6k2THGBq",
  "key11": "45SHVAAKFM8edRmiMTp859bBmyYWxGcrRbsKANd1bC5rTRVerk4HAfEGsrEPKFYqnHFDa5JHpsHFsWrTA9vzdwzX",
  "key12": "3BXEQhgYDJVoZYHz6xwHXnAqXLdjWN1pgDR5hhQzRKKFsEsAUgNhVTHSTZKxYdxCVSriHbNVSZiXVqQHZZMTjegd",
  "key13": "2v2rpobYU7ryNwvgZRyWwPVkHkPjiyvBS3Qx87vAi6YJBZTBdFga8hWznLAkbwMaLYH72qU6REzYNgzZCcdKVpN2",
  "key14": "3RmH2XmwDEKLygBAnyAu3J24xUKNr6P1V4wavaorWRFc76MsKMjvEJrb8kX6bxkpM9J5GVYGESXvrgDofCGBFSq",
  "key15": "4nAYt98LAEbVphMVtdkbLMecy7TEDvUuY13fQDj1kdjpDLTJkwZ2C6cpadaoRy8yMGNQDy88xcPbrxktqpc7hZc9",
  "key16": "5VWCbqsgZx1HWx7YBQopwuQoXhPuL2in5r7avj2BcHyU2DfYVwimPwXsU6p5LcTS2GeeHqPd7MmYnEtar2BeBZvS",
  "key17": "R9YpRRJLW36p9pVrL9xu9SjDwy88towFPSZ1QiZ4w7bw1DK87cHVW3ma7sho6cvK8FSvPrraPD3br9GwSzrH3g6",
  "key18": "hSqUVgmXgM3RRSPEkSYeS3gUjiSH5E4Y95UZFRUH1smwyDxYT8GPCCoz3z21U9s9EH4wrJ2y7wAHpm2mBfiW8d2",
  "key19": "3dvyBYcNraByYEvsHg69iicjTtAsqfhL4oLCkBa7mrdwmMV4ztV4iUv3vvvZt1DgNmUWMnis8Zd9DjfDYQbLXeWP",
  "key20": "4zmStzpursGoUon8Zd31axMKomCPo4i9CxcnV75EPkZDEQdPutUhYbndq7EoqzMdDy3M2Mh3yyL8MuBnSv9tmj5k",
  "key21": "4o2hYDNdLNr4AchMdJQWvchsn6ygyXvBKRZy7fTA2rf6iLzJXFiFwqi9Ur3H9rGSS2PbUXvDMyQfp9cWmY67r5vB",
  "key22": "4ujSJafbhScn1P5kKkn62oekcPT7Csnc5tE128RBeZxaSs3g2iHD8d2xBWHHZoritZgFv4y4jbvcucLwVo9Wv3ME",
  "key23": "35Yif3SFSgH1pB8d2yr2WBpcjNcmzPHUZsfqtgxn13XVaamauyUBaHXBwch9WvVkhmQv1q9nzCJ6oJoVVfWZPWAm",
  "key24": "3eEQCCU53Znxjg8eHnsFjNRm21bCxhs9kTu4EmBcN9rs4a9jbXcCMJeKGsrdm8tr7bGEeyP71ubcwyRJNJts9Nf4",
  "key25": "4frTALsiSB2qC3sqyBssSYuJNHyC8Wte26dAQ7bW8ttQoTzqUfpMeGuAfGcyjqkWh5X1qvGShLdvoAY7UAXAnUx2",
  "key26": "3eSscCEvi44QvppG6ZxQPh3BNAC23gLksk6vNLVWKWz7CyqkRtfgA6dXshWFfJVEHtpLQG22MYo2BP45fikZyfsM",
  "key27": "FqktTAPWnRHsZUDRkH7KR8aQGqQTQdGEE9VMgJhc5Kqk2K2D4pp8TzfTQiJkHLz7HkUzKW4WXThBHLfCCqbFEuU",
  "key28": "9y996xDH1QXdFZQDhJZGCzjr2VSoVixsuTevjUtTy1MdxvAEFWwcnqUaVro4sEtWi5wYii6LG7jLyc16EjBVTVQ",
  "key29": "31ThEwZfn5E8DTmBSbno8VRvdM5LVpGv58E3d4g5nb2MFuowoi469XahLvoFEcWsiuciTAHcdzGa8HUsVNZKyx6k",
  "key30": "25M2Ec1oFTcvhSvof8aAk5ayuG4xAE3mSExCGBSZFBWHZhmDobHA3H8xP1T2uGTgJbAG1PXLB4MUwABrN6APPWZv",
  "key31": "4B7QLbTVPamHJHYhNQ17vxhCspkdPNeM4kT1EVwCW4j6wE8VQR58u27gfVLH2wtSp2jASWydxr56hiRL3RvSSpd4",
  "key32": "5dpRSkyWv5iHkHZuhhu1RBkcJDUykNns9YMbS4zV2Ey2poH1KPVNeLNnqpzm7k4H3CX8os85YEKgZH1QN5aNzMgr",
  "key33": "gybpiaQQkY8UR3YxSubTk2WwGQMajifH6QNMq47yTxVzqAeixDra3HSTRYPGhT6stLBYy72tAeAhPs2FGAF9zhL",
  "key34": "2Qygoh9LzfxbJSo1Tdx7cU7cxMvxxPxmhUKcMtsapwdXrBj6jjMpqCYAFK8CwaX8au4w8gLfjWpKziDg9t6Uq2w7",
  "key35": "5PQd7iYratyjKLhxj9nkbSLP85fzpxEWBEjfBCxL8goGbGmuF7YYw8PwZmVm6s1UoA7TRa9utverrNngmXXqXfPw",
  "key36": "22Un6rg92F4AY7PHM6ap5E9pFsJi7W62zujxw3hiUgbKzLEKLuh7ST4Dk56zvZbtaMPqcbQKfCgWkVoqxFM6HaGX",
  "key37": "2pAT4wk1kAmgbVnYt7Xro3RCUCnNDRZRYBHtVyJWCUCN9uHReTGrSsKoGEpLdqDGqADxHrSGMonBLYy6y1xVe6aQ",
  "key38": "VhHQPinHw2tujWWtBKXUWdE52BgrAEgVu6YsTyMXPjZ2ZvXtuHZtUrDT9nTJGACtNcr6EziWJRMqTefvziQFLqq",
  "key39": "2yqKNzSmHgWoCiAnixajVcae4mwnST9BUrMAU2hB6NrmECMGtU55xAyxvbg8DERXc9efhzRC2PWSJrKa7WTTfTPe",
  "key40": "2PZAmLtPRMP9eQ94A3NqwUZxr9u44kProj94AeTfMHpx2ZomoX3FBCrYepWQe4VVeouh28JrFHv9StSfrPnqqMSa"
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

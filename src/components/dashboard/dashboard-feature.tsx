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
    "3cBkpNwcZFzTS8pkztPU9shMy1mR9TG3nViJckXk3cKMxdF9HfKEFZBcF5QaQRhgMMXc9EyityiWuUaN3UKzq2Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taifF8c1eF7yNsAwiMoYqSvDAdaLSMKRXmJWVMi8ziTEERvZ4LWBSL46K3rYCZjEVG8GeXTdL68aqzdEeADhC4a",
  "key1": "3FUCa5iR5gBDNJqPHx1H9xnhQ6pRtE5jQbmWcTCMnCmKztfJ83fWDg1nUbBPMEmxvyyKwPecJBup7zxfjFUPaosn",
  "key2": "3rMKSU2LvKU7Uwe9SbaeAaQMexyCPYNPYXdzSzN6uV7teaTnWwD13jdo1x83szw2yrN3fbBwJbGKN36Zieec6he7",
  "key3": "469xj42r2ZNjMeGj4G8o3T1ZLvKsbrtMJuhuZZvg9xXvVFoV1ZKRr99hmLLnyjKFPeHEx64EYWd8stmvTendcyWW",
  "key4": "2u7RQZCqRn7mq5CskkXDoEc723KPVN4PrMRBgqghgMeEjR5QeByKkyE56tEk3EEozmGPGaBwquUKeCzhabJg8kZ6",
  "key5": "5Lp7DBeB4pDa1c3CrXGUPsxCyjginn3tSTUj5fUV9vR4csAa12iHdxqkhy5HHp4yLdcFGZXNejP6xCFJrwJpSjZj",
  "key6": "4UAP4kxEbxgWdqUGaqqWPz61NnbhdE1STSVkYcPtdj3PxwJPkoKRKLfApPTjTVyrcPW2DzU4M6ayK6Pq6njEZ11w",
  "key7": "2FmpENuFqodGUGBNoBtQnix4gjokApACvS4seEjGU1RHjTbVPExZCWqFKJYFmKwY5qKV7kTJa95mZSLsC6eHRMy1",
  "key8": "3HJxH122ytVwhjafHMg75pup2tnRSY4hXyzhCQtC3G33a4oLLNffGZS8Un8t3kAqqZCJZdG9JEpxFdLidwyVEBLj",
  "key9": "4sViG5cm4eiwVbAFof36wXYwWcc77j6eDE1kAQj973u4idiVb8f8ktdFhj4wPqm2rZZNvTa3KYmBiwkSkNn2c9DL",
  "key10": "27Jn2Qqkxr7ksvpruhtmGKkeRxKQqrzm9kF7iEhxg2NUJSia4yh3q6eDkTKm9P7pHfZgGxZz7T4Kw4jMqkFQxiro",
  "key11": "5GJaVdrK7x2pke6DMDwEh8L4M2ju8Sq5MN7qbetU51gB93oKDG6KKruqmVgadroGa73go1vapaw422ghgqnG3of7",
  "key12": "2y17wSQCdcmYhgbXmFtVbfneZnB95wdgAkobfwmu8YButtLXMXsjxuvWWonmn79rPe5JnwhW3hD6JqdoTHUsxENV",
  "key13": "46QfXSjQpKpJyP5JNQhUrfxBV1LZYzZdz3eqdyjxMSJG8sfbGF1r379NwjgG8Tkbp4bVAs6oyVbUvdC6okzRQdjH",
  "key14": "44QacsDXUGsmE2kifurVHna8HDh76J8kLTd3PUnn9FwdSCfmHtdtXhvw5Q9TqLHo2YoJpZvipxjr7jd8rQ6xsuhd",
  "key15": "5uing6TG9jS5HELLjxKxEcdCfVigxEAj1otgfxVCahZqGpsSypzNPsd9GgKPxLxaCkiiPg2NztSiuhMPr9LoqBSZ",
  "key16": "5TZVzQyb9dp3fCqRr7is5HU2gfmi2Gz6wtqKw2bD59nFswLMYZ6pwAJ2RD1Zu3dZbx9cMD3pbJQ6g8hoEU3e5Fni",
  "key17": "3VGRJnvYEknpf5hb8ayaz9Vj5S7GVR1a4DyxcaHdBN7oZVNGFfTD74YEhUHxHjx7h7PdT7cyALUUawHuriYQV1EU",
  "key18": "2HzEJTCrkb5H2y44fah4u8Vh15RyE8M864FeoGoCHbcBRx6NQp4HNFF84vgBa7LxpFXZc2YBCyFVZ23v1a6T8vpS",
  "key19": "2ou344c3KudjpCFPDh9cM3GPKg44tKdfvVbzfGhWc4Ncpg8NBW5UCi3WSPJyoXzAaz73z8esWqDx8px9Eoxaeb6j",
  "key20": "4gioBgduJrfUJ9p7aEqqZKhfSxH4eDPnmLpXG5EBt9SRgUggo4tB8Bo1YgXP6gzbTRXEew12G1itcBatVFhHYuTN",
  "key21": "2DsyR9sX77eu68nZE8R6eUeDFJwnL6dZZdR9Ur3X3e8CkefJ3Wio9j8Asv6KdkB8uTNNZLePGKpHhsjJYVHmouQs",
  "key22": "31v7rpfNWE7A3waTYzaL1aCAbXhr5t2q5AbU49ZvxWD3uaiRBSzjjVAJtQLb3yt81cRhYxNB4j7Uz61WF7JMkdzQ",
  "key23": "3rUiTgWoAEBHW8STyWAMKHjcLEVc4a4C3pVyz4RYtfTJWpFssKmebTdTuF25TGLR4SEzmdz4tovADcK8pszkamdj",
  "key24": "4pYZuqnndVr2vA7arXqr1YhEfartW6XnetmPHHrP2d2CbFchkkURkWcAB6aojhY1CP5pK8YEwHJX7V8FYwbdRAzr",
  "key25": "39KfNSQZzSyEjbrNPpzDvjoyKdxMdk678y7Pdghtnu524SYWzumeSQDGSAFFU6ZW3uDbD8RVXRdQYK4599sBSVbr",
  "key26": "4CFX1XHLGB8wkE3L8MLyfRMzoYydmvFqHPTVGTXHo2MyyzJHLovSkUrFmVQUCM5WhSjNsTniBvfQq2easEDYmb86",
  "key27": "4ZqHKYzL7ngwVtQswEpzkU4WfYMB5C4K9pjAnpWgQpzTviLzR9XUZ4pyNCymrVgipjxCKXCxEL3kGrgK6SnY7Yex",
  "key28": "2kSC1wUhRotJphLSX7wUZtDyCN2HqofrzZK4xNhopKzRhTCVnX8MbJ3sWqR1hC2RbegmpWJi7rnVbG6kmMXR4XCC",
  "key29": "4bWiFePhLUV4VEykip6qzWRU6nBzpRAKy535Na9CVB9q9nHFsZkcUr5Y7qWKPCsG2NmTYjAxxCLgKXZJ6GAMfoHk",
  "key30": "5ATQ3ThqPqeUsYD9FuVdMxGGtDx8BBziSGWFKH4tQBNhiVPaDkp2bcrS4MGntB4skaXjHPX1TRwY8ES8Rm55BX9P",
  "key31": "C2zWnLX5mvrAy1PiFhGiikrfuePh65T4GAqVK7jRKxMidRe6AVMDiViWfMrteqVHqrQDWdkqV7giuyD5wVZrDEo",
  "key32": "56GUET2YnujsW1iGYFRJrKHTo2hejMatjLK2cjTY9Fvqt9kmkRgqvG62HPoCWNySrVBt3S2LodkqCZf4jtwLLS4c"
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

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
    "2EYKCgXgroVvFEMM22zsw5Xz6LpHxTTNrraekLov5ZZWcu8L8rh2bwTDaA95pXe521rQ7K6o6ScZo5uK3TZ1q6h8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjsvfqFNTQ4TyWt1TVCT52XZ463bUjkMTM4N7cfzb8dFgGYEp9Wt5WwR7KUZHzuePKe2LCQNRxJtEnbPV3jWMVw",
  "key1": "4CAvrm9KPcq62t2KJBjXp8jF3c6mKnZudZXNyJHjFXCw7qQwou52NbnJKp3mreYgYH956UXgttKh6BAaRPnfsK7b",
  "key2": "3pDaNKKTCf2XpVYMS9Cqe6GXJESB5rTVyQTfYcioEA3AH8cmhsf69NyihaGgQAjzBXHJtChstbsSPEA3qZsXEF5n",
  "key3": "Re6vMgevF9VL2vpN5WdTNrhbQ4jxzVaMGPLfQ1q2c2UbT8Ww86EPddcMxAP8pQgfkgSmTN27tbKwQ5TGF9kfT6d",
  "key4": "2VQiBYvno9qVUBEPqSrTVhn2bxuPeSfwnY9NHVwAUod5hZA36g2Cg5aZZjMrarW7ubePUn8XvfxthFHWZrXGR4xm",
  "key5": "33txUB5pC4BXJVw9rDFxCmaCKtLm4yzKhSB3VcVrJ2pezE3dQLZ3Vd49BJYJaeeGz7vNQikJKCu3fnFNZ4G1UxNb",
  "key6": "3VRTk7cGyqDnFzsEbJH4XwdEenk3S3AmpZa1SkmQj3bjoE4uMnZnGTbowQcbj2Myo69kT3d3xnmd8xn1Wbzpx5MQ",
  "key7": "44jZehB14hbBc8Ka2Z2pgR2QZBGnLCJcmN7Jjg1y4ZJb4DMcxoFSrT7yHS3YAEnJ85VvGMMo7tJ8Sxi8SyoyjUCc",
  "key8": "5QomhFFUL9m37E2MvRmhnNhvSxCsR5HYYDZT2hGqPYvnwwoBmt8Ux5sMdwowemEHXBaQNpP3KiGnZcbYLsRvLof9",
  "key9": "4kw9u7YiQzypTT91zGxL851Sis3AJjU5HCLSd6ygmep3QEYB5xLS56UXVrzpeYNQbrLCuo1mDT9ZZSasRm7QDCvJ",
  "key10": "81Nw2ujhTyJF8CVVYHk86m7EM2b5vRGxo45KmEEncXzFnnuFxLDgorKWajEAQpvoYm2vf3DTrSLfch7tCZho3Qq",
  "key11": "3nNzgv872YpowGaMESsBDR5KbLAmPXA23kNo5PotB2ghd92VYiQQ5TG81Na5hAuX4W3DmGds2KPtBdPRpHUFVbgv",
  "key12": "4id77D2xwTGyszX3qTN2eKQcyjrQgTt5veCszFFvGKMoB339bDqgnWcUBegbdgMEdy8TgejMCYG759QEHrbKHQUc",
  "key13": "3hfP2taDZwm9P34mfB86NF5ueyEQhqbL9ghJi4epb7VgpeVKCQkYxB1Z9nJjGUR7LaGPCu6p2hjwJeck2mp1XRhz",
  "key14": "4vR1PMLBq9wsYMaZBhvX9tmquPSimJhNd1mWGwo4yR32aW5tkHv8U2Qq7yqkRifycNjDJzVLGb9xZoCBJNsqPm2G",
  "key15": "2B8R1D2gjR4diXN4WgoJ6LkokDTSAN6UgC63qMjpFuymrdnQh7bUQSS7G4bgCDvZ8L72MpeoB24fnZ7vfbZF41o",
  "key16": "T7N1v7oH7b32VavyuXmR3wukE4snqNguqExaStc61d3dAryWfh42yMrBT5xmfGiXyPZEscWHnGVm85wTpA4zVNi",
  "key17": "RXJ3DPw1qaHTLrNaHt6HrEtLKLVQt4CtUrhc3PJgGGoe53HnyDKCnio1KY3cGH25rayPf3iwZRX1QGkWos4EcE5",
  "key18": "2B3wHnRLF1dHmgziFgmru1UTJb3pFG1JH8g98ihw8GXXKB2MkZMckcr9yjjeo6ix7TkK19QnVbeUKgo18FJKy93N",
  "key19": "3H3ATginf5Pg4nuXC4tRAfSb6rx8td8tdNADcTo9X9kEtw9HU8zdpLK4m7FDrj4xjApR7YPRyEPSukhhhbtKf2M9",
  "key20": "34Lag5rU8E93hPFjM8o4oHFpdLWvuLeZUyNrQQtuCs3uy1Jk12sVnTwuhrBsNsJ3vL2piZHQXuya7CyysCAShTwS",
  "key21": "foU313WT3QbNxaqCAgPemnUcLqtmRYcwo3PC7jsvbfzAx7z1byv4igfwEWTMtvdYGZJLfhC9DG6axhWhAqfC7zf",
  "key22": "2XhiuEUvb6kr5W4bquSKKNzbMkndfZHm529G1YHxSbvCZoEch5BTTeUBMuTCBc5jMUnj7ULMu1HVBHbX4QLPV7n1",
  "key23": "3AzzHaj13XzrrM2w9nfVfVPdTz8gdkyKQ7JJEqVjxUkGL8rn1fLbaB4wjmEPeyVBLqDfBR1MYMmEY7vJoQUd9NAq",
  "key24": "4ecvL4zP1UfKiXqnDpMZxHBoxhDnUdD9bJePGDfXMs19phRsPRasQNmETc1dhy8YHd1VarJYsc6xQbHN1fnHYmZB",
  "key25": "3ASbeHJ3Hft9YxYcLtiqju7Bab9nYKeLETNjJChD2nFC4WU4M3dZjwqzsP2MhAFjKnHWGVHA9qSTwi31kEV7Eppc",
  "key26": "3JNWyynnw7dgrjfcjBWLAFYSuWRndNrPAbqeG7AhXpJ2u78AhAtdkLN1JLuyvmvhNMNEE5fg7rEDVQoPfPLERozd",
  "key27": "5e2cny2sCUArBYQHPdPUtvqoj8FiGVrkPk8koNcxw1xFmH19VMaLCiiqmd37rXGPyw4LbtptWKgikWTovR13Qjqv",
  "key28": "5bMkFTXDtrvP225UWth8SmAotev9rhC1f2UqttUXFpcot8Tvbz3kkH7bWhNTtjmjF2KZ45Tnr8GoUougKCf9nNrE",
  "key29": "5rtiFpW9j6qF6cmwwVKsRucUFME6SZxCV1mFDRQbh7PK5RbRgSxtFF24jhtfVzFwNjbZYnPUsAjUPqeRGURTiCZ6",
  "key30": "5Syrs22sYJ162AJxp32c2uTRM7gb3qGr1VPrakR6ijwDcaUKZu1n2MPz5gSz7pYvpe2hZyHXD8GvvG6Z7CSF7syn",
  "key31": "66wrvXH5g78vfSboqLvX95HEmhZFgAx8YrTJBWRj8RQVKP87SD1RWuHLvD1wdQKZG96Ja6ngATmhgrJiteobFN36",
  "key32": "3P9PjkRtyLRACvThJTyr9mgdob8TSzKELvGVv4vHXiFCEAwNYmT7hGqQauBTC71v2pbyv6dsYKSu4NN2z54FN8EQ",
  "key33": "4oRJrS8UYJNbw9tvo1svFmZ1op2DbaFgF1L1UigwjU7vXr4eKRuq6CtaKDbieAcYBtJgbZoEmxY44Ghv4gJjMRaL"
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

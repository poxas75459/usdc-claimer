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
    "58jCfZRemVbxmfMjv5hEpTg5DsPpGzpmNktSD9MaaeWfvgECbzCCDX2Kjg3BsYwKHc9qTVCkGFjTmH61SsWraWNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24uq9i8cXn4qzCzFMXM7SaYKC7we9VFhGfU8vd9ZJaSSQARH1LURAHvMGipb5kXD6b6QMGoZ8mxWTNbN4f3xqbk7",
  "key1": "633F6grZQwmdxi3tcvnkAxHqbpRiFGu4gR96Acp5uUeJb6P9vM2dwGFj7Be7xWddCtHcajUjRfsDdM2GDZFE9fQv",
  "key2": "2TkqeBYZ8Xpa7MtaYb6tNp16fgZnQZ1R6uc2W1kU7pn7V5gVDrsVDvqk5Udj3842HFMJMU7xSgQQEcmh98vSsLUo",
  "key3": "3PzDZaPj2jiXg53Xx9Cv95qhJa77rUtoPn2wJz9GhnDK4qHiSSwRLFXYMignAkWag9BjMFEzGsSy73pMZbbGKHvS",
  "key4": "5SVMiop3uSYu4DWphnRh6mLSjaKWaEpZTfdoiNzeHVtA679B7onDLYPsw8HfBy7rzXEXLGVfz7B3VJpxMckfLv1G",
  "key5": "Fxd6KakVNypxs7dEgTwdavLHwZqWg77D5p6DQqiV4tEzPR7gw8cg3poAnVJu285jAehJSZmjBTy5TEyoz2THaTi",
  "key6": "5wHSgVYXP5P8iFHxvEfDyXPAToCaQN5VqBHdiysPByodoDWvPUpVvWS8qFgxMrkhYimsikuEaKwtR78eJKCxTmzN",
  "key7": "2aMEXLheT5uNo8t48A2sbXDEdcSWxT3fr8SNSqJYCcCGqKJeVNuUR1kQQUU3uj5UARcxt66Gd2FKoqMB5xvPtdqM",
  "key8": "1mRWTyCjidEuyDbKXTz3rsKtwYGJ9g4rhcBuS1dawxqKydwe66WN3Veb3JYVvEzpWNSQK9h2XNVRrz3sBe4zpCd",
  "key9": "4W7EbhKjZAfWyM1Xxi1yepTxFbVkPzrBwSxa63xmeZoa6VJyBoS83R6WKRJjKVzyyjmtCZKMDRF6eTuouWB9pF79",
  "key10": "2N6eZLXyn4GycvNyE5w9ZZZrVpyGcdQqDCoRBPAmKsyqpfR6qQkkpaJg19QRJseesP6as1d233hmL1TTGRT7Zg1R",
  "key11": "2ngoc2dhav8pQ2A4ZJbs5cG7EebwY4oaeUxmm4vza8wW4pBXxRDqR6yojgX4JatLCPiSJab9tSwms3zGHK2GUajo",
  "key12": "3T2mEBZmdJoBuVZh15x8nwBydLyqfCCMWsBaYW13XAyvuti2EEq2nkYuSSFYVBDcC4KyPr8vCewmZRovfX8j1gCf",
  "key13": "3vBXE2AqxcZE5oG9HQVeG5DMAgaEtjGxqFDRCSVAHWUh2sBizgC65zQ7iHBBkrmr7Fouw3h4NH9hzLbV3JLw4Tzv",
  "key14": "42334gqYRGRyZr8uyUbxv3aDKotzpVoN9V5VFXiuG637964NFakEZN4fQ26DqNJ9JvqikDi7iN6yS7v4ikHeXU5o",
  "key15": "Naxj6tzXmzC3pviwCoXfRi2kMvJ9Ykt2cEqKG5GWvjz8FWBuWen3PA1T7JPBM8N36KoWFKTYV9AjHBho8f1BPEU",
  "key16": "2Ys8mSuuiVRk5pnYwoRyzKWDtJs7esfFnxp1Hd2v3peVzFjEqcrvdeSbGAhMxo9Jk627iRFNc8kK49Weo9y9HCJd",
  "key17": "5qAB1GpTkJyyGfKZSN48syjabQkuezNEnhJjM21WgJB1bv6C6znuMTPaiz4KfdHwzwVegsQoP88K6sNtqDx5xuV",
  "key18": "63Rzj8rDH4Fa3BPWUSsGBQTq7MKg5ufBhWBFeKFDpgxj8bHkjyXWayH66zSkbP38sUopezXabQhjbZAtmkuEYs1a",
  "key19": "5R7VMHQnb6ofyrNZit2XuALA1CjtePGVogohwvPzWUNGfC9tUmRCaVcPzPtJYdNbn1PP6usDuf7niB6UKE5YSRpG",
  "key20": "3pzkew67FGvVMCGvfSWSdtp2kZZo95CXdKR63zv4CNepZjqGTm56WxFvUQs5b9LWg98Xtt6j5jViCAHRarj9RqBT",
  "key21": "4Z8zt86sKMoavLFuadcjT6Z6YGoQhcN4DeBLfuXdoyocUdZPu7ALDD9AyPaG6yV8HiDA5BFDuQWn1BRHwJYFRRZ8",
  "key22": "4qqHBd3cLWvFSAyiEtCGSfXFCaeTjfHdzHz7A2wx9HHX6cu92ycwBZJpxJQmYZUVvVRvYTHFCXRgk6Jp3pkw7e3e",
  "key23": "pJgp3ZeUiEgoaLKjfVh8schCr8xL7duWhhf4yuCSqJBsAipckyPEquiR1nvJ9RvWaAcGjmn4DsyWPwPy9JFcYj4",
  "key24": "59T6cmgDpU2HgWPMqMT15MaebrbezurnKRMyzuHMtVCo8sPSYBn7GK7LFK7meJT9qVWvip1RYGpKzgpXw9cVNbh9",
  "key25": "4eGKXSHneyxtAr7XMJoMdsGHYCFANbkxYfnYPVWQvDxinf3MvDZA3GuoUWUER9Kk6h1hGQqCzMakuh1Vm2qmjocz"
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

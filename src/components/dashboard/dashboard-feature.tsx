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
    "Ehe6FbBw1zYi8NgKLdd4tegRpr4yKiFhmYNsuhQLNXiNcyx45f8HzNxb5dFsPZ4ZJH8nVpwtQWoGQPk1V3Y7fQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625dvBe72aCvLwHQtWnRjSoWUEzWRsJbMfcVuaDQpMKzcJ84yddJa6Arj1go9orLTD7vB9WY63SuQ2bAF3Ch3Cxj",
  "key1": "3gLxc5zgGYYaHRg5HPxEmqLCD957QtQp5Fi5bCxVogBxVkXifT8xLNpvvVjkm9MvamiajWmWJCA3mXkFrgersYbH",
  "key2": "4AfTAARRjA8vgUA3qDW7f814PJMziNU4zFmY4a5uotcbbm6PDCiHxp2uyU3x2XKuCRbStQQe7MWadKRFFAUjM2Vh",
  "key3": "3jJJM25EsmzE4QXRmZXXiVadtdzNW2CuM1KSL1rn2CM8BUo4qDkNJH5rWoegd8ZGqnYDu8Pn6hJgXJM1adykyxKa",
  "key4": "3VWdDrQq2bWtMMuV37t3iAFjGTXBe3xEvyMFpRoMBw1zZD6sgjPurLTNPy16VP9tEJFPTLXHZU85zXUTFxVupnar",
  "key5": "31AxU9FNJXu6L5C1zbQzqPCNtJFoUeSsvGohC8BeYXk8Y6WGXmn5TxFZPVX5wxAB2XqyLkyeS2fE6jxPeHWuUZBe",
  "key6": "5Nej52mxoNtNHJFRJek5vwSZJwAbQWxuS7rEZxCKmAMcWdruuPk8JKP2pgNHet9crfYv3qhnnXjssevMskr67cCc",
  "key7": "4UcUXhuAaA76oyzkDtzbTK4cd44YKCdBLd9NeZjgxwnYjMybetrUDiCJGzCMEyqJtgeamnM1KjS1ufEwFjZp59fW",
  "key8": "2fwCNFHMfcbETUQFvfMZZDU9HdWhjHdRySptJ3KkJEPCzwk9YNQWAFbdgxnRJRx8zBvdSB8TyQqE2JunwLqLdfvj",
  "key9": "51GZchc3jPnpnZWWc476q7X3H3UREYvsScvkLD7Fb726zZ6MGDECfB8d2mhKd3pAd6kturxe4Z1aGUn7t1Zb1qkP",
  "key10": "pJgNHfkJXu66Kc64GMyHGrkZfKJvRKukccSNAvH4M52NkdTwax9ZogZGRRaDLkWYp2f7i58K1JP8hmDjE35jePD",
  "key11": "65CmzfX4P7zFQGkTAVtDUgCkKKQoJW6mp87tMnnQmUy7Q8nuk8acbkUcnm6YfQpKU2mWysSAY54AUne92i3iovh4",
  "key12": "2nM8RqWa683K24wS8xbArzcqDkrY3ieki6mQFh72aaPuZ6FctjD23zzrUuUj4ePLQ4v7JNvkfBFvgFK1BqNxhz4S",
  "key13": "5mGF2fZzhkeERYRLSihoCAv9eNye2Wp9KN45YQz81Ft7H5GQpPMWQk4mxGMChBoEDenvA4WaQQFYPVA1ND8Mx7hP",
  "key14": "4F8bL4CeB8S3DSYDVEj1oLzy8qajQbE2wLNpDri8M5KYANwgxZRyNQABup7wzWd6hM99gxCqpLhfMYE3W5XK9rNz",
  "key15": "5Dous9m3D7JBL4ikamiv6x5TVb3GGL9mWrrEq7ZbDq2RPuRQkkyjARAT1XT9jnptWYxttNmBnfWeL6eyaJatC2fC",
  "key16": "352CZAzUR2CQ4MXfgFtL67CHT2aFiLDjRowHmWFQ8NjYfSsLm8Xgd6z1Hcn4jR3Aqh1iv4FfxaJgeoU8B1wC9LWw",
  "key17": "2cBqen3RMbAL4ZMTzksSz3wqBKcJvvBHMA6moJ91FP8DZKT7aQnxWnHgTkLD5VEW6oMiDdirGHzzCVAPwfjybrpK",
  "key18": "KNDNBgpGfQfPvQnTjibFXnjxjWtymU1j7AVgBmqofhDdKKoyEFWigi5hPUPT1Z8JR2hKVTdsQWtT4Abi9ESaRyq",
  "key19": "5RoZqUKprNDbdy5ikBCp8xjkwrmb3CS62KyPLSZZM5fEdpwiAYzQoRrNXTWcD3kgQhwutrrkPoMe4pDF4Wz8Q9TD",
  "key20": "3vYbxsSkMYojK5s9AwqaE3gWpbpkgKmrWZiuQvLY15hiUrLJ8SQWaZe85CB59QHTqiQhAHj17Av3FkBv9CgjAkBD",
  "key21": "TyVHf2VbMEtpNMAMXQQs5AnQQZQfjMLW3kFW6XdU3eKCBykvvso3UWCKNmT4MyBitmZqceELXJmVNAHc7Sey7of",
  "key22": "5CccnSXttsu9bpkLPXmwQPhcNpJk3GrzppSdGtCCHX5bnexvVScGfTH14qNM66L837MuRdsc2chrsjKSLZi2Jrqr",
  "key23": "2Nitx9MnH1RMHRdKYWPfCJhFWB4kBn8MF4facUNeV3dwMXxwuxt2cCSLTHkgqnWQZMJHuKnKNyZCmZE7QrWmL6oP",
  "key24": "2VMpFNn7FsxZNjJZD8Mm1VXqyxhqDaEuQysYma5b6zruGqnmZCeJpcbsxLqr5ygpyrj9DoWzo7rspfwDmMSVksBN",
  "key25": "4EHnmfe5MFR8wwA6nerDX4nwvhqzrbbLhCGzjyu5KA474gm7QMEXkfEGqYWdfVJ2ds55Zn4r6kg1WAvRLFEX31tb",
  "key26": "5puYhdyRFfdQW7rYoUHMsFQMDSXe6xvYPUJp2tx4VsjCBf7nVpGgHWVcvUjHCH4bJf9U9c15AsxC7mTGXzPMR5Zk",
  "key27": "2yFYFXCUvG5E2Sqmmbz4vuE4m7xRM2JHCn11fcm87Um3XYbWSHpLCZuxxMkr51nEwqQj353ydDfLB1JG43JTtetU",
  "key28": "3eRPfYhodiRF3dsXJv5eyKCmHco7Ywqt6xqCCuqSPZxvf9M2uVEupfpRczWW8y9RbeLNusaKrRpT46DrHLCZ7gsD",
  "key29": "3LBVrmbWEjHpnFcudHQEn8hJNrv5DwrrfW7ujUWVnVfzAveYiMzG4YnBG18sTQPgEVZuK5hqe3nXKK3keA5YZi5J",
  "key30": "58xJjhKaJi5D7B1v8T9ngD1TPSB8R5KFDY6QzpuRq48w8yS3quTG84kUBWMN5qSSmYoeMtMfNbrpRuwjf98kxar3",
  "key31": "3zoUfF2koFthp9oYMzt7QatggUNcBGorpFzNCKasYu2YXRhJhsiLZupBf5LTt6Zx9pespe9wUaE46iAbmsT2VZcQ",
  "key32": "53s7qytoEBkjX9AT4zcthn27FRuoc5md4a7j9NB1Sh7Ayk8Kx24VUinHUcFtX3VRAhTX42RCeSmhPWsPZrZqRx5x",
  "key33": "36XC8VbBS3mQgagdJrHZnXDGM37hdggbGeRSni44EFmMQoR78sq68L3xLuKdbEV8UgfUF5LKsZ4ni5P7onqYa6XA",
  "key34": "648RZE2mZEyBQSqBZubH5QvxZUtVdg7puGHyZk98k1Q559oXrgkN3kpiJTgFAaMApcRXBBFKCf2qsV3WUjPfTQyN",
  "key35": "46hZS5W9uf8MVUC2HTmorDXA4V2nah5V6sKZyZ4Nvy8fT8D7nUxa5PP1dvythgtdw3Lm8s3Zkin8rQP1gtavpCg4",
  "key36": "NZVLt33VEEtQ4EPQoNgbHxBJmZh2bGtFBgxCB8Hzr3yc6BTFf8e3Kqvp1DcL18PoQHE2F3V2BAznQE5ZwkshZGg",
  "key37": "5ecu8VsrpuckPH7Kz8vptRamVcVCyW59S5vWYp45Rw2j29TdccpMAghNeMMmAuQ7PyQ4E754gXZszqThVPsiiGmX"
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

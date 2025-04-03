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
    "2xJcSFs4ucHNeTfTwyH6Yun85VRoTVTKGq8irrNRQAqJ8wX3hAWBdAxfwsnK32fLAPu6B3B9aNmfVe3Bm5nSnJvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Qf96SRvBgiuP9WgmjE2iT4o1RFJaZAy18nFAXcfa2K9zM2ukcPqqrJn33x7knV2MdeDdSfsCqgNn3ntdQdYjbZ",
  "key1": "5bK2NAxhbecAiAmpxwaTyxFZ8xoSUcMdTqedFDzk7p26xwSSwiyQQcDaXTaP97TAKoj5GRhj3HEvzsv5koBnyDcZ",
  "key2": "A2kajEWC72z3LdFHMRVyirwBQ92FB3i3s3JjDu5HifjgUKDs9iMNuyUvjnD5FGL43YD7PBMBYZrE3bcrRkBnxG7",
  "key3": "4KpmwP34VR9n46S2mNNqrSEzy53Rk5bGu5SoTSiES4iDhCpbtKdK7sV5r7D1uD6mxBm3TKez8ipBBkrquyHQ7L6s",
  "key4": "36fG9q4rr4pXwZvRgkfhzvLu46cjzbkhcrAvHjCddKc2X33u4ANfTobYgmpXRYUMxPyXMm2YjhcgXmjeWMyhsHVj",
  "key5": "2jZynmgReXxq19DEkXbeakVW3NfgjVWr96vQoZJrjnmNtD9FoVH8wRPcZkhhFpHuiExSR83ueyQCrZ5j1eupKgEg",
  "key6": "u6aiqLjaw3sqPo9VF4ETWsEQw2ifiLvDsgybZCMj35b2rZFqCGgjdTzMmxqu5PB5qaLzByRN7Q2wbYCMYhAKvEL",
  "key7": "4uo5DUFvz2cXxrKgno6qCqDARKBHg6XyRynZVEkExjEdjXYTwNTsTsTD4wKwbbgfM1vTA39Zefxprrtw2M5B3gVw",
  "key8": "2eyM4jNMySVKKnMA9s51yhPxQrUJrJNBiSdb9PvuxYD9wTGqjVT774rMf5QjmDmhBA8SNTvjcrJm9hf43p3EFSZ",
  "key9": "hrKTBAkYGdLPAC2nVwdJTSbSntzjfpZKtNMqeQvWEjf9Vy7viNPRkiNRjDM5ob9hvyYCR2gFf5mMnGjpGQQvXW9",
  "key10": "WAS6wtPyxSYRE3mTbTS2TqKweAWRVprirTPqhVHusuEfsPKQsqiKNyKvtFQAZhSKNKHd5pYpWkoUkm4sngcoaLw",
  "key11": "3UPGPUDfXsTsP5g7N5kEgMKnh2FpLZzoGbqF3njxSm8uaNKEgViGs8PC7nac76HdsdZwszgPVhtKUqbge8R3rMvS",
  "key12": "8eTm388erRZZ1SDhR4SJwSAqipahpxG7uNUyyCCV773AzJJGCeoW9oWRHnTAU2otrkcB8qvwYxHVECkmhtRPiAR",
  "key13": "4baHn81HCQayRTMFBGFghsVNc7N1FTkodaaLDtJxzraNCn9BXhi1ZQxht3RHpBmsPUDvcbTXhez9cXdcLtF7HkM3",
  "key14": "RuQH1KLWRBRo8eV8ycQQZ3RhngRrsPRz152wymLXvdSE7ScpstCy9V6vMWdUeLVEzqBC3826WVg54hgYgxoNfpe",
  "key15": "3ucKUF9ra81CD4aYF1zmox7aqpNQFBUuqFstJm87ghDsCkkcnWRb8XdHEU5Xjd99PGpS8ZFAv8w8RcmonP4Fa1LT",
  "key16": "5rkBeU9d2ExpepYY5KvaCy8AWwRF4gZ4aj1uGdcH6C7iysmZ7AMTVfJrkcxVyvdkGcqnAEkuePfxPkPp4AAjgiv5",
  "key17": "3i4U1quXvsUV5pGT9Xz96KeRLCv6qPhkBw1Fhyt33uv5gr9zWWqemoq2NXNz1iknLTtWwysqUPWEE3fCaC1USTLt",
  "key18": "5zMmYpXJBzAkQffDSuQyvk6Hto9hpVme2f5vqHUeqqV5psN8qfAe9rPR4dMw9SigW6GkHCDmmJKXLtfsgki2W25v",
  "key19": "5nJgAY79ukiC3NgXjwSiaxc4Th6WVxP6RtZGUA65grhKz67Enzeu9pHVeA8X2s91eibSvoT6CxzRS9gddixi1fDz",
  "key20": "7c9gjUW8DLg1sWPcD5pdiGdPkrHy6zmd8jNuBRemEzdaHgrqLUeQ9wKWCwy55DE9yY2cURDXzixQ63BYGxjH9Vz",
  "key21": "56JmZyADb3bE119LXJBXP7JgR6o9Uk6MF67b2W9gswb7apgYwSC7347xJetaREi9UP79mwemuDMo3Ei9M9mzcmU5",
  "key22": "25G2iXgsKRaqCLBUiuj6U3rK32dybASp7Uc4BCbssET59BPaNS3yHDyYnXB11QAR98Xt6kgv4cD8Bc81st93vwBM",
  "key23": "4pjigQL1Bj7nzMqz1Ti9yCTZmojGth2DXkz5UGXRMfc29rsjnv3meLgaNUTtFkcx36gPZac9kShKXx1vYB4CEg9N",
  "key24": "BKuTsTFhnjvVo1y9F73GepLsWWer8eGqwLjuJWGRBgBUh6tG1FrpUc9QKRXHCVrFEHSbZon17RZMyNzTTKC69or",
  "key25": "2tXz5cP4FJF4WvzVwwbSLYJkGB8zSiYVSySsC1Kb6zjDUcfgBSYB1s6dcHW2X6kGRRhjEpZLxhgUbvPJZ8mePDYE",
  "key26": "WdbCJZdaAX2aWHypihfaKUNKTki1QV79DAQtU62LepDvCwYPH1mj5qEppugkLJTDVBAt97jNtnRJnwYJbMCWjyq"
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

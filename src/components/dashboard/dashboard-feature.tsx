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
    "E8g8Pmsfoj4vHw58tT7hu1gQDN2DrAdFKVfENLumT7aJdL4hh6UwBn3DdcMxn4uMaGCkN71fJoAP1dvmwqRcAPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4vaZN7GjSjjYjxQg7yrMeKA7PGfDEYQMpks5yQs7yi19chCisVFmWQgq38BwR9n8iWjnDpcY2QfZrEonsbLsVt",
  "key1": "5dwg6x5TrpDZtUMufy8AE5RZcP2dJsVLoqQFGKAiXg6jK1Hzar5u4x5swkaSYQvgqWmZ4WFaGenRVbjRrhj3snTu",
  "key2": "3DHeCvhaDxsyBcYCEwErbwJTEarJ6mMonipGpfAWibz6qpjJ2nt4CcUrFeRriiNZ3UCAri4RNy9SJW4ZU55ZDZek",
  "key3": "2ifXh9QiTnR7MBsiJBaAeQZKijkTy3VD4gx5F9DK4KKwVFhCvsQ6BKFUcrj5WJPn7yyo4pWkhtrnXAaeHHGSpgak",
  "key4": "25FNoZqqGRU6B8AMd4LCvaaJp1XBqVRuV81FxFnTNms4KwV8Ah1RrT24ab7LT7QmiSRfGZtp4jJgeZgNHqVRbswz",
  "key5": "3rUMbnStHhy8uohx6QreYgsZGaf8PV52uCrydEwHV3GLJZUFrz1QWGRa7BdqsBBX86qvmJuZFPkdGAx4mFLynqV7",
  "key6": "qdTWQ5nWKkbt5a1DVP7Hwvm4JpSSdabVVspWV4KC5X6avJVpotW7U7Krarjs8RihpAendDAPUudSpELXjB3RtUp",
  "key7": "5n9vmidaeUJnhRU4mwxUuyQFXtKSNHJu4BeZSe3o7QDwfpn4wRVXydmb5mWFogcm2qkF8aSnDxhve99RLJjuCKdD",
  "key8": "24dHAZF5mNdhX64YKVwqn8zmyScLnHddLYNVzaG4DPpLGCYR4ecouWLYuzqXG1V8YMBuk7XVxtcfNdzv8otDdS3W",
  "key9": "CMS6tVyu7Jqp7urrpn2xotoAXzdwzawRTJeykpxL8tFpLAqzjk46XB6BqoV5JiozWrDK8TXUVDjjw8N7wuRF5Kg",
  "key10": "28totUoc2uHrK359gv63sKjP3NfVy2324R8mWBNRVNF1GHo1XtViKTZgFHuoz5q3TtasvZ12ZpcZYG6j6CZ2zBmf",
  "key11": "4q5yYSx5yNbsB4aB9MazMewCZNReEpDqGxHwDvk3wkX5bRXGTvnoyVom77AjFwAAszLwCCDGayRBHU9DjZPtid37",
  "key12": "oDLwX2pezS4x3fPDmFK5E2PLdoP3BubMK9FJS87nfpJaX65pw8uFqymyU1nNMwoqihEo1rYyhZCpoWcEqkhHo1E",
  "key13": "4kJvwhae2xyEFKwbg7DKHGFEsZKjwufKjiaeXe43SE7iaoY8dJqXR1tjwccuDZdLq4SK32WbE57eajtC4G3BuUgz",
  "key14": "FZDQGfMKj4M2Wubyu47wXeyDiv1XT6uVeN7iq8JXuKg94jDaCPN5ZRnrpjnhh2fcM9V1xoYNZ31JafugR8bsswD",
  "key15": "3Sn7tjS1h1Afaem3ESE17N1uKjb85bp2EMfe5eRjP713PDsjTmtVJBWjPvjuAwpnwmwqhiD4RTmEFmaJomjr4hXm",
  "key16": "5Gtf3w9TaJKnBMe5uAComxBgCnvR3dBKmR92yxQxtHaPUdcv667vw36U6LrKj8tgVCP4ms82cnappicfGncwBZFV",
  "key17": "jzAZCBBoCHqPCNeU626XgLFgcyUgLLaVATgbNGGP1ZLeihC28kBEZEbdWJpuU4pbx2jv7nV8tLWRmqTeLijFR3s",
  "key18": "4GTGaKzCDzg76neuRjSHiMFPBfyVqdhP58mF1siEBoovLcHt6jfgEQC6p9M748t9TVhE1T4QsRLafBubsQNm12mQ",
  "key19": "5D1k881kiHGE8bM94Fv7Gib2Kjp5um37gvvukbEZGLiyfEGnS4XuLZUm8t6R8xdsSDL6FUcgaEayVWdkrYT1Hp4C",
  "key20": "3G9q6KyvpGQ46KwkPx5gea4kjJiXDRwjDXPLCVi8YhFw5N9HBVw1nLhmPFT9TdKBJnsCkj58seoJi1iXpNjg9Sj6",
  "key21": "3FN2CoJ2JsYcTTSpHoEZbrHDDEUKK7XKTKnm8mRBWfHPdFgyLEPpiHoHczDJWqn2PJytASspXrCLSZagj5645Twq",
  "key22": "2UYiVL1SpZyzeLAyABFdSSMsbPgxgpJfgb9vUttr5k11kiqMTiW5cPETWwX9yier9HguH5K1tgnjpasgcAr1gLHw",
  "key23": "MwLSFa6aRUVvQLRwKhHpENwDd4eqFFo5dQid1x16tJGBY2a4hbU67wfC6oMXsA45VnH4yaiiSRoz9vLSkUz8k8x",
  "key24": "3VeEBV9WEsPdAnwxVM1U7G58WDHXD34dzbs3AN2cfGK9JBSUrw6r6FXLVwAGAP1MjvBZT37kQb8TRQe2ZcHbzkmf",
  "key25": "5zyME5Qm3bHhYA73pQcyQJPLLQNQfamKjnrVtDd8m5tV8Snwunq4psPDDrpeFy2wKTrR1ng71RcC6hSStpw7gHTQ",
  "key26": "4grvdy7HH5gi4vRpYyQFYwqjk15W9LWg4NRcnMdtQE7S3tVxFKDCRnLFjR1LSv6yNUcv4tMeDax1zQx2ADDpqVn7",
  "key27": "vPfug8xj3jZvzeJdp56ShiecAKX6ssd7Ac9TCvL3qCCAwuagysY6uGvUMeUdsb9RLKdMRrvN7ZTVdN65nmNCWXA",
  "key28": "3XL5f1zRdbStyi6C8sm9enBkGeN4nhUU4ZuyqJk748B4fKhE2NZa781Sc3MaYb2NCcvyPpMTcqrpyj674Wz3fmCJ",
  "key29": "3uNoWp3rPci3bVxeznXbjse4G9QkCmG8a9q2cF3Bro7UE3QqPduFDbUgtC26dt8pGP1ohtQx1nD4EHL6fi3ECNn9"
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

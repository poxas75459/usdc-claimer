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
    "5Q1KD5o8aFR6PANyAEkniqhjVLvBM46y4Nwgp4562Jn4wmHHvh2cEkynnoaVbmqdAWNDdksmRKwwiCyaZVwAYgLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSah4meh3WEoaPYCjzp5qYAPmLexGkCG2pWCzFEREN2XxXqkXK4R3nFKMiLwSX2qQoYSKR3sWj48PYSMEpERjb6",
  "key1": "eF33fNj73MzjZ38U7xazBbGsrPKJLSGsHKB8ys5peRpZimXbFvFdMe2S9siCfYjEmkBFp8PYe5RoUqPR9dnTDPF",
  "key2": "5kgSQVBvUve3zx7Dqn8CmBs1NaLZ91sJ56V9Dusy3Sr8h8USDns6aTpxNHmwJfY1RBvdsf5C3q33A6dR6zr7G55m",
  "key3": "3HajDhzbeBNicvSfY6eQL9JUrUahNQY2JH7ntMktDJmGB2vyFhe4nuxQQx1f8kaejDZpSDNskUgHoqTN1rkmEtvR",
  "key4": "3ciXNS7q3imq2hjCxeYeusAJwEuDAXis3URE3Tcku4mPUWVJt9MqNnJCnVd17UYs9HQK4ySFoJ8FWnhoDfytUG7F",
  "key5": "61uqDJsvM6dYhMmK6g7zkBJtTSZr8LuUZQmZrNtEuzShGyaVyStyaR5i9bqnx8BqkyvZWQksjboHmPiFSdHZiQef",
  "key6": "25ZLDexGPeZYWCdgM4gNafTyAUZQvd5i82YPz6W93WuZ3PYQsWWM9G11UpBM4FG3RgDYuuanMawgNBN9GVBxCgNH",
  "key7": "4hDFgvxhGoUHoe5Kd9sZmXtHBCzzvBX5JkLVjCpbmwgtNxByCd1GmS6um7Fho44e1cdHLdqvY2VMDS5E9ChtMzQf",
  "key8": "2M6NThZ5tkb2ovBgRFHETTbLtRZ1N5Gf5gXuaLDm8xJpHD6KAX9PeuSD1dF1AgwWxzbPPNuwFyzXqgQmDgAHQQtm",
  "key9": "3VwoZUPFFZpGGuPvVUL4YsqteLM8FJLUpbHKZ7cVcKmhnoqc6tyNefgzpWGZk88yheBGnYrVNcmLVeZcLKCo5BbJ",
  "key10": "2EeqG1iHWiXnRhTBp8JmhMhxpSvtJpoQdety2rXoKYAM8vzNLjUqaJpxPWhNAbRCT68tG2a1g3Kb6K1NCt6rpsFj",
  "key11": "A1gm68PZcJMAuG9DU3jPuouwCQWoM4P8shg79XauBx1tr73eHQjXGML9LoATX6XyY9UeTinPUxsqngntDVuo5Xq",
  "key12": "5zwmPZFvnESpruFymkvGSBu6opJwKrU9FtCxsvbwNyzpEnGzanPtGBmHDR1fDeJTaA2SdjDwGaSrbA5RigawHoGs",
  "key13": "cwvDmsfaPNtcMGkmdkzdGM3eaAxdy7YopSr2UU1PBKnb9c9UJkoZuSmv3MbdPonshe3AEYKt3XdMiwRWA1pWjWu",
  "key14": "3FHZME1xjhftyRHS1KuuYAjwLaczedWHiKrK1FP9jSjQGaTgzWLCApvSqHM48chhWH4w4fV4MneKY6gAhoz7t91G",
  "key15": "2PFANQF5tX6BrgN4LjeLUJXpeKiYo8XjuVtrZruT4PaHdKrLRszjStfC7iYfmDPvmbqV8XX7ToszSozjdrduiWQz",
  "key16": "3ydJ3Ag9DskaDhxCQbUdh38e5b1fofhRA8DjGgR1pfzQuJG6WpNBbkB63sjA7mKts64zfcSfak6HXpuJ78ZaH5QX",
  "key17": "5BSsPVJrFJKBrGZSngjxFN1NjvRhngiwTpep17ddMaA1Ej53AwNr3D9YGh8GXyVyn72bPvhNQesxaUgjknN5xd43",
  "key18": "5q4YydPpf5wFxeAUWS6WGXYHtcarjj2nNxzehCzHoxKDNzKTaygeGnaAef9jsCzF7syYjodF46Chvt1eKthi8Ymw",
  "key19": "5VdCfmc26aeHomuYZczVbzNKwZADKLNyeLi7xwv8UGGksGRzhBnfC7fPBbW8d4nKK1pqV6CFFsjQ6aJbv1gDgLVg",
  "key20": "3V8zxBxiiU6CxpFEzreemVvuqoYK6kexACFu6b8eE7NQqgzMTrYyHYTt9CS7cLgAzc4x481M1K98ZdVV6BZBVrf6",
  "key21": "4yTmfUSQupnkp99KLaJrKc1Sxo7isyGZi2TXK8vorSLPt4bQiuu83UQZFi8NY5EykeyzFNaKATkfj5Jw7tyVGFmf",
  "key22": "3zSYom3SKuQmioWV7m9cod91W5jgt2tkorkK4PvZgpCf83VC1RCPwKfA3vvU6eUZpXgy9iE66iDEY3B9WtxN58az",
  "key23": "4ZkicA7AibZtFcfKQUcsh3cMyo7B6UcRidY96Anyp9m2MPkHGjipA6Q2KExqTxXk97rUovSkFRQyrZREZ24DiLqg",
  "key24": "Uh6n3zhjkaDXrowoKcxFqb6uia2tLEN8diSNzWvSgLiiRhAswW2Hx6ZRomSu4CSZafNKqu1uGGqwjskVr5AmFdN",
  "key25": "3ATi4wDFJJUUfgHAzcYeqMQLM6zqmHEpdPG9T8sVjSq5hunTd4xF9H1AKxiyixsrmFyANytWH5rVLTot9XMXdd5Q",
  "key26": "4NaSwEob2AYDGQqUqSgXMoBMGZYtNCwEgfV7nv5GtxqdTKns9T53iDM88mgRk7r82kdZNGdvxZ4BawAk3XDLnUQY",
  "key27": "5tHtE16Ux5ctEbT34CgQhfKVK817STw21uN6mBFSZwtBsZXkxock1WrYSNdYPnHrziLEsmM19ueYJCaDVRz1Z7KX",
  "key28": "absca3v49edb27U6FWDcrGrpbZ8Cw2CHKHKf6eKkGHCyP6hFRoMKXN75bTMbWn71GpWBSqMKPfe8ZYj1bpttzQ8",
  "key29": "3fikkenbVLyCxuJdvQaKKyqGkGfDngVthTtJ8HYBdGjGJFy3B6a4CbWZ4sKamPoYGakwcffZ61f4ZTFKFhtAh3BP",
  "key30": "2uMZ28ekR3ZCoe96TvvEdVUmW4p96k3cY3rw6zCEkNuA6anZjTxSBRDTsAg3GYTBMhpetnfPk8MUU9GEXEBWwkvE"
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

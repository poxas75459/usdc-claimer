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
    "29dYTi72CNmigJUiU1o3e5ZhboQWmkizkpH2jDxATUKaX9kLxtgpYhqAXhnyPzBR7p5HAXXhLry392V4NMtqKWqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vGrY8tYZAgSc6DRZoBVdNtRggAG6PbDqEJZpKyqhk55HaLkHa4rcwyrpHUWqJL5SkuUBNeiM9Wp9EqCGj65Aqz",
  "key1": "3pPaVdvTVBy3zspKUnTkv3wdC5WsDMWaaUQJuyoNrZXywY9zoPdH6qukgUFNHaBqm4FTjYJinCwQQB9e8jQp7Ek9",
  "key2": "4ZUSj9vKWz5dKMGjfGR4Ttu1v4WVZrWuC7dGxTQdnB7WgjhRKopqCK4aQJMzHdj3zZLte2nUWewQUg1cSL5Ei1Go",
  "key3": "4swduoqe9xGxmDRAjc8DmN1cD4kYsJhJzbwiZnSCCzTVxSeLWjWV1G2kihgSJMp7K6RoqGrCyTxQPvqtjQKHDYvd",
  "key4": "5BK7pYHiBccsUoBTNUexoygaRzyq5uDZSNKHHbJtpcGiysJLy3ZBXFym6YArtMqNFtUmsWG155k8NUMgHhnuYdvP",
  "key5": "3CsZQgd3tZ2Pny8vEkfy77jc53Bkxe1PF8htNvJLkqNqMBLh4QdLAfYhCFFgFttVZfPhF38sGXzA8q8KzbaiG1P5",
  "key6": "4m3kiEHtcZHZJuthD4Cgk12E8yywtFGNowdmc9Zm8J9LJFiAfwJ8uWzQLnyqe2FQeiNq3mmoepxHPRGMYtD15Sxc",
  "key7": "5LdgYerf6ZNtWgpaUuxWgbjyfw3sCkXHDtiFN2sFH4DeDVXJEo7VrbWZm3vCrGceRSSAJ734XPJ9AogC9cPJAtFq",
  "key8": "6qzbn8mQH2wthDcyoLgPBgY1kQsw1QzhTYzxDSB5164SnJ55cHmi9WabZmSpUomcevYZ1apYSpceCh9ZbcUBM8s",
  "key9": "4raciTMpGznkAXJEUzQnKdJCdFvNvCpL2gUCu79JwYa5GV5EpBWBiogrt5SMYYE9xHtVTcNVt7oKkzkW4euLdRLF",
  "key10": "3Nqz6RWjqjLgxbRwMpzyys7W42sRuTAS5pfaJqTejMSPfMPF542oJjpXP44zBPV5sj2hqEe7pPtCyb7Aegt7ttKX",
  "key11": "4Zh6epSRnzrrySWSRGZG2mj2kmJkZEenqRXvmYCER36f6NA1GDZZq4mYX2frv8UowPQNsQ39rF9LA1nmzesPQHYF",
  "key12": "416fx56qNR8UGNGUPsupXxcfHFwS8otmWxcLjNHrAktYVNJCozM7sMZWMMpesoCffktGYUY2nMwBGXVFodYa3tGr",
  "key13": "2cWuZsc2HwzhK8fEDA2Z96rBKH2osiSjLQXzMNF5YRA81dnYDu8V8L9czmzqHtw3XP8VSH9TyyGFXKyNgv1ULMM7",
  "key14": "hSj2ukcA2VjRiHVfaNy3LygkB8Bavo15yTycK76LbbrGz245v2czjfzFaHRqheERtzphERzVXUC8wgMY4aFequY",
  "key15": "BoetJaNftg7jQfX4WYrqz94edZrimVCQU9M3JgMaerVmXwoZMnCeVbQwZb3W7R8hBGm7PYhY6D34EnbKwr4otnY",
  "key16": "38tQNTVy6s7j7CLBBbbgqWxUkukrqRMJWwTWSejZj2ZTEmeq2cRUbYDyqaN57DWmtoiJoHpUcVrWsmGfbRHaQTPs",
  "key17": "5oy7uQH7zwqikXjhNLTJvNPLqwAxdD6CfU62RZPXtZRqVbo2HMaBWX4orH3VRUNMsfvw7Ms2Ap1bFgHZmkN4CA8p",
  "key18": "5CoqmP8EfynzF15V9rRQ9VhGKpq4m2h4uykZfHco4bXNXciNgJY294RgkchUMNKWNZeNcLhXADvhKETMknNGyvtu",
  "key19": "65oRfNeRuWHgDHePqzzxhtVnBXqeBHUg2QYZe1ysa2yeQjLiCfprep4aVuceEDV438qfDuwRJCfKRG3mNXmxMeSW",
  "key20": "5JmSz69fg7VRA5yAd71hD2VpAKEGnBzAXY8nyscXNvGGM1rzjjkqgRUMRHD4PY2twNL53inKUHcV9nqzmX4MZNnz",
  "key21": "4WghGZPNfHeDtGry9bTad1pB1pfhd1mLUjs3ehUacy8SPaJTVEXj9rgRSN5WpP5yhd9tiy5o9KgbRXgWvkVwYLH9",
  "key22": "5W7udy3XcM7R4iax4vZuMYYV3JcnHtVVrK4GwFnbB4iLmTpn7QXzZWtDJkRJyTjxuEPLhw1deaee5qW22o53w24Y",
  "key23": "2o5xTQPj29MQRYaSfvCTrsyAhiXvMngJtUrCENWMbjdt4T9EHdvD8sLWuTJDNdc3HuLt1u6zrGkmFLhCYqivVYei",
  "key24": "3doAm6vwBhH1p97uDXoRyvnnqJBKQNsu9M8uYHW91CTj2tix5Wnu7yRxfBeuZ87wdR27XbG6SjF13TnoEkqEQpie",
  "key25": "Sbof38d3t1t7tWzjtNsuxR9YK5TJ8AwLPEk1U21gEBkjqPhEvEP63CaB5QpCUqiGJS1ts43XTnmLPzTPaKT8T9f",
  "key26": "3WLwtgTSLUH2f46p2T5pb2QUh9fBVPSTosk1NTyi6hbLFeA8svfoSv8FEUnE9fS8L5B7MvihBU6ejAMLZqbdHNyC",
  "key27": "3fnR4qa1TLditHcEBbj5m6xBBEV5rMCJi8LLgSfW6jqG7ZKa5ZMHbPQhP3Np4aYwQSmRghQfSNNpBSKUcj7tzAwv",
  "key28": "2rLC9qz2oBHnt2cF7zMP1ed3ZuEs24zDjxwg6Ket4A9MZJLGdnBP1Y87wrkYhZ2sS86y8m1zo3TgFQiqgKXMziKj",
  "key29": "2XAitYpdsUNfSkZx8m9chMBHrv7GPc9VpzuEjC2XDMu6c7XxsPp9vjahnsumrMceLrzFZsXqL1CditVMSPAiepdn",
  "key30": "2MMpRpxC91qQ2945GnBkzp7YgLK7C2qWNKnkmjB9HNmV5LchaVa8v9gjkaCT9pVKy5j3Kfp4xvuQvp6BmY7JMy5c"
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

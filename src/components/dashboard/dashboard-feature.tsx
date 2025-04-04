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
    "2avjzKtJ4gn9xjiEnC4A7Yyd15gFTcXpmEsyXNHPSNh1SX2raLzGVQkrTRjMif1UR6arazMgX33ogwJvCsGXuZ5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTqkU9jVLYjWwFfZJEqszpATC6uUxUjfa35A4VeKWt1htKcuHKEGiw4WPPHfPtVAu6w32KWCrGDVac4WqFUTFTz",
  "key1": "5BUtVqByC6uRdjUpHrRQE6zXyY36PxzpwuzyV64365dVVyGEFy8eMdKp4382TVJNLTnwT7wWrBqE5wxbyoUYiAyZ",
  "key2": "3hmDs5qNAekGppMdTZwqqsXDFDkwf1ko8GjwxvEpqcAMrAiCvo589KskRFKB9rsadnd1pvEJRee7tUYQLavGDSPR",
  "key3": "5V6bxXDusPPyt2qcxTVjn8QSKdMWGfgtRA3PzHeLU8vr8aB7U6GjRCsb2nC8xwz7PwzRWPC8t2f32FZdqgC3AVk",
  "key4": "2tMFCkJwMGjSnJiqZGX9u9DQasEhhyC3GoVg7MHzmmK7Hg9cWVjZbup1nVhqY98bQpARcgpEafmzmm6nxxuL8bDK",
  "key5": "2fAPVUKUN7idVNuFwSS5t1Q1Pb1j9tKmJikoK3AKHwzRUMsvXu9HXAJkGncNDvnPhpfsxhXM8noteDFejsdgR7ET",
  "key6": "5dc3UBngYRwAFtLvvk8sfDP1sbe3UtL3Zn3v9A4XgBej1oE4DZebi5UqxV5DnTycxBnRQm72hDHfvaWKNJrt4Bgi",
  "key7": "2tmnKKzrndRg66ZRdxsJd6WBSgWjdPjVmYv998TDZjWLVZMQbE6LNujT1XTf6WfD3iivxDkvWe5kQoY7vX9jG3Mh",
  "key8": "3LxPuteqwvUiqhjrpDv22MoTL88i2rKXRsHodYzSyfuyXxxU4LWWEbdg4mhiLmUxg8uhak6d7dcjyxXook2GJ4LB",
  "key9": "3AsP5H3kW8Qz9vtBD3GJMgRg8HGnn7MjJeqqNwJfEzPfMESeMQAEdbcvywqFrgT9U7TibZJBLRrtWDozvCDfjPxZ",
  "key10": "2i77rnvt3jqF9GKQWtrqjUJ6nx5HM7U2KrwmkA56hE6bNSgBSAzi6yTHY6wzAFwp4eQtWs9KNgnTfbbMnPMtMCWk",
  "key11": "haLV9M3iKb5jJK1u5nvc6yueJNYc2z1LeUw5m4EsVbrJ2QGKYH4fEX5GbWYLpaUhufLuWZrsyGuAy88DA58jw6g",
  "key12": "1t2qgiCD2JH4kj7ZTNzPg5hY7QWdACU4EXHKTZ775SDt7KxUvxk7rB3Gn8fLYfPDEekQxv3HaU9fxwFgaAeSugR",
  "key13": "28dosgStUhwGKKvvBhBdNfkCAMDPyUpH7cU1yctiH4EfxdqZsHswXdAj4U2VxxSjPABDiduqmi95SFA1fYtfrsaT",
  "key14": "5dRqJXeRFLZju3wcyHQduJNhvce4KJPpG5yEgHXnM3netYMUuvFpSKfeeaUM4S2VqoUWZWZhseUcJxwQ1i7qso8S",
  "key15": "3rm4AcmC68cWQuP34JnL3GvBGqYMNgqVCBUMPUtLSHC6bFVQHSzazKKK7iEEgCGcH6qr9EAmJ5uBReS9qi5GKfqH",
  "key16": "551nNkxvsvAdR7izoKSZuf2mqfWD6WW9DLadBv9BCDro1Akmpt7ArBHapweNXAMnR6qaN8jhdpcr5WVM5D4fm7Na",
  "key17": "t8NNkVtj83Qc74vSqztMyFyxvQaRY5kXPv9k64UHDrxtUW9KJ6trZSyeppA3YRkihsPx7uGsBhBfCtj2Po3xvzr",
  "key18": "4awyVtLmS6oWhm7VFQpVTWh1RLpptyqypjvNKKuycmfKqy69XJ7aq2QrzXbZWPKDeVsmKCuiykV9KbQ66XtTsPtm",
  "key19": "7dqMBy55JuErQMA7Cdi2cVkSFXpzPAdPqH8DxFbwag2oWe7bPsy7tmZ6nbSkS3EdKH8kvc2dqoPbSDfx4EyWj4K",
  "key20": "uQi71EpG8ASvCmkH31y7VffEFHsaFs1mXdm9YBtUbGcuWE3dfCmix61LQ88r5rkAaMjmeke9tWTFNr543yqENNW",
  "key21": "4GWuMAhfHrwxrUQjzUANWjU4vtwoS7d1NfzxBN36jMH94DjeFbvoUfC7MkMDvxNpwnMRUyqYk48evRyGAgMZadHY",
  "key22": "GpGEcRYuktqPVru5KMQrazkRebZtxs8CVErXuM5kRf8US9dUfQd6xcws3rioWQa7EHcyzX35jNgoguJS7AUoNKx",
  "key23": "2AHuzUAZRYUVpNet4jU2HFFuiTa94Ng75D2PVwKNBXDwaYyCdfUFKCRrgkX2vfwdRf1735P2GSXyGBxHirZRGTx8",
  "key24": "57VjyYbNtNVj1GJ6GetPQnuspNYb9UkwkQ926g7pAfHFXcXRTqdz2tGwJJwdqwCcMEibMrKYaGAtT56LyrhEy3VG",
  "key25": "3WjNrCUNrzhk2RoXSkkWdUqRpEf1EWVCjH57EBoJL9e2fkr23WsJEsEdxgucjxEmciWDrsrnat579ZjXh6eNKApe",
  "key26": "2JqUPEWz31AZf2CseoDuTB6cfpXXaqUCFVRrtS9dDUV3yK8PcxqTc86c4Lkis2JiBDsRKE5nnFsmWJ7tuJhWa7xC",
  "key27": "bK2vpxzFUrSTxmfa1BRBYHjU1ZjQ9htY7GvxBUw9Tdxpg5KyHtYhCfTPXuDTvAp9Qwb2u1kaefne3r3TdiixzXN",
  "key28": "49h5RKr9KfStz5oq3M1HrSr1t83XfbiNhqCQPT1G7YeadErke79rQWmyHxsy3YZEqZMfAXDMvyiY5gJuQomjHmpW",
  "key29": "48kuk4mc66dmgC4Ju8JVjSaYSGJFtb3QcLboUfBfATPQNhBynsFoyfA9nCA8pNG9oiEqHLD8ZZ5koiM8het4p3F5"
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

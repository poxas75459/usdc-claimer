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
    "TUtVcjyU3Vd87nTC8mVrQ5dBLWBBKVo1MaEcsapVQ9uv9T1YEr7z7vSYT4qvmdWTPNdcc6xCNkd4PWggHAfbD9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hF7k9rDjXWwGbsgd7c3MEKnXkNsR8fCVYHbNuKcHcR7M9RsnWoCGF918a6Kxq4es8hXeE42vssG7vDxUP3Hio42",
  "key1": "3wfTEotkUG1BUMt1n79CFk87S5RndFWe1Ea4YjmEDfXpSNYZbrhZ5DjPZKWh7b2LYHY4HHrH3a5mmiv2Vi9h5hUA",
  "key2": "57etLpTrxssxKZWmwX5HTSuDwFbqWBwnnAtZMhckhvvz6rCQ7fZi6bsCsan5xLXiTAV67ZizKHVrVLiJcebXSiCL",
  "key3": "3WyorgPjYQqCHxMHozALNyQgoP2p2vxh2kffPQArqqGE5kSCrAjraJoyhXay8wYZGDwwdqhyEU3ULxqYhw6f1CQf",
  "key4": "2ggikBp3kfp6svM7n7HBCZaN7pM1FZquvkBjULSHLz8feSzJk7dAWhRE28WtKF9aB6AwBKyCT3QpVT2c5pNaGGzZ",
  "key5": "3HWWe8eYoBrb7pHSzXTyjMaMbyBt84NTzSMjtwAsbuaSGpxAis5EgdjdSegbVAt6NMvhbpj5XAoxgYKcmNsarJwh",
  "key6": "2kTKUdiSfiBWifXZqymvfN5ocHdBJUoyTZV73jBac4YgMe4kTaGMSdexWy8MX7VCoCT2REyscpjkz3hBDWHQQNLG",
  "key7": "5mwgps1HT5hW9mrfdu1VpaJVL41J2ERiCRGit5rDFQhewhgYHKfY2wiHRz4SeLcaxfbgeSqZQVvjvQW8yLherNW",
  "key8": "5tntRQpiZBtd2HGUbX35tZKiZsFartV5gHUPcJkojkzpQv3nhnAMVaZ6aZtCSpG2Ytu86qw98Speuj3rnsrWHhER",
  "key9": "3qKZSFKuCSYY2Yb8UETBuanZJXuWgDHKMVekjPbbFYiEWfrSASmMiTsK9kEEcPxB8biwjE27NiXQgxMoqS1ecaJP",
  "key10": "4GXtjPHMTbWv42gzqCBsAZgg9V6oS3bAGAh9DVnmZ8ATndYxazqfDjNmbAJUdgeXCU5xfVo9uFJV8XDZk7eEY9D2",
  "key11": "4p4bTp9iaRRZeZZqD3xHkdwzxqH5nm7UeEAUFCjubVjGSjaMMmNMyvEUCRxcctED5oe5FtDUNEgK7MTdRzv1MaHx",
  "key12": "3Tn6QZS9ayTTeNtawatEMy2NXT6ZJe7Lxnvs3fydqWGyHpqWUhqdKkh5Sp9mcghMoRvP34vCBuSxC7rqHLCTndu5",
  "key13": "63ZAmWY76ceMPfVPmBsxe4mjCSKNKVAUB6Vvw21Epu8bFb1WR85bPodbHLmYLHSbAKPoM8bCLQqcxD5wshMGKfBQ",
  "key14": "2WScGiNnU2rzTuGzZwUrzdSq7B3keT9NYKY6G21Hc3DUDWXfnVfcQ1RjZnPBKFvT5tV7DrDeqJEg1nhA6ToRtZZj",
  "key15": "5pgzw8aVU6p11Wjd9Kphw25tVoYPPWqAU98Vucx4PMVhKe1FvEb7V4DWYmV9Bu6JyPGAJxdoZuBFYz7vhDDEyAiC",
  "key16": "2hAaZa3u7hR3FMC8JnNrvgySTLxyDo81ZAg4sfjwsTJP3RV5PvsYubPfEczxLYSaib6AAspVXKNpZB2Vrn9Zo6iB",
  "key17": "2Sg1yCKnpt3GDNKWj5HB1mPSjuEtt7VYCmd2rASutkcUUbyGp6EQKFJ9HTnyP6G76CVXWjdKFAC8aD2hDHgqzcuf",
  "key18": "2vK7J9iKXLTGxD3KvWKAF2VYX1vPPuN3uDJCnzBTM234qkXth91WMQaUm9suUjq8d7dncKCCUH8rEuf1rk3cdr1j",
  "key19": "2DAwMa1jJFENgYfipZK2Ubt2jNUeyTRXQHyFftc84VroaHsUBMBLpi4eGqLvGB1p5DQC74GT4HuhBai4uEiVWW4x",
  "key20": "6euKr7Ks6XEWJNBvFNaNkA7W7mmRnFzRiB96ENq2ms6AJQbYEkrxYwbHhWM8pevHkbsTTNMwD6ufRvitJAzqC7G",
  "key21": "5EFNBh3tSggnetbQtd3bRTSi52QvSwJwTWqmyXohyAm2VrdE6S9YUQc3RpqMRzm7jEeK64Tw5xxUqphCW4u3bRyy",
  "key22": "dkpVWWm5kzS5mwXLjtZYzkMu4H66kbPxZ3SuGTSE4Y3LauzjvFUkJuTeyHwg9SStnmkhJYqaggGd1qQ8AqkMXqL",
  "key23": "2RiuMX1APWQoxiUjcGcGGsMKgAJLrRJvrxWm8iNYtg6ERZeFyLDZYVhoNeMbDTCLVTRBWbVU2QqMBnrL4rgEKgcW",
  "key24": "51fdJt5tf2jos6iZYiyainXHnW25qunHibZXUKK6TeSxYEdfpFvY1FZUPZuhcGqD9kQQS3TEwaBRNsHZcX4hidLE",
  "key25": "64RkScx7uf58KunJRJHnTweziJSjnaStvNTXK2qAnaAkciRipaiGrMHgRg4oUmGEdDgLosT1s2WAqrNy9ujGU6E7",
  "key26": "43TKu6Nk9M5xmVXHMk3kLCWbkFJXAy8ERCL3vRzk7UHom754PCUxvybY5ShFCE3bthfjKatH2ZoZkCRK99R2JJjF"
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

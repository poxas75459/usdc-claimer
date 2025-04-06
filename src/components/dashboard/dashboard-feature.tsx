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
    "4x7jbENeHiohc1HhAawHMfe5FMKcgmmerr4QvNqNou4y77nMYFxBFZUZtXVBkAnG2HURN2e83MLoKPWAZapZwB27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjCU4iNm4PyCzzRxXmkgP2pZATeh4scmkd6dVdLaJeXUZBMcuVGNsJs2UMw6ZbNKmv1KjazJGUZ11mS17VkVc21",
  "key1": "4Bh4mSDitaibCyPpBM2HahEM5fBYr12mbSvH9gV8es5xGZzXAvEWDoSDQVGEegNc5K4Ea6YAyJsgdv8HXvbLN1Mq",
  "key2": "52bCa4UdSvLSkxGmycbURDuaR4QCo2Jh36LscUMsGa1zDLkjUKMJVwp975DuX2ALXDmah3zRDsSkkgovgjCD19ai",
  "key3": "4J3Md47qbkpwHEW4qTphF5zeCPeC9TLLibo1EPyieebuKd4LcTyqm6qdhGLaUeV66g9opYWADNM85YbdTHQS3DKw",
  "key4": "5yCFUbmdf6p9PuiEtK7s6Bu6Uwq7M2u87W5Fe43cambC8Y7xXgWEDUGKiVdhbL8jUvTZjh6jGia1PLnQo8aF4Two",
  "key5": "5NtviXxy7fnFS2SsHDdTWnVGSFrERAimtQqy4kPEfTT81DCo6kJV6ESLXBTtLEv5aY1cAeL2A1VH6bRS2yQZE9xt",
  "key6": "Gnqv4BxuS4j4dECMHJPVeKWwwdbf1aYpeSiFJYhMn24bTeRLNmJhG2jJYPNjh4AYttmF1oB7TQRfEzCAo7wpESX",
  "key7": "5NcdGLjb28g2WS53YYxc6VY3zuZN4qcSLMtWU8uaWqS6KvRVD7d22FTHLvuRQGC5sSBTnFtuQCTSfAnEwbk8JkLX",
  "key8": "4jRiEzc1mBR1wvwYswbdrxVFMNJ7TxNwhm8qqzJrvcd3fzmYVjE3tBJfwqHZFeZEJp3iQfEhdJAwNHSyDJUG6BF6",
  "key9": "2a3wGv5gZi2ksKRV3s29nvRBULQSv8G4LMnPx2PhgmV92jnH9esNr8yYMKxXGMJpCWvPHCkYabYt5LKzGuSE5s2d",
  "key10": "Ryasgqg92rt7FTcFXnpsjCqdMw5z74JgHFcYMuBBnHJCTAxKviMXqveqreD2WkVZG7jjYDLeaEV9dMbhtSopyNx",
  "key11": "5YMQN1TobzhUXN9U5M5vCZKY6DnpbrvMHdgfTyk7VjCCLyXhLx3KmVx8x4ndBvVN2mgo82EuqcwTGNnshXVYNrXL",
  "key12": "5zGnqPYxNMdLbsexMWnpbiPBhtNstfsnsorEgtpccKb16r2qeKYNGGV5kjFcqLs4H3FtXchzMKEJVWPK4uQZucbM",
  "key13": "3v2d7MLodqLQX5Ecv3TBnMgFTZUFneLwogSeeJPbcWEovMFszyGxDtTbvWof581dg4j5CEEUuezHhRpqGz2cNED",
  "key14": "4wwZ8CtwpFGwfxkDRVwHqUipyQUmQ5PA3W68SAsBpw1cKTw3h9qgCd4os6No9FfRpwcukinKYAwmUj67FvMk9QF7",
  "key15": "2XXn2VDVpY3dRYLcp9PBqquMh36uEWGMUZ67K4abMwqhtaxauf9DjCZoyT6u8zCvutMx44mPUMz5agbSdGcJQbwM",
  "key16": "3CEAuZ6KkFDhGsGvGFqZjspbRHFCyzNuwGnq8e4dqRp4x231vywY75gkR48mXWz6htXm6XY625RVxjEY6YdHj3YU",
  "key17": "4iQVA6tHhJgdubCMiUjJf3MoSFkmQfzFnnB7mhLaxgQhWET28qkEx6EAqXgFTjnkBPDeAiSzNeXWv3RYYCdMJbjM",
  "key18": "22g8nvA5GAyrgrGWmaTdFARXbCCQRWiECfVvvMbTGKMEgh7fVqyoTRgNxeyHAxBthp6YzYrxgi1Hzd9veyVVa21u",
  "key19": "5CqTA8Rtm7zeZbWZwXHcWZZwpDjqMScdG18H7FCNKpjFKJYGmi7JwsBeU9UhDfonQvm8n6JzhkfafFPAd6RS5BVz",
  "key20": "aQ4K8hHzYkucsPPtFEinF6TWs3dieyRkTsea4zAzYCoVzEFJKDrxqFXUCcez15YLee2EdUs5Kjz8MyDukWqHHFS",
  "key21": "2FwkAUu4WtoNM3SJ7KbCtAM4J5Tor7eP42MVfJmjvjmG8DooGqdQH3TijqNTfHW53TQ92uF6n1gZFd14pfmBbBQJ",
  "key22": "4DN6aCH7gpNduueURPLHCEw49LETam3bau63d9naKTV6k8TuBVbz2rZSJ8nzNuKA6cYAGJ5w6pWN3FHijPzTfkqD",
  "key23": "2RaqUjq5pomi7MsUuGMucavn9Usm6x4BQpotK6ha35ZX6TYKs5o87yGzXFkDuVXFmhQqtvJNHRiKNM9YKZW57gGS",
  "key24": "4bwQbpkZTcY4kFkN9zsRY6M6Lf24eb7MUBj1c3SuUMmtRwauU2AYkyGSgsqbzLuVcKdFks1Mfb7eR3xjLzq6sXvA",
  "key25": "oiHm936HqXWYHsRtdJL9sfWcWrYgTo9kE1kENWH2SGdeoiWNaZ6c19xtGkZwAiNgqd8Hjdw1FQy1BNHHRajYiGV",
  "key26": "5czs6zFuUsdFzKJW1LKQCWE8rjn4RCP9i2e674J8kXpUpDsrtAZkQg8K7mk2LquD5mzJ1ej4qYkRiBr6rvebntY5",
  "key27": "4McZNhknbnEGh2RGpgXFuwW9EZYGV4E8ngPjNFs6XWBjVXi7tLppjXhDNjGZRBNpi7eNnPYiqtGYiMx4DNaAjPK5",
  "key28": "38hnepkTcBaPfypo4g55RUZgnPViJYfUd3MWY5K7JZwsMTwQ67EL526BE9KK9G12yPgDiMdMxfP6tbBzpMSDaCpr",
  "key29": "4pmwX5zNCyzKxjadXFJJ7gNJDPeWNWhLoew8HddWBx84PJrGKUVkdAyydMghx25s4x8MPAxPq4dkG48dNbCc7hx8",
  "key30": "2cnnJvRYg4j7Dxo9EGX5XWpxyowKLXat6M8QmsgUBXK1knNytj8vDSwxivZEAE7kfUQGwmvviBSnA45CVp72hmbL",
  "key31": "4EkthtY8FR2U4SwQ9J1gmrSrpuEBKFjV1Qr9sasC8jVvSHht3qCWns96kHpRqhZQBcPrf5naQWmrhQh9gXeZfcnp",
  "key32": "4SLLuj3GfB9wG7MNpMm6N43iHQxjTTUnYiNtGCgT1hWf25ZfGdurqwNt5yVfP5xtVgTmts57J5tDjoCzEjX4vpRv",
  "key33": "2MFthJNaux95RZacukKR3dsmJ8bYgDDnbeQaDr3vcq4Y4cCwAbQQXwirq5md2H7bWZN967rZofwMgarj2coFn15K",
  "key34": "3XJvJwLhWGAKzxLHA8pDBjH3LBRg73hDmqicgMYFErHz56mkfd7TGuN2n4e2pbXP5GqjgxUWUp1MZcnEUVoX1MB8",
  "key35": "UEUtDSFsUQ9WBtG1GZFuPe7SniGP3v9CwS8VjibqyuW7cTRn5UgeAxJJ2wYdBSt4ZLJUdwQK7e256LYqLv9zgkb",
  "key36": "DG5XcVPJnpewAZStePFKGKerHLiLqoGKB9Wn1EANSnAp6jQUPCEYVz2e1Cab5bTTZeAyCG9fAVizQobifKSfzUU",
  "key37": "5Uxwc613jXnBr7LqeaJjs4fkMNXEbtjyGsRi1xov3VLJvrSrNPF7RQLCWdKRHFbmToR8L35f2sF4qzXinAhjAcQk",
  "key38": "1eu8mQ1PE9h7tcsnizzipikueBYftXgZRLJy5butuWTQmi6QV1UvEKc7AF1WTFRMCKGVpZz6ARkLKN1eE8222ur",
  "key39": "5imXgZaf3Eu29KmZWYXGEqUSeReDp2WU83cYSxu9K8Lphuf8xwKoFa7hzkKhd6PigZchQL1FkJDKrujgm3xvETwk",
  "key40": "4FQsuDmFHTYzgdAskSt5bM6QF49DxQC84e8gx1ms6c59QvPVVpd6hmh1tNFoRHPz979aGxyANPgXLrjCnNWzxf2L",
  "key41": "3xxBsnYxN5TFQ748DN8UayxAf7g78Z6Fq7eytfH1uBCbRoGXmydqs7uG9t4mbzx5tD1ZMCb8L6GHw8Cab8xgLPZe",
  "key42": "3RwB9372kinfew4xg34WudBteR1HaNLfXcMzKk64DauMxXC1aTN9QaDvqYC2RVdgcD95yx224xvmebhuRkUyeiTE"
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

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
    "5Vxo5BkQrTZFJSHUGu6ceqtUnWQQ9K4GzM73hqqc6F8iRq45Wv8ByfEdE2WLLax8p7hSgfzaFhbguLHQ5ERXFRoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dj2Sbr2rUfbEZd5Na4Q5nGAJXSHo8UWrmsB4naxEWxHEETxWEdgrmj9R6zwBR6BUbLptwZQtHahv1GshYoMk8pM",
  "key1": "gmNYjFvhXAmbVnNjGt9tQFXuaoFJwedrGdiuDTs9SXM1wr61wSP9qqgLFcthKrx37cEzMNtFDmnSNKqPvkRqY1G",
  "key2": "5XXWpqLYKN6R2p7Q7HmvUJ8Z88GPWd7DBVZnjhw3bphkGb6ZxHr8cBj6JFSBdWi2KZr79kRGjYSp9ZDUUmb1n68y",
  "key3": "Wn7nsXdBkVA9pJM1J43825q9ie79tNmykjcstHezwvA7xFcrAq5q2r7HYkf9rKo4LmhpAhqNv7913aCCHP9htqm",
  "key4": "2nSBok9NG3Pi41CWTpHsSGGw3NtpGZ94QLLchbHv8SerM5eFBbSpMnDXpyX5hD1U8ipCf3zYYNbH9KRfaKeRbTYM",
  "key5": "GqVpXg5z4jakQaHwzaiFQ4i9wNf9EZ3dPnj6zAPXgk3DCj3wuD8QyYZrpUNvMF6zjZ9SVenjKB9iw5aBfhZmLUq",
  "key6": "3ATos5mhbU2SpKCJNTgjqfT5E9H26BjZeZaiCTNJ917d2S9t7rFXjUJ762BJwQ2c82Zu74w2FmcaW79YesW1Kwc3",
  "key7": "4qd2Fjmnw3VizHABaadkwgyiGQY6w2MiN2LTGgf2Ez451T8wScpHmrMzxyn5Z976eadtwnWGKmUvm35MbN871TE2",
  "key8": "dHijigBFD7Ri6QZqV6rjfisjyBb6aXJ3zstkco4t5Z4VhPGRdsiixy9BKnogZ4G4EzQYVMYWQ3YZNcUsr9VMVyQ",
  "key9": "5r57q6tSjeSQC2DLXgEiVZNrcC1ShmJjayTjKN73vwQykuz4ZtPiAvQgYi6TxJCujSytYLCG7U8tpEVPtK8faR36",
  "key10": "37TWkqLko1dTWf7ryEzG8hEhuSpR9b9bDQ7LRUDC4viCxiqMFMp9NfbbCC5QK2HCL1X9dtmbaAMCXxQEWWP3fYuU",
  "key11": "3aTkqJzXZWVMBiCAcW7hk5KrYBWdUQjHKKzKzry4NVk8L5DDtuyckZknHHrzp1LuH62zCj2XKJhgDdARhKSDEsht",
  "key12": "5Zh3Q1vowfYoZmeUCyXdceErd36hiQMHNSZ5dRqCkDjL4J5PQ7xAYdopFiMFdCWHM2fm8zsDxLw2KQdhFg7a6SKG",
  "key13": "4VjeftZMzCVnVuGQACgCQv4ohdLZYzhUXBsN2WhdjYCt7MD1gaMhHxx6M9dnoGUMxe4ADU1mJr9K4pthvZDNmMZ7",
  "key14": "5USwCRoVJpbfuZCs3Tq7Qvw46PEa28f81QJgoydDF433mL6gkKemVgbD2er1NgU2EJUqcHV1CCz4K7yRhcmXbQBr",
  "key15": "5Jt3nBg2FTLYKsErpX9AXCcqZ51hc5eJTZoCnQx6xa9wHs6Q9uzMsdWjbtSgDG5fsMECPKcyNr6ayCqGhzCVgVTN",
  "key16": "3xF7wyJtgKhbkETGzruNDw7mEQM5864nuR67phPdEt4dLyzPDDSWZJPv7cMHoQMRApSHNa5f2YytxU4czqG6jq4",
  "key17": "4GghHqwUd9V93DFogCmC4d3wxPFXYu33qY89VvsS9AD5ZLCKNcXvGFCiJzSVAvXhsVLchSxXL363eu3NJaZkaW9X",
  "key18": "2uDGAfPu1Hb5QWGxHYqQMwXKiXuDY578XfcXEPRQYwcUGjkGcNhwurJ6EUntJ4GfXyBJBc3uVDCi1dVUQyEXxsVT",
  "key19": "pkR3NrbfgkRGhuc6tV6M32b97yD3uqJtvhyFT66P6sg5YsqmT5uhs3j7aFLQhYnjcQiYh1o4Fs4QKT7id8uXjn8",
  "key20": "4YLgcnHDmHD7Ppsuo6nNDUjDmnQP8yESZ2phu6pHVXovAbQFiDjpF3iXvYWaw2FL9tTfMZwVYC3UVV3JwE9kHji2",
  "key21": "2HYsRMQwSwMHSE3ToEAgbPBS7HQwQisftv9Z455joG2SFXsz9and8ViEVvyeSXjXZKgd5fowH94xYNH5FPyJ9fTx",
  "key22": "2dpoGL6wZkkEN3Yi7WH4VoWPMeLFbq1QwMxjPZgDJ3ctHTfnXcMGyRPFeeYBZYhBegEFqvc6x8E1v5UZktr52RY3",
  "key23": "5tAhsQassquFkyytJ367Cjhi5wzv1nCZyRn4Emq1cb6w1Govkvwzium47xRbsJG7nFPZNffgbmJfCKNuUzMxRBFP",
  "key24": "4Pqffm9P8gY2ixcR9zv8EUyYoy5vYdTSGKyQVPazWyPF6LP7bzEYdDTAcUxa7hBK2g4zGokSZJ5d7Zy82oQjvf2q",
  "key25": "3qo6mgtx1ZrdmHwNTCPDY4FuxshHp8rcFKgtmVNRU76Hk76cqE1fSst6qtUVtbiaZgbJzuVwh3UDMJH9G6EUB9s4",
  "key26": "Hsn2wrBYW5hQ4BNJWaV8jWjouxRbgeTvt9Fq8K8j2ktBPxFuPjRBM8ALzrvLfBCaWD3XzEXA4hvHwAA6ueCNJhz",
  "key27": "5SM9jkahYmUug8NU7qiD1LtDPxzHUGGxXgi6jgNwbQjsTvw3EXb3tWMymqJNzxwcyfxrYDWf6VAeqvrqixc1HopB",
  "key28": "eyBvsUTtaDvuo1ZjSbaLtC9uriTZDYbhnDnApecfGBSs33LKfQnBcb8xQU9ik6Q29oaaChBebLK1Y2p3j6yYZpT",
  "key29": "3RMP17XxrxfCjdtmc7ZKGACyhUPorVAcGGehVXmWZrsr6bbxSXJ7kyykmsvrZLQtH1u6cgd2dfR49vxaE1525jQC",
  "key30": "2bgnY3rvqXf2vxAf52DBGYESvRCZByuaqFTZN872kSM9zAocfmtT56RTj7tPo2gopPSb851736JChhHpAwjVc238",
  "key31": "5DbzrJGGyYsq9rDNoeZ8DzRzzJM3dj2FESEvxT95QgP2tW3nM3iauyUghwyWqbkNxHQbo2g1Nh3XQ6pm8zBBKLFf",
  "key32": "3CpW7serrq62y2jibzLM5ZQoyEqBDznA3m2NFiDdW1uQcd3eLL64Gk54Cas772evyGuvgxoAmtw9qfNHQq48JTdY",
  "key33": "5J2xosTd96AyVp4ctMwUB1B5BKZqM3xxSi3XwJVRdppetP8jpPhnFKsAxsghySQ2t1xfodp3YEmzuAnt9tFFxiCy",
  "key34": "TdzFRmAmMpdGGcwUcauiVhK3h9G297TKxvTdw4F9vxha4GJr6ftic7eXZybGYR1DxaJDGVQVqnTkH1iqzxkUZBN",
  "key35": "2XhPb9mJJgLub2wV69EQFeDYkwVZJQN3s39gX8qXpvRcUCgDE7LArEqujffNTcm9q8c7wB9aLHbrKA3mAFWpKKPJ",
  "key36": "3fEYhCvnTnavHzUZt3bnrsjbkMYLkni7YDU7U9kCZotQK9RYTE5MF9Dmkk8ztYiRGytUqVaJPviTQDvDf7AF3262",
  "key37": "4Nzn9CqAbpZDQ7JjEmJm3D1oN7VumVx5R7WiKkpXdV3AFw7gzCWFbCjTZU5FF3RuLL38YNR4hKA66Upn8ZsUJCan",
  "key38": "2kr2bw6butRjg2zHYtgphYSZcuWa7xySNkKSgMrCU2cqQqJSHweXYRLedZsgTuz4ezx265JTpT9pFhVEf6wvVVyv",
  "key39": "32xDtizFmMK97EEFSnn4aw2NX3Ams1MNRzHNtYgpgmcJuzRDuDq6bvjRyqHzPKsMio5EE7ybfnudGb7QaQzcFfbh",
  "key40": "34BhNqvxHwT7b6VGLkmFUNCaJ4RtE5QueNvXQRvafphv3DeajAEmUg4xB7UmZ9GTCtHK3qZ7CzVzb5LVYRC5yR7d",
  "key41": "5NAi2o8pCHv3HH3LjqLS36M8QGZDYC3x4KzFY2fvRjgajmb1r35XDVdRwnruXup1HQbffAVBP1JB31Pnrf5FX1RY",
  "key42": "3exy3SBxb3qU9Y9rGjoLKEWDypyc5BbumHU8ZNTHVqWDXWHaUESHUxMQPDWadynDKJ2da1Ceej1L82fQvLyQLv1s",
  "key43": "4w6tc8Uo7qRJBbok4U4m1LsnMgcTf9se9rq5WXC9q2V17s2oyKZzEpUReCTs5V92xu4XgwCqcKehWa1nBqDcrqie",
  "key44": "5ewVPyDBBbWY3F671owCYCbnbQVLY18cGorGHVtPARKQtF3dnY4w9JcqCXJ2iHsUWXeZKcoeiVwDLyvAheJfKTQo",
  "key45": "3fLZHr5Yx7J8YLhqaxbi3PT3aep2S65b3UyfdCpbrAnKENYM6vegJrNKTiirybZSFcDZQ8Z5r4wbtHBuK1Hjkde9"
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

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
    "47j2iagqihvmKcRQP5DkRBYdQsA2eJxKWt3cXiwBCmYkpDXcMbM3wfVhhtgCZmGFCFBp7PYFYL7CNwpAmbEwS9Ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pa3fok9XzCYRvFNahZ1tysiUXzHbxEV3U47h9QYkv4jXZVxBqzjyzsEK6J49btoGCktgaku1qhZa2mmeAwBSmad",
  "key1": "3C5nGXU994s7yTNdP1xsR1wqoSZ7nah4XP4f2YUHMAQRUH3oZ1THc4MWnsecyyoNBzWNb7dMYp9dFvjrZZgyYMnR",
  "key2": "4q815XGYkQKgskYn8hmmu1rTfzuW4Naf7BmirXFX1eLwyhEM8UnDD6wuAHn1XPvzr85rjifd2wZ75cUjAccsHq9b",
  "key3": "3LHuQQVsrjwQt9bnd6Qj8Lndk3r9uGBLpg4Po5Ukvkj1UpESXSm9QuA7mHXWZnmxDQRhQZwPXvxMyvQmmSd3UPuE",
  "key4": "dEnrD5w5sb5DUyidhddFHs4WbVUcVaUPiBoZqvYPcMkjstmS1cEaYWzW77WJou4Y9CW26QUYkHdtCfgu1dq289W",
  "key5": "5dJXaHPrwLyVMMihfrusziN7NRXzQcvaqrdxzQWd83zDy34tukDZtRsz1pP4BHTMD1PUzBTRBGubBgSsuBiqgLPS",
  "key6": "3GSohDUKEiDDZQd53AMaB5QfPxH6z5NynoprFytrCDthyPCpqeAm9L3b43ZPSZAngy8vJXcgLYSiXn4Kp3xzDuYA",
  "key7": "4CyZXDCiaFTzn1dGt68invNJy3cGrkGymZWY8zy3sHRDUXYVQb1r8iA8KCXmhLUNoDMSwCwk1XccVdKdokhjY7cV",
  "key8": "5T3Sc6EeTk5AsUxmpqT5xRVHVhcyCyg3mJsR6trRpqmDuE94qht2QT5FraMrTg3VjXfKnde6NRmvcTHMGRKuaXm8",
  "key9": "XnX1GLEVKCoFRGJTQhRAcoMBvq88wvnKTU76wXLRZmWtcXGNtxfnWJDSjLd3Fii22FQdZs31Ck9G5PQvnGowyGe",
  "key10": "2YSgeCnRwGsQzVdrfaaEiF6hKqfQfqEz5ugWi54M9EWsQN6AiH4eGXeGM92vor1QMpVoBKPSPgt9SVYt59n4621Z",
  "key11": "4Fyq9ntT3unicZKDfVajj8CRGd2csehoAs1eRCcjqcsx3HNPp2tBnpJ26WQrers2LfZ6xkjVsynxyMd67gNmTVSK",
  "key12": "4QCS2kb6uZABKrdAiuzMieAShr1tb5Z3c7oitMGefs2AcLWoayqLNuCumS9W41m5BCzb3nDe75Ja1W9Yvw5aC4KV",
  "key13": "39sEuHJYAmD2xvgYk27pXvNHksBZBeu79wwZcQGFrL2vqzUBFJqUnhgMSrsqkCWDLyP5HCwiSJqFw5QRmnjSKt5T",
  "key14": "2Uoqiak6ByDYiYRmGi1537Rm8jZNGGVthZnTC7cAxFueZATEpbndnm68anUhx7xcmNuUnmMwFSZCWc4YpMhK6hCi",
  "key15": "5z4YxpbNgxoGKAAhLpcBtd42Am9FgeHrVPeT1B3ViMpzBwvTK9RLyKKh8naUvBTPdhi96KMrChKb8pM1Z2umhUW5",
  "key16": "3xuv1FSv2u7dpZrD3XgLgYbLCti4xov8srcDJyVEap4bsvwyBZDdmKB5xkb6Z9MdhFe5YQefFg1iYjoms9oddcGL",
  "key17": "3asf2zQYQyeQ5dPVMaCpnt7byWJhoR5XHWYYiKMTioMho8hkHX8UrooqKL8AN81yPq5Y14u4fGsGHFi7VMuLQ6Ri",
  "key18": "tuZxg8dobnNBQEt5NWLSqPLtUfC3i4XEcmSzRYAERbD3KKQ3Kcw9Xq6XEQ4cT3pdpxN1FcG37KgdHwyt9SMd6EZ",
  "key19": "51Y1BdmrPv5Nx5p38tJXGTgLenDw7PWCqLwxpwu22wogz1RzXocjGG9krwr4PZPWvAwbjuw1e27mkwzrwHCHHni5",
  "key20": "2qRQvXDSwsziBqNm19imkUaLAJGz36g2rZYoS13PT7jTEYzYCjpTgtLqYxnsBsnVuAyLAbSejn8sofWX9fEu4NNv",
  "key21": "5h5jdurLXQcARvbhtCDpASwk6VTC1cP79BgVgsb6W3YQnYWrNYVEwLQhnBzCi9NeKCeUVC1cUtEhwtvhBsNJQ4WA",
  "key22": "EeRNSZoRnwetK81DANY2jNtMuA4ZFvVbbzZS8W2qB8aaP63is63BrobCx6daTkK5w8vJRWtx2jThKUpc125cXRK",
  "key23": "3ixqj3FXVycts6k1DPLDecqMtPb5cWLcRpcRHGo1xi4L7RauQqW9oWNdsGhhbw6eEjmZrKwWftSDM4byFuubJDXZ",
  "key24": "YTUYYKa6a2RK6LMZWaPA1VEGNQqxMWRLyYeoATDz3NgKfQMeLyS8n2rsr165dw2ncWsweQaB9BteFmVEHhBD3BR",
  "key25": "i9mnwZUUMXBuJe1ZcU8PenThs39JJtuDrz6uv7XTAv3YgaLD4tfgESHrskTjpWn9VW7AFqBVJT6dj1ai238SmP5",
  "key26": "3YKdmVkxnMZdYZemuKufNqqKT2CVZjAKhaKD5Vx5F6C9yFjYap1DQ38Bpd7dHwGXV1B6mUJY9WHz7iuWA9CMvjVT",
  "key27": "2uuVcgMt1JvXaBLUStWJ9vtR6EouzhG8f95fMahE7h2UJAppJonJ4ws4cMAwAVob8Dz2ZTMPXMrgN39Db5S5Hh5X",
  "key28": "2weG4VbsFk2y9rzgceZBbiyjpv5UmbEkApVmFs2PgdHLwoLNk7tsPsNApKXvpFFgoe1sA9DmLBtCrrPWH7h4cA8q",
  "key29": "iWaHQdgaWjakfJEK9WRsfY4dCk3etu5xTHcZZ1UwjpWBTxkj54zoLHzTDeSf3cVQkYnwdUprpewXvCzuKvGgDm4",
  "key30": "58qQK2CsHqNXoQ5GriGV4dDmZZHrCHriQAacBg5RDjB3qCms9wdZ9k6nG7eAgUHrqXVkXVkqzpfz6BHTUHuiUjZs",
  "key31": "5quqqrBR61yV8jrerqFeHpokTr2xDehCMEdwbZX7p8EnEmDrFQFzEkCqHbSdX1aX2rNqcLaVaHrQNRn9bCNieYnw",
  "key32": "2JTvCiSFSQTGh65RsWU94KCQMTkoyJkqfCoNrNgFRABV3CrorLcN6UP1ZBuT2SxDerLPk6JnBQVAca1FwBSrM7bx",
  "key33": "4k2Z3saQNyRxnZYe6tFAAxPCY6ni3EaLqaPmjkba63bpCkbEqVv38LNrn7ikzPQBum1GyeQXiQamrpi39TfDvQ4F"
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

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
    "5YYb1dVtovG3q2yvg9wuEf1oeYMGHaVH5onpLEg75RrPP3koj23Cew2HH41334Uu5kxUePFV7kP9sjDFsx9s6anu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YDZTvGraoZc5CMwXHB3CTkdiZyYgA1WPUdgr3UJ5d9AxDjq8bru152EsfsiiPCVcZCDwQYM8ztuGBhyYmKQGZP",
  "key1": "qQgDFCEBYDp73DFHK4EpbmkYVN8AbnE4ZxHZ8YKofC3Bh1g4QFsHP5x24ndyXWysReRAeu7swLwUfPitEaseRWf",
  "key2": "RVs7xhwzb3PXG8VDTZ7kDfZKyxUtvsLvH4xhxphhizhQqMJKkRzjfb8dVyNXD1n4mQ9pnQc3LD1dxSQEYgJ9wqK",
  "key3": "gzLL2EVZiA5dRdEe7PBQNRG8hHc8SoLLuCKBtmxQZpJA84uuqQjEWqvYNC4VfxKqi4Lg7NNdT9qFaiEA2RdGvUQ",
  "key4": "epESzBCVUAHFVHZSCoZwASjQoj6i5p5Wy619NXn9pa2jDsoPzktZ7gb6v8uDohUuprSvTfYd2AcVRc2TyUFcCJJ",
  "key5": "ycAuzvBNkEaeu5Taps3NMBTiNgjAgH2C1xH8ZUMusg5YP64vU1f1jGEgnKhQt1fPGPHcGaF8eV9dx5ZFcQLBm4R",
  "key6": "4uzXfvLvBS3pmHbMRLucWiSkWAk4NTgpKbkuZEs6a3YuKPCdUmEtLcm91APe1Xp1BnamDPBks24m5KXK3Qr674UY",
  "key7": "2Xgjai9Xh1SmG5n9GCK9G29PzGaRGf5D81YSiELMppVgrPXRJXuqxqGJtSKPjpYrWV1jrCGWYVseBYps6wmidRrM",
  "key8": "45LwcLH6h5mT1SSZWSXuhtsYunUixcNc1Y8XoMFeuDWU6HcU2jzYfGUq4pZYX6sFNobakXVYYCwpamtPeA3oHTGi",
  "key9": "21WTzCM96uk265Uji3HNYK7uk8ThFm9cE8gukccbGq5EYr9NGL24Q1XEC8gN7r7ah2nfwbtKAigKKVsBmjKCh4UP",
  "key10": "4AmapFKhU6obw9qePRm8oXAPXBr1S6GE724tzWKsyj3ZRXcEzn3n27pMSESinDEYrcRZDjmgoyNXnAtnJ16NyKPw",
  "key11": "3b6PdxgM6c6xGkNuiwRoQNGAiqJipCqmb6ncMn9xZb7cY6sk9Vc7MJkRw5C5Z23t5wrYJa1idvag9PcfhzLnZmZi",
  "key12": "4kru8HAhquPMq8mvpP7QoeVpnuatmcBpNRnqJ424NoagQZEiDeRQ2G6K3NdW7Mc4tP9j9mKae99isSqY7WDFCQJR",
  "key13": "4emtDKtMv9uLzEcUXZ6Lxn2BYbZKGBqZQyhGbC9XZgVfxmEyvWDLRoiKV5YZagGf2N5JiMcfoMvfhN43kCHuP5yV",
  "key14": "4Gm5Kz7WqLBNm4G4NTtNwYbgRLo8JhreUhDezTHJcogLKHQEvnhBMGKrKqcRd8L1V55gfiKKD7XDd7CV3VjdLvan",
  "key15": "2JTisSeJFtugtyAaY1dRdWK8pDq2ndNbjfEGvSGpwS4bzHe8es1oGdxpkbadWKNjG4erJFAMcp1pgzJkUZQ8M1Df",
  "key16": "5ViSRrpAeUtoJLkNfdVyjuxYXULHP8Pe94NPUEdhu27W4hcaVjHEpbFQWE6GwNPBqcwzYQ4hfc7h9kuWzY8629tW",
  "key17": "3QJycWDQNjgLYt1vLDhTMPSf3W4nCpkJBoHkDstHc3TWzHRKqy1FCaTA3bxcAUmYpHVoeodCELGCDs9nmmJn4Yav",
  "key18": "5qnLFKEsjwBZmYzYfW6SaDsfEgvSW6aG3HBXCm9UCQE8QgtYnjmneRAaDHDYvm4wfCYLnV1L16NCKGqzdZe5TsaV",
  "key19": "2JxwNGZFzy25CfF3KyLLbF7ryKvWHuhbYdYfA7LkR5ZrmoqpSG5bXTbsFH8L8A5mkg9RKgrJ5p8YfSwYBCigTDrG",
  "key20": "tEPXG8Sry5h6sVvJki72G8xHnfNSGMZPzqcQeskXQAD9z1A7iERwvSHVhnjS5msFGXotxn2FgttVHNuwUZbUQUE",
  "key21": "39V6yUTuwA2efar6h7HsLdSabX5kQNc4mMdzM2AMHS2towVfQSXfNgbZHn5yvrs6CPifCax1WwMr3XcapFnagrBw",
  "key22": "33LofVf48873ECXieGVCTsTLTREnSqagWMGWKFNnn4RP55s8GoYbNMUFgNgbQzWCRahdfMyHvTRGBpR1QQuAVUgT",
  "key23": "3eFSFWBGg4GX8L7f2kA1wWGtnM2zzMGQrc2jAQgewL8vw2wkAC47ADDo7JcEpsq1Gb6fWRik8y47yuNyukDm8Yy8",
  "key24": "4ZRgeUd5Qa5zG7QySpfKVrmUKRPRScQywTQ14dfgcmkgtNE96wbg7fHMfbhQiRK2aG62o5MQ4VZhLZFT5b7qLJbA",
  "key25": "3Q7F3sPyW7FyNTghLv5TvQSRxxjzpGaLp4JpztBoExtjqAqRRaVVgfSizAnXmm1ui4JKpqWrzuo7CMXBNUC7D4wi",
  "key26": "um9Mv2sM3kV7TwJmgpzqMjPwUYuw2xp7TzPabgENpXn7dYyrDRcy9siQSQrtSUiVy6QqtKeLEAWD33wmq7gJdfL",
  "key27": "4BMgmeJDBtP6isLHE2srseqxbFro7csET2GqcGj6Yj4ywfLZdyos7hCeXU6cRJyWfcxALGxsuxKjjLGoiYskYqqA",
  "key28": "mn17wumzp4dSZX8eWTzbvoFhYvpJTeCXj3baTJ3nFZEjxNY2Gzgr9pG6WZx8XkAmZsDpoBJCStBNgvrGrGHb4vE",
  "key29": "2EaAxgfjZDghEJpm5S7a4qeSb258A5Fd76fDPCTLbcyuyVN2hMxNRmqFiYQDJ8iMtXNZAnj5CgLkB55DTbYbitmX",
  "key30": "4An1tfgfRaLSAXFmeawMQnPqC6zRd6fzKVmav6FCDD38j9116hFdtaZiBdmphKFZ79yTffq1VYNq66wJbJATHVqx",
  "key31": "3jA3BzUAagCBospL6zdBRKUrqtU3Jpmk7cJzQUX7qF53ChUz6u9MUrKHMARJzoqvoyuPWZJAJt3TjDwEpigRYQs2",
  "key32": "UJA36XEyQxMKSkqCkUCP1ZJ9mcAxkt4uMZ8NYCmnUBmz3mqpqoKKytBoiFvpgKm2xFghsaEUe6zqtiW9oRYJrd1",
  "key33": "3yQZxuuAvePow6ai1zzq2skArMZ9wE6NNvcJdsdJ5uUNBDVhDDiLhtvRzpe2WJMvNJFSZTbrDmzYNhvJ4EjBXUnn",
  "key34": "3Y8t3zcNnYXz28vVDziXwGUmd99zGPosdJAQ4D2rPx5D9dajSvAB6hRta1s6HDTdnfXErNKGZ5q7Q7wtHS4cBYtj",
  "key35": "2XPmRrLd5L9BQUgr5WMGzMYFrBYtxpVv2tgdBdQfrMuPUPkbhc7TQuPg5hgaoigYcaW5q7t2Pgxr2Dyt1tUKs5ov",
  "key36": "4hgLEfZmnz4hq5ioeePHJfvRQwKwbMN59myvDWzD8TS5fNtdZyt4E6gaAShKc62idh63yZAspq6g6hrVVwHY4tmr",
  "key37": "4wLqnCpmCJfrk3CDM1x25nc9FRhHBP63fzZ3WDg3wGnz41JdTiCHgB6nT4Ht72mcPpJeVJY4QsFz7uEG9jUgpqtQ",
  "key38": "3QAHL9DJbewAZk4qDwHvNa47E14W8wswNwvkkoGsJvmwPNCXaWA6FfqHAXwReBDxhtL7LrnWPKJdZJiNjpp4WeuG",
  "key39": "5us9fpQaoS2QX1YLn964dGGSexPfJZa8UKncxyHnVMwtqLcmFbrMBptLH9R4dT8maLWZheeXoJBkDuLDHbR3RGJF",
  "key40": "26AGthjgd8uZSTxuKA42iK6hNy39dYKp66vGjNUEuQ26zaThrUY48RM1uUqHRPheXgocp84nBScD6e7Lhujed1bY",
  "key41": "kjtvFBi42mRUnjzVqXwJMFHbYh2kmvPuVeeJCxxrhBkwsqsezNZ8hjawySn9ik6RgQxxovG2VU6zCg1vqTxi8gD",
  "key42": "5WzXaDbBeGRTQ3AFA81wU7cssGAj5XYbYCCXdWeZmfQJLfQo2Qqwm1wb5dsp1fZvPXdNK9EXgKsKzUgteLWNLiN",
  "key43": "61AxPEsYYqPvFwgYixep5kX4zyoLYzpCvWrfQxYioBR1ZdMq3HGSaF8NZ3kqe7UBWovGErrEdVFo2YyAFRUZaXbi",
  "key44": "3cozB2DDdVKs5rcycfzd3dtAVoYNPTbHWVCvzasXHe5FPn1LpEcRq47GZ81ivYY6wZnRZoFd4UdYxfqkEFbhkpmp",
  "key45": "44Eq8hqab41rCp3w8oJ9XDYFn2CNhx7c25xbNVj6wgy8EVZg2tm2VdBwh66ZsghWUY2HijjPiebcZ6Sbih2F3HTo"
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

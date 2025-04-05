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
    "5UJHAFinqXxDJn97NxR57j1btMmWEMbAEMoKeUQ71yzuFRParTUCWvjSJR2P5td3UvV1yaLFzBCwYvHraq68G4VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBPRRpbbLBDEjQL4hnyhRoycV7PsrWNJ6DB1dZTQBSqpZ8Luixh35Czt63z4PgPn2GBewYddEqwdLbqm3DPQYdY",
  "key1": "2tG1n2iTcvTEAYYCvyp4g7CxYKcjZBq2HAHBbZEqCNjQrqe2scZtDSVdQXCfYyAdJuKZKa869h4iErdgUNax9xtC",
  "key2": "4NYUfMWmuTD8KdxCHbv9DG2oebJ3WaK4cQsrGmk42RZvfTKRbpChovESQJ195mG29xrQJx2BqQM613t8ggxEUQmc",
  "key3": "5rJVDDYLYiCmrpgssCuMMt1yew9DH24fbw1ZrTnnUYi1ASwocaoGPWEinj5hwk1w1Ze465z6uTQkbnbLLmUHNLRy",
  "key4": "AKfRZoM6jp2iGDT45fEhA6CspvQDyCwy9N9qtijobiBVT6VCTuZ5fTu1UmqkHC4XtPwZ4DqyC5ZkCgmCk7Nb1Nx",
  "key5": "z3Qemcpv3Z4ZghoWgn5VYm6AN8RneQ2GgHEfTp9r2b4NeG61c6LpaA3kg7n2xHyseL4iC4jwqnrqdN34j7KpwRw",
  "key6": "XVZkYbqMruZoJfBHXEwBNpsQWYzLngEMwTm4PeqX6jt6GH26mF1EVVsXxUydEgPHsT8FF34dmJmSErD1vgYwF9K",
  "key7": "48i36ueqpVTN4drg8negctmh4QS7DLwp8HJ8UMFxFUQNmHDBHd4GqgPunwgqb5UV8V3gMdAyEszgV9j2H8C65reJ",
  "key8": "2Es8fqa5e3181A5F4toFRJMk9kLKA7b5YQWdKLUAM6iBuAEUykehz9y22uodcd1m4nZRdySnebMdN1Y61ggHBUp2",
  "key9": "4QQ347dNyfuJxsXMhxTCACWrKt5e6SFRQacNhJeHpwM8896xAKzYDQzE4uvKPN8EZkDXPaDwDKkAQdmAHWEHPswf",
  "key10": "4AndnbQjZgPSpxdUfGuQkkQDzDFFnMEZz1j8RAq5BVuA3TSEo8oVEGn58P8JJj6Ay1iNQy7UcUctLcA4ZruYnzF",
  "key11": "pC6RhxtpM85dL7RVwwS9qVXgLCrDsVkJMiPQTVukH5DTg59gtTudkBdyiyqkbVvRQ4adPfUoi2XQ1n4bDiS79fz",
  "key12": "3n7ucYcJoyMc28Dfwku9HtBLVRafDoEjrfpbvprMKBkYLzphqALsWoysgcdCJRwNQbQNkv4USKuUBZYFjFxhy9UY",
  "key13": "2UaWT21q15uFiSMexHhfUhvBG4zmSf5v5wiZ8oRfjqJctJfx8hAwu93MGZP3QEaTgDJuB9U5FfbotfF5ERDYtWKt",
  "key14": "4mRHidxLQxi43isqXc1M5p8ct7SW8jG9X8AuJfBNzsAnjw87VZXdFMQp6pu7dra3qpTtPw6ZwvtFYGU3SKT97UUk",
  "key15": "3ymiibt2y9WpJCCztpQwHYAyUPQ8aPKvWERbosc6jMrdRtqP3D9tP64kpVHz1Dyj6AVzUnogArNUwbLyW8q9u1hJ",
  "key16": "5RVP7goyf6Kq5R8SJEbGLo3SUDJZsRipNPzTLnkccqQYdu7KnT9zJVQVNMWZgbw9VkHFmF6ev46mV3qgPQoD1DuP",
  "key17": "T5yQepEUhmBXHstPSzaH1DGw7YsC4FSdQjEqimxe9g59uDU2F3WESATDdfZyypyMDQ9fixTDjQKxinid2W7b6WG",
  "key18": "5tyDhnsaB2pvVbDuny2am5S9rvZM8bBQkTtqcnuV2fC1wsauUP8T5Da4zWFAaKNwqYcRX4wGijtXGCveypBBBMBs",
  "key19": "3r5cmnQZ1mgmS5D9x5j6f2eNc96H2jcmBoGfpZgGp4xDNinm4cF4QcfrPvSRprioCF6bQhaZxjQwCyhK6N6yDmSV",
  "key20": "2U8qoqJJobk6niQc5LTDVcYDa9hLF3F59fXUGgy21P9Z5yLuGQuGL9GxFMB1M48EUaaiTpSohomJm42pfNZFa1AJ",
  "key21": "3XHB6ReyK7qnX7ZFzgxdF8K1NHtaZJLfh6bfjBr7MDEvFWhqK1efpSF9pcfFkszTT8PYUWUFNnLk67oogiQ1RHiT",
  "key22": "KJi3ZyCnCujhn1pvpeQ7Qz13Kb37TGVKjrpxuHRkB5wCifAkdzQt6JKimc2Bz4i49iE1EKNZ94hpzkBjP8uNoa2",
  "key23": "4JvKPFGHgsEApSfsRf59DJBMeb3RTY6tWVw1oxuQsqJbTBsDxJCNmrdSSocscgEmmxyWwhqgUX4KKDihvoNdNFch",
  "key24": "3Cbyd7p6yV84vqvLfWpeJ8cXsLP3j9aNQ2dtKcz5yv8Sp4PN21yHkwPmsWPjSD9ZzraiTeJ7DahJkyaoiAmE82T3",
  "key25": "31rpjqqVkSUgdUL6eKN89WxBFPEvNm8VdhQwyWi4CyPL7pm77mGpFJNCm2o34yAcqU5cojVESHmNitdwbtuPXaHQ",
  "key26": "5V8NZmoqgx9gZvaYE5rq2uv9LZDL6cDyByZuZKKXL6yj29s2RKKUecwQk7NntEJGdRR9Enpd686jw7e5kpeTu3U9",
  "key27": "623Z93KxXr4LamRW2CDigdhJ88vmbY83hvyppJRRRDocfkMJuw7Jkrh7SQ4tm6XbQHHqphoWLZS7BoLxqJscq6C4",
  "key28": "4R5yfUx8TCHjGMUD4NCavNED26gJs5L6EBGbjBw65rgN4t1KTSPS6uUPKKKCtfA7HxsFCDf3m96Ka7uJKY1Mth1M",
  "key29": "4CqvFxypMpZrgeC7gMW5S7LZsV1eQxdrwEJUULXTixzQ3nJAxZT4wMmcVtvuwWoF8CGFvj7tB9Q8JjntwvHKqg1K",
  "key30": "5usQRmmGtqMPZUPJ1qdsEjeQ7a6JLsaK7HPaWZsRz5e6VQTgWKUADZfHBcMfAyRCKUyHLaaLEezpk6jVkzSpBZ33",
  "key31": "5FxnEZ3yuV4jecvgHf8z7inFkpP1UDeDsqRqZfkhZVS5DnW4WSAXjBCT7JEtGAt46Po3v1vEfFSPpo7Wnf1woZqm",
  "key32": "4aVLsrGdJ1dawXt8uyJfjcT6QFnkEncQMQ6BXLyUtifbTn3XmXfDTJr31wYbJG5492J4MeCap1Lpj89J7FZG1qmf",
  "key33": "53v1kV6FMQL7qPka1XHC24Lts2KVxcqi8d2ePG1YZTYVtM8HAiDRjHTfiWLVyybg6RkStgJyV7eV7j3Zp4xTUckU",
  "key34": "5bNkF49UfGEj3TbaMFNBRt7QSKVeZW94cyb4RULt8B1MaCWCpaRXCiLhtNedvAPegiMfYdqEARzxbUf39SAshno2",
  "key35": "3UA337wBJneNTwNkRzw522Nm747JQKuh2exvVYZC3hk2go7XmNkFfFzoohqTbttYkZqAWgYx5LFdbZQ3da2vzKAx",
  "key36": "2vqdo4X2Zgu2NmTCfNRAGgv1ixn9VhcHzBKyC6n5Joc2Azzhi9EpNWHvx8Xv2T67uQJc2xCNVTNkFdnSxfkFVbq9",
  "key37": "2YH6BHhFTg68VJpc8V4PV6zMg5nJ5XEkaEPheGikAc9sKcSnm54oWYWZVN6jYjizMuaXuhSYYZHZ83XsxqHbE8Ue",
  "key38": "5kq5CxsjaPPMdPUYd2BiiccYsBF2UycZT4Xcnc2U7hfydGqPUJtFpKgR3zjmsqYQykqJwoetHoWXSjN7VQ7nbGec",
  "key39": "632aDK118TxzWzMSsFeb4EWG4ApStC7Ms1iM9YS3W5J293Je13F2Bya15hbv696GYqrZkJz4D9NwbiUX8uTX1cda",
  "key40": "45tzQ42HMmRwrj1vUxh9pwWSrLbivoyc7CE4k8JzMQ7G7h5xy1L5H6FgFRHpbLsZ95dYx8NkiKwT7Lw3Q2ExUVfi"
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

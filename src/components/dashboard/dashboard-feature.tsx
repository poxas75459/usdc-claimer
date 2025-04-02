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
    "3bh4yW9fgmuayzEiEQzSGaP9emx8UArRthTz2yzqSsKwfnkHpJecxeLqqE5dR4YqGG7J3y41ivJwMef32sP4xkR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56VUYYVyA6FZuEHfUtykvJGsJSkn1NYQLV1wNaZxtot6oy1HmMUb4qNQFwxnhsNhCRKE5Kkp4HU6aRZuuAQHb7bx",
  "key1": "2j3Z3G366FSeWA64cJ1TK5QAhpU3tXG61wk2iZhBzopP2m4K4ZagUSwPDbiy1sbuz8FZtF5NzEs3LJpcBpKShNdz",
  "key2": "5vPT1hR9QTcxnbZpGSbTi4U8QBogcyJagm8E1LLSDaf5JKEXpp3YEw6DzjpBAZ56kqD3Y2cfAGiD1zZ5QfcbsfYh",
  "key3": "3mF4tnCvnjAd6vnmKzUJtCFXBPnuCUVNj8fXmD6VALz8vfNJ4evds6V6keXxEFwJGFpAoWtqdG2iUSLKw3jzHeJH",
  "key4": "3nK1QuXgWcQC6cvjLuXA7sc1XhPrPwzEiKQc6jCNZhMKhq68ypz1wMjk7fffFb6b3WJ48uXdirwoKPxmtGBDcdR1",
  "key5": "5rAvsxYHex8c3WKczkX8kNgVdFHzxYK2eKpuCaJKYirpZNSpecs8MXLG7mHC4RvnqRuJDjiKRiUS6pN2LrytNeKD",
  "key6": "4KUcS7FdxF4PVw8b4ZTVUnXRWACcXG48WScnHU5b9KD5DzHgtfHTDXDgEBp1dBx81MQg4bBhcbkrr9iurDSG8cRA",
  "key7": "2mC3r9e2VumZWsiMCVWnGK2xjB3US1JaMvdo36AJ2mmq6eaFeLEPAScMcGU2oy5DFxRLcHvu8eeaRyMUHMGMRsSE",
  "key8": "2yfjDBrKZYXWGdBoYKy43PZ6M3k3EE3aeShJkuX6JPykfLB27Aj1WVbv9A3HA7Kbq6epwefLrZS7w8FkT8iEwFyS",
  "key9": "5tR7D7vDTzdo6uc3PtJ6Ebb831auRnqPMxE43LadehEdXYGfCaFbk3ZwYkUt6kHHNTtq7A5qzWnQipUyZWjQTvNm",
  "key10": "3pZMZFkhCEVRqzbAAvbSskkT2tcFMBiH897Cka2JFWM3kjAQEdgRynKh8uyqFbyra7dxzm4H8XQ1UPyGoVCwmQys",
  "key11": "3z5aGUhYdx5g8v2g4oACXLKdPUQCYmQtXTptqeLNhkaSYCRC2VC2YJr4G23dB2wzMAfX9KMo4hk8M1Bk4Yi3q3TR",
  "key12": "XSHctL2cnxRoxCiMHHzZVs5WUSfZv1hXoCtisapgCQmT1CEtjK1rTpKaspQ4ggfp28aNmm7XNbxroGsqzQCLyHg",
  "key13": "2JWqysjb8EDDazWQDfCtRCKdEmLGhKnzX8AWzF77xhW3Mp4eE3SQmcJ7s6KnSwWDuV4omdeFRi73sUCBNLHrDLxn",
  "key14": "hwhUwL9kkthgxKmJM6s2JqwXB8hzxNmFM1pmNYn7Wha2uizYw5scr5gjvhtQnFsuUjLd2goYKiaNMdap82zhAuy",
  "key15": "9tAc1S2LDMtCPQe9M2WbN14zeUhatEydrmpS2dvFo25h8vpF3mdibkNjPpeWfmCf584JauXwMHwwU1jYWyaxbkM",
  "key16": "4fgBRrj74yrDiJ7DUNJpR5gUAeF3gENcjEnPoeFSNyz4Q7YHj5bh6LhAStqbYpczDvtuiSq7LWur9hMemhbf6meA",
  "key17": "4qDjifa2oKvQpGne9MAWZDt64jxLZvPm6RtfDeibraj2JGURGWNeMDytvwvCkRYHNW3wyyKSQDAdhbrUs6xE1MAm",
  "key18": "3azYb1b51mggro7xekm4tin85G73ioieJFzg8YUtHNyrNfthHH1JDohEMh3Wy8HMnU1eZt5pgwNsvU4xbzdUCoZH",
  "key19": "3gB5wRJkaA9eH6Vs4cF475GKF9VLeLFroUxywroeTVPWNQ9xkBinS63UWJQxcpWuEMpnrSxXvUnnrDSauzr4G4Rf",
  "key20": "4VFPYUWT7QbNbLvA2cvJDF3uNBNXN7V8iByLvbCwaKANAQi2sPhusmKvaNqisNZXrytcZQZchqR8ZFYG13vHxtyN",
  "key21": "3thH2JoNqUcpRj7y1ziWsRKGBH6uB126q4E4iZ2Ugn5xAEQeTf4UnFFVnBvJJG7git7akquBHJ2nGCMNDeoQ1qBk",
  "key22": "bqzv7ohFeNM75ZoRxyFkUiUWgdpgUWKkehFhrkEntARs2kAWP3vuAJaDeDKM4QwusaVFEcoJG3u4hxcANN4DdtV",
  "key23": "3H9UK9TPcqGZVdNAJis9wBm5DHs3EVtE5h72Ths7q8qj6v8Y3AVAsLDEGtAXy61wxDq7zQ9KxZML6oJMPC39ZeZE",
  "key24": "4j9UrY4nECMSbw5VYobQBN6ev4SXuKCU5AwFwreQiHk5qayXHq3TRpPrFc7fATN5yBCRA9uVD53i5SkYuzfVz7sC",
  "key25": "o6tnqbY4Sg8dBBMuEMN2FDTWZKfdSMT9UBign198epaK7PLPLDuriuzwd2YVKBprgGwEbMvbxWksYEThrCa7W2j",
  "key26": "28iRu1pgYC6webGvNkPtUqVRPq5YCzMhyjwY2ojMwkmfmJVXXNFbxB5Upq7w35v6ZGKY8bUTMxuBiCvhVTJZVaTb",
  "key27": "2ejY6BwHAWFWcuBUxp2jAT1yc83CPZL6Mk31MkHFJLnigwkTZSmWDSEB5n2yzSSQUAcpLWsCiNXTchYJgiPC5sHJ",
  "key28": "2U4v1pi65YB37jSYhkBnxei8FTGNPziXD6m8rQrVDCVVFqiqnR2pVGLveqRyWtQhw3dzVQmjovLxggaiWkPJvbLc",
  "key29": "bgCmS5aXsxZzMP68syKeeSKNXJKLj1TmYf7588DNGXjwd8KPTM9cQXMZFxMQbSUjcv1bKHKTy26q6tH18NuMgNR",
  "key30": "4dNntJCzuEB7yKi8fFVvbZacqof1z73QK63pk1MfdYpufgin5kpoif19MsRMis43ZZAJqdP33Nt4Pt8PnaGMgxAv",
  "key31": "jwQKpVNm5M4GXjwxs7kiR86ENrc6k8G9xVhshnwgDEk6jN4MkSV7KoBb99mkuJex27vkBAxr2SJwfWdY557JpSf",
  "key32": "331Dxy6iEAvJh2v9TREjU1CyvRJREJxNPCXnrWraPGGiEaDJf4B1dWbj1feduw7Yf4tK3xPcj7z2TNLsLCgK5NCq",
  "key33": "3sgsSE36XAZYaEdN787so3BScJ3XP3qs9pU18xGR3vio9d17gUNRdqHKEioFsTXzhJqyNd7TtzFBujqAu6DRr7Hf",
  "key34": "4NoGQcnhx6TVawP7fw8ND3egHZxeWefpt9V7eXbM911ptvPzBxoCeoAgMp4773cjhmnQj9StmdHCchwb2xAHFc76",
  "key35": "2TmpGA2iNtPQpMYF9eaejTitEBjLoM9EQNwjaHPx9CixhPE3ExAsgHyai3M53Jvd87xxxjw3ACtU14hhks3Vu5jj",
  "key36": "25jc9PgGtNbfG69KiFZbuMi8XwkqpUzyfc8rUFKVXVv6VX2CJ2nhhPEkgrp3abw3xrd5edgmKWpKS3QhXmHwjZMN",
  "key37": "51R9b7bSXC8Y8uLz8mh4Az7d6CZKH3gbgm2Kcsk8vJACv2Y8vuW4ixdUsrUtYXkPAwCwD3ahcP5G62jWweti1xH6"
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

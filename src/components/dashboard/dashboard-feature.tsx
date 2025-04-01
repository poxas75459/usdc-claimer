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
    "3H7G2tn8izH74k4175BLWmj8nKXnh9Vg6VcMkrqPcsuPKsEsSTb3AuQ6z3RWJG7h1D2SUbcQozLbxd5issCoTKUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGcPcEAGgS9WvBrrxbyAmBNKVhqn25UKfziDwsMz6eeZSxdwXD3y7xAkvayFRbEx2ipDoY2krrpVMG5iX3y3K9B",
  "key1": "6USbsjhCsSrJmBcSQBkc2DYHbkDJ1b4niRoP9HUiZPx5tkFcF51WfkFHeqbFtaE3jgj5QEBdYEBma2hTCkAxPSR",
  "key2": "2UnLY5HapfK6P9mqm8E8YPSEGkAPeyzXXRUfbwLYySDicKxDKgfJcGR9djHKABoAdFZdBesTtjQCHmYKtWnGRhnf",
  "key3": "WVdNfKoiBqve92so7da3g6SYYoZ6x7UZM6yH1oqG7HLq81Gt3rYxXasoztC1mhohznYTYdR1ahY4JTnEg3HNLr1",
  "key4": "5oC8sqjBhAAjUSUmKs8pckeNgEFLVaoHzEkqLMJGTzUxeFfPFPsjhzWtaYNh1KuRNqFRypxZXwr2mDP7mgqkmSn2",
  "key5": "3a1yg4Hc3wpU2nN1tNHuJQeRjb2TbJd6ajivmn2xWkD7yXfWzfAHz27mPq9z5aya52NJb1eAPdeS5azKvsVeH1Lw",
  "key6": "2scqq3WVHbj3ZMbBZ9bRuxoEyfyvsimMaGPns9FzqswjF76G4QZk3PRApUiKFmMoMQXUQbRQHqSBJrLe6fEbpnFw",
  "key7": "ymWm6dtGHJ38FmTLyB84kUCsX5LuHsmHGn6mhFHJvnmgd7mrGabWkepr3gBfnw4GBCEX4yUdiJPJG3M1XTQW6iZ",
  "key8": "4HYM9iWTq5cC9DmmkmPwadmexQTszob3BcuBMohcrcwqMvQwtHHLL4RbzsP3Ndo3S8vcLUmC9XUsCtEPv99Zsov9",
  "key9": "4v3cJ7yCKm4pDJzkKZhcHCH4TxJ2k1ZtjbApCcZEhUbLmUXLGZ2BL1EayHK2VcMqF1CGzMLGWh9rtHrtjqEqMkQi",
  "key10": "dhU5SYiVatNGoyokNvu7EvMsF6VHJRWiU2BNrULGJQiy8fZTVe1ZrNH3AoGVevKdjcnQUt5kGXkURMnuHYLgbTE",
  "key11": "5u71p1j6rUaFHTGNtntaYw51iy2pbzLGHJRCJSK9o4TFkBBuUVJ91U4bdK9qA6hVzAYUkbp3xg36H2Qj4dDoYgMj",
  "key12": "2GbRBgDexFnGsUyqpiWpX6JtsbeBQUvUav4oAePLt6NnbCGBnbh3X9h6aExzbLo3m48MnJjxZwKNMC2wiFPdoSmJ",
  "key13": "4Rrxi1nzoaJ2YnnJNgxMceoc26W9YMGDdWNeUvjD29jxPABysksLrRc8MNitz6MDZuMevDu2TkYbevo8fyovUHEJ",
  "key14": "3tGGqYCXDijZsiz5Pf8A4JcNdC9cLWaCn3yR17pm64oxVoL9X8q2bC4KaLscTgtbStPvzcFco8jAhKqTokeNDeVQ",
  "key15": "128Wsji7Qw3dgoDTaDqtAUfMGjmDGnwcbVqLZPDpojpUDvznttkkFdjfTjB8RCjCKqNeBLamkUpXQZBDWgAwSJkg",
  "key16": "3fsPL34p2B4kdGDCfYrNzsaJdTgS3N3rryKqHjPpCpkz5txVm2p6GaehE7EBv8ts6afLKE5RU4JyvbSS5Yyy76Xn",
  "key17": "65o6xjPStUy3nBVG6ZukbLCSknyUGNnrrYv1CFyLEBtG19PMGEKf5GLVkpdEJa3SgVzTpdkhbC8XYt3Hcmv8Av3Q",
  "key18": "8koktT4E9TxGXB2Lde1rTkpFz2i12hdrFwREhS8VRPcmUs5YS9cYrC9GVyGyw2G5EX7iZYhXevuEcV4KVAiDyNq",
  "key19": "65EkjSL9ssP5voBPKtp3Q1Wysbv1MPVodNRnuBcaLqnZ7vetTPMn3ARR4H9kXZKqHgQosJkdPhztZdep4UiTEFpv",
  "key20": "22yPy3gpGyLuHWsWFZbfQkCXYXgTya1f7fYEAMCCcXoze2hTQkNjbgYqswZPSM1vod6DBM1fV4MKH1q1QniAhSPe",
  "key21": "tBqYJJ4wPcR66WmxBAocwx4tQfnuMQrTpqcQFPivnn5uXtrmg3NSfRbxJbcP6227nHDoD8yUBH7ZuXNfKEPQphS",
  "key22": "QCZhVhtBH6juw2L2U57azkksmfLb42Traq8gdmffN8qBPRnr2QaBAEjMByp43voG7f4NdtkmRv4vUVLL1Yiqo1u",
  "key23": "56i6BcWzK8XerN3Sdk1w1sovZMpe31XiVbYNBXZ7g4Whg1jYqCty7LbsuSPsDga6egzZbTVgGKxpWhQDmfYGkvn5",
  "key24": "k1hy1Z3VMYUv3FNqesNVLNsiM62fgU1CjvMHYTBsm7KAZqL9GujKX4peZVzLRX8qchkPZ9VCDwBgpSn1KhhuPDa",
  "key25": "5V11UyHD7h4jLEfhREAdTDSSmsZ4Ev5KspF9CnbbCYRtzPVdb9FNAT6MDAhp7JSTeMcdQvtXCgoJF3v6mf1tzFrF",
  "key26": "5VdVAh3G6RrnK3u9UCb8qXNDxBtsYBh5JLhLaCLf5wZWNzFGbpoZhY3yt6pdAXyaKoMknCtSBjeEmhRQ2SnbhXba",
  "key27": "4W1Nge43kXyTZNW8xHkmbBUpss9ENdpoivgx4KJ8NMv5sbyEiistD9aKXckPBvh1wjb6LFvFyNB3X61FGs2CfynU",
  "key28": "5GuMa37Wq2yLBL6TENVcDF2KEQmRhfmVD8X6wEP2E8LamgydvsZbKPWySPqdrG9NxnjWnjLGdgDCRguqvngWdmFQ"
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

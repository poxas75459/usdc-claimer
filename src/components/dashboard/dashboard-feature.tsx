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
    "2o9zo9me4xuPDDizpV2SXb9oPr8jXHVHdnkyTfWUc22xUUVtmCPNdQ89n7gBsQeJ6UvxhMRn1T14Qpb5o94cAsrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zEFwrcsR2vRtAfcKHeLJBukaq5KS4m3kKhamr5BCWRizcZNDdSQaUJrcTryhYifJ9Sk8ixP2EjsbemVT7NWWzDo",
  "key1": "2NU6Cn1RTktsK6R6xJhtvpeZiXSmxxdJtC2QuiMsBLpoUBuFRJBsxhDrzDzBd6ZGnrtU8W2gMsTcXf7aCtyJEBaD",
  "key2": "3Z8aPXUJhrTTmyESq8iz44Hzd2p1cKSPV8xBpmn1qhueQnFsWTVG2dXuPL83HAmJGKShPTWkpZ8Uv6cRoYCJZpcD",
  "key3": "7uLnkJgTy5m3RvYqkUE3htj8HiYw2rNX8uceakYXmfMRCz8cYUeEG13XqxKvEWdPDyJshknujKsie1aTGBpVzkG",
  "key4": "4y62rnfR8QDHmmGGTAAZWFXvvG2fxxtSTs1FDVYMsygEGwBcgcFEiHLHNzmy1VcAsUmtPTkB1VGtYaBzUjkunddf",
  "key5": "258eDUG8DwBofdjFzB4FV9Ym3ictRiofMZSsKGN8SRuEXCtRNoMiDNAKMW1nyukuA2zEkesCseR4B8gN8o7M47rL",
  "key6": "bkSjyNjh54tbrMH2K9XFTEdSAcSiLM4LouYLqizeT8LiPbug97JT6p1Z4sPQQQcKmvQH7EnbAzx5hzfvmndPJQ9",
  "key7": "3HLA48rsqAKUTrKtp3vH8HVJJ9N4LGcJbaKX7nRxq6XM2kxazYAC3ACyv1AtjG3AX7KgkgdvPsrUMCJ4TgAffKYq",
  "key8": "5ju2pHDX7pKsB8fDKTaMvCWNLwf4Q5PEAzxxSBskfDEmVVey4nUAhfRGSS4FubmvHmz1kxh7rWM4GHUx7EMm8WrY",
  "key9": "5ovzWuYQ4EEN22URNNiuCuotJwiiVqAtoHR6Zi6dUF8oTDgjtsHtN5hbV1NXFhmrWnx4rKSZyzzmhXtuRqjzweP6",
  "key10": "MRZcn8QsNtTyoaDkRsTZRyLFAf2bwHzTr2wHcEMrxHvK31uN765jRexeVvmnAzAX9qh8ZYydMMmFHxrnGXcuy7J",
  "key11": "2uyzGYnuvwDTUJmZiz2gVturYM7wP6FQRb6sAJJVGMTT6ApgbBvLyJJjQiyDw6wP944gUT3oKw2vAWfF5CWXfEgy",
  "key12": "3SXiFTg81V6dW5zVknfCdBvCC2tjjyUZDvGVZLeBcuxNkNvp2wBU6xzwkQggqKn6VhBPiASaRqm6D4prYU4MoA44",
  "key13": "3b37vBJCf8Cad8GVqitFw3z3opK48eDyyZWYVHWKff3jwbGd9cheQRGvkfpStTnHN5mLRZFfr8avcxQPoYb3Fevw",
  "key14": "2zS6vvu7SXqXk1J9kKzg9xDGvhQq1EGumD6QeALbnpRJ7J7aT8kJoV7Hx1jWdnBAwmtGrDQzjkYtBWbCeDPuD3XU",
  "key15": "kdCEHZTbuxFLDvU2ednq6RTD8DRoH3KqMWkybGEirBFAfawytgvTYe1T6PAJHaq3XuQDLf3MSF3gEHsCyGzsRSZ",
  "key16": "2pdWVA8B8QvKpXH1qLKvuEQxjj1pUU819WrihYg6AKxhEBbmkFgk4vPk7bx5n8ng67RzqpxaX13a7CSw1cr1AY2L",
  "key17": "9btnGgRAAm9zBM1efTJf1g6YC74bwfXzAdAL7XH2HZjp7byDTMhSN6hMYazWrG3zmA6VtxTx1ZfWSqGehtzMoie",
  "key18": "uxiP3AbLfxu3sDXVo84LCkBKbKEptu8Vdnk4GPs9jhyxdpUoyQbxvqX8WMitEdu9pwi7ehJbv8UNfqoibWQuyWZ",
  "key19": "3UqQXBqX1piNtM8G3d6wMMHBMgZqLxcHYJ9n5DphyivsJbRpH8cpArYeY13NpT46yQGDACTvz6y3YbTE1dodtWpM",
  "key20": "36suFF4DCZMm5Vz11hDTbyqFCtM72Q5CxkRkYJ818oSrgppKm8PE5pTEixjNvCVgFxwq1vTgPHidWJXsKyU24zSC",
  "key21": "2Es9SSLmerVhaHAxP9ZgAf4FSQnDBt15T612JFeeoYcZRDqvkEWR5LSi6ucRcv1kWkPW3bCEK7xDT8XZv12hvrUg",
  "key22": "2Xu8oBtrTjbpEYoBBtjBKmiuknYWXdZHznHmVwFJPHH6NsxUUNDmRgWiRFgEwvcLbPxRmioVqUJNBwSVPG6kkpWg",
  "key23": "3Ejz8SyS4qfXrtrfowijMaRavUwKFrjUet8tDuPpw5Zi8URyrEYeER1x85uDi63XmvSkqQx1Qtbx2f4T4yvcuFbU",
  "key24": "4XKcrVtEaZ25b7rYFmeX6SX1pWwKES8BJxAP5AqEB8SKBNCWzdkGKsFFr1uywvbk98uxfJyGm4JjyryxuRzkUKgU",
  "key25": "sBpoAyTrF84NibCxKiVbRJ1qXdPvVuhnRA8aeCxw7DYu7YhKLiamStN2ufoisdcZf5imT3qwGCXavR5BPA8G3J9",
  "key26": "4Kok1RjcEDpm442ki1qpEULPfKcwkHpV3HE1dTSA4grq67vbmZQGr8xdrYJCdmb9RgVFKdLwKQDC42Rf36nE1Ak8"
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

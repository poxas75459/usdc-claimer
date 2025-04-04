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
    "4LQt3K2rArZD773oZVUhdTyEre6R7kNwCWimq18D9bFdS1h5u8tfEfgzEUmSu1D9xWSwax4BmPhA594fHaEtAgEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9yGbjqnVmdJnKdenDVf6bUGguaxYm1BGjRJCTuH1N8g4JCyWkfdj3B3hv4q9To6zEqibSbzXyH1RgTJNbdaH55T",
  "key1": "3m7UwDQjMqgg9HznNHjEmQ668KvqHrP3kjVP35UEL55viAspRe8khBPnGmwFwVw1NDx5UrWe8X7sRVcy47zCEnKD",
  "key2": "BRk4W6nGdzpr4tjQTMWvzVLHXH8VSKG316mZy9VW9PNygBPRwvUT2WRnUW6hexjCwAa51kRENxvBVn6iGSGoWzs",
  "key3": "yjwyoydUXxjeszKUzrwo1WGc8bgjNFL3EgmBCXFvqM77CDrxjHDbFEg2qq6QPcnS5mX9oZoaFGPpbiFhigHBV94",
  "key4": "3ZkbQVnBZboJR47or3L24vPmmKRwqmdg59oVxyBzE5cfKJKfKsEUBFn71VQXkpcg5G3nwNJ5Y6WGhRabznx18he8",
  "key5": "2sMpxFxQWnwXSB8khBKyUhatFYMPJDvFTBCZA5AzTXX5eqQXxLCMeHPuUBatUDDkQdRMj2o8LaeBsKoaw45uyiG1",
  "key6": "26fR8B2XDXYvYvC47JtK3NWZpZbi85TcPxAJ1J32yZr8H4fvYQhg7SfyaYqUQgSbPFdrs4ut2vqxPwAwvfs4u9dm",
  "key7": "3oGqvfbRUjrwL2dJa4LWRFgE2YpyiUAwhoCsB7SDmZdc1xfn6E1FVacjiFATKqUqGp8ZVERNqeiHVjsWzt2Sxh8F",
  "key8": "5ht8JYXN8fgQyfsVxb9AEp41RCcqth6aPrWP8ZHxDFzTUjC4jL7XH8nKDfKaaWVY8rpHNLQwCMJMziCiP8kZcUuw",
  "key9": "5vZ37ehoGPT8axGjAvGymhH3eZXN2BtGTwzLojNdo1eh16RFUjEqADTv16J4bPSZWAHfb3expo2WCSGDxKKrPM81",
  "key10": "2UQJ5pX4JeNyceaMV8V6VZzKD37AavV3MLWGVmnxVzyKsnmz3q2kzzSZaTT5F6qZJ6DvPfSUZ46bZPSDUJ6GBtDH",
  "key11": "3LKD77LhjJg8rq7EDTtWdRsD4oViYF4KTgpKeHht4gaPgKZRzfMRhBjhDrVntEopYwb5MfVh15e3kLw4zSvRbCYo",
  "key12": "51mYadYZpJftewjU9TNBvWBgRcTCqXGRtupHdUgBKYmMJmy7H1AEFxkNVtXqhb6wXTUYRYUEZwUgRFWTexw6d2Ta",
  "key13": "2VxWnEkiX2s3TuLPNifwFX3Mpbxwo1c68V1gEye52qqeAprAatwgER7zC8SA6Mju6t2RqiQjzX7zCTki2MTgr82V",
  "key14": "4wdd9RKNc31xvybgVPsq16K24ZrLVVhhXRuGvnDfsYavhjETcDUAGnytvij8WaTqx8c7APL3B5CChWrKhJdLRwmH",
  "key15": "4gaqoGUiBdNfPxB1rxZE3GJ9FPFGpFhAauSVyt88JM1BgJ2i8XEZ52gaY4nwSyixitdcbfoyFzsqTZJAXrQh7oho",
  "key16": "35o6Co3TPAdPKcHwCKwRgQxSsaStZTNzPsyArT73YWAA7kAirpB5tkn5KziVvm624cndcJB9gNWgHSKp8YHSLdPP",
  "key17": "vq3oiv4TaiDLJC9mJdTXXeCgXTtWBZPmtng83wfasMjTVMXA6RxQzGuQbsdZgCcEPQHKcqDYR3NBNyU3jfViu9m",
  "key18": "5rhTdx4Kqk2SUFgtwo5aLV9dJnusR1Fg1tDsrPnNTo5XRu6wLg6J7mYd3ppuT3GN3qTDLyfcN1oq1WJHxEbdGQxy",
  "key19": "kwkn8CQH2Rqvv9Fszc2t2SGpRJ41FEfWQv9ApTf1jvcjagqSkdTjjjBW6Z1Ssqp3CZAiCb2dSzQBKWsRCbRkfvS",
  "key20": "dpHJNmMRhYXs6bCjJrdRqxNXh9WzgY3ycQfnmr6GjoSb5m1MLHahVw1VbxPvaszn1NCb2d1tK9FoXpG3HksEo9S",
  "key21": "2cK9aVnWzc1c4ysuiHSBs6BQSe23mFaXJu3pxL6AM8XHSNFFmj1arNeAmiGEXyR5xP2T1zZYcazFaHQsbViTm1RJ",
  "key22": "2WnyLbZ5cRazBSb2fyvrSdm33PmpCU7A8qPdRs1Bjahc1YmJcruhcRousLpT7sao7RCmyXyjZ3Whv1gDbctGSjC2",
  "key23": "3wsEErc1tZ3YkUhogYLB4rkpYMhKqG69cBLj1iKuH4rEY6yAjDW7i2CycGrS3uuvAEtN3mDw68smD4vmbfraioRQ",
  "key24": "3H2A2oPtDbvKXyHSc6aQnrk6YVQVFmhtbteG17HBv6nr1d6Q3Rp5zAWujdQbSgfS3ei9guLHkE862gn3ysTQLMKM",
  "key25": "3R3MteMSbqJ7VY3SBvAtGvuR71fdKZYVDkHpJG4yyxhSU6UhgqUn8VHakNNQBVPbrAPYd9ibf3Tuazr3wJqzbrvC",
  "key26": "3iKxE47aY4bAT3d3kRSJsmvDZDpyc1AxhXDNXa9qwe2r6gWfRDMPaB5eJcaAFQvxAo7v3B62P3RMuGUMUyYRHP7d",
  "key27": "3opDmcbSRtBXYZXzUg9JfbL1e1BrzeyCcEC3U2HAP5opCuLH1DkpuvRN5qNznhcYLJ9co9vug7CV96UeUJDnHQec",
  "key28": "3QaZzM8esNqvd9b4P8JZPeiYjjecguKkw4bcwcE3tUZG6gCRWz4HPMWZ3fMPoAZzUweW1gKyaELYRubyTysnA2bT",
  "key29": "4kKS3PG3j6RtVRGyt3rPHdnAdnFyZQKL9ppTbv4FQVSLR1qwFExGEanDGavaTWJEThsMkGc6dXKuSPZBjA6L6Fuv",
  "key30": "4HTUsh2xD4VQ7NBPefkaMAi39TtEnqysGcqNkqgFrtHt3wWYSpH8Pu6J8izDYdG5EBH3UjajMTYGxZQssxnHpRNV",
  "key31": "5L9SYzbvtmxNX7qkRnk3UxbkJVVjiK3o6tskBRhuy16givnmBPb57iSAVtoeWuoyWA3d5tyECodC3kFg9PLsaBdJ",
  "key32": "37sFCBiH2g91mCc5P2c3bZxDwotQr7cp5WH6mHc4nfYnjLS4CwTahWcMbMJYpabnVUZVyVBiFuKAgRYr8DSJTRaC"
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

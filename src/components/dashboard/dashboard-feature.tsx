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
    "3amEUmAePEcVBPTB3JTZ1BAwJ4aYjCzTjMk9YPP7mzhmbMA4f9j5i6r1ryvXjPVdH3wcmKuWRstzuuCQXs4im9qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x9Nj5BjPXjHagtq1Nk39jJwsqKLjiJfk7hY1W9ym1RsH1vjKM2knxGJvnHa8HoDvHpHNLeUvFhzJH6ezErA79vA",
  "key1": "41GyrgUSrdwRQpvqAtTAWVLDGTja4RAMdHHgq6mtn5CcyZ7JQEdCfzJ4cmwhHY3gHTqfsZJLaYTTwc5dYYBUyghF",
  "key2": "4hU9JSVYBmTTvKz2je41frTAzRCfJzE8Fe9BL91a7SU8ykKPTDMVtdwpcMm774XGsL8gJeDRqGQHcYSTAuDhR7BR",
  "key3": "4c8wJWB7T1BSBenkVH1SQGbnC4NCcGHHactvZgt6TxPGBsE8RA3pkmQGnUYezvxXZmJ3x8oqBghbntboSiMnjaun",
  "key4": "7yKBUed3PnJP2bhaLJkscZuKfucHbcsUyPZgvcL4CZHPoXUNAEc9impGtFvPCmLPWnNVty35Z74Z7Ua2gqZe6hr",
  "key5": "3MfP9zedL5jx1dvXS3nN6CSXGsGhAqWLKY7jDtdFqUUq7F9fNcsHnyVRDqaL4EmMUwBu3hugXS3YG6LH9ywjw2BF",
  "key6": "37Mf43SrjkHpqRXHY38mzMegucKj9PrshXePE4WQvfqPFXATfdgntWGF8aAFnBv8HuSPeq7N8FU2yT7SeTTmk1HL",
  "key7": "3Q1AH3bbAi3nZSHhvJMKVqbKnA6vAx7GA8dFggLHwWiCwxbp7EhMfpZ9G2QtH11SbGxUXbyTKeiA6cVXeiWLG865",
  "key8": "57buDjzE1DtdZWDnMwjMFk7HrNre4g9mU16LxZV9Z9yG8kpKF5mZSCjDQ8JsAn3UiDo3gaUi62YjWix7tWNPmaJu",
  "key9": "41nEwp3h5KB9k5cEb6F2XXg93SqZaSD4KaXgp27tBQ1NysX8rdZRGQr6yr5vi4gsHuofdEmoB1LUNVMRk3hKs1V",
  "key10": "4cJttwgQ1mwSqzxtcNJzndhRuxjboPquitT52zK4bQKBKX8DdyF8yfg9695VJVBrjoxWRUhHRPrD3oHyWPuEqLSz",
  "key11": "4VU7tmXub5X6P9rjDw78Tkx5o5TnuAFvHdAa8tS7amp7fdirLMQYjmGpg368dd999MVGvvqNDNd3s4qMB3h97zFG",
  "key12": "3Lkw9U64Ho9S9FBPbk1a1CFHiZU8xpUUcBQ3ADz2Wzuk69RiUTC8toiWomFaRApL1PTtvr5dRdyuX4HCBTxW9exv",
  "key13": "NQaqXXuT2eWUUDid9dLh56vYZqWQrRkU5Mafn3Jhzic4Jir3Kcz7FRdcUWhYdZVgyX3FUqpvDDpGdEyN8gPuk2g",
  "key14": "4DeTDXxR94rAmxbrpokD3d3yWd3mkteqZ2PHAKfo22bvYVypudN4tP5TPpBm6FYH3XBfjrZwjqMvwQtbfjvqdris",
  "key15": "5S2LJXxo2gocovq2H28vtgEX1BkuQ5sBRNFUWKVSDaEpA3cttN9CJvuLb7eFz4yTdHuGJCy6GMJrtS6mBTvUqKRX",
  "key16": "5auoN1Eb5ve7jxwEto1yRK664adAVjszHuABUaVu4UKhgR6JkGuPENLNiHKwxDiVJ6e9XEsRhTof22xBajjKygc2",
  "key17": "4H8LPkdPzZtVtqPzEV5ibAVB1hNxX3wj4dRzM5CrEGZgx37PUMA2zRocm3PHQDKhUsjqeckFJCos6r2QkzNAFT7s",
  "key18": "4bn4DDFFp3DkBT9LSjWRHc2yaVK1RmCMZUodBsuMmzV3PwXSqZo62mpf4TfAniQbF6FkVUgnnQZeUSuk6oh3DXuM",
  "key19": "6fvYzfm2CZVNXS8xRdHSp2JMxTciscLtZ4n33ptfHFsXwudPEKB1mByXGvnK6yVkDC1AQ2gwFSUzaNFeKxDBMcj",
  "key20": "39MpRSoy34AoUmvqnX7wq1T6kVaQY3PpFqndpkQXwoqRa8accd2WgEsV5duyVoKyjLqkibqoDLJFFVu8m5Zaigih",
  "key21": "3k5srjG3G9KZtymtJPh1hhHTrBzpHpxdYp6NKpHAkwR3egExPA1kEGwthew7CcTCmDTq2zqB1QrCdFD6Kaw8hM4f",
  "key22": "4KHkbZRNPCeqqmobTcMC1kkZdVtTcFeXLtNDRsPCB6bGhZLr517HMNfSyaDpLBPfZs9TpRrLAfc1hRcep7ZRJsJu",
  "key23": "51AEw2eEtUkpT4r4rYY6gjXAwLRhZiwg4WvZYp3B2V3shtNpA7usYLVDhYDDimcNiMDuxf5fZti7DsjFcErMgPsw",
  "key24": "4dTJdvKqhxUmWZtF5jEXvdGvfARVYeFeqpSFy8Bz1XMD48suUPNVDhs7d6PWZCkexEHhysxh5NvJAXVbZ7bnDYuK",
  "key25": "5BGjBy3Df1kgDvT19oGPxA6B8dL5hDEXT8ZVsXunVEqvYY7SGTgjgUt4tdKQnrtHEjgiF347Z6NsPKJNS8q7SPZd",
  "key26": "4ZEJ9WRiNrxgi2PqjMYnmxJqEvFyyX2ziAUhxbs5MK3a1rrxvVghhvgcHfgbdfWyGK3MKu6fK65c15xiBfrb5xeG",
  "key27": "4zNoLkoJ5DVMtkBXCWz5S3DzaVfp2jyFaNKW98jFLPtCYtzq4cbukNBYvmA2ZEDRXqm6b7EVok6wj6AbUX82TFFX",
  "key28": "4XwwphbRnpbWSGZVVDiX11ZyN9DN6a8xrhHX1Yr41Lui4nMKxAA4wDvghJoEdQXGN4y2o9z7K8xB5f53Ejrt4aBm",
  "key29": "5sSdGPdYYLsXHqphU2rTq4kGZAprfCVTc8NfKWxabFoRAy3znEPAnAG1roHcT6vsHMSmaFct6QBBh5YpbBCAXTPE",
  "key30": "t8yTHUdC1zod9e2EYzHQFoi7M7SXPp7pgMedyPLZC2YhowW18CSLWemcJuMTquYDha5vCX7mNyryqTFA8VmLqj2",
  "key31": "2xDN3znTmB2KgAUGFbvQTxD9DDTuWWcrWgg6mMfwWuhdLSrKakPjGXLa6TNwrR3JMXuhvdAm6Si4JQvYCmwA2PQa",
  "key32": "4t5H5x1RpjDeRKSnqmYYNXKpJwtL7M8W8ruK4pCb1C4nvyYS4xom8yiExUd88kma7tNfKyh1YvXhsLvvBz3yaegr",
  "key33": "5p8B79taJN1getHsthAqTBgvSKSot2JmEDmJMdyaimZ3zoaVgDGy7HuXCRQLw7MwcGDSGvUidqjgdknzya8yzuDs",
  "key34": "2VWpCQ3yf9ih5DFtEUE8Va9FukRgrkvE3cfjmv2sFadojifR3jNhJXAFY9PE5HEBEm1YzNYyXs9Qs7Mb9AvuNGRc",
  "key35": "HuzCcMgNEh56bX9pToRYoLZh7cEjSYtfn9caGdzn2ZARY5V11kcHmzoAfLBWXJ9JKnevb49LuTLenoT7dNUyphq",
  "key36": "oYQBUTaLhEvjmb3v8GhLxoUeNaRvHopBi23REVnzpWRNPmLEN5vVooLyJAwJFaoRiWs8wSSD1wB1EZP5NHLYNK6",
  "key37": "34V7Zjb5E5Pf2PcnGb4PTut2tKq98xiKsFDvfHFByxru2rLFvDg28qckpT1uc25tWVD6xjz9DRFDqpwJS8MezaFm",
  "key38": "KD11xNrSMZEvG5u3zLHprEx8yHG1Sy4mH4mcf1S59qT1b4eM9aJjxcYt9bbCo7ZjroyiDszhAHfad8UpvxmCBLy",
  "key39": "5SJwmA8QVHQh62vexyMm5e89fAkMrAnqj6hSCFB1nYpAXcYzeS1QZBpBt1vHW82EWxUDso5GPzC2LQCHops8JfjY",
  "key40": "5msoyeLhqHanKShZaj73METqWCYcLsshhhUxtcmx1vJTzbWHGBuLei8NWZTB8kYtv1z88L3zLwwQvUkAkCpWZAvr"
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

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
    "5Vp7NK5ZHjiEpuvaNKumvALSPLrGCUn5jNaZWdQbVbpPwibBDyWgYRFeYhw3HHMnySKTkZiUEswkD2tpKbajeh9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yNRmZCqi5rBdcDSi8WM9GBF6xrUcCL9NY1RpC7ND4JE3vVe6H47a5isnsg7MmmimhR7cFKGDhXYQ3nKd63q9G4j",
  "key1": "57Ukzxj5axAymz96ysc4CPdaC783eoTzZxXFLd7mYVpCm6xD14XUaqF7hvUagAs6rJjbGsmL76qiKHMshAzyxAnX",
  "key2": "3qXHWmzJMLMkENCJ6VfYTUqGSMzScAejzmp1vSRgjJJ9QyHtNt6pLf9CxSjSBgsg7W1n8VHSK1bkcCFXDngJYhod",
  "key3": "5tfZP47Skx94MgxbEug1ySCLc2xGtT47BgBWeKJwYpvaHxcFeVqr4hf9umK6XgCDqvpVmyyyd4yo6WUs4ksq1sRK",
  "key4": "2PipNx7aBjoM2kBjf6bWbhmSeB5GEezNJ8GR97QKmiHdz3M3rGDa4qgkw29VhVxPLrgBi3jBrD1hvQkVoPreohi9",
  "key5": "62mYp2YVruQFVYn1yCbpkMfvqne13cpNEEabpQYipv7Z33UithchayenDwnyvvyQzWEZSzYYrZHvhmKLgJ7kCW4E",
  "key6": "3LWFh7HycrmAQmY5GgNNYw3LrrPqLP5vkwYB4Zq8AWrXCgnW5ym6571RFphU14xta1AuaTENoqGHzL1hFdVH2TG5",
  "key7": "4y2oDE4Qwb5xrHz2bEXmMvmLRdn1Zbhy1hGCTkSFxS9FpvYtNNzzSc4HcakmZT77gQUEiwyw7MiZVLJp327nJwUf",
  "key8": "geWFqCTjPGKxGq29DDT5XJNQ2A7bwroVcA3UJYWq8xiKsRtGzA2eUzD6ueiy9N6ohXtccYYbdH5QmUo2UgAtvq3",
  "key9": "4w1FuvNkCDtosBM6j2mS6ieSpzfh3orKFhZub2Awtd4mmwCu3xfUQf6XFJ3p2KRHkMwSNrTHTJFpaknN8idfEMtM",
  "key10": "W6iwkeXwEQ6iKTQTbx1LCSDCP9Q6HPdjJxNg8u7Pb93p3RwQLVzLRSEGWUNEfcTc8zskQSmStokDQLubbxSj39y",
  "key11": "Nz8ZURV57Cucb2xsjpdRmkypm94Qs7QbbZYddEFkLFrKswTroKUX9M9wWJKSGCHGmxbZ2HBt1srewW3vimjJGmz",
  "key12": "2MAmwwCnbwqPUuqCnRmC71xdmjaZKCyeuhZYpC4QNC93cvWETjHXZ6uY6kiLzSr28S7eGVA6v5VqWD16w4WuJHD",
  "key13": "3n5tbeWafkDTwuSHVoEVcDFDPZ7b2ZbS8zLjouXmwMnk8ZFMiqzKsakudaavpq5NuNSYRaQTnUJZQ1dLGEpX7xij",
  "key14": "24gZRwqMxuWADWJ8t9m7j273ZvvUZMHWxNJkzUBDEfnKDxM6T8PiGxw6VTioMBjkGf7BsGmBFVJQMx2riXiFZ5X7",
  "key15": "2FmTtamtU46ZFz1QKahr17hWWrVESpjm2EQ7iVvUe3TzE4aKznUcqkFVb2MaYyjPTyQghytvZ4HviKrEkA5hSaF5",
  "key16": "4Pcn9zWqZwsNF3KydymSekVaxrVeHxvULSng2iH5SSufuppx45QoqiwvVNmKKesjGgJuJYcfxFejJj5Wi6ecv7X5",
  "key17": "5gLeBotUHrRLzSS3FSH9MVhaR6DM1boGEJYQYghsS53J23esYpmMKRaEkWv1ThhS95buRTHnKemhuDwcHDjR9Ffi",
  "key18": "4Au53TCsAdseeE8JGdmNHhUwwufmUjp2hZ2buH7YioCo7pKYK45xgciixXUvsvSM5bsEKD9XPyc1ntozUYtxk1Ep",
  "key19": "2xMKUdJi6uScWT6ncfVhjvTi21jfLAThgRReZ8aML5hd7MTUHz95ANpUmTa6Fa3TXXfiBYZP3JGiUMfBiv3URYRr",
  "key20": "4GHEoVFmx1KWz74N6JKBdAxRhMLrxo5tqdZCdVAZfWt3CThTJJC5UDmbx2eLSkm1AD8DHyUExpPwYByrYNdxduAo",
  "key21": "214guaWu2pUXUrGDVGDEwmRgcxh1BVaXzuLBTj4wCst4kVLVpRp5YxfbXWUmrumNNzudZS9r5sPAxCD7TeUhPE6D",
  "key22": "2byAY39YxvJDtgaeZMQHNS1zy2bSBKUN2Uy4nrQvZixES9upeXRohE1DpfZdkfEi5ryRKBZWbqBG6wwDfd2Ccna3",
  "key23": "3ods4d2p3KfuNgcsH4Wm6rk33qrsuxMSYHdTYnG3ZwmnZmC9FTAFhSuPNjiZS1tR3RqFY8quxKhEzUz4h7QDCZyY",
  "key24": "hnczXpuxjwLZ6A4dLqv9sazyk68xPyHXJAAcbVEY1GUpJUWhnzbaCNbmA3RtYYnxQkc9Fwvqvvab44QrE7Nssqj",
  "key25": "5VFGERPM7TwtXekRSPP7n3KCnSy34iNWXFaoAN1V4oZEFESYrrmGrVSzjh25Xd5tpTUXcXfbY2ar7busfVtgEVBF",
  "key26": "Ku64tb4g3pA1gty2fnnauydr97Rj9XSTYWCzrUdg9GByyq7naVnE1zsTS4E5gtWMBMddnshX11J2SUGtdR1nsGt",
  "key27": "5sqsXu6EeViJQFQn1Rd7XkC1BxH9SZsTyA1BPnJ8fLvpfhGECrGG4wZFbSmb7PEYdxharsXNcR3AMjRAXUnSo7Qp",
  "key28": "2N61zx8vPg6WF72jxTf7G5RRpTZnnEyggXhoVDC5Moi6bLv2ifFaGCCzHQq6gK7oAk9gETyTTG2aeU1ZisnnSP3n",
  "key29": "5BuWCEvqM1NnwJXfxDV9cFntD3QXHAmp2PxYNx4HNXSQWgK45v7gedPaEXzzcnCtSauxAUwoiLvAcsbrEgVtp5Kc",
  "key30": "2XKrDnCQjh7ge2rCFZBcVtbmnAkRCn6kDKAegDzU4YgRZR1GSeH8VJFqk8ki5GkJcxmphm4pBhdARUGFxNByqXrA",
  "key31": "4mnJWj43zRf8LnusnDi3AsPgifbJynyBzTYBzNcrjdTbSxTEpuQ8bomZYbcjmvFTKZq4fSMMy8afvFvaCqRRqCHi",
  "key32": "62wjiHj5K9wD1Ysq9xZjmWPTMcG3QZVCovrUSPRQoqSuLuyyME3McPyjR5gRTnsLZagVsz6QHD88LtKB9dwJ9Tte",
  "key33": "4XxT4crcfww1GCVksJRnEGkjhwF8wM21CH5Rt2pMeEDop7PSQwnXHs8D83hs9HjLsZmVCzqNtaAZfp593TeFKBPA"
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

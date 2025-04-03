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
    "5cCMzdEFjSBMukYrH4aczJFGd2hgaQDnbwmYx6VKR2DptQdNP7zcquQxW48GUifZczHCLuTfTW4Y3Er3gXyaJQVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Af9Zri7yB6tQfyiniT9dcXtwnRnP8dCxHkmYoSSQU3VQMQ4AgYCsgHsugR6AgwiHDo93HHPnWLbPuS7qohvq4vM",
  "key1": "24qfFQc1ke1bemsa3JGBeoESjpP2ymJ6ANts1Cb7VwRtR1WLB1PidBDg2qSfGG3CCkh7Uj2ZAfWH4Mpz71JSwjRW",
  "key2": "3w1Eno7ZgsMZjQ1g6xvF9UfMEAmwii3v5ox9FisJscvhb6JG8ehybq5wihafPZhq85Gf7PBeu6RW3dsDQN8Qtyqf",
  "key3": "2e7YMsFCB247yWskqzapRVvXWy1tSPuU7GNjkr9LYXBq8PqCGr5jBLihrE4Xh96No1sVDJkqwn1TUpnC7KB8Xqq6",
  "key4": "3T6Z1qgLdw1w4b5b1dWGpN6E4rCgJJFBQhKsYW3ayHqwmbKijnxoCCcTtmCLQZwEAbbMu4JXzTw9jwQS9q5wxLik",
  "key5": "4NY1YxJK8v7xwkG5Yb5RQNcG4tTj3jAYif4mvbDjLECcDp2bFMBeiEMBQbLXVkPqzMXi6r9GNSCu8xMcyekXXhQV",
  "key6": "3jPHx5XELJdaGM678mZxJeZNX9AP2SvMhhNBoxFvDyVNKdWB27RnNji7MnGLKvezYjt5keymwhKjskvQYcomDYi2",
  "key7": "6K53hnVrWt7ZSdGVMGB9xA3YKppt1BJ8j7AXSBkZdjqBJAGi5aXGrKVbQC5kJ53oUY8txPndt2b58NqEvNakTxi",
  "key8": "4FJnZH51Z59KBUqmn2JRjcMvnqDM5Xb6mbNX3yMGj1jKDp2kMBDd2jPqGX8tvpf7pvqFBx2ctJtJLKUEYD1Q8Ye7",
  "key9": "4hvCks1b2TpQ3Aa7qq9nEdAUYLq8LuAC94t6DgQw5S8TGdgMQNC5UDZWPi2v4eKifXG6CekaKgZYCdYEaMVkh6Xz",
  "key10": "33YwFPA34rYC9M4cuWG1k76dA43ZXWNLVfQEJ4UiQjnB7ddKKpUoz15jeHsHE9PXEmNBHRJnWuwBnGELP1gdpFEy",
  "key11": "w7RQYgnfJp46gagzPHivZVS1wfKropeZXC7o7omxa8jzADkxi4XWZayggBVhCpMQyTFDAdHGtwZ4LS6jmVPyK4K",
  "key12": "b7jTuLZq1bUVpyBGkoC1MCyun6sYxM1UsdPd4cZTqmiN2HanncTv9VftKysVfeKsCJFv72pRh8k9GSXvUcvs4BS",
  "key13": "dRCurzixUyEDg6KEAAPueP57fAYcTiJV8kptruSFpPbBdv4WiJPbzVVprSRRhTb2xWPAhcrsG5HpUwp6q7Ffb4r",
  "key14": "4mZfv2eFAJgmGyQyTWHYxbGynGoZZSWxRZy99bk9sG9dc6vJ3f2t3HvE7NfFAZqkmbLJHh8EiADnJHWuCi6ktA6B",
  "key15": "3GuhWEuZf9yxwuHnfH74RY9VWxWE8QezEpefmuRTepTbJZTCxV6MaTArQjZK3u7FZ8zw1BHkbR1W2ov2nKEiaU35",
  "key16": "3KpkVqzpyjpgiZTzf8XGL6BGxxZfhkxituSAbMvAsW9DurEJm9PgeuNterTY8Pw9MSaFUB3UxhdDzEYxhV3kyFi8",
  "key17": "2hbquiANJr5cdhZs3iC1ev1vJvXmnWUyGWM2jmXXYsjcagYpCePp4k5Ab3YhpEisx6RJSNQzzjkGzoubcfnbiXF4",
  "key18": "4BvSQpGehrZcCPcVGfWbEDRPj1gHCnrBvpJcLoGWFVwCqhSQKHXSyYdTR9Kve9TH8HKrwXZQREC6AuWT8GAv25cN",
  "key19": "gSz3Fh1DgF7vN88HaBgV7etyfri7CbZRipYLyVMSY1j5bsQsTQX9JtUKPnztGkWTvENYJyXVwzHVzSpYDGGZJDq",
  "key20": "5aQe18vRBmZ15AqB6FF3uu5xLv8pfL6WygT7irstNJ5ijYazDLy3pP38Js6ZfMmXEbayFteX1SaV6h4V5wuAVqNo",
  "key21": "4qAuzWHzAMXAK4NbWBmJnXJpr5hBAM6QF14uzgDb2rVDiDT9WGsVxh1NnuudPXG7Cge9iweRVSR6Pt5f4haP5MZT",
  "key22": "5YJmSq6VwkAfdp4mZHegqXL7s3GFt9WfkvURuLdzDXhKbJq1Y7c4kzKoPhUyy2j65FpjpcqyticucHwtJkq8Sexi",
  "key23": "DbVUnh5QGDxkqLWFMR5Ft4yK1n6aFJPtcQs9hVhYJPQRemP5BLjYFvWZJXKgnTby8hqApoSB8psYLTLB6FWBGHS",
  "key24": "3BiuaowjCTAnAuX2T6WLcxGpiR3hmEMiGuyLetrgUcWpVEKWBjdSWk1q5sBYaa4vPNdo2LyHAduNfTsQxppGvgSx",
  "key25": "3ff5hnzP2nWGUSrqf7NXnVzXadJhKt22TLXQ5XQ8pSRK3QZoNCKfdwpyjMi3VG65iXenivE7DM2oS6Exp8DcWCn6",
  "key26": "2BYR6rAv8hxKvzZK9DkSSuinLsdtH81RJpahZdsDmqmZpn3gxtewVKPvAA4mTfPmbP7RhRxRGDcAFXCm4BPiNVWT",
  "key27": "myusQQnPpa9uET1jew2jq3EHbJyUC2jGpEvTuhUm3vSRh3csWjNuWC1QWrDCAYcJM9hhPwx2BMT8bNYwREbRFqb",
  "key28": "2xZXxo2is75HmLwPEHxRyDLULLw6dyUNYnerZp5QraumzG5EwUzazUEjFjywG6VPGdzbmX1fTh2aCrQs2SAu2QVb",
  "key29": "4MqnnzyZkp7EsmbYddJ9nPKH1Tz2ukfPHHnzVaCaMHQJiMgu9d4dZmiDGjWMNLS8RDwqEE39xJn4Etv6cH1E1GjY",
  "key30": "4bA3F1Gbmrcot6g2dzxgxyf5ijd6L3diU27mG6zoztazWZT6ZAZkqmKK1ixWcpKgNi6Rp68PYc8uZXGgmJeDuLgs",
  "key31": "SHDW5hVg7UAn8e6fJ9S28FurNdGhL8L4JGzcrfivnPPGze5TuoteV3CkfwdtsPgPJkX9ui5ojyBMLuUuCCw7FMo"
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

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
    "27XS3vyZmsnakP9Rh7Ft4Wb88PP7RBoBamH4D79Y8bQQn1jiXPQsHAYZQC7ubq3AT1ir61zshr8JMukvXXQzY5hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zam6kNMCCn2j2QbmfRqP124djgHd7BfeX3fiTTKqUYGpfNDo4i2aHHqV1sa3PXwktp7oys4d8nTGE11BbQSEVMs",
  "key1": "3s4S6iUAf1vev9q5zco3RiAsGvgnf1uRCCejy8rt6FGdwXk5YkkDdYHiKg5R5yLuVwPtd84ikQXXHVJ6Tjj5EXzt",
  "key2": "3fco8KzsZAiQjHuK9AAZduzLMQLZVwRHfYyMgm3tx4tgAxG6u8cRQYrFAJXPLS1w11z67NTYYuCKrQegd4fL15G2",
  "key3": "3rv2tWRVXiPo36RSKKWjXwY7JVddtjnfAVkUf555sv2RGent4GinmdSgiw6b8U6Ebu7pXx4RXiNiKdPRzLuFwvT5",
  "key4": "62F2tZZHxjSooHT6EVrwD4Ym6KRyX5CJrZ4Fb7k4C8wiiqHuJyHxsoReot439bm81EDWqXPm2cKv2zxEsarXnNgg",
  "key5": "3vxBCM7nenPWEkGMd24bbz98XEwcR4uUVF7AUA65Kz1dxYa23QosK3kEhkzezBdwugNqu71z2h9Z9gCJbKAisBij",
  "key6": "5tjGRo5apAu49N2UgMUUT9UnmtgbS6noLyHChoTpfZXeujDUD4GDfj5xUZbQLV95i7UgAgicT7frPDZxuvrffkQG",
  "key7": "5ZYjY9RcaBwZTXjxSZu7E1f31i6BdtQHe3MigfiEYXdxZ9eJikL1xtFqmVGdYynWd75D1VnH3xj6vYBVGJTeEx7K",
  "key8": "48He38yVgudSkX1ZZveB2ae4do2rrL3L3ppbc4mFvtN9Zh4Li4gKj5yPEs8X3EDwEpnSQqrHJ5Y2LxMfYbFEmDiu",
  "key9": "38abMHYuEC46v55P8CMmSVABU4t63iqWhL5F2P7SKgZNJVPgAsTke7Zq5YyopRHoLGHzjfwJKub2uWwdQUJMRkz9",
  "key10": "rtrJCbAGhpUAffywHKhsuXfqnFCLV7kPWPheUmECgsZZsZK1YzCEEQy9nXiWNA3ntFaMm2BGvCvfXicjT3SjHYW",
  "key11": "2rbQxUdsZyR9WD5pdFhJYqSz54ZFGWaXGePM9Yq7REq9vJyAAfETuR43bKEQFNdkNwW4F6jgxvbgyuLQ4J8gEe1S",
  "key12": "3cLTU2RRJudyjDCbq6jREvm6tHk8Kj5a95wMQESPxvZ9bPyN9LqsBBsZYnBtLzppxrxSKyKyjMZKQkzQUr6akL8e",
  "key13": "42uqPxKuLQYHbMch8JrRF5YBmu2aRwP76R6P2C7MFYpyisygrw6sHEMp188JTtNuNGpv5bCPGBuiCpbMDvQRnyh1",
  "key14": "zARdSgp38DCyv7SH2vVbaqAqyFsPaqopWXYQqZ9mZnoYAcTUL98FT9X4aZtecMfh6zoyH4wTAD8NDGM3Ahfabxi",
  "key15": "v9SFnLK99Y988mhpJW7nkxR5RwH2oYwDbzZHyQVvovn9G13Xk6V2vXbyucX1S4MQfAzmCZcS9kD8DW1gLScac5F",
  "key16": "3447Q5iLrQzogUKufPaUQGqeWTTWKzQDqZxdEMHqZMhZmUG4w74C6Ta5b2ezFwPxgpt5q9S25mME232hHtEuPLMP",
  "key17": "2kkczCm1bHMBhuwAvUW8V1tsqV2MBFMUukzpCMGhyaRhxVhZvgKu8KEcWLqq8bskwnbpKSi7X5XPNbg2izRmXtxx",
  "key18": "shQZw37SLFt86Hwh6MN2hsS2R4sn8yurSWBNqXjcb9orF5nSEcLMrrKWwdajxvnWsXwdxz22F6uRcyJ25yTv18B",
  "key19": "5BJp84uFSEw912gVFhxLu2PmbRtBzAYtRGeDuZxArzJ9s74xwhk6mnKrbrKA5AqJgP3ncZaBpGy27KnZJroUrapK",
  "key20": "2YLRbQavDtfKQopdx6DUeXmg9VbjwBj56E6KMuLe2r6dyrSqUFu22M3n1fDdNk72VHasAVC9uk1rV1CHMX6tTW3",
  "key21": "9Q3tyordjk2dK3kzGCgKXnpJAH2kPgGLjqp357LZNpsRnjt5dqjKr4SW7a6GdCr1fgawEvkCdesWun9oEgdWn74",
  "key22": "aEafJXL3Re1dH6ba8FCf1356pWujjr8BWUE8tY8SJNcUdHK6VGsd5fcvZAtVHu8nGNvdY3U4MzBuUqEbAFox6tW",
  "key23": "5G2TfSLZcoBPwrF7ncffVyo2BAWmBkVb6NdBxt2Wix6z2fMtmvx3S64GTpYzR2SMtqNHJRuJXHVQrj5h6ZAuJcTk",
  "key24": "2d811EwHHyx6tJpqZPhZwGnBPaBTvqA6xJjdh1oZrUkoZLeFqjqy4UowvHxyYH3hBscqw56ipej65j646f55vnmv",
  "key25": "59ZXjKXgMu9UVwVo1xVN2umL3gW32QmFYNzEvmZoXST5YPDbkJVhEXQwQfYUmrv95RC5pkZFyaYpSbWuTB1SoY6o",
  "key26": "3NBWnWWjmC4JK38mHeAHpTgrrRf3CTHxgVDArz2YCdNX5GzQpMfziarVfGoVLtSYBkLzjhd4cJBSLGE2cf6CFXnW",
  "key27": "38Bv9qW79dWVD54WB7KzGCDFbwkiogKwCBvDKK56226KHSVBxYRSBNhcz891EMRgYLVNhuiyAm41psHQrcJc4Xma",
  "key28": "55sgMBWR5P16TT48T54APXtQ3t5neevh7yxKowJadGR24Gnq18fki5SuYU239DJBRjGQ1TBYvKbrBT9iidmb4zph",
  "key29": "4kkLeL2zrJsjdJF8iFD5xiuWFDPAJNHUWZstvz6HnnHJ1A5DKRUCE9qYDRP7fR75c58fjkBAVFg3jkNwP7YRDUqB",
  "key30": "3dbBu7EJVLXn9kviYR6cPakn3yS76WKkpAB4zvC5L59nmc3sTgbPGRbcM5pCngw67PEWyXakjGGv8v3RPMiNUieY",
  "key31": "3wwqBJAzirE7VPsM1M544kfVAUWBfL4TUyToAcEtPxFha5g2pBn2TFXfTb8zD1x9GVkN8VftQVv1NQ47V1sDa6wW",
  "key32": "51Qi1TvHZBXhmgCfHYjmYER6tJtfoFG3yqzfQzQuTMEE58Jy3uiECH7jNKKJoqNBuXxeZhio48ouf72uBmd8Nuyr",
  "key33": "3zaKA2Lze4uHBGGFwPK9G84ff2kGpjRwLgaEWmGVNU696UR9apVCi6g2oeMqU8TUTxXWrsi8X9eKs2vQqXxV8ADk"
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

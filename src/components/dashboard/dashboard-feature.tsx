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
    "4ykWcLZK8m6M7g3uFc87CTxZepYFgeyKDqpSAmmoEb8DNdUSb4WYKpdwZoXNHcK2hxbXsTDjqypnbMXZPHxr3Mcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cr2Vofv1R6Ej4u8wAb5TxFLzbZqWjteyT2yS8XEQCWH9HnZrWKiCJMMHT44Arxwjfcx1HZTBVi16CD92gcBCbL8",
  "key1": "E1exABB6nyhKJ9CbHNsKPJsmLyknjUrtDRBm6DvCkGfUTsC9WvCy3n3Jx1q2CnzkGhyrKTL57DzW5p74KWb3iLJ",
  "key2": "3iuDNt6ywUF7AJumbv5JFc9rbhpxmXw1gvmRAa2azap7vRUpVgW91CXwZJGQEPg16kHVc2wT93SZFXkfxTgdJ1Gk",
  "key3": "3UbHtYf5VfZuxUhZYC4LzJoYWkM85TXJLg74Akg8mQ7WmhvevAE5QcZmau7yaBRXLpyT24ZcUDFKG79iSiiAxHHy",
  "key4": "5SxUw1MVPXzHmLXvgKQaYnmFvwZqV2bZgaqw6fkUhq7seHJg2QYujJqE2kYabRSpJakznJb2RKu9rbnGMoq6ztRD",
  "key5": "5c24rKWsaJ9q57Kr2s88FenL3dFfrwvFw4jrU9sw6VkPkQeMyda4N5Deba2UAwUhkBCg8uZZrPfdY2zE5T7dWjmf",
  "key6": "2fVLieakJjwG6zjrrCptm2K4YQXLUFquUK6vgMFFtNYdXE4h585qJaus823bxcbposMNKfqZHuwYTGh41AQj7W5m",
  "key7": "pioYoR58cTvidxC46r7pAPPYMoknA52GcGev4xgTL7q3ytSXMbaa5YNwykbrHkkyCcVyu3fkg39bSYahDKuD1wB",
  "key8": "23oRmS7kFajTKmmpXGRNcacA8NCHy4BCPnVPbYnXNzP9hptJvrMYgZyk4g2jmBEa8vnCKvWQaVqgiqFrj1yE6Cp7",
  "key9": "2PaWb5wiTivT4RrH5zqg1XYcyxhYeaojbda5ivKdQipUh7qc9612s2v2JBszTh3Af7qLQFu18fD3PZnpNhvQm9N1",
  "key10": "BuTryynkV6LBKRCZXMiuLE7jFqWoXzMKPEcWKxPRMf1Ny5Q3iWkSg3TzZ3dVK4zkaf7qjiU79H2n8bwZA3gXG8N",
  "key11": "4DLHM9rTGhgu8MyqAD9RqKanNtgndm5SDcNGi4yQMY4dN53ZFn8L86MHZVEcGfFk3ESiAn8mM5qWJj3FqyinVKWr",
  "key12": "2w4iDoHmifM7rHXJ4VSNT2QbktHWj9HHCJotpsFhW7VVwctQjcUuvZ5hQ6J4ZBHqjQefcFqv12QGXb9pFss9ocZj",
  "key13": "nmb1CQmGTT4ahiZRLRC4pfzr2hKBnZqdxGSVq2T1X2AaeuRZGvwyaxvd12b6mcZKgs4Mi6LbXVDQtRKjih5RKJk",
  "key14": "pEuCTTKBycLt9twyXAn7iN7UhjDQK186UM2xqHgTUtsxpczbhhKNox5qnpjqGBu5Y2eoxMwnvQYJWpnXUhdbjmu",
  "key15": "37ixmyj2mRTdmenFQ5kZnRCwJ1zXHcPp5JaaZUyKFVUytmA2j9RWtMav3AhCvjTv7HhMKJTrQDGerkW8SSA6yVbF",
  "key16": "4MMphyFs2Y1aEnR5AjaPcKR2VETcHRy5HBdR6jmVfa1fmisZXEV9omxG5KDSYm7uzgLyX55vbaPGLCPAU6BHa3Yn",
  "key17": "2tMJ91DoFxwAtV9HmX566JPeLbJMbTAUXd4EP3i1Lcn48BU3zMAQ3K8LbUaA8tF4sUH5TwJSAHBK8Ynroc1njqnn",
  "key18": "ExEznSDqg9N9L9ajxoaCSAH48sgDSM9VXEaC1eXS2ZYVUJ3eUaW6F1eG9L8Jps8tq5dPMSKZqLCXHkjDzDik2TF",
  "key19": "2mDnEy6rWkqmLjhCVzQHZzUw4sh3UoaV26o9oALBiM37mhf7SaLCst4AR1Dins1TVpNfSNF377a5Ni2QULEKrqcC",
  "key20": "MfKw6VNNJ5cjyimGf7uD8votpuAwVMpVQ7igvochz7PQU67n4M6WvQyD7di4Jcj1p1vq6Sw1EJmfz8eHsZRUtxA",
  "key21": "og4GiwTZ5awVEN76HzcxpDKELSoY6eCwCoqEhCtPj6wR4m3s2ixy8gyUWB2diURcXaWpPwQcNwF2NJGHN1ikDVG",
  "key22": "5MizrGfLPSSZyS1W1PRwSccnTDqKwbDtdBqJ9w8377Bpet7LNYHnhqou16Y5Xon5dTDqTBg8YW8SC2QfWCBNVw9W",
  "key23": "3fVD3zTGDn9KPBNCn1w62rRRJ21fyfVZ4uVxFgvwGCY1jQ2j9mF1M6HUFkgNoR1uSBirJeaGC5SYH9kfLT5yFYze",
  "key24": "3AtsTTsqSfEjSMN5ne9wnCqwyu4q9cDS8hSXJzF5xth1uoYRWYcdpWme6Jd2vzYrv2RVjCg8pMwvcADsyPApuRfL",
  "key25": "3qGfTeQpBQqJNKErxjGLcWQM1ms24FAj54vCHeJwPMpPZPZfY8PKosxxJinowoXTo8ALQ5EFGcHwhXM1hXKBuqFJ",
  "key26": "4PtTVFPgtetphLEGYMLxPeiA21wrW2wSmRMAEQfPZsrG5hupAmFi6PYCmS8qytzLS2w4MAdoBy3CD7zRz2MgStxX",
  "key27": "4XSJgqo8n2SK2z8mTCokvApjgxWRdeYzm3yxsWbw8AaCbMfjVDBCkomXtX5GZMDYvdT5MGXaqoLQMAXTzXXpSqMw",
  "key28": "4nUdJ1izeF7eG8FFthQQ8155MhHbxPyX1L8gEdfCXcYPGq3UaSoqWQhwXLQwABDsgnqYmSZYua3Mvu7NeYd5G618",
  "key29": "3ZjfznPd5K9kQ8cWYwvExGrut3bQXxFKpRsjavqkn6tdGg3ULbKR2k6jPtvX9u3PYZS61n4WBHkczXWjkS2DxST",
  "key30": "5hib5cNDEPVeimwEigBp5iWhCWW1AD77ZuYyGkz5DfxNjb24VEBtbMFMcjcCtDBpJTPVnA8nawoeCvoBxPTZgpZW",
  "key31": "44mdVFANbNV3CCcwSqXLofAKcxjsAQ6XVFtyBf4ubJun2XLPJcCM5n8zDYPPT5e5SRAN9Pd9u6538P9gChxSd6hc",
  "key32": "5N7jTj5UDGnTp8qV8zuoMrt4d8StxkTGZGpaTnQmcG4HSFwWhMgiqyb7QWFZSzvvH2mMKCUmyqmrfmaJpLjZiQQN",
  "key33": "2e9BovgHUzgbkBxz4GqCEBn6LXDncfNmdXwbnv83d8Cxoo4rLd2QWbwgiGQB7CNt99YA65dzy3JtAv6jbqmEjSL9",
  "key34": "hUYr71DmcRKa1Q2VzqzFwLmPGuyx7MY36jcDzq8BhnfSrttytNUKBng7q4h9WVy85WP2G9tt22QPMRiGHRaPFpa",
  "key35": "2DhuPvpjMzdDtqpXyBoqQDaPTa4YvWYQsNpZswihRAT4o6iqLw4ggHphx5NAnmA1vdx1aFogRZVPKVirK8DAT7iX",
  "key36": "ZE13au84tfeuSpe1qBvW1Y64X7Zqfb31Hns6gx7VoF3HJzzUR1cqNfr6ibUpbo1Uyx6v86ia23ikr9qc12Ki9kr",
  "key37": "Wx2h1nSyMNNMdw8DnoSAzN3X2Myt5voNsyTsxUtqN5THtpDkVKp3HF4za8MzYKmXdFQc45T46yWeU7Nxddsy2k2",
  "key38": "51XTzwUN5YPfV42iC66inyjmSWks7j1eigWENyY8QaCPJpiyKtdvGoHmrn21JHNW198GAu97Dwg7SqWHVM76UtHt",
  "key39": "47i5FiCTT9hzBPP9XgvDfQyjhMBACGLXuY7GxFZrcsL7uF5CfB5JHppBqdCAwiLr81em6BatvdKMWzCsdd4WLDKu",
  "key40": "2zeykq8NUz9L1ppkeJe1Eh3A7VNhBPT64YgiJJQFowqmJ11fUMQNKEzqN6RchbW24aW4MxEFyqvenCVveqmhZkPu",
  "key41": "5hsauf3o4wXkUpifXQM8DjLn2EfULkFj4AB7uGEZEsBTwCM1fpV3h8h85JKc3ZRA278bDGr4KYyWacbJ2wApMqjr",
  "key42": "3XLxLkufKMk9JEPbqKBW7UkHoF3x86omBRzGFNqnjBVmCsvM2WF53iRtHNSpo4B5DJLrfdr5sjYRLRUAyEFfHBaG"
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

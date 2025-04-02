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
    "5LmZEHhcdB8g9UqRP9DQuZetdMhSQ5bz9Pp3n4F9rihwMK2ECkAskTve9sAH6F4cTSxbUG82HwH4u6n1gP3wpVup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfP2g6hRfhXr6YP4Xc6fws9w46bjsX6NTVvge7bMUJcDog1sPAwLSP2K1DjXKSMcSckqQ4cxLWCH45xRi6NMHWk",
  "key1": "5s6D7hv3924ZazFuhPqJ8az5YF6FpH8pDvBQWJLVDbcXJtatAGos93twDr9bRdPonyqDPnoS58z5ENn4f8WtW2YT",
  "key2": "SJfmyb6aPChsjCLsdoCpfHRNK7AqD2YksvVM5MpTEeAbJxT9jsC8qtBnvkZ8yw7gtuRtDqKwaae5EPs6fiGBVeX",
  "key3": "26C7dR65Ps3EEdWstb3yTGeQB27DZhqkoBieubtXvbtGuqZNFmGmX5q5bsmBKHZtNqMJpesUb5WkdNLpRWQoVwND",
  "key4": "3F9wjatn1U3S99erj6Etic36mq7BwubFp5h6mWHcdFJzsBEc64bZ2hbvkaBVVmJCzYmgc113TNLhbbkuh5bvVZwJ",
  "key5": "5agvjoCigMyX1vGzRmmpmQSMhd7SzUci78Re3aMjrBfGLiZmTVGWXY9w2zLQ3WVmY4PZro1cVDEEr6SJMTC68Jne",
  "key6": "56gBrroKFw8trtf31x7cNH1uF6gkt7vz35utDKrGsxNw2uhPsUKgVHffF4zfsWVZqNUBBWXbEPQZrcTH3Ur8WbR4",
  "key7": "5hNckZ9V6cgHhSqrEeuYcgy3znsofes83XJEDZ3ZVPygQVsrJ6yZzbqGHqbUQH8nyLayGpgeLkAGHjiSfrjJh7CJ",
  "key8": "24YdLhxhwh3DYuKNHPtmceWVMNRNJR9dhfByVWMUfV5vsbfD25QTjsKpTBqvyBu2oDStoSLKwFXAufWt9hNAGqBd",
  "key9": "5peQv3ZaSxcGhx8EdiqVKHwMsqnbCbGd7ziuaEUzJFqGg3rUDnQ6Akry3uDMzDkGWQGkRN6rGt7GYPcNVGrThysJ",
  "key10": "2C7y385m8YVxznjTsMLG2XcSze9RK19qqT85F5828uakLvjpfF46hnK98XrsZH84qBwGfbUKgTzJDDQTSzTFuE5T",
  "key11": "5woeVibJf1H7tJaVFiddPqLJRDfV9RhnsmpQSkeRsGvQgS75MqmLb2vqWKdJxvCJyQvRneQGGSvMLSzZhCRbW3EM",
  "key12": "5WW7ZBzkuRS8Jw8TpQ5iRVvr4wsBuwzEFeP4Hn1cUn5zMRDQMB5S3CrwjRKLvS2pEv61SYB2YZoXky2oHyNDVf5a",
  "key13": "3Zjjxf6JGwtHQgMKK58m94VcCtLK1juhb6KtWb45fERgbrkBmTpWEYXN5kZTRnooP4KprD9g2mfjHqz9mp4heb7o",
  "key14": "3SENHx6tGgVzkvsgEcSrFfK7yDvJyaBxgCBXgFzAEFwgGwWyB3xmgNnAMxC6FtHLr4hcyXNPQfpcnhcvxGXahox8",
  "key15": "3maomfX2JcEMdVuefFCTg1BrhMfyDoXwZu1yHXs6Cg8EAnCHqnGXkC7nfs1WS7oWuzevCMMH3efFhseQNvFAmfeW",
  "key16": "2JN8JNaH4PQBS9CRTxemRyxLBzZZ4cSd3z5ECsySftehvkA4wXBhPHTFXfT5cVT5W7hCttQrdeeboU1qyrnSL9Fs",
  "key17": "2yQrnaNm699GeZPPa9g21jKXrWuEaq4UoK2ACR9SLwEH8kXbjXsn8tYUWAJ12SzhRr1hU6EAnRmJ5j3tXYaYBDme",
  "key18": "67TnXKa7gZgfvWKECTzFG35NGndp9yFhempwfhLc5sZNCZxvkFqYkRUoALzhh31o34NB3Phz72jdSWwttd4XKmcc",
  "key19": "2fjxAHy1vN9K6pFiaofQAkRiw9CTUQSagJwfJFnTVWihzWkgiyWj3qae9C4zPCCDqgHy1n2jpzrVprToHEGnA46C",
  "key20": "YWRmJBSWDLc49PtYuiMqhTW7ryPepykrK8LtUK8TeHEnQCoCLVDdxoENgfz71ec9Dr8sw1kFCG7GPWwnH5hp6sV",
  "key21": "5xp8tn91mdA6x1shr8A8cGEDPZdiakRBDP7G6kyFesEhJMsQo2SYud41ThByRu1smCjs4attVX3DvuU41knpFgjh",
  "key22": "3szc53VbmqjfdEyQKNw37Ums71D24CGfGu8e9wa1nAngLG8gjn6SKBBd8cSS4UVg4xa57Mq2pQDdXfPVSXYhMtqL",
  "key23": "JDysakTinnAaq55v1A2MmrexBMbYGcYaNYY6hRVNm717qAnAcwTtLtxBEV5aNAvKuFe4eP4wNfwP73RkvYtdXh1",
  "key24": "5McBxaWprLBNWf17DrALnnd8ub1DB5qYE3rmLWVmi5hyQi4uM7QRRDo4xXtXxfXVBvooMgdc33vxewziy2qzjsUQ",
  "key25": "2dePTYFDsNyUouti3APMd5JfbBrXBSv8mkGLo7aX94npr5KzwKXMqfFJZdngULVWf3BvJpf99jhubefqeDwTHZSN",
  "key26": "VFjcm9QF6wS92JtEdgfySF3EEYVWVTHgsc4BsrJpcebXzqnFPsp66YqksBB8Dds5td3q7SZsUhm4c9pN2G2Do4h",
  "key27": "5t1WhsVzrKChGtj2hAFxgqABzTT7nfBbrkB2u9gaQmFofVcpf6ZhfrHasoZAwG1xrr7JnrL5S1WC1ethavpE5jxU",
  "key28": "2HUPcauugUnFbPHU7UbfzeUT11xP1shf4yENyHG9tP1oBksunodQPAtWXRxoTDm4m35nuPcxetWvPn1W8QgtcyiV",
  "key29": "2P2J5r7TvNwbs1wmEtBNjxhhJzqxqX7CvQfUkRzBtQNGhYjZkqsMGc767PBQ4534WevBcvgdtXpKzrDo1cWrEBgJ",
  "key30": "2T7a52ywTPcWryxgUt8zhDojjCaJD7wLnYFvh2Zcy2YxSDF7Q7xh2caYVhKKbmeGZ5hrWeFR7VYY3CfdvjFmWKz1",
  "key31": "SkQPA2QUL2ZhsoynjTEKtAP3exMVySVDa8GdKjCK1SzHmkcsFhtes5TgKs4NvcNR9ndiJYMcG3e9aWEpmXkyiqi",
  "key32": "3gpvmd8kqSvRsSqgkjGXUmi48bjW887vnfFcUJsa2tfJy6zW5ZxCumnXFQxZtgQij8eEE3sS4VPLPs5EnTYTez4s",
  "key33": "x7W1HdURV8bXTDjfVEARGTpWsjUrsYorKisXMtMNkZtht4jFiDdy4iPBEBPRcC51n59FrEKjAfERVMffALQvNu8",
  "key34": "EwA98QBQ8Ra6WQpjfBSopaic4CDPF4aw1Znwuc8xr8cUG2nZQaFSK9ktaos4pmedfbC9Mm23qJg3HZyjgXYkBJE",
  "key35": "5ekmymLMRqB5Wn6UP4yzmt2HqSJR4PjV88uyzoLuekisSrmZ5DQS3uqYwUCRajKU4G6bTh5NRR5t6XCS7bRZcWNP",
  "key36": "6BFmDn5BprNLTqgJ4fAG7XhbtVLsmvvQwHYm4UDD4jtDPvpDBkVCuS9eyDRYwpTZrAM9UyQJpJWNaoyXpG6sGp3",
  "key37": "4cpq2K5wL3rMiMuDNsgkHttMohZWXiLtWiNEWSBzkR4ogJA9qFDXCyCWmGj9rpFgHShccPQDoAtV3insrkksQQWw",
  "key38": "3BvNwMzNZqY8ztsuUMANsGM39aEhT8ndwV1JNT55yACWKhE2SpUbmtZK4ZwqG96WXiV8Fy4QoPdbLDm7rb5WDZzd",
  "key39": "25Ng2u9b25rx5WuxN7RMWhzsQWPzXNmb2sqSu1MMKAb9FQiFaGaZoyNsPHrMHBgvvakkcbRAdBnC1HoJiqr9z588",
  "key40": "1sfNdbJzEN5AQnViESN8edZQ5sUZspXPE2iBRrZJoEozXSftd9LT5fdo1YedfB2gU8bXtzX5FQLM7pCPTyUMp1w",
  "key41": "2JGixiGeep9ff1NfVMiQUQQ1NhN9HrCf5CynjHkxiGLjSZibf2nBYJutSAd6bfJhhbvX2TXhtJzwmoRptTSaprzT",
  "key42": "2URXyEHcyunqVbw2LftEWnatBqUWqAtHN1HwRLEXwm3c7hAyFLqzAXkKCwokkW2cheGfaHVcCJwpz5sG486ZC1GJ",
  "key43": "2xZnDFKbQFFrwreCBnCDESseTzQQDQPRMKEKkPZ1KZXMJ4yqNqBaWyccDRdW3XePRbYXuhKk6qyzXXWWZKww72Mz"
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

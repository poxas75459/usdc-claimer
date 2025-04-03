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
    "3hQ1B8HuJ3acqxZCwgdpExbbyUQmaCndZcJnKcsL7F9k8x17jGxSiRxrHpF1GPShdmXzNN3zkj8BjFQTsifW6Kmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNSRiCSnNUc7tTtgajgnpWJo5hHPb9WooG4jW7gQmDFVnurwkydwQTLfMAdfU4WDHmR9Nj57qDerYVw8GfacgyY",
  "key1": "47eNPBg7ZMQa722EfkeNkKHxkqSBnntFQ65yAzSevfYJicSSCeFLE7s8NBKVtkBVK1kDR9x9bXpHbPVef1qZgJ6z",
  "key2": "4JB8pcKBKbKJYeaLd6NaQXqXXxNuVQ7514fidnREcFMAACV9K9CQApNQxJbu1vaUUHgw5fpQB9y9YZh4HxSNYrQe",
  "key3": "44kehE6wNtZQXFw6yvkbA4GA6QpPYqzUb5t9HJByEyhaNAc19uR1KZMsWj1hJPz5wnGJNKk4v51v8ezWeB3kHkJD",
  "key4": "5WHXxrwp6QfoXqHFXttDa634esRo1jnMqS51VWRqrv3sgNA3M2zLmoGfPPExZLnWY7wq5KzvH5ftMAj1fNSH1NHK",
  "key5": "HtNa2pPEM8gaopJeUWhf2UJzaDgJrM2fdcrFVV4T3fznFdBvPmA3yCWPtmtrR9HkfNFFokvLu7WD9ctDumAMdaH",
  "key6": "382gKi1PTi8Ajpqy7CEo1eQvBkV2G2kBuvQpcgB8sDuz89kzxHCBFFSZA96ksPyewA5dDJY769XnFxUnnBDxT3Eo",
  "key7": "3Be3pfTY9yu38XGzF7134AKNJQaMnCGVgcmBQGuLEmFFyys3xyoqoezN3mLw3MBpVBuY8iB4hzFjmtEX4a8cvdd8",
  "key8": "3DjimryKnYnXp7x7a4PJFyEUm6sKHpUdj1bkZsLGi9HrCEyUMb1tY18MQJsApsPTgXMHxxenbmeWS1VFnDyAjwmi",
  "key9": "55g8ixwmK8kYaDZWFTMD6WSQDcWtUo2CCqXXPQFqmtRTipjvDWjCJnLuH3hJpLYR2xMoLiRLqwRR6NAuAWqaffBX",
  "key10": "oewUBjpXsJxBoBPdaTUb5VW4Y7hA5ruWRC4Fq7z12sVSV4ki2nM1TqWdwcSGXBdoyw341mvS6VsSen1wJg6i5ar",
  "key11": "4PJM7ei4g129w6RugvcoGywoUU7WSFEVLNXSACKyix7GxUBUyxnwsQJLacAMpP6pNGU77skikFKqiDph3JvN6Yif",
  "key12": "2shpPGXB9xkkbcULYkiMzhmLw3rbxEfvJZf25CTdf5p7U8ZQQhXYGuXFuMAc58QDK4oCN1wYa6RhN5yu16JxxvyE",
  "key13": "2bUwBMZCwXYPeamQKmkc7PT6Ze6H6z5en9m9rrjykMf9azxTsgsKzJJTZmPwwpi6DKc8zXwLTmCAdkNf3D35Kjki",
  "key14": "gdMtegkt9BeMvPdgtcrnw1jWBPuQb4KWAuh4dSByiH4uQiumff7A6nGnYCEdFV5Xu91nJymJcEMQKHJXGGtdnv8",
  "key15": "4Hf4mFJXH3ozZCchG74JH368sCngZPEdiu6fwDeiqjCoYWGfLmPiPxt8zLsg5hBnwehkWnUYD7SfJUzwbdFL6S6W",
  "key16": "5GoArK7LHS6eiDxNt3g79n2ztA4jXgGQZxUjvCdJokjq1UWpUyvryriyQyHvhafei8JjtVbsh2USGiKB2CQNdJgC",
  "key17": "4T4EvYK7zLnEppTULqTT7vV2jMV8i5aVceeDprx2zdXnj4ye2CnhUryjcKvUhbwhTLKXYpz12WzAXNVTaKgoUUJH",
  "key18": "4TYkobSULwbtVZSHrgvDDrMHaerKKVNX5aX71BUoBrnxNb9T8bUEfsRk7cSuTCbLoZskDRELoVUuU968chv3yrDA",
  "key19": "iPUQRauMF64k3G1ZTCg7wQSTyejnA31TKcUxy7gmC2qkJPQ4Ha2CQK4imwRt3qjpn7G7kr7J5ex4mak6ktTc6eW",
  "key20": "3cfbBnf4WQWe5Awd1KLXQUeS3vnSkJb5nYPdbpPPeMfZRJyCxapk3sSy7kogKh9CxCtGkSjvhFgQvqpMRCrVP3nV",
  "key21": "4otd4jy2u24gctZLFdYHJMpaoNg1MXuUW3h6h74uC6Ay7PL29G3qbi65NwgkvvqWiW5g66aXtC33Fngzq9xeP55r",
  "key22": "TC1UQMX1AnC2ot6seULwdcJGF9qE3MAY5kCLyoDg3BgztpUqMGQgPH4US4BAnTqUW2ZQohLGVbtAA7YPgyfCqsT",
  "key23": "2ikKMmkfURXqJVRq6LhhZ5Y6XpaEodGekTTdFM2cUQsC6g7AuVzmsK5ZPcXTjMwFKfN9cjcsyKk1psW3SBFhAS2e",
  "key24": "Sxz5VmieC8NtARfoMmt6XeGvK3p4aChFBWL9hL8SUaBeJkoL4B9UhK2vnyoixwbT1BFTYyfsumF987q3Xrxt3Y6",
  "key25": "5ZSJJptiKRoNdjXD2QjU6t1oR5opXjFKacWkSJPNG7HHa5pYKFmneWUzEmLoJqxqtp66YYT8SBdFZcF12P1Dmgj",
  "key26": "Vu2HLG2cquviFq3bBMRKdPMQtSmSE6ENyAcpSd68E1XM2w2Wuwjqe9JPd2UDEA22VNrx4JP9HPMP6xviPejn415",
  "key27": "4qQJpSS2vAL9Ed6wo1YxoD2zusaW2eoUvg13MRGpFsAZ8gYK3ZmZmAcsoQXC2JvKbZbBesEC4jh7dL4KEiR3ssQU",
  "key28": "DQqW2yHg22MaJVYi666aXJQBn5LiqgB9z1zGRHnFuVDDjYDfyzPtrrrtufeW8o57umfgEotpJdCR1oPjAfmp7Np",
  "key29": "3aaMBa2gWHciaezCSYs6nKSKrfzFxN3sLJ7oK7eyB2fLpG1RSQfSFLRk4ycnbh3zK3Q9Ub9oftfw7UFwmWPzFQ9r",
  "key30": "52YfHWLbqUuxXbCsJX4PW43dLhnEynSx8DhtqBygXjKBpDbxnd3uVGdTqCsStGSqHbQkhiSBx3vdemzNnGPNmJx5",
  "key31": "HvPoH9F9HN5zafMJqKmpM7tXnKBkC41UjjJBkDv8qtwpA4mUGurFfxYYV4ErPsqBijCAn6zLpaMYPtrpcYeWkT6",
  "key32": "5duoHqNRKGLrqbPyYTYU5FcoQ5KL4qsmoT5J6GV2X4K2RXfTUSYkzQNDQhiWuKU3ZvYN32Lw4AD87V1uJ2D5hJhL",
  "key33": "5w3wsydHVXDKVESxxTaN9upjJCTRdABDnDiYpqoicJjtjAxWUnoVxZ1ierse1P5d6mtpUPDs2JAMoQKMtwTBSuAi",
  "key34": "2fqGAVaEw45aZPi9fUz3sQzkMVUjNMa5vAUrzyLffs6wANhKXknK4cancQKDUCXbkEeCE8dM5RpfmxRPmHBHfLhR",
  "key35": "2CZqiLCyjFPvtvZs5CUhBmWzHxWkL61CxbkTGXhhMR3c7B6862aDjxjFsmsSW94211Ng9qUG6GweX8RcBD54RCpE",
  "key36": "5Q96BSoaU6zCtHKxWwUD1R13UL7ndE8wTJvkeQw1NAYJCK7M72761BgFWiG8ggEumWLDg7eU1a8E7gcvNebbw89E",
  "key37": "4Fx3NLrujuNCEDCdJn2yYmpsqx8JVy1MhwDkyuiyAkpSbxpiAGZyeQeA1gjUrHvX2poJjRuFDqxYnhapsinSZXig",
  "key38": "t8rGBQofLUpv9c5P6bdHHJ4hyUr6ostY6brWYD9gqMvMJ69voWf4h35oJoQqd7sCRHNcwzPf65oueaZh4wecDEs",
  "key39": "2Jud7AWx7QZXvc1zauLg3m955CcTX1JZNojEEY2wGWCtbQDfu3bqDPXTBLKiDxC2h2C3qguTiFpJANc4R9FhH4aK",
  "key40": "428b7GDYqyGB5Neidv5s6jwzNBtfqnX6xEE3aU2nPiAmaUTN46PUPdNHp67KJK2No8czxnurravUPUeSqxHXfoqg"
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

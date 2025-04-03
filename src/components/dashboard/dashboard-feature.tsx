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
    "5N9L4qqWzfpc89gMG6iGseYmQxmVsvNnXMPGpdehxymMFfAKaeuLWvj12kMSR86eJvDe7pe8ZqnYC2DVJd3sQmZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o93jTGSXkWJAgWnSJ2YbYSs9Sj3WYYHU8mGLnqKNbfwDC9DX473dP7bcfyZj5Qw1LoVSJVEEAYoxmYid1Zqkvg9",
  "key1": "3Q8E46LA8V1NG1Y1vN95Bnqxjvpiy6XHw893awvupZbYGg3zuNygUMDkTx6odsu1MwhCkK885cg989xwtjVcuLP3",
  "key2": "3CLgsJyJftCj2DygZmfzsztGSoR6ePFLVPqXKRPWPUULuLxXQSLv4riHTvDeEud5L4SGcLYdBctV4oFR9fZdYd2c",
  "key3": "2XEpUckdafYSjq5EapPSZQjKbDwXrQVHDGfP5UNHWqmRmwe86mGEQ1PyNkKnt5ViHYK8ajaqrqNtWZa8JeCVSVKY",
  "key4": "zSioRQV6rzeiD8bs21kyaSH2QUBXsD94duPY9DCsjxAR1XbpSUELuLrsAL9NEp74CdyTWqWFa9Y97BjfnTfPNMr",
  "key5": "4Eh8bgy6dHCvUZwUWL4S2pU2dRxKjSVMQq63kzb4CerXxVM3AQR7KTsWZDxKfwGAXoKrQsu8hbgGv6BeXGGfX2C7",
  "key6": "5visk7WYHVw3Vysfne6oC4PnPqSAWdKMxgf9KsDQrxi4MaBpGYHDopmKGbBo5hVuk747bJJ3yjjLqKCaHKCgjDAm",
  "key7": "21NkofDXaDnM64k8NLjkhJDBVfgX7i4SuZwaJQ3uGGryoTu5unyesqqCAzMMdpHHVpGikhM9v8xdmujUKQdzsati",
  "key8": "5HpPeGip9pmdSqLKTrD9hwLg4qXu4PGZXgZd5PnS31CqUw8BWnu3ozXoDEXns9x9LGPnZMzXiXRBJF8xLCKrxyXh",
  "key9": "5Cc5wFe6ivuKUqRToSBBwnRjk9FEiDNA6BRQD58R1tmmefSW9NwaPr5GU9xzf7S8cAhCrXxUxwLoNQmfasUotV1G",
  "key10": "2RNnz2N3aDzQ4WKMmxMUjXRV2F9zZVXHRUJzGfY29fXNDpahq9bkgGrha152hUNUcZUSeCYmHGK5ZRqknnkJMNiL",
  "key11": "58T1NSGGJae8H3CXrEp1GmEZ8dvRUGHaujeDF8nRdBYqQC83yfYQDDFuQPqnXXW2SizaPLqPL5LxqDsVmX8MriWk",
  "key12": "4mNVJXhq4Jbk4StTdfHPmXwKmKSpoQNaBdomBB6B9gm3351z2CeqA5YqRJt8rSnyJSc1tcMo3gECsqz25UK5nQ39",
  "key13": "xDDFGiNJujNY6RzxqtcfnHuJoKyUxowi2RQPmNWBRq3Mhd6HBaLagjBmPjCfZfifdRZEKTN7wc9ncmiAJVCMksT",
  "key14": "4T9wWNBaGYP8JZw35QH4Vpjxn9CAyHpggKfx1q7V7u4vAwZJwMBv6kp5cAaKPs4F3eKG1vhiySujAqhoe7nFXm1K",
  "key15": "5hvgn7GmLa97CWEk1m6eD7bhG25KZy5tGYiWPYtZf52kK7GTdSx3J2TZm64aLeuiTXtHm2CXVCBgzTGj4EG53m7n",
  "key16": "5L352bwEf944QmUKGbxp8PvJTozGtMZ4cPbJDz5FA7SsCr3cAN8X9sDLpu4E2JG2FUBYBjDJimg3B8zKHAApLnr9",
  "key17": "UY7BH3fcT6bft7DZLoGgC5Jj5qD6vjP49dnZpR31cfBezdgg4aWQs5zhdY3AkX6tSsHuTweo5Lh1k3m9LKu8vWT",
  "key18": "4bc7DBQrJnUvXAESgA79yKX4CrvWPPWiVgQYMeszQSscpjss3JnCev7FPZGHtdTpHD38YEqUrBWXy3gK9hbUMZeq",
  "key19": "8jhDsj7azhLyTR3fzcViNN5vPFHSCKMAgrp14sppAuJGo1FpSBVgBgHc9PX6QRSKCYFStKtXcwLhUKRnvhtYNc2",
  "key20": "G3f125LDyKcmNibkHVeZHt63z8AoyPeyGAQus7Qof6V98F8ymgQ7SC1c55MyxgQZqDVUwhmwgn8QdK9wbNTthCe",
  "key21": "582hd7a5mjnZdbwWVtdRTA8PShSU6bcPRQgDo9vMhRNyCrxwPpb8MnNNRPZJXpLRMwd7UoJTfDtrzg8n7Bh7ZmBD",
  "key22": "m7ggh8iUTFyxEuQxW7hEC668vTS2J97t3FK7pWFtVEhSz24VoU9f6Nrbb37eMTwQRJCSPZVf4ZXK9ueoweHbq2X",
  "key23": "2Q1hYZYUcWLKXKBdvH4WBuFxRcMBmVSa2mJuEYry2zaD45mbiToqeNBkBvpqo6jUQbp4cxdUsq19yWm7n9XyU8j7",
  "key24": "2TDgURZaZx7s7ToxkFiLQmxCFkkfVAxTAPbXhQ5uPgMG3DSR1aznLWDVpA67XsKuabddggCVXznBYtZeXtqj36jk",
  "key25": "38ZkzMP1S2JTUpXDvJ9fjUrzMjdpx6F58L1sdDbDivYBB3YiPwmMKJjLYwbQEWQmHijx1tFtysLsNG7ZmrBKkxmG",
  "key26": "5btoCBgkVitz9RGcgt236bpJSEi48Twzxzfu2qQZYxMVNPSdAzUYDwdeR42XuBcCh4S5vkhAKpiCxncDnn13J2Yt",
  "key27": "2PKy1hJ9u2XE4uTdayNB9kUS7APZLerC42s7WCJUoPxUzu1MoGoC53HRaS82w3cXFUHpMQEY6ioLwP1bJQx7JW6r",
  "key28": "2gwCfTrNPjiSNAH6npKBLQKAJzy1nYQbq3Cprs3tLY6n9pMM6rKgSWNokSH9V4TCXRSaztkM2jf4pzEioC6RunRL"
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

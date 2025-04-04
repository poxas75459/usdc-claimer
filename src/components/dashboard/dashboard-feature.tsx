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
    "5rJJcLeDk6o1uyHM1nY9G4JxPGurwgEm723jNNBZ3oCVmB68beCeNzTkGtzD3djzgeCKW95cwZHKsb322AdJB4iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpqDUTLU2KjSKBtyyQmSeew3zAdSREMigQvdJM4MZTareu8YSCx8RDrz6sg4jmDqfCarQ65LVHxHUN7FBUgkGpS",
  "key1": "ApT6yZ5WYm374JvBs2DaD1uo6dbm11zTNqD9aRgVg7rtWRwjiLhwca9z8j3xepLBN5Vg3LNvpBHkzySmQxXvo3S",
  "key2": "3Kfpbq4zcfP8NRpWGZX8FRvn8UjA5RCN1svBXCz34UF7Y3FdrGaKmn3dPAZXKpQupYfXzkeT3aBXA9nS8vRhfkKA",
  "key3": "4uoAUkJ8TdinU3hQxSjUGRHMsCNEZinJXdqyprUw44NSSBG2QE1oPdF1EiDRmhMosZ7NXtSN78ypkRRqcg74U1Xb",
  "key4": "2KedgNSpuLtrtjWyCtgR2BvmWi6aV3GUoPchDf2Y1s7YXWfymcZg78zA5kJAuZ9WT2LHc7NeVDYccqHu2jHYiopo",
  "key5": "4J1PHQN8PeBRHc1EU5wTh6X3D5t17TVx1CKPJnQ2se8nMXFBHu4MfKMkLTnirwJn67rGdWszArU537cunPCdVzvc",
  "key6": "3xGLqokrp3cU1N5eNngU7UThopq7WnxwRr7wwWNk1THrGvKmEevzqpLjGQRFYke5L4cwb1h9JpEG6WegAy4dPubu",
  "key7": "4Zn6DKwkZMoavQAcrW26AvjrxnnjEV32cEQbsPNT3XzFbpE7P4hmMbjzcycRc8XvfWV3dcevwL6Yz6FCtnRTSDX2",
  "key8": "54cWjBPgMo6XUvs1DFrFX2eoVbptkew8Yt5SvAx4zCJ4zjX3KzeYLqDZCJtc1TWsHgmbFZwf5nq15EaEWHGHeVfg",
  "key9": "4E13LMMxH6z9nRKRezCb2fa8bybb4fMqB5QPQg3mVHMLnY8iNQHkN3PNrCU2ib73L6gHrh7FPWQq3yrUSUeB7dum",
  "key10": "5JWuULo2Lm1vWeX6YywUykVEXomW8ouBGe1Yuh9WDopZKAKDZGQpcNT1okuKBx91h6hAhCEcwRUnDxgZppoVdA3r",
  "key11": "4T6Rh6wyaSuLJcTcFEW6Jx1aCgfQHGvfy5LCpfYDeXzJiCvZ8fKNtvkb92zd3bf2dAKxjGym8Zv1TLEz4BJgPZcs",
  "key12": "4MsgccpTJ33sK28H9d9hKSQ83hikEKzTAxAK35v2NxPxXXGnw8kfNsRZv5qyP8G78QT5ogj1ezbjsQYewD8zP5xo",
  "key13": "36hPN23k7dY9vaWZ869rP9mSpmBpwGDH3theWmkpvQctQKMXookS9Rfr69giKhUb4Udo2RbAg7DiaXeTK1FSQ9go",
  "key14": "429NE22ZmoaiC5gbkewWwN6dgz24rxFeghXkt6h4Rb93CPtBR1NvWDT45epNQrYUU8yups4C8N5MAkRjAdF9opSx",
  "key15": "2MWnwqKGAPruGcMDHoYKM15RudUiEPiTyeWMPgn8DHRP93NcA1dLkxqGzYVWztmUxrf89LHKcHA2grSUbnstYD3P",
  "key16": "5H3eiUukJuKTdwykosJNh6BYGGrk7fxZ65ZoYrejeNUnYih23ydHRwvpVN8UWb3m6QFgWXEF7neR56BxPV2Hbh9J",
  "key17": "5zNA1QJbPaB4vRxiA38Zs21k9tw7i9kQg5r4rXvaGPwhAFDQ3vf3khUmubdr9ZBAZ788YLxyDnTYSHpkRQzDmCgw",
  "key18": "tc4b9KriUF9FCq3UBYdNnUGK63zbBMcLGoVQS4gdqfR7vnA4LKBZbtfQVGNp414GBySvWtPtc1FgT8GaxVfEYKS",
  "key19": "2AfmvirdoRb7DRFyhQT3QVfm2Zh4enf1Ki9a9PPohQzfY5DizAozanX38DfDTFBPJ3wp6FSdMmUpFqvdp7t2Atfr",
  "key20": "3N9DtZZZAVRmhkPhc72meHgeBAhSb8uYVQpYxU8E6DsvMYozp9kD5ZqknTZdMMgKPMiJxdZWv4z8Ce89VLxwwPm4",
  "key21": "3SSKSM9cRo7xyfB9SPtaXJLwnCFL3WQYQEsiJDNFSPZUY5j7j2mUzhCMmisrrQ1bvVj9CSJWtzE4Fn9S1BQ8D5Md",
  "key22": "4ce5oQsQoUx9VdmGPY2uALaHUeh9XVhF1FAVExDqC2aM8ysPwReTfpoJ4p9pBrxzNSsis769agsj4cghQAFGw7hX",
  "key23": "EMWazWLPqpUG2TT9AD4w9Vu7Xj3pegQ1ZCGPwW6S7JaFAKSDiMypAr9yUzdDZDX9CLwots4FM1cZuieXKXyYG4B",
  "key24": "3Jshkeq7eYZBFwoaCC7DGXv6Wz1CXUQF69Hd1sTxoBZP7NPTCFhZnAsGTKVpJuFZJJXwsKnKfEZexB5wpZ4EEs4A",
  "key25": "2sd7pKA3u4mrt1thaeWkjauoqJVwGYR3N6taviV2ukb4vTr7vYy1aukRh4YiLPqTbrGJWTf1kPFV21aAnSzKUTZY",
  "key26": "4aaGJ6q3r945AB27usckDtNkLRMik62xPNXwnVDuvordWtjCe6ZwyRXt1JBvq72XK4UmPZwPHBDQCWKJLK8qBzpG",
  "key27": "RQtohfjqFfp2QL6UKr9df8PyKSZJ2uQRZbhAazyhDnPhHN34dvfgcAddNawbgpUZ3gkxurHXMqiv6MJ6HCs2Zo5"
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

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
    "4g2aEbDWmqPmYFXrE3u2U8rdayxm5xECEkvCWLzcKungcvGtST2Ydfk2y27FeLxG2dNLwD62pNsjv6Z7RrgAjkw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVQjVRHAaPFidnHGiERpwXGjYEH6UCz72hnVqTgVaePUxLM2rjftJVCF36J3x87HBCuLUVbrHsGUM2XFCSoGcsG",
  "key1": "4CzXo5WZZQaKNBSxhKfMSWVF9hbcVyjgmNQxcMLA7x42xGDX5HCD2scBkCMxpDz3JSCNAU1ixW4zwyJgF4oPLjSo",
  "key2": "4rNnRXiHkuwX4Fnt9FqgzztK6TQ6sa51YzehCothwDyYXniahdCnGSEuJWBQnLN2oyXXtekju4cZvZDzFDxB6ao6",
  "key3": "3DqMNWDgmzpXqyGHF1WdaDH5sYkfZuoixxRpBhncnhriWY7bnZTU86j2sZzq2tob9FpgtPdaXpdJzgqHqWVGwUos",
  "key4": "4T1LQ546KmMj9SPnJ1RKcaSj9AcmLQEU7ZcTzjfSeXjBcoFJGnE8N47hFXnUhyRf9KLnahkgEwARJ89bmk2mSA4M",
  "key5": "2kgHYDTNmNvrL2pcSc9wLuaGZKeCWRCmuar1Gmr8qqLdFgtdLBTHoeuYn4pPHJ2usRxh9P9pJucxURk4aWqxr7fB",
  "key6": "428abPmokMpjspVNaLqrvi668WN6jb6kBU76Rw6Ek84CwxTBYfrWA6VdFNanUK4QGesDyAhFwz7yLS82S2WdZnFy",
  "key7": "3MDf2dk5ua8NqahymFZdLJuzfmGyqzxDfzEE12cze48Cz4i7jJSXHuxAYP8ovAZTGCi1rDK5KZoGGwALzY3tBTog",
  "key8": "3DCzXGeEAWAGZ6J6Z4NWSkAktBQfr5meEBaTXimBPtgTZNCZ8Uci4i6sQjrESqoXG1RDhjxAh3nwEoL2HpB4RSCJ",
  "key9": "4PK9cXgNCd59VGcnZuzZSvFjmYa4SF49NgDTwMMoZL89yPmkJJq7FWYkEmQ27ehc594ZHKaY82sPSDScGsfB9L13",
  "key10": "JBiZ3V34wq74yQakU8ArbT4Xa24Vgyqw7sqc38S7JxiwtBfHEB1FHPYtANStrwRqYmvcoCkEeyQ4DQ62giC6532",
  "key11": "3aTtym7tMvFRCDcAijvrcUGZ8YqYdwDj83nAJ69sJ99tuZQFHRJGAWMZKJnEwPja2nFTSi2CEcfrZzPzGvVTTKSK",
  "key12": "qSvihxAdZZ4rqDxS7r6XKGHBw3yRU7dP9r81MQZtuUzkMytVHMtxUZeYNZzqny9fYMENDzbFmtpXqGSRvpReN29",
  "key13": "51f7MxhRjKcDhJydTukCF175h9JVdHJ6jfPJSUa6gtRBhSBS3zamNQNdH2gXCLxUi9WTvQLEfuuNmtHMbpHs7CGd",
  "key14": "21vzJ15hMmpyyUoF8TCqXbeKU41GNrWYwvnbtHpXSdj9nywsJKyX8GPmdrYDJ3iVVPVS6KPSRsAjU2rPcRHDSdQ4",
  "key15": "515s12tirPZRENQ2oCQUiVBd3msEPYn4oJuzg4ECKPxNTKo53SLfhGY5RxBTvHSzxm9ZdRdzgwYrRJoS6B9axmtV",
  "key16": "3A9QtU7LppcrSezXTySGtY3HDRAdt2fa5fsVqwwcEPbuYrsDyWX4yNE9gG6gVpxU3DKjQ5VyZx6J9qjoacnL8oiz",
  "key17": "ZDShRzFpR1qi6CBdxp9SZ5vLDiLkwg1Japm8dw7VzsdKbx8cX6JPc5ZZSKTXsVRYYP75BMYPDetfTgVFen7AzNg",
  "key18": "5F8jZJA4WeEovwvRqVbUQ42u6MydF3sASBRdXTc122irvw7BKruR5xfgzYXCyEZfCoykBZYPrd2DvwphGdyMnGU",
  "key19": "5cWgpRGcgoDbRnw5kfvgd6AJvcav2hKY99H5nL5PP1H9Gyas3GTCqUcK6nsDdJX5eWgNPYBSxdV3UUyKeAmxzoGm",
  "key20": "5LhxnQ2pSvrksVXDVYWAJArTh6bHeo2EoqWKbjHRyXSg5bbPGdHFry3Sb764Z7P3zGPkq4yLsHeQr9LWPUsLtd27",
  "key21": "2YEo6Pscw88EzS2F4pfQXBAmhbt6igJrnnTwFuGCg7M2rFckngQn9dq7RQ3ygB84upavrDLSsUcgAKFPtnP3WGcM",
  "key22": "4QyjTU8M63YtJBkvT9kXxKXAbcE1SrpP4518iMW8eBNvCJuHjYvUwvFDnMQEq4ACfiR1LWD33MpigKup6NwMm6wX",
  "key23": "5WpYbmmLmUsEEqg4QVX2x6W6u9tEcUR7tQa9e68rPpN5c8Du5qDrZEHEKiCbzQbkdwx3grn5vQkn2z1JH7rzwvpD",
  "key24": "5BMiMi7kUsHPGVWHmhx6SubSJ78rGEt7ZSw4eJHR2RD3y174efW4ZVpDosWB6fqALVP5mwJZR6gnbhfsmoGRAeaZ",
  "key25": "3LKgsrNtHvQGzyaFrDzepx2zJuKPPe9CyGr6sJYjywYjR1gRxLYVgFVVZ1f1htQkCiJCfDSXPZT4BbcudR2V1LRL",
  "key26": "4hEowkjLFYyXpwTGSMQw9x5yeZT63QuhKGftSsufnAZs28kLaRMdzGxXtQx8zHaZsKTLnj5XWee8MjDWBiZ4XAEW",
  "key27": "5Ce3EatS2RGwFjtrPKnkgYjQCn9e1S2ZcZbtV9coL1pLqVJEE5DvVLdtBWrrJ3cJmQSRXoNLEzdqj5kqTNueWDSA",
  "key28": "2ksaw2b7XWrsyWAuVcD9iu9gRuPjt9uVNLCYN5JsY9ou8Ld6KoPz3oYAPyy1kLhqXxxphnCGWxvS9psV2DR2Srca",
  "key29": "3Vve9K5YFbB4vvBsXnWWjXt4V2mstewPMPQm9LuAGzzZwCpCwGVYG3hE4RNFHrYPSprxtPk6GvothRJY4KfocFpW",
  "key30": "4sg7pDGTfGoxdLfCGyRb16TkrVfomUWgSV2c3srRh9WLZQ6LmGvbrkwxMmHtuhq9K9PuZ78LgPqxrPqG6jFdeU8T",
  "key31": "545JNsQXcUYK5yqQTKejR7g9dFtYTw2GormGg4pXfu6VckFRpVFiRz9QS8sbFtsYyPC9RE1n4EUSb4UGo65qcRfb",
  "key32": "5FLyc4xz1XkpyMbybBSgrVrCfu8dJJ2EtvQa2vABK4rCSgHjaRX3hRHhWsLzd8NF5rmz5xhLbrmUwqUkqeN84ziU",
  "key33": "4Stoa8pB4wc9Jb98LPgcUdFdLD5AeAiXWqZbKhndqFPpbJCYGJMRvXsVtXZf8jshvHRHk15X8JDYdC2aCMDfvCML",
  "key34": "2AQtiraFrxX4ttWtLPhUG4is5jYoSTgzPDC6eQeC2fyyeBAoH4wXDjAv3LEieDvCj1vW7fbVhP59STx51Q5CwfSt",
  "key35": "5HgdMoDdCsQCNp9DVcrRUS7R5j2iMqreRWsRJ6fw5fSbQFmHTa1imKBeG4vUDjn5hZLqrYH4QGF6vipSsLdWSaon",
  "key36": "4BHB2vcLYFZzyW7Bx4JN1CrUj1LdzEHbC6Z7PBQDLZ4Pi9Jo76E7sreqAiYZrHdUvVAJhFMPokEzid4qm3iyu5d3",
  "key37": "5vGiZsDrDrFLyBwgC57pcHkk4CQcwqwDT9yjmG3BJ8PwvqhQjMac6eVUgXwnHCPJ8Q55bmsvwL9eSU98nRcmyVDL",
  "key38": "vUwpfpZmhnWPg3emExZroqkkpATG7hZnyQaH4uzAUJZrPpEpVkAv2qgDeQit4ZiJHhCj8DVQCQUHZKiGj3WCdBy",
  "key39": "49DrRGkHViHXQALZNvmNGQ5ae4eGbeYUNZrBtt71sBXR44CU4MjXXWVTnXMWz2K585aPrQMX5tAZSc5q5Vmewpqm"
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

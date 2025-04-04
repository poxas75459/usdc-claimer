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
    "3XoKQAegbBQoCmnEzDoAHjRoUCdPbPfUNRu4UpiSVXpiYvJv2q3x41GMAuZgUzRsVRxef7vQqfm5v4RKttuotaM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnFUJqFnBhhKUjFLrmKd3GoWN4z7BVvahXbbVBcc5aMsiBXo9DyRzqvMh2F2bM1eXvL1V4YrpnXmmLQeHPvFv12",
  "key1": "4aMkKU86gFZVCADzZ1S18XXZoB2qcdVdPLHCdC3mteQHCHqshXnkBVFMdPxFPQjqSgJAK1ax3dtUxbdj9sJWR8T1",
  "key2": "TakdfcbZeLuu2DcUvUJ4EQeLToEEBg7S5jSuJrMR6EgXUi4K6jH2JkRKtooF4xQfoxYnFxAtHxK9Hz45UQZXki5",
  "key3": "3fErK9kd3Y3M2VAx9qy8SFKtFdupNgdtN3UVcXsX1zRCrVLXopsJ84z84ZAauKb21jxKFwtSHascaySKTmiRdwFA",
  "key4": "4jbmKuihj7cZBfFy4UKUyAYmoYm1PaTHj8TFZiYgBuEjRZmLARFcKBgy1aFdJ7E4aGAYrQB93EPyJcfdcGbgWApM",
  "key5": "4c9yfS16psMo6YbMSxbdbtJV2AVgy4xH392aJsLdFFFwyL5DqoefiVLMjq41hFHRXjpNySD6HyGWqQwVupDNG9RL",
  "key6": "3oWBAiJ5ZBZrVFZC8WiHXiG4BFQjmnn4dJAfAdQfyLdsYB6g6NywBNj2cQiuZsE82YJD59bQbeFCFNivF2fGD4Jt",
  "key7": "h2wRmW7sHHPa1sufHrsWehT1gzEUBTNHxgjdkXi6cbmswZ4qNCrdPczR9knLqDcyY5vyMfeTxQjsPPwUp3LGogg",
  "key8": "2BFsnvsAvM7qjRaG5cZDqUExe2ThjaR1S7kqjAzW3SKSXnrHaraBSPHSGC9FPYmh7QYMNeURpz2C5FbZPfrwxoCf",
  "key9": "3uRvmMyGo1TBLHzJg26kXLNHxfdoMDrFURHbARikk8gyEjfmETSAZ5riT79oou8BJHpnfozeGkqmLhp7jW3Ked8j",
  "key10": "5k1tnrc25P7a5vcrZqH7WZpLgvQKtPwZqTMQvftT1YhFsKFhJT9Gev6i6JVC3h9thUU45Y24j5bhkFQ7HZzpzfqV",
  "key11": "4VmjmWiWRBc3ZvdQ1g1nnqUbsKjbGqZu8cF95mRp6NqXMwDXL1sKgNd151bSDdqr92E7McGMUr6BHns9uuRM6gvD",
  "key12": "48gotpQWabZoVFiVsv2p9TW5Q653jE1PPN7wNcLSZT2K4TYmejcMmNvKpxm8R1tpr1Tn99GELBYfgPCwZbm5rAkJ",
  "key13": "2kvjfUyKzJhZ44aHuorQivz9Z9pxPUv16PqayzgAuEWjcxA4x51i8zispjSDEGSGmZQAycVZyPjEDppHn5CRL11w",
  "key14": "3qxqsbMBHqG6ztj9a7C8a7zdEfFdAqqMsqWPJyE7cYfJ5sV1oFHq2NP5jCtNYtMZZfhGrnKSLtE5BYE4Xb4bGMCk",
  "key15": "45qSf8pqi3fFjGBx8hsTj3F7vYpffqnJWppxhcA1sWXb4ZTfbmDmYFaTs3qGK6P6TK7qsfQAxqAKc6sAm9bA5Pe8",
  "key16": "22DK6tc13v1Hdd1h83i8QmLo4saGu7j67a54K3YEmFuB3cD19oMEgQaza2ba9Zxxf3kEeMcRRVvBCkZqauGB49eD",
  "key17": "ehxkVLpypXoqdUXwudgFva7Lh4LAvNKSZa64TdhMf6DSxkRtg5zzWBfjKoLmPCHgqi5YuRPx7U2KAoAsU6tcCYm",
  "key18": "3iBWtcETQi2hVPS3eMpXWim6ivDDLuC4GkRWD3JU5Q19PTzTcHuZNfxUf1L1sksrjoiW3qLcPFLtwvbLBGKPhbhU",
  "key19": "CfWo6P2o8KAqvynKgZzMfEie4mhybLo8x4CKJLDPQM9mxXdg1hsGekPeHHxfp24ZgzxoS8q25xCmGP4LeNbNyXX",
  "key20": "276oNBK89umMWwCqURMtdDf8qVA9KQDTqQU7uNi8hGmQs6nrmRffg7VvtDU9VRgUfqcTek58M8Qj1h9JArUVezBt",
  "key21": "4GKfF94R3qSHQQiM87zHcWtRDAsaXJHs2CbMonXaZ9RYwm2zQk3J9T2zaS2N9PDNV6BzBb28ZnZ4WTEr8MZdBsNL",
  "key22": "5oJPRimovRYnh6km1nCrbHZoMeF4qVLAkJgzc353WDdnGq9GcAiiUZRMy9aDwxLPzCAdCDacwrjXyMGaMVXjhTAv",
  "key23": "2hJBS8ZTbhPK9u7stBxMRH5epXHKP14vRSMFryVLhg1RDhBon4odRUNnt8HNptH1UD9vayCP5SLcqfg9vBpDGtxd",
  "key24": "3BcRYiBaA2p2Cn8ZMBAEPqXjyUfDhHhbJGZoY17BLz5VBdAQ4UyrJmsxYn94RZQikPKuinUHFg1Phfbpt3Tvy7GM",
  "key25": "2azPKNoNcukcABg7XJE5m9wUtPnqGiNhqu62AA1Kwy9HNoFR7UGXFu3KqF4wMezdtQvYnEQ6LS7oTWhRVQnwF9Fi",
  "key26": "hwkQ8Lfz2ox8tnGfghdA1nWLa8qwjahnGoiDMoRyqW165oy9mXPUoT2rQgwYVZ91FgCVB3oFXA7vkoPD6mNWTja"
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

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
    "4LJeW4Bjv7SC5KpzQUejBCuzE1wXddVD62HvBUKUwRYr1fcNMHqAtU8XCp8f1pS2Y357jTYh1dZBhhVpbcVArHLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mfag1SDjFF8ivKmtYkrB9evKD4CwubHX9FzDenDgbjfYrYSrdnP5D5EXiQU9QzXZyn7H5exo9L1ggFXZ5btzBHi",
  "key1": "2TPBPNs8D7Vqq61JDm9xGJ7LcUqaCNHBiYWktm8x8AQXmCknovr7XVajN1JXbzDVKsymX3qEQKYBzUQyzs2Qunpd",
  "key2": "5u4qWfGhoQKBUNjrx3AA8WLNQCdvBnWi9GZkCWuFJBvrrsHPgzNgGkJJGHabL9mXheXkiybAze2293sv43q4badB",
  "key3": "4hSZcXsd44HDZ7pYzYt9d3LAFtPvBQFCFydVwLWxac9ACHUnGVL2niNzDrkoZeLhWmwbhxyEuhqqWZwPrB2mrkQd",
  "key4": "4CLwJxx5XsHKc5ksWTnfXhGyksZdSo6zCJVmW2UrQ6FXKRzyHmt8JV1NF5tWcWtLVTbHafeJRbTjRDyUFNqzAPDy",
  "key5": "4eV6AXvjLngj8XxghvTF6W4YoFKGg8TG8VeLnjkmTDbXwmq4t5NLVaY1ymyVUxEWNo8uMUh7kPcATBXLVogeP54S",
  "key6": "5U2BCHQPAyJq2QBbsJPDgkKE6TsLfyJ9PFQRppZ5mVSfJCRn86enTASP5DBwZEno1eRiiSPFFvTUNW1oXFmUEQuj",
  "key7": "4Gp8q5s82xvMFfMWnEqP2k5iNFp7ewWFNsNmka9i2yLbpdPmRDAtz2qymUqysxikX3ii9qLFeUYQ3AoRNUFrTr4w",
  "key8": "64z7hzVsW7HxgLPnDQDMvqBkLxiJbDPjBehYGzVyA5t6M457Y2RuoJryLjkNVpxj1eeGP9GALrertouqEoJVNesZ",
  "key9": "2paGgzhqjy1eZTR4DFow5jQcsbPb2x3Hj38pxtgiBkCWwwv3jTV71sySmUS9bX1YZPnLcpPS77pJo4Ux4j73WEqu",
  "key10": "2RrBSZpBLRcmGMupMGsrQTTn1jKU6Cnp9DaniQ3Amt4MmzakDR7i1iENFuZUyQyvjqWc4jUjHa5ZRvzcKTAnsCaq",
  "key11": "3U74mxZ9ErbW4WV6ugZgMoyy7vWj9Fdg1WRuconGFeeM1mr4jGBQ9xbpum2XhnAGYVPx2Jq4jGHgqy4FH4swMgFj",
  "key12": "Pjgu27b66QyMbWMmqArjuZ3Q5KW5WHJGW6DPFNLmKtiihQs1yeravRpiFtWLJeLYQkEf3NeLEEa1DXA5bmvDKEB",
  "key13": "2RQhWwT6ekWGDR1JXqq2RPCiimotKXwEkwDykg5phHCfUCmckjSY1xmU6ZgGHSPF2w81WacuLnW4aCR5c9QXNiZY",
  "key14": "4ehP92BkqwVD1rMDHUXSXPP4FiRRy92i6sh8ptE2uYNWQucSS1cCYzUfA3GKUham3KiMR11XjiHDsTrPfHScfcCG",
  "key15": "287wJM8QYoGJBSe2qFowJ1Zo2e8FjBzUYUmMBcJLkxd8aV43aFNMSdezjsNnSo4WDsqtRyCbDBnbxzvutcCPQpab",
  "key16": "54qt6MtmHdeZ9bz78J4D9zWFT4q4ZHQMHEFztFVkE19RRtdBs7DF9HjJLGxr8einF8R3CRggDCg4xh5VJpatGi6z",
  "key17": "5UPAvQrkoB518xCBdRe7qWwY2TLt33ZZu7mCz4gQQK2X8Bo3ifumxj1KRZTJbHT9cD5SxzvCpsKYBYRxqk388zZZ",
  "key18": "1WfLUD42NAwe2MbXqtFvWxhei2SPfA7yJPmsCwV7ZFnKEsY4uRoHUckjboynSqytubMbg8BjtS72sqgg83cbvJA",
  "key19": "5J73vzFQNXaJtLQX7mAJcAKYYCXXw5KnxLsdERNs4fZZATQUdqxHiAbTxTQZB2cE3dgwDHms1qF1ixW4tovcT8TS",
  "key20": "35Jt1PkrxBy6nCiV36vhZd1KsZmm6YQ55XCpmhUPGcGkAPJ5q7w3rLQXKfs1asarXmkhL96R8tygQz5qSiTcEPiY",
  "key21": "wns8YWEipHyfb2wXQXFHZ6V62uJHyaXAbv8fqayE63jTDfbLeGrnYphZ14P165Dt3edXqKtm4VZbf3NA4MrAM3Z",
  "key22": "vyjrSje3mLBhdtmTAsezNgGtKPkKT5xueKeLifTsXgdypzEFd8snTk3YE9sUbkkkzj2tF14DTyouGm3kG39UqoE",
  "key23": "2tZvkjknF2phyTPPDehm2xxNVHdKnPrJXR6kJbRCJB86vwbUPHL19DGNk991vHBSR9xa9sch6woUQ49ji4wKmPLN",
  "key24": "2Tptzt4WmJx2s9QcnFgExcy2SrFnHfMp4DoBT3pUfxUuyoSxn9KbZ3oTwSMxoJjKGSuQHKY6Um7BcmPX3t4XLkM9",
  "key25": "m7DDPKY4xKMZdDwQB9rWAvpu2Gp8v2wGKd8wKC3zCuHm5gdeXspTz8SUojvrsQjNbSTvn9VHzhUPRRwA9gPVHhr",
  "key26": "4dQ1pQ5uUbyDajEfbm7hKhHmLKMeBMddDY2dVev3FD4tmbCZvJ2T3Ay42692CftXH1PayF3ZgWcUrU1Xcz21eSBX",
  "key27": "2mGQ7mY5KmD1RUVYYEpbVNhceB3zdem1JFVYpCx6GxRnQYSPTS1MdN9uB6VbAqp4yvz2emWzKZtWsUzYKxfykMDm",
  "key28": "av4dTSKmQMAMG62WSAaUHAcUacvdW4HN1RXWUBZzSUEN4CNtK1wsvnfiYMjqk3cZPDC8zdB3rkcY1xu4kQ6t4kg",
  "key29": "2jvRntrJzZ97fAh1ponJ1zjqeWNgZDwrF46hZxD4kyNT7cL2BnmfruQ5Dz2voaNAFVGZiNHNjpL7hTWNqDfJqqGD",
  "key30": "1CPJTNCFXVCodR9A2Y4t6xLTRvu6gPAFz2oW5tBM6hos46GARnvJSNSfQYN5EfrwyKX6yBQKPS2GYAZCzhZG9Rd",
  "key31": "2VFwLP2WLiMnf5BhLCE9Kkj4tXBYpdCcs6atgdV39G4sCnxf4CqYpm2rPXq7bbx7WE5wcmNjLEUCE5f1eF1FZYY6",
  "key32": "5jA8G6FK9K5wU8x6rjpskE23ms4mtxn9frDqZxayp8FkFmRgRh5xDjowfsuiLWqCHDUNwCmSfFoDayGnU4N15RME",
  "key33": "5dPJ6JBD1C9R4NcZA9r8rqwXxMox4KbiRbG44PxM6M8W7uwzkVitnRR92VsDbdH516eb65PyfjUGyh9m8pHdbhSF",
  "key34": "2WZbg6UGaVzfExDj6TKsxfpQERxvex6WkK2gpiaJmEdtMehSqMph8rk3vGKL28ZGwavDs1JMx3ajqhd2ZwSZBsV9",
  "key35": "2aZtMaVS5bn32MXU9agBBVv116MEkEt9U6XZb4yqYD9sB7s7rNiepdUjxLbzKv1rd81P9fw9986r5nTZwuRmV1jz",
  "key36": "2Bu4tYiVQwSUyvzhZCUTMkjnQbAxnTECCWfpBN2sWTJD1NQwPNba9H8yMhsWYkbaQJGkUW82muwA1azcwfARpkmK",
  "key37": "3EcvVojX7WCQUDtvBmRUmTFW432T9XLcUaAkHCy8SfEpH5fLYvxHMduCZao1kQraoHVCr88GzE4oWCkjzrbbBj6R",
  "key38": "BY2LY55n8V5vGdJsLigSqZdZjekefujCCSuBqrbdM8NUWxyHXu5ik8hnrBWhqmrZHamM4icxXecW4wthvmEbEFg",
  "key39": "2uDueF8vrpTz1jBWQfCCpJmn59iacNUGetbNUjravK7MRAXLKMBNqwDVttiQfM1RUy1uJSCYzCrttFsanndcWMSE",
  "key40": "4QTTfd2NTvk3RMsskqj8ppvxKTxKbuUr7a8vGoiQXLKutmTWNvbxiw8N8beoTVnMTvZEw3VcVz5tXoEGdjw2Y1jR",
  "key41": "gC1yWWrXzQ9z8GZatHtJYjFjAQTWJLzNrrK2U3NWP5KiXxRtbeSaRzhCgThcod5zZuFNHHWAh4ufFAp78Yen55Q"
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

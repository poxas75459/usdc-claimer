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
    "39kTLikccyJNW3FRBJcDeEoFV7EUmxnzJDmgbC8BGhk9XmPpf7ch4Qcda5Femxu9CJY9gDztRF3AF4GmSuVLhvqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hF9G2gPZTS9Bc6tn9XTXmWDs1nncLK2bsGw7Z9tQTGNzRXRsagNiCKsS3muDXB6F5a8RrkJnWvyV4iLqNvdtUn",
  "key1": "2FdTvEPzrsGjSSHGbWU1aNSqp7Jr9dnaioY557kXG9pZnt29Cc7zuduD3DGFAzEAzyvApYEXQZqwe6fZLUgPPAJg",
  "key2": "2nrcHzeWjUMb8EMLXiEuoL4wyQ6SYxhEUUeAWEZLZk7J4CzoBYxVrXjtB1Z5C3YAHVP7tSuRkrri6ZirsMkYaZQ",
  "key3": "43iTy5Shb6xvfQHtru2JrWSa6HQQrCWRWRm4tiwTtY68FBrwifcsALYxFFsxh4hePq933RwPQHmhBTZmZKLmnaJQ",
  "key4": "5y7bmdcNeQDbvPCVGNfZHpYQeHHpDBRbKg2V2izzEDtsyYRSVpCFB1DKTZSij8fGq6GRxTGxc3oyaLfAaWdnnjyz",
  "key5": "fmEEmkXJPr2hzouQTaK2wsofxESn2WZvwri62zA9Yw53NA1fw4d6Y2hvR4KcN66SJNKK8qbsFDWpzCKN7EaPpMD",
  "key6": "63YZX9ydqYVapd8VuSciecxykyvBoyR8v6Gq8snfNKBvZ7hzS9kQuMduiwxMg7cAu3B3H2i8pCA4KUcTMy98FCrr",
  "key7": "32WCeSc4QM6ArbL97EfLfymv5R72xpvmdtNAkUNpFTBGuS7Si4mNFfZqV9D1mDMr1A2zwTYNMBBveHDwFzc4ypBw",
  "key8": "3u6qFnmKrj6E3TEe7b1EQNoQ3GGfUEuyNm6EdPfTEWTG3NEcEYthzxG4EPnHq7LJkFdbr2DJeJwKnkYE54sVJYCS",
  "key9": "3bWqjgwqo2389ZSKmyJz8NWXY4tkmjm1gCovtUaUT9M9w1KiCFavGDKb7GW7WgzNDZHxfDA9WuUTvSizos93atvP",
  "key10": "2TyuqCo8mQ44m2FTvAbXMhx9B75T2XGkbmaDmLjTK6om6PgbP8p9NHSiY5qoxwen2GLK3grdF9L2fm2fXUQ1HUUQ",
  "key11": "3oxbgssYwusXKNq2zr8Qj6C6FTfgZHnP9CqprAxrEm9XKpUwRbBiwhiF3MtG1mxhDaisBpZPDPBLvvJzS8DJZW4r",
  "key12": "3CcHsvcnUE6TT5nWL81XbqAibXWAY8WMeJ46SHNCmDF23qDNZNfeEXzr2oboNW3gThCsGsS56wQXuDKyv5X7ju5o",
  "key13": "5gVstieSVK2m1XvPzTJV8fRvRVQPxZ5KMoze2VxKDQH5SCD1VnjrRwuQXdVYwXhmdP42DzihXYe99NoWF99ebwvW",
  "key14": "5njBgeyDmrQh7pNS75DJ2WfiZczv9jQP4C86n55tiFZRNVyWR8odP1AVYZcghEPi37WA1E8ChYSXwidahCWwQUeD",
  "key15": "5tpBaA4iHB37PQZQ3biftTmboNVVYJaXoVc246RKGMTe4Z3B2zHDussC7xrsLE8sTvQj76DdnjWMmHhzZ9tunYNM",
  "key16": "AAyW5e2eHqd79J3SdfVXkeVGgf39SNti9HZ1av51yEjbJmzyhrsgEotDEGEtpzuVN9bqvaZiWRagYyJ5KeDjFUD",
  "key17": "33MN5jaAhiypzfA7ivmxsX4mcWPFuFMFGaNzRDm1LH1NqEaC95NHR53YWn6TmsqcnuGpL7BTMhd9iJhwrRDUN5Wi",
  "key18": "2DZrPNePA1nhuyVXkr9jegx8u4nPMqrMEGzMyqKSaKUfnzha3aTq9v7tMrW8WhXzwdkZdHExddZoUTatFqFiqt1W",
  "key19": "4SgXpXvMPQ2Rj4TsRz6r3HuP2R6KmXQuaTZgxCrSkgtAuErRB3qrA2BBRf9ezFLCPdUcWGwdVMRpdNwoUupyeQyy",
  "key20": "6sCS5oYfeDwkeXBuzCSK4Ji22MNRphVDFAZPYLMSfZnnmr98oszQqQifW6noN87WDJ1gyNXT3TQqYnUgFEX2Tuo",
  "key21": "3n42VQx4ZBu6NYJKEVUd3gP7f8LhVBaUjCa3LQf2Tgi4bVcVu1Tf9Mxcf4TvDRqJpWg1G58G6JJiEsnLHBFjWHnM",
  "key22": "3j72dioG9YtVR67c44wEqiHPCimnNn7UGj7357gLYZnV7Fq17mSSdm4cdNpbUX17Qi854ABRznN2azogbvtmZuHp",
  "key23": "3SGqP8FG9fT9NHYaBzt6zBtgzMUYKuY12AsUeVHbkJ6YKouDFdEn6k65NzGEMk4sE4SPrWVbPu6H8XViAYTNPwwN",
  "key24": "2SHqBkDEsAvpt5AKVoNrizERsPewehAnhitWMDvV3pwPctuTtTZU9Rxuc3VvxAZRYVa3iN1brtz6GEe7p3kZ2zGd",
  "key25": "3wRt9tgQp2xASn9gmNSPMzof3ZkkMdW2xkbace9NUUgKuAEBqxPBnhtdjcrB2Fp7ikrFZ1KG4HRJNq2TTcHR4pc",
  "key26": "5xUF23qMrWrdYwBaU29o3svLC3XjevdaX57GFmdhbv8rN1ocVUbFdMPuBnd7CtHyE14eNVsAr2kVpuX8ocDcutrL",
  "key27": "3uEuB399ox7MGBuQRt8gZt97eeCtTySW2WeuggLfsaHTiQfPcUgFQaXeRxAAuaAK6UEjezFvsR28n7BFm1wpDzQ6",
  "key28": "4RyDrh2JFsSDqTQQpSx72m6HFXutLE8JFgYgYRsQjbv6Tk1sxwPpwP3AFfqKZWekuiNztu3PowFjUJoLVrdM8Xej",
  "key29": "mtseRkpD5523z25ZQmdq6uw2Beo4VCTmSukg3VaR5Z1c6dz7ggLKVQZA9W6PTpWEP66T9reFQcnbTbPfCQBwTGp",
  "key30": "67fbsYmaxWsHqH8PvBzFVY5hLoyNLCb7he8pfHA2yhESYURuNTFh73xFFfQtdbkAKVMPfWqCGn8rheZHHz4TsjNA",
  "key31": "4k1fxdfsNTdL79iWN6TtBW1cUEKX7w7LHxJ92xUs3VHtgMsY9wJhiz7AkuYtbTQfgXdUzjrceZnArEDQY9zYLvwg"
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

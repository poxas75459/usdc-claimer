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
    "ELv5yc3qHfJc9R8Hz1WvFShdPdbvRVPsZMA2ch9H5VBYhBcjZbE5yjeH64RWy7pkCmbhZYwvxUaHao7ssHMtG5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKqWWkxsC6mMpC31fuRcC74UfYHNNa6akkwvW1ZF1akCmoLcLku1GLzQPjF2nAmmq9Y2Gsau9Wd3Jn9wX27FXbb",
  "key1": "29tfACmt8Yn3DEiTrQJKZVS2gje6dehoGdQABGejA3jwTPRyCuMEUEZfTGbkKU1ynThedA2wtkBMN5MeXNKifiiU",
  "key2": "yBdcjWJten8ZtNUGuU7zzzmqgCC327KUFL8cP6pZKDE3vHZ4WiLdD5s6DujxxRzBq3nW7JM3z65YiuZf5iy8PWt",
  "key3": "3M2LpMWUc1sGyzD4Qk52oLbGUwzsixqcSLsfn3ViXLWPq9iwrA4WB5PrznbcRMSDQtiTmKoDivsEvnBsJGghb4gC",
  "key4": "399q7Sk4PnMtECzsYhLbCsw8WFoTy5kzb8LP29yAN7hZeTqA7QmuyKUbcwwATWEN3R9RMjT4zHTGcWdQkyxx8xuA",
  "key5": "5DCrFxVmgbV92UAwj4F579AUpD5hhdcDDTBp8fQtMF7NuBA8f9rpK1ScWYCtaEwfpuTHoJneyKvSj2JQhnhM4928",
  "key6": "5GR9PTEx5D9NNCGhUS5ZAwmaSo56uj5d2uFfdrQ9nfZa5eiDEawpRzJvi6vsnZfEbcbLQTjRwsz5WZhCZsxRGb9v",
  "key7": "54HpCtkUL9bNvmWHcwK47ZVz5voZJZ3N2dkdEiuEqXu5sWuqoh16Mpp7MBdd6vWz3Ljn1tYxXcNmk1aWvvD6AxMc",
  "key8": "3YLEhfxEQM4sK4WPwwbFAgnuqByjPe4D71cZFYcMQbAgaSQ2kYTTNwVdatNA3amYgw7h8kHmZT99KYAayUyKukc8",
  "key9": "3iKGudm9QTw3M4RPF3Lcey5HqN8uMtAZJQ1NcbEGHufVT9tYhcbv5ouegG6JET5aGysk35w8i5QkVhWqqsc3CNNV",
  "key10": "5PR9ybctk7WXq6GhybDdc3HZFBtu1NKoBogfifyfTGBDp4MmvfVoBqbxZPmXZMvNi457zT38qF1XRHvcy6xe2DEM",
  "key11": "dd9G8Mw7oDSMArnB3KNAnpGXzzeboGzS44EWNeeCyTn3h7t3Qrkxjb9dBZUJXPhbJxS5nZUsVp5tAwRj2AcCmph",
  "key12": "zgV3oRZP2sHQrxnuNxqhQAVWZgkK2St22Vnpgu3w692DQk1rJgKS6QZbjahuDQbTxwY7ydorQjzS5NPQ2oZyoZc",
  "key13": "225S7zzFkx8Mo6PpNYuCZEpDKKnJYYaFQQzbmUhrnc2Niqqz7VZRviDoVq3fnQM8bnb29GyEjtZagJNAWHf2h4ri",
  "key14": "2PWJBCAXBQSE9r7wTC4fHq3kfmHZTSYAQYBZDANhdYeD5tx3jjmxJMX6yV6qoyVYMPVD3GFhxG97ZFpbEGTJEtZs",
  "key15": "5JYJ9Zx8uYPu9qX2u87fAHD8VWnYjfsweXkNwJrEAZjg8cD7bKg1icCryq4tcLN7pAPjk6uxvVVhYotxSHYsw69Q",
  "key16": "5ycUd8S8jsSsm4qgSCFAzovaXr6LRgYzJu4fvmgFxYvxQJpkQ8hsgK1uDqDMLV82uh4AdsLwngjVbunNaDr2hNP1",
  "key17": "4bRFVnz6L2uS7VtSr9wSc1NpaaCuqow1Js4bpw2gEdKmU7LgXpUx7PBdCoMNHzCYyhzPDj3bmqUq9hvqTK7raBoi",
  "key18": "2eQzKwjTh83Re4mjJU86CL9Y5yTK1SqgdiKPTwyqmLeoewj1rPKAjcBnPvBoMMYRrXSwyyvakwd843YQANKiGPed",
  "key19": "5xz2JRTbR6gSc5ouB3YCfcBLLstsq7QXXHXnxfXG1zfCHZ2WFSmJ71AKRWNpL7WLLsJyQjP3h27f1PeFFoa5GHAL",
  "key20": "4ASGejcdDGRxvFbvFTHf9dqceWXWjE4ZAn7iHNwXZkY7rGxUmN6zJKhQHQagz89CKPvjrN3azrhTavHKSgQHSGo9",
  "key21": "2wfCPhFt695osgLVgQV7uz3oiUm5nnqDmWqaSaaLTtshcK6PT6z43LRPGQjS4EjM6P85EwfUFEgrpED6W8s9hHaU",
  "key22": "5qNKQrDxptEXehyLCfUD4N1TFAGuEdA3213rR5B2qQP69i8MxzY3xcVTs1pzYQPMDoiU2k4BFy1wu3q1vRtnQHmX",
  "key23": "956e3Fk9Kc8mFdddoWd92Sd5S6JRp3fPBeMvSVfTCj7F5Eg611TR4BntvFmMmBkHvvMLTHvFsv3UBuY4EjMrjNa",
  "key24": "mbPYhib4pKXP8H7DNUkwdhem1GaxJCwNZs5wYbX9WYN63eRPbW462NZMKNCdk1naQax23brFRhd33AMBYvFKYBd",
  "key25": "5wECHZyACozD95zHrsqobYELBbpXsxGYfXr6eGUAok8nFZ8khiJhChjnjm1oAgjnYXTffTdWTB4Txwqws6ZcTRkx",
  "key26": "F9EfK99xcM9xGtfg6MFdDYVzPgEpgjd1DMFoGec4Htahn6U31CNGUhrKMGvbpCMUjMGFzvhA4RTCNnXDngd4aCu",
  "key27": "5z7XuWaSFW2ZAU8LBK8yqemYhbN1BXYceyyPmrArmhjxTA6QSzt5BSfYGvB3Wqaj3autu1w2YGeH3X1CbYfDutND",
  "key28": "2i557w3qrmtW5pDXHHAmCGYtFEw2AFNdPGoMhqa5RXEmHYEi6cNx1bDVTcMiJRfET5KnBDRsXSrNXSQcMJ6jqiBN",
  "key29": "62MRJgFU9JnjteY7Us5gGeELud7mtQ9Hfr2qXVoMkLHMvTzcGsRmynRX1sMiJdmpp6RyzQtDMqDN7VRR5ig2RuSA",
  "key30": "4genoLVmEvnELornU9BfZrLdqG4XbqqdFEGYcGyeHTNLnXA3jpYBV7uL3ZytfVvyveu5fcYP444HFAALDJzZcXEo",
  "key31": "LB3hjgtYkEHYXmmYKyJrkj9VFjzx3YfRnJUGut11bM2UfHA7FQ55os5KuKfUnrxMUPYWK9XWQkSeun78iCr3FXp",
  "key32": "3StDNJvKQ2hfNsgGk6KHEGj3sAWhGH3rXvovyJrUdaCj59f8Vs6axekRDQtAToJoqZiRWcs5mn3DWruXNXG6rRjB",
  "key33": "GZgGdXw4YKeH29wTDTaCoseqmmD7vUy6fWMabLN2exe7SNCqsGMZL5DDp8dKkmtGDmBcAKiYPfMYTQnAyxbDLDC",
  "key34": "3Ai2GPLHa4WiZiqtkkFKEz9weEUAwvnEEMywanysfHghTKz4ct4crjLDto1EsKP2pCP6EZZKVvrB7g72HKrcZvrJ",
  "key35": "7y1DsisEbCfDZZjzVx8xmcqr6sofJXKzs6EhZYU8x9U8SPuPCJLjNXaCGyxjPpCUqp19GEXusRPtY2y89tqNciU",
  "key36": "5eJtVzf8rfz8EBYapzJVg5Mv2GPGAFfhsgVEg2M7bUkuCxWz52j7o9jdN5r9shTYEmM8Bwcbhaqynf6kLm9fbBxP",
  "key37": "25Hv98p2J9pA6Cy7xr2YSXpG4ZbcSAcjLCJu1MyMP5DwWq529zq7WsBa3xEbsVTC2NHs5vq9CTbd3QUFMYYb7NpG",
  "key38": "5iJBSWzb9gGshutVBTnfXSBS3ZX78VCdzNbxLvWsWNPseSyu1Z9YPVHN3NMCbNfBhthBuDvyzoiBYQKKecdnj9me",
  "key39": "48v8VhGp7Lwy3TxLNctnvHinDhtCrmRsxt2B6JJ1RyK1ZvqwwtKNeoDV7o4kU4rpcCyC93yr9ozSBo74aViAxndS",
  "key40": "21a4V3WfNCWkTxXHEdsG3qsxykz9Un6wX4WPJ8BHJeRgg7W6fxU7hAFSYCkXjB2oAouYAH71j6SJRcMVzHciFuVp",
  "key41": "32fJyBj91fe4NCzXsfUm5vrkJpw9GLqRoRAjbi1NmbQc38p5ScmxhAaVVHnpgP5HDfhT8ZPsxY1U648izRQDYf9g",
  "key42": "42stDNsvKqqwjXa6UTa6U8rch61P4So5HTkvzY3gKqrhGdJwBuGUgMCzjLdGJi6qU85AWzDCi6wVwTHFFoE6Nn7P",
  "key43": "4NEu3vJow82WR626Wt7CBVD4rAzn5iFG1g7GWN1amzn5Du2ar4mFKDQUbCuu9SiTQ52dF2bgGj8AjWxrNgrYP1xi",
  "key44": "5rBswBw8HgYHQ3dZ63psDbDq83UG4mCukEiB8mULqTVdEV7rQ3nMY1D2HRungbEU6HBVUwDuTcGphcGykimGmmSM",
  "key45": "5U4LgGEaqsWv7EnpFXEmbbg8PXCvxd5Sz9mDji3WhehjWjxAyjoQWY56cXiekrYmpcebna9JW74JkArCT3rNPRZd",
  "key46": "4tGbEuqcoMUgem6Qk4bCZJJgkxLW3nH9ARXcmKYst2kyNKrT1Av4fbGWwuYu6rn3yCF8qX5JVJBLEeP3nRfqU3tw"
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

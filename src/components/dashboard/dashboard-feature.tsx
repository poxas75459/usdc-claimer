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
    "66Y1tbSoEGpcML3d8Jwrt6wsAiZ6bYaJVATkqBcRFEib8H5ztEWr2LAcTJ61rht3nB2vQDcBhqCXZ8kGWd7Lsa1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZfpkzGRSxbwzfH3wx1jgpYRWZeBg78jiQwB1VbB3eZqaEtvcNmTPpeEhGKindwfTBvAHM9Y4ur5S64C8a3DKyV",
  "key1": "5HLshpw6YxQkr6AbRjtuAKxVFyJSuy6wwJsxqgQZK2f8kvftCafEaxN32xZ6piuYSs73LEdaAVJCr35x6F2oBW7o",
  "key2": "4wxz9rGiyJtpe5xpXqPinCojBiEJv7FpN4bHUCLpvtRafv7W7tnCke5NFTdfJ429v91dTiWBBwrNUkFiVkSJKbpH",
  "key3": "3u2d1cvRf2vSQ1jcVsL3RM8HbueBEwPzoPRmre4R1VcqHRHe296u2VpSjRgJCu7b7YoeSpJT9weKp3Ap6HWfLCjP",
  "key4": "3UYmWJn9e9nuq12AgwWwnxD3TRyKg6r7G2gXSNi6sWxMadmBNh1QU4m7NUpcdfMiLLuU9uPZE6rBpXArPfWTJMjT",
  "key5": "2adCkzVXRxXM9D9GmmpxCj75kLq8KfyK65hJcbGYcoRUp2XMFrg1n9pbijzNWcmGNostHMrbMaztLHwvQfpe6V6o",
  "key6": "2WrtF49QqKA4R3kRDXPxP7FrPy5ftmNvU9635YzzEVSyzXjjNJ3iDtk5XLxRczoVG7xesT9rfDuQps8UJuRWWkKs",
  "key7": "4fhEHatBnw4eLapRHxfNFX3a9meKChnarkyT8gHQ2SoJsTxatdsVSxyPAMyiajP4UbDK1DmqtmfjQfsDkLxT2yy3",
  "key8": "2ePCpupcKDrEVEsSjq8VvV3T5k16udmsLBZoaCbuHPtfiSztxwoQsAcHqDep19yYFrM2yzPVW6cUWY2gaKtyo6qX",
  "key9": "3Lq1XGMMypLhKHhAujntWagngechHDm1cAh5eD1SpZVS9Nk1p6J1cupwfWVMRvgwqhcAdJE5VQrUpGgHpzmcFy3p",
  "key10": "4pE3SzF1iCYiHPG3gb6PyYxKzZx6YQZZZr8iHHgpHmeaDPb5bXBAJufTRrKU8nKW88nQHVPaEEQkG2oYFaj8awU1",
  "key11": "4P9S4F2qU5cYyR3LVkHN2k3hyntJTWfdqHA7Li5rKZ6dmQYKqx81fDZpZkovNV2HemuATjJs9BPA6j4mVvS771qg",
  "key12": "YCa2d2rSz8nKQQwmZgRMk3bLWG17P22Lg4jUVYQ7gHYZQ74n9pGr2YUxh1jEgKwmTBnxRfi7AH6CrVhM7EWwghG",
  "key13": "5tTg7HVLJ622sRTsztG1KpUWD6JsoHqCnMaybXHRvTh9mo1oif52pRrF6EV4G9jZKkygbE7BmVSiXtrWXHeJKQSJ",
  "key14": "3fgqQ9ExqY14G2jHcnKWSZg59rvwGND5ScKwjeSLjE2mQd6i7VgSkVLte8HcWoQdkd6zxHAE1LJKwb3AYbUT6Q49",
  "key15": "3a6TdSxdA1DEApaiNGS59mwYg3aH3aYTvyrGXH4j5ogNdaUAhKfNEYpo73TzUJs834Ug8ebyJYrKsv6qR4WNh4x6",
  "key16": "4mX2MqhcCy99vCvJhoF6ygYNraTfFkhaT88yciDifajzBE964FEwKywYT4yvbPii3nUrJc8fbUiGHLjEk1aWQXZT",
  "key17": "2gLkhjnK9NoVmrLDrqQCovEmb7bCfmbqwwD3dL3t8F7R4LENDgT8MpnEXj45DAGBc6FbT436RtLuVYgGZg8dDrg7",
  "key18": "4cRe16DDQGtow9cwn2M1Cg7Zhu1mHhT23XpA6i7kvUnAYYZLQcTzZoEkkXeoyBz8Sd9KkzgMbeKd54KkhT45mR8F",
  "key19": "43tto1PeTTsDNUxmJxQ68P25cgZ2tS2LjFUMEPmY3HQv2nwTYGWJseMPjspSg3Yn4e3cEKbUNWEgShwwuPvKQxSw",
  "key20": "5ggupVLDwPuuKUkaZaM5WQ3wQkMg5eBXSPf2vTbEWFvUrivn2hosZDigTNYGJeyfM7jt7u6sUaaZ6kPJKx9TN4V2",
  "key21": "5G2cQwT3aPWju6VDzH2qXxbzBrZMm3Nr5sAtWRXoD5sjjgExinmR6rTKrpgGBte7NuwAoJspHtPK6XfEKoYzaDhV",
  "key22": "5BLCEyfo1zAdxCMRRnsVTEeEtecPVSqgKQ6WQpHijHP2XSq7r7AbDmX6CoMWRczwmNoRaY1ZPdfkxmZsd1z4HDgE",
  "key23": "2TvjFvMF9FDGCjF55TgYkJG9tYd3Pkb3HHdLi34NVhQXftL5BmyCvC8VfaZ4vduz3Z4kaYCFk4vkG3vbxMdR8S9S",
  "key24": "3WypPrip1HReqA4QUXjmSEZsSkP8DUswj2qkW8UErHss4JSgjrCa9cVv9SQUdAoKJSUGMad8qysUxMXkXNevUhd8",
  "key25": "isZESQgbZ6p6f82VGyuEk1xZBo7dtuqzPorGz2fZReTBS1ThFq2epqBagrn3YYWN78xqMSnsgYBHHuaJ9jFh6m8",
  "key26": "3aZ2cLbeyqd86Lvqfwpz3NcupDsV2yeyr6Xp4baLSYBtjp5BHxDtrgn9aDXovrGT3JMzT3UbYKvAaRkxGkMbPJFB"
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

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
    "61NdemGtucwPLH68exYNFycdVtMBCQzN44PCaBfUcRzDH8HxBc6d8TAP2dRvt1KKTStgK9ZhzRJj2Xj7Uw6MgP5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odNms3is2Awc6b3WohGwNDZ5KGgTA5onZC2cJE7uHKixPeVW6t7GhmEeQFhA6RSXrmnmptRnUnvhs2SeCy4mb1P",
  "key1": "4HZSzPSRtBFufryAVVT1vaNuzkiYQEeU1SXMTZhFcZduHcw4ZXhdLYMxfxDmnBazSQJVPwKExVifgpbYLaeyeuFa",
  "key2": "5XGuUE4t9yQf5rpuYMza3PeZz2wwXKJbXe9zswyR6DuqWxyTR14H5EiNoXt2gzK2dwGuHZFPuz8zhLrY7AsNUfPf",
  "key3": "vMR1dcuhkxjtrjkqHHtZG5rT2NtiouSHmmtj1YuvvR4vFVikNPKPLVdBW4u8Cq5Q5tsaWZFgWbjjWCP81t9tGEY",
  "key4": "4FqGvCVgdhuA7JeCYyPWQWfNDBy5FPyCoHJ8fDjJRUhfvtcDs8wegFFUxaCCUfZuKe7hK5PpDvAvvYXrpMVWXw7q",
  "key5": "pxdRPR93XdTHhq4w8iECSoKP2W5RuKb9BAryZBAgPbwvuWnrMyVuw2ny9Ucvjef5QagkD4c8ThdZXD7CnkKddJP",
  "key6": "2RC9mxuV4pQ5DBmPWgtT5BZLHqifhasJo1swWBtLfEWtQANBuc2EDnth3BdCHQPftnys2ymsVPqV6DWLLoVHvm2m",
  "key7": "2wL8EzwrKfmaf653PcGURUYqTu47QoC5bXskqnayum2Nzo9exn2Qjb3M8wgECywmgVdgNQDDaGfp6Lw65JE1ZE6k",
  "key8": "5juv6it1GVyKjeUWbABnokxfmRFqCMU9VjcepULAVFyMn8gQGSBwTTerKy8tSqQtVbHcPB6YSvGs37a8CBDoLzzT",
  "key9": "2nyDetWospVsXAdHPuHdiEgJ6Y7mZJT9sbmDitpisvBtaKpy2CFcZH2i68LoojQUHPVTgGrEfkWE1Wx8HW1GnhcN",
  "key10": "4N1Y7HbHsQ5qfLXkUGm1ynsHrUkWx4xVk6PFZdbHYPpaTcmKQwdY7yyTuvjdMU8Wp2wdMve4ndiMCrP7kLumAMnj",
  "key11": "4khhVWjL6c25FK4JiRhX3qC3iY45KFUigK7xjXgtvUngzKKTP2tovUAEbEgNpQNFFAfSonHy5KLUKe7LP43wo7gt",
  "key12": "3GVzcBTjcTnCFvnQeTGQnht7kWd9e2KuQwDBGV268N1A3cYoFz8E8Cc8xxvzNZkD9sRgMX2NwUayT1gYSqusotYx",
  "key13": "5zzFJPtww6z3Dhju9tTKUL4ns2q78NPB1wgCMiTFemte9qkkmCpMgUWtvmMbhr6oz2fwGFydt8T6SSVc6thARywi",
  "key14": "UWdR5nbQs57xKh7AaMxojXjNEZAWQiM6PY4hafAd888nD7xmUTTPEorzwKxDZX9UC8sWKGf7FbALB7hJQAT86UF",
  "key15": "tBvSsbnYbEz1tM2DQfVPqRXUweW6Ma2hasQ3RVd4VE46mhxv112RgQVYUt2GEtcY6VzQoDs5S3TAM7H9mBKVmb1",
  "key16": "3ibkPBcfwPrV8AnnGaBXgyFU8HKbRJzmasCLnQBFRUGJCUWWTLJSdND3jG8ByYHsYsquMnQ3R5QQoH3UQxx9LhKz",
  "key17": "ryKbTzLsi88urattVVFw8GtbBBLFNKaPVDu6GNrK1hyG3MFBHQp5H3N5Zf7jnpUfSmj8Zv8BmYrnSVJ8EY9nWG9",
  "key18": "5o9DX8JbXDh2LLVd5zW646CuHBNnZNrgPd2aMU7kLgderR4js6GfDzuCQkpDqTDhDjg8JJDYxHc36FDAXf3Lew7Q",
  "key19": "viPx3SKzhXU3LuPip1KsAmXCKRRZy7HDq4oK7syfUWLNo1zwX9PLzFYwtnkL7KS5kMw6ko4xkaH2akQimLoWWvi",
  "key20": "5orJnU1NpTHNRBX5YMG5TJBy3XeTpgwyAj1Jw7gqaGNtmVeUBADbacxnNGDb9fZ9TdhN5KFpgZgfyibpMVUTfUQ1",
  "key21": "4gATBeLRkXG6q7dz36YxHrcvSZrReNV7B3AoHcuERmvvhiNHzXvkMP1PKTToDAJj2YEzKX6hK47QfeahkGELuoVg",
  "key22": "29pCRkoxdxnq7j9SDg3CUPBmjg71iTeyBp8repbjH3jWSfxiTv68EV2M6JiDUeTv2akLGnMnq2J2VGaNoS7roqkv",
  "key23": "5oErLZ1rwZXLHvHzLqYMefdE2jJDRs65xSLthp7iVeiJ1JSQhSjBT7hUGcUABQ5LU2Z1bkHnpDYj1wBPgNFJsw4E",
  "key24": "jDBj5tFLBrm6SdVEdZHyKRQXAMTs2Yi9MjsARJYa36mEnpamb8ZAL3n19iTQx99XvMtc9eUuUNxKBBuP7QL8Dqr"
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

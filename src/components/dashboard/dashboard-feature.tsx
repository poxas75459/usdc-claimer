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
    "3gabWw3WDJG7Gjsb7k1qTaFnJoYHwBwsTEgTzjrwAEpWX7TFFtqLv4GHoMEsxmHcAodUeXkruu7adzWyvHsf8NjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mbgrwXGGsTPDGa1caemZbQfcobzRjgf2ej62orCpuBxteYKshtzm5xQvf9aaHZEETCTL2oFdHh6y73pxL6ipeN1",
  "key1": "4e6BBYNzZozeyCTGNyxksAsKDiDq1oAPiHLNTJGk1dR51XfVxTyLdpQWcfspAvL2ominGKvzKA2dnJzVMDXWu77j",
  "key2": "U4A4gQfpg8xsGazfmGJ3E1hX5QTE8qkuWrw4xNzDEdvgkrUCPBw7NJxcHDKXbWXfBymx4Dex1sNpuJSXy6A8ZcB",
  "key3": "3XxL8by2bEwY4DmfnyzEsqnR8Xs9AvHTZapfDsjZ6apae9JfyZWvWr3LaxpJBmdXvcWZpcvVh6ER9SH68yKCk5Lz",
  "key4": "2VYKNm3cmRUL7Li4WEjwQQDMPMxxDxgTbKkmcBgJzk7X1omqzKTUrxB4vGEEWhYEAyWsq6A7zw6Zvm3LwXXiRzcx",
  "key5": "5eDjHtdbtPvppJooBrPs3ca3arYQep94wffHaPsU4t4bRLUvoPeLWUYg8DoMY3FmkWe6juqVGM39iset78yEuDRC",
  "key6": "5nagJ5YUKMCrCn87TeZgFLQXtmq7EbRtoyQ41zxHoGeT5Rr8uCjpKnbxGH8Czay6bfU4ToEJm9kkdZFRBzRWtqKw",
  "key7": "4BUwzjoya2uU9zA1T34yazenSbp9cbBe7ueCpbGoxu2zi2w81WwFSxcqiogRiH3MEwNExmQph8VQs7PoFn3bKYKE",
  "key8": "4CTst2dH1GRfq1nvhx9vyp5sc1xCPWDFToiW5FtxvXxJHTD4ER2onwckFZLFKUhR4xHX6oYUSBE9q8B8Hqm9KBiS",
  "key9": "TCFWwcz2GPw6VV6hfYsPsNJKDs2bmWU8L1aB5DaDaoY1QKqKuC78XkGY5bAV5fuyZCTucYVackeeb24zXr8uBKa",
  "key10": "62vMBhAjWcWF1wZPyNaLcua3vTpz1PkudPgWF2hgvnDTVjyuevpnzj8uPGSgRgxYRpwvdUMhmpBA5LuuCnJ7xeCp",
  "key11": "3RANyrKovd6W2tZUdzPccWjNR2uzV9c8b2fCoc4Ji3YtbqerW5EnvVJbjLP1ArGSxsqDkhycDT1yHWD4f5hmknP9",
  "key12": "3SZ595jPt29mn9h4kEJd83zqMt24foE3TY5ct4XYSW98bsNKhjr3kb8K2xk22fjEtGo138T558SBmecywsFtW6LH",
  "key13": "4eJfXUEaug2D1cJv32CV9PTU6SsSxfu66HzpK9xDG5Xu28z4iATebfqtchWxHvT3q91NDYm1Mjg6ovRdfqNSLPzL",
  "key14": "5NTUNEneWLgm6MseJwyhoTDJGmj1mpoeqB2MKNvNjd4K4yw8HmMnXZDpB1WvT2Ycd5p5fXzqXyFNAfNBoenbEmiX",
  "key15": "5sSyry5Kjrg3bUGhEnAEje59mvM4n2H7MuJCiDTb5tq7ZxJTKMcPyo1HxzmB4UBfq6LMGPxogWeutvDT1hAXpvYg",
  "key16": "4wbeLgRs2Yh6GhdVyZB5XiEkzJ2aXLgrt7BgixH4yu1VbSBLzQ3AdxpvMkxGb3U4WAYF3vTT52WZgJRpyzC3aoup",
  "key17": "5DTF1yrzykqhgjCqKvKpHvc1uqqbLxxVnfPdVD7QYaqbfCgec5PUgx9AEdgcDvgfuZW6DPj9PgNJV5QNDpmkfWyF",
  "key18": "3WZhK8mU6nqSp8TV2YYukN21EkEiPwcaVb7kDnPo2LMLyFmnE5PeGj279wRRKxrSmjztEwqnviULdJDeU4f6donZ",
  "key19": "22DaPWmDcshn9WpKoyBpipFoauXPH3RprKafM29BTLqDCBfwU9cGKjj7JHdExNhi9v2Jko7347nS3NGhch6A4ht3",
  "key20": "5DhtKZp5LvYUs18MTmRzSLNRFxyEMnizoCKvaXY82Rot5hHyeJKDKq6gcqLVamfLcg8GBzDuspF6fBSCUygPiqW1",
  "key21": "4gYRegDQQnbP8wZwYjygyYjNwgR842KqAuL88xAS7efdbLffGMaRs2u8ZBqF4vvoGbzna785DWbKJpyJUsZuwu6c",
  "key22": "2r76HJDTkQadbpWg3a5KMG7KLuQAuttmUPbf3F73jNnFKNYQiPNuQXJtTLR4af9jgX7bjjPSHbkMcjBMWBiSwo89",
  "key23": "32Zow3qS5hoFVJJmFpNDdQH1behZF17EAEfAQ5bKYY7oFLHZBKFZihTYEDSQGtsLLMn9KaWgGxrcCdtTre5tbjay",
  "key24": "2go7VuFQ8iHfHxaaZMQuUq9ZjNNnNELPYBhu44zUYKL9nLHR6aSgaUkXKeoAfCEsJ3PRW71arUUTg6fNjr8J1v52"
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

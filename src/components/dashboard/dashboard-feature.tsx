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
    "4zu9yokQXKzT3jL5uw8nQcy88RVbpVo6w5Srsh2NXoJ8uGCBGhbtq2yfS92NqU7iWQg529oUJgZTo7g7AqAYqtCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57UPXp7QAKy8e3q8mVeEdFhMAvwoSBstCVFjX7D1HsJ3dNxbwAwqwDybawbew3qyBKsCFxRQeQtPdCgUSnUQShtv",
  "key1": "3QNbZQnfQX2iKWASZdZ45BTbCPBMpJvTAXVJ2658dhPEfwoigW4DofpyWuvnzHuV6PbRzUNziFipeUkMk2v37jVs",
  "key2": "2BwqrgEgZhyGWWXJaxECLNDRVAReUCEvnTvsmgB3w12VtjkBp7gMitEZFQuqj4cg96DMpePvVATLNf9NbPmZ6y1P",
  "key3": "36FMSm2UHEs5d6T5ZJd9EaoYsn3Z8h2HbNtxaoNWscV464hd94PSJiYxTo7Sfz78A6jVZjHBH4bMyghT4K9cHHPj",
  "key4": "keLzuFw4VYAjGvKBRUpKmR4Ci2frsJtefwCWgZ2udxCbKpJ9GfURCexB45Z5j5Bt4HXZvW5oeKerdaEa1NWeTMc",
  "key5": "4wqFGe3Kd3nEbgWY3HTkhjxnqW8BES7CjcaUfDXvruDjrMjMm7KxcVtKHgq8fDAirte3dSN3RRwXFcjyMAdidPnb",
  "key6": "5ShhtLq18tkqUKnD2dTyKyVsZeYi781agMuJbnrgg5HPpsCgG5o2xFGBB52zpK94TpTM1d1WT7yZkjPBge2gr2Qz",
  "key7": "utbUuc7RAzFgQXWdiQRDeooYc3neYvixsC2sUm3mXuYGntPT7STBwyGV5dMJHo1PPo51s69rdhsDVDXJqBS1t8G",
  "key8": "2whDPjyoq8zsLFZN8KUmtj2aKE7GkqcHCSrTN23Yu13KnZhoh62FKC4HfrtCu5uoPLiYcuqX9qRYtJBVqXRDhhAe",
  "key9": "yE2JvicPMc3iRrTZ7YDFegcujavN3kG3CHtva9jaDqq3zc37xdfBvdsVsqrVjTECBaub5KRwCYhUVgnSKB5RyJY",
  "key10": "3xyREh18PVsLEh1gBCDNCpTfmpsEk7kHiXGT8gtXpxNJMzFTsj9oSarNS384LRfkAFUndFPfBVeK1NenbXQRiyQB",
  "key11": "fEp8mVYj5nwpVVdNpJDYZa2J8ToVBsCgA4TY3aFthxh94swLwkJw86op4CToQ2Jor49QHbsf1JJik5K9GnpdXqx",
  "key12": "CeZxW4meyJaycvnmKKAE9HajN1xb6xTGCHJmWhi9LCBdZxu92eWgAwfqmVqmD95PgdKneZHL1FgFBAMLSnqeoAK",
  "key13": "3q7LDoPbjwxVSNx5D21SPUCYSchBvHfxzsSbqN7Cavuwpbz3GtSBH92XhfAJ6nSrQqwZ1JBJh9Qe7PocASnL7gj1",
  "key14": "5gzZ1JsJ1KtNPt6yo1uGkQw9cv35nyxfQHNGpsEH8RZMAwpaLA1zqFU5C1veYjB5vfca7qFp9yHvswYEdbEMRCwV",
  "key15": "4dRGGC6xHywymBn1PSQUsSjvSKhRYejiZiQ3GuTLYndvhjJ5jfKh27VibzesHFQJbHJT2v4QHfYjGe88AupU9MAn",
  "key16": "4dmBdzyAuxEKHvaRSbEKwWwp7q3kRwv89wXVqJXTyTYuxQ8EYFM6VVqfqiRdyniUFFt5V2wNukUKXuNX6d4M4RCu",
  "key17": "33THjMZg7yUiSnoQMhJPLwVFkjtgVG1q6VSHbA7P6Lu1gMF4YvN3RvaUfdrxEdPSJEopuh6kUZ8N349fyQbtrEjv",
  "key18": "4hRf81HzBWC7Wc7bPryBzwNNG3CNRGRaXgapU2WwSsJrbgBtU8iQWKATc7L6ZyWZRZAmvL4X4VYvXbCuKESYgCCw",
  "key19": "5CZCUtffU9L1yxJiiBguDUNy4Y99BaCTxNzpeGYaZi2bCjGDenadwFZHkAWtzR2AagM5ykJZMoaVpGtKQcsqX23Q",
  "key20": "3zWb32ZLCEbMdSCjZtt3YJiD8aKNRxNrEpiA44HhAWwtdQvDPriEAWwNi5VijTqESnDz6XpWZJoNxmrApCbS82Qy",
  "key21": "5FSdBYUm7UgUBLpWujyTQMjRR9Xi1RhvwyknnZUX1pGpEKbeGVbg3PbTtoCL9TQ761W7oDqMZmbibS2YBaB4eyrt",
  "key22": "29YvJxEiS2sJuH6fXYLMcLnyMrg5fdavqcNqxwjcG2z3516Q3YUwxxPza9G5ZnzFxeQvEiD51EKucS4RiZNxWDq2",
  "key23": "hNNJPavnCUqasUPipDJxnrTn4zqheLswAm9pzjU4YSt9Wf1rpBYvMijt1Wtsr44gdbkJEGfRGNfrDXEfhdhXuQo",
  "key24": "5RVmttjW13EAyqgs6aRVTNYCjQAmmKJzm2DXjpvZLHMFxcFaM6JhcXS4kyJ4BriQmjreNkogjT1Ds7PEoDFNJYmQ",
  "key25": "3akwkPLdzCFTauFubhTaX7vRs1RTGQYJkAgY62tpHovexdpnedpWnXztX8w2Gd551MuoQzChLrVVJcvGzKwoCt9Z"
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

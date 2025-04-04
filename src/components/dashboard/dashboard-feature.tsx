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
    "5Qxj9BUygR3radtyDn5RTxfeX5HMcYSFsLsXGsj1bkqqv2hrxr8ihS8RaVWsKLt8e7587rSM59fQNhQoTvxeZpQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSQ5PKSA7vTtm14cN8zVTmXfCyYBPU49h7F7vqCeHmpnEb6UWHgyzGUcb9Um56nakQVe4jAsMMPwfsnv4rfYp81",
  "key1": "4rZhHGbbVKVxyqnKZFNjiFQRQut8qUSSLS35aWzhaJx3Z3WyGxYChHoNHezHVugZ7HHwr11wvE6EKaaJJoxY35fU",
  "key2": "5myfdyg5ornuzj7avKEXezKgFx4QDSUiRaknpjH3BbsWdp9PvAQheafDVSoHA1mgGbX7UwnQriMiDQxRDkAxMz49",
  "key3": "2Ejk1Go8brofJm3igJBm5tZwu4mXDPBDWXony2wDjcAzYLewR9bTqKqhRi3Y1pYwQyWwxAQ7KiiD3CQjqZHgcDUP",
  "key4": "34K4sGSHv2zoCMWjkEYpx1sfacd96LiTW3w4Co6B1fWWhCvAveqfdcifp8AFcG4fryjXsNSKP8aPKCihAD1qqS97",
  "key5": "3ccbFJreLDya7L9jZrHtbVpdb9wAVP3diDCSHTUFhXnou6rj2Zx6gZRbrtyHB66fA8GMeL6ffVesnArk1S2mj2va",
  "key6": "4rpGkxReFLts1iZjbT8whWyeRbmtbYRDMKYPCzoLitj2h46Aob7qAugBbJWbDyQyspcikNnNLgDmWRp5hhY3kB9D",
  "key7": "5UEC2VepPxJ9XMMfCM2EowaoUBPRwUEUcF2MAspajn667jGogebLmaqk4haQxc16a2d3xf4nxBjN9g6MMudz9nNL",
  "key8": "2LRukUFduNxcRh91CMVsCVHcnza3fF53hmVSkkRaUTFCniavkX97wWLUNm7TrMP7ZDCb2FtsbZMGC7cXPjewJPLL",
  "key9": "5cURpzbDMLqC7MCdsgXnPaXJXsHWGkRm1ZNQfRo3tLewhx978QvFD5pM6gJ9kEFtt1i1p1aCRtseQQ8Zyzisdjdm",
  "key10": "5TzNdbZdfYjQwnJsPuo1Mtv5Jko4P88E87BfUgJ18bTywxh4qx6kSMVMFZ6T1MjmMdzbekdkRNwHMqdDSbkZKkhr",
  "key11": "4jx58qHmLxg8uoqn7wqWH9c3EbYLPKrJTj9t82mpeCvC8myJ5zToMH9QZVhY31wsP6o6wZRoCb4b8iYxhtDajSLY",
  "key12": "4jwv25DLLCKN2S8bmTiREFjGYkY9npot6bgh2kT5hMyFqUnbN2o6Y1FKfEiGVLaKn5Azi9EefnQsYhDctoE88SXB",
  "key13": "5NbD7GwsaMEnfdR5bnr99EE8FCyYM3hk9tDsna3vVyGFLn3nYPUBGxytqYZaXM5F3ipC64cgDULjSQJiyQpdhnP1",
  "key14": "3dBpmiRQF7HAdewDZNR48inaP9LsWq2X1ThZYW2K4E3JZcJChHTYpWHYENoyXNuAjv1auJWUycT3VoxcmgDLdY1Y",
  "key15": "mDR4C3hYtjJguu1n5gjGPA2WVnJ4vSj55o7MhcGPCzUqHvySY4ehxMLrpfC5nT1CH6CBruc1B9giwWYNDiFvgZQ",
  "key16": "5Gpgsuqf5FFTZcNYSxYvBpQcSDxJZg3YgpR8b8kVn2y5iyQ63FRFJTci24d86WRyknDveWxWftm59FvLP4bvMDrY",
  "key17": "5AR31UxyLZT6oR7EttbL8RnXat5B8UVkZzmU5M9tJXb8Rus9rFnxmwG2UUaMv994WLRuwvptw5b1C7ResDEWQuPE",
  "key18": "4E7Fsgim1tBdvGpd59Gss9CRtfki9Rag1MzfHDvQMZgud7HSgTD3sHZZXrhG8CFMNrsnussGh1DB51mPHCdV63C4",
  "key19": "ZejdXP95FFrSPsTvQ3h36U48ssr9mxkhAJ8qZBEoc3pfzShRbCVwz4uCB5C2EBFyoSjUEMyEBuMy8dih58ozJEB",
  "key20": "2vFj4koJGWeNBtv6g5MxgMmWyNG6gfukF7pQjq7pRXG132kBUiMuMVYxvV3bdMKsjyxbnoinLMbN6VZzCfDPSDci",
  "key21": "2FyGpJNWfjJBu8RveyqiGsmh8FmpNq2W2F3WC5BYzdcrJTE17wVYwQhB674WcuMfpjpbHgmyyWBciKMDdsXyf1Xc",
  "key22": "52EGAbg4VSdbWvuCTcWQa5uK4W5Gpf4YAd8tffNZggTnfVNUGv6sYRfARqEbeikaViqhkFcy6WEUA9Ldsd3PQEkC",
  "key23": "2idR1Kw4ndkpvb2Lw3zRdAUF83zLVAxnJuUKmmkwnhr5644t1LhQESPaEqcDvxNtj1GXvrCKR4KfLHdT4Y35v15y",
  "key24": "2VoJ26qrm3cm1RvxtgXAqNT3u2hTvJTwnBNHJibNFBmMhGvd3kZ5ZXtwoo3NnWpAiKAf698SmuD3cGZcRxRw8Qxi",
  "key25": "3JfbyXmrDUSgBrQ2fX5Foc2W8u23tppzXhV3WTEcQQirwHBVa9pyJRjxL5cEP44LRaKvexG5dKwoM3XVcabvFRsV",
  "key26": "3MVBxwGEgv26eeMzaeMSzzpfioa3aL8wETfunN8nFMPdTg1RNoMr7mRGwiWhh41qfSUg98SYi5CFEwvDw5iMeQYQ",
  "key27": "5G538XYiJwYbg1cfMtCNJg2upGsgDJpVCwP2GfjBAcvX2XWC1kSEfEqzrjFNknezPcci6n9eiTiZd4KGKrL8Jpsh",
  "key28": "33RJfiq6KiE5cK3DmYXNDLB9uaZca4AjvTjUtKF3SyNJupcRgDbRZm3mL6X1govvZYekJwk1hoTJasDYosXwB9bE",
  "key29": "25fJS8oGoqNf7UzWhoSwMWvoZH86fmcEqNadgFqv2hcHopFFe2JU5VYTthVHBV3P6KdxWWnYC3aa8FcehUSMHgWC"
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

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
    "31ZhEKVxxajC3P9ZQapaTc5MLtWvgkC66Jviw4xWixkg1qiTLWoKUbcY4Lg54wPDK5WYc3MbhPyyfJJ8z3pF6RqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c6rLfKGjqrqXYjhUogFgrTFFi5pnSqdNNsBvwjSY6wDMBQwaQJwnYNcceZ7NceosHU32CR3U2oKBZpn3pxaYy6",
  "key1": "vmJCvVSdGvV2FsL2oqKp4yiibBBnvR5VfpDNr9tyw98kENs5gNCBxSst9K7x3qW5CioX4P8RmEh5dBWXxsEi7Jt",
  "key2": "2nAcX8PzVzg6AYekSRBxu1pL6F993n78ppHkqN65nXZSJHtxLVkURoSsV8SiFNQLYqeYK3KaVVqjhNYv6w972prJ",
  "key3": "5J39C4dDzJgUqBzVWdyfYy5G5xs7B6x2MdANS9RUQyXLCaRPYx2dxMa65t3JN1KpMFatDLEwVeP6rQdmpq4S2SyW",
  "key4": "4NP6Ae1NifmroVzvu42FqNQ4sTiDCD1V999agHhmCJuDQr4ESFrmUYRFDzifEDSQoCeQgJCxvQftnrTeyJbFjev",
  "key5": "2hqfJUFVrqtHfhSgdDMdNwVdTab9SDVQrcEPXKd4FvGfNNfV398mFdrk24uyfLRGiPn3ZG2fVkMWh1eFhAXQSPPj",
  "key6": "A1vRCRUgL6zC6W977TAEzKqqBguF91zAvWaLacCGb9ukFmuuWcCYhmGoZViCHcLwz2maxySVvmNv4kuETUzyt1V",
  "key7": "3ubJngdakGsDymAKLwfzNm4pn7xshqJB9qZPTRLgR5yFRajmBhdxXs1W1eMdixXmejHSLFhwt8e5QdfWDxETMqCc",
  "key8": "4wgDM9jpNnvfa4Qw9oRLby3aMhYMoPimLifbLuM2XYgburhPuCAME9CANpsEojrvioaK1Z9FMn71wxhrtaLvusxt",
  "key9": "5xPoCr8gb6dWeMc2YTNV3YUefSjuqJJidmEgFMbC4ka8PWLJr2PH6DR8upmQX34ig8Tc5LxLTANFiwz9KU6m4bZs",
  "key10": "49PeuszwSK6vWrsxT4sMHoWpJgwBhPCybxJ84mfomF8F8VMfGy3MmuXkzpQ2YQxYW1tj87AwcLAZMtPHDGeJQWS",
  "key11": "jnLWnBxYeiT5TyvtAchTmpctKDk1hmjoupqj2R8D5QpeRj5EiovQg1fNQJmDsfMBmfmF7xwqyGtvV7MLnfXF3kS",
  "key12": "4UyNttZJs3BS1xTCW6xzd3KWZ4CTZtiyWbb7sEi4KZqh5qTd1aMVBNeUW8tmyfG1f4ozysTH65iHHY3YjNes2f4y",
  "key13": "3Hdg7x1aBk9n8Hmv1REnYCMaf8R9e74EZegCGn57H7sVhH8EYZ8mz9mMA5JQMiV3Ekv9sTYFCiguUDrexyBjUpY",
  "key14": "5MxjgwJ6H3CTdwrdmpFu9vngbGixampwwhHLyHSUztRv49Zd76boCLwwcysivHHtDzEdBZRU1zrf6TzeKwmn81Le",
  "key15": "8tca6d2LwxUsEPrSFRyyJTmJ7J1E3fKjstL2v2r9NGscaMsYsnTt2T9wLXtvo6uBoCN7vjZp47cPXn54dSjCgU9",
  "key16": "2zJSYRm84QasGAuQQYj1Pr1sLHZSFsa2jziY4TsAYugzcsCL46hjDzgquBmzvZPfpVUyDQ9msuiwWx2FM7v5Kw8w",
  "key17": "5G9gpZhn2eVUzwvUdMe3YLqZcWS5jzZAYpApFtfJJM9xbDAZqkgBbVWbz4vtAJjTVWB3JTvFccMXu8vNiuWZvUxK",
  "key18": "rn2a7Ve8WDaZncRJar6DviV7bSXnefryN8dCo8wQpzXucQNoPzWMeKszyd55ViAHbpb335QZQ23L7Fii9cHRPxE",
  "key19": "2bAY4qTEeZkTLr9XB2XC5qbPsZbmLtDAz8kVv548SH7nkPvZiP71j9GQTHUcYScPsBx9XiNXwhjKKQYizSkDassU",
  "key20": "24g21ruHZ6nf1r4n64cwRcVKZSzBwA5p75Y2NMHmTDFfMwWLofNvb5m9S8t1r9WYSCtEBnhNDv5ADXeux7bqbs12",
  "key21": "4BT76pmeRU9a91DZH5WE7TLYUjH8fz8AA4Mp28ViyQbviML7vSfnhVtWjnrVEcLGnQc596js7a8ExoWuwUpRQFMx",
  "key22": "2xzBwCRZp5xQvLwKCXAvumRrdUp9uDfjzUGx8bqJLhpjmQZM5MZjkwmpSoLUYrR8yjhmHTD5wneZJmmsXSPKTqJH",
  "key23": "61kRYHz9vhdX9YEwtBE7GJTVLfjf2PX9gaVeuDLEZ2efqihod4zTZcNfWEPyUFuT51gTPAcvq7WmYQKFJTnTYEe8",
  "key24": "5gGMSATwXcRfFV8brnnm9pMPoYoavaadPFRMR6A36TE9Kdw7HpifnwRvajMbjuRPqGKaCyHrqsi29rfNXhAW6cck",
  "key25": "5mWqWmjrByudN9F9NKAtzApHbR7MYMsj3qPamQ4xQ7YKGkNoSVGUABABbdatKDUBjuYQWvSiPH91ywomd8uMCWHW",
  "key26": "45zUSa9xkws9FQ1FViVaeidFy3nR3fT41zvFbHQ8PNMNiNsFg5HmSi2RVw4vYjGq4DFvNM8aHH5fUXk1iZTLECye",
  "key27": "3bVTB5vPcq5mQ3wN1hS4g58bVExbXPtVdQh9ExQF4TRGmsrZvkd4o4cdkkmZhcBxmBMPSNrTNj8WxKndJAjMd7rz"
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

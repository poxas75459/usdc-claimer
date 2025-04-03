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
    "xqPGgmnYjJLVMBd5HzxiUhxuGeVS2RJGWkgh8EBY4vwXF8N8YGvuY8cggKQT7VazgJ7yxnwhXjkVMknSMrNo5iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ovFbrneWowh2kyZczvzLiBoL9CdJgu5dYy9KzsEV2eWCA5GEGFYcKV1Q5cvQLEc5TksPYdttp7weX6eg24n6hX",
  "key1": "XtYdZyV6q2TgWtyzfgv8PRcmfG9DyqyhRihsmcMToYEaqmeX55Feqwz745WuWP8uXKvf63bUiuoRkfPUPdXRybh",
  "key2": "4GrrufV4HEAQ7KfWkZAN7oyNf91kCKx8zPSHiY9V8H9W6PmkC2LUZm2KoiMAAJmGNrLeaYFUjdRZTB1Lh4bnnipv",
  "key3": "23QP229iEpjnmkT7so6sn7oKYRjCBJBSW5Je4KqWzn7WCJoasN1VLA9V2BfCp7FK6N4EBrKDxKueWAaerQJ6KKk9",
  "key4": "2VwVd6SxzczReTnuCLkK8YbRmFzbYmstKKZH6ouRUVHcqEoYezvDYdEUeWhvvSBmQhiEYf1DdUuKgqoFrJd8mkjZ",
  "key5": "43MwrruGaavYLYRGB4Vz2jJiotw9Hn74PnjVy3nJzQ9DChPesdfELhrfEAQZ9KsWcbD97hQMxhaNkCkwP8GBu1mW",
  "key6": "zHK9Sn32tGyHJTgiARpEMshk8ppZZVNBmkKpAnWUTX7kV48oQAqTS6z8BDQ6iuJ41qHFPRNi3AhQppYeuRqbabm",
  "key7": "2x1ohsVdyiif9htY8ezTUX2gJudDacKpCczWspqLEax74qedZSj6s879hq9ijM79RQE9PhDTsbDfnf7QhgVQA1XA",
  "key8": "5CxbZ1mJTnHbPwbFHLpWxT6txwq8Z6UiumarWRXnypTBq7aqQsZSTT5PLJrLVDfGceyqYavw2Pw3QBnEYcsPkStC",
  "key9": "4GfozFT1hef2UxZdXEX85Y816s2BQyVp5zGgWa2GAbRfs1vBMnEFSpjexekFqeMW8ydhui5MFgdu2N1uPYdZeLms",
  "key10": "2gdcSqmZPM589zuH9R3oSQgwGYEJ2uFthcdPng45H5XwyeaCRw5WZ2QHJxFGE9WtQDRKePYig7yJuWkzu1taPjrS",
  "key11": "5aJ6DE71887Mgav72RcQhLp1M2PYqTyjmePS8sMHmjEctWmt2V39aqiwCZt6KLNzWU4xGWeVKHFBNzWFihVcn5ce",
  "key12": "67EBxnbffF37jRtoNLZwQ8qvaWW2zGy5RuNq5v4Wh6evJyWBVEWNgCWeZ1dCisheFJm5aMq2yvzJ6CvSdoGWpq56",
  "key13": "4YDXfJG3TyVLhD6bKHL1KBokiW4SZmnyJASFRSY4NT6rtFWw7p4ACWYBPegLBojGeNV8FfHdo3m43njWSbFXLGo1",
  "key14": "2V4vB5XmfsPuwkPsJw2b4Mph98TYtTFNPGcZwmniGmRwCwa1PeiPXxnrgT4w2w2SVwcUWtjDqQCvnMHboUQCGt4z",
  "key15": "45i3qoCnqfLvEbaGdVWeUiHFffn4qZ4E8oyo2U8sGDGcn4jBTdHf3iuRWstNN4dXkvEjQVfYqQ9ALWhtSHtMmmA2",
  "key16": "6794BpERn6Ut5eaFgWy4DmFwuQ3DSVVmcQmZt7g9ZPH5KeV1vJmkJiKcfLiXbvSWSUNdsB1LwjJDycJGmWVnoeQv",
  "key17": "5DBCiMxg3hiBQmgUwReUdXmfWm8B5VchyzjdnbXe9vJcT7KCMctYB9GvG8cjvs46rvfMbL4U2fKewBsdy3uuQxCy",
  "key18": "4n96fUZn9TVRGZUVsMU5JDvbcFXF3phv2cn3FrkQX4RoM7bYBz9nRBDRNeARq212tYe6TmnMpcXKSdrnVtMjkNDQ",
  "key19": "4uZZ4RGAmNTzLPddYUXJCzx2Qj93zJipeGySNtrNpUcs5VtriyNKSNAKGVNWB1DTGAjGiEvRXC5LbHFoSKdhSFkx",
  "key20": "32hrkdJpQpYGfVuw42kUpeND8cppxSuDi5Cbo45Gb7RiwA7VZrDuaMoxUctVUgGzzYVfBaLZPvtEbjmjpSCZaaEd",
  "key21": "3WLR4eLTdFB7KUdZo7Ppteo3bMVRXRtbw67QrV1y3SbnMZ3rpVAvxiJgGGHkbWS29WWVeLYyzUBoRbNgGCJNa6zG",
  "key22": "29cXmxu7vDAkucCG567ngkNdBf7z8gyWEe9wjunMvr75L4mPJsFTK1Si2v1VSmPnNEXqVEg5smgcdrUzzGoTHWvV",
  "key23": "4haEiVC94sGx8PW5NspbRxEmd8HazJNiXk1hVSwKqT39nAJUbCkAQyGo47ss7jev1c74Dmgok6T3YZmEVKjS9nuJ",
  "key24": "4j2RbytvVUgzatFQdf6o2hFyGUxAEFoxNS6KdPSK8dZgtsJWQYKVP3icNKUems742ArBnSG5p3paFRiwAxYYMVRe",
  "key25": "21yuqLZumBuKWreqDorYtvJqNUmwbnqQ7KwTqCkvTREF945MtrrV1W2SrwTgFcZMQ9Mxn1J8iuCjVYDxnXmTZwZW",
  "key26": "127J7ruqE4b6rD2P1XYyPsauEf1PeaQW7Z3m5hDmtv9MMfCgLRbKdPtFmuccrDtLVP9t9ja9bXi9fq158k28jh5t",
  "key27": "3HkmWoaUjQDoB3aJR9XxP8eWcsfPhYPWJWQuRnLYms3Z9hLCo5eSdB5XHPGndtkrhQR6K5zNLfEEjREuQAiazhqx"
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

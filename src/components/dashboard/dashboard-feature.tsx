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
    "3phJoHQHHtDBPADsKVsXm7y7UgfEcVAAcjnv9jdnqDjafkYH9KgT4pY6PMXvrWVFnvtC9NEkWqrnGZZSXoKajaLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGHxm4iGkDocN4RaRwDESpKog2U31xjUfod6JJTH1GHHapBffPnm9ag4F1r7fT8iSkAhnZ5qb4AMHCgZ5S2nj5Z",
  "key1": "LuawjeNXU169wjXXG4Eq8XNaRgLr7uuwc66NwyZBD7Vu5YyXjF6e7Lfq1vzGvo8mGNbiKkrAwgWsdtq1oz2oJAK",
  "key2": "7T3yT5Ud3hGmkLs2zrEQnsSVtWgsbfyu25s9rmDE5xGmbVYCQem5pyYYrUPjp41FacgaTTD2HVCTntRUvAELuWd",
  "key3": "2gP8pDnsbFicUfdpHbPr3DWFzG7DGPY21Eycikm5yqHMfLaatZ9PCTiKxNj6zpVZHs2oFCUDMuEXnNCRq2PUYfBu",
  "key4": "47h7vsmsbnRFtpbxCAadWazZoZSMLYKQ96XwRrAePvUMdGnxHmTeFeruLEtvkA3anJXDwqJvsT2rEKtsphTUEBsy",
  "key5": "3SAirsNZ1AkJYnqqVfi4YRvCE5aFwMqQXbKktJUP1x4rkJ42QJjEnQidKdXrcJpD3keycHqmDWeKMh2BVYN9hLNg",
  "key6": "3fwrS1Tga5y5BHbw84ZA5JQsd9k6C1qBootB7xMLNTjxstR47N77kCL588BgE46vg4Zyj987nGSE6BZ4n3iw61L6",
  "key7": "2gYqogTEWWMLBuHdq6jbcSpzEwgQ8QzFKWMSrBuWtc9U3TTbAGCEubdrsngKStenNxAQR6UhqpP6CYdNkSnFZPft",
  "key8": "2ZwYmCo8xsrKQSLm9QissKEh8YBpHXX571YR4fZi47Xg1mviJkFSBYdVG9k3tbUUve6ZprG5duuhQu1Ri4cMJRiU",
  "key9": "3kd63SCNwpDJ7znBrRGAcwEszbh7XdR7YMabdbf6fXPdJ9tRLapWRtBPcXjsA8zSiHeX7zx9kpCDHnq9eQ6TpxFv",
  "key10": "3jeqjHveCHzy74wDV7Mm7y44mtUQHtHCNCUoyXu99DuesQwn4sfka8PakHkpvCJZtNthyeEbgMKEhGjFjrZ3QAyL",
  "key11": "3eMFVGx7gffE5eL26BG2ZAmQ4FbjTRzZMm1rQs7ViHmeqgpMZxeiTkEnjtFdhCz5TiHY9kncT1DimJewK5xTDXMY",
  "key12": "CsJtvyVXUb4VKXzZ6gS8TCziRKMYoLBEofcp83bgYqH15hbkyAttHdbQaFJiMJ5Zdg9mUSdJFpqckHiqAh9fBWm",
  "key13": "2PutsmdaYoZNG1iVU5eGAn4ie9kdbnTxP9KAjkqo3rk5hoVa7GWqFWRvKkN63XWtji7qVfWzhnZ2M5mSarw5SBwL",
  "key14": "5hEpq4r4HZc3CyqvN4RhQsa3hPcoZqW32Bs4vTr56bWfMN1ZoskNwsSzcrf5U3DoHrheCu6SyBWxgonhdut2p17x",
  "key15": "2eveJL52RK3QN3ehjAq14FamjmAhnpFw6QD2WxEN4eS79wiGC7wPRy6XMHDtjkKD9ekDo2zc4xZ7tbLzxncz6ddn",
  "key16": "cLTxcZStGnZX7M7k6ovQyi9GsBF133PtXwrp8Psgo6AAKmEchn9xVU1pha8n72MrwTwyfbSc55U1GR715zkVmut",
  "key17": "3texCBUJRCqypMuPXWB2qdLjbXwSA4g3fvTeP67H4sZcuPvptK2RGEp6KVCi4X6GSmJ3sGFJ7o1SKtu7UZq2UzKU",
  "key18": "t2DYG5rYYLRw2dWnKGBnsNUzKc465mLY2JQvy5a7Q8vTZSwEho3uNKxWa1jYcBWaMJcEYganYRn7p3wHAJqN5Lk",
  "key19": "4Y94L7NqUvbRHdoSLsmmSbAgr1QrdgFgg8oH5B8RESXDsbT8zV34L8Bdr1K3QQySn8TprDVm2PtHSzVGS3TCuUyG",
  "key20": "4CTB6vbJykmUptPYN3JuJV62EBVG9RDGK8hoz5vTSVdDEkzjv5w4agFvbAfxhCXKZVDoQkjjm7s2JvR2whWjTVFi",
  "key21": "2wJVBXk2uSsqyT88Di9qh3Mb9sFn2LNZVqJRcdSRKXqhCUwRorWYQesqfcm3jYUc6xHGx3QBtAxi3XS4KFWQ4S7x",
  "key22": "2ir8aLTkKRwGrYC2iXvKRs6eCYNmH8jdBzKBRfxed677eZYgr5gA5Le5pd5wpNex6qhxqvTWFvsCpx8UtR5fknd5",
  "key23": "F2ThBKNRhTkiZPYzrZShHApYcx26V3agmda3tf8fA38ytJcXxsGdbsjQN8covR4PytroBkC9vnYLjmEJGR1kFpR",
  "key24": "2W1BWcL2cbQHMFtKj8rrWWEYvk5LrxB9xs7pXYjxvfKQP2wrgDf2Fc3Ktqx7N53DRJWzsdu7X9JUHLjKaSbVJBCW",
  "key25": "5tGSjyZdv3YnzAebEHQ7e3eL2Upe43o7PLHuutndBrU2MFVcruqYV3AZjdnJX2XWKgLt3qdvenreVNv5jdCmQZiH",
  "key26": "21coXahTTPELr1UtXHPNBfgSoZ9dvSLCdVfxkm2w2jgq4XhPFHq9BfgHbmkodJpLV6xqDtAdLCNbtMVHAKnjpFqG",
  "key27": "2E9mppefJAgwQPrc7VCsFGMGD7Etj1APuNGnFzY5Ks66gzr83PmSFdHH3cG8mVSdNs4FjygoKNvbrx1xHKWed1zL",
  "key28": "2XX4mnD6i7rM9t1J3Wxum9YbuwcgUpWE5n2AqYuNjU7DCfPkNeqAGxfcpJyE6AP6dTDEnoLw8CwCMkDyHCcTCFso"
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

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
    "4yVuxuTTu5wPYEKwt8ZXWWmmXrqKMZBspbvTbFDyJU2utuqeLfuYKtMnHLxw85hfQ8xpQXe71LscW3feqGtRJUdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McPAypbQnsiuuTYFRnqoiTMpSFWE75WYNWGXve3oVmsxaowcnQZP392tcYiJo8LAyh4n3t5w7rm8Ggrabeb4weN",
  "key1": "2C2A1wbQ1vftNj8DytFRLDGdoqXwZfTtVXtwFAC25ENwSRAFUAp9cdXSuZPD5Xwauhm8BYe6rB6aWqvaNyyidfeq",
  "key2": "3iXvnNpB1Lc2VAyyrDRW7d5W3dmu1YU8uDMwE1uwKWDB6u8EKu6QAmupuPhh5meKfYmQNtV3ADAp7qWhZ2yBTnQp",
  "key3": "2r1BMkPAQMrUfMUbm5GPAxWSuz2gm3S2WGJs81yqgTc9ZPARrjQT6umseXAB1uMek7aLhrV3XSuo2Jgp7CcitMaY",
  "key4": "gcVxg2mNB9GfkenMTEfsqvYiZgUgbJpLEcqmDULTAK75ZHEBNjFZE8BNMGvigh6XzkPR2XUXA9PZZ6bLoxVFbBY",
  "key5": "4H4aTbJk3MtMBthWkJWFthEL3vEM4n3ai2gwVi7zUs6SUsHMnwFJEem1zjFXXggiTRg2Y5vJurDwVYtMZCmSrorw",
  "key6": "3ocC6RArpLkhmmA5E6QE1KdbCh3phf91u4TA6tbyxXdSKHoHmj1RqcaV4zSvxufvcTU2EmwBbB2ADBCwvwua1XcX",
  "key7": "5xs2FCsQLZADeAJBwv7fLcAwmsf6bjBvaWN9XDi6mmQynUb1jKZQGtm7KW18LDCUtCMeNoHHxZnCTwEPXN1nwq39",
  "key8": "QnPMxkyL8Nis1b1cH59pdaF6XfumBL65rL5rdtUg3HRuj8btp1bv6k7fTX5qXeCVyeMQ4YxNALAQJ2kGWvkYBaz",
  "key9": "NBfxjkXMqbxs6MriDZxsALDpatAxMYom2U9vbmYc3vzqXZbAk9U7R1frT3r4N1RRNePWAC4mocXiaScXq5AGCbP",
  "key10": "5JPLdDa9C6WDxSkTSx51An6EJMD1JbDtNUCrpMMzCA9pgPUfydcD9e8sTFVBvFzDTnap6Xc1NMQFGwFneySgixPN",
  "key11": "2caS628taXcZt2PzU2Jd9bdC5HqDt7WckLjKeKGATx4Q8m4PQzGvy1zGJTeZ19vSPNQS5LTxnSivAq2w9whjtFMq",
  "key12": "5XRmnogcd7YHXWebJ4UFu743JNUQRBYrpyv1oNwhrYzoSBpx6sfsfNFh6EgaBKrtUFHVS9srezLA1c4g9DSQGcP3",
  "key13": "qYhmahLv5mb3PNmTUHboUotxkZgRtJUHeq5C4oiXeB4fVqJJ3tSSVXoXdVcxhCZJyRmws65Y1CzzkgMA5CeaUoY",
  "key14": "3x7LSfV8UafSLaJC7aUrGULCkKCq3g5i25MvENYZeuTL6hxNSXzw1tdLjzJGnRFZtbA3F2BX69pTjeF7JcTrrnTX",
  "key15": "2zFA9TjnvdmaCYSsFjAZ7QqzkEu7AAqcH28tSArQG9ZjrbF2z8fU7evyCffkX8vaRgfsBPAZtheie12qNmW4ocuL",
  "key16": "2zEo4AnyTsKsusUBPttbKNifyectcyk2z5Ve8kHHL4JLVzrkSkwRM1245De4e4qA83dzEcc5DYnVyhpfpSkgnvYf",
  "key17": "hVh1T8FGScZ4AUyTBJWS3eT11S5kYV78qg9vZknzp8MaQmjaBiNENoqXRBW8HLCbz83duyjGV2TAXdXqqWnrZ1f",
  "key18": "3642VBpTQAFZg9HEWXJ4CCkW3Nw3sHNp4H8y2K9FpHoff7UL57tdB9nVsW64w72Ww2zeCZ9TGaLaVyM7Rtq2oaXx",
  "key19": "4C8kbsgEFRrXcmpsGjfyUYnREGPB2h99vVM6fWt1Q167fRxHuuQAZCLDSv5CgkbB6HWNnR6DhvMQRLvhFkSG9L2g",
  "key20": "368Pg8r84faYcRYyKiMTYfMrDYbwQVdkWe9McwgxSz5jd6VzCQkHP53khjPFQyJk9dox5goRw93vvWKGomXBDHWa",
  "key21": "32rzYwXdMb4te7m9PWx6u5Rp9BXkVfr7F1pLh9P98xKMjKNenBK8pPTLTbKZBBpvyZmKYW6RTXpUxrVQ1ybxqJ19",
  "key22": "64K1amuWVKoSkoKZQHp7ZzeJZ6HgqH3A8Bo83y1kUeA25ws9yRnsLGQV548LPjfBTQfjE7QvfNm9T2WnA5WNmwth",
  "key23": "4kZ1vgt76UyqzQFGtmqkJDPR8QiHfQfDgKXwMycwNtGMas27rxVmkG43NFeBDgmnpQR4MthUNrZGKDAR1JospPJP",
  "key24": "Cx4U2GXMtjzX8RqEb7DLDrM5tsWmq4tzbjwqix5vwY8cJH1K4qMVsfZUTxPbT6A9ZBJ69mivGjx5iu5MMKQAS4L",
  "key25": "EmeniwBc9C2ZY1B26eawFFaC5Np5imbRXcAVXfFedp33K17Rvbt8Dv1yjEiNmoXUWzn2RCsVA2hg3Ra7YytZmVR",
  "key26": "51avUzCRUZzq1A9Mk9fNNMTHhUMPSV5VqWtvSQNvbLzeQ8ervvrtVk5MZJpdZZnKVm37BCKRSoXF5KW8KhM5zN1C",
  "key27": "UGHi6o2kg6LhvMLjLPTNyeFzHnzXwBFnHwCX1pEzuPU6dGuQykXM7Y5dNob5sH324zNm6bVEkMeeYC7X3DN9Qsv",
  "key28": "3WyCLqUaiGTRUxLxMJ9CfNaDPjB9fZGiw3iNuat1weJRqRxACsu7kziZNUeEFubn3bJLvREDQALaYXQ9m4YvDShV"
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

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
    "51LR8mgAyxXA5qKXdKHsXtgqXAnQ73TtABFgdwNGYyVnnvSVjKAgPibwgM5Y8vbUo6BnLCuHpc17875GsBeRsUP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejy7zc3zFo3pbSv1Yi6jtuUFoYrrjZnm5UMqeJSFYFzkov1ksdZPVba1YLseBacfMzHNgX96ALhm3s8z1Ysq6dq",
  "key1": "XuVibsh24vN6LmLGj5trC26uQ9ZEdMmpLJYB5D5GeY6Txuub34Ym9N34yi98rS3DHq3e8TAVGog2pcx86TKHjWw",
  "key2": "28mQ4oDtHc6tbHJTW6MvkzoGgFaT8o3dh7togDr2NDPvUTprmjVvrcmEBPFA1JNVUSxk7AJfyq5Tcdv5CQAcdc2S",
  "key3": "2hukKUV1aHgp7JCuLtAVWEe9pbrYPRsmJGjkUSPmkzuAoNBshr1qNfUSqNqEH9y1YCRfgVJSGaTjzcGeWheYD4n",
  "key4": "5DT8YATmuFeiW3ESn5vWsMdiXzTtvtQDi7JF1LBk8Mg5L2pqH2naD7D5B3GEmMFPfo3wBg6rpV5AwzrvSrkqyUkD",
  "key5": "4cygGX9Fmk6RJWzGn7KnVymH6HqzKSPuZwqq29scpKnSigzQSEVb6YhGwDFMoWnVJ7sySCaXVckxRmyBCe67pYEz",
  "key6": "5Nune62iPQAjoW3qm5vRPm4Wmujfz4jBe5XkvSKAFaJJC3pEjZf24ZKVr1TzHVUD5ZN3D6JiuLcMgsqWADqdEJjT",
  "key7": "2CfbjEi66oEB7CnJHHFF6RbhZSsiG6FeJQRA1utFAoorYbfqNWJSGBfZ46rn6XCo5AVhWKDTsG8gbZaKswphPJgh",
  "key8": "4E5S2TcB5w4myXxyvNyi5VF7qCkZto8dn6demgKEvm6PeSbkQGBjK7vMst9rShYPJiCb7Rz3wAsYsaeamNjQW3Y1",
  "key9": "5aMjQp9Jge3R11RkQzafxNEM3ESZEt3TuAt7BTLUwG3UFYZEeHW8d2TP3wyFFgtoMZ8wbYWrF3bhs9sbLzzXd3pC",
  "key10": "2DH1jV8m1hZjt8SSKDfcmFQbuX6ASzZZ3Lepm14zpkZvgZ4VwfNRosedvLABQ7pGMppj1Bw1roFaMqwQxfkWuRpm",
  "key11": "51KL29Z7QyHeYaG5pRUHvG8VejmXqSXK2h3wncLWmrc6fi1jyikyFJ4TnRLxN8VnnJg8g7xxAiWZxMGQ7XA42Sty",
  "key12": "jV33WqBAJgVz7EtSmE7RyCVqWaumv8GtcMV8LveVV34742L12yMArQwaBGpXXWxZRbQMCbeGbdfKDTqjS6hG5mM",
  "key13": "BAJh9HPLeVxmjDpSq9NFAQWGKDniL6N3aCR56DTBAoxg55uMuf6Q6gzsMzwQuhxmzxvofSh5Z6zK4PHBLs9iD8K",
  "key14": "4aRgDwzV3NCjUduRQPvEpbv1XyXSWZdpMXgv6MH9VCrjYaxfHNjeeKfiqqRpJmB2J6wCFeDz2rueVbuYvnwxv92",
  "key15": "2KfhsMnFfSkh5RgtnQqZYi8wbUpSg3GtuEroL2WUYaFyNKiiJByJh488viBCBgLUQfrxes6ngPKLqgEAdsYgQKU3",
  "key16": "3q8Qikg8WJ3aZg4ihY73YVeKLiWZeWPQtU1sXZeHPpjqUuGYXAymmPtBqvwyGMHB1zwRyT4gPcEyxNJArsfGYAnW",
  "key17": "5P1qKw6eHKJ5LD3ZWnkDaDqaTpscjkohdgRESLU6KZG79byP9E4qefDctEevavwXewYg5Q13JA2WTR9nqoXsieNh",
  "key18": "5xt8hbgcd6MenuvdeyZS6F3L3Tz4TiamnqHE3m95Ri1uYYsM5NwN18PJxUjy949u8DuKJhju8vG5AEi8aXo14LPw",
  "key19": "3VmwCoBBPPUzsYGN7vXSshjaHSrtVtL4xphoJW6cxdGniWzERJFnP2BD1Kib2DM2cRp9QRLpT2jkApZVLWaABHkv",
  "key20": "47g2oQK8PDVQp3DYs4A18CUv56G3WcKZPgGeqxrFeKqAidLaEBTp8DVBpkKte7QUP3SvHtmS6VFEhJ6ndFpGh7J1",
  "key21": "zGBJinzXffY353dqTGYrgH1dGhLYCEdxouTZaz4P92XoPK9zbVsSenu9WAdPRKCMsZ2h9thexfjtkoMwiPgZgYE",
  "key22": "PLgyxKshWxP3qZTiLxNudYHoHecnmWXoUrge5bUbLApiHZgCQpALxf4RMXJrpr2BVQdpBu3g2XJxjpJs2ZuwgLi",
  "key23": "xJtgXwBbjFU118aRysQHRKjxD1C5rcE1BxPzuFwjS3d6xmEr1ocD4iYLsHmUZMdwDwqiqwFWy9L9gJNokTL9vBw",
  "key24": "3W4HfYNWyZ3gZ65CU9mp73sn4M6xRgzzvi987qgibyuXfE97q98kp5JGTJJFwsiAgxoWSmWx9un3ELdthS7e4QN2",
  "key25": "d6eczAihCnJMUZq2YPd4DEbmLVeN1Qm7SsjYdDgcPnrKaF7w3wTAapCT97xad3ZTWxwmoNdAbcgDYkyD3iK1FZ7"
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

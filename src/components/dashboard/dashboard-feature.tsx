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
    "5U674vUcYfyVQ4YsuqZbaZvjXzFt3oJza7X9qFZFWzPStcSaRhptxNFceYiV3mWPTXx85cWksCrGipWAy7GnmPx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39L8nctKhL1yqXuLf8hMSBiGkLbuLTEQKyW3ozgA92FzG8jvACCqkXjDHo5jojMCVDmUDhM9FvdQY1wrd2jeHXbB",
  "key1": "5j1cJdLnJseqEzQxUiVBjkKovLSdAm2n6VDzaBCeb9GUzhrMvZTThmYNjbnGQcFM8uZ2MhTG4muqizHbYy4YuFwA",
  "key2": "hZiQ4Dq6NjicapYUTKYpH94AtAwekpVHXTk9DXjxvE4g4Be8dgsBTdAbHPD73wSg4etGqZh8VpS8HnbBbJjYU74",
  "key3": "58rLBCeK87JAx3Yidq52xH5p4FfHQ2KTTNRge8ZkAyxcs8JEYHobQYYwEfLBRBWSbRo3fxefko2uwF5oaQTxZrTu",
  "key4": "3JV84GyRtBkA1gAQR1LrJRF1WqEBQo4vzdRor6v4b34Krmz2Bq2zvbvKnH1jAMuTWgRZsJcJhHDRFaCPQGPvqwQm",
  "key5": "2sTsarbHzMxamCC4gjkKNTr3DbB5vPFQWt3FbsfWP7TVKzofXFCo3TsAiG5N4ZsunjsWMK5hRookNHxSf25uDDt",
  "key6": "4mv7H29CL1dgt5nq1YkiEFg9kGH9AVD8wtuYymmqehMvuYFDJe6Les1V7ZJoT1NoJoqzngJ5hBJcz93chgxYPTe5",
  "key7": "ZujQShq4Aku9uLJjUKbQt1KfrscKs7pkcs2ZyRfYFCH5RcFwbnLv8p2XPi4bzd1tfZGNu5HXW3zrVdeBRRXUDjZ",
  "key8": "2r2pNtfvAbJegVFe4UssnJcZxZjdWSdFVTABsmQqvTSUDaFzDoKkSszSBhnXUYH1XzBEyddtozuo3Nt3bogQ8DGf",
  "key9": "3SoGtpvfUjPr56UVy4SBehEftJt4m8t1JAmoQ4j4k67FTZv5kB1xFYHSfiqjCBkscFHPxr2otrqQRWMWpsY3UAKh",
  "key10": "5VqXzvnxXQ4JwVkrfs9exLjNFH9xWuq1qAj1pZvf7TQcDR6iTX2WSYPceP11tmrBfHdmpPtKgiHCiHNGzDsV3Zoc",
  "key11": "3t6s3CW8aRCxU2FzFbKUGehUSx13nHogSPDjRoBctDvHtsZ4HQhHLnPmC4YdYRssfaKreznAtJQdPzHxLqkA9Keb",
  "key12": "4ZuKae2qXDs1QAcC1ZqxFK1mFohCMGjU3ceXCWvtGBpdfhaCc63XmuS55SL1ejxZ6pYj9UmPMkeVG3qvxmwXECQg",
  "key13": "DcTigGHdyke92YtjNVxgT9dn8uS4DBUXrmzpabx7mkqu19kZrivn45y4jhiLkhyCRZRcieAStdRhYoLCgcpspjE",
  "key14": "5CxnYu3tH5EcgRcKjoerNRUhDvNtfSk2EP42Z99KCZGM8Zn1B4Mx1qNyWGgmxW4vTzbrmrDHiQ3xHMHJgPfdm3oN",
  "key15": "2CG6DoBysHyVMHkQzhty59knDXkSv5CMCKZ1XozD9AqQv1YfhJvqfAhtHk9N5wweHmfbqkkr84X228aeek3eTgLc",
  "key16": "2PgKqHnkUFGRhB1NxWCSx5ctgEZjtFtE1HWTYT3kctowuCDcbnSfUmthwjANKYk4b1jvHgUSxShYouvb8mxd34RT",
  "key17": "4ZTzgFcRqDTdxGBBkBHVNT9TsCdp7kULpen1LXwkJ86EJE5AUgCVoWm2ZJe35wRna17w33ons6ENy35LiL6pnXut",
  "key18": "3RzdbKiF8F3bBxBBoyejh2AjvKjNYkgj1KE4B99cNhFwNc1ZVZJq9nPWSmFhYHQioNaRhKv26T9ce48YJ3q9qV7a",
  "key19": "5g4Rarn8KXdPrBLsrrRXgjxnPBj2GdCYfqrYEjwikeu8JFoqi6WNNfQV8BgvbJSzkcfEPKbRwVgJxDiSC2yNxVtM",
  "key20": "3K5aGcfpPPkKhm3zJB3pueuKa4BXCT7xsiUqWrobpz9YMxfbGPQfB2ZCn2p8SW3B6W7zgdpTiRa7xqaKt2EswVwA",
  "key21": "2AuHJLtZM3iGukiCrdcYnghe5Q8HgApnUiduzUvdnpHgLJcuqYodi9EGcP7gBsKJtYPnzyAujqZ8R8NQb1qQGbV2",
  "key22": "pUTtABTxCvC8Qmibr7Buh84V647T9yfnn144Btjz9pBjHPnr1TpwVMp3qMY4qicWhWQ1ASjVmP7zy9U8EVMQpKQ",
  "key23": "61FttU9G6SEu1NkgDCUzynbWewNYDCjGxGW1Cj1aJJi791bUBkD1KRu9U5yMvfwSqjo6yjx1hMVL8boaGx45DmBa",
  "key24": "49fuuj5WUMfGVJwPoGtbJzPzhDVjaY2Ha18bE3bkrys5ou2ASqiqwBF1v4jypmVGFHsy9jEpNg2Z5yvgBakg9ZGY",
  "key25": "4SgxExYFQ4Fc5juf36R2D4tFQbPWjVYwmiH2RKVu4qk2Zbesbi7wo7iBqrUMLjm5s4ZxzGNgbqCXSfpKMGGxmQkj",
  "key26": "4qzksY1qnyjhHqtbfWXNFT3xEpd3araFwjNiBYeirKnVK14rb2MUTyD7m73topPmqVsmPGuSsn5XLJzxUCWqc4j7"
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

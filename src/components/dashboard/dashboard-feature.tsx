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
    "F7n8hHtFPGv2MxPUZ2ncQc5aPghM7WkAScVSpyXLumdLeocVahFu8bjKXgmUmYhCRFrUeB86ShLzEUvW1CQ4QG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYA1JifAcahNpVRWhuKZh1wCCusVCrTnDNGMB25PcnjoW5RQ1EhVAFK9aYvwMRGxQJ46KnhXtfG2nnHD6whEESA",
  "key1": "3F1Jak8UYjCCeJjZ5YxUJRM3S2vNVtmbERKmv36QmtRJ8abP4R1Ph16bzgWkZRZiZ5QSHEyZs1iLwxj2EdnHBBrX",
  "key2": "2d8AuLHXicx6gp4S7E4jncb34GFKz3cFnAkWqRcy3rnrCwzZP8dtqhkZwswpxbG9881SswzRyov9Zx8SLF8NeMKY",
  "key3": "2DLYifvkDj7DVWD2drdAaeURZUTxs4GULgLumVeo1TMd9se1naYXa3GBGYhW34gQE8H6NzQ6FSTe6jRUkkmb4Cec",
  "key4": "4ifRUvwz44DD8WXpvPS99ezz9qFsvB7BMd1heDDxDRgGRRvfz6phYnje5mzE5Ysv5MDk2qzLSYL2sfHRmp4b1xts",
  "key5": "2wgnkPFNMZyeaYGopE7H5nHc3rxsDuUDsGKEizeSfN4oDCp8wnz2q2vchhJjZbP8rJNW3n7Q2je9JuXmfn8htZjJ",
  "key6": "5HueGA3XHdcxBoVPhua4jgtQLLrK9Qk59nSxx8ymKkxenK3Q32GVuymRy4vk3EnR7mZx9agvCkZyJ9qs1SqEBfEi",
  "key7": "2xioCbr577RP2RauzhmprN4MY1JM122fUX63F4BtNKRpRVDuNH7YQbkt7jFeqPhHifjD5DzUr81AEEoxJp88p1kh",
  "key8": "2UJNn6JLhpxvEYiXc5ZJaeDEctq3XcbAAnh3Wi9goq8rkvTktuGqtDDM5Gfvn93A8w6qc53bjnAjs8fxzfDQx3mh",
  "key9": "3QTxa74APjnweajCKNinXqwhW6Ksc4mMktfeN9d1nsw68tmqBUBgbTC7PwZgjj4Sa1ZnfRQXexntx8xfFDdkjBom",
  "key10": "3QaMQrXCdyGZKEEwzP7k7TsPNJYQRon16ccxWSxqwy1sFWw23fnhwntRo1oAbeXagg9UspdMXy5wreQQdQZmrATq",
  "key11": "3jyJ8f3tYeUZrouTsiLwNgByRU7WHSmnuhP2CSSobJr35J3AcKVTJWavFWkPeoJJT8SnCNXPgYJbzyGPXDqV9Q9H",
  "key12": "4PiNaDMqw3JVD94HWSsQ42XrXYEWiWTNCC3b2pmHSHTTnccsXuwdPczYDZrgkP3UM9ojW6tYcobboTrwXrKAu7XU",
  "key13": "2E9V1MqpHzgCgYubJrydvbQmxiA7Ebh1Kr1ekfKKXkg6XJXbtmPWTkWUEGeos7FWuu8yvRbKr48KkMGcag4Nk4DX",
  "key14": "4ssf6ba2LqUo6b6fJ5naoykqsFhRB66FPcFBhYnwrYD5Gp3Jt2hYZQjhCpU5CXu8awTZJy9hh2LA1QpAVVKEssgs",
  "key15": "4vN118tH4TvUH1WqWkYPKZiyMYD2DgFdcLvaowAoi7FXTxPoCLLjazPkkuod3hzc1xWt9oQeQcKBBiUsuNcpJhd6",
  "key16": "VwLszUYBUxZ9d3op3gTN5bwaQcvg3jcq42pV6ahRpQJ8qFw6vQShiishJcyEHHYnTMg3MitkcTgua8J46dt373m",
  "key17": "3LQda6Kz7v43nggDEPXhBfeV5BjNgBWGgoSm7d29v7dynzqFzyS9xZm3iGDN4uYJFDeDuadhDadvMfGqPNXGgBuC",
  "key18": "4ua3Sk9AM9yv1ZFt7Ji7YxZNGZ98RMTFLpaJ4rB3tVDWV9cFJoDoijPBBLcoaTuaZ5ivQA6hZWGMCkJsvT6LFZCu",
  "key19": "4z455w5Wj1FQ18H8MHkWmkcENEFt6yGJhe2pKuDTGLYXNDvG6iw8LY6d5kDzsMVBbLoJzyAWmf7yp7x9TNFUqiti",
  "key20": "QRY4wZpNC9PNnDjKqMS3jYZHHLXwpA8qpEvGWx7uGUgKvGvjhNzCWH4Xc8b65hw2BPqZB9PhrCDJ5Lv76QoeCZN",
  "key21": "53tekgqxAzmvv4oPhoKS9jCgeQeooKu59zMX282Gd4QAq5HJeEExVA1fu1MaGBCWcdKtMNFHxThNwqNaR8gZAx3K",
  "key22": "4N9bXk4CBoXHVaDZaShNy2W3NoivaYE6SuVCZVZhAVa6Tgpg2BJmkoSveEmmDyoSVvkKKnVjAHux7RFzg9uNiAgD",
  "key23": "36gijXXTH3nrzFoWpHJqfcjk1eax491D3tewYSzTpMV3AoWfBwtY2ZubMh37S6sC8EuPHhAHB8ZYZz5mnJZNm8kL",
  "key24": "2DRZM6XKy3ZrYAAAPk7dNwqnA3ArwhS1ZqKCxLGeiEo13pmmR2BVk6avYau87hskkFJMMVztW5LtG7TAYsYVt7Vv",
  "key25": "Qn8x6xfHeWp5xehCmjXcwd5uN7yV8krqCuHQxad5Tt3MfSRad5yRcSBMJPfXZB51fi5KckbwFjpANXfcQ1k6PNr"
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

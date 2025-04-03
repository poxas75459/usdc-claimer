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
    "5VTjKLfxhY92KAC2fb3zb7JPHmRmFyC2ZrLCQWTsTZbaxeWmubgxXMWnrCP7PXfPcuB6vYEzjpti7je7co3kAzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRjqMaodrVnsSmptx86V98qzbaXNQiWAVFSr4RGjpSRmFd5KejZKxjpp3BCaXFu8KAXWFpu2R5Pc2QxMo4Akv7h",
  "key1": "63q1B9SBrjeeRn2Bfo67S2NZJLXoutD2byLugSRWK4S4kEBgiAsC9kgwGv47f3ptVnYRJZs8L5rXr9m7rZh9ijfL",
  "key2": "61NEvLLsACAs4j2eAXnNFMCnt6uaVcnFTXHpFm4wdRxbKPQN6Vtfy7BWi1572JLwiP11JGjjuMF5mcrjgiF4buCy",
  "key3": "3mcyTpsyVLjarA3K3UndmyMx8cdNxU3XgRUS24Fh87J2nnJ5X3VDvHXsbrQNWvtBXwppdQQxFQhmrKvFf8YNsvAn",
  "key4": "5ZDVDe8gWo9P1oS6GxEoqw5suitSonZjrka9V77TFdybK3otdeqdgMYsMiZfKiKFNXSyqPQxKqWXb5wf2pkbHe5m",
  "key5": "61dht9YHgpEgGLFxTBi4FPUkcJEeAg641oysdzGQHZLt1s6ykMbmrAiVPZMEAG6xJUGHCAYdeHreNAvWeE1M9SvZ",
  "key6": "55SJkVvAzFD2Hz6R7FLyFzuRAEiQ5p9X5KVpzVCtWj7YieTUsvasqov6zaix9UNzJsoy8rsdxT2BTJ4W5p87MbZ5",
  "key7": "2FZzZYxWDLez4hJLi61HDWsuDV9ghf5ghanJyL6d5k9P4ZEsLbMsLi8PH4wAhhypWWycM78DnSXuuM8frKFR44kq",
  "key8": "2XhPyjkNbLeAvEcP3g69x5KJjv5qvxjmznyQkjfwemQKTaKcKDApEUBD9HPCoH8qz9b8Auw4HQ7xfJSptysuHUS3",
  "key9": "2oYqet6NZv4xSzS58jnefd4JW2ubwQsM3cA8QZ4Jw48grxJzycjB53M7R8FFaWxXtb2MLnxTCjh99K1pzmQLeuT2",
  "key10": "3GDWGC59HqJsMTiM5ePtz8H3waiQLHbrDtwoNtqjPvssFf3L6gdk3j8ej6m6nMA5ZXQfCXerjJU4zTCjGX7P7j3c",
  "key11": "48YXTCnsSRAsnubQ3tY6Mq1Xdr6fMWexmxAWzJ68YAhLBmheizNtcxgiRSWuPCYGgKxDAUDa8mREyjscwAbW14xK",
  "key12": "5H95LD4Bw5wbmrsGBukUxRG65M5ZomShyK7D7d9eLnozjewaQ5RXJvDrgXgrvn3va3FrECwzvF9Auuz1BeW9hWNj",
  "key13": "5wv8JuUbYYDwpkF8tbvXKgqgYvfnMzRzF5hyLfv3t3W6pCu12XKZW6xApSqgupQpGzvQbrqaxFU6G8n9jdfyXtQM",
  "key14": "5vkwocFZtKLGLFeBwDGLsxaDE9xRLsuHKYWok9ZCCTa41DCFhvjnCuApFPDuWLVPLUcq2nQNTmdRfZARNToiheyw",
  "key15": "3acSreEVHAbZFPKMQyzdGzjDLkJkR1c4Dua6giGCnvCLx8gibAp7ezEzV2fVJJgnxE5TWWLwup4WpjKFwKtHxzpR",
  "key16": "3WZXdPn5vPxWPsbPhh4SJeUARwMZN4EctYpTowZfuMDkv2JbdWE1vbgYcNYUhzHdnEhgR5BEwtYgWx5UTKG4KUY6",
  "key17": "5Pxq3pR9B4D3a8FLJ9R2g3EqrKWJtSWiyNeGfcBznpQaXMcKpBHYevbWEPMkaTePqNPNwCtupcX22barJytAJ4Wy",
  "key18": "5r1PTyqCcCdnPWcWg7xJ4i6QqzvzQkmWWdNYSE3qo8jir9ZQYeas6mp8Jzujnh2svG2soZH5cMon8pE3asocrJaG",
  "key19": "4KqshUbq9pMqd4b1eQrFoZVTWTbKgbamzNwUiPEdLHDHBV8EHNvB8AAdEp1a2MiRWAowTed8LSUj5DuLSEChk12U",
  "key20": "4DRCMvFaZZi5TBCsWJugfFVF6YYscCzQZ559BVXu8EcHznq16HKrkW5Vvimo4xijQV3VL745WyXUTmaLeUsBexpz",
  "key21": "5Y9BojpQ2eDsiErvaEtrN9QDH4boaNBHxBki1ww3DMrY84MoLdfDB6CPSt2RTVV1RisJUh5YyHYsyn7xrxH1NMUp",
  "key22": "3EPHdNr4jK5aJXtApt99eqZRyKCbvK8vfoocms5p2y9wEMNDoMwDjQoUJfU4cPbch246zGdnHxmbgWoM2X66ZL2E",
  "key23": "66sMQK6seyoN9gPLUYDnL7pi8G9u5zJamPWkypx6rhrJ8jJaX3vCgdYbhwNhJAD18mPNfErPFzJupWSBY3yHF1RB",
  "key24": "2jqVToAstWfPsM9RkE6cvaw5ZEAoeShVF5du9Rc7rEVZwF3qCn3qBuUUXD7fQRP6jJ1rqQqEDY1negNPzaXkhmyu",
  "key25": "3KTA7JXZZRfLimTPy7C5ettVvVhiqpA1U3gpszhLwUmKA4Vozp2wt5r3LBfhymteGoX5tc6Kgr9ifQLTUpsYfD8a",
  "key26": "jF1Ruj8DeQypCz5uC5XEoMvuQ47yjEqBXWk79E3nUgKGGE2mraReNNRuTbqkociHfeJHPuaBH2cf3tQQDmNzqHr",
  "key27": "4F1TSQNy65AggWL6DPrG9ho4aaPHCPvPAbv7aTppXTK3GEjXZdxspZTtUxxu4aenqDaJHE1LQNBN2WviRcHqvApT",
  "key28": "2fJCxme2hmN738mfrdSQLJLZwL8SN5cXQ5exYNPUzn4y9yw24k7zyrusYSVRrxjXVr77RRLYrUXEzKp3gJeJg3ko",
  "key29": "4x2SzMvuU5gLQB38ESQ84H252jBDtHD6PUCavRHQy528MFLgixVHKWUZRzkvadLVxTW34pjQcFgvcGkXnu35uJNC",
  "key30": "2DggbBWsfR55Ny5WA7qeozXZRHFzMmWxU34Z2auX34gjZTN21ZEogUNyETdhwA6kpTYvkkksWRrFw5pqojAESqxE"
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

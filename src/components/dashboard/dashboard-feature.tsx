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
    "5KELySeL8SDEpVfbi9KrgvW6gaHx8y2TLmx94ZiCwazXj71eobN69KqKULHbmzigM498vYJmSyHgKpp48jsDEuen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ho9SweGdySNHJVHDwpNz5rbjMPgpoyxdqXLVAqQvEKLTxT9W7ZgQz7RudTe3f3g3h8sAqXCfjp4CSfiwQBGkEws",
  "key1": "5MkiqADDRZrTd7Uj86ZA8MubvX8Bzk3g37vEe5toKhBCSoRteBXesbzUqwCSnYnSF6LVUw6Bjq2gipLkoSFrcJPr",
  "key2": "4veWs3f8n5f8oefMfMDjejtjXcxZoSL4x6DhCDQaVuXotB486apJhiNAkM34HLUUmcDCnwTb7fhAQtTVAzTo8rKD",
  "key3": "2gCkLZM14HC7b19QFZUfSWELjditL7SbSqfRvhMyEJFEXeLm3gaTyZbvrgWeGbFxt3QMpuTWShLdW7tejLYM8yFA",
  "key4": "3cCJL8rzRPQUwU4YN7FoaanybgbeuvGpeDDBNohW7ZsEgqBTW6twKt3F1KDRbL5CQWDaxzTAq41GNGGJoSQeMUSu",
  "key5": "UB2eghvyE28nBKQfGcZ6ztCWouinnMozV7HBowCbhjt84VESgNKxFVBfCYWcqSkwyJgqcQAHPePmuSSYnfeHWkM",
  "key6": "57d6jey2VXRTEx6mMcB69aFceC71H5iPd56yEREzFQt6hRRyG4T3Xrmk4xdRaEUHffq5Tg4Y4CGw8BpvgX7GypLh",
  "key7": "4sRwqNCbmQ1SLcHeVjinkFgmVWzU2T3R9NyJ1Y1jKfvi65NqV7uYUDGfgbxBw9wsxtrpFC5V9KF9NYdX9qnWjhF3",
  "key8": "5JJE4RPodgpkzVN7eE8dfB7e63m8v3pphzus84pZPwX6Uq9Q2bqayERagKEPm3R6yUJi8aAuXpQbgaJtwm1omo9D",
  "key9": "2yyEggDk4pvxwqyX1kTTZ43f5wA74o2vx7o34wQAru3F6YrvX9nA9zS7EmeoGr8zQotybC7KvB7AKwobZXkH9L3u",
  "key10": "36bKMCCdqjom6YZr74ZeRLCFpFPT1Ce7YyvEXNymMAJXYsfegjQfQ4a7tdytdSj3Xv3jaEQoExN2KN3MBJuHXkrR",
  "key11": "3hioqG1xebkGbTkqrgieoJnUwbvT1oDFFjoLq7zZRKaazLfHvPxHqNCksKUbdSJWovyRgxVCHpeC9ATkByBp5Jqv",
  "key12": "3YGam7NS6CV6vqQKhikpQwcLWd2g5raRWYMgQAmNBPqwi7vMeA5mjtKfrqDdjoTweLd9YFSZUNZPduzBfHsfXKoU",
  "key13": "K7QZCCfSSdjBj3Ro3NTin4TJMnnmU5qtjxFHQagZbhiLxoBH1UmGVSMk2JudP3zfmCooXC1kgitcqrSVoNY9L5b",
  "key14": "cb8BDtP4s71VZC77jCsVriJyVbZU9Vn3GgJuLFX41dQ2ya23UapK1Q4ZKahoKFbezWxzs8eBxRg9GXVFCFBcbAZ",
  "key15": "63WVZENAMPuqfARsEzEjVdCGLGKqSBjwVLhHPBJ4K56eoNLZyaY3SrU6cm5z4c8epVSEM9k4cScbRqwVQwHv8u9n",
  "key16": "4GZSa9yH2JZ7txWdXV6K75NsZE6J9YT4pivwxByNEbiuDptPqEZpEFWJGfiFi4YpHkuYAayqUTikNar1ryt9yaya",
  "key17": "3D3V35H7fJnpE51piWkFJSeg7QbC8fBWooHBFkyzLhbxd4x4Q96fGip1fGifxzdR7bXzUS6uAbXkPXgaM4eD2ZHm",
  "key18": "3bEUv8vMs2ZvyW22Q73tmrAPyL28BPcWh63C1xLKBvDAm4yaMDcQTgzzP3VzFdTL6dNThBjJwP3zEh1MF3uvQxms",
  "key19": "26dSGbWbx2RbxBR8z5htMufkeeFeDdXb2XzLP3iTkU5hzYTyfB18YgXviKNF8ydeeg3SXUNhkv3VqpyQMvQmfXkZ",
  "key20": "Wu6gXonHDZBWjT47AB46M5taqRzqJ4XeWNTT5iMJAJ2yYNnjdYPL4SEKFwW1iUrzn1yUdjupZm3GX4kx65Wco6Y",
  "key21": "3DFU13SXneQv4QuDAwtdsFBPMFL1aMCbCqBeRwsUtay1pL1KR1YKLoj8acL9XALg5eodZwavnd9UCm2nWyHMDtxf",
  "key22": "3GPxo8v6SnR99vqk6dsqcPjdVFq1nDEbjj2roDM9wKRDQec5RCQbwyx5GjNVDFBj4M8FFbZ6Pc1ngCyVk1Tfc8AD",
  "key23": "bJ2wXvSj3HyK7N1H6En6NK5JRRaRP9RSivvU5XJPFrLPhykPPQJXDRnri7TTcSRJWUjP4ipTUgzUHmbeGTADcR9",
  "key24": "3VHYpqre15E79gkuXFqjMd7QZsBmB3HeCNeCFfu2hYU3jhcpeo8KU2UC45VcdP9rkbEGEyZdNrL5VT5XVGWkpHmX",
  "key25": "27Gjn773mxWLXTsHipPuWsPfEbTaW2KFBDwc4dpKnToockQeoK99jcyiW1a2mxP82GCMQy8W3TS6ZT9Jj7Nx41kP"
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

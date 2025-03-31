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
    "5iyUbepwrmD6m3qRULJpLErPTxEYtVkgdxb3NjuqvjwGYTvRuiot9mYauAajcHSs4VM5tpJQ9r686cYSYPWx6HoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vAJUuqusmzipGU8EfEwkdYSkSgCXN79zeM3TEFNJFrQ8oPG9nuHWWR8XqsAEHBBSTr5YP2vfYryVbBh9z5Xxvjo",
  "key1": "56rdwtb1TvgJ2xdMwiUvx3rNbkLpYLxV4uMJwqKxphMQo2DxXENBQvwUQPotwhG2vdvrQjzs8zKhNnRtxsDqwmcJ",
  "key2": "26gDwwyF75Kc3B5kVssfSDdC3wnZgo4NiJmPKtu5jJdXuWfKyiUp2WbXvAVzwkryHEUqD39wdaYWuChEAtmsjr5F",
  "key3": "3QWirZJPuU5QZe7M9NYf68piFrQZim96gxQH9NX3RtZFCZp6CQdNpqr9CuK7BixFSmY5EZBWhjgAiZ8aibzEZkff",
  "key4": "gf1ibgJrCXXxGwGQjSCNa3SzeEgdA95BibCMBGcDmSpwUhavY12yrd8fA14zdUvFkHgFFUphCkDK3cZipWRbEEc",
  "key5": "A5kqGALFHD4kj1db96goc9NbKSYeWLVWbBQwcLsQgX9N4LZhkCNWUUErcvGsoCoGs8zhoixRnWAdgps1hYUMyhL",
  "key6": "2xA2PLFDZGGerQZfiQqXzGf48uGx4RvChADVkQ4KuNjh6a5WQzHnPub6Rwq5wz1Y7oKcpqD9HcYNokpeyvkb2a2t",
  "key7": "2pMNuek13wQS98CvzGXSrD9a2kstCJqCMCXRVu8qDQpwBguBoHBJ4fi88Vy2kkb7U2uKDwKQT4rZg7ZMpyH3xeqo",
  "key8": "3Ub7Q6AbT2KS2jNiQat2nTTN9DEsaAXy9XsQaBCiF3ubeyJJ2gRSTUhyaX1BryWFoUjBmed22mk51AywJCkfm9SJ",
  "key9": "3adk1kZFMKb9D3q44uPXvK4Q1PfrP7n4MS3X3awyaz3aRnNeHpxE8Z2nnswSizfx97tGxXh64x4qV6EZiztxpvqS",
  "key10": "yEhnZQb6vHqhbWUfZ35Q98B53zdN9rR1KHZ1qtCCHQcXX5WUU7Uzyhhq8jc475z2MWBnEc7LpBWf669nFR6DW5i",
  "key11": "2i6y99PqpasmNHvsnjKWMKAzJfx9GkBWgZu9SY3s8sdwLjm4Bg5Kw4PYhCSi8afDL5q9T4g8kbXQ24JsKDu9yBL3",
  "key12": "4BqcMVghbXxomo5vL2nWwCn16XcNpf1ZS1AkN2oLSJn9U28cf3NfFWuXcXMhbXAbCHvbt5D9s7kn38wUj6myzr7o",
  "key13": "2pFLhA15L3vcFaSNppLUtsubXDA7Fpo797VermDhGwe4eVVEfJkwLu8vECGBReJ1tasha1KJtS4q1g1NNzSedLMi",
  "key14": "4ovAyULnxjTuTpbcLZKQQqSEDeGYd3aUv3jwVxQt85T2qCVZa6xe2ZfdctaNWKEN6uZs8sbrosvUjVfUaZg5wvXA",
  "key15": "2SPTL2K1FzUX4ERgzFDLVnBfebiTeYYZco4pA4sa3nngxL1A7ynN1cGHugpDN5wpHqMtCuHUfZRnHfrr8hNAWaBJ",
  "key16": "5kCUUC5AdUMkY3jcs8fCcNNWyji5JPJYK56muS3WmrWNEvEmbwN1VAn4NquAf18DrCsGZy4UYs9Y7nC3zB3tv9ct",
  "key17": "3Yp3X48ZM6zceJpEVsW7MfXhCxQawkdrdC3kxw2XZXPAzNfzXLp22MnZrKhPU4STm1CVHLULXypGatwYF6zfPgxU",
  "key18": "VE1hjiUo1EqaUFPVUVRqmcLuCo6vxoFxoqwPb8PZAYzUtoXGkiGUzH4qwpZYdw7RxpXaVKksGiSqUj4GAxQqU2b",
  "key19": "59gNq7vULoMP2fLKSTHWuPm2sewQnWK7jVKEWYX7A3XEeoew19MULw7i4xzMSf6mkNyQLvrqQbF52JTmLwwN9xXV",
  "key20": "2LNPyRjk14HeZ2GSheWoaGLHDwdH4pNCunwfSYjPD4kTzZ8aX5PwVnQDGgMQMXwzKDwHfytkzKXafMTbGUcoVY7R",
  "key21": "458nvbgidswdZ75DNmscjvNRyfwbKjn6kChdjbDYD21YDDzGUqw4n2UbmEav8CyxVqy3LzicctXooMEd9MVdQWmR",
  "key22": "ThdSYezGffpR89E7nmkThmsZXere8Bmt3B9AwSK6TCfy34TfJV8wDrYswSsggyphqGr93kw3T9fnUfB8qELR9Au",
  "key23": "51cFhzNqCKWpf6K6EFkjwKALPbkzD4gELAcxYhpaEf62ExGNnz621rC3oo7ST4hyt6xgX69a2UYEn4RNpanLRAdr",
  "key24": "nP5cHkqeVz5Bbt7H4vFjvJQ3qpJ3KnYMyDAQRMV4hKTdNTxaE9rd5NBumWR1EQZXzRc2K9uBnkjwjNQFb8ZvYnr",
  "key25": "2HpSJMQLNb7bAH5m2SV6qnSWCQr5Xpnpcu5WJuPs7UnR2UEqR2WV1CMcivAcHuXvFxVwakLZdzzLFPBrHKyRyEaT",
  "key26": "22rDUTqsDwSTWZPMXSKvFmpY1DoZJNwBMe1zFTSFKzJnbFnTXd94rvrL2Uy1zLtGuwAMTLVKGa4urMHKe9DpWqAE"
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

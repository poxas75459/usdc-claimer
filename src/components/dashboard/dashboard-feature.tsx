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
    "qBoK3UCUaMFAGQufCCj3ypNx2KWJzHz1vag3T9wk7FwVupJ5RjLuaqR9Kxh1XE1FV1hKuey4UuZzUdPZBTNM4w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJC5qwQj4HXK5g2jthz2zowFTKteyTnQ3cVkvrBYkdCtBeqNkbZWt33Fs81KSWaN5Edfm1RNjASpgb3pCchdTJZ",
  "key1": "37GFR3U4VN3Ddb1HtHAPk8twRXGcj23xdV84NDJh6rjWW1EzrZmGPd6KZnCbDPxsC9bChUkFx5WFyp2QW9VeXVcX",
  "key2": "2HQdh6p3GeTjhuh19Uf6eu58EQnzUhNQG3BTKtJnBRxCCcLuD9Kkb8Lq5K64AwmVwAMCaF7NQDkhgH5vh1d3M3F3",
  "key3": "28z6j1tZjXA51chjZ8UZsGA5ALnoLs7tbwsuzmRpazxeEc39iumNQSwX9gqi8hTw8jreFqsHGAKhPgaWbtjNu8kG",
  "key4": "3zZuc4yi2hLfhZRZEja99mdb9Mi2ks2hwo5jj7CXvEMzvdHV9tVKWEqupp3ewzv8piPGk1zV3sP6gQrkQRvRW5pn",
  "key5": "4GJnapFbPyFiVLUnSqvuRyrkrwi5KcK9VJBrypWnqku6zmB15BS8Jjrk62Er2u8bk2UupN64LnwnWXbZMXEDT4DH",
  "key6": "3Vs5t6VPx49swbpPRLun2uV5H8PCReFzdwDt5qeLvBv2oYmNfnXAMAX3AB2PoBj9wH6ACxkmoeVPPecmdA3xaJ5i",
  "key7": "36kDndZMdDkr2utAb5KdfxRsjSB3yZArjyNnAUqAXAwZEn7uJdYUGXqkr5zLBGUwwCUhfSLPxwi2KkB3i7wFrTbx",
  "key8": "3xq1FrSy2x4fpLpAPVaCSFPbiPvicpjgGGFgZ6u6bqerePgXX5bZcfpdMdyXrQEKtvxjqwnLN1nzNMogTSA6GGi3",
  "key9": "35TEDLTLSK3G7WHjHhFjN3cPpL5ExWNEFguA2MCNM3gEsnXjfRvi43Dew7eNjpc1mbdGzYwPdP31gAEoeNfLsBUW",
  "key10": "ja1T24du1pPJ5Gg5U2UeuURtibKYZmCGJDa1dtQgEfJjH1vxSU5tLqkvBAwgPrkmTWkTcnHa4wCVsS1Zv4ELMxz",
  "key11": "3P5MkWxAdANEWM7LTBgH1fvvQ8yRQ4Dxqh2LUf5ZTnJk8tR8jwiZsKdHfmEP5M8n3TrzzXwEBtD3RdBqWoBhXG5y",
  "key12": "bAqNywD3hViChCndp5HVsACui1wUHpf55d9BWSLXAu2S2MHsdynFrJFp9vGyy6Zy2o4uzkBLUYvZ6p1LZ76bv34",
  "key13": "57jT7RSATZsGrvjyMoPuUrjZz6fQfR26N7sqiLbmSJL3MThQZgp6d97cri9QpBYu3Bd6SxtCCHD5VKpisai2jvQE",
  "key14": "3mfnRqBVH3RUrjKSuot5yoHTNSHGqFqt77cuJsKuVwY1niXE4pdgCPjPJSBHahqR9DexXX8dXKsoFGxNB6ScQuYv",
  "key15": "2YJNeeeMPfhfBpU2UjmpjAzoaEJRZb7f2hBpJnNqv6S89SB2unhauQGobTTWit6d1ijCuc6FDSAVmwpuH4fx5Pad",
  "key16": "6nwFYTfoi6kQxuxUhDfZyvFj3byvaJzgj6t4xXPhkopz6BZ4LoDxoPsGARhWFqxiSdfqpu9XeW6GUAHVPxqSUri",
  "key17": "5CMaTUJmUEkXFHAd6QuZC9t4cLjHppzhr5kLB345cCq5uPu2jigVibs6z833ESnV2LgHKAvCdHV7NNi3T3NeGU9m",
  "key18": "57Vc3U2UPmz4SxoLtUsRKsNrHQaRHW5sxSmkoQqzzSeDbBqftELbPjC6MonjqxukWeBvSJYXwC6A8WqxRRrCDUFr",
  "key19": "5pJeUx5jS8iHTMckxaC7JxYW3271CWi853aaP9SNfWM2J9sojsmQiSd7n9VMF79tdCBRuysqpkNPerANfvyk3D1W",
  "key20": "3vzcGKM72mEj5DkrviVytu1eqTSEeHnCz1ABhWoFhEXihUAwneJv1ev2UXx3GUNjT9pvEDkwEWhoq8a5TrTbWvmF",
  "key21": "3C6LJLcVhRUPUFBDddK24gNvn6jzxJz14728tc7hhN2W6B12WBdYtSKojo3n1hb7UUMWbzohNy3E8nxLoJmw8CCQ",
  "key22": "5TcibwSp8A4gqw5fN44BzLaauW9QNfnRUR6v84Yqb6KrDNRX9bLR4ePzWtFhu2keqmRbgS6piSNyKZToMKaxDiYf",
  "key23": "Zzeq4RhQEZp7rKPd5NHvBjmpkFXkbdNRqCebUw68izF9dpw4L5wm3qU6z62NmHERWiRADkHWpqG8UDKWiy1qBXv",
  "key24": "3HkzAMh26MCCaQWBKrjyK6qJKYrpo1qqmTuSUZwK6cvgUFewuMosPeP4Vkyjrv1PaBaXM1UyT1iYgw3qRbEMuCer"
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

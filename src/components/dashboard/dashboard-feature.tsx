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
    "3WvbyqWMnb5Gxda4rXRf1y9RERoaqvTh8hEA1JrvnqNnGycASFo7cqjmw6jKZqp3rrNNhTJ8QFXUsBajNGvLkbjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHKqSoz8eFrLHu7Swpcxjpmd5Ad2FBWKEVFh3G6yAJx6Kyv3iEkGEvr9zzMxe1u6M3NhYwwBjqwx1TvgMBgF3fD",
  "key1": "3pCCCCoam3eHzK4R7w8vBynqmZ8QChSLPX6LNeXGUXKWgfYjTtSQ7yeBZrY8eRpW2eQ6JbntbptsacwjkNNsA4RY",
  "key2": "4VUec6DTBLoPF4Q59ugtpZ7Mvok7fbwq52dTsHdDWUVEEn9SkgvpRFrTrn3nGvnbWMiLUuRuqXU8EnpvgFaKePvw",
  "key3": "32QgcQwEvMqmLa7JZVW4FhjQX2K6XrdsX66tfx4tFa1baNbSNCixQoYspVGaPZM4W6PWW3bFnUe51c9xEL5CppiF",
  "key4": "4wb3Vw1Gy3e99oqZUSumSQDRLFyNPVZxnDrdpLzJqucL2k17NpmHNMTSuK4kDZrAXvEDonCnhAX6Rd6ZFWEbvgtm",
  "key5": "3k4bASsPz1dtEZfxnV4icoEEMyDc5dQw6Fmcr8D4KxCkoh5Kr3KV2kFNpu1hhtJhoS9cBiKz2CGXPPMJykqEYPn4",
  "key6": "5SzeDBR4RGuL7CHxk9RPmDV7ZaB1i6VMLPtjW4uqqXqgNcDQM3FmQ3SSVgJyobZehRtM8ZUJSVkqrsihmCxhrgzh",
  "key7": "3QyPFySAVHBh552nonsh59fzP1NbKMha6ChQBpof5s7rePg7wADBYj4MLWrhMC5h5sxafBJKv2Xnirn24ukoAdmt",
  "key8": "25856HiyMjcyLbfq6zAu2UwngN33e8TGQJjHP2dHvbivHJSHiS5bDkWKCfzPCFBw9u5dBgcgszgBM73jTJ6fX8mo",
  "key9": "kQvtbvbSGqmjj5NDNXvMyVYVybA85fYEYUN1sHuxkYxMxKsdem19EgstZbDsgXPxRAw3u3RAkYoJmWcieZWAA8X",
  "key10": "4UH6fWWkNABMtTmVZwDMk7CnVtKfbnh5LzcWoKjgBBYB5NPH3NVvfLGodEdmJ5f717oo4o4HVr8JmYMYz7FnJtLc",
  "key11": "3U7BzPtDXcadQ67jCb8YMEssWwWNpBeTb8xtvutX2xucBzqHULjsxoGpx5PB4iyGsvuKBebfTcy6GkWauH6Gru44",
  "key12": "5RB74ZUyYuUZd7mbcEVBxQX9KW3b8j7s65o4gdjCcmVxy4Vj8gst8FAc13TX8d6298CgHFXYQcYiMLZ3ThCXNQqP",
  "key13": "3hndvNdknRsvnRNNuCYt7H9Sfo4ArnDbbSKocrG1LDkDDJ9miDtyrrrsiBLrbF3xtpGgRFSc2fjPjLQ5XuZLFvPL",
  "key14": "3N9sCppyfSkD5g9YbeCKebpNVm2fXuGxoVCB3Lf3yn53dpHCSGCtGA4Y39hufhZjfNYEiLeDL3sbX6e8mdhePvi4",
  "key15": "5UngRjrizjt6Ptk61U63roFWFGbiTJroAnG7THvv2Ma3R3T2Q7PzLYouKCiXjNnb3Vna8cEF6A728Em47rs8awRY",
  "key16": "3Rg5UeBue5QTsqLD33cCpHqdYGabqaKdXHm5G5RHqw5ADMWqcFmp24sh5KMq67nT6dfauHbqAssdfNJD36mKCyPC",
  "key17": "3thQFfAhr2oYF5vwLuoFhfdQrkcMRtjnee86buZhgD3aK1f4WTh3egfGLJeyNkcZ3YUx98Tny2TwDw6cNbDmF1P6",
  "key18": "52kwhkJPf4mEj163xk1PbP2wSJ52UGdL1TMbqGGkb3cJpYPxDFpGWYs6s17kv2gKdj4aNq8A6ChXESG5HKj7WiEU",
  "key19": "WhChZF8K4UqZsoPLgTTe6aF9yrMVmEFrURNZh1SzVFt1Qy3Lu9oRQKM9hqqZRwuVQGywkDj26NbAdsskQZvSdxq",
  "key20": "4wwgWsyQztxNjGGvZkAVLA6XgjxPzMteVNbmQfib9yQuC9Yw3hHHFPRrbXxxR5aRj1EupdK3TQNq8HLZN8n5mWPm",
  "key21": "5Gf7QEUY9RCF1ZasQdWyrUxk6dyVFw6cyqx4uSpMututKpq7HbGEaBqEYxtSCf7i2XVbGLNNTdJcL7uR3mneppqc",
  "key22": "56JZmSDfhS3bT9wxar3DqU8Qit69UJ5fFPib5p3RSeZt8kDevVH4SsXA4UaYrKXSNMUs5aDBYTL5BzQQeSxorvG5",
  "key23": "2TpW58U1H17dnyfWkfAX6yJagWswjpc2mxDfp4zywQj1TXvuMe8w7STo4xZoshjnjLiQ27Sugs9BpoGpDhVfrM9o",
  "key24": "2geaPHYrSjvPhPs2DmvF7MkMK6trATYf5GnDn6dKFivpHutFTcGN5v6aYLgLLHMhQY7rmKjEoJMXFu7TiEvXLtsQ",
  "key25": "4kfhDPJnnQVTB7CFUTb83su7EDMBZKEBpGozZomKDTALBZkK3UnbG54CXyQx7qbuzqXJa1DQuPxF7HtbPvnCTGeN",
  "key26": "2Jp29e1buspDEWoA2fDSceLQJUGco6MweHk5AC8UZLQjwzyVmyvkDS3ddjd5Y5yz23e7nZ58z1wQGDcmRWmWQpi6",
  "key27": "5kSGDAkWYc58Yu7kc6AsgAMLH3vZWyCFzmCdu7nAuFzadQVyX9qTH1du7bkXhA6MuAvmr2NaThBzH9vKVLZtnqX4",
  "key28": "AdnZ4mUXNBXfiyQWRYAhd8mnUQT1xT9yWzNNgmo8Lvd8Yimj1T6FyuRQ9kAysd7tNXqw6ZtFD2JWwCG43VyQigB",
  "key29": "5AaDCK9GFfyXt5Whuwa5iXJ7BiY7zHPepaGm9yfoBghZKJefdaoXNiHuyECZ2XKmVq5vFAeSvzPLwyJWCHrRNyoe",
  "key30": "5RVQnswgpfNTM8jr5h5u7naP7NJDPJZWPuva4d8rQJmqwSJHTbZfZoc8muTUCfcmXgyFrq7fNXijV4rwwAueogEC"
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

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
    "4TgaLmTQmT8rvfL8drUd8qF5YZjVhxNRnMmZsUY4ujQhMrQsdbzUvTvFzqmP9ESFY16hxXAeNLSrxy1UjjvbBaT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cwxWxqTeQGU5NBVPqxd4m2Zt2DvWrzAgLT9kJm5nPnm3fVXLp64HeNJfLLm7uXJ1rcN81jjdgp4PjAZuaKBXHi",
  "key1": "5D37agMSjavMLFpf7KM2Neq1p3HQyjaJGwPurxAXe3Nh9zerVhRiPw8LY7zCaszcnvW8SrtZBfFqFpcgX2K1eRyo",
  "key2": "4JoBA2WFtbVSdwmWV877RiqjvxZ29L4NDQr1pSSoyZcRn4sMiRxjs4ym6rV833gzZxnMJbEuFMAaCbULFMozu7EQ",
  "key3": "2UkjQvcTrH2LPH2wHab5ezqjYJWiysKwQbA6Hzbsbd7fR9GAmVJCCsKX6uR1PhGCkpGTgH9zDMGfajQy8S6aorbB",
  "key4": "4ZLoPEYHKejPxKVCH7hY7z5XTsoCQV7sVuit9k4SAWaVLnJeahptoRxuXNwhnyf7mLRmuLSkwpMR8wHVE9PuyUsh",
  "key5": "3KaGpBPd4V2roU6cz8RanaVrL8ur6bpb8ay632Zi1WEAA2HcDi7mwn5LnXgai8x8Dc1mWcJdRwKuYiZyiTDadKTQ",
  "key6": "2fQNQmaZh78b3ESN962QCw2LatyPLnZ9ujzz3xbG7f9yHR7umGSRA1921gjkQg2pFAcP2qk7HiX3mbznj28Q3b9h",
  "key7": "3YBFpPYoiPdEHtjHT1PWfQCcTNS1uU6FuvvCY3GXN8nSnZpzqEbxETdwj4DYgjKp6xd22T4xbpzjFtSH7Re57LZR",
  "key8": "PKwsC4QwTCaUt66F6j3KHk7TN7JToCdvvXqyGZa2tViuxQx2KCTJnn9ct2z92xjVFi7Qc23gWZCA71pMwqaLoL3",
  "key9": "4DdDLdDMFjARuJbw41ATTJHr8TjFurhLMU8psS2wXqdT2SL9RYSBuddtu64YyuTdDmrim416RoJHFzADJJFPFq5T",
  "key10": "4ikDJFcwrTeNQaVhuAwh2ow8hDheHPv7dQNTLXTEc8KhHBuudyd1v64Jy6jwQPEEYZuqXFuP5JbcKAXGrQ86NkQn",
  "key11": "5Ei6t67UYYabLHsG7hyMjpFbn62ZcaSCJSk3q1DPpNMERcpqMfXWAxu1nLVPw2uNRsCLunkR3Pyq6NrZ69Fsa8cG",
  "key12": "4TDRC8DCuy4jC9tVsVkjtRBCQtLnLZ24e4g26xkjWXu9cK326FQntH6y8RfUjV5ikU82HJ2kzBQiP4925dZjire1",
  "key13": "ZeTs8FRyLs9Pcw55nahVBWuyFPZD4pn3MBB13T7dUadyYj2GnBKxkZ4Yh7gEHCs7s3Pufvjv4iP5P6Y4yLsXZtJ",
  "key14": "3BxSELrPpimHHs3c651Yui9wcdwbJZuLymTGtZZvEwgVZjVTaHiHvAempinoYQFMxi8HN6xsMK16K5GVtDdVSE86",
  "key15": "4582nUkxnYuNvn9B1mozBYD3DmsFhgDMRA6cANjnHxbwEXD7UFVWQzsRGjK83EWYvdLFefvFjBzsCwejTNDNSZbT",
  "key16": "5CfxRXYHNPPRK6ZfwEWhNeadrt7EYx6R5nYK8gfEPrvQgtGjSSBVHZFLrWEf8wjawyvmEJx2UtTdauecF44jLknu",
  "key17": "5LyskPGTHieq58Yu3PKQ7U6C9nLxzt3nefsZxojKKhzCvh4JSGDoBXEqWMYgbPDk4FmKFWMFbepQnXxsX6xzzjgT",
  "key18": "5QHCEneVT73dbDX9gghFRu2sNSTEFUJ14qJCNB6fkXHSB9eBJ5tZCkqNuxY85wGYfBY75vRgyyBpZzVKyNAUnSfF",
  "key19": "2CfLHHd2o9XH256iuVx3k16nDzdMTEbvbgsX7a4TVef7wSfbJc7ELMXthZc5uw1vSycksFTQrvqZGsXefW3tttYn",
  "key20": "54Jf5Z24PJcdxMb2m2PgKdQsGQ96YHNLREaEcoyodRdkToQGJmmSJA6MvQnq4ofZ7UGNcZg8b5QoQRxiv8KE4FD6",
  "key21": "YZdb4h7agm4MXJuQgwybM1Pn6waKBc6dQLujehUgjKLqMyDUpgWAXs75bL2mq9L6hF5WrzkZHryT6PSJC9U2icW",
  "key22": "47JudHvFsbNGZ7WbPbJqSxmiQbbw8k1AGyoR7XfzGNucVXGH3UyqqpGqWQVCwnaojZ9yLkZxxXJdawCe6NtBZ225",
  "key23": "3wYQrWSrMEnipZwX9SgRBQhQb6sgdzPqu9oW7mPxNaHrTSsqk4x25AwPHJaGSgSgY5JpvD2RGKNM88bp348TDeXp",
  "key24": "4dPRf7UbQuaHjF4Q8YwMkzQgcKLJUbCHWGSsFa6TkeViM7Uk9rHbWmYFDKchuwARye4UxiSG6BPhDKkjmSwFCSLp",
  "key25": "2WRDVgZVaEEsBmQNoV7rNSBJ2BhBNttX4AoDHkD3yRWTrq8NMWGHFhQQbzPAML4kTTPPXwh3inRubJ4v1RSXSKj2",
  "key26": "4pmysbw77naiP9ZShFiGyynsN6HzewGJc1NFZCA7bae6nfQutGycdMhDYrGY1wJtsE6acwZvmgbnVFzCJzFuE3kb",
  "key27": "4TfXb6VWxE4YUDA6pz6VzfnzCJ6cxqiMbJg97VNApp4TP69nLodZepCWhMhdxEz8wQiB38i24vHjCufYNvd8GLB1",
  "key28": "5AmZaBV6FM7YAT3EVQGsb81sKejirvGJLjqM5A7xMWrKb8R254DyxN9PD99MvpBENeUYACjHEKvH6WMZC6DMj6WR",
  "key29": "tZeFZ9eg8wCfBVP3b1VhRgxyhFJg35SY62uhJPF6Hf5jUsqzAcJBUEyw8f32WQ7x2PNUngei77BH6Ej49f1Zuj2",
  "key30": "Kv6uEJFiWoXqasrkHw5ujGf696p2apHkL8HbE7mNneV1ee6KyupueyqziobB2rytvn9LT3nrLZBWJSBFed12ipK",
  "key31": "3FxfjsNk9yFp11ooeiUymRgKjzmeCNHj1kCiWrm6FBVC5cvDGSZ5JwgAcEkiWebmdzKHX1GFa3BdzLuqHWEC7VpZ",
  "key32": "5m2PKxpJTJo8jW1vzdTWeKuVnRGN5NDqW1zYubnFcyweoVfzJ49pBPW9Nzis3WLUN6qv9RkQGAR5t93kCj1jFS1J",
  "key33": "i9PNqfc8dgei8t8kpPxX93oZHz9tJzkLRy7EN53afvwR8kzzHKfqXr9spXQQSb1qtwkQwsnrxvZewsh1RubApYx",
  "key34": "4pHKFsDAXWc4wC6Br7RQBdY4W32xw7DLx52SkLdEtcHLVZr5BiDCB1LQKDrRyhUT5XTusGAYMzKjpXL5itpqqBgX",
  "key35": "igXAAW5jLY2WWcL1Z2kWuQyyqa6jPG2w6NobVJcGowMNK2BJMsP2ZTBnaxk8AW7fWShA4tFKFbG4C9d1f7vTecv",
  "key36": "2Wb52xft4voVbjB3XiXSnDmQtmFCbhaWHVk72MDbpBqnnUvH9TKqBij97khxyoqdt473FsQjCCZGivuFg6VFLTSB",
  "key37": "5T9b2bFDb8V6XkiLeWJKPY9eeyznoX3nk59aLNX4N9rfbKLZ3WNfsPCvup5h2NbgQNuk1kEfoTCp4XwHahTFXj1A"
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

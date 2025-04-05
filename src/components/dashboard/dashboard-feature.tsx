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
    "31vc7XBzxrMjmFPR3iVmF1C3HQitLwmAEPuhK2JEj2LBU3nsdz9ZcVAFmPX1AZ7Sdje6xPUtTz4CJtiE3zTDeJxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxdonxKgVMQ69EzAA2j1TH5LgQwvuHdEpx98yPqHzS1iFscwK3e4YjZuxDDvtRR98Sg9tc159C18tYg2ACBsVBx",
  "key1": "2ru4zqhNEwT8Pn8T6qMAfRyUUoWXTJWsBiRoaTqw4FMjy7kJ6XteHdSzTKatq8xeketanNCYjgjoMWF6AjDe2cyo",
  "key2": "4Z5anZ5VFquh23UXW8GKvMnvHvYjXvwxhKF7nK1aTYfH6GtXkbQBGrJEm993UzdzdDTTnNEb8RAKKFCvDyk1L2Wm",
  "key3": "25N4UvGuoZD3Ywn5cpGcqET5HZXoKnkyjqgBsbjLDm6BSAMBWcJkVgEQKjEGAHooPS8uxczfJAkPnJ3925aZRiFJ",
  "key4": "2PFFekxJq8YLEJMXcqFpRaM2toRz2NDuPZKNboaD9ux3zMESG2By2i9AfLcd4aN8x3TsU4gDM8q4pRmrzY7FeavU",
  "key5": "4e1oTkSxKJ9JZecFceYExdYuNPFXQHCEiMhfb26SZpnxZAG7HBXr5tMHJaoUe6RGzCkHaEwt5FD6XrfQ87LyzNx",
  "key6": "2hJLNCzNHjeHwKCwgSgytGLChLxnAFNSvwXZFGvrcdeyM49yYJtdsjpFnUkNk8bk8UAaiLD4ieUTbBSjtsAemZe7",
  "key7": "4VVvdG9xbGaTsmUgcuWLfB874MuNcKuyPMAv9n8V8Gzv3F4J9AB3UortHoUgnY6KS4SqinwuXgHagQtKzS6rnXQN",
  "key8": "2QBL58X1KcWWiEj27VjA5dWt6zXK7A9tzVAKqi7Sw3wwThacKCTL2ZXHpmQqPPKacEmGEBFhfuakHZ2MEmjfY7mY",
  "key9": "427ztdPC9tQDcwKbWPVTShjiNpDUMKCRFNPeR7WoQjLRHDtRY1P1Yt34DNLSRcag2BTmjeuE2iRLjt3en5wwNvpX",
  "key10": "5FeSwstfvJZcj2Uu1JoXRsE52PedD2NEH3u21P6NXKjCHRhu9rH3JkZBbB8t1AcHUM2XpHMtmfMmB86KdTvZQ8nv",
  "key11": "5jY1gyBYoGGMyPnbe1WiZ9hD8CLGTDvJ41oWyBkFvTohyFA9xVkc6mBCee144pcVSvoZWFEoE6TrCfYz3pryJzVZ",
  "key12": "3TvuJPbJBBmB94nFwZvtoRFdSxnjmXfm4DVkn6WAJrjGxbyzSv2tqqUGW2c4JCvy1FBdhXiShkUg6KrpaDo9oJrm",
  "key13": "5CQDMagiU2Hz5Xxww5J8oL7KkojqWCyXvWF1Thfg9T9QPhrHJ98pgiqYMDxA5qtBDkGyWY2d5rixsi2yJzBsAesf",
  "key14": "4dY911v9iAqXm64R9eYSQS6MH8EfZbVUxYnoQLUamYvaWNSqi3VyPqTDhjnbpivk78NPdBx2tyzepSY4PMhbpFgv",
  "key15": "5S9WJEopsTeHMVbvfhjmvwAkudXQs8CsU2ZQuNM45amDgVWVBf5Nug9pPRn22idbUmBQXeDSfKRBwW45GLrUE9aJ",
  "key16": "2tfqR4C52ix5WkBJBtwRFm1tocaVpZyTg7ShwLLCiZhENoRuc6iN68xjxvNnA3E92r9VoUdMP7ToNd9dzyneYxA8",
  "key17": "2nNjhMQszdG2E8YVN9feM9oXLFJ5UMcpVt7t8humjwLft3AuU4ZFye1shWPQuNTAX4P4VzQMLmgbugnnsLURrD9b",
  "key18": "3VBDKWyzSdp5VM41dEN3t9YThDyp7cMiSh846x4XdrWTuC3wxc9r2WoNuDcE5MXyBvXNKGEwA3HF3f3vN2FVRvdU",
  "key19": "4iGR253tQKkZvezAE4CxzJ6jWpyTFdod4KTuH3DK5D5K65iZwyEsSvnKEgghG9wPnZ8d4ZVNuibqP7jQLWzMVD9w",
  "key20": "X7jVzgAu6Pa24L5w9zmhvNzjyqkYtU7CRGnW1N1c7GxEVBs9j8n3JQEkaPYLF7Hx8JAHq69KFrNhFoBTgkhgAFn",
  "key21": "4yGiQBFgcu3hJY1x4RB4mKDnhRCj2xQBVe5n4qSbbLNDsh6iXLSfuR7naGVXCuTPmpg6xieCfDf81B9DU5mgABD6",
  "key22": "xUhyU7qeKWC1VHLUm6gCYChBB9aRyRFsKsR5P562VjLQ1uxQtCVu1AR3XB4PPpPcuieCEnde3wDtYc8KXw6PXh2",
  "key23": "2PBVcTtXJz2UKPxAGBp6KiZqdiKwARE1D8XS3PC4VYb5QnLfUxozGfWa5dPq3okPpVPz75HTYRFEnY6n9WKVWfRZ",
  "key24": "3RpcysArUFgxjhp9gYgNP91qh5HEpRjEQuWx1XDxRx6LzoCtyqpT6NEE5GNZMrYurX9bxEfdeGW1wWfyrcScUrDR",
  "key25": "a4XyEV7wviQGH3VqoSDNCsnzpYTrE5J51qDapw2U8RvA9CthKbpZ3TKqsx4EQU1RvTpNcJ6tvfRTp3zDpjLXjAc",
  "key26": "3aGdcKgBs7Tk9SdypFNthyUuEAS8CbZTKZZpJo7dvf8uA7VE17J2A1hMsRW1EEtjzaoQTxmsFUmZXfZD8UBV44cL",
  "key27": "5J3oEmAu15zTuwxiX4nLbCoqN5YWpi71NpYHfRtLigppiTtfizuaWLMrjxmqHwobz6YzGfTbgd9HtqAngKvzbLwg",
  "key28": "3RspmVH9baGBwXSn8kN44bQor7UegBevessfXvNZwtNdnmsu6Rw8r9DuRQsaEt6JoDd58SiYjvFQshBWcYKAK1k8",
  "key29": "iytYo3frBijyGCgCRCRdxbSyzXg82X2vaJeYzhkS3EgsEuDRNHYU9aVRKVoQKoEDPpr9DC9xnW2QcdPDehec4Ki",
  "key30": "2MzpUGWbdx6AYJksAAnezYud5P9BSHb3EusBG29KWWjpDcbhr2ZnK1vcTMC6TaMogZyoc42aQKbZv1g9WzQf4iLq",
  "key31": "2p37CMzk9s9vYo46YEpQXhz9wKuSRWStJPEmMoaD8iDFBPT9AESi38t5HijvwkZ7KowKymMgm9hMLe2Hw5528GJ9",
  "key32": "2NSMedgVVcrsrLgZHm1kpuHYrZcDHdrrtRai15tyKyR2YkZVePFrUdWQA41xvRj2dtHKaUuZ3AA3WWPKhQCA6ZQC",
  "key33": "fArvv5ktoDcQp59nkLchBfifMCazy3rr7ER6LRhdtsVjubssGG7xfiFrAinN7cAXUnGTJHMu917m3ecn9yt8a4K",
  "key34": "23fiawnPLpT9X4VGr3A1uBqERtHHqtxjXZmkGmSYwihp1sjqJYLHJJXDkEP8RkikcCk2HogsLEav5baN1zPPhgHY",
  "key35": "3aL5GuHwSzALWgfwiMcTVseiZRMN52f6Suy2x2GsrzBZmayKkpvUpuQD2vUj35vPywupo1XSonGtJEkQ6iu9G98h",
  "key36": "3g737Vy9saegbAhDmnuP8FZ7DgHmjemecYtopYNC63hcBhmFbxGuL33JXhcj1ZGK7hQV7DJABEenVB6rXd8VRJwo",
  "key37": "3dgyRf9MHkjzpWejUJU7RvNck24eetNECSz34NynQ81ARFnLRfcwDP9qEjvaNsK4DLxcSZsifVfKTUHR4bmwvVGa",
  "key38": "2P9G67WGwMpTMHfpuTktG93q7JfK1ZvGdbiEFEgbw8jfLNvPGDxgb6p3cuCxv3SdGVkZYjcLLa8FzWHv5cQpJvRG",
  "key39": "4dCPdoEbS2SbA2qeAyKiqDUENov1SBnVJm7s5baKyxfcmPJed4znaqS9mCvjCvqHVZtJZ6fRzxBLWFXyWd4WAiiM",
  "key40": "dxh7J9pRjaJkfu69ZNkZQb527irVTTWjkCbNc4jwUNpLqH83GCf4bLYiZWeXRuPpBpvJ2gi9PRpAHtMSFWwZd2H",
  "key41": "rL9yztde6NjhNmq3Zx7Li5JjFXk7mk6HXzruvfyzqsEMbGSWCHPrVLKS2M2sDHBzGP38TqCVCRmC8jZRo5r3GVC",
  "key42": "4j1SL1Hn2pUJT7cBncNypmncdTnPTMMKarKib3jhjc7tuGya34mEefihPbjvx9bYGmhvHucVgcZgQwDpSXHDgdMK"
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

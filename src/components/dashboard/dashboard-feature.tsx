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
    "vBCHiqrFVn8tzLUsj2YPicPbSz8oPmtjTWAepm5nhKaqvr9LfcR779J4RQNhoszwoX8Nk1kNjt5g3hYfQxSUXJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCBfpcCazsTEZDceMVcxGtrpoC3Fpmpi7wHFHpUHo2A41W3nay1CktREsePFP1pNZ2YvAKk3crBZET9hvAboX56",
  "key1": "3e34n7oRNJzHR1xFwCEbJPvjGQRwrvBySswm34EugcZ4ArWn56xePVJEbM7M8W5wSTPSkGsSZXQyM9TFTgUdBZJN",
  "key2": "TmX4UkShAD4KQyZ9WZ2VVFzVuYeYSK6hDo7DP1ZhLQgYK6yy8UKU1NonKmXFSsv3YPk8yBAL7aAoqQJ5yuEiiet",
  "key3": "xCE3oYJm7pgwAzK9PhVbxdGx3qPZhmtYhp6rixEQ99KheYQhCuSY1dTTQNcP39j3vH65bJbsMDcfsfcqAGdXQiy",
  "key4": "f1eNQ2TQnPuAzQ4SoQG78RquwdZsywGaFFGN7MpozsacJELRW82vWfqbds9hQWuKsfHb1UE9g7xGeC1WZPoNAZb",
  "key5": "3Vvbt4vAWKSP3fQkY5VLFAi2nsqbW6edmtMQzSzwNnheg5RKM4cCm1SnPN3nJoi6bthxxSqbG9hDgH93xtkAph1S",
  "key6": "4yTgRgeB5beFbXtXkQ7oMZCRyUTbzjcigNd49qJuNWKDx22xkUmq8p86fSgu9eRyQHTd3WMn7RmURWPtomQmGPge",
  "key7": "383bWMUanCXFGWWV31WP8B99yJy6wH6pKwVhJJqcLiMwx54xxh7zR5GNCe5trjkyMhk4FjixJyZ2BD6PdyKFb92L",
  "key8": "3exYfv7bEgoMUzbpFqELyEdhFXEtCks36KEXbReepW2ugT2ZEdsnsKGrEGBjwXLhKcc5wdJZgjrUzbdJX4sd4Xyy",
  "key9": "X5powcXFuB6H3nS6WDXPS9UJwkqjmiu1vDZgDyTn1CtvPjH4RiYBM8xgBdu7DmpxFWfLp2TiDZxXh2tiia2zaS9",
  "key10": "3XBSHsH1GhZ2hd91PvpdNBuYNHGWUp9EqWftcZXPcr6yb11WJtrmYNvMez4GpNkzcsBxzK429k57AcZReZCm2sVT",
  "key11": "4RkjqUtqaQLWN97SikTFTfnwvvBjqPyJ6wdGmMgwSUmVMRAWUHc2cGrvuRUaCdDRFCYhTDcv2GSU6gjaqEvEKHmz",
  "key12": "4Jku5y5ppnEAY7doMQdWUB6U8UEcjeoamVuSs6JAHWqR5mmQYvAyYasXdGvGaJkx4B5Hv6QHWsBmJympfXaFejxi",
  "key13": "2zNmqbZkq7oNS2VP5gw4QaP6P1V8jaqqGVbWUv5KNchYsbgX1k3vYiBj23DZ9q7ggHmVtKN9Gq77d83Y2YPQ4zYi",
  "key14": "3DY7XNon9xv3zFGnhwdrcV7ehRZVkF5VZCYcG3yobgbKnr4pZtSH1pytqyxdhKQ5FbK4HGBxDTSsrLZKxVe3GnU8",
  "key15": "5F2rVpmd1MjPyyY1FENMmT5U7jjxMq147Tk52ZGufESUPAJRJitr5cgD9m6RJVK1Xd987qqChLFUBicsFLNFT8sM",
  "key16": "4AqD3F3bhkDuw2pmDGT43qNjvX8bdfEmSVSZ5wFn63xRKssdKLQNXMv5stJmRp64JPjNjHcfPvsaNtTMbTgXP4fU",
  "key17": "nV52ryeqeGk2KA6zVkCzd1erE3HFEJHuGgPTfSwoowsQkYtAAth4BTJhgdVSUYDSCiJkiSkTxrYPcqqWZncE7BD",
  "key18": "37TgNqwKxX7GZFXpuW2Q9i9cgFt9M2twmh7SaM2MKva7zYtWQMKVXVSBUjWFR6comjm569dVdC5dfa9qPUWNXPbP",
  "key19": "4YXNV1nwHHeJmnc8B9tVMufoWME276dFLX2EizhDVxDcJeHDa2gHQoMTSX9R4kkyWFKnJdNLJcxD8v9p8boF79DL",
  "key20": "5kpoyppHrBgKmYYrxXEfVTRsSGg4W4m1bzXYK1gdg4Z4B9vBBzvPYm75sg5twRN4hUtUJ9LVUy7CWUwSjMqKp7Vq",
  "key21": "4ZtX3AzsReXm5QmYVmCpYbu2zickp7fKREonFxjBCdGLKXjFe9svE2s2S8BDVrJHrY6AxkvD2vZ43BS2oQ7x55iU",
  "key22": "2UArQ9mmEHgD9NvyTf4Ev1zcePhiBCFtYEnZCVZDH3zaTRj8HqxJzKD3GNHEH6V8fWPMRPjjJoCMQYNKPxgCwSKt",
  "key23": "5sF5wtPTGxPo78hNBm1WSNKkYFHE122bXA8wrsxY9fe5pLwB13J7ADn9CnybApkPP5SDhit7mvvXEZdjA7Mva4zy",
  "key24": "2iqhrxcwv8LFQDjuamG6cAWJtCuY597w1sf7Ljb6vm6QdMX1y7mt1bYz3WEiTkviS5gZpPRhCCXKD8ywgFMH3aqt",
  "key25": "4oqRS4EyuARwC7R9PykzFrZzQB3f566quvcyNpSvqMgsdyMbrrcYw8wQ8Sbnv6rUDK899mgwrNgfNyW2kHsXDRNL",
  "key26": "zTqvcQD4cNi7DXwwxgP1bFkVVQy5oeqo6ywyK8evfTZLZudQ2UbJq9uNkWjPzt3LK1yfvEmL8b93CaChQBY36Xq",
  "key27": "2GAfU3rpAnRkuFvDgLSQubZTk1hg9cevWcJbRKXo4u1GBBWr9JutNATfqAsmUm7DEZ8WG1y8CTH6RumJ5SAgdS4R",
  "key28": "5xpEFN92wg2eFb4qpicgAeNyECsNC7DuCMHCb3CJV88pVcTrf52euc8mTcxLZo99hCATmr8fj61GhWEmcAvozmB1",
  "key29": "3gupzvBvKw4uy7jeoK8jab47RSTAvCJb5n7jcHNWaW8EhTo5z78tKjTtcEYjkRd6BoSUBoEDPyPN9zg7xT1TARRQ",
  "key30": "4XkmPofL1skpj5R93cJf4kdgNQeyL48XfFJAHzS3SHwGdGFNqx2g9HGTD1FXCPGpxKSWcEdmJ16zNnsd6oTjy4zz",
  "key31": "JRhtuFMmezcDPfZiCyXypxHGrhysKyYnLBjrTfUty4f4aZBkjstdtfEzk9L8iGkFyzPefBEFxNck6GUzB6iTdJE",
  "key32": "4WvzzZqf1biLZP1agz35aCa438Qz5jaPh7gTCeZjk86E3BuAD4Qvwj4QY4fnYaTas2so6Yhbrz3oDU4Qj3fzJn9y",
  "key33": "tHGGh8CFLyHwPq91WXWjp7un8MHhfagHkch5Xq76Q71zzqn8CEvC7Nhb4YRumXTGVf1omkhR5JPLXJekNL8xKZX",
  "key34": "kPhv3kKD7xkaE7ktDR38HbyLjPW4zPMhWE5JcR7JkfM6qfhPS91DF62MYyG8xfNVv5aibgkPfimdwT8HDKx3p14",
  "key35": "2rSNjTPGMZ35ZtzmnBibF4jY7h5ftwdw3zHbQJ6tnbs89LJCUDfsucqo8B8hjdNL7jZJYaG3c7Pigss5Z4icZKxt",
  "key36": "5nNyzXhx93mPc3bYrDg9KxUnTxw1s6JYm49aEro4zJwPJvFM8ZkSYu5npam86xkqCyoN5gUq4qQhqXmxpWeA2eYG",
  "key37": "44Jm18LsMcAmWCFVwHfyTgqQ5sj1dfYbjse2LSnfyi2erjf6VVFyQQevEUZbfYr9WqUAp6s3nUivGjR7Gmx4J6ks",
  "key38": "3ZmRAgH4VaSBLzhMBqJUX2ErDVvVALUJ4ZVHmkiX63U9YxSWxkkru92egByS2zNYWJZyVi3LMQKzxHH5Rfn88drs",
  "key39": "4YKhVSyEQYCaQXsbQofDqux6ML3dKJTAAyqoGzhtJG4icGDzHoLw9kyoaaeLAAaJTKdrMz9PZnjoqPk2uPVCAx4m",
  "key40": "5US9JjPypoS5Wof1vKqUr4PFDPzN4kEfg86P9q3hAZGjnod7bBcFHT4CHK521nRSaiSwv9eBsaQRrHHnVuViBEuZ",
  "key41": "5kv8dji4SSRyGC2HtxGMfgvLr9uiaVZBDHUSsYJwjc2eFhpVzHA1D39ZrL1BkZ2wAB6PhC1yyQawcQB6kkkST9fb",
  "key42": "3FCKf2F3vBUtWNNM3zVRSDEUe7xon2hDiTsmEMp5wmCDWmTTa8C21EToVkDJLmeDegchYxLwPxdrqY48Avy4BUQZ",
  "key43": "3265Q5iVS5yBkjUKQomnY1BGnXFx4QsVSNSQ55xPbV1ocKzmvLwkCUrAejvw6BZpkMAHQ2XFGDubVCLQiiBnnfEH",
  "key44": "2ULL7F6BxxZE49wWfbbCKJRtrPaaSXMZv9eW7rK44wqL2W6Ez1oGjZyQmsxDKoRooekqicnFKB9k1ZTz5Myemv5D",
  "key45": "5wWdfBQsTyvPghMmADgWYWmmM2sdzHCSoZoiZVGLbXzucjG74TJiGAFvvyXDbiCfSY79bTyKjLdQMEy7n5CqchRt",
  "key46": "38g8SxCC3MkkvAoXstQhonjXys6WonWesB5Na8dtzFfqXUrAqTewvFueXrmnvYY2va22Ydy5ucBoPCQp9bfNFXMe",
  "key47": "242ng3zKAdPHhsLP9ZMxdPP6nb7xFno4NtUE1Fngyy36duCDRpT5CAHrwgFsR3iAn9vgNyPGUqFsXTHPV1ScrLV3"
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

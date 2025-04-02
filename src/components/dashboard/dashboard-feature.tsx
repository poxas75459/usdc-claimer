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
    "3m24Gejnfr8Wxg9d7fi4G8sL682AbYQrnpyMwamrU97nMQ1w6XXtiXd7LDejAvbyWwo1SoGNbiNGjuk9WkNgVLHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vPoEWfBPn2u2gJ1Rh3vDBdkaGYKaxswAs3Y8ykftNsUEKGi2QeKBXWoYj43NYci3wdkwSLRTcY4mmxcNLMEAcs",
  "key1": "qFkt5ZkN8SXVjm9PLjPo6bce7531PEjyYEUJiFAH49atCgRMp15nPGdcH62ahm6xhrCkVJgKXtTHSyAqVb8ehPY",
  "key2": "27tQ8dyX2xVNNJ5kWwQb5CAnTeNhZk4SHXmBo5hPqf6v95wJKTNLazvtLTN9HHhuonbVgP6qeieYdZkZYjwDavtR",
  "key3": "2WNcb3qcSG2navvxagWAvpdEutBdz3s9CLSbMdiLH2e4HU8dbUWy4xZFXFyGpw1o8gvQVaujpYQF3HMnJpTmAhja",
  "key4": "67qWbYVKoDdt8cGVxJz9JGuV4vwvYQSN6UWVLSuUGBfEJGXeQ1qWdamPc7MaebNPMtGHgiRaMMyHgKDdcqmjHww",
  "key5": "UJdTkzt1Phe8wP5NBtYrmB9Wd9TVGuxpJenrpyh44aZFojRTAA1NXAwLdn3Q86An6goXYNpBDyvUTcnNjp4NSH9",
  "key6": "4yg86s8YHQEn6fakPvmHisoFbJK6sFqMa6V43GzitSjG9K1jBBd2K652cj9RNoxEojtkcDaHMewE2ZLVNCNVvzF9",
  "key7": "5FWmPXqEEFNLrb7e2V3L6fscBAWicTaCp1yxLbTCGpkLyQ1G4Smg8XyssxZbp1Y2KaDWF1tYEgxR4BDvzYvY5o4s",
  "key8": "4kKAqaTZ1YsZ7UkQjNgh2p8XJQHAa1GyLeaFhM5sdujxanCwKNprNdXX3QBSyqphf3S6XpUyBo5j3opkVAumin9i",
  "key9": "2Ghmee2pELPBjxMkHRnLGMV5dazg67GBHaX9CeVtV7BVJZQYLQWb3tK2MyTRA2jicWm1BhGamK2DCL5AaDqzdYyD",
  "key10": "stcMrgStsCBCYM9jQudyNKgx9NYqQoouyNz8hXFrWirNsy98SUubTQF7gJTcfX2FS9b7bZXFYH41YvPXfAeLLzm",
  "key11": "3cu2ToqiCQZJvRYRC6igEc1KM1VNwU2iFV53eKjVTcwEWGQJUVmLS1azN5R4m35wkue1nQiVWjxx5Rzj7i7BZ73y",
  "key12": "42XsyGaPoZmhEZ5a7BJge7cUmDTthE9RokFPEzoK8fir9BfrRbzKs1GrJZkFqZDsuKGWdaJvFSgMCzPRtYMMH2ft",
  "key13": "59vHqzJBATWhqYDTGph5ydiiBnXnDGVrGvZfWnCADYHi8Nz5PAjDVWawxiA2aZm8oFM76Lg7w8aethg5xUhQLmhy",
  "key14": "24EcqNVcxuBVD4Jsm3Ze64bs9J45Jr9wy4afsVYgb2t4CGUK72HCTHUkjbU7pZ9pFXPJEpMNNdG9ijiBfdxHUFGZ",
  "key15": "4idRTi7G4wjziM4P4oXR3DC7vKX5fdpKVgafmoptAyw7KSnb3oGjTS5uHUj95Ary21gb5tSfaVPpPvDYzEJaJkRE",
  "key16": "2DrFUFNzYygHQHoTc4EHyR1SKpaZ3Ny3iURxE4W2rxRDF4mgHb1CJS2NVdG52MLSvvk81Asdgi2MzYL2Ygh7DW3z",
  "key17": "35NYQkJ1SLHTZnm6cawktfQwTLQQexmB5PbRv68FdnTn5z7wQMajuyVxSiyDABtr6jwD7HB4wWAYuXgiA3uSm5WB",
  "key18": "4cFcC6zz6se1rQetvfaQkLhGiKBS71JLhqvXoM4MQAUJC891rYX8wvpqeyJjMiuiDgDLj1ubnFFbP1wjr3UGU9GA",
  "key19": "4ZMZXdjo2VqF395X6U2hAvQ1AdMHnrzMh4i7WYfpVciX4tY9MAESHY26ydcihA1Av64aK4tMTA3qy5EaFKNvBVGe",
  "key20": "67WqM4pBtptF1DzfYxqtPDCHVMCo8jzcPMcmRcC9UAwwKnkSCW5UjLVh4zs4qLYVS2YspKNVzT2JsST4APDcxG7k",
  "key21": "5riXqiYjUpja9Aw2iNRvqBM8XK3xAcpTGB1dvp7AY5PSwjDnSxqUkearj9CDt59Ed5RnRSxc7JqcWL2wGRFuiQSB",
  "key22": "2D9zsz1qMAWChB1fx3BneUjNn4PATwZa9TozvSn8WFxkqaQvNu8wacyDSh5wzA9c4tLm9fzDiSCUi5SBtQPZfB3m",
  "key23": "3ZESPE9k2PdxrNatuy2Gbfqu2s3F7NxGTDSTZrDSyX9jsvTkAczB3S9h6diqwwiat9XYDKP2Ku3Eenn4PBEnnHoP",
  "key24": "46bRi8VEwxeGJysgbg3hhu8MYKFnotstK6G6ybKtLNM2NnZeykZdTgc7exhsQtagTDL3CpJzJKzhV57VEwJ4qyKc",
  "key25": "43SxjgcsUDg7AfeD2LNoS4MbUXfsAfDMmpKZzXzjBK993Y261VcEAZo4QTqN4DUzT6MkW4Dk67yCob3E8ES7Rm6p",
  "key26": "67FdQVG9Mivma8m5jdgBWEtLEQ4FioXSYKsQvEFFcynXqe2NtcsRib9tsQinv2xLRCCwXjKpxLVUw4EX51ng33pi",
  "key27": "eLhw81tYREg8AdAsH3saHFgxwEaEdExcmxwt3Cgp7LJGMSDvafysr4WRnCmpTXs9uPEFcogDHYDwRV7CrM4Z9PZ",
  "key28": "354Rd8qVZ36Ay19WttecXi17nwHDvzFDBvdpRkTvcqp9FsepTnvzXQrxj7z9HuEQQBYpsk83drvBxoaZZ8pY7VLy",
  "key29": "64pofNrBaewJM9u8Fzm9ZYctSYhh7davzRrKeokhe5GBTR7ns9zDSTMkJVSRxQ9fJ3e84UidYMChJUuoRZHvGmtq",
  "key30": "4UafgBzbmsuiS5vkouKzSpMxD3mLmvuYLCi4Ydsnaw6x4NM7GY2iiTgzDhM1cRciZVY4dWNZz3cMVL6mDuqeAdXg",
  "key31": "3NVv5yutZY5Kw2KdG15YQyf75sAGtsuk8m2jQ32FYomHD2TLwXJgV14net4VwtATcXdaatdriiq29e3HzLVRJAqt",
  "key32": "5oP15uoJYCkiWArtokMqDGtnp2GvL8tTWsshpG3xndKMtH8wCdcMaqvEXnR3GykmZ2rMJ1EvAZ3hisxZihRGBqrw",
  "key33": "aWx1Jc1vg53zXrqCVQChL3EXdidJ9zat8byzFZjwpLwCiekr3m5rcwXeNW72s8yV6JaF7JfWX9WPrKCZvofkpdS",
  "key34": "5snVExZdStkzJvGTFTQ1jdQby8Rm5EY233wCcw3CE8iwTttLSM7VhjtxynTP7rWWY73U5y8RksJr3JRYSFumgv2",
  "key35": "Ltr6LwEa1QwPMS3jk4qthq155suy2Ydc4ezzUcyv6zsXd4FybbiunsJh2zqaRZBQD18vJ51YrxYgq9V9EiTr9TP",
  "key36": "5XmX5KaDHLr5y1g1BMmTJ98YDf7eB4GfNSdGDLE639pyXkR52M2pFhSjrg3XLJyDpERFQj4riAjjrK1MwFkT3Tvg",
  "key37": "5zoFzGU5ftQF29Ho3nGrXVHYZ7qQz6dkyesSd5aKzPtRP567fK4CzP9x37jppTGvPzYWfb6mukhXLSYgfKF3Lvu1",
  "key38": "2UsNAUNQ5EMRLmvwUaZdFvdZpa9UvKFRh4LGbTPLKaGrfCw7CX5ot8GZRPu9EJ3Y8BBtEXFGvQ4LKiGCc9WchgeP",
  "key39": "YYpCWYgi8FzvdEMHe1Rh7tKh9wbWkBXRPBkBqhg6Bwn29bDkQxLQgVgHsRxZ66w9PUHh4LK5kmYtKg534wF6YXj"
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

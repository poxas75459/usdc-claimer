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
    "28SM5WxuFCor7D5qDUghARZhUTbhx26r2yFaj4Yn5wBLVAxeSt982zE6FQAAX2XBdzZe71B9YZVu3fEQ6bYqY1BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45LZZUPaZZa25QjVgwZwWBJaYnVnMQiAEm5yjUdKYwvSftjRUqFbfCgAFT2tqsCEogK1DLxzt1R3Z3q1R9upJ6KM",
  "key1": "bTDzJyau41fwhhYq5XZswWLDjNby94XeaSpgvkxHGWDbtoD65PVkLNWuWtxs4P9Q9iFfn3g2etFDWteRmiMtJBV",
  "key2": "1U91G25fZtRn6PecDpuRv2v5ygpLNjJviK6Ltt2WDacxdteB2m6UqetpF9jymR1prKJpnodtvDZX5FakZV1FVvB",
  "key3": "4kQBAFmUF8o4yNvLz6aR9jMg6b3PRQN7kFfAz3zwiQZT4kG9bS7XMSPoKwLZWJBSMkkuX5XA4Zrbzd5b8S3XgaXm",
  "key4": "2VGgWDhXkfmfwxPBkZZyGmfKSyBCBghTRcPBmYnqMF3o4btQKPa9feB4XG37ATwcp62qBnfrC2xiFZ8JPHLtRiUb",
  "key5": "AoRHNaVftTH4XPKBUNmDEs3PJwA33wiww9t8WgoB8ifkF1P8aaN5UtwippUpZk3P92bDMw7T6hJsGyTQxxwNzFr",
  "key6": "2EaTLJbPtwfCWciidS4L2Gz7v5PT1eSJ28xspibtMMoCyMuEEvGUTr2PnzYBTvYAsTHB19TkSpPMxpPrW4KBbTo1",
  "key7": "4Xrxof2gxK6ad5rzS7zrPCPNGp6r1h83HpREzRuQjgwfgUYdWUhYittG2XntAZpyKwxaydepmmYMyCY2vP9SEYd4",
  "key8": "49HHGkduXL87vg5QRd7JFUAvptaULvtigwBhPWggKVgMiijgMUHuUPsUK9xxUkR811YjJjqvSw9SRAG9qGTfe1No",
  "key9": "5GP65m8U55aw2sJABBaEULWqqPZbWCK2bQiXfxnPmkzWM2KCCVNVHvcTN8ugpmBhc9WELD6yqggB8CyfRzcgtVb",
  "key10": "4MTLWUwPvrEy4QwD8swqvFc4T8bmdGVFPy193wQbkPurQhDQcJTpFYSY17CVLqHd64az1bxtoS9dy2tT1NTWjvhy",
  "key11": "3vejvS2LouCKRbXYu8v5VpZqdB7tcXTB3AQipx4GBuEsDvcaWp2nYbiG37MANAzJ39oDTgyhE9VLwnMvBsjNsxj8",
  "key12": "E8KwT23H5NN7wqUKp98TmhYW8YKMHQkKCs9CABq7VYifH1JWRmWG2w2y3PuDeLHgJqKLJraBmFKpH6ggkQFwMZh",
  "key13": "2bjKNeCStYEnudsxweB8PjH4WKZt1S7M97yhrhDuA1LED3iU64BzBxRbUZ86dueo8LUu6tbif9cQR7NaWDkgNFr9",
  "key14": "2Tss8GUitT87JFnd9m8VNiEkvqyXRWRt5wb1GFZfjmtpsm5XYd5cu4B5phQLCbDECt7e16TTB8tQaqFrfTqfgC2P",
  "key15": "5AfTELUode72f8BU5y6czxwCAFDAWqcAyHvL7objTHctA1QATCH6DMx5Qt3qMhni1CLJGqCmueWgF8MiHifHKPhc",
  "key16": "3zS4ygdyim8uv5DjWbxKEdNnVxeJ6UisqBGfSxhmhEkwRyeWEQExezyWCAWmeGsQZmpw2d5GqBLwFu3WjYaEpZE6",
  "key17": "5Fpopstiz87VE2bCbhjhq8E368FaJi35uwQkc3S7j79Nj8x6w5vJPn2QK3L86ntPdJsFc1UMGAgXyPNxYMXKrrBi",
  "key18": "67hrsBhFovrnaDQV3YHrCejs3NtQuF2wd6AZqCq3o73nzwmQodyWBHp1Nh4xD1WD9dW1ZEk7R1LHk795X6s5rwyS",
  "key19": "4JgJQ94t7nEgMH8rsGkHpPeAFTxcviP9cnMvAautkYQaZ38CtBj2GBSZjmU4JRJyCGnS3Nx9Tc8CoPqmn7tGm9Lj",
  "key20": "3bTcuG8BxaJcoK25ZBWeSPKdMsXwFgxtsSLoHVMiAJBnaHSMCvvDFfcEwntoAGXJLbZPshLNsqKGEMyqMstEdLYo",
  "key21": "52y5cGnxz31sx5KKhtKCJZ7Z2p2CABshW1S42imQfZUhRoftNM6j1NizuaGUTMe8V7g36xzrzy2mFan2BdBWVt6o",
  "key22": "56gwQzfC7TPzjQT89EQLb4cKFiwkdVEYMyUWh2vRFVtBCtVdrW4bjbfMxwiTXmowEvMpNJEzy2aGD2guoQYyJHhF",
  "key23": "2WWYAkfrkpkTrJqERh5r7vi6wXW4FcreRMsB1n81TeRjCXnr83kbU2uKWfuRZZqYa5hqC3RkLjxuhSQQyLvZNzg3",
  "key24": "48pR4CYQGHLTVnB6GRMeGZ2VJ4wFwxj9CRATrQKXS4zsoPqETq7UraazMyaYhC7rTHBdZzGRuNrLURoNen31jBw2",
  "key25": "4G4AijfbtQiVGbYDADLTE3VneaDatVU3WT8wMYMFmypqr8cj4nBCR4BeurKUyTPVPN5ZdZxzVAUyGf2q8f4DTXSc",
  "key26": "3sMFm2BkiE4bNVWV5t5E53n46w1F4TYsKAqjn7DUSh5HDpLRQTcBoac4ZrvGaTfG35Vd46zYGpwv99LM2hLDZKX4",
  "key27": "2eDxUEpnhAg4gLQ4bAS4zpzXba9AGv8eCxVy3gxeE84T5pPrFN3v62bZKioWcQE4R4RLtq9rwi37qBccPA3XgjmU",
  "key28": "4559EhAXRVXcQBhBdqRxkuhakGJM5AeiViuSzrYQPanz2qhc2pDzAnt8k1Z3nvPV3ET8K6iktwQr18af3W9wmrc5",
  "key29": "4ivtuG6RnVs4byPGjPnSVEkXT8SNtCera9TEBNHRhpHYGdq1moN9KZbDPYArxhgM43WKhjoB8jrPeP7SPtFazLM9",
  "key30": "42AuEVkkebAuQ9sz64uh4A5XzUE2GPnFr15qZciQJcDtgKczKXZytRphuRYwrZfPgrQULJEmZANfc11x4qqZTVMn",
  "key31": "4U37MPYnStJFbfRdqwbqQQAPapYDQXCSSFjmMQdip1BHb9Ws8Mg7RcipswD6vQoJ9ZTbDozggN9ayPSQEJV26b2f",
  "key32": "5aKm2NPgVCaZiUERQz36qaFP9VuzUPwrJTBCWtaqV8y1zjtDcXjnd48gVC5JcdJLHzkEEnt51PSnGZfzqoUsXCU6",
  "key33": "qgm8R8qZ6B5CCpE2CgR6WruQtD3UNMDSNGXzckiYphs6A4kDTckPVLv1YP5AgkM8fwMUnqaYdJ6scDEaPWX5ywK",
  "key34": "4ouskwnDZhVrVKYz8iWZ4nHwuQ9BM5Atb1ATnME4PYF8ctC7d1aTWboEB4aEfoQzQcQcBkPpjSt38gK1vBkm2Nrx",
  "key35": "EnH55nHdG1pVAtRj1tjNQcP4yeaS5jnTHuvA5Gaodtzqe9YoBoMeWFP18V5bAvcVfHxnt6adyLErMSPCUd7PFgu",
  "key36": "eGtBswpoNpFC8myE1cTzrVK9wibEWcDxHRb4EgJBJGkXu9po4K9p1STBPwVTSQWHnvifjiRc8idRUD9G55jEULW",
  "key37": "5Wnjon5yGZJjS6EGKnoyXTjtfPQXXxJcZKxobDVfEsCfgPJBiwnC8Q5ZWigEFt51Ff6p6J4Kbfeg9Mr5HK8AtSzd",
  "key38": "58Kq7EbgfPTYK6e8G9Vu4DVL2Lsg57xhQ8E1wt9R8GVZzWmgRycPscWAbFP8h439MKaS81Fu1VEK3thpfZ4EYFY2",
  "key39": "7iuwEfSgSmGZiZsY3rPLCfY4QuQePPpAc5dKLxH2gLcfFzVRtd4oK9omiQgst7HZXMQneKyod6GrbJkEKeSYVmf",
  "key40": "4ebVK375o6KpdyuJ4V5kTrfCcPWZMaCbJg7BkbzvLPVhxojQ83M8hsSqkF9Adv9CjUxtvucbNFVbFLbW2qJUi2e9",
  "key41": "3K91sV56nF7CmqCN1tvGgZYBoiNojroKd7a2g7qLKFmBkdoTNjmZgXikGPtH2GyyhKXon4zn4nz2EbMbGbyBKMaJ",
  "key42": "64o22LZPqwjFPK92QZ67WRJKYGjSPN91TygSqVJLLD9vRkZqZfJzjB4LkfMZeNxgxfrmGcKDtTQRGdZ4dhirnKuE",
  "key43": "4FYfgmogstMmBnADYsh3nHjVz8wUcFLYdqbuCUfptSPkVEp394L7zvoBGdkhsSfJsBJ5zWch75jf3rsz8SMSGtw7",
  "key44": "3TwoMYi2HD8FcaGF7skgaCCKfiao7yXfn3b4hrgbiP2BAV2qaxQts5bY9tkUMHKp5KUfkLXsgSkPaVDL48EMZgY7"
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

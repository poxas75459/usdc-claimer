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
    "2QimXmgA89qm4rnLfPJGFshxs8b1jGs2qD2Gi8NW6KHw4wNXR8PkLoDfYPuQZXLwzEEj4CWMyCiJRvmqUMsWkcmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKSf9CyY1bpAYLX127iKJ5oY9W8rvCSGnpcQwgjz2KN4q9DzfHJfoDRZcVRzHMM922SpdqE2gvwzJtLzF566APy",
  "key1": "2DiVfWr9eVbV6AG25GUG1bu9V3fejLmZL7ZzLva3qDpdcHVWPwDwRBbcMJWxvfGSpB2Kw1d1y8vAs6ZJEV6Nsu2n",
  "key2": "W9nrUz4uT2s74tynEYcV2unWE3d1AAJLUgstejmdaYdSMtNh8JF3JkzYRzcGGNiXmGTvMwxkepevEKaiPeRTiUP",
  "key3": "4ioNNcEgyUZfxPJk2SHBXYHdCJeVJedh6CWyx3xqDDpCXDpogtXtaACKTqFXSNjnaFkXAMY2YayNxQEingdcsBSz",
  "key4": "251P2NgL2bPnSBgGGwTqzHqsB7VwYEu4QnN9bNMEiHJQJCJbRErU3Rn3ihoB2nSKtL8vj4N8Cvy2yNBALin8NLfk",
  "key5": "4AkTyjZnL1VFeT6R4RxaRejWKaxvidEUn2aqEwBHRs4d5xqGjcdbwS858T1ZXX3iEfDS7F3Gv82aWzd8KQf4y3iM",
  "key6": "2fnAwPYggB3EACZYwQcb7GtkSSL2oZk8TWe5pZ5mx2q8nUhMrfNZs922VD9XTrT6WVoeRNG1ywTbgpWSt2XDFpqy",
  "key7": "3XhToUntYmqxqXjDQBscqZUa7gqtBEmuD6991UEKiN1M5v8SFcPo2cYftJaB3VKkpDpvJ7i5wxrnggtUDzAdBC4k",
  "key8": "42tZK8RBzBEcdtFX2AzsfTz5otE3kNLWC6j4p1GEcAW2Tq6HVuS5Amv1bfQM2gR8pkczqf82cttCqj2jv6x6hByM",
  "key9": "4hSE9FVwLpusRqWvzaTdadhdtiq2RLAFE6x5zqEK3VGBbFGVo1sakShpU8ZLs29duCTAKFkFy7tqy3SS6s849ypT",
  "key10": "3o5vCuHBXXWPttMjT1TeEEGuTbZY6eppjLoToJFCfKvsZVyg3DryJcVTimK7W3nspuQc1TRCfJZ7YJQTEBYko1RQ",
  "key11": "4bPsgR5e8BotnUfPRkLGQGXAxfu94SC4SXYr3z8bwXGGWEJgCMqcuVJqaRTfr2uejiNebK3Mpn25NA4fozdYLimL",
  "key12": "2tHy4GEzYjs8WGxUsTQxSXyCW3zvB4gLyEJWb8TgZhNAGjCxkFLGVUyTKfKezVA3cbqtp3miQ4ZnxtB9hhkJ2Bae",
  "key13": "5DWtvnKocodUcUQNqKxiCoo1GjFZ3HDH8JcpcvgN5ZYNqwN3qivxbtxnHxFr9BcZjZjYYQAzCNuF2ej4qhbEGZmS",
  "key14": "2Q5NNxBT46i2xGB9JWyL885n9WHw8JyeuvG9yTAVTdHkaV3sT5gJ6uWPhirAXy4DWd55NP5jn6CtQXxdudrp6DZT",
  "key15": "51jAyZdaPFckmgPdWSSbqp5FQj1XzoT8NJ7kRuehQ1Cv2FXgLg3fdcJ6EnFMagmHHFXTdaE1AvmRZxCGsnFxjMdW",
  "key16": "3yhreZtRxfdpR4MJVLpAsngzkTSwcTTVYzUQRKzqhNYQxULFbgwRgh6u3kZ1hDrHZqYWMMmcdUbyXbbQnqvhqE6i",
  "key17": "2oZVxjRGquhasmbun1jDgKcaRkG5AMULCksnHR1agvb6A1PZBeB8TUpKcHCody3qq9EXcxDx9bjAMqfohJHphXPs",
  "key18": "3Mq6rSBosc8UJd6XZ3DoxYJLqCNqiav9X1YsC3aYdXgujvfS14crMjxEvwYPNYMu4mzmiBJgzMyofn5H5wrrr5Qf",
  "key19": "3N7dq5Bc4ESDjoKUfFd1YQitpBzFXYzHNgbfzFa2PfyMfTm8ByCGiDSMva8tEprerYKpJ4CZo56ToBc2e415XUiM",
  "key20": "26erLfTF7ccFFhXvzs9GZawSruKMQWQqagz2NHUzgPtCkFxKCFj44FkYwu9RzMmCyv8qvQcrUDFty5BXAJbumdb9",
  "key21": "4aE3JY6kZraMJ1BCMjWmHR734pmdNBC66WxvxM6VLzXqxc9JWW1LWPZzMzUCn4HFrL97byCqocYQVHroVhGCiMLf",
  "key22": "3QzYeWUAtJq4CXzrT8CPrR6jH2GEouoR6YgXu2DNRQA1gdFjx58w31eWCSWjwiLPSexL386LxDh2y5EZpRx4g4EA",
  "key23": "znioxhLbZuXqZJExKDVYviceiuE3JW3qNmiHjEPhe5bWTEtai1x6XfRdDgJpMaH1UsUa8rLVHprVtBgjA1AJAGT",
  "key24": "53eWtwKLq2QqPKBhT8dNJyMnw7o7shfQNWrc3ebc6DtQ4ojq4M68FpxRDaouMG4XoCqa19ZTMgsngcSxJzCNoqZ7",
  "key25": "4TFaz9NQQvpeH91xe47WcTK9jDvsccH4sVDnitVXQPEmtNLdjhfqsELGXk6sz3YYKe8NQCQGPmX85cUM35YWdzM",
  "key26": "LJy5NPHj8XiTseiDoLQDhBvpfQsB1tLw5bykpiqiGkSwyNFxkTy7cSEcVdH3BmPUg4ShyXFm8g7nir3peHYtLC1",
  "key27": "4Dz7FLXp6isUgFzvzdryDKsVmarbZG8HTW33fieowwnzWyWK7ccjSvDqppZ4emcepZLdFwoEjxhX9TPeqYb5Py2t",
  "key28": "4YAtrqcnyWR1n3F1h1d1bU2uRW4zELD8H9b1HFMSwKSFDbsQ6Sthcv4HRG6xMKVHVPqqDB7BKvcAWNHEpJSSgRmK",
  "key29": "9NBJ7qC3Zy3BuzT3y6N1JwQCG487PYdsmxHF1TX43qJgWcKBtQDTYivpZbHtdRmKZETPefDYLyFfTDvwvXbjA2G",
  "key30": "2Yi5bWDAT3qheb928yhdGj3Lgq6EEXHmyHRMUhGESRvCbknbzgHEEoR1cQX4HGUEHQptryByZdLdiQywAMkNkFJx",
  "key31": "LV6kRFrdQWcyRgfaw4FyHH5Q9bfzWyJpUqyVFq36VVTnLx8V9kg1ZhmfGYiFjVcAfmCSRMqwsvqJrbEHnGzZ9R5",
  "key32": "5gnLiJtJGsFJNkFc87C6vkR4qLc2dzJUfphrR7gxajAF3d1mEA6vTUEn5MaNkgjb4zBpeYyG1TGrWB9CEz23FH6c",
  "key33": "477nBKCb8DUQdsUvmV8eaBe3d3KeCar5Ads6stjAgLsVBN5YSjDUo2vSYnzU7XyzMkP2Q3k3JLHuwxA2ZK3i6JVk",
  "key34": "5gjViuzuyjSpEqK3uhhW3K4fm3e9HFg2ASq73oFDWVVh5FFNf9bLKncP9bgtHYgz6HRiRrKTZKQQ76jDrVREb57u",
  "key35": "34HFtssNrM3xGkVLpVwbwksjqQbXFnVZkJRWhA2A5ksMCH6uJ55XWw6LA3JoHfpGC6vffAYE12uUgtg17arFCaeP",
  "key36": "61vhaJw7Kh7jYK2KH7HK1cJ83j4vBcoLAsgzUZ4ozwZnPgo8s9KVzpzehsU2zDmeqWhoKv93uBhqk97WZVADaaC",
  "key37": "SM5rm3RRT3wfboDnHMg41FsxMHhvdQSAV7VA4B7SyyrmAMVS6xsaPc2y5qt8pxhTjntnwZ6RfH18iaj94dFjTgM",
  "key38": "3ffpEq4b4jHVYNEiKnwyVqT3dDZnMuJbanNvoHeyKhR3GCACagcHpqKjaGshTJ4PoHPYGbEs6jqtzFZXSRh88isM",
  "key39": "559amgt6b13ngH9GMZHHp8EtDfnk1pFmxojQBf5YMt1pPptticyLBQfiNsvw9jdCkYNsXDPJz7T5yRJDsV9GHYJU",
  "key40": "4kvoeyYdB56bHstCEqvLiorLdfpxipWVwjwU4y1ChcV3S9biKdefLbZRHYTVgxZTduNVBUb3YWeJKSUaX4kNbGmH",
  "key41": "2cqAfvBe7faQxrUeDc41YfjGLFLJTir1NzWC9xJVMk55Qv79HMtfmJCgrSAqGLNjkRxMZnh1BuQ71vWtoyUiQTHv",
  "key42": "53REvZB1gcM2JzXyNbmfco5XaTgVRzvvNmrSs3PZVtW1UZV3Ujobx15qsMKYCEtDU8HfPJGXjJqRvxqogTjuHTTA",
  "key43": "43Nk6VeAuBLPhZ47hqrpaok56TXjLFJp8a2xn6izmxMzpBSAcZ17fDgXwefPStEZ24wBo46thf21y82PVY59zsWg",
  "key44": "RoLwWwzDKuLx3bhvzqXw9zXMKRVKFwy1gCQBTZ9v5JacVGFWRvqXFJHJzpaRXvDNTS3BtN6b42AaHUvnmy4c75s",
  "key45": "5p74yUjvGPhgmTaV6SbSezyUbFHohVswn2uJcCpVtiqYg4L1V9zF7oppqEcLvFktjfSZH5xGJtx788kYoDhcA7dq",
  "key46": "2AwzWCdKyZjMceoEN2ffCsuqpPozmY6j3GfaYzi7PXKDYTNaWMina87mA25aFhz6ixzXkC5rngpfJatcLGN7ZpQt",
  "key47": "5znH2NHo66MhwinEx945UipNcBDkenNGazSbYkja84ejiUprwndjEJxYoXLyzpxZwvNEuqKtmMLKRQ7NUpb65Ybn",
  "key48": "3NHed59BKtuekWL3U56zUDZtw1UyTY5ovuhkBh7ydjHTzgSHg75Kn6c3xSkeDGiFC8Da2cV5ef5DZsToqCReWrJ9",
  "key49": "2JhD8aEcSeZejPnPTsNHf6JumnqF24rEj5YpSCyLUJExAJmA2v5dhsECVtX4APEFEq4HFjk98c6pK9j5Wayn7sSy"
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

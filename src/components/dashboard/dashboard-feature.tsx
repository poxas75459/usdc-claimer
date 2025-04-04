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
    "3ZFSL813eKLVFv4AQZERfKr3B4bzv8Emobrxn7tYDD46Mg7z4QRzeX5RXV6A4kXMNY3f316VfjTMVa5z9fYyyU3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xco28mo4h8LpJ7RoPtzf4FTCz7vGTvV9SHysRUaR7Gp9B3yLVQgrecrBwj79ni1BH2EFPzKWD5tqQkXeTj7dNsF",
  "key1": "2Z9TprkGhoL9SEjYaieyQHQnCe2nfokk7KhLLFVK63rozxx14LaywaMiB7x8cLCPAefY97W1rayqazRxRdnK9GEp",
  "key2": "48u9JF1VTuJT5xD2rdwxYrRMxZ2PYdPJHbNUAFQxxzaKmp3GhL6vfV8UrWnSd58VBojRTQJMHMAp1oNLLbVj2Fkh",
  "key3": "2f7YbbVKi7yCyzr2QDG1FxRWe71ejhBf33ogxqZMWYJjKUCixPyUuQx9sQGMzXZGd4Q4zy4HGxvf4DK6C8CAcnMb",
  "key4": "5iK7Y2MXKVrNfVoTcipQskQdkEN1PuY968J7wTXHvqXHL2ShqBGD7cXJwW5kv9MPk3kmj8WPyzJzGnJ9ELA6iddS",
  "key5": "5dTFwW9iBB8PLgCzak2npwLGKTopMswvSLBzeQZx8GNbLX6gX7UL8FZxbiHSKpNUGzgZFCLEcdANL3HnLDEGmpNr",
  "key6": "5buTNeKZw5YkiTAcAR2kidSBbTkvZyaZDmRitvLnJeKMro25KepY9kMyVGkn8fWiktorSkCHpZ9bvB3DvfDE3Dx4",
  "key7": "4sQJ15HRkqwFG1Ep1tPuT5eFnoF1D1W6jJHP5qHrFH8PRLg53R5Mmry2EikGSQ3nLTjby4DyzVP2LxfPzDfwgU4g",
  "key8": "3G655SfvYfEuMETzjz4VanjWcusDfPgoJKf11HjDjqRjYdEsfjCejubGie3qYp4jsoHbfWiHzyS2kckPSukRTr3k",
  "key9": "5X2BkPxADP8Y6S1Rout6rdpzDvawHdkBJLxTwe1u3dJPCRsCtmWDZx3GvjS3ByoY4WZ2Yjya7rveQCUup2qeiY6D",
  "key10": "bHJaXegDNgFmC4wji56SHfB9LftSDBDg1caDxy3ijVhmpj59EefZ5SMMdx4NSNoFoXSaFK9t79VccbU83QVhznA",
  "key11": "yq8EXKRppKJsArvmsZaDU5t5nWUMGop5p9eJf8xDr3x3pmwYGqKTvNstMhUvjyAxSpjGo9Q9ysuT7GkPMtreLS1",
  "key12": "497FRquwXomS74VXCzf6SZVTvXMtFr1iWPySdTSBoptSDTBKH1AQ6iYifPvCwjgCjuF6ycdDPbxfjr5BfUc2StCN",
  "key13": "4kcGrEvD16xSut5SeGrf7jzdBm1eDn4JzXzuzuTJ8MW9QzXnSPLKc9rkDBhSuCGp6KypT6ueZSrG3ZZsSUSQgRTE",
  "key14": "61396kFz6LptGATmLH4PX1A6GmMGBpqvboW29KaV6Cp6SybunRKrhN6GQ1BavMFaddnL8kiixZojnTBYUy7ASyYb",
  "key15": "42WPEj2X5d45cQ5kDS5GDshQwQug3CtkCv3cVdpaVK2JKuP5oEY1usKq3YDh2YatKppPzmtdTBKRSwK39upPPyA8",
  "key16": "2TZmh5FzdyHTLR5D28DDyWE3ek9DmAUBU2MD4RY3QJfg7EuoWVJ9dzUoN8SetsjcV6qykuQAZCZVwg3UC9qipm3v",
  "key17": "39GBPesw6toySwtr7yXdAZmzjEpE64WiVhw85BEUfb9pi9U2Adfgz4ccot2Egcmi99JcYxMxpTjjeBLYN8iXz679",
  "key18": "2NZUWiexj5iNTWFM3AqySmSxonviUyVwgGz34oLvtfhPWiZUi88JwJf1tfnJYEsvtQJZjag6r7Rw8JNzLqQWX1aU",
  "key19": "3Gf4B6pqWa9C7VB8hBikNA891GfsSnVt1pWiXXPyadeUvDCp3aVA8kYQmbeysFwf9mFPZ6yZEcfo9NemNdEMyQAc",
  "key20": "2ntCwJG134Mkei7KbnSKbzMfVkHxVJ6GzFVdTLgUP6gpKRENTUyLyeyA3W11dMgmZ3zktQDdK2Q9Gjq7czcc6sW3",
  "key21": "cgLBh4TAzwddeKqir73jKZFv5HufdGQu7UqyQop6ftoFDDDxdWnnCEdc2J4uDr3392CNiZYtuFSB8AdSeVsFFxQ",
  "key22": "2eddPJGrSiGgr8BYC3mJVBQAR5AJynmmXPpPSMsN1sYdrHnR2jwSP4h7J8UD8hi3dGsmREBnzmszdBu6bKDqyxZF",
  "key23": "3tdgo7LtARuHCKcMJkPSLZsH3uj36rfN6eyMehxkpBeUZQ5RMUiMusY6T9Bs97b9nHhPzfJVkKDHQ2UH7DdKGQbJ",
  "key24": "3joZQgk2zeaAXcsa6VuKHeC3FVSfGWRUXpQBhmAVjtoTVmy5ZBfqJh1nkpoJjHN3MAr5VrcrKxSEms9rpDudCg2R",
  "key25": "2dC9HAS1a6tVcwvsXuNbVWfc177Gk5MNXib4u1oXsXXckptprufmLfRmaBG45R9n8P72ckA9QXsJ11k2WNtxkVJt",
  "key26": "2tHcicJsXQ6o83vqkqQjnaqZs4gz8dDK6zqdSoTth2DBLmG7yXxQ6qB8goDuUaDQbt2ey22iiYQTksRdiCsLMfyS",
  "key27": "JbynpRACBdqU8nG5qH6QXRimHEMuvGyCrCqfopsP6bBAVSbbegWQUKDH9yWzCbkZDAm8mZYcEeAUXpmBQAiA7PK",
  "key28": "2hoEXeQmihXrpSv5xCwrb2TFoxVbjUsrQtQECNCZUstmFrMmPUsM4MGnu4BUsU6Bd3MJzkDTDkZcb9qEnaB1ttAd",
  "key29": "49i9s6dGff4L3wyLHuifdVRJf8JPdQYNMMRoUHE4QDf6EhQdCNKepBxQNrEqWd6izVnPDDQutEi2TbV9oUxMVQuY",
  "key30": "43mgojurpDe3Lzk6pqtTivDTrY6ZmSG18qLpyEiBZAuu9Bs4bnmGZpabf7dQo9GZEvk8Udd5WbYjzPwunMaDAhvA",
  "key31": "RAU31BtUR4prSqNp6YtRevjfr3ba2CQko6iCFinJyqYBKcrknhNa1weXz4Px41dHNdVAxRY9QgCW6JsVj9Q6KKy",
  "key32": "3ddgpFC1jXopSsenLNVgPSnKfscV2rnCFkb5XsWV6m6oWWM53aMKZ2oK1PEaJb7QB4WzgnZGVHbfiv7hzkP97qXy",
  "key33": "2KkCjgP7StahCgzBok1taSnJt7DbdUr6Tw9RUsu2xFWZ8cQCuX4bTaDcyBfTftqWUPMtfR3vPpVhWJ88q5X796eB",
  "key34": "5LKhmNdXLxa5owd9EnrnM7SDVJBihmWnFVmrAkPvdfFRsB61yHn4hkdtzgdz4H1NQfNrWYgbKJDYn5GoYM5NyeqB",
  "key35": "2gCKVCof9ibCmuX6ZXdGAY2MAfJaGFzmKsMw9z69MnBCzoNXkE1hsdetn9xLdKupeTTBSDz35FGLJc8w4FiLmH6g",
  "key36": "3pugJYqs6WRjRQMhm6DK2XSXHbDnc2Sk1qUK5Wz8YkTUjTySYtqrGNj86fTJEeRzhzFPKHgHHe7bxeYrTCGgtCnE",
  "key37": "3jkdRqHU3YzZJgJibZECbkGkLznyua2pQgCGzuaxWztzNgRSby5cKQRN6GapnvvSoJR9cogpAKEPxNvaBuLxU1V6",
  "key38": "EyMZEdaEyWN1Lf1kADGWMWALg1Q9W4aj1B23A551CNZ3DngJFg2EZ1gJ9Cwm6Nddtmpji8iFRa5Ze4dnbkBQNYg",
  "key39": "2jRvB3bk6XurapR837HSCehHfQQ6NZtz2uy6zSRGY8sM8snyph1E8oTKbCg5PYFqUjt54e37EHZKpgYpnF81vpoU",
  "key40": "5383PzPHYFzEU9HodPERMzHUktEYzadFU6AvdVnNDjPjAJHsAiyupvor7L8wPfJodHdGmpm442g8r6iKeYBD1WKC",
  "key41": "5rdCe5uWQJiUjC2bAS9vvGCjD4txmU1fnv9br5nZyC7Si2zVboL5tfbTjB2Mre5G68YdCuXRMp6decstazyQaJ79",
  "key42": "4wyN1WapReo3QRZreiKWZ2bp21eC36G4fSw4ujAE6fvEQzHuWd4AJqzp6iwvyaSB4KCQecnGyRFbVdRjhte47EJ8",
  "key43": "s4dqY6c46iZ6aWkcs3e4ULb3v13HBV6zTao2LzNAP5KpAEeY2Mcgcij19L7imVXiJoNwH781npzBghz2Qnjmx7i",
  "key44": "4yKuoaL2EKQzjRCGPQ7vRk8Vxj1woKvKAxCGb4ww4ps5mkW5wMtJJioGLK9yJvvUoCNJumH6zr38x4JjrxGAwSDZ",
  "key45": "2dzq9wNwYhySBcgwCdFNWEaRWedRCEEcuM5r82UMf4B7BdEAyzYd2NTsrqVsF1USgmyHkxi8EtcJ6p75L8eLwbN4"
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

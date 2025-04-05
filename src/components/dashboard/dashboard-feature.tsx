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
    "yrrn1niyTd6zRHqZPcUcGKteZwcgCMGtiAKzvqCQjr8D7sbomrQPiuWZyqkFR8dBbF4gCjtbvfPZ7PpLfJHMLEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMwMKsKaUawrFAi5qkjCsctiVu2vjSSByfMSywHwxxo9QPBG59tm8AyC2PxRrZKbpZNQqkfCkuLyTwz5x9g9H7H",
  "key1": "3JjsvHJsBY9NWcHkPxNmhQ9D7tm2xML8S24fN6icDRdy2XrQWtvauYbYbQAfxAmma4UR36z1PMxBkgUrpzV9MkJL",
  "key2": "63UXMSSPxMTgr6W2Umnn94xTcNcKBtQt5t2UhL5TJaRSLRJDGKAJfnw4mhoEagawDBoPKo6bVwMUnLLBW1doetQ2",
  "key3": "48uZziAYkiLfi7F9Zg3qt6Yvv9qDxznok8Tt2ts3bvdmSSXoRCvjWjkkhTgcnHMVUjWPjiq8juUyGM4gf95PRaMb",
  "key4": "5hFiQYu387JJABySzbkxpUjdgUMcMvTsZBhyxb6SFi4u4Neb8KzkAXS7QB5hdk6jfk4ftcFt4S9gPZdoxW9Wv8xd",
  "key5": "49vACKeXdNK7DdFBhESqbG9LXQSnWzAit9ehCHaappq9JShxq5HcbATpt5e7XtaFy8i3iG6BYeHw3k3hB9kpToBL",
  "key6": "4HkeSj1jq59UB6JG9xoXaXiPmx4gqW4bCRXZb5npeAUTiZqrwwAbjzMgiQkaTV3TUhfRns5NFm6s19yhghhTkk8H",
  "key7": "2Q5ZsBX3NDtJ1j33ckt3rLEoTw6iAdW5h6JaRk7ca5Q2YJoE4Z9apabt9gvxbxj9afqu19gd42gxYy4c9m1eqtU3",
  "key8": "4kSRt4Eoe61MEPLU6QPpnGrb7kfAU3M4WzS1wu74kPvfqzTyywzX1eUhyEKBZaLLJcvg5duJt19qgrxC2CzDuJuA",
  "key9": "1mVm2s3X4vwqiJwD4q1dcrmyv6VkQGutZ9j69DNYBqmnhEJfetLDVMFzKRNuGQdAahGFJJEsrXbyKkGcESJ7LWr",
  "key10": "cCDMfUhEU8UvUTfMLwp91YWVFcZWrEzBU3287mCbEYtSr4KzGxPWagejDxxKDDDEP6TfvXg9KuydQ3SNHoriVF8",
  "key11": "2Wpg2am1YXfyC1KVGVZXywbPFwGqzvH9wCqw8gyQ3QMFevfSRAn1UyEDNgyN2qYas8T2TDs4mRdnHK3Q7pkb9jvs",
  "key12": "28V8pybVfBEjzJqaYDpY5pfRjAMqciCKEeECx46wcCMrBhpYs39yghMqtDpiS2BqkzATQD28xii28ZPy5m5ueN9u",
  "key13": "2Ap3o9NheHaX1kt9NKv4jFW98Bb5qxmSSbG3JAGUyZrX1CeHnq1E8aMLQJ29bKMVMd3Pst9LJfUr2WitRdfQJBmL",
  "key14": "3JVpWjerGFnk6aoNaESrbUD19ujmtTVJYgm82Na3MAo6fcWfw8NV7a7amTV7ZGV3XiXfd6uhC3rjYHECK1SdYAJH",
  "key15": "3kDz3SQPwPC1jS4RnyYZosfL5ASbtkxmqvBjdZP8stURijebyCzk8cEZfNbQv2mKw7cxMnixGi29JntpZE7Li8dJ",
  "key16": "2qS7TowTRd9ZUEPoxkiTDuEPxuGMKvJy85dgj2M1WYgqCX4A7MPePmfroVtdg6Ryj9mk9sbzsGtE8pseaCPynH5L",
  "key17": "32PaAF2yqXATMvTQ9qsRkszGxwHeZsP4bRepvALSxcvUgCBuYsqN8bhLRwdDL9SaGL69FxYguWdhJqb2iNR3jViU",
  "key18": "5tDgWCeRuy3dinNma3Qk9sHnMv1PakFMU9TiCQZmHhFN6dn2K23jYNHkvGJYU91MDvDbPToUbWicBCwN67eGpMdU",
  "key19": "5aKHrC6rowDAuGHcnKZM1kzdUXrRtToh8d1zomPiMpuVS4DKhij9zHXCkwgDa86tvGy8rVmCRq5r2eBRza7ViWNS",
  "key20": "59JPgjUPFexytu8zWfWgDmqbFBfV68sYcYMmcMY5em27naR8TNYUG9zg89bRSZxzvVYbHksVugevfQbGa4S7UvmS",
  "key21": "3nKnQwQ4si93NQ5jXq15wf48jDRZyeovnQ2FniYqSdC48xQGnTzeGAEvvmnduh3rX97poT1wyZXA7We8Q6kA7uYT",
  "key22": "5HtBRgGrTcneh2sY5NDwJoSeKvDSsaMzhS1S5ewHuoXBQksGWNXa1ng3R23uKLNEF9So19X6XHKJ59pEyKKwsQwT",
  "key23": "22c2DsboXrdAJuJww6P1JmFYASbj7gyAzwbL3aVbH4Q4783BP6BqSywBgGndhqjYZcgra5i6MkA4GfhX8jUEvg1w",
  "key24": "2AC2aekt9DRknJEPACfPgzoZoZndzVjzaTKQUGZokuUTFRuHBSKeLetsAGR6zUpM4QNzJh4gpgY1Hh7jP2HAbV7b",
  "key25": "4gt5xkzS2vzF1hFHWHnTfLMoKZ8UwCiip1TLzYTxkBTdjuMoqLonCFaKejsrkQny23GYT43wDDeSSMf7ENhie3bn",
  "key26": "a7ZEHB1ibZVVwUKUzJVegFdLDFmVGydZF3kZsiU89o1AMSm3wCxCf5PbWLaGACg2F57nQ9Po6SXDWLPpBrHhMfn",
  "key27": "3qsZJnaSjuK8V7uGbMDagkzn7XHaz5zmPVD5kmq7Xm7L6yv5k5Qw4a8pdcWfjCDnC9A34BKn1obptP4DYf7e8zhJ",
  "key28": "5FEtKyAMRoVDTVw6tTZWtM16yjJ9HrpsV5vyx1fs1W5rgKGgwYSECwxENSb1uiG2RVvvynEhBS2JE6KBzHphGKks",
  "key29": "4S9jzsnbtBiuEesY5MHaEmwWZnoQUjKA8WwHhwqooighwumiKEepKEVjWVEVx3EqgNZreexLJbQ78Q3v2o6enq38",
  "key30": "2REsZWCceQM6HExeVoEB8eX43Vez7SHp1sMDyPaGZvhyQLnFLgmbMykBX2xgaXzEThWnKLMaUWDzCpYbfteHXRJh",
  "key31": "5dGrKjaLtHSkjKJrn51fVMbCy8SSn8HPELE8GKgCf9b9heyCaKwmKVt1AQVsKSbDwCVcwtKZaD8AhznoVSavpyWc",
  "key32": "8BH757Wu8wxeacz268cG1M3bj1wsY4SJXxVk1sE79WVcd5EN9LGBP5Q6jNomC8ofTEbVDtJ9BMvdJmMKuDdWeuL",
  "key33": "33veirpUoHFEe1jniS829zvzZhyMQFEd2BsmEzS3oovPGJiWNxBcVRZxHv9CPZ6F6qnoYBLUK2bWfrn97xFUBxn6",
  "key34": "2mqKBTDyCdarGhe5XkcJz9TUQhbo9yVUwRbZDkZzxJMuBiKVvvGyZaHnfrYAFZmcrpYh8Zu715S7APexWpmGe1EM",
  "key35": "2BLBYcicTrBigUsEyuuqMijEefSQdqC3jo7ezfZ2fMeCpUqWMY8RVAbXEkwSbo39EG3SXyRdNiBQr2CJcdkRe3X3",
  "key36": "5ZpGZtTKgrpN2RECMbvF6kmnp8EtNhRmjaWX44tq1nfjUiMvjgSLHBnyqni7ZtBziBT2k3k3sXJzuGZCZi6gQSdc",
  "key37": "64mwwUkctH9E3XiJZQdUX8oqVBNFvxnxMfLFXoaSE7yfuRgM6a4fu2oh82s1Mw3kaiYvP2mrES1x18kqJ9X6nxWD",
  "key38": "2YtsvUAHAcWMsPKUREh3ew2XvipsY9fw34vM56TMyEFUhbafNQqgsjk8xxzRFj2Kpo8uTiH6nXNKiqwW94BbacM1",
  "key39": "5Wd5UqRTNywZ7DUuAQmhD17E9kcifbctC4uLKHxUVpP7PsFhMwojqUCwbtnHgoja1fmPFHDA5X17EfcqdAsb9vn9"
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

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
    "2CEJmMbHW9YxYWgktY6HPHSCZY9vwpfLmss7YkF2HyamT91WM428KRLgisqvDeyjdKN6mJaYNVqfsSPZsYJ3XnQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBdQSfgnTmyGa1pVQJBhivCPDoUxUdBnQbBnUoj5nCza4tBLF9At44aXwiMp2psb24y2HdGR12xPiCr49v8hM5H",
  "key1": "4Y4gHSZrQLnBkPJs8hsDmW9MUP9k1HCu5YAV2pem9XHgGqe9GscEoooDZKYAnaw4uTHA3Aifv777xxjLUtTxDpzS",
  "key2": "eEiXznCXSEAzpcSFMCTWqAf5sqG6BUMwYmkZHSSe43iH7p3a87XU7JwVA1UHJLMGMbyE3fjKtS5ggVTZJVXqBqq",
  "key3": "4uouwuEePUjxhB4Tv2zp4AtUz44ua56kLcK4bafMiTWSjk2yy18BQHTxYwXy9Zt5HZf9ZknShnyymfbhQyrJsuTS",
  "key4": "4u5QaNYHyDY9nn5CTyshzk4w2APeeQdbJPTDZkVLHe4DttRpM3y5fPXzeQfxQHzs6SgbCHdc6YGhRuXCBXtwadYg",
  "key5": "494UaPdikKEfoE71x29C9BacAE3MLa8FPEbgrqBu8ND17EWHEScCkfc4KSE4XDsHhSGc2STTPMGkjaL61zYXRwX6",
  "key6": "3FyK3Dn1ybx7ytNmEyuBk1nCfhTxuGwxHFaC9oNyNmypdkJ7bbMwSP1eWjPuh7u8fN7aRDwmGf6NbuKFch45bTJE",
  "key7": "Xx5MMhFYNhNhmwpsWwxhaVirN9UEzjy4dupxSYfu4dBAimP6iVRrN92pP4ytGWkAF8LUJa9dxqPZEKraFny72XX",
  "key8": "4rLoUQFuQEuFrNWceaMgQEzii145oTpLJkW7zDeJ1utUyhxTdE1cWPJw6g93Uio585q2dgZ4i97pKk7QeUGPyBHq",
  "key9": "3gJFstuwbbVUiMspjUn8u8p4VjsSiuCaL6WP1T8YK4hHZ2T9htsQ5dg3cJnBed5qk8nitmxwutG2Z5D61FLaY8pN",
  "key10": "5f3LESkQ4BSyWHzodbvr4kXARxj2UPsEWMQVnAa4qowCGd5KrgswZ7AHLwaaH87ukwUsKuidUt5VqyHFk2TLH6Da",
  "key11": "3haBm2abnyWqvvVYaXNHn9nWSf1P7rDZg91j5s5N19wbJErwdfjowPrGtkimhfQ8N58rFJiRjusrn5oM6UcCXsnY",
  "key12": "3XqftZcNM3j2XS2U6eryZMWxRzPstR9JzN1Mwe33JgTih1yjBigBMbrfo2geSTCbkr7WUvf9mW7qeZH4pz2qzdVA",
  "key13": "4Ho2wQDFBbRNeJsH2FWWbjeYczd2BCin6n1fJytAhNC2EBqPhU6s9npbQKCFXK1TNNXMuNeS5T16Aoiogoi5YyuS",
  "key14": "5LyzSFaimgCjaAfZAUypvgs7XTWDdan3idpKAcXkxxgMMJBbGod5fBrSBVkMmCsYE4g96y1CzcFj3UZERZbFR5yN",
  "key15": "2rHDNT3Abb75qQBZShtpRreipyghyc3fdK5iXYniC5gFCKQ7JBmfx94xF8TntnyrSbUveqZKS4yZEwkeWodNaWz6",
  "key16": "2ZvBejEuM1cseVxUGcvkd1HMVdvtmPKiV3b25jvafNmDiEDqtfQvKBrbq3t5RSZYV4AHKpLtaXKGC4xkBUxtesTX",
  "key17": "5Ri5xnFXzs7mxKwa1NUQg5C5s8MRXQ9qthuWPUo1RN7xohCsB6BcisbAaUBaysP9CuUfVX3BsHSgr82hQ8oYw5to",
  "key18": "5wT9UqVe2ARh1HWHLabWb5CnnTuEtctDmuWrvzcVemAEwLUfS6fJzKwNMPzszjrGUDkuwYHDp95Q4jZShGEiUGcb",
  "key19": "4XKjYs3Mw7vjUmrvR4iKKSPjnnSCCGWnRQk4XEY1nim7DaqiSHjb4uq1TkBbFcA8fZMrVXNpv9zr6JPdKgbo7keW",
  "key20": "4A51EvURugNBDt4fqrfeyQnNRPA9L3EkenTuTMrjKDx1GkNfBNyqQUGWEZ6TaKzJgtBq8QY9JR6ioLjqhWPma6cX",
  "key21": "9p6sHiW9buM27TmwXqL7troShVmNT91Q3KTdRuZDAxazcu3UzGhrff7412ZF6mVrxk7JcEBAdS7zgk6u7w7xqfL",
  "key22": "3SxEWDbH8ZMUiGTxGS6P5gWAteu1R217Fx5RdLzZEt7ouaKG6Ayi8Ab7NJEuiw8qh9pFzBd7NXGDKXxMbFyZrn6t",
  "key23": "46wHtCAosazstCjLgso4R57VKaLsPz11755VrN8mWJgccpVaJYfyhwwbhxRHVstVDePNKkBPUgwTQZuEozoFEpEZ",
  "key24": "2eNKA7KQdZ9PCpMQRk6dmfxfV7EWRmucr8mXCDyz9d3NdUa91FSVK6bKVxcnaqaAABCZJxXETDHCDuHe7WM4X2Y",
  "key25": "5mUk75dN6nYmBfX4ZS1qnYnVoJ9CrrV3r273sTrawm9gTtFwxuhsNGVCcMPaXgnRWoJXSnykErnaQrwyxTFKz8DU",
  "key26": "5nXHhx3S33JsGuvHf5jkHvxh4Fh52BMqjdQWgA7rxgBX7vjjej8wBYCm31swZsS5fS8z8rMkuL9YaYDVcDFHN7Fj",
  "key27": "4EYw3gx7aFBWxWF3Xv1JR2EgyapP5fXo7PG5fcbtfMiKCtcnujMQZNqE3E3kgyyy88TkxXjTjQdQ8i7fskyRqHAV",
  "key28": "258ZhVKQkt1zddUBkebHQ3tGdpEdY9JpKTBhUcaers47f5xQL3vGWtFXEHJzKe1u39DGnF6upSKwerhyiKx2xmXi",
  "key29": "3AWGHTw3MoDNNGP1YybvRCb43kAris1X25dqiHtW1gjfdihBJxqn9Z3RvR3173YYyYmHbR5kx1VRNjDdzCkMUZ4L",
  "key30": "3g3gCxVZRi9CxRw359bbv6BpQsauU8eyDehhxvVcaSoyuMH17aNohbmu2kd1VQhC3NRMSBGj2hYDdvk5XJfC6uta",
  "key31": "21hrfaZ5bNnv6vDD7gfz57kTVQckbqfSYRCpYGU4h1K5dJWgc99gFSVnvxe5dGf4QShnbELDRuKiZUfSxqP8YR1N",
  "key32": "47rnEhdQYGZ28ZPxQxK7JbCbvPMYJV7eDtNLBzx3hM3zAAewyp2vYtexaK8rAXWiZmdZaVneEU8cuDQYVbNufo7C",
  "key33": "52EdjmPXzM8Qsj2RXvd2tn2EYivtsc1fCHGQoHQNN8rxC6CVLkNucujUKYg9DqMQkBgHnqL6N1dZTAksYm5KmFtK",
  "key34": "4LJoydCnNDBTnaLeyhUVVaHLskz2XYqhFPeBMuCoYHRmXp18kgz7wUdeAg6oLpqPKRRAgu4Pjp2pbmwXNt8nfk65",
  "key35": "47wotrEjhddYSgUWhNVGcdPt2XxTfcouU8rwSKSk7HQDP8XkqwQuiqXEBnYNp5Tx1E2yJzcPR6ab4sMssVTT3xpR",
  "key36": "5ELBLokkbUdThv9S4UgCy58HN9h4XsszrFst3B4uBbNkojjLi5hBGQTDhQCmCsSNEyb88eb7GtqcaE6rRBxp34HV",
  "key37": "E5yjSeZucZbsu6BaqvxyBVuGHaLHpihh7RA2pk2f65eCBb72gdxyaWyWc47NZmJZ7g6Qb4UvqsEKZALDk3DZt6G",
  "key38": "66FPhZvaDpaxp77p1323QLmm1PUa4bygFB9ceqyaWEA4vgp5UQaNryrpuMynZddq1rP767ewEc6Hfqns1H9UsNRD",
  "key39": "5PNDVrUarnpnBVrWVy4BfcnN8WgaeJYdGAvYsrbb3csPv3TgxapknVcjWHNzmVm1X8nNSEEfeC85ZiGrwRVnPA2n"
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

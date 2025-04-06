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
    "2NJcwjdnHyBLaUgbowMwhBu3GawrihwDFzrbrLGN99nHdcifyynaw7V9JcRdULqc3Uta2CcT1UbwLc61hXjvzSbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6FGjH9Vivj2FZ4p9ZHECMMmyxbj5ov8QNnG7AauEH9RMGGpADrYvdKZodgp6Tq9PqcSijcCV4WZ9Pt1VE8syEP",
  "key1": "2xgawuuqCrKvS9XisZ3WMHHN5sjTMP7ndXD9PUim6xhXZhFfh3KahRu5RpMoAS1GYf5mHKkbtVkX8R26o4Nv84cY",
  "key2": "nJnFpBPRULfszwmUZBPrXifMCNogHa8J1rMdQ3NGwiL738rw2BEoQYB8fKNUgTQ8PtKnRmjryAWtD5zpqhr9DXM",
  "key3": "5QJEzidT1RTsz1QZyqvbSZ5duifieVdoAAACHwXHaQuZe4b9XkY1mgj8zhJP5amGBbwkrAMoY3z1vyteYfKriMYv",
  "key4": "5EDk1SxhYs6DCeiD9zCSNfb9f8RjiZDiQyxnfjvdhQBMytaxQSZPfgS5hE3AN6K9h9UqHg3M4skD4LRbgGyKdYfK",
  "key5": "2e3Dk7hcgyYecM9dcDwTGCsSKtbUndxSBiszuRHUUL8zhefTpVLaHYUeSvSLcUMLdY1GGVEKWp3e9xfRQhTxqeD5",
  "key6": "44ADppPQSNMBLt2AVbR8Lu79vUEoGfWc8dxpf1HHbs58wEvN6jJYujVEzSJ5ZxMwdvkgmmdikWKy2rnTjpDeCeJZ",
  "key7": "4BaR3RxnsuyyE1RyTXkKQNWtSXTzC3zCmbUNGHSDCgjDc4vC1jZ5UmKAVKZRDXnpFMAeFkUtdQ6eyA6k8QRiVy4X",
  "key8": "4cMkNJpBVjGtEzxQyYFXR77PtpPnd1ueaU8c7EjRRzJ12bE6Eg8nFWYwYdD7c2ohVDdLvD576VXqSxCGTNwKAMLt",
  "key9": "2WDWrY43r1cCY8xWZ3z6kbXqbjnAUWSGiJmaW9g2jvLoLVYdSsEqiJZ1pgF5RvNGL25QZoDgs5JsA485zFm9z7Zb",
  "key10": "57Ze6oZ6ttkqYmpJJPvpjtHx2EUE4uN1jpnFejf7S8mG27kAA8hJeEVhXfp867nzc6XKVNTttxvRRtRmqNVSo7Zh",
  "key11": "41hgapdYeyaz9WHgrGv1nUnQvHaeProfnkmBUm87r1oCGCFBPc235TUdvyCmpQxsMyqwo9kPh2tueURa5Co8L1hE",
  "key12": "5PQLMZ3W985Gs5xsGis5KJCqJG4EpPzJm76F37xqa5tGW4P2jTV7MSW4MJBsxctdBfBWpz1SnsTz3Fr1iTB4sHfh",
  "key13": "5jA42B2c1FWcXgraaL9WgA1dYJGhh231yCQo1ovYZm17SC5HH9YQZTcDQgPnQjQbBxPmqRYmk4T2B6rD4FQhjN1H",
  "key14": "3w5JSKboeHgf2SCgQ3cs2S45K5ZijGEjrxm19XPiBG2PkWmrxcGLJwDPzh6uANbWBGyXP2Z9BKH4ZCyMHxxnt2r6",
  "key15": "5fMNKPmf4bJQdp3mFUjfvRrcEfpPaybdZqqoeSY9R25joAyxnBiveWTST5mPXoucEmFjJnVibDp5DqYSeLk9AsDB",
  "key16": "31swv7ebzNdpSJxwVpUt6SBfnXSTRHFgoRRch5Bg8Sphagtkt5HW9HZSnrQqtCJWvXsSSEAVWKt8wdVNccs8ZBj3",
  "key17": "kZvCjVckwawC4VohsQAMQACGgvGSEkbVfNAjSimLYjsjqmgZEkvUGpCCxeEvmnAdtuN1Bu2zohn1bgvZ9tYazUm",
  "key18": "2G8kaQ1P8ZMph1bBUFw69qLpZcqQsxE34GRFMqQqCtk19TSh3N77ToV9kBi61fkpCBL1F8pFGtUQkn6yXBV3sAqe",
  "key19": "5wULiTFDd1hSVjt1ehvuewCeQwswpFxVFdebR7qYhvqpgoUGHeJh3HEYNtDx3QRXkg84n9JeFF23u3eLXqcbPrZT",
  "key20": "28gQFRTVym61ro5u2d1EQRZnmLjL1djY6PKhmcw8ScMEysWK48UqjDF5QUgE6ZcciCPkcrZeuJYsbFZzJqSNf8sM",
  "key21": "jNV1qKnJf2yLZ4qtPPAW4JF2TQiLp7gjCS8bWce66Ec8tyt3oXetCeD18zKSCVxJ9gQgYyBAdDeKRgq81wTH6cy",
  "key22": "2X85PeKDJyDh2s2xjp3oxbZfvbajgyxx8ycPRkNMgTJBg69ARs9dH12y5uwUdGMEu1RmP2yYsDKb4vRSsdCgHXnc",
  "key23": "3rFvA2qW5fjJX7bTKUiUJhhXGTh36fqcm3Em5PymhZS1CpD8JCeVZU1moSZLs8wUnSLcY89DhVheQbeQZZx7pi6m",
  "key24": "kUEEFAK9seo6nEonYHSzoSiUbszqvPLh3FY7Kqhr2h3xHhsuHMseUoq2UbUAvY2GLRz9mWgSmi24JqTwQJKJ9K1",
  "key25": "2yii9Q6mpFcsETuXkMrnhtf4JuYEgM6ZEBN8GcK3TsdxsAvetzXeBkByfCk3ipfgAcvVhiwomgUddkZAbiGPQBPM",
  "key26": "2bJ1KtKu9fU7evUKbKQ7wWzCQxD3ZGbmThwLKuFobZii2Btej5c5qpXxRiDyQG1MGoqJmK3eaSPyXyTxEnUSqwcd",
  "key27": "4ZFMkW2wZDSSFdUjGBZE2tDERJuVW6T7JrpdravuppVYSL2nBnUyZvBVcV7GjSyLZA5cMZbHUtN1Z7r5WPuFr9yD",
  "key28": "42sHTPNdkWx8qBboa9ssfLEjn74Aq4XudzGtLUL39QDENKTodSXRdNr3cHdyZTDddwGZZyxanh3dGvbNBnMNgZsU",
  "key29": "gcHSimMkkj1Ux5oi6EWT4svW5AH24HkmWnzbaecihgCR3NzyfYE1VCUY5KUfTFf3x3PNXZwrzWdyFKBG1q7124h",
  "key30": "4uPizATBrN3wViH9VT8nj9LVvEaaW66z3Jawa8sC8emM5TE2sQLkmBbk2J9zgxK2rSyAKJYCDZj1xTmzoVDpisci",
  "key31": "5HHiToNvgVGY1XyeERrx3uWhRNnmUt57hj7NCx2XUWyb6e8Rit3EeZWfLuNWRDfyHdecFrL24cQVBMTP73WmdzKz",
  "key32": "3rHjByah3FfMuWfCKc9fhU8pgXFnBCLZQWeQBnbb9hW83j78xfmToDs6AyqXVVjufVuTdTv2G33ZdLmHU6ptq21b",
  "key33": "3XzyKrUe6SmZxUsUySHGssMsShskzUqRtLR1ZPjBKTDaZKFybYc64THxFC2uDL2BSmJ8jhGv1pfYwY5pix1JGsox",
  "key34": "9zuaudGt5DA6XAbE28w8ZeASHdWqfpTJrQWSyDLDBVaSfXvRyR9cPrHbwvNa2drfZqCDN5kK75rcx1Lw3f3T1Bs",
  "key35": "2AMyfmWw2tZCrghtUSt3C6rWHVwGbrx9VAAi5o6NogTKAoYV4dKL3VAM6Vz6uRxNb2E4DTjpv3AXtpGyHtvWYfCy",
  "key36": "5wx1oh1H9ykqCE21PjS25F44DH1nKyFCc6Q2TtDTKbtfbo6MLdknXrf4SUNKi86cbBadLa86ErMQgweRNujYfuNJ",
  "key37": "4oXQhNTMfy7Dp1DP75EFU2tZvpFpNTXCzRxrsr6XD2vyErFXqC94fCf7Kvp7dojE74gDJgNqsU2qZSytpAkzT4m5",
  "key38": "2uKAJEdLb6BUa7oi5uB3QRFDt7aAHosyXX7tSq4y7xcyxs5kEpYXcB82v2NmBp6DRhqHUPRHBEwB7rspf2vqHKKp",
  "key39": "4FkUmjNGJtxYUGVnVKaxxW3mfUzBnBRqnStDykbrCaRbBUSzEmMccpx9Q1Kv3kpLXzVioS1fZPDi5q8Gw17isrjC",
  "key40": "4WVUjBoWBoQM4ML4eei8bj944M9mjah84UcaQ3Eeq2L4thtC4UtkuV8N4GxoHZAyffi7mwDo6UyzXrRSfRQeBcte"
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

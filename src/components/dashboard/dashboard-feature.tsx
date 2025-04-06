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
    "Cp1Pz3BxtNmAq1TxPxuxzAqt7J8fpyNadEFWzy73NtmiU7zCXzxZm7KbbxTPkHGqTrULFDiZ81au7bcDYWNXZS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619AJEd1B4sXthxudDALBsyqt71dhRbJY7UJeYFZQ2VicUBnkGFaGaZGxntm5oeXKHFWE4BhBjvYtnUqRCfzjXsm",
  "key1": "V8eViGJuKT4bJBw5RHuVtZr7u7FevhAuqmizQcFwyda39HTTCz6JGsE7nrP8KHoZeQbkb4sjEqaH2aTLWsxYTxP",
  "key2": "2tUQfE4QU8dztRaqoSuCKeVXk35CXZiN43NLo7axuJeyNDvs4K9vNvfZs2oC5gSDhvttwm7KkH96Ss63ov9wj9WC",
  "key3": "4GorVLB6CsEr1amdQmUYGVjyEP88QW1KAPxkQZ9PWMYZiL55cvVsE8RXcindYJEesmdk6RSCc95r3WSJehjqRQww",
  "key4": "4cv3GJbfmaiXuosgNFZAEGGjYLreH23Xx5tM7TZ1UWVsuXfAv7n4J6mpdtqAEMojE6ceGff87j3Qv61DnKeXJaos",
  "key5": "42F9hPrY9s2PHcLLhwZ6mqGfkqsJ8QbmGV87rtAb8rq9nbm2MHHhpDJSBmbJkrNgBE4iYjepgrEH4ZUwuLSk42sn",
  "key6": "2ojYdrUSFncMCSonnta5dXFVxKSb9FKMERojWjFWpRvuBsTGwCybgEP7RpWge8rupS7bFRBYG35KpAHFUWSVL2P6",
  "key7": "2541j1R6oTm3SFSr4PjAtLBeyvQTs63W4WfQvB6NqHpVsLgrMpSsFyR4MaT5t4FQegqmKF4K6Js3ty8R8oa6UCzm",
  "key8": "4pJSDgKvM2E1Y6YbVJrgbU1S7ege5AMy2Yfy4VzZKqywGcb4mR7CNSSsxf9X5MnaFWD1NBM6tDLQBncN1fKUrVzu",
  "key9": "2kGUzhXaY5pHPB5a5Jdua1rJJZxL6Cc4J2UvHhVpRdaDocpPNLR1ZUs1UZ8zWhXPiRTiU5FKq7DNB29vyaU76P1K",
  "key10": "64CSp1JJKu5AbucwtRUZmfXn29A2P3JKCaMYKqNtD2qUg24GeJLHbm2o1aTucTGQmTdy78rhuRVg3DMGr6ogQcj7",
  "key11": "3CNxs3NmdTnz989XcJ8t9UcBziUE3BLwNTasW9J8NQHWyJCcMhXYsGs2AW1rjcHFRTWxCc9efBagZa5dZTy7b1EE",
  "key12": "kpCczfiuMYs2dw7WjFu9RwJN4wth4EBe7puqAJYMH8y1mjfNqZffbXWz6jjoTLvee5opCW37DUQwfS4EqkXyMZF",
  "key13": "4rV2FNskMKxhJmZ14MgHs1kzh2GSc8wfKcWrVXfiSgHPeT5YU6teLaTzsk8aB1yFPTZPExVoYfQY5pJFtQ6HhSzZ",
  "key14": "4Xj8bfh7PgxpoLgRssAdD85XFW8Hseahk5R8mBbzHxA2g3Z8YzDXwQRUy2PGfy4WM9waAHqyBvpCidctkZ1UhngV",
  "key15": "3PPMr7YeuoGc1muPwz5cPcpyCXAUvsWmh6jRVbnKqvGdBGnLrmeMcZNABMv76uJsxJmmG4K7U8m2yKk4Brzeh4ue",
  "key16": "5VtrD6rZAa2SPEUfpUJX4dCRiCWe4U44PG8z7hzFPSqvpXWwWaLtSaJpevePMdTFwxyzBaooAxyBVWnAGxMpyUfg",
  "key17": "3U87hco1HTFWEySimDCtDzGJCQUfqKPFe3eoiMfUwUiBJPywGj3Qn3b52hvETysXenYDu3itmfTArKv2W14TD2Vb",
  "key18": "5g12U3kUXkz4yPoPrN7CjHzqmYu74oM82SYGbXxTgmSW4eFLUYpahQkMbC4vMjdQfA2KEf9YUMKJnz4y6kXYi4ur",
  "key19": "3ywSeAjMB3DVDEEL9wijUzr7tYFCKSZaFxukpnRjthzNuYN9cHQoz6ueXR4cFKmcUiyC15hPBJ7fCoBkw5pS2onC",
  "key20": "3kowChsxcDVjXMHkVFeacYJFV5uF2ZpJbLoJc3FfDBV71n7yZJjpD7hx1HyWjGHVXZztF7EBBnGAX2upY2PCyJnZ",
  "key21": "2yFv1nWSh49aou39KgcuLwriupvSJcaafbQkcw61sEAt8CYuHK8TMe2dPRksQ6jLdzZFzpE8WDrWkFfGFnvNe2vn",
  "key22": "3DGGo7nXzS1JtLbJdsCK5AZaAbpaJQWWrWpi6tFge3UVx9D8LH3tu3n3AbsCbE7Pg5Kc574CePPNu61kHUU73A3D",
  "key23": "36Gid5uBciWt23Lrw9Gt8Ab8MuoeMaRsDKFHduvmbZse4m9ALnumaYGpxqtwCfJcJA1YcMsymDTYNQ3WLkhEoZie",
  "key24": "2hTLVuitkZciRPyRwFMuYVJijjdLsx24U3JGw4BwByhQAe6GfY4uCG6wvduwbc9KPHw1CzUm2kc1gcSVz4MbYpHF",
  "key25": "RuJKA95GqGQYeDnEkQCbJgAKfSQk5jSv3hxoEZc3Fsx6QKvVbRa7pzo7JPs5htYHEUjmfTgXDutYZbrFBoPAWYQ",
  "key26": "iRkr1JSKfLAkAFXtXeF94RH3dJGtLHciMB8VBGwsJaTNtzSgqfzS6i9gzkcFYjWx7HWzSbJGeuGWx2zfNVjjV7z",
  "key27": "1LNVoNjgX8dQwCgW9Mwyc6DGrKRQU4QSQpJrc9fWdr4KidyQaAKgaT5Aed7pnBmbLvTmMcM2vwNZpV7CveaT4ML",
  "key28": "4xQxtHJ3hms32L6AvUijWtLsi49EnNWW2RSE32ajX6c5xaYBrBZ2nTh4qwz2LGcZzRVpPQ3fGg1q5Yi9WknE4exb",
  "key29": "2D7uecXX9734tnSjD3YFYtAgsxpaX5LGeRqa6asPmywNDL45MxsYQKCL8NLCstzY1W7GPbXzJ6u3MpM5gSBxMU7P",
  "key30": "4VjDowwfVFKevjJEcWeQpxZ38TzCHdNDgmNwhE5M7y4SUKy8swcqZcaC7aJbMMtUohpLydLBNPt6CKChdACTfvfX",
  "key31": "4LJSnb3N6Hok8PLY4AtuztGpE1vkpcuGcz18A6scMf7GCtWb43fi2fFaEjGgyf98fhQeDRuo9MSv7kkoUnh9DHCW",
  "key32": "eT7fvKe375H7YrDLZD7JRkqKDRLsEpCo5Foxi8iQGPEiMcdRFq6Bc2cU5Pk5U2ZBDbv5xBzeS438NZ14HHA4HpG",
  "key33": "4naL4yB7bteDArmhfxYSBsDu2ZRDAt2QLNDnLySVQA5XaHT3BGTQftHaE3iGchaP9KKnEuYWFjxdEngYp8RWufBS"
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

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
    "3VJ1gjxJyp5PeVndQ78hfg9PYjqn7A12qbHKKtwMSebnjxDJi7nSkZKpRDRoST2eTkfsNji7ftXrNMu7vStTEWZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJu86tHJhxZ3FaKkn9EaWQeCk51LAJntL3S9U5PrLsbrreswq8v943w6md72LqjGtDh5MX9MmC8YgZTucHCvBii",
  "key1": "2cYBuNXLH5GkFwxoh845B9GJyyWMPCaMJ8R8BbW6xwychKHh1qyTNUupieJHy7FbAgwpW5NMLfhZU1D1rGG6X1Yw",
  "key2": "5CtQ348Ry7HuV4dxURvuvtjAru9Fs25FxKooRH6oAnhM4SuqjX4tv7pZYeo3WTDdJ4FpCr3a8enNQHoLBcjhaJDM",
  "key3": "4U5fWRYBgCFsfLims9NdthES1fgxmpoLK56GHjiib1WQnypQYEtHccoeRzGVqXpSu9oJELt8rKuQvFbHXMfbvgs8",
  "key4": "fTWFfKegJAjQrDVdSz8CPkSrVim5JHXWbcn7LeUN12VCLejdsL2HZNwVSV4Wmn418F7PoSfyqVZXWfvXd9JcZv3",
  "key5": "4EityXBaH9hAWgcaarh9Ko6fozoLgbcutCDDYtwfzEHTLMnL6ykbPBU7apco9PWdiApydjqYouYiaPo58Uvo7c2D",
  "key6": "26mKwfR3YU53psKvHAugGMpGUtDA93E6pXj2Vnu92d2TY7HQhtvQdxbiFN6tnyTjkGEBusvJzSs6mHAux6arLggH",
  "key7": "3zYrjTu63bURdDtpzn51cF3PxD4VzCY3nHqnLAvhpPwNUkddqyxP97zHdP2GybDsHjQsK3GA9J8JaVpgk1bdc8JC",
  "key8": "5uoQPaUKWvJfhztgNE3uFSYBykqmiuhDjrqMyvd82t8ZodK9qcQZy6PDdoFRfw28pAWD8aj9p1xPH695ijTAJTF2",
  "key9": "4dMnfzq4AxcKEURJWAEPm1VnFNC2uVk82JrCDZoErAucS29PdjkSjzty4nrDqTUWGfTq8dUF4ecXVSktLukvjYeu",
  "key10": "4nWKXSivi7cxVKfYxD36gDJJtPNW652sCqKfJKgKR8LrnCee8Ejetf9Ywd3Rtw6YVzWkt3h63PJH63QfTJPzdxH9",
  "key11": "DfYcSJZcthA14uRmjuaDr17XfrExkX6g5w6RrQsJk3PNkzSrzsQybC9HW7fEHXkxkrQKfDBqZU66KAxTno4j2xV",
  "key12": "1GoHHKPpZsNwujYVA4JV1196FJDjDeYJgXR99rQZE6q2fjfqZVd6VGzGVv7A4cWLU3RpjbFwKsvEuh5mDeX168o",
  "key13": "2cvLPJyN4Q1gWXRRCeSo1KpFzsnm3fKWxdqYvt47Ueab3tLqZtBm29w6yebXBFdFVpzZMidLWxV3NtfGvggnVKhj",
  "key14": "5EMhtJwRFno9VjKGt1yLiRmYv84YaPYDGLoDDSJSqmgcdC5eKGyWrrAVRUznZUXsShnp1pdVTo9qAchqhA6ozATr",
  "key15": "z7cUiHhwZx9eYrC2c7orAJpL1sv1C1GRN1fpTGhBxfeK3XKdEwU6ewWXvSXURWa6N9kuWZEnXL9rJ6UmL75So2W",
  "key16": "4BoWmHxscCARnow12rPfumHRPtr9bY6n83BZ4zqXPLvUKp1TBKwQjHEDGKZSHYXBhCyj5UtGpQqiKQkbbbVcD3se",
  "key17": "4pjm1bR58YTF6iFqrsTS9rqS38jzjUFoiPcE618M2FFgejRKdYaRr9du8iooACn8EWhMzL8zSHVLMhPW53MnQJgn",
  "key18": "5Hg9Tz4ZMf37RYe5KA2fZzHhG3xjwr8GGDTN2nACvt7R1YdChRjRtaVFpg6Umw5LMuSFoxySurzMuUpJCoXgMekw",
  "key19": "wkk2Ydyg7M7pV5MznrZAwM5aGWQBVe14sL6PAUU1fdovL6aEz5mUfvr15MTywhXufi264LoZdkpF1SATpXEgjPG",
  "key20": "3haJ8Lh9b9qczTN5nfQoneRvhYPUtmEMe5FYKFxDDDe5V6WcLmzaYKjmJa7mUefToxQq79eChnWWTzsi5J1CFEDx",
  "key21": "4ERMi4z9dZ3b7gn4AWaeqPezZD43x3gfswfuFEaHPaL6zZmSTzoSEj2nfZ6vunMm4NtUQRyf6uVwettzGCf1VnAx",
  "key22": "43UsL9pT6x5jffUecUCHDfnXDkHUTv4LufB9xiFqCR83aX9JCs8mJFDYhka7hfe4QfMA6ZtwB7osTBuTWb4venoG",
  "key23": "63sNFcHWnWzenP8iCz93Ta3YH7GSX4cFAhi9Zeu4qwh4eh797UHK3SWBueFpxg13221zQT6TuyJdTnWtmzSKhxi2",
  "key24": "3dGBXRF1MHSWuXyJUHnA4NwGnQnZAi4X6u8duH8MFmakuqq3oBhNYdRaVA4dCMrcKCNvSoJAizG3VRkLURgHuiMm",
  "key25": "56U9g3gnf3mUs7X1g2DJg72WPvmNiXychjab3vMERVvpuiDYoheddZ93Q351qrcvEH1iKQ3mkrbfUD7ivu7QBH4G",
  "key26": "5mJZEZAJJpGJctwGjwmjBWy6d7BNMkPNWqL8oZF8ZtSJTp22GrEKqzVZ6FuWxkbMXkBFvhz8smV9Q4LHHhwKLKim",
  "key27": "5FcHbVhxicmnLvChH8uxtRqqkGsCRC2LY5eZZrp5ScdMVXCXaMtRuXMyq7zJWzEuys3QciXjgxDrTet6b9GzDFaa",
  "key28": "3wX5b7NXSEmZHHvhVUTR8FPKaAS9QY9wy7xmULRYUkUrtj8hWPPqg9nSs3cYQHLf5NCwF9zfrE55EmuUuCN65UPG",
  "key29": "26SytXmMy42Jt8EULP6xroBGdymWyygiwQjxcuM12MyHEGx6nfPnib6yZC5mMAfZkMp3F2j15kRRBVVemuhCYZYp",
  "key30": "3Mru55ZAAafQgTwrABesgzP4txPQYHsCFwfH7akctU3TLJopnyMbGxEmiFqYdHnPScjTbEtc95Qmg3LxVKZ97BxU",
  "key31": "5CngpcpvtfzasCyVyLiiYYE2Kbk4n9oMQL2qbnaSutbyFPGAb5pj8qf9y5pYdCqCk4psdwB9zK5ynpPCH89WfaBP",
  "key32": "3qvB16C3pEMpBJAEPgArCEpSZ4iUvT45RQLJw1B1xGox93HuzFG3EWzxNJYQ5QNhHRRHN4FhxayRHQ28iyXE7Vur",
  "key33": "AcbwVhKeCgNiTSDFa5HaB5pzfo4LH5kE4dcfvuBxhwzCvstzJbqNbUhaDvnpHgj7erRQ9VFwU7uVCsWALUWC3ME",
  "key34": "4TCpwbuqLn6QksVhGc9tEh97855qgursG3TfLAiDD4PA4DUNMb34j3WpijfZTg332pBvzxqVa6TNEHV4PKqw4KEr",
  "key35": "5gSKNbuqizF5f6dgRKZMep6TZXMF9MEsK3EjL1BZAtuqbb1mkQLYEjdgbM1AZDnXVDej2tyoGBGwsGyfgYURvJ3t"
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

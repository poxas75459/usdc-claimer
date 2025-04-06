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
    "4utRGmviFoFSdmBB1MYtwWiY6YA1CWunw6qa5cAh4rrSBKMjn7zDTXttGnGvzpHN7xsXyp655NTC9JgCkxnL5U2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKNVYheXNf9eHAsMUSwmuCkZrFiftGipxgu9x76CDCwrB3ypvkuPe33M3mQXbgMF2kNnuJjuotyLmGsqp8WPZXd",
  "key1": "5X9oeLZeNYWy8su7cFx9mH6eTwxMW35hMiXHJnpcgoTx5QwcscmxvPyqwSvQvBi1SYeQzwnWTsStsSVSgMxpx7PM",
  "key2": "4VKeQAi23CkJeJRTm1zqiMWSqYg7Ax3LiSrcFPZ8fjiZj3aRBqg1KcsuKXwamkJX8hLfkXiGTUnmxMpX2u9ZHQ9h",
  "key3": "24ivHdGSb5XrxK2r2nvDzY3ruG9ZAhhEinNuMzf3zC31gMEHHxeyYXgvpSXhF1wafDy4fbbrTz2RrwmKoaxg5fnS",
  "key4": "5q9ZVkzcnUcZfKtt9rRieypjawX2YPURLCapxzFEGTUpEhHu1hh6PUjXMRkaNfxrBzEwFmGmZrf4djXBGEuN5SBr",
  "key5": "zu7oDsPxNaN31fLApQi8pTCKgAhUSo5VFUGDi9GUpj8T3E6pq1Vmm8s8ZJZWhjsx5eZaRQKK9jigju5X6M7pdTv",
  "key6": "44YXRBM381HmrWfSoaHLXqXe1YaBNusFjHd123i96dDFGo6GPnfuFYGkoiZ9nrvCETfAEurDDWau8iDjdPSFB91W",
  "key7": "31WFMJDDfVEALtqnDe7xu3ftXJmqexzKouNEDfrsMoZFttWTCf5ucNyEVzDbbHRt7NM69hw3nrLpbziRdf1Q1oxf",
  "key8": "5eLTabriXwTowbzTeb4JJvvsoPL6cRSC6cKtq22mti1wEtt4BKvprcXce1H2Fxjged6qYvtFNPjrTBkANzBoAQnC",
  "key9": "4cq7RGNfNYbjU6pZFdXM9my7BzimNtKUKhimbemQRm7Tsc8J4adVghiRzqT6CUQ7vwwK29TN2HQw8ACu9feT62Ev",
  "key10": "67JEhE1s7ck2Uwo7o1zhUXGX4Brit17B1dqiAHmp3kGrRBScRMwd3AzaTYV4LeeezT5KDMVXBgSo2d9DJc53iPQt",
  "key11": "y6UNDiUP8SZ19jNSwmuPTLjSKhYeeUFdTdwd5KyWkm3MYJAxvft1jCT6bbBB3hrDFshJbSAbBbKwv2jXTdGrApT",
  "key12": "4b3FaWyQYRdF5h813DoY7WLH983hDSPdvPxTt1HCKHAdqJTVmAxEyBT2egxfECxaNqpWBFbLrH2gEAhJgAPPctEn",
  "key13": "cuHqa7vuEX8ocSEf4Zbn3YWLEexvoJsXSLdGT66ugqYHSTQd76rFTRdjmtm6yC3UZeXkAJbZDnLAoqGkAYmVWAB",
  "key14": "3os29iyzDuMxrXkgtgD8GB1JC5HdXRksTJ9epbJHCvUqUnvvgoG4kQJffp3C1MfRx9B3tCNQGoPJqHvzbAnZzuqg",
  "key15": "5JdgBqCTKimHdKQSoqXgzVyBnfxmbjFWxgLZmhzGzDwUM1iTfNvXpSyytGbmkEkc88BzBehA2qfT1Xpmrs4aaGZv",
  "key16": "2vuSe1mPa7zsGQqpfnoxWHWRKYa3X5Ci431XpveE357ExZWzM28jcW9K1cNfD1jov24C2XL8inTR5avPWRmtYP3N",
  "key17": "2FL67JoCgmmcy9ieuRmah99UiM918QUVkFtW621XZFW6yn4YoDxn86bZNajpeGCQ2WC29Ndqhs8Q3jSda9AncovY",
  "key18": "36Q9LpHknhwGq1Rfyqz1a2ankEjLehYPZUQz6dcJ2XvA9qESgBSxN9dUNhFGQa4cqL1uiYD9cnUxx9LW6y6f5N3n",
  "key19": "3rpS594cDBdJkbNrqSHTf2CXacWXpMLZietgpP2YRinuzXjqDuWH5qAWcWFwGNHFsuykYEm6RyXRrZ4H8xNjD8Hi",
  "key20": "3MT2ufYf5P8CrApEceQA8W1RK92tL4mZ13kBr577aQ1w1UwH3cnyxX2vKuvKMwxqwTsHAXGKiEmQH2odQR9TR2rT",
  "key21": "24x4UBqMmawL1JGD5WSDn5GDe1MB9Wdb6wd5iNHw6gEDUEJ4mHRRRSVxwbimUFESLqWWtb7vuXaGj3TzzSP4U6yV",
  "key22": "3ptoe3jVcL6MbYswyxNU6cnwRaDXjP6BbXcfbL4cBYwAN1DpD4nk1tEBNcBTEr39YaRAr67eHWAiuGBxHvnTnJVP",
  "key23": "2k3v3eu3CMUtuE6u3jNZAyaJgQSZLPYVvCVxwmXBp9h7aNjD1K8451te9KAFxuDKWsesCphofP3xQ2i16edxoS7A",
  "key24": "45a8gB2pBtWQz6AhBuTL2DtLbQ7DjQVTosJpoJuQtX9gaoaDjpbRKMR9EAH9iVCH7qbAr8GfUKXJsnecFXWBMF3Z",
  "key25": "5pRTWYYwCiGLfLRar7R59LCf1ppZdooP2iSCFDMFM1fbvGPVEpGjmkiZiZurMHPPptLKxmXoHBTMdEDaK1huFBRr",
  "key26": "4A5WHacbyFMircfNJGVeZoB6VZAS7D6HZPJCG9qZJwWEJVmSAFL4sNMJAjztzHTQfQfi2LvzR8NhSdpTmuPsiwWd",
  "key27": "2mCsxH2TCMGoxQcpz9z1pUW4LwkcvveyrwYqabtvhMj5MwamQYUMyP4TvUs8jHk7dan2fZVmSiFtBAHZqNvk15n9",
  "key28": "2JhBerMttFWupfadacePqU2qkiyWx5TtdWvtnyANgWNcV8gGLmDU2uJnfbcE5rJ4tPgpN6zaLoKiLigERWsKoJKy",
  "key29": "23rcdPQqpmhedPdXbyTzWupF2qnZQ6QbAKKMpSFjKAAFrQrjubrKQtrXghY6roxUeARSa6RJoe2hBuapifCSufU7",
  "key30": "5hw6ecodZmVPXNHbA5cnUd9AgQf2rQEMaswY2WqYywtpDYcZ2AEw5PgzK87NUdZ1fc2dSpeR99pjyX1rSBpYG4WU"
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

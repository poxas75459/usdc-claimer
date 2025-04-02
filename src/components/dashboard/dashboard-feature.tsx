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
    "2LnrDsGgMH9roMSZViTvuh3ootnx6xwpeqMhUE6hJTNHdLo3JAHedLqjHKAgDjYvikDuUGNNam7GvTkpULU2PEg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wgPXn8SZBsBcMy8ssespHiYPVreA56odUsBUvfydM2LBQfoV86UXq7aW1NckxBKues4b9egqTW82MvKPjj53NJv",
  "key1": "664q6Qx7ZRc2ZebaZuVXpkQE2icXpoZGazQ6FUzVpp28GmPmPgznmMPgpRaabUQeZ9fW8DPmVHz9d3WN34KV9UAs",
  "key2": "1xLQXygmpxedjDcuAkMLEAWNVVsjdTjuANXhp6HpD2CH456sR5nmGdzzCaaFHVV6rcQ1xnhGWZ1UyKMx95bmcTk",
  "key3": "4ERk2CjHdEzpBmgedKV2XeiCWt5cWd1eUgs5LL8Yjd7trz6kmPGvbnABU7VMYR69pJzvPLR5Z6GTgyzRKnsLRqno",
  "key4": "3Ui8VwovAUwhu8RY1YYg3Z6jLQh6GbuAtaiH6mE1MXGPuxF2x7zhy9DLKr4y56NKmKbRXmvsojyAsKzVfzidz3io",
  "key5": "5LaSKvg152QdPCCpiWpNfi94wKtuAKTmdkyRY96x2aa7AGfJ6gpfv1jH5L2F7fdcAjjrP1mBagKREzK71VfArXHx",
  "key6": "28eAiP4ZgWo1cugWRwigCAgcnKwjMfE84QRbzvFYhMbikLm1jSnYfa8CJ7nujHYnAd58ay92xZX61yhh84DwcZZW",
  "key7": "4LfmrW8vAsvDvcTEE74MvBKg2LxEuKiE5uMFCnFGxWVC28qvTWr7RtciJaYD5FEgNgmZhgDMYprVRW4kd7ghYYpj",
  "key8": "5YkmZagwEX7LtHZiQMKeVqe85RUNzHJUn1f3hGfDSAkxkHDwb21YGaWwaV4hT7bCMbbjYmKB8g6bLwWnZ37rpuD6",
  "key9": "61VWoUrQzy9octaMtPXmTett8iwrrbZvQh4V2t9KU8VsJgL1n62jXZty9TSySBj4MJP9XAMouKGRQRfumuKifLAS",
  "key10": "5fzaHnhN52vbtTZnbEQ4FviJLpsv2bqP9r5TnJiok7TUXGqimGDU4h1ZMw2qfXEvCn2eaE1x4AAQT54n6sJCDuEy",
  "key11": "5zdweYPjXD51fDikXx9pNquETqqSF1YpuWDF2B75P6XxWriRyYmwXpubfPwki23U9hmL267L4tckzaRSo32LnXPL",
  "key12": "3BsnFQgiea5f5EiP2Br9LPcnYwSKhYBjGrVfQje7Wju3oRJardh51T8yHftoCxFThx1fXaNycijMFuKjF8i4tnaR",
  "key13": "5QVb11x3Y1rChMC2vQvtBooMXFGSZi7jsvFpijFg8EY6Mrz6pi2ubzhTT47ngaJFWDCN38gz5etB4CtV9nfFQ6Dw",
  "key14": "PM5MvL4vLn5DyvjiMzXZ5wF1FEZafrhw75gawNEvNKzpuSAoyw83VPWaNyAN22K1bAm1MG2wGngHoAof4TDwsjg",
  "key15": "3Jg2GexqtBK8giMe8c8LX8d17A94VwJjxmo6b4vwkATgvcYahjB6ssc1HdJqzDeFgMi6yUbpstQshZh63pYzss5u",
  "key16": "5aPHtrdPA4NdcHCB1GsxXbDTsMgexwbu4QwraeqkiwV9Kk5BDSPWBLMFahVA4dhpVLZwwLgwpMMWcPpcZ6t5XJoc",
  "key17": "39YPcwpbGC3TFsuPGKwMyNtocHRvJiwEJmqk9R32NX5hK9NciVxioqzkz9haEppegwmYHMteEMBb7kFx6qJ2kSUV",
  "key18": "3bTkrFfqTGFtHeuiGLitG6MzZ7NJFfqWgmYGqhneGts2z6PUtsqWPn86JGPnpHrtFp6aksYE9kUDkcHVm3joq3NS",
  "key19": "5usnKAkLXBg9DWbfzoCKcLN9q3a96sgDRX4Z4a2nfQLcgQ47WJNUaAKZNhKmu8BzquwwAwEbR2WKkb65SLBFpY7P",
  "key20": "gFdpWV1Zx87VmYUagvyA9x3z7UNPVrKbfTNxoLYgCagDrmTD7XKfAL1d14CiVBxvVbaXgEWynWvpFg9rHbNHBtU",
  "key21": "2RfqeWixSgWDQ3dpw6jpJS72PfyLACWrCijFbMXRHvfbpH4YaamDBVehKeaMUfF1oYgWM6jbmui8wpTA3kjK3Pxy",
  "key22": "4UruruG4YPdhupYQM9QWtFBm2XGrQVszDQ6DWvWMS1gqY6KgSvydASKJ2TGPKXrZGXi5D75FUrFFkjseRUpAQsMa",
  "key23": "3i49s4T5wnzdSi71h27iJK99F2QcPVpf6mqpvvj92TEuJdF79fFYBENFYtThgyJWrJWxr5vfd2FTjexEiurR9viT",
  "key24": "29v4s8WL2bsMtG7hTzBu3gztvzuMe8DNaqK5YsZMSv7ziVmCoBCDkqWq5JhsSP7xN89Lxa91qsSX962SM1JuZ1Jb",
  "key25": "wB6LisfRF9mphNGJn3Z2e75H5xsgA1fGTbQz9EmPgyPD2FwM77axAtdxoRBTEGU7ws69bSmwSeMRz76wzQB1SZX",
  "key26": "aEe75TKTbBhCqVwz6QN13DVaWcmpBGeqq4QAXJ9AbDm8qWbUmsgzF1maS4MDts9PdAsDzga6qCyR2itwSF4U2bB",
  "key27": "X3j5ajJXkXpofDhMB2sEYgegxCrTXbFpNUXzyJ59N6x9faYi4UxmYhNo77gBRYNoqena4htTFUskKvf8QdXZsMi",
  "key28": "3GYq2Cto8oZHVEq5jLjcFySpvYUa5AMjFEJJiaVYceLKTbvwcUjUHfbYFwcPNgZ9xGsW1J9gVwiC7CeeLUXLfa9",
  "key29": "3n3uehgFjLcp8PxXhoh21HcUTx7NwWKKfJpRdMBsaRRNboGWrJRZZvkPh8xuDQcLeSEiu118gM9si6ruXkgR5tR2",
  "key30": "5yf8337gm3gzzFazhVmd7h558ZqBbDTcWCdFyPax7z7r4tjN6TEkY2T6nLaSc7sQcPNNazmKG3STPseoyReMcEqX",
  "key31": "2uC2274wXY5Sdvf22VoENsjLihnScQkwMwASHCXZpMKgZVsZsQaV2s3X7PfuEsNSBqaPHkBxwVMyGmN47CHyg8jk",
  "key32": "5KwaRrPoxzeq5V4DmHPUnULkNQswvNjiUrfDNo59W9WLSQ9bTWnSpUEN9QNrXJkwayrof5CKzgd7AbSwhob2yPLq",
  "key33": "5xqgbYcMZHhCXwWrNdYjHbXqU9rpvp9YZRq4zaHCMTabvVhsdU2vTdudpXDdGA6GJsrbV67wxGefxbayUDCfeRrx",
  "key34": "2ydchJ2zck3kckYXrsKbjsNyjzGKkcKu9J31XfYwyrZwMQRGs7UGKVrkMF81LhNrjeCLmjcobkLBZJGWGxoJ8Sf8",
  "key35": "5euQsS45z5GHNz3szZ85BvaQiTgKnH6FfeDkmwwShqN9B54Pnt9ohfioDqzzyfhzEpMnXGxRPqhwsM2Kd7SXAPp8",
  "key36": "5LpJ8UoTsMLw7ivD5MTVJ4wFwyDxba65YW3KHyhY8qyrSZuRiC4YWQ1UW1dyuuM8AL8tzs1HN7kuHTnj2xinBwbn",
  "key37": "5NjdzRVTN9dANER14UCX55Kh16kPW5Rdz8aumaeKXhLedRHrU2btGex8PyQd69tTyMxffiSdsnfruVTfBVG7AuPK",
  "key38": "5dnAYGBgKr1DREuvhd4VHhB3o9roSDgfAv7wECk1MFSpWRfnqogm5cD68ue7LFb6xXXh3ewQ4s9jfLpRQkBcGk8F",
  "key39": "5Y2zzHFteS1xaxmXowVqLxb2g7rMce8v2z6BJrmfcBpfpjp9H7sAU2bsPNvmqFBr1PAbQVGZSfXJbYMDRN95bUy8",
  "key40": "3yBoQiepMEBoRmSABn6QL3WfU3stp8uxm8qZPmL6CLE4zSRaUtcEe7xSvHX356j4V6LpmrS6e1TjwrGbrwHjxKyZ",
  "key41": "26T9CqsQuVXmPyaU5zdz1Jxrrdf7qKLU9ET8Qsz9iHmueK1K6AyeXo565ZogpAZD7QWLU3aaBtnvAbFsTG3SiMM7",
  "key42": "uzYAiT41aMDQcHa6BGNd1REaDZQz56BdDVPPYnUxztM2rozrJhez2C1hx7Jv8iaR5JApLHwCnxeT3R6mtM1DBgF",
  "key43": "47bVKN6aamF8fpzahSyHNncZ7My7bQ6DRVtDKJ73h8mMZ7Lu1BFov1AdEGRqWHGphwhLPVPUerZNnkKzxPutrTh"
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

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
    "5HafYhgkMv2oRrfa5ARy4GwN1ezzzTUicoe93s1Mmx1mDBPCN5ib2bF5dwhjnaGYu3RqHDfh6WW55viFthUnmRXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDX6SYQtgC9izUxi3HMP1BV6NREhPNvURBZSt8p978aJV9kQefKEMVY9QfFfHQKmSYUapZ2nSopw1nUCaTM4Hid",
  "key1": "3MHdg5LsWxXHrLAFtc5Bp5VL33Vm7xK6zzyrDmyU3gvHKVGkL59QZy8y5yPaxtyPtbovRqxoGyTsijYiL4y7AtV",
  "key2": "4GJBiU1uMeeh2B3nB1qKacaWXbbbXajY2eUVqzwBbxVuGo1CxdyANmeRzMED8qJK5qJj8sZ3pLxP4pZYHKDauZEJ",
  "key3": "3uJ1KjFRjt3HXAYF2kRpFV8ZTJw1k132S2TKZW8wkuzs9EApFmjJRZ4zJf6AKwQicY1RDSBH6Uv5cKz25oRuK6Db",
  "key4": "3S8725paVdfRcoG2KtYckhWW9XCQeHxTpS5Jut58Kpd9UmwQXVJJiM8HRNWKBYZJ7x4iHYpVDNWaD3u7iEogTwAX",
  "key5": "5h4xZfMMWMSSK5khQiF3BCoVpKSzHoqHQ5v7BxiVgbgdj4bmPYkmS7FCK3DRuXsvUzDmE9txP6CkRSxZVMVEZvFV",
  "key6": "4QzcVJZK7dhL6hpedveyV77t2xcY589LA76LAh69PTaWfM6h7RFRw7pJA7Afv5MjYQRjmW9px2f2D4ZKYUsbSUW8",
  "key7": "497gfZhowKXoz6mvqMmF7TJ5NdW1RWyHUPZCtFofbEGBmWBQgAi5d8MCySmvgJLWi1civ2aUb6zF29Zr8GC8WNYb",
  "key8": "tF6CxMpwuzHjAEsuaMUhwmTJDpfneTAk3FsdMdtznZFzNEkzLRnoEVy2d8ru9rj5EVM7tctKxNTFqm1uwHrFHvG",
  "key9": "4R4xLGW1N1GchvkUWB1GysQcKMQvhBXV5bhiXRkHK3qbCJFfcurKcrEetTMLKAHwR7Z8mCjVUDD2inSWLAuquFRe",
  "key10": "394wrrq2qN6rqqRfFSfhBwmqKhhDwF778V9WwNS1WvLpShHFgPnoHJ6NPxh1E7pigXxxop9cjPjL8izYic9UQLWV",
  "key11": "cTFST3KwHghwHAcy2MX51TkW9aGTkYZK6oGw275j45Q94fvJ1UFDgEVr2YfMCLLyQaENNWyW7wyYB8QuSLcebUJ",
  "key12": "4JotVGjDkBRTsSHfJT28p4W74YaYCsxnL1dEMRKxFqjZ5jS861GSdLssS72AAQbUvajnBD3KEmML3fL7Ut4zc1At",
  "key13": "ZriG5oKKit98oCSSbw2Vrydfnwqtxz6Py4RRtYVMXM2bi4xJ4kwLPQbhaWkDU4s3LMJKQ9n2M2zw7G8JxDhbE1C",
  "key14": "4pCh24DveyAkvEVZnAgY9WzUuNnsVSe6F4uJyqMS9yM8BfAxj2uDTLYZLzHnf6y4GZgmTW1vyNgUi2j18ktbqoQv",
  "key15": "36d84ZN2eWwZ5qLcYakpohbLoaLFutFQqpz5dXy2bzSFAPttxH36PxRsd5BnA6jZD8WqCqy8F3skR48ttMicRpzZ",
  "key16": "5RA2TfRYJyH6qwt8QExR86Wwn319g7taFX4cUR6A4euo64nsKdxXFZEcBQt3hyVyyHLLibjRsnS1418NmYsUua9k",
  "key17": "2RDbgN79PscBayLBGdi8KJK95udDfBp5kdCVFZmbfTW9AsbrDw67Mmjz9tf7tmUwC6AZ1nqxtFmvhEvBsiB7CvS3",
  "key18": "4ihFnm4LzmiwwDxEPx8t2mDu9PFZpp2Z14mXyhzn3LFPuxYvUVvpo9KFTjnKCwBW6GsFZuhsb9E5j1eKQdjo6q2X",
  "key19": "hJ7pFDDqWrAjp2s9Kk3SkAbHZVTnjSho8ynqHLV651edBV6mtHdc5ZJAtgDW5tYhkP23T3zH1wZD8bUJPLVAY2J",
  "key20": "S7mcRW8GwHsg9nG5GoqNMkqpwD7EyZQRxJLae93XoxkGMq1xGiAawEvQqQXAjPZBPEduvuUsPEtvz6XtbEDwu1p",
  "key21": "48oT45J5VsCqTagt4otvVG22pCTyA4jPvg6UGhUhufNo96eC15KRyvKVFn8GPG4Xia1wY8PfrtJkvZ5XGWtNPnnn",
  "key22": "66SNbxSxxWWgsEgP4oHS5KyWFVyrdAiMM5DuczXAACMT3pYntic6rDcaa4YvkEarMkH9v1UV77a9PjhqUtKGssbr",
  "key23": "aXasYPBPLmHT787VsApsLJHCReKzWAtcScRNu4kLxkg1KjvPxa6ovHSWSTZMcoeA6NRxkUE7xsZs4MJehsrsCzT",
  "key24": "3uVwQ3frp9AKt2Pi4s78vBS49drEYKZ5BSbGP13Z1hXQthA2yvdMMrGAiKdsJ4r4R6YsHederbkt5DNHg8qKVm7A",
  "key25": "5C7R81JfiH9D8wUgKky2fQtjCpKGJ7oXQQUQ7tsQDaY7ntjLdMVRxUUwYmYKk68XWFj686AbomDTFSgEBhz2iiMj",
  "key26": "5zYsdibL3wrkdGga1SYFrFja1zUx9kjHJiwLdHwkHXdG4vpZsYF4S4pHET1Zjy1WSvxGURMpSqUMFcRDHeVbVsdo",
  "key27": "4A4qgyosgpB8x7mhXbjX4UMRbfzWbNE7s4z3jYwZ69hEhZ8QF6SbL8TEBYtzkRG2wkiNUsbomNjS41azyR79fiV8",
  "key28": "2MUwWXq8AfN5Haq9V2UifDRA6S8p4EzrFS7KzpMugfoS3MHMTXwiYGdtLVViRzBdtX1dSBFzQb14d5WgGzc2JyV9",
  "key29": "58VudzDeHdBFQWPXwaQACwKjd2Q75Z2YjaAxrjvBvBDozXe4mLV7ymuM8cet2e1qBtM7Ge9kWTMdSw8ji71YbEmV",
  "key30": "d1LRKpq2SaZ7bPoPDRtf3DxGPfpDVePX6c5PgZocomDeCYdadhU1bet9rvcjc5td1BqShWWLS3REe5WJM3dogcZ"
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

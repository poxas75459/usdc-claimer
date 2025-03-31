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
    "4CjnQFpDoyvkgo2MxEQrcEJpUBuKcbNyVLtHftd6sQ9YLk2Fckajmdqqht5f9HcK2DHJPPHxajCmbAMcfwTdTvx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYPVPRHFBoCpxxBuQDJBFdM26Ue8aK9CYLgfzhGM3iAxsckaq5K7EtWCd97qoDm7qauuMFibBzCNWLfR2VrfVog",
  "key1": "fTtBabSrP4FtPkZQRXB9Sf1BT42bDhFDaFsgupFgHsU78pTLxmMDRQgUpDPgyJyurLUEjQG8wJqzvBme4fHZZNM",
  "key2": "3STF9whzPfCEV5HEHRn9y2rr3kXpniacAG2M9FQoiqok4YbNjGy1h7sgQgtQzcn7Cy5QvXH4kyQcDdiugbtnXMeT",
  "key3": "2a1wqEiA5jiCw1FjnKZkp2NCLNt3eHoUybNSr89r9K9VgVd6ppmv1kmsnZcB6WsMg6qc5wvHupjWWiLcXDzeG7CG",
  "key4": "2nhSquzf5s3TDYLvafNXzJUTqrFg5b7w5uNcHU294uXr1SLoP1paiCpDSeRATib3AMzC1maKMQsAdBcKU94VeXzH",
  "key5": "63CSjmgnK89N54qtJkb2Hg9AM6BgEYnKgbm1Vwcaqr1Pg1VkQD1Ckb6AKim2mdjnXUaExS8EQQSxsLrHYxQ5BdJv",
  "key6": "UhAVcZnEvkcs3wEFyRfnyPBgcNwf57ibiNz6mYZu8ihNENuZRyMw4xXFfdCS86DkPJQYFkqagB2jG9wHNnEoCok",
  "key7": "5Ffku8XMbjhNaF5irCAf4ZfU38jmC1x9uGtQnEt2UScvGsvAATTaEPM3BHHPJHTCheTVjHcerhiVP3wfW6CaoEyj",
  "key8": "2zSdwAU2Cw9x4FLgJ6rGZpiGpwz1FL15TPDF6EvK9C9icc8vFT6tJqdmT5ZrhxaZWuCshNpSZq7jBRjNJH9a1kw",
  "key9": "5wP94kjj24d2wAa5CEzV2wcp7YdHFQwRU1a2w3YfaxLGwD3iya6itw1nMntsK2DsGqznwm3Aj9TiPKG7MWq6kVRG",
  "key10": "2GSLjaHdaKqUYDVQqvQtQKkJqGuYpTNDpXBTwD995VhG6Qt9Ctci2igWNdajqrjVbv2vRAJsjdTY7HwGE8WTzRrP",
  "key11": "5simKQ3naZxjq29eDhHr9RM17NDeR459gXVB4ELSQ4gpbAatfUN4iD4TJd3V4z9r4wggmtBKZwSLXq4w1F6wnAGB",
  "key12": "csir6WYc1vAyNJvxXoZydCibozsTECXCqTnc4sYNDHHmwUWrLK2aEnhwDpxx9ZicVPb4CLaYQitVo5xJiCKvgF8",
  "key13": "3zcE1GtHQ2igpx2nk9P5ce2P5KJqM2XXGGf74WCVUzFQ4iBZTDxqCETYDgY6MySYH2vPZxq7DFALAQyvFKGC6BjX",
  "key14": "5emGTy23qsYShgxg4i3K2v9RGndvcMhpWbWpyvmfysUsWnNNdDMY2KQfHeT8MhbrSjZBdd6BrV5GE9q1NzacdbUM",
  "key15": "5XGzeFVDD3MvhhuouDexhxgnZGpSS11UN6pKD87y6KFWbcUZWA7S15zXrt9eh6hcBfaPw1GLJ31X5eJo6q1YrCRp",
  "key16": "61zpNsdCkVCjYSPEbFjHoNm4cnztuX3g1cfNRx4iXoUFrjCPxpEi39hJvaDaeEGCFr8Zf1vrtU5swerYRubNRBkG",
  "key17": "4DQEQe3pSbKQL4YZNHmdGzKFdoUekfNViU7nbGYDPRcEMV21WFnsHdb1xAmNhwmbjF3abhF7jS2GeLMwQg2ooSUJ",
  "key18": "4BgX1iq4FbzUJAKfyQ24R8M3DujPqc7BvvzTn9yKfCyvszaZArbMtNhTTt6Swcgu7swpsCjUcyjtuDf5MEHnhv2P",
  "key19": "2NvWuf3XWXLnGkhuapkv8Ud24YJ3FNBCbbPZgG3s7FV5EBbsLSfd3RPzBdCFNFdwFdqiwy9JQoLt4NfQbykWcaDz",
  "key20": "9nbqxxbPwMpaqdbxcodsf9gZuvE2UKNNqcbFjNyBpd5B73V9JtccKLtb8dnVsEbpauPhCiZtzfjg9XxXbHFGx1t",
  "key21": "2kcwVqhCPiTZafuHPMcxa91TFxZpC1qUEnz8fn2tYHeiYFHNh4ABngfDfh54nLxHyuG25n3hnh6VY4afY3inSpG1",
  "key22": "bx2dDKPbs9i6NZD8SseAWYuC4FBNSQaSGQsV6cwcr4or1Zc3gYUYteKUNjXwUW2a2ntQNgRSvW6B6XjJc9wd1K4",
  "key23": "5DNWgv3xpM6qnm16yVFRz1gibqZDR6ogqRMzFi95vqLgdkFhAZmvEt9VSsUrrqHpf4zTkbwjzMgwc9xGionQWjEJ",
  "key24": "9HXSoLn5LiPwAfnBKxBrJ8qiLHrkXwSp2oWyX4bw186ZEa1fNrZby9qN3uhsW84LMyhe752WSxgwrzKQszccr5X",
  "key25": "4tN8Axhubbf5Ztc1GmkgZzrTXYbSRZUqsNrdrnHkqH7R8XqZC1a8gsgN6DfxVAjow61etfjsGZsp7pREf1qYorw5",
  "key26": "EgBBJb4xqWFpHgwaUNWhwjXkDoXw5F2CKpbmW42Haf4191N7pweVJBYDppht1VFqUSLFAAtMRS5Ys92ARTpSa87",
  "key27": "2Q3pL3U9F6zF58rWoNmBMp6xgr7DcZkLKNDLeA2AAKwsWmcMSUNMx3Fdc2qyDqTGkSF1j8eMKeJ9NefEv9WsLVEC",
  "key28": "5rWH9LwDX6Q1CPVVmKb74CeYXtgxXepD6cHRNbZcCVYWDtfKZFSj6LPQLc85thSY7nrbyqpuDASFu9BbEk3o8oSL",
  "key29": "4oQneY7aW4fyjpC9U5TWeRmcbNgroPP9cv2d1AMK9co5o6WNrcDV3XFXDB4yZH9XQwiK66VQwiHt8ttnPXtL18d9",
  "key30": "3ft1hBxBRNyec6b6VKGzvhB3x1bS3QLoncM1r21xoQW85AMk22SmfQGBhHkvZhLuATZ8znLKZuKZ2Lj7keurDVSy",
  "key31": "5H2Dj7ZGL2fAfK8ZXK76RsuVcaWnidmm2fycuaCieTwaU3KQBiWPmek3NS9yWHJYqFHPR8XkHNwWjTBkiR1CNyKt",
  "key32": "2serfAFKkkCixcAMBaYyhhGc2kbUGkvQ4f5F58c6ihxM3UFzFauSHhyY64aNZoaKV12RWGByfa96HuRfcBer3ZoJ",
  "key33": "537d96VKCNHamEvPCBce5gNYn23ysH93KwoQGt21bSLSYJw54sfkrx2Q2EQHU9igxqFtMpgWT2DV3RMfA6us2Hj8",
  "key34": "5zVTYbgK39uWrTqvbPgntG5QfGWDhRq1t1EB1Sqn4fgFg97fdYbV28Urph1Gqj991pdb2Kiwym6NNmMAeLAvZnre",
  "key35": "26rkHz4v3xhT6FAu5DdcBF6QSARpakgMx87sY6dNw8GVoQckfNUY66dKz4CgKab5Zm3FurSmBvcvrUKgzQbw3ggL",
  "key36": "2j7ULdoPuVpVUo3xnftE1snZmPNnymnc1VwssebTWnDP79S7GWNaQggsnWKjacpVXNDLJ1ymh3Zu8Yd3HyKejBL6",
  "key37": "2Lo8poKBtTmCziqCG6jb1tjtycmaSBzjGtbe31b2L8hLtbDTVgRfqz2KtBwGWDwgDPhUWovd8VdehXk8x2p7BQ5u",
  "key38": "3N5vraM4fuY3cqqvD2CujZyyzmvdUCyB3Tq73VZmaewQ5uTX3mLj4SHbgLedvysNwENc5YcqThv7y6unwCvfE6WU",
  "key39": "3nCcmsjWqm1HsWczQSWtB2ZoZFjHyo6z3J3UMGGrjK28ztjJdJvD1qmnxT1C1fWKcGWQNWR4Yf7sHX1a3cLxbx4P"
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

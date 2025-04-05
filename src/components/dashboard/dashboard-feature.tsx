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
    "2ohf58N3Z3NscZBTQYyou9ZUC6stN1vtSJBPMh4kRUgn6muYtT1q63Rc5nDtX6ja7dJb47cVBGzJJ7N49p2eea8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WfZr9dRbq5UdRgFJhSQcV8PUPftU1D1jdepM6TStGbDDJ8Efe1Ss7B8hNe6t5723VMRLYWULKmzx84eqqJ6dkCh",
  "key1": "hgHQ2ZkNb7EgEA1htwycePRuxBTxzJgjmA6k8d5PtKk2rjq1nwGaxis3rRvTyDJ26EetfTzeJtXd6GEkd4RxQ3A",
  "key2": "3WFNYgEZETc2fC2pMeb75sbpkg8jzG8mxDXZBRvU4pzr9mfJfDRcSDV3ZyLFmUZzQfd53MBWKaraX2PJi7USaQs6",
  "key3": "pcfSN6MrsNcN3zZ2rHgAhNQ7XB3M26rYYRpGayBwJe7vk3XFcPddNWBMvSBYvAzFMsLhKSFFQxKp4dSWJumLL3N",
  "key4": "4e7HhZpX5FPS86ZqbkTSC4b9agSRqFCi6B3FExhWMdcGYaE184X9b7v9DGJX14YFTr5J9hvmJw5AjvLRSxawUkUY",
  "key5": "5NDYeuyZpeyhjQEq6zfTnmRucnyuHT338MAofuzwY65Ak6UCUw1cT9AkjshCBW6aTSKegvP18sn5p4S3X29AEjZv",
  "key6": "42eVeQM6HXE9rb6uD1zfD9UydPMZbQJuGuMrRcZjweQ8wJCQKwPz6XS5AUiwxYffetpU53YbP2k28hqHUi6GukDQ",
  "key7": "3qEqajZFxSuyC3rSMi3tWAZJedtHxKDjFJaZntpB2xF3Gqphs6uM6HRQAEgi8hM5aTSPPiK98d6GEmT2TvgQSMQ1",
  "key8": "42tRWnUyEx6W2vjSiGKkRvVyvkDASq1KbFxeMrxggybyxcLTheDU9wLUJjKkXVPe27YCWLcWx9K7py9U3j22JwDF",
  "key9": "3FnUYSUBdgj2UVfYoNYqHC26tWoHH6vc4Y99dNdiyJg4ev1FyVhsxBuyFGArjG36Qv4mWvxzaYxCeVyGdycB1QGA",
  "key10": "5wxGvJF8MVPhR8onHvGMGFxNztASDrCpCRss4KqXavrDdMJCmwKwbR6Ey9tdUBYmzuXuy758Rusgro9Gn3aZfYfL",
  "key11": "36vux5FUQ1wzXAUezkkjDaPCEk9Ayx6321NEGYjPW4FVf3nAxFL1BwYtQb5GGCW4MNaiay9Lh1Xrr7pzQ5u53rvi",
  "key12": "4FmkvychJ8HWue4Zjo5tpHpx1UmUB7n6eho1rhGfDFWRuRuUDRCtnE37gAQUaRTutv8f1Ym8QHM3khnmLG3x94UL",
  "key13": "5zmCNeNABpDrZcjGmuhF1veaQiz7DHUSNrRLLyBeeTKtx3owdf8vV4RiErsXgfZHLMVNEtFLpGFWJaN5Md7ayPLZ",
  "key14": "yhhMkDUe29z5yeCVSvbSUFWjjMxtqQEt6eweoofjavnHEYjnB8sBJ7Rx9kRJvgTvwVbW1Smw5Wxd2zyp4o4YttM",
  "key15": "MRouzRqeyxaXbmBZ6yRtbWiHcuqfvCtj6NUfX2N8HhutSSKvuW5ANkZm4oHRuwA5L5cKknT3C5R4TVy79m2ewoJ",
  "key16": "3yxGfJVjd8kkxKAVa3buZzEuBiXEjUbqqeGjo4ZFyUzBCMRwpHFnmTCwJ4sRwmzmb9X1BDVFQDGb6fEu8gewCsih",
  "key17": "5k4EvuPw5ajwSTKh9dBUb4Y3Krajys8AaLMw6D4Ze9Dxj3A59Hd5ukkFZnnNRd4TyVCVumET21N6vcY45DZWpkt7",
  "key18": "4nnbxsP5u3P8oRwziohqY8Hwz5DTbmJcnedgbQTT1tLhbjrGNEM3mj12xKakHHoia6NCHsAgDD65XVrZbcCw6qpp",
  "key19": "57Vh99iqgaLHThjiyqYTfa5GJvmqprph4QMbusBe36bfFyqv1hnGNNiSAqVkEUPF1SyfEZy3xsyXwvfF3Jcnqk3e",
  "key20": "2iqRpsirFVn2SJZNFs9J8MGBaPQkm7cg4QPGVAmEoNamxqQx68hwyNGCaKv4FX2KHPJCtWLfpUk6xGC37fzjJkkn",
  "key21": "5heZWJTjcVBebj4MjhGZ3fJG4bN9xqCJVQi9LK4PTZQzcwPGRUjRfSihBv1UZQivE8JEPNUf221D8ioPn8so4VKz",
  "key22": "4c99f9L1SU4RgTqUaVwC92aNzsqKHD25CRSHCeiyxH3jhDMGzqJDJmL3ii57UAwFS2Lc9am7uq7BRRWtxJnA3bz5",
  "key23": "57Fymwt8qnz52Yw4SzNvabav3yt8C98qm31cVekgrxpniPLe1YTCLVeuefgyh6pzGXuiTLoLF4qTQmEQ3x55i3xz",
  "key24": "4v2Af7mDc7GjRfGWYfkwuB4tKkc8Am2FKZ6xwVBc69wZuYVrV6biQyCttpvATyr5kkVxFmU6dCehzmKy4ufg2DmC",
  "key25": "4bahUh1zcE6R6YicEQuwTHWQPKGXSmoqZRnqZenjwLVdnA1xQiPZ36PiE2HZamzSePf9GgZhyAbAYfzA5tSWgYce",
  "key26": "4v2adWf5JgKMMnYcX1bHsGej2cWKeP7LAQkUKEqt8pfXUTSzrs7m8SGoUn9TyAXJuzbGkY2q3zVagyfFk4Y66NKv",
  "key27": "4p5VUV5tY4ArLCphPqXjXXw3boZPhLqyekoEWu5xzaQnwm36zASA5QTTtuMhaTKgfrH5nn37XongNctSgXL29vtQ",
  "key28": "4cW7MkGZz6hPVmrvsUKcyrdCZme3a18jVURMkjCb1RPTUF17Ju4NimSojGKEYWZvaBzqQRifrBJWeTgeBXoYbmxz",
  "key29": "mt3KTHrUfs8dz9BbiXwwUsVUoJUqhBtZZAQm2JqGvLJkvMeVenipGN6cNfB2qs3yMfYB4VWFJXoMaJAMdRFbWTm",
  "key30": "jweckCHVFxxaXazTqSYG8hScUsWWd7J7j9R5NUznNYWUcUnBG6Z7X4AjVmyKUtWqWHTLTqUrJEtPUWod1uoqqhE",
  "key31": "5UNbYuS5dsBdkyc7NijUamvwamsEWTVM4viiav51oryKiMdXiFAWi5xzW4qVPNHTUxG26DRMC9EdPzyvcwforhD1",
  "key32": "4zm5afiHDhAHfMbwULcY98b5fHaNsFRF6SjbiZKbGTcwXepajrMSa5rM1mwtV6PStRtHqHgerNLshgDRPWyDb8f2",
  "key33": "2QBYKG8zyMCRgngPx5ffmJD6Wsda8BkNrLiBCjLx8mfU3ziHBP358C8SMHWeZbcDuHqrArFQL1WSHXdfnd8CAXTo",
  "key34": "wkcybLCGopZiNhcPPTbdkhXoEBKkZGCNzckQ2o4wauTtiSPGTQ8Qr93Wm9fLKWBXm8YaXw54mXmwFT976h4cJod",
  "key35": "2eCpwo7HQK6GVsWcknr7spRYDKGG3pTtdZXUWNnf8JzKCRrbCbpcCsCeLuz2GJAq14voqddfxydUwFR3RCLHzxhz",
  "key36": "5datTtgiPnS5nxqbXn8ssPxoicp91FN2Ud4JSEqqfngXhuiRtALGtXmuxoVZhsUqDUFe8STQcXSYj7VAcHL1xs7J"
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

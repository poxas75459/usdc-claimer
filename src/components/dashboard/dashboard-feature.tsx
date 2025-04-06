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
    "3SF9BYCQ8FPCtrymXEyyqBA8KPy3xPGW9952qnAWUcKEoy6PktJeAUueUePtMjSLkDpxTWghvSpWEiYDQpaseeQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yAaMQbCDr75s6BcfFVMnYkBqEf2DQDywfSh9ha8L877xeTBsjiwi6psHukhSarddUNNtg4gpVCXK7xyPJMHFjSR",
  "key1": "3yFAUKh1uh8ZdsJQ9MpsZm23AuurqV45V7SJJy9sRSZN9HN8MZe7zRtoYBi9VXfJfEeNRY9civGNPsG8mEeYiGgg",
  "key2": "N7jwqe6RHD7TFQXKQGqeZzruBuyRSqA2tkyXLbRcvaDp6E5Z2YFuNHpuAupraWSAbB4F4DAfce4W5anfYcoT5d8",
  "key3": "3KCghf8fKxLj6PjYvkQWzZQm96sGdTimJzek8hJfs6pkQFUGb3eeUC8Ejgvm6B5Jtwrhf9dt2ucamQMScTujXPmh",
  "key4": "4D57X1Qwvdia1p5oqcoLSSP4VaR1JtPDqXEecueonJGybi5PbLQUKpqJJoQpbQ7yjgxfaN9eKSDiaPfzshDCbpD5",
  "key5": "5c6XM6ekrepUHaVHCy5KpQdyT43JHq7bTvJKTAbZxB5L5AoRGkJr3y8izmVkKL6NLZZ2KH2mKrFLLZ86eL7ULfjr",
  "key6": "54fE5hY9LaAAB5MzWSr4DiK6EAJ5p2ZfK693rUyHtVe3hcoNvwpojecj431dpjxxWXaR7iwv1T6xS6ZYHMDxccr7",
  "key7": "3oiUJib9dF9fdfZS2CVSbA2vyzpdgfX8XYgaJqpupzAFAYCqoMi8v1ZFPmVLDuURQczZVanrmyqsuWxSF4q5ov5E",
  "key8": "2Y1srVFuvWnDp3k9muJNLteoFpHPzdSu17i2arPjPfd7pQPGYvzte8bLTpfwKz6vsQ1wmdLYy6BUN25XoTyHeBfw",
  "key9": "2RDmo1gjKX5ZpWb4VVqZsvTNiZdcFqZnYfHUEudejTW2z5BMgXJrg15iR2x8bahCNnEf4SaRCZHMuijwqvYwCLzg",
  "key10": "S11auLyodecEF6AX7BkrvsQu64u5d6pZHkiB8DhN2AvYG83EfQ4SiYSYoZjoSnNF1Hc5mAp7WN9yfhAVVKHDCbA",
  "key11": "5RToM5XyBczJ5ctnRXcQc8eDHAdzTwiG2x8NpoM4qJPjdVCd6497oBY6M3SZrfeqZEYuNif7nrSN6kRFfvED4LBK",
  "key12": "2TJDhtC5KWnsWDVamgPpe5g7A4GpsPGshD2pdZFCQLFNFzHc2LZarpjLdUiMDAzEdG3Cd6cEXcXfhFLZ6xMqFbLA",
  "key13": "4LUSYhCH6afL7FVCaV6JQKeVzsk5qxx7TGHxkRpXdcRV6zieCaN9uLRr38MpZfL6VVrHvrX44RjWMDNr2QWtrN4",
  "key14": "3vhNfK78S6Y7mavsZ8Mrh1tR8W8YvVZ9qFqmQujiwN3VzujmxXuYQyx9sYRkZsWP1bbs7aehLeTkn1kUdWb71bqt",
  "key15": "5rtEVGRj5Q92RY8JBUuek6nNace7jezpeYu8YdJHjSzpsRFiu6z2dbD7htPgoXD6aXM7ptwHP2ZNgytXfQhPTRJj",
  "key16": "3XXPjbkw4E1DFvfCGVMs964BzjZfbZPsA6gLGUTCi5AMFLouBfb9BvzidosxL1BRYxtPsutVK8B6DvQMuzALwAez",
  "key17": "3NrwsoVob7Jw5TpWwYetXXYjXhcE6WMNfVh8jGKte2RCNj3yVPugcmKwP329DwazJrcM2svLLKY5ypqMNZEYz55z",
  "key18": "3ZttFsgZ6mnzSnn8r8irptUUD7fR6x8bZtGm7Z93g881qs3EY6qjGjZ4MjBMUNviCP8opkZNgXWWdMMGnFoCnKLR",
  "key19": "4dw2Y8coAXhQwhDkaogpwH2YZwzcwSZvgA19yQR24VevB1QbzRodz2GQGixy43yho9RKznxnUyoV4FKg2abbMVTF",
  "key20": "53qEBBvTcyzUbFEixyrwyxXQ6dKegzhta72iwE67aqhFehJd6HTFQX7WJinTNhjZwrwQ2gcTxnqGLMs9MqJM9XKc",
  "key21": "2mN914Kmsui5vU8dqh1hCFvYGZMwnk9ve7zYzX93sbpgbaTau4VEPqv13PrfWSdTBSkQMa5zNTC8Rt9bR5b7ycHV",
  "key22": "5FTs4QPDiUbEUdELvfJnAxcyq1PeVVPx14jqLQ9NE4o9No8tynWWuBu8cQt8RgMU711Kv4APmJ8dradgvER8gqZT",
  "key23": "4Dty2SYHyajTXHpj6bdCWDhKvPiJAvTEYtcnyTFoaVHfVokKTdySjMES54FtH9aCMxHJauXSvUAHBgEp9JgqaQ5o",
  "key24": "41JZNgPG5XSYVdFgs2V9Z1QsKmmfoNm3u4RjEUh8dymgRpgF3Tt8AkQpiGtwqx2yPucQVwC5s4BiN7wDzCwbdVG2",
  "key25": "57iWgcu87wr6XYk2aWgKqYqP1dnBLZKqTAgcfcSH96rakE4mxjz6XgueebL239n79MzMZ1rRtYAhX6wa5E4HkZtR",
  "key26": "2aNHZ1qVV3pfMm4DF9A1MVHFsrxwvyCp5fAcm1tJxBLXTVz7U6DKpZvLHjLjv9koZmUJZovgJR2rVuqmhP2JhRtM",
  "key27": "5yBoSnBsSr4euGKXahiD2255yocN3GEDo2vH7VCqZ44e9qXjBDRqurPPHByy7b5irMKnFzfz6A2pWY8d4L13ENCu",
  "key28": "2UQKTfDGiimvWg47YDRbsgTZiW6mom1zrUy75xzX4zvn5Lb6d8gGH4bMmeYjMw92X6oQY12wq3zLAUAfcshh1NDC",
  "key29": "4EdnT92o2uxJod1hPCwRDK2dEvdbPk1DEkoUMkTajhuZvscJxnaZ9ohtSHNc2GUBEJ46tsWQnaTJZc8TwL5BQURt",
  "key30": "sPGhhJ16SJohy4TzNies4UH1p4XTARUdiL62tnP6475rh1xwNaLXHkBwXReF6hi5ndYWoyHJCPPTUgsrD8iz5kj",
  "key31": "4wtc56bw5nJsNLytNbS16nuqKPzG92rkvykVsbyKahPkPxweoPV4rEoyiQYBxBqRqns3SJiU9RRrYTZLCwHF46Mg",
  "key32": "mMwyAfeLz8xq3WEuFPGjjmM4HB9rxqmmYi41beoBL3b23gTFGwGUNfJaExiAkARGwQPiBZUVhSdDJuRqrrvtH9z",
  "key33": "2JRqcRaVPWnYLSc8UXED4K26dsGZaAGtBGoMm7r6uqh2yxr1iXREo7MNxFs51NWEAJ8qcew2UjdtMBT3TMiMq8t6",
  "key34": "5ycSHN5Vww18enixSVnz3z9tpZSWoy8YK4M7q7wSTnqQRxztX5u3FcY5VzNYK6Q8HBqM4ZLVV1DXHKq9MhR1bH6b",
  "key35": "5fY5sThpmSqG1xX668jP8Y5tLAvwDULnwHSSWWiqrU4CR7q5LxV66PAihCLUvPGch9SjJScYGLHXMwXNMqgQ83CU",
  "key36": "3stiY4MbrjunUbV6VZB9SP6mYimXhpmkUcncBAZoLr22pZ5MbuL3hBqKNdwSUhxMqi5KXkqBFzYsDhaVu2AGVSvU",
  "key37": "5vBzNxCW6WQyu7SgJfREj3oZpmPjxnHozjmkb6rqDxvoRVqTW2xy3tSfebSM9q9twNeAMTZobQN62WUZDExvUma7"
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

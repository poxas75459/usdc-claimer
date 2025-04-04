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
    "2jU3Fr2PKyaJBmtghFHdvQBPSP9BJTM5LEc2zrHEnxBo8SknnKzTdXb1RmzMxpVi3YMhCo5G2Kji8XCXjF5e9Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vBp952pdYEAqUmZoUvH4uS6YQ8p8i9XeVTv4ggUTdqdsENy4Nng8CXsQrxbXELsYKumvQptNapUKeJEXUV1cjMZ",
  "key1": "3S5pJvf6LroauUsXFdXd2Xxn1iDwfM7Kuzhwu7zWbp6ggNFHa6dkr8Huo6Tuv2BV8bKZwM1Hj7NK1Ckt1yCjJSia",
  "key2": "2EdWiBTt9ugEhPo5A92n1eUx2H1VXkTaKJfmV5EW2SggJFYif4PogCdHYcWHBFM6r2366kBaxLuuedLZcmPAoXg8",
  "key3": "2BwXUkFnWfRKgvnJAwipeXHniDf7bt7pcrb7aNGcMLG7MDGyRbQuzTy5pT1PrG8939B3dAiJaU6gkFfXB1vKKPAk",
  "key4": "4iLZCayjQchQoMsfvFpgfig6WVkhERDHAxRHxGKEJPYNYtfLrEyVenkxwvswga4tUSDDS2CyyyTtSH9Ze8ceoB5t",
  "key5": "38kvgdEzUPNMnWoduekjszmqLocPAWTEFTAr1hJMUwp1EMJdg7L9DLy4TBJ29bpYgsdJeHdzciU8k9yUoimQi8or",
  "key6": "kRKZvzLFtMe2aEQoRgTJ7ofLfPD2FNvH3Wjja5GkP4v1D45sVC1tnve2ADwVrxWyHrGG1wTsroh6bxCpkXLZwCe",
  "key7": "2bMFuZkPGyPt6VpfBiYniHDvcxpoMN8BofPRs5tqcvktWkgEaFcn8Z8UMTW7UKuNsCqp7jkTVSDkhX1WiCgUJ2wZ",
  "key8": "57cPEgQoyRDsbTUVd4gWHsLivJYP8hVRWRWxUNNo12Rxog8vZ83HKc7UuEVUrz3qqX6ww2bfBJKx6ezk9ZXmSPQC",
  "key9": "icozQwZBU4wwXzwgnXhvbitWmfZ8ks5a4rVgpRDnmsEn1g9o8q9BSpefQBKwdF79cjUm2iPyns5za3dyDapGGmA",
  "key10": "38VaqLNFceWw6KQRq5F5s87sgy75Q4XuF7qjQWsvhW1ZzD9a9rxi9EWdHPRBA2u3ihEs9bz3VpPMLiQid8RsM53m",
  "key11": "4FcTe2KJSyW8ZD8fCFY6tg6TA33hQujhTttuLeiCCPZ5SJ2ut4Ny1rooTz1sPQeHf2sbwKme9uQoM9qGEpzsmUcB",
  "key12": "38uWiBCNj5Buy8Sfb3sd8hFHZnQ1LfvCBmwcamWYRvHtLJyjZCLUiJcY7vK6Qs1LG7jGoLWaax2eeqQqhMQFZ7n3",
  "key13": "3bgvwrtjiXy3zJETh3MptiWecmScSYNBYQyEZJqKVt5zutTfUtRnkVXVMnjPqh9JKgHz6yiPKGq7M48ahy8xDzuX",
  "key14": "5tdbrhbXtpGJu6gACYs9fpY1hBu5KBL5hCGTZUMjW2Sv5Rfc8X8dpJgySkKnfzTd5DR7wkWSB3uEQDfCZrSfCjgP",
  "key15": "4MnU7BU7DR8RumoeuDudrDB9QP8TwbhQDeC8UcipyPK8qo8QEC1dfufk9zMSV72c1UCABstxF9eicvUMZNvYA4Cj",
  "key16": "TEWD7gif3X953xbm51XU9LDgZHm2rMSQ2peCRoSXiBs8ChcRm9J9GSKTxRfmo4M8HQcBkcNqkjLeDt763ZeWwF2",
  "key17": "NfRt6Lx9wEX3w9nAo2cdRgwo2dty1ABhZ4Sa6ZjrqTThmyH9GmcvX9PwLbXQHi7XGsfUs8ip3QuxZA18byCTn6W",
  "key18": "8EU4vnqi7Y59GWNphAVvCWjJESb88RXf4CTVtDR6UN8QFKmewVvUk4wMunhYFFire2gYoDmUWDKjSQPZnfZfFFh",
  "key19": "4SNPY2Hd2XL4dHwhWTL72fN33yenfqA91e59tqcJDUAxFQkbq7npBL77otEWejBpTqthH34CDYwDzFGs4mzvHr6",
  "key20": "48MyJ1maf9Zve8Cv6keLhetMp7X4e5Vjv6CwH5Q8q2VxsYuQnNTcUnckQT7Pju1WyajFig7SV9JESLB6VghUtgkN",
  "key21": "2y1cW1LmgqZCJ81puSnuqEMbohKfnKEomqQKYmy1xfW69oZxJmPowVHXMoTC5DTwnhixPRAEh9oTRuYHVCocRqZz",
  "key22": "3qAzPh5bEosAwXNLxvDTxA9RWZeorfLcUfhNXDe5X5qzQ2Am9JogVyQLw1mYyTRJPRj21isG6aqC65RkhZ66cd8y",
  "key23": "HX5ZhfDn7SXiqUYvKnz1adSFmGfAMXrbyBSuj7QAWC7cR8NKx7EGMYFCQWqHmyU3ywosjcsUDYyAgtKUtPtqMgu",
  "key24": "2dd5CWpXGd3gn5MvMNyxHDtTdgMAKW7deKyahjeZ4XnJ51HoxdohrPoQBK1e7Ajk5wiUdYBudbJ1L5hG3CeVHPyb",
  "key25": "5hPreR4TA6kY3VJH7eYCpdYRf73RTkMRQaUNk1dLT6bSUi1rW8TVCrDVe9n3ahBdkVGyd44oiPiuYB7Re8pbWo7t",
  "key26": "2Um4r1buq5Cm8wBUBNYSd27mu4XM5rmNT2rWNHWkTV9nZhpRYYth9rZ8cg25ggpEH5pooT94NzJKs6m86mKqoKC5",
  "key27": "2UjTC2T3cMczK4mVyQn4PXECYGV7jb6cieBGzeFFaXtH1v7ATudwpXZRxhhxZe9dA1bdGeCWksRVpNTGS1Tt2Xcn",
  "key28": "5rLecUMtMwnhbK89FWmgta9fv5yiZW5cYcBfeVoKkHzH2dnDYrufNFTYW5DrvdhnXmqyhDJWMjXhvVZV9AtdasRp",
  "key29": "57KrRDFVtnj9RV1DwEw5mZEdW84cPQgcv7vYQ2ysY8RSa7QchMHSqoQtQg1fCjdoZ4Ey5zMG8uVqGC9brZGtqbqJ",
  "key30": "38TpCo45HifZCmnefGFbY7y84kisMU3EvX4z834KjBJnnM8NBWWyoKhaPfE1GvKKC98H4MNnwZhYTdo2PAnA9tPF",
  "key31": "4MKt2Wq3ruQiyfeBXNFaapAqBrYz3RPwcH9YATLCUkxRJ4L1DinPcNHfTVstWMveBDJBwmuP3U4yBpBkBXeiuoMS",
  "key32": "4NdRLrh6w1o7BH965X9G63mAGkUFyz8no4nc7qGvzCtCio28NTocymNPsHqexfaVQMWovnEedrFzqCiB68jnKTnh",
  "key33": "2jyQGcAVKHCJux3AvpNh63fLJYeuK9eaGgcBDbnDzu8tUKDQJALn2tZPtqW4jcV4vCHMVb6qjsrJ3Ubv9ZJ1MMgE"
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

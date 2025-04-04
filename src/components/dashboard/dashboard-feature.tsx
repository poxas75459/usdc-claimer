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
    "429TuPSUDQKTj8UwiQ85GZxvtLVdEu7oTC4RriQtGSrMLW7A8hqKwaR9vwHLQZN9Hzt9KviRDAMnqCg22GV29P1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oVGViF9x7AEyepPsFrzGHGNA8xBnoyHV2EhTGF3aD71j6KgV2pSzS3S1NqRzKXLk1bWo7TW97iZBJbuQR4JcV3",
  "key1": "4gt5i5NE9z19Y8hn1ypxRyXjtLWPtDqaNh6r6dYwkdh597f4xJTU4XGhf4i2VVSF72W7UiUvxwJ7KcfCf6YceYLN",
  "key2": "4UJPv98HeXuuBsx5iihrt3TTjrXdE6dW2xBZroMcxSeNQGGT77YsUsUoy6W1owrRFSeYgdKD4CBbLVtcDjqHCiKh",
  "key3": "2XysrcyNJSJiAyX1uk8pn2j88yfhwWey4HxzE3o2bcuw6VEEgSzexeVb9wVyVtdaiNyfebnf864hPVCWNgD1bcki",
  "key4": "2CmjVUnyZGdzmGgXUaovB6u4z7jUwA7MGjGsJXgLJyp1Zb7EAfR5jiJpHjpKDt8Kn2WcwdvbmEiTYdUBFTuNKoPt",
  "key5": "3QZtcBY8ake49YkvhcKXzd6AShyYhxTTXgW9SNfqtxCn6APJpdedPkFZ1z9oeCHLJ7M14UqFeQbAiXDgoH24z728",
  "key6": "4nGcJXLMK6eQhfUfycA445bDk5JRmcmMcijmo1xuvGodLe3Xzaw8z3Ba9p8YqRFXKKZBvw8DS5WDn1FzpTdKiosg",
  "key7": "2QifD3b4x2UD7hHwvHAMjKVjrVwZFZn8FC7dDc6hXjwJnY94sSEcup8iSoZ9qtGXWMHx21YrmVQ9jSDdxvvapuRj",
  "key8": "QiATGtRLHTrvFaJyU9E48UScW9gJB2F8CVVnkN43C2jgeSW7L3YC61AqkQJSdWPnPucqDaXb41t178zRu1XppU9",
  "key9": "3hy3x9wFPhrph9uBkAsoyNhFdrgFQt9R1eCkifAYxxeYCKZ48BhKJV86qynrCEzSWnfzGFFmQYSYEPjAMCedZFgo",
  "key10": "YHiHbatYN5i7xQPJv3gt2kMoQSb2xvCeMxriuu9TheH4bu3QFqdrZq7e9BqhnxNDRh9y5QyUPebb2ykp4S6Dyqm",
  "key11": "fLGpmeWiyofH4FJPKyWjccssDYLBh53to1LL5GPntru32HQgiqcEDKtZrygHMwXwh7ozgXFYJfDAi4cPEBbC3rm",
  "key12": "44jgHELMNVGv2CHUhT1KNM1vFKWooYakqFvGWQJF9LXxxqnWq1Eii2bdvYpQkwxS5u9zk6KeSucQJar3p79v3mKz",
  "key13": "5KyiA1YhAiy1Qp7dvtoSgBRFKDz2GakHwk9CuRh54FEMvGQGf9VmiQQiV6nJmWzKcN4CUBMdEvq57NBXNasd2vEo",
  "key14": "3tnEq4dM7u8qHN2w1vQY9pAYyaYVyy2xkmGmxHLHCsmAzosxnRL1Mqc4A4pegMwhiJdiNFD2Ds3AjwfuqXNk7Gc3",
  "key15": "2qHYzKejxrV1jqxbDAkEFmEQxXyGKdH7rsxZ3awPRKxVMBZheckTp7wTJwU7oav3HUPp5GEmFBQnGQhEJbUvFKnW",
  "key16": "321ff4S86BpHr2zKckp9TRUCxeVMB5MMeMLBruKeFGuv5MmmFz6GVQD4mBVpeY5WYr4hq8PNeSjn8FKuteTiY5wG",
  "key17": "ocnuLbqt5ttT6WKBe4GVQc21Ry2gbYfqqxWGitA2Rw1LSQjfJQHhqhwqPTMQs1L9hKpFZqHAAwYcaBek5pWuevZ",
  "key18": "4YLUncCDxnqJCAUJHXz36mmnVLWeMmU7rP8Rf5Geua8Ks8UHV5Atcr2gY2uBWAKhN7tVjDQKLgG2NcWYfd1zQ4Gp",
  "key19": "2Ee1eswZGYgG1GgSknAejKqgMMF9wt5EsLCvkY3upAY8gqPqjjh4TC4HzHxBHinHd17QSAwDtx7ea5qrLv1LuXo2",
  "key20": "BoJeP77m6MmdQ2mdkSqsb1cSxeHomifWezLruhtmBtGJCE2tjip5xheHUB5XHfaqBM9ZHbKvxVwGoKF6MFZBwpU",
  "key21": "5uRUGRiSzt6nYRzc538Qvfji4J7eXfA3TQXsGscEmww5DUnEeU6XG8oRsFo1iEF6rGRb1wfPHmX1wxC1UZGu8Gsv",
  "key22": "32JpnHVB9n6pBq7R8pMpKYVDKECHAWBzh56FxBW7QxmA17JguBvefGcXNQcHPJYfE7shsX92LmRS5hqGEqgTP1bf",
  "key23": "3YCS9yBudbA495N3Tr3YfsmVmCjG5T1AsRGZvgqXMouYSEYraXqsjsBtFWZv7dt5h3bVprn9mK1H4AhehfTofAKs",
  "key24": "3Li7FYdrph7Bm4m8JzwkyCtGGX3aFZNBVRvinBPVhofPLQpJKYKYtsHwxvJYAXLhdP5N79YmYmunGiPeZZDKzMFH",
  "key25": "354qcnNG1yDUgyivAq5YivjhkWK2E3nHHAdTUXRw7b85CJ1VcJq44w8stQ5Lw8ot96jFJo1mLg6vfqtp1Anj6KNi",
  "key26": "7wzZfr6GntqLP5MHECASpLpdB3yZcWnh6UstuWmMJ2daRbTDswNQxAnG78sToYk6v3HqzGTQ9eeeNC5P1u6naEX",
  "key27": "3G7XADK3R8C1aqrENGnoLSQF1FjyeQPV3DMSPjYRCAwBMMqRpky9sWEDL5dBSVCh36Uhg3q1N9Wd5PQ5Da68GZsZ",
  "key28": "apeUXPagtJwu5C23XLBcuhr7g5EJAApMbnBDa47J6rB29ujSJjSMACbkYrobk1aZVY7gJzAybTjAHBzoc1qpD2E",
  "key29": "333uJP3ckKybhsBqSsqpgPhYzFra8KL8XiYwFdK6dYhk95jVTMNSpxpttj8PuikaczDUi63R81dJZcq7GvZFbnbN",
  "key30": "3nmytDdo1HKCEprGgoY561Sdv2XFEaow4yD9NGmfyvGJgLkjcaG5hB8kHSQrgv6JTqnrjgKWRVznRuzeYG8Qv9Wi",
  "key31": "5NTxsjDBeLb84zEsZTMyqo6TZHLvjfXPm5TWyKrsgvrestKArDfJMnBwK1F8ugbi2KJBHLP6uwMFM6iYBrRG2ca9",
  "key32": "4dP3s7DYkqK8bYcVuWTZsgorWvayhFXsZtu9b8T1X9hbrgsKNwoRjJbodB2n8YQaAAqTEZwNr1Nm7YQVwrK9pttR",
  "key33": "25x5yEasHWwXFu3FxVkPoRpfoh9oXL5hnbYPFAjCDsRm6TdU5xGVoTnJY1gSShhAi4qbHxFeqxgsEY2NkKziMETj",
  "key34": "5n1rTFc68nRsLpQfbhcVgdugixYWFJTp4NSdRE4SvgxkVKiDCgnLWEpMMuYdVAKYDWyaB1RuomqqzYLjzEfTsoQ5",
  "key35": "GbghT1r65QG1LfSLzKFbXXgk9jzaoKuk4CSDSzm8fgR37HbfFtrp7WQJWD2QuByqgNuVY5iKN9A2ZLxeK6j9mEp",
  "key36": "zgknpivYQ7NakUF8dU27UnZcEhk6JUrhLHcpXZ3brKx3mg6f699hY47VX5kiYquxwmCSJe2UqBRGau7SCus6Q5i",
  "key37": "2pKMCGz6pVrqt7K4HAwHoy9UQ6N79KN8LWyQWqLa4ZwihJCoupsbbFaVmWAC6R3WEAvpBWLkfgLH4TGaKCri5KLx",
  "key38": "2rpHLEHJNAdr2wKi6zBozuKF1zynaJ8kNewDEGKMnJm76Ae3DXUP2EJXKuWjfjDBzq822UeKFJF9RsH26JQn8QFD",
  "key39": "qgA58AFDNA31rDpgCmpR4YPTyU4pDEV4xBqavN2Lnjg5sgSa4BfVtud6ughMzh7DTneaBDw5PZ41P4hdn4yrpaG",
  "key40": "44nfnexQavM5U4Ys8FomgcPF4vYgddTvHEQr912CWMBU1o9H3SPZfrAihrdo4spugKocnreHF2VuE35GrVtfxqM1",
  "key41": "48tXUgtxMwtu1znpNjcP2sgz1CSeqdVZxPoNpRJLd4RGsU8S652b95wCyFWiiWzKi9dN9q8TRhEFAgVrR3ZqsHqW",
  "key42": "3UK4Eb2YHmhKSHAHBp8Ujh9JMLThNwnxE8GqKDngJj32QsZ8RvtBV9ZW8mGjeB7M9UF813dJaZXvFgjNTcE4upHP",
  "key43": "4cMVJqFZxBDDE3Fr5A9zKvRYVipMhEJmLokZHoppDRRmb41APMjUkkiraqnkZbxbfuQ3ErAq8dgr2TubAeLJm76"
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

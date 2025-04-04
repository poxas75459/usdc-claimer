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
    "2nduJteGQQeMDaJirXyNrM11tFW7QRUxgzzGBDtSPy6v8RiSHFuKEFKBtpFbukyv4gBN2mjVSR7zpCYUc5GKRFa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rFtbkovEgxdThisD41KLXHfZYw2kQzwqWzK7azbxB1K8gjYKeAigJBngshmjbkCLkPS45rMGLNmXBJFa86eYm9",
  "key1": "CWKoVimNF9TEd6dTEr39Cqkh7eGcevHhuxSaefvSogivBjBfX21iR3CJAjVs4YNvSg6W7dYUbu5XwRczvTp5JBW",
  "key2": "HUT4GyFFmKxt5C2M54NJHBFNSL3ZyNeh79emVGgHTCesA6BuuDfpkjQQ5rHXy2vCUU6KpYK4stYgnv8haAvZuLy",
  "key3": "5rYNB4NV8rtBWJpTjYmeoni2SJxGcHjrud6RqDfnQzsmHUaVdEzKAnoYRKwzNoyrERWpCjyk8SH7bMFuNjAu7swF",
  "key4": "2eyQjNKDuZNP8haNQ6jP58qAH5ye8XhhJAV7fr8Jpqf8Qyq7Dhpqdpyf5ocrVYjKqC9gmx6gwKQsJWdApKe84TPn",
  "key5": "3uFZyWQ8XbPeGmucXVo6dTiLJz353CbTeFtjftGbHmFVoWCEJkhxs4uXPfuAiRS5ekPxoeMtUKWegcmbYK1cz8xA",
  "key6": "5M3Y8LBAtGPG5wcM5qREK6kbcekv1fpS5LjLnavdmj6HdyMTpzXw5qrCrD1zLfz4Hg5o9FMHcjCguStyvfixuNZV",
  "key7": "3dDQBhoZhafegaHqtrriT6yHTLixSiXfCpZJ1TNJCB7wqqJXwrRMYTW96dqCbkSFXxsP5VFeTK2Zyxa3Gp34uCAo",
  "key8": "2riRVNJpavBVNp2B26hs5Vu9mBjFJthdWDm5aNUtbRaWVD3qZ9NS4cMSXXQ8EQPo1vwBFimwGzmhcNoF4d6sqkUi",
  "key9": "2FPt1V1Ap1MebNkX5mZo31ScrS2WPVumMTpLuSxipsMvucYmCzyfGL3MdkxKzxqUwF9Q4QuGPEhsVX4sea7HVcKA",
  "key10": "2P8DVLTW5hgXdUMysVuELjjMqtRs9NHBgn3jaHDXkHHJwp1hzJXoNUViK6miEAEzWbtpQrhzKG9oTNfnQvYQ1e5i",
  "key11": "5J7jPBKZ1NATMifD7LFAjhQrj2S5dDcL5oniPs5o7YjcGqWK172kJV2qrkHEH7PHkLnjKMyanSCr7YXjtQJ2AF6R",
  "key12": "5EePyx9rELV84RirkJc2cEwyYKR5oX53t4grnNJD5uw85Mv9j5wRugLpTsWqoXK8QBm6ZZijG57nzpSeFkTPZzwy",
  "key13": "4R13RY5D4oSEGeupDZtpX1Nx9EUXNnfmY7TXtgUKJa9a1uSX1ZoH1TxGbhFmmV34zSmmGQeoh3o3X2TEUdK3G25e",
  "key14": "3ZAAgCpd5Uz4qTzDVSXumuaRjBKKG9i4b4HHo3z1HCtBJ4hXS2DGDoCGBJMjMRxZRipGz6KGDpu78WsvhJdLGXYb",
  "key15": "RLKd5JmheZmyYzXD1GRyKaQeeNmznxzCFvfUSYx3KK9FRXgFfFwhqwQHAmMwciff3eZt4HBYMds24inYRBadeyF",
  "key16": "27X94LYRQsqG94XkeWZnaKCppWZF5zgH9V7XuD7tj375FSXufCkx7sP6sEqsmgNM6rY9sMCVh9GruTAEEiDV8EeY",
  "key17": "5Pp3mRYqX3VoNWp2AKJ6v7zYqhW9deR4xK22eLuJZ3y2mkA8JXXctZCdRfWBqnHReCns3ACMajSc5cWGTVv4AMiw",
  "key18": "qUXzn7HCH3Fe88PE6hJu9XLiUNwCLt3JFej2a7PjAkGxNUrfLuj8Y9EfP1bivRZrakpW5iJvm7ztxjsaCpJWRdp",
  "key19": "52rziSqC2jbshEyxer5JqgBZo9bq5mxmg4hkSvG59JhE33YA2BdWFDFQFAQYBG87SGBSnhmhuxvxXfhrGZehefvb",
  "key20": "2YskSymdu5emBc7nrbkkgG6vbGnqSTTYTVE9bR5AqKRNhdMWaXk7QqK9kQSGynqV6VECHJHdeXpgfJ9uhtKJ43MD",
  "key21": "3V9bzsqKmAShESrtijpm9JMYj9G9TpiKKfCwLvFvu7YfGV644in26uUbzCK4AHvnibL8gomGakLuUtbnUWktir8n",
  "key22": "4vHPDVPtodpgVmdqs4NE8gngFRQ2URGvSn3fWQpFKPXjJEojS1ZTmB1rmW9WK1enWbiZmX4ftD55ZmNSb6VSguQf",
  "key23": "4pRfXYEUmdyQsE2bZzrur4Yme51TP4Ty73jLHexRnmUt7yVbuFuwNZAvojZ5PQbv59t4b4Lp4Aj3ZBD1rPCX2Hin",
  "key24": "3x8jsCR4qV3vGDSK1pVGFBUQFfv8avnFUqT3XNfaa5bxGjSHEU7M1t53aCVa2hES6TMU48vGtkbnuWghCXxVZpP",
  "key25": "2kMoMtdxHsh7o1h9BwEjisktVyQqL9bQmeYAiL3RU3PpvGAmdNvCCe7y5krw9h4ztDeH6K7YgDcHnYzcnpGgoxNT",
  "key26": "2siy6tQHSTcexxDnze5XGZi8z9Q2uWaaYFCKgkF585WzPt6EVh896QNHivWGhXPmrGzMYXGUwneevwuhAuzNqobd",
  "key27": "2T1zhj2SAWmLGf2mGYHjn7CkoTjCRnhftM6cTHSwAQWEDXUNpgZZ6XagumHf2a2KCNfW7pjXn4uRKPAuRTix2C21",
  "key28": "5yyerUWZB1NrYWg4kayzdoLNj33FRfQnGkrwcZTf6erU7dQMB6Af5pRa7X9FNLvXEqdFWLyvxvzfx2VafBjhbsGz",
  "key29": "5qNZvT8mP2fmfhTcRwKC8MbM9gx7zHzZsEUwdb84GQxs3nxLQEF5Gtr1KSetkMmHa9bPhabE3WQRdn42gX5ANgq2",
  "key30": "5KSZqHqvt8aEbi5dWjg5XSLKXSgp9ifYctt2nJ1jRETo476ywCQjjp1NLP4cyF8gPBsTj6GVJhKzeXHfbN61xEeq",
  "key31": "3NsSryxvY3Qmf96XHi5NLrUutxtFF8Zzj67AxU8TowmzsQp4DZ92EM6aPejudgeXvP65PoY9hdCArLoVb2jUEhJg",
  "key32": "2M4xxD6DEhB8WaBmxx853Yr84v3zb8VcF6ZXnepSyCLdZWkLyTvmRU4wRzWUCfRAaZeKZtL1MatHTVVBnNTDKZLW",
  "key33": "2WjrxdikuVU6fi9tiwFbERzWZH3G7SH6Qf9gZ4Qu1u8qRCcaAmU1gBgiwbWyr6Fbgqp73zGhmaPspK8LvuPa2JXZ",
  "key34": "K8jTXx5Y8XhnxCwqHZaTurX23zDJUxPf42tHei19bmEGDh5JT89XAGP82CBhzbHws6E3dZNhtDUe15mJ431xLGM",
  "key35": "5sWb7HHtYYk49RpvjVfjsVWkF2tcCZmrxmL92haMKfMzDXhw5VpPXBYVVAjPnHQVhq5sSdrar1noshLNJEH9ESrY",
  "key36": "KxrtsEx8tR8MbEYBCRvY6LLTfHXfvv4jeMmqSAwv2Rk5PTXfgcUsfphS9jdW4HkEMdNad2fRGa1qGGKDJxZZ41k",
  "key37": "4YgXHfUendv7AB93YF1Ws26FCrvj2iPKxk3H1vWEjrJCur8grVMDojEXwTkHxVQcwJWdJcph44LWxABCUtnxz9s6",
  "key38": "2d3RZcxn6o72EXeyBDVEWWR92RGC13KfTTJVp29Ss98cernLsy1eBgE1uZJTeVJLFKnvSAZGHpSXNGfVWfStLwJM",
  "key39": "FpSmGRw9zxAGKJiwbQcRgKdPxVaDSDzZR2gHFNXLeZqwE9zL3SceMibUbsLiGqmZkqxxMuXASTYasBWGEJp4xrg",
  "key40": "2oeU3GgqV1W3GeJzQo3XQFbL1YMms2FzaiDLxZbXZrrhUbXbZzA8rbHgVu6mKGWEXw7mQpMyJ4UqoBJeCZ8N9LQv",
  "key41": "5DZnQM9XWaUTo8iRnv1ySYcsfr2RixJhbuviD1SSXJVM4oZEvJwcEHdgTt4FcB1w2dVmJ5inD1LiYTbtGUMejVv2",
  "key42": "LAf1ZS3iRmhjcPMHKDCZ1j8JNifckerfjPDUHkK6sdd2pVpQqrhQf5YMjNLsbq8JnqgYmmD7vR5cvLX6h8TGYpR",
  "key43": "YYahzpqLBhoFVFpFARW1ujbWX4o88Ea7h4nmqWBvZ8TCDipmkRQEEuLNr7EPPt6CZRiwaLpb69AE1Lms9JfTwvc",
  "key44": "AGvVCgTAAxnQ7VsZUnzJdL4pKapA9bXbytMZBTqnhLuFtd6i797Lo8kpCLKS7p6EV6LPCS6fXvw4wFWmyRVVPAY",
  "key45": "5Ry5bsaYdWYVV54QJyPnDJSgYQfns5L4LWkeVu2FguMEvWDCAredr2g11KFxhzd9pCtXatYazyKZeDecppoeWkCr"
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

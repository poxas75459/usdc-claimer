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
    "5qHHFi9SdHCyYSrNsfwTn4PYAhyNUp3WsdLPZUociDvpNEK7edvFesnDxdGc8RKRmBJFwfF2167Rn111oQanNFim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dyrLj7uUT9cEJr3PiYtCnC7PjBmBkJoahaQ6N1EbJ7NdwLNNUKvBDgopqsh5xWJJyHoGJBcoYmcZQGbK4xt8HK6",
  "key1": "2ZTFpdngMnjgm96e4XPRxxcFgwnXtGrEWSNy3o6FESDG9hDp3fVxK4JshUjd4qpH73Aj4Ny4mhZec6WQBP99686s",
  "key2": "5RkcJM57jrvNJgg18e9rLMVUar17mBn9GZGBWWieki7TLE55rNMVj2r8tUzyZ4s2dpy9ypoiPkA11LX7Po8jEcZq",
  "key3": "4grmSfCEHF7DZGU7PrJYHLbaw9pisU9eEYApW35i7PdjoVyMNvHFmGibDmNmQ1mtqvosueB7mpmfJ1WsBFyZkdZZ",
  "key4": "2nEjBphUHToet5aqNZfFiX4v8MTdzkBVYSGbMLuc3XxskYDKfCchasFJjjx5uWpwRQKw4o5hqtprp7gP2dnagsSZ",
  "key5": "4cBxRu1xDa2gFDbQChY77mcRddbYqbPT37zgNRy5ZhpE5eVuoWcdg9kX1L1zTE8fCjTVM8J1EMVJpAeq7ebrizPM",
  "key6": "4yc7jwMNBkP26ThVd3KoNaZVCxihs9y66XYhxpyPn6xivwo4yJzDQNM28YWDcgQbe6XrSCbtzwHfXQ5zTsxJGY93",
  "key7": "3v55YNHedywRWbSY1fhzKTVmxp5RqjNeYHWphiwsSw8D5PhitYKjHXUg82yjJ75Q44K22EhxG2yw7o68F1JovCDM",
  "key8": "MAZMFcfg5HzDAbr2GAvy7BS1YaPP8L2dQKVEXLWCyBFPJp5BXpULD3HZ4imJiLyQCEKSA1KgiPuWwh9Wydq7Sgv",
  "key9": "eySgD2xDqdJk9a17qFRKE2Vh8G3ND4VzpniEZEjRto8FgidzJMqt2zgN6k8Rs1BWNkwDVjFd29RAsdSNdX8qkLj",
  "key10": "2PvEVHpjnqzD1oBdfTq69Zaj5FYEf4HkrsHWQpTLJKaHpNS5uvDbnDg39iLzfQcW7MMmYfPXhPQgEELEL65Gnuyr",
  "key11": "2DyapU3Fzpu91Yc6eLYyvh35ewL9fgGgdwdrYNmoK5P5rvB3biobotwQHng1yaW4VQ6SSziA8y7aFxKwqZYUjPLZ",
  "key12": "2MmY6bCdukFbMwJ32Sa8F68hD8cY4CXsEzV9th672dGPqD3gCVPrm4bHDrPUZnfLqLoyuxEJSQJMsHBS5y9r5NeE",
  "key13": "5PLMX9fmDb2Ku2faJ5434K2gdGFVgnkFTbSKCrSd8Umt7Xio9XkjXfek62jKJvyYWbGctQdebgNvNrwkL2yAPQ7Z",
  "key14": "3CG8UkHFMHTBxGhdpeV68ARARuHAKc7huvcS1rsBknY3EJNXk7bxYBTF6eimFKQXUDXJfqFsYZZiLDeA6NHek4Ce",
  "key15": "5WdhQL5PMtYk6gpKtkx1GPWDARg6eRvfNVpUVsgibDdCHAZzZuMxzSMWm7joHBmnM3umYuBuGUiv2Ape45sm1ECG",
  "key16": "3KKqXdFUcex5CmKvWN5ZVSyd4obQw9xvBYVQ33GGHJVkkErUDyu3m1TavEHfnLSpmnPmNeoHL5TGHF3JNG6cECYZ",
  "key17": "3k9iRj8f3QYzJ69pGXhCD2WxQv5i86CgtSorTavM7Awq36CrZ6sVCbs5Kxb8TCzVu6cAKm2ZXyg5XyAiiS99EZxq",
  "key18": "2GcLPGeEKamuNc3mxx2hH7ysgWGHfGEfsJFonMXCHJBHAETn65hmjVyXEXYDBTHiV1dZnRNp1Xb9GtM9SQJZ5StA",
  "key19": "3Y35Mo31D7wXcM3DExcwcAjQefAsgJZcAK33YrE3AjQgQFFAUe37wDNzpttfEvNWFxDtqCsWjaMHPmyhV2nT5ebj",
  "key20": "2CLnkNr4yNxeYWcms2F5C5vc6WrGwkK1k7cjUMqjBSTtfZB2QyKJCUCt7ZCbPo7qMUEc7y9QbBLa6eMG2pRh68pS",
  "key21": "3sx64A2siihMJpMYaxrq21doVL2Mo98AJqgQZ7JTtmCUzfpwuoU5eui2gMNVVScgtB132TYqMsg9CS6QnTYVEnAZ",
  "key22": "5D4kcZu8kZsK58JAr3ixUCC5AJrQEjHJ9EeHFi9QU1wyeEKb5iharswSS6EjxgLi3UqiDsAskqKER3RwJx4fmURn",
  "key23": "34cjxCaM5NJcFPngCPBrX95bToELjGESzF7nCRtnvuvuRox7JGbTCmrxhTMdxJYLFoca7Rr4xT9TwCZMp7ELgzSZ",
  "key24": "5gRcKmFaFzZE2ks4Zs8sDeTsP5M96bHKt78e3HS1EAJSvHd2AqjPw8LcxeD9mr3ai4FYnGwo3EdPgPobaSYcBcXB",
  "key25": "4CsA9f2DPBwaYHTA4BgwbqtLjo8yi1ij7PopLwDB8Low1hZrUn7EEhtpNQ5iVNqKZyKyQqXRA9LKsta9ct3hdLXB",
  "key26": "5Tb6ydA1nd2puDqRZip97XUvS4MkyrcKDAPLCGeehRWV6AfmF6uVGvkkNCTkLGTQddTSdBz7KXBEZyzysvnufwaB",
  "key27": "PYsWcZHpthZaYdx1pZmqMf2GiXjSeVLrKh13scbQteeME9UHst6fPdcgGFGssvkVSwCczyTuWTA7CRxo4R2tJoC",
  "key28": "4SmssfDs6ThsB6wid3ER7KRLJ48qkD1WW57EogDAjBye1NDbnwKgwuRgBMAKaXRwgPiYtB9ahknCEFNY3UzsDGWv",
  "key29": "5utztUCfisHVyvmwxegnCh1G9XxGx9M6RyQZ1RfHdzCiF9q7sbNqPDgjEREcuKy3rNNnGNDf9ewvaxkednjAx4mJ",
  "key30": "3ZxSBoiDNcS5WpmKehKkCxwu9pnEEKSSskttmDRHPYuxuL2Uz85f3Ej2QBEgUg3DioKrQbEJwnR6wFtdfpWKuWH3",
  "key31": "DGwhyDELCCBCYzA2AhGtSPQu2ae5N7TZnKEvYffnJfkYwRGok4k7EMb2n29tobyA1ShLfUUNP2b1GkgrLPfkoQV",
  "key32": "5zoiPQ4TUxYgjaqtK8X1A3LsmoJP3g7G6SxCymSvaQhx5L6h8CaHKVmsbwwC9aWNQVATLkbnQRMRZsrehynr1gMn",
  "key33": "3MmMzEzzRgdxXdLZrgJNqDUXXiMkn7ZYMJxhQGvFPweQHnZqF7NXsBAripnqzUhkotijJUW6EGSygpsu7762BNbA",
  "key34": "JVGiS49G9vA3opKuViaf3e2rpmceMuKsxCSKBZAwavVmGGJt89GbpV9eYSXKk5d3MkaKbRaKqh6qYPFz8VifBdo",
  "key35": "2bXRzvZ6CxvUDn3E4cCwAUYSEhiAB56dYBznvqwAcXmpuDc2AJZC6wYqxCPKiY39mzPWAkThcwvciW19S6MJTNrM",
  "key36": "3htknUPxZJYv3BmxRFCh8q2AWBrvnKUVoGY8nH9wFtuu2J283E8k6kFpdZ55Xqgp1tSejcMtZ1TPLQ69Lz8xPjHd",
  "key37": "3WdR73fD3sFjZ2tmXRE8mKVYMxrDpZYwxoDX1qM3eqTfHdXurBHFsXR2mCfpX4PKBh8KbKZfuHEhUyuzJj8jaJ81"
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

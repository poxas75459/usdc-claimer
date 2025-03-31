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
    "ZMAUirMtG4ssZ8AxELYJpZpJH8bmR4uLt69TmQsqJuvUhGoStxo9cu145tooLsXpbhSvwUtGWBTP17xKTB1VUha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KME6Xz33Xqvz7e8jgeRKamzPZL1yStCvJ8Rbuepw2D2VNU3aDEHaAPLijsBYPsxwrLmmGvcFg1THobpCLV25hi7",
  "key1": "5Ud4ERUZCTpMaR5wapJVgW4wpJU7UgfephrCoMEsxyk4xXtrp34uWy37pSNeBQ44H595gJY6Wjb44DybYSAP6Lh",
  "key2": "R7yUyV3QCJLFkXcU2wF42nah9sG5qRHZ4n2z86dybcPf7uKKFHuBUVuZq176EauRgLoATT3LsosbPjK578ZZ4XP",
  "key3": "55n9PkMmBci3Mtu5ooryP6siQY3bqMir9gTuw7tnHBMGCdpDoQXwKsoNA5Axbzxw9AyeNwLEgEXw4MBRx1pWK2fk",
  "key4": "2kaSU2jQjNDB2vYETVHmqDtLKpWD2sCF3mt1ovyUmr36i2DbCSu8axZJjbpEW46Y7ysZvWAVkBvRwPJp33fJdaLs",
  "key5": "2kqjphqtysgpkynVRARLTWK87ju3q1eLxMATnFKwhmgyNEomNTChUwAHoqH5yrNVfX2tq4fZzJ7yP3jJfpUY5CLN",
  "key6": "2mFdKPwgBNBuUkQZzu4ckVBiHQMae4yPrMpHUzXwLPzTMFeVL7qSgeZkvsC6c88mgTLwUtev8xxa1yvbMg6aWo6m",
  "key7": "5APoqrBL4nqUzGGjEkNAAPyx5gowX71uBkpzNazk1NoKQqgftxgLoA2m9kJTK1ESugVGmJhw7RrVM5D8acyUUFVP",
  "key8": "3GUiYQYfbZzdgTq72B25ZexXY7SagkH34urFi1cpiFq6JqUqMtaXR6rRDss3A5tzymhQRkiRNBcLYpTjANJaaWVj",
  "key9": "3hPHcRoAWF5zihVZYqW1jdQHCqs9oTGWET2WMv7GFWLnGkxZgZcmU4aQjqizRKUx7dJx5t8aiBGr56XFiCRCPDEg",
  "key10": "z9hxBVkVK7VnsHMkpzbo454884Px1WDsVEkhjE2Q3utzetzs3cmzxUmVQJfzsibKAh2BELzuFzmRVEuDBToRqry",
  "key11": "5UYEdJikXFYT6XGzEFp3w23Kzk6Mb3BGZb6hdc7EVjBNyuQJ9pPGxWgKX4DAN6bDs2QEwnyUT2HVzGbCsqcNyzE1",
  "key12": "2mMNEEg7TDHqBjobnze7PZ2522WYjmGx15bwqKZPkuckabMKR3sVhCXzV3fQXw8WZYsSC5x9JyfkABRSyKgNKUJy",
  "key13": "F5bdKGGWxNzarDcQ2tVtYivGYB3JrdTAyBa4Gw2pHWs69XeHqaE4PavbfuV2MGP5nBY4tD6Qf7pihDeGr2BemJv",
  "key14": "mCXcQ9jV3F1WBUt1GrvyMc9nCLSDBDiKcC28JrqZQPgdwQbi7PKfod2kPSdyaEbHUJZUb9VX3kdUkG5ms4jHMVZ",
  "key15": "kZSPYhrH3zP34gh7VPxvSmi8sGpK8YrEaj7gt1oiPu9m6fYMpigMekgGwgfv4xnb3Jx4RmuPdGcE5mktvsgYp1k",
  "key16": "2cEpQNhGuFsWNtkRzztt4MpGZHvUWxGwRwMsjst292ogMG2q462BeRKypBAeqBdeWwkfcvMZWpJyc1YLtoNbPLhy",
  "key17": "45kFW7JL8HMhnJP97NWLL44maKwLUfzcU9WTHA3JbkoTp5yacjLTuYbXKuhvfJPpA68y4iRA4dDrhpn3qX9YYNPY",
  "key18": "RMdfnsDMvGkfCvTqk4zEQrZCeEsMAEsjL8TXUeahufDy5Y1wXwzxCigc88uv9e8vW3DDgbnYWZTam4DJDyCGUJ9",
  "key19": "3qrd76u4ZJESRzsrgFXvLyZB3obRg3PCo6TWSPMxVMKcGiDapMMCRXwyc3m6zhFBFYT41oJwxUhKWxLiowXBoYrM",
  "key20": "2tEDQduhxSFbXne9F3marv3K47gL1tFN6ZeHtrqkXDMa98npM46mFaQYn1NMSmi6DwFCXSRsZGn7QQHiEqBd8Q6j",
  "key21": "5YcCbsiUBvz3x8GSybyqxXuPy8KKfRRw4UDvkoqvqwCjoVFGVVSwTptfVzj7EpfoXW1kaZU2ixMzsT7z6rgGh82G",
  "key22": "5iA5NP4yiei6AZGwa6hQHyaWfErVdSo8e46uXHKA99rFcjUnVBXea43riG9Pov3njx8zF8brLggcAyy5H11gPQ1C",
  "key23": "27ipxSy4TDUnvwEjDc7XX4wjDhtfek4hNrkH5QM7stiadjridcrPYo8Xq9ZXUxiXFDvkpiWkbB3hyWVdT9Wf1De1",
  "key24": "2HePSVGALRKamwSzMoAFQUxk2bssNn1HPSqVwUvs2Ay8ah2ZenEzK5bFozExHcuGgpNDM7bZQCCKxCsxkgRqEMj",
  "key25": "5qwBA3Bqs9Db7YxxNd7QKSkTuubnedD7ottcBHm31RcWJjELi7JdwWozsFEkaE1iFXKJdMeBroBMEe18xZP9spD3",
  "key26": "bHAzubmP3nqNWqjatkFQ8fiqqUwELhGSYiXUgYYNYVZHgzWS7odifZWmWqiQrxJoAzGJWMzd1AazTaTkbWZV1Zp",
  "key27": "2pGXGuufuojxQMkudcuNJDUpnTv9rctq6WoRpTijW1HetKjq8FNSEFhfAAVVjGYNmgddfR9Z96wbX8geZT1EAumH",
  "key28": "hZYresWcomXnNNTUM5QLTwBSnU2ZxpfNR5ASuNyNx5j9Hriy7wJt2sFMWhYEevyQZGh6rwfVFYPwXnCYJFksUzY",
  "key29": "2PuRkYgX5y25thZwuiMpL4AB9nwcy8q3MbUvw6QKgQjuZFRgUiuQBF5YFPFAvEmmXHGqFXpbq6DzaVqGJ9MhR1Qw",
  "key30": "3NMTETyXHNBr3eBsxm4YEJtvpNuGg3e7JDiSQ1EEw56Jmk7mwc2UFR5t11MZw7cFLj9FHKvnd31poiUY5aHA5pw8",
  "key31": "4CjP49wEA8M7ffcTqf1prj53CDdafNA5S6Kpvk3LdJitTmynfG5J46phSg8CGkcywtNCzDBi1Tv9xeHXcoV97xwC",
  "key32": "4Bxh9Ab6P2QGVDiB2d4askbw9nbsF1ezr8VSibxWhYMpYWjejBVxwBgWQcxrvu5ssoZkTpZAbrVyHrwfvN83cq88",
  "key33": "2bxHB27bgaZ3qPpGduyxJBARikaDRw8ioLnTiTrEFveoyStwEuFrx2bPU8mZ4WhySNa4Wh4Vgp5BzKNu2HjomPGv",
  "key34": "3VvVyFsPqtieJkjtzxqRKoSdp357dL9GG8fhHFKeqmYwqAjyUe9fv63f2NAfDkiHeW9YEc35XVJJTuk2GhxqsAJb",
  "key35": "5FRU7wGF7yJCZbBe34U7x7P2KSYDjXGm5EMMHYnfATbMcpaA1FMQbV1yKA4Jg5WY72TzY1p2JuPFPwbUyfSgWP6z",
  "key36": "4iJ4tNR2HS5CHvT8raE8CenFRbfFJ55KqN11gcM7edkEJmuz4i7V35rqY5AWQcGUafBiGARr47P429AKfHnFNZPu",
  "key37": "37VQpesNspoEtFwkSAKod7BqzVrf7Kbb44GrjztPnQVeT8h3FM3BWNLDSiwC7zYUf1NBbTUW6VHdnTd9DrKr4UKM",
  "key38": "5YFj5Euc3z18u3vmz62NTNz6YWWr9Kk7qbTF69pD5dyM27nD2H7XcU14xKMAABBTUHkRWdQaWTP8URi4SjHCCxdJ",
  "key39": "43emRx6bnN4viFpzdhJi2RAaj6eWMvVrUeSpbXRUHNAxRZSiTdDn23WK936C1UHm9YFP6dYdJupAxtLTg1B7PMh8"
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

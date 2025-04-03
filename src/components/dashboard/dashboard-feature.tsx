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
    "21hqXW8d6rRruP7ufjBAt8gmHatLaoY7JFq2PoAxrayPtzT2Y6NCmeEiAT7azxs99tgvhbJTJTzAKXMJKbFuzFAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JxCDwoHEDrbuHCCu2nhAfrC2rWrQbjkWXX31tvQAUW8Rh5cMNSsHZnjGvsAp4PL6SZvgPt1EL1jUYyYK1vF96Gn",
  "key1": "jeopCbDzmoMCHxLziiczJsvVwP3SVuPpVyTs6Ls1rTeDbm4zhhJmJQbMsKXMjMtbAXiSzUPRDUe121KhWXBLRPf",
  "key2": "3V8Ers6P56vYemK9cPEXnSpftdDwPckZX63dCfmJu2WRsFtJZDrxaRc3994qraQTBoH4N7vuo4vYtrZLGzx8erXt",
  "key3": "a6n8WiyYHhcR4SXb6VSSoxAHT6uYNqL4Sq5aVsn5RWXF3cLkqZEPzXNzgaVrX2fNpT9VVWXPvtytjzxpLcshMg6",
  "key4": "4pdnQKGrXyCBu6YELFSttiF2wd4zqqLdgZ3xdDnNK3L5RRyeyosG5zAWYbiJ3rSsxiA8Ty4cFKe41EfHzqpd49LV",
  "key5": "1nRvTCnFt5LwnaoyDh7PXTTWKZivpY9BXsFWJ8mwmcWhJoWGMA5HfnnkjRkJpGGx1sC8BicjmHphNFy5Yp6B3Mo",
  "key6": "4CjBMkcAb3i819AS2SEyWm5UbF3GsfAMD15G4w6M1aZuwMVp8EcHVz8qWGZ3UHaFPPAXMB4z4rrNtEptyDxvCxsr",
  "key7": "5ywdHQ4JzpWJzyzmyebEYWuZtaXPqRhtY6Jk2zQ7XQnrpEDurAXko4x8cES3NbdxSnwaFhCwFFJD7VCczyMUfJfp",
  "key8": "3GvxaqeeVkN7JH8Zd63d13BhfaWFCJq8V92mgXZzV6KgnVq2M9wUUJhLNHzqcoUNCcRLtxmG9xsYuT5CGUhkkMPo",
  "key9": "4MxwJV3MHjcJCEEvVdmqX7GpoXDEG6qU1E7kAhFg4o7mX2bLp3tNiPR94SzThyPRCtj6xVYr5beWBvaaBdtFokqW",
  "key10": "3gyrrtYcYMzh6TJTSkHJ53qt5M26A3xxti6eeR8AUvPB83PDTy8sCFJo9w4oQ5yxDDo8i7nUs36jCLrEVWjz5q3Q",
  "key11": "3fTfPD4F3TXqz6d212uiAn2UxsB85g634MtQiiaxtEVB5UrYAQKaQMb5S1ZA6agjDezq1KKuYqS6YKC1782fsGpY",
  "key12": "qMeXGmnstKdGQsvDkfpguRSvxwRBdzrr8Hrj5bqJvrHD7W4RZ4eZ6iNcUh3MLxyJ2PHp6kayiADUEgcSdx8vV3N",
  "key13": "2ocBs786pBfdVdiQNqg4ramf1jecxgAz64pCcGjUbEndyx1jwNiuN9hV8UFCWKwf6JsXZunwLorwnXVzDg4y2s6o",
  "key14": "4p3qSwfDNZEBWfFzhkXcKgaPnGwNzMJjBpWyBFkq5LuijjNKaYEW6q3DkohaRSABPmwLRXLZobYR5pqJ8cuoVT5u",
  "key15": "2vRENUf58A8hfYRcB1J7WbVQpaYfaDBNaBUP7LgkFETpw4ZewnQK3piY4i2DAdFrteMtdBKMxTkSADHNToAYqfYn",
  "key16": "ZDKGJ921tC7i3fuHmAW7X2XCaygyNMu7NTG6kLtJeTgGsy663RymVtoTNxsDDRWwjNpThSD93FDfg9N1nEHxML7",
  "key17": "3CEzWZT7Uh4mzJpdwyBTrimjdSFa2C4eadKh55UftCWtKFAYTNwy1KbLWuF71PV75fyeLmJnYB5cGt7XsYMEdPUD",
  "key18": "2z6ov542RcU3ZVorEFrWdeyJhXMNnhDHXzTUBvTJUSwqPyJMp5Bt76RNGv8JCYRXWTV1qej52h6QHfDWCeYrxT4a",
  "key19": "tMuFV43QjryXiGoxqLjvxWSCdv7iDfQp7Uj1c67hYsRAhSMNDJ9XhL3yz3xStuKQMAqDyeT5tauGbxnSnrLmVSV",
  "key20": "EgGkUByYBdqdY3tS8QDSAYnVX1xqt5zQdKBcPgJm1sXuWW43JQUXiNWhprMCm7ew4PJqATgiAwPZbmDWpFGgWpF",
  "key21": "P3QVyGaUK7rKvcg2jVha95fTV2aQDKVpFjmHnLHRqfCuBjsei44erZse22BQNc5wNFEJ5oswbwxFJKYT7W5zvmK",
  "key22": "1BWZxjAJQbz9Nq3NRCW2ydT8oWCfjGjFcnLNZUxsUo2JW63zEYyA8jQjAUjM8NYXmfzQGSGLFYKWXU5qbS1pj9o",
  "key23": "67jyhkd4gwk6hGqG1pkAnzeg69bXz1HLfbBEkGBfMsKc85do42jMEq2jy5MdwHBBUJcW1aDx4Sb81MoHkGcQGveY",
  "key24": "3V6nbR6PnS3bGY4zdTdJFoYkLGHcnPJqfW5TJs2jpTxLdtjNA1GJbEd3r3AdV4Msi7X1UyW7svjc2MrKsb7fuqJH",
  "key25": "2dzmHVhgHwdzQWpVgspUhgbqiu6wQ7TCwtJZSugUQfZvzoC6KigF6cK8o52Po23qFWCb1K7Mq4fLcHKQ4H5i5vpy",
  "key26": "2pPojjsarr7yoVqrEvrhLXgwNJXjcVnfxvxKsrnA8hMVmbS3F9BwsiDLX1RaWWihcScvtMHeJAzwvwMD5SuNUoqp",
  "key27": "QdDRgRkNUK2eC3YAYDLBf9AJUrpoFSwa5QSxdDZWzLYG8kPpGyeTgN3834iHHgX3dWc7rZe6hbTGRGCs4h4PZo1",
  "key28": "3h9tEPpZbwPvshA2crkdRxU4WtzJfd4huczUjWXY1XGZi9P9SnEFVfpJVbf2gKiLSuTnWAxQi7QsLgkQdgE19gqE",
  "key29": "5mi7QzoFueAk1sq3EAo7NjYpi78f6HB7C3dsRrFNE3P37Zy6zJSs4WyqjmUCCWy6cN9HEMGCbJNZiF67CjuDmuZk",
  "key30": "4EYqajDm57F9WzSCKeLFwU34WeiCKsZja6WvMqY6tE1Fggy8ZpYWFRya7xNBKLJrugP7QW9gMSPt9XEKGTuPiUd9",
  "key31": "4MYJNnV2UrBbXdFWAR4yo869eo5qsBLH9q2awqvFg8QaMgcArcCPihuCzatQfcobSLuJ3nWpk88nBJVJSCsQpC4H",
  "key32": "5sAckjBGBKZkgNzKvCXhLbYdiWbiBdvLi9Pf5YtX4FeALd38FtGSZhY7Hv9fsgJGXZZmnQLC7dRw5UX2Vk5v2iJU",
  "key33": "5H2gVeJGJxjHJmTtwrnE1eBtNWShD1zrksU3Ab2b99a2AT1SjiU91FVxgKY77xPHG6mX6SdeFVtn2TrRUs616wWz",
  "key34": "257skAtBE8YUEKXWpGz5h3JJZRfcGaNjLeS4Pkv7G1p3QGpJ2H5fpwVn4pcchS7ktatUKCBY6NapxhdA7rjnBUo5",
  "key35": "25gzXo9r8p8co6m1rLB2Pyi3zXp4CKgKaLYgGr4vpUL1rh5Gdunv3nE8Jit46eb9T4arfd1crwfnUWHPrqCwsFiy",
  "key36": "4GdDBcDkGwnEBR7CoPKjdUK5YNTpz3wG68EbryHDCNmxQJTbQD4abfrbUVGCekMzaeyVmERPhhdyF4SBNXW6bnz6",
  "key37": "3RUAeRbu3P7Up41KwyTjCo1drZc9kC2CxAtEKmWmooL3gmgYx7bYUwVP2hBA7M2gLyDDkY5uUVuAHDgXKqopF36Z",
  "key38": "4265GGyCVDbd73uvT5JgvVYZnRDBg9Xi1pLsd9FxWcWrFmJvE9nhrNYS1dhaUwjU1kRJUhRqAgdsgrQ9xYwrMbLh",
  "key39": "JUW6SgksW1bGnwycFJF9xaEDaybk8wRjHPxcup8CiWx9T3zV6LVZpfwpaxHr4uBfBxXZ931HXtxhnfZjwepzCZn",
  "key40": "2xSzH62Uw2vvCRbhm1HHgAmPzK7UYvo7fSwHbvSvBrBwMdM5RnfZHDn26M3j6CXFuJXZ4gWZdtxLhE7Bg1GGL58M",
  "key41": "4JLk9ZCnaUeYYeHpPkqioTANvJp1o14Jiobp8WRK1Q4oT37dmbwjPUhaYRAuAczBXH7aYSFBRKdd4aUBcxHp4kKV",
  "key42": "4YgzWstp31n6RymsFoL31HHaqziSi6bJrgTX3yawn2z4sFTKQvV71S7Moqwr9gFDVmSoo7QarS8dKoq9iE2LcqdM",
  "key43": "5sJrk9agHUd5iE9tHNJZb32p3QevoCRMAhrHMuvN97bnqKtxjYZ9Kq7X8Mt9r8LAr8L4qCKKZyVaAubHZuragwqU",
  "key44": "7mvDopsm49vtcBgfV8UmEfRZspLtKMM1i3LzYDpdnwjnFW7W71A1RB1JADmDswzSXZBmRCwjQ63PbdM1WEDJ4xx",
  "key45": "2W7VxQhwzRXcA9iueWxZGPxHb64MRPdBNWJqAeBM1oq4seLfuVU7jU3S5zgFi4nrrSZZeAMrQMhzULngCvK1DLjT",
  "key46": "5iGXkHN3Kgp5vW9hQvfB3Bt46tcRVsx5WgCL4dp9V9Y44wcwJ1T2pqDwje5NNewsuMuJbjv2E1kwHYgYXrN7BXZ9"
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

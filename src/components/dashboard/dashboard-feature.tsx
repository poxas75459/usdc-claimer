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
    "5ZjKktjv8VdAzBf96aZgsKNYyrttdcoaPBH43oXh4c454ctPfcffgTUwjoAT3R8Q9V4UDJu3WksykquFzS4ywnri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGCEob4pM9oYNTcNaFQ9KmrpjKnqibjjVufTxZQcm85TepPPbnxXeYKqcd89ma7kVAbTcNQybpQsS4k6yDsrN7M",
  "key1": "223EGMZ4TXYhL6WjqopFW1ABypMu1tH6pceDmBVtPbzXt2ksoURcFUmZDNTTryDbToK5pfmuSGWjpuTxN38wv78s",
  "key2": "3sxNVonsSycV1P5wXbXHUDNJ8pP2aBvvYskL4hKanCbPQgzAuiQBaXcVhnKs5oCUJPPY45Jagd5sjcML513THSMN",
  "key3": "2jh25u2CZDiCeBYTfttrMu6NFpeFwsWuRZU87LhvpdMXgsGuWg2QBYKCssGG5NxCLmKiWM92uMmEU9HWKzD5dE9r",
  "key4": "3oVGZaXgpFPcSkfZtn6MCo7sU99GyrQteX5dxiCc5TyaVVbQUe6auKKDccNfyJAUq2nDWviUZkaRg2iVrise2XKX",
  "key5": "41hCC3912LTSjdLwqo34st9dp2Q5VE5UQ15bujW3tcgjgzvmguaQn6iMiJc26HqWGUvzBaiwQBGDTJf4NXVSaXvp",
  "key6": "64nKWBehbh4WwW7FZ4EbeGAUFLKnkvSSDdSpLhY7y27KobPncE5rcMWb5yUXuNFM9YXnEQ1QpCAN7JGoAWT7bxbh",
  "key7": "4hx4N1D6JmA4s56GpR69LU3yvh9FujWBfh4kE4qnXFvRuhntJcsR1YLaDTSjGChbRZusG3DeVPLfPRDRrNN8azuB",
  "key8": "2AKQbFSEkExvYeHeBwYDV2Wux1YpPDSUf6VPRRcAnvsuAGcSCeKHcVsvS8AqzKGekzwTbrXk4aDzzPpEaqPPAyJ6",
  "key9": "5FTQgY5xhhHc2ZHcStuAzRuSmcuXpTN31kM9HBXhbLnEoTXmKJpvVtYL9hLQ1yyfRpYaUQLKDBqjcpsZrHQX4nDN",
  "key10": "M3eUbUCdcHFfbggZFpT5KbEHDaRHZdFEVgsXcVZLNCn3P8So2xc5ZjHRt79prevkvHfWZhMQd89WXjsvzANnALj",
  "key11": "wh23NUiwRkoYkgcbt2r4aiKPKBcVuwn1oiCCFME8bXz6FHAeMn1VLHdKhwKExKJiE6kmJpi54djo6A77M7UCjM4",
  "key12": "xZPgDMXsCBiY6G7HRBJfbRQYdkHuvxNqBEHkC5iNYGDHHParRwgRQycrZMXUL4PCWZgXfks8xQzpMxYkxE6hPpc",
  "key13": "3vuq5z8RMseiU2YQp7s9PgpEteNrf32jkq3otq9F59mzbsjy4t4uXrvzLH1wgmULLJV2aYowX3U4VWuCwvr6ZsQm",
  "key14": "5ad24oHtuujzGbBqj9Xb4SzVbYfrEaEZTgwKxMvbzEjnFXN4mVigoHfHcnpqXgjVKCZivohhMLRngG9AWGwgrD71",
  "key15": "ZKSSvJDkJgiFYKUPL1GaW6FkWZmY372weCDuLbhXb7TEo2odxeMNLCiYig1T5V9RT1QNoEFXsnuqVsn1S8H3K2K",
  "key16": "3zAhGybprgcefpYDZ5gGRygMuu4tUCRmz7oosbmhW1HH9BK3xkvnYd88Vtx8RjLw5vVP3rynzznZUJP73gHodtDs",
  "key17": "pUsWWuxzSVd1EqfyF5KT8jNSQK6EWhP7AQpbt5VataTdR6G1SKiFqXPUodYW6ZvkSxbYqf1SMY4YrAz5SJHCAtQ",
  "key18": "4CJ5z6qgPEytyiC9HPPN4FsFDCasoZ2NAZ6FT9zdorhNYubVS6QSGC7UQdV7uLDw93No7EbMj8C7TMkdSzTzpoPv",
  "key19": "ypRZR6vsLS4X41KLii5X82LRXAc2QQMz1QeGsaiAVuNWCbu7ekcjFv14c8yLjCb7kD7my88Pe2u9wgcFVFiLKNi",
  "key20": "4tornWhNq3LNMc8HSWn3tT8NeHhps7c9U7XLqKX9UnWkEpvjFwmLtv6p87UGQviMWjy2WEamYDob1ie7MCFVPQAq",
  "key21": "3R7Yv2YBXLyc9Q9fbMHRt8Dc2gVTi8bvAhh6vgC3sStjyjJr7N2ae5QpzGVnSpnwEC8rNGH4dhCkizbLxoephFmY",
  "key22": "5RmYMcghWTqS4GkYN4y6XetkMC696KzrY9j8qbvnBxwi2VBJxfXGdpKCLdPJHBZvY4WHRLS2emx55Z5TNqLQKaqM",
  "key23": "4irAt6EeorxwDCBnpZMgBR1LejY5JSf14BwbNZawwk7EeZktu347zWgT9oN887B1Gjxk4bY89c7oEzGPLZUtkyBm",
  "key24": "3yUJDFPg4HmUFVjfV4bjnDaKGbfxUic8rD3eatbrrPBkbVqKJsaV7f56CYz3Hbu1A6dosEJeDdhhpPB28wzDubRx",
  "key25": "4o7eSoju7CV85UnAetCfmiW5YDtXNuFggV8K5zxf57NpAS45hzPtZW9q4kQg9af484CuchWX6xdFczcwHqfGVam6",
  "key26": "5w8kvUJdtEUrsmq63RAWypPoRNNMaZdVfjbrjQ32wCRFDjyUmAp1RHieRpQUApAiMbrUmUDF2uE3oxCBB7RKRofU",
  "key27": "x94mpihQnuBjKeB9QLWvJT56LDSEFttmWuc1h9Ro3AKEevcZCiSzq6DnNp5t3L9nHQUU8EYtuY6pC6GCksHf6Zu",
  "key28": "4zTgq1g8pUoJ1ZfCFzFykdqbfniRSeTLqdueLo5Je4RBtgF5gRQBPLvaCkyrnvY8jQsm7YeA7HwXByBnbuK1AEzp",
  "key29": "W6A5wvRHDAm94zDbZUnXe2V6K1oggbc2sqvU37P7EUcrjgWkxa8ZQpRDen4jHombyitXoRiDSNxZdJW3Zu1CHdq",
  "key30": "2bBN3ij9QiCinrXtCA8VpGRWazwtgdAakvGSrrWLFdJJTPzUMK7xxexhSqK7uWPdgTuRNLjqbRgNwX8bJokRyhf5",
  "key31": "31Ni6VX25YTkXGSdsydUX4Q8bsQ2svAg7hijVQhfqnh81MYZ68BwVcb7S2qahMb1xL2jNUKnSEVzNZFkEKHaKTv2",
  "key32": "4LNUogsSRKagmkEHUS2u95waseUKYrP5bphmqJp4R6MH4Z5tuj43L3ypu9jMXVZp9WmnfsjkZgSgHaL72bf5hyjf",
  "key33": "4F6HqeRZH9KzRQk3tzoc7W4Pdp6uXwPE8PkJpgFjucsXLA2151kieKGemXhMvG6zSdiGjvG5812tkKaqwEiivpMU",
  "key34": "5PYWMeVYY3Qw6e37RHpSM23Dxg7Stk8sduRh1sQ5bdezhnR5CaYUZj15hEsVL9tEmxS6kc63chKJq8oGA1c4Xckk"
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

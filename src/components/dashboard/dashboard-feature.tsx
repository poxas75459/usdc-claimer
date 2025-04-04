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
    "65Cgip5nTpG83gERv1SqT2NEsxbovbsqwctDXk1uYMqg3KUmvWdtRuMUoBSLMSDdkBG6HFvHNmHA5rSV7cqyJ8Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2y9j6ocYoEuGJzhFzcVj6Mo5yD5PDP1VZcZ7cAKFax3jdbuPyFG1VVyZJjM7TaNwkFPbKgp43nfH4GXzc8KHr5",
  "key1": "49eLXydZZiBuTuNkLroXqmENYcxCPPMEPN5UNVdLQHryE55UkencGwRHMJhKPWbp5HEG5H3kB77kAuy63xm1nAc",
  "key2": "3JGommkX7e7xVB6DoFUKGpuL7ngBq54w3ezpEDs53WujKFZXnMAbdGcCTSWmtVhnyygfJNmHaCGPBkpdwhTfB6ii",
  "key3": "5L1JWN2n1hkGUv4B85Dmf7zCWpktWx5PW6L6ePCkDRb2zMfZWdyQgvNmsHtuMEvM2u3ep9XXqPBT5CcXCjKAjtyT",
  "key4": "4KDmiPEEQtkr2nypPsMjzq4xfRMsjf4utWijqzvM73fjFa71Yr4Bdi2Hrx1hYB9RkL176MsNTPdsxiau2pksXzw8",
  "key5": "26TxtrekDQMpd6FMocHVYWRQyy1yxL7KHUBWvBeL88j4mH1rQPxL4yLFiyA3zuGr8FBh7rSXWBBujU6WUeVVunRj",
  "key6": "36iFoP2NGDpo1eDssSVyHio4SKGUZ7oAu2WjwYrQQumfv3iU7DwTwcYB6GxuMiXEhZinKggkrbEFBc1gpyEGEm1P",
  "key7": "3wQfu6mDXTp6diK34nU6y9HA9FNovCDiUisxXkhTSwnQugBFWai8TfuANGjLXrp2sRqqGrxohWwTrM1uZcAUTCea",
  "key8": "evCt33DRutTFuhdvS7j8ExPY4CMgGRm5B4oWDeaPvFWeam13i3bmK38H91tmSRtMH1eoGoGCwTFM1KfDyFZRnEd",
  "key9": "52GYyhsw1FLV2UbQcMnGHAgrg2r5tcge8EcsbxXmck3wYvSditicr6Bj2U9uHCcSWk9YAxM46heeFNamPTBHKmyk",
  "key10": "2mrNAvXNgBAha7aszMpyUgnuD47Nh6dEcMe4pPTCdncU6ZUseh8Zgfng7ZEuf2hPWLqtJMhuaR7kVCmVYJJeSTt5",
  "key11": "55jainwfFGv9v5U9UMRSBfXN5ndrBGgm5YNXeMBmLrLZ3w2cmRMpyge71VaT8B4peE7WrUfYtrE7jofHzLfjwbXM",
  "key12": "5PSex9GnU6RFaMZqwo7GRhDME8ury7rFznJeg6pA1axeDoPQPcyHaNCDLKgmxqaUxttF95WFWEnEtCckfGaAnGRg",
  "key13": "u8Usk4WrhKaALAijET7vGb8qZSRiuxKQwVhsv3DKWe4Me1dg1UWMzdT7aqxEfHZXXsnox6ZoEFKnvjNq4m2Azgx",
  "key14": "53d1ncP5VvFsXgNGcpDqLZSjYKUP31vLBJh3Yghih86ubyaMhXSB17p33MfhAwaCFqG8KheDtR4irDPqZQyxaw3C",
  "key15": "2NrhAHVy46RfbAcEGNjtiFhFG1CvELpYi8XzDYhU8WJbgBNhVgbyiioVQPfyWydsHhyCzjbN2ny7ohAFgWtEssDd",
  "key16": "9m2YFGTdAK3QTHc9PfqsnXtZpyTme24FWnJUZnkjoTkjg4aZNqbPnpuUTYbLuXErZkmzLrKvbtKYpb4qH4kbDBP",
  "key17": "vNUqLBScyYXr2bm2GEDT6EhpNdmdsQPhQVTzZwoNzAphNcRtMx9daJ8VyD5hgopagkNa7AR57E7G158NiApUg6b",
  "key18": "pKLY5dvQ9KrC9KrfgJvc4WQVgiRXbD7DZfnjKEF8vxtrXXAFZAvY3YHimmi6vPAJXkfsSC3sP4Xgexx97wsbEzt",
  "key19": "2bVHJpHZqrhtR5UjpXWYmw7jjrpeinYYF3uZz4uzNWDpHctrdZkAgHS799rdGbBg5FP5EcD2XHUXDmBMc1B6HNFe",
  "key20": "61AQfinMNqYpQC67zan2rYB9rbm4FobhQJwNwAC4Qgr8xUAqpYj9GDxCStCbhE999Luz1NeAqzx2cYysuR92W2N1",
  "key21": "35xRsGyfmNXujJC3DMkaFjersCoXWjnDfsxnohwG7fQPArR9euH9KGGeZ4eG2oPm7GSVuzV8k1J7HqzBcPPAB29H",
  "key22": "Mp6t3C8boemdekLpNPw4H6HHfdjrkibHE3acdN3ezoSWTRGnXgNiaNLeqivbLaSfZZARBXyXBDQNHEg1k1tK1Um",
  "key23": "4tC8yAm38EXWbSxFcmjw8iJVzi62kgd9q8TSV3zJ63PjTrPj5KJQb4PLtjYyJCXcF9EjkhnWBK932UpNyH2qdMPh",
  "key24": "5oFQFjtgwJQAEbwp8bBFi3ok3UimmSnw2wFfrTv9zxeMXuEPHZSAtc6bnVqxekaaNffHQjrDqn6wHjMdMT7kckiX",
  "key25": "3dP4iANS92KPvbRkBmtoNZMxUcsJXg4X4DvqmoDhpLcjkPL5vD7GDzJvpY3wNfEPsyFqQ6Hg5AsZZ7sozfPv18WU",
  "key26": "UFMqa65mUJGTcZbf7TvoVqsVSYob1EJ43EDVapNxmcxbnVvkNMwUiyT2t5Js9xzpjLYSuVwfdUhJJqy4D8tEB2c",
  "key27": "3vFkZvTLXZSPFJcUgrmWenn4cBGxRCx17zPiFTMA8EA9JjBWQGggiAz29AqS3ZjvxHzP15xeUA9in3B8JoVS836d",
  "key28": "3gXD6YsRScSBpvS8y52zx4BeunN1CHLwDUUaDYmBmmSXjQqnB4iDspZ567XNXZHE9UQhgwo7SGmxTFw1cRNeR4Cy",
  "key29": "qvRUBGZhLPnpnsE9zKmhjvsefqgt9dgSGZuPUs5PJBjFFJmFkZzwMs2koYevEfzBBhKzFtno9eomzXumLAsFWGi",
  "key30": "k8hDT3hZT9wCaQw5b165mtew1NqYrbLHcAwE8Mhz6krfRj8MNZ5EyDhby2uPq5WJzAzLnjD7LswhVzTxHtD3Scf",
  "key31": "3SkEt5cUvB1Bu144MDrW7wfNMT7XjYsDkUVDbq7iy6cAXdoDmN2obhFoN9YCbz3937eXdV4f8uUeQj5dbSVd6cD6",
  "key32": "Y5heXaRyd5viVTX89mSgQZf7pJz5BKPqfC6v9uwaazkyQPsGA3Rmhoq6wbY67R9FR1ggjeaxerDVNyxLbuPiL72",
  "key33": "3RBiyzY29UFABfKdbrQkLsQc5Dg9eQLSzMDnZDoWsZ64s9SLg4de5aJ82JohKBP1vspoB9WCvXY5ybufAkzAQuBY",
  "key34": "uniLD6RiXwVQegk4Fne3JE3xTJdj9FQp5aFwRh3Sb7Pvf35skYwgKDzRe1RS3daj8KrVXQshCf1VR8NjNh7NiXN",
  "key35": "4gES6LGus2iKoMwLk5cYahGsd1bj953t1ny4uSrDhybnPEKxNSroEpXfuU8gtWBZbJqvKpPMQocQQxRS4whWuDTp",
  "key36": "EXiKap4F1xHqtFMLx6oGFKXpYf56RJERDPQy5ymKQf4wto1somX3Fjqamp7oUxMTpEAzHpepHnYGSPXn8ywM76s",
  "key37": "5wDhkYJhFWXyCtTLEUHamAfKBnbRSmF8nsidb4BSRy4zemL9BFKj45dpxtiwviXo2nqUr8A2kr3rqBiGVpFy9Yf6",
  "key38": "3Np6xDx7HDrXZD8HdDU5xqbSjcCaLyh92D5tYhet5o2y8MEYAshGFj2HQL5g6JMFdHhS9JXxxkfczoytThrvFn22",
  "key39": "4F2Yhn5fAd61rR6STiYK4bmHA83pcJzr1RDeDCi1SfECj83GEq8mJfBgAJD8A6GEBF4RMQZ2CaRX1YxD8FgB7Kcm",
  "key40": "5C5kVcKB2S9mpF9U8JcDXQ4JJxaDY3PQJBp2Y2uy2i7c1UgWQexeaQwxBByg91BHye1BUL5eZAY7kuNLZAdYjKVi",
  "key41": "5m29wzYi9WjAQbngg2TMLYqzhCGiCGwwupyYWeewBJvDEzeeA5ifKSTgT3wpwCm8gni2uKzNtZ7xAZnquUkZ6Fbr"
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

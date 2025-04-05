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
    "2EEewj3PCZ3mN74stERYDpioZv6xLs1LsgvNX1umLNV9cd6DyNDH2rHRSmWNpt5i5p7Ni5UxXJg5TuWgAYVFWNZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkFRW2xKyZayFTMVT2N5hGTm61ZfVr3tUM1RJ5zU4wLTpWHjBMXVKZSaQKU3qZx5mMMqZCNuCLQx6PfZ9mhRxZi",
  "key1": "yxUktFGhu5R6o8sBnNJ6Pm3bWbztZkgtLZZo2fP9QDWJsnaDEiNqFKkpqWjfTjT7VTG5evhrCX9gKZLmiDnEQ8X",
  "key2": "krjTT1p8gWFsQqiJ4j3HFNXLpbYn5b5dsHBFqUzaiaCq9hPim25nTWUwYPQA2EMY7MQTWZNavqHCjKHSkkCp2HR",
  "key3": "3SJQGNmsNgEdWkcCsDJzF3D7EoRWqtpeTz6QpQXqpf8o9rdGnz5pU92n1qdkJyrCepQjurkSkwe48tboURMRpp9G",
  "key4": "XNtdU44HK4PA6u9rXxcSCbC4GP62JMopY1RRBysRZpovcW8GezpZYSp6waWZpCPmgooom5a2Vrrzhdqqt3iXxbU",
  "key5": "3z3FktPz8EiqqC9tRNLQLqQVXpdMHFShcyUnEvPUvrxeKZhbmQ4A8XQzNuUf3cuF2vyTBHUCmAoQiQHoep5XsaKN",
  "key6": "2zZt9hsGiBTfquLn5H1niX5GEVfNHiswUuznDihMaopgx5NDmx9dKZEwv1WmJUu7rqDqycgKNvvtwyKTkJMxLYnk",
  "key7": "3eTsn27GHS3ghG8haaoffPGw6tURMiXniAsn7URZSBNbXXZTjSfKyyANEK8PyVWmzPhwdnypojGgQZ8bqRxQbNFq",
  "key8": "KfkrMPbKnK1L894PH3nL31YuzJJrvjoj84g6eqjCDuwN1mWspoiGvNmh1n4eUuojZq2SpKdaYrkQG7yeEzp86QT",
  "key9": "2jghib9LM6zUFfGJkqyiQQ7CF7H55okv3JELt4uveyfn2miHEJbp5GDPx5wnu2QNiHi1JXvWj7YdCTfh2We4wVqB",
  "key10": "2ih2vz2zybLFawBV3Sx78vd5mMmi4JaxHXzUT5ntehUHA1tsxQ8nm5GMxEPhxXNcueVrirCfa1WuM1xmpQQL5mpE",
  "key11": "2vx8T1e4HgttxMaNmrUUt83w4Av3hxQvokLgYxYb9NGrn3Qb4mWuTBm14xx1Z94AVnkJmNWT1rGRBYsDZzvuaNgj",
  "key12": "23RhTv3B1qj5J13PrbovBxPM3rQDi5z6T8shxgNTToDngkcKVisNqDDsGzErHDMDg1etdmoebbLQFYiZF25jBq4M",
  "key13": "4h5Usfm1Gr7u2ar1v96BGoLee3ZALxJqmeusLqL6S5ta2XeWZrEefTWVYXALAMH99FmXyRwdbX4BvxYoAke6gW5i",
  "key14": "2epvvfazJAY3nA5p5PKXYeJSZxqHi6HEBXXvHVX8ev3YrrDWjXqfS2FvcgYeHS3KoSZvGAKiMxhnDMfNKW6K4RpN",
  "key15": "34Bt6AXqJFiY2qPLDyHmtXoDEBcdx1ozbnoPEw5WKN5J51NLojmAXiAgrrM2hvn8h6Z5gV11KykGmcifa7NzmGE",
  "key16": "3LQjV46PpxbHSNVcT6K535bWXjEwQNipn1JtmhDCunAMwaMmUuCzsu4z5xvgFFTJQ7ii6YTbUJwWA6PgxSdCSPF9",
  "key17": "5cQoaLSBDHmeNZVsD8X7AsboJKgjRFFWjZseF6qcKmN5Jk297NkCG1zLdjsgKBBa4ZH531Ve21mAx6nA8jHgh9Vp",
  "key18": "45iHFJRKT9rbjbEo9xpqB5w8TWpb3RYBaAC33PcpBs94j4nGQuDULwMCjxLA4FjQ3EMq4tNvWwwdvaN82L67395M",
  "key19": "37D4pW69JPmtLEr1cZvNJgSXSvXvod7ewRPdBcXorwA5UCizBtoPSKMCY34zdmBb1Gp5vjo7xurCjVwr4NRxWU2J",
  "key20": "2B3wNM96q4TFHuvvqsD52BRm1QkiwejvHqbj3nGunKfCGLUTH1vAW44sHCi5ywye9RqV8NHj95VAXrwh8pzdS7uF",
  "key21": "KnnGD9N3XHgYkqoiwRTGcmhuYdyoedrWJRTkjbc4NdFrx3fqoyCo9BEZ4eqHWjzvAnEHVmupJ7QaPJpbzEAG5wh",
  "key22": "5YJEDEch9SP3XxR7zRDk3c65QVQBRij1wjW2CjRPirC4rzsSosoq6JFHHEkNSp9MUcVzKQDYVKMoobWpsBEheoSS",
  "key23": "2b7iVfmdhnxtWqjjD48spr4Z3dCB4W2ivim1aa9aKsGimGzcc48dprse28mguBxzPVFo5gKma2VtoZSAvkJRUBQy",
  "key24": "5vEuzxwgK8iPA4eQKu6D8DV8Jiic4nYBbmRkkMFvD2BijBNCJEkLhVe7UU9c3KP5XfFwhB3TkzxuByBzb3cCnd8U",
  "key25": "4ViKH7GR3n3xQVqVxDSSUVoFXvkSz1vcYxbMcoFt53kpfBJdbjp211zpf1kaeLXM5ryA6CnfcBpcM3zDVaJ2RjQm",
  "key26": "4JRNXupMthGEJLna4Ue4nxj1fFwS7zwhGZWosN9KnmT4tARPKu6m1ME1e8ChCkrQ45GmeUF88SKGSSHgy1M2rd5J",
  "key27": "46kWBdjik2tuc3pApxQJCmkfYqK3Mm3YL7sgHdtdDPaeKtUw3N8ThhTRJRBxBvhak9NhsapcU52s9K2Qh7p6xgzS",
  "key28": "3voPa9pFPMFf3JSDvHNzCFMj5iEYRkHnfuivK2yp7j46Qb6aY3X2SsDew8AXDJMbht2WTRuay7Jys4UED3o9umXN",
  "key29": "RAaQXHFChnCnX7dqqxem5kCa32hWV6jxENWCcqLgktCLwvJBDvYxcgGMarsxNNtza3QRLez7nw8oXsWGBzhtG6Z",
  "key30": "3pneuxFq7aFTD9sK7TfxikQYaSr7iVPzBmJQH7Z4PvFjkHTnoY3zLD1H4vDYcdiycjVk3TkZ88gCps51J7xbEYwC",
  "key31": "59pasKFuWMstmH3M2nMr3GZpsUFqoV8KDhWXxUVACnG878HU3N6GTd2YXqFaSXr7vuDhwUTBV4zSxazFBFogUu7p",
  "key32": "3swEKyBnBDS7HNPbLybBez1aPvYC5L3s3wdzCXRqVUVgbRuXvXhmhWTqovDGygNo9iYsLymYbuA6ZHh5LnnmnYGG",
  "key33": "43UNHUm4PFTrQozU5YZvZV7a6CGMym9HUThB9M2uB742J5CkPpgixqvetQChXA9EhxBMyq6QDyadpu47k8NzwL2V",
  "key34": "Su2ULY93Wo8wEUcG7QbrBqU5Xq9XFpafLi9h5jCDs1FReikFHpsYfrNU5CaiYfcgfRSGRDyA5tYYH4wReL21yym",
  "key35": "2ebGL8Yq78z4RBEnQppU615ickJdDVtGoDzxvde2zvoBoJ29VmcwcFiX8qK1KXBFdKH9mWQBNNdAfUkKWd9QrnRR",
  "key36": "5voo8vXg2BQrvR17sV43owkfy1d9KvpyzzbDsJouoq6UyBwEE4jaT8Emfx2v85hupbmFysb5xtjwQHpD7pc36fkh",
  "key37": "G5zuQbYgq4np48asYMbnCeoAkziaRZ5CaUh6im6BtDwjM7QZDPgRXJuu7KQmzFbCPMrvSLRt44B8i6LjGtiy8Ex",
  "key38": "5LCjHjNu1mGvEfcSDF8AajiVY8RatwFF4sGnBbAj8dH1PgdzG66PGgSNegZjP2FKRB7RUdKr6VHt1ZXsFr4nyVBc",
  "key39": "2M1aKaLfVhfnNPjSic4n4NGZWbhG6PtEHv36PttdB9Lb5Z5qBVTcZYK6oE1JfQuo9vWuUrayURnKVpsFTkQ9cQ3u",
  "key40": "4aLZSVoPJ7DKbm2C1GzxDni5K4AcNHoUq5V9UX9pNZZFX5jJK4W66mThZsErHvpmfzX8Q4FUMPuNDjNhCsem2AVe",
  "key41": "4kTwhzqFxb4iYXEe77USRKbP6hmYi7uQbE7xgGigKSDhMueRyv2iXE7UZ3jzesnZFfJufmRau5GahhSoAdmxoZ9c",
  "key42": "4Nd7Z9oiUFgqDHmyY8fobzKU7g5CdB6HxHBrynSxwCVNWGUodQjot4bXcMcUP8uy3cwKTzWxJTJU9jnnEWW7SjQ9",
  "key43": "2MN7iFszEDZt8nbiHGHowBeJUbZTkNmebCGYKTFLBhgi2TvHgZZAHFwAvFfUD86ejH6Y7QTQAcHDcEBqAJbMMmsa",
  "key44": "4jiink2voA9vfAJBN2afmk7K4mmUHvhQVJxmRm56H6gvzkDrnh8PHySWVKssvBX4rM9ygxUTT4QT9RBfDcXnfNiy",
  "key45": "6PRj7pWhKaHTpQmYSMqbfDeJtD8vHYpyfhpgkK1vE5ekvxftSAfgeuq28miQaTNQ6pRbVztMWiStK46nT9DFz9N"
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

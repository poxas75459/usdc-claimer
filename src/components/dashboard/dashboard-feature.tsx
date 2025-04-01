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
    "25Bi34Ae8Zse6o6pugVudWjBuJVBzAFRg1WEheogWrBGXwsXrNLQA9ENcgJUYSj1c5x9UUvz7oPkKnmUoskaeVSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqrRHiUfMsZDEVKp1sySgKkhfrBwbBjhMMT3kKp1ZrqKRH311W8Fsq3Xrt9An2RaEf6HJduX8Ec3KK7oSXfiThV",
  "key1": "LUNkHw2Fj4rZx2hUiLd7aXyZQWf6MAr9jzh25ekazebE5aUDbf8Y3tCwCPRVcmRRPcWQsMNQJKc4wQ1tJZfQZXV",
  "key2": "579adKBH7qQyNgMtgj2sdZ9zWK92dGU6q64AQvo1YToKF6fnHWZiP5AhcjkrxhFGfUqBTj8rJeUxLTMUzBHZDfZx",
  "key3": "67Yt4RPxjrB4HrTKPRbEA6dyEZdf2JdpEVTuyD6JzGLude7Mwkdr7eJuwNyxEWkmTn2S86xiYJjsx5smUMksUuZJ",
  "key4": "3xKunY2r7KdKdSqtvcvbFXqkx7XfE9eBvQPEazJsH7utWfXLfvAn2jXrGzhKuzzfuqc9C6WdYmpmxhLs4Ebt5o7W",
  "key5": "2WzaSUsbwiw1yJ4ZK6xvEHUsyo92ANGHFZwsUydzpLfLeSvcgFrTLZCiSEvFQfwvWsQyve1cMq8bhsAj4EvJ3wcM",
  "key6": "4PEyx2dBL42nydEnPRCp5qgtGC4K66BKU21UTfuis1G3Jg6M84XExwrMo2Pi8va378GPSsuTFRg8LYzaeuHxnJeK",
  "key7": "3nBuYUGucJUZgbwzE6N7kLNG1gd52BiGF4UNk8f4vR36dAPrxqpsWDcxCwyDBwyUqKBMF5eKTELKfTe6PoATEdvx",
  "key8": "RrCL5843h2kWDfAVFkaKJhi6YQbUaxnNdMn8MasXg9fhk4Bt5kLUnwfvzWEVNDtWjhHSg4VzbXGVAjc6iynS3FX",
  "key9": "2DkZuLGCWphm6BxCFr7rDAEiQeXY3cBGKEzS2KNHDYf1SAourFXgd1ehCXa3uTYGAmFzNRmohkvxacw21v16aaBp",
  "key10": "5TBQrEYpasgXCimPKS9nMpGQbL4VPSDpJGwwZx8hjiBUyDVsFZqoiFHq48A3MtTGZVksXvR2ghuQ2XwrQbdWFZD1",
  "key11": "o69WusrcnzQRDqj5ra6utpHJaAYNVWGkpGZddi8ZW5FXJciA5ac5oFiayg2HhkyN9CSsZ68yd9wgWcHgTXhkKgg",
  "key12": "2APpKP1zjnsQmm2A9NAQd1TcaMmZ5siG8uJG1G9GYX74UA9MbgwPduaQGDSLnasQ5ZNHBXn2Zw3UUuFon6CZHtLL",
  "key13": "3obM3XeQXFr4tnREH6pYTygGwQg23VUg4yjDQgavyFEQmDuemb7JzfEAdvFyJ8etvHCp8x26bTFSxtDgDuAj1PTj",
  "key14": "3gXooounbzx665XwiSnQ4jucJXE3gBCkofkPQiN95pKLnFkC2jwhCeBWpkb7FuCPqCKAe7kLb4toBtoW3dtLUy4a",
  "key15": "49ogSTZaBGgqJVwZiJqGduMy3bn2muZxyXCyd3nc2mfxgobG5e4cjkS414ueQm5TdYisByXxdvuwrE6AUCzKm7xU",
  "key16": "4QvU2zRVpzHQkBApVcGnJmK76V8aoA5b9R44jgJLxejtU4vc7FdVoNW1hJDHcYjDncpVyPqGVnxcgixPbs7Lvihd",
  "key17": "2vQABANajpRL1ugmGXpa9C8XyYfMkqWJeAAPjxfh8kbGJg23KRqQLVdbJhARfdZo5U1PgwkME9odZuMGgFwWNJ39",
  "key18": "Vv6GHgi83jH6ELSCkN56gBrLJ7kM9imTbRy2T9KtUHjDsPZt6TvjfAcrKgqSC5EAhtwjVVFodh4Zc4kQTxraYgJ",
  "key19": "2rtxpj1RnSZqL6cdbkd8pQ6twzuGfGV8E5rhAY8osiJMVwaKS7pRNr4rMiPoAbdBSRdHWdPtENE6kvtmvJnXC8kT",
  "key20": "SjbCNBMqgAvpWHMZWJV1M88qUTzf7wPDGCHNQzFj4Nk3u87u1viKfE3rVaqjoiBbEkHruzQfhHaTNUnS7PrSBjE",
  "key21": "3TpVqCsrFbsfybYB4P3Hziksc8jV7vwKcshRzo4gJaq6AuhfA2h4FNeSupsKBJX2hMWaqpVrZZBxrxNzZYoKwH8x",
  "key22": "4m9TNM8QBMfqQ9JC4FzjvVtXkfS5n2zKqaey715Bqx8dZctEdpVVFueWXmcyw38gaEaMHDmyhNYq1AKg8apeEWL4",
  "key23": "faZV65e1zMb8N1LoXcyB6iGHL4Y3w6qCPnDxNLnrQ2p3DhGZJikPFFFgiS2SAVKZ3FS268z9Tk91kLKfy9Xn2je",
  "key24": "5RKrNGdymwcoTUQ8sHV38EuBBpZq1XGZFbN3UhA7jSt6jUyd4xU3xWg33hkGwYBJNGh9A98kjC1TybUXS7RZtAup",
  "key25": "9rWXgeGMTR8EVtVDb61K94i9etiU8654CnJvdSZh69n2LjNBH6L3iAB2PoTtjesbR32pRUoBYy5QgTASzVzFqbR",
  "key26": "4yL6apw5JP1FhbfiBbzbkwe1bpMEzyEmnpUyQ2SaTCKTTrk5N2Zn32xVSnjMw68kAbgszD21jhZDAZZM9MoXWi59",
  "key27": "3YbjUUb7xQEPTi5kFN4Hea5qixKcb82qoKAjErJtjUg5HkHDySGvbqZfEsbG6nQXWRdtZCKaugqZMzU1uB6Srryk",
  "key28": "5VsuYkipTbWgtmLNde7rkcvi55j3zdScUSQfhApwgX2AfU49XFdX4RTz7F6rzScajTpHzv4fxutgn555riu6gTDy",
  "key29": "25eWi51fLWZppvx2JujZuKXhEyk83KGnyBgvf3qUgDakTzbEtbX6QehvvVZPfAobP9cLQW3hMp5s1NrjGjXGGKfc",
  "key30": "4oz3yHUMoHaBLeQdFYDx6UPS3qBnmfz5nDSpaTHAebi3Q6CPt9Kn4LjaJFFUTabfQkZmUqpirUuuW5BdoLZwMykd",
  "key31": "2ptfJVpJw97Sb9QPDvFrBUvbwVS5XBKfzU4VzgpwiaMb9Y4oMmV2btBYux8ux25SPv9gsYFaQMDYBvswNJnvStbZ",
  "key32": "cwfrNZVTbb26yDq4A2JFHmQnbk5kH2o7AMUhGHBZ29rHUdoroDXCyC3rgxvugz7JjQ1yAdzh4WV9nv5yYb3SWnD",
  "key33": "2o3nLFKxaZguSLco1waVAdkuBtnYrQ9iAstq7NtZZ8hpLYLFAPhbyiSUYKMWywNX3GCavRGod1Mkz5RqzZLa27B",
  "key34": "5Qujy9YvGj4HwWfkDjZWcTRhe5V4BWjuCbj3vASz6bnnpLYPhxVrrjvDVzStGxM8aRx4W8Lx7rCCda6unY49ZHkV",
  "key35": "28GZrTJNM98Sbt1LhuNyi1YGqswK71LdxRRUZtUzpUpdpkDFFqPAV6cX32hSzt5L14RcAoBxDBy7tPsKR3ggLPjc",
  "key36": "3BEy2Rky6orxcH5HW4gpZ9dMZ5djUJrY22c8Tv9pFkSTzMethhm7Gxd2vBvJ1Wu7dWeqLjGn5txAAm3LY32HQtqh",
  "key37": "66iENp56qmCGmhyVzBj5YCkHcDVukmQFYEqmrhaUXJihZtorTbPtjFJSsiRd7uAb2ubdMrbYi3qDKiztfxZupQ2F",
  "key38": "qpZX3887bmVQrx1MBzFeFjoJPtRsX548cJCdRhbWhE846jsRC5FMqrK2mpHvbpX1SaX8PVYw1P4poyay5FYSDaZ",
  "key39": "3bUyooZsQuxf9wiRDUDpukFy6d4wy1LsHxFnegd3CUceikF3kqw78yeywZviN3oupLQW7NEm2RaXRf25nZrd8msj",
  "key40": "5bDq2feWdvtEtboWNpicxf3aSvVCbsxsirXcyKUPQWjvJNmMioq9PNeQujHvPX3Ks45arCH1c1xThE9bCfyA6ZBo",
  "key41": "3KMK35UaexqpuXtKDqm3L2f18461Z5UDfG9owsYc5iGtsw1mBzuYn13b5my1M1EWnNmwYjDJ2KsA4UznBBTCiLzx"
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

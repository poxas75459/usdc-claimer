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
    "2KziP9SichTPyvtQFTgtVMWnFd66jdzZsKjuvkTeNTYzFXqxf3gnffj298nN3P1n3orWA4BxLjJmdmQiE3HssTwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "snC2h616yFdxCZkAVDtb7m32woNrsPJN7R23TM18YAkgFYHEYywmDFridecLqkmtPk9osTjuaigBsjXMe8pz65n",
  "key1": "4PJAU1WZnH7eC4g1Sv7Dj25ypgyCF65xpjDgrEetC6yV1HTVRxWGTDKSSfqXtYV84w4ixtQ348bk7cWgPutfqJEX",
  "key2": "66rKUUhNauwJQpGx7a9YJfwsve8KXcRyQZ8MnDeC1YCcPNyZYvv53Ksf2nCdmSLcFurEVxsYvwM6rwucNwENxxCD",
  "key3": "5ctwZKUfMRi8VbFSj62tfyfGtXg4yjN25Em2tfEaZ3LEFovChgx7eTg2kn9E6b1aPLb529YkC9LE8a59W4Edi1F",
  "key4": "3muMcK6k92L5X8VoR4sVcMWuskrPukvU4Yw9iKgJBNdVx1CcCYW7TLP3ECXZMEd4zN3kRaBsLrnsSDXxAsQxdia1",
  "key5": "249UdSzZv9uviXA9vKCd1XajA7o9Uqcoi2wVzy1ncwdhVtrazJ6Y86UXaR1RJoFD1YRzjKszr8ZAKGUZeyNgriPd",
  "key6": "5amd7EwYHtEcyGwAnVfqk4qiihzTG58AbgTrAiH1QezPeGPor37Tb7fiekja1R4rRG9vY2cfpaif8hebe5XCsN61",
  "key7": "4rxd7RCxoEGvPrWGJnm3jp9NE7i1PGUoq5cck7hn8HjgXzarKbBoqoq2oTXBcugCpRzadyV7zgWAeaVyLZM4WTVn",
  "key8": "6XhaWPTJgLnHqwq7GxqL6JQAe2WoCmupF3wiirher7DawueU33bU9GxnHmmZxCqmYE5UtrEizq56kynmzoGBFKt",
  "key9": "2R24MTdrD6PfaxWNtfWqj6mnNfeP67w6LnX18AHZ6pDqbtretFGj9N8fJNacqyMSuLReB9Eon5i7hFoPDXPXC9M7",
  "key10": "4JZFLrx2JVkHyyqKw7r6YnFMiHHVm3ZykNd2qgHNBhGtopXWAoFspCNjqtSXRsoNcJnjBbSCWqoGz3UFo2wuo7P6",
  "key11": "3RCpiuRi5x5SN8GwfNbxPDMncLvNWTmBSWT2F7pbAFtKx4uu5o8dW4eN47a2Y4oFezrbhzxU4S9rRCRgmoEBe3ki",
  "key12": "3LU5EpN5QZtw6nbXJLViea1G82KyyFiYoDpgCtq5pHQ47bLS9DGPmTGtPKT79c6JU5meFrQDfYXGcARMnxo4cMu5",
  "key13": "2Gi64pfHFkSCgmRpSpt1qZD85tHdyvBxiLWLjpVdquUdmuu8QL73zEbdSNVmtssGvivhncAEnySuYB9TY7bfq56i",
  "key14": "5NNmU7wD6k2fn26W2aox44NrqJcJzPDHeZwzUNYWjHZgWg7BTBH9VzP8esQj4BtidPFh9U3u4xbLZdBmUJzjzTS5",
  "key15": "2beXXCPRy99MD1WKnepvQS3KyPyZuTwXuGe4RSWyQVL4Xci78Xg1LLB4u7o6cEDAtkmD4q41SKx1bcpBF6SghxEa",
  "key16": "57EEKYWXfsAfMQwHLBEdRaoyz5De3955mMaLXqXzQKsnEkxJZuRU9E8p8fn4MYNa1Fjs1Ejx82wGutreLKg6AQUk",
  "key17": "55jZKf6zykfKhUvvaqZFoekPh5GyGXdWRtuXRKfZz497tRfvkMdh1zyiaAoxrQErLWiC53fthMZJJ85WrRbuD674",
  "key18": "4QvUguzB4Kh17MqyuEq3DNUHAjED4PAvi1ERY85bqExoh5CUB8Q7XUCH5huR38CbXKodxTUYn5UTMJ1PapZfFnQs",
  "key19": "5Rk3uAjombSJvwaeZmM2yZgYi6D76SmXXKVSCHqzPWn1RpMtrm1o72De74xiDreFQj9WjJsdByegC2ncoSDEFFt",
  "key20": "4ssF2FUhxashW56mM23wahmQLgZVU97pjGZoLipSfuZzceLsMdJDdiUnxvpvG7xUitXYQEhg8NF6czsjaQBUZgqj",
  "key21": "5JyDQtfxS9fzmtSTZpQzK5iX2myfeL6UXQZpPJL5Kw2iDKXr9Duzpi6diM1jvsB7gyn91UxwZncbhVqrisLjYrNE",
  "key22": "B36LWUAvWFYZyazWDgdQtvRtKiCKk3aGCT7McR1YFr4k7PXDLx96jv3km9pfPyf24xZZ3mShZrutEY8psz5ygAb",
  "key23": "2ZNCJ8jhKQnwfWWg3jWacFhmfH1av2LLmZX4YpQbdKD25YtTB6WxFYFFCPyDxvw5NJTxyAqoS6QzVrjzWEunGS7F",
  "key24": "CTQyCt5RYBhznwbshCRMKaUuVD3qkqNB9823UBdrvJsa3k3tm5WCMk3ZTdt3dfB2i8djQ9J2FDthMD7GYiCZvxu",
  "key25": "k8X7VVi2fk2acVUGSmLiWh68mcx9kuQNxbxx5mFmYo7dCroyy3xP9tjXewMeCHk3wvSxHqG6sa8QBH4ER5L9VjH",
  "key26": "3ftPUB17xnw9Cmm63rWghL68a7Yapmxhp1JiP9xKDBXn8n4ftmecAb9RBMDvpzPAjSNkyiXaR7KaY8d2myhvpxNo",
  "key27": "4KyFir6edaySMEMQm1fupfdVonRFGd9fJinygtJw7AxsW8p4HgJGTrEsydY4gmcbjF9xSobNsfpdM9B8pGWFiTYr",
  "key28": "51euBR9JoM35YuSqu8o7vE4Ezz21ajQ2YGRm8kLy9wWjNsSzXG387k8QCQTgsiZjTSvxSJNPfPsrnkWKaebRzTkT",
  "key29": "2mckaYsJkPFntuUMHahdbZw4FkgpjVTj9jGaUZfaxLCK8V8HUfgjDDPZ8ak1DvzwNLReQwA4DUwQosV1XJp8rzfe",
  "key30": "5EdzJeXwezuSoXaY2br2uoWNqZ8scNKLXZRrWNUv5T9rbsdJ3p23oZRo2C6j4PN7zD94YGaaYsKHrk59Dxw7uxqY",
  "key31": "5Twh28U5zAHYP1AAkdASGmmnZwZetuG9EMHGURyhKisnfyjvCrshfA1vzobtBSi8iJDi1giT7Y9PiVqrdELZWuyw",
  "key32": "37gn1sGkx6GnyYcXG8vEE2Nfo3Suh8u9nrdN1F4rEn7Q5kS33ToapAbmwAewgdGsNHzqkamc77vhMz5A1ykUrkRH",
  "key33": "2QcxS5MAKJHxS4JZ5MpS35CxGojJLUGL3iqjmKHHaQoE3YSmxH5sTKUaAsVdvmXSWQ2bvZzJfQqLYejTxyT2rMLw",
  "key34": "32SSgBtvQGzXBN4n9XQ6Ct4prEdrTwr3RMR56WMCGU35fvDRGq8XFhLddfraGwDq75kHTyxyh8oER83ayzzJGSV9",
  "key35": "5WD24Qakuqs2DhgcUuVmvBVpQf2J7NWRkyGMfherA6Q2Hq35atGxtWYXXZDq38KCDRcKE8ixTNZ5gMiHjViCC6FJ",
  "key36": "65JwpKjGtso9uWso4WauZghGwuyw48Gb91acskLgnDaJLeg8VdwnMe5hV1bezoZ3VRgvSnsKttLyToyzbhJjs8Rr",
  "key37": "4gi2NEKCSX8bzb3NtrfBHnhxd73tB7mZ5nbaPCkKgwzYpbsbHg3hCV5zN4j3mcMaPymRTeMQ1SmKPwbpZYSXHr5i",
  "key38": "5sroTGuCq4k7Vf8k5GonHU9Ejq1nwieZP5cAM2mmskor1TSbdfRYmUfa9bKFTL58nzybZbjrrrHRYgqZrPfm8VA5",
  "key39": "2dnGkfJF4ur1spRS3Yf5VfQPJ643rFSeFeXHEYefvneJVHJkMTeAWY9hiSCcuLKRUsk6RWujkVKuohuB9dcSTfdD",
  "key40": "26SREWAkNLBAZYey8gqLeDgHueJBcqk8G6BYoTvz5FJcpaMvTNJwz4eCrCd7DsJE94W9bCH9EQPB74HZf28TE2n7",
  "key41": "3KXQxk5Anccfa4Q9SriFhjkCaFCYs63zSDqkNqMTTVJJkEZ6zWpgqYREVS1zyypBhTiQ8UjoMygQNPDmEDaRyThK",
  "key42": "3s64CM1HEBsFsSJ64R6wynPWyFs2kou7EUVXrpqr145mVWwfB9nHyFeH6H9K7oWZPytXYw5yNdy4cFomsbkXG4t3",
  "key43": "7fC9tSU92t81y6Q8UyuQe6RTtGk1ksRCGUT2ULjiGAze8XGBweL9EzgrzLdnajPwJ61gwFewZaTgSfsARji9v5M",
  "key44": "5wemMK6mrxMzRkGaaDrQRNB7VibXbaqN4rXRmHeUR5dpSFqBdmYjYZioqhiwPRHE8goq41ZqMu7ZV6sZdsaNw8Vy",
  "key45": "5hxBv3giJ9MhaqnZt8XuiYuRCF7k1qnh9FWasoiSZxuqthik1U2yPPPo6jXV5wUzWZE6CVFmgbtBVGjKfHxDJZFf",
  "key46": "4aTKLQvfLRoFts3VQYJbbHBDvgVVavyv9g9nWHmttYXgffT8CT9uVbuHsM7o3aHrJBUjYScxMFXXZKDvtvEwCaKD",
  "key47": "4r9cBS91N2musquSnWb2TK8UrwrKhuXioKrj2uNBXDHNQHfo1dHGnS1k2D52iRVJbD6Ve6gGWegLrCuvKTcQCMFN",
  "key48": "3mcoG9oigNFGm1mKB3Aj9AHgFFTqjchwp2sXzGT78VTrEDRCiV3q1o2kXW6FKGmDdAHwQyRtZqBdjmX2oQLHDuZ7",
  "key49": "3h3Ych6vnvn1FaBiWC7jq52vk7NNj2FJfhfqL64BkzLnKRvJN5Vc2WrqTTSFSzQWpe9xoE4f9WRfBV4HPm8ky3nJ"
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

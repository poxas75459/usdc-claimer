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
    "2ecg373g2hAbBpUJpg2CMQ4YhBoWNTmwJnwJFYqQjLqcQUhzJ8cb1tchzn4QKHpfAtiCQrPSzHRgRVX1KM7UNrBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqBB8TJjFNoPzhHhLmFKYifnBxm2BHe9q1HygEPfFfPJvZQkt1u53Mm3Xc7x4VWA4TkftxCyXA8c9SsYNx8WdQR",
  "key1": "4KoYcy5sA7vDS4m2dZnE63mZ5avbwK611qX1xyddcz4tdNZ65VvEuhLQjgsTdQpb2e5vWidGhxBp9W6DKE5C5nTn",
  "key2": "3q1UhEQpiHQ5RD9A4z3NDrviubjPinYxv8wUfpwbBHuifGY3wuX8uo7xsK7UBogunAoVgCe6RurBxHpq9GHssyY7",
  "key3": "5JfJp33AzSRkXf5s6Bk4ihY8BA6JEN5g1SiRn7PJCoN5VW8XdYNGVG4g5xpfW4uAVfsQUwro8rqmPkwA3FMrTXhL",
  "key4": "2AB5CX4e7v3ymTNK1uuZP5XASEA47tRbdJZWvYAZx4DGjgQMMFXVNNvcGqBRYNUsXnygq35jg1DWTWRaDz1QEfUz",
  "key5": "3zpyT6H2BJ3jJtRTPz1hQUqr1mn12LzzezoTk32kPKgJdA9otCvZvsNouZ41g21hnjAwaPewuUGggXWEuMJFU73p",
  "key6": "TmadYdCxn8kweQLt6X31RPuDkrZqPnXBgVaJ4S7FBCBbXDy7gLmeonTwAb2ymMF6Ts8GHTxWVN52t6etsAgv8PS",
  "key7": "5QZgioehUViqN6BNmUyTs7u1MCtKvJ3vAGWsGxHJuNSvcfkeLukBb4Z8tYHUHcV4XgyimjAHcGMw2YBLt1BLKd1N",
  "key8": "4dxdUXZK38GbBcht6kJXjCeds1bJsB2uvNGfwdPE2zAF3x6s1PQ2mzr8HuAaFe5xyZ1pVdWJD1epv686HFUgUVPM",
  "key9": "5VF8s9TxfhjmosDhL2EEQCBXQVej7T7KhbvwRBdUFvBGxyJZjouKhXX8Bkbt7DzSJCrgNE5FLKKDHfVJ4aFXo7ZU",
  "key10": "5bxJw4opQrY2k5UYXy9fXMhtWjcoaA4PF4cA4go9FgVUsHsSuaBsVfNS2CiXqRUkFeAhQEcnZGRY4tB1WQ9VdTn2",
  "key11": "5W4PqUqVWhiWSpW3CP89aEBxQ7rAGS7sYRjgRGMq2wMw6HK9XzshPBVrbC8B7HWK5qZXa4VnNJ4wgMXdViSe8X5P",
  "key12": "5Vnrmmsu5yz1jrgMQiZRb19GErPMNVqS5z4KzPf2jTBSyhNodi5naBxo9psiKVATjwoAWbWRktQ6QHZh9QG7AmRU",
  "key13": "64PSRggzSQWPhusMc9icbvTeqhA5D8xKGsxxFm2tL6W923qRkVBd6zjg7UqFL8ob9qcjCLw5Ex2VxpRSunRwiLea",
  "key14": "HiLt14jMEffUnxtQj5npbHXvwcG7TYqzfsNUTjM4EdNfHXNiSHaEaMHy2EMgsKnjLoL6Q9Aj5KBYPN6uNBtbeYx",
  "key15": "66aYb2Be7CZv54wBA9oL6vcwV3AskfYWYRuPUcsJEzJRqTupX251Hb9XQfUBNGko9FfXRztCG1PyD9CJZFDDEwsE",
  "key16": "4tKimSaRS3vunotsTSs3BG8iMQugK1pA1aY2AF8GfVX8xTkcwbph6JEnCFzu3b5zMsx9euDCJEjQJSUGywgoJQF",
  "key17": "5gyNH2wLYo79uzKPDCS3ogCS7dzffkfRtr8Q14HD73cXpEwMiwMuKqCCWHXbbwHqcr61budQatneQkurt1bHXuwd",
  "key18": "56onxg3FiyAa8b3UJMEoeVwUoenCsk1FnSRnkiMobGh2Bf7X5JzhdYtXnzZ2ECZbGxTYNbtgiARz2X4m5XkKZYXq",
  "key19": "BR2HAVzV9VB2H2in4KN6qRunKasYXxjDu9rbXydcNPiofucuj7nE9gekggW5DNRgpPcQYBVFbVija65swGZxTAV",
  "key20": "5wrNEPjviraP1zFUZdjo1UtWx9ZwitH2qA4mMCn89AoarcHDJPhb2U8P6ctK9f4f9jGtNXxvXHLd93uJ9AsBQ6N7",
  "key21": "tD62qVzxRFrGFmaKt6niXkvLKgxoGhnGQXwkpQHQ7KDWSGHbi1zrDCa17u7PtbbGU4npde14qq1JXWbjP1iPDDo",
  "key22": "4ApKy2ZDyLKsWuX6vg1Lq9PQF7CnsLmWZH7oWV97E8uM2Bdey7ETer31zRgZtaySdkFXaDjSPUh2pDKqD1Xm4Y9Z",
  "key23": "2EarQWkZk7N1aE5jhfYkPSDxR32hSfS5poVE6g5PHZHjRf7JReG4TS2X5k13HoXyfhnx6xj4Uupp2PgjJo1BThsC",
  "key24": "4zsq9UfUhfdPQ49m3XmufvCrrHi15ogN2dHAohVYDFoEeCeZybsHE15amYaemumupo2yEfzUrY4gEDPW15BpEbWB",
  "key25": "f5feCpdYfoKru6mZChLF2WPwVtKhUYeU17zQs4r5zogMs9SREHPWLfJPHV7apbYEDhuwfi7emVY39w7deKTV4id",
  "key26": "G4zh49EHvfhy1HQfpWN9HNjFf6Ju1moz94KZf3GHjn7C1gMQyqcXcfrLG71Tx87RCuAoJUnGhTMFBuffQaDNFCf",
  "key27": "4nGUFowFgcRnCwyQQ52vpNVxjpj8ajeCaUixvFVv8PnhgytrSVmaPHEA85ePhFHJ89w4KwrqPpZjAD1xJwEk43Td",
  "key28": "3b5mxn7ADvMgtNTZvfn8TdVVNK5TxR5H1CxXKjHT61hheXBoMSZQ4zXhdFknyfduTXzcBdH7RGBDLqt1GrL34HCM",
  "key29": "5js4UKHryAo9sLi5UPgfvAsH7rJe8JQRP87eQs8KcS21c5FQf4HTwJFs5Nb9AaP3sY4XTj2JBGHtiJYRUDYy3QS7",
  "key30": "3w8g8hfkxjGKNc3P3Kh7PoHxXGmrBY5VpYuTKaLNuG3vve5g8ajDEnd1D4pikvKCKxNHE5N2TkWmJUKRJ4BiFhL3",
  "key31": "2itbu4SdA5xJXz6kvQitAP1phtrDKjBkcB4Z7MaD3vAN4rLrMmGLLdxHwdM5Wn5NPXFfBNgFEkx1sRq7Ybf6vrAF",
  "key32": "5jhLVFQBcWjLtF9ctLVWg4zy7kwnDS2p8XpcYNvaQn9Sm5MhgCDgjpQNnY4b42LAG6pNHmYPmgGkGqQuS9y8ZpUP",
  "key33": "4cVcaggFCZyQ8Tq4ea3eVGsw2FAMDcwz52HmJ5ZMLyvBp2xxgRMmvVCQeog1YvXoom5h2YMY17yjPV9v2eyqepFX",
  "key34": "551bjiPDM4dAhtTSjn4FpkQiXGh8ypK6ywEZhJDjo9PNp7rgLkzJRV6x73NeCJjVqAUe7Y4B1VL22ZtDoDHu8sze",
  "key35": "5L1D6caAqssrv7brFZFTi9KiMG5s2hvqwHo61aAa8PCxuYtRpZybMgsAakeUXetA83yBggaK3udTNzFedGC8UKCw",
  "key36": "2sxB3FQi2KpbG3fNqY91ExjsnxnZ3hu4GXf7pF2iLCHBnx2bubJbp3pc24t2eP2eHCRFKu9J8VMRTTG5tAcLv54C",
  "key37": "3KUqsHHYN7YfG8guCsifSbXb3RNMofNdLjNkanNRb9WDtDQcAHwgGMruNqPcmqmH5E2fCaRCQG5acie7g5j42oNx",
  "key38": "2zxja6HBRFmqjqjv5iNGnec8Ws8QvaEgsAgr4unYwjhD1GeRw5H9mBNZmHBCgW2nLM3wZ7Ew1btTSPpgfZF2rmnT",
  "key39": "3Va13GqhzLSpW7bvMnf4UFzbAdkT5o2hd9eH8C6sVgKTzoQJxfwVwTwMEn9NSTAUVwRt2pQithEpESfFERumYqTv",
  "key40": "44LEQttAGLR4deeS6BsrUzAzuhE7274hCdUswPAvBwjLiDTxpxqiUSD1bcAF6FYBwUcCVKSNF5yZfD8GWiQzKcgX",
  "key41": "RfLERjqox6RERXFTLP1Tvzqtom6RnkhmPRWTk1E7j9rAUkjq3xK6KmZfYRVMiPfiZSFd6GHY99YjW6Xfh1owKN9",
  "key42": "39AKk7ktNr43ezu5kogPSUhhZhUtdbUoVW9icXP7vpeJyBaiWZ7ZXiH4TyahGVLFLQNFQdxauCCmUbeZ5EM3k4Zt",
  "key43": "4JHGWQs6Uau3RcuZKP5SscT7bUrsFfhrtgfhy8TDpUQV7kNzSpMnuK6PKfKBFSydGDXRNwUmvvCFdKXqg2er8ekD",
  "key44": "35DQ9mPRCDu443Mdot2DKbQbHTxueXFZfJk2K4qzRd7RKeTnx3bNJPSUMHZAX4BUqKpDAS16fUmc9kUnk8VKgZf3",
  "key45": "4zJgUVkqUDGBwL39HGTvNmecmLsEMHxJqmhUvNgayAhQyJEXetok198kJsULSASPtvqPHje8ukr2BXFve7Vnb4J3",
  "key46": "4FSEDs1NfpxRjBQPhnH1fwjob6NXJUomGbEg9CG4EYTxPxQHHNN5gtwpV9dMoJBJgd6QrqiEKPFnT88mH1yPGuPn"
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

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
    "A2P6URgGWfyTNynQYXhNHSgG77ryZE7mywUhcFfzQbrXbjrAHxiM9MLYMqBR9hoJQw8TBn9esZH8XKx3zBB4Wuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFRhtk9hf6UsGJHKHoa4o67yU21NtQWcVr6MhSvD4PmevYnDyxWYAHrvVD4R8BuBUBNWgMoKUHTChkJp9ED4Pjc",
  "key1": "3TxCsp2BxAX2Qg81sPGELH6pUh3B1wGHWfLu7GXB2gpci9zyvaCoBFownytgceumBvGNWp2M7ZX6dCNytHmgnPBR",
  "key2": "49NomV5Mi8as9DjPdjHHFrmBNSW6TpBBsZdhxhrvxP5VjYKTzFiQyfzXGN2KeZ2MkfW4yECvbWdrVsr8wyN3goqb",
  "key3": "SEgyWdY2hPj1AfsXdFY5aTG8bSNZpPkfYiby7Rw6oMznAkTBJLdeYxSfHpTrKpc7APgqSkvmqeci4DPNQ1bpcBH",
  "key4": "31orGXz1Pyuad5ye9q7HPNLQP61UUZcFi6qa2zfqm7XRKyAVofPW6BharYE1VvRanFhzgTkRFVPjdfGneHf7vfyM",
  "key5": "2PcxnGGfBD7Cahsh2sNx4N9EHjKZbXFkPn6rBWdGdj3hJ2UG4jcdEFTYbnSFYdq8Dob1JC1xwQPZi5DzqqUg1Tx4",
  "key6": "5GhWGe3oqZnUpR3PhVxY6N5RpHPMKmzKeadivdRbbNiYeEexwLHefxoutRXeriYh9zWmFSyY8uULuJSAGNPZYD58",
  "key7": "4FTQC4XUiL2caMtemfWcqRamwHA5ZfgJ6WXNV5EuG65EbynCcoofJBMwcKQWXN3PANA72JLDUbwGf1KWnuQPr2Rz",
  "key8": "2xMzx831VJH8xqrdkwNvBEJZnkiUeYzqkqaaxprLwAbeBQ3ZzyqgyUMydBNLTcH4e2VJgEamfP9HQyV8t3WjrK1a",
  "key9": "3EP4ymiKqEbEV25YnNq8wQT26g6bQP8wkYVQgHswEKoJxM6Qd7SU6SxNU9JXidM7tN5whyaSSzbkFZ1c8F8z9yt",
  "key10": "4hB4A4jCcNwNQQppNn6hLXu9TAeCK6JChgERns9rPvxYSGXWf6VsYz77XG5fjxDMhgPc97btWQAdkpqbs2qEJc3s",
  "key11": "6LaHtgzHrk9isinDk6DBTZbXkToDh91as5Uve9c3z3zvdqZmTgH6QDHmwB3K51w9QMPsmg83MofnttY8jc55fuM",
  "key12": "5pBfTREqe8P8p5N1WPVhF8JqAxhcYboB4PEW2JGWbFH35tBg3tb3r1Q2jtozWcEhFgHjiT8hFULqFciwZDvVT5EJ",
  "key13": "4tNyNfPV4mxcTgKyn1MhR3NGkJQWMmu8NksYiqsdwH8ddhbbaJNAuKJr3m9iFCzNDfiZPHu2igCXSpqbVNpL1dnm",
  "key14": "3guRj6W3i4uuZjf6JnRiBjEYcmfyLGc4JM818SW3rMVzryydE6n95oTJHGPmSnKudcphvVnzjYEzpZxaTAZdywtN",
  "key15": "2DLPETm7Dur4Hjoa6krCL6Roxp6yE1nanmFovxsABR4sLvT5qLPbLrr5KcNMGWj7MawjGwRzBrN6Ck5Kn2J7W9oQ",
  "key16": "4ueN9jLWEDLWBZ6hHTkTUXdahzSGMRjA4q94d6YV7JobBTPDaCgburfQxGZgHcDTx7s7PE3qjntXJdQnMQn2uKBM",
  "key17": "44gHac76poEEfbZQy8HVbUrzTD1WNphaH7KPiNgf7qdpSgnzuLernC8djexoewS5hVmHwxvAxRGXWq6igPqjKiAT",
  "key18": "59gXiShpgTkokU4UcpgXa5k9g4eDZYZuiTWrwHcUGFge5QcnRom7h1juAbWyXCqf5gCbuZpb1D1NVgsHey2yzJXD",
  "key19": "33mZdmGxtkPyUCNHcH21XwoZQpHBf9AJdCSoQhKoD7J1FyMp7ADcFF5jmbzacuWn786ubqdUvBhNZvv7Ucs6tgGJ",
  "key20": "4ZazAkmPS6QAeyeSiCvQP7ZPR4vTHZy4wHLA9ybbKt5fUB9NLhfXVt18L5VH1bmSRaac6NvZTSNWRBRVx9xpP9s1",
  "key21": "NkrxxxE8FE7tHfr6MYV4Ey5TKko1XU1zr6Vq77PX2naoz3wUgkhiEoxgeV8R5Fe3J3kcdeW6UFnuowo2U4aWLsT",
  "key22": "Arn6NAig92mV6A5UYjgJhhkqPbTbv87ovcbWHZJVADBNiAREDsPq9pKBYgXSTPSDyLo1DkCrUdjqAn34cXh5HP7",
  "key23": "218ta7zYEA6mmRZDCi84J2jHtJ4ebQ6GZci7c5hDmaeZxVedbgaN89CjaFD9Ph7buZmWSojaATHKuLgkBsv3PiiZ",
  "key24": "2RJP5LtVht6nSbAosaYThBvQdxnsQarhVjdsrP3hVHkmbn1Wmnyqu71pgiEz16jbnT8pyDfie715TB63nc7MYxR7",
  "key25": "3r6gRRGsgrvidf4y4PxdkXqg3MCAsL6FKJ8dCtTK9DSchRGjPGVVWuqxYSMVL1H6HYhMeQCw2nmw7HPMgq7z6qts",
  "key26": "4F2hcDWC8BLjL84Aa4Mss7pXbZ9ZXAbxQxjBV2mdJogARbcFS9ZCxCEY9PBAyiVMoEquaFRHt7pXZ5BAFEDQYrqo",
  "key27": "XGCpbSLGcYeDdqGWwZZ139UjJsiiTqwPERFZF6Zv7gyPBf96EtcZWaCrYh4WjuAGPxut5CuYXsFBfyV41Fwffm8",
  "key28": "263KHQaNfVz4TA14RKbsgQ6QwgQP2S2Sbofe65gqsVnmAB77tL56A34BnUw4cLuTxvrXBTZ56N8YgSxEKSJ7jS8R",
  "key29": "2YJueJMgZ3WXMUqPUkGAkUPZyRxE2wSyirsg8LGTbZTDHzwky99NrvV5Z1nCirh5oRsVLzUZzTjEPeT8WAFxNeNn",
  "key30": "GWNWY6621z3KFpLrpA6N6iCuUuvR4QwaZ5CnBiC6RJuAPTYWTPcbJcbBbA6LumEVBP4wjFuLst7FmuPUW3r5rG8",
  "key31": "39XYifiPwrQunnNp1rYDCq34WX6pokrxi1LnQHoESjYx1N1iNjS1dEhuut1jFF2iVLaLxFERyeQsM2eyXiiGDJ6Z",
  "key32": "4uTEj28qAtxfvPoUo3gThv4XA1tktqMwRupVYem5euYdt2DCpqHeMAxmYjCBmU2BCKcdV394eu64ytgkTETejDuh",
  "key33": "3Fp2S3uPt6pwarLXfqyXFxEKqoWCrrDBcx5pZ2ws2B5qPNnnHC2wCFNiUQa1gVWCUiTE7TnCmpGYqtRhELeNyYJv",
  "key34": "4Vk8rNa1JqyfNM8MtUgiqx7UtigfWb3VSECppRJL1PrH9wy5sDDxzPoi6iS3R7EpJZXka7pyYvkJjT4wXzDHoGRv",
  "key35": "4YqdReGnCpKKzUPehUbQPJicCSEnRjVsjxbkuRJ6X7W653nZfxA8rE38kLfJZh1A8xWHvFubqCmtjRBZJrYeAsPn",
  "key36": "4E7tN8JhesXr4aanEsA82Pby4ZrfrtB6A9P81jbYnLU9gxoehf5p6PW2VTBnbznag3nGR8QfvAbdqjGgCTgbRtcd",
  "key37": "2sBnHZjCBFUPNaW26xBqz3MMiZDynWcbxhp4x3fSp2h7Dir5ck7r6SNTXuPRszB7CXH9ouXxa9kS6FaJGkqtpE2c",
  "key38": "4U2ZUsJ2MEcMtpGQjshAmUL8FGcLXvtRsfGkKoH6Jh2r76rJbriMtaK16RX9iWMHpcMdCm5CKE1rUffUbe9X42CN",
  "key39": "3jmR4oaCFKgGRpp7qTmYrxw7ESxNczNg76v1TtuEnV8tAd9JNJtVEg9wbrDAfCZWQMrkBkRXXyfFXGhCthXwsyBL",
  "key40": "2rds2p6msEmtuMEjCSyeGEuZF9uospzeaNbaAdv4khBJkkMrcHx1buzbwn9c9MFD8k93bgjAYreptMkhgEF9AyWD",
  "key41": "WrmAL1x9Yc3khdSZ7Jo7MeS1cyU7kXGBo2raUUmhLLxMQex2HYuJyzn2qjFTu63ZEGtBxUVqMET9EFCNuhpJCRV",
  "key42": "4GzKeMEPQHqNpQP79wAGHqDbEYqvubLbeztYu6mf4tvPQFpx6XVwjq28Lp7dtzxV7pj72jbPcQXhYfDHhJ6D5Ta",
  "key43": "657Tf8TT3s4pFUnZetwdvc94pDTsutjeeDGWBpehYqjbjW4P77GsijFoRiQ89txJ598HXewEBHmrwdrH6u2R2QTb",
  "key44": "5oymdphMUKNbbJDZF5yvQt387yAdrwwS7uRzaUhRQohi2XfBnBStct2pYNzUw8S2rnLeyivS8ScaDguG8SKQg8Be",
  "key45": "2fSUKsAnypU6aqxDWezRH7BcCyMqhhzDL3y1q5jzn3oLznD37HB9aAcUjSPhy2VAmRtQNj71rg2bQzRK35q7sgvz"
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

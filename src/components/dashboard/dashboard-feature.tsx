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
    "4tLNkaTFX37FezpeUgUM9UWfoQD9V6LwgBb7BjJwah3KzouSAUjjfJiLc6osDr7AYVJMknpiL5tkDdcP6G4R86qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6ydYUmyGm8bEGDR5gpdmjAV17Ppay4bT82kNSUkjAzc8kWVGFUPcSV2iVUFGSK4qqY8foziGJTJ7pEWn1BWr2Q",
  "key1": "63rxD5t5zPC4TfTUunnpdiGRqecRi4HMyRSqgbeAE78Dibzj6nxCEijDZtwiWCDqDkUsrWLLFtXt96u77JL3potU",
  "key2": "4CMuM3fn7HVpk5YLEbRm1kmpSqWBY6oJ6ueq6fQLnkiaF9ZcWWd3esosFauB26puuQJQwVfE9mFrNpm8gNMzGzvj",
  "key3": "qqhXRQr3LgCjD9SqJg5TvcS4B4ss7eQVdtDci7HxLjSBW6w4MNQtSm7AfPKAmskrPKRBRwjnk8qi6CmhnmcP97w",
  "key4": "5iLpSo8tpdVJZj4Ln9Y64G2FW2C7VfuEEAYg7sqJmYaeza799BaAWhiu9vCUo8s9821nibg2EF9FA5JUQ32j71m7",
  "key5": "3nt3tcQNisrAug2uouMCq72Xh17JqruH2ufetFpeFZ2wN7Jcd37WntbArLYZQWy3FwkwTP9H25BzCzgDiVin12qt",
  "key6": "4LZypfhFve5CoewbghNwJqQNuKtspMAWPtQq1NwkcHaZ2UTxNtrSBQXgqYNfGSEmdNgYR7jne7maL12eAVjjGV8d",
  "key7": "xWUNtRZe4oWPQRWCtpMbDVfgvrXQKdkdtKUDAtHiaicNJA8xT2WeqQtXBgBZsdh9cQM1SW7H87tnn638gzpsi2k",
  "key8": "5b5pVxdzpx1mvFgEHVt3HAfy4hjbFn3pfpA8SLr7xADBu3sms1TRuK6FhLzW2cRhvSSwpGGw1YoGs6m8qLXVxvSY",
  "key9": "3HnhUe7A7px1idtQnpWAJKx1xJ4kEs6SENBU3PsGdnYfTvTTE9Uhw1feU2YqwXUymJaDM8eW4w5fNCqYY2xnBHfR",
  "key10": "AnshE51Agz16JwM8zd3JfwUzkzSZZDzLKXhw8CRETpqrR5tKP1B7A3RARMLg7U4vfEkE1akKQr6LVHKhTiRe37A",
  "key11": "44Qbe94f7igEUQUi8DSQ2BoDr7iaMk1Q1dDY4GPzbjgrZ2myGcHLvxmWnWLCda5d5Ap2Nxj5SGrD6mwirBHcJGTp",
  "key12": "5ZNAtrfCXg1Z72q8DneYgXk1etJ6uQmtR6LfBPB7X3TeLHAmhzEukVWfV9ZkLeqCviHKLQYRPnC9LmUCPfFS2KG3",
  "key13": "3Si4RUH5QNyp3jS5pbSGizkJJxnCiBM1ffRCAF3VerMMmqNUfaP3sF869gABU75P5tTSyRJw33LGhepui7qFmcfw",
  "key14": "3tCUrZYZExg6Fm3nwmGPC46Sim1ACeLiUyUu366f3AMJWFZUmj5MvgSHTYEC87Zyy1EimGvJZGtwivtvShL3pinc",
  "key15": "5JvbVyPxcysVmiev1FFo6CL3yVmKkXhY2G8BY3rskq3gF3MoNSukbtdzg6xwK59maiTzRiaaZztG4P3zzLVi56Qc",
  "key16": "4Y2tMQnuoKsznaRDYu4NBjpapwnK4VdSmUjXwF3qi2ustwUiKx5iCbJiYp2NBfjCR2apbnhkqqNcwBJP1iB7C7UM",
  "key17": "47EW9J3tLJgAmJAQLjriQyZ3B8kLneLvfRLeHZbPdpzJJpe36UQG568krvq6AUbDsq5yn8XHGrFTEA4mbdwydyBr",
  "key18": "3HGFK9FwLWFTsFbABm2WeMnhTDZtwgyjVz1mmfrjwVoew4k9kJNFzJHTRLuD5ySipM6FJ3mT1opwYirjo1i5YWVJ",
  "key19": "5qetoYGRDBQ3ChEUd9fyWpHc8Heu8VNBwg89xYmFy7VBwTzV328YZm3GCDQsUPoMEuiXCQaWS8me5SmUbCdTokAS",
  "key20": "4rjr6MrsmdM8yBo9n5ne2cL74dP6zm9QktZQiuuuHL2XaGBaZ96RvUqfALR7farhkJ6GHbtDcyfhCEoE5mYbrgsk",
  "key21": "45tTDKD393ZSHX8WUEoyWCLHzw5uvE1sigg8nJefegsJSsBTKusQCbgkufN6QCwJRDmWEXeafheLPpcZ4PRoZ16f",
  "key22": "4SixkGZhdZk7EUZr9QxBpwh7xT6fE4mNrfppxvsrKEVw42Ae5RiTqGqSQvjP2wahLznq3gVqscDJekV2nB1BsXof",
  "key23": "eWkwvkyqtQkB1RpMp9MYrU4QS2umeapTh3uYCDkFmzA65yD4nYckSAFgBGGarNAnMUDnh9ijqREhAHsM7GGFuMT",
  "key24": "uHDPzWG6WcRJeHD4xns8J7bcMhXj5H6JPhML8fwoQeLk1ZaUeCiFVVvKhuRmrLRio53MbcV6m1iNGW4ov7c7pXf",
  "key25": "3vjggohqC6Z23bYZ9MUqtJLHiWpLK5BZF9EorJCfc6UCxXaEfGkJGrCCbzoSNc16DR4ySycDLumbM5VhTm5YVnvm",
  "key26": "4ZyrrQ3r3epDy3maxBuwkbGe8TfvJfSpzNfJ7hm6TajyapKgJdHR3FEb97fxPiuQahN9jbj1Y24RDTUzgv8n35u3",
  "key27": "4sTMeu4364QkEjvue99uuZwzFbd9LYUbu1hNdEmqLZ2SANdLYCLD7A43ySQk1qY7sdZ5ZCjupyeEXKrBkGZ7Cv3z",
  "key28": "3QVyGWwokLFnsXpGSDhtBYAwvvsEVsdNwd4bJwZTcVuKeakj4QJc4NVMb1AENiN3JzQAAYeTtaauxR9HDY8CLgAB",
  "key29": "436AzLTxQ26BwBuZusMcjhFDeJKcC98SEB2uLjJ6E2dUtUewnbdcXqBziT6N9RspsiPRinqBwsxzmYtdMJxZ4oZk",
  "key30": "4RSDXWy3BxDDVZzGjjwDZ8Xr3QjjhdVJcDcb2ztX9rDnfEw1mT6ENcVrKJbkvLwiCdZPfW14NZKogw2b2UjQoBxH",
  "key31": "54YLLn7KEWje1b2A2GccEP9trsHPnh99mEsCLVrxtu9XbnXnBXUMaiTRS8LvE22GPC9cEJc5TiyKvJpRRVeVVp9D",
  "key32": "EWipnbusGDG7UgxQJ9YtjSwdMeQGnssjawsCAaUhth5PaZSDvKmi38NdXNu4BQrfoAEaEVPYdQFkuQWR5R5q3dr",
  "key33": "2GqMDsWWLRUueZK4xvYY47dktUpk58yHGmPbAZFrFQcLLf5f26KNFUirZRbXzaV7eNyK5xRAakjp1RKsGUrYy5UJ",
  "key34": "hcJtqx4gqbKH5ZjyaKoxc2KwQPgsAfNFDc8mkRTV8xWNG3z1X1J39sm1U5Yt57XmaojyKDVVAuGB39BE3kvsdqp",
  "key35": "5PbmeH4oRCXeHzWcmHmqmLnmzN6gYzdhos3NGf5mngbf1EFxfV4Y9BiQVnTS7M79zFabEyxDhiXS1ccsf6qcYe9F",
  "key36": "3Xm2QxT2FaEvxS87T6nvUrpibnRgvKKXptQW8PGZu6rzZkTgB17pc1Bzg7tHqUiNFtNVLa7Fx1StEQAn4mqUFuZ9",
  "key37": "4oWNKd8mCqMsa4Q28keurzpus1aG28dpLpk1gk1E6yo1585D16aVynwPkG946AmMbRediBg2ySBPnXzFHyqVerPm",
  "key38": "91qT52DYuSct6ou5zUHeQoccmn9edzw35VTmYDH5uRG5dme95PetCAgpF8iidniiqeSyXnrq4tqma8cD6zWyyV1",
  "key39": "3LfjaYvrHBU8a2aqZDqptCREAiWv23Gh8R5reXT1RfxE4pXj2H7WBZnPW2U8qW7kwkKcXYowrkDtBsM1CmLhhEjP",
  "key40": "2FNZZSjPtvAvD4MCgT3Boeyubds3YthaXVhgkNa6jgc1sx2bRhTtkJbaAMQ3BFy5aFJ1yTCKNQD8hYsNtdCmd6DV",
  "key41": "5szdhDWANDzdmQTVQPAhvKpZzMvqNjxr5zpqkRrwKgCis4M5rP6njVXSiz8RwEuw3TkPLebVLp1tvvgAas471s8m",
  "key42": "4CdcrcgkjMETu7rSfzi1NJDnfdrbFYyiFEfhbs8cswkk1KxskCrSMCEbsKKKJHBicShRWtiRZKx6VA9by2bdrkmq",
  "key43": "VKTANyduEAoBatMG4MJfVMkrhZBr3EbuMqrLxABipZThJR6Nr8zJjZtd8ZG8ouKdLLDG833Qtq3C6QXtQSBAyzt",
  "key44": "2v9p3cFdfdFKGQnQ51CT9GvgZLfPUFSgHX5QYaYPCesY5zuhRKoyF3rYRYdB2gsxNp7FGFKUae54vv1wG5awrpSk",
  "key45": "2avqT7tgWzUv4NDsDjBmyPEBuzrmfAY92JncZ21NyB2KH511fWyDBGhuAAPM49HdAKGbi2fR6ThHzU48s9Lgpni1",
  "key46": "CZjTZEq5254iy3YqFFos27q8hs4Q4JudozzhSfA44MuxEqyh57JeVp5nubu7Z3fALAgni9CjgQz1FUZPwxgXScS",
  "key47": "tAfXoWgLFgrSfmkQYoEf2nXL3ee9A78vCrbR2DiBFATyZLah3Myf7kNFMSRZT29GWCxiTCc5cs2RjxRb9e6pYP4",
  "key48": "5o7EmHmwEmrDhcb5akDvDpZvBTcwKcYFZrx4m5rQvJpWat4bqgHjKw4utC239YUWJJkt16fMwR5UEgTg5zsszf1x"
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

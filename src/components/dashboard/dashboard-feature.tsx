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
    "5sG7kvM2DixyFEVKNQ54DqoqeChZNSiuUBkozKFP5qWAA7RxQyZ8z9edGZsWMZahuSZozUuL1oFFSZ6ddURUGgnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcnRGNLsRAF4TRBQmAVP8Tt8qhGdKyt3G4PkghGvpJ5NF8TMMqovGy9zuzAKwpHCwaw7YA6ZHbnutW2Jfe2936x",
  "key1": "4Zv93JQmH2vrxAFS318ENbp56ribhwf8gV3HSN5gEAvHVc4rvw4wSBsG58L1BkaQ2o9tCkD2drbsVjYeDVjBS3fN",
  "key2": "RV5HjYbVpBTYNrauS17cWUWGgTLui7WEnkGYENPen2PGWzcsr1nSC77cWqtQPzvNZcVc6cAmnwU8aMDiTnjP6BW",
  "key3": "5HSSzHoZYox8Y8bBUyLRMXwqBsgKW91Jg9BuchG3o9Y3ebkN5RWLChQNaN9AuSmAC8YyNoeuuFMD3b7kP3Rm4xmJ",
  "key4": "dmyQSc8bHWrxScbqpM12nPH6vhMsxnQQrVLRmiKhSRNARUtZD4AL859qUpEYAPAp2cdSdrSAxQrAi54Hxf3cedL",
  "key5": "5m2CCwCUS3XP5onJa6UmUcPmg814FkRmzy6TZSETT6XDonnnDtx7ahnaxmgtNp4udhxZjqCkq3tjfxk5AcDXdbNW",
  "key6": "62C6dMajgSKT2XXnR3681cnXUa2gbbC6f8FoTYrjonscZP1SdwvVQvqxRkSABR81GBNr23KLSf3GimkRi91nXyiF",
  "key7": "hLqVTax3WSjSxRoYxGtSvqPFERHDunoxegvQTFtQvnbfKNS4XtcsivZvMtWwUQ5WApKo7RhxF6dqPZkyZaVcAWY",
  "key8": "3QrxwrWWKywE9Wzi2ENbHTPGC4XDWazxuTpaZu4TSnshWfA6cTnPuxbME1Ygr23NXt1bEaKEMKsKv2kucMsDqeXs",
  "key9": "5uHWVCdDAbqd5GURzk1SM8HkP2HGgCcBpuC2ZpJRNoFu6569caTTMdAJPbR5FErzgbojakpCTtYmJEtcP17Z5Lwm",
  "key10": "3JvHrrKdNz2SAq7asbccYej7KTnGnyEywNnUf4uDzYzdMMeoM3825pCdRepjLmR3qzAsKkLtBQCEfimNqxvBymY9",
  "key11": "2e1d7z1xx8PQCRw8wraba9kW1TFWfaFngGvP7rdKxosTvyhrEfjzSL4URwHGYmiLKL4hjYxsvLjQrbzz4VczPia7",
  "key12": "2qfcJisCBwoYAtjPVgXqyrRKcGwSvLJvdNdfXrUc1jd5Rn4KTRV3Vjo4zDi9aikzX1wZocx8gtnHv3bANwTnz1m4",
  "key13": "24RVkfHT9i7j98EchKssrRLpgJ4RacNCRFyDQPvQpTW8iV14yuo9BCfitioUUTiqgvm6P1fmYhzh4HzsnfZdBjDJ",
  "key14": "4yiiQfnvRJnwUxZBcUYWK7e28B4fMghWQzr1tMQ3D8z1unQEYB7HEVgREdwS5oAo92Yjo5f9aP3Ymb4oVXofH1j",
  "key15": "2NnjA2j66HoKpyh6fiD31s65EDJVxFvFN6Zbuc2LhShFbq2RadyBTXpgNUeySnPFHk9mWFocB9epapkvdmV8qRa3",
  "key16": "4Akss9z3nn4KZPeBNitpUdu3nuxG8Dyw9sRrcCs28qkVMr8Uut5waWmuyQYLWBeKaEhxmo27ebaMc9LJ64xZ5uzE",
  "key17": "ziUuLxPY2mnLcGB1W38rJiCXdEe5v5nx4ZmnAyZyeGnj8fbwrMAUM5pF8z18mJZSKEA2411CXHrQ7CQY4PZbKZy",
  "key18": "5x2mc7iUXAGQoFapQCTLqj4Zq7rjofE1uPaMWiNpTejD2BaQWeWdNHCzCcuxroJbcyWrfKNeyCPAbWuZau2BByHq",
  "key19": "5YEvyrdzK8u56jgTw1PJVrnm3Z3yTkm3Jn81zTq51xcu2ST6iogu9ijV4qVDDCmUivw8TVBBSnMHLejZwmTP1VZ",
  "key20": "tXGZTk9543JAEPMMn21GWmNyyxVKWRQHsq6W6qA6Ubtq1bethGgJPoJvgqJbBc95WVJQnSkT9NSqZ1v71qvFsUr",
  "key21": "2z9fQnJ7wQsceQeP62tLnPnMQMgrKtPCMtT9umyAB1GmxKaLNRc1CzCXrddToShvWJhSs1NPdzLAsVsaFaARASGW",
  "key22": "4TbKPEqARvcAM6tQFKUxFzb467p7zS3uPQQukiz818GCMDZkUDqp89EL1uwD7HHCZG666AdU2LDjzYfEHC4rUcKt",
  "key23": "3K1ARHSVLMiN3GrcPqmZHUb2Ukpx5k4V94i6DVn3SJCDmAWtrSAwNbEMXgT7pK2A8qQAj8K4Ska6zZmBQQua314d",
  "key24": "5WjFeKonSKXrhDFQnH7ss4n34FdYNLa6ZnPjNE15S1skhddDpZr5tQh3k9v6WHTBNwtzkvvsSF1acEybz7okqiVN",
  "key25": "H6voWnAa3aVQvUSJXynVnEnFkc6EvCT15sDLoTwFyJvKRHLTX5TFgBFWU4f9fbPQt3YpdCCBkguxLeeV6UXByG3",
  "key26": "5B4CJBQMq7qLiuZjCm1AXK12nYBNy2izHxeyiTA477SLJAAoobGudNePfPnKUhfowmr5dQSxCHjE2Dn85kyTFH2G",
  "key27": "2NNVUo4NEgu7sYUZ8YueZeWenn73GSP4yhAZaR7njV6YRyX9y7SCKkuL2fddDnnjcC8bN3uChSo8cBKZaGaa9KDG",
  "key28": "3M1oQyb9D2QpSnR3kZrp2tS7MA7fyRgeBAoTs4k4kLH1mRLGx2kAeFe88c28MvGdxVUMvpaXGKVdkRboUxPJn4oY",
  "key29": "27vkUZk66RjLcdPpBvJ11bTcYBW6Nd36yCSxdGJE7V5dNj5hbLkxWR7kh7ALb4en9QuyjFdQ31prZjFvK3STz8MH",
  "key30": "3ndLqnzkgnjFpUrmCFLq27gkVzcJHp4WLQx9hhc3GEkckAKZbBcmnDWvqrPG7bqjf9783yKYQk4WQp8vr9Su6pGw",
  "key31": "5S6arh7RG69aRurXbEX4AtAGuKEmPUsn1zKRpcdn6TAHMHTDyTBHZyzWHr6G6T3qZeiVfVUndNLVH8CZ9SjyihmF",
  "key32": "4qVJgckHprKWPTMwDDpW3n6wxty4DGq63Mud2cHdkWCWe324eJM6n9wpztapSiGiUpm7mNdyUDAYW8mueZTYb5J8",
  "key33": "Dc8yT2JcDpQRVZpM863HhavjRZhqgQ66M97bRxSNxx3h1XFYQbmym5oXUMagdAvqAKtvFKXQw1NHCnLToY28g9G",
  "key34": "4BMW3XjwkfFwFvSuhbLH9K23hAdGR6qKRYqaJGFPbBBPj5Z2HaFh3Z6Btg9Y2bTEx7zaXAwcHvuuoBrTX9779hhk",
  "key35": "3dcRJ8TPwVJYQTmYS4dF17X7SeX7tWYKWhQm1x7FS8M1ZxLX5oEp1S3tjPdBUGtFYGouTx8RwrYzwvukewCausTT",
  "key36": "58mWrBGfe4ykJBXRYnEn1hjoVpBuXt6JJG715FWNty8foEFkD38f9Ev3HZrp3nEvfUSWVfKUiNNfy6DM6ucMXjk2",
  "key37": "4KVUdd4s54YFWoyhbwFFrCyBCdSkDCuP9fzzDy3ynWWMTpdECpeyX6n8Nn1iLnPaBfvfntXmaUu957RnstRVr2dY",
  "key38": "25mUV4MnCMrHnDB3JSANyaE6BBZFaMBX8ETYrKWYeyTLoEiHQqNRsKPTwAtT4zg79G16DTwHZukRJnL5eGmhqywT",
  "key39": "4g7YtdrpcnvSHMogDDCN8yEjQWoa7f8BrsuojJnuYaHp5Xbs9WgHdzEC54U1gqAiimnbRvJZ91V1N96Xm4UQBPqe",
  "key40": "3prJTxyFWhqvR4SeGr6PQMKj11DWwM68uPhzTzzL7LGygSX6H3iyvxBJEHKvR7TgiBb1F4oU73XViagBnJes9Tvh",
  "key41": "2YKavxMW81g6KkCev59AAC32VaZThAyR2Bg1GGNu6txu4zRwjR91rDmxNRTw46C23rowWFVtVDzSfXzRfkz6hmTQ",
  "key42": "N97iKwBcjcvVCSRrL3bHpUQutqtdvoT31jXay1jfpt6ZmqRfgSPSJW4FNxnEvxLjEZkzSUDnutLJgv2LkNdcBEP",
  "key43": "5MvwTsXTmrrAsoZtxRA1mhPwDHCzbcinyYWMQX5NcbzDfagRjc6vaPyLLh7di6V6t6AEATsAjMAQb6cKiPpPox66",
  "key44": "29knX4mXnVXgz4px9YtL1Zxhmd4m87GLXkGY1v5jDD5nx4cpQHospbAnybWe7x4toKWfUFw1XFTQDJQUGHPTwYs3",
  "key45": "cJ6kfp12MxcJ6nyJNDtAhGQaudkvQWNbcV9kYQR7n7Z7BoHYZt8J4nMkT88QbzjhUM1YQ3SRtF7vqMHLtTyUm1i",
  "key46": "4C37iCLNq9updpdxbqrj9Cf8YP4PaVa3R5gRRQVkuhu5Qmdo5oJ8h1yk2RMqhCak96E8gEUGCrSYvoXb26xKrdHu",
  "key47": "61NYesLN4otXianQsAsjKXbekqxPWxZqzjVuwtzcbdhnzNHbfpgWbQpRau7F3aZoVFtEa3jPk2JmdYXmYQRE9QAX",
  "key48": "qGRNmdAN6zLyaRU8ZFKKqF4MpWsUeBfAgBZFeioLK9QMKRJXe9sWS3BkgxhwbWW4skAPWFS7jMw1WT82a8UNi86",
  "key49": "5HfrXaFYnS4cLcK3mTYrbfMwvUFWzuzZvvPyNyrvKBHPuvvay18RnH4u432nVGEx61K1XzSfXdQD1btwZ3PSuUZp"
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

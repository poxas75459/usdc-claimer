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
    "oWR4VA9xcgPvnhLr8nsBoSDYbq49TvFreBeQma8pYzkYah4owxH5BxAAD6DWfDNTxjVjKqPovSaBjjh2sWYS2FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46xPBBp9mwe4S5ruLnS6aCz65FwwoF4QHBnSBBA6qsCqhiuwcnJMKRmSoA9BdC1ijkSZMYfkBn5LBuJzb9ozs5WY",
  "key1": "dZjeecGWCaqdLCNWsq2ZZkCLoY5V9xAQpwjxjRDqzKqKandtqSdZ1Ypt6QTnVgcsWR1KiGACEPC2cVAqwFFnvEb",
  "key2": "4baVMhMtWRmC2jfTEt4voJR6g6qQyxb2ML2MViTZXCjYmbrCc4m8Y9ebLNrR7JSbZ4caPgHQZUcy9htx9ErneL2b",
  "key3": "Pe3WuiBxN1eQNXvubFHPcZUq46zkevWA3K8fkNvrcpUiRh2evUde4nvJZNb2xGhEcuj5sSVb8CTpA1cCX3wp7S4",
  "key4": "5LHJc8KZ9cPN9fiLB4VWnb1eUydKJBh2voELYp7e2bzev6cf3DzPbeWyKL2xEcajeSaeziESmgb7Kk8B4zqVSt2H",
  "key5": "3SdAZcEcE2Vd8TWes6h23Q3xRFkWcNni7CVk1Mac3EwAs1Bve8DzZDfeKkk6XvqMnHuRV9nU9XqKzb5PxRMZQ2HK",
  "key6": "4WgMiDoHLZEsZeBA6syoEe3ZFn1T2ZuzDLsLmBL78r5CvJsXnoZihBF3CbmypfACvsQC3SK7dJ3854JGAcdppZto",
  "key7": "4qXrxiVG4kVsoYmJfbvMpecQs1jq6cHKWfDsHVsS7WuuxZtmYVELLSfwDCPaaWDoinxjUUfVhWdiC1GdEkscPdKj",
  "key8": "q2tZxZFGZBaLsvw2KwKkth5mVQtBzKtHtyoikUFDYRuxMbSChn9A3rXzBziE4TuvorWniUoUWAmWR1RhGP9QfTt",
  "key9": "2L26ctuv8bzmHbDMM8sx498HeKpoUzjqjAg8xjY7fCwtPh4bMbxRyWKsjV8V9VSt9H9LYRvPGHi7AxF4r5DtZLbH",
  "key10": "vrRQB1hdy37g2Tx25qLUuBMsS8CsebmaWYSXZRyQY1er5N29iFBQDGMU8LwpFMR7THyaqUeNjWyDC2ErzqdkxAf",
  "key11": "5ru3emDnSRccjRHBNoezJ2YLzXSw8tLKC6LVZ7Mn4uBjbUCG8UhwXcNPV4hzW6txQsbjxwr8RdtP2zoai2JmfttY",
  "key12": "5toC9ayyNAUA6H38wULtgwbTA7NwUskoBgpcwYQstTLFT9MTQmpFGywKXQSrgYTFXQzbUexUGoYRLYZb47tnynXm",
  "key13": "3SCVXLpH6C3aQiEf6QKb1dLZKiNXe9h7eSMyp18WoxtuwhQ1R9DjaLYPp7ZsZ3Y9FdBywVXNcwNNeBgaT8yRGH6Q",
  "key14": "Wnt46ncz14VEb6JN5iYojyH6U21CNeUL88avnNg9t9waBBWXqxaToduT5RwGG4vTCjaXZE772QkHL7jiLFQqV9K",
  "key15": "TqNAt8j9Vyn18JoUKR4A68j47VztPtWac24DnVxU5cCs2DuUzokFzhsvJ8qGCFcztp8yED52LBwZv9oyCHBmtSC",
  "key16": "5wvoDgpeNMLt9anHDdhjEBrxBkkPpNBnEsDzs4EboTouCrJvBVMGpsSmPycakS5fmECFFPmM3rJW9ZGpSndNA4pt",
  "key17": "39EzJSYJUoeUPZ5Cw36BJcoSkhdkkBhwQHsBnVrdSQUfWg4AmwG3xz9XBQecJcNCepLfZ29q6eaK2Qh3mBzBC34N",
  "key18": "2oKW55mMWDmSRud7hRAFJoVjjnW9VdCNyVk6oB9yD3DevczqYjQKo4nzK7e6AnQUU4XjRanrtdn3M7dqPd9C2R7o",
  "key19": "d6KAhCCV2T9ocCZu5QkFHZ8Byp1BfH2ZWnDpgeg6wQaEPN3uSLWkrGB7DESFR3gAnJyvjxYgrZcx7JwZuufUan8",
  "key20": "3kqEBQNRpzoVc4Q23FbFuxVETWDwEkQpKrPKw2PSQBKJmUdhZxUnrYySe1YyszYtBWJGxEPsfkRqY9trSsKAjvpy",
  "key21": "fnhJGKnxzAcSQa1qmSzwUYwFdKkzKUT3r8mndMFX49X8MNTU7ZSdyFvP4y6tsgGEuiGGjTabsoEnxHtk1dxsN8U",
  "key22": "33E2HhoCYvqcKmreFXdZeyqvZeK8XJq4Bk87nnpfYqrr9jCAjS5vDxWFFH3Bq1iTRFaWBbhVbA82hpm7fo4UPYx3",
  "key23": "pHHZ3QxLzGRmvaYbmYMigRxeAyEMpg3d8qbei4wNLMqDvVhjEkRJEu2o5cmEsPRxfxosb87kCdWGCGadxyUoYb4",
  "key24": "kWPuRRUn4SqBBQEk29AkDxNaQTDu2Hu8zdpcVewvt5CxruLfHMM3C3w371e5JDLQpfVw9K9oVioV9Ry9GxpWovw",
  "key25": "nyoGiwQyhgQr3E6jmy3Si1rns7HGouHXTLqDNmq4sSgtdXuVZjUQnubN1Krhjp4suDfYpWgnarwPzs93HYVDGpB",
  "key26": "2k2PmoJKUqSksSVq7Mgag56gWqLeCz9HzHMcVrJBr3M1SCggKFF1EUNuKbx51sSokAPTusX3cKfDT6nmWkaSBuv",
  "key27": "4A1nCwq6PtHEMisWaERgcr6tDP1JK24WhC1tjVuuyLv6fpe4bTohTwXVhfCt9GqactXqr3LStvPhZnWdQ1FSsHLN",
  "key28": "2kDzKLSsRAhKkaRiCVvfve4WnhHdJon23abKvE752u56RXsmfmmMNWBAPSroZHfbF6oQuqTHwUbDZjPdjyQ5kFUX",
  "key29": "2jRPHcWn1aiymZisNEeX1s9EVR8njL4XKGQaRrw8UVY5Dujvh8najxPb3a61bfBfiWyiM3MFJnGpasfMdceZ1iW3",
  "key30": "4H3Ghcv8aNS31uyExDRwm9AmNtgNyHuqcByUHvgBFPXkfZKNFd6TvC2PvJ7fVfSLyRrwRvA71YfUeUC2FYwrUqvX",
  "key31": "3jv8JNeW8CTspNpdATmumbY4BwoD9nHEUAwEVF8CBTpkonFPdH4n6WXAVpCpLZch34NkrW3SkP59vuyfDemjxDsv",
  "key32": "4WcDfhx1fHxgiH6fX5ZR8ECWo1QqhkAzjs3AhTFMMDdXzshGD6Uy58GANU1TCsr7sxdbYcrBFaeDW2au732RffTH",
  "key33": "2pbAQCwbZxtPHZxPq68YeYYoBHQQgNPmDThBFiQswkNZpJz8ASWPhaBzp3yQjXcJvdbsF6vfS9Te5kTL4apB1Khi",
  "key34": "3qod4mhkTwRhaLRBh14m1i8QPB7P1kMBKmS7SGfNVnWsjQF3bAHpU1hpHZ3kvQgd4izBqYqPjUTdrUgfQpCCBzo2",
  "key35": "4cNBvWT9VwSGGmD4TbayFxezajNBiwFPvMvxo1xk1BW717Zp7SW1NHooZZ4uVpxoiyVDQuEDqak77xqPHDkNFD8g",
  "key36": "2hmvRhWVxtGSLkbr4kKqndgH864TE4yrAfvdBum5KnqQTuY2VtCiEWWL3ehHKpvL1DsYX4mnkjTuS2K5922t3kQf",
  "key37": "4DjVJcGahEmemaYnuLn67MLiKvMyC88Nsz7SVHaoPSfAteYq66s77tXRBngJ5QR61TRkVWu6V9CQvvbZeo75YdNP",
  "key38": "czcfQgXNU4RHEKwjnYJqxdV7eTaFYjvohZtZYE4av4nYeNxPmYf3kePRKr3192zns8yxFNxxwyqYy3emKk4EBc9",
  "key39": "2Ps6Bt5CkGeMHguTzBoZxLmt7LpRiErqLMrhzAD5zZHGV3SmqEyvR1mZJsyJBzNwjtUs2WobNogN4dTTV686etCc",
  "key40": "4HJ8p6UFDZknhzetoLG3PveDa6vApAoyNGFpAUiSKtDHnReXLpbP5J7dabzv63WAgeG9HPo258qrCm6dCPtP96Ep",
  "key41": "3S1CXZzwQKv3pwo55KDNzJ28M8mq5NRXFJLECCjWqpLRV9FFWyHWt3Thz7iX5Vc8puFKw4s58P8Eh7dT5m4L9QsM",
  "key42": "5UhL4gu1d8cPYoKXBR3wzcsCzumy8qtKwcipujmhxqRHZ1EfNe7Baw3pbuywcXMXPJnvU14YCSXcwZ6KtoR7vhmN",
  "key43": "3oFnfMGN83x48ZAa263jtduZrjj75hasMWbkfgFocjEXyWorZEgcyn5LnC8jqcucUC7e3SH5vM8M9U652ufGSR3D",
  "key44": "2toWWwiZgx47P24AXqV5EWRFW7QT1Hd2mR66G172BdTs9psb4MiHau1QadGB9UPQzb2PJfktzGeQCbYqHse6Hu8s",
  "key45": "5uUoiErCGBp5D9niHEnSLBLmFaqJAWRbTuA7zacynUM9KS1kpeWGv59mDVciM1MxUAofagZjaM6Rf5353tgUCBc5",
  "key46": "3163Pq7gMzUQcrTNAigRKGUBY3MxcxTFwjFD7HRbgQBWAzjTf5NUXpn31ZbRMzW5ph9rRqmfb3neckzbHkeJWFoG",
  "key47": "k34AvBSQ6tHirJYJhVLPUdZRdVBJDTNkVgJ4aJe55xeJJVKetro6Tk35VADcYCQAr1ENMkFLuCveMtPyPN3cAgN",
  "key48": "4oGcW8epHBdgXHziqTbAaeHqX4mrKSQZNCd4jRkPfHSAQGbSPBjJDPaxbuQ3B63kk15XWTPx273sByEXxSjm3LPH"
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

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
    "zg5BSFNabRkFz4Qxb1ZLjB7kMP6i4YqiyN9ENr76zmGVaBGBCro7sY9DDbqgq2TM5wKqwL4GJdcBzeWGenVkTJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1wDGM2ZjjVLzcrkdBrxLji6Qgz7ceFGZGZ2BQU83RoZcriAB1LN5Z8rZh6C3szLEnmtnpogXbbKCGnEMFy3pUG",
  "key1": "3ZyHYEJ98jJcmTpm4rt6VcjxcD1WCoiPDpo5Nk11uxgKatgS8nLHeZEQ9hvKHowfjNeczeta4uunnyrd5RC8MQJv",
  "key2": "NoU68cvyo2ns2kD9cNcvVFxDKGUQ1BYT2cHDx7URxGV497pC1Atn37HPnLGooGg8n58LCJCCnumdLDZRupnntN1",
  "key3": "5FTbbqKTLKv7k46ELXexbGL1J1WPG2DXichhMYAmMpUpQsV8TvXXWsXYRKoB7odwgAi5qmmZCiMphzGJ9T1VLsEx",
  "key4": "4QR6JTgSdYRaiMNYUmAGCkA5WzSL73sYc5Do99JarrGi2z9W6d4cu1nyrc1Fhvp6BBMmDttLCnHdbGthGFsoQv2g",
  "key5": "4e75SvnZLszU7pveqMEB7kJEh8hkyQcTyQWFTqgRxXSfUwXPpKhcvvV7offjLKp6Uzb3RQrQNBey7M9EjhNJn6qF",
  "key6": "4vKAkyJJdTjFvpwm1N3t4JDnoZy4uYaop4KVCxnGz1TtyfrM8LZbYg4tW6yMPPrzfpdy6P7QuYzTuDpeCujiqc4o",
  "key7": "54d2jNCaRmRiw6cSB3GCKLTuh24oXKVBHwXdWzcofsZpSkNFZG5cC74qCuSz3JXBouEWMLVxPLvyNHGg3Fibhyd",
  "key8": "5AxMp7U1DLuUdai6V3pT3m7TpfHqLM5dRFzTUz7hZr7TX8rhyMNfHytPwMWB67eHVG9zNeXCRYrVLHoSyXCWZzUo",
  "key9": "4hymLSGRVNStCQRLx8MXtDczuUw43EMfXNRVn4ipZ59Yx2zAPqMfw9ZU4UZ2C4Hy3m4WELvhecqrv9XKtKDWtwiU",
  "key10": "3nRTffMAWrHkp6Fwa5qr3Q67t72FC7BWn4N2ELewySkGJP1yANtPoYc1sk6NMtwhuNQxKBvgDapnt41YsQ738Tte",
  "key11": "23x7e6pfS1uWBdbnyRLnjtdtQC8qQ4PZqUqqqpoY4HbFs5Zwz1VNug6GKDSBs6dawpqktdqAtuheTwmAgJKNMdBX",
  "key12": "5G6ff7N6vTeGNUHCctjFJJZktxNuL7mKjPQSGav9HShLt275vUiKXpPeUCkC7E7CpcE9p3JAf4okuQR9tzHpSW2U",
  "key13": "2559aLvQmR2PDaGReaS3zcst6VCArVAorhhZALN55KwzHUNmu6Dwxt3JiDdkHHKjUcPUxgb8PwZJHwg4vHFEAY8n",
  "key14": "2NTXHPoTp6paKfnmjWT1bNo8LS412K7M2GG6BMFCDM1q9o6u43nkag8EWzG8vbzDSWVStgyxWrU3mXou8tdRYzGP",
  "key15": "82HbGUnFTJMQHygHGYE7NGnXdCt7Xab2nSoz5ePv7MTnPC43zx6gxeq3MvBLrRGYfqGmAo8PUWVLEdT5wmxNjFT",
  "key16": "3meTYzqXsLmAkssTS2Q7kLwoZyNyaPJCGteGC1meMAvxpvERaFs9iZ5zDJ4Vb8cwEqoyX34ZP3bwQnvECupiyrop",
  "key17": "5qWii2vSNaWUBWYz8jMCVLhaLRMWB7FGLYSmP63LPvP1XcjCJynyorEj8NPZXor5YnwqbsYnNJxV4kQxnZ6CfChZ",
  "key18": "5BoEQa5GHHs9PJeNcjguwksrHUBk9cQprRxnX1w7xpZKWgTXEQYhes4hvaaaVvqSR8nnAAb3D3qokoxKRp9m95i2",
  "key19": "2X1WNC8HYBNUYRKX4KTX5cxpgCJ1yDw7qvEJQ2dC4t2qs7jjZkMo3XtXwCjP1yAYbSRcT27BcEWcwgpceBhc995R",
  "key20": "5o7dKmzzLeYVtQ5SwtieeyDNXWrhwFFKG9mRX8QgiLzkit2C9VaPCgt3Fr6BmmkNq2deNmYUVvazrDdpu2Fb2GCS",
  "key21": "2EwRoXVvyHvd5239qno6RTLhaKD4XJ92RJxxqm8Zetvm3nffSxHbSgsyF5K5nre1WJLx327gyWUUb2xZrtaw5hVu",
  "key22": "3uGpM1FPCQCVcMWn1EjFu8uou71Cib66vAh87HGX5RhLdscPeFWBoQ69ui7EUv1amZh4JPTxUUmcnhHMKve2tM8E",
  "key23": "5HeQRksZTd1QATbGmYrkShEFmz31SLUJGqrgMcqrXp8eTbzA5v1suA5KCBtBgzAjwfkhjSng5ZAAdyWerhxX4J9z",
  "key24": "4o93WoT5HVAsWYEGRVcgbbhM6jFQwfdsYMid7zTBN3irF2xBABxKs9ZbeZcVWfWcmXYvnxozUSSpHkuHX7ccg9fw",
  "key25": "2KtVRhyxERS7HmSgHYfUxPzkkTYdvicqTYtjDXekecnundhce2CkYeZpqgDJx5E2kFTLVGazWfguoqocVX6ivcMW",
  "key26": "4TcZfiLoygdyGJuSAKc2yHDyBTar79iySh6oXMq2jmcMgkoLFjG747duzif4h22bQg2M5Lm3EU3Ar8VfrGc9vtKx",
  "key27": "5CwvJ9Dk6zGtWHvCmj5MotTZMUoD5X77AsZCCk6xmq57s3AHMiBUUmCG5GeeVa6g8z94XLGVwYdAifbHhZ5Jp8Tr",
  "key28": "3jah4uM6y4qA3k9nDnHcrtdTNmTkm7PHSEmLcWTEqRoaqGiCLkbYuQNcH4Dk7XbBvKifdb3M7JD3HdfA8rxyiDVU",
  "key29": "4uv2WH7JJdvc7dVYgtKdCHoF7R2fstKc4YVYnt6guu93n6BaEeMnj3sJHnCjJxbXTi72ZEWYsLm5vEBKe3CJjdjF",
  "key30": "5ktofUKeUmjbkN3jvoYExc6QJxgtfeTPmkGGsKL6E8zYUWig376Poydz4SkiySYgNApDRLSVawhjwyALb2Bj5HcZ",
  "key31": "4GBR52rPhQp8MbuqcEvGhRfUVWPUhHUmKwUzyEaa2nRe3uKGf7c5AF3tYPsQjZaF7FRH4eU2st3RrVDEXCp37sP9",
  "key32": "5Zz4ZLmtuhJ7pVm3gpM7W8WE4fzmBycPwtwDN1LfNeUHYkNvQZaB5azEZJVKextjuZfWU8ipoj9gTXdaJyUboAHq",
  "key33": "2gQgnqfBbn8AwMhmCE426QseMxoXniWT6rHr8r3A3dQH45bmKCw5X3yGcxJhri5SrGyH3hAHdW28jE64EYwfPToX",
  "key34": "3LCJBPP95rz6Ctcf3ZAu5Goe5LsohXNsv8NsKUKi9AdNuaCR6h4D4CsGRiLm2vrAm6JXjYbGnH7FYt5dCNd7FjZH",
  "key35": "5F2vBDDLTPUyaLVKr2ZZPaRfo3y5nFzQaBb34xTsHWjBfkB3GHmEQcPWo2SneyS7qJuJqMr6JuhMVVm32pGZPMTG",
  "key36": "26HuFt6ydGZVXVExNgYJtj7qzdnAdCD5nm69cfpw1KFA2B7nYHf3JySErUvWMFt6dNpMH6DDofJDZdEiyJ1CfQNE",
  "key37": "2PRLQCLJSoBZaswvhj7S6SEvRHMDD76yxCLGA5KXyvFY2KMt1KXvfCkod5xgg1oozBs9uspqh21DvZFMNocJGZqE",
  "key38": "ie5usnXDbrxJeX2cRJwBRdEehd7oMdJqwCLmv7NXhEdyp4TrqyGgCi7npxWjPqaZgeAHZetnq12hJWM5d3Lcd46",
  "key39": "2UCFXKDvfBmaw32DSB2UsAv3bSzuXzk84eQ9hUrqPSAEdnpW9kacvDcNNTNnSyKyQSdjDLL2DCDL89NByKMCui7h",
  "key40": "2dwquEehf2qKniSey2Gg43Va7fFrfbPppbRMVoBNt5tTi12MBf1EPX23ZHUxZx5mXXdytmFj2AFzC9SwVdVqDUBJ",
  "key41": "4YTBBcJS4EcKoiG6Gw4U9Ms4g5iXjgCVYVnTuJjBFK9yqpJMtTP8uahqHU8U3smnpXPoZDu3AfVRfyfZJjVsjuB8",
  "key42": "318h1phoiNrt3bHu6JkdpJ2YKzL5AjtqYuX1kGp3nph29uC6DSJnLVsBazjyqSe6PSRQS5KM4aNLNNpbFPokEcNL",
  "key43": "25FcgJV7w1vXAAm2obt9hYvWnSQ2dH7GKCKj6nfhS26XWZXiZ6mmynML6MgtV1stPqfFKoYtqAH2teKrsESjEFYZ",
  "key44": "2c8MmFeTxftSZqtidYVyM3XkAmRrMRwSH7hMxpVvTMwuwhCvZa7brSXWp2Z9PMxvyiL2gJrnA8QPd8FLBGVxTCym",
  "key45": "4Dm9ETJ1C7sMQ2ZzcUx38hmTQsdoYCDrpJMrdcAG4MzD58Qsj6V1NmjfKJiiiVurhQNp5WUw3AHp6QJtaSHpHtjM",
  "key46": "41VQwcRqewmQ1cV1vzkD3iDSwhGQYLGSR4bXwgaeLwtf8cgBgUbTZAbx6JNJXfPCKmvrHcsVYZmvwFzZHKbJSS2f",
  "key47": "3u67jq9yjphTJqgVSc9vfMjz4ewyPZrVYVuiRcdmjcAKQojhCPsPwtpPLaGS9Q3GcnEkPAoVsBTskScBkhqtDx46",
  "key48": "3GXkLKkArDbkzZDYvNNL79PH5wigxbcMvM1rx2SPYqB2t7HxRYh7pUBNi5b69PgcBDUB9vu4VP7Kvna8qRJX3b8X",
  "key49": "4kKAgBqtAqprqAVhzomuwr4xzUQW1gCdZkM4Rd8WERh9yvJTy11uYHsX9e3zM1nhFPxGhMyQNzYMZBTJkUBCzX7u"
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

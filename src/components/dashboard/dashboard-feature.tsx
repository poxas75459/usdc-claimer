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
    "3uzz7JTHRgQWEtv8HrWec6QfFRy1kxHea8GufKfSSX93t93HzsxBdoMmZwG4qu3m4xZTapB7EztEvXDFt2f8U5uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKfDdy9tHzWGUpVTBvMjczPe6gWMyfThALWserwsHNaBRgeq33UP3MA2qxzz1oPNFejBKzgchP8YB6ToDW1k1jq",
  "key1": "4ESpTPRq3D6UCkL2KJfmvZRiEGCkdFFvRtwBJ6Cj2Z9KuBVhDA9VMVGeiuH9SekUUV6Zy8g4oFN3C3m9kyTMt2vL",
  "key2": "4KCobuASF6tmv6gZQ2erdiBLmvigUmJsrZDUYLvKsMb36wx7Sy1PJBQfoc4Ly2PwtVZmgZqWUPxJh7pPSH418agt",
  "key3": "2Ay2EoAA4FfQaJje6swnpLzeapSGCJyN6UxrNZPXvQc7MkZiuhJy8uHtcSjoxKvNgdQw6cLmU36uYzcFofHR9iT7",
  "key4": "3HYM39ZcasiiCoH5uv2F4TG8XHrKQ1UeXwddBvvLA1adT6e34fNVoPpmo6yf281F9JosdwyhsJHbR8T2hP3GPTfP",
  "key5": "4txk16j6P2yQbpAHKYugW7jZA9goWrNLd41g1gEYFv34511MiyXcSdGYJA8z8XeT7ZwaQaksNi3esHGX9PrpDoqK",
  "key6": "24RkQT69AQ5b7T6P6gCxEVKzjR4HGbjYWs72ZCXGLN5KCbAPnE1LVh5QVsJc19TBLo4rqSrUUHN8euRLKeM5MCsJ",
  "key7": "3dgLbrqipJqH9nbVFmVWJ7S7CkiNJY4BXvcCYMKFZBbLfWpXQoj4LhSm1xGyHyiZog5hZbDWibz223KJgvEo5P7q",
  "key8": "3YewLxQPsiMLfy1EznKkpEjrLw8HEitA3E27Y9xka4bEPUcDsc5tDTGdzp5iEp4ewdfPUJGEn1Yoc11mDcEPnrC5",
  "key9": "3whLF2m5vvuG7KBd6wPHW3oMoErfBK5JhSAM8ffqyZ5xhodHxWaJV2EEmcCUU2oMMsZ4KQcZmRVYE8rf5D1hmzqp",
  "key10": "64tqgD74MqNrqkmnsPE8WyUovPsZhDKpQdADPPYMnykaZr4jAXPr1A4mZBevjYBER5h6MToJVES6AAwNYaJ3g2KU",
  "key11": "z9GziNhU8gawcy6gmfmxWaRWiSaybdv4QsC9EFUw1TrcZSfwoqJh1yJdiSjgWQGeFUvTTMs1TEuE67mpkdoyd9y",
  "key12": "3FLwBquCgoZxAE2VFvzPupyyMRAS1tfyjqTFhVHxZ3D3uDPXaW9tTx2LKtLLGRmgy5sLquajhx53vyjVNoC3DWSK",
  "key13": "3GSbyqEqgzshZ56FFSGeqAcJwLuaQz5Q9gcCGWhTUhaAXve4wrQSLSksYvtTGj4vQd9XnXHajUihvFqKVR88kGxE",
  "key14": "4LJgdB9NF2sQ58bRX2wc92BW4tkuKJNK5nPV2k99YDLnRxgjWbJ6unnT6GkLC88BKyxrp3sf8Ma4KBq8RvAYDvfA",
  "key15": "4N1Qc6JRxLw8fnhrwf7T8xxN1krJSRWMjr9kKdJ26WqG94bv3HZiMp6N57FwFUYAFAwkvR72FzHrW8APjABvokay",
  "key16": "3VLmzHGR4BHPiwBpkuWbAfz5hBctNU2vrxCfGkczsq9VnWMcujnFu1ytdsi6Xft8AHmyTAijPw6GcHL9rC7YGFFE",
  "key17": "3uoErMJngx5HC4zmSMYUSFL9Ni4Ln2p7XhmhuQ1nkPUhXYSVk94nBsHg3eA4cYBY6c8ed7ZT1pubtpWV6xaL4Jza",
  "key18": "4ALJwm22RDKzc9nqm1mfRDGkB3f1gtYMLSDqehLXJkfpXvHawfi9NTWzqZ5nacnFXVzZ7cEfiS8HJ4aFp1ypV6PY",
  "key19": "79E7jbRefPrBQM8zdHbc9FMfpKPT9c4vweU7PYtzXLdV6MEV7e8rUDZYZ2s5TSyJaXhnG7X922QcUyCC6sA4Jfh",
  "key20": "3Gz2eqfxoW7njfVKdsAS63DowH41jxVKGcWQp6GVcBWWfXJp8J7GvTG1yzk66ZjjaaEvfoEPqvXHNV5Uo4uMcy1u",
  "key21": "3F6jRMabWR27jhtPAYW2V4J6wmPAvf5zkGFypTSXL4R4mKMPQ9sQVxZCfVk9GfKNB1Ag8EoFY5oXCA8xW1VByyRL",
  "key22": "2Si79sGGPNjidTAYrpTiPagjAesXueL4JkSCwLe1RnvYnf6qzxXrznbSNyDnQ7WYvVbJoURoLcm9qzxDkPoXuY5y",
  "key23": "3d2NCjFv6CFsRNt3kT84vvEuGVRS1eFWysDGGyvRfcGCYSccLpPkUaq4FzCHMxyHTySR6Cf6WVo9WWQtn46oM9Dc",
  "key24": "7fPoeRVzjrXtVYx5XcWwR7VEuEQUi1D7Ku9KTvdqF9FeXCNduJFn1A51TPEfiMpkyrv5ppUTB3xnCrH2qQwETov",
  "key25": "39s6Bi3prK2uz8p26aE8bSuXjQPRp4saqZLLb8uYBdxxkK3T7Hwq4UkYpBQdiZFkbG5tRN4nfPHK3Gfgq6rrdwF9",
  "key26": "5VpYUXy7RzxQb6oEHj7ojxEvr5YsxBYYP9kLPYXP217qcRkv9tMAvaPDRUfkZMzSDYirrve8QGMdRMUj1F33YapB",
  "key27": "5P6e5KPHs3aJFvopF4sj4M7RRAxZ4X3A1NCqkytJ2ybwEADfFLWDyJC1EwjjmXcbuQzTvT4gmgVw6JCtBzKNCJvR",
  "key28": "4PBZkoMMR4mrSXEy9RcPowvryk7jvyF1jk5CfqK35fU4Bu5ze1yTVEVXCuAjy5GGvkU3hMnj9SNY2otwrifEFEQ3",
  "key29": "3i48jTKGaj6ToTEcLCnFASjJ7yUviUnEoMQ8vx5yjY5D9GDCx7vEb4yH38GpKutHNMZ5kPBVKuM6QfAYwYP1bDSp",
  "key30": "245cBGr6L8Unk8jCv5BZfugmxYAfZ7ekt98k9USrMEkpJ2sgBAKhgrHRB9pEjr46ThW4NRtUwfPGQ4Mh3i3NTKTK",
  "key31": "RiYr7Zyf4CDkWiAgpCPy6APyhM1VeBCz5ATt2Q6h1Ecit1CDqruvfFMULUyWhoyFMSvJVGyZXvotn7H7R9GWp68",
  "key32": "2tzMrJiZzAnRSMkAJDXm6G56CzrSj1KyoTULp9kbeGJKiK49VZAyNn5bLcwRfgnLWBWAPES5ZwBwNPcm3V51EqUg",
  "key33": "2QyCCkizAc7fUhpTfPAGqNU6jYpfv31E7R9YMBqmpGYF28aGnDq1Zns28bnhRTDEi1RXX6X67S5SdX97LjDaod9H",
  "key34": "5c2s58jQKLgQe37227sdDDvqZVQ9X2jFVi7mLMomT4REs3VNz6G4oL5dGhLnfKsvLkb5nf9ictmrg5KegfwaodFR",
  "key35": "4HMW1hcWFbSts9DsxFmFD4oKue2k3kZQmbEGcvA7V4EWjHXaLVwJ8BJyeFWv72ZoTPDYuhMxcRySsob67iM2dbEB",
  "key36": "5BXMjX85CuzLuWojcbq71C1dSPBD1piGdZArvVJ73q9QYT3opwHkHCVzfGAEQkuJC1g5fPjrAkTDTrScEgt2a8r6",
  "key37": "582KbTT6hZ2o2cyoKEbNqcWAenJFEvVx2NLX1mGAikXY7zTst6rJ1GPPRdzsArpMtHQ4N9QLpFm4rzxhF92BYeRr",
  "key38": "3QvAg7Q1RmwjBC53jo63AWBiTM45ZJwLyZHtjA3EXjN9KwvuX4nib3nuWfVsbuf4j5fR5cetPisrZaX4eTnXtfZA",
  "key39": "2zHzaUdBf2VB6hjnTMv8LF2Wpf5uieR6iE9eiJ5VsoKpYBBtbgXcU748pMFMaMAGmA5BNjep2YJvVzAfE4b9JpGs",
  "key40": "4mqdSPnWkwybuBN7Wqfe3UUA2mwK3ehJ48HSDGMfmHW96E4MdCAfFWtYENbbCnXUTvKPtLvAQZcWujrGvAVMGXzt",
  "key41": "8gmZVJxNtAkbebNgZDfAE1fhVhpa5VX2PLoZMZmMAkZNMgwtrjN93AdSgG5eLs2ryQ4Kzu5Xnd2nah3SXLqCVFm",
  "key42": "aZuEp5dA9d9PFFibSkpd7u2B58YBbuMViKN9aB21372jg1Tr5H41KUMq1aEBzQ9xnxkz2SQrUXdsVJS8ezgT4ak",
  "key43": "omJmVAX7Xgw6VW9Ew6ni91mUxFjKS7cHtuSKyQgCiZBCXeyVxWtoHsfcD1LRdc8KJ2T5jzWngoFGciQyyfVyGJ2",
  "key44": "5MY1McD6yDQbXTSo5kCSKniwPYJiLhvGE6RT8YQS5mCkHM8mTzJHBJvpDUAfuz77cd1FewnJW3SqnU9VmcYaFuVe",
  "key45": "5PqhV8eMsEfHZGexTQDRHJiFTL6L9myfjV5A2xqu1qvgfvfJp5vkrsiD9MU1nAyFg1g2NxbE9WvShE5EobNAECYe",
  "key46": "47XZRcGmGbDbq1s32y6Cu1uMiFLYJ3jDMGVw8RxXZXoFPcZs7hpBpdDugDFerhgR1RRPRLrBkGArcCUg7bErsXXn"
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

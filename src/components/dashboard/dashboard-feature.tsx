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
    "5Mi9Zb2vWQGX1Sxw8HfEkNt87B9R1dpafCdZvwpZwdoSxKrMkYuMv5FWk7uHLarcZcQX6GRVmDW3qcvZ5QPxzTAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UX2yrxgtQKWBKLkEyLohUzQdpeqWkVEgQCy3GYBV6PGU2sehHEMyDuFBMv6wcvQAzxkL5KEiqZ4Z1D8S4up32sd",
  "key1": "2FuVV1WoUfibc268TVXnhxhXxJcRpYEncjYvunC6CVaKqjQHTEWa5EYwu4VoaHJyahaqG7u8jHQTM26pGQxjrhWd",
  "key2": "QAQobgs1L27o1SxdN1hT5fLGzfzmGujo5F749gsCTqLxtLTHf9Cc2xXdTCtcBZWrtSdK4fbmgEjZC2fAWDTvWT8",
  "key3": "5SZnQphyj1FXFTZnXzZEm7ezeQ6AGMWTy7BSGAwWsXfghV8PYcW7jcncxyCB1wBdfbSXkofeHFJoT3DdWW6oxPb",
  "key4": "5SCHMeqt3ePsjSC7X1v7jh4ZBXtXkLgGaGgynGgYpKYSbjSg6CGpYYzBxns76uRjziamgSXU4HZgaGuJorqBj1Gf",
  "key5": "4LGBb3MHmXGwxwHZMyh9f8mUJZVbrtUNruvR5i6pxrBKVLMaqzSVHAMgqfgaA7zQnRrvzuV7XTqyNEpFVP4pkJZh",
  "key6": "w7YRWY5TewafV2jfBVkP5wsw6TueMUrg6kztB3zW5Rx1v4RQJpdnS8KfkTNMnyqDpNwojX5TFZKEuPmhP7im33z",
  "key7": "R9poqiMXWg1SPL9suydqgezoAsSDFUYMZMVFF8T9dWn8Q8LVtesieZXFstdtUDr8T5FkVUBQsWd6bxBVyJED94p",
  "key8": "3MkvPBXSGCWc55bz7BNp8gYyQEvjXxc1rJJd5GCUFaMWmfFLiVMvh1X95q2BDkcN6DALVhfzwQmxN3DJmASTmstb",
  "key9": "5AjpnKghUnaoBhGDk5N7mUiDFad2h9n5y2BnxZCVu7N6nXQv1WzhfavKpvrUemsF2sweHwCEThepLKTEGcC6v383",
  "key10": "65xj35rUddamuDPyRRon4Wvpa9uByu4BhbxJvACxm7fxGQp4QePj1WHgFbLj1cpsF4iNTxw6kiSiC3aQZCHByUQy",
  "key11": "5TPN3mqYX3nS81xZ8uqAqJJbS3AEU1o39kBn6pw1PCqJn2V14mHpMdDFBABYBPb16GD4t6potQQ4cLKRvmDxJxnG",
  "key12": "tjnhqxAh6BwUPjy8apNFtPojH3PGX6HX3StkTdc3o3JuznGWhaxvon4VwTwgz83jCyUpKX4Fu9UEZfArkTtvoTV",
  "key13": "2gLYbExeTb55YdPBTUiQW2hPmV8LnHjxAMBzCVZqCYtvfm1q2Zf8kM6PwJhAr7tJi2QFeKPMtG1pZDhJF8Rztot2",
  "key14": "gZLsaHqWKqzT2z6CdykRhpvcim7FZ929sTTS3bRB2VKjNKAkZhxTAuxnu3P15vc5V8pfapZj1cjoFqo7HunHLKH",
  "key15": "HBH9GKMSvnnHUzCHQLGgkVK5w4HfK6Fyz8Y717hM3t2X5kekH8ypTcTmHu9bD9xPNxdRRwRTvPHGiN3D6uXmEpt",
  "key16": "3NwUvUUUQi2ftXThB7tk96tMbzwobknipSFJxSQzG5x6wcWt7E4Dr8Jdzz1FnZC3V7gqnsPenPgEamNbrjX6Pjk2",
  "key17": "5aQja1FMo2fYuFinyQn4u5y7gFWq2BTymtNG7XagehpyQm1W9FfVhQe5Ph4qQjEEJi2Xik2PkgpPd132KCPdgX1g",
  "key18": "31faBEUzCLTv2JqfkM5bQpjjvqe3CqYS1bQu9WBPUF69C3JJv9kTZXQvhZnbBLwhwJfh38HVPm2rrvxjWdRpiNmg",
  "key19": "5E1f78HUJqt1vLhR1dTwuk3GCgP2AEuyY6XHV82BBQ2DwSuyY6kk5jn4G9t1Q92iSQF3tQkrvDqqDJy8ZeCvW27K",
  "key20": "2KPQ4TmMvzKjAE2T6keBhSjfE4qSWkNUMejzfj3M7Br9D3vJks9G3gGvTeWmSxtnc5FTKRSJ2is2tx5PjjjUZKN",
  "key21": "4z8JUbvS5U27CrHUwYxZNveSC1WjayH8PXqwCAQaG6d92C8wqEBHtKyg6gY9cZNSjDzCDdqeZqQ8oBVmN6CHxbx9",
  "key22": "4HFqtk5fuwz2bb1XKv7NfuHktFQZLrUmfz8yeHtKSWyx73vCjc4dmh126Mmmh5N1XwaU3uy7j9oDw5GcmMGTN4b4",
  "key23": "47ZA5dwzXZmAYtZYwabDMgvr99qMPjj3BPGUaVLPEJZZKASjk2m99kHrqhRsKpSsk9TpeMu4h6V8igy5gZ6xLXn4",
  "key24": "61cVWwudKbhGMVJMvhM8wBseXfEZBSWC2HE2srAu1amknYvefCKgLcbTT1aDwcvGJYE3gVtTpc3SQF9Qx6r4SUZf",
  "key25": "3smfbYFZVRW4MxeoP8jkqP7MrTFi99PYEmHxDjNPi43XNA66eDGnorEMRwEBUYaEcuAPWWTF61z8r3Gd3Pte2E8p",
  "key26": "3JJRgMRKRGigE5T4G4ypMQJUCaXvXQVAQXpVQjVceU3oJyFWuQsyQzaPmPaWWhdrxv93CSy2f9aUyvkfs7rDLLdE",
  "key27": "4NWsCX7ai76jUqxzvmmm8E2Dc2EnWHKyAJC53EqghSBzmNVWys5c5q6UKpUDXohdZzN9ft8AbWV3y6yyWtPK3yQY",
  "key28": "3KAmmEtCUALMWJeTERRcWXweVqq7VPZBKwPzRrch1meitzZ4H3Swfjmc8K5NTph33kwWhi2omqz48C6XjY3iCE8g",
  "key29": "8qSPu5iBVh2hFN27EVGsZrq3KmYhU1WTVeuaCgLiMiypLzdRNJZFu4oeffomLbmSopm2woijRs94miNSKsrE3is",
  "key30": "9Vv4aWfaU3wNc2JBXB1vXf8KUCyMU2uXp4ypV7cyP4aJWsc18g5h2qdSGBEuYPtZjr41xkWJzT2kafdmxAPFckH",
  "key31": "LxKdEyC8djk6KKs5qG8oX8oWxR7emGwztGBqg6TyW3xejv7FNQ7frXt6KNjk9qyz7hNo4X7SCz8GkZXEj3yKKuF",
  "key32": "4fSWvcDX3HDEH8ciRVKm2v1eTwJ6DUPGKE9Ei3CYZnZJcaCEBWSXzPYSu2fCFcXcCwjwfhKbiBsYiuKm2R45zEN4",
  "key33": "4hg4zi25VovgWRJ1V7rKSs7yom93NVQKjfPZRB3CR3RQ3yMiPFLqkwgS4LxFJAcvYHhLAu81JoTKZdcbmp5T1Qzt",
  "key34": "2aPHTN9gxAMbKH3UfCRe6Lj6ii9HDkVuMSrpUvE7GyJGzF7QgojDTjNCTKCESvj3MRhCPCrpZTkfUEuh7stjQLUd",
  "key35": "58FRDR3LMX8NZdvGR7mKPbRu6cj6wypWvfNW9876Ek7HJTb9jGpVeadkCjxKq7n74G6LVBiMjS7QDyoqhXq2f2EX",
  "key36": "5Yf6XdK5EmAWDVdvdTikaBtHoBpk7gPjy78SzBmsEe3pSeLm8W1BRLLd7RaFT4BZxJJFxMV12Xu9ia2TQqbrbxCN",
  "key37": "5uxAbJS5itkc2yk6hXKybxsrHVY8AUqQdqoouyZYAuDVk8hAHCiFDxwvVdKETSksu93uiQoyMK2HcpRD4bQSzhMr",
  "key38": "o7xBmt3MaJnLjPSQgnLNSccA5srtbFPZfrHTxdXDPSzPFXm4oScBeKVQMcVw5AD9Fek9jSp6UD3tjAEZqGcwize",
  "key39": "mGmZTNDoRv6NZXq52vAMNLBLfY5LhifXwTGP9siBzj797vHZLA6hBZF64A2NrLvHCQKZYM5SPsPFd4hSk88FjkW",
  "key40": "DBiLQAS2XQ5e367Xygibjg38bLiZhtdw2qQAwnBDGcAm4Nb65524iwv1UoyLCG6jxeYMJsiVm9CbfKUEbjvuVva",
  "key41": "3qEzctTVyyRhGKgUJ1RCe8uZvszLeMHdw6Wccy8xyJTkKzqtJfcwzhgvnAwa1nvoQMpQHr2TMgLygkgFT6Auffgq"
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

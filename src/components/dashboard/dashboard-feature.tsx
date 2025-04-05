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
    "2sr4mmUHDDnw7GABBbhthNjMYmAyr3tyLxThtKYaFL2Jm8J1aeZUe9UzmAnzSPKXviEtpoYTJZiV3hUjYEixDFHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbUUfRfqxqYoA8NQXh57ieTqtoWt9FeRhwGqi6mzQr2BhopAVAc4V6xB7H2JzapGQ2Qd4yQp5VdJiawaSWF32k7",
  "key1": "2SF4g2LG2UBcTxYhcxFPx78co7mAES5TohHdnUbuMYRt3HXPdFmnaUdKKvbe55eqwfyyUwozQ3AQskQSHgQjZHBD",
  "key2": "3ADGT5vGJ7PJyFRpAWGShfvmfd8B6eyMBMFT5G1uMR1mCCYokofSEGXUAQJC7RP9UGtg9TA9ZKrs3cdmNTvseCZJ",
  "key3": "28xqjs2R5efESK3SWyWNA8zY5AiYgKCDFYPnL7rNKb63sRNmFBAGtyC3tiPWGUfMRn8afyECPiprkkywMYBtob5R",
  "key4": "3gYEqoGwscssvPHhXuFMa3X1N1ebxeVxMQ9o4DznNPqCAE2Y1ZLpQnVHNc4nd3uwZV1pCeMdEXjNmrxQtQt1xYnt",
  "key5": "3nBNR6rDxPAmRxH7MxqmaXx9KEQTZrtKWgj7Uka64Uzq8qHvavmuu67NpfSGZjG89Y8HjhRz8tS1Wukd6xAFqwL2",
  "key6": "494F2ARsgfMUaj8DvvsuFVyBW2NqKFLF8DGwFnQ3w8kVt1Xt9H692Ce8ZPy2d9iBtNJ7ch7TGndhcF64fSH3XVia",
  "key7": "4jbuuekS21d7q7qtyDCSMTfYH1qRx8CHqzb8riKyixK2ieEhPe7WzfMR3Xj85aLRpunJHVzCmM6EsSM5F2epkkHm",
  "key8": "44UwzpWKEWcoDTwckw7iJxVd3jgPST2TzRNwSaEDajGHtaK5mBFsD7oTvzaBtuemurQa2m6WbAhV8ZCxVMcZJuXV",
  "key9": "JYhHGwL7HBckKAcphtzCPQBpNDaq6kTQoJe8vRTrxX4kdNagJBpoPzq9xbxb9YUnHhGAQzZCc784EZdynGGDfiY",
  "key10": "5KieUASsXVAj4i28DCdbyEvDJ6gDQmJo92jcawmBxXMpfnXG8zuPHfzMqXEP8BJdGE8cg3hcJQsHw8dpjXqHZRBn",
  "key11": "615N2RRDcRR2Ynz1FmSAN7oRXWnUTT6wgEm6mW2JCRNmoCLoCcMqrZGrHXVTvHuMLTbJxUCE7GsXxhKq4MJD1CmM",
  "key12": "3GkQ2FoVPFzcqppQbFQWrd5Hebm2AQUeRuzrk2zmFFckF2VF12W8Y3452mThuBiqhLAQ1ghfSFDmKchqqfZ67JAr",
  "key13": "toCGmrvvGHpSn6DfhT5r4iLeJw7L6jnLSnJ7dkvynfE4gcN9mtN5RVNvbdkz8n7QTL3TeXEnjWcWpHhy8vT8Exf",
  "key14": "2K3Xk4Gb295daJtsBvN2UjsS2kk2TqczacdJMVsq4RMx4QawgPGNrKh7qNaYVPmhXgiiKE5MXDTuyLtXiYyibwaM",
  "key15": "5351HdBvetnRNSUCqhfWofJ1NsVJTfMLh9Zy4CypHzG6r9zx3hYAAVF7H3u5j65YHYgL42ygkcm24HhChwp1nUGN",
  "key16": "5Td3orKuzAyToe9NnCKqrxErE6TYUCak6jeJL4txc6Tua3LwBgiQeg5nFEPtQb44VBPEYXdUgmmUD6erpAanxEBv",
  "key17": "3phVwwVGXohsNYJQ4nFD52bqz2uFs6SEPbfEpgMF8g4vEgbnV3YHSs4agEcctdBhV3PYWPsGKF1UCcC94SPCMb6r",
  "key18": "5dUbGK6dJGMzRbCKmwXfeKDxVrZVjdk2ByJdmJhqgjfeKLzRVsD9r8pJ47a4WzYa3Hjj5vyqeHzPfkVNbCBhpAnP",
  "key19": "6i24rp9GmLoYMaW4kCSz7v1om6qfV1FpVtmbXpmoNyE3CFBdhEgMqAgty17GZrWnadrDpWJMESZERh3EFkxJUFc",
  "key20": "QXSHGbq4Te8P3yTBy3o36AnUedFkKB8cB5L5zhPunhfC7xiJG865xVyGkLXh2mcvYWmAqW3jyszYV82aTHbXUe8",
  "key21": "3YspHvTSPtXsnSn1pqWS8LLW9whRNpFPhJKrS45a2scWU6Tk74qdLZUDAFRh6MBJMGgSdM1RYGFtYUTF6TuVsHcA",
  "key22": "5uEhuTUMsfyUMmSPK2JuPi2ayAsYig1FsPa2j7NEbqERff6FLrHXvR8PB2EVWns99P9HYEXR6o893JA4HtqP7nLj",
  "key23": "3D9EdTQLfjnf4EqopgPLVXHFtjxpWBx7iEddrqrFiNws4yQeoz1WaPNJq9zvjWnWChNr4xnFkUrRHwaZNF5tfh5b",
  "key24": "32iMcinZ2FPyWGZk78mehjkaC43bTUzdHLsWu5adCCHkCxzVASoW1UhB6dkH4wWMvTcdk4exyr5gFbUBYHi6nV7h",
  "key25": "5kJ5CtvCmfUE85WV4gRNRzEJjJAtUq9b8pS5kM8Y8upXXjx1686SV93aE3wRxFZfAEBiWkwsqyyminbTg7t2auyR",
  "key26": "nuvSgYGkQQok2rCaYSQUJtiqG6Xw2E5JhyRvppV1VpD7PagQc81qu9WXHoh6MCDrbqv6sdZaAJirTqcfKWE4jDr",
  "key27": "4uoXEAspao5UtxFKS729sxft2dXsodZiBSBbt9TfY68JkatPz95yGm7crhiLTnx4R48VjcpMAn88yaUEzm9VN62U",
  "key28": "5NoZA6dejSmSqCRapf8Kkz66vJ4dnjCbGdm8o6u7StL6QLCL1CigQnBYSUQ6vrLJiMXqwkjVXdMkoCUTqkE541yP",
  "key29": "2uAFm4iSEWwpyscsCqUGoiPAJuXLejdW7zFH9LPYQiDceBPrpAVjAxou6yjzaBFbBPiNyyd94uk14DvqGxNG5ddJ",
  "key30": "2gz89NVMXKi4CSfiGdBoMYjxn7TGukGihgm12rjPM5PvTpJt2g6Papc9eLv68rDnDNG9ZdZMHyVjweTXKqDLoGms",
  "key31": "3dpagMyGDPEXVjEHnToXDgKVjNDF6LcQZscK1cJMjP6VErFXWND9b5SNq5eWDeEy4v76bc2wuTAfrXFGsnqtavFt",
  "key32": "4TQB1LSi2EeJFKH8JFMb3HPbRxmsdzSqEmfrW6cZeJhsnUmmUD3j5akfZL8qqfuMMp9u4ZDsThzFr24umr5oJxLp",
  "key33": "4C7TQGZU8eJZo4mFzjnFise44i2dy1SxwLxfG1eMEvDboWgiRELp613HNDtLY6MMMk8dQQAFswtUKNGfEc4hQ9JA",
  "key34": "24PBFLRDMbeiuZ4R7TrLD6FNYgRVaj2USaYqrFDZcAxHfEiQvfLRymp35EtM2ZvN5ZWmxqwFCRf2ubjo3inta8dE",
  "key35": "gaQQ331ue7ZNWTxTLBgGuhM775mrRc7dNtk6haeNPuh7HDRLiWHdtgk1wMb7DiXo4unQb2FYutab8uQbFUbLt71",
  "key36": "4mpFWDxgXiJeTTRz6XCqiwFYwDGudDsDHc5VqFSp8eZjuhqyGmkvHvBZJTNSXp6m8qoKgpydnSLrv7CVS4YbEygH"
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

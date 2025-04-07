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
    "5pHxmSqfKE2tye19htVuMjedwkU2jZ4vhny9CH2smq7FKwx45EEGFd8V9SNfUXHv9ZzG1sdMxgq1BybFagFcWJrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APvXdkH9KarEu5iY2n9qbU4qm5yTxypkT6KKsjMWKDuW6fFjg5CyxGdZyBRLdwovbzMc7FZAQMQBLYyyeS84tvB",
  "key1": "4uMmL6qHoUA4cd9NuyH3Q64qexnd17y6GZ8hgsHkRiVga9C9dBwZbskjb8bj4XFiKUuHTs51LrJ1oukaqbPXgf6B",
  "key2": "2GMpSVTQkyPmAdpVt64SyfkH89jhH1TmihBT2P49Um4uweALuDbA9ZSwTRFmewreVfuCsd4PVngKoFUB19Npb6Uv",
  "key3": "3iAR1tD43PmekyTipVzQKHBgkZnJUp3iDdVjHQtWoAZ1FhH6TrtJihaG2wr9Z9f3gkUkZC2yqqkibBranixrKoFq",
  "key4": "5hhXufCim45xCmZe2s84vHBhPnkmVpqqdwAsQB4oMKa8JPipLaVYbcujRzNceb6TP3AjFSSQxqbQrkRhpUZbBLVA",
  "key5": "5itwCJw7ru69xUyuPXQgZsp2q563uGDiVxagR5hhdJGhPv2f7rGMCKkfMFHUicpMopcfJ6454YLNCUAEyJ5keRrZ",
  "key6": "ohxwrGY2tF5Suaf22vgZSQsXkeSQJEo2XGJjUXPHXDegwkbDuEStBHuhhtqNv1fJfj8FnHtkNgQQL7HNH58ZrTg",
  "key7": "3yse9xSwgjgqs59nkmMkaeaVggwxNJ2VSjGjDrayXLW8pxAjZdgHKL35wpKLAhdAXz4DJmHMTXeXDte7vPowjZxi",
  "key8": "By417Z2t82JjoTViC819G82jG7FWqYdsUHUPQW8vRgFhWSTEXmBpccE6CS6m7udrBDd1WAKrTWamfkZM2Gn4qKt",
  "key9": "hKet79ZfkPyqyQdpxaN89E1WwwRHPKCQ5DAmobgKmS6XREMVsCqQSSys385TtBReUkPAUWKbUPBkxDym7X9Rx6y",
  "key10": "53E2mWxZDsEBs6EUu74b4GhXVoZQrmprFkvhz3VfsviKKXaM1AaNPiFqTCLDck9iWnujCJjrZi1ZzcxnBFR2U2uB",
  "key11": "shTSFp7Z7yuk5ZAmKtyRxbnNAPv1BmWCKW11nGVFtS3zqew7LkcxKCKddMdV9CM7PoqcWnSCKoKy5g4NZpFutDX",
  "key12": "262hBHYEt2CZ3adqqZhXhrGQ98rX2E5e4RHvP7vwjiF7EC2dCyQtkTqGowDK2uFY3DvuHxCPMdtA5DkjKUa7BNyf",
  "key13": "5wN5adULRNPKbdQEpqu2sXYQQwt17xsWcBMgH2dgyKDy8D7ZAgcreVkLrsF713AGorHisvgVKAkRf3Sy5EHbcZbH",
  "key14": "mj8ReBEdMz95Q4mXkH9yAjBoMxNdF6gdt4t1NJ81q21M4NNEMAJDhfX31w1rCENbGrh16N2BgKoCPGWHeLDno4J",
  "key15": "4Qqe6jJcn8vL9TLTNMm7MoABmb48hr16yKoM6yHra7Dt4u7bLAw9uVNa6Dh1k4CqBfjFSjfNqUy2d9PfVzs8aqfM",
  "key16": "3qSfF8F6MffkopYtnbXy2D3W6azpyToBWuB3CPhv29KFxpxBuaXepKeYr5e2VyPQLNvf9BwBcYJsSxaF4ay28UYf",
  "key17": "5azd9C6jCde5NmTPrKr2nGviEcJcuwobX33CU6AjgVUMMTkt6DBfXD5RJgcghcVBTrd1QLKeNKkoK1SN4aKLSszY",
  "key18": "4j5oErjpnPMpFRdH9NmzUDdDaR9pdkVbZLX3Ysy4N8WvxSsPep5pq5g8buoMS3PzJRsc6BUTLjWoeQnzykp3AHBp",
  "key19": "2Qnc2dmjBs6GJgv9naVLoFVmNP4X8kq19seG1U1mha2gXypysZQJsyr4qw8PbZiyujAcTweZiqJxx1fTqLQfAFDk",
  "key20": "4XeVUjp1mZVxEixLdqJYDZqvdiU8p7x7K24btuLMR7muv2yqaa8vWrnSuP67yXk7XSfvh46V4zK4SihN8igWQ7dx",
  "key21": "3NtReVPhwQ6EUtmaVo8AqEoeLSHw5rFbdt71KGwDyWfThbXsh1UCNiyXzwdT9mW6vy5rjNPmqRRmHpkNNSjfS2uE",
  "key22": "ohUe5DsfqA8kNi1iKrZEETCXVwsfpPRvoiSVBnWg62Tn9RJsk9oTwrn4KQ3Zud8M8efVqF7uaJA2dN9nsggvBt9",
  "key23": "w6D4LeohTpEDmWy5BBNg8QiwEKeEEvopLyFGwh3wCxKmvPRk4HfSgV9ZVRvVAJK6izwHe6n4HQgpRMztCYUC8Tg",
  "key24": "5U3sSSF17W8sTJ9qnY27A7SvL1fCc2nLV4FMVCZo5GSSvSUeDiwaLWzi9jycGvZmgjbDa1qmfN3TA2uH8xJT1YVv",
  "key25": "5f5dQc8FjHugKBHbapB9E3fC6zxdXgbufQ2iWzZcndGV1XTWQgSNJv6A4fLLtqaz73y9GLgYEjXva5u89H88UhE",
  "key26": "67E3Z67iBnG8FuyYmDN5bYEviQiS3Q2KmV9NPcH8oe7pVqidzLNd64hh6LWJdk3vSQE3KpnqJJ98qsg1vWHuDA3L",
  "key27": "4BYyvhJjLXYndrc1EjUThq6eYLPrF2Dya3stFY1EwaAJkDtr3Tvp1JUoL6DRsXjqQLqBm6mnkApZcLzEQEFZPWYA",
  "key28": "JnCXUkDeHpskhsXS1YDC8rQLFi2wVH9RRYwmPq78n7jj1K5PqfhS8V3HBSYiFqyoouBNn3L8wmmRTVFP2R9JRBb",
  "key29": "DXAxkm2ARuSKMQ3PTZVXm16SY5mtxLDdvyMy4Xs6jj7Xontu8N6wYjbbQA2uSEWUdirdUJv3budajv2TkayWERJ",
  "key30": "4CYv7DGvVebhDgd8rm7CHw18Msk7yumYPNhWbe7L3PaQENci39pCUQ3wQTpW172MCqXwcF79JY1CN7g1J4ZhU5WH",
  "key31": "4zUgpRZxzrk8ezvzLbwZrGicG3x3SxkrmdDM1xTbtbEZQMDJyfqaaxzDytGcTX4iVfncZYkHiWanZcS9yZGNLTSJ",
  "key32": "HXTBRH94Y4o8r8xvcoxVCuKAWKJxq1bkMfSMutCRFPZD1z9HnFA9GUfKdbDVxMwCr3ypEah9QAPWpWTfEmumAgu",
  "key33": "3XBHfBYCT9owWY2wyaHUpHGDcLpufWhJPaf9Lg3v2SMkgQXAZ7VSrCc2tE9P5snFSSagj9gcrU6DL7SF8v8YuEZK",
  "key34": "oqbFXad94xLxdFeZ96hrnSb8qf6ZBS4DcHApn35D21Fj3MDprXkAurc3WMaPeWZrL8p7CqRRYQ2jietraiiciNu",
  "key35": "48ZFcp8qE9vaBefNW7xKc9njLGozx8npNEnqS5vPjgEknUBqJ2bQ527UwEXtCrrB1dNcx6vYe8bpWQRMfFsegwmo"
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

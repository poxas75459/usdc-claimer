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
    "5TxkiY3wC2V39BHbeyiHY9njEZ39vitDfwJJsp3mh3GXuqam6wvr6XvzYJRNdQJakG22MxSXPcUzJBAYN273s4Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxK72uUhgP9sRvryvjzQ6nrji466renzumZ6GuDcMuw2M3pucujXdUTQVdiNyhopdZZmVJNkmHA41F2jRmoqFZC",
  "key1": "3ctvTX2Ah5WjyEzMMH71yb828pFgnmoe1CxCeoy6gUPKPvDwaz5BFoJi5C2Dojhsi2kBbsSVd7pttAfeecijYj4M",
  "key2": "oSs4GRZfCfQpSmt2s1rdCEGiC91R7jX1sa9dmeobiDTHNRk6b623Ka87QTLQKxTaiFhGHi6jUmhEwhX2smtXSz7",
  "key3": "32wB6kwtsgSYStCP2yBYJMTe2brhW9hcQ7nu4qaaxRAMVXKxF4ykdho1LcmLviPMqngrEXs4PCUSqjEyGamyGZzR",
  "key4": "3owx7VuxyBKvXFG3Fb7f3WB9L3PE3E95nNMqh87AH7LyeAHWV9ZosKMnuhdzR3umLBC286TnRvaCR44HTf5pdVq1",
  "key5": "52eN7LLFnv6nLp8GCyeKUw29pNXgUQ1sWNRszMyj52gnGABF4TKxnZRUqWvAbuPdZjeNcXsgTFznNobBypjkknKX",
  "key6": "29suRRyuiCtFRLs3UQam2GHp2TqEoKcMkVrAJptK35zmrjw9FdSQ7rtsEMpbkf49HrH62nhZ6Gee2U4dLMFq6NQq",
  "key7": "2QdWNZABCCbYHmNqimpiCwVSvircBnusnKSnFATjNGn1JM6VrNjDd9wQrbPF8Dgc2mojScSzD6EY1aBUqasEHtCC",
  "key8": "2sgFXexaju14rCtY3SYr9qPKq7PGrwi5tMFofethTJ9J41zV3eqqvLibr2rv8U75awCMaQnVmm1bYPF5gf14GgNU",
  "key9": "64q2SqKoqnpx1JS9tn3CUEyKwuL6AfBcNcNic5QNwc9q4ZKvZczMhWsdquHLztGREWAQx3KipNau1UDEciAXF2si",
  "key10": "5wHkfruayvHeWgWCTED5yUcYQr9LrCsVnFpWcTH48bby4wxRxjiUkaPHV4qVBwpNuXWVqTSa3Sg7MJe2D3h8NXXd",
  "key11": "4BMMPgCpu8yrDSA1FDcyu4KgyuTY8nRxADuJ6tpJaofj3gQtXzYBEatovcfUBDFcD9SPP9KhFdT2X9yjXgX3RULs",
  "key12": "QoNb9BtYnJxDhDnG25pbkxDMmSmMv51muHgER5RwXwJExh4rVjUtxxnVfRxNtS3sZ6j6kw3CAi1y2K3vELWHWow",
  "key13": "28zyroN7Dv2U6n7BySnGmecvBGmz7yCQcTEs7ykV4gWy1E49X9mx1EQEURpJAnzUyxBJi9TijWtequc8FDqomRr5",
  "key14": "5gQDjsuRz74cgN6bJwA5F9ujNgwGCBr34fSGoNEsYJw3Mw26M42Cwc8MRPpeYMRFUn7SgKZ3XdUwf3KHGuB5briJ",
  "key15": "TQfKzcVBQu1DGP9McvtLxTSixYipxQ47Lcizv3bcKSr6uJp48FSFMKo3nsBkDRzocJ7LeArGrMge3FLmmBQMYK4",
  "key16": "4AwxMweok1JmttEdtgUpjPTH8fCi2dhL76RAGHW3KsDpcW1vC8zt66Y3S4Vvi5V5mtnRndxjq9Fb7BvKw9McaZFL",
  "key17": "5incumVNv5jga7juf2zxpSsUrMr4d8o9ZgGTyd8RxZXtaM45URc6VK3VeEejorVq34ZcDrrW3LKhnQEVm7zNDvx2",
  "key18": "4g9fFQeQbjWBHUMT3e8s1pE8mKqUntJvqLDcfYJ76cxQAMtoj2yeHo84vNwtZuNWwWm6LkAeock7eY2x9QicUhzn",
  "key19": "5CE4re6E4di5GhHcPpgRvGm81xPwP6p4HopJ1YD8WPwanNTGLueY3XKciwnuSTue5p1SpXBjmwzzvix9U183q39z",
  "key20": "55GZpEQxEVQcmahkjbSQgeFNw6mE4R6rXpXeccwcwJzngKJxtaCaNQSyrjLxEnXGiNqVcBBFNYdCXRgJZxsdhLSV",
  "key21": "3dnrRCRwa1kg5dRB42dP6x9YSh3SBTNfNL8YvbtxwTU7j88XXGAjQ4aWbdhoJgxJH6u7XVqyjw58b11dr21MgQZe",
  "key22": "3bUmNHy7sxeDEMn9N9woDtVEv3MkiHwLi5cASnScSqsEizQTnvTVAdWK795Ah1T88uhJLspxfyU8jkRTChbhKY3r",
  "key23": "LpujK5XBQeSBLfLfxoxt6YWbyj2LscHYtvLYgEcAUdqGRvLToxrwn2bD3RLNgaExo8W7QskwVgUUe5ZNG7hTfPo",
  "key24": "3Xkz7HNqjnMfkcheU54gWqP4dsHrgcobC15r9aQdFxTQP8Qst9Ktw1sfTHtiWv3YsBVTJjWwDGbaL9j6HDMgiyrN",
  "key25": "5UVc3AmMMgNxtZWnCSzpeXwJV1P6yNbmzxnDfai2d5AqDMvtr78TWqjzSHpXs2nzD38vvPuoiaphQ3sZNdkbEV7M",
  "key26": "51aVqm8ML6BSYeWA44yy14hc4m9b7z5rpcQaAD1sYicNn4PMyJQXDWLd7EuBBsXjDz24DYEpBpFUarsRT9S92Ty9",
  "key27": "61RFStSbUvwPMQFNurW4WQc4Z4G5gx1rv8mnoDL4dEZ667ZH78BxzQh2Jbqm8GtMTVNxAfQAUrey7MBzQzvimpbT",
  "key28": "3qr9CvAppWwpVjk8cLdhHK213v63VLraYMcSK4hRRuRgGkQTzaG1ToFz2vbNgRb2W13nVXvfjtcmzsWkNcdXoxLo",
  "key29": "31noYqiNKm2ktiyRNaZ4rPV3kxfqPomuGLgg2AdNUCuMPJF2PY6avtzbe6ax7Er36AU8L41aAMP3Fckjae6ZtLau",
  "key30": "318sjKEhuZVDtvFa7kXWQJ6sPeYHRaJ1LGtjxzyDrxKrCgkPNXpRAEeEPCwPzPRw3ttXBqzFS8d3j1uqH42ZtcD8",
  "key31": "4Rtwj7tbhZw9m7ftkgXAUutHmHPYTbGcGjtbWMYUgETo1uBfieUHMYZkLSbF7BXAU25Sv9yrT8g6T4i7GHHuWifS"
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

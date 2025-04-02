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
    "122r4yocec9EEvPiaAn4KCq1V3Sm6NbayMXoNw6fRUUuzdXC6WuC4dCQatmCkDQGQjJv72DsVn48mWwyUXgp2smp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVmHBhuamB6CFdHCHQv7gnqXLg4oa3YoFxcid4DGvKU2tAXGdbnPSsDGB6txY3EZUbJSnevAYBwLygrsaAfVWiM",
  "key1": "5wvsXSD3j81sejaaxGNibGwBW4x2PuWNvKjxPkTL6LDyYJG9pJcFeY1CtYiVP45qC5FtaPFQ9T6FGeB363iWJmLT",
  "key2": "3QWDpGe5e3BuPf5Kz6gAcBHvCvFZ1qoUng321b6kkAj2Vcm9v9fD72aTZka9uSi12aauhkH7aKCTNaEvGwFu4pze",
  "key3": "2CHof1iHXKbRW6s21PDXLqk1RCUne9maWXfnENXBLrGg8jdV3fnCNAqbYJRnmXDS3v6ZpJeGBpnhT7VfmsBnj4jX",
  "key4": "5nGmvHNH8KD4k6zxJvVzdgmEPJvWbeR2BbSJhxKvx8ota15h5VxesqrJSDgRtfJ1W72bEpAPpqWTb3j1kf5d3jHy",
  "key5": "e3sowkckTymU6UM4bcy4mURyA46DPe4nNKD8LNwNgQEoPJvUBunGb8cwjBrApnPNfvgA8myQkNsmfSUesj8tcfM",
  "key6": "MpagUjEYQJGu1MjpDLQE9ecXuAfTpV52V1K7jLVZiFEBPp3KVDyFivcYDwLfhuvTMGPwRzMN1KKg18Xuq61T1fL",
  "key7": "4d7JPgAjx19Q8ydsMC65UKoXDwfRFTeMiRKb1TxJLC6EMc2UfD4WnWE3Mi5dkNBLtWdyre9qGKtf38aQwEJSRUAr",
  "key8": "5aPHHw7HUwVnUURAHSowLV7Zm53s6YhxwaaWMJYDUyg1Ef9nM9kQYNNXNsV7L7wkZ2PabgkrT5rPkKDvffRGqwhu",
  "key9": "5xMNKHngyNT1GD2zkQmsrWEBaXKNsdWGA3vKgLGYzCxVN9uz5us47qQmNYYFcXF1uCbXnKxu8tV2njoT2xwHGfWy",
  "key10": "27y7E1vzTXBxLtrgtGc9LFTFHYA7PACw84nTSSQtNqvyXBTwU8UaxpVUfAguXEnUwZrJhxdUGN3nUkd1aE4wZ3v9",
  "key11": "5D8GM8ZRJU6utprjR4sTvYko2bJ6xz4m4jAiN9XPNWwdSgFtmjiwujt2pEUx516Q5ZXnWrZigM8UYQnGR1TCeazy",
  "key12": "4CGgi6E6F1co73fY8nfLSck28Wh2PHQS2LcPbToaxHExPLd7L5VWMi6T79UGNm83iKXsM5XRsM3uSyU83qXDjZGq",
  "key13": "4KPpPPgYChjT4hH7wCaz9aJNnEg6wfgkiaE1QrhHjFm2LK9MwUgnDZNKkvLHuKrJouFUCm9JQVh8ugYbk7hjCecv",
  "key14": "uHpaKNnjG9drX5kvfsXHHcG1q5Q2vc66JgjcsRsXb7fxDFg6WriQLw9YwWLp3wDDJ8fVCPXRxBd2Vo1qTVqupiR",
  "key15": "3sHnFjVxMicTztwxUG5ZgVtqMGpkkw2fnczgSJuvQUBbt6NFdVpe9oHm2svZp8ottt7zESGyxZ8zi4gBJKXMRKAQ",
  "key16": "4QodXerU1J9DptSq6vcNic8xUmsYksMJWVGhiUiwTabMWU64FCPwWheNjE7d9HWKMdPHvW5r1Wb2BV4GrPBth7rC",
  "key17": "5YLKSKBAYFTtrrWuvNsAbjkengkfvNzKm2XXvAubBtC8eRWX9dK7FGZUNXT9hMgc8TtppXG7CXq12ENiQqDQ3iGj",
  "key18": "3jWM4E4MSfXvmYmJndD2RWbqhxK3X3AyYQubuWBaN7YPiLZqvhG2o3cDj2pofqmdtmdWc5z5zowr7Cy7CQQxsPez",
  "key19": "WMvJRMwqS5T1PLYS8qv13EtJevzqudzL1kc2CdEFEYNxQaHnmPacDbA7qh4SJJk12nC7HaR4RtXsnWXyR7ZQU1P",
  "key20": "5u4uQ1BiWFpezanVKp54UgGGjN2HkGpTeBSDN42zancCzsaYJgAMe7NUmr76NN92h9jQZHcBEwseoD8tz9shrunH",
  "key21": "2eMeGbchzQurUJ94YXoEcuEP4UMkzSRc4YmJRVB1CUbKxUuhX5ahHDDupqC6R9sJQQv29LL4ZukeLckzmHoD8GS1",
  "key22": "2UP5bajaSwydia8eRpwk2fzecUSQJmS4y6DhoUzusPLw4ujxY4z4b1jKa8tcWCVyhf4ssximKKsGfFHSrxm5EUn4",
  "key23": "46Yq3Sn6AXb4sdG6wYXoT8xiTidJCHuvDf9VJeshcAgTSce9FhuApSs3rxuymRrFKoQr1s9CvHx5qz9tWpyZHfE3",
  "key24": "4kmxye2AtoFU8cYeLBSALYczEahJvjmiq6Uo4qYz9dqxE9mQgK1WWLxCEMu8NKN4xoNm6e5rW1MEJSU6F6W7GiCs",
  "key25": "2UAVjZYpjrwteehdJX1Yp6URoKJVWRaKNKBTk9Wn97LTTDF8c8pCAGYMtqhXr2XNP8nvSLNhe1FqMaruUnaXsutD",
  "key26": "53sU5jKTwQFUhZUP7fu8hVf2NU8qAhZH9zRqPPirHkD7Pjgcmaoh1BazS3W9DDos6vREhQG6RsmVbJNTMkSonPAT",
  "key27": "3NzV3hWA3qQLB8TVTMoKvnjWNvgr9kaqB6k8dZTbQhMspuboHWQRkj3HhwaDsePRzVAZn2cqLZqHU1vvuPaB8adY",
  "key28": "2Vf9eHnQMWohcXa2zkfJvuBAPWG7ho9pCPwzoXxhkwDm6t3YWkGcvAQrhQiLj1xaAqegMXRVLQcgBBnozug4cHAH",
  "key29": "458L7gfeuACydFP3mo9pFqmrVwVmMNypESc882uLKWFn45pk898VH5LKzfMZqDqaaNEHtNyNzgf88PcrqhKAFmkf",
  "key30": "5SfizfmrPm6yGL1yhnSnb3M3W6ofNyiTVMac3VTza2k9hJCdKCpZqXNNQuHyh8yobRkTmNpUSDNyjF8GhXHEfqN2",
  "key31": "5budBU5KFWxo8aqYbvFfDof2dUpE89Rf1YGatPizdhcynBwSXaWGtjBHci5SUiLpqaChfULX8unMjRUW8KneT3ro"
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

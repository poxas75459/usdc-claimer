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
    "4NtxGk8eqpGacrc1EEeqx6o5eoWZ53iq3M52tj5WSXB1KiqFkAUsfQrj5uKtWvtqdT7TDDamtJEUhYjXNUgY6fqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SWAj4MRG44Xz2PTiXoVtQfme2StyKLYsbCrz1Jx9oGZSvxMr1SZxJnF9LHyJdh5ddFW3gzg1BPinfSpa4sKK8gD",
  "key1": "4sdebGZCbb1mGSxUSFdQDE9s5f3bpUVABia2vr5uDi78sqBB7kwnn5At4GXVYWYQDEhEqKFDHq81zbPSdBEjxXZT",
  "key2": "yqucvdqEtwmGRNmPBuk3ogQPMJ3PGu6U9ALeoQh2ZhVYVJnhbDaALD9LEDyYEbTDFd7i7wDVdjmruLRssXYfQs6",
  "key3": "5hqXnQyzhAh6ZVe33npWeU1yLK5xVHnpMBqnmaMBuLLn7TBdwvpfTm3cuE9EBi9aTXL8Bv5oVLyADi3emPHkpp67",
  "key4": "5vrDu9iwdSFhReXxRz27Rtoosm7YQELUVsT88Rdsd71mxte1sq3DHcG8254jL2qUxviRW7KLqtbCdYwtHykDMCSd",
  "key5": "3BGaYfihTFeYmULjU8djWBCDLL84WKA56qcfWvH86YhuAxr26khpmMmE6WVXCcPKMpo1RJQLaT2JLACbyPqBv9NN",
  "key6": "5aMCUHRMz95rs3Yiiy3XJ7fneDypgcvXdks2iogAZ8tLZvL8fBuQ8WUVSwRVmsmRvpUDXyeprT8FqAWi1ZfUP5fN",
  "key7": "4kHcCrYXpsBuNvYP1gi7nrJduiK4NqZhkFZtLCtnee3LC9hteoJCidFo3bj5tYw3qsbPfMyRaxDCLSEoDuKcDVc6",
  "key8": "3qskLqtdfZGXPrXSyxH4FU3yJHg6Dh7dzvqzUZz35SktGJUCQhFLtLGvNjsk3dXKWQh5ysVRokJrTmR1itYGEXLq",
  "key9": "2nzSZxyqXTNfGMHL1rCx4bwMnurNYKemZQ6E9h6raswjMoYKEawKDEsNqezeGsh2UzAnqj77zsE8LujrSDsi8g9Y",
  "key10": "4k96uPTBVLnNXpHhEp8pz6RJd6sPf7Gq6ERzFKaLiyJNzUwVzY65pe6Npx5RvKwkMHCiNxzYmMjRU6Rjx4ECNTdc",
  "key11": "31fb6YTAMjNqyM2kp7GyuNUwGm7tcDKTg1rwc9eWnyPYXifcAPcfkWARqp9kwVb7wZ6m7L6FFYNqha38KKtHN6JM",
  "key12": "WhK9N69xXJEMbpV9DbpBiCed9iJ1p8Z4UYWBRQGWfckPnVK9hGKA858uixoozSp1tfdwLj9dxmDWCgf3TTypKif",
  "key13": "3dUXHsJ5gwEqcyQpZaaVBUiRgdtvDgLFVp9t3fut59A4uACoTSk8jTqux7brfVqNUfBZKKjcdaLsczdrKB3dfX2G",
  "key14": "5PmqFXF9frCefgTW4Gi52F7GwrS5k3Xr7qvGVpjPGDJBwDupuoz8VgmM2r5ydjjuMRCXabtB3uhJESKpLnWgdc9Q",
  "key15": "3fHx9LhZqiGZnuxjFqVb5kPabfQJ5gNgH9Vbc2FcwSE2pnnJXPpQwUbZWvFZSt7jp2tScHFKjJZGKwJUY3aN34TL",
  "key16": "3NpoZCUaP52YGnZhNK9vwSj9N46aH35tujHoyVeYWcspCvkXm4RAbpSMZWPvNjHzyfZcLCTgY1D3Rph6ddmt47kC",
  "key17": "2eubJnP8EboinJigGErYYVs65irPmBvNt2pVfeVkxooiEeakNoNYtFVeVXc6GccJTF63QvsPwjE2uqHggDtkA2Fo",
  "key18": "59w9iSH9JJ5BXmMxfB2X9nCggVnzVra5aUzFxqdLDEBtEUoP2cdgKiBLe5qB9FRSoaLVWRjVKGPi6c2WAvwpKwXM",
  "key19": "3XkyWPXGd2cLWHRZrx6wWDzWgr1PmDmrB6AMAabBP9z6uoj1ZsqQ9Tktu4xMD7fKzzTEiLe4fEAPiWPKTaKfcNpM",
  "key20": "3G1Z37d3sPES2hvfba8uw7LBcvFW64Fu4MxDPNRY58aUdPw3iNzPNXE4NgnxoAsYFbX9UQNzYdf6DCaMKEq7sqTr",
  "key21": "3gph6FKgE4q3FprFoHwdYrN96jK2LC9dBmKAuk2dUfGi6Sdt2X4VD2bkx5Ac35NVqjadx2vxKpzM6M7Ausrhj2Tv",
  "key22": "3qt7sLat4haQYApsbXrcNczpALvkXga9oZ2yUQcajZtCCEeJyXfovFiM3vwWNJ8W9McoPeKm7LVfJNJjKVogxmSG",
  "key23": "wUdphAsnYSLnA1mYnpSxGxmpLRSgUxo4N4KaB696cMYSFX1xJcrVd3tkokPz5rKgwnNTvtqZM6HSgZ4dyJXknfE",
  "key24": "29zszBPA1P4gEnLZxPX44ujHJ3kyCLMmcww9oHzoBso1SJrnLj4rJnwPZ2ntyQevsBkGuaioundzALy6LQ8zHbr9",
  "key25": "3HFLvmc8npCohSu44SBaHhZTS6UQabA7NodcykfdpGmQVFdSRhDk4rWg9ysJWLBaQSUSb4Yh3on934Qvgbx8adDf",
  "key26": "4XeMDKvGbQJvqy5QPM7i3GxHubFLTVzzRbiF27wwyc5Kg1Znrbc6WmtQkJYA8JECFboh7btG3MfDmJ2BBr288hab",
  "key27": "2Fw5e2BWFeQvPf9257jc3WcTiDENeZCFjeXempnfM1tYxxGQsLxVpnHswKiwRxx28zzh7wK3Vf3tVmvw2aKLm2ps",
  "key28": "3wSpx47x9kZjMEDytsq7dtemRDwNz37hVcFKiQujBLNMrLYVHm15rkdkd9k6M8H1TptbdzftSLsGBER98gec39T3",
  "key29": "UVwTphzGK7mySDriKjTsz5CX7oqy8h5gexr8VBF7uXxBorMn9AquUDjR33PsrT5b8tBuxbUAWTkikjGjqFHxSXC",
  "key30": "26BHdxVaPRSfBhZpBRAZqRzYjr8Pndu5rJMJhCKuUq6x77Zxv5X4eeAsbxQt6DAipGU3HQn8JQcbCndLLCRVrsYR",
  "key31": "EofVFzR44a5tbnXZoKBWJqsZGUdn25u1F28NFpu7wCNxe43xdMdbJeQydkrVa7sDbejT1JGREDR6MVpFw5jJkgA",
  "key32": "55Fhxd8UhG5Tj7Rna8GQWmcR8Sgn5JT9rZ9ESXrGg3hXRC21ts1wthdfyvQXc4YLP1r89Fh89R1NDtJ1X2p4UYgV",
  "key33": "FvtFxXe2S2xgrXF5oNiYy18fSX8MWCJJpzdb4Yf5fjPNbgJu9yjazfugRTgVFcuC6rvqsJUBpKTvj6ZeAWtgPgn",
  "key34": "XokMFCxigzK6JsuZZDsGEBiwzTu1m8oGJBgwp4EePtCVQPBTRCXs1zuPtDpLe8pefDXo8VUDmLLt7XdypAprU2j",
  "key35": "3fcyDWpkQ6TnP7DbfRJrtDxkypdn5q5TUn45RjCW4JnDC5x41SQfsQ1VoWGxa8FWpJBwzF3E7cpsp9omTNutLWxt",
  "key36": "37teD3gFnH17ZUV4dCnpoEt8SBpG8z4SGYkGZH18zzMrbcg26JJuNNNXAdTVn3UzzGrfA3QqCcHobTwA2MS5FMjZ",
  "key37": "5Kcrapo8nswiLd8MPBHxMw7VB9UtVnyNP4ybWUFAbtDuxEJjH6Khxq6WvF9NysdwpVA1YzYyUN22Nipz6g4oG5Zy",
  "key38": "36dgS5MG9NnXHrgsboJR5M4vmYmxe9Wiqn2BrJgpsDGo6oTuKe7GUEvKnqV1rQ1oShFoqWe7NT2ahmyuXG6hS8jz",
  "key39": "jREzPcXPYsBV12i9KCWX4dVvDcgCfw2bG8m1KWQULxnUNvL9EmbYkkQYSv77BCSGwnFfXbCKigjv6A1JFv9Dyox",
  "key40": "39h5Nwh7BcLFENpRZXBeGLeP8Q8hd1NZe8WWvey6DxXFNsBdypjvbvmKzTRV8ZyE3rThKCjiyQ6Cu8Cg5Z69ioJp",
  "key41": "3ApyfcsDzsWbdNRLothNhxi7YLsKhzgMuHTQDAx2fKAsSR75fYySn3mmQF5LhcC3WDYLTuMQxLG48eWVgVtajEww",
  "key42": "4Wwj5PM5fJJQDdPgoioPWz2mvKrqo3o62BHnENHxcX5ZyZVonasUg4dz1GXyAtiCgQBiZjKTu5KRw179TjChkB1Z"
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

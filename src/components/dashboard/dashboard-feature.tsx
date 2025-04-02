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
    "3vtPmp9VUJ1wWLb92fqWaknyafz2fSP8YWVFPqDQAVPq8wbzLHK9ZekVj5ELC6WmYKcdTHiCQe3J57WUZK7vUJQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGtvASKBKKvtKrZn8i443g2Qr1wkozq7KeWrusXNsfiGjrMgRuLYeQrxJyDPZvWMksA4xh7zaKEzxeazPHftMrn",
  "key1": "3sCb533Axk9egFH2E1Ps4kdQ5VCxN9di1t8WYSNfwvGu5CiwZ6dEiaqAo4m625HwBXHqucDpLrM8VAKWMuoLaWb8",
  "key2": "3YwAbBzmR8zUqrRS4pDR6vY8sQZ7uNvS8T6m9BYigzUPaUvzDnFRLqNJGBr9JjW9nkahPDTDDFMncU9Lw2nbRN1w",
  "key3": "ry4AFhbswg5JJzpTeMzWJMmkqxkpnR1HGCf83vNcDPVTDr68FBXk5tmHcbNedWkmeJrr2ynaDQ3RrMst2SQ7vHW",
  "key4": "5fTM9DiHirVykf5mRrLd3KGZtdeMjXsutjzJEXuidqntFxF96fzRQ3K85scTe9fpjnwRkMFWZr166rSNYqEEmKGe",
  "key5": "4b9JdsMypTuHvekwt5brgFahjnvWvZn5dEjAinFNV315S4W3yRiW6GjHprVGNaiuAce65NES2L1EAuSwBbwxRMmK",
  "key6": "2t6nyCE55tstfah3DtZcLLT9TstW4PRr8wfDmKtjbwCJvrhXHyZZZ7uN1f7Lq8FGxqTFPQR2ca8p1h7zqQocUW9j",
  "key7": "3VYyeTYKhU2MBCcGabxMqSwxEuj5YtSmcYrtteR1RREM962ZMv562g8vZgUbWuQMNMawbsX9H6kASP23dsZD7NUW",
  "key8": "2UroeXf6vPY5Eq6jQQkKqo6383X1aezFc7dtjjGJnreX4WtXXCPoQTaACjMCgM8yeawMRoQ16E4XM5wWR3UwrCLx",
  "key9": "2hcXos9b7y7khavEfwAp4W6mRAGuzQ1LXUkGki9w9H1XJHB2dHAahvVW9Y65YWrtNsRMAAU94bLBadeaBCLJ6njW",
  "key10": "3YJMTq9AYmctuk1CskmaMsfkDdVR2mS9FPREYwZQwQkJbZRmKJY4Rk95wysaNKFd1wxMM6usm4dwH7ZNGMyqF3QT",
  "key11": "DUdeqUCNwwEYZsvu2AeXFrKmq3yTTyvftcJDeKxdYxRK99TeV6NWHZZKsaFn5RuJhxtbLjH4zbVzVFQRcxYeoAa",
  "key12": "3mMmdAvjyvdw7SdBLV5Sw2Kw7cW5M6GnJd21UixpnX6B3kZBTzQwYZ1PReRgE274xLKB9BjTW8JrWhchHZy5LGP8",
  "key13": "2H6GKyo9nJdoQtz7wAp2dyPh4cH2NujqSqE5R77sEYm9UERiXuuyaVFgYHn52eG2fiTuDj8cEcdWs5VRfkyUC7Af",
  "key14": "4ErPPsN4d1zNUi6tQdrVMaSs2f7syaPtD4Fd7mr132znjAXpxmYQjjPT3vmxYPQ8cix5g32pLuQm9xP7d73F1Wge",
  "key15": "5pKRck3hdd7dcHM5NcjKb5qfskbhhhkzG1FGVzU45FEmJ2umnJZqiTruUkVb2gaJyQ1429Wv5HktULEkUS26toGp",
  "key16": "2h8jjazniJMnd64UJNiVsTkygBry1QGKPargjyVxRu8hBGpUF7z7oBvvEiXU67bWiaFqsqapZMpHG5ut6coE5Pja",
  "key17": "8bSKzrce3HcxdSQpSYbnw2AhhSju8rFFaVvuwhKEb2cL1DkyE5Ua9aqLCxd7KkE9oL8HyXsPruCWniBodP2xNZ9",
  "key18": "3cP96PkYobgTB2DcekoYCEKcHgJ5fchLkWfAveTPKKp5XwHEFJq69KoyLyD2KN4CFTHiK5sZaPrrNDsNH6RB56UQ",
  "key19": "kYYt4RFAtmYHYWd6ZGwk4MkmEFmL3mvTMA66fKm6DKRaPfMXBB1bNWzyFx7E1m6AYvB9UB833yuzbBaycTYmnoT",
  "key20": "4QJhs46TA7Yge6F1QCDBeESijCQrhZPXNF3zXpVykgmAzTLe3CAEh2mVVmPY2FRgRmuxCJBy3Dqv52K2WbfGkSQM",
  "key21": "2opTt1BmszQzAQ98TFih2bgwQHJLZtKo1xz2QsnCo8A5AVoPBvXgSrBAmoMJZeovbDnVAFC1vK67a9DyYJRRBMzU",
  "key22": "LZ8T5TkMtsNKruL9zXp2amRwvfXVSguwc5s2HXW73KfrDBDoU8D5cEEgRDD5wyv7Rjth1L5JVitSu8riA4fcDmv",
  "key23": "5Ywq6EDzs6waKnYtTDhatBjx2q3V2KxCvGhd26EEkcYA5yuaR1od8GDGCiYsh5DMZsUomvhkXqGui9vXaZosJMCq",
  "key24": "2XzJSVLjpXqoXzsFvJcvzLgjVFAUu4VP29kqg8ABWymP6QPBj7ViFTjimPepXmw2tR8ZGrpEqPdfFzU5v7fFQbB6",
  "key25": "4NGbPraRAh1RFS2QqqFRy5uF3ZggW3GobVwY2Va8VqVxgyctSnT2bH5GNMai3oVFiJ9VDAxDcMMexrJWsP5JJUBc",
  "key26": "5Yqc4PctNT2CZTXRK7isy1F4CFWDa7HuXYXVELnHrA5TwjC7Xsh1WbC3DVoyD9FL6WCERDqaRX9SJTsQaKbmUdim",
  "key27": "4DbF52bY68uCS9x9fxuZ13PaufhKydxV5CLrNHWV9wJHijGYCHVcBdCGsccSLU6CapTXDg6pvpmttVtokkguUAM4",
  "key28": "4Jp7UP4pj51wzLRczKE7iqSpxFSA7Qb2NbVjq8J1fq3HStJHFmj14NPF3bD16Ww95WYjrh8CM3AiU9BpBasxi1oL",
  "key29": "ysgdfX6TjRZJaJZcen3uiCSgRujS6vMs8dF3mVx1ZMXTtD7TQdn3bzHxLx8Taf8B9w68Gg1ULcbehVvtffRmtRH",
  "key30": "3dMRibVqBUWkdwxTQ7nN6pVt9hU28K2UAcTDNrQAjebzaKhQXicq49rFo7isjmfQTuyzDQppxQBT41kDaVcPEcM9",
  "key31": "4ui7drnCC7oJLV68xo8kyu77p5igucuE93ghZNZyaP7Mm6vXZ9tzyKeGQzYdUFsS5Ei7JVXrELfwCkG7JFokcu6f",
  "key32": "RNMo9K9K5aXKBaHtG72vFXugG1CMzeZ9z68VqmKGm8yiHvT35yY4gksYLUhz31DXXseSQ1soMQMfn9bpYA715k9",
  "key33": "58VbTyitPoTXBByXGaMrL6ZhuBVohfbGEuAgVDbwzPF7Z5dSKbuSAw2f28eUwVgZU7czgB4DTt7CxQux79i8wHrS",
  "key34": "5LnyrBVHqULsHbMC8V6UkihTpoRz1V7otALL3BMYvhby4rWTQNTKYh4fFfD4Mm8AiujPKyBnpWkqmjwSkkyvdNWB",
  "key35": "2eew1RbJ3noquYs1rrAt8Z9riN8b8sF6jUtuiC5fuYBnQYJ31ZwyBMwfWDu1szfUjErYNfeiEPYst4LrLM6GT2rs"
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

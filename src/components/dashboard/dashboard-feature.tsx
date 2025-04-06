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
    "337Tr5Z5khfFzEFkVHPyw7HXYNQhY9oXkdqxgCsrEv3hZn2J9opYLtZRugiHGntYhBF21BsFr3c1Rgns2At46Evb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8hDsLrxRPzSSkVGPG3SLg38QaQhZjsEH8LKUWd8q9GBkTfWD2SfYYQ1UJ3hqkf2v3xEEbrGSeZas6FyYZmegMn",
  "key1": "HakBXxHWegkTD2oj3qRh8Prm1f1YEKHsENVswRLTW6YWcGDt2MLtfB9kTQ612gvkpstzmM7QhSxTWjvEFzhk3Rj",
  "key2": "2atTxG6ZBGBzFDadkAmeZRse5UZ3ZNdJSi7kFbFyrCGMtA45knVJFSCjcEyQf9knoZ9zoHWu2oQsbA3YZLLJB1KD",
  "key3": "3cBZ3B8bsRgtESNZJ6uoKTKf1BV55hiR4zpPkGXNAxxnu16tgSBMjrf7TGZGgKwMdSza9Z5stmPWLrXoFNjypN3T",
  "key4": "57udmEMjDPtFQDWKiR9tpiVc8VayWTijDkDTT5JZqzHTCcmZKxrxz67qnULSZ1c8DnDq2eaXzdHVxQ2p1ksaQpd4",
  "key5": "2mCGcK1UfqUnquzwFVcqp1iCQbrsBf88smQH7uV2kp3VshTVhZtYeteTMDQGnnvwGBXvfF3BiJgLQtQTPdWB4ct5",
  "key6": "3bZG7eVnfzR5UXXAaoQRusqqS8mNDpbKNP9dztkc2hAzQ12SVZJXUyDNXLWmo2HH5MzEvddpSk1q2xRNnkzfrz4B",
  "key7": "3iLa9s2K31Uq9vL44B7ziCYs4YCDsS5dvjdvZJZW7LqNZg8biLA8EAGpH2V2L4vDFxyRCk24tvK326reMNN7XNuG",
  "key8": "63vB7XdotWjX753CuCxJ5SarJk66ZgXou8xjvegPzBnhNtFmaTQuu5XBerZ1XY3zR2xUQmXp2GNuAPFTCJcPP2Xh",
  "key9": "4aAykD7ZyT8odXdHsxbtUvvWtAzQKbqZZDXYaje6ue29t4qLLY6ogNkEETEV7eho7HG5RFUSLGeFFmxN1zBjGdGF",
  "key10": "2RxaAvag58aoHaNQeLFPczbSANFYtZjc9dFsNY8LMWegrSjmB4BYNrtJivk4KuZQG44wMECNs74tCXd4PtBnPcKd",
  "key11": "2exPbNBKN743gJq9tGG2htiDsWZSEskv2TF1Lr9oXQnzegAn2dnQPDf6Se1bHtckwFeszc73pv25oSq5FU4aJEZk",
  "key12": "2MkPRjzPpEM9bbCyUnEyhu9iAR4xHgvzEbGct9HgEmGPgx4BXz67oMrSTtDcqHaQr8Jk5jRLQ2SZse1hgLC2NJXh",
  "key13": "YXCz11VNmivfwAiJv2BSReTFtuDySXtPduPZdcMzodrF4KkrCHUxTrxsxs32Zo6GTmMuJLudPaZ9izXHiCzgFmK",
  "key14": "2j8xFF22N6pATn9c6rmNZy22t9cT7EVt8bYYqg2pbbah2Jj1brjR2K1a9bAPmSP36vj5mrZ4UoRpNhwgPwCmuU4e",
  "key15": "2S6GwdVx5ucH3ZRPYs6ArWD4Ndy1RFmaEZ1tBHQnzfPEPSVFkf8CCG8vzEKj4naBaAve75SE5xeoLzmXATVMoJH2",
  "key16": "5kzMChcxuBU9YkAEnDbfXLVjw8GSBhj6QU9fUoC1H65DdLx9fb3XYDPYE765DxgtJxKnMwbsCFJYDA6a4ekphuNx",
  "key17": "5sjJY8u4EzUsskGg9egM5WEVYKqSNp4HqVV4bXXLG2F7HtT9PA22vdWwX6Uj2H8Q12NLCHrysG7n7C2oV2WhkoFb",
  "key18": "5jRkaqPCDD6Z4h74dNS6WogjQZDbx2YnLovaVX6ppDPisgG7fJUrPQHYGDL6AmerBck7BLHpjjBdmTuPVysYyDkk",
  "key19": "654K6VjkAZnrdMfGo4hAtPkoJ6zmXyLQGvZXYrRePetmvaQbsHiG3oxY7ueSkCD21sFydLQ2X9BBwzmuGNkYQKZs",
  "key20": "3Fr7ugRejWdGGozvLwwKva2C5Vf8sNiTf3JC2ztgsfkV9r3mec1hivd8xUKq5CXkUzX2ZnAedx5YAqT89J9ZHDc3",
  "key21": "5uCbJiqrzhqo72KDmUmob71UBYxx7dmota5N5XPMZJEFVUUUA8LMAeBsfRdrBbx6996CG2fdLEo9ZH9G2urK1k4m",
  "key22": "2DCQuewyrQjLCD9BR8NTrkfTLmbqpRJtsDZ1yaGnEAx49r7tQb4JeKjmYhZwh87i6HUpGHKm19Nsk16iJb5ibRMG",
  "key23": "5d9b39D4XDKYNeb7UkaaK7DqVchxfzSMoEKfgxijpEBhzNLoiSDRFamZTH5szRE2jHWZvmH88Z5MZ1Loc6pZBzcy",
  "key24": "2Cgutbbf7GNErCZAjW9C8pbPxTz5FNH4sRkr8pFK1NoERg2F85JZAvvEHbhe3Hrer6n2KFDD5Cbk2CdExaqGYKLE",
  "key25": "43Tg97oTkmBQ7WLofYcCw7PkWcYBcFy1qFnLQE69mVhNfwnbWzfjKg1g9aMgxChwPnxcGLwGG5kh8gKD9EkTupQ4",
  "key26": "4uejJ7s6e7CMMgdpUTyLrBeP1meg7HRMZJS3qY1ncAQ3F9mfnc38aoCi2tejtMv8wAfY5tfnrDbvzc1Hv1eZNDJX",
  "key27": "5jn9BD8dFWaruCMESmXz8rzH6dxp5V9XzVC6xSanZNLCSiH1tduzraZMwbcpv5AFNxsMomWMBhdkb7WjQ3VCEgmq",
  "key28": "51gMF7AjU5BR4jULaKRJMbnxutrLwJZeYGptXxJ5ZYJ4vwN3cfxYMKWbXSqZd93CGUS6JH8aCqJSPzEJHeeGqBid",
  "key29": "5ynx4opzhQfjEmtxu79QP8ti8TfQgYwo4GcU9fMF1urcCdsg8terTrBaT5EiVQqZeTS6nrNB9w2NniVw6zuEAvX2",
  "key30": "2Ws55uBA7iRwowy3dMSeqKTvvU9MJEU47mYwUUySTw4Ex9fCEB6NkBiybkWSKvqRYbVAhbjSSZvXnA5Htkb2AJPh",
  "key31": "3ktZW5637ausjA4T8BybxSSeRhBzxqE7CHZLmRmsyM3YanMbcfcazjzGWPwgaHRBA6NUoCAbM5VJ6WbxH7NDgWii",
  "key32": "2dCtjGzwSF5jLzY47JL5ctm5iGbYjQKrsnajRYbvQz9voCsRFcCoBLASDmWhvz5Th8XHAc2kbqqTEc8j6pEuUuEn",
  "key33": "5C8CLrEtLVXXW6j1tECbccb3b1kvaNxW7RpQZJL5korJDkiihDeQWCqYnCiS93x1vKJLy2owHJrn7aTcFhyA21xo",
  "key34": "5utuKDFbhNtESvbaiEqaPM1mUKqNP8Lr7uzQkNLky4Yp6fSVRzNrxKv8QxcgkDVCTopTfUb8XqoiLHZ1LEtzcCFn",
  "key35": "3pwkQZRRHdVUJpzQ3hR3iv8kuwzUUhSHnkGrDgr8NU9xRa6dx1E23sQk6emYDST5rvJbGVHGevjowmwtELWjdjkQ",
  "key36": "5SUUorLjYbisd2FxdNekEAMiRQ3WfTZf9vuzj7N9QV7wkJmbhRgTzXjsHskLdpjxjwkKm7u1Ae5vwM7qhwDbTFC1"
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

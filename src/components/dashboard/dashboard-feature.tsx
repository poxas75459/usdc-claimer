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
    "2DXPZd2yPsCJarVjeo95PDdzreJMpaUkTtAu31HXULA8bXY76djNXuTbmbHiox7axD4qtroGoYtbLQSFQMPbQ5CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Y5UGuA3JGt8yuGR1xNVnMAMzJiYbN8AxCq5LXJqCvEx4JXZvmGPH9Ws9i64s2PKY59Kp5ZGSraVv6WRjJoALfE",
  "key1": "gfL2BK2RLjb88hbnvY5wznbvvh2vMan7aE6jh186vSGfaKue7yqa1HnQNV19WeUzBYvXyCu6v88NTRsT7DdDELe",
  "key2": "2uAMFgET6P4U2Wb3yHmoipDv1eew61J1PmmSLbTwYw2sGxnX1yP9QaZ61j57mvNnePJNnBj8wLagXgg3jFXm1Ugc",
  "key3": "3xw3tsq8JA7KJXVgUiGMfyTUgyQtSBwtJp63d1JTJq82S6s2SsutaGhq4LCrD2ojNm7HcPrjRWMskzjTquw3sXPY",
  "key4": "5kiQbhUX6TeR9g5mUiC6q3GZUg9yFDidQ9Ah6mS1RqoLBR7yxKzgwv7X2oSovKtVEAcyKvYDnhnKrZ2r8HtASTCK",
  "key5": "62xmVsTifY24otDfjnFTMJbt7rzMTqEweU1DTz7Jwet4bCpJU6NaQqJVAwU1FeqoLa8JhphhooNMvVRRp2r85HCp",
  "key6": "2s3jcgZ4FraDC1sdXiqDj3H3ptmkouUPQ4wVex93cUbR9uQjkPrW3pNCGP1uXK7QQ1hLBgU9MSrWaKHFwTrxXggS",
  "key7": "3q1VR91gb3bE5H16yeyf7YyC89YAneeSMhoaeELktucS5cTndiwwpoySL8zHba9oxEto18rbx3qFkUYW3iRQZo6u",
  "key8": "CtRPDmTBwM4rALEzgnh5B3S7Y8hXApz7F8MpNnJ4kA1iUzGk9oRT8hYzDdPM7iDFGWXWrNmcUU9kP1wZgiARqxB",
  "key9": "54pmvyU2ZJzJQhRvfucjdtuyBUuUns54GhcCqXMGnEfSfJ1CsRxZssCRsiPfKLmmbEcQ621Nacqq2BmXCxp1H2KW",
  "key10": "3uLAtSA4LP5pWhtyiurREkA8jedLQcdCY69G1jjTrccngWZpBVzNL3b52GqbxGBciP4moxLHwE6byomi8qci5v5K",
  "key11": "52567SiLrzHcsgLQWpgDGwi2TYAcTruJ68k6QRoi9L9nAMBmqf3mRtVfMvY7X58hgbPNGrbXPJZB4xTCjeN72LSq",
  "key12": "5xjbgRmDn9XAQN8tKWJehLAfx7bKBWWXrRTLW3K3jhhgAVfAM5XueGghKRyjWAN6mRHMGkdeTdzwuZbD89kNmBNZ",
  "key13": "mngJdWCCFougL1A45TqZCEhYwHeqptCdvZJZG3AqGFgUyJDDJCMkJTeuLn5wWz8ZszZFcXZySYhcH5XWwCQuj8o",
  "key14": "2KRNB1Zfxy42q6kxZM93aDhfjYmGVSR8JBc7JDtbXvcTZabsCqzbUSh1oytFYpugTDJY8SLYksK2JjZCxYkBDZmT",
  "key15": "3mnE4Fo5ifzm9btEyfS1xAaJ8Kuf7mzWw3B1ZDZsuj2wpAGzgzue1wE8sASzFhG4X8se1HRQ3G3na2steWuXxNb4",
  "key16": "3SkMGjbSY21usDbWbRQE7QNk2NErdfG3EfkWaFggUxG2BKVSMcCKo3TcfUeDA5ZPxzAba1hHzvXnjsfGVA7SBTjR",
  "key17": "4vyD5EDtRzAam4guBazL9ephV4jDZj5sJUqmPUS46X1aQMEfte3pcj9LmHMcLm3KDwqSWVZoE6g7GNzCAfs45BC5",
  "key18": "2cojs2bsvfPcTxwhmME7di6h3HKyYW5uBNHwZwSZqL8929GTdayF6zrEuyR4bvcdY1PmukqN1aPbYhJxWDxJfSKa",
  "key19": "4vgdom7rvXonVV8XsgQL1J4HMG8X9NS79VcDmxEqq396BfM6E3QZyptegxWWAA6yWhTujnpjEeLPBPoWwx94XHw2",
  "key20": "5pd4XP7L6a5qNeqHwSmUyCdCrZJx6CQtz3ZsPTiMusrFbmqe5VQo1nhQSbTfhvCkemnknEbYoghLPuzqWNvP3Q32",
  "key21": "yqm8T4rYQev8qkmQntZ22yGov1oBfNEvdkryeHuwvrwEYsZv7ncRDRg1yMW76Sc374QtdxgJva59QL4sPwi8ux4",
  "key22": "4rV5UjTt3R1E6z8muk2VpkWDphPMQHKov2rXbTVv75TLfXM7vJxDymWxLPUvwCHscJMFzEPYMNs2iLjUvoXhRWw8",
  "key23": "3JyXZGkQteujc1UYUT2PnGiddmfrmGzFHy195AtqRpTxPcSS9TGBepxpBB9WoxpcpiCfhMavkZR837QDsFXfQ4cm",
  "key24": "3arLUerZgeBEGzZCYf7j3aJEqDUrGasFkVFZ4JhvdjrvB9GUtX9VGeRXRqzSLmuePr343uwjjcqraUqtMKtvn6gY",
  "key25": "3Ca57Tur8hZ58a2NN5cDfK9VTF2Tix51FYRS61fgzdP8aNZHw7m2SixT8Ug88zNkRbdXd1dMXDE7NUK1eaNTAGje",
  "key26": "2eUX8pt5UUBgkcKLiahU9AjbKLDsRtd8KTrNJerh26zQtM6sxH6kTcRJW7zJcGpxHjusiu8ayCuMcDiX3Viz6khk",
  "key27": "4xYG7k75jC3B6yEEBMrMqvrURBw4nnAwfPqRavFvr7jyN2FeCGeWsuc5L3rSFbjFQJtbKL9tbH7vdQTsQnkb8Pga",
  "key28": "3TyQg2t8vitiRfFvMBXCqdAR5Xa1CarA52fp1ZrS8H3GUPZqZtxMbDfoc6z4VBPzDrh6RtZNZsbTVS18N1rWzCiV",
  "key29": "2KzFYxVfSjZvqHnooNScnJGtoMTdQzdfQZy5EE9LxuKAWj7PkvMzmXA5j2me1e4fUZMwcdf8mBgT3BqPhVZUyBZm",
  "key30": "5D2MSL74KoDMdwRgyd7Atixiv4VknfrrziKzdWdAG1F6s9F5eEV3sv88YtKT1ZtzRFkqKzyE5HePHcYGMjfvBgAe",
  "key31": "2a9wsFeNpJ6wCaA8xMsPR8vvvHauvGRBK3C7XRQGvfXBsrastPtAr2nH6uoBySjEvaFtoqRNPCsyHgBWTpz5Etft",
  "key32": "4uS9MTpXtzXRQhTfcyL2zLovqgTdeJD1ime4ZkT9FBsNQXh19utMGn5ZZbjRCAPgNY5Ad4oi2EHbXBsVbGhdzT9t",
  "key33": "2KKdGN3SKJkpeXgzwdT7p8kYssnDoB3L7CB3m1jS5G7wdSokgmkUBkj6tpFXZTuULNHxUcH3caoMNHbsR34RJoXW"
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

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
    "59WnwsjmXggPeCWUUXS5Junn4EHCPfGHVKiRHWQGWNQgt4C7RR7CrvvHUrEzZZztn2yyZhvSdjh1PoZpK8zJwzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmsfigSKDYCWYgBcgGxVcwrCa4wBfcSGcuBvqcNNMHL9yo2n8APgW2q9kFHimiNTqhB2dLsUpKTfXnyBdtVZima",
  "key1": "4nuYbfwUdUjeydTFzxyuKCM8EDzZJKqLyihC8M6PyuurPqoHFbuGMNh1MZhijR4UpJ7DXFrnhQi4hgnbhS6aXEUq",
  "key2": "38C4Dq6v93C2rBzrLD8H8ETgdopNtbQcCrvLVN1t41f265CWBodAGPZA1C93EMwxrxjPvuprviobWoaVh85pbYif",
  "key3": "2z4XXj2gNUhJVnmJmQNo2x2Buj9tim8Gm6mRov7ThT8YN8vw37CBXt56r85qRvKzymZZecK8i47AYPkSzPHuc6L1",
  "key4": "4HUkfwpKRmmcZidMVaZvghsDJp7Zwc1ChzJGyGyMNW2mvw7fDdH9vAYKm2BNMGV4Peogp6DpqrKtC1VPSdqXX2iM",
  "key5": "5u4QEPqphEeR4yNaDZcNrzpyvJC5k9rPojo9iBVcq6JQ1jR93sKU9mBEe3vdYLUrYkfTsB6p8uGkzweW5hYRWzDk",
  "key6": "YRdgEFtLqKDd9mgBs2vxZYDB5hhauUJWNPPs944cw3tgzcxyxR984PRwCGcbo5HQTsstMi6gRF6a3buq1JLeuTY",
  "key7": "2cbUu1Q6F1nMed4TQknijCaAeE3VNq1VXac7JaCq7hyyKeXAsBG6njAAjxVx7o8ErCM3JkhSbYx2aKFmpTQ3QLzG",
  "key8": "2L5o7eRnefGiM17y44aZXK5eEqQRuT61sQtZRNdcAFPNnNSKXFNCWekfVmsLHVcoHgbKY8A7ERdPs4Ud2q5adbXH",
  "key9": "47nc3go1CBEwGKrfpsh8ES4567scBsXxJQqmBAZFyqeMsJxjbQjiJ7uCEXnGETgccXaNXATXW3VnD7J63EYePaj4",
  "key10": "5fFYUKg4jMkv6tSXY3sddG1tM1ssGmskj1QTBe7tEv31fsUWQDi8etCAvJQNq8LX1bxHFhuH61A4oRXEGU2JXQuX",
  "key11": "fGhdFgdmmp1eYADogNWsapiUH5j9wELaHTaqRkWcMFp6ubKBnD9BfqsdZicMNa8A8PDMNiFMEyWbVJNNfzdonyt",
  "key12": "5vBmo1pcDXE88j5Qapt98MRkFtzeme8mwpg6Dzg5pKLatcxzfy3rXRUKbqdBZD2Pqf8DHu7Drnrt1Vt4dTCdoL96",
  "key13": "3LjrHUBP4HdksHB232A9B8WrQmkQJh57ZMHKrRBNVwA9mmZMotucGcsb1SxJTkVFoUg9JKGK59U2wTiSvm9HDVpB",
  "key14": "4rgMrZY1hP6TbASyd1ZBdZq5hswqbrwUcyUnKjkc3AQseycPbxBcroVKuCBfUngSEf2KkUnEhbQTrzDQn61DKJ2x",
  "key15": "4C8QLnR2Ld7sLGMqZxSx1xtf3pB6oEhqFVQFbSzQKi28AmYnjvCb5YCzWRJJw2NNb9YeAnTpyqT6paojLuDQHoB5",
  "key16": "8aeQM8TYQvgk8E3Bv2pumKn51LBA6SXYBL2FXoHB1kFCaHReB1dmiELt9Kkz4PjBXSejT72Q7UgfsyZT8M3WprN",
  "key17": "61jbFK45S2uQn1aiT61KUVERP8a6gdMxdgjswfhrHhULHzUcy2ADQxUtFQdQvUmRUPK8LRi3zBNqrj8TTCSVRLMa",
  "key18": "5kXJ385hLEPcvnNztywtqp8cnhWzQEUR8z9chovNbxZ4TYT16emgLLjFCA4fGJWmybXDmgzyS58WKyUJS5KRu5C2",
  "key19": "wQJHUwFuPGSSmyfKn7qZBPwZkmr4957yh6Ae4BjbJA757fBG86sKchHHZisDJ3tiLNqAAkqowdtGmuC8NGhhk1P",
  "key20": "59Gg1QuuZnje4BQaV9jRVEuhAytGxNxkzRwqEooHDS7WZbhdKGJYxvoEEgVvpke4hqt3cmfHy84RBMondbxuncac",
  "key21": "8ky2nY9bfqt6PPVRLjpJSu3n65H9yKHZGChoerwigaMEe4Fi7GhnDPj2G3X8RUhegqnQppCzoXA6fiUTYK3DS2T",
  "key22": "35K277zQa2zUxKzkeALtE6EWXNz4KUs4D58BTsNuxrcXjVe7f8usvU4QqLyiGN11HBe4X4oiYqJvvLcwTAPnqEVv",
  "key23": "EgbdyNYJxGGRMHA51BaVdW3ZwvriVQ6PNMNEQPiYF5BP91NrWX4sndcvQdjVVW71vwNm6PExYktpepYKX2UDMX9",
  "key24": "2Hrrnsg6U6JHV6tG2oCyWvNcRxm5k6roF9W6rTmpani4jjXpXr3GABQTLNRJBHR4zw12SFDFgLAxPivG4paTejy6",
  "key25": "xvs1d3DnnBgNhskwaQJmCEHmCrhR6PRxKwhhqKDbEvA8H2GV94Hec3WjqnjxBtePYLNp7qfZH73M9HVjcBqsW4Y",
  "key26": "2iNmuhAFwCJaBAE3wit56CCPBWoKazR2KfFsPtg6zJLxQihqDGfHm6RTuw1nnMevVdyZ9opDu4KUcitiWZgWLgEK",
  "key27": "57w5fv8z9ruWm7s5huS5x8WSGtT5iwrHLKnvtzdA4pWCUZowvC9Q4WY5B5vvfk4A6JQcBEZAFg466DZVs3Qj41y8",
  "key28": "3uZYP8Vu1HPGJoFNuPBqKnSBGaVstxNk4pTsh8JxDUNmMzuU7WKQzvhFfpqyQAPLS4kWxkuh2kVQcNwrevwKfFam",
  "key29": "4tLSYTbCCL99oFVDJkqTSW7UBCiq7vSPCQ2ros7GwEsKmnATVD9Jbuas8YJTSg9x2PePBVkHPcsMHEwaFPQBdbY3",
  "key30": "2KPWZzViVAMAVBx96ifemK4ivqz71838wZMGR9FLxXuyV5AJMGG918jVNyLivs8RRX1KtrjLDp6x575K4DGhkpxh",
  "key31": "4JaY1ZeS4TtFE65DQBB7Spz2W2nHU7oJCDrofsc2Ybro1WVLBGZTr7CAgecBGZ34CjMyEPjTZ8uZtrtPZaJaASfo",
  "key32": "QrFtTWF991iJ2CrdDQBRdDCigoe4g93DVdguZ2bYQ7bQ6C2nF9RvjazH6YRqPrAbesXZbp9NTrx3bAnUEmGSDgr",
  "key33": "3vvctdXVExrMPoEqC1mDXCa8vqsvpUuSEdGeWFJR8iTnbrVashbXGHpqgszeotqgxceVyCPALtHfpfZpopjC1jC6",
  "key34": "25YnqKHfSMfT3JpxvAnENpf5y2esM5kgrhAyN7DvbPpV8fZouNEDGoT19YP5FpXcRZCoWZNX43apmmCdbxFHz9kK",
  "key35": "3vxR8Aes4PVq5GzCvoaLYDjmk5nKzenQztvMcQAfNgiPZg6cLASSRC212ow1mNAkCCa8KFfduDGxnKmX24FyJSHQ",
  "key36": "2tXMZDqKQNLZ8a4dCNmWKNuJWPtK1s9tAdYRbhPajYseh2udVw3Z5jtFLwKpWvFairD1NotBSUzUE9eFjGEpBify",
  "key37": "PDbwi4hszuNYtxb3gLPf6rzWvh1QAW1mfZaCWxYayhjDePTDcoHovRHX3Rm1whA4acEkX4hhG1qNCRrUgL1GwxE",
  "key38": "5k677WZZKvsVaxDs3b67Jv5eLoD896Haa5w7UxdRiBu2AKSp3tkoBAkLx1fnmwR5XKf7E8Xdiiummh2G1nzrPSfn",
  "key39": "5CogziKvKj9QSV9Xf5ubzRM2DTXv54k5BeeGnbGCcmyme2mfUxh32JCwiYqYHGe2bxS4irJVTbum1FkyhR2K2bpH",
  "key40": "5zZZQLiCzZG3grUCrChNfZBib86Vd6SXTj4tLnPuSQTk3b2M9DDHCFLbNDGWcKpZhNBMP5PCCnM7iStNJqrWp6J3",
  "key41": "2c7yTSp4R7dbNhjjXYVoLJZGTXkYnfDiBQ44yrVmEVwSk3BuJSNRAKwaNCU257M7PW4LhPXxdQTWfNaxvUsZydv7",
  "key42": "2TGm7DdRzMnB4rTr4FjFvz2ujmMXphDwgsEd6yt146h3wmK1gV8SuJXS6xgQ7gwMgqtR3UZXLpnTHsuEtysdVB8",
  "key43": "EQpTL6hYde97NmjcgDVMhXqJ1X82fqUM1gGtaiEhCDCxBEpowx7QyQe54jArAVZ7eqVX9LoNDW39pJzeTVEMqQA",
  "key44": "5Kqmwy7okb7VsqJv3CUkNFCQ6wut3GVJxpUweqwrFtYyBeZM8YRKc1WtTTFUuD7cu7jXATSvywsn2rCTeSiXsM5a",
  "key45": "4C6rgm8Aqyrvh4MysfGdsKmy6iCK29FM7qvscivBdJo6tg1bLQJyJkUsPRY9xtHzHMpSSXwasLSiKjHrrhTGc3fz"
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

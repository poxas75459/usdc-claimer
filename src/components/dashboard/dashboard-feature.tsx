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
    "4jzzTCrhXe992UYcQ5G3Kdb8zovCZAkzJMTdW3R7BDLbkY5kjqBHMkWMifimPYUF7vyyMa5gBRs2E5ujT7hA5f5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PpUBBFYWvWQ3pMUqtVwx3eG2oucoCbFt3aPsviCyD3UYWZZtqTc6g5bLFhDuH76wKjGmaGs5vyz7rt8Y8vM1EZz",
  "key1": "2pjvEzfr5cYAbzu2XHwidtip8JFD8xUMEwCyoM5GoRwkPuBxo8oHfo1WyTHNeJHgRG5f6TX3CoJNNKsVdqSd1R2",
  "key2": "hoEuxEBzFdtE2kcQsDubHTqwmY7mfNFyDorJyQBHu7J74zSuyg6ADbbSssKeY71cXWeZ9hE23UkFWeh6zG5vR36",
  "key3": "2LHgx4jDZWcVDGN92HGwLj1dv98KwS5MwaosZDfzQCDsqZypfZCGWYRKTEFNZsBPDEDeLuYKn6WGZWUsZhaMSojU",
  "key4": "ftMdtCi4AvEVVtNMPDpKVd2tcTQt7EQfG4pzzJq1ofbxSLMX1gVGaJHbgov7zQ4NtoBdsWVo4YQcw1FMs9S57xU",
  "key5": "61RcxoSFeYCMbQcGZQKUVjcsKU9HY8aj3NXgiwoj7JTFDE1YBVyySp7RKBanE5gHUKJXhAbNsHVD76TBov5Rjdo3",
  "key6": "H6hepn5rSFYRYqVvM3hdRYM3j8eC5Q5Wu4eXzoc4gEvZZ4Yj4Lb6tn2nJoh5bP7iURAgEux4wb1X8RKcoRpWCNw",
  "key7": "4Bf1ZYjouWfF8QMvjFYA3BXfoM8K2ZAXiWSBF8A9naGwg93Zq4qgpo8eYQGrLZ7PY2HjfXYkmwkL8pfSGb89rLTt",
  "key8": "2UYq9coopWTK7HceqEFkDJfGGYi6jhEd3AgmcTgxp86qyGcmeVLhVcjcEjjncSjqPRUKBvZuZqSgAbrLd3av5VP3",
  "key9": "4PyKCQiT3tqJCYVQsiFEUTVh4dvF8z3Gmv6CLb4TfW77okSaSBAtTxJoux8yxpVbdCNEzAiJzPm7xjifiXwetxzx",
  "key10": "24JE5UQ9yG5Yd5s5nHeU8qLX1EEvgWGWkdSfQcYBaxUXNTvKmLsvbZXSxhzyzs9gpVbVW8Rz2z74v1xWhdHknxmL",
  "key11": "2jsiRDq6pFSMLt7U8bTNZWKoP441ajuz1CiJrk9G4hDBSXpYJhXaHpMrhzSuadsJz1sN8raSbpt3LiQHZmrpr6dx",
  "key12": "3dDbnrAxE2vyDv3Sw7VNSumG913tvDHkm6zgvvn6hCkeqXM4AgWCVPe4gQMECM57VSpwmZoRcpcHUkX2kLTDNoxL",
  "key13": "2ds8TcBSV5C3wG2fyCRq3PVf6rp4dkaAEyvCAPcBSgfzJnQbAm4R1CF6vt43Jp3jczX1Q4YUnqWHWej5DzsvLWM2",
  "key14": "3BtoUNVvQ9uvYKztdhfQKQ1pooLGfwesUnrqDVzRwGPPub693Y7BXHpaDqaTvjvawwqFm5gZ89iVA7gG9hneRRe5",
  "key15": "3MC6EDjawghj9XsJWA82tLLhzULcT3nrkBiWDsQm3ynTv9eeji4TEjuupftBF9xG3eEZYJFdFswaNuRoAiYSMvi4",
  "key16": "5oDpsK9QzGkwvJHBXvVcJTpKRECzEnSQNi4SSYrTPpcs2YgHf7TygMhQcVyQtMByp9qd186xCuLj4cGUWZhbmmyh",
  "key17": "5TWGpYRhx1M2qWuSig8bhAtrRTLvETC9GMUVUavBkKKnVuDSpznmRrDDS8yzUU49Fba93DE72ZfsEH5e4vdg5c1L",
  "key18": "3akGpUvToRzQzxiqNuizD9buBeRSzstKH3MnyNrgtTVZJ9G2ny7fN4CzEb6xn388KYQhfVPpM56axH4ZDXxfyvkL",
  "key19": "2TPzfzwF56BtYz48PzYicLnfTtDzFZcXLy4bBwRCohRVNhBLBqCtB9c2eYresApeC2r1CYcm7ng7t5AoJboXS6q3",
  "key20": "27eEicfUtZ8LUfR2SU34PxRNuAu1JWqimqN3jf8KswcgwA7FU62oshiUVxL56eZm9LrmmnYu3zT25V75L4nK4FzM",
  "key21": "656omQWDGR4FJvgSQsUuVFWkQprjU613WfwLsKmwtfCRueoURVZzSMM9PmSNd3QbLbwFJU2CcfXRRndHEC3ZXB21",
  "key22": "2zuzdmWXh2bq81sCcBJPTXaBEXLgD69uHk6wpwBPweAa3TKJKUABAZ2xEyF5tNj7tw9AGWmaWsBDQeMuKBUzagC6",
  "key23": "5zkGJdipB4qMLegG5P7fpRoD3DguX5e2qc3EetRgbdCwvRddteXyo3qJYCGYQjz4TYKf5PV2an39zgddnNsoxtYM",
  "key24": "4RKAWtHnvKTwY2QiWjYE9k4Pe4ZhFfPMPMEfXBnacyFnBC7PGfdN5jEHG5RCNT4onq5ZiKgxeJe7pMAE8gyDbgxv",
  "key25": "4So26hpCSGpuUbhN4mxKoQS7GwaoVnvZQgWGTjwggwEFYEyWjDkajp7sTr7kg1LwXrQnnK7h7eXfRgBJVS3AmG2R",
  "key26": "5iTQ4cPLzePnhhs9MQhZYsDXVswyw44f4x9DSU3KA1JmrfsYyBgFHuo13eWsyoS6w9bix1JrJpTjxkcaKGrEYLAD",
  "key27": "4QwqQiBfiTGeQDjhzuVXyfNcL4o9j8n6Ku7xdzxwYa6ze15mLJviuvsdHmC238AUbW5aBA7AXtKRWrQbkdWXQUaA",
  "key28": "4SrUDUwhVURn8U7HjxtLf21SWyWtjHHGbVS4Uxx1D1DbiE5qhyH7c3DNBYaZjmuEMUuYwr4DWFvBL4Suq5AsU26U",
  "key29": "4GQPyQ1TcW5QUh9u2sGGqWkCABUpjpRDR81vJ42oRye6Csn4pq6Si9GcgyjySTB1bWxVg3xgFYijrT9pWHhDCNTL",
  "key30": "3geHQG4GAJqHKtko9ifu8bcZ7La9P6Cam2rckqtJx1htYhx8cZz7d57BpTbrNEyoui1snmw7uPskr2poQeX2CTEE",
  "key31": "41dYkGTMH2JQvb1rDPEXz2mcsq95g4yusDmv475FWNA2iTowPfqDRVFzo9sSXFTNGksVEqWUmHh2TCSKhQbT7i9K",
  "key32": "3gjEC49EvHC1QvnVh3we7SeTH6QT9XE8cYspjrZUFBwW1oLeCUKbFY5JP9eNyWzAbFtPgvH6mfjdyECk5Vza9iTS",
  "key33": "3jv2UNj2L9VTkXPQia3TuAK9sXuVs8h7n2MJtt7BDnrMGS6DQzyezU74mhhWPXAq3KoQE1u9qTz437Q2on4yYJuz",
  "key34": "BMJu75dqZar1Chwu7csvippQVt2v4BhMCtoMw9oS7Q4LFP7zgKe5kQST8uKrLHiPRfp953PgzXcpdXv8YX8Ktua",
  "key35": "4DTZcdHiv7ueGRRW8qBs5t8EMjBaQCHVaiWoS8Tkgmd2ofG1vVVi1havfYC2XTPLXiAdakXibTAkh2cAThk3oPAN",
  "key36": "4YKTky5dUqHyF41F65rJ9R2X4ftpvFKkZfMS7pYSYFKe874xUw8n6PCCC8X6UCs1xCNi8u9XRer31foAdpYvMXca",
  "key37": "3aZbrs9LDFBNTmouv5paqdg6RWsNV57Ag5ko2BMRQvSWyi8peNJ9J9oUPtLJZY2eZYuFSvdqBARVXEtP4QH6miCW",
  "key38": "5RHSaGu6J7HkNXnjmJTsuiwQtTnJkJUJvCHEMJ2FLTqYFSBLcPetmgkizMh7nA967LMwyUAnBBjSBCRCEHpriSMe",
  "key39": "9irJWbabFmyMub2gY2nJRkKbphT9LRjy8ev4CEJQz8LDA38MCJwSNVcdJckUQ8nVSkfoEgKhDRAkFMYLdw8sRK4",
  "key40": "2zdtJKNgNwDejW18mafE1n7WbJgpCX13Cc5S7CP96VuVdC6xy99aq5WTBrPsH2V1PeeTBKXLzf1DoCaaybfjb2xP",
  "key41": "4QxoPTcZ1iyyRBiDMipr2vi34dsoFVAJ2hyNpoZW9hb56fJAsu1naX33TbAZGXc1qBS712JBXJ5tQq7w5ve1GaTz",
  "key42": "4TyfrSRKjBaEnc6pab6og9snpaToSH1kxVDYdDaHmAoA89PmBqFvmU5wffv7xCdAzsCpY7P7212FerhfG5dxqY5J",
  "key43": "5AjpN7xM6FpPpeDWpB4ocUjGBLWDvTJCycC7QDFCqtpxvYDcq4wUFo8ndXPsdQ4CAfMPfFTu84qQMNb2LtMvsvfE",
  "key44": "3JFy5eFVp4BQKAM3g1bDP1gpzwhEWL3SYvMgaT2YeCR1qX9w971hQkfPcKjGomDE7GXsTae8bjYwsfnFX2oWX5FR",
  "key45": "DpzKgfBgcC6H8iXwosPPDygtP9wiyQXaMKaFxgT34g1TYLmJEw3yypZZEM9JX82J4eQVRJuTKczXpDLfwnr4mo5",
  "key46": "53jT3556Cee7BFszwTDrkmuY7cqVBjCZRhVYCNFxCCTgYGYeUrBn7oQbPyoQ68TbEjjJvbQTFVsJdZQfTyAbpoH6"
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

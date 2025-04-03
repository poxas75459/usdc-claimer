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
    "45yrrDHQvYTtLEWarTuKZZxQ87G1bjgKdLNasE3fAkHa6mpqw6t2YabwM5PkkFzWqNXpUyTLHJq1WRwt3fMLeAbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruMZuGyFCcG19iRE6rq5QJv3fhS8vpVzNJNEaASEFxfMapDtgExcVEpPt7S8HunUKbLEKHG9e13yb9qVt2kvbbY",
  "key1": "2RBizerjoGNR6XYMZEaKVxb1cNf7jibFoAiY4CTEqFopYmPoWsd8cChuXQPxyhTjMgRz3NGwSmhX7RzEFZ7e9yBC",
  "key2": "5kSLPNS8qcGMHj9c2kKdHyA3pso1rZ3n6CZFk4SALNiH77SHinrdvZmm1jVcWUzsuVYP2YJaHFD4ksE5vLyFCKh6",
  "key3": "4KPwWfwNuRdWCbQQALAEQw8v3bSvsKHfiF1busEMgvmkfz2Ywgir8RRjsUPFZQv7yXdko1NLqwmSJjMKBzq5b7f2",
  "key4": "56CrG6qKJPVXUqGntDfrAJtSK5wZrQRgnao73caq9fX1tbydd3KaTrTC4en7ViwNLHKETMz56HipkjJus6VDQ6ne",
  "key5": "c8wkVg3N1Tm2Lg8Sd1W2FHqx9WRNV4hTUywpQACKgMoFCw5EUxMLht2ioStqNEAFgcJ91rub6qToxoiy6msq3ya",
  "key6": "E8GWTDunvR8kJySQMKP5rDJ6ymPsAvM52SipshB35Piy8oAWA8FY6YHV7Fh4Gzvh2yNA7my9Ac841GXFC7kcJ8n",
  "key7": "gqPeR9Fy6nMwzAGE38BCp2E26Y8hE7ShWQVKFStHJM1Xyh3jWRzSEvM1sqzP2KDPRdD9XMdLsbyZnv4PJ35tu1a",
  "key8": "3J9yc87jwrqsYNknZzr6aRo9Vk7pXXVaRcr1A8rnq2i1LMrg6JFB4oXzvrMKoF64ZQyHtUyrGBtj9Nt47JCygYca",
  "key9": "2NmUcyQtGqtiPn1zyrRrFbExFvMPu95E9riivpXXfuiUqYbf76euswjVyaSoiHxsG7Zqw6LoRaphEaBKZVufNus9",
  "key10": "4YnfS7uBHjzJgwHf9uqKmYvhjyKnuTBBLmTTecv4wfzbqRXArTquYsJoevXYPx3jZ1vjqvbqWF6jT28mTxkQEijv",
  "key11": "2Rmuex3RPyjzjTMWARuq54iDsdvNcPGA5Nopprht7RqmBYwGWm1mgdX7ny8RmU7AoxL7TrhsDEgsNJ42PfBQmtvL",
  "key12": "4BowSKtgL1Pan6C9gQp8qNoV3hDw41yGJKLdog743mWPc9rqJsGpcgEaZJCZ8sLUvXfjAWRLwRdAiddP2XofvVGy",
  "key13": "4JRG1s1WrXuYo84HXoW5THNrkzdAwyDgBraNL8VbxRs9Yr3P1umD5tzi9bbqne8x8ysZevv3gmdt8HmZ3EnzhC7F",
  "key14": "8fUZ4aAjsc3cRVHAc3K3mGU46tidgiL9u99qV9zyXi5wmiJqahYEWcATLifa73uppG8dQboGuxG17sLx4YNe9Ft",
  "key15": "5X74SKBR4bZEyE2M4PSXCsmQjzXJbt5mfRhexLiSM56Ct5tQXdi59m3ZvSirPsKrfXCGzTtHuxUe4UXzMcuvqWwH",
  "key16": "4DbcygqR9ZKq16JGfY5iL4ZMQzgBRV6H9kSiPYPPCM7Nti8q7Jfanqx8kVbigAdQrSeW81HH14NYMtscfYVHMBgC",
  "key17": "5eAjaxmmoLWwUR3wZkutfyUGaBiyDNiDkUSssPPwmBoNWYvshuLXGidsT2r1C26H6i8Xj7XEr7b6G8M78pdqmzPP",
  "key18": "3KogPhnypJ9c9pbREggsU3EN1ZchQ14BPi5FZeDvDbYdSFbKR9HHJX7KRx2Xf8z3qn5P7GNweybLoK8mhgAdv3UZ",
  "key19": "3B46e6CcZWajGeDTy8Bcndy5EdazvQgTPJ28cDfGQopEdcYMPBBudoKHeKTyUgSezxQ9zkoJtQcQ9HbAyrMcK37p",
  "key20": "2RNhVRusarqsgCfquN2pyuaYZwWzQwFGK3Di2eTwbA2SybSiY6Wgt5HCbfdcP9aMwNif4tx6nMgLzmX2mkyE4PU2",
  "key21": "5TAcE1NYTTWBY9wRYiAcN5FAh5pSwfz6oaao7V7jeMb5vQbTNKWox5SakkFTHEjsCAd34o9eqtX7Dg28hiNpxEeE",
  "key22": "5cXiCoYQEs9TTTxjR7BNURoaaJYiRQy32bcLQHi1cN7ZirqNkiEPHnnheYAZaUREP1jbMW6qxFDWyUSLjnCexFay",
  "key23": "4R2F519UkrCTuNFeSMeTgYVs5QrZ7m7SzKDGHreDq8EsbA6ok14pvxvF5zd7UVhWuwkWNPxBkgjzYkqmP3xPGUtM",
  "key24": "5zvMXA1U3hXB35PrizUNa9d3uUg1jKndEv7QWFCT39A4NDXMzcUFaz7Gm9Z1hy4WbursScdzYaJusucsQB5Zm8wp",
  "key25": "44bafwo6zv8fkocywX9tuSUWPtateEmasUs4xivCZ8FSxYf8DG2ZxAzprV1vMjfKVwkST2Vyxk7h62C3DsbSjpHm",
  "key26": "3mHp9EpQtXHFVrG2PMcLsX6HmAv5nghMa1KiwBK8EPoLBensN176YgGJ96SnP5HfyUiAN1m4uNWrmAEoTdMq6guP",
  "key27": "5HmWKWVYUbsw6PDU2eC8LY6zrGRkEPV8FHYfuv496v4GeXALTFhK9ht1PeA7zsBV4XBdpASaGiHpB1rVGMrRa1Dn",
  "key28": "4JydUgWgtHe3zuW5hDNfNKEGq8wrDh28G8v43uwFm8ePp5aBw8shwmRwkk4ZiHtFNkjyCQ8agiXRdDfij5ZvbZ46",
  "key29": "2qSbta6uPSo3kW1bC8nGS2UZcsjAqaV17ZTo4tE269vYe4PMZ7Tg6e8PJWsayu8rpf9UKkGGgGRAv3HYDLx7VXjd",
  "key30": "4Rq3TsFpjs4FdUQk6ozmLFLRSM7MKJSosrnoYXzDDRyak4As39Rf8XhYt8zmLmbUydPx7RR15WQw4kJz7m4nHXXj"
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

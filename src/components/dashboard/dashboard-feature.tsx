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
    "2vcPZPukhoCV8CFAYwiaoSdmeZwtjLBpTRTEANpi34WsVQG7CWvq32pFUjiy7GFQwWpb66zKWCiV1UPTpWXEmfvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnRW7UcfsWKS8DVtK9HX9oTutWamcCrMdoSMgkmsuEq1ms61UPtSQ94cW5r5jDYgTTQtGfkBPmgHtHberuyjBdR",
  "key1": "5UcEMzHgyYKGcPtR3PvM6qDPB11j8CSBwdcCxoR3PziCZn9wkYXeyBNNjen734mmzRNVZXTXJRjU1KERomSnG1Uu",
  "key2": "4v3eWUArzmyNpWUkYrwFspt2b88eJiz46XSB8Zj653w55Ck7ujbhzLk2jZUCcmjZPXrBNCz9rCSPB3NAtTzPo2FY",
  "key3": "UJgqZcMrUeNdtjb3FywANn6ni1V9BZVoehavtLwEy5PPdGeomBqvGosmkjQZucQYrTxVm7wPKLY7XPXi8C2v5TX",
  "key4": "iMQhWJUrFxBjuiYsv4ME83h8KyGRqHc36vUWohWayEMdjJ8dnbR84bzZHAFkhCWSisEADZgmUDhHqeNaMFLstzG",
  "key5": "3Pukp91xVBw6hEdLfkcXeT7qJkNu7fvFLsdBvDrohB2VvPCXrFdL9bP7oTruhkczpLmECebon6dkJvaCwzch9oum",
  "key6": "54jcVX4bJZubYCgn3zoWJtUt8YHpKjHQ5aVQXkfBCSvAG9uPSRvuVozJXuNAC2zKHGgsj11bPdy5kV4FTWaK8X7X",
  "key7": "3z6cf2gdjj5xEUbZTaj1xMHytQqQjrqkS9aCuUbLRLyAExtjS81PS4eCdPvT6MVnzGyTzAyS4xgcYskMa22Yv4qp",
  "key8": "2sk6pKkzBdMJGxVWSForgbGTQDFrbgWzTbFxjhTaRYtKEdDVehD2pAM9GhQSNdy4YUvqz5Bn4oAXvgVH2NrLBDDG",
  "key9": "5GWeR4DUb3RcWkR3PYt4qFsebJLWhfq856nX4gKHkSaA9CdtoYESATavMa9ouLpaMm621pmvtGZ2towzLcb3a4nb",
  "key10": "36aExpkueXYgBJwYHDse5YrJyWWLPPU9j9RN2tkdxEwypSPzVhD8dRkWNVDpcozeFZUAAJhCN4efMD7CqsMsYSAT",
  "key11": "5p9BUMLwEquFED82sWMyb9geoAz3XvsqD16qKQpkRoRhg3C2DnotCBwgk5waThaXZ4dVa6ojTHBtBw3CSNCnox1w",
  "key12": "B484j4eycEey6sqitHUzifrim749tNpqC3cE8iZsekdL1v27HvhaRowDzKoSwhBA7xESVjDemrcUvxf6BjxYjRH",
  "key13": "4TcLLedCPjZQBWm9mASSFdUQBEoAAWLdXvntGJxsi3f3a41TuHNmz6qR8Gn6tUiWDJJhCMZaavwJEALh3BRABCy5",
  "key14": "4pKxNAAE4kZ4Lmn2NGFcPBsessMkC1H27z83pZxsuaD6nVtToJHRLLXqbwKSL5XE9buXN6bXceeTNALWiRN354tJ",
  "key15": "4kV9swhsaK1R7bSyYMK7Rs8nGgtESdXtCxnSJc9KJDjgGwUK8jrp79V1iK8gd3zmM5r4ETjzJAv2g9GqToZYTgN9",
  "key16": "3foVJvCEv2ENYEHZ9Q8Md4siXgmYJF23kP91SZb9qL5frTaPsuEuBxe2bF1pmUWL9uMS2zFKW5vfjrd6aaJGqjoy",
  "key17": "52iL52yJEJc99a9M5bPvwWhhPk2JMeD7uxMS92nWZSYwQJCANz32TRAE2CeiG1AkfKsZBQJjcANnJ5Zf6ib2tpP",
  "key18": "RLSPAAn69qz5znPAtnuVxryUNAvH6Hw2wWhdPZRwKRtDB2oKorbgmL2e2iQvx9EPVu3tn4QgC1oJuhVFoy2DknF",
  "key19": "5homsZwVwhT1mrpNcaiWyhMXHQ71WcWqAQ8DZDedfuZ1F12YzZD2zPSs72GrCTDaiTuNiBmPwV1AoAyMWsWx3Ag",
  "key20": "52bYHV1ZHeiHsbHYkUcLSGLhrtYBBozNRTdTWcWaRVfSWh9tyy8DvianiEvhkQJ1icRjoJPbKHNMH1JP6q4A4wR9",
  "key21": "3LcEuqR67aANsUADq5DcqpCQSWgbN6iQ7Bq2tn6urHxsjhr2TGXPsCct2C6AMknByqAT9vdCXnV2W1advEHHVufH",
  "key22": "4DhvNhoq7un8URnakptbxgwUPP889xQuUhRPgM85DymGxsTmqBWjzHhNiHYcuQejhkmecS6JBhxX8r1Bn1vNFFZX",
  "key23": "4i8kVywAz3rKNBqGeZxNGyWtbbtvik1ovrwtMNcL74MkRttj5mvb4o882yUGkRbDL6UggYmifoGt5PMP7megQEj6",
  "key24": "43Ebc6j2cDzMXfpdU7Xf24sk3s9av4SpK11jQFsW5g8Je6su15abPJsUvSp2dveZ3gLEzAmUMNQ5utc29Pvttkdd",
  "key25": "3SHvZUfQKPBNmifpZr9cAMF3TYGvnqhTVDSiCP8oGgRmAky5MPy3w5y4PesfWmRohGjZbPEfjmEGt1hTfjitA1Tc",
  "key26": "i2F9jJ9CGXqtg91St9HSrYFUbPQxGi34yEEbKviAb32WYAtWcaKjWvbxMAzWUivitDfNcyv41PHG2gAwfZPX9NZ"
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

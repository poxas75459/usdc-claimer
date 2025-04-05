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
    "4LxBUUK5t5nrm8DpK5C1cphnw3ynQ1TSSomqenvKzW9Yr6UdqGsghvXUmNqgY7RZhhrTb4uEMqHoPSzkxtseLnzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RD932kyvzM5fT8FoJTPhBqHTrPjEzATocrUTjdZsG2T1WHddc6N7BuSBUvmTqwoEL2g4vwDCUJkSHBUyLbFh1UV",
  "key1": "5zsobBhzj4oetw8KWg2gv4bqe4RoDfSBGqepGvRuCtYfYufjvn3k1WTsG3Yim83DHU4dfu1xwrRH936UQUTJaEHq",
  "key2": "244mg69W85eM34z3Y4WG5nmHzXVZJNh67azWGZVcT15eBbvJmUhGwQsRt4CQZfhiebCVMw3mU2ekPGEe5hXhiTom",
  "key3": "5vVRwgcYDsyetZ6e8crddfffDA7by4YPWF6gf1Y2zhqbBGC5LEtGgcVGTnc2uFmw9iNAyFCmaqcU9fZVuWmciYXu",
  "key4": "nEhgKin1M8J3DqYE56UEaUrh1sLMpmPQf6QYGzYdNDMDHBs1Fg3kcFQ2UGdBwKSrMGvzvknFy4vY334oSC8iqsC",
  "key5": "2yMk2TmmR4hEN4ceB2oRCjPCJCQTZFwxozq3jdf7SqZzz5dkNxzoKPCJHAf1YTmWk9F9aoS9h89g7xTrHYC9tqpt",
  "key6": "A3fzV7AgQjr8GzaKLFu7AVkC6h1Twoi3AsnwfPLWNgomLHpmGmTqM7XFFTeBbAWoStJ1X9GkygzjpnY66J7d1vt",
  "key7": "5mRWySPsL3s6sJ1zSyUPu3qREZFxzJE8XGjGtZs4YGgtMioE3UcacBd4cVpTFHYa1vins77Ln3sUsLQ6mQWVkdJs",
  "key8": "4PLKyYQ2rPHiiUZpX52VX6c5VtqhsZU9EyQyWhKNXPKpnL2T48FdzWNwdzJLx9bGnidnDEqrfqgCqsFa6ZQ65b6P",
  "key9": "2rbi3s2hx4cd7bwX995NUGowSszKoK5YiXTk6uqFrRAEF9pJxj7JWgusXDgQjfBxeFKsr5xLCiCrta7yQ86F9vaf",
  "key10": "2nJzEhNYvH4xC6B7pi9gcfHHGjy8ucFTohE6qbQ8BS2FsoBJ99a1wG3RCELQ7hGZQm6CqnNpn4pjaagGkJHZokZP",
  "key11": "WifGqtwZenKJzHzXfaGX9tosagLve4WwrTsPz7k9rZAQpTTqg76BFSwtg9yeRfaGAXCHSCMdk7tmscM5BDqymiU",
  "key12": "3BxJHgJNJQBgkjKLgEYM7dzgzUooakLgqyjTMDCmBehsueZzk8fZDXxuyyy1aVbAEi8c9mfSir7vQicm96xgqMgX",
  "key13": "4MTcrSJPebv9JBVtHe9MwkYDoWjx9hHZYdazr46AHfMV4ZUdF1ZTsSQ159xvfhwKmzB4x6jZYP8sFvxQkdwTiw1z",
  "key14": "t6NWvbC1XJVn2WJwUkrdmrob1cMTUHDi5KFnE4eCPu6oHdL6z9xfDaqgyTkzcMSDSZEbLuXL6BpBKTNAsZUKLJg",
  "key15": "q1ubxLLqzCFA4snHNLecv4RsnFJaZsWqwtBhADg6yXxQEAXDkcxccRZymcS8AcYjuNoCLEZ16meQVwew1jBNxg5",
  "key16": "4DiCCZ9n1K4KA5sNWSnd2NJHCF6Fn5yAzy8oVfzaP632GWted1JM2cac5Hj9JmCYyi66Y54w54MDHCrq1ymEGHZS",
  "key17": "2vdpvYrrsZEvCp4pkk18JpN7vuYPdW3CtDXA61mjjrMdo3bEBut6vm8JLt8m9AaesePJuD4P1NaVkiZTYYw2u77N",
  "key18": "2TJfG3aRn4CwD4EbPLhxdZz7oRt9xP5vAEpu2GncN8XeoWG2wTvpxid1x6PCwTCLLfw9DVChid3MEgk1VUKatgAc",
  "key19": "26wioL3H3RuLscKBhjAzmNb5cMMteNcJ9tqeWh3f4QWoMDYVu1ASCqbhKENi6q7HLZk9foSjdgBmjnJftSqbVSCX",
  "key20": "51Vsso2fNbJAgVjzbzGB5fEiG26JLXCXiYttxEoGUDvkcXUJ5cYb2M8Az9WEaSwVt2qhifbzKWheNta6hHgjYSCH",
  "key21": "3SVZtutobuMhz4w8xgeGugPMJwTbNdcs2o4fgG3yRC1EC2KYPCKmGscdDbUZo8X8QzSaFNtNkVaiVDR7ztUPYzR9",
  "key22": "4pVjZW2k2rCRvfW91sWESAn133F7J4JwnV8BUvV8MEp59G6K6uo3Ys9dPibCKF181GcPLX57pTs1YyU8ttqanCah",
  "key23": "2RnBjoy7YMdQda8yCcxVZvT1XFk6bwBtvsGrE7byxhRRNEWAuEHA1Cg3STchzJDUe4NpNCR3ZEDyhYFriWuLujzh",
  "key24": "22WquWZc3dKd8EGqVBJauMocaKemvZGRUiQ7HjjpqaWkAL1GnobSLMvK2rwdUq5wyBp1FyJAQNBRqrcQjTcBjB4r",
  "key25": "3PYX8hVok4NrgpK82RRv1pRiGhBwYXwJTaYJ62BnHa3VovgNFi5DDcAwD8pDamYMHYj65Cqijdmb6vQ2L3SzhFiv",
  "key26": "58Pd4dhGeZ6951D6L1sEQ69SzTg5AVPGq4SgJKbrrkMNkMvCSRT1Z9nd8rAthpEMhG5tthr4dtRPDPYQcb4m7ktf",
  "key27": "enq88bX2TBxWJVhuNEaibqHBzE3SyA4PFXDqLjVoBQmpPisaop1PD9RZXFmxtKekhXC2wc4xhYdez2PZ9bu97z8",
  "key28": "3XmVcPEbWgDBYXff4MqJpZaZJ9gyZFaNVjisZqpd8mHyNCSEJX3c3cfdtxMGZs1e1YzVq6PanJCQg9A4xAQxSy4B",
  "key29": "RQpJQkaWA71avvy3firN9ptrg36uCGwvpjirUkrkHVjQGDiKdKWjtTXJuYZ7o6QiWYPwqpAVXvCMDvWk1PoF17u",
  "key30": "45XXU1TnaV4SdM4YVtx8ZgnAT1sm4yEcKhwZ2G33q1qs9VgsBtU8Gihpio7YSKak7TbdoCSfhLsYtxZCLfaAX2ux"
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

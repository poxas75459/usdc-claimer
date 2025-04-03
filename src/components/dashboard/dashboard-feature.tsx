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
    "3zApTnGzFMnXtBbLyKcLXuLmXNExxp7E52QNg3QDcR6kqwG1PThMBeJiu93UzLcXP4TGBuN2SRRFTVgp9KTrfiGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iKvQF6DYCkZQt6hqZHvRZiV2sRtDQuYk3uDCquikr9SX31rv6xjGdkJxtgt7bwrcxXA5GNZQopu5sz7UeRTZckQ",
  "key1": "67Xjezx181sVWR6DkBQCkwYDLQtX9pXHarqepsyP9U3vRRV8AYvF8gmDntpXDc3Rp8baK9VDLGMRDqofbwvfh24y",
  "key2": "Av11cRefKMo1hU2iaBQNprkfJnSLK9yJo72QQu1Agf4mB4tJE1Dmztfig7EGz5FcYvfEtK7eecUzjQtmuNm2UVD",
  "key3": "2ZLtwKeqwZhCN3RKrVZ7EXfs8SsjF8ULqLGFMQcqg2Az1YGEuxR4CVzP97gCWRfPUveaSmbDFDr2mwE3k95PoRax",
  "key4": "5G7ix6qiNDhBG2mNRFPjCrnGUbTz84CVWn8SXugpqARvV9V3XZPkiRRrqGzHcQxeM1TQGUeygPPZtrPJA1GpDjiB",
  "key5": "4fzHniYcQ4xpbGrrPyU61JfdiXw9Ficnid1G3ZjSy9FthdRU5pg4teva5FeozBo1qtquuvzV8pJfyj1RwxuHNK9N",
  "key6": "4RtknEaTSLsZz4pzzevkcvsMFaocDg7DW74RadPragqYwSANx7Wy6vKvEU3nNXdK6z3Armn6wCTzetRrzBB4cTmU",
  "key7": "3ngGUx2iRt9TDso9AS6qf6kaJyQUpFtHai8f9iwx8WGHBt5Mt47eFBPEpVVYnKM4UZZcsHYex5LCQocaUB2rqgcj",
  "key8": "2WzLuBEPTpJHyCBTvGQzt2ZQfhvkF2Z5L4L6WM1XNm44hevhMX1WF3CiQFP7cr35zZrEubAG7bY9dZtAmbgMf3gp",
  "key9": "2oG7pFakfvZjyjvp1Tnb7aVHmtEQarJY4CWJecx8u2uE3vC5rHvbUffJ5ZZtA9HpmZqctvyw4acmcFBDsss9XHru",
  "key10": "2EpuNAqFej5zFh6xX4PVB1sh8YbKdpFgNrTEPq6JEk8ym64suw1jvDfEkpfoFQwg6qaa5Jf92Xg7WJDEgGMWkWAq",
  "key11": "3BZkGcQAzZGxwrRStpQRxxDkbwbY7Y4hK4aNYqYZtYQ3xqLXmug2khoibYQv3n2rx5zTsAgaxQnGAkXxtAAaJzui",
  "key12": "2r6J712rwgk4bqTdjdCmspfGzmbdJ53wVmbPpfKNZJdCEo2m9eu3NEC3yCf2nxhWd3s25uktamk3jj8ALvLbHqzS",
  "key13": "5dF1QZ6ruNjy9afL25MRxdb5RkCJ6i64VgG7CrzRiNS32Pfd7UZ9eWihjtgNYhuBWLiLNxJHfbDTr1FsyGS2AwjR",
  "key14": "2PtV5gMmoua9yvwopqmDL1iXyxgKD1AwJuGc63xTXQfweeuA3Nx1BAQX7fJNdBkV1Jd6kwjhmyDg4mFeni8pqw4y",
  "key15": "5wTMpCb1tsJVyCg9vcoj8i95Y4sq5PPGf8Z1s3a7BEQ7qX5NG45Bha5xzHSkpt1tQYJ3RwzMrGx61vzh9cMtxnyU",
  "key16": "5gcL2ENmFxN5aFbc7agNXPS5ekYaDkdQb9gtKDwNvVuKr21QC3TTyXuQa7t6YU8hCZGaNVPyRthnY4z9nkNRj8wV",
  "key17": "5576oC46fQ9ia1QgABsDvGZFN5dEgKMZLP8bUmJXhyeTZ5fZSH4FkiwCd7qfv5v47Mysg9Vz6ULZwf2Y7wST4AZz",
  "key18": "4AzPuPsbLFjCJRqvF1FFWgzF7oF4aUu24zq2Yj4UiF9Z3ApZhXjtfqyN4RE2qPHr5ouBGmZ6isw8ENgF6haWLEyZ",
  "key19": "65mLGG61DcjGVjQWcVf6zuhpJfZSktnsz3ytEK8iazn7RdoUjmFab9xVR2FVDPHuNUzBe24qAXMYZJgeFJMG631U",
  "key20": "3ZzzyxwBF2GS1noCJr6rT5AHP1DgcMGTZjK7pmh3ysDLM7PqjV2CY1SDikirLsqfee8EmaeACNeLhjorTWFqzhuH",
  "key21": "2GTkSLcnz8g8WawjMDkaoVFDR7fnQt1Ch4598qYLXAMYCHVuNtjQUT899q1nYGgLaBQ3ogrwcZ5M67FM3ZuVh5aB",
  "key22": "Mzjp5Jy9NDs4bCyJVRX4qsv66QFXCWRX6LFYPVxyHJ59gCankokRjiJS2yTkzTbdBvCsLNBcksJQcVPXipWtA7R",
  "key23": "3Dq8MWPdxFr1QQmqkBWTgsvoSse4CRZps6cKyNAWvVFyjhJ9mQDfi2xhz85YYwR1fUSEcQAjmELYvzytmEKKD6zD",
  "key24": "4sEgpxcEfFyjMgnedL7WACL2C1wLW2ooGTg21pMQtxHqD7NFdKCFcYszz9viKegkwF96z455ihdMuS2NGRuBQBvY",
  "key25": "4Cjz8oMMBFcPX4SwdrFvQhMCaLitT5jSAPA1Ebunk34ctRSYy4Servgrg3p16ateM3LQtCMA4MLGHCmtZ2MmzJv2",
  "key26": "Y5VJLFAX2m6YRL9KUsUr8K8fxx5Yi5gHKCi8HQHG62BrmCxMJwQ7zC2pYiJiRWc1vaMtBsZyHHrz5ZXbGGYHF2q",
  "key27": "45gD1WBkxA66uYp6jazviLddV8rSBt9PSsCSajsSJfL9wbKxdN14yN11aYoW1CYEmoHG4hjwo3jEimJNQr3AiRCY",
  "key28": "RP6EpoRwzzLxS7TPAJVajEYSegjr6DnZrRDXJPasRM66q5thhab6N4CyENDfCGZVo7K3pJ2s8UzKNNeg2qjgJqh"
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

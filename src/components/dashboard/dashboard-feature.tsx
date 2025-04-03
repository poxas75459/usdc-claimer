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
    "4y2Jcbdr7U7U3GiU8KaazNPTsw8nmz4uQBrddEBSHtDu2cLaaxDP96UxHc6odzXW9afBjtkgwFoXCJti9593NjJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JP79naQ4NBkumGwrGtoH6wSn86hPycMDQWREAmKdgEoypVnjn3qExWbsmLL3TgtrqMh1cbb2RNrdfFSUSsA87v9",
  "key1": "5kzvE3Biy8qYMWeue2Tw4qE3hYH3V9m8PCrkUoNhrhwv3hrjawxeY5kDVQe2kyxjaCPSUfRhHCNAGWCQXoXpf5gC",
  "key2": "4kFEfiexL6eQj9btA4EqntW3ykSAwLaiFAfLZS9f5B9RqZZ3QVxXv7P1FfwnV1tT1tjRzSpCgfEySgYUCtrkvGra",
  "key3": "25k6wGYcNk4ste5d2YGB7XvtCPhweWJ5JbZ2q5UqMpCopJ5WjCjySzgNvkYoDtAzC64StJ1461ixzYq4FBTpyWUs",
  "key4": "3nSvhTGyfq4nyMn3LhHuQCNRnA1tCAmzVTBoP7hdtCLWV6xDDEk79GV6j19S6es8rrKZbzMF46Qf7fBn6wnuAoTt",
  "key5": "WymmvZyw66YrREPmVtYpkLyEynguiHNxHERUW1qQwQa5aYQTiUmu9s3PspsNeb14oDfc18M76oB3jTCBahD46sr",
  "key6": "43DFSQ8no15gYzo8FnuiDWkKC6DvtqUMv9SUPXJ6G7qptRPpywbLxb5uPf6rF8TU3ZTUaqKS9VdGgkon3UxCRqaK",
  "key7": "5QXzE38bYLRCYVHU7ruaH9c13J56oEyeetQTFmtHShZrvt1TTyf8JTqXyNH3m1moqDaPSrgZeUMG3wZTcTYVsXsR",
  "key8": "3RLrkufaJXXPVwBKMuZYxprLzgddwDd1h7gByegfL8fqfCQ8Qkv5DP2Jef3gZaky9jeJRPsgPTAR9Bvjh6cE1EPy",
  "key9": "KEUAYR8GuySvBuquCmwzT19VfG8Eudto5pP6WgsJDon96oK89gEeYjcqHiX7qp8dzcayNJ2uZ3oJU1atXjYuLd9",
  "key10": "2KTrkz3jyKCMbc1ZfFnVVkip9bSZhoP6LZw7SsreLBBH8Le9HebnJXs82NfUeAx27hkdHP1F2zdQKyNa8sLRRZzX",
  "key11": "62kvbKvZwLYQVroeMmM4uZvxQqsrffwWHXTWWoswjdpttoNxHQuJohP155ok24VjdP99exy3nKZR7CdnYScJk7px",
  "key12": "zhiPj3FGkjGwDYYhh3AodV5yghQ6LBRFfeHqux8g2rNg3GdKHoLp1J3BWW5CRGoLv9JvpEqxAAxwkNmSkyM6a4J",
  "key13": "5UpuK7rTd2cvX7qMymMGJwTYKc8wkXEaMbcut7ZkTvh1dA7NJbTHwotWhgAVky8CnSva3tKs7B2HzwPfDe3b2LVA",
  "key14": "vQ6CWsBmGCQTkKjaBp5JLKAFcFwvGmnnXwQLv1bH3CyxN7mGKicP1PjV83H2GdQB6nMe8ab5JGMGsM621TMgy3n",
  "key15": "TwRYg4LYgk8eTm2nN1HoFd2dmB2V31qbZNh3RQzfqQQH4jX6kmbRtKgkxc4uLmKfZiWTcCNMWPe6eXv6jXyJbus",
  "key16": "25ZLGVnsroyJQqQZWdSjUAA6JkM2Bk4ManNxLmxfJNyQqvmMsa4vdqF6xGCG7xgjJw5CtGvXMzASw1uTf4NaXADt",
  "key17": "5T7kZVMTnSdYKbkPzcmsGhS2dVdJ4eXbkEhEVBr9sCKZgo1raysTrs2QjzunzEkKvctuhkXEGMNcMTTuBvLykmj7",
  "key18": "5q6T5p2W59V3agXnZbC9yMwdS289x96Rn2fxv5VZVmkTwnEGLnV8h5gPtH2z3uU5RGZGWeWFdsvBdUkwWLrBpLh8",
  "key19": "4zZxD5m8xRR65K7qCEw6MxzFYzkPakvDpbu35FUv4V5rERgeqTMftejSp55ff2J54cAC769qXcwmjaW9BESfznnt",
  "key20": "2w8EbjbNVcCgP4Gb1H2QqGcLDDSCUMeg9N493CGqeawRUhX4541TLFfX9Z9C5FatLbdfEZr3uRtpwzxWYSJsQyFp",
  "key21": "gNejCJkfpD2Y4MxcCfSD4Vz3igoa3sHFJNbAZqtsiraoAMmMromcibwmodG8SKZ54k57sGkUQFWn2ze83XchFFP",
  "key22": "2p49R1reA2nT8AUuEpZtJzcSziqcwke7HGeViyXXaeHWiMAFAgetDhghmcod9JgMznuaQjE7ZPeg2V4vas9j3s7w",
  "key23": "paD29uoghrFsdJQ9fkqErAkWbvCrM1PHJ9RNNC4TWgsEFBfqTb6CVrMMojaSx8AvpJiyk7XBuEPQEvbW3Ap6jyw",
  "key24": "eQkGWjAjbtjN1mPbDadtApVTQfEffYdqJ8kxAyeT1pGMBmrdmMk3JaKxfUQqpJvLT6jZZESbfddhgb5f7JN2Kzu",
  "key25": "3GhpMraPa5gU4SY4JtjbyoLGDMGZFirDPAxdBDxZrPBoTXU6RMZFX2evpTdHzubQ6sRCoz7DrXooQ6MFv4iRLWDu",
  "key26": "2zTMBFTa2H76vbveqw6VZY7nBV1syrmniyXVPgEEdZQ4hjxDbGUUmM9nfe629ZAxMFKLKGRbxF4TD3NyiTa7RHvc",
  "key27": "KcYpDgjxzjSHHp1ZjMFtDRaS7xUKjJr6mc8xR1RocYbFgBSMVCJgwxxi67c7MVtdGg99Y9rZwuDevnMd1st7h8x",
  "key28": "5FMfjD17HYwJDSRFnndddg12W1ySaTnR8X7Q1rppRZVkYta7zbdZJRfdm7iUeVY2Du33RYbEnNfgPaNqo7K7xVKh"
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

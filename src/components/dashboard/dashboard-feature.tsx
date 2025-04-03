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
    "3FnDibA2ta9wowsBbWpcZ7Z2yXLH9qTVjhYPuNWkr5xuVL45RqxSiLU5eBeaCWJAXQVQbnZ9xhi6ZzLCc1Fiotpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SixY1U6G5ANGqdKZn6qeCHpchjPycDy9Cjoc5Jff9xz8qv9H27yqvmX9WynnX3EkZGR2cVRWDUko7sHrXBBpKtv",
  "key1": "6jDEC3w4iU9Qjw4nvFM5iURNdWxXVR3NqZBGKQbQiFXXENKDszcSrThowHeUE2j4Ls9VYNiEq8aNsZiefe9ENQw",
  "key2": "3BbxM5irckXNXUNuiGmUkaRowQusfHP2mwxASUoLbg6j7V1vpGvWEhmr8TL2XvUc4DdrqYfyaQRooSpopLBJ3zew",
  "key3": "3ncAdFmJzCUNRaqjq1BJ3HujhxjA8MaJJ5Yjx9oZmLmwk5jPdyxJPtdEMUE9yGVHuKi3bHM8s3iaqQzHmDgqgppY",
  "key4": "M2VroR53Nbek3CH5nNpVrcKTWA6Ff4Hz4k8h2iLW9ACWLohjrd9FfBp9MWENEWknzqu53RWerSCExTTq5Y8x2za",
  "key5": "8PUK9atgEMwsLGWuNryo7Vvn8PQJNg1Em22ZvCvDewptNRisEDBrRHjFCQ9Kw4yGe5zgyHxkpBbPPFFWHvUztr1",
  "key6": "58jTV3o75M1r74zDbaKD2uXKKor5hNH5V7fJA1kMNLMtZFFv5PMrumv1XdP77UHLyFVwH6ZwbyTy4rXJfyEm1ssv",
  "key7": "4mDRJ8s2B8oZJzpyhj8wqBa7GgSzZXjfeSw7RcLCQwNyB5Yc7UB6ahBjnFScqQ1Aq6hkrs3hC8aFmAkbL6NDoSA5",
  "key8": "49bzg2xt8zM6uHXTDGUKNwcApGJYxqvE7sUYQxokqw3YmMRfdf1k98xnjeN89NJZTAkc6CxW47qv2E9XWUsij8bK",
  "key9": "5hVGua1JoLJs5rkFhhfrBjSz6Nix5rCrgMGGwEQfxs7nUysq15Jt6iEtqTuYEGbZ6aqte2wJaGCvsy4es337T5nL",
  "key10": "4B3KEqpGcRNp2o14Tk374ht5bL3Gw8TykZVniZP2y41jL8E131mBeuRhfBQPXtJTa37CMnNUn65zKWSQ7K9GSMta",
  "key11": "4asXmzS6C9q91P8VfzRFFiL1hWMUB4UK2P53Wd97LBcAZGGMv732JuRwmnqbyQZxcdXCd8aaSUAi1Cod3cJsbkq1",
  "key12": "5z7B9ppgpU9wUbE2VLuKcsNSMAjCtU6BAby8r4BCEcj8yxNohpuMRgu9hqjDiwk1ZfWJBeDjG1cFyACYq4burDNH",
  "key13": "6Zycc8Z4Wf4qLHAWQfWMGupPS1ow5oLP2AqgtXapHBU9JfSsicrddAQQX1gDEVGqjNWM1NYjcnx32mL9EXxUFqH",
  "key14": "3og46vAiPqWhmSmCMDf7U4wLnsa4i7sSdD4dTGwFoaWBBf1y3pdS29fdxqSCmbnQzEhzpL5RgoqRbkPYcsZJx8Dc",
  "key15": "2HNT3vjs5rGLkJp85Ukji28DejEXN34GNbKUsUg7n7LVHKMXRptjf41bFA1cjwGnFTpRMPfoZDdycCwtMJQykcBu",
  "key16": "2LBk1ibDi2CeLZvcbVByhDmRGopg7H1nYVPN7xa4fcTkHA4j6Xgx9RhrWGBcvdcZif8dNYP8t7ovs4LFufeWXLFi",
  "key17": "tarTk8nn25iwXf3RLPnSYuoxd7amvWKQ9rBroLWFipeRWa9AsXdVsbibDecsL6J6SHJJq5kvnZfevwkETCTULcX",
  "key18": "Fb9VwsK4sUArkRrVM7NJYA6fZB1wx7mXjsUNgu7KD4vCbe67BqinFC39K1tJ2d8RCcdYEEUpKAjxvehMCpzon5r",
  "key19": "3mV2nCq8PLft28yMFRUkEx2ETPMnNLvGxFpSQnqDvSceYGShETrnh5JBBUTkz3LgMzj1kXVxN5ujGXhDArVwdJuN",
  "key20": "2QCds6yjA8y7V4pCL8D19izKMDvtC24j7hH3y3BpzJssbkzva336H5jVRvRXW8YSqUqXxjuAcmFtEteXiUGCYsBX",
  "key21": "2NisgJ6GARCKxWLtksjo9NEsBfe6SiJVYmRWY3x48vKLXJF2cHY9uUdmbQ2W2FkQ3WrS7ZXMfjkNSayTTsDiY9hY",
  "key22": "5UeK5hj33GscFWDmmFUDpyqRQUTJJZFZLSZn7fDbJmAvysEGedbmN2SxkLkXDBq67iVXTqyHHiYDRXG2e6VypnTL",
  "key23": "M6h44FAUs3hxh1HhvEak5PctsqNH6yvusc3ed2UTQSoSPRiNPWwJyT2oZS76vmiDwhskzvuPUnv7eVxJWyqRqkG",
  "key24": "65fS41qegPXNSeX42mBxTHktvFEEv7spFgH11UeGuj1RcRkaa3PVEVSL8ZxWSC9mrVErsYZzk8tTQmy3BNSiCgaM",
  "key25": "57oMavMJyMLAxuc4E5eyyMx5eZs7pUZTGeA97i6eHgtqrZBzB6irj6PasSkFAtf6x66AVZsbE8GbXJujYtUAbPse",
  "key26": "3YGGseAkai52MpPhc9CYVuwEu5srgNeGwX9Quvkd2iC1FHXFA7HuezmJDDEUvaVEqQN7dQ1n3bXMWtAqMknpnoFC",
  "key27": "xg8UnqCTazFCZZtD29HResEs7ZRCUFgWrQoZ88Pvie1wak38EnfYPVBVW4o5XPsqxNUdVBEn7sMai9xUjGH2DA6",
  "key28": "3HeMLsUmgvHBuX2939HQnJLLw7AcXsByLxEdqA8PV4qGz5WbDhrRgVSFi7529LctdrgFYZWGGxX4bVkxb3ZYtrj9",
  "key29": "4FvwKocrAKbXAbRdHSMViqwARrYFbCe1P8DhtP9YehytXhLtChRE6sHwCrfSaSDyceR3V9X9Nw3gBtKDrfkmbGE4",
  "key30": "4KnyaDMWX21ypkWapcUtEZyBxP1dFpgUg7x7FsdtcN45vjbn51sKyLh13f5J1j6AB9574pum4s7YEoGcfrDHtbvT",
  "key31": "36xFihPebSkCo8iXEwHdJBqA12vNE6QcYEdf3khERvvh7gPxgtVe23A4Jaw6jXufEVU1fEkPjcDpcrVvjdbq5SDj",
  "key32": "5NMZicfbvyCo63JwVXcJUoysQSsiD3XW7sviqBxxztSfpRpXJF22aLnTYDFzq6kSEvWfygiFv1JuRu9wXvfZLZ4i"
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

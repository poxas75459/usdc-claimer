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
    "4XF141QCrqLvoqm1AJJwasAdbthrdEt37hHdNhXthqHwaUnTPhXG1gXLCUiF4myWuwH39dyNLepDMKjoWBrkrKBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eVueyatj96ioHyUsSbSxPxw5Ng6TT4xUZvD1P73RUYW3iZEyzbYq2baGFFdDmKe2HSUVqmxv7MxA7wL7zxpMZz",
  "key1": "4qx82cLNQk7a1ZHJJwRcqyCiXBP8Lv6GPmkHXuSFkT25Ud6drJgpWKVFjGiCzxdkWUp7feGAWMPy1YWSy7EfYRBC",
  "key2": "g8esfECGDSX6xs5hV1AAt7brUzVx4WyZv3MRShYWKa6kJQeEw7EtfgrLCvbu4xsqvDbwh8LMi2DXComrzP4Emd7",
  "key3": "4ea6eCxU1ayT7m3uqDoNvgrYHK8ZY9TfRi4VeVFs8Y9vGq7MnDZTQQxBtvGWsFg3dRyduGFEwkr4VZg1uiK9Bpeb",
  "key4": "2gftLZ8LccK6sZmn8tUSKKRSDCyw45GTb5hQeQKtE4pQnA2goPbRn5cxfFqJ6FfPoAzpXVwKzcKqgPsbgtab5nKX",
  "key5": "xYNdBJepNX8wVu72fQ3UBiMhm6qj8bbwPCyC8gWCJQRHdHu2sfPa54anvr6pfqSGzHh7egvjZatziWvAn4hLniX",
  "key6": "4xJazc8eurfXwVskvfx5iwGLTsCbSvpvzv9YtEadcqZ3KGpQLv7wDYvRF7g9mk2AogSDwn518JrwVKeWz6pbLWzq",
  "key7": "2WuNsj84omZ6YUC5bbDibeyrh5vVhFZqj1NPPUkqWgtjcetUuJNGcQQfMJenhWsdGKqSkr1eAWkZqgjfWaHuv96Q",
  "key8": "2JBKgyGaBzNmwkC4u5E48tjyZdF1m1ab4THLYYeTuYYWrTAFe9nFEjHS8tWquAzgQA7ZzWmYQkzhnZ5gUbr9VwkJ",
  "key9": "53FvhJTpKQSRFRwnBLHhg6H8MQ7PM15qWb6UwvEogDEE8prTXe96pvYb8brXCHT6y8okYtGhEeLvhTrZSveTyNrv",
  "key10": "4VUGUjrj6gZavk1RxQbUa15bdqfTwpf54Qi4XgxRQ8gvNAPtHvd6TgfPEudnsfcNYUCJuFthDdH4UCU5xo6ifyWm",
  "key11": "HaXQozXswLLkLmoDeir5vfnUrp97LUko4dM2uEYQMEM7QcyC5RC447cMdRP53U9fjJyMWPA4QdRNnRXNtDBkyFP",
  "key12": "3HGoV6uHaguckGaUTT2bweW7SG754BjRNbkjbD1A8PSvCssgf11K9YyFMxayw7wgbYLAxkbAhn47UxX7unddRQ5e",
  "key13": "4uxALzLZN4E8Dj416w7uHfwmHcWq9w9YyL3WM4imd1t5yTneB2aw5Ae7Q3zc16q9BuuFk1LnednGPzMWfAcWhWH3",
  "key14": "i7rmq1AdttSh9rYLne9kiD6fFxAped95K5VCAuYEk4e7HKxJKAUy1WN3FBgnqNJQ9KhXoMfQrD6yFdxmFCLceZa",
  "key15": "BaVeKQxw7K4nq7XXiXDJsj94adYndmSWjFoEqJyU4ZsDi4A1ehzGfRqLZEfFiSgHi1htSUt3vRSN1QddR17k4KL",
  "key16": "5Kp4dKoNkX38t3iQ7fB1BHfYXc1kFjwK7FQX2mbmbhfH3J6ECp654K27Dhmoo4suuE6oyoTzaFXc6a8Zej58Yk7j",
  "key17": "2VtKCqbzgLPhU9PYatb6GWkvxR2ucTrvFFnZqTDtFL7WLcWDHX2JrfaewUmAL3TyLqSzC7rXK3X8z78MFvudWUZe",
  "key18": "2jkvtCXWw7yhapBKQgC6rcpt1W8Ae2ENJ14ka1uSx8p4txZ4CBHEYezyv413AZQ6RpepK17Hyic9za32stAtWJA5",
  "key19": "4biRXruMxsWumWBcyMmtkocMDH4uckAvXLUdB4stfgK2fM6P2uFjVVUt9ZtFpQ3h7UNbKhYyQrdsLeXDUaurMdbF",
  "key20": "5HwUcpdaU4YB1G5Xj6C8Si13DUPJR1yodTudMHAahwTfdnHSwxTZ18PCsfQ7JotnLjVBzp1Y295HUg1f1eCP9sSJ",
  "key21": "GqGSVPgKx9MWPHuWuMfUZeqCikeiMJ3xG2483VvBpo3TxN8VW8ZxBDpSbQZAB3oZeENqrWNotYU8nz1YRMBECyW",
  "key22": "2aAtJMpdpAE7aVCD3rBsuHaC49G4RZaqYzy9gx4tbJu3r8n6Hh4TLJLYE914WkpEKEfAbsc9forPRoip9Wq3biVB",
  "key23": "5gDqVf9VpyQEbaYPxFEDjnNedEUmjkodhAXiHNLUfp6Btj2ssb6Mc2Wngp3aMapqCdHcNWSUKENRkBwDRBhxmwte",
  "key24": "aKNQVZSQwrETDCWBzrjrJ18A5pA24x6ZFgwxStnoVYx3BJv81JzRxmsiV16wMdk7dvn2VEDFkXTXA4t7vQUjEE6",
  "key25": "5WzGWMQGEv3Ep4YKXD9p76tgP7D2ifiYxc1NtjekGxxz9KSs2JrDbC7Ea3yJdrJ8GyRqVasymv9v9u5PjeRHd7iX",
  "key26": "5oWLN5Qw6J3wPoMDQYmW63buwXpjAbQiShxKYR4gFWFTc5jzChB7eQgafTqD1EoDW5kR49mpNwpnzDdfkzcDJN1A",
  "key27": "4LDqFaBu6SwocFgysvjewJA1zUMzd2JbWiuNspJRd51yu64mGhuLJVXfeYGKRCb4o3Et2dcf9qekBVvJPFveLZVp",
  "key28": "31KFrMZJ6wGAcCsyQFbKzUmDtQePbrVB5arc5ftgur1tj424XJSqE6FRYMMBmB6QKheQH1k6nAZhQSif1oqFaAVf",
  "key29": "5YwP1TMHnazpdsLwDrgy86XTqW6TdUFbP2vWLqwnDK7rSUPbyziSVerT5zLJtpATWRieHxyUMjJ13PcidKkMpCsC",
  "key30": "3HefHWvkwz8R6sZKmNBAFgzQnRMA2vwPpPu6Ceaj5on2euJnrWzw61MWoQm3Ub6zXeWBHhbBNDriobXX5vs8MieM",
  "key31": "ZyRExR8tB82oAKtHGbS5h5ELirVhKGYweLtJPQu4WJzLCV2vdfZBbGEVvM9LKpHNjd8noqsa6suWfFtz8wod7wY",
  "key32": "26PNUE3hCpRh6nURWFRD9hPiezzM16kQ3y5VXPNqS4bCB72NkjnURsnDpFEyVKF2nBu7zZQqsTSCFmHovZHGBjXE",
  "key33": "4tx2V7yaUBe8aieWGMwmBigx8eXAGWoBhuwu3tXihFMz9ozhVSHKBcgdBmMUmXHJPmM5MUb7WE4gQTexb3nteYi9"
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

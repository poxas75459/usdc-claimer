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
    "3wRkEnES1z7BE2NLAvk3Bt1voLy5zLQpCCbsmRyeWkbFnDXARF2kgNVQUVid6cYV4xGUtjj37bbRSivFx6Y5oVQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwKGnGxVkmbtB9tQUhHQzweVPRj3ytV9ZbrrCGJpQ9AHE2qDxNyKoAogQbBnfvmAvfDKWDvsxyEUGtHh85aaok3",
  "key1": "53bbGbJBMN17coZnidrYtBYqJpfPjWpdqTf4ZpSRmey2CzAezzY5zDZ9uPVmjCizzCUHfzAurb22n8v9PMxD9hi",
  "key2": "2wrRX2YHkp4yoK2e4pTUvr7mTX6XhgGQ3MtPWgZw9Kp8PeTk76hpBBwcx5kF4hv6BNR3MPb33n6dsEsjAdnRCufN",
  "key3": "56Mw7XtdbLxRwkuxS9Fw1587jUAiKQtVsjuoVzuJsdFcYT3UtqSR8xr6ssnmQNQVd7cFHgx69nzc3Hbr5jLhcg9u",
  "key4": "4VKgLedE5xGo9NuW4AuHue3HCA5PoyrFcMciEbgNmTaQoN6Ro8RLymaYK1dADSDpvm4rdwZRYVK3uqLSKa6XtoGQ",
  "key5": "2shqzDdwaxvzFS6BZeQ788amZjjUioRNZHGtQmuSZdr1BWH1JSXm9Q4e79E2LrtUCx5JGxG58yMVyN5PdbfQdq5f",
  "key6": "5xqGoSbyta5exAnWKEY7HZ1ssrowUBNMTFLtyUJxxe2A1Kqw8DZE4CuwDYnDjZtS6u2AC2GpZo75H3XK378SDj9q",
  "key7": "NKp8anz7AvWpRv4oot3CZ4yH6Fu9GcXVRZ11uc3Vv8HMwSTkmwKUWujkfLSbaFMaNUdSV64mK5gtRcHfL8HXAWs",
  "key8": "4RH3o4ZJENSZnM56E85dviHsjxwLufwUN6wXwsodWFCz5rxm3D2riukQAV62TUnZ6b8LpfNSPpJMVCDbRikj7ZRc",
  "key9": "4p4y4wvTsqQmnRyK5Bn3HHKCAvfjKFEC3m1SvUCBHwv3i6L6moEgqscH1EVADxCfvtuAJ555Jw5AdaKc4VzM4wKS",
  "key10": "5e6NwP5sf52CnExcQpZfqwdTLMtAmnwQHQWpMzgEFFpqMg9koBZNwQfeaUwyqoLu1nctRkExgKDfAtrh83XdeGGg",
  "key11": "4yyrtJeeRavNXxDum82J9NaQEiQEGEb3L62PbQDof32QzqMMmqk8T2MPuBjBGngB8YeiYEQ4StpRnJDbnurmk8Uf",
  "key12": "4mhWVG7NLFiyhhv5ZpQunWz6Baokg98dRDVCBBduzChLatRL1qXhw7rirvtjkYWuzbrrPaLCQ4R4YDL2wfn5SNY6",
  "key13": "2k2NqHiBdb4TcLADWmNZ1k8nhHGyCLpcLYRTuVkaQyyN91mgK4suymCm3jntqoAtBsiYnJgZqqNGCtDugWbue4U7",
  "key14": "3sYAXD1bdTij7SJ7eFEgz3TiZHaMXtSuHF1vEfd7sxR7rdLCHD8mWDWGxDarxJh6ERgPxApw8GpvETgBSac9xeZb",
  "key15": "5e9eeHmrTC94cKZRgcN1sF9Z3UAntBTzKBTPaVCSXjoCGTNLKVXQG5BSo2aExe5wHnLFtApbHAsM7MBXFdVNhjfK",
  "key16": "PAr1HoUwm9Y9zUFNY8zwpWm1Yon7e6KFGqTryCoey98ts6VS4i9qMRngpbiTQnVgr9WcYcuaxyaXURY9jRKhwSy",
  "key17": "4fvkMDeBnpuXdyA1WrrRsaXnEvbimwBbT81UfMcs6pT5CeARSY7YSSjS1urxS7LvCZ3vM2zyfm5XcMwp1NjohWs3",
  "key18": "4buAG3QsbGL9WRXjkpEqzVmQRHkioP7ecJ7JCDgGzTbyHuhHQpVFhstT5SSPX84ghDokN7utGT8PduZML1MNyyjX",
  "key19": "3q27jsQfXD3afoBhmpZ6KfL8RKrwu33pekCreqtj7u6TPtqzSPt171iTLw3iyN4Y3wEQtBihJy4BKwdexneJoGgx",
  "key20": "66sYrwpbtUVacvtvZSiMqjVnpsRRTpnZXHM9W4A4jeorxj4TWBexJzxVZ4JDbdZ1pECytBixcujcuNH6oUvPrx9J",
  "key21": "4SXqVVjdTZjXWTNxdJZ3CQGs7KNPhrhkqer5i96y5JU1Ps3yPw5sMGBzDWg9LUba5WR7nJQoprYVzg3Je7Kfb7xL",
  "key22": "5hUdGG4NTB8wEfPxog5bedJ8Uoa18QHCuJytXGTWvBQfNnoqw7S8sjuSQJDPKQK5KkWJQ5CaFo71bLDMEytMxhFS",
  "key23": "4aHxatWL1iS2icoMVr6UMNTQUTZkkuYUagjw8Cbz5q2y7dU8N7hd5WBtNqbw8qaNixyCZJUd33DQBYVWndgonDvw",
  "key24": "5PMvxNeyBFy9PCWESQCJPZESTeqTBEmZiryYSxHCqePJusSDc9VKsSkyCidvJg3YQCkUEpeqJfhF6MtKFRjMHutu",
  "key25": "36G5Aka1GuyVtnYt8CHqRqUnKtuyr2tMDekP2ZFHAorwv3i51zA78BMKfLKKzyeG2Sr1642aQzVmbZWyfszP1nyc",
  "key26": "JyRQNTgDv2sdw691m69RPbqcftion9kth7fgpzTUWkLBQHUz2s6sayMqBYwzEmndbpgr4931wwfqJ9eq5V6E9Lr",
  "key27": "1ydpJjpSL3WBJhoCNDJQv6pM7L2KrqyKSbyHYJJ4aemWRwgWPc6JTZaTbFn5fZS6oLkdCKxBt3zi1gwCiEJywtz"
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

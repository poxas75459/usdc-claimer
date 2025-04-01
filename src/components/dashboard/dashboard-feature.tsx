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
    "2dLAnPCkm3sD5XpQxR4MYhGs5VQwBemFkrT6AjWz7CSHkzZwR8vxruevybC8qhnKxZxDQ8wxgrZCxYb3oz5CcWhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyFfeAXQe9LisnFcNjfxK5ZQpskP1G4z8JuntQFPn4ev4iXhEgif8YnVh6Sk1gXPhsp2W9fTSLCarXUwXY2vwhc",
  "key1": "TsF3e2DPD3ZBanF3nK9K1y6Z9BdzXZipXvcoBvX3QRPFdNsXFgG9prJd3c4kMtFmbSxQZ1F4C9wg795yPoJRAFa",
  "key2": "3EX39Rs9oukXZsDkGe84ixUQPNyrCD9yw4iHKXTUGtAD2t1TfseDRK4YeYYPjeVAFp9z8HXpf72nUgNLEE6YWY26",
  "key3": "2bgfKp5e23LtTGYjmuACE1b8SLadcMWM47UKBJ5BeW38PS2zyK8ZrmgtVSL1gmAQXKSs17cBB9jNFFQHi3TnjWXH",
  "key4": "5UXoaJPFQVdynf5LFisfsVsX1d6PxVuoAm4nVg786YhXxhsM6Zk58G7BKFEMpcud56jn7Ebj8EVUVvn95LzxK4qe",
  "key5": "5QQEHYULYFMUpg1WnaAu1E6dNaWSnhMdH4Up9jjyxF3qYDfoAz8UpKg1n6AqGATRhunxLtoTwyEnwF6aGHzkHcks",
  "key6": "3EzZWY52gZaP3MrrUGD9WBE9M8dLtGAW2PRq1mNKc8e7gi7MNMaEzRRDb4cRnJQZhVnMxw6H5PFdzDcXmcDvCdyB",
  "key7": "4Lzv2GpgWptv8RgpAH2ZockLGVpvmYu6PjYA6GHAFDZD8X4QfdNA2y3qwGsZaNpGFVYmtfhsJWPDzV6KusjRZ4Hz",
  "key8": "4rpiLt8E7gj8wAbfmLq14vFPeMP5suqzynt4nXoq84PBg3HP2nUir2puguYrM96gbcyxwbtxau6GxZVYiH9b2fco",
  "key9": "KvSCMThsMSaC4VaqivRWqBkBY8fbwBcpJEj7HXg6LnndbnAdgqZFQkASU8MWkTZK7eYqdXz3MbmpcqVYN4WtPeZ",
  "key10": "5ExYXRjwHxwQRnm5eDjnXUDSPi4YsQcUxbr3ZXRJdfvtQ2nf3GwDhUshzvJswcW9abahdyAs6s4Qmt2zW5unsuHK",
  "key11": "2cD2cmaA6EZCULYSqwtH8vaVEHv5FSWTV4hfxZNHG5YJMnbs2MGnh8GfwKzEThn5YYTXonfRXqEYo8uLzwdCmDJ4",
  "key12": "2xB4evNk4ME4QNzQzDULpzRApqoe7C6cWA1fnPpcGaDzoqrVcWmvSju6FygzMpY1u86PvazNh6xnyaqnv1q2HBx9",
  "key13": "44zuvmg9183jXLKeYrQTG3SjP6wEb8s1spRQfyuga4e6jtgPeZRxyHjcVsCKR1VoKaqERWAWSJWxPZfNrrYh6eyL",
  "key14": "5bBWVuiCYPzFd18m4DbZuro7HzfHCxT1MqNULwUG5jMcpQa8XVjt46NzMcgnRjCUZyrSiXtasVAeQuu481TnZpkE",
  "key15": "5aP9MiCCfkAkLponPRekz6w9qbddrbHbhbNTjYSXJvoabHiW4p593kviMr72MxzH3MAaX8xEHK9APrYWkNphjL78",
  "key16": "64z1xD5xoxqjGAr3f7dmbKb1HnZWkG7a9t6gLJmxRFCjKhjeyh9K5VQXjLUi7rv4MAPo3pCeHXtbSZEq2Fm8GcKJ",
  "key17": "648PN7nM7sE2pZxhjiSTh3K9HdFrED9jUSuZhNyFap8Ck5WNmD4Cj4htiUm8D6P32n5gfc2ZhvvAjFzzkPG1brAi",
  "key18": "4STotpaiKMNdU4uxwkHZf1NyPUWTnSGqtCCrpJmMSqgYNEyHt6uCGanfmmwqW84zw5PSacgvgsnFwezFNZ3K18A6",
  "key19": "2ETeTJhXwawbLQDDbmMKFH2ehAAgULbxpJnnVVNDQ4WkmqhDEfagJtHzFGQvJwCxtXcenfufJrWeurbRcmxh6heU",
  "key20": "pAQMoUBqWmimZ9vZJu5zeqRMw1xstcD7JpjXt8DsWieFsoPYawN8kbz89XNNhf76bdgEW2zSDLmHbKJUfhYxNQz",
  "key21": "zDu8TEqze2RKHfVRhpBTd5TwYucGFgSFinQkEwDnzZ82MVMeC6p6kdpsGKma35BJBisTAHCKUVMAxZzGEySz7kg",
  "key22": "2sgXz1KYo9P69oGhG3FVfKzwpZoVEfcSnhxwe8vAMRLQRpNsA7QSACZ1HYDNHmAp9AJuQc4syMDpV29JoJT5i4S6",
  "key23": "4CTjyc4EXYUuXA1yCHWa9M3kdnY7mP4QhHbshJmPWwVPuYS5v72UnTxvzemPh2eeFXCV7bLpGjf2BstbaazMgGBT",
  "key24": "2pN3ReFCHnaG9rmf2jpZ4NkQEKi51Zue7KMvEb4PKYhrUwBiHxMBnCeuwwYebu3WiBqEFjsU5tLUBPbVX54WQKC9",
  "key25": "67knZ4JPkZ1sfSVnRRbFnhgZTXE2qUKmJ4tP6TN2rwAxukt5K9o1sVSKMuKTr9YHHuwTS4y5yjrC8WXEUdpgPgX4",
  "key26": "61ixUfgyum6DVYXhKHbqePQXRt14FC7Hq4E8eXgkJYMYpsxkPVx6xfThjnBzBWriFwmQHfkXU8FWE2egY1Z7fV5P",
  "key27": "4FHjWW7t66EisXjBC8HV6UYvHNQfXazrUbHpDm4VjZuqoPq2v3hdGMvsGrmyo11w7HjpPNNZChiBYWFf6b1i7vj8",
  "key28": "3LVVqYrtH9YgKAGMn4EBbx8tn8YCTACihYrWyStenbn2wsGzjayA7NJL6PtNy7ywoypGKXdFuD5KbHBedwXXzRiy",
  "key29": "sTd7fsNo3z3tSWUWCN5Ha3t154C3NgJK2E3v4Dq6NCtfLqLtd8AcnVLqqRbzQ9ygV3sZk99gvFyPaz4ZDccnRD5",
  "key30": "65dhjrxWcoUX3qkj5JeBB49hCKhubL9H1YwR23rabL2CsWh9nuexhPcW8PBmHQXj88vJbJTgTwuGpSdNWryu7seH",
  "key31": "5vwRWVaKWR7Cn7D9YEBpK619QsGAi4HoTYmpXf65TLmW6XeiNuhZ8JxbBbCmKPkUjsHevypLnA3UCTefRR9Cd8Mh",
  "key32": "4esQY2nD2rSkRXpVH9NtCjDZc4F42gmA6rzevWtV5pFYHcuphLoLBGDurcVgudDG8A5X2WC76CFWUL9h8b4Re9eV",
  "key33": "3NbcTduHUGsFEHXceDuMBqx9e7N4qRQb1tNnYGRSnybEBmyabSZX3iVqqtnVGN775ANqKBz37W6zTmJCMLoKd4U4",
  "key34": "4JE9ERnAU1fi7j18ZWJixKkGabchAj5QmRi9cYpgJewZRafWYd9cDJVaBbKDofX6GJFqapi1SpbEaqxzLpD15mjb"
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

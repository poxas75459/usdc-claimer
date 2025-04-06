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
    "67Byd6J7r32sZXuXoqvcZFRBsaMf2kcFd3ZjYma1FSWVePc6T7YZ6gsfE8Ko1616WfZoVqa5hdzqQd1U5AAurZKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rr3EFJAguDQpi9zBceQRwuB5CKgmgzoKcZzW1NKZHF3GDXrhgZw2ym8vjpsYt8oUAXx8vL8L4iyRxG1iZhGaJWi",
  "key1": "4tZcDjUF8uJsspbci4J4JfMbMdJzmr65fgGgj69XY2jCofiyBR6LRZGfTf62eVkaeDNBwXopFDkR4UuMqx656kga",
  "key2": "PM7RPNNAG1mJypj47yB8R9n5rKnA9qHZzKQtFmm4ihs8XXBkZbTpQUQbLQcNiRJtbHN5XQxuoRUuEkhbKNQEqmW",
  "key3": "5aApnD397L5Fs3wdRPTbkzbFxssyBKX2ytAHo6DJLGaFMdh2sxqLDLqpV2TAK6b1o4xhgdTJjU7oJphPopz2Ativ",
  "key4": "4nGzSTKVBcLnGnrBFMkobwv77vdhGgU3w6ivmZf4ftryNj7nkBxHogbv4Kv9bzwxr74vko7zWkSr1UzYYgEAYxUp",
  "key5": "3u5PUNh2y5LVkVNrS3QowjaUCz1uYJW2YTekPL1FFafYZczEyPapoHDG6E9YFuKBKayHn8zRVhMQKhkMkac7Sn9C",
  "key6": "4L19jNLLmwJ8i17HayBzwCfwkg1gDqEVYRGTArEXNbMrBwu9HzDQdktKHw4HJsy8wTRc4365PCdRyQufo8hvb1FJ",
  "key7": "55Gn2ty45LJmUfKna3gkUAr2X4CReX7q59Ztdv2T3xt7nJtvvaRyPQeP2FmPD6Di5mKe7P2tFuoW6qrp94UGnito",
  "key8": "2CFeMDCNuBgYnfw2shedH2UCEhJRPh24vrpgm8AcFR8mj6AF7McXrDJuLFiXBLbCJ11DcYPW2DvbNapvxFAriHpN",
  "key9": "28PLBrbEz3A63SfrjgUozi879dLiQdxhjpbXsVZZyGhqLUMmR9UkW8gd9Xkvd8VeEkG2q3FeTcAjBX2poX5kHY1R",
  "key10": "5xJDhp7boEJRKtuKbcXvc5qdprVX18QGe4BcJRgS4mHbCYN8ttoCukyeUku5LtT2CqjMD8WCNXLGLQA1y7b73SkX",
  "key11": "5uWA37YZJZLe5hHJnb7QXcY1qPdWqbb9E5XgvM9NNFsxeQkCXQc8wuEWKZopHy55WNqTg6ZWcFoHmgzJmUt993yE",
  "key12": "4zCFCRVw4ykJW9m57oEcwswYgpS9qp8nScQYoLAQh8ehxFgojyM1g4VfMJhd2CJVCtqxmbqe4kPgitXPW9hWhGdY",
  "key13": "4YKoFs2qw314d3H7UN9X3tGe4iGSdZVFKW1eXvrk5DTkv47Lp4RyWHAJaDdmtHqyjAPG5nNHCvbK4nV8ezYoYwTf",
  "key14": "2bZYhMKQZBmkKQ8CqDhHfGKmNKbwpTZ7GuNvANGiqPjHESZuGaUvqCXHVR4AYx3nuhHo9fg6wFRK1LapcvvyBHyQ",
  "key15": "2JDHepRxFh6VTJGdBQPw5savkJyFqoX9j6p4B6FDz6DgwMYPBsp98hirmddXQRHVsWhMReKf6vfsBskWFkEB4AC6",
  "key16": "63vLZD86wvZdHdkPnxaF3BXPjdLTK3zaqGiVVYoqz2vkbmQgTxyN8tqX8Srua56LbfvCzmPtmSUMzaJMDSn8x9R1",
  "key17": "2DxokoKDcN2GPfwSSkEUkgx9Cg42H1Zi8zMEB7cJ1pzwpenEBJGZbc5FHWYYCumjv9PPNKtzBAs16ccYtTxm6JHp",
  "key18": "5poLcsV9FwwY8ctWCeMPx6M1Bdph1p6UJcYXrgcGbeMrdPkKBqSVg2cmU9iCPKGGsU7qZLQKtRQJ9oeh4xXPbAVi",
  "key19": "U22LZQTQkpMXwsEgig6yBTFvoH3JRhxfynCGQ3FdeC94CvQSWc1wZYhgTTTfzbtrxcJSSEJczza8FzXDKD3fu3P",
  "key20": "2Hv3LKUa79ZuuAaWxNbWfnk9rsGZAeWSCtUp8fi7exhxnx4DK1QjuS1hkxim6WPYBa2SMj1xyzsEcbhAXQvqiyfo",
  "key21": "3A9JZPHHvSCFXPPnA6d5sctp9jfkzMyASUgP5yRJMc9cJnyGohQ2Psw55fyMQKrEXga9PYvtdP6ehkwRuak1rXQp",
  "key22": "4fuFUXGiACahjiaEZUKSoQzZZxo6bJvpxPjRw9yHpFJba5U3yeVH9bBJgZ1VxkPasmsLvv8bKYrbyrT2w34KxEr",
  "key23": "2Q9QPoKJCmAW41zJPPcoGqwgWzT4RZRBexjAGGXGmYw81tHwjbNn3ndPV8rLqMZ4UyZ7jK5BJaAeprxEKsYb3siJ",
  "key24": "wC8fXtqwzrKkpkW13v4pdWM8mQUnTdQ9gxPDJ1VoeFnNw5G2yki6vwbegES7c5SE5WDiht7sbyFrw5q2rbJKZid",
  "key25": "49e6vyzJT4RVNs9vPpXrSz2JT4CqLNvRWke9dCCNnsE6SjmJdQuhsZvMgp3Mhd2p6NqAHMxTUUDPQrddiFa5LN5g",
  "key26": "QLzVoCxR8s46RJxPRERUPawNNASpN1WjNPn5ha18HP6kpzero45V4KmeTk8oaH7pqxRMYzjr3qcAEjRPaJTuuLo",
  "key27": "4jpFHRTRUgpygbT1vX5b4iqqTVfKxQxxge7Nx1zSrr9sWtveB6N1ofxeSm5rp5u8gxqFQB5tWaZahv6Tt7ZxAUpQ",
  "key28": "4T1bEHU9WrY8AFsh1EmMzka69ExGsGVaTcBFP9phaBHEZL3pjfUHcYRq47rqf6YaTu4DJ4yYf5ARUZnDyzibK89k",
  "key29": "eEm3FMamxyqbHQh6UtVufmeNyaVu7R5rwDXKQsccHgLaiLoepQ7SinzEy2P5XJsCM5cPwErLLPCFaHeSiX1XCNM",
  "key30": "o4JzmJqAY2dD4yPZVzE4niUtpDpxuRzTfXP6tV2zmckrFVNqsd9N6cdSVENLvojqB9wupxUiqEU7X6vY2UCwA6j",
  "key31": "43J15KXF2JuEMgvgNZgmDx6i994GZ2y9MZCMaaUb2vzDgvUGJPNaba8TpqXQW8a4Xsndk7v6DC5FRuy15RTWXz6X",
  "key32": "3nZv2bkChVzKo5Vwfg57EAnJJn4oQxKDmqyXkZsfwkNXeUgX9yBAdhYVk5hoXf28TPzPD47bE1h1pmQ1o4UQF5HL",
  "key33": "VrjffLiGzQqzfZyWrMwwGvy1e1sJiQuAky8hDkHZbM1Wrmqt8pKZZjVp4FBM6FLjfpodSdSw6Cxuh1BVxdppZH9",
  "key34": "4wKdq6CzRJGa2ZQUFMme8WR9UaQwjBog3HQmddrLnbQ2HHFKTmqQA9j2qUBrqaUN2sWbhEUymVbVWK1NYBAYM9Mu",
  "key35": "2Eptf4CK7T1LwvxnrnXnffHddoADNP1w7WxkFqfvRFbAAR8xjC7NdPQdhiXEm5K44ZtKXDxpfMagRqKcs966cMQU",
  "key36": "A4c4abLL81mwivkWZdnV4QYhCypqUtgMSSSUb81Ya378wnUFFUjuuKc35gUjP3qs7iJqkSJVPMvCJgyTxkWRvMr",
  "key37": "4QSVWMjGNsN9xXaDNFefKgAqmNjarDD5zfLRRrygsHiYsnpoFhcKUL8owmBL68y7N1pdYXHFn8JannQWpvi5AGrz",
  "key38": "4QrzkiXdrbaHyqVk1GeM7uTYmiKSpQE6hnMgqnB1RQKQXomg21bwfp61znsCvg5e2dJtpXqTT66veNXZai4LPBtn",
  "key39": "5gjytBKHdYtgntDHEcJjTL9XemLEozzV64xYPBKLpxGRgfQ5RScdFtaQYGJ1yqp6C6sEMXuL1LQCfvCdtJ7NRxc6"
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

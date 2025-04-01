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
    "4Q9dpZ7VCF4Vxn8SJ86AtVpfzYmDbrSq5vfV8uW13xMvMGPMCxg6uo619fdMjcqEUHz2wVe9hCj1TaCjQeboM5qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEmbiWPZx3tpbtPna5gjEVrf37Kz37ktW4tHJBjUJZmP6ymgP2mjRV7qSDNsxYRHc8zjDobpRz2bNLj35r8dqbk",
  "key1": "mHYPa58nbVRKXztTQSk7dLzkCjJKGWKHREu5FjDVguhWRa9sDdP7e2hhiqHc6ps3kKN3Cfhevrh9zdiRBJC8nTw",
  "key2": "29VuNQeE5rJijgNV7tA6n1vWu6m3mT77HKBzuwHZPTexWo5Rk1cPXzeUGLwHK2aCy4Ty3RsCzc7xY5KKDrLS6dZm",
  "key3": "u4gkMDgkySPkGRxJ1AgugcjyzWKBk6SJzb8vDYjs553mZuF3drek7dP8FDUoa6btUXbqjksu3tgrjJXrzXR4D19",
  "key4": "4jXvCTiX7G133wDX8qkELkx5ZsfJf2yBAR7gRMkHEDJPegZPFWJ7qbaPNP4QBb2b3dJuVJJ9SrtaQDjSufZKGFux",
  "key5": "2mGjhSENsboybEeKAG5DYLgnCrysyZHnT6kefPFazbnPr9SdHU4MEz4PitcfC4zK4bfKnd8JAwKVZBbEcWU2vcvU",
  "key6": "4iRM4TuyxVnTCyDqAZCZmXe16g1pPhUS94G9PaJ3Dx8jpy2ybDH9gQUf5PSUzvngpmudpq3PH88u15kS7SAnso5Q",
  "key7": "4mFkR2ZKaik7zmr5ShSvnoR53NLrgiBGCtdT9zc7uRis4QBkrifxheNRGApYvXnK8NRsS3qSfCAiwVaPjn1PvHa9",
  "key8": "56AtjMCsf2cgVmSrE91T1JYn8g545arc1PGXC2ndpnrzUGS2DDRj89mEvwX8ikNZMHvdcEUyKVyTUf1wPV12foKr",
  "key9": "25BXwfGUL3hciUttsBfg1DsSe3SQZWEeD6gwxSimYprQJsjQEcit4NgK4YQcygTrMofTaNVkrFM3ut6AHWVZ7jLM",
  "key10": "43HoQ1NFbvnQiFV84xL7iPiCu9Kuneoeke26rJyx3HMMWUXNZceKXXMFbJxt497bzeaR5Wt4YwRqnEsArvq2SXKQ",
  "key11": "4iR7Ug9Bz4N4bsBKLQwiqzMXLPcjL2ZKHPAkpir2sNP1i6HxXGYugYFzLApYkM5MFgVXpaNZEuoeeYDqjLcZcFMX",
  "key12": "5dggykkXtmNm6NeKzBKpQ5zZczxdTAXoQ4ABo9i3iXvgDBB7PkCE4XvzCcherqdA5XN8B51LehYCtJ9wrZBgWYx2",
  "key13": "4qwJtfcwyELPbMUVvpzV5AUkNowegUSqDUzoPijeHfn3w7HKYU8DvhGdQsZwzj2HnuiZXXNNi18enrVTFpw61LXo",
  "key14": "3KQMWk4fJjpKcK3ukAwmvXrqmagroqNLYp5r75s9ZFVV8jdBMPyTyBm11h26XUY1Z79uy9Pc3ijrDJAYKuH37KLr",
  "key15": "4dJq1PRmptsEYjUbhNRPwf4v7fCUSub9AXfkyMLDqwWDDksjKFD6W59KTh74nQ3CXKgZd4KBQRX7dcwi1msREQcY",
  "key16": "4MB8adVgojiBSRM1N4VpPmomVE4KktEHKZP5JhzXNHzM55cjVjxxTExyXq2H2U7ncHDTXFhRB4DGBYhK9SuvT8Ek",
  "key17": "4QiE5YbrwuyWxXCPGG1XxXKtSfGBuNRWbwDWKN22MrMChXzqmdL2G7JcT2s8vtfTAKmrUuRAYmULFNLvo4aSJwcu",
  "key18": "2JyT1o6oUYPHHUFDTe9ed6B51R18dF5SAiVjzDfU3GictVYhXEVHWCpKZfQR3ru2SuBodYW5jZkKo8rxGYQdNvdy",
  "key19": "4SqNMxm1YWNFz7MD9gaT8Eiv15DWm1hpfBW6biExT6wU3wfehKf4GaTgU9dST3bYQKWdikaZZ82LyEZYjBMsk62d",
  "key20": "5t7XnoVmHr3HXuDq1kvwHbLRVShxwPQeauXSkC5Fz2263HDm2m6YLxeNcEiMZrgQTby2TLPG7ZY4RYpo16DUMCvz",
  "key21": "4oRi7dBBs5XLUAqTHu3zLyGWx9GumXNwS9adKkb6zh7k2QCVAj18FTc3DBH2vT1Hn2ojV4N4bgFjU65pugzTD8RM",
  "key22": "5mbbSvxY9NW7sdwZLoLJYXojUCS2m7tdw7KEhv2vQo7wo689XgShGKwRYkfYusg1R8nbjYFFfRxRMusDgMCjjkS5",
  "key23": "5CJRkxxmtZudvL1qAKgZQbWDqh6J6LFpoH4sY7N4BT4FYom1mw69b8Xb9nHSRLT7B3yaX5Y2MzL6fMDo6r28kWzL",
  "key24": "4XCnNUSKtMoEtuVUNZGaeVf7BSvewLi9kAojgiQJtJarQ5ocZeLkAnRH1HHZxGcoXe2KyhDDqL3oivZ52dyFSRK9",
  "key25": "zJyaAz8YqJa5iWm3cXBJGYEPfu5cc2bjxGsxeKNGwjkXj7Y51vtkf34wNjz4dmwcbJNzMhjDhC93prfVawSAFGA",
  "key26": "2m83z3P2LSi3yK9qM8G7J6itC978S2CqvUNAyziHF5J6jUVh1Y8U5Dv25U5DunFxa6zR9ctSbuNAhEe4DuZaHj98",
  "key27": "5rP8QTzDwkdZYFD7GpbNmyj9BamSwwpuinhRwQafV5PHPHnmJUee48kNA87yH8zJhaeDCeChj5fXgAqd7LX3XHsz",
  "key28": "3jSHtXiPuBwCeANugY9V1fNRX3FUkVdf8cvM8ynp6CLEZE7YLrvT2ceXnGYZmgxEb7jcuyiNcdePd7ezyaMYquJ7",
  "key29": "3wH95oGDZRonCNmWTC6LhepWqSgsmji97YhU1QqaE27GF5HiR78RJM7H65gnoXEjoXZBoYeTZmsfry64xTva5U41",
  "key30": "61hVpRXPoT6GSF5Xirt22fWifNx86yXF23YSzTxCk1GNHeBb4Dicd6Xh2oE31BAFMEweHnQhDKwmh5W1t3AofRQn",
  "key31": "4zPygNtZEKbg3wBH6xDJ7M6tc7z8zksj3hACAz4YEiyRZK8MjBsH1itSkcjgyt3mWRAqLfkwhmoP1hC1SEtmNXRA",
  "key32": "tSM6dvQPw8xDZwAApGcdoenmdjJ47N3uk4RQd4uyBthjyNhvF6nZwLiYBYDhpNyNecDgF81r8pvwnAPPWEiymYx",
  "key33": "2kK22qeNVztndVznDaDgD9UjXBfnDrykXoLzsEphLiJPco5N7Ts7pDpoZc98BUkXmik3v5U5HBXnNqZf8MyboarU",
  "key34": "62ueABumkYXRSFL1zxB2oDrgWZPewK7WfnGtWyaW3BVjEWeGEyFvjpoGjQfepLkzRZQzdVtKKQgCciHRLav13diK",
  "key35": "58htn83qgYHujB1DmXdnJyEweAUkSi2yE7XRkG9BbSSUigbrqTDLQVquWY8YpssMjhMDReVPAngPqT8irFJEcjZT",
  "key36": "8YFbsMiE7ZxVqhPZ6dpfTaY4zJWsfq3iJhAkLp9aMmM1ToWTwpFm2qTjHxDnXWw7HATn63efiNbWPyvDUARu81z"
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

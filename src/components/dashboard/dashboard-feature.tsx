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
    "T2EsdXdeFoByW56WrBfCQsCzm9wBAGxEhkH6CvusiRT58ZfTfaoY26c2nTHnyaGQ6fWMKfB24vDjwDasBuVuKaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkqVKPgUvwV4gWtekEVxdrgXmyKh9cPz2vxcjcGH6eXNuK4enWLkDXGNcHzvgon9EiE8oGcKkvGKaTfoS38Tjci",
  "key1": "61KhTb8jggRVd6dHuJGKx4d47cxUgSUZwjY3ZmK9LBeAawEM6JMXkABkgYAK66UqNQSv6czdFuBs2DTF1tk5Pqsr",
  "key2": "VioWXWm21T6YcsYciJgaTE37HhMrFcb5WyCU12BtHXH5jEtdU3zunHgUZtdtVgGeqLAHEZ4zKHCe1LA7AtiwfBd",
  "key3": "3HSqE8wtevxjiSy6A89m56D7sUPZncBtNi7zKRyj3LCC53hVye56NPt2yJFLDasDwMf1PEJ2f6htZLUcSwBTQiaR",
  "key4": "4M4CDEuEj8nXCJA33My6tmuJPHvgCEQR2ujWeQapSrJ1VmNgHQyNHMWnVrqFvKLpJZ9dYq9eJKuKrXLic6uy6o2C",
  "key5": "3NznY4GQg2919VJJ8VcWZQYuvC2RGU8hVdceMZEZ4TPEdVN8hWU3gGa7W9ntKzSXQxEwEQLJg3WgEygG9q2pNmsD",
  "key6": "5M469Jt27W3zj7zz4gAcxnPzDUP5pnA5ucpALSt1PjpXuTu8bqYR7pRVoNFZDX2cBDnGQotVPg3rwViJDrUFRodK",
  "key7": "5YC4BgPL7XhePTM2Hxim88cRtBcR6zbRMKJgD23ufsRgHZQKHqsJ87eHrZWBAykYSnDW7RNj5FukBYNsQr9P5Sre",
  "key8": "tmH1UjSeDFSNRk3soPUNZzuu5PCq8yuyiGkaNCpBEnN1h13tfpK3qhkiozJzKTwYxYB8LyqmxderCE6F8WJgHgi",
  "key9": "dsW4EWL8Tx5NJVWgWQ8cFRtSkiUtD5F8414FxzgWc92qQhosnLZ2WTimLqBndiL39a492LModsxr5oP61dbkKKQ",
  "key10": "36Uhuc29wnt4DVMk3bBVKahjHXhYV8fUsXbyV78F2HA9auVhNfTVyGfGM5Zy91C8hc8HyEGt6dzbrp8A5YPTt1zR",
  "key11": "5U6AqioAEzBwHkHQM4sB4eGvmeHTomKfhLrvptjfEuyzxNyZiwP1ZSc9uhybrqMjTNjXmChd9nFR3ksgysuAvE9T",
  "key12": "2S9nsMbypJC53wRSrtp6Ehh6N7nnmDs6CycVwhQmmh631cP8pvvRoKm3f1aytn8XyiVu3w8AhBnVNEGv9c4faGD9",
  "key13": "28jGpMboGnbwc45PxxQqPUDp2vY3ZD3g3Ja81TgS6J7hU8rTNoVkUCB5VSYNjN9QZQ7RH8iqfpZmcbh4Fix2MLpD",
  "key14": "3WuNeX3vvPK9A5YmLUJ2xm3GGdSXf7pE3X4Bh1UfW2oCZ1ymB5K9bXUF2KrWNqkuu2FWg5ki6JYEpdrZGwa3SBAR",
  "key15": "2H4xSnYTzmGh9NkxjxDmyz2pj4Ru9imBVDYshJN4qJjXyYSd6PXfR3trga9yBYaCG9Wpu2tFz9eZJdWPPXKdNAbh",
  "key16": "4eBk7gmfzufXbzNXcDEgJMmJsy8jS7c8kd8TWi7ZwtxMNYuDN1KSsBeAa1tDxkt3BtpnEtVLb3gGLnPtzKLiMmTj",
  "key17": "5MsLjBeHpbgYTidrCYqwW4NCrAeoxSDbPgYcjc3tquXLibCYE75EmiWpMnfKGCZkyqQmezWjCYeApq7LUkaW84C4",
  "key18": "364iFJbBbjUjMmbxwp73cMLv2ppYytGD3t2CdwEQ3Fbv7g34YpUF3PCzDjCs7sf2qeK7eFF4RqkXuBSubLC16vU6",
  "key19": "1czXs2MB46hcxneGb1HZ8oSRn1ypLopcfMgmgy7BATYPP3RWS2jc7gLqTK4e2ZfAiYEAmH3EGEWgEJM18zWyXzp",
  "key20": "5PhtU9qvn4ehBRmN7dCEeHxBPK1DHtWqNGjSKnjBNoRWDov9jgUQwxuAeYBVXoLcwK8qv6WmPrAuLfxrD9KXjiLF",
  "key21": "GYeVS9aSzu3NCYxqiGTcj5ofypE4yLnmMnJr5BeLYAS8KhQLvmPB3EXBm7p2Gscjrs5tkn8DeoiXyzo1jLbz1V5",
  "key22": "9sbb9NHVnDbxZxueQaey6P74nCRSp9i6MjFNptBM8W1VKkDgUQzJsa8oWJpFKpHjvxNVaVz5Box95XfQzWvSpXr",
  "key23": "2Agq7kz3oerwTQRqGSZmUH2VzYej5448Huoox7EHfj9ZcJtEUasA2AMCzmNV48V4MqtVcKT11Wbp3D5o2AMGbEpE",
  "key24": "3gbmrF9SiKH97EmoaMjDhsgWP4JZ76xMcLo6G4pQFybcL5JcMAHZRx9SadkgBLdxxfSzK8oGjMf5tPWTF5SxXxBu",
  "key25": "2Cxiva9Ju6wD8M59L6pmLErTt8o5M4QPWRDJqEcBj2xQmLXqkrSs63rcTvLN13vANERmoUbvCetEQC7Kdhs8UNDT",
  "key26": "4h3kyHLfCtHKHULn39vwR5MG5z68Ecug2f8sPvheWmq7Buhow6kYFxmtwHGaHZWNJvKh31QxoEo32Yu94RyAu4qo",
  "key27": "4fRCug9d9M4CcWCrfap3WCe8sPK4rdabsxGZniw3BVbrLcnXuRFHSCidAbuAUdqXHoq3Mw6aATPgQprfdiy786sH",
  "key28": "3Pw2SxSy5xKhwbTvCBxB5rtWsYSTt7Mut66T67gbLTJh6tMyFCzi79ABuf3puhHM6iqQhX4fSSWJApTvHkMmxKXY",
  "key29": "5VxCMX4YdEa6GfZqooG825UFDWtnQ3rsb4bdpiHtwTKHtvNrU6wyLTdrgeMJw6NjzDqemU9sc2NFP9Tci1wrRNFF",
  "key30": "kw3xwEJKZejBLzvnvxrHGzted5tPhgwg74N2LhwVGN3fgxRMLh4yzzFF6Raf4PaLcUZmG7cMGX5GBWPGN4MNk32",
  "key31": "2w4rQFqUtEYc8GW4bQCR3wytDxK6vJWgJuN2B1WPbncQn6nggusD9Am6qqcPWVddUtyjeRv9MZJQHJzd68XCaUUH",
  "key32": "5D9zNArEoKKTFpV7p9D5fni68UiDQ48LKb4XP8zbcybWF8FbPiLNNSMhQq3AQVWtEdpNMc2CrofGjeoTNJBkBtdE",
  "key33": "3gWkgXEcN4vjEGZr2CQe1CqFhWEuMyKFVA4YXN5grrZVSd1NjCLUA7mVFMfHemRhxawr8D6euGd74RnhQgoA2KHB",
  "key34": "5akZcTno183eBFNnYWzNkszXqFi6fnFfgYbsEC5hSM41yWbMxVSXDXeA2v6pwjgbMwqRBss41L5QoPBSrgS9YxjN",
  "key35": "fcnEoPfzch1NCZWaYgEVSYmiPjcwxbUbQVoNQxf2h3Du5TBqLdZmUq7jCEWN4xzePUp8t7B51A1oWzjxCLntd21",
  "key36": "2zoVAZPsWA8LJUXjKCedTJsmShEF1mskBD4burqCCoJ52W2pc8DvD36YnSJ8E18FtHQxBrmWGFKsJu6a1PPPGmCc",
  "key37": "25QhNN3saJkjJpRvGn9wQj5fbZVQYiQzMFCLNUW3SbFJ9zmUYNy3pm4WScmqA44mDRNxeytVwzzmmzYfGkAArBtS",
  "key38": "25RYTRoJKXpU75TG4C5VpApvJLVWZVc3grfu9aYWnkr7RbhfQrse9bqkX69hQWXPUPPG66EsMcL4Ux2M3fXrsSEA",
  "key39": "5goDn4y3riNaizVnYcR1faMWxyMpHw3ba7XF81LnCptQAFN8gQJcNttwzWec6oAU1SFhSBoXYTfEyZfHbxfWHjbi",
  "key40": "xGrmPu1Fr2dpLrDMaBQhqyvxGHPnPjqeYSeGX6uKMikYnejuSkXH4e4Ar2HSLmYs2dUAZgX6kbjC2w5etbSa51Y",
  "key41": "4yWNfAgXK51XDr4qaVutppJD3YnF9dKXNhoDudZhfZngtBWCBfpYx22rt84CfHBM6KCtTSJPnAFRYLpiUcWgFtVi",
  "key42": "4avXfLgz7oddsotgQLNLyzdNVUhqVX5UaHq54DEZMLbaPBrvSNTNdh91GbzeStSeieyQskiLKmu8pjDQ6aaaYvP4",
  "key43": "2m5e2ugjF5uUqsDnSYmB7JLY6MuhjLd9GPgpnyVCSo9qMYZreoo4VLkSSwJVaBvRkDVWQyoeAfTWiRwx6XyUxDJt",
  "key44": "mhqYGQesPRW8Sr8dukP4Mawupo4N3y2oiCLFVZDgmFKVq2uGnmiZVr9WoV2b1yKbnn5tBu9eQgQ2XwP6qsSDncy",
  "key45": "4VV8DaXr4deYC5dK8MN7hX3ZEDZJsvhUPjH9FxR6GN9Q9TMNymXke7PrMcHYDsBsdmvhUAu7ZqZKTZCDkU4TVmaW"
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

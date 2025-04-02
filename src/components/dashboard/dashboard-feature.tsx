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
    "4cDjrcMMrMvSueutrJ8ZdguNQerVqaq4fgKt33dGun9T2LQcsy55Hoh6v7XqxkB8iqizUkG5woBp2aShnkSxrfTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s16toffdngaHSmPnM4ryy1kTEicZNByHSF62g9crCVcTBpWAgGX53DkVTJVWRH11odVvgcvR6EniNu7YxooJuYU",
  "key1": "BQ1PLmVY7bvM68eEzSBough9y7M3DTVySfqBm9isDLM9L2jw45mT47aJrxBcHUWzyw5XuYhTifF8A2b8BwPPjo3",
  "key2": "3CgzZJXi9bYWJKTmbkiHPuHfQNxs3wWRmLFbReMHDNUFGGgtNJucTR5i8MuxFG3qLRj3CEWLUhnUbxXgjPjQVWst",
  "key3": "5viBpDiKgRWsfDqTBHPHnix1XRurbSsjFEbXjMWyqdEUZARb1KLKPE2ToYp54c8xYBL9emZJYbdRga1ij5T2J2tW",
  "key4": "2i6DhBpBTM2M6keDj6QfKHUarEwoJH9BLkcfVn7hw7B7UG3C4rgUytpmjidcRNxgqTYxjQXPmppnSiaX25gDrVvw",
  "key5": "5pR4mTqerpSrR3668g2noN4aQ5uwgrQkypDMaCoB2AgH64phrZQDsT6pUcRkUAgfivV9cGJm84zvpzsuGemMyboD",
  "key6": "5bTYVFRQzR4XyUFeeqNVY6PX42TWEULyMELQGpGx5fiTLmxyEUck9Fakcf1B5V1D7jq67esSmV3R53T57PSnCKkJ",
  "key7": "622XqJPFBkhJtAKYtSUxLD43raEqV8XAXQAcSw8Vp5qFTZmHudN5ftsfPGSBsTqJmG9RxhJNXV3BTkCNQocruYEQ",
  "key8": "DKFCanGuRcFoLfG9wKXjTcaYgqrZVBmEdgeF2MxPF8CwcbaSGRmoVkwDLLCa77UtDy5nHasmUT3kUsqFaZvEnuR",
  "key9": "2kaoXQLUsknL4H7LJshxoTPMFFBjegXuaDkA32TNo6bETFeDcXDkDMU7RsZ3h3ZyTbQ8sXviwmMo3srvnvwGf52i",
  "key10": "55cWduBCSvR2X5WyD38C1t3ChspmgNeJq7przAru8DVGZ9U5WGoDwzxecZ7ZgpvGByqJXxtCjQVtyD35vcq7JEse",
  "key11": "2jk8stUfqgfBJnQWsN8VmPcQQoto7YksD8LdKm9xdfj5c3T31RMMBabJFE1v4t46MeXDTLzs8z2AgFSJAXBmPxZ5",
  "key12": "3TBtx996PjM8ZBgCpxbiUTBhZ7SWCHcTTidsvLRv1Ea4yfKGWTP91GrdEtphCyvP1HVmTn3rKXthXvm6oGvrZhwg",
  "key13": "5wfEVTUafEM5vSjiT4JosXQLXkLUKrximYQUEKte2rxBZ1k7nPoUUd6kgqP9JcK6YTrwv5asrcjAZDzbhk6nRUy",
  "key14": "2zuT25yFAeb7VmhYuezkRqe73m4mfDwfkbrEzyzJpXBDEestBCKksqPA2NPLB4svk5iXrkiCXfUNZrgy8dsK2kTt",
  "key15": "2iKc5tWjcKMLasyJ2y6H8K5zD6ABkqE5TggnRNQWQPcu72MGyXinFDJyBGHB2iiD76oQdCMkxizPUychFL5ZhRTi",
  "key16": "2dFpPcqDJ9xTRCRYmYLQf1xPUK7KBbaCLwfTdJxgQi1ad4iKYxwWnwGFmNcraLs65U7dNYjDnbhiNV82KMqStAAp",
  "key17": "2XuqmTDpHUnQWYbnBHGSExmD6ikGAgJJhzkSrHco2kdwE1qbAsbH5odR6icmUDCP3ULaU7qbAWExfph6bSkScP2m",
  "key18": "5DmfWogpiGgoVuoevaxpxGjMT4oqZF5r61FMMc8ty3r9TT6DRPWdGhCMFoejPrb6X9mzhLyUejadQzK4Aoroyzqa",
  "key19": "5KgWzi7EUGp3N2jVNeom5EpLLomWEwVdYL5Ka9iXKzYCyxsTWCTRz12jtKmhfm4mtcX9HdNiLgDWgnsNLULAMP15",
  "key20": "5AYJ2fjKUbkDUn3TeNtV672khVvgog59kwNWkaMYrmb5dKA6u25ZhvFs3w5s6R2EW8Wg98XnXYcAJhawmL24AbJA",
  "key21": "Vtn3Nr6ZedS52ftyc5fxTDJvk8xPfQXSuLz2jYLLFzQ9ca4Q2qZkMUExA4uR5Jos57d5o9FGZpCzyHVv9cahTD3",
  "key22": "5ao1XMQPcRuZdmTxeeTr42saTfTsYopTDMgPrsi7AVMr32b9TmqsX2wWFsDGzq9x6R2NG13FrzRgRmRoH8uDdZ9y",
  "key23": "3rR9TWrqjgotsR4AeqRyXL1AFuZ8wdTHMkFcmaAGF7GQw3ynTrvxYPERv6jsQ7UWKzA67oC9Lk9yRye5tUk2AWjV",
  "key24": "4Z27TzfhW9NvUDJUs4jD5mSxYk5tXze6LUk3oUgaYuWyHLFJ1774RMrdQJZLaqC18xBnZGGpQi3WyH3KJHLaJ7Pc",
  "key25": "5ExeFyh9xnftPWZLbfJzqk9yx7WZ14FHFHU8DAjGnUTsLa61piztBw1tKnf83yJ42eypv73u3SsrSMatf9zJyK6x",
  "key26": "JifUDGYMqLGXeYVJK44UurkoV4BhVUYpHkA2kpJLyD4sTqvE3cHtnuT6LxwF9CQfRkZNnjHghb8mgBJB3tbvPpz",
  "key27": "59HXCFAXkD4MUYXWQPwZTJkQpzpz9PVK1mV6zsrQFBUBoDx19DgKNRX6JwD17P5AURRkUaJvPH4YRbtZth2yTz7F",
  "key28": "3FKxjJUpWKSLKU28xkM5fPmp12v95T7xFMhQ51oSAnaWV21aVXRwA6GgctYfgXBAC66M8QRd8ic4Q5Lo5BSMCoBs",
  "key29": "3XoJVMMXKWXDVKapZfY76dgnmrTrYd2AUrHLYn4wnTXQySBnTg7pk41ucPRT6SmgH3brNN9uFJHGkQef4kkuJPkd",
  "key30": "iMBXcosRHp7aPkMHWZDs1hNAsaM7smTkJbHKXRz6UfbYFiTSEKPvdHfDvzSxMPycfEVLb5cSvmJfC5EgWH11Lwc",
  "key31": "3QRupojJQZU74LmkvnjhjevnFbzYKmH3Yj8o4BZoyV1U6PJu85Qdgu5cT4zcXhHgFx7fF5pSwz7fe8byJemYJB6t",
  "key32": "3eYy9tUXhQWSrZSTPidEgfGRvSKHFym9eKxUxPAubkA3kv4K7RTNSMFLhMKQfF4MNAx2sH7LSUvoFvXtnoFd2d9y",
  "key33": "3L5QrX93c3MgxizMEvuienNK6oejZCc3f8icTaNhcWvxLG3RKFyTZvNpNff9R6hbAjMh68JKd5MmVK9VyrjVV9vY"
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

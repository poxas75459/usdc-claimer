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
    "rSkWeYhiGu5tBuAKafS7JKzEvUfSgEhZT2ZMm44sViW6xUZzvwkLKvGvdnzv8HoNGrxf36G6XM1uXyuH2AZMTWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzQqUyN3C4Yz7J2DH2wE3WKuEnbi2HnLbutRu4V3f7Kea2fuiZjYPRyAqBkrSAgy2GgTJ1wWCFhbZGMMZUA8Z1m",
  "key1": "4qBvNpPZ9CGKr3wdmLrcVnQZbB9iVC6qP3rns6gRAhvk4tCwDrUQmxByCJJYyvBxunH6fRVGHDMjzXwGPkHZQc61",
  "key2": "4RGbYaJYUNJb2xJe5MSjBckqwVMe75HuFFDsmRb73yfR9nQrGera9n5XaRqtyBnzdg75ECGVKNaDccJ7MLbTuE8J",
  "key3": "2RtS5DQaZsrqbfEyc33QRiFd5Ako2FREyeFgDwQ256FnvzZMubWCQVWD2krqZ3SD3DP7tZCn1T3Xte4eu9i6YSRt",
  "key4": "318iwEe4rau9whPyYYzZvACUJCH46cKAMpmB2CawQr9sosxbzvKGZ9sbrTByoJfYPbm28Tu7V2YS7ckYJjp4UZh5",
  "key5": "3R2Wv4YxzZiKoACqNjQemZ4daqEw36MuoiL8NKxAUd9HJgAgeEqZe3XHotjioYRd4eE4JAsfcptNC1VoPRwYPCbG",
  "key6": "66UTVnkDQA7xRY2YwXZZ6o88UCTxxJkTGN8C7BrKugoe23b7z8E3NESFAv8kaJXPj6idEJ4CLPjxoA5jmBcgDvJp",
  "key7": "ZkSBWXeuSfs5AivgYv5xMfMkHCYjHqnZkASf7MrPhXeb938eDDiQ1Vb2P143pzzieNDxsD3FczzJdxUnKV8aHuV",
  "key8": "RNqNkp4wqZnZS3gCNzJ1uBZTRBnHFpxQK6TjgP3tVWEHbcwW4tMAo4NG4DByuYrBaf9pPzaWqVRrC3jtbxDpv1j",
  "key9": "5TwqJwZdBGjJDGzL36ZvS5cP6SDTnpJNN3cAjQLaEydgm7pBx63a5T6KDECEC9nxbigmqLRFrZBaxV6CaEyS1xzb",
  "key10": "2iKQbSVZviWoDhCoJBzDr8WL7k7C4mVdBJWoDS1TnDJSZ3hUa6F1F2fpFNxX8k2zbEsxxM6Ve6LHuc33yxBiaEsQ",
  "key11": "5B7obJs4WecfDUwGp9KYAYNiyfZhi388qPVScCdnNkwUvP2SrvuvFqzfEKGmLRwbTxpJKurv6zZ5movPT9MCLKjp",
  "key12": "5Pnp85VjwZUTe6e3EEuiBSfUSgYNtMGRV8PPeMTmoMB5ybzXo5T55wyVuCgL7rFRnHXn4QeTzZ3iXbJP8kbRgT5v",
  "key13": "3dhwFH9LQ4JTmuDnqnPSKkkkbtwPrXheWDdZTMVuHzDPLtBpBN9sbYxoCC5hiYDqP4CfVr7yb1EQgnUZ6FiY1pqM",
  "key14": "5TmR3ThbtaTzCiftfwYGYFeZtT3iA1NnhkdiNKKzSbfF8VYRkUM314ueXt82nQRtuJQKs12DcWQnQKPYpLiB1srd",
  "key15": "21cJH5Kz4MzqQaUdbi46wMZtTbJ2Sww7GwX55ZW6gMEBR31xuRTrUVo4KMN4J6C7LFjopTJAC8jS2SbE2YKmRNDM",
  "key16": "4AGpPuiuUxvLmGg1nE9YqWgGctYr3Z3ec6ni7ZpWRuoEVKKgDTm2HEtD3wTDMfyk19i9EK9qFSuR9yiVJQj3KfKv",
  "key17": "32j2i5iZDiZ7g87xeREH2V9BnicXcymNSXqhwyvxsi4z8DHHHUgphSgPXop7YTYAdkoukxwgJqZTP2DfEnEkCjTb",
  "key18": "5hZ5WB5yaQnPNjkqWLv9faBsPtWtDrYKD1RcZkKAd9JTQ82ZXjQstcovXtckx1zHBDuRTzqyyV91kKrTqYPp6FMi",
  "key19": "4BfXHZiFk4a1kQJgfgaxbDWZfqcNh6fjMQ5bUdjuAMrnCgnJFzGdGzUS7JCaoiATARtPkmmp4UxhPxbRcvcyEcb1",
  "key20": "3jg82FPXkgDjpMHnbeXSH25SqmtRSr3zT5LPnUFHeBXVBrALfFZn6MhZHhPCQZAYEtdJvt9YqZecLTLHWJw8Ve1F",
  "key21": "TMZmEjoYTB5Vdc1upLBrmY7sQPif9akam4yDzBEKDexH5FUuauvUzWSSfRRps6XnVdAg5cKG69CktsPGmUW4dZG",
  "key22": "3QRh7VTYrhQVkSs7UMHahq4UWda3uq77LnD3brBcuDaCb6Xkpuup5Eezk2eDKkgtqRjwS9GhxyxL5t72NgiFdEsT",
  "key23": "5LExqFg2vMmDRDpmEu9hzKcVQdhfDZjVs9ySdTgBek4zz29TNV13jTHNJxgc2r1WSAd9w3tuE9WiBUGvCu97TsHE",
  "key24": "5pdJiV3nbRwjNe9JKomhUwxw5NWP9MKpMKJanbjSpb7hN7mBfaNzSeiCV6Z7y37KVipwjebQy63tf1dwMvqYPQTv",
  "key25": "67h7T9ViBpWQGgJjjdP7xYwZfpbpPidHQtAorYJ1JaBo1P4H19BtxgDp5AreTdmNJWBRmNoochg7MkiSkQ9QcwWQ",
  "key26": "3ZM72QEqHNJXtWniu1aVtg2Yi4E73xyKiFQVHvoJ5eB3SEnFJontqu5vN996ioTMYs2oNSPeKNZ3FiSmiabPUkNo",
  "key27": "3z57h7GRCAY4FporgVxLnnfZMCenUXDGWgVxXCXVsBgHfTe9bYo8LWSok13K41ZcMuaNZAPTQCuaJN6moA2wUuex",
  "key28": "21q3m5GdKzVo6R2HHdNb5eofSgFscsfYkajaJkoeMg8KyjUEuLG8MCoeXiqVSTKEwiyymiZCUe4i9EPowxWfnB6x",
  "key29": "42uqyooRa3TVQVS1uvvRu8iR1qe3yZvoAurbzZ3zexUGLu115cCVyVRZ6ksGFup3s1N36K62dnottinA3qD228hg",
  "key30": "U78RszSQWEAnpocDeeCpjumytc7D5zzA4miM2g2rPJv8uPR6qh8T9wRGNFnUvVumL6bhzmrfHTNkYeRDVwRruZy",
  "key31": "3z5qsrxu3Fhz9sCfesxTT4AvDpq7kuEARANm292jPrt2GAWaPbGHnEjn5tCFzFS5RyyFMZq8vS5mJR92rbCPkFRr",
  "key32": "4WjzAZPGYVd5t23FuMZgVRXH76TLryr88f3hc3zsvZTmkwzqjuswbSrPnWYBqPmzLGPtTf6aveGHvCUcgxfGiGeS",
  "key33": "27Z3HW6mabLGy5bd3pxbNh2HjBBpa3nYL5DGY8ZjQ4EBDY14sH9F6rgYDbboa8JaFEeGMvRQhMc9BJ73KuZTYnvW",
  "key34": "3zjQcWM2oNS5ZGoRBUrRcst2ceFAGqhvvcPsze4HQ8VdePuA1mFRPLNUNpjnKd5tkeMraEUkhzSeRrXxKDTdpziv",
  "key35": "2TDYp5MLKqcuejxQw9uJ6TG2Mew5cfinjM4xUE2Mpvg9PyKnBSQjkFkwHaK1KjHqy3N9WKSNNDgNAwET9UAjA4Tp",
  "key36": "5xqnDjESb9WWfBBkfFt6hZWHzQovbrxvs3jTJ5fyAyrPwykoV1iDViGqe1uynfDKNxiQUE4z98Gx78qBss62TEXh",
  "key37": "BfxFLc5GtGfgxGTe4pxAhetqiZFoTUcE3xKqzPBKibxVbFVh1rwNJGPYnzsPUjB5nW7RQkkKcktXyVVcwzvDbLV"
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

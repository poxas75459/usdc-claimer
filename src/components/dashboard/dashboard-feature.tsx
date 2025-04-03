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
    "SWwJAcBp6LXnuGpXDgLK54EPA5B8q18ctqs2kU7nknPKA9hPpTJ6nKvG54wnvAMzQTDUCPDtq3p1acQ83mjmhFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEjDUVaML8hNaGXU5Adi6vtv9UBQd2yAaiFAxTqcWcsYvvL1r7L9V6WPmi8TJpCXKmsjke12fGmLsngLhJ8CBNs",
  "key1": "3yyMmikx8CZLQ3KR9K9ZNmBnzyqMgBMUpLudbxfCFAMcpSo5rEn2cmoL42JvShCxBzJtbdAT18Z1mBCahjvqhcE6",
  "key2": "4m8ms5dihZZqLYwW7afadJxMzXRPZDxQa4nbeBT8SrQ5gd2sW8pzGTEQfbwjbRD6hoRoEtxYsfEXfifsHkpLfTpZ",
  "key3": "3GG81gfEN4jAGNnaWJjEAjqRrJMr2mRF1rKTFFXyiw9A3Kf8nXNqEVqd9H1mkYVVWwPdKQePFfETCT7VEWHQ1Kxg",
  "key4": "1FfvUThpXhJ1tUBmHzY7h1qkxoF8d3kfCESmZkiAoxLNUtPBZExG7d179Hn8yNXMqWbEQgMGnM61vKpw3Mh2ZyR",
  "key5": "59nrRboGmyx3rsPHxtV14TPgospL2UomGzoNqb2YPfJe8DKvr2p3ud4eNMK3m74rCFahZPqKjxdcAk5Q4heETQ8W",
  "key6": "5NvKshQDdfbcvEZnfx35uXPKa7edeGiXwTqxCdssQoJKPfD68MAvYy4KiJ2u1c3ozNSZHowoMsKvk3eCTqCcDfCG",
  "key7": "w6LyVxwzXAAkm9BgjJvc4wBLvQShirwL489SahbfiGTge1Uc5ym8NEWNZTfo6UUbeGLDqv8xT1tFNa1a9o7nF3c",
  "key8": "4QewiuHdFWewHCePKeYQR7JSAiH4NjVXhJhuwRip93reCyw1csTwc9ut4odtxRgNrGUcJRzKfg8hdfNJ6gsBVPfo",
  "key9": "2Z6pcgTYSd7YXA4eGdfLTnbn5kQZdnQdbrjgPdPLnsuTp1JZXymBsbKGVNcAL5wsLRNk8vrkUqHodAPBL5HrfQ4T",
  "key10": "8k1T34EHwvZUGsKAAeTM5e5YowPkCeD9vKFm6gnD7R8UTQb5HA3Ar4KUuGCNECQcRs2VLjkDQnJVNyzWCFYWVgw",
  "key11": "4ybe2nSZQ4xhnVhfYZPxnJgoEKX2QE4PDPWS351jRGLP36Q35uxGBnhBV21LNgA7gYym4FHAYFbctxbDh5Uqmyxf",
  "key12": "2ZEwaRdWQQAk6JZtqw48PeFko1MhV6JLDmwFZU2M8peBHKM5e4HfeJjD9z7bRyD3SsgFW4T6JVQAQxRAayjKaSfP",
  "key13": "5kPuQeaKi3pUJJpeNvkPFiDNDWMyNcgLfPZkfVMvfe2Sz69sjNzf14bdCnupYefQiFCcp7BjZZDtNNvBUaM4Ki9T",
  "key14": "3WxpDhyxdddzJLeru9hhZgax4qPZTfoNTW7JHcJ28TTqifYAUL9MJbhPqTFrcs5zCUEQJLkN8X9QYUfKnHmV3rH8",
  "key15": "64cwcZjMkQovMqkVxwFyZ2sxqLTvw345PUBoveLvTJvZEusZpves23putswhSVzFac4owdBsxSf8yWiJnv97FLWR",
  "key16": "4htLAdVQLc9bgqRbkyq8iyNfaZfdtKV56TKG41xTUcQfuoDoGWV4hS1n1zUbusSveq45c8tebZPdQtKF6oE1MfVS",
  "key17": "124AKCXLvun1dFhxj68q2AjkXXj747vSESMkvpEaJQqXL5trLd7TVGP4JYgy7X8ix17bA8r59y4Kc1oBzb2juzpY",
  "key18": "4fyfE9o5FDiguQ6zKybtWmNr11tuKZKDPi3DV9G3W7s1L4wLdJjLTvKXDutxT4eML2J9ao9GaKseaJzY1Vj3i8qE",
  "key19": "5RU2SCdA2MndMKx4dtMK5gmSW4Aa8ht6koxFqCN8bM6yKAAU3uHoboqrK9xqHuXGfjYHukvxv1At1Lb6Yx7AynL",
  "key20": "3vACpkApeY3L47Tnn3rZFhqyEKc4b23omojarJoWjUqyVhbEbhhryuo5Xuc7hXUFknAtiquEW6Vkc7FgnrgoPvNm",
  "key21": "52nH3bJt2MH1DFn9dwudXjmu8EX4gS8fhTcm3hJNDq64k6rRcM1rymmkQDwgx4po176c6D4qT9X28uZCmEsP8JZG",
  "key22": "hWRfxmvdDjuM8rKe42fBLYwU3Temx9LQD38Lh47MorWBX448SDNR4QPdcQFxByKNhcWr4yMYm2fKLjaghe2hybT",
  "key23": "zB1mipwrqAMDvBq2PWaqocfsQwxD5P9hdhWsRGaBmMDyE1GQwrnvnrJioE2WN4ragFxayytK3ZwUJtqiStVFQZ9",
  "key24": "126Fo1KGNJ3EoTSRvFxdzdikrpxohrLmfCMEssWLWRC4nqEg5hTtxtpkcPwCmygry57HDMtJfD33xKLtGe4fM4uq",
  "key25": "3VN8G7fkU6Ck2MCyTSj2W8RX5iT4R6TcbWS1wpxVArCy1JtLaHjt1kzTjm4JjeQfKK974wu9q4ds1im9CnRgwNuF",
  "key26": "4NnBoa2ArgGic52KUqcEEJqz3CTXJZU9j2Lw5fy4x3LqHaueAbqa611Z1nUgQXYZ4mAB8GhqCbUcMSUHtvtjPoqo",
  "key27": "4oVMP9mZRUs3tRt9kKZUouztjXDKSg1xYjh59ryPDgQpwsTSznyDi8FYySBVh4Pw4otrkRHXqGu4TkxzfJ6iwicK",
  "key28": "KDmantWBGisbzZmwaen2D6GFxBb2W4WMyByRMxEuTSx23HfEKyfDsMgc68HbbPTMjK8gHsLbMymMbdLwiCTetwT",
  "key29": "2PJBKpQzye5AXYD7GTKA44sgthAhcHCPi2s7FydArDV2QhZgqWH62vTHvytQdFyaT46KxssbqfZTEwisJ8r2He5P",
  "key30": "4M1N2uNWeeBsTXtRaUsZzB2zBiWGHwbbrWjVzW2xvQ9n8eEeHMPDGKJLbu4ywYvt9bmGJEsFACDBMyx1wFgfFHRy",
  "key31": "cP2smJLzYEh72kaESXC71JS4pq1jy1fEhhWCmcybEbjP8Mc71oUxfu2NbzxxCV5FcM7daM5HAawF6JaKJj5Pm1c",
  "key32": "3KNx422qqJqxdK1F2YFymp2vCFXoEMsZHKTHstYjspbRt8nE8Hm2WSpJzSsKvx557kr1ki78XC5oMrifU3W3PZna",
  "key33": "25YSHiUZoMWk2f3fZrh41g2MtmKnSeFjM4B8XzZkYXoKuDke1E2bwSZ6QVV3uikER2ZzectFq3kBrUUGuqndQyEc",
  "key34": "2EmbS1EemVMX1ZyyfNnqNSS27s3bhzAtHWNU6ZRB94xE8UypcEQW3uwWqRs3hgbTnXx7rjvqkgKjXeJBC74hKyQc",
  "key35": "4CrdUY1j6g7sqkW7Bo8my6fwW91SWwfQvb4unpJNCc5LuXtt2SgNQMHfnCCeerWCayPELZ7BRv3FSKWptYkwaSfE",
  "key36": "4GEQrUG1t6CGTrj7ZWfdojpx8xKF6cVa9aEoi5ywJ38u19rBFty7eX7gWKW9UZAXN8eLianQaM2Khr4u2W58JUU3",
  "key37": "59Suh6eWMw4KFyL6d9VGb4Rh8HTkp9n86pE5cmzPhmAHgW4pdz8CbbeRNV3zhYePMCdngxop2j8WtivEECd9Pfen",
  "key38": "2eZj2eFNZXereeZFwH7GhCXMVE1EBUpSnpyX5ZAnSU7z2vRxC6Un4aK4VHM9xFDU9uUNWc3BCvhavsKPvZ5cBxMV",
  "key39": "5RhihDrGWMR27eHS4Q9DZ1bjRERcinqZroKxZ36X1jryyCkzsZRJnqkHuSAdNgLUPwyZKAyMM464ZATTFJrqNKm",
  "key40": "32sdracCrWtyxEGhwvxZGeCV9Khx5uhyGiRDsZEYUdqMmejNxiVVBdjy12ripR56y7xB4Uid76a8HwoSRGJv2Z14",
  "key41": "5XvEBeP5r1sh4gSsFS4ZAaz2FcUrPn5c1ufUSYAR6sAYE7E9qMGQ3ZnZ3xwNi2bpiC1RTYcM9zFat7tHBv1AV1UF",
  "key42": "4b3FFMvpwugTfv16dtMC4P4BuaK8mPAcCoqA2AnEnoWY1p7ypUuKz8M7h7NR3MkBq9owu6DrdgKPkcMzLe6KBmfa",
  "key43": "3rkxRi8nwwDGFheJdmRLe6pWis3CqofyvVbFvSzMUpzon54XV8camQh9nA1XjHhZG3HuDnoD2fPu7dPgyjyBwR8m",
  "key44": "38L9QsMkhHc535FXekr3X8PY24MdfW9hurJm33mGWQNM5mZWXqfGVhVZA5F7qGGvq3XcK8amheU9RejNdrzpAUuR",
  "key45": "3pPJSGU12Htv8NE91CbNCxYSh6QfowkkPn6jEqbMXtNBU7haWqwFqAUgVeWjFqAx9SDDoToN3s5asTeKWPjfVpY5",
  "key46": "5mgRYwuzeu3F13sRGvUa9Y2PhRZeKqZTz3kXf1UNBGe5DN97D64FPBt8xKGqhDxZi1mzW5R9kLtcf8dRZmgCbtxD",
  "key47": "35MJ5PUzGH9FwP3oj3o599xJQ6oWEQ9ruTVxAv5wWBjW7c4sG6t97M5SBnrLFULrciitcycjxFzEPippcYWyChtC"
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

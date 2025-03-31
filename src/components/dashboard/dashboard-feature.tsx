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
    "51pAA4eECwZEyefUDfrqDWnTKxEHiwuYEXfyeLLaQq9Qm8fFt2ZPgBjowHKURaeErqjiSkgoxc1nH7c2SRziLvZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EwBjNToXFhmGNcqLCdtB9sP5wSnABJcguBJDNj2qZB4oudJjDCfuhL8ZpF6nMwco1jHhCsDQJXqXQW1wHVd1Tb",
  "key1": "5zCyw93jyeitpZXfbgSYdD9XWyggFUXbT1uUqBT4vRRAWgvqi4yFBpWpgPzHQxsLCKh4p3Am75u9H98E5S6hgPiK",
  "key2": "3b2jGbUGn9T6xfHWURpT7ambh1oiXzFszrV7toBC2QY3zzKxk8cmPNtmSmbwydWTe7z9ntBgHP4Qja5b8dQkFQnu",
  "key3": "3NS9au5cb1ZV1Q8bcKTM3L35kTp67fDNtVVEwT9pfyYfok1hSDu9tbDpffTxU9C6SKHwwRZPheq4L17nfyHEqkG1",
  "key4": "3szoxaeLxKqHs4dEQS7gwJrZdXCnGWEBvfXXhWJcYw1gK8G7UySSnzVM2L3mDjc99eWruJEybSZQGPwqJoyHGETf",
  "key5": "2AjHhmQW12YyZq2nYTYPfeTaqRLsYHmjjArdqLwkb7DbNzBdczKDjWd3EqyFUCktk7Cm3ohpwsUmQBWBKraf5dfZ",
  "key6": "3PUsxaZZrgSt1rTk385uPn8x5gxwRaCUW84LyoyQQePsmta1uD6KNfAFyzJrgd737KdQQk3nvpXCQ3FgNVp7tFQS",
  "key7": "nMgByrSvWRg6nL8L7KY2P5ChtvTg6Lx3Yz78UKKTpeJdiCbZNEQRyQGfTKNvNhNAnCMJhLGZaTZLqVvrtUKNZ6Y",
  "key8": "3pW25yaxtSLuwCxAPtzGHcM9CGWrX27Tvjr1X21YULsMup5Q3N68s4WJtyP115LTGxiTBJ4ePNYFDrkH4idgPVHR",
  "key9": "3urdKmo3GyHB51ePBazz1nAhM6YTiUJcuuQbh9qSXhLPY69e5SQE1dUAXsfCEG6wXVBzMyN24MfhKMhaPpKKcAt1",
  "key10": "v6BSbxsqoi3VHNvwVCTL3T8kphiC8vdTAmELURRQkYF66YE6HrsadEHYb6tci2wFTiBoDJjnMLy7UEhkoj798me",
  "key11": "47mXFugHXZi55hD2WHfRW6Y6S5a4i6Zr9jzpJmyS3S2bVsZzwG3wNqzHzBzzxTbUKcC6Fd63T8c32aU85XJXbXLe",
  "key12": "67jUrsgToHaLhQ8KWRiktn8zRZDGh4gtANoX6M1SWUnRJqLiLWAXicfNJQ37G4pCNHVuHTcaYrBPW55yr5fouLci",
  "key13": "2R9hsjTQYQH47ZCWBDBP7UoBvBPkRoPu5vQjmpcdZxVygCev8E69ZWCsn6P2n4PX8d3Lbs6NuQ3vapuhGfUGkd9Z",
  "key14": "gDKSUvRL6oL6YBonZeDkGpyUdFFQ6oPp3UNwYBuFGP34f3h6GkdtWWd3hV3Uf9LEe3pwngMiNrPEG9B4E7LfAdw",
  "key15": "5x8SB6mzemJ98uKxw64nqy2raQYpyauhuZv95sGddq4k5He9h3jGDc4QLGa4RMS1KLfmwtiQThZedtPQD7dwcRJo",
  "key16": "hWh3ixgzR7Kaekt5pZVyyutt7WqR6q6gxMnM22cS4q1R6PftURwstnD5Fer3CKkDpqvXQuJdbDUXrnKq4ksaDMp",
  "key17": "4cNBanCF7pP86jzgRpMz3z8U2tG51HHtZZLL5GJNgcsT2V8aTdJEBhQJie3NXs7wfufMTcm1g5TJqBVoEmnMMWyC",
  "key18": "4k2Yz7xjJpMAF8Kc5ZfFyBKDgqRu3EWzjnrbAAyCZ5Ly5MWb8hFi113xLtqhRLHvDkepahBbFshi9fbwBRmHbxFu",
  "key19": "5MmJP7neG5mHZnAAGqdGv6W23c2Q7LKk9AS92aWPe4W5dWtxL9hfiuqfoLHxgyEDqvUVLiJwXCU8wX8xnj7SpiwA",
  "key20": "584UwbyFy7n3wPySFkL7e5kWp6DfDxFcwT3m1mDnBhb182FGA3ZQZemgsEEyY9xamiUbA4FMDbydtxjD7zQ6okhg",
  "key21": "5VN7mdK3gAiXc3GjkJREaNoTXSi9hxCGNKeZDfLEf367HY8BcZs8P5h2R2bZmK6MbBWUX8aPtTZHC6v3A6jar8kL",
  "key22": "sqakD5YH3LixQpWUzCxozu3GPZGy3CKeAe52FcbAPhFMv93YMc6e9dYiZz1urGYHJn287EkshmTZctn5rL9p674",
  "key23": "2mFCyGkhwf5z9pVV6qh6CheEjLTePGFqL2LDxh31NqTR1CaRA9VAVvStyCjBSkgW97xiWCJJ3851grjDa8NFa4Vg",
  "key24": "3SxXqwTWnKsZ4QPnJbMgWuxfGgPHGPcFXtkr6c2ZqQezxDTFXaGRwPas9QfJXgciGxTMh4cmUgZmPWPxHWWeuTp5",
  "key25": "67PJxx1ymgw2hHDXECZrBGisiho7V5hgPBVYYpgspt2CGvajTqs7XQi4ZmwbLuaaRqbz8TLxniL5krjFDAN2gZ6J",
  "key26": "2FgfAqVEmmPp4jX1VzZUgushzYzo7dA3eSuJAByQJP6NGJq2AhuySNBpEV1Giz9qZK2bNfMj2pUJxYoLqhyiu6TD",
  "key27": "3UUvFt88FUYommkDTS6jUy7PE33XBbhViteKVBp9JdyPEdr99BcMnM1XCykS9bEpQAgTYKzo4qypoYbUki5BKTLn",
  "key28": "XzVSfc7GDRbwF96MuMEyaYWhxVMktqf5T7ZEUpQUhLW3PET7ZvFek1xFtQzQvbyKKzTfZWM1GqrUu8xTw6LtVLe",
  "key29": "5b2QMz8VNZBHatDqmRNfWz3zxNs79cS927xGXdvB5D7zeibDNLS1mg6JPrEBmeba3DvanGsMXnv8Q5hHmwiGMkTQ",
  "key30": "2aJy7d3SU8sSDXZdTQxXznfDFrPkcdqBqawwY4AJ3KjPEjrKeZbz63C463M7e5gtzsTX9Nx44UPvuJeP2LxMhgGn",
  "key31": "3rfm4GZDZEwsaS5fMAknimNkvSx8UJqTfNqZfB28jQF6biFvqVDDgLx5CV1oi3jqeV4AmuHmHgUa9oA7VM6fRdu5",
  "key32": "4BtPkpnRi6UMnK1eNvHgSLc4pWY8trH1DoFdHXhxjaYq6xxgHk92eKYXFGLPGr3crLifPwF681n2cV1bVRYUcqdz",
  "key33": "3UhxVSjkaNchydJ3p31ejFNhCMRrpLoWeTjzThvUdXdQRsMmYoLgbsDahausEVsitrxKQ3XMD2fLs239KKHAYGZG",
  "key34": "2mm26iuqSgtLGK2e8dqNNumhr8ChgtbHWfGwQGS72qqP3VPhRhRTGUj89ix7zFecoQxzRE79RRcoV97ArUxfRKZB",
  "key35": "49oRk4wXcpzm97CrLeBjEJmXZJfmengk9fVGZp6BzWZhXLV3wMzFtri3FmB36qJPuBrQYmvwNJvrWdqafC9foj2V",
  "key36": "5Hcfy9kK6LCzUqDdza7UtZqsM5Qdexy3SGuYiCZmfCA6KPK3wRzGqn5X7SJZQVdsxiZcxwHA7i11t8xfn9sPiRUt",
  "key37": "4gDDakBzetY7RSbHJmVi5UxFMFsniVdbXBqDzzKKqaM7MT1zfnz6PMkVKfLr1QC5BSAc2SqsrQSe6FSo3KyX1Kh7",
  "key38": "474dSdy6spxTY351JE8mdN44h8tyMC3uGScPQgeEiEANXKxtSvsf7N9p9WyBWJumyZf67FUBKGdBzDb2B2R9yPnG",
  "key39": "2f7Nw6cTUrRKcqnsrMtTE3Rw89q7Zx6wkTUavP947c6ow4gBTybqHFmhw3VjXm9frZd2GNnh4iJMPekLfpknanaq",
  "key40": "5u6vwzKsZPDqgV1VpP2aHhGPVd4jDSBkTueb3i8QR3mxhDmSzBGY4RJy96q3rJdVyaD733EGyb4sAuZa31B2fBta"
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

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
    "jVsrp3Rtxykc4nY2DfJcpDEb1fM3SqQwhwF8mAfMFZCUtvPSVXARVgRzm5DmCfrgq6ddkzyY7RT6YFdt5FUJdoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpzvB4vrXR8r3CjzVKhm1sC7qrwUnvt2zUVmhyBB2UDfWvci1kbjJZ7kWqPi3SDZeiMHXN2ff7FaccvZ85SeK1z",
  "key1": "51SvafJ6cViGt46zTuotZdq57uQyPtBWT71f7mQLq3YpvKQxRcKDGFqniRBdx6cVeBV618JQ8GVG8gSwk2rqy8c2",
  "key2": "5U7ncRWq6g84YTU9iL62KgBHXaBsZSTVVHgV7JkE5LzaSrrj2zFaHWU6XfNnS1nvrW5GMuFvGENWVMhnR8j7Kt1C",
  "key3": "54u7FYQHuz5p3BkthjmW17JwEcSJ96Zk79RoHKziKondoEyP7hteBHPRkFXkn8R6irtdek4jViKoPBgPcw81hQPX",
  "key4": "2pmE4cRRjk9kDbQm8qeYzZxQNQ3CTLuLbz2prjTt8QBmXqQcmTw9e4LL3Psuf1KP7Dj332AxX4K1kJpjkR5cFmtg",
  "key5": "2gYL9kbE7YRB9J9wCRoB6gd9oEBf4KJS3z3NjUhAdKiKXHxmKgZirQVJtKzSjwRfz2cS7aNuGpcfLt6s7uR4AxuR",
  "key6": "2jH8QDw546HoN8NvZjB4MQzAmsWwFP44fdR9XahzVQzwAJE2N56LDHXo3vYCwG1XgEPsm6eoHVngdrGBenop2ken",
  "key7": "3G8TEreNzq6gR673uNUinpmoByEt5cXH2yXcZZ8fDnWcAxEufbBL4nkD8JgthBHNaEKiZSzTmYYodFHDBiJYiiBH",
  "key8": "58JCfpgzN5o4V9A2XeemNaz7CEkRvnckGvYXsxURV8aeuqpJVRQNLAq21LVmd3ndFjWXuRCVvFrpV7KrjgNbmGEP",
  "key9": "4W12voL2BJ16gdfjMLyXm8Q9hknkqxDqHtv9b8LTrydza8uhbgGAXJxmFamDwZD7iPf77nJxS8JPDQDRbdKeP2HY",
  "key10": "3yNyG39jfD4gLCxK7Z9bDaWnBTee3t3U4bjiVeJPDhjDFHa7XUqFFY8aVuPZcjTXRhvVUDZNAXwwFMpi44G8eU1x",
  "key11": "5rxAVE5cfybQUEAArsYSAXCeVbnmhbaL7dJFabRwxdXsBFUS5V8XBMttjFmdzjFfGrzf5mRxsR2EYM7yBWXe4PJz",
  "key12": "4xzP7GxMhRNPxEpsueoKtSSdyYvbPnTU2t2aNWNxb7cjCTmwb9CMzmvMmcBiTWBBwJUAfc85nTxn8SEQShMC2x7j",
  "key13": "1nLJQAx9WkU6LJHnjv9DXCJTHZqMyCevHm4PRhzeH69kLeFCGADEZXMgLk7PHGmFG15eHns9Rr6mzvd9Anm1F1Q",
  "key14": "2bfkgiUy2LFHEPeMzXLSYyFc7fRNn2VGWG6jxGCEHsgzVCCHZYzqRox4zfvpk7tNoUrDMHWZ5hSGxHLfSWk8eu2S",
  "key15": "5yT9jbVfoPjfBXubxqztMeeNudat1BVArqhGQexHdtTiJzUTobiwaYAycEDoJ5TZR2WSMpE6qEzR4VxL1WcmTrox",
  "key16": "44oa36DQuMcSx5x69mfjQtY2iFCspq1d35C5KbgYHXfiE4uRvgYee7rfs8kCsvTYU2CmuLmrHbmsHS7PJmvENTWY",
  "key17": "nqfsZiM2iX3fdycrYUuG4ymn9c99nsFYmkjUUaYWECf8dEDyXoVeF8uMnEmZjbp3aL7sy8srRPMJKcS4Qwe7Uwb",
  "key18": "36CJcgSxjyf5kTuCQ1K8CLgJoAK73CEnjvQyjpRCZEgZwjVz24FXMpF37C4RjXKpJL8waCjjygNZUocHbUXUM88C",
  "key19": "5ZJgS2gBbg5csrKLzhQAdnUigigQKJJMMdrwozwqQ96m9gto4GcLwsVHhk2NSEwvWdP2b7taW91hXvuBToosunhs",
  "key20": "38XXTAVfKpEtBMaicwgt9KS83RfjNdTxByTiGaZpYczW7FbUSv25hAKe28qMCmUapAj1s489NDt8uY45gVeMBT5h",
  "key21": "53ReUWws3NCvdCzWozai4mFXWiEYYAEgd9STzjd1QYRshQV1eAKNBDktfcxwgPj3KpXYqdVx6xYpUcUs7yR19Vga",
  "key22": "4PkfFe8kbMSQPZQQKX8NLyeRp2y1RMdwnLLnqhMR6uKTq57beB3Bypkx79nyPvEjTQsqx5SzFtd6Yk3d8LZR75o",
  "key23": "3NHJ7MSox2nDEQEyEh46sjfZ2tkmM1rh7keq3j2yrwu2z4Bo38ngg3kVNsM8KoctWayPxSEyBaYP9VrTkiXzzP4Y",
  "key24": "8LWTyomgLZA6ki2bTvTZn9q9U8DMHJkUgvpkcbUHArfimWofjyaiU5QjY8SZUJD42RDCRkbrpsxt2kLZrEFxjLD",
  "key25": "2r6BXUMFq2KWyc4nFTHQZkDPnUCNmaYu4kftTLbJXPDUnw6MVz7VLn3HyMMBfmjAstDnpRpf6YWUhcCr4barEib3",
  "key26": "2yftt4DBtzALDrNhXj9rRRPHrfqk25dLA4fTdcbwowDre9tmwujmwtHFbgjfigajgZfZUt9sbn1CKoFieq3CHju1",
  "key27": "4K8b36EQfDZFwGeA4RHU5xJgbyUFuH92rXjcxy6eq7JmFeaJxrjSkctahn1aJRWjuLuWg2CzuoFkjioKoCgV61H8",
  "key28": "66EnUEbw7QLq6MRwuMGJKSvoVzJUbVpjeXuaEsEE7QwkxeMJzsoyzmqcqp3yxRYW6dVPSebwp435RSVpQdoVXY4Q",
  "key29": "3uzC5io6Ax8znpiZ5qaUxJfNz2XCYxgqjaWoW8KYYfBGULkLH1Xs4T6SCdDp71JNetX9fXEfwKv6F1U3u9XDpSEZ",
  "key30": "2NZj9RHqa22UTVG6TETFNJBwDP4VbGnKj8y36r7bTjTKzCj1io6tdYTEjzTSVZNtrW7Bd16skfHpw5QEAKAhKa2K",
  "key31": "3kBBeSjThbTfXjGJh1kNhT5U8hGxLfq6RXXXCg7nyjcNuzci9iQgkCstxD2ttK1Use9mpdHBK1H3UwauddFMjBdR",
  "key32": "Lg5FppjzJWzVtygzyaRfZqZueoLRcjFqr4qCQEHJb5K7R68mhQSM8j6k4t7sXgu12YcAxSM3BGhr1gEwA3mcKM3",
  "key33": "5tSCbEYLfcNsJqrFdEYhLwS3T7NEuPtJLPe8pgy1h432FjQXCS7KB8DTUG6mzAVfr7PkQsti9cHRtA3JLAeh7vFt",
  "key34": "28LqPksBNrCjLwTMi4X2yw9SPCHUcmYGJTkdz4YQSfvscLQkaYkMvBdW3btWdgMQvAaJTk5Xe2PH9jh6kahVKtCv",
  "key35": "2XZ6JGp9SCXNgR6dv8Cogrf5WxdfTvNoWYh6F2bo2C2kZ3jEkja3fSoDTTEMfC5dBu5SoAono2Twc4SNR7VbehTx",
  "key36": "5Mg3JtrvdEn4z9Bi7pXFv7qUwrZEmeBTTdwagNXgSLkw4785mpGawNq1yhyWhKktcDnxkRLybeMX152W2fA8Zu2r",
  "key37": "mvoNX2uBuMPjcMTaL4zHWp4U35sjbuMARFs7cZ1eYpCKGuWgJm57F1mEqLi65dbQY2SGMkFw9VZWqM6fzLdkyED",
  "key38": "5mRwXoGnBCwgxZrg4J1aWJbinYDif3qSAaMLU3Ft2PgVnkgHUKNdYXCfzknGPTb1e29Ztv69htBDkthM5yLvRVre",
  "key39": "52bxy4XSC6z2BnwBKeaMdKBcbvriG47GvrgW4ohxfaciELS7PXo4be9r4RaNE5nhP3AjME3xiQy1emGHf9eDnyuY",
  "key40": "5SGhGbvMr8SXBRGj5tjjZ69DoUGbxN6S5zcNk7MCdVgYwLX3QTtu6prs6NnEuCgWDgAW2UW9smtuuKzdS2Q9wofp",
  "key41": "5kazkecXojsi7W7vRNBhScrrHCGfdBwt8hui4Jv4JQTHH9cNMaRDUUfoZCfKsa85VoMfCnKhNNYzHuNpxnV5rQEg",
  "key42": "5tEs4WFqsLEj6ZDKZEdudU9JiTfCufVMp2j6aym5UnFN9PAFGHSiCn1Z1iQoKGvcAnZtv8NXL1UaSLKuGFQ2nJ1F",
  "key43": "YKhZNxRU1uKB1C347LdLE9Bo92Gc9AbZ2CWSFXZos8gJP3q2TtGAqkibMjqimT32fHPujCb1M85qsRTyyvbjWBW"
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

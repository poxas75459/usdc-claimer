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
    "bsFPGuwR1sJk6zHt1chpSAfBWzEZrgwUDVUevzzvbqaCM5LrMdX8DP76n9tZX2f9VWrcdG1mw2dWSmg32q6E8gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSxgfeZpAbpUAjrAySLuBnoUCCZpnUCo7DZvfboA7pVPuMnctsqkaEDKkVRcfBSbz9VLgThgrpZg7ZswnchV3Kr",
  "key1": "663nPXmEeGQQbr5LZ22sJPsgWYWBwmQH3LEQRARJMs2MLQAZDCwKhc4kADjdm3c3um1tVhdSgeUMPGtE57UKXVBy",
  "key2": "4tqApJTje1yZsUYE19YzcK2sduNu4BewMhjNtwabRTaN13TMv3E21zwd8HFietmUBdHwpDiur5Db6vPPvyKYtFdk",
  "key3": "67hxXyBBD8MzVCBac1qZGbZDf9hntfZ1ssXHuvjd1E8QeSAZJDfGdvUJuWwnD9pkMiBL4TmeL3Ka1Ycc5Z16tzSn",
  "key4": "56UErhio8DdcQvtvBRCZ4crc2yo4MXn45ctchzNJYf7mQyMsciJgaVb29F9AYdUgwHbAFv36gYdS7T5mRSUX72Lz",
  "key5": "2jEiUtNV3q1tcyvpyYaJoCnTmLoGQJfty5J6ZWnjwfuBbv8PuijHhqLh4U9nfqyvy9PYJTRq5eh8D7Ku1EbHzjRi",
  "key6": "aK1tGvQUCNbgnCN1sqBNHfygxG4Vpz3yF29rbj5ttBGaTv5xTrir5hkn9mzHQCuX6ZxExutieEr1EkVyDx5th3X",
  "key7": "5AmYYmUo53pHZ4iLiMxWvSrkykTxfpJZWt5PNkDnu547YGXCEPv8z7PstnvcSLr8gmcPwy5V94BmWNZvsdgitkkr",
  "key8": "qj8BFRyZxaK9CrYPGH66bXQEALfYMF3GRN658X1JDvfvRmD3h6J8Rf9fkSreQfjNUvKaWD4uwmQjmT4sNRitrns",
  "key9": "5DbvVp6QyTHhN4sP1bm5h2QzJdWyGrpszs5kkkCEyn44SXJwCNYUf6myUMidbSFsBifbdpMfGh4RG7SD7mZXwBm9",
  "key10": "515cWwWUe5BS2VkRaWZr9TC4u5qNmU9MyJKw4zgJB7564LUfa6nsW5s6Xm6dpyxBrJY2DpQWa4FDDoXGhBZ7pYod",
  "key11": "467fQqTqdc9bKvB8YSygYREXUXRsh9cBDodWzPoreWupeUt4ekLQVUTYrQKZnjYe6Vbw6gDrcDjeEgDYX7jntSSA",
  "key12": "5g9wXX3Nq3AMET91HBNbQkCqQcT7sruGFBrCAnhDXFeMMvV7cWHp1B73gJFnM95iiyfnR4oFFme5RH1EzeQ7yyPd",
  "key13": "4T9szSUdZixDYV4MPenQnsZnbbieYfdXUwyd3WhoSHSPxNYKDjj4P213nTsgMXJHdjrBhqzTcFJJSTgYjaowNmb",
  "key14": "3bwDLjQcDpwpvtvGKATkdtcMLRJeWcAS7k1WFKgU5R3tG5oWBjapFdgPYmvZMex2k4o5aeQgryYRcVzTGcPDkiN3",
  "key15": "3cRekBxA2gi2YNRp3ZiKXA2dVzLg5PixxTfohQEAa4LFzM4SAvGhKH6y3eB4mgFsG8HC7QBefTrJDFXPddum5zW9",
  "key16": "2s1zPgbktpcHoUAqk7rqmo7NkgoE1wxb7dqEqXujJLY415QKJ9QdDYEkwVxqpK6Z56UCD39Xb22VKvQpAjdr3PSo",
  "key17": "4TzVui5c63a6Ds7RiwMfHRmhk2JnWqyh7jV2qvLQJokPx5ZtfuobSw4f2yB5TTpbTBz34Fs9uTFVyhZ9zWmnS1qQ",
  "key18": "GzRqAFrkVXC1o8AqusF5bxwKvaDG1LnsWwUwf311NEuKw3NvAJjAddZiRNhq2bizaf3oiJnKE9L3FKwrVjpkARN",
  "key19": "8LbcHwouztG3BsvXFf5paaCLaCzJEv19Dci6s5XyHoDswieoMT4955gUUVgqXQpSSVBLYGuvN6WkTbxyuHz26nR",
  "key20": "4AuEp5mMaDFNxaxpG4JKNkPoEUeLWavxuW3iYBmkkqSdi59Ve1egBa8f3HaSVrHQkysAGJpt37oNUMKPhJz2EK7f",
  "key21": "DPNckg9Z8XEQ3qJCVVv7YYZmwKnANWTRrESwRLtzCt5MLTDaYgMuoti7QLLZEBE6zF3unSJYATcJ6N1zCy1tutz",
  "key22": "3zixpX5NoW23r4je3SFyiQ34HeseJdkScb9gSxDUR6gYHVJaaVeMtmt9bcUMMYoP4eaA6F2WFQjthToga9sVV4g1",
  "key23": "3E693aMtpV8dbJoA8oT3d8iuPYZ49XX8ELjTw5q6Am1gFcGy6CEmGtqEQej1CdhbULuXY76A6k1uQt6LmD8RLjw2",
  "key24": "25A4anxtjSj6gfcbyhpzE6sD24544VkRhfDej38sAGPGdcMeZKg8AUMYmazFHxzhkPdpMHnvMXRHR8thjJqRgDFP",
  "key25": "5Hgqv7wsmY46JZv4NvAb8Wh4ee7WSUzxwehZybvcRWMEUrfpaniFMifAqxyWjDfLBcH6xM9zNyoyy3kJGcTTWBHK",
  "key26": "244vdGKThFWsg6jcPct89nicUwi1C2zTZy58JcHBgnYMqTDNJ24ojdWPUTVM2wDkJp6TfiZ6GWePtHXD8pj7bozG",
  "key27": "2fXd8MPhd85ALPw6LuBs4axctf15wzHVn4V19NskHxgoJVGY5nBFqiFkCwVJ9ihNEhXtJWyWR5uDMN8qo8b4MLDu",
  "key28": "5YG8YDsvUUJdks9E2UyY5kFnUNvbDNepbCq6qB2gW7t9xgwgYvm9agu6VgB4SDVenp7o9PsAEhpsifZKqFpQ3Spy",
  "key29": "2XU7kAmMujJ6EgLDERCm9tsRayNAo71sR6pmnJ3JeR3xhBzcpLzKDPnMvoKmegS3q4TyYEnDgBeoF4MbRqAerq8h",
  "key30": "79zC6bZyvQFvbvWeqQeVcYgQ5NxKsvu5274Ee5jxJ7Pm8TF5otJSz1PRwn5kRRPs7Kpm86A1CUk2LYAaKgQhwKc",
  "key31": "3FUnL72iewNtVhe8KAuC1Vr76oriJar5ZjJFeLAZ87NFmv5xPeBJuwpbq9jBNPT8WLnQfaKnKFMNMJs4L8xSKVxA",
  "key32": "NDejBiomoiguBRdpQc2wD2yZYhFEZvJv14V8yu6qQDs9cEHz8MdG7zvyqJmFXG9PVg4oeDpBHM7kddMdKXc2s5w",
  "key33": "5xgdyoizZCZYzjwi666KMMiRvmvTrUcBTdygVyfKYG9Lmrf5cFn7eUYnFWNoaoiDUYXDY7FNb4nPKFye8RsiMQix",
  "key34": "5Y59LczgaSzoNDErELkB1tkcU4WvB57vAiBLvVDUjDR4xRqm5dGdwKLgkGqkirx3N2E25fKkdgprHUvgjDGDB9PG",
  "key35": "2pgazqJzpXMVC3zZNGxLWHkZzmuJLkXPXEgdriuG6P7bjvDJFwKmFGsfkQAtCs4PxnHfVQ62zrFMy123uxAWviUx",
  "key36": "5DsSogHhaut2TF4M2ccMmUy143eRNtsjjCxGijcQfzuLdenzEey6EqhmwVnNM16AZDMHrRxb6bomMx4zRX8oKYeG",
  "key37": "4vsQLYz5YizcV2qTaKFNhxoHP4AX7YZ5d9XYadbyreeb6Rdi52zkEaEPWDEktvt2gSZSA8Z52XWKry7mtwkibfmw",
  "key38": "2Htb2MQ29SYgGumv2eYAcJMojoYAidqNvwjVuSWJTWg5gh2kmoZerPCgdgL6ar3Xx83XSLZSvrnakccrDTcvq69o",
  "key39": "4d4JqjSzvxcCt899SQVJd4mWkriYK1NAL7noVVsrFmwReVauYeL6xJxB9bMhoSzzxFPZuEuweFYYuCXUGXHd2aNo",
  "key40": "2mjWWuVRF46xth6wrQoXJYKgKFMuAopseyGyFPKbn9tHFQ9ox1SR9s258ty9Nfk11V6qqGq9DwjzArmTh59bvJKS",
  "key41": "2xKeUqPdCcXsFFFUG8kBURV6krehqkmG4wNCeXAr1HgbyN4JUxTnh1iqVcWmXy63JqaTSpn7VF8UKXkricSgjjxD",
  "key42": "3RS9v83Bmw2TkHc9KNduKAmEo4dj8sZA4zuHUt79pYF8ZHSEmhyJmFrQzBEC3ugJKNma1DMGWDJZxqKkQky3V48x",
  "key43": "58BpD6sFGWHpYotFZUQ5NnBhch3B3Xj5qxZ3yDvHScRkwq53cjczq2bQPCnG6nrCQ2m3LDr1UmZZASaWXvDux3Sv",
  "key44": "5JDExGumu696q5pGMZ5GvhHAkGngYe1JptJ7qRngE2hrziZ99Svxc33JxCBAjXphm2j25X5HNMDsZRK4N73g7r2s",
  "key45": "5QmLDG9tU2wAm5rZqKjTvFoEPFSf4bqgRUfk5RWE9DPHLcPbY4wJakH1qveJZvst74oUbn9LicKwpdgW9jY12mNq"
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

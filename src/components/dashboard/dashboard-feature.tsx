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
    "3GZevwRzz8s5B9oYCiSkaxGC38iXCHKkbC2kCR3TgyDM82V3JAEwedb72T164idod3i9tMgBpp4LN46Ze5vs5yHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVw1Pj6n6okuCLokTWumJCAWXtf1ZYLhutfLhQaj3by9A4n5yaMdXqpS8sa9JPhxN2qnHMV8iLHNAiM9pnQwa6n",
  "key1": "3p3JTiCasW21ys9UzwX7Fbmy5DZzQePH7D4k7Xs5R2TcwYYNSyeEsfT6vgUdeTJvhYc5evZsZpxBPPTU2QUfofQ6",
  "key2": "3e57TKN46UZSGHXBtcKp2nDtEmKapLAp6A1UPTUfBqqyXY2yP3UdLh6oJZjrWAFLEgP9jc6S3s22pBAK6Q2QbvUT",
  "key3": "2kJEhfVW3AMCHhCjrQXh8HeiHyDBzLUCJYJXqytxd6jZqULf6RN8KP5NTqaC7HrTEoSEd4HedywJZY6tRq1W2yP",
  "key4": "49gLUugA5XGLoQwCiVMeFSuuDibuXu6F57ySCdfFNLhYDoFBKfEGJTqNm9BozYcXTMWwawGBFaamZ3W6Yss39nHw",
  "key5": "YSt74ujPWP7diWVP7daLYJHXq1Wx5KbTef3BCiFzEZfppyej7Nen55EsuAwDUQhmvegN2GobzYkjxzDLLQvAc8K",
  "key6": "3MwG9bqDfNQGQFks7guXEEjYQ54zhXyzabrNjxFz7RnsSQaULW5dFko2cAb1upDo5emtSDBmvKmcQCd3vDcUhAih",
  "key7": "4VwXrJTdwKLEzGuWdpebCDjuBswAGWU5X7idFWuLuAdptW3m6pLBUF9X1iKL9ibU1dG7y4wGPUtXwzvEbBXKNT81",
  "key8": "3RWN2bBGTTiun7gwMgcAcE6cRpUZ1RFiHA2Rp5Wsav6ckB8HFpGmpCuQszqqiJxv8srr6mqpMf7XCE7ruPr16LwJ",
  "key9": "4LTZuShFuvC729tz1ALJFSJ9vFuPxndEmidfGk5JkyaNaDVr81nY1uLcg9BtH8fhjpN8C3UB2TwFGWU2jEnBneFK",
  "key10": "3xikDtvgpBQpVwAnvvT1cTQafcGLvSNA49dwD5giGJSrKzNWF4wLmyhUuHJ7PuuL4y2yWgX5v3bgLUsDEMARejVQ",
  "key11": "4i7p77UPXC52kYEJpCeFgNjum21hPmoieAKxjtuXJ1k9HLyiEZEukkjCoPY1yoA2mwYbdwmUr3FL8CUsWtr8iTZK",
  "key12": "3oQbwPh5BL4dEydwkEq2fS9LWWkNqJ1nsqUGZpV5WPL2Vzj5CvpwPmy3tg5AkJbZfj7abL2eqMYr3RoPc5Rf5V61",
  "key13": "2mTvipryn78uaudsrnSj1bNdQSqZHYVJWKfuVWqDMHot72p9vw9QaSonuxEyyVtXdHoXyW6crebxSH8uobBnea9b",
  "key14": "28hpFfYQy4jkGzVfbwDHCqYHiMZHrobPcGTAD5nMzt72Jnq53cHEKav69RDvFCDP6ApKD27g74A4Yb9p3z3uQfeD",
  "key15": "5xxYVa7zYJqCcwjiNBPUnhKdxuaJtMDNVzMwry5X69hcW7qPKxa1b3Syy4jaDuo65VbRD6heZudu15eVnBPLrj4v",
  "key16": "3hB7xkhfkZxEyeeb5T8hyv8munzfez4gnVLo7W4T5qbhG69P7KtDKSoxUm8sZxAA5Jtics6BHF2EDXhgcjNhcgeY",
  "key17": "5hncCypeGUMJVcH8QMSdo4FpzBPRBDJxwaEtr5nRgSHYURn8nGc7ocjhQ7Pch4Jcwxi53HypLjUEattt9ZvqY3bh",
  "key18": "39ZBo4Kvahs8yYEUASNzXspUVXdAN37hBqPkRVhYSeNN8F9U4NG5M8NHr5hC8C1hWSH5Vzw2rQ3y68CAGkRQ8MiX",
  "key19": "2khNf5K7ZWe2tu9aTHBCZNEhc7Nq8m3vvT6CLmAtSAb9x8Wc8AR1pjgD1bbA2pvTdo3noVmZ2fk6JpDqMzZihbiM",
  "key20": "ZSP7mH1Zxpjgf1kdp4W9R8E5Mr1Tbt4zGbYjmvKtByQVBC6V5YGm8AMbw6aH4gW1WyPwu1N5iD1fBRRR8Z3jm7n",
  "key21": "N8jdpifE4YMNM91MM7hapK8bXhsGxD12C6XNEZG6qM3YcgmB7afxEqzrSnNCckw1J3X8eeTC4zDH2YhvgSrZf3w",
  "key22": "Rm26c6Nyan5urJ7rjMesfymLi7h7WDaoexsq2Mt81XGLrdubYeqfbre98CepNiEQr6ywYj37FB9fuTJJ3E9gKrs",
  "key23": "3Y1XMWLSrZ6nJUjozF8Kix8YvS1979hnadyDUmD4cXzwJ3V9QrRzph66kKP6z1BStG71e4Uo1iiDAfiqn4fYuzYP",
  "key24": "33XdvQvPbethwHAssTgktM69dN9giuMQCFDsWGRX8btmV7M3iwfTP5LKXBuQncRZ55296RKVuYRrX1nE9NaaR41S",
  "key25": "59VzEg4pW4JjVM7mFvXS1BcgFtMgFE9EkBkh3tjk6Ym2h3bVBuSoS6LZ26p4qyNTMYXxv8K6WFRNefzeuZzQGxe4",
  "key26": "pmXcR9n1staWx6h8dzHEkMy1vBMks2EQiZjXTBdcFP3LfM2PkkedDvDVg6pJuRqbEYJJSdCwXZVddJ1b3WUWn3D",
  "key27": "28LGqiuyGXo2rd8LhZNKcDJR8RVLr6w95ZoErrLEYd58r3TjgAG3du9ZxnEV8YijvJEUBfMfxk9uwwfaJY4Rz25B",
  "key28": "4tAkyVZDVLJk9QFcMGY8kq8bq9rhV5z8hAR4zvTg9UuzTa8UTCT7P4CpHcqHx5eEwiYevygSBkoETuzdj23Tg1FT",
  "key29": "49mdAQbNrLy7EKGqiV42T1Fat7ifPjwBzJgxomrbrWDi8GqvRQNRobPB5h7c6xxW7y7nY3EADeHL5AA3ACYM3Qxn",
  "key30": "49sbEFzRHrhj6sPimKv4H4pvUiCygviXJhYuSvMZLRgbRwcbUtiadL6fypeoZ8kKKgoUZzP9x8d8exmhn2rt1EwH",
  "key31": "5QyUKdwtf1chkfKQjmjUpy7CsBtbBfaqiVXbDfra6gw91WdcJUSNymeXp2ZgKTq7DiHf9EX8XTaJWtPtee32peCb"
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

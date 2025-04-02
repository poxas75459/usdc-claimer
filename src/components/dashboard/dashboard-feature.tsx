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
    "FJXhpUgkX7rjBby38khSYEo9B3VW14qj7wauU2nD4eMA1tJaS54MwxFGEytEc16c5PtEwr66mh63Rq8K1CwPswE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hakWmkAj7eJzRx1KU5fxk3gG97ANNDjj5k7R89EzqWTvi826hR7bTkz6YUMvr6288b5VSMvg1Phtvq3UwYjzHWU",
  "key1": "m73HYx4NXAy23fMpWaJZNz3uUNc9T3qyysAY3QpizxaZ3EJKFYJ6Ue2y3P5qundSGvJ9hjdoGBUv4dpygj5hHZD",
  "key2": "25YQpAgm8KyjS7S4s1QQEXz7hGAA6JJoJwwbzyHS8M6XAUknkEfbwaTRXGaX2PtRE8fVYb5Qw9gRaF66Amh2RJjj",
  "key3": "2eKtPvPyFmhmDQxQRgXGNTq6iU4579TZ5r4JABDHhAX7DKpq5norz8jycydLqYPFiueZzagtQjgha1EJZWrt67Wm",
  "key4": "2bwfy9u3mznNmFYc1UqB89FuqxJDumxR3bVmj1WoYmPbQTK7WhuAG8Zi5TAd93cQevbDDH7UfcKGR9YmdrQiiDRD",
  "key5": "4acTbtfGo5piuLzXSxLLvCFiccZmNkd17siFgZvmFCgkobULWS4omgoJMFYABULRYGuijdCa2rHiAvLrvppGt29Q",
  "key6": "4nGCdKaoTHWjfktytrA7ojGtqdvymEboLv5tos3yZDqcR5Mcr6uTMo8m44h5f9mefc4y5y6jvyuGcpEuQgRzwf7f",
  "key7": "2ukCBtZ92nXwdYyHHeC7zyPqStcFhmCDeMew78cEqpi3z34nEHru5MwjLE9HeQobo7QVerMZCNrehmCaj4XCZ4M6",
  "key8": "3Z6ppDFUHmVVtcF3QHqYvRXX9TjRTYuhPjHxtu8CHfucZtXbwSHpKnhsEuQGNxHL2fnXSVBhPuxKwQPkpTgj7G6a",
  "key9": "2Srsy6ZpM9HE82TTxqsNPhHAFke8gQ48SYGd6h5iP4FwZLDpLsv1KeZ2oqyPZZTzEXMiyMxH7xvPLadsRVwx3v1P",
  "key10": "3yEJmmGXjYhE6aquM8jma9nJSfjT51uv129SYKFXmYhmEq35iNXVmroktmqVJuvktpQVD6LJRjsdatfbgzJb5fi3",
  "key11": "JhYY5q5jW3FAKL7FMdx1eQqUbcoY2nCuKgUdPjWNMVB2jHFy93xtH4ArhKRxLt4AruuszPkZTqFedSTrwyMduip",
  "key12": "SZgLzYX4NKNa5LCaQd5bFJSkg8aMbXgCDPg2Sq6t6U5mJYXxCnQHaPEzYbfUjunKR6iM13sm1io8rUs9njUZLVe",
  "key13": "3aDjUkR9pmgxwZkFP7RLmiBxTUtubRpxSjsC1t3nzuMc9aM2dVVF3AGjeMPGYRXxf1bQa1wP1ZVMJrQVRotJbgS1",
  "key14": "5hA87pV3WFngGpAMCvXWMMZdPoCoMaqaBDn2oowrw6Bveyqbh9ZfVVQtiZZAAEMGfzc1MoJEPNLgmhFcVogxKEND",
  "key15": "52EbREpkVyrPZXo326baSLLNLjSSzNMJdTrfxV9jfB4gsv3dFTWvcrR9wc4LX5BhDor5Ch35wG7VZfVdbaD5Aca3",
  "key16": "2aezwHsPshdHi8JmE3F4D3zkLpa1CKDpf3HRGSGKXc6zi9nBvoExKj1VLG8UZgJhKdVNHQhvDFfXmRyp8JbuZ7HH",
  "key17": "3sQ1WLFdLbX3GB9uMbQ9wXQwSnekFvKfuPd6EWGzwMX61jcVonUhQ2tfopLKsGTHFcDDuZjpuzRiak8RKebgiPgL",
  "key18": "4AsaZCsHqXi6oALo31x2Y1UDguCW86aUkiCVNXoR1BAhvHwWsYwrzWfP7EzwdzkBuP8HnH1zwLbUrgCUwCjGskEi",
  "key19": "2fYz9CnK1DqSK6Npef7LNHMktyJkDkAXpGi6bFFvJorcPxiFTitKo9rdjtRRJmqe3Erfx3Ad3umcCVY3v1FfwhEM",
  "key20": "4mz5tdy1sF3opxvsXgCBAswDwrJHWrs649TTQ1QCnPA39bPofnf9NVoqM1mXahHKSynQw4fS2SqcvEo72sPjqRK6",
  "key21": "33JyrFZAY5DGi9vW8tZtc1kngyVSJe9jvxRGUz9nr2eofsUZPSKEuuUjsnmGYPzYbKtVNCYj2REPbjSHnpvEeq86",
  "key22": "5SyRo4i6omqJ5i52ZMGzakCt2DhctTtDGoMG6Mvq4EY2ExU8bg8BpVm9aifud6RSG9uUps5cAxVVcuPAHifd4c8t",
  "key23": "XVemJ3GHXaGbUrvMa1QGVvMXGixAN3wx2ynUV4suDYWd3znuaD2rjy88ZcHvMfAJCrB7SVa9u89g1s3z6M6qxQg",
  "key24": "2Augj8qETUafC8zSz1MAEHw2Hj1sUXapUafMVtkKCMKyPBGoaCoEB29Y6vc3WorqQwezokQjDUkBiY5Q2PWrJZKV",
  "key25": "5pexmKqa5PgQu7sHQYeEpFYsXdouhoBMQuxc4NpVCPrJHrWtuTheLm9KxuEwVPNcNkvVs63PvzC2azhhgSaF94hW",
  "key26": "LGfwpEcoMN2TEvuNBcYPEz7bWgDxWM9E9EFvZg6F5JhvzRtxaA3t69epegymH3WFMhazHVkZUdRBDJTw4gkCUqG",
  "key27": "5GFo1VZ2YaQ2R4XjNSfVyfjrpv7Fzgv9gWDF5fTHaEKGVZ4sYRwhfca9eTBSBaoj7j24qH7uoGqxGQirD5Rv6rQs"
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

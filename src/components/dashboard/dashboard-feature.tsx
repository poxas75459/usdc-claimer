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
    "2HAUf5cJXohcePZ1zbZ8dShm1dCDKfihFpGyPevCTY8GSdwjmoeNVmok2gYhjtwM5TCybUew5Pt1TAosNum2DVaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HRKFcteSNjTdyspRsjNHcYgyq7Q6fNwUh6VEVHGV5HMDXYhG3xP3XsHpnHNMzPqJ1kTy6i2T44hYbW7PmvEzJM",
  "key1": "1yNcmtmgmkTJv6QfwBLZhoiCMn1RWjKW9XmojP9tmWUSuiMV5o8sDoRFv2DLA2oftWYoUS4kZM6AGSAmDRrUq1r",
  "key2": "3VDr45SEYv6chXzVzxHctBt9wwwwXZmSXB6E8BCcFUpDY3tcxsqt3eiWFVqvfuzu9JDRqegREmaFiQxoGB4xBAhe",
  "key3": "61BV8XWYSC9DyRY1vLy5KWVVSAWcieUAdHN3sJPJhQtYPXmqh1MooWtcWEJ89ESqR5H2SfnbhNyLfwvcB9LHYoY8",
  "key4": "26ofGjb1qPYVSWaTVXi2KNt7Hx6dwQ3FQfhoEw7JKHRVdE5nRzXwKSmhc4CP5h62ZHSECHNG5XAKQhrqGTx55vfM",
  "key5": "3Vid1JSYG5XmwevpVEcLd3yU1KwzT2n3Yoe8ZLtk1d74r6USxG6uU7k4MaZC6Sy54khD3GLVMcWD4dLy2DUzke9A",
  "key6": "3SEsc8uxck3mic344zqTChw6khAxUD85VNeaiXYqJ2xLncaWLDgf3h6bTZxPttLdstrfeqmxxnwRAZgyw6zk9uZN",
  "key7": "KkH1qKkgGgri24e89MhqAr9bH2xYuhjY1pppv2M4qmpXs7cy47245ADAterG5A7R8eVZvRPVRYj9duV3jLi6meC",
  "key8": "2VtyVWVerVskcs8RHf3i53rYsg1hxb4LpbyfRYhtAj9s1NzQAkRzMGgusL1xkDsbktwbgTDETbu9vGxV7tT3f1pf",
  "key9": "wDCceuwj3zSb7UJsxvtauqit42wDyRS7rDi97Dw7zXjNogg2KN4Tq7Yux88LyqTqvKLh6mVwqTRD7f2ZcJvYyhN",
  "key10": "3z9ZYLF2wyhG2EAMPWkoTJ2YVJn3hki51moUDMzPsWVa2qkKS755X6YzSw7WrXRsFCBw1pxh7H6AYJUQEigiNCWD",
  "key11": "M5uMoKBGHyPFWc3vJbV3wAFvuVbQFkykyePLuukLtZLfdpC2WYtRzGGsP6FF2XYaJwH9PWptvRnjxSkDrJ3jFQz",
  "key12": "29nxtEuynC1ThQegSDAvBjQCWLWbAAP3Qb8poWQ3pELeCNKCaSNmqyfUoCLYgrN7bxWAoS9JWPwW6K9LPRXTgijg",
  "key13": "2EbNMdSRgSz83ubL8JsdhKKYfUvGEaX1Gi3HA6SPcgkhgmQbCo4LBuZVWxn7R8Uc39LugZ2KKcAfkJmUnWaa1HVY",
  "key14": "uwzY5vWnCUJbQwf61M9Ls6Sqnk9uzqxboVrBVFo8WHSJNhLWAbApYJRKmFJpFZufJAv6CdimEhE5Ud6bN8k2wpM",
  "key15": "2JoTA1GGvXWkm59kmzTrabpcqB8aQibKys7w5U533Vqxu5dbakAzMGT1cJXfE8J5219wNSZyDBMkEsaujeVeHvn2",
  "key16": "3ek32ozREAx7pJX7FgN6snMD9pAWZgeuRZTgi6F8ejWByb2EixWs4WWXCyuaLEZXUDXUaAKNGCK6TTTQ58TvaQjo",
  "key17": "5XbKQsDMi1e1by4Bf8HR4xVQfmwZjhpxkBn9VSUUyyGARW1LXt75Vaq6qo1kN8BBdkBgyC8Sm8Ljbp3VyhCSnzoj",
  "key18": "56vZZyih9QsmV8oa5SRkMXoAZFMqoeYkwpAGCjs47mwReQy3BZWE6XmfSmhgyG8ksScreyfAhiwXkX74YZo744up",
  "key19": "44ak4fE9wTkPtJaayjajDnWnJqUXaW3iwok5kT53SvtR6jWT4dmPvXcfyR4Y8Bz6MAC573V12VQZwv7BVsnkCfpG",
  "key20": "xJoNCFHVzkRWrih6kbehEFtkTQA6peWv1CYFNrxyaM8uRrNkJMtNdQqcHmGYocNtvG7kgHudTRtFeHsPdjf6sXj",
  "key21": "uH7aHNDv5cBDKApg6pUwoitFi58CbBZuT8evfPaW4usFc2gzThh1DUhYrSe29nYPhdM8H4RAGrivstZ6orjLYUr",
  "key22": "uCQtnxCUM7AuYV26UHaFEcRP7ekozX9AvHq4y3Jrc4Ce4MS2zHC4MP4oEzRiDQGeBvTY5fRiHw5smvxw6oRySDs",
  "key23": "2QAZvRjihyFTwc8CdenDnN79vehsHCgPNzrNU5efJvdmkYAM8Z5W82TxebiPVYQrAQWLYKq7tP1wdi68d64eiQva",
  "key24": "3hDiDswZFm4miMDCiBNaFcxJfuNjvsFxkFjaZxN5amFwiDiPHaQTP6rEAJoSNq8rz4u5CdU9BiwpYUTiaHz7Upbu",
  "key25": "4x6CVTzE8HTwvvhDEge9hjMnQcfHmubUyPMzoDGMUoAzZfH8VF2Z9P5MtzxEqWQQN3TjDF3vfQiMFKDPNDchjpYd",
  "key26": "4PJ25fCecmDQ6uDEdJwiQiT68knJouUwj1j8yZv3CPGoSfa2NfUhKamzwPX6DYjvSftfzeK9iDBEkXKghCzmEvR9"
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

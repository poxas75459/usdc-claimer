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
    "4gCEBgH559ELxLXdkBp1aFoTo9zE6Uxbz9xnhnuyVr2wydePQJmyWyTqbpgPD9kKPawJiJpj4RkhufrYZMme2cTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9P5dacdDvnjUUJUpEu99hEqwniq2KTpYYV42Cu79z8WYQnZcZtms4LPeiNWQwaz38iRVmGz2QtgHmg8CoX2AiD",
  "key1": "47tthPcQ5BabtYMJEDo8mAyKZQSYvdxqmJqDznLUZkHwkcfJUi5BxpqcYETZZrbn9PLgKryh8FfBjoQ63RhteBLN",
  "key2": "7cEoD32xe7Ai2LE5Ptt6m2Bdt5x9rEmWuYrFupode3ponXcS5NK5Q41rMnyByjczA4SA9SrZFmJqC73k9Fzo945",
  "key3": "54hWarsaQQBxvpP6TpFeemAUgaUvbotWqykjiKAi9S2upkf66bo6c2AKcpNHRNeYnZqhCefVHahqvyEwiTtoEj5k",
  "key4": "314UbcUY9N8oKHRSAMwQZE6LqFucDQyuaQpxdgvdBQRHoaiVYYtTcDFYiBpjhsWxo4Y9kiiEfPmWV63wAf3bRE7Y",
  "key5": "3N5fEPP9dJuZp8rxcBviygNnQExMkUsxd8mQxKcm65ScDfzDSYMsaQBeLT5TJNAxtjbYL917aMLT66w5wgQiG5oh",
  "key6": "4pZCaPibQ9yL7nugo7R4VjAMgzBsw5x9qCnfZ8g9exdoFJjcjVKqEBUyWVBw1jfZvqPPUxDesoc49k1nv2Q7ruRM",
  "key7": "4fTVt9ezyL24kiJn8gcKkAuC4ahmS1eX6cyQmFGUCsNdD9Sjzm42BfPTPuoSZrM4U7qButMoajb8xYgqTXQUgiUQ",
  "key8": "2WL6SM4CpzGvYMbTX2gXtigFVcJQKGXJ7Mzz1iP9oRgfuviVUYFYt3r2gSTTUD8WwKx9btAvmtxnpKZtWSsNV2D9",
  "key9": "tFBRotHzxJezGgPmrWVr3YQpeKtVSf8Zcd4mVnunD9P3fbKmDRa9jdQgKF6YYw1cSVVtAnaXuPbu4fJpq1AVAyS",
  "key10": "2F2RWC9CLMMm38WxsZJe2zVDv5HYd7BNPPMds3iGap9XWd1gMiFWmg4JribQLVNNTjNEWry6GowokeBnT9mgsh3L",
  "key11": "2wQ5JFoUdHCrnHwzRSgJqMW3g5x1oQ2xrpTKDv3xD6dYTnjFQy7i8zrNqwK6KkSZAd11UiR723B6QqEmyRjNwU4U",
  "key12": "5fxCZscE6htAgKSs3A4tZaCUA7sDDJ9BDwiRKRpRxGdSaJL2dkqRnBuvSKZTXkTdADQnHzUsiua7RcnpmpohpdvN",
  "key13": "zUUVxLp4LkGzhoW3yctUGQng65fMrofeez8cBim4a9cKCYFHJb5t1cZxKuuuov8idticMaLkiP3R2vXb3F9JAJC",
  "key14": "4wwmNR7ZjiExZ4WiRXCBr4bWbLre4iyFTWn2m56Nybiyf4Muf3x1qaskUD3kZjgrsjJCX5FKDk19N8HBADH6CTqG",
  "key15": "Su2WM6up1zKhaoybvrjJtr1wn4ef2dcyeXtXdfRD7vozN6yuirgLo1jkfAN3trLWYkGsQUr2nJNqRdw55wyTYtb",
  "key16": "2MRzwMdKmrfkFzXLepVb2fhb7n6uBtJGcwG8Hk4ZsqnwYASy2rXNQ5wF1gGn82w1nK8miBqZXM2FKWngmgX9mmGL",
  "key17": "2Amt2eSzGJx4Shgvs4s3ir7dJWHh3ueoMTYcczKz4joyBRbFtVRE5QtMxFDJZb3TGRAtGYf6GurA7oR2Gy1Jcg7q",
  "key18": "dVeqcwuMdVafhwgXMSnGw9AtPf2JNtjrMeGqVZJ9uVR9ioxawMPpJX3v1cWyJ349nTU4iB2Za5A9BPWNC5EjFZU",
  "key19": "K2pHHncxeEauSWQR9qCLVXgReTejjEB3VLL9mxBkEDuan4iUo8Ug23jPeTKxpzGV1juQUthH5d6xN9eHLFSKJMv",
  "key20": "4RLqhMT67jgopEMjrigYHS3sdvwkzv6mB1iJKKHSre1exncZiUkFMN1Gt66cvCfaUwYs9Wks4U6ZBwwZoteQZefT",
  "key21": "4YkyoTCX8dPUkKHavQKPH8Zx3C1D91iP2fffx3Hp1Z3yAatQHYANUAKefgxFRmvaMGucZfYLV82f45NEKc2TjR7L",
  "key22": "2C7wUcAQsPYNWitSQGqyHbvqhDfrk9bG4YgCwawNptXQ3ifSLKhfmRv1w75FH25cA4EqgrmgEAmzypjqhThPosGu",
  "key23": "5WyfsDXJZLqNkkuoT4P61NRt32XAxJyPQkvTkJ13LKqdART3Kdk1ZTQxahtkwm9NAtvFQjQ5Z9SWbwVfeP4SUZHx",
  "key24": "4QZKQya36ouQ4w1r52bLZpewug8QkETV9wtqMhbrwTvQSudexGsWHDNxvSEgtmMS2rxQtVUG8hH5zaqaYz32FMSt",
  "key25": "2Nh1oYXdcZEjnYrtyqbFsGdWhkzMm1dX1VU9sio8DuJwYSYKakPJVQxMHnikX2fRabPykAWVhfQGd8Lps9kMxPmZ",
  "key26": "5Y8jjfn4At78jmT7QZgfo4vAzYjwcNau3hCCk36XRkpFyKLP3bC84mWdB7TGm7uaoGWdx7Cy1v3G7Q6D8Hb4ydRG",
  "key27": "3KGQ2xjBz7cuRG4Fh8D3UeEqbRAAfWVWcL5xuq8h2V4zwFzZ67fDCnPTam7gd28Lu2jUY9UrnpwTDaa9X8YGX9xe"
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

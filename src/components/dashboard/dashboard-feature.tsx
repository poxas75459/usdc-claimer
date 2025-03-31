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
    "2c6hE16isGNdpVNMPXMZjcUCp2RVaWRX5z1W89evYFeAPX8LhH1mGX7eWXgWRMaC3Ss1psaSyJNxA1cT9Kti4Mww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qq9YGjJaMUxDHELzwAxxmP1bQnxJFbM5kXak1ohPE63HKieWUYvGTWbRbqvdkz22NqVA98966yubrydDXJs9Xbj",
  "key1": "vhhoYub8nQkyDUxGkMd6tGNdqeHkrdMm5dXRdKWEannwzWUPK61N1vuYfy2vz3LusHze1PqyPFryvXdcBuEdVsw",
  "key2": "4Frp4y5BFgifjeru29UoxgP5kD4G9BXizg9fXDgTHf6LJcM6T48UDm1T2u59rfAzhqJWgJJJWHFFxCYA7sRAWKdL",
  "key3": "4uVgdwF84tsddL3NBRJ2juQK2Z9BhGctymkcUR61t5ueX3DGt8St8Jv86LgGAbAqYhSNv3gCNSUdyJ3YQ33MRRq9",
  "key4": "52vHF8VMmynKc9HTPjKszTH6m17bpsv9sS1UjbkxRV8qZtJjvLjorhnfHiykHdEwSyeiZTQzDhuL8AxhuV74vH1b",
  "key5": "2cHKVErfSHhQk1EPkFZMEEL2YHw2MZzBpceaDj2ZZVibQZ6n7JpECvccK8ozmiJLp78spMWTxeWrDWAYEUdDvAwg",
  "key6": "5dEEVKDujPCZwjuSsMU3GcrPhAzKqzaVHE41edAj324TwvLUoaR7sVxrXF3RyDFTgc9XB5ccVyCokqp34hcNR6Z7",
  "key7": "21d1RhKn3CNYPdrxMpEpyAUso6t7e5q3ei5D2WntFzYiE24r9HdJawS9T3gubWbqFbpG5D56NMQKNkFEKzXQzUpN",
  "key8": "3S7gR7xbmYP3q4CoWZGLrS7rzN2pVuuV2pgMVq1nY1PQ2uHiTtKwTccDSKwQ6WSeRYqAN4SP6u5Xwyzui28aw86Z",
  "key9": "5BdnwPX1HeJNeEYM7kZzKrjvqupi8BWwAjRhSghp7dHchD5n9g1h9ogFHWANaeBpgRkUgdVgeCe1tApgh39YTGNj",
  "key10": "1G7mG8s3TsmRJfarDamfoGmGdStafZ7GTHkZsdE3b4DzXSumkoTpzkC3c3vTLtULq7nhBEsfTijy23yvQ6ZsRC3",
  "key11": "3vx27LV2XFd1NQFC529ZcFsBBVDX79ta1H1maF4ptn2ZSXWSYPsuSK6nCafqYepEbe4tUoSm18E4xUKcNTbQAyor",
  "key12": "i6UZjtswf4gpoGtLoC3wv9WJpErmt77PkwR7aDBBDKoHcT6bvv2V33jCrdciGFGK3zf7NuqSPabkcywnoJB736c",
  "key13": "2KkZ1T3XsqBr7WFGfasFj1UdciiVVunpg8eZr6dtMgxo81Vu1VRWmotQGqACsZ8JhLDbazUCYQU6XhNHFJDQSaKM",
  "key14": "4JVS3a8KeU57jK1gJxxMLpkiJ1tYduYWwnMSCc2VQc6GKGHMHXGe7PHo56nBmytVXZyRNqXhjSCMpZe7M9AV3fRH",
  "key15": "4iKDq4vwiJJLUQUromQp5pC4ZNWok4HJFiu3STPWaRvNPq4C1EJJonHdBdNuKMACZo5ZYv6tt6XhtqdEJ9USL7tx",
  "key16": "nBcZbZe8YWnErFwPYSxZMHc9ehAjKGArrDrSfcZVKDrsoPPG1sCnCN8mQK7esFFrhXRHDG3UHom1p4ymEEsN6i3",
  "key17": "3V8E3zU4EzPV8nkGj4LoFFd1wJoNYonvMboEFVHwPwM8YXV86yJm9QF1qqLoY5tNChsbJu6AV26uXCckRBVbRNvG",
  "key18": "5LiH8ygXwccphp8RRVzMiYno8QMY9Y4sCbSjx8iKGnY2TcauRNMVAEWsZEYTCZg4KmYZ6WgNoWLM5AYpppi7w6Nk",
  "key19": "2XPExoUJXbzuaCthQuEC2fDDxrtD279DmKWPo98oU95X1ZYP2vQzr3rsZUjVm8kKbhYcDrWJE6oMcNovQRMdwfyA",
  "key20": "2meKMz5hiH5KhxTBNwEhTMjmewCPq1G3k5vXVjgKyxaXuPPFjs9rsogXSEcgxM824shusU7vxn8HsozSWM1BaSa5",
  "key21": "5ZQ2rX6NQqVR7abQh28MWpTHdvBhdxY73xwo64BJBe8cQ6ubnFxqCXHc3nKzvPCcXFPJKtVPszHeEMzxP7S4HPzm",
  "key22": "2ULZXXtjFS7GAyyJCJrK32UQ1xMqfg2njk3KbU661JRV8feJ9BzSk6tAaZhqZeU7dwcEwpNxYV32hEf2sTyXSzoF",
  "key23": "5iAuV3NadLXz4Tu2Pob88xrJ7UL7s8o5xSBEGMQeEPismRMbA8iymHFkRnB29nJbeyGKiBLZ5o3timrA1YwGVka9",
  "key24": "4A1aqvtAuG8FsaW8VbkJbUxY9am1uCDMUiAoUwdUMox4nmm94YFzp5LuDUUxYxvgECF6pABsY2BLxVTXUezVhA1n",
  "key25": "5qFUPKQTUZp9MFB2stU6LZqXTKMP3n412JoBxxa7BQA1mVj14LpkTjGVyxLv91aS6AXo5RLhRA412CK9t5utnyb9",
  "key26": "4WzVk7Zh8CXfMF6MGJ1ibya7kMjHFNsvAnMto7YpFv1MDfyWAhY8AkQZTVPyYc1wvnhrfXKkg4JQcM3JGfM846t1",
  "key27": "2ZL4Gt217xvFtSPjE5zX3x41n1Dth48wyxVHFDkgFN8nzHZRGAS9RXwLgAwquyPuW5Lg7RLbTWJC7EXeS8Dr5rfY",
  "key28": "5V2W9qXjYU6kXENa8BR4cS2NQk9kGdqYFMfAaQpcbeHrNJYbcasPwrEN1hVUsbiPgtS4qwgTKokzycaV5mcjDvCQ",
  "key29": "2T29EZ7jfWYUSG9uNGaHc9kWj7EWoZdXZkZopUtvS8cneDfDugXRwSRVzn3YambYqWK1Jg5qBcBUjqo8ARX5EZyJ",
  "key30": "4tK8xszkK3uwf3cvtijj5dXGs5PoDpSiVvjyJSWBW5fe31ViwHrA9AKiVpzqvm9uMayHRW3AZRyip8UqrmnMMuST",
  "key31": "4VUD1C8hu8ry1NkJ83V2ubc2c7YrHJ5jiXnovxYrez3XotgyZ2KFXg1QUPZevVJKbecHk4Bi2AqSKhbHHzGgHKtB",
  "key32": "54ZN2pG2GqwrgWFY6o4Lugh7DMPXTWF4Wp3MitZDBN2bTQEr94XusW9LKSYYfviCTongneWpnmySXoX7VvKJjd6r",
  "key33": "LN6kMomTnj9TXJiYfzD2ybLpUNX3GkKd4szfDFDpNSZnXLDJZc5qGzEzVAzvqnAeE6Vj4VEHg2V3mgZjnppjvyW",
  "key34": "4H93kU1vCkJc9i4zQ2GqwFcw8isE2StB4rrAE6i6u5aGocNyW373K8YT7ubRiNy8jYJFyzfVY9rqRjaBkRHooEpx",
  "key35": "nP61m8Wp7ynX6oAPYQ74bjvGELkXah5bN3ecrJJ1nF495XUvBPc2La1xBAWMvRPZWXTjWRTu4huqVjTgvWHLDX7"
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

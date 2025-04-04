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
    "4WkZ95jcES7zytPA8QTEtma541Y6bFzdybt7gMKyxx11vTbxkLiowB4huj2vXn7gQjKfDGAoj2xReJALVrUm3JGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNwrqtUWfk16eLMr1Vy5YjK9927pzWEwRtd1NY4h7XKVqqmLziSwK5yftavnkCXnJqz31bVw7wht9HDn9hJraT",
  "key1": "5LshkSmYTzbKeTnEsqDQ5FhT7twHy9XKaToTGZHHxaGKkQFMzEEMNryzYLf4MGzHeqxWtXfTYcGTuca2KkaSGR8i",
  "key2": "2T2TWjMr696Yw91HyZMFrvwenWmTCa2FrPTug1SMoRfj47vKXmpwdS5v96fgh5WkY5SB8JzT25XR7Pyfq7mQbGs1",
  "key3": "4Nf5eVuvceCVQwKDfSEZ1swfBNawe8B3Nm8ffHwbx6qvfLKH9r8EgpGJsYK4qLf1GSFGchaZ8av1eitS9cfiV5rq",
  "key4": "3UPjYvfmjTbtz3GY3mNDKWyExSQ2vgX2spAbbNPKu37XCfmsLiBACcsULEaGFDG96H9ejb7WbkwftuzxEdBj5ARh",
  "key5": "iBJkdDEwALZyERWaqTbHGpGNTLQe1YzTdyad6xtfYJcUY3tzKBT3vpiLSPk92mBwVniZYSguaL97PHA91zj7MGJ",
  "key6": "9C8wTiSvPXLyxUc1j2U3i631AaBnNMMCoNcTY5dB8Va786b7XETeE698iW9J6bHUUaxi6Xkab656KyVmg4Lz67f",
  "key7": "9bQhcUTWL6db1sGgvpQtVQQpw2cPzq6FnBFk4DBKNsXoCiPsiAFpPgrazWq6g4L9G46rCjA8r7evdLNLJMqNMhi",
  "key8": "2BZY8KgsTjeXR7bw7SYTUHAEgQYTcnU8KSJgmMtcs4Ldsfwov6kM9vr9niLJrkDuBZgGq3MQNBdksBkUECGb3yfY",
  "key9": "5nYsjKc1pbfu4ptkdqr5NCEJam6essLFzEBaoTk685MEqTHrnV3QNEdaVmgAEitYFMZZ3YHwtQzNRipajz3iJoCR",
  "key10": "jYvq5VrZ7eah41XWYvEioqgckeddaYYwHxL2qoDZKcZqJMzp1unszJxWyVWcFbQ1uKWqzK57DNSCv5ngTzTXcc3",
  "key11": "cKxygek7PgJDRXZzPXu1f4u1SNvbn7MkNT8ieNoLwNTw6NyvUnBw4KSmWcw3ByAmsrQwYQFroDzV1yW6c8zjHYU",
  "key12": "UsFtWThxYgNdzXbJyy1XqaBwZKzm9BWmSuFWvTMURcJ7PrYqNCdD7wLBi2HE8Fge7BrzinKPnFHzNkbvVZekN5e",
  "key13": "4fbR7zkReJcVtSKarHd2oKwctz9qVCEBnuF8tmHyCiKbdTsgBugDxQvn5d4HfV4tf9H4YGtaqiCYT2LeXBT4jvXH",
  "key14": "ewwzZQeEn5ETVyZndgrCi5722MEajYh5uTev4w8LPBirMuTLU6gi1ZWB2E4B1gu3YmdpzYnF4RDeKr6RV9ntY3n",
  "key15": "3y3KnecW4DJKazgv3HJna8L5JGTDMGLwvDwQP5TTghjzzhmiySSAjGQTSSNJ5Yiunf9dezCKgru3cN51HW7jUVDV",
  "key16": "wq3FY5M3v9GTJT1Tc2gGcdLNn2E1HbW76XwPLUHnyrEcyKox6Xu6HLBeGuV6NfAQJzbJxVM6kokkHeyhcTdFvDj",
  "key17": "UaCdVPzJchDGUFrEqYp5xaSTgBpYRyjwEgBkn4Y3RCsBwGpBwDo9e6MXnPw4oMf9xLqYRQ82uwwXbMxDzMRe6Dv",
  "key18": "4HTn4Yc6gXQVKQpTpvgEyPCi9cNZJtRAnmzJrVWYz7Bzvf7bLep95wKMkaoWNJqyg4bdbRSbtxa9FdJPc6MjZcvH",
  "key19": "2WGKkF2W8TK9qpJrKAanMceKRNHBHDPm8yJV8NSB5q4K4Xt1MZAPotNG3Y8x2o9cjbopoykNrXTKfcBdt9bbuhH8",
  "key20": "3iftYyQnX1TApj3GSYjPgKp4Dqf8eNpEvRPWgM9B1x71XFoQQUn8LTQYr2BXfUn8BaugVuPtiF5z2kV8Do3WS6ia",
  "key21": "P6dej3p3LQadjAKzExjNTLtgQMZzqDTEabghXa6PqLcfpGJ8G13Etw7WPxUJWdL7y1Gwt7k8ZCZBgNS9cjT52iZ",
  "key22": "62gKBGmi99xh6pNhQddDXqhwGMgcsAG7RL7AM3omBY8kQWG3jxjkXjhitqtNRutWPAN8W5SNzmksGRtykdCbvMTu",
  "key23": "4SPQC1EmknS1cnYqtR54YutrmXs4D1ykcznB8LAiUxZJM4WAfmXy9sFESQ6jmPJQdMeDQ2QCJbfo2LAtFA7muMLc",
  "key24": "5onNRZHKxrLYEKe7nPGgkqd3Re2wXoYYGpSVKsqwycUJV7QgxmZN86ihMaiZpLoe9VMYjtDdf5hjFLLg6C34Kwwf",
  "key25": "3GNP88BFAxDHuRsZLYvMXmzPu3AmxLkHA4ctnkZD5x4KPR2Xmfd13ktYSEs5g6HXK4fWaCL2KzwNoJDfEvNNcGCs",
  "key26": "YbHF9s7CqCEGYsmKR8ihiz1UVfftypE2r52Rmrjnos4cuHArjPFHji5e4Fx4e8tGtBu5mME12m8jY6AYeWhFAPT",
  "key27": "Y1SED1b5e59cesAAgoH2onnVKKibxXgAyMB3n9jMC5An487E4Y1tSAgKmT6y6r1bPG4cS6fBUYFsWeg8LcK5LUk"
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

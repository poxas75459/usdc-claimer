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
    "3c6AMDAJobL8JvmhgH6Ns5eWEYRqXYnyVhCSZoHvaCdYV2rf6f1iNDujHgoe9Bkybb6Xo9AKJNZceBSMVM413Qkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EkRC1Qevm5vKCcrzTgmN3pLkLh3dFXwBzW234ehu1p6nrf7W1C7VJpTExgPPEWnhbJu7uRjkPeA3tU31aWdrWRd",
  "key1": "2Tcd2a59xnmGGjiAmKvCDsHpyGAKAMqNRcoo2zRWCrLxVBuQCRsnrkyqZ44XZJnwfiaKb12XTJUewaX53MxPp8dc",
  "key2": "wjxA22S28k6xR2NzMM7EqQBPXDpRar3Qr7UvAYNG2DQBH7GJZcL5JemvMjiSKHaMKC6UskiMxHXEz4xBi4wCFT3",
  "key3": "2ygGGzvCDmHKyL2QE6TtYMqZWNtXRP5YBZveVx2iWA3RFTBd4zFwZMMgTMyp5UNdCk39mXJe7z1Td3Ek9JUCsAE2",
  "key4": "2e3CYzSzEQcKMdygtUXodx3EjgNGtRXZFaFaMep24GACL7JSztBdR33ba3uETbmGKr9oMBePfw5vqzgLbJjMSfB7",
  "key5": "3pkYPyrZW5qcGi1xAbSiGiFD86CajwiGuJ2CW9Tyh75YKj5UNnymBdyWyEfjjZsw6njZegtCygNQC2hCcC46Kus",
  "key6": "2s3iuzEfFnaUGNAAoTUnzDC4tFDk3bYGZTFjVMYAGm4155d5nb6YVFzM19UpEvXKdhVaKeax5EZvx1ZFo1HqFfx7",
  "key7": "4xmWws5NUnwCEz96WvZQnzssuEuMkRoQPKwFMeaMvxH4JANfaYuLgGB6FCkLhqBBnk2dqKEpYRdACXPMzAFfNxjm",
  "key8": "5U8VVcJg6gHoyCBSkSPh9WovXsTpZJeACQPso7AvzYUPM9zHSEoYqvrCSg68pVLdr7iZHPMHFeretEe7XiJgXwNe",
  "key9": "4odxkKW1vGJVbsMKZvXrFr6oyrc5XK4YZrBibGcZhnuRFdxcyyxEWrczdaaRCNYRg8Vy9JXfMmaZxoLGpvz9PNdi",
  "key10": "5TQnj3fsuAFm2qp98v4qeJCYJ7eLQp5dqmGLrHebAvs6LWfFfVKCsduWu5HxaQbjy4kqVPUsXgQUYSmAGANxgZzU",
  "key11": "59BX1G1GoTz5n5EJbyVriFrwU8fRCAU8URYZ6zAj9kUYTh54UAavQabR3yesHCfJTBrcDSYxsjGhjMZ5xDFg4upi",
  "key12": "2tgQ226ewa2tmfEgZRtmXSyxyrJSnmLJFwQpzqis88BLJ1Ji3XNcZqZdSKvCECMRhRRY644jqoER94hvJfdeaEyv",
  "key13": "658Hm1ETRKTx7tQbjwqbBbqdnmZJ2cc8hRP6JfJoMCpWNp4jVgGXJssxTFdJBAuFUdM3ZaDgH29fLpdoSH3jTiTR",
  "key14": "5kWAF2FuVyKHaPTK9bxx3q1nHbzbFmiwWwq9wUh4ArsixPwgne1dt3Zyt89cJpjzJnzwpnE4ENZg9keCSzYH56ff",
  "key15": "3jn9iNePzSebrn9abrjP7BkWBhuCCx74f3tUo9WugXv9csekW3no2X6dBj1X2zx3mfMsnVswqVKeoMN2mGYPY5Xf",
  "key16": "2FHggYycELx6fDA111nTAXGMWWAz4QrVk3TKBad63VYv3f8YL8RpV9pNSKP7yY6cLabVJG4utkQftLALiaUnfcwQ",
  "key17": "3kEX7rFh7CCXGYR8q5AJecowPkAYpW4w5FaKK34mnwmzfZzZ67CEHgjDWYkYXDA3jc8vVayuwjPnYXUeRrjVovUJ",
  "key18": "4NNdzA2Nxur9E4qV9aSfC5tEU3actmokm6rvvsNmHdLUjt4e349zP3uMz2EJF7uPezr2Qtd2HUYKTLKcJ3vj6sJN",
  "key19": "64mf9b64oeBT4mx9aBfLivhCSbBaeUCM6GsUwhprFftZgnHoQm5gdTWnCEN2vTHqm3yn3xLCRyw3BcDomfTuFiCG",
  "key20": "4C9ATr291u5zcVqavnWRoVg8xKt8a4ugYjAyGZx5fAeJSmQ7Z9BJ2ioWa5F9SiiyBYg6kUqKKrRSrkbLoTnQyWca",
  "key21": "3rUAPtGCHgB3QDCU67fp6YuyrwFkqg5bAFFCAmy54yjRTaTqi1BJfetxYE457Cu6dKHzPyUUtS2XFywaLjMCcuer",
  "key22": "Uzw9NoooSXmaZcEBNdXxse2V8erbCVciDYRgmM64BQvZvbsUbsSxefX4uJ2c2VgGZTV9xSUTZBwtEXvQPh6tZWq",
  "key23": "423cB3HGe3Rhd16Bn1eYDkbsnPH6AkcX9Ta88Yaip5nZmiHSk7UJedciefrrvqGcWSFhcHv8DUcKaePm99jGkFKe",
  "key24": "YsdrM5F2xhDEPnsJ4ZtecjF7yfpGgTyESwhUL4P7P9fYDtAFVQ8c69tK1siFNu982gC3THiNtxG1dexFqk7Vdb9",
  "key25": "KKYimCDzy4dgmP1VdyJubXoS66yW2LDJd4RxMYgADzqwscvFVnL6h3qQwGNJSqSJTWvkZ5HG9WqsYcHpeKEdQDz",
  "key26": "5vGuFtFM6iS1F5p7H7Ks395UmLXVmwfAJwTiQNPb87quVEraMq2sFdV61ewRicnnHAWUa41jehxvEn8PrLCANNqg",
  "key27": "2Yb3jN8CJ8ps2gBVj8AGLHYsgJ1BHiN1e7XsX5JBF9TDh3UWFM6qfRjgpJjbJ9VhXPvyhdWDMrQzDrHxZ63HR15b",
  "key28": "ejB28yP2CV2c5Nyu7aZ1E8TVziSuaPfe3Gcpqav25JFWXhGTSE18tYrzxUD3P2C7SHxF5jPMsn39bUWVAaSyYwZ",
  "key29": "jhgG4iU2h6B7HeB6GCa2HMdu6hJrdQp634Ub4tdBUC5MXLHWYoEoufRHSeXXhbdXxH79xVKUt9ZijrEiMnoBiuq",
  "key30": "21QZw5SsHkniYAiRy6FtMcXswGcGznzsHirq2bF4jxunmSH35uhZwZd6KNoFGTCZjVk6Coqkr8LiSo7bBpFSs9YL",
  "key31": "3YhZ8Cjaoa4srbHGdhXN5cvbowFR97BPEyCAkVDDJMXLGc2jAWh18EiYgkpMxVrHGvQZvxEwrPUjvutY4L5Wsycb",
  "key32": "4M6vDNn6NKXpAmmnjEAX6kmfCR1YKSRWEynxAQc73xF8soE1bSmMQqWwqWGG8q2XgpHgsr939cWeHZmoW8N1sGGr",
  "key33": "3BivKxbgJPd1ymCahsaNj6jdpiU4WzQbHC7ibeVCeQKUjTwTRqtw9dPXpeD4Q5bBAvn86oCfeMjjED71AhcVtX9E"
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

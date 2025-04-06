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
    "4XYCE1GGNckMRpH5R1By4jsRvfgkzXLHja8VjRBCxbqQaZpghQzRKvdccaoDDPB3bK14s1tYpTixC2hPHTeoD85b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mjn95GjvZU4f7qv9UjUYKdN8aEQa14HrPGvbojcUCyCbhnjKp7rKuG8fhqCgebuifHcy6pyAqvn45wonTuqmDLT",
  "key1": "2g3Ax4LZtBJVkkAP7A6MnvoXKJPafcn6W3bEimTPPBALx9hs7znwMWaUw9ArT1MaLKoiAqo57ahkxkf2NhZxVVyF",
  "key2": "4Qeadbg6on8JTH9Tbh41NZjJta2xMbmwN2DgHjRKYHaeitqCdHHqn9Nwd3sriHLvJf6y8eTD3NWUKoCdUgtsAPKR",
  "key3": "27MTAbhV1cPpuCjoq9WrWsqdG3XJzfrJ9Rvh3Qfg8mbTxR1BX4jy6K6crnKGpukHac1bMQf44dxjD5Q63Nn19SEu",
  "key4": "a6btkDT3XsVoC4xoC6WyKFpwwYP3xjHoAmxNEXNwyivL8M5AtBMJN7Vr9zi6J9Vwov2YbeHD7UdXUCsW3kqXszu",
  "key5": "66ErPhHbbgFLnTEB1HVxioXZYvTvkPPD746239bhkRkUcQwi9TBcKMvk6ts2XVRiuWCWsNyDpm4RR5ppdhFRa6XM",
  "key6": "4a4hNZ1Vi5T1xMyAfE4vTuRwoZRqbjDzhyP2Teo9eEbskT6wkDX3wJ7aw9vNs2RpynCMMeKxpWf7yYHH2KmyWmfG",
  "key7": "2bmNuAb4Z6BGeE7dohBGsNLad7KkY1oikdVxr75VqpNyEybE2QVWErguWT6yfkU43FU8xwCvkV2zQdN85RLyhdXw",
  "key8": "2fyf3UNmVwLxZoaEDTkUefFXExrv6a36VbxW98Hf4RuzGCmKjT6YAC7zUuY4f3xrFiYX9dV8cnosr9GWpig5YMRv",
  "key9": "yfhJRGbrzqYo27PhjpEBkpVsFiPZKCWTS8VPTGZKUntudrTKX6eXo46exLAzpAtY5vKbvEuzYFcBnNDoNvKJZDu",
  "key10": "3f9VLc1T95gNUqALW4FCZhFjAXngb2Qc3qhF2Jvr89GaKWdjRG8UJRcTtMuSLLMhZ66fADQqCMrWUWBRwbLTfXVA",
  "key11": "2FqbqDazvv1XfBDJpHDGDxHZfHhGxeP7UG3fhaZCSHzcEGxmgZgz7xxUjNYQCHptCyh7mi2zKYLjBPq49xpfNQrf",
  "key12": "5X73YBbBQRtrTeGWLHCh1JhgUq79ijpwTRXpq9BH1JDiTx3f99voSayUspSvvrUXAT6ohZBpF3fxm1UxRdY7QTCR",
  "key13": "3eLiRgsh72ZNH7gQP6NVuxv6NuL6HXHMEdg3xWiTK9fAZ9wAKeDtJnjrPPNG6gJWBNPTo6zGrectjNA8k4myifQ8",
  "key14": "3Xvhn8n7UeffSEQmb9o6DrNZEeBxwxhQEZiaZXZmGfKpT3aoenpqNXPcMvnCQhpdJ6rSt4Xs3h4LxHmLTbaA6MUt",
  "key15": "46SsEw3KRowiwNhq7CdcTVXXyeHkv2d5TrZn5Pd3VbZ16VqSdqNXVw2kNQJTQRprjquMaaCZkzgKyuEFwSuNYEbi",
  "key16": "5K4oqDeR5brfz4gTa9VYaGHjt4aYdhSviuuQV3csCNCXToVRS2wpaeDnov8KsGtdiELWgvfvQ3d6MCNMxrVp1sZ3",
  "key17": "2DYYrYV5cBG7mEavo8fZbG8c5z2YXdSKBt9Pw5N1xbtpsFemQjpw7D9nsvi4RbD2svB4HVAJ3eY4bGBGeBvtocHu",
  "key18": "rsXaj9ePjaz2uVs6dkzBKsszHnhouTN5H6XaZ6iswtFuttwm5Ko3qBXRfVqQPyZFS7rEceMDa9XjKpzmdFme1yc",
  "key19": "2ySGRpihzqiz39H9z2Aib3iuMmn1hD9snKdE2ihxrKHAqb7tuRXY5GTBKZ4CkxN1xfv6og65dsSBKc2Yr9W6uX2q",
  "key20": "5sKBDzMBYrhhYPSZgmbEMrmzXtnJRgAF6P3PjHADHHSZiX1Y6acK1Hw1HhfrgzMHdUb2PLayuw5QtHqthxiNrjv4",
  "key21": "tj4ifjwQHA1HJcry6xcMDRnUamfyhyUwNHLxvzgzz1kduboRt2t4RP71NaZ8FR9B3gVX4younSD2GzN5w2ViMXR",
  "key22": "5mACpdY8M2eoCtEXNaBtaXymJSkFDqDmugSE39b9ZTGCQ3QJUoC1RZYaozioK3mAtrYr4fU73ixqhqiV5ZaH4ito",
  "key23": "S8qwCTk4hCEFYYHReyafrBpfD28SmfiL72uEARcobAJpeP4Asgv77aeRoM5CUxTrvyC1wRXaG1EA7UDsNya6ML2",
  "key24": "4AQi4oK21wF8cZNeW1wsgoZ2QgiAGkJEzp3cGY8YJkPkL6NpwxvoSkwCHdJmoyctP4UiFMQJTPXM9LKfQc8QxBtp",
  "key25": "p7Uv3N7CNtnTHBskXqX879hzb8QUwi2G9qQ1cMLdLwPnEUZKh2EBeXGie6ucAkki5DhnPJ9krxuuTLKNwPoZWNT",
  "key26": "3n7ztStgkoJZ3q7LNKEgQ5pJxthjkddLq9oByPPChFXu2PzmDwtTxN6Z9hRtHm63qaa4kAqG2GE78UQ9BduPU81p",
  "key27": "4qk7rhx89C5baf4L42cyXx6876LaQQTyWpKRodqi5KEJRNn4qnUR4b8zcLNxsKY9vRhDotiqLTjUzFnqm9zu354d"
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

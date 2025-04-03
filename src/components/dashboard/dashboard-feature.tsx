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
    "4QcdQdYAztwVeuXypwdfWAtqmqcwRXUd4fquGUhwQoSYSv4bZWHMyHn6rCXA2ezv5BMWGGqSJhEd1eCSHLzayCBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmLW1ynK4nPdYdRNTTUwKkZ8ijVmEM6s679P19nYNEatoc8YNaPhiJGpCbZTSayzeDGpYFAnxZkGjofSzkxfcXN",
  "key1": "dt1tEMo2rauRDSeb6awMruE2Pxbe4xZ9EVXaFX7BzXXkbfru3H9oYnMvgAdiqUDPQgpr5TmsvhYu24ExkPuVAoK",
  "key2": "WqMTred6pYGuMiwqZ1w994kZKL2X6r3cAZNzMRsrt7bUEF7nQBk8znTg7Xw8GYLwR7cLZSpNP5kkHBvtf6aymNr",
  "key3": "2AZ4Y9dTg5oJgEBBH2j6H7RyNz95adz6m5BVKEwJv1bDYj4MgC5RgUdFjNoL3u8dqBWb4pbDoBCLvVqFof5KHT4W",
  "key4": "4hzba872KyyQcxjEeWCQ93kxJop6CHkyPKUmNdZHpUdX5fZPJjYsBQye65JaygBoyJEG5yR5XBLborgBvDvPn6X4",
  "key5": "3z86jv8KqYnukrMHfotqsYvZBtn4uEiMafJZkzptXtseZENZsWMP5NLJM6HyCcvTgicQbgKTRqjMGjqxdyQuKJGi",
  "key6": "574DK2Q3gRbBetMepBDgTR2VN252T6yaACkQs1qs3rXhzjrQfvHRMcPkrKb6gngaYQnGnPJxMYjeHQtrpUQgGn8a",
  "key7": "4igstMF3bvwFBgTo4efJdSBH17ri1JadJ96X4gj6o6eDDN5VYwJ2sDTcRUm9tAJZWCetgwi5Bp7XbqK3hgLAQcFr",
  "key8": "2nADSoBpLk8udLiJCRsAnt8yZS1JNMz7VYTVccvCra7c6CTdhRBtPcVr5YajsVB8P3TFJe8ybkuji1Warg4AD33y",
  "key9": "2WxGvMTzVeCUbJh6BuitqggtCjw2t6TX88H372uG1wuNL2kceB8aZv6DwuJdn9RAM9bfxuxnqPuZ9TfnFRduUEZc",
  "key10": "3WyNDJLJafCBiyWY3iy475g7WeaUtKpSCpLEpv24KoDPtfHsV9NVqovFRmgzwEcaMB7eTf6dJ1kfF6V1Dvio3ozn",
  "key11": "2Brv8ZQi3zgxpZ7bfasFuZvhTCWtRzAxj7efSvcUvypyZei2G4RuYFr3qh4yetCxxUAf3babbLYr3xy9NQYLh7wH",
  "key12": "4bPfPHAUNdgAWfPB3L1nxQG9SmL836AwSNYoXg7wW5N7PHauqs2FoEg7vbf8J5gmaH7UXwRX24CMHeQtS1XW7DYx",
  "key13": "2P1CyeUMd6WLVuCatoJHaNx41XpzjgXGnKfuZiwMTarBWD6zAXYGH4C42sVaHNTLYCE2Nq6J6TBq5CzLLcP8N7HV",
  "key14": "4oKjFifRWfAfxemqMHqcx3dEekckcS9v47Nu3TUiPfTnm8ACQy9zdTKiQ4ja3d8oQSYvK3PDxGP6GqcyDJxg2zTe",
  "key15": "21q3dnb8zagoCtYKYWJtvokrzEWG7Kk2aXEAWBub32x7R1d1j57JTMegfGKQ8CSmevrgx1SXjHHxUaVvdV7z5KHQ",
  "key16": "32K7XjaCDHWFimBSybfX2anQ9btD64KZED1JgDBVDSjvEnLGUADMRqdW8yErxdEuboGYBDPAPuxpd1rYjdMx6mEf",
  "key17": "59XC2UxFapqRja8nwhr9HDJf4H1YMXQZWW5vgvBqSQDaSwXK2j7mRCkBreZbtfKYmQV8fCAsonVR5FQPh8MHKh7L",
  "key18": "5zaBxZEpnZKBpyrv3hqmHs9b8web8jnAy9S5JuUgdHtCmMZWpduPLruj6XBpm38XQV8ijhtUn9CTvjbHeKx64ZXR",
  "key19": "5deoUDH9SpESxzNv4m6XnfyGAC4WsyTpyofkjYY89eVnPZuJuu9CVTQfgwkiUaBX5Mbjcsfv8ox4zLLpgZyiMfvD",
  "key20": "36X6K7G7vVpj2Pd3uz469HRRXU1Ej3iex9AKKijxHUsVNxRaBKzEdvehJqBokQVyaeVXs3GP9L5jF4MDihjJMrfB",
  "key21": "4pfLezuyZr4GfAsVdWRtQctHvBfrxZw6pVXSbY4nnrHndaoyba82iA93Z9wY681bu8h4tCkjzycDTEYWUpwJ74Tv",
  "key22": "3JhvxN6Z8PQaBHnz5wodeFTwB4t9Mv4XRbsn2ZmwfTbgkesBJpoGizb5u8zYXrUAFvEZT2kb3tHtBQjhdH6XYKjU",
  "key23": "5aSizkK3m9vog4MQCxzhsmE7nuNLyudZ6JNA5Tj9KZJpMk1Hw4HnZfrfzpwAEJFJTukiA1oqsU1LYLZZMQUe1CK6",
  "key24": "5FXKMET5pJ8mGrwSW5xtcJD96hV3ke83QjKdxLr8dQxTMTBJpeJXePF8mhnFNmyjSkmg31urp2BBPm61guDpojtq",
  "key25": "KYtykByFPXDWLnqM65KGFPZcbQWVBiDsNpRcubshZX2rK61t69KxY3Yxj9Ybq19BTDr9aQGi388Mm2BGszz1dmv",
  "key26": "fcawxUaAGizZNKrLf2JPmu8cEEgKg3rKJDwgc2qQGmd3terRnCzCUtt4Q5PX312K9quTDe6WW7zbwtR7AgD72mp",
  "key27": "3xTP1hRKLeNQfwi2VwZDcqZYNf2NQjncN6vgxCFuJdYn6zh7UvAurMR5dtU8gBv3vuFn3GKZYEQjTWh8M4medGUa",
  "key28": "42jTFZAUJM1ZLAxEuLirBaytswe8awVaYCiKc3tBANKNaxnHNK87hTvCkh21jscQ6dMEL9KcfBUnd9mehJXapDBG",
  "key29": "qNHHi5EJ8jyNRbVAvop9MGVVvKXSHjCeGdmZgwcXgDbAtkQSYfiY4wnANaX6T4KvX46AuU8tQi3jpFejhfPmiSm",
  "key30": "5sFEzEjRWfgGzh8xFWG2wFyY5j4sVdBHcQv76grBjwYAgvw1R5VzeB8a9qp37jTofefJLrfcQn8aEQRRXzHuSAeT",
  "key31": "QLPUZHTSETmrWQU67nBUk7QwQZMsxkzoV7LSMTrnwtDLcumzr1Tawx5VsyUudutnj64yZ564Fjprnm5T7yKtMZs",
  "key32": "pWUQLTcfQxmnzd9nm2WFzp9rLiZY8qgNKRgwPNhqTa8hKcaaUebJ6UyzNkMesXevHhBFF5zJuBNsaBgcx2D5hnT"
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

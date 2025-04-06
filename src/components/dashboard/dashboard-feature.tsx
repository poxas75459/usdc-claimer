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
    "5sUWHr3aGvoZsvMiZ4YwbEVTAnu7aJHysvKcWfEjeQXSqJh95vDDhxn7wSiUmjztuqFheBy8Ds8cHftAamdbQwtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6c8fe8SHA2uE39PFu7BeDA5pfMNVWBHdGYfKS9wnL3wDgknsHkLqZ71UC28epHfFpoyCwX96gN4yUCTjfuyu4y",
  "key1": "5cJ8v93nTeFeySPzyiW1Nt2DvBLTJBAmok7sktBrmEpJzCRF9H3RJX4xV4D1fFKrcMwH85CTuWj4hyKA9AEHeMUe",
  "key2": "5QG8VLhJCshXqHowuz68k7GPCWR49zyvHzZrGmssHkeU3uPhzVcGWz6pKvQtTkYDwrqH5SkfRu3AeaPfmchqgrcz",
  "key3": "3ig8Lcc45hM4z5G7f2SdjShMatWFyEnmP36hwGFVcDiwT9EFohbWy4c94YWMmgVefebhPvYTq456cWB59fTABePX",
  "key4": "2UxsSvc5KvAhMYZ6qPXsWYbY1v57juWfVmdGVfCA89omCUEMW3RG2qgMrEChKbCkCyCrpiEM1o7mBKQJhVeQ2dzZ",
  "key5": "5uHG8znMaPSEPndGMF8dp9LGYnBcUiLYNXATcHJ9xysbjuaDvUz5vqbRTcoXyart8CCeyegnq3VdZv7rZUUDKKue",
  "key6": "2YNiEuEpdxrk4gsfUwu7DU21m92MoisohDVjsW2P4xUNDp8x2Bu1EgNYEKaqZeCpauADdHrQrqxpq7hDBH8csJJG",
  "key7": "4FYEQaGEtvJzr6AxqRDdHbjR2Ffu414oGkNHAigyPRjAFZbYAPAdEVVAF2nzKPfNGBTSDRBqtJ5c98atwVPqTVRM",
  "key8": "2P9fuKZDR6SzpEWefhoHmQoGrTCzZNcAMJpQn8aYXF6TRQ3UeWKdQW9Pp7SQAyxoBeTzHqC4wamrnxNQ1hLTWpWv",
  "key9": "2AEkvPBMp96y8yGjpuzz2GcprEYW9czXvdnriVRvoB9xRndNDH2eYoPp6NnK9Fj9BhgNUywz2p6kixkSQRY8XMEP",
  "key10": "2R2NCSpFdBuD5dqa4eY6nvkqgVqYQFVBimougrx83FZb4tQTtDQM6oHThR32Xje2MKZQpoHxUESQBxrUazvzFmmW",
  "key11": "3kScENdRKAe95phjih5cGynMh9wGu58MgaqBi74a53t7kAMNdXM4fqbH3moPGjjZBEqmawdCDUqnusVzNdGLBLH",
  "key12": "5zUsYdtVnXfhK1exPnBr9Bf5Zcz2DUQbyU9a9Lvhb6rwS47mXBeDkPUEP7pS7aLXvSYw9X4kXA69n8LiovCA1Q5y",
  "key13": "nPTW7gsgHtBubWjDsmzL1kdyLvoVjwcV6XA1rSUxvomvGsBjZVdat9yDL8Tj4jv2aggbfFafR1p13uS9WW6PEvM",
  "key14": "47X9moESLyQfe8JbKwULwkytDKzhK1HxvYDSaC53DWmd8oU2HWn1Prz8g9AyrxZZDf52koLq87redP9X3K1nevsg",
  "key15": "5QHDBGdkvBiEXoYGEWgCsNy1GR8LkUC62SYmBgqPPKm6hmYHjVq3avqtbHAy5Wbk6LE5kSmED9XKWbmjVxowXxNJ",
  "key16": "36rfc69VnrR8uEqHE1Ey9WtBFxg7vPojuCFj4ETxzSoM2Lu4J6ptrmdUdoQFfRmrVjDccVmXwrYrNp46uLrqHDET",
  "key17": "5joDWQE2xoEYxsAztxFJcnQG7keh5k8DSbhGVE22GajKJZ78yCyBBeZjk7uLquMbReogMNGeZ6qjh4YHYkg4VYnD",
  "key18": "333wG2ikJmBg5hJaqPYzaCgo5jSqA6eq2enTa23KWjBcTrpSyywWJcXaSH9NBY5TavjiVX2GEok9YMn387KH9jbG",
  "key19": "5eLoRWBKzfbnoZi39xCSGiC3Mjz29MELWTuQ3P5DcwxvXsvVtKzBYJP8chQrEue76QKzJ4WNo6yjdXMFX5mbNVgN",
  "key20": "5HEMu1G5c7cj35pM6CqDLMN3sVVesBBL4GE3FpTb7S23RwYXLzAjq4YEjUW8YMQHGYritNgqGZEKNipX4JJ22yf8",
  "key21": "5GaYXLHMdGLMkLjMeDWCL1h6dibBArR9L8qkfnqc3Nr2dbff4DaU5ACmUb51EmXHBfwpsok1rHKXuTgSXdnB3pcB",
  "key22": "3gnau3BJppKmuPNp4hMNp5oEytBPmAWMRDtH8Sm9FZMT8yp3rSHaEyyoj9uFCtSFL2BfKBG3giqdcCvasphXyqNy",
  "key23": "rx7rgfANngZQpQiT7JdmvYPE3gqji5ErXJR5J1vGyeYmBpZRhE6Sf9K2aCcGcJ1M8ZUeRZLwT2Mq1rEZisisa5Z",
  "key24": "2pXoToUU1JvGwraC2QVaK75hGUfngtB9AKXyP9eboLZXQwg3fEgab7YEt9H8wgxHFPZtNpTsr7YsHADqagxK4Etv",
  "key25": "PzUvytQhdjXQJKRerX9RJDJYUS7kfGcGWSD7Pe4k8vNctYFduv9jQ8X9XyiMSuHbxph9hvf2gNq4cD9QUvWBHbe",
  "key26": "63rCVLaAVA5hWHbcR1Vw8Z6NxoX8KKijKbP7PnyNjMkMoYFBkXEm4EdZkjwygAU2sPR39wnaq3gwxiF7sAJ8GfqA",
  "key27": "VwjccdESebPK47VNtk9GW6uC8K24K9XzHM1mZ6trxtNq5mGHZzxvh8mRXkEXVeJV8JHL5rPXfQqpzJDfeWEtrvx",
  "key28": "4fWHi67hSWRvFBujbfoNmusJ5va1BbpKadSWFsDmEnd8PNAbQiiLCwB47qeJymUCujePfSnzZtoHrTgMRbnB58hC",
  "key29": "4JcLrrLcjxYGfuAMuTdHQE9A1XrF2zVQ244A3cXGsUYo22Fz3MVdrAyyD25EmDQuSdu4YaDKP5q93Nt3Qb76q7YG",
  "key30": "5jh19ko4Fpcgz3rgJbQHgn1RPkqs8yCyEDqsBejnYNLbpKCVLqC68Ev6iQXEaxZxtQK2gU9hFgEkSt7K9q8g67Qs",
  "key31": "2ctPuvRy2x2antLXiZwrM78WokgyJ6Wu5m87R6K37EobUkzJv2jaWkDcDXu8zdMAJfgQFaCnd979AiRa3jAAFGy1",
  "key32": "37ATq3mDgmHrFq9JgucBLuS4EwjzaMuekPw7KBfzUzdY1kLYQweTKHrc2q6oFAkxXKFbWhdvEU5HztfPDuxvvdEc",
  "key33": "5aaGom5e5X5hnABjXZ7NbQ7Tv1mpunAJoJtuRTcFhiCdRr1e6dwTQzMQG5U35z6m5h4ppjQRh7UrrUCJ3vrJGhgz",
  "key34": "3N6GJi3pGRoPuEfZNMfp5xbQY2uc5RbtJN9CoWJNAwJiZLHrKBVvBdvJ4GDpsEvVwAxYWqbjXHEqoozLdNh7mcgu",
  "key35": "2fqhMbfQ2sq8zAFWJWZV3YAyQRt5J9RmYYN6j5y6CqQSawAuApy6YL66Jx1hmP9xTan8wn22tgYqVABUTKhrNevy",
  "key36": "22xFbjnqgJaMgnLVQmkxYBhBqsMJ8VRnwbNiJs4p3qtMP3JVoYkktYT2GFiuiyewT3ZZK3LfTysa8aQcpVTYNSTi",
  "key37": "2xWrd2hhyEnsXq28RohUUVrA3eG5XssYb4ZNRLj7XB1XY2Yt2pQ9JVFQiPhKkP9VjFvasPW8AfdyfmJvqhaKt3VN",
  "key38": "3dvJrPgj1YYAzajBisvq4AzmU55K59gkLtj4Qd5Du7LPAhxFuvBNo2qx1svZ24vcFCJtjq6uffYCi5yoEQHdN9Vc",
  "key39": "3NU62ntxmg1sQ2nSL2uG4KwJ3ygRjvyBgTWYpk5JbctFg8p1zjA8m5szUBWLcfcvACnb3oqptDwMvGuBBQHsRZpk",
  "key40": "3quRVKo6MREmRafjqCkL8wjL6UYCHNApPe6fEGvTRkg2GiCUrb2hMXivRgyHkqimC75nzx6J7Se7oixNMNHoXu4C",
  "key41": "4vnNJCFqMcJuTzwHWrPJASxGZKjXhqGnngmuGonk4pnzSk3y8ts6DaCHYcPVWaDqapHrtmxdV3BdJDABgBcCZo64",
  "key42": "49HsdZGbpnEqGohTwEs18Dd15RnARWKe2zb83UhdsNae3fahR9LfM1bmyLHxwcPks8uFMeC6AZp2HwmmWwXvavar",
  "key43": "44eGfP3LAAPfM1Nc5C6JirLJgmGdE1hh6aC6c2y3bwMBWJkssJPtfuCQ8X8sEBc2YPea4QJj2cBJZmkAsdmKpjyh",
  "key44": "3eKLvC5XoKbXhjPBrZVDPM83Hot6aJotnMXAJTkTHLQBVN14rx4xE2kpr5YWCjJZok3jo7TQpCQKFxfWUae1uhgy",
  "key45": "2A1wrw1omMS6wgso9pfVMcfj1xoDFdn2D9WoYyaEgB35W7VQE3ZRcAHr8ErGHWQf24NAZok1LVcK3EKX41q2s3Ky",
  "key46": "5PD5UZAGzahtgmXdgRz4ubytpTWxwyabiUZFVSpFGV2Uh4qkMJjtBEc6i1kMhBJ2JC5KAduVdZ61w2U1dpJdAZRA",
  "key47": "QNyr2jM2EifAqAnFhLbMuzJxgpRZe5UCKvn4RTL1BAW4pMhy8jZJBJKp67xJgjRPTA3qZvAMKoMw7BCdMRyRnX5",
  "key48": "ybpSCRtoYZc9WUz6ewU3DxYayx7FP68H3krovqTEbnSRdcDrawv4zXo9KmyQJqUQo5BrYmXrs17kkUbcQNUu9yG",
  "key49": "2u1gwKGtoBmCXAgx4pNSpRtyTR6uSds23gGQYHLEP8mfdopUSSWTyStXHeDQ7d5Qm8r8dKzTtzv82JrvE2jvRKHX"
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

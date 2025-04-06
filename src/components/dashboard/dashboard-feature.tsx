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
    "3oBHaHjN6dJdu4rxJ4bZNyavmmuCS2gZTBr9rFubNhavdUgKh8BxeUAywmo5xEWmZcrLHZXtVPBXHneuKQefTCjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRZz7fqJEaRjF1LpMFpkAP8GbLaC8KgFFJPsbs96E9xgY5Jrzu59quhSv6QC7eBFXwHGvn1jvCam5poLESoSXN1",
  "key1": "4GmH8hX5Z1J6FT8ZnjcZ9rMAwXfj98vx8PsDBx18ExQ8ZtvNLeSDJTKMgkmfubcLNrF3qbx1Xa9N2CyW887SzdVQ",
  "key2": "2mu6nNf7w4U5WxfrTK1AVa4cYVp6NqNnRdeZUAaPpfkD7pNeFz8kP63JiTFK2NYs1gjqcQBhNYW5bdNDARd6VcnB",
  "key3": "eWzw8BEqViXQKpKYsCGB3DyKmaCXhK96ypCX9bWw6hJFxQe4mxT4XicwcaJa8uKS141Rgk9pA1QFXjEaFSNomzq",
  "key4": "5XK4624sTn6DjRUiEXiuwk73Hjh1Wjke5Z2ZSsvrJnuCf1SSYbzoWq92qXMXAVj3vm1u1rwSzWeGkb9HbtyXhukt",
  "key5": "3uFadpSnNqA37K4b4dU4X8ethB49gd9wsQdiPrR9xzQkeCHqtZS5dVrYejv1V3wVMrn72Eo6TFbJD6twRqbeXtz6",
  "key6": "3pyFM56S5sjCZHEAfaGvv1zhcvou7f3hSpS6fdyy4ajT5Z6yYx72KEXXtP4eDRzt7x7YmBD2qQzWQ8B67Em7Lrue",
  "key7": "2FAS7QE8Pw3hQ7yDWM8mReY2SkLkFhMsk4KgdcmQ7LpgNbjx7v28rioFQaci73G4h7fsq4Ub7dQ7FPRchvnnh5f8",
  "key8": "4qnbP9Mp5fLWis9a7MCfrmyeLCNS5GzX8JLEtK1jPSmFXqiorDVhQ899r6QGGz5mwc1pyLEnSvaMFCFRVA3ZbT4G",
  "key9": "2CefcZjLQD8XFPojnH46STy2XyBkh43NgDVYpMVLWHRH25cc3euogBmZ33PUDXD88mQ1FiTr86bGt6WwMrF98Qag",
  "key10": "2GaQ54STLuBjDqB4LMmDZ88jXfHnn7USRZee2BdH4Qa4oRhzKPibW2UJ8adFhQuxDhqLWztxZSci52Fm2Dqm5kYH",
  "key11": "5VWS2Au6KZPovH4jvZHQsgrJR9sWwCXwg6MkuQGRTZ6V7v97h21ZJjbovfsEqPgjsJ8pwh8CyzCNNm8v9C4U54pX",
  "key12": "4icPe5MFtENhcrXW43a1Xi1Z5EKgiPtnGX2U81UtUNdu4w7tXDnLe3dA3KxgnuR5DbXptn8DBz1XuMsGdgvvZAew",
  "key13": "AyFA2N8XRQrgLqMiTaWrEzqbQ8HqJxFzmALZYVAvy96eE69fozrLvJd6vrjzrrk7gkKzZE5bt5fkoi2RsSoU7NJ",
  "key14": "22sQ2h3hXEvCmW9FPQXcUUv9H13stBTkra6rS2QZCidZxgATWH5wo1msY6vivL6vRGHePDqQk8TMcdAdCBp4kJDA",
  "key15": "aK9wB93heUz5oZz1zhzfocKkgZ25Fq3wrvddb2DU9pVRUdbRYivGSMuBY7Rn4PLaarrCT5ZjRWFB3yUFXMvodV4",
  "key16": "5hfGw2Hi4TVPpBZWai6jWddJdpePuVJjPc6QfTtSQwCBUtZbfesSTT5BfVi2hEuMLra8qpDJDURRiSMfPf8Xy5rZ",
  "key17": "kQkE8DzPSW3HMYyqSTBPiF6emFHhY353bsbJGdffv1761vquAtXXySMc2mnuVKhMwRxdTjztBj1tvHGHLrCGMSZ",
  "key18": "4NriHhTQVWeLSe9t7vJiZLF51uS1i8mNqmWosKZP1mSb2cxhMsTQg26MRwGEVBUkaMGpPTaogSy3L4TRofgtmCE",
  "key19": "38uuYrt4Q2HK9LYHFgenTGSDCJf8pHAJhnvy1NAJRVLpT281juJfSw33EwLAe7t5NQS9JNKRu7Np5bebb5KrN3rG",
  "key20": "4oFnwAn2Thj4KfZmCzsjhqRyZtgpFe4hkUG7KfwJXfYXcLaitTQPnZa2dsGg7PQFHHu8LXyAMQkcPcARRPBJyUp9",
  "key21": "5Tkq6m6phYe1EMpU7juyQzbyWcKwj9mNz78HnKX1DXQf87dHnFv8jWKgw4UFbpqttRmHL3274WPaVfXqHWVzSm9x",
  "key22": "23PomiARwpMWCDPXDSGQ8vyyTwfuRDu4T8w3Kq1VMrNpCb7HBHS1EmCmxcGP6a7ZEYVuTSsEEtTZNJLULq5k3WKx",
  "key23": "5ijCusdivqbbUoAAffGZGbiPea1AJGBcSgmqrH7YQ8S3YdYZmRqPkj37pNHS1aKWj2FZEf99QjrAZZ9xxN99cTRH",
  "key24": "3vYwGnKYgyLKFAMABHZeogcoEtRAg2XRzB7BnmCYtQhTefYbvv1DVeCjuoRjcpZQYbqALKJ72VKf5GHT6XLQk3pB",
  "key25": "62cXuAioj2ixBcd3RGn5Lxe1UkUVcbRvfF8J1p764EtMiPvugqqbqtwTCSJqyDQr3zJkvLSqkEiA5J4dn9ibwm5U",
  "key26": "3opEboXN63kE72dKe8gxrewKgDzx362MPnaHJXtHXPviH6C8CCzKwJbnQMwbwnZBKy4VCgw6tZrRHkedFaMCRtCM",
  "key27": "218RsTGpWeo3kEfhvEdBHSicVqN65xDEEe6ECjvEGzRH3JLfxFk4WAvWWjeGzmv5VUhJuUDEmD1KJB94R1KYcpj1",
  "key28": "4jNNuWSiYSz8eWUnn54eAAzps23JY6hG8D4Y5x8oPX3MJaxGQjziox6oLTcWtfJahFm28SEnHDEEEEtUdw2gfK1E",
  "key29": "5c99ibjpJHM5JkUZoaVtRxZdxS1iFM4gifj7wfWdxCnFvyY4tyNmC581Ww5DgiW1qESLgNEsJaUd1ZbZFNqFw2hZ",
  "key30": "5wBa59quDWwAbczKE7Fnj25o36ihPRbzdocTHhTAmVqBt1jtbSZdAM2eGqSzFyvyteZcHfTetNiMEpEYxVPGfHAL",
  "key31": "47craPAr5s6yqDGbef7ykyXK67ningeNxapQk8grugu2sad3b5rSrFYg5x9gX82k469weuzBVGGnxvqHL2d9j4ig",
  "key32": "3eGu38YRzVomw8knLP66CsSz5mLAMYFEqea8QhL4ypgfJfRbjQRmmTUmq9bkTvcoed82HmAF9EcKbAmhjGPpBtdW",
  "key33": "37BjWjbZC3raU2aWihXD4saaET7xB8vnbuuGSDnLw2bEhqqZpXPoS9b6bSQLPZ7XgoT1WP8R2R8tkHSGcEatyRW9",
  "key34": "5YCR3PhxUeyMtNdCpAd38qMMPuqomEUarZxCnLRYXoh2HmnaaBgEjfBY6Y2EiUxDjNqfZdZG8KhRNkGs9QSzUQwD",
  "key35": "2DahgU8uwrSxZcRgsGPGqp2HqNeDvhMmYYvR6uNQQv4TUxhUqjxXP349LprwtNPiRC1ihvRGPJvX433MkxfJqkKY",
  "key36": "63WwhYbGFqGChR1Yvp1u3LbtkVsqUBPwhTXZzByRB77MaHhToQ3x8i8eRVnQDAaA5GkA47hUiVqp62Ei2Qh6X37v",
  "key37": "GjTMdEbUbp7ScXf5H9PNP1DCYZ6FqMbxuXE8gnnRZPzYfRBjbUvqJzyHbxP4cekHMRJiQpCFGEcpVsuRjP6vTdJ",
  "key38": "61qpWyz7kuiw2eDQZUnHmDtkn7vm5cx4wUxuSJpvuuQH3Yupp6fEfhdkvv4BbQwJ8SaDs5A64yA2wq6XNEzLi4ev",
  "key39": "2EXrykaTDw54wZSUXq9Rrw23a6KWe51c1ySALPy9rEeTaLZXbYLPJoPDtpyyA1cKudq3643eEycyD6dg3KVoYC1E",
  "key40": "55mrfdueV9bd764JzTLEn7qhwWjxRjMPCTvNcL2naUqfuP5DJknVE6u5RtM8RgroS9aa8V2vTTLNVdA7bj2maanV",
  "key41": "2Dciu3MEU1EHpZTWE5xhiinYd8ioTMd1GPbKcCGXXQrtxedr52XmpDPv6JxpWciMnv9kWRZmNn4S9dcwbTMXiLKc",
  "key42": "2aAMwnt8yi42NYYQDp1uNWdpfUxtvyy2iKFrN3vygHGJJxnMb5JrZAzZsGfby4cD8aE1Ji7pWSGUQCTj79qYD6J9",
  "key43": "4tXyvTn6EjbVwPsj1pSVxCdChQ2aUwFzhphhZwYX9m6GStfp8wtLh2pBpgF3e1VYpWewPGndDr8VcPvc4izmwQYH",
  "key44": "uYicwSWW8MiTMU9zL6mX7n66V9nfUA4Vp7NxPMgQFgBCeP2QCjC1nxoJm1jJfBX5f3hKYXYizUzSTQ7gnz6V8QZ"
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

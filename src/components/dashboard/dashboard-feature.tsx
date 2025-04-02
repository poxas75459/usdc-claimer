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
    "X1yqAvMRmW1gTNBxvNPksV7CSV9fEBHkMb7a6LsDwZjWnqymaSdiw37uE4YqeYAc53d1e5gfvLEdSFmvjvnk5xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQwaNRKdRWX7W4d8MHSmJjskXUKCuNrQhWant1asLtdfqVufHXN5YztMRqXHYj49Lw5rTYxXKSGZSbt9phLvsLh",
  "key1": "2E7JU9D4MaJvVFgN3mvYs2fvim35ymqrcEq8ySSarP8pgHrEc3VgoZBb6w3YTdQYAkVU4yNX67oAUUakXMiTNJVj",
  "key2": "JvibiFYqd3dGYq4yQp6dJb9oMqV4CrjduGj7GymutkH59kZyR6CZC4WzjE4kWbzHyyuWwzvgTnSfEoAT2Bq5Mm8",
  "key3": "2q7VDGYJ3vMWoevdogdGwMTJWzZ5wtshvoT5w1TQxTu4NqCCzjpL3N7xiLRZFsNacnEtuJZWGrXcVUs2zeSqLzRp",
  "key4": "4uDhWrB8fEYPye1x4tk13DbkajubJJ3Uac3tUD7zX7JwWfcAe2M3iA3BAJAF6WEgRSFbvYyGoxoBS3K6QQuXAETP",
  "key5": "2aTzBmyQBFLQpHjEihUSBmK4T5RRiKD64w3tX713awrxFDPS7ej4QoUEBkuWdvfcLjdrVZavwrN2d4TdRePN9LBt",
  "key6": "5gTJJDYS8RqGMyf1DNFekJmkB87adSGrKek4wEKkxbbS82U1nDbKrXQQ9PdEt8Q7vWHveAngjMND2vQ74UNJZKgG",
  "key7": "ruVvmszTvBjwaBnuKRyWK9V2UvKV3sYmt76dNsx2U83QFVdDjnotbfXtbUxN7q2kKj6gLXQKzwzk6iDD32ETsBm",
  "key8": "4NkkAkaYbRKCiVH9MDaVrgDigV9e1odZWK8XcsssGaaQwBfAi9ZWTt8Xy4n9PY8VPpGwQdBmvKS8z89JvUAUMh6n",
  "key9": "3LJmRr2qJAY8YTnWa3SveJAT7zxP6uQ5YK2tcGq52fX2AbDAhMgG3dwK3RcyKAhWRT684KeXkWmj7kef2unRw834",
  "key10": "fsouwvRFE9qERmbSqzj3EX2P7x6isacNVo3mq3BtxqpfzgpYg9RnS1FJcHBXum6DS25EK7sBQWytE3XA7NVhcPz",
  "key11": "4gMgx47PfTqs2DR3tySxz6gS3b2FMqt27N8sMAj8fgWYURZE9K9s9h2Aw78nnsdJpLXHonPEqhHmfkpb2XRSroDY",
  "key12": "PneQfLFt3BQn6ixM8Av5t5wmAfuVMvWF2DKPcTLRfmoWPkptU3onqcwVcvEmXPyXcfiWn6hr85ADYG6PNu9hA4Q",
  "key13": "5UDGFB8u5M9y4KVWzJqvmsrmdS1yQcZ3ciXHH9U8omcktbpj62Mj3tSuUHED6VGDnFKANsQrcqhttirkp8gQdDnS",
  "key14": "cC8mgjMZ35eZqPSVxsHFv1LHd24fiaoLYZbVrvEJWKZUDVfKwwEBbRktsJ8wDZkzkmqfzyV9k5o63jFd2KmfJdc",
  "key15": "2pKEw6QbnNkx8Ph1KMBUh7MEUrvvj7mXvpzbTSCxahSYNdGd1JGvXgfLMN3e4D4gzKk8wDbgkq8cFFyUUqHSW9Nq",
  "key16": "Ss6GfRHojPssJSXwSPWAyoDrWL9d3aQQ8wkpj1zYc91SMvLWpbRLwb3YLw7VmSZ5GnorZuEu5DL5Xmjdm9Uf2PP",
  "key17": "4fySmU9pDixEKHmKtM1Pk2P7nhaGpwVB3bCKKvMaSnyCD2DWGsDurkkkVd6tu4Hx5uaWiRscKdnatMJhAzHAtkgC",
  "key18": "2h7wivj7veMsa7TM3KP5dEwT4rdzWjf3B74PBmJuH6zbx1UWCfcT46Cd7CJKy8TMSzM9uuj8xZqyJhe7wdszVZgu",
  "key19": "23bG1FhntYydaxvjH2tEVHxGRaskfeivYPAzQentyBXraFTvuGdjZw7ke8s1YZQDpBvMPbQ5y9u6RvGSgdE4eYa4",
  "key20": "R4uSyiFZQwVCmewkDohAhKWsnfBqcjZyGs4owU5axLZmm6HdwRGvrLp5YkC6sJB5H6qkjBCVbuHLb1EFB2qkS2c",
  "key21": "4HJrPsD9JggTcmXUpdsuvfxpogfpnjWiPWfvuZ9kX7BwJei3p3J2eDKxhv3gEGyVAA47NtknDSxpoS1FsibemDbq",
  "key22": "3nwHrp9JVmC7Zd2t75xVUXXXJYyuCLqdUpHqbMUwBAzRVpXVqqyoXvHtjzx2fTByLDHBiogCd6VvXTtd2acX3xDg",
  "key23": "c9sBy93YjdH8hqaGZuZnK16CGGmLA9psVzGFiSVaDXg2tvBLNUP7dVENVzHbHyu3oKVmCNJVFDjCgWaD4L23Krh",
  "key24": "2L4F1CCsHhxmHEf6W1xdE4gUchSZ8Ff7Rha8D5QB2aHuaZz9ShomB553pJxfyELK9rkL1zHeb2GFtxksahFWk4AB",
  "key25": "4rXQUW1mxF1jwXRpS9aRGrpLPbkc8drQtJKid1GGJXHYmDmwjrNCTGE1SqYQsJJ6yXLdDK9kkK3xcACkqvA923vL",
  "key26": "aJdkTUBVx316KtmzC9M5L7AFidhL8fjRDFyFmQ27ezBes4fCZcSqjFBiMKQW41Jh7efcWD68ko8EEhsvB4L6X3b",
  "key27": "4wC3eLUPQUCg9jh4aEbXXNYez972jiCgLADJB8CK4qtYAKzJMLU8xL8FmfyUTHfDhEVbgBLYFB6fCtQCdVTqXqJF",
  "key28": "KAXTVLZAYyGVgBCg64Ge2jFkzLHvDiNAwn9veRaRtHF7V8fozBiRXQCJwXyuyTP48eMaeXE9AhTDahNAoAMmDCn",
  "key29": "5PAtzHBNYA3qhKVHqyaxNyRspCsps35HuW7knFhusc3nPprSyPQsuPu1f8wgbdgRh65bw28VAmhw8tLJG98xA1N9",
  "key30": "3uzHXtCJXj22s2MsECWSosGE4TfBicuhwCKPCHBBatiEAjnf3egD2SgMykJSC9RoKTLYC3eNiwuu2Yt8LTccmC1m",
  "key31": "5HHDGMgeo5AhCsi4C7SRxkXHLws1mPCZqFSa8phTVfmwxDWh1TVsnhBmvSyD8p43bLzVXrvosS28Fag5ZdJVAMoY",
  "key32": "2nukM72MmdpHeap9nsT7Mhd1wJwMifjKoZTse2r9Krjm4NVEvVbaYBjTqEk4s7USqiNVtZJ2hadscp8kVqzDWowq",
  "key33": "51DTGXCNqpfzWXsqysTkqaQAaZNciYdEv2QUMD1fBiAdZGG8QZjSw8KjsndEdzL2hLpNr62FSvttfZ8RFL6osAo2",
  "key34": "2stCd29nHQ3aeMiM6DYcbm2G1mygoocLdYNWdShoDPxai5Edt9eRCz6b9xAHSkDA4oNPbEW8N6ioYuBRC1iWoPuN",
  "key35": "28hCd6EQdmnMNbcp5uy1AegjwS2QQBnrCUdxpKpLkhkLvELuepcCngGehRJPnHktkXqzEyEyLWHWk9WNNd5fY5vT"
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

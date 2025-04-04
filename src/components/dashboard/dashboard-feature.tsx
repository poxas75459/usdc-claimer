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
    "2AQTcTiG2AFriJgYDa28bxLq2zHsMAc36r7aJXmSLxy48J5zLAfLoDsoDkYHfgwAMFT3bWBpk3dM9iLzfXF7Nkqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qr8wgejYaVez4N6iBXoAEJMFpyrHo19CpEcmNAAjmD2RmV7YQ2frpXicGKzcPA4gMJDocxanGUEk1d77xn7u3Ht",
  "key1": "64x4Y1EFCnTbncuwkMmRZgZfAK45vDeftJf8UoDKs7SeGisw9rkafFnvbfVubXo8PMp3qa81e74o76BVYz3B738b",
  "key2": "3eYyGrHAxf7p22rb35ptgcXsmkgVwgZ6QH96YVTyB19BZM6X31CdDJhKaJiaTYoL75KnBE9KGn63dBrwpJ4SkexC",
  "key3": "CbqJtkJnmztJjmASgBXvhEuhfiU3U3uiqr5xgdQKc5r9PZG2Z4aoUzjC6bYyrk8xczVPnyY1LaDpqW6YPVy81RA",
  "key4": "2nDYsbiLvfX7EQBNKB66SanjGBHHX9GrzBomyfvhH7NTmiPL4mFoQ5Pq5tVa83ptMfjRbVBUZnjzLs8wj9nMYEzm",
  "key5": "4VrijNdEkxhdtgPgXRzBGDCBaJpNcvQhGkXX5e9woCJxNM2GTGP3YcXhzBHST2NdPsnwniFRXanm2Y2r7ZZDEyPW",
  "key6": "4tqY3Ck3LHBGSdWaRfHgx6xtWkfeSrQWr5mUP2Rpj1vKCNnPZX7Lzdgt5DY1KvqAkjUV5j4R6x7U5rkiXchYTMXP",
  "key7": "5dof8tUocduMk9hcnGghvAZ5oi4H7mXML8mhBXrtY7zSzdFPKydz1Fhua4iqbSkPoYG2xSpnnokDHcBHZCuKYqD4",
  "key8": "3QEPCYZh198gbsvDxbwAkUjhuwk9VF4hSsreCfBYW5RN21AYvGR5tBpHWQBv1iywWVUiXPX1DyhHUGy8x9THqVkP",
  "key9": "pGTbCimtZtEbRURPGcZUBAjtcqCkvT6MpRHMSqmyoVFb8SzeexTGpkbJGbaoo4g7EdkdVYiUzkSV8yqXDJLHsnV",
  "key10": "24kVwwX7Cfk1V7BdYZhWLfvaoNPe1a6CkaiTKMZUpZBZXpM8nDW9mh2PRYVx1mE88p9C9urGcE5PJk3GCNLZDD2b",
  "key11": "2c2v3ruQWr66pUstsj4dkdGs8n7xgSEePFiMCmLS5WiWzpR7Si7k8vG9jnau5wFiuZb2Rcs8DT6ea9Sr1YXdauSE",
  "key12": "KnVbbd2aRhot7n3Xxfwm1mSjYF6wYXWqAmmBLYoJMGWLgGMArM2DgTCbhmkHboKgyeoMUozJC7pB9vfhe3ix3uK",
  "key13": "5dGwwGe2UrnWAX6BM5aio6j6fgNm9GTtEAXcLyQE1DHvGeJUpCyLDnKgUx4vgiJ7fovYJdSTZ6nusX2Y8EQGhgt8",
  "key14": "4579nCLxzgindkXt24RDSmidQtLEoJEfmyDmfqiAK6soVAH9hNh8PNwBuQgv1kg6F9xYiNFMyZJ6yrvRgGQ9Q8ub",
  "key15": "rrov2i3CmbtFMopPFLNsjhyk2ERrdr7DBF1LGmhB5M4PFJf1PDeYYV72FKZCu8qesmDhgsoCp2JjtJwrWddkdHF",
  "key16": "667vABgSA6i4mmsJdFVBX4s3BV1RjgjeSQhFhb6zAnqHni7xBceV2mrfWKpzVA896EPGHbAbJ45MRpmWk7RnUW2t",
  "key17": "JEzD9eibp9mq32PaaFH9xLUD7rqd8cPEWa2m7PtRMbPsmpsAakbChSFvpUyMVH3BrzJAjehFrhvUmbrz9HLs57t",
  "key18": "dB3r2Q7qTrj6nGDMvNtGr69oPhfv6oRSGSXJtyPjYFkKgHACgZ3MLDcQn4MVX3Yticn9Z8dZKBfkF2zrHmD2D2w",
  "key19": "CYogh6VyKZJGhq7L5sXWDaEB7TeP9P9J47N1xHNo4m4M6e1gp328scKS4cTMPAnLiWw1u57YMrs6rB9Rij5uaZA",
  "key20": "649c58sqbcSn3YYC7sGdWnwyC14dqLrdNYeWZ2jENPRg4AzZV6pmMJgTW9F8E424o7ABW7AATgprQMUQTvxxVNuA",
  "key21": "4S7GjfrXSeEmjXuM3pLTDVhJTYaFfCn7GG4QxJStLkWyqmGuTJp6MeZ7jVdsrq5jmGdC4VPuKhFRB2BxEnUrtz7K",
  "key22": "MTXW6gM3Y9NdYiVCd3wjEaPAtMoTEfJy3sKBNYda9xUdPVf3jNs88wZygLJzQBPeqa9ZRniJdhxawMvDvaqjdqN",
  "key23": "3q3Wff2SeyVKeYBjCDHzguX5BAh2qgqmfWa31BVQ6o6XtUpw3q4rPHWiReNyibYpDDAUH3hD17JWj66pRE3NAuUx",
  "key24": "52chjvcnaxcL7yoNxXAv1SCwtVjAyQNeY4fgFKXLBkjRREDierv5VoW9pvyhd476rMvtJxETpzt3MpAzVceiCmUi",
  "key25": "42nVs7zXtWZVvqtMQbAikqH9V9yVnPFzNrSp1o56vms1B7SUPhbWSr6RXgxBhBhY3KrHsSzy4NukHxesdGYkS8fe",
  "key26": "4ck1Cy7zpb5nUTHCKJjp6T1B4UiBecnNT6pRTowtSYmoeTpEttZ4XemmuPqqr2sNJFkZiE4JCuYPZ823nxLHnyki",
  "key27": "5UzKK1wYxwm3oGCLa3SLTqkkCC1XrpzxMMkmtvxnXZirLKD2kebA7L6dWNvhBamRGn52S9LZWtPcB29D1po7GKog",
  "key28": "2b97v3ZojmsDH3EAc82KduhdCeDYtuSAnGpY5Voq7YijDLAmLNk88ySYmSQGD91C78azZRkwSLk3KAP1PGpwEmjn",
  "key29": "3ACbjRK2qsPp1ZP74JT5jktzkvWf2dJRpo43vKXqkT96cdK32cx3gPN3SuXHNUxrJgKPzERPGensWnLwXbRLV5nA",
  "key30": "4xkJKvCytUde7aQA8RrEEhcgYqggfzM6hD48C8LRMjCHip4LWKddJJ6sXbXQtNAfq3WYPzWCty6TXHaNhYcQC9iQ",
  "key31": "P9VfmaBHsddCuea825WqqZADNKiPZ7rGDMAKWN6uTacMFrdSLA3Nt98PVMPhhr37roKfBFTHRdShaSzNvMXieLS",
  "key32": "3J1BaDravRXGm3o9W3PQAUKWUrktG79DZ73dLmgABQgJgV1a5HTy19PXBQf2wU4tWZVgxwD5JELyTtto2V9UoAny"
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

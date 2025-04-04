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
    "NoqNHaPgEuYbExx9BnR35FBrzwxCFjTzKQ9zaPkuAFSTNeinJrGHhzgx9ajZ7ku3KBsdAmj4awLweNDzJ42EjtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n9NTgef3tx7PUCxPCMgTg8Skjd8SNi3Cz5SLcNzksMSHFKfRKQiyr3Mhcb8m9vimtEaA7PBPnWjKDson5bxoS4n",
  "key1": "3kvasX2NDe7SELFJtB3VyWLAjbSpFyJ18tt6zDpzNcvpTN1aWd3TMJEj5EZM8bv46snP8JLkpYNPAXyMTu9ssAHD",
  "key2": "DC5j5a5U36SeEfG7iupUifM9FcjMs9Ye7AU3KUz8tJxZ91kd1HgmoeFdtMpk9fBTJPmbVXoKr6mvWaDTi5jRAYX",
  "key3": "2zix5CFocjvtkbCcQegXzBuJJe6P2E6keBA8fnh3SBTSdmd9cGMww4uDFSV1wfEQtWsR6CtJJPjEbn7J8j2K6QyE",
  "key4": "3dwh1sSrzerv1DUTHZWyVoDMV8V4MPkTro6msE2T8TbnsbWHP9gtiDpsuJtGfGZVxsKn4Lz4EgoMaJqgNsVNwgpf",
  "key5": "3zKJ6z3PQLyaLXSb6i4155rFDsHS8qxbT7kC8UGQ9Q2m4pzwf9Mr3eFx2YhvJRQBL73RsrUFsqm3rv5dvDS29tXH",
  "key6": "5EmeCDLsHq7C7YYwsAfGuqZwnUMWHAbbByeUBqpwXAqFnhhZQSUFfHmx6iesXFii4Cf1eQQhNvAXHpmbwJbbU5Ms",
  "key7": "3PGRy6zGvwknX5pAXaLXKc92DXHMrKQcCHqbBcvve4N3MDCQGvQm9pVhGzC2Fn2AtdjGk8Po3xsDui1CHgwsFeoL",
  "key8": "5dJ3djSi4AZQ8i1K93En8p86SLugBiUfNsgVKSNTmhEQQgbAQH7Sqr2UQ9fPFBUU3V4fmXEG5B6wkXXNxHHQbMgV",
  "key9": "3UUKuHKCLzXmkxZ1TKiWmi6dNwa4UdEWcUDQHEnMWo6fv9koDFCnFiKVP78RgbhTvoKV3zLFLhqsqKDra62U7MJx",
  "key10": "o1d1xtWkgiiJV86XR1sFXe2aCGd2zioMkCTnmQgx8G1tFHnHTq7gfaDPftPRwQFnHeonamac3hULTnEVkBzUyxP",
  "key11": "5E9rak9vHKzZiF8ngScjcdsa41FipNUMyxwYQJpTMmJPZ2mdhmSDYNFUXw58yFMgWYtC8sN9gcPLmxAcgCrG7S1H",
  "key12": "4vaCrdQf2Hagowtr6gkFiGZP8WCyJfWXmQkAUPCz4Xw5qEsXuFPcSz5ArUnS8KGpTEunuWz36h4NXNqLyaoEnPPD",
  "key13": "79DnuPGueKw92mnRspnUhwTHHEE8iAvJyE49FQowW2vCrS1iyPkgwCbkFi9QuXydZtTDg8s18ibHugsfw7utuhv",
  "key14": "5VrC2K9mFLhAYoS5qt5cu2Hf1L5Q1MqmwWhhWkBh6DEbqCTZCs9TLbghvwvZAFhHBs9Ug5AYTDboA4wCPcHYqGXu",
  "key15": "2FbUFozMmv1CavoeMKPP7tADNc77rt2e8VHJZkEUsgYNDFFKzJBGxxucpM3wDjWsiFqGnzBuydHsa2x2r9ZbXprp",
  "key16": "3AqV8gg2XgxxeNdwe2xoNwsoBcFXpyuMX5Mu57rL19bC1y6wtgMrDgcMDnMgCvRvFTuUvXCQ1JWU1tgiNGpNzBYA",
  "key17": "3mNWp7f1K7NBQkP25MKujSmojNsadpoBQe9sL2D1JfmPwFYjWokkjpApbhtg3YXi4boPvLYSQTenPwxbQDAvHRhv",
  "key18": "3PpPiGX5mpMc2633XCiyczwAsbJupBQDfmWxznozUicwZrxSc5A2LdDpUraeg6WsEQkTKMqnvy1xHf5obUv6myW3",
  "key19": "2wyRXzmgRHfdU5XS5KGbEfync7WZkfYoBgcYQcNU2jyM6FLjAKuhEcjHDKupYZ9vzaSoDDxsXXjDdES8x4LabyWm",
  "key20": "4Abz82wgLPn7Kcq2PTJHqk2bzv4hgc8dd8Aru8X754caRsn9mRaLdovFpJkZsfJyArucGgb5ZdPeLFcNJxxqfYHJ",
  "key21": "4PeoY2esd6bjgFhzmCixiP84HXSeSkt1fVRY7oAMpWReuTvJHMahqvjsesvZTxLmT4d32qX6g8nFR5DHoYG2oemX",
  "key22": "3jznaYCdahuVTFeNGL9haLeMWfMspjYFdBCpyWgo5xGVdiL6URzfsHcDdeoFc4UvReKGUUxaKFzUS2vhwssFSD5h",
  "key23": "RSrzgu3c6EUmGnbTAUJbymLiRx8Txw4VGfPkzESA7jHgBPjYrRrdeUSPC2YkYDMY4w3Tj8ahmhZuZbx3wUjSG2h",
  "key24": "3GcoqyMFXLvRa5u8AfoCXHXBPea2dqVeV3GeJk99jt3QyrnMjvTYPEJW1Cz2JrXjxzUJV2jVczJoyhu4mDd3hET3",
  "key25": "4idKFiYvwU2Ttg6vzB6oA9WdLevZHZGZNfJzA44CKaWUw5FFvJywWN7eCps9Ke8v3GqdZjSUE8x9ceKh6JHbERWN",
  "key26": "AHb1cSXniKGtkUPwEuw7Q6hX4nSVqeExUtP76wRMAbVjkXxFNa72iFMZ6ozTMvfDXfEZn2sRBfiupvXR5mSoJMq",
  "key27": "3pf26XmXCpSLf8XR3vJzE59uG5VRnrHauuPJchV4tKD4Li22WQ1faeu9HMGVdism1dQf1wqXuQtoZLpGeATVFjiS",
  "key28": "3moMdKgnhrFvASpbgjWdqAQ1pUM41NPaNZRQKQ7B6jvZRgmXUuvDBhbUhCVuGLxLWuCM57XR2Aq96yV67bJtWdYZ",
  "key29": "55Y3yHcZAT5asnwUNreRVG9QCAAn2cmt8F5nvDBnyV67aMj8JwT56RiZfv8wsCaMpvHswmt77wCAyX3aUYnbsFpB",
  "key30": "5LqsWHdHWo2jzeM8yEUG7kcdYca1mm1N13E4tTheghfj4U83CQMQ921ytAQPHU3b4TgPf15V3tfwQkJ2mWAjHSdY",
  "key31": "2CRn7jLB88G12eYkH7f3V4Sgff67Bezzuoco8mj778YW6bp2mnJ2hXLh5wHKDngtTcMRd994eXv2YyXyt5iYY9N8",
  "key32": "mApoWgFJNekkueuJkPomVDTWGFuKazNN5zcJiw14HQTZCZHoJxqx6QTXBphaVEnyuG5ioEDkuuguwznr4V3ry3P",
  "key33": "2sxcQp1ZdB6gyKPeRFvekFnUFpBBYKPXZKTg4YQuRD4YzXYAdc4DwXG2DRomDxTshE5bgh9DqHFhiaZKLcFX2rMr",
  "key34": "2YyUqgVRfaLzTRbHBAEz385uMZkyU9ZNNUSffKz6hiXkNtXyycjnqKSwSuxDYAFL4arg4tvrfnjJ9EMpQJM8Ew3H",
  "key35": "afSoRyspgmBQjxQLaVdE1fZowJfzJTdDNeubgKU6Ldrv5Hb2WRbzZJVJ9d9vzGnjZ5fYP5eqnxT8sNaZupxJH4b",
  "key36": "3fxWUi8MKcQveMS9un9aenzmM5iSEqgq6vKj4uhNRouYManW3HvHy17WgsL8Mq2GEW7p1vop9xv1RsTqMQ98MZLe",
  "key37": "K7GAEwgjHhc7MTZaU9DGwFjt7FMesNHwVeSDicKJDqx8nsqKfv9AKBXmUWDUq2jjsv9bQwcvv12oGQU31ti6Wck",
  "key38": "QiGPRWwFvuS8gkJx9Fo6pTkzHinGTwSzj44f6qGquq8w3nCoxCGJSQVEhrQeFEqqFN5Xpiqw1QDf35ff7hmyPvT"
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

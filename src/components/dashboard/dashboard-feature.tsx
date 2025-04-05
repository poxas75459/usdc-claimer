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
    "4LXbLxukFN7X2iQcfrdvZxuGkLb3ExQbFez1wbHRgn5odJEXsTNRcYM5D9BZ8CsmrZfWg2UrHnVc2wZqhtLEK5uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8tSL3yPoUoQw8rJAetMbB4ZvRw4qeJwg2UA7wA4SbMjjsorgGZQahLzijZ12XB6Qwnpj6nwAhHAMaDZYGZ5vTj",
  "key1": "4Aa1ScX4Su8TNTPJAdzJb3Zo9eLQmWCj8qVysxqDr4TagNx1gcYhEzqBouRooBmbJ7B8inrX2GJU2Nu26F6D3uFf",
  "key2": "TAHPjE3DtsiLbNXomXGZRtkVoLXdQMvTGahQiuf5BVqBAksxXaWN7m6rfu2tNfKBb99LSJpF1KaBgQKWr1e8Y8h",
  "key3": "5NqWpLM6FNWjfvarCwBan3f4bqdBEt8SUGmtDTUVvkKYqJV9pLLaqNb9P5UinwRSCmHuRdxqXRpnzFZRtPBHztkj",
  "key4": "58Q1hdDatDbyS3iQ7ZoqgZrxiYHnYYPmbet3wJA84TqQTkKT8oHJpCnuVan2VkDAiUsaHEnwpHrrTaELrWABN9Lw",
  "key5": "46j44jHuaVaPrCcYWmDoqsHao3JokRkvkzdksdXStRwCSShm9gDbjKqhv1ihaVw7LzZaSPiZkobhUVNvzpm3HYqx",
  "key6": "5bb5cXK9spaLUytYgd1vG2yck4LfDWczEMaNePh1XJ78PYAzp3H4yd2Nu1Mt7RUbYyFijZkhRKRu4vbiXS2mVY2m",
  "key7": "23xbTRD4bmgofLeUNJkbXjdJX2uMZ6Q3ZZjH119KaxBKfEGNmH3RndXPCVB4W89ZzSSARPc7ke69GoSNP5pMY17m",
  "key8": "24LBb9uW965QerBJncasuQYAK8tve1uWzbwQ3BLEKVxSjMTh2QCLdcddE1U2xSfNZhHWSAEghQKmSjwbiVtmBgkx",
  "key9": "3AETid626nYPxdGAWRv14Mw1ahqTJeHASUPxNqrvCRhAM8T54HK91VpA5uuhZGG34QnE7gEmnJ1ZF8hXQCf31bTG",
  "key10": "5bz8bDbd4hTSd4GZaZ46WsNp5TUDoiYTo4rhAzi32L4cQbdZegszj7U22K1pSD2HJKbQYGNwNHZccanPGPP15REs",
  "key11": "4bT1P3XjeHhUuJfaYo7RG6jo7XRCb4KRZ6WUMbUJKZP9trb7qoPkoYCipa3mMjaNZ7ZCAsAuqC4VojBULtVEaWDA",
  "key12": "3RkqaKnLvYLNWWUpCieUyGwNEVtGRFXGyFLLcSJFfU3BGxxyA3WWYsW1vajt5YDQZT1ZbcETfxo1WwJbg6XTdS8f",
  "key13": "3QMGNzgARaRpCKR2yT7VqJuL5uxf4eSgo6qymvxHsBro8ZaBbwmrJzYm3gQdFMGydvu8NDSPLKFZjCGGquoLRL6r",
  "key14": "2jEFNeVj7ezHytvWi1jyeqfUFhATVFWz1C7V9ZHiDygQeEsdCxGRPmfcDQ93HpoPqXAgwWSSrv2hvQNgfHD2fMxM",
  "key15": "64sRoZ2KpJEv1wH4QchoBYtpZtAe2J1unzMFAiYTzMYz9QkSEqTt2X6Mn4VXqiWwXcCc7mjQeA1QRZJmyhaGRCE1",
  "key16": "DK8eiibZFuYUhcJd9hvmwqNUCSLEv7rbmNmYvUVfgz5rj716rf23R6XpY56iz2pDxNhPdq7a3DqSBvY97xp9AxP",
  "key17": "2xvhpw6frGXNSakMNjfXSw9D2y45T65vJZdhC63Z7a53P7CKHMf33Y6mXrPS6u2dqwaBEoVvF638kApBB7HbJupW",
  "key18": "5dx1LZaVY1H3NyVzK8TCJyrk6Sh7HSTYYfhaXfDKsyCbCMu8acEftFzhU2qorZ8R95rgRoojuTPrjJMZQ42i8BH1",
  "key19": "4y17y9DQzjQtrAua3GjWdA5v9qBSyUmYZkD1S8JhgujnB69dyGRiqkDiYzCoCJyun3tdrbQZuTXh1Rcy7ex4dFxA",
  "key20": "2D1S6dHdM1byBsac5SYFTFuSvoW3Nbzck4faZXEgSwM4SqFLZqDha7gVSd5w3am5tfNcZWzLALvjWwth93J6xoxV",
  "key21": "5HJxVNWpAZeGdm3VthMcJe1V4zHNxi6zRDqV4yKGToeQrspmNy71C9Y3ep5LaVi3zBeW4cJH2QhuCAT1JVKfk4mw",
  "key22": "5pXZT5xgs3XhYbMk39Z6b5LPkTsfjpNUAULyRseZXPJYBSi9a1bgr9v7xHtt1ZnXuQBWaWLDzvTLTrz6rDLwzwjA",
  "key23": "a9bHEJnDRUCBh1LiTCgnabqssNkr7XKG1s5Lh7FMXrvQ2mMeo2iwqS3C9EjpaAbtVe7D5DQnXBfX5UuoGZ3VAs5",
  "key24": "66vY4ie76S1BvPi1eLUbkPpkPVcuJTQJYdrxp5VkHiSTa3c5q3ePzHq1CRAFWLu8v36TeQZgMjspWtv684jZWZBG",
  "key25": "3rPFCDX5hALvZuNk2KVLspsT5mnYbEGeMVDUFEc1SNBvfB97xWCpEU5qdCQEza6ZcCoXAo3USWahx9Xii1zML1Dd",
  "key26": "wsdyPZe9X1KmsaTp7L3LQbbaEmWCZ3PABeRwWfqPAwc9iHhR3YRhxb1n9rZ3RSbcxqL2u89QAaBzFNfCk7zB4mD",
  "key27": "3r4tW6sDDVDFUpqCPBEPB5RvRUTTbN3dBQhfPsbjPG5WvxWpcQyJyqJxsbXjtZRikyqrWTx5zHUzjptXmA9xCH8d",
  "key28": "55ufYaPbJJpg73KHyEuS7RCkhan6KQGpYrAT9RQMybregZMBhUuha4uRDLYesLRzuDUigsuNxhK46mLenWDwEtnj",
  "key29": "4qKgrGEUueXQ6fjevZziK7ntKaQ6KAePsbVbZHMHXxAFwRygEdZr3GHMTLx68MDnMjbQjjaYH1F1fY4hMKoXSk53",
  "key30": "3fk6J7zkKqg2ZgDApagBQpTRqxhHkq98iQJCKDYTpnyJ4NQ1EWP8tKcAYVZdhF99JFXWjfhscNxzWWzyBah2XCZm",
  "key31": "3dbZDg1mu1dQ16FBicbEeHJseSaqr2kzKGe72UBU7Ly8BZN4kYnSSBCiWsMKWeiWQJgfxPmP3Z2Xv8p7tVn8PRye",
  "key32": "4BLdv15qek8wUYSNgUx4oYkAu68288jodAyu9WJrazky8XfC44NucB299d8AaMky1CKkxGbNVVZRLPCLX3YBvHx4",
  "key33": "VudukV8qhzgeeDviYyiNF5DN3oY66XKzfNXNHUo8pGtboaoGf16MprbSzZezNK2Kk5qAF6NJwXbFhj5Ch5fSTm2",
  "key34": "1UU9C4LnYhguFuztGDTRybGKjMezvAgsoxTLu7P1DEqSNYjHYVFu2bGHAtYQkyXjHT6mBQewxhVPyJMYPidceqX",
  "key35": "4ZjXxPwTyRrnDcWmK4p3dToW67NYSpvdBN87EyqadCxBRUwPMDt4pYdGduCRMMpjrbrqkxswpcNtqwoxhi1abWkE",
  "key36": "5gDkyRd7kjpUSxbtGG7vwYXPN2dafsDeYDTcSYkDy2sSE46m1kjKKHatJ3DyQ3wXDLoPGJ2g1UHowYvSTzpVKiHD",
  "key37": "4SSH6F361D6JYvyv6aKDpXLLEU2dtJx1aCa35F4eeyn6XWNfX8MDEeHu2gaySnZUy3Uq3tRTWmC5aFk9P8cfvvh9",
  "key38": "3Jas4xZGRaKMbkPFFhUHkicwrcRVbfVwPghZ37cWG1gmfR5Rd4UeTbJkg2DMGLsA3JrWcyVVa2tSaWSZhkbzQP2N",
  "key39": "ZSJX6d6XqDseQrUkQDseVj6VPCpskzsKDWvMfzzcu2Q2cCA4CWnMzfPE14e93eaErj173YX6EaBFPrQGUGsWsnn",
  "key40": "5pvzqkqmh8BMyQcaFjZsVpibvYY75YJc8ZoAW6MR4sMbQqYA8y5vbjKMLQDQoEe3cWKTbedfHPW3qCwZUGfAsT7R",
  "key41": "5n7qTpb1M9xxSnUsQ4tgnobcJ1i1eSaeULMiEdvTmeBcX8efboqgzoCPRyRoVw3auqSfRTr77xtLSU3KSrPWwhQd",
  "key42": "523R8pnZdMRaLQJpJ5jDiuMWZjk9QdrKQ8aNBers5Uq6gSavQcapcnjcEg6J149qRYQ4Jq5iEcKMZX4YZVB8qcm8",
  "key43": "4rMbaMxxGqUnyGtWuRQHxS3iKWcpBP9GKUtYVj5igp6g5jdEzg5FnmtgentNvbfz5SmF3gtQU9oP5RFX76zppZA1",
  "key44": "54tGNUnEHTkeNQwhDu5uBN1WZFbcqJWh4i3a9cWEwSXnqENTu2ru2nqa3TwkEYwZgzNkL7vbVjjG3QgVEMyZtW2L"
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

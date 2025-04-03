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
    "57fvMX1B9vzZbVXe1J5bmhsDjA4ZTprBSqxKew4Q3MPrqsAPiGY7KT9xRbNAFaPbTUFfUcqd4r6r1sRiiERaEZkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6waDWxdvkp6uPAFmBPjcEd2yB4XZW4Wt3s9GtcjgKwDC7EL9Qd8tVPbQPGaR9gce6oQYTXctiwoEMyEcxr3ewGA",
  "key1": "37YVLkeVDLaqXF4EkQevJ2tyo4Uxx7Npx91AMFUMrjW3FUfW6WLHt4ZFNda1DaMkg1MBm4eJGjkaGufwp9QGgWzK",
  "key2": "3jDTKZsUdYYT9rEH35yoWgCRhKXCJCV53ofLfYh3gsFnGaKub2dVwijE7peCYBxhLd8QZGiVn6hnMBFZxh3VQjDN",
  "key3": "5dPy5RWG6shniadDTLsfExYPzaZHiY27b6GDMr3NfVnf8dDUoMPBsWMtBzFU7rWTPEw9MMTuYHkqymhmvdVVXPMd",
  "key4": "vtEurCu7mRhyfJDQEL1a2YC3AYxHn1KNMKAEpNzZkDZDgQUK1pB4EWoRJVht57JEojoJATPLWHbLwPSpWFe1Y88",
  "key5": "2pBtCzRDy92Jcewwfpn7pZG5UuFjceEQ3bsXL7sLFPqKMjjpcjD7BXbzHLV46Cr8BE5qRMjAL5nyF2mo6Xo2G8bt",
  "key6": "4Bc3uucLgtq66B1hMzmZNQnCojU2bjGc5Dkyb3Pxp6ahMCLxMG85oVeWnGG9i2BRg3xyiZsWTH9R3Pr8Qfi9Czex",
  "key7": "5F7Bvz5RpohQLBDjGL9oaPpdtjnLfsPSHQ6SZovGomqWTwkPXTdYb7hutP2jRajpp6zzcR3WUueEijBd8rSxPLaU",
  "key8": "QsSQSQ6QhAaE6DSnmQS1LKw67CXb5xZVPk8Pvnu5o7HV9UfnmKQUSswxB93PVh4kbjfUc2BL1bAaGDEsmSkaMnC",
  "key9": "X4sGg9vzzboFNjgo8d4DowWvoCNNkE72LnsTvkTava7EpXtaMsQVpXiMpaJwA6cBX2fej77Dsy6VBsYzCsx2iPn",
  "key10": "2vCXojZ9dBvXBnwBkh5oXLNxn9EhrVHQGzZFYCBKWYEpvjMuZowz9kPjEvLfE9JvdTH58ExPhpLuz1v1YBkT34oW",
  "key11": "2iK3Ay7NvtFEdnN8kzG4z1vAYJdikcTo8fH8xtZudeYEy2jZYzWcAW3hQEstaW3A8Kp1CNJQJaEMCNYvvpxcYtrj",
  "key12": "5339uNFXukikGEaYiiJ5ZwaxeHyTHgJgai284g4J2usRYC3fhBEvw4pFiFEofavbiAZxXTANk1aX46MyXaHDHHcA",
  "key13": "4jztcRazJHNEn4uBBTC9yere1dG2Upmwcb7c1doTEPmgZviAHwGgZhZWdxavajBgT7XPii8fbFWqzRmrSEk73Awi",
  "key14": "5ukbQuwVM4MBMT73eakDF62v9mQrZfCpQVVVkzcMeea3wNRqvfWN2TwCLEX2TmURnUMoe1s1ciUVTABUaTfBVT8e",
  "key15": "4ryLJpcPxhPyvm41rdBM5fFg13J1ZRoaqqkRwqV2g8mKY5HsiMirvQcMwuMUfp8Ujzf1iegmTwTbDbgPtYxneDx1",
  "key16": "22zbFRutDCuPXJaTVWVwSDAFpVtiwVLKF5NaaNxCZuAdgXZNu2Dg7oo7sinC2KeCEWg7e8o5QbwUfSFvjs64czaK",
  "key17": "2hVxsngjwxGVnc5XDUR22yTjmoZ38WXS7C9VsVEwnJeEy5GxXYTjix5kXSe2DCSXnQi5smfFAP1HnBxbovN7wtFA",
  "key18": "4mzNvJmxURd3DsCqakHucekhsFy96tJAym2wECQyCDqEWdf5Jt9yXJGXaC416nCr2LJHVTuft9NV7xkZ9t4qykpx",
  "key19": "Jaq52giXvNT9E4a2Hb8jCWoS8wo1VvqxG2taJ9Ms1eXTBk3vAkhyefjDWSDZTaS8HVtJtNQzfEmwTFQghwTRZmm",
  "key20": "2C1j5KYMkDotVYDAZvj4qxz2idesKrwtWyCBnimWScFKtRqvds9Nbfomr1w8LMkAkAiMiZbQUPc3b7sRRtpfSQXk",
  "key21": "5kR9eZixyY1soXJ4UbmezdRYNAxDBVnta3xYPASXiNLUjFYz5JByzrDQqFiGecAXhxzSWkrA689EbY3QE7EP8dXV",
  "key22": "Th4t6CBwTAvLwtMvCb9Kjt25dZm2jFQrRPkMscwEeko9m5kcXEbuMKt5pfK15oFyE2D5dhitGaHQ4rzEZVJ1Xa2",
  "key23": "5e2ch7ETCxABoDw3eUKoM1VF4KkmeN12UcT2SQsGLKHewzdYhyRbu3iYVdKb8ZwzpoqRgK89j13Mgcvm5jdr64NH",
  "key24": "3QZuQ9rHLsyPKdTapsFozvmZGmYNUyZtq9KwCc8coZKQZGft92kPmiNNYmdD6NVpcgZEpQ3pRj422QmogUSHWC1v",
  "key25": "2drTs944sg9ovLuqLvSEsJgE9yeMVoRmg8LwoozEtxZEuesQCs6etwch4sMxNEm7NmPpoWq1q7Yr6uFE61VjSiU",
  "key26": "5Kwt5BHBaiNmWBFSpRr8nbKkX9oFuwwXvMSqHtV3LbwYS2X1qSR7n4h8QUUmbo6PKErAXXQgZJB2LrQZMS28efKv",
  "key27": "p6z5LiVbznSCrYtKcnbmTboNBiyyiFj4VQD64mVMJ1iRejBEZY4xMpo6HRZL5z8bYUg6959r14pKfs4in46o3h8",
  "key28": "5d23AWFx4jRw1yFW2aGxxu45ycPkmqFJB3oc6ABohyqYztxbaDTXFqGJpk4miZWr7pKoAi1xEPE4q5hDzTBwxvP6",
  "key29": "iEBtNHh87StJkW9e7BbN1j6GrvePxZrdXDmjVB8xvxpkYxiYWZswnwPriW8UhHGmyLqZiM19dpQ7uEUmhvaRa4R",
  "key30": "5m5dNKiyLmcD5tsaPQV9291Zmjo2wnFpH62Q87xDuVQbjaB6H5GyYy4kma6Nq2w1RpksB2gEfRymZ9pDp1nXEK5z",
  "key31": "4VrPvqz1hmR8HYgVPuYd24WyBKz7DViCX1FvcEZfvq25Aqh3JLFaW55vniPw5zwMK8tj4ufXXCtrSdf8LKuKP4iL",
  "key32": "44z7mEw4dys9wcN8B1j9zomUcaEth1DJJx2KqXGedgNPUvuMzcJC2HfiovJESWWZRudGZbqUyag1pGDvc9WEQ6zU"
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

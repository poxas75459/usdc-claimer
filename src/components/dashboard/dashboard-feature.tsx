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
    "5fhLNCXVhWyH8JhZzAfRwdr5bdfRZY37QenvQYfrbbrGZNtuWeFcSPhgKE99VjH9VpauYf6TB9s78PCDPC9PR9tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yeod1URKSGBCoLvFYm7XZmKFNCiWQwohaHqnRw9QFBdmNMPkUb9aFg7VxmgSk1gViTvbSsvBw3kU2MpyP2SHRhD",
  "key1": "3dv1hBPcX2mCsArmuiNsyQ4bEok616hRbqkFa6nCUYmtJsXCr7e7cgqiLa7J6DwaNvdGaMQB9s45qtVhvnY2BN3i",
  "key2": "31GPnj2WmJtQMm8H5U3Vavz2MvxthPSNtXgzHhKAAcgqHiztCNrMKauRNAsL1mDWTF7ZvzXYfuGUEkofc16YpLTC",
  "key3": "3FTzrECBqQbxZAA5uXBneM4sLGNvmyVYs3knLHHdMWsexBBW1ftwq8Q37pMse27mQvZxfxPF9rac13kry6qtSC7o",
  "key4": "ywtGSb6kDuekfCTv3LvWH2g21KRwU5Ggoqc6L6xewRijaQqhYE4quoMKMbs8NyQHJ6dLQCz4Znxn36oBQrALSxe",
  "key5": "2GenTLbNa4d7GrrTGTxNfEhdmXZs3tx46Rhcn1jmh6gSR4u3wYu9cDv4uZBvtDbE5zojc9U6Vp7VtWA6Z8R8vNqF",
  "key6": "6z2rXQy8poTbGc9toswmGQhg2Gvr5VhbN7oCxSrwtbqeqAa5fv3eAcUaj2CPdT88KEQrTh2BAXu9xLSt1D2ompn",
  "key7": "5TYjoDLKdbfYvpCwu6yiCcLQn3DGvd4pBbwaS8GLLuCp24XJGmLNQdqfMyajpCGUebxa9sQrC27ZdZVtErSBL3Uk",
  "key8": "2W8UBbxGS3ptrEGMQBjztdrC7NvvEVUe3eWp632BxFr298aRhoGuZeXCCgzBi89kQsa8znJKmTA1B2GfayNszN2V",
  "key9": "2ro8ey1eqjiDAcH2hHskUbJqkpFV7mMP3UuYZigqVzohoJwgDRwQ45HQGdpGxk9yjULEqKbmWVBhYScDokzATFNp",
  "key10": "4841uXuX7STdAC4EHAoiDrBvXbZM4n6WFe6BSGvWarHMj9zMq1pAWh33CfHxzpAGFoM4y1Jq4SMeEqKsXnAfeiQV",
  "key11": "5kyDsBmNhoXEVCkpqUSa3Xxr4dkjJKrgqEnpmm8R5jMjdJd6dN9SKfVGjV6HTqH6ZvmR6ANc6Qd5BisrdVnqTPu1",
  "key12": "PjymPfdmrYmiUF1st5Q8rVY1rsAGAPehTdfT5ZRffuDAupo2RK5xvaGiHkfZqo2qmBkB8QLyyDDpNYhL2PmuVJE",
  "key13": "24uEEvQUzgjUQiqW4h5XPKt9qeeQcUgFBncvvM6E9RGRoLMvsd47QZ783CbdWeonUxCcNVQoqi6QPLiDxsJgEoVM",
  "key14": "hqqU1x5HX6CwhQpbDK7yGyQGMR8XUGJrr5q2PRanfu4viEtSNhjcGzRfBP2YgadrZUo36oeBhNLGgXTMG9vQQKf",
  "key15": "2uAtpR2XHH5teZzSzV3ZaMzNrPrHJXDs319m26BTvkbacyRgHMnmJdZ9Dyr7ZdZ7uJtk8XbUfAwYgqiZFWfx1zg2",
  "key16": "5z7ynhKNt7iAMP1NCwMpidhJdmXKKk4Zxvp9Ra2ZiSwwPeEg37kM1qQq4cceDaFDFg17AwbfZpscHvBe9WsUavq8",
  "key17": "2tG6NygcapfdmKjMd4WUwbAh5a7H7fEYfEYsz7iMskocDzW6NgJY16oF74W6nHh5ZAQbY7UQgkxQtibpA39ZdWz2",
  "key18": "BAy2yUL3rdS8kZnExWiL3boNDE8efv5X4uPMKofc2eXmCqc7hqKpVcMJt9QpaYBwhZmAmA6DvLKMfppVyDLZtnG",
  "key19": "5W2ZZGYxLe6PQzWd1NzYTWKktoJsGpTnpYfDq5RksHpQ6KPuhzQ35d4Y2WNB9Kv5Y14b63Z5wQiVkMHXjEg97vbP",
  "key20": "3yWQxXWPM4qXfFPnfJTpiSCWd59FWKMbNXbcGrhi8eXorwucBPSpkpn3RwcVckwqyCDZr5VRoVCEzKWdEgHukcuH",
  "key21": "26okgcc9g4vNMkkzoKWxKaoJ2rTxqcY3CFFY7Tc5JfgnVqvfF7inneC76pWQ9r7FTgrqCEgqpwHHRAsPUSCh24VL",
  "key22": "3n6LhZp6LcsTurEGPfHk5NdvH4ooksvbHNAJKVa5zksepmnMQNo8Vi11SHbnUAxUSt8AQuBT9Ce9kWZC4tuYPT8D",
  "key23": "747pFw4oVtU5f68rq7Z5hz2RnBqy19bNqsmBdYmr2VK9MxLc7QZyj2RGmeba225QGsoHvfMAaZegbXMMHE7uGQk",
  "key24": "5nuoa3Tw3FsvhqWWHR4g6DuVeFdfiUwuEDSvhVvZ6wxyEUDHTpk7xi7XrfsZXGDYX1R12AfwUq461csVNEEwqy8e",
  "key25": "JSe8wGpncHVXn1w9TcciaMFnFWuaA7pFq9uC98As4tvCQ53WLuDgEkLCpaQgp4CaVhdtEPLNoJcnRviPLSrBVy1",
  "key26": "2cbvrYGADQiYqLTUWf2zAzSfY6WxFsGU1eHWbToo321tfFis4AeJXKFN6Ld1gz4LMrW4tTHAU6k4uLtoEH9XKpTN",
  "key27": "3eneE6QdvKEEKdF3NFkaLgdPNACRosBZgzU8fcxUZ6iKMZLhm2txp7jWfCc6ijGzZyfo72bYizCqkFvzURMWNJ2u",
  "key28": "4NDBAnEahP4CKyDpENJSCFx2bEM9DgxGDjJBx4xQoTcWBHwHx8yoQLNbrrLRQqJehJGF9juBXYzp1B85ZrEPGvL4",
  "key29": "5mp6tQyR5CWQU8s36A2AmuL7Tv1jtjgqkDdyhqrMNHnjP9WvWHTgxSHQqm12WNSDzD9GdRsyC316nxpHXUe7SRnJ",
  "key30": "2pWd5E6RaGy7111tSnb5CBML479dNNNPWun2znF7P9mW7SHu8LZpBZaMZjNWyXEH2AG1Aq7CoRXsuo4tcH9CmJxf",
  "key31": "4ZLoMGdCnActFq2GLH89FigntPYtT4rLL12S1dVGgNdPeQNGL4pE2B34MESfXFCz1UjayL43CTdv6qm6dUqUZ8Vj",
  "key32": "3nRQgmz8V66LSS2uHDAoQbN4ordtXeYi7ytEr9jtL67h1Pdc8cAbZKdjTtTXwgoyjykY5GHDfNieJmub3FVX3H1s",
  "key33": "29uS7tGDbfMhNFrzipSFcqB2BYys32uaLYfW9kgaG1Q7EG4W97GNkt1oGDARemmihd5FWrBbDUtGfSrKMhvNNxTj",
  "key34": "2EUKtH1DMeFUKnmrpgdBe6zdXsPWJYUmpQdn8mM8Ya7L78KMUxHMnnYjpRSUNepV5KRcTtbuqJvyv9fSGZsT6KQv",
  "key35": "21Le1LxRozt1RqLtPwF1XYWHh3jCLVjCM4EuHbpzKoMBvQ6rf24zi68zxjpgDausJMq8aAgBoj4ujjtfpsH4f391",
  "key36": "2VZbSTm3yBiU5pdQ7LhwUrfsz9LeciQMMSGmbukm8TVtMqGXE7mk81o21QaY7TzFc1dWWMkLNoG3wN2oQYNs8u4P",
  "key37": "3PjmyhHs8QkFQVZwAD2drAcxVghbUPKLjYY6Uz9Cu1Am4J9omGZPo779rRekcmNVQigD9WwvXABm2KzE8m8v7EYT",
  "key38": "25KBFpFD4qNVC7PLSKAQSvNrsSPjNvrbYsG5Ch8JWcUN7T67LzMCtQdsBiFi29EmQB9kjytaVjLKfWsfuJpqmKUR",
  "key39": "2sRt93iRLTwu13wiZ1XK6fbkVXBwrKagUazbWmhGP9guEsJ9TMhHRnwrPWfzpqrXu43HtwKZZSV1m2Ggnhw4CzDD",
  "key40": "NuMzUXie3EgpDp22wBi1e3QERqFVfcvaExjuBraUWUNFPdX6R1E15cN6bAM7AU6VUrnfKyk3TPojAcJeautyLNQ",
  "key41": "cWfhFEjKagTeypHuVeaWdaQWe2W8fmJxzosERibHBtNrGqqbYy4ByJH2Dr4gPUcruRfx7EeXm16uQQcVRuNxtAQ",
  "key42": "5GABtrg8Lwh4VEykDaGtKeeHVusM3Wr1Dn3XV1bffeJm4pHBgG4oFuHicwXXFEQJzCzYhNTNQgGCeCCu8WtdcYsE",
  "key43": "2WuiqZTgAxUTULnnRjPgVXvZ4y8ER7DwDeux8ZHd2a6F3U5N6aJFJddvJoBFVNA297Zfw1thNrxxZZLReVrETnwv",
  "key44": "3dzwMhhJPF8KuM1Jfy1tQjZtdXb2EtcxJGf9hWFhYHjDajaRKwUG2bzYLxWgSGrFnZQNJuHzwqnJkU5KeySvQ1wL",
  "key45": "RSPJbNrFjita6hTFZyTAWvzjLP9sBBFWhxXshpsFe55EmsDVaGHLYP9rAoNaTHMKjF91uUWjn3UNncVVBX3agSR"
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

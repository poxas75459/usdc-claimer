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
    "3ZTLbL1DkQxABB3sPa14q2qx6c1mZQdECHypjwn3gYRMyHrp4Px3ErSJ3tmF3ATeaNFAcK4ViehyKDWDDiysHVYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xBPKaHf8F3J18ZBBUo8ttUS1NtAeox778Pqu3fbKYTCEGniQA89KJwiddDJcCt2wmVeGrceqRi4RATVkjGqi69m",
  "key1": "4tGnta6yX99VtcXHoqAMxHHyrNDKdx9vN815JKERaPuZ3YoKsSLELqWqunFT8mwvbUwt7ag5bTLCrvk1wo9csDbq",
  "key2": "2DRWV1GXjgC2zHK17KS29UgrJ4Fzdo37GZKhCxzFi8Z3cXRTHBA2MAd2cR5N6BpsLSVNJi2t8234NW9iNszGBN9n",
  "key3": "2pysx5612FUvug6oN3TfdZzPUDkcXiWAmVenPVH11kGyCApYuhNZp1uTZEgamRRyzeuPKe5weP9E2y3mbUivsmpH",
  "key4": "2ThnhFH6FkxuAWNmK4NxEZ5Hq5qq246KUoXRQjGqqSSFvxR9uJeHHk9nbroWFh7uBxx1AbK7nY8ieBCgdeK3c37i",
  "key5": "5qfuvC58fJxEQrUsX5P3JVYbzr31mHAW6Vrx9Ri1B7UqQoAQGLY58NZV2ifYr92h5BRNEFfMCUKBsiybLRtYRLP1",
  "key6": "5ijPwX2Mwf8Bvt27sJCs5YDK2oN94ogYMEgABk7DwZhoamqe3gtA7MiPwcHDLw9cPJTwdjLAXbBAeN2M6qpii4oX",
  "key7": "RyqxQEA6FgXikSpesfjYUVTBRcLqi7uC3hHEedyUL8h1PLwbQaUcm5ASNv78W9DGfiUqmh7v8aHMjtxNnu5WKxX",
  "key8": "3YUgw7u4LQTaot2FKbknEWnj7ieZAK6mKxRW7WQJob9rUZGbwPBekpEZLtdKS1yZ1e4Fr1oo9cpGn5XYz6wYA2Nq",
  "key9": "2S5Mevg3MSUNwdkBiD3BJYh7m2v3RBKtStunycc4K29YrdkeX3wVUYUoyD8mnkPyDzHmCZs3DzgmtqT6EdyeWygN",
  "key10": "2S5vGTEHq8RdKimmj6tBmMFUhDqw4j9qWDZ1KtJTnjWo6Wi8eDeFnDMFR9MK6yysu98fMYfq6X2bZaPm9gjVm1gy",
  "key11": "nJgCFXg1n8zynuL4jebSJqHk32ogk2YU9hNN53ZpXRx36q8tk2xY3gHXifVQrfdkseTzqEKTj6FbWFFnM7F2BuY",
  "key12": "638nCxCk2Rob8xFYMHxhrUhuMe3s6TFMFZuc9wLcorCbA1SaM9gM4p6BR3EYg5xRntUgqbJXNx6RUgs4idzFtXXe",
  "key13": "oRwBCfsE6SMznZoHALHg9DAiKpJ4hUZmpXiXB4ASBc6iHgrVMbkw7rc8kthB52qEeP7rwGFYeeJVipLFCHmi5Xm",
  "key14": "5cqiWT3FBwCPzuAafTPqs39Ltb2VrpgiwQVsuoYpuWiALQcPDgaPfRtKGWdvxjVu4poGG4c7ZezfDNYSjdVnHjYM",
  "key15": "5MJyuS6zF8PWUoGHkLovmJ3BZekiaR4XzqGmYmH8GXPp5myVAUXNMshKGxH4Hugt4fzp7trCCMjQhQdjGRdwS6yK",
  "key16": "5qtxiSBXENYmwEiPe1Znep3yanfws4BiN8WFwtMGBeXsauGDnLVtm4t7xFPTfZaP9pPU3F5nPd2bymH9fNDfCm1Z",
  "key17": "32KgJz7UuUTezzH1ZACMJN6SSwBeVjtvZ3tJadiK7jqkPpfLjMKwmdTxCpKNpoKb7Rv3Xvud7EtLcJUKgrh2scJ1",
  "key18": "4bTEXJwmvUxr3xSqVf3L8SNhrfeRhfedd2DS2jqsgDLTY9tQS24fK8CxdKQ3ABp9zCc1gqZRL85yU5H2E2HvfaA7",
  "key19": "NPEDPwH6vU9vdVMVgn8DxnFRJX3Lbv2wJ2fRqXpmPFzehEXTFhj8spEvBTsqejwRLqegq9Zrt4G9gCJnbsDKqWE",
  "key20": "49m1SeMdMG9bTMb4CEBhru9dYCg1VVD5oPjCdoK4Ab8hDERtNPo2Zf8rrmNaccchcCJHfDv6WBa2Y9SsThf2jQfJ",
  "key21": "1oxLWGEn2b8cjxyVSehYLcJbnCgbDHMKg4rjbZsAG7QTiaKNi2vnxtGep9T7gbjiLDkGWevwtAnzfKtGGvKDYFY",
  "key22": "xUpChRzH68tBb9tntKwqQWjnMqtMRbM84JZtMVSLxSVLUbNvvj5qBthz4mvJyjacAZcR9sZu6ZeA2stJ6GLFGge",
  "key23": "3vYgFFCw6xFwtZ5zfL7RJeJtCNAiiJgp7WZ6en5u674FUfWYnStEsHus7zkWFowqDwN473eu6Dhcvj8qpkStF7A9",
  "key24": "2gD44JsoiF771BsmyLdvNMbGm5zTptmEXR8qzwKjNKyGg3r98XktRTDEbczUuAwJ1xGLQBufVtEDD6v6QFTdpaVz",
  "key25": "5HiMrF1kXowaesFKna18NJUYHWUd5FAFLKpaKsCM3F61WerDZaJqQXWKcnZciH3pJH6j75THDc5zN1nEGziJxD7E",
  "key26": "5zgzG8ou94pNbmQFnbzzWEivmNhRiHtMY3tsuaF1pKL9BNSVBSr7HoohNNHzUez93L8bKnXVbScQXeVxiiKRH15d",
  "key27": "443obAwTW6Piww6kGX2YGKaoFxvJk4a1sapLGzio1QsYc8uhQYiU9gWw67RnAD1WmfLQiFr49YN2RjKVo3sXRGhe",
  "key28": "2NPaz8EPDV1FNdMsa74z5AWyTqTyq43D8KwxtrMaa77MXSL7WXAMcCqTsD8RR51tmkAp4wHzoDvhPDqFmNpaknLE",
  "key29": "eJicDTgn3Zo9m272GYdp8jiyAbTFdcHivQTEPxvpQyh7cLEetgbo2xHDqsoGmkifJuHvqE65taQDxTJ4Lgodn5z",
  "key30": "5aEgfqZ7QFnk6Xsdz9QMZTb3VyJ1CNXGaoEC1SDGt884j8aVZ6hahwTD9udzQB2PAHwsfz7vG5XBFHTNfMEBKkXM",
  "key31": "49bY6ia7szn3ojntK2wnHAH5eFgxKNw6Lon5KjdjJ6ozPhPJGuRVZXD793qyXFyjyMzy2MGd5SnjdFdAYJ3FaCoR",
  "key32": "2D2y8xL65bbwZCn9fekvUNPrboevDjJUf33bLX2Km1p9UbhGd79CPAvuqQdZejnBwbjyGUc2iB6vYSAMkkk8i3bb",
  "key33": "2pwNVwg6NdRYQtMESqadHDUv7W8wYZejiBCcKCG8Z3gdhQ6QvVDyiTuB1BfQ2mXg5LF4o67dJEdFs1XZBEsH2YdY",
  "key34": "LezhfSYUUmx5UdRiG5drojVnP3HSk273pTDBt2ZnBhc7EmsHqJrWtQTrLsePPHSaBs7kcMa3LETrQipfNYZcsYh",
  "key35": "2zP1JWqqNk6tdfeTgumDpY6UnrxCwy1pFVtVzSCS9ekby9uT1GKkKhXf2p1sASgfHNxF8ghpyBuE84La9yXCRQ2J",
  "key36": "2BPDJCStQoJkB5pSrJBRDWwaQXbkwPVCRmsNAkKbMWKjvhai5CrzSwsLbYZQR3heSSh8sAEP7R9yGu8t6XRedRZN",
  "key37": "3b4qXLttX7BxXaAzfxxaq7hKd3sQKQQyBvBK5GWXW68bU9oZzbSAAsb7sfWm6BEPvhJCnGefDZ8RnCuZFxNXz9ni",
  "key38": "4KcBxNRvUGtJN4aYnLzEwNRazVc2Ct41VySWThMySjTnQU7Dk5RUK8cVJAdzUJX51p2ahcuGD7mukTwUUk4pr6Vn",
  "key39": "44pCP692ucSxWB4eNeNbfCY3GL54PhmBsjBYFgctCdFPocb8dwdiFWPbvjsjRPAtByMKfM1MhRbTk7VGXjYPQzBi",
  "key40": "3ezukwFykFWWW8YiFydT5K7Jo9UoP1jk7KLsDVhNtSef3kRmT65g8mVztChekkasxZCN52xApbKsYxzUg6bJPhfS",
  "key41": "4Q5ELtdB8FeZSk1VQdPPYe7ykwLd3HY7aS6tWSTJ3PJfcuUJdQGMRQGrcdjSPWHF9RppWbbQDxF7M4Muh5sYgRP6",
  "key42": "45JrTBicfUdwepzjFuwq4VmYEtpRScTFL9CVfsSx2n6ViG22sKsdSDkaZLAiaBMggcZpJUR8CwWmiytxPgdFpXP4",
  "key43": "KZZcwieJt6MkuKTkTkrSX4dqJ77dEozWCsL3zZQYhpx9rx8UXtGQ7q9dNv9JKyJzhjmYMtQpZUuNWJN6bL4BaRR",
  "key44": "L7BjSHLqiYYQ29voHcfF118e8Bx9pPduAJjNG3PcZVVMh1KDk1dpn5X4pKCw43a5jifcNnxDfCgXDeDwi2un2yv",
  "key45": "4naUE3cEvMbjtLBMMG8TaGNKLvVEXG2xv6sdC3YAKD2EJXZZ1WnLB36tTkCpVnmqBVr4PTXffAok4DMSHCbaDRZH",
  "key46": "61ZbWeXCQ3bMnGWhBn74H5q6W9DScWiBdNXTEij45NsRZuuoKaAKdtw8jkTEVku77Vg8Ab1V1aHQBd3xzxuTJJjp",
  "key47": "44pL5GZY9FXmpZQbzEeCnXQroHRFerA6nfAGcGdrBxPyughSVLyXoStLZ1qFz9EhGkFekscXLbBffc7bMCNSvDM3"
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

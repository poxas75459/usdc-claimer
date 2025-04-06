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
    "531RfPgUDwgngu25DcFG3ZXazqbB1oSpCsRuWXnJsZnrfaKMSCzWScjZM5r4fqknVgUkg58QfNkNUNoc49F13SQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DkYNiyFDt9RDGfjZgm4croNNzwU2yRzRZ4uxEM4iR9pY18QEA1hBaj5dEX5CfX9naz4N3J6PU3GvHmHKbfjLM6",
  "key1": "3EVJBq6irdqCWkXLNSx76YRbwBH2b4AXcxPwJWjM6JF6j3RAeq3Qj6q9KaKMpnQBMe1UiWyQi8DNk5EKiFc5Evbw",
  "key2": "3d5DFw496fB7Foe3EjdcGxfkDgyvK2ZY31tTzvaPfkDorgeoDW16vhvSLZDLMC1uVTJF87f358GrDF7zBYM2pJKQ",
  "key3": "3RNTRCuKxRSAKT1DDCq8HGGbXdd7fxGGHfsr7WcNdrQffCTtvUu2QaR76QS298F7V3aozDtVFmksmtaS3wYskcsK",
  "key4": "2GxVWD3SWafy81FjUbhNTvNwtKHGqPwacSTkkPSRtKkkVBf6e13Lc4ixKSDi6Zww6bkcg6FCkRp3rQQAKqaJCh9f",
  "key5": "3a9UKjk6qgxMW2WWPLpSzHmqpFCaEiUAup858rRRpcEdPRsmPSGBdvNav2BWXrG6gok9Bx3s3v7YYGQuu5m4sbjB",
  "key6": "4HvoFTxuBuSa8wxzm4H6KTG9sq28hA4BVFSBMEEpBtp2GR7oRyQNe1aej8m4d5FiAqB4vKz5bRhEpecHZi3MTTwr",
  "key7": "2SR5iLG4TM4UDEcGueAtSEfRFik1cdrrzBmS99Zd9L17fscGtmdTgMosQm6w4U9jkBzh6Ux5q2WUqdAFBkE1zS9p",
  "key8": "5Wxo3qRGS4iYHEsJEH8hn7ULXFLrxKg9yCWYBnGWP66Srs1NvAtYasw1FSRxnmKdEwoUSrvHLQxeW2sZq4Duf4Dx",
  "key9": "gjbJxuQZeTiPFzXESFQggdGrTVyN4E2Qa8PHF6KDRJRkC3n7XraGvBAyG62Do1GSSzTHx7vsAU44swHDrn8gGTy",
  "key10": "5AN7owEnRxyYac4SgTaGzM5PAHkbnVFRf4b6941vyYYTNHXi6U63G394RUbBRYuusDQwa6o8kHZu5bRavT25AoRe",
  "key11": "5kxWrTMnXRsvSQm28uqkMLTZqvLhjro7g5WeCYR9HZcaFnT7NGaML6BRYdUu8hLfwEFrFbudYnMgvAwnTUcQr58J",
  "key12": "5pDRtayP5APNon1cvbqubdxB2g6iQkpEk4H1f6KkSWiZ8PomYJu5N4xrbPZBhJJw4YisBHidpFtxhjU2XfAdMfq2",
  "key13": "4dJGJZFk1CfPGsb6wz636SCGSqzazrdaNj9v3SYvEHwYHShoa3m5PzbjjFSrhWPK19MrBWnXJizdcUKwEWnwjNza",
  "key14": "43QA1STzC5Ubr2Pkr8w8aXtpqgiAxFp3sNTbmhfVP6Satp35CkeSZLsTQfvav2DG84LnrPPuytnwCvjioMJqdQeA",
  "key15": "4qCM5bKYPXZ15nMreAXWvnYBzsuVY6KrCU5WuZLT43dFuQ1VhKAnF61SmrJzzcXyxbAZzui6ByyQoWfV8apGHDpf",
  "key16": "48mXkKbuZXMFdwZtMPEPSU3cvSQw8Q6mCQgK54Lxr7fVjEZLiC7HdbGd8WrSJVhpANFrsNDEXCBnjpsb9QqvPDA6",
  "key17": "5hU2GiVZimiqHsfGykiefA5kCygp3uFyHVyc3sNbCU2mYcDWPFMa5stqcXySydbn1GMcKDanRhAeHiYLGK2MMV9f",
  "key18": "5oBh5H38BniZkdCP1v34qQLdfbePDzj7W3UYKcM13652nQerp1S1NgCADE6YUQkfDhRRZqNi1Weo8h3wTDYaRaw3",
  "key19": "T6KwZDx4o9TeQCiYTypgswktGbLpnQHwCPXxCqpAGA2GmacQJtu4WNWcBHTGSTqFyqCGYQLLCRYRMxxRWQ13ige",
  "key20": "3NvBV9Jp19rPWq36ybrzumbJVxrQFDbad6m3KiHi1xvuRf1bXLeQ98eL7JNXUYfbSKRUzE1tfBojj5ymAnzsPK5v",
  "key21": "4FNrwXeWc3h6oCazNGidjxXeZL3CNSsUUJPGA2GcdxkYQaZBggeqSDnEg7GxgwbhardwGHXnArqdgBX5XMBMrSoB",
  "key22": "znssKD7TWHpGMBi6nRFXwS3HGhm6WYrFGd9vNTi2HEiokgfGr3b7aL9C3f342tk6rpznT2wymCuPzDVeRQbkwzZ",
  "key23": "3xSbzN7GGXkwxhp599emdPEkFKYxLXSrBCh8AxwdUdhb32Bihhx3ZWGmwjNyumGPgRgwpiTm2wv7htU5k45MNLQA",
  "key24": "5hpoJJA3tBwusXMUJWNzCmSHM5KYw2rd3gDHE2CFTYVJ7yTNCVCwiGoi4dcCEoi3qFTyreHFwFiusv1BoxsM661e",
  "key25": "2GWcRzCDPsoQS14B6mMDVcFnKDDAnTCxpAie6kC3KM8QUHNbUaVEoLcD5oCYzs8makg8uEDcVucHF7dyjBc4CzyS",
  "key26": "5u1fShBWmGsfd31dx3ytQJRwHE3gZWybooFa9vJrUvD7o11RQMjaE73yv846qVyVoWH5F2CgS8ZW9v2HbtUWpSRe",
  "key27": "T1KJAM6aAMptCeQBLoZnWAPuX5R6cVN47P5KPimHNJ4cYxWWQec7aQbpAWeyxW1TdZ71zaJuakVBRJX2vAb3kcx",
  "key28": "4MYPXhyxrpx1rD5eQZjniaBPKKpsKGBZJPBcyt46jNkHdhuWgUPsTAk257gxZsPLoRepdPUHTQVgP567CrEAhfLN",
  "key29": "NL3q9ATJ1TE6a5EQL6BE2cUpVXM8nkTV43tkGLLhm8esXzkxrDj9bSL1FFD5542RixwbTVXpN3qdYV4LdhkDyMt",
  "key30": "4CEbq1JMmxYR3nbPKHVwpXQwzNd47WSvzT4VcsQETU2Pybz8d33Wio8FUcCXYV2wGhpRBrzs5UTa43FXkFhzFATy",
  "key31": "pQgxwc4FdDMrV7cE4PoR2BMMzUC9H3uijt3pF6f6W1Z7H5ETg6NmTAfFYkYc89PcPDyBJtHxmzoBXKt5nYN1Y1b",
  "key32": "2oagXfTJbCWHXiYNub293pygUdwnxKLf3iEqVv4mEEh3XSvg1QQVoCc9UzEfkMCGpqoZGPmFSDMLKy76j8SS8RwH",
  "key33": "3SXUCSNsUPH4jySmHWpCNTwAwt7vRGjj1Gaemf7S6Xy9HsWsxY1wkPTVR5JYE1QiauGmJgPDaotmwXSNUyu9U4b5",
  "key34": "38YVnt4HGqyAWpRK6pGCt8jaAm3qhwb8FjGX8cwTa7uZmfYUMpSiJctoMdJ6e2nc5mBRriJupNU2H5epJPG9QrP8",
  "key35": "2kWiiJBBvDHhB111217ZUGdgvUyGutSBJzngnokUmAUkYtjgWKqmqqcPhG8T8vK3s3mzzU8UG1r2yLEg4TDgrK5n",
  "key36": "4FbErhndY7JKm1cGPyne6VaavhSmtqqJKz9rLsktbEdmgyD4BWoKpnjwkGZnaguJdjw9agCGQZh2jo3tCoFrfoF4",
  "key37": "2bK5U2PLVLbnJ55kpckJwZFNKA8CoDTDK7HvYJvKrccuipZfMjNei8pCkGJfzUxHKrn1pee2DngwTZdCGGeFEFkc",
  "key38": "46NX3Npzqt7D1SDFbHUnWP58kmz6DATRZnUUPp9uUppXY2bEUMuE4MZjhnUFABVPgGjfhCeBKxDiXncKDn2U5m5B",
  "key39": "5w8ny2t5sHRB83f1agcc6PEUwhuNwfZgnAHdw7DpmorTzPNGwZMTWapXcz25YKeQLuhG5E1BmdzJsdUn4iY534t",
  "key40": "2igTEsXsVSCq7V8UZWRMYnDAxATJoZxyHXYDS2MBNCjHmA5QtAihYzpZweZy6X6xgBdriCFYkEewMw1JbVQ4AQE9",
  "key41": "nzAZnn5zeMXcyy6VNpDR2oztJxzG5579YdmEhaVqjeuTDp9KQitfZhhw54UJ5Wj3uKhkms8gAWLnHpiHq1nkLsr",
  "key42": "4GjPVYoUsD6DpUadox2uuncAzpCaDNrQ6bkjmJ29pwnmdU4jedrbDiCsFTALhE3cXTM1Uvw1CEJ8xtUjkR1fzTeT",
  "key43": "21qgKV7QNdPq7CkVGob3rLYppFeeH3W8PWjyGDiqk4qhcj9jSh6Lw1pPkNENfkjpTg9sZp12SZoG1RpwSNJjaoCX",
  "key44": "H9xovVQvn3DVSnXQRZnAwUtxoevJVmMnuDDReQxLqj2KgyzPWMzS3PqSf3qFdsQbMQADFa4ewaJVmZ8Xc78soVs",
  "key45": "64xPJb8bNWtT8fzhZtjSzvBmXdR7df6GuVEZXNyKkNvKfQrbozqQKKcKqXLpWZjYtQbjCLiHCT7BRhNgy81yQugZ",
  "key46": "3YiyqNVZXhoRFCKxjDT7NppQkmY3S6aZNsMm7gpP6aVBaehRu6CafhEmdVXkiaDgjCD4uLWYrAj1CvQuNjQcfL16",
  "key47": "57AMDHVRAUpSB9HTCm33WcvmnXBsAxfRVaP1EaEpCobz3J9GMvjiXVexrLxbZofJNRvsCUQX9Hoe7pgWdpmZSG2f"
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

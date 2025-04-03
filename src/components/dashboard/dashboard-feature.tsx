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
    "3pjHWqJ2E7a3bppUBdLTjrbLZMPwJcWVmiKPxC2JuinXJrxV1ErUXfXJY7nF21dNpn2RgC9pTWjHzJBkJn1oUm7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkA8AkovNegRoMGXmegra9deTMMgSfzYSCHKQ64NiKHoWs4MnehWr6KLVV4ZEEAmxF2RDcvao2hoaD5qbGv6v7n",
  "key1": "2nD6MTBDwc3A7jRDN27GsmoBXdybWdQMjX8zZxxR6akTsopYx8541M5i9WUz3gkADCc9rTEwTqoL6BRw7atKMuk3",
  "key2": "3K5uVTxH4mpryjVsuSrkxoDJB1MozzboMkrjVYxrYjwXJvmYsGN1bHmfwiaDodQtYSvKWKgWYDFzbaKC2d7AV8J7",
  "key3": "2429mgz35rncomodcA9R1EiLC2ZFVXSz1vrWeUGZvGEbR359k2ZE6sJD2uMYAkUfcHPZ9RyqR9EosftzCLAxz1MQ",
  "key4": "4PgmAjaWd6ik8C9tz23KzJA9BWsGQD88re785f9MSkiTiXUo5vpJCcHU7kj2Suzjb3RR7VbvYXUDL9t9RhMhRqrN",
  "key5": "5trM6WazmJC9AHLXQf257hkEGCQaq6dFAyrLxzaVvPWzwVYJARDmhmuLU3ny3ULJ1cme45DniokdY5PQebpxfrXD",
  "key6": "4XExWSb9M4Q37pnhShLuNuPeW5nnGUaeeWy9XF2sDhnvgLvdKijzTneAXStX9L9yQucbyXy61DnqVybG15Xwd5NF",
  "key7": "5HGVbN1eP78kSTjTXqCGAX5uJdtMDD15CPCjDfmEcKgBSxaJq9AZDhC2pZzUuPtKMWRkk9vLZYEUPJEuDt7MJmWo",
  "key8": "3fAM1ZESv3U9kN9PfARbfmXttqniVSZPyeHSHxDYTbcLWS2Du4hqJMv1mbZgECKivWYpesSsShZmEB9qZvaE3THq",
  "key9": "5LzmSfiB5HUfDLjmYC5sC9Tmyq83dsGD2uc2CjeAPSr53VLQYg8kke2ghk9Rrt57ehZxtSjkRA38XfSo1kKWRyus",
  "key10": "4CNBkR4i8QtYSQvjra4RHHunxNqo4zj6cVFkp2Ew18J1tL8bJxVxBQY8Ez8r5PWVMrJGiny1DdZLDsSYJ8LaeKHB",
  "key11": "4Mi5eknRHzPKDy16PzqNBzn5uYukiErw352q1NboVXrKjaJtELPdzFvSsmvZe2qjyxVnxUz4aTtbd5fNTgTmB6yh",
  "key12": "59GjXhwmyGjn6tPTSJkE7zjNCA3C6UCpeVMvTnuAeEUm85XDiQnDvGRC77GShRvuTJQT9h8r63kSimvsSkYd5DH9",
  "key13": "281kEh3NfbziJmjaG5Aur9ax6ujnANNGHnTtn3tDfGaucqgmUf9hDHbBwB3MCgpppEBZJAGJuSHruSfa1TGemD8K",
  "key14": "4tzLTvsCLpKCoLSgW7SmvP3GFJjjT9BetTx3FHbmLeWmoPbSAKrWwFFrZW2csCw5QaqRk7V6xm8nan9rkkh4DKyr",
  "key15": "4NwF2QoNjCzz8nqSKNmyMw4UpRLLkhEiF3KFDSNbnjx7h17tDSrLb6PpsWhaaL19qfwGAzvZBJVnmpjQN8eocssd",
  "key16": "3JmoRtfYFVqCtDtAoM2NDaC1R2SY1Dwt8zT7EEp4giuuQZH2pAabnUuycs34oUj1qZ7o8cGWUusJw8rvJ1saWEfR",
  "key17": "5bNMv8a7Y86H2HSYWhDG2QMaNL1HhBPXtWp7Z1YdFiZMuP3LDjQDFVhku5JRKhdox3rhh917U9UwooacRiYfugXL",
  "key18": "3dcSS3rU9mV46rVbq8FnoseqoWfusmVprrq71r9zLB6j3KGZKvd8UCqf8khEFG62hpcH9pLFjxp59EUrBw386WYD",
  "key19": "5jt6ZzczkB1fmP74kdHc7phoX2A483hJM9pVpGbt93JwTkvoduN1Mr8CQKrXrLJWNDQQr2rRwJww9tzw9KG8WA98",
  "key20": "9gHmGDd2YGSK34N6tJacuipKty4MKNRsMLJcWmwt5m1KCuP6JEwENv1qjWAqmvYj6gA7XRyGADYMShhNc75QPv9",
  "key21": "2GcQgnhMCQsXdmLtcQd1AFM6RiLZjyqw3kmejuNcEUep7E2AnjPjLAPaGpbhdTHbJyx7wrz2mFQLBTG98rrCJVh6",
  "key22": "4GjDE8okTGwvqvmSWNkDNxdCGb3gwfK8Gpdt7kStXeD7bwfy9ZRFrZyMwJThDqXuUNegfWW2QE4SNXHXojuBrBHA",
  "key23": "3WMLwPvcd8XJffaXYhDpAtnRFyAXTgfw6ZVmkS2BeBfXHz7eJ2wHU2zxWDkL3sYrnYXaZKswB9sM1L1GBa5b7tUe",
  "key24": "43vAnLjYvZEahwqzU68vS6FBR87TbedtQ6rqdpJEM4Gai9m9wLLwXCu5nJm1szJMfc4bFtnB7xv8hGNneqM9jtNw",
  "key25": "3WnjzkuXK9DBRD99mUuUmxRuK5T59VAZffdpPJvyKhPEaV9zZhmfkhFV1AERX1AvRksQvQZ39FfX1ccQ2gdBfjt5",
  "key26": "EGYUaoYeH1j7nZ4ipvFFMw6QLbod7pDjafg2pTk6NM8napELyWL7vonZQjpGmA7ZxkiXrzR3GQQiC655veJojuk",
  "key27": "2oSTcpm5GSRNuk88fzmNAPLTgo3Wnmbe1oxTPtHaG844ExRapWCnhM8M8ykkNAWiTDp72myjWRNu7YNwpY47mpPq",
  "key28": "3B3uPbrP4xGoj1oVbsNg9gPspmmiRYDSFAzgE52P2hZsWA2mArgQsT2aCqB1fFtxXHhw9Rhg28e7njCc3Ep3DDyr",
  "key29": "5vMsdHbXx7mnAeErxVwrtdc12fKb9UCEX1TtT4jCPb25TwkQRTEpbkA8Z4bFxjDVH2YSr8v6CZvftZiZmgCJCSuP",
  "key30": "8YU1y4yjE2ZKATnEKca82zr16Eqq6a7iMh3LNJJCZDXRPwb2jHNCudd2RHKYYWBusq4en6DUZtnCabe97qKdUWy",
  "key31": "oz1JYm6ijy5LLUQNwtzRQ777UAU2KQ5GaxVtjMXGWDMs2ZoLf2HeVevgzeRgn2FJPntYtTmBHgzkiWQXhmPk4Tu",
  "key32": "Ve2hZFMsdCCw4bbUU3cZ6WJANrobEe3UK1U72rfMhECQt3Rda18sCgWRiwjWJ5rneCB377GViEGiqcjk5JYc6Qp",
  "key33": "hk9AnBeNF9kjGm4VGH1xnLkNeUstFk9Jhuqgy8hDKksVcFgusd3kG4qrCEWH4zJwM1iwksfodNDmnraNWitYq17",
  "key34": "3zY3U4QfKievu2fbtRHeYckYLu5jd8mvrWA2nT81p66hX9niAe4hGEoiBPCCDyuiuHavxAgr6ju1ekRgavciGtcv",
  "key35": "5bNW2BRtEeMpDou8CgdD3N5B3sytE8d6UphEAY23j15doHcnKsAhfasziQYGRmBEcJDBctY1EZV1jAyv7hYZm4qb",
  "key36": "5thKGtoukzHpmV2qpwNajfNhziga76GoxrTJbtucy1bGpkzZPr7hj2zzrABTmJGPBm18bXjtixFhAcK4RezrzmxQ",
  "key37": "5PqaN4xeRfvtMCKgSXvWMXNnWxsJEErjmU4m1TcPz8jQvDbELSp2vEpuNfdDN9jgZtCUYBEHVYC822iEcaT8Xwsq",
  "key38": "2GQ1JPVhQoXR5Hh5z3Ye1bq7JcZbo3RvmowTPJRjMHRiy5VXTPEnXVaJVqoAYfwGA66kZWhYdV8tGS3aQzDvxSuz",
  "key39": "5TC55EeMdifZUTz4TSu83nNwJM5WjhNYXKmD6vtae1LXcUC8UuueXNthjHJPZ9jtZMe3sAZ5vayMFBKhoJiGoKV9",
  "key40": "3LQsjKv71BYVThLf5ZBKPLktctGs2qK1WCnmkuDc5eyFCUGqb6wEauMcHFuBr4FLYBXq72pFVzwvy6j3YDzBYGGB",
  "key41": "5W7DAfTkBoq3BcPh5de3sNRsoQEeXPAEVRgmuMVVN3PNVNNNnVYCKvpwHWELgcCprNbhmX32QXRJ3vhyHD128qmP",
  "key42": "2fkELRKV3uXDnwvgh5vKauVrFYVrbpzJVus3XD2xsyDBhM4FY7fwEyAjpgUGXsrTjieCmqmgD8L8DTQf9rGDYYwu",
  "key43": "28eFSnFxRjUvehnhagyvzRTM8wieLY9Y9NJBmNgG3TXD4ZkSAR4ppSCAQNz6kEBa1D9hrg9c6d26ykzrb4gy2K1C",
  "key44": "4gLrfNXvr7SJuUdHnQWbESzzzgaBEpNXVt7HvPiVwGSgtAQhqheHNGMrNvhA6qEW5MidWif37bgD8VRHduXfY1VD",
  "key45": "3fX38BJZZ1Z7bHG3rTEBxBr8FCxYWxeH66WJkAneUpkhLCPK8uK2vsgP1yEaX7Tt2Ezh77xwiuGCpB6wb3GRCfxM",
  "key46": "2Ki3ExpCZFSx423bMefso2SPAviPKrR9NATA9Y4fr6BNtWB9uB7uXFZWuhHyC7dvGJgKxYWJfzL3QSUqdp2fvxyJ",
  "key47": "3NqBDzpUa1bzBx6xGpCdxgZQS4L1qLx2erLcPN6eD8SztuqqLzSYkNsFMBjtMSzwDDkgV1yaUnpE2bygA6sJ82HW",
  "key48": "3ZjJ2CzhD1qoJnTmCPPmJbTJWX65noH7DxPq4RTWppvMszTAdHYmk6TFsmWBV2PGDRi9dNHzfA6LB2cCqxKCH8ZH"
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

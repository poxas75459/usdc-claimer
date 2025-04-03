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
    "4dbgumu4TWXtL3zwp2Qr34eXe4S3eqWtX8aejpm3QyTET3h75LYra2kyJcmyu4Tcps7AmpEXRGNdTGGjnJXzwgjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJJZBNkmHSA49r56nKyBDLW1MUMB3UP2K2DVM72x7oik55evmp5hLdvcmaYhNLL1X35kXoqGWQgkwXZCuXpqzU2",
  "key1": "HexhBLyfYU7kpbhqig2DJyAmBQU2xu4SLSmpZiq3HSFVAYXSkXEyspeuYdgDZiwwQmc15VqDLqViuNjed8TTG19",
  "key2": "2dB8MpivgWzKTKZ3xQ4wYegmsqDpLatM6556QTRCDDcwk5XbxweFSmtviB2FaBt2qSwCnTZuW6pK7iwjLXonHymX",
  "key3": "46Sq2xAdT4WjE8pHSbRWpfoE6FjtjaPGZDMNHNqgRqb5cNALFNyiuHyVcBGqnCiPAGBR2qrh9zVqviAtvYDV1rUZ",
  "key4": "1T5uwj7Ef9pVNi2gmd6vuHHbyTwq3AB5hULx1pHLuJucsQPPyCUFRK3esMGzYVi6RuTDvSeypuLdWDVcKTWNue4",
  "key5": "2A45T6fxmGi4LCZNcptTzA2ZZ8sShA75zxZWtM7vPYBzfed8txNE1F6o2YhAhGKJWvW9tcXjkyXYzwX23JwoJSjH",
  "key6": "4j3nB3b3BkVocCMfRNhUUd66sxFM8JxuqWwBVUizvkoy15eDAT5xUN6zzSV7SmubcofBhrWXDV3N3QQXRrh8eUtN",
  "key7": "5jXpe9CSJQfiPK5AusgAgdVUWZTvgjv2t91erb2JaqG8uepkzJnPgocBuRef2rJmjYUjbHA9pcvmoGTqn9LHuwaQ",
  "key8": "5gVE9PvCZ61bMEEkX4cYAWHeTDNSvr1WJ9ewTzqv5hXPZz5VXuGLSJZACGdRHjLkYUvxv48PdW7mwuAqj9E2pVor",
  "key9": "57f2B3o9rGMdvLhHUrcxdN4VcsdtcY2b3guyyMTvtE9x9ZWaLdyxkxRoPZo2C221cmp22DKRbdjL7ELg6yByvvHR",
  "key10": "4ho4susFMuedYeshy9ScmLuAGKdP2YofGEDW39XkupM349AcscCTNpPRNS1voXjiTfQbSE51JXtupX5yw6XTP89z",
  "key11": "2if1CYwNh9Xu668KFmGbSavmEBw5UetAQtAkuPok6sKm8vtHRPHGVNF5Pu1hNFYNx92RFbw1TfRumvjGJNQxr13t",
  "key12": "3ER2kmxHd3kRK9x4gyUuC2vwzu8uHCQYpJeo5npwzj7ERfniH1yQVdK7eNjXKGacPSbBvYb3GFW6kuQDaXkFE4Bq",
  "key13": "4f7h12yyoggQqyZC82oy2bsvdDGSzW7s5RSdpFo4risdmpe9cD2zXGh8oqnsWZDXbsLHDJ142qqjUTKRMmZmwgpo",
  "key14": "2aoJmKVJtgqnjTcGkXX1BxmGKFgo9ZwLZJw486Ch4YucrxvvUmW7KVEKQkkxHacc1YGVrkEy4Da3NHRo1h8Ca5BJ",
  "key15": "3qFSQjs7r1DJrhJcmGrNcbK9Hoc4nhZYmNmP5hAGUwSjyA656YSKww3Fiexf2ymmaCpR3VjC4r1zxWVtjBxynerG",
  "key16": "29yzHwh1jXqVTq78tnbmB8eQnXMZVTZ8munhCXHQTCP7djEMBNAtsjAPYWwBo5ZFn73nRRjtZTZNDoJksr3gYfU8",
  "key17": "33s6q83erJGtGXKErffXu2cTuypSH3yECgn8sXrG2JGaKU5a4UtmkuGsEgh1SLxpMTENJQWi8UnXoo5HHtaUqxek",
  "key18": "2ruLgRzepkCHyLP2ZUiQ3qr48i8Gu5FqY3vJEzKTxKpMYRJWuQ13csPxFqgkS22yrFarEDoZz4oww7BsXcKoq6o6",
  "key19": "3guSVuLiWRfRGVpoodUoM6Gu2is75KNC8zBoFJk4nbpsGriT4NJfW9uFV2BZR9nyk52Dr3KyjAJAM4fsXfVJZW6c",
  "key20": "5tiVGVk8ftnDoYQitUtcKsJ3taSB1yGzxXkm8qvj1KkXd6QN4SJosyjYsCzV7ukGwy1GoTyYET7mkHPn3zMhzHWr",
  "key21": "Zzh7btnCB1DFxecsV69SXcSokyYFJjyJGWexcpAEWVDifFjbPvkoWFcCXhTQr4TibYk1UB7Vyb1ftTjbwFgiWdP",
  "key22": "669ZKv2PyTAf4fzfnoLTcK26HxwWURySkxPAM6Ndn1SHXXHVYXwZaBs8Pgnk6RWnwFQajKEpAcKGcbK6XB4jGUPn",
  "key23": "3JsAPAZkdd54aU47b8bxM8VTAvC8AF5SWCrk7v4uV5uELSfbi19BBoFCC1qMGYBhXcj4L4NHXdDFU9RJhg7DwWTX",
  "key24": "2SYRcYg5KcKy2vuGgWQ3eUFbTWDe6opAXsoLy6jB9PPpFwXPyfiZfCGE9vLvPvBGnK1uvcfgs4oVLRK8H4MwEfCo",
  "key25": "4b7o2zK94sim6nponwmjATu8zfuahtZDdGNWJ3kDs7rBYP8dkFknbUmfWJumMbsPsuqcYBJYfNdgv2sVEyfPKHgc",
  "key26": "5zMWgDE6YDsVxBdAzSJn6k3jmhpq9uzemUo1ZRjkorwhSuVcJJ8E7jjzAMZ7ubofxWVaXgf2N3LDKJecdBA4XS7A",
  "key27": "2tdCYjyvqZwrESvPeG9SsLgKdDQxwQoEFJxP5H4m4kaTUH8KHR6JZa3xDSLbHFdGzdMJs6yc2YWLtRqHjrpCFT46",
  "key28": "5kmXki4MSZNUT5wegmcNVUPZgiDGg1w6uAhJbEpw1k6ybaWCXJVLMHxHJYmB1qhX5acZS5qdB9gbKev5nv7w3pAL",
  "key29": "4LKkdPzaa6FaJzV5fE2Wk8b85W3ceQ3cy88dZ6K3exv8Lv76jkQm49XDNza2XWo6VSy4nYGFr6xGcaaNN9Ask775",
  "key30": "4pnh8sQvzwjYhNN2kbMvuQAkmmFKGdfsPYPRxq62Vz9eocwyv7Ngk8vUNk65p1we2nCqxRT3yyVPgPEcitvtXUrf",
  "key31": "2wrYgQ6TvtMVhwSWvdGeM6tsQYpXbmufQXSJcbLptqntpj3GnXtWTmCHq9L1H39Nefo2fsoo6Vep2FK3Rp2nriqX",
  "key32": "3zmmxtkDtnFLL7s3gCSfhBc1YtFLURxAHeuya15vycxaJ3a6BCqPgUggRBMV8C9qLdocLiRgS2ypCuwLLKAfdM2A",
  "key33": "56kJGv3EpUevxZjZbDbiwrpd9NxPsBdjYpkdnmt15qNDXc6qtmihiU2UFKQ9YqEUxpZA2XcDjDGTZrCAfHDgg3xE",
  "key34": "3JurXKppjKrq8MFCJDCpcq9iwCu332TjgYGcCVEZGv3rJBbMPsrwJdJdjGUxYMA8rUFrWr5eS7HsVvWbzuwCJsd8",
  "key35": "4fLLWaa43KUPoJyvcxFFUrL9vwZo9WmLZ8aXXSggjF6YJbqwHNv6WkkDzCEbQXqK8mhXRbzGPfHxKhrhFowmBT5p",
  "key36": "5LJQTVnuye76WAi9oRy6HGTL9HnBLmc27SgvtqouBUwa7rcLKDpLc8SLHXjcdpmCJbYfCUuPEgGMFL3kmhact8iy",
  "key37": "4z42EzFtZq6dgx68DzZRuqL3yqsNsHyiD3Y2o4R9EXRCm9DC2sQ9QCa8mqDCcoo2yhZVN7CNxpjGo8EK4bGgVYe6",
  "key38": "99dKkUifyeApzijeXVQNvALft8Dqt9ZpiZDdwNi6ACQJmCzm9VAZbjs4tcjU131r4B3Bf7Hqp1UnzAgDGPpV7a9",
  "key39": "rUUhWmhyTabzLJCmkadRvVcn9uyRQqTajtkxpaDuPDCoNP9Cq4LfC6p7MS9dZRxNYgNVC6JyysNEfJjpiJ8ZFp9",
  "key40": "4agAHr3drUBPSQfJX5bKs1Bvb3HL9EHTgR3dmaiFNYWuDJjEiVfiKM1ki7M9VPynKhTZcHeBxZsxbduvHTThoaLf",
  "key41": "ys4q55KaYJRBKgEhEEmZC2nkvUnQ9mmDqPcpJTxcXNN8UYGotsh3tZjU83vdWZcMfqZ56FQ61wLnawamkmA6UuQ",
  "key42": "4j9wbLoDbdW8Z2zYjJYp3wXdAQ6wAAYtUGPiFjfUXBXGhMdDWByWCGV94ptqCfxQpsBZEWjcTKta1fGoCVTsNGeC"
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

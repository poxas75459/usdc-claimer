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
    "2CuqPMLM2kT4eiFJvKXVkoGujpnNcJb5Qdbg4rDTNShEjuyUhXRE7Ny7BoZdrR1kWnywQQ8jPtf5bwZ3triC2nod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKms4CNb6mAkuVS1aowW8iQ62aE6HD8MG8zPqi5LyGu31JTL8UCguB14thKRHVP8LNPPErXGx5hLRniYmpxqBoB",
  "key1": "2qLHR9uRUpgrTt9H6mfWavuaq9pvHf4HAg6mZsm6fwv91EXZHfdMowAiYWiFRKZMQo8oVcmRsZEX45Rd6D5wXicR",
  "key2": "2ZXAhys16NtfhLAUpQp7zzbt1PXwE2mvmWeCdnNyxM3v3MmtMaEbUsQcWywf8qywAcwRTVPJcUEUUZjhC14ho2BW",
  "key3": "obsj81KX1ZGQEAmjGgc7xa3zAzhqyExY3FLBeYitpwNzPvnvu83qsGfBuaT2tcYLxkyA3WxSepScUhe2QXZEqPh",
  "key4": "35fvUCSk7gXm49igiPnjTiUrZPqpkUJYaMnVg72frNNAxnf51weyWjAYdFcjc56cm4kzK7WbpZWyBWyNvm415d8k",
  "key5": "5poQ1RjERHHQhRsijabQBjo1iQNhL11GgnvD7Rd2LgmxP4xNKs7t4J8qtqtHU3RQfKvMuDk3fdR7NdtgfJuM8WpG",
  "key6": "5UdLFgfEKShN8ZhBD73ywEqmWgufpSFnAtdTtBoh4ibrPE8TzfQwvL5h56kkE56djqtMganrDwejAVCdKw3qw1qz",
  "key7": "5UG62gVUnpVcd1Nj3ydjqNUHLthi1KdcbmXjLN16j4ubwb3QSt4DbaE5BCnKJrhaKaNRLHde9B2NbwButLrRYozT",
  "key8": "2a3dG9YcX4znBJ6ySyDtebXK72ADdBbZs5uMvGPBoMY3hZrDA4Dv1oaKb1PrsotLH61jitphEJ699wJDfNDkyagD",
  "key9": "kMvPn88S8KcW5Qp8sjTPRDrJ8pwVKAZYaL7Ert2jquLVFE6KhKtgJVDaompcj3z2YnTA5onQquPSgJekS1JoAs3",
  "key10": "2XH3119YBjXW9E9X7KVgj5wv5Ad2FXjPDW5QPsn18YqT9FTARgqaJritymqHe62ACeEVr8KHFbmoZLpAGpFaVh2r",
  "key11": "5bvKCgaLYAUSeN8AepC6kZoym9HQ6u5WyUGQBB3HBGQGuM3d3dhrshoL2iPgezXToJhSxtJ2LZkeypkCtzc9nTxG",
  "key12": "1BNsrMQf7aT1qpyxTme1N4UEfmNY8wzmB73jgcbkWjkR2eoVJzGJeVhpZzDCpZNaGhajJYrhpNnAiu998tJwojj",
  "key13": "3jHEhMrd5C9mc7JxHoyw2DL9txz5fRKKtk9sj863tiMCSxVVBzBQHM2Num5uD7C6S79pP9srFTYLxbDh9gQWMHE4",
  "key14": "5aMDdK35QbmL3TAxj3GcmvM9fNDYyYJYdKnjGYU3hhJtnFjzmer5zQaT3vfQon4SM3q4qqw5dfmoP3PxkdhQSqYf",
  "key15": "3Hu1B9buRRrdnnokiHbpW35VHNnmYXd8MoAnNpbHZf9iVXKocbZAHxV4khm1UiuyGLgLcw3fePwuAcLVSezqBhMs",
  "key16": "3m8ZXatAwuY29rUCqMw2qnEGqi5S1rco4Edx6iZ69yDajc3RG5dXkxhtWenb3iuJLvcsaWWZ2DJGH4Z4WpPJeiEy",
  "key17": "tPeewGt1vpJ9XsGcQBHAQqDE4ABdVE6Q4Naca2b4o1VnKSWSVMX76g7ddocmKNwNxzmK7XfZqJ2vyS53RY6zEy4",
  "key18": "4Dak5X2zFeAQ1yDs9qWvHhFabRtDHFKTjF8otL2sBjexp1UzPfEMVfz9KMEWeqk88STtzUSNeoFbBrMXHsLvNXar",
  "key19": "39ijJSoNjE72xz2zC9EWfi2ZqQj999XkEsaUKYnadJLXcX26U8a68eb2vrpFNxZ2KNNiDyhaAHdhXwNaZAx9AF4H",
  "key20": "5eXjtQzMSHMWKBMmExGXztb5NpXY7JwaVErf1FECXThpWfoUcGWyBB5gf6N5bDn6KofYfu2fBPYU1xABsvKqMV9R",
  "key21": "4cttekmq5qS7reioLME7PtEuptsBEDtH8ATyrUtYxLmV1mvFRXx3XZ2eLExNRXRB5sXGrFAJZSpE5shdsyQXWa9N",
  "key22": "4ZtafAquKC4PVj42VdKPV6FUCJbC5xiBVFbGJ7FP3FZoy8CRnjdoNuDWtjg3LdF6tTMuD2NNyRePJbpEu3UyeGk7",
  "key23": "bHZUks8uVWCcoHZTJ3uJyBGLobuEQGhkwaXmrZoeNKp8Y6ERtc2ycmP6pDfYM2dSxXGdDaKVxC5Q4yvR83gFurd",
  "key24": "57hH1eyWHnLCrfT1BtLcgj29iiZ5ogduk192eAL6TKC6E6wuHKMW1x814DbJuzGcmMicjmgaiAU8no4GKcSfsB4k",
  "key25": "61Mwrh8hGMgRwoapgXD2ReYx8nEzHPdxyvjjEqUNPaJGntsmyQPnd1SpWeptRkfUb61NdmmLUS3LFGywvUzM3eCw",
  "key26": "5tnjtRpyEsL6qncpw4HVJbi3wNwcY55AFiE1wdZS4nMkFg1yWVgBK8GSpnwhCco8EJsKBBqYetcck52aqpChJTq8",
  "key27": "4Ug6DSZ6qT367doQJaGPp9jRhG2vaRzzLBTrXUCzLRQiTXLY3xyvwKHbhnKqDNKBBc5v4wwcyo1b7QVS99azE3Fx",
  "key28": "3xn1xMVe1UPcPPCecdJX2qaxWGk7GRsu3mgSUAVWhrDZpCt2gN8BXM7YyRfQkjAhSRVBXKtbqFWfnzVcE5Sjtbm",
  "key29": "4tzDm6p7Qo4nzAsSXPvRezLtZ2KEejakvt3yVQQX7jRuVzc4t3o5fdft3T9wozXz8Q9wp1JW5asCgpSuV4tMUo8X",
  "key30": "4WjJa4Sg8a6AhucsKa7viw7zT5XM1qP3n8BRHWe4D8dn7bJ92u8BaWykCKJ3j5r3E7f3PsK9nPGdqDYQq8sRB9XY",
  "key31": "5XiPH2sh7afNGDHmeEif4neY1VYMMUuQZMZCJKkyhPYmjxb6iQmdWCteppq9JPY2rF72WeKg2cYyhs2VmJnvECxF",
  "key32": "63iFtNDBb6mi9MakmV6zTNCrsWaJVCeC7VTaGeAAtheS797RetxSaTTXYgzMDw2rxmvGtS6sbXD7u9Azepfnjcpa",
  "key33": "4B21q2Hb1U7FJFMVRxzAdXgAvZVLrEZaPw3R9eVRRD9k48y1VAonQVDcbFcAHh3J9v42cRfqTZPFkxVi6xcp9t6g",
  "key34": "7HfxZ1397u3M6YU2Ut7FpJtC3msPawtwn4cCj5b63XvWQiGQ5d6Kashw87GdLKBkThemV828kcHTmp7dULz8VJd",
  "key35": "GQgatemuuUDUxUR4o9qfh9N4sFVbUbGNMx1vJWPnivgKBNNhgedEx57bUudjV7XoeadMRNemMFyDaCUurDEAfZT",
  "key36": "26KY8REqW1akthpKXLqPGvm4zPGazLZn2fhx5gZbFZTHBgKT93HbPJu7jtHocZzns1yYH5qozyVnpfT6qkf4aMKj",
  "key37": "3BC8Tp6GSA4nfu9vuaq9XD8HZzFgxBvuMEGkNCUquxN9rDnrN31dpXC3Nm4ZBZQimAe1HMynZK1GnA3snJvkNzpf"
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

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
    "5rAJPmSqz5ZsX1fuKSWEoueqjyuhVGMvCLAgP5fMSsx1u7EMN28jWp8ChGsTMJ5ed7eQyAomsuyGxqFyY8gBLX2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wn9tF61U3rM8hdQLkfC6BAf643XrLGg9oVJpe2WxM197vEE2qoTfXhtg6iodmJxqBTZ3J3EpXWgS3uQ129fAzJp",
  "key1": "3VvCHGgsJyAYSFHEUv2yfPHV6FYoTV9LVeH3XsxWobeKhMww3UgdXSkVdTErYuKazB3tNHfJr57DnaucMjH4pbjd",
  "key2": "4Wp11Umk2MwcnY7zS1Bv1aVeB4CWmwAZo8yEaWFHzV45hSWpJMYCyLbP2MopetRvPoxNy1hFQ5q68mGpB1ZemjEb",
  "key3": "5mgTD4E4LqibKAFDK3j6C5FgRm2hBmFWXiqY16SpaFmzw8dVJdj7N7e5bNWaJW7nEqxTPxGzCufG23dLLvRvesPc",
  "key4": "2NZXwgVobetX5aRHzAi1mmADXfnr1TrzsGMxEfJypRSHkCcbZwknTVDddUUebZwSmjQD9Phm9uZHJQmvB7hPFf5r",
  "key5": "4E9AWnqvLuv2zoGcLukv6U6AFw5reAQuahYRpwjXiwcgFAQdTeBjmWLbCHzNhU67vBzhg2W55AFgvfibzsmoLJ9E",
  "key6": "4CfvRoGK2XjwrHuwJS1YcVxYYBF9RJV9MvhrE1aoqSosbFYdF93aZBZ9p6B7ycytfhAcSth6Xmdcso65YdA3bw9H",
  "key7": "2Vem3XJHyD4r48kfRwZdMRcaSs8Fnyu1mXXjNTyR64va6xvHrkeDQ7oC7NXFDWjEUGpUscuy2oU5jgHP5Vu1AQU3",
  "key8": "4dUM6gaNyFVwHwWcGPZvSQcFQFCRKML81Qv6vXinBwbeXdgSnNvmqjEeAkxgp2DDJbWY1GpvbA5wqxnY3U145tLf",
  "key9": "gmTv8kiFzT1S2wxHaRE3U9YXekaKAFTc46ASC4f6Nw7d8zs7DA8DwWkwCs2ragbLSNQ65L628V55P3VDEaojVJ2",
  "key10": "5ATs16yqGTTW5nJDbjuoi5QcPVRZSr64x5jA5YQAyZ3WqfcJ4AoBqpz7UL65aqMixumJsQ2tKQ1yFzJu4FF3FjcK",
  "key11": "K6w6e4uAZDro5aj4FbiBniFTA4CzM1MjHDjSgqZZwZsT2oMZ1ybLhy5GhXZ8pih8bzxSKhWrVCpx7q5P1a6WDzc",
  "key12": "5XvJnDDRFfY6Deh1oFvsaR6y8FVoLFMU2m5snC6VjkGcjWLv75nbz6Wva61RZem2PjvciQshNGs9W8kmVjE3c4F9",
  "key13": "SjXisKUPYexvvfBi6GCVSy4GTXC3uVNufzffUBc1NGTDkDhTisFPKbeCqcwsf91iRsnVusYFPWsgRkJtDwqoyJr",
  "key14": "47vsZDVUb8BDJ2zec7D6BH8XqiGVQsbTKKLryASTC6nvWmzw5QBUPKcf55P8zLpHmwaXCMuvgj9p35U66uXBVVXY",
  "key15": "m7qPUyBXYvACaiho5KdzvGmQ9FwrbJ25RhjEzR6U9gdbAbfEPA5YGU1pEY9727G7rXBLUuRQC9oJ6vgzCyTVR9V",
  "key16": "59R73Lr5htrdpZ2QRyZcKPY4aJoUZww5ZafYa8eNRgdBoFJ9vYsKgnaMLgLsHuGRBnUzv9WSg1mio76jDnVxcjxD",
  "key17": "5CQm9YaLhSb1bz6ZxaN5sU1Cm2ceoUNZrokP4xQMCysjyRA3pkGEX5DkMcJSAZVm1AhUqtVMwLdkcw7Lqjd2XqYa",
  "key18": "5gfS5YzqorC1TEgs6LzR3MK4RabCTNkBcCBfGC1VrveY1BkCEEZs73fLabWYACXS7aqQZ7Z6YhRAGAE8tK1QKwvp",
  "key19": "3TeAfpujhv9JfSdXigftjiNU4hoC65LDJ5jjVHe7WTta4mVi7itM3W7189Tk64e3MZ8yWiWysA1T3xAAJrWc7GNM",
  "key20": "4eetmXtP7ChdsLERx3PgxzyBKfqw7sk5Fj22BMPPLuPVKBz8kuSab8iwVPPHopqAtz54K1XaN54kxJJ7YPU9GjQY",
  "key21": "2QdDVWSh6TRmupPcrAtoFLMMURYbjgFK9KbJFGXitrbBRU3jRDtYKXuVnWDRyQoAN54mKteSBAK6ry1L8Ed7jegh",
  "key22": "5kepN4rnLBCdVFUUAfgN6iAYn3MjgLiETNMGsosdR2Fi3Mvx8JCFPLvw4nkQPmGiJH1EbCmnELm5VM7rBwebyxzm",
  "key23": "4aTdkDJ8nKUDUpNYvU4pnjDnbfre5CQxEGPMt7bR8JwN7ewLB1v2DktRaJ6mfv4SxaCGzkUSgkWuJ3RUnnJinuN5",
  "key24": "3ZDiRoSEoDY3BhzTrrKi1M4P4R4Bqz8SNaisyM5XyhVMxY6gkX6wGHoNxgPaFbivzp8vrDgzxPLAbgV2WBHwsJJY",
  "key25": "3Gm8DrrBQ1UUU1Gi9nb8PDYDDPLha1djfE4UzFPoM6VjkD5BB7gTLZLZG8ZyCZMuEyMD6e6SCeBcec4vUsEEvHs1",
  "key26": "4r2nFVjKVAH1JgLdJwueeuxKzfoy3zvjWkknSycpeqouo7EznWiJ81bq1nZr9ewRRAc3D9kexB56wMiSoeNBeqvt",
  "key27": "5PmEEGbBqnXfNVQh9P9g59zVhgAJNNDMPQN4PTpVB6aX3YpjkK9pAAta2XyhFGeg2suWAVhxYQeccRaBRLpRyv9c",
  "key28": "21P3iTEKAYoyUztESDbpexB9HPjNj8sTmfcJm8qNe6Sy4EEWLdQVSDExc7k57kMZmzajkgx6oaERJJ5Uqd5QBf6V",
  "key29": "623E1qYw6vz94o7ybxeRCT6KWff4qm6zwpjXSedMDAcMzqECu1cxmpSD6ewqbsZFpEfSNjQn93pxwzvm56vLx2xC",
  "key30": "4N1tdj939kDexaSEAXQ4RV4iwP5bgAuB7hsvgZQXnH9CRhdDCXGsi482C1ufKob6R1X77MqZ8w1jR7BbS65EVujH",
  "key31": "n6fVD8USzfsA4ucJ7wzFq3MKMwE19Ju6gniDTbJY6H8x9ujUUxyC4vEik4vq6TTHtFtfCG7vxZ23MFVBRkXCnsE",
  "key32": "51VEuQYPxLmuAPdTmrQY4q1qBHZtUBEjy35qVjR7FawE3LdbpvmzvPj6Z4YFnx2KGqKbRb3rWSaEwVRQXyModm78",
  "key33": "tUec8BomN7vbn6VU5uTECrziWQpiMbckCnAm9pPmyT5AorgxZowVbAKw99dUzMMynFyfmjwi4Wfhy5oCuLuXnGR",
  "key34": "G3scQfCL7tgtuY8ERqeGKzXgygbXMr9Qw7rEZbA1RXvNAS2VmZM3fKaGQu7QvnShDwGp7iMQYm4jyL5PCpwC86M",
  "key35": "4eLBNco9PyYU889mVgNxkeS6jPM88i9t8gGrH52Wkn8gsYJNBx4bFUEE7KcwDZkqNkcqi6hnWDTBRB8vspT8wpWW"
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

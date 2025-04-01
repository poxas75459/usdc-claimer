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
    "44BJmSZ5h3erBvSxENM6o2TkJU6uAtpz9V1sry8kg4X9fX8PaEXk6VEJ284XUNqFjvwsXLVATpCMjRJy9oL3WmFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o1iLvfhvoUKcYJrN3EgZrQ5HBTCKL4vxTZjxfV5uQmoyiqtZDKQ72Cd8rUcSgxn2r3W5JXZcSA3Y6K4JvngeH8",
  "key1": "4K4TDozs7gbFqU4VqFh39cBxcspVhBa41EN9kPHWicqpB2JfnoYvKza2YUdoCNt6k4uWtWsnAyJC1g2g9awX77Gt",
  "key2": "aQ7qBKbGdp7kQFD62oc5S28xMKAk3E8yzLWZTTgNLSjszu7vttpC9UkEdgXUPLSMvhg9KUsDBrfdBarSV51ssKC",
  "key3": "3J5U1nKGcVGu2rsWpcHUTfkZvVM7xosxcNKcmiTN8MRsER6pqyV8wRmup5D6J3xr57Tbnp1pMtoZdYdvRiyHQ8eE",
  "key4": "x415A3qd6BcBLw6PRSA7LFGRcd2b5DbrL8C9tTdjgRy57udg1UEFwrPCZ2szHbTPt5vVjtGnLVY3RySEgNAhuMF",
  "key5": "65BEwkWhM7JdYccVSaua4s6mtUXefpdfhcPqBWm7LsmEumRnksZVG5T1SmGDW8s7nnNq7Loni7xRh9quGTKVF7Um",
  "key6": "2HJY8XT619w2aQrKVT9J1C9vSDP4ZocRivqa2Fki2qnJiWaYF4Liajb2byFeyPaYbtzCZvEiKgFYPfSaHubVw1pD",
  "key7": "52taX3uTRu5RJRrvRwwv4vKBd52jrQ2gVUbux6gxvYw7eqqbbpycGtgDDWN7p9A5JD7szKCsnPVwT7pdUqEfoTbw",
  "key8": "5Cx5b9cXS5fnbYVjjZ8Bi7U6emAW1ypFpv63QwpcmxVA7KEFKnGyuVURjHgTh2x7SUqwAH2o1dK6bw1AF3Xa2ivw",
  "key9": "3EhUGYyEsLPYm5MED6JDh8EUrtKgvS16xZ6cC174utQRY8juzTuJPGktQ42fEPxnNfRKvde8rj9ueUmYXhNLBt4S",
  "key10": "5D47spYvoJSzvYNva3MdTMDuQBsLUJiEMZgTab5fuMrW6EE8babK7tCmR2NeMgktWARx8KF2YA5aBkQMU1LQJG7K",
  "key11": "4fFbgGjP2NCnmWoXjWo7wfgsrTHviK3hJkzs9RQ6aWiFEKzmCe8ujgd5okENWV334PWchoojGpxnZiwcSAPCmFHt",
  "key12": "3rDhyyrMdFvCg4we8JJrq22ypFZgS2aFaqkhKsBMNjeytNfWyKd1wpiqcFu1MVoP3bQaLVwujEDJwEaumLAJQeYx",
  "key13": "4q4hztnXhTGv8hg4UqzM4iSC2CtMfQj9oMS3SA3dvSgKG7qD96sRnL6u1qz77z2kfaHvGSmJDi4nugEbQ6tibY1m",
  "key14": "4uEJRvy8YDgSL6qMARcnrehrDmHEUJHNNGDNTEqy18YwtAAXqhmBj5KrmfDRuX3HnnLjPGKjsQdmtShRidaWGJ34",
  "key15": "4dmcirQDTKrPGto9KMPAzjFggNKYR75po6duMHypemz2MwiDhaV5zmrn4CgxHsfT6gqSn9vRb58UJBCgQQY2MCaE",
  "key16": "5fMRMSypoVgtBVXB9YqWtsBomfkekawMbxHVbbafZ5h5tjewL4Wvqmhc1BMc3u5NnvJpcj74P87KGjuwanT76EgG",
  "key17": "4SDHoVZ4QaYL3BttcKrQLedR2Bywvaau181f7Yq4HTdzcPPMGKAurUuRRCiAcWHSLmb9XwkCAtVacR6T3CJhXL2A",
  "key18": "5Fp44r48qr9mHhdrrsUw2yv45sQ2ew1G541JDYdRFsorP8L191bqmN2MsSLtK7CihQzv1dgpkizkbbskVyUv7LY9",
  "key19": "2UCkv6UoMZrBn5xLx63hPf65oMivu3TEpUgKwVDEtYnPmqPLtqn8rwTjkhDfJLPtZ3aKXfG6J6DJYypDrT46avqw",
  "key20": "t3dtwCYmwWgoGykvRoRsxKTvYUVfgG4UJ8gZXZ3A4ByULxXMCStu2xsZDY6RQ5oYoqxvTRPDLs2N8pftDNHQLZh",
  "key21": "3yHyL2KDai6WoEwPXyzqm6QiurCbxMbbxuqV4uhn5nKZj8EjTMLNDbdohHG5TAd2boSkTVxuY5p7jNKuXAZDA8U5",
  "key22": "3QBXeas4t35iMiLRu5n4Gx1RwebYzRPTjBj7tFn2Lfz9Qu9fwwHJNwXKyNsoCGurBcJU6TQJXQe8TrUwCDUfHDhP",
  "key23": "4K1SU2F7vPiQ9S4nz26UPkPPMH84cxBFeV6TvJAFKLLcaxa7Awrr5Ng3bzLrTp452S8WXwy3AfYmnzVw381pCEQm",
  "key24": "4EvVwZ57HUBgWLVmH7vm9yhnzjFPmG8rS6TZrSU1a43o2EeeTH5d7KryX7pS42VnQN3Ym9wi7S5NDaVRgravyksG",
  "key25": "GbM2mRV8i3m6qKFaW6r2BGxAfaJbRDachUdad2N9WnW6TGfvCE8SVknMadskrG5HhXLh7MijQ3NqpmwypCEsxMQ",
  "key26": "4YtvFtDCKQCmTjudDJTW7UeJjfEq33xaKux7yARZLYzPSCbMG7gfqY5729njUzgQnXat91EXoEs7X7xvAyLATXaS"
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

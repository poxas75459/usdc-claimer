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
    "37PJGSPR8vns7JjXg5HQJtAL8jSTy1yzkEiF549Kr6Fg2QPZh3j3Fhnug1whqwtpa7RMmaWpVFwLsdhU37JvRk6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qmbpnw4XRBvTZRW2jaHAPZmh3scc7xk4HdC5gtA58Tog4oWgFaovAu75xc5bo7jMKmc17s4UJrhwFmAQQ2w4rrQ",
  "key1": "3pK4XN94xF2sAm1g6br7EFwacFAUY2kowrWRi35AgbAbzM3PqHyh2GfbACxQqX7UK49uqNfm2HMuSr2YKJQup1vu",
  "key2": "5JVD5RLBSRBwMfjifVwkwZ1BMDtPasApWKngJVes4BBawB5362emMTm3GL8APbHVBRC4Ejbi7pLaFU9h9MtBsb5u",
  "key3": "5ujzRqNTCfJZvPJZN5zNhfvt66LvnXestk9qy9sG9v2Q4ebiTU36bv7UQPcQVDWWkcT26Rj56ThUmnVE3S2rLchD",
  "key4": "3xSwQiBv4sDHxN8Z4pLm7kBPKmZ5f3T9ge6oSJwc7ANfofXcEjbnK5mPZMmhFtd81NJBMAVvACftyzcfmydxUBog",
  "key5": "QpQvs3JH4pTx5VNHqZMkjQGMw1WL1pirZu1yn6c5GG3Exsj59FgXjzFHGetmAe8oDBjEC9UDrxyrMMTY8TSru7z",
  "key6": "4Eb9bL14sXX5rHCgpWTz3KqjJ7GzMk1rwFwKMgB2BZx99KNJseCju5F1VnUAkoREcVU8LWBrAQNhK3zNUJeFiCeo",
  "key7": "5oU17AvnzMm315rrtfnahBrvdKsNy4Q74xHpweHBaKyeWv6bgscKk7FbhqV7exhmCdhBzDqQgqnufpiiztjhVA36",
  "key8": "3Z4pLytACJYnujvMNd4XPsotPAKxBfY3no6RAxMcJD2pD1QEQWbW81qWPvY2kX8HghsSiA1wTuSwi2y9sSFsYW4",
  "key9": "2YFtLX4nKJVekueecwke4r27ddBC6Gb6KKdY28onCYMNLjEMp8rgPg3WKooqAydJBR2HrYVaSgSqsXDJ8nUPiLm9",
  "key10": "5GHrgPkvqqECp2cZfbd1ErnPxzdZrqYjnwud4S42iMc38Nv7sbN618pBUnNcKUtTdP17vvbYHnxFtZ6irL7m4W5f",
  "key11": "2P3U9W1SF8hsHWecBTghRyADxrPqrt7orPQkpKGYhNtL4juoHEGgRRQkSbifL3VwAW5y8PvP66UVJEnKo6Fbcci9",
  "key12": "3LC3p4qyV92yWcgV7tHVe9BzaUfzCoe1S2KwMmZzRZ3v9Aa3BVe8T7wMXRqM4e3dUKkbYGqn8zBXddrnBfSGxH4r",
  "key13": "4ZjMceNgSJexutzvrFUMBUVfGRgip4wcvdwofAspqaxRzCukSEheThFKjtq4AW8FEAsXy9dpVieMram2MDxxQoxK",
  "key14": "5xaWSBJMRXUMEcqyPkbWvjhiFR9U6dSzqyo8wrDESKLYXP1DeC1CFnacjGt9khCFPtbENEGLNM9zfHAJMyKhm2P9",
  "key15": "42g1obMCynjpEv1NBNbXaBUdNBc918yMQ1Ju4nan347AsadhueXwiD6a2dKFwWAZfUrc63wabgr2z2eSzkmQ6Sia",
  "key16": "22b4AqvGFEPMuynmNjPGFHnSJheXD7X3VP7UxP8TwKLxDgHbwsuXi3QbLiv57T3JrLvJDY4686g6nD5uMjQkCmbF",
  "key17": "5tTgL8kqzCL2iAiNHE77mexf9KPKRBMP4jyk3FpxbFYxHPXeBJdvbYhgjiShoD4NgChPuaE1xmuChpojDi1KaHTp",
  "key18": "3g87QhtaE5jaduqYKURpCMZhiBFwFKtN7RB841atbtZQWe4BAubFyzavqQV2DRd34tk71t1KMaJJTV3E421AwKia",
  "key19": "2j22XJs3w3Y4mfBUyPU5vUKevD8Zeshd7XNwCVVvCitu5sXygz4WYpXqU8iugDTdD1dpPJwECFMikgmZDR7D2wqH",
  "key20": "sUUgn1JX1tfiFwjKwKM4Qu11u6sTmtSJqMiE6cFp6yGECgunphkcMH6mWCixXwwswY1MaTFmnWYeKKdAhw8WPEw",
  "key21": "4FvxcZ3UMimo7tXuuc28JXvZj4GcGAmMxDCLc4FJHoxUMgwkp5VzouBztqPiq5epioDFFSvcCp1fHehD5gW5zSnP",
  "key22": "DWSZxG3norhac3Ny9VujmRwFkNcMvTRZNzo6EgDGynwkFQKmt7FtSDT2pTsNeEKusZG5xZcRM429WJcvuCX7vfY",
  "key23": "25LmXMZJgmLnvmzjaZhGg1q249X7CfCxHJHHyTYM8HCMA3ufNapt6UH4NFEiLzJwx5zZUDkP9xESrFyjQ7dL1b4v",
  "key24": "3GhfnTuudJ6HynZrGaMJbATNn8hDUwzgBkwq8DYZMZSMprzJMs8MsDjfCPS3QopZqQmXrAXv4WWiG7GfW6H5EZrG",
  "key25": "AjtosaJPMWuFCQR6WmmSBDuvTAeiGbnSJ2qeJwr2P31uZKqSLMaDcdqwtQDkgGEGhSesw3hR2H5MSCSBKrzhfgX",
  "key26": "8mLHGZugSBsivPjwmem8AYBKRKZD7s3Q58TmYiLYM6AqM21nQ9eRXKZTRKKrifgMqwDNaD3YrGVbbFeJCWHgXTv"
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

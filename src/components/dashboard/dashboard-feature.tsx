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
    "2fuJ6Q6y9pfCGyjV6CAqERzhwLrgPyjQqLuUSzambRsEjQ7vXnEtCrL1HSEXwyDLCFchsPWSfH4gwwDU6ZYzaZbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vMRXE5rkGV1EGaF3vvFR3K4X35YxpNhpSiA9FPoD2LJ8T8sZQKPK5uoAE6kJBJrs2R1mWM9cGWnP5JG17XQtA9",
  "key1": "sjVHr1JVPxRs8KGdpS7zc1uCzDhFd5z16Spt91D3Ej9Gi9YpKg4f8iVon9T769wxx4NoH1LQN6w6PV3B976GpyK",
  "key2": "3ieqxotgCANgm9Hg6hyKRxtFRmbrXvuKaKkrSts1FdevuGVK5kkyqMknEAXuMsz5AoKjkVsr6fNt3CBWZe3kvbx5",
  "key3": "PpRhn8VuAxTdJB4KKJb97U3AP1KLXuC4ZqgUgduT8gxgm4orY1LjQTyrKC6EfECRjUZCYua5zPi8nFuLFsjPKUm",
  "key4": "4hEX7wY6pFZqiWjpfPCdVacpEt2dcWdVY51p1u1YzimrUpnLEhoehgJcArZT4vSn8sik3M3MVGKLGRtLp1RNv7jA",
  "key5": "64G3v55xojRXEEi9rVN1eCNRnBpGQY4dMGag2gDs3pKvT1KZWm4Jgg9sBpENQkq9Cc62NMfpn8QuaK1PFebofiZv",
  "key6": "kYszVwzcJar7P6NP3ELaEoFdFjgreKumHyDHTW52sK3HGrfuZ9vzK5ho1wp9dMTthRmLNHbkzoeD7pCfneVzNnZ",
  "key7": "3SqjvXVNUZVLk5RhPC4Aowu6kMX7KzcEJ6hWgsML2ku5erNfDfvN6pYUNnJ7KxhLxSnTcAJzGdqVaYTLnea9fUhF",
  "key8": "61tk7ncrUkMUDbQbqgZrwnQ4on2SSko8asuc1FnsoHgzpTrNf5UhzXnp6wWKxFTVYcKkvMCH8dFSdbKJHajkrhbp",
  "key9": "3vp5SkdvZ258FiaJhswVaoACmf7QGXy2XhubTEWjmw4mjiS1PbJjNg9oDqDmznztexP3bCHcCWNddBCJ76vdTbE4",
  "key10": "4DWvuCuaGCMfaGnNpziY2LePR4W72QjE3ghZDFxc1yzhzcfanNu7nsJZZd1tdg8U6eaRKjABYEwhcoWWUyGHPWfn",
  "key11": "5zZH2EBrSQ7CE77e2DStQjwAwMYAfevYvHZdDLc5kRUR2mzLNwoDHtyroGqCFsuSYUURe4KbqHGmnm9bNgMsqEZR",
  "key12": "qfDW1CJ4kFTnFTL3XLqKiTZiPSTwpB5g84dQyjCi9TCwrSFnK6JU6HvH4CGik9DAnGWnvRw8cXZG7yN2HzqtFVE",
  "key13": "2umF2ycnjjQ6wgoJD3DsN4nh2AcDr14s5QKKCkLF9LCEpcuyLQVj9nrPfHuWeuC996dcrPQBRu2pgGYaBM8KF2z6",
  "key14": "4tMhR4MWzoycbvJQ1orBVnnhpy6d6B8oKu6jA7ptsAPpUeRi3aHboxPQujj2Ah3wyPavg2vcRR4rMhYWdsKN3AKY",
  "key15": "4hAt3epF8TNEKPDcLk2rmW5asgLNyKEt2iRPXozESpoNjQpimZ9gXRZjaomZ9fWF7kowYQTZEuDhmRj5grxb2zvM",
  "key16": "36uzB8RRtXqxjMZ4kL2ydJYFjGaZ4BrSnNPTnTXaZYQHwKtoZ8R3y4NHfX4Jm9UJ7JDBQTbc2iQVKQSJSWgd9JYo",
  "key17": "27HnNrVSx7644uDr6717wZnZfM9MUSu22TFWmZmzjzKn4iC5FD7ZDGexKmg8b8au18NNffotsFTj1iCgQXZ2HLS9",
  "key18": "2AP9n4e9NbHxbVju2fdgMtb3LSpvDdtg2WUgTPxjoNRnotCmU7tprqEi8ecy1MHpJCBoUfhCuRZKZPEs5SUehmdN",
  "key19": "MxRbL8RFnd6FXaaN3e41663ZRT2MkSr9G9PVUEnviYGL5iSrGnRBHxwZqsVGEaiZ5ZoKeAQSqPrAbc9D1NLdSTJ",
  "key20": "2ecEMXBQMALwv6KzSyYfBeRDNWReBTNWU9F8LDexfERDYgyC2GpPv427Amyr8b23mTLDq6kxL3dy6Sn1Yt9FtNun",
  "key21": "2am1XYDBsayasqrF62HqBdzPiKkYWL1QJYvYvA7LASZyEWUGhg3uXuopAJEbjUmXZyHYuX3o3t7B4gH3wZth6b8m",
  "key22": "5QcDZYriGCC8PUPAsGipJsK95QnrryAZo5HQycZ9W4TJd5eCuELnccwpFYuuFC1tNWTrZbGiWwrZtxbtd2Qsvj1m",
  "key23": "2nkAShsiHvJsNPWa6R5yBiGbBJGTunZqLuxSAbGGPt5T54nECBbVP5sDR5fbAzbv6eXdjZS5Vt2brzxP9Qgcdbi2",
  "key24": "4vkHcVuzgCybNYcdNEiCLGmqjo2Dh2yYTaZEuKfTgARPKTEMxgTPrMF74TGQ4L5VdxLsn4FqoJH2PWADcGhNfvqN",
  "key25": "5aBbpbYtnfqkhyFPGLFsK7gX4K4ejfbLSTdLQVwWH2qVCX1PCdWjbSNrsyCWgsGNrPTQQ5XrxFzKqSLwoUXDA7zd",
  "key26": "4dBZsfByjigSjZSSAUPft2CjFdRFwo9TRd33DjNCxHKq6Ycg896srsKhN6ZJFQHCgueeM3owxneARaT19artGZ23",
  "key27": "3ae8SyUHEKfeo4py6C4LDTQUtw8hgL4gLrpHhjMfYUYebqHV7mwQ3e5UGbwH1vM29doX8H3eymwp1gVHfm6YYNNg",
  "key28": "3M37bYdCQjQvLeM6kS1iyLnjsttwEdbEjPxd7EmoVot2w9nxGDEdiQ64kkKVD7JVs7ykGen39ESfeN3pUJ3vo73f",
  "key29": "63MzrDsHdot7Pv6ijCy98RrFHJ5VgF3Gh8YHJP8ofdAtCPpj1zFMGvksNkSdgiQ5HDSmq6Skik6U9EzS9bMBzDTY",
  "key30": "3KA4srT5QE63qpWwCWWSNiYvzdcNEr1SVLxjbwdPJWHbfyM42iyccXnakPNkxX2duCjNRDmXtNrwt8t92y8ZH11r",
  "key31": "hnKxNf99vps25yKmDSEUp2J8DX3DFJyvfqAySkrARp5u1DaysTwjY4NqpRjuHVNQnz4oDn2EQjwPx2RDt5BM3ar",
  "key32": "4yXFP9oecyKfKZ8a2JaTuLzdBBeVzVZM6DPoTtCaXoGa6oG3Lp9trhLsD7sw92xgDdHKM782u6Khjhw7THwdHbeu",
  "key33": "5ZyQG1vVVtUEHQpd74j9CuvdAFZrKQzSZ2BmczweCF9JrobHGS45NphxsNwFNFqCPgzJZ9Ac3x2Y6XhKnkJKDJnp",
  "key34": "4TWogjG2GU8GsuTRs7w5wJTzw2xQosDyQja63nFQqjhFCCnimFCuEQjEwvykejuckCHcL6aVNXW9yaezgTJXDVjv",
  "key35": "55FZHHBrpGojX9bSTJang7Uy24ahCFV5aC1w3ASKg9sDcUavFxQvwrg3nn67mR1RK5DtneYRJvLxfr294gwKRWFd",
  "key36": "4t2EvEbA7wmH7WGUZCthrMHXVRFP52qmgnEJRhiKQn64yAnVsparz6tBceLEszrnfC59FvzJi5MSZrNf4tLfdDZF",
  "key37": "rxEmFd2bu3mNKXGknP9fZy9cXZGNZVqCDVZbXpGqCDXafd4ExmHpwFgS4So1JHkZYek672NNbBz85DEv2TvEdAY"
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

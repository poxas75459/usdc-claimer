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
    "42NUn1X9xJeTAPffitLKdVoJ4LD3korQmRBRzJePQW21HTzFJDJP3CevFmJadu1PyKa613CMj9Ht43mn4RoymVdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23K95Ycq4m1dBhmxNPggfYefcrvqGMZRHPndVNm7xJtJyJNfMg7dwwnVCiAQXgZNQUm9Lr1XE1sKDfTtdEK2Joj7",
  "key1": "5ivj5ghf7FKHWTzGgTs9ikZ1fsBotHjLKe44ubUfgZDTTNSoi56ZuLjPB61tweDteRkwbVEon14CdCk2UgL8B5SV",
  "key2": "36SKJQJGf3XwM6V9CF6JbqbicnFh5tFoc2x4VtDHi4DNirdqrudcX2KiVZf7c8sSCNvWhYCmBE6bFu3Asoy4Wice",
  "key3": "5BtE95NSLZtgduz8JgZ19B5z6fBYTtPk7gC7A5EuG5Fm3n5L1bfjqU1e2iox9tVSQVuXe4aTar3DuMBU7XgR4ZVj",
  "key4": "XTbpEqYrNznuiox7UCAXbFcRzwTbEjJqSJj1ZaxaWciRyvjnntHEJCAxf6RUA3Xpvq2QZq611sXtjPeYPVjmWqc",
  "key5": "bYW6ux3e2gBvDt5j3Mq6gZPeYE1Fh2Gybo1L6Fc6PrYyyEXkTDLagiWqb2D9GATAowFwDLpEBF5RjzoqmWW3Xw6",
  "key6": "4Poz82VMHwh3FdAM4i73HGfHk36fDRE8kKZFrEbtKurzUTJUg7EvKSZ1wf2xFqgkXrjEb6c8MmWwBncC5cjpDLAR",
  "key7": "4sdr5fEN69tsrFnD2AkpbnBZow8jm5GqYzkfUPGS3P6nCqpbkSWMp4sM7EpX2R4VgVifsjosZE5H66j3Aq3XYMKc",
  "key8": "5YsgPVz8rkLze54c1cm4rFm7h6VjdEXB3iSvzuDN3xgHtuc8atbxyHHCDREkUdCa3Bdqwt9h4qruYnwRo1hVvwhk",
  "key9": "5b5iX9xJqHR9DKieXfNZEzdbZy6y2UKiR1jxbSwsZGACBhVxnz6GfcV4njLENLkaqEyMup6BRdoGzg9eyc1mNkw3",
  "key10": "5JBz3RpEAiSuVin3BUykQvLWW8jC6UEfkh4eheesFSoDvQfwJsnRaynLwznuAFNmoNSsf8EotJakQJPvQ19xcr4e",
  "key11": "2jcBrsjiKGRXnoge9tp4uks8fW7rP1YvKNBMxBqzhnRZFuA2kPCUMfuS45KtMmeM5NXRbMc4Bd7TrB9Hv3xiNU6T",
  "key12": "xodWHkhLZsrKbKJT5HVMVKZrPTDC4AqxFXBcg5Zo3mUXLjg3MSE87k6nKWiyS8ZM4UTkQkkR9V6ZcL7Vmmd8Asy",
  "key13": "5DtNgu9xi13usdJkFWL2GHPSZnHB5anXG645sLdXWfj2uckWffiErmc6bSEEC6dJYNtrzwY77wirPYgHL9BbyTMd",
  "key14": "3RVieHfPrjzdrZSxrBbKccU1sRQsihzHPGWp45f2qy2vBtwWxCDJSKpuvCWvHAgXZ7BZJSsDZT8uqG9pn8pGBZZx",
  "key15": "4y9Y4dKRDthQHa7k3fx9GThPHVUFWeXKizdKTw8U1P4TdcMuqqxGmjZMPfxWQjE13oh93xiB9Hio7qJdAgzWCqhb",
  "key16": "5sbdbttp7GxmvM59zcdKro3XhGKb89DDcT8JcP6fTZHvWR63r5eW14eM1tDDankJppjWMDqevJqSBVx12RVWxLB2",
  "key17": "oqMZpsBsoLceAdWhHZczKUCoDEAAUK77RRHyca6o9GEqJ5hRzueUKfE1P4c31Pm2Uot7Bh4gXjk8qMzTQcCpsQ1",
  "key18": "4VsqnM24Lt2ebhtbCAcxH6m5pEgyFmTBidJZbeeDBiCTKvDvmtJPAtvewznqRKf6HwaMZqiD5qv5kx4dELYb7uZN",
  "key19": "5oGgXFvaF1qfBhoBJZNTGBt5pnfJQXAq7jumZf6f1QtmxqHQQGrFzWmK4z32RBDn9SbY9zkQZVfCSDyYxhG1Ryhu",
  "key20": "3KGNXuKY2KZ4HmqYU5NBhwoD52fuTAW1x3dgm9hPDScoxCrBHRaB3LBSEz3uyNPn6GRbUoyVer51NnggAZmtVzW8",
  "key21": "2ETZtzUrceLZ6dPCHGqbiQ2nzVWYaTiWCXqNZR35G31uFRGvYw7ym3YZUpdTpP7PmxSrMc7Ba1E9yzWyzQGcZYeG",
  "key22": "5gT1DgYYxTjzR3QEHi7d6kwaVztY8P3ApLppA2yqtDwgXTYm45vPA1zn9faPWnJwWHjRqNAjK9rHc6wPmYLtGbBk",
  "key23": "2YfAaoWXawTs8tBkeAyY9deWn7FPYohNZpWC2e4BaZMGypLhPfcakvAVH4tkgKowYiQHZ14t3espUmLHgwxU9UBk",
  "key24": "eL1j4XSz8ZK2Y2MLqNCGBhbdWMGvgrp2p8EHHBCXZg233gtTcoFVU42ehjP94pykX4qGeNwqTbNjzN79gmkA7Ym",
  "key25": "2k78T1FLM6UmTByBQHLob6FybMdhgEbnRZFKfhUCGVWQZEFkAC4GnzwTUGbCsNLz8dXmmi2wZEo21kC2BgxgVFem",
  "key26": "4ZSsiBcCgtXUnWbCnz25wRyeFd6UzrTH35aKhAWA1oEr8eetkPmXbBbQgPw6fZuAAsQ8fSrFPBfj7Hjj4L5DkUc6",
  "key27": "25jqjWLYjGz7ma99JUS2kwhrPXJyZu9j23mLPnx3f6nHG3jUuKj6SxEpauRpsuLvkC4fipaSxRKZji6z1G5gsB8E",
  "key28": "2XGfqY4eWeaZ84BxmikWgQg5TU4jb7aKbLxcoGexNLvU1DT7sfXd62rmk6DSsxjkPwcrC4QeCb6fwUkuLzW2CaHu",
  "key29": "5bs1qrKCk5ZWSurpGJhsNfFSRjjGan8iU4oYQEfJFek6tAnijggVHqxNJ4MwHCabH1fYBrV2hcaJK4dEwgeXAL3r",
  "key30": "39JyXGdBWmDNwBPNmrmFz2AF6icddVspSWyieHGRT3oHDZwchvrSc7Y7Jp8vetpEjTvAqaTUyv8rk3Ga6xcQJR1c",
  "key31": "3zjGYzLnK6fWxAiXAmGnwopMwGmKbYecwgqnH48NJWkWQzbpitQiGDpZbNRNC4JjNNkmCXZ3WcThkfn9p43QguXv",
  "key32": "4kZf4eYCKyw6dAZMH3VGyswZKeBXeQcQ4Gy1mxYKCGQTPwagr2jrohVjQGPBipatemVRb8A2AjmksUrivDNMm9B",
  "key33": "HTSp91RSbUVjxB8pt3Fhvw7xrNjhMA32hviS8rCq3Df5X5Z9ikN3aGAizXP2tqK5ywXPVRamKC5RWmdgwEunFXM",
  "key34": "63RC2omuQBP9ph84FjkuwDudnKcs4m2gCgGEmy1vFURyX7TBf69oYNyq4biG7krjiFstXuPpueZuzjviUP4W3k8W",
  "key35": "4cqqFSJpP5BCKm1tCdEq8QkR6H71nLqSBc65p5uCQsSqL7c2WA6MANX5mDGEgf9oGWeudgJB3kW8Bb9DBHjYvjMD",
  "key36": "3DFECCTBpeMCVZcbL5MWuz9GCeAs7SKksgqDbZkQhdeaTrvv831o5AUncyfPUY64oe9bDzZ7YMAGLGVCDkCvQvNj"
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

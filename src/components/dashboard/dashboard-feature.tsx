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
    "5G1sbdymebZp925sNAeCNuGkkKPMYPsWd5AW9cFQrvGTFMzL4D5783g819b8VvqG9P3QM2tU2rF4Lmin9yXCQ5iy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnfQDYhSLvZGSyAoHAwkQNvZNY1cpu9Vm8Ut1XD98LSEphjRwHVVQTiRvPpE25Ezdgv1nLhZvyjQhh6HMh8Cr7c",
  "key1": "4HSgSV8XAnbLnpF2kisaqHDnX6TrCpERGuC7AEBtPMe9VupNSzp8h6dazPWhLvcG3epjnVhxEtzqx83DM6fujUu1",
  "key2": "3HjuPBavxsvx8uToiYv6tfAQb9XXocxJQw7WKKsXPHk2KbGU5eqKdiBCKLCbaYCbPMgAPWmcRrezznTahiKQq6ac",
  "key3": "2SPHG36yKBGncyK16kzGHdQmXxkjGnz5vKdFhoNghx2RNqkKkxvZG14ykNVgFMzCsbR1CTkeQqq1HB8CYdDNW8d2",
  "key4": "61CUmxe6Lw4ge2QjpRxHMWnUKaHns1GLuY9c4or3AkHbTrDFqJxF8zaMxKMKp8du5m7PzpxhPBMmA9XRSo77dhdG",
  "key5": "16suSopGwyAgbkxUsNuWKhmHvKmdwPdDMDyHNcfDcN2qFAhmtDPBDZymEmB7AFvZ3yCnAma6mLWbrTL8PCj8Xzk",
  "key6": "QGaLsfV2dUT3oVi96P56XYqADCEAcNiqQGkCF9vq2Xja6Xn5FFUas68uXtTnJtihWtrb8Yguwt6dNnXPh4Q6vGn",
  "key7": "5Dy7tEuccWtE9dsp188BGmRhtYb6LnVnjG2s9WHAm28TpS4avJdxm8FP7aQ6wj8nzjtedu4De4Qb82M456xnMkbX",
  "key8": "41SFA254RSUVJX5Ak5NpSEADN6uatPP2AScDwaMsUi8Hw3jnHQG1FWrcZAFcxjPKQzB6KtLvPBGEVVuGv3AYCQ4n",
  "key9": "me5joQ9wb8dXV9d1oswDHrtW7Ea7cwAZeLiPjvknZdCgtwNx6a14yLSa6Tq1ny3N5HCQabeS4BXBwYXKRKTfPV7",
  "key10": "5N42MK4KzJiDeQKABeigv92BYWHgVRojde5wRvRPmXiEai7QAnioptXQhGA1RkLpRDRTu6PnTLiQEzKwBnE7PmHr",
  "key11": "4HbxcTLZkzgF3qG5frMP4BudkQg4cXFGj8uGffiFGWLnPDAcGJ6rshj8GjGAyxNyytBWXYMR1sHoQa4bn3QjEJ7f",
  "key12": "pGovWmJbvydq9TsozL7tjLK547Y5RdskzXgEdu5qAh9Q2W9tXUuW4NnENmhqH9PYJ2WphCkmDSwwt4ZMxvoKbSA",
  "key13": "5zTEXqAxCFKrkmwoZRbaMZUwR3GWzXwtLh8XgiitKYRwrp3BkjqfgFLDYNg1DmhKxYmwRk5PZdhdmiUASwpsYe4x",
  "key14": "4o6miUB5dHoU9RghbLPLD2ueGwQQn8Znmi1mthUYP911nc3FyXHhPusmrNQ3vW5pk7a7DMDWZ1yxBBQtzwWAUeiC",
  "key15": "2rLD2nUqHYQ14H4kNEDC1n7v8R3bD54z7vMWMm3m1YZxQVzRVh4bhJJLieQ3RscHthjGvk7oiFUXTbHBUp2tSGvv",
  "key16": "5UAMFbjuq5BzMZWPuC87XPuAEi49kSYTFt1WCeDQCBC38NWJFvEUNw1kTwd4xvXJ1xz8hFs6WyC9NusanDkMoiGH",
  "key17": "2zheG1eX7v5SZmiJMYjFMggitYPi84is8HgnGYWoFCiYLpXqCSdn86jqWZmGZEcg71Z4on1qLRW5s2kVEm9ThA6b",
  "key18": "jDjhHvE8ekmohhRLXR4EJuSZgSeebALJqSYiJ27bsGpoyiouGfducLe611QJaAX49EPf7sEvBNEydVH2ZYhrubx",
  "key19": "3pVUXrrwFfFENe4wEdmvWzTXm8FnQkHgS5ujmP3ma1Bd3Pfu9qq8LgKgvJiricr2cDDLuLB8nnb9kRqvDPFyxi8f",
  "key20": "3auUBYmuy4X2tz1Pxj8ERFmJnaJswCjGi1ysgKSvyUXfMFXsLaKDSuMTHnucopWL8Jx999V3zdm6ysvvexHTutc4",
  "key21": "5JJZkia7A2ZHPhHYs3xo11bfyAhtpRF5hqXXnFiU9m3dt9wiXy2e2LRbdJ8N9rvcF2q3ATJ7yWAtTutKgYPSn7Pc",
  "key22": "3H1qW4jDH4dLLcojK8To8zYtKPjzuu7ag2mkd9LPNemLCdCFZuuCbxcdxtcN6J2wwMZrykYfDi9nt3aZediNvs9F",
  "key23": "2nGVn45E4J1NYBLzb5MjcuAmp7NoHB3PFqSYoDXRm5nu9Eu9356QALzyGrB85dDgDcid7LK3ZZ2ErXKap3GvkFp1",
  "key24": "46Rs8juMJxdmKh1bdehhXJarf4JNrGD7BJZFfRMYwKmEjtdEnMm6tGBigYAqTr4w2DfKU1RjfMy46JDESU18VGAG",
  "key25": "5ubsspPaPPpjRVvF5o4SX3WP47YazHqXs8Dn2YL8sB1s23BpNPLLxev31u4uYS1d1xTHx2LoKvvZJTXuAda3KTaT",
  "key26": "4gdC8XSW63t5dgxB2pPpUAFvFbgQ3Y9etSnhWa9ZYv199Fvt1nR9Wk1hZUekdtTX8ccpXJZiaUDxmCtJiLCJfhDX",
  "key27": "5qE3ozxKsmR6TKPTsAo8Vt2AQbcgN2thksbqob9ZiNxdyxqXTkrhPSoYy99Y3UfUAr5wLxXvamZM1rGU4CMTt1p2",
  "key28": "JoZ51GMAUou1sKbSXkERc6CsQgGbv2qHrM36zHr5ZE4KsMCQv8usYyQJ9WC5sU89J9e7qbieXvDpSVpx333kLYW",
  "key29": "4nSwFxChnYdzb7Dx528oeXru59AkMPxstuVaHtfUK8rMz88bbAzrpiFdPESDXvH8YNz9vmwMhHWSZ2EvvqSPF6iL",
  "key30": "4Rf7ctJcxcDtAV8NnKYAe9dZQGqdanEnmfJTs7NL62z4Fsgp3DvaEurdc3FV91pfegxuU1Fn9FTg5taiHUSbzN6C",
  "key31": "64QPPMMGKQujLBW5hEkUUqyqzC8ikuMTMPNiknBQWuyhuDZE6AKvph4XMcs2AfZe2vc1fXTJJqVyXxWs8WKYAzzx"
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

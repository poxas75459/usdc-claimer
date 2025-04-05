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
    "3YYZ3MKf5Xzny528Vb1Qp5CfytcMD8PpZMXT7fUs9YGqznSAPp8W5YNEMYfPvqaWmz1fWNPPwgPcbNLAMxvrTMD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65u6cbeiSJMBR83K2mdZHmHLuAon6Bf7EnqfcqwsN2goxBaDYCTFKXKLHsEd5UQXBC34qh8iHchJnDhP3y1xp8Mg",
  "key1": "665J1GvsYgvd4UXXRTD67diKrviE3HVSKxJZ6jaX52adUMCBFQJZTAjgMVmnATADxdhfYKSJF6VRGcZDVpEdvFAC",
  "key2": "2zEbMbVg6dfovLDL68UyjAPqR9qjKDRq3U1aidzdQKmSjQ3aG4SCbFa8vdW3MLMMTEDFGTZFBw8Nq4sKH8Gf9V8o",
  "key3": "5jQht7b9tz1NqWMfQdK1jJUsFjHqSUQkvS9kn9oBZpVBUDtF6opyKbJvAefvriKh84BFM3Bifiqr8joT6wmYCQVK",
  "key4": "5EJT8T63qrCLjwWx3vZfUAGqmmmzugkW6GnqVEuoGs7mvbJmgHRMf9swkMyRmcyEPzCoFPNSxFyiGv59Y5bXKs8r",
  "key5": "5thWHHkkyNYxsCy8GYtEvAMMrmULsB7Aw5eKqe6CoNvgGhSqbB6nbH4YVy2gaFkquraXLssSDXtHjyMqccCsMBSw",
  "key6": "2iB8QEETkewnXFCAdmRYQ5yGhHWcMDuDA2cfSs9Q2RcZRjEK4BMBfWmdu5FEiJKcHeJdMWhiJBiCNjyQ5x79jqEt",
  "key7": "2kapr3zZnxJCaiPPLbNSdwBLtH7vj6Np2mYjDTDVkrtHPELd1Sa221YW9TcV1EckvrNa8Uk4VMft2DdC5UAPatQ8",
  "key8": "26RQUcQcaTw6PdEeTDGJpmY4wfL46dMQ2Tqp1YWWN6rvy1scuzk8dV2oW9yh3NM4C7SagG8LpXKiH4VbiMqSPKHY",
  "key9": "5TV2FtcN5JhPJn5CbxjVYfLcJ5zSsWvP3q9gb1u4vscg4LXjYQF4MYzxAtVEmjQcMP1n1ujEWGnENXErmGBxaDRK",
  "key10": "56d6JDoJyaq3qHVyDgpWucaFwbizH2fg4pjewjBMTZmfTGmZNdUcr7pnxERT1wfXjAx6virsE3dYEU5c2XCGs5yB",
  "key11": "2oDjEnZy8FntC9BUNv2SPECS9UAgdTQvMo4Eqb1Ne62KQPPsibLEdxosjz3ukSsxFEjC17uCfSEJ8P7vY14CVKcb",
  "key12": "3ZoaDYChbQWUTwBjWNiDUmnXZ2M8Qym3bQ4wJPZuC9pnn28WZn8yUEAMGgk2Yr7RSn9XTtK2DVTDXuP9zTWWV1rj",
  "key13": "N69uagj13a6GcGxsecJRwKKPJ2PiUkRPAbPMy564qR6iitE6jgh4HzV9JPhgbrPppwR5A3FHgrtKne6Nd4gLAtG",
  "key14": "51WFSxttRV4PDgTJUrVYwCexTFa44PV4cetxDLPncZa7frCWoRUzM2jJGHYZzymLrMV5jmV5oaKGR4WD6fF2CKGj",
  "key15": "25aKJZYnsuXhzBWxPcSjW895aTzTaAaHZXW8BwB3qTpuM3tGPc8bUbYpFLc3UBjAJKuuSL3G6w9k6Fw1zFBgNXv2",
  "key16": "5dbfWTgmXvww45s3UCzDX23CqBwjCW6wDMs6eyqmbidip53wxZ2mTg36R9fbSwkCnU6eVcRXNmTRcniiavkD7gat",
  "key17": "x242GgcHp5zDP1dyJRoueunEN7buTsiSUsCT4VJgCBSTCSgYauGyKsWj2yvq1k77njethXvsZUw7Kj6aB6nEb8z",
  "key18": "2N1pi6bRmR5pRPdCe5jUfgbn7merkq2N39h7iuT9Va34rvL1yNvpXWM7wnh1aVHGg6LR3PdwKSnt6gky25DFbYWx",
  "key19": "4svMRqsYLyUdGNjSSJoA42UcbzWdU3ySyiyGZk8Eeg8C4SSwXTahq2A5SJhu46msvStf3mi3amnKNV5PT7vUrKi6",
  "key20": "45EFwhfbxjcHDKcZJ977M7w8MHSHP4guBxTRdv2xZdnswb5n6FJ5avyLT5tvBQnekv12NmzmAuzVwR5Xu3nRHVJg",
  "key21": "3DgfrL2V6hUxiHQozP11ZMps8xTFci8PcmQhH8BLf2RaYtdTvNu3HHyvjAWjFdvdnHeNjAWr3PJnXf4JDj83yKbq",
  "key22": "9KQUbHNx1VAo2hwcfLUaL5r1JfF9TZKbPwtpcSYXX8vDWuDZv7RtKPU7BPYmm14FqVugxFZLoakGNd59vsy66nh",
  "key23": "5TQj9oRphUcfHajy6TwfnwhHuS5Z2breyRZkBvVpjXy4LVV5dRRSBZzRjR9tVYqyenjbiyT28LtmYFEVgEzZUEq3",
  "key24": "3ac768Trb2sVaLKwYBMwmvuUHxagazJ8NcvtLw6b5ohXWzNKwLWMXZjVHgzgpTiB6fKtFwZuPuAjkcsMDNzqiAan",
  "key25": "37FFHKbWrDn7uYGJdrHHP1AX8S4eHAA7aN5CtnjerUWD5sQPFjYciJYxiHhe7BgmfYNJW8jS1A391o8BcfnyweS9",
  "key26": "4gMjtHNSYzDRPJNShq291f8hH9n9XAxTp99r6oKwjGKPyc4Kk7f89r19z8Hkcqu3JL1uSAM1BM2Ta1k1D5yzKxEJ",
  "key27": "2xG3VRrPSutJ39ty7EKr91bZ3P76LC4pyTZHo3PJGqepb6sWgBT1DR4Zqn5txPXj3g9yEt6JKt715wbxHECNEaki",
  "key28": "3UjD8zMbZisZb76KczPGQJbCE5xLnYv5rbh1QPUkbxB3EqCWPbnFK7TUg7bWTWtHyDvxw2gdXCmz7GrxtzyiYHZT",
  "key29": "sXTqy6GjyzKfjYo3qcCEcYD6QXdXrq6G4BPSaWAQNj4RwPpLrZB6mo26FUxSW2WJfvrA6nvrbvG5aBUEZ17Khgk",
  "key30": "3GZHZw72v8eFQjPrbFUkubRyF3yrczJWFPCseWq7PydwnPcKD1x7x4CeUYFUNtQh5ivTHcEq2ys7NZN8xcxUjNM8",
  "key31": "5J4hpFw31tjqyg6gT5zXtM6TeFppJB6MomoSzXge9ySju2RVcxAESn3WTnStqaomwWNH1VGEjCcQTPHhwmZQuZnt",
  "key32": "2V3Tp1xjNGz1M6BGW8NhDYtE2bHcp1q6mAXWWzLPzdLPYYTmPNUdeFLeT6JhAnaaPF5cHagiQxBbxm1cBrUz4AKw",
  "key33": "49riaW3JTwE792y5zAi42RJb5DB6hqqtq7uLSesL6y2NzoZ8xnckPgeweG8Vy5NMAnnnpMWnuwL5J8QjT2y53jFp",
  "key34": "3xnt6oqMW7ziXw5nnANQGxka9dpTro3EoYnvo7g75HXrZkrx8XeTV9A9oMBEq9AoMtjSCeFTz2FAdUW6AMoJtJLV",
  "key35": "3W9Vd2rw6xGWtTEVdwZpLEP7Yejf6y8iAQscyNXoAb5tEpCsaH1vkjDA8x13FLT3Mznt55nx5hdSzRdGoFXo58rA",
  "key36": "2tAZCqMZhJkyYUJWcT7BcWRhksqHnTPMxca4VEyfczrGtLwVxwRqgHothr9djgz8G2x3oaGbi3aJfKkh8obC2w5p",
  "key37": "59jQEsMSDKL4PTknj1NJemyW8Y7Z3MrRYCqBoLK7RRy5hFth8mqKLPta6qzPTmX3arWQsg3EXMG8Qxyk5h2sef6L",
  "key38": "2dNGDTZucEFaiVnPpiQSBxMaXN2iMW3hupFzbThdi5GLFwb7vn9sy2meM9brZpJW62MG31NEv2rU2vuvGTHUazoZ",
  "key39": "Ex5f1jzNkr64yusiRYWQmR67GewfWCuM8mJ57Etu8SYTYcf2GqTiyFbPzxhTAxu4pG8vgc8yS4PBMidJqoHRhXJ",
  "key40": "35T5HgsAoWy3pERdkQkfhh68tM3m6YMbjB9x3zy28j1oJVBeRB1PJdkgDfXDsgqrF5g7BrQe7wCbzm5dkrVFmEDV"
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

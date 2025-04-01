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
    "oJge4kjmzZ4zfdSv9K5nJhF3Np8J5T9mkf6Z1UYDuh2fMKtjWNy84RVEXHGKmYCBpj1xyLAiqvf8eTC8KeRMB6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUisYhnB1U4gfhMNmDN436YNWTkBMn2kXQEeQiELTRbyc1Dgn2bpCuiFVbi9cLfeV7zx9Nw6vXNPceN8qdNQmCU",
  "key1": "45jtYGtMAyD4AR7XjgKwawXVFdqhhp8LSyuzY8Z9RYrEvKM2mU6mWVBbgYM9iphnv9jZRSVCZz5Q62f51pHhqf4u",
  "key2": "64MoefbA75u1nD6VsbWEn6dGwkzih3xgznnE3FpEmzP2hd86f2wPfsqskj2tCLaoheau418tG13eTyVg61tXCjom",
  "key3": "2DMeae32XwJjtF65D1pFy11cDDnnZCHQ8V8pssjJpr3FF2jnUa4qBaaREBFU2CZpgKCdLg6m48ByaduVL73Y9yjB",
  "key4": "64J5bTmuXc9xChRmJmS7ucgBLbtw9XQTvQf3NJp7j2TkXxDH5BqstwVp4UZs96gAtvcCA7GovyKzKhhrA5NP9Vbt",
  "key5": "5pEoJc3q82Yvs3cP6GPMhzy3cMAxR4K7weRqoDWnUoqrZFwXGkjCqZgZ8hcySqmAgF4QQJ5cNtSsafBHz4HPwpVx",
  "key6": "ZACjv1oZd5vNU1Shbw1dSUyQrUvoehgbEphqu1V9jR432aWMJVrxD6cLPLBGWJy6WU4iHMpjGssEPqDP52Wq1ST",
  "key7": "5LkMfc7C7a5Dgjy4nTLYVDYzMnQJMU5JvJ2vFMDU8uCReouDAFG89TfmCzF3DDnK1Qh5vAnRcJRn1kCeHxNQZRdA",
  "key8": "2ukfoENeW1f7sPikJo2YKMuB9ryJCZFn3zLuARPutDy9a8Wc8Sm48tEDsEzzQKXwtnFKdp5tjV7vdmanwjbUJLWD",
  "key9": "3FD495fX7se3mrUURMV2qv82Jtzi5WqEFVZARxNcxdYR1yR3DZtGJtZZ7xZb1wAGJJPLjZtd2sGscRfBcRicfcKa",
  "key10": "amCM1Jj4HQzNTcjhEJW4iBL2eoatMLAFz5t9c7iAbRLYx6BRWGWounz26C6gA1kX1BG9WesucvX6KDbxFTVXiT7",
  "key11": "3wHXafuq3RnvNHRWLAzAVy795Zm5WzoMbAwJHyusgiR3aY7jUZCmHeH4Woo4JkzrVPdHLBZGvrkBZn31BJaKzAiM",
  "key12": "zEDw5vBqqvaGQ22zHwMFtWonGJobczi4aYtmk5m5WrqzmBVV4aSfi8S96cQ7ujwjSULqrjXaPMdxjuHzcSF2B71",
  "key13": "3zzhRF8LQJ1fc372bYXDztpL5dQGLZDgp5pwGin3BZfJQFwAKNospuDBwaexJNikpy631syTnEnjtnVo7R2Ptb7o",
  "key14": "3LSt2qgJpEmJqcSMJvBKmVhE3jiQXoSY7RJedU1pMatjqcPBQJoSzxk8yXrsPf6epAJaLr12MWHWGXemwWCgZh6p",
  "key15": "2u9Lm5AXQgDZChUfy2rDtE8ojzDsasacThSqcdBkhaLGuvb88ERAQvVEtE3d2EdzSx2xUYZ9kiB5aCf81i4SQ8nt",
  "key16": "53yXPuyLk8ctRh2JTR9WVrS4yvdnXgHPCs7t9KNKPRsADucJDCVftrnSxRqcYRGKh4E4Cng5542idippe9ymtjiK",
  "key17": "3dHozTmosHoi1PsMXSwDUGLgj5nosmi2NfxSYboWcgfzxbq6Yoey5kSw3sEWTwujee8azoA5Dt9VJvpGsDG4yAyW",
  "key18": "brHU9QF7wyeioK8Dv2vuGPiULfCXYk8Ae87tDNSjLxzUP4o8CWaT139T14VF9F41WvSfVcB5cmELMi8rKncKca2",
  "key19": "2pQVfLw5Tr1TxJ3HsQJfAUsxCt7yWU8gpAoJAsdS3nhy3hDXUKPmwia1jUJuwXifFhYWmguC9AgBy1HJZ8FLR3GH",
  "key20": "4kE5rDSjFjYuDs1DHeMCZt4gBAt3kGBj5FLfUGgSaxxZvusSrV7DbyTehRsp4UQVR82Jh9kqnhn153xT8upWMxC5",
  "key21": "NsRvBWp3T9b7DoCtLDUC9VaP7HQggXN2p8haT6bbPqTqJp9uYoG1t8jCHH2LVu5y2wMXw4kSwrnQNPHgvMwBhRK",
  "key22": "2FvF1sULRPSUoKUwGQBeYFkWktBzALgfUJAT2eVnotenfJAGZRxbJBfdziBegcDKVE4zT7Q76tAeB31RUb5ELXZ7",
  "key23": "1m3MmabXjcFBw9P5Zga2myxWSemrw5QoA3z3VjsqZQktusAuCxUyBjnbcYuYAWzx3BMjAjvNRtFtUrCmt9eTFsd",
  "key24": "2dBswT4BCWFHgbaWttvzTSXDUuSho5G6JBzdfZMT18EcLVmkbsLT6uNaFqrkAmWHuoyAGhAc9ieXu4QA7FFerEFD",
  "key25": "5EZj1YWUmgiHJnCfEvHeEUZryCgDgL4DhB46qvsADmL26qWcN8raAAUtKecMyYW6zJjp1nDMMLKMRe2Rta8CTtVz",
  "key26": "61MZUkRcV1QKyDpbFyccKTMPrDJxjwcQoDFJ3r5BWmEKz6c1GFVAXTqgjqswBDC4cv4jvXEgvZKKfPzCiyg96zVV",
  "key27": "5Z3MEt2bLsDYcSXhfqw18MagVQfMZF8i3fotuxRwQJZouDxWNAFukCLRf8MArLKEd1o7zeuivjPYXPxLeJ7Cdqib",
  "key28": "5Q5uicDGwcpzrLHr7V9YJmCAAZwnGz95nfntV36UdGtMxtfSo7J8m6CX6qmWrmX1qi8yJW68M5XbnUDrvVmz7NVX",
  "key29": "3m4H1PH2s7eHa9XrLw2FP5iFPeN4XD4UruG4wAs1rQhe4vBaHFzGDyHnnfDJf3F8vS4hYXw46fPBEF5HsLFMKU7o",
  "key30": "55dHd4R5X2ennqKN8qhfY9z95GHWdgeRZsZudSBnSR2nEGysynyDGheCtXCVVRCPEwVcRYxELBoY4sN9xq32sWoK",
  "key31": "2vYHy63VhxpYZrmGwBsSyMeW3iw6M3PqHvJW5WWuKwwsCpLGwGd5UzkQdpuqVtKQ75qkbM7vcjTCPnqSDqtxLq1M",
  "key32": "2dUFTF9DULrnedfrY1NqbdcH1xzBQy6eJtCKrciwy1ABQf8k82TDi7y6mA1ABR26FqYxdESnzZk7tUXzMFwB7NZc",
  "key33": "4wJ7671nK9A2JJHtitU7WVUSmNKMgoVk4NCsB21qP4JiJg7y13Z2vUhVv76TDhLEAahTGMaG2zZHe1fSqM2QuGC",
  "key34": "4Yb89rXGKWzk38V69Uw3XqAyYPGECsXmZKm1UZKJvYXQzsfshS3yzpJapUjF2gGH1kVgEg8p7AGvFRsgNX7Vruiy",
  "key35": "3EyYk5eiczucChyCBg3q1n4dzJCEtCx9g7cS7iRPD6hJxLnSaAtRPeEDaGvkGe4B4Kq83Jf8MZzjtxAKyeMrj6de",
  "key36": "2G7nYb5cLEVYUD9oKGWY8copdB1fVV2GEK3uz6m24uTFwRX9ZpQ3qeaqFhxHTVkYrwFedFuemNoVVq3zG7T7Njy7"
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

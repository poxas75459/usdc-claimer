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
    "3go7zahtSrGTsEK96MebbBh3EM8VrgZHZqp1ijtaHUautozw2QH4fBJurQF1iBbtyHWk9ShthZSu9qFwgjECvLwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZyWv1gT1SJov8g6i6aA3VrJ9EZaVAhD5ViEzGRQZXFPmQuJ9SB74RgEtNxoUzg21siXcPEDuE9BZ9Gqvuw7nT4",
  "key1": "4f35NxNKjR4ekbauThZ7kxhfGn7zrHZK9EzDJQ9p8pvLPE9VqFNJJBecukXoo9GdkXtNGnVwEAS1FqFSNrbLXUCf",
  "key2": "2cZKfshxTn9kbdkmuZyKMQfDAwf58ihzF6brUTLr4TKxfYcqbBeLPMz9yy3DWRCm73aAES5uGTvFSwNPjEa1NecT",
  "key3": "KoZ1VskBzQjbQJkXkZwkLZU5MrRAQu3stCvs3uGt2qTyGk2Whm1yarPksseBBSsffYb2XK5j726fSYASGDU2ror",
  "key4": "55mSwxtp6Baxxt9NkKgCuR1hJU4K4Ad3rWdEkUSMWCuqLHwZXSZfiKRV15tYyPQfKSnSTrFmKbmxf8FzsidmETYw",
  "key5": "5MFAYrzYmeL3KMJgWXrchyXEAMEQ7bHwNRTFVEjWfbTz7g2YtWVBpGGVULM662wNm8Pavu7Nx3gxbimGeu68C61t",
  "key6": "2sQj6HfHTPmJZcmW7hKNZ2unz6Wx6d3vScPUuXiUge9cZtDEJVZNnKKEuv8PNXndXDf2WEaAaMxP5hPD23B8noq1",
  "key7": "2anW3D6vL6KkYV4x6ddim5EG7yVzWQKJ4wPufF2RzkQsnFumpGpg4wxjpfguj4myK3KgoUqDyNAX8jpjCtBJuVzG",
  "key8": "2Kt4SBQvAFXtjVcPXidoEQbBbu71ueDXmLhGbQrw8Pdq8M31p1f6bJFnjanZ8GnsZW3hqXaij39LhhWE5cmoC2UT",
  "key9": "3QaiGzL4fogy2AYNcAvoFdW6hCKbvCS7qJrYXprzM5YScxdLF9YPrjbNfNpbPsDmrGc3YMGzVNzj3wocqVBWskLR",
  "key10": "5Ri259b5Bib23h45QgzYcFfKbrjLLoydD4Z6H1zYuRtZqCanwPJCe5NzHpB9CyL2cWq6Fb1xNz2ZTaR2VSr5DhhN",
  "key11": "5d3KmFh6qqmzX8FX7KjgejccNnuKgknAQtNmZsLe1qJ48RqPqkNp9b4mXxgM47EPA1cpLCjoHkfsSKvqgVLZbjye",
  "key12": "5DCxi7WndWrdSParjqCjWGq1k3DNiQCn46NghquihpfZ7NiMgqwn39YATF2r5pibF4u5qQ5w5oGagButGZhRDtPT",
  "key13": "4EnQKxV2h3y1GKpLewQ9Nm9m7n5jAXDfHrECXchqLZ8PUDpkEEmhFt6RVeFKNnGGUU69R9k6GG5od9ccwaLpz2rd",
  "key14": "2MZ2hXjJcZqMHpX3xz8HjLbroXMxm1w3L1r4yo9u34BmrXrBurN7ZMHgH5KZxQVAKQ1vQ3mFE9vR8KrYtWQGT8Y7",
  "key15": "3iy83k826VTYDGjxe3A5yNgw4cc7Yh2Y5gG5GXCKfffuVRiDQnf9FfAADZmzYJeH4NbJydnyj8LK45GztCZq9Yfr",
  "key16": "2nXRhtueyuSUbzXjuLagASW9QufFTF8XhaLY1iP7igy3GBfBjRmBwahHWJHbXvX534ucEFoTRzhifmbx8b3rfhoF",
  "key17": "34iHKSrH9rN6AGciCCQmqKtu7bzhxF5noaN9iq4xBFDEGc79dJHWw4mWKfXny6HkEvjmgFz8RRRB4HgpCyoXsEaR",
  "key18": "5VxmL1LpVhLsYXPUL6FGctXjeoMRebrBLSgaM2K27G1pTu4wyKaRbi3UWkDg3DgekjQAzZymRFnjdSvxaEW4zFc5",
  "key19": "4xfPcsE1SW7JwFCbrLEnuN4Azqm1BRETtZqcHXDSZT7nvJBePG1Pxm6Xnx4XJGsMjyUzSzaw56TG2dw5CZAVd1q4",
  "key20": "2PAdCzg4QMp28DCc8GhwLqB8ua26H6zuMvrtUCDygmn8f6RgfN42fX8U8vQzm6YvZryT6Fuc3ywi8DedN4KPPKf1",
  "key21": "2kqFH3TjX5ezpET2aDSz853wip8LM8sD5JrwgRBhtHRGk8RR3nRjrgbpWFt1evrC7rzBBNQUz7oABHSsHtbR2e91",
  "key22": "3YS2CP7A1vA86hvPeyWNw6pqVW8tHk4zRotZq4s9fDDPsMA1yZ421Y5PxP9rpVsAH5eQyVG5FeWJKg6CqdhgaCUz",
  "key23": "33TuGnHGywXcCoyHYTyYNJp4KZRxxKvtkVgvJF4rTYasy7vAvaTg4HjezFJo9oi12KbotxKFjwxN9vF7y9j2qEvz",
  "key24": "5MxKCZkaaWWw1MfmtLXdK9Dk5pocG1knqQLr28qfxQBUhJgoMpPzTrk6VthHXjsJHMvdDFLBJAErj2AXFKGqPnfc",
  "key25": "3CLjDXonFiuhwc8efaVm4PTz3TPH789JTeNzxYwdfC7ba7eThtnCAfn54BQBB7PobEfbU2HkNLmxJDQbnuH1nLYG",
  "key26": "r2Veo3ZNLTriadg9CxsxBZkmB5zENLC4XZFvNkapU2GiE9QcUmTMnUTyqLVC8tnLDa25AfyfZRpphY2RZKecDgJ",
  "key27": "5ubWphpg44Yd2ysmrZdiLSJGFJEdvadsHe1sHWSRowSca87A8D1zTdctV6gU6q73mkz2xBzRkDxRX1Dqa1hXcxyP",
  "key28": "pExa96eHjmxSt2j5sE79toA43XHvqXBW5RP9QEW38SyRse4CJmPUF5Gy9VcmjTGWi7qGar7yhmTghBMnbjWh2Ph",
  "key29": "5C6h8STBZC8n2GdTq9Q4S83XxLxuQ4viMzfeGgeNyMKGMYdexvPtJ4RWkM8MJyd7ocVxNLjL4B3CCHJAw3xknSJP",
  "key30": "53NNVLaHyAiEHt3j3tr4ogvNwX47zwePx8qFzPEnYrBpcfGMSikv8VP63JtWa2hVkp4CEuCxKeFVr7QpeetPLvHM",
  "key31": "4mRfxWQZUGuc9t7KUnDCE44BGP6PZpv34QqaDscNSsbbzRJqeBT7TBcX4BbkwnFBeZzqS3S34r3KZeiNyJrYbtNy",
  "key32": "jdNJQVterZKiLnAnJgt3t1S8JU98jQL8pMDuebGRrGkzeQZVsH741hsRP7o94ZCBBtgdVe59Gc9tKZjxx8tvJox",
  "key33": "32EZzHuv7qDpEsdQDHGYPyK1HJ4nWnwtMZnexRNuCeCaGP8NChcGwnRUq7TWL7KdNFZ7DJohnCuTdcsGVLBM27SV",
  "key34": "PFM5NQvVUZAC69pQ5ak6aWDC2hth918ErByYmoGDA7BKUPDABXgDRBy2t3jkL7H2su6TTKrzRyzCkMX1gZwmvyZ",
  "key35": "4wM8iFbtCt9ArdkX2rwZegWHahJhP5awTqgu6f1eZsrXtXGVGncdCUsU3GFWUydME2G5tgcGvgibYP75PYJut8hw",
  "key36": "2pauVyE5XpE3DhPmXCifnYs9nzEhvPiXBwmfEcHCJ1aYv6sA8zyRoVJLD53taSEiuCMj7CHuwfoHAex5529X41pt",
  "key37": "5VsjupFwMw99JdT2WMtsS24jQa7bh35sgePMicbpKvJW3xEEfhRGiGrjmj4mpdRpzaJxmz4k9XuvT3XGkBkwZNrR",
  "key38": "4hnPqpfoGYS669WDSgcfkiDj7zxSnH5Jzo11J6WjxTcnurD7fhJJvDr7Yk2mzZb7S2DrQn6FZgqx3iBXEXJW3FEs"
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

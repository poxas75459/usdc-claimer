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
    "23LbY7iG7SaWjN9SSYV5MctAL4TfBz1seQ4RVKPXKmQXdZk8HZw8fEBaJ3Gx35mMpwp2hUiWKpFueCM7m6kpTTho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edYPqgpSbLg98opzar8LLFfScArK4C3A8ZKMQRGSQNz9nDYHkTNWB5V292x7CqcJGE4rPDLR3Vz9hk22AxkeQvA",
  "key1": "5N8jhyHNBe8qXttRCPYvJ8cGGxU14pPJtTo4pDCnUrsRQXJ1sYN1PtzTRmTdMYxLwNcqCHNbuEoWVVBS9YRyhFgw",
  "key2": "2dYhzFJzeiHJ2LwEsovLHsvkBFXLYebCAkPVxvCwsqfvLtWuUkvhAGv111Q86ZFSazeXgLtxPBUTndAGkTu5P7zA",
  "key3": "2zXopgP8Dqh5x2bqfE94VkHTzudksAHhsZeHxCPfkhBF8sDe4aVcAqUscNLf6NB4pxZkGFcPcUSZcAX9saVDKSiJ",
  "key4": "5vv94Uwy5WX5vHGTSzCKgn8jyK3WzcdvBLAfnXov2cR6ziJikL2iJbVGSWrrjUhEgU1qU95eqPiePrHpBkuoihbS",
  "key5": "2jDMiRCoGd346TzkQbFhWepn5USPP6yGSWuo8ySE6fa779EmVxZ92NAT5R2niDwixtwxxNmfjdFz8aJsd5fY8b1b",
  "key6": "3CCV2ogNs9nW1apU5Fnbh8xYxhUN4RAFA4Q1cb7gYXWzm5Knz4zQzTvEsZwegxXqeRmySoaaVhaTKPtCdxdQ6Zq2",
  "key7": "m33LcfqGsn36MXsrweNGfwwmsBCVL7BRTTddNoEYMu6a6nMwBE8QUMGASiWd79yGQRB8UJ4RNRQ7oLNdtwRhV1u",
  "key8": "aMayxoY4j25G8b2MMUNvz3yMtxj1D85z79XT4JJdAXgdZqbtTMScrmpH3dwmNYYxzvc49MTAqz4bqhaTZY9qMDE",
  "key9": "vwfbTjhoiNUVG9MgwVDc8T2NVojAF8En1e2uuyLLuK5B4Es8fTmrfAfkU2yRqfp6uEZuyQdYL535TYvZ6GhFq66",
  "key10": "3ECRq3H2sX9rhZ65J744X7oJMAoC7zNom19nYcPwzgYFWbHSTmJmGMbkY2fKm1ue41Qy3QVJwbXtS6wJrcYRuckL",
  "key11": "5oo2jRX11UcqdBAge644UvvmpftvgH1v5PqBjxHErcwsQisY4ojwwh4ymxXsSNtTycF2TcfPmbeN26JA1AtEZ4du",
  "key12": "5hKggnwNTN5T36CRuD3M2bQ3cnqngskhya2FQ436Qc1okBvHLkXidR5Zzs7ujPVWzADy1fdrrWkFsLqxHkq4UAWm",
  "key13": "2zwDJkxNqcVQG1n4qC3xz5x2dn6HMTbsWWCokG3Cw6BbEcSH15D8KSwdDtVjxLBf2nrz67xDdj245KQX1R6Z3sjA",
  "key14": "5ZWwKKwyvy3kek7TVWoufrR8oTWdihrbZT6jxxTk6qawD4oCywbJHQicTX8YLSEcRoQF6x4RkxQcTkLaWoN2xNdu",
  "key15": "43DN5g1rA1gpzFsuAb7gxSQzGW3gjJwJDw4Hndu1v72Ua6Mw5LrMYcAi2hJqESJMihYc4AtcKtaaXtLhNtZoitu8",
  "key16": "4ppgYYhRrWs96EFdsqiLkXmaDKdpqyKR1J7oiD4z62NiSv2EMWz1AU5Ybx6yFrk2fLAPNmcaJ8tYhmxCmSnr9AZE",
  "key17": "4KsX2bAZjv5DN5M1rhUn2d9B96fvp3gcns2oYtnj4cPRD4NsP6PLtW3yDDj1vcrSHzEcoiK7M1u8sR4rTyyTq6vX",
  "key18": "4LcDyesd8UeKSLp7riKNyz5q5rmwnoDoqCziZjvoEoNiKaZU8pEuG7z9jXqPEse7fqrZRbPBi6CmBGquugUU8tX5",
  "key19": "4zixk5CJ5nPxhWv97j39vHMjm4kRm6mJPkNTGkEWHgaFC97Z3eaEmjviQiAW2hSf3Qm7uAvw6DPeakKqhL5CXsZd",
  "key20": "4diWxtg7zhaj3DJWWCubrPGXwbKLNyvMSSCDndGvY3DDWvsgtGZ8A6xPkCoaNJCq7vvgLpnwWfcaytKtaFMvzC5n",
  "key21": "3QGTAZma5WBCfyWHdT8uoNmgHAUMChBYYcFNDGGPtSjzAo61p3cDGoAZxTLQEy4w4stRQXzbv7y1qVgTxKQ2CsfB",
  "key22": "5YEKN4SW5NEkoovZMDSgEReCjZ19Xy2exngYRkP6uWVLz2BYRRBJYasF8rHjF9xKnotPJRorqH2j1ZHXDFwKtWpo",
  "key23": "4j9Jnwv3YEozuXMZpKrLGxwnv1QGnhwEYqW6JDb7W4TJ3eTcY9TSXYdL6PU546dZgPqVsQRhSEwsP7Kk575BRyhK",
  "key24": "4wqd35iphZBP5FPUNJPvLGeTktKt5kLY5RRhgknr2kj4TtbrPmav3Qio5z289ncdUR35zbtMRUgQZVrHS74iGFjF",
  "key25": "1YqZzr5E7NjW9jknGqMcaGvD4MMMhAoBmCUrkzafLK3DKeQp4fGcBMB8DDcYKBRgLWP5WNiHHy4twgFDjJUacp4"
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

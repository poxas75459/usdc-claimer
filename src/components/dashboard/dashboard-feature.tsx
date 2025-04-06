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
    "5VrYewsfJv2LvrhrmmUeed3g2imcsTsMLjNT2PUoFQ8tyz2y6jcnzXWYMjVobnkHqTfQpPBzDLon25ncUxgEEauK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDLDU6BbfnkH8hh6XUjSyTjnLSV6X5c1aHKK6oQ8WtgQ5kz4YVnZtEJrZjbUbryr6so1DYQZXMTn2BowKjUak2b",
  "key1": "2bdWRg3U2NBgcD1vb3kJmMtm6hCSP7ju2DotP4upMGYnYQwiVVGxHK2Y5hnAgPULdDwwKoabPXjHsRqPQ46Qcki1",
  "key2": "3U9PNpvthqwN9QjFGUJhQWpbNieM25GFFUZqnsJQhSu8UpTW5yTLZ4atkZ7wQEBH6kFH8AcJwxM6iMqEUP9smGdP",
  "key3": "3SQQFFbj8Rb7fvp5TZ8q6AWcHLn45dA3AoY3v4c1uaVrUq1vqcmzEiKq8KXQHXPYjdZiBZAZSWthPMK6oqgDeMht",
  "key4": "2wD8k1bagqFJoYSQ84gQEbjXwWxAuEAW2KGNamtPRLsfguwhKarJ8NDR8WFVtvkNbVY2eRcaF1gyEDp6jNaVLUyu",
  "key5": "59Wd1TE1QEc3pw9BgLtcTPiRfEytfr9YqJ4XmBpWWz1sFQV5FVb5Tx6qAhMSaamDQHpJF9gmMB1xH6BugWSV6S61",
  "key6": "kAY24udiNYVBLpNuX3DYHVaUVtSmvwCnm6t4DQKVanqmmxEGE8S19DNpqLdM6ApqP1iBg5UipHap2uU8iWst7zV",
  "key7": "2r1tFYqtCoW7Eo71Pic7gEFBNHDBhWfZc8LYuhL6E6gsXb4ayqAtZhBHtRWm26BMogJRHcEKWvwvpKTpf7PRtn7L",
  "key8": "2VWcuGjLa7UfdNZfMvUiLcNAqyCeiCgtAVeToztETdXAHTxRMkvhbPfm6dT6rqNLXBGTxLz2JbP1ikyB8gVzWEza",
  "key9": "65yVhDsveyuHXA8esRxpgTrTjTyDzUufLDHYy69nXo9UXQ9HwtKw5Muhn48c3DKrsJ3hjA3TTGZxfR5Zo4Q87hVU",
  "key10": "2gSXzsb3V6qEHsZNcKWMgXdhNgS9VTG5dLVbVMz123Z7Pf99o3E6KeroBiPjsw4spsNFgbTNj1oEVC1qZAUA98tN",
  "key11": "4ufTiS3WWCck53vNvWUpYqJ6mRVeN3M3pLgBrusQdSdX66rSsPaDCc2E2cAypFhSy2U8f4WfKQX7Pmu2NKzYyEko",
  "key12": "VAkSu89a4fdkpY8xdGx6hZgR1tutQbwkbHpB1jSa5b3qYgZFSoMQPkm7Aue5y6uMYtNoCCpTmTYfV9rom9NemHa",
  "key13": "4PiMFK8JHW1iH9V5EAqSTfi9GdHFzLoLu3AjyDGBZX9NDVyh9jxrN4dRNKtmdf1JhNUgFiJ5oiTrzM8BKW8m82uW",
  "key14": "2tHKZJ9ryeBGEqCQUpURXkXBW9q5bBhxnJ99mwWHM5H14qVmcFEPZTE4Hz5gsgNg6F42wp7PTJcUmCrezwS9DbJg",
  "key15": "49Ct2CDcYBJLScLhQ2PvbQasvGwjeH6KFpqjxEu2dySgo2thjiPgBUt1ftc4QLjAcNZWZhhXJmXr4NeXGb1EViVx",
  "key16": "51FVopiJFoN9mRtZoFSpRFNKTzNBYokGLnD1aHF6F2TXyuPE7A5F9cTYGAeuXtEEG6kXSHq5pMjKpU6WtDjs4ksT",
  "key17": "3UabxCgo1GG9JmMxpGpscX5uTEBUJPHS6W7Vb56eyuTMcwffTQTNDCQutM2pQ6UoQyYKyR12wqWHNxXY6PS9z82B",
  "key18": "2atoMGhQjq6WjZREs45ZBhabsS5TPztZjNi3HFBprSXyjtPrr6bcjhGbpQdkVmJoGZY7F56AnUEbeRBmANzN32NQ",
  "key19": "UFU9eCd3WnWZZAEgE7Jku2JnBECsYjqUY9HuotdYiLE94ktBEqkV8gs1Y2wfupc2VcHtrbJW6vApKedbMqLzGRr",
  "key20": "28sKuBC94M8DaJQQyKrRXSdxvev5scB4TmVxR5evwHU8qDjytQ714kpJ42skJWNdzEZRPeCbKGUSHNn9ntnBGVur",
  "key21": "4j89nrQXC53HP3kzpMVmPmF7CmTvLHRfPcEcGLBXkDnLaktitZpvptZjZda8Jk3yTk9JiqxmaZBLmUFyCQjDSXpB",
  "key22": "5bZcVp7E6MEA8jxF3khRF5eye17zayAGhucmE17atyKHcmeh3f46UJDt7RhPkTq53hUzzhMuQhHfYHAiHBYM64na",
  "key23": "25N4i8jcqjuZ8aCrMUCZvZ3d3QaxGDx1ujYWMirZdXwL5quui1VNJj2mmySU6NK2Ua7Do2hHWzE1YeM98Guu2Zp7",
  "key24": "2uz33PSHsGjYKoStiqfHVEMku58v6Mww7xWHqZbtWgktthVxDSXT2EmjFfHy4ARJb6YqdRECuPrWp3shDjGRC3wK",
  "key25": "3spnMQveUZvMap78pPvR5kMveQKY25LeohZJH7RBpz4G6V6PENmqVg7bwJRmY6y5NEnSs3MvFVdPQyr7ifkQTP9s",
  "key26": "TXpgkfMVZUf9D6wwH22Rq9QmaeJGasPwvAZojN5q27Et4QKuZtXMWmE2zXDFCDrEJarrqr8h7UsN3SRadnwKxeu",
  "key27": "4cSYbtESemuFxrzSBQQ4FAsa3Rm8Gq21MZ5ysFC5juN9CEH5h93CU9HWhC6mkyqFWumYFpKPt7gKcwtQMuGxmsg4",
  "key28": "4LFem4N5eiKj1pt9Tb63NFYeatH2jxynVmhBDtDobgCW7ajVBEv5f2wqkmgeWXN2bX91nrmZP1KnurxpQVo85SzR",
  "key29": "63TBcsKRXvF882AYVUGrWPQEhLnujSRmG6turHrkh1HK36bFWQwAwTW1uX8fb6gphvULxs3hdp8tqqKoYaNPdNUa",
  "key30": "i8NBBFo46kvhjXDVANBXHhpHaM8LqaTF1dm112zpL8BvvThENGUWw1phbWV3RGbWC323msB2rnS7DPX1aGehvnA",
  "key31": "5kYMU2FUHRz1CmMUEP98xxWStaK6Nzz4C1oxASgv1p2LkXkSvHLoWHWo7iYpr3H5FKmB2rke4cserLa9vrTz7NKx",
  "key32": "4CHZJidmDGYvy1SBZ4Gcu2scTLZoASYurBxPriQwqEhy7HT7YBW75B6jBedhpLwNnZNYmh2xAWgvm1H9WZyGhXNi",
  "key33": "kJdVUi1pXQwz53uqCeYK4mePh27g7L2m3qghRLuTLJPxPAkoCJpW8tk3NLKLAQnamQuH8J9KJSQvroYUikAMaNm",
  "key34": "FmidG78fQQDDCvY72sXqQwq1Ci3qR8Zbzk1Hqg41MH4Qic8CsB3371VMAPRg3mJfQMRwm9kJ252cpgxo8XqBkuT",
  "key35": "4tiVTWvYqtcGf6adHKHthsqGFjzxdPhMBYZRupKMBn5hdVgNQ2drrJuUcQjHwwKZwT9AhRGTyqpRCiJcPqJodMQm",
  "key36": "3RbKmri9hqDv73RVgU9nsFdqA1DrRLYv3fF5UXkkiXgUuPeCYsSpm3jGHgkYCkFgTLKjy9MbTyCcohyykPiGxbKZ",
  "key37": "3hWQuDoMz4HocYVHoTYzBo4Ek35xBizAFYc5bHo2xqeqeDeUuyGqmUbPwt19qYhj4WgUaA9WH2LVne3RyUUaSFS4",
  "key38": "5N1B5HMBJhVRbKBy7Pj37G3CTfuN42p3SHngDWgHgXtq9GcbND8N17CPERCaciw6Pe5BPLNqKBQSv4LsnUQ5sw5j",
  "key39": "43zqTCMW37dMTaRwNKRd1Xfpa6G5v8AQACmwEeLKKQNh1B62WXqpLgUs7hMpVX5MqxpNMBULPCb5A1SxK2Dmq31v",
  "key40": "4YgS1AjFuAyz7QWLMkBiMiLy5ucoFwcy3qqCGF5RfaAjUVkTL7SCjJeJBbRYuriYKvXyiZMGCGFtK3t2N6jpHwmJ",
  "key41": "37MWWvBCXkcdmdp3ebWgNCHFhX1kWcHqGePzkMhutcMettHbdqMBbRSJvhge2fHWQgry5bVyGtYQGhKFqg2QsUhh"
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

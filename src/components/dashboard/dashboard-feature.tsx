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
    "2WKrPaAHgYoY6U6NFLSsYTbvRRnQsCbQU3o5inViCWzSw5X6mWUbbbvKez7BA5St2WBeEq6AYG3ieRejvVbHyq52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3npGQj9AbgujJ1bRMVq1NubKgEpk5kn6PmZorfasTPUtZynxPiYbH8n1nWNj4hsVc3a7cCum3L8LBfQuVUFkXSt4",
  "key1": "2ztotCyo4jHYJ8svLXix31TFXExu41HCdDWW39aWVy8BXqXEnovhKS5V9qzeP5ZfG45v3XYmwv43tMsYFDkWcNLQ",
  "key2": "3rN7wx1fNwLYvNFTmbBhAa3ERuXkSr2xy1AF3p4h4WFy9T345DhES9YojeCagYwXkrVzHpx48ZndsmgwamnAkzCo",
  "key3": "4b2oud4X7JH8zjunMVJHahzia5ZY62mmXZAGFDVUyJNNTV9QZ1tQQTPXZwpvX4yRuKipRJN3SWk8eA74dFoP2uyx",
  "key4": "3WohV1gsWn4wEVG4TBHmonXkkTADUhnEsDCaLcseZTPC1VqQEzemfyLwZ6P1r8kC56sL2DwNi6EPv5B7nKaaWEX",
  "key5": "4RSKPtxgc9V8QQA8t5SEX64wKKARdE9h3XHUNWgtzcXFbiYPAfxi2AcoYPBGGvHY6Med6m85no6omMWnjc7N7HJ6",
  "key6": "8HvEEsFpfnGXgZWXK2jsRwnxNitoadhQGimHuWdFZDZVQ9apFYBmeFgEfbg9o4LuBSTas5vQsJxxxuk6x65xLSc",
  "key7": "6eK3igrJ57Bagsrp4FSKopKJPR6RSnnzSKY9JYrYMfjUMtfoASNdrtmmEEeNtVMhQdB67zV69Zumzw2FurUt8cj",
  "key8": "3821auAUd6UTvKX3fwwjf6tBCqgDALT6yv98sPyh4PmFrhuwU1iLknHdfkMwsSJynzdugKkD81B1M4BBLdqAWqSy",
  "key9": "4pJWCRSBfRexG5dmCQDDoHoySs1Hizia464W285VLihgQTgw557qY4daD8X3C42NyRJXVzVxsxWgtHzZEkfH2JcA",
  "key10": "scNXjcKFC3wMVzrnHww8VuB43JqoL2g2iPrUFfLG3aUT5GdCXDbabdNgFKCXtYxV585e7iKm7t2cAMrVrmrk6Vb",
  "key11": "3yhpQ1Z5TxMsYc9UGM9QXhGpkBsBVwqU24wrUx7x1cNdG2GjrVbJeUeakB8PmrFhaPzwaHoXVot72kk8hdEQwdpL",
  "key12": "5iUt1CVC7u117GvbJVSQYpinqn3vXkwwWFn7UtZcUto1c75TdiatNB5N9nNQ9WPMyFbqfyxje3bBtDjnAY388CiX",
  "key13": "3M6J5ZqnMABjYNPj4a2b5xYqTLA3FePsNRygvc8o7fj1fHW4zT3ieDqXD7ebJKfzNg7m8wyfYSr7HXjU3YCshgfy",
  "key14": "XusiCgZBaDUnND58rUt81dmGaevorScvkwmzmrmHk1CL3G1RFsaw2QcMu2XuWubmFwuJhHLXzQDA8jFDqPhBS4y",
  "key15": "4EBMxGQTRXwR4nq4mk2vFitJKKxVdfB8SkGe32tKrb6AcD72hQrhsu3m2QFrRpHn7HE1etZwvuGWmeZ9nyjwaCWU",
  "key16": "5RYVmGdydB8t5guQNamxaVgqotpiD96zHfKEdB1PcnvetMxi1LgkWdihJQzyvCdjJPjPqQEhPkn74F7A5sSU1joD",
  "key17": "a7tMGNUyT5dCgTbM4umCXM1ZiGDvtY9oDb6DK2AxiwJcTmNpUrm5EbwpDZGhCn4ZZo7Jpy3Tx9QT7Kdaohk5YWT",
  "key18": "2vMrywHbFbNJiGrC4HL2xtAQ5EL7PYuNrPi6uZGNscbngUZc9cDTEpBpzeWLz7z5iGRbAyfrno2Tv377N6eurXPT",
  "key19": "395E1dYKgxwUgebMjcknz5Cd7kGFZMrfpiJhs4GLdtvwUurKfqbaSe1kQYmiatjE2LGu1ZqVQx3xJEY4LRhdc27T",
  "key20": "73FBM2xAYU3SvLrPSrYUWiePnMF6VYdu3VYDCGcNkpnBynikLH9dkqtiwn4J5u2wuuDD62hd6P4Umhob2zLycMG",
  "key21": "5tMV7RW9tZhykq3LVnj1ks5xygT8mADDQM5h93TLxpSrWpHDPvtognk35pGMgxfqJfB5xCUveJQXzJwVkGZMvoGD",
  "key22": "exWxGyGqXmiE6Ld683F3gRaHb5ex6wXYCku3gX7TA6BweqJVkAwT6tVVFVbZFm5vgjCfb6kdCNs4FRw4rTm3sZd",
  "key23": "3L6uABW2JLZuUgTXcHkQh3r6jAguUfUhxSrsQT2zXeuoZAGvRqphYcBvAAYaFHA6KCzNHfhn7rmxarBXoPxCgwBU",
  "key24": "46DR5kRMk9UBuCUPasyZF5BM98M6GkWYJ1VTcMuDFEphh3JrnRCojy4dLQY8CPWqPDYJKTquQzy3oDhQQcNcMQCd",
  "key25": "2Hp3hfVzJ3u63tBhonNNj9iNMrjkHRMRro4j6oDK1FU4SrhULM2h2drXdivB4bxRvqCDsFRYkzVNURabWUUYehSS",
  "key26": "64dYhxSJwA6g7C1sLR8267okdWeYq8YDnvDs3eR5RuZMXRCBb1vV9fh5W8CGQL6aWy6kzMXaysZtQSC4nCDeWifR",
  "key27": "3TQPT2sbjJQ8X21Ej15pR8uCX2SEafaJ6EFCCes1cwxAFiTxXZbpr1vhLMpczVGWStNT15P96kxkfFzHAKFCYr8p",
  "key28": "4tS63KkH2uM8AipjY2pKCNjgM85nWyESy5dbRLB9S6Qg7M8brLNQZXV2FCa2NPYUHxBtAnAVHaKvA1fb9UhQiyGL",
  "key29": "35McXoFBJm672UhWKeZCQNghLRcqkwAjY8nZC2zBeaS4q2tskr9KWwS1kJB9vFphjmstEZvcP74tFaVNAq7R8VAT",
  "key30": "2DVqsRC7eE1XgxGAft9gkqSeAd8SAyQFp4J5ucbYGF4bE2NNuSKC7uyNDK4XyqaM58gLAtRUUsnze24rq6VyQpwt",
  "key31": "4UZT4ME5Wd6ouZiGnH2xJZ79NGgQy1qxzD4DircizneiW4ivR8doyCehAsqsk2GyGEYQwrwzQX3zPEe3nNaCvF3i",
  "key32": "5dcngBbssQWRLAREs6BqXhf33sB3whpGuuCrUw8U78KW73FVNQukR4RXRf9F5JzBtZzU1MRaHKALohm5d22HEmBD",
  "key33": "5Tr8DyZBUHw9TGf7fQeE1o4EA2CjMVGcpVmZc6LMBLcWqPufggCWkAnALX2VCZoRqKxYD312Ghdg6jzMePYAVtkg",
  "key34": "2Q9mrK9BnEsiDgukZxLBngBpYnNjHMGGVMD3Xv993LWwtMDArdCpN7T37wd4tq8tqx82qtLahLfxSEoSnQmBRxfF",
  "key35": "52mx41x9gjjp42siCv2x5ViFCqkZR5wtymVbQDNuy72JYSssd82mf1SjDDbvTYmfZUWeDohMBqoA9ep9Vy7z5hXn",
  "key36": "5YvNQ8WhyRksm743WpNkXihut3MpK36h5qeQxsQSxFdhhrrAcssijetSyQRwa7cqi8smXNVhqWFBL95LKCK7c6ZT",
  "key37": "3Hvs6U6928USuvyz2cM2AV9SKDA7f5AXjnuqEGvrxVKCbkTjPuCnMC2ztnwRn9k9uV8TuYtqvQgy86RQsQ8HrH61",
  "key38": "2CuGLA3iLXrhm9HCeLrCWxXoxv8YdrbhEHgtL8faRKhvUhgDwWoENhiJnioEQGe98uTivbT4UxJP6gEXTuguBSYz",
  "key39": "2Ma7KPBdBPjuDViJzcTK4TxpKcE3Gk8QjvaRdLfH7GbCb8eHmcXs57dzsA8GanwU6AdmzkZ1dv7QVra8z9aFjxHK",
  "key40": "2XY83N6oJ5cvBPZ8D5byiU5kr2bzrQJh4UeGqQ8Sb4EkKzNxuuR3xZ2p8J1yd3eTC2iWuoY1xG5HKRgnHB1ghUrS",
  "key41": "FrJLQsJhfT9UF9aoWGbSV7w4da9drbg5cVDw9a9Pn9Hdg7WPWCHZEThMsLzjePofApUoG7VstNwWHt3eRrqEzkU",
  "key42": "2Rt6qoJGfduYCKkNd6hFzhPRJk93W7BsB4SoJ9krTkpnJqX7Ab4rKcXbiAWuUR2mgnvRCacJb3MRJSDfUmVryw91"
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

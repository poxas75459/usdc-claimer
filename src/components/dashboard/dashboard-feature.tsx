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
    "453UntB4g6xkhUE3gpGD9gAkNRq1Aj4Vd9vY5nfu3MRo9bfVqr1CeKg1JeqJ3zMytcgVsKnFzkRYYna1dhU4qiPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oP1fDiAnWpbH7JsotrFz9jDAADuPeywm8L5gB8CRHBfFCK1erQp48w1H3S955pmF6RVGghPptsUXWcWfxEjoutc",
  "key1": "33djUrrfJT1oHdZegxDxgnFpAW2kkons69keQwoxrQtNAULfVC6s4PaLEqbmtMK3nT73p1RunmXz3M6HF3491252",
  "key2": "5ixV1ro3E15CtEsFjHbzS8nAt7wFegtBC5872FrhgYvUGpMtpvR5PXbb9mx3oJwJWzggwR3pvtg6nKHFik35EPKP",
  "key3": "t4owBEANpEDba6dw3tiVqRx2aAGyK4Kt9hYJ1YkmpMmawUZjz1Xjdm8icqUUK57pB6CkXzBS6v1bqHJT4uFmTY3",
  "key4": "5pXwgXT1bkrbmiZuNTGEm6oGxiLq5FyQdGXDk2wHNtQwFLtRdfKWJWZgt1uztLdVaq43HsJoyCe68N2FtpvvYzAz",
  "key5": "54DANQJ6vY4xbkWAy9dxu8b3ib6mWFcHFP6Zjt5VnxaeASuHBLJPog3dm7yh7ySnjQy1Y11VdMG1XcX7tEkWQiQj",
  "key6": "2GrbtYnM2ybLrEGUBq1uYCVzFqEbQK7T37CVMKGS3hHdrHTcJpX1uj3ShdJ9KyagaZ4fUS7pPLKkkHkFGaJ8Z7hn",
  "key7": "23pBWyVjD5JggEhtQMDuZcXn563r5rP3gAYKFxhjiamvFrumajFz3chwnqNSxRD4Fbdk1EqAERqAu8wFWy68DAWe",
  "key8": "4kBWXeRjQUiKc2u85fU7vwXVPeR6RDSRBL3nzpM3fvnfqKdjJ3tjabY2ePm5xTr4D7AdxnzMxCjs1kct7GPefpFz",
  "key9": "kkh6Nj46nY4Mw9qoCBNrFKGMBgYiAJs4u9dPrrbPqq2PP2WggjfJ9hThXhaFwosQsnkxskNGyh18vhuVetZUZiD",
  "key10": "3NW3ba3UUchurDGMRyHHSiuoJSwg45roBSrC3Nbq84nqyQeTdmx7xS8AQ4rxwEcXBd6jMywYFmPGaUDYcruNsvUK",
  "key11": "7X3yEPjmRWQN2Bbh8A9geDxyhnFuL6VA5F8vvNqZeKd9BnSjWWkyMMMHD6TV5MrmrZZz42ETBx8HCzXij7iPi4Q",
  "key12": "3hqoyZvcWqU67jFM2Z9Ke7KhT4AQjZGwnZxtAvepDNtkCf6Y9J6EjpeHpYbXJwCyFkFHm9gPRo48xBWcgxKsPxv6",
  "key13": "5rKB9UdX1bEBkuj6ugPZp4Yy1fDb2VpJKwNbDGncN8TmPsi5L6DRTA1kBMJkgqmUGSq9VmdjFZ1GU9qZmrsEeSne",
  "key14": "3BSdKASpfd5rsYJcnz8me5TtxQySvwGP8odJK79PKiR4PAhztFVzTQFEwoFbpzpiSdtYCSTLtT1ChQNbBFF9hDdN",
  "key15": "5Rjb28LBY2MLZCDn5xnoa8XPYintbQrxQRAswmHa6evyuDHshzERJnTJkXb3FeJTVZtpbAYwEuAQQu4g98yNqUzG",
  "key16": "5tgYrH6JiaRs6G5tYXbm428joYd7PYMi59cMaijt9FCYHd2VTyVHf3gNB5qmBkW9UY3f8wGAmYCQezG7GcVZTyCE",
  "key17": "oj9w6gNGFSiW5CEHioAxcsHj68TGpwi4sK5TucVjs2TwHNqdGApZyYmQDLBdbDzeaf1yZQTT5cgwWXsW3S3MJav",
  "key18": "co6wWcb5nEJyXed7BaVUYPjhJSBpeygpENvpG83WuHjgAAkx2ynXeadfrYpALQ8kiNLpeKEaqx77wC3oE65Euyu",
  "key19": "3YZwh6HGCgSS7D8jTxAgry9EruQEdvyBfnzHxUrFgc3Etdpbqmrn9ffZHoEnCsD7BbJoKPzKz5pkzY5nHyUVu7SR",
  "key20": "3ktRpogXNXwvzBzSzbogunQpWj7cbkHHVRhNz5VmeA8Y1eBJUuM1QYTJJ7YotRB82w27iyo8jZkM55yiUHP1VVsw",
  "key21": "44DeN6YohESqQXAC4dAbgoABU34qFq4jRfYyE3ahPEq2LCMdxQ2MUf6ND1xjhGU3DsngTKT3TuztEbNkdBhkgRzu",
  "key22": "FkHBVQC4inEcBdQpWxvLVLVdu2ofTXmSiHbY6U9kWRWDJXCFmXeVoHqaxM72EiKaizVHJNmhWo391KnVxhHbApn",
  "key23": "M6T7aogUUBsW1VNHdMRNBqzGiXJZecQjrzB1nrryotLHGGT8sZJw5mXHD3YEtH7X9c8CAWdEgD23xSU246ra8J5",
  "key24": "UmjsetsYLcTc9joicqcumBMap8dy4AtUvRL9hCkBoRiW7fXa71M2K2hBgkwBUc3uUd6AbtLy9Gbu7riAa7cF6CJ",
  "key25": "5yvuGZ7DwLDmb9Y43hWvLw1iF1NPiuRTk52AEA8X5aMxYQSsfoNiCadMKU5fz8dSGkxgm9n2UjrbpEZQUu6Cirtd",
  "key26": "5swrgHZ25S9ef9aH7BYZEmAjvx8t9pXaKJCk3RTatWZTTZBHwMotRAZR96KGtmpJLiSWaGq9fgjFDXHuVLLvBYjv",
  "key27": "44g6kCCceUpoe6RoKorhCLSSXgzQebYnFEkVAmrGeRcLiB7cQJHaJi9MfkvZv5bphQgiFRUyB23QMfhHX33M9BzX",
  "key28": "T25deqmG87jZZBpBZgwRyrGFzqtM3gxyJdi3deTNDUtGG1QnXw7X2CUtHmx98ejxaj4gTrtqmWoCyetP4rDGNQs",
  "key29": "4eMUgn4GFhZwTcvgLvHXNCWqfQeejSEvLR81MBdBRfrPTzfmkNaDpkGFijCxyWScuv3ye91i2fJbDTXki1TcabAu",
  "key30": "4x7dogRYzHEGxeKLr53sGiyJDMq7mjBJrAN4wKJMvR7TBx9PcBDvrKHBjan2NKJdSKYuYGKhMy24pR54fCXSgfLh",
  "key31": "3kSatNhEBKBTBiQT7d4cMKqJDsCXSKpCX9Te5NtME4e6xHp3aosbvp3mpny6MwCMovYB7jqknHMe2Sw57NScAUwz",
  "key32": "aZkbteUieP7mp6BghDNYPdBNqbqLkgmXNZ4DQcjCv8FG7o54zTwRD1rLQVRGDLnSA66Sh6KJwj7b5NDogLRRnfM",
  "key33": "5WFWPws7hUKHBCp2vZZS9ZUhUCkKX44hawXc6DDU4iEKsZsZk8y8nBnu3f1413VU2EDRJNZizUa37C9iiK1taHiH",
  "key34": "2pcAC9XdQTFj4Nuh9UTryRbJsi5tiATQZaiCdKTwxj6qW4gyYxMd1nSNq2E4jJLVFvZRFDbMiMRcMaXrb22c4uwQ",
  "key35": "2W7Ef4GZAKtXVtkfHR9i2DrcBpFGXcmQBafwgJr8oCTdAy9Ri22YjBZ6AkoZ3Cfkgbc4mFFz2jjKzd7rfiixGrkY",
  "key36": "5c8mGxua4qXU1Ye4qftvRdvnQEQfpG2HdWVmTuPQscHQyC17mMfKNtcpx4wRYS4FHAAn5zU5XsoBr21dVKqEt3iF"
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

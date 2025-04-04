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
    "vBJZAu5VF3snSoSQzCMgvEx3KS8X1oNaEaRnjzuVQfEq4C35vLguQuxCDcaAobMzV19a6QEuztZskHZYUyaJ9Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqkmrE9MNYueKNhMHmpxyN5MhacRgj8ziUDSAz1mFW2GAcf2N9ux15SgXa92WVPXKLUYHotPfgFUhssFsHEREfN",
  "key1": "4dyb7gN2MnaZzqnPKVDxz8yvy98pysZub6wHDm2UgsZt1WGk1QzMAbPJuqSq3NYw6Zu6kezuC3jAorLkuAKCumeg",
  "key2": "5StQgdyZ9Cc6vqY294drjDRGE5b8ANbEN6SoZyxxRF1W13eMwvv5YjRWab5gmq22wdmKVvo6PEhrR1Q48mtkpvrL",
  "key3": "4LLCv8YPcAbEUTCTCdnMrdJRfpMUTrVy87Vsxy1KbqyKdUkwwh8x4wdgQB6VpJoydHvSzb2sp7veymmsfpBAYqDE",
  "key4": "5nEXj4FCZKPBSvm3J5ycGMAYPgvfkcsGERPBHGMrBSakYbpzbfSpUhpJAye8wvqEMDeitW5ppJvV6n1s8iTZx6nn",
  "key5": "4yi9nYEDj7MDEuN7w8SsSAyKT9kKkcr3fBSXsD4GZCWAt4g1ZVyAPe5uAu6CKiRvjhZxpg3iVQhe2XJQg3XdbfqA",
  "key6": "42kcTBZsm3nLkk5Npneafaf6CBC6jAkqsPHCfKfKuwbz1ZNrfgPDsgqCjzZhXTZ6ktsbiqbBhkWhD1Fv5FNGdK73",
  "key7": "3U3qEJKH86d3Ntcn2thnB5sDZQTwPWkdwFFhaBmyM6NZpM3PEXJuP6McwM5E8rW3Zfz6RvStM6sF4spHzMaPyD9j",
  "key8": "p5KKkvK5BxjnX5GKLNNCAJUZptAtrhnBVt7BudB85gHRJ8jQFGJgTo6ugJC8yf6PsWKkXKDgbvssng8bkgmJGMK",
  "key9": "3k3XFEPzU8MzvxYiec9esaFPzRW1gU9PQNeUmrvCuaneneH81KYLk2AygpV1DLkpGpV1ae8pXuz9wCSRvAbyQ1sJ",
  "key10": "8rG3DqNHh2z9fz5WQGcefHhTneqVHbfBfcCt1L21SE7tjdmfFxEkEr8hc4ndP8iWA4HEeimq1pDFyuKMhpZhzYP",
  "key11": "5xhqDXZSBLbkLfVp6W1LuBwa7RPREqF92q72Zq1oMPvzLjAbZpvccUPmdFXQkCe3kx7Nf7uVYbzUoQPUurxqUFBr",
  "key12": "64GwtiZWuYpmNZCn7brdxA8edDLijHj9DpwR9sSTyjv22mkvJ3cQ3Evkzh6hwrAAx9JegxHTKdyufqbArpqdEg9E",
  "key13": "TaTFwNQHL9P7bZex6kq3R2axP3PKTQnP6tRHMa3nRxvLAH4zwkFkGxh5pgcEjGZSA11FcB5D6y7sxgwRv5SY9Hk",
  "key14": "53JxGsKBN5VF3X7mCLtAsV1zAN3jYYJAywwjz4iouWTouMU2PtaGzk4hFijjtMg9sqqLtWqsMudgn1yS1CZvxCn9",
  "key15": "uC1PH5Zbx3BhfYqchKfZbTdeBxTo3G4HvNAEjQnXd1dsfBYbkoZYtLFpHDJibEtpNUsjEBMP4CwffjouCBaffkK",
  "key16": "jvHZpfXvrzNSx4X6qnuuKo1bEQXG1HGGj8EfUkJGM3KzaWGbWb4VL2C4kKVPpFbxrivKFjY2G32XXKUP3tNLorf",
  "key17": "5QDt7bgP1G7f8vSp2rw72rRfZrwyVwTAvvGWMm6sBMoKnS9UBCC4uQcVAvuDDGZNc4T1ijXuct2HJ7ZP16xce48c",
  "key18": "3WMx9ZSBaWNTzBYepYWaQcqgY33dXrTRGcnaGr8AtTtCbksEyaseyTPRwMhDha3iZXVYHSLCPnSYf5AwLmBqWwwU",
  "key19": "2yxnej1nf4BbFfKbzPAbya2DXcUPJKaj67zwMhQxvcUQg5NjwSWEEE6qTVrjr12yvkfHqYUgsnvh8AhqAbwc9Ye8",
  "key20": "2U3HCANVdUy5UztxMsGDLW4gu8GxzDVSoe744nke4k9RgeGTkbAkMkHB1yWAZkboNpMt6iRFS5NjTruMVDySzsdx",
  "key21": "2mimCzHKrqsFuKx6JKrC1KLCQffwcWdCRhwV94Qg8KZM7xr1LUpbT8bjz1KH1CsMuhzbzWGMrkFY2S6MUocKtzdm",
  "key22": "5JiRz1jVFTZBmZ4ETA6uie24qrnCimer2Atx4PQm78TA4K6VTsuSLY4kJG7yAZAPUjX3zh7zvdXkYXiNeXuiiqRR",
  "key23": "3LHdpwAEQzvoZLgGFbkeVL7F1RszND8xEkdeziDfPATYF7CDUMUoW3b3asBKUUvYqnbKQ85LVJLcrHFb46YLCjsR",
  "key24": "21c9q63fMYJMVZKhoacrReZm6DtpQ1T2AxZD31oiGmvFQeVjLLM6dpB2KB1ifSHmTuZCiHkaXo9Bc7L1ioMxWV4n",
  "key25": "37MjSLuwL2o2T6XauowGwWj2Cjmb1jBhMsmajwshLbzxykG8wzsfbvnHQgUUAjdcNhuWv5CrDBXK8rnwCayXiqVr",
  "key26": "5pHHkeSfqmDQ3MPYKUHcPanXp6ofoRfK26aeaEjQaJapfzaKAMsQ6U2iAWdTATeyshMFRvcR8189vtUTWHjmKPJn",
  "key27": "HMRWECjPjkznLA2SJhiCMa629QvJgPxpox9wmvvpjFLrQpGuFoVNr293Ap58C6YoM5LHSWcfASAojnrv1HAUzPa",
  "key28": "kDzQkDoD51iANyyUZn8dRFGtw9HUDa2Kmu2C1N1pWXRS72pmJWoZyFYQGChoa9cBT6L7SbRSwN2C3Co5mdBHzzw",
  "key29": "5mTRTiYAJL2tusLfsC7hh8Dxo4fMGDsXmyDGbgPAEDpfzcWZ2G2hX3eJCAyXmuMoDrfsx8wLFBfmGw4rjcMBU4Rq",
  "key30": "v7Zs8K4yxCrKsvNXYeAwFRdaU9mRc3N5scqrtrocPgFEWRTbSWjvHko5rGx8RwaAZRxfKBtt4Exm89mTeNKeDhF",
  "key31": "4Aix2aFACf2MPPeLYwtZgrReS1W6JMukARunRaZi1jbecRZRcbuzYZGVfp8hvJwyXpKP2GoYp9tgFwjrYR6LDRMr",
  "key32": "5mkz3FkrVWP9muMaNrz6tSNQ7L372x2RRVThRxLBpFkFhbfaLsrceczHhypRWMzowkRpsyA9TZriWkrrLZmF1ZCm",
  "key33": "2zkSRDAF81G291JrYd6K566G2rJ5QfYqGqJki9ya7fphKJgWkwcDnnR2ASofBnVrqkWE7vf2R59qXud3t9Wh1X5q",
  "key34": "5rqWYdkwuXLpvtpGzD8rxHD7xjR6mp4n6jy1Mw4Ktd1Ez2LQFmmL5g2ua1RMP8DcUsSXDAF2ZU32Kds3tzwN8GAL",
  "key35": "4pKxUMup8nAgyjKJgtHneSv2ycvRhvRXJ8sr1AeuRHkReXGtjrNqULtRxpSJG1CDjTSzk78r9dUvqnNfZjQKdunL",
  "key36": "MHPeKv4coMxs4FXLbduKg3jb5oXnmtBdjY2zXnPUXed9Fh6iRXq3orRNTTWbjHxJAtSzzW9P4z6xcrYbECSNcwn",
  "key37": "3f7BeKzFDJxuEVb8U3mVCheRbPkGsnJCc6nMNJxBoXB386TgetUDdW3Q3xbFsMUJBKdHVnm3kRs8J2KdmYNRkTQA",
  "key38": "4PnxcJWooRxpeqgVeU5Dr5Gqb7FP9Bv3YFWMpAZaUYDb9FYqpNQRQ4tTUwC1Lh1gcWC1VfdnvKnXem1n9v5RVcLo",
  "key39": "2SnqarLEg1FouxsUXCDKAjJGNZBicgaYXr9EmcgqGKs9XibBM7aQXTqyuBLCzz1dPqjZaNs9n9436Lrfzn7bMn8m"
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

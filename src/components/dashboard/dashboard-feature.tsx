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
    "229ha8G8Eu3iGtZCQJr95UULvToqNy3w6EH1oFWDx3FPFQceiAwGT72sAgsiVPNJM5NWzcVqgXyp41Cvpq978VUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZaLjp3KsbZa9oWduBXYXPmA3bZNqKTgKb6k1cMxduWxyQfsosMtrEkUNrGZBrWxBiUptshCTupSoBRD2v4Gdit",
  "key1": "fwL4BWXqjaT6c5Tij8Z4UcuBf867SpdXXCapCKDpn5ibKt4usZ1Dy9wiq9F5iH3XKQLPvQcXBGMGXq1kPqKcVvn",
  "key2": "67DswqQSieG4NpySotDKs9hv5e7e1jgszpvjE3FEBaRx1qniRth35jGXnXj8YwLh7g3gLBB4W5aS3nLXqGkGtW7B",
  "key3": "2tY7kRNPB6sVQZdVnhZBYPSJpwwqeCKtt59x4nRpG1pRuhTqGwabph5WrXfL3JCJm3niGUKdRpKy4WcqKetPD21y",
  "key4": "24t5yH7qKk6vWfv5riMq3iFJgifdRMip47DKvtJLQfP3e6M2sS5hSg2ZuUmoS4HHnNd8NZJJqM6KKTDhi1EHaVSG",
  "key5": "zFMD3sTJciE8G6HSV3jTFV5zTXUnZ5XtkoKrWEd4GVaVmPDaDcvJAe69BZJEGgWJ5p4bAnkockBwChof8BZgVcA",
  "key6": "4XKNwKMtPPy37RH1GtTXYfrMP13GkTvg43n8z3JFtZXXa4UkZhNeo9kCpKZ5wCQ9Hon6KEc3V2rWSunXgsszJ3sw",
  "key7": "61dCVLQhmiUBkFDo93U2hWPwm65FLzriLmo8XKVhLBXZWANFJPfCxqt5wVjmUCHQZAtEQtxzNGHYiCn7NRHTXFki",
  "key8": "33TM2mpVomBWtLjVB6EyTLYUccZjDYebzf3894S8EjU2sMQjhfYgEG2Yc3UetUBW6A8owcUXCeH8tXvJRGV67mZS",
  "key9": "2u4b5GfedKcUzk79yWX4zenf4bZjezogyc8gYWcF5gC38nevFGadUSCnGjKHrP8bs1CY65euoLYqwEX1KC49b3vN",
  "key10": "4r1TAuaWmrYhtD9WEjvGk6iDav4roh47E35q69FxMzztmJ7AooxrtZsaqNPpkjqGiHSwoecgvRWhxmbjoP9pbtXt",
  "key11": "5TkTFrF7FgCeKDMMASEnuEsf1KFxy3TiCC3dmhSe7EuwauK34qDDK2tDTpaLAmmVAG6jw67sSBVYaJzxb72cisEk",
  "key12": "zhweqeKtJwTg7V1bvhNNJBsAvepVUCR7cMmrYHRbXFRp2T79p8McmnKXomFNdKzaMKk7nXx8VJKtcfKZ3WUZYbx",
  "key13": "3gPazZabZ7uXcjDSMgEw5DJqsfigiH23CxNeDR1Fa88ThYuDu6tHGTV1BYrmvnfTNpKScxRCoaX5U9WRVdpLCZz1",
  "key14": "2Yy4igajKTxUo3XydDJmctRdsgqv4dkH1WThqr8TeZWhWAB42zKDq5HCftaNW34PxNdyi8MaP3AyUJvQQzNHa3B4",
  "key15": "29fZJBCqx7nA8GkxtB639SmNfEdrXAD684e1LyE1iryepSjjo48gfxyYURsmbzbNb94skN8S9rqAGK94esapPvn2",
  "key16": "5ogCiPxqMUHZVmvLV1wbkRshqB65XbfjvJuWDpbYkusdisJxf6cGqrLpu6W68KtA6hHH58asUh3NiKMCVDw7k1nY",
  "key17": "374x6nraCJb1W2EE9LzkbwEM3zhGo3XBCHxnR32CtZ2aD4DfGGnQXeLHWRzzZRxwp7FvayZ79VaFt3ZmuYx7Y8JR",
  "key18": "4CWXdDxXXybeLdkqVRa3299DkJxuFP9SrqjiaSNiMBLRR2wUj8G1KNsJbQiNZ3yZSxyYgrAxicTAuyTmYwHbikoS",
  "key19": "2kvGQcHaGRZEWiC9zZYmhZCiPo8rsdbEcvz4LoEcdwQ4AMVHZHoBJHzYERtGhURQYaG4o1EVMWMMzaxNS2AvGCZ9",
  "key20": "5DijWryDo4SruA8w5iXXQKTKqPJm25LNsgWUiEV977J4U8ph5QTs7pDmwJkB4DHTbJjM3f8KCVnP2ydge2hparzE",
  "key21": "3NRj3v7r6jp3kVS2GD2q9UH1SWjuqpAiPiwmH3sm2N4UtniTgt7GC9BaRfnZ79ECbPEXMsdMtwrNJbf75eiHm5px",
  "key22": "2T87avTq2ddepuWXymLaWVbuX8YjvieDXHhPBnrekoWAPEb4rDF4nkPBsDLw6RpEvqnAq56eCMDDZbjh7MdE4vz3",
  "key23": "YknAftmFJERqDNy8PtCwupjNCqu6UuLB6nENWBXCMLvgZZUQZ79hCoNJQDc1h3VLuzG2Jjqw8DNDjf3X2vUnjSo",
  "key24": "2v9insUNUJZf6ZZRrF2ePWFnnXUJnWmPQ7zeB5NFbrHcbBNp1ib3woHC1z58zR5fa1YuKB4BToDJhXUFwwqSQsEA",
  "key25": "3HeDamncQYvMQLfW2Dpfogx9w8VxHLqr6tYKRuCBeSM5eUkGNBntdfeysfJT91z5uviuCWDXynkGDjU9HSRfN35y",
  "key26": "3RgrUeFJ417HCAwhH2EQprRUWonc86gQp2apPC1uw5SGihuiPD9wkjPMdidrR2uXM94KSEX8CXBjkJDHvm6KLem7",
  "key27": "2jgytQxvFidUTT4TwWnh7iJ8AWdW4TXVMru6pPATgdVqRuNzsVcYYoyeoy9a8tLkd8mmk9ntzuhtPujreRVzCuUf",
  "key28": "2za5jwMixgGvxwuFfxaCGdUgJoW8NkDVb4FGMk3TBzxEHzQXLHEuXRwJyzLruMziPKjdd13sk688yV47Huprbwf7",
  "key29": "v4b8h99vvTiyGjEiLAwPqvu1mAjDFLxqSUX4TyNbjGF8e2N7KRunK48KBZLBSGHggdDyvB2VfMfbgBSyNJwQ7ZG",
  "key30": "5txZe84KLvRpESnc2uo4zheK18uK7YGJ1qusYFWhX2ZQJhGVhdZSRhcKHoyF86coR7yoSLbs7yMD2yT35RHUUMMB",
  "key31": "KgndKGaNEis7W7ZjxCR21hZeSVDwxwedVnrkhr2VRARzSk6TqEiNGVyjycwW2q1CD4x3SbDTxCCw9yX4X8VnX1s",
  "key32": "2rehaZtBAeCvLG4oCLAiPwBxGFqtaykm7wxJv7s9X9AD7jKNP14ZEge3BuebG5gkVhMjxTmLhCESFcxwNHd14Koo",
  "key33": "2YbRGdr7TgVSHYfkDnByN3oCeZssJLaorNpAhyJ5YfsZXc1B6mqTsQP7fHxJggGz1sRrd3R8rh7GuzcKdpZdNtVX",
  "key34": "3Fua1WmYeEnAFs6dr6Wz8SmTfpvRFCuvJtzgQMbZED9thGnDksdTKi5dcZ4JStVNRrFeWxBKbgypNigUTop4yXAm",
  "key35": "2GeimtSbrhN6phbk96HQ5zvBaFBAaitjsv68cVPAjiQJU1GEW1kFYRi5gRqQe8W6ChT1xECshfKtg2crKm4RDPtX",
  "key36": "5bCKvBaqiEErnpFm8FLCvppQP9gZ7XTTPzuCtF3n9TSGKLq846WHaVWdAqUrGZR7kVHLkmUkzq4tbyaXqGcErKaU",
  "key37": "2JS4DQr5mGj779efkbBiJEE5evbYqP1NpBNykYWSyfgyYJiMN9oBDPLYbhCCD6EQYfDfiguP1dtvYnmhEQtTFMgD",
  "key38": "3qAoLTF1DYUDuWamBw7awXHs8U142dmFLmhxwYoeT8ep831u7AGwvjm4cYRyg4KTgVVw6mJfAFv1vMkQ4rCQt8nE",
  "key39": "4oRSxx7oJVHgWFHkzhaJticwWcgseTbAR9Uvdy4EJPAHzTV1wWZiDeF3omM94nUMdPyywymTbrB1BA8N5uAxt5j4",
  "key40": "4adQNyFfH588fXjFrJonoYMNBtz8SNNoY9iTLBsbvtfQWq98CURiRTiR4RGF9vfSvBLzAHM4a7BMZ5t5E97jbkpv",
  "key41": "3gXSdMPniVqmBTgQj2LMHFm4qr3i6hnMGHMiAy7nEVQQbYZecYffcFVxR7gNL6JA88tnQKTBaVzsmAcM79Ag8JKn",
  "key42": "3yd5Crab6Q3gnKCE6VE2zNFjs9f4XaDv8UseYVG4famDpjMzVJKXknEnFgYUdiuYM5jykbWmwRq7M2MjUqi6wt5U",
  "key43": "5XQE5moKK2gejC24hGzZJTgKA65WTppzA3uPNjBPBsdb9K2DxXpFm8F3p9XRkoR5TXk2a795SKYez2uGs7pSmpgP",
  "key44": "4tnDothpo5pPRJ4Efy6jZfyECc3vb3QtC7yoamB5zgWqr3vC8Py7LbuwMDBUgNu7febMXnshmmL1gyhU71m1thxM",
  "key45": "4sgJpboPANjMPrbpTWdBUetUDjaaPNS64dWUs8j9C1ezNNJu8AFwEWZrXoN5rBoESXFJHfjNV8GxRHcMf3JYC8eE",
  "key46": "fCPJRGeSm13m7oJbsXXKm1KtsB4ktXseqn6vGpRJxGmby4ZSF1srw9BcNe57q2xrpdJZju5E1TXX2Av2tLHq5bX"
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

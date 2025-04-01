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
    "3tUWVdyBfTievkyrFpcegD6tREDCvksfGgJyJ3b44HJPoC21o4BTLNAEvxPNMMemMg2yUjjBjaH3SeNNwQj8Prjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFFXe46vgEgy4DvUUCz6z9zQ2VsRBtQtsK7TpwNvW2qZ1cCbxTaXyX4CszXXYBJynM2QLD9uRdTQxLYyrunABFH",
  "key1": "63uUHfKADvJPvAqiyVrozjpH1eiHygrryNoGZ1yEq32xceASy8MFLQ8kc7UP5AKPdmxA3bAQ3YsujD8Nzidqrurw",
  "key2": "HN8xwXHERzxYgnFQEe7wXkzr7cY5FM4iBnDE6y1dE6z17SG2voaxZZitBVGa7e8PHupbLW2PHzXW4h4NzpqHzM5",
  "key3": "4c5MyiN9MY3S7rVsSPfEeq3PpgmmCWA1KzZBwDdbT8iJJyWhtvbyp41Z437ReZkS4sTo6CCMFjDLAjMUvbdiw3CZ",
  "key4": "4s189FfHUZLExwQMfDDq3Ns8KNgwsEmJidnq2LgMovHYfvbuXaew3BXMtxSFpooAghqNQjm4GShGyPiDbx1kaj99",
  "key5": "61RQn1dcwzRfADHP7ZJhL8YEy7zvg5TSFL5YgQcwvH7Ec4vSwZegryzKtPWBpdC2bLHvK8ShbJQATBJWf7sMAsKL",
  "key6": "5DhfqTJqwEUVL5tnVvn3PXnCdX47AWnm8BXwSSHWJ5Ny6s64GCC5f64jsmokQD78uigzfhQPjtfhabazPwRU8fHG",
  "key7": "JZgNMKrLUhFa9s7wwTHU1r5shgxSBfYMRYvRBw3bNH9g9qfPvddPrxx2Gr8SphjUjxMMjx7Kg4WPHfoQ2HanV7w",
  "key8": "4Y6K9Wh82vY4pNz4heFSZy1t3uuPkFnK8jHTgipMTyamidRBW8UhE6Kea3Sdr4T6a71hPczvZtmqY7sFo2By6RbB",
  "key9": "5bpsLDQC6LCnxL81u5MRFvW52EWWGEJh46JLjznuKhbVWusN3BFwK1qVgqj8Jf2nSzC2C41JjHTr4JPvDRk8dEFR",
  "key10": "51XKdMJbTnpTv7WdxdupY711UMy6gXX64s3gvtPHQ2Pu6hasAsNMZ4SXdm4UepdfRZcLwNAw3X17futzWJHXXHa9",
  "key11": "4uAwfCMrp3u1yqQhyH61e3g2j7miSZEWpx2gNcYKG1W2Lc2VYiv7Wn7NDvHH6KMVB5jbvzdDy3tA1mK1vyoapMgE",
  "key12": "5VdUBhcT7rA9E5seny71jdXjYHwyUwXzXfWQewNAK3fVX85nnSiLoJ2YYTMXYXdTTd6gRWA5vn7YYsy1reSriUA2",
  "key13": "2Bj5L8YREk1wK2vHC3e1HB6sK78oknVBtnE5HQFAmeoCWDVayjdXW8iCycgy9hyyM7QtXQ5FfMufecnqAnxwdTS",
  "key14": "5KvyNNtLnssaJgtEPjkK3ZqW8q61jnwtexbAUP2CVY1w4Mto5w3p4NF33bu6sDrXftBRM1cYQYcg9NZAAH1KfzUP",
  "key15": "2mFGCaBki7HsdGRAiHdiQmJQvjZ5F9pG9D1yQkLhzqsAQM1i9b6DS12inJH65jJGuHJdb5QskHXc9D4h5uoQioqz",
  "key16": "5xxSow41cNFe6CNiNVKuTHAtHiZBDkhFGBzpN2XKRUWfmUhiLrZaCqKFD9JMsENp3iAGc3tSBbmwRJUEa5wayeBb",
  "key17": "62rjAEdrLf54aFmXSnNJeYdDorLhNdctwuD4exRQ4wwHXjPPNAUAGo46V53nkJBY5A4sYSjBneAgrvPaNBppjeei",
  "key18": "5jY2hAJJ92BvzbgJuoFyAiMBx2mj5QWcnuRRXacrZipxDfCAQCR9p26S8PCx9xrGmuSvy9vq3iMsqfYP6o3wHEUd",
  "key19": "44mDF5kvP9faDPKh1o6Q5FLgJaZW2x6SoDi7s7mxKsXF2CzxuR9MCy7EAnHWm6kcrtFigRzSfx5NWnYfQw9jMYR8",
  "key20": "5FHF1D5qY6YUsQ8SprYsySwG942vFn25rtjMUZSH1Upuuwba6PNZ7ueuuLBdSURpteZirLtKM3rtNgLVpmDadWkM",
  "key21": "djUvscBhp3YEKCFJrjUDDxFwKt3opH1epeZR8c4cYAGakZaLV9kf96rG1ZDKG9YuLeKqssj6kjmfcfKKCjSua9n",
  "key22": "2n1LmVRDs3YtWvt9VHRi999N8BXENDYG2362md1BpGf1TXh4mEKBu6LHnmQVfaBRK2KQJxq6tsUB1F1SJvfC39gn",
  "key23": "5rFftU3zTjVFKYVjsLN3u36ZJqzXikqTuHq4j4GAKcm6DTQjwub5NtE7vbpccLKPYJWnxr8TnnzGUhtMNeAtggsw",
  "key24": "2WMemZEV5bzCmEjipSynhdKdhKa76GaXeV6Ndk9usC1UBALYFy8CdifNk1nr6mziFX6KQiQSEXTJtHBLdiMCY1Xj",
  "key25": "5wjX4pMNbLzR4WbWmYBmZMtWuMwvTtBoTr1oTLHgWkvcanSCM23Wr2ipbCtaQD9i53Yrb3LFsBJYZW3oFLcfBvYe",
  "key26": "3JPvDvDEeoA8Ubxehe9hetVTRyNb9pT7iovg45La5o9pwgfYmDdVtJ4PvdPxbZwPEVaU2jzmpuh2NH4ar9DWw18W",
  "key27": "4L9DDXzjjeHu4tqLaaph7ao7FMoHLjVUFzoAwUmBRWLNvPDZL3tQgMJZvGiojtSqnZyYDUg95aAC262HiNwjZ4bH",
  "key28": "4kw44cYB6ZnsTCrMHQkJmt5uu3zVsgjcGq7gnXMGvXn31NsWDvcL2RqNf5KmsSPasdpsCL6r4HXcA6qDn5Z7rVSk",
  "key29": "2zmoJXBsf2XZidrQRAumyr5MxX47GRjZaXvHTzCxbZeM5Ja5CsmNDy9sm6aiYZFDnRoT1Ap2AUnDVx3QqwXB9CLY",
  "key30": "5FSPMFZSFzP9wWcrxdXUeA9e7v9ej5XEsCfQFE4mFrRJ6bsmpr9ngvQabTN2GWB7YQQka65WmPRVdo3o5tKxhWp9",
  "key31": "3vZo1GEnKYyt8cVxs9VMVzi2XQZK7WRCX117KKxbC7Foz1rkmuPgqrQNeuvCtKmGwXLXDSWdnZvcSFEBZBqgtK6f"
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

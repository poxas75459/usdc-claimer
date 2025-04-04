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
    "2YpPiPLg91Zt2ZjA3AByPJdsTB75jwcngACTnass61cRdidDxMneLdYJvbzvyBAJYVCY8Gen9geRZ1Kwb5McFN98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461WgN7Z1c8CzxjrZwfrG5qGW9gVK276SYLXXraYa2m13aCbpCVUugGe3YBRjkqStFxBm6U4S5N4rYnQsAvfv7Up",
  "key1": "5PHWWPa1Q75vLpdTPrif1UGdVH5YFSxfG1FEZ925URuVwZH3XAU2BfnLwcSTZXDCeB6JgwFAFYewMcWiMSGwsFSW",
  "key2": "5e98Zy1h6S4fSzh75DRCSSHX9tGsuEvBZSd3Z9kfAPbthvxJEWUVD9iAquFhR6S2iHs74gNDQZJZdcE9UJ2YLHxG",
  "key3": "3AbeLz1uPsNV1KQ1DuJB7h9kcZ4kqkBrFv2W9avK6fqeRBQeVKxtHFdZnRDZPCEzRwyDp2uehzYDSWqnmKog7yom",
  "key4": "osjBt1tPCoyYHWg2nm6kFcDjFcFZUbGi8wAikMAkA7Vw2khd1U3cJzuUDfhAThRWMXK244o9zXxorTCM9H1GHbd",
  "key5": "2kN5Yo7DrFWRAPDcWpXVnMyVjHLCd9cYNuVe5vssGpY7rNHaWGsvCtiEg4WVEFAbKRPJbRCV77wjYZHSFvNvD3NC",
  "key6": "3VaJEVwaWbrLRf17UfY1DAmUpSAAek9TiAvs58cKQ43EiRL6tkFcHrNJ89iW1xzDAAKbpV3RYHTZx2d3WBMUETgz",
  "key7": "4ei5tdyKcHu62n4un3z2wBVogFNVA6hkomUkTSA1auRhnWV8YGKkZQpCWHNq2nZ6sxQBgsD5h6fHpPYPPd2pkRkE",
  "key8": "5GqhdhzZrNSfTYQWw3BbFF56Y4Azhh2gsDTdc4bexZM5iZ7mM6tzKNefRrs8p5QZKj2yE4fdBuyU8ZEfjhXHuwnc",
  "key9": "22fvnhbR8sVZNAgVrSS7FDhbcGM6FqT467Yj7p4CzL8rabLWg4feGG3tMvUrTW7gRTkQ5gcGw2Vzap4fNRBU295X",
  "key10": "6VYvFSZdRV8Lma4y3aUTFsBuHg6Rtjw8pq49qMW4VJKWrF1iasQHaafmMqd3hQXxwSok2wdh8EYyvQrLVYUmj2w",
  "key11": "VFzKbgNq7Y4Au4k93Sr1QG3rGnHXEoVpXNn3i4RpwLNxa2J4dVoWETNiBq3Deau4LWitLNmwHzZpLFvbpfk2wXF",
  "key12": "5MDf9DMdWuDuop8SsAdJq1drnJYe3t97wcMTwghgf1Djrk9FhgFYNxSWGVpPiuFCb89m8pFVPG445qWicB7r6WPj",
  "key13": "5n78RVK9Fwg7269LndRo6bSuF19vtmww4tcc1AyqHoJEnRSYQH3PNBsZkt1FxAQ8U8ZaBeNWS2b9xX3Hkv7qNBV9",
  "key14": "iNAm2VnDLLywgp4Yc3rnKfwNSSnB6pbwdiAkCKPVujG1P8nmqBrod34tBYbXSSUoYXHqUneSG28TACwH1EGutah",
  "key15": "52SfiFJhPB9U35r9RvxDoiLFWRqG1cArGjU5GazFQ5mZZWTmUK5aCiCStVJffZ7EnSXdgPL214VbastNDnjQF12W",
  "key16": "2r57WwvNEDmsotF4L8fPppxUtdqGo7ytpD91pw8zr3Xut5EsGxfYt4E4F4iF2oitdnB5ytQqX1x3s5AtTE3RpWKT",
  "key17": "25CEEsSpT8ESUBsR1s7tCHKLC5uV3pm4vsVhjAUBDe36X5qiNYCtVzcA1FCFV4oWovuPAg1waWzEvHygKbiEdMPV",
  "key18": "4sFB6p1yxS1v2eBkDRmwPpqArSS2kkyq5XErX3GMdUXJeXtyzZnees5jezcBrS3b8DchXPHT77UNWmyRsNj2V7PB",
  "key19": "4kwyG8Prbjnq1MDfjBcLetV7W1STEfbPu754pJzerUQPhc9rEc2RMWDcR7p8wBnxMybS9B5CYv7J4fjyx7LFQjEw",
  "key20": "4u4dHngm5LuF86BXhLXSTWuDpbfjwBuevzWp6jJmBt2F1DCShgmJiikpeaeV3aL6kK6LN9YAVy7nMhKnbUsxa1kX",
  "key21": "5TPK6TmbbKGY8zxHY3brPGczrE4oT2X63NxMJZ9wBvarRpf3ebwBBqgxtpDTf2VZAgZzj92ojLspBZDb9JjpCVZ5",
  "key22": "2gJa7nVZ5184ZXMLDkYKzous9KbUMiMEifyVwQ9bVNHQU5v4AngPDDVDfbwTiqKj4unJ3SBWa3RQ1vDLjfyt742A",
  "key23": "3ezhGbghB6qFvvv56yEcwtAVHHn3N5yQbrocidfmAYHomJbdHAX45aQWKP9WMmDtG4UHJ3qgbF58GE9M85iDw4xj",
  "key24": "4txVGMbQqbxTohTXvyU7eiH6JJdyD83Tz3uLMiCxwW3CKgtnaddkK7a8sJg6bQpHgdhGpEsmBgkLPdzjrt3LyNKf",
  "key25": "66Y8iz2o1kh9PiPau3CZtxA9iSb7LCzc7F86uEN1dKQg7TsKwwabHuKwPCPGVnqPEHnc5RLbNKGtV8NyeeTw1wpF",
  "key26": "4GyEME66sKmB4K19g52pmyhL8YJvaGDXEx8mFtxj4WscTsojHBsZH43jwbt9Htf9JEKzUs6n5qg8ZM7gLQ2VHiev",
  "key27": "5wpBeDimomt23ySn2mjQ6UffAyxFHDAQ8veg77hfSGjn6qGUAvDmSSfQZ8eVuVxMLrEYMkvrRuPiUjTkYQWb9q5d",
  "key28": "h1biJuRi4JoguJcMmoBS7ZeiKVs6gAEdLSYgeq4HgjbbjMVzGFzZqRxwCXCi85CAQfDSSitgqw99EdKwyqC6xHV",
  "key29": "5mXLPMgRCL9NHQm1b78R7oGsQvzLpajaKX2R6MyNEivswzivEBevtviPJmsL68A4yrozFMwtjbZGNxboXJJUFNiC",
  "key30": "tGyfBvGyjraNFjhXahc5z5834xgK4MQ1bFnb93VKDDMtHqijzrFDqm7F78mch2YS2rqe34GXm9qK7Nm3YfnuJxi",
  "key31": "27bon911sk8mfqjXj95YjJrSViRgDeZRWqcdeaia4U4JxsBJ1chXFF9GsD46ZjTqpWDHyYhvXqssEKb3eAocmDgT",
  "key32": "3fn9NvXfatzSucJ6MwTomgFTS9J6VrnjFzwzCUDoaYp48y4e1eqVxv9m99iHA21kWGbvLbaGBusybnwhMFv4Axnk",
  "key33": "4FLFKHqxSThhPsH4Z4QhkwqEqCnwuSQjsW61xiuybbVpyoHVw6WkDJXttcBzic2pQQLjYhE47wGmAc3Vf33Ezq1R",
  "key34": "2aQXWrgJLPt1bDy2yfpLmND63RrrmkFR8vUMMyh4DjtQCHDFpL4NPyFzUsuASh1fekonRQGSWT4JPPnvJMfBKPNd",
  "key35": "29k4PtAUSoST97Crp3iSePByxBLGBZkvyKmexFRWfDakdarzeNrAyr7CnBsBCvNhHcQ1cb2nPwDurFbCydD7sQja",
  "key36": "2SwqykL6q1ymrBPh2XEytzpyKGmdpma73e8LxeNF1xcUc2f3dhDeGfV6W6D4NFSL6HRfyoUmSMGkhBH6L2Jx8Cpj",
  "key37": "5ETiahDKQcNkWJke4bqhGe4oZ42JkQaY3tmnrUpuqu1jJ9YbNPZo2AqC25dmwjEd9y9sU3od3KqYQTgAdvnG2Bay",
  "key38": "3muDoxKvBmcodZu8FBrDv69qbvgqzd1evGJkL7GAHHt3onmHq87xRKn5Bvny1gVk4QvTWvvdNgjKXaYWbmJAYxMq",
  "key39": "3MJ5QxLMedQTATsmdRRDAs9YmrmSCuQ8hjDLxbX4HCfkqD4PypwJgHYELEywrfCTh5exGFjxMRcPmuWaR7oDFmHf"
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

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
    "613kejUVU2Pou53HQjXerZhuh7gV9DizCvUYq4KFEZexbCd7JBLwDtNJQCYHKsAqC6JLgD6dFo6X9aq92jEqgRCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuNTsxaLpjXwRPBFDBie1Y7arDy23dpk5GRDeThS2JH3MSLT48ypTE8RFg3rHX8WWFhS2Zxim6YfbaeJjudV2Yu",
  "key1": "4gXkdmUBRtBiYmdiU53SeJcsZVjfHQEewSEXJ5Vp9LbZDxw8gkLKh7vcVcuHUCsPxBqJJ364jQ8LJVamdZUESvpH",
  "key2": "3SJPmStft2FqU4wTE3Md7rJs5iZ2QNUWmUhneRT55VRqzJY3mgUrf6UrCTbMcupYVCitmdmt3nT33aYmtukjDJWi",
  "key3": "4yYjL8kX4mrS83QUyS2LfoJSKEbYvQvJJRnMrhAGLP7m3S9cmBbP7HGRJa7sotJH89y83okv3Qfsh3EHm2ejnktC",
  "key4": "d8sMTMnw7GdRH4FcznHehVufYBRMZ74us4BjWk1AcRZu31CwNVqdqExioutUHx4JsKSLqpyRo5om94mqprqmMr6",
  "key5": "464gj2wv5j4kC38FUTEbk8gCWiiaoqeXS4JFuiX4d4dAYdRk34cAbePPCeL7xbBv7H2PGuYKyh2893kbct7vWVW5",
  "key6": "5pPenfY5JYuws3eXMD3ZRMGZsWWa95y6Q5jaB9hQjKjHAJ9gRQLRRy2qymqwU5bmJLJEqN6tnyR172oMMvZygr1A",
  "key7": "3hWPWGhNTjvfTDuk6WYPTSpS6AUCRpsaq49DDSLiQy3n4vUEy4ZBtcnqinude1DzJkwb5jWtg69cCwkmQT1THbGX",
  "key8": "2bags7GJuAASc7CEXJDQGEKQAXSAuwKLfy19PWUzTCD9pi93ntWHfd2UfGEfRNuHVKcG9csXXnHcy8wDnUzWJiLi",
  "key9": "mF84fkFo8YjLCENN9CyrY8fbGNqtndUtzg5cezz9VPqkpjSGiGbuTfyPnjSf5wKZaYw6osjLDFnKQQVmGbv3Tko",
  "key10": "3weVWsxuAQ1AnDZnHKN2qB4w6kxDqvERJsp4ceQHSNQDMoh4jCR4hYiJ54HXAfobXg114c4vDoqd6xhj8PBJu2Dz",
  "key11": "4Kf2NWMrJUNq7S3efWYQSdL8EnaTUEToVVEvhe8A9fYVpfZfqSuV3qTGaok8bqRPMhwQygxV4NzZMcx37dJ9QanY",
  "key12": "Ydm1iE7X7QLyrRxqCtdwTJp4sPCoHVAW9aF23QBFxxhszwEiY6P2mk8StYQV3Un8C7BFvtz6BQ9UKUe5urBmNYP",
  "key13": "3pDkJD6GGnYj8JPvpSTzLN4GSmMvVMXpR4XWv2kA9y88mM9mY1bB9YAtQVfHrUmvfMHxbi545c29dfQb43MLHMv3",
  "key14": "4GgWRVz7EakQid5j2YSnqheJRHCRwNrbeQ4QSmChw7JxgySqDU8kYurGWHvu8YAXjkCCb4VJ923FBCNhvPsbiCdK",
  "key15": "2CXhPhyzZXEowTZVeswgjVg1KxysuXoG3oLZV5TvXmeRe4Z42zDWrZ11YQGvHP1zaJENzFrPp4P8pG7XdqtaNR8N",
  "key16": "8Xq4AW9W6ujEZAu1VHtSUB2HRJGhzYEQ37sNYKZMJMxCtQBcrLZNdprFkaTLceaGjVtfoM3jLhSBavcZEzNSWNG",
  "key17": "3WFWNLHXN7K3jqdyasnBNPcb3HJJAWcKEcDYHLpdVnmccJ8fDVJkJCqhAT7Q2aN5L6W8KPKb96ez1spRKCEEZ14Y",
  "key18": "2BQUBGv75Mg5FixcTLRPi92jAtAdnVMehP2KvkDJSf3Pf7ShBgqfx9YZqdVPsgNWPwJJvjcQhmgQtgJE2hgcrnQF",
  "key19": "2N2rCpchaqJfPGJrvHx8CanwNwvZS3PGStLttPSzKbJV8zXJZMm6v8rzj1Gus5C14RTBYNAkCXJu37xt2YWWJ7cV",
  "key20": "GWfzkCYVppxzCZLu1Gna9VdQX7DrT22w7KkpcTfLtbEn9QGcbDz3oCEmtW13XPbJcE5pxwezqptwWAp3dewfPV7",
  "key21": "5zQkURJmPgMXRM15hr6NCvuXHq9JZgwv7fGfso34tWAFEQgdyrJPg7Y4JL9pBuxb1bNUqXZjHV7iNAGMkoiUYT7X",
  "key22": "LsY3Qj6npWMPcZWYB5mE7ixJwC21Xqad1gqQ4eLsZwt5FbcQ1AqkSSukZK4naCzdXZ2LTbi33RcfhQMT6sCWamx",
  "key23": "2Hz35MqMEzyAF9viE642jGMx2h9mRk2RPsJYi7gG1sGzgjK8T7SHiQqSu7Dt4855tU4BvmaRNew9CQXVHMHgWVTN",
  "key24": "2MVvQ6XibdSjfKvfsoszaaZ6KQZCPZexFpKdDmYqbXGxFoVRPAjafazhsVrZM3V2G8igtmZ9Fis35yqifJxsfrPd",
  "key25": "2cwzaj4TnvkMgw3dwPvVuBv5pLGW8okj8HGGePs4j4Wyu1VmCHAuxS6e551n98wXEy1ApdDbQ7mcEaxJgAnQzPt1",
  "key26": "z8TkMiDVp9ERErzyN7xe8GGKntVpRoJNk3gZczEXisKi2uZnBre9TQoFVbkofe5j5AZgJkhzyDEMSDLFYd45GkB"
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

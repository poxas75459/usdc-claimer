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
    "2TPVMse3d1pP5PdvuyMZRqAwB79bSpT6UZVmXYH6DH1k5qmPFJAe2AzvKAmXov1JcA7EZfMyCsoXYYkm62XLEy3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGZyHvaqhCR63witYKPXrkRgMrqZAu56skm3RY1qB41etcnw6jQe4y81KfWzkeqLcV7K6kFAgHWTALXSGwwjRF4",
  "key1": "LFGHNhmLG2jey61qc1TB19TR959CziHyTChbju3XoZTZT6JKBJgmCgNLycQWhM1AxdSHeLMdTHgN3y2U2y186BM",
  "key2": "4iNRX9AZX63yXPZNbPDVGRDSH8n5JAkwJrNxHXGACodDHegQTYv6oDYfq3qwU6pTeMhb6MdNRWTXhNgMy1WevWSv",
  "key3": "43fLekNWUXn4XmqJumY8vAuj1oDXgrMTPtRHzwqLEL2NWqT15psXCa4nRMZTPrr2V7PkPaehFJpDfxBnWuskVh4W",
  "key4": "3Ydi9s25tZkqnFBEiHhPTLCmv7yi3vYyurWthUXj5qLZy65pZKJr9UmCSK56aoucFu41Rr5NqKQ8oK4vnD6ZgoZd",
  "key5": "Wq8irPGCUj5cNUKbgr8r95y9gHApUVsjonXoFCp8oGsYGXBUT36YAn6kt1sggMj4owf9mcTAqMmZb4MMHnU1BRX",
  "key6": "4KNzmVQBC4pfcYVY1NKxTK8mxGpseLHJs6vbKk4k8SWuoi5DQrjmcdbewfuYpQgwENqABTtDb27T9otybgffdbKz",
  "key7": "2tyFQeYeW6SC6QRSfyYWA1NEkfLo6mPfYLwfcb6EdqD1Y11LKTWo19pE6RkyjbchezhgEm6UKTLg1to34mgUmjXr",
  "key8": "28BKnWEbSEGJEES5QAv2T3HshmThVBYkQYUz1svevWrGBPHQaydCfuBMeE4CxaKqueoVmFjUWzSgRVFPifCoZywh",
  "key9": "226UWL9CyEuNrmbRDYKxJFuT1pkMyuE5n6eBDppDG9mEH2Zeq39u3oYA7hHb4ATrM9kzyTCy9HSPdiwPbPFGH27F",
  "key10": "5grT4hjjuy6ZCCtYC5GwaYjpkS4Fnb4LAvJLr1jcfxLFoKJNWohu2ybUftsQitzEaDzstYTa32qQYHPrjS1F8ELD",
  "key11": "3ayoiw3Pg6dtst1ysoZGyuBvt5g1tJVzi5iSLc52aZ79chVXuLFNRYn6c5xRGHxTXQ3VnQdQETzCmDPnH4erBmFn",
  "key12": "aoq5NaAFRz1XfPZ7HvdCkAErVTLzjx3oE3bvXAEqNuEbYmYbVEjfPPJhZSQYRVnvL94S3H5UkZza2aN12nqBxaT",
  "key13": "63k2FvjBCbus82ouDdqfHjWbWgwNDRor3vsy9JeiQMFT9jrHJP8Av3NGqPXeuhagByQLjs1hSbdX3XdkVrKLkoRh",
  "key14": "2BD6veFYVaRZ8MGHv2rfoan4ZechBChUyZKq4cQxWAwLAuaS7eUn8kbYv5Bk7wf5n9SQ2EVp6xKueLjjguwnU4f9",
  "key15": "4X3NwErGK7utkZvB5SSWhnN6FD2rkctGfKFJs5YQgmx8QzBVzhTiDiYAkj8jB8c2U6dXQKdBKqHzzBwSwrnixvR",
  "key16": "5jrPkd3HdmoCfQpKpBjFHe65RhNGCSH2AVqreJhwpagbfb9Qm5HTypJcBwTNaaai5PdEktDR9aBsRbxzMweMLQPv",
  "key17": "49uqA2cMH3Pto53svpBSLzdr3E257NNoXME3bzzq8VYjT8bDazP26cCFZDCVaXEZ1w6MHGBgd6qY3WCJMe56N5xu",
  "key18": "NpSwzjjwvyqMp6m9pVS8zAKvHW4minYWGBXHixFmVyc3jH6vjt9ZNnTKFHpTD9wshQstcNSYgd97yC7AtK6zd9v",
  "key19": "3bC977ERjy9FHSNfFDgjKHJahh74xxaqN1izgCehPqmnGi7hPoQQpG14YPLFGeeCQcEsCezBE7oujAmPPvgMj1QC",
  "key20": "53wqGh3mFuaXPwm4soVJomGdErgo7eJyq3wRj5gSKpHXXjrnWc6oCRzSmadAQEScJo9fNkAtojj6hHxRCmfrTjiT",
  "key21": "3FRzNFcqCjCVMn2mYVmPmdwuBKtHAvxCkjtAYiMwuXhGftjyKdEWtJHQJXWjrkXJzBLxzFY9LupzYnTwNyHpuLAU",
  "key22": "5kgvk5zXDX91wHTiaYbhyVK27cMMxzY2jQsdeTMiwPUnf8VWQqXSzrZsgybqggDqY8jLuYE8xoqymoHycWwngMK8",
  "key23": "2ZWgRdibKGEBrcsVayLjtTcJrH5rP8AYHFbyE3jpZx574UHXkHE52a4cuUPBwZSfVF18sLmth3nYoVRPy4ixzCN2",
  "key24": "25mfFeC1xAt6j7wyeakYbo6JskZJr2aNDqQxGEou969vT5w6FYFgS9QkJQAMq4KuPEKh79JzK1CbfdN8FiAeo5ug",
  "key25": "5QDeCZWXViB5dn9Q3r4Ehm2BuhgwkZytJKsnunee5iSANzPUKkxkqJFDvux1MRtUSWZ8uxgRWJSCU347oTVwdEoG",
  "key26": "4W2r8DkXog1URSxrd1UGewF4TBf7Smd4jtyg6UB4QAPsUqmvsHkdbh8we4oHTu2xY5w7sTb4NZaUDsHGzbt2RYv6",
  "key27": "5E49R8znWCvw9ytnD7K7oT29Cyd4K9ijcxADcpBmRGvbeCLgB2hHwGXs8fR7P6i33KvavrenjqrfuLTk6nmkPdAH",
  "key28": "2KyjdP3q1PoZtLRq8M8VKHazyFgkFYUcUnCT9oPpGKcRGaFRFtyWgw9DdxPs2QgHTt2qNrjV2h5qBDJpRuFAiZn1",
  "key29": "3dPXm6pHbKcxKoML93k5fLnjkN7yB5E8sRgR2aMdn1hEN57FR9HtjK71VNcQH1FNqbXdaa8mdA44UyrzbboE7pZo",
  "key30": "47h688RqwRr134xvpQFPpxTfgY7nPjQx3eBiThm5AZ6EH1xJ7Z1N2gWKXeasj3E7YUaDPaXXt2pRTFypZ44VP4j8",
  "key31": "62JjXtuuYsXsTKivZtz21yuHL956S6mtXSjTFxRdquzGLkAszszqM5zByzKXT61DqNUXPzkSLfNEXnHdjFA3vyyb",
  "key32": "3PQzUZyN2YGsf1XLAZ1go4Dyfy8FThimqaNd3aab1DXwJnmEwpQdCmGX5FzVpJ5CsSLysWoP6Dhy1Kmm6E1MspCX",
  "key33": "rjEGpKQ1ZsXK42dUwzKHjBWLxbexUg8iX7ujnYY7HvYNH2TVgcvET6CEwqGRbLgbMx6oNP7QZbkeximH4agGXCS"
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

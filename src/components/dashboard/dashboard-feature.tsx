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
    "3u4n5H2L2YM7wwGwRL9SAYwLUczUCX3iKFUVf9V2NRsndbjHzmGYaRTSL2qqnMdTegtFKwCMSRWNxNt7HtLRjyRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tV3PEX7PF5X2FwXfe6i97tnuQmFg8saNR8CnergBRam8Ari4rn6sBr4GakFAxgmeREm7iQVtGsRLqf1oKufQXP",
  "key1": "3siWHjkPaepxBBSgFgRSqAZuUzH8fXKhy5u5z2zbyW9uRP2q3DeRN9gCKx15iJCXDQfDXqU4q2V1ZcGhwqWCvsnD",
  "key2": "3K44a4PTG7bUfddfBFEyPc4921E5h77BZfQHqRo5oiEfHSyiEcDoaXMb3vWc4EQz4heEgM9CtHqbPAWCTLmz8hdL",
  "key3": "gtidGjc3v2Zm82uPoekoLTWqtNmbi9u2QPKAqDNhZQX2GUx5oDpNcwB8A6E9iFCzFq9jDV2BRwcHU3aH9gupLtk",
  "key4": "5Xb4UB4j8phywg76wSgtW74eCUUvtLic1NWG9Q621KxnoK3mjHCF2Ju9nnmxBQ69wg6MSqrfbCHcXpPU7DBvhLKg",
  "key5": "2seGTwRXjsAta96JgJANWGvi6jrQE7o1xZVT5kgNurxUk8DGdZGBKPKjAHEK7jxMWzQ9mUxExbw61C3qsUG3Qac3",
  "key6": "3zWxnQfMjpA1CTgPsxzaXcfjSy9JxmRipyErLG6Wc1otJivRnnRnvdfsANb66d7FBq1MpTVmfgiuJtkPhym8mqAx",
  "key7": "2yKxzUY5wiBD6aoPRPQ7Nf8T7yvHtjCXL1s9mJFvLFQMdsBA8VMyzA7r7vvyuK9v7XtbLHf8Hnsv1EoyZBMLg2gL",
  "key8": "5nh1rDLBmtqVuW7PkjKezETRe6qc3GtJGdcV4k2t5vZDRXW4LG4iVPGnQZZtdY8Jj6PYLbpeJviF5R64tXyMjLfb",
  "key9": "MWdhpEGNb3UFUaThbV3HeM57bLM3vdtsU4woYB5iEKCv9dyFdnN2qmLmqMkE41Z36FCC3AUwLtYCRn7r4Bd3Wbz",
  "key10": "4C4dM5UscKN3GgXY6poJwN9byXrhhfiddMDRAkQ3JabmoLDX2cC69xzUyzV3HmfzuesurRJArYn4q14djantc4Vk",
  "key11": "5ecuwfWhEMUH8jJZ8vKYqwBVZ3XGkuahYt2Ebr3422KybddmkMgBZeYeU7tDGPNcdZTcLG2n3ii6gH4Bq7NTMZML",
  "key12": "4AeHeNQ76DMH1dAa84ywk1m8BL5K6pKWhEYNXpW9aGb4mP4kx5HgseKH6fysyJxWwwcQWa1LrChXjETkDg58B5mE",
  "key13": "66NX6TKzuNDQXovJmC8HLkHShnXaokzCd4gf86CrBk11qEjhfuLNrF9PrUc4o7xsxua6zdYKGf7GGnBgruobvfu1",
  "key14": "652WbTzN82ApGYCsUqm3EXg8XxPF1XBucjCAsZTLB7HsSKk1bJaAKLYMCUnVMmYNvitBPx6ZGw3dU1PC7TGUisyc",
  "key15": "5Mbm6NigNxZtMNF53Gvn22oAhAhgw9oa8Wmm88hF5Naz5uurcZiDRKnYbFq2M4Je6C7ekapmKzYQbJHsgzhawuNN",
  "key16": "42X9bu9s4PcW6KscBPTigQ3vFzqxyn7RMxEkEHZApYhKkyJWbhvv24ygZkBaerrRQYMcfBiQKuVFJxaB4etL9MQd",
  "key17": "4A8H3iQVXSHmU2bc29HdnRNZwFxFRntmJms8FGoKbmWxgWrnL7dn76puZnF67UptoVT4nuVT7BbLj4ogF53JQDnK",
  "key18": "UzPs2ShNMyW2BPLDxskoKRjNbodp4eUtiCQAFEjhJLwkf7Ecv2JX6id6UjeP15HvtATTE7MWicuKGEqcPW5y67Q",
  "key19": "65qeUsvKBUDHm3jsyu2uFLUDWQNG7m4g3Yr23uDesVEp6ajeJZg6sfFp7vEk1ADkEBio4m1C9x3Jn91J74n6tPFQ",
  "key20": "2tfyLrGZosMu5v8WFBrU8ruqS3eqBQvL42EbLafxnpNe6xGTPZYPFUBQ3WNmR5kRf51ipJzrbzgeja8Xa8T2mUiF",
  "key21": "5u6Jai2R74FvjYfJx9spD6Zs8MRjaEngZJZxZxiKecXnynBbWRkTNevNruaLNuKmw5JrFpWTcpanH8DjAjn37zpu",
  "key22": "kbo6pjid7qyTkDLWLQZDuBvZpaTNohVDf7ZuT3PVEMdT1etNSqR6NTBu9i1zJppH9HiB9oc7CATUMsDEEZaurMW",
  "key23": "61zLvsPsLmEWCz6cBzAeD6RrCySmjwjE7AgkwFGJ8yNkwCaoM4yzmwYqMgDeJayhkWRYuTMVS1mvusKU7NH6ZC2n",
  "key24": "439ziKbeMcro2wds2Lwv3p7yCanewtuwnByEACDuWv4YsidBXaGViuqL4xFCzkNuTw1JBSkYp717fEbptUEPiKfB",
  "key25": "3MA2YRJSfX78cCLwnteCu5t7cypQsRCTBjFnfnfpxm4ontdCcMDAzTeDJADmauKNWjqMXCavgph7jK567Vsg3H5L",
  "key26": "4aAXnbWpFrgcQRCFy62JSe3Yn1UKmMmVoM6s6nGKZM4uHeK1UQYMY8kJ5fHX8L3EDVf1yuUzpRMPzKE9WFjqvfVS",
  "key27": "2BHoGoCkvDVzfAP5DL7k6MjPjYdyBuXjZD3cHKWLVaizjR2NGsiYdaHiew1A52ddSJbxv8nGVd3dNQh2RScHxiP2",
  "key28": "3bHSrCPerWon7WWT63fctaGSMAtiZ8TuSKjzbT9hynUMeauQ6UDF9Zc1mDwgRy2YQ8SeDVnxZ7gYWVnrFs2c2LGN",
  "key29": "2v1uSQnarAc6CPwrtiYdRhJxW8XdrxT7C3jCCXR8PzbLFve2KjWwGzZEUhyDZfcVnncZJFQivtQpxAn1pKRnh5fk",
  "key30": "35bE6s11cdpCWW6Qa5yGVyunufVUUoTbEwLJMV6iyCj1zEBs4j6U31xcZErA17E3T3ZLYBouYRB1Z47HvsihFxwh"
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

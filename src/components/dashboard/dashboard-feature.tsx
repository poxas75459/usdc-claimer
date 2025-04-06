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
    "4HuA8dfE5HNLDovh4CEA5Wh8Ln4GFMYxW4oYm64bfxawvET3ZDpTm9kZePDHS6XBzmHrXN4tMZkPEvgea2mghGGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S76RZsYKrCmCH5PBV3haoM88x7NBoeDpkT7UvL2cWArHxGMJKYKGNkVbmdZJtmhP5mv4mhb2uArswLRdnHQA7oC",
  "key1": "4y4qu96D8qD64Vsvwpi7F8QigfaHequwGrttn46iQSuz2reZYSmr7buBPNsZdvYBBWz9stU1LWspKXLxEkPiqfsQ",
  "key2": "623dzrW6sJfWY5BwUN3GaSAq1jUsRvwxdjEBqxQkDoK8nB6juDBLSJ5kLs329Re6qxV8aBpnGtptS4SaJif4EUfF",
  "key3": "5bfj2sHSaPNthnBa4MsPjmLSuB5WzCZGr7xmHF8ZJXFfZg75tnAAi1BtP11hXD17PxDd7PYWzVuFj5nwg843wCiV",
  "key4": "nE5H65Vi2kwiRXM8xjZet6gdY9j8oiV55w4ryouu5YimhpEZgks3AH4nVh12mb13wGzTqhJueXfWBVe1TYrXyuV",
  "key5": "5S2J6qMaa1c1SbM9V9asjP6GJangK7sQs5Kmfo9FDdgWX3uDJEtwukW2F5A6KnvgZF3zb4gPUUGRaT9zgzYTHG2",
  "key6": "4sdgsHd9K7EJsM2evfCreuZnXnCq6iX4euuxMeuwotB6xAPPV7QDvmgootE1FCGx2H5t1ZuEiqNB9FJyquAy8Hdh",
  "key7": "hUjEfdxMhAjxXkDZgBqub6wwqYsnRycs7EzMMEPWhUYp5cw2DaeNd3rnaMuGhJVrcDQaok54UUWfVWJhffkaXRM",
  "key8": "51FQqGssYmyhaZ3YPeNUj2SF3L556DM81tEBJP3Pzd4FVtGF2frv6LTmRZKhveGtmk4BzCEpvrJu3NVEBuwsDA58",
  "key9": "45LHLPm87Quie5ZPdvvAbEBhwaYZJ5GpSP9ASqWXW7DEicEHKpStP5sFGqcMEHjwxDWQpSV3JJQ8c4ZC54xwNnfc",
  "key10": "5AT8fo8rJ3jXzmPweS2Qavk6Gz27dL5BioC5Jz8dLFWUBzMwnMzPmDH1BRs8Z97rqsW2gAtTJaq1CWywjXXJtqT7",
  "key11": "pTB1CdZRw8TZxMTULdxP6cnwaxqAGnK3PPBSRGZxAvmoP3McRAMJHuY4uPEsap5jV5uykFJWfhs8M2hjYcoG7Sk",
  "key12": "gajT4aDKBzLCWDGHQoDf1QC94yLGLHJBJjCyzLWpFE29tznmfWMawZtXiqPoVH7qDxnKAVyLFur4ZKEU1oiPd9J",
  "key13": "2qMu435VPMmWYxZmFQsh5xYPC7htspvv55jS2TFk5Umbr7TVsdRFjE7q6Bt2xeygFaTFYFWhrer3n6hKGGLtfMQg",
  "key14": "3fbxzX5rDFXmEYCB9PcSLMbsMcUPAtSMtqToAq1gKPjUe9mDs8DzEm4xqVPF74nJhAWxrbUg5TG4QTQCQSXpagaG",
  "key15": "5cPwMfHHwvk9SiEUnszQN2ids4PtGYaKCmmvaiErs1SWj6Cz4iSiX6N9Ph4zJJoZGL61eTqLYdVCDqbxms4BtFkT",
  "key16": "eDZdW3HJ1Lgg5yGi5M2CuQkcpA5eXtCJdZF2oDGd7FboWV8tPvhVpnmnx2LAhq3v9yAWckrfbxzqTC21bVVWVPi",
  "key17": "2oyKfSNZcoHRSjRyT8PLZtryZgVothiusdnDDeNowabWMz1Mcg12XXSthpDs1SyZm2UKQomXNqSB4yqKKxRRxvvP",
  "key18": "5rG9mRrjjqngFCnSDtCPHXQqqzVRXgTEvNP97HEJ2wRZSDCLV7phoUWRZ2JyriVEuWvDxkmcHhGrTscfbLMpHWPV",
  "key19": "3hzTjY3zcNZJwHYcbyMQCNfZ2m7Evdnx7EiQNHj19j5zJBmdiWkSSj7moyJXdxTGLoivm2yUXC8NGHki1EjkJyKy",
  "key20": "2r2ocK46Z7oURjrQJCeca3JWadxSgezTaVcFUeNjFhvUQ3UAv5C8wZmbfwGjgSnt6DNCNFR8UWW84dqyKkbJXEjE",
  "key21": "5DUgW4rmFQ4DSbuao8FJc3CEPg7BVZxgo7bAupQihQq93ntDUCHFSr7KwqSoNgppoodfm9952RXEu7yWj5oEXEw9",
  "key22": "4tCS2pWWyksKwLgt88SP7W7w4byZGbn7JiViQQDUxWkDmMacK7DiywtPJSQiGARaYEkdr4EViJzAsCdhgQJaFZpC",
  "key23": "4wQMDFWW35BnXk7rSJL7DHaq2mo3kP7eHE2LdkXGRKC3e7Re6SNzwo48DP3YsGmM42PMsoswPRqZSJCF5ihSLeEw",
  "key24": "3Lr53wXmvHY54me6NGZGwQmCXrPEetRy9E7CXqeoTeVuq8iV2LmAR2dCXEj2srHzZ324i7BEbn6wKWWfJ66Foqqg",
  "key25": "5K19TjSjGCRyAFrzMJ4QuhNBzYrzn6ziHJuxWQ2YjutUQEwtgpc2hWy7xcGWZbzT7f8nEgUd9Lujn3kC4Z94m7Vp",
  "key26": "4R1CNJwYC572RK1nPz8CfGDcHEYQsioeffKq56b4tKXXqCENDBr1f6ZFgNLRRpdP1Y4pbGBX9ZHJ1Fy3dBeM6reR",
  "key27": "4L56RgqrtvJiXw5ukwncW2kUq2HXYh5KpGnmujT7g7RhjtA5JjkuYYLHvHytthoNbLSRe2FFHBovUDjawTL7UBGV",
  "key28": "5joSah3GosivUtB6fzTc7rr2TC17uxZEfkB2DJ4aBZuK3QivWdbVXa7d1NdpkJS21gTTGDJtqmAiu5oXXWbJAzsg",
  "key29": "5WxPhf5CRwnnATgPyWtnnUFRNaXDZxUxNe6gJvc1D62FJn2FwGgFk6nv5sntRgDtfU3oK3Rx2vM8zS1jgY8RuB6y",
  "key30": "5LRLt7ag53G5q3WXkS1zgAaiD2HxtuMuNMzmifzQvu2ALp9aDJ5JszSG5jidnGrpAiGiSRZe1RjzDrZnh6MuUpB3",
  "key31": "4yBPpYQdh635P2Pt3tTSh3ghLwkn7BjNNTx75Cu5o76UEN5Kd5GRb3RgddbNL7bMwN87CXPYVJrMiV9KkvPbE8Q2",
  "key32": "5YEgb6Vi2f2EQaib2TZBCMZqTWfmKfeJd25SeAJVcXAnmGftDGi8cVwV1GWQzPAoGXZoJeHwByhUiK32g3ueuDjV",
  "key33": "5ZyjV7v4xE1hHfrufFeFjWxdcGsFq5GUNneUQpC45JUEMQvvafe2q6ng1ems2f4GBLmfeoMzjgHbPA2SuJ2wDNfC",
  "key34": "2AVYbiRzgnFRtnzBb6Y6KcYF5cqiTzBWJ1o1rqSuXN4SD2kDmVXbsuQtqERpjWGfSFnRkhNag2raB1M5bbTsT38V",
  "key35": "5jhvYmZt4fGY1AML6iGHWF9b8ny7Le6DJ5fbx6WFrM51cjrx9SLMr6T6TMWrEeecCp6CvG3xZiVxqQspapTzxtiY"
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

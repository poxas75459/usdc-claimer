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
    "3Dsw8Bt6nnKnDKT123f7AHemoZh36iQnb5wptDnQiZsJGvB5qiEdNtWRQgsjBDcbguphMVY76hmxadQ6CoNnMivs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxGrjz1R6M9eGfQVg85PotfZfDe1kBa5g59L4ovUSJ1doPRZHxzRZwKpaCzav4VJ5XfTLdEHvitzRaXRkpZy289",
  "key1": "5GtcHRfpTA27FhuD6qBu14b3jktiH6utt2ic4f9QMLgMcehLyYCZwSTYPvMk1UEUEQAn5KibWmBdteoq9rqWyeYm",
  "key2": "5Gvbyj4HjnqdkkhPDC7cyTkaoEiKYZTL8vT2G9rjbNLdcJ7PZirGtFYp2KeMAVCHM7dD1SF3JHT8HYcpZJWe7sQF",
  "key3": "533o1VVM6XeFKn2vcvwwPq8kooCQ1EWcFLeQeYQYiqL3shVtJNCYMZurtDGg2SHAiu946pTMzgfvPWpNhHaqAjGz",
  "key4": "2wgynKu2vuUVrBqS3J9DXrYrhotvCfkD15WZF14K6dj6NYjp3kcmHrHMnrLYyDY1qzQBdR84GXxDSP3xN5GvSoBj",
  "key5": "kD6KC3MRQJgHmuvQcevv3fFp3ve6ZnuNf13c4agFujqerq7M6mNn3MuNKMt65Psu82YwTUhaLrff8DygATzPczu",
  "key6": "5aW75aqW3eGUAFY3BWLU9zC8hNGavsepRUj6zhWf4KjmnUASoPBZe3xXYfTk24ZvKVooAdTGsj6PzmeCGcnzJb6t",
  "key7": "28qzcNdhwtRSMooX11NTMiEnLWrM4txqQDfvnPQB7rHBw8oh8vfpXHbC1DP9Eo359exXx1eYxZ1ZnK6SMAquv47f",
  "key8": "3J9RX7a469916BJpViv8yTWg58EvmzRvHouV2Kb6KChU849nmLY2VUx1BPfh6LiXDsYA1dkmBna6qPAHwYTLmj6U",
  "key9": "2CAT57ugCpBzm457ZmbL8VBtUzhMVKXt8m7Y6pSoTLcwvNzMpGK2KBJRd1KpH51r4TFTsri653Ck425wpryFjnuY",
  "key10": "42uFtjrTk6vntQHaWAdqFSwadSDb2ACKpcrLxmezQGmoQcFSsasqSb5uyDmkJdS7srcn3fHUpGhmxWVCR8RrCXYA",
  "key11": "3879Et3dqcscrVgLeUR39mM3BtqZ5ERxJvfssnR2FideMcQ4K8jE2yR3kevdRML7o8EfRcK1iFxj3M7HUspccPyo",
  "key12": "2g7S6QPrAnUrnTuzbFHo1N8xhThqgfeQ1LLYCb4s4T8APFdXiuKKMPeSJevc5GZUpkxJYW3DHctQHz8rGJiY7k6v",
  "key13": "cPhNetV4FmhGeteCmQSb2UqwuVTqti4fMfcKv2VsZdm2RJXHb9YszgUYrEmF7m355HVBugM3SsypEKVyUnFDarK",
  "key14": "3m5oM5rDACGE2WqPyFwCpwwCeMwddYtxsT16HQhvtTH33JtuaWFLFJhkYs3HcJAKNqZCA6vTPyWbGtAyAUXeGbGD",
  "key15": "4Yo4thtJc9TpRRxRnqeCkN2bmxzifbCcG2kpaJVQH53vxXKQAytiB2DNstRUyxZ69jCxxwWmVfUS1DJkJDMgxA9R",
  "key16": "5VwYsAiVtKWCfXbV6Yf5Uo8zRwxucQA4ZDXDjvVa7ZSE6TNQnHU4HG1aEDcyCBB1cU1grieEQCcUTauacVvY1wDp",
  "key17": "4JKi2NN9kEJxFfoJG2uvrXCJVfSdDwXXqMnwWCg7CduDm1JgNTU4PVXTRoaEoFtXJ7J3JSWNbbwiK1eACDcuy4nj",
  "key18": "88LUVZcFMYhGdg4AqbYEpAi31VhXRS14qP6oKB9FKKhmTibZMM7xk6ZfvU77U1fbW2RgHms7C3C83e8tSDqfy9f",
  "key19": "3MhYpkVTBWHAaYVG44z92BGVAmNz6sTBDx4vwA6fzHrubdbojp6n7s5HyNv2bLfPycMvp2RzNbbRXANiiLo1QNYR",
  "key20": "4HB8CmjhNCjqBxkp9bVvVTZLrPUsgHtrpFGmZZC78vETPVxDJqaZQeA8pzRb3UrdXZvViUdeQHsayfYseJjd5YmX",
  "key21": "ziciVu9dGE96Fsdyh3uYPt4s8HyRgHdRU97reLWovprYgTVCER85NQZcDxfgT1pioQLMr3nrnJeCh23VsF9VG1Y",
  "key22": "5Kt3mHLKjzZafxjxZ5WB9PTHa1bpNo6t6Dvx94tFyEo7o4zRNxuhF94tnBo3rJp1UrkViUGsC8c6Q3K4Z3mVTRgN",
  "key23": "2Wn7J44ErkBjL51wvPym9yzLc9DaQKqYZKZsZFyryyJdCTJnscF4zcNKGAtoniSSHKDE5QZUgp7fRJcRPjnxtWUa",
  "key24": "2XwXEEq8HJJaxxs3Aeyu2JjUWcQSipu6he3Ge2HrqTN9y8rRZDNPmGBeFJPi177ZNb2QNoBSWrvU819ysLkrj9Sn",
  "key25": "32pKVfoQGwLwMujbs1wVW4QzKHXvrEqyr8xY7tBBf9S2teuxECB6PFjoFBm5HMewkrAmGx4AZEMUSkm46GdnSJhs",
  "key26": "azdPb6iq7WnocjHbzzY6ofZpyBfo8y4j7xxEtcsHxH9ebKsHMink9KDzqS16zA2kp5ZPfWCVqNXbuZXyYF4cFZt",
  "key27": "4DqXfFHtALtKn7sJcitYT2CR3rjzYLjQJ84wfzGyewbNfEyHC1aEz5QYvHb6Bj7bbqAgtJWjg3tqZfsNgmbcoePS",
  "key28": "3RpWtGywfXdYzSSeTTBjgp872n3DRByNfcWBq8NYejFBqR9FXGcvxMWdikbYS3xveR9Ps5C6Tq55FGqDKTqC5qEF",
  "key29": "3PANpRh87sSKCZmmS7AJ1EWN1UVUxtXTrH9gisCFeBqSWji3qPpt9qXKiveBqXnJPfityWkEMn4ubP1RxTbXtVNz",
  "key30": "4DCudyiEpfj16FuZJTHAaGrbBFiGPhpoCaVvmh57CkrY63FueWHFNmhajgG2tqD5p9f8LBpSE8iG798pGVhUTYJC",
  "key31": "21zUdhBjvd3nW7jLk7x15Nuv3A9xafCkMvLHuMhuFCrjaGynHC6o6k94Uw7s2zJwSKZgvT7sHTeVfQMQwV6hd4jQ",
  "key32": "2JzsCUT7PGKyBTDkCmpGaX5ceaSpMuHzuk876JFBjMU9EW1KoS1VLhEkbtsDBi5dkcbJzKf48HbGT8QByT4Bpfb3",
  "key33": "2LP6dpufNe4X8G5Bh8uRZWHW9KGQw776hZM2psooBuGtzF48LAz676V96yspmPa5VGyFEFz6JuCbGxMRGafgAw4x",
  "key34": "51ucbDpjsxKkEDHrc9t3mi976WV7ict7XmpuXMib7MQSgyQ29o1KqchszBajgVECfBPyJeDQaTDFBhB4uHWk8PGe",
  "key35": "63VFZeDY59ofFUHZJtkchgEoeLe99RA1P73YUqhJKMDPdr9GGSK7jKQSgVttvHbdYkb8MpxhZHYiPBECkJ9XiRCQ",
  "key36": "4yKrjPW8pX63AEvLVwPggmENU6zpxBLuk9mxWJCyNuZvZmHb41fojNkaGb3RKWv9TiKzEongwxALgq4kD4Z8WDB9",
  "key37": "2vNqhnzUxS78KohuABFDVff6MtpKW3i9MZng8SKqLyorBeeQcwMAZEqpLzVqNEDweqoHjXg5iwbiRp2kKrNfUGHG",
  "key38": "AqhLHrgof97rCEP7uWSBezjhkUyqwegXLPESkZY9Sh199GHsNrsFUH7Kdz9QoJhPf5V11X4ucGqWHLX56MoJJCx",
  "key39": "22q5MX1Tj5tL4drZtrTtk5TEfcaTfm1Hye3DGBs4ioCbV6xeED9ujRhgrE5ZKjaAjoPEEbMKv1JZLa2nThuwQYPR",
  "key40": "xBSAMZPkhRSwBHhjdb6sk3jDaz64LeLNUp8GTpTB6si89NV7DiYqHoUpRSbMtGxAJhH1tWbrbNEvcpjxsD4rysy",
  "key41": "4qvSVJ7AXhMsJK2inMcCUtYS5ARNqqgKtZdfeHQNQSirpNfGMwMxCTt7yzbgKmkXfqfWXZM2mdTCnj21DAYXF22d",
  "key42": "4G34Bmd922gdqvcJd8MuVNdE1cSHB9wStmHGZHVdqX1Pw7cFHVz6hBYJRbt3w5dZZg7E6fXtgFXuK5mRDxUYEQya",
  "key43": "jWWjS45oGbQG5Q4u4QeHWkqzkTEXZt2XfvFYLmx6NXJr4Jxzk3WcjeQ3Zj3DbM6LCEY9u9AgH4uk5pdrszV93Th"
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

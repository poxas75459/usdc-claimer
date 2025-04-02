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
    "57Meh239CfGseepSGgizcRyQ26oTWbcjpkQ3sb53LPhkrhxMSBRDr29PoYpVhaaHt2YnqLY4ZwTFpD87Z6LMZJvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hP4s1NR69A9Qi1NCJbDLa7EK8zgS7n1FZt73WJawPkTsczmNzP51e7A1nDpLqAZdXfqpvT9hYsecUt6M8nRpAAQ",
  "key1": "24Va24o6PF3Z89fiQBvUfws9i9BVLKPU6h7cLJjbRELpNSmTePdmq39usj7PA6efpS11cdEXa5eBfFtB7v89C1UD",
  "key2": "3SPbbP9yha347PhPWxTztfNjzD8NTHu5oahgq9joMwskgiqAaAqsNuuR6pJf8j7mYzAYwMRFPLRcD9XfVrpZGYYh",
  "key3": "2fuu9vgCtqJP74HBwfywZMGWXthB9up7ZNKmEistXdQd12xAVGzdR5PsakrmVvcxQBBfovV3oeVZsczpHidNRV3A",
  "key4": "3v79VYjuDJV6K6yDJeb4XUP1KgcP3GBPcBYiXsQcGv8HkLgKr9vFJsMZiW28vtPdfKCHoof1AgEhREXE6pvaNC4C",
  "key5": "46x4muUcb1qHTkLz33AjCU7Zm4L33B7zcqnAm3Krcrh8gmyLLNnWivub3TXw91Tat3QVDwEMF6jnJKWkFpbEwmq3",
  "key6": "2qENhicDPwbj966DxwVQGEhjUQVEUaJXREAwvMi8xozkqifq6krxVJS2SRRJLBMcTFXWqCbL9YNRtKAahThGGYKV",
  "key7": "8N1nrDCcqncu2ws3jfrUAa6oam1gS1iFN6FDNT57XZ2vo7PyqeNSyhxbRATVLL51UaKpJMdgZfbjH4nVqgevc3x",
  "key8": "67KAZSXpfMcf1MJJ8iogezSKj6UihSca2nNP8LiwuNMHxv9FZ8DpHuZ5CA1jAr9mzeE6EtAvPvkHhUgw2HzmxeE5",
  "key9": "3xMgYyqq2V8LD7SUZehuNdddfCQcq8usQY7S4YxxjDsqnpijVzVNQsjQgVhoCouYNz7FAny5aaXbPSC8LhseZFDR",
  "key10": "3DyHowsi5HiiSU5NMpY9mRoiQ77nUfgzUuLBEsZLi8v57pMBkqmdwczoLmk1FWWDsUs8FKVZmx22KoXdpdex76R7",
  "key11": "4FtPjPBeHTcxv4WrzeNgJMJztTQmWhRkRiugtozkchpxc8Y5kiRSDHALAB1wFrraKtQGnGvyGYzueZPfueMqxA5d",
  "key12": "29P83nvnpedjV9EXkL8Sia7aJPuBxXi3zGXWnjAwQCULV29jGySNySxzggU8wWC3T7iAkYjTPae49Ey3FCZHsKLH",
  "key13": "5zgzC3gUwKfP7bq7icRyTKL1yyepBNh7G29Ve8DkZhCTTg41irkbsKXnPuwyodwpUFJsEzBk9BnYpVvxhU33FFJE",
  "key14": "2p9Ps8MpCh5wEARxwHqK8sv2G9jkohbuP4st3MCpMsarDKXuZdCNBNbHNNpPpsibdFFSBQ13e1uzmLUewJbQ9hir",
  "key15": "5wnBLNfc3jYm4sSnyYf7xT2ztMz1aRTRjt6Sp179DrNXkWP5pv3JtGgKSvDKQwJuPfinSkxq19y5QgLkSbFWHVGH",
  "key16": "4sfDdShZMZQLjA5pfXYk9QmKK9hPrCH9mLkVxpKAcMChcaP3Awq5vExXRyFEc7BhmhoMNmrKDHXqNAFreEnKPiiN",
  "key17": "35JCakGMLq12uiascvUCQmLydeDz9YvsxTEiSsLCteBgn5UdfBpoNDH3jFGWx1fm3USJAD6WP9XYhnwwqDCZMQFb",
  "key18": "5FsaFuWp36qEapdfK1sStgnarjR5ZuTo73FZLEmHKXdrxXLj5GFz7QvVmsYNKZ2dNEfyYyysU2XBo6ujudiRp78j",
  "key19": "7V5i2tRa4qbEAqPM5GWF5sGkfYTAnvnAx75jFctMiLT4mLXgwJagacFHevCpNdhm1QqhNbrW3tpWQwTv4fLDKN4",
  "key20": "5AxdtxChGgXeKdxoyWqRhhQUi1jkRr8MQ16yH53nB7gAYqmFa2pNTx7uKFGXtR5LfaszUYCv3EgxmcRMUkvuHHAa",
  "key21": "3E8FfiEbnjpNK6qgdhhBBVWwLE6m2meqq6RT14ZMz5dNTWy6dXxcnWwA5obKTLYX5QtpkjcP3JGyMj4LyWf6zsgA",
  "key22": "r6LTiVV65y8K5b9XXTxzFawag3QNWZVeXU8gpicPWYkJjZFnjpbWx77SHwYsRcxpqfEv6jz8EU1gqPX9ETtx2Db",
  "key23": "23SySsQLfMPKyUSkUQV6XV1qJBbFKKwjEnoqkEcE4BmX1ut2wEdKbc1V7Lis8dCcEJmejVoZwcjTBnG5FAjmTYYA",
  "key24": "5BCvqMZqBRc6vWq5YzQegJb7UMWSw8v5HN5oQ2zbjZi5G5RFrAZhkUGMEBjXozBy52MEoNV3fwT83duqNmeGfuYU",
  "key25": "3cFuNXoG8QsgD9UfyxuPMHwAGUzMjmRF9QsXwN7g8ThhAeDRjLF5ptdA6iULKV6LJ7bZcCqS2VCFqmdsd3vP6Dqh",
  "key26": "5SKCw35a9Gi8BAAtg1i8NVZvegXyT9GhDs1j8s6XEY9UN6uU5YudxFNQKk5QQ71LfzRnvZxgp5TGPAwnNwsZm6Ed",
  "key27": "5HVuxBvfBFr4Q6Eur7rXkWAnnQWKtg2MR1yTAzuPTSxZxMhMxnW3xuP1f38wz5xAUZSX2m4Sqn14mnYQnasjzzqr",
  "key28": "2ePHfjWLUeEiiEKtXjvNdVwxJYBoPW6LTpu3sWFJ4ViN2uN3Fccm4tFcHbihkfspy1stqnWtGFpFjycJyuf1Zwxw",
  "key29": "3uoy4XUXztpurmgpGF6k5BMQnaL1bQ2u9LEeeGJ3pK4pimCb8MciTu9kwJjE54eBbzbxw8EHLKwiuwyxSC5Q8E1F",
  "key30": "3Hee4w6QwLSz9wJpPKVXrboMgximdj75WGTtEJfCJUKZGZxz8VAbALsXUFi6GrSSS8inVdfpbiBvYoZ9bjWcRPyY",
  "key31": "45WzaWryZVEwbNLYXmUNdG9sM9XsCv7oEqDpDdD7d9fg8zDRMz6vVXUFpppUTNqSPvmoJkLE9kzy5wabaM7rAUSX",
  "key32": "2ZZCPCfW6JZ5QEYzoEycbses31zQBstFtev6bjDW1ZDF9vC2TyRz8FYwgauCfHXbwRNbA5YHkGaRx3HnWdejrJrV",
  "key33": "5X3vaHyGwrmGTXDvCm8EAqe9cGKr21tqkUL1qQ7xGsHiSEUJ7oJ8jS5JuemwkAQgyYJtJHM8DS3T866DNx63dMNm",
  "key34": "ogjPUnDEVQ9cguT3ihMi3gLHubsgGsMinNwa8s7PhpCJLrwjgsF8Z4THnXXhdeacNvB9SGYzgG6EFmUNGrE73VT",
  "key35": "DH8Wpo5EQhq9qxWwc8FsFQUDpjZgGMcPbSan75npNHTL3WyW8KQNNaV7LH3xuiPeAG3SGiNPAuRXGcvzTLrjRRX",
  "key36": "2JWhMfnrNsStBW43Lana5QW3LW14DYQ1rgGyZwbdLPLzvfUDxHEDa5Z9epiCWCEsBxeLMDtrLjaARv88XcLox6v5",
  "key37": "28eoFQffzd6yzBpPa1cNbmtkwRBNQZDYhNRwxsaZ57xoHC96A1PS4mMSNypAsDWh5S1iT1ofFv1WVpAv4oP2TnCK",
  "key38": "5MwosTCJzgQps1cZWtVZhfzpou8Z2L4mupvgeYSjGxmkrk6kvh8JiBoS7EKrtoVkPECuqgHuTeUKTKposTaU8Zkw",
  "key39": "471ijmCo6unKF6D5zvyczG71dRhiHUmBNMPodtQtoW2ZhK4CKkHBE15c7v3Q4BWEdszCWAN3M9QbgxRheyeAVsRw",
  "key40": "2Nu7LEWA6CJ9tmB3FU223TVS7wbqayd3FvDVEbviHYnqhTy6Zv5xT6XBwPbiJWTqvimEmPJh5TfmRQg4heDM7Gx1",
  "key41": "4xxs6T3vvmkL6guMvb7j3uwMR4YfKEmLJ1iGfa7eZEq2whBt2NCkE7CC3m2TCKqgtqQY3oKNwSNadUuqohZGje2y"
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

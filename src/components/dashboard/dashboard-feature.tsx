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
    "2RbJBfLVHZSy1jnvbi51h4TJpR85yRukomXgMT5iB7s6WoDCViVz6LWDPiyMUm7fD9yTJXh5Wv2Dyrx9eXkNdKzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4Xsi19AiobQBYNAJhKbZm3k2xXW9gRdWMHs4UZabnirxiBZ6sNWSRb1YBHUHtgG5yWLQPTTk2qn9CrU6VUz6VM",
  "key1": "63ozXQwuSw3u6UkRmoESvV59eTehuQnEXkjshVgZFT4v2Jsv3nEZFp6bKRfvALYAW87LcRheSKZ9i3EDKUj9hEoE",
  "key2": "43SjHP1FZYXzyyjT8VReVkJqr9kqQjVs8C2BriVXDJR2NfFRrg2h3evsqc7pwArsYdoyAxYefh8yATKtNkwdkJ9T",
  "key3": "3NaFnN88T9UTLZHHJ8EBisezkRVT6DTXBo5hNQKj5xQfjmC3NFLNiRgiho2qnPivkg97CgKTW7tEDeeFX9tjrw9Z",
  "key4": "54bRCBWNY4hmUzMuqwtcpqaEebJ1yVyUjTTsApM2fnmXne3e4UfiuanAoxgPHr6Y6zDABmfSwa5Yj71YCpSuHGJ",
  "key5": "5eo1Vy6uHppLzAhkAddMYx2cv7o14KPqHGeurX6Mg4ZwRnE8xyMEctSyFbZhW2aVpAid7XF385ugk7wG2USydeMK",
  "key6": "2PF2vxZSZxsRrjvDi5NkmD1LE1LGucucmViiMDTPCacZ6sfL2KSz1HMx528FkioQCqJ8DAbh6fDJq9b76igigfVh",
  "key7": "5kGz8o3XnTpZp3wsZyW2bJ1gxmcuJU8Sgf1e4nnLPbe7xMLnNAtMFeDu2qtGNvvbDzU5KfhPkQLL3RDrzV9ZYMR5",
  "key8": "4vdVLUZRYfUVWN6vbLNYwEjqhoXHfk2r98nPa3a5DuRhhxu2xhaGuUbXM84uTHNuhRfogLDL9HH8GhLmdCizVj5n",
  "key9": "2mvnSGN9224BxAWVktErt39aUSiSFyZy5g6TCneBRgUxSWDr3M5GMaDnJVU5eAzvcJiAwXKBM8W1DiVasC1fvVUe",
  "key10": "4JWdCoi5zP96UUUhdu6L19P9jXYBezYBEjmY3vFv23UkynWheh6s8wPadqUyt43KjkJ4CXimDYu8f5c5WCJEm67R",
  "key11": "5xygHzQEvgW4Pvy8mxqTcii7fk5WQTML94diGGbWQBhLaF3PEVnzyb57PDgpPp3qAFCirPimx5CbaERbGV2QGFUY",
  "key12": "55RorGyKXKmrJ6GRPS8SqdJ1QM6c7gfLvwAhtFYs7myMhX1J29aku3Lzvaj8dMNuLixUTjSUTXxkzZd1UPhfzt9F",
  "key13": "cv99Tu6QgU8VbwTcRDjSbGP3PneadeqcwUhGA8KepUrvEdgF6vsMa5ViCU1Dhc2Crq9QYkUhv1P3QNa8WmzhqWU",
  "key14": "4SrhEXXrdVsvUPumPmpZeg6JTCNgzcNChY99eFdZiEZeCuRtfYeZYzrCaYWK5RWczTQZe27PL5RLyyig9tUEvC1R",
  "key15": "45pdpYDhHRNg1Dfss6MEM5EsXdoUWW4dNGbSkpPL233VNKmyXYugLhb43hX24fbLnYk5xpx5UArvdEWz9zifrM86",
  "key16": "afmvYU52b1SJHuD8ZCfFveSVtDGaRUZfJtQXYuNTnAR4MvzUU7p6DrET1AAdiHwLPZsQqssFg2RTnARxwRvKcaY",
  "key17": "qwD7UjBLa8W8uiVZkLY7mu6VbPvJAUsJdfCAtz1TjTXWKppkU82MzAnSW6Qcf18bUqXXxe84m3XstpEzokM2eiT",
  "key18": "sRQUxZ8HouChGPoSHjRvsGCXHWEVNtV9LTq4zo5S67ii5Xf2KvjSMm2jZWbsNbmfMebsp1G5CCzneQx8NgxrKyH",
  "key19": "4vDhvTwviD9mPR25QgAugVkfRdjKJNuf5fVDH9VBPdEFVSLkXzzYn9GthmepUisWhrvyLxbrTXHJimYNAv35rtYy",
  "key20": "iFcjY4nnowUvJ6y3sv6U1GJGKrHckzBCUB2HfYcd2g733UGJqF4knT45PaLdm6nZxTRqEhv2hSyynWiKTAhDDwG",
  "key21": "3LxXwUwd5q5atgjuqTZ4AcY9UirZAgSfvGZwuicA9JswNgrKLtWYcaXEQ7VUS3rhQJBevnwNj1nCALJ6eN5aVyU5",
  "key22": "2JSxrYyJwCQvAFTdK4r3wfnwtE3kqKDhqTQYEUrxsU2TK2uojWBc8PYmSaHaT1ZQv62SGR3ozX4h8sNgwGWE5fCc",
  "key23": "2styL36Qj9XCKrXYxT29efRRkxD3ZtuRtmhwyKTdYr2HxAdUUstcKKsoW3VHQHMATFi4xrz1onb4m3VmDD4TiHSd",
  "key24": "sNdDGtuTWfnQ8ZMNwpe342mCLDuaQJTCZWSYrvukBvNgsYMFbAsgYbZ8H1oJuu5m6rxeyVwfdANT7PBpaWVqQfF",
  "key25": "3RUcNLyyf7ebGBsDmwTvCv1EFqN9XQxz1VYz6HezedwyLps1GG6C7AEABwub61ZgJwhX4rXtyYjnmrLxLWaysGYr",
  "key26": "4He1t6YvD9coasvbzJpCEKe46qvmDbs7i7YdzP1F7Ag5AB6jzNSrNJGWUrQqaLAywUnuu3tQaPuVeXBXGA6J5XpS",
  "key27": "4bZKQ8hj4mBs6mMDnSd9xFMXxPWEtCPd3PdtstK5PugnA4K7okjZKtsGumFv6d4BsVAPXdBAKqPWKqbRwyEvwQRE",
  "key28": "5Yvnq5QQxCKBKgRxpSAedL7JArYJutpgg5Mh8fyvzsL9PRUgSLHwiWW8T8zS69iWZvbYXZvRmctuiuGCzVjvVcut",
  "key29": "5mL94y3kvXcc3PyqP3omUEZATQG8vg2rsJMqAiqMummga945p8bY7U6eCFzS6XWkmNKth4QiB24Y9S7jQ5w81WGF",
  "key30": "rhZtQehgrwbfNdjrEDaN2Na7Co4xpfEdRt47jvaSW37BX4xLJKSEu8v21QoDjGKnDyUgghQMTpFyFxJ7Kr8o4t9",
  "key31": "8wEeQBCkpuoFXBfGVCtke9p3XT5nRdKgve8aZacUAip2ZKZSc5Zj4V8P9b1RnHEqHAxdp8j8qg8ECYJAafnReRm",
  "key32": "GeW6DZSKuPcsFgcgFZsRsao5kFzVRJBVrmSB4a5K8ePai7afxof8efqRCAop52VmA5Btro8C7o4hMtMAeshBAxR",
  "key33": "4AzKZraY37L9qhmS3LbH1UD8P45hP3D1rd393meBSAvC1aiNbXWrBaWjbqU2oCS2gYyhiHe1GLSRvPeenb2rpFGz",
  "key34": "2D6TxAotu9GrR8ixvCgdyM1FZ15R4wKsBYePdRr2KtsEithf6JEpU4BH59u4cozzQEhFzv5oEbuV4Du63kFQAQMJ",
  "key35": "65crrmkqMtYGXT6L7EmsztMVFZ8hHHG583JJ5PVL536FHXVtuh9LCFtSERXcdFMCsUb2gnmDv6cbHCkhi6sx4CVQ",
  "key36": "4LKBMKUGFUq2cD6vBJdrXvSRa8A8WHPkLRjnD3gGZmdHKSGi3KTSUeZJXe9ma9Rs8i2cod7Bfa5uZSnZ2PsLHhju"
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

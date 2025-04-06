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
    "3G3dRNnWPTTcC21myNR2DdLnSynyKp3rGKq8mZh5FkLpeeN3qa8ie1C9qovDoi5KQMMJu7bGyB3TwS5kmf3eT6mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZektNojVEGxVjP1gTDzkWKs6h8aRtL5wrd7HvqnfGiXeU3W7EeaTLcUPBqEUt7m3WCVmteAzgb7BXqXYv37S81v",
  "key1": "4GcaWb9qmNGUpu77tk7hA5uPBFfDKK61MLijUbqvvvJ215Hi3zdZ8ufkkx5A1q31jsgt3AXgZJnDkf7Aps1BZo7A",
  "key2": "3kM9zszSaH3j9LtAgHv4Ju38X3uN1CkPfK1D87D2fJvTKYAcfK3T4pR9ASfAed6oHjhj2gtv4SyCiL5izvah5Tzs",
  "key3": "5FukCsXTTEYukJ56xj7yv1LAVTPpgXig35swXHALyqZV3qt8q4XeXZtST4oHxMA2qnSpU3Ybs13VPvTvpt7cwHAR",
  "key4": "4DootxSg3LvynZAHG3NxxxVkqqC1s1cLscKnTQDP1DwkS1HkVxZL2ppFWpYtvmXD4CUDJavCcQM7bCwDZnvRf2EE",
  "key5": "3cgCBgmeHQpSqWf7XPSYaG3WTFNiNMNd4riuG2JvpUWY9DkDWZvfS9FdGPyhDpV537auAZ1EvSvzXF7jyfLaSrWU",
  "key6": "5yZkPAkYYHJ5ywVehNx6Uo4xBGTKquZA6W1vt1bSnhBD4vxD5MyfcKCrKHgrZj412M1rQnVsFHYpfHXvKN5vnk1X",
  "key7": "5s4zTFzsruZdCcQHHH14kckAXaSm2XgNUrsZHNMvF6xGX5FrYciLKBxwuWzecgwUWABnqaUX7wU4tuSKmxQiX3Uo",
  "key8": "4WGAata8ZSLrMcSL3GVbjj1ZFkFgMGxmVVTULeBNQW3pPD1k4wL1kYpZrsQdBBU5dza5JoyAqra7bpTqKFgr48a9",
  "key9": "fecxmRMjoQajt1jJqUg7k8cPAysUABcsyhkyu53qSxSQQftsjZpM1zjh4oSCSK4BurcxFRYxwEVNrxoNtZ4NSa3",
  "key10": "3KZG7nmECCW2hY416E4BY5qMLqy4rj92tb88ND1K11TQCHvgxtFXhcaueLvf8E5yWMniKedXYhUNeAKfrdrAgA2h",
  "key11": "5Buknz4aqSU4iWcdNV7zBkqyYpsqsnFS49w2bGnDSmz7aXvm5p351sbWVqfuDvaWGvESNNP8MkxSnnkmmY1R49yA",
  "key12": "WNRRQ6Awsa5XXmgeiMdrcPqniCxGL8bQidV5WS4B9oyBDTQCREYduUQJu9NJ1EFCjfw7fiRoc7fHHxXvxrSG5ox",
  "key13": "w77jSZ3YVumn31kcuKb9Sa8dpPGJpDyMAFENmPP6MecBKFvfmyPu9rmhqYvYWBiSm7o1xeDGgbG2j1secX3h7DD",
  "key14": "5fXZpsYVd6Z3ufbrK3rwT1SU4zRaFJjknnoLd6eyFcjjdc1kfW6ui8ahuo4gbhgTZuUtvSFKYncPL7Zr7kCb5c6b",
  "key15": "yizzPgTzXCmfqVzmpfMxG5YXsQUmKsww1Jmsd4sG52xJiGBN3DcX1XkESfY3HhFDPYPrAtxUSq7Wda6XYJBrQj2",
  "key16": "4eN7mp8qBUBnvYwqGkEacB44RJEQK5NtgxtGo5Bxawd8eH4bzVN4AH3FhD8C1hyfKYsHgitQbq3G5H7R2L9uaiqV",
  "key17": "5MoSxFmbo1NiWoxhkzfSaM9zdCJiEDbZJe2LDLonzEy23xQnfHRHwKZjCLWp3466tRogAWG7LXsptUNWfdVnVWio",
  "key18": "3tiZAcg76RGkyCkatScwkxNBS3qmdbM4szs7N92kYvA13AeHj5pyHHmLW8evj6dSkiEe2Cr6v55WFkSGGpuBmQhD",
  "key19": "614i3yghPH9gMKzwCugGPRmZdY9VARZdLxcaWFkQYYRMNkAJnXUN2vNdoxY5RbFhEmQchK6CqUnF4526Y6btJJem",
  "key20": "4tpRA1tmY5XdYggVx23sHr36i8p4o3XyBt4YLXpoDrzagBwNwUX5NvdErHcWEg88cDsAemRTCCJTWdVv8TV7enFq",
  "key21": "AAXWFik2JeQDJtGLVJmh6R7g8Y2imsn1VDzWNGzLNAGSp25BC3xkAjXkxJTJqFfZZwrEbsKpzv1WkgbHYNMNnEa",
  "key22": "5KnEQ2mf7sK1bDu7xubQnTz2jhadePjkqEUxLuA68iDfdhYFz2XvZgtH7RpgbpGpDDxgxBr86rvgrqisHbddKqMG",
  "key23": "4jgrPPFfBKpdTau3LA7rfz4PPcsvYXgRaHyAZcoNxQGXNx5hVNRfjHxFWQ1nSYcbe9FtyBNUNiNXfNb3cLnvG1Z6",
  "key24": "61TsD5G9HQMim9YFL4BHafptwcyHWyYSz6vuiMRsx7BZBLkcDnEKuSZytC3BhzsNx1nU4kpik7zyBZ3aDYb3QaBh",
  "key25": "4YiEHJDVXnhYYQcDAevyXd98Yfh7YT16wR74bSDXYFu5wEDYyrTDWNS3dKF2t6MXpXaVd44ssXG1NSx1Tj4mTV8D",
  "key26": "5cNesx3FU15rMnPxr5725J6qAjc7gSFBAZERZNdteBkKasSNUkkAp4s8g9fu3M6ZngYqzw17L9vw5gnkRKSkRocP",
  "key27": "2T6qhQYB7uQJVirxLhXzLNRNqALEAad6FoFWBj5icwLS685WhUcEpGcZgPDC66bscPVTUDFLChkNpdeGnSZuiVKo",
  "key28": "4Q7mbP5T7Thzo5T1JDTtSWSP7XsLXWkpa5DbBnyYje3EKqJ8A1XPnJsTbtwbsmPQJX5Nnu2buxi9DsHCqEW7nSfV",
  "key29": "2miLXgi88oUWcazutNRjhJGu3WQGwKkupQb8CgXhwhe6K3epnQLhwg34sJYXwHGNBXunCUg59doC5opoyojchNW1",
  "key30": "2X8fM3FFqT3bLsypRjwaKiAVCg4bAD7jT5YvYi7vQDqd1MfnCGZ5sFvGYXB1p3sjCGLWEiqDMjrRAKyxa2TRTNWs",
  "key31": "5ZNA8LBMk5vBq3gbx3VGw9cwA3FcWaD2eu9LVDmWKoz7XC9RuczzEKbXpBdEY9ACicrbjnup66n3huvtFKNcyRFM",
  "key32": "3jo5yXhvNpUqWXzo9XUz79eJPXqYmqTCjrWQCR9waXSC8esYcgN6NTugCxRpLGzdSa9D86mgjrWVqJ7hsnQncWgy",
  "key33": "ULeBxY9yFD8NJ2HzMBtRunkV1WR4Jtbqhkxs3QgHiyEQgy4NCVq1SqHAoUe28Z7U71dDHVCi6WGVJQT7mFttMNQ",
  "key34": "4ucrDLSuXbLtnmbxnH7RRJgwBWrD6uHY7ZcVUoj76Yzf3FAXQ6QuySYe8o8bdwGSZo8kf24pipGZ36pZ252pzvFk",
  "key35": "5Yx4Jq4RL4egW33E1yTdbzKHqAT91jd4aDebjrhPx1WwyQaD3Biy1DmJLNW4Rw75a5gkcb2rmsZHeTQiHBBmua6q",
  "key36": "4qjJ25vq3Rjv84aQ9GGRXEZDfDPCEuWFBsGz4aYLyaroxNgzCbfqpagkkDWrY32nBXwCgTCyA62VixZvfv4aPg1g",
  "key37": "temeosWLDzcBeb6Kna1T7xa4L4cc2RG9JbSincL6xMgc6hqSkTbuTp7hstocvY5JLhwJcmSCQxQSTYi2PPZFs4s",
  "key38": "491rgh7og2vri98fC9QkxzEkKf5V4wfEzTWuwkapdyF3RucAA49oxXLCN6BSvwaoKJJfYWEHZh1zmADhXhRTUg47",
  "key39": "3WiustF88UtMZNf4dMCY6BJ6ez4KSUMjz1vqhNtv1QuWMHQ7F76fb9P1KW9jQsCqK8xZzQdWwDxhUSS6T2oeGsqu",
  "key40": "22RPzXU5mW4Uru8NdGLy6kH71CvuFYGc6Hvo7mQDDXqS8oD3JA1r6o8oyUHbeTFPspTZBZeg4TdFtbo2gtEvj9UR",
  "key41": "2pRDEj8HQUku6YHdE1JtrdxsW9hPkWt2qiT4L1pEKatvdvVPSsr9b35J7mW55VHrXr99EBAeJcduYgAskwdxcuXw",
  "key42": "5QkuXAhxqL6UwdbsmUutuSA6fiGryKHVd9AkGrtLXfvvuT6GR7oNgpwAhGDt1bGL86SWuyHsBwCjJUHDWGisYVKx",
  "key43": "4m6hJyV2gYieMnZEegSFD2XsLU7bBrN5SzFr6kCE6fgH2zKZcMgCDt1wyougYw19v5rNk8Lb13TDaEfgH5DyArPs"
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

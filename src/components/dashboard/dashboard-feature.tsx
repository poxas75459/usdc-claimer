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
    "64DvS8oAtJUjurNpGHEEgcfYj8JihWSge4o4wSgPKfKmhRcFtbGz8ACuPou1iqtSqR5XYm87YZ1ARQXCHpXknWSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5zbNg67D8ajEF2fH6wK4QJiFLvJu9U6YKuJCsC7JZeD2JJzWJnX7iLAkz6VjDe7rFovg59bamiGgg9xkPYiQpf",
  "key1": "5oGPmbKu7rHfDwNvY5RrM29GFPj5qGgoLebYyKGMiSZjyWEnA9t6wTdEU1b8PRabMjoqau3yRWdA5tXp5LhCTsex",
  "key2": "5UgqUaSmWqK2NJbNE7dZ7pkwTcVF2Agb49EHU4ZnKmGFvWE3gu1kyxSh6oD9dtnkVauYurodh4RKpSqPsHeHRHyo",
  "key3": "fLG44CANxuVzrt2KAEr7LW2NLoSEZAh78BHA76pHX2UCkpiNktMMtv7vkPyhHHTvp3Rri2f7Kog4DZjD2jNtXGd",
  "key4": "2fU4zA7C43VQG41kRpGsRM5egs5zi9DzRaNKiQmJSNT8qAhtxePfdjnTuu4496BBBGfJuZTijXovqq7XDjDYP567",
  "key5": "3zprqyz3hXXk8bpuPkT2UCkpoZ4LRPcCnJnpKTxCBTAHVY7L8QtwLwpfT3YbWMnbyZQFQhCZ6h7bejDpVze5UG5F",
  "key6": "5a2mkCCJnzUKUGqUHrMGkEV58PiQtz4QXjHr9cmzFamEpCVdvr1Q85cKp7kiZZtB7VNwkvcFHWFwX8hScNfbKn2h",
  "key7": "4EQ35FNSUC4PosXgwZ88cgkkHg38WzvBqkDjPMwHaKuw7CKm8aW6rur5x6ShZSUcjMdEdm18GxUVzQ7kH6vcEs4j",
  "key8": "2oh7W49SbXnQb11y4SDfCWdNjhV765Tk5cXFg3Sif1bXj6GtBsRbHBvjQuXP81cWABcNTpwim5NXtmf5QTHKBHAF",
  "key9": "4q1vZSNMmuMNZDiJVVi2WSkuFwtjmH7mEUR5vAfNGNHoNDri7Ku7iB9qU91ug5MpreGeJRvPNYfuuHUKak98xRu6",
  "key10": "4Yf65rn8YaFPX3gT3g9fs14962BZaB5VaT9nDfksz7mTZHpyErSSYYxjYxwfem9ANkk7ZrxfXcYe11bbrfM5K6VD",
  "key11": "r9thwPRWGxPagUUA7wKnAJzwfnwhrvcj4gFEZkZatrkXBLJyL1Qp6DdFFVtmPke3AxTxZno4jDS8bZsutdGPXhE",
  "key12": "4bbDQzjJFRrJyvqxiq37Udh9bSeGafJa4T366FoTHTAKzPvnRsc2RKYXN3rQVqYmN1idUBxZZWo7oppBk9V3SWFG",
  "key13": "4GF3xMk5LsbF8wnaxd6qXKFwyGU64wgjYHXk8XCtkofWuRVqfBhP5fd6ks2Pu26HhkPmGF5dJSL7wExob2wyV5qf",
  "key14": "2ZfFgFH2EVqq4kY3EW1uAvUVvddUrJyAuuRhBpxaRBx7ZEapK4eTR8ycof3jx16Cw4DKNDZ7uUH88kKZRryvfnip",
  "key15": "5BSbTSfDpusLha4V7opDpqCeFgwTSxrdoACg6DEY3aUHawuTeC8mP21mBKxxceMJHtS756bufBCbEbMkgu6uKzXb",
  "key16": "3oZXZrEDWtWYteHKCeJW4Lu6qW3ua7eewBGtJWG5ArfkdDsCg6uArCXD3MRGDWsuytQtc8p7aBUchWLvboxRrMq8",
  "key17": "5dLaxWbCnQbpHaU1aYnSLXr1Kqg6XG2mFsUquTAwupqKM5sVktDNqHKoRECKabVBDWzfBzvqi4uE8aL6eh75ea6F",
  "key18": "Wg47AKJ1kfEGCTauuqfdgKGcocVY9zcDots4MVHq7xA7TaNxiXo5aRCr1CAMYEz84qL4PbGtygCERF45GMTdFdt",
  "key19": "3Ypmhaq2kb31EYjh8mQV2iQSVaKSir4yFGrV6WhPhSxmvqS16T2U8CQg4oit7vDyB6ZxpKVMwQP9JqBRG1m4HdHd",
  "key20": "2M5tw6LbsDWY85vrmiE6M87M2bKp2cKVAXgREGhL3dgEA9keXn7Q2rPKY4QWJZkxGMYnJMCxH95ZQbw1xoofx93j",
  "key21": "5fp6VL2vqp5AgVTUuggUtYrkkAH3XC4Wro8ekjQZvefzhr6L5hhUQWgXMZwW63xZg7dneJhB7btfVWQBAgqMSG2B",
  "key22": "N18qf62awc5TVMY27wtUC7tSE9mhYhB2GkFxU7fZfAY7kecUasbVTbBG5HGeHom6TVi1MTJCt4fSxvrBWXkhDT4",
  "key23": "8H9L6Xb63PDTh7EcLGcREsorTB24epPrW6xUXQisfcCCwZYNeUPfxu2W5PuKH9LC1g77kqMMXBj7EaNe3iyr37P",
  "key24": "4kKyjQspk9eTPfzP7nCn6buQyxFhhP6dZ89b5WqLU1xk5AiprxK5oi7w87JLCamMp6Y48zZX3wbMivinSzMgd7So",
  "key25": "4eag4ChW92YXgZ7ZMcYFKhoh26raBDSWoiLFrFaRngs12nVztgRdyqcg21U6oR3GHuCMDf1NHACAiQtTAVzU2twf",
  "key26": "66eSb1JmBvDHpkiKV5iCBrWJ6ZXKEWbDpk1pmbv9GVrkZgm5xZcMXaqTcacYR8J655uRNYpFb5VcjupfdPrXYHcQ",
  "key27": "3xeY2qVi8JjBrD1pVo9y4HT1Yq3hJiES9ZbCMCuDHbGC3MSaSZHBcypNgckE74M1vtHB7HgHjbNxCFjrAnyvaQHp",
  "key28": "EYiFsqMeRrGqgS8qCcZ53Th23FTh2pvLsBUX4Z3VEa7sUKuSX2bXJUnCzZZzywSijTgcBx6PAWHGfqT5m5iXDJk",
  "key29": "2TdnZCZgoDZQ95A6MSQh8rCoLCVtwA6ab8rdWZDmL1pqku8Xt6p2vt2JmyfqsZ6RAx3bWRAmyBKvviUEWEhQKm7f",
  "key30": "433j1ANV8QeBfGLVRRhuChSrWcfccpNo4KVdMR7HyjBCde5DJYG1tJQ3NAqdk8ZKppGTTfqGfu6R31Ly5ekfJMqW",
  "key31": "52Y4dcQ146pHJ3j18YzkM41LmzjEGrQEbxPhAUzaHkn2d8HTEUThgbJ54g2TQabsD3yuDyXRKRSZtandtda2qoAG",
  "key32": "4EgTNPJK6A9nJF4P2wPs4m4q7Yr9kwiij438rJJ7VMpBSU1Fvoz5W2X8AeYy5Jo3FTRV57fM6q2Stvz9pR2SVTq7",
  "key33": "3UVDpC1nxLNJvtY6NmXD2ai4o1KeQ4Ts2puWi4UHAc7TuiTJhpfHck12uvLmWRYvtd9Nm7n9W5q1k4Hv7TqyXLu9",
  "key34": "4Lqxu8mxwLimcv5fzTNRj2GbSbKtoenzXRCVnm2FkdrLBqgUwNm4qnebU9mkCPTdgkf4zycpE1Do7KquxXs5xAaJ",
  "key35": "4HDhToSA61SdcDVk5ct3PZipgGR6pEzdtuvrqpopAoHmz7rUigfch356FBHB1rWbezNTPR7G4vSEUzqWmGfdmtoK",
  "key36": "2yG6HuCSfrV5awE3xJGyu1sLQqsnureWCGsDpRhxLXL9CsrksViHei8fmXArMKMwWKb4XmFDshS6XJRKRKeKkFQd",
  "key37": "C9Sy3mFWxfmrioZPs2W8GDkupNrWMRnxKdGApH6fGQJZQt9a37Bcgayt1FFwocpN8XAqxLJyGWtP9XDNBr1YH2F",
  "key38": "2RWPprjynZuE2R7Tv68CMumMz7tCYS4U5uy6GnL3JRtSXLSXtXswf2MtenB3wPTBmZ9or8p1ekRbRvLgcQcrMBXF",
  "key39": "5LRS14Ds58eVg8JRGXC3VCZQ2G3VoFH93qY1tGBMMSt3ZEXeNi8Bm2Nz68qmUGaxtsGxVfAzFL8aVR85EnsocHAS",
  "key40": "5T1C3yGpZg8jn8HSmBM1KsBo5Q2F6uhhPT2rATq9wgavQkqp4TUhSc23ytsgjx4QLGuG94pZEaNH6eLQjGHH6gN9",
  "key41": "2FG51WJ5hjHMExxGmS7iCc8BPzg9hqS3pHtRa2D1m7ahZwLL3M3YCVs3ZLvSVMPVxCGifkxswH281EHmTHTXYZS3",
  "key42": "5dv8GNABexa3iBARRxjPhzeufLBHnJB1vrQSEW933wsfcXADM46NT3hXqnZJMrLAZ8nH6oi3EqVYESj1FF5KugPY"
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

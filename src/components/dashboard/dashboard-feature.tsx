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
    "5iu29hks7M2MtgkM61WwPWcyuvjUZXWs8LXGJq5z9XbrPnJ57tKQfYReS1wKfCP3sr2p9p4DbVhmtAPPjJdnBBuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXdzchRydg3xQJhvN1s6j4h8XCcudbsB2qhrZrHkuJoMqgMHKrRm7emx4cJEebtt6mMFygZQ2NE9XN1qMCnRzhz",
  "key1": "4Zk1pAUxQQfp7jU6aqjMWC78VABnU4svaDjbFcPkhsUnLFuswKb1tjbySJ3L5ioxZeQtani3trNPoGYZBz1ggKa8",
  "key2": "2RBLDHhCUopgoCuBR72UeqLKYJ7keszKFZdwRbVbGeVJUrRp1voLPXtCCqHkwokCxL69TAPsyVLrZwBk5rQXqUih",
  "key3": "4omde8tF9c1zCBv6ELXtBLVSSrrjfnDWVVWhhBjLiD4DKsUJkramZ4rJxWwU4jFneAroqKHcZ4kiMMDtBnk4WRGw",
  "key4": "2KknAdri6kgagaN9DkH6pebwRzZQ9oPTpSpw1G5xUYJG85ycHHmVwHYkg29oocmQHKELvjyGoZcDruAaWBBRnUxB",
  "key5": "4PpUkGTaXbL5iVU58PSbX6kLT6R23MCkhSQiaMiSPNNGBM5rWBvuB6jF2SZ1i8VZt8ZqHtcSjFFjXtGv3TExfPoa",
  "key6": "4bguMhoFfXTwkyCe9ucY85bjXt6TxqvrXGdu8mTrGWKMfcb4LNa6o7cJAGVpXPDhzMBHiAfHwsXt986g8EPJFT1B",
  "key7": "26apZ9JJPyesFSXQHijBUihbaAFtsFb9nGsy76hbp7sJWCQkBhrvrD5PX46Q88nRBmjmwUdvHzxZocZ4XNbgKXET",
  "key8": "4w5cYeHZ92LTZZ3G1ncgpmXC5xnGysPtFAsEBwLxxpFFVyZSrkLiy9N2APbV5NhFK5PGFs6zYJ2ZhNa4gKw4Me1k",
  "key9": "2SAg4DkhYMiBT5jDT8ySmQVyiiEzaUj59kiTCgx9yeqV3CPRgEub8jqYvr7JWcTLMzFHhnEXkkDvHFhzWPvveb5B",
  "key10": "4eRBNqUYDNjUAdJbtYrH76GYGoXK5o3MAEndxXD75nhoqo3KNjaV3T5NqaYfmFqsf6mZjkA2HDSTCKRHhVPM8Tm",
  "key11": "2WSr9ia2b6TsvdoyiUxihFfN2SjV7wdPdik41GchuXfQZpZRSHmwkC4iQ1LNELxcavGQXoTKTmUxkahMLKxeLM33",
  "key12": "5AwAmixEJLjETH6zheKkUKUZrQVfxYRhdLSbfT7NgVR3B3DSxQg8VuJY7SWt6hkZtL7QDwyBWZ7TFZgcH9oqhuo7",
  "key13": "2fvxcQBjPNytNn2TJXJb6CEmfo7Av2Nqr77STR5KQUiy3n4j85HMiHRVdSxWVtu47RpRGkc8r8MzKG4jvRPNXgdY",
  "key14": "2VnAeHt33wnmhTEAL5Jk2oqNF7GFmMhba1hNf1e5rRrW5eiJs5mhA94cng7n4o7fyXjwqoC2neYQ1jKAE2AwwMUm",
  "key15": "4QNunNKAeiZ9d4DpyaSeWZwootM5a3dexZK5562z1SFQYRq8RrGTB4RjDssztNpvqKgeNA8m29mArAeLv5CfScf8",
  "key16": "LRApJYjVGXDyexkZWeVQWpkaqSAdDrMf7W3ogCvU8gAQgSribueAMDsuDDEzU18rBzzbgMeacftiCKXehrCCPyj",
  "key17": "3QvcFCz4AqCkzvWF4vDT6MZs6DNtBb8usVZaqhDC6vNdMscCqYJPSpLdzzEKq2pReSRRb7uzEbyVdNT32TLMAyS5",
  "key18": "4UBZ8stfXQE8Xo957Z77KMLmo4ZRdLTVn46xmqzdz56fJmYk19TptDHhyxaV7HepKekiZski3iXjVXwWqkUexBpi",
  "key19": "5nD9mC9jNDz9tmD4eeTeVzbqg85EPEfWi1uWXaFTbQXod1X4jtMkbMgeLBMqzkGirN99C41YYRuUnsuGus7C3w6e",
  "key20": "4DsCy4FH8r2dnk45Qf83g8L7P7jN8jwzbEYUvdJE6LEdHc1AFvGXKaXPpgXsppFU61mLQzNfUkBwGH2vetH9Uyat",
  "key21": "rvsCVBLVsU7sy2tMRCfn2UXbym6fsPf8HNQxAmTFBvdwk3QCCyzY92gTipxyGgJH2B92Y87PtWzG8Tqi6UtKRaD",
  "key22": "4DFg5y1S7AmpiRYJDQCNDGv8EncCTTeR41Kxx43tsjQj7FGSuhhazN64RiDy7xANYSc6Kh2aRCB2qTctwCnAuMNb",
  "key23": "3YjzAuJFh37pcxg97MAzmApqsWoyKcA5N3Ca6CQMQLdYHsGUa4bSzJibHypy4dT5X49ZiCGTkgPBkimREaarVhJN",
  "key24": "2RZmXJT9wNDKTUdYi7K2pq77YDzoQyiEn5eU4hjaNGaSKm9UEMMV8G7oW4N7hxkZyWdfyA1KG2BAymtD4C2AiWxy",
  "key25": "54nWmYjygCG5uZVbUPACxy3cyWAPhMaeeLmaB4mscb23bv17vTWmY1xxgHowgqNpVUG784wpcfjv3czVs5zXtHtm",
  "key26": "2gGfdxQ1HSoCfDUtxf6TAAvcAf8kyLgUv4UQQ5r9Yh9eoAXJX9vZV1fxhAdVkHPkFvidrg4uFZnKsybHH4aJLFnY",
  "key27": "5SjhMbsADRD599BGdPcEsz2AWtg7znwZT73mGB2N4kNziSzTwf6bKYeMGr7RfyX98LRPqJ6SoZXD4z3EMtvcB5A8",
  "key28": "128nYCKWihAm2PuK1aCWgRT5bFLWw9HC8cLucaw4xQvf3a5mCAnaZjn5ZFa6GSbLS1BB61HFnaahixF8Gh7R4gTk",
  "key29": "2J8y94aQFXYGSNTSnQwes3odhg8uCVqbaj4LZwwBsAUbQVXd4HswXtXPec7YEJbH2PVdT4UW5DBGbDnwekEAay6W",
  "key30": "3df32qxxKqkYusnrgkaoumd7Yq6VVpqekj9Nk3jwbWVCgMERQ2hrVfo2BUG55vtivEXzaxtmB1RnS6CDbazzGUFg",
  "key31": "3ukkeqgPCMQy82Sw588phXS5aNN8HWLG2ahXX6iXyGUZwe3Wp5KwjUx1QHETd84fC47Nf8Ta66qoRwzqEsUWNE9W",
  "key32": "3oL6iRRWwc4gfxoyxvn4wmsiyUBYe5AY6vMg1BdAFaYdjTGvChqRU1WmChQu1yrFPAATuo9Ljw2PaCsyGPmccBvf",
  "key33": "5de7DRcAhUTH8LYMEdG6DWZVjBu9vNpx4su5PrzFSBod4Yhr7VbykpyP1K9KKC5GjtcgK6HqYVvyfvZpZ12Lbqyy",
  "key34": "7XqPbiX6AmqXRpauXsZun953FfmwdDbyQ1oKDMJoBj7DW3bi11SKxHa6fLzDdQRLN9MuEoPJGxs5Dh3JU1vmrtu",
  "key35": "5mDc5zcTu7r2hb65NJJYRe13Hw2UA3BMaQibdeo7k5hTZuLdK4roMkDASz5g3Y3zomqjCVoMfYwF4yFo8xX2JL7Q",
  "key36": "2254feSm272QyomRkwPTL9QEXSKcTrmEvNwwtZbme33GEJCbe7YqUNbK1jGMBCACKF9tNk9gbFfC8TbKwe8n5fQe"
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

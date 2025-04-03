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
    "51X7gnXCPjwXPFpuEHNsM28tD4VT1zCFB3dbdAckQZZfhjRqrVnFViLAd83sE2JEEzmyMjhgBpdyUrB15baUNv3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJ3oP7t2vKDApkaFcX247JhTGNUGUhowiL67oWUf9Cq3Rb1vHVAG2WyAg3BDmU1doZeoVMkEuuDbiz8MZYsanCS",
  "key1": "3yekohxhNXhGc3GruPpFDQUbxQPUVqZtKYrNAFiCM3QUbmEiVqnkaZ2DAqrsQVtUgdnGUD2b91uTzDDcuGnkVx97",
  "key2": "5bmTm6zuvCAHqrtsZcXg9d4L78ygb9duTxqWA6Uvov6Lt99aYzWJUf4V4eVTfMZ1kT3HwxgsibpXSV98aHqJ6vaV",
  "key3": "5kYVU5rYjgNKj2W9v2ksDBbED3tERCgQxMKntnQBH4cFaVAcK5qKaRz3vQoBmyJRGauv1FepWzGckmd9kZ5YpipV",
  "key4": "48d7aMTKuX9JLEkuaTvpYfmmEzAB8PV4m57cBkEPpBaxnencqF5bYPXHCCBHTogpRWu5g5dXru6WNnyxsJ8WAvnx",
  "key5": "2Dm31dRUkb7APVsUKfdQVuVaDbFyLJuRVc9d3MkezuF2gdHgDyKjVA3t4gYWb8nDvBNRbD1K1opBj7YyXAKf1Ent",
  "key6": "24Yo2QYgV21JQHLpSF7oM3VMarhG1ujZ1d64DCKEAWiDoLJooXhny7ETozMaPxi4ep5kZLM2jZLQbxPYvHuKicB6",
  "key7": "63kohVot1gof9Kjvryq6dyW1maSu1z7CHiYjBGC6MYxRTXGKNqUtV7aVGMpX829NvyZ2mQvd7HyPbWoSfC3F6t5W",
  "key8": "52NzMAaefYY7UqUcwP7xiTg1NpL3sC3pivEsfU2rTCjK7N1RDidSKyYgw5YaU6ogTD84T1jQVqSTAdq7tQsXKnKE",
  "key9": "3WW81MMaYoT3hDxKMCbQvroYNmHx2XTr8fkh7biRmAqmRFePDpCssgxgE12Mhb1aYvMD3cHPhDYRmjtJE23YqjWZ",
  "key10": "cqFusY1Lik9v7uChGVEdYRRvw5SK7HijzvrjCEQzdajaDHtR6zy7JSejLaDGMchkDe8xKbNdfWuDVf9gVjWg7RY",
  "key11": "rZpo7foLVo8EUuCdYXxgVxPAe9sU6ygvnXPRqNstXt3mEDk94w2TLP9t92PWDuzFH8Q3dZxACutiqrsWRFjRb1P",
  "key12": "3zBqSM9Fk5V7zrx8YpSqGVy8cNXU7hrupcCXJhnm4iVi94DWa87yaYSJhbBgcxk4gkEGZXqex7n6tZ2x8w9vbc5k",
  "key13": "3soBHh85emZYZB7uzhE23BzRbJyuRqW9zZYW6BkCX7PGmLMqUbjRqWvLKp9nrpXnf4DVpM9BmZa2A8ZKQo3S1aSJ",
  "key14": "29CTqMXixLMEKBKR7gZmK6bTYUSpEhmJ7RwCLqsJdG3Mvgw3nuvNxarggDnqQALQrmn72uTXKjYEGgfVQz5icdRq",
  "key15": "26h8bw56jADgqBXaXJhKyiydzspFcckVxJ5ahxneQZsZNLXBBs2E7agBujgML7VTboLdRwXFSA1LXnM7DzDv97h3",
  "key16": "4foEzJJuGBPby9echqT1xUZFowH3G4fmjJQnFJDmnJJqkeAFcbCBT2HhuyjwEqohjcPysoLiBRKj94d7HdadLkmb",
  "key17": "2Yg2P4tvbEz4aVTDStutA8PNcttvz5kXDtyk4XqXypgaxYZyndaoxGBoda4ys5j63aRMd55zMjYm9naebXvvXefo",
  "key18": "3kuniws4adibvgeVr5SBpctZs5U1V9KnZQh1Bnsvgoom3Bxz4fj6Q4MoyWgJurNcsJju7ef2deHBYRJVnfsTqio7",
  "key19": "3E5wxxZXnSsJHLRNuH5P4aikXrmP1E8Rqdu2iRLNnkzYpb9AJbFdo9jCBrVXDgqDdx8usTTFeQfduWoc6WewE8vG",
  "key20": "5H7MzaDrq3X1fJ1ZNgjGLmEX9zc8dE4rE39Hj7ozcd7yxfKX8TmFkmkXQBVBaa2QERkj2XAB1dSuS6AqVrm3uooF",
  "key21": "5YYzwm1a6bocGsxicaf6LTTiCXDuvGbBXYw7oBLbpnuQtvapFaoRWdqD7fXD4CmWYLfEMKbMKt3R9Kh63pGBuBj8",
  "key22": "tJjeR8SGd15WhUm61w4VcgxqL2NpzxDx9JoBEubWwq88QrRk6qGvH7uSRLFgF88YAm7nM4dtkDT4bf2KgBWFCCE",
  "key23": "4QWkxj7LqGSZMGhvS136BJx35PgY7hEtNLzodFRTFf1miveLQjvu323QLAU8r8wjpGXwF1zc1xbh1sbpR6RLphtg",
  "key24": "RJQxyD6mbk6MepHoEjtwcMuaFgxBGzEhzouiLVR3sUKy9AEwi2i1KxHBBDLphKFTdNozABtNMkwGiWzgSo9VyZA",
  "key25": "5FEFbtA1nrU3GzLaoZHccW9e4ULMJ4F8JpbuFz7u5EfPoRWeDGKb86tvpUpGFzmnmRCxUw1kQUNXM2G6xDYxh7MB",
  "key26": "42Fos4L2YWGbL7zEiUUdHsQLyCyB2Wj34qeNQQBzNpnUpTyNvR58cABKLjPbVJqtw88FW5km1avCx5XoebgNAQiG",
  "key27": "2qKpi4xFiTjbjp5MHpYQ8MYqktQ25xWcbzc3bqZTZFitCeBavfAXCi5XjL59s2uQexnucJGcWgojwq71cgfprcZx",
  "key28": "3H4xCbegcSHTuRq787k4ZhjYz81jQ7tWhiTZq1xaiDjYRWTGshCEzpp4rQ32of7bLacYWnrXmiYpHPTASsLKgPkT",
  "key29": "26D6BKX6Y7UUaYBEw9XsaSwmJDrp5hLXYU2UCrbdEnSDw9A4PNyfQgKJMPiSiTaCZRd8vVUiNx6sEwoHQQixBSP3",
  "key30": "59pFM8mUjWmWAeEnrqzg3XP8PChFduUsHhrienww61wJ8G99aJqmhcu6G5nFnPbfZugKgSCSKnzhDaMLb8BVKLW1",
  "key31": "2xVLVH5jRce92Zk3avooEqgQ24TYsJe8MGMnbPUMinKhJoio9NKYKzVwkGMQjcMgZKRfs4GHJCsApAc7pd1w67Jf",
  "key32": "5JwR8HWi2w6cNwm4jGQaFmgZMDcWASJSWeV3sEgLrsEwXzX48aMWhZTBki1jHYcK6Xvwosf1pABfXs9KsGYTUUNe",
  "key33": "GGRuaHEa1dtSEfY1WVM61JLMzCxK62UrhXWdvEhd1Q5oj2x4FZQ13pR8QxdxBEvMzHVjuwRw7UZsbiFx6WW6JVH",
  "key34": "2ejMNfxJf8VEibm7vxquTPWGcfNN3CrZxkT2APhSiTL4sAnMeQrR7gabE55MhhXihh32TueU1yNTBnnRw15nGHFA",
  "key35": "5Y786apyKy34ZuYGVstghfXN2zzQ6Y8xbFYR2oWPY9Xu91wnwGENHrF79TyZZAAc64JDHHywuc4hgAKbBLszzyce",
  "key36": "vuxEnzhq3iSBzk3vyRUDJJ9rKAtGt6z5uYfwwLRDktmHxyWX5rcyUEqkAyu6GFKffVeZgasip81ZrD82J77TmLC",
  "key37": "4tks4ZSe9aDEtNQqayfSux8bp1JAawBqsPENvhKh19cZDuWhYkY2cfvXA4G6Mg46R3izoC2jf6MnZr5rY2yNJe1V"
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

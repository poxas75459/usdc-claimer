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
    "1SfWgEPidSMEZ3wqf1eaLPcsu5eUzLBBZBM9itczTBwftCsv6iHgHq6HGSxAbMDhCFttXpvSsdWD5VM6F9t5xLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dc94f8eR4is2WSjpB3v533HDchjNV5N3zwH64p5UWu9t9JmLcaaWmGPkFukfdeXiyr5j2fFbzjBTUxoBrcymh2A",
  "key1": "gKJ995vRF2a27VnNABLQpw2WTfSNBxZxCM5obsYgRcaceRGtwJfMFN3RTvEuQn2iCEWKR6cNheouQbNiUvEq4rj",
  "key2": "B3ubJmaBAzbdvcDH4KqG97tZstRsBPwiTn1LjEKzxyW3gbuuVohs5Wrc4DRD55qUrdGwYrRNeUBkpbjAt6jUhRr",
  "key3": "3HQk6L44HQx5nRPPCSxvWpWoiePdSKsjRsdkD18feqUx7fAq9NFUCv7xF3uxmUU3XEVg5rBEQL32kbYTBS1X8sVh",
  "key4": "21zq5MPii1ZAFVs14vEn5eXY4k49eFi9adD7XBzh6Zf1BDpfjtvKGzw2HUSK61KxGbJqcaNVqw9vb9SYHrip9DrQ",
  "key5": "4aAQfGvrrPa9WyhQsxppNJ6Ae3mqhLYYz2hX5qGMt4X9pNgN2Y13hRTw11r61R8ibjUEHRkkC83APGKcJ4BsbEmB",
  "key6": "2aPGt9hEBKsxCEcCvixqJkzWVV3Twu3ZywdUDxJ6pXJc34JdVGnyxQovD6AaA4xzxSbtSkb8NWhXisDxDUpWX3ev",
  "key7": "3LRFJb6edLLKLzfuy676nrhrxVy3A1gAoAmSQPaYYqtszYwqdyqdpUviKSuXPzLpNcdzTMNqpxp2dJbyr6oryV34",
  "key8": "bfwkLT4JyM5Y9VfL1WhCPCU8zwnHb2xcvMzeMuuWFNgs81bjSPAaZH5YQy3zZCtWZ3DRhC6VbN99vFxmBbvUBZV",
  "key9": "3LoE3AuN6wemPrtL43t7xPwEeADfX1UfDSJ3XtQkqFvzhmgVS3kNHjVvSDENEGWDadHqcDoo86zvedf2Kz4WAmvz",
  "key10": "5SNqraJycMYGx599FFQDS98Cf7rkf17isfAJRCMdvjdxJpFoNjYpLYQVFBzbsxWyBCqDZZcJPreTsoKHf3J9ok2v",
  "key11": "9PznxDn3JLmLxq8ScyDKYwY9rx4z4i5ZZkZDunis9QnndjQXFXyJp1vLTbsFRjd4Bpmw6zAKdBUox3a393gN7gT",
  "key12": "2nb5LVR7jvZ7wuHZHJwmzYHKnu12bYjJuiyQ6yCNbXBaKfRQn9FZEmX6hEK5F64DwSquzGze4VtittK35PS3AzBZ",
  "key13": "3xCE4tsSj9Prz5T89JCD4bp8ptokitwbCR2WY7hvmv9XSKuxvBrmZKukSsyGMYUGGhqxJ75ZyxcSyQ7kbxwArpt",
  "key14": "ePpHFMwWkdCmkF62FCLFdpeKY4BAiqFmQ8iJ6dsagpEv5M8fiZQAinNJJ8edEvZSc4Fp2Q89m55KMhY7f2Xfw7n",
  "key15": "Mn3NnPLEUhUtTw2tyvbgZpcwhCF94xrzBNkrRBAHZiCGyzBcbdHSEeF7QTUnAnXbsFSRRjhuwzGUUuer36YT4kF",
  "key16": "2eAUAhTfR5fbJM5j9WeRxDrbQE1dKyDZrshe4RJByPg9UGhEKCub5U3F5FesUifcxfrHG26fdER568DqciEjJHzr",
  "key17": "2WxSDcc41bgu1JZhxgApUvxV3rc2eA1cJZJhxFzTNc6X8ZvBBH3gggNaHPe69Binpn5dJcqNBjpt24HQEQEH6ex5",
  "key18": "mwJvgnrAKNCykfVvxwNsaj2xEWVDVGgfwtC7VTjz21wjzfPdkuwgvAvMB34DWT2ckDqfrDMRpbnjDzLtvjeaqF5",
  "key19": "2yJtNmkRquf4Qkeo3Y87CEWsnvZ6bQGVCyXtuDUo7hSjeHN6VMArE6UyZBDZUsanZvCpempzgpGxUQaBSvdBqyZC",
  "key20": "5cqfYuvhNvnRXABtUBJijCeabuTW5xS2UA8ciUtT5eZWNM9PPiUUPmr4FucDgVTDf4NUVPawFtgpBJmAvcVu5uvC",
  "key21": "5hLkRLbqfbZR2EUSvpHzHqEips7TQTCPjeYYEBTFYZmTqnmEmr1yWrmyaowULBN7j1DCCiUnzP2eunHuNuuLb6zb",
  "key22": "3gjdzgra45mVskZ3rvMMrQKpYUZJRDc5njXVW1VPh7rQ4otV3kXzrZMAGp92HWhLgnCmkStYgRfMv5qa41aVr8jc",
  "key23": "jYeR3TfEE9eLmrECADnZn8mcYmsSXqbNs2m4ePDuA68MikEqjVzAQH2rmSdLuMapSRP1p3pKY552sS8RBkfEuTX",
  "key24": "4XmM77EP4kcaf3vjvYc5v2mrrtcqDmsQXPx6jbwEY2vqQ252AsG1wmpbKUxvLhb26PF1yPn4yAZbq3nH1R8zM17t",
  "key25": "4kNDsgXAPmGtNyifTsAdneBGivfJ7CWZAjSjPRz1Lo454SLsCpWeU25c6HEeRbmpQWUG5oBV7tfug4m5yU7n5Sa3",
  "key26": "2QJnJp8jxFnXE44yg3F59BPMcW3NHLUd8cNuQczCLM4iNydZPjip7w1X8rmLeFRD1cSzTRrrJ7zB24HiieqW3XMK",
  "key27": "5aFDLttHStm1HgmXCr3jzmkc6XSUJpsANVw4nVi9Lcwb9E7p2pJ1JajYBkhtWuPLHcDw6qQ8q2WcdYGEtJK2Hy77",
  "key28": "evVzMuLkS1kXVNSwFxhmHUphv8xMV76UuvXnarHqUgtnpx9k6Qw61EfGfsgUF8UHw6eFHaYANr3Yy8AwgsP1f15",
  "key29": "62fwWTkRqUvsE9DymaGB8HJjJKMVL5b7p5pBPcexVjcjcue7oXJatBjTHY98XozxuhezkzzecwBkuvGswGkSpSrK",
  "key30": "23ysit11x2CcEr3uLBqjNTeHJ2Zi2dbr1vKDKWbomdVGSbycv8BdzKzfawCiQqfKZZarZgsxjX7E1U23NAUTXMSZ",
  "key31": "3jszhVkJRvJZH345juMP9iPPy91ucmhrzBu4iT8kcWn1XjtXnMyLVhBtuzeZZmF7nGEmmVr2ZGSMq1B7YtV61GLY",
  "key32": "szRUmGW4QdgMDCwNEaxWThVA7RVE2JuTQo6oeDxQTzfpMSUqio59hMq2xBC4HwiBrbLu5K4GM6DLe3ZrFWTKUWh",
  "key33": "3rgpnz1zV2wuP6UjqLrT5KCzymGgDR2LRR4XAVGownD1Juu83wvi9pNtjAMJ7wsRZMgmUpLA8wF4LJ7LcYpwscZ",
  "key34": "DKNYNrAMKC9ugSyr9WLn66eFJqz8wbkciP7FweyGZCuDyfdXMwtjya459aQXozrdttKpRFNheZQZpJD6E1dW3Ge",
  "key35": "34FayswsawkdkTKA9bP7brwi7APuL99MZy9dfuX3SttRmiUckY5fLDjEPxU4Y7qZScDTPEHTGtBLGMJPY9bHUCgs",
  "key36": "43YtBwcuKiTWGULekmR1A5hn3qtsakAbjSj8bimUtoTXAKoip7ryQ6EYnFvtzbzjaMUnrBsyhDsMnR47ssQwaokK",
  "key37": "VHzMM3NTdBKz6H3KdHontVytbarjUcMu7ukGg4U6AMsB3bXXWHjS4Q2rEZ3ZrymGCQCvDZSeALKSAUAvcKWdawJ",
  "key38": "4V7HPtNXJ71syQx4W4VgKZeYUk3jXij31xn3cmwss5JoWSBioxbvgMXMR7C3zYShyBAUUJRppvjhsF1wTMRV1VQd",
  "key39": "2YkyGXYpsCtZY7YJXXZ9gzF9NZ5usg98iWAXgqLHtDTUbWS1g8K3vARPyUjT5cFGCsB2d1hBPMBytQ9qW4fYXB2G",
  "key40": "5RKu9cJg8bSR5xGx2yuUG7FU96CN8M2mqiFAQNqKEvu7xMMMSMJBMe4CWMScEgR3jg3FqTHPdCVpT8brJdmb5izv",
  "key41": "2oUoFN3Wq5mG7kDJzVK8od3oQRJpxBpsNjRk3WDgmg2CiNqGFdBKc7uD5MxkonXRb6TYPky9XiZYoe88DDCZm6W3",
  "key42": "4ytHbGCeRfDLjwMjoZyzBEouAa7tzNDNqHkV7VpLDzwwJ5KnAKesoAJmXkpojK9XJF3tWDrajH6HncNn9pDp1GtH",
  "key43": "4KQDXruzueUdDuP5xsv4rL4nA8n1zVxmHeZfUKxdum6GGtjk7Gk16BrcS3BFpmtiEQCAfYpsrKSi9gdQCQDWoHJx",
  "key44": "31Ak1QdAy6UL6iHLBSCVutnTcqxBxqcgpbZG2sdwnREqcD5c1VbvdpFmrgtLy37mMj6oLPtHFkwnnomyWd8SkmBc",
  "key45": "4H9sMieBarhaoFiBvHTaNHF5ZMUCSJ8DsdKFyxWsMWk8FGxzqGFUNv8qfAW673w4Sk2mBUJD7RV5bTwgUEF7wYEd",
  "key46": "N5zc46m5R3XVgQ4VD7TLG9gkYM5NSPGMN4xnywYJuPF4T7unk4VB363n5A59bSfrCM7PYURexMYugxKhN1AwgJi"
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

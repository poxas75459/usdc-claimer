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
    "39c6smfFQ6qATWygLbHPUCtfDWFiFYfmaKXbFSp8cACQ8YAtk8wEctWge3wizPAUc9FGVAKSvNQcGNUwUuHdQVPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPPyJ6MTs5X5hWcYcjgDSa68DU8UoYgsF3hqieQMQFm5nV79UQiD6ynLJ2mMdi4xyVRnitEwxVUV9Nok57j3WMN",
  "key1": "3iMoPiS5Zbzdz3mZkDKvsZCDCbceXWpWUWPwqs9DHSnExLMCTi4i8wLd5feFAFSpi8PxgxLkTxZrPET3qWrWURJp",
  "key2": "3R2Wn1ik7EWcCh74wfx3yps9Mu33gFejNSj2pWpuuF6BEuvVGGCo4zsqDKYrgL1Qggge2nruc1gn8bPZ5eQETmCV",
  "key3": "3U8kBuJ8ZiWwDWd8VQeGb5UcbJAV1t9dw1D6435VZ84T8VAXnQkPj264SMxR9EVx42BgFnQFyArf8KS3JJzHP6CG",
  "key4": "jtcu1bkokq1VKm6esCDyaCcKxHGU7jERmKnagWCG8QskH4d5ZBhbbPc4epdA6wha1GZL59tJbEgwsYiF9TT7Yof",
  "key5": "2YUsQXk1uARXb43xJpNsCdfcx9yAe4VQqcAzcwn329V3iHwPuYhMTqD5s1d9aBFeJQRqUApUnbWmPF7ceWwcR8Ut",
  "key6": "xLejTsCq8coK43zF1L6qmUiL5MvDVhg4tTUYM82UUf67CpsbibXUUGCznQ2LsH4qJ9WwPNTboys4kb3kBkEsFzD",
  "key7": "5bzzsDCNy7JxPygo5M97aoque4kP1nJokuHttSThAM9KQu8GkrFGKAUnBeM8rnjSzGauwQLfFvMMWf7MdvMMC8Hp",
  "key8": "eDfqxyKzEUm7RF12qRv1ygmMG5ohWSbcWW3B4Rx67xuJvipAu4p29PuMp6dwbUxXHLvPp8WpyMvexPtrX9rxeYV",
  "key9": "4ZhBJ9tAiSCB4wX4kKn75LgDRucjmpKr7XmmLvjL9qN5RfxgsbEbRpyWsh2sYJ9NydAQF1zDj2jU8cWVMiU5TJ7L",
  "key10": "9RxFhgXxym7C85My7S39knnpJd8oZBC7RYd3hU3paPkSP2pvMg1btp4yuraAbfLvGdQAzTaWeam5hnYUpYbs5hs",
  "key11": "4ahcJXRo4gDPXPQxC4mUib7TXRpseJB6AKaHiFpujUpkLydpnkVyeDkxXTHP9CpLqvDGEbZabYHh6EGap5MxAsfW",
  "key12": "5yoQvjJ84CEzNPSufM7WgCNgEwUj1eUwhaAt3MH3BNYLzLg55vQ5tr496TeKC53HNPFMfkDxjG2ozMsDUCjcZbsi",
  "key13": "2ZrspxbCjRvjv1oJLRp6TRBwmb8ZWbViHLnfQAjiu2rJqfwwdH1NYusaP21u6KEnB42dwXZQR29QS3SigLcqK1p4",
  "key14": "5A4QGcPoXBLvZN3DnAKjQGeomuSQUNysJ19dEB7osaq66XaqkdkDvxTHUYSWPGtK9gbFaanGSdL7LFQgCdFF5MZS",
  "key15": "2mJgER4vtwbYZyGpGxjQYJLQC13rm5X7vidSdjhPHdUJ9A6RP1HHj57VkVCWZn8vcX88ikMrznmnhk1tS3oaaQP4",
  "key16": "5fuN95E782gADitsYBcm6pJ19iovMGZkZBC7quvm43CvgVZ9Wfh6Ga3RSH3zs7U9dw3nWC6cntHwP4bc82PtGgZ1",
  "key17": "4vAeawYGQvYUbKSibqFsN4LsH9K3Suo2BHVhEk3nvYkjLrEd61QnCRLKApV2puhkNEaxVVC4zuPpgnckSYDxzBvy",
  "key18": "5CFzGRGJHDKXzGM5YNiGpB27rKT6Ln2dRQLBCAHbE95M8b7KJwLX2vPqY44zXkK9gzpWgczzeVf4grEBQs4wVTVq",
  "key19": "2iHqugpXvCGc8DsiYLkLYAFnAEpeDKmUufFSKp5FiwUv5TbpqommToocbntuqt3oXcoSBBmy5Tdgtjr9ZTcVxpco",
  "key20": "3zqWKpLtCvfrJGWTRZfUo7QroHfmpmzUGPxvPY6Hy5nhjqEaNFo6evLhRDm3di587E8LzfvWGP3WY62pTkvCcpxd",
  "key21": "4YAvovE6CcqBKFoGRagwSQWikHkdzbCWg5tP28im21X6Uqk9UuaPkpVWJ9sngsmqFhUSefr82zDZGXJhoTY78xz",
  "key22": "LrUx3fX1JSnHWPcQFCX9ZK8ydhB41jCVtBpLGvoA8RWCPYGotyNZyrYe2p6BiSTyn9YUr6WKQFcjR6maZeUSiFm",
  "key23": "3AQTBLGMhVywjciWu3wF7awtBY4dvXKi3EULBjY9jxS5YZCyDwtYjiiNDSs8tZ7gEkD4jz6FS1G1YjVsFZrd5Xam",
  "key24": "5hvoNWsnKpdhYb4qKxH5XPFFXiSz5oqQNm1Q2PzTNzxLa8z2LwUuvHXPaLsvtdeVuv91ivfnvAngQAJeaLtT1ywi",
  "key25": "3yERpfAd7LCW1fquUE6C4wYov1kNED6yhKL5vQV3FQdh4pFxV9AP7Bcuqb6vrHk4pNkp6SRdbAg84dbNiPVye8Dz"
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

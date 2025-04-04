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
    "2BbdGiiE1zQK63LbcXfBToJg93xnRL3fiKqjVvBsniSRFQwbrBtEsCbgqNCtuHAo2uEp1cMcxmDSrhvFF2tAaVC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsGzvXGVHYVmbRDVmb4ftHBA1pd31wpf9M5D2tBZ1XEgioBAars5uKxtWqoyfTyzjdbCjKMMsAxsqaXLXJJ4QAv",
  "key1": "u5keRmNP24Z3Zg94whKLqgazkgWNkmSsHXq8nn4MuX5BKNyM4fsGsrRafFeVSXNVMLd8X8mnUQmW2aWYMCahxcu",
  "key2": "42JEw5S1i3bQESQW1TzttPJ4oBEfYh9JyUFGpH1zfEChcRjytaCF7wjXdykCbF1XjtYa9Fy8nvke7h5bbcgAFj45",
  "key3": "2YxzX7NFi9rKe4fTmQFaC7E6sEhunXiy8vzCh48fbb7jn4uE39XTCzKjA7vgM1XfD9wrb2tsJT9CYvtcjfnroHJj",
  "key4": "APmVKuJPMvnNkMJLFxMJXxfzSGUrKRqpP5Tby4mEGQgjVi4BK7Dp9tyFXh9g2kMrsabLjZJ9B3LFg3K9ViKWgVc",
  "key5": "3mk8tMfoXxp1X23LoNAKkec6WmpsPtJqFZyxS3HquHNDzY3vbuJhr7ByH7QFQv9MtLX9625RccqYoq5UC2D6ZJES",
  "key6": "2Kxz7XQa7SsDYvGSNnGbNG1g7ac8Pr4jzMvW5bDaXNbRTsTmMxMAb2RiptRxPvqWNFq9XRWfV36qReHCAXcy39py",
  "key7": "KP58SMddn3LasYvswsNw7q4LvLxWL1QvmVDiwvSK4YCYDyAzWHAtuPx8grarFqu8vdZmtXuLbCTkRH3uAj338Sp",
  "key8": "4qZVeGWmfqQ4oj91B6wc3R4AXyujNX7AmkQKTjdpu2uwD2k8PvG8w7mAhh6QarTWF62ThR2XoUnJcN2onA684FtY",
  "key9": "5oTgiAxK7xpUnqczYdVTejpLxvGy932TQhNmbqpA4UCEgDX71YDWcaogryuZ2264ukUWvWxyif3qd8tuZ9ZigeJ1",
  "key10": "2zSUrjWR9ZcupJYEcMG1vXsPTgUizDc7kjA6k3CMxsjHeYgcN4JMeMcdfVabKgK58iHeD16F5KBBDAjj9JnVE8Fa",
  "key11": "3oZPDCjbzQvEHLD2Tzqy8BZecXhZzLNwLagukJ3yyjDhyLXZMDGYXcL6iTg3pyVBCrA8HEsrZLUmHvXWJ96jwq9j",
  "key12": "58SKUpL8nb8qJ4PcUbyaxVfddSqxHgv4sx1sVmvnCuvHSiQQxq8sYvX2eWriMw7hbtn376CDmBbTdqzPFyMHdY3j",
  "key13": "4RqHeGcTbaXQjMBz21subxvQzcJL2rbqy1NnsEB3F3PTS6ntTRzfw7Xue24HJ2TyAULhHkofs7S3gNm8uXk4nZx9",
  "key14": "5gqieqJYH2dWAxmsyiYXr7QWPHANJ7qWNTyoMuqSJsxm1yk2HT8jbyDZF1Nb7nBSbQvmGSnXJkGgmfGXczhmQNqF",
  "key15": "CynpaGJtUL3atTsof8qaGXsuZcEBsvWiChTENNF5taRNpxgFXHA9z9XFQ4VoPCAofNT6R7Rr79yPmMeJqJpBNFk",
  "key16": "3YZD7T49i1EEBDPcKD1cSRKL48ASg18CTwNL3KR4hR5XaZsHXPQu1qMia9htUZht3j1EWp2ryn9cXGUmQhF1f2uU",
  "key17": "3AhSkUeXkK9Evfv2z9arospPSkSWvxSsma7j6UmCWchmVmpfyVPyF7h4TNFcCVZTnAWQJ5gf8DsiF9rT1TPW5V9K",
  "key18": "zkjSWa8XxnBunfaXDPZo3Be3eoT6apd5xnBF1Mu2hgnAbMX13vwP3gxxLkeyoAPq4bc4KQid2D8aq9zSPXSsUgx",
  "key19": "3bHXgBitM5hhxjhKmYnd85J7MeNqT26ChM97EYLpaZGVvWRPzy3PXSC6y173BZT93ytxFzfLA4dfyX6m4u2gUdmg",
  "key20": "5vZZdta3qecE2tDa9VP9RuERdNDTYnvVSddPshZcbeQZPbvc6X9MmZFH8HtTgZKzY7ReGo6aLm44sgXa5GKTtGix",
  "key21": "4HkwTDu32rUWeNkNbTGNFWmoWKDHLMyu4zQanBrzvANA7bgZpzy1mxUMZzHbh8kbYBPx1r4f6RZEcaSSVbYxG2yM",
  "key22": "4cFU5wnkSFtXaErkXW3CGpqGxs2sA4n5ebhfrZU7FynL2JaW73bBUWVvCBEG3eCEcqrcN7BJXdNAxpunoZvADn5x",
  "key23": "4fGXngLRiaCmxqsbQspTwcrq821jJe69dvXoVr8PKEjTQWuv7KNdCXLzbcBTxTCTMQDchraLnz3ZA9nEdzukMo8H",
  "key24": "3qqtkFgp9UYHa2u7vSXVSuyatAjgLz1d8qwukUGXmuWAcyfaqVegQi6umb622Ea77Xf39AtcTLdWUKWEGfZLipdE",
  "key25": "36geujbMHhYuwzwEmDDFMCLpqTc9vC23PTvKejEF4bJDU86Dz7U77o1QnWskD8vFUnik4Di1SmY3ibZBNNnjwPR5",
  "key26": "2wLD4L5biizcTMG6iqfJVAFxQ4N6TbzFNpg7mGsx38NeTDPFq5obLc9QPdiMvzkr9sxhqypW5rxmJnkTAnooAgeS",
  "key27": "58LT57m4zKqtCqJU7EBBf4CSxxKGcANkbVRzbRiZR6ZRGorcjts6SEVNNS81yQcbozJJBbyZvt9wF7Qw1kNSxue6",
  "key28": "3XnmVJFnRTKuKKn8vZamj7CYkDom4HwJF1S3Eo1kNcXsjhGdiDJ62viqWoMXDduVPGWchWUKKw62KSMDtkDRUJiL",
  "key29": "5k7SH1ydTvtwapYDeiqd8ML1cMwzuFgD9GxMh84M7AGSsvXTcrzDxNx2s28gR3umXEqQJKYsxG2sDiC3FJmhUgyq",
  "key30": "5tHvU3ssnaNQNaaLxF31uxijzMKgadaY4ceLMnqs17Xz4taAMhqyDkYqSewchELJP3dGabYbGMzLZhwp8oY1qV44",
  "key31": "3FgCkhe3LYNMu7UAMeGf6v2GRL4z7MCfHtQxTJoZK7xfrwcRhpymDDJefN5wY5EJWHow8aHquTPuLomcpJt7HxJm",
  "key32": "KfcRaVAc98Md7uLV2eRBtQBvXfreaKgPCX3pKvv3kthc5B1buvqXndu1BYM9qFZmjmK6ybZaqDqB6cuy9ZyY9LS",
  "key33": "5w1vXmZ82CuvtPREiYmXL4BpA6CggfkD4CQSjaJSUSHF4ZmnyWqYGGKWDS2tfQTZHN5tFpUPY2D1MGXbhZ5boXGB",
  "key34": "5ESLDqFQTsDDUktVAW1L9QmSBLxZuLqXoLuP51bryXK5kDwUCdcHmt7rMEWFbGa3szpTWdaC5EzaM615169kTdYz",
  "key35": "58LDg8XVSyv5qzWq6cReqBPisthg6iNKEhFE3tBTbF2bdeHJXfsbVV6rGGcAXCuPC4xLyv6GDbqygbsi8a2G8VKi",
  "key36": "274f6jyoMLVq56wD75s9xeWDRMJMXyGTwc58DTHbjeMptrmREikSMPKZoZnntNTPP2LkRFdFnudpFvGnQQctMx9g",
  "key37": "qLw3JZTdVXRoebsT4jzwzz4sxowQmiNbp6Recnnixq3chbtT3cFwuF8px3RW1teh7eEXjdXH4tuxpLc1hP9xUej",
  "key38": "5AiQhYdgsVhR4qp2PsyokNAv9sY2fsyBxyAEc2n6ZtEM9jg16KRSnvHKnKcNub3G7wc8u1tdGUVyYheUX7dNVUGw",
  "key39": "3wyNKMejKeHhPH5NUVq8WVPb1FxqKx6VQq2rXMxLFTXRA2EXUutw9EEAXSeeW8J3uHomocWgCf7LTS9RtJFk37M4",
  "key40": "2LfXbbjZqEMqf64NiT9Yp6Cc4YNdjvg7CRVpM1AdiZrwoHvUJmgYtt7TRDyiwat95EEHosrod5X4DuMJXUVdkta6",
  "key41": "44S1xyBWfhL4JCuMrLAQZhngPMbCbUhPK8yRwR1mnmvKDzL1PFayW97WnUihvBH3jKzhj6J3Fc8yov3HpMKSHWKW"
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

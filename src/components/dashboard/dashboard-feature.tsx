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
    "2HoSMLv3sxKfng8GrngWj5LKVVYJCw2mZKrDRS8eK5bn9ZvV7KERHqQtkG6QxpGJjEbbbuo2JSfum1XZeBGbbA1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U75SayxrtTwhsgKXKjyimp9vXe24LTwnP4UxG7CLSABN4ZSABNZjJSmXyVMsF8apZRdgwmN8wRM7ErAQmtp1LRS",
  "key1": "hXzMS3ve64jYJCsvXC1H2HmgviFh6jrQ3JGhRbRWyT2tdhs7BKC8c6kx8nzgvUZM7uHh7nvkkyiTiJcrDYsjXYg",
  "key2": "3Zr2tKKXKWLuZj71j3xfBiTwcqf9QAHkXxLGbaMsLcutJhk4AT3MizeiWUwe1gVbS7kak3kEGNPYM2SSfTFYfFoQ",
  "key3": "3qeftuYMoyitnkCjTM2sRxfwDGpZeaz3o6pHQHPFkXkDCoVkRyHKWmWc3X8j8rXt1YDnMfhxNdNcRYcJRW4xvQyJ",
  "key4": "3YhfnGP27ft9ZujNB62g3jGpeeqKVqwdFWA2CmzZzg3tY1rx4GxWxTGqu73wWaWCkFnTL1V4Pv4QBeTDjtatrE3v",
  "key5": "sqYAudggvXbhadeH1f3Q6oRu3M6hsX89NenX9mGooiENsxFEG3GSKjjXRSnA9g2YkFctYZggstCMWwR5fbd26LC",
  "key6": "4R3Cwx4kqZD8Tk5aJBDfHgJdy7krycnxEeGHcP89ndc5XeGZJUrz9s5jXfSqA4aG5GxgAj2UhKubqQv1zg3QYA8P",
  "key7": "o9qvmM13oeZx2PhY6v8ssgxbk77E12VWNfeWmTn3SRkScDTaTcX2KmKKZURyYGXmL5xEHv8eJi6rTRbrvfTB6Vm",
  "key8": "3MbQWAHAwXC3uud6hHJ3rLnNDBr2UKhiBSmBohDZ8LnB79QCbGQmi76kfBDgNXasRhCbBLBXYpHYhMBCiRAT8qZk",
  "key9": "5xEgjTeA5WwDjZjNTD8zSZ2tH2FzAy4863RJ99riKatBbQKuNKpggLCFjWxFW9DCMStF5qa8axLhAL6u8ydEfN36",
  "key10": "2mbq2VdnfY87xpgcBUwxnxian6joZyRTBRubRywSBzEv3k9yQDe2jDkrwLYAqTXv5wt7Sv2iSy4B5qmXRHuhSt7m",
  "key11": "KYfHKeZLjhzmSUq4dVWdDo9gFmWcE6vuecBD7JAVyhRhmKkFXxLxvbfrxsziN6kpCPbrsfkfvruVnR1hNMWyH66",
  "key12": "5KpwnqrpJ6qYputre6fNpvCicthtTm1Ecs2tvZzNk5J1mu59ZDwCak5HDgvY6KKsJLJbtojsrHp2WFeh5mEdm7wC",
  "key13": "9y9v5AjcbzqNpJXedvwDSpSoxNyeudqDGhN2YhuTtsAmoe2km2LxnKDy1fzGjJxweK9a5hP8vYLvBwZGueoYS3M",
  "key14": "E6wm1d7VYNHCGzX88vu4uAC4dfGa39dqm3bH8KHgjavuLKW2fFiGTo7q3e3FcHNRqj7mckmqG7YEWxgKC7vV9rc",
  "key15": "34XQWbWwZ338vVmTVWTJcnqYed3qgEheyMP829RNt8zszb2aH6i4PBhFWH1GrzwNQ3JmDkWkNqcTB4k3vnoJkTuf",
  "key16": "2mN7Wfysjtz2ETp9pZCFZxq1LeNtw88GyS5hGWVd8sPVETiGzPgzbuEZeCrQ6S6LpEYKXyZCWQCJG87BQovS2d2w",
  "key17": "j9jMJg7KpK2hRfTQUxSP17UNDAvC2DjL37NoKmPb8Z5SjGkwya2pRyLAeNdtr8aAFDWLriEq4W4C58p1e4yVo58",
  "key18": "37yvwwwNGLtEd7WcWVjwCzu8X6rmcNbYRj1dc6rvtCpmfkQGZN1ozL5SU5tEafewS4BJH5vYV8J51mctCa5Fpost",
  "key19": "422tbWzAoFiQEkMeyYMHXLegB7ywyTLZVB3Px74RDRnoEXt1P7wSVfAdhqXfdoHggVJLMPAVgGcuKLe25PVm2LLY",
  "key20": "2KajGmwnF5ZxcZn4pSEfAi1Ha5vn6ShpnH7H1Vcng7NQNe2S1FVkveJ7r6Pb5SCRdKePVHtxJjo8fTJMgiD67Bdf",
  "key21": "4pj6itqHEX1c4y1iBpWdqoCgotTi8sNWMH5LEvvwJMkGb2Ydc5L2fEoMtATQwCyT1hi8doJRGpJLrf6m9VjfojZA",
  "key22": "2JijWzPD8vULXJULJhTtNVk7squzfzsMLmHxnLNA58oRF6jKRvUnNmyxE4h56qdjTYf6drsUxopF7jv1L9egUpH2",
  "key23": "58BaQ8ticBYAHeKswJyMkvtpijhJuY3cJWuTxEYPWQ94DTaJvLdXQxketcEWMhdDXpNJMsJ2gu9ALcEeU47En3ms",
  "key24": "5HcwSDvYkkJYPrp9bWi3SA6j1JPi3w8ir8mJAEZSawuau1G9C2G2fAjptdtk4nKGNHrQHZKXkXVTR5DyALJPou4j"
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

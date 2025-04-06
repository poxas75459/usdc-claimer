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
    "2YMCpJrkmSP3LXZ3uHAMnzCw41mnabz5mFJLr83aqAKYuy2Q18RW7A4ddCqqQ7GFrho16Un6K8Hm4anF5exh5Nkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34aabs7QCeSVEok2DVxBrXvTzg9Auem9g6kR8Qrt8ptyp9Zn5TiUpe2WmutEpeKWFny59PJj1CZDM62Hw4eJuvGV",
  "key1": "4M9X5293pYwBojZ7RXxJmyomPXUUgehd9gYxxSpXGVvFgoWf87B2hbr54sH6DBF6wstAH654VZE7HKFjxV93uYYr",
  "key2": "2JXSAEHXoJ3TMinVjZNbtUBkLsHb7iwynff7T9oq2oECRimoiJaVdBKpYp5Vcpckz4amhsBqEXbD1WJ2gxD13rJF",
  "key3": "5ofpVMQLPVZJGMR2ooj7KjswHxRHrUSWxHy6t1VaSN1dLFae5ToF15XPQA5ztEFgB5NVtHSFUyBAfWBMN18YSgYK",
  "key4": "541bKBWTVprK3WRpWNe3h4gNN9BFwqQr8CMzD2bJLuv5ehBRvVDnvB4ptjdUtaib17ZU97CxSUX17FKz9d4jVepf",
  "key5": "4YFGCCBKBa2TmjtMugcA191c1CVsVzaS3AvgM6JLDN5doMg2ARYcBraySmDiLdKLmJoiq7H6TUzzmriBZSqL7w2K",
  "key6": "2ZrnaiCxWUhsyXj1Xk8hqZpVq5U4eYiTUcyEzSxV7Rcf2ncvkr2UK6cv95aZGnmA4cwqi3kwwxRF3EomjQJL3QE3",
  "key7": "4JgwZZUKwDe73XrAAp9Cr79FsH8zz7yzbsVm92ZgviZaymx4vtxNhazKUUKP9erzr3AJoyVyPYV6uGf38UrNuKML",
  "key8": "2Hxy7UdgL4wMT2GjEFSpkpNgGE39UpddtFTTZzNN8Kc39pP6AUE3F1qbPE5CBcbVFhCGVhVeoS2iCqDrpiCcNmYY",
  "key9": "4k36Cai5ciQ1UJofsotfF79Y8537rUct77xPJxZuXZo6S7Ue2GR5Vg2hoGRGfeNq7F6sNsdqVR2PUyeGcw2LLkrE",
  "key10": "p5VR6ecJ5mYLvj1Bhz6rKXRfd3U7GDmxz6WJEMwMzQWzwFwWTtNxJcUqLmLwL144dhf59wtXFGATJcuME92HzQm",
  "key11": "4gAQNnpFmKK1bpByhgqypdtZvBLhUQ8iixZvXLqHHYvDUdYJfPqhEZ7nxzhbzSxkWEdCKcCPyVegUbi7xyRquu5F",
  "key12": "537bbxtZ7WLzdH8Ld1pMGxF32Hwf38njZ7S1rFSvA7BFSxDgvSAsMgKM3ZUk6Yqb7pfjRJQ7iVxAvcHC8zZme3so",
  "key13": "61793L1c8L3TrTJFYvWQXU86zKhWSz33scxZZ4GVNVo3oCaqw2VQZHXuoWWwt41DEXbSutF5Hy3VmtqUXoz1hNye",
  "key14": "4bJ5UtZjW6Krmnih8G8RrYEXAphVx6PZWuQBe4Tm32EZMyATWo2zKvn43iW96yNNR4KGTxzmvu9WYErRjgTCyiCv",
  "key15": "4ypaLsHmnU527USM9K5ULwYbhAiET72pD3UXZwU9miULcWHw5qzr4no7deRh1NsiKaW37H7mbz87vKtYK712Ezrp",
  "key16": "3FNnwLHPRGQvMEyy6byMR7SYdkiVG8UMyDBRqayqHfGSCFvMwb9FerhFdV7gUzbBSWNvKuAhUjffUxCEokhe3RAt",
  "key17": "3Z3VD8fGCtHNovgtTHF8iKBcyem1V6mACMvUkdXKQf88vCM4RYEWshnsJP4mifshtru1FfchdBVRhFqtGnmqgGvf",
  "key18": "qSYEaSja4CPMrEbRbe3HGHqU3E1HnDWEfrJHtDyhTSEWeYn9iZnUcamV3Yj3J8sTWJer6uMrG6EhUv5Wna6URvY",
  "key19": "2qCD7Egy1h9kh1QehrUXXPn1uxzPAVqUU7hnWsPjUPaVJqwzJ1KQafJDDNzFgWzQDxf4wsLrUpND7z7Jh6vjn3Lv",
  "key20": "5GZKCJwrcYfyrGeGY146rredYGx6ffs3dpXfZBPhFKgs2GTRUXqeFvHGDta4RRVgTAuZZoTheLsvQDzeKuVpugR3",
  "key21": "2REGqQsLuz3fXTaL293rifHamZV2fY41ihswgycU51vkTYBpcejnPcN7DpZAVuZfg6GZcj72NkFfvCLgTtWFbenu",
  "key22": "CqVb6NJ72PFaiN7CVHxMwpfNL8MzQUDZ5yg5P5YUxwoqPidhYmp3dK3cVzSh8cj8PcLw46T6ZcTRrdiA4xYxdjM",
  "key23": "4J6SyduttrPk9hmH2B6twRN7oj7E8xiZXX8bCdCydyuhineDJzBxJKGXKVA2MKjtysqP1xJdq4pHbbdgcED8L4jP",
  "key24": "5Aaj17WqoJJEj3xyjYJUzd8iqhAADoJ73FMRiKRFtXjMHaQnMV8GoUFq5qfGZn1dU6PFfw47UsXPnLGLLeB7VwAM"
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

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
    "3RGhKMeu2TzrWTkMqBLrzMYxkk37pDzEsiCvnvQpAJDP2ZL4KDm4qEKY7166FRfGGQU42kcQaJRhxiFJyJSveauf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tig1rnqutD4YjjHHHW98i7FWC4vjDc2DmD57ewFYkH1XfzP3v1kXzGxgjJ4moKHm9bTPTewt7v2QqQfBSJBeiX7",
  "key1": "zPwVVLNPNZRoVxj51P2PTcW3Q153GVnWt1ds3EkkRgeH6Szk27ghtP1ur15b2kTEPgAMw7CkLbQcgJE85r1QGC7",
  "key2": "G3v5JFwwXwxs8y8P1hjhd8bem8tK8vvdAVpE3RZBkw4Pn12tZ6peEoD1EmQko2X77EJGW6L7kzqBRJUATwUda64",
  "key3": "2jYhP9P9BhX8XH8nxKfVkTh1Raf2hhJHkAo6wgZKHBhvgcyTTASZuCYf8u2mbe5EDojUrxpz2v7pRcXAgPjPm5Zv",
  "key4": "5oqRUdeymcai5kR4uXn2ixBCwsBwN9MgN8WNnRABHcsiy6xNgsc3vyDncVdtr8fsXAMh6fPQX48vrB25BgSxTcCm",
  "key5": "3G3Lrhs6cJacB5H2fSLMR1FTAgYdc8NPocMsrLxTqEiZW7FWpddMBtfQNpw2fZSG8HwxeCciw8iS6UEFJdo83tAX",
  "key6": "5f3gSAFf87XpVKC5TS2Gkxt9RqP8RZmHT8sP1xmRWkjrnAGZvZacZGvjSPAwsxG2CFFm45rJvQjT4gUiQFwbHi9R",
  "key7": "2QsCcFQixWqiK5N5ZYRSnGv5TKMR4voDNdrDfeNDpZZK8wZG53m96n6EopAcRat16xQi6GzPHXZFkuKD5idgc3pB",
  "key8": "3gpP4tmUsQckkHrzVQcWc8ksceRRjEZ9v4q92QKQB3sP3NVWuKuUxL7ehbiyWmntiFARwvhCz6EkMVGYLT76k5S3",
  "key9": "3KLCuqVs66Kv181Ms7V4PT6yC6CtqaQkq26fpxaHpWMP5S3LdaUK8SveET1dvZPebcqMaSDHiSm68AsAquWYYqnS",
  "key10": "21282zwB1RwzP5FaWcUR2aLUr5RARwc3kd4JCLLZWpEoydqAxfpMyYgBhfnKBkUqhnMRS22TJYd8YAA47U7jmu8a",
  "key11": "4ztHNvYgEVWBtUw8FdH7VT6rB4kXgi9pmYZ16LwatVxeiKkTj2rVncLQepPLbvGcoBLCgck81k18wzM9NwZk99G2",
  "key12": "55zBAVufNToJrHR5SP3WVm1wc8tnHifh12JGbmbXRkqtG6exCySH62SdBxLrnJ5pr2r9KVYqjr4qmbKpz72wGsUG",
  "key13": "5gBm4UMdDXJ4o348png6UCqX9AJG23vJbNBG46S17nWDthMrpZwmJeV9Xk9MtJNfL25DbSXvAoRMnXQMdQkiydt",
  "key14": "2JXaap4nXjXphpCf8wWdvdnr2rHEh7w7zxXo8oezFeX9zYEkQhmJ7fyT5EhuDZb2Xqb65th55MCKq1uYhFEMhhtg",
  "key15": "5emkMDMFzseQgsiDWKr1GexoUfJQ7opdEaWqRJFgktVYvf5oC2D7PcqwmFEawUcXsvYFN2vDp77in4o1mcWdG6Jy",
  "key16": "N9fVeNAsxhpC1McLKs7kemTDSUuuTpgyrf9vCxcPQeTmwPx4KM6DBAJ5q6nbGxH4JUm3nvSbFgt33itp7yc2Hn9",
  "key17": "5tmLGcBg1Z6UyDuRS1oKpHSyrg9FmGsegVMXM4rNpkEDcPMB5MrdZGPzHYLPgn7Yb77CDL9NZB2G5tHwLdDWE1pD",
  "key18": "wz6cLnM4bPthu75Pk2NUN2CBwJjYawhVFHADdKVhPHvAzxjPh3HYBnhgwqaGe7AZr8K8o9iqmwvEB4TLXBNY4fU",
  "key19": "3K5D9sPBKTRC1wzKiMdJGwATPUs9aZj1vGDHHSkRYsT3mAh9eMqrRcd687CxnrhWJn7XBM357CpaG4Bh4FJrVq8m",
  "key20": "2qXsF8P77WodfgzqLWTmw2ovrQ2MkCQxJXaTeM18MvFmADy9cGkNL8sxZffmYDNfDHP14skb1yXU1G1YZD9jKcpg",
  "key21": "32D8ykFhKBzDZsZuYE88NptNgJs45FggHV92NzHu4qK2Zi9JjJZa5eJdSu1mwQXgYBmh5tfTEfR6hEE5XPu8v7So",
  "key22": "4hbjit69gndWaoXa2EHnGYvKqivVzQ6yjy3VjuMQFURdHRAc4a9rWdA5PjdhUQGQqncDe4PPd6jLNmBwUZyATvpp",
  "key23": "2ngn64GMhV5uR6SgttH7svpLtxAibAXVCxZoSJkfv5btQifWjK7tPiYWcR3Q5aWmCRWdUwESYnZHhQT1TocqmPYM",
  "key24": "HdPoVWBt2isAze2Xef7AdpWSHJSLFPhfSKatqjq4AZac6u1Mi9n6MEk6Fj3BdnacdwVY7s9o7gFJSt8DPBmRVsm",
  "key25": "bj2zqj7HKnT2Jqrt324p6MXLssT7iiGLiF4xBhFpzu52cdsmudX2rhFnD2PSZVcsBRDjpvE9BWBuUarw4Q64i6y",
  "key26": "39G6ykkH7fRxsH9XzHH7RdP8piZvRhQvjSREvkrmSkDFCNV5nFb1RKQZPi69dS9ofvwRDBeYAwLBRnTNbuKdFXG7",
  "key27": "2UL1U9Vgo29TtTSGgJXxyvF6xVzLDGUXAzpsUEWSz7w6uh1Bo8h956CRrH7MKUYHRww2j9HXXqu2BbwY5DyVDi9B"
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

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
    "4jYwBRYhRtd5HtFiVhBkZdsQTBR5gCrbS8JcXCksSPEbova8EadbTNwqvBWtgzfTnKUWWsjY6ZTriUBx3j5TVmap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yE5nSLQ2PwjQC9QjCng62jD3oqLyHQWPFqsLGk9ZepsgPXpYbwtEqyVa5aHPuuCooG7kSwFKZBG9ZHtUXxeUT7w",
  "key1": "2wdD13J5G2iBjJmNZUVdGrREvhCaUaa8cwGcoxw1HZpWj45USWFi6dnAiMsEb5aEBHj261i18ubKm4L7ggPpVLfT",
  "key2": "cJft9R1PhAhSge6m88LY4vnT99jH6dBMLKRHCxvRr8YBWXNQ6HVUDZhjbT6cpYwrv11CvYm878DQnq7T4eAadSJ",
  "key3": "3vvHmRW13EPi2tX3WzEze1DgXU1ZjAWXJCQ7sJA7XMawN75rC8ZaWC4eV2v2xnznrj2TkTJwWujsUQd6QQmxNuTH",
  "key4": "yLfHH77C3mNqC6mR6RJozuA51nZSPgaeSnqyToAj7SZKmBwZRmrGppj8RqvV1QwuaRrUhBwxyhs25XZ9fmbQTvu",
  "key5": "2cHFnUcw1NqGkg95WrPDYDANbFm5UxVuTsGpDHuu7FFAmL5AKpHTHZ3t37iU8RmEt6QZKYHGoZYSbqZgk4REZaZu",
  "key6": "3mBPEfb3qdQ8pjjtWCbfD6otBjNweCjeqkXwYkAKoitVcLcfkGyD6DrKZ96h3794tcEmR9QsPAcNeSWNHP5J4Gzt",
  "key7": "T7XjpUq8ff49K4rt71GsPKyqYSr8nHmtwDjAP3xHJBmaDj42SGj9TR25qfDW2jpVkWmoXLTkhKjKrux1SbuDR5G",
  "key8": "3dvxDFMZgWP7VxRvzBAJuvCsNMzVgsWRdR4xCuqTU7GqYQAJCJ6xABxwaXYRXQFbtjpDZcr92AuyokqpcYYH1wLF",
  "key9": "3MTeVBY2hPMHCFsJYeE6uTcdbTbhWrgpKZJ5SpzPxS7ezPpZeLCw6jUcGRdM7SBcnr29KdguKzv5mE6SLnW35Jnh",
  "key10": "51tEwTGWLWSGZXPVdHq7RnoA7bpZBnpd4Vz2oRhcHovExT1t9eAfJ8fUvBhtGa2TR76haPJnUHjc1ivftJEGB9Ww",
  "key11": "3WgrZY4pkpBDifbjTRBEnuB47Z545gK7CDFy4eyFXmFa66mzxp9HzrRzMQdHqzX4k3i2C9kWdNkMnhp5cZnodC5D",
  "key12": "28q8CE9tvHaM7rJnzqkzFC3cU4CYJSKq9hUQS6KX45s3g9eMt5jXAP7emdzuCZUvgmVyWEwP6aUsB3HDB2vZxdHy",
  "key13": "2WvEPjdr5Wyoe1DgM1fnPyB6DSAkJMALfHH5mUfev3F4SRUjZN15xnZjbgnWdcjGTcFLwMBKtZj7ssGUXJu6o6B4",
  "key14": "eARqXxsRAsDMK5QddRR4p2M2ZkYYPCZHbEFxc9r6qQkiAoRoKtDvHxky3ummBwmtBftuFEqA11VabTsu1q7jSzg",
  "key15": "46gEgprsMtWhBN5ussZAZTVs4mDGFaguNRdnzWVWRJdhdc4BzfbsKFpZ6J5kLBh6JntYypo7vJUGV3qEeq4GjSVG",
  "key16": "2ppierdDG2wdR4p87oKjzRdF1emgF3oBv6oRohjEfvPFZmEvC3fDa69rQqsrCXp8uUswWZmW2MYtDmxsrx1BwCmN",
  "key17": "V8hD4cwTbddcsLZ9UwGxGkPcjfSL4k3UBMNShwyAxKZ4AqAgoCvYQPZZ2qmithEn9keZYNRVZqQ4CeApCBmySz8",
  "key18": "46VpdBLMgWWrmW1FJCG1ky32yUQ1xhBFKcvrYkHL1FMSGXWA7AKrscmqcHYxZHPnnLMAGNLrAPFUdCb61Jjexmsq",
  "key19": "56PRsHbvZ3XuERVWTG6NJdRr7uCsUjBmCeWC2fhv5N7u36k1pAsBXD9sXgJUi2fwTf4o8eymHvnkwoDqd5Hfp1B6",
  "key20": "468kaDeXQCGGUtUnGWuCphp5KXsMebZhF2dWzzYvUEYRVCHV7ugxQGazJW5A6mvUNKVjCwiFp5vtLnS32H66nuRB",
  "key21": "hvm8jNGZULXdHu3Coz2hkFMepN59LrTjJpYd8SLjbDpxezW8vU5gvX1wMgwY6tzAom3rpumZFRpZ15TqvLXM8F4",
  "key22": "5RMe1vyKYWK3aqVJrrjB3EDzvwhK8VsApM7QDjQdKms9bEJsUD3Zrbaj83brhENsHMUFmP4tWb4LQ8HDZHEfv1pY",
  "key23": "tq1k5nLkVs7p7reD9oMoz5B9YpQCKTXwuUYQVLMPjhRmiJSbFNggrNVC5CCcYsAfQtEJwGnLuzitRh47AFD7Udn",
  "key24": "5Wxvii4J8UXUPGSVdFkTWYAFwxKVEZC2qzHFSQCfgBjr8TqwNRheCMRjbMPN9YV35NvcxstomW7yd8RCF42MQw8R",
  "key25": "48x4VbnnKcAyedgsS199WNw2jMZFhh2R2BRm7Dzdfs3Pp3FRLno58HWJqivWyavHdtGHd8rt9C51W4Gz3uGeTVu3",
  "key26": "2N7zYSb5wVD8B9c5GdWqso6uopWywMTeMEq8fug1x8fYeb2qtdr8QX9UXKaUkHXr6AfzbAXtx24oTDEvck9GqWwi",
  "key27": "5j1uoAbCDY42h9cFDABJNMU8dn6mLBbqRrFFSKgrsJE4WPz9nRZzkFxwxBzTNVt4NCy4a6kvEKCommWSNcYVk7jN",
  "key28": "3TtL2kxeK7CiN5iqp69UqKjMdv1ZUDLRWmdjXAAJi1XbX6SAsTqo9nA7nTdrFpDMeYuS56XmcFtdtLevvAGK1ksS",
  "key29": "5xBN58XgsdoPZJ8jSSgkZEUFPVX23tou3xTJFCD68bj2tk2vRB8zfvajG6zUcaM4m1RpsViosUQLVGBHi4vbd2oH",
  "key30": "3fQg4iags2zX857det7rqQqp53j5ffjvxZVEsCijU63tqWvZzDnrFWxi2JwVyiHFoSm2AddmcfNAv7F7aaJezLfn",
  "key31": "U5CuiAWWwfnvBK57m1aygm6eVCwSoUd97C3kmFv1eK9QfEEiFYUzFA7P28ZEmgBz3PUVF4g5WYy1dG2AoYVL9zc",
  "key32": "3Vy2ZR94wV1h219KVPGZxZo6GHzSiG36rrQSchd5KqZk6QgcDJ4pVK4x6dduEAH7Ra6y2B9JtKAzMo3bof7ETeYX",
  "key33": "2CypgN8SUfeV2ukB9NZDYYCn1AoqaymmoMt7ZjsmgRkyJChNtVR3813SbGDUBpTnfEbqxzGLgmAh8Tznqay3Yp1s",
  "key34": "57D2mtkeh259vALXdXocugoHNAgXtB91hvwYzhWNXLXzpb1LeLHYcpx8tm47m9SLg4JfgSrZ4g4qGLRFXaPp6NcH"
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

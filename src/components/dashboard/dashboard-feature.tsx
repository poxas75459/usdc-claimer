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
    "Be5r3ANq6RRfqkeNAcbDbRUri7zZq6PSzZhaifcsN66zGuLyUfThqUdM48rr5bxuwi143qr3a5RWw4V2F5HRpWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ecm7YZqfdX5gHTMFeN2uURsdQRxTfe6zpEdjdbsBL5a3Tnwuuu68eLGQDVcsWWiMf31AmEayUtsaisrirdLww91",
  "key1": "4u4zEJYa3X7jCzLQKNte2fARKVKyNVHwgCbcXMdviXwmJNrueJeHh7F3oBgVmxva4XNkYAXYxnoWtP4215FdTdno",
  "key2": "JauiuKKfh5dqAeUyeq3jpTB2YHJ6atV3AdJdhbhzZNYpB4nVpM9BRGPKmgXZzrdgx45XiF3oc91oqrn1uKgcHmM",
  "key3": "2x6vz1cJmopUe8ZjdXuoYzzaxgD3TDbj8BNVBz4LEkDDpiAQhTYEBhKRjNt1EqS1ReJCSPnXdwBfRZb8ynoaFWPn",
  "key4": "5p2V64Z4cekFg728vfawZGQFCKW4YZLB9wSc1vCjV29fa6MLLYjbAuqWi1ywqJcrRDGbTP6QBkMKkq9EzTZCkivB",
  "key5": "YDPPvTV4JdmiQ5dC5JNcfPGi6BfnQDVwWtYtfRAeaukGDueogPcBAMRz8wspwRDFXxVx1jRyFy1CgFv62ijTihw",
  "key6": "2cmjqQxxKd8fWujnF4NNbKYNdLPH1pim89qch2C4LDxoedayUogrpF4vkFEXEA247SkhsHfEvh9bsRKiQbqAhoqF",
  "key7": "3RRBPhCFGVVkbH99wwv6CYwDeoTQ4EpNXinr5R62CoE2eu2L2WxquMdqE2Xe6pvX7MCkTaeHTdf1CbaEWRuqAH6n",
  "key8": "K2KSDurJs9m4hfHzYvHoQgEN8tBFhFTYdty6LbbTbxxPV79nAEt9D3faZ3W1rb1wmC4JDR25nej2EzhJY2pr1en",
  "key9": "4YJtY8E7eVRpgKSBojXF3HGVX99V1DxhrLz2ipksK86JeooDAUFekkrw3dnQQdqdJdDkymLzBwao7vDT3HnTBmN3",
  "key10": "26exxEJzHGmEJGjWHdHpVhAzaKfERhtfvrgDFh1D89Ee53vRLTo8rrBYqq1u6actHqfynSY7RcPM9UJR1fFo8QwT",
  "key11": "2v7Bokxn4Q5TV9mZBNm86EBukjGY5puVzy33bGjv6pZFhJjauL33bdacJQXWisGNAx4CAehxqc8HRV8uWCnmv8Wg",
  "key12": "5M56pUeiotvmJUB2NcmbxXtQrJbMYhuBQdjD6sQ5gPnyLm4EgwFCbu6PqLonD4hxauezXmm29iZroMkX6pXStTcw",
  "key13": "5iqFS6ht8c5z9ZponZMpT9vXRpWLNiXpD4ddieTbfD2jV2tn7GZA2tKQ1TTLUFZT4g9ZW8sXaMFtPTryEW6o2mPC",
  "key14": "3iXaU6t8zshDaWR8N1CAn5Uo7tn7jCfQJvqjF2UX99fR6SGgdNR3afbrALSDw5goxU8uadUqQBHydh7EnCzv7sW1",
  "key15": "25zN8fVWPLVbLYDZRVP67vR6HCS8QMyc1U7Hnkgj8rdPYwAxxXveKb5SXkdBjFeduuqvMAvsFXnNWKnPUxBezPFs",
  "key16": "4pZqrnVXsav6WhvbGNT5CtCsHCVXAwQMvRv9YcHyw1d8yYtW7RDcR2YAeyV5vxCkJghPJbgKzhBxxSkjcKrrWgUQ",
  "key17": "3YKUAgpFmhRC6zUr5yZW3yTwgrmqQ4mKfNfAjGFjp67E9E71dB51FVr8iBXrHscfymbMHMzZcuggMHxkD6ZvVbmy",
  "key18": "2sz9bpUJqWzeo7tWEvR8cGck5QFAntSsHnVZnpq1xRA1HhMuLst6f1vEDtLQjVJmMeq7pG8jiu82S1krypB1jQcs",
  "key19": "66kgDxWBtb47aGea7NQS5MJ4BMYeqpezhxswixx4HbBB1Xo491mSejWhcZFU6fYnMUWnsxefhJUkevs4uqD4Nb3X",
  "key20": "3NZCQUipVp7K2WLeJN2SMFB6uegQtPsi5Jd49gTz4micHVHXBEjEaREuEAm2yXfYH3c7rkzdtx85Ge9x8GRYo51w",
  "key21": "4FdbsRC9mJwNK7wKe2MifaYYS9HCeZ9TPRby8DgBvz6hzRJEcH4hgcXk1pYVnS2T6rBnFTtZ8UJN7WNYfbfCnEai",
  "key22": "4bZHrsa9WoKznet5iBYHtqgZcVS65pikMhEp37FrytHcRQdTYjYkQEdJcuFTVBMZqSaP3p1DnSzRJpjpLx97jWaZ",
  "key23": "jjUtw5hLQw5xonCxsCwihCiMRxjfced8Y5zLkdbFQbZCe8CqWyhmMj5a7wF641wwPfc2MHcv37knhpaVjudEXuQ",
  "key24": "2x1LhfwjForrZcLt1Q8E1AK85Mbma5ZzfszsLPPU1pCq3s5mxou5BBndH89rogyTgVzWdjQbaVBjxPkjscFtBzxb",
  "key25": "3SVjoe7WHZTnHafrbkCQLyxdTeoVp6f1zXL5mXet3XAAWkCsyLiz3CYaTHVbgpg2djLDeXRrZ6xdoietZqKZe14o",
  "key26": "3cHUeUZ9Q9dKvNJuAN3MmKsKcrbyPxESX5fqBwFvNK571LRvrybouQhJ4rTtLZVMy3xPGhhGzSJuKCZ2uZXBb9g7",
  "key27": "51nmxd3XP8qFmzRPMqww7GwkAgJDpFdeP9jnanzxBQv3XU2fdud6FnbSS9YEDUmpiSzuqwLL2KnL8WMuBFj3rxGd",
  "key28": "5Mneb9uPvFbQH7L1BkRFfSRnQPV1MyWXbRDAXQeuF59BwcqiGFsyNER5kAzStntG1mvfMXahuGFmny3PG7vbFNz2"
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

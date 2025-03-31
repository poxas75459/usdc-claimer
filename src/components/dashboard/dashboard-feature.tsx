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
    "3MBtvETuyxGi6Fimauo2BAh7DB4xyTsvbytk1aWZWS5geT71wgTb6qwN8kdF3cT7XdBb1Zaz7pXzh4DqoLFEAjXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbUiqB8ZAiPdPVvjxsTP8KoLFU3RmkGsQW2Kjf5GRjGWBkDWcxV44prjMNegMxwLdqAsjAZoyy14f6uSSJGCt9D",
  "key1": "5vrsPGuLg3uAx5xN6exBYRDfnPsDJP8WsGvDrww7WaJy4AXrE4Xz9gViWQcA466SWU41KyB9ynv6pxiTM41mDFQU",
  "key2": "ch2gFJNvH7uPWVvNJwb8oCkVQjNfwkjWuYVizEVp6df299dUXmx4VaDZgzfkBJMmSEU9tyT3opDnABYFHZmaP4f",
  "key3": "5PT8NPGKBsxGpw17jXBmuj93ddDBcARynJpW88wuoNFH6tSRAPBsk4BVtRTQ6di6NphB8tyEpcG21Zu5q2ox6s6n",
  "key4": "574PXPjGu5NqEetoicDZMJAmjnnJa62WPhjzebbUod3ZtBjwGcdzFiWSwahRJRxkMiVjRLmq1uxKyA5yXwzd59fu",
  "key5": "ua6Vf7vNcmh4gpPzMMBXS48LhTgq8ViA3cytjcgJa7dTVPxvzTs8eYqcHnrrsqmUG7pcCkGrCX9tZWSJzuv6vxJ",
  "key6": "2mypU8JaeGMmg45ZPwrhXcBFyUduTTFJFy8poFdcXAiYwCrwGmwEuJDd8RfFue9zEQydzjHbvunCAydFgWpBzFtN",
  "key7": "2wjRupsG8c9H76YoENCo7TM7hHwEUTpSTNAoZWgEMkbDscB3Z7js6gQMcYi5iyxnXcz8BY4JfZEPSshH4yinUeqW",
  "key8": "22vzqeLFEybowR3VjxW3z6QR9THf7Qwz3tZU7rrmi2gZUnJ6itkkGHF11Bx11XkT8xwt7cRSB1cZmZikGFFpxZxa",
  "key9": "4oWZnLmwuJixj9E7rcjNAbJGkX2cA6qm2vBFb8AQxwUCMHbPGDBp5E8iHA93kG6GqKA33ZvLfokZBZJsJQUDKEwQ",
  "key10": "4oES1go2kHE2ExLSzuEm4sCFfqobwNmL8qhjkDdsvvdQf3dKohXvdb4zAHk6DHroPmAvC8TLMVpqy87iY3jJRmzX",
  "key11": "3LjyTWd86VvvzSMQTJBoNxRAwAVM4wNJBScKCvF7aHTdqXMvws4ZghBHWBE61exEryv1aJ29431RvJuEZ1w2WcJF",
  "key12": "z8UgmXew3fFDeTW28FqbBqvYbzBxMwmYzPjFtcTjwsmDyNSPg2jMKmPdcw7rPoBSaxG8margLPTauEuyH1mj2Lv",
  "key13": "5RM5ptH6SaRpwp4JkTvb6viwMYLU1MDWYQhAZzSwCAi6U3L4uFyt5h4NzK4YNEZb94vePbk2u7MJbxvzmyeEULAj",
  "key14": "3jXTopc21UDqGhQaZr7qMbW9fnxnNVnKWFJjA7NWzgk5xoUKvsagX9YthFDh4CpHeqp1XLN3DTSgsGpUq29odHis",
  "key15": "g9jXzQWQB6Qk1pzZ19sCnTthgJh9bSPykFU8aiR7AE6ZvC2dYCaX3A7JhcGJcgUSXqbbUTVeCaPPmzAzZ5k94zw",
  "key16": "5qeTCz18s8ynxKB8JgkGPL99WBX75kGwoh37ThgV4tSuR1FWwmkPUECRgit1Jui3bCtLC1K2rfPAkJUz9YsXCoUE",
  "key17": "2rdAABVXBonAy1a2io1P7dE3Qp9EnDypjtCtVnu6H55sJp1tzwvoZDTNb7LzwGbTuqJPYqt2zYheSRsTpcZZx6cP",
  "key18": "495k3RK53SMMShYZgySEpSCBvpoava8v4aUQNFhE2yUPTzLAtJV3WKvJoptX3yPnQ5vkw5JVySstsrho7bnqy3Yp",
  "key19": "33YsCDAa4W64sGN7cgcZhnWnBV6rZNDtbvhbtsLMu4jCpEW9nLkbhU8UZZ1Y8DLAGSFKcw8F8o49k89krXhJSHBS",
  "key20": "4ivxaKUm94azwobUY1FcKrSrN3zUrzAvvZLbHZcwEHhy1vgxJdcv3hx9GQpCynraFnrAGJXcBN7eqWLZdroDXLwo",
  "key21": "5kPzbmc7hPoWDZE5NjqwWXeyNoc5YxatVx4P4LEa7d5FJJK8iYzXjJfHajsf2gLezq8N5vYVKJ3SG8moZuhkK8Ao",
  "key22": "2bnwiKSL9ho2oYF7SpCJzaWDrPMgWUKS1R2UAuR3tSzhuSrq3Byo2aTFDtbY8RLzESLbzNur1jNXHu4bdC2NDW4E",
  "key23": "4c1yBoUsTk2ckvdYiuvXo368YUp6PLu4EScjK4mUdnm9vHthnH9RPEYvZFRUAffDTCANKdqwbyKZ9kEVRuHXtX4F",
  "key24": "9np5xBvCvJM2txzZcWgGDzrLwL6VCnRDAE1GQ3JXmbu8HCVqKTfbaaHUUwPY1xoMD5gjtXhUTkzhA4YPwYdiDJk"
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

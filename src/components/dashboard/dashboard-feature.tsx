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
    "4XQTdGVjsAYPXuvR2gT6p2BcE2u8jTUV1Q8jy17aSVYQybrjbmhtnkjbWLaSV7SkQXNA8Guie3ijNf2quYuBh9e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1W8vQ43wYH6tBSXLarZSKfJbhdRJEFwvFKeyS5eHoKvJKwpYd8aeA4F2QmBDpRwn8ake8dknvNvdb8PTeSZN8H",
  "key1": "34NViJ9PXzzN8Vku5kgFvqjzi5jSX7rmySiZUr25mJXp6gAhBYqXvc5HBBSB1HU7bArF5qc1jnB5J2bnbh6MN2cF",
  "key2": "5dt243Uj3ZjKDwVB5s8wpJSuUqfQo6YjTrS43Ushoy3kAtdNJHqyWegtY7NjzMKidt7pWYEYremKFV5fCMXza458",
  "key3": "5ZjCzbNGgSN8UqtrCdXkZofdeNchMCN89yEDD3WbESyGBhjPkGca8ZFqHTDa5vzfYXQTLbC3EptntVV9Xa24s5sp",
  "key4": "28TmMQmAMaGEkLDqUccWVj1HkzGRZNySW6EXWijyWz6kyVe3cWffgGd8oCckovicQirwDWWFkCXEahgccyHT1Mwn",
  "key5": "4dxxsYeEpmuv1ZtscsHvfMnCR5fJduU5fB4NkoUCHAbax2VdJ8XahJ88GTFQvTr1cjS5mb6FDkSAXopHyZt7E3oU",
  "key6": "4k69BB5rLjTeebLLtC17jnXyq2VfBbWb5kF5ur8GHBTPbH32u7dgvQUDm1aA7x1gei3VEbC8sNLcit1MabG9B29y",
  "key7": "2HncgV3NvCLiubakCDmnSsheKFY6vWu9nSYfcvffCypPRP4cSgNkoLz5w4qdT5bXM3719kUUbcbHKMXXDmVznPvY",
  "key8": "43fuRzW5djoTwrXWoenFbsTpcHaagCy1LAwNaRMgsgHTGMtPJ97RQGjHYRZrCZKiZTBRbAwbKrxmBwcwtuTHLpJw",
  "key9": "Nt8tPTcG7DhKBXkQmWh7UAMGrqc4wufiVVdJAxL23Vp3vyGxkamJxQpsAxVM939yLNQCKMhXBEH7KQdSRDzmjKD",
  "key10": "LjSCtBGwwH5rq3NstVVdBTBQF9mCJPKCgnwT2JfTK69xPdNnjxoWCPct1rBRDE9TXZyRGs8HH2tzjCjYNnxaEYq",
  "key11": "5VhMZSdBeCTNBp82iv4hiUmm93jesSZR12qupNq5JAsdd7xhZVvJ83FePoF6RGqQw3hXhsw6DDowZv3BNK1nZUMX",
  "key12": "355Zcz2HQuxhKwiKT9GtJQbTfNwxi9rupWAy6TKjJnQbw7rPmXvjSxVUCYXSHfx9Qrgd4GhmV3JPRKn7RDg9xgLs",
  "key13": "3CipAXx4ZqjPF1MfkzTdvN8xjnsn39shkgYc8ZmsarmVBTsXyW8WYdtKPNHejTx8f2cogCwnwqnytvWN46hTodrF",
  "key14": "5YSbgezgh2PkdCP3hzfTuGJaqsqLCgirnYGTZyroR5HwUm2a12Axt6BLGa7npCENLRZPvUCbWYWeVCrtzjZPuPnJ",
  "key15": "5CprU49vcM3xZcmPoC1vshvgUXWaGSpjjjKUqwJqiyzzdPCBQGtSg4nBYiwZJLCB1ivQ8VJ8HfHBNcJkg6yWf5ka",
  "key16": "61aoB3ujDC64UHi15tPzSRT7MoRv6db1dXpZo48RQLaCrV1PdCXjPWLtQ4eTFTzfomS89Km3vhJ4zqekX5LkSJJb",
  "key17": "2ySaAuBDssg2kZiP11PqKghfD9jrAgQEEv3H62Jvrpb3ehkvau14FLNy8f1cyTcjcx5cmsm5sZaDk3gEkfDp648m",
  "key18": "4DZBj7fYLaUBDvcXFq59hEchwSr3DQL5SJrd4YYqqwhax3bhRBS4214qWFkvoi5ctjNghAJ2m5vfnu5SxB1Tppu3",
  "key19": "65RMQgfKVxsCkBNMQbXVQNbH9iEnryqMRC3rRpBEtZHgcF4KJKvbaFk6Jev3a897vA1FYAsYgoSaufj96dUVYgdi",
  "key20": "3AWzN1TxLYpWKujtwyzqaArK7TW11ZqZopm6rySK4a7wKTdQGrw3meJN5iqvz4aRbsaLUw1yMsRKmcZS8CmBApK5",
  "key21": "2t7L72y9hDricnjnUsqH3uPtDzWw9fwzjL5iYFCnU6p8p1KPyZ9aXs8fWzfGWVLVzMLhxUvNXb11nUXcGvCAo1Uz",
  "key22": "3tyg1eTyBJAz5iNNYo6R9QgtiAYHwAALzTuoLh8snWo7ntRFKM9LTMxJAH25YwPjq749YUgSNzJztpy9vaSf7pPF",
  "key23": "4FfJGqd3ZyvY1d76djbaYyZkMZ5er7Viri3GbD7RCz3yDDKzJsX4Trgt6ZjH4iNC63mPT6vP3CgQSEe5ZtUAVfR5",
  "key24": "29tz69sd6NsNmYrKh2te94hep9nUwoRJzrVdECJJLh2gfnYuG8UaKJh2kr1oYtEjkn5oSMAkvVLfKnXt9R2UZEUL",
  "key25": "1YT4hWP64r4XaMeu2EitaANVem8QsJd3Ez4xcanGRKaHEHpaqn2CEABirq87C4bs26AdcZZn6qfagfiq4rAYjkk",
  "key26": "2F9kocnHwZVzttTenSGwMHjUkKhRLKWxoJMdLZsyHSKWi4dYcTVNHtcdC9CwrDNMDKh5diZjSTMXXrbED87kn7L",
  "key27": "5uu7HBNqgwoE6E81WZUE41FZsQf8nbVTnUXVxPatzkAkb6vJAoN5QYXetQLS3g9WB8Ba3d6ikLDvSCYa5nTzCVUe",
  "key28": "3XyguWc1NG7dELAZKMTLGxu3R6aKodsexUhmFs3GseMtDhU7q93eTUDCt8mvbWA12GjwoUQEQCWas4PwGTC2SjMd",
  "key29": "2PbthrU1BoKvsEXgDRT8RPD4iM9RSuJ1oGZco6S11yGcJ16dZCMciHWo5T8zmP1PPgX37xjmHfcNFWLZtB1r6BuU",
  "key30": "2G8Gd6ZRYkggMhzHqFNQqrkQV3wiiBQdVjMtUfENr1QN7vhuAh8K1bBGMVCbtJsFbnT4z8NxMHC8YytF3ZChQ5fp",
  "key31": "3oVgxkZR6dyn3VjF97z6L5kyor7cTYeaqGDDm5vpmch9GBLUTxDCWVQVe4XgpapZEJzyphfR3419zhMSVwhsVMYN",
  "key32": "2jEgupXP5oL8y4eYebG2L6p7NjiNyxuFgRicZdsZK2srRatFA8PKApYiyw4AVHP88yxvkek2urwNEaSvJivZtssG",
  "key33": "5Wi8byQXpvAeWqnZPT6u2noViMccbek8ibT7u5qwUxhZUep9cVog2dLLYbaF3BzkLPY5jKBhGbJbaeQJFGjHGm2K",
  "key34": "4Jwj94dArvtxGNq1Vj3actp6NB8vyDTucZi1AraAAFqSAuQWV6PGmrHg7hEUS4tSRJFRK9LHkCfXaqmdtoQjTGrr",
  "key35": "34tKdegf85kibE1C3QaGgDrAUK3h41jftV6uspUHEu1QUHUsP8zDQuKroxw8RXcMkNJYcYLadxKYwXHb3o89umdF",
  "key36": "4jzwLe2ux67MTQMnLxu26Qy7g7kjsgQeQDbn4kA7YcQxdEBFnZGRLPVpwLmcszquBCu79xVZ16t6zWNFhNkXU8eg",
  "key37": "3LSqVe79TrqXSuD6VsSwUhE3GGWfRTSS6sMRk1iNMAYZcD2467otGRasbEyFAADT9sj3LKZSQNCb25WyZeBPWX3E",
  "key38": "5uoSYpekXjA9R5jJCK24QdJfKTSxsFyVX67V929pzdH8cPVX8Q38mDGHK3vpEjVdiuCwppLBjpa57URi4bECEenD",
  "key39": "bz1ngCx557bqRVosFXtfcmLAPLbGnZUBYQwGGZh6uW49NPrKpy4Vbw9jhNfnfbjnLB2y6H9771DNoxxK1JCbHDE",
  "key40": "5mxMsAUmdXqF2Xy7x9r9MBV9fLh18u3iLXoHnRqm4z2fMhJFo4bvU79KbhsBjUWirB8bQijjFp5gbu5mvDALetYg"
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

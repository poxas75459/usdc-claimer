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
    "4vo8JERWHhSYonCpAHNG6AcfoF4fnAJQxDjQEtrfNwWhjjx2r8ZHCrzqixE2bqtDmvYm8EgUMm6TQ8tvoxCWLZCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cq75mXvyMwXEHadt4CtHu6vtbmXMBrxwK7LmTxogQePMimF9mknmswkuPWxfoSNwbJNt4roCTwkkn5rp4dKhrF",
  "key1": "3P6AEvprWCNbpsUvpuQtmHgJY3zwFpVBEt2tsaHhcQGNEKkgnA3ocvEqj2EY87YcnMu8n4CFU5WXyQdYSvVLyCmA",
  "key2": "Ki3k9EjGhTW3u3vjZ8G7Vkx8bu1YNC2jPqc3FKC2XVcqTh89S816svJGWh9NK825FqMdAk8bGP7Zwxx8hUAQMv2",
  "key3": "5JuWmoVRi8Wb6LKw4rao4nkDNfsygfddQScaifMyJ5ZZNFWnezFQsz9vSq6nJ4MeZwQMBGGadQuiFikR4CDr2Ryz",
  "key4": "4WVA7mnhfK4eZn6hXwcvAYGx9Hk1cGj5ShmVgX7g3baShxMjEM2yyoTDKdH11LDCjBwE8HLM4s2ePev6F5y4ibSu",
  "key5": "5NbKGj5MSPMcFfvCB9uWEvvmYGne6daAN6obyGM3nSFwKfU9WPXZTx4Aw7JoNJddMkgH8ihDNmCksVQChp5Nx5HN",
  "key6": "3EEwDjTgfKdKuFvARw8wHmewUF37toh1q6HgbvFa52wUtFeZgx3tvGfXobcPtBZ4jKAuWTj8s8KNLkrMMtK8Brs8",
  "key7": "2UeycuZyNMyYbD3uZWkV4pjrtvjp25YuH6vsL4RjjyU7ZE52g3LdKg6iBAPDif6VQWGJoXR18Y64moe93GPwRR5S",
  "key8": "4bV35DPhZDJ4H8Ysn42dQ71yUoWKKhrubcPL59rAYD4d92z8YSxgg542Su5unVtAiymcLdT4RuaXr8Y6jBhrBzgd",
  "key9": "3RjmY2MNAqX8jF4SuCj7wrJaqgpFY1ytr1SUqtNoyU7dWf2oUhEo91K9n6PUYEKcsWERT74qYyfLmLyE7XK81JG9",
  "key10": "3sJmmhFFzZqBRUA6PLwihNTswaSzLYE1qi7gPjMckjeHGZxGDZGyXinPx8ii5gVJCoXkjyFamsJTMQcmbr5srFHU",
  "key11": "28Y8Jax6zN1ahjnpuGmpFy9DrC4vgBu6fCFhEP7VJG3jT3Vg1RXpWgPxJHJhmKc5CsJRFsycmVBQFZAgA6yTRSyW",
  "key12": "393XywaoADjqibczkq6SaiEYcyVdnnnQNEsSCHxDHqGvKcn8yS4v2hm65Nw8XTfuaYu3ee3TDDAP6jxeKaGccxT6",
  "key13": "5gfwe38fAggxZtz4nYTLjDqUZRVWgKQjeL9u7U5XqnWzywY5hFh5b6txcqdULyuPsLNikqeNcJyTLxt4TdN59ZR2",
  "key14": "4cdKZhge5VMnoBtQSkbMZEPC2nepTVQ7DR6CYQc9i81hjxQcmV4woyYTPLRmZR14P7eRhXrnnSxV4wd1iiUkGCvH",
  "key15": "27thJXGMozeSCiATnTiz5YT3FauHzvZeFEkonYeaDoQpDG3QBt8c67ARosyZBFibTzAg2KSPykH9xdCNmaV96VqH",
  "key16": "4XXMdJVWp5Uv88M4ZssyYsic8F7pMLVkbH8kCdMHrYd4r2SxiMFWYjbSia33xKxQjXESoXV4QJTJXg5pkj8bjX3R",
  "key17": "3bMpGx9zDUx7xYz7zC5dviZBVwK69jDPUf6hjzWr9NRQjCLBmZCtLNMRo6gx1xdSZQ8oPKFa3aB4DQQRdY9iV4m3",
  "key18": "4DJn8sz7UjgD1g8PRXSbFzrRUQxhqxSwKYY6xzUKi8QySFgpkQ3YHWHP1Ko3fGCjX65g48ipuDmM8ZuzfM518DGn",
  "key19": "2wKpi9KXv5JUq3GjXruFZDyB2km5zHs4Zc3caqLKo1wKRbGRrryJWSf3xDrE3hZGsjDvZVQ6cWqDie1m444yVBRK",
  "key20": "5M9qKSgARzv1m5471oaHy42Y3KksZ9gnHghRToXphE1XvaVS5VqhbJDTihNrCDWbxhvWsgTGWi7r3sNHEZERDoRu",
  "key21": "41PYsmNNQvabXaEwNPC5U5x74H3jLmQBaea6hdwTsLPXDKJGEMBYyjLUhbVAazxsVfDdJKz4SKK3v9u3R4ndabwN",
  "key22": "4CiVfbxJp3jgizsrSswxn2WVEwQ6wQZW7kWYAQed8uhfi9eS3juQNyLpsJRHQpY9QHgTMYitVETuwhMKmqo2KEs1",
  "key23": "29KpqXnS4eXAXZ16JdzE8UPxgikGzNb9nAKZndkRKHkMg4tUKvGApNkgHC4ZrcJvC33Tj8yGvUhsAz3YUK5i7Fve",
  "key24": "3Faupgm4GKuuG2FdKBtkP1f4QksLJsW4nPJ53MVZEF5Kj3nkfWNWPZR767F48KC3EHYUQKrs3AXPQG6fiehrqnCK",
  "key25": "4EU3icxZxCFF7KKRL4sTJYUbXvVKsZ9jHvBAXbcTWDQjAwv8CHdbnGvdz7xSLb8iU5KqDuxDEewW4NLwu2gFqgsw"
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

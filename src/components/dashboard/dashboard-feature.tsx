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
    "5KYV39Fibk5gzerG7wBVXtvBgqbiryiEbLEqepT6L84kDr7LyWisegUErrowhHrKTDqfrYJGtUHeeA6XkotCvkQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4JyN1CAAcBQMR9dU63wGkpqe5E9vafBt7Q7bqR1uP19XMhPvBoEoE4cHX6kX3w6qao1hwZox7JmqRbHA8tpD8R",
  "key1": "4rhds7NJJ62iDG8WNJhq5WP1KqkBCuLXQnPeTJFivTAmXbSA8WkcrgF1EHQQMH77DjcYqdBjMn1iZPS5VibdbV4V",
  "key2": "4iMfrpS96F6MjDQGvJjJ3M6XjaWrB62ExrF1ZuY1sKiiYv4teTJas2ab4VD1PBh2captdd5iLqZAKbfJ8DPU7Zd8",
  "key3": "iBdxn4mHHGetFfPY9FQj1AT3CWXbEeNa6LQNRS8sPqQaUerDAzNAd6wsnrEvoWnqDGUQfgTd5XjYLoiuesF4v9q",
  "key4": "zcFHsNka3Ea3yxrHMfML4gcafUbukVe737kL9PerboKGFpiMVZKgUZLmo7xvrAb6dcoqM24pzSa4L2fGh96v6Fr",
  "key5": "2zsrHHb6jBa8qTGUv159dhF9LCA2kTmE4zxajqvaaknbmEZ67JQmFqyVS2uvs32Y9s2nu9QemthukNcJLrW6JdCV",
  "key6": "YAiJjgNKU4FoZPcY8ofZHzvPpf4o1gm7NvsjvTFr9NXpV5dbCo7XC8gJyLsEKj1NaPeeWrkT6XsJtTraxXkDfAe",
  "key7": "tvmqMEfLPkLZhRubCjPxejWQKBzvNm1KMfP6k9bMxSgJYZGFDXwD2yp2VzudHYWHdaRgD2bqTpQUEr5fbyySECA",
  "key8": "M2XxmUAHEQJRQiULLhKyWqNuq54P8SzHmZNLqzKni6NufiJjAL6U4HXJsHmFgcMqZBFZRHFk9o2JH5hod6UUcjm",
  "key9": "2hLDWjmFn7Uw7Y79N2cQVJ2EvQVEBHHZcuGmbdih8UPq2XVCyJhfJamr5jEZpC3KAKWMT7YoxT9exBVK1v38Wbmm",
  "key10": "298ka4KRdmreQMoXRaHYbruWHGwxmUJMzPD9tzQtxhALEdwgMVFHovhiXH36a5ewP6qfehRGXMExTHwJ53FMYEB1",
  "key11": "2HkFucfxqpkQyNcgLjh4nYWq8JhTCZgFds5TV3WaMybaqjx8uPq6NiCJmcHnbLaoU16pB7kH46K4XvUmxsjLck29",
  "key12": "5gLdz8Na1ZQrYic96u6w8CnYNVSkrhRNjHkFXhYTtRTYqHRGkmiwU81hTU3ohbzkNYCBgyQDBWwKWcSC2nXz7Pkr",
  "key13": "53J4bYU26A6JYXS5jUb43bXEGNGQU8VZNhXiPBYpVsPP1An7v4faSdkc1SBTQ33bJ65PhqQ1LE2m4EF1xxdtH4V",
  "key14": "55VwhfhY2XREphGCkcQ6SHNiemjTz1YuNz4bRgTVDyAXhCQresbz5ggcZDr3pFX3eY2cp6dyw5KmwSoASSHXKLgi",
  "key15": "3fdsvAqFPEySByDpX9Xr1FKeLc2ZuKJczVzUSAX8zJViZzK6yanY4mYDiMFYGZLX3ZfPSrwN1CBdogUFgKMeaqHr",
  "key16": "2K1CypDkpCyj2Aq2jfwsiGLxEnoXxy1B2uA2hxACXpQsCnvQz7W7HDym7zyMxACYPNoFM4kY1cgvUrJzBMqYTrEQ",
  "key17": "5Tv2j949J3aVoJxzhYgyicQs8rFN7ZBryESjHjPr2mnDVJqVMuhXy8cjPBAXT7GD7nuQ9AvpB2zrry7dPq58i1RD",
  "key18": "4DHvAUJe4zYT8DBN4UPNPFHu9SzhFbF49XSbGHRTSr2Kb8nfHFv1g7EhrX3dHb3UzYqugwfdJ8b9vTyf34fjCnci",
  "key19": "23K1jErUsLTUDeMS6up8h1v6SrP5E8s1GdCSHVdseNy6GRUSvXYYhBmGB9svUTkvVk42Vbitkr3xDZhN7RgnBEun",
  "key20": "424Uq4dfrr6xmP5WML4QuBJ7AFqcuHBNiRPJDSmQNSH78ri8iWmr1ttFYgikpx1gdRPYwGKqAgC8sBFY5UL4F2g6",
  "key21": "2fbuEYRa7rfyxpL2UQcmM4iXW6tDFt54d3NCbGY24JA7FJtgQaLim7UYBwvmy1jJNyNBLVg45cMg5aPVsoAu8xuM",
  "key22": "2qxoRfoJsi4g5wcZQNBvy6qJL8VEN6ok46mY7KjFKm2FxG8xFxQ9GK2jTm4zFFdu74Qwi1BZvf8bnQ8apTZZyqwL",
  "key23": "bKTyF6CqTTR95qhhvT51BgM6DqPHJpW71UGMhZh8GFV6m7cCNHQtYgREE6BvVM8bshdCcDuPbx4amKSU6pW7cKT",
  "key24": "54ni5trNgPLbyV97EwuB7CDGMDdwgyWjqkCPiVB8Uc8vLqrMNtTpXFAM16DAWnYH8MwRMJDEw1LfWMwgjyBx1bja",
  "key25": "4Zty9ZbWDay3iDe5R6s7PuNd47b3qu4dnSRwsh9tMhcp2a8TPBfnzxWjZX95vtBvihGfZqqc5xSDZwkDcuPnYEgy"
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

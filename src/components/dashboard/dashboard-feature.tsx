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
    "4gDtXgc9NZhX1Y4Qw9zaBzaCp4kX5yfXPWpUdEzqpNf5gsDxu433GH5KoKUAJJvSEsyemYe633WGRpYCkufedrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "282twhDtv9KBxJFoF5pi3jLZJzCeHmUL8iZt1YKxh8jESnxYTNEEVa9TwYoZpdFZVezS72iyv5FSHN1gEbWi63VQ",
  "key1": "2ddCv8ZpmfTeiHParc86KQgfAkAcLuJNsXarfi7YXYzDt21uefhCHzmj74YQu17bKq8UhTzjUGvnSBYnXoibJdvp",
  "key2": "5YKd71Yxd39PDUonxADWKwF4AY2NiUNxt6rFnWAsCXFRbcE6cTRjK2a6KFXT6M4bzJMt4JDT8Wmrymy8p7Ay1L89",
  "key3": "3XuY1U5KC4gb1WFH6tUf1kfs7cbDm2rS3oETQ9cqQUPjuZ4eN9uV8EyF55j9HBdLLbstkxaBZzVN3DNuXStt8jcH",
  "key4": "4PkxQr2GEh82vaZNn7YrcTs8QrHCgkFtY6TsX4L9Sv9h4fJZkoX59faa64QAAvuYcPTFwQv31VULAXXdMWVdHbmh",
  "key5": "2T6MZYgpT8yKKj6i9vQ55uDmbpXEC6Dn3r8hNDbjoZXv6ZLJHkP244Ayxc3LuedAjjMExmcjCMRMgAFnGReoRbD9",
  "key6": "5B6tXfeDsuU4spDdKZTDheeEkv8j8zYPEHryuzMqjtZW9frUibNMckmdvnUYunVCD8KaCawG6VdeS8a9J8XnKWAd",
  "key7": "2ur5fUDvzWhm8ujp2eD57pjDc7sNmnSFueTAU1qrHW49zNCKmBv4Jvs4mWP3XPTwDNxoKELwQKPDMzdZTFnqH8at",
  "key8": "4puBq6w5MyK663Zn2cp7ZFP3T96YL6abzZiMtzirtk4GP54oVVYX73Wx9RpskESvpxn5ceydztxj2LFeaGHReA9V",
  "key9": "Xz4YAPMdX4S3q3PEyYVmnk2SZbZwffkkgUn3EmG8HaLYrj8PCKjEKbijjH5nyZP9n13h8qnHBjdLwNH4XB9Vo5d",
  "key10": "2rpKEWCsZGesgaJ5A8sKC5o7w3ckCTw33kST4vQB8goEph1mGXdZkQiVrYTqnFyF1aGJ3HTTyC7qpXuFyWKwR66J",
  "key11": "3wXsX6Fa5kyRYEK2jneyEn52vdbMVnqZ7bK1NsfWREJ5oHE1UJjJ1KyXWYTqFqyarM49BhEWNTY1wdVKWAjpe5F7",
  "key12": "VhWmjXM9VXTvqj1NS7MaygbYuZ4zua9nm1b3gBnjTpwKKYWneTfeS7FN2V9tYa8sWjaCoGHRoG3JVztoCcefBmj",
  "key13": "3ZvFpzbZNFB29EkXe1mZ687SkVfrtuQDQneZ8rsDcLpYm4VrWr9ymVL1mzRhNPpcpKhiaospbY7rj2XemHkhWkkk",
  "key14": "22mXr166nDK3hTFcULoCNdKpazaqJAw1WHNDUSXiMvVi7LU6gbKawSxxoK4uQHJWhJqRkbFn2KuUAE4Sa3w3sBu1",
  "key15": "f5PsXe75kwhsxJNZPB1Et9TpnNHhofBaFs54A1NLHu75LXkpJtMqaPLhRoWfGZrAX3KwF93H4yLm8mYPy6qRFTU",
  "key16": "51gLwgYaCjxsdLMyzXqapHNHeS5fgvU1HJkiwriR1xYZf4U18upEa1gWbkUejX1WsRuvWE2jWcipPXQgfrfFykqw",
  "key17": "fUHzRKkGkUdnhhK6dj79MUzwijTpeQmLKMcFCqKkZWkPWiJbX6QhvD9SkyZtSipE8MzsuUqG5GmRdSnTbLoDyqy",
  "key18": "3fb656p15LWfaCeE3iAPYxVeFFfDxAjq4d1TjiJKfr95RWw9Vyg1A1whVS5DWXCn3KTeHUwxoNwynXL4vcm9GfBM",
  "key19": "3P8skCALS4Z2awYLy1easU1aCWtMgZvnuqpFUCKo9nG4qaJEXhESRTaRxJ9YF5XpAapwMVsAhQEJe76Y37Kk88Co",
  "key20": "4k4owUmHLpeQFn5NFXY9eFtHSvbpTA9WEFK5GzuHHRrrC5EDXJL2UUSvNtkAvXwHtj3gWWWyLEb3HA7F2Nb1tHJM",
  "key21": "28dcmBko73Z4iKkyte7R2n3eFYhr9QC2jKswnGuxgEnhaRKDEZoL33PfnZwjmE9VhEgWtC5m4fxM16iL9TNMfJwZ",
  "key22": "3cnzmytjNBey1scXKVkP8voc1aFdCyEb3xHoGV6EkyRKLVRzfw7DkRXyk9sKTvwh7KEoxFWU3KBq7AWuhHswdXgK",
  "key23": "uWXEBzUZZo5ZKSqkBwVtcEYhjXRwHBrgWuodds5y8Tb4DBj3p95T9DKj4VHBf5dh5tEPeKMBCN2e7nidhk7LZjp",
  "key24": "5rDFEDr7UZdHG3xiG2hiht3gGQLk7FHBKzcELf8XYrk9CU6KkNAMuRYaeaiynCwM9WhQMiRLVHpejhY5NGVX8Fyb",
  "key25": "2DdqTK9rjkHXJtVpumxJmHunvAbZPGMrMascCnBCz6LF5cJFMN8Ht4QZRbu7kWgX7FPXSAUWaDKZWD5Pou6MqkFw",
  "key26": "4QSRMvp6e8NPpcv6U7sUarPqkXDq7nQ4PtfGDm8TY24wbv6cCPKpPTAPm37BgXsjDzYoEaaPyuaBQMrWpNMjHpCc",
  "key27": "294adv2Lan25847mTCdbrkrztVJ9x4mG1aZEtbKJ72Q4eVsaimDbj9btPK4vVRYCXb31uCPwCL1xtvJqdKBHE9wA",
  "key28": "2hWtYiD7rssQEBRtYqmx4U3vyQDpRDLa5Zsc4JgauwEuhSqZ9yrNjJRJzDxeZu7PbD4aTdJEFvKBdBdo2DyUoKnk",
  "key29": "2ahzVXcaHRqya6M87gmQE6imkP5orX4m1Lur88gNGWiXvXPXz7hHovhB52PUETTgDWRVVggC4Tr5BexAv9F2Rf56",
  "key30": "5wsT4zot94WM726nyVCH3mBWDvbCAzMwfi4tFseJFumqLJrPWdjGYsDbGb5YWts2whfcbNunDbGvhTBwfRDkXXbo",
  "key31": "3PYykz3BMrPjPf4UJxoaU8Q8GC5myZG1mgjYZn2iQ3dpVeu8N9tuSi42MD1S6kx6qY9Xj5LZ2dCJhzbHpsHsJ3sE",
  "key32": "218kgvDnYJ5g4uv2saCoNiWUDEMc9dtsyAHVNGunKr6zZSr3yu7Cbsr6H57WxBeVDPxXzTah2Qq4FfpgRuv9Vw1N",
  "key33": "5bJALVjfcwqAtJQVECNt6RwxTg1JJSeSTr3kvbMt44DVfq2jqCmRx2W62zpKr2EKLfFSYSDGe9XFfLLLTjRGWYKp",
  "key34": "23r95T1YVrkW9UwoeRmcjYmQ15MoKxnhmyPsRmHbb11bR8qqupMamEKX3uLP3e41bqkNFnTyFoudJgH1rWELh6np",
  "key35": "5MeNGFMNANom3txkCQX51VVeQkPrAf9HhEuq9pyoH7RUMmjcVb8hHPZiyZf1XspNRnX8yTQcFzZwKgvDkAx9X4ci",
  "key36": "hE7bqDVuaJkrUtuUCEnxVSb86WEyrpxrC3QK7hLz3ibRZjZjZVvjotMfaE56dumKqPMo1Kg1Bc7JbXHp1dFiAnp",
  "key37": "57fSk1RuW4Vh88xcBxJkLM6VRneA7X6zXBhoBkwu7vKv4R1nvWPS355GSKeUpfoFhvyxp3dgGYrDhexa6m7NGFJL",
  "key38": "3B2rDUB6p9LPG6FozeX1QW6rq5KgX8Ht7jSGcJcbBfBe6dVtYTDJJ1oH8wiADTZqzHkjTGTp6o6z71UAVg7zoYbB",
  "key39": "5vomAgqbKCU9z4KQoz5bggPvL7iNcQiyLpJQpKAHXhyMUa4HKekX21SfxTG2Ybcc9BLVf31fMs4cyKXG7xNHQtZx",
  "key40": "2ZtZVjovyobTRHMX8GtKcS7W3YFdUz1H2M2zijac2CBRDxr7Z2nmpymsiG3FfB42MKWW4CRHePdZU7yQh7L1fDZs",
  "key41": "4Ejp1RBTDS7L85GXkB77EyffqguYxYXoNUqJ6seAhMkqB5f9eaJBWDff8y9igJNKFLayMN18Y5FLZVeGXagRPZ7E",
  "key42": "2xPTF5ZFYjo3RFs8kVEbrRtysRMJASTwbVT86WTSNHUtvPgsdDmskFkxVSHgB2NCA5W3jnXmmE8ZvAncFttQEn4K",
  "key43": "4VgnDnDZ31hh1oimeuqUDxrJ21EnybiEEBW3bRN2NEiQkkzgNJiDhuYWtgP7DiL9LNFXjmaXpHbSZWbhou3LjCNX",
  "key44": "5rfTb6YvtGdEmWfrbofujoLgqWfb8Y4rejvxeV59pBMcfDmCGxcpSxkKNTGHweX1vAbXP6bPR9deBtQjemhAGpkx"
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

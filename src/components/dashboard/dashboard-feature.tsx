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
    "3G5rcZ5y3oFDF65LJGwFQCZzF1bEjxZsuGitFaGhByF9RTkNSTTQNJSWqq5ud3XgCJz4rhmqJik3cQg4Xg7y7PWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jmdjre6uKYBLY4kUeGm3GxeH8X2rdyGMRBmjuSY3xwMAkC76pDXWS3Z92RZ2xh3j5r98mBub9sUHAeeixAT9ybW",
  "key1": "2P2fSc7eAxdThC8RYGrqyh5CbRHHhpSnoDzBsmNdYQXq6fNZob4bA6XjJERAwR4MXRrJuVkpggBi6HWiJVvHEocL",
  "key2": "5pHeZbwBnHpaceYML5wt8p1Lo6L2ZPDwvqvqLcpN58491648cg3pkZsKQ8pQjpck8cCz9enpuMPbmymVkfkRKBSc",
  "key3": "3gKEJexpVxQvxZ9Vmp2m8A1KsnUkPTMCZtspKLdU3EAg9czn25o4J5xTgTGKy5pJi5C5dbP4qKwKofzoqHMe6uHN",
  "key4": "5GmhZQvuHn6y2XoPe7Df4m7JiBXCsjBkWuiCMYgw7khgjmv2aQtF9Gje3ny7cUYqFAmGhzRkhHNKNcRMZDHCkkzp",
  "key5": "4xTLMhVqgiewNe1JvkTuABg2JHJk1266L5mQnoSA4ohXwCarYHgRSD2oM68BbwuUEp4cW5axtRYpsH139fWgS292",
  "key6": "3v5Rk6vJn3XhW6WR1jVwdXTHaDAhc5u6zstruPBwKe5bLhxCkiQvC6EsqPGX49wjqZpoA2FiWcisCGW9F96huCsd",
  "key7": "5dgGNAJNetotqJfMYgRu3dWiJS8oJWdZHbcBFX1Nk5YR533NeShpsQaHvHpxYW4rNQt2wDF28uZq6RE6jQAGiPGh",
  "key8": "4p52b7jUNkK2H5n5edQqUyLDC55a4jVZcJn8mFrmmpkTs3yJXv6qzPgHp416TqXgmMrYDmYzdpqBsY8bZQc1RYNy",
  "key9": "5K7Sd8bFzwG8Jpqn4cQYEwD4eCAUBYirEb2SG3BZKHCnFXxDqp2g835LiwGU1aQEmMduBcQuw5c99viYrgs3qT7i",
  "key10": "3qLbQD4MDaqJos5YoxTbjvtSgTV2huuVDyAti3o7zdXjGFE6k7Rqynv82Y1Ub1odoKVe8XnadRQofnKyqgbH8QZf",
  "key11": "4FRwa4FQbasgNAZBJRXWLwnnt7hAi8VZb7qE66hwQJk6MNqFws9d4icc6YySFJ3wWaZBSKWjHrzZRduJMo8Kyd4N",
  "key12": "wDN8KecF7tQq6aVyV6hmQiozhvN3oauoK5v8YmfLi2VFk2XEv7cWghwteLmed5Ydn8VF1UXqWm7xrreBS26iikC",
  "key13": "3rAH1zBFDECM9PMH6hQsEHqY7QJnvPkkLvpvm3RnWqobEWc5tTQsA58tBjsjptx85h9uebaUCVTJ4wpe4ort2Mhu",
  "key14": "2fxJ6KP8mYjeGnKBNN8D9GNku5TYe6mZT1fjUPmtRJoxCY379Gg5Ttv2XssnXKyGy1WEGDqLounqW9KsZ4sfB1zv",
  "key15": "3GKFin9QNhfsvgPENwRf4NWBMHVg73JHT6VMcv8gK8Y4ecwC1BGfk8AJevgg7GAqiZ4owyohY5vi8B76RVZDWaqc",
  "key16": "644urAyG92BBq77Q1s1HXcZZP4z28MPpqexMDipqRKn2KC6WvYr58neeJLNGhfsgWZiCpJYDQkCkgpyq4fRSNzVC",
  "key17": "2XyfjLz4WREdH2jUKpobXs5juWXSSjodFeUvhgEwE7cQ9f827PD9TNLxQ9sDvjpJ8KigzKg7wDe1HnDNE3SQDnb9",
  "key18": "51xyd2k3ob7uyUWqU7vwJTxHPqYwJSFBRwHsc17RNaqnHTRdWURvfpcBYn3ebKYzhqJUbFnCdPktVg6yk9W97PK6",
  "key19": "5xDmpf775uhubvP6aHEn7b3tDqJTYTvZSX32xeTfh1B39QjNY8HwonZvfnMKkpz2SZjJ6ffvWT49GjGPGWBX5VZE",
  "key20": "41d1e5jhTwezSVuWusZTjfftshcHeVJqbTcyyXwFCnd83FACdDXcxfGBdqBev3fbdZJ1p2Au2tJqbsDUtzr6Qcvx",
  "key21": "65QjixgNUyx1mB2j62CJqYZYTm1qwJQPEauRCdEX24nYorEufawcyXiid9thgmFn2bNEmTcRmrwRPfrGR7Lj5GMt",
  "key22": "zVhJT5Fzs6TkinuGFLU3pZvmwiy8oLgkWdUfNYFCeVrfEUgftdq94J1b7hseWj5DSqVusimUsAhHe3bqUQG699M",
  "key23": "5ZTRDYeRE8NPzjYN7AHwtWf26K7WzV8VASG8sF6Ugw3Pu8ACEg2sPzBy4BvCgNoiTNaxXN4DPyrRwgnVPiRQV7rw",
  "key24": "5TRLUaxdiEZ3TNUSSHRpFZnjjdYLeVHVBWhrksxYbXcoG25ajTrnH5FL31RobN6dqejtQCAe2wsAquV6KgTZnotm",
  "key25": "3pfUCw3xPmTpR5osfDF3WNh6NAfkBt4KQTEraYSKP5byQffYoABkrNn9aXzRnXt7D3LfSz9s7SzqxLjvyNn5fU77",
  "key26": "26KzBswYJHFcp1cq7rEyhkH9jfwmMKZh7gynrNhXXarEgPdzFSM1tPQXxuiLmxxoaPxMRCieCDY217sUtxsVJFxH",
  "key27": "4xZhtzSdgrGqUHWWvkFLuA2dCPNLqMaMXKQQtyrCVFdM53oCAWYV5e7kxJ6wdXN29P3YeDgpU1rqRqmebohveGw2",
  "key28": "MSNptsMD6zJj48e6QbRt5QcsU9XKAmwtRoJbd6kvbt8EMxGKhMdRehPBzw47nvNGB5eDURjKPk85eZBT9pLNsoc",
  "key29": "3dhkjRSUpN3TqofZFxaUjCpomM7QxxByqH6HnqqLy5irSKxTB5NYRcivCW7QdwiVhVwequJz2JsNBysH7eaeDoQM",
  "key30": "4Su9XdSVQmuNjCZvo4BNJuYyrDQswDEy46os2v8rxyDBWT6Dd7vpYwU53ANCDZNcrNZd5thPzNAEvSaXvh749UNy",
  "key31": "5ud1h3HicnW4zu4rc9gnvGLu6wheNehA98FHC45iMfjcaE3jBfRQhVunB7MqnEQF1WLigdB4U4S5fW7CRKTaqHWL",
  "key32": "4tdvf2kijX6WGd4zCGbXh4a33EeQYmyka2opTuHLBH4RKKWLKpLh7uW8Edw3XTt482n8HUGUTBi6nkbqtzHkriJx",
  "key33": "uGqf9ySUaKcxNWV2CPvujaGGBDAsHUWV3PfSShFi148JuhRSxYgyF255GZ1Duv5XhS8cJ5MJSCHrDZmckmUqidZ",
  "key34": "377cyZjhWZ6wHqAByzVQ82Z6J3jnPxGTj46UTq3B2XUZH1rXGn5hv8iZZ9jwBgj6oP4dVHna3dm5ypURqw2Vany4",
  "key35": "5Evsro8hEH1PyiiD2Md5Aybe4zchQRgy8MQyd4GpuXQ6FHj6mk3HW1DTivzD7CsUH8Z6HkL2mx9DkBXaXAit3uX1",
  "key36": "25vMuywq85D16Rn2L5VmKPug3FvqG4RYy8mNwLjSCxQmgCcBLz8MK2fPUYuvQ1YcksSNUwWbhop8tW3sCXKwa4Ka",
  "key37": "3JFbsmoQJHPpa9BTVD2u1hJfppH7kpcnf7N2uYjKt4SaC8XL8aSQtC9LUWZj4q1xrsE6qh6KAtu3D7kz3LsZx2AA",
  "key38": "4jZ4AvTYhwiUH2uXAq1dNUs5DD3XmzwDdLuj6NtBVmsU6va6FZaAzS1ovkms58mTXEBhycsrb3Wv7m2D3zYmJsJy",
  "key39": "3bkEyTSdQ1Akmdyo4Ypos5rNFDddcZtVUf8y4aqg5AzGPs34i2hm7pGXfkPQoAkXZy49h5b2s8MKHuNGeVKCpcq3",
  "key40": "39QqUNjS8aEgkjFTzPHSygZYRXetSSe2iFQSwH7vbSbQrYwkKiJhhv5uUg3stw2N7dJtjZULHhLXm9gs7fbH7xYS",
  "key41": "2H7AuLybJzCkfbSdmY8JJV2YPjzVUk3RVa48vFPo6fBYuWjyjU7EN6e2A2YiaM4WEzzgo7yiYu1ztG5QL1o69SJ4",
  "key42": "4wiPbBvATCKED1Stcnj9tqd5C5USB1dVDGLUpiVfEs89pJDmjHhWhfTDkKbKhZ3eyikbkLM4KwPeYUxj9i3QFC5x",
  "key43": "3djywEXoxuaAbGEpPhH1XiAmmCA2DMbtUE9ARob9s36nnmX45YorrY2KTxvJTVkDYksTPJNECEVTU84Lmjn1fJ7z",
  "key44": "ZvJdQHrJTEZiYfeCKDPwtNoNtufU3wL8zn9oW8T3vuuLeKessF8QGjgdo33FZ2mcdjqzZgE1nkdKVvCjw8EkPAG",
  "key45": "5iBgqi1wVwVvgWtWnWreqRQcV945oZzfgtbRofStBWURPyd47fRT8ya8wXqSeGgaAbb92SMg9RbCPiKSG4kgJpMQ",
  "key46": "2AKRGc64NKATpS2iaPwGpU74JyZSqhtwSSYC9TWwom3yjW8RjixQ3cyvx1k6ja5VmXeVSu4KRSE5PX5qt8ntwh1s",
  "key47": "nyAqidmqc2kLrbXaS7vwdBXaPZSGZtnuaXoG2PCWHFLpoEjdXhgfxR3TYx7bCkJrZzZQJK6BMVyL7qSR3b1LwaS"
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

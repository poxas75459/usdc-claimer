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
    "4vqScHwYqg56iozd5w937WJrDvVj1GVmXLVEBfhXVLdfvvhaXGMw2fUUzeL1ArMkZM8nUVQPed3TAmKuQz6MhR1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vJWRd4yAiXS8Vh5wBiaS752WssRvXtv1RKRx3Mtr5vP7E75eTev2SwfCnLdMChz2LRHEppBPxxYAUYY3ThNsjjF",
  "key1": "3QWu6E6fhUzdgPYwXrYtKLLCjCZf9B5JB21ktsTMVJM66kKCEtxK27v4nCBWqSmECLNC5YWuJ91edBYNgR9CJA7h",
  "key2": "3tqx4XL7cyss1Ln9TNg8PDNHkNzEvppBttZBQj4svoDy6jzBHY8JoDE1N1NZkgd2zAdJHB8DC4ikQggCUHRXvwLR",
  "key3": "5AdddCbWUinZQhrV5wwgMHDEsnb5sRFzNSj1pTzB9pYhFhnS81WxW1MtrpH8593ae1mQ9RWBoMQ7Ha4a7PnkDWpa",
  "key4": "2pj7sjPSksU49CWhrLrieiLwTjn3WdDm9rj7NMnSK1P1HEL5DzkatNrGNtqAAzJZcYcvZgANYz9jhkoGkz3BboJK",
  "key5": "5bRRCjQ5jGwWYuftEwVvPtJcmZo3DY1ujKHsLvgqZuLhHMcmxtw87B4JPudbyny8YuPDMY6oTtFn66zzrc2qf9Jc",
  "key6": "3x4KUNzCzqo6Ay2dYZVNeAEmmZJTD3HuFsPw4GPr6DpVZQtDNmWEFqU9hWQJcLVFAyMt7X1VMBdtAPHoFssbjZQR",
  "key7": "61k89i8Fn61qmF6tceN7LQzbMDNxiMGRHgebPDCbmwo8M49scn2o3DULiDbdozfXFuGVxMJTNCBiZxHmu16CCUZV",
  "key8": "RZAy3fPZv9cWi5bL9NqomarcdDYQpqLdDeweQ3kw8fXRquzSj4pWHP2jryne8BzKSfhBos5jeit2FfUNyZb7qre",
  "key9": "vixJzxghAGZF298QJYa1WZDFFWtkJ5PYuTPTcZmi78EmoEo2gVtWGQfmakq9o3uJjXUeaeNFtZk97nJ8phqoqQL",
  "key10": "2QW226PsWHzbBZ6GyRHbeDMw7g4ASQ2uJSTG775uGTg7qfiUyX2AALZwM257HQoQ18wUW1iPhnEdukZ3FDi63mSz",
  "key11": "5pf3kX7q9DidFKauBkxHMFMbJXXDWYGwCcKZXVYJTivjPxiZNWWQ9BrfjDagGJvk8HLoLg8Kv9vDSzr6cWKsGfrW",
  "key12": "UXFKqVuTt2fHLFdfvSXSsZQ1sYQiFoSLBncCd5M8ttexHcZAv1rizzid6b8N34Qf2iQEZKB7egceM7bsQm5BxRF",
  "key13": "2kx9REsCC3URtkJfpVUqPzh51MxVxHnmMyRPebe74mABh3foc48EGsZr1RRuw6ucd9DTtCYLkAJNW6bHuXFFqmPm",
  "key14": "4s3muoJzhMcLZxedcw4Mab3u54MDtMDezDUgu6REWbi2JVsD5yh8C8XiA7EeLqYnq4GLymKLJi7dULnnbu3DB9Jk",
  "key15": "44W7vNFJVhshoYr7kNyrebdopPRPfDJMDZ8JJDt57wpKgNDM6tKgzDorn7Lxn33ccWCadWKHh4EsZPtpmj9kTtEw",
  "key16": "3DRd58uvSetNzdJYGkgV9t7iXoqbnZUBvykYcrsbsiCrodDb3CziLBWuyyDpifx8dEGQd1JAnmgVnYzM9v9XK7qw",
  "key17": "3Mj7Pbq5FQQjTo5kbWUMEzAfwmqqzfn97sk9ckJ45kGoPZuy1HRNAkbygVDkMexFBXYN54Bmpm2z2EVFx8Jg7zke",
  "key18": "2hnPPJTeZGcUPG8GaV4LPoiFPHAxNkvbtp5ZgqXK5V1hRWU99ska3yLW1aJEUjC2H7TrsjL6ZzUY4koNtHvtdT5v",
  "key19": "2P3mnu2MzEspQwyNvhPKozVhtgahYULCpstMii2yT1NaBfmnhLCejFBWtjVYdwVwm1aTtsqXmCFBExt6WgZSzyu9",
  "key20": "4xYse4n8ABvzxw3gETS6jiVdhZrfDnqaQdpzbmq5F4TvyFwHGA2otatHv88hr1hx4iU3oyV9fFDX5qkodGwmRCLZ",
  "key21": "4CGviA5nxqpp6tWcJNp6D63CJVEW3dKSkXvdgVyeS2AFarchyNFdDVwJbcp6ZmZ2T3VJdw1Yqtpbw9pHgKeyh2Ma",
  "key22": "ASdwwBaByFzW5Z5jGdzkvCvyc118xkvfKvGzikQZYwsS2Qx9kJNNHi4TceAAP3N7B7LsWk2rsBedCBbnx2W41ie",
  "key23": "4BcB6N46DmDxGDWV1pnUCLgpXur6UDYNLyf19C7FX3civeykLmwh3i1xauqCD8TpFxLRDZK6WFMCZkVidkKkDhX8",
  "key24": "3KAUiwH9sVxGyfVkkeCzfT249mg91cWtwuAF4cqzuNon8qjcX88KArCT42kFrYzNBnoF192wf5baZoicU1VJVKT7",
  "key25": "5faSgBiHJC6xMzkNnWUhRhwsDMrCrDfeTFUKzfHXQdeAXju913Nxxi2QqtStXrDZewvBwiF1TZ1u6fjPjy5S2WPv",
  "key26": "5G9bedtJkMHgdS1mZ9DbPM5oYQZPy15pNmDB78Lswz2h7reAa7CBww4UEMF98GK3bpnvYG1KdqhNXoPvTMxzcQeH",
  "key27": "4qenvRGXQL8J7BHuet86GfxxEzAnaETCwkTWWDYCARuCbMQv6HpVjJdiuBg8LrjhvjexCjfg67vRTp9LxCyzuwV9",
  "key28": "ksosKbjwVX9a9fKXowCpZUB8SZysMCmfzeNtocHbtvhZNxnDoQtzre2hRsXGRnD9sANyaUu385KDX5oHidypeMe",
  "key29": "5b8mQJe3bExoJBvhM9hiBfYaSGAMhCNdpEpjuPyRXQJxitiLpztRM6AHH7qB58B1VovAjKP3DwCpSd5gfXSNde2n",
  "key30": "4V9DPNemNt7uFc2pFHdVjA8gsmVK56hCvSUpQw7hJegoFWFJfZjYC7v125xQEcEHeTYw59KnCxiDZSytUL3xJTt",
  "key31": "234rVu1MnHwGusWqEmgkmzhausExvKBZszmu9g7eGLn3wgnsyJQK5CvEcCaQA8Wsr21ucirechXWJ7W3HkzbBwN8",
  "key32": "cmuQ7KXNvEsvb36GxsyQL2PCJZpqWQ9jKQutdMyTpCURuukVLEo92Xe1gtesJCrJrqQWXZGPurJXPQixHYpnDab",
  "key33": "4a9bJEeYP1DN8YPWUEhGvL3Ly8b3cbuicnH3vBXMKXiopBzjr1jL59S63D6KVpti5x1eydp3TeRBJJZE3Uwv2gFP",
  "key34": "3VzAPQdD6rGdxuSFmSz6mMk3X3PPvyMQCNjGKNK8JNQDQn2m4rLNRSLv3ZzwJxPtyViv64jCCWW4v7WSrFMqS9KA",
  "key35": "2EDPQfi6wc6XCf3cPxFuRHHwrXYJgNEHCvVq7Phry6VT4fYdYSUDfsKemPu4Sk6pA7f3UW3aW2Y3tm4BmrZZcnSN",
  "key36": "3Pp1x28wR9uaRs3vWEH4kkLjvbJs2JcDePqPts5NdjUPvNKsiwA7qx8ujQ5oEHuNuddwCV7GvBoEgefEYBgbMkX",
  "key37": "3xK3unGStruvBqRj8MY73EjLJQQrZTQfuNACj9GsjYjK2ukPhmvkFun47jKrM1ydJtLXfRhktHyBF7652mu3Cmho",
  "key38": "4hg6fdE7FRwKqhCMv1R16RLnbYqkVMy6rhm1t2iVvgTa9UJ86xLt8kZCVbDWSfhwwQ1SwUuT9haGoFchy6hwcEYH",
  "key39": "NSkF7SKGDfHiS1SXLafgfoogPGG372EkHvhqf72kD5vjx5XCgyUEwBDYwzLT6Vzevzejn8zQvcfHBbnpeCjeUAv"
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

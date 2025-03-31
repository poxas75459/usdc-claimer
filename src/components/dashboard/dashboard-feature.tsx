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
    "34Gsia82XuWb39XhoWamVzx8P3U9fnLixzTzanGczt8NQhKN6ki97QizZhG7nb7xojHsXA6xf9f6PSjkKiC5gPAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bKybucst2jbZVNkCiqN5iHKQrbJVsXtwHpjaJWyrUw6gD14wmMx1BJPP8Kv3fhd15MYR4mJJ6u4DVUoMN6kuAgT",
  "key1": "4ap7sJSf7ZWLSaY3g7q6Sotemut6Fzhp9Hph6tb49HBEYWo8EXYkhZbXRuP5JUBHQTtMf4DPA8TAiPQR17zH39JR",
  "key2": "3ZYH785QUjJc6LfWKW3AxiR6g9NfvEbEAovUvUTFrgqCw84uazh8D2SWBDVKxf1WBkpaVVt2a9YhZD9roUkEXUgd",
  "key3": "2fCW7BTsiwrxU5CKXACWX3wobkWxvN3mvqKoEeerZV5hbqFUYt9kjV6Fgm9dbiS6VCEXEfzz7bKCBp9Aoniq9Afn",
  "key4": "2XnzDBZphKsQMAP2kidFvDuKNehuQafHhHET7yWKJGGZtSLCgtfVVZWLxd4w66aq1Qc5GujqKTb4ChEzMsFHKKqq",
  "key5": "2wqkAMqhvUUm51mHbbifuFS4PqebnMLid8zqW6kpC1roekjSu1C7cL9E9VNghgjxWRCKbKKyKBT6GJXiDc1gpC9K",
  "key6": "374YLvhD91yn8Vzx7m1V28oMWKMTtEeBaAYvRYX2zBgx3yC6Q1CJWU2c6P7rtzYULxjBT1fVnEYi2qTM6pxbeXtR",
  "key7": "3xt7zjitaYMiGACioKaBa36bB5vWD99LbJ6US4RavqqoeKcvtPc6wcqJTRMPZrUhy6D4swMEtnLzshWYBSTpwxMM",
  "key8": "5At7FXMK8wyJ5AQ22bMp1v9xRUuLx8EeGWNnMuMBst1dcipZozeZ6NW3DJthf681rq5SQYh1Rdsg2uUdUKV9EK2c",
  "key9": "53VAvamTaPRYBUjBvizRk8VSGRaPFXktdTRGivgyytXxbVjZkyPF59G2Es9wco23118eHsoieFdYhPjbrmpjFEWE",
  "key10": "28u5R3BCyHJCccJdWKzdbojGjyqfqi8bRep4n6L7LJohHBSgYgmkRSmLeKtFHNhk2TbHXNQYv6L5RKETEJRtMx3Z",
  "key11": "4dtovaarBNBRjYFcVupJLgTFYfgwg1jdqvvQrLL4wSEYoJY6UFo6bwtLn7NFrGviRMpGEp1dyBuBDBQnnhbvSu96",
  "key12": "3D39e33cCFdPsKoqq6mvfvX8nGrNgBSrCVF9gw3jqHvx1ZEs88fKS53N9RdNRCLQiJURNPvmP2KJ95cSgut3fACs",
  "key13": "4BZ39N2z3Um6zJQv7MDzZoBcfWpTYkDtVUvSPXsXhqTUSYdkiraV6BiF6QQWBXwmhifb4YARnyKMKvfU6Tszq34e",
  "key14": "48J7bf1EFk3DoyEK3P98goyVFjboQ7PUxDCVbPiphCqP3KunVPHdoLGdXh9e8YZt2sT4otRtxH8MUh85TzV7onq9",
  "key15": "4XzrKWWkxbajsAmqmPtZGxp1BUoBnYHw7Y6UPEwxd97wxt3E2P69LN9eD1CHAxWNB4E8h8dQWTkUYdR6bUUtwCey",
  "key16": "2wjDmSW324qkbuqMBRbPq68LVopwboz2M25ghUUh1zERz8nfw2y7oNvF42mbCxxMSdVujsQXHnE8xjZpqshmhooE",
  "key17": "2bWQZxKrByD75zPTNnfj5zBuwpaoR9dVoAnQVRHXym4MRFt666YC9awQCNhF3x76ZRsiAGstqoBXKBzP4LMc2mar",
  "key18": "67j7ye3VoPy7r9R3Cup2adaaYASWBD7FeJN1zbia5i4wunXEwUndR7hqvmc4HXBGv8X1SJ1L7zHsgRckEWa9PRDx",
  "key19": "5hTrsboPinfTgxuvvMpJ3yDiWxDu7EqSkzgcxXVYKkopmUAiZ4xvdRVdDDrUBrim7uojbSWiRxzveRiHJvzVd6Xe",
  "key20": "AEip8EtnRy8Yz16s79SYGP1Hx7AFEuEtNvn3XXVKXizTo43tJCM6auW54dtfdviSugLR7DUsp5BEV3NrP1JGa89",
  "key21": "45zsYxu4UWysA5YaPVp79EB3ygSvnMZVocA8q8NL5dkfQHH8oUHgbBU8FaSCtyQ6tzrWuPMJEefbVx1UK6XqTPg5",
  "key22": "2GwDqkEW6wMHjbvy4BWcvFA19PenejpcbfScTSCGih3Y19grfjQBpqKggu7yYJneP93a1ZFqdaSkaSs2tQYoPRcH",
  "key23": "3vRjcdh2q7UbXBKAboqXL1iCkPNZs6AZtouJoGzuGRaNfi7iHDAd3DhahhJr9vFFMwRBWe71jNniUWb1ezqJMJWS",
  "key24": "62m7F3UU3idmSVwEehknNhWF1PsfatGkDQxRiccJV8VDZeG4JNVU19nWvadYY3NLvoitGVzfgffs5cFzUJF7BvGd",
  "key25": "2hQ5rAAnomkd3UhCHfxRYNb5oeRQxw5T82fC7sDNGBsuywCigAUYJCJCQgqqos96HeWRtbX9DBL8TkQo7qnvVFFJ",
  "key26": "5YBtyM4JpbfcYESJUZzsgp1YEfz2NcXBnmGBFXfScyPsgsJGooqCBpwxeQzto1KVbvZ2bP35bt8LJ6ThxakCi9rt",
  "key27": "6518vTREGRjt3CV39Hq6Y39ZkgdGNS7eDpPBSkTnERCqM2FuGetiatYExnRfb1uPpUP98XVrebhwiUJeVtBbz5cF",
  "key28": "Wy6s6tqque1NH1JHxHa9PNAULkYZpkcFuQ1BZeVTow8oRfVoRVju1LXo93wnXftQm83cAWL3uaRDi3BLtxfasSE",
  "key29": "3eXYCpWTAFye23n4NmjnTQFJjzLaUWbSX2Vo56MqRe3gGqhPq7fESTbGgjLVsLvu98gd3c2FWW2PRXN33rGFQE1Z",
  "key30": "25gYACg16ppv3gkbLJMiCA7BtHdxVPTVHaoEhcEo6TuNw4a6RrH8FN5jyqrZhEriBcp5rb33pk75i3EdyAnuTNXM",
  "key31": "3vcCu56wQW3rAouQSZJciXVaeyqvHMTgTRigkpRGzciFSb4hPTMsGtd8QUo4g5HkRQ56shNWJQ9sMfxrZT55vRRC",
  "key32": "8FtwTuhDmDJkgBxJYf5pwfbWieEy6uEmnU9BF9KX8vgB9SbiST1RPPCXsMf76pnUmCaqrDu6faMDbAT6uocyx3W",
  "key33": "5ZDV53Gp88UzzwTHgRpqFvL9MzpjTxdCQ7cqHmiLdVkay5UWsj7xhvhghKHdLduxva6koCk1jhd75XsFQUnam5iV",
  "key34": "5KELGSeVxwMcWA1xLk9FgkuQuWpXbPNV21Kjd9d1wczQLe3SqTM78cE3uNt1EgKYtdCEQNyHjRSVwFxjHiPdN4wj",
  "key35": "o7s16atMZhUxB87nDAGGsYW1N8YCT82VyiowRDE6tnJfE6qKZ3PefTP1HDq5WkfF2nzgtiV44obi7H794B8B7zA",
  "key36": "5ZnsXePuBGCuPNP8r8c5phJiLYkSwpvSSfkv6P6pby7XAmofrQ8BJxfyf1uHBXNMcQNx3FNaiGLfNHoAWnfRm8v3",
  "key37": "2LaH65j6fpBchuZ4tnin7ZHvU9Uir1Gd9c1W5FHut4bkF1keuFVoAkxcgsfj4cCJXEQmxmF2THmdtNP4FDZr23Ne",
  "key38": "2pRKiek9pTgYtJF9frPD63dqFpNVLSuALQF3QbBpGUmqQqFTvspfavSihRsjDwUZ3wtnigsj3eUfFAh7BsuE7Df",
  "key39": "2p6VQYVkancjmuHEn6pWExErbyVUERTCCer3RNuU4GYvJXevMP1NpaYR4HqcD42HsW9ffESbASi9Z9o2fYcVXUTE",
  "key40": "DMvcrqHQsxyyAopzL57sCLLPpRXMkHBL5v7mnuqbxqrQrbCWCX9RbkLfJ95DPvdATG6t5ywHerwDmpgeaeXeWtG",
  "key41": "2fJHq5g4NAXtAL1992G6vRxSsxfV2rykX7z1p56fc7E5paDYmQMgUx1znRbm64omTWj5WXNL8Yh5qkzi6jPvyjsz",
  "key42": "4cCEKwFtKs6LnEF4przB8TmZPPshX8EPeCgxzX972EY68drU9K6JkFTar4DzUqsXhX3jVym1bT4BfTti8yu4BASk",
  "key43": "4Y573HFct5gFFg8z4EwygbheCfUvbh3kBbUF7EFLpEkvjb9WejFfjkXFB6FixjRy5281umwbVJRmYN82wPbLhcRt",
  "key44": "4NG7z5A44HHeNuii5LChNRu8mLDZad3ZnovvfHKot9L4K9oRPwxdS9rStNhXm5wX5rLiRLtXRUv1VupRMLKp4TQU",
  "key45": "WKSZxiyQwPrYNK2jdrmEiDgVBAQ6CKi1K2sc73H1VhUNzv42VwBV6ZRwti8mKWy3oBHXmvVpL1tuRU25GfcR8jx",
  "key46": "2aU55Tmo7NPyGE7UuWDvh5AQW2c9dbNSTNARDm3ER5f1mJfaALiyrm59PaBjHWMAc9bCPeFuiDDDutEZvquD9v4f"
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

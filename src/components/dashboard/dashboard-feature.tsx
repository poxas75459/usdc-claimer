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
    "6e1fotaHc77EbfFxiCZAntB8GUpe2tDWUA3E79xTEq3DDCW4DvnMwQLPLECdhXr9WvZWxB59iEfbNQvhL4STyJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxedCrss28vmdxPQE9B6TpW6DhUXgCLHSR2F7sNzFEZaDkkxySXwhGMKHR1E2C48fVRMMYspERypYnYJgjJoUa2",
  "key1": "5agCDVyqvcHxhg3RDcWcMr7J5Kq3b7mZrdqC6ofvz2bcTfzarQw6NAietq49AkVNezvNNVnabPMA4huxLg329Wmw",
  "key2": "4k2zsNpiUoipiHV2Eq3SBKp737H8mVuUdMug5pYCrMG6moipeX8idR8qspTTpnNCYpRKNjzwTERW64qmfkWHBopw",
  "key3": "323X8j65GTmx4x3AiPs528oP4rmZtoXNL9AVePzpvXx4GJgSDP3N5aaKfePC8qGRteZvidPc6gzNst1tL6iZec1N",
  "key4": "228QP2tTKoFPgstzprfXZkBUAN31yGsfzYGgyHJfeBfdT1aKrUMyaEek4HbRKZ2RLm8ymQd2Tn4tzEef7pu3EPM8",
  "key5": "uueMCGKxXEZHeuWMc68ZNJ7yH786EZUoAKb8AEaLCAUxiGKPC5rsXVeJ5kf8SJPkkGqMVMbmTGsPS3annCnXiZJ",
  "key6": "2i6gDV67Yusfqk32cB5orLV2ZypxkMht6iKsxQGbneV4a3ZqYrzgiNDAhsiGYzaUQS1KtKe3sD5tNpDEy83enFFF",
  "key7": "4V36GDczBKKvSLbCWb5mZTjR1mR9ZWeE3KyzuEA2dG8669swZyAnryiaaTa5T8zMXo3t7bdmzZrKi7FQPfwCJp3a",
  "key8": "4r4T43aPfT4oM3psigx3yv9B6iG8nbUrmT1GKHBwAVhTcor9GKA3it6BFdsmeVbn7MBHt98YkUMQGJafv56FP44m",
  "key9": "4A25SE9d1W8c5naCGRe6iCReMX2mwwVuKDq76SeJVAus2HT9oaA7aLzbBgVEDTP5hXo1jEr1uJLPY9RHSyVVQV34",
  "key10": "2SEYD8SDZv5F9CTFLqrWBmZ3Mj99rmUTmVYskd6pgDyxpDY8sbqnjocfKcb7d4dUFaqnDKTgkGmnZCLz6ojTFmNL",
  "key11": "2CqpCCJwNhLobVvhRh93yoBGZvWQM2LhXNhzBBsrcWKpTjqKnJZF4SGJfAe2Bt9FAygJp5UR9x5jES5HyskJRCSm",
  "key12": "2ugmXyHkXVqCYHWF7qp77MTJm4gxZuif6VRhhWNrShCpuhFG1UZRqFKxFBQHjZD99rvju85Pvpbv5tNSBPFn9Suo",
  "key13": "3ykBkVak9BjHeLmReCwTqJnb2jqVeq3EivuAxwmUQ9DAMcKKERWc5QBvuX2UNV3vTaYjGybH73bNeL8MFQSEnR5X",
  "key14": "A99qLQQL64n799srtM2275dFBAZpRrBZdZCGqDJAYRX5k3Q8ifGfFJbU8CejvUU9CtivA6W71kYoAum6Ad4RoKT",
  "key15": "KC2Jgjj8WYetVwsWRq2sAj9jnTVtGxj47Bb9GhMSbK5kNSr7afYNZ3GUXTkggt8KannTRckaydSBmRKJKEajvi8",
  "key16": "5Cu3svJyze6kB47xVbGKV6V7LHGxRvrxV1BrZnwFAb7cv3J4guUaEX8ZxYZp2v3R2uY7YAJDfovZ9A2L9dxPVPaZ",
  "key17": "4S6UCbqaDyi1zbW6GHWNTBiYRKm9gUHHtQZckMJsXpcUS6Qs2j8G3zwQB87yijvvfkVMeXdrMpn4jAmrYMPzw5NT",
  "key18": "4oYRY8cN9Lr3yqy171eFZt6sQ9Fzmogug7JrCauEo1c8Lij8fP5bscw5xapxEPKxnZJpFFtQ4HRasjwER7x3Yxtt",
  "key19": "5z6jHbKPxjNWRcER2rduYqLmGXg8wffaGgmNo54yYFrxU6qypNZqzxnibRsh46YbyPptJqtWPrnp63ZrLLcCm4Nu",
  "key20": "61x4sN4GKMfYAVYHyPHdy5nunbhEhkz5y22M7BYMcBBwUmf6Wc77XyaeGjEoV8gbi3mbeRSRPtHmc9TykaZpEBo1",
  "key21": "5Be7YrJXap6oz2nHNRgUXb5jqX2zwY6iFBkjzGZRbaT3RV7fNX9NUKJMTPTbpm7mPuAqs7Gk1KPDjSTwscbW8ZfL",
  "key22": "fLWLydNzarhAAaNxHn3oeQn2goaRJsyjrTSXmjVxUkMLH8GTeoVFQUYR5DP5VXH7n4UegQqNbt6zUuXHBcm3utU",
  "key23": "58bYP6FTu5X7B5HP57d2WfEVuaJQx5UroLvate8fyQ25ifEzwiSezK6ajLpZQgH2mK8vXspHGJbgVgg3LDzB4gwx",
  "key24": "48jE2m3DuvVtE4WX2SmuYr9EWVhKLN3nR2HUQtosQnMnSjfCmQRLvdvVuyT65CsdTmCrzypv7nDi5Kfq57K1uFSs"
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

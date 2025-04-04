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
    "gT6rekX7kTwqqrikEvWGfBsrYgWmgwPuB4ZbF7FjCTxts17YTMnmLwyTcUxMtdC2fRMec5vfyfb1KyEW3vvBhUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewbT6KGjq8RqUxQTR8cKrr4bnrdwFwnN8ChJDvmQCiVNbqomEPCunhEEuGE6Uqcf1rmDN1XYCxP6PKyM8SyWmvx",
  "key1": "QhdrE7bpYmENwjuHAop5XQ3dawW298KDzoHHPKaVKeGegh7W2BKr67Q2FvmRkwqezU5xLGkmyGctkWEaW6Wxync",
  "key2": "3SHg9JRNGsgje7HurvrWA4tnHTsgZJpCuf2FMXk25SEqD7dKqLkbVueLJb8priEGbbcr6tHgBxbyveuSj7DQTVcL",
  "key3": "63KuwkKbRedBcTgEAm282MbcyXPEVt9C1RbC73qXznA3qxQ6w9KWa28X4QYDKgVmYkfrRcttEzGXHt4DGtqBzZ87",
  "key4": "3ZAJxNPS3N7hSCtnMw25BiwcMe2A86NKnMzeHvVETbMEoCopyt6qxByftmbuCHGsFwmYaJA8UxssR7hCXXfqqwNY",
  "key5": "5V13rNc9CgXyr6kDfxUakQF1VkJgkVowoZe2YDcmovMfBgyWo4Z4btQU86rrmLbMmiCYXrQ6k4oFMEX4hk4XM64V",
  "key6": "4cFpdp1PHxafBkb5A2mY2PLQdZVr2qcok49vABuW851KJn74xpBggbTwdJy1oNB9rF1NYWoJopR2QeJnWuokWnNd",
  "key7": "J4DrFwjbtFru4f7S4CT9G7D8G24DnBt25MupfEMabLo9QMfQA2gNd8y4vFJzvD2k9jobMCjtc6dvHMFVYrNE86T",
  "key8": "4fVgvTrezyDMnHSkK2sznMAa5pvMNBs73gxxbLFGKgYDWVWBBTm5Qg9iK2cH5h6Pt7qBrBeMJJRPN41mWdbnMhiD",
  "key9": "v4D5FddcXE4TYVDMC9nkSMCwAi8DF6vu7RN4oMoZsk2hJijXWGFpvdw8p1KndRFBjr4Dr8QNTqBwhqp65HeK67M",
  "key10": "2zaTyRrPuoxyYfRhaF5QLpLEaNWTPyAgYy5XTeiQeEtGNYTaxD2HqpBmATxnToks8UUAmfpniEjF9H4GJsbsqXdc",
  "key11": "q9TekAchKZc9UdAkhFNinZiKG8pyrviPUcbWY2fkJybJSvbmeM2ZcP68B9aMwBQaMXka49NUJxAoDUHVtwWVvcu",
  "key12": "5K2zZ9qCrXYcxuLwErawfSyfYWwzaifGe6rgR6B2FEgHGo8BthXwmzVn5FbKxcBG3QwUXPouEQZgcFpHkdrzXbEn",
  "key13": "GnecuMRyT8NQT9g3icf6AdWG2cJYi2NaQWwgDprir1cnUd1Uq1Xk4DvGbLuZ9zArWewn2tc8iDaJbgd4T6WrDsN",
  "key14": "4qkmiSfqjMQcssSAuw5iuDvbvCBNEBHDmeD8WkN7vcsYmqCUsudfYB4YNoKNd3LhqKXxQPVsor8jYPnb4RRkGhFr",
  "key15": "4VKYAThVWkBgyA8wGgJjB1H7ZJdXoBtLyMzmc44gm722T4gsxZNgxg9kjNY2FHhY7UWNBeABQsnNByjHKw4J47yb",
  "key16": "n3TMs4EcULeK7zbrjUMTnb9wS3NE2kSt8E8MvEQKSEN4vB8R8C58JpeLSVxPbHnCKfFuBp8ZfhX2e3uWnzS6ERW",
  "key17": "2vr7fd6tQoToUs2jffvfZP9GmNWyBu8QCoq4TFk3gS2NxHUm1LgUayXj9GbdGanV9sdQjyujdRPGB7bhibeRvoxW",
  "key18": "76UmHoW6DUryVe9vDmUrf5NKcq1fU7LL218MjjECZTP3p918q39ZP2itoYvdzaqgsdicDFvo5U9QPb4Gn6YvfoT",
  "key19": "yjWf9qsuQtSrPtHW4ENh2Y7XudTFaoKJor6whAKn17znWS8Grm9KZjDJPKQXFGrQjJXD7pDChXAR3WAWvQxweHJ",
  "key20": "2DukcEeicT9r7ukhm3rZAwfvXBNDvstYJSZmpD2xoGEeJf8tbWr246VQaTzssYWnifSa3ANqB3mJwYhUBsuKNfyW",
  "key21": "3L3fTMSESMKTfFdh6jAEtt6bx7hsxGcVjyRfxi8En2fbGe6CYAseWHMzt67RqowRjiMFDCxGcpWsqkFW7bNkp9gG",
  "key22": "2X1ediVJf2pgNtmyvNDRiRuyPPeF8Mfo4G348GXC4hy5ecCeGiy4gmggyY1cpg6JuzD5MPaj9ABJj3Z2kMDmkhmJ",
  "key23": "dwNihCjK5tbYRNDUWmVjApK2sz2Kf8ZrjsWgzBuJLQ9sxNEbsbb2toM6nyfWB5HPYdEfopMeDxG6DkxJUe3G4gV",
  "key24": "2u1RQkmf85cbuNdAfRdxJ3Z1rPjw7aBY5dZTvtnUCZQNsSx7mJrpTXDY3TL8Uu3RhLPXcoa1EMmt8S9xdUNJ1XSd",
  "key25": "26BkVB9xGxb38ccC51ycjNXVGvg6UxDpyxzG8EWeSVxVnc2ak8dVBgMs6e9AShtprkMaiz5KQ2kWkc4BRnYccDBC",
  "key26": "5cYqQ6GnZYo4VpcKRsKiY9YNbgLVQZhgv1bFEpRtJYaoLLxjZGHWg15HL2MD7bhvZHk7Qfk5o9s2Sd2zJ8Fywrs8"
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

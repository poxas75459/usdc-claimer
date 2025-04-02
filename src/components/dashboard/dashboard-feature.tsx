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
    "5WTfGC7EoTkLpgiB5v715eBob7tV8DkCfXrri1DiDeLM1Hh5mCsEdvVoYk1H92B7GjVP9kac9i7j6jBEvakmaxam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bq1EHmX5eAYywUa7DxKxxixCa3dEcR6kHgs8kDUjUPnkSsm46RgpRQwz8rXeCA1o13z9g2vXrpqXgKKf6anhPKp",
  "key1": "4GTUL82AVxx2ZE6ZtDEd28Jgef5DEqwLbeXriSqbJ7YfYneZxZFYXYkUP4yjWeb7juPsrKkbfAMKWfrQq6taWvCd",
  "key2": "4cCavA48xpcgT5ztN5Yxh4XXZniLUfACjnRRwHtgBc67wYsS31Z9DPLGcpKyi8u2CqPTCkTnm82ei3uuJ2MppCm3",
  "key3": "3V4FFENneoyrp3GVo4N2HSUFKtj4wRmDxqPWUMmDF7Wpf6dkdwisfiuJNurhdtxuLvxDe1mTPnad3DB5iXizZjPG",
  "key4": "47CbV2W9r5Ns6rV6VgZkLhGf6PpPKbvfEvQruBg7fN1HvgZXcQxhCgi7pq14yBuZUFMkWLp7z4ZGwrSwYHp4r3o6",
  "key5": "5Doej9xzPANZ8bcPMu2nTvByr5HoneTs6wxTv7SYcCYGZKYYKyoJxsvDHAWcPK7qMBscnHzvoJsj7euMSq4hLk7K",
  "key6": "6eqCHn9G8YJb34BcS69znsakfLUm9QGJ7WWz1FsFtMDt218J2C4AvbygHkdApnzfod2PwHNCcaWJqJm86CsPNFY",
  "key7": "3hnbXiwLinUYPoBqz33NLjkh8876GUneCSBwJzH9gUYMvWpRWjrqQmGbN4hgUq3z7f27nBVzqZK3e1w9A3MVtJcx",
  "key8": "3XakPfRMWJqNFVBgsvKPjRENZLQMsfASf3xjA3BQZM7F9cnn1rxPLuCY6bRW17MpveowwZaSCqEK4t6YD9KWQCAR",
  "key9": "3VpEcXt8BEb7BYqLggGpZmjVw3BVjotSGcKuqa9KifTckPq3vM9EmjWZQb8QzNq2WEvFcJW9qXnCQ3sPzuG8Wk5L",
  "key10": "5Tn5JMnCJawMYWNPnWL3x3Rj4icp28X9K8xjXyHHSwk7hzxky5RmNhFQyoG2P7Q5ZJgyrmgy91o9YzAKuRpjHfMr",
  "key11": "3zQF8NbN52x6CNnnrHaQExYFsDqismfP9H64o3vWMozsLYmG3R2SC81ZyMXawPPwWEqc1Pog21BL2xvCnof4wg8X",
  "key12": "fCENzVctdQTeqWQDBvMqA8SEzn3NbEescXiJxBJd8Ff3pdYDaoEaLqWx236sRfHMZgHFfmaMF7fm4zXAYhXJERJ",
  "key13": "2LuhPcBs51ACDfzpWisgX8K3yMM1iAKQSVvLj4eNtDD51iqhAUbFAiKwh1ccpn5W9y63BkMqNmuiyfyioxJbL3p2",
  "key14": "2PbLJPpEU5GRCAeCcXRc7ZXMjJMMPVRAZTjnSumAprubQ2ZNKcnTFeMAoB8GxJGh7unZpJ2ks6wufjgjfAEGsRRr",
  "key15": "48RGWcAhiu2Sx8FahPnir7TBHnHmmj2E4h6anAdZTVFQdzqhXFuDGpWBywuT5qxjWjKv4dLyL7fTWWBfKiz3bTM7",
  "key16": "27ggC4cVByHGeDFGmm8bNdpimwtP37WXS6ab6A373nvrZRCyYSKJPpvLTyqHZGtf8EUYeX5eF6DCx3LZ9S1ws75P",
  "key17": "64YNUgSLD724dwtD25fS8hLBRz2h6Wp3pBKT5x5fpeRE5QD4s6hwEq8MdZUj2LTS8kXMfZDy2xTMJgyxNL2RczGW",
  "key18": "4nGySm7CvJ7Qm2GnFk4Bk8cuMVHHYisg6ZNAPCEgFwf6rRnCuH9U8nPMLc2VrbdWrPdjS9d7bx1a5Y357e5K58vC",
  "key19": "4Aq6C2RWvCvXKn7qkmSzAM3rr9wu29DoThYuAsrTpDi1Jn7RGH21HxLdDDGJnW5tHSBqKJk2EoHfEuTFrRUstpTH",
  "key20": "sgHJFm85xtSseMmHeR43F6nZkg46poxVM7j1XzigUzb3Gzcabrmgg1fu8DjoFpMKMShxrgW3RDw2MukQud4k6D4",
  "key21": "5631XmrRkkMeQRfZsN1kVpkxGvvJYzZKVZg9vUynD8JVE4koWUxv47ECTstCxWj2AJJHTdXSbveq1h8HEbT2Mq9j",
  "key22": "5fncMZtSekUuuDfZkUEpzP5EGRJTzzwB71rTx6figSCRdhwvizeaS2hhZo1hKaNxyRfU8FhBMKwuRwgLJMtrjTMx",
  "key23": "27xQDn6YuRXvitWoNVkuJoW2QEesKvxjSEhh9nTPmoMgtN38S9sA8rdJF5r4p2ZHizPUvbWEPGSKDN6ca5DxKFJ7",
  "key24": "3RSXSzvY52GUR9fUAvxEsxPjNpFXdMEJUzA1pjTv6hG4pMYGvpkEwP4FCeJPEoBQgFLEaqz5XUMD663Pj8jMUC9q",
  "key25": "xDBBCRASKW22sgB9KZPG5TZYjnU8skVhRBftLVwLq67DRPmW8pJtdMomEw1oKqMUNTWmTRjREAxmz7EL4hdqRWR",
  "key26": "52nCQNuFehLbYMrnvX8mVdCV128Snv8xk7xaUMrAJ3q6oah6gtfoWdunhgz8yzLa8GgWxAtvRzUsRtzmTkhZhwPu",
  "key27": "2qQHHSn7jc2H4A8cREnqFQ9MJm94o2xAuFy2ju6pooiyACpw6dRVLrSp3vhuXacTAae1Sk5iVMxBJefDPJWdhy3Y",
  "key28": "mvxiYCuf8hW8K3suxB8214oTLeDhRs3HTKJGpdHNkyjEfd7Mzg1madLWqsUTkn9bKBJzpcjJ1Lh3MQcjo9y59um",
  "key29": "2CCQpMJh9gFNrQ3mvmBnTNz94Agiqm6PvvVc7LaXrjF9BivGdv9XnXvCgaGhLPcgPuP6iwMA1gq8F4Zvj9q8pHZ6",
  "key30": "3eYtB9PzWzj8RUhAcKveettuKzNvDdLhnSqEa6tPUPGH9zGGJS2YkdQj5Ui6YFJKXxHyLUpHzufuR8rbn7eUGMZx",
  "key31": "4j5sC2owABZ4JueqLuFqbwU1AFWte9jUsn5faCERYHJajhRa7QYxMzLHHCDZNXx7Jorzu9aZVT1MHc2RtMYJQB3",
  "key32": "61Bxy8F7J3nSWtnvcmRJnknFbnxr3kazGn1Hg2GLZk51ARFHKGM2cm75XwhzUAtmgc6c1zgZiw7soYph2cibCm59",
  "key33": "4q8P9r9eTzw6ckKw5Y6EVB1B7unhFBsdxRr1EkiNyoX83WrVboFxnJtkABpQ7a8okyqayNKNXbZh3sVzNnp3tJvb",
  "key34": "2z5FvbMAjnD3DNGvB71rftFp3eTGhfXhnRnyXLAM4BeirQmqk4Tje5G74qFP3MoP3XhhEXjL9jJVrcQwUJQs8Tf6",
  "key35": "4ggnEmW4S9Sa4XxqNrhjUXkKEhzAujhTWnE8NnzCvf7WZCycdv2sZUqtyg9sHAmbtpfq3ZqDKYmdVfcXxgwZWJx8",
  "key36": "4BtBsj5huCXpEAfEuUofM39E7cp5aXmizFif2LWNoYK91jGVteQ1iBf1r1KMbwd6Konkpx7d9q4pfMfeqDJZ3ap7",
  "key37": "66789x27Ht1M6E9PV9HbRRVf4e39zpJ67YLzkdLyhoqhYUCQsba1fqqM4ue3V3xb5FZFjnhFn7LuxutzSPC7EVbB",
  "key38": "2g2nw56fdbo7iXNZcKcXrhkfRMDyeaYMz6enN5nGYAut6cmqF6Q2SqTAnWiVu32iHfixCAGp6md6M3hntNT1Y1cn",
  "key39": "54RUcBxQRXLoLZSoyB7cmxhMvV472AaRcNz5KGKqbWkw5GmjPG1Uv6CkfMTKktvxnjasA6LXVeHeS4747ea7kD91",
  "key40": "42B6mR8RTHXM1V4Svk5vX2drMh8o6kggHHvxn2SoPBsgsQ44trYjpYTmpy3ufK6dkcC4VDBdPuV2bCTR5vCJxug1"
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

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
    "344kRr9gUgVH3DUh4EMaJJKNuKrQLdHJi263EHAQRd1tvmEoEck3SfnCFv7RQfKYXni7Cf5NnpY3GJSt5jHzbR2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVSSACAZRgMh9WcdDhFuajFGFDNYJCgJcsRf76Lu1zzRYa6kMCLWk7DrxiQDLeJcRLswwZwQPfs4fkDkvSX6cMc",
  "key1": "KqM64RGsJvfMjx7fLpTjLwYy2z2z752vDqFBC4hv26pG5CxAK6HWcV6uMsraZDYGQvkpcE5NxHz1nL5cG4Mjut4",
  "key2": "4JN4RNGrQFoqWgACk7JEzHtpsuF5M83pBQZa7wwYbsfghbNQNuXYR5PSvbiwosnykFvq4omtnWcQx8vd9qwk2tJX",
  "key3": "3c6dbf3kYVcCGkbPjDtHvy1G8mYDzSmyRyYejGYjHn7xDq8geHZnS3pvd63KLfiL3YRDtCMRR9dJrTNtYkRhXZne",
  "key4": "4SbMCXQjKj8PSJ5unves3bfaJapdGistoBRC5g5GKQ6kevhtnES9TwXcv5bxjjJe65Nop5LUpoJfeiXGBvdk9zm4",
  "key5": "4u3SZcsWkvA2uF6zm38EjLz2xoT36cgYhQhYbYmBWfWAhcevEjQvutSzvzdeoej3K8Zb8cqyBBfi756fTa4KAWz7",
  "key6": "p1HKjfUUZ5tJUgebU89TZhCsnAXE6Fh1cRMBUnVTbFqzodnuxjxbGfxr9jqay4ghunvVSDqBgUcDDUpGj75L59R",
  "key7": "15Z1Ry6R4xe1y6EErKE6QMruFG6Fb8jYWKWwrF9PXP4qjyiQXeQeGPxeBcZJnBTpup46Hc4kemMzWL4qvN3wU2h",
  "key8": "4AjHrXWUjzSdcDUvrQaB5yxRfcLBjZxuE5XqyNqdGTgHBb5aTSJyv2d6av23Me6kUUqYXAJVLaiPaN2muKkUQktv",
  "key9": "2kPCcCJWfKQX9bDuRfW8MEbJrv6Zorqp1hFmCTwhhj93heoKtwyJsR4V8AWLVnPA6ouHNGpeXRHgbCW9fFqdbvtL",
  "key10": "3Pf3zDaaJGndhkMM7wHAJsQ5KJoEBoMVG34aTfTPgRjYJBbrbUcHAVMWtydZUT3CQR7DhPXupL32ajb27KLWPeYk",
  "key11": "2vatsuKCB7WiKonUPmwy8VxP9ijVNBbK2jVgoEEJfpK3yzv9mUJjDDbi66RmHHB2DX3Sx4iTxpwjTuNDXwMHtWPh",
  "key12": "YpqVa8gG3aykLoT4BfkByjiszEsZht1gBfxCUpBviAo8AdYQ9xFQSR5QJBFvwC47ZsnkMfaFWWeRbAXeEuyTyGi",
  "key13": "4NMF1bePq8Kp6EC5wEanGGiJsfzwFET2pPDBg6PbRzaon4BkT5fwJSQC9FWXW8C4JTkwjDyJZQVSWA4oQMN9jhMr",
  "key14": "2fehVfQsA8wx2UKyP5AqJqwt8YMLnraW38jzGQLgY8eKrj5N99L3DNTVh3JUB9ga9584Zf1MbJw95mAnKzvTVuLq",
  "key15": "opNgUYXXQ5wZ23Etuc8zbxNg8cTytkwhtmUGYPQJsQNYFyS3M2KUTkBXHPTHFPX1VyVCEcXdZoc3FMGVHoLXquR",
  "key16": "2FVEixAcXcNYaQYQtDm7KD8XdL7mmha6R7HfhfJpREGNFL4aCWbL7MxvV6i2mZWTrG5Rw9fHg4ChDmUkuyKoWbXV",
  "key17": "kCBcBGfkrwikFmqgor9ALE55HuygRsTu8B45iJfby425b8P8axZhyYrtJCBsarvAK4VgfxhVy7TRx6G2Uaaq5pW",
  "key18": "3XyhbaV1pe8PqGTNrevvembqkipAmkHEqcsr1MZ8kVRuTNEekoHrS2yicaVuPDdmbJLsdx55fQLaPemi8Qxt1fnp",
  "key19": "5x6JFEqAykKKhLEXxWpKziGvkLJH8S5TytHqpXpuUFtLEG1n9brsKdq58gLmXqFdc2AgpuKZ5mDLcrDtSH33Ec7y",
  "key20": "3FYKVf63nQ13SbqUtcKrDpXZhyZqJ4AiR8V6TZ6hxJvHwtoYXTfscArYb5qw7r4iF7bUK3pmLE2afi4pZctBUoVj",
  "key21": "MBNjf9s7LmV2wK5uhJ8zeNeXRJpL23Gdhc9uE8teMUqrydAts7adBVbihzP6i8cyFhd7PuQppjYd3pEfBpYHppk",
  "key22": "2zdNDU5LeRgBfhttsQi2u166jodBkzitZoxVTELKWpTbbnTi4ZwbpFhiiXRfZ9aZtehcwf5B4mWKzw1PhX4ivGgn",
  "key23": "95gmPonsXVHtstgeAhS5VruysrjhjaYnCbt2BnWTVcyNXiuUmecs7pYhrQwdbtfrvTj8Pj2LfajJZVLXrcZX416",
  "key24": "3CnTxP5zoAAfnmGX1sgXjoeV2dQetmHULcgVL8BYgdjEANpTMfxKJQucArGPRgn1uQ6M8GsCkZx88NWUbtJ949ZF",
  "key25": "61JRS5dXjnKCw9wdDNv1CnLYHAM5ETQ8uChQ2rgtELM6YuB21QM6TFNpEZi7yssGQoTf7rkUMngmNHemhYwa8VuQ",
  "key26": "3fzstqBKazGdoJXCJkJpFv92HsyUk39ucZkEZ6xUQF82nGN7HPgiMg1s9syYjDWVR3SjFU9cvB3SmrDvEMjYhQUN",
  "key27": "2rqKci5AnZhvT1xsQqkobpQkgkxMVTqg1MMUZ1ZvFXUcMCSq3cujvYFugyKLpGGhsuHLQ6tnrtqtpuSJXizVZ3NH",
  "key28": "cv27vSBLYofNjaUZ7c8CGcGcaexgk1HPyrxyBTnfP7Nmsg1FfguWVDoxfTkc8rV6s6ZdAKb6AMXeWZNJiXmf3Pf",
  "key29": "21JwE1DAKXwcw8xCUhJTPc1fWVp4itkE3uMjA1yYcaSa4DVt7TYPhULenjhpbUxHgTrXodH63ZkLpkKpy85kmU6o",
  "key30": "2CDwypn1W3XXQ6aWXwE2ta2oEA4BPY8Cn9q2EGztCKcU7uwsfk2QmbyNMqQfbuyPafSLQ2j2uYVabdXxh3p5BR5t",
  "key31": "49wphB1JR45hSrH5PjgiwL69nuMzosnAqQyutk7boEmmz5aUo9FzBnXWzZEPoRCZMG2ojyCA7swmjeQ36WVvPxQp",
  "key32": "kcqjDWa6DaBYwjdarSkVpw7Pq4uNbMD6YzizAma69Cw2EVudAhX8Gz1pgA9AVSkV1uY4aRRBqYDE1BuoB1BGhWF",
  "key33": "2Pn4rypsrWp5RMRj5CFMDzH9iEqT443pb428ArHtyYED1Wo5CfAQnjgLynYR2U4AEEZcTmR8c2EVdL9VsfDscSSA",
  "key34": "4tHMJyVGpwmtFNhDHB5E4rMCVLhcgun6XrhxCY6oVwyimKgchm7cKUSgsMiaYiPrHMqa4JEwFxDDKrYMqsHfp8Vz",
  "key35": "4KwMMH66CKApRTUX5JCzQYhyM5F9XVnrdpdRvorQxBJy4fnru4LQo3xLoxY94cqZZuDmPRCxTu1sigj99EnLQow2",
  "key36": "4DEP48L7SqTS9XVWsZfryCMW7DyQYMkFLq25LDbBzVBWvqaEUGquhzGtjbvTBFu44icRJx38EqfCsCagHUdR4yVe",
  "key37": "2fFxKyaHxNiZ9cr2Yh5b1Fu94iLKUydXzEoS4EVNbHpT6QstutgDNqoLE9AvmpDy1g8WHBNW6j9srkMArggi9Vaq",
  "key38": "5LxCv5AajGWtBPivw2uZJ36pE5k7Ua4guUyc79mn1ejBtmEcXAX9shbkJ4Uck1SKZv6Um1ienAf3k443CnMhxs2Z",
  "key39": "2M7pq7DxSY3Cz3DUhkkRrpRfwrb9MjAqvkaeTmBeEjzK1E2S4utjPKVUTBZSFBWdAkv8dC4JPdUvCJMNwUb6PPr1",
  "key40": "31haEaAoFjmS71z1Uij9REdmkEvPotQXxZq13uezdxiPoW1bhFxEWWRLptZLR8YcedK8Fcwop9WXFhvvahLscSn8",
  "key41": "4UMUfDA6V3ABU51XgETWnMnURLRAcKBEZ8AWt37nmLEtjTSMfucxcWoKeUBtQRFBdSQRedXSRPSV18qPUz2Lga78",
  "key42": "4hvVJLDwX2xsjjLbqSJZ7PZgCnGZm7UDtpFqXRv1xdNtMkA9KSN12op2ZKXd99EJqWy7mKpEUd42xshAYMjUhzqJ",
  "key43": "5aHZtGPZo9zJsUP71nA7xD8RxwbAbxCjGQ2VNrfGgWSHi67dRuifnbRNh84qKy4NhvjWR1S4xhxX36epUK14W8rm",
  "key44": "2bvXnnrARNQ54pYi4rFHMBDuBwRwunPegmkAz6REfBhWmMBZy4PpG159GBr9PcrVUC1NFnJU8XUqCiPtUKyMGExj",
  "key45": "63NUKt5UuK95LFDsm2fEoPKFxJRAD9MWN2wU9A2EWiYMDJNUjpb9JNEn6ijTrpFNm4RfAiFwSqfEQwMeRndi6KNL",
  "key46": "2EGUypvjSzXH6qFXg7dXuYfeEo1WSeijE3ciNBL7we2dA9YovNNHLVscxSBvCEpK6nodiHu7FgGW4EU25D3nNxFU"
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

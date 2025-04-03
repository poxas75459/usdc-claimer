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
    "3j5wzP236DnezJHqjGwFwRHQKeKZugfEuKYZ5TbkeX1FfqDzTBbvz8j5giEQaL82Qgp7Z53ja51W2Z2Y1VcG6x3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Efo8fQoACKwxeEyoHu7mLWqcNh2kMDWTUXDPYPdu5vgVU8qwQs2fvQK5YW29CXPSXrW55Low6E5Mexj4Vbh3spM",
  "key1": "4Fc9vDGTVVz978f3kmbFGZthvoCUgXbSujnpkT3Wgk9w7S5r6kF48EzkhNDAnAy24RdmFNPGAkSartkwN3grQH28",
  "key2": "4fMNtmqFX4WqsnMyhZC6ZpZKJYB5TTK89mJLrh9cvLqUmiD8RvfEzqgMozKTVwV2DoT5n3nHaHUzyfhM7YVJsr3o",
  "key3": "2Sg1omvuUWssUcW2aksyrXUfEDGwtdUxAYkzndwsEkHobkb8DocVt3rxYasCE73f1fJgC4sDWkpU5F21xcyMBctx",
  "key4": "2sjDXqqw93xkrQDsqW13fzhHHiGtZnnj9bmhBJFogMmSR44NTo6rtD2Q4nytmtV6k82qv5L1j5u3uwUKzo84dQbo",
  "key5": "21aRRb51yWnqWeSqTjLA5Q2yQZ1N5ABXDh8eippm9royVL7qekD7m4eAPHEbZ2gVNKVU9BRNnvHJeu52Aryzup2P",
  "key6": "23jsfg1h9L6mjYCtQfHqWWjWxqK6qgcAqdXmN3nm5qwZKKjjEHZNFFNoHMRQiCXpZCs6C9yojoeCW16pdoVU5ydk",
  "key7": "2uTBUc9bGQCeAYT5aX35mC82UrXjk8s3ggN5q1U7x9wVTC4CREmXcLQ5XpTzRbQbAoXRqnhhuEe5VPLbm73c1SaJ",
  "key8": "71cAScRD2VGzjRFbxyc6it9hj22yVBJLCaXnGLJWqSp1Vm6rpmtkXG8GuHMDkG4UCPpRwfjtJ4Ld12eNJ4F3SVV",
  "key9": "2VsswNFaLQSzwnxfm3Hhg38NqrDeZ6DcqyeJ21rzfjpE4RvGkByzBsYNpVPLD2vEMznWHyUbVqswQVHLVL1NoTT9",
  "key10": "3JgtYSdkYytLY7NZXsU1HmuHT8xLSi7wPeUpaw4vsccUaKP8wcK6CkDqhHSQwPeQNen6y5ae4wSndT1WfmwM1Fex",
  "key11": "4DHpH4i2t43TxwJrEQ5bjHujTLNcTnHueWyHo8WzMbzmeRdacFaN4fa7rGWzRmVEDqSxMpt8k2g7FGULP23yu7xv",
  "key12": "3MgqZ9rwPFoj1uYxe4ZiNaEKQMEeim6AzUPbERfi7AgNtzde66d9h3X948LiC9iYB5VJG22EEYRxPjp6pT2ivGrn",
  "key13": "5DqndypJKcbrNQ8mEwo21PPS872jCwY712g73Pw3kbCoerdhgvWncXiU9bEm3oAftDFtk6xhnTqyGWsuHXAZX2Pm",
  "key14": "2WEFEcLmQnUbacXBHJtRMhJkMobcYDosxB3pL39ZesC3vttUMJJFUoHaXccVcGe1fFqia6B7u3SpAWtKnJXZcxnM",
  "key15": "dDCCwazksfYWzF26ez5TWUSaZ3s8c5Z7BV9KpaupKRgCXoXaEZ2kKZ3Lsn37gAAzCafNz7KQRU3Ko9RysrBTiuM",
  "key16": "QnLsKSE4FycrBfzuRBMLD4nv673Xq9fWgHvViqFf26YdY6212ExWmrw2KDQFu6rb8AKmEy21b9xURtqQ66bvZkG",
  "key17": "3Pd6cSQdSYc6TVtAaJPo9mZ1meMdgxLfTBQTzJbbU7kK6m1pQzum9EzMNX1QY8FDkV6zAB5oJotGZXuzssjQu6j8",
  "key18": "2YtSXL8GMLupaprhb8reGzFRzR3M1ZASPS3kxrJ1vhFdbW4251ivLkLZyyMnV6LNu8KCpv5PKKQ1xC6zBVYvQjcU",
  "key19": "62DGuSNMqXEHtJ9QenKQD7NoQTnoEdkm8wTvdssYaQCzqEZ2N7Y8EuAqnC4VXwaoL6Gf5LbhkcEzThW11Hv42ddG",
  "key20": "KEB1gHCE44uwXchb2DeFAQgk5XuuGJgZ9XFgqzkkPEBtfwnVvy7id5V7i68jgc1HWwNGSfwwqHCMy7uXnFJVzGW",
  "key21": "3AXjMuJNyg6LHJZVBgpgy4feDZykcZuoeZWYU7daaJGDop6cRBiqkpgb6QcMnCGAQ8543fCqvy9JYfxQ3kfwHfgm",
  "key22": "E7pPh5Bd9JUPKTdRzu9h3nrcvhQnQBsv1T95KfaJhTaDkmoHGorq72XCgeMujL9EAMoyRxJNwU9jwTSWSr57d4A",
  "key23": "2QdgdZdHLDwwzm92v746CtLUPsLgzMURu99AMrZiYxycRAoGCoh9KzUY4wGaLgUPauHSGf3e5mgzxCE2uoaZQPWg",
  "key24": "2Lsz9VfVk9UZj4R5kZcg1Rapxe3YvxJQS4F2Ya9vbH73u6W1Xzs6acgYk4shwBC9YWar6FWxpuWSRoHYndR3F7mq",
  "key25": "5PNHMscRny8JCbLdq6so5SyefHXmvZCyguFZr5sdwo8VhUhKYfBvHYBrWRVhddqHHPpYAmfydAQMPLgdpU2vuSXc",
  "key26": "49VDtaV1BTgcMrVaiin6xRJnDnX7FsCRb7vMVBnEKNrJi5gtz9TJWzPXMgoSvR7jHsut5QkqKWoyH1WNWuz3R5AF",
  "key27": "3Hj41kRM6qAUge3A9XxbPFKNiP54cRTpAM7xVN1wfnc6ynMa79eEyzouyEjxEu4HeheA2kQKyfqEuARAphkJZBzh",
  "key28": "4TbwgwAYvv3EiWAcDs5hLRLext263tVXLsgj2npaW9vBsE8u1wP1iTeA8oW3qyjX8wfxxXZcy549monMkmcQMq4S",
  "key29": "EZhWGQf8VWRzXPhwBfEjgABdHCTyggxs1kdUBHqghiyrQvxv2d5j4v24MwXJ89EUPR781Db2siDhG7BV4evmZXb",
  "key30": "3DKN1fsps18pFji322fNCshfWv3bSm3uqRfEAG4gpxfAjCLvkVcpC5r7z8Nj6mFhPfBR45aUKByspTDhogENa1zD",
  "key31": "5iYp2Ws97A5r5TDTonjwobEJkBYVdKpEeWpG8G6XWqSR7nPam24a1ZqwyQRm7JaKNRcorJCoxGMm8VAGPeVtxnzB",
  "key32": "5wVQ8a1UbjtZnHL4VgzrYQDnBXeu86QYxzjdSQ5wZkZMcbd7nwe5SWYyXRQ7JJVyb8okfeEkV6aB8Kbnmu7mQQgL",
  "key33": "4rGebWRJo2KqXQCoCTRpN6Sn7BbmGyon6xBQB6jqXRhDnqJFWAmEwfL6Xf8UsVjfbnDRtHMpUXnhwurm8NjQSP3e",
  "key34": "4db6S81XPuBbmorYwnJZEj2RBdeHDMcwdipz4hW9J8imPTds9BeA7fQcMbedU3u582ZzB1nVQacfJs57PdU851CL",
  "key35": "5NnotKBeQtQmLmMEwEPbCDyMzy1bpkZQGRQMgtdpZZFqDpBkY8Gergc3gkbxPrzV5dsrS4uPNZfnj4E8QW2gooNc",
  "key36": "3HvzZY7GV1roLJaWJ4anDKy2qE1eExoNVZgQxBvCpU1AoaJtKAuMdnwuWs6PusuCuY4pZVSduCeQQbaFFC3cmoHo",
  "key37": "61rUuaBu4axnav92BBFPynDdByJJQEWpcPCaTRznJqDAQ27k9yjDLhaJHQpy83ptpr3gADHABf1TCMd5GUb1kPtH",
  "key38": "5MmhKvZSCLor2UB3LhoRcNpYq7dr8CmN8kEMox21GPgKdGT8rNhsB6AT5ggWRQjSvqvAnS693B9Y2C9G2Z43t4W5",
  "key39": "5X3BUAZGFJk5BVF65BiBG6z2LuZ86w55Y1Nwo922feGf6TeSynGkVeGQ3JDEfqs7YfxaVMjEpvMXHK8hYHEk1Cdx",
  "key40": "3aEC4knj5RuePRbi1ojyurMq5YAMexprcvBTkJNz6UAfRBrMcojcc1W136pFsp5ygJfW1omVX39zBo9pVR1i7Q9a",
  "key41": "dAWZMfESNiHJ7rAKoijk99Yzfpjsc6ZqhFaDjJL6pvCfSVQK9iFhEpmQTVaXRRykqcR22vqEWRVujXQdcaKBSXZ",
  "key42": "2hEi7nRi39HeJVyuxZpFgsE3qJUgysGpgpHx4k131FUeWd47mSW9pD6esCZKhyW7t9a6STpPcu7xPoJyVfUJ6fMr",
  "key43": "3Znqxnf9243pPSHPkA7UFFdJzN8k14DKWX93aRvF1jNmyo6pxUhZdzEkdSGGxKgQXEbHnkMz4cWR4iM2dijuJxGH"
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

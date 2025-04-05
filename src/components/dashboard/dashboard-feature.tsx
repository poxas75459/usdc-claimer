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
    "RnKHHte2YKFVd48N4o5fwroKNC3Ehq9EnacgHteUpWxWRwZAjVg33M8viNC7Usea4WCsUBDjoERdNLetZwnCbLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msaCZasqp924DH3Gv4a2YwwHvXjMpz37HqunRT4z1xP2VW8i64nMuqyqMTqSM45WzhFpsXXboLWYXdyKumyZeCU",
  "key1": "2Pn4i6mNExD8zpe68fy2m1Tawh872WKo6Xmzp7D8k1kofyrfgXz5UkRFYjyhcG6Tvj9zQvxqy3Lg1dBSwZa7htcb",
  "key2": "2Vn8kiFEQYuTvsnWrTXvWBXEGjiW9TSFgCXGv8S2fb6ACJzjvZ1ftUSdXVN3mgT6B3Sde9wLDnVMPea4GcEGh38q",
  "key3": "5TzAMU7NA5vwXxQ1QxckEEBq1oMRLc99DdfhehyhJmph8hsYZCVtSezLVcfViR5d9PoPtXx8Uo9YR1skJ5R5xhe3",
  "key4": "3ys4WQVgdTAcincUPYD24tVuGDaE4G9F82AM7KBwWbgJD1aau4tg8WFw1axYgfmhGx7uEo8sgatXiVFWwXjQ34Y4",
  "key5": "5Wa1aJFTnb5FKRfkEEbcXJh2eNvJ9NkP8PLNoKJMaRHfmYcZQPMvsRPR2G3DhyB3TmEqpWhMYLfkdZQszbupYuUw",
  "key6": "4uPGMPU176yqdmpEj1bQ59xbtwZVbMNZL3zZC86XntQPbABeMxS7DKD1ha1rbjx9VZPjFXAB1XZpB1WqnndnsGsz",
  "key7": "3beFssq1imUL1gFWVqped3z6kChkL8a8wpe6yHXQ3JmUUHCxLrNoNkkXj5BVSDjiwUYEHxKijAy3zMyf5h1mHQik",
  "key8": "34LYxYMznNjD852kALH8bneaAaL8TEZuUpQ4dcnRR3xJVLvSvnQaJbGLLEdRNHtBBdCSozjUAndsUQDcJSVXNUEh",
  "key9": "3qiNRhmG2woZEv3GgcuwKU22GS37EVhbDSnHA7SDRMhgonXMcCHTVXynojcXdLHm9k4eZztXbtypCDHu5wE95ZXy",
  "key10": "22XWNt9m7cze4wGDoJ3yjWq9ujmddvmFCKSAfUgmCeVmiRRRRDY967ZBwDcbTYYRGZwQ6kV9B65WtjscZjuw4Kz3",
  "key11": "5Jmkp1eVv8MjWE87Y1d4zBGBxpnvP4RJRiq5fLCY9SwFoQKjE2qoufibjQyf1UsaasuuPxaoTAKxVoWje9JsUfg5",
  "key12": "52Xr9YiGDMQLhRjULZhPmrSXr5nBdSAx83N4CYeA2kiDus3LXZ2ucELXJBGzcfaMdFmuzpc5ZAwzsBnCVLF19rSn",
  "key13": "2XpxdVMH6P45HYV7CRXLJ8MHGeau1RyZMHTsHnowfZ6sUaw5RXEgqHw9rZu4aq9sBdwgX13rPt2wuLqxtJ5e1mvs",
  "key14": "5eHWw7AuNW2VWVXWoLzPNrzqdVrEyadSzJj1s5QCB5CKxNiruTR6t3c3YfztGVn7QWEYrg4dsVW4BAFPWB2pMJh3",
  "key15": "4p7We1hhAAJXttZr9zKtMVmvz8QeNsnLc843G3d4UE4h1eAWrxYbGpBi4LgH3uvxNZRpuPQ9cr9dKiyEQfQu2nQ1",
  "key16": "5nbaDQRiRzAVTpMhFFaw4tfd8kc4zf6cxjLj6PLdaB2BG68uJG6uV3EWrNrjpFST8kb4e9SvY1zi16EzetX82t6a",
  "key17": "3n3z1TpSm6hqiSm6jLZNg8qszJzu6nzjvHiGapvjWLZExuGwgaefPT6knhdCq3qhzU5RHMfKU15EnbTPKkppSmXq",
  "key18": "5PyLxyaRuHum5J6NhVL24RWeCZpZzQ6b1Rn4rb5q7dScvgx1G5QU4ye5DuLnR9PbzU5H27xzPhBGUpxxPmmynp73",
  "key19": "5BQG78xB2w4rXn5ibDnLcJuLBExhxCgS9uxB7mCp2CvorTWsUY3qrpvBgRUp7wSQv2zN6a3ckotSn4Q1keJN47or",
  "key20": "owWcJSNy6H3SPWrx54weXC5YGganbqCENbkSSuLM4F6WNwy2e8ZMZW8JKDdGS9xVBrJbvBYNhh1fuvwg5q667bh",
  "key21": "bKuiidmbqbacKmHxy26QoLtzkGErTny569sduNFFJvVSsiDcJJ5YT93aekcWR288G5Mvtaf73LJz7izV4TJqEk2",
  "key22": "CFf7GPgyzpbiBDYBhCzPsE2Wq6tChJLasJqvn26CKVQHceyMv7K5UgGwpHhLKre1QN4Kk3coraV8JXd9EY2Bmdq",
  "key23": "32qEd3qwmunLRvnCaYdTAaZBKh5C8nBHFNKKmgUXwtPZeEzJYz3qTLZ2kS8H35UYKQ7dvLhaoLrS9SUXRjSVtERW",
  "key24": "4jUnZVBxTcuA77ocxshWT26NjekhkSRUeDCWMVHik39yvmiBRkZ4hojUjqjsQNvRDFuaaHtmQS5ptKvufin3SKeM",
  "key25": "4RC5Uo6tHfMk9d33iDSvnEfshEQBGf4MjbDSwk7LJbt3tEMcyx9CupAEdqTSQy9CVdNSVLZA1XZpq8LFZG1HqRXB",
  "key26": "4ztk39CY23C71mxEV5AsU5i4GzHf6ps8uLbHpioKfL7jbjjoNr31hVufMXKxmHZtAUmJgkj4ygKLGtU7hYZuraoq",
  "key27": "12A9MiwaWNc4Z5gU1qmLuo1z49vzkv5avGJgC5ZMwfjRB9BunuHi6cgCHAQhn7wD1yEbVTpjGsGgkxrSsSiyKmXq",
  "key28": "5KygdCcbaRmtgfVwCfLpCkWH9Yo5yWHvMvYYhqDVugfjkHvhavNMHhSMJgKFKfiURG6a27Z9FovhZEgaiLN33KdF"
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

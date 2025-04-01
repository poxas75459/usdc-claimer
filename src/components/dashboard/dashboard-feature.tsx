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
    "26YUtQ2WDcAKABMGvZ7V8Fa99w7oHH37Dfne5hCSgVLngqp6UMozJF5AmcpnFv53yw15RX5J6bC5gKb5rLYYD9Cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39M5j2g8hz9CEMpz5RStotG5cAqq7fPfWfps7GNoQVK6oohvUPcGdZqwvw17z7GjxqEF3HHb9P2aB3aRuYUDhaQs",
  "key1": "3ZnDXwiaUAEP5aTvsBqkdVhJvjM3AW2kyrLXcWH6t4o2FbYNxcG4JuyUrbWkQU95y6Vk7WuvyLxUhxEFMGG5TJWg",
  "key2": "78ziJJj7brMwWM5YUG8mBM5S3bEMmznb17MjVLrj5naaGa3Md5W17morZa8jF5MkXvNgswfkmqmyFEHaFd9Rp74",
  "key3": "2xWvprmCMp6LiwoUa8vfrLyNdxKzbzvE3HGwgZ5VYRY8VN3oMZXgG6rkTCRfdrsNikKzTfMNCo2K4vCeCPzmL7Jd",
  "key4": "7CqXjAsBERrJ6cYrdRZTCk9D7niRLrxctYo6bV1HeWN2KdwNttQ1JyPbU7FLRjjcz6sanSa7gMmEvD7CikdzHeb",
  "key5": "5YXuKfB9VbBWTebmnoN2R9ne86iEU3Pghm2q1hKGAsFLTvorzzaVY3NhdcqakL4FDNa85FsAFL7dz4QNjusrQi8D",
  "key6": "4RJ5ZB25yx5wA1E3rDQrFwY2nd228rgyCtz9LPhszT3RfDemGQ94wVVb19nBX7zswXbFc6JztyQiqsBbxwb7CeE8",
  "key7": "2ZJPkaWtgm1NzHAatjN2VhVExfvDKeyisPW16vKY8VdurN4tZEdrLNRnMVg7amq7VDRAR67TtDxRzDh8q6nRYZAS",
  "key8": "2iKjiXB73JX9cDwhRQdT4u9fAxQB5e9LwtSkN2iegPDzTZFkovViwVsK6boGVKZgy52d5HLvho3jVLzEd3LeJmnZ",
  "key9": "4YuUUTqxJsBY9xBdfvyof84sMByxaz9zDSqjNcMcgzPXcT2nTzbbpKPpUYZJeLXonFY7rYCarzsXjr1GutMV3HSn",
  "key10": "537Yv6Tmd4chFKhQwZEV6xdbKAi6MgyBWJQSGi7Kc43q5x8NiqyfainMsbiDaJFFAc66EuMwAWY4gFANmBccm8Pk",
  "key11": "Xmmnyx5W1jQ5E7wRVD2gkeEBQXMGJrs2cPQx2grAcd1i3R6sJeeaQY72ZBgV457L2nc1tV4KV1QW9eaP45RaL7f",
  "key12": "GcguF3YN7T6xPyyWtjRMY9UU6NV3y5LqD4Lck6cLTduuPehFJTRcjva19Lo1FyGzejh4AWhwXRUjfqrbV27DQGv",
  "key13": "358JkUvkZoA4HsLPyprvD5vTXQUwTc5TPVcapboxyneVdQpqYw3yonPziqoY1sFv64C2p9adRnTkPpAstebaUeJ4",
  "key14": "2KkiDBr61aSKgxjGMEVQqcHuHvqX2KKmUo1UJWXRjjtkuFdU2TwMVjXMzsJuXfiURJVD8j7P7DWKvPsmM73osV6J",
  "key15": "4znuHEcyAsyWQ1Hsi7cMHGfZyP9h72W8eegx7fpQzpUN93uXozFkdVhmFpossLgdZt9Qedw7uTMSUGzZK9WtquqV",
  "key16": "65oG3UZxDY5VzfqsoSMmNJRsJp8CeLdFknC6P2Bie5dCWg5jkQ6UoqhNeZ1dyuaSXdKsSMJubZAJchXyyuYnZupJ",
  "key17": "puqtU2RTEFfQFqbJ8bAAqJgjtEtCuoFBGTM4aVCGjFkY4QYVua97PWNeX3kou5RioQW1ouZeBBK9b4Wz5ddhAhg",
  "key18": "5HvUdZrgAaeWgnqHh5StKDYpmuXM7qidJwfwfgJManfTKePnsq6biuuqzngfaQhqeVBeHVGDzTUcUgo6g8Jis8wZ",
  "key19": "5xnJHMfsg192KFWTKkspJJmGEaAuyrDJJDCsshy1jqxiM7QdCqWY6a6WPVdxAR86eFaa49a35BxLdEaqPPv81bHE",
  "key20": "3x5sSjtBXNSbbmr4baEKQZsxgCQWZt1HbbfKBf3BjtujAJoXijQ5HFCYFUyDyCVE4wUx88vVY8RoefhD2mo1MQJW",
  "key21": "SBFMdeoDxJzUQKEGSJ9ApihHKsh3U5FRo15VhQTkXPifQp6ZgVcHiifUHQ9mCrKQTMXnVs7xG3XnAt44mqUTnsm",
  "key22": "5UFBaFhU69RcP6uphT3BpGLvDhiJscrkjQktxcfacpMWfKwWejGMgM7R9Uw9Fr1bnSASm5bcPd8jH3jmZ2Rv7s2u",
  "key23": "DScca8xZHNRf36HLxb7GjoLLMbNAmHXP53Vr1eAiFBsuu8TMhm6C7r1p3d4oJD5cLcFvyAxLYXSKZCK4sUs5rHx",
  "key24": "27iDSVhF9xZrR2Gv9wKkFJsBT4LZUQwByNHiZ3hJVUuTBaDH4pLZxf8BYnb8DgZ6ffBN9GCxWgtV8LbVqi3T9fHm",
  "key25": "WvKLc4z9X1zsYBMBbSg4rSnT4XqnQz2LfaatCsCxtsHxKQpKnUnnRDMbf6pxP99p5hSAc3ga9e1A6wUrwGardRy",
  "key26": "4WWNq5tgNcEsemETgSUFCuvCZHd7ZkLbtTWp4n3YkF8GUAYgzpsRS3bHgDjdEZK5hTGVJGF6pCkbGRfS5V5Cjkb1",
  "key27": "4ayNap15C2iyatfuHgDW493dgRDBgtfqhtzxVyZoE6u795xP3Mk934eorzDWCMDVBgHYKndX51QngBsFyaVuAgFJ",
  "key28": "B6j4u4pNjoUYEkPABbC2Y5ihtCxMimg7bKpG7iJf1VHbmZExczAiBbd6oT8SAkm12vKwPZuTW41Wb3AEXToxfrZ",
  "key29": "3UpVprqnm8GNKUfpz5b3pA7nBJRNQAjmNHNoN9b7kEXkbB63aBdTuGE1uTnbag5ApP4vLzDuLWXug3BpQB6tuKq9",
  "key30": "26ouaa2B5QfiXwhcMHPfqAyynzb3ZWx8XJq1SSYNCFg1ceR7DrXDzLmZPxd3wtvtt3L7wSSZoTv9g3LvSXBQxstR",
  "key31": "2WomZhNANDA7oY6BwxbR2fQYnWVUGdWdaq2D6ewdSL4DBpK6hfSngt8DJmWXAoQXg325nhQnhb3MSYghjq4jU2iV",
  "key32": "4m7kJVFrzZeMGfVF2i4UMmSqt2gRtTKAXwmggySqjeXPco941yrVdkFtTDrEhCHJTAUPTwMJVpUkPieRkJhDkTW"
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

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
    "QpQraRkCXJsTePmS1KJBjoSTBZ33Q1YbR8VopxvBRftiwueznZcmbSPLmpZn7Av3UDAEvj6PH6xGZr48SPr2uAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpKFwyhKNsyyJwqHYKv7jzedpAWyDmuE6Zg5uvtRYVfYXE6guocjD1tBnMzNnxWu8GcvSdxtfiZL9za3wpWDDPQ",
  "key1": "5WUZdzX6wwdLRsC3RxGea8fd549VxzcGfgg8Z4cuwVoLsu8PYQP2VcYSkip5rpo1uD9NR8y2BnaATaa79ihEMpfB",
  "key2": "5jnpZVD2RrfRJy1ZaMSzooP3svKVHVxAGEvNyh4dE2MR1t1yDvh5RLW8weSMBX5JQVim12dfrNcfHbhLVByXCTee",
  "key3": "4o9zd4WmwjoBzbA7QH2weXfDgFpqEw6m5sdnopBLkVB518sbDhQS4REueuh5LVFvtNbfbyJzj6uvJd8ni7dwRk2U",
  "key4": "jkWNwCW8v1YZjk7E4C1y1eUSJ2poxxP1E9yTEHXyz5onptR49q4t4MGhty1ptMG9hxKrkrNmjg5deAZ44BMZDz8",
  "key5": "bFgq7kD16n1jSc8EMQtYrXk1AcWhE6UuB46E1gVGT6rzVbv4tAjLfZoCKNQtbSUyVGo6qUYKFy3cDGwRxdtPnuY",
  "key6": "4X7SqwPq8tv8PZPdjYKf4x3Db4djrzrDfGwraAbfiGHKAURQMqWuJFaUMvWMAaTwXMeSTVrddMmRZwk9gAMRzqdd",
  "key7": "4i8aggNFdy1nsw8hdUf6TKkaM6Vw6353GwznsAXADpfEfxtxMQjTjgYc5FeTaKnPBrLQtSGLUNf5VFyzsC2hRDZC",
  "key8": "2N2Pa2U2VSRCPQ7WNbazQLrXceS6mhuU4PLkCwBR8JbGU32xkPTFiPgnayTd3hwpBgdKPMZFMJQHzTMDiykdFZQr",
  "key9": "2hVz7STJUP8sLSxBZJq2UXVvLJMBqA2QvbiVTGAKnr1xcdgA4K27G7Am8EegGpVH9Ej7qWugsWtyK28ZMkMGckp1",
  "key10": "3HeSb4fPTwGqc51bB38QZU2F5bK149kxzZMFR9adk9d4V228gfPKirBSnKs6ox5Vi8jgsELeqKywgRKqxyzE8Lfw",
  "key11": "3bCChhVQteGQsyisvj5JqLKEN3dvkThZxb7VhDrJ5AXFJEUXTF8t8QadKy2VscYWhYGxLhfvqhzHwvTwkywFXx3a",
  "key12": "oBbautRo5Crc4aF59Atyrdbmu9ihDqhpX5cvfNFtJ2Y4HEfRVZGZ53c4RxBZzUZmreeW9NybsZLFi3Lk9NfP5wi",
  "key13": "3VMxP8vJwSqLyiNMa9QHAcf2HkxPTYkQdqywbGrfYh2pUTcdh9MAxus48kSt47XEyz1roQV7ay69WLK2fiUwY2tx",
  "key14": "3Qsp4ibv5dkvpsgwcqTLw4sizJbgrAHTiP7nDEfGwQZqB1wLpZ1HRgRjBMgwZGhZ4xaTWkFUdbTLofS295wnyoGY",
  "key15": "5LXrnH3oaHvLCZgMmtW6pSyjsbqnBpps87qmLS1taud8gynbZNebs1YN2ZsjGJoroX4UuLQoqGmLM9uzhKQ3iSK8",
  "key16": "3K1bFdsEe2QND8ea34wkcwsCgpenpM7Z9ZbNiMjVp8ryeE6rdgZn4QS1Y4aBeGVqCdrYumpLpoZ5Ww6Y5W1vDbAK",
  "key17": "AXJkQXkjVSrSxhQc5JV1H6gxFgruAm2UJUP95YrqUEm4mf281HvcLWnvUXnZ2KAo8gS8N2BWRz7T6ifcs5d8NpZ",
  "key18": "62p5z9DmWMH3ihEfcDFG5NcncSGJotxLQaswDGrGFCDX4GZhDozwZNZiCBhucGKkmCNMqXErLLV8893Qg3Ugy85F",
  "key19": "3rf3Uk8SNcpmmGqU1wbxzY8rdxQemPyM6W9Vs9BauGEFByEjjR5kbcQdvtv2NE7m7nyy1gtPWMCMiCFqmTZ86DDf",
  "key20": "DWWZE1nWkRBy3xXhoi3F87bEmihQUEvqh8DHufgQEC17oQaRsEjoWgyXqE66fkqeqN9627tEs3gkHcPdYK3KP86",
  "key21": "VyWqARwXbR5kvBQvt4S7UqSjZ6tvUsG8tGyJGSQuBZf1QPojuMsFwgLc6g8jbR5NSs9gnDAgMWZzL9KKmmgvhBe",
  "key22": "2RPiWGtxvFoAQeedYdYP4jL8BA2Qz5Z9jPykRqsGoPBvz1prG1aEfwAGRtdwMJAcAoUpzaW7M21abUJy6JLfgf7o",
  "key23": "5r5UoHMSSf2BqmUx7UHcVUtwrE4YfxGkFSRjTJKmpbMqkNWbciF75hUkK2N3UFa5sXuVgttZnK4QnPEasBXv98Rm",
  "key24": "5h4zruMHYbKeybATyjsa9XPo7vqQ78EAyD9NoPxZVPx5P894mA94P11znXyNepaUydsEsyESsTmQ9QJdV373nPwR",
  "key25": "3qs49WfVENuyxJrqQHwgUVKwXJdhYEv3dRArscnBQUspGAAoZRPZrvzWnsBK7uZ8BeM8yQqEjqvpctnREaFTZrSD",
  "key26": "5VJ44CMxXczSdc7bGgEQS69xHhQyQL6MQtrVmi1P1savpRZB1qizE5wPaj9izvuHvm9ik5bL925yKUDMfnnxtKyR",
  "key27": "5WRZrcfkwUoeZj13K9XMD5r75JY4AgVSgH1nrmJz2CaLSHpTg7xvqaTmfGbPV85JWxWTvRM5Dp7UbmEc5261LiC7",
  "key28": "2eYPN3gc3aGDLpHCJty12VnncEdMxazcqDmV7RTy3nTZYVyFvCEFPReM6pHLiYwKNzNqh3DHZUB9TgWFQ5uKLcFz",
  "key29": "5Cub3JkHZfeaBtjS6Qr7gBeGFGPdhZoy6siNwT3eHFxQS1M2ZUX7kvL6dcomr8eyknr4uVsY9Gt8Y54sUEHDvWiH",
  "key30": "3wGBJUJ6Dk9ECG9ZQqaSEoaghvqULUtmzwRmHRCcb6qrUbxWPnGBAd3d63e9nFREXhRNM1uD2ApU1s8DG7QXtBtv",
  "key31": "sBMMW1GNTQuH2ZKAGgbB7UgvZo6yBi9UwevLCJ9eGCuCLqm26PJcz4B2Zq7c1TAgVnK76VyZd44QsfV6xs2ocv4"
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

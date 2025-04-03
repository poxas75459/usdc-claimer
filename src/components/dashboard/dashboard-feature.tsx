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
    "37amZzFNiX8XzHpQkY94Q6kCXwcd2KWZspUVFRJmf4S8y6RS7FvtFCbsTgLGf9ZGi2HvhRkE9R5ujYukwk8EHHZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GikCNQ5Szy95hWbzAVJMjRKuNbaDQjBvvZHwG6NQgPo8gWrDvU2veTfqpC1LR2fVVAbMBQWBBV7w8FdQFta8CKq",
  "key1": "ZwTrKXYTuJ1TT1JzGsv88kk6cabwqjDN3Pa8xMXjeQitopLfaTVS8N2vfNujQnHKXWefFvVbYvxA8cu7GWULR1F",
  "key2": "5oDJ1Wp4tuY1J1CNK3HBrWLdU7XdiCB8Kuu1Dnab8mLSsKZfrwJ4B1ZooUC2RVvG6J47N7Qdq4LKa9CrYwDebCFy",
  "key3": "46kn9LSEf2Y1xw5z7Kqq2Ax7tvCk9HdSdEEdPhJbdxefnx85DtGCFa7ZCe6Bk28tQUpHzGoq8RDzYWA9qfemp6Ek",
  "key4": "31hPYXHApd8RoaGt4EF8rxZeqrCZhT7w8uipMnq4Cd3zQzRGtM7v5Pjrior9Ms8LDrvnefUS9VQ3hBqBAyrkbpYy",
  "key5": "61Sdhe3BBC7PfkSnFFHNcYj6rZF2rA6qv7XNHT8vWvrCEUz23NB26Wofq75grCumWPQfA2u6d4qHWKeptm6C3GaY",
  "key6": "2NqjYpx5kNzGyVKszXwaTZnZHhyUsgRp5bkVFtNNE5FwJbrjmsgaP6hTjoJZR2PXpeWadfvRa8jyjN5JBXzZPN3r",
  "key7": "5bhbUxiRRTcjroYEnmqWz3qBHEdVfxTi74gi2BRZQgt4BVag57mEucMQ55znTtmoW2TjT6QZCtbkuTVwkasg8twW",
  "key8": "3mm2TckVGcUXdnbrawFhmVddN4jYURoZ2PBdFsoZkHmuhRdnGixchaqevRiufcCBoaXkLZcY9Rj29zuqgFkwzRQD",
  "key9": "2DAMCtq2Kt1SY6Zk7b4TwLjsuER9VQt9YTT29htrpXHyrkpaoGFeakbcXozv69B2vgj1QoRzfpjyNUGjH5jt8y8U",
  "key10": "2ReC1ACd1h1M1Pm2gqsoMrUMmvLKU1RMhMu7LJkqUidGMuAaVkNipzoPPw1hbUqC4gFThX7vihWWZAdPtLTXVq6H",
  "key11": "4w78A4YSNikh9ovAfyopEtPGatagvQjwmUe4FVpzVN1SQzbrVLJZiLtEtNbwfBjt7vbQq9ANowmMRYe2RCswqXJf",
  "key12": "5XdV4SZ4RL1JjNBt9sW8JXKp45ENjoWxguB3BBH7UoDVgg3XoYJRaRXw5HzaQv13PBc8tCREnxXNLFkResBpJnj",
  "key13": "vq14zhM45hMipodZkQzgZxFKzp2t8GYDSyj1eWpLfVwSpKingCyJm4o6Xr8r5NPWZYGKh5qfrL6P6cG1R6kugbb",
  "key14": "5dcKFJko2EXypNbdtzjrXLW6VKpPg5F8rA59gWsfg8K9bv9kdQ5uZiSCbxyD3VUoWvA6atbVHSUDh1rwMTCNaCdT",
  "key15": "5wduMzoDmrLJBXTXRfLCNqzhXTPdUTw5SuDxQpcHk6mb5UbC8scxHBqUzdAd7AHJZJQgg5Rq4xRu8uANgVLDxS39",
  "key16": "5Vmsu4ijEc4smhVV16hTcJea845qsXDGUjttV31LQhmYgBkB5zuNdQwMRcsjt5sGY5xLYVrW7TShCo7yzQKnpxnz",
  "key17": "4E8YiUsqhThYRXFdQFagPHTVwk4w9dqD5mEPjXtToWVqq7SQJk8k9f5sLYNRruWY1LRvAAD92HRM2xHzXpfMHScX",
  "key18": "2gnTcDpJ64Lpp455KjSP4Hx36rjqacyTR7BWzw1wobFNGJWe84cXRzQMT4q4d2etrem2CkVeZSGu1Yk9uhCLMyyy",
  "key19": "43HiQoYXLihwVkpKx9DfveXmLvzcg9gnWwFdv43peGYuR8j73krqcBwosxm3LuY1fTCpaMU27eTe7wAZBx4ANy69",
  "key20": "3DrgimFiYguZbj2TKHu229hevVNm66KjsvmrWptVe1wP9y7zYqrdnJznBuiEj28iNtyDrdwLTfRhAxRWn1RYyXFw",
  "key21": "2ScxQNitreNS3EbqA3L8dT7HLCLM4TDNRwyLFDsE5WdPqrn3RtSVrP24rXRJMH6QJQduVyp4VUbDz6gf5VTWArud",
  "key22": "3TbF2ofgXHox5MtkswtJtanjbR8hxHWB2sMHBtGaTiSZ3PohUvbYhJ7GD4jxMsn31uAmP5jppH6j27Y9XJjMWzG7",
  "key23": "4qAXh7qbrZci6a8AG7QXLJfu4YSyLbkFFtU4oaqp8bgEkZAfW1UondgyMKUbN3W4CcuPuuZY6Uekh4aHhAw5bVcG",
  "key24": "4mqcJ3GqJbxHq6Ep47bLuZ1qMcM1gpkAwM1yDLkCyxvwv34yanKHoZ1UyUjwjt7REWEkmZopYJgLSnGgrab6uWBh",
  "key25": "2rBqALdqutcHh8KvSkacp2skyLYM4coqYmZjAHQvuoW8n8tY7BDzxPmQe54AGuvmG1YQnTgzG56T8rGu4ud7X7Ky",
  "key26": "2kfmr46Gx3r2X7ZRhKJBLShSwedXN8QRYTYEKAo2ct9UB3pCTUS3UYxW4prSaT9mq7YwTR5UCzNFGSDA3dLwnDfV",
  "key27": "67g2TrTWD4vNGEb1EsS16TaWyFp3wQeUriiQG4Nau4oj8HkSggURDmHDiKXu9DVAvQW2XgHfd1ZRFmaaDC38AzoD",
  "key28": "4M7PUputUBY36NqB4xMdKwt2rEbb4rYtbY5VvPd2BDenXPB4xseMmwCfwf65KWRypdpH6ZgPZzAvuaGXH2JWb3f6",
  "key29": "4AaahrT5sZ3btS5X3kkJmtCFNQN3wFMqM8s1pZfJqByp3Fx8w33wNPvjYNqXmXbDGDg24HhasWTsEUyDdG95fUR2",
  "key30": "5JwZfzwo94i3g4KuH3tcaBEt2KF7pzqGDaBMHmzHY8wMYVkThq6fqPeAzXGLy6YxcybxTLJ7yoZEtHMAEZdupYkD"
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

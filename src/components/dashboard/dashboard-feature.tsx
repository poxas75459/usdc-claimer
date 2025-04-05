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
    "4qfvVKA2k32WxoFU2QVk76KwLEhgnc6ShsW6SohAvbqrN98MmpDJQuQW8zbWoq1QUmVUv3eWjbCay1RjPkUM2S8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwQ7PXyWqhLtNUGvXBMTczNxmR9WTXPC7oYMh95K9UysGHix6xpuyykcMrk4r5pNAWi8nVy6ag2GhwQgKBni9C7",
  "key1": "3HuW37NTxgW1mRBue1ic9D7PaiLwCf9SEkXnVKB2PiKGNLjV2HPWNS6VdvGu5JBmg78qWbWUgeYyG3ex27r1hAAr",
  "key2": "424XLJaSHpYa1Sq85eqYxdiBP6ZRXdevhBzEgW6J4AoNy9MN9snFt7Btnr2tUYdnr4mKKpC5SVEFq7yC36VXc9UU",
  "key3": "2Fyn1AwkVXDarEHRHyxUc18cTtzVFhfq6r8L7dgaEeS9EaSwj5GAf2y2G7AGZeae7E8tPNPuaSh5e542WDeVFYDi",
  "key4": "2V17bVS2uiW2mH3vYm7f48z5JgdNwbj7UdfrJK3q1eFALm65Eu66SfGTWWqTZ1QV2Aobzkn9eeusAGQiyrZHhb9",
  "key5": "Txw4UmpgCPL5SZA1n8EMpgJSge6EqxkRWxRfPj2WiSmd4Gv7XJ9Hw5NSRcs28zEbpVyHzrKJFED6dBnmXcLuwDN",
  "key6": "4NAGFHkrKJhfsJDDngTMtUeM1XRUfDHd877As42498QrUZTgN8UYyD9pqSSvZELJJdSSCwbSWeJCUmcdcdCmXaza",
  "key7": "uUmPjqdqnLMo3GDq19Tp5nFp9y2qVKgUSETjWNCD9frd5XMmhdrJbjauSf8Ed4ujcWCipjnR95jsubANEUbYWLn",
  "key8": "3SDRar2tueRTjzN6BAmSrDWu9A6LXBc2tfWGhFGoscZ4MaoSb3ztGGGVociEjipHuEUyNYENgDjqQqoYfk4pB836",
  "key9": "5h52cv9rRqbJqVRftCJCxeTs39Y84GFyQQpzn281we7aUZ5YyE5JNsPvUxGLBE4AFSVr1s3ggFkxu4cNDdFd7iRD",
  "key10": "3f7eNS7yjmhoFCy3pDsbe2gwoAeicPYXm8UuA611XgmZ6Zn3xPK4zitcdMmtZ3JZjzoMyPdGgXYRTNn5zBy2K9nM",
  "key11": "3wt5AWGT9RovtjDj4is2GojhjXRGZu2B9PM8LuENGacj8MYCPFWBHwa64XBFdVmLBycLhrkUqxEkZXVhqZhAfgos",
  "key12": "5pTDJeKqSnmJUfHE1nrnSidzC4eEu9e2UPdyFRWvx5TPrtTAibqfQ7YVtkM1L5KWeUz4L8zMfESWYKD2Aha7ngt8",
  "key13": "4shcTnRLbT95rK9ciHw7GKcLnCc8VJjxYLozTWCcaJdX5kkaRKzewgVVGDXaG17SmGbCcjoiMPmiajQFhsYVdeTF",
  "key14": "3VKC8TX71ecicA5Sz4h1fLhTwBnZJoXTecBaHiiTTqJxJBBX5m6eCU832vzMywNP7kVJ1SRgH7bUDbeFsoU94WbX",
  "key15": "2KPCf5LbS4cwtZWHAvujJ6nhaNYzkFGRnCmX3MHL8cwR9HmQE8FJP4YiHpcGG6Fwtu9so7cp7WekuaXPUvpKaAWq",
  "key16": "KJ8pxA3L2EnJW1bSrMoFoaeoKmo7NzyfBxeP9AR8D7FnESvacpdZFzkGibkdGhV75Fd9KUU3J1UayguQiF456AV",
  "key17": "3jT3ifaPeVNWiFoRUq6vKbia2orx81UHieJ49FY9XJgGoRFqbfrjsPMQHM26D91FJVfnkBpeHHduLvjjLCt5veps",
  "key18": "21dNZ1n6T22Tn26u5WvGwMfCnDhUK9dCEE8LHTyhNGGedL1qRyu7MiKndxKNPGDn6kgKNYSrfB9qfDbURUTDU8My",
  "key19": "4WPzodMMMFur1SJNSTy7ZjTbHNTFqNFv12rQSQxgFKGKBMPqccvqsvr5x8mGkXidtn5wKkWtPzKb65CiER9orT2r",
  "key20": "5YTxrFx3yfVATWywVc17R6GWoiRaddJsFodpNhgoPZwggDrkaYQFXsGqXSZebs3toARrBr1ycnpTfHPbQB6LFbg9",
  "key21": "jWNoLvzU5buxcyzgtEUo1uJ4NPQDUJMXsHcEXyRf9q9XW9J9ETvjUB9YhuyZnNrTgiaGf8vH4ekFQpCTLq4tfwp",
  "key22": "4xo7ry1LjsJHPbRf8e2ibRKZtWdBGrnUZGptTdFnTPzT9fmBVeXLAVMQapk8xmW7vNEnWVFpvjPaT8jBHSew34yX",
  "key23": "5CsBBWbWosdAukXdUJJyFHPszj8ogjaVEYmSHN2NMjHk1hgsE1PpCBvtqvgueJkyfEmAfJHHuaZ74T9ymRqwdCHA",
  "key24": "mrXkErUSV4sLKKS9sWqV2vCgJ7yDqLhLq4bvtKrK9iE2bcRgwkGj2BNzrYaw1sRu92qiTNQWrSDZipnwfLFA2Gf",
  "key25": "YgGvWLFSe4j8JsKhLTnRVwN9CKC5BCg3JvD5PtaBKW1RFuGDSjvWTgbBh1vvjFStH3KA1XHuThybgj7ikfvt9Bq",
  "key26": "2cgAVtzYUz6tjo65A5RReXUqU7AT9yE6yKVBKm16V8W4ApuKEQozyg922vso6mSyq3cNfJz9my8XzjW9DdufkwK8",
  "key27": "Lp6K8kKtcLntamCaAfcGMworghfQDAV48x6PRkfxWu6xuzEz4fdHJW2Wefeuozo764qduWnns861hjJxKeBsPX1",
  "key28": "mShHFMw7EsTKo54NMEXibcmeWn7LX3zq1oK8dXgBEU7XHEmJ15d4NDQn4Mgc4J2i3qjeC4Bw2ZG6czKULKPeix5",
  "key29": "2VA1SRboYNHt7uKfGgcDMCJXJCjnJLYWfDoEfuCHd7uGiCSU4onkx2UB7aw33xZ6QBgw4kbCujsu4VgodAR8fnvJ",
  "key30": "65XzCcw8zrPjKEHJzaFQo9Wq4rS7nGM2BZdFDx9wih6aaGaKYGop5SpzuNFYvZpZZyixJaZ9u5aS9oSoEZxs2Ycm",
  "key31": "4KCZZGqiJBMimwU9xxcSctAMFvRZzVj6MJPF2bRimqQNczNn171rCESA3RXt2sJJGTWzskbgUR56j1dfX1hy1MaH",
  "key32": "4CuBmiH6KRKLhHWym6GCDBStVMUT33hFJvpGsbQWtEpzj6wJMoAuJL5qzVhybTZvwXeDw5CLKW3Zj7RjWiTZpN7H",
  "key33": "5XuJRceBkgvcvdXFZtmgKmEixgtbUhRZ7fwfYJLQ2XHobico6aDRU1Y82RkGLGaMgK2zC9wfZSMooSRTSXLJfG8w",
  "key34": "4F6bSKFjAG53oku91iXpCxg3ZE6xhPaJWxZRyVGttQ2K9xurnX2K96Zobnvtvy1xjkSButcEVczMct8HZBQxNUP8",
  "key35": "3T8rTLw8GLAGke4xWKbRhR8pA3XK7t2AGAACto3oJpZNZAoH3tpaQWBm5vAP53CgXqECm8BaarD1J8aZAJdR9UgQ"
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

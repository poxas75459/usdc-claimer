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
    "41RET2BPH5Py9ad9vPNv4iD4hdV3MK49ig5QoMPkvG5BvXR6YAFsdt6muhFbU7PSvW4gAVW4vWaVPyZ6Jd9tNhsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRDNNErg4G9jFjfQmLBvbyMQQAeAXjksw5MpzHgjVV25CKKjL8nfQj9NiopF6MKRrYWWB7WTejg7DkNVvqeMCjp",
  "key1": "26SjoeP7jX1f7Kz7iwbuQ9MjeJB1DVyRe9zrToMDYeaKkJy9LbKjetj8LHAykUZzpKebFBZQABABKVUw71xwNTS8",
  "key2": "5GadJ3jp5G4diM4XAScTVtuBKmB1GAUvSBunphxFjysVKNGfx1v12erZ91jG6w2XLMPssQ1KFq7YfHsj3AdbttbM",
  "key3": "5oxSWS2JRXcnfpXV268nzKamDvC7sUjFZNcLexsbpa4oo4X2YC8vM9W4zyUas5KAtANLpBo69ay4QMgQXsebsGFx",
  "key4": "EgavBtH53jrrW1aEkRuKyeUgiJnjk49H1qyDekxkkM3JuDBsCJaTTXDcsV7N2MiKALbfWn2j5YsNN6HNQPu4DR7",
  "key5": "521vFc4Np9EQg3492hLSX6bgpL7yDW8PZ3NSvPXc5fNEU2f8RGTJMYUyZyBPD7yvm4BLmvMmz9XLyXXaNdfRcixz",
  "key6": "44jSFgoZFKhos7mPjyfZEJoqFXMAGM6M6JQmHbJkFtywKwjyPkWtzoLyCkhqV1pivnp7R2qTNcBUuXfth7ScjWLT",
  "key7": "3NUsTZZXHeXFWR9XmUD9YLcp6V28iz2vvfwTRyPPWxGXW8SDEbHgM9upH9StMoWLNHoMD8egs7iwen7uewhsaXSi",
  "key8": "5V9SKjpaYa7qcYNTu6wqoUZNXNFQS5SfzyuyeknFu6BaUDE9D8XzHys13YWWXaGzVkHDreXkm5geEYc9eTwjRcAf",
  "key9": "XfuDx6giJHyneThDjQzcD5xnHgt7Y2RcdJvfsiRN2QXUN85ku1qAauExJ29vJjWhUxNhu6duVs4rh1CXJhX1MzT",
  "key10": "aUmS1Xz2gA4ncfLMqfyPirzCPFFX2WMdypCtYuHspMxNRkTeHrpYXyH81qtRHqF8UtPjfcTKAQA9NUdVfiUmHv9",
  "key11": "4SAjD6nWyqi5HD3CiRVqg8BEqBPbUezGXJfQtJjA5BbRDMNobPCKqi1FHE2n5VoCaXLy79KocwhC8LG8S3iqeW3Q",
  "key12": "5GmfZynspyawxWWMv65ShpwCzX5rd8rETHyyQAF4diMkxmJWRXJVczeyvLxHzyxCP5RqGaX1FiCZehY3X29kXJj7",
  "key13": "yJRemgECvbYGxbK67hcLbVBr3VVzeLB8NQdieBcneuKND8v1wGrif8hmEAZcf67UQqEtd7EEC6UkQbrWhFCn9VC",
  "key14": "4n5bfXtqSUAssQK74g9mZ5uUdAuqjtwuz6CfmLe49dpLpWAq5VpFc3vbGBqdqtSdexUBMNXKew8FR131pCmBTwk9",
  "key15": "5DjRJEjqDgw7SsvgZqNm9yBoT6tKAUk1LcSbkCCPwPseU86NhDJrGLgpx19GUdbk64Qaea1VUYk3E1WayCJNNWHR",
  "key16": "3PuoVB8pQq3A2DPT2r4eXxaYLQuqhSWg1wVkHq67HMs7N4gBXhUh1UmD8QskHa3g13HwvqufYLjK61QCV2dsFEwU",
  "key17": "htUGjZNzY1fnfzGo3yYFu7csCXvVXCvHEfeepR6Jm1E2BaQbuY4satBJTDJwfmiqMbX7ad4mbfaM2XZEUKZfbt1",
  "key18": "3zFoUvkbpiQ2o7TYsKJyFbKpercfuHsmNGZJ4TCAkvybCYkoGMPTw83JTE9pqsHTvgJBxLpVuibngvLZr3y8cUCZ",
  "key19": "azm6qZ2tw4ma2i3VNcn2rp1exBhyPnT3vZYKYPEc8uZXpHfQg7VAJziC2r1JypxiRh99hbKj5TkfmmaG7kdrJN4",
  "key20": "2Nb4AWYktsWTsftR1VFZxdPeEGMgsgiXZygmZ4m8v88PDv9d5vnAw6Q9GXPVhsWt4gkdpaNiexYNVQXTf6b3xXt6",
  "key21": "99E2Qbbdo6b78gVKo43cPwqrK6mBiaKEjSi5KLzMKkdnRoPLKrGKwW8PpphQw6wUMFnt4SQofmm6wB7Bn1PoVza",
  "key22": "2JWvxXLrU4bD5KCpXC4bsEjHCnphLMhvx8k3hQjMcDabZVko27dXfdbbFCjnjHynbFw2HgPWN4KXvPf24z5YMy1A",
  "key23": "m23wL7oAbsNkbZ82zpZCMv5q9VvwM5CTyRrUC7HkDkncHLsdEdZEBkzpCGfr56HAN1R45oDe3iELpMtWQDSUXsY",
  "key24": "5dur5vdJiADHvyNH4sc4DPgzmRcwzQ3m7TBSrnFy4bsuv7UBh7tbp3N2cLksJj7fBj349VLMa7YFCu5tdimEQXuF",
  "key25": "4RoEE9j4JqEou6dP8yPDoxfkxd5qXmqiX4hryi34UL6dLYxgvAj3StKgMVf7B3oeEgR6hdZ5bC8fFBRE7c5fLSqw",
  "key26": "4PK9z1Kasevv3mwBs3ZX4TxS9HDPuyFZUQX1JhPSssxFQcVQfnZbsNGESSe8ehRK8DZUpaAdJwB3VYRUtQcv2KpV",
  "key27": "4ac4Z7xDngSQbFWFdFzhsoJfkzsnfWYfQajokHz7ZLqGxQdwYi12K9iB5mCDszihkP3E9nAcgtkkoyWQnosxymQd",
  "key28": "2eeDSWrKErtHH3cFbjKTeQXwfdHwBXooFYJWq3ughqDjsrzDpNZDn6A1D2H61BwvsT6gtji8SKQYKTBBkHuLc2UM",
  "key29": "39EXQfENQZ7ab39KwK3sSmCwh41469CYNkZt6W3MZiQZSJGtGT3DR5hQVkyaMvo5LWTpSH1qA1cnkpmGiEm1691C",
  "key30": "UPPvhQWm28Zf5JYM2rxSKwhG5sB3VP2YAGSYMeJst68E3N2q6eD7rnHQGE38LvQAQwV1TpBcmNJENPRyqujwUt6",
  "key31": "4FXFPWvdTpkYe6dESs2h4Wc7rYbNBrRRjww1DURH1VrikQm9NTL9oeM3Pb39Mxu1r6y5gvUVsPn6jHvRmu2H5NEM",
  "key32": "Bk8xM7thaezwvLCutQNMcbLoHkNJhpXHLxHKe2gDNyFCrneeGx8ma9AowTizjwboSU6rn1UekYxDPTz19THugXw",
  "key33": "5uecHkuUiZwEKVeimwknyR2dc1Yt2FdyaUNTcHYzMbUwe1ucezdoKbJW5Gh8M2faBpNC5F7LsQhPvNcfyh2TJtVx"
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

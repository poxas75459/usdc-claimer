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
    "5D9eNwjrW7zs7ta3w8Hm375dCWgN6wyUENjhwWNAHbS2iuqCcT3bKeQA1Kvusb6KY1QmNdFTK3tMhfMYvafateRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sevNFcKZDca4c8XtrKyaTX7pZEVqXyqbajfjEBMJ7Somk3RZnJzkg5UnPF9kMUj8Fc6qBxsiWyuJWZwNTGVzLsq",
  "key1": "3Zru2wuey4Bai48C6tLq8pPT4TGKu7LLTAGYuVb2w91BgZENZM9o73375DoX3ST9aBvvvcr8Kfy3Hm4GxP6uMdTM",
  "key2": "3b9MRC9FvUkBd6F6aVmNWMdTa2SS8r4javCjLuEXZP9J2V3TvKKWtYgDstP6ALVxXAoe4QeQ9bCTXkFS8YGDwHuy",
  "key3": "5fL1yCzLYk5TGu2J2idvG6WzdXVTKqW4xjv1nTzawFMCiShyeiBCJfx3sKd8KQX8tg6b11PwWzcsqW5YmJ3C4utG",
  "key4": "4LcpgjiHL9PKHcVuQktEDhJNCGzProwZtPVjvsFU6zzosHAwuAqy5TcGgoeBH4ETLoXPkgwBsGaKaiWZsUtAUf1q",
  "key5": "417j4hRoCpdSZwpQkLTmBNLNLTTQkLszsD2mPdziiZzQ66dVd4KqyXmc7fXpx1Ns667TyJ5WDg45Sz2eJ3AELE4h",
  "key6": "64JnPEzC7bHjpCdPyYpePbHmCAJgjWaNxnvXaq588AZXxMXYHSQqMCY6TNxdDPzPKJjKqjU69oisrmgVHDJMxkvP",
  "key7": "JqzwSszHG1dDv1eN7VGExN5Tn7VgLEgz2nCbnmNHCnHKC36LpGaY3JhXiSFv13KhfiAVuLzuzUijsiLsB4ryQej",
  "key8": "3SkEBfEQPtrf4GVgWFwWxchBMXtwEF5YkEfDDZrUDvQpUeUe6sDpGP6NbDWzWSD5Vywxq5af2avds7UPPK46VMon",
  "key9": "Wz6R43vmSrTu6ac5UjKALtrsF7bPjZvjvGfRuYJqaFn6ZQtrJ4rQMkongLW2nzrW5EapzozD8J82a9xf7d9n9NW",
  "key10": "xHx4XtebgZG65WRmfu5ECsjqxF3KAH4iiBoAu3LRwXgvX2FwtVYNCctKegqtVzGyPk9RLJCAYjxcUTmp94WuAkt",
  "key11": "2uokRgYfACGmqoaaS2K9JLo4G72gFayqRBThcbhvj86J1NaFkjafhYhiiMab3NtTjgF3iX7YkKeHiEE9My4CMhXE",
  "key12": "26yuQJ8G92wmpWCDk2zKzKAJvWmDZ2dSXf3kVfbaAQ9ScxK4MDDaVuEBP2Y1ZQ3B7EkimP2pCNqt7RTtLTmAifvt",
  "key13": "4tLomfeo7A96G9776x8vzvWdNdkMy5bZcMkyy12RbRurDJzRmhtvuyqK9Z1N6ukPdeYimpWChHc1a9J587BJDHmt",
  "key14": "4H6wWKi8SoiAwJKJ3eC2v8dt8nV5nhe7u9YwnHuqft9L7pnxpAPRYba4ygcnvAgjfc1WGQyqEAnfq3ewMMQNmUut",
  "key15": "bf9obZmYVYZS3Tjb4KADj6gJHjsCBLHpdWMTMQLKgAWbLStr5jV4FQ85xTu3K3dNDnJEWChchUNFuwXS8Jjo5on",
  "key16": "5GPVzH7N7rRdpf6WssK1G6yecvAHjbs3BiqRr4DHcXQ6a5Qg1ATzfgGpMcq8mhG2gkBPV9nQBXV4YroXY4n5jHfS",
  "key17": "65yzq8mLmcJWGb8H268hFMz3rXznxHjPX7x5CgpSU1MKmx1gsBFBmAX1cjMctvHkJjW2nj8TFNxaauk99T5UaHag",
  "key18": "ok613BkKQC3heK8W378nsmnT7eJX945XgRqSi7fWNBy2xFbUTsCKUV9UD8UnQDhqshU9hbCwqQBp1N8RWkqJWBJ",
  "key19": "cBVpDhxxE72SdkKvRr4Yb7BhKTxpJYJSdeXo8Q9oHrvwLkQfRKxNZfQC3dKZVipLYAwtWFGpvkquatdiccotfUc",
  "key20": "5yQausn7Rc7c9FqLyJsnSSLXD6bygLuVDjZBzF9uaMo8NyJocMdVuKSFePPQggo2KWgwyuN8x28CyY46p6sQrA9b",
  "key21": "G4yYp2sDsfuVcjn4CRcsLSGUg4vuJJ8xeJvCZGd1n8HsLqmksdNfEcMXAU26g5GiFJPzzZxP5VCVe25329YmMUU",
  "key22": "2LVRB3eLd8CdQUqoESvgUJ7MJZJWMXYeNqXKfsM1AE2XZtpcLEf1Pn4z2w4zQuodWjmgmYtKosYdmqEJ3K8Dspdr",
  "key23": "NK2Ymxgv7PkSnTL4zAgbBUY1DDn4Qa2y6EsUKdV7FsFyWCNnQQ3U8ZxRnYNVzTCodrkDGMNqCVQyuZdMcAW2Akb",
  "key24": "21Tf1TXMmAQKPeabAMeXu4f2vYcNy3Kiny1V6NWQUYFpJe2MNirKnszUxGKBsYxmxnBfEwp4RoirgpiRN4RJ6AGv",
  "key25": "23jXa2BgzeU7EKe3PqdVwRPbpyFUEaCpXA8HGoRUPQs3FQiyyhiTM8gB6JqZBE8o1ttzwm2iM3KqoVHMoGkV7nmh",
  "key26": "5fQiJ4WY7TdZ8frsxEKW9aZmtLjSS7QAaXzN8PjMx68B1r76vZzhqGeC63FG4q3NrN6FoeY2sZk8WL769LwVVQNf",
  "key27": "4EB7z7RHEpRX23p6kMYnVfDyHshrVh7LfjbyRpaeY7yZQZfUokMDQqwDm7VtvF84t7KdRXJMK9Rek7UPjbZaFZSs",
  "key28": "4ob7yXPdXLEyBemqsimLx6xsybjt2tVv4gndXu9jNXC8Xmo2cZezNFu9SsVL3pzk5mPzrZ9XshMT4LekERGWMNH8",
  "key29": "4B86TUiRBMjpGpkRHcuWcx5PbT4oN2dTUm2ojsQKJLDvRqtNRVRGhogsrqLKBnLaqx173aj1ibH2F7WxG5x5nU2C",
  "key30": "3dGvAKHhRrrAQF4boQexMPYmuK5EZF6vgWS7xYhRppyXvm638GkVp5iPLHaKKmeHtnbrdD4F77mfGGFsYr7X3Mvu",
  "key31": "4iDZqMvKuD5t1Kf551RsTrFDSLsUmsjob5jR1MrMbzpZSNZsZK6hkqTYorfrDPcS4V4yqRJJkkqBjvi4ZPvBkkGv",
  "key32": "3e3Ahvnp8BuYJZs7TwBrZqaNHfdZgw6BEYdUn1YRzABk219jzqNSm1bxUbCX58we1TH85YYbGvksQeoo2NVXVorN",
  "key33": "sEFSMobVUJLdhBTUAZvuMAVjwwArAdiHVyejDYRUhddCPDmdwD6ieGyKoGc14SqwE89NcNzstAgPSpxv6WH9haz",
  "key34": "2PsJK3ppP6dKxrLVokEFMqfgzMFN7cSNVgspnyfHLf9F8TxpGh9TPRZ3f8yNjGv9eNE9cnPBwQbrzXQPCvY4AwGE",
  "key35": "4xw2AfjsqNkm85njgMzYQGkYDLYTXBLF9e5qZhZAfD71TfZtYiUyBy8TPVPfWdmZeWv8mMeHrJRzxjt7CaHPTcdj",
  "key36": "4NaLVn8AS4d6jDYrfmUJqoCFS5svgtmLGT1jBPFbn5LXxZJHTMrUvFhMTCkBEB363CDWDy8KsXk4yhKTrR9ajH3i",
  "key37": "5FQy5AtF92SBYYaPfukXWz2vB2MHq8JeY1GRTH95NzZ4ouPuCHyaacSKoFQj5jm9YhxEBDDiVjSuauGpefn77KLh",
  "key38": "3vzckgV9RsJTKa3PPcgMbqamkVaxE36VaEQnnbHwzk5suzaEUeK2QDgr2xv2VYdqgkHRYVddnfsz7fdZAS5ojyvo",
  "key39": "5Z1jJg8NHeQrH2q9L6FSZhchWUfu7Vkia597Vx6U4V6DmiiXvUwYefHxBsi1VagRpP9q1NvBeu4zr6xnCBGb6Pa9",
  "key40": "3c7v5xotVgN4gAr93pTfijxyYKAFfVUe7im1mHnXty9JsCqLjxupX2eQro19154skypRXL4JLSaciPunCdn7oFe4",
  "key41": "5EE3pnC8L9ZCwVSk4e7c9Gx6woLEMk3HGmAhnztSFB8Nd7xCvmTo2Q7rw1EUDWq8ZcVYMm6HAzaGk4ESR6Ta2iCS",
  "key42": "2MqBWZ7TNZy9NCpZjqCSHQK3UmfuG8ep2Ddc5seTC61pWLoT18YzEgJx8HTayEseLfxv3ALSuas6EBKcN3RKUihk",
  "key43": "4cfxVXjqDSNZdg6m4GZmDqYVBaFrQcarMd85eaouDguup6hBvqBQcN5rhtgsPkTvLxGc5igoctFgtmCS4dnr7rGy",
  "key44": "2uuLFUZH3NfrZNxMW7o4xbRzidiZXDaLtxNibDN2zaGsfxAcbebMraJRUKmWMbhesGhmq8FeYDTu2SYLMpbcpXFc",
  "key45": "4U9LYfi9nnyEK53VokCJxh35Xa7MGUGgeyk1padWSunGo6py4Qfkq1LGSnQsFnZ8kFC8SWSq5ewam6q9JG2izZPe"
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

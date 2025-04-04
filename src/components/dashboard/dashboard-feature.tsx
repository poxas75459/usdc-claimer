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
    "2SpGZNjxP1y9SXRyu2c2g85CtLDZgemsXjc2PMPt3CzKcGPSpxG8WGGeNAcKYBSK99mXdznxXGvegMi27f3KWgMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52gXGJjQSSZgjKnSZ9esXQ5ojCtPbPhD5SLXjxHcddxUMHBnJKV6xYhpCHR2r87hXWLneEELp735hzDXD4BUHNr5",
  "key1": "3EnnfBXUDJkUgArLpuMztrTDqUv1cJLeanEDQE7cW388upGUhZV8M5zG8EkmBRjZb9kPjPWRfkWapMUziugXqjM5",
  "key2": "4GMTQjg4K2mP6deT9RKCaM7jU8LZVLF3jrpSv5WbQXGmrA7DRcLv6xqZ49icWkFF26SFswr2RC7kmVrvWPef4vqu",
  "key3": "5Ps8JQd7sqdMhwgje7zgZKqQoTKsssbov4EPXq7e3dXBJxP42X7WvL7nkEtsKWi2LuYbAXE4e7tjuhGqLgKWXkVT",
  "key4": "4aQYAnBarqBUGP1269od1w2B5Jk8x22Bqwn927Yds4G3oHsZ85kHEW4Cd9ouuUAnM6D6qWyAo3BcoDtmNgsBs6aF",
  "key5": "3UQvq7izR14uphDuTAjS6Za9Jz5Ko4dqNuR61nx6h68wNZaK1QcBNwwptDRgsRUQBjnj6coYv1s5AVqhuXWFuAXu",
  "key6": "5Kk159R6pN2JfkycTCBmfWgEU7xr6Jxpd6yeiyvo3q8TZaSx8Uv2yzWM679zc9z45hXuYZ44JtcQsAvVVMmpgKo6",
  "key7": "NeRKsTtMYjZUcghobCGptMBKEPQzRXW4fw2oSyuCWStKMUu93CnrR7J6L6xva6BqHcwsBKf2BhKg9rexa8vth2m",
  "key8": "5soTWVB6cse8F9kv2qKCcaqTGhMArfSB35huxmwqG9ccWAwBKodWQmPP2Az8W6hPjV9p3geJDbqJiDuLrasU3R9r",
  "key9": "kBkjdkMbzfHrLKNQNrvtGFrDtok4iEA6r7aUAmqQGpuJzDvQXLbcx3WfWLav9CZ1oxR8GE67R1UCxpDdJMN75J8",
  "key10": "2Lq1UGFwH7osur8BUEEMJT8QooaLP8BVUfmRVGRxhXiZM5R4ykBzn5ydCMtN73AnHuYyS4aGeiZiVKHXhoGFyzuX",
  "key11": "UngGKW9akCetq51F4mKrTuqgGk8Ny7dDb3WnDGkP5f8HcAqxoG4oNkPtkVKpmXmjRH6mxKot4KJQ9k8kfvCAY5x",
  "key12": "57cj294v9DTj8hdx9phodKiR7VGBCfSmXJmyzrcWmTYmSPxsL49gUjdWVT5S3qpcB7NmFutcbkqcJUoXVVRq8sGz",
  "key13": "3f9UGwiwzVq7apHBJr1qJWLuxF9QyQHxNUQLT9N4V2XKqpnCN78P2w11UiE34RW7ey1fWXNtHajMtdcS6XnxUX8C",
  "key14": "mWRY6qCjWwyg51sMY166hRBe1PcvncXF175NLmjur3ZZxnC5CW2422MLf3BqsUaD5uFGSpJA7xquELqhvrnRt7v",
  "key15": "5D9hfg17P1eUkkwmXPSKChLHYYMLYgjF3pNNYq1SqGh2wuT7coPb65Hs7zQ48t5LV3KTCiPQWw7fw8RHVCDPgAU6",
  "key16": "cWnHYjzFRqtXo4WivQxMoxvL4R7ZV6w1b2n45zbDs6nsC6TY2nyAeLwHpRu6EEzL1nqFsioYnVc8FULc7jQyQS7",
  "key17": "5UEZnpzzMkEYv6YzK6HuQ2RSEGZLo2P3p2yQwDwYuC6pYBYBNW8zfZ6Kv9zpYiH9kQQsUcvo8FYB6G9DXTUX2Ppv",
  "key18": "38TPKNRpUhRVszupsNue1DX5c1ieFUYCQ9eKZKA5tQ2MqgsKgHaYibg1mWjg84w5h4V9NVHAwrL11ewKGdwdt7TS",
  "key19": "334FyntTY5o52BG23fP4jdtbyLN2j5iyzDggHemDh9P3fsALDiCmJzgL8hnHzzyWaMD18N7QkEkrskzH5zeeH6Dj",
  "key20": "5HWzuy54DLN3Qp8zd3KA4sJpG96QQvdnPLFUF5Hky3gT3cMNkVBjSp1SU7P3mFoTGPS9FcjYCuXTwvLDRX8nichV",
  "key21": "2dGBoupNHobtN2ZUG7JXLd93yEf25trdTZVXT9YkxLZ3LYEijvbL2UiUS3Asjrfi1D2B8gXAjMNnSxoVk7Jyavxw",
  "key22": "4cRryLv39CsyAuAx7KCZer343YRXS2SEKd9r1QAN4nXpHHFtGUcQ63R8SAKDgqNugBoYmvTsKJTHqwYs68cckxr9",
  "key23": "5t5bPDNweZWt34BAEvyH3bQhgQHuyhAyNxLN1gxYDxGZSxZFtRahvG9Cq4vGASSoA8iKnEesB7tMZniyQHeXrxZ7",
  "key24": "3tr79sSfy6J52sGK35Ref3BrGwAWhhE1cAQjigiPLWF7HJHqHieEuzzco3MsKLSdAFsXEqEzzoMGQMcvSGn2x1tQ",
  "key25": "3qkBWeR5Ng7AFvnCAoj12pPLrgDrHydMz6JZLQgRequi1XmJpbkGavtowH74t2qbJD6XUmbwxaqQ1XkVSBszgJES",
  "key26": "2wNmwJR6pZPd7y8ahQu5YpjrsLwNwfjiTSdjdNS8kmAEmWqeU29fejDFZcANuh75h7fy4S4bk9myypMcZwEZ9jh2",
  "key27": "2oQaDDGoxtDFYCsPiWM4BeZ16U8ey2gfpwt4xLdLMRksMHcEhBvVwHGY8tzSBbZS27xPBNiaeKVgw7fS5jNf9r8J",
  "key28": "5ddKsSeQPpFVkSrdc1Kyf36Kiee2kGDnFCEvjs3SqWc8CrXgLZHt9zj3LdSbwriKE4mBEpePHXTHP6BkANHEFv9d",
  "key29": "H1bauQPMfUtdbFefQhco9r2mgN4mBxTBuyRtkRBY8YuRUQLmtoqnsQ18rfVozpgkJ2qV8WLGHGFFj9DtBAoi5eR",
  "key30": "354YeVMNnmyqwZKdy3SJeAuTZ6kJ6tyYepZGX6XfCKYctVwizrGUnzU8NnagGjJ1B1KZjBuQwKQQbtkuYy6SxoX8",
  "key31": "3BduUigRVvUTv2dfCcA1trRY6Dr1GcQ6VLjZjSc3Hu8NPwEfhyk8xdY4mUjXfAELsswacqWhUD355Kfz5g1b17c6",
  "key32": "6rKS7rz8XjC1yReJZbYrcTK8k1Lc4H5oPqRMrCEUpnwKAhqr2poohmYmz8LkKWqyHPzL1G8RR4dZFA8Lae5Wcc3",
  "key33": "4iiXLFH3aayQJKh5nuCJgmao3Ap42KC1r5kpMcXQKh1ZKqeboQpJm8G9UYJF36126UexDWsVRJRPxUT3t8x6eebQ",
  "key34": "4ATVrt7Q1yzCxxa46dUpeMYJM9KzkJnJCAHhApRKiHB5KpqPUYWE3y9sxrVMPtTh1hCgvTtinSxab43wfGpwXWTL",
  "key35": "2ATieDQm1nec687dkBmvLYQQgc1pLTuekCzyWwRpm1MK6ueUKy8Jh7sHmqxWi9EN3DfzCdy2tRvwEWznJhcoYS2s",
  "key36": "4bDj2DJasgn1iT4a7Qw2MJSJZz2kK2S6pshZ5ZBEgU72r9DGLA7NkzQhZ1WGU1aw1JVci3sxcEAV6hmn4jb7WdkT",
  "key37": "5ymXEv3QasgSaFX1hib51Gz4LEaW5mrVkEf7V8XJ9BHVckD6uRPYwdXnd1P7vHXWZa3JYyaucMMxx4h7tv7roRwq",
  "key38": "2csSf9kScrpvqurd28X38FG9iUx6sxoHxhh635EnW69D5fmq1B25knjn1DiYbxiAQ6Gn8mcurpX66xY1PdtGoJGZ",
  "key39": "5LUh6P2pTrpb5KxczR9kXbxweYVaozkPBJZFHyDmX5HzSo8zf9hWjSsjjp7ueiG4AFyKw4bd74Z6xz1vtY4L8ioz"
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

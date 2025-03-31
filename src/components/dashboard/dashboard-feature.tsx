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
    "2DgFVHDhCbocyQ45maCUG7ChUEVEJGHaiRSAVNc7P5X4WcnpCAn73wFNmVDgUHTFK26hZQ2mSzMyLbtciJPAxdyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymuEvJNL56p1bbQMVSVRCM4JSvv4y2qfoSEEFZLBjzbWhwPDUuYCjgKiDxJLt4nkbSn18f49Tt1ppQmnaTWGU8H",
  "key1": "5WHeAhJ648uVv9bJenW4CJWg9dup2Jj2GXNjnCmEWi9zz7TZbdB7QKomUDZe4Md4bFa7kkVTXDys5EyQaXNzxMkY",
  "key2": "24924R5TSfZGfPjNvUg4KCaGw7nSa7rJL6TYJugP1eD2hmHDkfB3oc7RBU15xhcKbAQxy6Rb5YF3QZgr7r2voZLx",
  "key3": "4HJsEcwqrQdnwwqGCWrd5zhVyDDbBymJYNAKGZYfbDkuaBxexMRkRxJQ1qyCWGYGzJoXoU9Zk2TqH5CZKBg3iA3m",
  "key4": "5F4uo6TWD2B6TgkAeakwj7cTA9z1xXwxf7CZX43J8SkrSZC9wb6ZWmP2h7wPPRi3s6ihwoquuaqvZfPiy2cCQFGT",
  "key5": "gkmmbvZtsrYsA3c2Zey7hTYLqHneayhCjQ55uoE6zRgCgRmd4jxVsL3UJ4ao7BnkqdA5xE3f5ySiSc5UmyFLmHi",
  "key6": "4GmXd3CJ7FWyXabKA2KeC6oBzCtsAJrA765YwuuUok7xrAXx2Ar5BN8KTSWCUzXxphpmwUoiXHtuiJSCTJeoH9WN",
  "key7": "67jKwsUkUsWMwH8omtw3wjaif2g5JryruQG6EkFJBcDtaJTY4Ex8cnwbgv4ie4qoDzeMmcmXQpDBWit9Hcq7aPjh",
  "key8": "2J8kRwwVWV7JPRk6j7FCsDCi8GK7nQAgR1xMEvY6HHkF2Jzez3S1WsVcdtvKWrPYCJBVy7zm7yRxTSFjDrp2TuDK",
  "key9": "5Qug5TFCg5qoMpwECZK9UPur6SAiy3FHbUCWRLfpSERon65ap53HsP4NjuZwYyjn99FnVV5hE8RGAZTVGTxsGUPn",
  "key10": "41Si6haM8GGUearfzUEcLVKFSzRh99EUPnDjkNAhVVhSN5hcjx1e1qwFEsexKCfcNz36gjzf3fd9uWCwbUhwBc1W",
  "key11": "2TT24Bgo3U3xx2WaZGbiwhLX5QxfSKum9zDiFwkQXUcamEbwSQrceixK6DALbFjfo6ZNqCXvuXh8pVMuFBQNcgNu",
  "key12": "4y48Gi1FvZ3q84mca9mTBZsqkGQMLkaGkFeHACNjPKhhXwwZTgXsFZLFaCFoeQkKax6CPHtGUPrtQuMyAyLQimtK",
  "key13": "3b4W55g7c1gT9jMcRY9nBC3RmKSC3wouxWLZ6ZGMSS42pYcLHXWaHPdcNdSjf8SoMx62MsZgiZLtakAXEkK33hk5",
  "key14": "63JBwEHkw4ikaRjbiALDn3FZX5NBQvGzCtCy2BYsX2n3ckywNUYrGaryhE9ZaH5xAye3i8wDTQZrSY7Pvu8ACNY6",
  "key15": "4ErWFKF2hkNjx8ArRUsPXPvVX7VRTWryrVcZrTPjxbh9MVAGFQdHFJoLgQfB8BubocJQkmC2eXWP2rZQRi58Wktz",
  "key16": "5LpMddT6jZbhkv4viNRU26SxiYkgLL6oLXvNnfgKQcU4RrFk7nWJL3kjVNpvjWUgxBueUjDU7J68xvySL6rfkG1T",
  "key17": "4h6p3Fk1SFLsYgbHUMDTdSiJy1j89mqWepstrekkr7zVZtYfiCJR88fToiq9obcD7CnhZRSNmBPwBxo6XaiUb67Z",
  "key18": "2HvRN8AJqqSp4KL6TDsoantnvk1HPgb86dL72a314iBSF6As53K2DSX7WFxe2eLgJoqGKhXc4oav4AeDryN5wY9Z",
  "key19": "2fSx33wXokxmMLsy5eF7JXsoFpiVPhcQL2frNsxxepbcfMU5LQLhgbjG9taNgN1ac4acPvkmn6RZUt1qsNbe3zBq",
  "key20": "61wi8o2WZobXi1c6Vpg31tDB8eSGJxAqSAYns5HrDPvusoh9aT8iSPxotWgwcAErTY2r4yfYbZPbXF8S4KmvXhEj",
  "key21": "436kLzwWhAjmTJf2VY2D9QZcNH8ogrDypCRoaqTj9oeCTU95tUSNzhw8bDbXDgSVq8SBxi7bDKjhL9MDapL3k1cJ",
  "key22": "58q52U3ZjELym76a5gLHPzYTTPPX5HgV9qEiFUXySrQANbghMTUrBV3kaykeHxNrfydjxpm9ziAiBQkbvxBCKjeo",
  "key23": "5ka5PG4jNpvptvK4eGVWiSK3BTpFcyzNq6giwgfAMGErYaQEziaEHDRmPNgp7BmJoC2XWry82jz6pZz3Uz9tYru7",
  "key24": "2eXeR92NDkLhjR2R2hoU3VPFizGAnosLnvjfdFePx8tpnt5R6PiyrxrSfc2fZkS2bDZ6xLxTWuzCuCQgusWLhcXs",
  "key25": "XR25H8uvvXWvuYkrHzbMpSzvX5NCBavMRYz8i4B5FZ3QTRoxsWp623EXY7ZUu8ZqoQDSFg46iTqAm9J14uxHWgx",
  "key26": "5rWA4vZgJRy4mRgAvy8CTdZoFt7sN5bzPM8iH2cM1eBxHmxRmSi7xrePUxXviJZBkXZFhWxVuCD56fBuXxvX8gFc",
  "key27": "uJWGf9xhrNU4uGDYx9Hc2eLgKuk2zC1C9j4BgoJYQ8k5WQ9jYEb5VUTJNaNLJLjCCnGRKppGbjb7K6Z8Hyc6Bkq",
  "key28": "23ZpuWXYGmTYLZ1ATpF2GB9xnoPWcBNrbrwqK3nqmAu6wfqgBKWn1dXH1YwXPT1aTpTsDYa6MTzLZTNwVDbFKcCy",
  "key29": "Tp49MqhtGY4ktSFart6bcfqT9oB9A4M4G3wM5SMqfzy9XJcvUZMWUy17kS4tn1SotdMJvykG1USf98fvZMAwzPk",
  "key30": "4z5nG342tXxnbwuiaZQifAREweW8Wu6cDuLJmWMGAeuB46ZKpxBxr32aL5W5Zy4xF79A7YPUpqXSVjR5HSGK3HU",
  "key31": "5gtUqqR2tRVx2s7kTa5Lts25otWUMPMddn86giTksyEChNV5C9KaMhQtGPyiAdp1Sosx6NbHYtXDMMpYmkBNDnd8",
  "key32": "4H5bJ66JdNBMV2X1nSUV59BYgH6hPRQE7CkMEZ6u6hrLujugvGvFFBXU9AUH84QQv7HSFgBQHfEzcY7ge8SzT3Qy",
  "key33": "673q3ZuFZgpCYGCNNCk1shwfSepyprWbGWQaYmXWc4vCJBHY674ChiB7ZH3B8z1JXFFLVJx8t67hrBSt516dmEqa",
  "key34": "3PRJqCFMTFD2CvBV2ajqQEQamHVjPrYYeX9b4cfA71CwPyka7dmtfTD2RsFcaHokQyWJqPguQvfCxww6txzr4tfV",
  "key35": "2EfMbfQgE8zviBvvS9u6u4KzGgwEAPrZAVNLdYySay6nT1AJhPMmwqqmKVH29a3ZceCDxaDwZ4ebuESPgjKQqCU9",
  "key36": "3tWbvC5pmc1qiS6YzMWFJwaegQzMD9duZdzh2CQ11AutQqVEZp7xKowUefS1F2J4n5gFyHDQFdQNtRqNxqgpQVB3",
  "key37": "4QncBeeUWomqAkLASRyrssnC2kyCYxFHqiw56JTwMTAfEqF1rh9hnxFKFqa7KdySFNyv1vNKPicva5uTq6TZj9VH",
  "key38": "3bzEDFrpL95eg73t7BAipsAPyLrDZNQfSe21oZcg9SBb3atvBByedKZXRPXYUHMd2urqsZPD37gzMUXNKZfhyfQV"
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

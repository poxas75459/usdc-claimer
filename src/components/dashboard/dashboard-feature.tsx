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
    "5LadxXZK5n57ttmUvJvqgfWts4FYugz3vmXWuaLpBgd7Vhvaer5HZrMLUiK83cswFpiXrmwqTwNqG1fmZPT6P9XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELHfsPd2n1EuVyai7SJqWMDpwEKToV6TKmeqrSQJyyjWztUZSb94xwhzQCzMEgPxxherP8SNSNr18UMER9EVKzB",
  "key1": "2SQdRqtXQs5Sr9pT6P9fuJXELAN8dooCTWbtbMy91pMy449drVEKnGet7tNE89UPeUJjfb8zNDNjubopjDPST3QK",
  "key2": "49gKFQB3souH1oHdZhBLuH1pHwN7AbYW3SQepPgttTJxxMPZXw6b66wsriKJJxAdaUJfNRb72x1uGhKSHM9dHw5T",
  "key3": "3eNiDh8gq1rUMZ8SmmstMWknSsnPK316z2gYkyvodUXWhXaBpX8YYVbSdMvb3QAYAG5h8uRWjS4CKNfMQrHyeYxv",
  "key4": "2QWYNFjJv9K3xgFeSNBkPKFib6sS6E2r9cHKh1YiJhZ4sjp39L947VA1Sazd7WHbxpxyHZXv8CA5Zi3YT4kJogJV",
  "key5": "4rnkWvxPUy7owGs4AGi4Dt4EPfBdCpEzH5ipvZAHobGXCg8pbxUaM7MS3zGGyokbjDdm6JSd3pshxhuzZMUu2SQp",
  "key6": "5VnShHBik6MWvuS4hXSeiTbVeCfaykQ7myN4pdjHcdPvczgY7kjCKkETtvWhXWZJnUCXX8sxqruPwuGtU5ZqvfTg",
  "key7": "4kC2bFDyDaysMhGMBwnY4cTYgig4CbXCeM9HHzd1FvUDnuieP3MwmSW2euwuQSkNf9SPxsuiXNmqwGuxUgpD4E5J",
  "key8": "4jsC3kC2EjkqryFELz9LChiZBwsDEiEt4WhAvEDRm3WYgV9uKVx8JVozn6EXQ8dC8DwHqqDdXgt3CvhPwDqjwJgg",
  "key9": "fzCTTzQpbnN75H9tLW4xUHTN523ZBjhqc82kuwJWwvfuquasNpEyeCCM3jLNZDzbJmiBfVfPLRXtGVZ6spM1wHu",
  "key10": "uinKcgNS6VvnsFT2ZTfbUYbAKaybiqdtFRCQG7XGvy5t3G6C8DZUrZxNtdbDwBwwDz9A85b7Yq2ze2asFPD5HPK",
  "key11": "5uEVWLPBfXoSVhyToQSyqMsQWMKrCLvExVu5rFgco9yqsftAwU11sccwJ9UQpcKSPJcSEBrqiqeHVrwYvkZ3skHx",
  "key12": "25h54p3seGLUjnmc3Hgc543n3M8pZDPSofhRDpMDD5KzgQvbcBJh9Neg8KEy4UBHVWHkW3uVPhQiqx5GfRqTDkw1",
  "key13": "5PxuBjH76wuFuFFDHSveRrA2ScDprfaUkShbTPHguVdSBSxpccYvMdWx7ozj825Ujnec45BxTehedTrx1WuJgTwW",
  "key14": "2vAfsANTgrWoFFKqrcSES6WmU7VsDiEue9KFHdpG29e2Zav5fagcgikTPyB6eKQLMJo38pjqQqEBoEx9NJBm8pRa",
  "key15": "4fjhbsKaKfWbkmuZxfv8cgHjQ9hrDNGEoJX7fsvZthd3t63BDB8kE5sLnoBx9fdHUDdpDDfqcWGwC87SZAvyck4v",
  "key16": "5L3RkNCtAd57TwUbTSHvdqGV6RHMwNdZetNBgs1dNrHWQtGTL2ffG1uKnzubTH7E2ebie4zTHoBwKksNBqCPVjK4",
  "key17": "4R14ENmZwisCzAqCuSCZG8KFz92LoM9cMY95txS1AP6wV5Ec59soaqtYWgB6aTf3y8AvWB3A2D8azyq1V4XP6gUg",
  "key18": "4mMNGLn9fewwy7kA6UXQidFezDozrkFFTtweYznsmpKhMuQFiYPXnuiSY91HbvUuoX43gQf2ZdBJ985MndEhRj9j",
  "key19": "PkVTtrbSctFj8fb6QUZAzMso6UP8nBN5bA8RbsuAhME6KnqXHe2zKJXBL1pAtHVLgebWc9GTXwxdghRaoutiQUR",
  "key20": "k1cK8kg4aixscek6qXpXkJySGG2f1tYjTnv1Mvff8tqoHMm866mUNT7bKCjZvvXwAd94P7vKsidN3teJ7NmQ3fx",
  "key21": "3hqykCcyq9mmHHyjgt6bs9ttS3CGdyPnJfUHjPUub7tL4e66tt1SFJknDUqRTBSfocSQpAVAJN9dPgeDgrkxxdPB",
  "key22": "2LwTHePnKPp34A6rD56dbXAVF4qfFjnoAGaZG2tFDkFZNBr77MDAQrLw5qD5Epd7GUn3S9G9HTsxvWw6NCzxxzZx",
  "key23": "7qLZwnaamZ9ny8jaeC9zUGbxgc4VyiziN48izxSqTX6NFRpU9pn1AXLJeVZwRakYpCaJa5Gq4rAQWYyPRMf7RiC",
  "key24": "4bUM8D1UCoiofy2VKcv7j6BvK1c27LdBa8yXJMxrLBaxTCv1KdaxSTaLUTqu4LR8XU8956eoJETzrQGPRqj16hy9",
  "key25": "4FbgvcvuNaW4pEw4PJ4HJxwHzt8nKg18xbuJKK5kwD4DYZhDNuwJVgy4RgLgdmvhfF9TLmzzFios29vs8Wm9dkv2",
  "key26": "2i7ofN5XxdYSK9ChQvoUmCGfs4ZxTrrvuZrEmAATEQeGjeBcz5hbXCeGZRjTszJyUi7FLbAD8jyeGxT12QqMif27",
  "key27": "67gUcGgK9q2jPJL4yenChfNw6izFU6PJj7z78d1NK5W7gSzm6zwfgquiTMYkbNBep8Nsdf6TvppC8cFmKAcYAuLh",
  "key28": "3zaaP9x71yAMF54esCogM1kJT8y1VKua4J7yWydrjX3A95r1e8QSfm1VkS93inhK88JLgp6Q3cfRAgdoinxKN3xp",
  "key29": "67XsdBcVxi5cgTHsoyobYGjPWvnuMTX9nWrX63uRxtunoZKAXo99jQ6U7BQQwBpi48BoW7XxJQzqhzy5YLHhiSPL",
  "key30": "2798FyMddbHhjNxu3Bj1eir5Ho8YhJKZc3Sp7kGP5BhHzfUHFvdvprXYYwuEDpk1dvijxnq5UcDgmtUEinThkc7a",
  "key31": "2edyUePBooCsfWEgUSEVAb3CT7KDaQaqXXYEkaV3sXU8oZT5wcA3KE8miuPwuWfEvoCMg35u9U4uarURACE6iB23",
  "key32": "5hshWowqfvAhQSdFURx1RpW5MLZuMttunVe2dSgD5BFFEKRqtTG1pPpcvrFMnZLQNiAQ6ca9D5HuJnQNMvTNhtDm",
  "key33": "5wrKeWN3FFpswVRkvRQXgFbkRgmsMc4qtHsUJKX3scXCDVwqtujseu9Z5kzSVfyg2tTqKJQ5ynUVFWuJ37CryRct",
  "key34": "2DHTxKZMRco1s4Phts2C8Wnxf3iD8FU9U2HFURhot7uGS2mgXn2J7ALyifqmDYQySFKaUrYCKDvMsFuuHGZmVMgZ",
  "key35": "5yMJRtVSMKdpf3Xe9uRoVLkTw8J4N8TsAUCvxyycF5Z8dPdS6QMoaUbpjJzJQ26fHhShKRzShPst3EYUg5HWMg7T",
  "key36": "28RUmsrbP29tAwu6L4MdKRQguNRWa2ih2EKgDyD8zYxvsFR4wPTTnd7B868KT4AJW1ej35tgAYKbrTMnH5S5k9vx",
  "key37": "3N5GEzVFRxH6GWKaV72aGBMJhtQqyJ3JTCptBzqFSEpuHTpJ8NXeXrm1sTJLYTjo594jYxs4uscTzUKkaTdWJoTC",
  "key38": "3JNErskPq9trQ3tbjVvLpjv3mH5Gi3FaEggaDaz3KjkCWFPLaRKKaSqnae1Zq4qGjqAhLDuZPuZF4ZPNj9eAxNNo",
  "key39": "63ThcCrGCuEZEWfgD36BM5pLvqvH4FsHuPZzDapKYMS7DUtr2BF6neLyW5f7SyuGMo9jHbSXeMt752wu8z33wzft",
  "key40": "5E1bpwgAdzy9s7dQsyZeZGf3QJke7JDsWiMtTBk2ChfK1bARH5rbTM4yQjvsGPbmJjYdfVvmusAaYpfPKzg7PrqV",
  "key41": "2hXfpu9UG5YuWtBsoRB1f5eksko2KjnFNCt3BtTSfkQTzkFvx4SUUhx8T9WKtXZuDRnt6h9xPETqCeBGjykRyGE4"
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

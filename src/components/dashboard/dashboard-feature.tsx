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
    "cab7orp25Re83qEWih7PsZBFK2dBnfx1FVdG3fEN8VrTCkum6sQqLBPx21yr3Da8Rw2aoqgMzH4jVmtPBCnnYyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDavPMTg3PcC2T7zJxvt5tqWi4CoLF2WWhQaTr847wpW1okeCUYac9r8kbZ6cigogF5dxQNsexKHipjXcAQQchj",
  "key1": "3DZy2tzt2VmvNjZrT9YK7kcQSYnSaNwP7YyPRnFpmfLAzM3LLsFes2RWLiX5aw55vf7W3xxHczTvzu13TLuvxB7h",
  "key2": "55spqvtHWF1877c6H5moPgHLMdCrQWSN3NYhHbnDu8j4aL7bxqn3CuFgHtjnUhpMce2oMvTzPzwyMXL6P5ibZrLg",
  "key3": "3UQEpgv1mLNASVfu82jXiamWWJQRLdDB5rXQwjh6sstg58dhSHkPFj7RraygoBsqyLovigPiFX2Nde3rCh4SSvQg",
  "key4": "3NmczYZJ6QN57H6vPx15bwTCtNKft8jgaS5AF1EqBsCsgCVQaJx859ZMVHhQfq9aiaihbAbMNChjS3LhZV2aJfCP",
  "key5": "53viTta4WsutGCC6z3gECRZAWjtQLqC8siJBhmMgR2RcQDvtfZr3gxd9jjrEVAzf88YM1Tj8oDeBHn943u6G2dgC",
  "key6": "3VqnzTg1tNmt3JVYChRL7EoKK6h8PiMwkSMCf37xWcKEZ2okYmT316UoZZrMfLMnEQSmnERPvrbibk7vHsTpkrXt",
  "key7": "3LxgbDCNj4BNAvKyV5E1g5GS4WvSygAYXVPYTMfxnW5xgfs5dbUNzo4bKQEe71dnB6fPnoWCCgsAS6BxcU79BN6R",
  "key8": "3tU2nGZPvoGwKXuCpamkLjG8ad4E5cd5b17Ce3f4ynMCAAqs6VtQjagxPZYKCcPdb8QwYftcvXiXYCMevvJSF31P",
  "key9": "21Ne2zrGkPsn2LjGCp4YSx4Ksez8QVAhmoYwLsp1dEuveD1qdASwUboMPk2PuxAhdpEaebvGm99gXZ5vhXHeAMJF",
  "key10": "5FZugaAQ1KbWjnj3TCve4tqFbkcisxLBixKG3RtAV2EvcUtuhm1d4DXS2akaakHVZRARsYuz4kLvDTzQadzAzkpj",
  "key11": "5hYztQ9HDAKEwQA9VLrYVsG8t9Km1sByj3T6im2iMFhvq5yiBbD14yACfBJz22QDSqcEkKMBz8SKdW3vAxuS55Cq",
  "key12": "4Q38H1MDRLYSdz4FWuZBSWt2s67Ps7Yrm95zDoUKE4Qsvdt9BMSaFAYX4uykomEYGkCC5qZAibioBoN4buck71Bk",
  "key13": "3BihdKDm1hzTQQxhGDCd7zP5u3FYgTi7rxZfxLksWhXPHuPzB8tU6jaMAZdaQQqtCZ2n4iedpiBVq3EEUuX38Qts",
  "key14": "4ZDYTiWTiVizdeJKqCZSn7mhpQ4HrvAb8wQBTbx8WMsfj7g4nXTrHUtCNNkZ8yzkK2LY2ct9Hup7tZttCymFFKiv",
  "key15": "2G5Zh6GTpGnNr9XLmmj2bhV5XbUnmW8YQpicU27fZmvMhc5vz5XL2U8kWi6xiQMFJ1fds2VCc589WmAo9Q7h3vby",
  "key16": "59RkBiTKoxnymgBaqL1Z2XVYney9QJc6BAnpab2Ft7Q2ygBT9a3Jo2ehq3THk41EWGWQp3fArRowC4ZvQqYod9fh",
  "key17": "58FqkW7jswZqPN9H6d2nWyiUyEmSGMLuiaLC4PELkzQzpn6fyiKSYRiqpysQxUS9PUYb8nAZCZnVPUfEX3HF6h6y",
  "key18": "2eFhs9mJxm165cuHLgVrWW4GrKt953kwtskkKSnEdv7zQNv1UGzBu6kzqTVEf5fB9MYzSh7T1JKp7MEyDkLRL5hJ",
  "key19": "3bKaXQhjK8o4pHa1zdLAXoUQX2HnTV6D5wqgZkMDe2A8pRpFUejnXjy9XhqttwySxFDQbjZZYFLDdgETxnYXK22p",
  "key20": "4crdnyTUzopF9sBdJRTaXN6pNpwntht3Fd9iiZUPu7SRsFJwoWfiVmHGpw3zzmmMYEiYbVCSPPYFuTsFjBFJV4m3",
  "key21": "2NZDyQiCgrcnhaV14c3w1BQjVeDvSA1fyiwveiNS5ZR2vP25sASNNEAF68oQAXEms6GtwsMZaQyq9xeArvf6VMmH",
  "key22": "JAYvxQPw8ipi6rTseRrhxvbTBRRZ7YKJKUrJ7Qwqm9dQdJnp58PJpPfWscs88Luyrqf1QHKBsVWwsXLU1rMMzDe",
  "key23": "3DoZojoRZ3SqG7QZgWetdkqLezHV8pmr25YYiG9V9wCyyMVwSGaGv81iNJA9WxA5XGBuCHNYjKJ1eWrWSE6jTUYt",
  "key24": "NfWvZ3Key2FCqqyvNrhnL6tRgjuHTJhiKwrXoE7gRkeGyCm3QcuGF94P4oP4eoBqTCJ1xnCWuQepq7SyC5SYizR",
  "key25": "47xaJnvmNZh5LE22r5nZEcJE4XPZTnFJH9T6E4X4j8J4aw5Wx8UPPHaTpqsHaJc5oTPsiVMJaXV8hYS8NRGznVoS",
  "key26": "4QgR6Axey7AdBKZwehxGTEAngG2aVWmWszx4Jx8SkriLEMn5jfvR28KbaadgXyqP3WNdjjbt4iucHMFde4Ezvuyf",
  "key27": "krsbTgyiLW6BoT3WKdQNZQNTnvBt754zGwTpvKa1DLd79JCrRDq3hCAhAZj9CVoRLpUxKdnHpDez78iXpgpq2Be",
  "key28": "tdc1Rg73s1TKBRdo4E5PrnB4WbiCaLLA9C5EEmrWXxhZgrox3AMr7iLrounTSmBwLcrk5YpmaUd4AiXR6k59Mvq",
  "key29": "66cvuCSys6jg94r1hxSHrUeKT4eoCM3L4nys4byUsudQpWGmoubPLJose6B93HtwaJASuUXGV34KU4dsY7JNnZd1",
  "key30": "3UDUfLtjBDfyvG1e1hg7uz9QweT68Sv3BaDSzyvpuzjP5sRgeaWbphRPYTrsCtqp9xJuZyrXHgLFCMVEkGGeR77d",
  "key31": "2jKfwEX1NbutjHQE413u4vUT4tksNc1MJQ5iGKKQ2f3kQDsb5q6HaFM4GBoarjp9s9pSEsN9tXCjcJFPFdWvsQ9N",
  "key32": "2wjKoHr2nYA7KjQBpBeBESQw2PkwE7H7C39QLhAqF5hDm6RfdBoLCNLyegdTaSJZWnNo69eFS3pcBF1XJ8EetF65",
  "key33": "2bG7b8Kqx5YQissQ4x8wga7nXQ27MQKZCH2qS6QG8WwWD6Dn8FumzzUxCWcx6aFDSRpfKSkv6Asm3jeRbUM6Crfy",
  "key34": "31N1KDGLSp3WwC7u4VwLx7mZXCx9RBGpn6DLBdWmpFkYZyxDce3Qkb3QTbYpqUyZXcDbh5MwECd2orpRAiG6mCST",
  "key35": "4uDw6asHgvBMponBzEWPTdBtDB3nawwxBBXoxtSrR28VTArYF7NfytxcYy7uEj4NAMqp5Sb23LnJGkZW5iD93Ukg",
  "key36": "3xRifTKpKwvWUFTUikftjTm6pVeBQNnmqzTtoCLABA1vJujqQoxdSjYKa7VP1UCWYWU8DrP3xfRT7Hs1BMQQTWkD",
  "key37": "PoY4PNwoF9QQgfqGeBZE9xD1AsBbWEHufJgYfABD23GjUn2gk84FzqyeSrJXotV3XTVsAsArWpe1wvExtnvJyD3"
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

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
    "27e8xyUQ4aPNTnyin1FERjggC8wRmcuTmHQVfLQThhzYxGxfPTWjUfLNDaKCmRF6ryWdUxRGKZz8feCsYAsEXVQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TpDtwqCxjM3vFmEkskZRywsirwybnfGtqwRSJBzyC5L3Y1FBDrm2PVeU5kJQUAFcW1yTwBKZBSBHzWq5LgGa9kV",
  "key1": "QSKhD36y4mpKWbFj42tWA3bqpvPQG7YH8QNE1v5N8iKwxdJiEDbEJsxPS6qz9G5djnCmP52ek3pMLFcNNZRpTt5",
  "key2": "XMcRK45woi93vKqoj6nQ5MkxUaVdciuepUvzwgAw6hNWhevomG68Wzg5aDb38st9hufCA2ZXVya9EK7sA5yQC84",
  "key3": "ubtPkbyFx9eRoybzKTNh6WPSMuHgUGPG4vugwyvkKW27gYSSYo4v66fteBGpaDNApKMrketbQNgbAzDYFMfPCbL",
  "key4": "5nhGtt5ygTLoxTAs4KFp3zfKBJFcXfjmyk21YhxtB8Fo6KD1fFGitqoJrkZJNHSGckwpB21KWxmKZkpr3oue42Z1",
  "key5": "5Q1dtRvHCe4upQvR18FqkuCQvbiHjqng79gxYCEWoKNV24qzN98DMQX8sFczj3cCen2qaVgPmyJ9cgdUFBNrYgZf",
  "key6": "3czgvhhDivjw4bUvKPAHCcseZrQgY1cqcn13JnGSBVfUtJVtwfWBRDppXfLVLQYoWM8kEEojM2aHJ4Bs6VcKd4Tg",
  "key7": "4KqckC9nmiDbqT2bq6AW645MBLNBmhwfLJvLF7MzpQPiLxUnPXYgdAywwu5K6noknUdRqxssfwtvKqQFe9zK4GY4",
  "key8": "2pNYzyhxWV8BFCnJ48HmwjaoufsFrbVyqBJXa4nSMXyPSB9LUCnFSrNyqYGZxD1aBPCFwnvtuYogKW4bLroEjEjT",
  "key9": "B6u56ggDtcwcK5HwDN9vqrgCcSzgVXyQmBir9pWDkw9NXJmyDbK9s76nVWJgPUU2UZMqPGFXb96fQqitrk9CqN3",
  "key10": "4RqV6yuB4sA6hY3FAmuxSg3hWQAMp3yCpVvUSwBhZXe7SY9ypyGMFZN15DbtAR8Lft8C7UAY1YSfcDYh9MmcwHwW",
  "key11": "3QEWppPy68m7HVL3a2cT2KpFFtXWr898bZndJzE32vUVhF2G9GMgajJYwj2SnUZC4dFccfhWm2csqps3hcadH9YD",
  "key12": "2kuB4XW6UMhHj15oS3bi14gN8bQV3j6RRv8RonScxKowaC1yxpddAt1mNp5tFSU8QyrXdAkm2Pdx9ZMp6mtvW8k",
  "key13": "5EQcDusMg3ha1UeKLGJif2FMH8NzoRvDFEP1n4smcASKUY5zwkJ9d3GuMMjhgMh2J3WnHpmmCocjxMeXftdYzLpc",
  "key14": "6bitqPiWxKE8f3o7Emx5XstC5JY23eVycnpAPkr1rVVBtYMDhdrTDUDA5jmXH2MH9eWrQXpxZdCqKUkfcLujfji",
  "key15": "2dFq2Z3h42F5Auyyv1PrFafkfdthHLZ9E3wt4UwhWd9A8qE3L6MNVH329oCThwAEuLX39W5u6MHYf9Kv87QJLu7X",
  "key16": "2NsMyZPrvwApus9R5veou6st9hUxH4qbV4vBvMFTz67vHgU2HpsJBuUicuGE5Zf15yW2TuNpzdVpdFU2i9A8YYn4",
  "key17": "4qCgNemvTp6JfBYzTXfLa9hSqqgGxJw1pkqzNV1AZUarz54efS2m62U4sRzPT54KaUSvTGrd8W9TZ7T6xYs3F1fC",
  "key18": "urbwcfUPMyCfB6MGC295BWH8KXnbubdLsQhEypD26Hz7cax8hJiJbUxTshbmHseGP3CTj8KEgDn4NE6knu52uk1",
  "key19": "2k5za7Q87wvtap9aV2Hxu1wGJb6nxS9d78uZxYmadLA2FwSf3P1RypTa1J5uxKUUYLxuUGpHf6jofFkb2hGPVqHF",
  "key20": "22fZKLVzKVfDuV3KnQhE3sGXqpwnhWpX6rEoEQHRdQCPnWSkF2sCy2Z1NsUuSVhFmf143dmFb3XuvAcLa2jCcpkt",
  "key21": "3m3WrXfafgHbW2B4TY2hmqtXFuxaGwT9RWsuBoEEMH4ErpZCJccB6Th54ht1jmQWUFjGuVWN6JhHE94utyeK4ZE",
  "key22": "2S1JNWSZmePz5NgbZudSq1MccTrW1tmPECFie5iuJDX9obkibTyfBg7CWAyuZAjsDYJiWefaGxMtYkrHd2Y75j62",
  "key23": "3qBBj3xwZ8gF5EkSyXxEAdHk1XPdmECSgDK3axUqmkcG2zbNBpnBseMZ6koKTFypvHom32hoqhqu8VVRkktsRtCU",
  "key24": "6UAGvCneohF2KMNtnhT5GdzNNsGei3U2gQJi9PHXjoAQorjogM97sxiupi3icYRqBh2KKUvH5KTJTXuseUVowHJ",
  "key25": "5ndzPXK8TJgLBMeCMoBR5CHn5mnuUk9F86jLEdg5Vd8NhkiXbxMKcALrwUmjvwFvY9JbHKjJjWdv5fEawwtMxMYA",
  "key26": "5qEbAckhzbfcQbbWmuCkhra5bzBjyYeyq2adjRexVWkez6jdVPGmqse9AQ38sp8rAn1fv7g6196YRHNqyWpd9w2y",
  "key27": "2cHSPzQoKUEniUwUvXaGbUEnUMA8xr26SmYsET87pLw9hyMcYbwqYrMPvjGAxJSKpnz9sevFioQnWuXttnfqqsuP",
  "key28": "5GKwEH6WiDmtP5PhrcUGn22LjutnLLsNdUXJzf4Md4y5Lk5hLa3C4pUGcUB32PAdXJ2ejmhxzJeeFSw6SdBT38SH",
  "key29": "58bymWmELwQpGS6zGmCkW1F7C9zJgp4Fp9JBiArATw75h2ZRwK9TcRvNzGdEoYh9EoPT1qeuHQZp7CKuove2wzsm",
  "key30": "37jqfDhQCmVfaBXcLprzrDRrZDrkBHxaGYgidofeJSQc1fhRohBvU6ND7biZebGDSqLT9SBJAknxA16wEC6QgMZX",
  "key31": "4Z7MTawBCwMJNq4sVn9ZXcLRVNvYSdFt83HaxUBHi1S5Qn1M4UpTnL2Bb1CNB5NCCwonRv5mbi3BxjEDdGkEn6Dt",
  "key32": "4cwnEXS93qauU8UQfKmeov5hroiwvbBJi1nxQjemf1TRcbL9WBxYJTPK9pMhUCVZJ21KRvcoZNSyxmzgqRuaP5qv",
  "key33": "4kjWDzAhqjcJ2hcsVYFvMoWMJrJ7rgtPJCqHe8ucf5phhTQ4VtDyVMYVSruS5tb8psG2uuLJ7mk5Cx4t6QMiLiWC",
  "key34": "4QvcTfqGWe9mCnUnWuDK8ErtPbGFpkxDyZjEwYtxzTRm7h2c8fSZLuqvhGUBkTRsSZVWJALYHCX96ZRPsCTCk7hQ",
  "key35": "4jZZEyWhddSYDFqoETGFBSULKGxSJXfrDYjh81xUqnngYCoPwow7kz8tmezbgg67p7Gy9hps2QhUkUom6GgNEymA",
  "key36": "5fV7Ly69tQWvTTFyt5dJfgmdxU4FW2j8AB3nPivVoZcwbd967rciETzWEy8Ds51gmdpPGMEcYuXYwGy5uc78mgaa",
  "key37": "PCGkBLbmacH9bmbEMutmBS311cTEFWZvCu8xBWyofQK9DpKrhWszAmseU7UtPhJCynnPufsDPut5ndaTZE9Xq7P",
  "key38": "3MmjfzuxtX9f3ojF6NyCRgomSWMvURoSgRjSjeS4Gx5Cnw13gJLNYtBBuVj78rBe8vA7274Db4RTw9G4cs379BPJ"
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

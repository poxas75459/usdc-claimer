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
    "27Z7PM4C7KUJt2mjtmA6CuAQeJ9ujfxjjmFqQU5cuNtYKEjBJkgRtLGvQqRktmo1xBnr8r84E3t25W3FZud9UgXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t7ZnowYSNK6wA2zHXZWCnNzGcGunic2J1eKJQA3Dd71TNDivqNByq5zVmLzLDuM21EcwT4FvEYxagzVhpvEgRnr",
  "key1": "3hKoGsud7Lyo9XDxN8b1BUxCr7FuTNeVB4g9xtAWNG4SEF6gwC812vmpNKnXYikjGdi4bT5PmsEE83Kx7tUJ6ksv",
  "key2": "5ooMNhHPhb4NGsEgSaaj8b2NHApwt1bfPr6DkMBqcGNDKxirKsdiVtsDjwpiEY1nQj8ZoiyKq9V3TRV8MzWx3XCG",
  "key3": "4THgaozdt7jqo4hbCa8Fr8QZcMSj7p8uHhrda98Jt1aDrFGZyBXxf5EZHoUJNhsCD2XGbHPHpXZEb13MjUqu5RpZ",
  "key4": "21jVCg4VjvTTt6SL8xHqXVQYbo598T7h2hLARa72L9vHRJ6N95q9wnExu3yadps6j6J3tRHWkphofx3aRwTfBP6S",
  "key5": "2kWScVxHjyJGDmYP2zg6uE1nGCJvMpoR8ztDEyu6bCtpASjefhZzdYPtekAnsY8Hxwz4Hihn8Tk7y59jF8di6PJy",
  "key6": "2UFs1ajSkGF8CgPnu6ipie6eotioAPvLnSuqUqYfM3cyG6jv6sFE45XpjVuReseswGUtpzmudVzL1xxVNzrL42Sk",
  "key7": "ASRvZjgRR7JrnsNwe4EG4WWpJcJWjkXfvphXX9RaprndJZ1eNoQySSUJ1T9mcVTWyXjAT43s3ZBGP5PRHkDjDDY",
  "key8": "4Lwf1aTEcpgRfYzEBNrvN8qDymwsGYh3qKGtR8xrMyfv5v4DnMgttsJTxC1ApqcLxApiWTxyC9fXWdq4HYizpkgw",
  "key9": "3T51KmwyaqmZsHRKj5RZ7KQJVovkTxHCH6uz5QyxMgPk6LbTg2d6SkkQxyQpCoU7fJhBXqnE3b13cGmPnvHDbRbR",
  "key10": "2frUn6iZs3Vuyaw2zPDZiZjknLjhPcxg7e9dkmDNeKe2TvtqfEdicExhnstNidsvaEcKmcd4UfEdfKSNhatxpWJW",
  "key11": "5fPvo7uQVUXpwVhf1NpKyYvY3XTPJcSLRaAfNp9eaF7b6V7gwn8De19Lho5mhVvXJ4CMTYRiAzedpicxkwraqbwG",
  "key12": "4cSax4kd1uizJuZ2ShxxdMGxpy7EemaFcqPEaDFrKKQezdy7cNPGXZ79rnw7pYEdLWUryGWAeodbz4Tj21gynTkV",
  "key13": "3erueSAPYFceq4JmEbHojUCtoBPS9R3GGb5NqJTeRvD1n6bcVh8EZ9T2Gc67g6SwRQnm1qRCVbp6eytohj5Kf5AM",
  "key14": "37eCVmZ4PpvnaWgcdtzXHbwBE5agEMesCMxWhtXkNfGwrmepFVP3tPiG9zufo6ifMVdYytiq1HYRUysQ6fjvoBi4",
  "key15": "545CsgSZm8c2pMcVZG4BU3m5VKJcJz7axG7a4QaHD52TPUXhuKd6TDCPXVQJnBXBD4pUiWD3pppkSKFYuR6Je3z8",
  "key16": "42VY9Wmim6v61pkDyt53y8LdtLBheWwb56Fay7xMc7jrewT8t1qGGbQxVKMAccT8zsmEjw8RYsoUbjmXeVT9CCeH",
  "key17": "3VHUCFJTv24sJjX9Vxbr5qWnsX32QjmdtkjMhAaBABpjf5tRs3e4CDsjqZz6TWsDWEHRx5i6upvSpo1JsYXhQuHb",
  "key18": "4n2KQPkUeNoLtxWFEzdt686Rk65o3ApcrBQeZtLK81NpUShH8ktFsEmkFePiNT7U6xgSR5fxLHbYaTdfEXJUrn19",
  "key19": "3ifyLai6qCuUrQqyq2DZAESvvZdoUfVRcX9rJcLfVGR5u42TzwnszE5hNBFKo6ANksCVw1geT2MfLeQLEiVeg6ZS",
  "key20": "4ofBA39D961vXmaYrquiCEfwkQN4PyJ4wPr4tUKiL4nxobZkk9XorxkvwKnetAbaRQ7PNzmZdvMBfJuAJyoQuMBa",
  "key21": "2jJ5fTjmcXC1jQNY7TTycRNPAwt728HhFSmTL2NboxpyiFFrSb2NXq2YB6oBwfRPFkck36aAkEHgh6pHsHrwdLzm",
  "key22": "4TTfzHH6XEpakbHMNoKWZsr4un6jvsofoeWFfBZmn2G2bvc5kp1unaUyMk6hwN3WoNePpTM5afzTB8p71Y1H8dqR",
  "key23": "4kG4sRVXnVpkxsXTUbsVFZzqoT6z4Eft6sexAen9QbhAjaonHoVt1yjaZP3q2jyeyyN1r8hxoPz3biEtsKPAAT1Y",
  "key24": "3bVLdc1stF6VkUVaXnnivRHbMUoZRPHQEom4pEuZNEZkqwBp3AtkoRu2E1b2d76eiGdkCBpQfNAMCwu3X94ZREh6",
  "key25": "2XHjjTy2gDFKgCpteQ5QxSodsC9onbB9xhuFWSPZCPWrFHmbfhJMHdKVy8okpUWKnPcSaip9fFXvxRC85X45waNL",
  "key26": "55rCRnB5LDqD3J6uGhn7gBQLpyXPytoLNhDZXcPKLb8ZpMw6aPefZakxgJjuZfK94VRjo5MpPgQ6jmiYgewvqtAD",
  "key27": "63izC4iKc6KS9gL4pQ6mHp8mzJbcbp8mVrYYbnARUsUddRSXrUAYez3cTB7DQc3oynKHBRM5auSzz6oSYxBfffdK",
  "key28": "3mQ1bLfJqaxj6ou48Jeh9F1WVaAyM8xT5Sksd8PVY6JwF4vjRyKHfeXNSqWR9bLCfR1kbKQkk9Xkamy9v5FiHYQp",
  "key29": "4srfYGZzjsbZZNn1gxtFbz47Cbq5Zd5ZbtARsVqrbPAn2Wa62yRbLtmT5q7i8YMBpPqFqAi5FGaPV1qgxRfwwXia",
  "key30": "5LBhAd7eVEy7gNP4J1uyjc7ypHC6yUDTCk9gyaYQdhJxWVjQ7xiLJ564V8ds11ybBZQmKwRMh7mKZBGtEQLgKPRW",
  "key31": "56Gbm3oi2PhW6LzAXky9ivUdReGGz3bRWvJ82fHspoVoYHHzmLp7chCRifDi2XT4YTdUCpzdzfq2PducCWrJQt6R"
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

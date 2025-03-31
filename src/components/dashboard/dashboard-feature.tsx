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
    "4eCMGkoGcnQQZ3HrXpQKoLMHArNX8mHVBZrf2br6n7hDTPPxPfnxBBx8wCNBj3jLuLFhbbrA8ZfaC5RnT6eZm325"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ddhgin11YoHP3ZDrYFWxgKA9vtK6CFp69BrVunrAfCm7u5Y5quXqRJSRFGsQEp2wgz7nCo229KZAh8h1qwatUGC",
  "key1": "3MvPmQuQpfcjmFE6xJJLSAhtZZEtKkVkd9KsjRdQXQvvEbf81i6CDTMGsR2782tEBchHqUpmy9d2WuGczJwt1rcJ",
  "key2": "4NgfVnqcuXfM9uRZg2XR6RuVvUFUqAMwfBxsLbusizzH1geFvJ5Dp46HMeGyfgDNGujWQdxgVjdkQpqPH2LG9ri8",
  "key3": "m1uH8DHBxAH9jHcPsf9Fzr7L8aXTm9TWhAxtnic8REDC22boYUwdRTqH8YcqC4ZzefuZqmmzExeEbDjhyKzUz5z",
  "key4": "3WVoJNJENU1VzSAFfVB6mfqSBrqGS1jHpcBfjf5GuYjuchUFh9mCbKFpBLQagjQX1gY3KkpD6Cmb1ZyFwrfbEYaq",
  "key5": "56SMHksE31kUoAA3jFEAtB4nZhRJifmeANGW4YhfG1opoWMaw7um6eBVVbKxepCrSPcy6mKvocttNTiqianJQGsk",
  "key6": "315bR4SNnL4UMKRsJnGwGBsCkWjgXMQhf83D2FTxwcxz66z1Rf7ykt4sDoJGDUP2UNcu3Q5PdFJwuHjK2jhjdh56",
  "key7": "31L9DXA68bFske18XbMVukBqopJFqu9iqFwDy1XWvpn1RLCgTEkDqDKK5xXPKkt96g9uHNGZLNRD6LSbJeSQaU3k",
  "key8": "3ikZ7Puqcp5DKSsk736KtjVSmnCHzbhpj3c57ZxdJVvFLmMRN9f7JKCuTtGYS5tPdR64oS8Z6mJ5mJEUuDTU8gk6",
  "key9": "3WZi1Egf1woMKPzCw6VQ7m7thKHUBngadBKdFiaaMaCzz8e1waobrmiPsMZQV6xinSRvcMuojMutMFYJz4TRRdHv",
  "key10": "mi8kWaVmxCVT5UZ2Zx6JcuiCEe8GBsv8GxntYEeat5TyZWv7Qy8PiZkJvJ7E3VyVUi66MBFgQgK72K6qkGXjF2X",
  "key11": "5uvyESSjYSfEt9Wi2aBkJK9ofGhwiFYV9HYFNaBBA5aJYLqDTZ1Q175QsBVGCAozsNgr5JXstMJY75KXah7AwEdg",
  "key12": "2kBgKwmbbFgo1JP7DnszbypyJTnRuKru89NvJGcwZHAMGkJm5atwWw2ZyNwp1WpT6gHijpsYhaLBrDmFisKaJ17a",
  "key13": "L2ujpWz4K2MmTtdQsdRrTmroXwikX8j6WfhiAH9DVLpRhuqYEe55DdaYLnhDLoGHYbmtU2jXmJS2jdmpAoDFpnQ",
  "key14": "3FgY4dLbhECwqFt3duu4qQEXw4MB9bVurvXrn8HD2a5bn6fHfoKpNBkNdQfCVzZseqTpQ7NAWcc6yLUYMHSy2gas",
  "key15": "656zmRvK4GAz4SozgqxfwLmybavfLPfKBz9Xk8dWn1Awvt211JJrLatKDbAFHNpmXtyYcA7hH3xHEuLd5z8x4SeY",
  "key16": "3totuDMtGgso4VtUgxdvEf7DtPbzJWQhgchcdgiW5xZGa9Tz6K71WJ3fT4HVdgBZ85dFa13Mz1TJoNUMuM8ZTEQr",
  "key17": "4TGEdPBC8KU3WbAKkg83EqCFwKn689Lt1Z9jfrnDAZNmbRMh4po1aEfFPkrGBDZntwuTfDkEYHdxogGui4QYqmUF",
  "key18": "4RPewLgo8CBiJZuVnodpoRz8PJcVm5je7Uy8YJZnu8QRZxTcyUDh1p2E5DsRDn46te5B98FyQ8HKZA3xiyUQjfSq",
  "key19": "2oqC32x6Kez9xDy4uTgSc7G3uHSEr5Ri8VuqcAgKLP962yNU3bcP4KP3eTRWmqYgPkdEmLvcgExXZdMKnaXoy4So",
  "key20": "56ZA8e31hPBYroVo6Khu1V5PsuouP6C7e8yesxRoHW2YoZiVtBRP9igTqWbjf2LrZ5Si4Spyzxg2kFx1E1TR4GFx",
  "key21": "4TmapqykCnXR3iXYqdq2tHFnvCPR33ALQYKntN3U9N4oGqN3Ck5z5grx3FwBouTCNJgeMfCdvMe2dnYMwgZ9ougm",
  "key22": "pr9LqwyhLhsjJfcHoECPUQXA78Sjg6gZYq4UWQarveVZheXhDvg8vmj1znP9UgYkx3QqGWuovpKUfkfJrtT9MCD",
  "key23": "LBzDSNFFxQo3XZ7otSWSSbLKJWUSrYyi5muSQvzkwGuLvB89rxRUuZNHcn9C5Zc3Uyv2B9CjMdu3pR9JE59b1De",
  "key24": "3KRuS3aPF5hXsLS7g4mNLnfeyDzsPNSzwnbD9PVbrhTvGoy1fmoU7vuhjiej36dsY9a2YuaR3YyPfq7eNNqo3oN9"
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

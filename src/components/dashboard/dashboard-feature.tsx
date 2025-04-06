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
    "5YjLkoyEA3f4vJWj3iArXGj2SjBDUvAkSTf6Px4YKi2QhwhrbiK4FmckQYdH6eK6Ao9MgY62dj632gWTEqaDEKFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnTfTGDAp6kfWtaeYgJioPrd1eBMc7AvwZvrRTNb9AnP6RsEVzd2Uu3ZFdBgHKjsVKtwV2c4B4915QV8o3nbX8Y",
  "key1": "294MsiahPdXcFfJRx4t68ZvdWQ6u4GTzL7i1KCA8vhTn5KFftLNZ3Hz66qhRiL6UMnKa6kojKMYXF3G5qaKnnjfX",
  "key2": "2itPk98et8C3hj4YA6Q6UnFXHr4MVFAMJj2dPh8NSgN3Kb6GPxZ5x2bDW1oUJT7n8qL16ndJYDfD75Xm5zr1jZCY",
  "key3": "xauFqhXV1pQgsWHdEejAeQXcFBN8iryu5VqEAejGkGr9YKCD1BGijWZv6b6ymxRmnof9Be3L5TqgXTtzCPgeEqs",
  "key4": "2Bm9bwtfMLkvfaLj1ADq8QwhHXwhanbk8DcdgzimyaDYw6rYWxphwbjXN4Rtn218116S5pUpcZSnCpH4kb3w441R",
  "key5": "2Y1SSfq8p2oK4MYzTFaixLS18kiGshb8X3bGNj1ujpnx2P4ZK3uNAmytYvYRyhk1CL6shJTrX9rE2EPYzBQ1Njhe",
  "key6": "2GW4zkaB3mCFqQnv3RjFXPbt5hgg93EpDbdg79CNDRfx4eyuvHAGoB2tanaQvDKzQLUyKHcnxciKnxxnZV1TGnyJ",
  "key7": "43Xe9jxX7sJgdg8uRMB6T9Hjdap992EH51AaAbvezY9yhFa3PLJG8wZHdQGQvfk9mkmPx46RTSc3pxpaRe8JFyoG",
  "key8": "4GHoKUtLRSV9nV95Y8YYAoPnXdGdXsVRyeVXHxG9nQm6nwvsf8TsoZ6okk1RiuxgePGjV56Y4GEakujcGiJp3eS9",
  "key9": "Uh3o5MH83J2kwn9X751tdRTYEdTbLQbtVo4nT3iUQomyT1sJReWL9rjxWkTe4GtDiE8bQPhC7x3A5hij7GGSc29",
  "key10": "5fan47wdm9BMDB7tuwuL9BiQDVFthV27A2qfqLv7WxZi2N5ww6k5APw3d9ZqCAtmh9eQCjQjhWZiagyoSUBhebUd",
  "key11": "65hzrBE98sbPdGn8tWdEfrXYEG5wwPRiq256YQVgwSkyW7pSVCSK8ZeYqvgT94g3xCsLKzPbzzBmpb9pmi1bSjJb",
  "key12": "KdypKdni3br6aBeJNWVes7zLQLSsAc1iFKZAx59xBjrH2af1zPkVzZ9HufrkGEB67XCfM7k2UPrqvKQZDK1ZrJ2",
  "key13": "wFqGADUwdKWtuPqU7CZoRiYfkwF98ZJuW3HN7Xttg7Mr2SUC29GC7f6PyxoMXKs3dxMy2aoTMCUfwRCR12ShSve",
  "key14": "6vUEkhUReUkUUr41TGBsX3p55kKfdZk3jSf6KH9A2PbqgMS8diZrSrJGj8ULrM66GJuDSnxS4SsrVDkUfDjyq7M",
  "key15": "QVCkmECvPpQhCEn6WPee1PRNpY25MqQ8VWPa2EVTURZqF1fXvUxSYqugobemXBuCgnCi5CJxqaDr6zgKuAVB5ZR",
  "key16": "5X9VzsymmFatvGQfkEiGjupRNvJc8HjhggLRHkCdzwuFcqvydy1eSN2JLD5g6JhV8kEKbNHtrwr4CdfnAruKi2Ja",
  "key17": "2GnnW13Q7NbpvN5ME67nNFuKGZqopnqcKj3XJX822m3NTuJdbRdpwBX84iMy7cALmswrrZfVrAF6nJn7U8hWHfxs",
  "key18": "4q7qMATmhbFbND4UMS8q23ygA8UmKAzZQfYSuaQHi67Pxz8w3aXQ18Yqfd4yFmMXxKLbb51ymChFKeRjaFqTmwx9",
  "key19": "3cRUdfVM5pViUXT9iAB6vJQ1NZ6QWF7HL4SYMUvQb741PKguNAkiR7w7HQ1DRw4F3ya83NpzjxegEHfLgVude1VL",
  "key20": "4CDApBuai63ugSktebxQ33wjjmu2Fpbs4cANukbVPWf3gXK6GDNBgtEAXQgeknHfzq3LT2MJh29mMc2E2xHjJhHF",
  "key21": "4WdKHCP65NDNavdwVUDDME8C7A11dQxbPq3txK25WSuQdCkZzAWCzX3xwq44RG7KAnhMwcx7TUgtqXzcBusg46HH",
  "key22": "2pzMrPQgZfJsTeprMBqzHMmtq4sGwnXTfaGdF3mNtL4M3RpsJP7XcRLWAzezZeY4dJ5CpeDAVWe4YwG8VXbiZD9F",
  "key23": "2GCDG1AgRvUAeZBxjQwwcp3A9cqLu3qtqGXWc7zWqP52PKzuvqXL1s4v3tNN3S5PH6NzLxDtrGs4yZySYkvL6kWF",
  "key24": "2h9PTpGp1rKMW26Z1cMn3mX7Lr8NvDqj9hEfywNARFDLuhkcsrR2yKCdiwF2KVKkKMuhndqbrMcYBvsZBqJ6cLvF",
  "key25": "5Xn3ngL4p5XArth6h55PozUbHfgpQdhjLRn6qK3LyUWv7JiEr975P9w5jkMg52rsn8o5GMxXyaHLE2W6nPirUCxN",
  "key26": "3oDBTNQk7rx8uqw7uZt9eLVSPzjvAg4ztJjLykDejYhy4eAWwJPyN1wDYSCSLPYuhSCfcQvJRJkLH2GJNxwDSN5o",
  "key27": "4ub4nBEpAF7YuEZgGGUdK2RfCD61jy7ZqXQHiCotejSEHhqn1na7G4kcacURAG7qpKF1MG2nevFsgYd1qycSV3Gt",
  "key28": "5y3x5JtCeVKcsmgaFaBz3236Pwn2LrDGVH1Kxs4MfVzwEx9EPWH8PzVs3eNZoQN1HbgCEmLcWyw1WM7dt9uZeECz",
  "key29": "nChTKEB3f4pZsZzZu5KAGjuaHzakg8WzLtaVKnr33r4mLtX1XnRgX8DQyo4U1GhWa36pK96PWHEqkqTpgoZpJkF",
  "key30": "4PwjvRccjk59MnjDqWsbrd9f2qJpxGnVSgJz8Fn5MVzM4GTYnNwXSuLU3Y1G7XyH5PtFraQAqXkA8X38TcbxKGfB",
  "key31": "3gamFgUgTVeNygpdw8LdAkgyVETwZtKqWm6GGA3tMYe8JKvQiK2SQcNRTmHHkCWrkhEoKkr6SF3HDcQX5yvvxNGG",
  "key32": "52fR3ecAuRBDYyPpm3dg7hpLJgMBT4W3J6Gyb2P6uKTL5kUR5s8F4dGJ18izTJaqX2RV5bkzKzD21frzDiwbgGG1",
  "key33": "yhcyi6qu7Azd2cFwkLWFYKAiKqx3RBs2zfB5fxFrYgkspLScz74R8nSMBJJgdcUbpyTW9VQa5DPQiG2hcN57baJ",
  "key34": "2B14ohfpxCFwxMG9nfGDqGpkhrTjuSAn9yTeah4Sfs5MbUAp92eokBtci834Boe9WfWCVVxmpho1s2Hydvn9dghT"
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

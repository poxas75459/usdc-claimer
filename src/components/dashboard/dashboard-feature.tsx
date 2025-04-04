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
    "FJMCo4NL7RNDhi1to7FBseyUe2rs69Hhh2eUgU8B5tAQrKgPBDgZTDieveMF3i7f6dPKWb9MqiZVjMNAGCky61q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCBvAPemNymAVkUVAEWWo7WPNcLndABWdMrYHqDbox81EAKG4vPCYAdKMYDFv7vD4dChdB5QkP6mo1n4rZXppHA",
  "key1": "3U9a9oDErf2oQSF1DTe8q6oMomxSnHq1Q71ZRBhN7jzGJR2U4VHaaQ6moi1erH8mLfmbPJo3KjRmuucRC6F4zCGV",
  "key2": "4vZrkvWfXG6wN5zEgNoCg46e6h4qCBTzX8xTWxd43GfRDBiYuYKFDjaGuY2rY6YVxii9m9YAEC2PerbXdEDbDi4g",
  "key3": "2U3MEscHrX5yZ8BkzgyWVmzybNopVeyPhQfE2M9ocXCLCouFiEm3EKx7TtrFMesMLPmnTQL8iigzggcPTgnT851Q",
  "key4": "5iCh5HmY2fmKphZhoZAhYUhaKAS5DUQLfopppzHTNLXR55hPHnh8Am3s5Bdioq5XxoZjy2FcR7BNJoyfFw8BgSUu",
  "key5": "3GGGKCKSa5WDGno9iekqoPjdX2v47qqAFv8QAzGkRqdgbZwKwbQ1p5XbY3zbhRq5Ky4N2dKWV5stvzssoyDy3BkK",
  "key6": "xAyATihxe4uWLrE7REvdqDz5BMPQ7KqxRdMcQN5nC7f3TfFpNPKHUeonn3hLUzdSiEVwjS6caoJFbVxiphEdQKd",
  "key7": "4ZoAmsj3snkFVfHwwmSrzpY4JXDjrTLZ24orLj1Q54Ac5ih1L8AezZ1k9qN57PSAqETQxvyjMh29fwfqGDtK1eGx",
  "key8": "259bQ2Z7NZgPrR7QntXik4xUTqN5F8rGjuFwKrwL7W8j7BeHjjoww5EQsnnw7oboALoS6vXNHAuXuPSGHHp1m3T7",
  "key9": "4e4vVKVcpg8QxZ2QrRA9uoruMLbTVmR7BCobM5akaR7rLzjPc3oxM22bLCKjkzFEaEnB6bh2h5n3Cby8E6B5qPFq",
  "key10": "4MSh8FRqudRHCWMhfPLJZnQcAKmgwq8aWLEBebPegEsjxjs1aySPhUfxCGDZaDsrJLU7Jf4nXx5r416sxVW6un5F",
  "key11": "64QBgQQkhsZpnuZwyVnkY6VrfMWEC4xqRtiu71xXzhTTD5myDAfNWNo8gijwAaYK7QqMtQBf3SzZY3EvdqeRD9bz",
  "key12": "3aQeDDG1pCw2gQ7tdvMMVbG9HJnNiQqjB748wY4CKcHprjTTqPdVV8N18ensdMZgPzp2cuy8TsuqvmFU7T32FNm4",
  "key13": "2shqDdg4GLrCmJuaQmN7ZHzNwBxxU9moszNTLKYNzMWjKTiwSho5EF4irkG93rKhTuew3ndvHxw98ahz8zQBukHW",
  "key14": "5cwc9N6FcEXY6F3pe86kBahX4SQPeDMddLibuDodnJydPkVWhvMAZCqRNnZQ6bhRUutdNfLPc6GKzMoVPwpaPCBo",
  "key15": "66t4CwfRBKJB9gZXzc5h9cGu2esewtjWjqst1Fe7MZwm6i2f45qkeaGHmXKX5fv8tuvGy3J71HAJDokPAMo4k5fD",
  "key16": "2YZbV538QaYgJsGmk7Q7oBFkiJgFgshv5i4TejFXNDFsnbgT2KbZXHech7NPz3P2Fd2KZEGHEYeeo8oVhKGdwcad",
  "key17": "rDwt66EosypjXASr7XL6xNcGwt1UpkQ6y2FJxWKyuLUVqaKtByKgvJFs21SGan4Q483egz9bSXaVQBUSeX85yCi",
  "key18": "6ksc8chh1JaoH3ZyaACodE8RNrHv2ngjSyeQWEFdXPYuxX2AFrsVUjPf5wDnMHAeiyS2k85UfG7ZnPyzk56jLHo",
  "key19": "4hB4ArfVf4ZJkaGfRCVasspVXyRiSrcBDBCYeAy3wj6fMAfs8ahLHFd1PGFWocomzk284jaC3tojYeib7yPX9jkv",
  "key20": "2858NDPnjWBM5zz7p4YBcGdcxtycDtGoinrmkWxjDr3FdgkwtJu9sj7UVjeR6qk2AsEWzNgdZmprPBes7rissYKu",
  "key21": "3x3uqzqixVhxEGPBZZzTCE6Ku6UYsC5dyqskCFoQghEKntVxa8V2R3BicfdZhHuDzcyPKUUEDBnX1cXJuTZf92AA",
  "key22": "XqXWqVF41BfAnN7NXAV3iNeSMb9PjPWFWk6xL4E9RuD3a6qA6ex7dauusx7i3pQwdUvnbjcAchV7k1EdePqJ4pC",
  "key23": "2SBqZNV8uXgGzSPwufg4qCS5vVRjR89icQYKxgGfthzqAYc7LdZbFhUm3Dm5fjFhP5osR45otkLkk149krZbc949",
  "key24": "5X4zkykA8rZ7FFtC78E66DbMFtc45jJV1KzuVVPmAZuFCcyZwnijS6xuVbDMWq5YkedHNSqmXzi7pZyBupwNh2h",
  "key25": "2ytCthLM4TB71W6dRA9qFGprJCLGkVV8Lq1cPkckzPAR9jk2hNcdi52Lg9D3QMwaHoDQnX589NScxKJJHzcks5f5",
  "key26": "2u669FSEwitpNgYS1uWibmenevTjz1LJiuEFPh3EK4qS8EjXEsX13hKmVL6yLxEhrRPqGKAdzBSFPENzqaSsbt1N",
  "key27": "4Mq3ypnoZiq2Sqf6euusTyPs16z43t8nboegLB9CqM3jn7YTkDSXaPPxwxBUzyquXahikX5FMZuTdp3eczakQ3YD",
  "key28": "2R3ug4z2PW6emk7Lb6RyWV5zx8ia7fkfa5VwsPJB5o7WJnm8XsV4H4yzFMVMx62L2ux7EzcWnPZ3rBEK4LBZrr6S",
  "key29": "27JPFyF2jocB1cmusvREauLCjrcwYiv5GXm42nE5oSS3YTzKnj8ZaVEQC8mQb8dYB6guqfwybrZgZgdDveHswfpv",
  "key30": "5dWoS8Xt2ZUxoDYRPUJBgNEdGPjKanbSsuAnadsMubpLjfYH3G6eogBcFnFZzrTJDk2Eij8gjorqvGfvdBgkqhKo",
  "key31": "5cx4UvRf9AxetFWTd2AsU2SdzyK3HboiHZnTvUu1CRReD2hB5Fhj8aRoTUFctPG1j6FpUJ418pdUXzRD1MVSFp3Q",
  "key32": "FupEKy5LaVeAA8t6TJqDUAFg4Zc65DVWf7TbjcRxYZQ2e3aQa9t4P2cgNEAbPyYNvULaQB4RT2D8H5SC5fRcBHf"
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

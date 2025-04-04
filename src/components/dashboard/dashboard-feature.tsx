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
    "4o8ZsR3aovRTBYyhtk5w4CntDD1k9VNZcvpSDAcNgoDpn5gH3eSsT5RptsBU5cTK2MnLkm2aJ9nEWTe8EHZD4ngM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iBSD6CfGGeXvj6PBhmB4CGyGmpEQ4M3fpvrVmWDYWymSBuzQb6x38pZzMnZDa5Mm2SnZbYsRhQsiPe8n1TxGMR",
  "key1": "5sEbfbHKbPWGcD2zGTfkJMMVwkyzxAduVPEwWUQKSZvGsBjJuR2nF8oByMrpq2VuNqf6nSagFaBYA4aHRdNr5PAV",
  "key2": "5go3kFD8W1VVb5SZcVCFsqRpx4DLvNW3Ft7SGzR3U5NTvK6Lzz7CZrWu8Sje72AECPaqPZxWjhWYeYhoVXrhEfxK",
  "key3": "3hDMsxczT7Hb7Be6zPHHYsZtoxwbd82DjhiUqMPwhyLpdpT9rHnXF6uxGXF47eDyVHoTFX6qo1yD7MDAkF9x99Ja",
  "key4": "VPCK6S6ywPVpmfaH5Hw2b9boVmxThoFHcWgQGwZuUkNBsEqWZHZbbsHM7REwwvR5SjAg6c1wGwdFaLmUjqEYEuc",
  "key5": "39kucvQYjhfdTL69oH3SEH1jk4Mjy76cQJBxnzcbgZaznweGe3vFMLxoARiaGgzH63aQ6Mg3Et4gLZ97SQDZQTSg",
  "key6": "4J2TkhwrhkzKjUFY9fxmDq5LCaUqWQSLgrnHNBmvbckn61bvL5PZhQ8G2FqvHPuri1QkgCWHWar4PwngHsBb8tN4",
  "key7": "2NCbtf7WHTqJ2wgKkryKJwf5JKKpZzjzy85gPhoymVew6xJfL2hj18JZyzLH3HM94ih4ZtUD5G5BRBKS9pDQU8vX",
  "key8": "2a5pAbCrgAbdPryXSodvry2QPVPcYCxz5vikChai3x6YxAzbYDjkyQ3WsbGBfncmVeuCKP3EiamydGN8dLSP29wL",
  "key9": "2qKBFunNmmzFb855NxQmgqsts5yVZ8giBiEy45qTR4njx3mb2g9eA1sNUuMSPJBAmNi8zxjoDcmTCZfA2jK4CLrU",
  "key10": "4YFZtJND3pQVoC13rAVdfRZk38aG8xgwSukeYS6VPzn8RvZKCz7JTQ6HsqZcpv4TC7kpot3qf156NwRHpBhiDtzR",
  "key11": "BfGGFMm8oWF4smCBE4PUW1b3RxuZ3XbAYAKJJu6ZDNKFuGEj1AS3YypsYN2maLvkaXi3zxrL4HBPitJyN9w7TH8",
  "key12": "3vsJz7SYguiFKL9dGNK5wXVp49jCqmAxUq2Tzc4qv4xV6fyHj1SFS8oCM4mZMARreWV33oqjHckxVhh264BEVBZV",
  "key13": "66AABYfWbzx9o7GaH1AQs84KiMwx9nYCdXbJRPdHkGmxBt8qeSQ11w3BUqEPwjp5T9wWs1FbfdGyqfWxbbFcQhfR",
  "key14": "2koHhJRki2NwiDBmfSCfKGLRAqghWTNV5Bzd8GNswtkBRfwyMJkMvrSwZxon8BVCD37H4fn7BG5EFkfFAdxVqeY9",
  "key15": "2iKifDFUUAX1vnSZGja23BicUYetq44rYo74bZ1nJkoJs7pKqfkX3dHYUkibdj1UVkTBEbNVNwSG42Mr8QxR36ct",
  "key16": "3aX9dEjvQMUmPDMJXvR1q7RUPafpna5LuvhrT8aD4gEBWwrDmn9x7K24gGVXqtNikrF8Lrshy9mxfdFjcGHALPdA",
  "key17": "4BkmwEwY7pwWeC7SDg7vU27QoPZjdm34Qdtby8mSZS3ePXYnKLgab5bbCXqzdG24URehuVV2LvheeX7nHdMp5dob",
  "key18": "5WmT1pKzePZ2zQBJGPaR6n3MJEQ7StT5jm7bUTaafus1xAFdxYQXGSGy9X4W8bULyVWVKPqVDzC9ujCukAcGexJ3",
  "key19": "4nPhCUJ8iLfC1H1WP6VL7pUJLnQCxsRQMw2QA4NYVBXXYZZyFxAjEGhwpePBQ4wb3qsQ7n7uv42JrdmowC7AkkrB",
  "key20": "3L4fx9eYzrvwji97URVVDnKNWYP3LKWRQSHJys2fZ7RtDLVusWoMqPsuSu8Y5GjWrY4rtaxHTsPo41onxyC9jB93",
  "key21": "2gZ31j9KhPxXv9j41kPNLoifmBabznjK7pXGcq21kxrTDFcHnK1sTFQoLpNhpbLR97zCwZyb3XJFJnrfbZjHvveK",
  "key22": "FKvHJ4qbE2tuemnxyKa42xD8LAheRKNzNcnFWPfENf8wYH1hsWF5Q8PyDx8foA48eij1dQtrxu62bWwXv6gPKRL",
  "key23": "5mmbpGo5wB5f2bd1gThM19KgSCm6rptT97kgxXujHg4zwKjy3KXCh75VG1NyB1YDyWMRJHLeDW18EwjYJTLFjo1K",
  "key24": "2qd7vQiDUaPeDUhYKQNTHPDZMAKo9Pc6JDNS86vRvS8QnwyUc4dhSFxcrY4KtfbWCMELjxMZMkJhWw8PnXE2Acib",
  "key25": "123qndYvVJssCdq2yrSouRbDFgJNU37yrYGzcXM4r6NfKNBALZbJsaG9dPoHg9kJ6S9mTv7FdSG5cettojU8Vkex",
  "key26": "5UpKt8w6MDAytcTKVbJy7t2qaymxHEnPJc2BEoqfacZ3Lr7sWAf3hRnRwvLh1eQ7whbug87dbeh93QqMD4yHK9Sh",
  "key27": "s14gz6eo7g13fLVyGuuR9hVqMTPXMy21cMjudY9F5ZkDoLcYGF66E3tmFmvuEXjqwXgUMrFa4tNcppxx5z6r71L",
  "key28": "3ygkXQ7KLei2411Rg6zA2sh7U5efwJAgB8pSNoSHyibEErzGkM2XrPsb7QLNnkuAeuEgu7GUX5LmYWck5Eg2Kx54",
  "key29": "4fvD5TsjtqTByTywp8QUJt7753ig7bfQ4nVnRpeRSDqtJ7X4fWNbNt6gpV9CM1Zqe44CpFJ2tGfjK28MgEn1ScXj",
  "key30": "qQXXu3cf5ogg2fsAFChvRXtqLxsAs3V9NLdD7sjJFff25xVnVvtDkkh1yGxjyHdqdDouQbr2Ujovcp3u5ARuyF3",
  "key31": "5SoyJ1BqgSStAdqzJPy7PBAHL1N7HyXVT6vBPXmTgyALZYpoFjHshhxUeBvxEi6wZBZtZxw81jxgVTYRqWeBHaYe",
  "key32": "58kcTJc8XrqYrtGvsLfhQA2UZgQFzT9JfSwGbPHZyD7cX58WK4UAdfanQkCY3cQT1JZZmNryPiHJxSgq6aGs6iZy",
  "key33": "4HBjjcDdTi1H2TBpf47FhRJT9AcQ7pNty9UQUp6Cb65R9L4eXeMsgFTbHT6Mt4dhqVsRjduxWTdEDiKQbzopU4JN",
  "key34": "2DYTAvQPKxy6AVCczGNsGXbqSzuGCKsQ69jM9Kj41QJ9aCprNozzAgtALxd4UstMrrKGp31Ldkf2dtcLdFqkB4MK",
  "key35": "2TW7U3mBEjasK6mACCNoQrDHw87rJ2cNtTyvrHY6G5hEASDkgsZaQ5dSKWs5dFBbfUQDwDsmXVWjkHmqf8yBnhsV",
  "key36": "4FfzkiVRB7v7jH5rt2NgT46zYkwYKPNsAVDPXdapFUgD6Uk8ckRZheGqAzdPgxcr4Z7KqUMEBLmVn4XuJJoNZNy5",
  "key37": "2mfz2vLtoD4BbxGhAcAAp8W5drtuLFQzPQAARiRno5EhhNbqWDzkS2fq7BGDyKXi1ojsW2FeqpB4tCVHNPLpGbXa",
  "key38": "5jxKjZ3csAvAQQoBf6g9qMbbR9BZuynixxjYcfG7HKLwfgSjjsZq6q5C7TjTz6wwMxYm3Z1YVYDrwfDweKkJjbQx",
  "key39": "5vxmnh7kQ4FtTCXhUfhJQW8C9L1NUo19njSW5TXq6Zf3ZYwswz7uJF4J23XE8wpv5EKKqkwZDHkSVgULxUi1U33w",
  "key40": "5PwWYVHGnCKBn1MqJKkHUWvRF67aR8RGiyJCXaQWD4owsg3b8gWRRw1Gt895avhLrKpyyK7EEfNN1u52dVUFeZ8",
  "key41": "2kB6fxrr3iQ3iQv32xnqpxqGNYEh2bZ8RHhq4ggSKXykDCb5mAiLqkAj2Y2du4epkFukagMys6QhxB8LNiJYoFPN",
  "key42": "WCj1xwwDVxy7yethYWvYwkLqb88DWncqyZy6piKQTViNif9S2ae96Qrv149xyCnrAGjVpp1B3hwfTMZcMBVm4YX",
  "key43": "4aiM9viSzRDxw9uMYoKJvfcycAUZfWiY9t8k3wshhttrftJaJ1f5M9NtpCPFx4gKEqjuqLZ7ukvh9dUY93fFiTLE",
  "key44": "67Kqn1ofwzqoVWmPQYCnHs65G3FC3APcrBX8gUmcEgaPojwCLeK2aBXdYvGQ3xMmH7Cm4YJ1Q2XqPxzBGCyAzAUC",
  "key45": "2WqG3NnDf1AxAv7G6eZkuf3vkiu2oSYuxfc77xpZWZbFfua9AKnU7k5RqPycRWjbVuRSdzFnWDK1pHpaF9C7tvFQ",
  "key46": "2zzgmoTaem83cq8UbowpDhct22HeBTCBup5NZZHD2RqDXTpdfJsHuAKLrgkUwPhKBXZ12ys7Enc6mwnyMtzueGRn"
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

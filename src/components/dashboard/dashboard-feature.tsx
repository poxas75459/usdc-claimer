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
    "X2KDLbftWSLpomZrmkYqc2bKFYn5n7mWEwqfFSdyRZXkSETWWsi6mY8Y8K4jPK75JFQuyZpVTcSzcv5sLHXvNrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9keyRCJaizx5QQpEWqqmfDYXtRu8qGkZ5rx2dCynwpsEjN6dLPACGHjGf3mXZJzbTjiEkgYVQQebzFeLypGW2V",
  "key1": "3W6FLAJEk24kY6N4r23Rk5KHX43CuDmJS76LscQjmC4AsxRWw7wTMXMzUAjYKyeB2c6RiBGACwKnddSTvUq59xPm",
  "key2": "53oWQSiMSYLbkWNZusBPQvJ2DAB95JpejfZVbMmQHwasE6RcAZSMvd7N3WeUKRwwKZr6xxS9r5jJzvZdhm4ehgXF",
  "key3": "4NpPZ1yxtsvSdP3ZXSSg7k2g1GDecsBEHoSLXW9kCc2ve7SA8TEFxEwsgbXexNEFDPmsdtP5182qk4JPeEfyDppv",
  "key4": "PWFwV5WZdDP2hF89pjfnq6aSfdveWybnyyTL63KWrs8T8jed8EU3DBtVk1JVLHL6dTs1KEZurzjAbKYVJnH7QcM",
  "key5": "2PahGztBMJXN7xpdiwejG7zjd2tMQXb1C11Q6WKeDNj7Bvne3f7YVEZz3LYa9QMDsAXwPkQBXicBMTSioKkVsAS",
  "key6": "3E4VwDbBg2mKXdS7XYvh2FYqqm13FX58eg5eE71wxbpdYh8HJpgTC9WUHHDPT12R1QbT9mmr4bb4Etf1QCGhTQRY",
  "key7": "3d6hrkGyELkcA2zG9yauNjtHvUxZvqzhAfaFgSgeF7CVzAzLXLiVAB8LCe5WWjTQNAzNEBmgPoAGtVcXSjtFhypM",
  "key8": "5SgVqBhePUQfCprvXWDKzbyp1uZYm9v35wa25ZFaQFQaCLRMQ7T9XDcdfnGvq738ik6Y7Tv92u5aY1UyrKiLSu6i",
  "key9": "2wwm5xLeshQaCBACtuxT932C8y8tzwKXy5uDQToZHDX3oHzxnJe6vzug1bJ8aSFVt27j1eigvaJVQrtTmareHJaL",
  "key10": "5Gh4es4VCpheNNEym23ByyJZrkQF3cZhkjdA8VXYBJuEYB6E47HDVuX3A3Hzv9CSXyk1h3uPwGtD9nfHxuvp4dfR",
  "key11": "62WZJoCHLmA8ZBbzfVCbJ6BSGYnysHNEjh2UqbK2bGiY5BLXAuJezWk8dMdCvk4FLPDSTHozDYCzUxXyqVnBvfbg",
  "key12": "4P2wwALVnaidzHkjeYonvJVRGjLLJvWZT4DoKEfdBUKt688AV7uetyyk597Eg25cYgdA7sATFWp5VanKYbLRaiq8",
  "key13": "R4UXuAurMDhiD4cG123vgKqXeBbcU6EK5NHgmyajzi82C5HzUWLmWa9fUphVFfTgA53g5GcWMFV6ZMteB2G5pWW",
  "key14": "24LreRktXVCUY7NxH3MSxxBUsiaw2cuXWLTGHFPAsF7pDnFf3Stapb5oMpaARsXcsD18ZNhnEESyGMomdHoEKJP9",
  "key15": "23hsMPSLkrB2AGiz7LHcGDsZysYJTHcUg8yiofPDKqmbmHCW5GLxCzminGX4f4eocR1K7KzZ2ShxhZjugcQgT4Fe",
  "key16": "T2kjZVYo3An457JjqwJMA8xdBoyXup6Ln5AodTRBWDV95ZM265B6y6fhcfSqBftVo8DdDgzz8VsuYUNKLKDW8G3",
  "key17": "3ntCkYo4bLZESwUNQrsdEfiKKoDezAamL92oLxUtVnD2fSKp3uXyzxdvi5X1gcAuuCFkTNurGsfT9gsUUByLRqt6",
  "key18": "4Zxv2x4XE9Ai65zNoZKDwTjA9epaKjCFFpyD3fHrgiDYPf8Z8sS8rLjprMchup5EtUY5FQrCTLhyuh7f9RBZLkoV",
  "key19": "2s2XkWYyky44jH2pjZUfvtQ4Sogqp9dbgrSFfFCxcQ2ms94jLGKrL2kTfbNyhC9bkNuQj6wGkFQodG6TG4iHJ6H1",
  "key20": "4NZrmknD3mKWHGENgGUECXKVrAxzdbqJMDd1ywEMCnAE3BKhC35ACxorxnjLPe3gTdcA9hZgi3LnjYfPzUyBM6Mu",
  "key21": "5d5YdYDhHeuVVBtEi6g3art3XaLvFDMBhNRNExaPR2PDmWBnf2TYLRTNdXzstYXf9wz5RHfGf2TUKQiXmJ24AzRu",
  "key22": "2vysx4NYJPFoWYuUfQx2LmbictehSHQCQiQFH7kWpxQrwo3cZLj1gGvUuhiG7D2sXptJurfRioJAYLfsqM6FGBj",
  "key23": "5xBqnDc8DpYxNUtQ4vLVrzHUwnBK2hiCga11rKsZmbLQc7DvbvHBwJ2E2WGH6dTYmbo8S86rLWafHzrxFVmSM4XR",
  "key24": "b3ptacjdvuyRpoVms6Dpi1jBCo5V8VuqpQDRCh9hmMr7nEXXy9U8kn3sihBAbLT7d1g9vbFK4vvsC5rsfeTPTju",
  "key25": "2nEsKHsAyjn1bLWTvmJhjRTLCmodDZWF2J9MqpdeozG2UmkYqTeuRRHsHQ7n48EHKt7YeN1XM5Px4Up4SPf15Ldz",
  "key26": "4z9DMosTkqDgXWiDo8UjBcFhFoovRrb39e8Fsf8ZzHE1EyhDyHbpk7g9GHiQmWRMZZQUjeR4Z6gKMKtmfDjdq4ot",
  "key27": "2PNpA88sGSoaj3bMhrm9tWRixpAPuRbk6vhXV7EWVKJbpx6uA5HcLzykeguSrGsPMgWk3UhpQehP2hBUL4QhAYgi",
  "key28": "3bEjxq1yeDEUstWiPibKjWGHbyeTuZWapmSzNYjMv2W6TqoVQZieAxBCGaf2iF2rj92FxgT2e5RJivbr1TewvbJG",
  "key29": "5SUsnuqvNyzC6Mvr2cz8SqDqUGfGB7fdzkwUifA1FAmZy9iqp2KzqGNJ4vizakMi4vetxVjYXXHu7dtShQbsCNSY",
  "key30": "285vxwqDxb7r63nyjrHbM5enDfZTskL3V7MjCkmHn3VxfEHeKGJZo2qwjtHdGNw7CMhRsLJnQyFBV2YwD2ajDzxj",
  "key31": "35do8DiwrmHGWZPNVbc3WXDK2ee4grQebm9a1AfXMARDW3qS3PwKqLrYiDsVSm2kV9X4KXaxTNjfakQtAKhXYCUN",
  "key32": "1JkDjS4eBwCfWyFz796xeBut7FhBz2XpMzZqs8PCqvTDsq1XKQ2aamTfxSKndLCoivdK1BQSFq3fgEK9Ca5Q5Fq",
  "key33": "5RWsxsj952nodFMsoTWMVTmnMhrZjrYjDNRWxjeoeoeYky2M6pAgBtpeRR3QoD8gYe3Gi9xtorpaDwn7CxHteVBT",
  "key34": "2Se2R36JJpiaPDQNtVm5LdGc8qigYpPHzHu9zG8PkKCHBs1guoDqe49vRjJzkoSSpMrcsUFLG2HAhZKhkZBQUQK2",
  "key35": "4uZTKw7ZQqaZHtsrdG1yWH88usKm4D9XTGm6HEPR8wAk4B8NKnDrnqDPJTwjY2VDoA1WBiqgAXexy1Cz79KayCSN",
  "key36": "5ZNBL5BnUmJ7MNAV3MNyHeY7ATsczbLyJSHc5YnUtRGr4xuGZtS5ygdAfjivQuUszcbSciAyH9Y1AysMZtoRj2GT",
  "key37": "4fTpeBiNTVa7n51K6kf4bEerWmEAZ4HrSXoXnwwfgZtc2XzSD4ZniEoCHn6V1hcf3Wzsz4rSwQg1eN2kQmJXeVSY",
  "key38": "2apxM16smKYeDk1KN4DPSQJ86dt3yZGAhYdVJXZx9SNDP3yAhYdeWqeMys4NBeEBUGyDPjRu2Yu1imtsHjMQyKzc",
  "key39": "2gAN5c6L58JahCgrbsgBfQZRofKsKF6hikrTwzNpeq3FjZcdzukyiZaV71e2a5PP9gUchsdneUZHCrGEJLiwuoZU",
  "key40": "2tLw9Ljw9kE1H3vtwgYV47mH5jtPm1PcHNnxTVHbam81aHCHPnZDytS1byCjYJd7rm8okR6qWgWWDzQttqQcJgM9",
  "key41": "3AbbnYavmSASuvQ3Rb2wfmVESVD6DmuFgbUbEAMRMo9HpQyi1eiaCctjCYMNskBzehAWQaMao3CXiUMQ5t2wjVqc",
  "key42": "26ZqCsDEhEX8YDMSj48VtLeBigQx4x9Jc54HBMX4ePDaShAHQQgJjk8wrMcNprMsMReYz4wn1vqdpC81o3Dzuwpt",
  "key43": "4ufpLeoBkq3rbbhEV44At4gH15kcbD9d7bP5UB5HpLyzLkAUMn5aN5cAh7PCPLQxNauVTg4Y2jKxCTTyiBgaLuWG",
  "key44": "5d5Ghf6F84yKzy2vzrJcCTCT5bXEzPxsV1GfdJmdZoEJgxKcXZ5UxQYJGSbLyqGuDP8gMtqFmt1xf6j8zgAZ1aZy",
  "key45": "4nGnQHpUQEbmaB5diJeZaeLueRyyZ1iVR88mSFVudqUgyN51SFbsGvBa2ZMLsM2bXtURxXqQXyJ7owkHUpPQtAZu",
  "key46": "2b582tNLHzWNE4ZVQAxpnAYEJ6o5ZJVitytjiXuy3UiZnmTVKYCmW92dJcvvWSgzya8z4iwc4UZXLMNHJa3fGzEC",
  "key47": "27EdEHHm6rMjEvKwp3MYj7vYNRs1rTYSAeqdWBgoGiQv7HnY3944GBponJtUCb9fAVaSyYtRMcEqemYem8WNtU8x"
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

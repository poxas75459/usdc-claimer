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
    "2kNvSWGUMdDnEJD4TiMKXukcGxkFmGyD2HpLLSeWadUf4jJrwhoLfJ8AecoxZhMD94VBPi268K4mRqPCcXPvLEx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWJuZzfynrNPwdTN4VY2V4BHbao7hHoV3ZQ9njaLtrC42W1ncAjmTaNVq4RVjgWxN19ZmYHfUNuKmALKoA9GFTE",
  "key1": "4vDQeGv4PME6KKjqxX1BjMSjxniZCevMkNa6L7TBMDYWPqkg65V6PvjJAiZoysPHPPvs1CVi9zd3tEY5v9vNajbH",
  "key2": "4D9dhYkuR3AJjgwDWhKWssK4mdwJM8A1u5ShjL87oc7qJ6ygaLfEP5kgCNTh8UgYVvwvxJPGDezjyt9TVm86Rrdr",
  "key3": "29EjEXPkRF5mDJ1ziwX5ishZrRUfiPZMpJTu28eakxcbiWFjtwaWLoggAnkaNbN1S4j3UcRz4MUJDzW6qSC34baG",
  "key4": "EhZhL57RgzgiDVTNuNa9gdtpNCF8beAxuw2rJL7wo8JPM5W6N9nWLdHK6KtVDJMHfHk5L8o66QHVEf9z2Npw6UH",
  "key5": "4U4dbfajTsLhQZved6EXvnb1431WDfQn9PAjwFp5QNDvaQN6QV6UFvo6y97NBeEzctNfCkLmuX4v43JNHw9itGZc",
  "key6": "3XummtYfb8ebp9Y84fbpJfjKinkuqsLB5Sv1nfpbSyL8ky86d8kPg2S6CwJMnA5YyAgjqMC3Pi5gNHgUaHoHLwo2",
  "key7": "2Z5KRBqpyhpEaWuMFoH5LWjp29XA1B3oUtTJENQw2dUyYoxKAserZNCByPmg9LS1888ywYh1A2TapaBDi8o8vbf4",
  "key8": "2sUkfLgf2Qvo2yzbFbB5WXcVCCQEJ3d9AGUtw5ieAF1Mvm27bw4dYQ7A5KWk8ZawnJUNfAjNw64ptrSwheqWx8Dh",
  "key9": "nQdNYC64X7UcUeu4wYTc2wvKLpufHxcd5Jh24Tev8PMzCZVf94RsrPpdTvzNWjdGS2Kqfa1bn2rbBjcjB48YZpc",
  "key10": "62GMgbj5CQVPcmKJRnELp3f93m8B1kvKjfSpLLPuNzvmy53HGvjaEd6Jd5r6zGVfL3QXmZEeYaB3KgNd6addGCT7",
  "key11": "5W8Tc7fcM9Tu1BKWxgiUjBGR4FFbXhtYHRM3q6eCVtaumGLSAgFVzG1tJo3uSBcrWVy3vod5NNVL3ZWTU5M6SQi7",
  "key12": "5Rr98pGVdV984HPfaFUpUVc7jrjXYJxdUX93q48wTY7mALzf6ZbidAQtMmKNv7FrM7o6Z3qpV9B6faRuEtu4QBdb",
  "key13": "2WYw9aMdzkRbYydr54tmDp9ktnNbk7kQUiXGVqdpUTKEkhtyuMKHmfJAWzY5WLSKDFZ6jZ268KAA8dzSJAL2urtg",
  "key14": "2xx7tc6ssiGDoAbaNVYy3t3WRkANaYAHyoJfBwAKtZd19MP8fk38xQy1qreqFW3kVzVKqn56EZrX3aBhrQqW578V",
  "key15": "5e9SBYMV8q5HeSv3HitLp5ztwrNs5ru4Si3pxqEuSc62dU2cpYaHo9rES46FjcnREh4WYKPhRx5z6pPAaoNev6yP",
  "key16": "4tRquBhrtcm1LKtGNbQc784yNrCXCRtVjHUP8rcTunnPNUBbcvUTAX7DzAQ2oktfGW538QwsBgmUH4HbAp2f5Qxx",
  "key17": "2NFJGZLrCUuLUpCHrk1mTsMgxWPKzMUKSLy2LgwYbNC3MNeuaypENsiGiNZBCKwYjnHaRWdEqeqPniYQZ3Xeqez4",
  "key18": "2HTz5EYxMs8twFrpHxQ1qN87Z1EtKbjZ8asYjxXi6R3GGfLgLdcjPvjT8BBUMN7r4hHYiKozwo8gfEbpJrQ1DpPM",
  "key19": "3yXBzdQttgSjhD6PURBVsgPinUamaNUaa4RHfdFrbetmH8KewVs4YvubzGmfRcEbNKhsTpUsjMibEcnX5mcyeKDd",
  "key20": "2Wf2oZx2r2FkZo9ALSCMzh8CGsrjrqhps9yX7SLmf9aLLZtpAAnSvb2q9DEDndwphkKMUbWbf7QBUebURRZ2LLcz",
  "key21": "4ggVertoyFRLJ7PcS8erDMEyW7UD5P7cX3ih9oS7LcLpAFAt7BKCh9fUCArTTxacQpvYBqKKW3x8ehDBHahcppuR",
  "key22": "3XUjJTsJn36uf5wnp7NoMA78F5rg579J7WHGrEiYLAT8WMamFdvv6c2RJsu4VH1Q5gr58V4w24NHwiRpxFNeRB3u",
  "key23": "3BQRBKMEeSXophDzPAgKpgdVhkJo6iCMqBYfT5oUGRjgGH8ZifG5X782XerK3F3vnYTvsuLydDid6qopidSR9qkX",
  "key24": "FUtErqncxW3vWXyWBR9v61eaNJx8AD7yaNsvwvNhnNEwZmH1inn8mJR2iUc6JMqeebN7gSHTRTmvw2ZGxPUXWw8",
  "key25": "wSFUQ4f6vsHNp6RJADQRxMQmvMvSjdJDobwQhkhyviG3dd78V499Pktqb4nP8wXEwWMryoKBBdUSSciprNR5qua",
  "key26": "4hYiKZvt5CvrkavWCkzuiaeQQtvsYfuiurJvF7MqixLGrp1tkyxtwzfBruVTu1pPY8WXmkqgiN1L65FDJM86YXf3",
  "key27": "377G73zqskyrv6eFaJmBFXiptUoBqg9sHyrrYqGWxKmvK2QNvHa4qaDfbgtWtRzT1dxuJVRjY4sV6RJg1Nt9y3o3",
  "key28": "3Z9Q5qZPfCsoaJmRvs9pPqbMbamN8xJgbCgxGzkW1PK7Kt78xzDtpnBQ5vjpELvpcg5J6dVN72JqfxDnx9kumNgi",
  "key29": "5XnwtR3Ug93c1aCr5Q9KsCah9YCQWyADX4dJjiMzDuwe4HNKxPAGEwY4Ph75avAAJCTttty33m4MnYLtYbbHQDYb",
  "key30": "3jvaXuEubEDWuL4rg6WX4m3ck8EgkxvnUVPdyTf4SNTWcWZZ7sAkSotBZb7udzeL4zn2F5jFXYPJdT8szdAuW8kd",
  "key31": "35WETLA6YVdXPCy9FH75tYmL895S3ndByEQotMFb7x4ErZp2d5ycCgCpEgLZaQQyZcbrWE7L6DuyNCEafFPhYDWr",
  "key32": "4zumFsq1whkEq68n7joszXeSswHZ7PNxK8G4H1dHhXF5X1S8xkj8jiuwkoihUDf2YbYTbBdm7uquMJPc9zQrwdkR",
  "key33": "2QJgHW5MMUTqCULAGFyyedQPEH7oJpXeUTjDSG2Zidia51ATh5tiGZuQVudC668YhZ3eP8ntQx7XLsif3MZnQdSf",
  "key34": "3YVzwnbyBzR12ZDfhHb5Z6AaVUnzGBrWgYENRrYFoPWfn5xFxp8RA27SXuCiiqgnNAaxtTeM1gD222wvGe5cuZ29"
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

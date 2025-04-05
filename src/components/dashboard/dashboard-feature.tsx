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
    "5iyeNpdmhPxFpkEF8KTDAwcrHJNoxFHQhc7ZPHqCfe4s1RioAcH7sXjzfegWkiUx7Go4dpAyqimp2ZLDRKtadgh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Seu13dWJcBmFnbP1oRi1MXfpipmMFi8irsJmPxFPSwQa3WRSvAXQtPpMcma5zQ8g5bKd8bcPfDEdTQj6sQpyPKF",
  "key1": "3RycS99UGmSBZj64HSW9By3m1GVXYv5SwjzJRhjdATFQomejQu4EVYcUggByjrpgs8Eenjf4MSBjzSPUCwytY7Ld",
  "key2": "5xwMpEPbNkFFLvapAQj9zpz47g7mGm9FR74muCFn1yjKkR9F6cyXYzrUEEJfXCeC2HuABEcmatMvbMV5XsFtRVSB",
  "key3": "2gmnb3zzgyedFyGbAyY4zUANXskJRE6g8njXjAhBpGaL6rgehzkHPUHhx7FQDQjGoMkTfGPdEoMUZYBZjmqM3Uum",
  "key4": "5U9bLDxHeGzUuL8MynWJvccjwFbgjD5jC8AGNFGeHXQv9msqhB5upeWcGSBPoAVNHD5auccxF8jwpj6RtEHvkNvv",
  "key5": "4k8mjy6YEo2JhRT4EKchzsAvTcVEKS49yfoT8WmVfMLiCNWZVcEEbeUpPetk5wTaiPVtmszY9MtmQuJoXqD8M2Gi",
  "key6": "54XXNNXmARVPkNmvyU64gnMicfQkJEmoijjw7UsC58iJWsWQZaWYDrQLaVr2CmPgaSpsdYgbJ1WdPCpbFTnM6MhY",
  "key7": "5KUswgXNPonWp7WaYjkHMKmtMvbNKXRNi2UAaLSH3DNw9h4ZaPEA8WbVksc6TbDSpJKSkaDAhNvJs37EyVFRZsGf",
  "key8": "548FMiFDpZYa1iBs6efK3E2X6WXxkWJ5zpP1scKfbHmeEyaVWxBPUNcYHpgmJDTu9qfBeHB1bN13CHG3y831hT2N",
  "key9": "23fApYinqDc5wKomUDAzjahBqN7Y3PirBhfu4VD4NPd1e7ZNgWgTFo7d91c9u518zrfDoScXVKmVomQEi56949ZD",
  "key10": "2AgM11jGxyJRfehcXRWE9qmEHRFAF94ygQmNUeUPkoHGtSy9Y42hsDfYQ3J9D1HGVuJJjWfgGWxp1x6KNdLnsqcW",
  "key11": "5jzTNHTZUeLn7jf7p324ECj88eruaEqCtrL4L6hLwor9cYC3TdfHXW4tDvTWgYkFVcJZJe9bKxKtdbhFjdw11gUZ",
  "key12": "3md5Jve9G4q37LHdrvgR2WUF65Fbx8ee5WTxUdxAQGkKyTnYgRe12nrYW5LFefXTDu9UkwK6PhCiUj2FUQzTEcsw",
  "key13": "25mbe2cz5oGkdKEahj5AyVmsNrKpV9Eiaai7mVEoWDmbugs9SVDDyayabipYLRXrPyVUrh5tSaLCT7GR9XgLtcFg",
  "key14": "23uNGCDCqVoLxe9oRtbkimR9thTkxhjLzVC79omtDTQ2baaVh1MxwZ67WCy3FHX1UmVcs5KyFydjJJBFgVQzhJZB",
  "key15": "241APGwPpthnrMPu1jbTvRae31LzYDQaHp7nZR67od34zmeF3sy8NPMfys6voceiGHpJ42zaQNiHcgtBeZx53tuK",
  "key16": "55wYXgUnpWQM6KUjNN72JEDWsvfpXi5D4aJF1cLQ6feujwiPpPFsZM7SEorPquYbrEg9BALgiB5iFuVbLhdW4xAz",
  "key17": "4ZeMi2AJZtQ95uoebkbRPRcxeJdMXAiiBziD6Ep71etvpcG7dJUDRq6xbtJK9Jz2z7f1YnVPA9gXe3AS6zEU13Rh",
  "key18": "27CuLGCGKL9c3r1i2jAha43sgGQMYhWQBcYB8KSsopSA2y2KQhMbzGCGxG78QGVDvyspfWSck4uWkJQWVm3CHpg1",
  "key19": "5u3ZGqNmsuLCJ5eWb8yLdTvQTWyGtHzBmvjj7eN6rH8oi25SwrG88XYwP4o7LuHdHNZEQ4BYeqxMMRHuuHxtzGk7",
  "key20": "4DhzQw5LpZSxSnBbKz13XpEYEaSoqs2f24jQRzYcKgtSkTQ66T963sHs3xJzF8j9GL6qThnJTZbpmUDUtrYoYCXp",
  "key21": "3EimpruGnz2FT8LCWBY6fwFcbjfZnxq8Z2AtigtpPcojQNXXpq67VjNeAVrHzerCHTeKpdVRjEKP5c6Ev9tmFiHL",
  "key22": "2vUECLXqqK5LK3MrfgF7CKdUiScoV3oENeHSYTDWQLpeVnAV3QhPvQZuBD2eYX1Q367iq7DfLNH3kxZAwPV2CHF9",
  "key23": "tyNZtReu7ncu5P4KJRv419TT9M8wWz8sfomn4rqQyWeBwdUBGGLw7UQUvdhXy1ioVxEvmwkRYSnhxyG3KC1cEii",
  "key24": "EKnw2n3n16iXqSe1PxJpry1usd7HFDEWny26Wu9i4tuzte2GpNZvMd4GLQJxvYFEGm5qyPMaFDBk8LHFwfP3pnB",
  "key25": "4ThFoNH9hWWpVYvk4FgT3r5aXvABSqKA5xu6N1qrgE2S9N1NSGkMNzjWjaj9XkyXLn6WGkUR8mB1bHcEcUCghWQW",
  "key26": "54i4x4aDcBCG5d2fB1msUmgkqvACjYKGPRUh9NkrM2TSG3mHuCog59AjEbu1bYYzVWmhj9zQByJjwTRMtwpjrGCf",
  "key27": "4XeaQycLy2qFDWPh8f39TmPcTHyff3d9vpFHtbaq82k3ssGxo97uPmAXjShbxRBghu11gr9DMdgQyegec2HkFQD8",
  "key28": "2qDUMPfqqw8wMayt1TK2tiCE4ojEqxwooQ8SfCZcjmditiLFg4FnHeCnQ86zz2FHxdyP9x95X5B9tuYTHCHgq97F",
  "key29": "2fom39XvgtaKxCDAJ1QgNkSarm79mGWKkhPs4fA8Y78bJ9brgseZffRPezCcTVqkGParQ34tMmciVxkvYjtEgNpk",
  "key30": "2CBkWjo5GrUxQ2xqtGKdK6Y4sVm2ZfMtGuryHf4V1qW5NbxVpVJa7cPRjvdeNyNdxfpDNPgzWNGg4yxbkpjaE1FH",
  "key31": "55Fmgkr5N9x6qy22xyYmvgr5L9139NRhE6GMu14xs26B5A5Fe9z2iW3yEr4RHp7EwHPHCNMVVH2X41WDeCgXWMac",
  "key32": "Dgh1u4ahwF9SUSYG5HEJzVjXFCZNyfWZV9Zk8RCSWFtgMQmQDFXVvj3Jmqaux26Y8bZ5gAcuLpMwhN1BEu6vBwF",
  "key33": "2zwyypcPMH38C8VmZw557vAgKDsEu7AJsweP31FSF1vERfB7xrxYcogNdu9xaqNo7csWSHcd2qPAz1WrMsdQoxVv",
  "key34": "34RwZ8w9L6goiySyzqm25StonJv9VbndMPNDEvb26NznDh3uaQ5Z8c8A2CcAABhnHQ9hbqk6G8oCv39dEWBbvxGB",
  "key35": "2hcDJCAKg1XAeEwjgaPqpt6Jgj4BW44sxx1aw2Qh5y573FZmTRNWnJyExMB5oRiYXYi9hBhBXGZaSZCHF6baQHJM",
  "key36": "2XaSjtuwFDPwuiE5gT2MiQ1QVeGhUfxvBjHdc7AwuPJNWVWxWnmgNQd2eUuvHLm3f6U4o9zhPjTimAw5iX9XUaHf",
  "key37": "RS398KkfhCq7GrhokzMUYoc1gChSh9qYgRvGVu549udAy2Y2FaoeTUH7AURzVZj376B5rkyJPuD5EZRnShaNuo2",
  "key38": "2FvgHDZ3CCDGyNWJQeZ2aR1vVCfS5yPFo9ULMwR3m9dQRacmB2ArAYFuEECSqfGj2bMNjdDYCj2cdU6Jxe6uR8Yk",
  "key39": "3nvYJzLAGLUnhBUEG77xd5Fv4KyoUaj92FcGP1fNP8sVv99j3bsbUkQv4DRhc1N1djJ4ewChE3scZ8AAtRoY4jbT",
  "key40": "4yd9YnETD6Vxyf6m6udGee9qgqR6Z7Z16HPjZQp3uc1756pP3TeFruu26cJmuu3kwVuA6G2d9nunr64kPiv7uZJ8",
  "key41": "4QBufjx4F4R4Hg7GaffzZBzrqdreCSCSBwrK7Wnomv9jQixvtgUzMxhz28mKhfEMcHV8gPn4WezYPY1E4BuZqgdg",
  "key42": "25Lb73cS3kz9SsyyK5WWAHWXXP9DJwNSC5jRm9gDmNDafbNuaD1Gfpuwt954UvpaZGnV5PYQBvZVgV6pVG1UKTt8",
  "key43": "3V6EYFPpJorgPgm1GUZ7iyEkXqsvLwod8n1532bHqwy8vkzytgAQkoRXYG8tTu9EcBW25niQcQvs69gu1gyzJ9W4",
  "key44": "3szz24JDS4H5JVZ58Yioz4DiYKojnXQfTYYhXMEnxCfBRzfc95wNUnpR3zwhTbUoHyWLyFw1MXGjuko55WVJv75X",
  "key45": "wrEfegD5JYvckfCgUK7af9ctfUHYsZ28Jh1ExsPnUtS8QAMoUeLwVwxB3Aun3A1mWwb1jq3uwRoE6cryJH7kcZn",
  "key46": "2cmVfCAbQXoDS1kpjqi9sLswMxXasgxxTPqDZLu1TEJNg2fcwdQNY3K4xPykx4KspPtujxSjffbfiZ62nt4h3AWQ"
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

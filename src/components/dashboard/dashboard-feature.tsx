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
    "2kzpz1422c4cTqVvfyeTB6JR2WoDtZMQoeZuTUUprFS1ocTBm3Zn5C39Fs3K3so21LP1GzG78WnH1kcYacXZ2SDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJV2UiJBCQQHm9vL7d4LsZxvV1hsa6tJyJZgpnqEX4t38R8uS8jcbag2jxy5Fmyn7JyddCpBfHzdqzmFmnyXJgK",
  "key1": "5356AY6nC6QSeRruKy83HvXjpFvLbcBAZTRNRW9M498HwcvnD6SPiryuPqHh5zNhFAG52ExFab34S5mHz5EZq6ms",
  "key2": "4zAVbayb3NJwp5ZkBqu7cKT88YqaMmwNRgn3M5PvWiYmsYazPVdpdMZuYrZktH53fPEbXRNwi4K14kBnCPfrsg9Y",
  "key3": "5ZQ848gWtGdWZW6N2fXr5GFCbvwh6KhuAUqpi8uLeR1SNnWyVJ9BudsrspJ3pk61LtqP3WcNS4dre2LrCdFnoWKt",
  "key4": "4AeoXPr1zTsXg1n2YpFuFe5K3s4y7PQsx9ie54mBuiDqX6C2cdTSQNDL34NwZETE6uNHsgc4uxZNFMwUEEZzhCnc",
  "key5": "4myGoXJxfPGXkD26qi625Nzbc1KyxEKk3Q4BpvP98B1ozTKA4gx6sYruEHe2WQvvA2GkQZuSsGT4t1WiHvu68q2j",
  "key6": "5MfZe22ELbeaB9PiuP54oN9aHfLScLziVBcsR1qV5u2WXhvyxNW5j33ppngqHkAkzFDaMtvzSHZcx1QA5posEL5m",
  "key7": "2jSiNthgUmi86JRDE7DYs22SFvwso8B9o64UPUqq6ZtWWTt5stzya1HpvvXoeJEz6iN6m5ozmpMF8GusrzUEvrcA",
  "key8": "3SLkiHphdNsMacFeGmzxUUcCZbLXmTFjJneakqZ4R4UZq82cGQUFicrcRdknWnmVY74B8E4qdHt2LeVS3XGPX9vT",
  "key9": "3jhNQsrSok5SEXfK4LJN6mAVDp7FqbW4K8jkHbohSuUnbRF7WcU6skJAZa7mtVCzfK5LyyEajeiPwMYMw4hqVQP1",
  "key10": "3KMSpbD5X8V3x6G2DPCKJBwtPg9LWH139JNXGxEQCkY8SW25wn19jQBVVm2eKwMjuaFCGpqZ6K6uBEwMTUbyi6ya",
  "key11": "5TY6NdBAuDL3Rv5rRZYUNxaVQpjndW4eD8vVcBSZPt76fRTKDULN4Nsisb6TBm4E7VsCDT3wxTz2YKok2EtvcMEE",
  "key12": "53StDxeYCUCDoXQy5DbvfijTFYLpBSGLCQpnTiNzo1f1RApsL5eaEgxBfwhLMYZdUQiDqaESCPwuvpkAsPehUXTn",
  "key13": "xB7un5xY2uTwTUaJJPQG1g59c4vAcLBdkbKFQCgjSdwQMFM6qf4hLs952TQdKs3xzdA8k8wnceenfTNVh3F6zJd",
  "key14": "2oDXTaAPwYzUcsYJ5pUvc23Wfd5dBmdEUoCdu9twPbtrSccCU29LAqmx4HuhWn8mErhsAEypi597uyEncRHUBnMH",
  "key15": "5GWr6pzpbSkbm1hzjSWAf5G4PkKsTnBb6JSM5MC8mC9jSKj9Mr1FEBeDuCeChzfzQnG71Jyf19x1M1XdUxkTaWh1",
  "key16": "nraD1U8F4t2oBA6PXbHZnPt6PnzrgzoAWw6qQCQbs8h9RjNxDwYPfJhggebpEmecStRc7pBg4L1VYzxjo7o9dKo",
  "key17": "5NbehxjAxkYavuLzpaZvziVrv6rMUYgKCyrVqyJQboMj3Gte6k7rBYT66qNCu2BaU7BmrZyum2VKqBDwgtQCTHmL",
  "key18": "3cdMtVH6gf9xM59oNEiyyfufzbUzLRQAitBeD4Uz3YWgnNgp57WTVaJvYbpsJ4jNCbxuFxMBwP7nc8AA6QCPvYob",
  "key19": "36zgLu5m6JUAbKDWzaC5nUaU1HuZAvXHznakAC7EoEbVstmzQj4uBzbjZPqQWP976vA24M6miBsE7Nbk7nkwfq7s",
  "key20": "vFgNc7xm6UcLwhf1X6Mu4KDpYMgm2DXexpJVYQZB5KVgy4Ac3SyDQUvw3c3UVmoSGAWCX1cGg74rFPvZAaCAbrj",
  "key21": "5HECcq6F4LPHwsqpoRWpgf3PB7TBYnPG5hrgjvb9eJ5FR8Kh1QbWwdf6oPgVaiJACYXQxhkvcbbHKYXANvEpGzne",
  "key22": "5V1q3Mrea78TP5bcHqX5sgJHFkAukgwsVaUqSr9ZevGDmcESwRFbJQfdZRKrb4dkQAoPG926mo95PHwq8B5nG33w",
  "key23": "4v8FJw1XwZAaDSUViGNSqHtDP4RLnzj6iWkpwBCLxb3dD8bUqUxGFLgimr2NzLyVZvMdRpEh7BmSA9cZR7dSzjji",
  "key24": "yLk2WP47gjXhhyhzfbgh9LNKAejgkfmxewW5wqUzmuQV8ab6oGwaEGu7wmpNxBy9iANRwp743b4PYnsoMqzkZyX",
  "key25": "2Mc6KjgWnzsFUC1ufkHas5oKSZ7hksiMiWYgPSZsE447LhCQvcssDb2z3KSrNsgSumxGPyEd9wAQwRWNZRbY5eeJ",
  "key26": "3y9wYsiBiuJFxLXzxw64Tn82hipXyQbJKyVuw79M1yZPHAw2NyYpf1cc6Ns1wrGeGup52t43a9mzppiGkZEjL8io",
  "key27": "SuovrYK9UbEF1MmJJ9c4DX8otTQHPae3Mgd7z35RG11K6Qn2TngeSjxGXmeadJTB9C9zSvCgESYV8ahpGGMZg2S",
  "key28": "hBQdj4UJzjD6xE4Rju4XKXp952w4fE1SHgRqhw2tF73GAfEKdZzs7up8qr9vbHFWY1RhZ1sFHgLZkA1Jkd7R6wF",
  "key29": "5AdDMPr16ujhDV2TEfLgGm1pDeB9K6wxrUowue4NrpUfSgTNXqjoGbvtxoT8hjteu5cnHrM59gf4YBgsaviBK4uU",
  "key30": "4k5qpCC7a5ThDHsKyxNvtBDWdJbXxwikS12sNHAyYMnfzpjFxXpZj1dSv7i2pj8xVTvD3cEKCXQKcDF9nTyuTieX",
  "key31": "3SVGkXDP4bMx3thjT4mxqGcQ3Mj3tUWsQBXZko3ktNgS4MkvFm44nnSJg4q6okiMtJwyPN4ziuDX2YX1RveyLBJj",
  "key32": "3XSTmcHYYRJThFGdfpPPU2g5eDJJMjhJenkcQLCtqrJ73bgyevPDEWXrdBccw6uG4akZYBEXikKhUqsEaHt16vUV",
  "key33": "5E3TXtzqifvwmBY5AtDEWC2NVSB6znaA5Wnh7rSsw6wwF1zzjDPbrkZGB1qXXMmWstn1dG1oGdegWCWuEk6JmUtp",
  "key34": "48UVrJ38VWNvWsDKxZPeY4o5CquqHtN8QWeahEUjRsk1R6RWrRhurjxzoGb5nwgBAsgenbU2uwmjdimEaQFwpq1F",
  "key35": "2TZiw4AEKrZahFZDERu8BqrkVi2vvKNYniZ2gdDdTZBig8FPejKjNuVT3naRqn6p5rZX5du3shsV7zAEfNgMd1kU",
  "key36": "3h73aiNAdAGZhQsDH8SXdAhvpjqyVocvA2DrDLrjDGD6jo1EuU63hz5Edpwa6kzXsmXMbdmQ5HhWSBC5YfWhkoye",
  "key37": "4MDczZkeFi6FFUReeLBRNJypZLpturoH1th7qMwCepLsC2TFuaFfbKP8ABqoaWvs15fRHze6FpvUC25jcjR85Xfi",
  "key38": "4RGNMtUWF56rLFqiQ9Gz2PU2bL9q5oqW5vWKKfDrS6cac6YqSyDcGxSkKr6pgVuZ8AMJ2f4e5UPojXhi6kiFC7BT",
  "key39": "2rQyY9tod1EunZKB2nZw5tuSz9k7fmA8m4Eno7Wh3JgbCMRB5TgKrdcRe8PosWNJHydUZJQRqqQXd1apX38a51Ky",
  "key40": "4uKwLQQ4N9qFj9BdxpgPeMSV2q3xvsAKT8iTnSp29tXNWVa1uBCVqpMUaVWxcTMPD6jfExQBDKQMbU4nHe7hSbeM",
  "key41": "4yMHQQugwanav4SiDH19S7CL3YjPQtF7aPAPLYQrykQtyyQ4nkpuAwjenepLVSHaZqvFFUczQ1c4aeXKpsMx9cSm",
  "key42": "3TF2CTT9QfBpZDXQLVDcQQ7qvSfMbctmcj8EXDb6zbzmCkEc6i9wfqpyecVqDQwy1A5PDdKKJPFuFat7fQFL4wdR"
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

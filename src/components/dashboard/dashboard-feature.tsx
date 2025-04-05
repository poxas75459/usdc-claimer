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
    "2CAGetbxzvNq382u2JduxcD7yqm8Q1qHMvhfT8vAmBHc73CsWBDzbWtH4RHNh4TKYMigvUn9ZGquxtSHCJseyqPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaUTijQYXghM9GqyVLKdyJ4zv2w3bFe9of97BHGzSU6ECmLT3dkR6kZyGy1ELTMZVu3eaZ1e6YnVku7UB5AvQ4Q",
  "key1": "34w7wodmZbFE8jCBmqGqpVRpECJ4v29TAGZKZmXqyn95iT9V5vu7oZeEAx66zCNFNk5DM5xt85njB77CfdJnwvz8",
  "key2": "36V763mVLXYNHwqXE6LJbGWNc8AbYTs2vtvx3zdTp8wzzGCnwNj7YwzH9hDhdokSSxAHTkKP3Y6tA1EKuAF6pUjS",
  "key3": "58kKAWgjpEtakcr4Wfhp5j6CsevMzc9dzKX7wsnZudfk4LGzxpQZRFdfHKddyr23smRJWeNsbZCxH7UKcaaJg997",
  "key4": "39w9ygWC9gVt6tUCAMns5mVnhoxnRsPFt6ix1EPvw6Wm1TsPYErYjsSvw5LH5YrYpq88ZRK25zLYprSFTo6MvZ1H",
  "key5": "25pcws5J7HJLz2zX3wWtdxjGwRRHSdaRcri7HojyJJmXpc3KodGT1iyobyJPyAkmaCNcsbkC4vozAUyGBGdV58Kx",
  "key6": "GLZh1jkv8weP4hAswNJffTETEttQvZhHnkq46ZqANe3XCanLMtC2W8n4PEfVVaLKH6c5tYKkD3rCE18SJ3gbRhe",
  "key7": "2934tmKhor3mRnv5rkRqcdnkKMFquRBYu66ZtE7fy8KzCRDEpKzwaEpAoreMn3rvgvJ9FP8pyw56XojrohB4MPRM",
  "key8": "3KiVoBwKZ54p2efBCMqR4fLDC9mQqN9JovygKMDg2cUrpwtinkHfY4r7rm132qwRtcYCFUAAk7YdUf63hhJmHoAk",
  "key9": "Dz632V2M7FhHDy3GuSa4HGXQ6xzivvnrhoG68aFyLQERhh9anYgDwAd7gZcJgoEUJSYXhQG8y1y9zH8ga6QZ3XG",
  "key10": "4JvU4BPHR1DGo4YwdUzuhNPzUnaVQ92pr11gQKNY7nvg4VrEUVhKiuh9gthu8uXFFqHbfunNtcN6L5GQmHcHeeek",
  "key11": "5ZM6Mo2AYyHaZfrbF3CiqavHH5fNca5YADX7su1xUYEyKa6QAzAjG8yRE8se8fQHz9ZEvLNcLm1a7hF5vcGLu3Tf",
  "key12": "3vJGm6iQRz4u17EBpndxdu2f8s1C5BEbhiHMafcwskar73HLV9GFQXLQY5Mh3WR57w6byjEqGaTd6CHBDKGpfGhj",
  "key13": "5hQ9chqMdkZpAKQ4vQZoDwHTxfxPVQeMzcqXM6rzxzxMttfCCbZh5tW3euXnTvh1HWB51PWyXnsnmC77tPcLt7Vn",
  "key14": "5FRbCZoeaQUF63v9qzTJJ9CSYPxyDgAaAhSuf7dqyK4j3yyqa2Bip9VrU7qixb9scAnhyoMC4KVAJvpF9iGutXnE",
  "key15": "35CC1EB7w2h97YEwz87bNq3WrHrv8i5LAXNfaunmYHjm5ivAHJffinVQRVWzsHN416aQJjvwHvNm5zgYHDmprWDo",
  "key16": "52XJVJA4TtsFfNSaS3ZKf6Nx8vCB4BTYiFmRev25Zp1VvCb1DGAB5RyNmomQvpgtdY1qoL9ZQowa7t1UfCsroJDD",
  "key17": "2p7jwLyuAPs2PGGg16TdjBEZKgegco4VEsxyc3KeWcAcAV1R4RLbnvMkxq9RUGeSm2AsAczFkfy7zppy3PPtupvw",
  "key18": "egrKXBARznft8cYQ8hci2GmNDGR5xWxfwpqB8jWkCAiGzHE6LpWwMXGsWnYSuUSZVtjG38Vn316KyJzhiTqJ7aE",
  "key19": "53TPHGGdsoRaqjiUA4AAs9pEGX32vCec6awGL5mxTQrB3viE1vtSRKbuXJmQCQP1Zz6TmgoHGkuT6rpEaMQRPbuz",
  "key20": "3VV5Dvw4Jt8LxgzvXAgGv92q8BXu51gzQHxgY9RKPTA7Jrr1tt3VrcnbSiz9c6CmM2fYuWZ4qy3ihx5BWnN9ChUi",
  "key21": "3HMx81Es9GNemD7UCnbVQEWxrs5NB5PQPBnJYaXKn4AckFbmw3XwEydjB7cwNgo48PEj8dDN7AAJwuU4VAhWhu1M",
  "key22": "4QM3gGLuy6qNtMazAdPsaPMzLtJfwTiwKFq1quTjEdvrM1DJsLgGXSYUUm5zbrXR2Rkvg7S1aQV17fShuqxWbHr4",
  "key23": "4ysCaYkChRERt6jAzMv1QBT6xDK9Q56cedYLqVy7cx68mRpP11sKtwg8uSRNX76mjyX9Yb4NsMEFb4AyRQXp6p3",
  "key24": "2XnZJidvEh7seTkBtfskxbqoGQSZYMQuqTK8dQvRPCYy4iSjASrAtJ9bVnFegfy1Ms3NDQ3Gxf5X7oRXdbNx4dd8",
  "key25": "64Rk2a6ZZZXnwxTGyQB5BG4vae9Z7dcUqPnbBqCL7efHRGQjiQfv861P7nB3jo9k1kuEHZbqRa8Bs4XZgpBimxR4",
  "key26": "5CcyXhdkJ9Ajxfyrisu8zmPPxmpqXXELFAcsxWhwjFkaVxr75EwaMiF39jXY5PdYr3FXd3fZtvvoTzoz515sJ9Ta",
  "key27": "5aavuKyfsztzhAqgV3jqM8nSSvsTQxg3CwMuafiubFof85bQ8o3ER8qpocZ4ekynQRppLSeuyyjdPJiKVX9L66DA",
  "key28": "56SDB6USCHndxpAVun2Fw6D7xotRiBmBdhoBL1NYh4i1MKPTfqA6kJSCTksHQ7ye6eusemvRRJt8XRV7wsFazjgh",
  "key29": "f4aDxnxT7TLWrTbdR5BWAhW1265nZ1dAMfKaBLinBaA2NyrRxVwxU8A5tkwTjQwEKRJhvmYMAnSPUVjPZATCu8b",
  "key30": "5ddKmp5dkxx9RuMgQBH8dXb2w2xiELRsRUVFSvgiHQ9QBjuYvZyWx6LpjcYFm8KGQP7CxXMMEhjeYp7T1CZgeVfD",
  "key31": "4t7TDyoBE5MJj8PgyZaa4m9CVDhSfV4SMGxxS4wYSMADRMiwM8MtTzLiBUz2v6vrVDcq3LYJYRWgokfjh2z9DN6i",
  "key32": "4L4tvM8KaovB5yrQNDUVk11uYxywDGnH2ArUbXwbUoaT4mXKMChYZVi2UM1fdYngiVaNoTxxxBcp9U2MbbUCmA7C",
  "key33": "44zjbJnDPgzmGdyEoUyDGTGEtkWCnX8uGS1SS84WinDnA7gwUankzknXiNjCJqPzeUcFjEebUPJXf7ECdPs4vkBL",
  "key34": "33ACK8rthRGw1F5B4dcxBRmsKFyMg4VTqDun1ZudtcFVjconAND7teiiNupPN4UZQ6nmhgotRzabrgadGn4qNFyF",
  "key35": "Eqw4Y7j6MVpLdaVu21AhNQrR1ZY2uB7NY3SurTSKRbGVPJ9PAXLsfYpbmCggZmWzH6BnH8Sh5aWcUr6zpEWw2D1",
  "key36": "3XGNXc1V63vVSs8of4ELTpBRAsDsr8jJiJeprn73Q11ESki5UwzPg5oY9V7Y9MtSW6n6oDrEyynRKPTCjcZ5y4uF",
  "key37": "3SU3kiaZyJfqKKZ3zLTsSxQTDuCA2Y2o11aH9ogrjQ6c2MEoF47H1nHKDuWgC6hSebY5bqs1ba6NK9bUunms8Um",
  "key38": "4nraSvkB65U8PS4VQWhfdLp3zRLAmkRBuAf3TM1BZCQcd4ShQdMKdaVKRHgTFHqUn9WkNx1Juk8FCk5dEqJyEaGE",
  "key39": "4pW9gMuP7zXSJGzzXTgkbitoiMeW58j7Fs6vvgscMo8UnjYDkMykK8uKpnBaHVngnYjNfuCejXoL4chA9bcvLkZK",
  "key40": "3RjY4sy6rutU9FKJVppdJDcPw5WnUtWqfphS6n18uNdhWxD8ssUZrGp3wbeKV7UnyVA6AhPfKWZRj1eE3ER1AXBY",
  "key41": "4jHM7wE7QzKdyT3xN9ELxeQNd5bHA6g6ARUEaDi6jjwPtuHSphnna7WBHccNfJDtwFHmdyBATGofMjrAYLPtZ346",
  "key42": "2qDZLRgLEfsehDKkvNEMemHppFDGPpooJDVs18eR2vH5C7NUiSfQX1mjRT4hxPT67fhdCT44zAqPXio6meJJQifa",
  "key43": "2Ay5F5cDyKDpHZocdRPs5b8J82QwK1fNtG91rLQRPzzmSt5LcyUJLKRgvQqDnMtN2swfhur8QifGK7fhS4LG8otT",
  "key44": "eECdVwgzm4WfvwHbPKssyFpUvfmkCbXREQo5z7ykGWj77K3zh6BKL8w6DkvnpPS7d4V4NRiARMGp6M6tN24knLM"
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

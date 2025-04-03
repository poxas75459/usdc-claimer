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
    "HtycDuFYrPqCnHAGmtkPDeG9Ux8HKZFEVppVWd1p8ngizk2rdcs86Wnk5XdcrJXXrF4fStBwXeLzHLehQ9y7pAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Es2PkZjAAQihuuUYREyuXSSqAYf1YBEBNjtbEWYHxvsEUcCy9vmaFxhB23kvMFseJV527nKMg4ZiyUGkead6vL",
  "key1": "4LisGEBG52yCvZZ1sSrkipCMYqiWN1gt4vjpWhGztqWTrvgKUNLs7NegJiAW8jSUsSeFfw9CpzKYSdHmvg6VoqPR",
  "key2": "xmjitUWdzEZyJUXJ7usPqG4qNvJHqmGVT1REYi91XYGbdJnfTfPN2nNXjidLnmHpNpcRDRb32HfLj8T12T5fAYR",
  "key3": "5qpFwF6WnMYFMShDCzFJ5XzSGyqD94hdHGV31jzj76Qe5YkhXo2MzQ4L7Cxpui1Yp8hGfaMVv9rcdpdRcc1vmR6E",
  "key4": "2QnQkHv7mi1jzEN91SRc6VSNNeDb4SmRBnZJmhRbZt6YoaavDSutgoN3k8cBUnWyppWGAQKHABLygmZpeW9c5Q2o",
  "key5": "5zxqFah94eXG7GJojT4trgcXRk9B82RVLGMnki2R8qBhH6ycLwbKnSFYWWXqrSHQEp62E7D9u9iaB1uQ7pLaUALc",
  "key6": "31ckS79Lcfqdjxk3UT2ZHQxyhqARs6H9AyRsY6YDCP2TQAyBnxktm1MWzdZFXMrZ7JwLPkU5FdhY8bcYXCKUJp4x",
  "key7": "2quzXkBUguY4ewBcsd3WTSXQJDjrU71Na81z9mzpCuaaPve2fZ9BVq85SgDfn2NZX8ZVctXwqTCDKWq7zu1D78w2",
  "key8": "5h9MUKTc5kJ6btkAn9obBV7wbCgrPQngm7nMcXvX5uwAMASRrYpzhrRqBA6Sj4RjoLDSr6HKZCiJxYMxjmP7PxRm",
  "key9": "2RLDZWM4g5HnUEEJg5EEYvgBs8XU6LFBA5NxcKPexs51V5a1aQ27H5KsHVaGrN7T8DJJF3FYLeuaKXiENsYK1Mvx",
  "key10": "2cVKMtpRLMrA1nm4BuBEMqhSSMQm1LYZeKVUT23twmzf28dERu3pBPTWTNYB1GJhP3WgkpYUQroqxTsqU33jGBbr",
  "key11": "2pcBnzPmLVehhWU9A8pkXVuhEC87tsfjWpjMoqZVZLhoJGM1xokCnPQrojxbuSCrNwWRPiRYPgCR5NWTeYuRjvAh",
  "key12": "2jP8FK2roxDGSVAWRi26rKpfapmYMRHUgFzqx1ZZi93sNCRWhtUfVn94U8udgrujKt6cFoEoYdXi4PDi7fnBC3my",
  "key13": "3hXhURg1PAhLMRGPQVMHLMGmVQ2rFrmQrDrzgbrsHQYc9cSGPQALg6jKv5LBidjjzUkxrYAKcaurmq3qiWrwCXcE",
  "key14": "2gL9vN4znhUCKNszdJx7FaYAL4X6ovUU7P4yt7gXUd7h2zATumiaiBfP4cX4tdSfms114Af5DyEAMU5tqgEGd8gK",
  "key15": "5F7u1gfZsfVtwi4xX7evgarf4ygJPSrW1CsLz6ozj6uwYZYeNQLghmyUGEApjFMkJsZtWxhok99eMvELhSzSx9oU",
  "key16": "5WTfx6WPj5i56656ynof9bviRUhPeYm9ZNFnPzvWiBF45fGbZUHhR6cqF3Sy7sMHjKDK7Zo4KhDtX4x8kBgqvxMD",
  "key17": "4QBqqEtcGPSQ3bwpUAgCqjSi486zXDhobTCPiyeCiUABsgqPYb77w8WsGNCbre45VaaK11DjER7W4NvaPraSvyt",
  "key18": "8XJSAcNNzALhtpzdf8eLdC8eQQsVs3GR9fuESfnWgg1ZdJ3EGH9jdNekR3FJWUk964EwHGapiYAmMJdYLiYZWKe",
  "key19": "4uTVBPQBuPNekvANkWJR3cDeCpR5PbE1xhT9LQJkBjN4QNMMvxLHA7hJnTAN17RyXNu7yZPJY84GS3fE1qyVVcaD",
  "key20": "5tpFWpB6KEGvCPSSastSTzzZaSGWKcWUcVhbGPsxCuXttzTz6PerAs2caNshNByPxKYFdMAfcJnryzngYRbbQz9G",
  "key21": "3Jr3NBC4fCtBQ1ePvJV7jgCoHjumuXsCS7eBsYqBmo1494owu7iSnrEydLd2xvFrSnF5k9fApQJEJiL4k27Q5gpZ",
  "key22": "1GdhynZzB5kCo7WYXg1jGLzeYHdCstQsstU96kaG7UGH8Z33G8Pc3E6SEF9zCtRWfqzExXfvxbm9D6JRAXyVUtR",
  "key23": "4LmyhVYjnNdrm4DdReAxUuMqDBjStLioWoYVG3dLYgpVuHL1zyy7gTofTJ5RhwhiZjzQ59cDwBSBP9TKL5pHy7Sp",
  "key24": "5Mp8GrTMB1NBZsNm3zPStmdXi35saW18G6i4dcKxGg6NR5dBBJtzyWb5Do4DCpNh9oJVacSv5vsyQagoaJPdahqd",
  "key25": "5ierKUiAjcz4w4vuaWrJXB1KJTYg4nm1hAnNqjygat3kQWzTpjFjxiVuoWwPPkkLfE4yvC1zacs9BWxp4AnHi2Pa",
  "key26": "uRtfWihLwPneqgV1vqdB625ozDS31fi3tk4LTwEiHkMoNt3yDcPbnsrycue9MQ7duekGLzwEzxjopcxywvD9cbw",
  "key27": "CyTMgx4LPhWqDm355nrjNKVmkp7GKuZMs1XZPzbDAkRaynGNiw1KApxWR5b2HsTyaeEpPRJNeH26K3KMAMVrgKS",
  "key28": "2Ha1odqf1bZx92f5QCiUHKJna58UexNKKxek2jTZGweg6hXz6s1MSq4G9pwY1DLSNJqGoamPAGU6QEckc9XN4oiv",
  "key29": "5TtJJz34PoyQxgvTyLwbauzp5LABQwBaQx1bHhgn8Qy4AdUjJFYecL35vuy5ocwYz1LNTdoYxCMBrGaj8koyKGA7",
  "key30": "2p4UpccQqx34EgPRJruJ5fzUUFewLHERPqKzZjqHqTb8DXAW6Lzb5aNYv9Kwu6GkW6wbqUV8WkzviDVjHfXFdugq",
  "key31": "43yAGxmDdPwRyrJ9tKtcejzMEA5t1EgYNqizUEQRPEjaSmUhdreNGX3rkK7689BBARG6NFxj8amkad762GjXpLM3",
  "key32": "36jnTmVzGc8w5dnfWTZKGNdxShVrFnv5Rdw5xJSgWePPjyYTo3FDnHCmRFDzbPv6HTN35qeKpeuiZHQAPgFksyz1",
  "key33": "5Dpug9iF1VRtToCaqbJAnCgx7GfSJGKMyaNiF8AQQhkdPTMjB8dXHt9uKqiTGYdN2qKCtfBEoz5wSnkHSbLTqb3e",
  "key34": "3zoeopokscFmLMoH8df7UjGBwsZijXmQQtHut2MNk8HWZdpGBh7phYy8E7pV1PMmk3iJLKUvRP1Qf8sePpMZMSJT",
  "key35": "ksYnEgBM7Dm6dbwyqdDfHgZT1JMJ1sBvxEeFeob1vj2hMBXgJ31DH6HpWGgV3ZQM2HKWxMcrtCJeKSDphVsf536"
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

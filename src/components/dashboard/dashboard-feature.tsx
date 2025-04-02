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
    "47yo17yy6rMvb2Dq2QcFGogZ94QHPLpAWrDCyudXbbDQE4CaeBoWUHVKCqHDPuNpKrxDJLcM9BZ8BMMDjk8uGkoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467GrXKtr91JbzukVxoZ2rsNXA5eXxZsKPxEGEfnHyozs6tH95VxpEK65b39vw1bWG4QddT5PPohWsLkZoi1Y1YW",
  "key1": "3FiKa7hm1vSyu6C8Q9DVi6eaV91HXG2bAsv6ycBxVb5T4XZnwRMba88XS4LdyiZWVovVyfao3mMwTiGKE8sQjGA4",
  "key2": "5pd3ZG2CnLkBRgkMzs42Ham7RBi1B7PdkmbFce8y1ffd2wJa4Ua4ZRS1imAEoVRRu8TM9jE8Cwco7JTmNmHXH3m9",
  "key3": "HaQisFNEDMFdFrxfTfdXZQx7pVfsXARw3AxWsxKpa1Z3uwbAozxpVkt3qUmxrh9jHXz4w2aV6q3a3egD1maFp3L",
  "key4": "uWq5DkbZ13Z8t1VVgMANK6zbZPuRgh4mnT6yH7pHA788inCKEZuH9B71w5E78WV1e2QZhsBzBF8pNLyAquN7AMJ",
  "key5": "x2P3T3o3fpwZF7ErNiCiG8iUzi2BmuXXirPRUgdQuVLcJmER3BxyuakUwYWWzB4hLRJaFDP6xXK4hgM7skeTTuK",
  "key6": "2B9m4fCSXD8FdBcehVPFQ3Fs9Bio5EfEFLCKGy6JTgvUH3ZA8UhwGE9pwvNL4W3hKj3oSBVSFNYrAzigt54QwiVt",
  "key7": "5y1Uwzxg3YmgxfSwGi9nxdJmQWHshAWZWdbgRTXZx2eHt4b1KnoTeEpvima6XagB9nqfMDiwu5hLmxY81otJFBKU",
  "key8": "3EBGRVo79651eDZC7Bnr3M2im2YUNz45o6R8B9Tgqo89tY9sjEBmDdQroh1LbR76Qn4wphjuRZzCuZkvnLc8VZMP",
  "key9": "4MKt3q2kYfTeBpVxZdoisFxqk2wHBiMwca6iJbNKvNdvrwPX5qtRqcHpghho4fuUbsHVa4yMrwTBbVa8pYFU9eFx",
  "key10": "8Rk5CN6NYRxw4Dhxr4YX3X5gmnh4NFpjAHKwgZDw3XdqHxZ2nNroHRQgmS3Z5BtZWvKhymezqZZZgU8tZSCS8jm",
  "key11": "3p5EGm7Zo5kPwqYhgs9qxecxTs7bma3ysy7bFiqnp9k9FZym1toavWws3Sm7xkewwFV83fL1ub3dHSnhGRtTDF5w",
  "key12": "hKMdDReq2GFfQivKHSyxr1tsENfCTA5jvVQ9dqk3TMBRnQugriokHDm6NjWn1Aso8cNSJDv4cWS9V89XxaUBUr1",
  "key13": "4wZZrAu6C7qQ2g9xccpyKNw2hbSYiAsiJJahiN5FHEChmiK3iJwdMHStVHz4hWcu6K4JADufAr74pQu3KHddyioM",
  "key14": "2XkwS9QG6kNSr8S2gPLPyBLJZrjokvPVJkwdzL5rnF5CvGzvw5HiyVvbdAVW4ApJDTQZ1VAeHMF65SUozgntWT7N",
  "key15": "2UmeK9WS9buqvDybToZSAPhcPJbPq6r4MrX8TG4zHFdp4KnzYfyNaav4jJRjfwFZPeSV7CwxFoYpyrpbcns972R6",
  "key16": "2S1jhagYLmZK8wLP9GeJ5kN6YWQkZibZoKqBoSE7at8yfKBAwZXwdBaXnHwCoCgJst7PEmLvo7kzHgFwDT3ryk2c",
  "key17": "2GibF5nnJft8JiUjb7594e8RiVc7y2JG6sbqyM9wYZfbAkKr1PykTHgPHErwDzERV7WtjnupY8gTJ9SKdQVezxxo",
  "key18": "2qsRuZyDwSGrbxd4DuYzizSdCeVgoRtSGqY2q1YPNdnNZhPdqSUL5J6osrUDF1ocE7vt9Ep1geqLCwkN6PwqN7nZ",
  "key19": "2exukjjHK5Tv8uHae422jCnXovBx7AJmDP46B8ME8oM46quy6wecELKe5rn8eSSbCCpxKLe3G9TgZUfnvpTpR3XG",
  "key20": "57EH8sTKSyGsz2cnFQBq73weXZm5vkRqbS58GkxQdnnRV41Z5a3iGA6FpLhu7NBF9f5cyVf7xPyA5t7GPouCAuUs",
  "key21": "5RxtX3PF7Q22NxtwBJP6DpPUoFjBRNP7LUgcs7FFK6Cgv5Hs6WoRjAtiuFd65sbr1ZmPB4nGGJzpaaDxngRaUJwA",
  "key22": "2jzN1JVDjQ4Y6s39U3QotW42YiQ2M3pv6kyMTwrtLwrZ34FHmDBBK6MNJnQJ773o3TGsbVT8hEy8nEp4w8msMkWU",
  "key23": "52fAYnaamuQXA54toH8KyvxtFNER6TDX3DbRpfxufy5iz9SM6ouWdzyGHtkrk4bJVbmMULBhPkLDKFhRosBMLCHL",
  "key24": "2KcFQRqPUfKiR7pnxm72rSFwXR8EZPHVZcYEfqtzvCyyMmj6xJPuBaes27qv8u9h69FoWrxYs972ioRWX2LwM6dV",
  "key25": "4QH8Wbxu37ggkjbFttS6MFELXH3RxLtM7PdQao2SGDpo369R6kH6UJK8TiBt2dojz9Mek3R1hg56Ay1DA1YN7yzt",
  "key26": "6sqYNp7nYxec76xfNETJ5xThk7RALmg9yiSC5u1r8Nm6xB5JWGnXcDe9LAYkfgyfeX4ftfBekrNBqx3beq79dTo",
  "key27": "3cSHzDao4eBh9QVQSgtmBdZF8c9qDk9JCR4UkwkQfB8xgxswTtbz3XQFrxViTrKBysL7WY5BSNTAwB5iDSKzD6RS",
  "key28": "5FYPDXmUtd3pChwHYGfQ3GcGrxRKbUXVsZjtm1odqMtcVneuwJf2GLXBZ2L1S3GGPTjb4psP6ADpRKmeqvGm8g2z",
  "key29": "wALa1Mqr6AsqdDnzWkeNB78yyxziMiQTUUjhRRDmo4uQgLrg7WPv9wraVmqnCAxC1NKPcsTemjc7dVL2Cr4xzB9",
  "key30": "2bZ6Z77drX3eyfrvYTnCD9vw2zNEo1XZpWC47TsEFGdmSb3VpWwZAns87RsurBpgK3aRkMzTwpTLizgHmvqsbvhL",
  "key31": "5x1A2sbaQpCPbmzQ5BQFXfiAm2XyXAAaQv7sREhoYq13B7s9pxDqsYzPZEeLUsirMNghjdAAnRVCicorG5hJf3Hm",
  "key32": "2TzTiUaYgdHinYvD4c9N1GaAcGCZnsu2BfPgM5niYpE13QuCEbHeiJ2xkxQYHbw3yB9EAs7CUKrD13KJw6LEkk26",
  "key33": "X9zkjzw9hg3FB9hoh4ak2sFgtyRR7gWCczxuY3PdcM8uhzkEv62YwnA9S1j389PX6mghD6Mmk4FZzMhj94jJpgK",
  "key34": "5VbDfamXsST6yT7tRvPPN2g4Bhvfmzos7SyaHbCrP9GwpafdJ2p6Bx1zehtuUGhMQKNCKQQN2sjSMpxdTMkMzskU",
  "key35": "4NyyWYw4iDsayAqroL7twEqWmzgxkPWhSzVmnW5ZXNseyM8Wnfh4mejWmrXy7asR9dZTKXaGDnXscL7oZYApCXrU",
  "key36": "4aSatKmZfc9SZ1M6KkZ9roYgN1j3qtfNVNXiE3Jiora1VjT5vqYVVjn254jpr3rX29nvSzGZ2AthCfCdJBTYAtTA",
  "key37": "j3FSrVgfc5auXZvhoKgmACqCxU1Pa1ZKfjiBAxZvbpNJNFFrzA1rPfec6a9mwDJM45Aj9Byapdg3yNLKWLoBMGZ"
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

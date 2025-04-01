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
    "5Y2x8Gte848sB7rxvsDuD4cUi5BE3jiQThJPiNTFL7SjnEVwpntx167iaHXS3HmjnJVLSnrj8roJdJCVzvWcbzca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgrTood2fEpiWo6EAqXGC5fKVQYHEN82YFvNhANt4AC1pxH1DCmC3AbVm5sjQydnQWssVUNay8onnUvGh9YpyNM",
  "key1": "42gsPecmr7QviXaRX3FrC1YXw3pGwagnciBxPyQwPQHcJLxJq2y3ESKQ2eykuwigpdUEUzwg1rMqC1QY27hejhkb",
  "key2": "4boMQAQsaVFTufiGjhDd75uAo6bZZHzJVEu3aHFvTq9Nurm68eNFGeBE8U6GUh3N1RYpQDg81vAZBdwnPXmV66k",
  "key3": "3Tzmp2qmu8SGVN81stHhXYKTfuMs9Sg3yGxA9NmZNaVM9jYRQhd7k5rRByWcxsSUYy1oRvnbf6AaMqQcUJ3NbwTb",
  "key4": "71QnDiyLNLc9WgitRowGTbAiYvYGeb9tennW92DuYQRMxxz564EtyPzUjnzQiTHkXYF3HoNtnYjvUu2SgthmJ94",
  "key5": "3kgeeAoBG78WMCUaqEqaNdKN2EJx89dbEpRnn3vE8UD177FYFcS9Ng4uPzaMio34tnqPtYSuA59Xs8nHmShjQfdw",
  "key6": "3hDvyk9yBNFB7R7Jip3R34eP4PPypM7d9Gx2P46R4KBRXSqg9eZjuEsZrNkzd2YNDvBYdek3UgHSLaKrAncVLZ42",
  "key7": "479YAEKkm6BYaKmMz8qDmqPnNFJVFpZhthe6VqEt69UmwxUoibHyVJtHdGDahDmeYkMKkDyg5UycBr5Xk7dxCGeZ",
  "key8": "4yEJD3H9UPWGkUp13sxE979259SEM8uKPC9Fi8FTzFsE93fijo1L9e5wEh8hzGeu4Zj25jGA5TgwGLnLrWtbbZ1d",
  "key9": "wCuDjZM75ga7AaforcHbj3kkh4iDBGDGFMBPZEtFJqiPWcgAccDF9cddiGwzYC678mJKnib1ks6GMT4K6ScT3b5",
  "key10": "DYS9fZaj97juux5oK3B2ACMWafqh3JphQANcSh9WYkwHDZoLPK94V66rXrexCDupdDMPM7nTSjdQgd3H18kbRdB",
  "key11": "5cVQCVJscZ6SCAMLCpoiPpumwBGPtoMRmneU6VChiiHKtkoSfTQU19ux5Y8f5521FxScmi6WboCkoYUBrjjurX1c",
  "key12": "3Syu1rQZa67USxK7egjGqoTdfkSYaGUnD7x9APig9wwX4htEmACctHcZ8qGUd3ThKqBfapnkbYjCfvG1i5iaXj7A",
  "key13": "29fT7Kt8UApnA3ymRNg9GRoWBfsvbDzHx7fCdkEGhcG9qMTNS4ZV1gcjt8ckA3WS7SjUz21AjbgupPXSooY54KzA",
  "key14": "WEGXVmoXna9XDRprZhMtZmY9MEKGKQg8XYSAW9tjNF7uFgEsFdNoNh52kx2HHhLfNixY8UdX8j8J9a9bNzt7nSC",
  "key15": "5Y3AjQZE9iaKPKNwBmbJ3rgEzNatYsD6DvtCQXxHP9tJY6EwHRV2QCM86MpiYTgUVofwzCSxKu8Z9m87bBP7bkYd",
  "key16": "4xuaoEmde9s6icDXxMecXTTSqpNn72eevb6GbnMkfEQog2ZYWZZRLSfgjrjfgHvYHrecpRrZ4ixDPfZon5TvqEF6",
  "key17": "2ZxtkyF1yaM98c3qST6eUfWE7JozYbnFWr6ZA5k7Kr7M6QkV4F4JaCB7X2XwS3TrqgkuStetm54JEtuBZV5UzhmV",
  "key18": "5r2GYmho6SCgpgvAX5ujNUJ3qP14mFoH2UtbQM4KDsnxNGvTNSdx4ECWPLjDjV4aftHkNzqfFpWB3rb2eFFtpqzV",
  "key19": "4rYU14ipbQJBBVV1vrDuZukUvVBPpuaHz61hGuN4YxW89biEBGXKcH6ZPLbsrUJvsUvg4aNELPAVbXV5xPTyvwzH",
  "key20": "aR8bA6zra2UPsWWFfUdfib8sYctzbneELXe8wBmHS6mSdSeG8kPCRgpJyjwAmja1UEc4EYkhV71Niy1MgNi7g6W",
  "key21": "3hhcfoFmwAeJQhaBuN1vgbBDiMNFPWDN6GfSQrd5UPmx4voxn5zFiDW9WkDghQ8Jyfr4C1cXWv7rxU8gon26WJx8",
  "key22": "4e1feb5KgLWdCYemDX9rvaYCohRLPad2xPTcLmWo6ieWGrGqEFTu4dET7zw3vTGyrGepUXRxwyi5zTaRTpJoLosA",
  "key23": "RBkT1iwDP9SyrNAvKBJQELpMKHJfDYZJnRm1x4wdmkWKu4uuWCP96WVG1DGKnjgGYKzmGF4NStEK6A7YxwDusCk",
  "key24": "3woeGogNKXxz5uMp2rVssK7bcA9qzdom5CgAJJ6exfngiCXwUM8WUzNkBHykBkvJAqGB46wPRTEvHjRCKvPmLD4H",
  "key25": "5hH9KQvuyZDaHDzDQ14chqF6y5Dt1bjqAdWi4ys158StMjdR8nVHpe3yddKm4LjxdnFrDWXu54vi5ihvvNbekzGd",
  "key26": "8k3fpfSJMVFNCP4P1zFrf99EpPADLhUj8x813tBt1J8AJBngEycTQQ7D6wPSGszuc532guQogN1MbNUwW29LYLf",
  "key27": "4hrZSH43ZjwVSb5qGKwnPEbUBDGaPhGqYYTLbixJZH27MVakQsBRUR8AG6xaKRAPzqvwwCXdn8qyWkVNNMytjbZ6",
  "key28": "43Yj1FaFd9ttX3p6ZHUJwqm3Qsk64RJCDhieQaf15s4j5Sew9EpcxRSF3dBvC68d5ukwME32Rt89t1YwoinDomb2",
  "key29": "5Ha2dc9tmYWDPkPzgTLUuHUHfpYB4nKjtN3eymDyt5Dye33rUVg817GEGt8XNbmFYwRc4P2DkAwEnkrNhSwTzDfs",
  "key30": "5y4o6ZY4YaDNrdPWoRYyrC6YbW5mKr7uZCcGvi53CdVcphcCVs6gtzqe4WLfsProLyvs5SCV6yPVGmk3e466FmTJ",
  "key31": "2tYcSZ6tsr4wpJEbPHqQwn81eUivGv1qNcoY8DqEZDm7kPEK46fERC2ocSziLJwinitnThbay9iyKH8iDKEq3NYJ",
  "key32": "7N779BZfni54GE8GvUbdrTWmJFwMmd5zCzdZrmHmSL3BjyVTeewh9ipwG8aCsCn4TXSrpJzhAzqxDgko3mbHYHu",
  "key33": "55QZ1xiRDE3hXXjGtBLoPF8RQPc6iXW1KuxTX5npF8GSGPzL4RhWs3BgK7BCZPRAdbG4iMbKNBroUSVCiw7mR42Y",
  "key34": "zEKFKto5t4u8iyBKHaornvh6cXAUo16L9z4vnBnRhR54gV8hd8uv7ibpWm6SNmLGGL8YEsKZ6U6ZtYrfPoZ5vVF",
  "key35": "EPQ91e2Fg5cF6tQS9koeNu6kaKjcQZ6LyhJpeuQzhJENGPxmrye93GLUv8kojFCMaAMKTRbwF3bgheAtjxNqeGD",
  "key36": "2HsVdoSMz8MzUG34csvJ5rfX9qZFjAHT5EhZdz9gcYoaBviz9EotqJgqx4B4JKf5DV4FgXMAKgiHnYxAbHJyMHZa",
  "key37": "2kztbCfLFYCbkgRZRCZDWQzBjq9EarJHPTVpcSt65hRsztSvF6YwCJjsRS1bhuy38wATec974qLwoeb467c6Zz3A",
  "key38": "3kxZoTwXFJexBxFoyQoJEGx6r1P4WL9VtRQS24J4WXv5jFqT6yCvppbKG1u9GiwvXWRe6mpSt7qyKsvXvEpCsosk"
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

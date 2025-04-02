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
    "49xdqK8VoZGgEYExMieCL1YPUJEXwGkB4kM5ddFKBX8ToJbsmEBXkREK3EQiNygmrGyrfRKDwP7DVFAM1NbELTkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUm3CBoJdAjoQGqnYBN4qAu7385tpPJBiDV3Dg98hhKsyivu31fzGH21fh4Khn3LyYTzLoW71XRJUCZqmPsSZex",
  "key1": "4an7Enp6D6TPmD8EgLJxbfYCBsj8EMoXU2VdwT5Xs7VA7aLXKUQZhKnvymmRvT778VKSgx9h6gMVdYgkjaNwEmb2",
  "key2": "3iCi3XtsVDeQoEerPhP42zhEro5W8mSaeSsFGyiUGSXpJnuaf4vkSR56VZLtJQr2vsgGiDSVW6KhcGkeqAPx2ZEK",
  "key3": "4tW9dnrgdadrWzFUFsZ1B3dUu6egHfa6NRzUEq4etQPNeA7ubrGw9Fi4Rb4KR5TLShsMrX8hTHS5YjpebQCxeCj8",
  "key4": "5ZHiF2Veo46fpNZWkXfMfjkwTUJ7kX1AixZthTfHUZiBWwhdWZEnHizqpAr1CdbyRYLaCZeqN4jdGU23YRUz4p2P",
  "key5": "33vx6ren6B2DnPm96Tp1ytrqbuPkBoCB7P4YrHD4K9rvjjSjFwgcDHnAfveo747zxu2XFW6tHewQFsa1fj5hehmm",
  "key6": "P8Lk2WFeUod4DpJEC35cEBb1rN99ao45ANHZccEmmCd4yDJeCZqAvScCNYbdj8uUE9z8iKKsVr7rKdNPWUnMaPL",
  "key7": "3QmXsh5U5nEzZEyow6pvp83Fyx6wPHNEUUGzjAD2La425Yj5xqRPesvSRgpuVX2TWpUqXQUZixVdQcLzrKEKDLGM",
  "key8": "KPN9RHdPfcDR6cynhG2xYbWa1PgAeYtzEURXKoLtTqYyPDUdrhN3cSC4g8XTUw8o2n1L8LEM6gbeAcYz42mVix2",
  "key9": "2EACGUmbrATo7RkqUCzC9hEJ7xTqLs34VWqK91b6WczfJn2eVekkMmuXTpm4MiSp72RssP1eAMJ7px1gjdFBcPTj",
  "key10": "fjh6K8GwzmiETFeYzz4bNJ42QPZf33Nkmn4K1QUvQrSbH7JoNTZhEyG93UhjrYefDiYz1P8oYyUJgdqzRKmtLTP",
  "key11": "4y9eoFAGq8SAofpn95QEc4G3nMYzP48fekkzuupHFyBC5ZgePnjvjr6qponScC2LdbSenmeQWB5zVLyWNfVZnVJK",
  "key12": "3jGREtitDEF3kEiXzpYovqvmyZjfTUCtxPBSfk2H6e357o6jGb9vbNBeDfyrZDorqCvYMPwkE7C9rq5ydwTVaiaT",
  "key13": "4frDB2N7pxSz3KQH7FhtVjSwYsduyHXS85oJHQqvSMTauRHERA3gmr4cJV6YX7BvQG2oR2xjmxQ4CLqhUFUcX5M9",
  "key14": "3qjd2wv19NRvzqJpEYbX5584su4TYiWEHh7sLWRpYACSLpHAf3xFgJMvTf2xhh7sJUr1WauUv9SugsVGGUcePB9r",
  "key15": "4VSYAC8eQSAsAGMFcBRpKxxKVhEDCfyZcGTVtENU4dp5ViUcgVLbhXjxzW2GkEg236RQ9joKMLKTGKMSTpUPCWSx",
  "key16": "2yBPNUVpSaWvKwJEkYBVmfj5Z6ybeSEG5sXHRz9B9YMSKZaiyBQzqxZe4HKJe7CamCDd3niVamGNmMEP3fjFDPrj",
  "key17": "4PMVnr6CHeWYVbvrRcHC9Qvy6iPFnF7s4847k9kVTeAWThw9BeKjRmAqC1FWr2AUyomQXDryrZCXPe6YPuvQPJ1m",
  "key18": "5gZMuHZEdwbZzT5CWzuK8qWPsta4FMnhdqoSCyehrtNaY7kwcR1YPHdL6ft8HSMwW9kanoBaMLEz2YcG1qDWawVz",
  "key19": "3KKGnhXBjKTT7HQdfQnYEsM4y7yfjCz8zJfg6oKFrGizZQzavi7wK9g4NmT6Az15pvrA59vaMso1SpW3fFzsBy4T",
  "key20": "2Sm2z5T3bqVU3RcZ8EgiAGnWzRQzwf1fYf2bNu2KS7HaVJ7MqpJfoLw2z1gR5afs5KJQ1fnzewn7h1kSHnFaypPx",
  "key21": "2HmWXf3S3feoJiM7RBgVUvH5rJqo4ktD2jMUiD8ZL2zXzVaSNWoCwnpdK6hmfNmbKiJbGwibA3iM9WcxSqhmipj3",
  "key22": "24y4X1HpFpRH7vSrkxaZjqLvYUn2xUByLDrtZLEt6fgRZzy85744SM4acBnBEZXSoGTxedXhjVfAfPdPLCgjGt2j",
  "key23": "3yrQYS2eyRMsdatP8S7gD2Ewi2AbUyC71j4X5kLG47GVmzjECvcx22SsnDs5rVQYTeCPPfWApqrFDofMrQcvz1Fp",
  "key24": "3p6Jq3Eb2XMDaJ2Jnvk7Mud2r9BBaSfoAw6u5tmtdzcvUQj518z7uUAnusCiMsLxBXxMUZkr7TaycPLLydnpPYUu",
  "key25": "2SGYJCq2TiQQPwXdS2uyRkCx9aNweJUBa4hjA84CppstsWCPwrqSu9g6goB78viJNo3TwsVAB7Jyfft9B3aJuKQv",
  "key26": "5QucaeABH4j8fQQpKPWEqL4hkKUn4CX8ww9LpFvATwdXUm1o2uAGKbuEgRuJQ83udnBVMvc9HxSboSun7TZ6sQ8F",
  "key27": "3XbLz4oK9FiPgg6G9mCzs8WN7GLimYGEz8hJdzJ5PsAy75QoWqaQyAiRx4z6hdtzRGR5KYDQnoAtFdWsWknmo5rr",
  "key28": "5XZbKGtFxnfNa2ZuxFQJG8JD42we9p9UX4zQ6UMbtFeqoPsSJFKypJHzHgLLy2ayzCNanYmb5EvGTa3jzrSLj783",
  "key29": "5oNjxWkszn6a4XWwHPfrUTTd73Znde92FjGPTbVAtEkNEEsbd78kTC2FfBafgSsxkFSBfeLRgsqUMcvdWBP9YRVJ",
  "key30": "3yKCuF1zMqN3auYX2dnxH1NvwBnqGeFz7NY6GjrHiycMFMdHS5cARhGQjCxvUQ8CCLS94NcERVNdp4R23i4hAju5",
  "key31": "5RwfGHD36WU9a8Zwhni7PXob3nWeBL6WwAamuMWmMQ2pj8z7K8TeEe67emdLLHhWyNqYtY2NwaQKbjaXWRz8NHMA",
  "key32": "vuaER9npwwXfjNUCBvb8yuQKSFfhZeMC7jwERBePS3HbzSUAzt4o3NeCuKCjBRwpoW8jmAwRp6vQAq2jdhHfr2B",
  "key33": "2zZve5uSd68teK4WetYTCiUDKnpntJ76ppGt1QFZCHzp1YDiHfFKmJPbcXKGxmqPnxZf2mSv8hNQ9hRzjiC3sXRA",
  "key34": "1FnLR3Trc1inokFEUsu2deNyo2se2NGahC1E9g8aD5kTvHGWGPHsewqe8EavqyZ2hGjrhwh7f3QY5sfncHHi4aA",
  "key35": "3WqWKqyE7TBwxSEuLM7XV4vVTSTtfTJPp3QKjL5eKNfo9HvryYjhVWVpmg9Txb3LXsubhQjQgWqLSy8BEKy1QFzM",
  "key36": "2Ckyss4mYf5mAaQbJk1nkJWjwDPxc57RBvpbVL42LpC16F86Pj8FLoNVDPuSd48t8VTEppY9B9SR7oDxUud64aDC",
  "key37": "2fjrYABQLuMHBbjRS78gAcYSkLhJ8z6oAzPVfDcUmp7oeMAa2ZrQyMgPnTDvMTth24yGK3Hwcx5jhDbyDPvhaECW",
  "key38": "5sSxzuhummQ4qSR1Z6qUrPr3zrYGcYFduJe8uAcGJen9coeWjMHNsfGTn9e37PcKysXJaPd1upABKVPefZ4Ar3Ur",
  "key39": "42WP1Nxib6qVeA1K1scvaSmCCcUx8QcR7JDLLEZTtm2UJWRtVxgF1xDVSb4o19zLeUNArZBHkcjtXBmZcX24CHx2",
  "key40": "3rKPJh7cCvQQnNFiHqwKsCnM6mRMX6uSbRg55tCHWWFYRNvC5q5Xf9bcPzxgQe1ME6DRJjyxfRxiF2XcCXVzFeJd",
  "key41": "3VXxNwEoLLyp8Sk84TDQ21pMdZiwehA2oGNNamqcHnDxjQbRA2bggJC62tDsjRmSAQT2VDS3KCN7hu4n5PhtpbwL",
  "key42": "qwUV8vzaQAWiqWBuPq53a8m4K9yH1TJs7JXP9k1R4NDWeX9VXz2F5VByHjFcm6HkenMzAV4xxmZsepx1SQXSk3H",
  "key43": "2nyqhqoi9hBsFVGdy3Cx97dm1e9poNTyzp3RnUqS5JUiGfELTk8jDtoF25Y4vy3oqPqU3EAF8AFYhE3R8ht1cRfg",
  "key44": "aq9w8aRc7qfknzigVij4iM8fZHxUhdTz8ksMRpPgrxiHS8PGXQ4i5XgMZQhuqZBL5yVGvpvtVBFLP5Go4gRHgpb"
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

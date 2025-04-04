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
    "61MCzLVfkRfeurkcknJivH8TcJcyFVoWuxtZFPpq3YFbZFNGTKv58zHvB4CxqHzMZwdJL3D74CqwHaD2iWhKmcgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pMzvdeSmhdyXZyvZ1cFvfpcgwPV6UvxzukNBuGwVtr4S2s7RFJnkzvoaCWBuPFmC8mfsF6jKA3o8XixRRg6sEPh",
  "key1": "4E991c4NKD14ut77h8L8a4TBpTxVgXoW9c1deicqGZioUUPj2wehVTHXYU9LuHVnjkPLoqgoZETMr5mS1x1XQe9y",
  "key2": "5MvqoQdrwoMgcnvdz9DusjwTHhh2zxkgzg4xByJvSyiUEXKNYjvPsUvTHtYWXUSix7YCm2MTJqaHCQbwPS6rYyNz",
  "key3": "5uercu1dbncpJdHnoRgZS5bKXneHkhJZpkK8rY5GsAAaMx3aciPupGEMrYFPTzqm5jYjVvHKBuKvQroEt3qsKPfg",
  "key4": "3GPqajqTu1L6cDuwAqPR6Nt8p2THyN4WkRKLcYVjaoWEPLqdAhyBfLjdH5eKFRGyWrFJT9twBXBcUoCpToMBanxw",
  "key5": "DKbLxdLRD4rU14HnffGFaAGiaUHmz4UTzJKKimDSip9jphLWnCBSwpg3mQiwaSpDp2HMkUDuTxQpzZX8fk9eLfQ",
  "key6": "5g9hw9Mc5eT8r2YrmArvxSVGjejWuakzS7uhWS6LnX2wjuajMQetchh41HZP7gkW5XAZZRtupHFWCQY5eVjgeTuc",
  "key7": "uzC7LeKx5hqeTWirNS6aqMiZL5WgheMpKZt5fRa4kpFmtpZevwMJ61othfPo2DGJd7wHiduo55vKxztbL2UcqcC",
  "key8": "5GoQ5Nznq2YPg6B25N56CJAxT5r3HamTsGKQkXkUcbS1RHe8eB5UKAcS3LuziaozHh5ubSUQyVD47EtK4o55BfVK",
  "key9": "5FGgSryi6LAgEBNVXkJXYbx1u5cdxvvuvxpVJ2rG565rcUTZeGJWabjqRunCoiFPMG7cVKxELFaEWEHAVtHCgAsV",
  "key10": "62jQwWLLrJ5VnLDvLuqbyh9P1USg5wgXyHE54QkHvd6ss4UD6ZUAyyQaPyWnUpzFGauYdCuJu9vk3Lqo9iUQ7X8s",
  "key11": "3oYG4q7NF9PiAHVBmSwNwhRRCPYUbyLrYrVBiCvTXSSWRsFks8prvoWrjr3ZfJeBqr7essq9vkxuan4ekCgubPBQ",
  "key12": "2Sqwvj3sNB9ne9NqBratddFXnfEsT4i1V5P38AxUYTBqYGvse3rn5LanP8x6kkLx4Ln3Jx4dTjhirccrQaKuV2eW",
  "key13": "4hApagrGhrJnZsBXcwBGmtVG4m9o2a9ZYGRkLgq4DLPmWBVcZuosw9PDqBdPnGjbJ9Dxb7JtSdkXpGbnQksH4UaN",
  "key14": "4YiVypSn4iD52J8LsjFHNx1Up9fXy9f6tF1F7DvNeZ8gFWVGvv8VAMtAkVrg25xQFm57oz4Q8jXXz1y33ECQeZEL",
  "key15": "5foKMHHgq8sMZXKay36YSNmw9tv5GH6nhoMnhNnkYn5KhnjMypch8oxEGxahXxZav2wNYPdKkBt3JrXwYfhrJcRW",
  "key16": "2gEFBcczRK7yiHxwo8TcQ8nJa7ztrjfhmiWx7MGwG5DRWN4CCqur5WRpjce25RemU2QLoFyLPiexpe9YiBFFjNBz",
  "key17": "5FNEv1vvepoxVqTXMPaYjCopSN3KBKM1etRSnv9WcxAq1cxAjNLFS2ZtD8Qtsps1Jqbiw611MquDLVk2KgbqpagT",
  "key18": "5Fkp7Cpsu1R7qQjesn4BbBm251pq56zq5trsBmp184CkMAjfeVFyrjDhghcKpP7yfoYsiVfP3v9DSm8ibVAwgy3b",
  "key19": "3wJxVkH1ZHN5iW8jxJLwdGCZKSGJRE8Ceop5R5m9MqXk36Tv6e7SCiokTwzXXyHGSQyMEf76jTJ2tcGk2BYfkKAG",
  "key20": "5uuQQsTEejenGHyFQstUvd3vB1fJNs2H9QhKVPjY4JLC39vWFJN8YeiZpaoDLFR3iZ4n2fT9bTLBCk3AHW26kRuW",
  "key21": "35aAjyLYXtsGa897amy1zK7hdxxXzB2Dni6ZGdrtL1H5LrTQdSGqpVm2RfRAezbx9wVRWjvrhVEmiQ4shZFHHud2",
  "key22": "4rZzZ8LeQ3asSgD58HTodkgMtiQmZiKP9XpuCLeeewHdqMLbgjxSFAvWTqcxMphJC9yfbTiKZ6gkLXq59QY5moVB",
  "key23": "5Qdc8vVeCFmnDGjEmZ1Ur5m7yrTnRf5rrRcPpHBs8VeZEkARFdTcZxbnc8LAmdaTZcuDUNTX96atWTNJy4YLWP9P",
  "key24": "3wUFVfBohYh7vQ45cKVndmKNNawiMij2ZWGzcajX8d1f1ZvK7DgBga6CiaNoxCeG9rPJaK28v7XPCTv2RqCGnf7d",
  "key25": "Fpy4xVtftSzc7Hx5eNfMYRNph1wmQVJui9BJKwYennoVGX1n8UWkXFrQo9qJsBq6f6CWw6snDZjfP5UesLFUY6G",
  "key26": "37bwsLi7LjZEnUX2Fjs4djTjho1B7yzBLCHHTccrHT3KESLfJ6pc7b68hNV7GHXwrMZVPQNZkECLNidGY4aCeUyQ",
  "key27": "49w9ym7ykJvKLTXdAudHMYtMbXCTFiNuAKEBeZPcTZGU1wwbM8F899kn6N1y2a5gjwkSyTDTfj9swcoQvjsweUcj",
  "key28": "4oYopgfvhw1W21hDmGFAgDBkitbbTYVGcoM5uaepriyg7aKEeREE8HTpQhAvZgbTJSAuXVVCKvrW8BzQijiXLjpm",
  "key29": "3C9nmphwYMYSBjtWdfV8AgsMC7Y6JrjjhUneTqcHQboL7eKyuk9uaPjq7eT24P8jtxC1JGfg1mUVms7T8DpReC7y",
  "key30": "4YCbzx7eDr1Mdh8qS2jPqi6AtkGTEiRvnShU66CV5GwX745U5zEQnBn1JWb88CjE88BZUqV5AWvZNajM7mkYjtJy",
  "key31": "27mrDVTT7A91xymxXvobkuusVfTSW7wyfGt3Ym6GYkzvJhNy8YruD7dUpMkoWoCFcwohhNywCj1U9FYYiq8YBRo7",
  "key32": "4TqfzJL3ov4f3QgQT8qJT8VjuUKryGuzbv3ULrXUj6cbMN73S3surmJgeLrvD4idZ5Gknf8f5YFNBwSBKKbMkBG7",
  "key33": "4xAzLZ1R4ELa51yY97f77AKqhuhBHcjrjhomdhaScioJNeCkgY7Wo1TLHh9SxarE4jrCQUR8w4X4V3J3oqjqavFq",
  "key34": "4XbgKRYXY66oZsjyEsER8Coi2Gdo49KwaFKVMm8UpKH8gKsQ2xenVykYViqUaLsMHzqVcMLvRS5C6caKEV7M9vm9"
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

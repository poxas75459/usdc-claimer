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
    "4e4pgTnKFEPXMovEXQcvj3par4UVFG1SszvCun7nWuqzsTEhE44aXZxVtop2N9NTucWBTzKaLbx8XyQR9xD5K1ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrJt2sz5sBYDCnJKRzPTMb6zKw8QbtqPhgQ3RouVREysDhmkdMTL1vbf4viF2FM9m6fZ1vHfmA5JNgCcJGJK7zR",
  "key1": "5P9rWmh9Qf4CvDnDEszUwdsDc6DppVd5iSFsKhBgLunWiMprQE73XuzM5Geyp2Lq5d88aBHjvV8TUXwWHTWLRVG3",
  "key2": "4aQ2KDzFdMHGfA1Uhje8wo51iiYCttV5KdsJffPu8E8yuEpfj5DrhRut1AumKAzMGmkLK1SNrneXyefAd2Bc3DuE",
  "key3": "hTaiaLWvk7BJnU3dj12Yf5jxWdYJR4Vs4YJZDy6HDn8MewGdqTiYMc2ZAFB84h2LdDcNqGXzBAb9Mar73tn5VFs",
  "key4": "3nrr6crDRyy2KBeD8KSYmVoogc9cThSNUsh9J9QAMS4dspJUSZZqABzriy3SmNK9We1cVz1z49bUEVXm8naYPbo9",
  "key5": "5ZBA7zp7yndjc4Gwe5whRnUyXRkgPz3kEmNgQiDAwshXtRW9B54W8dWkNCMdx9K92Go5ihC1WmwsuvZKH4pB4vY",
  "key6": "2hyCxYiF1dEz9v5MnjVg8xjnfWYUrT1HggcjwEEsvLsSX898Vhc6vNRufywczvZM7NWoRa18Y134Kkdd6btcAt7v",
  "key7": "3feckqDpea4D9RRWfGYrmPBkAW9cJVjMcszSKAErpnXosHUm9pr5gCrzFiREm5AVzwvL5r9SXcUMQ48LKi6RcP9F",
  "key8": "4bGVYfgt8GTrQKtFgzgAsGwoqCe4ntt9MuwQo3bfPf6esk57c1sgwQA6M8ctPJfvnoj8nXkb5oTa6NTCnjNKPp2B",
  "key9": "2Zi9nxf4uq5A2Z5o8PCPXdYNvQ3X2uN9LvDsaY9WPkCJV8uL8KnD148ME1PESKTTfVDzoGcUGLhN1RuXf2KaaEJb",
  "key10": "3zJXPj4nDLNUHaNTgdNm29rPyacCLTDjdnZbL3CjYfEBTTyNBKKWnnGQetCyRyPH4AZN3335w2TbBC6rDazXkf6N",
  "key11": "wwVSMYww5aZxDo94fmtsMLWEn4ECC824dGEi8P5npD7bs9CiZMcV8rky6mHAT13jYmvmCL4HjmhMi7T45k1TQsi",
  "key12": "2SJjkZd161aUd3g3CDCMCoQisJ8AvEHqcFMAqrFhYWpv7huFWS8acrvSWYzEw8nfthbAANYakg9ki2ooKP5rKTYe",
  "key13": "yCtNz8xr8TdwSmNyZxKGqoNRoVEwdAKnJeGydYnFAuaBGJX16JfyNCG59oUsK2vNhN58DFjU7rfRJL1Qj7HMPSz",
  "key14": "45PF31ehT8N1Yg9434xKtUgCUcde3FE7JqmKw3Zb4eoNwwz99KR8z2zxShoo5KCxsoYiRw9hxEwRRd1mxnx3UBKe",
  "key15": "3pmqUaVAUZWWzfaAqaKzXgmRHBDLY5s7ZJ9PVMZRSjMS8JoqMgoDPwTo1WvvnvyKw4Xc8ZEaTEm669t9NxQt2mnE",
  "key16": "2JnzhshJkY18JxHx5pxcnLYndqUrVsbjexCLV7v3sVjfvdmHMWo4R8nRR91V3ADbLoGiDtqjMr8jqok99ejsrjHU",
  "key17": "2ovUURRBrLMp3Y9dYmKh8L5mUjDAZPqNva6VhT2z5giqmRiprX2YZtY8bApgyb5Z8QsdkcUTvbg6aLsD8KcqVc1k",
  "key18": "2Ktt2h2PnPRYRxw8UmyNQncmTsZLConDzVdTyGKmYUUekQmCc4iqwqchaTKmtnnwBwr8mthuXKRabeaRtN8PHMBg",
  "key19": "3AFuYijfqcmDFN1iAnEosYZm7jCbVxGvn4v7Wy9w81ZdNmzjgSsBWz2Q5dJeH2vm5RvcGH3zUpcSAar2qiH2hkVW",
  "key20": "qXzL8zi9Hx3uvLXFDRDpUoJzq7KaF6GQhvMfLCiD4Mk8LaaXfSuNa5ML6pScS43ai9Q4Hi3UTQVwchqS1TYyA6Z",
  "key21": "5pqwJ2R1EMWzFWrPJzPLnQtFnnR3XNGYEAvzZSDWEKqax8SZu5cVqyoKjRTFCcrBPEoqMj8iyMLeWKW4UQjdpHzg",
  "key22": "3YfLac49i6k7f5EXCZdAfmR22eZmvhoGegujP3ynBUuovHupd9RyUHoQoy7ujQA2gUtirBgZkeDbCgitxuzqiXsf",
  "key23": "3ZGMnMaTb52E4gvU1BYnxdoUp5ecrEyBv7iNPYx9ekEPqtP5wf3itoHicv8zFsS7QdwMUx1YhYstktef6d37qASj",
  "key24": "Phx9ZcWDGv9yuNSwwH4yCkVzaQk78Lj2iiUfdsfZrtX1XbvtDaGQY3GUMTJUuaNadVtBu2gGFxDKyS31hJEnA3P",
  "key25": "3JQ95XUazn7YQtZJjsVrwZUM1gHb6JgDUP3JXnDwsJkLoXDXQfpGKAZEGMqnvQQS5nyzbevC2WdF83cuNVnY2gLT",
  "key26": "54NDeAjCdgnN1a9YmhJYFcWCaCbXahYDna5A27AGWkkk5ppAjNkxkAoQrBSdx8hVkM6YoD9RAEWTjhQw8K7QiKk2",
  "key27": "tVrsQXTR8aRfyhrF3P73CqHHVW5HJa87S8juvx9Wa2aJp2uMDDbWyrFsTEVaCfCFGZQgZ2ZDnALZPAfhjBTUiVM",
  "key28": "2BoZNNTBXLHBg99vGdGPsuXBRkzbRdHGqRMdqwYdDFe5PsaedA8iSH4zNSaQdSgAGbvQd1NoTnMpAYB8EoLQptGq",
  "key29": "4P5SbTVvED3AKUVTwD8Ngm8Z2H87p3PmB6FYhByDFY5bq8yoEHLGLzPg8mGm15Y9QHd9YbRGHnuLnWFTc27GG3EG",
  "key30": "58sLVBsxqvFN7AXtgJcxfwBh6C1VFRkwa5rSuksoCXa3yUjwqtSxZPSnvN6HbwfTWa5symDxbzQshVUi1d5WSmp",
  "key31": "2gWySYp3gB6gUSEQ5oZv5qJwPV42PBu5C9WaDWzz1TXtYWeMayQEJGBk2LrhraBJyr2D1CjozgAZ3opaFZW2d3QU",
  "key32": "5AqdQfzhWyTiMAfPwapw2iJjj2caP8vtYapEVEDVzGTSNuZhpjRrjP17fnMsocZ5jeJQb7kEtpi5cciTB6zXizUR",
  "key33": "JywZA78izQDoN8ttxrcTHhFp99gjYVr3zD9z1BqPhLe7n4CYQWbrz9AYX7M8kzbyLL6tsuFxFfznwVoUHZHAeH4",
  "key34": "32tAXz8DDQVUxridiXBd5qhDknavGmux6u82DYhT6YV7vzPRGWpXL8fs8zqnTrQng1AMNiQEXB5zo8k9YoGiFnAV",
  "key35": "3s1P7vcXnbxGrpQmvBYotXtCMmxmkTWrdMqEn7Ur1ZFXKnUDx295q7fk77zeTYqJSDbQMnmrqntxgHFDAfrvrRSM",
  "key36": "2PDfbwbfSPzi2ZLK9XVySqjXU3evtfZyYiBxD3WZefyaA2A9gKAA9uMfJjF42jyd6LxwDjLXc6yBSNWiVozwuiqC",
  "key37": "2Cax44rrTzCjbpKeCzUTDPWyqRu7L4QPpSXYcnVq4Efn5aqq1j8zPsSX34S58MX37fRtFnnpbmah66DVKLBH8tg4"
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

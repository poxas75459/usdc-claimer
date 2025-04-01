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
    "fZFoSHxDH7mmZ1KTHgWY6oXNxdXMCs7zRze63c9Jxp4TRg7HkJdj1wYFxfhNEhx3k8nY2YPGyNEADtGeSKU8qms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6ahTBnN9yWetgXuSCv7YYaKYjKRcEKcuGzhUpJVRqeAggPLVAFCsus8dJkMo4Ya5LQnSqGvXcxGB7bYRk2jEW8",
  "key1": "2NEEx3gb6DBVdQ7CeKcG3e4wX4dVX3Ey4gb63EWxCQrZRA2TGhahFVUrk2Y8W1pwPnGaAom21Lu7u1Rqj61Ak33T",
  "key2": "4d2g4hukX6LAiDhgF98Wv7bkEyDsUPFoH8hCVtdxDq1FmvAY2urHD2fG2Q8FNquMbzFqMpLk7ueAJfwYhmCcP1vX",
  "key3": "64iJWzqAYihJrx6XNfELJMVc4nAQV3oU1uWUDkg39iF76SbtFpwgHMAu5RQ9bvZ7D2xWM2jpNzBNynyQDTWCAPCQ",
  "key4": "5TeV7rhmDE3sfWuFBYf5Z3ne7vPdsAFQ95quMwvp2eAPY1LRA1VpMoX1QA3T5W7cpPNmU8o3mZxKh1HaevRLowhR",
  "key5": "5Tu3HquDRoVpDdrZPo4xnWmTK7P5d3qzUWSBPssM9DVNX9si3aVk5pxxvF2C9QnjpoHyF3mvLVwwyfwJQye8TbwQ",
  "key6": "64XSkRQRWKV7Aky3JAqBTTC9xg1PGC8WKustCytDqsg896yv9AttJfi6m1gvNStYGS9785BzYL4rUAtn6Gt9TvsY",
  "key7": "3KQFNxsyCWpBQmapxE2Zx85bfoTFY3b9GTaMV7B67FR6WwXcuLDJpPQSfxP9F2w3Xs8aEScqszq5gMEsFWbDwAz4",
  "key8": "5mEczMySDncRmjWZ8L5VX1NtqYHc4KEUGr8ddfHMdpPXdQiJ7BWoJDxNzJyQSjGsCuhRoX422KzYpAurByHymYQD",
  "key9": "34WwyVUKdKsARc8Qr5f6WeunXcW3PaVQVR7cZqkaYuFyyjbVTM1UVuYcvEZ817afxcGzyFaQn8vZqFmRSDV9zekW",
  "key10": "23SYaGVsB5btcxG8T3szxe2FxywWzyV1yvYfQpfhoLambGrNoEL9Z1JkdQAGamvA7yHcEVENQBi8yCR5i2WC9guJ",
  "key11": "3xoa3FqfBXfqMudmnKCyC9H7bQwKtKJFcHwroSZ9RxfJNnptFMn55gXHgeaiS3H4SNmjnuTWrFijjnEhNtVMyedC",
  "key12": "5dDUgWrPDHw83E2GVngw9ZPm8CJuTG4aLc1cA41FnJ8dzMKewZAcTYwBmKAdqVmP6AV7jfvuGXFT4b2ed3dHpS81",
  "key13": "3vBUCtMZPJ84iFfMuqJ7WuugPxsb2eBgMoYpbMu4yJ5rM8T4LdcmKztS1S419joDfcyQ1KhrLyYaEmJWo9duPZCt",
  "key14": "3yZADyN9mJRdsYHd2CB1Kh84hKbJkJmnLY4zo6NRHJmdDpbMk34o32fNxrF6ac8hC6ndjAM1FzYR6WiPB4CYKuUn",
  "key15": "4ZCjEhijWUNkVhnT7x53y4dwfHDu1PRdKvdE3PYWYzWMEV7cUhzKAGXEEwmaJfTuASaD6uAmeCvxgBGDe8KVVtiH",
  "key16": "2kCWhGbPFxvTJJtwxGeCSMhFgaZuqncVaCasAkZbo6QtWTAnVYGwCirFtic8RRDarh32jBjam9x4uakLoie69fwJ",
  "key17": "5arpGXBU3ADebL82fiYCQESP3Vbgb9FChuGNMQqoSu7TQQQebRVXb9TF9FVUw4pSBYsssH3XY9ra41Q8FKcuPtbT",
  "key18": "5v68ALciGGfC6Rzo8jYuzWGQBjBUVBqBqNCudK1buezw8vKU2EDw1thM3NfL2JmXHybYhkZWJESno1hhw5AWdvCz",
  "key19": "sJqDiDFxonjJomnyhFS6YzisdJKrd2yGpw1AVhqtLKfTYYCE3oKg3pNza8bW82k3X3LFoTapPc5nSJDFVmp7gFd",
  "key20": "4M7BQSJSp81MqDrGkfck3TN6WP6p1ED6U1LLHBNtDnRViFa7eNCHPDSo4UVpri9BbZUhGBDw9g79ma8VgNZC4yhC",
  "key21": "3nuaRNMeLJJb7qhBN7ShEFGfof8GAdr6U8S4mh9MSWNZD4fbuHTkaQ4EwQDvnsZJXRtXeeypzg983B7aHTaXL3kF",
  "key22": "3YpcyhBvn6SSEMdYqiXvFvvZKrecMdhfEd8VTu4Vfvwj1aUW2ppCeQDkyoRvcK9mWYzpRK8YVcSoeXL2oLptf83j",
  "key23": "LQXXk1JdX8kaHBqzWJ5PUjZYXzEcZmsp6YYyss7mf4hSTbgocuoY5EddwpF1J3JPoPrMzkPq5nhrwTcAXuG21uF",
  "key24": "4ptfE2KoGFJAMcYKdhbA3D2UXgmM3AExBmg6JeRXa5Cp8qdNMYWT6bXkWgJYFNBDKj8bfbsbQB9PT9kHbdHSHu1M",
  "key25": "5Cz8S1YJrzndHor9nMEAYLpgjJrrdW1Ptos6JrXmCo5DT3Kf9mNRbnLo9Pwg7PaBJ7WtyNaJBRctJS8UnLYiwFfQ",
  "key26": "5bbuKEfvjKWmwwJoAsqY1fXFgpbqv1rdqEVu49PVXNN4Sd2nfRhN7MGNBKV134Bt8nLgaaUThGSE3AefTcLHm6Fj",
  "key27": "4ARvXEwtzSKBez7nXWtVzgRcqMRtwWriejzX4qY4dUA66fz9hkSdXKa1dgdcc712QYW8eCUqqRUAtSQHFpCCjEbn",
  "key28": "4BdjhGh1rqc2qvkHYCngJnfvfcFQTU5HtSw7gduvvNRAqipGoYFvcfH46eYnv7tmxEpKZy65ktofT8VN3d2qKrTm",
  "key29": "sYgwz7zu2aJqPX35JCM5n61mK1UTugTf3TwafU4ovxZuZPwJf5i7CQTcteoCDjyz9hAKBDo6QxK1gtvw1qYC8ju",
  "key30": "2DRHjJ2yxhSDqAgLuYW8mxnHNGuwGJP4FcoRb61rt4v7R4sNHsB7RsraHQTex2Tafwvfzrrd53VFzPYtnaaFnsZK",
  "key31": "2ACXBGFkHssPdXBCPgFhp63gk2VtuwUcPwu2ZrA8jr1CUdLfLs59vV75D6CkbpPeQAypojqgycZJKcLwbgDXqcas",
  "key32": "kLZ2uc3YMHMkAXKah2KUtaYtJZkJBkXdv8xKGN6FBBRjVHrgA5iLbTufDGVTQQJ1itY5zWSKeze68CH6GzUkt1H",
  "key33": "KEs86K1o63TdJhkYzUz1VfTnvyAYR9QN4WLsyykkxh1XKSk3WD47Ti7NMEGXVErQJT8oRtgVgs5zJBMDv3Cf7wY",
  "key34": "2kTpLDsTDHi3S454r6GLn2yGgBWFc2LAEUmmRAfvV2L8Z3CHY8txiHSdDYtxMjT9XFqKjwhSGtZM2XZ4GoexkqH8"
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

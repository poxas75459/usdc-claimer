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
    "3vib3LgpZgDP7xmC8WMth7e8JF5SckPEPPH33piYuEc9Q4FxXM19Fi8Yd4rF9dbjkm8w45Yr4vZFSMqkUVqnZ57e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Qqp2SwrW42sgFRTGYSe13qhPkZfRVvdHhJCpm4uBSvo6ZobtXJH35bEG73E7jGA1Kvf5GfDui8rL6BsnETg5WK",
  "key1": "4DCN3ju3cci4BaKKhpEDGTgwsmwaqPX1M2Nd3W9ewMJDv2noQsbat5uFdSMcp84eqJB24v1HeCq7KvArqBspYGBk",
  "key2": "4rpnBc1LYu2aT5DefpcHJpb7if3U42BuRu3Paqv4u4ixbqNySQFDYp23HK83Ymkvnowyv9VAucHZKjTYmnYzBfZD",
  "key3": "63TSs1GGZmxU2Rsv8Jxy8P27K9ef95GpFWJZDukc3cRtazCXG5SzHw73gYebWnjg7hMBHyBZuUL6mDVjDyLqmz46",
  "key4": "2zcTqXTR2fLozwPZrsX8V2DMbNYd5k5DKVBokKoysoYtG59FMfw2TeYQ13FM61B3e7Tk2WanArWfTMAz5xRxu8pW",
  "key5": "2USNWXs3DTKDsW95by6wkmsHAfCeMBj6iaEWaBijAV9CrsMGhbkoK9iXUi2avpUNE9pBbzqkW5fp6dJZJCbkHhHy",
  "key6": "oKToiUnDegyfFRBhiTasEFZnvrwmSbynvNEXizR6LGPsE6GbwXMN6LD1Tr8mAmuskBfewho2rYmhoSzZRvAjkpA",
  "key7": "SLvqdiJEyXjWaaP8SyHV9femCZXWj6oU5Y18qotv3BwUfKWTyeY9WdrtJP2w5ahzAJXmMrDXQu66tSjM2SfSyEv",
  "key8": "3DBuJePAeodaXkPHVUnfVnQxyok9v6L8LDS9TLDDERrdo8DRUgYvCcj2U4k5NMX1W3DeGQ3wMGysgk5XW6PmE9KZ",
  "key9": "2xEtqNjPk1hk3UN8THw4x4tbnyYQTMZxJRvVYhV5ZLAvVpTtoGrm4BpxLDsoxLSKPdDGoXdrb4RYjMYQKRJvCVGD",
  "key10": "5tnTV6nE9gnhKqt9LShFPDB48qfGiEfUP8kJmEZAPFzRGiW4fHomc5YT87ipL2eT4kwnHZD2Znv6TPbigzT9pGq9",
  "key11": "4vNQ9a3q3HhS2C4TBHGQ8yDRraFUgQTSMe5YG9EmcE6tbRtqPkwH5zvUWkGKwAMuG78EsqQxS3AuLMUGFsmbnNCD",
  "key12": "5mdNLBzwuppkFuUTsMT4G2Uo6pHH3ijDjahZhroNPfDvL5yEcWgz2cdm8QmeNsVxxVncC8jyG8P8WZpLKbaXDWLa",
  "key13": "3LhGzCBnvoxiBnnX3FC6RD1TMWrUDnLtu6Sa3dyv76Hk4L4EaTo9wq6jjdsEMMPec79BMGQPdMuudR1q8Fhw4Pe9",
  "key14": "31QYn6n827xjTcHw9VyvRw3LQExTwHP8uLNF3TehYDyViQQ2Ku6cJF6MK6ZXXPzdp7P5LXwqT2aqozDhWxMf7i1m",
  "key15": "59teCjqq6JocooyLJcGApvjBXPu6KDh3VzGqC83REuW8VVrm2VNGn6wmMnTFVRqKS9sF8V9DJWbwDPCXBrSyUBJE",
  "key16": "5F3gm4bExfzJipqvCnR6RnV6W8fwCDsmwbbRnrteCr6m4Wy5v1aeWJVPSTxFhVmpuYa7jyNnFT72t1kgW9M5DxLX",
  "key17": "5dK1jxy3voJATLhgLNcXHUHHJMGSjCeWi1cZyRa6iNM7wiAatRbinJCnSV7vvK5Cs6W2Fq6MB57rAUvNhzjj3k91",
  "key18": "2wqMvWpVASisgygqDdo1Ms1Z3sjLTYDAtGepsykXtyVWGYxGYafKDBWJs1DKtXvEMG1wPkY64LaBWrokyvNxVbib",
  "key19": "3Pn5mEUebaEALc3SWfdgUN1CFGvxHkdQ1jswo8Wi2Xb4cpUuabWV794gmBvfL3kLriDkcAJzjAy3RxmxAYZpqZ3o",
  "key20": "2BEvRw5ChG7VMfribDLqEV5GvBnw4gpyuMjniM12NpPjHJ1kuKycqZTKWovC713SwaGySVkybvBRJQm7dYZA9iP4",
  "key21": "2MFS5Kg3A1aKZRMwQvgZxd2TczqreFkAzaU4h5LhRskmJKo9cGpH6doL5f6mbByCBWsvtSVbqUuyaY6SqXo4ika",
  "key22": "2TP5QZ1JNbA63RMSUd8rE3czMauMcSM4WQ71wmFSsqe1ZLsCJR4Aj8u7D89yZ9f8gjytogNaRHKSAvp5RGKm6DHa",
  "key23": "4euGG5EmpEZakiAHRsp51PnNzK3xk5MCZDUPoxwSzoDzxdcDRW25WMqzZCkVUqQdzQQcguuXNaTXJuiFUtvvRzhG",
  "key24": "2GA6PFqSaJekdP85zh7JazBHaCmdHp69NkS7oqRncuJXZMjEwDfvc1yran1eD7jG39qzGH9xNnKgFsLUvcwpersq",
  "key25": "91uwGLERFU9LRMPEuqqgkrErqxTtV8NpmLPzfxmzMjLXW9NWJmQzDxnZwk6zG63gnwWGuqWKk6t5GApgNPLafML",
  "key26": "51SVEUmVqGtgNBzCdJcXaBWP9NpPXAZvZs1hmDcqJJMdNv2kWKhz1pRTFSuL1NZdPWVZgnXaJhGdpcrf1NXWPs9E",
  "key27": "3s22i61vcHU4NT5YU9oHGEZbjTmWDbVd8cvEJMsdmYszqRJNuJ2QaRqPGtUZMmJqKP6TxKVf3WP38eUpkMsyjp16",
  "key28": "n9roMhTNPzC6VeAMw8wXXzFDZVmJKC6hzonfbtzHT51NTkwdnqx55pvfUhZ9uXFdKo9S5ZoiZrjV4DV7S9bEoiH",
  "key29": "2hcTxdmwAAE4HJ86Xc6pTaXrr8CBtjs7xg7DdkTVu7imVM8N8Hg3V2TsLXRauuiWpaHCd7D5WQ6JxKrr9MH4qmCk"
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

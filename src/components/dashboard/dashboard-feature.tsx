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
    "5WxxarDR9yPxiALnVNc5rojn2m8eA8UBKfLCyxG8AQXRf5BxwjSTaM9zwQhNpa8tLTERNAToZgQe5A92z1BZPNPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQa246Gq7TpJn5gJtq6X8j9pvBN9vjBthhmmGgzWpWQm8kFk47ngDVa68aA3rFV8wUTZdErWLdnA8jWcfm3ynaj",
  "key1": "32f6UD18uvRA1k6gz8rGpKdnvvXxeYx5pAhCX14vqWkdR25vtYkUZ9jxYTUf3piexXeWtazWCq4Yhvbv7tjSJ5bJ",
  "key2": "4d2vkeMtBk4ZNCWg3X2pzHx59X3JdUmHHZU6mUYgqxJiL4pukJaFXX1hG6PcQWhuK8TC47cBXvn9AM5CJToBsQty",
  "key3": "Fm2w4kk5LSrZzeNoQBUrWCtAgPTGL8dankX5HXvjZpF2rRJHr7Q34irBh54rKBRRxrt6qEamehNnjpKXSFUg4qV",
  "key4": "5F8GZZJakJMG2pHu5TzbFKMKjwZ2ZHDAeBFbQzauwHpWsV49f3VLxUtsr1eCm1TMJQGo7qbBsKSWWn1dBkL8AoSU",
  "key5": "2JWbUBK6SrQRexXuAxDkM6ngzb79ik1xF4WByQxPHcENCKvKVz4p91oBbcNu3GJJN8N9CQubQcEovJ71GHZYYfU9",
  "key6": "31B3ye1okAPoRsUJNqb7SEpH9BTxdjcrq7PRgVX8pyYjQQfLR5uV9U63vFy3p4QrFfyjj8LH4H48cH5ZrVoRrrf3",
  "key7": "3yJZPnNGz5zJcjeTpYWvHGQt1fWmvfJQPDpbCPZLC7DHBMPgFD1qkdRbWvEiqqP3AbWcqvX7PMxBzBh7B2aofz7X",
  "key8": "5tWh4vtewmqWQ7upfFq9ZGaWwSJynB3e7uC7K2LCLKSi5fJH2mT8UN7eLCDcGCKQdXuprvF6B8wuTf3yudYkn9Li",
  "key9": "59RT1eobaKXR2uSuZo63vLYYFQVfsT67x6ve1zaYXqSmeBGjjH4zvVhRcbsayvEn7Psq5xc25aTfoZfD6gybHoab",
  "key10": "ujD46pnSGDeRCKwVmRSNyF8C14FcoFJW5KYTpMtvWfxr11yeioARdzBRAVDczqeoHWkqupRCuy9SxqJiVQRvMRV",
  "key11": "mAw4LP7rPcff6jbPDwD6Ef6u26XyQdnFGMttHNrrDycn9y583AKmAgxnXEhSwDiGpDx9hxem3UDByeuJPwuBfci",
  "key12": "2N6e7imeQT1EmrZuumK9AcW2W46Uq4D48ZDHRNUGFkg2nWLeAwpDCKujR4Amq45KTADtemfp5UnNoYMuzxAYu5dq",
  "key13": "5UDaSGLq3tYHfcjrvJzxuJvqzuMjbG5b8afyybYEeHThKyJ7MA1J9dCn9rLge3pmNgSp2M44p2g3RjxwpXRxexGM",
  "key14": "qsx4ykenxKMvyVPdhQewgFt9ARLDxkwL1oMTRpZKGSt29YTvc7CrAoqj4NSX1F94vM7vdwESrs6tidLUj23Ewdv",
  "key15": "2g1qpk821fSkS2zzCQ1Zk3kxqRhwz8wjjpsDeXabuM7g3qcXnGXUuRmbqf8nqj6xJsBWvakQvR7g2BENtjkcbaRy",
  "key16": "3cUfZQpg7eBdrZqU46gs5sgY91F4XywTf1LgCSrp6uNB2aeNxPdKDzZYppKmboRxxVqocirB4a7fXU9SVANWzGsF",
  "key17": "3jJrXSzqYg3KeTfvjcfdwzEhEK48KQ5yUMqvFE5RiY6JApPoxQoGT59ob3SLt8dDokKUVBHYw8gScxDGtWQuGUFz",
  "key18": "2rm5ZrwgCzQWphyZ1NcvGg5iZr7NygTg9MCwUZE9fLPBD79247voiTbF8iEWKYh3MBycEfwA1rWhFmhTgoQcE7Nb",
  "key19": "54AayHv5u9wo1VgHtzSkHkUEnrMxeu2goshyySFnQzE8ESVWRHLGTU7svemTc4gGier2paJyKCHSK7H2sA3gP3eP",
  "key20": "4dx9BRkEF7ysZuyj8mf4jw2L3D8iuAvW8STzW82T6UwVzhY8xcQS2zTRk1kgetjEBut6tpyyRDAy54BWj2vxV87M",
  "key21": "67WdX48SVTHtm91CzMX341zzc1vPY2paYPoByJTX1MZW51WaiDUpSGGF9ftjfm12XVWrbAzv1bycgFT7gbWos7ir",
  "key22": "3Vd2tiSkakENUwjbvLk46tvaEKaSjPmrv7wZ5nixZhHNrrghK2gVeU5c7QiFHQH3JrJQoaFV9tHf2gn4xR7tADLL",
  "key23": "34Tweiu23udxsHXLMPXKpgb7youetBpPWhAG38AMJGrqKuqNZP76rGMdFFqkAvzWMcFz4BN83WZanyPLjPXZPtNg",
  "key24": "3CsDTyPyjsUk8FmQCR48dDYXRVTz7GxFMWWDgnUPyou4j9vhpRen7ma9WWFrdKRDJWLD8mQH1ynXSaRY8EpvkrrL",
  "key25": "5N8JtGntX4F7HHzmbYvHFqjZPAHHTdso9zL9yc7abog3nqRLjh9W6UyyxsPL3YueQyL8RzswWnxGjyu6KiYHGXS9",
  "key26": "qD844LWgJo8xchGAA2jthjuHktAWCFR1KYcje4rZUFu97aHbW1crPxxPMQykgf4a8ouY5awzt6u9vMqowKvCUGq",
  "key27": "t765m7shE7SD2CEzG87NiKW43KHzv4nSiLTewhYYvcQLWCPnQEQQCWmAcTbbJdGfT7Y59PCarpZjjXDTF9BgmPR",
  "key28": "5qdtHVvGVD3Fk7Ju6iPAkBdwSaNfVFNnRz6ECQX1sunkMiZpN2DjSDyPmhhXVmvaxL3aAGhDAMrnsY64kijoS3R3",
  "key29": "4ak3ydixfVMQ5yWtiDnoXQB1VnYtEJm8WGed47KRXrwNJQqAfU1wM9ymdPxCsE32uvfDCZ7KakwcoZAKkNwUVMux",
  "key30": "2ZWecfo9juAeYSbgsN1ipitzP2kfF48ot66TgCxEPy2AZDYFSRS9KKYS79BFZG6Dt1q4JmdCUMTr2s8N4AU5bPFc",
  "key31": "2LqXaQufQG8MbAoVHSuHdqPBYUTQzNdpwzo4QHiqcMXPZEAVBjGG7uUtwsQnzAPk45t3scSsJKo5xpfUCDLuuJ5S",
  "key32": "5a1Kq7QhmbptuBAB9JZ1wXpPUbgxUXrMY2FWfyZ8iVjZNFeCiLekvth7XN1y4GqW2ZkikYCfyUyieWaafbtBpf9q",
  "key33": "Cmr8jk9cXUqTJ5bjXAVnWXpJKBvvVQS1aQepVHy5CZYJHJDtw5M8Aed6QECSGLb9AJHV4MBuyAaUetQrUd5WX72",
  "key34": "2D7JmM4AhRqhAFMvSGfJVK3T7wnkbmJt2jjcJNSeaS48YfaY7PZooDkuS9cHeSw2uWtpLMPeFiKx1voezFRLxcyv",
  "key35": "5aJYuMBFpSLTwsRsErrez7qttcdaHzF3xezSX3CJrg2qMnF5tRJstVmWMGkCLG91ZZ9Ek74LVwWyidAbb39tAq5Z",
  "key36": "4avNs8SsuMMffvPnnfE25TCkwNqvJjRnb62KvvvVNabToxAv3tE6mnQ5B5MAtZVkV9KZNH9deDo6X47RQc48Hnhn",
  "key37": "5Zsz8HU9mN3qAkjBaLFQMRRM2xiHNiJYqGGGAqgWQVVASQwNHg4fHkkwUBvfiZN6ci3M9vk27Bpo7fz44mTnCszh"
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

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
    "h4tVnPmYtiFNeMpUQirh2dBWWRaSZPRmhTonWQdXbTpswbA46e5hFdC2oxt5f6vGWSCPj1iyRMLgbCeASqAGwsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSd3W7hTHopSjiQUokPbL15YPA7m2hXWPjhBt8EB4wTvn48aYcVXTiSDfLCqyq5hcArxpo4fyRJ6zCzEE9tbPpp",
  "key1": "nbL5Wnr9AgWyVubpsbhvZxu6f7YWgcQ2AQiZTfK3suerAhWLUQK6rtnD2TV6Z5Jgm2CKN5HzevMCnQoSNuKAUfA",
  "key2": "LCVmXphF9NMQnmVPrASLMJipmyZND4z7mHuXoa8WpA1FkR1Lqtdq1sPAsQHWjJ4oFq3FNpdzbeZaUcdyECRBpVm",
  "key3": "4TzzLqNf1PebFUiwYYNBpsnLc8rBsDvZ1vKyHAdpxoUWiCe9Qyp2PyQHoaatpQZfKRq7FS4nx76HPDAURaSWTs3x",
  "key4": "4Hp42Y4ronGEwiyw2KBcUNBXco18DnCpY5nNt4DA7GvvRziuw3kTQo3LjLaZmcMsMYrUrEkk3BDgAe4w7tiG6DoL",
  "key5": "2D3zUzEaqkqu7EiZAA82y4ioCu75wecvJ8xZLAB8VUG6jPdT9ySZSkjDcbw8o94euhvNymsp6NqEUcecofgLxKxq",
  "key6": "2pH7bHZRV7yUVcBMWwpPfi1rngYY5fZuj6D7NuoAZidT2yVdZu9asEWzpjmubqD5ptC4L5cqNpvdDWTWWAZmZZxg",
  "key7": "5eeKX4GVBv44Q2cqz9FzXNpKwE5nEjBTcuys2MqjHoZ6FrBRwPUhvLD992DmK8puFd9ZCta4q13MCHsziwrSRS9A",
  "key8": "SsPMxX2QCAmM9trchPxjrGaLMoDH6LLGH2YvzBdV5yxzQYAi6QsbMSTAGJDpTsTWyGgBqBEYBeENbunMThvVS4o",
  "key9": "2TuoWyXVNddxuLZaXM7rP39VvP2rVV8kvwTCd7hraEQP2Z4LVy7AzvSRgQoxcaAaWU3zUZ8iRaWeS7infc7SzTH4",
  "key10": "5CuirpFzyuzi7c495RXhbeiutfwKNKUP3EdUDR4LbSVWKAEUdRJbkp6zvZuW3NuqdvRxHUVJvZmEwAoJdEebeTNt",
  "key11": "2CZgQtRocXFxgUcZ1dS2kNYxXxjr37qm8hAoDFWMtZ8B38JyzFh7x9suWeFMpD1fXxd87Psi3zQDAoanT55WpG7n",
  "key12": "2q9LF4y1qTZJhdQkq1wrRpnYJmDNqJN7PiedWzfQ3EYZ4wupsYfu8gzJjQk5WEhN7TG8n6dB2YhimuCVwDEfVdqt",
  "key13": "3eofZ5GTfBwAheLmiuY9oyrUEVgei2sYvYaQ5yStvFTdfNXBfAqCRQSAHU5Ex6y6TnzqUxTsGmvpQTQ4gbqhEdeZ",
  "key14": "4hvWgUPBqt1NKqYA2QcxiupbuFLDJ491hQU7tPQ1LWSYqBT4e6YA6LcV61zhK92KNEota95ELAnKutiRmGqRH9oJ",
  "key15": "3KuLBAie8K6xV2uMqiKMQtRQkAgpzHvpqqWrjwXC8SFPeh6o4n98gUbkgb8aizzTBoqkcFceFD1LBEW9EGU3E1za",
  "key16": "2PPJpZPvSHk8PxbzRWrRwbEy69CFfNRJt4rf3aoEoLaV4RLc26UeAYr2BhSQCASBaictPGWYVfKN1adF9vypmn1s",
  "key17": "bsYjhHU5zwB8VzHqjKXkcVDfhapoSwBwQH2ku78wJQ6ZV5eZsBeJ9SaADzgygtK84vQGZjQGgS4fZQbmxWPWYNx",
  "key18": "4sVWH3UP933TTtKmTi4QLLRWHvkygyyGELEAhKM5PXW5EWywZFBsUhfWtNfqy8W9yVbbwt1r1qXGhdGpDsirhJec",
  "key19": "paLYhNw94nfSaiKWbuhD6BsZCAwWsjjQBbmMB8C7eQdAq4Ltiy3F1QQoCqW41QnAVCPdXAvgTysaZ3MvudFTACG",
  "key20": "4RGbsHKa9oJhJqZt2boM2Xs83FmTt2GqvUwF7dy2KYPq15PwKFXEFtRp4FgsHPQyEZ1aDQ1idCFqJGMioPqa3bKs",
  "key21": "5ERNWT1VUYDR2F9fJQEcqd7ydDTEYV2Y5DK22U9yx9nMtNtzUgP4oBDdJ8zgcUN8wKcv7R5N3jXCex1mARtMtXmH",
  "key22": "31irXC9AkvVhwe4ZZSxRDveC1tGNX5ZRFCi8k9JTvaJtmm913h1fYcykA8h1PxTPUK3VRAArCxFFj7TvshfrVMrx",
  "key23": "4eCapzSfh216Lid9CKVPtMVjF7M19iTYBB6G9x1zdx5ZXeqiwCrdr6NDpJ7hinzEZKZUZHKc2wCzuostq13HMvvT",
  "key24": "2U14jFtFkpDBk4MVpdA9TdTLJakUTve7jc9CuwRN7z2VL1cJRDAf7YsYd9VwdvVqU1zLns8hyRejiqPrwyUdMP7z",
  "key25": "5c4KEvsuJaAFBAThV3ida9L72HsSfk3ttdJPudujqMWttds5vGyxP8h8xYiao1TXR93pgVgPq1SbDQxmFCvF8gwW",
  "key26": "4fpKVLiK9p429arjzyw8tAQK9Ndqmu5QohFSAYY9C2Ep6C6znX31RLuTtifeqMqP37WV7LupNSvqKhzZ4XhUn7Qw",
  "key27": "5uix9t6hRLQ58EhQuBc5kGFPdC2nsLT5Az55uYuBcWADqV3yKukZLVvLShBJ2Eotz1pP8FR3pJQoF69ApBNUyKns",
  "key28": "2JUBM8bsMJopNGcfAk7TXVESLdQdqbQ5diMAoUwPvW5hF2kKBKVaj1PwniWjziZC5c3oUG2JaP93oRyb2hqNSeTy",
  "key29": "q1Y5N9aV32EuURjuk1ijw8D1uD8XapT7hDvWy4xAxYTbPYMWCNqKt9hFaW3HPUZxmB3VyJmu4b5wLXAjKrYeEXE",
  "key30": "3KrEeXA9CivCwpbb9eLLYEvZMRUHX5n6bmSjqo3HJvaXJe9GQRKKzUxa3K7rdnuLX1NrzAZrSXdQnsrKVa2mJjeA",
  "key31": "4cQrhPqxmyz8PTyjTMNshBG9YfU5pSZcTwCPKqBzqtY8eShDQP7xF8J3fzWrt8xrZVUtgvjVEbs9Fsmb8MQsiaX9",
  "key32": "2Z5fvx5KYFN8nTSwcLuBxRnhTKtp8xEQB8avrr3jvQ5kHWxYT9tNZaDpGz1o3jSbFfENpbKqnYrxeTdAMM9enS3s",
  "key33": "565bcPvgKhFaQXVT2Acc2ErhQNFRyneAgSsPediV8Ym6HmP682ETGCrhkTYVqCKC7R1bXTZ4yKNeKSGnk5iSUWNf",
  "key34": "3xrsYFwqtYYkL3YX2zPosTVyxw7RyRwjVkz8rdKvdt6ssA7CPeZpWqYFqkEDXnXrVBst5QPaXeUkmzV8Wigzqpkj",
  "key35": "ifBPkpP2vazgTHeDJpnxby6d7TTAF5qfG7a4zVBybH9B8ezJu51bZ8xXh2USEkQDNiDj1KRK8E6f1qnM6dH2paX",
  "key36": "51tvCZ6Vo7TxBdmDYVd7wxHuTFkrwZXVSzCC53tUAUq7WB2XzfnC9AJFpviwFSVxP5snxQ4NvdxhAK1kSgjiMVDS",
  "key37": "48F2JehHXXogE6joQqpTegikzGJBwPMzvbu7fLaxHLN4Rbdd7qCCkFsXGrBWmfX6KJPEzt44n2Zak8XB4tqv1Wx2",
  "key38": "5QEHu8T4tYeCFSxpt9CKykXvssFd25T7QDsyRXmyX86Sc7ZE65JRgScU9kqr3dReYjyFsNq9fvV57Ej43reGVyCc",
  "key39": "4v91MSmfk1HcHwYdr7ezk5YMeJDCpgz5pxwFqiJu3NyK6o4VkGS4GLmMM3LqQgUBS8Qsq5AmTdfoEASgnW3NgTTa",
  "key40": "t4vkDARVqTZdPZ7qHhYWxBsxpHzbZSmn1mTvbW4s12uETcZPpiperqJ2j2RQ29Ts2oyTF22G6gugez8vBpLJDps",
  "key41": "Yaw2JencYzKhL7jsTAYY5pTpWd8TXPfDwnyMAeUgzUhoeB8gfTeGAXuqGvocMQctMjSrdD312jvvPhzMbGUXiFz",
  "key42": "3YsV6dv6ARApyGUa38mkxbWCvcmkwDNdXzmYwSDRANUvn5r5w5UZm8W25ALHo3bVP3pYPptNYF6dHkEomEtFTc9w",
  "key43": "2bC5GR8wurCG48F2shEiAGSwCcb9vg6hVAE6Wnvv3B7hynzj3Ktw36Q5b7Vvw9V21YqT8avZbuE7rJrkDcMAVTq1",
  "key44": "2D3HVJS6NHDghRwgc1h6GNSM2g2NBH3jsQiA3syvcBs1xHXEohXHJTCXUCEYXSpDwXaU8HeJHkTeCYWPCSgUasN5",
  "key45": "vcP2sADg93yVwNwXV1Y7CPKqwfxnWH4TXfD4PcMA6oya4WqJTgtEs81jGQ2tkUJPZT4NFK2RqJgsiezhvJpb2Yc",
  "key46": "4uVWAGDLZeGekKgRZnJpLE2c5iydbe8KdRQmGxzetVoQEo3kf89cPecGavF6daqpoeYLfyrHD9d4ZWq8eydGZ2Kq"
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

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
    "5MZBcyN5KDWKNDhnieEsZWNWWncxLUXj29SeBk9R5beTVVmQstczN4ZVGYrKjnVRHqEgfSPM4kqhyrMXn3kTp11a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRhK9KxCYicGpEfgRaLCGp8ibW7yq2ouTr8Sjb6c55WemsVDSnR4EXsoTQTAR9hF6j7BzLGUsV4sz4hut8Tg2AM",
  "key1": "4LrgMV4njsqpjYnkMgvG9LEkH5CQ23KAFrQitcs1Kv4Ac8EyoGXcCJgzEhhjRatc2b6jmLzfQvZAmKnu9Mt7KPXy",
  "key2": "5DNHCjZtjAF6yTdGfEqrBVz51SVptK24nuNbSENyFWH4EmQYXH7Lo55yVsF4pUvuNZK94FAFkqPj6rmZgvefucHL",
  "key3": "31jvgfqRDYuBYRquM9whq8QhZ2nG73E2EtpDenb4tJAf9PbUFpk3UZpzDTeYoqsFQxH9DjoB9NhV4qLHhiEyjHie",
  "key4": "yxhgNBzTa5SeJv13FDjR6haoN75qeTzw5FA88CRcF7b8Epsu6kDhnnaVCUxNQgnZL6wqbeqFzdxLb541vGMvR2K",
  "key5": "3txtRfCgCmxMKsKVMrQDdncYbE4tcR7CkZcd46SgY4SaoD5zodkL8ByHia9tfXktx7ni7th53arhaqJPWCKhfw1M",
  "key6": "3wPzWFi7YKMCPDamGUo4NhGj2h3dFsSri3CLPU6ytTT8G3keJsD6LjHuDNpgYkbsuaLLCpXMaDa561PVxPR1s2RD",
  "key7": "AstvxLddT3hYdiSJ1hKQDokzsFHQAaaNZTrbavLGmR9tiWb7UHTFJaxU1fDsTGx2xcTvmZhA3V45qBYJtZQosGg",
  "key8": "3xGvZkqpL9qX4ipmJu4ECpFc5Y9hytBETCNjTf2zeRYKmQHcx58iKGSbYcp1pfixL8b5mRSbqzu2AFjTvphCJRnD",
  "key9": "DwrinYmA7trThRrFvE4c7eqWiFzJtLF3Jwa9FuFd7zkSXKt1bxT2rN9fguDZEjY6fE5T76r5n15w1FeSLAnz2Ds",
  "key10": "2JSnMrFpeBWHkURaMNhwUpo15Pk5gW1Zb8qCMsxVT1MvMsScymbwvdsXNtmbP9qwELuqijF73x3bK3qeMoyM21RD",
  "key11": "29oqLP5m3bDdbd4s2GfHgwTi9a3UupBv3HXbKgVGDcLTnjeCkWiKrVuUZ2UrjbabhoZMEXACRnuJjYKGeiXKomc3",
  "key12": "59nj6oXHH5WwBya5aSUg9NKrDdUe1ifXSq1i5r2ZBzLHnkcDq57KLxMnb8S3YW3jJmigofTnWeh5cP5oXdFHm4FK",
  "key13": "54h69gk47h16NZnqGZxzRbHNSMXXwM4UHPuRDWS3bCBQnEvQjzAETRWfBj6EC2ezrTRzB9PYh7arDeW2CFpKmBsU",
  "key14": "538bhbX2QfgpsviqFvqBJAQjynByteoPghjFenn1qcdmAgrecZP9CCnEwifHnsx5Ns4M163kXJ871nMzgCxt5nNw",
  "key15": "621L2JgtGBcabnyV8kSj9tjtP1abs9nfLPGU8CxF5chtPX8oxc2HyJjwpDvhAWXv7iD1jKd4NXLwxD1DEGTgjUG8",
  "key16": "AsanhCt2c7CNJTnhv2hQixy8nCvnoY6BMhcxqL9CuGGP9JyWvCGGw29i2N7AoZgA4kwynThKBEFUQ4ZsHi52deh",
  "key17": "5XGLp6baDsuDJ85UDwxUvmWh3LSHXrBvsjMuzMgMAdhiCHyVDrKSHmyJFaAcczp8rTZd2pyd1WzhacT249TP6CfJ",
  "key18": "3y65QPfFy3wWq9QhPkwBMkympyLmw6wSu88cLqbc96KGrjPq4NRVDwTdFqjEX6aW7Mv4SiJvbZFyK3V8H1H9xq2w",
  "key19": "4iwof1WRgsiayjhpd1E7ybyRdKbP862Fptxiy3J8MiXLVtrrL7T2t2mQ48EtDQkWvfkUhtKNKNPtX9Wwdarxdo6r",
  "key20": "24exTvvQ1y4uYrhd7c21mxqRK79WX1p5A97CpCg2aCR4amutee8HYmvUMy47B4S8Ki4NFU2R4VZyd2AUbVmhJSw9",
  "key21": "2ZFwN6svFeJfq4nRtmmiT6iEE57Zq7Y5Hx5HD5Bos44UfuqzpfUgUvdCBjNNU1L4x98xMm6k9gdTjBUGomLHGpjV",
  "key22": "xgpMPVaPx59hfc6AT2gFrzSZC7Pi2mvWV6sQM8GgwjuGJwrYh9y6mWtYNkdDrrMWnf663ppJwMn6GjaKcqJEoms",
  "key23": "4geGZM9cv8x5r54mfvKDj9yNxYtAcpx4f7aE1gQw8E1L348YwSbsFcZ19BvhjuDQ1MqBc79YzzS41wZMVjGcG7Aq",
  "key24": "4oY9buDwv4wz4KZiyMMfLK6JiJDWg2pWkLz8AeUv6vDSvca5CFfC9FxwT8LtFhwzmXeQWcFRu9wqDfZVCJyNwEKa",
  "key25": "59CMwUW7oqQsvkSkF7osvJaM89CbeA3AUD8iRb4Ji1RkxvrgEvNjevtCKzWTP7y1mdjD2cRD68Sxdp14vakDpxBm",
  "key26": "4bj86L7fCGCK5TomezuJpFvWo9GaC3sWUYmJzox1vTmyxhoMArWC3CxXH3R1vXAEycRwWBbtBjmzXPzX5do7jz9F",
  "key27": "5sEDCPjDXyRtcaZKh9pGAVu72B9Vzs9v6ChtDwyubFACKXEMkyGxiMM259eHXn7n4cqurHgwKjjF6RkqDXqAfuzL",
  "key28": "2yhaMYfyh7e89vyT1fS6jykcFWv1G6YJssNyVhc1RepQ8okciyj6HoNTut3Pf87BEoGGsWKCCC9aRAuna9bkMkbK",
  "key29": "3GMyMNdQxDvCjdkpup3isDb7WCEDVLkCzLCtgqtTmX9K8vJNAfWXX7mbAfa4ZRihULxvGEuQShsKuaBurKrgvdsw",
  "key30": "2B6W9ZPbsGZkg2P1KgLaBgodBsVXcCVsb4WYoJZSuwJATnvsykgpFwRAUdcicAt4Hs6KsDCZYzfENgvnmWQpHNvK",
  "key31": "3GBYEq6xWa7mGFrRmLdmuNGxjDHgvNz8ubAiwNAt1nBAeFm5WrWyv1MhunS2huYwAkrxvDzLA4jL8M5KLBKv7xXC",
  "key32": "2sytk1X2q2hT4MbRjF2ZwoWa1LA3HePrSQSviUebHj9NqAVEkum5C4PovWApSzCsYudEMR3i3qBQasWy8PMtpmZJ",
  "key33": "5CKvJkn4FNsSjXWQ4yPmZjbiow3jWbANvqbd6vGpzBXZJAPwJ97k3cHo5k3JTKUhNFKk4KuFcKTwZZrTJxuqaaq5",
  "key34": "5Yof7UCHauJKqCwx4zeYFSpYi9GVr8X4uybev5bqJ4uKLeCMdmdXf3uw8XRM92Zi8pKZZzsxxkhapS6evNTU4HMS",
  "key35": "1y95jZEvQhLA7dbmqfHN951sYaTontJYbmLRmdKAeea1Z4Xw9fTbLNcAoNFDrJarzAZFaLmoDgNcTf4HmGuYpKm",
  "key36": "5zSdTr2a8SagDn9SAdRC3hzd5wMjyF6upyBeYB3aJXu77QQgUEZYxQqyogCZdJwPYRZW4KYoJbCNJZkcNy5gwJxW",
  "key37": "4Fydp1rtbk9wnFfAvez2R2NFkYbosRpfLHDAyt7wTYp581WW25DT8K41QeJsrgYXjApYyE9sMPt3bXvC7K3cCJcL",
  "key38": "5XgysBbYkCkfWEUpEs7zWPkwEU8cGYxjeC4nPqq9rEGtuFqwsGxYBwBuhdWxGRYx8d85bnpMQ6QRkow6jDDXBCKM",
  "key39": "2FrWRDuaTw3eVccux5zqHX9A5JozWAvbZbM2jDVvddPyiPdVUokGFwa1bwz8ZBpvBYEuNHH4ZqCYLTnmhTg5zkfi",
  "key40": "4Ekeh88VRYfVifLJf6vkqitJ1RQozVUd5rkwzgfXXfL8RYmRfAnXA1c2L3dBJ3TegHr7huiEVhTiRqCwu1YF6h3a",
  "key41": "2DUd1ECi9h4EuXskCPjgSnF3g5ThgmuEN8pfVmqyLjNymre3yMgYCjbtWY8dHjfeQnD11qi63nTrDuPfhurmePHB",
  "key42": "24mDvgnVTqoMghc36S2NPeLabrZdh7zHfaNnQLdKpykCAJRLRSKFBud99bBqPnKpCsHXPT9erKroquDQJu9aU8nz",
  "key43": "3qDyVn5GUtibkvAE3buJQN8zADzqWJddV53VD3BoGj4qonZDz2y3dzjoEtpLsfVeDozKpMZpbrTJwNPEJEhWYjYv",
  "key44": "4LkRDV4oayV1c6tnbPLoabwL9NdGiNXLgDujakDssa5tHLdvFBLUCw2LeNXwYXfEPhYbHDtb6GSuw5jXsAd8TEQ4"
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

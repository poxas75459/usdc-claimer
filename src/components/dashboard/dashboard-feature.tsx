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
    "PL7GUbng5phyXnFBkSE5ow1mfEyQ5dH27BgxJ3qxs85w3iJ6NmgwNc36CuUPWc5XTaLoNhZGJV5NxmkSdE4Aqcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8Wf4KNymDZM2Uu3U6DYmfMr6wzN3XsMkob5RcUxHJXH8r68un6L3CqLXqCKegk8pTJUnUkNVuBVF27KFx97pk5",
  "key1": "CZcRVYS6KQ4VDdMjVf8Ht2ovGDKi8WGhQiJXngJUFDBVDHVX5r3MpLQLgXbc6fcR3yAeLYbWNeu5BWh4VrHouBp",
  "key2": "3BF389ysmiTP4wTBSLeC8rFSXArULMew25xr51gtAmiXSm3rzovcSRbetg6qmbMcPS7F7JE9rutfb2c9G4oFe5qC",
  "key3": "3bjFVYMioYhxnnTTVimHpQDnFSQxmJLBFCahcFUcZMc8AYDEHCRLHK3Krv17sxVZrhGCsSszXbtTMoxEpn4Wgq1U",
  "key4": "3D6FbeggQz26QvE6EayfnpxBYUsg4VKy7CwVnC2N6t75mRUEy8Wjavcq6eLhZWXeh7CwxE47rAD9oHAyRXsiKKjt",
  "key5": "2fb6EhhJht3DkaB9VcDMMW7adjiYkkYtLAi2Cb8RHRWybLZWgsUJX5Y5XYNdcCwYyR8S2KdruzGxyM4bCA5nrZmg",
  "key6": "4k15DC5RAaidRfkuk84SHaZGyZquumKUSWFCLYub645PYfrd7K82AJzfz78XrArtT73xx7Jjpoh9jHZeH8F6tnUM",
  "key7": "5GrVkfoefNrFa47Xe7HFBdkbyo1ZXgCT5d6zNgjaQ7uUX3WNKSxFtkGwZbjpYmHAPwVCaYg7d6bBCkJpuQCJkHNr",
  "key8": "4u6BVZd3QWK2gAQgciSRHrp1D329uhQBqwqpJVsHTJ7xts1KxPSoaLHNAP97nnsm65V7AH7ZigjxkkqguX3MM6oX",
  "key9": "ChKWiHT8cfAUZoFfEqbCtEzemaoMVRpDJmpSrYsrTgnxs1iiiuwW9FC3cux1ohZu1eeTRTkqsXYHZGYN5SKeRbd",
  "key10": "53DQ4VGtCasUbP77cyoFJ8wtsaNGE3nWDAS9TNZ1pKEQbR3YEgNAuBRkf473n61X9KxdAzmxwEt2aJrnaxGwQoU1",
  "key11": "29dxaAq1av4mZRHtdXxRotpSxVnHGd2XuBw5VddkxzNMWWkwoEGjU7gjgKqDVoouGrr9r3EAosMPnp5fm9SHctj3",
  "key12": "3Dqsjb7aUTcP7QgKsWfwGc7pg1SH69kYvtHRHUhJ6Ze7h56LfqCF2WP4YZPJ4rC7jcrhB1iXrtRm6EvryMpFD9xj",
  "key13": "3JRU9ZhJk9RqKz5MYeA9nZyHdUZaDefjDbKELYwrBFTJtgPavzYV3vPVtrE9en8tBYgmfz7uPYxVidTcUGfYzE5t",
  "key14": "3GRvChHbj6KrSiVYf2BBNjDqNsis42gugSSCbQXtprz96QfdtgkciWkTeYacTJiZW732ZCLU7oVmwKrr16C5chaL",
  "key15": "2BjDK7gPHhhVKosH6kzxPjYVUvDriVZSf6uHjapuiAr5foxB3jgzSiuwc3aDqNALTEUzsvm6kbphZXXLPD6gbPJ3",
  "key16": "56SWEVEB1wUxFe2hB96c2oeoBe9DkC7gkGihSnidnSXFpU8zCQcshmFZ8ePobEp2HwgmRJ1vFZW1yJFPu7D9UAoe",
  "key17": "5ETvjTzGs3vgf3HTRymfkbKG2RQ9tNUYTSrS2rFES9MJ4zkwzUk8qGxmoxMnRQVJjCQzpdVMsfKkyxqDxrMha9oh",
  "key18": "2p9NnxC8ybVdX3w6jPBbazfnQamPLX74baQkAUeZ8QXoxaCDjErdcKcThVMde6hoEqZHKprGZieUkk4Q2ARaTrAY",
  "key19": "5g6Y3Sai6PWaNWo1jzw3V21tRHxdTtMWd5k1PSZnZKbMkvBqXrj4ZPdkMjycT8iSmP3cC7Ljh5Bjr4LUUvkgRgJ2",
  "key20": "2Q1hBKUF87Q62nnLK1h94ocjXt7f1xyScBDjTfsnfiQsz3FmjMo2kfpTegD92Jbk4w4tw2zNnBCAEoAQdhEZj9Dj",
  "key21": "5beK4W5tSD9TLKtDm9KgjtA1iyhXdyPMh1WZs3p8sJZrZ4QpSYFkrpYBb5S1xLhm8hDZLoxqRVAYSGyxQmV8Taa7",
  "key22": "4X1mHCbUuvc3UrjQAGF76CxGVs5qoQVSYfXDJXTmpHEByCqdPn9xdvJGdrSaUiTTiejioN3wrjoqHkL3NhHKQnHg",
  "key23": "4FsT5o3vEVDsuR5RvcNbfu6ZMB9YC3haMqASZuHPecCybpgx7aupLWJijrDqYzMgAym8zj7hna4QhJRdpMxcGVUB",
  "key24": "eN6ANnBHBwCRthpvXKBGTjCTS5DsvNW55GCW5htjHu587Xhp8nLxcsNdeANNZ85oFSy5CCBnTxepYaj4YvVqXDx",
  "key25": "yk7MBGkxx1NGbxrGRb1U3yngegZ5hcJBrArPw6ACx3Bi7e7dCnzJidECnapj2MB5KJLeqQUSLB8FwYJwbMTb5qy",
  "key26": "5fzSVk27roXqCDQdJ8ENHhGSfc7oEbCSvTVy1Ha3ovJ2PWRXBGW9TZD5Dja3gXCx7ES9PNRwEBLEdj6af6Q44eJi",
  "key27": "4PZJoZqvnjfwxhDPDLbxbk6QY2RsiNwX2GA6W3VxAohJmQJTpx15t5ZZMsxotktejwQjTZKY6Ab3j7saA72TCVTQ",
  "key28": "31zA21q5eBPM6xNcaBeNYogPG7xzDdjCLcX4ixaE73BeWMSkRxnYFRbRKgR3b6YmySTAPrjwYkPT5M5b7ZyrcP5J",
  "key29": "5DVqW7CRo1Nup6qAKmEJZ2oxPQpo5jS4yMiE89UeKD4jLcUDvckqrBn8ZkBKXmou4q1PWgddKukVtckVfRP415Jv",
  "key30": "234B2BxYHnee5khLt2Vo4ZxqZLEg7F9J74H3tzn5HdvwH2usBiPT2wS4XruFbpdLgysxdK3DXeqrXeyk1MEZ8aSa",
  "key31": "K8VtdUxctV3Bg9xbmSfSVNUeAQXzuEtdCfhqEbxQjtWzxFSEbRpxKcg8BSp2CxiXVxgqMKiwM5bLXLiXGdqEUeT",
  "key32": "54WLEgxVxfAU8hRnevWdKsG4A8uCrTunvMTaENwk7xLuzQ2zabufqX9aBT7Av5TR6P55PqrMxcLrnYhsJiYAUoRy",
  "key33": "3JNGfvsqUxjSCUCiLyQbFESi3ogCYJh7fiJF2Hwy1eRYP7UGpCrh9XWFb4aLaCrmgnbRkfXct6qcyT39HGWb3EtH",
  "key34": "4KqWHti17VqwYzYuWtTnWg5GsWhX72FviC9GC3HFiW4FNoySmwb3xbJBfHQvFist4df41ukCdZiAotM5FahDeGXH",
  "key35": "52uXziP1hoi7SHMaZJ2syqdjo9K1tvDLkZ8qXRgSE7CFu5tCvKHdmk6xQB5qohnFexWWLiRhf2CmEVSHU7m4BNwK",
  "key36": "kT8dCN4TjrxXt69BVNZAikaY4rLDvGMqfAtE9PAN1YLgJHwxLoxKqbnifTp7GwiXucwauYt6bXVFF8uSwaayDf2",
  "key37": "35rXvnx4EUz86QcYroJq6AuhoKnpF3YvWtwq8pgorUCwpMjbyYEQsfS53PoU17HqdG4fLaf9d64eCnFtkKqLsLCk",
  "key38": "2cEdtB4S9p3N4qgPBM1pTrAJKYvcRocy9GAy7PT84y86FxK4uEVbTu3MdCSnMUvvDR7wWFfzJjwx9NWhiU2QAqtz",
  "key39": "4u9MnVbXhd154wptiWg7ZsCSL6YU2UzaySRdszsTvJtSJq7RphvQGvSH7FnJDr2wfLekCceHe1yhSHbFFfgKqF8Q",
  "key40": "2NQzL58h2qVbrDAzKKdvCqx7zTUDHtrd6fEjxwQGuLMGUTmH2xmbbf8ysgmyZSYdqiUbzEYtjiCp6zSuYAm65ka3",
  "key41": "5vPVGtkEd1uWryXFrSKtm88Xw7DCS4yfvZxTfkYh8Wp5RESKXDiLwYrPBmcmGVrFxovhrJEZEEyXwLaJy5fwbK8C",
  "key42": "2Xk3Wx7bwrAoF4PNiuS525UDecTGzYW9mwTWC3UtRhMBksLygAwyfcu7cDLbEUbcrrDfDMHAS8iQ5ttYNnqED5ba",
  "key43": "2bqGhahxkbJ6Rd2aAYw2LcWZibTUMo82jHhK2BWwtKi3JKfwqzCqLTqu9shVyDBU7B7ZAJi7DrZ5FovGkFzL2ED",
  "key44": "4HV3qVGsfrfiBqmymnYVhHXDTL5grD41ibcR2k5R39RVwSxnpkym8ztTAAtsVer5fqbjqEfGMtNRqeh42S268nqy",
  "key45": "4kFT56xWWDJbZhYrumTm6J6hoQVwKazPij9haJjhU7GGhbB23HsMntUUzxyTQqXU64XaFvp71ewUELEYKCVJ2NtH",
  "key46": "2sbuPsnwnCt27NvvfGh3WusKVJSVmeZRRewX84wvYjvvRDhwADiehYfjtcQEZG2rbup9GboNZC1XoWNXygABsmjw"
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

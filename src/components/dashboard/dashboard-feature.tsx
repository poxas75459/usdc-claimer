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
    "3og67NxkWGsKEF6rdFUqCDWAtBjHrMoG5h7SFcP28imjhCYeanxqFDy3ut8yUzHGdq79qiUAb6dRyUHibPUymLHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPGpiP4kFrnaeCHg2Eo1m3dTrX3SkkB6jc1b6ydivNqBe4uVERHrYQeUDsRUChRitaiJ84GR2LTLpMuB3ERV6rY",
  "key1": "2BvKdZ1EaqkEhLstVrsAYy3M5BbGWyMtdqpX4d5MiBx9hiGRu6uFfbLUyWpanPH7ANgST1JYKPTV6NRze2DsfWXA",
  "key2": "5A6bUrBySMokLUVutaTL67QR3pPUCPwpQhjHAVEduJuJCnsvBf5zwVUCPhdVbykYejcYX4koDTsawchsiEVQpL62",
  "key3": "2X43c7xfp7gT7iauCynKwqWV5n8vXr5RoUyPCygzX72pGUpQt5CoGQbp8iBv2uYa8EtdBo2p2y7Febm8xc7NKgMm",
  "key4": "3D9CWgXS5AqU4nXwKTgLPdZxPeSLGMPNJSER8i2CZBumZuzPGcBFPVFcumfbrmfV1GcKyafxQ96mz4JegCkkYF6Y",
  "key5": "rKfM2v79eXhQD6xoauuNKXmuaqLdzdodrsLYCiyECZshr5tv7JLzAtrLuukJn8qjHV7x8RycJkuF3VMcqtD1MW2",
  "key6": "4RaNyoCyDc9R6VH3RYruhqTkRaDUiMtVgcks1WVUH5DE4k4KA16EKczUdo4fQvAPcdmnMfC3cCHr3DVAfG5HxF3j",
  "key7": "bfSdju5ovuvXzrUFcuvRhy3GsG1BTK3tCdyXThf68kapMo2DpMCpPA7gVKBE2SxnuNKZg6ASF2NG31ZGT9LePkh",
  "key8": "5fa7EkwBKS4NFBcMnPuLJP1y9RiPWc92G9TQ16oN8qVGV83jbizxwnqrBxMuWKUvcjNFH32joZK4dkPpMp4neGT7",
  "key9": "48MqQuA9e5yeY4Nb88VfsHA6ZfSNU97Ccpm7tStfRt2hqxuCpvGffAzbBXS8oMdRA45BAy1uSRJP8ozrBGC4L8Yq",
  "key10": "2V2Mv7uA2zbptmZTGjX8gFDPkFtYUGdSjTPHHQZVgQR6kT4fQnW8ABmqXf962p3jJi3J75GuCAzmZB4xPNUJESSi",
  "key11": "4AEBvL3Wjar5eAZ1pv6yyi1b3TUXhqn57XEJ6axscW6La8PukvyP12fiLoh5hLYGnnwYnBML4GKnBASBH7typEdn",
  "key12": "26LUv4RQvp1vqpfboReNnMXk3g3a5BsX9Zvkpy5Z7rp8wacwLenkqoKVrE6q8VYcz2otooEJ915VP7KNqaXWiZJo",
  "key13": "5CgaSix8ch8XCoFDUiKQD4UDUME2Gf8vVUj8W8MhuEBqpUQVp1kt8a7muKY6Z2np1okXVoBcBh7duGpVcsPZNvoJ",
  "key14": "3GZXk3xqjNChFCTJ3Q5NeXAWS6SXJ21F2fg3bsPripUELLymiFQjAcszxQctzk8feUVYjCaWh1U6TvkTNaAkt2e4",
  "key15": "2etjcGW8Ur9DWnQRPedrTFcjzDuhuY5Ci7xonxVTC1AxWFzv2eQgrg7Jr67dTX5tqvednesPydPCLudGZZweq272",
  "key16": "3QLxfxXcDyMHAHgDKSx2MLjEQmgXhNjUyJL5DrqToyvB9HQFRn8aYZe5d1FEH5W1gNvw4CbLsfDHvzZs4Xnwt1Pt",
  "key17": "4AJFE9K8WfUxjvxbzS6iB7mzQsHrYsx4nGEFnnWVk5xpnbeqv9nPsstQYeSekr71Z3tfxw4sxMzFCGfPucFq9dKM",
  "key18": "4co7T9Cd9Aaz2bYpLbNGzonvN9z9MZBQpj9Ws9ZrW52c7xT4zMzZRu93iAo1PR4ukHyocYV8Roavm7hPW5U2vWkA",
  "key19": "4h1PJDUN9yTr6LjCzz37DdDbkDXcLyw9dTJGJiefKucFz3EXosjsmmMpQybLxZcubWQhvoH19qkYHU1t6ALcSymK",
  "key20": "597vozekodq24s4kDKVvP6KjLFyN2TiFZBBvKYCmscy6c2ohsnadr4MG7sPVZccqap2Nkhgr34Sx6xpAvZobLyjq",
  "key21": "65g3Q4ock36TATNADE1qiU21jxK64u9rZWJNJLrzTcanjoYszk1sDvoFeA2bKbCpTPB5zEuGcpcvACWq8dDbJyEN",
  "key22": "3XCsuNRjBdZ6kJxQ6wX3hNx7EDLAhQa8k3UXdHDcg2bSha1WCsu3BF5Z2jzXKpnHKWrzQVXVwnTu6DmYn8MyoEva",
  "key23": "4u6zUW7Vgpk4TfvxwTCPyxAFuEvZAacssxfz5A37Nim4cnETtzBKDUacyqQLBuT9GHQDi2hLv4YLVDA1pHf3sKmg",
  "key24": "3VxZ1GDC73h2N7xbtUumtvRnabhfrgeKpEpJkvJ12cEiMfaK7CZuTHQGrX9qPpXQGdG8oRuVsBt6gE8A1k3iJsoa",
  "key25": "4vRjz6Da6uBwCRmkGh9vncvftm3yGkw9YWkG1xbWPrYpPyQ6WUQmvV4GbzcNHjHx2M7NBQG2jhSCuCYATwG24Xei",
  "key26": "AoVLWa1BenzoVU1ExbvkbYQJzPN4JDhX7RhBvLh5MT128M7WSJHjLrwwTE2UPUsSSKcyvrWxvdV75V44VKzRfoJ",
  "key27": "37diQtsYX7D3zog2iz1URSKdM3bpUdeVzi63YyxSa39sYeFdDswPZWqKHn26rNNcMvJP9ikX5KC5JdvMEmccCuji",
  "key28": "5EP25nSxif9dFXzNsYX7UqhYsCWSBWsTBsuoAjCWv5Fa9Hmt7ZqwPu4nhkhQEkx9gW7PqzGHKN6ryViR51djf2L6",
  "key29": "3PQRU64dn58dfVZxWLUM8uxsAkhoAcGqvQp5Yhj9kqB7xxtPA8WT99udx7JAQaQHtABgDFfb8QwBVZ4ZP5rog6t4",
  "key30": "63urFvhkeHCu5JKgLqCSW35mQfKwEK78aA4s2CMGFR6wje2mbgEHdhWPBi3DTMLFhPG2yUSaYU4kBoEL4GrUN6wh",
  "key31": "5CMzJtTNHkUMeSsgfgHe9EHVtVdCMN857hx2TAba7eGvmbEhkP7MKAaJKgkhycxwjkYLJaxQGntKKQF7172XpyWp",
  "key32": "22yb5A3vGQEYwYSVTHMwc1k8FeTuUtLMUEAL5WsLBkcpCzAwGXpmeAJmzT4i3wgcd6htocomgZmd3bWXiGSGzaxu",
  "key33": "3cNS47tGt91Pw5Z9fkeZVE3ckY2iXQRaaubb2x9b3Luv9b4cv6mK5KSAGWZj3hKu2AWMCYQCeLAJAG536UrZ8ajX",
  "key34": "5oxajApgBPbs7z8KFbRzrUbHPU418XTJHC2vaoazMQYpBvNk2LygdY7voWhyHfWMenaoAUcWUU9PmH6rhabjYABK",
  "key35": "2Dy6swxYpBPLHBw4qMeE9nsmSbNWvAKFz73s8Mmud4GGoJb9cQfAZLeMZbV93QQScm8PfN97LRrzH7QP7UDURLU1",
  "key36": "2ktKEPbPphfSgAJiX2zF9rj1Cis9Pfdj59X76dXyFqv96qRBoqCZsfxHPbt2yGoGC8wUqN5iaRiJXWDwiuuTC232",
  "key37": "667zb5x1rXN8XyNbgym4JeZHQj7VnFCRKmMEvMe3R9qjwDZ2kF6ft36jwb4tNG1amkF25eXbgTTQgx6uXs5joAhJ"
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

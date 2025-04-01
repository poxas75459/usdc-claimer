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
    "3bSFucbEwgCgvV1esmMCxereSEVpdcySsExPUq1Vy6jGMXHT2m1S8b4eY71APyLmUAyoGCTib9kLegGXwPCF8ZxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63k26wRcFtBwzHftSrU7DJkFBCaQpWRUNxdpvKr74UGnBcETHmqhd5XXB42Mv8qGKZBqNr8gdCBaGgwRqrM6gV2C",
  "key1": "2vuiz1GxzbgLAjiA2vuNF2o1amPyyPwN8LZ99UbSTVRkvXEFfVFxCtR2R9X6cRsBEJzK36gqWMGzYuLZoSNjv7zM",
  "key2": "2yv8F7B6qDCxeEqCVWx6oF8mth6MiyBNk3CN7ThNQz8dV1TEaNR49JbdsCGp6kRF5rGYXSkmCUQH4nwNKRfxMLW9",
  "key3": "WJfJbetdDtwUGYcKYiTwBVD5NVFmFXGLaP68YMLohx4RDkFS8nJJETY2YWmVxpMPwGnQ3bJdQdtjEMJcauwwRYw",
  "key4": "5vQKvwBqQ4qrarJQQE9B5tquhW8N8iTVjoSAwEpeXa1bH2bq53x2g3F58em51zXUwKWVX3wAUpASZBghqEyBMtuF",
  "key5": "34QCg8cBRhTzC3chdPt253s9Q5AxyRH3XR831tFaJkkyQF4PhgjevE5YFPEuUd9ij9Kze9Up9apNfrrY87pPRRzz",
  "key6": "4czqJVH6iRGq4UocwK9P8voMNLrQJDrLhTGk8E9rqKCtSBAeJtZa9VqgqpxT3AhTucmH2yc379vjG5Fsnyr8QaxY",
  "key7": "copJxyYodKGyc1ejmwqE3PQ8ANhunbcibheZY63XJdqV71i9b7oxAvsGZJWqwExuNSCFUjmNmcjgzPZmXKxsWew",
  "key8": "5Ws6B93Scm23g8ruFp6vS5TmnZSt3XvXxLr6a2w8EjELQDHg8qe3XJpGMvipW6pTxF8R83qwnsrZsi8cGUjCfkdi",
  "key9": "5eHM2akv2zNpjrNS5GybrFR1CbHMJjygwHf52xfuA8B5qhNjWkAxe98A1nUr9ungfoVoyTCEw83GypU8noWAnLV7",
  "key10": "3uTwtas4Nx6yuh1RKhPz1Y4JydUKCESJy6pXL2LejaxTr81iQnezUJfD6PC9wH1xEqiT8nHt8QaucWr8PKeNsmS2",
  "key11": "614dgyDWvjqYSzH6SGnjfs1u5uJH8pmgCCQCsb5VMQVta7tguc2whESfuQqtF2PukPvnWyLEzxYbFZ2wLNQUqr26",
  "key12": "3gborgu7AqTAuu9oLQPNdQbJF45LfFq48izJvpX5tCLN3bNTVKX9zEbv7sfbePhDbXAvgPwLpDkuiXy8DdokFktR",
  "key13": "52iarZvckBAL4nUCFRTe6dfDEWNmQp977vF7FB7h8zKPtDLKsReqr2kVsCjfvhVicvsNoXhvkMBzFDdqmTPNZjUw",
  "key14": "2aNaA33Skb5K2sdJnsGvKLuSY94cnK7rey4E5WLNrTEr1bGUh2Acsz433NPUW5g7WxBWK69NBcTbUCJbUXFbCfmR",
  "key15": "2p418vGBBGEJj2v1YE3MpxzcSU3D43BzRRs1Xovrzi7qoGabuofQaybocjPeDMifBZArvi4uYxCdDKgX7L6onDMJ",
  "key16": "XxQV4n24SsBxDAw2tj7rPgUw78MZph9PfHHrsCiWxZb7ruPVQWWZqnkyYaVgSjQLJCgBexCL6S8FMPYXGZ4d389",
  "key17": "2A2DuyrDupgUy832hnZSxZoN4ojhemXaXYUFX2HgTa2iid7eQRrCNiPAa4q7qU2KPUGHB7ujpVL2Uq2wJu7bnATm",
  "key18": "4oC6ukw7FhQ9Z2ksUuw3EgeHVpSYoz4Zx1yAvgn1vcccENpobNJtj6XN3RmUQiKtrpnBPpcyZDc2gYrpsjc3ed3B",
  "key19": "5Dfa9ytNUpqqGN8bQMAyKEoYRpphww7Fvq6Bg6PfruYBiBEggvcfd2JTnP7ACPWAToWBehvV5pgb5PiQXdkp6bUs",
  "key20": "66VuKoBQDCqT2husBecoLXkNmSx66rTNgreF9qwkGvYbDctyUguQH8NxVrPypD5HRgsWBprZj6yQUVAzyTQgrGyj",
  "key21": "3eJ9YUS5ejTFgpD17aawbecpTs5gCQ2oLpc6Tw8nfiLdAYhz1DrfPaUoWfbkSmTgw5oABJCz8L2Hx4KyDWfKmoRn",
  "key22": "KM1jHFxeSU95SatDieY5Aw67Vs8v6YjTgFGnQGRYEb45d6i9jEm51TjgLNnoacoKsEXjKjSsNRDj46cgcvFofhy",
  "key23": "5jxLJkF6efHFzQwGFVWtDYgBervAxCB4wVgEDtQmsAmQSv2U7FVtfW7hrmWogYnb78jemaHAjSLU9Cyo8BvnD81H",
  "key24": "3yuBZqPgfb8KEfLwYwZHoowFz9umJTdGuirB7pqm3GJC52CctTS77U15ErhvjNWPsw6vA1p3SS7T8ENapPLBCY9K",
  "key25": "CpzPohC6SpfghDyd1B7Use8vopQCB9Ja96uHUHfjLzZau6oMWE9mz7rESgmdFGHeqXAS2yrHL5BbYND6adWKsgz",
  "key26": "JvSFBCjWSPBmvUTJBKaUGZvPKsjDmCsSjeRMeMqZ82YxgXEPo9hHYkKZRUSuf173MuVwAMAQg5F4DzRsYpz4G4p",
  "key27": "4mFYJ2Dt8Hh9egSXaomr8K5h3L15EdbYfnhLF8vBC9Ru8z7sv6Y56Hyh5nyXPtGLuA6K6qTJkDJcs8NL8USvFaCi",
  "key28": "4u84S8sBVS7k5ew9sM1pf6srMHgUsKSqoH3atgPQDbtdYn4rCFrqKoWqHZK3iCyo3sYXWHu4PDSxbHCbuuKkaNUj",
  "key29": "3ymgGaPiiUQEbKJtFmwL8hSdiu15gkSAr1stjGkJFQoixBt4yeZGaPw7xMVkmQD4nKdNycrWBWEGUGEghxTgKHaG",
  "key30": "2Tr6ekQxYhb6ssxRKkVjoz6SB3G2vmVkHnshsVSSXncc5LzNU2NXaik8aZYcqYYZ8uSyKt8aqf6tVWcnqPBwTQoX",
  "key31": "jbVtzpbXtjsyG6xXP5pzxwY13vWThyFCAn3SMiuroXy5AFW4S4rLhCu74gvYKcZVwJDZJKxMtR9HoSw6wLZ58M5",
  "key32": "2fKZHVa95kLCX3g6P3fVQYTnkCVdRLEFtb2Chr6NiUNDGKZWxVgU4wuB11a21oKrCsZ1J5BPgtyeTue2Kp9XBtUY",
  "key33": "xf3ktAyCpfHZkfFqMMLXuiqvB6BndiWWce1WThtt1sjmGEzYJkbhgjfrWDGbemnAgTtcCVZg1A7tWovjeWoHaKa",
  "key34": "2AjjvcqKhhMX91aDWtMo97SUNQRNt6oDs83hp9h7WJuuKVWRbA3Li51WRvY1SA235HgqUau5qzMcUx8BN4VVHG9w",
  "key35": "4KTdunUbnXbYEfgzEpF8aE7oFAFp21FhcK316sPXghbMDXifbTkYY98S9Luhb7yEMrvqtK9YCCjn3HoibH3mBoWC",
  "key36": "3Wqeg8yApyFrdCmAhAd2b9kF5YWvKD8rwjTA1pZ2M7ZprX2mwM1xyKLEYAW6ZrmT2gGi4pqUQPwLiNsvDcbsRLhV",
  "key37": "D73Zo7oqk1XJ3ddAzyhCPb2HKPaL4kMXSygYuF7UBRowUcAz7kC5Phru1R4KhJy8RYjUJ2YqJeepKEF5PPXLBkM",
  "key38": "4hzZHhkeyuF3bcSQQZryJuLR6AiGpwLV1yEHt5APS2zgGyHNzfbyrEKxKcfKi28hpk7qMhR4SeZ12JC7rW25t8C3",
  "key39": "5oLxoNZ3ZPZNvZxiwnzhm1kZbTPPzNghxW4fRouVgA2eQrQo5yuWmLoR2y9wufpKbgaNtCbAdSp8aq75DtFDNu2C",
  "key40": "2wgFKnLXYHYGCYQcTfpEdRP9DdkEtwoX6BscN4cxk8RTdZ2FkQKnBKbfsb3rhQ1rZfSePkZNuqgcWjLkzGgKj7Kc",
  "key41": "64pQbnFpETWdmbCXhGyP5XEHcgzYnmkE245m8w1p1SHKXV794DM8KVq61RzBDEpExu1hnM8wgd9K9BftWzazuJS1",
  "key42": "4mQYzre5raHJKfp3JjC8wo9U2U1D1dY8em65mvZ6rTouqHJ8doPTNKYwzuuwJj25Qrg5fPpdU65Bov7P24PajK8y",
  "key43": "5KdovsX9a3jxzcdJJL31NiHg5U9ghghXfBhcPnNDFR5o7ywF9HPdcmPStfZEEi5JDRvzXts98tHD6G1XpZ2wbLbc"
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

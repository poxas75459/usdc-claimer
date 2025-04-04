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
    "43KtymQHsttd1TZHHFgXofwcAog6R8xXdTAd5dJ853n8f9JD57RfZneoDYNyxp8oRqRVgwv7cYeaemjhK6Vf32t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VrgzL2pLTEPRcML7q7TtSnUQDw7bdKLxvCeDLTrKvyrZrcwtkDxxF22wAsCDVK1uyvVk91iDKJSQNrJzRJF3Eio",
  "key1": "2pWDBT1RDtUS67nKB5YXQkzD9c9k7hHdxvVHA72zE7kX3G77njWhcTSA1Kq3WZmXhgRMdFbCBTfr96ww935dpSPM",
  "key2": "3R7eWCsb1cKcHASwAhQzQ95m3NSpNvMzWsKeChzaAthfPctP5FnPhUt6uepZK9z463An8GhHr5UE1KrfMDttVJg3",
  "key3": "4ZNFnuM6hPEA6JAqi462AC5atakc7Khsb4rjapadHMJPHEWv7LNKdzEM3ZTEdeHSboEs8zoDBX5cJdrBtuTUDAhb",
  "key4": "3Ru2AzA3S21sQbTinD6PAr9kxq7v8WnEypZUT6VkjJ8Y9yKEfX7AbXLcLoykUkqFoK5JaAG6U7jUSd5V3QCcvxk3",
  "key5": "4cuxF59eFR4t2HrA9jHpXcwMcbdpjcKC4kDAahj7pQ6cEXV5UDDhRtuWWxnHizaScCWK6Kz3jGcsUSqeePF2unY8",
  "key6": "2QizhgBZeK4EnDK6M2q7xoWKJdEgC5Mt3FGTbxXpPmmabjM7yobA46TN5iNBcbEvmi88ZV6bvA3V5RzMzPhBAQj9",
  "key7": "qUvfwDdqTrq9o9MXSe3Ky1cjqWkrbQgnK7w4P7k8CFbah7QgttwUD4uVdCAJzaQg8wyvpJjJiQS7jXQ3WLFNz9V",
  "key8": "3o5whTqXFHuPocwVzJqVBNGoRQY6sTm8bCrTcSRscaMnVuMZVUdnRHX4Fubdk7NYJ1QDn4g26D31544UKsEa8mhr",
  "key9": "32x2AUNHjbq3bVQ8cNRU6i47Qc8zKr81zKUtRSYGc6quxPrcxwy8MmnAYjqVfyagx4fw3KHs1SyRr8MB7QvwSejY",
  "key10": "4tZXCUEMvYVH772QVRmRSa8FLQUvfhL9gqE8jzWLpTW74kZiYSnJa8YpxJi3VrmKpfmqyzR3W6hyuu4w8gRy9Ev5",
  "key11": "UxVVvZMJ9N3oQYGq8ANs9NFFCvLXUXGqz6ZE2zBpei3Xh1egQ6bTaKpzfCiSn9nyCjR1KioG2qhAZRGku3R71my",
  "key12": "34586MXbdZ2FHGmsy8vosfXdhrUtfDTX1rRkhwCBKARBtaMiYFiadGKqFiBG1GR5BPsJ5MM8UiYYcEWpAg13LrWG",
  "key13": "2wJbY1tFJWWMMtq32x7DB2v7G7amN9UM3KRN9jbhRXB5AnF5oZpjWf5WQQg67mRzcAwfiiiCjzn2b3kcaNQ95p6P",
  "key14": "48NGbPvDam6qTiStnzjhrDakjLZyyx6kqk5pyTUQwmzKvM85YR1w91x5nQs1rJnBqLxBPVrnsX81u4JQH3SCQaAn",
  "key15": "PCrknkyZ7s6Xrp4dE9aCk8ABtQdiuwQrmeFNribzDDWCzLP7idPAii8GtsW9sRk8EksW2swvUZskFf2BHrLUuSv",
  "key16": "3e2BkTy5KMcQ71tPMvmRLoU854GyjSi43F5dvxoVM1ZBgYhY7gYJi52xt6DEfAGFWCvJfF7zcjXMq19ABSfRkNAo",
  "key17": "2yphkoKJ5Gus4etmKAym6E27ATQFr2RJjfhm59iNa3ANNyXEX4ePPWFf72YFYEXNxjskR4KyLvkpkm1rHzo8kAYQ",
  "key18": "4bY5FDg3jBwaqxWWyCrK7WR64DnFoqBAJtDoAK2zxSz6YMRHhVphxFz8QJUryehDGYu3NpAtrcFaN5uH5NDPTjZ5",
  "key19": "3LGfVUk3RGw5odhNLvKmALKUdXyZkNr9chuExZSvmDudQcxDmxFD3uDLFTiFBrc3FaHMYpnPhzQb9eF9gbJnPYi3",
  "key20": "2mGEntf88CCvNfogRNhxWqkAyruF5dtZQrrnRUM8H4ENDagPQ49GrmnFoaLT7UJwiifoY4dGZLipshA7vCkuQFdn",
  "key21": "mHKrop65dtbVpVWvYxLFj3QE3NuhTe567kwx34AUd5QPXPzVbqMDfjNr8hPzt6xn4XcLXc24srCzVuxUCN1NLKJ",
  "key22": "3HAGXaV45EpgK9D3AND1LUSitcUz6rcrKg3ryLYb1hdFRSTaBK9uyc2Hb1Y7u1N9ukU5T8K5AnRF6FPNbWDJMmXc",
  "key23": "37bWK1aoD4ZsonsD1PfLxamzeErCxAZGWbX9YNKBeSHZzdRq8UWeCZXz4ePbCCs69mEta5pHenJ4g5Q8Vp3VRxah",
  "key24": "fkxQ8drbWjRtBavGQSpQzBqLgv5Pwycri86WydDeejxwx4fqJhzf1wUnuhV8nZjdRf6cMRykDgnnKUyc7JHW5eT",
  "key25": "5Ptr4g6eNAoeVgWAVnPJgF27CU5QxiJKdkw5TmWopbL5fzDbENP7pep3QKcEbpayP8ZMnUsK9KLeguBmweSzcsoe",
  "key26": "2daRHhwYshEZocSTYp7Wn7fgwEf3LLXWPFQJocv6KHMkCvDTojaLGF624FxQr1E524mSyRcNEfFUQiAz3EqLJURz",
  "key27": "3Jq4R7YjDJEBa66LnaFxS4dk9GSLcgK2Zk71u727gzcHnRpPqVVRTSpSdTjJmEBJCGMjcmWRnxkWqA6LZjppr1qc",
  "key28": "2sPZGD91cgTQrVwJ6zgVeNjRrknfvjFSaN7qy24Zoxyi3n3R3zJKTE9R9Etaizu8uJJamqYa2tRdPdWJHmnfe3e4",
  "key29": "4DfAJECj1rbPBevjTS2YwnmDtZbSvAwzqHjzuuWqQNftZPBKhWN2MujpChmiXYArhtkWwaWNDaXc6UWdVCXte7Ui",
  "key30": "3eBMSLPRyFRt9mdNg9fYsQWos6WzrSERQBDwymhonpynWADH8qnH7sKMuzsdkt3tHLA31FDX5aChmDuonHg9fL9M",
  "key31": "5iShCmkXFNe3TiFP7HeBykxjsU2wKZwxXN7fyEsfVAWeoE2AfSsEdskumDqPgSKyrQh96DooEMrrkXVqSwZtrwdZ",
  "key32": "48dMBAGE397RaHTPwFM7S3SvcSSG4rZjKuLvJNA7cbFa6g8w4aLQvEQSLom2PypFxh2pFKocdY89RRHSgMSURTg8",
  "key33": "2nG23EmpywmpAhHPkWgE7fVCi6HqsEzsgNayCU8XaTSB3fgEtj2DvjuB7E76UD39nCUTm7Dfh6ezuYq7v3Fx7Sp7",
  "key34": "4ajuzYBgCr8fsrEYu8LXXZapGu4QW9FDfjaykywsPtKu9sPS14fG8DD3yUyCu6GWhAzGppsEeReTLfDQrtJ5ngxu",
  "key35": "3ZSRQopyjsEGTsWHihRYf3XyKFLWE9dcnY7Dre7wFGnBYEQKvTkKrcELF7K5m7tMHZ7njE5TF2ye7kqEvcbSd7bD",
  "key36": "5uA3Bq6XuRQXtLUNbn8PNTqhvPKzkEx9Hegd1ZZKmMpCAZwUMsKStVxp57aRpM76uT4mqcbSLVStrLDi2J8jn8ix",
  "key37": "2rCAcxhBvSLMDuAWdFvExaoYymGtwjRhRDiaByHb5vKvrwJo5Qcf53o5xgBMhaj4KPVvwabpn641HZjJ6tYD6EtG",
  "key38": "7ZH6QCwM88rmrqXnDem2zDuWz1Mr2SY9FgqCDyNfRotuCctZfE3tjNET47nREAV4W5HM2Ks4LznTeeP7a5BmKWo",
  "key39": "XAg6xXTnaYckSkRqXPJm67XqaZEP1UPZqZ3Mj1gWcKMoYhkiu3nSpQFDbiSNSJ9bTSv1Wryphmmw72nhqvrzZJ4",
  "key40": "67SYBfb9SLWnsPBm3ACH1e7EsQbTdyqve7NQUXTXpKSCkiyK9fwbNeL1j1p4sYuW6qZPxY6jexGXjoTgLbUNV1tJ",
  "key41": "3NqVwLfRaSKNYg3tZJBoXWeXtFrC1PFGuKKJhW1gfk4yX4DJwqHekM9zBeCej1Z4rtx3y3YCm8hN36fzydapFQcc",
  "key42": "wDo9ZPTWdwTbN9buiJMfTbfBzPhv2w3KXU3oe7Nd3VQNGntG1apAAchyvfFvJi4npeU7qDR5qyANw8FG4utA5ti",
  "key43": "46GwW72ZfsrXfQfBsVELM8eEJo7is3hwC25R4GmVk3ZRTR2RSTgegLZjyYvvtaA8eW6UemDRpf6Hw7fpxQGqaBL3",
  "key44": "3qrGSjXrehYj4jWJ35hKqyi8kTjKWpeuae9hqR4LoDHtipFSgRCNpL3yjy5cUzTrqvYV4mYikJLRqcyxxomSrWBE",
  "key45": "4sqGLF8qT6LyKoNY5qEJzw8mR9vr5Ep1DrLqhbcpMvtxFY5fVWamdngPLjFRZ334Vz6zQwPbw7YznKEqPhp67d6z",
  "key46": "DXWQzTWijr3BJuiqJhnokGCxfXTGerStHAHCDPkeGG5ebkuMRr739yKUVN8tou4SexLMRimE9sfWVxbYk2zbUF9",
  "key47": "5RMdZcfxKuhTwP6TuyaJPGv7NTTryyptsXNmEcmpPYpLzRPg8p1TzRyfevM9Y8bmQ2VBGrVHQaWuTR8GeoKPNB8h"
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

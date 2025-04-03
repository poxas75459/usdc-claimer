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
    "2B77JWZgdBek9TtUFCYomCQiXsZjUWCDgTUE8WfYTkEtgwBKPvow7w8bN3npVipJsnsQZVmtra4tepzS6iQocWph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPd4tiNRRTmzPVYdNsBzqcfuUMKPavLqe8BBcXjKQwiJnqfUejKXLe9dFZFxLcDEShcLR5AYN3sVUHGyBq4Z3vH",
  "key1": "kPaCVG8UvxnPSoZ5FVxwVr26iYZCoYGntfdPSPiDAUA8sK7GnT2yC2Kpg8UghifzmnYW9sMjF1dGiiMhufLujLB",
  "key2": "3QUMzvXe6yszKHwbvQssdZ8PFX4ke4gXExh2d18PT3diUGPoGgYUAFgDo4ZxCmUfLKNkQjaFFQyWLwoBvCJG4YmB",
  "key3": "2yeWeZTAzQB2fHPQ9D8q8XHZCi4JBjqF16HMuRogzUCnYERub618cGggE7Q2zXHQyh8AhrScB1T8W9iXD8NfvLNm",
  "key4": "5rub61jFGsiN1QxvUSGmamxFQDMfmjSQEVbt9PBtYoNGyhQXeVWJ9JaBSjTsxuicr1BBxBiiqxJfUPYHezfTKkoe",
  "key5": "5T2JuyRcbS56En2nuVprbfCBgKxQ4q7RH1C1TZeMEz5FXJJEPyk3WW4xZ6U8nzcSDPD7AUnKsFqjSFGVt1dLXK7C",
  "key6": "39RKZerqsLiAfNVHZv5PBife5ymAx8T25J6y22Nc4QGayPs3t1ohV8QdQe6tnq6MEXsAGTeM3s59LBVUq7pVreKQ",
  "key7": "5p8naPF1NqX3hzMKhY5HmPtd46XEkGHkHiq7TYsU8ELwyHGb4BGFSnZBAHhTkbk1RA5W1fWzTDMBR1qkB2j7Xa7o",
  "key8": "Ev72eBg74Chb8LiUcuTxzYQbQyY3u8bKtgYvkXeK7Rnf1RqvDDe3rcdabKSLqyTN8LLiHX9x1keXaDrVeu1U9gQ",
  "key9": "FHpHX1o3tmaA6i7AFyxC6b5pURR3Bo17Pk6qaJx9339ntBkGvmndD61M5W6ZTeLkNtoWshPyzmMvTYuSkp7RvmW",
  "key10": "3Tj24xUZmyY6qD9BEzzQiv3heNhgpbTTqsE6UEoWHb9oFWASegwJCGcbCDGYRxECPWxPZD9twc4Sr1XU6SwoXcRJ",
  "key11": "3GQ2q93ZH43WCrDcjtV37TFYaU6qeDt6ozDSutPMKMwHuPXKNP87JsyVkAtdzytsJfQUs2vsXUVXuBWUELKeFfo",
  "key12": "65brMUvkPzC86ewmh2x2enghhtcV5s4qREjY1TrzpVyaKHrCnhTiLSs1JSp7e8iBGvBoQfV5wV6Q6W3cuwWSsT5B",
  "key13": "4AtcUKNBoFjereBNjn3qLR62VTp3xfjEkgsGecTxC3znVnjBxcrqPitPcFeYk7qXSeMC4H1XN5GLTXh2E4Piynaj",
  "key14": "3fZ8bQMjAzowDYgeMCmv2yEaVyHmBc4ch1sPPeBVG2ZmebW5xmN5f9U9yBEzPcGAHfowNuTXyExNDFghsYa9qdK2",
  "key15": "49Zc73CLv5p1tdY24UEsy6ZckB4DhASg1riiyRCPYQXrLHat7c3yYhU4LhNK1qwGq85z2apQiCuozF4RvJLDsXP4",
  "key16": "2gcPK1JAX3DUyF7jeS9Cr1F4Kfy3STycpuuLdXMbpa84pyVKaDGZhK3jy4YHCgfLh1Ru6sYR3C3mTpuMfdjYBJM",
  "key17": "3CGgzkHLQ3PoCDu4Te6QxXQvb8NhUxCNkk4kAc5RZUmgmRGi85FqtPYmBioSEfNsssbDPH9MYpNDG2JFZCHJKJaS",
  "key18": "3spVG4jX1YLbRAd24aSp7saFG37rUmM8ahsQhUT12YezS89YaW2upz4z7zR5prgRWJaR7xvTNsEkLkaUQ1tGd3C6",
  "key19": "4TbRzMVEkUmBDwk1EPmbBNkw9RFrhUehnt8yMW3Z34SwaigiHxehHsLdLcJNmPiHd4bFNEQnJqdrfy5oVEgREK5V",
  "key20": "4AjyceMijraKyNacX98LhtYrTYhzcSV9kz339ssYr87o6CmTymUZrQHwuPgQBZvgyzSkDjhrGSx2B2cXBzxhL7m",
  "key21": "MtJN6WS1xXzDejy2Qeq4NdYj2eTiWAFUzfQMhtpes1wuEyG4xjN7nBrnh3y4au1jnrUd4s4Bcx4NKL2nTWDwjhm",
  "key22": "5kJsYqcSBWPJUPNcgmgpYVkTqpjGWYbedMboZhD171WpobJGNEgVnDJkagcfmN4nsPHo3puzmJZ1KfSUParC6p5p",
  "key23": "2qc9UqnYsyx73u2tyG5bYQQh6AgWb3VQWyHwAiaXpcVXFGdnV3FqzxKVFhNPfDzj9nz5XvYEg8yPkhZLRos5M1fv",
  "key24": "2sJ747VDj7un6wGFMGyAr4YJ8THsMgTcUZMxAEhekcj7HzEjCM7v36M2N6EL4nTq3KRzJGDxZ3RxZHKT2n6wrWNx",
  "key25": "3X9kPhmZt2Pv1R4YoCfebpr97hf3jB2b3e22NTFV2LKoCtV275waJg4W8S5WHg5hqJJrYBkkMSz3RZJGXTyEYJAq",
  "key26": "45KBfsmQrvgqM93ymmnWNMNBk3gkRKTVKAHDtSnYfpcLUSpCYcVHYG3Ez3jtx1nGc1cj9fbCj1AoGPUgMJ5W4cw6",
  "key27": "9FYGydctBrgpHXk1ZMoy5RM3qQqfQs8xjKmkvhL618j93gDQRpVD9w3nDSRgbhGRbRfZ4eYn4PkWdprW2HMT1dA",
  "key28": "2CbYMYjbzDfhvygfUkGS4KLtyzSMs4xWPz9VKATBVAZ2kRbdHueXfHFJqtZP4Xmxv6UaKi8foScGtRr7keMgUQVu",
  "key29": "4GH8knfKZE2Zxn32JtRj6BqpqueQUdbV2W6bx7bnYS9tiM9946eP6DoNbHP23N3CCKfXe5N7XM3dZufZC3czbNyP",
  "key30": "3tXcx8dBwDuCTa7yohjYGJaD8GyEHZ3sBsK9TbpP5xafQtp9nUwpE3qAnixVjTGZEHj1yTrCZsjzM6NWz9HoiYK8",
  "key31": "24epAeyCbP7vKW5KSfvyu1qMXSgBMhN6kyC2pmuecPq6WXYTQXdXPg3ocWxAiKZh433QnYp2xXN3RoC2YCP16kCp",
  "key32": "4cpkdr8VjRAcHFoqMvWsGrGA1EmkreC5AufsTCWHW2XaBGHvnK4nRTCzzzNQMJpvxCn7uRYhdWc5LybxVHQjBiAG",
  "key33": "5nSWqFed6ChpQNc8rXrMGY9D3xyNRrrA5gxjBCKSRvAx1eTTjGVT7Gq6h8FqGDoQb8AVh6Vvvzezknd36oJqgaw2",
  "key34": "dPphifsuafny4RvsDUkW2Ez8cLC3vxuYREv9CtgwmPJxE6HdfRTEW5WCuJbxmgcfXWBvp1rkpqvqmnH8nXHBUHt",
  "key35": "2DJ3QAwxDvAAj2mELwmKu8ZADx24QQYkjLRLxwM7fGN47K3Edvrp3ReWa1b9bgnmCxxSPeGexiXLrroZ23ND9JC8",
  "key36": "JyKP7AmLGLTB8h1KDhc6pTc7bcv3EeYCnrVm5RQWgsqJhofzDCeDCF5T7sgSGx1L5edXSSTL2HHvgAKkXsp9GF2",
  "key37": "3WEzWSVfaHwe2NnMWgLRNKk2h6CR2Nttn2HD3G5Mj6zi6sge3f4hA3U2nZ6dVxhL2zGmdyZcQYmAcVQdEVDLkEz8",
  "key38": "vGngct4jnfLdrcGPuJGS1jf7tHAY1pvviKWVFqsGFd6W38biJKTQ7mMZBJLKUZ3buexbDxGHQJiKth1BRuPSWc1",
  "key39": "3rKGtTSHhXjjdE8XEZQnBN9CdCnZu9FdvrLZVMVXjG48CR9UnAjcEGWA8yJaMFemZFxSioryJLcNtTqqnEccvSNv",
  "key40": "4cCgPWNvkGkij8VhdhVcLvERrz5EhRabqmvmFis7TDoFccKGGJWXu8ALr5hFCqDhxQy9t8FCoLNEmjXp19jr7Q7y",
  "key41": "63CA6fX8rm3ZDZ5oL85mt9gZKhRUhvm4FRR1CBGpCr8i7ewstLjg4cADxfPqJisK52h1pNVJbcHr23Pto7oP9VLX",
  "key42": "4vAn7mkidd5wK42N6c8DQUNLanssr1zZaMJsNXn4N85WwZArpYQC2hda5kLRrnQzAbSghUpMJn9XByJzUigULkt",
  "key43": "3fi85Xxp9BGxPD3N527Rgho7mmStUsmBkc2MSHnMybRSYQFYJJRu7iGS5nqDiFqxyAe4NrU8AiAr3335MhRdNxnv",
  "key44": "H1TpBUBas5aNdRwxTQcQbbu4CguYmp8YEBACMPeaD4sHfHwsr13zbQA32NfRkBRLgEv3yr6Bn8AEaLeNBL3sJpc"
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

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
    "49ha2r5NtniGbovnFi6MVC3PVaULtuguGu1sNxh8mLr8CcRtSqAa3MYbY6ekzVWuEk9A9521dzqiZ9urskLfphqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSNoBqrRasCXV3ahBajGrXbs8z8c2WakF6QPkgn83CMXki2ferT1CvyhiMmYUTfmSSMXowXUg5yHZRytG2Gh3e4",
  "key1": "pxWPumuHG9XMS9PyDz9JZt4JZp6mPXDNA5WspAfgjTg2VihsYSGkkwDx95HrLk3JtMFhFURb4WcxkJbyXpC5Eu6",
  "key2": "4Q8MpDvGqv6hpDfo2HN4tiGoGHz3VCDv2XAQuro8u8122owVaA4N8iQTMES2fzSPFKBsdD51Gk4BYepGuYfgqmtZ",
  "key3": "5mi8nf8A5FEX7eArcHbqmXsxJVvtjREgEbSEeQQ9Mvj7agJPSRqAi9oK9EMSWEtVw1UTx6WaTAoHhdfhKF4SRc78",
  "key4": "5vtn8GX8Y1c6ej7vzG6HMkshPqP8RXVnZmMvnAwyXESUx6p1gckrRAidNryL1msiGL438t5YBrkB5b7rzuJgLyF6",
  "key5": "4ecQvYM86QJaPEDnHufDz4dv9zckqtp6EtAvYma8qrBDjPvD7nUMZRRvnQB6dqrH39XNXzCaavnKmYYgL1gsN1Q3",
  "key6": "31v9CV59QXrpYZX5nnFgiNkSq9mZYtoJng3jrxN2Qnpz8nRDuuxQqmU3y5LqTcB3WrUDHdB3w62fGS8QWQQGcae5",
  "key7": "3AHV4DNGN7ga1VHR4tWjdnuERh8edP4AEHd8KD4MB7dvvZq5J2zAxomLmdwRveWWNgmkbZr5Ze9hLwBfUkYXvZ3y",
  "key8": "4qdHDrA6BYKSzAyZru1rMJWwNAEx8J46WKm6mZf9haphUm8hbYA1XJ9euWN2xrU7zyEKrHcE1SD3wnqyCPTc3BQR",
  "key9": "4T2yZK8BTgsQfVS7YL3WpiL6USy3enxbGgDrF9K3ussSNUV5W5seNdfMFT9rxkUBu7sjvXBQnTnKiyjnhHnF1uvo",
  "key10": "DbA4dwwvmDixQh4dnf8AnLmbodhopwqbTsvaECaTZdJsJCc29GiffGSmm2ug7aUqSk1cvempuP86f7J9JUtBWix",
  "key11": "BAfACwkyFsFHpd2KMHCP1eWZnaroJ2n3zXNZR9Eq84H6g837PYGityd88MxoxFSrbrAiY4yjXY4XcN4AZW7bxbB",
  "key12": "2YCUHtrTCmASk1yivj96jy3d2FdEZEaNx3EKr8sWHVAvtwXyfJUef7rk23arm4sqydZ57vC8VTjLC7Ucb96BYZZh",
  "key13": "4zYjYS6To5dJNJczkzLcKE81QL7o7XEtbaCo8vDHBb17ewUeiRE1VEmJU7mQ1YcrSnULFoWLCED3e26Kb7coZ6z5",
  "key14": "2kHw4ZZgwLnoGmsHqkxJEVvwKAfgfRnN7XBrhQj24U6R57t7VQYk2DVqsAj3F6V5FPgHncTWBJgGYFzMmLcC9ScB",
  "key15": "4vT6qa2Cq8WJhZ8ffKUttxd8FJukRuNhxM8aXzUn8p2Ab3dQsc6ZuQ9Nd6dRBexsMhtdME3JzuN2cbt85UFsnCkx",
  "key16": "DrQgVZqcS2tVCksJ5298N8TC5sY2QYuPLiEkTgouELpzYYLRz34fMDz3MdMkdfCaoe4u8xHH5QXgFZK4gPD3PJr",
  "key17": "5bk2FuNPmVpjHHX7Nq2EqbnYnS1zs7b8xUGbiXopwQCJ9DjAEgYo2XXxY8ZHAJET4oRki8uR4NGkMgDNFpF4Nj8u",
  "key18": "59AVydFCUzPAKX6R55ZcPGxnvwaLjGD8nudh3AAeiXrfygmp98QZFC4pyEcVmWA72gxAkpE7SFhZMxe5YkqX1SSn",
  "key19": "5iPu9MpWasWSxg4ooPAERmj6Xp5Y8UrmaeC4y2tPFMri1WLmPqW3jb8Y718QsPwFvFaknwzXMCwXEqbpnk11U7SJ",
  "key20": "5mXBgmrB4QZYYcJ9kLaXEToNEwW2Xzi1TKTK48NvR8dPo3yJgHX9ZZNd23q6vt8xCqF29C1zBmxxv2EZRMRzuwsF",
  "key21": "5b7e7t8fVaVhLYCLVVeHtWaFnw8nUAmskvXGxz1kLtMpxmAhLPvrCP7MzTdgGeroJuHWnQMJcp44Q3hTMaKLqB7c",
  "key22": "3G7SrDLko2MM3L8YN4B5VfTRAn5J3NCpc9NdJixbukMYXfopecAVWFuvPiAZ3Mm5CpnncqWs2gJJntNfdqvJ3sbp",
  "key23": "56fLWsrGPMKE9qmJkZ7gfpPuinDc2piLH9snCviheTBbd7Hy3u8iXRm8bR38oPpBx3ou6FVhBemZ6TtvasSoDqig",
  "key24": "4cSSsRUV5UnybkM54dCx7Eaoar6ghsfiJdAQp99fPc2GK3iJeNsEUS1uCBz71BRn7Q5ZcrTPac23PRziic8a1568",
  "key25": "4aHs4WrwQw35WkMNf4q8YB8b969nRBzqD6HbW4RgiEpeFUDNCW5A9PpSRCG64JcRMU5gWGNmfyQ5MafeZAPKv6B5",
  "key26": "65ggr9waaARzyoow1tDkAtWRL4avw18Uqvngfdp2DEo7gKLMdxJCaJhz4WQjS3qzYMai28ci8Ktu1hnqrbNK3AfN",
  "key27": "PpU4bgaWBMFqS4BvJWai4JKurQJHVch3EvEu1TedrHFDbADq6wabtHRWvr4tomq9Wd1qtXtT3hY86a7Aoy3yxbk",
  "key28": "4hxYasei7dUhGZFEaQKmE4i5hx3gSBTjeHvbvMy1QBfDvWgkpXzTLuN3mrKwfucBqVEfh65Lud1Lrtv4tpgcSuf7",
  "key29": "56b7NE6bc51CAbeTSDVBJjvn3w8GavUbLFP4AeASMxVxrxTmfHzaPXi47yCMW3Sem9raWNkXfHPfyKpkWZU57LPs",
  "key30": "5JxYfaBKgeuc3SRufBHrKETGp57EhB6kvKyAzoGjLqvNEyQwoWnvzV5oksU5mJ9uUoYdcri7WiM6etcNqFQ6zdY9",
  "key31": "29tcVuRJtxUa2mAmdxgfedfwzEmgzEMFwtr6rYrVjbXGy5nPmjGKMdve5W5DmVCLNT71jLLq1pV2CsYC7Tm1nrPb",
  "key32": "34DfiTVAFrnq6FaBHATKKG7HXL4BUrBrFKceRVqxMoh9s92pMdeyAbcuwqXCf2oaerYUscJkKHvjGhgv87RoYvPd",
  "key33": "4ZdqsTa3LpgYNeXXUuGkVtA2xDi1yQxwdUJzXkGfw5KDVeVYp4FQ27WXPxLqajNi4pFhziMo68paU46NbV2CkRuX",
  "key34": "3FFpGeCuncwvMVNLv5jkKZZgyv6zp1ss4c3ffEMY3VpWfpYBWK1hdEsQbxDMrAAozKjQi1gtR2V9cMgS4wGNoTRR",
  "key35": "4Y3LwnUjMs4Zi5avK9NXiWExYKGupeiWwM7rs7btSgVqmwK2bjr52bgKpo9txxYDmpkbvquNSn8LUpT6yJJgiJVe",
  "key36": "5K1B5D3ekV6h7RBp2tXAmHc6ErXoBtD3JzVM2x8tPpAc7V9UQNawGn2YoqShKqBTN7kPsohJ2aRVuGp8aLPZAQ65",
  "key37": "3dGMpAUH84cHV7qp1YFyo8nRANcwQyE2TqitcRqnX6ukZPqeJY1FXG1kxKAXZXZdxidaX2b29Zjag4yLf8ok8VGA",
  "key38": "4PnDtvkBixsspohFjgLYysJp5bU4hDuvATjjwZKpMEsxmL4kvm91koEjfWkJu9tg2g2H9wzdtMS82eed7b5px2qA",
  "key39": "5gGnNm3gxKU2v4FdL6jdUqfE4AAYDgc3nzHwHD3zGiaVwXA2iKLhNsA6ipVjCPPM177TwxQ5qjSwrXj8S7BbWxpM",
  "key40": "5A9XwzmVcWGB7diGESSQmDKSApaqfVfJhgHvQfstbVfBXASK4JH5PcWBnBg9crkrURooPARwTYFmK1d2oUvBHaEH"
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

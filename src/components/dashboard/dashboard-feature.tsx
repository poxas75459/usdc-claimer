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
    "96Qnt6x7CLok1sFDevNXiPFV3Q3XFWv8tYbUhsDzw2zaGhzECiG4PNYhkhnk8S2EHzxJxWPWyJ4LDDk5ZeUJSYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pBi3CkeH3bRpFAVgNPh9zrAMQ3V8SgmzEQ8RxovspCyc8dJRZQgaoyJzLKsDcSVCUFjHcMewPUDucCcgrACv7bL",
  "key1": "38ou6KfaMaX7RZ1agnusGyhFgstiyM6EyEae7xqBA9qqNeAuZTvBannWdBYE386eMjW7ZUWP7Mf2L7HN8UJaLTFi",
  "key2": "5hkRsqJGjepx7VeE1Umsy4RJt8ttPtRcvMDezAmjb1mJ2f9cnZAcuLid9tDD1gevLADe2ud7jvn98Cngb9RBbq5Z",
  "key3": "5nCY59mAnUW4bxLJGp4kR9WJM5Suk5BMi4QXxFNpRh7JxtUDrwnYJQvK9i4P6AYDX277RT7XbYDcGbK8sf5sJAQi",
  "key4": "5HVrAK88X1zDJadCJ26qnMHYKzBFeUR9erVxEYnh78yCu5yUNjJGbpx3QHa3pW64vvLEvVKTEBKpMqibAUTJcEqn",
  "key5": "4gFE5MmG9e8TzWuW3E3x3LybhKHyFocn1fUixNZMnsW5bvWogx92jgBmKScEJLjZJ8mh8Hn7E91kfG2YsURd5qqx",
  "key6": "RT3r5jPssKDsvuFJGgyz54dHMkhQZ3i1QP7RQudKwkGjrrqL3DTxrgYWCZTpU8mjsPMynaBGtALiTjXTCjqZwKD",
  "key7": "5V8DXSPJbLeomXZPqJqvezGNY3qXEdisivDvfcjZ7LAniRwHxpQkPERBcu7MtND52rgf3wrG4YptaSHu49ysruYi",
  "key8": "3z8w851Pa2TJxrtRC9QbEoLAQ4LeTbPNCoVZtSaXFd6AkJGkgvJKZnYsHK3NdruMYbRffPnsMX6PQ427djAZ5PvF",
  "key9": "3w1oXEUosKU1wfyQ5GZBVC87xkkNBzgVBBRdJRvyGgTVE4HjtAQKwaCPHAB8LWsyXJgVvoG8yNL1ji8Zqbzwb6L4",
  "key10": "kiR7rEcY5ugUqgdZ2P8s9HeujppcAQAPDS1rhDaEZ4HNsbqQpTebLMcbAcx4z3xNhyEaU9B67q89j7EcQh1M3Yc",
  "key11": "2hnM2ibAXPaSg4dXXpyzrj4AmFq7bkkyv6ygafd4UDVUG9mYX77gGU51MjdkALcy1rGtfDn6koMTJ9YADpjEussT",
  "key12": "2Ptsrw3prNuWVCDNqyDabMCr3JtkHEL9nyqqF26H9bibbL6hLrKiYBG5Sij8uVW5axFimP9GBGLTczh3UWYKfpyG",
  "key13": "2tY25tVmjd19Cr6zzz1BCmVvvgEzBsXXvaKCTZhG9vf7EYrNmc1LKCnufKTGmtfURnPEEcgifWiaU4GQNukKqFYd",
  "key14": "YozB2pTnvqKiaFP2jhuw7XZ5pchP8BALZaogcUsfdYLJCicXpcMoqhbEsTiGqfufcKGZL4UnueSmXYYFn9wmYFW",
  "key15": "27kVcxWQSfZcTJH6NWLWxw5aR2iDwK7LAuPbeG7haWxerPQU2eb6YgB6gbpF8yR2JsRL5XnWTz6hXdq4W3bv7zXW",
  "key16": "39MtccJZdgkWrxvnVHD7CmpxtJwopUjLNFE4XkRzJwye5hAregT3dv6KHJx8jz9kV2T7DWDM2mukXdgcobfsJy6n",
  "key17": "4PiDypjZAshPUX9DW8CbvVHx89jGERcNPEG4s7w1tEmLqJKsWcyxS7scQyyfWdpvgEZH8Yx3ecUnXPMYtsMwJjBs",
  "key18": "5U5MdxMeWJbNXuCCq2QLNBRde9oDBZzZZ3cTezFtx1UjGvQEJDgyUn9P7f6spWsMmvpMT5BFz8af9XGzxKp3wZ5B",
  "key19": "4BrNmM76Sg1hSp63ycMKxEVBfVVrt7VqTTn3e2PkAP2ZNvMnVCL8Ui5vyivDcoqZyS8Wgpy9cciKUjQhUthzk3az",
  "key20": "2HdbNAF9pEYLkRUzrvp1ohxdqtzJgXL9Sip7gomgpXZSBGzBx41whrDHAFiorsJobzq5jGai13RGu6Ha8LRKYwLd",
  "key21": "4jPBunaQm2tmLSH5DprQYkBaZ3ZryKLGGD9VNtRg3DC6a8Qqazx4nQHkeYT3xUqsx995krRQ2bpAPDsoDGYpiHQX",
  "key22": "5zhtV7mXaf4gwmCNucQvgYiLb87vJTjNfvVtvE7o4UPQty8rcUp7aEPW8b52arV5JAi4GUcdWWuhxaPyDWByZexL",
  "key23": "dK47bDDEFadCfcb37tXocH9QyvoFUjrBhUnykVtN1dWaXbEwknThNugVHWMRNhmmaRQHmoGKV7uXLEdHN1ZBNyA",
  "key24": "5ioTHNP4Q7iBxSP1STqpzWdKKQggmQ3Yxq6JCrteoko1n7JLLuUFa4vUFj5XVjeY9wSBeP6D1jwJmsTFCHDgBkqm",
  "key25": "2coG1QeNLr4NrtvnHhvYde36rmJoWEa2Z1DX72d4psZPHLjGLv8YVi6p4BJfgZoz1nmq7HdwJyQDtURA4ypFcXWs",
  "key26": "3pCGZuKQYc2rmHFvbKLFDbqvettvZ2j8hjAZx9pfNq7uFuM1LVprf5hAQu4q3d3Wzcg7DCXDJ3bumaUmbUdj3uDi",
  "key27": "5cqdV7NBUQrMcGCTCFvmi7LVUnc1QDFBACBsuiCYPUMA2GJxvipTx2FYa8MwyHKuiB2ghuJMPFhJ31gD7HJTUmRK",
  "key28": "5RucXJDUXrgXJ6MzK2MDKWfDgGXuecYtfmXhzsbcGH8iGd4PmqyPJcrs1YjjMV2ygj61oCBJ3EyUUMBzaoX1tURp",
  "key29": "657LGX9ByZFAWzBz3iEZL5zjQNLqr3rEAN6B7KR4ooGGfw2ganFi2BRM9QXvN81YKqa2zw1ChXbENxnrhh9YUsHG",
  "key30": "5hLwC3Ez1pWSLLjPnVoVtH8EneMdG3Z79ummaEZUD22u5YWZtTuy3jATtiGv3jf1H1RoC9x2XPCHHKVC2t5tUzHU",
  "key31": "5LmgUqXfbXmpFa3ZWdehr8WB7YqGy8NxGvHBMefGzZpYvV6PxekTyE8gqgdmaGvpB9AYxEoaMpd4cTn4i4mQktnF",
  "key32": "49Ftq28c87DKFFaG63oDF69tHenfgCaudHTmb9H5eCkAu8RWxiFk4ST4fYhQbYPHyZKfcE5yEHHY3qcpmd6obDTk",
  "key33": "3vjkdQTATvsmqniNEoW3oBZuJTAoCwNF9WbKEo5HU6NsAkPUEcmVyMp96aaV7nQSyVan9Ec1pJVZDc9r3FvKuBJV",
  "key34": "28UDreCawPdymkhSrUkwKdGQkAFHrd81haupRBbUWAATArRZnsfJx4W38A7K8dmnTgvZi4hpWRnFRSxCZTtXGeKg",
  "key35": "626oG4vp1c94sEseNtmHudVd5HiRpJEUJRoYy2bBoyW1Cbk1V1WfuBJPaCj3MWWW6363ejkq8U92jaSJvqmU3u5S",
  "key36": "r3ACRpTJxH5xmaWoFqarZZshEGa8dY7UyNafuVWySVUWd2q3P2DjzdK4QZkpMDtUyGxic1M19ZV5Vh7MYRNnct3",
  "key37": "5pwPPBav1Y7rmWJBSMExrHBRJ8TUVoMLBCt27Udgp7yjAt2Qbk7iXoKLb7HnERvPxJUaeKTKh5y4TserWdWNpAWA",
  "key38": "4be19xWBQbfBhTaKG5yu5Wsww5p1WRh5dLRGxkEahM6Y1MbvVgEhBYZD2Mxa68ZFqTvv4SrJsH3a52PDmZ7uz51s",
  "key39": "5mphyVrb2n7nBaFUAqMz2N6SVfDVzjPEDy5sh5pbdPJqX9KhomBJWbt8eKHs4kYUB1zWDBdNHszDLWdqD9BLruu6"
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

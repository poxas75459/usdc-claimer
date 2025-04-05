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
    "3TRmF3tAATRXdsZk53KniSwsoaoqsXLCvmMs7ykHFwLDsqFbmBpnYhk8YNuN784k6C2jLhJNApS9ynsZP2NkQBbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UioWCMZjZudCvezoRt2mH2xpf3y74iSBx7x4deQdFRNnosQkRdWa4KnJ8vGyzX8StUBpKvVtEUX9pqjjXR93Md",
  "key1": "vZCqBEZp7uiiYRbsF5eHUrX1t7dLt9eBBkWmHtZyfygtZqVRHws5DGF12mSaAxM2PECr5c6sS6gEdeh312uFHNn",
  "key2": "3DK1hQtyXztFG2U7z6pJheqtDM1SsGYSE8aZUvi9trxYPcMBboKmrRL7bteRA9QVvWWxTrFBQfWUgxpXWZLLV4WK",
  "key3": "2qfgXiz6FLErPKdyNxa7mBB6cP45PBg32Vx1HeN2THa49ifaXpZVsWNrqoAc19C37vRbLed9Y6dAp4qT7ttFAtXn",
  "key4": "3H4BvzDT8SX7cGUfvTLmSvxVU5vchm2zLUsx7A13wgRUyVA2nFEamsRwYUAq9bHuNAm7TsGsEF9oWk5DJeKLbu7J",
  "key5": "4Xbvy3RCrvQ3HjqxN1hvQqZMVQxwPyPtfevyDVJaLrRgHxmbdoAPckcNq1mKwiuQQPYocPzVmNczYw3LmNMPCyZH",
  "key6": "5N7DgMUHxPUYJ3TSp3Q9wky2xPAcz3vEpQWFkMfBnpb5iz1QM6njQVGuvgxzQNtYRpFEArWPbC1J4Gzi86hSRZTj",
  "key7": "3nySddb4Gxz5Wod1FkhUi6VCLXFXgYYv6iK3R2KXSXqnxbMunxsZ4UpBNj9bRrqHz5tq7oDWptumUiLQ6ViP3B1U",
  "key8": "2YsRr8935tszkVpEQTYYjqmgqPVGaTdEUVehMwAKAJdEkuo3Bupz1VVnwGDuNwiaWvvxr8EPT1U3CFFPNXL8C98Y",
  "key9": "59iZg2ytMcXQrXdPV7RqVmPQC5sFBk1xzZu9TDve696AqczsE7j1EW4KWyEYgM3pZU2AoSfZ2dVGbU7xDbxkfg5F",
  "key10": "233MNspqk26nxV5aYBdzmzT3Tc4XnA1brUQxUzoHt6xfK2kJoGBmbesaTeMgEFMveYhWVEhM2uX69emKmNeJRwxZ",
  "key11": "24W9MXQqUiJYuWypWX7QwmFEeK6Go5WWNAoUTyZ2fLcsTwwSRAuyY7iuZsmryAHJKx5946N6FecibviHzzZiM86k",
  "key12": "LP36c3w1yG1dpwQLabXVbhRQgHdr2oMjPpGVzZU1NhLp31Tew4X6RcLjkU9aHuuz3haHVz5d1JXTTVigjZrNFuq",
  "key13": "RPcmvufYpveGhHgz2tJCE1rAm956m1kSRMHtCnrYE4moZAHLdSQTUBpSbCqkRfCmH4ErcMwf3QotKmiK8CAA1jd",
  "key14": "wipDnB8JoKqeU97e736FpeJ5d3MdR6WQJJv5hMbUcLKKo8PiL66J17gT52ve7wKBkMwg3mwkv5mLvmapnRWhgv8",
  "key15": "4ivDTBnGShzCYSM9Jh7xtUhxXCaz8UJzMKuA49pKBYBqhbxUnsLpfPhH2sZ6xZPaEq7RxVw8PYVmBwKXp7cjq6CH",
  "key16": "3aKCmGb9LxPA9BgS1RwqmVYQiPd1frpz9hchzafuv4WgUJYgjb1EV9T4oWKcFWmNJ4UW6wWh5QBXWg195TqCTU3N",
  "key17": "5heC2NBoyLDjrcnF3Mrav2QNxynPuDKJPwcX8uawWxjn4wTjTH9LwLesuTuwDTot4GJ65HaMAeUm2EY5Tqu1Ww3j",
  "key18": "42ShLxMg2rZnt4f5HVN8UCQrnRUVRfhPn6pAkQUP3ohs9uCz7CZCTehRAxudopu3ScsBbmrc76XK9uNaWHLVsPde",
  "key19": "2VMUnM3aDghiKLYAYoq5djdGXVc1i8TBi5bjQBZ2vMH2jqavgxoihk1JjZay8S6Sz39QEvtgVMzeZFRGWYfKFrKE",
  "key20": "65eCZ8EfthPnXe15JX6Ke1nzuLJVHgFCL7XXjCn2RLdicAPwLUN2MHj2RwSsMFszV2TxncL87xXd9q8MTd6mAyim",
  "key21": "4yaWGnxe8QLJuF4MPVYg6eKKJ1wdiiWChNMjXPAYTDEiwZ1u5tNjWXB5oD4N7AFVNqsUFnDAfyd9YRq6bac92oAi",
  "key22": "4W5ny9FApFtenS3Pr1HCjvLkAmvZQxA5bXBLxN5HvAjWpdYxwUfYwrd1Bn5gLgeCdCKpQKbMGp4TafbVsh2fAs2",
  "key23": "55o9BDTCScD2ayZPkLCuSNi3VtoajoSkU8u6kyPHEX7cEUZi89E9xAxiHvq97R5ujuAKkuZQagpTaEUfhisSMDtV",
  "key24": "4kSk5qbeuXYxXWNx498LL6JRtoj4JDpa6zFPj1udxYMNMpJ3AFB4YhtzU4j5m54zkjuZuCtSvTEHx2meAa9hDe3s",
  "key25": "21uW3EUtmM6iCTjQ74czLqTU4p4MjLmAYScZvbDWrPCE2YjB5twYeRhMtRyoFrAow1d3dLYLYYaTxdvdd6yLsU41",
  "key26": "3iY8SmgdvWDdcc8DPobHV1oDWJYsp54nzxwAnStLutCDZEBJR7S3ZYpfJvMLwwpWPjFbbqkCC3F6hkhZvX8eK8aJ",
  "key27": "3FRNfSzTFrcYW4cKV1oKV9Yi5WKJBsM5QZdycAoD9wh7V5GNEX9pNV2FZsQvXXyP3Lr5vg2ehTL3Vg3ybJQzgHyJ",
  "key28": "65cXHyrtQaP2Hi5REfJwdZwQ7AKxcyY7Lz9CaQkGUmJ7F7VEXx3oidxeKK7Kac5GaArZPuh4ewHDTvJ9ZWmb7Zn",
  "key29": "5BRdAnX7AdSEm53FawZXn59wzzyTo4JX1zXPEmtKuig1rFmVgiYc1PsbVfxPiLxUa8gpBoH4XGZEoP34Bdk3iw73",
  "key30": "2fh8fdah6Xtokm8ziHbjwEhB5xdS1gsHdZQxPCRyRqRyZ3tznoCaxS4wcBemMtUgXH1aXfCC2tvHzCYgMbM8fcCs",
  "key31": "uWwPwcNJ4JRz7EJ5ophtsPPPuRPZSeTmYq6Rzbwbbg7QyMPeSsqQjizhrs5GgRPC65CsPcwH7dfqXe9oW95ZyNA",
  "key32": "44vLRXYexGb3ThCmndbnfek5SJsAYmuBfpPVeFyHzSLteFV7YP68LFsUBMrSpuFa6hd2Hz66ACFhJGkMqjzjzgCr",
  "key33": "4nZZQXihfN2gx4HhpCsSDufWEnKcdrDSuWG5LcqFPWe27RbKAN3Ht4PNmMGdcWcoPSKexp1NgN65Yhx4schkt1kP",
  "key34": "traDFJNcJ1FyMuamiaCBByJK3QD2VDAbXTwp2DkRh98wwPcCGVcM4GQ5nVB5DRTPrqaLH2cP44sLo6qomYYGAjJ",
  "key35": "4PQZx3kuVc4drVbT9WfTGTqEUiMnkRCY1DR3PF4y5C42FH8ZM7BPzkT17vDE7YEAhZYr3i6PkzNdRSnBim5cvykq",
  "key36": "2HS9Ym7rn5iJBqGEyWyjyYJGc2ykFNwQpFDk6jR1uyzrBMD78u14rJz3PLZNH26KsMksa8R5xxUcTZGM3r9kQfEp",
  "key37": "4MYtjGvsqLc9HhSCTVQ5XjMnwzJLNNXM8vboDiuMdPmJVyUHVet1cUKoKzmzjXxfUjgRr7mSq5MyV4QobngdmG53",
  "key38": "3kVmY8z8zEFZE37kgDY12cDewjMbfGBpMYhzdLCnJFkm8QbbBwGDarY6Wmi9137tsvqssoffHfU2of75LBQY9pP",
  "key39": "59RfK8NekaSPxv86cPMtzHVpBFcFq5SLQ4tQNCQjbbFvfnXg13PRdZk62SLqjivuvgw6TDcbeyk9jhXcsQNZEjGq",
  "key40": "4v12J833tCjsdxukin6dZ9stCMrqEBXqzRXFbayZBJrsbAoJG8QeCH6Q1Vp84pQy8afvhwfZkUR4LvUxeHNJaTzx",
  "key41": "3yYYpZ2f6DCBuba4xPZrps4MtRRGSdh45XVWUuLAGPgm6XkTe1FVKRZHN45sKnDkd1eb2c6fVSPhRztBj587L9hJ",
  "key42": "pvGgqPA6PjdEUztcDvMfrAjUtyKGQbJmQqjvxExJJomeUSaavMim4ThE7RjkQQNHeMtarazarHozRnGvsZuJdwV",
  "key43": "2n4wEGHXXoy3rvPSZHDUA2KhjqhemLVoPzgSREZRcvrn2xCGYQEBTTtHcDZ9Jt9bnjRaf1HetTp9dAYJenyCMvCh",
  "key44": "SHm7NELmZu4YY8rpBb4NrGWUuZYH3vaap5WFYNHHmMPbFipepHwDUWt93963CgxSDacP9u39bKniv2yUsGa2ZFm",
  "key45": "2gCsj8YFpQaYgQ8hFzDY6UcCM5h8tKavUrQ41UU2eJx8A5GAdcB86tXC6KkHj7bXQQ2e5N1Qkx3aC16fJfoaJvdW",
  "key46": "2xUSEViRFkvCPJigBkbwDpNf7e22SBHM3go7AeAqeAwns2p9yd6AvHa3r7nYBH5DeNYocbxmfGWPKUePf39azao2",
  "key47": "4hHxmc7vKiHApMbozjyBfxdAJCDN4SmEBNnQLPSLrBAsThctTRfBbrY8VUUBYydSKhWedc2tg6a2haiJmYwJkpor"
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

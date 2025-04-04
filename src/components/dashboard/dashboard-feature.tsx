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
    "56aWX24EDuG5gx2XYpmWdxVXRVMSYFRGVsq2hFKskDMLjJAktPtXxsTRZPdaPhyyGpxAWMUw6YNKbhuX1DtVKpWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAjs9dv3JY25MXj4SRygVSy8nyMFwSndnurTdBNv9djzdWqpRYdrr6J2ujxKAuQBhFdRDA6UZoTx2hamUwkq4rG",
  "key1": "21nGqqtiM9ePYaPv8X2KAs2MqPBnYHcdijrNDgigfqTj7Y8PyKZbHFxCKhXWDqaR8gdvNhi1kfCj6ta3ehK9FnTM",
  "key2": "4Z68iMkzxbDhGiSc2kvAURVNDyw7hekc9qeS8YZBs5j3Xpdapz2KLJa5iBs7agBz5bDV14itpHKuByjBg2B8FpVf",
  "key3": "4v3JkLQd1cdJUCfQjoFJvBcTbVudGQtMR94JVXtTF1TDSKra8VfSTsPWDQNZi4G1iESgDhhhfdj4ugQ6aqrSBYFJ",
  "key4": "UNchtYJy1JD3kXc8DymbDxAKjbmEJNUZS6Zx9beAcQCGKYNwMuytEq5Ez7tmuKEMs9pDFTPkrcFoPPQRFVqoxn3",
  "key5": "5847HAsH41zWCLsCaWGNwNaPuA3V1PdsQvP2tZuKoHPkX6LANDVhhKZpq5FfkGdhLVkjVSYe6hBzvtbPTtHo1pSb",
  "key6": "dQoQgkhKkY6QNJYTrvz94MBC2BNaSh23NQqSYwy4VgvGKS2mQBNkUpVTMDNq29KUf4jqadNAB86kGmTfZ5NJ8Kx",
  "key7": "2UyXR1R4fpudfrMGLUo7YqranK3xsKQErhaTXrZ88GqFh5b5YfcbcRf4Tg1SJXBP8oj2Tu1nSPMd6bDjEkFkD6CM",
  "key8": "4BT1nbM1FXwxYMhPhy9ES6N13YctPTFYBbP57NEF3W38oEJ5r1sWRHS86p8qsnsezS1n9HeRgE3bdLCRMrxUN8BU",
  "key9": "wLZjUdVkwMEdNVoxDT7zU9cVGt7Px7ppGEn6ZvxmKCLnygT642b24TUP8vMFq6rg8EcBfr2SXx5qNp2D7w9RpTn",
  "key10": "2mh3TKF7de5YyC3pokzXDEeJg6TgqjSJf3Udi9nuL6EFFwQNzMnEwvJyhgZpGyZNkCXcWFNjxBAuJWykLT1P4Znw",
  "key11": "qNgarFXV5vHN7CdoUscd2N8j1cQzJ9PdB2FQdyb1LCEsQQMAE33XsYFo6V2Darrnx2AxqtM6XSvDc8H5Auvsxn5",
  "key12": "4PvsGZAV4AtatBk2P7jC554TxSrjPbJVcekqzATZQoXoWvYdwBP45kVMMm1WgoiXLtRqPrm43tLyzQyH97mcnoY8",
  "key13": "4AWzy1M69ySMQKe5JzxcnjJ43Wb2CpJdDR9FbVrYFp5b9d3tgM28AMBsXxjPQfdE1BQCkUKWU4tJ5UcKtTJF34jy",
  "key14": "2bmBGhktw8prYW2tmVdZzCm5XgodTHtAxUU4e5dgqLfiW7vgeGxstGzUQnGD6Nv49D3Mpvke4z6a92oDoNfVZxaW",
  "key15": "5mkdb3Tryxyz12tu4MoM7Dqub9a9DWhtCvBJnHWd9vborHJG2z5TypmbdjrDuszSrARYi3vhMwr4w71CRhbZzdGt",
  "key16": "5TWN94hHQust2FTk13Fu5jyJTQMQsKwVCku1W63Lz4byNLhdoAJ6JTV3j18F7yLS489XNAYek3wRYftFx3BkYTmt",
  "key17": "2FjCNnfErWnqnsfqNhhTTC9jyc4TrfsJndukpmHUtFvRBC7rDtSrVQLZdNnoz4XJYQiUiSWyG4pKZ77iLdzvv8ZR",
  "key18": "67bggB6NfNdBKjHPNLNygbgL7PQsgfNPRyXsfvkFy9bK95FhtWNXvWMzQ7sJksgVu7ZKEmHpPXAzr5CjDf2xjD6W",
  "key19": "46rDE6DUgvrfbqBAXozVYDX5yRPtaZ2cMo2vcxWbrctkovmHo6jKJaVxQULtMsUdMr9L4SYcVtSyHFa1barZtZmW",
  "key20": "3SMbZnC6mmVsmLzLbTdkgx5A6mp2g2WH8CLjS4ZyDAVn6yiXkrUaWihEbqd2GNzReB6NJyqZhDENJ7AmTwvd6wLr",
  "key21": "2aEtg39gAh5NZEjJij9Q2RDKEazWgNpqeMHtwxHkvAaDi9USP1eqASA6PGSxY5oFoYYf4v9vr2GQS6czwSYorqSg",
  "key22": "5n3F3faHNXSXpPA1Qc6xz1xN3RspRr8hyZ3JQgUoA5vezmPRmtD5L7BwjkxHboocBT4dqPTpuNPDzp3ySuF6Wd2L",
  "key23": "2AxvK9npMi4pDwY8z2cj7CWyubS9Pb9uqZYbn37XvZQZwxvYkkjdnhettmf1QhkGe7joFWdkHQpjceZ4nRn3nBr6",
  "key24": "5WM8LAq2Au2SCJytQ3S4YjLDGFbr8vAHajuUWbwHAT63yFeRi3GPDZXzq8YrKuZHfyzC5FkR4v1QgNcULo57k9Vn",
  "key25": "mxtcopUEG8sgeDwX9jTbqKXeZx62bJK2bgE8LQ5H3QeSLGCPwW3eV6qJgMjdkM1WFYQP1WTuw9bFXw1oNYJb3z8",
  "key26": "61XafXuLghbKG9w2jrLJZKzWW2WPU5fm8QzTSRSx8pyk3KVdwPaLPGz2reXGw1SGoh6gFP39tBeTnGsBc2dw1XDy",
  "key27": "3f6Cz1JPqcSjYiXoYm3yH1igtL3Gepg7hRRcTDv9UmeTNrwxMKRtEnNVAkaXkE6Nk26YhUSMFoLBmiRUX2fdrYfW",
  "key28": "2Wcz5VkTTPtHVFG4j6xvg9bqWEWXTQNdww6dXtidpVx2CFZURnRg3Bp726ocgyaCcr9DQzQZ2YATmCJTWfVbJyx1",
  "key29": "4wdZj4hjNfgcTHJqgZmasH243zZ3ZisJK6ASPzt6VSJmPPEd7Yq97JCLR52axsWjB5i5KVn8LnMRv6r8KqSJqaox",
  "key30": "2b3yuXYSbS1dx3qdjwzMWyzQcv8APMicZBsTEDLvAdHsMDXE7gR4iTQ8j2ZenpeRcZcMwrVnkG9k2cNf6GmyWWUq",
  "key31": "d8KUPDXXkXzqpqhN6U9o6nfwBqJuzfqmSpPuvGEegZUZfkQLaNW8R4f8eaaQ73X9mitNyn78t21TbUfNALLGpPH",
  "key32": "LWyhcfxUk69yEVbzLLqFoWCC8nS3FnmJSJh4TyZajPhtm87vnTBKoUgK8dk8xShiQDDpBQFXcuUhc3xvjRRD9RK",
  "key33": "2phWh7HvDmN8sURgnpXezw6m9g4uwcgaG8eTeq5vVBTmY4EwL3zcH77FQJq4vF5BQFURvWyTfyGkEaK5ew1wuNT1",
  "key34": "3RNm2s3Q4Je5tdUgW5uEzczP85iVihV8QwhDu9DGVvNVqdkpxCPWct724z4QQ3KVRQvL5apmBLSn6esA3xF8Tz6Q",
  "key35": "4GXQva15RrabRMkLefm6aYfDCpJ9Qwb28msgqct7zYnk1ARmVRDyPxMZoRV1EzE9FGEzXcbnXEd2aZq5KhUrqHMy",
  "key36": "3f2nTbNkMTm7EMt35P2BisbbEnGuDrMYbwQqeJNf383Qp8N7p3EK5UutFf5LEw1R7rcWPu58XiJR8cV6DXJ28kau",
  "key37": "TzSPBYZ66akVp8GQRfKgWs6s1oogDw6KjBFJLgU8WZiRU3nSKcDNaejZEwVJCwnaoVDjV4xGuoq7u9YZC572met",
  "key38": "3sFMsHZyA5cmH67y2cVcikWPDWTHxQYwcVPyYzPJkNiPYsC8W6JHH98n7X882cXhNHHAhRB4Zh8LohMnDyKDGcvT",
  "key39": "5p3goWo8HMQGJPzV48gitvsbS72Q2MXXLVum7ge38mPew5V3MMapNczANQcvG2tWzV1HKAeTN3fYYt46fortoEaC",
  "key40": "5gh1GoPfN8wwY5jEAitgsJFEvi8ZJkWNVnCtjYcDbFTjaZEdRfBuh4KfxTsFVzVEo33zqKvkVvVV98dbnvbK4Qdg",
  "key41": "4GDtr2Voc8F92X1U2oYPhXS383UzKqH344vSfc8JMBbK2NMJdgrz4ZvHj2mnwMpNfCRriAhr2wtt6QS2JyBu6Ecs",
  "key42": "5epTZdPwWGkNZB7JfCumHdfwEAwFQPLxFnEJHX5bHFZk5UcQSKpXAMgZHzkJPS4ZkpeqnUCuosfXvqEpsqfowVng"
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

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
    "5bMSDmKgxyCGPAShJtPJ5jM9Gox9nvKYKnrmSHUkbTu5n84hCjH8MJ3JgBhJ5j82hqB75Rtw3gKUUpPcQ27AvEy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fb6hGsWP85jdbnyDSpVFjsJu3LjEnxGJYfcS1HNJWoo8h4U2XEfMpH1WP76jn4u4Ah4fReHXMEbfG9oQc9HFTcS",
  "key1": "4W5Edg4CZTBhY1ResqxQaUNNvmEGhiXbowNLiuTTmuzAt6oyGdCKCwWWdRVP1Z7aFMKfx3wh1rJELF2sq1fmhLvu",
  "key2": "5ccVefxVk8cCF2PXfXM3y3DcG7TznmM4pZSsdWxAha2y1z8zDu59kHxnLtKqPH1Nzc3M1XcvYMe2REWFh9h72pFF",
  "key3": "dgggiz82BQhmWy4Rq2vLUD8vKDZdyk2bh5K29JQ2vjK7PwNbpKHYapmA2UJ2Bg6DULwNXoqXcpTLm3D3fh83dxp",
  "key4": "62Af9TfuA5ccJSqqTCg5dQWEwfFfZQFxxg3oLfBh4VU1TQkZPa5TQWEzyq4jMpbyrbbyEYz6vxH878Z4RYptp7J5",
  "key5": "4Ltcx4G7wHPSwbHHFqc9FyebxBiLu4kGun7qZhSxC2yoHH9D9L2H5jotkrsTCmojz8x91V35Va9WLvmFw79CXTGZ",
  "key6": "5yZBM9JUxxGUe2JkxXfwbyAokyUor6LcEyVS8Tzrw7a8YnFVNFLJpta1vywTLSiihJ59tapooJSWqh3DeemEcYgM",
  "key7": "3Xbi6hxqDXhEhKGRo8wBgE6gpgvgmqp2qTqEBavwYxybyWPuUTxtADdfGqUyWRDfEJCqjSagpJLwKjwgftarq5gH",
  "key8": "2vGE6x3rKiBtcfPvSJBnkpJ4viXknLB9iy5cA8sGR1LcJnfcnS5hRUTH76Y6NvofZuDZvvH21oWRrrzmaCcMBcTX",
  "key9": "3gEBaV3z5TEgC6wJ5ZaZmR2NYGKsaFfhCGJmFYQnNjFvTTCzHutGD1Ab1ZF4ZqMK5A7NfdHm1QDUxTP16t5Yskaw",
  "key10": "9s8rxgQ912Zx5ZL8HpcmBy1EV6zAnYFnxELi27ELNerRqbWCRFn6snQDwHXTtS9oUTiJVh8NP84fonDwW4qgqVU",
  "key11": "24g6zGunkpuickZpAKmvcQ5DZYZXcQsfHm3iZTXFsQp8YpSiSek2wtGULEaYrVsV5gvUfqnmSBLKMrKMbqFqN1ez",
  "key12": "5Tk2dGo2v6vev2GNNpD7HSHYU8PQrFLM6v6r4259UicHSPMpexovBZvbLW1ynp4vDN3XfcVDjx6XDVJ1ekM63LDY",
  "key13": "6636zFroYgW9CcRgQkqpQE19CCeAdeQPWFZ1Dhmc5FtCmSnZi7ynhs98pdn82ynGvh2KUVR22hABwH4r8NdGZ1FE",
  "key14": "55W9cRgi3z3m2af5jJTNZ197jyDdPsrjGKQJM42tkoiViMJ9TRKn2bTFyPcKFijVvS7CDZEAQfzy28m8EBN9XSZh",
  "key15": "28z5Rq16cthPepZSEaqAFBXYkbZdNt4VuBXPp3gPQetap7MyNFCp443WZ1CuoZVZkYxbb3E9mmqMJULVz6wGfy7B",
  "key16": "2YoyAhpo24tNaLQZuafBVBqd767sXjb3FDXSdmk4XjxE2Hb1sgEE1uu6TQzv95ifrSCRZ6YHFcaMmgSrhP9voVqF",
  "key17": "64jxLmo98aMnumANCyr7YjYQ3USHzfnY5SGMNYvuK7xritbWn93bRW5kMZjSK7L9bvQ8mjXgQjccZS9s7WHRAuzo",
  "key18": "5BQsjvRaCx9wM7E6RfcfPbNcm14S6CdwhoEddQQTSj3qzPF9HCdq1YTWXfbnJjuf2ta78ZuUpGNpxBpFZkJGygax",
  "key19": "5TfhXgEyhpjvbEgczGiUiWA6C99Z7vMBi768xcfQrqbjvwM5Lbr1Ma5tFghKirZtzhokj2ZsiQAEdcxsYVb6TCZU",
  "key20": "5J14PoCdeyDUbqBEjmDPGKMh7ewuuhujJgA2Q1vgFFnhou7gvCk7STB7RKn8RME2gMtbyTKemb1pzhwehr5t3NGM",
  "key21": "48LGeB91FNKusjXdisnzivMgig9UtTUb5FHFJb6m6PWFmoJi8ZNp6fq5Jdy8CzcGBVjUmjopYkfA6tzTJrFp9D7w",
  "key22": "3GekvCsXmzTnPUfMLfhz8eYRvwZqAHvaupJfxMPPap3DFgT3X5TdmNGGUXqHiQhBofzvvfZShgKCavU5Rbtjk8Aa",
  "key23": "4tTVSVuL5xBG44j8bkeQmCMsmscaz2moayFNywSwz7xu1Cd2ErcwctMBYdLhLi9XdxcnFwmaqxT6C5q9uQH6n2XS",
  "key24": "3PxQTP3xuSqbB1VdV5DwDxDFQYoEpf4J1UKzczUkX5HkSCgS8hEKRGTyEBKe1YYNg9CZho9naydr7sioEYheftzP",
  "key25": "9C7mZ4oWjLqX5mwPQVisPu5ez9HdRg7WFVGwkdiHhoqsiNpLTopaYivaWKtALkszdAa41VGjC9rgPGpmj7K3Aba",
  "key26": "51LLkMq7ERmR6PfFAVqikMzaX51r9BkVhFZyTudjQGWHG3Qy8W6N3pvfjEa5yc7MtBHyR4zavdPii4cRfKdaNgJA",
  "key27": "33vPSQGz8JEULAovnNH3soJE7jd18zivGwhcz6DWWKugf4KHW9MxAENNvame8TL33SYGASGGuLJMZFUE6ACUj46H",
  "key28": "BQDxcmPmXCsnVCEjqhrznTby1fPvA9MSoDnmSU1LKSQG7LU1ygUoRbZUZdR9erJNj36EyS9jn1ohpTdWHY44oBT",
  "key29": "4FLW97kQPguoSFhiJj7ZVzw1ZRtoQwkgL6ezfTwZKPP7qQTY1iUYQ36FgCTvAmicsHPuRYBUrvDqzdxqMWzuv6jP",
  "key30": "fYpTUSos5p28eDLwLH1MHd9aypL4WZtz7GMFMrzXJUAZ9UDJodKUDkNiMUdFhJkUwYLYaHYHZXzB2sRhMcj7UTR",
  "key31": "592Bhin5dSBHpZFgQoq4sit1Pm1548EgTTvenUdgXHVFu4a1kdoGGxfcddGLsETGFZCAXLumTJ6gBYJJ1Dc7vZNa",
  "key32": "4xED1M7VzbCwhLeusVi6QB6PD1oy7u49HooSHi77JVFvbpCj4djumTKjkJ4oPYL9qBWPcj8ec3FSmuqskJvniJpu",
  "key33": "52M2hsHfzxi6QN6wuYdBARs1fN1vK3DZKcdMSt9bRvkuMRUG9qoXKBMWJLG6BxWGad7MC7bbzcUY745ufQ4ZXDad",
  "key34": "XtfMQNDhTyKA39iKJ7YZtf87yZLXmmRPeTJZVtTf2Cg4G1ViGMNW3rtC1Gr7fsgi2bkmmDMXtX1VWqGtWDqAAcK",
  "key35": "3aGGUtjptHNf5fkJSnnrLEanvouJWqX7kqBVUk3vqkhCTcZdvxL34WmxaF2V1FsMJ4mANyiP5KiTT5x2ijbzfLSd",
  "key36": "3dPULjWkY5GBqWMHhEatTRe67G5NMT5nApKUvU63CninZtmtBexGfAM6xJtUf4c6ApRLnxaANnmwaQiqfntJckcb",
  "key37": "4XoadeAhdNdebWgM4LMBTXxhRt3Wh8wxq8pxLDmFd9WB4NUJr5pggjD1coY2cLhUMkAfDXFpFj9H2cQNDxogzxL2",
  "key38": "3RLRpkNdx9sfyWdmmuNoV1D9EZ4cUeyoELoaYw88SZQvLrWwbDRKaqgd1sLBUUSdDuFLgSD6AV7KGTtH8damisHq",
  "key39": "j2nt3xPSXoaVQYyqnCAP3QBqNmNn4QXptjw1jcsPxMMiFYsXKfn43YMgq1diQ6BTBuMRym75Xi6FSe5DXBxVnFj",
  "key40": "5omnS1rcLSqoNvwdcFdp311MmFNFEFF44RTC5P9oNgv23QJzp1ymxfrpi1ZatyY4SefTp9335iGYQ8v9ZJTydkhp",
  "key41": "5pHqXqDa1ZCXMin8NSg9WFR1JY2oYSwDUMdPfk3cndtBNJqKUQMxwL2FN1eZyo8fGCUHDFpyPNddhPZUuYFHExBz",
  "key42": "4sfkMos9QcrtchGYNDJxPFEuMGZJYWko3xadQ8tHw2zTYnmCKZUSfYqBp2kF37tNAjebn6SHXEkkAUDYN5uVmvXp",
  "key43": "56mmC1JtYjVMbcwxMSXttu6VZRid5pbs2LQcfoVZGQHR1s5nedXvMWCVzHeqCCouhhdxscrmy7vX23VFexV2ogv",
  "key44": "3zLT4wGbpHkUwSg1NDeoBSbVEvkehroTHrbLgD2BuaJ7K5NKHbrgtDSZ5GefQH9F9yUp9HXkgneqmfKdQMprMdik"
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

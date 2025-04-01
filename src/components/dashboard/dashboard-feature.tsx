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
    "3aSbAqm73MpC7jTrJcg1p6e5MbrNpDRZNiHjVoNRcMbT1Gc9XBsjrwRyi4KoZ1aFpExrgYahRVjbeddiMq9N7rfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sS2yrpSnVUDwQs4mE93CXYNYzB7qmdd3vpi9G3PeYQMApcrjWGXg9Ntn5GFrTWGYH6tLyKpD2wvhfnmFAbN7Ep",
  "key1": "66y3Ey8rWuXcAqKcYXv5smiap8cuRHwHei3pEyy3PipjftuvDB9vXaEBsUxbQbjimqX51A6xtTYRovdEco14TuKc",
  "key2": "5rjpLWdEAmoNUXExWa5NtGLb6YL8i9LxH7QBVueVTwNpTW33TEW7Etor8x4E4fhf7LpyPefA7tdcaiUhE4QiQsco",
  "key3": "Uvihn5iytPF5XPDnJQAaF8LrxAA5UVQygr25rM7NhjFkMFEGzFLr1NKkac5oZw12tWwT18JRvZCosvFQwo5cLj5",
  "key4": "56EX4g8cGF4ErJXcndQC53vbrtn7ioTmGGdtmeJk8vxDAcrTmq5R9iaBeHGZfAbgBuQb16bJjEHzZoNpr9ztXkfF",
  "key5": "2PKnmPWj3bGe7ehPSxNwXHitmqCKLnoHJqVVqbQXxw28aY87UDVSqussySU6YGW14p1J4SVpKGkTJNtt3VVfx64E",
  "key6": "RSSSNt8Zx3BnomJb6G49DvKBnjCq3M2x5u8BPs61oSpud6YVPpf15m9SMHwfDNLQXuji61wpmQXJT6NZi5dLzuL",
  "key7": "28hYD8FkwQ9YWYaDPKCfLZbkExYbbpn63Vae5x8NhK69UbDyTALRUJNzpHwnj5j8nyGy2vjy4aimD2BfAfz4GNdi",
  "key8": "AUJYjjA2yoeeJfDbQfzm186gDasAsce42HBZPJC29TEiCwuKU7qa45BXdRQsM3B9aU49fHXP5Yz4zeUiQKaFbwF",
  "key9": "2m97fJczEGifLUVmUkZ8ANP67QZeFEM7wG7YUpcc9PDhcSpgwDSty3ysXKND4TpQzfUzrazAXCMWVKZPc7h52rs5",
  "key10": "49ckiSyNyPLV95XbRrcj5Jd2ACwvFZU5WDBixZ3gXJyUfcj9rQCavPeEjnoKCxUmBrWFvwymqnqNE2tGw7aobL5T",
  "key11": "kdVUEsmgDLKBWtxZBskEM944zZe1a6c3npW3fu4BCnYEHrjkVxAY73toMMWs4wVUkjbw7R5WcbYTk82xoAgVahW",
  "key12": "3DXtvJQT822966umUHz1xkRB28ojtuqMyM8gsmro8q6sVr1YXRjfhoexojz2tqnLCvDoc77DoWQshgP4r9Qrwtgk",
  "key13": "4XtcKmc3euRwZfXPmAhXGhrkWPv8xSdyA2kfk8isCzbAx2DdM1QpGQKyk2S7u8V69AxTRoMU1cvF1y35AQkmU18T",
  "key14": "56JfqLAXoXQtwvU8e2Z4Nr13ZG3i5mghV7t5hfQaoU3rQMnAhawp35z2XdrfsdkYGwbpbiVTa7KLgDugNqVL3Gef",
  "key15": "2BFC5CbB6AX5XBSrhEUxzLwvVFGHx1R5YuKsAvCxrhpTzAGumLmxo7oxXiUrkvbX2W8aBSgyptVmitJ8cXZtDawB",
  "key16": "4duRcxNdZuvG6i1anHvmMQsfARZq87adP141g1RuSPVUvUXPEd6KvdQ1kgYiNhFHJ3h45Wzw3uEToPipngWnYzXE",
  "key17": "51RT1UD8jPswhKMNRQYMbC6cSyyxurQLoJGxor59nZqiEyXgnkFfePQ2g3xcMtcE3VNAm5PyJ6B3tEkTrUGco6JZ",
  "key18": "5ghK2qqc2Wgb1Vwx8EHWLCgB2EzFbiSrK13xD8dqrJTGhh5BiaHgzXpDXK3NmssZevvhpimo4FEojcmNqZwqo2BU",
  "key19": "4xrspDbcpeJyKpaR9ij7iSb97En2bLtN31Ddva5sShB2nBigS7s3RSGSBms8U3AaRuh69AMH7kBo6JhcQqzKgVok",
  "key20": "2dJJMmDo9tJhg3w7hxbiAAx7wATqcxs6QyuygV1BhbgerY11zG8sr39yJFMRaS3XFDxiWTUpwfLj4gTB95cskdMP",
  "key21": "2X5fW6VV8ut8Wm1hCpfgSSVyaePabw5w3ueGaTdJmVJf2xaZXwN2Se686PuLZpyQnt4zM93QccJpz6xdsmPkZ4Si",
  "key22": "3xXA2T3wz4JQR4uei1QCSz9sC2DCWpWYBWwFm4qpUsSBpbDQbjASWw59fPAzCPFG91JxU7jYJkvHVW6h9rSXfsBF",
  "key23": "z2nGBWT9nhqyNaUdfrHhni9NtJjLKwxttiJdCncyaYePf2LMrT3NNpswJAQcG47GouTRTqftPyqgtm3DUQKPQ6h",
  "key24": "vS3ybuC1Q35eBn6bnfcH9ErgYxXTBBcQyYYYno5JckLwLYgpJ8WSFCCvnD5QyQa7g9Vd5eNFswBcyhu95FNVHgW",
  "key25": "3HKUmA7XGTr9aR7Zbf2ku3CxVmHiq5aMbjncWMz5qQoarVGM4x8unjuovy6zvPdh48P4C9crQ4o7qATnZoTMf8Bu",
  "key26": "bPCcJ8LvzwNSkgiAJnvAfavr7178aiD9iActSRDoxZeZWVAz6tAW5SX5exM3xM35ww3RMQUYQT8QQz1KzVNizBK",
  "key27": "4A9F2qqkUEfd6KxDbGEVjxp8gUr2dyWPg2BW6UmZYE3LaVZLdrr1wY8DMPgb7s4csizH8XJsp7gSHAQzAaktMNAv",
  "key28": "3BPtrcTrczeGns5npdu5J5TP9it7JYb3NbvFLysMhxFxVk71fRLryo4KRmZfM2VSGBXVMnPtacDzRGJ3pWFQ9F5",
  "key29": "3ge4KSKmZHZg5qH7vZw4TcedgxWQScdRhCLyn7FrusECZkszkF7FPT8DQ3DH8fRspoTKveYDiX6LzSk2oLay4LtT",
  "key30": "28hMTtdQg9bP8oFyRP7gsnY7a3mnox9DbRaZQatHMB7UUypBPDmVRQbPfFVdzFjA9rQg5RvCP8oMm4eM1BzWpjT6",
  "key31": "5eMAEgGwEinUqg5rDRPHgzu4eWKrgXthGR3yXsEL8GdgNpC1bdJesmBKCrQdusiVQMbzXhexe4MK5xkFuTc8mpbt",
  "key32": "5GGCVJYYhGCxDppSUysyhhuXs1dnzfLmN3Wf38CsVw93HppBMCfqWx3oogmaHQ2ppJyhuHGn9jfKdngrsAtPHoGB"
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

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
    "5LiLTzQMM7CzA4sAiDiVZM7xib7Mo32oVCueFXc6uvauRgP4zFGvgeurHXyBR5Mkka9PowdonDQCiy9Bie39aGZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZDMJLMQmfWHsKzr7AujmVbuZgA7AWa369Lf3HVARyr4t2s7fst3yd9rvTTtbDy2eshkFNyH5bXsa8fHdJJD2v7E",
  "key1": "4Rz8LUHG18UxUBK1Sbewkq7TBgEpbUe1WjrgicV6P5gwpjVQM7xiFcsdERESfGq3iXQQqXQWYNEdgFFE2ZtC7WGa",
  "key2": "2i3qznb8hXRNy3defpqdiTq2qYJt3dWMhijHJsieYgqtE3iCPT5ebKTMLstmuBqJSNwcciMJD3NiLvA2Wm4zw7Kc",
  "key3": "YZf1gew3mK5MPYxXqEq91KBxjQ2ueUi51QRJ6H4PLfZTuu89KZisyMkbN2mNSo4nbsxYXGXdK69yQ1wJwfH1igc",
  "key4": "4bB4sQgtrxZftTZAjLS3jjxiVdXwPZd45fH7fThxggheMtPHMEYUE1tM8nXMYjpZZ7p5jjFCP84BL77aTW8yorCW",
  "key5": "X53EeKhzfEbeKes2i9UZnwfC9ib3ND4k2kmoZGcW5ATLh4ydEYsvZpdsrohxadtaHBTCKxMvtmx2GY8zA2u38ZZ",
  "key6": "52DqEBFqk6rqy77t9qHLNFxQNuTm5xhTW54ZHuue2aKdLg2vb2QRExuPK8nHjrAryhD7WqdkjyYCi5PxEhiqmnSq",
  "key7": "2rzPCBEzMiPWr7ENEmYFSrqgKDNMg3bomMmUWy5FSA9nSoG38u732JJpAWq9YhFedtYesuFFn2oTXfryHaowcoBs",
  "key8": "J2R6gFSdKXXbUKJmAFDXGDQxfAzArK9hLCyv7DDRt1XT7SrujdsorXdBmwbSPf3yV13bQVmyudcTyY5xggzh69X",
  "key9": "33yUir9YrcRWh5Dh1eLvHoPu619Q6tceyEbSGpsc4rYhJWSY8nv2NxYCDRLWBcF96Xj917NAtbxyQiToXCq4q2To",
  "key10": "5pDMfdoUqZkbqhcXtM22u3ogJ8huetad6V8UZZUbGie1anKAyrCmWWiGeFzGMWqMhVoLwdxPBcTAVFM4Ax63dMPW",
  "key11": "5WG1GWZJNQ9HPWofjiKrhBWRGAgjs9ha1Tja7qeYdv2PxZeSouARH67QQSxjqoh4UgpwVJBiYhHKhDq1ykHvPC5T",
  "key12": "etySSe7euuzzGa3CXTUNVirRwiALTyCnYiMBZJWBWwpnvBmDan7hkACf2op3kX6Xz3zPw1gGumUYMWkMxDW8Vkm",
  "key13": "2kDTeYJTnxHmFdx6Sjn3zVhzExTz8Dr6MSbA1siLtgQBuwMQabu2eA5rLissf2AsFUfgxCibNp92ZqFXT9r8Bjco",
  "key14": "4dwMQYNbuz3q8oz5TqXmtJhGuREayMhJxdr59AR6zyUpxYCqbTVD5fWhcyXe9nU3RS41VG53bG8H3oMA2KX6MawG",
  "key15": "PZBH6hnWw5CmTB64evb7SakcayWuzEWe9ZEkpGt3mt7AncqTnSoWUGnXoQJSMEKWSQLH9k1gfLkwxw7FsMVNbJW",
  "key16": "gisFvi5RkA3D3hA4kbwAx1f9X8BHax73LnSQTWhX8R36JxtmGBJGDyfASKpijBpWY6DBSUiFNNtfrQbj9YsdNaS",
  "key17": "5mGgHV3UYiTWGBWpbZgdLqnZwbpHJK5JdXUqrNPBUt3didXX6J1jVELG7TRWBxNKmqVTwy4RcP45cG4jsZaumxG2",
  "key18": "3juMf3C9Xm9H8bDua7iTmwmtrNiw8T93hbPTpLdw96wkzEYUckdppXGqoSp4yaNFiYCsTMrSvFeE5wRqSxrdfWtX",
  "key19": "34qaJp66dq8ohY5VPfZqa4zUnG6Dobza19kniodyWgkBWvLivqnCZpi7wjTcv5ty4GdkZccf3oVJKdJk1xFhjqCn",
  "key20": "4hAGFXeTCCqQ2N1Lk6kiKWqsCD7Am95im1Rbzup85hU6LppES9aLv2p4JEXktTD2MBwPy1NNX7ePyzM4LtyyCRpQ",
  "key21": "5QH729KNA4zYunyqTWQyaF3akCZxojCWLUJtJJscfTc1Fm4xHcnyyLoAm1FfRKGSMUuFixjkWHgeF9ybybwuhSHP",
  "key22": "4GMinerjAX9bfxgkhnuvsjF63TcTQSo5wXMdc8MVBAYhgSd85KokoxuVQwY7NVjypq1YH3c36cYdG1mMLMNeAJYh",
  "key23": "52FwURhozSHdseNK4LsaXeJtUQA1iYANs557jwbmrZxXbq9FnkzFQA1mivU7s6L3bMe8V71eXLpNANsk9MTJYy1d",
  "key24": "mP5NNrJ6i7heEJofKuLLm9cmqLkS7rabXQdnti4NfHkEcDdodhZf8ZcqCpSpS6ayaEJedBF1JEBnDVSQkDHED3s",
  "key25": "RtaD6tT8Kmu4D8jTnwodLWz31sBbJDzdkBFGtkQJRRiE96A86P5u3pxqe8W7hXZB5T8zQfW3Riw7i78f12KqhVj",
  "key26": "4kymHxAzV47QUARGanmpYaJUVmxrf29nnkeTDcokqWC6wUANtQWssTiMPubE2zE3M5UC8sKozYipcUqxjur7NrM",
  "key27": "2XF8rLqt9o3u7E4YjqLkAiBpzFx9z1WqpXtg9w5qwp3yiAodj7YgD1no7aoq3AGkPaXLSHPg7Fg1pXK9US7qj8hd",
  "key28": "64wxC3NNhuio8WPgY1MEWEpa8FuJMy3ZCJ7A9wfwtC2Ynt4U4SnL3JBtkDKumahQzXTMwPrTpQedXBhdtjgMkp8G",
  "key29": "5KB4SN7YZcooKEVGfpDEDmqAi4rZYnqXmawboR3FNbbjsGiDYwmMz4Wu1vw7oRCNm8orsVbhteQbPB1N54hUz9Pp",
  "key30": "2mkApUCttBZYHZNAf6VuzbnPfQxXmX1BSBCdn2vhFBBKk6L1S1BjgSnStWsiAXJEhMpz7g4xprreRb3cvci2HgcB",
  "key31": "K9zNYFcepWi4cTNQKfuKhoeQc2jbbovWDxXiDuEnbTZEqZSisuTBeU9SrVmgCKQM1JwZcUREYMdK5xWFjxrDdw5",
  "key32": "7Asp9bRkRDHYCyedx5ZQko7MQ69TGdS2Z7tYQAErzaDtac78LkMaHjWc4D7HgCruZyAJP6mUNsi1Ps5h41KFvNa",
  "key33": "5cVpRvSkZ7Cv69PvJQmxRmYBwNRw4t4UyjZUytvDJ9d1V59we8yHbb2Ss7Mdq38cKi7c6CYMrTtQfXd5eTvGCMv6",
  "key34": "F5pKAoUmTDuoX5TVyMRM7hHVW7YmUW9tP7tAQ9y1DDNJUfeY9gp4DjT6pp3bGNRWQX5655g4iqGiv2WSnD5gn1a",
  "key35": "5DrNryVWZCi8yfSCi6q9jYCDXCfoSoCWQHxkkczbGczvShtiuVJJxReKEKTqnqymWxStaYvQQ2xqeiYQLcsDLmbs",
  "key36": "5NFkN3iXZUdPxwmNWeoKbwJVZrJRGsP8RzQrSXeYqMDV68YCbB31n6SuSE9ztfrLWJwbQbFgBHj4xJPY5R4ErUmS",
  "key37": "2tsszZ1TmxayyEZTdrDRsybwUL7p85P9YH4xv4MFXmgh7hkywXmj83jhqiwibMndHcWyQL8mHtP9QC9PnjoZBiun",
  "key38": "4rJeA7ud32BwMruPcqYJF8wHtzBoqsuVHX8ztAk3A2EK6hD6sASht31oEADN8vTZfDmRRiVzs78PQv6KzkvWbSCE",
  "key39": "3jidujVX8n6riGf1W1X71qfDqLmLT2KsMuDvK1BpAX4Vpz1aHoqVoExTnEwFZVUR5jhQhTHne8RFtgKvGMcyiQ92",
  "key40": "4tHCSu2DnB692csGsFhTGwiFDWn1dF7CwMJbRm16mzHV5d3rPiczutAUUCVFN1562RMLYu8hf2LZc9cuxCwhnPWa",
  "key41": "47tRSWK7YdcsNgD7mN7bhVYE7mbPDwCi3DzcfNpyAhE3ALRscxJFmf6xNgskn7ngpChBWzyP7tKDeFnwZg6FmGQ4"
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

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
    "wcw1SrgaTBUQQXm5vbtsLvxrshsx7idJtpCqRYBywP2GDePmhqzLxaQYYiz6cbD3f86PjLhZjBuoaYT9RrBVkdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MYFrbZ3Kbg7mYfEeJdaPH6uji7dNGfVQzsVR4FiTyoRgVG9AsdZz5p61gwWLhdxW5gFxwgjMkXrc1BtFHd5sBm",
  "key1": "462TJRaaALmjr9Ajfxo6ZVwjLxMqAekuL21scT9JYQUD3eZ3e2J42ZTE7z8FHSRyQuCnMdCoXFLgqBPS6kVfUXpq",
  "key2": "3Sn1mSigTpbsyQbk9YyLhxE1R98Z1HLxDDMRMBRhU6S3sziKsi7kHqWawQJh1vh9iDXo9qzRUgZ1cD7ozVH7gg8j",
  "key3": "3R2kMK5VFFktsDLoD766bAWH9WicLGkKM3tLkoLdesziRn9Rqc2Q6XiVvb6seLPUxmwTcSPfUEcMrxnaAGCSJtx8",
  "key4": "vUpSrZcLdeYKHWL6SxeeZHitwonYs7QnFUwBjgGhSe7QQNmfXVY4mDhrSAZwFVaXSEvA464yWBB3isGPs7iueLj",
  "key5": "Krsn3jhAoBv9eLmyzGm6P629rNpzPB4CBM4jSQfjJDwukuMmbTQh5uSn3mCHv1cSUVGXjBXRrKHsgmWjBSjrr13",
  "key6": "WrfqTKHJctFKqQtENoNPvh1UJi7Hq5fkoAjs438v4FjZKDhnUASyN5CzSyrAEsvLav8Mm8hHuwBk31uDM1NG1ms",
  "key7": "62qCyrMyBFCFbCy1fhjDcEq4RPn61HVzMgKXxzGCDivXoCaGu2L8pVyAqHoSCFSaS7UAHhYn2a4v3QFHVULePPWJ",
  "key8": "25pALZ3XLBgYxVD1gMcjv5ULyEEZUe7xAYA8hJogwUefzrFUaK5tTzVrMTuCpXhRbVp2ZuQkmqsPvuKpPPLb7fyF",
  "key9": "27g9CQk1mhRAgkbrc5LhzgzvUoRX3wc65KYQDFxiTHhT4vUFtMH6afQgFcyTyx7MoA6Rr9b1xFH88nbv8vxjyqMV",
  "key10": "5LenqTATBjJQ1WSCVqFvT7qBje2YX5MZGBLymw5J2gKbHkMKYkdwfwujMcvsqPws3D3jwnQ9LpHvyRRH2HF9n1Ra",
  "key11": "3enGRjsCiUjVesZF2BKxMWhokG5WRDb2f4v5Ptc5sxzmjXwPQoxhb7gzL7JeHRoEKNeD55rjm1RQBhjyGKYeVnEw",
  "key12": "2vpzFUowuMUsvMqfNkTGGTMjmDhMVctgtJLS6KaDbJezDtrFVB5rZLEG2UZoYkzhcWjNnmwERJcDVMxYuYEP9PnV",
  "key13": "hCxQECiFE9zg4oK2gTtrLBUicmJxgp66Y3Krzv4ivEiP4PLWh14Lnz2hvLcSFjKKLaXdUeV6QAf19YxYmMPP6Vv",
  "key14": "CsRP1cfu3GdMYxMkyTFMUG31AHXitjk5gLafaJZHEtQ3Xqvm8fkc1CFfrDaripCnGak2PqQVtKpsxtZHtUwuxFG",
  "key15": "3AJG914dnNfhwAbaS2syyrN9awGpUn81mifJGdbtn6w1cHKEvar1G3xQc7LXfAYyrgqRB9KZmoqYxMWgs2m6poEE",
  "key16": "qW3U22jPwWscMDZq4VJjFKD3Gzqss7cmarVKgAsA3jTDhBzJGt7RJrs88aps6G9DjkcPNxJdTy2ZiFS7ZFDfvBM",
  "key17": "4CPN7M7eYQo1hwGNsoGQSBAg9AMvjUh14bN5cchnENXhbTEZURAi46kZbhmhTkirtpSNbedCrMdLN7hTB5sdckAB",
  "key18": "4FPb1Tocr3iLdsZcoWumWdhMXNNTUyGCThBzdc5vHMfStCj9qmoZTonKPDoRLXYutWH8L4ZdRFERYCBQw9DTX3vU",
  "key19": "2ApWbvv8vHSbCkfYuS1C94gcuYRW29n4GKBadjQmW38cSmizWtN3RrstY2TeBZb62DDohaf3bHkywiKMvvZP4Cp8",
  "key20": "doNRryTyTZZh7zrfWSG5XGKDeSuggUk5Ya8r5MMcd2Lgj53X1oQDybgjbBhGUoJhkdEeXBAhsCngHF54CHX8v6L",
  "key21": "NAxwim8EUqHmGTuBDBcuVyPUtTCGVGa9gkCJoBoyrCMSbRUgNACDiaRxjzcdyZCatR2QNCAVvZAqcnVnC2R2NDy",
  "key22": "4eCBiBc2ywHnJg5DEoXt6HLKuKFuXrCxWZYfQkvuCkxPgUzYuMfLJXDih8wmNPNaj9rzeMP1e57GQnxkavJrzb1R",
  "key23": "3MASZqzReL669GjwnKivovzvxrPXQUDYDtmJ4M4wRe2yGVy6cxtg3nw3nNax1Mk514onax6RChcirQaqvizSoSSf",
  "key24": "5qyiUtWQZVsJdo2KrCnqxGSavcoLnY8NqrYzCiaUeA7iESAKn9GV5hX9b3DBAeSuTbU6zm7rgicjNGzfMAYtkeat",
  "key25": "2bpKMn5At9WkVhnBnEebEKMyyAfnLZdPw9134fnqu8Ga1dzGSANGgA6nhTNPjzCX1NUtqntSBeDQxDCCPba4rZCc",
  "key26": "3AW4X6NSkVZbfQ2eqZ9NPWXh6q2tHdFosZxyXRERNptLvewArH8ngY6wKqpnHPQJgwJbBPw5rKdfPTKAz8PGrppq",
  "key27": "2X8RUjs8yQqq5CHKF6VzMBrYEom29utdjGBcwvy74nmRGFQrXwmR1pgMrmG9vvNpoqqhyjAnbkTm1RSu6Ur5wnyS",
  "key28": "4iAfddgqKfjUmuSvfRj2aDiosY1wTERf6DbwZXoHVf3boQ8uADssbYYHi7rUoRjgJQg7oszPTybwQNEfh17HU7es",
  "key29": "3iWfaHViMi8xB3GSiBFcfGiwKgYf8nQnHuSc5ya7CUxyKohLuWJTJqk2DpNo44ksWb4Cub7X4FAzbcdTndx9ehP6",
  "key30": "fQgiqhuuhHwBUFLsUARc88Q1KURFi5CeGATT2PWJKnwQGXRrVWBZdPaN4ZdLDRckkjvHWZgqJYJrSjsn1AyoYD6",
  "key31": "3bw1rMANSFj6mMMLBMpWYCUq3NfLsotr5gfBb9QfprVuzxCDUFMQdwMxibcByvMuKz3FSs1Sn66YLXH34KkxCohQ",
  "key32": "35VFAYPKZwcALsfU2U1AWmUgg2d6vwbvZtLEBEpR4D24xyWtSCX54LLCqSJTQPCwHWF39VeryvAauXAkKYjX9qnY",
  "key33": "3EFNCuRVnNn84PnSTeW2MvUqHi5wGqfvrYZD7pomzgRB64jSzMu4MxYFiVGw2ibFbEq7RHzxQHpv8PrBqcjVUNky",
  "key34": "5PqLDYcU8LXTDP9RZHLxV36PsCbKjNfdc5MgZa6xxCJF5xYxFSo5n4XT7VdENHxjW2yRLr5KXWrqzHSscB5jMtui",
  "key35": "uiBzkYFwwHQ4E3p4E2twRX7b7Jqc6RM2Wh8uKn5Axy9NXf3MHeKNrELYHqWez6zTTStNtZnJJMBJMtiS2AKNcZA",
  "key36": "TgaNk4zZp28WtH45smezK4gtcbkqtPqoWFdz924osUhSvQRqAT858HCz9EDMbtcvbTHHzvuStcwaxpVZCB8VYcA",
  "key37": "4wFy26w6hg3nrJowbxsNVGAquHNC3vw4Eg4bbGTTTrYpKshkh8uKQyP2XpSxiY4CYNwPuw9gThhwLQcjSfzvhvG4"
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

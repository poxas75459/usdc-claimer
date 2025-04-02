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
    "3yXRD72ynENjcwuXAa6FtTQ9wttgmQWsPoxg3oTrqGWA9qH5t5aW6GXQrM3frgv1BhcFEcUoer76h2zuPs8yTHXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ja2gmK3s2aq4nDVyKTaBRC8zfPJYcTY8yiUbm9u7jb5MduCpGLkb8WAVMfu3uR75V9iBNFHnhJKXNmNRRizGB5",
  "key1": "vq4kK5Ktgc4YMfMLbLmykVYUHpU4uvhYqsf5Mmh1g8Dxm2HyyKhx7Kxj6i327aMCd24XLnHKnRhTbWFEatGrfJ8",
  "key2": "2ZraByroWzdEmS3Gt1QEKzrJpk9W8cu7YSxARhTrNUZkEzK9URdf9m5Q7wBJU32Bsk88NsZ3YXcg4fYLykJp2fqZ",
  "key3": "fd2GCdNvTZRFm1mjXYqqdJfsAkW8PbQ4LWjhx7YoaA6hmY7GuYXZ9s3jLn2vGEUKW5ZRyh9LAXaSnDibtTXLkof",
  "key4": "25v5QiwdSY3bnvVz3w2pBrzeQKPk56MdLgExsxsi8Lpw8u5JBoJiiA1iNGA4xApfZCUaD5bBoqg4kADtVjSfgxwn",
  "key5": "22QWFMy2RtdMf4sXx8hWdgjPXA273YxDaDjSUX9r7U3oXAvDMWDMFRcZUAnMQiFRUxnbyD2KaDE1EdXWrbDJ7kZD",
  "key6": "iQ12yfn4VMK82JsCq7AgwzCHaKc3RMwWDf9ZjALHA6x3kmZppKLbHZbu7STdToUxqCBnKBzWxnFLWVgu7f8mwxy",
  "key7": "54SVVzHxF3NfaeL1auqgF9YDNjifMVegRwPFuS7xvdt6BbS6m7tL42FtG1xDXZHTgRdJ9FLLzucujVqXJ8ya3Qu",
  "key8": "4XJvFHcEEFSy4GsGnH9urdMjVgUZeWyVfCK4PE7oPf2Xq4zxgDGM59CtR3BGbA8nB3dWLMSb7gbdJT18ongHiWKh",
  "key9": "3m7pATp16hXRMuUoxBSoqj1xMByhLmrxsAvyPo7PZSVRU7WhuVJ4L4hvW2w2VcaiYwSFEi5chr7FTqVX9jy5Tk2R",
  "key10": "edaYddM3h6RiNESKwCUHrMF3AKY2o1xSD4HRpwhkF2gb2YZksVHYCVTQcD4ytncekfkRXMvutzbeikjFaU1bgW4",
  "key11": "16Y79SoW7v21bMjVxWGmDtkMTNAxjz77qxyNAAzCUc2wBdzCanjt16KXSwMtXxs1Mh17PQr724ybUvy5FbFShFi",
  "key12": "5sgU1e1KtHrxUZtqEvw1QX7u9danv1Y4Hk3Ho9XpP1XpqNXK3YGUHcLSWRsd3jPjBCh6rdaXkD5QZ2GViYwVaSRh",
  "key13": "4rVPdwyNxtSjbSMVPmpoYtntGqeqWhq3AKJfc8bmTXYg1gphGL1e6KJuAzRD9C281JEQTR6MHMGFwFyF2JeXWiSL",
  "key14": "5uH968x6XMv2UAbBihsaJUHEHiPFuFRQrWLNUWUcqzBGNYcVXyAzdsxf1tsA3AsEH1Y62dpTLXR6C63pt2x6nsd6",
  "key15": "4VH2AV4wxEGegDZ3zA2342KseGWkBkwWuTwZBAHJVH6hp9uPvd5D4fompDgKh8MZocQRFoPkxFSMej4aXdMN4ptm",
  "key16": "2APPCpZNSxRxwz4PguJszAR5tobSWaB6Xw3nBhQTx72XEJQf8RnEZ2MKP6aaZSeoDyUYQritgisqqBRZyyVjTuvN",
  "key17": "2S8zF4xiaR4TzxnsYLfgbYBAtA3Y9qVkK5T7uGrKk3USij6kaxtNEqWJzvkZGQ4TYPJitEbzL1fspx5qiV5HqG1e",
  "key18": "3gYqmHVo659QKyi58EkwUoTqqEUpg9YWqf4TJNmMYqyQ5shR9gBJjQfLVRZPwbB1xYHSkPEkuxtgMx5M2crDEGCw",
  "key19": "5agy1rg39Y7zEsyZXX3dkjMM4WJzU8MzaNENUq7ACP6uSozeRjXAJBMamA3bACEUT7qhwadpUmAoSKySbmMRLJC3",
  "key20": "3MyMJetkffosm7G7ti2PNFBdJt69zV4zAuTsEi1ToGJnsER9en24Ucn9VNkzZcqWDKG4TirErebDrk7dzy4TP44b",
  "key21": "4YeZvkr4i5ZDPgrW8mwsS6vyCCyqe7DqjqqFAqq2pg1sNJqkBjoa9AwH8W6qsnuYwW5xxw4vhY2i59vpt1BoNAez",
  "key22": "2qhrNKPdpP3SFUA8TDDpRuNdiYCi5xAhYhRNG88xp2rbW8q9BNGtmgwDF9tWKcMBFq5RueMXRFqPmo8ReeEFAQLQ",
  "key23": "3XbUJbAfXFWTCeLZsnUmzYAMXat8sa9j3Tsjkb8ks9ZnHiCom31jn6jsUmmYNx1YKESjsTFRxaP45CPoqpMygW5p",
  "key24": "3BYB6ZrbwX3nkdXwJJidYhQ8sRvGeVvURv4Yqbeeu7AQvkuxkVZzP6YYdLwDvbzxZPognBknFbynjia7Ff11rgzB",
  "key25": "4wKq3ByuEfo7rsCVPgcGU3PQTLGQi7tu93ZAPpdAN5G9Ke59fV1TwFSQgTtNRz4SVPgX7Aj29umJDqdTVYkRQxar",
  "key26": "4DdKxAZVyzg4LSV2snfGnbwndwDcMVGyY9g8PUm9UjeogMGMdG1h4wkXh7UPEpoobah2vVdcUKv6tVQXZrPkX195",
  "key27": "irw7pxjwLd2nuqzgJY3aUDa5bEPxZkGeH3QFzMVrgCSQZkihLLUFx5dDfw1Hzq46zPqHUvahX8TrKNv2G93X3Dd",
  "key28": "65Wyi77ZVF3MwscZ4QJUERyXj3q4FySwszoeyuRStvXmVnqnHSKobnAhotgN8A5wyHeF1etC2mdJ8TcFKQjQcfd6",
  "key29": "2PnmsxmL9A11MxDJfQXavfxYUrkERn4Yakr5p1eRfTA5wv7cUTofFiYSRrwRLk6iY2z5zPUgnGACLdQBZvoscT86",
  "key30": "eMBk7jqkTbznBqCFwbteeHFcCAzDKHC2BBuVDcun3qsxzZRPu2UjUn5rJArm3ok8FNfAgBfq7uVC6t3N3aqTDmQ",
  "key31": "5JXeRZkd2L1Lar689fPR1pwhKVjPqCgRb4Pf1kwDAETdKmfiAuELy7F9fr7WX3QdQfRXFuEa7uFRditLGSv8FwCR",
  "key32": "3dWGYutnSwx32B3hhEStitfh6qoKeHdK7RdbT6hHimNm7YVwC73K2pZWpsun3JDCuNzvbwTSJdEjFDapY83Rgeee",
  "key33": "2ogp2WPoFkkr8zYZt2zFVSx9hrV7XEQ7YEhUxUZ7xg9RvUEXywo9nMbTbm1idB99F6HCtyM8Nr22HwxZQj58EEnL",
  "key34": "5h7dPC9VLzn7ePAtRiBeUSfAypPLmtccqsqHA8nb3krT8WLKnvAZ2pvXo7itC2JYbnFi44uM5wcwdgzRq3KhHE4B",
  "key35": "3on6MoQwaha22N2aaKHNkMGTYBNr1WPPQkDQgvFbt4NWn583oippeWazc9c3WmC7ogbjfJabLEquerqaMHWF1sSL",
  "key36": "2LVPU33WmYKAwJVkSGfCvDkaHT9zv3LrUdM4LYnCTUdarnshR5yFB89eSP3BmpAa72d9hDH9VKNeXRrSxnVN2mFw",
  "key37": "H9wQneFdymKFCWPX3RqQr7uTndhQp7thZW34cNrUKgQZNwREKW1jctPFQM1UirPkstYjE4AzJ8Jrbz6CFZFQLY8",
  "key38": "3heeafVM2iHmwWdNb8HRTSD4v6VbVSwLp2UP12URZ8wzwS8mwAASgF9oNLRbJprfToA4WHWBimW7aE74yrV3ZyAq",
  "key39": "2THEhi5KSL7PvDtbNdjYcjYdfR4CDvmTZZ7cZjvQTZjqmdx9rbV116kE7rDTimKDwYxRxTfMSWLJ9PsJNtVnEKBo",
  "key40": "2ubVMRHiZrynRfTwWENBmzX7PvF23JuwKXTYVeE3V5G1zJ7JMQ1pcKMx7JMc1eDxuGS4MWa2jJj9MTTUjpKLZtkq",
  "key41": "3foDjZi4qpeyGz1ugPCgv2n8RhwcgoGPWGXnh6yNHKRoNCEDSJCanfFFbM9x9A7ygg6CTCdjUeb2zavt6C74wAfa",
  "key42": "5XoLc4AkQ8dXa6QDQUrHmnGEiLMunPUHENWcU85KYS1yakc4uZdcWxLw6MnVFCw4w44kwjQYvGqqRUmrGAD5Y4Ti",
  "key43": "3baEZZccSqsEaJVy29CiV5Jg6EDPhALG1iWMUfs6ZGggUvW9K5mAC4wuZaKCsHYb5a8iv1a5AGfmbcUuKyyrS6gL",
  "key44": "26q8GfhoMYv9wNqn6uCNxN3ovhemxGrYiYrM4m96fzreE8nLV3B9EW4kazcz3yfVHWiFZdQD4RoS5xn5v1xFrS4B"
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

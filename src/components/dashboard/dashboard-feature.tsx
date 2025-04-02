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
    "61UnNJBj9TKK26spbNfYFDgGnUbjcZKk1XGQokuthZrpekFm1XU4jjS3cB8WPgMy3akRcPJ9nPusweYhCwdtPscJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8etg9xZbVaFkhLox7MbJJjisUKh4Z9rE6BAJWNwj3XbtsxUq4W1CVFHCrbxF8UAgxLd3ACuDtDFdM2RFc2vBUS",
  "key1": "5vj2GnJDGBRMzkBxt5B4Upy5u9aCWDzmzAg8B1eyGs35cmfPv8MKm1F4d19JrcG3sfT9zvZfFgR576EPN2U4sGan",
  "key2": "ZLdDXzbiaMfhr14TyLeUEBmhh7u3J2BK8Bnu3zJqZ53yqvaZ66JwLoXYB4aKso4PPazkgXafMxB8KtYckeTdThW",
  "key3": "3HDCUpEJMsBharGmDzgwTE8PY8SwqfsujXAzaWbRzrQ3Uz1D1zBPXoMBHBqFkpa4GRMhAShzoi66Epju6ov9TL1h",
  "key4": "4LJyjyxqfraRULbVs8NNU3eys8HZYRfeyBqsRv6rdHuUG3uwN9NzerS6SH5CXv2CeMKkLpztkRfaJSFsPHK1hTMk",
  "key5": "2Ja9NF1zazzMRtJfZhffwenNjztWZkmap8bz3jW8vAUKGC2VYj2hH56WBpJHjV5jW8WEUqm154S5DuAMo2k7NVSJ",
  "key6": "4njhqaj4WidipEhCdAeCzaCkDxueyT85QtrVJWoKby5532sDjQdMAev5mGsxswJx2cXzbPHY9z8qPAsXQs2zmKD1",
  "key7": "MYAJRcnCRKEUkUpHzh4mAMY9LrT2ug7cqfQEVyApcHd75JsdXvpb2B2e2MnWvgdnzaeZ2nSqAscjG7CPbusDGtd",
  "key8": "4oUjxU29HyNpGvfgKpLm94VyaHY3r8fea6nu751RfCiNK3RciqJpkAab8F4LAcRP58R3cYoKvzga9bnjPL4FmAdd",
  "key9": "5UaZTPBfdGSrxWHPb54yzoh7QqV1gZjysVRkCKgeEfkvM1MtgtEN1KrRr7dVN2LigrpchBTzvvn4kJzMG1vxHh5j",
  "key10": "5TcN8pna1aSM7jNnJEuJNsjH9JMYCYffG56rheJdSrXFv6mvDZ3zgG42U3ZELrL69SKVJV6CqDbXpMNeRKnBvRTq",
  "key11": "4fAbN3BonRF4WoVBwNxV4zAW2af5zH4duLDQiZZohTJkjtsrUjy1KKyQgmxCKVuWR2gYapXUugGJ3u6dcBYg7jdt",
  "key12": "fPGoscnnKCaRSWbEhyJM1VyUBgYmJQZ1PnDKG6f3gWBvYJXj76ECuXb4QdU9t62iiD1YYgWkm5mRTZHiTrfeyGC",
  "key13": "5yWLjNt3s49KoBmzUht9HFfWtmn65W1mewiepChVmsCN1YpSXGbighNhpEZgVJFBcSmKcCxNgxet7FyaAnX1SedT",
  "key14": "3enJy9VypdQnd3ss4SLskxRMryASp9aHCjisyoFSWX9fTb3wenhkTUAYkgztgUrxJ8zKcyQ4YNCj5cvBVE3QPimU",
  "key15": "4PzJp2fPANCQFKYKn7pQQehd6tn69eoetXE4fdC6eQ7UVc6pETGLAJ7XSdXLLjvCWChaYrBWngTYZ9xgCgRA3RZQ",
  "key16": "zSFU1PuDuZ1ht4dB6jrweWgpd9KEYWRLxpfnorPdXY2GcN7n7Aem7hKUKk8asRNsQaXsdhaP35gZJY1oArBdG9j",
  "key17": "S4fgzznBrKfVTweSrFfbZi64K9pxb2VLt3uHztUMNCqa74Cb8WNjhkjyXBkHTGsUHG6J6X4aQsGBnKMAYQpqLYF",
  "key18": "3Vv3heqDEtzkBK3m9hwkUQPn46kgX9YWkRseL4K2YThgrFitGKAAhXDnuJtYxJkmuxWDVZqQTzYNTM2xixQgdAbL",
  "key19": "5F3dZhnwQ6kTsgNkxEF5Ua4yLnXu2UQHKebcqzBPC1v5oYenKw7J9TtuMwcqcrJ6i1kpEmyKAPNuf6qaHVmGwb8s",
  "key20": "3rV4pXXQz9QdbGZoMja6xfdWXTqenhW7bwFTe7Sf11T48NdpA5szGewUCcEJS5qBMkNpWEd6gQGVUn5nurkstJwE",
  "key21": "5KGDDp5afkco85GUdTjJct8HwwZZGxyTp3c5H7tRT9ev7vBMwHNxATSUyiuJdEbBqvC4vLvoRXgPzuavDL3uopf2",
  "key22": "5jctYPqesL6QmxQrNX791nwokXMqDnAZvGQ3jwh6SNuDzYYk4LPfrrUNFpRyqkvq8jwEJf9HPy8ghE2SoNx2YXRb",
  "key23": "4EY6pGF9rMebKgxawTLj2C8Ngm3ftGk5gVURupGx1MrYtDFzFY9Kxi6TiSgrvuCNkc7X7KhPNK4gJU3DbbhqyPgM",
  "key24": "35xT1UaDioxdbceLCV3bvjq7UAGZR8HZXMLd7WyM8Pt3Qa8efb36BRs1GGPkwu1W48A8264sJAFuDMMG7kX7T7QP",
  "key25": "4Ysj4U7vj9rGX9SneUdq22zW2A7U94K4chHvLryzL1hRe32qbgdAYECog8cwBoXu7Uy35rb4Chh2sSbgSRzQFPsm",
  "key26": "39nQhsx6MwfmetQ9CP8nkFwZFNzmwxAegc8uQ7bpsJqY8x4i2bSbYVscLEuFqGBHKtpppyVNccL2NDQ4hextGSXn",
  "key27": "5Lda9pPpsB8pE2gnpc8fnokm1iQZxneZG1SQviffBGXRa5eP9inPSsYGLuM68wbLN57Beq3Mo1adCYsQRDaPQi9P",
  "key28": "5mvqz2dob4LdBmbsnwPb1dAhtfBHDxU4ec2MdNiHqX4bU4rVRCyME5MKfUDW7X3A6VrFgnEwoX7wPgpXRSujc3Bi",
  "key29": "2xFC4j6QrrCPLcWDPSRJ41hdZ4Q21LB2m8d4LeWT12cwqN1hQ3ywYfYkBMPqY2w2xrnPJYHxk2eqhV1eV9rRzGeA",
  "key30": "hceaBLnM2dCJmCo7GSTe5Pcshjt9NhUDHa5frB6Bjpy1hNX2fsHdfMDyEobke9x8NJnA1btfWpMsQhBxmMZevz8",
  "key31": "2KihyiWgup5nMd2ZAmCt2achGWJX8WMG7pAAGsWGm6Cv65oEsFV3RLXDpzdtkw8W6dUho5cnkQnEQgRhYYy4dx6d",
  "key32": "542rd1pWkXikMET3guV2ZvFWDpBR37ymR5Yy3r2ozFGwtjhSSNxv5QvK8Rqfo9rppbGx8uEhGE35pDk2dCiMfMwP",
  "key33": "2F4S2nZUUrTZtp1FSEBypwX7yXbhA9fg2r83jMQpyfskiCZZQZbtzKqVavCajM6h9Q64F363SdZwd7M8HCS3o6sR",
  "key34": "5GZmL53EpEs5WWY8jbSZRVfhKUHQrEysuLMKgbtQkYNeco9dXCm69YnMutntnTwSzUnE8VtCEYgnni7Qosi1bMmX",
  "key35": "42rWLkejyPcTsLGCiEXbwyGz4Qnr41dXtWG6f9TXa5EKhMzWJvSTVEe3b3UsgH5ovAy1D5Lq9Nu9Wg2BXtcDU9on",
  "key36": "3fStWvfm7Mk7reo2JBpddLFqcLxVtzmdPT8DETx1tZ67UZvTzbTNYD8vAzdLsUAmoWjvRNvJ4QwtJgKm3TfMhr9P",
  "key37": "HN44hXH47pipBewuWv1pA8bxGGYUsHN6ZTVMTF9B5WuXcvYtrUcJtVhcsFojXcy245cFVjP1gB7QsTRCY4JkNpt",
  "key38": "4oH9tDxAEA2tjfU6auNs4Y18bHqxPVYDjRZuuNoMz1EtVUwnd9Ac2bSUzAFAr5CNVAntNxDL6Zi9Ecdq4cX7ivTs",
  "key39": "2zY1mxBkr2Wd3djEhVKhGG5LB7KpU7qZK7rCfRgSFgxxtB6d6QvWmYBrLuPdzcbpGHVMcUHsEZb4AXpuyuT8xGQf",
  "key40": "5CXy44VCvdxGio7se86A4FSD5TEb6XgL4BV8SynWiApjYe3Qt6382JZSpB9tAtzHWnUBntwYaTRcaeeJFZ63ogGW",
  "key41": "2vJuYzBwu5Y5nNEP6HtQHXSfB8FxuJxMPpMrSCLHEHmLqbgEBvP4LTXkjWyAfwZeU9aYuVimkXWeAQAEfjPfetiM",
  "key42": "bHiPDK2snJbxeB1TESF3uTYEujFgJgUmJVaUzunSXxUd8TUaSmG2Hx1PsJWpo88CcdV4zZw17NgfVBJS8y9CwqL",
  "key43": "3NVLSeCVJBCDf3hc9uhgcc79vcniqfbe6hXuyLUzUk11SshT375c81CjeQ7P7Jkzi39mroS1QVBo8j1qMPY1fHWL",
  "key44": "4tnVrTnURKj3TAfRRJL3tVR4CoHzqAuPt1Gmamk2kqZGHDCFxg3tV4o8EZN8QWBWVESegRzqVwK3CZeVP2hZFcWe"
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

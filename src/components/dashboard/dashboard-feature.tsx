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
    "3CRCadpuJW8EmcXAzfcKHE9nx1RkRNF1n6EN5qrmnJzaAwwKxkfedNHv5xykSWPbGRFjcjoQ9xrS1o4XR7WnyEbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhP7e2gRyvw7Xj1V2cJ5kyrrKM2fgBEdr7DRy5hEYv9fxg2nL7VkkLTnQxJLzkY5UdxoavUsdBjVshwth4kP9hb",
  "key1": "49d55NaN3n9h7w8HVb6xH3CkAs9D7RKs3uLVdZJjUcgaBgJ1hegZSNitEaS3ndvYXaRTebVt1D9parNNefZezmB7",
  "key2": "37PQjNfJrqkwABeXZPhmYmMVJc5go3AbNEgTkUjs6spLGUzhk4tYJ3r8ssjE1QMshm5Pu33tm77Mf2Xcc2rrJioB",
  "key3": "5PsxBmMbzWAdNpeCbQ5wqYcwd9nv1wK93HAVtaagrGagq1kE11JDRGSpCs6kyQzGhQEB4pVvu4vRQZy4xy6Cor9z",
  "key4": "2vtxN2mFh6xsGv3g161TcR9SFibqwjvSex9ZUwoTmmR8RZXaE1gyfRxT37Aa9zU3xZzcJdaYUqjkKt3s23w1cQn4",
  "key5": "5CbdBu8e7zc27ium5hmN6sTiu4HbV8HxgUu6EH7BTshwZmqnWrKYCuJRLJc4XayHFGrkiPvNpwQq7ka24b4HwUyB",
  "key6": "2es2pjMxEtnQ62uXZGEbxmwyUpfmp86JwwSQqRJPrXDZNpGUBejrKbZgW8YC5N5korqMFeS19fVBbZSvPkjtgroc",
  "key7": "431of8WpAhwgPXkqEtkU7FQCJp5AwgxkHtWbee5ZpY5zbAyLsYaamEtT8b4ghN6VcqgdUy7Pkj433yvwHCm7yd5j",
  "key8": "5Zk3VnzbGLs2GpTzuVYz1UV9DqhP6PrEwPsQ8YyvKfbMWAhBMN6254wTZNh6FB5ZqnxUHxG9qir2kR9SBkjspuP9",
  "key9": "FKFRZGjgdBCCSJiTXDTP83HduHaBakHBUYGCjHgqmSsPcQ1ZZVdFjbgnLaYk1VmeRzEpdcQrH7R4yVVYzGiF8Gb",
  "key10": "65KgYL2iMpEYNdRBBTkQmG7UJDzMpGrBEkXGzPEmp59PCp4uDxL77fhwjTRFkXFY7g7VzCaLGgWRUjrX6dtzLcWt",
  "key11": "4sXW8WiKHvyYKMNmwgg5WfnX8wR6ocJbHPsyE4bmK3fyJpAqQtcxUgdyM2kexcgZyE93U4ft824yAtkWPptcSPHK",
  "key12": "4orfXNLQUzRnB2FfDLb4fVE9E6sqXTV2nRCTbhF3d37mHukjn5YQvYJWs4PE9WnQd9YFYX4VcXq2ztBCsPpGSRVP",
  "key13": "42cyUcyhSrzWEMkUx5GLZhzALcr9UPPkebceLofX1EXz7XMTa3iZ1oVAHSocZgAr13LwQmqpBoZRZ5iUVht6JDSA",
  "key14": "5m6tRWNsPU382hhJsUxAfCtjmufVUGQTZc7Gu9JdXyoBfaU78bwupamRebE7ABCGahiBZAFXgm4xLqbhEJbpczM",
  "key15": "4fBHEm67mHURsWJbLRsMhDBNGoWYb7heYtgqF7Zei4fzMao6pBAmZtgYa5KjaUReZgXtb1w5PN3eRtT3922QCXPC",
  "key16": "2hgfdWSLGh9peuAC4mbkGKDjmLFd8Yn2XTdsNB7Dw9RTJKYmjSrUf5S4DSv1srRoSPeApNT3LZ5mLs638E9dT8VE",
  "key17": "e7V52vd2gMXp2PbjsvZWbak8KfwmjbaAcPTyaCzR6gFw8CM9YEdph7VDFBoyVgda4XFPZXBzHdX3jMhzjJADws4",
  "key18": "5AUDz9MqGAVfXUQ349Xi4Ccq5HYfibAVWEjS4fgbkwV6DGxNcdPUfT27upkB4RQLkeLHngQQBuanDUPiEDzwnEGm",
  "key19": "e8W7DriSthoNVAioWEGymGnDGFvTD3v35HUJQdnP9UkRLW1hqEzKqacS4FdgNfmtpVuhfqrXXxRsGErkWiUCtbP",
  "key20": "2cjkM2JDczXeEP8KvNqRym2vC8gppZZq6n5fNeK93cKKYUpyokxhWWrbDLqvRuHoNBSShwzr1j6SnFKMTTBUgkfw",
  "key21": "5WZ1ScN2cqEN8umj1WV3q1DdSbTizREmUmA3q7TgDcbzLvfEfjoMgdcMJ26sUgxtTJbNvtLDKndeFLnwVyRBFhGs",
  "key22": "3ZVvUQxZVMoX9HNPEK1vnnstSqLFKGn8pZZE1KkZq7k1WKMaewg1bhrm8fWrQ9ryQraJAC5FbiWZv3wVzZXWURdA",
  "key23": "4TJSg3ZoQTMtWGDzi9N1Wch6FSQFH63W9wP1cuwzvHD2pgC5v2aViTkp922S82gfeUyJv565uTmY6W2kQRh6TNR6",
  "key24": "64RXzGh5Jpdq7iqHG35sQ81hsAYZc8MSwhkWw5NSeCHeYNbhLrUUfU6pccYzRsV8u5Lmh4XtghxvGGXRtFSxfswu",
  "key25": "579W2c85rLd4RAWDHoFd8omtP73GGnwgUwHNpF9WsbzjDxsyKz7hCwQNCesSqVkXhXwwuUf5iQ2xTDJ1Q8Yecs7X",
  "key26": "2rjtD19NN8BMu2fHyj7Xh8wJNfBzrmfwSfUZHajHhh4z9RoBjtD4FJjUMEoRS8sVBcrtVaXVgpLXC9zbtoVAs54t",
  "key27": "41nJmKEMCgFMzY5fp82FwK5bMkzNwd1J8ZR3scE8NGuHv79tERci4JfDXPSwh2JofDXJufFd4rRvo83WjV1gLcSj",
  "key28": "5MxCLeVsQn2nQQtDzWmr5rqzReqb42vkLquRsrQf3eTatwa6q2RAELBLT5G5RUmc8ZmoE3e417dhNyZSesFi4EEN",
  "key29": "2ZkPZWATiMDZzTkeiMiKNoDLT7WyXLBeVTqsEBTKXddGGCPtkXTabGfhoTEZmtZzedw8ckmrdsW6Cnb5arY41Kka",
  "key30": "5TM2BkTxiEzSXZaWyVExpn2X9fm9qwWe274un5rk1TvBZeJWMBvNEV12pudJnY3FV8p75Q3959kazHvw1wUQ14KU",
  "key31": "4XRphhPRXHfKQ5rC8xUhsyt9PaBXJVTX5dRfii18NtTsFafkz5j2Zwc87Uybt4UjpXU42VZdNDiiik88vndYxCZx",
  "key32": "4g9oukP29B9nZL2wDvKif6FZfLR8Pmrvi7GEYDm1JyEfLa7uzWAhSzSo7pZ3AF26Rd1JygiFm3eCdF67Pfc3uYhK",
  "key33": "5hwhUugc9X3xtd9yKUhJjJAhg9LuDdwZr9EMX5nEW1RKKnvD7rNhKf7AYkRvskVUFBUpsugmAEwvjfdSC4mtFwog",
  "key34": "4YNxhLK7hBWQ2QSdRcyXj6wAgqTvXosrtuPmPUw7Eb2wsmadYAiDmuDMP9o2iBM1k6rsGzXiUG4iKvwaRuvAyUpE",
  "key35": "3shVe6Nid1b6GKwH2Ny6rU5s13MeHsBSbSWHDwrTWVW3UXPr6ZsfNvv6JY7V2SmtzBtQKVbfCMFE5u183Q6Rxsar",
  "key36": "4UEbD6hZXEnZHS6cEBaYP9qGSKsB1CXXGwsur25wjnsWM5RMZ3dhCJtnNBTvKoqESeqSjAo15qXe8YLF6Casj8Fn",
  "key37": "2sirf1UbcVwr9MqmfB9YDLeEKjUPfLxYy23CWphe5TVXSYvH7Lw9h5MMgTyrxoeDDHmssuCv6b3yB95fF7xavvQE"
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

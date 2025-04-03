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
    "228XUbxs33d4G7CiFeznwLnMq8XGtL6hmis8qPNjR6oSe75dFJp3yS52PngB6W4Q2ZdpLtAPSRgGYpcjga4pRLXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iYLDUVXfqzdAFHA47WtNL9LxVsMRRVwZqKZ4oxdd4HmsH84KkiBHfTqHSuuoeFgNheo9aMbcTCNUkC22QNtXsL",
  "key1": "2rHJGT3siUWiznnW5wVt7PeY8843uCTh1MtoLQveB7RwbdkH5RyvP2mKjf12kKUf1tRdspLwgoYKxuENjvexKkYy",
  "key2": "2CA1tL5QDNuy63jhXSEjhNK7dN27Bc9FWkixqfXvpdHiEi98XKHXLMm7W65ZW1L2347g4AGusu5dAF84zDKXmawQ",
  "key3": "4SUYwkFtmMS3tMSSd9b26FeK5qg81Fx6F4qA9E9bSKwRVo7MXTt8RP1MxovgdS3Tfrr7YammCmFzbFRfiDDWus2",
  "key4": "4TUpxU67pBqJVQmvhxcEndRxyqMRaMrJJpfpMKdmd5whWtDdxXyp5JSrUYLwWAQmgjKLZ7K6fSn3vFC4FJu7Jv2Z",
  "key5": "5bTVo1si4PWYdEUcvD288fu5GGv9RZRK2cRuu5Zzdhq32MBLxvC65H8tn2GVZXPk6oKgebmXBnY7ZpwjkoFjCTpi",
  "key6": "Cc4KmtULrWk9Y242XHpQyAJR8agAMFR9yjNxFKZsfYC5mkLAKgw1xFFAF4dawKDvBucZ6RcY6K1g2DUMPp5FZMr",
  "key7": "4rZkT3qnco8ZyPiWEU1xwGW9eyqJvFvAsrrifVvKt7z3maNbmgQ6vNwBi8Kouh1WnGtXc66rmaYreW4ztSDAtCJY",
  "key8": "63STr1ke4dzdUmDBbd5AkEYRNuyXGvcKkF3jrHVSD9zgmWMcG8ksPz96admkNrw3KxtuevQBCign3vccPnrDxqGq",
  "key9": "41YGUM3BRj13RqKYxuRLTm81dRLCw8xqiCUo9ctYdWrvAUB5Nc3Ue6EVMZkuhUHndtSFRmpiao5yVSsQkz2Lqfyj",
  "key10": "zgHqoks7GphBV5gdDgis4Yo49UoxGCZQqu5QfoxgY3KQeQZNoWH5FYXci4hJwC4L8Bdv6Mp699NGLhV3qDmRKSQ",
  "key11": "Gspz7UpAdTCNd64ZYbHfVPBcTnM32Zyv9GdDM4G68KGV4r6ymD6NGUTcSsQqLACjqxeWHAaBJT3WJRUtnjGuFgi",
  "key12": "GiFTib479xftNjYgnG6u1gnqnZBCJqoiac9mhkFMak5xeqjbvFRzBGbF9RhsXgkweQwg4cPscmayPvXuzWfzYA3",
  "key13": "2sRBNiJ7sFTnybFPjGcAu8cFfgEEPwF5RusZAe8hrHBYTnzbLkYmvaSmFzfqacaXW7L7mbDJQALMo3jxrpWHUNPC",
  "key14": "3ZBTQi8ApcfECR8GuFfLXctwiwARszJtz1abbBb1c367WTxKzscAvss9ezypoSAW3b9E1YXWFLzXuMx48Fb4zaHh",
  "key15": "3wcTtQmYH68TjnaCqvmoJLky2YmQhgqCyfWdeY776TsifJJSKTKCgJNJ9YLWrSHrub4dE1EMptSMaY8GZppwHbpD",
  "key16": "2aJZt4bQ67ErD2NecND7xaYgpieG6QisHBSYQtVF8xe4wcjfujGvYQPb17sGHsK53vTXv5HhHmKjefMZ6e6hFZEx",
  "key17": "4tu8obYuKyaWnAazPvw3VcFRFpmZgSqvF7tmomR7oD7Gbfc1fZy7rd1w6Bzx5HdfRANBDFYL6hfaC7HzZJGjSNyP",
  "key18": "4rWfsQ4WgPuY5UwzspUNsj3kUZohGgZsN4fRsAFepxpZU58jwV3p2w5mUFYrm5vNvEjPVKi2YyCF58zUVwwy1gak",
  "key19": "5qBubtBcbNU35GXUGE8UXoS9T6etQaU3MQ58whqK2qNXaQwUCEz7tVi64Sh2vbVt1pnK6t8banMbNgzawABAtESp",
  "key20": "eNyQQpwEmb6JSkHwX1uAdeYSxSr27hZakRQ2iQmnQoBZ7Lg9XyTMfGabwKiL1ceaLXMmfoNNJVBLhbT8v8EjLaL",
  "key21": "2ocqmpFYfDH6dDiaYsNc3EePpZpguNZT3BX7W31fc5tbfQpyCDH5T9Sxm2eMNAVyJSpGad26wtRTRvnCcEXdiTQD",
  "key22": "2kXMoKqx1y75nUka8MiKiDcKMtc81rkQWGhVS4KYs42yVj9WzFFpHkDWNiLWL1vCtycyuXMnUB3aRF2B8AdX6BBH",
  "key23": "3ixV69rT7wWB3dffW8nioE8gbULVfRN6Jk44pQd7NeU6GzArkarkKcAxyHeqhPXv71AuWR9X7cyRwCJh8E2oeTfU",
  "key24": "AzzbvxzbVfbFn3LX6VZrmVxqcBXXiNE1Khazw8us8hsmuZcBaiF2avZR7fFyBDr3RK37DKBzvcLLj2mGLqSYtn3",
  "key25": "M3ygizGFZ6fZhEbGowhHLLCHRJy8ZNyLgP4eBoDxPfLeabhHxDcjcWwwCjQcKrFJmmY6EsiYjMb58vqcwL3fmwS",
  "key26": "5jtE16vtMwS7ZpqvK9rPDAX2o312J8wqymDYiiBbx7DDAA7zKSYYwsvU9hYriWnK8pQQCVEPBQdKDpo1A33fV4aP",
  "key27": "3EWmekmmAz7DsWPL9ri9n1sULYhKhd632yKrw6oFsAivEwigwk5285HSopnnddj4mTD3vLb4gGLdQjd1cboLQuiz",
  "key28": "Zjpfpwftz8gS3CHQ5SohswpdcaMHxDVegXAjmvEmrqgsQGrj65Yz45g86ybF4xYFw3ujRWxyu7xXAT17eudh7RU",
  "key29": "2yakJWuGNWMjVSuuBjiHhf1GyEHPqyaUymdyKuGX5z8MReruZ7PTSGVPDPGfVfTSKk4sReLxbN2zQckdoqHtLaxH",
  "key30": "62bhSFqJJqMqXUoaKrfmEH6K3uNJytKHTaKdwZBm6ujDD8omojFuzmZEX7nseFbV43mKQq8jhDHkKv3nCay1kQyZ",
  "key31": "5woxbWx9xx2Shtk5qMohF3ynebqxDgpLja2KSvgSUYjAotfZbCrEav4PgeRnaNBqPcGqccJesJACbmT48CBDBq1W",
  "key32": "5pFQeUzGRXJSvV99zDPVLaRG1MhDK8kpXm3kG6TUWsbgHuMbgRzd9Aj9RS7i9dXkfZG8bFCu7tLWdmKDEyFAg4sW",
  "key33": "3kdsrBpj6QePYeB6RBE42VBdmWo7qWKwfvQ3avS7cTMZ1wQoWsrqn3GP4KCVJQvDTkmiKfLh9wqfcxwWUGdevyjg",
  "key34": "qBbiR4qrFVWKcycyPTXE5tH8ehC2wpkz3d4ZgFzx6BshALRS4BFF6F6rySydnMKfNfqNpUzgRGQCAE3MhQEarXM",
  "key35": "53Q56DWSd95E1HN3bKahP3fdVPiFZi9fJfugEXhkj5R2prUo5Ri1Bq1Vv5vcbf2rD8eMTehBPuMGTmk3PczPfn1z",
  "key36": "3TC8mMQWiUtub88MLExzKWo6w2XQsVdYah3grg56dDLqwZNym5ZUwu1xjgpDDrJcSKy9oeWRVx5hMABy9HLF23rX",
  "key37": "5EcWswTLd7EBzBxKCbKd3ySks4eM318HWrHpHnuQJZZZkoQgLasf5PEz4QqSpXmgN6M7fnLCCFYbKfxfAJjM7djS",
  "key38": "59TCoHi3Xkxc6ryY3wYiEx6Tkn27NFpoMbdYieN6TSjWZC9KV4D5jR6NC1QbvCAX6durKVjxJRfWMnJSwQp76AHz",
  "key39": "4N4YodGMjYhsadympprTsnzGS5dvPWWnsQvpi9hRusesWN4fTBUYo9QtAmUMjCtveq8JhyY6suh2Z9cQ1hs9cdyg",
  "key40": "5jGvvHjD7nFKac8yFaeazR9hHmDXytv4Eci77SBTaHkLYaGVdW5zrWtvSRJxi32hKrd4ovwZqP72tVQaHXj7MP27",
  "key41": "2rS3s9Lx4WBF919RRBcEg57bagkZNTKjGYurDRWwFBzEbG6ucCBwXnpAqVGmfQprDsYQTKW2DUnXTttR9XBqRZfm",
  "key42": "52j43n8EhfrkWcK2CVRaVeovgvXXQwUnHSxJVannny8sVR2gEtzNUsSxDmFfWB36pxqgmw83M3SQPdVLpCR3u5RE"
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

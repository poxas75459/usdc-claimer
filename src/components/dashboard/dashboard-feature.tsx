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
    "suaAPGodNrH3Q1VBqF41XrjY51totEmZs2R9Ga1qdoR89J6TTw9ob87LZwUHMsNWbC1xwPkzB3N8Q65iir1pRZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHA7it46URaGkraenQBWFv9cRptSJM6231XHYeZpot3H35wd3qdvXetQBdi9c4AB3y34YKgEMGvK1wUGhdkPogD",
  "key1": "EPcS4xRPmJgL6FxB9WQz15spLBDtG6nRZ92qAHcJK6jRDgcLTufxaGzxVmzTTfmmLAGRPqEQRACLWfoJGgvczbQ",
  "key2": "5CPgi4p4MyV4QV86vR1TH4h1XsrLuTNHt174B5TqenrfHR5WSXoGrkWbkXw6g9GNVqadYjHNFNF9JCrVJANENQmu",
  "key3": "4H72aPR4JQrkpHV8FpMbnHQ8WpRe9frz3cvjBCNfifX8xdXeiY9wCkx2sTVDRqJsT44nFxdw1Y82h7Ubfp7jABdr",
  "key4": "5zjGoiEZL17pqAruDr9QmJDffyYHy3HHWPxU2KkJ6ZoGLM4AqQ3wJjDfMFJ1ZJqhZPLSr9zbz4W24zDj9fccZxX6",
  "key5": "X43aAP4GifjDXSyoSBdsucmhmyvXTvvBTM2XhA74rCkxS8arPXLT35KLGXCALBNNVy2a8aJJcCggVJPPgYu1T5Z",
  "key6": "4aoVefzDzZngKa2DqwzvUGG7aoUHuA8RVrBZXnyHdk3djPtfmnSQfomRyFy7aDXSQgmkAMnnTdhGwPLg2dvD2ew6",
  "key7": "2aYVX33Zbmfi7emgPvsRVfxazm6jeAEyDaSpazqLc4GnDMLkEkAzUxhd9TjmUVusrVFC7PjwhEQsSCPUC9vLRnH5",
  "key8": "4xPU838zz7jQCE6MaPFvatL99et27Cf296j5g2b22GZtAorVGezkYaDR5u1TXB5aMKKVwUNiU6g1nj4cMQGyZbEb",
  "key9": "cBhdSZ9x1ZxGv5gceMk5FXnzo67C2RE62hPwBVszvxEuMzaLE4NBoP1wkJbTCbxVvAbAvGiaFN59b3hwwTqXsZ5",
  "key10": "Q9aBrLVmmzhx4NUfsmxgjDFuhXsYueojZ584bKhfZBbWePkp5JgzefPkJhCfpFWb5zvpD7PHKJxSr5nqVJ8CBx3",
  "key11": "37jFUVTCx9QvEqYzsJiPD86TevJNNntgK83gFw4fHqeTZYBF9ZD9GV1uBGfyCHo6xVcqFDPzzCsZHJFzmx3ckXqh",
  "key12": "2phKRrh1oESJGeGrv6B6PRotb8o4TPHKjMMbs2HhBk2q3xYeuDaJtTNKdBc3FZqxvfNhtdGFZmyEW2vRaoy93xvi",
  "key13": "5ixMLz2yrjhy5y5kZTMYhKAzc9Mawa6JgcCjJGBqR2RUu7ctrUfyZ1QkWGxtWmgWdNviqwRDBuiAdQUXeCQ9EQ7W",
  "key14": "2kyqcdmLz7NvWvezR64K4dgahtGvMKvEwLebyjDgfTPx3Qai4PGk26QxrZYM5bvZhaHWSzdKQsWBQpYHqcNSjvUU",
  "key15": "5g7pMgE6pzSDhFjXQoFycxNmumgcN9BgWkidMXM7FXekTsaV9CbYLBvBSGA4bLyHX3272H2kmVrSqYApiWXSJLBM",
  "key16": "nNEKRdtvqZV8EuE7RkvZHL1rTVM9v1R3Co26j43hEwxbZ96k1WfA6YMhpJti7iHHRWCNkxf8cLmVLYNjhKtdcm1",
  "key17": "4o9K82hL5pSkpZiQejrZQBCuZhGWhKNUc6Zem3gPgLmJmBh4WyNJZrrVarkZJY9YdA2hbUyRALErQT4j8pKbtE7k",
  "key18": "3F2c3rvzGcWU3xUUvL7NLtGpoqTmWCkPGxUMhaaCSCZz5nG9EWFSYWC2V3SJ7VFCMzvk85mv4FxWxR45WfRiMbDL",
  "key19": "2Uu2zUoMiGrxTorxic7q3qJ2z7vramyQEF8sbHmCyHDfWJ7mn7YWpm5brTFRs4HUbM1SYb6unmz9dNEAcy4iNriz",
  "key20": "5LR8auUijvpHW4CrHhZUNDs8Ps2WaM7i84EekhoQYJWoTeDy8nSTfHtm5cnfGY1neCVYJvvyVgJdXauzniUttbsy",
  "key21": "3taH99WybQ49bdPFS4Bpi5Wz6jevX6Lrz7Q2tWjjQHL9XgRNYsXSob2Eun52gzcFCTh789oRK1J7XMridcafVqAb",
  "key22": "3PcXN2rnbEqeNkPRMcoNW1cf6cPAkkjfzvka4pMHHnSFDAwudonMEparPWU4VQfwNBaQmys6K7eE8hKVykTxXRW9",
  "key23": "3vaL3C8SJXhUtaVYFuF8ttt9vr2dE74rWcTQ27ZYoh2yF7R5kYQ5JcSg8iD3Fynqm5dv8aHYN6KEXDu5ngQRWR3p",
  "key24": "4PM7Kt17MYmDNhybFUHrRNk5pzm42oLEzXoBPZnWctuK37BUhawomb9aCUCxgoos4ws6Jbhp6dss1TZTA8d5z4wv",
  "key25": "5YusGAhJyUeBwFdCjhsdap4yuqBk6HuCXTh6N7SN2N6gpxRA5dNbG7vAkncodCMHHpyt8qxiGrJ6FGerm4gjizdj",
  "key26": "5grboZCaiF6ZAYgk29EZPoTBbyLEdHrPGjhUmq2upnNVsgx16GSh5Z9ggBhwM4DfZsAwKGGCGNxjAf3iPbVsy2Ag",
  "key27": "5JdkE15Gr6JKYM798nFEcwvbKgim3EvL9KroGnhRrUvQfmvT2X16cxgMU85DV1BsMyWuKDpwu4TfhniSzzUYXnaq",
  "key28": "276b2ihhdNWmiVrTnjLpXpV3YUgpcWc8uNzTNhV5qHkMs9FXmk27atPAguYQ2H28bZ1YiGyCdCwVQGc67nqJCSGh",
  "key29": "37i12p68cVrEZQktrrMdBrZRGvGYi9RDJE6j9PDu3PmHTX4RjxLQqbi6aJgHh1VuekoCxy4SwK1cfMbJzLjQZ87q",
  "key30": "2orit5iSs77qSEQB6by8VATGkfahHf4Dpg33MXEj4fA9zDPZEbm1RbvaLo5qkfCCQdwsepcMFgErsRgGCPVko87",
  "key31": "gQfFwcKtZ2mKMe4uFPMN8u3jAgkyDSHm3zj7we2mxSvJYQnZ2DCVzU9qDnXHsuTG43Xw7oW6iRzsW2fp1MEucgw",
  "key32": "3ZxBYw8F5i3evCTGbzxCeax8wAQxUJSYsqyPkey5DJQezLwRGd69UWcpHcZ5F4hqnzsdqDwmBPLyhuQtWwwKgG52",
  "key33": "4zopw4ewH49PG1jVcGr3anBPNjCnqCFcmSiDGGHT964sCr43Uw73GSC4DRohtFty6NTitF3PNnRZwFH3bKRVJmCm",
  "key34": "5DsqpV4x4nwvAEK42Yv7rZdbHYH5xysFvEvXBXgQy5uGEEUVTMKwDSgPAcwK14tpFoPYD28Vhw7ZhQg87wYoheyf",
  "key35": "2G6VVjTLqtcjJx4skqPMYVSdtDz1qxbQm627h1qvHCGA7GEVSaj4UPiv3iTX7ApEPhbn76LmyoiHSyPfLpp32ZXV",
  "key36": "3amoJQj8ZAiCvPtS4qk318tpnGZX828cqS2XdYdzQpP5zzaZMmKZ86nmFSkUTcxgbdh8Shgv8sxCkCvPRbQcrBa8",
  "key37": "2TB7BuEJj1wdK9qqSD3zUPJ4VNrWSJxa1Av5XH4btKSz3zMvuRzvtYcxwg6ysMZKL9L2Nkw2zhkJZV9RmAVug9fT",
  "key38": "5R7kxpuz1RexEbbcPKgi9DvWTXNFgUtgk7fPBhSpfXy9XtVTEGuWt5SB3YXGpZPpumQgxAcyZeyuEasf1qXC1yzp",
  "key39": "vkEJZLM5doJ9Fs1Zyo71BzhtQaZ85wNuggPKEzXCetfmV87JQrrm1KmTpvTUZGLYza8KsoJjGfZ6tb9ten15jf6",
  "key40": "2BtE5BBbFfxk8HEAF8u9L9qmvt7UBToYMpCLiSZ6os52V1eroUugCFx9e7LmWno1RxfBjqCdqesf9aGpF4QK6WZu",
  "key41": "2nhDzLaPsGpjuJbPkFbGbnFA98XtSW9fY3R67b2ftzEmq9RsxfJ3DcNEXy3D7AwTs6vwpbJeXyk7pW7suXnMEm1h"
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

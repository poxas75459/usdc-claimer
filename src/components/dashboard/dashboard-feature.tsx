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
    "2sTinxu9N4MVi1E3Z9QG1KJ6r2zi3scLVk62QEYvwuMZAejjtb36z5CkAU8xttmdrwh2pYjwkeVqtDuqNMX5ewjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hg28prX8frpiLDGABAXM8aQJBNTMYmShTbDjM5dVJtyH8Sz53GF8ktN3GrtAi114koghRECgyujcTS4f9DbrBjv",
  "key1": "dGZJvXEvyoB4zGt8xGuWrW7jo2tDgfcksrA5oMqETkiMNiVYzoHqEoNchHWuRAwgeREcEeeUDgkmJRaCYPjxTVv",
  "key2": "3sUdW53Gv7rpmx6EF3JLzTtHBvQPqsUrbgFCXx7vDATxGBZe6PHNDH7fUXcp3UYBegQGyYHNKixLtKzjXdvMBKbM",
  "key3": "3WeeNPqaqqXbAyTFTQScqLsKQ91gZNpDR18KRw8XbXRVYPBx2W9jKzCC4QmRj4RWnDJSbfFxsijNuMdwqGxDayvt",
  "key4": "3r6u71qruUvVooBXPF2ooxBYW79rgD8B64dPzPwKFCiaejCTLnk9fYPTqbqhhpcW7JF4TnKMkuyVG94tpPwAy4yW",
  "key5": "5656CoXY1Z1c89bUnjozuKcmtKJPBprAzEAVbzD8H9Wy1EgzWpAxpBkXWJAZrnoNrnwmjgwVBoGqkHrxPohLx2MX",
  "key6": "Ytx3yGWmvCZ9sbJ5zZj3QxERMn2xzjcFQr8rf4PPBJ44MHFoX7RPesBpBj6r75m4m4DesfU36waaMb6jVduJWWr",
  "key7": "2K4zWp4t6aYd1NmX6KKnztTKMKV624XJRQx4QQ1wg6zBuuvPSySU21Kz5shdVXj4KdydXFUYn1CC5wkt4AnXACWq",
  "key8": "3mauNVudGzjasdwbXCk94mb8C4q5yqXGcPa1mvyV79Dh7YVBSeEX5BYcUiD9sqEpwPFJgvmNVo5JABQvF15vfVpm",
  "key9": "tbSZzveCGebnuEzZtMpJ8uBKe9T7PGQLgdzSuAfuEzyqaDBNfa896mtxEeCRyB2RTp4FzPJStrxwQGRTXvqZYLn",
  "key10": "46sqqgTbD7ehLoBnGZQ5dExbXXi3SJbo8HECupvFtdNo56gi3jx2AT4HpqJwxjdgRBzRkZFcUQKCB2zQAN1Ffd5q",
  "key11": "4vB2kRoobkiCGLgXa6pFrb4AqqTcZL52ddgJpM63CDNJfg5gMUQBqiuyRSNzgmz63yrUeQk7r8497nPvtzVrhN2p",
  "key12": "4ybRtrKhoCDFp6CZT49DgGLvzkgHqasGmqmvRwXRGxEWmhEVusiLVLhh979E2RMeA3BmDFWF3QZzwyPnqrvtv1rn",
  "key13": "2hnAKydn9hKBs4X4yjo1WpAjn52MgwqEjpPvGaXdq7noWFK16ppuFvbBn2HgWUhDcUFwnzeLf2uue61bbov5vE65",
  "key14": "k6j8rg64RoTqhNTnkyNUyNxTqXPLMcFkMpMZxPmUSLizyiMrYWKfzQ9Frq3vMRCpconKU6hmjUhBDZBMRbTuhmm",
  "key15": "4NRvtGeEwcLPFKSNe9SeaFPJ4kH5tJaS7fYQTjiXbTmGLvZCqZQ9EQmFR4jE2kYxCArZDczHe4BGCuP64jiBbNo8",
  "key16": "JRqFkB8VTmpV6tnwtegoiV4kmqDKhecSgEtoKryKMPX631QeHEp1JZRCmwJjntstzMvFTocbFWAVdKNoKxzYv8c",
  "key17": "2GVWSG6PbzXdSJjYN8avxu2Hhp7cv8fcZw7yuZbuDaSCvxmBK8DNmSwsWoNXzB3eSja2eVLfVphVgzRE74v4sMb5",
  "key18": "2CYofBk7quX8htMc2vyMNNXb6Ytjf5GVTY3xHnj4jNyJLCF1K1P2sY9855mBrZ1fZUGsuwjiTZ23DvQrNdJWPJmE",
  "key19": "5nirRcXjuBd6QB7dio43JWprf4xwuL7eff3WzzUjG9sb1KFxhM63EAwUKEEnZ1REZQWQbeGoxW93nae2nTFSL6tt",
  "key20": "372XbrJ3cCRwmuMw4UfLUZ7pRZmcTAvZrzYeJKy2pRfWMJUbjoe8sXM7AbHtEyfCsF9RAUMszM9c6QzHu69KmBH2",
  "key21": "4WLK2UoAGkuFrdk4QQSzA7SD82QXqrExjtaVRm7jmvmKXX7tEubS2LTPbhKq52zqoc4G1yCobQBF74JTuWrZzetU",
  "key22": "4sdNLccu3tTFjwaDzvUS9Vu8HDWuJ7khFweyQYxXgjZESSHQjAXpm6rhKAFzhhkBueLN13ukojABPGHrjz2iSaMm",
  "key23": "43ZjHyWfL7XwUg3z312wNeb5hmE5TihkVERTwb4aw62DUSBDSiuS2pWUnnk98xKukNcUaFjP3CkqDh1KqHjfzZnE",
  "key24": "4PTWSx1fPuPvoYY4WyKqPhT7dA8VrTPJ6bnKGLWDq8Js2RZApdLCDzoZTWnf6TCGvTYKRk5Q7Tdt6behB1iKp2yH",
  "key25": "2JL2RWJnSjEnYDFcuR9EhAS7HqE6dDC9VmPY8CEKk7pWiwBh1ECMENMjqFKGUoRnG6y4W83KBMLywKqM3fYCQmQ",
  "key26": "2fomFVGzwzkBo9rcwRWF9bq99QMkmaexBzVmgxhJ3UEKx144eumqdaHrQyNmtkTDMSQaKnLaHU88Rx56kSQZhwan",
  "key27": "HNurFRtf8NGEiCsX6Ytpz2VpF9uxwnTBy2M6t2QC2DCJLq8uhTYbvoc2SVDt6ooeeEtcpMwdZZn2vKsqUJExPw1",
  "key28": "5BjsYEehJ6oq76qYsiEBuCHW57hvRppUKMDMBKBaipjvqXw7YWt5qbuvzWPkL4fCD7sBHFGgZUpYDdcQSDsrUcFV",
  "key29": "4kccS3hFd7SBNqGQV9rqR3Smy3DgThW8J53XGq178R5j8LVibLrTDenC6YtEdTgGjMdjFUHafF5iM61cDSwog2aG",
  "key30": "4FFFiGbAcQpXov8hbnFittqaje1TTdxM1apjXbHTSnn8neL2qr6hYS7LmjuGh6y2BxebrNdsFsJQgfp8xGSiZMBf",
  "key31": "61r63dX5y6ommRWWdksPQgkTiANFXe76FtZifkpaLHqPKS9hFUHXvg4piDardrSNwLC616bmUzrk1h3pEYNf6FFR",
  "key32": "2QHsqR8WS67GqqyunQMCTj7tccrGRCVuaLTXRMukd9fZ3gnpp1cDGGyf5QtByeQhzL2aH2tkFxf31KFEPFoBRC2",
  "key33": "5njM5CVdvZN7YwATJnRmiQhg2jbJr5USmp4jkPEe5YxCMCpWZK644S57V4T6oo93WHa7ckBZQL7xKnwjHMQdtP2k",
  "key34": "5e3qEM3b7BXJtJjqYbiiuetEHE46toT5ny46xdwFrgj8zBEkhKvq8tS33mmpRPXjvPjwwNVPBGxn2HysM56LUKxu",
  "key35": "2cDnmkRsSGXoqdVabu1nCrzjfjoQELknJ9wz454GbPAxg7b3p5S87X16kqzf3CXr3YbZHJY1ynDMnoYCdRLraZgY",
  "key36": "3YamgfwDLwWF8ntiLCa5NpHFB8WLouk7Cr16c3SSWpKBFs9imBdJ3zPLu1YcsRvGB13smdVLRgzxC2YoiDGzhr68",
  "key37": "3x3Kne9LdcKLXtDifzWCCH9qHwuyPV8vJdA7iaueEiBW2hQNhvpP7vrWAB2gtLubrRjjkDtuPxdqx2hLQDYpDwSL",
  "key38": "5fWMRS3pE6eTrt8jfJvfApcZo17594PAfBMbQmaqZBnkgEhkktAbXrzQyYkP2NCwf7NoJjn3q3adNYhkAwTh1q7D"
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

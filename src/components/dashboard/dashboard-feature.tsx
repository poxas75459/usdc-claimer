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
    "5JPiDjoBwgaAwJ2f23cuXPi1Kzq9tTkH1sQiVUgMSpYAuJEvuSEMX3hu5VD6H1QG5Gt9iYarjbWvLCzM8StPzbz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAwbgbKVa4gKppHPiEthU3zXFNVUdwurQsgeoyxBDQJ7o5hxKw7mjiCDten8Eqz27QW7ZYGZqbWwRkpcK2f4Rid",
  "key1": "4t1C5hVm3i5L7NZGnKZPdztySQZ8cHNyMUiEVzjN1y2Zr4CDDyNu1Nb63RKPLP8evLgSck5TGHirnkFtxrXEeHt3",
  "key2": "4hNbBZ4g4EyViTk3SRSRFdSSbVU3WTQkm3RxScDxQM8tzi6RVx8tjnJRzMFV1kWVRY2yBEL6UEvi4xnRxgnRbSUe",
  "key3": "3SpL3GnrF5nb4FCySzHw3N8zncjZDvGZNrkUQnjDHRLTqrMjAVrwUiXNGyJHEt4Yma7KkTN2G35LDbdBMM7tdjHy",
  "key4": "scLv2smP6gh2rLq1jaqznJgUtzEt32frZvVUD2YF6PkD1ZQJmfwMgvvPCejL63KUKU9gmk1VSqjjq2suEodMptU",
  "key5": "7Z94pzYjFjZNzGUUGMCZZPzPLnQ2fT7WvEpyV1v7Vhzhf9PjKttfRBhFRVjPW5ccBmLLWw2THy2GBKHi5iGvH6K",
  "key6": "2hjJYCJuG3de7Zfu7HJZz2DcDhCLUpXvx4yxaAB3dpNLe7khaMsk2asRbek86NWkZU9vqY2z2sr9rmNobogRdmHG",
  "key7": "4ZGfzBsG6KaiYGdVHgrz3qeFjAGaXvuajeYuRuFMWM1yLXj4KubCueg2dXvYvVs3BoDHRUwysgjJXvLbiwvvVaaf",
  "key8": "65Qs1M1gD1PqX28SV9zLL5NdAEyQTr5PtGqVt9HBZLjzzRFN5cqGfaPaaQDQatjpVZSCTVzW1xRYDsWfjxzDgWrp",
  "key9": "2LLc8ysVDMpkeW6VcZdhRVxgnP4rhKvZDs753PyVDu7A2sGzuVc7wev7mZ7S5juC92NBbL7neSqfCQfvCiVqer9J",
  "key10": "4ZAExE1PdXsBMAzAN3Up3nNULTMgorPXkhsF2QddRjzheds9uoXpC17sGJUrtfewQPgYMs9WE83soENvwJMXJdDW",
  "key11": "5h8GQdNzYD5NKVoPs3uwk9SEprnBpxDqMgANkKCkmiTd5VmQjyeKp3AhxzfBSSw5X9gFiqKtcKSPJL7en8ZdbLLv",
  "key12": "3QFFttP5tuugRVRW7j3S3xSWhQGAnKSFbPiXbwUDUFQ4aZLG4aVw8VrDYmBDp99L5xMdbuVXgSnhtb6zTcWpJ7vj",
  "key13": "63em2iBgF42iFZJAUtoT9SDLfjxHh2b5UdEH3HDivCriazob86RwmcqukRScAAB7xHf5KXAnb4ENujokoQSAmHzM",
  "key14": "66QUW6MpGebqj2WXmFwVxpLhoXbdPhCFUCoed4UHAX3rPy8NjxpSd1b7rGNvgVPifzBG7yGL1xyXoyZn5SAFWpYw",
  "key15": "5rvaYpHVf3r3oywb8YTpMjePAGuNiUfAuYmhnWpMXMCni8xfGdoQAN3hLej71Y11TLQY94KbowKVM4VeVgACQRvd",
  "key16": "2DjzpjLEnTGQ2LpsWoeYzhsTJf4VaD1Youa713RKGgpeXdvuFq1C47Xk8tMgX8MjjEXbRRiCDZQz6rgfAqfRC8B4",
  "key17": "oLrE9X1jwNAZf8FVmSLVVEtHubd7u7efaK26oAYRz7xuNGEAtaJXt8k28kty5x6GmmaXsavPUnSNEso9wLjfnyb",
  "key18": "5nfC6DUYZUW8ZvGiKdTzUEczSXTePqqhQzPBgs429UTsWJgvcSWF6YnhgCT8LWwA1zxiFY8RH8x8E53MUgyUYeFi",
  "key19": "5oV2KYvT4veZkiC4n79gZLrzBWwq3vMfj1kvuiFSVhja2huyDyN6ZyLvNfnYR13MUr9UMK5m6z97ZpCFYQxmkJsy",
  "key20": "2qU8juihqhNUGnoHPjQcZ9MmYcMZKdJgBdtSp5HNN2HhtSH5KnGCJMXF1wdxbqGwFsK4zYDADqv5xi7EJ3H53yBU",
  "key21": "3p69FCD8wYFiq9N1YyyJqMP7wNxHs1aH7ZFRdjSEFY1Cg6ogCDWRp2FXGSPyAt99my21gQdu6boQQx95HqJkAnpx",
  "key22": "5bwMHvHmz4xNTRMDMMcyrmYs4HzKMU6W5S98xpt8UkjPmSh15FCkPbyPDTcGcj6QcZQJju75MNfjaHTB2QnGuahZ",
  "key23": "3qUehKP3tBvAwyVKwVopFgCX8xF3qyY8M8JJneBWvzTVGDKgihfRjCZoveDeaHny4b6Mg1v29GNEwxFCZGgRf1v4",
  "key24": "2sExGt2kMGBHVUWg22TBtL1CqW8TnKDCJNQKAYZTWVnjaPZbkgbJhMs8iPNjAUn8ESyGKzqiifWaXRjyYUN1QZCs",
  "key25": "Q86B2BQHF8VTQNj4J7n3vNC9C6D1iMtprdz9ehvrgbK5ngJHpk5a9bqEBMuRPCQT6eLDK2C3127vgRfV2ZBgn6R",
  "key26": "2gRSUQL922PT3Pzw4psvogPyRUoMs4NcfcK9zPsmHmpDvoGVeT6WfmybtwpefRQjCMoJ5fV5YcykH8WGhbfQHHk7",
  "key27": "3GP8thdTcqvS95YTPiBBSoVBfWWfG2KXzHUkE4sT8jZduzXjwMVV1SbpkeTVyFsoM6XuvZRKYACh5M6pB8d6hpsC",
  "key28": "5ezRMdm148AX9WhQ7jW8TwqPe82jtqW1VFU8v4izefhH7Wyt9wEnj2aozEeJEb7JAUyWMUbGmDSH2jZVe6an1bMn",
  "key29": "3jcVJQ6qnjb9XPxdh36bSHupykZcF6FfQM8D8WYH7k8wRHd4f7zz3MkjTqwqMsWJtnFQkN44xPMbVgL6yubL6MNN",
  "key30": "5eXaHh4YTZH322GkmM6wqaM2qPsXRR4WF8AGVJ8NqfL6CyasRebdHf8KKYtzq3drNFt8tPtqRjjaL2NgBkY3yhUH",
  "key31": "3sDw7FBBVTZR7WX56ZrKxq7oap7sWcBHxju7Ee4g9wWFDPxyhdRExfgjPm3xt2r7jQ1NFxdE39HVdXSEgH76UFVe",
  "key32": "5UpmdeoB1aFQspgDgr3ygNy52bqdh6oCou6XeaDtJmNPn9W4FR84YDYAwS9A3LFUhtxjsRdGY46bAnbwRFdxsK4C",
  "key33": "2SK5ZxD8f5aHoVJKyrAMnLDJ9w27pze4AMiE2rgxFhwjLDBptGM2ZnaCwZsjJSJRErhSMXhrXsJqodVbo7xk79GH",
  "key34": "59QDtm3Kp7jzYvZZK7dRTpEdKYuxE9KEH54PbHYCTp4BRvjx8Uog2kvjMjteXviCALbbnk8V1ozNGdmgivvYqU2m",
  "key35": "2tUvFsjuJPPFtkmvVJEjew1LSjkz2f7Xz6fgdUYaSrHcdxwNeq5ghZjiarDDCEpJ4Kqueirj4ibuZNBomkcbdHEH",
  "key36": "T2nfKkXHxF2hVbcVE6n32kKFhUu1jKipcpdkWMS7Xc8wEG3La1t39KqyJMfQqc4ikBCVkPrGUfWKEaGrEyaz92B",
  "key37": "3fcqw78jTLnfexzP6Q58wydERcV6YpR2V9bDFMZktSA4ZTQV7rJCCyWFy9rsiB2Kza2VGLsoPQ1PYMR8pSVMLEH4",
  "key38": "5GW43ZaizfdropStsYyHmi22nt52Ce3gdCDX4ytvtn1wyVM9hXT8umYV1nvDyt7SATfUUuTrsaJkW8A6Bxy5tw2T",
  "key39": "2DrSirsSYH2nqK97izPR2JmittFcLrTTQHUnYmWP9fR9bRF7igDfBSCMvYJZkf4xfPh8nTzNDVap4Wj3UcJMxzaa",
  "key40": "28cbVJwkUVXKSzNsUaXjnjMcfpUEjBAj8RREvwQsvepuvihDAyNQA37rzniSRRKWWHkEp9U6NQ1LJCjpiqZmSQev",
  "key41": "38bVkSFr5QreAyjoLNsU1VPSHrcJvKei1CKCRDyf9UZ8xtqiJiEZahFVi4vnPdrLo31ifPwCx57dH1uc5iPLYEDL",
  "key42": "3h2b5yZNqyj5HcrwXggocb3TkmpEEPK5Rmx68Hx3N66E54vziH5ohLmtf6mj6gdEqRqsQS2SVkYMamhN9Z16VLWE",
  "key43": "YQrcsZCyjoLYcVJ5z465mpWJtZ8kHc867zyv3mj3hW5HJ3asS2G2YwcNiMVWTsjDaLyJ3GkG7jfNiyKQmc8JC4Z",
  "key44": "qLVBBoPWBXtqFSWFJ4w4KS1VVqfD8fTeqLCgoo9UpY9jManq1UKwwqYC1bDC82V3n6LRMy8JNtFvHAL52i4ytAi"
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

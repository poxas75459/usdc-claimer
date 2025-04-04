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
    "2Y7jkxnmcob7MudjAvAVecMCYoECQg9qXfCFvtCPQfAWG2FvJ4EoQwJoTikafDK7JwLNSocLpredJUg81khxrPHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LoPcS2XQKa16Wby6hfNfqgPjktYDpLRt8G7pRbXuvXVquRAxrBpCvSh9Uw39ZGBZn7XELzKof3jhvYyNsoEFpLC",
  "key1": "3yaiv1Ldy31DtUeBUG1GzmkJXq8iyq7F1QuT38W5LeGbotdrEtaN17EPz8nRWT8H7KDCS1EPYpkqqdDDP77QyB9z",
  "key2": "5jaPfCnpTQdTFvckKhVHzZmn3cVREYRiDGoogdbNKTSh56o3Fmoq1V1MZdJixMbeYjSHH47CKYGyjT2RRX9RduUx",
  "key3": "27PyjD26EuXu7W6FM1acGEuy8CZZL3RJ5hhBRnByJ3RVh4VmyqAv3aPatxpfqa3cJGxx11bDobHpxEeawVCn3daw",
  "key4": "QUCYEivtMVGs1i42cUoWn3htuQ3WP2VVCZBvHfvmivqF5uQX9vB9vUNkea8FJsANVaop4rRmhTsHVLxCpUan42o",
  "key5": "2UKns6Xch5LWoz2QENgNx8GZXoCEVUSDQQ9BefWHBDECddfgbMiomq6bC5ZbnMSKwprZ7rGR9dswVr7PGw5TrAJ8",
  "key6": "3J2MjrizTbymSzn4ManTVDcJdCNxoqFZ3Bwnsmmp8xH3rwDZqoNN3r71qYHi9rSg3PyTv5QnXXF3x8er37cJUfBt",
  "key7": "LGyExxYW2rzBN5WEyjjsqNckfvqmXatArK48jUTvna3c6oh2GJdgF2wN9Df8T7q5vqgPDp7GoJSswQ2CtQELAhp",
  "key8": "2eax4AVHcxeHdPzeaToHMQgxMhDXHDTY7X9FZGUQ7S6siEchMLAivg4hDJfbZLAKRCRyKFMGSTSysfzsyThH4BPU",
  "key9": "3VaPFE7HTs2CaEwJEu27cW1qXCKr2XYuX6uEvTHV2QtwvnvK5u9TpXwnYTwJh69azX6Q6AWtQMo98iPjyKEjZjHR",
  "key10": "4VCd8pYEfeHsVBL7eVc9KWGgk326fWx4Y6KnMZuqs8zSfJfEQWEXAdotnKzdcp6kS4dZpU57JVQoFKSNoBSRELV3",
  "key11": "zNih2CXhUHmar4zs2W9DqtwjTVcmB8pcDgNLMqwDTAwqrmbxnEvRf8AE9EZupsgzNnTGMkhGTibBKNgAMiP5kNg",
  "key12": "3K4tW4tedtSGnPStnqShApjU8GAxVLXSRiFBFGb7LSch5WXRzygo5P2tBsubjTWqS4Ava2mtaMh23E3MRjxHR4ZH",
  "key13": "5L13GhFBDX5ZjZL552aTzDXkDyov2Cvxv18gCCwJXwhQBk4w2j84rHMX9FF8X5cniCZwoucSJMqmAzs8ViqhgDMF",
  "key14": "5kKNNxKxL6gTAzTywvepFYydZmYuqS8swPc81HRT1QhqABzLx9oSW7mMLxswagLUgHsddh6gBokHXhr7jdYkKdKk",
  "key15": "3k1nYEQcgDBsNWbVH1F4LLWCgm9KDgMRVeNgKPcuzrdT63vCzuUQQNeBgQa3fAvVevUYab9AnC4yJGQw1fzStxPM",
  "key16": "29ZCZQKTwPLBVmmgcVXptEXBKgi8CvhjsUNbEXSNuF9nbQFhBkx2N5mVxw2ajc8xtCr9tbb7usidfDsdvrsA5Y8J",
  "key17": "5Sc5nmp3tpveuXr8nPzhpFoVnLr46d2ziNcUy7vT4J1ae5GwAvckEd4bg7Ypmw2tnoov8fRJWT58epgSkbrCwSpk",
  "key18": "4mZEHeRJ1hvUcPVpi2XhXW8Q8UZBrbiC5iT1B6jJteEhQqvHKwx5BtHA6YZdTAfCPEA1rM1TDSKt7bHMubLZfxYd",
  "key19": "2ZMSPeDpbeUvGtuHZPrtDFpGSe1rb8ThyfQBbRxBr3G3HuFC2DaRzn9zxBJVNFNY4McHWZEbzL9vuZjVn556ysNR",
  "key20": "3AStdUyxtYsLuH9PE2sXBws781HpJtihy4gzVSyKGbBbx7Ugyy3nm8yh3SbVoeSeEKgss6RtqPEUyigGhFEKpP7s",
  "key21": "37eqp2WVQdW58zS5xMdFWJBxwbCXoYoV4TwUgo2QydRQ1cmn5HmdVx7pvZ7T5YW6jJW5rU4bybwjjorbLiAEiZNK",
  "key22": "5JgvxQNbvwyv1LdWCKMkbydPBUFTLwKmGeKkjUphVKBjVc7MkfzWDbDuSpZqaARx5uuCdbdvrXthZecnXSVu1ZRg",
  "key23": "3DMme3WpSURbyKW4STBB2whg7SbfoYK79ZaYLgfaeCNi3nUvjRurX6iowq4GKADTKrF5QyhQvMq1mKY1YzvVHs8u",
  "key24": "4Xa2e3Max5Wf5wysHhhY3JMNW77J1pFKPttUW81buFrsyV2UcjfPgLACDVMgD7PARz6S2Sim1gwcPwYCC2jW7E1h",
  "key25": "4MNVpJ4kTwX3eeS6y1YcFjap5286oMGoFPzKdZxhiMkXrUgqHdwUbXrxxvheEmaswrwoKz5PGhPTToCzT5G44kBh",
  "key26": "5Z615GJ9eF7ZREJZFZ6Xdz37ovj4unt2sGJUH6d59aga5egR1nC2LLqRojHPQTTYdVixWUXN8jSH9EBrgkJipKKP",
  "key27": "5JXuuiY2QPRW6ksY1Tq3DKUMnvUUqpvQvRkuVy2wZ79JBXEiGzPxcPbcpvuZm6E9jDJBwTc22ALLzS7xs8PFEY9",
  "key28": "5uT7tTkxP7m7wSgdibBMihAsxAe6f3JzGW5wM1ZeBqjDzAfdeLSFG6ZDyHCaoLPg7SaAGeKbFmBEVow3kLq55Y99",
  "key29": "2xhfiSXC1p6Gcfzhkpd7eYwQHe6hShZp7UyXbQLqrwe4jUw78t8FXyNKAAm9hED3irNbLW6BwsbxCGZxPhYLAH1z",
  "key30": "3hcw6KCkrZLgbnaRfJsmLHmtmQUAuo69WAkfwomahTJABmEXXLGE6VXM3G3ngsUAMTd5yMExwkM3rT4kK6jWeT53",
  "key31": "FkdQHP8H9ccq5KFkeWt1JFAjbXXmPN9AxfSkhH57DLSk9AX1g88z98TNhci7widfYWN69KZvvathZ4d6w4YxCVu",
  "key32": "5ctMnFpXPPdmQmSmLsoDecVrTXpgzVUVaMq1tuSaQprpoad6UPvQRUsgiY96mzJcwX6B3NfwJ4Qafp5QsDipjttD",
  "key33": "xnzsgWu1U3WZffRnUYnYdsQ1Ub5LSQxLRJBSGKeoy5LBoevJv9RLAxXHPVwgLdXSP39NebZwziJ2Xqf1mSVGvnp",
  "key34": "4AfqaGMzCKRSbDrPRtLnvHYKH1bwKkjBPjPG9QcZRY53jX1xDqt1SdioCqPmkVRPDJX2xQ878HXEqcGz32CWBUAw",
  "key35": "Mjsrm1dUTj9NjdCtfpLHdKRqWGS8mSfeVr9VBEa87WTHRq56yyFXu2WPXprSuLSZ9pQfmKWxAHQncKkazbf4WWj",
  "key36": "4hBKmNd1WX56SMt4u2bqyTwz5aBQ8pS5kBRKZbogq7C4YYxRoo3ptJr1nmu8ZQLkHBpUsZHSqgNUn5pgikrH11Hi",
  "key37": "1736NasNFeLPLfddoMG4CZNpx8kfy7TqjCRXc5PaSATMVPENnbqQYEi5UmF3aKiTVMt1NjAWgnDi95zVATvJphE",
  "key38": "5z4E37PhgnGkA3Sw8q6vNLrtjWd3Lcdpvz6siZRApwRHK3874w6v2pTFCg3iWigPw3sD6BZMYtoPqKwDQLaeVX2b",
  "key39": "5CuViWoeKkoBSkK1LMgFiLUkProWYgv5S1yNkEJ25RCZiHxByscQcdvZgG7JzsLbxfbqkMMGSVZRdMGALzqbJMEJ",
  "key40": "2ii5E3GT2DjEaZAuBDt9SzmEL33Y6SiCHVrg4bmojU4fejVnB9GMSQ4nVnw1LNCqo1cqJjgmoJtoEwYQEv9od8ic",
  "key41": "3USVyj8QVcuUqXx3zZSQWauEedSfYuMJqVtaYysYU2FnjJH4Pnzp65u4xZas4xUupVGQ3F259FFGCapgxMjzJsuk",
  "key42": "3zr31MYjCsoCBnUCJqoUGjEgfwEPK93jGFjw57sgQcyLJzBq9ZNA1Fyaaanp8ZauY2HCCMurAmDZmumv6LEK7pLg",
  "key43": "LWA1dsfxCNKeSpp1roEzQRDjviuKMbVYHzcYRbodYabXrYLQiPxosCFcfjV4bhPj7JcexHUn3ev8AqJrnCirDQn",
  "key44": "Kuvt7nF5JtVaLZeC7gXBHYSptyNMRNvDbA7kc4j9jtBVvgZuQz5vgH6CVbP7qMuG6586GyNFANaWaZdZ7Y4DE5q",
  "key45": "5mFFeuVyNrPV2Q3LbjTdgcE6nVxJ9qU9XXfnCbF5oPFaswrYwuLXdQ32DXRup6DJ13mrNvZfbypUxcWvxjLjF3NS",
  "key46": "oHH8vySKbnN9rhFArXfo8wBQ8Tyq2rxcKRygvAefCfxNLbqDYVb7aBGz1a73LeMX1wcUfbSDeA9EXC8oaB6ckAv",
  "key47": "2DEYUAa6m9bNBLTE7jxGebz49WrHANb1dFgNcoEaiGo5xoFgnswFoQqQrxdiAhUEXhxyg66fQGWmfzAgZa9RsS3L",
  "key48": "5ubxVUwqaJ53GfUfdBChfF84fujTLQGzqjQqjQfSbBYJ3JGoafvg3XyDBi85JZNK3w2pLyNtMhm249BhXkBTGWGt"
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

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
    "46egxjVg2WNsLVQ2wPK5GHbgTftM5qVcwJu8x5gkDERc4TpBcAQdfKuBvd1csz5FEfh3L58V49NtuBFt5sYyERra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42JHSfissBiiPSxunnN6ceSdRjua3KSZcaoy288K2JyhUEb3TqKAhjwc4b3E4VzBcvtX6g45Q4zcqyc5dyxVaPW3",
  "key1": "5nvGjcPcob9Mb5DpmNRJjvYXZen1nv4a5DouDtDMzsjR4pRoC49rFnqKLMCzyTRYDBUUtVPtQ2w54Anr3g6XZk5Y",
  "key2": "5CCbX2rq4YWxFPS2RMgCS4RTdqPyZTzeurQVfy4dFT8E3kvsGQrcHwK1zF95FZuPc8PKrU3ejfFC4L8TgwcLfd7q",
  "key3": "3sNfhiMxEjwrLA5PacT8ohZDEWszVpZdksjpqwu2CbM7q2LhGMg3De89q5fRrC6rDFWkm4qxs3HHsKwg5jjzkzwx",
  "key4": "5GaQtcN5gMhmJLZ9g3UzyGcpCohwsMcHDokm7vZhRF2YjGXac6ZDGSkw5pumsExeghgwMc3M61pqxEoRA79bdtLE",
  "key5": "432RWMYr3XLUxBdV5CzHKWW3Aki94QTEwoZkNrBvNR2N2AFkJ6zTtfBr23Qk82JWncdiopMisMs6wDkUsGdXi8Bq",
  "key6": "4ctYg1TnSKqXeHhC9hc5XvsnCbh2QFSNoENRShMF8g6XKkBMpsg32wZhbZ5QyY6eYQhgbNPEDHv3BadFCAToyoMp",
  "key7": "5iY1FvtJmH5nbij2KUW6rc6y5SNT6tz6UbHRkrunNKuX8F3bhRLo9xQQSTwgarn6Rg5JvwAkrwG6v6iMDtM639Jp",
  "key8": "vv8vhrdK54xnTM8P8EyzRrZZNxZbYJKbQXFZGFxYXiS6E2tXdU4htsTvJJm9iFM18tsZuA7tehbDBH9PkewDr7X",
  "key9": "4VcfP8drjYWVLqvvW5FFG22EsXdZZvPnmgccvto9biwnk68jnzg6jYgy43RwBrRHTAayGN3Y9KVLzKttePjXNdXL",
  "key10": "2tgSbCtmw6461Av8Mv5UGEcvp2ueGVjUKKnBHkCSnoBmczsimDa9qYUm5zuqywaBcLbhMLL3dixRBxr1iwaKNtFt",
  "key11": "3NCUgob6PwHa7vS1NDWvnMJDs88GZJKryMj6S1sUWJGLBAV7RYnwa66JyYqutF2xA86Q8CEKdFFDnkCrTSTkjngR",
  "key12": "4B9pYtP7QbrNGxMdfYmSCQUMgJvCbMAAs1L1H8VXuFtcfLMohAJT9Ck2qNWEp8oRk6vagxPmFnetWu7DymiKXuHC",
  "key13": "28fykFffZknEaYSu8VPQRJ4rbujJUeoPZjhJ7cHUXdSxiH8aJn6yypv2KzxyxdxRRoCzJKk7RhBaeGWKWgSVNWHA",
  "key14": "5wHVtUSkbWMfryKrLNwcBqLkdHAr2USJUNoprza1w9R5Pg4ETqXoP9S4qMvGyZivEEy7xT8WtGYhotojD1FWxmMg",
  "key15": "38qQjBtkjigg6rxDiH4jme4pGGmFyjaR7mf3KJdxF8qTTdfuTh1U9HEo6ZhvhYQF72V3ftPBHymEe7GKQqJB7CtG",
  "key16": "3vgbFvZBdqV7SmBN8Y7KXB6n5X7VA3UbQ3MjUv3et3R8as1SzLoha39KcqrDWVR1MZTYPRx3kudmjuWwQwQxuFcr",
  "key17": "4ZQxJyLE8LtiDCxVmacCjvY3gnURqAPgEvwFTFzfrjmttpEQdQ8SnWkBs5Zm4uVvXKHF6RfcpMLsns8eNCnJESVF",
  "key18": "cdrhFLjqMVJY3xHi4kH3pEvyhoftTZmL8Ak1yj6HiNFfbc6ogY1Y5aQ9cToxthXsXLvSf8SSJccgZeiCy5aVQrZ",
  "key19": "2NjJPQ6jotrJzqVAYCX7fn3PTuT1vjWujvs9LUz3j4doSqSGgcawQ5uUKgmjnx56TfF8jLfNcjyEBomcnjGGKxi8",
  "key20": "BZuka8cAT5SjNvyxVRpx1JCiCVmN751brJnRw75RFKEB253ZH6wmk1bdJbEuPBMu9JUWzVYwQwEk3qePwPTc1LF",
  "key21": "j8mMG8UqYt8ymrSHcgRktyMcSbcdwuYfdBLTQveDrMCuBYTST6TMEmSkccrQXbH1C9UhufQyQu9g1u746XUoEgf",
  "key22": "2PRVkjDJSkC2ECFmmn145u3zyL1KwFY1THimxC9tDGXg1qtkBJLwQKf384sAk4iYTyBCLyY5QPtPg8HRAXffde1p",
  "key23": "678sPJTLbUbWDwEMDyiK5qpFvX5ihPkiCDb6hLiYNPLNgkzJeubGSq7qysi1cARQgHmfrqvRvR36CuwksdH9Ajfp",
  "key24": "2TFT1jiQRJ2UBHT8hpKT3qRLJDCJTBzQozPBBdiTKQjWcYu2Ppn2FBzA3h9astK36NcA2jt76zNYXzydhNKq3Y6Z",
  "key25": "3W4KxgJeEZwEoRSwEECM3RAaYA6Ng3A3CfZYqvDKuYNCUK9ihetq44tmPLeRcDyyx5xv5DvPa4qi3R2oeGjusXtb",
  "key26": "2x1n5TjcueZKShnYfJrjDhkGe8gRy8v6TnECRc83WjeJBGebAmpkLyB2djbd24jpk5FWFtkuEM8Y3CBnNxd5rGdj",
  "key27": "4GUYAkehnEBvt7bDEqrDYkYxaWELsHtntH9KuT2tHjXBXJEvfNM9k8F8heQQhKDwmKa7rZEMg6Kwnbg8ZNwN4xXF",
  "key28": "2Ta8QrC5odniRjMzh3HdtUtmsfvLLuA347kUeUhS2KoHr3vvtVH8h1tUbpHxr9E2uTdhCGHBWgZMSGYNov5cZXcb",
  "key29": "5adPho4G33XN18PqayrbtpaynFqo9ctYh7FoNEMptd7ojctkQan7Z3UajTFVR7g4tKk4vBAh6VdSuqR6CVU9rdRF",
  "key30": "feeiKkNvrzpz3Cbzh4uSVfFYPBhQVEvnaZTMMouDWWM2Hn8odgqpYBzVpRvqc7bzVaapzC2wmX3VX2pHGL5FGLT",
  "key31": "4qrA86cGfWMkDdAraendKUuwRwUed66BcJUvQBGHBGnoy1m5ghxqr1eVsimKrKSvt6QSqqUoX1XiiSFDN3ju7ek5",
  "key32": "3NnEDBq83xyr8k3BJgsPtU8REnqGyhTWhgzF4PiqH3bVDQmarmboG8vDfv2X2GJ2F52xPK9B1Esjnen9dPSda2hX",
  "key33": "3hkRP5exzCrX9RRHLvvbsz5XLQ8vPGNc1vJerphdZnv2iCecwGF1t7QK8RYmut9qzfVG6xbFxhocn83wUTYj54vs",
  "key34": "45kFSqieEykD6mTxemivUYoGkCA382tQpvSGWmow9SVCE6S12w9hMj7HUuLBKra6QNBh9N9hRoC9spVoBQ2GbVK",
  "key35": "qvAFAb2QzoKo8RM5s4hL1W75E5BFMgEkvY6myxAqex3sk3Xpx78Nvi2bahppAawa6ebxxFdsGJYWQdo61BbAEPf",
  "key36": "2A8fdUTtwNKhmodsCxEEasxk8FcxUTJW3sjhsfj8viYHK8qLbtLuSCqjd1P6AcC3qCRTxRiFFBa3paVSa227JuQV",
  "key37": "41s9g9GtS3zeHPHNyXd38qwvKbr5BKApnE5DLZp2M2T65iuPHmh5E7kkRgv9BduzcZc8NMs9pPuhRcxSiwHYhQei",
  "key38": "5kqYhv51Cpg8AbMTTEbrmXuKMpXjCvtXFtRgFC4WQtqidW7iehX39yprwhwuviMXSqUyeXNKRyZ2ubK7FZERnBh6",
  "key39": "3BMCM2t3Q7cgwvykWth3EZhwWjXxhV9MrwksehpFVvPVqmMEGx6ZAoGdM6ky2fDvkr484WvW9ivREhutdBbZiqUk",
  "key40": "rFXTRYNzZ56wVENSbERFd2pr6A4yztFm8Uc13UHabnRfqUMPMLStRodCYrDs2t7VEqmDVfTNP3YFWbQM3tDPJQG"
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

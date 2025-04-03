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
    "3pX7h8UDuTRRf8BhJRpr77mah2Diwmpb3928GiQgSFz84G24ZfyeWTjTAbbTKJp4uKPvpCfmRaphfWU7CgZt4kLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkTHpCNbJdcaJU7spLqxojVxb3S4BNdQMMRy45xX8Unx1FUaHRfM5hCNWaBtu4SJ2QUj3RBVey1SmE97sZoAyM7",
  "key1": "4XeScuEPPdLnWrHWpHECsNGKhYnfeuhtj179Zmk5Qo48yZCNvmfDyoQfRz61F1oKjW85YiU166BiMzef5syNf3WV",
  "key2": "4akTNfQyHNEQRXvdZSGxuX8EduUabdTszSWDMsVDYGPj5kRRvrLSbVz94MSYgxDJkKSWz74hfcWBiHzrcK4GycEa",
  "key3": "5Y173CX1MhXxkQCDwDFB354pT7iTY86ES2uQ7SZkKvrB82BFqxDwjCBeWtgALTDTo4XCJpWxUuyXcdRT9sBeoHZW",
  "key4": "25syMUhT9wFQqht44ffnf5SvMWWCT52Tc2aTEYYimuNE5cj4R7ekqi6pbQ7Tj3pMRPthZ9aXSTHjmFWAn7pL4dej",
  "key5": "3gzraqWt3rU9e7ZQ47LRERu66mKcq6CxcNFzdENLurtopWPNjw7QCG8kjah41DmrqJrqBePUfFWahsfRbd6acLyG",
  "key6": "4Wru74BhjmcqgY8aic4tB7Z3GYyvLtZFWbyKCUeGkMZLC6wqEBjQbFUg1ASe1oYwgZAqi6Zcv49R74rEZdk1kSav",
  "key7": "579aCScWpWC744Dg41uwhrNfh3ahPzwgzmdtwuJXjjv6Z5Ng4WYEX753Q3T9T719aB8LwEGb4mVjMEimkJHjgeS2",
  "key8": "mwAfQzCofcSB6YRvSPdJ6m4JYJBVhwUSsebNQeUcMP2QogsmMcrGx1nm4HCRMfc22SDZwNWWdrcMk51Bx7LyQMk",
  "key9": "5UWq4xJu9uUjgb6nCLCwCbbBDrRToX7BD929R7Xg5EMXDwCVQz8rxTvkNWr1NXXzAc7chDjfGWfRjLehkeUEkmD9",
  "key10": "4hiVmnGYYXz5ExE6T4QUrtGb66UJ3GcEP6BnWNm6LhT6JLW9SRL7XWiQ8W3bbfFE9ssEGiZUSeNmVCcvkJiFxgKw",
  "key11": "5udmb2o1fSAcsiQpcTcsfWDypHwNHTbCmnzWRnUJDNMCRkUDaL3dkwuXr4BUEvy7CyJZXVvqPwzcu8A3MosVzp8P",
  "key12": "5o84kDev7R1vujM33sr71Vy77qLwuhttxC8BckZkEf4GB7fmsDyQunLHH7UnqmYZPXtGZeCq1byErLUX16rjnfvB",
  "key13": "5pPGaGDATZGX1ZpAd63jaD199VGqCpxPfmSCKMvTDbUrnEJS8dc3q7sqJjq1hMwwiGg6Uji53JqzoqRxhz8A1xVt",
  "key14": "4oY5iD9WJrkLoTPAGii479iysWwU2wFdeJUnPnJ1fN1MxeMuj2QvJvP7f3XPjcwbr6X6yWsmbFWpzsh6wKsreuEN",
  "key15": "Ls2Ydgm7ouKYkNpWSfyH5pVxynHUXfvvJLzM1qsyMzXnmD7KGdLCH8Nj2zq78z3hbFC6KjVjiGhAJksqiSaZesy",
  "key16": "ofzBRMJBVJAmqaCM25myVoZ9LVfui5htxyY323ycXMrTneb4cf8MT5uwmCUXjJV5dcHiDuTFEhak1TavkXPqZvs",
  "key17": "xZNSDh8K59CYTFA5UZSLyquSsUHo8roC12BdtDwhiMx487C7iM6LFBC1L4W12w3U97QWB1BbC4YKF7snYmMebW8",
  "key18": "2YagwQd9vBaMiFfoTBV6MQCrpNS7x7kysw5kt2xawhqB8AF732xXiEfumZaFSmp6DaHuPu8PZLsNrJRE2kVTBYmW",
  "key19": "3dX269ZzXX8pvn9pdC2vsBVPQLuU118FxdybUMsuLnKQxAJP6nYnVezVceBBWK5gdj8R9Wun2o5oyDztaNsZ6Rpc",
  "key20": "5amMy85GuHrn6eLD5VT1qtSnJMNEVw5vfK26c9ks628cZ6CwXFgurqwwy2yLYCmjBHpYCw7sSNY1zhgdnbbE7qh9",
  "key21": "RZsT3MfqyyTSWBSorikGa4tRKhxpJDux5rvN3Ujvdaw3GMbvRxtnM7NZDXt1z5AXgbJwJLB9n5C5ohAQFjdSeuX",
  "key22": "3YpjRfJyuTiPb1PLSTVWdwCzCEkyY5JKG5VS9SRkqWKyA7NU4onrajUsddo2unbjtNYw8RdmEaZpuMjiUgbqWGgX",
  "key23": "3P32QFTWhi6PLYKEGjrnQ5xmXFAx5G4MRAkCrbBWV6jaNBaNefd7wyjZtrXZEaERnPsxM4eVKp2woD3JTiu2Dxbk",
  "key24": "KhNdsAirqZnVtMmcj8H9fW7ZxyZqtwZfVrhtz2ahJ3rhqMkrDB8VYCXgdACFNFCysg4PqmurtATa1mHSabBgQ6E",
  "key25": "5Wk3NuibmwQJwvPnRPwJpSauAYyPW4sCENVYefQC12kf6oQSQ7FcAJV3MdVqha73v1z3Ta59C7TUwNe9D3n8ZVJw",
  "key26": "28sgowrt3xqio6chzmxKRg1MeSgRepCgGP1eMY9wUGyZCjge2RPo9tacp3uvYskUTevfVPnJduSangSAtjVGEojp",
  "key27": "3T1Zhnan29YdA4Sq898smtDpQgt9NKYCRRjdqnfecoMxzMCPhrcs9Dt9D6QYYcw3tLqHSsxvQ2FjBfuATJBZyGA7",
  "key28": "WsrUxFrZFCFHcSk2nk2M489bcpQZP2gRasFqaccaXoZGbDDDGMLoavhtDgpygeRjKJcnqqeKxD5RWf61Rx4tUgc",
  "key29": "2CFPQTaN6aVnxnNKskrQGwJQ3UAoJoWPqP4WzeuBgSTgShGdDHqGwbkUUVAUAkJ9F1PJKNooQzVKCAMBM3KaGKdq",
  "key30": "559BUxXjSA4xLgDKie3YFp1noNyssrB5AzY4ng5Avdox8oKP3GC5HjwdNM1AKhiTaQCJ8V5JqarZZtSFBKpJuc2Q",
  "key31": "3NJEqv1RGfw958DERE9oQxPeMk2sTmgzr8reP2mVMmry1idG6zVaK1GriQLZPLjmPwazogm7eAZWweHHT6WuEj28",
  "key32": "2qR8VZmuL1C5zM6jivcNPwbPXcKieD9ddV88dacv8APSpbdA97SbvwgSF4BqWjkWBWGcJpWme29G6GM1Hd6mkgu8",
  "key33": "4VBoaRsvzU7hoL2bKa8m6E7CiUVQRiSubd6VPneV9WmWswVZndWUpikJKZUJ2rzj9Rbg2JcEuTS8Teratv37zDsZ",
  "key34": "Y7uUSfak85eoBEERh2bFYiTqjkvVWxopxEj3qq3R1N3NJWegGgZdb9FrdC7vvbs4LjbzDThJgjXkZeFEegSBet6",
  "key35": "43cKmELxhPfk72Koe861jxoChbgAtnzn5X4wVSqM6QgG1z16TEgEqwXBWaBu6fjWhg1BjWgNaXw9qeiciCYLxgtx",
  "key36": "WLTDJHQbbgpx89N8LT2qekDd9eVuugqHBJ4nDjDyxJDMT4pMDWzTqQ85dLWX7fbGCh6pbAmDue5FDg4ZqMLToJv",
  "key37": "4QedfbGS7gmRvBXSTNS9o1jKZveCr3dBciQPiDp3LxQFoutMR3Pd7pqxQWU7qHvvzi3wGFJKwGpak3g9bGkX3xw2",
  "key38": "5wxj5AWsgtswxx6TgXC3pfkS6Sd4B5eMVtRJbGJAda8cuFdnGx7We5D6yrPryrVuQg7F7yUjN8L9dp4tzoo2R26t",
  "key39": "tR6UWvGczwibyZJQCyNFMext9n1mM1R3AutkT66Yf3xYnTkpZWcfYBJhMRbAnAkotUUorspbrrM13ubRj3zp7DZ",
  "key40": "4ptCTgcMCa4cHKQ9jgRuE2oooA6W9eyUZpCY7KCQFtXTWYJdWtGpdBtXGc6FFAdptQxAaPFASjB3D5RGkwzqEA9n",
  "key41": "2WCiAzgT85zo9Af2eoXkmymfZ5z1Am1aS7feLaJjE8xUW3HEwE4w8gmUAmT5dTL5mfmDiW5Dym7UkbbnGiFpMyEY"
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

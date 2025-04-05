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
    "3uKSSUhGLRmsBTsmo3651NkiF5UuAzMvDQQQ89Z49eSq4xBKaSUuPGh4upDEQsNaYzJKdTMFvdzGfUSnJRTTTaKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KyyjPuYJdxu1NcEr7owKPJaFbEpB6ae4jU9xq3FbDMsPbaoL7wfMZb13HD4BX8Phbkee9SzaF7sCFveRkECdAj1",
  "key1": "5tq444nz6eczJDpSCHCXBerHeKu72pTfptSQRBXofTUtB9wd2o4qiuYLyFc9XnhEeGXHXmuzryCQRc4hCwt3BsRF",
  "key2": "4JswCkJFbqiHC6QNWSnVnHUDheMuh5MxHeXx2QW4F5eML1w5wW7JitpsNHJmojbYH4bXEd7vWSQLmZ73Wcr1wwez",
  "key3": "t6YD4ohXH4hSjsoXXZzJ1Dw5N6WtaMj4m6Rsz6gaWkNdw7tzi9Gex4peNaJ3Fbw36k99zXU8fGrzcH4ABGG5cAf",
  "key4": "3Y7TaSkf1t6sfqhieYVLrRnd3Q26oTFfSSJhLpmmWMnjHCbFutFnvBBiPcGeQe6wzJurkQduN3qbiD5eg7h96US",
  "key5": "2LnDNyP75BLcH2dPdseL3uTVV46yWthLUobpMz9KAygDNED5ykgWg8ZKbWpCgDM9m1Yc3T3Apdv9ZadbcrKHXc5v",
  "key6": "5afGmrUVrW3TtPyuvEPAXrxU45dFia6RD97cthVuCgsAMYvJ7ytZa9i5WxFsdjYzU8EQh9njsFT6ts8njxitCQ6h",
  "key7": "62bFkXp1EyCkn7yETwRkr8GKifiBzNVbuS8DGqQQkSWtqbxhmXAAxBvU7pi6QcYBcp5VrVjrbKCuvL9XQzBca7We",
  "key8": "VzKmUywqimv5565d7GHNSGAR8ErhP2dbaDD9XPqnrRNv4hGL35i5MEpMtcmrG4rhj8CMN2wBfV6WLBh9ST8mhHP",
  "key9": "RP9zWVU2qe5MaMVcZPXp58VJMgGqiESCwMf7PMLKamXMgwUZBK3CuH8HXLLge58c98dyM8qRifwbvU97TuBZ2NX",
  "key10": "2yu7zWLN54iVTEdNe3x5i6rLgjkU6cC5tJY2VzuQ4SMnRLUVD9fPye2oRhFh6KBFMjt7grmVKangzA9R6Dy6GVtj",
  "key11": "52JWMrzxpZnYqMtuhVD1TUjczJjVVHCxLmLgDYsAA8SJwxsmbQjdoZjbg1SGMzgy82pdVzR1rKrCJo8Z9fPop2j7",
  "key12": "4cFcZMaHYjd8vwzTV36vsZFW8fnCPyN48WqNURw3xNcDosxMgZT9fk9xQaTnNAYSfGRADtUyHRnfEy5Kt795DmZ8",
  "key13": "5asTpT4SQ99EvQovxEfpJLKKxRjyKb3vP6vizDDY2Szu6o6a8JdXzQ9q2wRjf2opq4hcJr9WNHo9CX5mzAkYSmJA",
  "key14": "3KhQiCmjWKQcVYVWJvP2AypyHEYe3xQ3qq4EV6g8NV7FQoCupjkAa1mtRJZhDyuWLB4m4yBTEMz92AYimZEeAvYw",
  "key15": "3unjJg3KUQM7Pkq4R1AjAGNHy8KBgzBkrE96rmNeRLVgBgXnf9Z8LesW8q17Zt3mio6VJQtbnYW3EFkpVP4Lqt9N",
  "key16": "5yiiW8QXEFxrfyNf2j9d3W7fzPzRtTrCnDN1vQjUkDuxXfWwjy6vobZiHr6ZFDSWeBVRx6iCmbZwMNxGPRjViKAu",
  "key17": "4iqmAtdqWrEeGsJwSi46EigsZ4BhnFBJ5aEyd1afPD2X8M91joZp11NQoG1zdXkDBN6gKQ2gRUcT59BSh5qhmdDD",
  "key18": "5QmqzqZ5HKDBqf5Ets4ZLrbKdLX6M17zqhuv9W7TPvLkoa2RRZm2JYLyY6pBsX27gnFuvqVdEvEfN79b4KKEnqC9",
  "key19": "4B2tRHcJWUbzoN1QKPB24pWYLUTZz24qHYg4neEGHqyrWsBhp5q3tzoFBv47yXY69RViBAf4p2TNQHFyTBV2YMq1",
  "key20": "5hLVpXD5tRpwnWzLvRBqvx5ToNnRxbLJx7G8DPNj3VTEYQmgsEjDL4ihXRfQj3ug8Fom9ZCYvSqkvzaM19yzSt7Q",
  "key21": "2u5e7Sz2ecvMaieMgxWKvoAPLsD7Tf4wtHrjAUtLmQ44Q5xmccP7LWo6q6qszJLtUWqtKhW34fVZnMACACnaX6S",
  "key22": "5hNdDt6omZ2D43oAcnb1rPU8cHKce8a3gyRRJQiSocDkdbc9jnvAAifn2Vt8caG9sTqjNUEHQtjDnAmQiFWDpaUM",
  "key23": "5Xttc5YPj2LP7LfEntaXkGvRYfgQRtQrXAM5uiVRbBW5YnhJCDLE3tJK1Xh2hFYkTddc3d6BcdgTpDTJk7nq2zoC",
  "key24": "1xYMAqxrmte4d5uh43RKP93cQW24VQt9gNRuXHvgsLzqEW21iiZXdD2u447SB4WuRQ4gqPVaTroXqhkjUEm1PnD",
  "key25": "54JttihLqbZ5BXozraCgJrv3LGLdxcooob9AWgvWDQa9SAom3QpuUi1uaFQcTrUhycKpo3zc266oMpB6CA3F28ek",
  "key26": "5bvWqhx9BkcVak9gFwxcF6VJem8dumxJUptyZfPwvr7rBTHPYFWcsd4yJvT6cpTUzKv6sbpJUpZpbneZHZ6Y9acX",
  "key27": "aFL9Q9M1Xu4opwuVRKcNwGJhZxZh5rkTZLxovT3pGCrLNFCx9DnSTmXdsZqaEvAKXs8x5gsB2ipSKMgXW1PbuJE",
  "key28": "4TPuXaNgtRZWrNx7nRWtkZUBZMgkPAQm81M1R2jn7WotbaF13pzJoLsyGLEaVmUzHgHvKiUuK74wJNVffpTeCzQ7",
  "key29": "T5dA9juVNAKCdjdjFit3RnUGXWBFFVCMpyU6B4VLRSUadKa6uK8gu55hjSVqLCDm6rJseSoEWWZA2xhfEyLgpD2",
  "key30": "29w6PPmPq1vm5tgd1EqeYBfkwpfMHr3bp11Lis9XPJAeLoVmGAvXbKrJQCHTvSVy29f7UKzkp7mwoxsFj1jgmiNk",
  "key31": "4eNQF6YnbAJZhW5J2ZBkGxq3oKYysvKbUJxtzCoD76kADdeZU3SabcT83YLdNznFKPG4kCGS1KF4bx9yqKwT4X4m",
  "key32": "3PpoCoAg7XjKuupy8vUrzgQkAhzTgY4ocJCZcGuPyf1Tjf315QRdbteW1iTpCSNmEMWWn2VB1RNdjVdXikAJyEjh",
  "key33": "2LEV1FASrVSZuBAup81ph5ZjBKihCn9cL7aVh2qkXSzyHGk2SzQ6T4ZWKBPGoskYymprQxwNqMGFwRJmC2VCkWng",
  "key34": "2uJRS6q9QtPzPpfK4uz8htNLGnpiJogUH4MXMhCz3NTr6NyiBAPeyonTCdk84ENNVffnKsy6xe1reTD5aRbHKNaK",
  "key35": "63P7Yy1vZVaeFMmJ3VW64XwnKQj2TkBYMrPnojDX8Aj7zoUxsATPVDxqWtoy7LCbzpXeowiwvTcQX52ZG5s9bKj",
  "key36": "4TXqvX46G8AEwwbhyjnwSua8w2j2icjqv8UtfAvUshtddoai3QJkgXy36YyhMhN6kpkkmEKAjtpSvtYs22Hwt9S7",
  "key37": "MzyycQq3W42qYZfZZUsHb91roBChMQ2ZoysVzDoMUfhH9FhJpkQUSBtHe2CmWjBidAwLWXXJDyCYXumzFFfTH39",
  "key38": "3KQv4T3JVJ6KtXW92CTjZs5iE7uBLHMYejk6jeEatDZqTCoDTyiYBYENB6JgTuyPacgwKrveiQiSPCKGfvQkpXZb",
  "key39": "pBD8oUexebeYRcSdbiVdZtmpTUXg4dU1riqEUh7fRECymRs9dLNFewDxzbSga1W5YQXk55dPDNQu4SgPJfnpmDp",
  "key40": "KU1pjVzCweRmhwAFRsFerPPNDgujhiDCF5GEMQ4oSynqJPteSzYeJWLma52JJQQf26dMaUEoedFJvtiqBR1ai6M",
  "key41": "35n4vWthP2PQTsGkrHjVPpPjGLdx7qt6AXzVCMHCTYJcgj9QxiZgcyBhkaeSjCMeNDGWLcoTvao37heMw48EAkCf",
  "key42": "ku4xVenriVND91RyxWghx3fFzYE7Xk5WWp1chA9AyuWDjrvy2WC63WLzLNWk2BPrrCqXQwMUGC6Dp9RXCAJq1aM",
  "key43": "5AhjmRP5JTjktp6vYuWCHGf3hT2eHfVoohCqyKP97paiamrEAPhn5HodyYkniyT8soch1zsHpjG4mkkZz9uuLrDY",
  "key44": "fFkeKrHBGX7HnEJFmwWoS3W593HZPF34djFnp9V9FGCQdx6xk9vBGguStMT4zihg4dXFF1D2BWR1jDPXCAm2p7W",
  "key45": "vPvya2rmJBaCmiB8Pcd5S3vJHSEU7Q5UCC1gCBpukddZTc3K7fs59udLjW1mYxTMCsiLUzc1hJGCiGqxiD94nZw",
  "key46": "3nef6gKMdTQMTZuxYhrZH3eHGNjvzxHgtr97nLdYoWK8fZjJ9xoywXZtNtj91k1vHaw6Ze1Z4swyqcw3zboJg3VV",
  "key47": "2PYFA1yeNtJ9GehKNxTmds69uuZ5EB5wRUUdgDt3p9v4KP9XNhFbh7nh563KctpTiuWBLF36crWVegHLX71F7f3o",
  "key48": "4QvCp3Ps57Rc6WPDWA5qB2j6dTD6kCzxdCc1TEVAbEzUMwgtacQ9DAhuBtKM82wBKeVU45fnD7nNXyCWLgT4m9Pu"
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

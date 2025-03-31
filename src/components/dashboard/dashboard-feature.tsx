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
    "61TXmPETLQrFEscqvgG6n5J9UJdZJzLpaxu1XpV9pxmRoCUXNvSQSZbz55CJmgirYCJS87s1WsNKAhPXuPdBFqZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42dJBeukine71vunLybBGj1UFzpgUhGW9X9XrkTiRo99pMrhmsLTh3U9sMjPLjqfvMumJECGv6XYH2eCTQxs7vb1",
  "key1": "2AExXmdKAyaMZzpJdKPLncS21hGZ2CJt9Wn1wYyrdGMK8KoXxJFXQxJiQNm86ac6gPMNigjgpGEUEhUjhQLRCoAM",
  "key2": "2ioZb2rdcrEzPsNccCbudgAEBV1WMgnXMZgRwTLjWNyeb6iuaeuVA4Zs7Pe8PpwuvHuyZsAL3GWAMxLi6n7ywXUA",
  "key3": "4285NtBzoGiZTbbHaRznRVsmHxVboR338KHg9xrbZdMA3ycjH67mGi5Zs3pXGzh4YCvxUVgTEbNeFXyMbxiEpGY1",
  "key4": "548Dogg96Ph1bGr2LiYuw6ZZRURTihzcVcpZNpZwyk4gjnsKtqUT1Y3M33bugLp8ShsRMu54hs12sKCpPW7Y7guS",
  "key5": "CUDCmwZT1X7i1XEBYjDUJFoGTR24RvceXSikztHZ5tcbdBx9vTR5ituspXPE3PTkhk5vWFkbQcEfTM8jxJbZHKY",
  "key6": "EAbcqmpPfvRuY12z8NRQSLtZdhQvWrxT9DF8vv5pPKNm9j1D18u4ZVrFf4B6twA1u5Bj7o6SUs8RkrvCS22BzYz",
  "key7": "4wSa1k6H7gfHbafbDc715TQ74MothrWrx97KQVpKMxkfUWVQ1Lwh45FeEYJsGbNQUx3MfV8e6bB9wNtAn8qDxtLy",
  "key8": "2RQLHiV1uufC8k6fEkU9w9tnrU5drhP5B9kNyw5rTtXj2dRzQiPsrGpJHVfgf6RrqHz7fCYVXwMPSjKdmUNnp2Jj",
  "key9": "4nysM4J2wyBA1tU9Yud69obAaPUWyoVDFnQazxHpp14BG9yKkLrV78w8GKSKpjsKhpVDG41bT7GmKDjdrxKsy2z2",
  "key10": "2ruhHdWHFPwsQ3YmaUgge9YJE8mVsLy6Eg8Q5q67Myos5zTn2DfCkM7qqPhYZxUPpMCN8yDU7MqgmnNHJwcQXqP",
  "key11": "2hNfynhri1HfpZGY2DGAVah7nSD9ERfLBdrBfmEnzFCnj25hNV9SznNQSEYBeQi3FUAcPER6f5DeByWzkhxbHFmP",
  "key12": "59UhD8nnTodznx4FcrKDoyBhvenTPcco1V8AMBsHV8iEg2AytqSWnvNoenzFVxaT9PPXmWKB4AYdM7JTsJkvjQJw",
  "key13": "2Qz1Vs2eCUUbkaT5G9QTjaewBC1wjWdg1H8DLMymrxEbG6xYmJAAqefeZmmNYFV22ctx5kfPSDTcNoRXKWzLVD3K",
  "key14": "3YNSsuARSg4Q87Yz9TKFgx57AqjuW45HNpgBE4n3CJR8yRVpg4KGQ42vLNQDBzdF5Pz1KcRth8FUQ7XgD9CSUxvd",
  "key15": "4swB6xAtabKXz23i64vQpkXnp1NvBJFLmrC2BjiPApFWErwar8C7Utk8bH9mJfWquh111HUD8JJV3DSMhZ1Tw8w8",
  "key16": "4yxxLaFfN76X1ZJBaw7HQN8Cr4R3BGfkHv9ua7zqtDMQG56QAk2SCaGxJezYQ37cjuCB6XpqgxbBfDo4MUka7178",
  "key17": "43KDBQX12Aw6aSz3DAX8KnZjUcebGjRepvFeMHth3NPs1vDAABqxt6J9FYxtUHJSYWC5qgFpMAHb72rm8EwMJXvR",
  "key18": "3WhWEfYX2wVNXjCoNxt4G2YmBnwTi9Xzk5sgd3fKhP7mdRU8KzNaJxSrrR664z2jGKY4NAdZZCf4FdebLXTdH6C7",
  "key19": "5cA7kGA3RyAMfRQ1tZZCwm1ozHnogAokz9V6a4bZ14gVxn6yGWdef3NiWCwodC4Kk7QUNywxUCymQnsFK7ZCcTVY",
  "key20": "2GC7CqWS4UKUYq1JG9TSHUqYaYXcvKZ2NVAeK3MKyVGPVkMno8RdjW9Gef5mf8UvgvZDMPDyTgd9QUYBLzpi2gFu",
  "key21": "3vCZ2f4aoMr3RWS1jKie2RkXhjcFWcZvm8wowFFqHPXDuGLqaEePGoSZGVPvuF38JWUMksQiESQwWcrbd7bfdWah",
  "key22": "48FM1LCViYtqzSK62ZVqAnE4Fs32zahdgch8yMkiuwmaMY2RGHN7E97fwaZaXbCR8Dirhm7CCWh55GuM1dDvEmfF",
  "key23": "MMW4c3dGYMgqLetD2kD8JXfTW39ipNyjyw7P1iU8mJFKGbqTte6SJqnXEdF51d5LVs9ecqMVEND8pBvc8h4Q4dD",
  "key24": "JpmkHjnCNHaG3aELZuHPU7G6y36E1ZTCv6piERm951F2ymPqhC84NCJ7rtcbicVjGt3wFHoHPKWCRYijXQ3gEF3",
  "key25": "ZZpty6EULyiesPxhrqp2CVagxSWjL39NZvHQBYfKQKeFZjnGH9ducgZDdxiHfALjAjxrzaW3a8Nnma7zpRsPSBF",
  "key26": "419ZfpNa3h3FeVj146ecoopo5mUq8S43YZoRYJFwumnWyBbPfkqYUDDyKUNeW8ts94WAvjsLWn8Zv52woU9sqg6V",
  "key27": "2Rf3oM2eW81rH5UBDyYqxQMRwgt5kJAoYarq7Zkg1yzhMgCzwBoryifLdyoD56BD8Z7WbeWS5NZGuYNTuG2B6ede",
  "key28": "4x1pSXMTkeh6KZqWdf1r3sKQaDSnSq38nvWVxsmSZwaeBUimAwhgKyP8Z7oEoQ6RQG643L7QnTM8sKEPYNr8qLWx",
  "key29": "2rWeHryXdJzyuosbb8Vxvrzyj6B2rPu58RC9XHyNtVAJ45gWG6tZBPHei2Vn63uknFR9U87Ub4xSUfKFvpCV1Seh",
  "key30": "5cWDafqevDs3mSG4DK4pRWrG4BiUwu53gRLBz4HsBXFe4Jgn3RcNALBh62vXv7dCQcr6xVkK9BrE3SbfHgXZf3Yr",
  "key31": "GMvjkGYPcPA2rssBXMUi1qAjJNTt77yWWba1gdKvXVzYg4eFEf4m1aHjLpe8XsMHJ8tQuivrZqGE8x2UY5jx8kW",
  "key32": "tUHADpgSXvtknfPKGq2QpMugy1eA4mSzUVYB2wuMw7CVGVAhzSMQHVihUXJ7ACeXMkWWqbP9gkNeLwbT5Fp7pwr",
  "key33": "3J1ZSA6S8JhpbCkZPeMe3JZo71nEQzXNf4NYaRSttoVRpfgxP5YsJ9KpTGzkE435d8Jjx1XH5tdY6qEvn9BbB73E",
  "key34": "3zBrkueg6TovtiBjXL1YCkfaUbC2HhwGro69kuQTsAehuyhpuzKRcFfr8cdJjtGgV7D4m1ZyCoTquRS7hHyjstKJ",
  "key35": "3Ldjix5UZVg8cVZrKtQCgdpdHwsda9fhWmy7Scjnr5XGVF3T62hsfS2EkKYJhQjGuCV8FdeSBLR1tqe8Qx3LBRgc",
  "key36": "22kkGwP4JvhQbhaq3VAwu4fTXmjwhgZvWT4VwDbhej27gD15E9oMhbfS2L9fTHThUKY9V57mp24f8PBwdueVhXdy"
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

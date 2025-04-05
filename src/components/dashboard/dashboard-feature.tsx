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
    "2o1WAnfsHRyZPjzdjRs7H4o7a6SvFY3tRVjsKzqLjx6hJPMpi2G8GkdAFeFuP4eKbyC51vcVC23bbTjpGzYSvhGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPcK34pxwYb4mFbpqojLkaWQmtxNHNSrZwNdFg24xCAxrVvmt9x2PRqnY9oDsofsQV7WXhFARDMis5tZS7RZgPM",
  "key1": "8Nz9uB4XT2yhJzWvUkozu73gVYhayxjrCRkpHMCUBPtCumQPAeTcEhDucFSFCqXMWhZk8Qs7yfDWDdJJzXR46or",
  "key2": "2EKEY8jCTwFbU6zoV8r3K9oGeX66eVyxYca6wR21qb9ANVNqEz4VtQu7Jw5og26gUDi9y6V5CC8HeVT1AkphiPp7",
  "key3": "5JCwQ8hKHdjhZJxnBPEdmZLGCFkZBc2ywdSGfbkXDt28fbwg7U3GqyGownVebf8KLpw5fyakLaWri1pWuZcyTc55",
  "key4": "5ArLJS434Dg5JwUM82ev8DtYkWodgFjyQ28gy1QDXq5Q3Wa9DVKTq5TgHTWek3DibhHiy7tXAe6jznyg1kujs4ct",
  "key5": "5RjRSSrM2fq2r9oX35uizB8MbgYGiewag7w1Z6Cfx9kLmMad7LVbA88fNGQZ6ivi6QfrQnPm4YnGEejmtSLPwkSr",
  "key6": "4bKPk8UhbwxsNp3jJfTtviftVANnFDVLYV6DxCG5a3gL4qGXkAkkGdR9iesQ9qGQ6MAFSaWx6vaybqBZSaTHJ6p5",
  "key7": "2KJJubeUPttvHhN95GWdY1i2yj4w4h4zg5K9JBjgWxmRk5AHQCmJhtj4uvtDy9X7wq58tsxYJBxMbjdvhhoJsEyK",
  "key8": "5TbfFdqbKNM6EPFp7MJqT67PDwjQjncjLTwVGdKGKewqoKtnQ1y83pMRjWZVP6iNjjY92vGMQeRm8hStLqGUf8TQ",
  "key9": "3d9iVtUy5p5gczR2F4pvrpN54iNvrZZuW51WwGcdLtNAiMDQJgQu2Z5pZywNZymnsBPLKhgxCkeRbLfUdgQF4Eei",
  "key10": "5bViTxp9erbjUSB2cDeeZzmSwYMdjBXuHhk4ab3kTH44EfDbsPCVf14PrHz8FkxSK8VreUHYYqWrvyrohnVqYC3Z",
  "key11": "p2WYUZr3TtaW6Jyrt492gsdDqNXpfvWB3ZHKft3sKEHmeXiXr5rqPVkpTCCjMAmLJjtGkDLFkWWC4n1PR8qkZfL",
  "key12": "5SZifbg8N45thEuX7Fb6HeUZNMm2oYEWBBnJrT3P1Y5inaZfdzt9TiMiABe9ruQz1262UMSrT2D6V1d5Fs7CWigM",
  "key13": "5UXEPv2q5X2KdeE8vho1kMgdAcGarBXxNKBMXZ5w9fYdE34FiZjz437fg36Zecvd3YM8w68vdCjoiQbYLLyhJLGi",
  "key14": "4m76w81aLLfUpevGMS5jSabxu8ofUdUCbKtMKYXQagBP9u4kGmW4uWbrcD1aSahFd9Eesvcu53yDhfxiSWgUqe4g",
  "key15": "4zTcjG2NUYdDy5ARu3cma9v9dxMb6RiosauLb2CAo62L3CVx6einyMRSkKThiBCYxrQmPnjGGvxVpKBrrSQ2Vhfz",
  "key16": "gFGoxBmUmknKHhu9yM5gwGxCGtgb9cL6um5Fc54Eu2d22pQKBH5ytryaGWuC8eGwyhAZn7TFAPkReBBmrZsz4xe",
  "key17": "8qYEtvuatrX8GWBfmFAtq6fjNsRDJfEKuVfXwzyWt8fig5bgED3YpWkyZu4BGaZX5tbc1j46E8nBGHL9kxLDMmE",
  "key18": "4fBrsYGuqFuiaEV7CWYk2NmeKoiGQjKjRtDbn3GNQEGhJXRYiu6NKjbweNhtr43vQV78jpfJTZhr69VvGYTx8NGt",
  "key19": "3EbjCwQTLMvcVgiL3qeNcgyKdfqVfMk2jNMvFGgQeFYsp6Mk6nTWMnaJV9V9vfpHdoxnLDP5WM68rLeH5UhRKMu7",
  "key20": "4zvKWn9ZTGZDDCVqfBbU4r3rbD73epzseHmXivGeKxByRMtiRtyJQjXX9YpXamyw62zJTwGGZBAutNyWwXQVLnHo",
  "key21": "5qLnhMGDGDYhG3nUX3ZcpCmDkKChRW8FD5bATcPMGtR2kCTynBbiDRtBmeTAvBA3mcAAQh4DR3WbxGde1u8ERKrV",
  "key22": "3dm2o2XVRGMTimozFujuzNgNFiBDZs5GYKLotbp6tXRVvVxfBTK7t7qu743U9dKvjfxc3VLn6Dbaqb9df2cG4RNF",
  "key23": "2rfZpAu8Rh6euKupNDay42C7Wns7rzMTmkda3Yoq6GSPbh9hYeujUz3CHrLyM7rWNn4FzTF9L47AWmGJexqu6d7k",
  "key24": "KYGzG8jJtjezAedG3h6C153BBANDqLeXWLoXZeJTmTZeivQPRnFsy1134rjQSY1WUWCSZY92BncA9GrTNXrYVKk",
  "key25": "5TuHhgZ8R23LWpj9YRgRjqut3QJ767pQ13hjryZDgbviqqaCipf6eEYF24anxgWcw6WN6iMARP6J2cuDcokMeeWm",
  "key26": "h2tKCH6XqSpRaYpzSXLDAfPsZ3k5ZtRTwUrnKqH6Rt76VdBrJNG29TW2LzDK3KvzQDdDQ1FeVzxFcstBrt2Sa2J",
  "key27": "pyFwLLjtyo6n7CKh47xrGvYCxQpC3egRUGrYxNhR61ouMBHD7Ep6Tbi8ceq1xqHXtv8bik1BVkC6zf9SXoR2mCA",
  "key28": "5XFNX65AEvHVPR5PbrXjc3H2jrDLPiDwDYsNUzbdMZEjgQSzD2vBCMLmjm3h7qW9zui2Yhu4jT5WYxkqzcLmwcth",
  "key29": "2K5fYpnoruHqLtpe5boFbRd84ouU8wu8efhD1x6tgB4nYctbEngWrmGVSnLdCLeERXR6zuqjhwRSFPuD68Zggzit",
  "key30": "54LpY1cnaefZkiUhabqkAuyrkPK7XBoK18UspJ4HSnLUF3wmyt7JoGRX62EdcmooZu2HFzg3fd9nPkVPmgkvdFph",
  "key31": "3twvS51DSXp1yYgaz7j6Y8aD2eA2h4CpSaDCGN5RELj73Q8T6uhY1a314qwySqBcYm5zjRTaRapERgbQcyVNEcie",
  "key32": "d4dkpq4UnkMS2LFykZFGGDc2u97ewP3UYAEz8REyz9RDaRTaMzNJ6rfhHd8oEUiHzCmGEcSEL7nJbkxUSFsDUxF",
  "key33": "2a2zxkgFKQPfvZv8DggNWMyVuUu3oF8zf35UMvh1odh2Uqy5aDxBgwLmz6wpoP4vzqZoWJcqMXCSnbPSEipUtPC8",
  "key34": "3jZRwvm9eKQeV5NLM1J5jrBXYJefCfPbAZ4JDgMkTGuitkMVdHibdEpG5Unnz6p3qU6Zh53yYAmsGkc2zbemFfY8",
  "key35": "3XfFdRHZ5J17EPxWR2TPzGbDerrYZJXJFLp7oRTNkAcxUXDaLF7dyqZiFmjY8igp7EjAE7CiUG6329xdu2q8rY7i",
  "key36": "5Ara7F86SGjywbDQvrtca5opp9yzvyH844Js88dX6yWX7FdMYD2hgU6SxcKXS3jAc58n2n94JXtWrqzqYGCVniWD",
  "key37": "2EQjJjqZmnoeft6EQoqgCDYuxsEvswrqZKT3XG3fpzkG4steVTKyFXBMNCNJQPSgqesoQHSKaza1LjTyzJsfgrNi",
  "key38": "47jaF5LZuXhkirCNR8RYvNVtibsc3rV2qbKdE6hnqiXyK5gXxPbnYDQ9SFqAM5NTvwgaWusguCYYdxcobkFXpKj9",
  "key39": "2LvsNs4KKoFhzv7KGGk8dRxN7PBGontqiMfQx8nogSK4NSUpLxczu9Xv9PeSwq8VXhP93eWikoQFXG2bbifrWViK",
  "key40": "2k9Pk1ag5iWMdEjvQbxifp5oGXamRXN73sgmvk21HpVik3J4ewCeCN9xA6PVsZif8MidRYzU2BWEXpfvwCN8dYfG",
  "key41": "CdLAdDCSebVDKLgPRdPx8bMXHow7ZgB5dEmVWv8d13pAnbuTBRsp3bL2dnLqxQYW4WueMoKbiBfLLKeFR6zBd3c",
  "key42": "2axfAMYncNLGprRBq4qezYDiHcMT78uhmqHPcvbaciK1prdqLrECAa1pf2dJ4ACN3biqEceU3cpeRWxMSnMVo8k6",
  "key43": "4jhWpHWxQS6w8Fnv9PWkkbgAq4TSxwVaCLGpvATGm87ZAyRR38G7n8mxeHXVhG212JK7gidTCuwLFgeiosgG3pZ4",
  "key44": "5yoLduw1iFmPWGQwUunWSyFsT9St9K1qVTbEZHqzza5L2dPbSegrJU4gLPDTpTFSbbeZUCEuMsUQnaNcRtzPG1Gh",
  "key45": "3991s1GbEeEnNYA6xC9HWkvyZptvPnomCgP1xTHyXdezGPkCjVx2G7xTfMwYrgDWQKoNmgZvyJcq2utRsPGLES5T",
  "key46": "4Zx4RAy3VzuZbsQsnM3EydnqRqteBowKXRLE8Ez8tD2bFoAQHN34UGWx7HVe4n9vxpxKhBxEL5wUZcXXrv8jPxdD",
  "key47": "5fPjHGk6RL7QTgthmmghQLYsj2CiMVXbqpEhBsTcR8SBsWdfvfLwazMZY39HX6wJBJxq3iziQDpMpw5m1pX2sMLj"
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

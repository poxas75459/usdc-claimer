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
    "2Bf3DfLawYuEZZLH49Dh3kfDwfc4cNDXx5HV84yUjtCH4DMRBnBPEkPKzv4Q3X5ii5ZiZaCg2LxixZk1vMXk9gpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KsyU1G7MKExpBGhm8vYZw4xZCjDY9hNajbpaNAY8A36H8jPjbtopCqNSJnqLybi117WaAJdkASH9wYnHzUMj2NZ",
  "key1": "3BeexBTp3zDGwrnEL8SHS1S7zsKuM8sB6y1HdaJzts5ARZqMLen3RJT9uTpx8pLL7q2UtFeQHrrzTTJMk9JRnV1s",
  "key2": "5b6VgmKU5pd6kskhvguGXFxBLifNYQfRSV2JZLDMmvaFwTsBMLns96cAGEnRdgytAHpxvj4UEfua8SAD7fE8SwQM",
  "key3": "68GGt3dDYHq3Lpr3snphP2vxTAA6A4RiPfhLa3kG7fJm5UMRaQdhfJ4aHmWybCr9Y3guyPW3bsqPymoKkU9JcPn",
  "key4": "4Na3Dzdy6yBcgvByy8B53dqcjvNk8Rg79FMBFKX9Tzajcg1MibAtG8ptUXM5zt2RYGgExqSvoNjFvNsAsAon7C7n",
  "key5": "2W9pdq2LCZ9YfhjetNgEEN7pHYjd3zbUsD5J5TXs2C2UZiiSkGbjdfaNGJcoyZAj8RDMVDyuMbd6UFBirbejEUrp",
  "key6": "5kBWEzzVT3fC6bvherAqkHJeVVkGLPye38HQHSTnsXuaB1D5vs2PF1UMY7N6WthWabiUThrsmmkRFoD7AEax8MUg",
  "key7": "2nWJUyqu5HmbDH7JEfg3ugNqAySiYedqMoiVvHVuWp951NvpDWBKhjkTz4q69qeqXLVqe6Rn81UrQctAhKsYZNr7",
  "key8": "dNFVyLZGzt5i4k7mYfmnXdkEL8Pby1jW7SKGmSjLNqYzMJqASmRPbFmEFya8FvNQnQ5ZP9aqv71s4SqQzaDTSqz",
  "key9": "2gQY6syhj87u6VB69CYpfrMvHKFWbq4fAyYESLaNoGPCSo98T444SBNJqwcjzGdA4PmCPK6sd51Cmnahsz5ePJ2",
  "key10": "5Ua88eEHDSVPAv75NyJkdXCagmA1ufCFqAeWkzEZRYGSSMfoBHJMgQLcPixWyzpJAypkjKfiQCs16GT9RXdpCYKz",
  "key11": "3DGT3W5siUugG5VM9DLus39qakeeD6bUvoj9GM61KhCDx6R75JXvaqgxPrdyqXB8tYNuye47dLHdVFkj5TaYAGXQ",
  "key12": "2z5aScdqPYXo8vhV9Cu7B4Gmg5V3CKr84qT2eR4uxyFP18UQyZavje4kVqXAHsa3p6WhX94dAGXGnMTcjeRPkXod",
  "key13": "whKhfgTxT1ZBQmCHfLcevUpVX9yAPBuKBEK7h9jbNLXVo3rDtVVkKLZPnTSpFo2HiTHha7QxrPVWhPGUDAZxjCS",
  "key14": "3VkfuVnLSsy6WkvhFUrmrzAMk7wH5LtMM3gFHZGP81o7YCXjtk98oGM2D7JvBDRpyuerp93efEVzPJUUB8dcFjXG",
  "key15": "b6s3vcYPuP5VVnwocsN1gx26hfEkmZ7QqfcnNATrDFDtx6GamAGKg58mrTS6b2mH3imF1acWctnVph28Xu2ZPMw",
  "key16": "4dixYthU2TfzUH4zhK67XE28WQCm2hprx3Us8fAt4LrgSx4wnkHWjvvoj7SLpPKhsycZTCEKvirJoJWWJuMQrYwD",
  "key17": "3tynfrFf8cfbaQTSpEkfEYccorugyYjnUHqqE378cESiQFDdR858eQVcY56RCHPAYPigeSDnVs5CYpX1oCU75Vcc",
  "key18": "4drjbUXwv28bQ9CfCWKK639s22ucwmN7TmnBU92khuLPQyh3aekV3LYH41ix13M6zgpeLcPvM5eydPExBHxew4TT",
  "key19": "HTzKBzbi7gZdQzGzggtGKYGj8jr4wU4i2QqHfGTgoGSBX7WdG9ZhYQN8KyXXrtpBKwniFJYt3DDuxte5Bw6HLmA",
  "key20": "37beQYAWhCy86riurL2njBMmecncRzLw6mVvXif5Cm8KwW9f8MZxPqVbFQv81omN854SU3Bo7axqcaeQkXrkZMJu",
  "key21": "55Q6nA67myEx8x98vJUbtXL7ptsa1vWmeqa8Kr5v11aj1uoKGggkxxoVWzo5sctv2WxU9Q5NKH2hDvo8caxeUxkf",
  "key22": "3PWqHhKFjNJNiRaqBZUn1CU5AG8mD9776rv1rYYotLzeUYwTahmhegUm8vJZjLCXdfoPdo4tXGtQjeAb8YzGNgBh",
  "key23": "2jkHedq1x8GxVaozpFsBc6com5W3ciHgZYcSb7L34EB5Er34L21kzQegRePfc28wopAbk3waZGRz12htQ8jXD7TT",
  "key24": "2P25oZhi7fMBKnspWNDxCRS4PtDEkAKRNzvECUXWe6iLHqoydYEPinf8tVgg31SCXeLrUc8h45XEKJ29MvZuUe24",
  "key25": "36kPbYCfCrR9HhrXtNj6QK86ok7gjJoiVwrjRVCFrXmsZHoTLpvpP5cigu4DrYVk9hiPE2kUz5NT8SknigwUBj99",
  "key26": "2gm4k2C2SwNzdCRb42MSiU1AZ6BY5cJyuGVneah1o2GtwE66MndspSKCYx9CwuNijvsVzgYRXFGZufMZb7gUZVee",
  "key27": "4CHfesJhwnsDT8WyqdGp2N1uZHpxeLzJ5tGxNqFGpaMyyjHxdoFzaK7wu5i5XhkA9ZNQK4rhUVPefFJquVBWn8S4",
  "key28": "4ai6Lich38A5bmSmQ3fxyEdnY6c3nHetaG9YjGoYuYKuNNw9F2f3cdXpKyCzxDHKEUc2cwMbJDBFrMRZvsx1fE9A",
  "key29": "4MdyZ3xcMbvaF97btgfgfbgdwUXA2yCntu8BmCEkkq4ZfM8RcjyUyiSuEk8GFKbd3Z3RCrPLcqh33fvM4oPWhAYm",
  "key30": "4GxnRqBWVq78N4dhGciSRJxWPYNpwWppJa1YjgkQCHLTQZ3oRZrbZuPcy42KjHwiAXAxapKaJ4by88cGxZGwAwvN",
  "key31": "5aLKRSoqzqj4ffuxr3xZU6ENDmLnFC6XYfgngfvhQUjZwURQFZzVqiBzE4f3FqkBmihAzC7FHvzqxbro6g8JZApU",
  "key32": "29HYhgsnDXrhpaPkgFT9Q1QWc2QYzD8SuyNhtmHqALnMbRggzQBSgtpPgGXztrTi22oSCfWb2smmYsJJTiE9bbrD",
  "key33": "3wW1uUVAyuzV3nDpWgYDFZ4vT9VDYKSnD4DDo68YmXnzmiVK9fWP42ownxqAgbyMM9UFTjJUjXUNE8hrq5XSEYgq",
  "key34": "4yD9yjzAzgmKxwhx9Thm5q89WERV2NeiFzncEnhh3NC7iztbpqD9JDafeDrTAiVeokVHeH7WJrckM4ErZEwEXL6n",
  "key35": "3ai5mF8UbR2xtnMgyj82rE1ZaqBwfrQkyLF5NuKhqkiEmukTEpUxHE6vNNqkVfJUZP4BtXHqueYAjwbdHCJR5YZu",
  "key36": "4yn1mJLCG3jTf5BryKLnEZhZcYxWkTo2bo8hhK5WCisehnYXnHJF38bSumqAk3VBEBCd72mWJhLbSVtJVp5oczND",
  "key37": "fa3VNNhAFZLUDkkwTNED4QaD3ZuLbXdjFRUqq3RrVwiChsu88qZLAdu1avmhP66AKPEWhuNoJ5iJK5rPjzrznQb"
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

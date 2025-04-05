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
    "3htCjpfaGYcY48V8BQEL8WZgA7E92VahPJrPyMF15mgyE9rQHg42sediwtuNoeeqtiYQWDUmrr94SSFHFcgtvoDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCGWaXSnZ2rW5179hbLGSMvgPJ95PV6ZxA28DLN7rB1Y9tkJ6DjE1M14XcvTrX5p99CfTrx9u89PkPLRmuGJci1",
  "key1": "MC7KUGLQYB2a27iMCFmuYe3y8W9MEzQmLoZfBjxYq32F5g5QofWxSeQt59oQCMjBCNzDqpuvAeBUveguDxQ3BWw",
  "key2": "4QCVCbEAiY4dtabf3CmhxEVPmgoudKF1UgWiuAG1ZnmyAS5Q213qAb2qgo2xWtB869ChVbGtWYheHT1D1n6KJz12",
  "key3": "549rP6n6Eduomf1sq1zNDQCWE4qdnHs8wUkgGpwBpNctnmitrRp6u9y3uihjV6i9pcRmrij3t2ZUc4TrBjGy3rBg",
  "key4": "4cPaESEHeuZN51er8xqozhc5sGdwf4JW9kvsWhdrRhqWQpwHk7UNQgJvc96bABVKYAwK5tRFRJFcqYjoxh59AGmy",
  "key5": "3NQ91VVXiy5JKhca8YWVCLMTw7YTLM4McGEEhZ382EsruLQfGsMbr2qDiKJHtkYQB4RLWKdae4fHxNh2QksZR1t4",
  "key6": "3DTgpT9pTkoAkYg56gtJzy4Efxxu9uw5UYTaTHSfKWiJhejGpe3x19hGKP2pwFueRr7cTHPcK5Au99uUVq9CLpf1",
  "key7": "35BDGvooXPyuvSCuajdSHguddkxXoX1oy9BaEdvXYa9wH6otRg1F15E7PTmbGnP9KmvXcAX5YVsJJ8Lc4yCshv7i",
  "key8": "4z92ooebyrhxU1KKtHNFxshaFemnivygqP9dmrHfBBFE9soCts637TGvQjiA7422QQZDMzLmdqA5sQL2cAA9ugi",
  "key9": "5kbSgNwieAMiehH5vsodVDfxFEBa2ChuiTiLcywsRnTM1EMD4qqGqso6fyqNAr3jTbCLu1W8Jgih1y85WCs5UjP1",
  "key10": "4ZALdrusJdT58mcV5ULPKKPqxdgFmBqz8Tb2tLJVs9RfBqjU4gHHhnDSqdC4ACeH6km9x4cYz8V41NuhPH3oHAaj",
  "key11": "3TksMsbUR1CaTkNfP2HztKi68i8bK2N31LhsXmGgAUM31tzkHEaFD3CmXd3x67DHym3UjZRLF8zGSvjjR5aMQw5o",
  "key12": "9cEoHcMs4cyHTdt6EfbYpP71LapjPi1EvAfvGNaZ536JeVXerkSD9uUhkX84s4Z3z87R7FFC9F6tkHSiqgKPpMY",
  "key13": "5v48XMrYbpZWQVMNEHipi7BYBEQnsPrUAj9NzWKYzpd2zmKogTEp3nqe8bBUMmPicpJJKtPWENQCPRUVCsYnAhFo",
  "key14": "2P4SDFLTzBoEK9XSKv7wYZVzD4MLS5pfegi6A2vQLaZc7NAyaU7s8nMoN7BoGnpRUUvxTpLKjNxZTCqAbMo4dJVF",
  "key15": "4ogjDSAHHeoNBQhPrtJeZXZQDY3SkBTz5Fm3Hu12t988nUfno8VmWV8msjCqLummBTVfYkwyTEAD1zhw3LmQRbpi",
  "key16": "4hvTd1gJUh6oqSGym3J3unqVwMGX3wGuxVg6FYYNjsFmqrzwWPkmZPiSbCWriDSapWooBS75QSxRXCgXuKoQBNnG",
  "key17": "3smUYTR84WrhCmreDJAtdEJof7Q162wDygjRnRJq2dY8jH5ZCbhyEsJaKd7HmimjWkeYtg6XVMpZ3xaGbYxLSfeq",
  "key18": "8jDdxNDDMkgWQ6QQUWvmoPSVwEXbNfyNfzQLmgSiM6DJpdsYHVxwRfzMztTEv5NnJxKAmd1rvLnpfhbP3GdPAtC",
  "key19": "36rND7E2eGEdPkjW3iV9EBzH5GWaDLgQW2HPNpgRPC3dn1NnTwoXjSzAPf9s2ZdV2fZi5ALt234kvWQZp5gzDPXw",
  "key20": "9EhfAMwp12gRpvQfH29LgMbppDQtArgX3mayZJzG7aJXJTDyuX8iynsdJ7A2vWbgFn6MHmqV8bCMqmSXFZo4RpG",
  "key21": "4ndbwTnG8ds94d6UnrRBrBvFwnTwm9GhuH2S89ngbp3mYzxkGu2PRBiKfAfR6mQxhymmfVcudXrCXEJKaAM9ne3F",
  "key22": "5Sh8yuaitCmLeA6SPEgbsjME6k6A4qDsaQdNfMeYKsSQZgdLPnfKUEVkk5VGLKeMTFJUBa6FWE5h5pFJe3GiLTPm",
  "key23": "3tooueYkppbaQAvDemCnEZsSNE3KpchMmKMPpSsSXSEgyUZUnuKMqKEepTjkkL9fnaeJzMpfBaKDokPJoZyCvWRc",
  "key24": "T47GrQFGCd4xQjuBB9kzTeaR6racBZPQ2Ywtr4ec9FWgHDAy6CQvDX3B5dK6MMUVgKpkNKSc8Pt1rqSoAPPYo7q",
  "key25": "3NouBf8PyojG79EgeEi1DhMPEmFnRy27kSPLCU4GUDi5E8wtGi8entnd8be5g3toJVpCHKXNMtn3H1HwqRdV8pCU",
  "key26": "4rmwdjw8vqaZ6k4vwKSb48HDqyRkzgdyrLmiNFTzwPnCb7QPYXt56ynr3D8fMyA6nwepiFZ6YcsF9iNGNi3JbZXx",
  "key27": "5o8icdPvwHjhu6UQ81dzDUWG94BfzeqadrUcC8k1eyLktuDoyJ58Hw3TgmoMoSmr2QcTdQ7RK3nLNm238p7PrpPj",
  "key28": "SszoJwtQ5RQ9cM9rJiB14nj1nZ8fbKXF1tCnmZrp7mTkZ3attA395qHBMnxW6ZAEEtZkz2zddZCY6n3ZVa5vmDo",
  "key29": "3k6rgXB6r1zbYFCuM8zXgk9nDVyoGQSnSHQ2TUYDw7RcKP4K5XBzYgty5A6XNt7Xo8xb3QaPHjFWKA7owZ41rAaZ",
  "key30": "6YerJFYc4KYxzSDce25VGnaHtbWJQrHU59HPxaEzritRcPhiboSv9E49z93Y1tV91Q8oQFurPqaF8EsRER8j7D7",
  "key31": "3uKRoVsxjSUKe7BkXQWnUYsvtt89vpEc7hk61yWz6yhwrzNJCspX3baUVmfJwGmDY46jnzzXpGoy4bFj2z3dS1NX",
  "key32": "2p6TARJZmpJGNGSrbZDkBdpENreoFXtUFwP7252Cr6Uf8dL6eQn3s5gGtGifKDRFfCsimarZEPWfjJvMjEFtEdbH",
  "key33": "32pCUrSFoVGZ6ZNYdraXKokzGq9UbapNDxXX52UfrAXBdMNskkemXaKgnvUyLtMPu633gADCxg6Y2FDVV4rk6uD5",
  "key34": "567uWFzShW8mvbVys28oEwYfBtbbKnhqwzr5asQNvffkUQwvZeDRPmN3RpPMKQcLqNiF8fwLAzRf9N28p9mBy7xZ",
  "key35": "34bY3cbqnXUYhhyQhTz6gpjqUQCbQm65ctYFpjYGWfjcodncTfzjy2sjHu86T4gz8aVCPtVodLRTFEwG8JaDKJhY",
  "key36": "HkPtDpunUi37SnXa9V67P9jd4xHrrH3C5EPUxbWx8aHNXkBctPossGaJC8x2zuMNMKPM7KdTDNnF7iBR4apiDTN",
  "key37": "2NPv8ahJLfhUuMTkJeHuW1fTHTQEWtkbLgTi7Xj6SLNNNNeR18Ek9XLwDULqn2WLvLpKmfgs2Jfejjc9nPCEvFaE",
  "key38": "4j38jWWHMAQEcjFt6TyjCxVbJHbkRg6LUtQC57eysYcumq8iNADCGeCgbkuhwxN899XAZqHg8AmNuFPgsT6bt6Bq",
  "key39": "3WqtGVQkNWB7FranBJAhdMgeQgcKSWpeGZFiH97ruYrQwYuyhukHHveQ1wtXWyf8pUze5jTvNSJAWXBi36hVVhWp",
  "key40": "fxoAr7hHi7yYiY8pQcd9FEtSPeim5hWZdxP6Y9rMF9Qk9X4645PsajJpFtPdiNHs5sLnScd4NUJHxGLdddvByC6",
  "key41": "47aNVM23NifVaKRvggYX99B41pk5E7hqziT8ToLqJwUdzLZPdUsQwKTe3dRGE7DVhgVhbgEohhrKFLd1bvMBbx9r",
  "key42": "3fKKDuzShskbpGC8rDC3jsN9aaQMXSVrD7FLdeehKePxYEeyBn1fcZf1hbuFPFzpccnayGTgM5tDm1hdzm8so6kc",
  "key43": "kTgSRPpcCa4X9kjacTUHcCj5f9EVRCCsQpu6i1EqwZqFn86yCtoC6afxAFLfBg54U49wL8fBCrdiqikcks4atLu"
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

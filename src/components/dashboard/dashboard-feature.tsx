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
    "5BTEwyph2EuJx6zTuXbdvjGEgbPje18sJtMcQVTtgktSyMBsiG1SBg1jcVH2rBB6efokzPDfK8ZkqszQJRfy7sZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hy1vfkTaeNfNcSkEE15x5UezX7UJhRPSwx5nxgeKsm9iAQd4XWVgYv7MEXbAsXeTDwCeQVyJ1HerJfCWrHrjENv",
  "key1": "ktMcLKPmTJrJqY1Jq4jKwHxmZprrCuk2Fvij6tYqa6ZV77RhDhX4WuSLhVE4Dk9rmDVdr6iKsSAuAMRs68WC7xa",
  "key2": "3PfS1QeQFtYC5aRPaELNHV3NP9tg251A8WFKhoaxRC57CntV8kp1EjWNnUmT9rQqvudUvoxCsCSZ7cbtDKFmibK8",
  "key3": "w2fre3xiETrvG4fhKy8wjf4uJnYShPuuhHu3HFhDVPCJ2554NZcdvK9kxLRP3RB1NJ4nNmQhGGUHddtJ9trLfmM",
  "key4": "iK8kY8GehQuZekKfiwRrfRDd2tQRf4ApcUhvEWN7DrYSvm2Gi2P9eUqvRX4n4F5A7Dy3DbwzjVuq4J8LLUD9rYE",
  "key5": "4n1SeJdHfWf3Nfb7gR64Y1xvrHHGLdnDM3DiMzBkbyHfLVGDkenR7G6BfkqnA6AsPGAYZZSCKJZMvqjb1SZ6exoy",
  "key6": "5E6fxBkrG8uN2uh3wojQ8NR96VjpQUuxtzhnDXUQL7rGt2nbx6VUNiaFSfkUEF7KEfdKpTrZ6iDqQSMGhffnsbzk",
  "key7": "5BpEMFLu6PA9LnyyQqEwGQnb8m9sqTmzER2FbiFjHwZYoD7EyqHQpZPfT3zfBMnRCnS7SUU6mv1kN4Fa5XiXzeJs",
  "key8": "4oyQgcR8WgGSHBZKnB4naVBRzH6sN5JxYvz33CR5oqGwsWHYgZoyXUoRKt13TiQegf3jfebZ4z9yejQmUsxTUGmd",
  "key9": "ubBSRV19PyLZZBU5Q9Dt4ZtPLzQRaSGSjJMYScPZFW2BhC4Ba6N6JF2THykbErLcLj2Q6LfJRhgq2HyZiTshAUJ",
  "key10": "4ew8pcsfcegBJ9yguAZWkdCYKtusgbvpnhgutWbtGygz2hBBNb6wBSkDovBXT2FDuMjzeg6L5jj19dmEDU7cdcUd",
  "key11": "3QdvARZbZVsACtVqozyZ1iDSE8wSG33gffaNryYhnZvtjfiif7o65iHoqNSc7WZLNUat3u33Km6Y9b2w5z7cHNue",
  "key12": "37U8JTVvVhSvsDuYBRJhtyozFHHaEMEKjHq1Pnp8DjJee8SnEGbLqnjaUXniQp14dmgmBeXNYqtaPZqfEBEn7HyV",
  "key13": "5uPJEMz6n9jRBDfspj77eKjetsVWpiqeGpQGZh65g8xiYXwkdbk3SAkHnZqvqwbTzhm4puxgKeMERjpSLrin76tP",
  "key14": "62yNGXVf6DSivgVTEPYcdHHNfRZGRvgb4J6PAEyT7VXfgDw8t1JaAgSZZoDeahgDtFPotD6HNhpg98XmeZSHmJzz",
  "key15": "3sZ9c5WEZMiZd1GEd3MpXh9iGHYqMAjYNbapTKcrjS3Cj4PZJvSXLo2BmwqZncWD8eb3fQzpPky4AviqpNtc9BPD",
  "key16": "3kLUiK62Jm6q2iJPecJ8ADJhJiwyb3JJvzxhrz54KCFFDdGEtKE8REMeUErCF8uMEYtynB9TrxUMUMGG8q8LBBW9",
  "key17": "5KUGgLuBcmGe8J8s23oAz8qTLhkA9ciSqrBQikfgiGuP9TsBsikzxVTFbXjxRTJFw5unco29cEry5cqjm8hDfxWX",
  "key18": "2xEFtBcs3r9VAM7NoeMqVE5Bnsa5dCL7S4zQBSrBHk2czu34qk2ZgYJKC67x8TaBo3J6YE7zyCfZ1BSDM4Haw5nN",
  "key19": "28R6qFdBPmj9fUp3qXit1vLiky63RQcW8ty8uHyRR86VsKuLkRotaWktS6dhbcC9zrhL8jZDQYeqwBzaJt93pZZx",
  "key20": "485xLpBkmU4ScFo9iy5h8sJpFLgdRtxwMt8Eh4WQCw4T7pgctWjV47YvVZs8r52JsoverEPrEFbGdKjV4cWs6cow",
  "key21": "2dzfxXcMDML5jTwvBoYFxcg7SadTxDFS3yAWLpWQhxa1agmPLuNT6QTYv37SGbbXZgGmNSyVf1YTr6mPrRc2E29J",
  "key22": "5HaJ3DnNhR22zwnJFqKVFxaF6jhrGJAJRqC6XqwDVQQczqZ7NTvDpDHuh7uSNVkJxEAcUMDJ3xWKAt3LoVwV3uho",
  "key23": "5PLSGnH1L8mHvbWeTTDci2JieSuvcUtdUzaHnCvQa38G5u9AwKd5xKevUP6XfswgYSCdtJ2msn4f2Ki6v7pPysgx",
  "key24": "ovYB9j16PT1rXF2UFtrgZbsFnbi3C5PbMMZFJhg6fzdK5HP21W3TkaSQsyJRiAwtbRK2Bh3eRSvUh5Dc7851Agy",
  "key25": "2bj3kzWSUkG3gVx2bZsaYm7GZZoGnEdu7htBBFrshTUkCDaAV4qrzw2mRWLKPejPCSpXi7mqiKUvQCRymYipa9sZ",
  "key26": "2phdw3pZo452QXb3K28vSrmcYZdHBLFMjRxRMRV3854Rd5XYEfwXgUH5RGmGwiXfxKRKKakj1ELULiPNw6JJtDyY",
  "key27": "NAguUiMfQW4gKAGgi59WfUnonNgS7bGa13jxqP5Fg4VXbeJta7SRNqimSAEcvnXZiUfR7hSrNnUt43BeZAK6vHx",
  "key28": "57SQfL6xxZQYovmuKhTr5TFvW9ADgXHLFdJmNaZuJ3KLjmRcNLapzYDrTJRFKh9xijM6Dis1AMZBBKKTc8a97CQ9",
  "key29": "2dqL33hHGqfDs5Nmt2eMXVERtzBNYer8Ln5VYaZRcMTzBsCcYKD8rzUDb2Q9wEyeq1WzimwMuaQc2QHpHFQG6LWE",
  "key30": "Uc5u8My2XXS3JgRQjtzPngNyrJR4pNGVBd4f1W6KJJBPTv7TsrAJA1RPMWmwsjMbmTNZKPeqvK9M2wonPhimtNy",
  "key31": "3Ynn7xpaqMSTFHL8uUehNp2aVsPiTrBgiP1EX9jMCDKDyD72YbED4gK9vdqdfNntfx1vF3maMNfMPiBhGN8vPopF",
  "key32": "4LEDVHK1NgTvLKVMq6snS1GHyeTsJhEFqgqCuuX2mJ8HsoKifBaLTvjuGT3JP6TwY8qbAHYTaN89P8LvSkn8B6M6",
  "key33": "GjvYiWTaopx44eoSPW3coJqjJ4KDcVZ5ehmWkcn51yBC23uFybj88gsBx6avFW922Ghv57MeN5mPpvCS3KDTdS7",
  "key34": "4wGqmeNSDm8XRjTkkjPNjHHdvUWdsrkedzZkKUQ2E4YpawS9YGKJe2sNbpGbKHZS7VPb7ycQPxAvkYM92N26Lbxt",
  "key35": "3uvAxwvgY1H7xLW7T3WTQGUXnH9NNvzVrNXL2nZwYZJh8g9fRzF3YoCC4K9TMbsbV99gELPLyeKtAgw6ew5a54U9",
  "key36": "3sPpLiZe8AiSGBsqyi14JRQ5AFNcER7BtTP8osELjZu3QVusU8ovmyZfHnQaGYgrsmA1DZZp6g1cUit7CpQgbqqt",
  "key37": "2K8vPvfyePaBvqJcrr5pNSuCsSFcSkxgLY8YKqe8kzSxhh26gd2dzGPRGPbpJFtoQ8fcMiwjD7H4oc5VZ9vyxXbC",
  "key38": "59FaY2f5zg5x7mEE2mpQsaPPEe9fmoNp7hfdfmr9PL7RnSK6H1fDJjc3AeLstUVHdGzvEY82rUcc7hay24jXUrea",
  "key39": "VDeUxWLDMrLTqfsn27MSW2zXKZZmQVkCfXybtTM1ZJFXpZ5xpCDGBMToULewqqDuD8TfRQrxMEWRZ57DVqeT1vF",
  "key40": "9udanmMfSbKVWyAcvZWPMsT6vr63mRgx46tunyWCeJz26CMgHxJp15tLsj6CE5fFNCUwwfeRx57XrPEVBUBsJz1",
  "key41": "221zVCo8ZnuCyYZ7T4xgkyAx7M6JRD7fZfe22o8Vo8zTFPVxLYF5Gk4kmZg4R6hcczZP6SXe91z3eRPQyn5PRjTm",
  "key42": "2iTZFM8ocCLRr3QxLwTgUM8hxKp8WHLTqnkhCmxpp9pP5JJ6N95TK9wEtZUictLSwmNeSutsB4m76jaeWVhb4UUE",
  "key43": "t4nebifW4MobFMeyXuyKp2frGe4DQVNdNXA748XCXR2uc6icEhrXkM9zvdK5HawmWyRaa86KFzLyZyjE9QJvbje",
  "key44": "5itfeiUERN5hBgsAw8AE9gR9JuuWUBGcoUVBAjHK6jzUMN5cMJq2xBVbaykMZeAFTLReSVx5jErAjFYF2MHjkxRs",
  "key45": "3vVtxa3pVhcxNGnxtqDSaZeAN5wiJmftC2QwJ1Nz5iRHGpXQvAq3N9qmKLeoZRsUb7C8wx4Eai3bB6eqFmoiRf7Z",
  "key46": "3VPwaPd9H3RDGV5EjEJbadjP71n8pyCXzA6JWgR6EQnhEZy99CyGD8DQ56bixS6273XwFq8UEmukybzJpKyHEX8D",
  "key47": "4HJLV9ouu3pUfArVCPuPuNGLbEvJuMCT4zZTgvPACZ9tu85h1FZKxSGH18YjwtWqrF1QNhEJedn1oEo8aQGTi2fD"
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

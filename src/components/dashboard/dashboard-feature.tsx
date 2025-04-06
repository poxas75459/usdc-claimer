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
    "23sERzeWR67kQxQEFhY3NBunF9F9iMMufM7RRu2Ymdt79Qdnw1wxtogwY8qrovAu7upPm3PeahgRAFg1JsSJHq3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zp1uUdkJ7oXJBwhsq5KKKF7kg4DrDFwR3fEHYBWHunoz3v6wDQcgj1FQGNDjyZ5PNotCVmhfdCFfPDUt5nropu",
  "key1": "2S5HYhbpht4tfK45viW6rKcvaWpYfAEsPejSGio2mxULp7hT5QZQaXQniEVMXprKDCUNz374M5bxvzfzfyuRZPRb",
  "key2": "3LSUeL71JVNWcdMdHr27yD5V9V8Koi68b9MZTmU9YKF8p2ts8wEdhJtbxGMRkttifQDvb7W9VEFaytWWoVzKsWij",
  "key3": "5D31ZGTtPhyipSqaYhw35Hsq92E1QfSii4PLKFJgmkvrM4A5699nya7Njd4Qs5WgbDUcYWxV6SVRHwquyrjGU4LB",
  "key4": "5LjkbWHvmvvVQCAJSLfTJeYksqY56LRjFhYqWH6KG2eqEa9b7NLXi25LPurNwQnhRyV4yv8cikhtCLWnYEh9a5VZ",
  "key5": "e9uetbbwunDzKpDDbpYYNnc84GPmy4XGfcXWvyd1Cp8VwM4UKRP9tisz2Rc3SWkPjx9ceu4zy15RCFSggR7V8C2",
  "key6": "4t6fBxfy3ehexPH8uxGeUkuPVRx6eXADpfExMqNhRgLawQVybu4xFVL1jE8CJCqSJ7sKPm3p7T9UxwY9ajKXiQrc",
  "key7": "2qb1v3B3XjcmaF2gU13ZpwMLxYn2opct4J9YWaUvwTMvfzrMqMMvP7WyqU3MMSs1P5X6nuLpcfg1jom7pDY7k7cH",
  "key8": "WRgjaCxECypggsc66qW5BnZaUY7TSouBqmJ1WudpMBgLVnX46mdvsgZzx23eSbTpCegHQYo9W9phL9DoQFNjM5y",
  "key9": "5wGRuwdzMqzKyFxME1dMhYSJ7f2dyvgtueY2rqzd9wxMjeYHx85keHnMaYRjwGGhQ28NnB2VX1NWEUqsJUgMXNKj",
  "key10": "NfoCwCAgZbVdyAFPsspYGt4xhPUiv1ZVXCJdhbfHvt9fsU7JepD6qcPj1cwwGeBhkj43TGTrM9ApQUKqe9b7Hw1",
  "key11": "34uGLVYfuD2b5akky8H1FFUtKYS6CPR7buZw5yypsRRa9Y341tDvswaM2yffpFdZ7o46kzgFk51A5gcRbiKBXTHy",
  "key12": "5vTeWZRap7ib346ybSQBporbKwNjFF9jb6JFHDcpfn2k2jgdd7283jParmdS7wi45wb8xKk8jjXpx2qfJCrStPhK",
  "key13": "5ei6G2BTWzPo8D9DYuWSBBo448p56FPXoSoSqWWbXHYCoJLkn17uuRbhUghu1qryeLhXboo8Vq7uRWiSJSnuhZbE",
  "key14": "2vTfVY9APmKJCirTfaw5sfXYkUHqjWxh7oFQgABuG4fQ5G2944x8u59Cv57KuY2YEb2cS91JiHry6b6hy742X92A",
  "key15": "5ukh5zvJn4UrAPNDsLZjnuv3zijM731uZuTrX9MQgQVhDX9wMYEsLQ9S9ecX21q8VuZB5iFSEu1GYUHTnuKjDZAZ",
  "key16": "2G7KWUyRfYzgoUjoZQx5x9hJjbbrJWBrNh23QtXRoMEH5BTR8madRV8WuFC1efipHCoSoiSnBKoYkEbbSoUXrPVW",
  "key17": "5eVxAMGUtxVZpk4Hncxx5ZdEapt8adQAbVKZqgHaPnHJJeLUAh6sAtvDuu5SbnjenhVrFVh58AkHvieuMabXNrqS",
  "key18": "4mmC22zU231k95Edc9B9LsAaM2LDmpG5e7Ls2NSe67UhX3WCDDBe6jHTYGTvbj9f2M2QPp5WWjEoqjMUrbnPYiHo",
  "key19": "123mVUkwriDGMmXZiugo8NmvpzAyfqxiuAVcvX6MCiZRkf5yu2pXAaj4JsPTNWK1EeyeipXkvw8QYputhrbShV4k",
  "key20": "4ogdAnrkdr2guAekvJkUbDktfgGUpdnEUJy29pmvT84EGrZapKWdatydeBMAgPNy5xNabxQQDxphrp3dH7Wt7mZq",
  "key21": "4NXod1imvatEbJerpUBEYyq2K9dG1XyA3i6Z6bhvYMQtz5fQWqC1DKaV794SWp1r9iwL87DfYxbAN3LS46VAzfcw",
  "key22": "4yrScDurWSQ6TnYnnDuraoTKFopfq9FzFpTJJPfXYgT3rN73hJvbgfbbULDG5J3YWkQMfSRvina8dFe1eP2RTarK",
  "key23": "3pUUtLhMCh73joaK5X4xqxWVoUV7jdBfYRLbCNbFrmq3zSJtvC1Fjqoai4PU4LjVrL94v5UdvaU3b3NMHwnKQGVz",
  "key24": "2vHmbRBLrqJPqJ4uLsG3hdsTvbKMDV5xMVrnyS3g3o6Bnsz3MNcZgzFaZxtEeAjbCv1bfLyUsucFYjaaCNVXRcnZ",
  "key25": "5CaGeVYstJtwZDAFxCtup3NMpq2NoLUrncXMxtUQR7KNdk2zranZief7o35LSNWtt8rws7gwFBGcuT8GCuXDAF2P",
  "key26": "5PoiVdiovdNhWLbMmUuREWCNAt3x5YvGe5nZffyigUxY9j2LcUzW7WGh21JcDPUAhZ1io5adrP8Ri19z5XqSf7ur",
  "key27": "zCAmrqG34avGhDWW2cTYz8F5BamM4HrwLZ8TXdGkYJ1diWdZKNwaGSiyvj4cCKHDiAbRfdvcmANJJmGCTQp2tEm",
  "key28": "ayvyHyDxefWg5s5iNz3BJbDrZBftsZ2UNFmmtF7j85QhbcKW66B5Nvt8dYBfpUdHVFtVxg2iy7Z2feE27hde3F1",
  "key29": "5GgGmNu4R4fVPZLN34hNmj96vX7YcGfD217wTSwfx15NEb3Dv5AjDjup4rUuqQjeHQPYiWU7teGnExwjt5QVfAeK",
  "key30": "2y3RxZxQetLuSiK2kHuphaYqfmyLx5ZzcCK9ngyjGTwdUVPgC6sqyggaEfyF1kh1uvEv3owmJ7ueaJTk9zcNCMb2",
  "key31": "21vdyewJr6nAaYXgHdmeJBKjgCLTy7Pi2atsVgFDgf3fqJKvw3updXad2BDR2uNU5Yj8KDZpnipCgCJMGz9ED9RA",
  "key32": "5xqVzLqJfinxdzBJqaFixXCqkg1KDbNfYkLERMePiDKUxoDRNHGEGa54u37aYVLkQB347mw3fNw7ZzwcZjFTD4tW",
  "key33": "4qDwbWB44kVS2qCYcDbMvcqYwA2wzwitVSN6A4PvGrEpkLFB6hLC6tJZjxgDuB6FteUSTsnU3gPSysQ3mQf4HNJ1",
  "key34": "662qqrFc8qMVKBV3ZjU7u4T8B5UNr9oJxKWP9PfjNyQdXqGGwvmwqvtnVXq6pPP6bB1JmRBxcnvQ4GN68yvvDf54",
  "key35": "V5mm5gHACRotmUyjYRtCbfVAN6AjiiFFxv1DJ4BanPLwqjHEf9EXyDgr2vZbFCpCU5fAkajT7AKqy4s3m6bk1YT",
  "key36": "3SBTY9KaVqkPaTizPoX53rPTphpan64x9rvKFsuGYVyaP2KDnFrGdGFxAzBFgxFeyK3dPQzD1QQzLyhesVHvqRj9",
  "key37": "3AUnkdL3TjAf5Apo1Txakk5shUa5L7MpND74gktpHUfG8wxbaGcFBaZLHJQQA9AC869t71GbqxKiEaX4HM9M36Vs",
  "key38": "jteLXp6twbjLSDHLTAYFdxfudeqFK16YyxhvQx86kLmt34CxQX4jHJevGKWgkuR9vXWN5EFPbJu5njosuuLmzXa",
  "key39": "jXnFT2oSmZLxqZKdFBNT27q14pZUjos1NqRqUoKfDHi7ydewwTRBNzcNtSBPLL6QFgyZRXS7dPAj3LPXGeRE9wQ"
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

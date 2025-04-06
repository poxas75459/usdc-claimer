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
    "3d3s1VQXdqWQyGF1NpMbdCohUkRniaGFGaNBXsdLWwZaaVv4mwqaYCFedySDtmKf9PuU4poYu63VoEwF72oJCXFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXsZWwqQeqwFCBuqEt638Cx5Qo9jro6yhQKt5kkbYfhxN5iHsWdjnWaa9kY4B2oESTZ4CMFqBmxEepMACmr3BuD",
  "key1": "5rU4eV27Y1kGBXTPmzGtTK7zDL5KYVD13QRiNY9Eyhh7NFr3bfY6pwMpdZzyDHSDFehC6ZYFrzDooci4AB745nuc",
  "key2": "4EpkZHpR5BGfCKJjhqWrdnqhyxy8FobLefGUqJ4tiBrVf4A6WC6t4Xp3uEFBtxhfZMxNkjKCnhApu5SgzQURd3da",
  "key3": "2v3JToBbUhnycJnCLKCv6pMFWEAecy3TegcqbFFQzfaxF8LRQurEp1F7kDB9NXhQtzwAkgCd3tkF46FGRrpxytNk",
  "key4": "WRjWvrkiUY4fZnxw8VmpifWhddHxbaSEPeMaM6cQttGv4zGwRVzdML85hanv5hxtX33XhuJNPkib4QacRjCDRiH",
  "key5": "4UbbAVjBmVXXDqiFTtJkttcJaE13XK15RtejGNYyTeKh4ofBSNT7WfifbHfA5d8X2gD7Yr7JPP2Duumz3E1tXDtN",
  "key6": "4MUVDLQMqb2RZetKzLYUb6Fb3JcW8n1XxwcyfNgkCHhUnJx6qS5timE1fua7sCdruoAJZYBcr4Axi5ezYNRyDE3E",
  "key7": "3ZxJ6HbwEzHbB9SWtWJGfNwLD6enuzn1wULSCKz1GboWKneP4GAv7GY7mTobfJcFLoEgyp98QALcs8P89EBfuvvq",
  "key8": "3dxbQHLhub5P5hxZt1VaD4XTN1mfaLH7mMpfvi4wkigeHrbqtjy9iVZsH5BdW26CmDNx7VZLCKwc8a95QwmYk41j",
  "key9": "5C1u3W1QTVNfhqanKuopztn63LChnNg8ohSsarDA9ecBDtH9y5y7NTjQXg7Ake6ihpsD62BtpucykNGTef7Dg7jb",
  "key10": "HY25CuFWkJk6tzo9cJNxyf8FkzqEMaghHQXzAQG4WtJVxdzEKkrrreE1g8ZmQHzsn33GQ5WeMVzpFeujQBoJHzx",
  "key11": "59RbPodFg9xsm8fGY4Pp2SDDb2147rqc9WzZPNNwdKq9vBDoooh1Whp13tgfbEa2FtdyhRTd1Z1FTJPjqREFLQb5",
  "key12": "3A3NVVamdRwZvSovjFmUjJJZtRurGgXWF4zyQd2sALGx2MG9oLED6p7G8oVGYgcTMKGMAVcqQAG3DBwzAH9vD3dP",
  "key13": "5CdN2GexDpxV8ku77p6FDB5ZM6pXBuN2yqKUkBNtaEZNTSUUTyh7UZ67M1tvSxRQxaPCJhz2ibAauJfxbvJmEzoY",
  "key14": "2byp1kSnjZo35cg14KS95AvweocwTp951upco175Gvfca68FM9gyW92oCMSbjLRiiJaoSwyZNToX3ebQT1ZatZCc",
  "key15": "fcuFTx2HH6i7t6r8D9LWQBBTRrzDnbbLa8YL5tnT5nBcpxsZQuPK2TutEKpzBcbq4XkyXLiGhyGADoA4hGE44V7",
  "key16": "xKEsxU8LLzrFWwhn6ZecYsB431KdJ9f7ZEbcEeApZtiotcegBbDU6bxJF1K8LsgXurknTKFQsrMFCwKRyEJLvry",
  "key17": "3mscjZTxF3wvPkjsxbNSB2wgW6d3A29aDCCuwperUAnK7LXX5KJc2WaG3aUwTet41yN6fGeCPQ6ocxnp1Mwe1Bvx",
  "key18": "4dnxCDT71gFHdVp88oXoxCSC112P8JDPCSMzg1YRUYaQVShnRCsmTYGQMiuKXALDSqfuQFj2dGmy1JtyecEZit7J",
  "key19": "pkgxSDnzfbQQvWD3f5FkXxuRAeQnAS4ChKmfWVELbzrTwKb2VY6U147Nj7FJcwfyEBCx9GhsECyaudV97PqUSWw",
  "key20": "5VWzaR9FHSSRNZPUbqc87WzpLYmpWWX8uJn6hVewyPUE12mzmPfQPUYoW8YHL8ZFt74TXReN4xUNZZY4tVi45Czb",
  "key21": "4wWZMfWgNNjr2gV1cZSaWuTsQzZ93dyST8rVG9V1vQgChoWBWBFnJyzoZnE1Qm7c5CF1qCZ7tU1NBN2BzBzDgAND",
  "key22": "3EezT2pt6MUVXLDvBpLKJCPzkR6xiH7j5cEGUctRJ8SGWddUooTHD4riff524LMCarHyJFBKHjRefZ5Bxe2a4q1M",
  "key23": "3KtGsUTgD1xVU8gjBr2divhTFdqfWZrexi5TDkmwLzEtusijM7AcjmrgKKrrKF9V9AVTJM8nL9KNKCWxDkDps8Dq",
  "key24": "3wsoX1xd2X9WbQgkhmLk5F1znuDfKq7YZ3AhDvF6pwJ62bpTPWS5CbVSRdH6E5maCQLsjAa4finiZPyrYA3Ws3U1",
  "key25": "2cZwurJopmHKkqMFvzZPxcLRhdUB4vw9JSag7oDaghNMSwnmsUn5iPRVGNjqH2zcXaoMLLYkSCDFKuTs2GH6LgDa",
  "key26": "2ups2reQZrZNFE1GS33GEJSRyCzFYHVhvqYfdnLSF2btztPN1rWUcf7hPkGo9XT62auNWYaUaT26D1V8An1P3uZ5",
  "key27": "25QzZfbY19Rz6NuPBUr8C3ZmnoRxFuqFKACe8U6LEgahXN82Re3TWouFKTDfWpbv5PcdoRBTDU8CaAF7ihJ3fJZJ",
  "key28": "5Hurxg8bVP7neC9eLgyhu5dmeAj5BE2eHxHXA6SmKjCfm7vhJsXpPZaKf7jMGhiGuP8xD85CorbTmuj5WqyyGVP4",
  "key29": "4GZ3jcazQKQ9kRfTLV1iGhSmBHEFaUxqSFmHTDLJ1h56jpxRTnrT2TR1EL2SbNzvUkZ5FAgJpkLid7WN2SbbaWK1",
  "key30": "5yWixEoyhRwSMLJ5CaZG8AngF9rT1saheEgEeV7FENWRiMa5n65q3v4Zjhm44uegTbsrtL275yVonGDXDP7CauJC",
  "key31": "3565ChTEryMhdHcdfTkBGppwm9XjV5j8yDzVopwS5joUU9jnjTfCQCnXcoasPn7WA4C1zLoNJJBbswrxVhQAGYMG",
  "key32": "5b8bj89kwZ5T4jCkTvUA4nPprzEJDtfASSpHPpbFHqUkyGbnnc4bQutfJ2YKfJ294o39Ps3mZAdqrSHW4Ypuk2Fv",
  "key33": "2B7TjAc4XMQY2CCT4x8wzstQZ32hdMHxrkYMusmUHrZp46UwnXDFZQop9aHszamkyB29MkzD75Y6WvFNzePEFjdM",
  "key34": "4VfStP4M51hrSH4xKYASRv7p9e5mNh5bEzohgSLAmKpSdKFwFBN8xN4CGkr4uNiyMFtAfjZ4oMbQieu32ffKGu3Q",
  "key35": "5zbLwyguV28MewkBLtRPCxTuZHtpweCN1cNtVuHNvDjaqzn4FvnKhG2QLqaWkJtqrDRkVNS3a51e9aw5gEw4cUe3",
  "key36": "3sEJ2MHEMBzynHPV4aGMYj1FZnTeAeupwWaQCUJVEhjazDWdpVP32Cy8YL7qZq9qcDYJYHTSxYKLs6Rn4P9pzBgs",
  "key37": "5M2TJpXwX9JJ1S6qKwQ1vfnpw9WAMG4gxmCSBYiPBfrZGN5nwGipda2HpbEfgSxXyt3y2tfysxJdCaeNVPNtGgcw",
  "key38": "7YayTLov91nLftzwiZmC7JXEbxKK918jyTz5noGzbGLYJsA8BvP4JYxsgu4y7ePKck38YzB1LVYjh7HYs3EY7iu",
  "key39": "3CYdUezLGr3enzwaqFSU2zAUX4cSXLmvoYLfo1WULuN1UEKLbgCUzD94NU1km7xUHXVHbp8W1sRDpMqjtrm1ihvH",
  "key40": "3ph8pKYHcGcVWBcaspWyKmjvgahEP9x6GRJR89cDFDnhpADPRk3qvHPNXXVCoSuPpWWCHaoghQF74BdsakPHChau",
  "key41": "VbcwVn2f7d53m5yxtUYdV2LBwkr9huXJskbEWuzBKz2HyoVkAjHoYLqJCF7GHBACnmkDHQwMyHRRCowFYiRbi2a",
  "key42": "2zomCratXx6pccW7t7d3apHGQM2Hz9Z7gfkbU8GPwJm9thG6dMgF7YrgWMtRpSCRZChZXXxdhf3PJKVQq2d2EtB2",
  "key43": "5bB4VC6gugUh1YQZaQUGffdGr3mFsaPsvX28gJkuBvow2v2XRScNvSohTggyxNFZQtM6GiBEaxjaHGM7kRQVuc2g",
  "key44": "2h3GUxYVS7YBihyj1DuHrCi1UBvS3g97vKSkbWHMkCghu6Y4gNEN9orDoJdQMrSeauMu4fWZh5zW2brqCnawcGwu"
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

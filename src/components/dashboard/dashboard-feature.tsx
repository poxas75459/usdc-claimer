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
    "4J8hmq2rhtpuFHxh7qH239ks9pKWf8k1VsbeaDFjz1p29yDfbhK7ohBNEYz8dUvi9Ly6n6Pd2r2kgJNWrvhw1EQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7cQUpHuxQtF17w33jJov1N369PsZ1aCeiPZkF6QT4KHFcjPu9ruAxXLk25beUSbR7ph1kCTr4fg1VbZmE1sVSV",
  "key1": "2SZoEEr3s5o9fGFFo4g9dZrSY9pqrVhByZJB48SCVZCoLzrjqArr3JmpPHAZJEUUfNc6FCk7jPMe2LGYZBCBRVXx",
  "key2": "2XJQQ5kTdphepVswB8yQXzpr9dJ1NHVedCXQwPBa3WmNLvjomaa4NzFc7S7rzmpRmH6QVDmwUnT2NvccjPGTfVNm",
  "key3": "4V2GHHLop5g2wXxu3RyKNKPU3v5pVd3KCecW14Dw9jNfM3LjeeDTJs376jmgPdMpWwLPbDVwh2hJc35512UiSzce",
  "key4": "2X23zP7nNZFBYchJY9AMi6wmDkE16fZmyuRmB8oZVqgSs21R5C5jTZTGFR917QLKhLptFrPT4H7MMynt45og8dGm",
  "key5": "4bQJNQfYzj5H1W22WLFxz52NVQbrBwdwq5hA2Qd2C6tanuWsMQzEDp8miwrvazyh6cfqRzAHg2JyxsJmvS2F4QFN",
  "key6": "3TbLvEeh8CdEEzwiwjJ4pwrALLykjto8p5CEyGsYxyKBznHqQd1fjVsKoEohqGjhf31mYYiJsNLWLXEpp9ULvf9i",
  "key7": "3BMijGU4WZ6Zkf1uELsFfzaospaNgBnHdnsVpZtuAf8FwF6ec9cQdCa8FvaXA6gY4nCvzzdASoptZGqF4wyE2PYG",
  "key8": "2QHkJxEM2xK7pQrJwabQhjzMfUK3sjnjMEmu42Jh52qL9MA3S3FzbfYEYegsQ9ZPzmteUbayRvuYaSVqJkVHNVbL",
  "key9": "5qHRGbwRdQFCBWpXqZtT5HK3v5xKMNfxKDpxmXRfReBpXqUQTHpuvrzHmPcpT9Xs5SPJB2QvASpjnMamxLpVuR5a",
  "key10": "2KzU357XpECdFDtQWEtiNRo6JLK2Ja1rnyf1GM5tqiehGbGDhwX66fiExy67qKckbo62B8Hs4yvqv6naWt9mvMvi",
  "key11": "32CEqBKcugFTFTCSEgxBAyh8uMnKgEURqAmpaTJupmnD32ZB2PTaeGnkaHiFtDMBDr439Sd7eoKoCFDD2SJ1i4zX",
  "key12": "5XJUBDyJgqrq5XBgK8ynLDTnZXhWBEKc4zGc36xKr2nN3q9qZbxWJhNXHNoYsN2nkWCqZN7rB647izpas31GMQip",
  "key13": "2iJNdPwwZDncQ2kijUQFUv1qG4G7Zrqw34VGrQqw97vH1ERPafjBqrXxSgSQznHQtwy916uAdF1uYweiieUmU2o7",
  "key14": "3fToUWJahyJiYTjKt3j3B2bk3s39fEyoDnfNnbM4gyLgznYC3NQbD4PRhwyJb89zGeqAJXhpyuAZAjbsxNQaQPHL",
  "key15": "3Kgf4Vhssh2SFyAkNXK4TCWLpwfxUUHPVrJjrmZKJeAHhckZ2QPADWxycezYURSzbzrRNeVVmhHQAAKFQtYeKFcd",
  "key16": "3XYzg6NXrGiJ7xuBmoN1QF6ktzdLPZiFugzR6MeTwTx4ddtQrYmyMcTmF57X2u9bUNwb4vEZJPCBuGApKCpopcgF",
  "key17": "2x34cczHchf7Eo6WrVDzyTXr84LHYjBra7pDSRBHcrraaaFfo7pNRPt3ukUdZTDYDTaiXVQGsiatN2345Nep1S6Q",
  "key18": "4VRy3FBoAgNKJdpDocb2TqvGpsux9JwKhL1qX7CWUpbJTv1oRrUmsdnDDgtuZzyB2LegtMEsG1NxHfyMXQp8frEh",
  "key19": "3YvShz5U6gzNz9cNJhubxFDNxABshz3j7K1hwikESVp97se9d5exP3rYQwx3Y7LuvAUEau5zmsGg3fpzhXYjRenw",
  "key20": "3UFExGKhoDkXrvBtoCcpzPgFZgPHUvHCwVzPyAvLnTYs1P5ppzUDieETxzDHMBDHGtTQtynTZC1FYzx8UQ5Rs6rR",
  "key21": "2t9XDSQRhrmRJc2Y6DxAYUzGrAQRighRNL8korSAt31ZpgtQnhwUse8FCMu3Q2VJRYavLyBgoc3QxqZqSMkeFJzr",
  "key22": "2vZBrJAcKwzB7dmpTbgYYCUcx2uk9xULAPS77EY4cyG6CU8Y8pjUTMWShF7ZT75JoHneAcsPBsWJL8oV6Mp4MMbm",
  "key23": "3GSXhn5gNKqCUyjhSrSUgFV88RSAh8jcvQ3TenHNYV4F6judGbSJ9a7y4dxDA4fJm5z9hGrJjyFRpdyR3Czu2RKU",
  "key24": "5czUPAs7HyHnBswNaKaRjzUCjGZkK2Ww4W6UdEBLF1gyYnSdYMUeSMH72vcqb2mJ7eGFTVaAgqwMzCwFhC3B7iC6",
  "key25": "4cxe3QrEtW7ibEpiVyDfjupXmwFUWqcGdzG8JbRiyTZtFGsUxmLcHN5bnzBZ4Ah2NBetUgF9azD43xWQNSKBh8GZ",
  "key26": "2hEPRSx1EDrFRXvsZhifdDpKT2sxZL2VeHMEdavAUnejHgJmXA8Uu965aDbjHD43oEcfhRnVuVvwGKuL3HyXTENd",
  "key27": "54PK7BAn7NXqyFLhyEvzZAFMxqQ1sVmxBxb9eSipi2xcprsm6HF1hSkJowXobUnu5yx8k8PaSHA9P1qLG9gwoVk3",
  "key28": "5UcfWtAgRfqpyRThztWu7cKMgYwVDB6TdLDu3FmjgLfa59TLfvEuN8RPWH4JYRYzXXaEynAbbnNvDAu4okipbzzk",
  "key29": "4xprQH2ut8X1rzNWWidSoZWgirb3hs78rtm7VjzJXrHzBX5qkBbCx9hER2JUypjFySAcpkEkvhWdgE7NjsEs5qCW",
  "key30": "3KE3eyto7rsjb9t8mbagQevL6gcscG8mW6JG9K8MCFAzLeVU7HVv2KeXemHwWxzQeFLWbx4Wcw8itQDVrSY4GbPe",
  "key31": "5dUbBJAatbBG77rtLbpcdjXweRqJy3GvQmgDcPd1r5xKxHkDWSCbaT2zEuT6FmX8FggfKJnsqpTPoXSEUAqZFU1B",
  "key32": "4t9KMrr8pSyhqu1J2N78t9GS56WTPn7GPddGYHuGQ6eogdnWaH7rbErRdQXyY4RgmL7xPzTPqoZRRCY59EMKTQ1N",
  "key33": "2ESx2hDGGuTu3pSBV3hE6SSh6e8QwxPCMwiQGNS2qXnCvk2HZX6rU3w4L9M8pBUCE11BkmJk3tYqCPSdeDt4quuc",
  "key34": "YJybiV4zhw4VWqSAATHkJHoFa6tcG9AjJAZvt3Fszj8jwKtDMBWoyQqQ5iaPMy2zF2rdy85okaSoyEvVUNCPvsi",
  "key35": "63AgJ9Go5yw7taFrvAsJH8zVSYkF4mXYJrh5x7SF4Efz8XQFbyE1sj7gCkKZBteqc43E8nMEMHVCyWLjQQDYHf8V",
  "key36": "3hRVveFoDWZrc9iY8ydS8tisSmD7SsoAKa9Q6T1QxqjMu9265Pi5RVWmXcrdPiRcTCePsQjvR92NxDyZC2tquFPg",
  "key37": "4y8hu7jGZWUGPXvaLKApJR28s8ZhHQyd5wqjqTsGDgAvuuJa47a9PmLRwLZMq98xyUELMtWdLg3AUDPa6kEQg6r9",
  "key38": "4ycsNNEXsMe9G1Yfqh9nxsuFr84MpdPFT9wdMyk75G5AdQp7nSbTbPdPWSi2UfdjH3boHr7BHQWx3HeZrTUi4rsN",
  "key39": "5Rt5Zk2jjzFVBMQjDmMX9gEousTiNsDBJSpwUjBp9gbMGgfq5NKhN1tKXRSi4w394VcQaj9uDyVx1h5XU5Q7Y4RE",
  "key40": "G7jjsgM1Wr82r8hqLjmgEv1ftmiWrxzAVAtBREKTwedq2P1wFTH7kCbbxDEztSWdCGqdEstbSjrGCCqateG3mec",
  "key41": "4ZndyeUU5gqt1HKj4cPq9iiGRZnzj6Rzc9Hy4anDizEepTa3DRegYGGUCgRwsu42eNLfj69kXYzmiCssUB5cwF61",
  "key42": "2YXGs6WnAJvKEhxuD85whJk6yi8QYHpoc87tRZFVk4UeioXbk8kTKkmiHd2qoD62LUsDgiRw8J3ZdtZHsZnRiUxH",
  "key43": "2KvcJcwS95eRhjZG7jGpcgsXpccnNgL33K7QVzBviTr74bpid7S1ALRdJvN4mjrvKhWDX4WdpDfR79UgjWpHRU1x",
  "key44": "2p8uTtaVL93ynqpADHSpMYHkaRKQWSdyN8iHHxMmiiEVqf3Z53Tz2DdE4RSvzQXjC1LZ7BDYnq29tQJD6E9XnZhY"
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

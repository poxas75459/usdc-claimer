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
    "4kpsC3cCbhgUQ6q11urk5vrUDQZrHeXBBfdzxoJofbtSQQ7QTjEWo1xiN4EBxnTgDHw2noUTtdLpjKLDwfm9bayR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5figuAC9vgjKc6aTZ2WEs9V1NfKo2DRzqkthb2h7UUBaEqaMwmkPKo8MG9hXfAyMabEgoyt5u5QmB3kkBMJajExB",
  "key1": "4EK9QHErYZMj95ZZEi2vwqfCz564zB6jLxPgErkWPLyRzNeCabxLMiatoK5U5z1TKWbyWHGMkFQwEW4nY7gvE9vA",
  "key2": "zxqSXupiWabymHTuWcH5wQhSTRqnUmQprmstGjV2FXpDg85Xq6AxFd1524V9mJAbNV4PNqrfx8jimbHX7Set4Wm",
  "key3": "5YTEMid5LTfWmqhSsCjn6SSQyUsUDLbfwjhAgZeqxJBTqMNemHXpJa31wzuabWws7BvGnagfnz2oEBdodDUFcHjr",
  "key4": "2dx5nRrXjfxyDcfqY3nf5B1vtHaCfUZF7aQbGD4Tco3oeP2XwwTX6DNm5nx8PxK5YsxFcMc7U2JV7qnv6HTySBN5",
  "key5": "5yP3p6cgvpaBbsVijAGZ2KjpyEezECm9onjy1wLgFdqtnMJgHsPxUsS8PcjtV8m2ibWojpB3ATCJ2TpebfBM9Lba",
  "key6": "2XXuc1dErw7nM2SakS3tgPUqDFRSMuyweErwdnYudBvvP77YHh95qBpzvw89WQGCBLYk39zFh9t9Bfig9u1GCd4T",
  "key7": "48qRyMSsfezJZS3abckMnBYLQZiYtBPKLCJAJ6o1N5BHnFUTUz3ZzcW3ySwrqKN3mbbA5YkkcFiR26sLDqaAcENX",
  "key8": "3VL4dUq7sULbbLHnto9rfLGVdFCbAFRH54wQNH3htLMYMiw1K3ocbQzY8jPXM4yYHHuqbh2hsU3TVBwGYUtwFBG1",
  "key9": "5CjMgpEmacW1YyVJQ42DLCtWLEqe6HQ4e7WWf31pmHS6DhmoP1YDoxYVZmHyQ2ySTTTmioKrsqLqWYPpN5PcLrcT",
  "key10": "uG3nmomXw9vDa9AzX3YzH1hVeVJsi4AgFtUN3zi35hCdLiD2cGSrJSbF6RoGDKMk4wQYGuViCGAfREN2RU8bDJ9",
  "key11": "3zsAdZZWZeZZqeTx6mcST8VyCr63ckHFbSGdF49znYtyd7fDAcS9ke4skVhXmMMSX8Ksja493LQNHBxo2uu366Cg",
  "key12": "4BaX6F95PU8wPZ9NHVY2zRnXBCvWrJxUE8Dv5JdtU3LadpZeHvc8rW64D9LnmeFi8FgqA2CwF57siFuzJipANYQY",
  "key13": "612KDXuNo9PfM1yrGVjEn9o5nrtYqnu1zGGwt6TLSKt2vZCLJXAxKLcoSuGSUc2H2HDMoQYiJZD5VVAMAjk6Wicq",
  "key14": "L76iX15tdYgBZCyexWWYVrxqXFbxM8QV4mDxzqdg3gmDg3om5c5hpTQRP9KWNAAqShd5eDKC46yFn8KZ7gSMuVh",
  "key15": "317m2i1NM2QtvJrjJ59Xhay5c2xVZTW35w2bNppMZ73UmyhnG8QHW33BGMQY21Nu4ySUJ71NXhQmXPAYkHV2X6Dt",
  "key16": "2pLxYQcNKrCwFUjXXCYYEf8RREVFZcgxRPs5CGcQESjLMDEefm39nrNssNKnVJAxQE3fkNhPJCbktsEJCBJhajUb",
  "key17": "e8mRVDnPxvQxn9WdRozJJPsRP1XrSPubPfrJMPxVG3eUV8F4GV1NuBz2u6Fn7afWj5dokmuMTp7bCHBd5Pghrux",
  "key18": "Vwn7x8T9Vgw2ZaG6PVDZeNuYRgBG7kEVCYLbRbah44CnLhxKgpHRVtsJn2ukExVLnEadUsL4EyottjhnNhpMMDQ",
  "key19": "nS3GDgrybtJdfUhy5VBReM65Q53LmwPE46LaHymS8CLjCxqX6uAyKKr89ZgsVViC71p3h1pVY8CDQpFUDGY6KQD",
  "key20": "3MgABsTu9wkjtLbV5p9aT4cJZnxh3qVG9kMdFmmQHY5oLFGcfVoQ8MGMydnEJ6uWerUb5gF5HW6eNtQx2wBXKHPK",
  "key21": "4bRScEAL2gjFEVKba9z4psPxeSE9PYWLZDGiupxpiTV9VFmZgQcauh1TUK4KvL9gM6NF5reUQ6LxR5AqNuRJ4SSG",
  "key22": "2GZXCaaFga59Xa8ugWd3Rnz9r4q5YQupYeZzngxwoeQBDqFqmRKBAdLJSLzDJaf6mcqToa5KHfebdCuD2wMZ2HSN",
  "key23": "3CXFoo7AyQQ7NdtA9zq5jkDYjCL111MGMA52D18JrawgBcAXwtAfG6s3pJd25oS13wt8VzdNEeBiSW5ZGNKbBMeS",
  "key24": "4EaP6TsRfPN3TSy3USq6ggwEgsMZBb37AgWAiSdYuCYeL6NEH5Thvy146WTgm7Mf59krKJmnFCQon6FHsL4wQQXy",
  "key25": "52MFoi2NK9VukSpQTaF3vQX9aKfr8mSQbPqvs39gLP1c2vphh2CDWQZoaVfXyf6shyLMbqgS7qFDrZ8HX5vhSZMP",
  "key26": "5g7YQh8RSWxKDmGMA7cZNEnZs7G9UejHXCPNmG7FtAfT4HE1L1ygzCdjQkfrTmC6f7bhk2XWNpuxh3gpaHtUB6mS",
  "key27": "3Wo4dfeHAxRb7tgF94smqJUTieJPYjLgNbNADkWTm6AK52AFx45iGcgJSJMzYNyFfPqDP3FjWTjivho5Mj1MoJZt",
  "key28": "5vHSDJFFueHg7zFCMoyzwLYbbQQx3xpuSLaKnfhHf3xtprRwsDagWTpv4DRFSuLk4jZoXFrGbG8Eov1cHdp2yDB9",
  "key29": "4oMvn3hmXsMSPndT172hnyRSwq4dmmUSWKW9gX8EndrfN4qfTi2HNNjWkTw4z4SN9KjRyTUyNV2Dq8dvfAnL4cPV",
  "key30": "Ut4Ajc3o77bHX6VBHEihXVxwEUC5QTCTtfvgWJEsAhW1rXZuJag8UZ8EGrTNEMSv2iwyi7TxpeN8Ub4R7U5Xc5R",
  "key31": "48S68WD9mLcGbry9wU8bdcD1oSamFVsEVAo1JvYEYTRV8fpNSqShS6hTj7STqhsrEwkjb7uuQ7EbbgbAuiGp9JnG",
  "key32": "5NxttXSYAZRV3i6AUTmHb5VnEpEoJeajYUtSpiD9xRns7jFUebUSTUDLeE2bgypfMMNivWmUz13bEj9vaeM7A1jv",
  "key33": "3yxoTDEUx9n57jRVDAZZ3VV5vSs2LDDrJBi7kA87i4xAHeqzPY4fysjQn62UudnLRRusgLiA3wz2BnvGni8tQvFN",
  "key34": "5PEos5m8UHaJerfE36DFK7iyC78zuh8CXL2HjNLy78z8AaYAteeoeZQBuadY5yaVe9a2Ss1cWgKDwKRCeSsDKTeu",
  "key35": "LjpaNts7Y3i3UspfEkViHYMoGf5Gi5w146xLzMsRej3BbT1FiBRaJuRkuQgokXPzd1tG2Dqe6J1u5x272dtwJ2b",
  "key36": "5532uXtVyHxtCmnZCTa3gsfngRUUjtPAjuCbNW79XcWcnBCEdTnB6C2xVGXTNjiLkWxePavXfS6rS1FBn26ym2Z6",
  "key37": "2Pvy1hWyQpAaGCnkpDCqi1Zp9tFHTuxyXeHXecPhA7d7nije6sgeq4GciC2fBA6MX8p6tNmZ66hZGztK6WRJh4yF",
  "key38": "3anr9DUWugPqFh3nWNtGC98AYagpsRA8kmXt1Gjo58rCJ6LQ5yLrKeTUSJ9cCHrjzcCLhtAbSbuDaj1Nn6t6UBDb",
  "key39": "59KzHr2A3GvwuDXQnDBkzSrJWw41gXJjMmxQXxqS89KyKqZqGMD2bRXckcByDDsuPyYkZ1MwRHHDdgfRJUQvqxs7",
  "key40": "3hcuZ5dz86ubV2ez2Jd7J2XL4xVqBTapDKBVdaak4Kq9gJuC88gasFxf8QkoxKRwMGDk3cQ2yjtkqRxKskm4pN4R",
  "key41": "5PKvCywuQnmm6NQaxDfav7QXVyTGStbN6kZZZXxCFfDSaNhvrJeYVYdQkzjDqM7GqqoQj19p5qcayereuT8FzHiB",
  "key42": "3wszTZHFBjacsM1cY4GbXjDtV66yHuxp9aHREv3QqFpB9ZX7ThfthN7w3V8zCXiGrDjitUcoBbqjworQbzfc92Vf",
  "key43": "4rMSrdFye7tMbjPVyhsQznsWLKqgn9FzLrbYYH56Le4Zczs9X2dfRF573gYJEUCKuCX7kHudg3fVa4aiw1dP7Zsk",
  "key44": "2tev42rjatFVPRgoTvVJYYhJMNb3jroM97cKc74GkNUXAjhT2sdT2NXubQMYHYbzV95BHGpPvVJtsKUVXrZKrAiU",
  "key45": "4rJ5MZhhytcmbPGabNLWtA8A7DCDjjLa6mzqrS6RRu1Lm4tprncnEyqFbiVN3v7R7XRe4vagmHc7y4RZ8uUtE4r2",
  "key46": "3tdEaa2dsxPExWLB4mhDWFqQBkD7uihx8Gg97iV7xXctMG2aaUvcHCnYgHBJ6wwaLREe49DQMzeM5gXBchYnwMbA",
  "key47": "4no6VS34Jx3WbfbVqN8sXptsWPYQDvkaK8wFvyjZABDBfT7r9sEw4EpBLpUrMHdieqj1b6msCYdRrVew3o2a4P7j",
  "key48": "EGfCCnpFS6nGMhZbyFewGUfow6PxvaHqmB4xQGNAewxKMJFCVKBFpWKCAtpwnz6EE57gExpKQnpDTZqe7XLmtjn"
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

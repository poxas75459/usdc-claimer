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
    "3vqFqg22dV6XDxWs3abeTVdHBmsfnYRm6ZCeBpzyFGfYpWkD8gpnY1iSy2q9DgZgAmY2QvJc3crTje43SRyMpaPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxGoV9ZrLJLbgdAcihGze1sYZCyMaSf7i4bZs5vYiAjk2BXurADQQprBRRuPK2e6L6BKTzYUGQTNvCrM8cz8PKf",
  "key1": "82cwqATb1rSY7R3QQ2b7YihBNnYbc6zwFdBfpLoZEtjUu3R8dHWsrWcNycQCajTR9Br5w3JdNmgzPPgsi1gQ9S7",
  "key2": "55w6XrRYFVPAmWqG1iy2tga4zmqKQSS3KTBzH7y44gjrTeRoq8E4h9yfQRxZ8SnAoozDCv4rcL9P8KEHTPyDtjyx",
  "key3": "2AUaMu11ytmAYtGnMGbA4bWURVgeNDDDkTe5sXwoUXdSeN8QRTDsQHGNrbgb3CWMsuHAkrhGKZKsyoxbUENdiBgQ",
  "key4": "5Vmzd78dYevfT8hZXaXcbAmAznPWBzepenPVphY6B6EYqj4xaF4b8kfr5U2yoGctNq24qQ44C5G8DACEAHzqbm8x",
  "key5": "29RsmJCV7B2Xq4eiCUpw4v6VTBWa5hMj4trPu1X1UYYZgdSWECHtSj3nkmdBfpG1Wivi7KJEh1bPRo8bCAGBZTF8",
  "key6": "ETn6Ex84b693VxCJvoTjMsUriZSPgzZ3jEdFPNd19F8PrtgzjcsfMNLHEYYLSJQUbBKdcWq4vb2cpmKemcCjLPW",
  "key7": "655aPWQBanXNaYVngPi3tqb3VhyMDt2YYrqLvsaCAd1es4XR5wBYE27mDkCj7aohbY9aqFZTGeRVLCq9FYyAEuKj",
  "key8": "5JvusSG7fHZTMgPuLNk9uNDXrCiEJbjfxGq1MUdLYWZHJbo6gk7pd7sEGZnUBf2uFDPpC8qVULAUDfLFcpdxkgZs",
  "key9": "5rd5qSDTMbfAzWiv7tMtBo3pLPNbJFVSCdRVTZc3WGJttuNBkqhSAGThqVBWATfrt7bsVPsa9dEkE72NE3F67bTt",
  "key10": "5fKRZdBTUDLLBM3K512B7FgBc1hMu2pjaFjFNXwzm3XsgMGRdNJHNvS388VFkPXSoPHBH5YpnxjsyKfTwGPJPpok",
  "key11": "aKiQqVufmfLkrL4BFfwFKqzJAapoYELZhK2yxghq4o1Y47vn4gKL1ViDKYdbDMRm2JUixqn5nh3exW5zizsgFMG",
  "key12": "4xfRnGtkzkGfexCtiJLg9m2924KDDpWSMcbUkSvMir365fmVtTD37eSYnwXCF67Ko7DSq5xZGrh62tWXYwzK5wjp",
  "key13": "46boLt4NbG519uoePhLDQuEXwCd92im7CPQDuehL3GWtxh5A9bdAxbX5gjpgjoKqNZycrQAU63qqKiSg3d2mZA9B",
  "key14": "3oijr8taNJwsD89JjbqD8JBE28bmwKdKpLcGTYcJYkiNAsP7uLjoLrUuj94VCqQQCEutT7FSucg16zTdewzriHcj",
  "key15": "3f5vdJuCLSBwmNqxqJdHUTu9gt6hiQiidDFPap8y3h8MKGueTFjb5Fv6tvZN2c2WekQzNsqEYJTctS1HGCt7jrHz",
  "key16": "5wgWzb9SMxEKBLaLgCupDzYsmdVSY21sa6t4rNUar1ng8ChD9YkdDUE19tnPcxxYNtRHuXx2X24MJB1fmVYrebQt",
  "key17": "4fPEMqpBQk4P2fsyRAhhbWPgH3A7veYYVHoe3NxQF4nakhsTs6goUMStwVhWjD89rmWucCtXV2WB8fh33uUKM2Ss",
  "key18": "5d3XtQWdAJryu8ar4ZqukBswWKXzhrhC4JrCCVLGMLidwnircQJLUmW4BuT9N8Q9R72cHdgEfzp6KWSMfR2Mf6jB",
  "key19": "4FQhghmSamjgqLPVjgrUSojBgu7VWMsPv7Tbi77AJES8nFVPS2oWSeQBq3SbbWroc3UrUsfvYeTbpE9TY4czKEoj",
  "key20": "2ZQP4sMzU62CMspCgXCe6CXqfdwn86RJMyDJiFhrq5d4yUmkeM9ZCgN4g3WD7Q1kF8USRyVdg5qh3uFhxyAxFFSR",
  "key21": "3Sv87mrD1RtramUMvwC5C11E7mW7FSJ1n17fnDb4qqpdTCSkqHm4XntzBSdY9bhr7riGZQRDGCgVqMn6SzvyAMy9",
  "key22": "5K8QRWkUVRVajJR9yUzEiJq9Qx7fczZbgpteNvUWu3EqfLCrk2QAtzhGLwgiWcJKeQGDgZjsqLQJoScmD9xBEfXV",
  "key23": "sSVpaRKKu3basoM557Ncf6548cbwAQPZvWErjMXXeNeJekt2UJAhurkzo37zxvC3eR8U4PAVeJ9vmQR3VUWsd4p",
  "key24": "cgMRJgvSANVqUrFCy4K8kXQK7a99VdTMYknLgPdMAzicnogDRzxHKLbjnfiPzqgopGfPVWmydV4mz2uJpoWQXQ4",
  "key25": "23NhHf7PbrDN2G6LseVtrzLVgmVekZdBHyZbW1NkenMAJbEejMSqJS22iBUXDjhPHsjoWggkL5vvfAo74FcnHJhS",
  "key26": "3dUwMLJiRKfqSkeJRQ4WXGX3tcLePSxLeXhs4sW8pRCunEEbR42fDPXQcQvV2Cyqq2i1PjqZzF82ywcQU1TWfjvo",
  "key27": "2PLmEWmmWhjL81JC9ESCvYgMgqoQHdCszVXzeQ9rspcAd4M33i9yLyo7wegK4mt68K6z292tepbWfRibrr7YweCk",
  "key28": "44h6w7MPPKXvBgUu6xEUDJ4k9NxQVyniagMvztm5j54KBpFxPyRxeAneSQREVa9w2LZ14vgurDmVh5P3jm8tz1GB",
  "key29": "656Qz4VXMRUUN1M9WAMe9JDXR3WJjBsNYnEg4cbYcyEohtpL5n6NShhJHYA6kjycnRRK6i4WLgu4NFCAGfGmhrho",
  "key30": "25qKLQYXtb7SE38QrQzxgtJfHSDRSHr2qhcr76Pqf2docCgUFvifn9gweLtzrmUfLRScdjkcXzZTe8XWN5aCbNkC",
  "key31": "53Zt19A4zXYAuMVSX9b6KtPs4kBWMtPMdzoW3avMTH3HhyMqRUADAnessFzARP12cbTgk7EyNVABr62sRPYVWcWT",
  "key32": "5sQrLfK5E6zfvwSX5mcJLQsnEfbTxzoUC7oNHagU1kzU23TStDmfGMhevHEUrx6krKwAmVLYMuhhKci97baygHfL",
  "key33": "3375XXUNSKkxsTbEJqy5H4nnzxy5Jj68e1QFkJB8Cou1jVZbd1wr7DQLU3Ri91a6JacWZGjmwvQ5dFU6yDkBqxTQ",
  "key34": "2R9B4wXm9mXU8SgmWBUQrDXFyUMMBsZzLCFDg2Duy5aqvcMCRTwsUqFC7HxwNwrposLy2SmhKvKJEfqSgo6UQ2ao",
  "key35": "6wFa4kU56zfckFcKJqak3SFtsjgbkb87Xk2bMvMh5qX6U46ppK5mG8jzotrvmhoz1NbBoRvDKum46y5sTvMBNPw",
  "key36": "NQhsHfNwNpppLaFgCXrhzWZqPEPqnT8BeGDUizjCvYgXGMzZMLRWjKnMtDrP2aiSogXtvXSXrFamrErjWGSCoGV",
  "key37": "2Qu2QALTyoi9c6ukwQm7FuRH764KAi5e9hsT1o3n3GwNwKfv7Vp3FeeJsHYXjamsS6Nd12rTHhLgcSKuHjFscsDn",
  "key38": "2yXWqSCNDUUrtvgDDbumZN1wNkVp2HpxrbvFjGCZ6c8xwLZzUEaBSZV9GDA6ew4FEvVzqrW8V92pMBvHwM55tnE5",
  "key39": "BPXCFGvwxnxTwymPyL4p69qzZdTTD9dsqGKxkgvV6KrnEnYS67EaVRTxy6C78wBMaFLmzYC8XqRRAsskRT4Z13h",
  "key40": "4jXFRBsjCE7GjvpZtyayptNXYhwwhZabp4j8EdC2swyDzPkwXABhR1TWgAoqM6AvQoLCf9FU6BT3JL3zgHRspXQ7",
  "key41": "2cDU2r8b2zB39Unazy6Rm1h4nnnZqJo6F6UkweD48awY96E9pdAWUuQs2bQTZHMmEoyyfhVNsGyNviN8bfAQyRno",
  "key42": "2NfgVdgmwHS2vjDijjmLHBv9b19pNP6XeMSHJgqBGmJyUrFp4nZ6iathi3qFn5rwGFymUiPknmeu53mHCgvKEDrR",
  "key43": "2a8mW6fL4jiwBtVkVhiqE4aEsS9kfqZ1aPGtyp4ogWahAkuqkYdPkNdGWuEcvZ37WYXXxe987Q74KU2ry2vG6HH5",
  "key44": "5bEiHNJNHkep2k8LrLN82kkis54rugKSNdiUT76dLVZRsf3RFBRKg1AdYUh4NS72MoxBC1qsRqiasJd5JHGFCQCt",
  "key45": "5JKssRA66PS1L2kBRf16bACiLiZY2E2e1PuKrSbbbapnG7MTzCWY6F1KBAiVTdKmxYQfwpjQkxMrHxYUgGnqbQVV",
  "key46": "rnrR3tgMaFBftYaBHQUbcNxQA68Pqqs6QxrZeVh5cMk4faViTeYZW44BZeFi5JDTGixCd9GgpCpUoAxqUERjaXU",
  "key47": "26CjiNVVQprZoFF3VEBH7hV5qDt7H6cL5kJf3evKacZ6d24Z4E4cuWZ1xUCfaRSMsyeSGND5MCq98eigUuesZgtk"
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

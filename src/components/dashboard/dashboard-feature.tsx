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
    "2WJBMUZq2QKQwLLceWHy3niiVLZg4EfmysgwjPPXFUN1yaqRtmSku81YAGTYcC53tPQxuZC215Gdqc3P8i2A2Cmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nbZ6PkAKCpN1mymYHYSNAbmmpj6kKMfEJYRn65kSSAjAd5YvNHxDvu5PsRyAh9HvmZxx8fA3eQupqmEE33YR3N",
  "key1": "2dgp1LboQYq9P4nCNNEh9xDatth3nyAAnoHUUVCFabEMQ9afKVopu4QnK2oZyKSCVmK7aYwZW7araxZJTux4wWFN",
  "key2": "4Jxg9H6mFgwwr63Mcz5h93rh9g35Rm7PsWdDJEda8WywbM5BjMrFj7S4C8w4P3jCLaqgCsvpXa6ijQGn1KRBN8iv",
  "key3": "3fnrvtjVJ6dqBfPs8gEbKB1hXPxk8MqUY2FcqLQzcULzbuUiSRcNzRsxNhCLzg2E389mHtu5rbxgr3sQU3nQrjNK",
  "key4": "3ZJ8d4rrSgaxvNe1iSaagLyPXDTZ6F3k2VkKnk471NqCaM9YgG7n7sQWF18FXNa5gsdW4A7QzXgYDxLTJdsQzEw8",
  "key5": "5UjQHLbY1K5RTrLXEBirvLoHaAzzg5WvH5HH2vuCkSjjudmqTdWhrBTw7VG5fqk2MPvS9J5nApgiuiMxTWM4mi2D",
  "key6": "PzQTh5DqbZfUXULumZhaej88vaSC5wjCg5CXyhDo6HvaN4GkPAXLMG5x5b751XPx93AAnADhEND1tncSTguxWML",
  "key7": "5PDMyhixyAFMPdsv77kWkeEa42YdFmMWM8dHCxqXCB7cptJuf8D5xKDChCkZPJhRrwefQY69oioFZypbKtZH43TZ",
  "key8": "5wiegtQDEHGnTosFUBiTL9vG9ZpJZmLkz1nmEbJ64WA1Pd6zWUsFnvFtw7faQ7jmz2FBRCzjj5nTcWEaooeEJQD3",
  "key9": "3e2z3vTVxW9ZG5PVr8K4EQ1ZgAZo8vkVmoiGXWqSoZyq9vV754QvJnXYww8aVC2umr8ChGdxRrropzLv1LgYm6u2",
  "key10": "GLVKkcPSBSMMo6hrgRNpVwh96cGxzgocfxsKRMxkoWnVMnkGTG51WE8ZBsDegbVHVm7UjMVXXf5oJQaEf5EBRxZ",
  "key11": "45H8cxtQogjMgmW2kPom4xiaZLRqewYKVUs21xH1JitVzx62niHr96RBTnYtyBQX84nAABeGj9KrNzEb4Rwp35Tp",
  "key12": "3hFLacoQgyEAcQqDzfVDnwDFaJc28AMuux4BDUH6wyWU32dqRyScswE32LVehuRjgwfkedoi1iy8Z3Y5PMMPMvD8",
  "key13": "2o8bhVXjypgZh6ZiTynQy53Ga2CerjFj9wGKWuMrxcPD8ziGozM1bKyrPQAXJK4vxu7qM7jK9L5v3bBndLBfgCJn",
  "key14": "5pXKxyKsawNh74FzTQvTM8Sowe3uCbkjKJHScYRehjB8GYZVfFTQsDV9mhPXeSnhewyCFVTNo6R6VHiqXQSjXXpQ",
  "key15": "3GV3bZeFBSKV1MZAdVuBu7kBassMSowreUCvrYzsEbXjQWi9tiaP6VcrYe3AcGsmvMQuRmNhbFrAdPXmXWH2Mix1",
  "key16": "3fEzZF7sxwgZkwFYCjmER9CBbbNFGMxMVrKf8cJbrdRre3HqrVRLwEnyARvLAEm8zSWrL7vBzZZfSTHsjd5naydz",
  "key17": "35iPZtsAKHRY14U2qy7TCCSKL3ZUCSn3CgCpUTkVzG1zteNqHN1Wf6gDLUnZE3UVps5nX5sGhirHm3fQpiFJmRq6",
  "key18": "2vU1SeH7ea6hJRxFs778Zq6wj3DUWaXsTDszoEACZr11XN7UYQjxmuk5HwcVZJ26j2kXA3LtdvJYtudVs1u5TXc1",
  "key19": "QMfULGkxEVtiVJ4JeZtWteTJTCdbBh8ZFrfKvfK1PNNpc3GzxUnneQLKwGKS8AeJACTki9kCKQTKzUpzb3geWwT",
  "key20": "57taxj7m6LNmr41vgvR8gwPz2Q2WfmwYJX2BYMVgZfiyysvBEpZuUzU5Lok9JE5sabbfxBSBJPzw9tV3ZcnSnxuF",
  "key21": "3rNQfdqZx3YNHVB5HcP74nHMa5ZoQxv5i2VuhkPeJs4JiJgDix2xBDjS6B7hT9BNwNSX4jY1Bn35yiaxBgWXtR5E",
  "key22": "4MqDB94tj2kVCUcE9aAv7TXczVNMRqmXTYb3vaN3NX3128Qm97uAJBkRxBnf8J5HELUVGPLUXKbqpuuXfjmU3MTz",
  "key23": "41qss3W7akdY9oLAUaeemj7z6XXETLVwJaNYeVT25eZbkcie4pGxbiayGHy7cFS1B57UCfmCAPW9gmGavjcFgMD9",
  "key24": "3vrHvQaqWRvX3nZiRdMoAxQmjBRksjayuE2Kv8CWVNJh8A4AwrGxx8YRFctFwCCTsrMqpAmdQtw1sut7NqSZv47S",
  "key25": "2GiDV1cLM6J4RrL2T1dwj3MM6pBYX9efvgEc6LJq6W3M712iC1SYh3bFzwcW4HwJap5xrCd2LpV4X2S3iqrcjR5T",
  "key26": "5BqGQDGVuzJMwzNP2cqcrie9KQbtfcQeT3gsidYDwC4hARjjpNJKnd3FevjVBDTbjkWTbxk2ntL1wmaRaPkcVy1j",
  "key27": "2A5nYjKmLzZKExxUeqP5MSFVLrF49NTmmaHqQaZYQgoxv2J1dGSxgU5zBrQq7ieq1AtPuXJLGt3YCoNHCP34x39g",
  "key28": "5QK16TNXQD6syLX1khimDDZdeNpmziYgdH3FUi2xXnEdyUNNmchgpcEvQVHcSEjrpgm8oRXGHMhR3dYh5jb1i8gw",
  "key29": "2LVbPAVmdaMJEPSwi34XJj1xHCiNVwixNUoMAyvCLScpCezP9XCgqdfqojXk18QcNnQXF5G2arZXtU6sQvsxSy2f",
  "key30": "5NHREeSMewVDdc4vhj5FCLb53D9zi7urDhyTrU76JZxfp4mteabFRxEdmM5MmVaPjij4otuM4S86vqnRzZFeVz2E",
  "key31": "6EXh77wNgMmUFKYWjkoQCqXyhj6v1zEiT5YsX4S1pweuyQ1QDVRY3wQiUqaX7oXv9eBMJ3yeDBFWnF38asgDMi1",
  "key32": "49DfoaLo6zERS6JTk8xswhpJ4bCj94LkxbDxGjsTCLsV3ffDGJo9ZbzETCAzhVu5h97774879UkWQ6VvPgziYoWS",
  "key33": "5T6mvu2XEargHkDXpsasiC4j5TdYECGNo8H7JpLebHNttkj6GrA96s2xX1nwCYbFNPhYYZoi8wbTARB1UyuEreXt",
  "key34": "2FNQxuZywcWLa2JXpFStiPmaxyuK8XHW33JDSjzpbMPP5165e3PxP58pgTsRUkctuM86AkYXKqUydxtA6DurEqSF",
  "key35": "3i5bmzdi4C6JSFFzToenzNAcdmpu5BmweeZ1CfEWndBukkh3UuFry8FRZuTye4mXpFoV3ZvXH66eneuJRdUPjoyY",
  "key36": "51oEL6MtehKpvfgRPshinmJvuqKoGwbDvx9rktrfEBiXvjGAjfskYdWWrXCaN6wiuaKVvwnrqRw3u1PJ1YDQmeLm",
  "key37": "49ryNruAuiw6xbbMkHqytnQQ3SvwgARoS89Ej4DVT1kCn1K8SirXPAVkExnY3ge9UdrFChZkSmA9eykHFU35RbYD",
  "key38": "3Ff9uhBMHjHZmsZsE4QdGkNk8kr4K4D4bGXLxBgbsTHWxkeUfJy9TkFMdm9H8vPo67GXmkVkhVN8sBx2LpLQDrQp",
  "key39": "62H3fp3xftEsVqCx8Gg54MggMEoJd6p9BGFjRSzh44BtTztat1nwyjSaHXXD9kqTi9mpe3HL9SWvEy9rQQuYFgZo",
  "key40": "3E1XFwpUkjxcfMyBQGXvq1iJVds5SXrxTmWMDixasEYF8wcrHyrt6GvRxNNpuSHsm2ExFRJq26EYEkus3wBHeA9e",
  "key41": "4k2NHQFjfdwgA5fmgpCRzYjoLCyJDF2NniQb7JZFfvJcVq4MMuv8HAVoBX8TkYQWD9gv7AdGqHJbzBqQvd2fK3cm",
  "key42": "4nkuq4dcgmqxagS63sTiBcjY6UFvX8p7JTFTL9643HcGf5PBaqwqvAt1FFGBsgxUSHZhUhXzdv6PTJyzbBRTHyCQ",
  "key43": "2SogeF2s3UJ5mGLwUsReoDoQH57fhLdQjME99jdUb5kwkhMMLcTArHqJGw4YC233xxxG1MrA6FiJepMSdzgtMhfw"
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

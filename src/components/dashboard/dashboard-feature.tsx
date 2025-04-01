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
    "2jsvmEGJz6scuJN6vyuyjx1yKF5ydfyYzz3gUa5P2X1aeDZMjykZgEACVsS8DMpPsfi5cAHDKF6CJpFgsYKWVUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PByQDwY7tuhsz5PWhss3Wwjm8abMU84wMcM97yLMh5pvcfpB5aGWzvnuKJzKvRjBuGhqjRX2tpxkDYx31KjHHoX",
  "key1": "4zbUGksphCEdv9XWjuaJWBy3CGWXaGHopxyxo9tsRQgAv7cfov8WYiAz38bcE43zXCVXmRiwByX4f3uryKT3mvMC",
  "key2": "2SUVTRhTMRcWd4RgNGf5AMC4xTUfQTLLsbA4S3khDfLr2qZk1DnnrtQeT3MG4PWcWSo3aucxDE2ah3Be4Z91Vone",
  "key3": "2kMhsAjLFJ67xH3GH7gZ1KoBANvJnYS2jLLHPjaWXTssTnY3nYHCWSHV4KVLWCxwetLBNb7cwDSCe6k9QnNs8EwE",
  "key4": "4DFfyT2NBo7kMaJxEUGCEQJKKZZzyyBWqVGQC3BwrRgzEtcnLVmRJba9zMr2Legh1TADwxPbWCdXGt6JUWVLJmrX",
  "key5": "5TiKAVFR2ZJmQNPfmXtTYs7TJXgBVrKrR5W8QB3o7ygdS8rGAgRPjU8gJEC1efvKaD3jJwCFHdJdNzcGAEwr4Sb3",
  "key6": "5yQGs6nUUiuUNshrwJxNzg2XQKMKKsUcfLp4EDQFD12cSyhCegjZjQbYMdDkpP99EzANpHGSsy7mfVaHX3Ky4EFz",
  "key7": "PDUZdKQty3AF88DZ2vDr8UDm7xAjbiPQXnWVGwmWCrKy752qPKBmWJHobc9zN7t1aPJxbyfqBRxDXPQnAmNM3Cd",
  "key8": "572xa4ZtYnwyUv96VF7eDFwqDf4tJw2xMUZ5oty7uGQXe1Umj7wSohzFKuf3qMuvWeVf2xf7jYDDKEE2wxCmyKvp",
  "key9": "STEMmBE7HKoysmTgPQYY4WcrpLhQWQw6383w2L28dsGQuVdYrnUr2qvcPQKtwZpDUmdcxMJZ8hLoveYgX278vyK",
  "key10": "27uRuGPSJbrjY1YBXaDCCTEr3CvF7ALc48sSmPwCWMB5s7R3cr3y6XvPYxT5umnnDjPemvjLpp4nsh8Be6CR1rTq",
  "key11": "5FXwWmVvB3o8AgZpVE1VjuGsNbL57JAkagzupmKPgK9uQR8M4ShYwKADMYLftu6g7zmz8uGoigRBtuGN6mtLAYkg",
  "key12": "233EAu5SBVSoyhpx2yxCP1dyWvUFxh965uoLWofUzqxC47bW5Xc95CYhTMz2uVch4v31gVG1MFcFCRNHoTbxmg4a",
  "key13": "PWdBWs8dtBzFEQDdG1jKxg5WfFgPAU41Z6X2wgAxMmZJ7YitMr8xEuNtPXLdT6A8rHfQarrQrFxDnWCMYRh3sTs",
  "key14": "394QvRchcb1DYNeYMbKeD6FwtY8wJDSVwFncURtNoEmCCHkuXDVoa5jURModWYopD1Jaw8YYEwgWXyHsS29WRDuu",
  "key15": "3Ao2W8Q7KZFMrvvzHrRjpGHqfgbenYxR1fY4rg39rdsZv9db158wyEJvBssJ9GsVhu2Dx6P5VZeQeK3yCA64xaeK",
  "key16": "48fuZkjE22BDHURNMYBPN9EtU164aTRPKJcbeh4jaXcRyeSrrVu9TuYyJS8xUvCrhJzrJb36ZK6MdBsRRmhRU5pg",
  "key17": "4p3rFpCQK233bQt1c5Yiw8pugkbrg6gYaYaZHih9qkHcSKEMFHwTKtZfaseqybABdQvSJ6dKe78cfY571BtzpQjF",
  "key18": "64sWikNbrn2B9VeUzS6Ee9kDdiK5sHVgdCYRf5AYBsEKemLNej1yf5HKKT7PdHDsbDNwzhAZXTwtkwk7rqEqcWGu",
  "key19": "44m2YFz4gPmxYPSpUDNsJu3AM9f6YUst1C9gmvawVwMJqvm1PUP6bS3hZF1Qzh52mjGzhobpxu9dDXpbLRChMtEE",
  "key20": "5uwRRu7DbAoBHtUZseeRzVKGTWAAyLiTLx6PjLiQZXgCLVXmm42C4BmZPdBFnpf5S6iraa4LwkF7TFvz4umcpfzK",
  "key21": "Y2RHdYU9b9BiMZuYQfmheXeVwZFugwD5rRhpPQMYchgJBymZXshabYj31Fu6tGagxZ56HRtzNebMjQv1nHRdEFw",
  "key22": "2LFrDt1PXMrg51oH6KfVH3KGy94z1byhH2F9FwYQR5sqqBU77LeYS4ERmSbvbGEkKvFnevxbT9ctJSr3pRijyEYb",
  "key23": "4onwkcbqDBGHGqyQzSaPZb2tqFfhoHz8fPG83zQi2NMe2oTmv2j56UDGXBUk3kT99sPC3uoYLfMhZxtkGezcJpTK",
  "key24": "3rBRZp9YN13jSbZqBcjEQGNBDPry7xdGQY4UyGJA9h6AFuwfdxb19S7fYE2MGopyhrWQkd5rMFtTFQGzZP8cDriF",
  "key25": "MUwndMe9gPrfBgUP1VSysFTPhh3WcZt41frVe6J7vYxKvKrf8Ti8DJvUFRxeqeNF8VXmP1bZxpmV4gk8T2nFQ3u",
  "key26": "4vGq7y5dC2TUCSJNTiquYzRK2SPQwDbgM2iBxTvDP4RssdVp6zrG22hFvQHDPnWvG473nNQzJDu3qZWcLNm5Mfsa",
  "key27": "DcTAGiLth84tmD5M5NEGJ8p7rWamwRq1xZPNYU8H5W9TEZzce2yt2aLzJDfyaEb1NiwzeREsR35sCMQwSpYRorB",
  "key28": "63hG9TNTjZqTzczBKir4jVy5XZNVXngKvvDseXbzfEGdZyfudfeXA3HnxbTuT8hfcZbSXxYN85kWMCbrnh2jR9Hf",
  "key29": "4fJeYJFhzEiCPYRVuNu6ay3XQddL2HuLy3ozuSSdHbE5pQqAiQYx1KseLJQ1jsGFnAHArdN1v536N6aHbmpvoRLp",
  "key30": "4y7TJ3d6YvwNrP1qdfqStNKV8RBjbYSsUEmUAqdCCgGDvrM3kLFR87PhmpGATfKWHBwiW1Ti2H1EBjK37n8PLXte",
  "key31": "5oCSVUDUXHd8b1rTmHuPetfvV9kHJ3XeiF3CwhXY27jGVWrn5k2CwmKXoTKqvSDdVcNcYuy2tNhEPWSL64KuWaAt",
  "key32": "4jVXwaVqxSLu3WynnSUnB8N39hGVULguig7vtzRzCuP6q5wPmk3bg7WZgt8Xug2fC2WiZPyV7xc4iLexdwuydo46"
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

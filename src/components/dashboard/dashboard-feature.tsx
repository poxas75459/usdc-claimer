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
    "5sJrZ2vKRZV23aCCSmyyWywUH2Y5Zyzy6dz1hYLvYbQWfz4LEuL7GvrB5Z1g7fwo5GwR2GuuhUUC6WfMVaq24cJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHeQ7Hm8TmVQ4NJTANEhTCzWyxPA1bs65W4mvKE26P7EBtj2WZv4f7bPCcLapj9Vj32meLZ6VeXW8mcciBstbjF",
  "key1": "3FM7FDEsDawzK2ntFG3wr7R3qbawDhVqKYREpnjzyXCKPp3mcUGiPXfxKvcxxoL2QEaUbbXsVkPb18K2QmW3Tsy5",
  "key2": "3DRQ5wWUAybukUWUS6kAqhNhs8gBYYwp7sTuQYGmRiEirDJLnrz9jrgCHECL7WnJJFKaxdMg2TWUDZucXcHANYL8",
  "key3": "2tc7feU3utRXaSXJLRxwFYt6C4pAoqDggEzZmGb5XkLQGL6mnUYQVggDEPcWvgRrsmSEXLKMRV2jJtQKF3Py1G7a",
  "key4": "4frZxJFnwYcwBRQZURfwHpDRzJjAnbNfyzmsWmwFinqLPueiBb4R4qwK12nvQQh8CzJMBAYbBJSRdSW6mGPMwz38",
  "key5": "4rvnjQjrZ5DwovJ4dr3nJfsphueKuFk2rf5j4oGZ6K3G41U9G4ZEbPdyYp5UZB7SyJSJvJdtkprUUFYoMCZayA4a",
  "key6": "vs5iur3cEYkUeHBKvZNRYT9ZdzYhsT97BmtmXEaWUY9TLUhmyq8PrvNDdBxznmfhkseVpUE4vDUYHitrrgtHy4K",
  "key7": "3iemYxxzTtymrujxuheegCFaYByCTx9rUi6hDnwAcuhaRhavVj9kdGBNMKx99FBazdQ4AEJ1JWtaZYyKz1kfDUZg",
  "key8": "4gqpgYgfay6ScBHF6VMmCtSZBDuMNAag2MKrM46B79P8ey5UZ9hwTGeZFyShcXZLquUHgUTpVhJzMRyWN5jfkKAM",
  "key9": "4pGnd7ufbzEs6UGkAEQsu7AavF2cqUPyRFfeUuQKjB2FJesz7qXoMLbB9VXa38Q3Xbgk3oFttgSv4iCVoQ3qzquT",
  "key10": "37y1o9ASsUsPPGuscX1jiQyFVhbosg4LkB4uCLvhSLfDfh1iiYBr3fXSn8NgBEmxM2qxccEgZYinJrTYZ3w97aqG",
  "key11": "SBJcq4yMcXW4u4XDA2b8mLhsabTMRuF8o1kf2FmkCdAjkxtGZkfegQz6kD5iVqoyM5Kq5DZEtkCbGtqPMNVWdVf",
  "key12": "2hv4nD6jviZxQtkggnTMpAdHbiBe7QbfQKa5YQKdnm4QoPbmQqpoTSBdRrBLtpJZdcSqB2piLv4LkmWT5s4icopL",
  "key13": "5mbqZsw3BD98cCCgCEWqZvsdB862XTSVvg4b9FwypaEdvoC4sYUDGYgGMhFYgJpBmE5ZXW7h2xSHnevfx6EdA25i",
  "key14": "cDByYZRRXJ38Lua6R5PNjYMrvUHe1LXQ9UyC5dy6HT8NKFkyUYkfrfdNVewsZYN7rYLnxnbEaKnKCxYtXq5GQpx",
  "key15": "fsrt7nLyect21ed23RizprAy2A1PxJaqeqoNQrkQoAwEwF6n6wwWm3qFi6Ugrdpbk7G2KA4ZZ155n77s3rBmrZL",
  "key16": "4Nd624GVoq3jhmnYzz4JGqrJJGEvMuFFYM8kWd3XHpPpyFFqcetvCcSVknetJ6KiN12dA8xJGpsbSoyqeGpsz7ih",
  "key17": "Wc6p3rP7C6JF3VhrN86Dfygw6st6nzfDV469GsqALDLXdrHgwSiDCvaZPpzUkKxr1TPNRWeuFBePSa2uvb652tc",
  "key18": "3RhchJpiJ12HDsz8aFiwVBtT258DZocRLWZjxBg2RF5UixcobYHJsDDu9gPMmdCzbWodTvBTDQNXAk8G3xhKSScr",
  "key19": "32yLKzGB6mVnHBGccgXp6CBdmJp2TWZHNHYJ33CkStKpLJkpfN1rQzciqRR586giG5KJWB1iS4b8CiFPWFF58q65",
  "key20": "4KVd6kM2W78V4oQb6EuUsSoo9fvrb98AYm3qnRHWokzS5BcNokpypMqwtbLnycecjBUeCnKGb1is3bG4eCWFDp7t",
  "key21": "3TQvkaQRCWisJtAtQSJu4rCNQQFe4F8FdctFokSW2Hm2ADFpLmnScd4SG6AqCKjtzKrwJjnT7UYoodae4PwVvbh4",
  "key22": "2JkoZFagnj9P89dBmP8vfHPHG43J1pEPbMGv6GAoh47aWKVVknG3Ha1YZiFXyppSwZUb5H1zjj2QbtUqNrbbqgvn",
  "key23": "2nTLgnXjuat3JbkgSWnYZgspJCih29SDzryMz64oDJD48yPEoszenNBKkd5fNmfsfk2Uh1xLydGXDvfCfbL372pA",
  "key24": "Wx2kdRez1Am8FkE5TgPfDATAp8yUjNr6hEMZG43DREBnMkpBbU5mgBUR6XJ2JJraYJasB3rZcPmn6wwQtZcUv7J",
  "key25": "4H5fSGhdnEuDrS2h9MYzyZfJzDZPxQLYvhBCzWk4ZJNXL3qHPYfCFEyYuMpDU1b8YmzVo1zAu3xXRbPJsFVJuV6t",
  "key26": "65P4Y39ZHuPhBmukY1QftBPkfiHF3pDFedRhuxkpyVd1XXqXp9cBwonS3yCDEfKcvTPGq5Lg4W4Qe3zSqaqs4pv2",
  "key27": "35tqAYF2WUjkm8nffkCYtuUUtdegg9MZGGPGmu2pVwi3QmJqHJk7JfzsmY32snvwWeKrifkwrXuMcSkhbVyfzaHa",
  "key28": "L5udi1ZCKBVM42HX5A3ouxLRqGLnhRZ7dVGNnwbvGnBragiZwwZSBZSyy7VRFmfd1uoxXSvRHbxuUmjMyo5pP5e",
  "key29": "2VgRieKgEueUUAhZDK9Tn72m19DnoFxXnQDRD7fTVoy43aiu2fieFZH96utkaritx8UtvmcfuaUUz6fk84kdpwnE",
  "key30": "3WakZaTKS9cSUJ9FU71SYPixrrTZ8ypgaJfyDa8iAVCb6r7cL3aYySZ9HBPsDViRJCzYEvCJPvSUahTAAoTQ4Z9v",
  "key31": "4kvg749NJKoYwmw2Jm1m85qALDgjMyTcZWyzR4ZfNAqiciFkcYAPtvrQebZXqgn4P5tk2YUTqZPgzLCEvrnUn1zJ",
  "key32": "4avMM1MyCxTkSXtTg7MfqB5v84L8qSNeKpVaNAFhP6xsMKshn3GDEM8gEebiGCP9hgSv4ogBm9K3dz3fToLipkEZ",
  "key33": "b5WqgUJy6MkBT7GgE8krEw7CgqciGzm9YjRjqU2Xq7j3DvK2e2bgvy7WuRAHUFN91ZBHRa287c5xJcuE23TzsPP",
  "key34": "4AedYhYreQC9CGv78ofbLJkGigDpiayeboNwGbwKrdhggTtHZ2cwUQZnLGjwyhnMHLsdacLnKCAZxSWeuqw9a3NE",
  "key35": "3S4bWRx8UGZefvMoDt59SjBQown9uizT2Uj6CMdAhmZ9AhExkTzRCqeWXNRUTf87JJRpqUjkqGc3Yr9jPUNvAMmt",
  "key36": "4XEfX9SgNbgqJfKaZhoVNpRR7ZxqzywkBa5tDj7ce5LKz4en2QG1ppxqzVNCphrBvtgZ6ZV1CDbeqTv3pFaWws7Q",
  "key37": "2HDMnQLbsoYESvnCMRYMFoExbRX6b5oF3gRHyNPVcW27gag65RPfbPbz6ya1cEk9sPsEi7FKqpb7CYSi1RGVM1qx",
  "key38": "55dypw3DBgx49yAyYWUDu13a8tVpRCC6Azv8swi1cdbz88gUTp2b356WrgK62L9UuSKiiDor7yQaDZq3T98zDL7C",
  "key39": "25A25WNVGCympKmTtFLd2SG4Ptawjb8xFDtvqosZmwFex2xpaak9fTbiiE7K2fCFkKLR6oasNsx7PV8LGeqfA774",
  "key40": "5UERVeB4C8L5BwTEmmUH85CQa6ceY85963NdMj35W2zYU3kRSZqLP6gs5Yo99Dz7NETXQY3ccaeca2v2p54qACrH",
  "key41": "phfDYVasDiZLnJMF82nMzkFwWU4RH9JRcvLFDDEqSLCHepkFRmMA773tjpwvjHsnfKgrd8TBTfVCkWxXWCMQm34"
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

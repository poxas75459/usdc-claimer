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
    "AzoTk6uPpwKUSDULg2PMeVX3hxmKZzGLFkaAkn9nDc4CigS5ChW8oQjQqCQXojhuC8XuuFRE1PUtsfB86Usg9gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39FnoyAgqZBH6LTBUHEebnKgfcLcJLrPdKLfNmXMZiqCcR13SqgdoyKBLcnvZbNJwKh9SL25T4cMwVQ5Cr96AT5Y",
  "key1": "62eH3Jum9seZLYwKNjoDQFjxvka5mYpWqQjzt5K4dWm6cFnNygiJCj9mSeeJr6sPvSDXVn1n3NSfKf9Pkr5hnB2x",
  "key2": "5UJxVin8edGd5brQjNjacQEWbLMTQyzmtvBXyaKi7AGXWwGGCvnTCKJE6MM35aQFdPYnP6QSTEmvYuyKSMWgzmAg",
  "key3": "5Suk8AKUEk3rZec2JDV4xEDGhFHGa9SzVBt5YkZW3LmFU4Rh4axKmDKfdYuQdsQpbdcGMZg8HatExNWgMDns9M67",
  "key4": "5XzfvTHbfrC7vqzya3x3U3HpGVBQ7DSkY7CgF1Y8ecNLv4PEhevMHjQWfPCaWQDShCetn2RUZAuCiKeaWSZEpp4m",
  "key5": "4mQbwprHejEEQLF8XPXpPwD9HGecankUprUFpgiTKhqhHZTh255CLicpNVd1F9K3fMZFemJYSbkMZ2B7EwTPwHQc",
  "key6": "2XV55oSYgZtmfGspFwzyaWifmsez2sWT2PSrBYDDpZUNJsy6j2EXM1i795NukDvuVobwrJaRMwtcaMdswHbtrMZG",
  "key7": "61JvZ6MVwhohLnyw6L4Ezsny3xsyFd3eSUGY5FjjEUASh47jaHscrX4MURvaLrNEdauzT5wjdRkriab7QfuPYKBe",
  "key8": "2VVF7BkSYrtYVjPXDmxAbQxNghQBqC148uARTucgegFDdZuDr7A4GqbbmL77bJmp6iuVkVHBQQqYmQBD1z8KRPEu",
  "key9": "WKctAEXBUrcEqEofruV49Q2dppJpMWRuW6Kb7JscwsSZTQkV2otX8fjcARDc7WuHkHMgCwiPG8biZSQnFDzsfVt",
  "key10": "63mF2SncomVFfCW86FzdJArvWEu8yvgnXveua9upHNhV4WZtxjVEUqh37o3awgmXR6JDeap7mRkrSJxhpif632ES",
  "key11": "5LjZXQ7qbUES2a8Kjxge6v6LDPGDxPnjwnvgDhwbto3sE9EFEDvcgH1T62vDgYhbQmQyyFdP7v8zpWqqHNF9hMeM",
  "key12": "3WZSdSiVkiK7HRa9NPZ2JAzp969Apw4CY3zKgZR9CrNn1t6bhemK2iKNjAL8zjH2T2Rapipk9vBEjSshUpu7MPsq",
  "key13": "26TbdbXsQ6eebBnBFRwt5ruP9c6UD84HjpJ9mXC9rdQ21vUi9AJNUwtSbiWGJDdfdLm8Pvc83goRq9NUCLVSLVfm",
  "key14": "2T3kwSDoBENFMkEnGomYYAbfoKq9dzPFHyXVAkfykeTCvvvZRjk8c5Q68pEuYemk4TXtB6v21tr8LpGypTD6oDQT",
  "key15": "5A3hTGJUqxu6cPoKNirLBCZCJf4UcRV9ckf5viFPjuna8SFcpB9784recybna8cQkwm6u2GGGpvbK5XZoEGyv6YZ",
  "key16": "jsQWc6xLmoN1UUbeHSGa3kdKweDHLqBqdEf8hKPrT5XbE9dDnRkxKbzEij5sjLDWc87m9DYaqBn6JePboeBZv39",
  "key17": "3FdYARYmvfXxjTDDWrjF26Yim7Ur3c6vFAMkF84bH8m7bMXkiKiVvt5C22F57Na4ZhH1LnqLkMfAuWFiE7XFUcn4",
  "key18": "3zCoJaFuH3t4rgAEb37bBS5spTHRbYsu9et7AKaJHqAUUqrRyZXt8GTSR75FxX7VoVtDVEfwGK63NrtXu5LTZZQ7",
  "key19": "339niLVwMRVnpL9J9yBy8KbaBHU3ZtfwXqnXGFJaSoE171UsrRrqtMQWv7FPH65cqSeAjGNFjdvN1wu4PsehU6UZ",
  "key20": "f1Zb1xmrofghPp5MbmuhwfRwESCsHfZdBXfG6QxP6W41Yz2DW7LUFmX6MzGtE9QDLpbcwgBkz7CYjTxK1J8Tq3q",
  "key21": "292kWFccj4FZuoaCWbBFFX2u5Z21ggKS7CaatP9kQMidDpVx1zSfknAYqVvWgnFZPwEzzSDEqf3JGjzcKn8byEFp",
  "key22": "4HYoTJTzqZMZaPtBkcekhQ4orP7YXQ3k6vjMn8nMm3Jj8fXzxBqKqCRZLgfruCBKVKhdrhKNRGmnnbUuiFxiw4rg",
  "key23": "3Nyx7mjYaPtCcEvbu1rfd39ua3gTsy8WTcZ8RV39VGXKEzzsvTEQdqZ4bUCtJJBBsMseuWNF1hQb1zMtQNPDjzYh",
  "key24": "44NQssR3AQ27kSvJjQtPnPWi6N3m9iYzHsu8DGedLxScHrhizRUnmpF3JZ6XUej7Rxuvt7RrGaXf2XyTzrsqiuSv",
  "key25": "4rsWV7iLiCR4ziZM3VFV51NsWo9EeihUCTf4dXKtVxzKAKJXFAeeDiF6v3DzTVGPvH2jVtitFr7Cktt8UzmnYWE9",
  "key26": "5gfts432nQReLmHA91KNYDgWvRMfpnNeKNbAz6kYFvuvk2p1vbLBgabWPEjBUMeT4ntz6rLXEnQXXNM7pHghAH9j"
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

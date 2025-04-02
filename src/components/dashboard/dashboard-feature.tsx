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
    "562xELsgUgGQNNF6H4es4FH59hP39brfbHT3bmGTxN4Fdeh9TCVqU5SRydZfyKA7U3dYpqPeGrg7fFEB6EhyNUs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBxYQSvDyFmi6wQtpSP9HuRhHfYKDCrqY2DzBXCj6WnteCvxM7zX4VCyqAic7TK4N5LvNtAAPWG2frN2uZZxM2d",
  "key1": "5exXsxGneHkD2wgBJvPiLVUhv7DTiTqUKsggpaUSc4SiKVvQkGATME1aUrL6P1Bh6zGXcQ36RdPcQCMeFxVN39eH",
  "key2": "2LxRnrV8ofCV3rKtACqa8SBS5ZTkEywkfTq15ZjdPvTgu7xjuW6mMxr5tdas2UC4wodtQVvbopgtjYp7yoe8V2F7",
  "key3": "49ZbS6aLZdzsrHC14t5NSsF7pBG9eeuxvZFy23ra2YsWgW6vVuC9LDnvVS4U2akqYbKhs6CewqAhJ8a3Rt5g4Qta",
  "key4": "3a28NpWrLyD3iQdkvHeRY7Saqk49vG1NquqCXocBei4vpDayo5QSZSAV9FmmYRFnMnM349a2VTBQgmnjofK1qwX4",
  "key5": "3RZRcNvBLdFDBWnp55dac3ESp3ek3jUzXMJAnNBUYwDr9rpFEUopi4RpU36tZ1qo2iVgfFgk1uTcERt5CSvH6cQm",
  "key6": "FWJn8Ny6sg93fnC7UpMVysSSfR4XDFbv8sJyPTQna9GvSRjNPZbrmpSQSiVzeSfbFRb1F2s7BNws4Egk33KjoHP",
  "key7": "6wRopQsjYEHhjcekXyak49vSL9hkFyeGAvTk2Yk5JrYcg6h3n5SSS5Ma9v7Jso36YzQXibfsavtAXWh4q4h863c",
  "key8": "3Lw7G7UeQGfjR82XkB9QMo4y1nPqYe1Wnwfr7yKqE1ZKLePBhifE6VG9MHcdSpSMESQfixLjqSsExnpSxWzKJkrp",
  "key9": "NeFty9JFQSPpcVCqKtAGs7j5eKvHVYQY6B6ERGQBXuX5p2byVp8CRWWK93nDXv9oqXfUzhkAE3LdPtir9Q8FMW8",
  "key10": "3gyH6EY5KKN9YT9nnQRyrQwjns7MdWBmvoFDRhtKEicb4G4S7q7H5fgKoy9n1NRKe6AYWzsUteQtJMPfqpwz2SvX",
  "key11": "33LJg2oCMfztF6RsXNtwmEp84o4rKxSAoQFvJ7eLdjifmJ4QYibCu676YJ7gaEQFfkEXAFbCUGXcZVSa8yKjjo7c",
  "key12": "2je4Q5Qa83Jbhwfk115ugJ9gDD3SQTHrjJXQYfCySNEDn3ApqZe1xaexYfSxEngLGAgVzYJcLczJuCE4wPUxptNp",
  "key13": "2L9n7mq4pcsSBgpehygwv88ZrTLtGeKGyYJpXqr2vSDjoWuTXDKKJ7qPUiXgVZ4fZXwPkaAb9XbhjMJQNvErtGKw",
  "key14": "4qRAXoKARc9ARm7F8yTmLrM3kysxVmphcGd95XikV6NgGGwzjRUaaheLRq5VeFD4w1uftYpoX1fMTzfe9hz4BRUd",
  "key15": "4FTsRJ9s9hXBNX5iQkzngnmRmseGvgJJf1kdDG4ruRmk7jExcpsTZHeGKnEt9YEWVeioAJ4L3V6RmJWZ7rGdR58D",
  "key16": "5CfBcf1mFiESFD1fhgcSDEYTxwg2xup9WzCs2fYcCcTnuzPUeu9KkzBuEEuhBnT1JRpKm9wSwCsTnvtaed6bR9mi",
  "key17": "29YwC887NZuEwvW1LssjEGo9Hm3TUK8M6avfcFVBRvN7L5Ms6G4KaNUpC8MvDv4GuJg4UKPr4TdkHjQw1gmhuWUC",
  "key18": "3aJp66sMVstyWfVJovadsNfSXqw4L98FpzAikBqMCiM4DU4u9aJ9ssGFLkP2PAmv6VBqeXeoFJuEMZFJtFtGEn4w",
  "key19": "5rS8gED6maaKvGRUWxk6Ko3DYVNAxfFzduMMzYUavpEXjmZjHBEsguKZW5qNGt2ucGZqjdJBUH7jKwFGAitt46Lr",
  "key20": "5munmqmAMeAVfQsdsUDHA34Z7fFK5QaGpvM63njdJARHNMwPs7FZNEbt19qkMd7dZQndCN74y2NBc26fJhcfVLDi",
  "key21": "4z9LikxNghkDW4VuErhxTSGy4MAiwWxMKHTna2Sahs4H47qSic2ci4f2XRFEni7PYKkoHHgi1PZ8v62YKA8U33z6",
  "key22": "2x64muX5yjnoANS8Jsia4VwtogfvRj1E7umv5BbWns7e3eUxTsmvTSFRzWCbfnzpinpAq6SKNmzFMjKmN1RrRkz5",
  "key23": "634tvx1mG2NRfDV4MkRikeMj85qRbVtPFT8LF16GEyVP7U6ejioG9NN37zQyryWvFQzma8WPXJq7t78S92pcHZ7p",
  "key24": "3Ad5u3mELK2EZD7SkptDnjygkcs89MjsfFSKFbWVK6kfYQdPurNECtJjA8TF5SVgMkEB8J1sNQSVkA1LNhHDebqu",
  "key25": "5TkbBnvG6MKRrtd37KYXaTafykuYyntwb3viQKat2zHFSeWNLx3fG7LRsMsmXt5LxaNLuB6faH9bHHyYoB9wCyZT",
  "key26": "yZfw1yqCzuhJ9NFWftwB781bVKK3CeoybwDwX8cJRByjX3irsVkHRnyLsB283DGybdrXhMErKGqQXvAX1dgreGL",
  "key27": "2ZZrHQofMUzth6hWF8sJmBEWDMkTHD5ajtrBxmLKLeUTy2LTufnMegGXNKBbRBCF9je8JxQ9PtEcn1FnLWXCZWoo"
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

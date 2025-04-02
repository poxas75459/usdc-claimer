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
    "4wWEEGGPT2vtF4V5rxhpA85CTTUKFbmdq7mPmz6vrDNKBa3Ng4VgYLZknC8jEtv7avgXgdewgRSEEg5r5gUwM6zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23zEJCAA1jpUzVp8WMgsCzyRgEjCpFj2vGoapNRCK2Y1jAjZ6US57J9M8BCBFpp8KrFbmwvogHYzkvtjy9y6v3w4",
  "key1": "5it6BuqWhAVR8NpjUgJQCFcSRFdcvDhCm4E8fB3LYpBw64wuCNcrVFV1dYC8fRRnnfmqJr834pzxk2aGsZXsmfYU",
  "key2": "3WndZVid4eiY89Kud3XDthPv2vSweippvvY9bnwZwTAxmGws4bi8E9KMq6dZZmW66hb2qani5YGWmhfr6a5EvwSw",
  "key3": "ye2JLf3nE3n7iHvB5MZwADQq66ApGnbJ615Jdt9vsUUxabwjyb4WTL1xxTpS4P9QN5fRDmV8muk8aWkWWzAp36g",
  "key4": "2cDRy5szYBzRsxMrSp4ZMVFRdh8EVW9pqU1axBqExYiEndwyALJeDEigZ6wAFDEa8rEitCiiBFfUyar4vhrnDZgj",
  "key5": "5y87Bim8NoaamACdSjV7nndDqwh1kPFgmveWjLy4WQrgbNdfcc31oAN8LGWpUuT4XQpXFvtiyjafgXgVJ6qky4cX",
  "key6": "5yzt4bdbKFNyUGWGRiggeq6TE7yoidWuDy2qJgh1cwF6t4rJx9yEfimH92KP1NvH3bZ8ZUk1YHASEcroBFayKQn6",
  "key7": "j1ZpkfwNeFusxvh3ibrKWYJuyogdcWKfZSnHrh31v46FXmN1iYtMTieaE2V26Uozj3MJdPWWV85GRA3RVZ61G5a",
  "key8": "65WcuWaePRcN7EJmG8iGzPQZbkMZ3j4qzPsQAE8ZC7vnsLtiwphV8MwctbSEP9y4mSRsYhLX8CM6aL9EqcjEpNN2",
  "key9": "5jaryyQ4bMpHZGPEPD6kuoY4fnNwwrDmQzjnpX7apaP2mZWw8WbJ24CcVKoeSTErmJaCBdj1XQd1gdUY12iXX99j",
  "key10": "444rEpRUPr7rarG2wT1c4JaBs3epXpEhKEon5buRy5XTpjPFh1NFNTMgmnNWLCyi7ZMPKxqj8xAXp3PFQrXNyhyL",
  "key11": "3D1bN5vKFCxNdSF2F1etuCbD6eMA6hexMHrSTGoTFD9iWHpXwY5D126ba8reia4tQxDry3jmHLZdGzMGP3227Shb",
  "key12": "5Xa3bH1grvgPLWjmwFaafs1BkgMtFJf9rHtGbMB2wQH2DzRzbuAr8HHNQt4bk6rYdFBGQ31pA872jtsrLVDL7mz2",
  "key13": "4fCvPMHX8jU2nn2FHkQWvXahoAPQDXsRcbZioFkUQsamV8xWnW6iuPh7Cu47WVgFdqvLY5p8rVthaRgtQyM5YwLH",
  "key14": "3d5D9UHtkrVz8nyaGAQtSTFd8XFYBF4a2khRUUVNHpY37EcghsSMzUv96Co4NcTtjGJtCy7F8o6SW7RmVuiopYkh",
  "key15": "2usMTXdUH2PEo1nt1iSyadcPkHe9XxBaTKJLKS5Gp2Nn6zeJFbxc9uiVEPG58pNZ9kNgtEXi1YjTWVCX99R38ak9",
  "key16": "5S41zE5TDNWj8X2iL9UVdXbBTZfL4buaG4yJQzfZnBadJk78pRWZGNSJVWizprj9cWh4aTugmGx7fgWM3dETEEbx",
  "key17": "2opVYAXW9Y2k5bJzomky57CuSsX8x9Xh7VZBwMSx6Jec12M5wqiaATsJX9uzhbjQ2JCBz6KHJ3f11BV361SkEabU",
  "key18": "8jfuutmS6YiJ5WX3J2MyzCNwfyjkguk5V6Q6Q49ggdC81NAWZR1K8eaS3wzcMEd37re6JDshedSkgN4xtfuBHfC",
  "key19": "V1jiy7ysShAdHYFbfnmCqSsbmt3VPr6YLBza3S9uBAe23KsDw6TQoXFC14d5abxzLemb3M7hsf6adbQWNhscJ58",
  "key20": "4HMf36Y476k69Z1xsQsTTbCsNYfas95e6oAsaTHHU3hZP53cwR5eqgdtM67aohKgtboEbRUgxwVv3ud1pYdaa9gj",
  "key21": "5N2YRcZ4EFqm6Nf9h93PZ9sUfEx38ozWHNEDxXoR7yngAUUXPbRVkEvbQxamgBCQ82MgZcJvkteQikDpU3TsSN9T",
  "key22": "4Kwca8VXC4N5o75f4aZhamAhydnky11HceEAXyiqY37EGdZogUfnJMMX6yF1awrJEMdPihdJ2pzB6QrdKo2AQvPF",
  "key23": "5mrHEK81zRunF7WbA3S8mpsJqxRy8XcGBWCnN8EqVoS43cUeHRWDHnGRYmVwYkNGkQd271h1Dc2aBy7smRxb5WAC",
  "key24": "2SEn9TRzrtXKybHBRteZAMnX7ZaDJifExZfBEtpwG62cifRjJSEtADYARTuQjFSUHJoBrMWsvgtNdec1G1Dj7u9K",
  "key25": "3wHeYBrKJvZQ9tqaXWd3ihAXhvMzYYAU6uTbRSnpmCayyXcrYzAmka1SgJfxQXMq26gTHKBVW4DS9zcCJwqM7cWG",
  "key26": "5KU7NRYU85Umt1B2bF5iFBTQu6Jdp5AZkBiTusa3kWYfEzeEGjz13VL5gXsJnU1AKGuPYemtorUcsiNAfn91Dsrn",
  "key27": "2Z8GWdHNf7oEy4D7FHB1cbkUaFc7Dh77Sycvsej17wCSMux8N62YAdBRGNB9J3QeDsa1EM96Usfbnku3mb3JT9LP",
  "key28": "5ZFQH8Jj3v4HQUwxhE6cdGTe49TJc3YE6FFfjzjk5r6njkmn3rEW7nsm8tx47UBDooQ2THE65Zab9v6yphSGUsTK",
  "key29": "zuDM7Kssa3jHdGkst7hAE1Wih653WrGGZooTQdYBVse6k9yBWCmuFgVBmL9WiJmS4rX2JDeGowwbwvRcnG5JLSs",
  "key30": "48bwkyYeFrExjcnkPBDoB3mvxqMVQcn4PrUY5H8d1qyB9MrwFQ52DhniPq5HNARZobKsmwxMH3F1P5j68a5MNNqD",
  "key31": "5xtrwvNqXQMoiird6F8b77XSBVfiSs4imUi3bXaHSUpikBiU6KWga8Cc9Ke7ZXfCaP4qGAmBjwAZFXi8bUM6DutN",
  "key32": "4UYJZ2WdTr1bU6YKoVbGKohia6QdL4varz8tmB2nrxJLM48UpPuH2UDAj2Sdp5uZQigD6HCEvH4QatTc4n3j8HmD",
  "key33": "2LytiM3DrqrNwCJyE2cxv3VWmCthHcJbTGtwjJfFuivfBDVm2m2GPYEKSeu5EjNUwdRPQJXcsM7HBBZgWENToeYV",
  "key34": "4jxCekSn8XKD8LXqcgr7UiSZehFGwerX3pTUS8dwH64ARE266F8cmjyyYmF3S4dnGbUoQU7xaM85XXaqxvVXAjeb",
  "key35": "2Asj9bAeQJcBn8cPP9d79TjnM2MvjqQzs6eU6mkPRh8XU78TR5Zhh7c71k4bLHuwBWTuvjvBf62HkhMXpwjC6hxj",
  "key36": "5coHiAUzYW7epS65x2D3yq1ePKTcH71vfqMJphptk8eC68kbeiA3Roxw9cxqzJ5NmL8xfeNbU3N7d2AgGgfMcAUh",
  "key37": "2hRCLx35qanuUEZXZiUEfzZaRdV2LrBAzh7gnY62Bvtb3v6md7kv4LLfwCAJkVpgKALVv1b2YUpNk8K2pzYtCnHR"
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

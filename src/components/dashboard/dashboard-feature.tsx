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
    "3FRhqMzjNTK6dDPCayYjmCRx9nXNpzExEV697cdWwp8PfLLHyXcWLWW5rA4jmmSggtX3fPTvZ9hbyyvxT1dpfT8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FAteofzUhvScUgBtaV1mvc2EnaJqXZbcaRgatexc7JaQ1Vk3vjEaTrvkW6HF5DGSk14eJEdxeXpPkAehd696cJa",
  "key1": "4fwjFMVbhNHp9ZMcQQ1pF6yiRP7xkYBJtGrC8h9B5BDEuQgSdq9oD9CM5j5W19jgd4Z1EGZTxKYmsZvtaahvrcsw",
  "key2": "2MqvW4wGvpKYeAnYLDVaArsAStbwWqqvVWdSDXMbsZXwNdwVmM3zKDYYkLzbBWrt4FUGD8iiux6NTg2eKDKGLdWZ",
  "key3": "23ZvCLJJMEGLKueuMV2vnqV5ox8gMkHzPV3BYtzZrukybDLDV5uwyX6GhCvkVL8fj9Wvv3qq9SJVVSMLQx9423BZ",
  "key4": "22zQRmZJoePJuCvTHvCKu7NNQksPTY5dUipEz5NvimXvDFkH7iLe4eL5Mgdhrr7XCCAXTAZmLZLzMsDA9WBC3jmy",
  "key5": "izrDDuJmeyYjQDArH766AjeSnYdwcJS1JdKSgao94SNiiKrtoWPD7WveVKDwCkLxze8UHJRzn3VB4rHZxbbi9vT",
  "key6": "5um5dp9qPzZHSLW2zG6gFcmfYXewXdKv8B2CW5bAcWdVnsRwonyyBvqNF4qnb49kkaG977mnXiP1FMEfYv95ZZsn",
  "key7": "5TgwmpM9WF9vBQbeTsGVu2puCA4xZY2g7RMXd8Ud3pZ6qqTv7bMGUVthHycJSB9t9FFtjjoUPKuQBF6G3rXLtzYi",
  "key8": "213NxembrdwpimBY7KSkH8daszoceQDieUbhXJamJu2ujTj86VSWR7HCBzWEM1QAReBgdqG9K5fmRFqnwyKK9FrD",
  "key9": "4gPo6hVUd2uC2KSpXBtEozsmpXnZPwWpRamhnBWzkh9Zf6xm5Jmrnnoz9JzDBjAwPQL5nEK9Ftg9EEvrXFtRq2V2",
  "key10": "3u4boChxPKJzqAiWFdd1ZcRBc8pZG4712G7JSKQZgwv6cDp1RiPr6JQjQZKa7bN9PoNEz4TNa5DjbDXg3iGTqJTK",
  "key11": "3eKxhST1YBtB9KZ7ywb9DsMRvuyEAmD3Vehp7SbqP6qR6hEug7LWMWb5YnJ97hzhUF1gXfXkxqpfnwhm1rMgpZbW",
  "key12": "2qqxVKrQqJPYMu9jqgG9MA2byzbdTC5vhvYCaNN3WRe6xw7A9DufNpEvvhntHqbhkhxG4BnY9qfNaBw4KAKydbTX",
  "key13": "528fjLRMF4GcL8xVCG8qdwrSF8PHY6bZEvsWKKQsHpJSMrxQcEqryPFiH9MP9j7RpNWLm7Ze2XwNcwZATgG7be13",
  "key14": "42FrxmwTK8NmzL8ShwHzQvMt3MzqqfZuKV39siakRMbj8R1Do2AV5Jw58CnCoTvmtkq22GBsFdiH6y8mNiGWxDUf",
  "key15": "4aFvVwt1478sHX183j4ZL3wYh4GLChkAxvquEGq7BjZV3P61cFSbgVhwYDrCc4AZze9c72NVYQnZVtbdSUsCnoN9",
  "key16": "xRzK6KChjZbpxXEHBCizbYh7XQUTWvfAWKZHeocdMTBjkQhuh7oXrgptvwfte2LaRntv7e3mVfP1xbr3Eknc2Zo",
  "key17": "28aZH9ZKeeEki8yhUqvfMc155xQjtG7mEmA8QcoiHqa1D1WnB1KnhLaC1sNpXbsBQ6i7VuU9uk2eGCv9CQ8b4URz",
  "key18": "sXuVVCoDzYgyQ5tLqGB4gXy32mA1769wNrZA38trd6zSbQttA6DR7un8Ky4ES14NspguaFNnitp89DJ8A8AJQxS",
  "key19": "3gJfG9MzfepoAVWi8i3eEeEEs1dzRiiTap8tt7MXySDV6hvqWMhPCj9oGEXd1tLGBCwk9pFcv1nusfSLRHsFvkAe",
  "key20": "2Rz7qs62FKqpnw8oM6UwxKdHHoPfrvPMWYChrnmYNUGFtUbuZX4RZRr5qUi2PnGunNNHJdkigE8rg4QotUagHWZ2",
  "key21": "5EBTheoRcoxopgBEJXjj8Gb4RPEv7hCjV3Znhs7NS235AaLwncw7TFSRbvHNNNMkuyRx46p1SCbKf72Yp71DVZ1o",
  "key22": "5nXXY9T9B7wSYb4Z83jrAMureCx4sDZCJiA3eSZ6ANwiCreF9J9sEYobvb4RSCHsDMYb3FkzR969vmyJhGc3bU6L",
  "key23": "7asJEDAELV39XJH2bdG4Sbx2ZgeLBhAyDooReKvMnRjSv22QmxFgYmAY4wCqoHbfK5nJSn73BQbdHvKKDyu88mt",
  "key24": "2syUGihvJZN8V8ritPoSmdj2mJAeBUkcLs6NaPpPeFTfySKinDRNtH5hzZemyDNQEL9J6swwvZJuXWFa9gGuoJXY",
  "key25": "66bXSX2SCmAKBqGJaay8v2Shrejq1dLQbcCpiM4ew6bF9WYtEvekjKviwfKr6dK7eAjwGAvMrWmyE6mEg7pcbWQt",
  "key26": "5o8P3vesU1FxtvPAQrfKCPyRY2A9dPk2se8rMrh1YGd2zGpJkFTvita2NGmv6obPMWQXcL8E26TzbheHMQYGQs38",
  "key27": "J5bFZXVFf19jhD5swmf1hdrZ46RPB9D1TomfKLtPmsYUFzhYVJ3A5ffxDyXkCTCpK83oWK4bfmx6Yg1WVmrDk8c",
  "key28": "4NdvzfsckVEPgaH9pFMdmXVUpuoCGouGbjSjpPmjBaU2YgKtrQNsSsShrHsewchJ4h2yDkHbyZQT6o5BsB6aXv7p",
  "key29": "2Wn9PpXxc7vmCKFqb6J9BAEaSsJAryDaoNMS5rEGfCLbuX5Sg1QhwTtS4wVDYaLevvXxXyuuPu14yUNAyGPzSCye",
  "key30": "2fncVAgJp4fSq5NXM5bJ1w1Ap9MoMymJAkWJozcMTd6csQtVPm53JDQGMRjgtmMDSoR6ZtyoKPpiK9JfBdEr8UPd",
  "key31": "r2AWoXZw7WeQQasq8QfPRuDYbopBCuwchoqrrPQ1EVsGoe67C1v5dKB8xroc7p13pn1owwt4V5PFmF9rwgrhXop",
  "key32": "48tfzqnzcGF3kC5bVRV8sNanhnCWrmaRsvWJn1czohgUW74YdpV927QdtTyrMYgg5Skj46grRaR755K6i8rttHqq",
  "key33": "4P6Q4AVCZonHXiqG4SQwoW7BjL7eM2wSkQSW1s1ZWA9PKmMxC46QN8pYYX84qfEUVQNMFC42R4JBdVaswH1tvkh",
  "key34": "3rNqBQKdXFecq8KD7S5eSu6Afsh7szBnUQQVwxQJUgejjyJaWaRJ3EsTbcfTX9C8MHo3eygPYS1x1ivx6Qj11cau",
  "key35": "5ff9pxW99YqwdnHi9Xf6WWPThgciw7z4F7oTCjC7ZnaXzySpjXU8Hw5K4btXgZKXr4tidJCnvekZLfSeUjYuKq2h",
  "key36": "4HyjCiC6SYVQTryLgRwXepLwDzSZa5aFWi3g1RpG1ktPdnDegyXYJcBSHM1TF9y1RhXB2PeyRTXBJZxxg2RzZ4ma",
  "key37": "kj1MR3p5JXQGDTrx1NyV5tv8v8UEjFP7auy4ocfvG59nNEViDy7dATPyjSWT1ruwK93j1NuYHLKK2DXg6uiwdX4",
  "key38": "5nbNmyDDkCsActDPGxDCzxn3Sqja5oGPyNLVYNvGRbcu983FonzrwZqrhj8jjBhzNbUdSosSi3ySZKQU5UF8Rr32",
  "key39": "5p55xiwivkYvEvaGNRRPbhG8HgZsTv39Rt65KGpm1Z4KZBC9LzgFYhfyT2irE6aAbfWVUbaUi723PLGTBmWyrg2u",
  "key40": "5XHoyH7d4Qty5NeW1JDnZjypadu2cSey5wHxN1EDJormn3J1jqM5YmQUEH8aKYmYER64fz2HSB8tNnmcCjh6NRcN",
  "key41": "2pPFpAJ165kZVATMkw3LAdmeFAQPhskRHuYwkubM4Y9n4568XCbiemyckyXBpxwRJ5vegTJHiLDXzEeuQbrkHDXo"
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

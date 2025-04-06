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
    "5UAaDappP9XefYGry1thxVzGgbSfmQJn6YUg6jTX3N8t52FR6mPByaav44rc2XQTFNvezZ9gHbMR44TLtKaEkz5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBsXokUSUdcr9VCAp3obF1EmDEwENewdzJgMAym1Fj226xSpQpgn9196fojYeLC9oynYPFjEGLQFr1XsGS2gKs9",
  "key1": "39XfdDT2r92VMUQ1eDQRSQmES8S27nDpQiigGGCwHGvaLDiHRaAACzTWRpu7ketQcTYqWinVu1ZWn8BA2CQ62Nug",
  "key2": "3NU65JQkezkvrtGuTdEfzmg1iVeJ4Ahcdp48p6XUxzyL9pdAbdKSJEwmbG2MFbihM7SMhJnT8XEca7f7cC875xFQ",
  "key3": "21SaeRzomoWNGrPrmxWWvqbe6JXTen8GzjyzvgobSNBwWB3S6dsvELv95MaEzvSLvgaKDW3yKMepqsywSx3F82CN",
  "key4": "5xu1Du98PCeB4vkEHKoNY4vFVbYmgwqm4DQt6jVyz7XtwuQbMnXm6RtBCAoPiam9JjCwEqUxShee195hkwJ8jFLo",
  "key5": "SFnQtfsJ6Z7AUZNX2QLDBHayRn85ufiL18uikBfqCGtKenWgMKgFvma74QQMRyYE8awaaGQjQUx2rDLGF7JyHXD",
  "key6": "61ctF4876Q1MyhTWQJi8P5EhPpzfd72XwrGKAQA8i4Syd6pBXHPqUQYXG12tehyz8D7JB7Akj8XNHNRsdNb9v8Er",
  "key7": "5cQhgMeqMet9KJRkwpfgQ15qfi3HwxNCFCWWZTr7LHdnrJjkAg1642TfQkPTUS89vHE4aeox1r547caDsjXuEB5j",
  "key8": "4pYkorMyNNZRfFJ9tixCVYJhv4nPgjyvSqbdQK9Lnbb1xGqgiuMMeU7wfWxxdeU1sCddDWQPkG5q7QFhvFn8ggo4",
  "key9": "22ZqSeRWDMEJHAiNypM1EBrL3PmLtpHSeHGioeMp5zpj1nYmqLvCMKtAyEHGyxrHZSM9kVecL7JkhJbLo1JFgd1p",
  "key10": "4CKVnBszfsenWAr6D9RpxxCB987jFCwb9NVNGQi7WWG2n4r7NUR8FDCJHR8dcxd8sr5XmdtzhL8Qu2cSW9tn6p1r",
  "key11": "2vLwh92XAt1MxFa19DJamzK5fvXTy144YukKZP1jkuwD3MjD6PzK5MHRq3BnEvWoPHTqBb36SxW1dA5LfozJ5H65",
  "key12": "48PSb68b1stJ1g4CEEMr66te81xu6nKE5nXcocwNnr7fYAvPudhfu9AWRzJPa314VKSxMrwfvh9KjsaWLXDzjg35",
  "key13": "3x9pTq6c1tE9WJF9YD3ZCwY3L23g9Qgz4DDZck1krBwcNYW383fWNdoh1ANEaw93msQ12rNTGMamR6aoHLbeQWco",
  "key14": "4ckQUkWDSoaF1PmWajVtXShopXeUYLQYUmJ37KvLN1fZZevPW6eLsuADnWomfipdRYxjascFDHBib2yLYjPmqJFW",
  "key15": "483Dy7hrf2V2CHm5dhFHdebyvt8pajQuuTJDp6sSKhjf1JEkry3bAjTS3YiD8gmHu4ohxXJ8RModmcd1XHCSRd89",
  "key16": "4mzinHUQjFGtLdJnRnQZg3aecZMNJCXmtrdeZRCDTh6poDDZoK6B2Q8N4MHtnfnhECVyGJ65B5ZxCeEposJdSeSH",
  "key17": "4j73zc8Cw6j7szTTd8eJX8jYjEVBB16QYGKoB5rPbpunPqu63UCeMM9mKm2RHNcvEKk7wJe6y5E14D8F1k8ZsqQn",
  "key18": "3iyqagvVz2qNdanhP2GQupHsTbvVKhHq8fD539UyRgvWq75smMy1HL6Qp8my3hDzfB8B7ViqoKQjrRZ2oy8rgjb5",
  "key19": "4DCe4wxx2BRxmNeGN2aFUwH2Edu4qW6waMBXLKDqMuZJUoZPWDF5o3WjQAV6Nxgb79AK61DWpHSEgR22of7AevWR",
  "key20": "3Exk8AuHfxdTS791Nr5pgpTPTWmvVtLcjY4gNrvW8h8TN4gYNnXf6j6xPpUSs5cfapWVnhyixJdj8bnt8F68JtTj",
  "key21": "4GtkAYNLWTpeapYU1GRCWRu6Nfznjyx67VVTHJC4ohy4Yfk9EQqTRa3EMcwD9kQjgRd9cn8kKwaGftUYDZ7rkaE5",
  "key22": "486Z3x5bqrqDCF4qLLXv6HLjq4pXRtuygqnzCoCBykBWmTNYPV6MCjR7N3SpuZt6D5CmdX6LxnpxCa14GYnKvxU1",
  "key23": "61QwaoCWXcjB2Eq9kuRQVGUDU13s5CyLRrQEQ5wM5ANqz6mFMMcQUySbJNBQm5XVusghegPGCuUVHr4fuUojUrZF",
  "key24": "5RFmX4oSyHG5kgeURqfXMcoKVZ6oMfDCvM2WRdUX8gauoUvK2uu9igQqV95tKJaDE8kPHRDtRUpXDZ3gfMH5P5TN",
  "key25": "9we6oMBxXqvtGSJgfPP61MyuHHfGE44ubd8BDc1qi5X89wx9nn1VArvgo7X87GUsaTVT2XeFznRTLcWoVBL6ByP",
  "key26": "5dtTnoXnhZgwSi14VbSPEZFTb4NvScb5qUjNvBYpND3XXgpe3rosSod9HfYrGt7JJ21mJg4qGLzf4dsVGcoW6QPY",
  "key27": "3pP1juxDpoUobmKxWGgNRKDJDeHjMQCRgC25ThXdhpaDPbktdJ7Wxvf8Ugkg9AncgrLEb4DxiGj8ZbDDxFBVETsp",
  "key28": "4JRpJ9WB87iLsEaxSnJX2kMco7mW5ESXCXKGeCywKvVgiPehZPjKDUChDW7WvCim5f7dTQiUFe5VoLumJ8Ceg9L9",
  "key29": "8RaCPVRJvtk3SXi1RiCvBpc1frat4uBvVpXySj7oxhA7pspERTTbKfZGVhXqokcdoXLJukkJGkbPrMuqMxtUZWT",
  "key30": "4RdEz3ZABTL4M1dMTSuy9JuFakXxr58WZqk4RQCuEYxddBvFKW2kwLpoAFnTPwQS2qAJAd2thrFFn8QdtgqDhdfE",
  "key31": "bDdsVpyY3dGNj6htNJvMedDhkkGhwgwPyTFYGdzPgUMGsUiMSD7jWJY6RkYt1ZeQC5RhmFvLW7t4j1kVrn7DxLx",
  "key32": "T7BSsAEDh4HYXEyHu7qLLEM1owL8eZRsbMhAS2bCutAS5kiRsmJyezK72sgPomxzLwXsMumyudVurtkLN4FQTzz",
  "key33": "397MqSs1Hy6HCBxeBwmcX6RtTyHNe6Aau1EJzgCqKAiGaoUhAhvFzFeAur96Fytgmsi6We82xeAikUB6V6BWcrZY",
  "key34": "2wzLv2dNKc7TkumD6Wn2PjByeKnd1azn1c3dbmRd1jiRmUUM6iJrX53s8RWzjvPV4xuWD5WWemy7HToRjQ9Vp56K",
  "key35": "3fCyTVzQg1dMCr5opDUhhEEB7SYo8e4Ep5Z2WRAUShP53EtXCg7obeVmawt893fcwdNSdSayQUDW6TbxjKpM49kK",
  "key36": "2QvxT1pFb6BpYqUEeTN7aJjxtJGqvLMhuCj2zAUFsoanLeFuheuoDzsyef4NbDpUcizN5kRdT94MzQU7YamiPoeq",
  "key37": "N5ha9YNRTB435dfr9iodqxgXutxKLGDt3Xd7DeDt8ZZKrHPSJDPWwALYPWLA7JrgAbmY4rpb3wm7y4ZntKipWaL",
  "key38": "4vi3uvXK7ddBzcyAiKbbD1W8yjQYtdEtFnW4endZjmvn1Brj4F3vPzybBk6SLNgqdFEiaVth29P5J5gHz4kgJoia",
  "key39": "dBPFJr4pUyMYSA38sbZ1MibmD1HswBujwurswDM7DtpnVGfmhezC84JcQQbRSp9xRbqgiumaJpJv8U3wFaP1wBp",
  "key40": "2zZGvu8REUA4hf6DPfsng6ZSM7XphUexDffRktMVHUC4YFGiYAZQvFdSb5nYzMNNwVhhzebsQhTK5pnw9wZa3x1q",
  "key41": "GALjNpqbjPjr9aWXfzmjRptfrPhpc5mS1wynsKCRARy3X42JfQNGGB2ea53uW69jCVJhZiNrNsQfvPxoeq2trqo",
  "key42": "5TPsNb4uBkjgQRLi9BpLrZmcGMQSKiFxdwVfKdP89FHW8NqJacY2W7FjBQcLSwaH59SYFNn1w5rVkS8ePHckzKP9",
  "key43": "5PucZYHBFAn3SFK26YKY32bJqBJfGnAP1uZaur7gD1upTzmYpbPsiwY1Y9iburhAijfFrapsexhUMeTcRYMY3R3u",
  "key44": "VEo5xzyQTETW1b8iVmsEwJPiot8yCGGmDnRrVqRzdxuvFDzuhevq1GgwYjS2wsQfmnSf1LMrP1gDeFhkcyGcZKA"
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

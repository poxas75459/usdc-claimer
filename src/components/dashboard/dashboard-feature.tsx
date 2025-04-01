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
    "39JksTpqMh9AyKcCPoVBJrbFVRM5DueRce2EB7bEdBWeWCzwCTwTySXoWNaDdW99zYcmqnoSf5DyHQWfKKNe9GSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkHhCYERCFopgQHP78LRmrNGD5iE8bRYKZb3dUsBfAUpiHj2Eu7EBWfy6QrRGeZ7UCZF4syrg3rqest3fRyBcn1",
  "key1": "2gfX2E2y6Tj8uhhWbphA2qoStu3wQhZSQ4c3HTiJpEtyaTEZix6pC2m1k3DpYgALuRnQeEho8x7uWK31zzYCWaSf",
  "key2": "5CQe16wuJjroqsxzjTmM9vhZ3Ex6ApLJpmTZ75km7sGfnXs2Wv9xx3RruMGm5z54PRiVKiFZkCPDaouL47aui4tu",
  "key3": "5ukFYKAhxrvzeUzXG4EPn6LVeJR1qWsK4RnNbuTG621udt5Yd9HUJ7FopoPZ8PYMCFhEMEH5sCcNqixe49EFnk9W",
  "key4": "5gE15QPm9WUm7EC4UCu5zH8nioCkcPcb2z4snZcLCyR1SzwXSHAYFfBwgMfCaWHgA1zUtSAonuKycsDcch7f9hGp",
  "key5": "3R8ZUQWUYHvigHsWLQGn5z8GDH8pEuw2zGsv8iVCxgjxqSD1hTuPnu6rzX2vNG2ryvtQbLXKoQ4a7JXqsmxJT1mo",
  "key6": "2VYFTYFRBHp8eohpY14qPLm5aesTfEb7sTNCSXaqRZ6NrnejbqEBrD5thQoG6Rh5obMCGHTbtbkK3syWHghwDdU7",
  "key7": "5vskH7131LhgWWJHgG4Fbtnxe7q6xy7yT7URkEBWwH3PGkPzY9T8J4exhMVRixa2LoGaGQ6G94MKj87vHa4TFYXa",
  "key8": "5L25uymW7jbfKFhu95wAXmK7pSHcGZ9BgoU8f4JtzW4kxETxJHiQozCpkFQ7H8dkHs63oRC5yGfUpTYhcERPwtCW",
  "key9": "4V8jyvXFykqy88HFgoVksAnpux9uPDPyxWrmS53ed3CNtuV7N8vpxARd7VWVKAifFua2WUitvBGkWdSdASrbhLHZ",
  "key10": "5MZ4s2fyfnh56opEB3nqZ1Vu21QM2b4uBh7zosfuTuo6XRNkXc6Zu32sg4dx7brtGLVbTSwkeQXH8XzyA6kGj66n",
  "key11": "371homsbCB41ZeoEFigbMaps2b84VHgvikABL6JSmZ55LhBidBfFQnAe4qhH4PJs9SfrGVGyS2ti6TQf8xy6ZWgS",
  "key12": "S6wfWURyyNLwvfwk2oyfeSFR2q587YLTFzwspGfAm6Tgv9HRdPXprhgYybNU8UpxQpWVnSN4WWBxCWVHMV8P72D",
  "key13": "2SBkPvk6S4detgzZCPSs6vxuJq6VQNU11t9e85waia27WwvgTyT5MsDGjdgVdJJDTp6Me7D9ST3BYnQkyxXnDHFx",
  "key14": "2cHhbDh9g8eBu7o7f1kjtT8nnLawgc2L1TQKfzo8Q1s7DCV57b8TGF9Yycxk24x6EWLHdct1k7VjuqpNyFocX7yt",
  "key15": "65W86kv2jC7a7JWtmn8SU2JFPyKrPgNDPUB11PVTX5Aqc2USke5LuwdDdhpUDxwUGKpy4q5XYZ49jeocUZDivDZa",
  "key16": "2n3Em41UpTUiq9NxjDFGHirDcYanxC3UFh5uJrPUDHijgJ2yJ9S466Dn9CsydDFHEDHpdgLCgJAcf65zh2xNjZ28",
  "key17": "5aU8PgfUwzU4CcF5k185Ferj8aooB1dKoZH9V9ZVC77F4eFmiym5ky7cBUPAFfoJKEfFssXV3fz3dp73h8ZQvfa4",
  "key18": "3Rnxe9fN2d4c3vmJbmUp5hCY9bMVhH2CHHQaZm1jdFh7S1X75M257Rr4otxv6zCMQ9Ff6Y2VEUx5duPWY4EGR9Nq",
  "key19": "51LbA3fFBsKS5Zw49NmJMcJohpEKj9qGumdMJqFFwjsWfNeSsD988ww4sHivTv5WksS37HTCNHgyFJyieasLvLU6",
  "key20": "67Qgc8fTB2iJbdnWVMgaoXi5dXC9KWYM2LQ3kn1TzY1WEhiqSUxdt4PBFj5h2548yeJtUWkjQkyCFSsQoAzzMmhe",
  "key21": "2cnDvrnUcC6a4Sz3pGL6dP7uvSvGSwAYmSvSVCzZiBgS2428u5QKvQQZeyM4vJcfDB7c3sciLsQVAcduft7tr8kz",
  "key22": "5L9rxNWs9uo2GU2kENUoeByhqpZ8o96YzGz9ACt5CXPu3a1AVT3Jo2tGKcTnZ92ioDm3qsFwFEGKWggmw6AyG2Uw",
  "key23": "2rrfukE4sfaCtHfKqhaQxM838MvuCQfHgPuvR9y63MUkSws7Zf1mATisamndZEaDp46jogpY21wTE8DeJ1sqZJ6n",
  "key24": "3tim5JsTMV6UZ2xBiUYXFQxLrAXMeAyYDJV1svkm8j27p8dEpD6G72cdHqqtzjJZ1kZ7d7BUF44vjPdFZVTXhtVD",
  "key25": "4dYtM9RbffvLcVpRhyBnkHTYaaupkDDLT1hCB5JhfPifvtGcgKfWzawgoQdBoSynmynyWrivbGgQDg4UGWHpxWVR",
  "key26": "JoAbtfTHxMp47qi1i4o7bekHqkiUmv3g5arUAWKiFZxF6dsXTqaHAcE1nUBK8LGuuMBCCr35wtvnU2x4RcQsXsU",
  "key27": "3HnxLk7cbuVfMA3DCMiU2f1J8KrxxU7hn8CQgY3qi3Hq7BHqiXtkEHM6JiRzma8ncRBquWGEds6yVmZkRToGbQxJ",
  "key28": "4VjP3YMTbtcp2bu7CeW7iYpxqkW3n4wDKf3GyTrdNCxjbMM5eE3rQZStww2sMc8fSN6GZSdkKwCPnnXK6MNs1mvm",
  "key29": "4Y71ThTyS77oeYSBfLFiL6T7U6REpR55drZuUxMsc6jrFa6h73QUaSzyR3asjRwt3egXdfVbNvjRWjJFrr2v89VN",
  "key30": "5r85WFFpv8RajSg9SMzCGnfLNne3RSeqGqxiTYuADpAtnYyJXzDqreksWqvLxSHg4nGaJcYcmskvCmtcMszbdUKh",
  "key31": "3ZDKt8nvZWPJCpXcaWmATP6hZqAwrE7X9ET1iR11tPDh9xXgx3Kh7DzSur9zfjtqEB2c1cddFv3Yt6HjZAZ64TMm",
  "key32": "57GPihwVTVtG9F9CRhgVjfa6VZqfXvgekwtn2RSziLjVxXXSDQe3xWrfSCCKq7c4gUed8qoCmeKqCijYKhXRcDod",
  "key33": "ui3XYQngffjqKarwSmyEf7V96XJumtL6oES5Pi7P4eGAd2BKgtgKVXLTqJwjL6wAPC8rEX2F8TkDBAQ5rdPckJ8",
  "key34": "4DybXGi9uCCaqT7KnYzFneU1wuTgpsn9UrRR5uoqjECP1gJqiHtetCgoUvFWvyLSANEKsbpmvCKXnrKeArm4zWvU",
  "key35": "2TsBTjhkenY6DBbvkvJkQrzAhjSGQAPvSZoLGFpgCa9N1b9RxehDycGmYHkKFndj28Gn5mkYqEZiBjARzGmvbh9m",
  "key36": "21FME4XfNUTj2c3trGf6xToGdjyC2XmYeGbibYXm92GZBhqtEH49sb4Cb5jRNAQN9Apu6uPDExwfD8oMhwkHrWBb",
  "key37": "2GEJF8EguZSTov7Xn6xPZSGfN9USbFpQAuTync7FkSwKsJYs7smvGxHwxshDg7Rea9wAG5VNepGdSKMxy2G2JFM8",
  "key38": "4wg1fVgn1qDkZeeLU49n8LcvQP4ethxiD44FxaPfe53fQ58QAteH9v2c2SYAL4rVLpdhFjv4DL1Ro5cGnDUb4ynr"
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

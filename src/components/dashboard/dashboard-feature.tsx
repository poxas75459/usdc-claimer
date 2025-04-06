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
    "3aZMNYcw21X399CpM1aMeUmwtgB6D54NmnUKpnzppEF6YRHuHkF9dv42KQLJKMSp4PJBvpmHeL38UPyVWa2zHY3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtFjR9bY1FeHUgJAQowPN1GARusNqZQaHPPcyLuwrCWh5ZpJybqMd79mKHEy6T7M7eC2YFvuiQ8hBhbxqPxquNo",
  "key1": "38mFHQBoRF6akXKZhqjocqdbF5Wb38aNfcBMfR2uSxnkkd9xQTKSsSfen4mHaRxjd3Bs8sCkZawq1UmgjbsmcZzp",
  "key2": "4Y6LYmprqjQSjmLUSuApPjLjDfNpNCiXNFYBiEeyLveqTkThcrxTD4e4DfTwiyU21gRfVcSHL6A28EHhiMjC5Z1q",
  "key3": "7mALeDSenxhqxXWUp6U6Q6sV5BbRFYYVkNYhgGEA8vbJqJCSxD3DiEXK1aRzGvuTznfKn96Gp4Ysit8ywcF3MCb",
  "key4": "3NpSr6ogFqAgff2xEjqqkjXE3ZsfawP3JNyRQXX3bV1tnN7rjhiZbvRrv8BR9XQmqbveR47igbCVzJ6QRT3Nb7dc",
  "key5": "5RMmMBNNxxZ4giUymYMgagwUDTSoZ5MA7NqUMNcbckZex2KuQvAQUMXidhxfv13DKZifuuwAKYgCkEzHUqqyfSt4",
  "key6": "2ue7624c8G8N4H2Nm278Yq3iXVEG7gnPCt4hacU8DLVxrGb5op6FTfV5cruTbrpZQ44UoFmfL5E6oeF4Sp3J6GiE",
  "key7": "2YywesGKsSu4Wr3riQUb5GPgTLUTSFZjNEQQQNYAaMGicBJi5Bqigbc6wGTgF6tEncNCoTLjKzrFagWbY9unMyUJ",
  "key8": "5cY1sziDCCeDpMa4AD2d5FwFcFi3VXfFYHg9fvwyhHfN4nnofPj8Ctmc25cdF6mXwzKHjnVVeVmQxawWdH9Y57p2",
  "key9": "4YpUBodb7Jhvhj8qAaDeFA5nMgipWuKcSNoJG9gY1BtLdADPxQetnuTFaUj19Tv1d9HZz6VoCbnfBer5kNeBFCe4",
  "key10": "3TAyUWHFTWgG91SjZFsfWQeXaWRKXwKyYBXV8oGeK24ixaC2mq5XdjSxMJfqKvX8JdBkHcDc2qCXF3rv1Wi55LvL",
  "key11": "3P63PqhBZwYjVJvBYTXv5Utj24Bi6uxR41D8gWV3owdvsMYfFRLH1bwrQVWwa3CK7bmfSpmVr62dWVKZ9o48nyu",
  "key12": "RN7bUPvbbvUnNyGZzDFTzuZMoorZ7smcaSdhZLsng5gJGDZUyxJNAvN8urL7dPTA4kS1KMMEYj8upJyznVFYnRh",
  "key13": "r6qnGwbyxmHjZfU2V8UY8HBi2xrEYAKZsTHbY6f9GspSAanzd75fR6dJWwEkDRX5Kw2TsASrysBxrqBmYrAvEqC",
  "key14": "5Z5rmRnA79B9hEniK7J7e2CizpiJRYevJK22L6iFU5rTKHaZ2AsmGQRXwsruvZbhnqrEGyneXKpfXJPgYKCVK7nG",
  "key15": "39ELmowxTLFRuZsjEz3PVP86xNrJG6aZRmxgZsAGpN89GfJNu7ZGYvz9fwFSvpNtpSq2RgFhSL95ggDMbGu4f51g",
  "key16": "3R5pHV7eUMmn3qGd6Aa8HrXupnETJMxJcuBLmz2RcazXUiuhptunJKzrFgMTAo3Dqq7rsHTWdBNmJUBdhZTm6Ter",
  "key17": "4LMKS3SYKgy9JvS1aEnezBHiUB3KEe9cLebZMWJEyBD6YizycHtqnRDsmTTqs95pDh1RFuSa2pWYwP4um3EwkvQx",
  "key18": "35btjTH795vCUNqcrSmHFQjTwPcJKLMxQPPbpM1ag9Gme7FdGN46ydfXSxKnN4BAsb99GJTs97PQnGMQnt51X4a2",
  "key19": "4aJG3Cehjvzs7E579WPkQ3QqcAimwbgr8D7GE52yGu64mYnJVmqra4uZHjXNwemdKQUDMu6Edn7EhgA7W3Wh5mSb",
  "key20": "2ZK9Sr3XqGpJafpZXtuzi74pwL8gybHVoqgLc5ySDeYgEDzNwQVUWh3G28szPWHBifdZwNNbbHfqk8japzWoXBzw",
  "key21": "5ckVN3QA4y3XfiVmwCFPkGHD3fc9u41kxVbPaLuRGdEZitSKKciYEuwcH4R66L4uA72NbET5pgoqnVwtToPcEaHn",
  "key22": "5jkRV1nVpDD2xm2PsXiS1Ryxua81RLDJ3DDud2LrcdDLvCCjGAy9r4D4DbFEBgGPGovv1KnfYN1rUZFtEG3bgRUN",
  "key23": "2q1yVVgtzVB6LLo3wjk2mNCBrxDqr5SKpsfWMUfZjXSRMdkC2i5siAZeYR4PesXoJZQJQqXf5K9KeM92dgGJD7ZV",
  "key24": "2FR3DArmtzA8hPSE5Q26XsxJYHGioriSPx274qpku2wrFStMJ5d5gieQDcnkphDF1vc8QTiNtknRdKLsc6DMM7yN",
  "key25": "5HNAwmAcTQHZRyn7LDz4TR2S2pSEYNv8i19QXnrgEkYyB9vawtWJcRmnzgEBNzUaWqpLDp4hw9LyyW4VbKBjnG3x",
  "key26": "5xD2PHykbvJqpgDTQZeyRPMHwCw3xo91AaVfBYeFU8t5Mp13kUBQ8UhFCQhkruczMcD2RJp81T596sYXL7DtB1F2",
  "key27": "4fntjPaSNfRuAME9hD5KMvEVpWZqzmmU3k3qrHsd2raCknzqb41mXj1D2zh8L3Syqm1FRqNGwbJagxG9RpRsTwPE",
  "key28": "2uh2GEYS9Su1u3A3UKxpPzeEqVyGpZ6dQf1sawY9VCMVrq4WvfyQjBUnLDWbQjKbEcaBXp2QmLnCNJzzXsCiHFJ8",
  "key29": "2yPjEBwzznasKYi5CWC49WXNHucJouYTpmQnJr5NPL2AHk6mDq5YdWBxxwr3zwXgxarBDzyEpboi1SLTNESDfUX4",
  "key30": "57wacJDa3d6ockABiQ4L96kM8PVUMxeCAmcp2ZvPSSf9mPpJKxE5mqoqHchjYpSSQ3yU49dANrbx7VmEafexH76e",
  "key31": "3YtY6xm1wG9JK77hFR98HwHsianGFA7aRxL3qddrec8LcysN8hMeJBPaek1SCKuuLgig13VUjzZnumigAv6C7FCV",
  "key32": "54T7CPBB1XyLMYHXPYC2Ve4ypeL6e3cY5RuARHQ94DHNWEsaEG15sz9vDJHcZaXKVafqM6bxuFRko4qPuJbASi8r",
  "key33": "r8AZxJ6n7EsvhJYVgoJkX92CgCofU3sMKaNwMMszUn68HbSxLLVtUkLNqw1NEbwDQPtzaR4GQPiRCSTkevFQdq6",
  "key34": "5h5mfB3z4paUjc5jtwZoWD4HhhZBB8epDCKNjH42SFCBmFWyhfemXjXPtMPG2kYnzEXdt4zvMmPHagxGwEcQKh8s",
  "key35": "4obGXmhva5T9Rugtva3J1YH3AwhJrkMoeUFxLgbJ4LJ83aH934MYZKE1bmR7BaVBv24XasyR5uP12cyvh9MGMqA6",
  "key36": "5bfqtousj3eXH4uRAkVvm4u86LA4ALYsoRtNPHBaRNjz2kPKd5F35sqfwij1bAz8bTjzhrRpLoebdhkz4793dpcR",
  "key37": "3WUXnQ9iHhr75tNWzQ5gaaTEnxxfDctRtrETUsLroBVWvpoa12irS9NMaZjtpnTcUcn3qR56dDoZat4NUnUBbu1X",
  "key38": "4WCYFuoYCT3U9rhMMrzukBkR4UiaG3UscSScv7AVRhMRs6vWkvs4D4YxCawuP7FDvNfMDwH3u3rtPxCAJZL2Sz3s",
  "key39": "51b1QkWQAok1cU755AGZ7FC6eyg7vMrf2bQ1ffzgq8Wokz1Y3skzvEDPrLLyJZwLpKXScKnTu3bRX1XrR4f1eQSL",
  "key40": "5HM5v1KTXa4Tnpy9VhYXEXYMo68iAhToD1A1BDn5su6D7dqDfFBifcjEYeHH7N8TZKRJM8p9tGax9PstueKUQEya",
  "key41": "4S7kjyV9Rchbw5eKGXs183pp5Mw5iA23XUAFPfmwEWHikyHAKr39AwwjFR9kGTdybDi3UFoSRydEyEyfqLWnx15D",
  "key42": "4KVGuYZjGKGyrkU2MRyK5Atc4rTQVt6n9xNEm5zjZ3zjfWkrwRd5BoX1mr7NmoG1D4qdukYg9jvm8uEbA7arNz96",
  "key43": "562Q7hRBLCdr59TnYQn1JAPD3nZsfBFYUkhhiswyQPmvLeesLgbxbQtVQ55ZCckq7FuCE4752LwWGUGvFm7H3D6q"
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

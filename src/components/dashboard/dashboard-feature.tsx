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
    "4VWTK4W8hZXh53wpjXsrTYYjxFom8iqkkQdLfxNZunuG9Wu165wuE5wQPBphJUiLA81GuNuJdz4J1UKM3oVBXQL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9AzYEBF6dHaj73YTba1Ca5AsTwSJsb2Z1qcE5rbtapavjgj68U6FPwwnFawPtVBaQLtSusTh7QeWZEUbZv2DQw",
  "key1": "5bWYUehwEnnxCnX2uqpsMCEd81NpJWUEakzJUEiNB29pgZTmKz2vLgVib4ycAg2d9r83hC4t1R9oQBvJLiqhNW2W",
  "key2": "5PAgR1udB9a6s8sBFqMqj8hTNFTixJLhRL6b1D2jXaWGB5e7QRkF5vV1kL3eyXxKLNWTU4xwZ5A3QdCbXHrmRu5V",
  "key3": "TuZGgvHGKf7s2LESUF5v1kg4hWZvkEU4Kye4VxMYtHhRLoRxdBDDudxJCeLoV6ZiNfs643CrwBTDbR5wfL61vB4",
  "key4": "4BeEuFRJKXkovLy3Nupm9stAkz6zKqofSrixAhuRL6XRmRuXyoDMYCWSgZCbos3sHi1wJcf8FA8pL8JAB4oBGXGz",
  "key5": "2dD95gVWC3RTsHMY2HT5d4sWVDoAvont8xQQtKqMmsgpkndbg5yihvQ6QDCXD2EkxRgdqnEYpr4FbDae4JMnFThb",
  "key6": "3i1KyKUNB5rHbyofr5BZdvvb9vbpCyLUue9s3KHE8XDYUwbCPQotX2mqWga2dErKKdgLULyGZh4tYZbXYHCpCdc1",
  "key7": "NPnJUteWKG67xi4YnPDZXKKT6rUR7VYvfPQKuDYFUAaS4gnXkLryKcPhtAnS5E5j7BEcEqYgZrJHPRgD444zJvy",
  "key8": "3xXon3JYhyGNSkUgnoDUn6yzPEvrxkUYW1oejA5bgeLV1ojHVFW4oqfj9LqGuvo5iqGe7sQ4opYVZqDoYv8qYJNx",
  "key9": "3sMngDFoWoR12e2bL9R32QMRYkuck8Nrs8RAJmm4X6oDBmNKHAo2YKzmUwFNzLfQhnsdMJx33BSbJ5n2GzZfMsAV",
  "key10": "67oUFWXvext9zSS3tnWukYdRzh6jc7njvbodX44qXKzku9VVR7mg9TK3Maux4jYTEi3c53h16MiTaTo9QL2a9V3h",
  "key11": "2t8UfYkU5pCi91iACpxNSAmsCY84edPJCSDHmK5poQG73pEre8DJgnRXorFJRi9DEqX4FQYXBQQg9aU2MEdfieHY",
  "key12": "338KPqdLnfRHv7LkMgAzBdqEMneDzsdgyniXMgkEWea53EpDQKUHKVuXtkYUpWrmM8JMHro8fQLNhmVMxESpFQoX",
  "key13": "39sy8388ML7JPocNQgg4YWC3FLY6S6i3BtGvZGZ1AFX1qCQ3RYzBxfTXbHeB8Vd4uGqUhEHajEGNrSxx5B3zzuo4",
  "key14": "3ibRqu43hJuSFwAufHini2PWMqco2dk2RCsJVJwfKQhrDcqcZDWbxDQj2vqDqr9XXK89PYiWFYweFuacjKXetDn3",
  "key15": "2RQkPEqh5GZkHnMbjeLNHujKT7J1cLiq48hMeu9Dae5HLHPhDerSsqMx831w24P3trJeeTgZNrHjtYmcjV9UR5Vd",
  "key16": "5CDPLkSP1guPfU76SQacD6gG1wA7CRv7K4BseDmaG7v4SY9HtuSAfAS4FNVP75dvQeBuB7tZquZHGpah3U7fpV3u",
  "key17": "5DofS9v4ANHVfBJ5D2nSfUzwQQ2zwzvhKkBPmD1kf6qHb2MEbHZD4XtUfAUA4U2TRB4niudBpGagxQc3aELcpuj2",
  "key18": "2tJcvDvFRo5myu6FJTSimcwHmoodXoq7bNdsrVDCtuRQ63kqpTN9txUQ6Uijr4eeFjt3ZyUm5AKjknJqR6xMPiH3",
  "key19": "DjBDxtHcheGGmaAuj6vG9uvMFTAgXkYuNdMPYynNuAqU3eb1Yg2hQ8AvSQNfzbL4TA3Fk7BbTW1jubBPHCNCF2K",
  "key20": "4CkwL2qaWjFg31r3bNgwg9WVBDi5Ky8Sh1YqWKvWMYw2yLziPy45nRCz6BGzkTAbS9Ev4UG37BFspHVRckxukbZ1",
  "key21": "53DcJ73DqjnSLBmynQQzwHj1tBYVXgizRC83Be3T4S9qZvuHbDqS9mwNZq1Wvg4NZi4o9WLS8VWt3r9ajyZDwcoD",
  "key22": "5NWNdJH1gCru4hkbAfEfA4PQ68UdxqaRVw7vJaV9VVzkfsz2Sa9Ly2PZ4V8HqtP3e9mmqK1Bu7qYJcgD7sutCPR6",
  "key23": "4wJ1oQeEQCdsnBjjrd7ktF973jLshzJWSDchGeXvw2XCbrEnqdrVkV9pX8Yvu9CMYNrykCY1AQ3MApQcfSpFQjrk",
  "key24": "3Do5yBLtuy4e1su5zL2JCV9BJwbuzqGYhySHfvPRA3DjyUYWpLBRoRTDDSam1QdQXRwgqQh4C31Pzw2Aht9KEpGC",
  "key25": "56AsbPXeu7mALFTvTN7CHGzoRS2ZfVwqF3cEv6NzYwxNcVC8FL9LPdP2W4WgKqZHq3faPsJeuGRLSYU7XawUreQa",
  "key26": "ytDuApnnirT93LEqASEiLrzyS8uiKhZVVoqMCaUxoE23wUrAdMKythxvB595BfdN1zurriPUwvmpKtxuD7Z8UFa",
  "key27": "638cZRySpkCKKzJubXKBrP3QdiWvcBsXZdEYf6NhhuiSeUGBCppTX7YNmaMq26WQ3TsmasyvVwhqjDtuvmCcfLQg",
  "key28": "ZHaBYE9E153cg3cSbcCt6mw22udPpUfokRdeJLCSf2SUL8P6Kb8xZVDPAQBvSz2biLGFuxe6frz2nBkRZsUFLCb",
  "key29": "3gmR8ndfubyCR5KAcobapQkv5AxVhnyYFfdDFTYZdkNoFyhA9nPWfD8dJcAgaKpGiCGuQCub4A1QmUoqrA55vCBW",
  "key30": "4zj9DMBr3yeGuvv3zSLQW1zFRxwKzh5PhM5ka73KW7deAS9WryEK4456h3568QccKPr2MPqbQBPxpREdTvzVsUHz",
  "key31": "3WxjtfmHvDqQkQ26f13qs2H31ragNeGLKrc9FotNRreVJ3KC19dYJ1n97u8YF6vrLcsB5doXKdxYpy6xMfuvVtQE"
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

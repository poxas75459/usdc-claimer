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
    "3KCChcrg6CNsRenPDE1drWr7WvcLscXxaT8GyMnZVYNpDgj8Uur3yY1APbVTfyA8cdbhz1mxj72uDgVyE5xqfSuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fd3LE4eaVaT6ztpN88WAwQEa4pzXry9hWz7oYLPCSB6tvR29K2QASzx9VD2fAiexN93xf7kkGGe2Zr9eUzJwqTp",
  "key1": "49EKPFjKiY7qKF9FJ1c8zdjFVXhbdUAXbQbom4jeZcCqRDUFU9SequkHV9bSefr5UFVbgtGyjkzU9DRN75p559f8",
  "key2": "51QaaDA4bfST2zNcBdiqbCMBSTcWzYggioa9P2HZG7YE8vcUm5JTmTMDYydVG4cErybRQb3Fr496aahNvUr1KrB4",
  "key3": "2sJaMJtnfVeiyDoYsvfJtoPG3bsHMPygUyzQ8fhVnJQ1cDA6CJeEFgz2Nw1msYKDV6tg61iWAQFtmNGvtakjRJmn",
  "key4": "5JDXqYDrTgCVLJ99qajGHw6v6FqHQM7wNXk1Wk5L414f9bWeTbFPbxjpHKabSBwMuLphpqwyk9P3Fu4kXFS7tGo2",
  "key5": "5Yutpee2hBKNT4R7zxim19NDLDH9zBQiykigUHx9R98nTMBGgxUXvsq4uvAFhjneNf1xFQNprpoX2Z1H31QSdmfv",
  "key6": "3gTnGYHcxt3ucNbBEwSzhpWfp9GztXPr31P4CDuyMsibXQG72jwWjp9uGNuE34tjpvgg6KsLW7u5pLPiWLSgL6xz",
  "key7": "2S3GLvhap5KUDNfFMwborPJo9Qd8ELnddmcAFadMTGksGxA7ZE9DLwZNFWYEUZ4S3rrPmZC9zzp9xnh5Hyf5oZey",
  "key8": "5GfVJENXsJ6WbHPqKC5zKMCERoGrg3L6nTRvyKJ9ruqqqXRugt3GQX9hu3h7nVAEN6Rzo5DBemwwpgMaZzHQBPP5",
  "key9": "2SsVuC7c2gZgzxXR7WfG7VhkfgLqvcrkrQvHfPntX4d5ohme24A6zsK4Gxr4jBx6kKSw9McEXZ26R9aaA3KrvqY8",
  "key10": "3BKXK7WBR3GTxd6YvM9kFUe1ZkVmbVxFKNJxcaQhWbdSfdqafhsY6j1fTNfH7D5Q7ZoKaMrfaoJSrbfQvSvgURyn",
  "key11": "538VHXJ2A78TuLiNkNjk7fufj5ytzMjXejUvmbcxp6R4HTULGX5eM6EpXJKk6D4p7Qm3oS3THBfEsKdrLho1imjM",
  "key12": "3KVZQSE1PiVMVr7Zfvzd5bzqPkDHeJLdWCZXypQzq2h2u7P2CdiRTDofpHmxrCnKnVBn6EddA65zkcA3jxp41hrd",
  "key13": "YtvTbPsejWS3NGNAaRemjwbEhdZF2Wnbpf7huMSMebLEVtRi4dNzeZm4vpvMuz1PzHA7dpA9X7ofwWV9v1xXRcg",
  "key14": "Tk1xEHM1BUZq7ZNvQPnwA9CGeo3MvmmPGc1ZkaJwu3ButUf1jYbDfEtmMTjUQtFKAvs74EFS34YN6qjNytnHnqW",
  "key15": "55y5vP6bNQGEGznPqDBZwhcfxWa96WP934FjsX56FXyje54pjXnP1irsiuFPyq3ue8avu74penjp9wYJPnDtMLyd",
  "key16": "b8J9g7VAyNuk5cjNWybWpJtzYbzQuQvDZTLEYVj6GeHZYqCy1BTaPuS8EsWD91QvRatnZSDpKg7mS2dMW6ZMNFY",
  "key17": "NTGf1FkCYf6nTQZ1vhPKBep7ykB3NypdPHjQtRkA3ZxTfryC7RGRgoo38G3ovPTrngRbT3EogKnwAmUhroFeZ9d",
  "key18": "4XwoRf5Wbp7GH5W2deW1XAvdgSsZcGNkR1hNwLR6FQJF8hLWyWBgDxWsadmJRgGSHLGAEVmmT7pNgwBKXJjK6BWG",
  "key19": "2HabmboE3qiBtefEXyjqq3agdAMctqgUKW1MCewXft1imweokdDR2sSXNvd6ccNCWMCqrXTgyj44MwqcqTotxdue",
  "key20": "4wyFVRWVAw232KMAovXPpHWQMME5kkd6RePuLC7DQhwepR4XTCKQSRzh7vpJU2vFNXJ14a2hAjXa6FhRgZhSBeuJ",
  "key21": "3HDunDvAbHBrKLbrRTxNaZnjNs4fsfafeEm1ASipvixGTghyQbidBt8GDVBWd4q4caLVbhn2q4RwREr4AkDGxzcX",
  "key22": "32ap2QYTHv3X7PX8dbf2sNgRZvPPoWrkjx3EooLQrsYRPw2jkcFzdt83nREuE3N9nS8dSBSJnggDX5NUHJrma99f",
  "key23": "4HY7pUHsNUjxG4CTreD6podWgkjdok9V19fRAtq8we7CUt6ffZ3gLpmJj5etRWY71dV3boo7Hp6pGcNPLJRZbvKL",
  "key24": "ANHVje9D9JSbBhgW8rYPvhLop62qbtbWMRyp7pGbwLzHg35PBBm7aYcr2vkCUzLPBzZyeBHB1dHKvBCCBV75tfY",
  "key25": "QRTnSJWErjRmvG2jQz6BYn267tJsj7bs78B12hd3mWDkk1SScxBEBRqbSAywxNreftxUHZ7nYiXfrxdFUbesTAg",
  "key26": "Yr1sdn8LnHesyXUGMnh1odCQ3TfiGEu4kztc4pER5tYNdCKXyq1VfVW5FTnMbxUVerEzD5mMYpZ9EPbVdsgk8YU",
  "key27": "3ZkewNxBvrFZdzf79drAyFP9oGkqHZhV1VxEkcJxTQC2xNKgswehLAnV5No9aFWfEKyTF5BntdeZCAFAZPt5srXq",
  "key28": "GYioiiuQpdzuH6y7PNVfLhCHipkrnPdEmFvXctCfYAKGH7aBPECF9fq1cFddffWDKPH5m1gJuvcneAELoJAFcAM",
  "key29": "2V2zjF45JhdTMZnrBPqp4JWZZaCnM4yQP53N3AgJB1s4hiLC6YTiD9RyzfbKZ4zqGBgUBmkXZkjJhY5GhnVC2BWq",
  "key30": "53FmU5Yd1voQ5HErV3P1obamEps5ZkHeU2kCZnArHQooT4vobs4iLHMKPfBSMEkb9Rx6avBXv6ZHx4RWQD63KxZK",
  "key31": "2RLAjjom7bbG5QUG48rEQr8vGRxH9n92JP4JMLvyXLwpfRcvrgXSh4CbSSRccWNdkEaRw1zPDPg26dosL2EkUWda"
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

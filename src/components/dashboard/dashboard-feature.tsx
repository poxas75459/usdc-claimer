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
    "5YZqDDsgnCeZs55C2oTPmEBfvNycer1oxmYdED5Xk6Mzruef6aSsWmnVFGRrHQRDXQYbujQ1Qkp1Nff9FErvRK3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XaD4hxEwdpT1S6ZzGuHZawJ3hLjzQvr6sTMURzf3Lb1MpVndSam4EKvMvVht3FmWnrvhouJk6yMJifHwnzbKAdA",
  "key1": "5G2vWRFPzr8UXLHySDN88NiCoEoL3z89FLnobhbqSsrq9V3JjFW1M2jVUVFct5NTFnfR8oczv5FJJ6DAkuPp4L6b",
  "key2": "ymRSLKGCYMvV9yCTdY8ki66HrehrFoAQEaMuAeXMjyrPX2nJMqh7L9L6yDfdBLm74QFU4DCDGBKajWL4t1MzX2q",
  "key3": "5TdP4QAgnUqMrsDWG3kXbeij6sKGSwfGSQTkwWUyNLeZQPdhVFvKPQPxyDkEqYbtdsL8KT7bswmQgC5ESAjATRTz",
  "key4": "485C1fyiaBrH57HP8KpEiisb6J5xQsEhiA4UHEy5bc9k5sZFVDfVRDhoFTbugwBpPv41YFttqEBMvdZtovKGeevL",
  "key5": "4CU3Ap1BpVSNV3JVhafJoHXn89kW5yhUWmtdaKN92RdnjVegs3zA3FApdh6GxhGUXmhEN8W5PmZbpvtW5uy8p9ym",
  "key6": "qUErCTMQyLSGo2ceWcxGP64Ha6wLQrmTMrZ8RwoYuPvEHbLrMzA1PuyqxaUDG9TZaGtsHfaHb8XKuS2KTLERV9v",
  "key7": "58Dnr6LBKXFL1swr4JzVjDjNkXpEXky7LepuQUtnzRjLnB1VBQXxPevC8E3GUs7VGutX9nf4Twttj2G5YZp6adFS",
  "key8": "4pDYhN3a6ohgajGZzo6FocC88gZo1NdWMqzoxfJrT1Qbe9j9b5ZwSx5zvSzChFq7Y6Uf1G89y4edewZ6vYi3LJuL",
  "key9": "2UqVWb6yWunZgcx2EZA26j299HapwKsybJZPeHzWA3Qdxnc4smH2VT83WC7yxRRfpar5hGN2p3ihKsp3buf4S9bR",
  "key10": "5QYZHUBTWWjAkYWsRhmrG7GhJZavi6rJUiGffAyzmgQWyMHR12iDYkZSpY6naZvnM3pQs4ghDroTXP8rpVFBuTUt",
  "key11": "3hsfpYxGkt15xSRjkKYcHeTLBLwCBEPKtqRfBeSW24cMY2jCGVkiwjgruMykPZTnQPkZm8yx5dwLtzfybHnuqAGn",
  "key12": "53aptMAthDGBg94jLDXzxTHgnuq7q2iDq698FMj3NKKq3gRkHiztmu2PHTg5Vhxk3991TnGKNoPQmVKtREr8uUXY",
  "key13": "2ziUHQzBAkqoeBHZmGkgWw9JgAKTbTktwZ84JjdVQqVsRLHf5mkDJ2LTJZxdHsZSnVMNjoHvJVaW9xMa4xwQbDpB",
  "key14": "38PNyfgVrUszbDL4n3MK3qdjHUS3yGC4JwrpaJ1gcprM6oNnH8r7hwrVohhPW2mZxSpvNQFLM46mYiaFSgajqRmN",
  "key15": "4U3PmF5DCkKKzuJFkkuhgK3U5h9XM5A3sFUM8ipCqKKQLVsmpPBiGDfShQbYe789KDgFCtRYBWVfTUCravY4Pdbj",
  "key16": "GqpAR1vkrbffP5z3BqY5yaTAW5pnMSqoMCayR1LzcWeepXqE9NjDfjoWvp4QMXEUu2JbKrDBqAnxfsj4imGZunb",
  "key17": "5HEPCEDQe7rXxUXu7MJ96M6od4d1w75Tt4diBv75npHSqXKQH1eknZFmrNSDXDw1svFEvMadhakcbgpW3qzpxjaq",
  "key18": "3b5NRJEGRo6Zub3kWXFRFeNtgwfMtFrpizuieXCTp9kybiqZA8unaXv632YnvFBsAYccBZa5yQ2Usx2qD1DC2yHd",
  "key19": "3p3PVeRgaJNQH3nT1HFRbPr1ef5wwTMUvPj9mCcoKcnYHph7nkVQdUrvVjKyARV6t9TghiHCLk75cXK6dQerz3Fa",
  "key20": "5Y8b637X1uWm6A99PvQZoVtDCkp1a87nHg1NyzdxUpPaU2YqRxv4mo33HHfokjvgMJqv9P5zqsLpbWQuJRr4tXvj",
  "key21": "2hEy3RgjUkux64qFri6RFMt8mrGK8y772brCDiwfJsk5pjF78JnHGFqAKDfhq84epYoGGeaozQM7Px2acT6ACEn3",
  "key22": "2cBdjzZCrE3YT6MAc1FLdgXcAHjRhRRKXffRT7vFcDsCWGq1F29DaV938Kjbd2xRSaLtsyd4GT1U8YJd1vvm5Q62",
  "key23": "nxDZGNrAVRWq2kKTS3jVzqAdPjrRm8XWiWszpynufXMFkef2jidguabKUAbbeMs5vGzh4UED7TaqQhGwHEFDQa5",
  "key24": "29NJ3utQnUXBrs2AR1ANqVvp2og7FuEzzy5qT9SMdQ2w5aKkZyu179qDp1GUaMLvKmHsXLKHuj8DTZ1vRrvy3bMU",
  "key25": "2QMLYG2vuyfSRo5XcnB7UEYqfjrRwF5h2pFbe62cN2dk2gXZww9gAoSH6E4Sui2vZcqjqohinMC6a5XYkfGkQcAU",
  "key26": "58h8JMGCiN9ekYrNkqgVSVrJKC1Z8PNeMkheD6WjNCrtbvQDJdAVhnmVD9ouFk72UWjUqKbHuyRn9y6jahBFRtpk",
  "key27": "4sMzVRmU3x13HRAsXsZAzpKw2NtG8Tk7p98nF15soUPq3qRXmKAxxG4rPAV1SuEjwj5Bk1sUBV9CEv11fNpMQ2f4",
  "key28": "4RpvR93Yd4EEAmAJfzmpKgNTyTcPsptSTCr14DLqyH7TZP9CP89MpUmaMDFXAGTDmY6VMX5YNDpwuUbcPwLhLANP",
  "key29": "73b8hyDeFpV7yGqei8aSQG9sQLbYbgB3xU662xvcsBw8kxvucWgkcGTWmAt1s1FQ97K4CfanHSjtbUmqj3sRws7",
  "key30": "3DH5Jb8Yuvk35o3TZkUgbHNUWYDZGhaFGrmyh1ifnpqwovEXqLyXEuKiYrpaAa1YZqGepEdssN59gEkxK5XRgzA1",
  "key31": "5doDcB2oFrcgH251dpkbhF2XcWAgZx3rTukQrJvSXehpFMvhyjR6MQg5mUaoYL1GEmTke5bxuUDnHVSxNwU7TzHd"
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

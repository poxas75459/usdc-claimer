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
    "2E3We4AtMA1wLXwbXmL2X619d8Xas7qBc77ipbEEVhCt9AipL5HRJEBpvsHaHVaNwQSzJ6yJtECJmvPKK166Sday"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsFLyf8JjgV42RM2bDUP6mVfUJJzxRZn5RwB4K7DNB1czAEeFuw2mYv1HMPVknr89pKRW7hP8Qjqh8qXEEYRugg",
  "key1": "4FGY4SSVh946ugCaoDKv2uQWjoZTgoyZT9vJNefu9HtF96j6ZUjk93F4XRAwHUubfDioNEZjMq4nhhDQaZLj2YwU",
  "key2": "2Dw5Lq5E2mAv12E6P2MTYT5WVE7ULHox49DxTWCaGjHqun8QSLYYteKER7k68QNVfoPAQJtgQ64bc62r9Vt1cwYe",
  "key3": "pkc5CVXq2oVjuRkd4ZxmkgF5RVNVP2Zkj95T1qUWKQ2T4r5V74KYtpSXrmWUVVcaiMpZNkLTgkeub6wDhbc6QgB",
  "key4": "3wSRciVDCQeJaeNm7Lan3UrRK2TRLp8EvX3xHnct1ASCZRGJDAZsaqnyzRXB8XcCsz8XoGfSggyD5UNiZHUWEewE",
  "key5": "5KnDabFH9kPNNAsrqFQW83SE5A6fZyUGik5PBwwg4AT84mPMDhRkkmZpWYVb6Gaa669ABqZFby9NSpeJkFA7pB83",
  "key6": "3qLSWytBg2inDo7GSYfRxx9RsP1QNVXoyq53kxdc5CVCwc8g9momNHc69MDmKALgfbBPJe5cyZpoTvDBD7FqzkC7",
  "key7": "32x1CKHy69ouRqrF358HsTBdacx1VKXjhYAahVpp4m35hKCWWcytJYmrHQq5KyKFEa69S6LxN5hFmyU5QVsbJtra",
  "key8": "4hSDkZuXWatgrzPZ2YhQ3diiG67giF3iVV8yjizmtUj1HgKNH8sVXZKBBN43GXYvKyiQLnkTo5d2e9vRQZ3NbAYD",
  "key9": "36PgFqADvdAeUzXxKRQcUANycMSxZuQxJjHRX6oqKncyhteLNmpjWUoPa9qANTjpobdQhXw2Xha1um6Xkvi7hvs3",
  "key10": "3MPQqCeenHPztRYQRgrFEc7BZATGLMuTQhRqD52N9EvVU8NFexobHZSo7Rk1fyUZu8kCPEgB7Zekcy66BG2ncWHp",
  "key11": "4kfqaHTNZAQnX69uzPYXdUt2LdicSpmgyrZtQ5T3R4wxJgjZp7UxpL3KnJGvbzJutUhCepe3Ruv5WA4otpSd5qd",
  "key12": "b9ZwUvyV9cwGyvsNBDfLW1Lmfe6rpzEz5v48LreN11b2mx5ELq1t9NmGbnpGrgAiUwUd1Q1pTFKoJtTTBsFF7WH",
  "key13": "5HVrNQnW3gej8htaUd6QHcJ3hA7ReK6v48GZe2G6ZWtTEpyfUnNgPBNrpXbfWfHYQxdRoJgvJm51AJn2ecJCo3ty",
  "key14": "55fV4obfeby7RYK2Z1msvEh3w9LGK7RuKSoy9K6PJx9v2vM4CNqDWdSRQNyhLAq1qMSf5pwopKSMbZwA8DBXedwW",
  "key15": "3UrqaVZQPVAWXjn7gy4PptLrFNjuwg8esHJYhWfCtHUEVzP61VqLkh7DYwwSPqpPSJc58skRXV1Zxm7sUCTo3bAn",
  "key16": "3WpJUKtnrxmTULj68S874Fk4RDSpVptSmsqwY9ayX9yaPx8oeUV3pRevFkwFtHtktFyij2haC4idoVi3oWSsaY2r",
  "key17": "29wf1TuFiqgDykgZ89y4NT7RAJnfGbbXCmrCpJfNEyhhtQhhZz91wdyB92APiN3oe3WWJNgtLvPbAnYwH4mKHf5L",
  "key18": "ZiMgj7ndJPie1YdJxjFaM1SxzMRuCDidBMPWPeykaaT8HNkBqKWsUZZmkJXzqGNd7ubDPEo6hVhZS6fznV8ukzK",
  "key19": "3dzZydTfyAKhiFdWuKhyMeJDKiDqJAd2JCzUYvHVGY5dtq7DdazWNv2CdWbxcdixxE9qoRQiuUedxR5JiAiNDNZm",
  "key20": "2vpgfLLJBVeY1UknwMwAWv5Sp3nCE7RYri1oa2oh93CwGdNXLVFfJhRNgeVsAjTDcULp3ThwjsJrzqcDCAHH8zpi",
  "key21": "arqwzMBLEYqg1gCP4dKj4dgMYb9pBMp2W8oqKhXV9WEko25s61ixvSWtW8UHK4puaSMDT9MeNkaJYqYGShzFw12",
  "key22": "w8a1FQFLp23Lkw94WoygSWRgtE8QX6GmiMetAMBH7fFeNc8CemH2n318RbyqavADedqsBH87kR8WKNwqZAtUs6H",
  "key23": "6pKoL9bLKxwGhuwrPBS9MWjAFt62Na3VtFhhrHBaWKLP2vDgzcgLtFuW4viE8TnHqHSYyn3xz5jDxGDM6pCFCbq",
  "key24": "3vTsYHZFqMSav98TdJSRTw9WsKq55A5Ww19tSoFbCN9ias99FFSGujboJLyxjubxywjgwudaVkuxBnNuqYaKadYZ",
  "key25": "2anNdNjceCfnXj7cqveKf35dSehmN1W6awJcW1c19ytrDrqFh6c2PeoHRRL2qKUWJdSpW1oLJDs4YLPwq64Rw8eK",
  "key26": "EyzvYhDv36GPvwB358jjG6QWTZycv1nrvwsaaXukRY5AMtsmZ4oz1wGY2mMfXk2CCMyBY2TN6ypr857bwNwqACo",
  "key27": "21ZFqUEUMEZvDDXvKvZBZrB7eesq1csfVSasrzmi7vXYuXwFKgiXEQLe2VziqNYpbanRXem4ofhMicVn2ShFBZJE",
  "key28": "4mJWoJaJbDNBaijjCTrMcB2iyswjLFhhGdTQaQZ5EyQHQdbYrAumhiXu6onY5HXdgcc3Sz9KzrrTX1ezNG54P4X4",
  "key29": "3Wn1i6hT6noZswieBiY6YXzMafz6Vz5XLQJSqs4zcUYa7K5qexMBm5u84yS7qz8qFLxDzs1TCp1GEndhgxvipxVs",
  "key30": "5NgAqu6JTASXQQVb4DMTosznEPE5LmuskYpL9rsrGac4hkMhVV9xb6MfNBRY2LrZa6BfyKn2xdzarA8x9vVU6inp",
  "key31": "bCxYgZGdkMN38wHQW6EuFGRPBgMMRfRdzjgCFEiTRsx9KZqkoHTkXgFRpddgmQ4e7swQmuAkcL1qg9b8Pbv3pJk",
  "key32": "2Dgkm4STTMo7uefMT5WvncKntrt9T7QgTmP7ausXUwnKeJAmyM7oWujYsxohbe1tudChDejj87BoAczq6fKnPZvX",
  "key33": "43Rou14BLM2cK35ZESMMzYY3wZHedV48YbtZHsAzbbsKM8oBZu9yoSDFVuA5ctsBffkZBtYg1yEE6c7xrE5VtXXL",
  "key34": "5vgLZVSpJds6pTcXCnTbForrhJJ3QeP9k97MJD3LhAVjbn5FrtMX9UYJLRuE3uBTxBfyG4nVzxjQEKQBKAtaGhVg",
  "key35": "2fGtBu4j3GyW2WNLetifxu9NzbPXRc5KWzurBz5Lb9BibLv5v6p5kKbfT9qD1Sx3pM6PPBKkoAXDeMrRiJw3TPdc",
  "key36": "5UmLtVZbwExGS3tR8xq3nJnqUYRtwKwNY5XUw9sMvVTUXnx6eB1KThiTs8vXgSbrNNTJq22816gLpsYidwnuvDXb",
  "key37": "5fLVyR3kDHof7nfXNnR6cuiWQqAFGc3N7RX83SMZRJqBvog1ZwjXQNfon5qYdWymzsSPbJRyJSB7CfwWsj9QinfW",
  "key38": "LU8yXaRVghs1HkKUor7xvGW9jLv2rr6up9yoNWvbnZAVXiexTMhFotvZcE6VtuoGQfAW5fsGRZSw8oenhCFkfQt",
  "key39": "4STi8bndwyhm2B8NY7v46ysbz54VDQ6iKbDqPcmy1wSa2NErx2zry8ASLY8BX2ATvbkS6pWZK8VRHCsDNkAF6trh",
  "key40": "3dE3iSG8po6m3d9JYkh4u1md7pEfWz1EGbY31QgwP2m5Fn4tVw2vNLSw9hFWEkYufFfbD5BjgFciUkLuGJPdthDm",
  "key41": "DcnCxbnqL11aowF4iVi7SMPMAXCaCzEp21JeP1F8mqVp1XhZeDWHQp7WggJ6kuJaEsDWgqUqHFxKTTfFKBy4o6J",
  "key42": "3uwrCJ7nLEEpCxYtSSoUcjpf1iANBuvnSuH4kt3hgje7UxixAu6LRiC8foJ4ktDczz7UbedBMxTPd8jSMBBk1p1r",
  "key43": "23swHeGfLT1zao7eQfUZwVbEF56mLT8iwUo5CKKYf9PC3fPyrzNwfXc66o2rFYpH9EaHoKtWVtoY96syS7rY18yo",
  "key44": "4YnWAKbVXrhhd5rt8QdmFijXbxrWQtFhwFLfw5AmH9p2141YaRrE9EwVwkDjweysHLDPkasVkKUT6Y7eEptpt4Lg"
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

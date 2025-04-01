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
    "mijC98oHmJgx3B7PteycHD51WjXRxqQiW4ZPuTouUHv4S97ECff2k3W1A4kZDuDzyPiF8xDz2cLfoAiM4MP8Zjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X4sz9yQWcL3oKrSvgoc9zDfCEEdNkC4CUdMgokdPh1bSx4YXGfuYJxsSdvRUyT8jHNGZ7w7pMrD8EbhJpC7Pac9",
  "key1": "36EEaL8pFVDPihUemt57ui7vLn6WkTryJhdZPXyCygeEeQowt1EP4gZ7sAQgSi6UgVixaNeKiKYupGwFqxNV1CcC",
  "key2": "2SpvMK42WhbnEqAvKCWqHqzGjTj1f1UpHX2RYtmcpM7GPgUvhiJX7Nfc5Z2qMqWnPcTkLt3pMB6UnpNYQT9AgYmy",
  "key3": "3ko4RcdLDhbLw1vki2sQ4wcsvd28ffwmdtZKimdN6MW4oy1LQBGALPtc4vFcW8vFackcoxCrg21NDYaDhB6yaGrb",
  "key4": "uZdppseE8miBU4Zq69paAzuBVXa1QgJU7AQsE9t3tLRZqnSoPgmUsfQmZfwZkeKnhnUUAMTEBXdCxLjDiQbWQxz",
  "key5": "BtjqH6yz7xReiVc2t46oDFANv7RvApVCBfRffHn6SSvK8L5vyXRAetmuha2PiSiGNtPaJo3G4xe95LK3EKSDrHx",
  "key6": "2xjz3yk6v322hBxAE6Ko2QGhyxVxzCiZJ1HgDEaLUEychnMoRn9RU7hfPSsTADw8nX2vRb872xRwjxBgtTdsCQap",
  "key7": "2p46qVvfaqD6iXEsueYrBC4hq52sdBrVsLiqCGJ8PCaDovcCCtrAv6XYTPqL8gMWMXevfi8jZrvybQccyVrNP2Ey",
  "key8": "KGSkwcbHraf94jPW8pmCZw9BVtKHq44DDsc7zmDgtEARcNo2YsMywR3K2C7bztcrspt4dPVT8C46185vZGmge6G",
  "key9": "4WMSkcoTHNrrjkqhAB9QLXWNiv4VSFxgH2YA4iWxBzhFLqmc7dr3fMXMHPwE2dHWe5MuezVREzoSmuiqHAi3XgNS",
  "key10": "43PBdQhy3YopJ5VmRPwAvBRkM5qSVy8HUEBFusSMpYZcFagLM5SvzQzXTZKQmXrtfFcWnFzCtCzymZx73jBJ71bv",
  "key11": "3btB4kfEkBjHU3YXoKPLYz7iqjrNUgT8r5JjBvZsAAH8myXwXh7fjAYtNpRmdFnrNyjiJsV87wWFaxCmANNyKwRo",
  "key12": "49DSqacd5WYXD1PNScQhazTmM1NSGmjkyfTQ3oWHWcXvdssHMmDeCgKAWQ7WpKeEdEzCF1KU1hPwaTBTR64irowU",
  "key13": "5wz548YfVmJPdAi6TZERBbqKgPVaBMWGr5PhKoVoBoxMPRiREhX2Ks7kdNN7ekwCojwpPbrKwyLn3pquvJLKnBTD",
  "key14": "4WtjWZgRsJDU2amkYZUo3DaWJA7rCWVHN1oJ1VMNVyhfNcMvJf78TppmAEexvX5oK8gNWC958jMqZHDg52hAhXMQ",
  "key15": "3mtHbiNmc6CWc2bdpugf8UixQQb3s8vfWuusdNvJFuGjcEqxYmo5LZ7PXUN7duZgHP2enidESDFgvJ9PxhMMPf5y",
  "key16": "5hCWg86jrJW2ZnmmSsuhtCyQdSmsJ1hjbkLiQmMwnaycniNXeUJAq4Qg32sdJN7Foc1XVBUfdknaJjarK5keq9Wv",
  "key17": "29WHp88VgbjWewvwz65zM9R1bmadRrYDFRWbf1ogNf8PmNvoyNWHpaQnBqPqzii1Yn54LqTuHu3QZERTjWJmPri4",
  "key18": "57atvNxD8VVPL5ncgoxovwoHvfEqapEYHKgTozCHSUKDwXEkVuZBdiK8RjbX16RXff1GJzkhV5bkUG8pArmp3A2q",
  "key19": "25wL1tCu4BSzrsa5dfTBvupVbqVu9SxUdwJNbAgQV9AqBXAxLbmUVY8s25CfjrM1ekGnRzBfKddKj4LSYBniMzNh",
  "key20": "eFsLyQ7k1hvHDRVHDyX31BY8TLw69fuks4nFz3SgLfsdsX1jA2N76McQHbr5ZfBz2ZG7pz4Czh6uXKKkfYnffiW",
  "key21": "4qR9Z2dg3XpCLwPB2jHc7GpBTSXoceGEF2sPmodvtpfrZrej8ZchdBbaXLoUMJpTvb8wVRdAUByAPnmkLgrr1gWx",
  "key22": "51C26e6VvrG9VqDUz8KYkVbt7b6NAfVABZzff6kohbkgiDSNmNhvvRaE7BrNTufau5CtJD6uzoRffA6LSm6VoFxn",
  "key23": "zG3bxZ9rUjEEsMbexkCcV8L2ygYchEyXRyWB3eTzT8qivWZRbGA7adPy5J2UcdW5SvzVGnLGL4Sx89kCk8oCQqn",
  "key24": "348a2WuHZ4TFzkWqRL2mdmemXUCVggzbnJrDbdBqrTJqPd8HhS7srSWYsvbaZa8WHXbynMCbsAuMReDGSAgYEbKz",
  "key25": "46Vh1PYiPbQxH1YHjfBRNZt99wDGpH2XcSiPEXucLU25h2wEik715eQGTTFuFzvS8HBmZ6rKMBJh4Fc8MRecvkC7",
  "key26": "2bKSx372B7rq9MUDpoYYkb34DozazEnUygTFCZjxq8NGbd58TjY89G6hccs4HUjB7wFogGejox75X3bZ4nDUPEzR",
  "key27": "2E1Sm5ch66sncp95iZMjxB8BokbrcHoEFTJEbLLEXRf5ffnBpTZ2Zrri9yeDM6fZ3L8WKakiVAJc8t87zkV52eBU",
  "key28": "3ebrcBX7xLSxNkjGYNQvT6m3roFoP4kjxBU8nmaWREJRjRbdz56A6Hia8zJ7xbaCpcSZHuMe9xstxa3Wg5jPFZui",
  "key29": "4nbQRh8PnBypAQa6fvNJSjQZkKKazRy4Dau1TYqaTQPmWHuFFjwYERx68b1H8UqvXK3FtWfAZ8oqxMWVSqZWPrmR",
  "key30": "yyCQHvPisToi5taWqUZchPJL1RtkpntXabJHvfp7eWYzKDiXxJVmDB7f9hVFew6JkwvWmAV9DsU3xD2tgTjs7dX",
  "key31": "5LainqFwayoXthnwFp9noh643C37bPMYcofsEegKpi26He8xv3AZr9KsnVeWd9dT4MegghKqw4dYNr59yvv7X37G",
  "key32": "2ova834cJYkcZZYrHRk8VpYWx94ABQnUq7PDQZK471SyZ6bBUtSd52FBMX4mRugLVqDztaPoDtfBCM1hSPybU246",
  "key33": "EWMFTnGshrEGmiwTQihYUkNNSmuPHnWTrXK6G9T72QNHLjTUWNHrfVGi1sejzUy5C2jtKGA9sDLTXf7ubagHWfa",
  "key34": "2rweC2Q73ZH9RZYuxgtDcyiCGiKkHZb7ZsxxacJAtFp2Da6YwPXSe3NZnsjQgeXrnk8HyPwWbw1ZPybLKrdvDXxK",
  "key35": "2vFw9XCtGGUmvuTV2dJj8JNR6byGMjaR18fZ9F7hDvsSyNAHaum1wWnEFRtvBKsssZck78riPhgJVV9z8R9kD3B",
  "key36": "2FcvuE4HNtNVg4B8BsxgRMVYzj77p7kA6QisMcTuoTjyUsXPxQU6EZnijN3fCbaFjQGrdPNDXziJRhHcvayxaB3o",
  "key37": "4H5d3dL8svuc6RtyrFNUYoxE75BZUWpmiKQo6jb5Q5YsYTYHeN1XobXkw78uuAzLoy2KCdLaAFe8aD4cg9NqDTjK",
  "key38": "5jDpVHxK3wtkCPTPyBe7srKGQuWsvygp3SbeepHvknpU52dMi7auhKhNrfJDVCSE8njAtdcUFfRcdgJzQzcJmwcL",
  "key39": "2BDbFF9WgriXJaQdwJbPtDqijL5yXmwj2qf1T8yJXyAdKqgTk3AaVSt3kwocDJowA6vUnxeyVMq12xe3omyC4NDP",
  "key40": "5iLybxfAg26hHVLqumoCBnYQB9eaWNcpx2ExYLQZ2Va4ixFuYyXsJCb6ANofereqUhsjy6uFWLZmfdnJXFe9nXdB",
  "key41": "5PFBA5VMykqJmvPkYPAmvZtJ5jTLQUw8Lr3ZAaZU441rWq9JPt7DdVVBQzYE23Yx3za3QmN5EEtoDK4WWjP9X6fc",
  "key42": "Ar6HwnWZFN9CARLgg335c7rCgFiQHr8wwKJPSSAGqPNwHePdNPxpQHoz2Q6mMUSxdsT8PKdVPUFMKCvDbTXNt8T",
  "key43": "4CSCAWJ94xt1tLbZW86tJjmS3aCx6DU8hMzU2FA41TDvfaZWvaiba6Z9QnuSKrMvY7wd2rPG6NNTZpDs5AU4sLFL",
  "key44": "4NQDpHQUuGvai6xdmzTwreS47xdN27ryk9F273SsdkPAv92TAgQ5KFgdPQoG7qykDhNhXGc853B4AhExXc25319Y"
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

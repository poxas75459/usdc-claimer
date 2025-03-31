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
    "oW71knUL5Jiv9SzbfWokEMwboZP7ia3hYh5DSBSAKuGnU9SvF9vhUhgWhHk3S52oeTfav4wbrM46w83eRT3DkbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SDizEHzpPcXC2toMb1XELDzpfVxdgzF7nv9F1hQdLR9rHS2Lj5Duvmh4BAd1WRYBuNZpEpmoVmoV3zNvHbnrSe3",
  "key1": "55fCfEuQSTNtppMsCv2ftqSSxqgKcZ27y8uJJFy6NnsQ9sWzCPeiiLsTkyz9bcbrpS39oeuvg47wnj3Vf8k7d477",
  "key2": "5mtKt8svsyFYxofKqes96YgNoz7UmpAC2BdZEfR7sWdHiRJRBxC25AVRGPZi6tQJiCGm9E9aTcgUmiLcE9f15vpG",
  "key3": "3o8i6RoGgbrpDPk6syJXfUrWqruCQ9bUVcTYLcFVdJtFDvdDsTTwWyu24RqdB1tZPXASz25edesCcouXhbeqCrRi",
  "key4": "4Q7S75A8RQyb2PGuM3RukSiTpgQnh3xCjftjdKtjCXTr9aT3aQcLZnAHprxMhj5R5FttzuLcTDJEFJYUtbtZZDbR",
  "key5": "5gSjdfuQqCEx9TSjusXdpre74DhQP6g4YWR1Jkb8R4udHt8KH9MDJeYZGMLZ1JEFAJjby5cSYbSXgnEfs4FHaVTJ",
  "key6": "RxN6oqTV3PWN2D7z6Gz83Xkk1D16MLY6QFTVDfdf1c9E95Vs8Mv6UAJ1vysqWn8SQubKYa8isYvWbfYqfPTWiRc",
  "key7": "5vnEXPvc2u1Pbneue5ohg4LPUFLRDihrXk1v2PyUZBMHrXENE66a5eEryrG1oEmrf3wJfL57oZLiFXG15h5XmaWc",
  "key8": "3qMjyo2Ks2VQEKgVPWCmzoUJgDpcDiGAFy9V5234MyqQKuPP2JitA7Q5PJZS8ekC62PpXhhxGqhc1hGNXTkvgDbi",
  "key9": "59mRVnyTt9qSGtcTgqctCqohi2NEaZMMXzKKFSaDgi1RQ4uDMe8PjuEvygqH8sy2bQNzUu9Htg1pyxUrdwwawvAF",
  "key10": "2HNLkneUzgrhprR8jeXEgLmdJhC8bhJMZoBgpzneZKC3trzZUKguhy77Sju8jkTiAWYUgffBTURJEifVA7Ezu8F8",
  "key11": "dpRja9HK9nAMLxeRgoMAddNWEukEmTYcHYqdBBbwZkrGLbtsYPwEoxxYPDfncumV44wZtX4yYBEQ1GcddXXTeqs",
  "key12": "4LNESixqpY8k4L5AtczJeTtGWfEPRr2mWb7WbhFPjPvTxeJxSdTCBJ4S3UXEZU6RoMG9sD8WPFxmn1i3LHruVHu5",
  "key13": "2TWEi6rQJ4GJq6GshVdH4oM9gJXtPU3e6BdRdHEHgswwL3vdAua52aCWZrp8UsoMd9WZ9Wz4jT1K6Sztf9AMjNrp",
  "key14": "2aimn8uQDfK165he3sgQ8TUKq1XLP2xCo59jkQ5NA3nEoVvmNmns5DYLXorxHF2NiRYcwX1pGR5qhPqLGj4g4Ep4",
  "key15": "26HA6GfdzNFUukw3nWUy2i1tLr8RUDV7bykZHgRTCz6zTB5itUgAZGyB5Vzg4FDgUQT3hJXMeRsB6toqEeLg66Vs",
  "key16": "3iHqaqJmdZQoYvMqRsdCwcovfidXvJQM7HriiKzPWL7oFmGMRF4CsRQBJ9sS49RNWyYEZm8jYdw2W5pa8qxeLrpL",
  "key17": "3EQn6VyfMZYZo2wENs2i6nxRc7wNFmpLS35QFqAwHQpPn477p3AooAQBhVvz2MgbDK7TBMGKEtwhyniPTPnvPyDX",
  "key18": "2dVAjwbdq5c9WxHwBipG7jAaYc9pYDBV6im9mzJwP3Vqr2LNNXHYbeqq3hu136coResnSwCEBzDNGmMnyGiCFh9J",
  "key19": "84pt21GiQjw9YK3d9h9ZeVhktuFK1scpxAsFUpEf7Ec3D5xVDfmh1sBjiA8NGd5Gmr7yPc9AoVvPeNherHPTCGk",
  "key20": "659HyCuYMYjX83TQG4uq26j3cGppXg6sZ7AjDTPQtpDFcRh12gU5kqYV7jMhdRqQaC13ZVoeq11vLgPp7knKM4Ma",
  "key21": "2zQGfVeWAPugMkWCR5ZFwBi2cr3Gy9LuEYBdsQcioBryyx6fs5hDj1jz57LBdevUbGuL8615PJHy5QMXyENqzxc8",
  "key22": "JXLSz22HMiLgQruL6Mk8unCUvVirCpkgsybjq4SyxscRFfBYTdtQgZVBzbCXxwBRffL1yZnaQvmPMiRy4555CZ2",
  "key23": "2dUMcddj8o6rQC4q5HxQ8mdSMTkA9d4v8mncn876cmkhcronffMxSppX1r18k2mnpjr4GaqMdDic29G35AqQQ1RN",
  "key24": "4DH9zqPYmKinri97AvHs5GUmTdiHZfuAs8C4qRPZ4Jom1YVjtM2sMnaieF4NcJUtZVcfacd1mSQCLkQVXzeKtZJ2",
  "key25": "4CYAxfVAem5zQkAYgPTw1ib71DkYzad2KYJwwHr4Pzk43y1JJ8DWN48pCaTs8pvpnWd9caJCAjbgT99K2oBw2zBG",
  "key26": "3iB76373TFSys8inHTHCDrvXNuhr3BjzZ5942L1sAh5yNM2V4r2ENRXvpBmmcGrvbQsZzpcYRCeoBnNpdY6fxjgE",
  "key27": "3g2rm9eygLhbgTdTCXnCz4PShLUFV4MTJsu89HKomxJDz1nCnfsMNG1njpGwGjxycUk5P6mSXdMpxQsQYyTCGuhZ",
  "key28": "nxL36sTBAyJiT55qZHvW2e4Udux9xmr9BCdWVXv5nSu5vAD1UzW2iY2M5C8xYM84i3heXJ6ydKawU9zhAkqtsa2",
  "key29": "4cDkruCNJnLxSkRucBSQp6GNnsxcCq9mp9ECdFj5yJn9dYfho7Gep97Ykosjk2VUbw6Fq3AysfGA8Fagas6JyyhV",
  "key30": "32QT7K49WGR4QLQSSqMciv2Rv1PpbRjZv9AUWcUogDvVryZrqwLPxRWbhp8Mnn1g2FWLYUDDQ3ML2KYHrg94ECbG",
  "key31": "5RGRVwkGADbNhPAk62sUC2EJdj8HjSDs5FbrBErzftbgJZc5p13RFx19Zgf5zs9BUJkji7X32b9dhcD8bBMEPFd",
  "key32": "Y3xuaCnHAb8U54z5Dtz6dkm2zJwSwHuBgcv7vAzQQvU6prSHDgf9SYabJ3bQ42JMnAPZsqGPjL2xz3TA4ovEgrk"
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

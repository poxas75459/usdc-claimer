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
    "3373juDm9PioYeckqArhTFfqTZqjQZ6Cxk2pickBX3wgC6ZArd7Ssstj7phnZFo84N43k8gTPaEAw1iRAozvKUe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YoDHDaJEk3oYk5FBbr9c9MDpEe5ftev1d7YAyKxMJMKoNBj2MZBSQMVrBXJ3tQVfSQoYhNPoPV8NVZmP2Wkmd7E",
  "key1": "5EUJCqtJxvgbiFJUNiroT9tjpQEuYMNJW6jbKHQxdRzfP7QwAAYQeyfwPZXMqMxbFnCmxk4w2nae9vpdf4Sn7RPo",
  "key2": "4g39xYZKHRV1i947y7zEUhpAhTQLGGK4J8w5HrKpDQzizXPXuUoxaK3LnoLmZdigCsRQraDuQbHtFRr3SkAbaVZu",
  "key3": "4MiRGNKvy4Uq3h5dhnvep61SpBqnAjzV4DALP5bkoRww8MFV6pne3st3niypczmV9KU9xQxTBVpBhMrYMdqFG3JS",
  "key4": "3MpXTLkeSSUjLvTJHXPEdfJaMEB2N22owRZKKPFsc2P91ZHmiWPSAVwFrjnBwZxybjHFeqAF9xGPkEE7He182KKL",
  "key5": "23Cx699PfSqAuWtxZaqjzefdvsatAQa2xNeDKFyTKE19Jk6pxrmvpM6ytyFK23ht7uFVfzv9RYdX6Sv2WG57uZvD",
  "key6": "4uKrAvPPqtyxm6KQskN7cHiwZAWfNYeNXi5ZnogHXvbu7Dz4xVBWDC3MWb2swXwnSPVAxVxVw11F6tfGDcCJDUYC",
  "key7": "3w119e4CgsNJxkWbzv8Mg8BvMmkoBaMF4eUNNHzDLXVmHTtD9ui96z4Lp5CZeJQzQWfPv1BQaDq7b1My9s6YpesX",
  "key8": "3d1mFtPogdiYWQXMeoPMXcn6LQEEDumWibYkoTH3MBwQ4ajR2nZ75YyM8ZWbV7Q6NLpVSwT5KVEzvmQrKw28SM3o",
  "key9": "37b6dMJPbgYYfi6U1hTT4CToTwT5BSikbcynQ1aLSLyBm9YojYPm7AK5hGAe5buRPk7dCYJsWryKkGmBhpp4yqdt",
  "key10": "3Q6ozBZDitxjareKQ9hCbb3A87bxU6gShR4MuTKuo8ZRzgmBqHxkDFrX263cqPyf8VxbEbCwbZJ88uX1FDzvZqgp",
  "key11": "3DhA4zxiK9tjTqiC7AWA3taRPYD5s2bJRQRHVrBP8kkZSNMYkRf4cB48YgkAu8pfYUUNt3TwvmGy4hqkqbf7XHZG",
  "key12": "47wdfbFtoqP7b3uvSL62pjj2PkVFCfLStTQwfAdcxcHgFYhVrgYy2LCoDVKEcHvXJFT1dvWbTr4qAXxsvaPbt8TB",
  "key13": "3ZuY1cnVzy1ZHwGiRSfZWde83DorX2hcy5BmPfgcf1fKhLsaDbL7K8MD2urqoYcLeGndLaYg2dw5ky3tcUQjDQEy",
  "key14": "3JLHLF5gRSJsMqFw7fyn6PmiBrKHnaBaphunTCXPVaH3gsdeVZUJv9nRzut52ZNNPJXMKvcEd1Y6JLSLQp2czy3C",
  "key15": "5vhCngB2YF9w5tMSSKsCoq4WZ1nXNwKD2HJEbMxqs2em8u52Nk6pzDpwVk7CDBuAm4UAmff95pdGHyHUVXcp4YZo",
  "key16": "22AnEJquZMbjT6JjZAX7LfxCJjm2Y7Ukgu4yRNktYJUy3dCXrb25b1QdxwWV2R2gT5nwEZbg3TaRo7D6xVNjj1vW",
  "key17": "5UinT5m31aFLdJRuvSfVg8L67xDXUi1BLsBv8PG2ouHEnnUaZojnb9nFXpKX3bxDFvLsR7z6WtnBCKkWabPEG4Bc",
  "key18": "5jmEN3ZTZPZSJTsRcpnQJyqcZMRRcFpyZhcVkxLJTKACQJbGJY6RauRwxih6qES2Dn3Pd4QR6c6NHg81j88AkPib",
  "key19": "KFApU5wrYv91y49qSQX2uzXaJXfvLMostC9wFzaQ86JxPRSjyJhKbNV1fa7ygEEQJ2LKiaKSgnbVk6YFQTaDmJe",
  "key20": "5MKcMHvACQtCnxEaucqiitNKEGWSGEew1yLW388We4V1Mab9jQJ4hSRX75yC2MXgSczGbJGqhxSpqNiEQ6NaxkhM",
  "key21": "2JkthmZmMtkom6bS86Kgc1t9cFCvKpdn7QmAYQwnaYkJ7TPanKjAs53TY2E5T9VTKPrAxdf7wcTV5CwVpjaVUVmm",
  "key22": "4KhPZez8U2rMTzVdv97cCrzR5HRKusJ2McMA3ZfuPZnLmN29ofqFuMF4BFQ44Lo85xstsmA8sGjD4PDbWE19KufR",
  "key23": "3qni3iagRKmwQouo1mQCMALgAfgPybFd5rrGx45GEk7T1XjKFpUgycUqt3fAUWiG1E1Q5LzbC7zYNLvz2muDCVzb",
  "key24": "2r829vNvUC9ftfowNR8yWV1SQ9fKnZjJ38CMDnTcuV7GEBcPbrnseTxVdmH4CwPwFPoT7PPakTNEWPBqAH1LAGV6",
  "key25": "659EU4zZJ95QXdZBEDGV2ppYpmKuVa38dvbryoSc6MDoHKcgVxAAgZxwXDVnPvjBrbmjEM4ijbqCvDZ3sDtF4RVT",
  "key26": "5Le9V1Hde2Vq7Fn1fuA5t8Hry7hGaBC7CLJKRDKXMmFj67NxSkoc3LV8fPGHGMcFkmSzoSoaGza24cBETU4QpyuM",
  "key27": "36pAAjadVFcNton85UY81EX2vemrrADBW6fDyrXeP3mPLE2kb3K1MAfWCFryMgKnmH5ErKWNDmm95cE3w9W9aw8X",
  "key28": "kinQADT9hswdCLeXtk29augo9Vy9czMzfU9XSBR9aWEk3ntNTePT6rrbvEf13n5rWBoK5cfTTwXTmbNKEF9uGbA",
  "key29": "2mFVRpVyVvTjtCBfXazDHPy1cG2JD23VBLdnwMBN31ukGLcnX2cc2vGSUjRneyWBu5yKW2EvVRLtuJh5aE5aVvkf",
  "key30": "rKvUNCEpQkZkrrK51NECCwyiEL6MPNqXzPQ23UMK6ErRxoxdUA2Ac5xo7dCQow1ZsJpnH9N6g12YCiYdEhbLPoz",
  "key31": "9YXsxt2W9Ek5RdaJtX2WM8RctZ873WMM1bg2eRKAr9qgJGM34wmQnpAFrerwe2bybWexdisUvMJCoTr9Hzyqs8L",
  "key32": "4CM9gfCoz7WGekaSgQY54G5QYKjzogDArd8wEp9raWHyhHEiUYQrNWUKTDuPFVnSLBYoBA6rHH3TegzJp6xS7j5F",
  "key33": "4QAqhi5jus56uDGnEugjwenT4YAYmc7VWN1RBAdZMKgKDHwwyA7eKwMwiF98hXFMieG5SrDAE1ruCw1vQia3sGsZ",
  "key34": "3TqDzuNPHsacR1dEU8jZufx1W7dbkpDMN9vHbx2vJNZgi3ffmqfV9XhLR9SRNZKRNUGz2AXT8nW9MZ27qt1qZscB",
  "key35": "2RdwsvwRHJfKk7aVqDgAxsXdUq7UvTDoRJCzizooo5SyNkNh4ZHaJmQKNqWpVtvBJoLZCKE8EGseMXqdtAxoUtjD",
  "key36": "5JRYcCoGd2nsd7js43TxwV1Lnc5bHAksZterPyQ79S1W1j55VTrYcmpUWMqdSkrMSkEsqvX9xpRTbxfsMRraZatb",
  "key37": "5Dk66bZ5Vbndyng1sb2edud11v8mj1JByF7LhT75LK1ahctpbcoyHdAzpZVAihhVFD3jEVRhyPWY4ohVA8wY2DBA",
  "key38": "Fs5gDHPKBWzgnoCBx4BBPVtfXHcAAGpgiw23APWQqYv67A8ymaFPHapEqyM3J3dykXEVjZNe7P38KFZ41yedBxD",
  "key39": "2BXs1QK7PqHBCwa4NiR29JMErVdvZ5kVAQ578CgdrWTTWjH1XNktQUsVWpbTJn4F6ZzPu1uVUVJWT6LwcmEt3m8X",
  "key40": "43jchLgwtBB8BYCr68p4qRJS9f1Ck1rUmRdxsYJwhuWWdcxdakySSeVn4uqFuP4eMFwUMFTfwVmUP6wtt2E5bZxc",
  "key41": "4mjyBusiunBtSYKKvPDSDmrnmB4nhmL8gcssKNMjvmcH1x8X879XZEfEsWuQhmMCZq9d2oCpz8r6oZzXbyQhNnrd"
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

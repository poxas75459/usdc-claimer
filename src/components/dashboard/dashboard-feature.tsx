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
    "4dv5PknE2yhyGpHuEbCpX2L3pG54X4SiXfer84QE1H7LwyveEGMKuzCeXrzkC7MBCU6boM7qQiTTPQkLRjNUj9HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqR38zNajgd7mxU8MeX6Hu4tgKRbTrt6xqfFN87fzTZsbkYSPsbepchR9NyndEeRoV4ooR8LJe6E8von3n6KsPo",
  "key1": "LtRdyKDYFW7cJUabnxBq3En7BC1x9ESe4bbCzQhg2r5wwW61pawqyCBj95V4pYHhdbH4gEdigrRpYZUDZ7EDEKD",
  "key2": "2bEe31s3v7MVV6DQsGvtwLNeWjQ7nCJtCWfst3N5etu652GvHpy49cRdpToJv5fM29m5Ud4hAyDc2TyNSKSucD4S",
  "key3": "3jrDQHnZgu3VQm96RCtMzsVAz4TKbgWEUndFQUpPHpHwpJzxxpCTjJLRJofPwCAjETLtddQQGicRhz4zPLYHLcGD",
  "key4": "4NTTPm21Mhc1pGxTGJrKcuucs5KWfbieJaMiS953VDYmh1ACMktrtGsMNhs3ojLdyBRezqkucw2HniV8zssoXVbZ",
  "key5": "63JGhGDrTTp8SYpcDFpfxRgiZUbkFSx1q57ChZiYE8TyNvgnE56wUm2tj7KiVwLm3V9VAeZfKkanywH64mDQD2Fa",
  "key6": "W6qugjDNkWyPtEncV4k2QThHSpsH4FoSmm2AVSoeYj8caJxyzHGqnujcC3m5ooto4YJre6vuNUYuWQyEDr9ULpJ",
  "key7": "3p6pHzc6XRf6uJeYJtt4FipRTMjCrYJRb2UsqaET1x3thTB5UGJRt5pEqkQrqxWnXhp7qen4SCiXJz7e2qmevgX6",
  "key8": "5uBbFC86tnEYaEmzT4RH5mQL4dUA2t8MhpQdLeHs7DnFLg9t9AkjDjjrLWAAJnd7DMpSSJdy5y69at79eX9MZ8MD",
  "key9": "3BTENt59pUvLJqaPZBToxmEfJ7ka4Sf5ASwDYgbQUvhw98xAT7C3pwdbtkmysKU68nNwiifZqwecdwh2z4HnoiXk",
  "key10": "3tj9cpqYsA5Qi26Ktowhzodiyydip3fAaetUNtKJJemqnaxAfhDTpuCcrUbsfKEp4d99GTBjTTpafk6wocTdp4fT",
  "key11": "3QKmxUrvSYrASghUSYzS93B2heFYu9e265BbCqhXmakD5YvkcVLe2eGwgaNz5P29Fbgxhk8Q2jukMvTxewnGXd5B",
  "key12": "57PCerkbNp2if4m2NaLaMGU29PouYu5MFqAQAD5g5UHXwqb38hqTJJX6XUSPTfoGvsuE1zvj4XQjiTHJ8a9cqhu3",
  "key13": "39TCPviRVWeDMHVLprhsiPmz8zGYHaPg6CFb2LkJ8vzxcJaC9AQVyRXY2QDquCFNSBy4GZaJexiASnHJUC4hdskK",
  "key14": "3THihCkLuEw2UZgoUwZ3nancVW7f16XecjnngMHGxMfn1CV5VakHWqLFY9JhwkC3gDqs6oPApwJUTe9auWNN3QtL",
  "key15": "4bsKdShZXGB8ZHoFNKKeFwS4Tokz3ZTehCUfkUFggHf2xn5FWJM7EoKdEjgJePduewLezLZA9H2dUowikXcv1v34",
  "key16": "5jPRbZEBC8zBcUTENpJNGn68dUVF5XYRagfExFVSYvVFMpfKNKC2eTrgq8YoYvjWGiALX9rpBZtukqbfjZpSkdWd",
  "key17": "2unKkjLLDECyr1nqpErzwgBFhGuzoYnJK4h95ordHzxZ7xd5PGd8N3dxaLK6vqtxUYPxQAoo8u5Jm6ykdnpeUvpt",
  "key18": "3twNjVo3U4JwsoL2BY7oWhEKjJpg5Jbaadm56BdHwuhHBXjmpVNnJLLU4ZG5oBtE8u1KJCm2NYeCAK55HGuzpbYP",
  "key19": "65iQH12ae9Nqg13BoAmmNsa8E97MdyMKeFLJa2fVrwe44461gqWNuBYGX2dZ5UkrW8HMagUWawrKT6BvnWbjviR4",
  "key20": "47XSo7iLUdo7KpTapsRx1HYSHJFEZeobzTu8MUuNPYqH4wY1YG8VTmdtKbkYM1N9AnxGBALy8yrcUqbK829gSZVg",
  "key21": "3jbjbW8vbpjzqJQ3dnLKEiP6uhx2ZLqDg9t4PA8NijoroK3jv1kCt6skw5J3bduq9agmCBStKhgmibkkp2t3KY4s",
  "key22": "3HszPimV8VHgraXLzw54316ZJuJp9NL9fNKJQz9FcMGQjtH8soDpseVJ7V6pqezgqX9AX5kp4fpMucYHBRzE5YW9",
  "key23": "3mk7FRR6cdB6XFW2vbs1icjS3EbjVNctr9Q1ujB4FwdWmQzV31U4r4Ym8BtHwNgjWUvqRS9PLHqyfNjQEPc1u3sL",
  "key24": "AATrSswXcEWGLWrj7R1pgbPBD2B4QHznpTpWNGW1CyHZjNRfKyaRXVDx3CYmQHe2ma21EWY3sZWvN5U9K2EWHGv",
  "key25": "23hKpuMCiWE8CS3rrHvBuuABJho2fDCRACypKLdEux4XJnozKTnsi7V2Q31YJcEsGLV55wGZ8bMCA343DyxPyZTc",
  "key26": "2fyJMooEVJfGKbx4nPHhrbsBc1ZuSPJtu8SLXJiMh63EDLrN4GRhrpj1APwwuAU5dvXTmrgDHPFhMmsA7Vgxr5h1",
  "key27": "37MKgVR6T5awseuPjnG3S66pkGSE534SnZmHGSUGoeriNxUnD1XnNti8LTcBhHUN6bam9Lhb7ra9dZDbQL6q3MXT",
  "key28": "2LkBzee6Ccn7HW3ywGkNjkLwKLLNK6zHF9ubQTb6XiyuhSw9tEorWjstqLPFAz5icVvAbjm4isvDitLoZv9FVQHw",
  "key29": "eCuD9VoaTmvkWB6YJhQjB8Y6uG7hmGk9ojVBBtR8axn6UiW9xA1eX3V9Egz8PkYDdrtWpG9MqeFysA3VKvrZTL9",
  "key30": "uDDwhmetxTpTBLrCL71F6YfyT8QkswRa8pYKL7du21ih4HtnzVgh227qG5VLacBzU3rsGmcHH4XSF8wNs2thYmv",
  "key31": "5osV1HyfxGZSN6f1b7qWuP3cFZ173nxkBDwNuAr5bRezKAJynSbhGStPksxWsYwaVwg2gnFRXJBDHCDGLYR14pms",
  "key32": "2QEeqrVcLySKnzwjjM181ukdNFsjKhdf1DZQU4co7Y9r1XvUmrcAqCFi6P9cF1d6uf83iVMPLtcEzLDJ3Go6K5Gk",
  "key33": "JM2Ye5Xukg9WjBnx72eLJxiM4vU2mnbKE9ZCWgEyYvFbbZ1wKjJrFeh4esEGXHSu2cnZryEsaqzQYQ587MUE7Ha",
  "key34": "5w3WW5kj7MvhGjUsphc1bk4sVtFmxNEsG1YJ2S6LS6HCG5Katkb8tZSNKY4DFib3MfHkpUFTS7TbnK2AJwrnnATL",
  "key35": "2ZuUjeQZwUWjVi3PJJv2Dzzu4JTFFf1m7Bmx51TVUF227MsskQmTsu4PxcSR3db5TuLQS2szaddzUjDauAQeeAdy",
  "key36": "yAPRU799ZLia925KqYxeLL7JkQwpXrguwFixhypkGciTgTiK7GATWkFnyw6CDBd62ZCZyEmn3AYjbdk5d9vvKQQ",
  "key37": "4kT2FfzMDGHmYKArfoT7SKv67x25z3Q7jjpCBvSGfyaEBPY463ypdTyDJE3yfWsZiJusEAmE2G5Qrz7R6B8YYGiR",
  "key38": "3NesxNSvqAvxWQT5kUZ7nTjFGcvRjtJNvEfRCKiLnYU5r3TyJ5EK9PjAtspbCCszDz7ZhZYM6ns8zv6zJnTCeUfe",
  "key39": "2oStEWJMfr3GDMhVRV31CLQjNF7pmykv2VDAzVPNiKEpm3JBpP6yUyjnyktuhQWiaKSYyKEdDM9ubGePPLBANWEM"
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

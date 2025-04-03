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
    "3y5W5HVobwdo5JCa85LVod2UFwSs2HmGT47CzVkNroHf2uG4ze5fUTXzuStKgZg4xjDu5nuN3kH3CcjvLfsmp4qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xE8NRri17gbMVUSycGbv5PYVbLiHoEk2DN2zuz186r4bmmnmJUWfKEr37rJtR45cTFgjPz7irxbDVRrStsLvSGV",
  "key1": "3EDCJYvQ71BRDqUa7cfbpkzyj9uJ4Dtbwrnvn8o7PBnnuGSGYxwHSF6eMUMiBUoGvi3Ckg8NY5trJHVTKoRzhH1e",
  "key2": "2nuZfcTd7o3SABUNBDwRyif6mrEsnURRoAbqrM8xntvzAhkPz1VoatJDxmPAetxoDaNyxzCJC1KLZZVX5wobXR2n",
  "key3": "4sNbUT2YeyjCYbtPxqryPjuQEnrFDzf8QdtEQr2ZBZWuH8TpYJnDFhCDaKt6iYeS5k6mvYndBG3wDbbBYpWbuh5j",
  "key4": "c7ctRcJmSXtFeGf7VSuaHozCLYDk4aLgwHgZgFDFudPfKnsSYUHgREGsKBZ9EqK7i8zYGaoai3tBdevLtwbpfEP",
  "key5": "2Xz7YwdQmdmSkgrikrNVCzwbNZTRRAvqPkQEdQGKUAWaLeaoG8hyEXJYQAWurwS6dxqzVVwqE2MJUPK7rzS4btHk",
  "key6": "wxPa8YkhHwdDxeBDEhMHYfEtRqxjD7jBG835fd5eR8hP8gCEtKaA94Cmdfvt3xdG2jkVxhgGXano3GUhy1eufKH",
  "key7": "3DFYTYPHUecqZRbDQi6XFnAxtKp12Yd73jJkFSFGmeVQ2XFDtUFvWkCRUgm7QWmF91Fytoh2dwLrDf9WfbwqZLtS",
  "key8": "5LQD78njCFy9hxxGnCLvxK35v4hsxArw8GmL3mvjtmyC8JCJpjiqw8EFEFfRNANq1crbDbdVAmKA8ENQ7h4rWdnT",
  "key9": "dhp7RRHa5LJFsfYFx4DBo75Xiu4rjzMXjQMe63SNQs7oRwW319aTDs2t3SweEahiyVBfoAhPZqeyBq775bK9cDW",
  "key10": "5x7VzUhf7JUb3pc68nLCw5fU1jwhSbgNiRGccJVE4AYbzbMErZumttix1k1c6HLab3CK7Nj6VBhgHaE5HYF9eML9",
  "key11": "2dPwhjpWnJhWM5bgk3hHLbxWtCyipKf9U8QgodaU5GDi43Sz6Dk5g91cGmbk4Zo6RE1WDSwnu4TJWfWojnb89yjy",
  "key12": "5acKPD4uChZPjquUg8ugPPqUbwtrNgssY3pWN1Enk6vHB2Qevp9YP5g9Br1JZ7QjBwYnbeHpdsSpnSsgL1nJq2nn",
  "key13": "3U4ymQNjWDnUPFjTQ1UAhKsjGD79YJbW8nQztNwwdRa6ZgRPmpibaDLXFzJySq82B6neVPbErYncfkCrQpYa7Qfx",
  "key14": "DnZ5Z9FGY91oRLMSXx2D7C2CghTHJTVPionCGuWxdWoP7Myc7ZEdvZtBxRWZBf268uoFj5TC3P7PXYjaoS2fifm",
  "key15": "4PbYTr139Yn3R4jjQTJV9XgdNqpuQE4BUzWefZRN8eh7Pfbm6waANiqBM5CAG76N8i6aAbVuaPkDPbtcS87BBJUT",
  "key16": "48eaFYxv2D4ige4VLGxcBvgLuPzgVBMQmP7wACmDFoNfG84WQpCqDfTBz9XFLUijVwLnmLVQrjZVDNAkC1tvzr5U",
  "key17": "PKD3ipYtQ9qYpjFVT9iWZn3GkHcv1aRq1nRANTau2KTVdXwVxetwuNyouM1pLAdhGzU26EvRRjDJQQTq23enCs3",
  "key18": "kg9BzcKiH4Ci9NTk5MAKQLj33ssL4tyrdqzM3vyuSx1LmMNKArZ3oG876m8247nXL9Uf4k6a4ZknD6kPnfTdSbD",
  "key19": "52E1odDGGdXaLsaLryggPZJ5d5uUEuRvMFMVf5Q3CfVX6FRyvfFCwhmKUhPzaTpRMPWTVCxGpEQHErGHVW5H6ak9",
  "key20": "5aSm5tRLj6yVRPJsuNZtAVkSPry4xwrbHFppPs31NpFKAQ25MgivHzDywtxAM5Y68y3GYcRBpuZ5fKvexqwxQMLd",
  "key21": "2CBfX9RAHH2ZdMGjgDWbmDhpqCJHu1akw6h13hZ1AudE3Jfy9V6RcUfbURqWotdvrMaeH71tuL94gJBxDVkBojG6",
  "key22": "39rju2BYNVMvZ3eWQrm5cpMHJdXW3nqCaDNG2unpVVZCn91EAZGM65LZAnPRuUGg4DK6Cyb8ztfFrqaYFHZy7RuQ",
  "key23": "2hLnAdHchFR1fLPAnGtkPDm9oeNigfy87egFcLVZGt3Dia4zo4xs5Tk43xmNCzMSFNT8X1acVtbxjqdN6vnhcTnJ",
  "key24": "5EPzXGDc5cWzALwFmNwGKDnngHQyoSRHjFDVFHByCRdmSuYmD4cpH4yiJJBvbbJKxkLtgRfPNw1Ufb1JA6mwDdHm",
  "key25": "3Zna6PmPPb32cKAE7xi3NxZfJKksgWNHmaGMakbueCRKrcirRuJycXVkRQYcEwUaQ2cNn5Md976xUJSovhVgcYak",
  "key26": "5WCvKbjUXjUcGsZVwSGSrz1XYDEH2jWwVp4ai7KAXT3nyxhVtyNiKdjtXmmYPcDRNhH8UEmfTWWNXRAv4eDDwick",
  "key27": "rjD2GD8NWsP23Co3aekcdVkihDNH3A6sEKi7wM5iKbmmpwpXo6rLXR9ySsJwcgkf7o63xDavonf6e7sioApfy1q",
  "key28": "57mFdK14sRUfKwjD7YAfPfYEEP7C2LFCheXfQiJLPFPZidsnKi51Am9jNTh2k5M2JgmfSegNP3vFcCqifTPUF6vJ",
  "key29": "5pnkQYtXvXA8DfZjaUYb1QgTmG3ipKn3ZeozVCoC7XY2zRGNdcV78qSVQNR36aKgVRNadu7jRbMok4Te3AxzUaJA",
  "key30": "2irxg9iz65Q3vzAbcbish38xmyHe5uzAHCsTA88Y58kSYood3m17u6LADRRY6AhmvmqZLgr9ByH2fUNk1rm9eEfZ",
  "key31": "3GCWXruSicGgVXpjy35KdbjiSZaiXweAsan6qJWQSn9KiPf4h4bxcXFv1cM1xSrKKxc5VapDZNcHXpYCux1qixtN",
  "key32": "4CBiLMjdajps9CsfFF3ww8ULCPzDUiFVpccaWtozyekLmTaPXJXRMoaq84r6h364QcoVTQkdpD167VQgUvyuJNQb",
  "key33": "4rwGyq1kCWs7xZZJRXHB6D8KEACxtdyPTyq1djmrWuuxLhatXYqTVUTvbtDWJfzWdbffFvEf147e5B69YUpYr5uW",
  "key34": "4PhZapmdeueF69FZVAHiHkcX7dFu27xUU6Jto27aQbpDs2Y2W5ghkKXMSp8SF3TSMHB2QLoZ9QmDD94HtfYqaH1R",
  "key35": "4DGkUPwaXb3Q7Mz4Xjs8FgbPKGrzagHMC8sfthySMbEMJeMREUtbs9UGX6GstxedJhgZD7xA9SuWM7wp3VKz4y3H",
  "key36": "W3NStgLM9jgF29Xb1WYrrCJyRFiwyjHq5Rjmvr2xoKsSW8wxQrdmtoF1KZW9kJJA4Hzgkfp1aCH8NnhKBVPduo8",
  "key37": "5UMsu8B8gabWB6fHxu4JDXJ4tbKFbaARRfrs4rAABDn7ggHowq3xomKcXTtWrkLTv9mR47EjQ8Ek3bTdfRyMYcc7",
  "key38": "4PH4C7mdkZY4pewHKfqLGnxFpw3KjM5k2ZGifYyWGuU2DJVRfxZQH768Ujmp5gVJne7DqApVdXckhgSRhUngxERQ",
  "key39": "zLXgGK9QAH12i4RGzCCwwA26uDqa8QBg9UKKcXz3SBYkk3ybWM3bCzomxqf1rmrkXPCL2sg9oFtv6ezLGpM1yEG"
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

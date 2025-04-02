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
    "2TDbZMjhcBhJGMk8EKSsgL85eLTbhxLP7a8R2yA1SPtMRcnPDysS1ZqRaXTDGWCeoLFAmjfT3uad3voUJgYbcRtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BYQy1joqf5bX3gB7Y79pZvLijbnNdE1zFafx8MnvLCmgAm2tJTLi1zYagK2i85wT66FGkpZzpZU36tKyxN1tENw",
  "key1": "2ssoTvkKwf6P2fGQW6UaYrBN1NnD5H8QpUpqG9QXxNLw41N2i8oPEqvD2ixzdZmk6rwR8QykgTY9oHgTubTDuxcY",
  "key2": "3H1HbNvUSBQRXCDGK9m5oiDZu9benZLvEwnLm5foGaPChmK841ize2ozQL73dmTMzmpZidk9PHZVKUxY8hz4nN8G",
  "key3": "qchKDuiDTjX8DRBc16VNY6zNXp9L53gFcFkXtRbsMbdXbPJZy64HnAv8HyGDVXmc1rvsdwDHZiKedGisqeyhmJA",
  "key4": "3Rpo4BNGvHszYFQbztXnvLzdDHkQW6Ks6uP2sm1cxS26odYVm1HBLx3g8pKCQQWtqbSL4JDDHB914G4VBgZonjg1",
  "key5": "2ag8ftdRYjSKAzEJzCwkGZUKuY2mtqNDuzWPoDocF8Wsj1MARWo4rPJ9px5wbchaAm9toBecx5G7sp2wpuTzAGeP",
  "key6": "4qz31xjD1qJYVTiiVbhTEmim5FQsumTwMfonvgzXLADbiiURnEVDxntVdmE1genzKCwpgEVBATYH7MgeAfPoj6Qo",
  "key7": "M9XfR9bxxBXkPBmKHMMjjsXkHzZ94Fj462ySHXPLr1VjDohfQea8cfZYG7HxVgDqEQdihEqgDZwTRzTdaDLFyao",
  "key8": "2sxjWkTuKw99kBf55zALWiMGsU8mfQDAadttE1MxvUiRYDLFQLQdeFfJ5K8V24fQFAXSwrQu3xR67wUYtSCBqgmm",
  "key9": "5aQX9C2trVsF2tA9Yp1cYBDSaGnNW1Wqa2YTyAT7CvEy3nqxGT8YG3k4nWZzFVweToJ2zCU2juUG35GUKFBsVKFP",
  "key10": "4oDVjBobYMeRQ8Zf4nACiHJj1i5oqUUBsmrkRxsmQuddGRtFVtX43e91SccREr1oCJo8MEfzM7M6JPqvpZoFCGp3",
  "key11": "5ephYhzmwjqPrvnz9HsC1STh7Y5PMjreJkktAu1o5DGbA98W7dhzvtzY1YPvu9p5BUpW7ucKEAfSggqfPqn5wSon",
  "key12": "z5UutHwCDem7teFS4eLdDCqMqs64gaCDh2wzkRY6dZRHNoNKcKAn5sAFYV42XfoXGeGX4xasNtfgAvgRmQYPRnb",
  "key13": "uiy4xUb9JFrCQ23xfJpqfMRQ2tCsmbr3UJN4b8obzVTgymAuuy3H9MY3oYKVCYLZ9YJFQWUm3H5w43SFWHWkNAf",
  "key14": "5GffLSEfmwfE98Rc7Aq3av6kMB3dx3ZQHCLpjP31a8WiJbBzagUHraubwEzvgeSCvyok4XoBc7uT3eH6BDm68yTN",
  "key15": "44zAe643wNCRxBPj7outzBJkiEbwywL8xZofqDuyEdVohbAQq2iUKBpwounqsvuiK1evyeh96nAJ3gngbdVxN9BL",
  "key16": "2ri7nuWgefrERUghudwkPciXHN7GXHVrJRys9pPh9XxMi9yWLeiYLSrD4vncmUJJ1roJcaWEjS4aDRZnSzofBFrq",
  "key17": "2bRNDCnFzNb4wzAEKzzvvDEUsUNcus6TrnKgr18YA43PXGzxTPWmHc7v4BCDyWbMmeAqMcw9hHpp8MyhNKihYy9z",
  "key18": "5v4f3SvJwkhBqkCHx8XM2UEVPfhAJNn73y2gzKj2TmfA4yBmLiTzduhcXN1xAsjSDpihQeyviiFhYsFUx4Wkox3f",
  "key19": "3EaMPqDSa3cMKXz8Xjd9ZkrL9zzWSeJgTVQWaEqNpAhckewD1cjtMoWYn2DS83jQs433drZN5Bmx83fhVuTCUZsu",
  "key20": "3zu1kWk4CJds9VJUHxFGjWuJK2aKZzEBmNhtQBwXfFRPdg9s1gsoGonvqJhsgsfyRrpwBWW64gmPHRsLcFJbKB4A",
  "key21": "5CVnGKAwr4GgJJeneqFLqq9FDtDs98zoWrNxv2TRpsbhp6HuwoMsuKAJmzsWLkmsB3k7xQW28HSz5LqgH6P1XRnZ",
  "key22": "2EmDcxVs16nTsdTGh3Vb2sVctZKb3d9HkWkGUebYxLwPicKFFgsEWdVU7jiprGfsHBR7pP4z82zbf8NUiCNjBDco",
  "key23": "4dBBeSt4HujaDouxKZVgnBF9C41P9mYnqWGMEwYCzUuZHuoGTLr9JY75VgHFXsxd6WAU5EXDK4f2opKAEFFCEc4z",
  "key24": "4WhgePmygTcXpZGvDy1cUTxGfiechowUbJd2JrjNgsaAQ2d4YfysDDdkHVx4zMNetbyEo9GaTYj8goG2MonD9kki",
  "key25": "2hwZP3uDiUtV7N1BBxZafqoLj5nnW6N1eP2Eqfcc2d6sj7cvJnUbvZ57F5if8LtR5h2LRzXWZErnyP9rE2tRbwc7",
  "key26": "xCFUG7HA67vzTZu5yJmBb2BpvSEy7d386fDPw2S2LWuZvgNrPpDvaYR1dhSfiCjr5TcBUwGv8Lq4DQTEFA8Useb",
  "key27": "3T45mqFz3bX47c5tJ3bpEEmUVJ5MLdm4ydWfzySDumfVbzo4woVzqWhLzTn8msUYfSEtWReTNPAot3j5GMoUYpbb",
  "key28": "5RTERoyvSz7ex8XnWdsdpdXxRAWuctUzG9QtNJxBM4YonjD92C2gaC4GnhPxL8MR5dq2onVjr3zHQbSkUkGJ9KKt",
  "key29": "38qHf6ShUmEb1q8otiMQ7vRDvJg5VZ8txUYhnpHakwpYYGwHiDBTyu1rGDb1xKst8i4D14ycyZ59eUjBZ9MhiBXa",
  "key30": "c9uT2eAbHLM6hFZSw3NLjdZRwuhGEKRqPvvLdHne7MsqcXsZWbvW5VJBtJrScWmXaxJJQU6zSmPE41ZPmX6nQUY",
  "key31": "63kodtTSnEboxaePDE8ShjtXwdLxgBxTuZqxwC9GZZZqUEaSmjunyXfrMACKWrEsRYEPeDq9MNrbRcRMqnNb9DA4",
  "key32": "2TUv5GvdwGvAbeRMvkHacc3dYoxHJ3AJtnptQeyLdsL9ThaUUXdnqf8QQVKVCEkbwYtqvo7g15F9TEQyMszRWUw9",
  "key33": "5dv1b3BM8P3f5oX8VHV3kVjToKWxKzdP2EZiAABgoJNQHWJXaSPJPzWJqJsSxHrbYkgJanjFUQaR7YaLLeNVajb1",
  "key34": "2rzTtrhqMTUvuCvNyeP9ryp9byFBGPffcJ6jYVuGHxFuGWggqRoHVFVMoLaR5zpyHg3BXppHmBJECBHCnxMgF5uP",
  "key35": "25TRLBShQ8QfSs4EZSFbzpwR2Tm9fvdy6RqjsNUL3upZVNi2WfXMe4itg6ARY7qGZNgpWrPeFNZ4ojCpyC75QP37",
  "key36": "3XhpuPf9mEjGLzgSieX2gGMKhsy5zBnMjRczN36uP8NR1XTa1mKSDM1QSRBFCc7UcWeu8J5CQs5eom3bppRyzvbZ",
  "key37": "2rBTK2rFNYroUzjEqdB3QqUGGmfpBfiQrSyPJdGBTHzAMis2M2saAAVgnLXkdhqFmnoK4UjLaJDHxW5qDX79nQjT",
  "key38": "4am58xACM1M5vVtLgBZSgfsFr83ZrF2quFWSYSh3XVKYCzHLoGWJzDbrGhCKND4vuv66PoAHsmpxdYVnwR5wpKz6",
  "key39": "47K4uj8uYrVQTesqkrF2eSFNzKGWeYma3prvZqXBcyWxpCGEmCcHiyY22WRE3QPDwurjEnnbrJrzhMasAeyibGgC",
  "key40": "2KjJa9VdmnG2bQctGiPQftjTKZfNekPZRamhxNXCia5YLjkNFG9YMDtdp7CYPMajZcGKHhXTtjR4AT5tCzdCrsxU",
  "key41": "5cN8s612f9omvG7itpT3rBa9L4mxHYKaJfyxkYNiNQHkerUhptgvsErG1JFd9trTR9C22omWzgX1fdZ23rPoVQHc",
  "key42": "5jRqhZn2zuFija5tFm7f6txCinxdviHUuELxrtKxqwMRGyukDT49FtAqgGszzgS1wP5sUSNmEnmzjGau4GSXZCDW",
  "key43": "5knQmLVw72tvnuw6TnabdEjjR6ViUJqYHmc6VAAgMXYvQPpK61r65cGQ6BufVukWBxNSvsyzBxxWdZpqUcV7YJzG",
  "key44": "5qx2nJa1WPBrRATahjZEmHFq4dLG9hwe8Vnh4caEiuDrv8evEqQVcxMAJefzCBjwyNeLa7rt52ZZeDF8AaoA8diS",
  "key45": "27pHRggBPz7wJ64j5KVHrpteWQVZJhgqZ2gUqHtLKMoovCBnGrYWu91wnvWS29amshPKTZ8acZMagaAbedJYPxPA",
  "key46": "244ZfYf4uuw37xQYkG4hd4a4QpnHZ9EzwPkD2vafqXFQ7998gR56PDxUHrmx5NfCZjFXLHU1haZsfjnGrWL4JYog"
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

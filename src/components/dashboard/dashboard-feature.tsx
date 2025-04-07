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
    "67pbUpRUvfub3zVE6QN3fmbqbupQhFH3dSpRqcTo6QudSjAFmU32sSHGtn9cc47E6RbL4ZionpL9un5PLmLK9JGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hiSwrxDhsGK3XcBhutWMPnKXRfvShHKrRJ2esmvZTqiTiiTsuSpU6pkJz56sB4f86njZ8RJcvsZEP33L6qyEBH",
  "key1": "rtnQUi4UiWMiPM4BYx8FDFZyv5wHY8X5ARyJjkABpcsR6zaS2Sbo7Afm56pjVoGV1dJGMeQLjAHptzfp92NLJVk",
  "key2": "4itZQkxKsGh8SFj4LxmGuEFqgKJSu7xVFAsqc9EKVRXQWsUvBZAAYVVuTWfihkRofPaPumdY1Qc3otvyJ6nfKyEp",
  "key3": "2tYXw6H5kLZx8mhCLXWZq6ccBQ1wkJGEhJhSUsQhQ93AzgyNFqtRYjsAvc4cbE1DWo8N13SQPThWEx6apebw7t9L",
  "key4": "3HffMRKDF3L5KcHRd5TJ5GSuPjyGiyUEA1Bo4to2eVrtaYr3hibzE66j342MhAP3FWM5pJCN7T7ZbXZNithvfap4",
  "key5": "54aQxSQnqLoarpcKfLXadXfiPpiu4DandAYCdu8h4PWtjBYkHKmGL5PfHYTzPJomkK8k7TMvwzfayxq94ykZ6aSb",
  "key6": "4qEmUM5279WP6yPoS6HPREFAwt1wF7q8GFrNqrksQaY2Q4NHYhQ1RDWtVjd4j4TG98Lx6SXTPCqJ8G2dZZCvg1vJ",
  "key7": "9Tg68rk3yuT9Lz3F99LgCSee6snYSPRYUkP8V3jBvAa7u4mvYoLNxuP47YYFHyGt6jvSgEXE5ejskwU8bgNrN6U",
  "key8": "26jNZoSJy8obTuDH7PnYGqLkwM6Jd7qY3EJxf7f2xCFkLyxrRdbFZ5XhBufNtap15x1SBHsCdmtUgbzLnb5jkmpt",
  "key9": "2nTbDFUgduKKLH38QTD86UZop6orG9K7A2bo9gxVeosdx9geCB2mSjqq8NnUpEhhYJDZYU1AfwaZvtk4jLS3bFHV",
  "key10": "pVfPU1csSVwesy36GhG21pE6FfY4HXTrSQG7fdS6n5pVYoAma2wLXSTqiV8SBWVBunV5RBu7ZHVvzTaJ5Pwyi3f",
  "key11": "2jKKbVnXQzgkN9ERyPpcWwgpwDCfYhp9nmdV8cZNwhYsUeoDDwn3eAAiSsj7kMwEZDC3rUx4yBBJpS8NLEsBZrWh",
  "key12": "2rrU8Yr45L5V4NSs8yRLMtvjqiYSiV92CmxzkUAu15mjDXd6hW9qGrtBdtYV2RMhW3RNdBVvKpD4FT6EBQtupvFL",
  "key13": "2hkLUydbtruL6s67Xo9DP5LGDsexeRP3rkSqLymoRZGK1pidw2Y9qRWjybY8AtrJbQJKchHCs3nWhpBDATEApiot",
  "key14": "3VgXw4ejhJ3WJgfPUdBYFn5GWqg5XxUNAngPcL6nduUptCJpX4yb3aA6jZ2wcuzSMBwpiixsn8LFvoqE9wTmvfix",
  "key15": "2H9xHxkjFhDTMKuWEVbBzhP7D7oZsUx3GLJxWoFg9fRgqirp65pfmoqS6fYwpykSBt19EexcTegL9nG9Ue76BNzT",
  "key16": "5vn9jfbA9Poav7Gevb47oSWcxDMU8foEodGMU2WBDxyxu9EPPWrz3oRLUtmVucALTo47TyKQZ3pZ1dRjGrCEU4y",
  "key17": "3Sz7ncj6UGFLtbzQufd5c5YjUEc59yUZMPbuQd3xADxPHyzN7kJGxc2W2unoAruub3qZWJL7RPyBFRnTNJQfLCTK",
  "key18": "4Kc9zCSF2paKuH6tf8tTufBf5Heofggxt2Le6agScsS7mwcuvMSmNihQLqpfeqAYsQoAotqEVVQ8EuQuhgtPNotc",
  "key19": "2vhNt1HHoUdk4XmDreWXrW6SSN1mnZiLcsdjdGoWAGhB4ERuD1Mn8gGDTRNS7Ho2U2vA3yLQ1iM16RfDeU4M5R7T",
  "key20": "5Jn12BQPdtpMfjZQ4pMsLH6Rprrk4ggYqSHjYd1gxs2gTPYDXCwnkoPn38K2VrF57U26NqMpTGJdv2BEfecaJgpu",
  "key21": "3xw9KeRuMvrmT3vUEWyoKNZDuT9UfeQ4kcUKAmGK6c9eX3aq6ZZUta6kjBumsBewqRuwM9HgHLTdgZVQSVBGdmQ",
  "key22": "NDJNUK4U4z4tjY4zact1E4wN1Ajg9VcxhRvN4H5QvWCXy5Zamrr45ZanugqCM3VHxbimxjDUzeAYin5BkvA29Ne",
  "key23": "HjkTDY78VCm6FB6F69C5oYBVFFAJNw9hNS1bLsYgavgGa17N8eKDgtBvWnBjzHa6YBU5BEaLzZx5Q22prKCwHB6",
  "key24": "2RA3RchhhUna1tas3XTmkEtGKPgMr7ZqMvupB9meZ1yG9EhonYX8jqNPdZhpdoWGNbqoRotQMjJpNSavoVBqw4dC",
  "key25": "57qHzHHDMkWxkQDQMoX1A5BiUFY6PMrD66vLPagGViS3F88yQgt9ZQytCbF4hSVAJ7DFyC8TALvKsNMdw2SpzHme",
  "key26": "3VaTkiZzNgW6tv3sYZhgX5MgF9asNfJYZr7mrbWriqopCUTDLevt3C4zW7xAzZT2jCSgc1rCQay6r9kJNMNzceSb",
  "key27": "27iszzZYhDkRW3iiNdnRv47RXge3FLNbwES2vNHcUC3NdJNTYVMkhQpx6jrRVnLbJzYC8FSy3wcpduFRZVoUwoAL",
  "key28": "39wBs1ScY69QNC3EsogUXU44jSEfNmmR7kqgt9e9GYpT31wJHZcFZSknWgZ2nH9FfSzLAEuH7BR6YwK2pzUp3QJx",
  "key29": "4hJBYnyZPZmffmXdvWRDqdH4QWAqoPdzGEKCY2iuyQa6VbfLZRz4kyuYMyThR7H4ZMTE3jQ2cBFPpWLudKYjw421",
  "key30": "Dy2GNgULF4qt1A3uQ2FpVpiQNKZrYm7gPV9BdCp5cLQsejn6T7rpepv5nE8uoUSEKUcCt6RLeQ8ZbTX1pgq5BYY",
  "key31": "nUS1LHZPsxjtkuSgv8E3CPCnk74xZmevzeitoHNnBP2VEvygr7ka8Zu6RWza14eKpuqaAXK8BMo77wkNKLTUsVt",
  "key32": "3NXox9X4XKkWKTaPbxgVkEatgLKkGiRSdQ4xawPS5BL8ZgQB6CBfTH5pDzQbL2bqQRkuBR5WRcrk7qfNSSpfpUfv",
  "key33": "35E2SwZxGUeMpodPsBXrjfy5GrfUUWDp3TobJNwV8XmxmuBjDQsT8Xq4uUT4uW1zvdWXoQiQbzJdLDspjCS3Wjvn",
  "key34": "TVkg3CVG6wy9jtVj8c1B4zB2tThudoXnjfBqHU8A5kkJ3nABCSbd3NvHbDN2yeBDQfp1kbYQ2WPmq8rC7rAPxGz",
  "key35": "46KyBfcuWjppyH3BycEErKsiArUauTzEGaRCivzzJ9yRExprBNtEdJ5R9Ej3M4ssxhKfCSxGmN9qyPZJjC2ER8gX",
  "key36": "27zoQ9DX58B1R8hKTGxMEctF3cziRmVNTMfe7gkdGx8d3DsGXfoBvrQ1ihzmXmY6nHRhkaBDHxPqAEbK6vpTQCVs",
  "key37": "3p4fxmYv7nD9i8sFBoF9TT2DdAvLJwGvh1j5g16h3LPAUb8Xtv4kdh84qYuLhUaaH4aQk5YUiWT7Nv9okwLkWLCk",
  "key38": "5CzBmTTVKb4DDgXJapcW7QfSML9g2HyCLjcvY3rfqYefA1K79ypEhKtFV9MHPvSw8mZvGPjTAgsC3BTqXKxiATBq",
  "key39": "5H6VsxU7Yu7KJDyRrymR89CJE4P4PeGPAjQntXDEBuqWw32u1NRzWTVyEcnXn2iYZJJL2DzihnUJUziPSmXpoPLA",
  "key40": "56ngdBLJpJA26yZdCUZrNuN3U8ajwZVxmHQ5w6MMtQTrHcrPaiLRYocaiQZ2g7VVBaxb4Q7k23F1YomTWZbJAM6c",
  "key41": "61xhaDqkYfD1VtjNqbrZ1WX4RqAqZzt7YfARgRZzTT3W7GQpjM2B6CvNx68YoCLDKQJ7e2NB8vhCWsmQKdSc2oK4",
  "key42": "4AEhRTPF4KuR4c3Ke8o21RWuR9azAAccXDTbQwGqCL4kaxy9nHZQLkkVcUvrrd8R5dw5ar9wYqT1VRjY9VS7AaaZ",
  "key43": "5ZnksNeEPU1ygp83QALRdVQoEzVD937ZnNHJ4vo4DAF3XscdQqV5UKhTuCtw9AAnGE1ZCk5Uj1fcbfN7w5SsmsqF",
  "key44": "3tbbatRa3RrgKio4gZe1XyH4oBvb3UTKZRCSv3TxCg1qMPZFPL97otvuuSpVtrxPkYmGxZyxwXdZEaj9VfyFXvDA",
  "key45": "5wWaHWtUjCBf8hPKFWasUiz9jTNQbBPsu96VPegTYKLf84fwUeicCPXadvudzh5FS9PWjYajzVcgDBqmsiB22Z5B",
  "key46": "5V8YWC78CPcwC9B5GrJdKQRvawq8Qd9FeAsXjtxFJp5t3t2L9detqLq88BGXD2TreZP7Ty2ek1WoTWEDCb8TvrZ8",
  "key47": "3KVt4Hqk24EnqP1TxN5Yc9Pmj6A47SCKcosM2owjwqri64Z4u4qw8G2dGR68YajX5sgueiMNjkmfrco6KHATLWMx",
  "key48": "4yN5vCqX5eAcm9BJAtfXSYVqgcgNGk5qCpapZiuFB81Fds3z2Qia8TNbVyKftAfbKEjufyWAe4Uhv4fzGrryVGZV"
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

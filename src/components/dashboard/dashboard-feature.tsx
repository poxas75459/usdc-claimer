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
    "5xj7FSZWm5WVMowoUdDmwpmZBnV2yZugZbPJLBR4v97ntVWUMpCcCmwbytJxKJ1Zpzd6QgSy6fwR9pmUeJfs31AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHLxxoU5uR66XQhnpKNikQ1mtmvudTPh2T4XoXtBND55QTjfzay55wTaozcmkfotvB2eat8cf4F9SrYCuGX9Gxz",
  "key1": "39WjzAp49cW1HbkkemPbktS7KvkmFk4gMiRVdieNf7mutrttZdTyPNfFkKMRDxX2Yt9PW7TnRnAVuKMpX2cMaUxo",
  "key2": "3rrqa7baSs6FwruxC4kp5SU6vHmuVqwno8wE73x3NiYcnCzrVZYCXTLvgy9TNxXdf9SvQzFW12ZcbpSpX1kngUyv",
  "key3": "21dWGiKMZKmazPwDcjAeWsq9GDGMwe9v7guNV2mCVXKW3yVCmaem27xBMQAwETz5RgZQok1impTn6PUP9FJ2B9hW",
  "key4": "2arLzfY34XLCQcrmJ865x18g2nbHBLSCZPJQnrs6QQEhxU6CXDVryRxvcbSPodTdh61QSw2Xsjt7uZW3pLAH9zz5",
  "key5": "3XzPMHMo3ian6hRrUCYJomgJjYisVuNg1WJy2tgqK57cQXptgk98r9K3PG4jFWmf5J23xoWyr7LgUr1cPVdo8cSC",
  "key6": "4G4wycq9pM19YQWSt3X1LNQygN1SfV9Q3E6dB8ikwu6yHsJj92cC2grvg2SaAFPfK1tkhcZ9RHvepVB94rXzL4xL",
  "key7": "Nxm36GQPFfrjirjh7XaFiW7fYhTwsucvtafhPJqFYTftWUXbaEcgLSFZxqMBocXG2hQFvggV8jLACEJTBFBh3nV",
  "key8": "55Zf2zeoCgufTXkz6gjMhySSief3i1yedfY1bY4wCduA8eJ37rHrrqoRTVxQK9i1Kf2EaMWeLCsizDaN6J8gsqyH",
  "key9": "5KFNvLGScERj4C6p7nCw8fx595sDng4ydxyTKTRv5ENh6WLtc4oGsXhgHQaRQdykzaoCvTQjpPwCWZZmyMcbVHLg",
  "key10": "64L4SrBR68mAL8VV3yESHXzM5eSkFRFQLD1EBPgCnCBrK2x7DUaU9HaJnSfp1LGjYoyDnhwDFcQaJFi9Pr8AgCY6",
  "key11": "5yV615kQH1CZDzPpqWLcHEf3FZfLVm6WyDLdLruM1UBkmaNk4syHzm9zqFuT2E7iJWiQGFHxE3baCU6MEoFQCcn5",
  "key12": "4vdhVMJL7cP5gDt47AMmjeuUqxyrafmGDh2c937MBhst2G2CzVpi85erzPnvdCPfFBL7sU6JuSmEqhRBFAiprfLu",
  "key13": "5rUMduTdLd2NCSFBqJMSXV1Wyb9JkhzQ1rQkBacBEBmPNMYia78Paj4nyfzFN3mp8VMkH2iXauan5ea2jmmaQjgc",
  "key14": "2offrMGJyjkPTq8pUU1FoCGJP39E13mkKrwUqfkJYGghWgPgQzbkzF1NdkCxVRFaT1W27F5QnKeY15PRae74Zwyp",
  "key15": "2QP71wieoekRTiP2vfnmFczDtwFaguKEasELWeqmvs3mjkFSkBj6w25p7FMAVcw6FdzxVr5NNbxGsSWkvr9GhSR",
  "key16": "4qJ84vCYUJDtjfp93DsMAmkc7a6dJpUEr56iJBzUL1zPRJnZ4UPjRRzV7gRTfztVCwddDRigeKMXaY9j1CkSh9vo",
  "key17": "27QFLzjQuG16T74nALSmocFg71S6iDeH5agFANjDoMbx9kqD9k67j1UDNiHBtRJeAuWFi5xKj1W8euYw2o3Bdt7L",
  "key18": "2XmxvyhHacvKPerm8DRzP4grVWdX2EEgNygPDMEBuxGsrSL4YAyQJBQMjVLKMW9ajNcVzbwLgvCqj4sVoDVBuPAz",
  "key19": "5ZfqktTincwnVSGoLu2nZCkfrCHi2gjwnHVwmcaVrznzbMSuGqKhs1vjiuby8iXg9JDUKPN7itWX2vDxGDpAvZeZ",
  "key20": "GZUfY6JYjRRcrZ9JB6aDxYnGuWUdQurKv4d5Q8ndNyJ4bUSeGdnJRryvoxAAVMySfEtweJKJ7V64DKGPrCbR8Wk",
  "key21": "33VoA3j7MXte2FgDCwmxJ7aaFsm7sztvnaDqvqoWzpWkxZhnN6F5CZcdFFGBBi4jB82Lz83xuoWvfR7PocnxpgVo",
  "key22": "5EPERvWxHHXMHKqKzgwQEWphGvgDaDgJJ225Xo8sTzSWKFLPoGiS6y2vUgNpQ9bEMWGVAKQLtjwp2a69qbvmyPNT",
  "key23": "2P8DbV33Ge1Hprgtm8jBafi2tevpzLFQiGFoMWiNkQnMjM3FuR55WwEW9Ty3cXyR1oxhQPvB9aeKuP2P6a6AoUxC",
  "key24": "4uwHJKtp83iUG1XTpTXAJn5aj8QJq8bLxNQsgHvdvq5rhxJkHfAQanPDc1CipY3pU2T2cpGt9JUFD27TZpQkSJhx",
  "key25": "2ZKWapXBCAp5nVNBvnCBCj1yReKyGb2YAivydXTUXoaRbGa9p536WMBCN2sBb8VV61dC4ebypf6iFrFbPPZmgPpJ",
  "key26": "3BVoA6Hb94ho2HUazZBcjCv9kQ1B58gDC8mA3mVsZToRJ9Qpe7paUtZxgyPnWJw46PtXuVtJ2eJsddS3xPiKuh1i",
  "key27": "4dC4DqXNkpGiXPyuVmoFxxW4M9JTiS1K84VUtEM57rzVaEZdGsCkYdvBD5xNdtbzNW49ULK3nhA5DYjGdnGmcsBT",
  "key28": "K43FaHzFG2Gc6oDdLVGokuwym772om9daTNgwCwmXk6oMn9hu3riKudHhNvYDRjNvQaaFEBiygWHWff8fRfM2wL",
  "key29": "4i2qFnZq8mQrnxZ39tvbXP6Dn42ZnTZ96GvyaNJhsFgHAbb6qkWWHDUryB1VXWteygyVyBdBCbdiUh6y4fxeoWSF",
  "key30": "LrkbtiPAht6vjQdTBH65fejPE1dYqu5p6NZvPdpsh4dyJLuzNPQyzJdCTwSLyBwACZgMgDpngy8fokuSKx5pCFT",
  "key31": "HFt8hh5BuqgeUNLaQMHL6nnS2sVEPZ1YH3LL9Ju6asHU7Jq5wp3DdxYzbKkY1vuQPsVgcjDorfYHFyGZraGRDiW",
  "key32": "41AbiMbBpn5PuGXDaxDqfMLc94w5GcGtsfct8sk7PjNMQiukHodcsHELJ9CoqbxGLPa8h1C9sV9zqdJGgUZfyMkg",
  "key33": "4JHtvBkkZ2GvJ7HioRTWCAnDUiCBxXV9QXTosLWLtHLv6sMRe8UiL4RivLtzuGsX3LWo4k1ZzS7AziUBY6Dpojp9",
  "key34": "3qRYd2brJiDjep2eFgTwUoGReyD3rqMtAujNo6wPnWqhhBVY3e8kDTU7HQGgjGy9uA2vGs1qXa7S2CqUbTr9GxhM",
  "key35": "5JWZKpXieVupBHSrUXD4pfjUerzRFdyTSH16ZPPqB8AP5LX3wXn5PsHcmYZzMgKWw9E8RTPUC9Uoqa5pFQacETFJ",
  "key36": "2XAkC47KBet6dkq9H5MyVf92cEPJ6YfocrjixzZVGzEm2koFuTn3sTEMvLUnfgmX3oAqhXDLWKQajGe8Mvyvqeqv",
  "key37": "4hJjgNZhQDSwMW9g6jWX6Q6yi3DEdD5E3phBx6w3USvJKDVgJgNRogZEZH4ZkvoTBCMhbgah6ZUQuTrYfxLzUzwX",
  "key38": "4hozWgAjQYp97pCBXck2RHs1C8Pq21jWx6y72e1uaY4Rj7Z1kPCs2cgMjSVchN85RsnimQMdPDo44zSqFLp3TxCo",
  "key39": "3fV9ewK6rs9SjGc8huSBnD81WJqni6N6Uy5w8g8aJMJ3noYRuGqWQc6harBzPeK5MxLo34af79ggMxwJrD8YbGNX",
  "key40": "5bhpiQsQtnAR6TUcv4jHyMagonxTpKcbdHDfZdFzcyvdxPJyBFjJRGpVfgoVS8zdLJAoWd1xSTXBWqtMMTAq2ASB",
  "key41": "4srPnv8WNkxwF5PxwkkY5fZR1epc7qBVik18mrWLrfnGMg5PBf3yfKcTZqze2wZJG9nJmGkuNYBUN7Ar5ATNF84e",
  "key42": "4gE2dzDikNuJrK2kpFuBkrefvfHyfvAsJzVhedFwtLPzfoL5rvwaRTdiPUdmdS97axyHuk6f3jaEKhCQaerDBfzk",
  "key43": "mdgk8qbDi5M2xkvQyGCo86ECT2PJHmvejpZ7WbLZzssbHHbPogwG7N1pNcS3eEe254fXLZLfP9W55oo39x6TiEY",
  "key44": "5ceVnkDXCjkmpQc6yCKyirx15RSs2bouUEziFYkguwTLMNZbnHsC6UobxKSoJmVDZSHbagrQycRPjR2oXAKfwZ8K",
  "key45": "Te4usYAYJX9eEf6emyJ4gegxFQrGtty1PTjJkKLmngBPPMvmhEdoztPz1G3zmj8RJ197tPkk5npcoLxt9Mb2rnk",
  "key46": "37PfY6wttXUtVkd9wzU5tXKTivhoUgABuF8JCFq9xwyfv58X5Rx5fdh8Y9XQxoWsPj1aZgLBVfydeS1tVUwss2qz",
  "key47": "2MqKLamm9UnUzCk9FXG938nA8rFcNH2ugyY67ERriNH6bTbkokZXztpM5SFpEsvFU1UQUFHoGYZmLm9dJqoDNke8"
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

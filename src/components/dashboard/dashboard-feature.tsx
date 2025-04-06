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
    "28PV2ngdnZ2KHGPKrKG2PT1FtBPVcsug8EK7HLA7NZTLN3dQfWvCGz4w9cGTSt8jowm5mVDfV8tfTrMVJHtBheD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rX6eGrXocfipNjGPpDyUuwZ5ySFkD1vL8Hbut8aNzK5Ldx2PSEmCu8EZ3f2kLTJ5CLcbXfLu9XAtUAVCBEeJYhC",
  "key1": "3zEPNRQ81L3vAbR2QfbRrpF7VW51G4rzq6BMT53jinSgPCiusWKZ5cWuu7nj1KxFgaxEQ99f3nGHFniNbvJZ6nBY",
  "key2": "oX5YbqtqXk7YwRLSqcrtfmhHkCe9GT3NtbCV8GeXkkUUoKvZCGFmxbtSE4cyH7w8JRbZyLCpEREzvePVctBKAj2",
  "key3": "58xWwhtJDwt6rgx8CKKMrpMsyAegCXJRmkwivWfWu9DdopRV3ufcXmPgYChaq6kNrtQPBAE1DVHQhjYYFyKgfDFi",
  "key4": "Md5keUnTf5rj4KxyxJVofDuXHU1NprRfBApfEbo4faNxQESY4aPvMaEMWoySDRViWgSsDTtV6jtPjH6qgUS3745",
  "key5": "2RZyR2CWAakk7dy2rdffUhohyeroHHQhpdoLGHvkDYTEgNz7S4Rmni6M7CawaJLMFHbjGFsocNgCej2LCJ1jP9U8",
  "key6": "2scuc9kNSioqa9N79upnoUDoLhhxeu7ikqioZK2n6p8DjwWhKG3tW6RiunYDFyDYa6xNT3uUAkNe3tQokYVkC6zU",
  "key7": "2vajMauZfiBByde6dVBRc6Uo29Qn1izc9ufXcvBrEH6JNV2gNTw5gjxUfxioG16p7eKLDemJwpZGvWwRRZ7hu6JB",
  "key8": "5jdkqHkWExb1wJhPBYKrVsUJUWJr2Aongf2RsGY9VizSpQNPS6F5aDMvZGv921F6KjSy6WYmNYqoLnkxmfvoZc9U",
  "key9": "4kFig92NHgTJpEGwBHmCzRh1utKyvokTeFcMhbyFtkNv7BkHwWUSvbSAaJ2QkqTePVM8ByG2dazg6M3MVSEHwtN6",
  "key10": "2MxBqUubdekKh2AwNHJZRpkqAyPE7B6TAdPkPNvY1uCWC8iqsmw1GTkVS3jkBzy2dfidHLXp8NZeQz5MVM6WWh8p",
  "key11": "oNuJXfdnCv4m5dm5erLDhZKeWTvnDoYThsRkgfPRMH5fbDMSV3qpueYhHLA8sLKS7Zv7yKV3vcRhaB9vppzsgLT",
  "key12": "4JD5SDfc7NbvEcgUgTzi7AUPRq6GW6E4hAmxxJ3KucgnB5B2jQnPqJfE64GMQ1Zm3oYeBz5WEeYfWXhKvjvFXWC6",
  "key13": "4wKfPP1LAH78f4AdrV4E63SCZ5ytE4mzUFXQ5gDNvrDTu5ACtG5tsESGNMNj4dMuiZ7NcCiwhee6JXxEVZCucpzA",
  "key14": "2bvorFZGxSdm6jifd3jYFYBBYTuUZYLASAao5FC1w1js3vYxzrpgYdX2QDK9EQgnpPHFbo2Xu5CV4kiq6Z5JLJ4r",
  "key15": "64fqneNWBMCf4UERkbRbTRMjEuTFdG3AXhiisqTdGJG6VCNTweZy7gYA7RH4XoMdKVMBg6gj4QZ77dFAdJMVhJCf",
  "key16": "45UgvSnpSN43h3nawMC6Ufit77pVrtdbPobqu35DxAVjT5H4SnSmkw6rV6Pv1PUaZUXFwfDxKGo7J1ryr2vNyepn",
  "key17": "3RqbcGsLmiFSVg3G3qDFPGcjd8nRDSYRTyzfNDhDSjahTspfHX31FCT67vkVKVQ6HZJYLMJseHiHgsSvTzZdoopE",
  "key18": "2qcqxJTMdkH4WfeQMvV6dRZaWAwTYM2NQfWKf41RAaRtj9DXxWPcCSd9ygFX9tGTrjFZsvM4g1YWp1fzNkpJ8yWV",
  "key19": "56QdJNr3E2CynXpTGjTrtDNQupKTd9gYtLATNKx7Gfbjm2Rw2bWxR9PZogk5wMY8kYbMakk7hZUcmtvLKF4P5meg",
  "key20": "3pWwYtKpZhATszk76GCMfiW7EJimKhQddnvXaEkkCywaAfQGrzVvjdTB2LA1ESchD3WjAJAPszA7Te8tT4CXRvT",
  "key21": "22WNUJHxWK2hCVToMS5t8j8R3suoE6CN9KD8brqigB2CSfE2qCWSJdmQHyYkaHHQdMrXkZzDur6tbEK6QcXZwDRc",
  "key22": "4idPkQ4QgXSHzNBzSCjRiNcVGjHU8HeXo9W3YKKX9zXpHE9PYM2Q9PWHBKss8R37c3rV4if7js4F91wdAstyo25e",
  "key23": "3BMspYJbmFt3jMTm1UFDPjSJsRDQu5FXjoyhsxdzQXrC3BU5mhNiaeYgKyp8H5M3HQuUwS2apPzRYBwhUFUSEKSa",
  "key24": "2PfVaP9sTQsRhJmTXfYT6tdE7Hy8yrWu3HCeERySvea4RA8WQXmNd9EsRUQkEwPFm1698xArWPXqXB27fYoDqH3F",
  "key25": "uuVpKr9ha6jtD4NBtLoyWampmfgHPL9YzXCiQ4mEmm8GVQ2NShvBU62KU7YaVcfdeHZQrPHaWHQbKfF3ecTDyjE",
  "key26": "62p4TeHuMEpnogmW9NmYN6UUizJGUgnWsy8tE6fQMFrV9y58qA7sLmCXPbp6BSahBeCARSx9an7ypeMH8g2iVckM",
  "key27": "2ZdRBxkxZqrWNRmSeNVXMksZP5Z5fo63LafAdimyaDWWitUUzodmjTT3VBCNdRPRxDV4AUGNsGKTPRqrGZGyd91L",
  "key28": "4hzN3ipQzTaEvMd6MZjZTuG1XRBGY85Aztvt7zrsZDNetRCmfcebqDr4CdtJQnUhEyWKnR6ZUg94P1p2HJ55wA7V",
  "key29": "XrFf8JrLza2PtXMA4JGTZYaWruJzeciTFoUjRisHLjafz9Zj8V1PHrj6cvbRJezXxUshjMtYmTcku8Hok56gwpD",
  "key30": "4sXcEefnowve3uaURRNtGN3oumN62K31e91dg8EPHqnzhHdbz9EJS2Vn6Gx1StzkHT7UTGjEqGWDMuJzqXs7YWss",
  "key31": "5oLnPF4yb46pD3jTByaCgQ2wt43SsxRSisJfL1VNKQLiVVLyk82mTy24Vc1ZMgQQCxVHM6NRS7pPQBiY2RjMNbY5",
  "key32": "66RyS58MDKuxNWbyrtiZ2NTYLDWwGKJ2XnXcu7y6ssTaWsHKSqbDWFtLFvBJ5FQiPscfBb9j5YCY9VZF81kysbJ9",
  "key33": "437sDjSTuWis7VmWXUVuQ8cVTwqM5mAW6d6jhWnEjZxMYV9RJDa2SQFaFJYC2dsmGnWHHZwNq6AUP5PtLio2R2s4",
  "key34": "5LLoGAB6inKDn32stGPdMDF8QtPUi2QkUsWHtR7p63iKDY6rWQJjBhP1WKf9Fcwk6qg5EigyudSyunN1RU3M9Nrq",
  "key35": "2GWfBNtJj8HynDkcxpgG5Z1zVzkpHL6rutmXdHhgqD2B1U276wBHKDkdpcGEap2JYR7UVJTeY1XJM4kSZvLB2LCf",
  "key36": "7tUcYF4papiXEXRpE6W5Xi8A82EF4YyzkpJJ4hTHZ7ZWoVsf9pLoxgBTQ5yXH5pqo71ddzm2QyGeypdcKyVeGkJ"
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

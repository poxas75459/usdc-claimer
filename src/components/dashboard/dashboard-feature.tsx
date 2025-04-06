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
    "r5QznWkJyid3RbmRWdVEZHBCJWLCxzi3ycxZgov3vWe9oSHL4hqZCCGsSPD22dLbzyqRxXuhcpSkXnHqCsnzqUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRjvHosqC8dGZx6aMVVMJ5akqS5Hf6f6YhxrCy2x5QF6E18p76yrPuojcTLjYeycnP7Z7CWW78zVkAUsMT4jRfE",
  "key1": "49xCZqQ69iRhdbGY8aNKBQepVt9aFJen8CLKj8j2Rak3YBWeoergcjkzsyMCYz68kBw4pGTrRjwtK13U1HKyw3cA",
  "key2": "ipFLieQpZUjMk6NhNiZSpBBhVrftCshcNDBipCNnJ51fw74NoDgUzqyDeamw3XVL925g6dcN8v8XdaEGHpK1S8R",
  "key3": "ohS5Bp2Er4MJcxepjPky6Cj6GCCehiXiQkAU6vCbHNNMn7U4kgJ3AZvtRGyqNP4oVvs6UMbidPpsZHPXfFwyiGN",
  "key4": "33djU15pNPrgti1PFoRoogymdG7a421wwXavZoeLnMAH7kcQ42WECiacw2Bz8D9YeRdDFLupiB34XLcAVXEBLRBc",
  "key5": "Jv1HBY5p4UwMGNvQF136ETWyUye5m7xw5WaFnQu5Joo2qaA1YHj3f3G9TEuDKBRy93E1s6soLrgKFf9rVk1AjZe",
  "key6": "23iVz9kJgt4RsYFxcvZYynYPR8MxjbhNVXpxBV4PuV1hFzAjeiHftzN7sALg169zMTEwBtAtMqRgKPjjEjJtMpsh",
  "key7": "4N1cRh24bvbGFrA7yvRzPTTs3HTf2K9tf8HyCm51LosGcRaUfhRuHq3mWtzcunRKQkFpT2pwnVzezHPUDRkbAs9f",
  "key8": "4WjuS35dkvL4UdnWxi76VUCJkFvktDvonhDXRs8Uw5CQ5o9ofMD7YWFht9eNAfb4d9hnatCFSRmfqLzt8nyWHSnB",
  "key9": "3xenLAa4Xod195jCXRmZBJHii7z5rD6updfvbnSWCi5TC8depCQFqkqa8zejFxKLfxsBzEvkn75z77KM5vZgqgtP",
  "key10": "4uYfvPS7YW7BEZUnN9xsJW3Fr8p1QZobsr85kAZwyDm4xbr1tPzfz5UzBGbmMnrbCgaQBLZxB1sQnhStY2Vjyi1u",
  "key11": "3vTFWn9xct93PFR5hxn3NpH1DjY9YdHfsjhc9er9HxHCfjyTJf4cTixhQEMeqsso6iuSA1QFweg7UyXnKwXq3efn",
  "key12": "e3DGZta3RDJSDEHeausr1pBHk2pvZR2wXr4oYQgeNuyLapBsRup3J1CGypNvoLDcscUAvyqmPd6S8mFcu48o2Gh",
  "key13": "3LTKFhr3nTaNRiSmKpyYxLSQ2dBs825voPzL3e3oWjdADz4TsdbRt7J2Ywv5e4m71VN83jMiu8PVrRgyyHG92RV1",
  "key14": "32pHPPnsQ8op6AdgLp5XhUzvN4bFDs7RAq1aqKHTKJRRfJpBqVPsvxo29uYxaAEAJGubdUmSGEcp8TF5uDWV8ZiC",
  "key15": "3mXwRymS8F9GP6PSXXqb4U9SBZCgv7bj2CbRNcFWXaTEVxsocUM3nfXUGw6JVNDcoHuArXBMxeR9djcTPYzjXU9E",
  "key16": "dWNeZqGRPNYnPWiZPU2jQTaCQgFrtCMHfEnN9ekXDucPRcdurDrTWnmDJu376PyFoC5D8eVyxMAJ9ZoEAm1HDzo",
  "key17": "kaatP6JH2i4ACfLmf76G4JkGE2StHnwBWBDyr2P2tVJGq2ycQaw9mjjPRbFqv3iZUBSvSP2NgZ3yzn8MqwXN8ao",
  "key18": "iRyaknrUdjJ4sRkCBwCs6mvJBh5pqkZcEsNv99iGBX2XycyH1crfsF61gqBp1ggARneknpS1ASBx6NUp43mUefR",
  "key19": "2SdYsYwEhLVhEDNcuMGWzv7SqtFZPFoKoCUzpA8pY71e9r2N7X3cNfpcAr7GSjkz7JddCa8bqY8xnAw5YNmJ7srx",
  "key20": "wEsFAAaMn8iwvv12QE4EuwGjaynUJsT8xidymxtTiWApoPwr9HuCRKTRKLmoGeV7VM7kKDXg3RypQzf12DYnAfG",
  "key21": "3cyMaw2qbw4SmtVNc2UaSjqQt5cqKHA84mZ9XRhH7ynQK6Hg9DJi1fAWvTwWVniE4isQWiCToomTqJwt737c6vVy",
  "key22": "5AkZ9EX1AXUvTqWdbd8HKdJTsWkqn8XArwFW6dzYDHyKUxDhxtwXAuvL4eAGbtc475DXzH5e9cs1sqQMhnGM1La3",
  "key23": "2pXjrpug4dKKGdHR4ne6V6uFzB63X51uF6sjd2ozPbVGfEFNWhFFh6nh23BGHF3RBEAXUDhJLdmcgTrMnvKUCERX",
  "key24": "iyS1x733Vb7g2QLEKYt23iSG9Ak7dZSpf32GFymPfYPeF39FqkD1uVuendrDNUNuvDs69AtSGFtKXuwrcjtmuW1",
  "key25": "28vVxFamb1K2uUQYTYnEeVJX4Dcz6GcqScH6KPDHyepGLLQV6YvZ85MFZQAwyk4Eg6fB9CjvDQ4dP8r8TDoEkFr2",
  "key26": "28Q5ezGmZSFFFPzmKd7FJ5Rmjmyh56LJ4oPM5E9JrQDMQXCZCjL6W3kaEFyoYENNnjQZqL6jYLLCPvkhPYdX9w88",
  "key27": "4btbRTKTvjXmmq1QE1MEVKjdtMrhWAfFHVawTHoqnrkcdD5oG4ySjQCXTp14pebiUfJYXC9knAY8gTwuJg4nT3Tm",
  "key28": "4c82pzwAm1ypbbnaioMDMPb1HgeJwojtqxaj67ngvTvpUNdaJBxkZWm8PEoQSN29zjR7G1hxeiYVacb7xz3CUXNR",
  "key29": "hiowxSZsAWC9zbMJT2tvqSLcwPMssZMM9mNEgMQgUqLxbw1EwzWR15VkUeuNvdYkVH5it4wjoVWU7r1xHfPJupU",
  "key30": "3rzBNbM4a6hbhvZHcXgkqaGDW51hG19e9ZosFSeDuFEDUUHckS9joKD2oL9PsGugqRhYrnjNRCHYRSSNCZNwkGUV",
  "key31": "4rdWgBeMPtjnxXdLv5xesXjZPwDF5bxKSjf9Q1c15ZDALXjbL9REyXscDjFLphvRUxNbXqhYQe1HxyhGJZDmipFN",
  "key32": "47hMaK9uPv5tFhr7iZ8ocKgd4JiLkopnFfHb1pdWV7kbwNj46fHtDp5zZB53X6qHW5DG5riUW7rrETVATkqWbfTh",
  "key33": "ATBh1waJ1uJgjVeGy46iRpFhviGcTCtf9pQB298MV2xdUjyUiJt9KQUQXfkuGiF8j16w25zBPSD4YZZtsXiBFH3",
  "key34": "5PGXV5epAx6UTYB2CgTB3zvsmCgNLcudewZkcJtpjJpny1jGETaEJRyaJpv3CMCEJ8ACcjgTc6cC2UVsfk1VvuXA",
  "key35": "B7YHok7dEruQndE3CLVNbn1LW82zMVS5HoccN5wBmdxbxz82iqHCqV15nK3hyqST2cDzBxHpLAkyCqMkpR1bgvg",
  "key36": "yhzsZbxgdVCWk3KyA8u6jS4FnDZHmvStP8LYqC7v7pX3TGMWocbHsVY3SRfmk4j1fzmQ4H9vB1QAXMAxNv5gJgM",
  "key37": "4BhG27p6pBobNh8A2E73Zfve12fGcGYeLduoZS1r1F31smkRS2zyQRZpqgxtCa46dQCZcT9buJcVviwYU868yFS7",
  "key38": "5SRb6KsfdnHoZsNy8b2VBWhG3nPrA19qbVEfeCFZixXmWfRyEkaFVsf1viea4LpopqVK6LVZeubWAdiYAQjBMvqz"
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

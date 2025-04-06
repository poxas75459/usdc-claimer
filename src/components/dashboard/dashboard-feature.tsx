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
    "4CZXdekiu9tqNugKvm2wtSawZFLLnvgatumok6WGKufCo9wK6BGiFN6N27Pfrrdie5g5aJgzSfWUWP668RhMt9xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9Axotr7UHqFZhxsJxHQ5qrQeRyB7diBd2Zg3mHph2Jc3uNq8vNsR5Akz7BdKVCpPjGpFTdxZSLWBGY3sxNWC81",
  "key1": "53emL7HatHRyTT1XCaGHjsWRnGK2UgATEQbpAvM7P4SPMgLod6C8ZhaZtqZCk3DU1dpeYz7yVCeB9p7TuebXkyPu",
  "key2": "4z8BetQgjJPddWKp1DhTZGi7RJEoUVWTjUsKcvHJ6DfVhssh9Vxy2dUyfA7A3XAvW6cBJvUqwZvGSrJ6NKmYweVo",
  "key3": "3wUNryuv5kQyBv7GxdR1obvdQiTr61khJzHSLjPQ1541hMGtFyhFV5GemMHJ2jU8eiq2JS9amd6ggSuzPPXQ8Jex",
  "key4": "2ujyfpd8cUuJ8DX6XWTB9aPV65xXoaYo5dSDCXkfr2Hj6VFiMQtCD1WXDHA3EbNRFd5K3ttJdn5nKQssETEthEvm",
  "key5": "3Yxi9Sk1zBbV2NWtZERAWRS82hKzXmmL7KsALLcMtBvJPDRuujrpPCDbJeeJ1eLwMeiWWyQWJsRF4A9GrVUNZD1N",
  "key6": "5S5J8MFjMLepYnCcQqrzkh8FYyZvUD7VjFjP2Fx5wtNEEV875g7sSrzZnEEnLyUEkKKSS1yXA6BDCtHXQCXz4jaV",
  "key7": "4hAgdLoGDme27ZEegC6xCooXV2cfnsLuEXb8ZePtZAARV1Ct2QTe4Vp2GUVjd5PRwhDE6mEV3mWx5LWrkBBg15sF",
  "key8": "4zWxw5LpLdp7HmAj9VZkCEFczxHEuSfEwPW6rg39CoWAbUYKHCw31aaoNa5eSirQKkYtZoxuLXgQL5m5mQFLA67r",
  "key9": "63fiY5Yh8Sqhu4tnZk4XydDaQg4DEjGTh1xexkxVnDPisLPKJBHseBhaR7ptnasqD9Wq1YKeAQkQjapJAqM7Uk2q",
  "key10": "4korXmiBqRRzAUMH5KYBPoLBqqXXMpYGUPjTia8a4S9kuqQa9h8RQ1BB5XVRD8MAsZxWZqzxnMxBwqrQr2UB8kPQ",
  "key11": "4QFaXMm6MF7u2vXszV9prjMKVvdgXt2b53FBH8uufhTmU8inPHs9UbUixwdvtrgGEUS6y7gP36eiVjRzBk8zeFf6",
  "key12": "4aGXkWQeSchPnmiCmYVtRRv7PFHxioMGboy59nPTrS9JfqukdbRuMHy94bSnGZ9vGgYGPpz7LnYWsxNgkbEpBt7L",
  "key13": "3DnNE3Y9ETcNSgaVM2Y4SNFjsu1JnGjwxMgpXzUakRAAYoR6SsS5LNRfn7EBrBEy8t4hEHLhG6aDsP9rXEKdGwiE",
  "key14": "594Gm5CP9YnLjXmdspUaYgSNjJdjTB4VRw2peFEyQ4aHMLuG5MuUR5fwkxhVtdvrNpUgKEdz2inzGZgaNGWgePrb",
  "key15": "521dMMTG2TkmGN4meAFvdiwqkzcuNbkNPuDpEYnAt68WSBJwb5yurPA61ujvYGLcRcySGnoa9ZdZpkDK6dVqMfCJ",
  "key16": "3WzjcSmBoDgGS2AktDat4aB31Tsaytox5PfuQjAHiZMjHVYZJD64Wszaziv2eax9VJWBftjefHaP7QwmWotVYkRh",
  "key17": "388WbPHnpVdgqYroSqGRepohxcuJaY1pB58MZEvk6L74j2DAXLSCiErwPNuTsKNEL77WqiGN54NbZK3CnA5AXXB",
  "key18": "5unzPjBdJVJVS5WMPomo4EmHR3FYyrVDra6Nn1oXj5emj3SuC7AjKhmRpQXhJACmz1HW9dDpqtdCJr1dRCRJ9ZS4",
  "key19": "MCts1XVFctYABg3EznWWXsdLGXDnxYpxvrnN3h78H73ZZo4iqUkHGq13Fw11XzqAfKLTU4RJEjdHjZFXkiJr3v7",
  "key20": "3AHvtjVZnENLgqWziUve1SPwX5DjRbJQHQGDKCu7LxJBhQWH5vJMovjYpm1UWPyyyxuzRJQZuoqZFk6UfqMne8i1",
  "key21": "ygeNfgoZrkqCxiUoqCQcWTxtS5MuNgHdTXjV4UrgqEJF16yqHvMiHquAQgVFtNvh55Gmvj45x3hXwe9fJf5PHyS",
  "key22": "24ywJRA2YCLiDSzzZLtmRTSgwaGnCSJiLNfkn6CSfToRm7KbMmatqJBYt9AQrnsaXHQqimG6h7vT3uNDGzWhVL5R",
  "key23": "3D2dB3qHWjHpnX91zDV4bK9RvpEHAt8v7EaUH6MF5kHMFnfNcrq4aKEtEnnVP1FG8qBRu8Vj5LxRfGYmKBsw6UYN",
  "key24": "Gm92MxzHxPW8zKGUhMhJGDoquE9kpmSoBmzVvHM8BL6dhahLMxtFdHT2S9C5y7LLCii3eWJiBN6anZNob8bxzf1",
  "key25": "24KafBM6NU6TDtLWdVy8nLM4m8Z7rhVy9UL68yWE2Ve7iCGUgA6GzhzNt8WHNhtaicYbQJz5kjPZRFz89paHJ5Qy",
  "key26": "4XC7kPqjuETdkXrXj21sbRHTUsAsQuzsz7RAPMryxVGFLUDXVuqNPbsC1MQ7FRRojMG18BzqVYH2jqtcuwvUz9FP",
  "key27": "526tZ3bquGsACb7A6o4TSC1UNtc9rmS3afJ85kn1VERArojM8PJPkcnT86bgqsEKTvWmv1EuXwLpqmQQ8qy3Mqz9",
  "key28": "dB5WYc55f9b5MhGWnw5vJxirnC7hHBgBe2FVZvaotY131ZVp4yjHmp9iMBnt6RsSc3fHWMrDCz55Tv4Cqup9f1t",
  "key29": "yHaqvZ2k3TDUzLHeKiM6cFRsKcXQYUvHzMyEW8BNGbkHFQRRrXzwHpAXoBo96PBnTD8WrUZUuYGV15sMEVttTHX",
  "key30": "5kWoKAY6Hu7yv8Lh13dmVSiqXkqFmwkMkTs5EyNqfajMSEEZRKQdS421PfpQwhBdCi39AxjoBGyCp3ZT6B4S1yPT",
  "key31": "5SPCV7UjzedzrPrvwXUtUkffwCMq5dxmvfWt8Pr3j7B15LKaATaeo39rCryaUc8Vkt6mkLyZ7bfo1EAHQWRvPpaa",
  "key32": "5XTL9Np4FxxS4FNh41wV3jqjCXEkLq6SLPrdxEnyHnywgVyccG1ArPHJGTaZBYuQgyCgSjuEPhmi1KZMtpfmAE4a",
  "key33": "mgEnsPAMKavJa3yufb1nAFuFhK6yu3u5GhfXx8QuDw1aDcTsxMTt4LYqxeba7v9huvLgDScEJ4VqwgBSTdBjuip",
  "key34": "5ByVeHjGeh5wjBfbtWauXqiqRDwDU5SLJvdF8V7G3aTwxaZwdrqabp6HLSnQmj7S9ketRiVfVjX9F976AqtVwvkf",
  "key35": "34zyLRcFLxsNzZRw9s6Fci772fT3tazVp98NqqycXiFEn4nSY3JSwt43n8Qn62gVwexL9891BqSVUqUN7WSad4rW",
  "key36": "YnS99B62EtENMLwksh6ksPxmMKjs6YMi7ASLXWYiHBzn9KasFs9zfF2E8sihRE6Xs7nkEGYkh8avSfbqky3sJYs",
  "key37": "3c9BKFDGiaVWSKksXykFVURRJBdpfY3yfouVD2wPYU3uNibB7bSV5ZAEgco19TAaVG1mPB75nYrTNinDuqXunfwf",
  "key38": "3aLoETdWZDetkfRDPcgXxWQxR5Za9rc2fXwnVH1zEjdb8y3gyr98NhLdaYrb9HHGon5LsA65Q3c56VBo8K1gSFf7",
  "key39": "38xgpj7QnNJYn3pspSx3j4EJJQsRteWZX2xTVqM2mUtP48GX8qMJCUqL9gaaHvGiziD4ZuBj6UbaePDYRMCkRxDV",
  "key40": "5Nqp1pL3oM21Q6qgPfFkMVGQ6XwcQLxWJPDg6AgnL7jRqRcPkVXUxzo4VKzqXddFojxruEtfzGxeYLoEJdpNDFNn",
  "key41": "4Cm7yDrucUc72GFDs5BjN1nrnf3aXbyP3nB67bi5cYvUruv8F1n1X24dxqHXuRgX13SdHm5jwNghafnqas9ytFL",
  "key42": "3idsTsijgLzxeGswbLvR69pUJ6Zawxxe8QvoTXiHYyZc3Yd2yPLQjAWmUeuz329ovN8upo4KekBhJ6xAzQEekdE7",
  "key43": "4UFcA8NReSgH1Ycm6suwavEnUwgtYFMauAAiwHHDEWfQg8fwa8RiAhKjKNxnBRVt8nAeKtdq7iRD8yvKfTvqySSF",
  "key44": "4k6g3Y24gcxWa4B5Ez5iSbMw4tL6BjfRZaS6XktQo9ZWmutncp93St9tYpBHJ1DUuarhjrm11gdN3EYVXcLLfqYg",
  "key45": "WaE58jNxTcm63m65bjCoziWgCqK8ki9K5wxdEFR76vbfruLkBJGuoGKfXtA9VbBA7hFWUqBPx3AAskqyf83pDjW",
  "key46": "rwrG784GNoNoXvYzCuJFW4HY6jETxsk9P9EUjQHdtF3fCrYSZjUx7Mdm6ZPKynnDvMKW3uv7g4vWMEXovsjZMCy",
  "key47": "4RwBTeRctTfqkYyLLLFGLjvDgqNrhonTaYYeNmKngVqiAJDm98r3g39iFyAYGmRGxoPLcJqcH9miyHcpXnmPGSWD"
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

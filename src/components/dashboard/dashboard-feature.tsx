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
    "41Zc8brPh1DArFn4pm9ThqwRpS3QfqzkVfcBvS87xaSvpHgZunSSeow5qeWnQaZbNeBoW3smARtW78oUkZzKrykf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDVQie8oZLZisE8VphoLEhyhA7b5697sD7Lma7SQnnjSyUVq9Yd7dc27BHWAEYiWhvD27xbGXsFx8eQbZByQqYi",
  "key1": "32HpVwDrjogAiC5CxV3KaovRXvWaR5tc6kirp27j7vSApuGdNcDcTGb1hBCYpJHE3LfRzCnACfUSFK6Dd2qk8PVz",
  "key2": "4yFw22D47ieXMK8xp8FRaYwn5FSLnm1SBr7nhWceDTEWYYrhrJ2nserDF5viMgYcpvr2eB7wRurFxg5rPqmPTvzF",
  "key3": "3qjZbgAGhVppkj8YQaNNw5DThCtopu6d9kghH3i6iUDML5jih5mPTaHdzS1fLhgbNAuXsBHiM8y3NBQPXQKARZZK",
  "key4": "2yV3KEqrHUhnFvf3nKAnA1JNiR73TA1mwc3eqURvw3Uc41iuzYJoJAr35PeQyL3KnwKQG3LCg7BMPc22Hmb8ZDRg",
  "key5": "5P5G9ApnRsUu1y4rx78VH2va72fNXMChTVAp68wFRkJ7cCyWduzM9AtxqroWK6cG4Ddjn14LKevNNmq7F1AEmX6r",
  "key6": "4crB8UXCjvMtYJDuLA9KF3s61ywRLrehKBQiZN22BtqiDRmtgVwJ7ZKZMrGYoiwYaH7YduxVzSPqxp9gfo8GEeto",
  "key7": "58o51N5BmEUnrkCQokDpuzDwAz1UudHGu5wjZhGZAaajjrEhaX9wrLepRktYfEKSmADTmvNGqNeRbrrrW7Q1NsBu",
  "key8": "3S2Ew19E2iJ1Yv5gFq26BgXzijWRcJkFsHU6jnLTJj91ytzbLj2bvLGDAMoX5qf9WbhVxirncwg2zgTJGQRThJ7J",
  "key9": "5WCd5CSokQ5G666Gr7SXHEXZfGALMWZ7MRDpLwTShUUvguNhTSMsnviTc7Fmc2JaQmhetbuiRXyskLMuqSr9Nk2a",
  "key10": "5yhmBumVi9DtvD3Jkw5NFTELSp7VN55o5Q9TvC4g134sBV8MHMfMk9JumVVwy8r1ZZnu2sHLsULQt2BAeX9HmZpZ",
  "key11": "2PuZNpZtT1uaUqoXuV2KD2jufPtTP7KLsJLzLHdYLuBkESzcyDgCc4pdabT31QaByfA5qeA34s8KJqrA124bezZT",
  "key12": "2XFFjWqjtH3HSMeBu6brMWqFrZjozjz9LZuDnAnQVCkqqhwmjprVd13nD8TkdcBaN4DocozfNAoz8LhiPisfTcs8",
  "key13": "4dhwWb3EuLcZNwfkNdmFcXzsjZh34yS6jWvt7jUnTWKKt9pNJtW4uatckPSfhjvofiiDpLRsiTsRmHXQyYu8LEoZ",
  "key14": "5fKQZo93ML1XrbGtxoDhncsxKD9VpdaooodSwvPzLH8Xty2ofJ9oFrQ8eHFbKFNmZWVgBhuRoqQYr8QedwAnKbNo",
  "key15": "32jZGX9DEaX8fTtQTywK2bQ7AKh24jw9jSWQs4vQsYA4pMncyyyVs5RJVZHxfjmmruDsmPrrB6H5VmSCVEMfeadn",
  "key16": "5VbdPLhN8nhMdq9rijXTs8gBBP5TBEttp9wwF3aVWe3CxWy7iJ9di9c3Cne94yfPBrSB68fBCYtckK4Kcbcrzajr",
  "key17": "56UmREX2EfWT1tp2491cKowRML6pmof3L5A4PZEjVkhUjpuRcERgswukiJgnCraJPWAem5KyyU36yKFSRiXBUkXN",
  "key18": "5E4pSF7LaVe7NNRgCstqbE6M77ekZbVhXfRBkjpPvhXdh8wMSHHwfuBvJQGvnTHeEz8u5U6vRWrMVSPZt5jfMGRA",
  "key19": "yGtbFdT9nWZKUVVcBDComuFetb5FdR9TPxxDrR8MXqyyp8pVjBrwHYX1sPPRAbV4FegqxbQjv6bxtgzuQL8cRcM",
  "key20": "4Wfa66dx2YDfea2qCS4frS36Fe4m7PPrJdwg6oy7BrYUhXTzYp1iUsV3nxBid8mSVcFa65vQkmDgetWm17UrV6rc",
  "key21": "exWRawib1edFeVP46tJewfyGTRuAmN3dnfT4vkT2ScYsWKFMNM9GgMV9rckzpxQmdmqEy5XwiJuJDhxRMKXf8c9",
  "key22": "3nsE3NCann1tYuYFJKPSkdmF1iFsDTBQP9AE6Qgsvrpjhvb7cLDgwrFAnMi74dMTPfV2ZDP9pCWMMm8WSWxLm5MT",
  "key23": "3pyzx96hM2hRfn3bCBpamq3iR4LQMCkBFdWxVudNJXnSffuLCyMDL6n2LQSmrpR458na5gsw1SsCVzcek4e3tm5s",
  "key24": "2qBgp2Pbo4rdijXFyqY8skytLZKs9B2mjk64UieZrZuGzQgtUhitTNGD9wuGervGY3bSRU9uMzgZmYZgWZ7VYTCm",
  "key25": "2xurzrpwu1iWCE9GhcqQG1nkQx6BwCrA3RGsK8akWRn46xyckj4wgJVmXdZgZKPSEWBGTkBU6npteLcraZu51CQN",
  "key26": "Lc8vHjxWFnXtctjDNB8Z6QhXNfFj1kPMCfue8QczqMPdWG2Q7tBzCssg8VZVDW58xVfUboy2yVT8L3Qg6k9U5pd",
  "key27": "45Ak3MoqnUYAAfMiP58jPez4bP4XSjxAJTQnZHPqE2bKWutvRFWMTGPN6c4ZQ9U1Lpg6kGdKGQrwpgQkd2Mv43JA",
  "key28": "57oJkPX1ThjA8F85TQ7xq4gQ342XLgDGaLwuaGPa9eAPrb8217xu39EpAMx8UiMctLHpgwGDhpxi4jDXBJ9ru4Tf",
  "key29": "4tV1PdzbGqbFMfTQkcSJQynATy5RBnWFS9aBPV3ptBJxsFyPJi4FQHiHc43eTbLfn3pVom8RaUpYs8MXUQCSKMVv",
  "key30": "5oTwURX1WCeL5p7frcLYkqfNVyoS3YkKPDEj8wtjG3BPaAYGMvn1FM1VLB9YSBBXpAXS8TTRhCPZmvww9XBbs3b5",
  "key31": "617SqRMacqESXXESa8R8CQzPpno5m4BgV9jfQhJpJL9AUg9uzNm6t5QX6vLA6M66BK4dyW8nXH4t5HY65zNjY99N",
  "key32": "53M3A6i6ikkT5XXBZe8zzP1QCGUaZxRjAYQPjUPyiykRyM5QEpr4zHsBFMZy3Sbsfk4idUP3UNsqbTVJYMEMNuZw",
  "key33": "3hVx6MwkHsmFUnk29YDbTJLGDMJzwfq9PmsgBva2vtt5CMKvBMoNPDBVjyxyMU2kviCofKcBFWY4pD6vRmoYBruk",
  "key34": "4jTSr9RY3NRZN5ekKGGscotHXdf4zpe853hEQoLp1A5oDFVtqxSZqvsJe83jJbGVKh3ck4xGtJfkXP7DdGQxszCg",
  "key35": "1YpLpj1PnWYzbnTQHjUCBa1KphLNhbpYxVusdFVTQgPRrc42PiVx2QEKPeE138prvdMJFpNuGfi97R5jey76TaB",
  "key36": "2K4LfajCwtXTirLCroVXoXSvA8AACwisLooQCUUgoTxWioYWmXp2gsP1sh4egLmwPzS6FEUHQENA8Fa9d8ja4Ztu",
  "key37": "BL7HrGfXc1xmcU1oakW5gwkTmWC4p2TSp8Gb9YGEj9mrMn7AAwKTzucReKCL6nCjyvy2ByCzqf4w53Xf47zBH8c",
  "key38": "4vovvh2uxunz1ugosnTcVid77E39rHTc4zjh4cHGAjd55BFSrsq8BnWtEAxBp66GRCE4SNbze6C1zUpiMcbXjSiC",
  "key39": "3KimnJvcUN51uTDg9kmUdtYRi1GxngMpH8HVRaQs5RvZb4ZVTKWrxs2EGVpNGUenyhs98kJbHxxpDjVPSskLnVMf",
  "key40": "L6YM4KaAaQ474E9qY8aSPWw7qLKXuN49q4tAdEnntsgUcErXN3sZ5M7gBrfc96JtYRy1GKcVXBhVXRSR4hWrbvP",
  "key41": "3Z7eZ32xXXJ19ms2vXUcn1gM47EFVFmhyMNERYAGmUqLdbVihHHoYHgszMyNahmzD2ieT98J8omVcXfh4nfdXXsY",
  "key42": "2BUqNZPR2eX5mVLqkHUDVCAeQFJNedrCKG6qw7MztXJ6gEpSUXLjaRyCsRSqR2JucsW78o6XKRrtU9kGFUVh8mwu",
  "key43": "4jsYENq4eh7q5Tm8v4DRLj3FXYXbXySWgk9JcqyyjE1cgZnLG7EArML5Bgxk8aDPwEkp3hGDjWPgYuM2reybMZ2N"
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

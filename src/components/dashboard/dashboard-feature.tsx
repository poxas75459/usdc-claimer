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
    "XZ7q3wggxwMXPuMdNTw9rKJktcb2K2Qeai6NwWvWaGBAbQQRwTVCCgMbUXNXotBBDZzRJh4U94w2sSScocHMBDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nmwWnADUhuSpGxG1pvkkobh3iMbfHigyxUmPAyetd2M53SCJ6GCXwM9azDrfwxShdYT3eK5jkU226QBGLmEDzh8",
  "key1": "4VHwnHiWfjC8N191fGLPpFPnrz6LgJNJdpct9fvZNeCdtL8qM4YTXfpiYN6Ji4edNLi1gAnwYvw7Db5tVyyPDoGg",
  "key2": "2SerfF2Dz4jwGdLzuUMurcFrLQW5yQ3v5bFC2u3b66mTH57Hsjsqr6wy2uKxoHZKLpMc7eJ9rTBoh35DeoUSxda9",
  "key3": "2fKwovoiYrgW98eGBkFsyM82pqBv6RTtu6TpLxJXnQ6udyjvukHZjAdAJexESAJBQtg59xHAXczuGHwpub3twfxq",
  "key4": "3dftkeByvXEwww9SjBzg2u1ZwiUyXbiu4ZQ7HWsHsQjMoY9rBGsybHkfWfzMkb9Cw6aMVqUy66JzSx6M7t8woPVc",
  "key5": "3cXY3ZArHDoDFevZ6JN3WEJsDk283F5SshPR6iomVRJyUwwbTRpDm8Nwaf67q79LcHHPRLosxMpdKgbFGBUAQsm2",
  "key6": "4S9HQYJW7ugacnFZDGdCUj9NxPq93w9Ekjd9vunEiwwcnvVKhSFyPy4EdLoTbmAvtGRGnkKts8Y2Srj5MPgowMEy",
  "key7": "5Tu753tQL7NrKRty9wK5eeWzEsFng4kC7o5QXKvXKvSn3twiAmfFW854fPu8QvYqktRSE95NrnnrC3AHSh67dGQZ",
  "key8": "27d4kWECUFcadBycmrKvDRSjPit9xCizpgVdP5THuMJ495xfr7d1eSpJhzjqCkrSPyTKXQE1KP8P2b1WRQ8RddJe",
  "key9": "TMzFvjyCSV9nkQZfFBpEQJKJwghhaWvnLxR67zeoSE4tep8K74Y6ep6EA6FppN85Ez5LB8BFKoQ4GwW9VrY1Z7g",
  "key10": "S2jT2dPdLGr3Q76tfQVkrVfxWYZYKmWUt5xwcfEHVnQnYooVLQQrBML3FXkQ9fYRTi29t8iKr1RHFR1ciSooRkE",
  "key11": "26UV4ke58PTK3JKJY84ZXx8wrRywZYoPsCQWeyB3dJDKWdhxCJsU57o5zqhSaFfHSpCZAykiHy7v6QqCvcwAQb55",
  "key12": "r9GCAQWgXnEcyuj5bW1yFeWxCk9jW94ywcBzK92t4x6paarooj7EKkdQvcqTjdXUtgCiUKNVcNR9GvhYiFvqiSR",
  "key13": "2n1A4AqXJu9aNTzEyxp4xjyGpxKPMN5ecbTMQRCPN6SdwWULpBs9g7BKNe8teeraqHQYVTynnSVFJaaEu98ubfqb",
  "key14": "3UBZkZsX2cRgyMWERiNcp2uQFF7mhEYSR3J77iBTU4sZhSWV3DX41G7sWqAFih3dg7U845pLFUrhGwjq486rd2gL",
  "key15": "5fo1GHkSPFC5swznGh8b2GZWZpJAMkYtt42UD4gtTmft2dFBmGxyCTxBA5sruZVdCY3me2fzSNq5WbGV3VWNM87s",
  "key16": "2gZ6Hrrg9QWLBkqUYQ8vjoMHE7iBRgrosoUpCNmwQgDcqC4k6LkCPwvyXZgSvbPhqSeMhBQX6x5mskNfp6zNG1NH",
  "key17": "3JGa6ZNcWv2MnXMsbBxen3hEVeGZzCX7PmDEu9FhzQoheHP2pDzJ1k8xoKWnMKWBUZAktWnX4SyYxR8aejjhC4YN",
  "key18": "44vcqzVPvTLTaRS3YoEijhWA93vtd4cbT5s4TNhEvxqwCEkK45UkhMJqPkW8mBXhzSsZwcRGd8P6BxvBTJLRGoJW",
  "key19": "2ocC1oFkfegnkshNBfvznDgNVwE6jnsLkwdDjc536X2RFPFE2uy33B3cBz7yKSttbZjkjEkYNXxxKafhrY3xUkdC",
  "key20": "3Lv6pBgpsNnfua3EhJVxP8JopVwcvYjSk5yq2KXgNiUSizE212wrHAkhWHNkRCShN7sQMVdzxTK1N8MuDSjivH6t",
  "key21": "2HYfFuP4NoiadKgEfioBxn9jpi2krUK5RYGRw39JUkHJhA7J8S7K2g57KxCR44JmL3Pi1tdWeGvxgaXEgjFmdQNi",
  "key22": "3jfUhgvGKt3CgteLc8Li76hr7mb2ZyWJAznWHezDRgJ6vsUHpeSU22T2bpaEF6ZjXbUYkrXautgCo3H2ewRyjbny",
  "key23": "Dyv4jaX77sB1SsXUqg7Rri52X8brZjdeuzRBpQGHAJcAsvXaJ3VM4ZUEm9fywVJM3S7jxTSyj7P2TSW1Wn4Snzv",
  "key24": "26qsrftJK7UxwDkQLab4twMCoUEjVS9g4dFG9H84MbxTESsDddNWs4bsQsRchkuXajjde51a95rU3c4rgLbKoCTJ",
  "key25": "h3QAESeYKDVP3jTWAngYTNFHvGmrefjNLonnPimF9n2Ji34FoBghANPooVtCe6tsmzZmq6EbbfRCg3dvSu12Gra",
  "key26": "wruPSNPj3nzuk26bCHVHZFXSx1MYpd7pTS2QWpLPH3LNy82EJ2nw6bZMn3inuZEZHA3aoTqu8eHnAZUCyBwDtyw",
  "key27": "54BRnoSCigxCxfgiCMb11b9cFZjaSXqJuQ3WPDwiRpgh8hynYyMCjgFukjTb7U8agGyZPmb4LFXv6AcWBKS6vF6b",
  "key28": "5vVEHEQ7MM9GnAeC2BQZTibJgZS2aH7PV7GoN84tRvv3doBuqnbhPr7cSHFX2p7v5NCTqJyPPxUUSewRbGMfAYJY",
  "key29": "5DLkRn3KrC8neqimWVdhfV7eLV1M3JSX37o3VgCLH6BQCAfcsJpRnkEcKdx5s1dVHsHMm9Z2Zv9mnXqnMNUgvuGr",
  "key30": "4nYs2mVyCkKgfu9yTBoF7LL8RvFRgVe7QPnV8i23xXwJGKmi5u3HJqLTDACqtyWMdpRyMuGB7s57Q1gWXFzTYSZq",
  "key31": "2Vy6nmu5C3ZumoGqfekLvetQNUUcqTUaJn8spDdfXQPMHaJ5z3YqpgYSWDDKDuFa2NLxcpMw8zonFncy9YJvouAm",
  "key32": "BwXopeL6veK7iNFJGKvwCQ4px9Tc51XmyVYyhLxXLTGHxLgjx8weqjfaKPd6ERLUKMomDewrUScxgux6FQfYVTJ",
  "key33": "3egRsWwXXKhjcJAkuiRYv2a8uYcMo8fS8tCACMtYcGHD1ugJfXm3d5S5LFTGHdbm1dckgjQbn8xt4PoXLsYSpifc",
  "key34": "2G68Fgq4m55rD4xP8PrrPmBaGywxLgtkkRdSWr4ybgZEYDqyeZRLdVG6W13xG1P6YdeU39abHRkDtd86FGa25qDa",
  "key35": "65kj6KsrXLVbcp5JfqSp4DojG7WYK6JkgXCfW8D4Moo6dkr6qKYUMcocfqtN5xTNbrMm8eyZGL6N4Fp694uA5ZyD",
  "key36": "33NunKvVeNoauKDTkPLGbgC7SoTzGth5zN3GqcDwSNVpHymhBtLjPnkTNzrkBKqKPHvG2LA4kuY41HvvLan6BGL6",
  "key37": "2dNiU6A5LDRUHyPFDiHBhkTZDmu7xhBCfH3JKxBdjNaFQMzqXGDckX3MMzD9djayGoFb2f6AbRkQXH6CQwbwuFpe",
  "key38": "5SKxigRCVVGTWzJ3coqtMv26TC2kvqPbb17JyRJtPyxqvXRGEWVyY9fWkyQLXfGy5mTmH8fxbKUi4FSNwf7KRhmw",
  "key39": "3uvoboPiarUVQuYAqoaZy3AhCNVaK7mW6psFneD6GsSyZtSurNE3PhEs2UWx5fLcDNQfecgu5CLPmb3YGAJRQEBT",
  "key40": "R6X18Y7ydmxYDHrrgFYCQu2yNNsx6pywA75TDvnKz7GHCJ3kygsJ1vTPDDfnHwjmcwYTBgPGwJJBpTjJgGtibqW",
  "key41": "32cNGv3u8cuM18qK6iHjqX6ZY6YGwWcuRTovzqJYS8SLyNPnmredMDRv9Bc1UQLt97P3c57DHc2F1Mn92Zx7MykN",
  "key42": "SK5sWXAmbTLpj6zzdykveNasx4mtRFN4pdp311LTjeEoZsZRSoWDvxeRu9STukRoYpwU7hgGTmYgk5RCs2C3Bkd",
  "key43": "38k93RyPpaTbxcSLW49wfC9iigb7sz3L7qER6rcusaU5Ukj7WZkSq78rMoyETfJsYHjx8zUS3J1XSvZER42a8Ue4",
  "key44": "2QvG6JxKcn2Hjj8V1KJGwMfNHnfMZAgUPbwVSJthe4BYaBBbeKB5mRd5iU4yAxyGoSfPjveGsPez8kR6KvUJh6Zk",
  "key45": "dehhoCAaCSVG49MyMR6afQ3yCxRy5d42zxTJBM8xbTPQ1aRmGihKjsdZmdyHxFdJhkTgAqSZQocAPFBWShiTPpJ",
  "key46": "49UR7zZuztmdji64QV6ZtRWjJpTSkVzRnHNHx2EpMG6g1fuKK8gRzRegDPD3Kh3ZWLtqDBD8fY9q3LbpgSYZXQ5v"
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

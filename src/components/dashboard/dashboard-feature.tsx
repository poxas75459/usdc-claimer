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
    "26qQrAMQjzXrfYCGW43A58pmJMLVvXgmDcjGquwrYjx6Ksr1Xo7cgDu5moznQzCJ3t7zFkgEZSc3SfYPYvLE61uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VeysdcgBvmZV1Mmkme3mTuYDNMEcTXRsb3tvSEC5zPK5HcaoiVoWTnrdkVxR4Jy8q6etbGspofHJhceMzrGtQDb",
  "key1": "5ZYTWjQjUieYdLtPBmk5EBDm9kBKj7c3z2r47kSBfmQDZpSSA3YW9SvvUKXh8GmsvX1wY4K2vhZGwpmCqmdUfiej",
  "key2": "21hjADVgTzpfvH37Wfg2wzr34ogbemt4cLxQMDCJJvUFyPEpsSC9JbPDc9317cBnoYc1B1PJoqi4pLAEjxLKzHq6",
  "key3": "4vJYLg22pRivZG4ox4oc24cLjJM9ykauNSUgm8zw93hnbDMcSvufhLYgBXf5xHDd7DLkmMJx8RbzboteCbQiX94Z",
  "key4": "4cYY3uCa9iTSMF6BnBKpZi83CwvU58JjnmnAMsavthXVAdkdQJwdAmH45aQQz7dAEgThudyTFEWGBEPkykUn5cPV",
  "key5": "4t5Cpbq74c7PvNw8K63xhFwCENvbrRq5J3he7fosw7cw7eGiJn2djYGRtvFBjxcqqDsdAzKfB543SuHx2Bj4LuoC",
  "key6": "DPHMnJiW2zZ5jPtWjv2b9m7MDd9Yw7G4NN2as5r6X34hxEAzXWZuhUgr8x8WMmKtVrKs2BSHhL2mxGx3wTLJr1B",
  "key7": "4aB4Pkn4fqaVV4bSTorYfFBZsewkxDjyZzD2hy7vJFkNvPDArV3X5JG5TjRToJKovSr92WasRdgLoTaFtepTw9fQ",
  "key8": "8QSbziiaD8E4rDbH1G7nv3usq76Qhc8eDwkLcNHwWvzUFGmR5kqm41s2hNrPMhC78R7wZ56Npf8aschx5rbyTXQ",
  "key9": "4AFSrsVUWRXmTPLrUKyddiDywPrVW7QNQw55PL2WQ1kTPQisx6KygWnPJBUywYMKkZUUwC55WEeGGBJrtmCGyzoy",
  "key10": "4u2CUWxPm3YAkGMdNCKCcjMDHLk4FZtvmM2vJbT147HJYcTq7FEUWVBcAy4uRhYpew6UPCXo4j2ZcD6mTc4bpHGW",
  "key11": "37UzWSKvABuSe1g74qbdVETmpVfqKL8h3Bh5GCDH6srWyNfnwg4YAEU3itgT5TwE1TAtXKPasFeay6aaGErDGwb9",
  "key12": "2b6UFDABJiUKRUz5qkmjoBcM9K9JtNvjiArx7nxwSvwhaGDADAcygeLYNYPs7cf5VUtrTdTvTeRNCKuZpPPfd3ci",
  "key13": "234qWg6xMKvb9Sm9AQkSo9fAcaX19FTPxL99dBqbT9vp1aajyv7p7TLU9Q9sh35r4DFDhQ2mAYM87ymG7bQCrrVD",
  "key14": "4PjRXsnon8Nd1PE4hUkmZ3gQh55iXvr7UBA8tbS8kufrxxeoQE9fRNgMP7haSYEmAwDoVG8ytuRz6cjoT6AmUT8p",
  "key15": "ksR6SZFUutkRC8Sy2Eqh4fGv36huY5VVo3kgjmu1v5dpGybKn3krzYEryXbAs834MozhhpQxbYopwHQhNDRjHn1",
  "key16": "CXjZ9XFuSXU43Mv7aFfjcCDUJ8L9MhzA1jyu35rzZQMLf58SyM781KaQVPQRn5XAU2qqrpBjgrzwkibx6uMoLmZ",
  "key17": "28n54FUUxrjrDVVa7jdqfYFWz1auJpk26sWVWZDFkP9f3Eq83CLRFfY52Anc4npXMRTqcifRLXaMVAegrn1zT8TG",
  "key18": "49gnUYCj7kLntsPbkqPyakvNDR86Qgpnhsok7o9NFk8mNCobjnfvmEDjxmga7DQuTHwhEbpw8wcqUuW5D9hdPTsG",
  "key19": "2Jy4kpTK28wSdvZ7v7gLquPQSnhC68KJkPBjLfDvdLZ9PtdM8JRWEs8j7cNf2b4XqPsMpo7bQkECHgbo3DsxU3NT",
  "key20": "c8mRRafTKfTfpbMhemVjB3YcHfXX3k3Ji1ciYhaMtkxzLURDmSYsi4rvLLUxY6c7RaG2dSfZJhnbtWvgTozpbar",
  "key21": "5x4iGKdM8SH6qAAQEJqhAvfZKduc1ozZinTXjVL3ZYDi4qobFWicnUVyYxDtnmHKGeYeUzXMhsLhqA1ukZuqAbyg",
  "key22": "2JJo8hHSq6k8ju6DdboYbbeb87tejTnMMNQGoZnutrw5eDyo4B5uKhx8bTVwMgvL2wApS3vFa4xXrj5x22ZnBKRu",
  "key23": "wQabm5djuc1yx6Kf6b8YVqr86MevCzbtc3N74hBTsm15fwaAeCcQK6vpYABg5Byr4fRhudEfNqgd3pA8GAyD5xm",
  "key24": "3MAzoTWCsvyTtMp2VRVzZVnZQHrHDjgYfzSMjE67BFzAewgJEBgGJxSycS6zT4SNMojFJrKPbq9yFpLgxNcocWBM",
  "key25": "2DVDnF2cT4cin6WLxxBZwJhasxMio7Fp78fsYXgp4LHVsdzGxhrWBEeWDWsAuLqcKZWZ9VX5wJSiwNJbw2U8mNNn",
  "key26": "64hjJxGkWNA3kRyjmcHUWMiMQsnQdfSvdYekP8qYt6Hw92wznHRxtpBZpv2TBuivfe7xCjUGJatup6tAzKowgAdE",
  "key27": "gcd9v95UHgqCGy7bEpW7qzNS4Whw1T4KPFxNVFWR1QZbPGJxNWNBceLq2v4CHSfePDYqXKdAZEYDyndySoCSnHx",
  "key28": "4SkdyKWyEU4yihXt37xY3RxUECCzp7H3UyLKuGgHGim46CEPH9PDssniceMJBAn9MZjv38k6he1NF3R32Y1qMr2E",
  "key29": "5NnALzvcVJ8mvxumJKayhGBKiFuXeiKUunm4RPL7w6H81VV1R4MwWE35cbZQPvjybDsJX9zLR8NR4Dao6Z3kxgYx",
  "key30": "3WuVCqAzAPYkamEzaJk8G38Hf5KVbrHm8mf6UmFvrLmBdhrNpbbhEQe1yNg46Vr1MQgj7oPoJ6oJDs2PSCGVtyC8",
  "key31": "3WvjKTbs13huoh5G65fXjV68Cup5WfVqaxPyAJtKsTZQpNQ3cfmJNuqT4VK6VKapFkcXruuRkwWiY8iQ7sA5nrNW",
  "key32": "bTJrjGWMDwVh83B5Svgdj8iHcAfnHRbVfTg7yCG1rQvRtaHPUkJMZpThJyjyt2LEmVr7DbLKTVsX9ZRs6t2E1M9",
  "key33": "ELoUB6GVzqLZXCJJ6hhb9RDDi48UqfcFn4r4W8bSxvpRXtDEjLsM1KE3eVX4vv9fYMJi6PoZZXS9mP6USKNt3WT",
  "key34": "4xAgQTjvf2bp3cw5UhqYANec6YZR4yepczpUQJuzQp4NgSab32P7tqPwTBCCMp7oRNKAzncjhabqpLJm1qn5rvyk",
  "key35": "2LUmNzyrfaYyeHEif46Wp4KgheqPkxhdkE6te8dGRNTWjUtJknF2F8pZbiCKzVPXm2GaYCLWW5u4Jr1rBk1oWBHu",
  "key36": "2TppcuuH11PXSKpNAb4L3xLazY6Zsz1oeu8uc2y3rEEmLyyxzhqLHrHKX6LUJ6y2TvCdbA54L9m32DXy6KfDyXmr",
  "key37": "5Rxe5CQsSbTeZpedyjL8AbeDSwJTUxP8MyaUaBWKZ5bGTTYrwe41KSifY5R4aN4kDx2Q8kPRspzy7Xk6NzJSJ4UV",
  "key38": "qpowmdZKoYhWVM6hAYTk98ua8MW3tXajZgPzqt9ph2wyt5PFK5chVaHHvVjpdSX7r24wuaeNV8PBwxdhHKvF3oL",
  "key39": "2VFcB9XRBkNxcA3bzy33Fatq9ZEertTxSGu3xZNq1SahjfY9quyD9jGpt6ZzF7eS6vJMZYqFgUtnujcUVGDMpbVq",
  "key40": "2uXmxGcC47m8jk3TXGsNesF2wJBuw593ifJqnTyVBnHNdNJmCpEigyWPPvLe2zLWCd7YL1HxaSmY1edRnfFmBYMe",
  "key41": "QAeG7iwVq2YwsmqCbCcKHGg25pPMGQWDcVriSwQRdg6DSsPsAmdKhpA6CwbXs92aSBNX7mDyVhS1878PpRxVfJR",
  "key42": "5n8nWYBbegtgHDzWxaYapWfzCuFN5SBPvii8vJtbDh9d8pModGJMhPN1EbAQCGfAeWeBGdQmu3S3Vs1XLcNU8B4c",
  "key43": "2jXgiBWebYfMFPT5GaK2gyU8MH2zbfPUjRrVqNaXGeWEAewbJGCnN4R2BFviXkKHnvtesq5V1yM7YGrmB6jdbSRi",
  "key44": "5z71GB8DQ9m3e3xzrYiCPZaJbK6JJKkN3CcVCFqAL7wWfekizAyzgQCdTjXM4eYACppuyrjwkFkkvFX98F3GtXvN",
  "key45": "5dq8D6eiN5m1YygC8bgbC2YCoabhdn9CYUFMV29R2LLuotNyoLRYpR1CzfJVudEU49XE4kyWRB32YHjttFaRpN9d",
  "key46": "4sqBqivoKZJvk1x1MnPudhtXwmc28s1VteHSwFrWLA68h8u4Ec41EkwtNe1XpsmZTnrQYAnPDNZBfyLBaKFjrBrF",
  "key47": "2gzXP3FEmeEgQFYrHZTLwTR2VrdPcVGeT5THAGoa1NcFTQAFgAQvkmN7i7x6bXKQfZj4t4VYq3dqSwq5yZtKU2wF"
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

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
    "cnT2arU3izc8xAvgxyRSLG99pvXsaQkyo4Tx67PqEh8A3Srg22VCSg7qpxB23dvitdbSZXsxLBDkfe2wEsBrwnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F66WsUPhMaWRhYD6RF5DJamWBsz8rycbZPCu7fDHtkfnEYXEG9dCEA9pVUuGsy2vk8RLq8P7qpwxGwfPY2KiT4L",
  "key1": "2f9n7TzTL1B59yubz87BrSyKtpfxauYb5C2TR1QSbPxvqbt4LjhkhP4aqMzbH58hromX13XqGXGFsBdpAxvhBUbq",
  "key2": "4xvzn1tFRzuzY6EWqmm3mWu2pcB1m9WtS2qyZhoW3fLbEYC3mpvNZRiazofEmZjThnAywZ4GFLwS1FTU3s1pvjtm",
  "key3": "5wb8ttQ7cMuFtKzwZe5ftwiC51HtZzXxY3K7rwAJJmN1EVxG9JG9nK6mk8Z8GpuzEgDxrocPhFYsCcnxKGciPP4q",
  "key4": "46uY5mnRXcTwdCtEzCvQGZMvZD5o1VRXkRrvj7S7nFpkerL8PMwfnDwVSBBfos4J6mL6H2qKUrxxQxYDb9NZUWwZ",
  "key5": "5QD9umFC2JWXUZ3vpDo3T5vtKrEBZP4wreacwQfGfVLrN3avptN446JdgK5HuXbDvpuy6BZwajDgCXZn7nVNxLWY",
  "key6": "5j9T6eWbTTnuQt7UbgHWR7oJmhAeun2bgrD9yZfU6xMeu84Yt1VnYqZ2VLxwMgyAADVgVyaiTyqGHp7V9KYhjfV",
  "key7": "5Q58WKuC2omTzwABWnfJjMdMZJFnceAUJKoo5zBkqk8vFXAaDXsD4TRJ2GZqkAD8J5Dpo31cfPhHBu3RiwUDhXdT",
  "key8": "25VKU51BvLThW2kQbeTmab5AeBg4rLzK8rcsH6uFxZLq46yGKhKJAzheqRVTfDGk3LQCdvnPFZ3H13yGfiiwVnGR",
  "key9": "2sqpfP7Qa9vXypqGWhzbzbVktRxdADRbFa7G8PuH5JGsy2E4tNdRTQwrbRynXFAZean5wT1Y9GY9hSnerusSJyUJ",
  "key10": "3euCMAwqzqMiM6q9yUfgahMXxbAowuo7Z2BXGZ5sPU34H1APLNuHPgVoDPPdoHKL4uxwSbWaDZGexSBytZ2G3PjC",
  "key11": "41Ye5t2VVZxsStnW1jvJRftwyaVv5mH3iXNegsX5fDLKNCBTtBhZnAWDtRemmv57NiJREscpYKEkBFvab1cJ1MMy",
  "key12": "3eWAKDYjYHdhbniNHx7agt4UoWPvYJhP8yMdDf1WrvuYtxzBXASEcHpoVR3AcvZKQmSp2vviP8SdREpkJcTukSNP",
  "key13": "2YBqurJ2sr4hD3FFRpvK6jppQwAxwNjB5GpwPuPJ8hBa2GZcsPoHYnZi5njRHjFeSxsp9eWJ1GFr4p1qyFxfsZ91",
  "key14": "5Gc8Gma5Dbz6b9b1B8r16EEbmpdFwyhrYgReu5byUG1oaE6pu3sVxecmR5Q9WrcT5ybmLL3qQaGawxA6FNw4bPqD",
  "key15": "64QPD5eBVnG16MkLaV9rWgpjedD6AAVqmznJhkxQaNEhXDCRMDoHDY1cFwG19aKtxog5vpnTvHs2YLEY3KQehhH8",
  "key16": "2cfbP3W4MrDR2pyLdvRkVXWKwQvCeTdGf239tK3i7hRkAR4mgc9hHUupJcrro6DDXcotjQQ3kTXwJcYxZ4zqKh2T",
  "key17": "k6QNce7J7htosceKG95oD2nJKGkwHFLUuA73BoJcufmZmruWSwvJV72aubtYMjnhUCSChxrrWRrFiQjtBVn3D52",
  "key18": "5v9TWwdRd1YKiVJtA2pNepURQYzYYnAkJdRKe16Mty5CU9V5zeQCzXJ4X1VwoeemBLKkCyy9ezDgAnreQR4pycr7",
  "key19": "65HBTFU66Zr4ijHrFJ7XbEyH2zXcBwxxATpX33pZmVYWdi2pwRYY4H2Ws19jCD45d72advQjBJFaqsixnYQ36vYA",
  "key20": "5TZBj5PgpEiQ1Mi6RRUFNJyVPLTAWgaoUCBFUBFaSVUA5a3d7p2Ai9ck4C9gQDmHxq89zL7EQV3Get2Yxa87wbmW",
  "key21": "VqAQGDWZr5NQN4W6GQu1SRaC8EPomkq9pGTTJQWPa9hrkfSK4kLEmSMrJvY3CoYgZiePaPWF8bH4xv5nogaFmkV",
  "key22": "2c87K3whpVcekpSaK62GxVc1Nje5JGgyhAvZaYTPUJtpGfoqazhsksVXsTZLHKQc3PjE1NDtHPC3XzjKAPEkZ5nd",
  "key23": "4LH8abGdUnWutA8Be1igaBAyFBmR4EjjC5fVqpnCYapKcsc4RjdULvsU1JN5o1pSNrMjBKFT8qfd8uNwJDwVDyba",
  "key24": "AiSuErkxC6UEyVPhFZHqfvhxpLHrtg1AWvJ7nmDqjGgejLoG1Mez1hjgAzVUWE2NJqbc7E6kZsCapyAew1LGqtV",
  "key25": "4UKRb7sU1kTbmRgxWHM36fapQ8mboUdEELxpGQ2baTQa3V3aDV2SAD7sfPvmnkAuuThhSRb9MYoGtvH1SUTTrdAy",
  "key26": "4fyYorbxFCc1SDCsELHYye6KrpPNWEAyaDWFyMBXRdw6CF9qco1GuJy59HYPYi21MAQoYyfaRJHWvhxCKD8J8B5u",
  "key27": "58AnndDhyTuDF6YTRZeHJeug7tKhXdkq22j1p4e4882fV6bmLN6mydmPW5aRNzjBmKqGcbJWQCMa82TDkkBN8KkW",
  "key28": "2K62aMg47zt4hGVZ8MRy4C8f6PnvdmRewmWEx3JqFBaDW8MBz6KdmfH8dfsLxcdD5taLgBMHaAnHWoUNK34EbNXM",
  "key29": "2NafLHfjBj9cU5xiAAKMCHTdQ8wp1ZhWpUrSwp19BZXAdsDA5wi7ED4TqTW2XEmctjygSjAfyQC1RDWWNb3HBALT",
  "key30": "4q62tdNLn9s2nFcnVt9tYEgfEgCywZp2YUeDdQvgZe8RZLf69FchWPn9y7uuZvtH89KC6e3gX11bZiaLZKJWx3jF",
  "key31": "jhgpFKjugoFaUAFFC4M6ajsRW4vuutvDUbsUk4DnfGNtyNMvNrGsurEjtWjxVxtqqn4BHxsj3BdUYtcHjFbiAkR",
  "key32": "3Cz67WvcfhRKfSD4LTqzNJgN3MJWbQvR9veU7B3fykvLRfXibsNjiGZ2cawhKg3o6CA4CGAQ7Ztjc66HoRLHgoS9",
  "key33": "RWNpHvnYS7iGWv6XG3UGPmHS99FQj4pyAR78J2JYCiySkZaytJyAtEAPK5jELkpTFpb9mLBi3TcqygUvrHUvL9r",
  "key34": "4PC9KecqYwe8aNtZ8SqXkYaY2m4gDnkhwU7yr7WhxUC26YwGTxnbhZeSDKJFpYkYEGwD9zcXrdULpaYTCVcyQSuV",
  "key35": "cWovV26zktM3PkMh57UGdHuBjrvP45HmoqKuXSfe1ECuquYXp1mm1b7q4HjNXiHeBNxxqR4ktKrYKSVyVWfpdAR",
  "key36": "4j7NatM5CMuB6S4G2MTrewBtWKxhoH6G1RJfuzY5sanvJeiw6YfKQidLtRKSk8r2RS7Xm8QkhHmMgXYNMWvTSnXi",
  "key37": "5g4eeWKhcLALnrtpTVwBkZHHSKmNZpprh8SRBUHWrcLsmXzvfwvSXqeZ9M3JkLdDodoWuvXcxyJ2JjgJgd9yDCY1",
  "key38": "3iBCNY4EqYzDxhWg8SDB5YMJQZ4gXwkMj56Jz6LDcEmEAGug2DUqZycLcnoagWRmFCjyTfz3xFyFJ3shTmr5T9SG",
  "key39": "2NuRxkh7iUxxQ7fxmNg5RPvc4e57LAgrVkL4YwnDo22f7NwKrwxiehx1WQumUjWwBaTbRuAk7a6FWWpQmvaiYUbs",
  "key40": "3WheZuRjyjXTmbQwKxMZusKbqMo1MoPw8Xsy219tis3sCuuEgYsL7ekTUiobCrhA314K2J6h2NwYwTKKRy2DHdz6",
  "key41": "2bH7yvgZGjWtsRh3CNFTbhQpEDXNgx3mNS85zV82AhiD2StXeDedRnSMWLmXy5AET9gBbGF9TvMikA9eAbgHfxTz",
  "key42": "4FfYph2XBVHvPfWq27yYXB68QTkGPsH3TFSpF78QRzdmbi2PtTLyn29tG54yYHQbFL2X5xTSXZpNdG5dJg72hbJt",
  "key43": "5fv49XBnsGhv8FR6FaY5tjikbQKwCto1VxRxwZCeSopoMnQmcswwT7q96geAwzX7MML7EaReL1expMnK1zrBu2zc",
  "key44": "V4MVKx6RbYWkqHs2LWSV1gi8kjMmTuvKW8Ds8p9RmrbhuEzDkk8faZc6Qm1F5GCjHzwvCkjetTehsdvFh63hL5y",
  "key45": "2UGPbVBj84zdLtDanGmDsaVVwwL8evmLrqS55EMEnd2gQtZbrXhGFh4GiNooW8NMNie6s112P4aM8cLJx2cDfP82",
  "key46": "37wnxAaNdhFKv3HTqokub6x9zKwTFZ3vUv5JZKe9zcKyQ2GabB7BLidvhkjhxjGcvzxqDA8nBM6Lx8NtdumAtr36",
  "key47": "2GmR5ShEx1GK6dAMr2Z6E4t5o3sBx5guM3BjJrJM2nec1xSwrTR8v4RiLSHUaxjYWFkT3McE5z8NHuyJZZMCkYmr",
  "key48": "3biww5zjEGw6QCUi1WRXqWDVYnthEV6iL9Nza4zq85Jfv5HtW1u4YbRYtrn6BqzxWY645LWBoNNn1Mawu5pA3FJv",
  "key49": "KneGSS7jbiNcN78wc6sMTqRCfkpqkK2rn9RPc6KUC5Gpp3uSzJ4MydCDB54FHPUvLknFEZJV1TPcNtrCPo8WHWb"
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

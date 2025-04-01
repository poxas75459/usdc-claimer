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
    "3GQW3X3jpDKYsRtZ95sNR6ujtDdduzWBm9ycbkMtznVzqAqgKfvtiH5DamuziEVmAo2EbHsvJc8tUvwxjs1qkWRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLeYZax5ZU4Yw85AtRvriNEZyd7k8Td8eP9rvD5XSpZqgQ3pDFXY9oeyznjgwP4C8LHyYvFRbq6wgc6Rmsnx6or",
  "key1": "2enrsSAG9gdUFqzf5ytCYZsF2vaeCVXde1hMC1fFSVCnDcgTzoCzXhrLZceghuki85rtdfawDZjsA9esR1pPZHWA",
  "key2": "37UAHP4Q2pLxDDB2QZdiqyWLGicqqFAtFpThS8YceEGHRsyfv2ysEa7V8AbMAzusBDTHkqJPsbPxQoAynHvVPzU5",
  "key3": "3nNY75Gr6WgAGB55BTe9gTCG7NMZt23ArEHn7FroXhq9izrJdhKoxHxKMhysmzZPmPhW9d4TWhe7psw9jNtdBftf",
  "key4": "3n8dEjSWL4hZ1k3pSgXTfVzogGkiEU4aRz7LRZhYmLQ7ASBAFwHXneBeYzybdmoFteaAq2euxUiEmu4BMkXv3TYq",
  "key5": "XnV38uhEbrjPXgfAbwoe15oMreHKg2S3mwVtrLU4NGsrDfRjnaZdk9mKkWYu1Efi2gDMxsnecdSUdn6ND1XFTny",
  "key6": "4fSUb6YJ3dWoCQ2d3d2YSqBnL7wyVARGaYCce3jrhX4UiK76BKRCEkRKTpd6o78WpGcJDXqMzdm8px9HtZLYARKw",
  "key7": "63m9XRSc3iom4iEXTQ1L9XiokRSuro57KQ2EkJavF1ykj7HHSRR4Aprh7ugG5MVM1QaB2Ueq86PHxPxrHB8JkHsj",
  "key8": "28uUXVe5BAYYUkr2LMncrKiLY7ZyeFLiYNhcbDjqGfpg5KCapBLxpWabGiEhCpNezLCW8c3eXZxDgMfJAcyARADS",
  "key9": "3JHiyJDrdJWYJzQFRXqJqJLHy3Jz5vgtv8CDycs8E5Yy5tK1EhMwSFeZq8diy6ccV5x3JjUnC5bnb5nUS5ETSDKh",
  "key10": "4e3XdZCdB2PRhw5aVZRoBRnUC2wyCwYNwUsDykK8XWeeVydV9FmtQRWc94Yc7XGo86Rr8kC8tvxuNaDTCdmjyAAi",
  "key11": "4tSTKHfV27br8YmAhUGfKgG4xqNc6P3bins7nURW5nAnn2QAiBPDz9PNz3w4cGgbr5ZEzYQCa2konYFSYmoZUoAK",
  "key12": "5RKuRPcUxEHhc4xUGtUBsbuZjYCZjDzeeLaDzSETzHaQZorZ3M7z5UX6dTLEN29Nbwf5tsW3GR4pQ3cLnGZ3yvxC",
  "key13": "3n586vDAiDvs88KDCfYsHZbj4yR7bakoGMS7ecgXd8kf44s7AZWHfbaT1tDHGstaPwgbNLb5MsRRMAHEFzjH5qho",
  "key14": "N7YPVXibmyDU8nTvfWqXdoedjQgQ1Gtr9CSWYzU9vDxszKwtzXitbybeow5trtKuvytn5mhNNSNZ8ZaySAEnyNX",
  "key15": "4z9gwAhoXA1aVDtzT9LJdit5JcNsfNACyMQPPKpYd75pbup1zkLNd4NdFZdosGS79B6EZRws8Q4fEqMHgaSugPb2",
  "key16": "674jdBFuRcwB2tSsFP94yLVYj2jyhZut4nSdCJjHxNnoQeTYokQ1Za69QdR9FPZH5493fLt2CCH4Xz8kyotvrgkz",
  "key17": "3C3gfHwzVpfqN1C4pjFgHpkdRUjWqQst2o9Y3NWxkYH9ZgQ45AFfZf7N8SHzGpoxfzFvE2ovkXrQrSfbfaNTnEKR",
  "key18": "2FmPWWQsNwCo1trAMAxFJjukWRRB3bmbZmPZZ6MGNSxzZgRaup8a3WKzKv3M7yHhJnGUqLxT87gYqeEWBMwfGeDa",
  "key19": "2VsX6HHGqUdAT4QwVw6wj4BYNfJYvi7GbjYrQr7cubMZqwrXtryrx3J5EuPf6CZNiUqK5JzjXnEPx5HfPLp8stm8",
  "key20": "nsRamMSfG6NksfUfRmcDDz6fX1kuBjosDqSwF9tKX8d18KREiVK1FPQovftvYxXFUTuVCNFs4C39n9t7mvvPgEt",
  "key21": "57grXcgrgy6X8yTsATseoBZazQszsLFAciPXaokzocaRHKcFbtso6ZBYBvWpDTVg54AwaHCLvZNnJmfHBFgWNmUW",
  "key22": "3CzcqMdN5P8NTpZi97pML3C5PxXN3uXiD8JVTBZKqK1ATiQ3jbHMZg1pH94esiaAendiBB2Cxx7QEF7n9AQGHFof",
  "key23": "2gLqMpjDh8E2v44ucqcDtLNJQpGCxHY7n8CcGT9nu1xCDLcqbGZezDUYTcqN29eqmXJtEudaZRY5PinkL5KFihzQ",
  "key24": "VHForszHHauUqnBoqaQ17bCVNGspDTibxBxSeHUP1x5t4REnhF2yruwwmwDnmwNMzULr5T8E29HDz3WXyKmf4Lp",
  "key25": "2d2aJWfhvDGDDziJJ4NEkvEnRqu1cynJWdG4XobiHmLWAzS2cbTFqU2X6qmu4L74qxdgw3idqTuARhWAjaJ6yH2q",
  "key26": "4UYWuAuR2EofuvdjH3CYosKKnfsxtA1ALGyAnj2VZrEmie4WASQr4p8MygvdFZRJ2GaEpnzMxX4mem8BULCg3FJ5",
  "key27": "23Shugt86Z9SC3FU65ubxRSZiRUGK1Rc3ctR9hBFG68gd2UXV1uTJwykXPei4GL2rt1zxiYG8V7x83D82RvxT3VT",
  "key28": "4jmdtCnunPmZ1LLobLsJpV4sFevE7CSgHagUwZCvRHZNBVBbQRfYfoECXDS4JWvdmZrDosUhU3k9sPtDeCztoaZ9",
  "key29": "3CemDPikSSQApPC8mHaC2jSEC6aptwzftRouiamnGa2RUkQWifQs63CJeKdYbwkYuMDv54YadtkJsngrTNvqeqhm",
  "key30": "5nMY5dW5jTPpdtN4Bb3qVrqTQT1WVrhJ8pmrnWdyRaAzePanw9CKDfGm1JAVgWNpd2W8M9b1rUjXEejm9KvKgbKe",
  "key31": "2gN5FZwn9oU7XuW7Z8Ne116PVC7wYFqBFmRWPEZ3F2A6Mo8sSz6LfpxM4FTFqRDvcfg2MXoB7NES4SpXk9az1B69",
  "key32": "2jnjFqF8fBemGT6TFwivcYRpcxUaih6idGxQByibng1dfEhsMh6F5xsAr1mNKWuzstFoNSDqZkEaP8jNzNDV7qrH",
  "key33": "23JMjESiuCEvPd8TZZsG5iKByrzrE4FaK5mawSj1NqmbQAjoSfTSYhX6NDjmdFtYkhQ76w8ZnqhR7jnCfwDUq8Dg",
  "key34": "5Vpqb6Bg3u15v6NVPYL7PmQXAPLFTmNgeGeftoj2GrqyWF6fmmhSmfKknrecfkSFkHw3pWRsbyGvnTxnwnRso64o",
  "key35": "3VU95YhDRNsLuhGvPeeWmSFixzk4rvERpuUDJREchXKmq44BWdWXGHoJBRsUSYiJaqqqSg3BfmLsuJSbPcjKfME8",
  "key36": "3uKnVu8kzqmudF3cSs7ptyxJ16V6qKqu4uub71M5KiQg8iEsFeqgMV2841WH9Jyq2wW1qhALLrbiotpow1rP7dE7",
  "key37": "5jSFmrLbvkk8DnEFGnguTBTG94hxxoitNNYptHHi8NrzXSh9k3o78UreC86uV8JETeeifELPNPHVaAutsVtKW4Uu",
  "key38": "5kqjBpqSQgsGpB8eQFY1oqvqLDPnFnWVFuG91pLZ7swnTcagsVoVWnfGowwnY2cJhe8r7UsnLjeznD51kTtPqMKA",
  "key39": "5uuAnAG3M6xiQwRYSFeWqmw7thGxMNsYgQ8YwTN99WKmAniUFT67seEdtmqR9csBq5HtBgC36ede67isB1nAKPoU",
  "key40": "pwmPV1Vip5EpcgTNhyjJnjotPt7mAi5aUzc8LgYgkREdf5as3GwoUyDjJe9eWHRACeEw2XurEH5ru4a22eNytzh",
  "key41": "3k5PZs1cEs8s1zPaZDDHFn2ineE5gdLGCyBw7gyGYQESvozA5G4fL3ruQKbvDw35aXnzNRwi6DyP37EHAkQZnHiD",
  "key42": "z1R1JM6TdNonHau79zGCCCK3wS3kipp3i8Wfn971ateM6tS7HxwyKdC8XrviyYyaJ48ma1YiwjiBFGgAtNa5Akn",
  "key43": "3tc2gn7LTtZF24ak4qU8z3vJKTajEKdGQP4yzgXoNU7eyRjcjVs62xv3qPsFCsp2FzmUMM4816rnPAWEqWYTjXvj",
  "key44": "5mpxYNe7rLaThhyHJD5roTy8W43mo1aaFGc7LaFfHkdRDF5xR4bMgJvMno4Rzh1evkxPrf7gSsrns2Qh6f64DN6d",
  "key45": "5KptofUv5zRH35vCyrHMCwQUr2sFGywdrAFb2KxmKzG4gRPx5R17WdaXzFtTQVvqdgG7oDPVpAiwuLsv1hgUW1dv",
  "key46": "2SxfRhfvrg32ChBeo7e4dnvEm63D6gEgtKgz43nQg48WuEi5YtH29Gq6pNBSZZZWD44v5KbB8YjpGRQeB4AoWcUM",
  "key47": "2fX8wm2zKpHn9Jjih4NfFYQo66CW4YnVVnNovQuvcmaHECHyqRv1DqedUT2hva75Ns2JCmcnCnRYahgrBu7fj6Yg",
  "key48": "WDPXCeJ6qaWg5NFCe18guM5ymGH9J2Fmk9VHKgkJEsWguQUcQ7PiHYJqpAfVWuDcFHFpDj1kJLJxdbdbVtK6erj",
  "key49": "2WCwdxbHd71tVpJp34perFG1LpiwRTrEkDtDGKzadV2s2cUXSYhKBiQpzJysYGB7SmQ5ZqcMFyECu4r9t1cAiNFs"
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

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
    "31x6Pz2tV8RPtRuoF5w3Qew1S5ZBFP8zCK5tXZfvgtBpddhAoHADuBknDLrqrJrtNH37tyCFsJJFpNqqrxd7NrdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kte4mt8iBKALtaHxtU7XNrqW9S1H2SEcfbsab29s4B5y2hK9s52LYsBLdwG7Rq8NdAMBSZCJjGVu3Wz2mLxHwQv",
  "key1": "2dppfy2mw2iF9X5rdHfAuS8SWK7WoBYGjk2KsXdKBhhgxbxawiqiZpEf49B457NyBKVXDBCr2TWwviNV5x4VPLyt",
  "key2": "32vNvkHrZNsF5UBuYW5kxq9q8UeQR5H1baCWTVJgD1a3rtA3N9bKVgNhDHcfYoT6vVwMfJjQfttpJCG6yq5kiKKn",
  "key3": "6765g5j6E1fSBtXmB7BdT3hwypxVEcVZf6JPvJxTQrpUiiHwknaf1DyfEfjicWEV474WZXBbexQdGV9fg8dwH9XN",
  "key4": "4sFzEMi9xTPaZ7DscgvAmB8QjnZMv2nEA5ohVvpWJpaMfoeDCzMe9MjcBjp2hD4KznCKinkZTqdNsUr5i823o7tA",
  "key5": "2bMPhHo1h78dap9i1rccUfhsLNekkDtUMzqn6CCxDuJP8cTpBP9wxyQeeXgLBtZqaB77nuL2QMLZaK9n8RtnGp2a",
  "key6": "3gQSLfDnFgyzRECXUbNjxhmz7rNReDGXSAgfcrYALAZXBDTat6rzDPgUbmhzwCjE3qCrVayHzZFwXxC9KCUk95mz",
  "key7": "4oBspMtmDXaGGNYsRkgsjTMMUWDwHmiFNDKjDeqCYyqXAqdk8tfegHNscpgMnr35NRXuppokAPQ1t2v17MNb6WrZ",
  "key8": "2bm5AkmxV9d5kXDz1aGrzoY5NyLC9rxwVvT7jsekLzK7PygVoF4JmEJFDkxt3HnPYtnrxGpuN86qPkQveT9RCZGY",
  "key9": "4DR8PK2u6bjPi4oTsKT3NKR2Jux3nVKo16Dk5c2DVMVrp2AMAFzN2JcbFjbCmC2m1he9mhBb9jPE4V4G9CHLgUrm",
  "key10": "4F2B2R2FtqTjm5grXcwTLDUzwNhTDN851KXAKtAgfHLVwFvPMSU5SuRataJqLF3vHa32YrhymVD6X74YfBspeRTn",
  "key11": "2JdfY4eUc9FDp2foisNfvkCtYxJUU57uXJgz6UkJNJacHNBRdnzNJ2ccSBtNoWtadKnzUQbUtSMGvUc9kxpgh78V",
  "key12": "5WP43FHnjUT2o4BHsqypHFwJSuGSYYqphpDfnnjKfXhD6SEL5PuTSzSWjeWmDH6t5c3hi6GoPoLVqY1qkLtGYMiW",
  "key13": "2uw7xWm2ooyorr8rSQ9P9UcxFSDpiQJ7MnQeqKHgeuUuBMGsgXTwFK6YzspnzfUiURQVHbygunyktvdNXx7hdVkp",
  "key14": "4MhiddJypEfEZiNDSsSgx1NCNCFggP7Cqgn4hSbj6E5QuxMSRU1sxcze9chssbLp4sS1DrnkEoj6othiKLV75jFh",
  "key15": "29xYg2fas48EfX3fFpwVdfcYFBXeDqd2K6tQnWtSsCK1oQaA6WAx5hWeWCkgAGb4ALTTfCoX6tcuATM75Uwxjgqp",
  "key16": "5LpXwAwCUoFNzdc1Y9PmSzPB5CGkAzG2TaUu5DKg6kVfYi9yQj4mMy79KwdncbdJhXESWQGKbHwRvgjvhwmTvD78",
  "key17": "5Zmj3Qs7Z9SMWZ21qRaWLPJXM1XzUXvdoV2qTZH8D3SRh8jsdEQon4GhK5mpzSraEz5Qpexk2es8B3mtpW8tzrfP",
  "key18": "4dTGPodzaoxYBomjyREKAvzYrrqMkpwSFKdxhAJnb16q4nFBkNkjA3fxVSCCy3dMpqNzn8XC3UkLYUh14mBfkKQZ",
  "key19": "TRrUPdNmWUqZiSodL2bRAUJsKjftVXZr6yuU1pFRS3trtrCQcwY4SbhV2WDsVngTeGsYQYHuu1Q4xsUt7R1SdNG",
  "key20": "3CCGzzEhoakdANqVJ6QL1RqBihjxRHPfYd8yerzWw3RRAq7YkW9mwKSsjfT2MWqhRP2CNV7uZxFDh2FbGjCYwH9h",
  "key21": "4uUyBihGU7ezPU1V1EKGmpZE67CEJjscXb4dWG1Yio4znfyEBxj9JfhyTyZARaQ6rMthrNfq2Nf2ybY5qfwfwJvU",
  "key22": "37EUmXGxPs581ch3zEs3u8KBTSYgceDUaXDLMomjmczuh4ejYqbWpnZS2hGMkdM1WXta6YeBLgo5nczKZLWNd4sh",
  "key23": "3tzNzc1xuqUSjNpXkGrUpz3aH8a7Q1sBTXS9wB2K6BVSLNczWbXUaZEbpQ68zharUYkuVpX9kyDwPfZMwY14KyBo",
  "key24": "4NXN7yiV5kJ3EmTwrGeyWRptfWp3bw2eq59dguSMsErKPwr6ZiTutqY8NHKFXPKZtcgxKSv6mSCYpLcKSHJjtTQu",
  "key25": "4c5DJJkPoPC1ENKvt5bA4Fm5zWuERPHVb1LGyPpHy7EyqkyzkzaRCd4Zmy3urWRZz9tLE6QU5AouLE88Ne5iY4Zs",
  "key26": "8zLYwN1pxsfvrvuxQYpaudYZyR5JT4foyTjzLAkkvZPaUmcCTKhcbEBTua48cxn5vBjeFFw7G9yQ3UBkd832soT",
  "key27": "3kGsqvB2Z2nTe4rR2siEUHujpssA2THqPD6t5MvPJ4nhX2VtgAWjHQsXydA2asTWwp4cBycNTg8FufYkmRhWqnLS",
  "key28": "2NQeMzvjttwQwcEBSoeQuyaMKeBfckEASGE3yVHLDkana1aBvV1RSEdgNhYcG5arVHhFD9cNFugFVFaTf1PMSZ7b",
  "key29": "46dthoqBtYzBhAdQ4HvRyLG23xeHSBWrMfcXY6gc1vAAaeYPMg6Uh6NnC9aCUfq3YPHCoHk9JYNdSdn4SGzUTPse",
  "key30": "4aRRMpP2q8SHkbUEyYQ37jq6AkCx37sh8FmfrFaJf5JRzsQPUSf1d6btcTfTnWLb8g4hMYkqZHc2rBg9VUSEwLdS",
  "key31": "5Wj2tMJfyxmd5aXFcm7o7B7TFXbwTGrJbLQGXPiN5paPHoZhFHWaPLrsDvjoGCDECATsn1YuVkwgdEqE9AYssFe3",
  "key32": "3H5UCd3c8p4nDPsK5iwzXW2iieK5TYKJ6PeHRPQsNoaT15pU7i85FvSTBjCNTZaCVnJ9M9hn1A4NQayNYkJpNwDf",
  "key33": "4CkAmAxPejkRK7xJnToFk8TP6FkaftunzKdWSy2tyZubTvEG1spA9td9YJkyt5aJRFKkvY9EtY6zac2cnmGgiKZg",
  "key34": "5FNcfpC5MLBicb7u6PJfaZMsWk4xEsP6hX5HsqQjm8qhTYtx23iLgjRYXTfXtNahky9yJiyeZSXhum6qb7Rd5GQ1",
  "key35": "TD5nBoh5KtHPaTM47mWfJZxvEiBsikVUGeh5Qvb6XgaveN7TXCEx18Hc73MZAUUbt1VvdSp98iXSPbw9yMYuCgw",
  "key36": "58Uipihc5H4vTAniR4Ppe3mySwAEvzqA1sWgYEvrPeoTt2FuXo4RcXzqL1GuBwKekTGrzj3t1MrjWGBXkjiSHttt",
  "key37": "363jbiqg1btr4jm3wb7ZiLFEpzRL3NYbkBfhiTKMn4GtxdGoVbU4c3ahT75y9CV2Pw6YxE2MJpiNUg3CCRZYR5nv",
  "key38": "2RVZU6DN2s18pGkRt63fKo1DMCjZQtrX2UsdX8uEJX7K2sX3gbSuRKnPF7tkSzvWDXBMtMCZJv6pofVmkQwKL6FL",
  "key39": "4pvYn9u7q7zLcqdeibUdpkQxrySUTeU23Tw2ehWHVrd4SnTqfe2tssWwZxorP66cJZSXj8Cadn3B8RpY29emgcHu",
  "key40": "3tUG2GwhDazB48hMKpadFxxQA1wxL5ndsaZvzUCGxPCdwwzjwnkSUUmzEcfquLXsLnENSTB4TarDxZ11LQEwL7oc",
  "key41": "58k71guXayhPvamphXLCjZFGzePy8WpyeCsDzvgBqBMXgqQeXgF6NLses4P8FnDaLQLMUjpPs5ReGVuSeUFU3R6P",
  "key42": "3rPFy9LncowVwGKJdrenCVNj1MiWcYomA1vNsRkPijUcVU4LtbjA2CjmiRt6VpgTYTQQwe3TzoQyR7qNN9vkdKGv",
  "key43": "39cooY3fh1xxyeF8i4uPXoAtbkbHmxVS7seijNMC63AMEzL7gCrD35AbG9mZGRvpo8r6LUCbjBJNbAofCo27PXYM",
  "key44": "25kSXNWrcnQPC5og5XvJ9q5GMNha5TFM6aVYtXfGEeYpFmfkPv4C3UVEfErfCTUJde46p3gia948UYN5cdQqorTo",
  "key45": "4AftHYLjiP8DRfAfk7uubpUNzhyrHxhDiTU1gDp7n975JiEKahWMMLPK8EXA64K8k7efGHBDRHi3GG6DtLYERjd",
  "key46": "d6D1oUoEeeZU6HcrfoCzK1C9Rt6U7ZChMfeg8qFJpKBEcoxCw2gpvkukxTr3FYscz2ou4bXx7f4kys9KeuCp7V2",
  "key47": "2MUKvhotX9MLkQCuYv7vVbV5cqBA5YtpPXLvqvsLF13e2VTgKormL8MKKZPJFpUmYQ1Q9isM8G6HMepYD8hYYLgW"
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

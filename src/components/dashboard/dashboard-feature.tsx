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
    "4kxijYTE1J1L4bioBnZZBTAqUwwzdFa9DjT2DsVNoMzC6G3waYsg1xmgCtVeH77NeLSP1bqcdoMVGsTTwfzSzxhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEGbMEczbA5LzEfF9G7arkdKVoi5xAay8eApKnzx3euTMeqyKvkPWKjPzJZf2GfbW4KynYp1v8sjFN6Uyjuf8Hg",
  "key1": "LRguWyBA6U15BGd7ejwVpiqRJkmhDTinegzR3yNdvP2vqNLYjQmNgEbEkSsWKXT5Zi9b4nieyPgBV7uTpHpH1J1",
  "key2": "5LzCbHZoZ8r2KYGNCLQdKW8fQCu5mGGw5mEGtpTAQNrqebmxgDgtXgMJ9G34tQ5MqqWiPRg7HqGpQDc924JmQp4J",
  "key3": "4aMa5nUvRWo7eixBS2B1rJFtHnqzs2hBRbihkTPw3jLdbSNFeRfiWx5ajLPbhv3RwGaEsYasyn1sUp3RuQEmrC3C",
  "key4": "3XZ8oHwXSE8vNxtgZJx8eHbtYw7o5yEtkhdwaUap6mPSErswXcDnz4yNYEcFsNqnTM2G8keBrdWnv3J7jpf59MLt",
  "key5": "3xXTRED5LTWJFCwkBLsWkjwqKf5yhof4Q2xsHFHKV6cWHt6YmZ1VuKgxxCutsj8p7gQpvaQMeJXnF1DFg2adecaP",
  "key6": "5sgx4tfYejD8NAQQnbJXqEZKEEo3aEZzgjd5jKF3Ak5L9wA44HZ4kTFozhCBCj6uSrDzUkqXjciAjxNEpW4EQmDF",
  "key7": "45yyHMFRQv24KBxx6w28TJFsb7gE3ANfSA9iwKRbSXz9c9bxLnqj7hdNsEgKMNm6s34G5SETAqJYTTkaqSmKCDyu",
  "key8": "5sB6mbAwbyhZ9VFjzQAynzB7bmZVZ3UxQaVtboidjegx9pnW5kw8M6TuEkiaAZgseh2uZki1Xje7QWLiGwC866Ec",
  "key9": "29dUSf5PAW3TznEPnqd6ifrPeQoe6gMEhzKUACSTjT1x7a3zR5UzQJCzkCgDnPjgZzbFMndfo6336So28MwKHJWx",
  "key10": "WT5dsfTw9PJbiu5mpd8B65oBD2USWUQNHVrPe9Ef16PnGrYR7L91FWvXWt5HtfHdJGbr4RUsxCUhGcCptB5wwxv",
  "key11": "4Sqv1XWahr9JiySJsEivjyDLqLwjoGFM8PbuTwqZS9bnHoXbKkvrFLaDsjbgqccoWWYhuSVEavF9fDW7f8r1hGRv",
  "key12": "7XxPiqYDYyggRxt6JgZbfaEQcz6dY1E9GcitYNBB3x2hFCPbAwxobx5CRkg1gCZJQL2mGSsXaSSMdLbsEEj6yfi",
  "key13": "4v6EPrM9tJaEMdGXBvbBfngCxzMoppUfRbq3knUd98ozz7dZXRcWs2KyYcUFDWa8hUyPuorw9Fn7oCUExZBj4xL1",
  "key14": "3xfK7VnG1Cac2CNKfGGEX22oUgqaXKY53SGmUXyfBnGhZ6y9VwDARWJbvDnWGor13CXC1Xr6iKFc3VeRSReCUKLi",
  "key15": "5Ef31pUsoVRuYZgNqWLg9sTFyQaFX5bEjmkMBq6aQEKcWwFJJyPZ9BEtRM5kcQQwCuqGXwwkFExJDb5phZhRABnx",
  "key16": "2Ai48HMnqpXnoS3cDGkzKZnDfGA8kZ7UiJZe8MrC3XTeWTTk64xqbWeJ1RD12BXkxeauqEZEbDhqm18ZqUCdLR5A",
  "key17": "3icEJBfQTZEtqDQ3a4hz4WebF3dLd5MWaRw5rkCKisNLvnppGS3HZ4agmLDwYU62fxse5hkv8xjdJmd74E4XhSig",
  "key18": "45jeyJJpudj4KS1c3qiYPZ2ZQxipJKsg6vxnLnip9i63FrRrxn87P3QXEJVJ5icyoJooqXRX6m8mHfJoj9815JK1",
  "key19": "XEhG5HgVFgXyaAJpUhidiTSjuY8a8vrR2eRaTZq71bSbJ3mVZkpDzGr3nTZBJcbYLiwNV55R7BqKtzWBPK77emv",
  "key20": "2fZwdrZmeRyRX4t3dN5KVwSh3eTxNPMKFhtJdjA3vXBbQgHkzpyQw2QNNmiCJewRnxbHX7PK4hh6jq8Bm5Ap44Eh",
  "key21": "e7fYXjQzca1p69uERaZbp1qLiLyFB5owDDLtm5ABj6yFepmsrqdSVEn7xaQp7UwgVdLuYVAidvZuKiCPAwBBaEF",
  "key22": "23BY4hSXxV1feNDWSvxwUt2CyT3HpBwGKg1JQe6P89K1fzUiQYBz1e5tjsEYqJHHjG13W1dFPtdH3ZJvfAKLGM3W",
  "key23": "3C7fCY3PH19KpmEDd6U5fAaMkW6HeFTAkJT74Agsus4s2kCdrAozM74A4a9QJyzUp1TRn5dWNCd2A5JAjXskZNGb",
  "key24": "3KDD8LnMygfAK8MGHbnJRM8yeVGvV8joTvT5yisuoALiRgWbNEjf6eqRPSLFeWzpExgZfBjtyDLW2MPtdgbh64uE",
  "key25": "5t4PvdNbPaPh3oN1gaHMXpb8P7LHtiUhH27xSdmcN3Pm4QMKMWq4NnLRU3x1pcG1ctps3M7AtPcjBxWhaoo3wtAY",
  "key26": "31b16tqWyBLmU3WA3GLW534y5kPZmmZX5QFx4QiToZSMGJJqZ29F4hGPWAsCZ4MSZ2NTZKG17QKqUHXWKPP6bdMd",
  "key27": "3UkJ4VFmrnErmG3igsQdtg4gDkhejBUsnAZPAQ3hwUnS6p2qBe49X5pjFJyKmmWoDCfnimQpScu523RXxiLvSHUj",
  "key28": "H2b49fZKBEjzcXq21vrFNtJstHjVkeEywepHUYGsf3iQtfqteLyxAFv3ZbSPStFQXQj37e6HJLZVSEPmQ79rVpj",
  "key29": "2DtsqvxPdGiZDVaHtgdLFF3LgsaGWBGz8rDESddQaDmB289JFg53FgkypxuP4DxbVQtkLmLdCqXepcg1cWEHSbCu",
  "key30": "42WLE6zuSZX2YJz9cRmwHkshzeN9RVL716MLdrLGbBv5GxrznBc3AJHxqQ4aJ6AXpxBCy9hNDv3MgbvxuXSTCSZS",
  "key31": "3nKgiQeBfQVpuRyY7YyvuhFMxSMuDeKXBht4tuTzbZcvS4GGb5NkMddfL179pfazw9yPyzNMo8zAwmD5sr9o7Kox",
  "key32": "5MWQa8dQJSrP2aHhCWxiEurbGsjVyHthqH7TnfEG9pzJ5qpSkkv17gWNYcNW1wcr1PNXag6TGoFPhgrVgLYfjLyB",
  "key33": "21DK4hhviPGRxkKfMPbJca4k3FTgdx3JHaugmqKovJ8LPxsjQRgK7gQhgfG5Amo54pYZ5z1Yy3P5XEzDWZBTMkB3",
  "key34": "41JDLxfo8NTdRCFLMpxyB4spQNcbXEZWYempfRha6wGL7c8vgLXzqvg2ZmDbP45A5q4m329WiKA7FvW4LjhYjaT2",
  "key35": "5GnoAEbEqLgQejjuWkMDXqUab8e7ZdvvKm1gzxh9vFjkhi5TNBnPdrQBVQ8KzTCZBRREwwEus5ARUt5LAWucBaAo",
  "key36": "cr5Kt1Z2bKmh4q9Mqcf6aYnrgtJvV59aXVqDqRMXgN5ccUi3fPCQ21BYink12sJWDbsdzSgNvid6j9aE9GsGtDo",
  "key37": "4DaCXCSFPLpFKwtNgebYGkRsbxxVmTybTDfgZGuomm2u5bmSN6NSGB7qzobQ3PzD3aNUTgTtboigJmgu22xjUQ1g",
  "key38": "soZtuucTqWnHh2qeRYCdjk5E5xCjffK8qQFUsnWuFLxGnuAu9dkJA4BcKpFsaemkir8qQdUBePScig4bztRnxVh",
  "key39": "4MWfugpZjfdmwoUnnTiY5jyHfwaisUiXWVbskhDsMoxzXd4j9yyANrg8agsL3FntDnQ6oMcfeAGZKHXiiuhmCrqM",
  "key40": "27WTQx44qaHbHJuBNSaXS6iRgg3ZMHLdnNtcxDynCnRoVaZBwcBPKp9bMArg8EwteMNL6HY2GkmRx9DHvAP5Smib",
  "key41": "5rK8mPemDfmX5YHDsE3ezNKFeYYdezjzT6Tj3pT1ygpx3dh16kfSf1HApDhZBtpUGmT398s1NkT3VC37nhavq8Uy",
  "key42": "hrBYdcbBrVFW3AZwRoqZgTChLUTUxbPDjgsEphTyYbf5uLbcPn7RtaACZDu2ujek6Xx6LcNDeLWsJTWwuCEfjhV",
  "key43": "3Vj1MTCoeKYjbPbQz1WjZQgiecQfPGBcRnMMmRYRwT5CVmHwHw2hchKJg57gJg5qLkubtLisVXvyx3QpCk2zg9L1",
  "key44": "4zetwnzpG3QrUKi9mYDQYeVEbdKNsrNVD2C66Q5a1HMB2VhN1sYad2eZF5yGgzspSzQcth2CDyewYwwMG2fDbDeo",
  "key45": "66AmQBSwfYn5142AWcvViWxCdPrezBoEgbs9mifm3goayPbBfSdg5Dx3uWnvqoLwTohMKfAwz4cfhozWRi4zpc4H",
  "key46": "4rpDscVcBE41ZE3UicwQJCQVEiQg22N2sL5HLFSD6ZKkfwxUjmUqa6ty9gLwWDZSFAvDvjmTiEYk6SavyEUoiheR",
  "key47": "2iQGY1FveF93efU8owjkCq5YwscrHjc2x7KqKzvsgywEVCxVTuYFZ4xbQz3zk8eZyghFshq2itjbFUb3kPWveBrz",
  "key48": "4xoB6nun7LQU6jvE2GzNfokR45bqxkzDsCDpZQUzRnmoLbZLqFGRQLyr6SNcPCtJKCF65prehcxcNw5PWk3CA8wG"
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

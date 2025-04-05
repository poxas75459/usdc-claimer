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
    "iaQK3pP5zteywFCRteaFVUyzyiR8jq2D5f33jnRBuEgmDCKhz8jT1G5ozH5ba8vXGGwCcvJwNuRP66VP5joKvaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5psBJPMBv7QsCj7k4G6JJUPz8XFTDLsxyVri7KckMS4QCWdYtUaFGuJwiDmiAdY6KzWGW6t48y1n8ScFvUT3uLkE",
  "key1": "2p8MAPn93rzJRAakuCwZfCKNCXHMGWetE3TWCL5BbuUrpYVF9CuruiqbcEzbsrqUkTJNcsnDNMwcKvof5WaGDhNQ",
  "key2": "5bcz7XbZSEJTHt7MUCaCj78q4jW9BYWZBtFUogyHay3BfHpwDPWHWvwxGWH1DWR41mDDeY2ym9ucA51F3Eijopdg",
  "key3": "3xWzWC1at2jvCmK8puMGbf8F2TLNntGEZTxiH8PuzcYJF45CcEBa2YvdExtUfDrYTiyBUoaoHHGNaJFSrh7g4BQ5",
  "key4": "54H2pNVwemhP8Ab99ops2s9uFuXRApbT62cacANNPp1AX1c15hzQGLq72sKnYhqDZCXzZm2B3iXW24ohf9XpSAwX",
  "key5": "jyJLFKMxMt8DcAsER2vXtyufuChhVpqT5AJeJskECcnLNrPS9pLq3XGcdGPtyX6feCmyymWMUVrBBc4CM5jYkYx",
  "key6": "3FfVjHGwdyh7wSXJvuFms44o29P1XyZXmauzZkd4aRhsjgbuoivaeN45rWnjVNFrgRB9CxhGNKykgyfwNaDBEYjF",
  "key7": "5pgbbW6A6D4dwjgb6e5VXrPkfP6y6hSrhr2aKezUthSJz2rxKDZ2LrG53UZampheXmeJ1rZXNMzZqULmkZJvFrUW",
  "key8": "2c2TT1PAxy6HMxr9fzjwiETB2oLbSpUAqsGVoD58sqVC93QauvT73T27zh4QHRSw6A2d6k2MLVQ3n2zrge5Qy6Du",
  "key9": "5gmQ4PsAeFLST9m8QETwxthT4tn6jBAaURYZNRei4yuufA518fvV9YWsD7J4jsj41wxJNGxrbYUJeiBdu2k7eiTV",
  "key10": "29ZcPtr4oUamDnZuaYq4vmjHpjRQFTvder6SHxtR3JeA4iGSHcZU37jDC29cDFM9oHBEgdTjuRqNdf7vA6WVbP15",
  "key11": "9fC9p5WVLfnczdZHjUWWPq6rrDtkh6raNQMZkzF8NqyfcU86AtF2nt6mAMKyf6qpTUx16wpRjaPynLsVqj41CTZ",
  "key12": "28hBXWyYrfKavXXd4DAdkNP8yDEDvMkFpihJrpgp42GjGGENrBBbAKo8Ux64fCSqYiwsactSZQBFnesHEVj5tJhd",
  "key13": "3yoHz5nSXAEDSdjE2ahci5v36J8qG2Fd7rv2epyUPMa1TriRPKAXsqXZcCQUBip5wzGVZSMHsy663AdqBPft1LuC",
  "key14": "4xz3GF2sjrCJbaFMJzyWDt2UbGPy8vFTLuXbErUxy6ueon55ht6pBFxzUHv63b9PLJnpGkjTrr5S3fiK2obLSXfb",
  "key15": "62FYmioFgznf4rvDWpm6yqMS5qpUUSh23TXFzeBpcKEuFRMpFGrc8CHXHURzkV3uhub4xThArUzv7mUQody9gd4b",
  "key16": "4NkSWdPuxr6djRnZtR15Sj8wdvDNRNr9t8raZj4sWgZa2d7LaEBM3tnZd3oaeVW77RHU8AavYJJ65eNEUj8VvUKi",
  "key17": "6UQhff2TLFGM8KQTKNPN8e9Lzt4hmR3JEWrz43gAzsrZCCWVc5QCNDmRYUQVbwnFDNuw83Gbu7U7CsGLtKbr76Y",
  "key18": "5vvguSFe1R2umXKY2vbaBfoE5futAiDZLwoPZa3MczgdeDac26PT5xtYTWQ4myP5AyUY7Gptvb9jF74WG4KYLiC4",
  "key19": "2mHUvWZ853YNXQWQoGW41pp6WBLwaWccxeqTe3KyMRDyzabzBoEZAKPwFbJWNeH9JyhBsHYxw3z1yJ4nJ7RbEeE4",
  "key20": "5QQj8LVn7QhDDzqNzFyiSiYRUHwrb5ndq1uh5dEJzXX7UG1hzpq4XrnZSvpk7XgEL6zhhc8bh4QVgw4EHGAoBQLW",
  "key21": "5egM4CTzGsRmosDCcgfgAMqqHPC3qsmtXN9mG3GGhtdcfozhaWu9wFmrXZURFSH82FHmRhNEAGhhWvvL8gWbaVmE",
  "key22": "5nKUKCn4FUUt4kWirUt8JGK346zeQToU4s9bFm6Q8HTUutrCKWbRDixpVA5SSw5heG27AzacbNyZkD2iizLg8T8q",
  "key23": "63W9XaGjD6rKNznZoLHAoMdD8QYqvyZbJcejH2ZqEYDc2srg1LqERYDeutRB7nxG8bNnmY1zZZzB96rDfDCqoJUW",
  "key24": "2cMJ3BYPHKD6Vuvw5N1WM7Qur6M85y6PhuM92PiQEti6wDEF97pLWGnMwdt5WLraB3KWTmu7dLwj5rYLetHAo8i9",
  "key25": "5uS3n6pDrccw8qHPEG83MesjRJtR99smqms1QS1A2pqXVRf7GhVFjd8i93qkcsy6DUTzt1Zf5SKX1H7P92Vni8B5",
  "key26": "3FnPPT6JSfwtfUk794jKfuHFgXzRDPT5n3UbyEjJoWurrnHLYeAtFhppvxuVGBoa3hAynnZRPjuVmrWg7aZnYqWD",
  "key27": "2Hy8xUqefa6t1DFSogyT1Ycp1RQjuszzusR3i6ACFL2oHnKAMppQrVqD68MBhg8bs8ShA9UWKHfRVJ3QUaEM7MDe",
  "key28": "3xnftLSm8qA6KZbMiWTgT6dQcSaADMATsRyaycFYiJhPagbPAr6DqEnNRzLLSHm7MqrWCHaNxXeYcKSfg9apCyHR",
  "key29": "tZhsG1wEqM7gtGBzRJWna73wkZ29tXhQspBWsH1LAfS85nKzrVyCkoL34SFxtkpUwd98vRxj8KwjsEtnvYrL6fm",
  "key30": "2c8wFrzfJppnCXumGDoHgAGvqzyxAMQ756WZW7zrRpLTxHKAh17aurodcxhXvoDJtUkutdPmBXdXcq5ePjcToNtK",
  "key31": "4zoQ1sbfDqF8mzaw1WaNMfHcmgdLnNF6pjTuZhPLXnTkDV6xfSC6xi5nDXaYSbxxba6B1qBey7tpQm1PN6HCQJma",
  "key32": "2chwoKURfpC1nSeg7ctig2yebZPQ5xSJLhsMB37TEysnyVKw48mxQvgYMsVvjdjiiocXRXaDYiwNNwCeWt5FwoVG",
  "key33": "42WHTALoj5TgSo2hhh8CtWyuNEUkFGamAMGF8BazKZAdLK8sFpEzpGG3H2oPUn3KfTtsrrj5AwB5nqVTxuvM6W1t",
  "key34": "65qiAUSauMfgx7RJYwuaePHZaMVLzr6pFWbHh3K26zkbY5JAMne2bNQngCb1SbQf2UsJnhkVrZj4A7Ahx1bSQ3YD",
  "key35": "4NkZMv5WtvDSSvd9GzVd1CeRU1gxjKniLtb2mjmCxCkg3SGpCdejABqX74FtE6zg3iYP2SzrnVyc3p4641n7BRcA",
  "key36": "27Dp4NCHZbAFKusorhQsrNwYLa4NYhRDtAxdAgq3KYwv5SJn2M7UgVz8X5i4us4LYJB88a1o3ULW77mtfCPSaP5w",
  "key37": "59qsLZKG5GWy7vQJDshwfoV4oZJbXwncVno8yGXkRKa5H3jG4uBTs2EkFbgVF9wcGop5aBnUL6MiZZ6Asp5wvm48",
  "key38": "5vna2RZhg6Egmwvq9YajXnFY1G7ijLUQdAyHHPFGwnvWSmSyQrWqvcdwgd5CN9Uq18nUnTPPi4zNyWjRG5qQZBi",
  "key39": "3mddNWWR2mtWhS8MvozP2SiLi82pZsvQdYCCxW7HmHPAY393cCYY29zQ9XpCFzBKYG9CUyDeGsZpucFFPZxB3JMK",
  "key40": "5X7gd6nj1S34gTdHjgBWE2cL52ahYqWHso7RrP5UptuvH3svuWUQMRuubSWA4ht4jiXbEg8MVZvdGDBuFe3C4rTq",
  "key41": "wE4axkSSor4o62YbJCoqHkKyfEzX24dxsFWEcorC2zwP34hbx4Pc2WQramfgG411ncEUKrHfx7p9gJdFYWH3fiU",
  "key42": "3zQ8HqDbFDTHv2Ct2sr1jnScwPG85w4Z3zFZwwXVWnkKy1hyz7VoWsQiDzcTKDzfNMzzLU25Xfm2G1u3tfa5ZWtJ",
  "key43": "5VLJ6X8P4L3aWzR4mq94k8ruDxFcF7c3f4otUp4kr1utmhPLEY5hvTaPYpG4479pJ9hxpHfyMUTDkj1eTYAZpCNQ",
  "key44": "4wBWqF1FuzD5ktGiAwY91QfXnn73g2PVRRZC6VJjcrZzc4NgneePt7mGk6iqWtKvQZaMYFyTPVCyyNihpK3M41RF",
  "key45": "4GmSLc84bJwLJzqr25E5iDkyTWx81UU3MzVJYbcGWJVeJG7ZkUNGhbDyqCWFUVozk9Pqscbaq2mfu5KZQauvEoWr",
  "key46": "3XCnCF4J6yQQDQDcstfqwQK89ktfeDieXe2L9SS9Q5FCH3kJMkX7GwKVNtT74F9XtMt7HbBCbk1ZPKFbKeKUPG7Q",
  "key47": "2Edb9eDU2heQh3nC2NVarwbhsf7PN6m9BH6Zgjn4LrLqx9abScXooLGA4TN1BKtT3yLSL3m29G56maQ6kxL2iUNB"
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

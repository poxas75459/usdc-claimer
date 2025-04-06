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
    "MJwy1bqiB2DVj8BNhXQVg2cjxopWHUdDE1FDsu2CDk4TZMWkkCDzAew7FZqPSTLzngZ4Cro9H3UamKPKLGTCoZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t48wSiWcD8bgWuCG6UreUWpM9Q7QoPvvxKeydiTpiyZpLQF6WRiFx5JoE6qZLbBsiQ6B6nxkV2MNCnYCo3wBxoo",
  "key1": "4pcFPGdJ4N1fjRxuQ9qVM93RZzCvM9TsWQFn2dsevJsQ3tu9PpzQns8aSfLs87UnDmSyYNUynRs8pEuNowycutLz",
  "key2": "2KZzbUXLjnFaogzkZ2iiL1zJxWvhMJbzeSw6zx3nJ4Wk8Kr9wUidWEjQ1Kpeja9VXQS9UBNbvPkdj7YR3hMaK1XE",
  "key3": "3qBfp6cQ11HiEZJL51i5jutox6PgLmwtvCb1je2n91djRFnM3B5ejz7oujuCHpCTDTSy6LfKfdF6rV89SL33uixA",
  "key4": "3hrRKrcCY18sTL6rzB4ynfp6CTyTaV7SR1zWcaGK31V5Nwozn5E89rUYbDo2TBK5z9kfEUXkoxNZ2buiB8T83XYS",
  "key5": "2AYF53mr3MMdCQgtEXwuaDoubxPJasdG1M8hQVX6HuqqDiAw5ZvFELN4pDP7JqLyevLSEjQ12vZYmvRTTf7dbj83",
  "key6": "2Fd6zEBDJWcEnpHxbpqBiUA12e71duGH5qiQRkXYFxQg7Edup1e6mRV4pH8S16stHZVfjzyEPnd2qyxjKBZU8N9E",
  "key7": "4DqS2GxeQYTyWjEQXxnvxiKm3dBYYHYAVkBsqoNZhikGdu4gUpC2B4UvoYapHoKDF9LApUVri6WiuP5kMc8nfU9B",
  "key8": "rKUka8sjaPMJm7gm711KFT9DrF2L65HEgnWbgh22sVzeDVHBNMqAZfXcYiECRGw1eLSxpxAVsqGjxBtC2at6uJ6",
  "key9": "28UUeWhAwRe9AS1wYrhCAMpoMHEgpZVoiF2eGgQY7bCnWom8QPLTmxKegAGFqUr5JVrZAs95uxwhFeuZqg3G5onE",
  "key10": "33hiBCzuNr4sjHYCD9HhwoE7jK2uyciJkCWn9U1cqvcuMzF2Xue5GkdUsQrPksAj4yBjQbkaRwhhqJLy1WKGs7nx",
  "key11": "5eYrEkzPg1CkoaL2zxFAv4ubRLpceNhY7AvE6PT4HZHfTiJvSKXTRFfdosamifvoKf7vEgw2PdXcWTgV7bAj6C6E",
  "key12": "4Dg3Fjv6FNB3jE6Nhq3BJJc2GNcPbaTgf968po87iutB1DbUhHd2BY3wxbV8BoW2165svH9YEzadmaLNmn2FPxnd",
  "key13": "2zgspWQf7nPqnKBzE9vtRwoow4Kd9ApF1EJAY5gvBxLRatG6ngPTE7WYxky5ysLTDY3aMa3hQsx6ZoDdjym5fb3L",
  "key14": "sHC5EC9gspWbHsLe91dYbzNzXd1TXJsdUYk2nyFuyCFUDUFN6coedm9UXLCfkfng7knLciv4ryykpgfqJL7Abxp",
  "key15": "4xAxPTMXrY7d1Cz79SdVerVzP49khZ4eAWLvfyoBhQrvxjs16uNobUmP4SNF14UVGJJVxn4Z177uYtqkiEwMtdre",
  "key16": "aGXeqAYAx1V3UE3gbUixeEFU1pxitjFYMMLReDgLQG3fJWWFdacA3vV5jqAqBcAxcfsKETiquzRkUni5y7B5Fbd",
  "key17": "4houHoVCFyeuN1g9N75aJCiyjAiT5nJaDGgECbifzQjPFRZ78GnAoNLNTUBFjXMTRezpNyS3534xUsByXMPPPhLb",
  "key18": "urT3KH5YwevV8vzEVAf8SxUvNkgcSLicwDSkLAfMRKxKDrMej5v9V3FzYyymnYjtg7DsS2d2Nyc3sYXYzv8knz6",
  "key19": "5yTVUoRgX3SDhKgftLVw3Jrj8YEcA3Nk7HsUUkdt43iPeq7e3uXNVFokJgz2F4t2hvcn49AfogzvLbEhCz3dEDQB",
  "key20": "2JZBHNEmGkXeu9h7GKjWekhbXWye8zwZEbAS96tfguF1ZZZG7SZm1R7SQJEWB1iVJ3Qzx8QLdF9gbXB9rp3jxiMM",
  "key21": "3BoKfF4UDMYA6z4ELdoP62axX2oovt2UMieR37838jPtiEPomd6EK9UyX7XBD4LubbEK3jzr9ptcThkhCRYq7KkW",
  "key22": "4PEn4j2CWEC8EyoC5wPxxv4mrkoWPXNr3gXuYtAaoHztJnDveaDtwheLZE8PXLg5BuiSvPzwEYur7QHZZ2quPxG5",
  "key23": "4JACafAERTVDH7dZcfYvTiXqDv9c4Uf6Ysurxzh4z4fdi5MCR6CLnSYYo7FXPZDgbCqrMxcxsW4jKYhExQhwy6gK",
  "key24": "6746toG8KWfW8LmKvgAybLoHJ4bzxAXFtC7FTi3xsgxJeGgctzDKXprm6Xb5P4FGrWMau73N1yEe3zakSbeSG34U",
  "key25": "2w8BSbPeDw7ntQLQoewwPFD17czdeYjHXRLK2DC8Gzeb7NWGxGimhpMc63vkHywVCSTNeMpEcQ4z6KBzEtNAgRpm",
  "key26": "2UbjRE3Rsqaqar1yWEpU7ZC9nzWLPHD9yzNoTYyKVC6K2r8hiB3PCUVvrL9DqPXtUMEuGcoURoTh5nHGvPP2gVBL",
  "key27": "cLac7Dppw8c1dbDiQhBZNM7GzfLovNweekAtHznXCcjjZ2WbTVwenBYNvmGrAHyvrARmN9ACbx2sjSnJz6QZGSk",
  "key28": "3cBHNrkWofyJnMUiPjVgNLjxhsR4Y6ouYEnmEp3Y5PnfNUTFaBDUFd1SG4bJRL1GKk5gRhirFUxsyZ1YiKWwBMKe",
  "key29": "5CQLyeEquAShGpfV75c58YfVb1H3A3tYYp4sFKLabKi7S1t6xFidWTfrp7aoWngmuDwyX7DgZJcHvqiVNUZYrR22",
  "key30": "3bofg2mG1RR3S5rCCfiPuKi9rufYX4RwvkgZYDpxRzYnn8FciaaesiZRZryejGWzFwC4zbLqCpXttkEPFVBSpn63",
  "key31": "532XdyRBnkmM1Bf6zAxd2iQtgNAyfYz4tpb6T7m7yAPm37YMt4rq8xDiUA6MLmjLLdN69MJyjNHbBx9CQ4h1EUw",
  "key32": "4nwtHAsRjusPCdpCQwqqqpCLXeAJmw9kN8z4DWyDMopNgzB2JKFWXxpQKgbxR3mAeoAgnhvPs4DvxShWeHrnRFNk",
  "key33": "4eYEHvCEPhFkXmNjjYiTa9K7bi2o7vcg6QCMiWpHX7JaYV3CAsGhAD6GQ2jVEMjNEKAzut4Gyq4gqBJY394MgxTd",
  "key34": "3UhV59BQ44LFEhGs7RffeW96HKoaAURA38W3KVc36PSTc8oJF9PxM97SYmcm8qPLDTcpi5xBWY1VCWdVA8Ga4gky",
  "key35": "5UDEaUJ5L7H1UErQBRaYRGFUecCo9BpsQSxNgaEajsaTEG6XZB1GBzmVaGwSmLfcq385HfmRzSfDUqwE3rJFe4dv"
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

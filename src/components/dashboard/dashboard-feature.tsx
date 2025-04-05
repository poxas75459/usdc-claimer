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
    "3PxzcGAg67FTHmBAGj62aGzGHZLNYBbmVADdr9T3xmJ6uGfnbEJRmFKrx3JruPozE5vtioSbJhnw5n2SavHZfJrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDsG61BHuaYu9GZXs9X3ax6gA7WzRqCDSaWp7cyYB8r3anyWYT9Cd5be8pEpZENRkCpsroK9NBgE57DCpdswAcN",
  "key1": "4oFqppUrPMMrRK12QGsZ6DjuXKL8d2ZReRykHBvmU8ENJXwxRZu8oaUvmBJPeAXuGRmErvp3NQxBytKM4YKMyGKr",
  "key2": "2VinSkFcztoqByNevLdsYyZa3W47yEGBGL19tviP2e5q5Yp5MjndMHqu1PNkVy1KcFttcDNRr4WutLfoVkGeFyC4",
  "key3": "2ihLTLsRV1D6NvtuAf5ctn57BoySxkfoVo7a6FRTDR734ab77dWJDxrFhhsdio97sihj8KEmKaHX24c9SNApDJ4z",
  "key4": "61kEutNpfSPmjkYytZewyZuPnLjTW6wXwpwzaLSP1rzoo417eudbDwAxvLGckcoj78rvG7mNhxtBfi7w8dwJeAv3",
  "key5": "3jPeh8M2kKCJ2hEHH5o1DirpTgDy7f4kV4FJfDFxBBCzJeiiaXUiAUzTjB8Ho2i6AieD2TBYiS46GoGQ86AjzamX",
  "key6": "tmXB2hYG1wBTxTpJHhmyZ1LT899egNjD9mPe4MnRVpgrgawHpjAT3VAh9KzaAgeGMN7xdDhASZPqMRka9nxMbs6",
  "key7": "4HQ72msEzg4BwPYTALemUENGs3QkB4f3TiPUkk7HbSWyEgycyNoRz4invD1MB5CN5x75weTZDhsJDw6REML33ksP",
  "key8": "64K95B47tGVLrKrAKmhysGjxd3RpNekvDfG9gMPH6E7WRYBZbnwnh6Nawxxh7j6Rm4N6NVDrvjGUG89eKdR7yXuV",
  "key9": "3gbodcsW1Yw8VfWyVxSRKBrGWvEU7ckBLj7FcoXzwkWmRxpzX7Tc9fdeMsY2nvN9SWh91tkFQMYLpJobLwrsaDKX",
  "key10": "5zUoth1AcahgR26RGXn9osWQEchWzmUpUmCAxviahpwfmbw1yPWGv1R2TsDVHsixFMxB5AzubpyEmLhin5JSB32k",
  "key11": "2d63KPdn7eb9bjHrRKaBPfXuggtEsae1Uk6SRywyKZe5aF29e392nA89eqMniBw4k7yv9uJSaBfzR5DZhiiGceLG",
  "key12": "4J6bHqyPv6wq9jUyPuT2mTbWC4JpiWR7hK2zL1C74T3Mb61YMCTfLGtEdmQrHiv5Dpw5hv4NLCdgKuGhiDHZcuse",
  "key13": "KRDcgVXRwbiTCvG1TGcU3PCku7STmQXK7WyoK6exAiK1ndzAZNbATMEPBZsz2awTaQBkWunYSJzKuNmXGjcWpkA",
  "key14": "iU21REiy4xbvVzsmMEooShJiVcgL3fpiH5py5n5kpkEttjPTgD815QhaG5943oMnKkz5MU55W91D2F5QGPcVkHw",
  "key15": "RVBchJqPFnzB3Wkqeu1jn8mGq3QzwyAYHt7ugM2SbkCWdGHujje9n8RAFspiSWa7hhgW7moxhrD5ELRZh61WU53",
  "key16": "4NNcagHKc6MNXQt4CvM9MsWUFAiJFwpgecq3MZgL6FV9iqWJXkGP8bhMtkVqfP4Kp9WspXbbExw8smtVx8GYLSDh",
  "key17": "QwH7WKRjhwmX4y41TFaZBapGdoQuuXmS9dDHHLCYdYdjptfF3WUiu2iidgeyWkh7mxwCzSJsiYbnEidsMU9Ygxa",
  "key18": "3X3ZXK6w7P6CKCRNvpLZLUm7CxVWJdCjgDwM8od7SSZe3kdSANdZFyyyWzspfDvjnubSrc4n4oCNKogehnk8hkge",
  "key19": "23r1Zfzdvn8frPebBkGPPtq6ztnbAkpV7kLPCuB411sMUuCoYeQ83mEhFTYx3pYRGu2NBVtkz3KZ3bGtLyRngZLT",
  "key20": "TMZBBnU7zCGFLpxgEAHsCLjCa5gSSonnGtmCxBXDzmWwf1zHbTKdf8buZoGmGpL1WdwdYRmeJtAFwNH2faVFnPj",
  "key21": "2nz4GvuxCQfGEo64sBX9yMiF2cvQBiSUi6VzPVxKQx72sxA8a4Rd8rTGwP6YXGPKagBYbkZYzuCvfqsuuQcoEAXx",
  "key22": "3sC73btXt8Q3Zs8C7BYMdr9ck8Wuqb6cR9vjPmhXpuPdkJ9zWf6d1Q9NnSSjJ2wYsmzo5naKfxwSEaVuGD7HhtRp",
  "key23": "66asBmrsVxXwnbVYq5Bg6jXNqz9oyLjAT82UsqS3gVR4JR4JuRha8z11fhAkzcrqUvMohEFi8vQDCtdwBcEtkSHJ",
  "key24": "LuJiXjFK2Fz6dacwawcqr6hB9V3RKWmTBwWqWKzocCVkby38UBi3fyNB3w5RKYRVHF8gb45hukkgmwHg9aV6HRz",
  "key25": "4UgWZZkNp2N65XZfCooURHDwMr6oTnxRKkdyD8bhZsZYeqCxcEcAzjsGkoSAQyj2oDCjRnADnGRpshCoWyLvL8Yj",
  "key26": "4RdRqogP5ABnB89fxVw3pZNaTauWmob7YqhgZgxcff9WUrmKBUt9e5kS4Fii7ouqbnPDVyMahLvF344PDsCausDG",
  "key27": "2EeURZEoi7WwidHYJT4exw27m53CXF8gDeAZNL8cpb5jYynszdUsQNNqaxG5dScfUf7dr3fCLMgHmSzaRMtmzHxG",
  "key28": "58yz4Qh3EFgKeMuiBHZDBhEfMT7ZiPgQGXGkYHqZNbak5WoWkHkTQKcVTThw2F87QZMxKKMPughy8YZBcpHKXn9z",
  "key29": "3axcFbpQ5ASfQF1tDxM7Lv2yrUfLbqApjCrakCfhRJGi2d4nJAqhNHiU1fCLDVoVaCTYP9Ra1VEhUqaq7SG3G7MA",
  "key30": "2ai2GTKVCHwtYtNoNMWzT4FZm3wyW3k9fj41HQFmHMeENGaPXKvKmX9v5xVpcZYeVCD1L9bb8exH1eVqGK43Mfs1",
  "key31": "ZbJ1TBGMXKUHRnoagwTk1NVzX9pHWa1stjhLuNM8gxKomHm4vKBGJA2WaDmgSkFcbKQJUpimK6DhpLNUMsy5Nde",
  "key32": "3XQPGQMyLnVrACy95QcS49XPn9Y4XwYTGZTJPyuHHmw1xZHUMA5iL7ZpSHnaJNiLpwMcyVM5u5fzGUWLxrhp6uTu",
  "key33": "yqJ3ukbo2ZzewvL2K6a2VNuWAxbCzdC3ZKMzKoDVVk7cf4WANYnpVQ91VPv4kRdMVZ2rrVomeCvMgge8suAYdgF",
  "key34": "5MM1xgiCnaq631J9EhiwQySmYdKGQvDKRzvzuVooSX8vKKQf2sqKf7YuXfwb1veHAbzwKhVpyR5mnegJQtZnfSHc",
  "key35": "4PYGz8ZEpV3o8iCKd2oDcTQfD7BCumA7w64bf4izC6DR5y9tn85VecCiZgPR5eswVYtCuFXiW2Sp4pgTr6K5noJr",
  "key36": "E5bj86Pnrq3o8do5Z9mr2L76jJeUwzGAEdpfES4nApZv2cEiysTXESBcCzCgzGiRt2Pw8EkM7A4nVEvAW9j6KWs",
  "key37": "44TZSwJiaoks8XnNcMxTtuX4wKtTaZVsyoB4mFL5GBMGGaouAVxFL2sh88ixhDJqmdrkdMnzmsHJEFCLzqpKGfsm"
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

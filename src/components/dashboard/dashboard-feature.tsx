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
    "4wD5PEYmpvyN2M1qrdFyf3fXRszAp3JaUMou5rZ6qdHPDWVEycZ5pBQhXYmDz2G97MagbBhyv7stMV8gsSdyE4hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ZeRpefTuazQmr6VQESJQa2mZfwaMamgaBwEnNyCvCHvUs6jpNTdm7GzDFCJkqzJUzoVwsES6VUD3m7PeEefpwM",
  "key1": "uVsmibpskRZWoC2QG9Mx1wy7mHx2oCSyiMxapxeEFrFbLt4AL3wn4wpUKQLBSDvDPibVXkcjoVsQZd3gcZrfncQ",
  "key2": "4Ldre18D23Ruh5hdpghiggoUJ6mjgduF8RVVNuGZPJbYAvrrBND28a1WSKqTZUGWFw9gbL3biD3PeAhTALh2UHug",
  "key3": "5tJLfS1tjbAmNTUALhEFprWita8uJm7D8xSP2TtiE9qaBFK7tQTYr9bHpQSbjBkQkbsbqhMzNUKtRWL6WQr6L5NW",
  "key4": "2MVxB3YUtsqSE1TeVNnjgQ93Lk7pcUNTuVvmTtXK895kje5YG2xZW4AH5z9z48TTjbJHLss2btDgqNzEtrREmbYP",
  "key5": "4bCGKRgdAwYjcWLrQXVMDc94JF6GLChWxUuNMUeyMeWzxHoGeNyuh8W2FXvzexbLKrJKLXUMw4swN3YkBfJU6hQj",
  "key6": "651jJzf6g7xoDGFoS71Xj7LdasDukZVemrpk7WrSNy6ZQQM9gujT9sYkNLi2j9KfR2dtrugXTToxbQtwcPYZCg4F",
  "key7": "4avYy6cPJTSyBJZ1uGgqKg4V4XXpXjNrX4ZhDgsX3Ntv7Qs82sY3nFt9y5AbaEegpihY2g2cv6brKahbiu91ZZ3e",
  "key8": "3opFeqDktswxAFnrUkVyc9SwJ9Pscwq1QB93pTJzzYuERz3GEB7y2YhTc6rztcde5EYGrSndEYx7XRbQonUdpqKE",
  "key9": "5xXArZ89j9pvv8zaTKgwahjZNUjzCTKpDvAeSTUFcaopNT1wphGBei2X23RHMgd7HeWygJhSahUC3E8YcqPZH47c",
  "key10": "x7xckkM8NxcaN6Bem2s46jWMxrb7TyMDozaG1nrHUroYT4rVG7mkHT4E6HarxY87YM1A7GQ63U6KBJ2JWot9vAR",
  "key11": "5sKyKY8FqqQVDnZyW9DTCRffpwbFMteYiztx4473PBtPFfkAbd9zwdtbV9QAxC4rVqdQyDweWoLqHw9BmshSio2t",
  "key12": "4YeDKNa6PS8HDdSHekhirUXQbVu1AUKD4G351nmzcYMXC5csYpnHb1sAB9DmYwAa48VFUowJ9BJRd3ubNN7jRZRR",
  "key13": "4CULrrF5yfE7whN1ofpTDa54E8wwfr2hudxLwL6EjRpuLMKXahi7N2Ldqfx2zzgpJ5sssoQhsuxGUe4xR5pBEYDR",
  "key14": "4KqHihv5ThfDpnYAsijAnuvKNSe4kGKnn3tRQaVdzBJ9VRopDYtb9wFxCFS2zRVpdg1iaNjT5Pg7twEs8aBsyKHF",
  "key15": "Rpr2Ma54YYxQ4DGkLVudjmaWo75UNZxWgLDmXxdAWAshBKCV7xcisg5KezLgsG6BPmjA87KBiF53XEDSo3v398Z",
  "key16": "5t5PNgFbSFQaC8Ve6xv317b6AaNQex2KyTdiCwf2JnKJR5c31PjwotonPWGMmoJzHEBcuMP7zLnycMxUTTUWsrFx",
  "key17": "56DEnQh48pNUiVyk8i6eAebxK4iMsPiEcGPNazv52dhjZyY8x6ECdUaiajg3rtUyBAZwnMVm4nMJng9ixGCm8peL",
  "key18": "2DQqm1CNrjFAggoj7xD8iSSkbsHXtoqkd2SBTc2dr4fB58XqGMNuyC1uttdG3DVcAL3kgx5ML8o1daMQ9aFqmWXZ",
  "key19": "4QNtSEL7qzmgRt8edj5xXYgMUDRE4mzFMnj4RRAWpAAzS3hmZpWFqoJQSbidrd17YqL4ZS8iwkpMPiBNyNTepmFd",
  "key20": "sqH9d8cdF1LP1aNUk4bbVhELg7LidKMBTyKWegNGX4YhJSPifuD1tNVF6Ga7ubhK66Lj3Ekqgfm6oVXcWSxmwUR",
  "key21": "2eEr1BKhDne1UB94zcFjiPVQYDXrTWptGofG3PxtR5VubyZfLdH1acTihTBkJvVhzZkdQc12AvSqNqsDC6G5Pyp3",
  "key22": "3WwNCpKiS1SwzDs51HNbWgjedeyVN2VCcUbGrkprc8AvZp1PfGG3ciFEsRNB8CPiZaAv3GH1abdnrpjd3rmidDqP",
  "key23": "5yicaSVwRQC58pucrR4pVE2FKCaLd8zxFRFqEd93pHX1AS1XHPWrUu2PGJCfLwiVqLqguAaP6CHS1x14ndNK486t",
  "key24": "2Lam3552H84rkWBWR3sNnsyNJLFwRyK5VV8X3LagQvRjngPe2PRtwPjnNbePKEhDV62ohEH9yfqxWsGRZcHUiroM",
  "key25": "25htW6Evbj3KnLRxsAkc4hs73rPGk4VJXkDjHd4kjLcLBCEgm57HMfWMLUw9mQWJJt7BztUGMrFFaqNgALJxR2v7",
  "key26": "d8HhdKhLRfpxDMWzcVsBXrbdpb3fdzxidyoPzD5B71eXhCaFxafdtPcy2WnJ1gg1S3qRsstEhkBtS56z14m38A1",
  "key27": "4cyR4rzi5p2eQzQzjprT6NinT9WkXyred6HGhkMnPey3optPamEQfpYAQX15rGFiEtyNbch7bEbjpp8p6it454Lz",
  "key28": "393cwYFp4NZd9Ao4SpHT15K8oXcSC9o5GKnvpyziD87uWfAuciF2E4iKZuvydADRLTSYcEakp4ZTjRXQzGppmZVp",
  "key29": "2k4swrZRACEqApHnx1LKjvVtatGL97aQjmpVNyjYamxEQHAg226caKg4RGkouDZevPfAryPrx9dovacP6aFA3Rbh",
  "key30": "4fzVpuLSmLgwz3sQxgHZoo9M3oCUnKzKXHgLDRWeSAhKaFpRJaYxR8BDC9BkvWcypkg3v2v5tKB2Sbhw7N2ezm2X",
  "key31": "5ZyL4HqTcchyqgmQvjK7WVZ3EDV3QdsWaNftUYbGvCS2cCZVs8XCzuTVmWpRDYFegbU3fCaYTVgsV4xLUSSoCJ4a",
  "key32": "5PmoAg3pByxJSe8pVonVZH5dxcn4z9L6E5AUJfRUnsvhZ1TCR7qX6RSnntxkfw3Qek1FPLaxE5mMD65X2tLucbZu"
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

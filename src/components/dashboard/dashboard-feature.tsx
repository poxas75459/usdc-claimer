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
    "276U9b6t16N3BGkfVuqyxMZj2cKMpowPq3J51SzGpo57J33LGdvDNnsdH6uijmMuzPdEXpcyobaMSuq66fQpjRvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmhFm45xN2seGzDagWeManN8pMNNxyHvYoBLnprpc2Pj7gwUEViV1hvJa4r4qJKnFxrtbRwVP23J2ik3XmNPsmT",
  "key1": "5dYiWwKUsqfEyYPVX3cZ5V5vcM5HswWDdvFpKGzVg47ZV2K8fFp6nzWdZbQkqxM6KvbFmrsRckqrUQydwaHM25os",
  "key2": "37n18viGe94ZhXcAZRigxgrnnqsgcZxufyq6fqxXybDfKQsbmrerLkXby4pW2Mj9VPYMX2TmeDoSRRXSYw3YJL4m",
  "key3": "3wSpXnsRaTswXKZxgGNgK9vdsdjXDapPK86MexsXXrTjZp3CakAfTV3qZQPTP6Q3YKuZH4U4vyvr5TMb1KF8Emsg",
  "key4": "66FpbATKhRBaFrAyMhw3R9m23jdQRkZPx4Ag29CKdYT2XS5fAHgC7ZMNL6DwacfwJ3ZVkLcrRXVgBbuzarfTNgek",
  "key5": "5rVqtzRhwJukoqH6sTyD3g7C31krG5EcZXMRDN8jDexz9o19FcSxePYnWPFisZt5Gv6SuCEwQ9n2UCpbiRLE4iS4",
  "key6": "5HS6spSKotakUGjGCLqGAVWEakBvFj1zdiAsyQMby8Yg8SzzMoPHqburdJXiJPPtYb87tEL1xeTtCkZb5ezB4Gw3",
  "key7": "ApLDeNkuPxVnhK9hmtrNxPxKmdopYKRVWLKWz475MMg8Sfs7ACcL6NJhokF9KJEdmfNVWEP8AdpmokhDGfRnQm7",
  "key8": "3cQ4tQxkpDmKNTWtzCrN2PzDR8yiqB9vT5FbMPj48rw8cY9TAwwtsHB2oinsTGVyHs6rZSngEiXdwfYCt7EWGsLK",
  "key9": "4dPzx1zumE4xmrC8kkTpasX75iAurU53FiLRqv5gV2piwwmjZxetnKZhPu5RPYrCFcJ3xVbBEBkuj5jVCE7uxyVG",
  "key10": "61aRJiPoNcSuCVbwZdkWD5zgR91qe3Cigwi1u9UoP8dziPk5xtYwuFmdTZzEak5DDfKhjP7Zgmq5KtrAvDc8aBA6",
  "key11": "56M327SdcVjZLM1FUiS43ajyCmUVuQHtfx55qsGyhJgL9TbH44kKSVgStZGKDSQi81Aqgp2beXKpKTLuHtke3pGY",
  "key12": "3wFGwiJ1UYVjfzn3cqK8tW4cSHVrzLVCc5DgYxZf6xr4FU2FMALrB9R2jSFVfgkD7qrbSFoHrypHvwaiWqWDkf2t",
  "key13": "2t1eL41dMyQ7wbkULXc7CwoHybf1sdeEyxpVnnyNhw7fxh3h4yPfAzWGxwCTChwxHzLohJm5hwLSQpjX8rJqM4Pv",
  "key14": "2Nxk2wuuMuZNxU9u4uzMFQjPV7hwhU8RLQCA2sDi6DGPJ8EWoNfmH729SLck4SZAFgUn4ALSU2KpSXCDJ9F9fhxr",
  "key15": "4pqjSmJjJ69R2SoNmzZV55h3tGFzdVmhUULZ8oEdgP8dpZ9DbTcjccCAJYcJyoMAiZ8sSdZnSmk5Tm5GBssi6ZcL",
  "key16": "RU9nBfYg8G3bh4Br67TWeWaEcDd52A1w123Dqo9k8MjXK5aqoZvmW6ua99U2wThcNefgviUZ4qMbCswyvMvnPE6",
  "key17": "3TMit1vy6GLtceLqBqYzAf1Kdx3UV5yTQnfXYttv8uLBHixhCXto5aUcd998AaCK1FdEVFNFSeESQ9YvWoxznraA",
  "key18": "42U9UgTgbHFVMSQHkT57Nb6Soioojsz8waLE5uFB2UQFMFmnJfAL6xEHwjMmoju2GB7TdeQusaivCCyYsCJewWoJ",
  "key19": "5mraTnoY7xDVx7aj6dnXzEDe22t6FkqT3V985sVDxcrEh9FHMNd2BvRnVS5VrPGGykRDibqQ3a3UxYAahrTUHXJD",
  "key20": "32JzcgtaAVfYFYF3vRDhsagt1VbNZP9kF6JbYJdwf26U7jrkikEkoTXx6LPskY6TDQE1MmHmzxTcLN9cd8pNCM19",
  "key21": "4R94rNtVAUaPn4XDxj5y7ZsSuQZN6FPrtnycKxHM1Xq6FTYeWgDbFQByWag2kg1oHtzNxCTkSwUWS38SUDmgV7Fw",
  "key22": "dpAL97qHtgwoLupurMs4md7woF7xLWVkpn9g1F9znxbWQzqYjyrfXnLwbxeqkMsAttjGQxtouRBxprT9YLRR5yq",
  "key23": "3t5SbhGMiK9Yh5rkifARW2msFoAUAKBzHf7VWwbUXsUkYoQjZpLtt26kv9RqpPuw7XYNmx78ZMfefnNhiSF8AGmG",
  "key24": "4WwfsEzBxU8yPxX2EeN1pvngUcPaM7rQoaUWEQyH4BQNdwNHtLzNSiLLF1uDzBnDNo13mRov1p8w6aCiqXySyaJk",
  "key25": "56VsTZDbZWUAyqEnFj4VhKqGbh4T1qtsJYJCg1ppQL3DfLjoWCXPsukMVDVJwmkSWKxVNLVYkpN8fKHw6KNATxKb"
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

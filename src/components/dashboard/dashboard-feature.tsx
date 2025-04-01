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
    "3oG8oE5HdJVcX1FzaSoomLqqhcCu2Nc4TpNvYBoHhj947kx3gBCJpmzk2dFK1uq2phR7tcmNcqHPZbRXEFLWUmUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Bx2stxJ2KqXfHrhFz4iDELhXMsXm6rLmm8bcca3FvR6iJXq3Qb6UEqmx6Q2EJTFr2afFbgXkrto45o6zbq91xB",
  "key1": "2dfb9yrGSGYZnAV4xiahWDmXvftXohzgWAH6gKvKqBCWNGnonFRB2ddVjZ6Swgg6qS3k2FNkr6wUZTRaGz9cG6sf",
  "key2": "1ReecidMn5gHndPNQKv2kGgey89RNVgxAHSvkP5YYWtFdnwVPzb6cutpbL85QWhd6Kd4wdxNc5KtiemCdUP9ySK",
  "key3": "53weoGpYduaqHgGTjJrvz5HUG4rBhb2yH6Dsvmxo1nRekz7VngYFQxQVVJgniWN1zBKkte4KSKcc75vBz4ZbLy2g",
  "key4": "4dbe9yXFMDjHBq4Cr9wXnkfQjzjQzMdsMiCCychSUQsEcceyuzrupvtS9VHkbz2So8qSZvLVh5xzgCCCuexAHETJ",
  "key5": "FxXNe8XUwLR6KkB41wfwBP2BLyb6KP6s6mKHXvGfPGJSVgFhMohBKHQ1CvMAvdKwnXyYDPguysoTu7kukpLvngz",
  "key6": "5BCEUHtvoiqLmbXrhWi54GfeZqeYVLrutzjE2FxNLuBN9HLZYgaQEahj248om6sbUTCezzc39VRN3zpQWWEBEgLs",
  "key7": "5g6oPDcE95ka3FDtThfSqpq7LNHpm9zmHTeZHrkPY8buj4HhwPsEboBSKL3PvEns2X5R6p6htkdpNTwzBBMPuKxW",
  "key8": "3GM88BRChqK42g94ZD4kWV9rrHT69vCqndmk8SsAByXjHSGSqfkb6USV6g1oEgmmhJkgWMTWpSjJiV2zdsLb7HyF",
  "key9": "YQ5ah14yCyu4QEF2sMvwk87bTqYhneYSAmEbQwNUbRfndRE8S6KT5fKPrvCuhMB7fwG51inUSNrE7Vj4zRRYiWc",
  "key10": "nLe3Gc6g4f1hTCCVqH3cHX6KWMSqvawgxLMRGQMXCXzJJMCBMZvKzttHDmhHjbaG5QV1zP2cpzDtcGoZhXTNAqM",
  "key11": "5MyKbizBcEgRjRX7fGhVpYobuUP2JYv8xEYtxps9YBRMBwr7hFahjPJmXYiB2fBkcqmGsMGJZjUG5SKYosiJ8YE6",
  "key12": "33AcAcyaFjGghGrAwUhpZdCjwJc4AsvXCaf5n244Lq8DAoh2SALd2E37egawhEYD4Jkq6Hs1U97Py5HXGDy96USB",
  "key13": "5fN7ysgXMmdHfcGy6vKdoScMVeNzTd1i2o38iYbiE9DbSwhBvKs3Hv636LX1jEmnpw7XahMnrUAP4nebdpSmj7hh",
  "key14": "eDTyiq6FaskEh9NgYKGr3nrETYXN9A9ZzzuZP5fDXLXE5PQF2pHFumWud2XicxnEYHseS9DbF4Ekuv54msP9aYs",
  "key15": "45WPce3JF3PnguuDmb2poresyNrKg1B8GH4Msq5DC1aWesGiKJbi3AgFjAPMJphEzr1cKTnXGPyaRUsZPnkPU2gk",
  "key16": "3e7fnjnjPo4ZFy4M9hPLEHy9x4imJBFaoV4txzP77yJzuW5uVRQG81xqYoJmEF141aiFYuuS1BmpPiwJXaCW2GPa",
  "key17": "3wkEgUZ6ybFomzrWsV9NNmedDiggX62BCkox8b41YmxJytqV8vMqEkqkuuD5UHDeNfktkGroTciep2CWD4UjJWjK",
  "key18": "V87Bch4Qkv3ekmCJ96cG4YAwBT8m1ZoAFc4QNBSGJ6duzcgzgdx2D1TaxdPbMwSPcyEgrEcLRnruCNJhJzDoqTd",
  "key19": "3wXPVT8ckjvYA2eBC1FCeih3jHcsbNYVfN4JX2MyouYVVdAu51m29CQPGk6cezrHghsHDBLHYEMNtBfahtcmPdaR",
  "key20": "x7UrhmtTvFCGC5KwK5EHFNwQcdAZwtMemkeduELp4FidRXmK9iEKHFC18atymccYUqZysQFRVZ1vyCHYUyAc7vJ",
  "key21": "5yjhwUBdCosgzTTBgXgTXU9KrjFw62bNNWEZtS4gkUHWVxRt2GZpjndAureYdTRav2W2k27SRQKVbVoZquHeJY5a",
  "key22": "49egAFinXAoHZkCwbGSEwxxbUtZ4qE3TmZcLSaLEsZaGJosyfs2aURcRqwwWrowru2Psh6PmzWkqA9zVSuuaBqpR",
  "key23": "2mKy6QvbBb9wFGU4C17rzC3mxWa9cpbmgc3Y7SYjbptUMifoLKBunbCrUxdidd3tpHb1GxM8arGbfaWxxZrq43vh",
  "key24": "65s3MoWnFPTAm9bJXnFYhUPpKRuhPTPZcRvxVLpvXq1NRx8QkuDbW5KX4N5SS3iBieRkBW8ixkKsTQrAG1GUKba7"
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

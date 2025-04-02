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
    "3BNB8fUqGcALx2ioVJu45h49sJUN9mfhNTWR9fcrZ6jRqf6xKcqyJv5LCxt89aBdmDs6mAV5dfraTNuSh1vjAMYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dgLT7BqwC73MkL15XVQUYP25WzN19S1osx8rBRppuc4s4Z66qREWM2Zz7b2fcXwXA7mpxXnzfUaTXxaWcq1S6Dc",
  "key1": "64uqe8h7U2TmkNRgDQuyJpXSBbfrwMJ2eByyiqbFAtQCFDHqsKNZVZtZ2Abqzb5Mdgp2BLjZWTJg5mpsv2wRkxiF",
  "key2": "m5oNgVE8X2TRrEMKGfgT9ZuLF9toLrkPsZP3H41XxjTt41pGhVWHvv6ZgniuP3WsxYBLuuzGuwQELxfrgtAoiCb",
  "key3": "CXfrZyXY1yXTTigdJ9HgaNGv4yHKUd6i91mcaiL1n2wHMJGTEDXKE7nZqRQZ4UoLvo3qkQRnhsdjFCjYz5axYxb",
  "key4": "3fLRnBBc5imfsF7kCW5pmAoEP7jL8AKwZEWzLPqubfep3YeumvRnNuPNBu66sGsWXxc9oQuXYTPF6NSoVAPf4Jwk",
  "key5": "3TBmuJZbBXcvkDCtr4sudQrzQhQrB1LLaMpcxC4rQfEsvp4QT3jZkvEg2fE84LBfdthNY5xKEGWbWzXNvcSYo76V",
  "key6": "4UFDJkVk9DJnwCrsvT88jwUoGMYx3uA9vimq1rdphB11qf2zzrdBaRRtAe7X7cUJViHPQA7XttRsdhaZejBd48B1",
  "key7": "44oihw4zLAsw93SCoKUC3NeTEJ5jQ5Apjo5JnqiwucXb3wnCPK6c53zhxA6Eiibs2P1V6DbuQLs6kShZDA1aMUUk",
  "key8": "3d879ZzT8JujJGaEqdUgPjrSewx75Pz36m1TmEcbpUUy7nQ78Ak74GiX2zWPqzPSfxLkNuzDEyKPVmUqj4ko1KrK",
  "key9": "2DoX8ekUNmXCcBGnN7Brm7Ve76W4QmQYmzFMCtY4eYgRoUbZHXVFqdUQ4vueq5dv5VZ8Q5yWLPu5N2igjcFsMWLr",
  "key10": "2WagZraz3GSgd6pCSWjquF2oLhLKyLfj4HCnTczLFctMAwQL87Qe7VqPF64bc6sWDer4t6njnrjnTwSeDDE22QVC",
  "key11": "2oa5FePySard81tFPaDJGXVkAnhThuxhJnDx3F4KKDosmGjgXAKNe2PYFPdJ7ow2w1J88LhjNGJNT3ATCHcRAz3t",
  "key12": "2GTThVkm5GfgySdwCtV3wpu1uDh6TvrytNvA8WR67rd9gFUMeF6xUjmWoxX9RZWzYJZwCCoj9HwWbeBcGmHU7iVA",
  "key13": "4jkrWrAJozniQfhE6WHhgVtHTVmSppevtqnfS3DZcUjNeMCupw2vDSE7RsjRErF49Aaygkca9mBAaHGexPGKE78o",
  "key14": "4iCBuoVkQfhd8VZxhVSsWu9bURoPQ3uwnDHhSBewDDVeXLJUwDyukNzMPE4zsaGgpbap9ZKtRf6m9ai5haaieEiT",
  "key15": "64hwBEH1aRqexDpyhfN9RSi6toRM3Uy7PAQPDJyn1qTYnv1AzFX4CNQDiSnZabbNZibntUebqwRsA7AbcokrtDQ9",
  "key16": "2s3T1YG9zZqkxyYn9fNafBcdPF8ta54sFvxaovBLXi89B8eiCZr4fbZmjnak4Ddv1bFgH2A95a4ou3nNoE6ftQXh",
  "key17": "4ssZFuUAwNLEemG2suWN5fBK2apy15PxwNnHVGUXAey1NsnPpYaZR8bsXyhzR8qTp3orJa6HMmWsmrN6KFYkLMjL",
  "key18": "4QyuBCn4vAddd9coshA3uGUiSC2aEvPchU8j1Sh73aUQbtU8rZGTQ9CyK82cyt5Fo9n1M6A6HdGipEhVZJfUip2V",
  "key19": "3ZTrLXVKQttNLJ5Koa1hkZFVERJBekTeQ4KY4e2ZdBrd5KsxsCXXvJxFSnJEkEvkhL28ijqrosA9arzB4vFLtXvg",
  "key20": "4Va7WkYME5EQ3pdph4NvySaZM6fL3cAntTHGaZ15mEmxg4ZrLPYHMX3q5CHnbEYxnEeS9EJVSgm29rnYjMLccrFJ",
  "key21": "4xNid6m7yoVDptRgx5n6d3xwGt6cffjts74EJse2HZTTbLfRQ1aa396CnELehTkdwo6DC7PSxEwwjdDAPnLxr23d",
  "key22": "7t2pvzPhRz4ANFohXwNgVby43FhgStkCqrcg95vLrhvanuJrowHR1xhdXa7TznEjPCX2VtU6NyLs3BPGM6cCWyu",
  "key23": "3vNKbLYbGjRrUWABmR3w9KoRPjRzTdNkAnLwQ7z4YGgJmokgoW26fBe7yoWe4L2fURDXgjFkHuKDJgKRCZwXEWiC",
  "key24": "2qzbdSqWRF2pE5BQboqpTW9dU9bZadaB81AZ5u8brcpYHVKjqmQfMjqm8cbPHGsgN5M3ioTFety4F3fZbTcACPzQ",
  "key25": "3tJ1qVTGMqYmwdGbb1kJzL1qwDu3ys3jVpppV5TUVmHTMQUTT4puWP5igsMmLzTYyPGwJ47rTPLKsaoGG7zocJy5",
  "key26": "2gT8iUcEiQqHZT8f8YwMTKwFanCy4HvKtCggsMAsJbbVAkJvVaWC2GCUS7iURtKDe4XnGUAYP9HXp3jiMaaJShcW",
  "key27": "3mRWA5ConZtCKsQdxPxKoAxC8vJHQQYXoHL4pyumR4B3q2qrnhRmSaPxEh3QamKkpVG3H58vqJ2LWQ1FEr4QzfhW",
  "key28": "5RTfjdEEh3qcDLR4x4W8iSzb6EtPWPwnWW6Q8FbPttQLDEPKu9z63C5LUST74MjskdzDbwF7KMECkkZdtW6Cwp1y"
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

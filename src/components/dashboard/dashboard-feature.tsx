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
    "46GKKfsZTnEfmwFRYqKwshAWqhzAoBvTrt253JVn8urF3yLVQVZqmmRKuy3HqoUyKV2sqcTsQbd25b7S2jQSu2rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVnhGDwJ4RU9qVENN6w7Z3RG7SpWpXQETU7tdrqcC6XjD31sneQvdXfLry56sVUBxQirnoyV6wYHYAGotbsFF1L",
  "key1": "5fsxFkXqZZpfohUKLvTtz246ocDZcDeUsovGv8Wh7XLHvL1nFFiY7d8MPWs4DGV5pQWg5xpakFKSrNdgy4KL28Fq",
  "key2": "niA1EHKVkUXtK68bztq2BAoEfrmHpTCnFqhQR2EkV67cekMa6cS8A58sexDrGymirjZ6yzvhtdnxkFTgP35zQ8L",
  "key3": "5xaNBxcsBaMgVTui9oWh9cg7jh3unvfXpmbwKRLczFzGjT8Eh1cv6iRdik3zG5c6XvAkbgQxaxyenZKDRQDJ5sFP",
  "key4": "56doXRkDEgUcGrYXQTQsWXVwpF34uWf33RMtvSNM2TBHR33RTwnm99nwd33jM7KjTSWq1p1L6PFjiK999JHpjLS2",
  "key5": "398zuM6kk2F8QXP4CctrWUQ9Ywg9KLNCguRKTZ7qVqFRYtmQYRvrLihSuKemRSFnnkBEp3AKtjUGXoKF7tjKmQ36",
  "key6": "58FENzP4QUcAyVqek3RDw3LsaEqo7KnyKB6Hgf71iZhdwJcncpaXZowdbjEvfUgGGbYgj4WuagY5rdrwuHfFXrpf",
  "key7": "3qnAw8hzjBDJtCvXAhBkFHBT3Cz5C63TayCvdyG5qodQcFNj1eruYXL59bNJTGA3M3RszgwGcgeZNcKnEv7k1qZY",
  "key8": "Dw29MMehzwbAejpLwbnscdxErqU8xxGHZhHwxnp3sBhbuysF7aLb5QEjinBmhShhEBYjNZkTk2RJa5FLNVQkAQ6",
  "key9": "5szDXNwmVPTcLCcHBNJgKHYiyh7dy9ZNxr5iL16thARfXdHhbpKmiTFL7PPLEkbtWctcSuEmQhK1Z4PkaV6FQtho",
  "key10": "JBS5tNL1e7ao7WH2Kc8mvPNvddvjYt8PBP44TALBMi93KTs3bsH5xj6x65XZs3G8iDyxsszwpmvNnHVCPR94iM8",
  "key11": "Aa6sY8w4b2zxpw4KWg527evG35LcKbv1w9QstKqAttLEzxL6J9XdDFMaasiXgLDnxbnEMCFK4BKBvw77a54P6ja",
  "key12": "5D3gALunndp21aUgaLEK8hDeuiHkFLubyTzd16PeeheMiKrJ8AaTej22jM4Vrgqw22icAp4EDxsrbH8M9y9Lhj69",
  "key13": "nT6nELS7aKhZMiY9pkx3QKHcMTjTFMDdDGauMDiM18HPnwZRvsPaTwgwVLcRdix6hES4uCuuUvofSoLyE13vTHn",
  "key14": "3YkRB39rorjriYuXRXfdCcofHXzXCeJCvxAP4uNx9VfZWQNMF3pXhb2jPjSdD9NTLzNHSJPEC3rNWtrZ15CFUu6f",
  "key15": "4HawFWsFNyXQ9KStraJ6tQx1fdFq9Uk7Nr3SAUC9Uu2TFA8ZafAHfi4vQJ3mXgiXbiVudbvc1iCixSSnmfDh1num",
  "key16": "2GmY8FAc29tbGJ2Ph2ZvFcGpszoVqCyYMXGvyCgefuWmkRVAu55bR1VUy1ZJEe9JvEADMHY8CetN33RSUmbuNsHu",
  "key17": "5MtaWbXrR2pWG58XTKJzjRtGKtvxAMaE9U9mYTUNNSuvppK2RDiWyztFrWivaVwocSLoBnoVyjZSqGsAmhdRxuQv",
  "key18": "5qXxXPVYR5ZyNsM1nTC6BGsLWAYW2xXargkJ2ytRJaojpStuip7csLEDetbwzeNjzET2czwvkoYAEAL5c3QUa7qm",
  "key19": "2syfWZiAHC45UbQEaZo7eFYHge798GFZamcK5CyRa6jEF462e3f1XrHisChVu7yXaQLm1mRboQ1omVBaJeQMdJ5x",
  "key20": "4HcVtyLT1Y5aLe9ZAi4KPCpouazTF8L8qF3jTjaaa6kM3uL92DUxc2YSCc3bMAgtaGPHRHpfx2Wzizv2ik52gkNq",
  "key21": "5TxJKZCzmvHJHCfkXzvYy1RKmytcRFZ21LwhHFSk9yonowqTAGGwA2JtHCmVsvqH8qxk2ecZRAY9hzegYzK2YG2V",
  "key22": "5Fbi38SA3AL1LhPjGe7ohr2zLmDMiF2hB2LceRT8eGni1T3hg3nvKiou8mGUyXkvR5zvaEdo33iX4dqjWTD85Yku",
  "key23": "4jaT4zncb2nE9KtwDEJeqPyVGq3BDtH9jMC2GuvazzijP2xacTCec8Wbjb193jYXEpE2xbUKsMZ1t3grbPL6yDrj",
  "key24": "3SSDiRpW52dgXH799uQPUPjWybQzWr67T6kCNEk5uoWhmzq6Z5YmZpAUiZWn54nBd9Hm8PZcK2gK11d9mzqrnQHs",
  "key25": "4dhLVuQJsuMQQbVhvMeZ9nETsa7mqK774qunhS5ybCn8rCPAcNKUQxomLutKhYDZBx9WizuMpkzudRCPQjbEnsbk",
  "key26": "2uGjDCSQLhqTA8vSJa9y2vRMhWH5PynXQbuL2EifBevomhsXU1R4DQuhFDyYAtmFjcHAFFdSAgUBFf9k2JTXJz6M",
  "key27": "5XEHWuDStyrNRPXGDRxYcx6qW6DJuZ9wBQBgiqVV9eKQNHHBRz7h3KpMJs3YCdsamn2upPbTUQrBvCuSeQTZruHX",
  "key28": "t5x9s4qLTcJPv6KXDHscKM3Eas13aNbhpg2YSSz2a2Rsi9D6j9d6ebWNQcd3pMrBHy8qYshZxR7GW1t6gLN5Q3e",
  "key29": "2fK4XQ7zZ6EpJBnoycWdVNqjJV6KRAi5tTJ62xF8STdMmS9Jnb36ommA4NcFa4SMvTyiu8jxPXabUVmtYZiGg4Uk",
  "key30": "3UAeoEMe43y3xpeo8xtCJsitPjuAobSRCKF7JFosfWbVbqgrRgzjCNEWsKrx6UKxn6UMzofctuDir57D7ZyzTLDu"
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

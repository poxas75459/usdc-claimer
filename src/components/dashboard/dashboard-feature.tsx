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
    "3fAB3TRMCqesF2V7gNKwE2qBkyR3cG5TwDtMCpChAVTJxqJzgVPtmT1ew1DrNo7GhVEw9wG5ZBUpkxMCFVJkdfVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ifbsopaH3Y9phPXjHDuFWDPYjbnfV775bGqzLykebCgMruq3CBEVnwubhpAKMRwD1WY9i1Hbns4MoboPKHww6i",
  "key1": "89uH5xEYVN7cfNWPrwSu8C3rKpdG6vWrXDMuGbnxZEFPH2KdWK1dJpPoEvh1WP3wfyjqC3ffaUcr63mAJxrubxz",
  "key2": "7ywTmBaDViJiusAqEAiHZEYQtBJNZrL8zFeAg3YLzfuYwSQswwpFutqrGgTm8E6ecpD9ws9KzR7j4u9qH4M7dsN",
  "key3": "5mwZohb4ppokhibMyHcTUrxuJzBozTxDeKcHgmaMgoU2N3zoSbiriekYsGPkvvDuZBXVTCPofvd9VEwqAKYqpoH8",
  "key4": "2DJfVLDrFtBRyf2SXqXNTdDrwaocTfzztQwMNqbp6wAajpurJD65cwFuJzSyCE4jNDeMTc51Aaam27KMMCWxDDms",
  "key5": "tx9e5YfGWtvi8RfRreduAr28HejgnuNa9XFZK77cp4X1afeyx3WujKUFrWYdRuBjq2rFuaafX5GdpLwxFCNNH79",
  "key6": "x6ZpK4d4ALcgmf2bX7AoLUeKdw2QNCdKgJq5ZjMFLs4C4HN4rwD8AmU6bAciXgK4ECxKGPyzGKYL6t4wguQsgyB",
  "key7": "5ZiB2kT1kE1h8LNpx2xMKzPcQfSBPpSSrz4QeP8P3qb34bXZ3PRamyvW9B7wvT12tpKQNRzYhJTFESj2Ekrbc2SS",
  "key8": "3xaEdEA6gkJSoSumSg1mhiPAK1dtJ1b9DKhb6mix1YUpxSCCKticobBLUqQdmmJ4okobjgBVGdfNqbCp82GuTknh",
  "key9": "5feRoYKiiYZCThn9y4zNB7G7BJg8WT7T3Fuqz8dguo43gP5LoLfcEidsePLPtDkgi19j3HUtW9wMJtTWt2HxXLNS",
  "key10": "65ZrHh28zFyB3oU2XqXAC8oD4vRvLEyu9KENKn6wYgUyqWr7kBbKc1GvKu641KEmNSerJXMJkVZLLeEEaDsUvDKA",
  "key11": "LaAg9NeUwXv4Fw3BvarWHqHV8ticGa5F1QjK3CRyFmGPank8EDu7P14udf8ezGhfRdXusSknSkr5TX3RSRqpAYW",
  "key12": "4HB8o9gehJxDU3AWLjf36CTpD5Et8bWQbCRiGoKYr47ynheZg85xfLzwtw9HrkH2taZP3xGxT58kaMDc13CDfJrg",
  "key13": "5T6rYWB6RHgm9dojbwRTxhLfxrxfxtBZZ7mMWnkvdfc9rnReTjFQB1rBJzKULB59ZyNfmAEJYXAwsbZcKNmBEoQ9",
  "key14": "2DMXN48Zq2tHkXoa8B7TWfSbg1hKzoyfNsf1AH7AxDEHZ6rZUMzG2oNMf89DXvv91kAT4zaHQkAwjSp7aXdmrj7u",
  "key15": "axuRyhahFUvzVbKAcq7V9pg28Rdey9D61s27yxZ3FeATs6j2zWAhB5dqEpF2MwippZ98GYiTT8P7fTC6KYhdMCe",
  "key16": "3sLE7b9uLoMfmXdx2j9nQHgshR59PBMcGzPT3AnawUZt8pjQXw9GJBPZTEAYnwDESjuBXcSDysNyj8HTiCiimkFy",
  "key17": "5EpHiBPXQRPCKpccE9iYo8rosUJ8tJd9N2wPyWt3XkmhZanR46Z7hCmv8e6tyNPpywZVg5zvhmKrzQP29GGjHATt",
  "key18": "25EAQQo7RJC3NAShHuS1iXhFz3H1ULYBWBMSqHwM9cSb8hTGkKeagExMSBPvNrQfednfhtaaq5wp8WFSUVL1EmwP",
  "key19": "5V4oKcSZu6edUexvezhwG1f4HjAR11syDhngpABRhdtBigUxXXZnPaTR4kRzuNXtnZ12o77BQcf8nNFpU6QioxvZ",
  "key20": "3NNLypUK4caStu1HhfUYLetMa1hFeK6XvjYimcaB3tRzHBZFjU1U3q9upAWX3x8s86rhuo1e7MgTjtNcExgwd1jr",
  "key21": "5eX4wyRGmN2wQHZJckPiq7NHaeUH7MbfE8izarqHcitP4vp2jEF3bfNKEP3FFrv3ZV1py9Auv5dzEknEeVkznwA3",
  "key22": "3HtAueGot3gvS8y4zbirumScoa61FAYVYxTUsbGo2azRhTMM3NGgcF7p6hs2AAKALBD86KUptRUorbnp79btLW4s",
  "key23": "YqLrXzXsLNGyVpXqZ2uWdYfZXiSEoRWomH8SEiTgw4Kqhy1HYEQAxrHGUH9ZEtxay1qKBAuMofdJVB8oTXeNSsk",
  "key24": "3nmAK3kX29fsuTnbaEMvqauFo8REnQrYNQnLJcUiELRa3hWJkTMK3WR76sYvztZ44y7qi6YcVKdthQ7RiW4s8dM1",
  "key25": "HepRV53XELiyR8ycrcr2nc3ksqTz37u3uMGo8MZRqwiiwNQEfYL6GjAayDuRGvYXN6YN7jXzP9JGuyzS7fHYZy2",
  "key26": "3ZkyWs5LJyDYDXWL6Jm99kAtSKUDHMDS7CKoMw4sQJS1SkfsPNkeYBWCf3fDGecGiQVTkhJcYsbBp2tTr9i89uGr",
  "key27": "2JrNHLFFPJk37sKAkpgRo9M4HhqePUv3NgqeFb8wdX4fxwzaJXXHuXgJNcPUsT9UbgdaM2T825xEMxWvjC8cPEqQ",
  "key28": "nWikwAnp4pwGNwMs67vQYxj1a3GdedwrkfaVosEXb8rf5mDJDaFX8sQ6sw9wnNg2CMueRTksax1hCANC1UVzBW4",
  "key29": "5T6WNjQo7LSG93zB9ctWkkm2rkVYPRRsZcdA9FyE2RnLoYJstbJwJbsKedbZBuksgAReYyPAK66AKTZTonQv65n6",
  "key30": "5R6eZtquaFa16L1HcdkepV6T1nuVkwcx2N3TdoYWfhNqFXC7ENGTFaHDvjbPWKBRD5djtHS9sYdkhQx1gCsJFT9N",
  "key31": "m7L3phQ34mPD883Pv5FDY4rUfV5sCi4zEUftAgpP2BfwuLAt5ZHdck7zry71VSKWHY8nbdu8NZKVYakUYQdtB1s",
  "key32": "3xzzcUDgZeLVvMWiD6WjQLUEy3JGsUdEmn7qk6GLwWwRWz8a6jFqAWToKqzTt8PGUfTePG96Y6j4SXCRuD9P3LV9",
  "key33": "z72X3DDdfggQPg2hcGGDbg5CqV3MizavRBtY663ioSuHad1avaELcGo2KJXS4qixmYB19t5zyAzdWJUG4GX1xdG",
  "key34": "21bFDW4k3NLDfQ4sv9Ak61MpBV3VP9QpFK7drnVDpdmDvZza8CyGHuHpedGNnTgrYqdGKVREpGgPKBPyHGZGDV4c",
  "key35": "4tbfxUaBgxee9JuUs3sukUxZvSXTi2FrDdUGm9anNzkXijY6rQMdgNP7krCXqQFkLzXfBztCbLPnfUeURT8rvm56",
  "key36": "tJixeUsjsApw25mYd1PL9zkqFx61EyvYKPH4Rg4KWNUSegnKodaMzGkqfZ52sab5UkTrsKoWoVh7mUWjmpmeukP",
  "key37": "2drgCYzVvVHdVPn2FQudMgyJw42wo2yvtMDaRSdQvqn3ozVFynKtsR36KgggkrTjw9hvGZpQxAHh5ZwpsuMTUh2K",
  "key38": "23QFUbsf9cn9DVFgiDwLPMCGAG3zdscGZDFDLFqZnt9JHWAJoCyLqfSCTm6BwWSMx9eCPuzRgRwCZUAjVmvmQx4R",
  "key39": "3S8GAvC9G6877NpFhpd59gEUsxrf3DuAesR8HZHgUfnkDvzuMo31UgEMbBczXUhVB2Nr6gs3T8WgEjnr5MaJbSGR",
  "key40": "4ihjnqXuiQTBen7UPmLRgTQ4GsfYSfCDn84gn1snH4N5gS9ansnTtk6EKqnhNwBnSTdNiq5rznhPh4D23U5UocGb",
  "key41": "34xy6JCb9x82vZ4WkTruFPyNDVLwtZ9YoW9vSrvUy6LmPWQzADSpAZJSzdBcX9MG6gFhEMEuBLW5AUzpupiCH9zt",
  "key42": "4hxVf2c2K9dddppVZ9ttWgS4uoLcqLrVxxR9oxbXW1Az4q1xH4yTFDFzTgFBpaqkeZuunSX26oR66eoLsCywGDyq",
  "key43": "5n7ZwEmdwYoKt48dLuhHq2r9s7kGW1xouNLhnYBPMcuNinWyb8TLSmGKkzoLwWb9ysmZbYqxgkFoi95oKR1fBrF9",
  "key44": "rGsfE4KeGY9rBcA36AhN6sUhaLAREy7vUzRewsho2M1K2pDkuLWuNWsVV9AffPjWL4k1PtrRcHccHitxJsfPLPk",
  "key45": "3Fkj4Z8CCnd6CCwNwKNDBQRAwUBJc4UWJUJuKHB5V1zT29tevc9JPnudSTKRTSxjmTZ3XWQbfdax9aA6hGtq7n1P",
  "key46": "2TbwGmworFj5igYLKYzMvDgLaY1QXHxteKaNgyK4DrMKWa2Vsby77MLti5mSP6qwPKCPWzAQJPBREMGqvPV49PUi",
  "key47": "5mKnHhct3id92M54trZCyciMkgsZUpVHJnhfMzKk8yZhsnGZAWm5XUXCN39KAvLUgBbfKzR3gqk29kzxGna9UmXS",
  "key48": "4pfuAqGRrY8hUn3wFMtozrbWTBpdXeXUzapHgtt45ywyPwzCfK5Vwsc86mH7P3YSYoWqVLnKoTG7Hj2Q1ynrr9Av"
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

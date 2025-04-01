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
    "3HHb4ZHDHdE8niquKH2QMTkdoF5ufgS4P76wGyZHfeHDAwHzTe9CubXBd6CKMehzVG1j1w7h57nNFZY27dyBzSDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auLcuZTMGiw3BzZ5uqFX8qLkjCEGYBuqvxXmNHBuFts3xmKUkfizeWGknALCSr6v3ohHjS5pBxjxXtLeoRwbfSn",
  "key1": "JZVJF8QYf3ABVxofrXCeihJZ8a9hpuxAcmboA6YegFjP6bcLWy8qpqJB9jWn7n9DNydSa4wGFrHb3ePWcrceweD",
  "key2": "4xsAGA6q9y2bojnPkgUrEUN2jnGPXeE4mUzE2CTxogpDgyn564GKc89Qg1az9mL7sCohYd8qNUsvoLAopcB1reJ7",
  "key3": "58SHGre7asgzZUTt6Pd3z34CGvTMFNp6EKDS65iUt9xMRySDk5Lx3MnBX6weSGma1w4CcjXZWMkfZi1j32Qf38gT",
  "key4": "2mJ41kopvML2zHGys3MySVLoZV8apS3wxqy7v5QWmkF8HZg9PFRzhkDb1nyYnpJAubPqRiWTvUBEMkHB8r7aMpZP",
  "key5": "PWFJfG1XXbzred4Wn8jUGGYCpGEbiWNifKZ93narkRFohfK8kwehtWQ46XpPzNyfoXWBqVsjWN2C9RkvVzjsnms",
  "key6": "3i25aMCFQVCqynxCzapVDvetyWp6EUd1qo1pyoxYHSHapj5bHvozbnmz7xprsjgHd4nHVvJeYvdsgqGcxiTEZTkm",
  "key7": "4oS2TK8yw372oCmgj5cEeLCTLEvP3f8CmZARXr1CFLNv8DVSTxma5oZPGN1Rn7UNPHKVvtrtpqumYdWCGMyvgWDE",
  "key8": "5iJFBngYXfeqRCLvVXXPWDag3yQgqNJ6GsCVoGsWp56oUqD7YQDeezqKqPYA15oaUpcmBTESNcCekqFST76d8MXd",
  "key9": "4JsCEVasAv8mFFmGcE461J3TKSVujWEif8nRSwawY65VJT74mrELcRJfm7M9XpixRUvDAgLEPoTKk8ozAsQoLxPT",
  "key10": "3k73FvEc8qNA1C3SZGME2gH6stjDYmrSTWPDGHhtLdWBDWZqcrDC9uNBTP5G7iicGJDuscci3U8PbHLRk3jNedmx",
  "key11": "DGbf5MP1tSV2dhkuzvehx4qM5mb5sbcnV3yz4ENnXdbyjLV9pDUCdAN6qgHdFFs38Z4urcU7AvntYbtqPyWSmyf",
  "key12": "2tEqQvc4rHUF2PSfdEJafABb8ir1AC3U9W7tVw8xgkcxQdzw2wXAFxvGRPuM9vZ9uAkfzbj7GQpP6u6hduddj6mC",
  "key13": "2Whhs6Ffgb1aKaWTwUUCEdng84UEeYYdpSBLYFTw8851BMd2zFr5T5M75vmmXVCn39RHR6wYQoDiaWKighxJWaPz",
  "key14": "4HiBoVAWLFjP6yU55ZoJmppzSkEbg2bcmuAN1257Zfbrjw6kWQf2YGwckgU2zQefjudMaHyk11XYphzKyNqNMHFK",
  "key15": "5e7UGoLVsFoPApZ9EE6uhYkKZqEzcHuWDVbRGeoXjaEKcUPfN1b9MpZrtRhcDMFPWYBmtabAFsJQBqB75hTxYjug",
  "key16": "57rFHBbmv6XvyWW42tL3YQdfCXAaVcEKyiF9c9PPayJqm8vKmS4yg5bfQ1cTNwNur16HJCg7ereC7pGUp93c86b9",
  "key17": "rUTLmhfpz6a8YCSdeonJJxxdZ6DzvzK5K48jXM5Zaf131kcvddkgrYoZfQEvU6fqQgtTuSzDKPctaAkq4cjWasB",
  "key18": "2uXcLm7vBAqcLjAgLePBFGMFQvzbW2Rik6ybfwJHaoNGBdXxqtVEaNK4k4T5ojcdRa51NBvuDWBcFEniWHvzqDTh",
  "key19": "ZCHAhZTpYtdocfMJyd7deM6L5ZLE2EGJwMY1fPQUMHGLT4AmQsrR4E8i86SqvLDoi77LutwBs5Ped6XfZBPvA4n",
  "key20": "2eTj4Y58DKDwxs1FJ8WxRtULvpkERiithto63BBwoY9MzDAN6yTaTMdMi6f1TtTMo8pX56BFXcd9HTYdYMJENKif",
  "key21": "5wns8iRNAgSbjKqBasqA4VZ4SL2YStkBrw2xdLy8wQpsTL68RZMcQMycf8uaGFD8bojW4j43qMNYaAZVJgnPDbx9",
  "key22": "5B6pEmvou9wrWrewxY1HiJ4d5UwsVKSwq3wtbq8zh8pKThDrXYRPZpJfVAEpdnFcQM5j7JRQJunkJc5i3fv8MgkA",
  "key23": "4nzWKsSsifdtPviY2S8jmtXNJHrfpZSbQdtiwGeftU2h5FS4ZDZKJ7sYU7mfTaq9k9tSXXreGuDg9dVw5WWELgDU",
  "key24": "3G3JY4QBSLKxifhkn1De16CUrY2H9JMqUkQvJvKag3ejubuJvHgiJKUv6jXjsVew1jmypNufmQJdsR4q9UGNv7CP",
  "key25": "4PqdR5dNh95WoPmCubUr1Yc8RKf5yKq7wRWpgxWsWhseQSpNJ9ZQP2epSRiv9LLePJD8BD4TmRs7CRFxkSXDgFPJ",
  "key26": "4HvSWwNR6bWFbLxNpcJTQoUuYdK2M8yHqxkWYvTXQ9psXTtGzMTuBLWQEGhPQ3NcbC16EjAfzSxwQAjMqxt9sZTi",
  "key27": "5vUCP8whkPnjhsHq2rYhVM3fohDJTTskL5Hwb9xYZe2qvUVH71aeJxJyvowSvXU8E5SF4E7srB273YVEXZXP8qjV",
  "key28": "3ShcesHtDLrQueK3Pa9vV2SfE39MXbJKqjsMjVVjU7SrMkE2pEWimCzZ16VYCHNLv7fr4wUJciKfUgC7cRAuqGdq",
  "key29": "4BGtBU79aM2hQCSzdW3HAwdb5ViJ5QsL2ioQ1uk7cHur3SUGvRXvgpJW31xbyG6cvLqYkvnBQhDfq91GcFPk7XAX"
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

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
    "RPg8gwApsawmaURnmDogJ7vpnwvh5Ux3TUqLMCJJSjND5NPC1y59pjy3FXRAJYerGg2ZmFJZnbsbbEcWhfiWWdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKQM1PNyBA7KUiJXGUgX4W6pDRh1zVcsM5iYdq4SSPJMT5HHS7Vd6Pjbt2e7trfswGAtEZJE57o6HDK8UfdVxTW",
  "key1": "522G96xjfWHMSgc3pb8HGgoFN5C2vCkhtMM3jnD9Qf7AL6oPuRRU9TB6rqqijRSbUp63KaL6rzwANQ8Aj8PJ5Ea2",
  "key2": "5ZvXscyEZvRj2n2tqJ4DMBUG3igiSLiYMPHAGj9ec8W2VcqqfTsmS2VCizyFjohSt4pLspTVkfMoAUomwK5vx5hk",
  "key3": "4NLPcgPxJrevZpDZ72qSLu9VNZRQXyrB2u4f9yHtRjUcaMJ86vwhzVTyq5bBsTBrKeqtYyGFnWSnQxsRrdVhJdeo",
  "key4": "i1LPkAVA2Hyp2jvsupzmeoAmwrEdqiToWYfCB3mQ47YPhKuAqSPXYx3bbkuk6do1RCbPMYs1FLXKTPtBcWCUuXP",
  "key5": "5wN4xLtWKnetBDKokJoiTQ3LCkffGQ2wcLmAp3sBiW7MdFtEo5spnJw2qoGt1EtJo4qPsPrtcjGboGwLBsd6z6BF",
  "key6": "2MtUn5W8RrjF5CFd7qQTHot4BF1hFTRUWLpNYwk2xWcbpnH4FXV8eh1eFg9MXCtoB3Zm5KxMShVNCLCaV3rHXzma",
  "key7": "2ReKn96n41duNLs4r9JzvxdbJUF3FPqBpnh6sKoYKMKw3R4WpXyqHgwnTonY7goHANnKYzowWf8zZWDvHg9CX6xQ",
  "key8": "4kDVLfRvmN6rJE5P5pfeKxoiuv6KBgoyUfyyepKDgV6xhzMQc4g97Dd6b2EVcMXZ6SYBzVvBNCogaV7rSjNYfo7X",
  "key9": "5ZAvGYePX3G9zFeBqy7sZheXsQ6L3VeAcjUzH8JATPH2SrR1yvBhz9XUNuW8FnVS5QtxaCP1K6z1twH8hKJP7G9h",
  "key10": "46bJhYwh5QKXBgom2RVyYvkZUp8UgNDyasyTC1xYdAWdrSxbmo4zCUzYSXFqt1hKsvvSD62eqQ4k7szXq2YG5u96",
  "key11": "4CnhfwXdoAxKFvsqV1HPYCfykMb5rfRcnwdk8yvyHtuioL26ZnbtdkebjvVm3rHHaWZoG6w84rb8RPcnp7HFJsQs",
  "key12": "4Rcqzbd2wLkhaKRVoBWfBQS2nkGyL1YteBz4PgQZRRxR26H67LHyqDczkNmchqTydt8Lw1F4JupbDHJ2SbS8bMpQ",
  "key13": "b1LNPpoxDqWhPkm1Z18QcQSgQuBiYLwhE7gajiAVSvJL598thRhfZRcsU5YSA3LHYeXUtcXZS7gYGtbauoh2eKU",
  "key14": "3mr561FLrMhqTkB5sx6YbN5ahaf1uq7woKMa8BG34K1rz1vwFcx4UQCMDEdQUGiM79uq7SuWELwBGWTx2q7BtqDJ",
  "key15": "2tjc3JR5BPjMZnuTUcFdKxbgwCh7T4t7TnEk7kqUccqv1Heepd73bKuMi1VERbwjeNKMwqaP5axGuhaHUgvUzWN6",
  "key16": "Qbx4RiX4mv9ZArs4gW2pmpYUAUfqzSqkBbhpCjfrAbKLPfanGGV96o1TToDnDKApt9vpprEuZyWSyzL34qJNNKZ",
  "key17": "2syxJyBhizCbhaVPqHM84qxWP4zw9qXRfdMgbYMLExa8cZTZkC37rCaKu51hk2fwzxynZ3n4ToR1zPUXNW4ugmpW",
  "key18": "2fhY6KctBPpJesXUC7gytvoW9yZrPJKLQRdqb57gdF4BYedYgzHrR1YDgwwWppfCjYnV9DvSLUAmjua2PBvQS3av",
  "key19": "4nX1FJsFWuP5mePZyiS46hQUBeKQ8dzME758diYo5ZfnZYqxZw2HBmStw8puwXQjaejimVgx2bYqaCZa3eKRHy3X",
  "key20": "4rZUrvjn6koNJQ8xf7bSstFowvkU9YSQxBHJeazT1GVFxSJiXWowZV7cNSRpHwDZXAdjVFQ291eNfJSAETs2CHsd",
  "key21": "2S9prbqq8if4MvP9jkP9M9QwWy77v6imwNJrciCM2LJ6dWfH9UnD9yDCfsMR1jtVV4GtrcGQd4pGKBa8X82ikTBk",
  "key22": "5eekXyHcpTcdrRCNNdbY85ysyDcxkakpVTMVkTbQ2dwtHTqeFYiYbG44GWJTPCCecAuWd8jqbM6Q2qMTkeuKSDKH",
  "key23": "4o1c2fcHaYSri5YQXnDYzpQKLpePYW2MB8ZjHxBTyPxnpotbGvyWq45cyzY5rKs5kNcFcvW14GZNQ8hNU2r8MHX9",
  "key24": "5VLsSct4WV2a4s9kpxwRRHWyjiX8587qwg7D7HxP5rD23VtNy6bbTybPWv58SD4Nt9GTpnFuds7YbyZwfmpw31bV",
  "key25": "2U4rmT1rhf4xijJ4XXh2eAeu4mRJePJ7HvCnGVzd9k7Ju8KsnyLJymWAhGekD5fFEKH2xncgNGfu7M1piuy4eczo",
  "key26": "4DWeSya2TWDXpg2g25zuZnadngiaKeZa7AcqJQxXKSzZNu858VtdZBcc9CgwUef2janNtfmqGwEbQuNsNiHRpn7k",
  "key27": "3rK444KFbsjYfyH2nTYBBs8qXCGULrzR1oh2F8PsAxoqx8ZbgA4s2CunYSJ2x6qnGKLFKL9oqoHUioHjuKD5NmFj",
  "key28": "2YRs2t4hbuwHH1cZ2hAshNdjC6FypfcoXr4oiYosBNsGudhmgPgBuW9WbvJxZG2P8x5kd9Duq5iuhhQjrSNn1m4D",
  "key29": "2FmkFH9gVTifKdgpYVuGwwXQ5ah5foWUtTduvbjU51N1ARX5Lt4ekEQgc5L1EgNByYXdYh5qwDrUPa3C79Me8Gu5",
  "key30": "45vaEs41xTe4QqQGJ16XwVme8adJ3pazzPR2kjDUjeQyASBv94zmbUcTnsgPXyrTfFVLWW5QkSq3qrADtxw6DWBw",
  "key31": "3jKv5GoBVvoeCU1Cp1ozGUag1asqTVFzZ7jfNfXrvEvZNAuFf6MmngMEYTRwxGpNCzWQXRAmjeWpKGFcvU4iLW6U",
  "key32": "66M3Zgg4aNZTHUPzCaNwzPg6xUeJQPBogCWa1qUPQsCxhmp7eMdwJ5yJVXxmW3Zu2mkndMFc9qaJvanMNmhNSGpJ"
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

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
    "5oPcdQK5GcoMoeWuAgLxYaPQEXcTwf5XWZBbePuTuyya574SrmQZ59y7cA3PxkkzsypUFWSwy38Pz3g8u4WfS1Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMFqXAmXJdBmjFNfBaesCsTyMkNVdcoVnKv5p3xkcuGbE21C5JAMZhxk1KkUT4jqhPH51X1d5tSnncFEpWFgzjf",
  "key1": "3CqZHod8N8e2u9AWKn55TwunE1FK4m6QLRy5sr2QZMboWWjFmi4HUMNkVSXPz7ycy1GXASEhAQFoGRVhbRCFVwN9",
  "key2": "2j1uGmoZGtvMjZQ8qoZWHDTMuY2LqidcnuHdX9EhG1BAZTCtooE1A4bGX4XzXq4pyP1DGpkANHHpdce267EHPfjg",
  "key3": "4djqsffrTJR44sdQ4HnAo9pVqgDV7QVJN9GGaMQemrx3zDmK3j78aV2AEbYmaKU6SNiMNr7iwUqz5oXAoVJKrGyA",
  "key4": "5VmQeyMaZia3UDeJAF7rtJYbwD9HZZm2DaZgumcYj8AtTZ2NHSsuE7DRejB7hrWFCNiFQ4kQoXXGujrXGSY9Usvz",
  "key5": "2d8PtRTHVTih9cMTXGnYRc8S162u5EFBnEfQRMht4MAM7EzsMqU4d2EtE84j5hvqbcRJUBFCHsxLn5xvR14GDd7X",
  "key6": "3Ep8jCU8U8FH4ETdy2qkSj4VPBQceanW9i2ZMqHM6Cenr8ZqSr1V5hnfvg4DR5yNU5SDgePHZixqmCnpKGAxpa19",
  "key7": "46uELdf1L8D18fv9WsxkGaSrRfAzAEmZkt2tpXoU9a4nUcyCLvE97t3zPcNEqPuSNoJwH7e4NrmGYigmXoT27h46",
  "key8": "5mvqMEub6iYh4AVdCaWC8Ga5v85obgPhzQrYajRZXXsLmEJHEZUybiVXzQWPn3pCqKjwq1rjTESh3HxBBrozbzJg",
  "key9": "3JjRD1hg5MyhzYAW6t8hAAQh8DhtrBVoQ9kB2JU7yMfYepnYAbQuUzmz1FXaUp76rBkvf555JFc55zXWbPi2Mb7f",
  "key10": "2vJ2VcpP7t88WjcUGqZ1E9RLmH8D9D75HFTFrnedFHagRMQVKobDPAyaxN4x2XsJrTQPmHi7tyaa5pxkdA731Lyv",
  "key11": "5Vt7B9B1QZxUMFW7pPLnFqtcUKuFYrVXzkmbWQ4FD8CESt5ttTeAzh7zBsyLeqftdAduscjoX4z32mzQVEitgmEg",
  "key12": "yzNvrjbinwVooAffhA15b3cyLnEVV5qifuH4uD2qdc43u94H5D6h7ujHHsABTW8EJcomaBmvjEcXxaSV9G17o3M",
  "key13": "5qq5jx7Bf2UuCiU7iw6BffjBVEvDQPjgKs6Aoi14UEHhWhCYmy8EjmU16mBbVAQWyRPMwm3Prv9UseYhJtZKovRZ",
  "key14": "THYCE1nRgxdC8C5r2EWBTbt5FoehQ1ZZV4B1ag3rU74XpwnvbCkdHfsqPhEdBgi19yCiBEUCiqcpg6dU9dSrFSZ",
  "key15": "3DK3mG7bZ5N68prKvMLYE78eHR7G9tK8vTozP9jbCtk4BK5BUYxSPQRXuvuVGudBdB24mBdKNnq6LsZKuG1g5viQ",
  "key16": "61ukdBHxCXw9JxZTEgznACqmQzbWhmFUqMNneC4Bwp1niKwKzaMv8QyhDuuxMor7fW368qDYsnu7Zpdp3bBavHk4",
  "key17": "4okcMcwLQozoiD1jUoD37LffupML7ycHNg3ZTSXVeFMhkoFcnx7nnPubc2eiMrS3SDgk5cmWHp7LY643K8mDSE2Y",
  "key18": "21LY2JK7BBiv4hmhbF6cv8SjoUXi4sqUTStzNT7488vGMG7MicVK2zNdAnEwGSdepp2G3rzU4qpV7rhCg9Y4Xxnb",
  "key19": "3f9S3Lxy2WzTKEswW56Er8d69pE8JK75ogzgWBtkHhAaonkJ1Vd3FCgNPQdrJosvH8QsuYxdAZ7kXq2HmQdNhWd6",
  "key20": "4WSiPsRhdqsAEzmVbLSjQroaNnJn4D25EsHMW5HCjyMVkPpT9HQo2xj7cyVytaWc3Qd2wNZ35yn92ivrPgnEUdMy",
  "key21": "35682eW4Bn3pyG2mQuBzRpGfJ6sSakyQ869DxWgmfcGmi4nzN5KLusAfaNDEwVLNLDZPE3VeyZvyUe35yP6bqtG2",
  "key22": "4ukiSH6kvAc3Lci8Gqp8iSR8eUkXUNScFZ9D4KEynG8fMNwbybdiBjy53fK8t7o28M7YmJta6YLtgjQysFyFPrnE",
  "key23": "14DskXgViRecuHq3c6x4KuNNh9QpCfk963otrzb51KRrkPMHUVMPLivADRY7nNcBMwAQ8sgQ4kq3nRApS1iYdy9",
  "key24": "2qrD8NEJqhSXJaxQjXf5bEiEd6EnKK5HWPBWSvZ3dbyvsgfNuzv4Rmy3dCG6pVRjxarjBZ4n4CaDzB3Ai2r3xqSm",
  "key25": "pAZGEe7iapj6MaResoearHFJedDWFUBSn8GM16mTvyQiWiF5ds3vz44KCTZc5Jk9DXNjnNdqfcPokZZ4kcxejeP",
  "key26": "2J9iQJQAGmNSVNkBgeETHtmcwEoW71zxuMKgdcU8Tzck963VBnMeX3v5LLjBQ24BDkpsaroHwZn64hBLkpL27uh7",
  "key27": "591Yeu1Hzn3sFAKdRFnqB8T6MYugWGE4RN2jbczyzH87TCVvqL91QJb2vpXPSTE5sBAZAzZT4Ji6LhwXdPCChXdU",
  "key28": "4o3xykrcSLWi9Q6rhEsb6jW4ghMR6znPRLk2fMy4JVLWRPezGGvd9m1bjCSVUqemrdVCDU5fqYsa9JngyRX3o5QM",
  "key29": "62MPwZmZtK72DSXF1QwFycEWkCf9g6mVhuiE5HRdjQPqFNwhTgFRXn2Nsx1MHQgRh2SdV373uk5jGQ774uhyCpJm",
  "key30": "4CWNXBw6jF3VE5RjXBY8b2jjCLpaAgxzMw7GitJhSQwUkMfWmddE11b8W8d2NKHG1FvcgMCncTbv2WSxxQ88Z5yk",
  "key31": "n8X8dLNuRa31MG2ukMyyNFwnMrr8EX2rTXfJRYQrN9BkUZYpyRgfQFym2QM19W1qC4XyskdBZQsEZTXFr7Jp7Kw",
  "key32": "2QsuWarG3j9mqaBuFPrsqiCPnPjULTZEzegHwwzXDkiZysPCcTLTee96Lhi46SPrEq8i4HxnqFzk9kSEZwRNq6Np",
  "key33": "AsrETqysUWH5hUUhM4yPiUCy8aFYGRQ3jDS59rTMe6uXaxp9irxkpFz47UQS4qvj55dxU1FUyrpvzNqa65H6q7C",
  "key34": "4gzx63mcMdRj35C9GvHTCKEQbgjPSM5mHd11YtictQt2MPhn84cSrZ7B7Y5ukc3rEMXZGUbCHRe9n2R9KJCdqMPP",
  "key35": "26aJ8Pk6SmEWkGQUcHKF5UcpVTgpNRiyzhmXeon4VscpTPR79Ce1TbzYiKGRCVC9VkmRKiwcbaW6ddNfmJv41e7c"
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

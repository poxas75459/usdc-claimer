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
    "5zua89XSgUkjZjeaWZuYD2Zm4D7TdUVY9CE4w1iDxbJQVNx7H28SwKVNYTAnRTEyCCTURS5k9XGxWWVHhqaWwXkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVXnDGAFrJYEVpnJ3giLGNYtwZ4zhaz3dSWgnQffmVwAXST6WRw5zBtd5RiNojuhASzf1hX2chumJq7adeKqFSH",
  "key1": "2hyaUKc6d4YxvhDZuJ7btsYrhVfScvPey4BhjBuN5t6TveAkL2rqUfJZBUHxTDtRNQmZMYvD1Qu25ZPYDP8RbwmR",
  "key2": "2CddSKcfnxwJ297pX55teSV5ncBqxKJ99LoRBBSzxdT7QDkvt2LrYAnGjm37qm5CDNVLRzMVY6PBLBH4m4oQjP2P",
  "key3": "27XrxxZFjY5Z4msRTEA9R2NWuDRdEBQCGn8VAJ3y5Yo9X5unsszZGUrNZeqfd3JgKiGHTEVAuhJ9PHAY19rzQxaN",
  "key4": "5DJzdcSFRhgSpzdKLM9HvKHbdkcNizuru1s7qCGWMZbCaeCr7DyfQmcicUVVp8zoxAaJkECd2dMkxqsUBvZvxKoh",
  "key5": "4rfANGkFXcXEG9nf3Lq2wCdY1y1ujc32PdavTzmaKFHAu3rsqaP4VAn2g5SNU38jsehivzDrxabWiR6yu1EJzbcA",
  "key6": "467VyRqqqKY51ork6EQnqVX1oXSZ4kxA71N1dxTDwTSRqN4Ucsw2pq5q6JNh7Eesxe3EZE1LvtgJzAMxPhGjq7UR",
  "key7": "4X6eFJg8utNFfGhgUMrJKKvaSB2Kk1g3c2DSpAZAZdxwMc55tk2CcEiuRvn6ZfyURQmmnMJd5PWTsjWyYAo6Fz2d",
  "key8": "8SF6C4mo4GNrkFZDZyAFooWjDoCsZqdvmZS9RBgz3SXmHnpcXZYaLwPCZtExG3pq8ReMXzBeSQG44U5HfchqJFk",
  "key9": "37apwQuEvNfurswEGgKpBGJA8e15veMZq9cSiAJ9DW5HKZbR9zY5kC5DTHA92E8nz1mEu2K44qmDLFQWcUArUTuf",
  "key10": "2GNBBmh1NhwTudAxF3ZLQkvsK3r1TUysVeZCfLDohoruVFnWBmW7Y3NCWZNp1RkUCEemYJN3pCXoZb88ojWd5y4c",
  "key11": "3eQUKCwNomPSTnwGYKFLKYj3fFFYSaMgUgCUceHHmeXv4Y2fZcMXQWYSn9hyx5kGhcWnzpNa4nFwasW87H6pKJG7",
  "key12": "55f1D7t7PzL3wHznTqPpaNQyAxMaaCA88FXjY5YdB4JNByHXPfRZW4xZ6B2mo9vyDPX8DgVsEyAi2V3rzBwgJrHa",
  "key13": "54yYMuBHfEzMfrKsEnPCXWFJFskRFsV37vLcfoiuqD9c5EJRP2DqmaFsHVJ7kTNfXiWk7ACvf1ADB4CiupSEc4BK",
  "key14": "5dkzaivPLqYobuNwE6uKnnhA8eRoyqe9qdKrA8RPasNYeMRzrfoYQoVJA1zQR5g8uBNRCt9G6N9sMVeDz6F3joiZ",
  "key15": "2hK3eC5HtD96E7fKaf5HcKQs6FTFkPCpBnNMAySdnnUziXQ4Q2uoUhQ5e8vVBzxsuHD96HrckWL4Up2zHBwXMDpR",
  "key16": "3s7TsKcUYbuTNdtWKfn1fA9ZQhJoxB82gHTsxwnWtoEq5dS7Ar6RE7CEq1Pt5i6y1CPDjJnMtQgeZ3LRmzSxhfnK",
  "key17": "2Ps8rCxpwpFUewxthQvmaqgWkcmE9T2iQzqCcs5gkexScxA9Li669PNi7RQWx9JhHTzHqMDHxikGt4Xerb8rDhfg",
  "key18": "sJeyRYkXsYkhaDUJrv5Xoeda9yrFjriRuz8vGSoh72HAM2nvJL9PLCBF1XRFGkX447jmcEcBtWkKJ734NT9Xtmx",
  "key19": "2QDDzJM7R6c5SUj1BS13L4xr6bzEKb4dzNTtkgbnRu2ppozHhteKkqzy28oanw9BsXwNViDeUMGmm6tz5iZ4B3T",
  "key20": "5e8LSttEb8gxe7aCwjHuUTpcyeEJwJBCu5rA1ucgNyjj8S7AUZMt2Kte7j4CxfJ68K75khYdyvFakSmXaBByLHVr",
  "key21": "2Ed4tR5jKrCL5PG2yooEiFB6L7Z1TBvJbjZqdHSBTvyATzdcUo4QrUsNk1PWVWzjfkbb7R3DiSaKoTsThMpGu4He",
  "key22": "2FXyrNXteGG3MaoMbXAQitErcTUB1sPVtEo6FjdZZ1MjotWYrUJUJVN92FDML6HbYUimGni7wkXQhp2Ft4byrTfN",
  "key23": "5GUMYuAycbq9WzECLzsFbkfDTWmTUfrAAyccoj8Eu2yNfNSTeZcUaubvMXb6m3sjkxWWZMXCb8DvSxuctmJ1jNNi",
  "key24": "Hzp6jjXEFnwdfQcrQxC9EfHqaVdzMnSE9YDPR2GFQ3ChT2kocoDAXX7HaXm7wg1owXXs8VSHrMDbsJDBxudj34D",
  "key25": "5rmjJfeX4B2ixGQADCLdbcXPT3wB3RFdRjZEpYPLNyoAmvyre6urhDdhbfVzreyptNHXpgipep313NfgcBZ4mdmo",
  "key26": "59B9AmnBXyeV5gWvczTXK9okxJTyoiRpsiY4qDXfpeLiyJqZDzGWumLTR1m7R2aL1S5sVHe6fyDTLor8LnGiCMNE",
  "key27": "45VAgnPjmMEwP7FRFvJMdmp8FiTtnVQ75SEA7NAMQRXjMz9M1tNc7Hsac9NpnKRpCp2rc9WrCTPnpKTPYE1QLpR4",
  "key28": "4MXYhcqAK9wnX2uiTFyAxSshYPW8n2Rh1N79fTRMoJnfHsNrnhBopGyNeEHWsBory7LcNf62j3ZhqaexNRCbcjbG"
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

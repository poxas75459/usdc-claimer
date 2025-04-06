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
    "3rnE6QJrbhqGdT2anmdygXmfMPwwYs66XT2YqTKiaFXcYcSDL1eaRrgTT6922xSF16AbUF397u4DVxRJkk3nNoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSAQUj5yQUj62EMceW3zhVwS2oEx4djvhG9xeSx8jMAh3Wnbb4tq4gQ6jTGE84HmNiFXByaWwVMUkBSdB36DwMb",
  "key1": "bMtU82uUPep1W7VQeqbmvWkZhrxDzHfkEq3kH5TnjjtQqyrkJvBnqoH7bZcWJSRW2fgpRMf3ZNfBQfhWc9dPVgs",
  "key2": "3ZQgVhMYUqoLtzSfC2gYbkK52Vpi6oh4Zo9qUGkjLdb9RRUcqG8QvqEcJMFSc8bthwMmUBtx4dEjvSjfYSonSgDX",
  "key3": "wvhAWBXfjedPHZMYjAVShJFBfH7bWmpASpGmiGPcxsdQEkfAd7XXtCpsY4jnLWZLoEYADCrwva2LJgL36LSTxB9",
  "key4": "3P7yj33nkrRgG7TqbEHpAiAqnFNUHVNYFxq4t3VxSoX15RQVQ2PV6MhWmyuDdysipDyiSjA2GXrRHzb58EXc46Jf",
  "key5": "5CWhPEjH2VLK5cAd5D4SbTK4Ydn1MR53M2gNP3Jy2gMkoiWKpzLkosk7QHUdUtjQQUhyHtfSQKCucGuLHDqws7Ds",
  "key6": "2ECwfgwCwViR8Vb2HC4QxcNYpMqDFZuyxCre2oidsBwr7TzTMxvmUnpBYDKk5rCx5HoXeyTNrhpgodMgqpVHfPHr",
  "key7": "3gWNrrGfNSFSXHYSLHaZ8sxkf5tBnuGP2cSwsueuv8MVB2y6WG4K7CULrCRA1JCRRCy8Qsh2ShmEUnJLWEVUVtc9",
  "key8": "5zEPanNuWreq5csHxJXC64ZezGykgGDRSUSmpyUcAomsrWbXFTFUujKeKEk7yQ1y91hzHrxGXSkdiETH6moU69hS",
  "key9": "Bz5tZTNQ3JJ2BXR9qhbm2wkL8K4m1PZmWjWUwjudqN3Eq6vqgCahDFKY45QGp3d1SaGdDYsTU1S3yDywzW4KAWM",
  "key10": "p4gAz3gLPgYUUYgziwLy3nSahZ13kuQV2VqvgzwYwnNieWL8j4cqfztExncutkjyvNPWNFhHAGz9RQA3mHuSkDU",
  "key11": "39XqpZ93ii8Wd8TWY1dJe5V5ybLDByn6Bc9MaAnmNfw41mb7JnAJc1EnEhmnmrrWmK284fjYSruQwZ6VJWCuMGzx",
  "key12": "2zgj6rd5RgoqQspsBkwTBsK7hVcj5GooRQFUh6cYWZ3Hwb83tPgBfp3mhkJZnUAzk5hNd369EfnTXYx7Cg9PwzyB",
  "key13": "45LwkkuKwCFQ6id24Sm6WfgpF5giwtmMpHqi3QuWeTWvQY1JmbpxDDXKTua69WRF7xYKcJ3LBa35S85o5GkVYaYS",
  "key14": "3SdHgTFu4TMrkrGkErQZSPmeQhe4R65ctSiq969sQSqKHhMYxMxa6ivtehCCEzLft73nuKkbHR96qQh57JpkE4Fq",
  "key15": "2V3MzRMrRCoiGVCVMDwNQiT7LjhHre59T6eg26rbm76CmSG12uhv9CkeiBHy4cuuD2tWxzG3G6GbKsC2hFXNb4Kz",
  "key16": "4xVV1RGnygAN1dDc3F2wc9ycjfGaN6vPt6DT9c8oYWPPBTtnLgCqweWSUZc6tCbBHXzqFE74RtvoXbqcv4Ps1hRu",
  "key17": "48Q68RffQs2aZuDoT9X2BdkSTry2vTE4ND3XaDM4nUs8YKAcHWEfUfdzFbHXapQNFEhRi66c63Nf2siMsES5rsVd",
  "key18": "2J7dgGNTLvbtPyotaGNALoyS9k8bjyS9aCWmZwMNnndAUGd2XAYzouhqaUUeyeUxcLdkAGhiEKdWoyxqrd14G6u3",
  "key19": "a9F6vQf9s6SpGuFMrtwxcPzuFgpxi1iNjkmXYSdS6c8WzFguvvanWLY58sSizeJXQQCBB6juYzJ8CQExtjYhriP",
  "key20": "4GTBEkvfcpDBduDwniqoeAiRHg1Js6ZLqTCUnf6QngGjpxBi5mGGcfzFVU38qRHfzgBoywPP6NWY3dTXtDozTs6f",
  "key21": "4LbTuXBx5We55PBTLbCj7uFhYDabhQJ5NeZ1cehebBrgWtepneEYvfKm9NJBgcnfXzxHdLthPD5kShNvrSBcTRWd",
  "key22": "HRAbfBFTFtjXagEC2F5qwoWmorRUemNGPs3AE2eMBZrmuGGmkRReDWQCRqi3tVfQUq6iwuQ1KL7Dh7NK2xLyw9T",
  "key23": "3JgDNxfyy5qF8qPVxFW1JeUpDH7Ad23UqW13sxdB4vwyMenhbarHRtCDSVr273WQsgYsSEhf9KvA5BSnUyNZj4CG",
  "key24": "2DGu9tPCL2FcMpFmV4fKH1fYX3NaALqqK4oPrzHcAW2JZ1G7XgTWGADshFv1CJ2TCiim2jXKWpec3htLsf7J51HP",
  "key25": "2MjgoWwaEvfEerztJnCdVThLUq5KZVp3XSvsxc1fPkuyKEDZbWSnDcrcG3qRiH3SaBBX2sJMp7YEvdttSA3ZwP7w",
  "key26": "32NHxnPnSYthSSEkuWFnpx6TfuFWco8ATFy2WYPxJru7PBc2U6gzkc5wv4g9TfxtPkM4KJJte1f3wCRKE1GBAQD2",
  "key27": "59d6sBTeuASTSbDDJXFmKRnncrN1CydxqvtwLTJggDr5LpybhWU72XCpV5iYw9uZEcEakjBEqKX8Jv39epeszWjh",
  "key28": "94KdSivChDAPzuC9nCMeKBa5JY6yAD2iVHnmCjWmiW25oyKPQimfo6QWoBxFTrWMn1xjgbApL6KcdjLwLq8Abs8",
  "key29": "3RnoooJjtKake2eJbuH1gqiZvxkz57aFFoDmnBFQ4poStS2rUAsLQEBSWwcMFSNvdZpcRKjjjvn2sCDPQ8fpRQsY",
  "key30": "4ujWS5hBji9DPr4hpM3RZYuHt1xgdyhPS5TzMXVfgzNSchnkrhP8dndE5LA26LLg5D66AfQLqk2xpcYDZ73pyEkw",
  "key31": "EftW1dgxJGX5rdeXLiQ6F4JqB8JdSshbBVpEbE3uCkBVgFaY4PNqoFer8YQkHUbtJyHGkMCgoVnzjBK1q21ymLD",
  "key32": "2i6hNfNTnjdZpFRnk7zM2gYgGMMpLt8S2ZfFybaRbNTqJyrj8KoRPhTwPaJeVbWBoauniiwgNymjNjTT3VEYK6pq",
  "key33": "MRG6hLwLcKkRZrD5HNASuH3gwt6B3jnp5EpFCG1nanh9JcyxTDAumK9rSeYS4hTAeZaYVhQh9D6KSpLAPC5R66G",
  "key34": "2dXPnRLnaUvht5hHDPqsyompPSkQQmo9SRacYth9yRFrKtH6j5f35kH1Jz45JZ3ZxcTbTpmuMhpSqaxJeCxA4ob9",
  "key35": "FHng7HA9eLV1N1wePmTd1ZWvE9NTZXNekrLaojyDnd7bfAq4X7NNZBmtiPLRKHd18roDpojVidhY1DeZdZ8uhAT"
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

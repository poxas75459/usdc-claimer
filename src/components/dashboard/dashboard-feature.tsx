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
    "3gmMo9fWviyDf6dFKWZ57E515PpytmUT1Yc9y6FfRj9eWDWddD12Qf2dQ7ZDm9FzKa35mMLaP9p7haDdYhnpbuJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451Ffqz7Wxj1CCSUXSN7TccfF8gemZ9cwhGKXHPtEH1AXXJs9vXtJz6i6v7gSPgspBk6qQ7XwgqLwykVVyFoDCHy",
  "key1": "29KwVZ7Z2TeUEYT7hZMd1yi4ecPGuRJk7ZYjGMgAdZK18mAQMQNXmAukyZA72pfbguvxNWooCugx4SaJgzWvm8ed",
  "key2": "2yyfrjMyFeMCeFHSMAiD8jrpzhAYgGDttZW15HRecTT1ErVqDyj3F3aqeZdToGrMakk4fnWadu7N12G6qoAzPFS7",
  "key3": "3xP8DyuuiYx2PjPdxjLJCpDGK582m9eH351YGCNELGLHJEA8UorqAtKScrtLCT76EpTBPBYa96Urv1uLuQ9c3XhW",
  "key4": "4vfTjPqfj5hGw7b8dKTmrAjYUUxWyVtEnBfxdf5iZuWxWx7wG7vYT14bqLvtuiM8uu9LXVWqVYdzFH47C2iczs5b",
  "key5": "5ZyesTDaBqfN39FWecJbPmTDYuASgH1hgTbUdk6FM5P39AQ9E9Y8wddEc25rt4YvGcKoFCN1eQBqPVnY3uvc4GnT",
  "key6": "27PwGmYWxVRPpyyiV3WbcXsRh1JtXNFem3VrwVZq7MdGP4i4jv9YUqT3qJfjiFyjehN6mC49WW2Apv4rWemKz7y4",
  "key7": "4EhJpC3RNJGowSS5AGZNmJwrXNoiETB5qWVLnRHTdRENtw3QwaAX264Q6HwYQFjuMNgF1nF4SXY2XAzPKaRX2CS4",
  "key8": "5saiAhwQJJAieXvmkmZZMzLdSYWRBefCohhWQXqkBeuow2YuhpxuQFuyVsmpSdAWM7tUixLra4RZcpZ3LFDrxFmQ",
  "key9": "2f8YuS6Gy4spNBNQBqZxAWBGwAb6Bi8KTSNzo8FnYbskpvq7hRAZ7ynu7WesTEUo8qHciQpzgXaKFjjnn3YuiFTK",
  "key10": "erVEvSeWkssmgGG6NtCzFRztGz6YDUHgub53E1QrdkGmsm43YwCNSSDUUy7S8UMzenNzyySzZuvFVQxRy7tuGSv",
  "key11": "4LQfq5RgVkX4ssdoAjDmVJnq9YBJr878cML9UWx22cA6nSGdY6qL3uq4bXaE8tG2nZVxhFVrW8dasws3nbAtcjLB",
  "key12": "w5jcVXGuE8phD2RPXwK85evKQRcaek6CwCqvq8mRHcbDX8Bq1gWnGHrSgHgwvyhbzHZuMjVs6CkTs6wSTnaccec",
  "key13": "3NgCxkARCvjjnH7ucLNWKWSQ629AshCPRNbpYSNBph4oUtYfj2g9MCGjAQxjPDVdcoyYDafnbNv8hzG7CuZsTVGw",
  "key14": "5WYQhA8ocW1xggAngsfYEgenPv6fFqFMdXAnWybaGpU7UHPnQo45j3kfK76Z4aaxqRdzDazdRTiHT9dDQ5VXa9Dp",
  "key15": "Ak2PSoMKCzmrV2yFMgE84XYYmtXUtFYtjAw5e3yr3rUSp7LchRKc2eEGFFyaWvU5W5hjggpdUVRxKmWLdrX3VzE",
  "key16": "2ngwhHmtT5nP61bYEFrjpn4ALxMNMCKWEVA5pRhoZhtkyWL9Rx8r5zzU2AmpLn6xbUsd2k6WAmQTYVmgrwXtYSf9",
  "key17": "2XArYPJ5FhnUFSkQnQA26KiqDtyX8cDFPUJqgKpVK69qpQoR8fGB5FkCxR268rxK1UZHGGQDTkzwno1z3sJLFeL9",
  "key18": "5jPoe4rpLWKPgFs6yaqSsRmav4YHva1e7mHP5dUKN3F5zp9CZERMzSQcrQEobTC5LxLCF7T9k2B7UGjDgjCsGx9u",
  "key19": "31UajfV3ZqhzNwCda2mbC3VHrPHAAjspe538HXHSpaDXRpeidYq44oaCCnWqAS5GUWnUbawjuq1L4CwGELn96Uah",
  "key20": "5pmsq5JoCYq6Zdc5Ltk3CdxrUAb72PBFhr87cZRW1F5HxMGPPFcB6HJRevRbt3UEy8QTa1aqiU66eS19pkuYckMj",
  "key21": "7dxk6n4szsSvsem116tcXrA9CGWMViz3h7bYFoUTJmmcBrXJMwnZhcCE7PHh3MGscZNBuv5MKkYK8pAyhAn3yU1",
  "key22": "3ZmV9bmLcJR7M1xaHVPWqBXSiQ8ELME9EGNN3AWJiyPHhEPkSazYdJFEafESyS6QYFhoiGZBj32mHZVMyzAThsPa",
  "key23": "PasGQN8AZ1dB49fPCJZSanVrYUWrWmQh9d1oCkPTkNo48TyAncsdmo3WDjiznX9oZvSo9u3MJ5uTtVScvmcfeyS",
  "key24": "2c5euSAmXQ3Axmi7dMKow2bsaTxJqsFLLVdUG2JmQ9ABQurrtgGNESz6yJJuA8NzBC1vxFokQ3JqTLRtjFtbLo28",
  "key25": "5RRaYhFmsnbLsCoktVHy4Y8gnRKuTRrttqTgY17UJrysn4CTZsoyAsRWgyF7CWMRNxWrVxVKpVCgwmubLoNLydEX",
  "key26": "3XETirafUjTDQS9fuj7mC31xbsUkUW1TDRzfAWuQ37UPLSdEpbwaX45H4Yhg7PwqX1vVRuPDxmpaUeJbuhMLWaXW",
  "key27": "exhDKQ3xcNGvCqoNe68azHMXXvLFFoD95FGjyp9tehd2Nemcgoph9SkNbFxzp1wsoYT5cRua3QaTA1rZYNtUWT6",
  "key28": "2fPZNb7y5UhSGvHyhwij5KYF34ojD6uxnk7Ay4AA9LVrp2wAHvMsHQbky2h9gu5qXbdtEVjDwRUmESrJdGvbMHXc",
  "key29": "4Rf3eLkF1u2vTHcEs7ifu4b9dUwwGrxFrAMnYaYbFGokfobsiYT4HuPuhLMuUAgaRYND6Bz4tyPSY1BGZVpUTTd1",
  "key30": "5tDgTvpE2XiQAvXhD1WQ2S2epVEif5kqifM1hQ7TGP8CZUXQc8xD6cnYxUsN4oGfcSikC9B6RbbKXkVYNf6cAmy4",
  "key31": "3gu6WrsCUAnhQMisfnqERCU1wtk6SgZrWwwf7pfvov5vMWS88GmFG6jiedEjaHmBM1kdGSDdRbitv2nvr9c9mxRk",
  "key32": "3iyXsrRKNyxiecpuNjgsX6cZ4veYLnn4T9m4Vsr3AmXJDw13RQtvh2WdYd1QZyTQFt25234CuqKfVS6UFAPeZAb5",
  "key33": "5zfPccJU2e6k9MFFxpcsXJdijsV54WiT6EbSXwAeDfQEDpHjYNKQEMyf6KsMy1VEBYBwpoVKpzbD1ebAG1dmDXHW",
  "key34": "2PLfYQwA7G4cJADm9NG77FNQWFZdy8jcindcaicHu3kYVuFqnk4cgap9iHKvkEXaEo21HjftAThQANj3v1Qc9gR",
  "key35": "4k1hjPs94s15ik5gkR1pfiVGtVr7YLv3fD3HAedAtTACRsXYVLGoqeHMPszvixvRtnYbSPAetVbh4fhfEGhBiWD1"
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

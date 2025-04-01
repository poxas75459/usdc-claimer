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
    "7uzZPDeHJkwEESLEbED3tRJWp3hUqV17LCuUib6N8tG8iHnqHepf2XUPyKRyKeHd9xbuYcUv6kj1uA3PGk3ubia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "grmJrD1fw9Ziuq2FWi7AHJJ3qcQmSMi3f8sPgnshbiAUuBw8b1wqKmBfwhneWAeJ3uqVZpqmX7WWJZF9e9CxVEU",
  "key1": "4Cer8qChHGEEPRnLgJLLr5SF8kdgStvpJviZLuydK8Sk2ektjDvkm6b9efGLxLqosHCKUeM7A8T17xS4gDbgZjVY",
  "key2": "23TtattkE6RZoSZsTHvCEEpAu8XBeNQEhFbzL3cSg6PeMGPxTm38zui9qTqk1F6BPwhPYHD4RkVbNV1x9Za8KeSf",
  "key3": "3VnFYR69TuqTVyud2wn9sy7ByZbCQDVbg4gr8r8AKUi5GNayCmApAQpg4WLyhMHgW3JLA8cQgF3dgjtVUSN6vGtx",
  "key4": "48psBhQ5NjiUhDUJErSXqHNRG6Kbj5GfyxfSdiRHWyd4vp6PUhuv38Z6mr6ud4EgRWyS49JFrjQptJLxP6zB5zck",
  "key5": "2vjAbFEgVcFxPgi1t8vu1LkL4dtnHMp4EU3Ndgqnvms3FBktE38SqoQkC8bgXQi9hxzoDKw599a3QrRXvoTRpq39",
  "key6": "zbY3RU3dWCELstPbHbuqFT9As1HdQx8DfK2uZ2o5yU9uZzxwUsPWqu4B4aaeHWKC6hVdveyPG9U4CnKXiQZNmFt",
  "key7": "ySgbe7ycGjf4Qu4RACZjMgxmKiqpe4ZWkCv9QrKor1uUPLnuKgnJSiKqTnpJGgnUJzTMnJVkHUUx6sVkRjMMeXS",
  "key8": "2cPh3dxMBjTMkzAh28GzWR16U9ijqJesHhQpEkcCjKc5HndqjRSpxaspmiKLMLe8H37HRxF99uC94XkVQVKSYC1o",
  "key9": "5vJhAMYoWyUPBC1fvJYFL5TEYxsNAjxigPyvLm2x6oZ32scWeDv2SfjtVerP8NP8eVeJjZQgyiP6TnjkzVFCmFEB",
  "key10": "4aS8ApQ7nUpdr3moex3rfchHpWoYteKSPe7YqbJAFMZei6SX1b59CNqZ6UnajAo9aJvwbZzKPqTKRaHWAjkcV9wR",
  "key11": "3S7Uws71wNLmgej7vt5LjnZeVeurEw6TszT1353oLMbjDhJvuNYQMGPSUMkcsPyRMvxDnQfvoe8zxihSTbNGd28H",
  "key12": "2wqAxX2XmEfntqjxNjWkD1tbyexdy2CkpycfPAJT1bh7XzXsBRVK6tvyTY2HD9eVzb13yC72giWQm8v9CN8FWDT3",
  "key13": "4JjTDawYMtTQG95aaaxUUp7oCXne7UtvSzpLHDDrZNcKQPHgN32M7XGVoYbH9cqCEN9U8N6p3bszxCKrk1BA6zx8",
  "key14": "3bMLZBcLgbLrZQHnFjGy7MCiVDsCmEUicK3Z9P5YdwjR5DMXLs6Y49cjph2iVjfA1uz3N1w8F2jxwT2AiLJHXgD1",
  "key15": "5kfoq3NDqHnEGJoFZ2bkHMtH7YPwosrZLaEaQekaSq92C6DMWe41R3T84ZbigwRTTECC9Ubj9AAPLRqa2PZBPbd9",
  "key16": "w1zoVGTzmnpdMW2aEwP4owiGXg8idCakCUWD3kAf4QuL69c1AaRMQJkV8kd9oDB2h3yXnxbDH4dgrhx3KTikqNa",
  "key17": "237LJFseNQfGEXGZB7YrPMVpZkRwNRgndA5GZzr8CT59P3jpyhZWKjQYaP9ZU2UXXiFGqpLcu7JZYQYpg7rAEAha",
  "key18": "22aRyZnzr4aM8R1WveUjG7SzA9tZKkbhAg3x3eoGJtDDcdvhnRB7QsGMwmHANgc2jQBJdKCJz7stjBqSpSWZ8j1e",
  "key19": "XYm66R792DkVjV5X8uk9ahLFn6n4JpNg2ZEynRvdFDqxGch5oBawsFnosevAmbZg5sMtJDn3oN4PvotxRUcwdV1",
  "key20": "5p2FEmFSLN6JyTLsZFce4VEytxfxd1y92jEiTNywpvbMNkoAeVHgUR9VDPFyFgx3tMqh1XcbnTft2zH1XABnRRkt",
  "key21": "8ATsSwQkccSBnrKUZGTTmHPxF3ZZ5rZwY52w3umQo9XKTT56sF7UY8JfBFmpWAFS9j1YGaxcMBVpXW8e3S65kqJ",
  "key22": "4XtShQ537CujVJZsr6KEPMC4MawCicR7dxmPUg46xBZKLdte19g8Ta9WGhbkcGh6DvdjpqADPF5uAZstFSdfTNc4",
  "key23": "5RLAyJ3nD7djBXu1opgTFSZvyFdpJh1r5ZxfECW3z11Ue3Vni2bxzrYjCh2hJDBQHVQC5R998kLFMiPGX9cHExc3",
  "key24": "5BPLcPdgXFLw9oULc7SUshxDHdhGUYgNpiRh2MpvVjdCaA9WQSpoS9BRZ4vJXCeX11khmSSByanLAbDQtuEC9ddf",
  "key25": "2W9V6EriqoJM4KSbpXMce31ymVXz3QgAp26rFz4arNpyvcG7vJvnpKccaKLX5WY9Zv8ShS66JDLauTdx8oAxrxkn",
  "key26": "ixkAb6Vvr4Tc7B7WxgVjcDKuYtaRYHsk5nUVxMQ5ubxYM74d2bKcJqZxW4xb52LK81TEqgLmvvUKL69MLYuDFa1",
  "key27": "43ZCxsBqXu2Qrph12Vc5Vh5jBLidozXoYzo9P4hKZa9p3FPHqcGXoiFUa9xpcGYmm2153ZX4WWR9jMoMuLGBL4QR",
  "key28": "5fztHMbEw2ayCKp41Hc5DgPb6Xm6UHp1tWuNZUawTGHWEnKn3zsDqx3YJdnJ8YFpDBUsxkLfLf1yqADNQ9iuJek5",
  "key29": "28BjuT6tyKZs5aqzHZ6mni4zTdFxREqJB4m267g77E3eYpos6A87HNDUF2RBnxhJcmjhAWg6ZuCbyNzBxYmcj6cv",
  "key30": "2vLaANmESMGsnYzGTmbKWvFEQYunozUQtTMvFt5JN27zGvgnj3QF4Jz1f2QeckivC8NwXrUZAJjEZW4ipyxuZ6S2",
  "key31": "4f4ZYhrn6R8CVeWbc8adoM5VVygCQVKgjiLoyF2qG4dQgNAvBysaHrLEQkCVuwdMtuAcdAcFHrsJKMcx6gi6UFi3",
  "key32": "47WBeQxxR9EZuEdtmEVEE2ocHvcmp7KqDu3vbtV9LPuMber9kfzBDT7ezfdeU3VnWAyyF1QjbgHs3dUQVqt8NYGB",
  "key33": "3SWZ5QMNVddUUuamJQus3AEZpfntebVn76oVLMVXYocTVTGcJzqdFttvgeU54mhLA2Jzoc5RyfSFVB82EGUTbXrH",
  "key34": "56RfyNDnq2a2ss8HmXJCsKXFGrqPof8YqHhNZAmiHPNJUP56khAdLDB1ANPQmMdvRwRYS2CLkJ8EwYJStejPkYuP",
  "key35": "zZGVfzee3cHiv7MPvh4LW17nxHuRc3Ps5wqGdh3CuvS1knosgDHWtdYKX9hXsS75XXjSMJr5YNjs4S8sonA9xVQ",
  "key36": "2jSK7zw8kuHTyiFpnLwkAKd6Et6W8JcjSc9twdr42EE8aComs8YNpEQ9yBuq4AfbMXPLrBPph2PaZuWH4MKCux9M",
  "key37": "2BZaKh3MFb2DEyTSaVKuajbgLdf926jSzqhoj1z5TmUM4ufzyfGqk3LwjK3ggaFB95jsMRtHEAgXEpvr6C4HuZrY",
  "key38": "3raExtiK5zAxRtzTRSBWbmry9opqokzyxfWjG7h6Ew6ZQ1Vmhjb3r1aTc5aDSq7ZsXtSDKymchjpDUNwzxTAnDHP",
  "key39": "5aKSGG5JR1ipt2C2xmpoodqHDCsCiNWUfy3XFhRTNHT5Wo7UKQ2bS6jRNBn1q2hVFPQGZvjQXf8g5e4u2Hh1J41y",
  "key40": "5yvakEYT5grjCpW89npY8DiyY25DMZAdgP4nzpfUrvuNWM7FNzCSMnx5ugnyoaZPhceacmhxrypqVkMtmymKAvfm",
  "key41": "2sZP3EjTmrzPQ3YUsWxjiT9ddeYazC16vXb9cp9PXX7x6YPyPaEtnG8cKuC2eY1MU5gF6au49Vv7SHcAWnjs6BpT",
  "key42": "3tLn3eBxDijGC9grgMs3oGz8p9CEzk21VqmkfBeNiEcfbYjYamsM2Do31TPmG7Hk1ua3W2q9htb4MvmEYqFB3DDh",
  "key43": "yKY2DMSH1Ssj4EP8a3aXeUA5C4YKp1atQJfoqmh7qSTs7iDfwdnwtyy2wcRfkGUumJRvHSkGyBvdYCXyXH53p4F",
  "key44": "3k3FADST2T7kzDBUrC5nrdXeFqKQRTnRZCkjgd5wVRETm9Y2HY2N8VfAZ9J5ACLyVByVcwFVyPpKEU9za5fQCstd",
  "key45": "TM4Dpm6XkDQ8HBYQcsoj2gmTQhFRpJpy4yxgTFKESEwQsZjuz4DrDtp4cSJZXMnLULDUCeMNovynDdEdEGyAGQu",
  "key46": "5fTSnQPeLRjwhMhxAsw2xVGRovTN9bqDgkSZ8JCdHEQF9v59rXxg6FM9X5Wp2PWiQ8mFx6fq4xMGZpN3Gke4Z2Yr",
  "key47": "2yWwQ2pUQzNtdDh9cr8UXHAWz4dq2gxeGAfBJAz8rw8q2br7FN9deioZurVd3hseVnZExT4NARxoLj9jfScsq5G1"
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

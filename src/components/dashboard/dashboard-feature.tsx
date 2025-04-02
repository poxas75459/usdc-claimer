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
    "3EGTxFLbjB7SMwHPqMYgxZKMn3ZDMTRKWNabbpuwYCqGcLbDtBaLgtvibdJkTRtAVCffd5v5ahXR6BDB7TgkKnUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYGfX4YZk929nLRsFizDbGwtLgcwJtHo6GYMSRba4vZN5ipvhXJznjfiJdHBaAdKyMdkUahkjwmTg78EQKXR6sm",
  "key1": "3on1CJjsLEU4xBJ6k6d9HhQkXvgSomoGgQVpGmxvREthMoPhEW21Wrg7hMCTxwbeoBGt6FvEprDrkeVEaH6FXKwG",
  "key2": "3FEZR6MV3v54JXZqwB3MBPAPmmJbgrub1RC1SxRAW2m7wW6UjLbgZ64kUYydquDja8DPG5XHSwx2vrEQNFqYzkTH",
  "key3": "3w8acxZow2Nx7jQA8UcJQ3mfJ4D4Vebir2yEGbnUoQzmHUPAmqXWi287QFkm8nhgH9wJXcsWatHtc76xZceJkrBN",
  "key4": "28ZdKUVH6a88KuQLrQYrESjT5SM8usAEBkEbPTTkyu5qb54AWYH39bqRe8amQBJS8a6F5RXvp5y9iMAoQocZQUKs",
  "key5": "2shGWNTd8J1eVLs2H3nmmfMUNRpK8mPTaNJcFBPVzonNGbsgPw5w6QJEo2XYYVg11cwLXsN4BYwdimPYqNeivKCA",
  "key6": "a49Km54WzDVRVVLS8EheUjYRDg6ZSiZhk993fWvSz5cz8Qam4UCsw8vp1p33eaWM22ufDsLzK97Kg5dPNjfJmD8",
  "key7": "4dywwu4vJTEcZBNMBaZ1UaDa9NecLiEfRXs4zKLiPAUhNvNUX6TTzWfDTPVFkueVBKPN5LskiETKezkMfeudnZJc",
  "key8": "2UVHcpAT7fHP762XtnszfFxFqyAzAD9N3b1PdZJLHWkha7SicXAMUwK5WCDKNJuD2Y6KUQxCMziHgEqkxgsjSxAY",
  "key9": "2SF7kDAWwLSgFr7XpoNWqPFR4dH9zqH5vmsRFFERV4EpTa64S6tiHWGG8vwtqtWQ93UdqNmT6PKbQPTGs6f9zbRm",
  "key10": "3bvBwhk1eost3kJgUf1Wy89qKzYzPUiSvp75eyqfmEciJX1TsjNfLwJfLuckg2cjSnKYL3ggvapuync1xx1aCGsL",
  "key11": "szcC7YruUsSVVxdCDrciFrPkcyMCRt3Lv4R7QYvhcYoZjDecXuV6GNDuZSBY6Z84m8qSwCv9HiZvGw2HgJetEPb",
  "key12": "4opbrSDbSbo9mTjfkxiHEcE3QvtHpqQXwsHNjJv1Cxtxe5E5b5G7q4Rm8ZHPDCF1ZyRNGB5c3D8NnQNAHHae6FzT",
  "key13": "2aoo723VNfzs8oBnWXjDnumfE8WBuEyPYiVpXkvxUgq3tzHX4guJa7YHwE2Crj2mJPHEpbq9VKVcfKZCbPx5PTQa",
  "key14": "3Z7x74Ht9tMQjoynhNFQaKtoU6gMoSo29Fki6jRWHxoUNGA87XcTqS8sPiVXe6Qz1W7PTiEQ3HRKgXwQq3FQKbLe",
  "key15": "5BLqFqirbJA1zXkNUChoxbLykJhXaqybre1cVmJD9vxzmWty2JzhTkyWoFG3y26M1YiodA2vaJTDZjxyHTJKVAeC",
  "key16": "22d2cDdGTu5GDoWf2Ek15BJNETkRWw1omWcDX1SE9BNyRKn4rpyXM84SAi4Tt6hvr3Vkeh2257H4bd44dM1zKoFW",
  "key17": "4FNa3iVf7g9MZC8zc5hofKDnLQY98ji4eSg4ASwnDUWNnQdAvQjNpxX6frTZGFbdzFEB5yrdT6VYMfiVWAx2MmMF",
  "key18": "4P4eA63a6F1epVscktLdE46nSEL2aZrNHM37r37i4Wv3EZWEEAADq3Snevn1z3ur8HR4h7QAjG2GLNa2A15f68V5",
  "key19": "992a4u3ipvuqaPe1ZZJzeVw2zKgDGZHWuJTUREcjBCjGmFujSAshNg2si5xW3f3Au8X8DK9kKsoJdjzH7voKekT",
  "key20": "2UZB78PdnaNjYGNnJNCr1JStT8HpfnBmPBqHyPA2zrtNtubKEEamkAGPf1ChiDPhEWw89DW23ymBKQfhgNiJhKaS",
  "key21": "chKpy8uv8jDvqHZ5H3kqdbR9pyTyxkuiFKp23e5ZurhS531CRi4kA8og3vvwEdC9rdEiqgD1EdpmpKrPg7eqvc8",
  "key22": "2g6f7nnSEUghmUcA7k4AJ2nwDfEPPdrzcZ6qNoPEHR9WHWzJZ8EtpLx8Yz3DVm8rYxonRr8XNG6gEsrfujHRtmwH",
  "key23": "3wW25Ho4CfWp68bUiMPEpjmh22akjhwbkkGtk6TLoE63NK8avcmc8xKhUyMYhV2RFpWvP6Sebsk5y3VQA2X9Dgvs",
  "key24": "3Kb7s6oxDDHbPvH2RL8E77zSCSCScm2BRswdWZbwcVZACaJAcVhhiffJ8LM7zkj3VUxLrMjzQVZ9dQH5Z2uWTwif",
  "key25": "5vWBuSn2UJfMa4MddshNwZfYUJcffMECE5BE6SdTnDnTYFiCMPUpXaSEKsNEw41FKRQC9bYsChBEgk5AZGcufkY1",
  "key26": "3BZPDxtZtgy9HjyKu6hE4GZNzUU9A3oFCe1Lo2YTjX5Ncqd1xpC2hBAt5fWtW4m73VWnmQ1JGHULuej7oKLFtgP7",
  "key27": "wQypRfAtEoQ5hYSVfRP5ErD9w1WXDkkseby1Z9TGhAxkvkP8caEWYbWGmDoF7qrLuEDGEmDKweK5wCgEL5B7Vwv",
  "key28": "5kfLTu2uR8hQWBuzcqiL56uF4gGz5icn5vuiBjPvZDnsaGt74guVCKURZS3vCiodMyukKbbJmX78xhpnPaF3PEAN",
  "key29": "qsqwuXa1QKpBeQ2yzx7UjQwmCozRJXKmCyhz1L7UZivQs3HgKch7tQRFcX2c7PDCQR9aRXoeaQqnosemPkhdb5A",
  "key30": "4RV7RA7UAMTD97QJkf7iosZVzr9LpWeTXYUuK1HadojMWmfSCiLarSJEiRJhaFCJFq39KoNg5ACPFTemmpBpoXaG",
  "key31": "5T3yXu1wzm82quEgdztrxtKunX9i9EzgDNzt1DD36Ry9SFQ9Go4R4YakNzxwCytXjyCfhcCVjrZMhbuYidKgb97M",
  "key32": "2u5TXknrZYSsqJQxZuGQjRQkicbLWUbiYnrNmNfPfSDLX5o4uGPtpdWUca8ZdeZpaozY1JrqVnb9XbjUSCbcAZp",
  "key33": "5mfPnRWvFWVTKePgNvRBvi1sbLE2tem7fXENm3kEPdWw4cEUaiqeuHD1jYaViJNCga6gwnNT476Mvh9JtGb6jScg",
  "key34": "4CVsZW2bDNfsHphXBoej7u6oBnbvVodKvnsbtgF8T9w9cEtnbphRd8Retsa9YQXz8u7RQ6Hcb6GoQFFsPGEU6mCf",
  "key35": "5kqNM8AK5rm2zWiRfAQ4Wq2C18kb1uJc3VTCHFmU88vYXg77P2oCk12zDCUaSLQsVKuK2vASoCBknVe5iwNcGFyR",
  "key36": "P1uyrrnRqhxhETQSmLFS1kM2RDUN6BDhZVmDyfKLSXxNeYH3csGMMbFHG1VX1tUYkxx9MAY9g1152XXQyAurgJW",
  "key37": "5i94AaEd9Fw3owi47qNQTx8ijhMnTHJtJmBZZTDDX67VZjhP9Wj9DohvDDDfak1XmroQ7o8Yfwn9TPJ5arLHhQYA",
  "key38": "3gbcAB29Z6sqQDKVP5Mn9K3TfEwSDUwUMrsBkaRuuLXZaf6bZJzLehxmb4WEFPxH9PDdQRvA1gHADJfDQdngTD1T",
  "key39": "2hEcZojrHqfo8wEfguvpQgqqPrVKnv31bYs9L9AfjUDPy6nGWCuGQp5Q2W9ijRBP6iR55WCEWdT35cBRffWH35aq",
  "key40": "2x9SFgryoHfuZ5WddBowCfrtGMU6NksaxMfwdhvFEHqwNRXq3ErPjN5291vsrAbd3rujy5DgF8tDnuSrxqSoD4fF",
  "key41": "4QJtmzsMdmytUMJBauEqhVhLe1gqcFAqbguE3BKALieEHZkLiJoxrjGumNX5rDzttvn3uDqgnTAYdi24TYPf2xJb",
  "key42": "5XnCwGkUNC5f1nyPCkm9hCSQpWBtvix9ttidRkM7un7pKuPw3vMrGCKX8QkhqsLFCwSPJmPj21SMep2y3LNVFM2",
  "key43": "5tZtYvozF5JecnU65Q4QY7HxQ576CC6wJbUW6j7uL92HbBUevbdjrAGZKyU47U1KGQPaKzyB1WznMnUWxTNx3gFz",
  "key44": "WSs6u9eR54sapQo85Nt5nUDezD2Ajqx8Dzh7y99yWJ8fPdD9LfqA4Tu3FqqDc58G3wLbrRodWNyLTqxyDCoCqz3"
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

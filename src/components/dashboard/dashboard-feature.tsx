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
    "n17TcENzyTn7E8EM663vNVeoSAqFy8uyVZ3rrYbzW3MTYhmkUfEhMTVSB2WPkMQ1z7GzZrLajJty7LCNpWGXSkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eo8sxgk1ESN98cdwSF2ASXh6LRwt3kNULikPXCSC6w5oEdPnuVcxmYSXAwyrcfTNmWxYrZK8vdhqYucQD5qaWJ",
  "key1": "3h9ekcTHq86NhKF8z8rHhSeWwck4zYcxQHNAGMSyfVUQqnPqhN7YPHxE5p9PHmanoqTjDyyPZAkP7sjznGBSA4y9",
  "key2": "3UxKbnn2vUmmfij6N8vUtCptGbkhSapXF7f1w6wS2jnwBTYFFGCH5bfdUYcuvwMZLUREFEkw3BPxAm778Lh9cY4E",
  "key3": "3SqZyiSMH6EQAAsuk6ke8jc6o7juPcbwegV1TyA7J6eBkSRosYaA3gunUcKfFv5nFUWoyBQTJbUdbQYJvadYrjKn",
  "key4": "VAUzo53L3WV5pAzPhyGCFtGyRG3wQNvcgEk5hA9QYdfaTCu5PiTRj6FmQ442f3oked2BbqyHniNxJso4ym1qVuv",
  "key5": "33rHJZkERXADAcAfPfEPpccgaqWt4rTtqSFGR8DNtW1YwmFnN3ABa6DMKUTxM74r1qPcaTj5H7vdT463wgPSHDst",
  "key6": "2ofz2P2Z4qxq39JzuMbDjnYeXq81iTZU6AY9QCbqMjBF9uq4DmqmCB78aSRhZP45Y8xK5ZzgQpTzUh5mJSRwGxKx",
  "key7": "C2DNnFAes1sMSvFWFZXwTYTvvH56gJhbm7ak8TEfV6aixWZx3NFrccRzrX1vU9YJ4u8CeR6h7G9cF7rfn46dU5Q",
  "key8": "63Q2WSeRgg1Eo4G8UrFGJsd5tnaVDusphZXUTrwZkZ56c28h7KfqyxvZTvZnDNgZYoZ62S8GUeY8siK1oGPfDRaL",
  "key9": "4WpvMoqAfMegNL24jfqcR3WgepFmjYSCeJt4hnRJE32pAgYoaqNmGJ4wBUkEMRBszmBy8KyBFiUg7v8dSb7jjEX9",
  "key10": "dLuDzkSPrWYVPqbxJtrQF7jpNgKr5SLVymqxnQjD5zTph41go49abPiobhHT3FKiEYnoPWNSmZfpcpKsuwswoPK",
  "key11": "4bnQqRA6CBRfAU87zuv6hBhMJ1nbZmjMRdqLZPgK3LVm2VkSWGDQbK3ia7ZbFceXQq9pBScbWaojYRVhcS8TEE2p",
  "key12": "3qKjiiFSmaRTypAPzLT8WRrEnmq9QxgPJaBAckYUQvuaGfdgswMCjDLGF4r4qKREwbTx4mg2dAGKXPkZXaot9M3c",
  "key13": "4TYwVbvt1XhwiPaMrs1xLR9zhooDsRRceqBDRH2KyitHouN21iq3Fc6o4XD4ZN5GsdvvkougqMN7HCFzFQkjrC7A",
  "key14": "5pKCv6vF3oxUGBDgUvpBnkPnq3j9F2vi66T6p5Xd6ngymiFqB7wbiMrwDvy8MYQGiXmDHCUtkM8bgqqWnzTyu7S9",
  "key15": "4NsGg9n4huVvnYFgBdv6dVhLSM8diX5wXM7vXqVEKSg7ChWjXWrFAiNk7whDP1qi1d19uhkhoHhwHHdPLU686yFT",
  "key16": "6Yr8pFJcdBkFRC3d4PLqPdcMr4PZYXLkzhFbXDPSnRPwkZgFwJpuGPRUSCLn6y7eUJ824kWrL6KJkEiXtXU1gPW",
  "key17": "4Ei91xFMV7cbQgYLLhQhxWSqzN4qRTbvV6z9Hgjv6bdvhM7cmLxrsEHAxMjDyaWjGKXSjCpUKjVwQjMmUo43kE9G",
  "key18": "65yBcyr4kPX9pUmPRxcmm6j37bCvGAvxhCQdTNbyLCdXWMGZ3Tb5jsBDyo36qwWxRBKitefC5ZnySz3Cc89FDbFm",
  "key19": "2nJ4Sd62zAduszSX9KkdjvKWUX981hLNAyqdiLFJzx3MAdkkEe6V4YbbrMtkUZA6fow2SzBTEAfkcxLaVsJ94yPM",
  "key20": "2xLsZPv3zPCmhMbAbSLmEXS9PskxaPwcdurY1Sd4mU2ZHMBWSH5CxPUmqa42G1Zkpyj9urs3sAFEZsm91q1dwoc7",
  "key21": "4funo5MEft7662aaeYRSAJTG83ycDbbaNxSAUvKDRKT64LNhWWKLK9L71jKGYnYqc1sSSmLDLcDANgGbf6TLd64u",
  "key22": "MojEEJD7FVAoy9dUABfJbTpBmYj2oSweM5dzLtj1DeBJ1JPGvsRFtuSTnoE9Ug6m44GsVzSX3VJfBmuUQSPzc61",
  "key23": "45GvRhmu8PnVykAt1iyKm3bHwNiKrEhPJr7sMVmyRBT3xNkb1CQC43rncxnyJJv1BheGnLo5AZdgbM7NnEPbvZyL",
  "key24": "P7T9HhbZ2Vhfj3nzMpM7dmK6JYrxu3hF62FzEi3KjDbmF7NN5QfSMqSYbJaTaqixf6YJZ8o96YhjkTohbN1LirF",
  "key25": "4UvKvot4wEHFuWqAyjvBh9KQ93iih1sX4pXGchmX2jMHgGEHo2NYUCcPs2mUtj7XGfEVatQR4hvMdQkx9Uq47CnY",
  "key26": "WutZgwwWWvcaGr7QPinVEHeRQ8d7krSrGWdZA6CUubDXRyNPRKytamnNGFWnvDmLtPfLnNhhaKXmUVToA8xG5WQ",
  "key27": "468jAAhfra1A46d6ebXU6rKJSNL1USzydExMdw954CrxJj5HzskYeajN8evAWaFYdJXXBA6QRjAh5NGyJc4t3s4a",
  "key28": "4YJffEDu8bh4o7FuRvH55ZB9Rzhujz4FtWQWiBXFAEHDV7MUaoBQGk6F49yQtNiyQJU1vvDMsZHNgTJGG2qSSSMg",
  "key29": "4dn9srzjEkySpME8xuMMRMeZYvN5K11argarLnJAz3mqtqFT5g7hjJkknUyv3QqyhMgQ1gnSe9ZT2vVUfZuAFPhE",
  "key30": "2fGS1ApFQerbwsogyarjxix7gjvuyAkRev1ixJUoZsZwijaKgVcZ2Yis7FMNFzUTB2uE89JyUA47r2ZLxQCnL3z8",
  "key31": "2X8Ho7vwD72qqsHJfG3YLfZW5KBNHxWFiqK4FJr81h1b4aijFcm4eTYmbAPV1Tg2LhccQ9e6dN2txdjt3wG57dM2",
  "key32": "5R1VjDJKKTVtYS6bydkDmoXenrKjoWx5bvvY2ATeCHgNwt2FvqH5xXhsJzoXKS5BFFyW1n3XvGAhhguCo5qxK3EW",
  "key33": "4weFMwqgRy9wmPNUL6KrkhHWMgKdXBDstAKffYdhkwoDdCzR9mFcyrg5E49s2zed6vgfHW4SYmK8kLC6FuD4o4p5",
  "key34": "47DtzVfSLHbrHQKrPgrDs9ek6SKrawgS8BPtWBFuwVfBufPFhYe7qx8N3DpuiKAKoUvM8wimydVbxueXCunX2KjZ"
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

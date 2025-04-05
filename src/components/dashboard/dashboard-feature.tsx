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
    "3H2ort37RFtzoEEUSeGR7AvVdncLHSV3CD98EdpcWw1NmGGR97NRR6KSP4q9zizGGLDjao3wU4UUp1tCuZf6MsBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDiJoXDBAcVuPYNzq7VmdGoTn6q4YTznKcdw7hb3W7UeaANfMSFayLhZwd7N5V94GPdi215xyAnPX5f592E7Nfo",
  "key1": "4hr7Lm5iXVprsohYysCMYnKPi6R2r3F2m5Xob1jGeEZV7FJ5RLmmYkSdM6zbAwMAdS8jK6QDB6Shmvaof2ypAkm4",
  "key2": "ba9TTB6mtu1Vu9GAn6CTst5UFfUXSbqUs36pSq9bGYwQ8RqL6T8fwnNttVS2DhtnVphU9Vc23VRbYyWnSYppVuU",
  "key3": "2aD2XcMP9LjYC1P4R48nJU7rEXG1m7nLzymTtz5ozqJCN8hQkuYaGNs9qNaSY5WNHxkeJCfm9Hwq4uwpyPrY6ecy",
  "key4": "21SKv9DCBXkGMFh7rpGmwnCjnoPF3Bg4QMcyBdHwsJBAAc1Z4Y7e8FgjXAzk3b76E6wpcon3faF3DDQNQMaskve6",
  "key5": "58etS52XPgxHjoZtHaQp9rjWpim8pYNx4i6Q9arHx6Y6MWJatgvge2TocKnVa2Abb77vdYFuXB63uw6MUMdjWScW",
  "key6": "3bdZK8TvG3usUBQPAKoVG59JUNyapxw4jGVtsmg4f2xcQHJFDpfMXLfpjmTKPLo5t4tKg4U5WW73GinjLhWcrZ8G",
  "key7": "4PjnXqMpSV3VmUycHZu4ENqu5GU7sQjabLMtvSgBhqV4sayrJJZ6rRk1D988DVRG8NokkHvnB1UpyoVE3cwV4wN5",
  "key8": "2DtBLP86zC9mwXmmq27XXv7HFjck59UbqMvPVhVHJeej7gxb18SZYfkssbHWsSyvQsdKkJi5r2i9Qdrydxi7yUhA",
  "key9": "3UbCPKpkswmA7yvXgymzcdUW9NDqswUdhQ2aa994o6V3LEWUvDgtS8tvh6crv1ukQaHomK8AFS1maq4ABR5gNdp6",
  "key10": "3ntNWaGqwjwX8vaUaaXhsdyQS8YtPB2P23fnJqDPGndtXW4nWT61P25wxbe1CUt4ZYxF6n4AS67ue4dYNURyGo3g",
  "key11": "2jKRa259TRfHXg2bqVM2HDcZ1Uec6yohXfqJ6THEYW2iV9Q6FTQAF9sxaFGCbYugdqwcCAxoVaC9CydEGQpTdHu6",
  "key12": "31a8gq4Jkcj9xHH2pYZTVknKVf1q3CGAvSUnpYn16zJdovGv2P1D5t724Th1Vos76zAaUe6sT9o7weCXUvaR9TpH",
  "key13": "4hG58V8XLWfnNEnMX6TWauU18oas3XT91biBDH47vTnAWxEjs8pt32P1dDFQwpe1LSfi74ZRw1DdyVAfTi4w7rQ",
  "key14": "57vPnEUoQ99LJqsefExvuRrBgDhjvCtR7DwTpyaRCX4g9P9PLkzgDJFQowKP8joVLvvxaUjhVU4mmuii23rDhA8p",
  "key15": "B2bVB7J6dcsD3d65u61x1zKAagJFraWFrnWZpHnAu7614xgGjQXv74yaaDWcs7nQQFye8bqZbJimkJdP5kHruu7",
  "key16": "2HjeoYeEABYWzAbdj1NSe2VqGvpcrXZ84Xa6szUGE5QAsS95VPTMGFHtHSBgfZXnHMAc1SHQSRQPG3msz1MgY34w",
  "key17": "56AkViM7pU7mUAqs6Arhy6vWoyxc8BLSW1dCvx9FdhaQeH224BdckZKLS5GkoJriLQLrpqrf9aPdZTtg1DH8wZsA",
  "key18": "4j1qWeedJJLaEctJukChYrRrKmAZScwUbGNEzhEAvyGa47Nnmf3bpY9WgCggo9PGnRfkN7MCb8mJ57yJ71N22gau",
  "key19": "9EsrfmawxuPeo8aaoQGGuFFgnL8RgR8taVMigRjzscqL3MkAfLKDdFdgUy9Vdka15UpFAYGsBYUB2Zrw82t5B3P",
  "key20": "3CHtiRSX4EfdtVxmoXagopJRwiAnBobbrg1cWGQ6UnS1YPw7EewrZCXgpmoiDgkrB6VuBADvchti7rm6ssdGHMLp",
  "key21": "2mccqGe1CsDE4FTs4wRuL8nxAWSaHndgeepA86wgBn3cZwivBPZYzENt6c7tjHaZ2AwpRJfQ4jAng2DXNnsTLiZV",
  "key22": "27dRX4y9bXVfpADmtwqGVbRZUDUUVsYdGwyG4hFyeXLUd11bQjXL8cLRnfFu2d9iWswPgBDFtVk8crRionazZKGL",
  "key23": "3iep5sC5tKiTUUWnWCJU91wjDPDj6d6PGzaoATDWeA7QxgKgdcBhyW7X93fbsuPC2Qwje3gR1YzJP23cj6WoM4Zu",
  "key24": "3yFBksGJNVmfcaJZJUCQQeKShbrmJCA3otFcWa8jJ46C1NUhmnmmhGKCmy5R7aSAHTmxECKUasX2nBs4eqhLLqSm",
  "key25": "2VBQmEYS3t4BPVaKS4znSUxdrW2M3Ko4Q2m6G7AK6Y1NPruHEebHmz3XY8b7c1whjindKYZyZWziDo5RVi7UZVUt",
  "key26": "2x1hfcfHi7YPHn2ubHEkue1vpjGHZ5rikYQdpWPNsHNLJQJmXPXkd7RAjtQfxtuyvg4q9JXWssT8uhobdTj2ipwh",
  "key27": "4JtcUvFKb7BfkpFYySnss57zz1fdAS3N7mrFbA6Po6Pza59SEyP2YpViy5azeaKK6jMsaVpPvH7UVJ7d14JRMheF",
  "key28": "vjcaZUfEWv3aDmYFncc3T3tSr6PHFAVTyn18eFfmrzsDEyP7hidUS2mqaqHGgdBUycyoZgS6hJewKSokutFmz54",
  "key29": "4xCg6792AapM9bctRqnzTdJK83ypaaGjmjCJQLkUsqBSZFaLXFz5zJLEqt24pbftK1vYseDgAWHHqrZLvQXaBGXy",
  "key30": "JbVKKEFMe5qb7nvG9EhmAko5nvdk5VWpq6zycaSEfkFZaahEzmyEBQwwZiXGc85KvGMsur3kVrt5gbPLdssMcdu",
  "key31": "4tfobeGiEpx6vWWeMhNGbuSdqcQWEuC4zfF1UfqZzpyCueZGjJTiaudG43VYzgQ62j2HosjYtJzz57K3paGuLAEw",
  "key32": "4jn2Qz24EEFnRBJA721MdxQ1RzZeXPFau4mty1Xb4YhNrdrZyrQPu6N6WkFxC3zsCeiEttiwAv3RXcdAXgKvAhAq",
  "key33": "54TAGqHhbKC6V5M5MkKSLngv7tDpR46HcZMpKMYfyiywhar4wcetX9vzy3ESnNQujCNWtZwjX79aHN8LaKZM7UYY",
  "key34": "3GZHGDyrYkzGrpBNbspvjPjLmHTp8DL1tXciLD2gQrLyx2rx4VE7NK78B2iyjHNRaTFgemBZRo2RwPVt74SmqQn7",
  "key35": "jSxxmXgKAPAxNNREjiLxSEnDJ1Ai8Lvi21SYcz5h8R8TG8yHx6yrtGhuJjP8pryNVgdboHLnAi97j9ga4xt2mWP",
  "key36": "26sLT9K1p5rFnUyiWTp4195yUHTHBfD2PBfjQCDDPs5FFv6ECM7uET93FnM6FacJJKfpKy5Dg9eDdZSgUu48wTby",
  "key37": "3eesyHb1LQvn6SQziVbiBFrppTMxRYVtfKM2Ye4Z6zfoidsWLXwu3hfTawgsfxG1euz85gVmNoNwiGVsBGiJ8mwD",
  "key38": "5wjJTmp23bGgc4NXia3i5SnKzfV4NLHSDfAN5BoJi64vDky531zJoxyWJZASdALK9CAkfB4o2kZeGCM77A9e5qBh",
  "key39": "5oZAQGxahy1JpddojdhNfxVir9LcH1xZoXx8zNPAQXfgKAG6GwbBaXKNBCeYo3apjgxUx4bYq42Hf4SGiCLWNmvb"
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

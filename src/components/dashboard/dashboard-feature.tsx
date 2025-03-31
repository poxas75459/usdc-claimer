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
    "253jbDBSVF8zZW8XooibeAmDoGoNTLyUNxR51BtscKyViC4DfdPwQwoyk8xdyP1EEWxrtPdsFzRSoTYXxUCNijoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AGjbdmvynqs2L9YwarqFm7nHt9sFby1iTKuRRkEBWnGxw1fdxzXfjfKKBJXV4VtxLd18zjQVPyXKsWVGAcFKzUb",
  "key1": "3XwLV1phR5H2CrXfZaX2FFh9a6SrxjS54YVCYW6FDxep5BtSF5rQdM5S19hXHBTnmTiUWCwvnrnzZc8eovsaWnib",
  "key2": "4PAVYzeH6nkvHhaCAfVR9E6DNjGy5DrujkwcirGj7TzSTLKTzncVNFsp4az5kh7SGU34GdWW5XaGjd7BLR2y84nj",
  "key3": "5byKUVtdDqgVrqkVVhVt9SFBqhmjoKCVBjT1VKCH1rGFyH7MJNw8W7sHLLS6HWVxrZ5h83iiUvataDRQy6i6TjZe",
  "key4": "3truPgp2EpJSyvCy15oZX7hS3Vx28DoLpvw1SngKqK7mLR7BRQyy8FVu2ySp4vwzJPfjFPe6p2iPYdMMYnYw3wP3",
  "key5": "MAVENZuCD7FkCow3stAmTo9PREhznnC9VXVisVaRNuKc6E9C2PY9jbgiGM3N4Jf3F9Pj6VDM5cKiCeJmmzAHvHx",
  "key6": "3BeJ5SHfWaEaXAUW3fSANcuTSXEoNjRKB7xdp5RbWM22dUgtQFbdkpeyifXhRbiib9s2gNJf9Es5qYu8TmH53bti",
  "key7": "3bSfkM3Hdo89koaRPHQAdWNT7VX8Du8uk77PS6Ve5Vrsomeuayv35g6qvvrLxFtLHv3GrdQq2YrB8W8vwjq5CgSa",
  "key8": "5snh4cnLHhAzicCeZaLgLDXRtXDNPBnQHim6FB5Fa5nsEfWC8uB4b4Fy5auptF9t7AiLMUokmcSAWtcrCDKSQUoD",
  "key9": "23pmeixDNqVFxBJgS2cCubWaMCeHXzwbjvrKNmNzeBKpEVrS8piYoCnGtqCyfB2iCSzKfCt9Zv1EmQkfoFPvBczB",
  "key10": "iYJPDDjRdk72N3cA6PSkr9W29KDuDU6ivrPvpT77ZT5QPGhoChash8o9G76P92EsQp58xvAdMsfqqggK4i2YV97",
  "key11": "2BeugEQAHPWD88bQJu9SiLt58eRkSDr2Wk58JWwYprMwedrR7tkeS1fjGCfPDGfurH1HZkxCytvjJuFTaa4xxEdt",
  "key12": "3WvMhXrpduPWnvCAFfH1Qfmb5n2gp12PU6isFKVAWrkqmrP36h5EkpSSuisGNNkGjGFXg1RKhyBK6nWZcnAKtytS",
  "key13": "5BVjQzVA3doQ5mVbTkcfCY1hSEeGbW1b22uyRdPn84tFrUdVVKexr1riaKeSMsBSHDim1SpdGrJFasBPzuHtqZuw",
  "key14": "5kogNSaVAEnUBhv7PEJXsMViK4MtY1megWMwpXt7VanxppqTAGNfU6XRn9FcAQFSpQ6bmGp462hdMhRBZvsirpFN",
  "key15": "3a4Xg1CrkyPw4EWr17cPg8DgtgSbWu344zQf9UUoTibistM4AC9DcNgtpnmmFCdy9xQMdjaj49ZA1kgAknsHoavX",
  "key16": "21QUKDuhi2uhYfHA3yFic6FQY6MCFSPbBpFdkNub7uZmLRZKtpw9auAELjK56wmCfnnqH4haZ3nFMdK3H8TkeQk2",
  "key17": "4G9KwwC9uemG8Jezm67jrYjvavXDhvmo4ni1wdgz9xYrDYVXiDKSNZg7ddreH9VJWs1hRCXAtYhZhKdFXTCBpD6x",
  "key18": "3Zx2jCATuhUBKvWdJ39z6iMT7gRxQGdXLX83GroBV6ZgZxvHFi6qaGxKMmwAkq3XfqC6tvhsjXbCbSiLHYg1iGig",
  "key19": "qK8QRCojFnLgrrgesbVYkrtV5J1y3xhZrNnyATUMoWHSSFdCRApT25iNRCqdGS21WgptG83DNHrhxokJ5MJPLba",
  "key20": "2wna4Aedj9LBShtXbWvJpeZiMiFahGoxUrCCf1SVN7A4KEh1U2AGqEfox54v5D2A14cqHR3FJ9KnntYwXqKbTY6W",
  "key21": "2EXmdmB6gyZV2wJHqwVNsgYW52QSmcp3X2E1e9mjD48dyPM2dRst8F5ty9nb8P2WhVt9qZ9yzjxKeXd2i4qqDnTb",
  "key22": "3VTcx5GW4u9KmrjUDSVvmJWwyUnKA53j8xYvf3ciXLxRV8q4xauojCHyUksu42KPPCxaUhmHjwaLTnvPahPyCV9A",
  "key23": "256ZGEz7QUiETFeuo2aeLu7P7pWT6rfVkn8GxVMq76B3EWrwEam2FswfhybqDa28VsbHHxq7rCsQFqiWq2gMcKAg",
  "key24": "2XVUSCQHRPgzqCwVhRSsWtAtkZC8vM55hKhRgWPDyyTW2h54tsu5zS2cLqkry3bNFpuaTiGE1itewEBTxmJFw8cR",
  "key25": "2vrgkRAEphwWo4mtpR1RZ2HSxGBJE1mzZZKHup7jghWUTm1vWnpDpEU4bBYsE6Npz3SaG6BS3imo5gvZ3tcEJzAQ",
  "key26": "4rN7dWdXMFodhD4m5EaSQbTYk4ddsBLW1RsgmEtwHJSnxPokfe7MSp5Tzg4yYit4k1qGS2j7karZCouc5ptVjMe2",
  "key27": "5HnUv4rsV5XvNYZAmw5wboV4UVaHKX8tqKmTZpKqsRyuG5UNF49cBtSrUG2ueiopPiVmHx8GExhETRnirmzsUoge",
  "key28": "BC64m2vGZhXUgqjBc32KyXSrQuJ558fyyJxjiUhuTjrj325LXmAobQc38WkbcmdJEGsyzLbgid4dEsHSZjAgXkM",
  "key29": "2e4WE4uHAcFLZkjmxdvz51YmAACPCSVkSHsjGRT9ufzTvGimGyS2Dksq8gcPTMxV4iZhKBhHtgFtMQehX3oiv2cT",
  "key30": "2Fnha7qUFtKn9h92C1e4FJHYWk4XbgBye13QJuF1KWotCXB4xP33dz34pNZ9SWQ8zkfEqsdQyLjEHAcfdr1JrWUy",
  "key31": "5jomoXtLoCiNR6nSS8ExmWrykyidVQyS51DQE9fozre9VvNqq4HuMjikqGcR66wCRCckYKREmWmRdfqCVn7moLzp",
  "key32": "3QX4r8JSo2BGxo4WYZrsqS2mXhtzUkkS2zjRtdQPexKSSetDE5aJSm2nAyRbLTNdeiN3CjakpwQQf8WR7Cuhvoud",
  "key33": "5iqLRLBFKRYpcfUKc2nSCtLhLCUTbLy7Q1HhYqhrFHBzHPnNB6fE9LYduKLU9ucW8Yrp1suqrazXEF7LiQQSzzRJ",
  "key34": "57EdwPagKChS1jm8SJ37pVU85V12zMYcXxBZZfdaq8iWEeUjWn15ucSSYwWc1EtY17F5mQ8hUaAMi9KuhbFEBbKR",
  "key35": "geUtUYg6MMfNoVBPcJAjgRxxHdnDP82apYii6gz4eHXY7Ny9YnTNvpWisAnh7dieKEDRSj7L9eqpnqaXTW7kAtZ",
  "key36": "3AeQxnAFs7F39hnKniyhLj9tb9TgGnFKkTP57LX5rwr6oSK96yy9u9nBT6SQo5ZLATwH4GFLCxPAZt76EDGXeLeg",
  "key37": "3XE5YJmYryqM9aQXjvfR68f1QzpfiQwbvz41FiaDLbwUjSSRFuVfV16NofGET8VAyiSgutM6twNfQQUdB2cNoY9i",
  "key38": "4JEhwNhns6GBmKYiupMicb6Xpoj66G69Was62X9PGQ2VcyqyCksmXZunYqVNtc2syYrCVV6JmwjXSzYmiTPCsLiy",
  "key39": "4YQiJrVeKyAHxZC2vF16XkmmHvjaMbbXqqPBSieRprWPk41HW2UFXEdQfsTHKDLggAoQTCoT5CtjxhSawMVoCd3y",
  "key40": "2KJXbZRR9Tugek3ubDNk8gJRedAQ3kT64tCQXw8tSVPk7pVyWqykwQ7VdGQdS5zsY2f8Go7TbHBC8TVTMyM4i3mJ",
  "key41": "7Q9f1a7QJPJSbfiHr4bUCwgSoKbAnjbJavAiHEX5ve3ABuwHPUvFYUSfjvKnzzkgRFEzKu9wQYC51VDPMA5Ud67",
  "key42": "5KRjYJsBvVpuDfGt4LBs2w4S1orqkpTn3zRJ7cNW8Teoiit37mghFfTvuc2GBWBAKHH25fpTfzfhmD1qP61WPLYr"
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

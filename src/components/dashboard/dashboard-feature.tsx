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
    "64T2jxikpA99gLQ7oypZtyj8NAqkLRCvwV5NzkDHyVbghbj7JxtHJYe7b71cC89Ac5BVZ7wJc4zh4HbSD3FrdqCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPzMs2Pg4w7ieh4ii6vcQkzWq1H6fVGZ9e67GKtfTRMgFsRUUhLx8Sz9AkudYt4v9vivwEv4gTyHv3w1fqFnW3s",
  "key1": "2BgzTLy4rcPREh2nTiszzoQKs1vqfvoqpKsHDhZfRBFxJQHMcc75QkRRQhxB2zVPp4aKSWCNL86ciYwTAmsFuC1m",
  "key2": "3yBm2er11XwJ9SxMxyfrasRpk8g2ccLBiZFC38tpnxyMb2dTLsCTowfbUp4k2oA8xosbG5PX6fLqdAeTC97f2ypQ",
  "key3": "3TtWChNsosHjgvwA4vG8LTdEBYb3a1P4uipCUz8RUexxw7GyaT9e8zhscZ93AkHzd5i3zba8KBeFi7wfbPuH5BQz",
  "key4": "22xvnA9rTnNK6spNb2ceXk8XC2huXVY9KUZSoMWcYte8xpEr8eH98JTL4eL1XgZTDGYVE6HmyfaysAMuEeyrm8GJ",
  "key5": "4bi1h8Cc2C8TamWCtGHHXTxz2svqgxFKHS3oPPfUT6xgjk8F8gRUPE7ogpVC1fsAgz4qPyTTHiMmboRi3JgyzLWN",
  "key6": "3u2ZEzCEx7ZXFSDKQLZMQdQtVvjooWdo5DbJwe1652aYUnMsbP1jysAQ7Jb7AupGaKnnw5gcmWKg3iuzrVjoPhaR",
  "key7": "5wuET6VJ1R9GEuty2q2n6ZHV2Mp323GTTTnpp4EdKnUpujxH49qf2D6bK3aTTZhgRg38qzm7S3ji7SPZHEyzU9zp",
  "key8": "2LjNvvL79B2by4DVUKiMdjdqNU9C7wKFGUpwFGEFLP5puEAqwPrNWgwuhLu8DL2mwo8sYc8Y4w1rDvwkfHsV2Wca",
  "key9": "37jngMqJBQRkocUn7DsDoqju7MLJuXPwMYtdGvFZpucFJxhU6Fe6MJDkKvG8i9Gpfuy1Ue3ZvnDFKq7a9VZJSZNB",
  "key10": "48V8g8oRui7fMm5oyHdYNfNndWQ3mEv6SbHbJ4MNibA4ez2g1UvjgpPtQxK9XKQjFiGzV22CyKTmupbLhYjg7soD",
  "key11": "4fi72i8fPKToKTPLPD4VPubokC4VwKNyBxqd996z3WbV1Z38oKcQFdmVzNvcsktKRhKqAzBvD864VY2s1ExwNWsK",
  "key12": "3NZHHwpexA9FGSyDkDhEj4jSMhQyADDhsvMPDYct3ezfgS8S9Vn8gxwb3xsWsVV6GYE2Q5CJCopRoXKbGwV5BmaR",
  "key13": "3fVrPbd1PFwywP424rFQ1JrPsULEGTi82i6BQARvcuLLiKSRHYaHEXoKE1Nrax5T8nqxcJUrcHQVxaPuZsLfuRrJ",
  "key14": "3K43oLZuaTEBEEBT1RZRwfvTNtmgGzm8zwenMg3RF3HYn2GqxgRC69GWxStTt8vh72eCKaSRWseaTe8VUCdR6KML",
  "key15": "3SyGruUHuDudoJBCfxGqBa5tZnan8ajGEkfjrGfCGrbxhw7JuYsbQGSLsD1ZPTX5Lnuem6Yvc29xPfjqzohtXCdC",
  "key16": "63qnwbptCmjifHR3aXVk6ixa55ADhXbQ8hGna1qZ1rfSGqfQths5k6s4YamtLaCZLSdGNvF1SSzYiHtSe8CxhhWo",
  "key17": "GCuwtSZsViJ3Xaz7FvFv9DaCvaDAmERSvoLSCe4hXR11BfnD5b4nDegAJCR89Bw3ADTzhzM5AtMyGLqpXGBLY6A",
  "key18": "Jfxkxa35UxpTkFZ4REbn56iMdTSaGidVosKxTAmaeDGyLapqLWqyNffS1uuZXAgaq9wxWtszF4mgUXNMXVCSzUk",
  "key19": "2czek3MfS9Hgiwt72TCj9s1k5gTpNQon1oLABd3xYrqiXC1ZZje8ea5P1XJs85GsSivU7nDwYaoe331mj25tfDcZ",
  "key20": "JdCCY6idAahkwM2GyU92q7TfUpDb2ScHaopE5iFKEY2EJKQzkoksuDU738FLuZ9YWF9CuBGqSWQ9TsAhy53mxSQ",
  "key21": "2J6EivJG2gP6sMw7ufi51YhpT1n4aB9ssoPJMy9i8cgWWZcvVZ4hSmBXoEnx5DQnbE8dmmcqLRZWVkyNtEsPZyYH",
  "key22": "3f4iuVTnp4CQQTb4cP4oZudCz7NkSe9x4n4AYyAejnbwsSHxsGCC8gmTRaibY1gLtYsAPabMyDaMSizwWaBbFmDh",
  "key23": "M7BVcM7oEPWxwJTGyJnKCfFKqwaDbfJmZ9yzg6xfNgHxGVmGmAL6YonAd8ucPJakxsGztVHThyKxXxMZ4tu9DaG",
  "key24": "5VDZeWv4vidRURzoJADF1gcYp7JRh7dSsWbbWavq33QUNdNf5DUbmPtCXUDHYYC4NjqvtjxN5uQF6erJEGA9e1gU",
  "key25": "dd4zF63rfJZkBic7k46PFv7XcUz1tLqb5qyoUgviD5msxbkhtpNfdXssHmwn7xHHxxaLLecyDgpNzK7gpW8iqni",
  "key26": "4szWPrsRwRQbUunBzz9Whk6SQtvCqH6u8Q8cHJNn27Fmqjk7JgrHbQrkosW6G51sSUAWWosZ8aVJEuh8yPCYm1FC",
  "key27": "3BvXLcMiWRxgXwvimLGVtTQ4EoVaqs1XsLDZNJJgdJZ7xyze9ZZwBxxvat43ZAcxq4gwMDKZ9wkPJhW16Jqs9FDj",
  "key28": "3qvxdSkE1GCTkoFwknMEvbpCzw4piWM3Aon8mH9uTqkuFUu6speVMkMggnRYwCJW3PAdfbhyYXtQqKvnKSEoUYj7",
  "key29": "4Pf45oqwTB2cq7TWHkszt7GEJKjhD3bqQChB91uFkvgkYchja4roCN7rGo7SnRq1yG8v7KBVoK8Gxcfmk5qSCdvX",
  "key30": "coEMSr5SodFwwKru8BVRaY4btRjV3PHQUVckDFLzW693TUUN76y7G6MGMaDDTJTidUhwxdBPmusXjvebrdixEe4",
  "key31": "5eCRvddWTegDU7Gcnx2VCEZdWnMNTGuWuo8iAdwNaWKxszKm4dUPo3Yf7izZyFx8FbZ7EPe6E1UzDpGMRscJJxGe",
  "key32": "44f52oMJVSqwoD3qW4cwep33C2aqpyjboHgKxeh5ux1TFmZnp6KuXuLTuHzEEmUunn5au3aiLS4R7fknhxUzSj4Z",
  "key33": "fcBr8ygfPkNR3UuNQ1yeYD7FRVv3WZsebe7C44b3E32LEMjSbkxpo2PPcvgbNGiGvXxtTjq1EMMRgZWyzgMDPkz",
  "key34": "yMnjgBcEzumDuvwHMqbsQdWBNiioHecKQDL9JopqpvpRpaJuw7fD4paPEcVqqcxajTyWdDYhCGvRFRTcNvzweDp",
  "key35": "Dx4cb3X1NENJH4JXS5Lb4Nk774U6QEcsBkBGPftoNFhkrX4gayV1vE5wgofVgEN22Lp38q7X4ipYXJhqC2zzMUs",
  "key36": "8cG5QXnySZ5R1svduS96scafZhpzZa53HrMbrpWycYubcSzGjQMGNG4KLpu96xrWyAQ63tcYCfV6kKLRuJBGJtC",
  "key37": "5dN5yBEjzZRghMCinvofXUTQTznaVctbxA1Tath1NsXwcBLn7vpPDiHV8CpSUMwqX3w4s1bsUDCZ4uWjzsi2ZmAq",
  "key38": "26DRfovTXcqtd1uut7Ugmg7uU75du9GXDYjyK1XErj4MAEUvjhnCPu2tUG9YzwkK2gTx15PYCikqKQ5a9CZ6qZ74",
  "key39": "5VqUq13hL3KocyHjFFtA9NZss4563DPm8QqyYrJdTyRgtvetrAMAwPPFKM2Adv2fcz4F2zfojd7d4gfyVVX5nYt8",
  "key40": "3kKiAEr7eKsoXh4cUs5GjNnKFBFXxdzPBkKt3thLHHwvm58GuNmMEuZZJMoT3pdvYZr9GD91iWCp2KMECG7wzSoi"
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

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
    "2qziEbESRyEtT3wvwBFV9AbByVE1T3EQjk78CMLL8iAxmgFDJjpbr22743HcudDYxhL1T5WpXLNDT1qJMCU5k4hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P85KvsHgm4H7AqXhyxZGPT1EyVqpWomKAKMgi4ojqEbVFS56uw2PvehHqzeTApPgvFYchqfcqpjb3FcWK1NsJWd",
  "key1": "5pBUsdXokaP7CWJbJbZUY85DNcMWD6YCDDkzPLmbmzcdobYYPRzxQJmW62Cv3TEaCvopCjp7TzjsWcEttcDC1ctT",
  "key2": "3xt5gmeftTC3GA7xrvrvXEYD1XLYn7hqVQLvbXzQ7SKfUNRdZJ81ZgXrd8NxkbKr27RqF7TyHhRJ1NHSPfxV2NME",
  "key3": "2BnZ9yXmehsh6ZXdhFN1N6HKy3vwbscBtyuzSzQTzpgksqsCR6ZHVYSBcsW47cAfFvXMbVRExMz43fJgwjvKRKG",
  "key4": "2SJamnaZh6P8NVR8dNSDTEiGR8LxA77C7BeEeAzyCdz2SDzbZrR4n1uNhUWiGw95AxBfBWwqHKfT8vZDqRT6gqKS",
  "key5": "5Z8AzY3kozz65dvkH7A2k4sua371HiZxsnPN7kuChsymJ5YCg919Za8gG8PT4XVTv5QdbG2BVLpuYjSULeuqUW4Y",
  "key6": "KcwaoX6c6WiytkYMbGwu5i3tCs9aTTfbVNYLWMpmgrj6KNuqDqYM6WrnKMBut3MiWNhV4MUbQD9TJiDcpWr8K5i",
  "key7": "37ouFXsBkabnzgTiV3GikyCzai64bRRqU9EUhgwbWjvPvBWz3qL6fUFKYjUxoGhwxfv4khHCFDpgaLfaTkfZMAZo",
  "key8": "4PPoLFLbyEqY4yoi4ssXGP8xLxFTiMWKbzifPeHytWEr4niiqs3xu3pVkR6dEaaMx9fewCGYRYDSfD9e5WfVotSf",
  "key9": "5dkaBoTCXkp5zC8WDk6HQkTypBaWTbdWbuB4RSX5eLTTmYc4X91M355b3EcNkNi8gbbp6KQXjMb5kUs5MMSw7zPc",
  "key10": "2g2F8BbSXwhJfXUFacx2WEvE8615ExAbX7W2iUqigr5WnmS9bRfCGiZ5GTezZFAYV7h4X9ySLHAnT66W6v51h2GV",
  "key11": "2SSSHpCdYN35AeG3mGaDViQRwZnobGyQ4ALhZ7Nm2gQRRon8a4eBt8MAUV9PqwMrSUqSMesAgt652pqAKSsseewd",
  "key12": "Ag5BA4Jn7ueGv6kcnrfXw1nv8TaYXCPAq3xXSLNqC95j1wM5VDSqZp1vSr11YTBtSga41ijAPvkapw7rRK4Wrca",
  "key13": "4FQXYAMUhwuZpZSEnz9KzsEJbjiiFzUsYHiJVex166NWBLbkSd8yLnNqd54BtNsLfxJBoLHLojqpv8vEhq8eEbeB",
  "key14": "2xUUidDErwSHmbp4LgKuUPxExAeEx8G8q2ZPULbSXCkkfDZcwFMVLEosx9UvbGVCWeKKhns377ysHEVYM3XFFm9B",
  "key15": "3MuTbd5jhXjYipuEUcMJf8KWjp43G3PRWuDTEaj1FBZcb9YxaoBiyFhuEqDF4Nr3LcTcWN5gV8VHNkuYjPRQYpSK",
  "key16": "3199MmUpimQzBU8AHpCHPPhQMDGa3YRXNzmdwJXGoFsum3uKNpQrSvywVg1LM6xrnV5jv8onR5Fgm6cPJo45iVUn",
  "key17": "5bzbodQHJDL6ZWcwEDqBSJaWSmj386A9H2QxYx1gj8tnUrXvytVX8dPcmsbFTCu6uTCR3CEznEwcrJwqbNddxLep",
  "key18": "2mnY7nmoFTyANg2RHffsi1yN5DuJ4iEcvX4xsF8TC67q8f6BzqHkxBgxRJxkQuhBVYrBMyjS6NN7VKET4g8JQrbB",
  "key19": "4j7Mb8AW5t56L9yxBB2H7xCSDtaofdMHw2oQxivkfkzh1EjGJXCfPBP7NXYZAEFqKuwguQgCwTfisGJ6GLeaUYBA",
  "key20": "4VWncfazvVh8EiJGqF4XCPo6xSCxGwh5Et8AMVGZZ3ZjWQCvyFEypCbbDuxW1C5PCB6ZTuNo5RRFzGCPLPGgpFsa",
  "key21": "3BqzDC4U6fLVJvhhQX8mANbvNUQif9Q3pCGnBEyqZHqrteTu5BEQx8fr55xr9nwqNZ2zPfTchew2SauJBad9uaPv",
  "key22": "4RiHov9fLs597sHank2BzH1wxLrXXAZeJnxCo6eAR9NvCHabNjXd26KJJCPzKEEFi6DTYawuFTPrX9PyXjGWnS4j",
  "key23": "3RCL1QK3tgsSHNKy7RNe3u8HkueLGok3Rvc1gwgwpLfAph3fK2oWYw7mBz7vSazvFpcYJJAdKZjvHuxouaitPguo",
  "key24": "2hPM6Cc4kNMzxPxPP74SxD4UzPWwitMzimjN7nH7fmYo5f1vCVhrfqoJqmQouireVa7STzQBPJ1wMdnjZUsC5eVX",
  "key25": "2mAL4bYhLVuKSAELRQdseMMemSUxebmjdK8HvkjGSh2YTFhJghVBKdGFi1DDwbRkhJKB6FVMeJQdZLgoWXq1ZLU1",
  "key26": "AWJMJxSxUowkJv3aCRzUGJaJySUsE5sX7SiCX5SA8hMAo2k5BxDhnx9ShYN1PvnBDKAsVGBBFtNbTNiep8irLMU",
  "key27": "38NvotvLH16iRaZ8vronNRLZgaGf8ZpHPwj6VvBY6w6J5JuWoc8HitKEBfD9CoWdscYFadwQ2aaB3ZwyWNCMhB9B",
  "key28": "63wGXTrcLvGniZcWZffKeCWarpAH1PT1XXqvunSWas2wkZfApUBzCrSrHHxEn1vY24VD1DcuvQcLzFy353E7frn7",
  "key29": "kPU1Ezfx3avCF2ZveMg3hktrCp7YA3JauhjuGPAga2eAFRWU38E5Fqy51a4mJw4QWLVKWg3Xx1AsBhXzwvSfTyw",
  "key30": "4oPqMxRkU2fUgt2cey7UHw7r3iZSxmi1BZ63SkS8ohqYGpkS35Z38zhEAwdNHwd7Qii4tbZU9MakcsvQGXBLyFrr",
  "key31": "5kSsALKVMUdNTA3Rx1UX3zkGKmHUZtgLCnGZBcGqX8aciVbY3B54qU1jJXxJtTepNftotiU9p8ACKvcWvHXp9hWM",
  "key32": "NadvX3GR8xSGkLKh9sdpxkBUgspT42kxFRJgaVMTL2v5LXfRwinUfKvrtePVAVWtX9kpxM9ft9dJzinKrQYAGDQ",
  "key33": "4JDiwF4uVuor9ZyBHSfV7sPNTrFmVeiSp5PwiMUtyDsiu52meNSFzbDMon5fd4nWPRhfgvB2RDsjFq7SyPMbyzL4",
  "key34": "67M1vzrqxt9ph2zdiJCdyLpgP3UDTrD3qQ5NEy9U7HowgpczXxAFZNajLjt5cGaoj45hukQzcq7FKc9wLwTm2vsU",
  "key35": "2PV7Kn9zAh2CUX4YH9aZiDpQW4g3VjXjbWz4pMKXDy1ATjob7Y55QU7gPzAvSKR28tzz8BgBCfqCwmCSNeD6P3DC",
  "key36": "66YSMTeiFi75PfVLUnueH6qu8T8YBB5wLnZWbSpWXNYQ2tBnN8n9U1Dqnsx2j1yNRzxCwRau2nQ924hxVSCpNG5G",
  "key37": "a6kCg8eBUD5znsre4DdnrLD5TbADiMpK9mUS2gPbHbt6jWeVRv9tVCfMGi2gCqzuXiiHfusGLyoD6QNUuyTLcYh",
  "key38": "3ocb6NTVS4rEScYxqVD6RTotxWcBvGW2LUarPJAVosYcbWXWci9hvzFAcEx4xMeoybmvJuPgfeohTnGkaRDYDd5m"
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

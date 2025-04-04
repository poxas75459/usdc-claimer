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
    "4RXS6yvJt3uRSzchemYWSSr1e6wJyfYkHeqGF6hfhsCiJ11NpzK6hjVPPRMPqK4U86PwtVYNfqmTufF6tcLsVftw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRUY4KSRGnqwiD17K2vEDApP5TZJe36uuHBhu8AhrPLo4Znr6H7TcxG7UkyrQHf4hhuDNvAMiY6n8z7XwMhxwsk",
  "key1": "3mFVTVSzmVo5KP5sHXChM1dGVdnnaxVm5PQ2WEkMDFrQP21493AaZQRETHffV3AXJ94eXpc34w2kKbzLNSvKkv3P",
  "key2": "ToN8B5WDq6PcE33FH3iDxVgy3Nzs7goCjqpMRkwumgc1Rg4Jrs1EDC1uJ3JP4TUfnUcN6RgL2sGRyj5UxZVwqAr",
  "key3": "5PyD3m2fwJjaHRGUMvXAKkReNPKXwcq5VSnrKxU9MtHdiawZheCtRsnPBUwHeQijr2fS9KvLRCMbFJAMC96F7mRr",
  "key4": "2CYND81N7cbJUqV74EgTPateG5BY8tzK9RmGS5y63XBBk8Lr99iwKeWRQqX9rW8DouEgCxyYb4tMAN6GRdnJFuYz",
  "key5": "ZTZn5m5LbomRGMWkqHgf75PXyTjATiovKkbQSX91ph1pqPZv1rqA4mXuMMsnRucBxUEpzTapk462NjPu6PDpJjG",
  "key6": "5yvdu1pwtDUrvoF3r6ZEujBAsbamRWaj2KYCdJu1NDSQ8dY3q7G4sd5aFs1Rvjbk3gfpzD3zU1g5VSKeTHR7Ykff",
  "key7": "5eYwVvFqD9XVdAww1fR6E2Ht9uz42geZxK6iSDAeVhXMzhRavRksXq4rZDgRh183NNad3tKvvaXaGe4xKVH1qVMm",
  "key8": "3gU5CLDtjjP2NHhP6HRqBwoMfTxLbq92YZNqkDor1BAK7NqihFBQLW5mRyqQLjF6qP2pKWXEwocYi5DFfj7c3WpQ",
  "key9": "3hkZRv4R18zF7p7tdUpHeJfzh44DAj1M82nfRZAsqZdCXMQJdQYZQvFmNy1UvZUYEkFrgZa6NtpvhGo1q4gNBZKe",
  "key10": "3Acakewmod72PVBcDmssgsYSfbQ3sps8tR19fSrrT8zTzgxPJVxjPVLHzBvWkeWAZ4gzST98kmhCUVY8sL9Zzx3A",
  "key11": "5ionUg9zAuSHziUW8SAUSAVmyFG2cRdAmRk1JRjockqFgH8iN3fwsTycYZC3VmkitWSRocZXsMW7svtJHn8K4JWa",
  "key12": "23zYW8xx1AvYe79gtD3Hcry5zRZQzDLhW6jqhymUtbLumR4LJWWitLb7kxTyrV6KiPcKu6uSiTjHNNbzXYmLYA2m",
  "key13": "2MFcowiiZmNPRmN6UZjsih8rtqfd7KxDPmF2vcsuvxfn1yzf2bsjc3AjgnVjsEV3n1fgxxXzgEzYtDnXjk31ehKr",
  "key14": "2PPfytWFoYFBxuedsWH5ZABcHtgpAcaLqStWGrdHy547DcoYzXSGAwp1dHDBM6L8PRJB4QQkGyN8xisfT9VJNvbR",
  "key15": "rMzaBrqGukQ92rXfT4bnhBZBhgHrt1mxBK7teTJRhThxwziNtaAwGuEwCE3zy9NZVqJ1q4t5iWvB4D1UdJD3YHb",
  "key16": "47yUvy6Drh6UdZTw9a1zJKzivR9opM6Tc88rUceRFCwRQjt5kFh1Lj9pkEbbySaaUW8pmbkvdZjg5BNF6HKyFRwh",
  "key17": "MUfSb9JaSiQKNtUaztH1JaTkxHUGo8tubgeu7SCDMxQr3LmAmmiZRQ1R2zR4jsLPfR3gAPcqKTwHeYqGtVcb7qn",
  "key18": "39cVkC7XDs9HzhnvsKUyGkpmrXNbs6JMY4xQqzNhMtNuB2b8TKdCQ8x8MaYWv8HRjPNRQVs7hxkpz3Uk57KTnZJ7",
  "key19": "54uEpzAUKJRwtd9raN67TDRrDc3Q7bR8U3hSV2RX4fizS9dK22sCvtZqZ2dPSGdMKWzyzZkXLf7cUnC8tk6EBPdP",
  "key20": "5S46TkBGXxTehYHiwNysuNaMwYqrVEdVtKzBwCChgVeRDGZXsQ7bHjNbUFPP65WLo4TvAKHUXDc11awdc6X5Rz78",
  "key21": "4bnZUYi2KXBRBdbFapXNgr9gkzGGAZi7tbSV2fxuxcjncG8rWWgCsiKiC56t3NAt8JYVRafcAxLQbb9EzHo86ohv",
  "key22": "5qsLbTrXgiMn1L2i4cCMjAohVPXHFurFMY6Kwm56NbbmetQxcEzXFSqj8YqUtoSVawRZdzgw62aMWgkvbcVGj2nt",
  "key23": "qvBuxoYD89Fw553TRRPehz5nZ89Y6amr1PYcoeypf9nRvWh2CnPt3Q3rkwrRBENzgGGT3LSdchMWrJc9V4XrxBF",
  "key24": "ChWM8sAqkkjgEiXPZ9XgBpk7fp7zLThsxYHowQ3H8z3KZ9XENWy7znmpZHwr2QpP4XLzn22FcH38DfftByuWpHa",
  "key25": "5Dk7d6HA1jmMkWAfK8wjt41X5oN3u9cbQuzynKQ69rSasJzQ1HSJn5MPJAa3XvcfCMhwQM1wMEb8m2uzaF96MnE5",
  "key26": "2Rh8V5Ud45foHhtW9k7DmstRnCzaYMVSGtgA2CUwMS1WzJeo5nMnBDt3s2GGyf7D5A2cDZLwGTf2M3B2BvzUUTsa",
  "key27": "3dxauR4E8kaTfFJCqHUS6bShhL8NNrFNreN5pBHUaVaQfFUEwkmMArG4Z9bUcGUc1kDR5iX21dW4sbPyx8o3CkRx",
  "key28": "3SKMMamY1ChtCjdj5EUT8nqX57VcXgXkb8pNZ6RkZSrbSawp1xnWXAUgGmvNUwq9ZvRjDK2gsD1dPGD2CGp7Y79T",
  "key29": "d6EmFM8eVKbrqJKZLY9NMieJ72omGHqja6R2CQkvhpmztTSoBfj2XgWchadVaQzoWLNGHC8wsNtGGcKA6LXz9Lc",
  "key30": "3c1ryoCs2AnjUiiHZrx2rr5KXeonCA6DzdnqoN5WnCfW5AbWMeBhRavmoKBVdCWPv5N76gbxhRZg7o7ayAghfoyH",
  "key31": "3foainchsku1qHeaq6MHmrpPZeRV7VoHXCieu6o3rz2rqDkJVq9az3X5jFWvLBxeRkwoapJvDBqRbsworbqbz1WM",
  "key32": "4MsczvYR8KgNbPkQAxE6yThsFad8b82BttztoxMZGRF7oxP4aJcrhuEMogteLym5WWthmeZJVzZRmtmCDm7ASQnV",
  "key33": "5FMEkiPB64cYytefjtxN7DT2LQmm4hJmCmFCuXC3WparTJ9K7dTwsMh7LtQoBYwfCYj8aeHQVuRCr7eNAWYf9i7e",
  "key34": "2MPt97NUhf2QwEGfHifVrFfRoAyAXWrUYpW7tfCtZUxCT8dMBpcGC7iiAUBVRmTES3DweHiKdw3wLBoPao8BVT2i",
  "key35": "4C2MfPBjEjkt5jjKXzbZBAagxkJYkWxr46VG7YxK3y8J8vkcTGxVnY8yea7m3cZZUTVmR6m87D1fGk2FKRmCKDrY",
  "key36": "3avo2ySUQfjidCqLE6AY6P1PetJgFfMhyaN9PTeyb7MNJXd79xkpDrGjxkcWX5M1gdCVQANSFWFksCP3Z9vhjQfw",
  "key37": "25hBs5s9pisCKutRXNt5zNB5aALR9GuTEpQ7pwymRRiD4RdZ7iQP7BZZZDREhjFZxdZ62vprNAgBs45uta9p6jn4",
  "key38": "2wxTDbHVXMTTsBGQCt4DwpSrpRGpFGe6vhS63WSMp5aVJgq7QjWfQMJdGf8i4ZR5YymEKTJYdsWZgVuW2BRMWicj",
  "key39": "67fyDQx8duSYurJaxjYPzCai4na9cViUFV6sczKDyUrvnDxFYxxv3B2LsGoTmn23eJyxnRjyGxT5joaD33YwxZA9",
  "key40": "3cyHxAZ9sZcXRMKhoiitgd7Qau1ir5YmY9p4Y8FBAXfepuDNM3fa3bm6GoEjRyV9WrvfEaGxjo2aLQ5B76ReZjLJ",
  "key41": "3RTzAdqeaBHLoEqBciBxGM7XVoevLszBzMW6HgtCaUdjbjqNWij29E2AifTQJKSGAH6eJbsYo4q1jFhDYeFTAwJ1",
  "key42": "58nfZ7TNGaewmaDyorExFDogZQD63L2XpJzGmfMr8b4cs5EMvzZbFRPBUDCMgcuM1U4BRTzhPgNcTAjUSYCodC3V",
  "key43": "4EArxcgqtW6g6wXjvcQvFxc6UhP1W4uzBZ6VoLp9nwqHKrPZdR4zNaZWqWwshQYsAbyT4g65ZSE9jcdvrxKRLvXF",
  "key44": "mDB1i1ecQ1ziGaqR1pGxBUx8Fru9HaeufTp1ThcVLgvxN8M6g5JwGNJoxnYnips3z7tmPZfBFXQqPEh3WJF1oYG"
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

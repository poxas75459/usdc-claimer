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
    "31QAbcecXmrhUphTp9GQjyH7VCFtfWU8kBuT1dDcu5vYfFBeHeoL33Ap1fYAmehJ8wFeGrrSmSbHRcjwuZazRdbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9ky6XDbD5eM2v4CbQKE56bwPTBhrapQmnBc3oq3BjCTuktFQDsFzhvy4taoT8JgpuGmRRRbTooz189Ga3A6eoR",
  "key1": "5uUH69KyK7WkX9S1mHtvqFmz3YYZzUY4sxuHT2uDtuTUtkjCpMZsEtJbpr74gaQcSsXvDYvBEQKQehyGrAZzrsxM",
  "key2": "AFwrvopuiG7ZnnFfpAnMrdCs69VS4Axauu5MNRTwRPZpMMyGBkAdqcynWLfMY9xsi2CGzjjPwbwJ5jHoDvopDhH",
  "key3": "2piM6HNDLWh1JPvo6sHZdN7AmNSw4YP3hgk5U1fZN6u41eCKpeDoo8YnGqGp4UbKS7gwVSyRjJL49T8umLHqCh8T",
  "key4": "JKJbXq461qZnRUfHprLcuCDvnbC5JvS8D8YwbFfmXM8f9KdLpe6DFsfpEn3xFZPMT8erdFyyx89cAJGe63iwrqz",
  "key5": "4wWifJJtctBA9YHcUyuE9NudEioUqTyDv87WZAWGiDtn59PiJuy9tHvRzQYuGzz7DGRgBixGSpX2JnxNReBTNw5P",
  "key6": "43U6Hp1CDRwNgp5dNiaVdpf2cV7XHhJTctPvTb8L6zSLq1EjVTiVpiyJjgFwQ83CPkK9FytiUVt24X5NMp29Y39U",
  "key7": "2eCaYoWoTxdexBaU4tU7FyVJBfjF6b2Uwt1sE3KkXfC3zsKRU5TGFUrgChBLNXggsP4hQvwJAwYdVxC3Z97ovVaf",
  "key8": "HfwntoiNQsxPNxbuy8rx8szGpKgHXuVAk6nv6HGADeHG9gSBJrirxvnaikks4rdTWQX9Lvx1emnLcuMeTNct6fk",
  "key9": "4peyA6DYVezpqyBGyZztmBKtfT8aYWVFnfpBADzLEMqB71VcP7jemaUsnfJSxqUP3tBeKCPwgBMGdNDFWs9FstdG",
  "key10": "qoUKKxdxrucLHwkAnhgYGM4jMth61LoVnQby6AfY3nnZZTBEpcUWe4KNXjdjEryTjKYrpSZkZmdkkTJU9JeavLf",
  "key11": "2Qme7cwrtheieWid6AjMQo54ipfCkPjCrCg3bSq9nUADz9KecEUhksxJuCWVgKcRSBAPBUKdxzQ8rXiykcchq37i",
  "key12": "wCo4agJRsRWTRZcafNDAanfE3s3S3j6P7PzX9JVJsvoGwwqbJPprFiTy3XhfyphNgfAChQrPkPCVzCvu1VWtsmr",
  "key13": "27J2SF7ACfoD6WgwdEsq3QWa9xGFmgpyjvR9cqZf2wDeR9SSxQTCmb8GZomr1eiW86pL4TuYzu9q7ymokhgtrjiQ",
  "key14": "2VqNWQMy7BGecTZYk5PA6jA1ga1rYebTBY3surotF8C1MAKRxn9tHvEX86dQjReUoecYLjLVfSi2U9P6d4qAWAy8",
  "key15": "3VFqwqASMSbrAyeA1cXcJBKv5q8NTjttjNk9iHkAfBbRDgag45Do9VShxd9qYmerA2HHmBGf8eGNPMSyYsdkUiuX",
  "key16": "5fink9Qo1G2uzG2CWLLuXh6xbm75FXTs9czAiMZM4nMBx5NGRGg3kf7skj7SEYrmLZerzbg8xPTN6GyDSF98Xh3n",
  "key17": "3ND2MBPYG7mFjW2pSRXwemDBAYvry8sMkUGP6FTsw3PcmUdWJmRyijRg2oQXnao8L6rnuvTn2ecCggsqjDrkrgvX",
  "key18": "3kKkjfmMH2WbfGgf2GLgNaWWtH3ix4wbxPskLUe4fkbjhWyVAYbboDBZ1orXFBZxTfw7w5UU99QeSmRvn9oUxqUU",
  "key19": "5T5h93asw6z9YHqC3PMMqrhFNXcviCtrApQiB1sKimF8FBunmiYBkA1Vc6EYQC76Are3DvWqJ6iYr4mGKKQwsz26",
  "key20": "3YsdaGrNCyd2hFq8pA6Na5ZdJ7nBoA1VG4zgV7enLX1L7tnnZLmNmbz2fkAgcZhz9RvVgsizstHknYs1kaYQhJe2",
  "key21": "3By8rvYmNGHpUVFvukPYoDaVgfJyxpxaqNdFuPPe6xzZd5G3TyhPnNz13Hvyvp3EyMs78Bx91EXqW9v56CxPkS2x",
  "key22": "5K5BrU2GRkYN7XdViZXKFcY8FMRzR2PQHdvjD3gMDiKyz8g4QiKxhAiRPSPBqmV5rcY7xnU4JwVTkaL3w7zA19k1",
  "key23": "5umVacY1R9BQ4B6mPi8reLNEnkbvVE2c9pyryhCXjy5JoeoEGv1jTJ5NxhmiTSsyeaxjm2nsvY6VD81rCCDG7Gwq",
  "key24": "r22hCwGBanWDJQA11jcFvUgrGqW3zhSyBeisHUkNQQ1XBDN8vniesk8rfQRhx8WLP8qLcL1v1WkMRP2kxrWLLcW",
  "key25": "3ViabovaZF7o5D6jVL75vBN6AfjXeHQgzFFD7d3B5phpRQbsR8mMscmUT2SS8HLWkWdVc7GXkHK7tJyo88kApjrB",
  "key26": "56VuYKhqBQahSx51HitcUcuYJXHXiNdaTrkA23FsSPRMkHtMj13GcBAa9iFGLs7e5hZNitD1d51qR5349u4Y1sm1",
  "key27": "3TuuUHvqQeyUM7vc1meUrZxM75yjKCVehNumAKAfoNZs65ZXVKspToz7VYEkPqNbYT7uFAYfA54NjYtvJEHutE42",
  "key28": "3bshYR6EEmmyMq2b3aHS2nWutbkfteGXuHNBG6LxsV1EMjkur7ywekHme8xuefFQni1CpynXjm91rMhCHyKdixvu",
  "key29": "2wZhsgbdz928sdtVSbEsHi4FQxGyPrQfPTL6G2vLfkkAWcif3aQQy782cEAz1iA5R6LzNkKR7gCX874r2iGo8KHN",
  "key30": "2d3mJ4ASFd1fa2CRdJxzqhtFPMXg99j8w3URWcgjMsPm61ZwkPcsCK4HeeLwaQW1peCeGFzagNrKNwW7BVHghWEs",
  "key31": "ve87Hdaw3ZhhVt7uf8rtYU7ypHyDjMmmJqrWNF4Apwp4cvhM5ezfTzNzhSchxSY1CF16o9DRHuL5wmqQHMVPPvj",
  "key32": "2cUNhVybCQCH489FQu7xt27sW7tjBmYm6tqF78kdV5Q9zZoyqSgoEtBr36GCFER4JdhFAbCxRuJFzyKkmoap8rQ",
  "key33": "5sUCFfMgY1RgT9VTFApj9MYiMF7ZJtwy1wLLB8j1HJ4ZW16B1Li72sndcHct9w4Mi8mTZif4H7bDdibWeVMALXbQ",
  "key34": "WKNoKA5d416YGYqurBj9gk18FbZ8iSn3GHoX14PKAN4UCzTkTK986dKUPVBWhHsz7hvCwWfmECjn3gCNNVKYLxF",
  "key35": "5YfzAE146GrKeQyRtcxwT4ixU8vAUk7VU6nTt6zRmV3rFrifGLZ5PBfWRv4P2NLUrehCZ2PQqLVqczphwN9DT5i7",
  "key36": "5FpXsgsWri4BoSmu4XpSpaVQymJ3U5HCxnQ7L44FprMtCScis8KZkoD9QbnDeUVWpz3DK6CLsCcKZ5cBkajix7pJ"
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

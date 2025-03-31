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
    "3qXufGMXL79fGHH83k9xQp7epinsMTj3UoxeFizJNsRmZ2aM7Ln9gwvJLj8KbH5Q3nasuU28rmdfgEpyge91w7GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5AXacUoPcbq4XFR5QUeCai36nX4FyNH4zcNMvFtAZtn9A4xqELE8uWbmifKHVhpM4psoq7F5JZkQQCfAGSanma",
  "key1": "r9srkBPjfJyRW9QFkBzmiP8LWD741gJKyFvhuoRgwKRgdYJ6SB9iRp6AaDxVg7yhVvHGK1sVzkA9Etmv24PcMo7",
  "key2": "2tssKh8w5WJHsMvLwd7AfBB4ySpt6wL5cWJ5UkQQeSg3Trh6XpJPjDEMPAfiwA2J3wzb3Z9AhCLSPJZMA7wbQEkV",
  "key3": "5uCiRtrtaAReKtVinYdcYRdguUyodZiHTC4krFL2BbYjP5HUbgnbntTUw2tMpMEzZ33MAiKnw2crBAwCJjif7euS",
  "key4": "5JWfgsViF4vFukS9Dk4bya1wAEfoDg99yK6J5aq9sjC3evtRnA5YG2oHADB5faGP7uKo4oWGYh2nVzoH8aNChPJh",
  "key5": "5ckiDtEMqJ5E6yYi5BioBUkPd7u1rtveWFKsjRmy46FpRTWWronubJHJTm5nM7yqg2wdMNnwuYLM3S8FiaRKQERh",
  "key6": "kiVkQady2LisjPsRGpqE2bwVrKzNr3Rp6jenD3wxFMWEgzggShuvoBGXXGBHW994fNbb7z1zSmtgVFEviz2rk5t",
  "key7": "3phoKPENMWyo86f5cRN5gNFYALLETdeJzcAs51AyKaDDDsLViYNZraZitiZ2zw9zfzG5poGh3K2V9XZCTUJYdycC",
  "key8": "2Sqmef1CswtJDhWx339wUpah6FViRMwJC45JGXVaCj16q2sv6usqWK837bzq4na5E94KYhARF84tuKvG5w1Ljwza",
  "key9": "6TSE4gKecRmMmtLAdGjBdvYDjep9ojFKnMwfp5r6gG7rNe5pDAJEWGZhf4iYiLGudksmkgJvwsBqpS1b75MeDrS",
  "key10": "tzyrsYcZtdoPnoVqw5T26SDiCFowM1hT2x35TWRBnzwaSjqmdmfyYcE73yibYi3mk9yFTdtLCL8JfVJqKDN4uHD",
  "key11": "ZXTaRVhMQqBZ5MFJeseexGTdLQYQV6vEJSmRgmasNj1xokTEfZsFo2HQLDyNtSY8hR6dhMowUgvHL4NzpVpEV8p",
  "key12": "3j8GKSP1ExJK5EQ8yqdZtWXLSoFkv7v1S9toiRgGygCj4sYgHTAS1KSxnmx3K3af9rczwXww4JoqrMfgePvFyjQa",
  "key13": "5p5U7w1XApV4AssZUYeGLwsHNM1t1unNaF8b3YH4x8Fn1o974LDH7EwWckyvPdiSHE6rodWG7itEqw5PKrtesE6k",
  "key14": "4BotrdSiUKCLqABovPdPssbYizYDc796uxFpw111ZpLA21FRDMwYHYK7Y8EXTAR6pFcfvbJSADg1d5trcU3vSRTn",
  "key15": "2xv5zD3XRbxYpkXb7AmCCzPvY2ijqZ7iWBGnnjdgGxfWFUVVFYxWmHo8h7y6o5JbNGoWLUrMPLco9b68FayzNuvs",
  "key16": "2gMkm2wyZjSvUmVzB63oM6HWc4JQt4qirb9FxM54MWTxrxJzUAAXSQAibyfA23wo8ip6DQNmjhLuWahbBH7NQA82",
  "key17": "3i43mg8g9NhxJXqSdqg6ov3aE2MUYjiQh79ishF6MzjEz62VC8k5sRQwQZbFPpetMUhS9YEs1yunTGwmt458N24Z",
  "key18": "5dWspm3bPe3GpVEMbfizMxXGRtVHT1kgobKn41AAUdp6rjtnjg1dzfJgVttZJbmnfHv4Xbc7M9syzY7GNhzmcrzp",
  "key19": "A9Dg6JYCWPG9vhpwZNY1rdgdCNyEFftC8U3Xt3vR4zajypVgUTnPa2KEqucwXUkM8kYWZuneGKmRWXu5mF6HGZF",
  "key20": "4LC8PWwB9vzSiyQCigKLsGchNWL6w4vSf7e7nY513LV44hhiwGSZySPoKBaMFJQkSFvb6nraoCBPDeqKyLPdbvES",
  "key21": "3Y6P6o6Yd5QCStBnTeqxPamwfyPUv6y98kUMC6D3FJMq9gPWMWig1L9F2MgpQeRE3BhyiMGvgVsL9nMW9dDt6mpo",
  "key22": "639o3Sifpa8aMADc8ZpBDFCzFG93cLarrRveKr8UgryMJWH6edQhukCJ6he75PtG4VNfViNhryvDWvQVmsfBagMo",
  "key23": "apyffm3LHiMRNcwZvKbb1PVCErNLYHoxtLv4CMcYi7tEpmg4cJnUEzc4yzUxQsPkpDEBDDUvf2KUKonPZfLQ6gd",
  "key24": "4KUVWknMuSX4NegJZDtX3M6MJNQh4TdfTJ9nB1EoZ3WBgphNmwCRZzRnhCLtm5XZHcF8yHSohrZ72QckVqbM7bkz",
  "key25": "4mz6RZYSeXUJFtVPtN7GbEDU1iPvgdRsovN5Qw1e45ny8nfjS8qgCk9XNxM26VSpxuvpS82cu8Shs7CNCCNrCCi3",
  "key26": "2ATAyuMh5QKVBuvXEWrKYPhLg57NSKSDmuzZnFSLQz6ep2Y6aus95kmnkb6CpF5GZJ5rQ1oXqYq3FGYvBqfv7UV",
  "key27": "L3Nrx6Tz72V8DxwXUf8SYMof3Th6ho89f3KXNDbTqC2ZZcYk13PhRTAn9TEMoZC7sntYTtu4yMEQ9dMhc3a2WXj",
  "key28": "5CtiTw4NSkmCvm4AJChSDLjfs782D2r9BPBpRzj4LuY4fHKgwXdVXQKa9EbSAX7jPjEM5BUYY9NNhL9i2699KnLn",
  "key29": "TvpmETmK815h3Trgq83rx5Bop7qNgiZ5GtbzrVg1XX61RbHa2Y4NBDW7QDxPjmrALaZ11Uq19wky3xuJK6imdZu",
  "key30": "5h7SKrwWXfHLVH3NUg66jXELrJ2qqLauPwsLsP225549TvuqYmH5gD54SrTDUV54dwDQwAcQgmaf5qA6DgAsva85",
  "key31": "gsvHe8yzoY88PNRUrWbLXwP5sib6qphw9Eoh5qt9j77gY35kZhf6f4wRh4EP2w533my86RU98zJR7ZRFLNgnb9C",
  "key32": "4XtfNXyXXVjRLjC3afsRKAGQuTxj8vcmtqhBtZF6Qy6EbvAjwkySvCFXLAipN9UyqLskuWcYG9y4rqMmkPFG59SX",
  "key33": "2BeZLwTisoe7zd7W5Wqe1hJHf8TgwowymchnqkT5anv8gbrPfyfecQpxsd7ZtKDBKzA8frSL1ss2vparFGXCkMxZ",
  "key34": "4krj9yWdBHxSN81gJ2SFANGAYJaNgg7d8ZWZkydGyyskipT8HmXzH9gQLs9PokRTb3guqYZH7v4T3aXP26UA7MD"
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

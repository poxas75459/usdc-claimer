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
    "2PRxAja2LGdxjVrkdJzdR6bezLFo7V2yiQkFo2nY8DkZnB3YHAbTvYTef9FJGR2bE8BPUzV227bncVY4YBZgx66o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w64jHHqU7NfJ8VDkmjVAwX3N44ZDvmfHF5i6DK64d6hdeqRgFkspQCAE7Cf1CpAKAchnVFJWWYCu5sgNW5pDyP9",
  "key1": "645oxznpWiATLFNYggw42k5UXfMTur746Lm3cRmj4Knw1SFE8zVyuyD9eohvVxioof6GBeGDtgi5asjRD8YcYFC9",
  "key2": "5VsRkC5K1n9oWTVLhanDXjMyar7sUgySzzueysy7J5PMaVnEpKVijrPruqa93jgXc4wW7p5NCHZfsTAYdHc3xtk5",
  "key3": "2gHLMpxVvktTEqfdvM23pQd11g8qTuJwnKnUekaWqzMpg8GrgA3q9Y2HyYJt3BgfeNud7GCx88fU3q7ACpCMEsBk",
  "key4": "4UEEa21skDqU9ZWApEUgur878vUgZzxccEurvzg4cYYQbasUSo1UnemEuGryCnk5aTHZ3gwvWCX8ZeP3exUH9HeD",
  "key5": "2tsNYVQimHRzSsaiq7erKrVokNTDsUdDDjt1WFgTzY8DVE7bkbBS3RRpkZMAEhzjD7JfqgT18cke8M4XuVPyM6Gg",
  "key6": "H8wBCKgr7xHXLr5aNP57qtvvYHTJGA2V2U8WaBhP3w6SMeiGFicBGVSXJScKLwuNwxdvUknX6wJzmDiRZbH7kXs",
  "key7": "3wvzsSAuSDG88JxzTaBNvGndhwVdTSxFUQBnj8RWBjAwcf3pEnWoZLGpVXEWoNZTbq4GpuvapxxWwjYkJfrbYh1n",
  "key8": "5wkCKm9M8Jv4d6NKX2KDYPs9nxy1tY3qvC3GbrptA9ntNqBEzee3hjPD7HcRsGh1667Xm9bL1fJeYAJSPiwoD6Sn",
  "key9": "4HyF5jN7FCmZB95bP5qfsXyT3mMCmG2Efxn233bjCiSTXg9CajHxZWwnYVr7a1JxJx7QmtMiEFPKepdUovLK3xUt",
  "key10": "4rUugMfaZz4moZaajARFTpZjZMs1W1aRaU3iWhFW3T8aYqkME73AmXFiyrq9APFH11dPSQo9nx9uPCqzzLq82vs6",
  "key11": "dmiViX7bGj55rBQyfNoF5vWQBTkYmQDJpQb2A6J3JRdzZm1WppTZQYhtXECKpp9Mj5yheF36pnfjrNRopU8JP8e",
  "key12": "3g46wVP3fNvd3fMbbxhd5bdAfJjMZUTs1XEZvxiXXFwiDVVVv2QpJQ1YRotg6bwjcrDoddxrP9L3szAtJViVPdLF",
  "key13": "2yy2QgFFJJc1ANcssjXC6HVBwJsj3um7inr2XnKReRQDctxe6TMHQnjYzdXVRYmnXDYVxYyATBD8j2qBgaUMKnbb",
  "key14": "3Fs6QvpvZxfVPcVeKmF5PQgrhfdzM8pmsWsMjJcgrSymky1HaJU9aPW4kCspeQqHAYfG7MCmEcyjsDuPLwr5qPfS",
  "key15": "4QvPeiL8xWygCZRsHfkbYW4q8uorWhp6ZzFv8eovmTcXfpazLKEDN1QPrQRqaBbFswDWVsCLHcFGbmq8TP6whY1U",
  "key16": "5n8QtDn3sKGvt2QJjpRpr6yjyM4wDNbkUT8ufhoLFUDUC9KXLv3tabZDgy5zCMMTqqvu8VsD1mwrftNGrJXH495e",
  "key17": "2A7FyWrdt1ugUTbTYxov3FABjtwB2X33sGsADzAAWQpfac3Aq1wdczzMDLzCFEYK56QcKjMRytDWTF8rsLtwUTZq",
  "key18": "4bmcvxQibAtauWpzBiz8tvQ9Jtd4wp52AeGFgmmVuJmMqSRkhW8Yqny8KyGJshyFakiz9pCHS36ryz6BNxpy9jm1",
  "key19": "4YYG1KbZLdoJy5s1kdtE6D5L3ziXxC5ifJWUygWVtP8z1st6LgJWVfhxnRVvaBYEBszSU3dGuzjsM965PZUnwrat",
  "key20": "2g4XKQiPgxTD7voW2m8H1CxiQjZ8UTTwKMnbGgZ6NiWSCBHttivMAzN2aEh8HUcr2LYr7CZpTbwJsMdWBfUncJ3v",
  "key21": "buPqAdAbCcBLgRbUDRQTwLrH4KVwjhfq9Vw4qkpyJJQibx3kxXCFcJ8wJFzWaA5KsfcPkEMF6XELUT7o29Eqbvi",
  "key22": "2KAuptEovdf4kMPchzwK3cjQERRvjB3YWPBDj9TLb6wDSajHyVLep775Hp1NdBNrJHQH14hm9XPZG1WirNC3MtNx",
  "key23": "YeFRR9XVVXk24iMu5tJHSTfX7s1PGQCDiNszn3dTG2PYf6UeHqXeWJpRbNHbuBpm3t6LiJ2UkT7rY2KtJ4tyzv2",
  "key24": "65gR5UyGbN6mMB3jq1Nv6K9YK5kWAdsYdXwa6Qg3zoz1u6Vx2nWD84B9ogjVHPVaix56sEeLvFkqD25K5rs4ibu7",
  "key25": "QqEkD4U6W3KymXrqkVB1H8FV49yZd4RiWTrCxxTWHVQnNT95nCpzoLVCuGcUGPfSBpUk91HAU56NoJqbyjxjiLf",
  "key26": "2y3dWzUJr62wEXQ79CLASHcPKiuoYkzvDHeB6RGQEriUPLpsE5Fk8UaTwX4mbjJ8TnfDcaqYv4akVwhcUwpnJzFH",
  "key27": "563BE1yZZL1CpAjyFoMBZLhsML6Qu65caeQqF9WxjdUWQPreCacNpNDgVAN5Hn9rczJN1biM4druBNn2kFzLhZVa",
  "key28": "5AGuVGMtod8JZ3yed78BYYygpExHEKze8pDnR4UagaaePrH9qqNnCX1DXeZcJpY3nbCyVFi86hhY85mG82jWQwQR",
  "key29": "5GNdwKSiRom7YDPoePtDuEjHyiw2w8SK6kjDKUsGuvQSer7S1jKLNTw4WfEBpKm8u2AFZoWucrf3TkB1h3U4VRg1",
  "key30": "25SdN8m1j49BY57bm2SLciEtyYACU67ReBpqDti3hQgxCngTGygQvZVCUvZZTD8DuT61irLn8mf7nEFp8MArYKLW",
  "key31": "2pfbwbCMMgqvnkTX316bS5VK8PTj9zCLYt7rq8S9MC8r722ep5FT7L7LDgBWtyT8ycMNZVDY9c5cDBRFUb2dzGVB",
  "key32": "2WNYdbn8iVNnW47VK9U9kMsqVw9jR7xpKdodt1m1EixzsrZfGcX3NnFG9kYv1AnTT29hRnEWxLYbC4WvLbYQLXKX",
  "key33": "3Sp1nafTpd5a24MdYsDqTY2pwyWxvhWXxqe14JG7YH3DozRYbNGhrxV7vTtcTa6Vj6rdUdVg196ErNNJxsNajyQ3",
  "key34": "vszyZNZxGzpwhemuzRcGLsJr26SXVd2UMu6ERpdq173y6BzdYXiunZVDi1Eog6iFEtNLyLHCBr33i2fv8fjDxzA",
  "key35": "5Zok1SAFtTNnWDLGVuuu4kQEciXNDt3HvYMuFAm39GtYXf9CQygXhNLekbfoxz3Ab7GPZ9xAwXZs7qbmvZiLPYXh",
  "key36": "XsfCXDk2s5SrZxpw8BQuPKxDE8w8AvJPttpsKvF419ckpYufV18o3TeePoqttWhpXMgNFb6QkyrDShAVvj8a932",
  "key37": "3g76WVL1kwzYEWgu15KPhGzSLkk1WHBS2BrV9Nc2st3PhNsgsX5HZkPveeZ6DXH67NDdkXPW4zccXzJEQTA7Ai8C",
  "key38": "4qCb73SVJp7EdW6penqEELPvQ6U9T7u64HjPsDttpGvERGxkaXB461yk6JkKD3HXNuFCMa7w2cHjCHdvwBzoCiNC",
  "key39": "3g6TqcMnbrqBwF5ireC4wsEv8AJ2aQDrKtwemwP9W9Z754NvXa7PqV9CgTaVcEK71nLDqBT7mrvgz2DQMJaXrU47",
  "key40": "extVj7rNQ4f9SCTpLH4ArsknGqHpPcoo1q9bFE6qCni3tNkq84HJhH4xRYwd6mwKJAissMHWVaUbcnieqxuYK96"
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

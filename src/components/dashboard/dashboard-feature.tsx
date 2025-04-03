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
    "2jys3SAsfPKz3HKAqQqL4sJ9Fz2qXc5AsJNjK2h8AmQFBBCZzpUGBTRtgtpVLK6PAVHSNsqu93EMYrQ4dQ1rdpdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XS3TY5uceyZLY4aod7B58r1Sr4N2YEMLmxEA6eX4BQ7e8PifjdvjXTJxF4QwczpuoXQsqVS5Va8fWSXMcdZ2hgB",
  "key1": "jtcnaXgaDb6FK6DMFwmHmij8fAEEVPwoVt1bbRhYxLAVXqW5TYNaTtYGSsbCbZMx4mWmxGxDYCbXFLaNU8Th5AW",
  "key2": "2DKgm5yqLGdbRZLBQL7VoFePYR599VmCtiWEFVhoYyi9GKGG2LMBx3NNfwCEjztVW6cn2dWCA6SHrPXxSAVmSSDJ",
  "key3": "myv9A6iuV2zsZsjo62U158NBR13sHzrgrhdop9L3aQCXG85g2Ttn35zBZZYQs4pPyEFVCCd6q4KmevZB5wH2WT1",
  "key4": "MGyEqt4eX5AQmyqqdz8NnQKgGM6XUHk6P3QdXjNXjwSfEU46Hj5duqCSNTJoAEP6hwYWrV1tDaX3D7YBtXnnqhF",
  "key5": "RnzhkhC3U6Vsg7F5tCaS12aDNRmDXnpminDqFftVQTwmnXZjKyrxLviqKmsFqx96axJN39sVgnV3N79rmp886hz",
  "key6": "66Z6yZYmsAZECoCNZvmbGFCUi2HDpcLQc2ffqFWAKsx2MWJ2ccPPgzR1moEek3C8yAQunaeWeGczUdk6W8SSf2pd",
  "key7": "3BxkgJpPXvuiFMCKS7peJ87EXLE7xXrL86E82TsYVcXaTFVorFb1y4ZzxaKF2pNQEDHnXGH9oHmBKzio5o4Yn2j6",
  "key8": "5GSBVdznR3VZGtuZanLse7pLnGYARYSBhNNTkucEucjefe6aCRC4PbLJ1RaY6dCaWh29CJ73MJnh5GxhiNgmcsZb",
  "key9": "adPGxj3oKHksJ1e996S92EqwCHio5JndYnRzzwV23MGoEU1Rc5S1JsvAfoTRrGx83uXRRB4PTaXA8gcPocZKGd4",
  "key10": "a1uJEyR66pTgXwKaZNaxoZ4WqYt96rWmYGvJqWLYkmgXJM2t3LcwK2S4rzfWewboYoL9mmWj4iywqR1djBnDHNj",
  "key11": "hk7SL4diE7gV8DbWMcSANpKikbpZEUpYNw8R3uEaVbox97LckRs4UoxPvRFjUUWG1oE9qDMHnHGPxthQoRRHFpK",
  "key12": "3Svz9UxMHkcyiR1WpqXYM7DNJo3sroTFg2omtJNuKKZVfhZGVjzKJerNHEpXtnd6fc29uKEJGs5Bh4QcJLoZT9G6",
  "key13": "5U1wutBMhYezndboPhGgXJduQAyqQadpJvfJPdETqfpEKrS5Z6JKoWSQBM6g7oWxL9JzL2TBEtFybvUU571g58xK",
  "key14": "1beKJvej2BVsrZWsaFFsNvgTMkbjX8s1ktAeP7D6AgL4r21Ee99g5s8HDk1WpwdsVwYmL4Xsqq2zRM8VdiXFMUw",
  "key15": "5qjp1tm6X5F8agd2aRFk1GcppPFuBG2hhPGCBKKDQqFDCYHKUUiHWUUpMu7nsnrxhttcRSDuU2yBc7tdrZeFsUz3",
  "key16": "485zcq2YozXzN9Uy4sz55517GPg9g5pZ6vwELQQH8yeVt4wg1YqDEuQTrgKFosJkeyTjV2EhEuG3qHTRKRTB2hhS",
  "key17": "5hW9UDap2RiFY6rh8svbgGMEfD7sA8HETwRtpDdKqQeV3KtrKiaRK7ezooPHYvWU8GtByntvBMNfUfWzhgR1nVmz",
  "key18": "4BfammVZ2xag4JgBNq1MpWBNkXCLcohfvrhaXsBBHGhCqt6jDnky1HdNjSc8J5vo5Y9KW3gyQ9zcVt3XJTziEhQm",
  "key19": "23Q3CTS3n1xrB3gVzdo9ZQRXm31JrZzXrytbDz8eKUDMPTtjQUbdGvfV39JHvoTLJPzMcyUwXapJgR6GBwG9UcMJ",
  "key20": "3ymjKoCghjCDTobRLpb5VA2C6gSMditmBiuMj8MA8Usifj4FXXHkQhcDSAV9R3KWEpz6fiNBq3LQcV4sXMyzcRNf",
  "key21": "2bT6P2HtE4tZK2sE46DbaLXGQqB99ehvvjoLozz6xRpRTBKq56aBwMVqgznGeirNxTHpidh2BMLjkEoRbNiLWPQT",
  "key22": "NRtzTD77jCAMam5oh6fYusjPrzXAfySbmmQAJXRSFjRiPo2PppLjcFKvJqisXgKhXPL6ZhaKQQnNQcUw75dXJjU",
  "key23": "5DT7R9i8QwRjKgdXe2naUiqRaQ5PEo2RhBpRDpfmxdnmcxFfP9SAq1PLd2arntH3XRZL2DhPMKNm8Mjna8ZuYj35",
  "key24": "2eyM6UFECPDEnCqnaesCN2tJtMsQ86AdC4XDVEMUjNUGWc3rSQUkHY32PqcxeWVxgziH7zzT8W41er9an1g6L1UM",
  "key25": "3GQcJ7m9jssZuRU6Z9mhi55CC5usBo6bFUEbiUAhqnwYHRQJFuRudAezwqVYydwbWyUVPt6iiKxX18v9qPPG6tFS",
  "key26": "L1cXz2mPNB5BF2XT3Q7CEEhCcoJz1yD9ZqKBWZnvgHuN9FCRwjwyX7jzmVbx92Su9RGqM7NBW4PiNqhzGG4JfiF",
  "key27": "3Jm423ESEGH9SaMADDf4m7Fh1FzX9RUc5X6AQzjoWv3hdyra5VC1FtkXdx7xPCVxEdcdN5mfnFfgF2m6Ptv9jWHa",
  "key28": "4pqox4Jzt2uaDU6WVThPZEL9kXJSsPzssptUdimvJddXa6aHfwNUwaRp92F2uasMaoyeamXzERCEEWVvf55tr6MN",
  "key29": "32rZuaGLCwg5Hh4PbviBpvWZb4wWKwgdeAQ7FYoXs24zjYz8uZYgjQQPMpjJJBPF6LV8TtGqpebZcvDuiiQZY6C3",
  "key30": "5yXJHGJ6MfLy5ijKWeYL2qWHhdbgFtR5n781cTQqPzhVyUV5f1cNibYy7EtRBkPcUKXeQxmqFLN73VFdcW7iWYg3",
  "key31": "5wgFMGdENBaeSLGYFdbdBRNKwV1otC5aisXSVdNnLYD8GaV2XsGTx5Rk92EsWXkV55eJ5wnL1jZy5jMQWLkzihYa",
  "key32": "TqvKptLY3MiFCXne2eR4xrf6L1tpYAxBSQDMaeozSpymon9KfzTwEQcsK4gF9ZDYM3SX2pYRfpgcKmfo1Trpuw1",
  "key33": "4bE2uPB7ywNmgvBqAnBHRbv81dFHzZ5JtgNbNCWAhQxWiMGbbA2TgWDf2H5Ctt7jEKzkZ4JEAgdn5AGt3qMitSvY",
  "key34": "GCBxSoSnc3SZyPDZryRJ28kdpJDX3F1KLPVJPT5T1hhEzTBjBtETgGADdqSCVC4gCPaqGhWQeSjjBVGr2BjSWSo",
  "key35": "4bFQDPdZoLBG2e3kXd5tWrz8oWEQB8HYXYJxshsUetokyLPBPovTbU9oF7HfKVDMHymWxAtCJs8AQ6qWAyu4QQji",
  "key36": "5y4CHeeFLTWWHjj34AwVSyg25pDi933kmstiirr51HzA44Kn6B98AFSmLasCiwNgRXQBuKc9NmQm3JS5esQHbSxN",
  "key37": "62xGeZZoRMsbSfkrevtobVpzrdNBaLWsefwxBhYaQmFi36emDWX7WnKAccuTGrfRyR8TBSLikKCbvxGJoHwXi5Eb"
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

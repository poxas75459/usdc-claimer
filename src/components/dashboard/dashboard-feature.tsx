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
    "3DebM1b5tNPsAzZEeYBSyRRPjpVP3uWsGqSsq28CXciomJGrfaKm4y6XE2mQ53p257ieeTsFoVs3kB4n8Wr9ezFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZ3TpGMkndApe1VWuvKSGdTzPt3pJwcMNC5ttGm835UkPqPdeRsDJADH3XrkMUT2oJ5YLkbUeYApqL5f9QsK8XG",
  "key1": "DoaxY2ikfBjekLukjhatQR6igWduiRUZeSQUGmBpYB7j85cNxizY6CbZutP3hvV3y1sMp6BKEBNmhpKAR66LjVa",
  "key2": "46g91tdHT6U4GkFhhvsNSVdDYTzW6Ha8bx1tip1pip74k8sxFSwf5fqvz2QoNTwMR7VA9gKcdhNMVaeVqXH2RJyM",
  "key3": "3tor92aBGMe3rTMnkDfUMwepUyUZuw5sUaYLzZiMtxWZsX2H28QLVosZUPJdVs5fou2CP2jeSsR4BhGjuAxrweRL",
  "key4": "5ejvZ7enJzHTqK5mFeSLjGCNmquxBVtpF44fxhsQEJfjVj3hjK8rXXdVrWGdbM94dNrouPdnH4AskNCWRGDkBspp",
  "key5": "4FudrF4rvwBX2vTDuJKDZhBpdEssCtm6u2gmoCkgNVq2GzUCfaES9FVPaMTtMnySnaGazMk8xdUTKsTZu3f9evtv",
  "key6": "4iJ17phPFEX5v6B4BDe2dPNpF1gZH2erRLsyq4JwAwRedr4jVUT4bhP5ey7KR6YWXj3Br34JDAwmHkbxNjR9htLK",
  "key7": "4jojmveY3Gy2QTZRhurzgNth9N1yoF95sHvr4zGtcjTHgtqGFjawtDq1kHtiv2S14zhbjJDiM3EW3zkX1rXyirD8",
  "key8": "3NSHEMJJ5W2B2jfPSzNLQ8XyQsu5ZwpFdS9NFLQARxb5hnvCh2i1xJWxiFEytmGBBfUSV5Kb8cXfWyFWGPdYD3bj",
  "key9": "2mbQaQBeBbX7fQMfXv5fvZbbjLiuXiXjFGNeqYQAH621h7FDd3xJd1DPy8mbyameQbRN5mmSjFP3G5hLatmMFPou",
  "key10": "4VPuJbNAnzhA8fVtRXniUVWAz6MACWxR6rTrJ1i6LAS5wPfEEucAzrofoJj3bc7wqkekmqHgfcPNwxbFJsMY9kkt",
  "key11": "5yxsBgPMDLEVyom37SrtFUPhhox7iocRoAGD2DJz6yFVdDQaAtqRkSMrNmib82YvQjHeeuPp45ypATAGDVjWoSkH",
  "key12": "66AYqTgBrRo1Q1Xcx81rFK52fH6fCuWc88vnDfmJYNjEEEbJLc1fJ5L3FC6rhXKpiWuKHrzKZKndW7UKji5d3YT1",
  "key13": "39E65Yysme1NZ3ukNYFNC6CsKbWGHD75iS9c88cnCSmrhnvSSFGWXEC2iPB2aHgZe4b9FbZPzERXseaevV6boTn4",
  "key14": "5TrWw57rd3wxs8EkPUstuEU8dVwBqMEfAPohYkrwYzLdgajb5rVn6MUvhK891BsurAbv3YBxFnYpkfLNw9YWxSwC",
  "key15": "2da1bz6cWC7taevXstzqiPNgVFxBDmZ9NAiHAvi1EEMUhPBBqc5dfXhpA8Tnf5MztkBA8LpRNhKkThDNzrBBvNQf",
  "key16": "5RpAsppDcgzsYPEdE2mDgUUWkGwbAK1cKtvX2styMPBPp6A1k9s1nM2prruVDQ8SbTfbCkw87AzrNcYvJ9B779Fu",
  "key17": "8re8WdqF4C1z4yWNEJKwUv8X8rGFsXXNAQmUBbnLaZimNNh2baXFpBuSo8sTsB5QLhwAuxNQzMMFXsV7XeFw6cL",
  "key18": "qiLrH5B6YgB9f7ZQB2VxgWQVgJ8RViyVKmf5CQzKfwm9RUKYqiUbpDiMQgogHesGN3j9jpPswSUV9LsUtX4EgRN",
  "key19": "5759rZ2nGC5VUmXJFz8tEV9mVGR3QtiphFmDoCMKs4rJiBPuQPbuvoPhbH35WQfEFcX5kRYuE9PPJjaHPaQJANu",
  "key20": "25Q6xtLLkBjgW17PMWBowGYsuWfar9CB3gX1vVq21Tt4SJ1XGMjCC1UyDP78mD72s9roWVdn7FWnVitVQk7JAaUY",
  "key21": "61DJNr6xea6visX7MT8W93dNA8dfgNVHprc7WUsGMdFXWR1owV4DTVkHb853MuTGQYacR6cT7pN4U1A878xDuCU6",
  "key22": "3D76JLGpqQzQKdkpFqxiW2RLgqrtQiWH7txHe5nMnaAj4zE6T44pGGdJQcHxifthsvN9UtNhvMeYsbLFXpSPh7wU",
  "key23": "SYhPrzHaWw9dH1YqsmoJmMZoRWUNWY9G77BGUXycwmLmZCAqXZi1L5ByhHrGYziLe8ctqDhsNtWgwoyAkiniCFv",
  "key24": "4oeNbfuz94u5YdjD3p8AkLXnNaWFwxFCP3wMuSNnhQAgMAuthghSYwyqUQaLU8NPGF5ueTyg3GphTDxdq5qvTbzD",
  "key25": "5F8QuxT3ESmpqYaRh1BcHVsSBEkTo7uB2t9EgzjZNUFhRDF85kmoCTmh8wW5uYwct3LxGF2nAnH7oQntoj4auLU8",
  "key26": "3cCvp6gCiRxyyM38R8wFZXdA6RTuyHQDJMtTbWY9ScjBzqHdm1oMqXWbzuydZeA9SPJvzHfkBFQfgqsdhAvtBKnd",
  "key27": "xvSokDfK8p3QfWtoE4zURkhVXRh3xyHBMT83VMAN5RQB8C8jkjvam6mD1wr65kbyrJbaxesW16GwUV28X7idgef",
  "key28": "3RG8EZgc3zsvV1TnTXTcM5QFAoDBog857xzNKM3KXz2KTLLb6SnjVHXfejTbrgY93PfTegNEWzuhCTBNk5Y3EoFV",
  "key29": "59TxNRa7qWKSdSxZspb9imrGqweSBKKL2oHoKJHzySx5kvfoyhds8A52Vs6u6G3yA8MeK5No8w8imqp9TYZFYzz5",
  "key30": "2rFQUL8TdUZyK9pgZZqrjJcFJ3Mtnj3mkS5GrCBePcCgZEKto2ELa8xFyFTuTk9Jh5HaoNgzg6Ko4YVDTUxofjpc",
  "key31": "4c7VdZupXUU2JVbx8VXc3Ne4qoCw5f9UrkQkLkhSe8HgjMqsJkwLHibePW2AoYcDLcc42x2dhnvHvcQ6JSLbo8Jt",
  "key32": "5Wcvo4aEagatuYD62Wu83PbXw5Z28h1PQdwuDXcBRcSspoMJsm19AgpnqBp3bDxn4yN2dJhC61tTVRufXWndqwex",
  "key33": "4Pu56yzUL7gNyC4QzKzNeFbWnj8v49RAuoseL11TjWTHVKPR5LgoaQaAi9BABY2bo1EZiVGy6ovnN9Y6jYNU7Di6",
  "key34": "3UbkXyAPVNb5JRFpUdedabRZdC6rLbYDLKWwxroT4bXyuZVtsnkMs9A5RRUzDySAUP7aHT2YvduVC8oaaAFuKX2n",
  "key35": "4aPhGmMs2nvPehg9DySvbQdxZ9Mo24Ax8jzDj35qu5UpyxdM5SD7WESDKNdstx7CPWwSqvk2iz8NAaWPZ31Fd44A",
  "key36": "3xgeaHGKVbpDpc77m8oRnXiU3gbz2bAdFKbaigE1uaUDCQT1e9JwaSMHmZDqLqMzNfdBxBENJEEnBkrbZ8bxMkxJ",
  "key37": "4hhQ5rHvjzRxeNLsKs2RuMh2cBwnhVarDDiEuy8vt3ZiRDPUeoShvEDk78x4Zz81wYhTXvovChiCKEKDuZm1eBtL",
  "key38": "42LGM9XFZFASWVqFCnvxCVzEDd2ESVmHSzYygH8vRmpJRaG9nAhAhrbjijSJZ1kTa2hjfTLiNc4D4oMXVRYewTo",
  "key39": "2J2bZbqmzjjJ4BwYG2btL7xpYo8QSdrt5wzgFxWY83iiEShgUryXG4Gu53fsino2heWZo7ka9TRP1U5NvXkCeny1",
  "key40": "3QmFhEdfR1cvihcoTwt22XqdVSvcXXi4b6GLh7bddxC1wALzQWpZsz3YLYgiRHKfybPMpvqpiwVnm1DJJspExsr7",
  "key41": "4Ge7z2R8tspW3MC5i61CXeXnXgYwD7CHv37JCEJ9CeKsVnMGb5JGwu1YSQU1vfVoMxdJo2N2EB2EqnpvMrRHRb8k"
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

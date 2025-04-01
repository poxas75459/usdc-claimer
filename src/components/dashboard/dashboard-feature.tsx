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
    "4G7krc8SY819YvpMqp1bkcTiGkGXiRKT9vKPLPBhfuEbiD1kmCoHRD3MorGo11xGVgU8wfhfeFtx98219E7ZmRBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHhCuKXTtN2Uiax2QBWW6Z2fzgkTMkQmJo5vDpHGiJRm6TwFTTtDfmUiNGi15jNMGyjiqVgFt2SipnZqynqh12n",
  "key1": "3q7tCzW8WmDH4GxTzvZwbRGSWNCCVqQp42tXoyH1DY4gwBGXYGgJzKipLmpBLwe8YGPdxFso8ki4aF3nqLV7VzHB",
  "key2": "4wkF1XRa2T9S9Z8edhXTTSmuVJNtgpyTfgHjMvNTUAaN7aF9jcZXZEich6XVVn3LPc4yTHqkTQyX4W8pPGrZ4dHg",
  "key3": "2zpUKD5W2ZWPE8FPegSnhXqhg9emNztBy1RdAWMYSrT714uB6bf9P5nSzVdWAMPnE8VwMii7PXroHcGs5VM1JZfp",
  "key4": "5pnTDQ1foarW4QnKUdM3anU3dojHwdjfPkuFEjWBeYBFphiJ2XL35M71mLodXfWgYUsMMa4JwZKKTSDFAWXEBBvD",
  "key5": "FHABBhhriVJvTLZLvTNt94naQmLtcbbnHUwtqQdvzd1gy5F81axnMgr3XUvJJGd2zKVLZZNF711KV67HH6eV2vi",
  "key6": "5dhwX6RuKbGXFwo5v87WZHw6dmnpNqeuHHsrraS6RyL4yomMFswEbdWBt9fJzkGL1AbMntptg1YQUCu4Jvvo7yJU",
  "key7": "4Cj4SoAo5K39Q9eTdFHHPeTLgpeYCNmqLg3bT27zFvJrgConbvCcrx1Ss2TjyegiAuBQJEo21Y5UCZ8NFc1rP12t",
  "key8": "4oE5rd8geXW9GMMdSsMbY9aJ21q7bE6rSHQcQn5eAGAaqWupNSumYwqxXNCANUdREggiPr7NuYGcbbkBF84h28yf",
  "key9": "5tcfx3FtthRNB2UbuhRasqrarDy3xtSXRMTi3UmwRgGUBGaRSod6G8F5pPJHCpHsRUJ2b7Wdvdv12dfUwofNV4Sk",
  "key10": "UNZmQ1fBB6CDFZFRvcTY1D2xkUpDFPxFRkPEL14dchafwEbeYy2mUitqUBwkgL1bBXFNqMPD2xZbXpYo2c9DEJj",
  "key11": "67pmSQG7KYMCPrcUFQg3xZmypNXuWz3Z74JDR5PVwJUTyKi8MjtqSuHu7KLX8FzPmmvdVBsi1pD7nb1mhwwf7EE4",
  "key12": "ybe7neSyTRL4tLrzhWUtqpWAAu26MT1sFN8p4C6EVTMJgb65VaVGgKBNUQZfXtsYLegdwSYk5XZ8WRAFf6kbF1v",
  "key13": "3S7YvXXumQjZKfUt2nx6Vnh6P9rSZmbTb2UfWJcDor2VeX3Dvt68Gmv1D7XJbERcMSs2oSCq3CDDbGaCnj2DLCSk",
  "key14": "42CDzooevPz1E7dZ5noWaGHHN9fTcdX4Loj2z51GM9nsmeiwYWh5NMpXKuQNSjn7VgsWWdfrnz97r2r9foQJTe4v",
  "key15": "3hKUsDNGEPapdTD7zuLu4xFha3iwdwuQL52CPqpPikLU9tzCcJtjyWiUQHTf2ZDqrhQ12V4MrUjqahTXmdFCvaMW",
  "key16": "2ZecpcEj4aMwWn3reZ3fRdW4jLjSsJorkQKgwjqzuJn3qNP1NPy6uA5CoXTQoZhG4CVe8mFLGXQeJQaA8hSJ8Z36",
  "key17": "3L9kkcJoURj3KqeaCRwtCM6naTbmqBfr3VKMGSmbLqNSNd5JPEUAWGMe17sZfaaQpPLhzae7weaLUYnbLE4ZTbZX",
  "key18": "5yqHHeSm5h7FKobisDRdEHQJuw9EXLuGBE4mwAi8X6RkmwbVCYhBW1R5mZNrfSpvtEU4X2ucRR8RzHw88VNAUCco",
  "key19": "4G2DpGrPEKoVKcpkpht7EYin1y2REFj1KDiwbKZfEHCV2dS2KQLdBuVEx8LGXvTRWxh7A8KyBsMLjPsS1TUDR7uE",
  "key20": "51nftCNVMhBkRTmQLcTQ5C5pyBTafDh8raxdGHGUKY9GaFjQDcyYXTiEdzkDgd5XZsdYfW76FbUNZBPZayCBRHTN",
  "key21": "5DktXd2eGbv4zfvUxEmkUWGZbGTdJ3PNU2EmkmkzTYYDdeKQZ5PnMPbx4TjxgxLG5FjcbHJWFsSzFpecTFu7KXVU",
  "key22": "65Tn6R8mdvZcDznFkrqZcyqqx2y3xezDb9eHFA9R5RMmKqKXSCasXTF6xXoAkxMotf8K1bwqpmJTg66EwjkggChb",
  "key23": "HZrXLRS2eRuJn7HRpysKHY77JQ9wFf8eXpVNWEvRhjH9j2DeCxhrRtv6MNw7kE36VuoW7fuFXbNY6GcyQmL6aFu",
  "key24": "2nsmWNP2b2gQYqxGHUcYjswZe4oN67WJJTaTAsAQVSpKyY8hJM45Sn11GsL2G4o1ZBW1if8urGFa4evXP3kebF36",
  "key25": "HxVt4G2VsKKyxisH62RGzPfQChTjx2WxUFd6pPSBQZMKhwTPcqNQ8EJ7YkLE3JCdHGpfXjULb5irZkziyvtwNkh",
  "key26": "3ReE77gcSxQgAmTFaLbiwaV4jvZc6VcTFVXv9HLHXBdfxCnNy2id81zg5nKiYq2TdSZ8PFb4bp9EjsumG3xzt7Be",
  "key27": "zNGH4jTqyzyjtepvvX5QAuBe98jdQpFZrEbMvRcVgjPCehqUkWBTMyZcTW7d5371JRXMzjgi86SyMg4sh6oK6Pi",
  "key28": "5uwUJWh52EAnEozVFKoNzXFcaAJXnWYfjKc4aC3KMoDEMkuFvVZj9gzV234dA4RRkgTj4hHnUhvedbXPrHfoHqC6",
  "key29": "8Mv7s32TFDTFaqEW9FW3B2swJX56YHQBs8fZuTH7P2y9UPWYpnFQrPSLk1dfd6G1f51PMKp8SkSKpPfo1bC6BoZ",
  "key30": "4AG4WLqJ4pctZhiihHqivjnsG5iSwFc6z3m7Tt6WfTzv2cPcT7yQt5VnL2F2vxkEMWVojYamDxnAFHP5sx4xTgZk",
  "key31": "44psmNmnCtYe2Q72qkm4iBoDQKZd75tdvDABVTkUrAwyNHBoGLU38mwSHXC1HqmGWLjoVULz1FNN9F937Hsy4EPN",
  "key32": "5sgQGv2pBQQse2MFPp1AAjAMWpGxzPvyFeq5vTXVFdTEoEbYm1fEXwEJUQHWMt7Z74rukHD1EFfUwvonr2JuBWoL",
  "key33": "MRZyfreA6ahiNiFkKSyAf25UYj7o1dyYaEJHBeUfcsUTSpoHx2jKsJ7XRGNGEGroLCWTESaWAXhcjcaixfSnufW",
  "key34": "5y2XBc5aesYPPzquNiCjj4x73Xwy3KkECxRziv5FUZ6X8KxVRf9Cv3qRdc1HiqnYkCcVsrjfgQBfRuyFokN8utkd",
  "key35": "5N7RFQCrX4PnSAKQG2j7yYU7zeb2CjFApAx3bqH8ffHRhhFCtN9ZiaQrb3he3Hqp4myGEgXNgpyH9RJKmHTToEwv",
  "key36": "3fteZ4hFQHHqZwHMYUyTf1mYNZuqCefhPaMFxaqRBPHsmrHGfwGyaSU5vapTLMBikfBcYypH9XKqendnu7Rt5Hz",
  "key37": "maKQrGvZPG7FnbPmdwTsA1vpj93J1pzdX6RBxsBKJNj7BWjNJRS1UYxowyZN6r7xKfnQbu8CCmLx7GSmVJoHLFM",
  "key38": "4CGBNi4SjJQaWGgm9Xd1PFBCuNA8BdZonSxN59KfAfvN5VJp32Fvgcdt2fMQi4XBbxaNndF2Q4t8TiRVmeR4kAwK",
  "key39": "3BHFPeH4o6qgmxcZbs8PLc37o5AfsTjNaEPMVsCmTL4buSUH8FsWXetFGFt7zqSt8PpBgdFKfnYzkeeMMcFaW6bv"
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

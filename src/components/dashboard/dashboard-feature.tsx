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
    "4DUCX1ySqZy9sBsCKkqv3yRyamUqtVU1LKhatJ4bMZTVxLeaEfM923oMQULCeX5bbXyoAEe4zypbaLaVVdLYr58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVUk7SmXHzd4yyQs5owpeGFpzeNTgJH7Ms3NAgonTecv1kBZ7Gp6qvzTk3g6ReiuRMYd45m41VxNnumuTfK5RRZ",
  "key1": "4SYcCzrypxqSex96iLjoGHNJHoQrAvmq1jnngk7nX9QdHBkmZCZ1d8eqtUxSwwo7nSirdqb4t6yJ57SMDXZqjtzg",
  "key2": "2jegLBnFZhnBhbcEnnoByY8jErP2MgHHB3s4xjX9T7PTzaGxFG5dSCiofGMjQLc6CZuSHcrRU3oCjN4QdNKccaPw",
  "key3": "4Tisr819dmjAbUKVuB9yrQy85YQg3pP7ADbFkDVXgWk8VcphwYY3jaJ2SfGZ9sA83cuLJthW8R88rwKwMRzEYoHG",
  "key4": "5yE68BPuZvr1uqoffXrRUuFPeHZM3tzKbLgB9Ac4QcReRRsyEDuTWwFrPSm7uPJXM4eV2itXw7dXf9Ho1DuwcyHo",
  "key5": "2v86U1PWRe9G9f6bwSgXnc85Ym6VXbUp7QV5ygWB5j7unRZS2fNzk6eNwvunTgZPu7feC2Jz3JcQBm3Pg2829eEy",
  "key6": "4BfZGd9iWBiuagS42XWWh2Zj1LMDd4naiJE8BnEyAavBaeAwVqtTEGDFuFcdYdG8WpRPo4fpHaTyXw28ZUdYNJsB",
  "key7": "44HkcSUSkUjuT5kudimhKSwLkhTs3CRKV9vU8DcvrhcLaHgYVt4iPSDp8W7GBHnu55Bwnqmpg3fWWjD8yEqMcJPj",
  "key8": "8ppheRh4Hb63E8eN2ncSMAaK9Z2qK11iBadFjRYKE6qSktwY4uona1JbX9E38NXMRZVrumDQRn6GL3QhvDEDjss",
  "key9": "4sxtS4bbkrb1RDpAfgSSqEXVyx6kQAcc47cjR6qVM8AoPdXgL5RFmX2mswtFxMFu5Wu5kT4ztHHfLtnaDLvPbzz",
  "key10": "2PmkK3UaArzbSunuqgJgcFEHd6kjc6L1RYjoim4TVTLeQ1MZTAogysX4AHnvo8Mr4dpSaXQ4qEGAogCApoFQj4Bz",
  "key11": "2QJTsG2kTN4hZjDLr87UucCZuFx8g6uoTNVTwEgwEJJ2z7MMhnzEKAkoCvCBpfRRmWe1w11RrK9aaNRAmDJQ7ZUv",
  "key12": "58MFGacoyZVeCsUSkeQKb2QW29PQSScVdBPnR4eyJVgHYzM64CFQQkRcHtJs15u89FqkXouKvbXUpNtPYg5UNM5P",
  "key13": "5g3o5XYUiVpyvP3ncUADGk9aa2XhW3aLdAPHg9CXvvWSPoSHdbE7rTWY6qJw1CtYq7n4XqsHvc9jghNMTb3xV3iE",
  "key14": "51J7mATsQiQZacD2nrWoSZvkzA3MjizyPFMiKaxJiSjBTeK7SYcNRSaS1Jm8WDvjAtoV5YwNLZYxHxcyP5ZGJMXr",
  "key15": "4ZuoGUCCYbN5rJLELbvURNGsdV79fNV2NBqbMfffbHaGY9gUjFsydDa23fjsC1XEby5GsF2fVpSvpC8JnpuXLhaU",
  "key16": "1Lws4vgoftuMVPBjmchiXaTU1saFWMjBi5yS6X4UcRtNScKTydaek7G6E24zSoqXD9UCBaFNQe8s291Uq9PrwcJ",
  "key17": "4iFvB7i81GiAnCS3XfCK6FKPQGR42bicD2QaVjQpTXAejrewt9npkfzJiA18T9W7CPPUNafzvGpHnyFvZRBHW77Z",
  "key18": "XH8WomcaRjo1V3xko6euHn1C6pFwJVxJBgxN4CmLPK8AbKqQQdaqPRvfpzH9C9267ni1Jh4eWWkCfMEpokzPimf",
  "key19": "26foWLjQC7sRAphJVbXASXiNsf8S7HXhc1z7TDJbxyxEHK9F9qyHT7sVkJfa95h228YXSvpkxG1a1BLmaMgQg5zj",
  "key20": "4PWM5RgA8FqRSUPfu7DBg4iapzZiZMfAMtKJt7AyifMvauHqHMuGirHhNQJ2ziThBN5qqNADS6zrUAnEC7k5WQf5",
  "key21": "2wf6isDiE4pMcyJo4YcayLBGZgJJFh2kNn7ezJADKDirsripihV8Arz9ccqXEmYx2LrnwuXUFFwmwuZXgKK4hV3g",
  "key22": "5ZKPBzaCH2US59a2cW7hNCAieVwpXmi9RsZhvDdeoVmEjeuiqbpAVxrDd7gMiHUh1U38NjMfFmiDovYxe1GVbdKf",
  "key23": "DTATfgj8VUzESSQLhoxtemysmrjXJMQmRDQAaPpYqkmdyfMEU2ReddBBofGkrqQ9ECcCo9ZbHktndZdxsgX8quJ",
  "key24": "3fvBaYzvivr5xUvoXXGSWSzFTTN6dn8XM1hccPH4vLV7AnystsmQ4sSe3rYHu36DcPZVkuJAnPTwAhd2VPxPPCfG",
  "key25": "2fdJ49WC5hSqu7DiMWB5rbanEU4RxUQXAivHsAcvgMcsNT7f1Yr3iP8RtdcByUKAaqM5FWaLnW4GEFVVCMRGkzu5",
  "key26": "2nruBSunsoxeZj3gK33B6pndBGQjScU2cdjgTvaVsfoPWbExFAHFGjsXWGQw9gjBez8GhzA9hMdgqQoBZaLjgt72",
  "key27": "4SsWuh9VMjmyXhjZpHbxJKkvW259WUXdfAoK6DzwEMF8P8YBthnn7eVkq9UXnHFDARvatwtoCJM2VnShLPZDv4Hh",
  "key28": "UDysUNiN2QGQ9W9pseDyNgGkgAGeTAcYDwzoQFzfY9Yku9WE8TWHRB1zy2gofSshrWrQUsubHTfPLh9zHb6Lkev"
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

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
    "2q1obqjvtZZW2QiwwmYqVfsz2R5ptBdrrBqcKSqUQUPFKWueGWadA7wyEW2m9eqc1Px35DNtuxd6nv2Pvaaf1smy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a1uXTJ45XTyAKX6yx2J3NzgnXSn5WwQ23jNrp4KoYsiNmvR78j4C9wbadouwi5jjaYiAhM3vVNCK8oVAXm8d9jy",
  "key1": "5CDa2qhf2YkP34VFKt8f7niPzRYM2QwQV3VX5bS6TDZiiqDkR5q1BLfB944gaNzjF4a4wckLvyc3E4Mdb98qCmEv",
  "key2": "46eetLEuDth27id3hj7oUv86tHK5cm6jPP7L6MFmcGSwQoP8FaMxD1aTv48qRZZu9uCmjQHD94wzKTAbi6DEHCLz",
  "key3": "4MF1EUQ2JsX3X7k85Q5P6gfyFwuK1Etn2MKFVbPTqCLS9Qq7MKdh3L6pEbVxFLADjLpL6LragYA8LUKjqkhK3dYb",
  "key4": "3pouhVVXCAE6DHmEk9fXN4hHp42cr5B7Ch9QnRPN8uc7rPrXNetqqFtGBqqJRni6XywcogcriWns4Tq1yWLPjvDf",
  "key5": "4C66gTXgPBuYLGH8dY7UxXARSaJZwtBviB7XP8c9BeCcrzyuLqQvCsjsLCzJXpKEM2xvwRUjULWRc4crmrRZe1Cg",
  "key6": "kfeML3ceqPeepzbBRsdsji9q7Pw3bxqM6vdgX5JujVvhGNa52y6HTkcvXy3VFpiP3Z352hdTP4oJzSRTQnxQDVB",
  "key7": "abmu139RmPk9icgdD8qWhaoebt9YpPrj1iLWoeoDhshZ4RbVY1JizbSMeyEnWRfJn4afJz1RSQN6mhHAk7Xn3ye",
  "key8": "4UZZXCn6nWx46fcGdE7QBdAvU1BAQYAEbaH4y9G5rj7R3bkS5kwqKDs2yu3sVhKFg4Z3cPmfifzD4e46iREqUugH",
  "key9": "2mnTUsEh43MWHptPGTPweQ2MPtDpYqqQdVKqPs5wPkFNHavckpUY3PJuL2aGMexQX16gLpVasLqgKreBzzYKYT2u",
  "key10": "4K1ZTrQwpomVB7dcW5Vw3Kg71EbfR5kMuDuzmyWDa8tbjVzFyJGPtTMJ42zDkTpZysmpeHpf3dBSy5EDW9zezmDQ",
  "key11": "37VcHNBzrGmYfXkHaKJJzhwHUQXX8gdMtz779xCoyyzAevHrcArQrzZp6rHPg34z56Je5h4SH8ZCSxgK76nYNAtw",
  "key12": "66jQwKWJQST7innBHfyibbSB5RmYhLymMAgvp3751wyg6aQDsMKgJAT4kG88xTkxkMwgXNwHF8ME2SEqNajitnZi",
  "key13": "2L8BCVMF1pehJdEU1xYN98LTeCLG2PHGRychLH8tb9cs1GqN5ZQ7doA9RNJZandCZyBNfkixW5yeAY87t5wuYZoi",
  "key14": "4a2AJGbTVnK3NGpnAFLsFQJEaP3gzcuWCx2dyZRUWa5UzEE8zk59nPTKUMUe7e9sqvQoT1RBY7c794FhBckHCkhV",
  "key15": "59Kz6P9HowQMGzPqB3jrW9gaWkTrzzzPsjAd4HTzKM44gdKqF3YEz2BXCj9NcQ64RDsKjh2Md8U1R1gxDaALxUns",
  "key16": "36mRJ8yBL5AKXCGMCSqxmPfJ8LBHGsKTPrSzp7V4egUuvAYVhDD2mWMALqwWHfNN31FTH4xu9CYx3LExrfe6QMbG",
  "key17": "TuSNdB1TrMX51mmLoF2g4bDJVQajkWcHwVj1L2hrs856sBN7ZXY5eyBhzM7hHB4hnnPV2qChFZvKaAZuTGNpHQL",
  "key18": "5naQbfNFZgAw7mXu6kH4U8ZzrrfdjgqhNunRY1kkUwSPpYwBYnV5U589HVSYdN3Bodgzf6YgcbiJwKeix94gf6CW",
  "key19": "2JfhyzHUkZfFgAJbTV461Ucno6WopJjXcrL8dg4YSoi5zzdTvt5nTKXgaY5D1ZR8J2GD7y6zHBttpSWExusnmiej",
  "key20": "42xttRn4v3QMQKcxpsGebCQhqr14Vi1bq2tWz8rssxvDhEVT8LYum7o2DCLpUVUucmSvE27JW8TtN3ZKFwnZCYnn",
  "key21": "3FoH3ox17J6HCEhC5jZh7XB53MNJrk3nWNCZhbQbaBxWxTds9GwAQ27EWKoRpZ83zwRHn3r8EQaktr7mMC5wFhTP",
  "key22": "2ydJRBL6UQvtY7DA9HBe62rTh65vszZMMyyeLvYcUpgUv9HkRSGarxhFVhj9FNBjmjPnLp7M8c5kCuqAGssEPRFN",
  "key23": "3NiCKHQrXCdmgpbVijxQKLT5Ctwyx2vho7eFvKSUh3PFFYxtSrHoCxNy3JeggoxyKSiaCUeaLT3qV7rTmCyjaDx6",
  "key24": "pEC2NDch3Ep8YqezT3eUSwEUNmu4aVjnAxmunUA1UaBJw86s8b4JGiXYJ3wG9APProHS7SN6FaVjDjGKdbeQsgr",
  "key25": "5DJf86QBKwdJVJmia7xc98DJHGwGMgnVUMMum1SCGQJgLKeH8VYtMAXoam58gvpbvbVyCBH3mzu2MPhPLNQLWMeB",
  "key26": "4qktaeskU8GWXoqR8dhNKtcvv48Ssem3AA1JiMbMercrQJKAkjaRaM5Knnbd77Ez61fv8sxuujLckd2SjkDsN3Ac",
  "key27": "2bWh8PTKDJsthrnEsXMokXJN7MWb1T7DzyPnva1HTh6GX15JfQWvDL1nZqxLMCDuKbHdbrwEih3UTr1dbyhAMrdb",
  "key28": "4UXmZP7UQkDtXpR7o2JGWsGzjcKMfamAKrQbhcTptnRCQhXeEyLa1wd326SQ2YWew8uLxRY3BjQjNk7ipwmEA5th",
  "key29": "4mUZNNcSTPkVY53uvTVCbGSCc2UnXf8rWSodCSxdc5UVu7PECT7x3q9gpZE7HhbLPmXetaUSAhpLSs1TZPJkxxYD",
  "key30": "65wymz8Xbxk3omNxKbFSC7oaoSynSY8be75Xdf7D47ZxUSLRjTDvSDHyGcDRuWnd8aYN3CWnYyPtmrBo74w5pKjB",
  "key31": "5zyCM4YKPffTTtNH5LPjZ3U4PoWR8TG9YLzdf47zzmgfe8sa2eU8fekFy9TH3RCnwuk2Zz6fexpYNroCq1hMZpAx"
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

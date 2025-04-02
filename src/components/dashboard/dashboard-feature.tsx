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
    "4YmrsmmD1H7U2PnpzXhAN2EeRUeScdHbiPCFiemY1qqjcXhiX92irQPmH5vYLn6tJgyctgCShuegYdA2n9YEBsH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u91FuTTHX6LiGDVLsfBrppQ3eTfPFgSYb4ge7e9g7GP9DmesCYAHvhRDp6cc1sKMg1B6nvGey93qUygWxfichnz",
  "key1": "33z3VDxzemv4mRB5fCwQhy86u5nfGoisaBp8qudWUvkzNBF3MdqkrWGPhrk6az75WvhxTRyzGk81fYq2LmvBdxfG",
  "key2": "46hiYGDtKgpA7vFAt1YgPSYePsYVcvauxdjQpuewaNmtnQe7dUm53FpxauEgcmCesPQDYcctCh96ts2iWXpbWCuU",
  "key3": "26cqvzvYfx2g9GDx3ua357C8sbHkdXDAvHouPwLRRMPWVKfcL7uUSyrFjUSEG3oq4jQm3pgV3DVuiNmQV9cUHNdn",
  "key4": "4TwrsitUAwmFMLr3e9gN1EUBJahg2x1WXBnxQxM98gqGv1bBAro5rUU3h5zmkCNXK1TWnybVvFfH8YVdZveTpTtb",
  "key5": "QVcF7r8Z6p5F6VqqGkLvR9M61AuKY9dUyeTuWkfJia15SpjmJXnYS5szqdER2cFDMLGSnMmV88Vxgf7AzUHFhpE",
  "key6": "5GzdupfKrp699TKD5Z1jVXEy8iQugRsk3U1W9umxgtTXhF5vSkEkqQ1F6i5zVDj411wtq1Hq6DbdLenmRdJaC2sb",
  "key7": "KRhx5ATjwcFW41eZXA5VWSDK5CNSASDxeXjHAXL5CGUQDFzDKec8bM16zZP6q2sKTBcVjdDZjsdyS8RbMiwhLj1",
  "key8": "qbM2vk8Pipd6dRTuEJoDmTyu5JZ1tuhWzbgseUUHwmX9WC432v6AzTKUjiUjhFLcZusHSu4etyHtPvzFGtHme2P",
  "key9": "SfWXN9FgSbLc7VdooJf88VFbKhDvnRbxswTwwSAkDQrcRk3Md7i99pX1DSyaG3JsfPr863396SZTSdg7StrFZyz",
  "key10": "2e6MA4zWqkcrXU7ei12WU9FsMfXKSKUFXwu9yUNuztBDEmxYCVof75ZzjfodagVNzu8ZZYTHh5PG1VJ1rMQrUJPq",
  "key11": "4or4cEzwMRXuhzV9gNsSfb98zipuJmTCtMHLuTmDmT71NV6ZMYk1UqQz2Tb2UD4BevRCt1qPFC9mHTSvqjXTaETs",
  "key12": "2Lus3VYTGmn6gXiqPGRS9n8Q6WLUeTGc3n4h6zXSD2AvBt9Zz4HtyYRV7Zqd1Q7LpFbhpbFmTTzFXbYLoyr2rqH3",
  "key13": "NzhRLKyCGkXXaoowpmqnGooJ3zdeGTJzk8p9ViwL4XBw76YicDBUB4wH9e6pxWa6ZhLLDNdo5JY445GCQr3SBqY",
  "key14": "5tD5Soqp75aGSoDWFTWJSyfQitqfgS8HgNDfUzPNXF1fRVmF6GaLErinA93gPMLq2bKt2T13v2fjb19MA2MBtAT",
  "key15": "LPWAumgQsN5KLyehvKpHESKKTiEkb3zSJbt8EJ61U51mysrBTU9G4BBopd9JPWGoNezjLp3z77JXxBgNjGmS5ma",
  "key16": "31ycmw4TBXuyfYCyoBFfr2Qivm56i6h6ebyBDn6cvYchBEPntZYkyJGKy1To5wk7tExaHjXjGvgzAYpkkGyyaktK",
  "key17": "3aJMewdjCnjoJzxqfzBCrV9Zo9kxXgCVnzzExkBeCTLCM5raBFGpnEubbaGFVR3mMkoPbF2YSHarrNiPG2DML1Ug",
  "key18": "2m5VnqUfuGmekPszP5nPX2FX9kerXExCsRxRTVTU4Qt8MNgBj72Ze69mkDBPytde8P2df3aNvyfnPiKDqcua8vaH",
  "key19": "5bKfMmFLcbyNqv7W5jCDk1rnzniMwLJ3qvPfKjMqUaDfxh7ScDViKeDvwDS3WwdicwiSgBMM8KjG5XDMRPpcthjd",
  "key20": "JsfhBPhEbv324u27Z2hBwznXdWhcN4oPLsdZAU3CwY95XfyyZ43CoQWGZBxtCgBWZXm1AzWB3ea4718JyteRiY9",
  "key21": "2xdphv2etesmx5sjbKtpDK8nknXofeWRQNkDBKLGxGqx25eiBzj3WKSg7jsgEGtZTD9aHF6TFmex8yWvdBaQwTmj",
  "key22": "XVffFsSQ2LaqiAcSMsjt3pfjo6L3pBGq88x8KTiPFr7WKkqVwTkVXD7YhG33HbhsEnQVawHZXvmj41B9QZqNKaH",
  "key23": "3axT2gDtUhfdfw6KwR5Tpk4bKjKaUEYbpqpPQXpgHJcvabE3zyr6xZBZhS9KgSRmNzYE6Rvz4jejZybCw7YNN1gK",
  "key24": "452zqmVbvBNTMaz5nJS9pKCHnVKieLvmEr85cL8m1yLa7sZR5eTQdquJ8NHi3cze75CdXGKxB5Hu7iAbw9xoHgjK",
  "key25": "3W6Hrmr3Tre3J8KddRBkoN73Xjrc1t6t9vRPS7VpyMhEt4X7p9tkRVarNedHrti9aWhWiNqorUMBnVfVdmYnvUSQ",
  "key26": "5yxndkbBPCYav9pVpHRJsfZseyyhVAz2NURQMRCb1eYaPUw7Z1R5bCoyARYHu42AtYmoXHGWapzFjXYmkCpAEwNp",
  "key27": "4qmcRjeGWg9zZuBPpQ3EE5YKafFfVo9Hup6NDwrZx9DqUqExc2pxTHgXoL9PvAuMKDLG4vBRoG61HCSVQCiCY2VT",
  "key28": "zMWFZCEUwjEv7etJCioe81sRdy9TGE1p9N8XN42Q5WSHdxeAi36EPAekFkvj4LLXpUBVfgZQqJdoKcKtE4GGook",
  "key29": "46XArbiG3qfftuGSt5BwoXK9EmSrnzCZTP7j3HySBcKGuWdxTz1TMj8JWaCyawpAT9a4LEfHAfQmkJ42aLmAr64Y",
  "key30": "ceQ9BuXZF9Rx5b1xMFGxSVtbj156ibUTpcc1w6LunFxFc5pqEdQpmyjbMWx6Zpnttti1CQDn2c4uUwsg82eSzeL",
  "key31": "fXDsM4iJVD1KjYp8BfVtC3cjgd7TaXvAJ6wMtC8xfpbCTkV6zotCdSXGxrbDDYfFkU7q2WiUq4Wg7UaBitkGQRF",
  "key32": "5BvvRxz8ByC6ZmasSmHiNzbioJkQ8awDWKzutpFCDkejhPhhLefs2RpxXrRVQ1iYCrjZMU1HUzbxrpJaWf1CN2nb",
  "key33": "2fab1zjmWUrumkfBPnVc8K2vQUKbWpBkSPyFsJ7Ww6pxTRUoHY49rdRhy7b255avC6jfThoqdqRM6swcE31MG4rb",
  "key34": "5u12B9v2WVPyCqwGzwU5uoRnsiSyZFynmfa5SZgYX3yD39r3Gfp1bjJLFx6xPR9CExN48rBmAa1L2vxyqxL2XRp7",
  "key35": "4wcYU79UfcNcRHqtegsuJdGYQfTDnwXnhc1M7SjEJX2yQ62aMm6iprVy7ExUExkox1MTkrtFyxiMhT2ec5wo8aFN",
  "key36": "3Zr97ExxczxRUCwL2Q1hisJcY1DAqeXEAMUzbyJLDpiEvZB1ABUwKmR82RbKkPmERt39CuvReFUnLtzN3PNa3nxu",
  "key37": "3JaWpg9Lusyriv1fqjkQf8pHKtxzU1jWwXqXXijAitYPiqA67TN8ZConDphHjxtwuSVrAXQMQomgokzP1CvwyoXH"
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

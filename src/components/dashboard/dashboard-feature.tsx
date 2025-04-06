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
    "2iaddnHPRgVXL8221juRUS4Q8NTkg2TcguoktQopEPCqW5ELBB2V64ehLbtEas5YGtM4bmPL5PnGSLPU1cqYqzcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iiSR1HySbEdHpWA3ZGYPoTVWhRdqe9TwEZVtPuCewjPQe9sURjaA21xZ6vhwoanZynUZtYEEYFuHdAeLm9jSadS",
  "key1": "633r1oB7GGEmg9y4yiRcjDeoaRzgNyW3tsQENfKNM1X3DzePdJRMz7JGJTeAmeHq1oPD9q2zgv7WMZ7a2JkSaCgv",
  "key2": "2b9srXDHQM1d31YJjBhnAHMRYNyQTAPFK6u4U3KAjTUGcBZJGAsmTfyEntwCJsNmy39vjryw5W9ZvL4N3qPWRDjv",
  "key3": "4gsFGhKrSLfrFtpFH5cBrzPfigQfLEushEj4udysnqAvS1L6WqTv3wickv2VmNxGmA7HkhrFcmLo1BDSBnge1yV8",
  "key4": "4JJWt16qvrKDaHQaZxUdAC6Ajvt1nGb3WxJQEP4jAnZYSNbAhegXPHz54iNtcxFw2Myn45TphfwWau228y4AZUB8",
  "key5": "4PMjFLbCCxBxWpznrCULxkqJqHYQnB5JQQ8dpvg96ETAp7CHfxYaDaAs4A62uVw7dcUUrwzvJWp9xuF2wM5SabUS",
  "key6": "64Cn49FZ6rQUEbbLgGabAS7v1AQNF4iEzkLJuncycSvjQhKRejCF3qLNpiVt6u2ceCH59KXfGaiTgNgtTtWsTYW1",
  "key7": "5rhJEgjPN64rj2vhxJSGVmKmAozsHNvL8p8BtsiciKFPvWJo7oaWd51nmc3bJEoNQpVCaUSH2T6jJ57cVnskw9Ns",
  "key8": "4wHcQJEQQV9scWixcqcJtQ5AAx4E51mSpsKeMZS4sbCtBAN3PbyTJ3e8ppxtFvVfionkhFWruketFHgAHsPyh9az",
  "key9": "2RznEYajpchtYkgGWPByxkgKwioBcPoGq9xskkL1uqczVmBTB22kwtuRapB58hicn2k64mV8YAZBEptazrC6x7up",
  "key10": "5yN9nYhGsdsxHeNuxbhiZq87Jcf9W3nPtEZabCPMHZbajmkmizCFFuTGtp4Mgv32w4GnyBca3v3ZK3CEoeReEwvf",
  "key11": "44sjv9bnp9Ypj9aa7cgovY9wNoXWHcvBHPyGFR5FSL1PBi7LscPZ5iGu98CWx5JimhBvABGM8PbHScbEddKfTTTL",
  "key12": "ngvWXpbMFSqmRmQr7j9AYW1nAJVAJ6ddjA39HH7FSDYXQvdRVj3tXcVESEBBNUG2ycnLLgbubAtceqNKvRDvtXP",
  "key13": "52M3Ednu8tWH4BhBDPNTJrEVuW36f7MyUM9FHhXXbpDhBNeGbqdZxNZ8N8yonFCqRFkH6hHoZfpWbixibZs8Ph99",
  "key14": "4bCd9dGBzC2M6hGRSZ4XEiCqCEkLLoK4deLM9YapRXgTFLLifhdtZRaH3QYUknAwd8AhLpPEKoMGpTbyqYF5SjTh",
  "key15": "3AwijwCi8aodsWv8stQ2JYXzipvCAhVjrZnSJ8zsmZcgqDj1gKZ7oYhTxC15nULAtGBBSVeC8BjBzHuogugNntdA",
  "key16": "uPb3HT6hgT6wVQ2UHs1zxWXSBrWFV8Wzf1PWZuYTV4FjVUgFZAAoGFzG9dov71zaYhPa7P8mDL6ftu9Vh7PTBED",
  "key17": "2kWZdgbPqS4nYiCQtyipnuYeGoTPYesMMHrDQ1bV5VyvhwBYy34UAKJm7ix1tV4C1mYnfJiaJgBqbKPTf6USWX76",
  "key18": "5xs79S2wx2MVgN8D7pX5apA7vUcLNqGw7sZSN7tz1zXWrFNfVa1jqhXs42DvDk8n3w5a5JBMnSUMP67pkkb2VVwU",
  "key19": "AGrQvNwhXGfXRcerR2D78PYEoF5RRBZjbjnCnNmGVqL4asXLMKT6WJwVupYyNfkPins1ohGHcKrLK8sTt2Nt9to",
  "key20": "eWNPktZhqQX83PJkYGtUjHVCphvydxGHvAqbyNWiAk4HHf2PT5B6buTeBKp5PGboC1TCyvK3HzgdWoRTNgY7kJi",
  "key21": "wziRfVjDoAnbf2BGdQdptcVuznRvDseLFhEEPk4CRnsxrzi8TvfKxBszTGmeREkCoHoaWPd7XWBzQt68M2Vq3GD",
  "key22": "4j1ecyW3u3PPF8qVZqwk4BVH1qPWSoN11w1oJGYEPrM8ecHVCay52eRYNRmAWf1kcwveH6S8RciF6rWQ4tcg9ZDS",
  "key23": "3U91nrnKFzjpGkKQcWgkA33GW8jz5PzEm2Ev3GmomWnCJRZteTXEietV2doPj4NSDdFbhBFKiJ1ZHVxiMdVst9Bv",
  "key24": "4eKnsBGcimqw9sg8wYgFxH7tjR9RKS8V2E4N96onumbof27xghU84Mi4HGAHHxrZiqB4zENzzQaPfWsAKNqghHA7",
  "key25": "5DpSj4M1yW5JsoycXZTj9VgJxFtTbiL6b3wycKxgrSGpCghvpLfh5C8RgaPwmHh6s9bzRnXqqhnT1USgQDEtDQDf",
  "key26": "5XC643Yp8XiAiYTJCsnmktQuNbEJuh3Q2morUSrE41C67fdgqj4CAWCiEqvdgCKU7TA28dSpdWt6SgpieFYmWtMA",
  "key27": "3KUkLdqXAppWGxq3dtyNDCSdDWWi686RPJGDxnjcNgN8idXatQoBmV634sETY1q595QjSenqDvwSjK6xPTD9qk3N",
  "key28": "5kEkGWjHkSkvP4Fq6wjw9z5wZcnA2bwMNXiRzo2VuTcAvfCR8J51NYiJm6RPZsmTyeHDfeoqSRNBx65TxTDTmjbJ",
  "key29": "32oFodZxsUPah1ytY2WsDkkfLcKDvRqm8AGSXz2JqsJeq5nGiniXh4BqRg82sKx3Jb7hoBpqnN3pGzBn7HWuAjto",
  "key30": "4cAQ26oiM9TU5V2x1GExdyftToyBJNuH5vLP6CjJCYY8zKK2p4puonH393v5tX6nWFD6FcdFqdvgs4fpqgt36AMx",
  "key31": "23LzrWo4NRit9MX1c3MZYJ7YgK8sibtUiDnnpFkHj4XbUfHdorCQ2vEY8mMSPZcMMxXGoFwnPVRydj5i8Mu57vVN",
  "key32": "4H8f6GXS6duq6cR85KXciHnf31TvhUc4uGNyy12tXRooX5Wj4iuMWB3YttFUF6eQEbiESt3LxfN2nyfjFPHH642G",
  "key33": "5CkSowp9KRYXFp9qn51vxz8eYcnoNJNaezHMG4NZP2mgLpwn71xcKFt41dCfyvnZ4bLy8b7LjZi9cPUGdGvdFUvL",
  "key34": "3t4kggS9sAEy1miqmhy1zDYJbvodWHaDbXBbmEjqfwiuWCn8jW2KoaeYEA9MEUc6r1Jn94tkhwyjJgys4vJZCxvD",
  "key35": "3VMYJtntpJV2XuZ5Nm8k7wu77D17jwG9kp488vncC77Uv57ZzTd26wEQ75gd4jqjGZezBBdcGV1KTVX82uumEHa4",
  "key36": "3YpgfCaVLkcuXXg5SEmGmozgjGXkMMKm2WoG6TyNMYC4MsKqCS94EedsMJqwRC8CizuLTaxZn8TmMPiKK7hu1QHy",
  "key37": "66z8MGngoUb5iBgbHhpCvZrQaBDuLb2mYMkg2BiGHGUmmU9H1CidJoZVnLhq532XJQrPZWoZmAZ42s5ahVtmxsbr"
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

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
    "3hpj7QcYx7djr9zGzAq5MAYM2M1ThYi8r5j554UFePq9VCkKShVcB5tGtUuUsWWxSx1SNRVkEDwpuvbUsE2jzp35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFBMyr1NNHbSF5HLRXHPgPjAggYYycs6Wb1SbivCDnJhpHmqz9T4cfudpsK1b9v9Ppndyuu7PbGa2LUM4rbKgEd",
  "key1": "8Pv75cF2JwHHVXtrF6WctZtGXRYb3XaY2cS3bf5R59R5LmqF7ngXig9YaT88ruLzpHMYaXECBwuaEnqBpiHnKGy",
  "key2": "3M6u735SWnX5ycN6com1o8aLvVzAZL6unGBzkvSjQc2Y5HYqK8Ak4YScZtyHAWVStex5gj8fNMqQ5hTEJ9jidCta",
  "key3": "oERLNwRem84fJvQLQfgvcVWzUwetyqddbdrinBYu47vyRtTJfgmnxFJgoexkyHPx8xLW6iwqEfnP6W29VV6ASna",
  "key4": "3qNtxsJyHT6venEpkZ4DSpRuHwhQMQ9THb1KrHr3XFFqjNNyJhd114LKsFfnHAD4446NX3ftdcFjU15cAny5JesU",
  "key5": "4EF4174bGCar4yVg1qxoYxv4AxUZfbEB6Q79yQfdqFeLoYudVyaj72TBvu3bvwA6pxGtzoXUTbJvamGsXXvGkPY1",
  "key6": "46m5oSX77aN6AwVezPNv6bvH6TYYshz2QH76KV9eA47Xu7Uh4qsZL4dMau29Lpg4wMtt5DMmSshn1as8QWg9brCx",
  "key7": "5hdfFvhnJSYNgq9RauTN1faTEAxMDSBzsgVeCCY33tBbgjkPFsF5aZZJfDktfs8cMLNcMbpWXUEh2m3ZjKt9iLEC",
  "key8": "5qbVpFhei1bJ7omb16KVFz9crbq3SnWhnmdHDKvabzUdY8THyE4zCu75gohuR9sqiXdnu2HeSRtpMDfpmypyX2CJ",
  "key9": "5MSpfY3jq7DDTsAeoAQoGb6Ti7Br9eLwZkY5CGGtz3GvdXH9kPsC6pNkUGdqgkUFsLnu8pvenirTD7uPcggMpgpB",
  "key10": "5GFVcQ2H5C8rsBdwyfnbjPPRrCGxfikyv6kPc4akHBeJa1wCRxYgvEuoV287vTRefubNGd752MFunyz6qJ6jJxk9",
  "key11": "5K3E6fD7YW7GDFoMK5ecbKougYHhopNaAfLwhjsz6n2SmuFv9XYfeAVaUYVy799rzyKLvBrNHpwuTFrkD1W25f4z",
  "key12": "4eM53xskmbdTn2h26y1GXeCbeWhZtTwDarryfP31df7obfYspRzbYn2aP1TEqP8xTGS2uMG8Y8ii1P3Njw47ptNe",
  "key13": "f587ULPUhQxjKSDfm7xmsNi1NxUG9weCxvdzJsedHoP9fzYkQup1b6ZJXecFAi6W7JmH4So1QbVvYyYG6vbeobc",
  "key14": "dqi6eDv3wpPvXnk9xRvz27iMepdr857fwNnPVCjcbB5TS9PwUhe5DaSeZFWmeEhTMXBqrUB7fCoVF44LzknkwCL",
  "key15": "3reeTAWXBgzznaQKEjfWD28daRdN6qx4fe8QcHL1azZfAtTZWzXCdsQbfZTzMA6mVXkDaGVtjcoRnKc3rNCaWXhC",
  "key16": "3uRYrWnvbSqxJPCvbJYX3kxjMr16hajkS5iSEhxjaDVkzs7imjBNLpZ9QrPNy1cXi6dWqor2N5RvcxNV1V8dFn7B",
  "key17": "3y2GqskyCteBLLb7NoJYt1cB8bTdgvUntwLw5X39gn4cKsde612Tip1CRmncz1w6webZnzVZLNBsvnqzTXKt8vb5",
  "key18": "65HkR1w1pQZ3S2TKRXAnYZhHd3RJhZC3TAbpvAEr9SiQCUXgUN7TyU3kYmPHtxhdM6gmkp2WFGVDSZ8eUdp5qeGS",
  "key19": "4wZhp3dZWkX2NFGSQnAjMNJ9v7PDToJTuVsbUpfvqTx1aCMe99QgyEhBgWoY42EF5BWSF8bf6Gi17tYV7wm2MHD3",
  "key20": "5vgEJrpPxHFG4G3B3ADj2ifQjZN3eDt9w19nHCR1jceC1A1MoBeKJPyePqgtyqAEY4eao81Vj1oh4FLc2Ct4cH5S",
  "key21": "3UQtsDmkJXM5Mrzh3ma3DH1gAowqydnEXduKzcR6GFnekiGbsGyF2YiZBmaa92HN776FGeoAtAJw7UrdGCCcGoBm",
  "key22": "5JMBBRXnGaBD67bxVwc6q868YFYYXcUXcVc7ytx2UzRfmZbDPuVZyk8wH6zGZbgc9rdB2LXpNZQkswUHgdh2vLJG",
  "key23": "5UQgxErTvbaYrrFAENK2PMC9csuN8moFuVKMFU8K3FBbzwCYf371p3uAvP3WgXjCmEKVoCspyRN8aphoXkgbLayT",
  "key24": "3UwWH7ojtTfwPMam4pqVZaK1x1uBkvxSjERjWeBbFwaxay5VTZWWFuoAuQkwwLdNH6c8MQzTN7xU843Gq6k1W8g4",
  "key25": "67go8Jqjfde5gyFzRXt6iaFdhCSF7D36tTiqDTxJm3gREqzkb2Bd8ZahPhDnN7h7Bnzctx68Sd8WsTfVEqxJoD8S",
  "key26": "4RZN6CtVmmeAYhihdVs3ApPpMUL1XmXrmehJhUj1cDrnM1ExdTg7yaQXwft9p2Zaqez4DFahw1BuJCCvoVFM5KKB",
  "key27": "2WoUps6uRGatCaWQVNcXDKXTHcE8buvFupqWYh5R9XEjJd9GGxootfzk8oH2T2a671ht9yqtJxH1NXCGKjzFUXWC",
  "key28": "2z71KTAqjz983KLkP1WSBpvSfBP5EmQx1SR5AM4t6sWG95HnbzkHa8P6ExwqRpLRq6CNiQneDkrevXaTHfMZ8yiA",
  "key29": "4V5Y6cKmaUEfXZSqLYnQpuY7N7t6ZN27vz6kbtDpi8UYLnLceT1NTCmnHBEhZqRMyo6x3srP5XgjRn1j4cKoSDk6",
  "key30": "2ds5sNnCHwrTUqu1QU4Y9Gf5PreZ86WQ1PJqQEz1whd6VVv7QJPzccoftXRv4Nk2Tp7com6e9H9EMKficFwAAoCa",
  "key31": "3H4XCjsR1dvtH4xzCeFR3Gn45fMoYgCXP2wjD2NcPpr2XUCUvAcQzivvvjGb7LEe3f9t6p3ejULP5mQm3QdUm1XN",
  "key32": "58SNSNPRP7bBeaP92zcuH5gM8gpLsr3vkgpiZpLyn9zpV4qfBbSSG5kzsFHoxiSnYQ3EWjkSvPj5gqPAz1FNu8eW",
  "key33": "4VSkm7ifvbeY9e65sUPf6VTwFVGhVRJ3DiQfcBdFKgb1KjhPXypLvv3UPpKU9NcS28YPwhShaLJfcp1dR1NU5kuK",
  "key34": "2ia6mGrEMAXTrM4PXfjUR9bPsHagfv5NGTHhEo5buGfCXeW19rgYxNCUJhUnarpYDGqaTCjus2ETtiX6QqgDx4tZ"
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

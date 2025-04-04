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
    "3aNXNq1ZPbC2cEjCb6fAbmp7CAtGy9qMTKGx8kyFNQpLEochceetqT4MvPcMTppUaUrLHwf8JvE9tAC9efbSGfym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQHknCpTjRswfpXxvjQCSZX7VoA7NnVc91gNozWJc6G2Zb7hTGSepYjFzf7M3k9vLcMTyp6iUDkU2KYouRz1Bd9",
  "key1": "5rEZs3GN96oNTLVcSdKguBf1UQwM727sqsBJBSHggEGTVSCqcMqwTF3tyVTvhgL6nhN8V7knTQiajQfgtUoUdaMk",
  "key2": "6Dwq2VVejqzWikK3qJuk7DLKGkGYiE7XbaiWhnhY82SA5oHW1BGrBV84HM4qqKAqLpBoagi84yXq2rmJY3zjipW",
  "key3": "2fyYMj6ufACCtN2s3di53JZWrjaXUDDzYGaTZQ1Hrii8W7g4EozmDiRcE2Wk2zV8W1tv8hkKTzG6HPruFt8x2wwg",
  "key4": "WE68DipBgNqJ38QWFpqUJvPtLnb1yaCccMykN3agaCAXVgKCM83zD2sAmydnsfnVg96vToDh1esrsPLiQWoVq32",
  "key5": "2sQ2TaYMr713bMzJiWFxagoLDLx1sieMeRVAdcCsxcmHqUxii8Hnq6JP7vgfva3Wzoa6sz2hAePQnAsyNfQfEcfM",
  "key6": "2EjoDpznxtEcFbrk6EcPX18nYtdPrFu3BC7vCkotD5hkySpN67j7PxDd2dfHQT1bWVpn6vy9g11Z2dHLm6Pt6XZF",
  "key7": "4zppynHE12LNqNGuM1Za1dy5uWgh7CoASJSdzcgsQWtTS9qC3V6TRUHuALEhNWoZ77wExdNq7bMLagRnJzQb8h8f",
  "key8": "4zrNA7Bh42KExkAsgm5n59NnBjfDB16TDpQ6GxepnPtz1RWzCvrSp1XrMWURe1DJ7JMnrwjW52WwQf5ovNoS5gft",
  "key9": "41F2TEVFdA3wsa32JTQek1RVdeRESLhPNFWKT7XyYhQAaRc5ScLa27817S1uuLEsB5cEmFtLpWyrUT23qTas41Ms",
  "key10": "274gmjQKAzCMGhQdaZL3E8K4mdTfCrgct69Bz8aUtP7zsBaZafG7kc9yWkr58v8mjvkKpSG7njm6oAPhvfsPp2iX",
  "key11": "4DpDAqi75fWWgmZNAuLWkavsZgg58tr4SadGLeTgGLu1TtdbJPYpSKwF4NWSaL8h5mHNaejaugfaBQbcMxyysAhp",
  "key12": "2oxMtzaJubfnbB5uZgztUsoW9zYDbumiGkRryBSjKmuTYznkc5inVTAxyGJUFNfyZH5AL5bQeenKkdK24tNLNNft",
  "key13": "3EboakTtDgemXGqfsxyyAzT6wWyDrpdFeR382gVFC2wH386rMtcLVzoeKw8ZdYpzAjW1wiXPCQf2r1cgTTZKdA14",
  "key14": "2nPw4jXr1KrGdnsWwZ2dxKsHDfVpTD1NxcMBpkp134XzxS8oYMJrLEN9cwBVpVFRqHruLruAo3g4F7sY72rxXX8t",
  "key15": "54DUMPfyL4DVCTEqVgHqTLbgrTatdm3aYbxtVTQhne2zDTvf9YHCctUFraUP8FfqWf15gqqc77xX6QhAzF8wneTN",
  "key16": "32vyouBawxqSResYE4sZJjMvfybDLWnvgKGRCc6JL3joxjPKAUqRZrAYxbUSabL47suzSzSLAbZR459a2rh7ZoAh",
  "key17": "3uxk6ZVDT5TUBhai5oH24CJBV5WxBsqNygBQvdWmi5MEG6WyAbR1nBzneJ8mj8atXfHvC92AtUBRQCvjzXsuFqdc",
  "key18": "58UyrwvMpURQnVoWkJLNpX3TnhZzaQYUKF4UuLXU4kG7C18pAyzzJq3tFMZzix8mNJz9WXXnw7apK3gPsbVxqhw7",
  "key19": "66wBvb5RhCdJE2YfWCt6psnQ8H24i9jVDUvMZmWQ5EH1BKMecCPtF9AvN12Syi3n4ajAJRDVZodnju3qsnh91Laf",
  "key20": "3DtGmLHx8tETrUCt1GtBQUAgKDFiJXUnV3eqwWnZ7oyUpzNDRTx4PvKcB5N4fzNaV1n2RavnkbraEQo1sSp7LcXD",
  "key21": "4EXZoqdpjeActUPpJGxbPUmebYhEFzWUUz7MZnGzng4xWz7YfFGKbmEphAjwWY1ciNcaMMXG4tTBeEvsUgk26y1X",
  "key22": "5M323Pxw73MFeidqwqp4e93eWxuFfxw9acdY2wN3xZpYqQPCSVLB6ErtK6SCgRvs5jCBXpAPDPTs4eJmTGac8Nx6",
  "key23": "v1ctZpmLFCtFBWXVBfJDVpQQfnMmzponu3Cemi9HBbT1qrNDj2Dzw6vaSsVK9FRKxfH6DrjKH8pZvaiEKKNSZFP",
  "key24": "4Qf1yqZJkPAxBaGnaX642idZoiYGxubV5uNrMXJBCa45WunPFFLBSjoYFDxG1dsVLfurvw8Qj28hWm5JooeaDqR8",
  "key25": "2NyL4p2cdptHibqsjLiNBATFt28pEdsXQGQ4B4Bpp5TqGwBBoH2UmrXoadkr7181cnE8RLCLpAsLwV5GDqAvxqrz",
  "key26": "66vcb1kkeqXDpsqii6Aq8HCn3w31eLVvSHg9s67aNt1EAkNSiTNBJhVLDax8tWVVk2gamZqstNLoDEvRskB5K4cE",
  "key27": "3dKBiDppGUZDZUUBUn84fcTJTei4tXaEpLkNLeVbKsCoHxfgTmcGQFxRrjbda1WP1hH65X7iDCBsi76vyyJ8qrsR",
  "key28": "y6XVqhzyKkGuzndnX3WgdQxWbh1L5jqrFwjZUqrWUiaiBEtAkNToQG2RNeKZcr4Z6L6YaH99nfS4BoGRKJJwcVZ",
  "key29": "5sJHWKT5Xwg8StBEYuyATsepA1dX3KDxrYDJhWw5V6aAzi8PV1fnLEp3wc4Mkr313Fq8zYQn6WCzmRcLPSbPn1YK",
  "key30": "3ZdXPPBCiaCch9JRoxzdJKGYDKvda6RATUo85o8i8nJriMVavH9KKrJVQo45hKRcSvwMwST11A6tLfGDRFJbgubs",
  "key31": "5FiwsBWN88JFkcJQx4avLVn1DbAcE21ajhBxiheAE7mPmnXFMByLv7rvWGVPAdvCCgPwnD9Fv3bFoLhpLKVqeUXP",
  "key32": "3Kq3NQxwgVbYA7t6rk3C11QE2655CkF65eZzQHdHYFv528cbz8y2GQdjfDSapJswHNFKeaqxS129RAFuE5qvTBBx",
  "key33": "3MHUPd3YDjVGkosSCt2ag5FwJ5guEsjsETm1ZZv1WTceYxjtuySV1Vjzdz3A3MxrvAvE3gYeAWvkYbDxqv7Du6xm",
  "key34": "4xD7MiknzgpVgRidmGpoiS9Dy33t1BkWkS5v6uAzcMbJWEJdwuu6rkfUaFsAoLUk65ugdEWPHRSjuUzAjPxbSXsK"
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

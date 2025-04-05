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
    "5ea3gJbJ8HoLDEz7AJzdDyjAYERRVVuzLgTS2CrkEx9zzmEDx6uH2PbLLYK1Af4mFYY3GsggHXPcV3T41sgXqXja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCAdM9QXargvsTT6ACgdFpbVrRCUQgUX57aU3odXTNRpM7uXXVrx2hefAVGJDzKyEaQricJKbfefPXi7aid1xiP",
  "key1": "4JvKqHGv4y4FJqsxPVEvjaszCsVRSsBWhDHAKyGhmonh2r96Fje6ZWMGY5zTNvbXUFV87nSUWHiaU8LKqCouLwJM",
  "key2": "3DJye8BrDGWRHqieJh1xLwTEDSdCHUzydVKrpMf8PnCjwShbpDmLYwcFcQgHgAoKQpgnKeipjmFUAYkt6Y3ecDB3",
  "key3": "eqpcbFkzpQMDSd3D8GhscCjX5tCEej9Q4baBmnbzRsKePPfcdKeDqKDdCUgtnYae4xf7XjW7hsHHEYk1wz4ZSDz",
  "key4": "5AzYh5XBnMPacQDtCpabTpCNeZpiotT1H1XS7dXdK91pAPX17TaunTHQ8uinM1Zci45KVUq93D7hcuDRV2HXPWnH",
  "key5": "4hjDyNd5yGf4bR2froX9nWJQmZitooVzU5A19wj1mFfHmcnq4j8151DGW9J6X9r9hQTWePTKJq9thbTEqBt6N6WX",
  "key6": "4DVfHx31TEj1VFHDSpnJhoCBjSxzhSHY5CHabd4qpD8pua4UA5PGSHSvYwbFmNY5UKCJ9toEG81qGcFa4C7XYHao",
  "key7": "3Q4ZRJrUJJz8LqWdXBJ8XFQQ9JHnjUvkMtFGri8TX9rSPSJfHpedZ9LVNZ5W2Hcsu6SP5gXj6Muar2TrFuyFjGC7",
  "key8": "2SwEEdsV2DV53QzHGcZV7N4JCRjMhyxYk1ucFsYMFCqHc63xWbBhEeQE9jXTBM69EgRhavrHdpejaYKawZaDVvk2",
  "key9": "2o2sAah7oqYwAXwK4tmRhb4oPJHRWeQc3mxZSHambpRewW7MdagmFsd7NFv8LSBbACf5mpAbGYEXt2z2rDNhefiL",
  "key10": "2AdWXKegWmimBEWxpbCJfTDohxsjYbgDfMzowSiUBj8ogRcf6ysQT8LKXYLYZxif8SdpFrGgWzE3ATwHeK4pA5Tv",
  "key11": "3WtjxAU7fb3Ji3EzQkrUdgdz7fnAaMkguScFYS5bBRUJhCeKCYQehy217EKrqUJfdcxmJCdk8awxrQgZo5nfNvPL",
  "key12": "31GV8AyAsgDGEV45ADyLigmbB2bmRdHj1PDNVLeUrJZL2q9FrBuGRuDexGtCT9kFrhsRUsAerJsQgJVC4jU4HkET",
  "key13": "4hCvdBfHVJHbp6CQa5khGU141UNNvXyFPUxzkXESDxTu9qnoxDQVzrk9bfUtfAvidwKfmnCf6snYkb2yyXGGMJBE",
  "key14": "2mcEHPZLoVGJLY3JBdCfEx53iPA6bfZpDw2Hv2d46TkKF6ZVFFw2n18uVDTH4w7oNwwqYvdXhjzE8XHHbw4oPpR5",
  "key15": "3ZsbeZf7cf94jM2Rt7V3MrWTvTpd8rQF1qiGafk3WS1k48Z5e4sPZGMyTo1DN6LmUXx64skxUKjHSketDpcyD2qr",
  "key16": "t5FWQrVzcKQUS4TLrGQQZZBaRLwy7zg2fXuJZF4pej4swzw8Pj1siL5j22gTqV6AwpDjZJY2J6j5UCx5L4F2hWC",
  "key17": "vvY7WdgHeotB4sfNM8jSXxD3HT4EdgXWFcsDRiExqzntdxmDEe2t7iXt3kXcxP66gKWMpTGDfAWmqDjPBSEb4qi",
  "key18": "cqhnUWVpPyyW8dMaCkfK7BwCnZxRVgxWrsg7FMn7pGAgjDGdGERhVKQnkajPGtRyxJBpxkfbbkFCWkvZscpH786",
  "key19": "2Tn5jRDTqemyKgxHa5tevu8PcABmZ33BavvVamqdVEHM2gNzjfu8iBvDJkCmtCabDgdEsQvSrpW7rmaRSrigLxXH",
  "key20": "5SpgEVGnF9zeusZJysWXD5YYo49qwgPDDhdLYm8JswqcrgHVbf1iwUyVb5cf3A3CzGseGDK4YknJBSiZjtHCVVSe",
  "key21": "4KC45TBXj8PwRLJRok7BnK3jNr9N6C9drGBNQVgsiKdGh32x6HhKUS8z1DqCVPExYWGufd1KYUwwFTePSWGe54Ti",
  "key22": "4LJqUr3aWZSmJ3CGpEFFbcqBtARkX5C1pVD3CaJLgj3oKD2hWxTCMPpkxg6zD5sxv3q31z5HCBxGSXv8YV1X9wgt",
  "key23": "51rk3HRpRYUEbtC6DYBuoZT28okE5ari6KXb1n5HNEVTpNha9d7p5JnTwLk2xES3PaZYcmzZsvdhNCPEMwSjdCDt",
  "key24": "2CwcNNUmqjUizEKzUiAxV784c4BgARr2s9Gu2gfAbQhkPr5RHtvLyZRYSiQqz9ZtgSmy3XyHwXJfFbbdQKRru8ns",
  "key25": "2Zuuig2AXh7CWnjXuiR2LvMRNA2dcYczBkYL2HYMrS3zJhDpHpjyhsapoUJZrzFTtHrejJiYyRP8dbpBESrPUSqV",
  "key26": "3fA8t1h9JfGHFrEZAaaxjQbFqLT6WN48uD8DUMLR86mBDkeh33fvUiDqfp5kkzqqry9Cr8SUsGhKCGhMiqWhPHX7",
  "key27": "45g6BenZDS6P5z7wZfSNhmVzHQeUh9CSqvyzb77581m26qUSHh4RqnXgyhajejCeC9ydEDD1rrXGdKeYSnxhYf2j",
  "key28": "511kDUDcDeLZeKoVG1GQxeiUNkdUBwPrhpRkaa8j9pKp4QC2e1rs9GghiKCuhRDRS4XTufuaVoRYSGurJcFNVxED",
  "key29": "3CKhzDS9W6FDgKJ8LuQcp7dMdK4muWrauEmvwDwE611idmvaHNhguKBfnecJ1rtSC6xc8vQrbtbU66jZepw7qYbF"
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

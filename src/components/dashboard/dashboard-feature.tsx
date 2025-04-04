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
    "LxkKPGK6xLWq6ScNtq3KVBKAWoyoSxdDvJuDiLgmMgiDtwK1Q4net3x4Fyo7EhgHfqzpWA94iJnzFoBrPz6Sf1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3KCj6K58Zs8fZoSFHLvRDP8cG7jgAjtUr5WV3BCbLQNiTnM2S79xiSEkuo7nvabfS6ZLEiKQT6KWWHyrjCEtU3",
  "key1": "5jTDG7JqCgBuBkyWC5X5hs8MmqWTwkGCaiaLgKsHaetJSEyE1kv4enqw3cgnWHvR2PUQcANsfFSdsRpvPzUrU7kM",
  "key2": "2uGRMSsjQ8YkevEGHhDXYsvrotghEv1VYeVEFnkVDK31qmcE1AQEyq9bA3SzzNyaYgcYDEbo4zHg9dcSsyYouMBa",
  "key3": "3Uah6zewK1f4rb4HwQ6KerUnZxHCs3e9VLC3grWSLFV9RX9CkopcDXvRAzV7XNnknMWqTzyjcPLffKaVq5aadCkr",
  "key4": "54rwy3dVsxCbxfontva2ywF1oLT6bruHdhSqq52gzirbC2TMbcfWYxNz2rXtXnLXqYruTfc9n6f35nNH54rJAPC6",
  "key5": "zWHQw97pK5mKwPacLUxmAA6mJ57wefGt2DjjGeq4KBuCw5NGCePWDwMD6tpNbMdRAWGGnzhdPnhyuSxwfGoyfCb",
  "key6": "5nKH9kSfLR6EJxeGtepQr1fTCLfsZrgZdRaxLNcj6Xav77PaE3RWxYDn5uYJEj4uvuYK8PGFThzhMW39jGC2MiYb",
  "key7": "3NJ2SuDvoiFPrrtbB3gzV7f5CwjRNEEHQ3rKTb9YR7WbenMyah8xgRVJH1rac96EP7TDfFkY5P1KSWAexZGo8Bz2",
  "key8": "356VrqjP3mcivPnDDtfnuzSSv4wFpMhx3FJzRTLnuN83TZdAms387xizBjxEbj5RA8ndAVp5zfTncQVMeFfU1iPH",
  "key9": "4o5gQc5TNDLWYwMuR5sqD3WRUihrVeM52aptotgTEcvaPVZdDc5gxNZuYhm6szn88tE9eZuvZSm1DNJuWpkkmWxG",
  "key10": "2dy3N5bv3e1CzPhdHUBBG8gzaumREETZT5dLX1Bg3grfk13FnNMk616BakLAhdpn8rEwffsAkCdSWtQksAXZ1iG4",
  "key11": "3FwAPGwhjPryPSAQQ8mB69zFj7jss7eR6ybcbSfLDie5ZbtBadn4xL5YBGu6TJZF1qTy3LPQReHFj9GCZWk5NzXN",
  "key12": "3nEwEK8graCpBdumLzDkWUfxjWH1Vm8R81LpipHXUWZEpoaT9niBFXxsQEwjYbUSWu6aivHSNLqNoM4wKAF9c9xG",
  "key13": "2SxWi2481mQD7mQ3usHpv845r39vcKZXn2aXEzZCJPK9qhgiwFTMi98zF2F45HU9wDTcNngzKtgtgW2DTBPbwGHa",
  "key14": "5NmuWz9peurN2tqwkJnEXKVBGxvRtaouc2SBpBHSM5kZa5vcEaY4nhi9Bbv4fwSocsuQvk4BeAMn8rxfcz8EieK3",
  "key15": "45LaxnUkjq8rMEUD4UyVpmN71oo4TSwrDhzZCNr8LYyweJ8ULzzoGpmjTKbpviNkmXzAzG6LPZUACoCWTcYsndGk",
  "key16": "hnd7BFx1VCNf9V3yZrsTjaft9ysH9UFPo4atKhmUhHvx61SmUwvyniC3b5cYc5mLToMd7Fjw8pHrf1RofNPeb4M",
  "key17": "2wTsgMGdjaTGTwMiNuDXKT3BeRo5w5xMioffJUTWmA7cfMk9zaGmiH9yy8J4DWrzhb3jr9pftwVcgBZJcaeJczqe",
  "key18": "39L8UTb3WeW2RqwTdLG8xY4hMRaRmYdqezk2FfL6MCzcwMfDWDL7n84SmPxAe2G9W7vbTn2tabZj3JAtgkE917wG",
  "key19": "2DuycuAeBYhXk8cMSxvHmzaUNaNnpdQ3PHx3reeHPrV9UndyRLwg8hFiUY8jNj2jwCdhavqif7cru9BdrSFjVrKv",
  "key20": "4AcSyVq7Shk4Pf9AiYb9SKxP8tVYvGeVpNTPuTKvrRPfno8KEokctuV8KXqenYEgqNThDpacfzTvxdNAXFUGoMWi",
  "key21": "oWaWGsu6Gf2UJuKRAfjmZN6FuYwvCJAabwPW4sK5K9bpsF6N1yywwd42q3Mruf4Jq1G7MT55Z9Qgepkk3f4bv6u",
  "key22": "3WCvsYuWWCLLMgdn8BQLXxxZZtvpuybFPtt5v7Qnwebw85TpbSjK3KnaqQCHtxAU67c8s5meBywR2tYKjf7BCsJA",
  "key23": "28JJQh5XF6J7Ht59ZgDdU6T3Ywib2XnAxBvVVctvUD9qZqhMxmSL3uw9xg3SKeVfUNph1x66TamxYTBRaFYxmn9M",
  "key24": "3pgbDBAikB4935ojuWdAgzgWAaMDCcAUPRX1qEDBaURZfqGpChxvBMA9VeocTCwZYuYpxfHgPF2TBoFyfu7eCk9X",
  "key25": "2FxFUip9mvBAGZncrV5xPdW1ETYmWdEpEjBMPCuiNi6xWkVVNGBkpaz6q7XrRxV6rx4xnpv8uKXzfgnU9oFGKwFf",
  "key26": "qmHD9tR8mVvkR6VHt5PqjrxsdCGRBf2Jf8GmUzioHBAdfeahJwpWJJz7Y1g6Hj7CqYzCZbxyYA4e3EQ9CGuUHUn",
  "key27": "KpZyXkTk7cDBifafTrrnwLoVKkvfhGnnBqLqEmxqmAdq25iCi4gUGREV9EX4Masr7XCBsBxnrr76iUjdUfM4aAS",
  "key28": "3mZaWj3jgCA9zV8W7oimPsL5LuozKoy982r9325pKoXvw22NXHrZENWuGuqVBJXXM4ojiW48uaKurmSW9eAVSK83"
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

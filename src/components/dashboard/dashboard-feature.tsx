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
    "3trSGbezYU1FJLbFYJE1dyNHLciDUQQ7W4dnsNatvwgGZHm3UEZoTaBEpDTrWARakdyuNkjnXSJX3A7ZA4nTtD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAtmJrNp1Cmz8U536tZhJXZw7skLyzThbgU7AFGoYf7LhfjJjhctbuxuqKoGGcBCs35Bm6ZFBqgJuVRqfnHwh1P",
  "key1": "3nuq1f2QyZMQe9VJPGCkiNgUc7AbXY7aFhNSggAt3pm9oCViNHQkEHoiSKxPmxvy45Xjsvy5vn5QY9PAuDsvmq3w",
  "key2": "3RZMkL2twDdv9ubAXukWWFMDtrQjcRw2zZs1kRVXiLsXbHm663pQAss668BRYxRNSREQJcvVXXWc3iLrQXvvPehd",
  "key3": "GTnKiEtTpU1yLvzpnbfrUwDKuFaCwuaJKTyojpwat5BWMtLw71Ze4c9nBbmLYJVTETZqhKTt4ysyXkj6pNyHKfR",
  "key4": "qJgX5u8PzczemNT5hf5oseqxnPrbe3oKtb8uoWXGFTCemvZtJ75ZgrnsoAG4h5HXv1KNka5xss3AAPHwNGoa17D",
  "key5": "c7JYoqtrbHhX8H14j8PvXEHFMeYBUenRo15jQ9rFjx2KayaUBjsT2jLvZEidSBVwYwqEHxmSMcxFkYeMndDa3sr",
  "key6": "bL1BuRDrfMFeoY9BxdFG1T54DnWZvwhDR7Dp8jmE2zW1qKJQ83psis3tsyJpYvT3CKVBjLSEqt8qjyjSAhadhdF",
  "key7": "2aKvJVLupeyoHcary2svHjGTT5doBZSLcJcjLYGvpKNZaoVdRCJwxnkCXabSbPsdCnmJvcZ7VBh6RzBKpjJabK9k",
  "key8": "4BGJkcbgCEUjG5tkjHXAb57FZzbgeEFvLBTkzjDfArw2ZjsqYidYuz7xriPkXAuVfECfQvb9n6h3rLzgJr3c6vpQ",
  "key9": "ehxxfQHztfuT87N5foGrLqtkB1PDxAGLVgRG7aBwxFnjfDC4Shhrn9D3LeAqqETFnu5t2jbq4j1Yf8pM6jDQetF",
  "key10": "4zHrceQWr4ZNrHxAzeahChdfW3SxhVhGf8BYxwewojCWT3pgrxpWsawjMSAAepMaWTXJSuaUEmuKbp7jrBXRZxtN",
  "key11": "4oYJHcdk2MLJ8KyW1fQUnciPEq8rSWQgxcL3qY5p9CLMe1rzKCo9c7NBq6XQLoZ4NMnRM2ujhdqd1BfYF72am48D",
  "key12": "2cAsg1V6PDWMMp8VDtNyvPyVZ26TSftf2cHc86J55V9jCNNhFnSNt2tFqmZ7z7gFmRhPLUzUqMJ9B8DXa36UqPPC",
  "key13": "3qtCjJkkrNxMaUpjPWmMJyhCdG6Lkpo8zD5nLDXxvYUcF9Yk2HxasS4oshL7k7AXkwtDE9YxfCXtJi5xoLU3b3wu",
  "key14": "5e46UHqF7DT5tCJEcBu6ZUjbAeBhPiyixSRg9QDyApe3SYucdMb6YxYsJ1GJBczXc3Kt4aNW8KLeVt1vuegtcXjj",
  "key15": "5r6yfUdrspLquQ3hQZzv2vAKp7RKioRu3WrWLaWbq3zXpdwfLyvWvEpkr3uggBVu5CVw326JEZh62QNpGVfoUneM",
  "key16": "5fB2iGrgCFcPFG8AnFNJqs65vDcq9bd99pfz4A7Ai9CzqQ2DKf7JQrDGktMmwfv71yPzqkKWr4UptoRR6tq5FGNm",
  "key17": "3ADi1xJ5XiovmFfGHWLykGQDxKerrrrSsWBidKC64FK2B5PGkDPDTBPm3J7dEHQzgsgQZ5pdoh39gP4iWvv4toe9",
  "key18": "5pg4KKB4Gi7gpRWsn2e2q41tA2m12qeJvWisdeAGFBb5iw9eA9YNAV7Eu8NaoGaivJb8jQPqqXucsNGCruS6Lx53",
  "key19": "58grbxBKhZFgPaBZSgD5kbbT4kRkKD2bgVsKbhrm2hYK73HSGopn5dpTPXSbcQWCjN3LWxTLjSUVDpPnoUsasCCP",
  "key20": "aPcXYL5zXba1jahAR5zeycL9QAyf1zLKAEnz9noWdzdEH7T6ztASK4F1x5P7bpBYrVF3B3Yan2pVd8qjT9ZaUBU",
  "key21": "mdQK9LWpF9rUXYXxVpfgjMHzzogU51bKzy122csn97V7KvTRnknfVwkRWC3oXFxHoEttAJtP2wjB78h95Aabjys",
  "key22": "2TwYGr1cz12M6pCE1YJyzp66SqKySBUMjrLPmK1oBhMBGnxQUUeQ3CjmtkUYuxBy7pBBJKJmgG3nkr9664dBk3LX",
  "key23": "3nbkRTHT7mEHbXdGdHMU4b4rCz3Ma7y6st4aNqLTzTBJLRo8MSWs7zjeMCq1hUMGgPV4MUP3tUpJ4MmAbCTJkND",
  "key24": "UQyRLvLZvZNZ2a1BW3HdFoYF5X1HCD7Pm64GNeTkSVopj7HBHCsskvwyRGudhAmnNjoP71Pc1jM6xtjjQPDWmqM",
  "key25": "2yE2AT2TFbyohNimjbg6DcAj7yB4wb89pH2U2TpTUWGnJYUyM7t6sy9mGHYdL1ehFbpQXbS34D7VFGySWAjgkCiR",
  "key26": "4yNeBoGWQeSWhe4PbAyu3MFbRXKQHsDTPFfBCDYufRT4Y2m2MkYpq8KxdzPzKW347XN5xX3ixyyMDGopAJPYBhEV",
  "key27": "4BiQ7xSaYmCKXVfHdfuv8jH4jvCgyZn4jEmaeyBZij62xachTZFbtb3PhfRTfXwS8sRdSwi5byh63oVffy8BEATp",
  "key28": "3GvnHCcNTjRm8cFHC4MzMpeaUbd1uALYY9MfbMDrYpWzHPgbYQrMSihWD58nfmZSuXvteQAKsUC6CBdRxop2U2kA",
  "key29": "4vocyBt5fcmPjSmthXLCirsGG9DJnsBmXp7V7kJuMqseP4Vq5HB2yVxVB5JwsJnHT2pBqbM7pmJ1ABTU5PRqkZiY",
  "key30": "jHzqmxxeyU3x8DjCsuJqdh71EPA62GPjiztHtHcjgHEBVUYC1Azm4EPCmMeWjzcZvf2WrtHKgnWzYFW5Wf34fn9",
  "key31": "3qnDwDLvRoNX6rpvtuNk3KN7ZBcQVpwkP4QxnQmPSjn8joy3kH64jax11u1wEYsN3fFATCBGpbeM7f2mjWJ8XgbH",
  "key32": "zG5UFempsnuK95nArb5GFA6Y9X6mynEGwqEDnEYvS5LvVzKQrFBqm9Pk7xAmhGyWmoRCezPBwTnwnp3npku2TQt",
  "key33": "PWZF8mSupeguzgVq4K3mq55vA1eVvMMFRBmqnjPcf6AaqUkWBpmGwrYH5iNsKJipqk2rbjtGcY9ZKbFZN7Bk8rr",
  "key34": "5ZZwiaTrA4itQu8iTuAGfqCR4Db5kkmewm2HMXpHjv5JwaLPXmKdPbWLZ8KfnDQxmVQB95d4zWMRezJeDzoz6p71",
  "key35": "3HeqrAbqgDfgpqtuSiuBQXa6MRUDR8qQWcyLJH8S6JwCG5UxgUcypsuANMphTompLpLxnXCWcvwgmo4UNUf3uAm2",
  "key36": "5EUS28rT7kRHts8zmQ2QM5ArLYv2voKp2qHmNbwMXmv4pguTQE1W2iz6u8rRpeXYSxZHGrqM7FqApZXZo1QjWSap",
  "key37": "2PU3dtomCLYbiZGULuvShmHXNMDsyt5ebnv2rFCQvv5n2nGEaAfRLR1RsNSwVcC1euemMUype84d7VZbwQnK5JEu"
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

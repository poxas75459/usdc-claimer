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
    "h6LbmWyMxqNKdRFNom7JpS8ugnjVTV9iBHDQwJ53VDvhxtGNEvyDw46Mifq4fKjuFk62PKf1YgTpSf7PcDDxSnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efyXEg7ARRxC2sKu5NVxLjdab8b6v7PYKwejrJSsQAxkRrfDm93rkBCaeDcKvTVfHiER4bi6xgLEbpizYvsDnMp",
  "key1": "Gf4hPP5ekLBQ4ckaiNYreP9vFgWcCafaD8pbEkWdvXT7oWDAr8LgZrVRVhV9Hzq3rZGC236o4KbNtSAAwhnoTLr",
  "key2": "5FJr2YzUuEcQnZB4EFbvGHLEWk8ywzsuwpCVjvUbWvP2yPvtgwbydMnd6bmhftzm4sPJaBFEzzNCEdP8T9BjJRf7",
  "key3": "5HH6VSjm3g3nB4EdfFy5WEP3Vhf49YBRf8QGEsCtCr7Bh64QHtzeCeMfazmC4VmXJpS3yR3FerQeyG6wJJHkAX6s",
  "key4": "7LqyknHj2x1ivDPY9gjg1aTEFJ1PTz4mwY7UiiTHz9xX7KSAdpFJZxHVS8PBATuksMMzZKGQSbTAa9SnwQnMiUW",
  "key5": "63d5dmk2k2Ru6YcjKSFjS5AGrqRagQfQ71NL9UkDz3w5yK5SsdCHH357Sb2QJaq51MotxKKGk45Fw3VGbZRszrBA",
  "key6": "43bd46dKun1FDbRPjjXR1rBhaWSQhoenqCbJ9R7yoeZtBCnah1xUhys3Lhb4XU79F3CYUiekesDYjQaq26Dh2LKn",
  "key7": "56XPUw1G98WXSgs7fJxE6nRxJ7DUpzDquTdMtkALAARSEusgQBmJ4pJ5cEQCJqh8EYthKCpEPBHPhGHoe8c465QF",
  "key8": "3FL3gwbYf1hEJhHxZn9CEYQQchNmjPuh99uhriCHkcHhy7QCwrh3UXLDchzs7w5YPTBXfs2WRhWdxeTJVsyVXHB6",
  "key9": "4fQJUm6JiqmXzBp1pRygjyGirwaDPABBSVj2aiwVQVLjQvUxXqgQtvrFRkX8Gmd3ydM91jDXACd8AvWLrtvhwtJB",
  "key10": "5JZg3HyKyQwmtrfy3Cku2UBa9YjNUTSv3g56ZtnhXgRDiMYB3z78JU46ZeHhPTbRQPgUDEKxHf3YDWsDnmRyQSoU",
  "key11": "j5d5FC4zRm26im2gyEWKW18ugeV5AdoMYBKvWDWht3E7J6ZqN6uB9PPkeapJTwUHPo1QxVSdkZRmdawyWCoxiTG",
  "key12": "cLrWxyJ2gyD4gWqpgsFUU2XQ9Bg6V97RwTd49cp7SiE2Coumzfmz3V5TfaZpcRppJ8NcHL5Cm1a2p4gUGm82WDp",
  "key13": "22UfReE9xXL8vcPuf7dcVqzuawjMLCvQ9LEDhKTg2m91WjxH6z8Qas3QPV2De4ozo8XzKhyNKMgq3Ctt2GKAt4tj",
  "key14": "wRXo2vicYL3T4WcVpKDf5TXacWzPhAjjLjqRaskyGs3R3LNWHf2FZ4LioptYUJpyTmy4V8BzL1t7TL2x2rgb8SR",
  "key15": "2NPqcusrpgUY1wQCwmmF78623Y7XW8KEfNHYdzT5XS9H99VZ8QYmmMEKU5y8qJPdgcsCzgwKuuWgieKmM9RzzVe7",
  "key16": "89QNo1mKHiFnh2xt6YaDHxAJdnajpoaUjvhzyiuNdctm8g6Gisp9NmQZgwaWbBCLvia4ciBvT5Ay3fTyP24bBLi",
  "key17": "49vVuG9c4GKKdwiuo86SCccU2Af36ZzE3bjMVZyWDAMTwLAGqnEdKEZ1V5YSnJNacpy43KBEJCk92E8TKXaysgop",
  "key18": "66PK6NDqtdcv3DNK1iNxUAd4XsunxebRnoRzbMtxfrhqA1DgiV96BDuCgmaLQwyxjc7kw7Z3z3pSxc2tQGbtUYWK",
  "key19": "2f7LW5P6TD9ouyKH9aBQUfDcoMjizMYGCuMPAUbbh46Cuk2qwJwWxKRSLncdwD2mk3DR1zQARmimwBcMGwJHeMxV",
  "key20": "5gqpT4teYwJjjXCA4eg3o4p7k7ANwvaRuFA6zwyyJYnyNensafX4oxXt64iSm3bvCEy4mHXYx5ttR71fr7r2p1XM",
  "key21": "4Ng7EnfJmKD5ZP7wMivTSuPWaj4VXFxEjz5x3yavVvdcDyiSiSuPi7aSuZS4VWUELFqYDkKzeCXxJGmwGqMSYKWX",
  "key22": "5Licdxxeh6dh4pvE1RPsDyE2FhsDatjXNq9cfKAA2hypax1jfyV5noRmgbAKxiKQYAWLgvWxtXXK32stHuCtu6FD",
  "key23": "4bjRV1QCVUrGExQ8V75nt999aPzRCBga7WqeeeSmNGLmmqRyzRCrUX8YLbvG5UwUCMNwJvAaaEW1XXTtBnChgfFD",
  "key24": "371uCmRvi3GjodB11QuacLGnu136bUXEmqRGvkM5TMCmqS84rnxBeKPeNnN86KvoVaZnyUYZP3XcEYkNvHyHgXv5",
  "key25": "2bwKoEXYbVpehfiiZwoTQSS7PjrbWGf4LvTZFa182KbB5TZ1z5gSHWqBfuxKRNVePtZ1TRvufrDp5QpX2EnEqHA5",
  "key26": "44Aby9xQ2n2dX4skHr1X1vZJbrmgxeRknHZX5AZ3ny86sCEBzGWotj8dKer9WFk64L4Vuj3wiwNUtfkdP42vViM9",
  "key27": "5b3wrDeLHJivaT1wS4cTF21p5mEcX5p4g7iDemCVN4UYyk3hJNmchsMPCupenb7jeFnQUB2pWwXHNaqH3fCJKgeP",
  "key28": "2aAGXfwZm72twU2gmkXnKzXGzqH7FeT22cb3qKyoEySpZTzMduZapahgpz4P2WEKkKuegGtDgqYPXEAveBvGsx8q",
  "key29": "54aGAf4emmgTYCKfqfhwYSTDkZF5MwzZf3dJY7SCs4czxdJHPvPtZxAZE84GDb18Rs2CoBgsUP37sS6VEW345yjW",
  "key30": "5t75cN7imKp5Pb8duHZfr2jBSzrsdBEraVZ2UGffq3LubZ4ejvcHUmCiHtigo2QoVq7LVZfHWYSuGgS1CgtQc3Zi",
  "key31": "5UZDGao9gnRLSDR1SeXsUN9sPTNSc6wop5n2hAw2YrDaDpEE5iGrvfn57DqaXUMVsusNnZhmz2i8JtaNzTTXWUJJ",
  "key32": "3UhJXTupKiht38q5HqREmxVMEKkZgQT4BJEoMk9PngVJqxkvpGrtg33aucsL2KeP2g83pJZnK64ighpEY9aKUDaw"
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

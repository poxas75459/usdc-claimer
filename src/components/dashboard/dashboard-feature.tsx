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
    "3p7sKDkBbEWCCtrWNJhb1GCL6AVpqscx1dEtvvaKM3NqqEo8r3wr7K8akqbLrB31f8WEZdj9n1E9ZeCThm3A6hhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3trh8pt9Biawruc7kDzz6g9UrVNu7eBj5udUDi1ZYdgoMCkL5C84ogFLfpvLuHck46xzninPp8e51GqUtDJ5rnLw",
  "key1": "5dxpHJxmJLe3JxkctNzEbJQ2b2UnhtKU9vCf4ntMNF5Gnemnc3bZWKYkqfMLz8xnAWioHR5TX5QmvBystX2Vovy5",
  "key2": "5EzJJfc48vxZMtwfkK5vW74n8PmdeT3SRrsHf6WFDVeEjhyFN8mRWttcHvAi4UWPxhDd8afLd4VHm49ZGNHVRdfB",
  "key3": "8GqxKNHnzLrUHvnymzC3q2GgqhJSqjct7TSW5QsC5AmsD882UR6rAH7zMosbha9VfNpvkCaosKoR8T3pHQJQDhE",
  "key4": "FRTtRxKywENH7bq2GQXS3Jm3rj6etTnSZY52AKXu5te5n2S6QPxDY2skcdaCz4A4iW6pkYGdXC9MpNJxTnkEfu3",
  "key5": "4pmPqehwMeiq3bUf3bQo1UYZB1AQJfQkht8ZTacViUKgMViNN1BjSfTjw9HPDyRLcggUDvnBY4yzJq3LhCenSNUr",
  "key6": "yL2YAh3dTwvtkAHzEWp739EZgb3EWKMChbjezAFcZAmsqJct6mF1SVMXcyqH1YNFFfvE4Mzw1QFCRTpiApiKJVG",
  "key7": "2yz4JZ8QEkT2RHUiV8c1R8bWQrFNHn3XtU9JXSwWcX55NXCJ5mjKBg4LvgpUgwq1ayjwB6ECPwQMyoqfmCuNADix",
  "key8": "4QLmS8PNPz4vSBvhe728oLnaUtAzsAo3KWAstdxh3XeibYetj3UqFKtjjj1xaGovwHcmrCYunCD7b6j4C51KAex6",
  "key9": "439NyqxgMhK9T84xPsmCJ83tWsrLwUtG3B9miEuAVQXLaqG1GM7S7vNQdJQRHB6apssFpo5zHsL3622KGw4euTjP",
  "key10": "JrzHSPQSj4acYpxBxFypXFLt9KbhxxnePUh1SzhpocZrj7c5JE1brAHsNQchtiRen2tKWVhx8EDfrNbW7udKnAo",
  "key11": "5ep46SxxWWr8CcJiQiCojByGVKTiPhzrtNr5WjcLLrnoYd5Za4SgWdaWAPzAwJZXEFm2zPKmGQqtA54tef2PHTaD",
  "key12": "66k2e7FXRT5kacdA1UrpH7Zd2b6FUW2raAtrMoiwW8RGHjphkpWNsvPyNKaAPTfECgyDL3RLaySMQwsb25am9RNt",
  "key13": "F9Az7VeANwF3sG4BCP14MdcXLtesyNVcJSPxCJQ4Yf7h5rzKZuk9TrLmBkRjjgcPimgQRZHecKMq3DeHn6onKg8",
  "key14": "5qkApVvqGW3BJSHQsemJBubQR8bcAW6dCeJdqp4bhtc1ZvVjh745GcLGvh5siQPNCZSJekBxZ8PkUt1McGj876hh",
  "key15": "3DewUbh7Be1QybiEu8AW6W7HjJUSwPqZFsjxn8LJoobp6FmxRSLL78vpbyFJg2F2k7GTSBgqrfXZ4Urw8Q5vghCb",
  "key16": "2ZcXX7n7hanVbR9cW8MMUhS6BttXspZ5BeGjjjxcsoTKHYoUfmMK3D3Rkz4Y2AjURhfwGGEZ4qYnbSJYbYedW7rY",
  "key17": "3W7g4ZWcHoHXvCrySASv3P2Y9oxMASGx6XFkzT17H78MLKWKVyeHtXevCFftfk6fJWq5uz2kp86hgkDowxi8Xtz2",
  "key18": "3pJSvcsZHqZbD3EcbdbAsvmQPL2Gg7F9gKkZmC8Z9TLcueLfa6v9kkJ2Hm4Eezwwpm1MPi3ioRPSY7yTP5Zz7VoV",
  "key19": "26xGcb8AzpkvYkasbCywjLyrP2iJS9yD47ghpzqVYZcuix7bERkinKrG71GW4TVgmMKXPXoqEapQj9nwAC1bMsVM",
  "key20": "nrB4JTCmP5DeoTczzGVvN172HhT25SE4KkJCzCqThxAVY9fX9un3Pb3FPDNUaXvUWWuutVvJQsbbzgqDkjTHh9j",
  "key21": "4ZzbrnrZLUvUaGU4smBHV2kBabUhzYcdPHzQCrCvPhndTSUek4ibw1PH7SL6r5urm6UhgKukGU6iFxkU3CcLKqhh",
  "key22": "2gHkao1KYXbD1qvsZ544dn2NZdTfaiq1BSicLqPAAEHVsZqrk8Y3JS9UVx6yz1xCXkd9ph4iqNy2kUL8XyyA5ah9",
  "key23": "4nKF1CQ5r33wzXjCU7KLewoCDNKGnt34sfkMJKPy5jL6TXux4ZDwU9q5j5nRvD9vNqgHJQveaWamha7hT5P83L5S",
  "key24": "3rmWC3M4jWyGtiatsTtNEihQ6h17vdy6QhGBgSzmfvaFPSRn9Sb6JQ6q1itGtNJMctAmbTLeHhkxwL9pffus81q1",
  "key25": "XBQL97YHYqvUyKcw2rUifP52ao432F2c6J444szsLdgJzd9ENqUb4r2ShXMYpAqzYtFCPmRP8GhajKg5ijj4e2q",
  "key26": "2GdYUhWUkVHEjgWeNqPzu5GRBrtXqVFUd7aXsor8jT8nnzGJ3osMwtjiqf3KzF1EWcsy7TofJYDpbigD5RLgXsSz",
  "key27": "5e17KMcoMBCSiT3VgXtJdjh9Nd12uQE8L4mJuHVnFyGGfuWvm4daE9zWBCahLymUm5iEqs31bqZxAv1FLEvXpVmo",
  "key28": "28RLNu9V2qZzxLibbtVzsAtpt9SkLTGpsvyCi1nEzoRTNPstHNo58Xek922W1VtqJZr3JgeEz3zjN1Hgy4EzoC18",
  "key29": "aWDrXruM8peCxjijVsE9RLc7XSLrfZgiWJTxqgCKX5TgLwpL6NK9yr5sG82w3CN8jTWAuoTtR6JWA3b9QxoCN4h",
  "key30": "48WndaozitDQt3R9ByfMLp9JkBUD6LSL4FCaifid295wR9wexT6Wz7HvehqeT9gGL2RRVeQPxDjC5kRobb2nFJew",
  "key31": "5hChALpJHCUTLF3GdxpFcTkSBgQVZpoMPACeKLgyhng4BaG65pAhT8CmsKBTthXbfh1UqGbfTZxP6YzRmZw6gWmu",
  "key32": "4WYGP88aGigXw29ekkzyEnLQif92SuZ2rxJfQKJWdddHsQHyMLCngx9rEKoYNDfxXA8LtSVAVVVoqv9JyXYhkvDG",
  "key33": "5jN9tnfrF9jx5K7RpryLH3raN7fNcmo12m6ZBPRAafoLuT6aNxAynLMCWP1qVWom36YBWvM5mjeBi9U16bEXEpLx",
  "key34": "5EFzRRhKMv4a88B3edezYDrfHKy3aix2pJEVfd2qGTJJhTcn7vijv5eDGVf2CGBKZjn9yFcB1eJVemnR41zqYHX8",
  "key35": "4CJdoGLrgJf8h6mgtBhn3DurhsnXyLidfMPkk1VAfUq6XuykkoCCwdyDKjN4imr1yUpUEphaEmWYTEXMWGYGwBJv",
  "key36": "3NP5NR6ZZkb8UVaTqZHboFpbHe6SQUbaE7vfWh3fhsTZAoGB5XcZvPryFLo566DzpAspHNjeL4HPeFEgun12s1yN",
  "key37": "54xcgWSAtX31C6XT1xavpbFzvWyoSM5skcZUC4vyUYPDW3yxSyyP9geiGUpyT9ADUZ6QF6N5nswLMhWEFAEreLUK",
  "key38": "ASHmGnkcbKUcEiBuuVm8V1tR8Pi3sxDexthpXA66U8DnPYHzN6oJ2jxQG4Ltsr6MCuyN4xcbrGUhZUSYxFZmHHC",
  "key39": "xt4e8Lzn7JoFSBo5RFobwMCM8qbeqRB8pwJexMKo3yv3Uo6x1Xk7d4nF6JTLHVhCTGNoEe8usnnZxyXWHZZ7RVz",
  "key40": "3Yn2Y4A49LSdUNqGcC1ws1zJ7TA68yeYA2HhXGUoPxzZpXg5ig6tVjmyomcZUSRhXN1Ydjex3i7yPWkMu7Dpx4XS",
  "key41": "4UEercaCyoG7RqUEEt935BuCHVs2DK6gKLS51u4ZZxhsT4jXKyTdVv7bVq7DYSFpSE2wHz36S7U4mRPnJUq4UEyn",
  "key42": "hZEHRT3Y1dtatXho1uSDVBEFJsmnbycuzdqk5XhouTVTr96q2nLiASdr4ucb9aBotWXQ2iivgHRUL2NNS8yp6HD",
  "key43": "3CfQUyDnkinb6nwLuXB1M5GMmt6p6atLuRjNFZ56s3a96rjLZpge2pREvso8QFN3U88VXzAuh4M2w4gdJujyp98t"
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

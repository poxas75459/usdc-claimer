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
    "fPtgs3ePGewGQq33GXnix7xMDmwRvaY5Gnp2x5eddmuip3QccSfTXejGVgUFsdakDcHamEVh39VysRW76qtHcxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Szt4QqNjsYo3j1BAmMe3epemHHXY4oGcgCa9CrNdWhRTg6h7thuEmuMUFLVhbpma1SFQeC5EdarJ2uWPnHZs6NS",
  "key1": "jTDqU7mQU2vENgEsDW4MfZ9HALLR6v535CwudVfv3ooxMon8QixjsPz2p5sLCRh29eKZkXCCSH5c1VFwdM25R4a",
  "key2": "4ePoRFUxF326bUQw9hUZso6rnZo1uJT9Fej6D6J3C3pg6TMN8gH7FGsoSCWnKT3CZ6LxW95mmoW9v7RUpbzWNHok",
  "key3": "4sNyft9h6hzaW6yvxYdYqFusuom8xocTkoDFCQ4P4gd938huamfA8YiogbAKWnau6pdWF97Kq5svNMrRpUDSXX9q",
  "key4": "23LDkzhNDdGoTb3MHH9sH8pwc5G3Bj28g9sRZ9m4ftLyhTjQJMgNtxFtDMmSZ24UuoQh4CU41raMY51BVipnjyHE",
  "key5": "JTftfVWsnvxT35H2iyjT1H4ENvnCQnryjF5ytfETQzFzdk7TULtASJgS4GVAqFt3sWtwQ31bTtvQnzyJ8ZxmJ6z",
  "key6": "Gg5vZJUEEQVhNo6A2nNZMH2rfo6qXatv15g7F5qZ5gEpNyHU2R3arxhauCTtqoEoqVB6dukvcrDn7JgmBeWucrr",
  "key7": "2dCNFcArJByJNytZFsQ6a3WtNJN9akJA2dw9fTvWMTCBSdfnkjto9vP3bQ9n9vu9DKtL3pipUsSkrfvVnNhTocoj",
  "key8": "64nTe3f3xqYL7y4GWba3yqpZECYKLsPLiKsJF9zXnnhM3PdPbRaBGoYbTeffv8CJme1jwShUhUcNzHRvhGZWCakp",
  "key9": "8hHUo58HNCCWwx6hn11Br9qAjAsAVSQ9bfE19robdowftKow8NtaEF7Aqyifqb8aVMkz3FaNuCJnWu8RCMToY2e",
  "key10": "5hQx6fN1GK2JozDLiwJLn3sbfU6rnwzsHi2c9PQosno9fHGHckavuQKKgrB7mu9quu1c4tR45rj4gvzPqD2muav1",
  "key11": "w2Bx37WYNzSoCPXaoBFqJs9zZHmfRWnjdiyD6WJkj5sgY8akwtyxzAeRCURo3sbG9gbm5Eenj75tSAQKQsGZnx5",
  "key12": "362cqRYvrFVMvB6HGmUGvD6i2dwTTbCHWYDowE3ziwtAGgfwfgqeA2GCykzr4XTCGfut9LCR4B4PEGPDEwx8rT2Z",
  "key13": "LHkMoqHT4NiKHSmqzQWUkxZ83EivRwXv8oTUbRV2BuBTgPqKDgKbLEZjug1mUSJwKe8yhB4pbLf8ELYbJVMw9Gj",
  "key14": "2LsvDWhKW9XtY6Wk9YX3N2iP6dBjFLttSKxAUccma45LC64HpedqwCCtyqoqwwnSyghLLMABbMQg2NmzpjumAxrm",
  "key15": "QRroNHSuVSe4NhoCFFXmipyfa98ycvpLYbyvS6z1sU88uQzfo4mvyypfG7n8QXD3PYU9Pk3VKrGxBweTxA95wPi",
  "key16": "2feTWFgwScn3ZCt1fs4PUFQmE5Db3MztwLr3H1pVoov5h3NQvcuT4qgUTPRrYd5KtNsTQY2uLvqEeiJEbrAJg23h",
  "key17": "2tEzCRy9paEh2tumEcAUnxVz458hkRsQprizcb2PvvYKJsutLuvYh62s4TytGtvDgKAUgox8frrvpjAwQnLLqMAL",
  "key18": "5xQwYuFVg8NEALb8Lp79duhq5A85MYkQEBNtfcNYizL8e77eFYnAV7MhZN7gqYvE1hrEYKLnXfyszDS5wwA1iq3V",
  "key19": "41UQXhYqKxZsCHxkY9dnhLNmBmtYDyPibde8fpaNrpCv95kiwKjnmbq2EUdbThyVTZLEYNkqN5zjANefERBpkgbU",
  "key20": "vV9CbmPr8JKSGcmD9LUAarfp3WtrzAuJvGYju3oj3Fwi7DoHUAPNWKRhnbWzyakhy8EE61GFLBQVqAWF7WS3ZsE",
  "key21": "27rfizAQjGVK8GNxVKJpvd9FSknZEhJvn9sp1T3cHyLisgBPKR3VwjeAdZjaP1j7uweQcooWfTNBrnoxvpUrqv3h",
  "key22": "9EzJXFydHyXR7vJLL1pUHxxKkcSc63fHK4Z4QQkGj3b7mbA1bLdWJBy84M97vBaPryHKMYcL3GdSbXm2DKLzfXL",
  "key23": "5WjmvQTo9pDn4f3DNeXW6FwDN2SsSRhYS1ATyL7tiKB3P4eS8iujR7bYSGoeHufLQYwu6Fy5sUg7ZJXRMCvjuFaR",
  "key24": "5kpGU8vWTmPZpAPXZL8Q2C41UMrjFtGaNXdjxwcyV3ZLQpAxRzo3uDyhvXSgfpR5qdM3ZhjWEdzdgakk4czszofV",
  "key25": "2qrnbhUcUvqEo4DLHsi9AneDr7rGmWPaGrukW6trAbZMmFYGKboyDVd5pRUcJ7KzVmP5jNahReJ43N94FeZu42FQ",
  "key26": "5JiaKoHaMfHEyRP3vFZD2PiY1X5mD2or7yw7ctDhPufjbfwnt8FmykgtcdGtg2SqG6JLBPwcFpW2ZxgAPUgZELxv",
  "key27": "3TuwrKfjJgpD1wcxFWYeZr56qmW9qwdUg4kXjghHtJpWowvhpQ6hAxfD9GiDFAPaa8ub54TPe1DSqFjhW5cWUVa2",
  "key28": "KqBRoBr4KuhGgCTvzA3ERe8mokibePphAaLH3bLGxcdvWezs4unMypfNxMeNy67Qr8K6Vm2WywMXPmwZfL1LCov",
  "key29": "2kMbUuHaWaBWotYQbYpv5oQG5mHzyS6fFc21LZpPKS1qCn3nT2jbQUZcigficBxDL49BFCSzwV9h9yFpWwCxx7Vx",
  "key30": "4MXTL2ysBC3apMBXfyzW2psfhucs3mabwtgNsgAtHEZWpb5zt4V41sfTPs5896kqDxpNEzhh9uJA5x9wk1XYK1ED",
  "key31": "5Z7XUT8HbAXbm4MKS5GHSWP1B2ByJkrRZGNooCHgRiRPueUswgcMhwdXSesxaBWPwPdDGJtwG6mDFJPfghv8hFUe",
  "key32": "4KcK7UPByp8hhrtoC1jLchmXJhrmWf48c16fz5SSxrHiXR7QBWSXpgtaFrrgs5VyUPgsL8t3RdjZyrrvz3gdD7Dj",
  "key33": "53K9E7VU1Yk3bnZQ4abHwKzy1dzjiSCqbTdXAnKQGCyHML1qCj2tpFcPe4knaktYCLGcmMA2X8bLwnEwm1hrjvyt",
  "key34": "2jo2TkGKwNAooGd4mhshn83FgLVjMgNpc4JYF75XDSk3wxXnRkXsatX6xxPvqtny3J2J9aZuUYafht1jeYarhNXM",
  "key35": "5Vsbv79S3kd2exJFALWnK6cLHkJVmprfnWpHkynGpnTJoKmFUMEYTPq9C6TksxkMHjQ9XrQude1zkkWcKSbs5Ec6",
  "key36": "48KqxhDjEWD2XPbiCEwgjyopq2aujemDKnLDFAvYmhhFAuBFWri7CK2uxzi1hAJr5wZxxAdUEwdbpPn9ZYuV2Gdt",
  "key37": "2BR5N4q2ZgwbmCxHiawaiYQ3d3FWQPCGriERJNArUGumiwPeP3Y8vbcHjNnfqyTN4A9wL5joTeccBVZPgGfpUzpQ",
  "key38": "FGBfndVBXGUiparFW8eLGNgxDNQ1hY7fvFqnX13vbinX92d8UZye7NT4dB1JiGh1A9XCjSxuhqk7v7gZxSPtjGg",
  "key39": "4EZk1AVNsYH13V4pRwVZ3XV8WMb4q3SpNvUAmxC4KPVagPjMWE6x9SXwzCRKni29vZ6Wvw17gHbKauexDRsx8xi3"
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

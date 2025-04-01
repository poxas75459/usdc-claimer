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
    "4mQtpMsuFL7YpnNgGJWbjgsRFYU9VQoWggreRfAgGZ95kd2iJafUzNgQmBPsmrTAKx1vTxNP3dgszUJtbHhXNTiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWsvDv1Jtp2F4vciL65dzFy9U2SufcBtgef31rpynaCJq9hvT9gQsmBb2XLwRGRcPH5QVdkg36XGQWhM4oZ1b2q",
  "key1": "3fStfvf5dHAUC4V67TRv9St6LL3cVSguWyLCVcJzqoeg6hyyn2ZfVNLfJJfFkyJy19C9aF87Gttbgg95pfTsJuXM",
  "key2": "5D6D2bRMwPibwY2w5UFESYgjQrePgNgqemKKoXuwxD21DzZYczYFEaEMETg3zBBXMD9BxDVn2TR9WyPuuTkZdpWA",
  "key3": "4naV3NqzzXC9M9yz9ynNevyUEsYWX2Jf2rWw4EnAFfFko12rWrF9gempsaUKHdeUs77DcRybQ5RgFhc29SgpguKo",
  "key4": "JomPThQQnV1tp6mgZUuczfKurTSDE2msBdbfczsEUkSTYxjefrqVr7Du9vRPGXburyHwcfCQs1MSiwXbBgG3wdm",
  "key5": "jV6B8Ugzk1uV2hLJiNfWp5VQogYGB5csn4WsJvYkHS2fFiJcpru1uQ7cshdFdMsMi6fASmmLuVjfbXGNYhuxUxi",
  "key6": "2pMhiAVdF873Ns5qLetSHBkpcqZ7M7tFW9UW4LghQ3NBsTEaWL7eeESgD1x5fi4wndFA7JWh58CVftLMHxLoczUR",
  "key7": "ntykxXfQ5XQpV43h9Jh3f84hjuYLMFL3C8Wh4XVNfJKSv3MzsSzCmtBWv7kYppxeBBYydn79t6snAQsdricL2PZ",
  "key8": "36UnXfVwu8c6eMwmXKzXn9iAGgRsiyDcwoWXNc9REghtSPBCQC6SEQLzAP4kVXprxokWQAvRwZsk1dnseD9yYUvN",
  "key9": "5DM81TQiomGjvSjA4mhraAxfRmTbGpuj4xakxms8tuxjLQLN5mhPTaB5qWjVwfb229tLiwLeCDo3dWcafbAEoBth",
  "key10": "3zmwX8seWsLYnPkzEabUozePuq4sWHtUCoYhE3ctVVzyHwLby4obkyAHB35UeDnep79R7asUj2eB9PdYgKXdcwNh",
  "key11": "2Gy4iggC4PuKW4rjRT2tW7cHrdC2JCqKwkwyvf2opVpYQHzjgxweLcmcMF27CjMkCN7wSMR3MZAdzTXDutLWg9ca",
  "key12": "4SK343DDNwNaqgFLa3wFXh72P27kKA56fRQqLA4wVfJqttMXH8QginVt2UA1dkRcGWAjtWqftfUvzo1Jb22gptEH",
  "key13": "9cX4ZoJKdVrEE7R3Qy3bzCETYudqKBd6tRtnUc9UcGkyAg8EU9Khwa4qbR3DsZPiUitFYBPAbmozo32hukpcGyg",
  "key14": "4MNVbseNwY97kGT1CbE6Ge4LkH8UyQajd5rHSP3R3JcfD1JdkTNSMQWfdAsKcE2CjxffaHc8fHHi6MiyQN9MYRqu",
  "key15": "KtzdGzDbhXY8kayEmasWgfDee8brKqQxyZJzpFUHQ8pUG2xBrKiHTtFQfkebx23UDZMQQW1cY4EHpEZLgYQ1qKA",
  "key16": "YGDQJmMYweYiyTqxzRjLbR3jgHCee1BV99spzHvqVHULHw4DwLH8xdNEY4zUFEptK22ZKTuzKYbPCufVrwGQBVt",
  "key17": "2S6nrueWK3rMcnaD32A5ReCPLWTrgJQPpV6ev6pG2RssydYpFnXFveQGtu36hjgrb7ZuSeEjQxsQGincAX35EAoe",
  "key18": "3NN56sEePWEzuhgtmveSpCj34Cq3mJqcyfKRvwp4w9vSYM4SS4uJvG5hsw9HR8wHB4F8fMEZCSUJ6mtJg2WnfjDW",
  "key19": "2qhqxUtHRbdfhwuhu2ftSFpHwhtu2MNiEhuH5rVweDr1jCboofsCFw39VrYAZvwjYESZaEXKKG2K8iLmmXMgPJMi",
  "key20": "4yhStvvZ4jT2FrrxKjN2UHaeiTPzoLhnrnHQx7UE643JWUMxjTArz5Xsx818h1hJkHZ99ygSYCv84H1tF3D3nZSR",
  "key21": "qhsFWgiwCKVpZQLAYXLJPxzb2eVEQKjH3nKgbuQQR1dMmBz1XbopgDeJLVXtjof1KXH1E4uisUELwy3biwHCyrt",
  "key22": "5owYhPYDHyBs7TXn4SW9Z25nLyo4ThwnTKzDJdyc9zjQEzSxR9xNRL4xhkTp9QZ4mknDcwh562XA1UZGAb9XJ3rN",
  "key23": "3H78ccoLmKM6kTPHkN54pCdf82HnyCrwmJKht5KkgAfEX7qbgSybzSB7AwyUDFYaJ1Jygj7V2aXqrwa2R9PQnnMZ",
  "key24": "5Enhv3kB8YEpqy1qUqTYeoAYMqNpKnLQBUDgc3kvCdFLA9pc8Qb7EU7HBUgT3wDGHJvrkcnmuzxm1a7HHtJBjYRy",
  "key25": "2X9XT8AE7DfcPCMEYnWeTMuKUGLUPZq17DCr1Dd8NiECQt3gqVAz8jq8MTo37qK4v2hYF478ffzSjFmryFD4Lsr9",
  "key26": "4LiXPafdJs8JppcNJPrnf4URMNa8LCgMyGipgzoX6eBN5fDwrfrS24WetksBE8Rq6xMym2yL7kLyDWjei9ov9hZQ",
  "key27": "46B7zvepVDFimdw7KD3AokJjTv4BX4P1PazZrGXciRysgmq6kYeHCaMAW1pMtyFwbctFbYNhkgtzqBpjk8KewJ5L",
  "key28": "2H8TgNQ4exA9q3HMxoVZqBawkKX9uMVmSVdE31u7cmDSSsS8DrdhYBLetxn6XYkhyfa6uMVfm6SWLtKgUDZRKnah",
  "key29": "pPnGQ2rxTpvLeYK437e9LVyzPfMcwgpFdvXh7zwwKgmWwi32ZaYdvrnZMNNqrmb9is2tPtXEV6YniuhSmbiJtoj",
  "key30": "46WWmz9sfZf5H7PwwVEPYHtfKskZ548GRzmTyaLuyfxXrHuRJHAamgw2umLrkNw1TgZ7zovYRKEoJiJgKkC5ZBQw",
  "key31": "4KHWs3PeqTaHrB8m78HiGfqgnEtdviMw2chzTJo213YPGKTmEoehzDAD8c8RYyDKSgAnGSJ5a9hG5J4juXic9SeE",
  "key32": "5rqJ86c1Ur5vYC5JLeb9fgSRRWBrAg1rPA6MvYkKh4j7nukXGjb4vSQE9GH8saRGmAiekcR4gE9jGjwHpe5njqoc",
  "key33": "5NTSGFXY1SeTThdJQtSKvcGXM1xMRWYojkEbLBGKYJVgb2sZdQKrxfkyg23gDZ6qK2HWpPDCs11soamgSYnXzorU",
  "key34": "3D3gBr8WQfDu3qsYcdt6prqfhZYtruraCVu5TqhvGBdGKwHQ5fYGEWz5HPDpmiTnxE1aMwwSyNyN9kstFRUdWbFG",
  "key35": "ik5WLDoMwUwfUekeL6GHwWANc6B5ymcrgvn2gGtNsqRqiYSp3ntP8rvqps3H62WjnqevzRfnkE5LnM4wX4CHtdT",
  "key36": "jUxfCpPbATWrisTskiy6bsW4Wo6HfjaUb2L1CfCVEfgZD6aMT6sCF5JpU2V878wwgBdaM55pxzFzWCejgGvxr9x"
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

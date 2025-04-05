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
    "5qcNMqhrkbvkDpFk7dhH7jfRTgvpsp3a4SS1yu2jDpeRFgN9wGZ5xKN2CLm5w1rXx6fD24XQGMr6DH9QqhXbJAPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waK67uykfPdaaKTnHSu94her8Wjpm2gVATTN2yppf2WRh6XVjzHpTdg6UpEX1joMiG2jA2FWFm9zWCJ9JJGLo6N",
  "key1": "49nQJ7fQdv3NyyuQxenMn3jjp7DphSarkWYEbrQivbrLiWdycK9mPTWvjHF6yG2JaXiYXqviArexYZxXaxKedEza",
  "key2": "yR1pZ8RorW3EEWRk7Jibzzx7aBLc7wHR7kiFUuNQswgiLt5ZCtuFcsX1UuKxtswcAo3gGXZ6kiBYpr39rJp6HHi",
  "key3": "5Gq5G1qiBmLkBL7tq75DU3VYxkdL2xpRu7TkxeCGqLQ1ZJTsKyx1K4GS6ZT89bGDiz8kx5AVPh2L91xBLp3nPEfA",
  "key4": "5vKeN5K5tT6yeGZGdPWuqptVbFLKHbS3vNqgW8KCopt5SEcsyvpwmU9bPQHW1hx6Qc21oMaVXStdb256nSZyefgv",
  "key5": "2ysBF1FghrJSdxuJnsiu2DVb2qrJDfe2y7uCn6ABhF4xYnbrvD1UoGkmm6HfuHirApQvkUHtyeredUJFik871STX",
  "key6": "2Jxe6kHFgi8c2xNejcTG961gy5vLAoJo3xX2tkUR1xdmHpHZooQk2gK59W9VqHWVCPxL1rxxY2wF9DWDAWyaozT7",
  "key7": "2uL2ZFvgoZZ4MS7Xr7nXpTtW9YZAnsTgtMVAdBWk6TdGY7gG5ZfogkgmNFXEnuYh35xvinpiEEXy2JxBXE8ZZ8Qy",
  "key8": "2L73gpGNtPia4HRmuBdPZy9xt3cr4MMeSFxeDbPDz4oqxniDJNNRHWeRQ16cHR4ErEgyvsqur3ZvHVgXvdPhHWai",
  "key9": "vc3fQgoGds5bWpTqze7F8MhKNbbvqh1GcE7SP2snAM3mLZeHNJafBuayuB7w2JtoKyRJKiwU1B917EFHzREUrFb",
  "key10": "4naDxvoPJFsSM7cBST8gCWJdfVfFTjCbMymnTno3PtAC9aytoYxTaRUwjHYcRbxzcubQokXfoqkDoJZSCuN1xzNb",
  "key11": "4C1NnqgeWSyaxExjmw7ZMpNNwu8Eu7vmrm8gbLwDgeTJRv2DvczHGpCXJLwkv3SDge8xgH2226RbTrdh4YKdkD86",
  "key12": "5ehps6tB5K6dUMUeGbMcdJZbZynVaqaUcfaHGyK5RTiv1FnU9ECRNG4CTwsT9Ww4P1vvXn86GGvfy1C9Qx2Q992d",
  "key13": "3ykc91JNmQMBCfZVvrzuBbqcDC8kkREGyGjMzmP712ytTUNgCoRrKetgrMXgjp7oXf5A3jqHxQ8gutA1RQ1rbxCL",
  "key14": "547TpucfmDDMKPvZY7Afw7Mn4Z2s24dFXWauWi47Qo1PsG6v4G2MV7we2NkWY4HqXYsdDwjAvP6msQqqTscsGccM",
  "key15": "51uV51MRgcSh4ush6vxV8cZD64iVQLYp4xRLECUGM84Z1WsCU5N4rrYMT3xvtvKU5BTTtw5VRumEhpJT31FMb2Kx",
  "key16": "4dVjgskQWxUpwNY8mJWcqKHq2JxEymv1PvAFuEDMqXgnGDU8oEwLzE9TpvAGKKpdW3cF2RYd7LKd28SFVEdq8kN3",
  "key17": "4jFhBc397JabtpVzhGijqvM6HffLyYHPfWj1mejnMaiPQEBFR5F4QFKS5w1nSqGmKHEEM7TDpP7LQMyfPqmtju1j",
  "key18": "3HzJo9aAHCVTzcCXQfVPx3y1tdpW2WQYJ6m3DMXgYNzPNUC5W2dGk4PUtQvhhhyHBzsPCXxTS6HGKQr7coaNBYKF",
  "key19": "3ZCNKdjKiraMMQ34b3QuW7LPYVXuYXTnBTmKjJNiMK99uRRCU4zELX3F6hcRj7Vgys1m1gEeZ4yYDzDnpcU2AzyZ",
  "key20": "4QqiRTst3KXQ8pnaA1B22JJko19ooMsDD6tdra66gTZA1nZN2aLUe9oDnzB5kk7F7TT9oDEfxuX1gzmwoXMryDYe",
  "key21": "3csk6Q84EqRHYzQnVz2zPDsUJRSdeD6hpY65W3f175KpUYSNDpGzLSequ66czLYWwbzV8vF3MJ1XtNgRHcFarnhU",
  "key22": "2AmD7NTeXnBE6qyVZ1Hoer6xDt8minGkdS6kZo2ZMKQMQbG8cbQwu8a7pGq8cULgy6Z9vFmR2NWQTTh5FQ2wUrHL",
  "key23": "4moCgAvh34ohku5xCxLHf2LytF5hWNvmEMiWEn2MjPv4FpwqvC8XA8kF7GWpWGACynmKK1ve3XmyxY5SDt3qDV2y",
  "key24": "k9gacpeYzmu59KfZo4ZcQJ5gGL4xd7b96LAHCtLvhcnj64zskpVNxKxmCfG9Jtk8hZbBKWmS5NJgjsgtNSCFe9v",
  "key25": "3LsVmo1MpChgMh83T9tTgapZNVpQs8YJm5Wgn163KgN39wZhY4Wg6FheR3JpHWc5P9gJDvsbP5Sf8SUCaCeQatPR",
  "key26": "2vf33gVygdzAbaMgtwL2JTLtYb35eRYuRVZjsWfgtqfHo3EqueKJagaLwBKSWLtMJorDLZ6s29Q6VTEigjLMMuiN",
  "key27": "3rVWXPYFAdH4RwoWFxNp9h7c96jCQR92dxXidYLFYrR8Y3XYzB8NHAfaHvyJYdFmrruu8aU8dwyQxaojyz68FhKg",
  "key28": "568rRWiGVLaDQGegWWVgw5MzE5BooNBL111nRgXV3aVXA7AbReiWyXUEAxa4fDYpJQrHq2TDuuH89PwVrDdvJb7u",
  "key29": "2pY1wQuuNkh5ywGUJDeALp6Dnn2739E7xdDw8gi6zB3RcGCtADHQsdtyka3H1Eyc5ZnL1f6kW4DDEWam8Gsn8KGL",
  "key30": "4PZLaq9whREe29AbMVAdjALhE9BCAuB3XMngLvqwUacTCWczk3AJR34nE9b1YUxqBKibxtuW1TjWmQnvVraowFD1",
  "key31": "3eC3YMqtzFzccTafRM6iXCpPTDk9eFVSdoBuT1tNXRV7D7x7NJrzw5ZVhFo1x2arMewBHsUUgc51Cr4T4zqBGCxk",
  "key32": "4QdmPWmwe5e6SdBcs6jRUx6cpgVDZ4a7xLHjpVgPQ4cueBHf7QiWpt8wtr1uZUqQpuFMGNHE3nLG1fT5TTrYHNEN",
  "key33": "34v7TKcPXCJuoTG1RQPJaEhMrxzfWh8u5Cf9MHWfUDTB8VYwEmD1xqB3U6P6uEgy57mfzhxHbjjr4DGCr6GcRVSq",
  "key34": "4AubX3Lkr27dWFqVhMEbs9AZ2FvtV4dLZ7ZYfFL6GkYVk6CaPoNsydm5VdhNTKoJpbYFrsF4dWfp7pg8MeSBfknL",
  "key35": "2RemqvdhwmbmhMAYmJUeYSwZKnKdpVA6gEDwkuEV1BDsVMbeuVJZ9zNDHyCknNH7dpznjN7vGwC5mR46n5CaoB5G",
  "key36": "5GdcjbChpfUNRi84RbTu1AvHGc7hPV84EUvkf98KqKf5fNUTW26oqY2EYFEaumoxJrKtfYRzSiwYQUDT4929U5bn",
  "key37": "57WcBgh7tCRXjNCPKofzBfnDpj2Qhk2vt5f6456adgAvThGJ4JWmHQgirfg9jY9p4bK1fmCyGcXu1C4rUVKqF6fU",
  "key38": "3sYPQNaThfwJ8V1bnuB3ESYaLPBaikyn5ToimTTormdS5197ZMG4sAWxt8HumdGNcRhXZ8AzVete7PitoxMSE67P",
  "key39": "3Vd4ZLWXsGx3nkLRz61WfGicKrKtELCEGWmSGsPKTHJdF4tCaPFfRLzLET5qeBLimiHGPFJYr9vx9oe3J6B7NFMs",
  "key40": "HAn1xsrN1f3cx6GxyG9irHCzL4yNyAsXdiQLcAsqBtUbKtTd8waqqkuGCq9dFwN2Jv83s6p1NrXnCcgWxLqruvF",
  "key41": "sByG9ZfztG5Kt6127VNFc3QYd65cDqo8CZipQ7sqLb2w8mozQjK9utspeG76FopwYTsi1cywqywCQwqb2kyWzaU",
  "key42": "HyDNgieXLW6VEVKfSYKqQ1MvsJGHedjwkyFk5Tn83swvs6bLTxLQtMQ73PZ5qv34tnjt5kvvpX56BnYPsxT2e63",
  "key43": "3VJNPwhQCbBMS7ThpCPhaq7cxVbNFbNHyHTdiPdvEH4MV4Pmxnxh68e6qK1pVb6EJwy6dg4GnAPveqsmPU2bFctQ",
  "key44": "4ArKKDMDZsSx9ArhCC9PQbqroMzC8gHocYFJGd9qkYQDk2BStG2QSvTPQsN1Js4sULcpCDDiovKxpSZsuytchyy6",
  "key45": "3qjyNVWvfwTSabwWUujACPHAdSuZydwGknNdinPgsZ2WpbhimYK8xq97txArTauVKufh9Ls43jcUYTBq9meEfD11",
  "key46": "2HooeWaVMAkSWGUx8UAbUYKzCdHGi23NqwCjYMpFjctiCSPxr86wU7HXLHDPWmPpacHtZ9vy27rM4cXSUCTJKL2s",
  "key47": "2uKdP3eFB84iozHMGJNqJ6JXPiZxndqGdPQTiW89CshKDpk7Hirx9a3DVxtRQJFRf3qi54hYsEE5boA5c8mCc9EC",
  "key48": "3tYAqQGGhM8rQe7f4ydZg345SojXda2TPWuUrqaJxrXiF11SRzYjmLLJKe6bBJSUjAeHPduKaPtWNEKtiCs8XjNR",
  "key49": "4g7WhyoBPpAVZ6v5M2UTcdgSKh5Dgnb4dWZ755Z2Z5xfSBdSRDN1BmnvAgUuEVJ3j7ziXY4ULU5Y8Wo2Yan7jGJ1"
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

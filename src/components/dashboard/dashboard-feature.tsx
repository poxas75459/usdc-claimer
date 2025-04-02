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
    "2bn4UQZFQ5WbeBbkNxV4NLM93gNkteEFnZTTQKeRPN9wqjPuJZvFEioFrjtpZ58XmgYBbeBvY9NnWQGttAfN5mFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Hk3UanTJ8YchxDC4XRkYg7BeH58nwDTkGSZKw3yVYcxG4tFPwnJwNM5ubDLLxUMcCkG6H21znsPjKj8dhvpSVo",
  "key1": "28YfxbHGiGBw6oDZAmPVwAW1WM6te71g2iYV6kY1ny1ipo7LEJDNAot36VHQoJSCtYgRTEVixMYfHM4Z6oLwMyj1",
  "key2": "5wME5i3eFF1FLz9J43quPNCGCZ1hiJJ6L2PMiLp8yBADo6SrsoauLHssp9HudYU7eEjqR54omFeWMzsKgjXFWUou",
  "key3": "2xKnk5EqHsxTicBktsEoHHzDTuMUYYcHukw59dGcubE3YY63DSsHcVceb2C6ih27cnaFwrKGi4azzzu7FnEzJC2C",
  "key4": "4pGPjSpEujaTDiC4VWyeAsegQAGHXpBLXkgGoXJSuw1D1tPkikYHMNHFLPNWDJUQGebPwfTac9w8J8YfvhUhmEds",
  "key5": "4LyeSwG9eJ9Ma1PUpLRqMCmzF4FYBtn6HiShx725K2ZqgPp1PpRokDJPHr9JsF5eqnndb3KtYyJJyFH5bcG89wTo",
  "key6": "8GU33aZEFNGJomDQkdMYBMMyvxcUwbo4XEy4jfVd8RES2htdCxJrte1qg5irRkrxtVQKUdDusfR6sV3vpTWBag9",
  "key7": "DEwjhwym6Lx25sYzM5SHayyPrZwTuateqqXxG9v3mCMQrc1aC2WCwFGbhnSCk7hmCkA6aGiBtE34Rx31V5hYAUW",
  "key8": "4oxNFW3nWPyurYo61176vv8ujpMJ5hayxS5giG7prTwnyCkF4FWHWRJcQYT9QiYhe8yvk3y4DNZ3KLg1kDswhxza",
  "key9": "4ydiqfYUJ1do7GrW1qkT7JhBWMRE7xfWf9SVmn3NEd3Q6CGJznma4rSMKmnZYsDMUiodaAneCgBaTRwUb1PHGztm",
  "key10": "5ntAqMRUhrphTPqfcNYmk3512E6aCESpgoZNTv2xSJzeFqZJnE4n7ebVygmWA3VXyefN7rgd4TPnL5HTKbhaWf2i",
  "key11": "3on3P897Gq6NNEoNpD22QJjvhKcnWasPsDFnvSMTw322uPkbA9sVDiNgCAzqRYchbKTafLjByD4UKdJJUDfAQtoG",
  "key12": "4qWmEjag3ueqLwM52UCLT5vtuMRcQJG7aBPuBAGcwMzdNuU5KKKLbaQjYSfZfEF6yd5sMqG2j1EqfsztyjKDs9RW",
  "key13": "2VD8y3yhMUbYX7pULj5RFM3Et8HhHQ12Whj6Yh9N1Yqmm2dNzLSYeH9Nxgbb4THhpWAUudcZxUkshdTQfZkWB2zf",
  "key14": "2wK3UzCVyn9dbhfwh3MPftaXS8tQEj41XiofJBjufXvWhC4bdPvAMbwsb5SMPieSHPLT6EYEdqKGY3P8dnkf3VKD",
  "key15": "2zKVVsxdAA5e4yp3RifV57v1z9gvYbbDwofBdyH9nEjei6QBxr4vSQ9JhygHC9R8KJPRn42P46w571PwCw721QPe",
  "key16": "4fJocPQqVatPgNVjVsbn7a9P7wtd68fnbUPdBaANJxBkgU9SswNeZFjq9kHFiBBWkmY3z753FQtddwNsFvA47Wns",
  "key17": "3r68ojYvp7eKycnQ5o5L7ExZANVZxW3AhbVvPHtKG3yVeB3MXFTXfM71PZNE3aer2pWFMTHPf73CtHiSC72mYyqt",
  "key18": "4eEHaXuXF7maB7N3gJRepnPcKBjXw7C7RyDXtTgxdxZ49msyxguEKsyREobVfVgNFSVyNqB8AhgXKfPkjcg3h43D",
  "key19": "5bPmkNczySDawehDgAQz6pxEamYwMcsr2kgd8gvYLy5pjCUYo5pTGo6V78Zm1BgUcJsRG67PCoKHeHWR1QbFvESP",
  "key20": "3Q2k4xmtRKxcLiNb2E1TWDtHduKA6f3GUzhvFc4zmSJoXxcoRBZvqrenN87er4dWNs4gbbxTJaGx75P2hWzM9qBx",
  "key21": "7nSFVMqW452kqRjD3F8EjRsgHTL2oM9YFurhMaYPJKHb5UF1GVGRRPmcEgvyS6U8cgBaPcxpoCab7icS2fRsk3Q",
  "key22": "9bkyP35XwKYZ8hicsTCYYT8hhXAmz29iXg6bjdWTgAQVB4sfRoo8pMHr59s2iBcp3w3axZrVgiYFfYE9m6ay242",
  "key23": "k21mdzxK6KDn7Uf2vc7sB7HFGPLhRZDXeRJ6EnMhEU55ycPA4UagPyQycrmGwE6zztvvkc9tnbj5DTe1vzLZihg",
  "key24": "2ri7QtFgdk6c6ACzYganLLP2LapaZbZvgRKjyf6z1kA9BWHzMRMCT5V3aUnkraCTFXSrvT636Gr7Z12nqANWvm14",
  "key25": "5TCdVaw96cT6VNdohaLLLgVXZ9mBn611AN1UXhbEzscSAu5BR1aH1NgWzATQK6RtbUf8VQsZJsqAsJzY9xUrpac7",
  "key26": "QHGSfygaH6ZeqDn1Sg6sL6FDuBZ2y5uv1YEYLwavubhoihf1uELzrBcJP4vYXTNt3mKB8R6VDsn3CJJR169g4a3",
  "key27": "5SXZSrR4eiN6DRwTbbRgD2eGHTm2uFVgWwt691JGLEAYnSqSuzdvR8QGKVifXgYwAvNfB1x2zYS8Fsv95cxiq5wk",
  "key28": "4sBCvXhGpfxKd2DytY3RdF6adzQfWz5EMwQ5fw1B6z4yQZhuP4Wib2ZYDG3LzA3FvnSvc5bdb6PjsoFqpY26ssq",
  "key29": "4yVSVaPWKXv5LpUEirQCzxddFmYMNrbTzqrjZzYAnSXMf1MZALNMVNm85oHvCK9AXq8C3pz5TGyoHABXWpP6QTTD",
  "key30": "4aSKdkgTYuUDKns4pXUesuX1gQSUhdMANDiY6U5Tt6LB2V5f6QY5mRDQeqywh8QEGaehubeHHiAu5uUSchS8JQ5Z",
  "key31": "B1VTDeY6w8g6BY5WyaWDgksGWoJsg17gzfJeDu7abq2aQqRFmCMPbpwZpZtuVjMrk8HB8CLoBh2g8qBJedvMP6G",
  "key32": "2kzDbvFyGsbHPvHCyPZcLicFecPAmVsfZCZHjRPE5XnmQKmdrh1YGJqSxtPAwf3GiaTXnsdWMePHbLZngN1PmsVH",
  "key33": "4octwm6gSNZse4aSfrLBcPzUVWFx4GEMwLmhTTpBiB5x2sQE7dyARiJRdN1vvA56z7oYubeR5sbhHJCpJqVGNKvm",
  "key34": "49DZ2tnC17tbKJXhZ5smKn8ncbRQ4rRTCbwHVV3SEuCWwTpn3HzH753u3xdzUsPzVjwzYYiTiaEb37TT3RivEBME",
  "key35": "3ogRfBYCCmMv35aUUVmxMyAh62djuYcABTxu3nWb4mQRLycBYfoiYZ9km5oD9JTPhbiztjcXb6bNx7t6FxZui8g9",
  "key36": "5zwFmCrG7X1xprNwMEYRT6dgmJe8pSWV4og68iLtpUGhZZw4pbmVtpbre8uaPmPNvjM2TmZtPvJpYD9zrDm7nZei",
  "key37": "qVgUp5GpM39ARxvpLzbzxpjw1u9h65D5hSym2SEwKQCPLVDdfQVpUT1Fj4TjC11mFnA2wHmogz39W25yKEhqQ1P",
  "key38": "4yT3WMzkn3yzr6o3N4pEmUbwRe3r6RuVC4FLM4YRvXGXhKiaZDDGyo6WbSYQ1vTRmDGs2ygSvrvEbhj6U5KgVjYZ",
  "key39": "5Qc4Neqw5zVqpMYgauSqeDUsFQLJUobLdH8gVYXPkVbrkrjFjYtkD941CXWbFDDvXNeyufkEACqQChJVPYGyZXYc",
  "key40": "5y4e3ZYDEEtfJ2rs3HG2PXxmbUXrwtwcsj9jBWeNt7Xcu5sxik2iBWTJTaZXNoKBcxGRSH7o6NtuAPHnqBDWEtcE",
  "key41": "4Q98sWDj3GMhgGPnsnfCW1o3zdQyCgNkyT7kUmF5Axkh5qisJRyLsiwL4Fn1sh7QGAKfEneXe1mxknmyz3Z1TW5F",
  "key42": "3H9e4918GGFs6UQEXYyvRTd9V11UJ2b4wnNDBP2SxDthrcR26Snno5ccwYwNU9aakVpZ91QVBg6jRgxuURMgpi4i",
  "key43": "5cqhEx18hzQaBHrZnNpFHvqK4pU5RDxxn3Ti4mhSg4WqpA9Mcxz3wdP7Tbyjeh6CnM7jgXbvcjUFswL81Ybhr2qs",
  "key44": "45w9LMphMzGcLovvMPHv11gwQy6Kmqw5hgaB5cAmMiJyqKWAeCPLuQwUYE52ZGZERnm8MNck2qFDa2qYDdgdADGZ",
  "key45": "3HJAvcRNZCJwMhrV9ndYsZDevE2jaJyyKJJ2uZniJELQYzEAQtRLDCm4bquVHnhD6zJAb6AGXQDy2YfVC1SjDvzu",
  "key46": "5qHWgK7F1SBcpzhq61s2e2egLhwzQoyS9LKABuUbumbePVXAWrh5RiGAdL8PvwV7GD5Xr77zhReYHnp5kCgFaSW",
  "key47": "2LdpAK3MceWiRybAkKAE4jNgxMcqMKh5RRuM2D1wi18XiAW1UgYCFRC9sRVxtsT4zkuug3ZKjSnME86ueyNA85JL"
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

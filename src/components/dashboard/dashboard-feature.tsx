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
    "4K7sbM57XPdSt8Gg4WhCdyjJrUjfNToCaUeSFdz2QWb8pzNPCpQNBy8XpxtnREWkGGtX3Y4LWXqYCC5rkpLy1VZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whjLKHgV5HWo9n9f2BpzhADHbB5bFxZSBmcNGEavZuAaESiW2NE9nbUNPz66Ac18d2YGBAHGSqBXQVwXPXrzCnB",
  "key1": "4jpMyZKxqLctKGA6Mf4rEQDxg9sZto6pY53A29nKyPisunVUPCunddf2eNCE2Y154b3EXk5dHFUA9CCk2LgZsJyu",
  "key2": "7Xd3ZaJ6eWy3vjX5uUTCfZGiJUwNCf23uFmMDzSrhPsy6fH33CsNrnQz24QtHfUyQL9SfQKvzJPH7uGaYzKaZaV",
  "key3": "jG4JaPepQY7zVc6JxHr1Uyvt1gRLJdkpHzwVMbAjDPDVxSyvVMtYVNQuA92bSdHUcrKWiBh1D8gEBbtMAReqfbs",
  "key4": "FGr97tNt22UStc88Ttg27NyB6GNr9QJ47ETgFf5SYQoqXGfqBCW8uYNzRjM1QFNM1SRUVpKsLod6ZUm8jeY5EPv",
  "key5": "2wSYV4rL1j3Fx7vQK3165kJdU5YM6hLZkgmUmSQSiJRQLHcGjtCuV1SsGcFHBambCxG9JoriQ9wC6tQY5h4i2nfH",
  "key6": "4RA7SJnxjmSKCwqjTrUq5AmMoLicWoZ9dvY2sypRc4nUanTj52AsGoZvV1ibGRRbBqT51G3YV5WPCUBpo5QXTEhS",
  "key7": "4XHpyN5GHZWfNWz381kjHohiXE2cVexi76igUs6wbsz6Lk1kCcxYw9vsr1KBzt6fRpct5cPaH9SsSBjqZ8yroar2",
  "key8": "5LwkGKcJtRteDEr5G23ujiNMqkm8zshZAwuLTBbsZ53fiiGrPs19Vx8SvFrzHuudBD4eptfY1pimX1hToS1id4m7",
  "key9": "5wGt5ufpo6RUwtyLiiftxDv62WBJQRPPgVgL1m1DvbJ6i7L2ThGzbNL4q75bFxYjqAgEVSxaqyM8u7AvZ47aAhn9",
  "key10": "oqHBGhopnFfqKwTDX74LEPJvvE3kwsiggACR1xQ8yEn2tMxoQT587KwqsQrKTEEVbeFohFZhB19N7XkCLD9F2kg",
  "key11": "3UYiQExaVeYjEpQPb428ueod2hM59taL4KM78KYKVPjzYHRXEHpkZ8AdhjKzKnrUm2AQiE9EJMa2MzxZ56LqQ1S8",
  "key12": "2LzCgpngka5XZW68hJaem1TF5Jffbit5F5buHsM1tXG4pFQEM8qmMZnK4Ax9LqwV23ZVJcdgFGGYFavfZZXq7pXy",
  "key13": "4sazu4JUdxxndpitmMGbK9uM1FeBqR762xMCRW6RKPVJ3mYjwKeD9yVNt8oXWVUg6Vw4SQ2VYYC5awZjRoRbxESz",
  "key14": "5wnM8QE2c2ZjPfn1WrtUyJPZfTfPe2ZJ7fnULwCp9X4NnaSh3tVnW93vMr3xi3rmgdWpqjsANcToDtV91NQ1GmfA",
  "key15": "qrk1rCtfAdgbLwor24V47sZBB7GUyVD1VPEdSbH2vsKyDAxDoxnyCu82QC6YzrqyyD6JPcMLxx5WTZS8VgxmYnz",
  "key16": "3Guqj4jV4DqNeyTLLXCm6gB3AnXgfhWThLGL6znvciuXtwyryF8M3aeibrrE2aeanUA7DFFts4Fb2ybsCfZHJ7yX",
  "key17": "3uRHAxBwrnFMrmjc1GEH9wLCx89mQx3LSqVaGkMA41eS5BmGiQGeD7VJEebfWsni28jQLC43A8tMrtF2aRAgdirX",
  "key18": "2Wq6rJSvnTGgYWgnFSjPfBS9GrnTsovtxUrkNh7Xqbzc8hFZPkzPgNYtv3dmgCNuJhiohdUCNcbQiYsVGecXrCuW",
  "key19": "5HVKz7yA5zQA2eRosvmQu5C2Tk7XMMhU1WPWk64GxuYvQYgrsV6iQGmKLJPviHWQcVfHGdFm39nh2mjQJ8SCytgW",
  "key20": "2H54p3LS4BhLJegPMuLTpFTZA7UFUNFGjgEX4CZpjhbPeHyFUB2ru78CuHKrgV8ZE2RKAzMpJkDrecqAVSz1o9w",
  "key21": "5g7nosZZHnV3nZVuFuMw9Gd9onmCLrifpxYDBYaxzz7CdNzuHEefD1rDGRkDHWeDymacuB7WdEQz51hZAqvrDhGm",
  "key22": "2LjchnHsEP2NVeQUzpBgkouMUTiC8baAJgCCYgB5D7y7Yic6DrQ7ffvN53ibCAodxoGewomfTXjrk2Sxzhya2xho",
  "key23": "3X6wE3NZkBYUNtexoZx6nYLyL64k3mSTN38vSE1mzU34freRMSnMo58fdK36pY49X13XrAzskHnLGxVSaDk4kwXy",
  "key24": "3FVr6EUEpVE5pcLMNRBqs4uQC2x74rMXFjszA6mcbmxYsnZ4mP5Py3gkGo6qNfpFbiqsbFFrRnQkQ4v1EcRDEfo9",
  "key25": "4U7pcYafUYG8ZMVSiSSEBnAo85Et79aBFioYzPi5qk8Qg8z4WUzuxFs5EuvuXRLVFcMffK7ToktWSFBoDUUCTQoB",
  "key26": "BsdkqDQjhMo3uyr1cXdvjn2hsKRz9NavyV2gMLDQfphYcdQ29zUTPdsUMAqjYNPqQGuWfwdavPhRzRYzAuPGK6C",
  "key27": "56SaBjQRyNa7t5rihpzin7wyHRzi5ZJJKiQTPf3GiiJW81V3VzNhN7LyWbC2EmMerhJ3QpnT7GfGUNPKXszAE6V5",
  "key28": "8zFLEePt26DpMRGwKVeogDJJrdskQ6RzMKwGXNMvKdnA2nrbBEcgUjNABx46CJix2tYiU6pwdXvWckExx56nhpw",
  "key29": "48LjzKtRAJkrutw5UwK6VPZiai7RBdqd5grbGZDrJHMtTQmn3vB4az3VhCE59UZy9mbrgnrqeX7r1eDdkYm4mzT5",
  "key30": "3rWRscGPDeES1coKDZySua5NkvWHxtwMBcBWdQSGTyf6E3mZyvdxXeuRtNYLJLuYbjDSZ8hGo1Gm7aYPwEThuniQ",
  "key31": "3C8sgL6CYffkrapcPMrximUztTSyHBZsCR7uUGeLPym8SaPBRpZVfgCpEeFf48FQv82MxNZCxV14JmEaEijPAEXP",
  "key32": "W51KAVHWG4QYHk5gY6u6R4LUdYTQkid7hFs9QuPSZqhyBnmGcoMmHthK3gLrkr78b5G14b5TQJya4HjGC3oNgYz",
  "key33": "4AqQ9CCheJFAYoTaGJs1yREaCrZy2eQ3qVNkYN2GoYhCuiyASF9vFBzqqenGCLKLn7ehJEYpP3HHaxdCyWBejDdQ",
  "key34": "54hMjkuyieYEiQDMFaTeHVo5nuGiD18aQUJwh6PRt9g9eot2orwbt8owxwb7hPrXLn9CMeQw5A7baRLGakuTLJSA",
  "key35": "4P8hQzStDEePzzqm9bJpJSauHiVszwC7Hs2efoctuBbB1KH4jXbLsa5GWemHcCQbMmquRTpQmYW66ffcyojSN28H",
  "key36": "cBTyv95GWjLaR3wZxhCLf71qpBJXCQSjfuNoxDEDXCjGXTVmksPp6pgSAY9z9M5gqJtteJLJWGFV3NtvRtAbBWh",
  "key37": "3qbH4XEfvGLQdFJEmGHRKf8tjazxmiFTBE6sTsmHJUMvYNni8Cn3zFoLZwipiHabYtyRpNC5ZDXFz3MGMsU49xLb",
  "key38": "2pCkVMFe2ncsTs3VJWoZYtoo6BgKovYVSgwnWdoFsMzQawstYdMYTS3m8r9JzFPorXBZwiihhMkd5XNgqhgeVPxx",
  "key39": "2FXp5qNPTtepHs7dqmMGecpgqh9GSt7GXX3FRkN91mV8wXgT4gm9fN8gVyBk1kmBWoZwrB5j13wdgQcdVZJQpBtz",
  "key40": "4PRJvfxHRvMift3BhxpCdL4bPNQ12woZi7DraWanrDd543SPhqNszSCJBQqUafaj1cfbu7SQnwqe8RgdJTi4YTGb",
  "key41": "5fRAVuqqazRj66P9MzYovidZCKEs6RKphrg3CXc68VfEMP721a1aRdhv6Lm14yuEZsUHTz6oX3HZoywLnBnAkdoz",
  "key42": "4XGMHYrNe8WhdkQSQ67edumuD6tSsKENzaoPq9siwvtEUXJVd6U7EBGF81u4FTWZtTfNEopH6qbmJBaqLrxLmTuX",
  "key43": "2oFD2MU7Y7AGuRC3nVHjxataci2xtuhAUkufEMsPfeyMyVQoyZuWaePrCG73twxrrZWmB7ucnKBVxWMa75e8Hx96",
  "key44": "3GCRxHnp85ecXV8TMFqbS2RGBqfre6nApN8oFVw3siBAWtSG4mMjNNSwbe2hM86qDK1LbF1ibQuZ5RNmJZ5v5fAZ",
  "key45": "k26hwftREdufMu2JpiKkHPadr1y34BpDDHs2yqYdvabyzRfMWmwpLHj8Cf6ijGqsC3GDbFrwVJgduxcmEJh9mJP",
  "key46": "65h5UUxVE4qwrowouBH15tV7GEwzU9SPL6r3y5xNyKuCpShyP8NNKQeMr3K2VpzKqz3kc1mTqHmfK3kMW61sJ98u",
  "key47": "5cMmVMhdnPkVd9gEsCDyKXDSCWPEQZt6FD7JSqknEvzvQ58NPGSu5hksMFpbkLfMAz4LsHyzQk6dZfgBsqNnTURg"
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

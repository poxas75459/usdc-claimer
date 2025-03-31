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
    "2LYnNwAFigHxwPcBLZo7d539b5ASZioYphrS2jS7URtE8AhuC3HNWMiALRmQhJLvcVEnZ6SVNU44AFixms9Xrx4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJrVixLr2n73focTtn8m6QRnVToe3e9uVxpDVfhuaBSaE5wRKFo9ov8ktDRbhmUWTWGb2fKBPpzwK7jfD7M1Urw",
  "key1": "2fxSjerxA6t9w46xcjiJCMjaxn8ZcmbdGgzmJaYhyFV45pqr5LaxBsbX4k4QpnaGGfJ37rEnfr8JHNwapn7D6L7u",
  "key2": "214NGEqNspeKiaWtVSHhqnDFcGzfHBimpmo21pgjRHJaAZHDrA3Eum8i7qELNXmNf1Svg9aZG3rV4667HJxAXGbo",
  "key3": "2LNbCzjNtA3gkL9mHkwYiHUWNbzQdPprCC5SuSVw9X1TUQZRQmKrdQJjLTec3e9VJaqBqfmwtCjDzQR3P3ZeowaN",
  "key4": "49TBxaCVST7cU7C3QZV7A8MB4hNVHt57R9n8sRtGF1xV8A4dN28DGcwBELwru1EyGZgMcEBiKXQR4vP6Esvk83Y",
  "key5": "51UZPC5o5Zv8TifrTNjsRFr5z8B2V5r8o8cPmk1A6iP8j1qoic5w98qmfUYiSKyBxVYkYayRMAoNNTkfees47Kvp",
  "key6": "2b8ycvp92Z7YU2bjjbTCkiVefNeeHbRnDGvvXx9SkpJEx7HJfu6Bd2D9Ntb3WUQ38i6Y2SBTcJwuzHKv8ejYuVRy",
  "key7": "4guMUk2ZfxZ3WxeaUVGaWKn6zP9h7j285nuxZ66wpheSCDvdfFYNrV7b9YtJeka3Nwcg8b9KGX3R5rit5oc39y1r",
  "key8": "4RAzG6Gmv4Wde9h1NPACjt9dA6fMh6sk2w8hGxuenJsf9f1ZtYCproGyXkmQxEWkPJTiKntEigNR1qcWavLRjbi4",
  "key9": "2MxgauvC9CuBZnLPybHCemzXpWpxM7QBBEkAcY5CneULpS2Eycq5E2ziffQrwaFvZFrhctffkWDMTDr6B1z1aE7e",
  "key10": "4sqyaksfSczASWxf2TMzmtnB1bxYH2mFi1fqFrBzNrsMnVbTwfvGPWnqhhM43C5zRSUdjkTpPKegWfQgdC9qs7jD",
  "key11": "NPXxmsP2PRiYmijqLT1a7p6Jw23tTFMLiU6L3pvHgwRs3BgBXoEtxKkr144H3ReHuSRPTZRiqXSFrFW19Fnj7iC",
  "key12": "3GdQGJUXSReXEVfunFrc1cN31uz5c1N2oLVPUT5LUKqBuPBNXaPBxhiQ88eK8jhaurg44d6hGEqECTbcaZVcrJQ2",
  "key13": "5EEnnADSYuBa7Tfzq2iu7ycex9JTX6eJRcmRc8uTTWBkpzKQXWoXczjLFCybmsNPFccan6RNNJANN6wBtqoJcbUC",
  "key14": "3KoyvkgrvLVVSAYw8vLyQFAc7YZQ1hrqV95FB6nPEHtFR5ncMVrVAGjkt6BMMYKaCJQfKvUqeai2tB89mvwupH3D",
  "key15": "4dBVnC47jRGjhajd3sUGjxCtdQX2tXwZPNdVzAW1wmX9Hdn5oNYGMrsfbf6dcwcwaH9nwviMarkF6aaGHAtNmZAk",
  "key16": "4WvFa86TakddAMzas93vtRKmTJQe2oWXuWppfoM5TNr4HsrQzcTRgrhJpKe7Q5ikymewtZFUzqhVcETnKGE3z7ys",
  "key17": "2oyHpkftNkTyk8Rrdgt6uhkWedfNgPZZ7eyTf2nAeQDJhmFeufztDcpdpBaScq2j5HXBi1NCcBYgQkctXna6q6wJ",
  "key18": "2TS929dLs7Bkventyav4eGHHhj5AXmB1dmhBSwa1LTdi8ErgYShnkRxySMZgfiUEMRkbwBToWT9q3us3xBQ9tuiM",
  "key19": "2FjDCu9Fn3sM6h1s2UpteJ4Pw8SaAvCWwqAPYfRd2ds2UAQxjrhFCZV8Bzn7mWNyvdZ92ej5acAEJehXtJ963yTz",
  "key20": "5zN3AfPeX6dfo4E3VTLNMGKVevs3EzNV2vuf5mPhvU8bsH9g4LWFbPCojrsHX7odKxSPV8EyctAQbeoM3qxXqq3F",
  "key21": "4GQKvEwVnQwwLXiPjUMxHeWYCv2jfcJ1JEeqgARmX11AVE3u41YgSDwrf5tBw5ptCtC6f4nagTnsk6urUAUzFEAX",
  "key22": "K5AVDaVKEj7ngMCg71yTQUv2NMkC3bwGWgG4NkDfafdq2AJE4GSJhcxTTw2hwYJHTKiEcZGMVcpyNbHsRz4nBo5",
  "key23": "5MJqxJtXoQNEjS8ZyjpGaeVV7AsWiyjwfWpBVJM5jZyEriEKtruvo9xrkisnh8TeEP8DyWMZuy8VSZaCUx7Xhx8N",
  "key24": "2BGWLPzu6maTw7Yu12aQzJV9XfM6PoU26KHDTpcPHAqYKHkLsDxgVYtfMDhnAksnUZaNVu47SXNWJXL2Wy5fzY7D",
  "key25": "3yH7LeBTEQh2Nx8uGAa9frZVbhEBXN9vLMhEzx2awGdKK9mrpsbma2bYGPQbbagNon3JcEN3MFtrmP34rngz4c3Y",
  "key26": "arspfrvkh1zziUbnA31s6gDvi1kZPh46H9Um4CWU7Wy6zj8bDy8xJ5KEoBKsqJcZCETxMwkq17hUa1UWFDMEbpp",
  "key27": "5Wp7ZbU83w8oQioqAaAKgyEEgYKLpzGQspi7rjFrtyJomHkao1LhPN9k94iQ37ystb8LDKPxFJnP9FCZzWem4hC4",
  "key28": "4tya8G4tK2aZSkz9vVHPvxjyEPeydvUuu3omgAqLK9rKo8KCvDTgLN6Szcdv6aF2ZdibfKR4oTJMAuMDDdRAE5W3",
  "key29": "4cpKcuoW1Cd8QJ91XTbVeH1qvSuCxeopghNQnn4ynbJygi7UTHMmhi72nhEzqVDVHXaWrKGea4dTiYpT9Uu214Qy",
  "key30": "3YowmHLYPPLvCU8NawbF5JJAQXJAABE2ceqXHsLtGqdmaDxVBRfsFHxFjACJXCzfXJ624TnFHaxAN3x5emupGgRD",
  "key31": "2j6nEpYMMWMbtwv7sWX1GXwcdcDC7qnWzGgSTLMxBxjzi5oBGDJfyNWQCLNJBYU8NzTzBoACLJndoas1jSBtW3Ap",
  "key32": "4re5KPkw9xDGLaakEfaFgkDcfn5FxWgUtj7LtBZ7yxThvKQ8Z7dya9cVbEFuQbSFyLN4cQyWMdAe3yFB4yz1LZrw",
  "key33": "36FUqa3oNi8kbYz5k6fA9ZWnDwM1b5tkVrSvDWfhDTXjcCfTAW57wWj2d55LQjjD4fnVXPU4nriAR1g24MP4rkSv",
  "key34": "5VqS82hDaySuyChx8RtNiiyhJDpFBGqjz6sPRjT8wZwH1bXNJrKB97wB2dCrM391s4wGhUrp1APNY9KkwiUVff9H",
  "key35": "5THDAMamb9pKxR7YvmpTvvCoz7WRzc9jMUhJic4X7t7SYrYtgCbEgCgpVen3KzbQ57p934152mszfLR2NHXKF7AJ",
  "key36": "auGeyXME6TSaqHA38uPAM1JceMcah5a6SdmsaiW3xKJr14NvTrWv7zYfvD6SyaQqCMidm8x3zNZHt7UnCcb6T65",
  "key37": "4youpu5pCWynmYdJiLU9mi9ZgtMnB8yZUorMgKUWWCTdDdyyyU7mCiRg8DxEqDzqxnw7FM9TR222qbP2mPjNZCPM",
  "key38": "3DgNVpXhuMx7DX6tstuM6FCgdxiWzHRRqmXubAxbj7fdDKAZkTxpETWXkU3AfKxBFngRV3wCLgF2LFHCX1eJ19ub"
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

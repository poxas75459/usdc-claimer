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
    "5U7xTTMdVAs74FDJc6qZv3sZVAv9U2DsVe9uu7zLrjTp3QUFrW72yVYbx7faAuSyG6PUUwmXEaUe8TV5E3MQfcN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACss2vJ4uQXGWupP78Dz5V3dv62xKWkEXNW5yhKyr7uUssjZ5Tg6yg4PopdaWwxVYZNT5wQwXkXwE9vNn7QMiLL",
  "key1": "kKkBKkRJ2xghQKv5FgoBG9KzApF614rGW1FDrstFffjo7eKQoyw9CSXjfp89ik35WhRy8SzZU7x5c57AbSJXJ7L",
  "key2": "252hr8GT5Ca6atRugzPBidJsYyLwj2vS7PE3KhqF8eZsg9djGVYDYxNRXyutez6GFGv2r62xvacNgNf4pRUE77mP",
  "key3": "4epayv1DGnaHb49Zk1ifD9Hom2LL2pJHdPPmWMDPUrMsGEocUVcXnJMYiTNUoSdNVnpfJvYLpqEdZ27wYdTUBrx2",
  "key4": "3sRrbcEeZY31GbjYc6AdAyinwo2dsZzDP3gQ6DzXQZE1XiTLfZ34L1hYwYnWnALHsU542niJ2auK3hM97QUMWw6J",
  "key5": "5vre2gCBTCm2yhvsRwaKBUiDhqx1i2hUvzFCUh99wfSTDFzQTpCSwXxLzzipZ5qVAPF7Buhrkcvv9cLK1hSTvLaW",
  "key6": "5k3JokzSQgvvRpGaSy1fva2NNG4eKstE726FZqBEYuE59zn9Ya49id42dcBYFppGN7bPD2VowNWFJ7bi7F4CvxY6",
  "key7": "ZdtHndeGnkVYTuFyw9qsfnDdHrBB4HNi7sCALh6ekUov9Hr8nXDDCF7xg2h3DMjF4q2W3Dgi7RXAbdgJwKU1rUb",
  "key8": "2jKkNH8JTPyvDhzBkdXRtADmo2td3M8Xg4FHj1h3sxsNrW9gFCRMy6MX3FM8QwWhCZVV3Y236381xUnJGr4fvD5N",
  "key9": "2kbv2raCj1n1JkdTsnXNxwsjtEGhRztFTgE4gyM9nJoGLSRamBtt4XXS4JDZZbVpvMQ5eLXnDHD4Pux4yazGZpjH",
  "key10": "bvjhBk5fU5xgTWrcAdRZv67XmaMfFWFEamSHEL4HJtgsguPc6bwT2MHXr4JAaPobjjHiHdLegvfQBmTSRxu3Vy8",
  "key11": "55eZaYGCtMh9HRi6zzT8mmjpb6rrTNQTtiVQop6sBZSZRsZpgnUYeyF1LiDhMc1PNywqz42Dm4RSCePVXHiAGwnr",
  "key12": "43GaWPWGD863dZMgwe2mZ5Pe8WtiNnQn91iFrp8fPpjn1aiMsZDKtK6wEAKS35wiRBaRZCyeWpeitFyFg3N4EvLj",
  "key13": "2ATL5QWFjDACSmXnkQ2SXtj7hQWGGXjUHtESwTBxT1YwNUuDY5oEhBQo9Y6xNrqt2Dn1qb1cafiYhr52sTTcJQzn",
  "key14": "5LEwbbeqNiwGTBAtCfyXJMEqazTxkpzbMbLmeSbVzaS9vUda9o5Tqbi1ty7ZVRyzvPDZByBXVp51FtoXJN2UvkLb",
  "key15": "4hrrXYXkB6TXt2F49NfMx9S677nMBxyzqHne95r5LLWmyf5xrHcqdE9A6ogY7A9ojpW1smDdr87D7hk7UTYzXCDF",
  "key16": "2zktCyE2npsJj25PHLtP9RerHWTUdH2B1RXSBa97jnkTUk3FMjcQoqYZ84Nv7VgJ5TWnmTBxPW2EWq87gm3tJNVQ",
  "key17": "8HBWgLBoQJARKEpxvrqWA2fgCcvYSfTkvX1j5i7pUoUTAgcEB2Gc6DFXQr51Nx21faTUfBArwkgwdJsJFjDPJ3U",
  "key18": "5LY8xKoNgNp2mhumH4gmNWpLPTEFcGtDAqZtQykdy77ndxS9N6yXt8MEa74nnbS2BGAWhQTLQsTS2bB6VLH8peqA",
  "key19": "5xX49nHiaVrrZeKDXVNpwSU4eihWVXdQ4if9jQkgG9VTSCNDSB6MydvrUz5m2VboyFAqwt9iV9ZLtUJjDy3Wj13r",
  "key20": "5RB9WCsPrExCRRZfKeSy3ppo8NSTg5mxdWMYXNmfzqwEie6BQZGbYisVziVDWeSKwjyFykRDTzp9R96LM14ZuEi2",
  "key21": "4jsQTjJ7rSJp8PUGgmY9CBFYWtydeuvvB5PdQJ3QkroZhkuAoTA6e6oyfYCxeQTX7uoo1TVkUzWeiPcG2kiweN19",
  "key22": "2ZCURLheUo7mYujsPjcC2ac7ohejmQGdohoXMpxZRmf14ZPSYgv72vkvMeC4eMhmeVbbBdutwE7jy4kHZ3ueRWw1",
  "key23": "5BfpUGRF3zQpG82eATXqBZb2f5aHGrujZne4NE3tQQXZDTeoqjXGf1i37ut5u4FP7ge3LQFsTp2LtEXz8vw6DUhc",
  "key24": "uKpqiQ8s3bgSnTBp11YHdj6dRiSqZs3Rcg2J894mywW4xbSKGwxfpCX6BzuXfVapg4hZqxa8r7rjqc8h4bGwnaP",
  "key25": "37UNhhjPfRut7kZAqoDFuprSRx3TDDjjyzX4mC4Y85QNSG8rft62tbSrRp4m9VfE9GYKiE5iSrZviitdSzua8bsp",
  "key26": "2MCRRVPeriYppjGySkdXeDrUeeXdiU2mY72Frch59sp8jHkPp8icM3aJW78K379kkXqhorQ4FRDCVc6Ghf2i24hF",
  "key27": "453tS8f4yCNAKtyo1iPkWpNEMHGiVmmsQwHuUCEGi6g59mENdxJX1sDk9pcvhrxXAdoUcSpmQiSYJLooyMsfWVaK",
  "key28": "29dgwKuMYWcYwZwtrmFzwUDV6ctqWM5Jg2d1RcQTnZn73wzVJe53A77FdVsh1y7dg3jiAHY4yLurhSiWf5JndkBB",
  "key29": "3DG44jrsmafLUFR57VimUAadxHWC3GSjgpPQ5XXMkNQVhSCuXkMsfKyX7V2jnoafPc2PN8aB8uhpePjhJVejomkL",
  "key30": "ywPXsckdDx9SvT8ubK6wz1wYAjReFdSd7ys4oX2STaRpxSUDog2uKXjukevKQzLJ4f49CJqxbrQzyCnvbfZSs2W",
  "key31": "29Ztu2kqNErqFquyRqkoddUP4J4qNsiL2j9zmLyj1uGCHiCXpK9RHv9FVQpxt2K1n4bf6QRzPyZ9QbibiBTEvJfU",
  "key32": "27yN1TUajrJgGKoUMzcRgaRCfnLTkzfuga3nPLDhvPQwF4vNXYtRW6z6djQsevjStVKMRbTSFMMedzX6yeHbkXmg",
  "key33": "SMX5i6C5qFP2w6o6ujLw9VBRruWBQxQvMk8xBtD1f9kVDthuhtTgYjHrsukMETYdjZ8gKoi6baWcM4BnHUT6Bt4"
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

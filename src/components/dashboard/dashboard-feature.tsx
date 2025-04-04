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
    "4jTvAhu2VH6b2xdhH4xQURNFmcyGkN6UzT5kz8XKeozpeCg9Ey8Ymzj966xZAsNwGBrwiJ7GcD7yJherPn2pK1YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaAP7J8PmM3AWfjCbVzUiEN9fx3Q8EhFW66V5PWGxRApNHo1ogFRAMAzoPFWcJ6dkKiyMLQxHy1YNeAngxid5g9",
  "key1": "3r4EHQdJDt1ptZpcsYYoSbkRuwtFc21i85Ch6gLA2u7NcPrboiRJC5WGNhgEvWPLVW4u4H5EtiVUi3gSp6kuj3tf",
  "key2": "674uiq8sqZN91JPfsX3TSvGVuE3LbzC2D3nHNBdtkEfUvD9noQWuEUyXfz4fG29Fqes2Apk4aZ2CunXK9yHjSA25",
  "key3": "3hrtvpJNfmbYemFS7v82Bk4PSch3RAs3vXKVjfG2wsCc6Qygn7hYYgT6DYhvETgw1V5RmrnuWji2jBukazBjNKar",
  "key4": "w4bRj4u3vBYWqFcQydMUXs8Z6HXRE3MxxKas9HiuPQCNcE6qt59ZsXGTMDHseHkqrVByCpFgGCQmzwH35zJvLJa",
  "key5": "5FPmLLcmHsjjG8bcJhnUM9GsT1Q8yxLQCnLqvW1wDKp4WoTYy4n8dHhAEVRqUXyhyT84MH4FV6kGgcarLeAz7Z8e",
  "key6": "BYU9qgWvpxFKi6jNJa6N7qfdofm2PhSg7m1ff4hQ1ngcXYSn1GHL8ascd1g9iX78Tg96rXc5iUHRMSWnF5budLX",
  "key7": "2jgfECoiPgGudbjpu84CHpz9j68C4Jm6e7qceJghRUYSbFWauUhKmodRikbGnBxnjFBAaErEjhKuvEQqpQ85outF",
  "key8": "2DMmMEm7Mh4z1o82d48AZSsapZoXzZD8DTG6WqqcpFivpFXcgsSPFyDKGmgqmrfYkM8AwTfBbkJE6GHSvDWDkEC3",
  "key9": "63jpZmwsHyMAWkSrx2QxqeUuLkGvectYwhmAd7qWjBBBvyArqukZjPT8nJSTEXRWEYSamV6dBb9UokxWNi65WNkP",
  "key10": "2W5mkmc3pwJBhumFnqNFFmNcju6d5jRXVYsE3jiJFmZDa226HGmUtmmJ64HmqfaWjPk31oa3s7LhvHzTnSbbSSoC",
  "key11": "4fXtBo29hKVzua2CrdpGCbxoaLsj6jzE4V5Sgfp2MMjnDSeqsjQzxazJTiTDiJAJ2C2nVKNwgu1TWJbgFaCEgoCi",
  "key12": "2MtttUqHkeGWcVQEe5ktWocY5LZ7RL5gtZLEDvXpJTY2oqqpASW3iWNCFSUt6cfmBSnNoMKqnKVM8p84fGLdaEMT",
  "key13": "4UGVMRotBxTF7Yp1HpvoVYi5gxTEWGXzkq5xtwrKcMbbTg8ApKky69Fr9JBAECo73yAqHNuBh1su8q7pS82XdekZ",
  "key14": "31CwRKBpe3SnFqAXhKFwBzPmkErLCx4CiuaSceGpHGmCXo7gocupdgJXNoX42jfoazydmcHBCceUJsCC1KE7nw7T",
  "key15": "4dC6UqwazZPewFBer1XTGQ7RpGJy5QHvJR7eyH4uJhDVkzfn558VvuYq5M42qtHJf88UY5zKesUGRVwHr5wWkq6H",
  "key16": "3MTaXb9nHe449PwLZzKsYAm36kF83XMtaoitEk5A4Sp4MjXNoQNjwUU8LP8dS8tkB5CwjaY6YRkY3roCi5aokda",
  "key17": "2SmB5vv5f4uQ9iu3iDuVc83JNKwGAkZdxQeVFj9hto88Kp4hxpMd9mD67m7CKwM1BAV5FWJoijQa2eDue8dhsZo8",
  "key18": "4YJXT2BvSmwrx759VdBsRqw7nA5N8cUXa5kTZyde5Rh2gnAGhqJk8q4sDCVCCo9nAWqFRMCDAvkbSGfjEpoKbk7Z",
  "key19": "64MEXq2KB97FLEyG4QyApsDMWcxAS7SHdvxQvU3TMFz23QsjMTHUXd8pNQAnVwTwqDc1utXuHCXjXFNMLhTSbuzv",
  "key20": "4NVXKhSGG9ZmtFhWg2BijMe6NoJQdhg9BdiVFC1k2D9KSxnXLJDURsxYe2NTE7jXooYp59CJTBKgiTDh9geBLZAa",
  "key21": "35QfxFrzYuUbHyDD3UEmg748KJxFUreY3d8JeWKEHozXP2ZS3jN5sG6sFvbk9XT3QbhLXcoVvbTRThWbxsQJWa5F",
  "key22": "VHHXMt9StVryC6pEBKo6PaNDczYZAkg16CaKy8sy3Y8U63Ln1GDoZh98699A9L9xdTPv6LvQzFtES2ZY9AuoFgk",
  "key23": "m3wDhPFAtngZYRGJVMd7jLPquXuLQBG4uxVVwKiAGGErHrKsFveMgAQoorTovPrRVkjJtapFeHoa6XA3t7mkcBd",
  "key24": "5o2q78j5wTfA9zEqy1TBCgRhyTb9jimYTCUCtU3ubHzxds33P6YccmiEPGdud8NDNDWj1P8xQBws6WNaacxCWqGk",
  "key25": "4LZNxTPkaM5KZtcZHmwD2qNUwNy8iQdxtqGKewiiJbb3yZcBBkg9xDTeFPqqXUcppzZjfzeEiYg6zhPyPSVWjrsu",
  "key26": "foN2PUEBv3sD38NG7CVtaT1zorTrGHz7vrm5Th4Ga4z88rSEBhwW2ZgKVzsPyEKc1AxmAfTDEdVq8WQGFh7SPEL",
  "key27": "3ipieXgjbz46t4dTCBmwka63bamZQ15dABgqgLD1kakr5DkKPxPNHwxUZuxq6XyyyND7tDC8nHtkYpXR7dY57cXY"
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

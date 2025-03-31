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
    "2QGQxLWtsPpTRcPJfjUfiSBH2MBgu1bucktjMY2vjtPo3ByF1pXwCqSEJX3nxE9HXFGbayQ3Umr9Loa5cYDpZETs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oevyEtbSJ4iFxCuYK1pBzCfkB45CdF9KpH7N31KG7o9xJhzFAFb9tn8Pv2YxKXtu7v2uYH9WCbNny4vWiFDEBZS",
  "key1": "66z8om8VeRf2xNGuVH2ga8TXJ4HRR88NeNqEBKPzEJhmdLUNyckUbkWReCuH8hEErAp65rvonRXdSEYS6vHvmfkf",
  "key2": "2PnFTcGW6rayCBgHtYb1fPZvnY2p4m11vML6WmW7yfsy9GVP9CGo4ZY9zsbejRXtLCLYaGQ2vMy3vJX1r9VvXKT9",
  "key3": "AUxswJpQ9LWSDP1utE7Cp68LDtE7NH1B7jsEaCdV8tZnLp6UpCpvCGtQLbx7QknfxAyQwvRHXNE5vwL9zpxKizH",
  "key4": "4xBJ5k6a3ZmsZcMUZmappTbP2M3DwvoBmJ29PfXkxnkthjgJxMce8U28kbkEQcAgFSwBvsEoJA1FLZdHUfrZwuxo",
  "key5": "2UFeknaMWhWM3SCXh8GXAz2JvYLX8trVFUgiw7myHYuocbH4VeWKbmMUmJpGkEQ5WCWYhBNQeVoxAdqGjeartaxh",
  "key6": "sqTxMYtBdCyZ1XXRw5tXbbGFerTAYXtvMuqNJbK8aHJbwLWv55wQqcBZ7nmjTikNiB8W8bHr48q7E9NwptEywWR",
  "key7": "3DRch7hJqGPMD6hRFmwhpcp5rQpZ8obb3LuHD8b2uS3aFgAa9UWLcq6BszU9SszMr8BjePU8QRaCmEfKr24QJ7h5",
  "key8": "3JaGv56U7A8km3CzhskcUApWMcuTS6NUghdUkkKpcurZB2kMZfmyGxHnfTZCofx9Yvyp8B46vXxjznPLWedpggxa",
  "key9": "25oNp7mSWJKRKGvyctrm2Pvig6hVdqqvYjtua2mt1a7j177XmpBPx3hKDU2acRx7wpY9cTLj49KA66QdENLtC6yJ",
  "key10": "Afbkos9smG8XUNu7cPG8Tx19wbFTM8JBkJidkvX9yHefP7ZfjzsSYC1d15bJ9iPBKQeoV4Rd8X7yqJwbAEikzuf",
  "key11": "s6u8Z3G8ackbBRDmCcgE5v85LXCv1YvjrgS6aQv25gX8w5qUDsg2SXdGMy1LxEhLSUvduDaeXZzig5Js1MHUe6J",
  "key12": "3GmEwE4nhJY6foqgDPoRuj8UvHdy72L6Y7f3QzxBRv8R4Ccdv1oqBDqY3taszULsWFks9iqhZvMNzA2cwpyj6Wx3",
  "key13": "2nJtaoQGy3o6P8rq7zCW6DSh2vcgwwFkpCtuqFVFEyWqfuWUwoixvDa7HhU1paqjVyMHDfVZrpEomCZJUnPGEoUZ",
  "key14": "4Tmk7Dz5gV4KjuYK7m5y5gXAaxwoKGpWYFFma7mN1CKfeBDknob8PCtrTdWudNHa9YRTrE5FrnkC1ozxYG2nRm9T",
  "key15": "3kjaDN3cn9uqCAARB5vVz3XpgebqkagyGn3RKL6K1s5pk4Xp9Z3aNepBrosXjzmPvvZvH8yoW1exup7rnkFm3gaE",
  "key16": "SSXsYDHVSvqAXPtTom6qQ421RuFTsBrGyZ5x1VbY5R6wmBf4KTj6U9LXRvbaqFu1p4QrRA2jEScHWBTGwKRyKBC",
  "key17": "2FxnBBhSDvc8punYyovnvuGeFGVKCfzrmdMQQHr5xFbfqDfS9nqb4dZDjSBRcFeWe9HsbtfdBr7rYZnp8njqi474",
  "key18": "4crMZLQ6PJ5pAMmA9CGRn6GtTKfWHMA5zYTbnZj4xJg5EuT5FJHm12tsvEaZPRigwNKhxCCtwxeTgceZD75EeRj2",
  "key19": "4EGHafZDCa1rHVE5WdgAtizZz7MgEmnbYu3KwqNo4BtJH6FpTvRykWxF5DdDD1gTEv2c1Buvz4RFepE2KFC1icpN",
  "key20": "w4qawWDtnPH6yAq63NoNFCGx1kyHFwSmg19dei1GKN3bvu1w1YGTYi9TorU1J2v6zUiopNcj9NA2686G2uUKRjU",
  "key21": "3ZxfKaniqzniiwF81dDdzUFuxdfgkHFACwmAwAdrjma5BSDKx1ZLDZGT3ywHeZoYUi5TXShGJnSvp3Dbh138wUX8",
  "key22": "2Kew2MAre1oJZTtaotQeYuMPLk6rNxhznsUrTyGLJi3s71AaFqnbw2PVqa7Sa4VssMgGGkziLVfZRv8B6uj8F9an",
  "key23": "3fAkcgqzLxHc987xfcD4GAgFxCNhT1DWuUVrEYTHsJ97U9REfAomawUxEYw7V73mWvpExiruERd5dXznuDpQeMa",
  "key24": "4Y99UfXZEAJBonfhfAT3EFZFNEwAMz4AT21K6JhCzEJ51xdxSHYhFwPWrT4dfqV8AKRyzSWYnXUsnaCM1V76vZyp",
  "key25": "2KcE22DQ144UsihAcMUoFbesgAZ8CkGfXsdnEKZoAgmSD4LMFtvrKdCRQJM2p8Lh8st3SrB1ezu2JChF3qHPJZUH",
  "key26": "5DLEGMbCtpZVn1Pj3QRu8BDNfDTRnPiPi97yPPbvSFjJ1S64spC4dm1Gpuzqa47E3TryHWGrkpiTdNzawesGS4Eq"
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

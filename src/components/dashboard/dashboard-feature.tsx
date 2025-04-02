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
    "44fVd8eLtpWkQvebjDdubBFQHGPv6jiprxbP5EDgobjuX2W7RRFrmysMdFu1hG4twcYv4eWGN7vKDnSxn8AqLKf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELkVG7N2uJpMtUeWV8Pprp9RuQ3bXtQaBQEcvCwiReEoUbH1LawgkTLsHd4cMQeYwo4rugzqenMiUNqTJJK5opW",
  "key1": "2uMRx1xKyMtJ1L2ST2o6Cp1dcGtqxRHQsikm5QHCMwH5av8dNQACkcEJkAa27w3fscgwTyFKAL6MuLpbpToNb5JH",
  "key2": "2sNUmHX8U1HvNSCd1trPQWWJDKBjQbVHHwvMwmEG7y6dEQHP3EhfyKSeVLHAYwJiVorTe4Qqk9FnrtDjQvhJEgTU",
  "key3": "4nMPZaKcvKSqTZvSekRcmYhzw3WCq7L3v84aXiNRZn5oxgL5uWdSxRv9Uu8aqzYpm1bKSBdKrLfnXacJUo3Ve9Z9",
  "key4": "5xcKwuJ6usyAbj17kCvkGiw9hoJmCscRjc4DBz5fqzQZVqFXdfoi5wqAfxKJTnNANVjQiPWDpb9z2VJnzKKugZVm",
  "key5": "3NnQz1czSWjWNKrsuJRLu1YkANwtY8pJzV6XEDYFh3NxYCcLacoNnatKUniTjynXb5DjP572vsPJZsSYLc6aToZv",
  "key6": "36TqqzzBbSD6Yu3arSQJFoURmFoFCJXB5uqgWBHT6aeoZ35sLmFEWyv6f5Mms4sueuRkekboH5r9hiyTqwok2hWZ",
  "key7": "3SkJ4FDbDVUtxwZgiHMqz4aXedG29G3VZXS3xiAYtC2zVYHKwkYzTLq1AexLeKpTPnCyBB9jKTcb29xyjxkKDDt2",
  "key8": "2wraqYcSzshpDNtxKmX2nyV2TMMPRmVEH11NDoSmawrp5MZeNhgWpPmghv2Ruacqj325UoXtZjt5mxjyYpRqTY62",
  "key9": "rGPm7ynPNjCpEs4uD5K2W5XBiw1BVvrUCSNw279CbkynS6GfF7p2A7sT2wAiK167xm8ApeSYiQot3qLYrTERobS",
  "key10": "41B3NKznSqUqDT8L9nMxRTdUHCnqW3ppNTndUJ4EFhp6hupi4r7NvAwY3H2bmyyVgGfQznvK6Qv1yQLrvCmBLGGA",
  "key11": "5sY6mWx4tfyvBDB8KPGBwMX5K9Hxm6XU1oNAo44sk7YvWTJFzd8ieP4FSCvdg8sQ2DLZ1KVio7wtDb6arZsBEMtT",
  "key12": "MJ5Su4tThg9duZuSKvBVLR4j8A3DA5A23vt6T1VWmRwnDaMpYfWjBdD31HD1FeNQ4VjfJJDpxnE8md53381Bbfr",
  "key13": "gHngsMintmJbxRqGKav6N8e2ewhpqat8M8qZ5d8hUzwwhDfMZZRh4qGPiwRm9TvGcKHajnuWwG9JAZGbGmfy5VV",
  "key14": "5Qyupvg2GfLyX4LRH6kF25K5tr9vYnkhsdcuGQbjyFs6aqmKm7ZXNVCGd3TqFBrJ5XKSVdmvMdwCJNpi5YhGNEgk",
  "key15": "4bcjqctqVcwHhfqQdUsdyJXt3MfU3oVQmAhTgDMc5JEcSuwTSjJEtHdwXpHanC3vcxAm81SVvvB7oCFwD1no74zu",
  "key16": "2dhavm78ExoycoCGnDK4TiFGcFW2pBtqCCTJdEuH7gfDZ5wJhpYxGdgGXiKb3F8UF8rdyGB84QZW1MWXonGuQZyy",
  "key17": "4NixTQdwk3WMduDi5N1XZgdNDheDRTnJfY551EvLmTEQerFxHyUr9XxhyHhJuc6azRjmN5yXGNNQVTJXgmEtYPaZ",
  "key18": "5CkskgcX8ibeyhYr2Em6eh6Cq9pApHoKQF46siTWEJ7XQwKJCzvDje2zBXEojrGyker3qkqosm8HrQvHVHNG2H9E",
  "key19": "Xpm4pyYhLmeZHrinjFLqfoRB7DziwdfvG8SbnjoXR2ypn6zcL6o9PdcUhQ26krKecmh3RcsPxxYkH5reC6FmYS5",
  "key20": "5z2p5StcEpDFiZVpYpf64tAyFaNaSPoktcCdHYE9dPbMYatujLTdAMSERreyeadvHh7dp8b5na4T978xPPiBm3Ju",
  "key21": "4qMESaT4vZVbRSkHYoW8jEtFh4qegvFDaf5dvdY68qW7eu67phh1K1qG4JTHLxLGgBa3tjP5Dg9uZYvVmqsuLEZa",
  "key22": "4h6pdgYvCfoVorhLVaDfo8sbGcJoyunNQZDCc8rRZYcgTyuPx486xXV58ggN1gkRVHFAFSsoeKWuAkmPNaEZpvpm",
  "key23": "5sxuYMruESXHw9qWVPo49pbxNL8pBPYgMNqGLVyo1xcJmP5HHfGRQqJMpfU1JmzTeyg4z4pgZwTiLJQzewEow3Xn",
  "key24": "35y9ryKgnu4r9t2TPtQBLFRwe15b44A8BYXekYhLdWHGK6QsNqVXaaFW5pQvPb8M7aqhgYTKQMZ9hdMqqhUVZ6DE",
  "key25": "53hfnFULrVii2HNe6SJqwSa28iBRtjXW5Fnrai3b8KGKUQjSaS5WWYP8NuMqb7BWLwYV2p7HQDV1tcPorMLUBz6S",
  "key26": "2ToEGzCZ3u5Vr1jq4TiZGBFzXnZJpfkK1ZnHHfcb4CjWsDEtk5yUnXMzvcRMetPwew38iWxExf3LBuGnhyAAj2Qp",
  "key27": "5io8gnZRDjpfJnnSM3m4kBrS8Vp3NZMFaMBxHooLGwXMRmR8gaFbVhKgKfFumxcJX9Bp4VNvuG5yRPzmrNjfzHGe",
  "key28": "4G2GLna5KZ4mncjfKjBeYFXuAJ6HXjXCYKVgciL4BU7637n5hrn7pN2pVDeybDuMtNRarXGmfcv4zV7jiuYU5qBW"
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

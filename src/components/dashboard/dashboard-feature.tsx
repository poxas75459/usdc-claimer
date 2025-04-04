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
    "616fXgcLtjAyeVLpaDwMu9rEzVxv2yzDPUbUa8fqvGCMVoFeJShFm2f3UbzRBHLy38nwsNMczA35pnRzjDJH6TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AuZeMmxjdrvgCNmKM6Etyis3w3hcGEwMKFCPGzbAATLk27Si3NnfrWq6YXBVk5PfzM8hLxhAv6JPJQatkVGEvn4",
  "key1": "4TccwiLQDNzUo6WMGYmfV56ViNh6j9hHq42RoJFYcXxBasZGwUdUNsikfxzHaBbYxwuma6CsjWyUY85mRKVEzdBv",
  "key2": "3vmGMBSDAhRGVKFnnGPeBwyHMb26MnFnEaPfqmBo5iXVqKYLkoqvgf3gLNSa234BSVp2i15DvJWwcFa1gqEyoKmk",
  "key3": "5KBW6hWRv1fxZKgEVYJxQD6nUoSeDHqCT1HTYZAPW6WyAR6TzD3Twc6aGXaKRsFqWWS3sYMy1kLubfyGg6pVDASu",
  "key4": "XEGNPaFunHiWKHNFY8QzaM9R7FjEfBH7fChJugvSyNkmGW48vqMYZvmZ3RTgGm9dqvr9bRduAByLUe13HvQN25J",
  "key5": "4zsd9WZFPjYEtW73h2ec8b2uGAWc3NjqFmBSS1z2zbE9CrEHfRVqp1VRra9JpDhY9oUtcKi5K7MxmAW1mx3wcZgT",
  "key6": "5gCa52Z1fFkXdDCU2HsM5FB7Zan5rnBhuDwH9HH7eGhXJbPe9oDBhtazMQ8Mkt2WJ9U41sDQ1eTmmsrij9FFC7E4",
  "key7": "4YWaknYNyUWHLgd9q35gAE4NHSM2QttEi3x5oxmvZTnjp8Xk1737Uj7MvPC14sDcPAF5b5fYhQVbi7bRsSxacVm5",
  "key8": "5aiUFbzfKzwQABP3RRPLgUZNqo55pZU5LyYpwLjnu24UmWcGsSFTsqsgAnMHSB5t1GfigdLK1ecVZ85VLoEWTzFC",
  "key9": "5Zvg6nbeuBsmZTs7nys8CR8GYktnUKyk1esL8LFZjZdtDd5UoH9VxZcPgWL6SxAZBc8vG9hW1amDbzWycx6Zd1WA",
  "key10": "5PTkWnn13kAwimvKcuoG4UqX5cLVGusA7Te3S3SHctxrYhH2SdWx7kiAnv8BeYLBmwg5mPmePsR3FBYvWGXccert",
  "key11": "43eY3avp9AW3zGZhcF2c5yhXzuCpVkrnNLEka1qsRGH1wUbQy8HTXdJ2baFKQ3p3YSrRLeJXWDyrTMDBX1sKcimh",
  "key12": "2S8vVhhqQeRxf8MzNJ71EZaHnTvdxcXLu6qFkmbB4W3q9SiapdGPYfsSg1pU12CB3W3JQLS747bWTNQAqobSkT76",
  "key13": "5pekhaEbedTREfFtm58p5a2hG6h9DR6xsffzJ5vtvzkABWXVZeAm2qkn7Ng2CeMazAfwoMHHw5JMzSWTSEPFVrzP",
  "key14": "4BR9iNE5PKVoXGCK2qRqYWXjpBZTWRTkHqBGCqGtsJGAfBV49pkBygugs5GG36YB9eEfqZiwDCEVd4XZtEAW6JXM",
  "key15": "31XxhXz5AX1XbeQUJ6caC36DBHtKk7rU2Xwt2Qr1Qe4zAmBqPWgzy71QmEkrCySWNPGf9HCVwQfUc96i1unV3Hwc",
  "key16": "5AgS1PGT3kV5uxBgYyGMiQBXzFbs2qaAhXibyaZqqSVNYdjmc6PgXXfD1C7opgkrVsRhSiNt1CXT8Qtf7kNXnCLv",
  "key17": "3iCcNDNiQCRaSLmye5dRvbQH89xQUkeSiNhy1gG6GzXLi6PNgqLCQJWygyRy6QYpBcqGbiQmkxmmj77DJy4FgVed",
  "key18": "5f518H39xopHohsB7ArhY8ceV7qDHuFKfVbVVo8ArrTPy6qGzka5pRhujRAb5un6JZwuqDnfb5NxsURUHwhzWnJR",
  "key19": "5PK3k5B2zkJu8X1WMv8caMRa2seF1b4i96JNYANm28nYhhP7y9jDXjiY8qGZDtZN1rKnKmLWBJcG72JCLFEMfmdi",
  "key20": "4btrAukb1GR7ec5KKt9V2urgstNXrgKWvLoj67AKhaUB6Tq8DTxuMUXN8y5YGjHh6SZhXfmQDR8JnVU1f1cVo6e2",
  "key21": "2NoLK4Zk545X4PrbBj6XCNGHakj6fzA5cTLBACwTNJvJk1ibqXbMxGcLBVn5JRhYFThNCZcv8GqyaR8GYrStkzZL",
  "key22": "5kNWRA8Lpm2uGF1YSs5CYLBUC3WcMDm6vY14D9zqEpA8FSr7vE2XLCoWt9tZvUuCKjDPXFTgd4LAMHdVfnKZtr3C",
  "key23": "3wsV6Qvbr62hJaRqUbWRxhg54pjt5Eyy4VwBkVW8EgsZouZw3JVT5dPFroVzcdfP3hDTHH6SbtxfoVs5NdTa9NHg",
  "key24": "4X8ngnoi8SFMGiu3opPKBz82YiMoGF4Yfgj22XTBdis3wt4fMrdb4q9VZkbHyUyFWqXQNpCVYjkTXX9TRNgJ3mC8",
  "key25": "5KHXtmUartDpPuDFgNkkWtFHXReRs3dvEXbcM7dnt9YzVDW92K8w3HEhwr53MF5cDhDnkUrWHk5a43f9cdKJd3GV",
  "key26": "2VEFFME15HpoeEeQ9JsKqVjg51VvYPe9xUrjgni9t45RE8D1wD8kBnQpnv68BW6q8zf7CaQgfaG7fMY2qFoCz9Ur",
  "key27": "5tmHSxp6uckYAfzowRYGJC15vyzmcABz6Pivq89cNf6kSP2jd34QAdn4Sr3c1JwwU5oXPJWUGmqdjKp5fs1jDJnP",
  "key28": "54g8hzad9msDz91PeGt7yftyUAEogFYH7XbL7YuCN6oKb2K9cFgpQm6dTtKk1A3biv1B5X4vMdw6vjMgmApCTjaT",
  "key29": "2DTGmaMKFgWZmNkLzPVBLiVv1C3xr1FvkCZYJptXUDxezYn4Nwva1bYs31BgEqGD2R9FUzbwVntW1zk9LVPnW1Wu",
  "key30": "5cQiQnxKtBnUL81uybAnfJdDYekjrfXzVFLEfjJf8wBFNX49M8wZJYvtRjeu4cNQC8QhDyYUc1DPD3shs2GjM9Ei",
  "key31": "5sYdFzt1rGbgQ6bHyBZ6bNjkB73z9KKsiELotCTifAiUoVH55BU4HpvbM1rTb7uxi2Gfk6cpz4LyRnYeLJAXNAqX",
  "key32": "RXYUZXzD5GNPdfnjYVAFn9h6zr73TxuvRBAkhdxYe9hzy99WaCJohqN5E95yWkWpEwRa3EBmajdUbK6keigs5Jg",
  "key33": "2h2ut9jLLwNrwQk5HYVcuhXExorrofWR1bENYJmxVnRKEFhzqrmbA2gMEqeQufsQeNf2rAo9FaPkVYteN6sz6sCT",
  "key34": "32hgStriebyK9w4qDPo3e8V6rS5XGziSpye6dmzKgJBUyDJPmSyqFfXnKCG2ESDkBMeoyAjysWMiHRkRvZgq1waV"
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

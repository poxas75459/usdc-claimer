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
    "35rixyWPSnj7BCxp4sWmRPvQTc8CpJnQkFByhACDUco4o8CQwZaXoM5kUVdHx2166fdrjyYwENZT1C6rCqCk9cZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSD9frBzdjBHQjf1tyzuAV7zzXxHE93VNbJEaTXda7HGVmbhGc5wndVWbKWZX7ke8WQVPSmUJSEWe129SBjNsWr",
  "key1": "2o5Fowkoa3oXc5duSuoQ3BPoQnNqkUAe5P217W4Bw3W1j2VzW1NtqAw1fCZjmnuzcy9SUVArjVL1dGqUFjHqYMZ5",
  "key2": "3jLpyhy4jxA3RpfwLdZMLufcAcAKxRSaD59GZaR2eADTLcWS9aWvmovcUEVQNHYp2nndmsDjYd1MqzDM221uV22e",
  "key3": "53dqUKQ4BvVQHueYh4SCcTwQtgbucGf8hwTVikMjss9kuHubtk3vkATUugeRvCUYkVui2H8btsAZn5WjccPqx5rh",
  "key4": "2r51YZHTTgvVwHBG8sZxRfQZfSD4wgCYAVGDriMiQMTQjBSbZ15Y2uhbPjg68KHpEm9aBZENfaWvxFsFNrhW2P3z",
  "key5": "2PJbHggoRnEMNDh5vkwKQGks22YJNkN6vGNgXG8kfCpffS1Fi9mg6ZwwRpm1HEJ9xubP13f8qdAKGTLJQqhasH48",
  "key6": "3SmGA4nFWudxFJwHRgEzNFh1XS8dRJRYy4QfGperGhKP6WufiHCKKXwwf1tPtk6nFZAmJZQQqrtrtsgqsothjerA",
  "key7": "484Rxx9CBLXFQrFJxu1MctztoQ8eszQXdgjfZHreDT6oXH2RxBhPf4KMKkHAJhN6KibcnysiuvaeME9S6kneY1Mc",
  "key8": "2wZd4A3u5WvzwZFJLCe1J4YgQVPXuJwxKB8PkMGo3a1LWw9Y468aEziwiqLYUSWQfwP6ZkbwbjYC8GydwSnc6u9V",
  "key9": "4UuDq6Nj3JaSrEwKRXhsjTbkz8J4cpdJ3H92PcY1cEBsUq51UPPqdz5U4EbWLFsYKChqXHkAu9m2vwjpxkavV8io",
  "key10": "2bBetVr3wyHaQL4Da2J97o7E4VptJUYR9hKTbX7vRnXUpMc82MLTTVgAL2J3HPpkn7QKJxH2eKAxPXQSYov7vUcU",
  "key11": "26pcTm6jjdnN7Ab2uT3xybRhx9jmp3TjV3DH2JrKBviqwBYJzFU15BJh38KiJVKVr13bvKNSQEa58DKpY98Es52M",
  "key12": "yY74jnUrQnwEzScCBjRtumYTv55tsfEFhcT9DwieH5UA1JWgq7GUa95MFFLzHiBgs24NknpFYjoXyVLTLfkfyzF",
  "key13": "2TyVLaaXPzUCgT1XAnVDS9DsbkrzMjVkAa6gHBNQksrDSVrjRhRZ4611LJhXvgdQazsyrTTDuyNeN5Km3hKe898Z",
  "key14": "5zGcR5h1kp5d6gwzMWC3uDEVsk28FtaGkwiVtBEDUJXotke1Yba6swXzD6urstAeX4FvBQtNBQRR9oRqu9u2PXwB",
  "key15": "wD9YWxa8Prd5p9a8qDYZjT4nyDcoHDSQbWWtmAS6VamuBxD2gAdvJxkEQ3d56YKVuc3pQhg3GXu2bu5mP9cPUuZ",
  "key16": "2dssPg6dGYD748SctdUQt7vPs4R2wd3DADB4L4rEWdmYA6q92MqTjYnq3VaYcoKSRMhbG2BcrVLJbthMhCdhg6pf",
  "key17": "5z1xYx6QiQB4q186nkKCfgV5KLcjGXmKwnNtvM7c6fpbvhA7X5ym7GbdoaCZqHzMY5K6Pbtxakg6fshs2thfMaVS",
  "key18": "5x3YBoJzoyZUg4VWqJgyuoqra4e8eUNaXMUw37tm1YepTdDof5UZvKqcFc78NTFoBmHDjfr54fqsm2f5KhyAXocc",
  "key19": "451sqkKUozRsDW33BWhFWC3sYDAmc76rUZJ7BGqybewzf6ZtMVbzA6VfJRFVn3qjEPoQpHuS3X7C4DyFE9fXP3sQ",
  "key20": "5YLE9mDh1FPDgjbzJDES8GdEcgX2qefcSqU8e2L4yq1sGfJzAXyFePsyS8WK2FkawXEKXNr77kBP1UDBKe8zWMhW",
  "key21": "5gB9eNm1x4rvfTqry6QuhWun7KXFhPgoZoQfPy44rHbhJAXy7EaVdNWduYyvFzQUPEGmtZrqGcfDHLGKdjnuMTZY",
  "key22": "3JoGywTgn2AUWypRQdUy4GVQTUBJWfnNRbsz429oFRyMz7rsC6efp457yb9eGHgem9KLfx6AqGAGFyEuhyhjzGBz",
  "key23": "5n5V9QGUpsWpNAV2gkK2NtgGKuNM9dQejtfzvGKjxMxT6DBrR4hSuZEW67ZK65RuVc2JJV9zTKxM8LSR8wDj9KZc",
  "key24": "2iHRxPv7kjxAZLeSk4MjPto62RzC3LqujKHdaeD8ZBZETr6wQFSJAUp8buyp6oCWDnjr5kLjmdQC2nofcf9GCERi",
  "key25": "573B8hytJB1usqdxHHfW7J9FaxZJEWyUmkFae6kgVWgmQinU9hGEvS8UNfYnfETPiBQKFnRkcms7ZPwdfyCgrDxT",
  "key26": "4DkEQFM8RwBS6ewiUwmdzZStehrbFwQ1Jb1szMkZbytgNXsv4UswegUH5ZtvDnh2T8RHYhsVtSGfTj9acjjZREjR",
  "key27": "4Spt1ngjggK5H4UijCJs9e1QSpjoNKKGaQup1BcipyYht1pjJsLU9fK5r2MhECpvDPg5eRfdxcNcJrZgxQP3Zk5N",
  "key28": "3VhAm3A1Yd2PQTpFBvGcNXKqTARVttKaF7vMgHdAQ1Mc5BhVZKPoihk4i1gtYPRL9wmHDYBfzf9csAnP85TZJZmz",
  "key29": "294uYxKUS6vvu1wTA2XxjnQFMGN6Lb8Gu8FfqAGQTESe5BK2cSRMeYdFZyuAviD6cdyGyqKSMvPEYuLtb9fKvqkV",
  "key30": "3gyEiFm64yU6RnDfdwdoL458ib67K9MaiCX8BAQFj9roqnJx8mstBs3nAtQPCVcYFgqgPm2TrMVP9EQPprpPWqbT",
  "key31": "3M1WUESSpMu9t7ezCjFNvb6vD8ojViVYssQfFXSh2BBScAwknyR7JzCCP2yAgEpgcGvS3oMzVVPc9HUvdTnQfJw",
  "key32": "5Pk7eRTJHPjejG3AsXFVL7JsUxkvC5Lt6mBUsqfTF1bZHukzoQuKWGZGA3yfyxdtyUh1ZFoJGpN7o85Cd9ZGTbT9",
  "key33": "3HBSYx3ggTTuvVUMggDLjfYmPm4N5qpiEopia7q2bTmjBp4VpJwTK3ENTD1knmYpNGfq89rt6PDsdnNKiX4BrHYZ",
  "key34": "4rjv3Zt3A3ebTvpWzgGkpvQ3QmeAgqNMRCqgsBs8UztCGeg1N27U2vDm2mvjuMaMXwffUAi6yqm3Z5TUY4DSJaxn",
  "key35": "439Msp1MPJbN1QR9Fbmv6xr2pxTMtaJLwNnYKoUCicSM9Mh7KtG4f8AWkRvMz3RS5kp8GnvzuXmxQ2wQtXnHtCDE",
  "key36": "B33STRbfnz6VLckfVp61twvSxs17uTW3JmXkWCQ2FaZNzTvzpzhZEvDRKV4oF6gdftjtFSx5XALSVELfHzMJHAA",
  "key37": "3qtkcNTZLrrdNrVrsrRwtHss8nAiwynmo3FT9AWw2gKtpuvzUbW8iyb5uCVHEm8kVEy1jPwLtggW4CmiGUPM3czN",
  "key38": "3PLYZ4vzrE385m35Tg4VSzDnmDjz3hH88Guuh313DsHTF437ybgwcwpJDr5iA6J4xstr4Gm1si5m7tLMkdRg8q93"
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

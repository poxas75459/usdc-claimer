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
    "3kEXZJAd3g8pgcHchiEQtbikukcDpj9wDCzGUeauTae1MoPvgHUS9JUVMULCs3BffhRc7Qoss8W3qMyoXwHvSn5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cVjtHnf1v6d3C87znzqT9bAT3rsArUqx4cYjRgqREVhgbJUF9FmS1LtqxCkLmqfz7pk1GLsx8xyBtC5zYwurAX6",
  "key1": "5cwgMDvyAxDrcpjigdMz7qum7FvohADFa679ura2hfgpy62txmWfYuY1snNjMWPHmhfJ4K6ZAKA9beKygWeQkE5M",
  "key2": "555WuXE1izHTm7tDZNcuedK48x3gTcNdgd39G5jad1woVSybh33jvbbyWaJRPTFbwM8gsDhRtBuoa4MX7ZfZqXTG",
  "key3": "5Xv1bc7QC3DHeGJCRRtA6w8CzBSFNtpUaGdz59snTa7nrcvpQXwpUYtuj4m24pBzaEwDsHpCi4E4PrWStW3uNdY7",
  "key4": "WdvA1DzSzQ75nkjodet8BG6jfCFSNU5HHbLw4fK2wDHhoibxBpWmG2i6c6yDFAf4k5MrWJHy1pTpn8q6Z45a6BN",
  "key5": "3bjf2AYz3b1CCUHoshXqL5UdLNVDLoEr3KGdcLpGhnrwtSR5gTaEtnHr6tBcTYoRPPFnJstdA4CsXjHhfBLN31Bx",
  "key6": "5gK3J8wU8TDpeRGqrJ7ouS2omeFTwydQzf8bwt7dfrBzUqz4yiWJjjmiJjXGr6XLUm5SFfcqyFnGAfTeG8iA6DbY",
  "key7": "3MkQmvbE6ynE3TR6YkWmGQyQCcN6wdzFEVLMCDRC5g1REGoJfHWbTUQJYn8Y1Sqerff5BxWidLA7xBSxEyYJmqKa",
  "key8": "2KHtH27dam871g2FqzQxAFT2hKruKU5Pu4GFmLfUxSMeCAHfwMv6GhWKRUyb4vqj7edmMhrmLMKEK97BiiYMM1TX",
  "key9": "4HbjcfPUUD8U3RG6GcoeLbR8pr3fjyVK4yhoWJeC2xSMrqPpn9j9SuZsLQ3TvCw3nfwFRe2Mhhw5cGZsYfSW1HMf",
  "key10": "5fts89PYv1VdFhyi6wJaJpgr73DgoedUvffjZ8pb1Rj13AEitX4kWfUBYWnoUiqJ1KYMYFn4ZWZ8H14cqrwfWroT",
  "key11": "3hKwyCh3vx1TEMS7bTSAzdwMGPU5K8J54WnKNiY3H8kgihhSqZby7H2BtE8VNKrU76YkzYhPCQnCDKTTa8BAbxD2",
  "key12": "4tvK5yRJaY3RaNDZ8nSVgkNut2KQZHLMYGxUsyRtyqbBcrWs2ZnRxu55CL4j7x24FF4PZ2xvndf8urAtsRnzxfUV",
  "key13": "2N6XDmVBBUA1yuP4NzjXvwrjKYgeF9Pge92KhcKn2pzUCj5EN9C47jSeqUXcTxsXubyWeFfRLNyTw11tX2Qmd2zA",
  "key14": "4xDNhjAMf9F2LeV4XhjNmxNc8eQX1Z4xiSmvuWtqmL73MZzf6VMTQ3M3HLVHxWeNTEdoB7twoK1Lpa6KNBSxLeK7",
  "key15": "4ciinSCRwQyKTEWTcUnyB11wTPpuddvv8nGWmRhGH8wvEGxUVeU8QFsG4iKSqmUiaMwRYp3a6CgdvkJYA5JDQvNW",
  "key16": "29oefK1JF9Xqq16v3pXXYWZqRAXwjaw7JKrREfSEtQ4USwLxNvc8qk9Y6SnDyWzUQDDJ3n7GwGEWTH3dieBmrS2x",
  "key17": "4XTLuJDooSWQdw2ZzFvHH7V9UB9Ni145PR9TqkP7rPCPm2Cgxk6vQY22kG3vPh7hgfg9RMvRcLqLLrXw8BLbo625",
  "key18": "2dJ9gck71yEKmA2TrkaBStzxYJv8tQgy5T6sL5SVZ9esZYawpqmLNaWSrRsMEdEk8xfqnc48DnLpC4zHR5v3ThSY",
  "key19": "3yxV1C7UvWuJ7ngRCQnTeaSSBjpxZRnojf2Bibd6bYXhewMWh75bpkW61S3RKa1wssyyYCEKBVgnWmmy2H5kgmVo",
  "key20": "4cL1onBZ7g6NLeJbFqcMbnTqaYptMX3Bsuc2Zfbnxh5UgotKiuSgjQ3siFnwkvHKsivRWzAgzdwZCNmMiju5hpj",
  "key21": "PCYn7u748G3ar9o4AfJbYgJsiHQCUC8MxCDsuTedVg36nzTpVVCPfBn5BgkDmGnNJDEaWc3BX5vZxrvmdjdNu2e",
  "key22": "64HacfkhBnhmR26rpZ2BntNR8QCh5VCRYc2s9m6bXaudcAqCriAfsvwLASSdmV3Z1tTKrJ7NfzeybUT9szoco46v",
  "key23": "5k9GaJXZgwZvJ9mJBu7PzqhBBfRTGr5hnPPfVzDeZvL1Fc5k3SSPNPFx7GYAkdKgRRq9h9mbutugetFi1io4J4kR",
  "key24": "4Whry4J9L9e9qUpuNdFtasvBjJTNpnQ9jDuWXJjJunw2uK1cespmxPR7BJbdhYrDBVeC82gbXMXMBvfUdYUadKmX",
  "key25": "385cyb1E8UoPqeMYXv3UWVnxHAaWSAXpuybUZgVAR3KkJypXbcxS7yJGM6aGVDyceZaE754TA9cUr9zijGpVtn4Q",
  "key26": "r2SPzGe8JsS4sFvLdiBVLZMuEYKEddjH1HSqrYsikeSU6YE2P5XHU6uFZEMwqiM8ti4JxyhpiBe8bNMac1nT8Gb",
  "key27": "2Kbe2KLsybjjp3wDhAHnPZoR9BPBt65fz3c8qqhcAEcSuexSpz4KtMDyPMFra5gchBxYjqxZ42ujT3uGc9wfGs1Y",
  "key28": "3mMtnzzAZCcSTy7gbbLkMHfwXuVJSvs6WZJk6zXaxVY8Pwt4HZvgWucmdhYUPzj4TWn71qAkfjDNQwoAKxXAXFYy",
  "key29": "ywxSMa8hVSEryXaJ5jQ2bJyUfTxoNjLcW9JcJtivSumfNw5F8Xnx2ueFtjPadVmTdVBWkgTqwsRGRfN5FdA74Wz",
  "key30": "3M4ZE76Nu4Z9kDNwC2Y72wAjj34LacN8oDEFP4TdYAUoWUwS3LKvDdEsoAaqHyK1X1t2Tv5Vvm7YrudEEnDc5k3Z",
  "key31": "4QUJUQcU5abjnynJstDW1VM3iqsj4j82mXdZYt8hdSVwnCD1P2Kk7U33x2qN4fjeg8yzhWRuy2UW7XFBkrRbETcy",
  "key32": "2YR1JoLG7buo1cWcScLdWZu9FW5oPiLyTnRNpspwRBiqdPGELF7bk8YpKYBLybp4xgxQ1yz2HYyNxHoHZyYXdacm",
  "key33": "StW5CnuVx9X123TPodSS13r4vJ6z5CBNWHqqEhyafmSRXbPJkGkEbK5Lwoy9ELLYzeUKxzeekts9NZ3mSsVERdh",
  "key34": "EMCyKijD3zQFKPVDtLbWB9jsJRLCiFDYuzP7tEUu4GSTXJoJ2bxVVZhnPV3SD1sJ4J46brSL2bCYPMPqgHkX1P6",
  "key35": "3xitUHmhVVvhswmMcBEevzLEqFevwmtvf1A3TnfvRiPpgi3p1jrcxZd66ZWBwyNDkUByLM1TX76HxgGbHb5MjDoJ"
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

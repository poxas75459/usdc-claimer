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
    "3DgmdJskD5wza7iJsWCuN3rhrCVgWeR9VpSwHdapQRyPrijAnakYrEoW61meEty5oybYmZmCMacgdb9wcXYvgsn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhopDWtrXuCrpyhwYmWsE2rF5C7fhxZwokhWAbPkTMUh6Pv8rBqCZXpGkqirYtFWBsbVm1TNVqgycVi1SQWQyix",
  "key1": "39b7pTPGqKJ8Qns1g6k6iEhjc7fSu68f7mBND3RwUbewPPFqwLgH1rQEZ4rPdwtyPQkpqHNgBFMpomnSb2uj9pzd",
  "key2": "rrBp46HcK85G2msebbSunfAU1bFzitTE6VfwJfW28h6xP1WS5pHKXNFWQf1ah4uQ2md85XDsn5NEBArUx2vmVup",
  "key3": "4Z8gAuYQd5MPDjE7do396JYCKLnX9Y9Pcyz6WUX5WpwbWXJzwiwusWhT3rggTe57chvPPbWRCKMGYwPiQ1kc1AUj",
  "key4": "3uACrpuy3HyyXiZW6WV7pyfrPPMa9k7yxbtCcMbUok1CaNKznYmwizvpasUR5ZSZpDqwioLYbSEFohZBpDfc2DVp",
  "key5": "5JHFkPhbQBE5VkLxkjtdzGoxpyeWXa9h1HG1U5ynMYSbm2ny3PCYvYFTxVDD3kUoKPgvbf6uZwCKPVgKxXdYtssZ",
  "key6": "Xp3uuvtkdxhhmmTtLjy2j3g4iGTL9bhMvhCwi16eT9C5yPx69ve1oMSq8drT6cAw7aFtiQFA9ujHQS2FtKvAyW3",
  "key7": "21mvU6XWjvvBYf87obZn3Bpi3GkkEjNj1DtFcYLupr3yEFwBkrdMhGQeFtWa9TssVqkfcHiyH1JktoB3ZnM6vva8",
  "key8": "2G8D6Pa9mcywciVrdvJrjCaVropyBa9mBMCtunEsqgYwv9kNejVRrZWNCjzhKnon6YRYbquMJUem25PsrJnXhqpR",
  "key9": "3SQPgpt9fe4P1E9eL8wPEwpibvqTSEZBmDKzUk29Bo2YPKXaSCp5g8McBF4AJQM2iMaRMNGrxJy6pHeapx5aZmnb",
  "key10": "4YckXQzdVd5ifBM6ks59MKubDs9KWtG1GsXvPmECULd3HoZJRFcyVwhBZaeYPtMthFQiJkCTzTd8xcRhQaVo5vVv",
  "key11": "3CWQnDeYTQfMa83duF1bGHzv4bXYSvvgoYRy2GRHPeSu64CfgsUQWRn2i5Az3kCgGuUgk1BqSzNpXdsBXnHhc2e9",
  "key12": "39CWAd6mPYsRN51zaCEii4JtucwY3P7XGhPYrEahoZJ44DMRN5WXHwWtzDMtrJh6uwFQ16niSzyHmXQ2T9PefJGb",
  "key13": "58NeSwi8kJy8NYP9u1QviVtYzryhGzaGQGpJQQsPn3u4Mvp2LUoiqAT1BhsggeimBRXSFfJmFNHKSpodzx8MYmci",
  "key14": "kxKabyU4uhfJQSqH4akAYEUfdF2FhreXnAN6turEfdpekz99LXwxoAhN2ewP21qPYCJffzqJq9ZHkk9d3kFeNPX",
  "key15": "3gUP1czDPKiQcBwWgRePn6WGREM7chSy4dXX34Y6ULEAwj1VgEhsimmfrvGoM6LpoephPpE4NS2ecuBqQfPavymn",
  "key16": "5iE6YssLhWC8NejdopdXqLVbCnh6f6PMKFTMWuvQxc1ZMdFeWJapyadQu4K3HyovbFwzNCcnMAEEtshkfWE8EyJw",
  "key17": "4SSYuqyAPjUhNbK5EQxfvgvVG6FZie4KkAdo6yMLCDWDngDQMuu1vHidgsgJhzfDvLgRTGBs5byyDz1DeuWUXWw2",
  "key18": "2KuNmgdzWtLFuvj6gnaJnV2Dp3wPdWm8ATBuRw4NAre5jrygySJJNKf26CrPTAdZTzisPtXMP2P9bnEwjZ8KwgHo",
  "key19": "47B4TmZ4ivFHwicHh89D4EtXzDuwrrDt2ztCKbZPd6YPeeV1hNeJcaG5PH4xp46NmBFBcMZ157G4ztbAQeD1q38F",
  "key20": "bA45DNRQaBW7TngSc5zCRHwkr8bk3LmuRJcNTPE5xg51yJyaaxXVx2GEW22kSfEpMrq43UqBsLe68DcB4ypGEQA",
  "key21": "66cGtB63dizuoHYMp9zmmYP33i8bsF5AQHPYcJzgmCHhXAAMdb5rxpBhV2rH9mHQJHjqn9HY3Qm7oLk1iHphMbHD",
  "key22": "2ik6Chu3bbcyd3gfZ4iYaojw4zGTkeAesFwg5BfofXRPknjH1cc9GfKFNJoBB7tEeLDtv25NDZMBirzcd24H5fpG",
  "key23": "2roTveXQoiPC5ySLjGUaMtyXy9TMqj27rS97iiBVZnGgXbVafGvrAQH8pzLC7L7Ar2p27QG8ZWiLwDF6tZVGt4Fg",
  "key24": "643MaPZuLir5kpz71hERBca7ouFBRv8uWjaGYkmFjRhv9f95Nt2zsXySe12jBt62kyhdaFmmfmSgdNkMyGPJc6hf",
  "key25": "3H6wo8dDVKNhLoePZ8KVtFkeJd2Hg9yPF9LfNX8G4X4T6QQSA4Um1DQVGxhN95WmYNoFLBTVftoRUnyCt4jcEcVe",
  "key26": "5vaEEphsVK16kBXSkxxKuX8qRuWcgvfmxqaa3D8bHZQii2xdzzwsZMwDqhbeTdEiw44sxjUttQTEcUkYqLNXhe8j",
  "key27": "CowYtBoiasp3Us78eqC34JqBh8wenT1XwDZchBgY6cGaAB6gfWU633WvfbGov4RqDU8geepqaMqyG1nT9pFFjqk",
  "key28": "3CBv9a1qhYw6moam3vQbdMWXMG7DqqHrR6NPrMxUrK4DdZF5D8NK66eJ5MYF7D8ugc95BNTtfS6KYb1dFJxyxd5Q",
  "key29": "tiCN8U1q1EUCMTpbZbWmU3WzPyp8HrD7B3Ba3xK9P13jgFabAGfbftpBo8nbN6WgeGXzGULKd8ENu6YioEiR8dQ",
  "key30": "1QAgamguG9QkHKVkd5eHFNvNrZLdSq9UfkrGmsZ1yNiRNURhJ7rC5cVpGgGPkEU8RLfjpXcNrEyzv76uJUdnLaG",
  "key31": "5MvXxaz1Xkfyyg2mqJhSqaft2oNiu9PveYL6HkSHGniYzBfAw9qSmvXDFpeX3Qsh65L6wdrrdiydHVg2ifVf7W8G",
  "key32": "Bt3eLTFfHPYyXDwUfemYpYhX4sn52xRSRdhseYKYUxREYepcPhbM9t6B6YoTi5MZLfMjk2FzeUVAnuVRRZdL5eJ",
  "key33": "1G7eyPWXDwjZWF7sNL8qJtfmqoi1ez74ZHXCfT3858LST4dwAxEiYNw86TM27VRwdRYP7KUW5mS12Wk7NLHpamu",
  "key34": "2qjtEAJ25AU5NHwr2FRkhruEv593tW4QpKG9VwW2wUX7zu3TvGzmkHJsE8hwsu33qbERCC9gUro1JanZxgLumnDq",
  "key35": "4jNvtjX9Sqib4GnJVg1BuReazRFuoWCjQhEBgcPgrMiWEMuM5nztpck5uVevbRJkQqNqBy3TFvmaEgH3Vbap3wFW",
  "key36": "KT2tULRddgKW61iMRzDV5bjfjPxKXx3G4Sgrvm9soqE5phsQK4gywdyRj8B4aKRvqdX7APQDrVmSfgKea3jBZ1t"
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

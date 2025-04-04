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
    "4J8WdSgov5Jjh4BNZLRJdNK688f56yTrYCgc1KVRs1iuamgLLtf9vchArFbpgXDc6UkkbY6s8AqAMw54WgbjEqWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsYGqbXdTLFYgSWVmngGwobw1K1k4FXvp8pxX9cDg4QBHXVtCE3JgGH8bQ8tsxsdUFkv387g3ZqXTF8TjHoGy35",
  "key1": "2d9rdA95r3JEp9KMnXC3E3MKtsUCYhh6adgNJJLRGMhkjNuGePbpz8v3uwfk5jCByN7MzTUD3BR9GX97SPyuXxeE",
  "key2": "2Z9DrqC1VyYhWS3fhnqZPms5ePYz5KEPTsEfTSFMB2hfLoc5DinG3GcQrjpFgA6ceHwvsJiQ2KikHsUuu1K9g6Un",
  "key3": "4dxVmXYZ7eRfu445FCma8xupQmC76HQ19YByoE2YYeRSm7yC7RdqNkTvGF1WYNx65HNZsjCeXtzmPY2R2HWusHJf",
  "key4": "4JfVSMtAmjfX24uJThvybannF8xWQgfUXQWbDTLLStdjTzvDPkE6oq1tDbJbr3Lk5hPexrUSGgcFHJ77sdZh4B1B",
  "key5": "zu3J9cNauNViujVuvhxoxNTndsTkujVZzNRGWPu4HDrKtKr5xhyMDHSfwqZkT66xj5mCdA3bKdV2t4tQt7QRYNo",
  "key6": "5Uz2NhdM3hexkL2jwcbhq8BDUyAjWp9jPNttb6wjmq3AoHwJLPqthn1rB1hUfw5SMoFrMVKbUpZWyAsfnk6DfpHP",
  "key7": "43vhkMZR866hpMmfCChF3t8PUL8mQUuULBFUiqWcVyTuwASbricen3N9FDNb4wD31EcQ1mCb4LcFf9gmfdSTWRuq",
  "key8": "44P9W2oDzVaGbLH6v4kn2sV17FBm7gLvUrS44e6KekQhS9fMzArTzLFuMGrxJyypZtR4BG4pTawn5qVCvgFDUn2D",
  "key9": "WAPQWPJN4oERBFqiiiEYxH7jqpv9cg5FQgsKVCkMp4U31SJAMpNmxjECrLszcKM94dCJf1YHucsCyDLoLH2Mp1w",
  "key10": "5mhzLMEZXxkNfKAHqoHXnTrMvoBYiX7ZRCboogfCjXFNEQTYtaYD99RAcPVvQgKCgSZQpTQurdFjhfmCyA61RATr",
  "key11": "3B5EHqSYXoBtnmD7fZzZYDS8X94xRiwrm1aNHJa6nD86LHAS6j9e4X1ZQ43C6owYq8gFxXxkSaCCoALwJ2uvJdiL",
  "key12": "Zydh4uWkPnmUjdk7L51oX4rqMw6Mcb2MNRuxwUnT5GWh7PcgSH83mvfTJdZXQ9sQGmAfwbSTFj8YAQvyrE8SquY",
  "key13": "5xp6sp7CgDHofMmpXJh3iZjgT4mpp68A6G13smJqNH56H92YAzsHwyKfq3a1vq958w7Vytd2yQWYh9Eg5Y2LrASU",
  "key14": "2VJVw37NZUgrD5wFxbCthBtpb5JMyVgyLLBgPRxSZJC5mzLVn187Xicj8AvzBpmCE5GaA8sM5EoeBpbR7WnNhvEf",
  "key15": "2qbWTdECgTBeM6KKBAgXt3ZjzFavG1RrJzwbz9ZrqY6gwztkMHHt7Ao5tQtgizSS4QgqTG5ytZJAGVvkyDXshvWY",
  "key16": "3cdnrkex9PmHG8SnaqheiBTenc2Ho2CfrMoJEU1rFcFCq1QC5xJp8nkqNvxVq7aWWzbfgDE85isnSMfzDbgs453X",
  "key17": "2bNU5y1NiBEJojA6PwtDA7obUQjcDeVzptevqBUoDKssJYGJkuuyp173nfoTqJxcRyG4VRUJxHjJq9PAerrSgfEf",
  "key18": "2YEfvi2GjduL5kCnJxVPsnaVVGyDoZrfyA7RyYbbyYyWX2Hw2fp1Fk8SWJH7eJwMLJPfiKS9n9JJjzAd6czrThVD",
  "key19": "2KXSLEuQ6jDVG871hparkD4JNkEz1WuRw152pRrmDyx66MBKmZ3Ykqfb8UJiEYagTVyJ5Hh38CLHydKm8QLmYfmc",
  "key20": "5QRhTfJKC1EEKmh7tqBkctsfhep1KCcceDxhxwan13W5CpRkBrDEQMdmyNheUbSz8ZLLTXPMZxShkwZo7k7reYUp",
  "key21": "g7BALK4TTfwsfSvsUXW43qFjj588v5jWEGp2zs491vHMGt5azs46BVfLbtCt9R4Wva3jmMumtrwNKGCNbrAhJYm",
  "key22": "5HZhHphjErph6Z7WmmLqVME784QrUBrShYAFunUZbBXunhQdDBYX8UMm5F7aEsMhLLAqZSJi1RwNNHcZ6XYKy5nZ",
  "key23": "4DLKCk6CR7cXG4dfutR3g9qx8FxSEG9QGarekgiR5iNpYKTMZYhkiSj8AfyexPcWxcqafPPrJWBv8tSEpUxs2ds4",
  "key24": "66pg8LvWhFFZNbegiqWMeFRHqgcURxSQ2nUJHY5Hs9TfSLE18BwD4mzMRWitwhf5rbEF8mXzzMVvdFmhH3ZJ87FH",
  "key25": "2PQCAzU9PhBWd1FRYAJ5ixzq7ss3Ud9n8UNBK24JpZ8qNeoCGy5iRh9vZ2KtXYNVTmKSUbLvuydzesCmkKn31cZW",
  "key26": "2NqVamqF8oc31fbdUik5hB2hijrkzqbT6fAEPLFnnCdYxSfDg2virJwQRD2B9YGasJeShRQJPBae5bnErs8x8i64",
  "key27": "24rtjWcv6KgpK3HU54iXMMXUos5b9GZLMYcwHah2j7GKMvrVMRrzdgVjAZMaTrC9kAr8pkaN2Wsgbwrr3xS97nQV",
  "key28": "3GmUCjSPCsT8crJHkdbpXZL42JUDytFiTeHRHzWUFZNKdVZUKGBAibSDRqSnqZVwcsRXovKitVkCD6cysFJMYtZK",
  "key29": "3ph2VAigGkBwWA1e2fX5BBTTtmDfRASjg7Bhap6sjBRZiP1obAt1trurr41YYQ3iuHKAMCR1nsEghFGpFAjuXPms",
  "key30": "2LnoaioEqQtySAL5SvprvmvV7aAjwjMgFcr4uLmfK2JmABF52QKQpL8gqeTrBtRkGBp9RVXvpS8Hq1t3YDzfGtzh",
  "key31": "4dgJjBR62411NFijkrQCNWkeyAh3utXuYKUQun72PmPi8o1uJfDSwnZ3a1VqbKcwDkJgtXVotQT8CPm4BaAwS9Ca",
  "key32": "QxzEkRP2AwyQToqfAbPHXCGJcUWKkFozeUXMM8X8PvKKvEJJbQK2Cnm6p1cRZtP3vby1aYJtjyavs48vSKouixe",
  "key33": "5asxG3d4HN5Sv7e52LGhWBW36983EgezFoaKfbSjMV1i8cBiskoHf8wN8fp3bWoM2YLjsbZqfth1zv19m4VGPKy5",
  "key34": "2EYYBKPLu7qHqwc5Ue3D2K5BZP2aehT878QFfdBbbMiNRCo8avE671SyfcCz8zvNm1PZRmv3JsMofPM8NqBRXYrN"
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

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
    "46hxjhBB6145aJLeDrCgrPj4vSpFWpRKtgez3iYet9WjoZWcbrShvKyTvEfpsenpngFk7ApjZ4C3LJptVuKrcQmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eygWwqyo3khqtH8Jo8yqtiSCRXFuTWn5aqt6aP3hCzqgivP2qbSVdnbKBGjeSLes9hQhgFAB9x9ZyP1ttCkM9qx",
  "key1": "5qUenseYDSn6QupBhrN5ztKYrYB5BdtTtszxniqQfTNH9u3jh8QDoCwWKwUXx6wYa3zVudKzbPLwuvhZgiYf4n5i",
  "key2": "2AcKtwFNxqQRHRLuJ2GvVtVen2eDCQtRFg4dxP3U9RSG6qYiJKikVfrGgEiXRxQhua8zE7bS5c8PNDZRc6gHSe8c",
  "key3": "LfVj1L9rLkU3znxYeEyoVq2i9UoZ8pLcoNru7d5WMxj1EcATVv9AHdAXzvhMECb2eD8LDuSaSFCBnpxygtqmP3K",
  "key4": "2Qu5FwEQ7LhZ89RXGRMJ7pThZDpUGz9qSdfYtAbwg11xX72g7nwjai1bNsTdWRVHLfHw8nS38uiEscVh47NzXak1",
  "key5": "229vFS1bMa7er9fT6GdyL61DhB9ghVAH2oWQqsNbFERmpGzwfQTRJdcHoSW399qh2Fzwu7ZWyZMaBkcFJFJvkiTi",
  "key6": "3C7K9kKiawQ9j2r6Zos4AAggdFgVs9nRuns7Vz6gR6dkzqVg7tGNhfQgqoMiLN1a1YAGasPL4d6wJu3HfUfcoZZ3",
  "key7": "2ZZ2Bp5atDYvRNcPuXZtKpE44fv2W3nffYoBwf6MF9wdd3X6CrhFwgzxdGNcqhCpBLxSpo79p9ra4RXYRmaPpXMV",
  "key8": "3THhpcawyyRud87mjBHJJydYi82k1XTSCaffbzwcSp6c3GqmUN5eXFdKDp7MvxtB2Eu22YQAmwq6D2M2E4dNVWVD",
  "key9": "43WYLPs5irm7Vkgh1YCtSAfEvMdTiwXvQsQpY7UY3EMGen35zb6ekXgZGdJ3Z3SmN97nxFYRv7kQ6BuSn6YRkXLW",
  "key10": "3JfYj3mzbzA3AXcKDDdkrj6L72XMYsFJL2YtZjnFETNDtv6acE3hh9uHvZhkjedxu2biTb5CWPxpMycMPfwPgs5M",
  "key11": "2Wz99CfcaUtzit6yrMWDfsywqcjzgcxn7xBMDCGYtoBj6pJqi22Y3w2zRK1CiQzzBqyekgexRWE4cAn7QaceiSwS",
  "key12": "jGQux1d4drBKCb8jRST5wT9Bk8fLoxMs8nr52txkC5Fg1rxconHZFKZERzJSpjWWPZseDBYWT3nwdBSsNvhBXm6",
  "key13": "2gqdfBrwE79owyVwkSdYa9H6zdaKLiLNB7V97bPwmajijixTVBmHHjGyHjtHA37mk8fSAMUip11N2PBH7QmRFMxP",
  "key14": "3h1ptnrg1q9uVFE7SEpjC4h25CHzjECUj96e8qQ6eVH6CPN6y1eVrSzGxVJwZouikFCe7j3AwmAp2wjAB3u3WELV",
  "key15": "3gNho9JmVpYFwWJnMEoXeNYZs4FnEXm5xKacE5XU8BGbFRPWMbdHqBNe9Z2YxHAcSXz2tjjMU8ii8jyNHWCgDvym",
  "key16": "4siirVmf97byne38HRSoa468HA6c79HNUjt9DUEDbE79HuXdbLSAgZRGaYamWeX6vkBY8i72bkP17DTjXGLwDw3k",
  "key17": "3ts2ZbsFH81VmnQbFp4b1wBfGNRZuTRuGgNWHAPe69TrSH2TcdC3aqd8bquYsQnnSN1rTsPKXtCNy4n8nzrZh3Qh",
  "key18": "33K2BLoWhhfbosfpLENKh9dzFXp7AknZi5VZbABaAQLwf5AhifPj59t9F5FhGQkqv5ahqCp5Ndm7BzhFK5K4KGvN",
  "key19": "3LFCCnCVV4avGpE3KgnEpLrSpwg8GpmqisAXtHo9qKAdk7N1E44yGFhcTNLLJaiPEhAvAGFq4JPwqiwiDpT7H9Ng",
  "key20": "34FrLqGwz6c3Q8MUZqjLbXHWFWd8gtqZFYjmorQaPsWSU2ih91ntP7GoMTRW7a1JhbcQSAWpDboGud52i9mYZ3Hy",
  "key21": "57tzTfdq225MpDWshoXSiyGHx4esr82GxkuebUT2SF5zmb6ywX2JS9aV438z6mHCmEArHg7mkK1QYc88X47y1CCc",
  "key22": "jMekynrKDPoftJrq6etRBuCNrAjTcaSNRmajmD9CitTwb8z9w9WmZ7YLe43HTxa89GpHX3587eg91HigEssrEnK",
  "key23": "5YzBGhEvvTaQmAemquXLQBtjjQZSzX9f5RD19QUrEkLi64aN7t9wrzA3pkbaKEYnVcAEBr7knaeC4E9o4MBPAtNn",
  "key24": "3NZVYJ4HccMfFJ8FKkKov5XLKR6sfuBqS5SHFJipRapc1gAvoaevM48yWuE1GHYNoXnSGf4XjZjEaaXWtJTGHZbL",
  "key25": "d74oKmyUDv9GRWyeJfKVZLBmhKh4QkcuppbAdqX2BYhkP5n34LxKz4yjqGokChruB8hkU4xE9PXyBBFrGUQqFbf",
  "key26": "3FFKMfKCHTLqyj5YrxUATYTuH5anQoAmPAUtj1iAaC4QAGktZvmgMUAEVtCosnZjppYnricYKyGT43JFJvToetxX",
  "key27": "4mrqLhju6Hyo9zQXhCfvzDnXULpx5Foy6ojp9FiKFQMy75pc5ZJPdMY6TNFkMAG3bsaidQkZpQb179eQMnp7JkM6",
  "key28": "58kPMptXfV3ymsUZTxytAE8H5atuSMLgrtEyusdCk4ckR7o3hgzCrGXMRtwBstBJvmJBgkxV6MN5YQmaA2JigoJz",
  "key29": "63Dz1ozGLVSi1rPfYp23RENrhHDu4EL5cr93M98uzmjPp5vrhMn8U2njRE7LQhE4UtBEZTU2aBVfZyLs8Q3idETv",
  "key30": "3tZ3j373gXrR9gFaxBVTuZrnYU2TcVez3hEPH6fTUJB3NvTJ6tGCDjnso6jLjdmg1dNmjyTrbuMaBjtjAPTwa9jY",
  "key31": "EFt57x6setwZ6GEurXRWwEzxC1YhBsRcJ62P55WdHiWLSwD6yKhGvbMBarAWxoSnm1MzBSMccJFc47GmobQq3mi",
  "key32": "4izP8QYYsggcbTPNetre2FqkkuScuXZ6t7JfzrpNAJMMdv2FhqiANetc8WFjorsibZnQYEwc5bunC3ckWgca2rPe",
  "key33": "5PpA2j1HePtRGfDfqsdA6hcvj6TAo7YCaHQuhuQFSeEAS4dCXjFX4rtpkjfjZPiT16hfocRspojsasFqz1vkrmdE",
  "key34": "2Uf3RePWe1oo5iAK5pWkUmH1RvR7rKuewK4saEKZg2Zi2mc9HNFpSqPF7ouJPNyftTQ1v9vkap1ANmGx4fKFVAPa",
  "key35": "5E3fhSYLQsc2EGNkXeG5BT1e6gx6axb8Go44cUGHATyyDAc3DC7Zzu4L4V6FDivKWE1aZgub41p8kUE5dLzr2ZTk",
  "key36": "4wqZv8XxwauaH2Rys2YP4bvdogMR7e9pWSf4c4f7Dd5mPs3gvMWYpJKLxidR85pejHm7TTLYSQ9JnJ9hPZiXoWkd",
  "key37": "2YEhqPvCyg2bEQ8P6JpBwQzdmMj7LihURN94CXfHTdcGc9jyFfEgVb1JFeU9pzAWzsZ1tGwfee3Syu2hcUz5w7FC",
  "key38": "2S2oAXKNw7PXNeeB9HjzWSioy8eCpJTBNingYPxb6AEFejh3dmiK16YebNxYy6m8tp3g13tFbYHYSRiPHAERdwKf"
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

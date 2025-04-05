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
    "2cFqvX4oFZfi7LcRrRMdJ7Bgtkkw26rgMcrhypjCj87UUB9UMa6XsCfRGdXShCBqzLVgCcbdXDNBApyLWx63i8Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmatzbWyguQg8uHXeXE2rAKLbp6BitvMJSrxq8Q3h6cX5DGM4W9pAnwxDyJ3Wp6b5sND3aLHwitMXXRSd6zzaPY",
  "key1": "3Q8j6iSBvh8Z4yVjpFgbbMC6fYSGJXQXLuUXRz12FRsz5HJWzTh7vTFfpBcYA5vDkk1xWdg5esTpqVHJkJPCNCzy",
  "key2": "5HzqLxJWpJxATK6YQdMABAESQ7tgBNwAotHicDY3JfFSEa1s4GM4KwypDrSUbbVgHEJ5aZjqmHFKxzXu4p8nx4i8",
  "key3": "3zbcjecCtcfYGbSy9HxnLC76cPLucqtFmnuXwPNUg1uyTEpGFbxbbCtEdJpKH598KtibVfYrW4b56CBzKacT7rgx",
  "key4": "4XrxpLpnP8bfPkYex1GPtH9GPZjTQ3TDtS2ivLUn6J98uxC8U2ssQuSjJKSa2hEMR5Sm6JYLPxgEbFueFQLCxMyu",
  "key5": "4TDQkNEcy9hRgVMzZeVBGpraN1c8ofgVvrsLboHMRDy7zpZyHeK8SKtF4ZJMSog9BvdkeZxj9tv3LxssnJzSdMHM",
  "key6": "2nsEHei2ohKM9zq8TwBRofX7nxWX15GfbB7omF6vg2wgHBQ67WLuNbCHnGChSdMyCQJaEyJbz4dSYUJ4mTQN5V58",
  "key7": "4mUhH5r5saX4yVVoyxvXHWxgtCeumhjsxbEuUB1SsZehtkoktyD4F3YfReQidjL8W43zRsK3EFBWBNgmZKLwj5iL",
  "key8": "4AJKRcdgsKMUsf7VmMoy4fLFwNak2CCiwHkd2oTBYMN63ELURe7v7FowXC22YCbfLchV8uWjdkw5Nhacs588FYbd",
  "key9": "2U5Z85uXNbazu5L1rifZKSHCB1of5n9JzJgLTThMMQ1YsoeMDYJgHrLM39dtJ6MGB2ZiMb7WjhzP6q1gg2k1Vgbo",
  "key10": "62GgvTzuc6RGtTDRTKVvHkPxJAFGsmxWj4y1BS9D81nkWDM9dDF68DeBzeBwFkXd9vxtAzVqNCrftJY8o2bYXHgh",
  "key11": "3wrS7TGSoNVxxMDfoafRUBXwSexABmxpSqQr9U86HzcNEqacreJvD1m7VSoGZdNbETr5qR3W6DDJ1XVhS3atDRvz",
  "key12": "4VbmhUHRHFiDFmzfFjQeieRuBV6qT2SqSfJi95iPVvgKJPBUXQBRHjaRwMDhyL1ZBw19NrEQ6RQMXSw3Dgomyos7",
  "key13": "4hXeaWUtUqM6aNa78M9XQK1siho8cvpuU9aWSfNxX2DhSWgmj7ftU9wJmi8xcKcgwnznobwkBpHE5YwxHTR9vegB",
  "key14": "CxNNgi7k1R1pmMzakZtXxqYU6HobwrckPBn3hYTzPSmQRkx8Uv5PjrCaZA1rpKcrcgsXvECBNB7zXx1oyUZMHLq",
  "key15": "fUi7j3oziy8t2ZvKmXtChX4QdT4XQYFJW93fX7gYfdj75KDF4qXYmLsZ8tbKo5sViE11cEvptscfyY9JszerBna",
  "key16": "5v6BwegXLoEVVEQCcaHDJUVuKDZpx851a5942LXZpEuEbfhSsiyqBuhHC2PMaA3P4nk7wb7d8KvxUig9pi3N2hNU",
  "key17": "4kcDoh9SWGnPmmwCwXTbhzPfirvBYLoNS6NxLX3966bz22v6o3YDfqdL8ebXaJSLvXhToB8yF9mAEfwQM7oY7KMv",
  "key18": "tvn9G1pNSH8qb8f9pzAvWhY2R2R5qeEF99ofknPKRo7h2Rdx1FggPk4QDLmXHpxa4VBUdUYscyUjtABAcBsC1fH",
  "key19": "4Zb7mrZgbp2bnC4cbj2X8NAEquxMznxuuaTs346k4Gwu2rWgYeCb96Y2iRigD9fiYyi1d5HQy7hHwTA7tzEyowms",
  "key20": "2LjVkZM2RZe3K2D1RyPerkYnwnM5EmsYCp88Np6uNeSStXyYxwDwWPpjGocTHaDV8YBoAmiuAud6uiLYgKAhKdvA",
  "key21": "3KpbKVag1VBt5JrZwPVRTSU1JaoxrtRbdrrM8cekkHJo53kabE9pLdvtGGEXkyhG5vR5fhZVqi3hYtBhfuwWk4Ex",
  "key22": "5GQcSBLUXuHZV13fuozdt7LmHVjnr1nu9dNBfxum7wipax4WBHM21rbvPViyR2G498Vo2Eq4o6QKChK1Z7KDrQXo",
  "key23": "qoLhjqqHx5rxSekP4RDuzp5SYi2WhZH5vKLsHtwdKqpJBQLH44SK5DJbu5mjLhrQQkDV1DW9cu3GtvMWUABhR3r",
  "key24": "2mbiBojZv5tQfqBJrPD7eJfLNYak3uukBLr8KvhnYU3zYAdg2LiZLG3ptaCXSTdP5L3bsomYCmBxQMR6SBYwnVJv",
  "key25": "6zdFWSxywDLJKmgkAZ6JhX8p4YZXyByZ5M9a6aK5e4t6zNcps5EZDcdGopWh3QsZ1Hqb9wszmHHopNcu16wKN6d",
  "key26": "5LWhdyXNp55ipLocN4jXihcMGojaCjZuP3x6noM1wA4ceXpqfJhoECZ23qhoKtaWaaVa3GxvdMb7JwyyY91ziWbB",
  "key27": "4eDrYPHgBZjnLu7HVnHcp2kCM4XCgwJ2YVpukkiEsj75BTL2roChifh1CJqTn8icUTr8DHYjd7eFeTDFtW4EmkSz",
  "key28": "5vQCqZLxJ7uVswJK85Ntu8hZ5KEaRaYfp7MUgLVzsFxYUqFMJUAKyDQWmwvJZu1sjWEW5xPPvAErxCYTSFtgGt2A",
  "key29": "5fNAtf4qSBjUhxsg6M4Z4xsDXz51UhAHxZdyX2TWmy3CrmxTW2umk1qpssT8vbQs1X28dUhU5fq46C54vuS87iCS",
  "key30": "QAyMizmbwJarS5EnEDdLFXrQRs9qKq9GaAdMfJfcZHcssdZE9tejCowKGKfAzYEZ3zknojT1V9KK4ipqoYJ5qf3",
  "key31": "V2suYyJayUTUeTXDdwpmW8Db4VskUAwzh2jccC3VUk7fYQVCRiDPhe1tHwXvRmocpHHHKQTTFjK4tCrkm3JTbBL",
  "key32": "5DDYrBXwftU6V3nJmJ7DMszGDKzDK3fE3PxQZQGRkXEUZPCcMgzYRPT6Xhsak9csTmqFeQ5DtjTwpGiXBgcPDYBu",
  "key33": "26rzTdETHxRq9sBUrDYjeSjSZMgfRVsp8MgM89uTpjSXPy2aoEZmWKvBDbB8ukw5Kjy942jQB6ytRRyuWRGp1LRL"
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

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
    "3HfdxY24fCc2jE3tyBTvbzH8pagSEAUM9SkxftSvS2pEqsxSVzJ8YQZLk2fsypWxGwgtS6NL4SRgG9tcrypz5hJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4upHNCQN8Nv2aiKmCL6LeEwh79fyBMoESK72Ue6UyyFwzCKLEAdXMaPLHD4NZ6qrNYNnaVaCWaYRy2ZattLeXo9H",
  "key1": "2kQV5LW2vqgBcaBpRXdtQn4EQE3h3YzaJ9tN4UUDrXXjqXpeKGyzUXj3WxD6VdLAur7gXZQ7yNKwWzKGUxnKpELd",
  "key2": "iPx9AtFQwJ6uchYBcDrQpBaVap8nNt4yUcyZPp8pBZEWyoNtDBHCmcTQvTQHk3tnFHVbG3jUrzLhD8KHWVZHccq",
  "key3": "4GErEagdvGxRPQk1hEoJkwMpoiDEgfKreYf3hJAKMH61BUFqDLaxmyemRNwgydGR2e2rg64DNoTiYkpUBqxzzJpK",
  "key4": "2G9aWpuBmqoFnQjH9rVynYBPbg4UdsU4YKcXfTL51gvzppFBNo3rEteksfHN9xbrQHojoT2XdjwupAX3bu6UTt7t",
  "key5": "44isMAvqD5uAs5R9QdwWtKrtN8oKgumyujSGBe2tPGx8T8RK2f2cjZWGpDpQk8S28oXxjvdy1Y77HD8JYJ46Dbtz",
  "key6": "4j3SUK6oEKB2Emp4NVKj6LG3tseattRWtVxVxh3sLsh2xVQsfZF5KJnCSpxKZiiiXBYx5z5NM9QfGzVmQEZZVTgr",
  "key7": "5ZczJ8x5BLYNPxtWT82HJ35gqpP8Sct1kdBeWBJ2zVDBtxBGJ5zkznaGa1Huovu29P6iXHNoirsHo1PSadATE2F5",
  "key8": "3qRgLUGwXTNwEX9PHcuQPFY7j9d5aQ8Wp26TVg35YSVEnyzhcN4she3zzJ8jhHnAeuskLfyrq8cAqmVV25m5HtLE",
  "key9": "377RAFQqL4A8BiR13vJAgKUJhZr6knTrbrQ2tzn3VcQ4HPxEFYa1h58E1LBn9KUdtsqioVxGwb1bRLVHs8Y4Fffi",
  "key10": "3niJKbeKhxZQin8DUt7pwyyugRAukbhSkPF5tEqWinLKQKYrxiL7Wv6kYkZQTnwgftJyczFWPR5VbASmgvLf5cHX",
  "key11": "47jWukfx69GcfdfvysAST5GjV784LXFvtXeWN8X3zwHUrQ7j2igqRvkgKCrpNdxa2pxhy1DWQUCTtLkFgoPtk6nK",
  "key12": "5Z8Z7jgkmVRtFx8zk2t3c3usyW4AH6v5ZgdfH8PhYR4pdbyNhEGRDqoSxhyCXcCaDvP6V9rk9szz1KDsFx2KyHpg",
  "key13": "5Gkoh2C4e7iLuPvannuy4ikmBSi3hohz8m64MNBC1jeJD9yGgadZP7sorkSpfh3b4gX5HqtFnTvLtLPrwG5LJjet",
  "key14": "4sesKzrjJA25Ti2AzzfzX7nxyNNncP5S3HURb4nfQwbR34qTxUMmPZSY7fsJuDhTBJ4mZBw1jM8cMFTJqcrp3eJp",
  "key15": "5eqXwkNHqkBpcK8PRxdLFPcw4Vo4jXJqeu8Ay4EpGnxLPQVqjqDWEbRe2NFTqgZ8L8FeYuhDtwJU3pnEYJEVWDon",
  "key16": "49AyUvjY4MbKt4Gb6mQZ39CYEvXXqE75r9ZAvNYfAhQUXvPLHhYa4Wb3Jnk9CoY13KB5mWyRKZDmM7CngKnTYxdj",
  "key17": "3C6iDB1Mmy1Sb9zxXxVaar1spwaJi7rn73brK7WWGQbhoBQUuY3hQDD2mvn4JGrJ1BTcmza4SYu2xMpRXviLCRY6",
  "key18": "2EfaPr4oRHvzAdFBwgpMDg5USrrnyoinx7s78PfqXu6dWL91x7YFhCgyFT6tp5gQtP8aTwZVzvAWzfRb7YRRPpn9",
  "key19": "N7iFAV6dvWAZg9Ak6zxNC397CdfoUCqyZsAk3j6nnPPh427pwQ55Na53gWs48Z2MYERNqyC7TKp6GGanT1NZ3Zk",
  "key20": "3SuhSvWc7trsJEbkdhCvScF4HYDLvVS9qZ5LewdC2CmC9UMdWS4y9V7PaWP5U87ZSXxZbN5BcTvRwmcUZSFuzj66",
  "key21": "49rSGynnwMvNkntoT1ENFdbttR6HtGo29ZBTD2wWskwv6ATzT7bRJ6QVnP826hsNyHyc7ydQn7azUqyznh3CLGaN",
  "key22": "49dNKnuCpd3pa33p9q4GTpAWNEHBaYpDziGWbTWgBu6KTBhT2Wra2LAZVaMN3UEATUo87MGkBeFGu5fs9asEyMHK",
  "key23": "44r22oNnkbpZ6nHa55sQkfskPkVru8kLWPRrrQgbUzT84Q7FJLVXneK8fFF5aEoAi42FzqvY6Epi6RQGSG7YjNZo",
  "key24": "4FARxr4zr8p7LXZ35B5C6eM5DF7Liqxy5n2qceyWn79iB8TYqSKw4VvCfxndGPzQKe4ic3E5ajmk7e1TG9oJq67t",
  "key25": "2qmK3AJoeE7zXu3Kr3FpxWhTkaSzcbfKKFtiuPEwmzmHQm8ajwEjbjTQ2KCgMasEHExmnZfM3zoWRMKWjAgg3bXb",
  "key26": "2M5XtVfNxpr1G1FSkwNmVmV3LxRVSMR7cfjZYM31ZPd4V5JbyC2dz7d6MdWrtwwRXa5p7af3AGcviDUFCsUBsSfK",
  "key27": "5QwESAEBPCh9sy6HhpDKJuZj2Uq6g1DcG2paDJGP9KQRbgANCzEq3Yygu1gYkZo9Vw71nRByTaWYATJgsga2LiLo",
  "key28": "61qb5mTQeZpHp77eVHmsvKz58msjQNRCESKsofo6U1i2ooaPRSFiBgkBHGYToENqH9i8GPWGGrgpsXFqeDZuhbT8",
  "key29": "NSDZnyGKd4rTY98XiEu7QGSE29ZbdLZZCqKBPNd2W6dwdxwKvdu8hqkHohLfgAEe3FKVAMhtx8p6s1dKcCjtb3y",
  "key30": "3DqB3fboq3otu97dYRpfwX7w26gig31tkzUja5zmy3o35HqvDLgxFwts4TfpnkRFhme38dewaD6NaYfaejUT4gWr",
  "key31": "42aGKxop7gehaQ7wQNYcxH7jfmenNoLZT7uMhf53CdxVABafnAisUEdzBnXj53euEjTd2SeRm8jJqnJBheK4JRvy",
  "key32": "5VYJfnYcVH6Fr7Ly34Tm1unuQm4RoWCxDvXiShe1LCit5rAfnWhgT7reFhwpW85ENduNyXZc7z2m4W81srBB572C",
  "key33": "4A3LpbKRBbs9zf28nFMccijfcsKK2mvLNgNGgtwtwd1EfZ3h91nWKg77yEGDyqUcRLCjxeN21HKxCCtqsGX4CCRR",
  "key34": "5QVyrS5Yhzfmvjm69i1rzQtRMjvuafaF4rACmLp3rswGqZEdnJuV1Px2c6gPtbY4faEnNHCL6XrcFpXaRxSaAgei",
  "key35": "5suBM4AgRjEQne9R4onHQTGhqjMP3VanG6yAEZmzu87LRCuqJTbzrzf8STLAMxYoD3sLLQQh5s921pLfw8iWodx7",
  "key36": "4SNdwb1JxargBg4VCVi1zVFzHXv8RGLkx2EmzTp8SQXfHC1PceTUBdqAJwE6PsvKspdcJsf9AHNHKmfGiYPwZwaM",
  "key37": "3JuLiTEF3QioykehRD1N6Vtiv4Bs9dkVb3fpwDUV38dnrKvZpMr5zc63ZXUGbyYp76HFRRGW1RAoA912XFYgm9Hw",
  "key38": "4A7bA1zY6fiBrP9yxt5JeaDLwFcjA8WJxhDHpd9XPGRkKspEy73hR5kqAT7tzNANaGoYDqeJ3fw7f5oXiKcx9WaJ"
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

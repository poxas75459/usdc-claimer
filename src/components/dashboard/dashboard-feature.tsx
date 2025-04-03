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
    "2BayuH19EuuMdfs1Ci8p7UmrvX8Lbr3Jaa8XBF4iatcgf4SbUmTKcum3YkTCGw6f5kxr9dkS4q8Sx7QEbmLcnQzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DoBaL8DDRfyqJhdZTb8dEHzC1Bp12S63dBsE3XdwgkjZ1vQH9XwS1rAqEYpg7skp3QK8DDVGW19FRnxg8uAfwPu",
  "key1": "hNWVCJzpU1FqPJkEDsvB83Qv5DbBpuggDiJGF6A9axcuwXYgWT2ig9q2rkog2ugtRvfGscvBhPF2PE9jYzZP13e",
  "key2": "ShfMsCTJ3eFEAapaDWXFkebeMrp4kpzk8NpTFZUAPrJ8jdqnhRyXRJEADHXUwyYBjMDTftVvdL581ijmoRWXiWg",
  "key3": "5ALZAS8yiXBNDXCm7RT5mSjqeQfLAeE8kwmsu4woJUuTmG8tjdt8SagQkWtmzx5wZijbEkmMnbHaasqbUvN4iXw7",
  "key4": "5CbsYh2xgwc5HnApzzB2ihR3iWdzMxC8gxcRhu5QUj3MEFv3iqjJExPFtm2RVFxN8wnwGNTWVtL1hwmRBiNQymGe",
  "key5": "37ittH4eAYq24zeNCJYZFGbwePE1rUF9ewHAkE6vPURgwiALi9LJsWtc9ge2no139SJpdxFisbPsCYnu4SHGb63U",
  "key6": "59bbUWxGFBkS8yDVE2qCJpBRaBss9r3SqRh836fNxkxPm53nDUdW8N68jRpzgjytRZUkFArUmeeYbacqtiYw55PC",
  "key7": "54hetMQgyngeY1hJ53eJKAcEot3Sp2r8oqLreS8zFmhGX5YW3UUG4agWTKNkWmUi5KZJ4bosPWuKyDKXRdkPVptQ",
  "key8": "5VQ6rs8y4G4nR9DZr6LsVytBNcYQH8fQdtJyumvPB9R6HiwqyMqFxAVwHTd91sGR2cywZsrqjWa8QMndMfRWDufA",
  "key9": "5QyeS5UKtVyg1S3CVqMZieYM4RxZZtjC3DFgvBWVumnZCSzk2JQp814ic1fcsw6wTLjUUoUUtA9wNxygM8979oRz",
  "key10": "59kVyorhhm3wheR4rDiSH3ScQ5AiytWXNRtEiq3SKFBf33fLWumVk6om2jhU6xRqB2yidxcFZenj95hJWSvJXtCq",
  "key11": "2qa5jca58fvuKGtaoFx2uuooXg1RdzT55PXPMLCHTxQERXgfe8ZfjbyuH3sHJ5Fwi2DHcjziaveVqunPurQB2iaF",
  "key12": "2fWGRbHhSVxZWgsenCxhCC1GLb27LcKxtpsFyM9Nm2EXo3a6sxvu2UjPGiRof2585yFszRjMMfmt2KRkzjM1Q9VS",
  "key13": "2wZjgPo5JXsbsw3gNyH3oaTN9MtprbRbnzbJhc1ny5VQ2eZZ59x7wdEMaFuUG3z3YdyLUwzPWXFbB81zZbtXsVrv",
  "key14": "5ubnVee2caNigz8anHtWTthX394v8bC7HLgHXD3FgxPauLfsVcwJEtX1V5M6GzghjB9zWHSLtvqxvMTbwChf3dJV",
  "key15": "53UCVrpE24b9fgbYLhLxXvGErHctxWdvVHPKiBx3gdapWrVqrqQjVbPYWpyh49tTDkVmBSSijzmkYkhBTqTQetLP",
  "key16": "2CYT6y2wgqpdvFtEwwZY5s8Wr9gKFUoLaFDfbeH7xMgW85EEHjmndYFmF2q1SruHUkiMoAhhJ2ne2Pb2tCZFkvbk",
  "key17": "37HLaU4fgLwEBeWdwi8Lhoh1SYexVEjiZJT2Bfq3wkaKXpqpPqZm87ytMhHds24MdP83KkLjKhKRtTWMyogZKWwy",
  "key18": "3E4uRxtxpjWq3i7ETkbTUYwGh1aGXvRVXRTgWW8wQuvgw41NkP21JNRmq54bkXinM8bpzL96d5dd6pkJTTGDw4gK",
  "key19": "2KKUjFTm67P1G4PsPovSh2iUKYusNFPUMobUqmP9mbJvUxFCPWP3roimhxszNLFaZS4zuG9rg2XXXugbQnHB2wCP",
  "key20": "4nUcey3BR5R5deaPhw9w5r5hXCQxWp4UqtNezmwh31evK2L8HaxbiDs6ajySb4rdiRy8a9DDjq3JkVgj8AFPCYQH",
  "key21": "2u1VUkByDQWU7uiP4qyAjiSDB9bL6r1xvbWoDdasSuBzwzxTJ1C921NkxsvUbjMseBK5DeL31zpzmJ5ezimyA3k8",
  "key22": "5GtP5Qq7eASdEcBHHh5UinQJX8ZqihgWNf51bnCYytEyEjrJkoT7dyxpQC3gmvPDzmevbNNapvKjaN2b5Lm3gUEb",
  "key23": "3Bzzy5gPw7cbYErSD6EXgSwn6EFwJQQdVbDpfMaAU1WsSG8vwLeNYrh9VgkAzX3ZddSZQurfrm1MFXTuuYReZqjC",
  "key24": "5hSjhyzP9SGX1pCDYiwACRS9fyMgSdXhwbk5iL2L9GSFVXzdEmvCwv7Ltyqcubd6G2qL2Rkjm7Mb7dWFWgFuZ3d3",
  "key25": "vea7PpizqHJvmcY42NKMpUGqxGgq126w5XTfM93Caydhh48HQnmYCxgSULymRkBNCzy9MZ1YXSDBen6YRVTsEce",
  "key26": "3iyaMAXnTqVeEht6sKXv4mJ8tQ5Sqx7Jsfg2GVVNHomMyNF1cs5qUBNEor8LF4VVR4JArv1V6fXxJQz5ThkSaqny",
  "key27": "3i525B4C3u24uuhJUVdFZmc1qdHqLkayZXqEM5nYgTrhyAUmCpNDgBXxqLG497xWZoeSAevt5MeAWPsocKohHQHn",
  "key28": "39hD2u4rxq5vqRxTDuSYwj8xRUUtsywtmhFCkFpZL5dQpXYaqRqTWXshTThSc2hMpmGQShtvZih2ye7K1RdQzQjq",
  "key29": "4FpijaLBR3o5K2mM1hcEjqoYzmFdnf1b7t5c9w9uzu7S3d5wz69JNPbjhfMi3aLJiz6SAbE1ch2aHFN7yhk4GrNi",
  "key30": "3tYgiGb64pyNWJazdgV39pMhfxTA2agTcPvQQ5pcNiMf9HZGJErqjBwNd8KNs9zdDwJjC47RMbDZNrsXkstDz4iV",
  "key31": "4TngoBhAtunHKJtbRu5bsiSe2BdvbXSMuGCBzJXdmUV6hLeRTtmoc2zMiscGvDiQz7gBZhJTMwGF4Z6KrrjvyR97",
  "key32": "2iUhpbYH7RcwcBRYEE48VG6zJNnuFZmaBFkJKshEqhHHiN46akchcu6sogJk1UyW8aCEaFud3o64vVuCB4HcV1te",
  "key33": "4V4689RkvrV6NBxdvStHn8Hy3opAQQykz4VfT1va2LpuV447wvA5X4jd6g1ByYhWrA2e9Ys4gWY3a63R6nKxknkZ",
  "key34": "3Ftg6TCFnqV3LvjvUu1spAF9FbtaNg5UaJNSFroauATHsmDint5DWeGLdvaRRZ2zKGQ6A8bL7SYNH1YHn1auTUL1",
  "key35": "4e2qZtpoo9YmRjcXrndDstoDt3n1ThRgjNanm7rZSSMnAWAh8NVoDz7Hy3XQ1cMy7GG6v9FafjSQgtCzHpoNe3DZ",
  "key36": "4W18SYoowHQoJd3vP5oqLH6oieKPn2oi2qntLQYAACEWRQWBsp9bhbT7uidJYTkUS3LPTjsG8j1HybbmBYB6sdaz",
  "key37": "3UySK8P2BDVRPnSV8PFUvp3yQz1voY1DzbF6jLRMJJFTPtsszXuMThJn5nPBXmpRtoNNnstmAu5cQrbwcAmSKzJn",
  "key38": "2qwTE9psmZVq9cpZTnbnzQYidW7v1iE1Yipiwb3f1ZaAh4dfAc5VKWEgQCzS5shf8AV2kJpYtxjX8h5h9UoZ57m3",
  "key39": "Zw3BTqSb51w9JMM7D7dqHxopDe5pSnNppumcegQemAAMeE2FbvZqiTwduhmPjimYYvQnuwSeWh8HDTpMLmLsf6N",
  "key40": "N2BSfRU1ejokaeazjSBgsXgsXHqZSKyWUjH8eTW1b8QFMJ9YBCy89rN5fomUrzFY6ffC9HJEi5NAzii6AdjHo6i",
  "key41": "5yV4FpeA7yZgy58P1bhpEYNouJqj3jExbrRHo56oNT7HKhcpLTyDFqFTg4HFDsKZwW7tsrs5BLyH64wdHN2jF6Sk",
  "key42": "3h2WHugVJ8gsgt5wzY7PS52cK6mBTwdgezfar9CLptcCLyrbpznxRawqieVa2q4JKpvKBTBFH6uP5zANJrKxRBre"
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

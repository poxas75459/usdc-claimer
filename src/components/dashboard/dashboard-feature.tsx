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
    "CG7AqoKcuqp7wmc2uVWdFwkL8ociiqsK5TJCre1ACJu33JzixENdFNZh7SwRxwK3sfZJnx5NVXQVGgsCVtaqKEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqQoEhbcFFKLg8LD6R2edGxwixE89rpVvrBW4EYUaKw6MYCMeiTcTDgwHAQJsKzKiGLmuxfB1fXNXWpzjLw6HsP",
  "key1": "62sw2fHCHXdwqP645AZK9zRikzciwLMNDRepkhbBGVPrDDeFfgZviMiBYUTUNiWE7Mxb3JasjAkzMzwwVHut7Co5",
  "key2": "5B7iiLDddu46RGsDRHwhsR2GaBYtpLyipNyy8jzRjy2vgYVxoyhXj2m8zK55MCGC42jgHwNMY8Z6JrnP5DSGCYiA",
  "key3": "23MQT3zwATTiGU29pL3Pgq1xSqAVSEQSLRJkwi7QJLDVvieJB5uVUvpZ3SnazoBC1oAEKwVEtvtCUdXtyM6jdc4S",
  "key4": "56sGYrTwcT9vJfVWxbe8fKZkCUqmT33ViwdTQPW5UxnzJ1RT9VSGDUQNsgWqsjDQaDSoHYnLt5nKzJVr6SwSYfKV",
  "key5": "44vsw9mJ1HSCQbV2agtYCSmMpwZX2Lnsmw6kf8J58NeaShi23norPnPCEviyJcnBMX5aifgfFu2BRuGFRJQnJoGS",
  "key6": "526xQap7M1UNBorkz5LFy5prc8r8v55WEHBYCkVcHougmQ4w83hP9fojoengFknYvNDqPKQ3JhCERDQd6YYYxmXe",
  "key7": "67Bfz45GpJdnU8kZkxod6i2x5cUqqtdcARvLPCSYdZNBTPbJrN1gkABwMmr5apwxN1L8Rzrcr3GJtKN13pwu8JQJ",
  "key8": "2cCQRPJJCtkTzkwNREU75FAsW9Kx95pT7oKK4e25PYt8JrvtS3YRxbY3Vts2mvYmFi5vgEBvfU6NfnKLXTz4iYX",
  "key9": "2a9A4De4hpjLMRSciugZ6aki3gnsRY66paP8VmyFfFjnZfND1djtDCpD42mS54c3YCixn2iw6dve37v8Um6enzTb",
  "key10": "MUk5wwpjTrVvisApabXnGim3WHEBGWQCFZrSU9rihsmviBdcXhbNitracK4wt1pRWFzbpV75gBJSrRrAHjPidLe",
  "key11": "3Aeg35t7EfZ9wuh8XKPquhqqw7zZXadZ8oG8TwrffPhmSCzDDVm3ZGn1tDwy6BinFn7EQVpJeovRVCbKhpHqQwfF",
  "key12": "Qf17kdAsKQLx5syMXwWHCZzJ6V7miFBaj3GnNGEyjZSc96RdwTMhWzznHfULB8cbaBQGNWxLtoPNXpCXUZgm5YL",
  "key13": "581e4Rq9UNRCuw2q3eCubcUHyjzsMo1hgAd7Uz4fd9foNq6yrCgj7NkmpyvVyc8CW1kxvhmwxitLV8gDkeMNrpb3",
  "key14": "35cpwvoq1Fxd5MEAe7HW4Kvw8aNdgLvzhpL2PKyhkyMCAu8HoSp76SxmE2uAs1jpmiQLo7Pd7wsQJF6f8QHfgJ8U",
  "key15": "2uAQQBBGTTGDnKFp7RHvETyf1mX8mAx42kCpZg1ZmBDSUxPY8jYb4xygyMbro7rydKb1mh4UT4WCMsqQYjksRncm",
  "key16": "2Rvs5uNy5pNiZGKukkxSoN8tKf2pp16aTjrpaLKukAfVtv6DVfdc2fLJJnG98AhAofNdziuPW2ZEuVxQrKejHGkj",
  "key17": "ubZqfxt7kC8G8UzxWLGBmnVMc4QurQUjm4koCX2T39YVYEYugYKNajopg45xLxfEBJ7genmJfCUdyLU7Ye6mJwd",
  "key18": "4GRDUAhCNg9g7bdAN5XByeMqKCNp69gB5FiYfNDoahxotSZwjjv8yiVE6d4mB85sV7G93PMZ2fuVxeqqdxp28tF5",
  "key19": "42FQFDJuvEiVihAKgkWXZiquXV8ydjRGhZasMqQpTVpPPqNhx6vxroiX923ym6URBv6LK9CucTNtMNLB5P8BS7R9",
  "key20": "3Vaz427soizZ7eMUp5BwVTXqbPnna6qs5qx9GGt7BFCpHY8wkZcX2ZoxNzvUnU3h9GLpUmmgoWuS33DqG1jBCjdw",
  "key21": "4sHGkKiggzRmvAv7RLrZvfJiuSx1DqW5Z7rfJbzGd5h1aFmcGMpMGN4SNXXjTxTD32FKbwDShJmDkYZdiV2Les1",
  "key22": "3bnErJdyVMsmoJA3zRDVE8eYgqqxueLeUyHo7CCd38VLGMK7m98sBATbBquCRXACaiCK75pG65crYwrRA5K8eMPo",
  "key23": "3GCcZFWDBC821WdNyA54RAnHxbcxJMq7pm4pvbDk3kRYo6eFCY6utBuaL5u9MTE6RyhCoN8FETFeFLJu3A9Wt7au",
  "key24": "2QzFQEP5HJefQWBR1Jc4aYPFBCvkwJqjsn71Xq6NuXsMjrWv31fciPFWQVitLaM8j7VDur7iPDxm5pbjoSnrF98Q",
  "key25": "2NAsWcrzZdVCxkfg67nS249oo5dWBZnXzYmoLMeXDSNB4haxiFKDQSZMRCtqU3kuQREZiPK2AYX5AjByYqmjVVkd",
  "key26": "eo1EnCdtyicWLA26U5s4R51JgkWh35Pi3pUc5dGvMQNgACvVzi8KfEd24eVgPFTaMYaKkA1id5vq9iwGdmXQCc7",
  "key27": "2X7XpQggKkmZRwa852yFVH3EGJBvBdcyqgDLNRmdwfXgDHYjJKCTAR9ZSig1yrnBaukPnkgfyaRom9RkC1SrQhQw",
  "key28": "2Qf7xLAAhwjCbqxi7AHmEGGYyJStBY7PHeto5BXehwbYEz33wSG3ntRuuygby7QhT3H3gErLUMUJ6a8W7hXzE9Ry",
  "key29": "5Mxuxx375rwzCjwpySBQAjoh754J7HYJqw4VjXPSjSZdyjXVpnE3Gmpz9cKaB17jSVH9BCsUr9QXimyjx4nQsZb4",
  "key30": "3PtwP7dFWoW1NTh7WReXr6NLw128JfapwQ9QszQE8mn4txP62Y15ingRMz7nGBQYDTws1BbjpUQjngHVPxaw2BY2",
  "key31": "63D4VBs6bgKZBBBTcFpRFwCJkU6DVgKV9hA39dc7eCSHsDqqQPg8E7AR4jAcs5tRDysKsXuHZW6MiNUEPvukJTZM",
  "key32": "4hXoRh5B7h6DiJn2XGdSVQ3tAYjZLr6GPpZUHoCW6H6iQvbpdMKZvBjtDdu7q7JzFx36ajhiv4QGf5fFMCxJimio",
  "key33": "4LVibHYTnhunKnG4wwwx96pnxZ8PewAfkJti2A8MAcHLZJ95CjLVVPH1Ne5Ywj6ZtM2RAuRRq5m83bD7bkWR3zaR",
  "key34": "5ZCyKtz1CGRcfhXGveaVj5zfoSYHUUW6NATtSPiJqS3E9HNxvNjS3dGB9Mhn2ww3dbxeGunX18YvVEXRSqMxnmBw",
  "key35": "5RwXWLrBprxTBYpdRDpwdQncqsLeFaYuEa5ThSKFPpLwcZA557vTFn61K5sCwpDW4Jj7GNjZ6Hy8XGsqkEssqhzN",
  "key36": "p4QEyRzjS6kecJdWNo8AwfQarCFBkTfaBmxYxS9a1GGeT4M7AT29bfNbtfBLxxoLiUeCC1QooLNF9BN1WDUG2Cn",
  "key37": "3JkTDZ779JSpsYZygxayKhMXMRd7kc1ejC2vYs4oVngdKoEsTroo1hqdaZTzjDSN7Kk2mUsVj9eGRT1gu6Lc6Mm1",
  "key38": "53Vfvz5gu595bg2TBXTdsq5VLcKHfxXpA1xCV8j53oCZhtF9StWXaGmJM77dfrP4rzBdyBoeS9CuS5GbC8uQJ13Y",
  "key39": "3Bm9z3siKBRdrJrcJbGrXNqV4Li7NhJC4rtjHggo6DMKwnhqAxXHq5VqXJUswmdq8fibDqYBP5STLQmzBfKwMSBo",
  "key40": "5ph6jzr6a7sthtihw4wVo3JXxM4kPpzH5Pw2YhFxZp5yNo3cnEDxkCUuyFjkaSFpZnLiKRPMtUxjVfqNRyriSaNo",
  "key41": "4ngmav9Lp8bL2upBK8r9GUCq9eCgFdV6joRtS79EdfBWbihQKwXrwBW58jNruD1urzFh7Bk7t7kAkqSnL648Sf5Y",
  "key42": "3NrM2QHfBDXbkfPmRuQpYPFFMxefVZhf4KSTqmoECkaDnuqCaic2VHDc7nZc7gwn92tviEWeac1X2nudsRw1TE3t",
  "key43": "4tMnWUeFregFr2ckxYrSnzr5MSs3iwiW66xvHbHrEhqNKqmyUkpTgoxtYNL92GSwAjfmWrtu9td2WjY6S1qNn6N2",
  "key44": "5unhKtXPEFbFMjiQ82JGMmRkEqYXAAx1XF5PJRkA17QfNM9edPj1iE5qQNWC8v7sch2LxTMgT4qy61V8NiohLGKh",
  "key45": "4CpX7KKkS6JEs6ejXCmL7k9JbsscCv6Hiz2EaWRTKomATjmFPMsUXL9pR3FLoKmBeLtdAN25MvNxVctyDQFvr5DJ",
  "key46": "53AazYMVRJLdvPjzBUCkNPVDqbXa24QVX2ybXYtAbSwg47fJFmMXFmcU5kjQPeo1MEUJPDGMZgDHunWc2NzuDpTz",
  "key47": "45X9aoXkoxfnfD61jsUs3cddgAZpQ7fPiivXn4bNPmxuDjiRF9fK6u9Vbmpcmi8EiXDH8zKTubRr3SvsMvY5ox1B",
  "key48": "4wNAsPJ82YVCZimgCSATiBqN2kFKADfXqQ4PBaGXgptL1FQQsG4FGVTfFZqDtFgSoLxf15gfH7y7mX2mmbMp5JWH",
  "key49": "hbeE3pvLVousYV6TiSJv3BtZgpLc5vggvAFpj7Y3erWbyUKamC1T9tK7R2iKwLee3uNPaWVQMizoYGvdedNBuCV"
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

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
    "3ZgLu4Fg4HGCt8xCu4ofZFW4dhsd5R9JSGdWSX2o5byvvBUjv9F6vSXJubpUrfk7f39utq3vz4EumvuYTaDY6nQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5Qyxn5wcWy7yw7aKDknpMo5TknHesKzKTsZDkmrmUgnDNFSTZCf71puaFjX9ETJkyn8j72ZsG7tasAnuHDKWpC",
  "key1": "3vid26Nf85o3uRRvMwtoq4PFvejhwF5YAQVDt1TudeeBYhvdTbXKufKsWq8sicSmgZDvt4f4ktRtW4f8AmXVJNGG",
  "key2": "4dNU45BkXxnKobiyPNBor3CaHxMhVjXFCfQ3iFE1dqoR1qZiamDM1m89yJEdechFHD9i2461BwpHqHx2k42gUkeL",
  "key3": "36njjaWguqfapLHzgTwJFV2HJSHC82idNmw8AavqhQcsvRzC3e5YRcZrMQbzyYSHwz7faTQYdHr317s4ez4fDVUr",
  "key4": "58rYkgspKM8vQnBJkPwaD464wSnwVNWb3o3Qxi7BRAbF27ynbehNXGZkhcLgUuupxPa1DEQfcZw5exBwMrK3jecV",
  "key5": "2KS1bSqQRve5WanTpukjjmKN637wS896vJvK3L8FJdq7TeG4N13Lwv6efoub1k5WJEdQXJEc7VQ9WSrra2WUFsVn",
  "key6": "JYaQe6viaJT66EokTwUs1yPw2PANq2xDUu6zidVSSWEvmkGU73wyiVCJ6NnfJAbyw7yJDffXKNJZUVxdECakQqE",
  "key7": "2tj6X96zVotYJBYHkhz68ELD2xpUPSe96RALCSQ5FfwD28ivHDtwX8xLeDaZMMCyzxnSkv85c87rjkvCsQfu6kes",
  "key8": "2N46Y1K5ZQcdD9QDWCDqRi2ar8SaG6YrNkgjFTK8gu16rwyD27RFEfmGMXV2GPsXpK9c5r1aGpKdu4qyhqkqFR76",
  "key9": "5PYVohG7SpS7tP3rCkMF9MZGw18BJqhZAL6Tuj48zsYdwo9AdyvjozUwAorXdfDkKMKRKgpWK3k2HnEVhoB7eXfX",
  "key10": "5voY8748KSuEQYxVb3GE2Y4PcTSXWMX3ZXGoRwbVHUyFe3xZfbapAzCcwBAFz5YjU1Sb55mnGNgzwGodxSx6EjhT",
  "key11": "4k8S8g5rEv2rHEvmRvqj4WTDbGBN4MTyCtVQ95X335a1ba84urWjdWsweKtRt3t2xJACYHjZHXNJiMhbCxj8fDZK",
  "key12": "rEsm2Q1o7xtRg1K8h7AJBozFDRFRijWBqzuzFvT53XcyRP2vNcafVJghcBnUhhZCB5Drr6qh8zVkYsrNVivhEsC",
  "key13": "2r4WMwogCcfrrAbsaFZLTwjEEMw8JCHAMAtBSMhVRPQqKwxymexjsqQJHB8rsBMipEY4vfc8GNGm59ZZYxuQmYjr",
  "key14": "h413YsAZft51it9UQe3NoYfa4DQdpoZCp7WmGwFMrcBmL8DapsEi8Y2fN3oJu2GHFZbhXpwJw298kVQyj81N9Tu",
  "key15": "4gL7nKX5dRkrbTkjbpknuXeE7f6zVVprWPvbJHheZqyiLwTTXYb27uFTG7jPNU3snGnDupt1H3QA6r4vz73UL5Wh",
  "key16": "2WVchXcDpEnoW2Su1qdGVURdDNFqbQjeg6YiPQ5xJc7W4ChovL82D8xCCENWQU2gKTySVgjLyGeZv7S7uLihN5bG",
  "key17": "5RYnEniwF38SauqQaXwdvwLzzgJWeWuZRsguahqLWz1Bci1gJgnJVsS4aJkHn93c7uf1vjfQUdwx8jhJFrLq7a6u",
  "key18": "2ei643xpoGALSjFhNRmEepcME5LydL74AVPNfz4kGmNMqembmGtK6NbbfMybwKAiVPt9G1T8wG8Rd9rwa2zEAjkY",
  "key19": "4jkTpcYrUapuqxK1QoDJ3SHKeNKe7CT1Mj5wwzULqpkzAPXy7YWRd4tBULj2XCbY5rvPXUgyN3PwvQrCfpv4T3Rx",
  "key20": "5NcwMZTYMoLZDCrYVtZcfiW7NPtZSLRc2jqrqkiz199xtEvjxVLGntVoS9DSoMvNNDiUvPhY2xhESTNo54naMe8V",
  "key21": "Af6ZWoPeHMpREMjj9EH8U42wFqJNaKtnLGbWcCD8Gzk5sbAXGuDEzu4yHSiouvqXWryjcBw1mq3cawS8Vzf3qNF",
  "key22": "5KF68GbbHkgG1KZfgdotJKxCpgRhWfWcB6S3pwbAhtHkFfqxRqqXt1FBbMGCnT7DJXv8bR4XvAMHQLXBt2uQ1adJ",
  "key23": "4K2KGsSdFidkuXkUJ1h2wSAHJimNdGzVS1dsZpGjpjzC59i3NLDxJMb8RLgauEygs1j6Vur6k2bGBM9U5LmnC9vf",
  "key24": "4aYnT2wfEh3LPhDzS5eDU2dtjcEqd9Tb21AYnMbnPEiR38tdn5jeTaN8zyuWs4pG2VBB4cbg47g9bjztAmxxEk2B",
  "key25": "4nxKmtBDCvpW23TAn1EJC2zE2yBZfKmqBgf1WRWeXBJirMwkucaqTzxj7WgkzWCFxmkUeVbM5ZA7syQUvDdR4j8s",
  "key26": "57Fd7yckF6ut14HVu4KY61cvBrtRayCu3rjdwZTBpQuJvM2u2JRy4GcBy4EfMJztN3o6dtxKY9XhFCkDiKtKdhzG",
  "key27": "5gA1Z2TEKKVZkVofLJyCZhjRYBXZNTJW7d2i41Sd5T3C1ReVhUDwHwtNQQFy6pwUuGUSEgG6rH739KqdMyubD3jJ",
  "key28": "23wNht7426789aL2eXNiBVVHCK4peqnFxMWUYNfiEaotwnpqnyQU2t5fd481FSUXsQLCDQ6keoMToqzd1Gr6XsFi",
  "key29": "4ZKW4s1ZimTH1BUZNycF2XdsTunKCnZXwY3QJuSac4ouwEd5kDTEbJ96MWoxS9KANRGs9ovukHub94wVA23jh1vC",
  "key30": "PLmVuuzReDrLEEzbm1qcLmKQE4UVTZANFFyc4uZ3xGMBcAXQhFgZBWTMc6w7QEDLBhXmgzuTjKf3SQiZLRw4VvE",
  "key31": "4EMDWM5p7cyGtRzFUu8MYan7iVe6LLweBoPKiELUQW3U2JkLhbAvDfAYV7bCkKt3UBCiTVGwgr1YCtreTFgHPaGr",
  "key32": "5BiiLCJDHA5JrFH1P2crD5Gd2ScAAuWbMjrmKFgEyFre6RLMmPNffhY8kXVSixg1atjdPQCMJY8x9BCpEFaxY3fn",
  "key33": "3EG3QAceEw13pVzBmxjfD2vjLcS1LLDxavS5bCPZK5Jcbsej7KDSHnfcskoeVmJmgzAVDWn6aRdzMvYv6QtPCSWT",
  "key34": "FLxgs54WW4s5PEsKXaMHdevwhzhjVJq2LBaTQSLJQ9djRBTom6Xj9PEraztzazgqzjTEj3GPav9XWRWwEgZVZmH",
  "key35": "4HnEjEEq5Bp7vEeGSEECWJsGs8uFgF21WqgQSERoFWLYfhFQtnVccbod94XpXgk5k7qYJJEr6Di25cjxdeBFfiLA",
  "key36": "5MMKJmo9fUL3fkN6fPCjmzkvgW74399Axc6qgVqNzyqonvC6HH1t2KSNzLa2ZtbX5eH9s61xHzigmU65F6hrE9CW",
  "key37": "5DRB5WjmpWTSu3Br5jxv5Cs2wX7uL1kX7oG7KC1KkY6DSCHdUpzfHjRtBdfogcSJH3jvjMLYY4VC1QDNaCyrsohs",
  "key38": "53zCRbDcqmiEBewA3zShrrGxnak1VSZEhGrMD5WnUomBkjcgQUXNHyXLanBxACghBPgmgTMuQwgKx8jotqH3dByT",
  "key39": "644T3XNNehk6oKCQgLxypuJ3BSr4oRaeEVVsiiYot9KAPAjmEG3HNqjk9UUisNVYRYg4N4CHjvB6VvmkHYmGEjBt",
  "key40": "5NeSX2K1Dkva24LTkJv1Jk6mbgX371Ldi8Uwd2wRMR1cuKE3tDG8dLbHTbnoq6dHgHsXWzNckWhNGs7WDcTy1HLB",
  "key41": "4FyurfcWY7WAaLyAExEcbzxqQMCSGo3DTzWmRMLRDUma6eMf7ES8mdHX3rj7utGcGsUL3uqM84rzWY58uBvpkKFp",
  "key42": "f3UCSQ9DCepDUi4sMJXipYRwiYz3SoUaxgCLcT3DAAYeF68PfR3JAgURshdPRnSxig4BsXrmwYKAHQSR4iRD1K7",
  "key43": "44pMkGne1TMdwcjB7WGPS6yhnDjKS8eYdmD7S5CDkkSS3TARMQSTqyyvugkyga44KCT3h567eGzJB7idL8QrhMgf",
  "key44": "f7JegtMr5eLboxnnHpxQ31QhkwzLV9qhdrqzqC2cQXKNbdaaimYzirxJLwJr8VvZ2kBj9RvRWGrjKuEXy2P88eN",
  "key45": "VAQT88broQB8zbASJtedgDvud7MuDnUJwDqat82mm3LxzXMBKveSWaMhJqbEZFg7UwM79YvdJAcgAisJJPn8zVj",
  "key46": "2zdzaGDTDRDjnHHbfoDNJwtk6u5kYFs3Mf98xFrenkKG6WKETTCBD2gA7uAcySM42KUwbovry2i3R5YCvFVjXkwW",
  "key47": "238mTh8vzFRS7ZegPoehjNqyUq3Kewh5VJXUySGncAvqYsTNKu1MmN6hZX7XtoKj7h6MdRY3RhZG9hLEnf8tRocn",
  "key48": "2GQ7VccGtK2xvzxkaNjqSUhAw1377oGvecakydmBhcHWTuNhnYkjGkSJwgx3tKWJbwSMYQugo8Mfn8W8TWZEobdg",
  "key49": "5vFygTwTRLtZ3dKb1tkWwcfpF2ouuabJRjVjPEcgvWvHaeJChzu5xPwtDo8sBEMMd1rZiTEjm2JwYtfsXHnnGDpY"
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

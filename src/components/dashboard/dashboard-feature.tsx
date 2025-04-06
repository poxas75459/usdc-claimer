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
    "2SFY7DxduPvBW9qodGiPx5bRhrbi8yPcJQ5FitF3K8J4tCvRysnDP5199bMcqNu1f9Nad4sMDhbgStAiH1yX6NK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVrzqYD5g57NhwaQ4chy5KP8D9fBK3YfKgcvrPrQBT4LV6RMZZdVSgmAqALRXRSpXHcT5qLcKB3MyszxeCyE4Wv",
  "key1": "3e1M2DkFuAUmmN4FiXnDSAgxb5fvooMYcgH2DtK4fFCXt1uT7CvtpLn8gFaTmr3LRkoSDh9uFYeHmhQ3KjE3sYVi",
  "key2": "CaWvbY8PBpxMnedr3LwiEa8TAQ3J82LJS8t4sNihsq1knqA3j3BNWskWKSMjxHBJ7M4EFgiRJPrhXDm9ekjwAho",
  "key3": "3Ac9sUcMcXgZERETYGaPSgYV7kgENYU2fpz3bQvAQYRqdtSv6kV9tWTMC34TRe5eHZSZ6N9yfmxdiDzVqK1TCu1d",
  "key4": "3MsigJBzwpnMNYs4vagGiQrYtSinmQig18pk6haJCAonWmwEU2Uyy76F9BMNF8keVA9o35qCZG4SAAyFuoXfkha9",
  "key5": "K5D4sMrUWjcimn8SRyAQ6JvHhwgX1uaUGAC8VyeNnjBptHvrRGgPTDPU7dBHMhjPu7VEqb61qYsG5EXiXcdNazC",
  "key6": "2UKRVZPhqs2QVqVPCS5f31H3qikpV9k7kzGkmqgBza7U9JDvA2axgx9BLANkLZG8ojn5ZLN38DNVGv3poLGasg2o",
  "key7": "z1qgYWcyZrFuEon2abbZtdC7DSMJWGGoQZBUfcJE3TC12sMgLrzwvyCePkAmmfs7aLyHTgyWuBksWKNaLDHgz7s",
  "key8": "2CKaoTdXX8qDJV7p6GeFQVGs4yZjryR22cpofpn5rs9N8w3sq7tYeQb6U5Uf36xNA3XU6Ue2ZC51ruqwg8Kc7hsy",
  "key9": "3VUv7PXYbCDLjubRT91wXVhRvoumvKVYiQvAW5DkpBKPX2ZmzPEUeKB68Y3GiqKmu8NoNesiQGvSSBW7mqLzxaUC",
  "key10": "3foytJjYSHHrK3BCw7pjjeF4cyZPiJs1UzTQjJH7rfHpLnuxgGZfD2m19ZpAPPFwTHprFkuHvjTBnrQf4W5ogvJw",
  "key11": "67kQMR4PkWQBrhfyxTt9MZ9798VRd3ehg9biHmkvqusMV9trFEn2S9XncAzQUVERkFdPTEr6gXX6vomShcGGbFot",
  "key12": "5YKCnwvVdSjiBS5uKNCbH471KW4sDzB2p3neHKrhvEZq2PFiAVUkh8y9hqs2qxBzdqm3V87uZkwKLvhM5ifAz7D",
  "key13": "4jj5z8qycaYrqKkEkn7zrun8HJccFLqFrrQq8qpjXDCEzs4CHGvAANPUAmBUhMT5w8GJT42rE6BfKwsVh1sEUNAm",
  "key14": "51n2STtA86Exdbxm5EqWmacGqWn1fQk9wm2Roep3ce2AW5FtLmKxsQwkSPqtMSpSNb52UxxgwCzaCsbFqQHYvnFh",
  "key15": "338JHuwfSHYtWXXvb7ZhdVcFM7LBpLyB6E8B41wtN6nmKmjpDEeHmpjG8bcDqXMwSuXEtboD6ixFUejEW48ev7Gi",
  "key16": "5EuBWXV2qWcmJHw3JoZawXp964UuUQphzA1UENx1rr57aUvqo4QYtUhAB2Gsd3YvjsEJoZo59DVb155rjhL93sdN",
  "key17": "4iEqQD5qhGQz8jpahFnPBJBoPoqbNTAGVkXafjwzWf2kXDcWnXAGYemTPXkoZjiXNqP5M7TX5BKKiKamfHmF2oYN",
  "key18": "3G9Jb4qt2mznVVNof3hYduS2ydWZKWNP9o2XT1tC9u1vJhoHziBcY2BRCKFR7F6cgfByjLGNUaax9Jhj31NtKgcR",
  "key19": "5F7w1KVABiPCejw3fdexXeG1dPwUTJ8AUbGGg2sszDTL8fGyfKgAQ1j8DTwHHHCWw6dcTYTJCiqfaWeDmM4cfbwb",
  "key20": "3M36oxGSgSghpgDGhaY8Tiy42mDZSsmYhXDi6gXTMYNv7pMDBUQfYuuUWbxcf6Py5fxcQL9eTCuFmMBC6KiiGv1s",
  "key21": "2mBHd4ngWGfzrwAJvfHt6EQH4o2YVyBoNuZgE9gfmvLNiazEhR9gNhvS8RwDRBL8eX76mB4uY3WLU7QYYP2azgjF",
  "key22": "5LByJKE8FW6KNF88VRmMFnciVFCEmkBEjJfN5RXKeuyw3nKtGzJ9BwBemoVmjZJH6X7TuA7LFfGXzhJYfwspvodV",
  "key23": "49FXn8aXVhKmzfZQ1eqcNzp54qgTN2nCLjWrZeEdpMSaR47P18n4has7ifhG5ZJNsRD9CrncYHGx84HzfaQbEwod",
  "key24": "2JC7czkpE6R2h6HjDcfy6M89FQmG1PbPJb54D82P95gqhoBWm62iAfPsNswfB1zpwbMJU45sV2wo1gzxxNgJbCLq",
  "key25": "rgsPyVEJXiWChrf4MqNo3G8WPGNxh47GebksL9Rb7vZMiRt8B1czBdrpKvx51LjnLbmDLmrkgok7ED76d5xfPht",
  "key26": "4T5LwPqh98rWwCaUYLTLosPVJ5YcggRKPzKBbXsRnyhnQNWooFMVnEhJdfz29uCZD3qonZh5E7MKNpXDNfaf1yTp",
  "key27": "2nLZvfZQeuvWzE8mrafmx4LdRMzpgp3VJLj5pRQ7yWqTBTsodSJmAxEvYQQtVXToHKf36bxviboJT8F6eY3fX5Mr",
  "key28": "kqrfmTGqEXrRvebjBz7fvaGnTCF78r2rrBqEycErJhGYqEg4UvdBYJb1neN3qwDm3qeE7iSjrme856tRGDmTEVX",
  "key29": "3JzKfQtdVDqnhRdcTGcLisxugqdn9xvERQmhsEDczKRcqExLbxYv4Zqf3QSSXVk5UWxczG6K5mX7ro2T1qb4GcTj",
  "key30": "2sRywvX1i3sYfxTywvCM1yLFoqA3pKd2cKdtSMgTKQbvDRvgdf4j36Jz1PRkaoT4aXJN4cWkUqHwudgYo1PBbHLS",
  "key31": "MTkP9d3moCgpUpvTVeqww2Ef5hSQxFoKGjcdXKjb8EopJ7WrFkenPGSCLYVpZfbh5tstqjk7ND6qypWhHd7Ddpq",
  "key32": "x8ia1K4WhzaPjtyVbL98TjvByykgoJLXbgmdnmq8Hu9JRzTUfpdkdS8HEZE62HfZgthp7qe14BbQKNFeCE1Zj4X",
  "key33": "3S8Uwj9Kn3DAsQ7Mt7jy8rGepBT1NGV1taQoAUuxA3Mv1DgijkqYieKyhRLWMUjphsmX5xFWK5UQUU7ar9HndpNe",
  "key34": "2iGsQTvaMmwLL3cwwJUkSUNbJKPcJMhrLQugoHtgzmw1p4Ev7mAtw7gBVcskPTf3A33cgFAibLRqbLyU1DMeTLvQ",
  "key35": "53XrxEUmBHvZc2EJo6daUMVZRaPtf4pXvEdZWkL4LqdyQnzG1K6SzFyzMNPgJrQFbsuUFtBQ4PfZiNy8JP4MFgYq",
  "key36": "5Kf1PsedMeGCuKcktvbti22EMqyZ5oJqqhKgmWm5WvNYJRjQwiG63QtrKXzeMpXQJTSJbAcVvQZhakv18r6oTRJU",
  "key37": "4E51QdppK9KXtbEPFi5UM3F6GZFJ63Y3Y9fWT8kwsTc3qKFPxgp3QfKfBGJoVnqo2E8wAi2jbceeUJ6cefFLu68r",
  "key38": "4PM5cMop3YA48chPMpY3M5X6bbnhLwufT3gL5qCB2Qbj86ByUWpBUs6gjUEurjNoY2FEk8aT7WiQz3fATRcq9o7F",
  "key39": "21qgyQ7N43rgq3HMWHh4eZddWVqMy7ZFCtH9wLevqDPNZ1t5hYzD6cjbitoAwFiLi5ne4eWEoEJnhP3cgwws8Wku",
  "key40": "4x7zqDQkwz3zg13FuoUaXvneFiPBGuaRhXaXWQvr8WLKLFFEGQDjXkz5sWyPr4EJr7rziQjdbYiv6j1SZzjGW9BA",
  "key41": "5CzVMLjjB7ecsikTe1h81JZzayegM64agGdXGrCfXE3GwiCjivBCFhgDV6VPmb7D5WpnmxdtxanufpjPmR6s3DbD",
  "key42": "2FudhUg17pq6Xao3271LE9pnEexSXeRBkYct4txpeGsBbZQVwkHznjXgmoiR9FjVhJMfiw5ucVwNm8xoE5vmYQDg",
  "key43": "2XoVH7yyV8QNzgyjF4msTUQ9LCwu31NbhxzUij8zXAFC93bT19mXwCyUNNo4Xco9sb1C6w49881qnhnj2pEfdkbW"
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

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
    "4HBWHcuYxqiejD4eHs8z1RUAkH1eZ7hRxymUuHm5nksaBTFqJa2CNMMRVWRzXDqPodPgLYPjam77otByD8LJ2L5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXscNdEvkp8GHMce81wgD1it5PvgQdqqRSf18PKzc2nuVgqUXf58Azi6M9Hh5RcUHioC8TGbSVz1gieu5JppPx6",
  "key1": "55cUBkKshPmZXePE3MNo25vVQKZMgZ7Ja5eaGtjWwpeHoFWdcmRb1xNu6CLnFkTzqNPAHkQ2r4qwLiuMMDz1nVec",
  "key2": "2hHv4nKxwBqaD1MJ4gu6TrHrYnbNXCrp1HHvaUDiYppDHBwiG3z5CbVJu2xbuserEWm6CeXFYkhzJmnET1Uy4EWQ",
  "key3": "4jhrwm8JVZFgPfe9TqSed9LvPkvJpqbYYcje31HAxqdxqFShnxBNGvDYABeqqmVvqqQYGr1Xnom8ACAXnn7FdUDe",
  "key4": "PREjQPUhxahQZXNrR7kBUPQ95HttdhW8ny1GwmYXM7UmLLEv4cE5Lo59VciFnVLLTUroYv3r2xQ7ojNFdLLLSWt",
  "key5": "4j6Ngcfaj9LqYEshdAxLQZn7pZDcMowT6rjs31F2NeKJdo1nwAS3ZdnreLc6nunpcjJi8jbjR3GHR9ro5bQFKeZx",
  "key6": "24CPG4kWKm6rLrye1MV86ukoUj2P7okG4rCN4T2ZQBj5AfLFWh9qqboxUkYeNTghnUSc5LL35jtz8BjY6yQUMrDM",
  "key7": "3iuMi7TCT3H5XcvT247qJXowzK3T6pDU3LarXpAcX2t5LALw4G1z7718Ck3ZuALPJ3bKe897M9iWvwiQcNx8FqJF",
  "key8": "3g6h7T9VRFqtjomXzQHbs3w26kgwJvsSjaLwGTgobQDE4e4jPbqBUj6nexaNNykkASyHyiYEFESZ3jKrQhXWzUby",
  "key9": "3QmaXtLN2hufAT3cvoCTvr8U4TLHR4pBwusjwZX1uHKJ4FYAdCZJQ2kGxCrnSkxSEpStsSiZFCHiqFjZT7fPUUim",
  "key10": "3wGehHQUH73YowVxfBATm3XGPQW69vP7AyeYRJVeTiL38TJ3ZMGZwwcRhV2hAeL6SJw8VwxNYb4MbwZg1DGVqvff",
  "key11": "2h45kE5k22gFHnD73jCu47bSkW1BDFudWdsgVwvgYwSq85evbz58r494dCkqE71RA76qkZbsNdtTyXPFusi4iqLN",
  "key12": "3TX6tnrX4zBTM62g5SSMJRvff9pecheAHdUbvJGZhbcATMogtWGxBezYKW8LU5TFAk65uncyXDrMa8wYYemHotVk",
  "key13": "3bxo1VQyMduYkbqe2Xmo7ZmpfwX3uc3TqotjdsoEp88osVBVAhzQrsUJJqtzxLhkvKqmi1QvarWNXVz55A6CbvPi",
  "key14": "2jx4ioQjkJFiv7qPfTKZ3oNP6aR5XeueestNgMtj67exoUVgcFpWATk3GBEPr8zhD5MzWBACWDATA1SStaTLFgy3",
  "key15": "5gKJEQehd58UFW8frnSNa7TFAtsSPBRiq4kLDFv2xHpgZ2swbbD6WPZXBbZF9SytHjc4Qk4DurMWMWJAwMsoPJ6W",
  "key16": "3bdhYsR56BdF8ukYZnghfZWRa4ZGdjrvif8iBY3HHv8BZCXPQxTg5rRJrWFb2pQgPiGtS2xrzmciGSGzJxAC1dtc",
  "key17": "2t7pDaoNxvsdTgpuZpfZYrkMyfeRprtNkXdgJjFAvMq7mg4RyA7n2dvo8Ho5CFL3QB7XkxoL5uXNU6d5vZ75Yzq3",
  "key18": "4GEH5qn8w263MZvziqKRcebKr92Y2pfeitQAi3B9S1aY1iBDaPVgq7wLVT6s5NWqVi8XD26vB8Agrh4JhhqoPqr7",
  "key19": "5uw9JSbFkpKePuMbJ7kKVFAJ1QYQbLuUmkMCnCXrMXvKD5zuwdJh9vNXnTURN74TkiwWhw36MzLqHjT3RG1Guuz5",
  "key20": "3fWNjDRbv5JLXb7EQUHj8do96XFLs2BqLYiMFRZtMdqw5mPJQaut9pWxbG3d4yR9v29PHGyG8ZpuoZRPAf9afSQi",
  "key21": "4KgfHFvuLviTeGqxjDaatgNfPrbE5vNDdfKjA5sRWatsF8moub2VgAfazYspFYbG3CTVkJq25kpTRhrfzzzbG4oQ",
  "key22": "4MF5hTqhN8qHmZvgn7jJ5VA5G2D2kks935Q6yLo4ThcF2DjB2Uo1PD4vFVMW1pnHwmeSMAzCnHBDEYPrHXPFCaxi",
  "key23": "3tZhzYaqXWfxJBLHjEScqvcsbo1gRVJaw6rvcssUEWabX5nb6ex8WSFS2NrzFFMmfuHxjDau74sywT5S4b8BQ3cN",
  "key24": "3ULrcL2SgB42suHCHDwPh5d41Pp69cdBfZdZizJrSeZM9uRDGsaYrnp1yX25Cfsf6XJayJL8y7CEgrFCjJDY7MMp",
  "key25": "3TiMM9QrAt3prvX8cv95XJGu1FXYmnqDdJV7C3inY1Y8kMeZh49s2S2mVQpTD1cAQUonKAErCyNQWe54xfyuZc1T",
  "key26": "5MqKvXVYAKaJtCFB7rvkXfKdNGWr7FLsNSp4B9KGjif7wvmnXoPffAw8LwoRUyUn9Yd4qDguh6BaVJwatEPD5jfK",
  "key27": "4JqJgaXu747Q8bb82c8tGiot7UjVdi9VPVcuhDgtfTzsi1VHnPBqNkrJAjg9y5tVxW4nSG4xTEyBdWKVF8j9Q74v",
  "key28": "3W8e7R8tYueiwXyoaoY25YbbCiatVt7zaCj1ZRTJZJftxH48zqxXPaY1qvWw6T4NkZY9vgwngPVW5MmfpRGez2Bz",
  "key29": "5fpiBEaNNmrwjwLuEn25MCvLeETbNggppkk29BjmQXm1vvD3GEfBcvRPyY8dpFH75rPXzxybVUVvdv1L5EY8tp58",
  "key30": "CjGyreBjAfFgDTqXD2cfsXYvNQedZtq9TRtqP23wqKKVAThueXjMZtXMMHUYGMzoPKUsjT8KcrW9zdagqrMSmdd",
  "key31": "679JXgivt6FXQaiw49tXFsoHNF5VAosp3sVomPmRs47ZFJSqcKnACtQYNZGNZXSkgTuGp4trg4dF8YaYhdJJ6DN3",
  "key32": "5Emx11qtA9UbjBC9EjZyoSs5FXC3KoMqFy1kjWvrrqieWJLkBJfcy3m7LQbLrNaCtA727wusXFgiPv2SH9pZ87Xc",
  "key33": "4XuBavfP92VQ9yf3FC85zc4b1s3jgqYiJULiLw9ugBP1HzCDaHFgo9PK5zQCfgJsgwL2WaKdpEdd5ddr8crNwBx5",
  "key34": "5NKPRK5YMmB79oJ4AMRaQdzJvwbHt6WvemgPeaKPkXxdwhWwjE8hfFPyNAh88nDCnwBwp9znyvmnsxs1K1eXqj7J",
  "key35": "65xqoG5NRufBfsUH4aRqx2cyZmXosg6ufJRhPPwGgeedW8bgNz94h9Lmeye2KaRFvMptTfx9an5gLY5hfQNV6LsL",
  "key36": "4gApCzv21b6qJvjBrQcmNMm9VLfqtXZDJSwaJhtJ6zSXuFB1MxsXQxvFtJFN4JHhcy7nGytKVdsg5rAKhSZ1nhZs",
  "key37": "5vnWGv4xrfT2SiMUyxr5ttkhXxXzocMGPZi3NmWMtyQeM9611WuW9QUFA3qBCXovXEzNpHAF4cH6oAWH2iBxF6d9",
  "key38": "w4dRjPvy4KVx685E3JiP8uy4ceNpMXYAXgbXV4ore4hioWBhWVmQGnXqN6Zij7uH5XRXMitXLQnmKso9Lzms9Tb",
  "key39": "24RmZttsMnLhsFtBBkAW8t693uTwBzJkWkvUK8itsmZEAYfaGo6PFZiDdiDpW6juUm7vTu11nc9yGjCR2asj8Tng",
  "key40": "1MBbhJDBAkqovktXwnvLeyjNDGqeA8Gj9XB9NTksrhttdXmf3NXZVK4yK6GkANdG8TYyXrx1YWU2gUKT8jHX7ut",
  "key41": "ygUV69qtpxW1QzcnvJGRiRySKfTBUHAj33cAfqE7sPoDMrSk2vpN5raiFfr972JgaK2ANpfMhDRvLAdDySvTNRp",
  "key42": "3FE9ttQYMAWvwQ6YkFeamnaeqifsuauvERhuvhDWKxA2WcmbPr479SgSBT1uKU9NSaqytkyS1QAcgxo1YroFnhnD",
  "key43": "4gq63sDHBc33NojnnXcm1UGRVVWFd86P4aJjgZfswnhqepNQwni1s33p2LZvzBbxyzRcdY2QHnMFQqewG7KQFkQM",
  "key44": "47ykRNBxDrur5bvB5pJjw2sqc9EmjQDC8r2Hsg8JiwCmEQRNw7ysMkHJqTNvL93TKuQDMb3WAnJBL744Qy1hbw18"
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

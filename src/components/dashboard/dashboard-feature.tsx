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
    "5FerqgfSrdft4BdgNnmsV9Qm3wAkNqVvDd4ZTsYmwoPXXgu1q8zPiQFRqLhHyVZoLDkQ21gyMJB6Ri7s84SQE69T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAJH96DmPQQu9u7p7jL6uUX4naNTdf7i1yxRZ5Mtso616YP3hQuxf3Ch8nz1RLKXdGEZQXuHVsZCp65gAkp5xpF",
  "key1": "2FUvx7RTnHamXfMTYuPnbkuXnzjnkLbH1JN4pfjJEJgcmAtLWyxMR2v6vWiCx7GPDqBSYyrmkL9RscDeGtNUxia5",
  "key2": "5ckVJigrP1sUFvNEe34HYcbv23dhiTnZAxNmzsjBsNckauhN4E8YQXzy9dFy72mY2LYsSv6GCQekwzhPPZSvDcZY",
  "key3": "CNoCdVmbc37EHhLXREZ3qbYKteyAGPaxNsTYKkZd7J3BSKDx88meoz16WHBoinPiwDWXA873sFao5ZBDoSfiC2t",
  "key4": "2H3n7xGGfHv8JiFqkYbRsDKpdR1g3D116N7rXcXm3KHoc5wpoxctJLWkmwHRb1jCGmngPF9Mw9t5Fc9kYnruydhY",
  "key5": "5xJXttb7kA5T3VwvUX1F3wAdj7zzBjZQDmuZkLLmTvW9wgXnwpvbQc7BjTaXQvEw9DBppAgUXSqu4BRCbR1dPZ1x",
  "key6": "53ccWm9Ls92j36toyC1artiEQenZ6ka866yMV8h9DD5jxDdrEMerQHVrN9T8atbeW5qB4vZuS1SARgXiz5fTNKSU",
  "key7": "4nBSbPvK1XNESo8emJxnZM8WkYiYuRCnvCL3FCVTi4dJa6ujUpnQVe6R6EaB5qYAf4brHWFuRCbqUp36ciRFcbPk",
  "key8": "2QzCTkbg6CEDhJsQTLVtdRxBY9Uvs3r8umYF7gWAWkHabwGWEBrUZdoadfPqyYVn9H1yyM6gi9ShHHurGCcyBgZs",
  "key9": "5DkqrYeZ7vqbvEEnYB52LTuZrz5ZjmuPPvvEMhV4udWNwjKhfYqGP29voBiSsKSwVHjpv87i24s2gXeUXpyFma9h",
  "key10": "5fmdoksijaHG488vXXJsWtpG1WUNiWoiRNVJYJmk4ABRNhZg2TqnLVpmvDtnVeXSK96bGMaW8VU4FN2LDShhgD6x",
  "key11": "2BHWsgdVz6zE9oiAiNJbQWzhDobET9dUrJpzTerv9iShrDrnp5939KPjR2vcqWemTm4BpGwyazTqFqPdSQZH7YLp",
  "key12": "2mF7N4fqgr9mcjidVj5BG7G7zxnjtQGWG1n689H66PwL9VY7XRPdeorGT44rs751ukkxWAE9mwFpLf6o37XXsFy8",
  "key13": "PevpW4MuCTrhBtD2WBCBqaitrFWXg32BWnABuHS1wfVyhPeRvHb3pN518uar8cnaMDnTakPgmyVk4SyN8nDVjX9",
  "key14": "23DaN3rexgRM8mKcrjmpm5RTdX484kt1LAK3ftjzd7Ly4ShXQkePjSn8Fk4yGp5NmNVRVT9AwExsoouM4RL6dYdz",
  "key15": "4LPMVadL8JtAACUbq7Ffec7Akuwhvrn3kyY7DohNQXtj35bBSuCxZB28EAp1EGArmmtGXp1kk3NzVtGQPBfqGi9n",
  "key16": "jb9znp8jnXjctoqBqy6JuA67rZmJHBygh8TT2VMrezhWpGafMDss2wcMmNg4xLezhW6wN5gDuz4JU3pkuwaBvxv",
  "key17": "3CsuBUzgbsmzCu9TfzD4R4ffTudrSgPXdKS7kq8Rhi6AkeLG79g5cZffpAXdZQHAkbH7qu1yv8URv3iyasHUvdGt",
  "key18": "5WybrmrL3pgo4dg9rPpVVKyKZ7UvvSEgVaFNQvH3jPQ7NNhikYqswBsP3uEqzadTr7PmNSNHQfYW6s895PX4M356",
  "key19": "4bUHBmWW8YFcwb8QE5ySYA74n27AbdLoF3DNcT1yCo8cVXmERM8ZvutaPMM14EocwME94HSxJYFi5zkD7wwLGHED",
  "key20": "5CLsuXCtco22J95CjHx2VLxzR1gpb4P1VUh5PqcPbi2J942xiNMr3sUuepySmJMufWnd6tB515F4dRL1YPqhPVuX",
  "key21": "4FojTQe7sEt1nUEFfrm88cAgHHWGJDLb5kmL378VR6DBWh1YDCMNDe3tpeXK36ysHPGxG9RZ8EVGACFFURJsyvzF",
  "key22": "4NgZv2YiBEbxqKpC2u6r7yfjGrAYmnSbHHTcpAQjpzgU3pcY74V9jKCeQjfDVZoMu6P9NvMJdkFaU63XWvNaJQje",
  "key23": "3jvMR1kxPGQxCJjDV5XdZu2xv49kQJ7SV2sb7ycLE1oihF6yfKedtQ1te1rFMndtQq2d3QndttDJa725tR58RF4A",
  "key24": "26uaDNFS3MMGfHPeEh4uS62J8AqazqmNiPdaTHWBPT6aLzTwZYKW1Fmhv4otQCgJ7JdXS8rHULhSFGxcFZ3k1MM7",
  "key25": "4UoVoXNLQrP3TEam5BKj5CQy9fBjnSyspSzuCZEKw5Pp97wmF59U5LSYgTfox8mRmmp1yeeqXwrDArTzmnMVJKaf",
  "key26": "469eiGadPmEEzQ3CW9EbNTkk5ASvYL3eh37wfxupvaRJfPCtyWnMy66LcrwYWjVpsKJZSjEvXtLAdhHVpuhoU1LA",
  "key27": "cvHsamVz5Lmo4NtnnwRXFz7yVUBFo1RW6tYTYxMHSGtYVf83rprmwykx9TUA9XpBbAZNFRwFajuphh8wxVhmmMf",
  "key28": "V9wqthPgqK9fS59BMbd2HbNPEtGzD6AtKdz8RMkSeMdrdRycchcZyJqSGnpJrGA7iG5h86tmWqEDLdxpak8seP2",
  "key29": "2E97n7rJgRbyhoYrH3BdDSczr3Lw6WJuhJ2WzqaVne4y6ohSQdzFMQxzCnhEZyzDto2REax2FXad1h115DpuiQLo",
  "key30": "56QHqoE7WcE88Up6WL54UHxNjA9Y1VSjXVa3NsJreSjwNcSz2gx2yyUM2vHgQy5jtCeQbZ4C6YnGbXK7CBNCi2V6",
  "key31": "4t8uXpR8XDFocoeHJXGeSKsaDUkTUVsMhT9DWQjkQSFBjVAAtkBDquze7LRiXsYE8V7WMXp13nQ9bphpAwdQBGEe",
  "key32": "5HS8bn8kdGnNHfE5UY8gkBNoK3bhxdXJdQgnQmiRHJZe4CygPcQdeskpk92RtTo1iJMzs88H7sHq4vgWxuLTiB41",
  "key33": "4uUR5uG1FJMhAD8XKaQ3jxUYuDjEqcg63VaGFXgoXReEmKzU1CcMRMZcoqifKmH5mNSMHKDKJWa1Hm5Y3G5q8K9L",
  "key34": "4SreHXbwXSeuh4s1dnEEcYQzPcBTNCx9mTqEW4KWYVxT1jGKiqBseizpR5r6FpesjKTEXPWjmStMQreno1xLAa44",
  "key35": "pg9XmUDyY2ZdSd87FgcWoFYhS2WJaGLcKhu5XGLwKmQeSvxqw1vRCpwswiKb4iJZUTKBmbLUYDXEVcsGU6U6DK7",
  "key36": "NzBxsTbVDM7D1Ah3p5sSdjXXoxFs7d7w4i5Emcp3V7zVxRfCAzYGFyX7hcefTVqzqcYXDvVpFWvoukTSuy4FNPE",
  "key37": "49zYTjEj4Me8LybmSobePsi56hMyt1q6TUoRXiQ3KWy1SkWoNcMQbcjsoEv6Le9WW8NddcTme2FGvkFmx718upz9",
  "key38": "3LMEKnxnE8LzjYaPbo99TZaHtwMTxtWbquCoHPi2F7NjX431dUXG4cXzpS435w3MQgnRTjuWHKVq87MByxnNJs2A",
  "key39": "5S22SjtY448mNdtqzkvqxHLuo64UpsBmCKm5EKPbvvdqKgmSHHwEZ8c78YAAa1Rq4c1eVGGgWVdKtTgjfM4DdA88",
  "key40": "eTTA3siRcSFXwG2FhC5pyaLAjhWtuH8CJPmbB4ZFQ97JEMDffcREfKGXyZuAL2oAmSzpg39rnt6SFQWo4SccbQo",
  "key41": "5ifftQNWQJ5UwzM4nDVuSVm1YyVpiUQRTe7mcdJN52Kq1PtBNtAAX4FdBs8PjYnGUs1kH8WjJi7DqpQH5eRyLswS",
  "key42": "3fCC4QqWaupucHH8KYTKB1NYGVdzhwBdMYuZ7bbLJzywmcUzMwTJQxvAzJWHEFPB92GWZCwzVJ39ZnhftuewUFNT",
  "key43": "Bc99QWmfYTNPxguo2gAQhdmdsqex2ksZTSS86ftTp1x3DXbtbB9CBuDp7A9Yf4QVRtFgvor5w6nbZXcX5bKhkkD",
  "key44": "5GzXL4SgRCwSbXQr5A1Naf7pJ8gBhiyHsrGqaeFVJpCseRfD9FLn1sCQTTo6iWnvvz1xBegm1UjWTsKvc7uCoN9D",
  "key45": "5FMzLr1dQ6F2HtHtpxZr6AuD9F7LScK59gMjVLimErop1rP7p4FHwkCyXrSmSg8YgAbhYuw6X7RBHxsyFuUMkzJX",
  "key46": "3eGN2gC7E3s5dJ2gPMSfxU93CcqgPVn4yfnfTTGeqoAfsuYNnwRDx6YzmJSToGpxPBwAkWTHF2CLHykX4aVS6rWC",
  "key47": "kVwA31vSpDjoLmitTX94YxjWdkN75un61BJCXNrXMvQhEp8d2qut3frmK2tNfAZXwWpoTywmiZSz9tV3tsrgTHY",
  "key48": "3QLLGJDoeLqL5FtNCuc31YiV8tyWRvnjLBsaFGn8T5WjmyaJV6rV44PqgyQouqGKWvXYc9Znnmjc2fyKhxJmHbSj",
  "key49": "zCz3ft9U6p1oeZBJXpVEsTbbN7Fn9NGHemCffCE7FaCKg5rWa6qdCKk9VNGSEfkmAgSXZHbroeyBLrvpr2Km9bv"
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

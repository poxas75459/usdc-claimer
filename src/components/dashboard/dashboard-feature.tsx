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
    "25Gex3JauK6bmmPByMRNLxqiuWyNKX1h7qvUs31fCjB2FhornuxPnAnhARbhZcvtxbBP5iKnikFFuE5m9QprSoea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zK8LxMShnwjUWiCnPHFVbm9E2tpXVpGDFpTjeVoZZ1fPgBM65sk5mc9Jx2SYq5861Gc6a9vkbFiFMr6WBiFhgk9",
  "key1": "cyqxeXCNotaoUfcYh3cRLjwJoThBoe392h78pu8Mnbow8JMb4LZUGt4LtCkdQr8DhGkv3Yc9QmDGakq9g12ZxTk",
  "key2": "61HaMAZHsT1CnRehhY49648DnXHYorbxRGjDqY6xLHFgFBQgrHpk6uz6zGS6Cx7bBVzTm3473mgjQ3R4y24jpTiQ",
  "key3": "2t6nHJQzY99YcYqrqAo6VKudJd1Kkf8fRMyTx2Xy8Ur7FTvsm72uxbVDiifURwodje3BfBKTYQDkTJkbhso9vfcH",
  "key4": "2yLoCP3L6Gb5mRJKwM6tUeTGprs1RVmH8ybu5FLnYfXvswTi26BJP9qgcWvXFkD1mE3BZLLvAbPsWyaTFqWS575K",
  "key5": "2phDgB1wRkp8L4WxUi2QoqZPFGtSro8dyXRHSxrKmrk1gA3eY2gP6Gf86E3VB3RRUQm6m9UyVuthoySM9CSGh3Af",
  "key6": "4uCgjEfgagqXKMNsgKgMcr5xzi1G6G15HSHVgeo26XmyCrZf6wJGyCu6XqF2Q4er1JZh8CtusDMGTuVPFizYZe21",
  "key7": "28gAeYGKuoWzYFTZ8fFcBQiaxmCmQw62vMkiKoWaywj2WD3QkuP9FKX5J7fL6UfWMApcf4ZQP4cYp7V5wgYLtR4s",
  "key8": "5P6qzAffKTtNpENa8FfrBLeofXmHivbh2ky5mT3qjZTh7UPcoGsv4sbfDUFKWZGTrGUaHPLxe5zCU1BwLKrWoof4",
  "key9": "42y6PfDjeRhP4m94NifBFJY8g5LNUNGSQJYGZQQi82t6wMtVjSnXUZ3FaE2YSZe1AxmPSs9zGKyGDTsCxZZ8jS5",
  "key10": "5WBfgHfChJPooLqtTHcX7XuPzzQas25vmEpmc7aikPZmTV6VgVx2PM1ktZsswsCi5xSZKuJDFExsQXdBPp84rj2i",
  "key11": "4MREC3i4gPnVLMnL19sNjfK1avTEjPuZenQjYxb7r1aNFLAqm3Dw2vrLaQDKfDfjx5524BhQfxnUVZ9SfBQRGuE",
  "key12": "46FYmfw22aJmUPjJkEHzWy8SgMpH7PCr2qKmyGnNAZ9eX12rHPhQT681LAqsghfq8yYucN5UKMhzXFzYYmZEs5qj",
  "key13": "5qQtFM7kh759fkaJXjJzpfhswo24MMZ7keDxXEmZK2ifYpVX4CX3LNY6kFpxF9PWKBBBdGokKfYaR4UwX9ZkVzwu",
  "key14": "2i77mxyJQtedcepkLxbpn5FR1WP7JeMUxpc4gzG2ZzfLoFev137RDzHx3XQF4hMgZC2GEpbxhBGKDfrBRk4uUG3",
  "key15": "5BKhSnxJmZvxqerh1RKWFecu3Wiz7T1EbWRfufZCVm9NbF51kXCvhkyg4n4zouLdUubPBuSx5e3tQ2vQZbLiic4g",
  "key16": "2gYkUQeieU1sdZSGrayUeqECePK8k6mRFcpXvWoCd2GqN46hWc5rsfRpD1tYY77y8LnsUmsosCuEpxkCXYCRrwAD",
  "key17": "5zjeSZucMvpdZtWLdoFGf22N3J3hd8ysMtAQrZ2CPmrLCAHYDJB7yVGbURq54STbjzVRsLSUq5xHpizFRMKhxqPm",
  "key18": "5N61sPnoBkY8VmC6eEVRMygt2rMpY2Vv8pAm5abGL9Fbkrrs96RQ1pBPANLzencoEv2r7JAJV8EbYrAu4NXK6EDh",
  "key19": "3cB2zMQDSL5mLJ3CnqdQ25SY1LNxaDUYstw4CTEhVcTEJq53gPJosvV6eAPhQiuP4zkqHjNDgzGe6Yfs5H9n5pmB",
  "key20": "2paLqjHJQ5LeZ9wurCu3oPbh8DSnm9bngjjxczwGxYcEAKsimEhA5xt2FzyP4zQYBqb3jJ55VXa2VRpNEtK9HfvN",
  "key21": "2BUJQZqL2xyrepDqpLLaiP5HdV7CvCZKDKtyG8YDazcjmDsEzmbn3eu57GKZA4nTnFV2zdfELe8gx8CRWPw5zjsY",
  "key22": "MrH8fNsHE9B4qPemcSBuiknvzjdjw2kirsPjPM9KkGgWQj1ChiY4iGfdRS8qh1R2RzQy6Ph9yTWnDRKoqpDTWNq",
  "key23": "2iXcMUnNyfgWf1ZtQeyLFrM9GDPZb2MassAWCACSbcHc68FjBQTaZZXAu69kARFn1nsHF8gpzT6GQv3dBpBegKs",
  "key24": "5mCBhwVrjiAiJGhazbNtyiUegiRqN5iu2rLsPhXpLnTUuFCDxe2tMGDpvKou1pE8kdW9i1x1Fn6ccAnYwrzchVXr",
  "key25": "3bKapC7mM1BrUU6Pb173u9CdVDdbgSBG5DD6bojBZgncJbRPrNLDKueApqm85gwTbUEXgxmx5oDaYgBxXY1LHJJw",
  "key26": "52N6wPSsj1zb1caNnrWafkD6SHrzTsfYnFNrJ5XSYYm9jCayNhbVEAK2sx3CBjo8nTSAyFN9XDeX9CUUgiPmj6o2",
  "key27": "4xH4mYjCHV8jHsAuuV4m84WcpeDoejsiyEzmbwoSHDP6x1G8fnFeLdNa7vEbiXBXmMFWcaVoUem9xH32WeqYkQgv",
  "key28": "4nM2iChkKQaSXCsg4iooAnQ9gYymmYRALN6qZ2itiWsUA5qCmCZqPNg3z9aoUYutUqm9AecTrkriyHTBkUUjQBZg",
  "key29": "5P3uDbBFr4JCMLZUCib9oJxne2QqHqGYQbGPb7FqmuyBHXe93vasGmzCm9Y2CYfbsyzNqVQtMuEMvJLz3eXbDdG",
  "key30": "491RiNzNH2LuHeTTHwuYweqwAZQtDbpAUcHNszLTmmHyYVvHmxzBQkyN4uRrg6aajtynUM4DkoKd375NjpbKyc1p",
  "key31": "47TZAVbXBFE37Wm58PSDWBExFVLmg9VXHzTKa9SLPggH15royHLjmJkLJmtMxqLAdjysAvhGRePzgBhxdj8nsewS",
  "key32": "3yLXQbssS8vDmEtgLQeRbRVSDgXLGNVJfmUJD9WSDXinximKBBg9AKX7mAMJxcRkKyGLKM24kXeNqbtPuzT4DMcY",
  "key33": "5TSG9LKBAcaXeVmRiRYFyuu9fY8C4byL8TjbvKs3qmtR3tSyR9nCpw4S41v2h8tR5aJsoubtqKctjpkSQ5r4eyzo",
  "key34": "386NWfoLs6Lzsrdt5RwmPZVA8hDuPZt4ndPoqC16kHdRrTqhjkTmAaB9gQo6JK9YhTdfvG8BiBmhQcrfYmnq8pDt",
  "key35": "fqKLcMAF4KReQkjzP9dSPW5UBfwvKhq4bYi8yk69dr4JPzTPn8LQNWg6U55aZu7nwijr5ZAn4rS4vz3zXt9vNHz",
  "key36": "v9rTQ8pkapdSgT1RixQmbekPaEA6ScB9uYNCPbqLpEs548ZsGXi6HU7dzYL3aheN4CYfhxhpkXF6h6zdBkB2tLE",
  "key37": "3siRh1spv5uqVR8Py4U3ynQ5AWpnAfnECWvq5E2CH1BsPLLVHLvjVfbtJFwDEBVDBaWCnUWaByFfwqLkW5oFgpyi",
  "key38": "3KgR6hB6UZ3y6BqYu4ZtBcKTXs8ZMFJb4QVpcUbiwh7GeWHR9UtvwvDo876xrX2Xm4P2gTq6GsEt1nHicpJbV3Jg",
  "key39": "3mAAtgPsykTsAEwHA1AZtc2pFryJcssgTsxQ44PdbRE1cMJZcgNy2zk6YPeDUVhbJr62SXXCL7XFfJpnvJsFZs7C",
  "key40": "2vQ1m9Wtz3jWSyb6zuRSLnGWgK2Ffnst9QHoXUDQcxjAUBeAbYRPdy13tmsTg9bJS3cSgBbknxzrBSYr54xQBpnv",
  "key41": "2EQQCDfzm7g15MBcXePHndHRGATs9rnfC2r6osUofz3WyEf6oRikeEwdZg3dEtK133yyiset2C3zTBNWXE5Pt2z1"
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

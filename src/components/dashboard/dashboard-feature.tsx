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
    "2Ug3ZbKFEA64D9jk1jpziuvQ3ZxigQRgviruCFTTH9bskK93xrCgdRKEPWHtQ1uCyuCkvDJySSvQFMEy3ZDSAknt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FpLnAhrFQV6Afg3D3HNDyegLkFWdeXU6Cmfk6jVWTeMXxTEQX7cnrs1M1zvhHargCauXYqRKiAY8mDeeRC2Gqxm",
  "key1": "3ypum5opidE8BA3Q4gHfWaiJe3uomiQKgJGtbi95hZVYGhgKJxX585LdWnXdJsg5Vz7ZSdmSBD1THyP2njURSfj2",
  "key2": "52dYbrsS1AVqQxMfxaKUCAcBv8WMr7VFgqos8kbHFZ16knwQKVyqKqPV3ghe7Fqzd5tiTRSDe5n6eaPqesk67MDC",
  "key3": "2VCc9WUs9SyoCutRLKzbDSMPUFjqv78aTCwh8J8Jr9ekSevvZyKidPewU121JpPPTMFfFCzqRV9j91vVLmhxuxg5",
  "key4": "3uhUMao7d3WcYzmpbRfP25WrDgySVFSPhzwBSzgXu3FxXyCBzqKrTewrznrdfat9YaCrDuQbQT1hBYoBNepiBBuG",
  "key5": "2uNvQXQNrQYLCzqXYByjCxfjRkj7iQsA4T4QLyfH9KZpd2HVxTMEKugsuwnRPRGbvYexEZxD1Go1UjPNGX6S29vy",
  "key6": "5PB69QznDxYGWdpnYC5Wjv1HUFnFt2EyEkQ5FNhjqeJtEyf1ztfxukezXWcbPRBcMz9CsNQKgNiA7mzhvHXbW9ih",
  "key7": "2KZVHA9VAoreKV5k8woWY4s6RXoY1715t1gJQSsGgznTbrXLQMmWFZ95WSMpmRrQozxcDhCR6p1owS9z86Qcr34o",
  "key8": "5HSnGHwGkuXWcH8fcUoTkWHKTbP7vJ32ofJZoK8G1nafsjxvE2W9omDtgvmfXjZiCgqWKeC6KKrk98eRUBiqeHTr",
  "key9": "2hEPcqx2a12rYXwm6pxVN4cKFMCnR1xXNgi4bNEyRQet487DbkwTFk32yh4PoRnF4dHQPmr8g257ToVUJab5k8Q3",
  "key10": "5rC4tmoQ6Soe4C8RyCPc37DAUPnm5K7zsBcPDDAzVhqN1JyukPkYS19WRfQhiYvAqtKhW4Vzozvdz1dALvk6kKH",
  "key11": "57c4LUPXJbzW3k3m516a34YduKkL4ZLVHErXcvJ54MoxgZfobRTRH64RQ7S4YmBgESpo272wiKqnRzzk5fcm7yy9",
  "key12": "LongtXeYdQFENhfmhTBmp6q7JLKBS65BQqtxKn89mWzU9nvMAtVrmw6kjznQn3EBoUfEhBv32eK31H4G9iJcu2p",
  "key13": "4K1ksxcNEKk6DL75w2m7Kh96BYZkzJAAFqQ1fzAXHgS4iKFN7khkqVNay7QLQSs5wpUkF85w2H3hqJwyNhJgtMgZ",
  "key14": "5QpotrMV7JfD81HhYaDFdRTfuYmTwtT9oVRojh7MTTjTdkmgGMdqB9sQeTeWGJsS5jRGQeaJfas84tATUXRSTnHX",
  "key15": "4fYtR4JvjMvcre8bS7DSsy4zagTVMapios6NQDPcYwhvx98TtY9jDiJiqwCxkb4YuZH2GB69MdEKfCeX2eNFFm1K",
  "key16": "4GRJKCuGFepG6mHZ2Yi4VmP1MaYNBNd8cy3CipEWjMC1trZ95iiY5EP5RQ1q1PFs3P7D9jqxYb9hRRtuvxzeTtzL",
  "key17": "4bQCWyKmjsZabjPqMDwhxHc5qrNC7rjniG68LcQgx47cQ8LC6Es31K9oyX2iyufd6ZxoVodVVWSBUCUB6DEEtVaf",
  "key18": "4wYNLxMnsYXKg1qERHKcBrKX9GMMQE3R7kn3S5FinxiEkFz1JULzp7XgMGdyPbYCMdH27FqkHdUrKNVXpcNv8VPp",
  "key19": "3RTDoKSzpnrHHwyZySuTp5DDd6os2gAUPhwDmoxjWbg2RtTpEFXcrGqwuifU4BrZFKA2CyYTG6id65uSQXhLZpaA",
  "key20": "3fQMFq3rrhJYt1SBJuf9V6R66srY5zaHCDwYgNcAJJZ483s9YoQ9AB1qkmAjAg3ozHzyEXoHeMNroZPKGrUq37ye",
  "key21": "5ymftMMjnDyxBwnSv39xZfUL7BYHoYtX5tsPNThYQZxrWEcmzSTfenaWUomAa9c1uR1ceBVWPLBbwV4V9DHQ7GLV",
  "key22": "6RzokQuFxwRbJKB8hoaGQfZVdu43qpgQm96EByXa43H1XYeSeU4huJNcmymt9KHbZzV74hgZrwAbLGYM8jf35T2",
  "key23": "5SSvVccpDK9rkuhYy1BwYffRN6rYGZ3k4Lin4AKahM6xQ2Zo9odYWPrNtBA6MNsDxFCmnRv7iHf7nih6atn2cUfL",
  "key24": "5zec54fRP1ixEspxMc1wv8KrjnfwiBM2gwXkaU8tsyPDrtw4UN8f17429EgAfdqmLxd6R9Ta21UqvTtCqpTNj3Xn",
  "key25": "5pRdSctdfCK4rwF3uHATHobNVbPaatYGTFHY6DkAssE3QzXvRWFPnM69VnFVnHeLEYdLSDuLusHMx2gN6ndxniV1",
  "key26": "oR25zU8xW7BJp2R5KmA3hoqcn5D2ThqqzuYxnhybSBFVaiDKPdy6nnvwcB9DANxF3YjzzMXYo8Zrc5EvXHsVvrp",
  "key27": "2ukBcU7hUtB9PKgTakrDt38Jp2QFaT7xh12ZAyNJiBAs77kYdTy3UJtGwGWSRazacJ3ES7Qm1VS7z16gKpjEwsdp",
  "key28": "2ofza6oybJwkb8sTzk7g67TrCSDD8vQKcknWEEa5C3CcyXAHeWpJW3zbdFE8jqn8Yi45WrnV8gHrG2pemHhGxUJj",
  "key29": "5bfPkJXw1XD3zL2hcJShcg7DXUBwnBRp6rdsAeUCvhbPx9PcsU9zZbj2b6LWdmE1ySMZA7SZzRfJvnKeigiHHMDi",
  "key30": "59GRdUmsQa3ARWerF2RJ7uxDicMhHRtCc1mQ5Ye3C4ZWxJLdy5k6H6DGD6CPwAADvL5EvHz2ZosLohC5eZspb7Fq",
  "key31": "53sRBGSBv3CetaJZkvmbSQCKuLW8JFE2zCouuDgYY6eikanymyrDjB2LJ7fKVh4FHsnmiz2cZThVeDuVreEK5h39",
  "key32": "2vXTcgrRsvAXZTUNZpWC5vHksiPriLhKDmuwmAuEHfsc9sS8Ujv8sgwmgXzgpm3uYK3qwm3gt3Uk221F9KqUv2xE",
  "key33": "2i4uQbT31xQyGFxFeskqQtUtJTiWKoFqjKQgnEvEwdzUwTdhxiuon6XhCKrkBKxBa4akwcbMFXBRRCUNZ7gq627j",
  "key34": "4GSDAbxg7PgnA4SXR3Y5fSN5yfonsac6L4pmge3iYwQNqTTPv5bQMneyFsRtyxpXU2D4LvwvJgsjpKEx9PMtgBQk",
  "key35": "2FeGCQPN9G6QhjxpDpQNdQNmzqzpgMo8dHAtQZU5yngSotrN59JdrewntJ42YfyMn8cAYM4FmzpQLv4ruSToQWZ8",
  "key36": "33aeHBHePa7K4DZmhg2U8qrLW7NK2qMYtsihy8DNKV3X1WPD6DzL5nBVq6Gx46QgJCb3Rm3BTvEkMxVWMVMNV3BD",
  "key37": "5tTWgjZN5VcPoEXmgRiEa3cXuqRgXySY1JFH3wkNdv2KyHf2oATQo2ULhHYWcTRPnoRbjPEpGtcCTRxpp7FZZVqp",
  "key38": "4HJKKQ1x4RVBJVX5mxuZfRK25u2kxL9pP6DRM9r7jFLMmDzWevpUY5oYSkRFaJhgVWn4QdcU4CE9noU8TYommCDF",
  "key39": "27L27z96QsPBcGwGWdE5SU3cQsF3cMRFNFihXTK6QXArc7Qxt327uG9xivL6vJmNuEiK1PGgAUorDpohHYE4p8Jb",
  "key40": "2Q5mwK7ETPgFPERTVvtvXdNLVsSV5YkhbygqZ2Yqrv6ca3zDuY4gZQGWopDtvSSCqkxVCqyCXLf73tUL7tM8Y9Ts",
  "key41": "2dJJ5gD8n2DDfffnL74vdKt9Ub4esnZofUKPp5id1auJ5oDWb8zg4dTYd5S9jhaotS6xMhDpsthKtNGF83efpYFF",
  "key42": "23mXxtzp99FoHxvSmimZSQpWxP3yL8EHFoMCBUWhUavzbGTUNdgX8F1hpGdzZQ4Ey2CUcM1Dg8d8g4EJ9pDZRQhi"
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

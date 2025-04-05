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
    "5Zj3LiMB2JeEVmewKD5Hu7NXNR5nnuBDAX2gyuF7aVik8TbtTRVE7xZkTX1S48dMA9hQaB39iPXGHzLuydHpSDb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w76LxnJtZ7tAbMKvna53iaJ77v55kgKS4etB19JhoEG8QSmfNP3DUxavw5q3NiDXmh2o9fgF6JqnPtNPT2q3Pxo",
  "key1": "4EHAFtVFgpKSyj8UnorA3iT4UWvhvws4dZn1EFxFAihrQt5n1HUTgo7Z8ZtTRJ5CBHXq2czQYeV5hGGP9b9gpjGA",
  "key2": "3yPsURVuauNHL1ehbU6iiQHMJJ4VsyyWug87mhuBytqcsDBcf3Gvb4BfHGzBYeNwivRMo2mfCMXaxg1Hn3SAht9G",
  "key3": "yFXqahbAkpUP2QDnvrngs9bp2RRp6KcSu6ZYbJhqkNgcztdjaab24HDtVm7ArN3PFJXwUzwoayT4KiKXiymZqq9",
  "key4": "3RZDvBscFK3nrg77NQypx3UUnLoFy8jsm4Z1K87SFJgBUNXp5LNSf6WB55Rf4L8ShehdytBNTg3nSmf1bvZ7U8rc",
  "key5": "55Da6nsJy8NTeBL2nGDe3QmkR9ErxvwJWZKp7eSAyhEAPJ7BgVdJDihMd5hJecvAVqtLiY8GKhBsTZyJZmwHASCe",
  "key6": "K7xswL5cEza9N3gtcdxkLDwX1xP3rueX9CEiqpDrwixatZu585b7iCDLotQfkCdKcoRkCLZxmBFfsJRW9qjS334",
  "key7": "2eoR9wrBNBiKb3R8TM7RT1UEf1MT6UVDCps8DB19r5DfsKx5L18o2gG3nmBQrsqCUa5LcByyY4nSvQ4sTa86BWa1",
  "key8": "5Dmu2u5CVRmY5Vqcm4GGtH2y2rjPg8Ti5PWXzUvzCS11GJgTgE7xBCWupWUtiax2ZXkKbXCMvaQoFvttyySzHUeV",
  "key9": "4MeYytE5h4fR2Bc5LpTs1NFV7BYuSas4FAxrbWjQUsVRyEq3aS1MAKGRXQezZces1rj19183jNvTveYHEiWWmptA",
  "key10": "2BXUY88VsenuZduhSpedq1TSWcN9sN7pAVWRBrAiSNnbLKc8x1bDC9Cu2YW1CYJfQgcYHiBYuBLPCViXsxZWKp4E",
  "key11": "4kKuy3yVHmYQp8eu7RynhXNjbtHtfZ7jchUSYRFzsZpsgVuFjeZo7HEB8n41kKQLuY3pyxsh6Mc8YyxQ9fycNMJm",
  "key12": "29ePgucyUQcK9oFSyqdTtUWWGL8wLkBPjvDiJHaRKAKyqjZjPVPZf5zxSnaGTRXSFRB8JQRfWpsmeiZo6DT5X6nj",
  "key13": "LCMmJE1cBgwh5i16j3L9t5ogfKJ9fi7ba8a8YG5ZtLWu53Yt6VtYemxn2a9T87iiscebvN2S2RNsABk8xFcJLcC",
  "key14": "3Hyoat7Mx7LRWGN6xRvsXdjyGnD9N1gVaDnYHw9iL7JTxqGzMkZXBKcZ3pbQdr2guXUf3r21GBXLkRYCt3spXiQu",
  "key15": "4L8YX2H6exuJqRwmKHqY5GZ7nGi2wppS1eF7YfQ5pZZoN2Mf8JtzHxZZagn6Tt6FXtbwsEevrGSdZ5eL9PN8ia6J",
  "key16": "59GGwPgU11hcU4VBNDkDPeVg4S4Jfngrn9QEFmaZbMy6e11WDD1aq1RGgpjB3PFoQMdHThyGyfw6shUDDWe6a7AL",
  "key17": "4WXekdVMNYDKxTVfbnm859qFtTK7n24kf8cJd2AVXhd7hCjb3hhSAVUsnX1djFXsM7EvK3uz9t16oJcgCX33WYjo",
  "key18": "ArZbZTX1X3rDNnfLGjNHEA4Sx816BcPivbmQLzs42fkRnVjN3ZxCd1SaXRKSbwFV77BCote8vtxG71f6TMTfau2",
  "key19": "5FEt5WTZyijKCDjuTkjfqfPGXn49RBES6oAJY2wbPHwLtfBUi813FhDPPgTpLiWEQzVbXXDMQF3AFdUEtqYZhtLZ",
  "key20": "4WxF2xD26ab982CrpHSj7binp21bMfbJCv1PSPhpzoPhpEetE4SpeqsTTed1M3dkoCLAoxiRnY8tHoCRgKDUJVSU",
  "key21": "58UbzTmHLwX9aiHtQCDXDXGwNdtrbJgaHaWAy5oUZ4WYnEPkmM4auscAqWrYC1JuJWku6sDhfXSMznjsE5qPSXJT",
  "key22": "5Sq8KnG5nurL9PQEXiRzi4dVJT9WTJDpKMmgBPKF1RymNFQiXeoKRAA72pCnyQWCT3zLgSzv8SnFttuRpWQfAe1o",
  "key23": "5m7h3xaom8jdqA3d6rrMneJczn4RQkMMoPhf8UmjTjZLeW3qrVU81rTDEQ5G5rxkpwLMwfdzLt7tFwHykeJ58iy",
  "key24": "HU4RmKGv1tm2AQSU2epPsoQGD1taRAXrHXG1Qdix4WSd2oRayxGsBHM95tGSxhVpnoXPtDT7faTNrckeCAG9JKb",
  "key25": "8BYHjRfxHy5MPqvQq52SJvjTKsdauZnXBjU8PtEQFRCcMcbdBjF78CvvFuanKQTjcn4Xc6THWN6nmRzDbrVU393",
  "key26": "3SJfzUb3gxpJyDEmUQwu6QjU1Vu7CefaJE8DtKrfJ23ZnaUYbCBVi2wfk19H2cXsDQNcnishm3cvxmrgDqob7yRA",
  "key27": "4WDthhz7pfyLQ7eTTBbBs9zPtBVsuPYYqKwwfRKajRbRTTs62tjWHTZocZ6cd7MkZivgq98Mugbesm3mAd1PFj5Z",
  "key28": "4tChNu1f3TC5daEavCXDW9uicZiS97Fore8gAp2YPqU2HziX8YM5QJ4THRtUFeXYotvTRdd2S2VKPUCs5NqTAVko",
  "key29": "KpHcRBhxjzPXsJtbDjW2bvaxekbcqc3Rg6jHyy8y1Lsep5ZThQuSKJkH1C7WbLHwcTJq1Y2rfUR23EXPxX2KgRc",
  "key30": "4uTkiD1LiLpgdyGqnSbF96GaYyfB5oaN1pJu2x6jXdX3nU2A66ys2tjqPvZSdktso1KX9uzexrKHh7sQnY2iGf6N",
  "key31": "572s3mTxe6WHaCQPuSzu9wyDpsn62pGoTg55M3uZ7wfMqi8Ni3hr3BZmsrSwSHjNknxZSgDYpXDeQFDkb2LMT34U",
  "key32": "5roZRz8ck97uvwVJqjAGoWzn3SR8ia5h6hEeapafgfbw6HYN2ufp4pKn2mPemt5wr5XVPk5zbRNULWXTwpeXJbVs",
  "key33": "3Usqs6YGp2phyKF9cPRKMzZhGcC2zjNLAxfB3XrQ7geNjczK4qtKFPhhK8iRBKzZ2YGgcXci1MoWdbfr9ZYaxR4M",
  "key34": "gEPEEgVxBwDhSK5UGhHGkyegtGwyLA3yQekwfqbVscfBocZ426pcyymJHoapZ45JE6U2ufUXUxhTKiBX3i1nwxC",
  "key35": "4jcXdozp4a8JhUmQ2CxuS7ULJARn38m2y8e3keMQ7bKTHDsF3Dp1RE5tUyDaGMsTME7gs58jYLGjgk6XBu7VVgWf",
  "key36": "39bCQaUfLitwsMLsY6n2PmVwW6b4ATGF8X1BvdkWNwnvPRbRvMbkeHUnN7dmErb9UvRKBeG64JNzjynex8jStUdt",
  "key37": "5nRHASdxW2a6581uCEfLkAza73j8ECkRn9zWb7wYWcjxYGun2trSyBYen6D2Vw2CdwMxGhGzGg5AsR2xNdG8PJXC",
  "key38": "K9aHrhFASjo1MC72czCMifdvoNvXg1WQuPeNiNb9W1UAj6RjqJwnCPWfzq6LRgtZjrSPCEKMMtpEQjCaFghcn9i",
  "key39": "2KR8T9urHfBwbkTPVZWjze5CQzwHTeQNFVSU7UVW2u31teNBCrMknjLKFdXTnwbUc6Lom9QJQXG9a4Es7w6HAp8Z",
  "key40": "54uwM7P177SF8b33cjsPoEQQsuL8hr4267Kf177uZhaVsVXrnVixpby9N227ohfGemFBCC1nHMdCp7HrdyaCzu6a",
  "key41": "phLTodpCffJ5r3G8mzNKfa1GzZKaAkTMaXDdp9SmoYoptbwpXKHYTgGMUDBHMvBKXZxzzfedoQHXXTkZh8wwXHG",
  "key42": "5sGzUVZ7N6mh5yxp2N42oiJqQ7GNNBCUEdPn9TbLNysBrdjeprLt1WYwHLbfv47kMpmCAXfTnbUowEhp5xtq4bqm",
  "key43": "2tSQ8nruqBsBGpAxFVfoAzy1QiE8yUEVEffMpRok69hHmAvT6nfzwgNUUeRRLNLDyUs8VCF2ZS6qe31Py5rpHnmx",
  "key44": "3jVDFQcyTLosZQ7Jeix1qe6m1ggTigFpZspv2fTc5sb56zuW5toPGmtZQZXgRA4pr328hVCyy7gZjCQFtwxriRZA",
  "key45": "3Cbw28NugBfrjzfgo3kM7HTuMnfMvcBrFjmvVjQVnW3BoQG4KnrmKMuaqeh9k2u38oGRhuDQeGmhKdUmqMwjuVpX",
  "key46": "3z1oViSoGk9sF768R5qUjhm3scspxuDxcgcuEmaBYZfUDaYZRUS2urzQoXc5YymDt1Qgm15aeNEXT3CxdKw7cExF"
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

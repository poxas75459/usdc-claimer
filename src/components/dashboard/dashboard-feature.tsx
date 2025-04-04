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
    "4PDV7cVGPDSQh17nuw8Bv8HQLiD1ME4GmTuJWQAAh6dHxTS7oFPPkpbmKfB73QseYUXk4WA4NyQYyCdtXB3PJwNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwoUKmva8GTjePgA447HBPmj3xPNdtL5Dp5Fgcsv5JnsiVp6dVhR6k7PRa1KoQwZLEu9UkrLijSxwvB9eDVqZw7",
  "key1": "H94JPCvfwp5azhPyd5vaGbSLrYL2mvgMFEZXYnUqH8wQ8gkjQ6px5DUd1Vbq8Cf5hh6V24TbRjgBaxLSZFEunvN",
  "key2": "hZHKutBked37RkBhEi3SxaXxhrhwKRSDNxDtMQZuU3dA6ktjAf86PoxR6nWpXJ98QdiRq99vVYDHt3Zv488krfz",
  "key3": "4vsZ6Tzspm8ac3BGBzSvd3iKip35EN67RUEcTs2EwGkpswe62owa8WpD7ZDV7hLcsjWfH3ymo2uaXYdSk5Jrhwcz",
  "key4": "3HBKzDzBQSi23C5Qnoxw5V1K6KdX5gcLVoxofjYVfYfp222ggFt3fQfd9HKdJYxsYrZseKPZfyoTsYkVvyRTatVQ",
  "key5": "CWwx1VXbkyQS7Z2DMc3HT6Av5CaJWFpcRetEPtkdGtmy5P1VJ9PQz62WKHnETeN2iNGLpt8GuPSGXfyMsa4SEqR",
  "key6": "c44bdrnv4TDGAnd5iQCp8ibEfAfdsHG1jit2Wwu7ZUn7fyYL2fHu2wKm4tAzRgreCR71hkpSfP4ux9eXKaEsr6z",
  "key7": "1s8J8hQ2YcFZY3g7JXLjPDw7dCjXvdxunVgDw5EvvEYoWaKfdThSriAbHwF8EM5u4fSm1qqKBcEETCWENJHq4LK",
  "key8": "4LFdkdf2yUm2T9kEva5fBK1cb8me31irhcWbwkMJv9D6f5XsWPA7dN7LDbjh45s8x4k3hYd57G3nXgR4DWv1tApD",
  "key9": "121nQ3pxazgQkDuDyopv1KScnFLHsGh3x9jWjKZBRYbVLC9g54is4pFrhFMXs56JeMuf5E7JEwaevFTwpyn21fSY",
  "key10": "mLWkRMqgbKfqnmV2i7UYvAoLDosUv63Y9QdkKqwPBXjZRyrRBb7L9mGfMLSr6dSWBqwxEEhsDRhFhpb7CLnPNQM",
  "key11": "2Lz7DjLJPz3Vpw9mNUi7SJUHQTdrPkj5yBAEcMUELyHJmBWZALaqXp3ymsrJ5CQrf4j8NjFT44ChHq1CNsk4vF97",
  "key12": "d3JZUFxQaAJhi7xGVMBAvTySWWmV4V8erwV4J4jtzK3BC4H5ANFdAVcpqDBMfaQdpAsD4vzqgPVxLaoS2Lt1b4i",
  "key13": "2s4w7PnWEdspjCoYnxiME9p8w6MEev3LtEqWDN24P5JbScp9CqL4eBGAfFDhoDuU5wjCGEP5An4Aej7CpV8kAj8N",
  "key14": "RY8DxvasxMsJX1SiFopt5JY5ou8DkQkCojFwv9zrBDPjHpSs6DQrLgwK3JXB7E95jUPM5hmGVBGPHeXzt8ZBgkS",
  "key15": "46z88QMmWfaKYZScZL2jLcZ1JERUhphWaJP9dXhqEwWVmVhsS8rhnZVsgDLgccXfxNRBTfnCX36rWcpEEgtcaTUb",
  "key16": "3m19beLdGEz3P2nPkgXEsu3Rqus54F59rDZPXD3ePdehJ9TrhHHkkdLZm3MvAr8hwv3CfrpW9n2s1nJVXsQEzBH5",
  "key17": "64xGUyWPemWw7WRSiezazYhPNWR2Q33QsdABo23mWcNBHinP6Fa3VEX916AfWx7rs4ZCaEcWcZM4rp6Zko8T2K1E",
  "key18": "27nUnyJsy5ZRV56cNonye5YftLmK1ZvvXMThCrB2FwodgVqYacrocJ7sVD5FDpqYALTj5yYCXPMeecBrdHtFpFvX",
  "key19": "5xWLvxvxi6RefjqZ6C9WS4TVzi58sm6bgHqruSQG5DrzaLP9t8H3T3fQyN9yQmMmR47S8Tc1ct74yofMuRFWKYx4",
  "key20": "4YWGcWUuuennbbB4BeHPPXa3Twp3pLgvi152dPFR69kTDvGFymKj9DSVjzFWXtB65AQJW9k62os9JnzGvuXT8So",
  "key21": "2eTA8XhvYMF2B8n5KcAaYGcWEUr8RjhthsHhHjoKRR8Coa7wgefrbhfwyCj8E4JLrCpgidFX2NCd6AKEKsWXuKnn",
  "key22": "5AhFsWSmQuiHHf6pLNLWVs9aRApqac4Sjm255Q9noVdAcgfv4qxh4ZaofBGn2y2Sxe3skmZnpsFYLi1ahugM7sB3",
  "key23": "VJgZuvCbg5emWBfSvukyeBT4Sr1dGXAViwM88fmex7jfYVbSW7BY75K55RcaF4h4S7ZaCbyVauHjXqqt9DiNprQ",
  "key24": "cQrwEHPnvBpW8WQQK4J4ijonmJJLAg9W4PdraKphe55vV8U6J2smo5TsQec3F61XcketciMFFEDm2SRxTXYbzD9",
  "key25": "UuB9D6iMSsXpYM5knNVDbE9V54iAUhjqts1p23gsZ8v18HN27vzbza9DhZLzDEXB9ixmbvgYz459cAKCy9JXVJh",
  "key26": "5zWPfy2XRaZaAEo7Dkr2xNoya7PJLUotjbLr9z2y9em6RRXpaxngei3ejSmcgjbqNKF2wu57oeFsAESDgW7Sdhbx",
  "key27": "WkUm2wrV5as6zaDgEP9cymZRgupSurp32bxCC2rb7rVUcC6fZ2DthXctfKFdfDFGSVP9CkRAt5v7zwFD7gCc78i",
  "key28": "2ArMsyXbMh9hzibehc8LifkhmvEFnzMxm1qyZZnpQVfBcx6RHySPp8aKPkck9wGUqQHTSxrVE6R3QHnyQSWQA9U9",
  "key29": "FiA1A43N7fbTKC46VZ8rEfiXELr5a14Sk7Tmf2VnGs6Jb5AufmKmH3ioV3gUUpna1shWLWH9dYGSNyidy46PLFw",
  "key30": "2NwitphxkgDkmMZpSGT2z9HUziTL2BPM5rDpwtwH6n9WTAZfgYh9TNvdpf2uHFAPpc6Kr5W324hnBAMCpbmjt2Ax",
  "key31": "stTmWSnESScWsNwtLdKqZnTvaP37Ez7EJJSSmYRot5wQ1NsAp8B2wLQmS7nWiuGivs9mxRhaFo1RUxSXXN5tqtr",
  "key32": "4nv8R2Ttu5XNgtGW4e2XiUjEBLbaiFc4JtZJpckCP1qoBAqFtUb4AsGr4DM4cqRWJKs74gaQr54NeJ2hfWEdsEwr",
  "key33": "3U33qQJC2fQ5rr4iYiWC5qf5NXkYfj1qqTjrsYnnuTerDTBFjfkbjNveE1zXL8DAmgmRCKaaC1YJAevxvwArn6yB",
  "key34": "2rJYNTHMV6rmhiJ5ZZr3b1pRLfHvaF4Sqmwpvgxj34xm31aERrijdVkGqud8UYbLBaLsHKHJgJAkCQ57qxoUtnYf",
  "key35": "4LMMq8eQW3x8gQ3RT7rpgj9BHnGUW7ZDsEE4kmKwQQoBhLLyqjAPgeYMcaFnsXTHTF2SaqV5BwHSNPrzXrZj4csn",
  "key36": "u1M2fyGnkHFsKSSdsDU8pYFnNXA9V1S6LhU7db67eTCTUxo7nGdf7CUmBPWrk8Siq3Jx6YBjnJpY7CzF4SvHLuN",
  "key37": "42fw1Etx7bLj4AJBGAziozftgAMtVaKjTiFpwhbN8nC29UGszNJgKWofMZVgzHdLhKA3vN7cQaeV48SjZrPeuUuc",
  "key38": "5C1Qu2tmapcQV75YsSCMYp1VHxx44tULbn1qsdGzAdpezW3zoChWoXMoa5XmhMY8tsEGs2uPBYSSFhBRk7WaX7pM",
  "key39": "N6GzmJvNPs3u9Aeck4GeQ82zucb6RBk3yMzDLorJeLRVSST93e7hZJZgPTFLZWL17EoYN82o77Xb9vx1hPogRJN",
  "key40": "2sfB3K85YNuPx6zzCG1qwy7WkL7Ze5FXjCKJNtxwTE1y8o2EbrYwgVqpFYKDLvuHxyi8o5yxGRgv1txiWjmhPLBF",
  "key41": "2xBPT1eN21iDfXADRxJY6jaZq8s9vc5L2gQCqyp26UJaGH3i3GwfR6LNEbSmYg778NxdAtQyn2qma7yF4oo9UoJe",
  "key42": "5zPjgbUQFwhpLgFvvaMKmFkBcPiV8Pg35WY4Ec5qZaGZr41kBkWJ6kkhSay1fWbhpzdChqQj2n9pmY2vcNp9V3bs",
  "key43": "5UeoW1e4hQSJ9XoDTN7Qj974rKMcxisDjL2F3EDdJN1jxM2p8Gs1NDA4ANUjV98u8QFa7aV8645Vp6mYMM9ecghL",
  "key44": "kwMcpycTg4vyB5FhoaaFvvD2AdregfLtKhXoqvoy1ff67SUJwQX3VQmMr2DWhhV2LNZamR4FU4WMANhMNGKaa7i",
  "key45": "m3Xzo7LtQyqK7bmHC1Fc11L2ShpSs7S3UTyrbZAY8Wj23h7uSEjbGdtwes8a31MQRjgR2EQzEa3YSnyWcPVBj6g",
  "key46": "2BQW4nLF2vWTicT1MntvD1AWccWJRKEvMFaDW3D7FLt9eKg4CkWhpkBo8L8F125zcpLcY97WpeQ7u4gheetNzAEs"
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

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
    "4Hh5YkNhV37KumXNhmNunJRUR3WdkxT1zpK2qXpDRLNjKq85weqSZLot27P3aTu7BGWxsQqzXEwTy4RkQapiPkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fo5AL2vZxz8QJP1g1xFs17qxRt6JMjvZs4twr7F2iXLntbd8V5VVxyyczKUaptPVnUMu4vdFf8aYLpfwXZL4WCB",
  "key1": "5eEwTfJEKoVvmsg5KoHPwZizcV6TkFfoGYpA1qhuUjGCmkWQwtKXd1Wqtq7sBcFYR2pNqTkttbbYoeJ8wrht4uTF",
  "key2": "5PeUw8qVnFAJBYJ9qyieKbFxjzzbpwK8YMFCkkJ4iEBi6s7fDvZAvASvcsuiZMTXvaKGntND1BfYTL6LK8ZxwLFh",
  "key3": "324JvFuuRg3j4EmkunFy5S3STFLwsdSA4uKpVv91TJXWvx37WMNt2KrwpFwej5SxvQwvXQo8t243tZ9tyeGiCXbo",
  "key4": "2ks9uBFHCHVQEYRtkNcwrgGN8cegJNfxNm7mE4XUpCtnPPUwo1yDaBW6t2meeKtPva64bBuVNWutQJeBVAENm3ey",
  "key5": "2XLw3GZEvYrgYqQycb9WcwHsSzNzAaWy7vqCotHvq915pRGVz2eZdaSkvaQXMg4VxmReWqjC4iCGdmRuXXmvRkTm",
  "key6": "4v6mut19A4kDivntBML3y8kKa5K9fenoBeNiMqhVj4FXgCNaH5Fz1G7C1n73zxKGaRy1E7o2UVZY68K7Ah6PrqRX",
  "key7": "8L6Kei8uqqVH7cY5n4n7MMC3RkUPjHAkiPEaD7QiV5Y2PKHx7GBfqnFtaAnk7MfNAqF8d9a2VP1PubhLBaAVX31",
  "key8": "3EetxqXPUZc9ZKNENk1mVvJFHGN5V4WpjfKESghyNGqoReGjGq3nvqW6mv4EDyGUcAUGEF5Ko39hLujBS8ZC1U3t",
  "key9": "5HnxmPosmkauDv5mYsF7XJFmNDtkyJNuJzdKhqRriEbeyUi7aftyjyQjURUzHesJKijHvkHvmVmJ6oCVG283gWAM",
  "key10": "3ZCzbcrPmHb1edqPsYHV3BJomNNUPQLdFLV9EapjHWLVxm3nHKwk9xidc3wqfiEppzCyBMwZuz2DqotqDoumBJvr",
  "key11": "4BPMnrRTaFQYyrGHui8yKFY5e9EZBPuZAArSyzzNoYBW5BvtFCTjwZoqNCKDy2KR54hcrTy9Y4regrxhMFEv4mS",
  "key12": "4ycN8m2NVzXg1GyqoiVicHE7vqWVK1nLwcBvmsqLezVesPswhFeJd6xw2bbkVFNaRe6MNG8KWzD6eU4d6db3j4Ec",
  "key13": "5Pb7qZxFeEKFvkK8YXm39tS8gDwdM1fGwJJy8cmqLV5ZyNLyNDM4Sno2wbkUeeytRD2yU2ExtS1jsuXYwShKHpur",
  "key14": "5Le55jb779Hd4txJXVUmhUDRTfoyWqM4kkV8aUU5SWxERPmrVP6BzboTgXRhdDsNEmSS3ha7MYVXR66k2yodV8hm",
  "key15": "5upUEQUCXttzKbEzA1SvDcKf29bKPyVZJn3SqEPXq1TaKqohGKMCeJiQM6dujikmYxc1JB4EGY1ayrZKUi7hHrEe",
  "key16": "29ZRKuRMRQKQouY6Y5Bazuwhu5YWh6NVZ7ndyeNqrgk4iWSxx7E91mnMaPQ2gk9HgiLg7vRdz4PpuFMM3TKx9o3Z",
  "key17": "4wnmGx7xvXF221SdvfXTamgMUxdcvMUufVT55Zzu2brMTrQmGsQAFwaEuv5MRXETQw9Tys4Q5fjpdETcNoiAgqW9",
  "key18": "3BmqcrbjYU7E1xfiV9pvRhJsuMhTVCPAnXzZVzYDh5h9Dr1gyHHSSYyLAFVhKoQDXSsRdszxxd81NMmGkvunop99",
  "key19": "5Exq7NwtrZrgJdRJxw6G1bodVDmj7ppYa59PmQgxVrQAH8sfLhMwYn5MHt9bjiyx8Py9DtQQginS4vUSSQdFPJP5",
  "key20": "5Ec3SQZYtXYNt6E983813d65vwYzgWu1eaRjLSegiRfpwLDkqu1WkYt5bR3SPPeNKg3UAePBd62fs3Gr2pU8p1Tx",
  "key21": "4dQvg6HgbkfhEG49Dcuxh3M9y14L3DM6dVgj6WnD1ji23bGTUsuzcZMbmtqrAgypgfp3t6nGKuCEjFqrru1xmWLV",
  "key22": "61H6bcHkA29dkTWrZJjbipdBr1hfzyjhMwB5z6fVa3dTqS62VixCknDcJSrgBaRe5eNd92E15xAR5tVCe5WKsTPD",
  "key23": "4tToxiAsR8gouDM9Pa6K5k5ZhLXKwDhk4SsMJpARCxauKF9uaJiLcmqUSect7NthLmx5kSbaZ4egiYMDL3tZduE",
  "key24": "mMweP7HXQofVfnZEpYc8uM6ouUTv3xttbWUYGfTsGM2c8Aqu382xMoE9zxzkC15KqMEGqqJbS6HDgfULF1ZVeEE",
  "key25": "7ff3HGv7qcbp5UTQp7X13xLnB51o26yp2qipjq1z5ESSs8v8pkJU5r9s25rp9JXxuUedbT9rwM4hSARxUr2UBoE",
  "key26": "2hCKe1cJH3RUbU2i7328u4SU2Nj6MByU4fbYQnBpCUPKTStZjgtjibgEFDsjC6uMFCT3LVDpXZfKiJcwd5ZrXkZ8",
  "key27": "3oF3YxHN76MwqpPxjiet4aPEPDUNvHNqU7iprX3oZRTY4LirrJGjNDgC3BuhXjzRLU2kuhV7QWZKfjdE5bqUBTvZ",
  "key28": "5kJwYdi2vRD5KkAVgxhLQt1zoMzuyPE5isnf7QhhLqLuwzCmZfDPAyQxcfTTrCDc698DvCb88yLcYuhLfaEMssNo",
  "key29": "4FQwDEHSf77rqLDGjB6Aztm9VPs2CtqrcGbQRR52oCTfBhNBJx7oiAAjeQgt7Pkc5ZoMyeCokS1Gzd2MuH7joS3a",
  "key30": "63J43NGXfUhweM49sJA2B7LycdqLqs9rxHqxerY7WqCYfp1Mf7AdfMyB68mzUJvhHE2qxBovfTfUXb2gi6dugmtT",
  "key31": "3XavGFkWdo22AcfbQ2tGWvXKdZcqerCfzvoobLp26T2Aopi3Q55chSc6upeg6vkWTKC8jF6iEQvwEgc1fbtnfs1K",
  "key32": "3tVbZwfRE3xfJDMehEgCokwrjgHcAA7GUAQ1fuQfSdU31a2g2Cy2iYYzQrKDBEKyJdr2dYN9HoYfzadPXVuF7qj1",
  "key33": "2Pr84gxPoMrrEqavsGK2eC4XquwvpMAdHpRYQR8UX734CfdR8yP68ChWVvmTDWFNshg2dAxVWMiGQRGTRbsjA4rV",
  "key34": "39m5Ffhq1UE2ovSr7mPe2WVJg6N8KP3PoXLp5ZpneQVSd5yS778qMLQLFsKLjZ4qTznB1K46nX26L7CJuZNYkXt3",
  "key35": "3x4WkA9uy4ndM2vMpQFEHNBUgscnWGvo4tM8D1tEdzYnwVMDeP2Ep7APwfZ7ixisRrH8kbQbpDPZ8PJnMMijg6Z",
  "key36": "4ABki9c5bpy7YTPTmmLxhHgQdE79jL6hC4Fh3ddgy8mVsW7yP8PXBAh89Gp9ChM9ps6D2qDoqHkSMeeJbfgnAadN",
  "key37": "3zLR2JJTBJx5u9DaUhvTyAtb13Ri6hrJPLcJUy2x7iZpCB9pP7cpGrrJQ6zgLmJeENsRmwNaFagijDgQC38cmeq6",
  "key38": "43ZSiV5LTTaQRCM1iYakXshbQgzZHgb7iwFtE1zWwgJDXALgAPqAUCtj6MRug7fbLDkrW9Ag5jnU9Xg8svg5FMen",
  "key39": "4j351W5fBRMbJEoRNi4EkZrYqNafSYvq4Tc1Gts7RajbWU19Y3DFfhMWZdj3WhkzjEtKLPuAmwUtPwoTS8Mz8Pec",
  "key40": "64R3KzpHgexbRkXz1LUfnDctknSMtBKSxt1W1Npnzq6WZiPUmt9vtRnbELbGwVj6H9fv9bv7oVDqnVxxhvgam2yT",
  "key41": "qAsTrcoXvyETyWvoNxJsEBaJSSnYuvzgKsvzYaNspT8LFczcs9qZMfLzgjRE5mzqvEq2bNHMKeG592224VTXLsg"
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

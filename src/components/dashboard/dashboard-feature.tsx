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
    "3kBHQT6rjDGvcZf1CSQCp32hHVDEEgg2KkZG9riTKVQvTkpXUVHPjdfQrSBoAG68Q8XpXhNwskAAxaTWLR1Rnsmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hBs8dW4Zji2Wg8vwuqtmBEiFri9DhsV1dMiX9yinCzgonfqEjaVFLqFy3QCt4yrhKT7gjudA7nNmaYhVVUg5ka",
  "key1": "3Uxk2uHWYy1yKFjofqLR6qFbEbMq79BS7HeqhL7aRbdg5CcHKi842uA5Mfe1GmAyGM7yKMmJSimscCzSZY2odQre",
  "key2": "63xHcJXocoeMcafL4zB4cgyuM1j3aqSWUQqodYkyzoZwGd2o1YQJ4WKHsurJG8kesPxEXbGkjVudAXGU5r24RJra",
  "key3": "45LWeNi6LBp6f1X5H6a6NjH1riEdobEiZshFWBQ5R6NgCNMrCpAwRNRRwrhNVJq842dygWcReiNbGMnGbw5Z1nEQ",
  "key4": "4ecpADMvDwRN1nBHZjjBgWjzFBzzM42FAwkb9TPjdcpGCD4KoLHUWDEPyfWdFBTA85ccemJ5nuDud2uCZc2qSc56",
  "key5": "3J6MSB2uGnLzsNXjUsiHBvXDykvC32tLE7mvj6L8kVe86C5JFfUoAPde8c2Kn1nUbiLfPnHmQky1xaDo4Ff5yarf",
  "key6": "61xTrPgp2pYxda415ZdV3dLf4haifMiW4Grar8tJes95FUtYYdZUMifoJsnkGXHpe2Aphf3JuMyW7aBL3iCJuNK6",
  "key7": "3scf3u7mJ6g8hDFWJq6JTQwUtFGVHycgQ7C9quE3w5SiYhCFABYgCcDNLFKcGsck5ecTeQFEK4PyiPiMTRSCxCSg",
  "key8": "PJfEnUQN57hfFjWFvgP7zdCFbaCxnWgjVsuNLFapAx53V5yffDaGQJcBWDqShoXf9tRhstJvExdLw3BZsAL9tFq",
  "key9": "4uzvD52SosM8GqRZibYYCAysZeY1PiimWkCxVKNGB2auQdppZrycgFykDEJjok8RQ58FWdKRcwYaKAdDCD6JUvSY",
  "key10": "4c95q3YxQME8k14udVqG7LqBPWCy4PCR1PtsRiLdwv9KTr6ZLMKMyytnYLyTRuPJXw7x87DLQ7Jp5KX41F5pjyPz",
  "key11": "2HdR2Zw6oaTEruHhYYiXsk1jZ3xpKNF2VwPFjmnrPJ1ogDQqEwRNBqq43yB5qd4Jtb98z9x1xTCEuBoMjaXnLNWq",
  "key12": "28Eb4NPFPPNfudfYJGTkHRzBWZr1YseWiHWaY36b1T7bDTtrY92s5gipvVjsbBgxEE2bt7TKv3baPjRRw1iawWw8",
  "key13": "3arLFWMJynFTEJLZZpHo9GaDnYjsqg3FmBqYY1a2rFsqn6yrkwwphjRVe1yXVjYx5e5ca9LYK9j5TVaoWct4vMNh",
  "key14": "4dxXLjUqWaqqBLKV93DoC6NQ6r7BNhVztYV8DdDFuVKrKRNXrc8Lt5dLrvREeWNTngEL5qndBQ6sogLzRRwWJTY6",
  "key15": "24CzuF3CUZ4dj65XUbSHbHqQSxfDNhDXAjPn52oKh6Gqj7zaCTFrMZsce6u8Xaez6gk9NvqbiHkGdFmhAc46L9cX",
  "key16": "3jNy5nCs5xFFusVwXGBs19VbX8xe8dNe2noXt5yCE2XaVcBxvbU2ApVEd3EV2LAuBYHUQ74XigZzkNKJ3aESZ26s",
  "key17": "GwbcbfyenfzAUDaNkQNbZuMi6ush9A79aupUnm7yCrLJ85ksupNSGE3GfFYSimEJDTiDtaNmeXCdNhMnSnryedF",
  "key18": "3qB1fYzGNQEdCdXZq1gzeiPdkPQuGqD67uqUV7VRRsTGcsScgYCjKXJLNPTzxdABcBoNwvBCf8pjLPbanuwrHCN6",
  "key19": "4mi1g4AsfgJPkUuovAoDbt9NjD6RZpL47KheSGgaEu8NFPfztxBeCjrUNPBWS2xsDjP6pEoPesWKMwRDFrTExFgf",
  "key20": "3sesX42goe9ZDVZC32g7AcwNtnK9mjsZuahR9KMwUHnLHAwGvenByNSoLFumGqdHkcSAnbrJCkNFqfw2dDjFLr12",
  "key21": "4LCm51PEkMceomgVznBE8K6viqfKhE1ZCeaihuPZKM5MzwFRYNSkbdb6E5cyg1P547aUhRPdnaFy4AxQMW8DbpAN",
  "key22": "3HRpTRraw6FSKqaWADGtnMz6YiBcz1RLU45HbiDYjGwAmC4pYS2rkLGwLBySAA3XEgedEsR6GDKQMT2XyQVVbeUf",
  "key23": "4hpsBNsegsEyEGkDNHJ5oE2Dyij8uqHMjXaBsih2Bcg2rzjhCoRAAcfWYpzKEzMJWrP9WeEaKrkyWUN9TxTRZtWK",
  "key24": "55W4jj2YNAwuUHuzZmYvii1Z95HEbmMQ2uPXtZsLvd7hUVhRhAJLcxdKfYN5bWcEyQ4rHNr52k7DZGs1q9Siqywb",
  "key25": "2DJ2PFqUbn1im3YwSeENeeRLnTXVQh9f9My1eGLQ842oVvaQ9GZoLRxBPs3LfLS32F7x8qA7JWNBoYaHLgye9cY1",
  "key26": "5SBWX4TCvyCnnMn9zKCCySqGdxbKysd8ADb8YtiYuyByDfFK3FzbMJiYypVedN3PWwYmp9tj6638MJhCd22qcXr1",
  "key27": "3Yvde6paVoidPMiEEKw229ZXgMnsMPGxLNnVMpRWuGss9kaV55sCvRJuDspAJPeiLhcqmQLxtA93Ky4yopPsqpkA",
  "key28": "svbJxP1bDmjCLTcktBNqahrjux2ir8cJJmSaURgEdfJ1bb39GrR1GhhTfCLqikMBP2kp6Coh6MLVXASFVmGZRKX",
  "key29": "EfHqTC32UyfwQ4JeF7kwuAUvk6iFQ2ZJKEZdokfZUB4zefAbgFVaFuxpcgPJPx72BPV2bMhCEq2nXKnpQeHaL5C",
  "key30": "3QvLTh2kJ9oyzEs6TaHy1gaxeebNLbuNihKcJpkDEP5CaYuJY7CCWAmDLaf5qnWqzGW62ZbLYxN2sbWaXzTfWafv",
  "key31": "5keSUAVFweFrS8ZJeQ3YokccteGVd4UxDPNAYshYdt2yUcMSDpTGgGbenftSK9KxBYiXYxiHg8Fx2FjkcykPyuyE",
  "key32": "3Tjzznifw6nfYBEN6MQqryH4uQ674svFUQ93DERhTeRVMm78g5hj27vRG7rzjjdkGpfh4VSKcBZaRwgQ1cSCsHNo",
  "key33": "5LeSqQe9y9EXZsNKacfmEnTotDZ9comuQDKsZfk7iDLF8AT97gUq4yNmhG7H5JbWeBnsQ1zLCB9tJzmJUQDENZQh",
  "key34": "3kAMNqkhBYRAMrRG3JP44hqDsZ24udoHoq4geFU7viwY7FSPL5gRvBwveoB6sbPr78f6rSSJfvhXAEdU1tqHWMYQ",
  "key35": "4n5eSb9Lg28msqJ92ufajV31i13AGyr4ezyFvtUMV8E9GDSGf1bfH6R8HETcPn4YsABX3kGnfam2ivwahK42RkXs",
  "key36": "ETwYQAryCG7M5D1p6gv7kkLKXthQgzLJgifs4PhmQZfMH7jaSCeCdUG2KycriGeHRhbvXcCGEdjB1jMJPmYQnyw",
  "key37": "3L9S7mfU8LYtBLH3og5eGS2KtimsyexXdq9aLMkPeDyPF2CvFXHabZfCo2mM4GGLjmdiC1qrC8TgKZvsmp3QQjQF",
  "key38": "4ALTxCQrpxN6zD6iSDKtbSdxqjVYwEq2i22wYDwCAj92ppLE9ZmECynuecCiXLATTJE5QJbALMLszUD3mfJtRnKQ",
  "key39": "3DosDVEPJc9cQP2km5wwdq7QDJDHX5JyLTvuJNeHkfVVW368k17HUxmqyrnV4BZWeQV41UASY3nHz1iG2STH3ViQ",
  "key40": "5uiLzszGencPeQBhiTemHFEk1gNAMK9xjyYgq49nZSkx9biXR6y8LZuL8fv8NqKq2KyZU7wADtcNtSEb4yNaC8Pp",
  "key41": "3Rob8kMdTB71yF87QnUwhkoad5ZTjExETRCLPJV6pS3oz31ZzTCYzkpixo5FneJy1Tasd5Jr7JX92MRxaFwUB2xE",
  "key42": "4ytAYWPJF8agfKP8wGkyYrD43G2LLE8hfh688UiwxcJGatbaFGX1h6Q6z8BSx36SoqkYnZvsbnqHoQPpc9LxyFVo",
  "key43": "3CkfC62KxVEQ8MHVByN2JUnuyHZnkDmwuSPcCWtM7wEKg3J7zLBWPZfPpNKFajYNKjDkGvDCUdKrVybLfghFWdFH"
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

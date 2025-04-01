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
    "5Foc59akecBLx9cgXjRU3CEWqPggsRiBqe46JhXcWuaJAXYJpgDx2EgzxzECmcmWmEfoJMbT91HM84gkQjER6YpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJUGErC24E6Khjj9ZyXHTBCsp9xhX9UVjUm9ihqEGEij1WLEv73mbn5mNojhEGwviY49Pau5xWZXzfera1oWdtE",
  "key1": "4PdioenxCfX4Lwou65k21DsDZRZeAmSyU8dHvqWkFeyaJCEA7eD5uvHrh6RSX9pWQqbR7EybznMaMwgKojFCCupX",
  "key2": "5X9F1VtSxjRodLr7DX4XjGXTDtBW64RF9QdB1UB3xD3vGDCVHzUaN9NLhxF8CEZH3Hcn1qZnEkrNECT2WHfJudZ4",
  "key3": "3WRXFMWUU4JJWH1SH98wgCbQfpbea3cg8erVy2uewGknjFi1eAM2zfaUZMr9fHSAfrNKKgsNdyGvV5YScPUrF4oe",
  "key4": "48oYf2Kr6qXbP5CGGugHaJDotPmGcWyqzkqC77cAci2Ey4PCriUUqQPZHbVppe7F19hk2RX3r8ifHVjjte3oqTzp",
  "key5": "TjZSiwgphHZqg4iDPC7K9pXHQ5RnuVNfy72NAWmptgYn8gUboTcN8bshbk1brnfBxPZzSXRY6tdEXtn4t3rhgS5",
  "key6": "4G71QiaWRHQYuFRZK5F1fWbkKwFPH1vS3kikX1rsTrCjYX1zX9PTZgXNerKcCCxJ1B6GpYZEYdoJWUt3nnpR535t",
  "key7": "66T29eE6Nxz8BHDfVhn9wpVG4y78y2c9jf7bmTbgZxiH6CH3W72iXjv7Ut6y4iHFwUDAf5tPGEUGj1852uAApakR",
  "key8": "3MEpK7Ea3afCmdKxaBQoewothNV8iz1repLKvgmzS5pfohsFX9uqjjw3hbZn1KPwQqN7z2ZLjJvHwtFhtpKJtR9f",
  "key9": "45DxVYHWdCiT8MPRtvUuSGxS9VNLSRu9UcD7qtWQ7FcHhW76gMbKtkEP5SrwftyFk3vfc9h4feMSgWS2agqNXALD",
  "key10": "5eVkKJPqmSxnQqxKSfHNZRoUU2bSXCMLc5kdQT6mFuu6QB7XjgYxA6cDXGLCdmJTvPhKrXpVRp5uVyaVfr8SEdFg",
  "key11": "2Z2ctE6UNYYDmbPAaRM9gYm7G8g8KbBQZXtSYtGKicvM4p1ube22yu6zwkQguM5iXsSWpPLfPiAXPX2hk5Zbhyyi",
  "key12": "4mAi8TpfpeaZaSBXqQA1tL8XCMxf8WDskuti6CbgyQufQSdxz5dRyLqSyfstKWR9wmZdmRgMM6CTmVbi4KXcFbki",
  "key13": "431jpz7AFyuUWeUohG1kH5KyaEDfZ9mxdD6QvGBRmf7jRYhW4vaBTMPKNTXnuhRsWG2HfK1c6j9uHjxNtt6KxTcL",
  "key14": "2NzQo9hmVwULd5oWSiVkpTemyaCWsYVUPn8wMpj4uFG1hEwmgaHgSANCAktvoDnvpD6yevodXCJzLWgNrxXJJ2xz",
  "key15": "5PbLU7bN9zAioE1cQwViDFV5enQGG4NPzTE3txFBwQq1Jsq3QTdGuFMv6pbyonsBLe4NGT9xoTT8SdwxcgQQMURP",
  "key16": "3JQbXyU55vjQH4uLiXXBDK4UpMrWrpG5gzXyi3fHEv3zqvANbxTtMaDb9L8Jyng7PiwaGp3C2jSritdPw8D1wqth",
  "key17": "5Zqi2Tk9CrDekYBDSjeipL7nMRZDrCvJjpfWbfMF5ZjRkLBPx6ttQJewmw48ifbXUUVYRGHaXbYoZ2FzUtv2RzY3",
  "key18": "5djekkM2gqyAFewibUUEVQDMURrBtzNBdoPx14uJyhE131Z9wNpuhZp2gDUzQfD5aYaTTfcGzZigMMLfpJFRihWP",
  "key19": "GnzVHstbaxfYJ9aURAVrcrXEqWrsgWFuN85a3Es7pxu8N7s7SMckSRXEN3Byfc4AFqNb3ZXLMMY9xJESK9ck4x3",
  "key20": "4HMver5waus49RdGEXwUxgWbAyq72ksotvA2DaZSheboMNvdjdSw1pFqHNvjmdjCmb2puZnWBF6RnHxor9YPByz8",
  "key21": "4zaqGW4oscY3PGaKuiThdqD5TGmNcryeo4SLEZXSaNSk1Bx7ox1bpv7xAXGtn6wMBfNYEwdF17kfJrmwGs7b8v3p",
  "key22": "GscaTQVHiX95nicdgZHgVkXv2AhJycF24uvtfevvUq91pk2Yv4Q2QKBA3JJbYnRRH15PJeFFovKtQcS4DwskaJS",
  "key23": "5v2nVTvbyBNvEEacLPrLbJqvT6xKEGzNpGVoY7kUyTn6CZ2Tx7eKycXXqaGJFq4qU9zWnbCb9e1ndVpaDBPhebzj",
  "key24": "NfQNhE3QYppGvNgWhwegM6d286zdpDGvT5qGYGNQoupvguL8ddvPx8WRoTzuCtKZnijHnef4FhoKi5rs2RSaXt1",
  "key25": "qay3QWRKuAcpnTfpiuPXNtoMoj58GhZJYLPbWcKCYg4FDP2B7ZVawvTvsL2YanVp7rb1y1uEffkyDA4X9gjaMnp",
  "key26": "5uD3uUsLBUtkxanjDWyYhFD1j7kHZGto9QpHuYaux1rFyPmahE6iq9GgMzE2N8j5LZtDxheqcDXdFbWELPZbse8m",
  "key27": "41sg9bwPqipdxZhfLtYmsXYNbed58qyfMUyWKP1CHQpTybv2qH68ukS4QmbQDPs9XrhkRwrko2T3Hz7o8kWXKeb4",
  "key28": "3xf7Eo2ME9jVCDrep71HxVoYmpZAsCqgnBLN84q5CX42rCmgY78Ri5tnPZYBieK8maUrpw7zA2Ma33Ct9PxhThBw",
  "key29": "YdhrmPaseHpxGhvwf9iJ1ZQF8EFMRSKNvncUfornZzimCBiv4KcoLcDbS5NQmxpSFjfQcGrFMtWqTSfyJJQ3MwE",
  "key30": "xq75JtCSpjXaB1cszZQFpEEGYx8RrXvfuQhDykLoG6vaMV7GCgRBDyRxX2zpFD2qMxPc3dcfxmA5ut5P94QJ3FG",
  "key31": "owiqK9ESVjHr8hveSzNPknUPm1RBysfCJeufM9mg6KanxxiNXgvAzt7q9kxjakukNW5othfqxBJDakWMa4hz6wg",
  "key32": "XQABgCnQLUP3HHoUbekmUdTpqkejqGCETCcoaoiNvqTkpKFoZGvEitVxT5sdyrsd2gLrqXjJv2SKstzGFY1oocf",
  "key33": "3XXAoLysfegeNhWizMS9i7EDbK35abpzrZ6orcvGpkA11jw8Vdw9MYcDho4GbGrxXrf6bic6e6VfaLmvRc7AiXgC",
  "key34": "4jdeMxbqsMJts6KoKE5Mt2mXLZbfLmUi5zrJ85i9wYqALxrCVNengZdj4vMX4P7cSQ52KiX4F1d7ytEpP4dMTWDv",
  "key35": "53JwAHgFdGVWpb3nsDVGu44jTswcACpA2GMCGCBGuXtWN2Dt7i1x8FwxYA69kmgsruefmSJt5y72Lp8W7sd7hL4N",
  "key36": "5EHh7T3zJbjExdaiizr5SbbnSGVWEBn7CJchLwF7ckfu2hJrkeiqnyn5vADLtMJ7zpg7kyXRtG32Ws4gTVXTA3GX",
  "key37": "51zQ9VxGtkixi9pJ7pTiqjRqUZBFyGrTrXL6fxnTsg3umASdv9bpuUhWYJhdAGeMvC9fpV65Y7CK4pcASPAVEZq5",
  "key38": "jGRQup5eC68yNcoRkg9WceeeEGRnLkdxMJvfUe4j5jdkn2WMAEauqzJLVsNHHuSQH6YewkbqgpE7SbKevkNJtY5",
  "key39": "6U3T51buiroPoQiBES674LC7UEMJjRTeBW4R1nzjWbVXNNjcp11ridQcU6fEgQJvcRHkVwiPMjv7kU8gJUaKCUX",
  "key40": "5FCMKEYzfTbN2KK931i2khznbAoAedTMMK1d5yHHfxApJyUa9sBjM3vDs6QroqXTMPAB7TPTHUq2msYgoLsB7uRp",
  "key41": "2fUsRFFtDhwBP4D7gBzrHCkgi1yTM21n24S6r5SKMFphmTdq5DgH9zxConYAQBnhgSHS84CXsCi2K9G6om64D22A",
  "key42": "4KCRBGiohcbEQ9o84nniyi2DJGLEQgYfVZhi9QYiJ55EacwJPkeUrDFPQhUJEdvX7XYE6AcLarcEz6BesA8xAKk6",
  "key43": "4539n1RVf5i6Tvay5dnnrVgr8vw5vWvwR4y53d29edAt4bSS2THZaYgBzY8ZoxfAXtCzVjhKjugeLz3Y84XtBNTo",
  "key44": "4Myeb4z2NyiKdkhzAFSHzrPvuL51TrR29E6PjLH54fwb5tYnTWjTeMBmMCFvHP3vBAJ1Cu2K54TgxsCPPnsXNxYo"
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

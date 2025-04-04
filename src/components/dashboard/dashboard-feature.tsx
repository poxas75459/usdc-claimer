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
    "2MopPyBaFUNSDsmx6RuhZSH762d92g2Djpfrxpxft7ZPp5ideM154c6Vca361qKQfzjy56b6BCQ27tjyaJSaFnTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gY2aq39Yj2yWnwRDDE2Zvgc7uGaAGKZmb6RjjMCc6KEgRetg7TAjLEm4FXdqGwDPiu2jB37ygPKRNrCRy6kw7yU",
  "key1": "3FdAwxeeVKQ9jxBnngq3p65uLVH1SEgMozgDh2yS9y5APWah8YNrHZSCEj534P5w5c7vbTor6KEfY9rF166CZLHJ",
  "key2": "3dKTHfnCuQqjCZuyq2b2Z9UhkokeWBYru4EzFVbMykFsLR69Yh4WkDyKgZmj6ZmTPL9tD1yNEvXRx2RP2QyidQTK",
  "key3": "BNK2aseuteXby7x4dgYaUbt5Xn6U1pugQC5BVW5WrVW8EoShB4FXR8waxfjzipGcfV9qSkVEtPk4ZR8XdCgZccJ",
  "key4": "Nfj5PcpDHpLz7WCuncozZXNBJNaVEzkbwzmJZ92vHUjwHoCMR2nKNyn3547RMJRJL78R8Da2Sr5BpeYn7KXj9Uv",
  "key5": "2HLCnS9HWckqtWZbn5TLq5GfWuKBcPx4BWLTBVvCQ57vZ8JKggJGXCcwvjZ6xKuwZqs9aec3BeA9jAR2oXzjS1RR",
  "key6": "1HdAjHERpim77VFf4G5VFvpK8T321dcp9cX9nEcvmUWJ2o1aLgdzgnCbz2uGfaTUsMx73ktDdyEGSCowwuswxxP",
  "key7": "3KyN7NSvBHcBsXSz2bRqPnDeyxC8Fw1pahcJ6UXtfEMtf86ybr8JAocxSR7nXwqhyVuLDCu9eminXw17r4StwRBH",
  "key8": "2hf5SjT7Ff6BR2e6uDyV5DChFpZtUnmqkq2mStLzehjPTeS8Cqw1B2pzuvungZ1515EM7jx4WeB68d3H2hgvEVgy",
  "key9": "4UEsjmZq1VCkSF7XG7BWKQkeVLJK5nAcutrq5WY76hzmcRgBPz2A4nemtBiqdMNugwBKSwt9EBQVMB2ZwNqZWhnw",
  "key10": "5L7GJAwrEwB7C5a8Z8kGV3oxR9BfrDacddKNa9oD4Xdhr372T32RreyU32nxaVHRyvg2qy54T3sqoB5moDJLcJf3",
  "key11": "4fPHqb5WHBBeyX9KgMvzgEwvPKp9XJQ2gSmG875reEq5V7XBWpznubxRWtWMXSMKfrqBTquEGzUAqZuRwUjFL7Kb",
  "key12": "54Kd87Wsm8N7CbeMuPWZFSDV6n15V2s44vs7TSacbc6vXvNhczQ633uFdJqWASNmSuuSeTPMQLJkUj2B2XgAv3Zs",
  "key13": "2BHFasyC2Y4Lam41EHffmPKiB4863WiT73nYBT6W5AiyXtCqYk6KryerhAbuBBmw6nrYip1Kn7DwTNL8Wjv2yssD",
  "key14": "4aWc36oDtbyjorEzcmtQrwBzMFbNdwv424rQBgRHUbegSGdEWx8tuBJcEPxnVzCtfy788xJQ1J67TujLza7Z5tQ3",
  "key15": "35zmiCbWKdjCpfXy8f4VJsatA5UnJxTpozw2SCo88D7DrUhjU7SfVb2YUJWiwRS6hcWHBvo2j356p7gS2LWqZZkg",
  "key16": "2FeCJjguBxCeQoFEChtTW817GkizZMvAJkv4rHYoc98tWfKj8YPgDZFbbWtQudLqMSD1py658pDY34VADvkVgQjo",
  "key17": "3Qx7zQt6gYSrPaRBQC8wgho2bcV3CiEM6AEGe7YWaD4ZATgGaQVzQsBLkRsF5ngcXBbfh9SJ3tq7PMrt7Q37UxcA",
  "key18": "4CPkDiAGcmiaySythSgsjoed3xK6fW7jrmcZ6MPFMhdwvSvtkAFM47rV8jqsYMUh2nirdzu5XWXybw3e4moNiWQm",
  "key19": "mPmsdY61AnJv4KLKHsKJFCTvGcKEKxojfTCGx9iYtq7dSkVgDofcu9hW8WMqTF7RwtmjaiFWKiVC93SSGi8UR4P",
  "key20": "4XuSqhEKjR8YcxJCmNPLyzkiyMSKB4TRqHNJscEwLTuBdQjh2GqGXjRH9ua3BDu2ZbjU9kDtD8kkz6GyuyoHNpX3",
  "key21": "vw5WV6KMpHkz9pgG9voF2vQFSYkLWEPV7YA7eLmnoin7JjpwtGLhnj2dNszXQg5HLuFwcgg15gDEjoKWcj8wKri",
  "key22": "2KUNzhLKLNVtq34kKfRJrsJC6RDkiZk7r7FYQQ5Q17hpvG1r4uZ1GEmWKaRGS9err9Ao1o7f1P2iZjzWmAhZMfhu",
  "key23": "66HhYyCtnsGzS9mTdL8guruVRDdcvVMpS7sd1cnMCr5UqcSvmduQ1uQWBKug86dM21cAQ2KsEFcTDXU6v5DYynBx",
  "key24": "EcwVyR1RN5pQaLRLYYfKHVViSG8XAy1o2tP5mGHCAek827gpgegyWENwYxzo8ByYJZNxtRJAfZFFyrAsiHrMADJ",
  "key25": "428tiZXgCJrWu28eEVvB3iQeNxHtmraAp1CFCr9rwoDBo2S46rvNW5HuiHmFzp9qVuLQ271CxURXnB3usEsYwFvY",
  "key26": "3yFCrdzuvV3AU33mzCLLMwJV9Xf3Bowk697QR9FUxE8VV7dodHXwMj74tBaCyDTm6r2oFtxtrK8WbqKozyKzED9w",
  "key27": "4qpfru9W9SmppSLZB2bR1TeQFXjGAp2YFngybXwwqVKqmqKgRY1JYvvpniQVoiyM5sXBw33nDJrD5NHkNjJQeiDJ",
  "key28": "2KvqExtomEFKEyawjuX8qqWDvgdQWjBZAyQFbazqjDRycaXLr5bhqKnXa7ciYuPN7hon8akgN9Y1jAai3H9mw6Zu",
  "key29": "AWBusrvnRVQUzyTX7M6kQb6JNKXehiY8nxgKThq461YUx6fp6BZPX2qC2bsfmKJcqbM8wAFUAvW9axKBCkiNY8d",
  "key30": "noVn8xQVUBrzMAsM2B3kLy3C21idURxzBqDRDW5JHwLd64S6w6gyU8BDxW3RKJ2bsHbzudQZhMabNzvdp8o6Yrk",
  "key31": "5x8JRMPxVxSCcTcxSHNQJ8MVdhFunXK9yep5KxJiZeRzAx1p5B1VUE7Ds87NGbarVGv89312JWgVAybty1tt5tt1",
  "key32": "3UuhfteBxxihDWDNACxBo8mzuhS88EtKR3EYrUSu9iPK5UHbgXuRHyKyDKHfLQTJE1u8g1fJkh8Z27EDLmwuHhE5",
  "key33": "3fhnULjACoP5v8yPoBAjvfRsjxYew9ikEzVg4Frpotp5bPAvrZC3AViEJcJ7NdXKrPGQgbvLRktT7dFTJ6G9wqH1",
  "key34": "sPenRddhhGmDbDyBt1MgiMoQhaz8Fh9qRJy73fsGA6FKpZgjs4Y5fmixzrL4DRJYCMeWpEARLPrVDqRiDsbQMtL",
  "key35": "28kypeyrDGZeXsG2qD245FW9kuxsahksGUK6n8GbipK9WDMykq4G7gew6YHMxSaz5JC4yV4o3QojbwpJwuGHgfYv",
  "key36": "sGHvDE3pLkBMxWpB4Af3iN7MWUM4XQiEXPACTEJGPr52Av4fM3dwfSaL52wYB4Zz3QPnQR63faho3sVAmkBq1et",
  "key37": "2aLX8BDD4fYSKSQ8RAE7yzFeHP2QJwNf8sYeJcYbUW3wBjrhn2MdQEdDVfwaVanpyhjm83QB34ugSEZvaMNMwfmQ",
  "key38": "28q6UjGueZDCBNDvMhRnHG9qMD1XihmQa8XAP2zKYG3xpw58aeyBcQj5G74zQB5gWR5JnzuEt4HJCF8T2EUvdMpU",
  "key39": "DYGszXGQXudXounhYfwnXnuucB2xh1Vfzq7FCSzAQ3Uf9WpotPnjgEasUSB649sPuLK17SQFcP9ENaYbL6bqpvu",
  "key40": "31PuRNh8aLiMCLijQm2YtBbRMVwFHXceQCdUo7Z9DdkHXGMXhMfJUFtoW8M2wSRh4Mz1DRSZag1TbhGRqmxeyMEu",
  "key41": "5AaW8JoH1ukJVgZqKTdv24UzWPRAZCZs75uY4SgMS7JgivgCopw4Ebn2xbucftwFxXkvKb1LhhZ9ZcpdZuAYj5de",
  "key42": "5Ye3KVv36LHgPyTS7KQ1rz5m2XeVAdwUbAthHDmh56hcW33p9THWNEb34azndg2TdPkCG8Ai74DQaD6MA3tM7Roz",
  "key43": "3auMqqDNMi5cu4eDTXQh8yR3JZ3fcQrr1x2W2YSLr5Pp4N1RE1SJfF9KUpquJFLADDgUdtRzRBHAVBTp4zWKpawm",
  "key44": "2eG8sApesdVN2dUVKUF9YrvJ8Ys1rmPguaYJUhNi1wtWXPy2PVdNJUyxeDoYw331HR5krHUK1weDk8jZvfLCLbb5",
  "key45": "5Z38HP4T7yABWQJ5BohrR95SKJaJmBDifCW6NEeF4Du9LLcud2nquXb6LjDcrACgbShMAzX6xhkRhvnQVURiiF9s",
  "key46": "qvQcJkMdZcrr3f7BcE7kNqgav3RDbuAzHZdtQWviSoCJrYkxirLUaYNa778EjayDoPbWq2uw6bzAUw5H5teJffY",
  "key47": "2MFqytWnb2UZDPLm1eJAhmcjEZoK5yxZ9iqoEbnqKWB4hAiqoenCqNG7MSwc5SvCc6NTYCLZbspUFD2qQFzPgV1g",
  "key48": "4zYUNvHv4CVV8DckDcfyiWUcgxRQDdiMCvt681uavqiZbSr66PsoDSUXfSgyJumqru9N1RUkPE2386RHnrT2SQKE",
  "key49": "f3pMyg3dFi78SFRarW5PN5dJDDNqMz7tuCgwzJVoYYfxHQLdxAuyvqmCh3fuSAmP4WgZmrn94opWhEZMeHF6DYZ"
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

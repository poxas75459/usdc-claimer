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
    "pGsWv27ZkJJQsyZTd7nN5ti9eTUdsP76oat5LUvnidp8QzR13t9SdL7AGVcBPFbSRu8R8zyJobkSHErFUQURNDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnjPKPqcZ45m2Pxm85k9V7jjB7GcAHyPgeyiHQZFiCwHRaQVUunH7b4mKqRXTP23f57SmatnC4oakeiDYR8RcRw",
  "key1": "2DQDDWwPQxT1o1Nbn98UMYXTMWcYi5FBv9JDvv3QCYZRvw69VnNQ4rn4GdeeBNQVBbZ2JDToHmoLv5sTu6Fi1Rt6",
  "key2": "3snWvLjZtUqBj8QBURuc4vs5ddHk75DKY7tVJUVu5UgvYLXJNEZhAaLhpo1ceeZ39BPQh1UvfwJfLYsp2SwfXgi8",
  "key3": "44wbWAkcNzGLSiLhPCaQ2W2fE4aAxf4rpKVjRJNFSEsJGjJLxhnkqrXHNRKrZqr5wBCWK99X2CQaNWAkjJQfknKC",
  "key4": "3ViTXifVzBY7fadSzrJqBfX7oTXZTwrVRUyNijzGxBS3eBXWXiZmCBQm1i8yDQH8mnk1gnsy3zUie17qw1c1S8m4",
  "key5": "3sARMfa9doUb7FtyheUf8LwQeuYmugbDjcP84w5T65uKzPgDWG5AHuAe7D9cLGcfcLKd7hDaKPr5gSZ57moCDnL3",
  "key6": "4oGM2WLWtBs8sGk5K1REwaui8FNmfab4rvKaE1kU1mXbRcBkzAitmSxEr2HFqMHwhBoPwJNCg8ctFuWvoxm8axmh",
  "key7": "3zyn6ZzLEak5XPDkfDfbhxnbWpj28r2pZEBzN9qfpP7nKjgmLGPR9FEsVKpENrFgQN63dK6qoeiENuhY7jp5TssP",
  "key8": "3Q8pQetFUGANSwa9b8taJDzJBQQpXfd4ZoFwu2RUMbM4rLMJhbPnCWoi2gvZwDhxSyjHgBu2Z5JDwSE9nrwQ7Qr1",
  "key9": "2rvpRf6ggHEn468vre5d58hEryj3LYJzFA4YH2Fa29zZViFJdq1Z7PgtyvsN6MK8fta1Re8PDqKGFWZ1RDdUEe2J",
  "key10": "2EtKTZvm2R5SX9PCvqDZZxDfoLkVVV5LMXZQJEWGp45rgyyiat26o6jaS6hTCtuhntnxbPx6t1AEn8dCoifv9Lzk",
  "key11": "2xzHkYJ6UXFXTignY2zuDJTdNYAXLLRKG2Dpo7c6Ap2GD46Jb5Zowhq89hsVAwDijvRgQ8mMf421RiC7pzp5CcTU",
  "key12": "4dvcdTu1Gtyt4BsaoJUdhmjDAJQr5mjd1zK5ieEUcqpktuMAtWXs33jwGiJFfLDhz1d1duVXQ1dtt9chUc8KHFED",
  "key13": "2m6ADKqAD7gCGAoYMjMweK2iFRoo3d14Bjv3CkS2HXx95cNySz6H6f5Y9ZcwpskC4WVk2PKXsmt34PDRTvMopAHd",
  "key14": "QXbriPFcKrHNLVjTQS3DmWaeReXAYQ9GX3hfTbuwfjGaH3P6xDiYCP1iBLx3r88FSBbMAzqxowaZes32XX3mNyV",
  "key15": "4tkN8dfCuCaxgYzicE6vK5CZnHrwm2yfb77oBV2x1JWbb3WJY7VdyL7XamZm5Xs7bX6VXxtbcibFwHis5XVqhe82",
  "key16": "ZTJcL35jLM4Dk8eHfYHaZFxT4tWa6QRdvw31qAj2NC7EQPn8Kn7BQ7LhuBRWUYqBe4hjZiKGBET2TcaT1wz6sYs",
  "key17": "b29Mgj1yHd6zCSaghC4DxWohJKhdzBS14t2myoagCEzD9gYbUHHrsdpB8Cr2CYUyjoCtm4TKRa2qAZPCLnrDvS8",
  "key18": "2dFz8TMBRuPxBXkVpML2gm59BWCTRv72j7RMgKPKZHKFxdwkFkUYKvyzEvV9Uv111oKjvQztH8DEAAAuuHsb1FJW",
  "key19": "5MRaQ4buA1MebV6MLJ7m2BkXCA88r96Wz1TPQb1ticdMhaV1nVLpq5y6W79NUg9ppAKNG8fsuGSRJdEi6Njouabk",
  "key20": "4fvEL9NzoNJngJrhLXT1QnPtG3zpXuQMtUdncsYABaYGWsqJqQXWrYu95jkxy5BQo25KqUb1YDRxWjb2M92GA1PN",
  "key21": "4zZ7yh3B63JnwciRscafx2AaJTHrrMWHaJF18GW3D1p8dcsourNUqPSto6ezxekJX5XH8AmPpn5tjCR6Wj39D7w4",
  "key22": "5xmxpxDzhoSgyExqjHFc6tSudW4wz8Tfwhyegkji3DbxyQJBdG9JzdkkdyHPJbHtDMdzKh1KzyhM5Fqefrv8MgJ4",
  "key23": "3eiVMtJyrA7im9vB4f7e5yC1H6LyVVJ9oBfJxWcPHsdhpiAudus14BL9YB4iwCS611LxkreFa8H7q9KyQ3HALKnh",
  "key24": "5eG13rpyDA6om1yCpT3AuYfT7Dw7BUna8D5JMW43Wtax49JWTFubnq5RfYKn6u2GYPQnKYqCrkrbMkSey6rhdstQ",
  "key25": "2BKDqSZzwvD7Fmtfp4JnKqmd74aGL3mZJZeD9gbBqTb9Je83teqwF86x3f3sCeoveHtk199vhk13g8uNkNQjVTqc",
  "key26": "5jE5cXvKr5g4KMDapjUPt9nSj1gUoEFeSJDeFWF4t6ay3Dyg7vdhGqTdrDyzycgSKRbfq6G7TDFWxR8Mgcje92od",
  "key27": "3bRn3khrZEp9iiCqFaR9vKQmZcgGPypMwLg9NYBRws7F6qi6MMWMM2MgVWjxzpBrGApQUPHowppHcjBFkwjaESGD",
  "key28": "4idFrdPTm7cwyjg18HFJ6MXCf313gkbDcrSsYCvY7S8AfMBcRk5CP5DEd7dGPZ3fi6TmQZbVnc2GECsrdAZbcy6w",
  "key29": "4g7HcKZPq1sF6DAgjPssFPF3UP6W8vJqoebQbg92WbaP9hSNVLBhSywhhbRo8zCSzeAVdmxT7mAfcbxHkLLSHayE",
  "key30": "4vXxSYnvbXMzeoL8gwaBsBePikTsDniB7rQf7YrCLjHKjkdf8f1qmLXhYYsBEwjyHfex1eZoByiJhQeVBEYE3JF8",
  "key31": "3TWkNhrH1JQ9ENWZWe3AdGb6tRofiWeBBoR5hnUuBrXAANjfcNzLTLrPZyop2m3neNg4ZKCiFHThbYUpJC6fu13L"
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

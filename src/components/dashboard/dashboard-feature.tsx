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
    "31u9c1pJJk8T5NUnXfdvLWryXEXfMeHmmtsjEURRodS5DWR3XThnTeNRyah6RCoApKqJnR21PcP8FFeYPCSmPvX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9zAfTohUNsGtNtLuDPprWErEyCAhvU7bV4Rr3Nqaik8uhB6aiACWtfnisR93cSzaQJ5fMoHf3WjTAr61d5TBk8",
  "key1": "37hJQhBVuu5pjziNgtqRcc8xzXu51UG8yjKRzWR8DXhw1qnDy6sGm5yE1UNqHaT9hgz72Hq5E991avFesBjgNJ4R",
  "key2": "28sJxmijGKbPCuU3QGEExAUDAtKBL2Jje1coPHapttKJBu35v2qCr1PWx7EdGHGgTWTFEGeLo2HbHhYnhRc36s2j",
  "key3": "5WFyZ84Qc26cRqaQwpCTeBUqeqoWUGyZb9oijWfa1yKgbJLWbEpUT85om7CHAPVicdTrZbJXhMCfCpfM47MpTR7y",
  "key4": "3k9cY4zc5yPwJjAcJBFNth6tRS1pBXZTD3U4jkJPNRG5QZzZz8TbCC2QnDSX6858LFPYckCxeoXszch4FHpQcQFc",
  "key5": "4uAXvP7cpkZCgMKgiAqHu4iskrGfTgUm9ddzUg5XSNUf6fwKpXFJ644sxynQ1r45RaGY3n3Kn6jBPGJjsAmjT3Yf",
  "key6": "4tmVStnHDADCATgAkZNictSAeR1JvvomNL8xwfn1gztsfUWw5kyHbmU7rQHZhAG6w8smiTt4irp6v3nHDG8XVtAt",
  "key7": "28PwhT9GLSYHq1UU5AiRoJbpckawAZxhjj6wKe9Mg3ohsF9hYjRA21xaDF2skeqNAvkhccWvbXBjwgKyKYJ3RysZ",
  "key8": "5K9MDXPiEKt9ppd5io2crCHB2y2BYAxFudy2YfbcUtShJr5orZwN834XbKZ3wRyVYdwmrCkyDdy85kr8XWGc6uN",
  "key9": "5GvAZmNex3EYc7Cz2VAi7L41uEn3kFYfUKST1jhwqUZtqFgrXvS1veQfUgMxDVTKfwe5rc6YZXXM2sxLoutpwQ7S",
  "key10": "QRsyGtoeixYENK7zFgp7Bc7fKipHkc7H9RSDahayV3phXYH7gdRFtqu3196UZ9HsYoPoWqYkUTKxxzdMc9DUFfJ",
  "key11": "4mmRH7o8tsW5816RG26eTzDBzVvuqbWgA1t1GzvqS1oFR7qUpb1owL9geiFRbmQePZxXPd1wwx65F6HskbWkrXjU",
  "key12": "2DvA8JYceCHMBZW48JpP2TyREC7UChTrg1HzZPLN2G9kjDs1sUNHToCARsYQcgzTRcXEJViVdfoEdCDpMD4CMNby",
  "key13": "57GmrJWq4b5GjFpMHcQ2bfUiFMyMpjpmGD9WDuRfLcPPXkqNcAx4mTNbmpYj3jvEahiyqDCVyw1Hk9WnVj5U2CYR",
  "key14": "5qiqrTwndFW3AJXDzqFZWuRCs1nao8QUGW5jZUeubQLo8YB5im94ZkmLdqC1cXUozkRwM4N1k93R3SxUbsSZa6Hw",
  "key15": "46CEYKemk7f9sQCzRgqSvHWSFRPWxDEVHK5Sof82MSkXEZ8reVhnmc18ovcZ7AmFhCUQhwC2C2jr8quZmkLdjqp3",
  "key16": "542Yeivh8gj14zAQREAsUQV1CjNzeEiqHPgne9Fh7kcFiTNPjhZgfFJtqKA23ZahL3fAS7vDZxThKdxPCxdxMSv",
  "key17": "35huRCESnQWP9ACfD3EBq5uyScdjfhF2SmZGqVndtH6MN8adNgCqgo7bX5HfdDRh4fMCcHsQP1QinjtHX1d5pEAc",
  "key18": "4ef7k7UhuW5LWCkjJkFabHtRSs6o2pG9fZbumHKej6h7A9665UxH569KhFiVFPN9fzaXT5PfnKxjwM1QC3tfMKuX",
  "key19": "2Ny3U7TYFtWizGbgsaPjFpWunpi4hWgeFT8fXyNug28ZFSBq9dVuTj4HJQZKbzCmQhs8Ah7rTzAs1Nx19RFoGhKP",
  "key20": "4hMGFL1YDt2Vv3XVM5NMsK2dq3A6cuwkip7LxJziHtFwarRnt9F6ztoyhTtxZhyxwz6durwfLMAAke4ih6hf9n5G",
  "key21": "2tgAan8QfxyLL2tbumkANxjACFpQP8crxhcjhjyFw4GY7VN2fhvb2q2EwxLCJfnvr2eQnLkHdp16hyP95DAifykB",
  "key22": "1DqjY5wPc6VWRMtDGZw47EuNeciGc2quUm6SQakE9gYaDa2koj5dYMCtYZF6z24YxcK8YZEc8E8PxhHVYCeGYAs",
  "key23": "3psfZgyFJ1Lr7LJtncJ8otFwoRLBSoq9GkAdVZSXU84DDzBKqpr5yzN6iwePZ2YNVrS659vEPhimpTSUmXzjm3Mq",
  "key24": "2EpJqXeNjYdmvdn74W1Xhtitd7hrAmoTeYfrcZPXhEu61t893F3Sy1R2AXAHcyazZckWKnQQ1qVGcovnzJqF1kbw",
  "key25": "55PQsMJyDsGt9GRzB1gLJUfuZJwXokAY3KD6AwxP7t56TCeovmYDXpk84xPYQZ9849chxHQoueWkZnhmTorwdmpY"
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

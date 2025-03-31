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
    "4HjMzKwKVMRkCMWGs6K67PfuFyFqXVTxbtYdRhTh1fiuhqJdBr3pE26e3eWcxh2LSKY2h56b1iWpRhfhS47t1KyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9mbF8LVHbgYozgqTrdhn5HdeWbbdR9SLagSJavjxWjwa4kbLJ9yfHZ4UYxrFRjLfdao6kMymthE8GibaXbbkS8",
  "key1": "43ty6EG78RcwSpFFfFQUhJeWCztGMPRgf6xmZXTGExBqTGpNNiidDiBtqg8a1coxt1c3HX8jELv6dF4NtLNtmqFz",
  "key2": "2nuxhS5A4ZbWxFE5mgE6ZHBkP5RSooHkiJAtqKpFH8B6QqBRG7NVveKDVgHmcEb6sakJ97KoGFThug1iUUmKniZH",
  "key3": "36RH5sTnqy5yHf73XbHTMtUpbfdp5dGbaAwd4BGFjU8W7ezTRiM86njDzW1jrGWuWEfXELjH5P6QnsCB4yFH2WRX",
  "key4": "5oHoSKc9xEJaNuLo6hrSymiNpXQrqG9nVULzBsoKYMGeDhbvGJJgBtVkGRqsbok3weEdQFeJ8kcatUx9mzB5EMxg",
  "key5": "2hNGHbwsmuz3tB8UQDDorqriBc72UVu6isPavtinjXxuwXoB5z6Ce8WdMpiP4PKNYaDhKGzjiUTTTWApsDf4knL",
  "key6": "3zp3zaVnTwCr4AfkRq6qo9xCveFknFM3rw8Ci1sRCPMDWGoen6yXryeqNftjDThKhjEHLpkDvfBNqa4Hw6DYrAuj",
  "key7": "2KZcDvBMD6CLaoyjX7WkfvtX6cGufjqh4eK7RrDJmfrPJbaxcsyp5mGEHs7fW86iyP5HfyE27MAgdPbohLq6uaCa",
  "key8": "65NbNNCoATzeL3LFiATajWNksdsy2GKMq1GQ4wTuBivf4XaMzyyDVsESwuLk7Hvx679T5zH7ZHQHLbk9NyE1vT8e",
  "key9": "2ZgFxNKYZawCCYDa9dsMTe3dxHu53bZsCyMcYmejmmUReJ1381Py9rwmVvFuNKiNGgePazU4edyrjqS5X6vA5rJQ",
  "key10": "vvCkfrzHPweEYNBXhXGhaju1XNr4zu47aNpKkNt7kQiSu188erFpTivE76Z4tgN6znmhQfYKyKi6PEKXozkmsoz",
  "key11": "5hYPM9CBNrek9kB7QUzAU6s7gdDGtSzjo2nxs9rRMDwU4Qnpg64zQsuVGx2CgDWXLgfGE8c2zjbX79aGEbKRh14d",
  "key12": "35nJtgVaMEeqWgJWLLniAaAz2vM1qyUJeyBMnhaH6pSwVhMupuKgvrTLp6UhY1WduzqLcT5Wb1iaVSEgk35s7XwX",
  "key13": "46XwxJGB1dzEGUUADWYfpU1jk3WcwkL6Qr65ATgbESHgt6qdFjhdruwKLwUCh1u8GTD2gWLHtsjURcVdomjgqRg",
  "key14": "3758NTFcefSo9TGnG6tAGyundko3ewjCNkR6Wf8QV2f8TfajTMVyo3aGmpsMRH9sHpFJLUKsFLhdoQ3daW5yEcmb",
  "key15": "5VzWJUPEiamZFHtoSj8YkNz72fiSLJ1rGUdP3pz22tYjxq4EagQf8V1wcmoNhsmbj91aSpkbpuzBwxPi1vf3SdkG",
  "key16": "5LgHTn1tbSVMeuz3GYwF62qomhdB7ZWp7ZgQdrj3VDmdQKKpLaShoAyq6WLgmzqqxqh2fUcg8oTaVYH8Ry4HcmaV",
  "key17": "56r4wQEQyenk62GXva5yA5PhQqbgpExkPRdyNxV5MDJRiNNQrwkC9cZz7dKvpt8n6c5yCnDeJZ91yf7yiRxgLHQr",
  "key18": "ay8bZn3MEuoyRxEiASwg25UBKuLuwFfJx4rmkMXzsjBAHgG8Tvmjnzg4okVvv7jQrSKKRSYV4tszobp32z5TrxB",
  "key19": "4X9Z4E3iXm6b9ZE2ExjjM2uFVT9qwD1mBE1GQzv32XiGYXVayhJuxVi2rTqpNDwjURXdQjDB8NPa9fJKuF9BxRNv",
  "key20": "3dxX996gGsTfcD4gM2ujvgsTftph5sP328TuLArRuG4UX7JNiYruNeDm8HkenotRmpcznyN6uA3gRTS1sfB8qWWD",
  "key21": "5pzszasNTaCDbvWH6EbyyQ99Hw4wUWxivpvhrx5ryF9rRycGhh87t5DPguic3gGGve1kZ2aUzyrut4tFoCLYV23y",
  "key22": "N5XiEEhtUmcuy3QeBTy6mvoRQNqavfed3KnkPtMx7FY52ozftXP4FGG4if3EPNXaXHqpbdfPxpGJzXw5bDPVrrQ",
  "key23": "5RJzvwY1cTtSWvaWiAD1PLLpBNJnBPFFcnoVKcxLEP26VKUEUYN5mbWVWcugQ7D9eNYSchwmGfZ721PUGsAdvx1Q",
  "key24": "7fnL2GsSEyvMYk5UJ5nEoKSoB7rzsW9oRBXRzVYzLvb5p2zmGVzM95G9pPBcxXujYiCAWvyuNkADcM8evu3sqkw",
  "key25": "543KYdsZGrRmqAeMqLp3xsYXLySqzUoBfRcJ67wukBw1e46y1DjFU5adG12Lm1SLEhFGErsMoNnbEMzDHw79NScS",
  "key26": "6v7qNspoe6o5XcSrYKzEx9kmP3qZhqcryT7Z3WdrYjwMTaRPx87pFugupHrTJwoYxvgenLeQfNNffioQ56XccVw",
  "key27": "3SkKXhwk6Lzq1vqDFC8Y65YmzRpiqLcq1tx5js5J8M8kjeCn5HL2YTSRF8TqgZ6cscnEbNRYotdCAE6i4pN3YAaz",
  "key28": "5ewp5ifHL53PneVHQPQkAZXUPRE59ewJ2ESLeFMfVc4MbumHgg1WLNvwrXKGo9vEKNVi7s6ehUo7Fi74teBVAvzG",
  "key29": "3rZmKA4yeryoDMwJAttXFFwAuPsGYNyynpm72b3snuZHPwTWTQfogBZc57SqbA6Rb9dSFJx2Es3Kiw64Z8osGHSY"
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

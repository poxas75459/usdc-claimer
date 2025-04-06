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
    "3W1wcf3EyTZJLpdD6fWGZL3tYcbTahR2DJeqXFpvcxqQPxSxwkBnaM6Wd6Wz6JrQ4mmnep8K9DXFH86zskK3mQPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJaBeq6v87qqjW4ec2BkkkxAF4AsqqdN3qHs171LjEfeWvij2qKeTaGqXXu8p4JVZxPejPNrrqMuyzvBeUDFip6",
  "key1": "rJgk6gKAxb3KHuFm9S5THRHUFHeK9wB7uwH34NJV3JzxFsw1xHvx41MNVVzyZy18WNKuS2RfAtg6CyzD4xYos6L",
  "key2": "2xyYVHAPvZ3RHQ2pm8gjpSqKUcdvVX2nGzQwUUoxTMDPfXUEhQAf1FzwWKR4Jh46fjrXEuko2sfcUsaDg5y395Dj",
  "key3": "4QEfpVbmXB2A2wikHVgFJf5uw8g5k8uWSccG9a3N6XK9UXu9nfyiuFpx7w7aAo4gY1xd4gewiEiYy6bsCW58pAxx",
  "key4": "wimHo8QPgxrfVdKEL4eRP7mDS7Kc2CZZamkP7B4kszJstumXG8Us5PVFjDzydNLwBADFVstRHaUmTwu79qvHFG3",
  "key5": "5iVb8V9WDyGfcqiJG4guKupk66F5vJ5ydeKGgzJd3UjNZynqzzGp4tAPitERVb7xSBmkqkcPRrbgLm9iidUcJiKZ",
  "key6": "JCbwYKbzNzMSM6gjYNj2VTeXUgsYqvpHc3Q42ar5BA8tQ5vpiAWggPkAJZ6gUkFCiMwJNtS8NA3HXe2xMEKMUJR",
  "key7": "2J2KAFGpxoeRtQxRvADo64z8Z1dauiuMgRc9ug8Z1wXrCmvVvPUc7aEAqNAEXwkAVjDYk8iVnHZhxC4TJGp6EYpz",
  "key8": "BUCZ4jjiQuuTTSu6gWPryf5ZA7zBvPWcVWhdzWEhoFggmV46EMcyGdjTddAWmi7ctTxQoCTZ9TnyKUSHJu9NooH",
  "key9": "2Hqks3hrhoVCGxdSjHpAo2et4ZrUmiRpwrzWdopyZGQhoDUBSJ7mobes563ZgHic6UW2t1ZyhG63j35GB5T7odke",
  "key10": "3dZc4iSCw1EBEt87BkpG8zUg2Uvrhp1UnGq2bajnA5ZjUk41isfUCNRXgS3b1obuYHYNNQCs4rDGbvMHxLCLNodh",
  "key11": "4mmcLRZnw2xLTr2wQY39m5WxaE1oQ7Q23NiBGW5xxwtzzv4Ut8Ky8Z2MUFTvcxFapiT6JavDTD3uiyMX3PCMkfQ1",
  "key12": "4XcG9BGCPMrEtiof7bbRGSx9wM5WRbhjDFJK6zjeLyioAQ7AMHMmxTuEcpw6vxoVNx5Wg8MR8NvhCGezTDL3Czq1",
  "key13": "32sLNC9yjXvrxLDVVL37ht9kbvLWCwEi2Wp8YyArJ9W9feY8fxihHHJhgukYoiEoz2MsidsAxGQknqhLg9hATAEE",
  "key14": "af2QoxjRTGTKuJjESaJdFVM6uFPNaFdiZb26xP81E2hjFEHHe5YiYosqUU6XWLXpoWbVARLFosU6fjnYShQWqgq",
  "key15": "P2rr7reZbV2tA997CUCGqCYY7xFaRryEjtvBGPThK2i9a7Pxcf7zmdN8R3AU3gASTiuScTJJwK5LFA5RHsK1i6r",
  "key16": "2AUazKH6LRuKvQccjdJarn9VSyzXvyg7L1TwzofK8jHhRWyJ62Du4SukyKsWMhNRJPxLQDwiGniJLdiA8UUvKtUV",
  "key17": "3jH49VKhHDDASXn3GJHSy9vNdfYXccFEiQRxrw7acy77oWkkPcWPNgJeSNNge2xSCWJ1mMGF1SLYZWMKR6gQdEJR",
  "key18": "5PyeV26gbCXskgvaV1hWhr5ie7TSFbg5jbgZBsGTieWtJP7qUYn6tFu9DBE7g8K2JEqnPKh3pC6XzVF9kiiGZZ6f",
  "key19": "4TdjFHECYkqQJTMT3NopkADYzA9bXieoh3tewZGc9kuvHREBMvUTTn8Vai9gK8FYJnajn8LBsWecP6rTQrS88dqU",
  "key20": "2HFgAEdTJgbPH1gXoTVCKQqTUw3URPTCv2H3ZCan2JhfGrvC7iB1nA8wH5g4GQENTKDxzVvjyMcUhzGbCGu2kKHH",
  "key21": "4xx1b7WEGY8NkUFGEGEV1u88metuNvi3ofv2VEPNCPor66fWA1RLdi4E2FTdRKXv7rTmXK8s44aWJGHtQXEZfU1V",
  "key22": "21j65ug2SNaToiAzoXadDvDVx8jB5y2bFQ9ZaFjmZ5XxAtubHsQt4azFFWRmwC7376kVoEwjtiujEbh3qSTQaS8R",
  "key23": "2YtdzyPLFJ2K6yC3dn8BJauKUG8PQHDtYxsFtgMcYkzhtipfjPEVtcRbet7wppZ1Nta6PNzMQnJk85x5mfKWPWbb",
  "key24": "d9yHqdo3KRhB8d3Wq5ZCYu23ewMWGusbQKtf9rTm6Fim8egC1U8Etys2Goe85ZbVi5gccPST3uE5NUf6e8DV9r5",
  "key25": "2hC4aK45kkmKATK3WV3EmgLzD6B5XpsyK7UGx7whkncwSWkECpXd7133dzbjbZpQsaj7ZpxwSjTynXBwKwUdoP2Q",
  "key26": "5QwP9SeS47ae28BvRWehJzyUqAjQ3ibpZihNktvKgdgcb9ZddWkd6ErAzPkUmmZxQhesZN7EMmd5epghUnLeNrqC",
  "key27": "mjXDrZh6kZQDaR9s3L9URnsjVsziUtaQcX9jVQwynvMByw7SkdmdeTigu9pnBcwp5ABtRAcbouTbDci2YyTintz",
  "key28": "36DBNovjRcBYrf4Stra4xzNtw6V9kDxqzAsUQ6rMatdkwRYLtujdqxAEXs9YcpvqukeDKKZsGjsv3Ky6Rue9SPoz",
  "key29": "2Di432PgpaenxndWEaZzvKHhddcg4ptoS3WL7DqtXxozw5oonfc4jZaJy2X4DAu38qfCRdXzLAMx6JbZTSdD1tsP"
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

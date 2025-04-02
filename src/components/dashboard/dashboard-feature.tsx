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
    "25dgrJ611R1wyMWburp9CNphsvBnKCBBbLeTmquwg1aPafn5LtiavT6qoQR4i2J6zXxKEPcZAvNNwJdkrPhe85FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJvFsuLixkTj7YJ5ebuuRXJi5tWduU4GNSeAaH8FEp8XHJTTCC6gGFmujTt9yL3k1qJphitV91rFixeqvbXZaFa",
  "key1": "2BaQpJ9HzcgCLC2gUYNUGMZKoE7rfwy6GmY7nHaHqdrtB7TWPii4sonGfiDanuzYKmZ5MCdw3UtmcYrYJUESTn5P",
  "key2": "4ZwmzNvJ8vjnaJg5FxmpR2A4bbSsyYfpZaz9dtUhUi9DvWCey16TVibnAnwTnA2hq95YShbbkGVv7FWJyjaopZyD",
  "key3": "E9jQNGmbZ5WN4i1tfx48vbok4s86JhhQtfWNJRviD8UesiHvtcEkeJDBfUkc2fJdGUDuQJN7vWvt4JEJMrnFGvy",
  "key4": "4K1S9UF12iUAP8vn4TGsAaD231mAtA75J3u8sccKSBpxf7iHz3MCjvwM7FPdE7SZ2reL2H4sdC9AtosamrvrZ16c",
  "key5": "4G1AQcAnwWZK4pqfwR8TU1mzNCX6AiF96ciJ68zpx6pj1WV6wQjzfTvQdpGtWYFwJGc1fWG1vSmaBn9RwF9eNutu",
  "key6": "cuvkXUQUaMat8o5uyfeXMHSraaAKm2d2LqE5Fee18yzXPb6b2HtDYkZKj8zbzki5a92TuDBKUbb1csBCAow1KeP",
  "key7": "5CBxBv92NpwS7d6SrDM5Vai2ixem2YSzU99aMPQ6QRL5U1haEsztuXvf2Cit3VaTNfqnrriYLxyZ2CWwDEASVs2L",
  "key8": "2mdfavvZ4SjEBKREy1oAMqESJLBfS6D4oJbghWJs9dabErAohapng83B1tmMmjCJK1vLiKqzvRfFTfJPCFnfr5b6",
  "key9": "o7MWprzr6f3zHUTvQZmR8v4Xn4QYTs8qznWGj5qu2HnSHKtGDfcctKnKay1zp9LHw1DDXQ2NLK77VQKBECqfQKq",
  "key10": "2eSy3oxD9LXXoAW4NPhcSZCKnYDiXEDx11UymGf3dH5r3WtsN2YQaR5rJkwGyMpWYcfcDC3GHXgoXJUDdgmzubkT",
  "key11": "52Xz8C2DHgnfHtDLzwf592mXaMjs6QYuJG38JDzVyfoy2qjGSsfqATK8u15xMQ3HjRu9TkViqzVArLRveLpy2VEK",
  "key12": "5phBmJTyr2bo78bfaGmmw9PUPRCmoFxXCvg5XaNNHD4vEL8jjydMH5Zqcu4YwfMueZx1hE8kXTcZs7CAmgaDqVbh",
  "key13": "3FCF5SeYCMFbkMu1Aqa4imMxb1aEPFBaS7GnjdUduveXgUhKT1pdbDLV4ip9TTgZ9oqtKvq6P2M6D9MNBuLSzMjC",
  "key14": "3Fp37yCMc6LPSwyAMAH6pYexbFzE1oL22H2aLFFR6PWPMneH7zkxBC7CVCaDU8wpSt12rULDNSih3HccPRg1Rod9",
  "key15": "5j3MNeRuKS6gkQLXn6q3UyzFUB7AKkxG6brAoQmYLrtFR6bZADBKqzc6nTvopVVgY94iRtUMYqvvtJANsZHAqAxD",
  "key16": "2D3v258dWXhGiTdU4SV8iM2aQsJyHp8s2196BrYHSJbrXk72HCEZvDhPZLXmEHw5H1S139NjKvDXmhGMpzKHV1CC",
  "key17": "w1QxsAKZ6HFyAH1eQzLyzApuzR5goH4oWHsnvpNwoabpnnByRmbDzrbEAcknyYfKJqxqAUVfC1k6YAuAgsgfaBJ",
  "key18": "2xFqK39RLFjudTQqCwrDfBF5E1r1uTXDmpm3WDxv7G6JYF3miGGSqhuYX7cTQb4mzYUNdixHm2NVhbdKzJ2QY3HP",
  "key19": "34VgqYoGi7MHoU9wcvS5ze2xTkMJkuJ2NJ1g3fzXH1js6yhKxQAJ7bjwFGtNegkcGazHbwpX37wAKHXp6yfHq1R7",
  "key20": "3Bg4LL8UJxEzPd5ErBCc7dwNo8uE16CoeYjh4fhxprv7T28Tq2tZP4dra8dWJvCZMZjYdGq3qjmMG3AoqRpYgu3d",
  "key21": "5peSquEnZQzpf34gYBF12xUvPnvdunkwYTbwjg1wsM64vRtDkYir59RYp5RQLUGWWE8Z4gjq2o5xzqDX7aAbCdtP",
  "key22": "3GBzqoGg5yYk4pFEtKqL77V8zAi8aw8bBVDCS14na9rYjELg3ARjDPf6Wig1cvCQDNXYJm72iQq6AVG9F7UMxnGE",
  "key23": "3XF19yYWPT7B11rhCxGDpXwoBjWnZLLkaMvgMNaw6HQNrZ3fPQnXLWBeJYov5JykZ9tSs3NRmdGNqWGMQ1RHyM65",
  "key24": "5Qmc3GWeMrSGCcDasbkt3nN7CiGJt2uYit5tamkbe4nmeoxoVubM3cE6413eP4aSC4sxz5xBZhJvbAaxCVwpAHZp",
  "key25": "2YEkBJ1qbDMunG87nMaQobwBfkQg2Ks7XtqWUmSJ48CYDBVUR1X6rzU5deE42ocgh4J4hvzsfHsRx52a5eNdY2S3",
  "key26": "VFG4vbX4ZzWTYzj3H5EhB9fPZajCzndiB32XJV1C6drVmn6WxFgeZY31drwH4MCzo2qfdEeTvC7jfxt2mkqgMpm",
  "key27": "328T4ZadfVDewwiXMwDgTw1eEK9PF3RyU1uu5tnDy8YQSTN2cAwPfMg1QYiHc7pCbRUbbCiA5zNLKe5TttPHs4i7",
  "key28": "3sPcS9eE2Cy7pb2Qga9AV3mRqyPY6waArLrQYsW5UWg3tgfR1LXoY7p1o7xdY6iLP37DoAjwAw2doj5GYmv2zG66"
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

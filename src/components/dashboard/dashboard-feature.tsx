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
    "2Ty3FM2wxJF4JtAwBiVFSPbvxK1fu5wma4TqmkbNLE4om4FyUJ2LsSMexP3sv1SgfUz2LUPzs5mg7MjfKzmprSpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e9hBg9YwXD7qQjCghiK7JVWZtgsnKu5fH1qaKBg88rS3vPZFVDNNxp9xKWAPSALeyjzon9v6Uixgw1qBygG8Eqw",
  "key1": "2nV8HbppCtVBVZHHnPqXBMoVFyMd9CJ7U2q61UNxGLRvX5fgnxasKmn3VvVwxFu5vjTRmqffn5Tquuh4nuwwMkVh",
  "key2": "4ffqsUrqY2QZ21tPv5LAiRzhH3L2a9cR1JuuCiuEvGjTHHBuTZfTQdTEwuTXsQg6SvzwjMQXFAWFxHRRWdLxQiQV",
  "key3": "3ZgjSFfu2D3zpxPGAz49ktWu21p5iDRCNbw2fXX28wAHSzMFaRKPAiLy5Bd7oqPy7vxYJ73JJbRfN3tNedKRPPLT",
  "key4": "3ychw3Kb4cT7aCm9BFh3nQwW5RVLneQ4ibituk3UqQaKvo8ggtDNGHGPkudsqJfyCiNaoTjV9Hb5R58qijYPvEcs",
  "key5": "2ojQsyqMSkUPXbGPXYFgX1G9agKN1KhrGBbeDoaYaXRqmvbeTvZzKUGxNky4PZbHgCNAayBUeadmtVqNLf9EETBH",
  "key6": "UvHbCcebAhGNgszwLqYcMsJee3ngPYzffAAdZnLF7vkW5BiHoErssBfsthXb7eYA6cD6cyayir6m2XRg1KkfrB1",
  "key7": "47XrZETFdi4yADKtbsshGzWfFqYJfiNvM837DWDNU6f8KRULF1sQe6iDrFFQRNsDcobxDnkKUtSrm1gX1afiTEju",
  "key8": "37uZ3NWJ699J9pDht92o4TbtPuaZqHBVLp2mE6GMbURBV4gKaaUqyWa993cEiA695g7QDV5twKheUYm3n6cDWaDL",
  "key9": "4h771aiCmShnUeFJH2KeCbv5NMS6qnmCAUEyDLUVEXmU6eqyHjZiXJK9nWkvAk5uiPoKFooN9NhNCCPr1fLeWSut",
  "key10": "2s5WPnP3CwwgnFTcK9idvV1K9GmTTXzgH746jLkvvcPjgTiu4QtUxqfrVjTYQYWxsZmaREfHhfZeN5GJBUoT9tb",
  "key11": "5L5vyybXGKkugRFM3PDghTNXadV5Rdvd5nKXqt58YjFdh7WKbn2R9DaGiuqsAsaBeveZE6JBEkrHA8TAHtkTihbc",
  "key12": "4CZdG5DiiLzz6SMr1k3yc74TaJwe2WRTMic5dKrYgp27K3qfVf3xusGKHrpSLyNKZb7DHmAJj2T8Co4x9SiHBZLk",
  "key13": "5atwBebpiGNjKmF2g5R64NVUEjJeX7jE17nsJwCxTHLEbg5YgkdcNtbqk5qrvX7c6hoDYxirMSAMFx2NTF5dFcvz",
  "key14": "2Nmvxj12NYbTKFeWD5cQVs9G9XXv3aXKX9Zi5j9nqrW8y67BnGvw98dbjfmfAmzTc5cbUfiZ2rndTyvvfrbKVz3L",
  "key15": "4v1jjPbzrLnoU4UNabPLsZEbGdAtzq9DYyiWeriHCfPCt9JXPreLoeixyxB917dni7EjqPgyYx7BSmmtS4NpB8c6",
  "key16": "5LkJUpAbUna7pT11zGPmqp11pAt5B7f48PD1U9DJsC8GAMMQb97UebHCRmxp5zvWtq69YziEyWX4BaPWbg6N2s8u",
  "key17": "51ZeBvgyJasBxFDttSJc8EikFYnP8CmUshGSz7yq4JNnedBMUi2K1tn1xnntSDE4Xpoa9jB6aGJtsgwQ6XEanmPs",
  "key18": "3ehHhzdwpvXcRmYCUfgbcHkcsR2FdjZSWwqXGaPtgr8x8onhzLVagwCx9y1RatGjDTRW9R2iBAWaN16QR3kAhpNj",
  "key19": "hfXE4PtRGb35AVr29z6BzGj5W5Lz2YEpgLtWC7kGpNRXRsezHTLWh7e5UjUd5XmKTZuh5jGX9hK9kTqFPQUps6i",
  "key20": "5ZkEyUXBamUrPhgWGgUwhY52qv3BfxhMPzk3Pb5MT7S5PXYeswjfWpKSqNtFQr74mLBibvyfz2VW14AvrB6efFcj",
  "key21": "3gJaPfvyWHo4LnjmZ4CsUaxmoDvgy58jMfiDMhPhVs7S9oedrqtx3qhzM9H8Z1iW3KCwwhkuVQVLKRRNu59hxzL",
  "key22": "YVrFkQVh9wQiJQ6PDvBtLC27cKwEiD5JgEZFspHT1xpoP2NJ81493XDhvmYQrUEdbRz3jSFzT9s78dMmQHkvoMS",
  "key23": "3z22ErXiR6iYVLVsoRF7TeNEh345PCQWj8vWH4ybKw9wQmyehcUUyby6jbQENNMwk2h7qTKGDCUxGHJJrhNBWJQX",
  "key24": "4WrHNjh2CQgVPsEMJEkerPavWARMg397e8vKPXLsGTUs7MqwK5kdwsCGuNhXE6RmjDAokQ2J1BCPfUVdHUaci17B",
  "key25": "5NLwSSy4fVtjMm7gWEgezoEvtjrSs4CQfdbzqzuccaZxBnNvcVkP9QPN4tmhqACEBn8HLYYYsFaUqe7Afq6QohiP",
  "key26": "43FyKoqZ4ZD6g2ZvhjDFLUAMuMywpEox3dqtKS6WtmDKNTsniTDpA1kmaU3GkR2kxh62sCF8e7TyC7ZUeSCn97VE",
  "key27": "47d4xC4uPxjqZPiZiuPyroemjY4sw8Wmgj9Zzktw1g7stzC3B9USK6sAwePpNwVZMo8B33hQWg4bsaNcncBjScNJ",
  "key28": "TumPmp16ZKPTxSsgwyY4AnLsP9SQDgZHxAfwWvqx6JbkMwsAKufCDZhDQVtx2ZziJ88EnmvEzhSUYUZPh2n6Rz8"
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

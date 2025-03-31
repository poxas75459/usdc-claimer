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
    "2amy11tFvepUxRoyCVjpE1VvF7VK2vfHfYfngvNgEJyfApfqiZAXwpDGJwfAwnMXjxfXs4sppvDPZ79rxi2L6Ej3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMHiiNuhhujXPkeYqeSUBHVthVTCrTD4qeDnQpRkjYA5wq7gsPrRG8qnXTLXakUe1TNFVptBCjdQkvuaUz7zG3C",
  "key1": "51xjF1aFQoYnLeGmi4xxfsSWHeYQs5sAwiNTj8Ri7qjQLFtyY9JMrfGuR2NKEkukLc7AN9tUJqtsUYQTzFahobaE",
  "key2": "5FDB3DKibUCSjqq2dJK21tbhQxeMsLuLFXei8pW4KPKJK8W7wFwJqvLM5ZocnaNp22J8EJrsg3gnWAbsNY5fQMei",
  "key3": "2QgBXDykg1uxK74KHjr1QBLGz23vUcEtxhgyUt1hMrH6wv1KUuVHpMqfv7GUKQhzpHiW79jfRsvp4gShbsGSM98q",
  "key4": "3QdEdgNBvTHQzW9Bt9zksYmVfFyVifBb2gvvC7Knm9Y4MExsZfiFoF6RsE57PJsXq4srygWUdbZRSsSfgfjfKRXS",
  "key5": "ws2xSEDQcQZDURNgBK5PgZkkVv9jAPxNpH2cRhpr1HieH8ygz4et7zczJQLReXLuXgeSv5pR8NM7g5GNc4yTswR",
  "key6": "sXFGyuqRbuMYPfyr3kDL3vfEWNTuRv15S9em5MrLUFftdFAT81e92qW6JKGAZ6RGPFnxGh5zULJWwpEFh6cy6yg",
  "key7": "4EBUzDaEAEZ5pSdCrojYgac32mPLeNvjuuxkzMAkMY3FTncfuZx5KaJXCicjD3XkGrNHgPdn2FUe8j8QDvxPhBGq",
  "key8": "5HetXhURZYFFYqsHkkdrUEQ5Fbg94Xyvwo7Gmrm1fTGTZScqG5k8YEX3PCWTLGYaYVWLJEkqFUohY1ssGif3gS2Q",
  "key9": "5jbnnPFhsTiNEktnWVwXMUYBN4MoZo6A9tz8gguTqByLdXYDn8ykgCmZ2L7T5XJWySz6Nd3V1tG4TMnpYTuXQPDv",
  "key10": "cDNFY3PKvC9G2Vb91Jt1fxV1yJTWbi29Y41AkceaMmHmAThG1XcsGFBNyuZoh4SSBctfYLesmmXf56q77WF9bVT",
  "key11": "j7Dub2asNr9gU8Fkx6wba1oZKWvpH596JTDR5XJDAvcf1h9wjjEX723f8tQjKoBDZREJcoD7wV6VhRoHdMtXLDc",
  "key12": "5G2RMvUCXqNpG6Fo6gqPC7ZaYmtR9NEsk7vcZQ2zdkaS1MjnDqCT8rtXXgRAasiQiNKryNrJVL14bwYuj8HgP2Qf",
  "key13": "sWfL6GuMRRq8Wr7j6ToX3NmwV6x1DkXg1Qhias5C7j3Sau8hMuf3DPsxAR9RrjcrtoajxUQNqru4t7b6xW9aQrF",
  "key14": "5w2MNhomqorGUAsLqfFpFKuGo6zRjmasjoqGtMifFsNrA8kpz5cRxJYYUXDCatb8PR8dhUjvU3Nyor9cEvPFwte9",
  "key15": "2AdAY27wXKEFfZFkzMm9eop5S8gmaWLxPqCHRiE8TFDiyY9xhGEUGNutXhMdwqgB8aQ3uoCdiHJk9PTTX25gSAEy",
  "key16": "3hpTCuFHrnHiHXan9FJGMJ1N3aPrHUyHrTPJ1LbWLkHYDe4Hy9EdNzqQEFLv4TnSCHeUouRx9MFuKtnwGoZAXzW4",
  "key17": "2d4yrKM2cLoxmwYi1XHxLef5qTQL5ofraTrNAsnHKaiZFN8ifSd4E5ZGCbMuTufeu2mVPUpvsPfSaXXxKTttxHnm",
  "key18": "45NdTxnwv8hbMgdE6y73sZj5NmyGVkSM7smTbPh3TJ2DGJhmQBxYNMVR62PKk5gfkrYBwdMBwRT7XHYfv2yiJaui",
  "key19": "3KeBevFe2ZvQe72d17N4C7v762kCcMjUkYB2SayaZ8pHVDosQ9qaVL9hXFicwB38xmqx6jkoLaxZMNYVoDw9UR2T",
  "key20": "128cdadbHLhN8VaaWV7DzxrL63QgNXaQ3ppWQjsUfmq8a5fXWZFhEEee2t8i9nc1Pd5wrKAaZfBpbtXyiXwVydUc",
  "key21": "3T4fpYZrxJyxCF9LqYVEE3jgnpQdqE1mEKySWowopZXA62ZZa3FHmwD1bCqUJvvxRfZyA9eNc8LMJyPAp46BL9AT",
  "key22": "5Fau4kKuLSC8AUoCUEyKCDH68aBitLWcxaSg6Vp39RZGLWv43Q1sTJVwc4hHPPqTawSqHkFGjooiZuprkFQWZEX7",
  "key23": "erU2otPBueQ7WdMeYSXF3uWzoUYe2wwA9kdhS7i2kngU9Q9qExdT7exEt7VCmFQ1oWY2J5RSGmjYPMWhEz6ojCj",
  "key24": "NY7VT5Zj1AdHc9W5iVmy5kDRso3ZPM3bb4z5XXgygytAereajA73uUTMg62zdWtcG3LDSCdWtUQEHNrXdSiFmQ3",
  "key25": "4H3ErzJnoCUKYqYwZ5W4Wryt8kKbRMf4eUhj51LXSP9mTdkxf8TaRaZLb4jfEk8gVdSwPRmcXyRmuqg42AZyMMFk",
  "key26": "4kBUpBCo3V9ov9BkaXuctaQmq6ceaWJY1CwmwU47LXwUEHZEctLtoysHrq3ciMD2gtkE1FEucEtr9cvNgjupUgJD",
  "key27": "2RzEQWphDUwK4vTardKkZiW9CUPpWB7xPbRkYAxFgVe8jvRTJyQiMRNZ3GuwhRg4CC1N1uKgC3fpF451hKddzpRX",
  "key28": "5GGwRMHega2XccLMCdEP6UWdfWsjwkoKjN4dRQAEPuFEVWyi7nhaG9t4jFDb1Cs3USSC6KYEZr2ynXVS6LxiEffW",
  "key29": "4ySQ71qG6j1wMBPJ28WEYuWbpAccJs66EtC3cZDTB4mpqVVHEuGxUBfZAMS2GPW7PrdKBDH4kgWbyyRVRvB6e1k6",
  "key30": "5X9yH1KoGJCGHBaKn74UGJX9XtxWL5Tmj5sgcgnNnoWwyBRMNUJ88vMQo89akxQqv6EUHkgLA5MFvEuS2E1vKgjJ",
  "key31": "3EgVuLc2pf1XU2qTaSphSPh5jkeNrcQkXxAiwBNYKiA3gWYShQy5pQ76u3PCP6xKLV5zxDd1FwsSQfw8fHFKDa6V",
  "key32": "28prRftYdNrR4vYbJy1XWWxecQXBMGN6JUqk2dgg56zeWs2aR1v9nzh9et73NLArnFBMBGd1GzZyW8ZkAYqGbN1a",
  "key33": "sT7FiwBZoevoLgRGiYTxh5rU4YTnT2uyGX7rSfLRCXDAfJ8KxbXdhhVVcVwwCaMHu2TDmQHT8T7zavxnn1yyfT2",
  "key34": "2GXp3zNgC7RFsnkWKpS9FgvLSrA3MaW1wf7SP6XG2KhwoTCymgQsKwks1Q2x3RV5RWHVvxL71iUFqeUKifdyx7ZG",
  "key35": "ocXEnShgqiJpVfmbYjUyZ3EjmRzxjoanFzcWm5uoFomt4zyPqkVn6c2gYBHMZRXa8JJfuUPWFXfhQ3cL7LcEcTb"
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

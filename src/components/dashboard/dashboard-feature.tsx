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
    "21WiCbyq61iuuKJTReTYgUPcpCrjM6H6KVKYkerGvopM2ohJYjbA2v8pEx9JJQVERidDJfN9PNmkiaA3z8gVJsJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33wivpnHNZtcvBwUrx8Q93k9XEKQ9YXJgPPhHFWhxz7oy4JFgPZ2b7fZwXxPPZ1yoxgEmUvbtH2EFzUhcZfCC6T9",
  "key1": "42S2GgZ6bHjCBA8Te1z7PuhnisjvJom3irUQJDtZio8kn1A1CCNcYMQ34QYDz4eYpMU7oJV6MxAL4Q3ZqpnQ3J7a",
  "key2": "4hfJiek26UvwukxL239hWGc6Sc4cK8Ap261d8HYJ3q3qijeZUfuZY3FFHL7dJwViT16EKoABXW2ea4VpdY38CA63",
  "key3": "3nKLFeqsqQeYLm1QSrokvK1ods5wBD5ABhbY29NccfQF2jMZWPvgbjvCHTZL8jPsZQ4HWFsm4ybMnpjGx9Y2Yfy8",
  "key4": "HFKFc9fQRZdWzfN7aGWzjsDG3dxuC5bK29FesX9eHHE8PPQeoYhctjtQjtcvXxdB8KieHB8Z4edMFrLnPxFuKh9",
  "key5": "qD5EMSJWCpnTuMehaHP6A3n9YbKakxgLz2usVXbDnx7pcUT9vafF7tobHJLRB56LoF2pA7a8x8CEtNbMTQEsKmq",
  "key6": "4ndmjVrvf8ZxuYJSktq9XxdsWgNQhu8TxNnVNZUTm8XeBiwShPJiHDtE5gqnzyRFT5kxnLvTvfW3wb7MsMkPMhm6",
  "key7": "2zyuTYdwMnXeuqkwzD1URtL5edL267SMwkbTQxJsgxhmfgtM5gDqgLi1gWtEYKEc9EDvX1ybLYMu3oGydbNEXVKc",
  "key8": "2NS8Z8t9XjeparwXXTPkZQKxmVfGSxWax9E5PJ2Pw5PCu1dy9k6AMtX5RuE77r92d9zrMHSFtcEeyuwP5VNYvLDa",
  "key9": "2x1MoRUZUx31rF86WM3CeT1o4PiuZMKiQxB5RP7trvn4NbFTD5ZLFdD8fs7uv6UzhqJTs8pTXoDy6jYWmYa8Ycaa",
  "key10": "sToS3k1BsUZrC2ZFmoRMXwQWFhhrJoV6R4TyGfttsKyM4yN1ea9UEXJxf7RSg2XWT5vfkLvuQAFZBZZeFn7RKgY",
  "key11": "4poGKBffwwCmeG5US9RZ46oSNnCCtCgZgaF7dAvCncM82mjSdQfxvEQTWc2S47Wdg2Hkr8fCbkko2H7yvF5retdw",
  "key12": "LCPQFvTRpficoMpRDHRTJvAAf3CoS51tAXQiiWXf2wn7azrANoZT7dwLvBJiW6JostHWH5j1fkmTktpSXBVAZEG",
  "key13": "2kUmQdoQsVHgASd5h542YeYmT1j18J4CUbkbr6WvcoemfRwXiFkBhXozQxoWn9kE5WoJBQbGz3XexguJiihnweQY",
  "key14": "2Khq8mK313tCyzFXsUEC4juHbvmW59BBYATD5ArTh5p7jH9tWgBrzu7Ykcx2NwpsAtSEc1ULr1YNX17HLqbzbtCJ",
  "key15": "49bUZhCgPnbtDWsT5YsBVe6FizxmpYq27NPqpM2bC1YfoWy3EBdpqSrBPGiux2sxskBWKEXQyyE6tLafdsr3HZEf",
  "key16": "pQLVv91MLnN36bpVkkCVpjNf2ueEPBBBtXQzRgAfVa8FK56ANZLnw3TtnaR5m1dHPop6sFzCcb9hej1R6Wp5JYH",
  "key17": "5rSwqoPB9EGsEQTiV1SrzTcMoWyH7vWujCDPaKGdZsaT1isRL9BaevfHJW4dUm65vnZCeN1bCdEzGiUHx7XgJGsu",
  "key18": "kucMSaoxR3QBocCsrp8xMoygXXMk48rQJV7DNP5NSWbGymjTUM3su167C2qemvaYzd7fK1HGzWbYVtjV7aJBZKf",
  "key19": "4tFgL3PSbKrwgXkxcoECbXMW4BgDSU7hPnaxwKXXUjUKZnZKxxx9qHaSc98X6vxAviA72KCZqXP7vraxyYETCrxd",
  "key20": "2xFgunhi9LepLfQaUskkTs6WHyuL3wsWcVp7u34UrYAoyU2Q4v5kHqo7dGEWeTqwmLJtqqJ4jHtj15E8UJ5vq1At",
  "key21": "5K8Dc4yynai7rHvvR5m1DVAvQs71teytjSzkMhkUnAwFnjAyPX92v9oM1y6uHzNjGSLLZdFw6mrB62VK7u6rF58d",
  "key22": "4KTurgJUTRCDFcZ7QoZ63hWeoDf5aaRygff4g2TaMM3gU1gGx7bCCkoAsuc1zKX3D8LpT9xENUxRKR938eCdvoJ1",
  "key23": "kxdprMrKjPqWP236GS8NxmomZZw632irfXgS6v6xygEe3pDfhjaMMrnUZMTdbcYjGJXV4kxTdmQV6x3k6jcW8qP",
  "key24": "5JpHwcxaMhD82TmLizcWM1gHQ9HaiUKhYptPhVDy15QoUkB5UivinD7132maTvsUiiR8Yi6qFHjRWNoGzAwYCixv",
  "key25": "7bDLX2nueNn7HoMTMEKw7DDwNowSzwQ15BBEoswVh5up2Tp3z5QTjbzSPDw9RhgL49B1mHwJJL95nQsyCPrkTef"
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

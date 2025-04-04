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
    "4JJNf5m3fgTey1THP5xNksnD5t6QXj9VRT62BRzqczyt1VkWXTdPZTnePM5gcLS4mf9x2GK9oGdgwTB187fRTtAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65sjkYBKbv2pzW5kAsUSFYFuJ5oDAqdi5JjD6JoTJmwnRQ5b4v2jDBwz3pksrtcC7kk7SYH1wTT2iTC4HPkh9XcD",
  "key1": "Df12RYkrDhyATZU6GMzayqDrNXxTWNs3vYJ1JzCSdsYUMg9MhcepEHz2wqnfQJzKs5iqhK4qPFSeGV7obrQyE9Y",
  "key2": "EdwJKpUwpPtFFWouSdJvHv6zx64JBRzAtMse3BjhrGw36ktzHe5Z5HtMWNCd8rEHn9oM4WiHXYfXRNWwWSFaxFx",
  "key3": "4ZRFvUL5Ev8PF6x7mRDUwzSHhM1o2ZdKgXJtsQuxCPQE3WA7J27x6f4W7bZ3MepwY8gxpT9hjab6QFyxBpd7A9Ki",
  "key4": "44v8Tvi4mHBYuhDMphKj4X1mTrdYg1Ufw3afDGa6o5kVYSaWLYFi4iA57UQnuZgQqaA56Pnskd87XrNWNXPzhTfj",
  "key5": "4ZbJrqMKvkkZMVRiDE2NTC4mb768o5XSVPmYXvqEQHGyKZM95WXUhx2y5XKSS7cJNF89UdZRM6nJrJw64Tz4bhWj",
  "key6": "4dN2wyDuwoVsigXYsQTGVLLA1FayWCEXuEKnWXcfrxjptrioRWcMNnYHVb5mjx7iyDP58fqSiT828WQaJBVrXN3i",
  "key7": "4s5NAACARN8ngNYEAs8KXyzpoSx1qkQWzq7QJyn5tqRcgm2xLv2hXdqCDrg5gHmtwqbFhioaoAZd2H8wDSZv5pjh",
  "key8": "5AGB6PsvczoGz4QVDKVUsh16DNHyP4i3XqCRD4nzKQ46anHnYjgbP9Vai7itNZF6Xk3FwND5PCm7av7PS2e3nKsu",
  "key9": "2X6fYnf1LWDCQQW8fWzoGzTdWBLX9zP8aGD9NZcPqFXc77gMLfLkZUH2xjLXTRxMj3XTE9Jp2Cm9dzThfi5xzEgQ",
  "key10": "5eaXQs1kKJAKBvGBp34JCeP27kSVni3gAWpfek1EhCy6K68xh8JByRzTwawP7htk6zfAU9PorCxQmbW87WpjYLBX",
  "key11": "3GKKBUCuZVjGn5yyxtBTsQZUbzdhPRbx65GyKVnBqz24L6HjUdxrNkoffSu5z5RC8W76bTU6hKvvrohMsRCchdbX",
  "key12": "4ZFGeBfJwMKhb3x3QXkMYvosxDHTd8jwfDigFsjTKMc2UzPL6UvdKUGZN8x1riG44RxhzMdeuw1u88KGGgkWXrdc",
  "key13": "49kSGNNqSAWmM1jTeMXkMqqqdfCJRsqs6MGEksS3FKyGGj3gHyneDkwm4UiiCTF3QD5PTUktk8d3ytM3Muy4M2yh",
  "key14": "52CbUhjiHGwMX2fxFZiq5fFAtvXsDkV6xFoKMJZziMtQMJTJf2R3YYMwFBvsv4ERgoK2wLvg3FJdNsD4brgLNH6x",
  "key15": "3bB1VQWjaKLpRABs6iK9bHd9jcGtCzx6vNWDYrwxmH941B5BZGoFJirunXmdpUXquTL21W6seZegRKQgacYymmsA",
  "key16": "3goERgWZnVSdK87g3QsChHP9avBa41LkVp8BRV7RGpQx2NkCM8MC4QWnYXs48sePtQdWsP3LA2aowAv8BbYLc3R5",
  "key17": "3pGKv5D2YnHBMnMnM8Fau7WJSqjJgx1md5jXrUx8wPTDrBubdbvTDV8MattVv1y6Cxdhz6h1jCYpwDVZngTjrY6G",
  "key18": "5PLYAGCL5YJoNEU2n2715MYXaLQJKLe3rL9L8nd6NYwtnXYwxnNzcdbEubB1P3zqJPJPJByeQrn9QzBQxFZi6etr",
  "key19": "5WyWLJeTHjDkpu58hHpCxPkpP3tTy4QhAjS9gEv84H4E1bGwARUoHBvv4fhqZBZQaJAp5dVjfWC1ueaw4hsVc5Uc",
  "key20": "2SaCUkbY2r6X919QSTNVNKNjhPY9ZDtgSA2rftbceu4yd4ZKs3WXBscMj55b4ygndNd1mqxsjGbtaSDQerKmAes6",
  "key21": "Csy9QuYjPxUQtadKDxADts7PLBkGoYdXT5aRTRkEUs8UHPpgwsjjy9WFssNowk5iQEWUkH1UfC1XwJ5gk1F9f6p",
  "key22": "5b6D348bUoamQiCGtidVPqWikC2LA9sQCvh1wzkW6JsLYf7YpBmtSfQXBm973WMWPzeJKr9yRNNME3R9HJGg5KA1",
  "key23": "hy2utKEFznqBjFi3jc6RgNf1p1X1Mxyq6P1GZsdRzYoYrNZvB4vceQpmcnfr3EPbLeLBWQ3SpBgoxr5fbgm5cR6",
  "key24": "3Ygy1fx6SdMeFbaxg8hgo1ZD35Grhf6ETWyuHdF6LtcVksgyfgX3nbANBnHYRbSZpXPiHLiWrVq4BFn763vbD1T3",
  "key25": "5drtA2FeFmtX4rSKjyByE2diUs98nsAbcQG1wkQX4cmJpaCjjT7LMfF29cctEhRTMs4b64N3zuhtdjxB3DaBiMEr",
  "key26": "526RPzPrg69E67NL5Ft29m7b3rqALG2VTfcuenz7upMVznLVNwWsDDrK2MKX5V61gbKnpDzivAXtC1Dvjmqwc2He",
  "key27": "4PXoqcVRTUdKSDf61ZhTK3q5Fnov7mcFkoLqUvzbY4iGPRGEUgVKMxv2B5JuRMQ3CwJ42BmBYZYA5ou8cLmMubFj"
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

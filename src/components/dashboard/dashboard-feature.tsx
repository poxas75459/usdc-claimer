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
    "4kwiabTGavih3bXZNQJ9ZN3QuDqJgHiL5s5W4zuaz3bztR8cPYkwpcJkdAdF8F2FLmgWZY69GbXNFLbm8PXmcz6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWpe6SWYeuEk89Lxuzs9iED7HD79JAiqx7ndW74Rch31MubVeyGpaYVKX41kACeVs8ALEm1aK2dKwEE66fFoNCv",
  "key1": "4328QAbma1YUXMe1sirNsZiufUcLD572KHH4K561MDHKZJvAQf9rMBmeGBN3KuvuRHWUEYEK12p2HoTew64WGsif",
  "key2": "3KE5KeRC6wGBqtEq5Gv6avf2e3bnExK8ruxRQc7AQueCN48JXQueNwZJcMmGPTTv9LWxSyEqkLoeL8R1nfWQGby",
  "key3": "5a8LhH9iiZ2TkL1ibsur58bz2F1S4pNTxeuvdn2zuVoSxB9X9s8VW4PDw24sQAgHw5QDV1GNnQmQaaPigizwUpAp",
  "key4": "4abuxNLoFxDtCfzXmNHsKvhhbD2KpjAzBBeucvfLZ1CgKMxtDd7rgfSFYviyeRE6NkyCjxHrk4d3jnSrpaP4z5xp",
  "key5": "egW8QXn26T2uKANVCECVpak9bCmqiT4ZkYdqDEuB4VxQN3PjvD32tR48jTvybWFskRw4HYhNjFNpFyg253HAFyg",
  "key6": "5p9hm5YXQVcMaj7x6seEKqdn3QLHnG7TzwTYXBzwjYWn3iaJdMS2jkGd2BMbJToeme2ykguqJzcXY8YkA84UU12g",
  "key7": "fNPg149AUmS8f7pwny3PNVDk58Upuo87DbYf1fNtV4xzP8bnEJWummx5taxD5jgsEnnTfFq9b1GRbfV8Eneyngf",
  "key8": "4oJG6TSXvzwhoAxUeeaF9rNcLTmpXxH4kKPhnheQJToBYpJh4w296tjSdsKLx9AohzaWApU5RF4ABf698KkE64p3",
  "key9": "4WqbQ8qs1MG2BVYso97MtJKPUHXxvYNyrvbovEh7SbBkrvs1cvewCQtqeL3EtodbU6CmhQhs74QfTsSQCHUoCprv",
  "key10": "Yya2VgTxcZwRCDtYTjqsvbjGo3gPCikeBcbguCJWeALV4Q4cUXyy1CNxRKHvAzaBpHnxCkGVUdaYiy9qfNjywzB",
  "key11": "5mZYQxy7kq6xo9z9zWqVhYpodiro2bYL3qPXXFbZH1DVjuRK6QvErxZn3UFDaivsCMKWf6me2XLiLR5xCTjpfk8T",
  "key12": "2EAGwg7NNachT7Px1cXAM5Xaogt6e1eqtcGy1e3MHFubofVSzKWx1dohd2EaXVU9hexmYmZCuSJ3ZR9mACdnATZa",
  "key13": "5UkKnNbPqna3uPaGZRnpWCa3tq1jZeYjXfyYbATdGQphjjSCkmDYDK2SMm4e5FJuLngajBWTMWqYEp9iRQm7M9Ty",
  "key14": "42Rpy75MNNL6uBWXqyynXDqrTwQgTYXE7XrbPs7kZhBLrEjxyHzzXV6zoRvHAJzAkDmPhjnG6poQPBDZg3CzjjGz",
  "key15": "fWLDTt2bs5AaxZPvZiKkXxsUMkrZwsLpZZkgpeWSjfs1d5j4Xu1AdKDpijnZp2XmkS4Exj6fQ6FhX4Dn4VxpYFZ",
  "key16": "4ajidtkzncqBCqg4HviZm5e2fjALUPiV29LqoSFL8nU4K1n1tJeuhSgkxVwKpUfS1CVLYVqCiWLuSW63mAg8oAky",
  "key17": "2TS85eew8A1WwSeZF5wo8jTzezdqchdQTt3wrCvN9FfAr3CSu9zRXnRct77n6j2R57pB4MMwiTvfYvq76xjKxT7U",
  "key18": "4Y2PqpQXPPeuhaDSxyki22kiCiP5NZfpnZDLTU18QDWqoWAvd3EZb7C7sqwFtx8SjVUPH7Cjv1wnXrJRQpD7n6bq",
  "key19": "5HZQrcG2YDyHPaK82nHWArk1qHG8nMC8x1vaiNC5LyiTJkfLwVH7FqTA6EEJsKYMQeyGULZAKVULMDuxSVg3UAJr",
  "key20": "4LqrycL38TEriVnJBkHSRhYYHLfzA9z5oNHVesYNPVvHCJhGyMwXmMv8QpMibfpNWJYMytazVprpfFoGM8jAzGj1",
  "key21": "4QUeHWb1pp6564t4sbqcZXbToWZAZovf2925SqnpfxMJbiCpVVC4NJANVJ82Nc1S2wku3wohhkmLvhfd1iPeE2NV",
  "key22": "481KcyDPS5tP6hFWLjeWiu2NTHyGdrnenEe1iE51WZmB2ghLcBRMtbowN76Pa9qRvSdyzxektAKWFpfjMKpbdRUi",
  "key23": "5xWXcvEys1WThDu2Q8uxQwcHsDb38eQ2txm2L9EdLTmGkYafkgVQKb82gBWWu3bjJDWczHrcsZj9qRHjAkPWKFza",
  "key24": "3yaiwGWCTsj5eWb42RUpom9sWfTxhqmjppsM7vkndGpaJ62tbkmt6Yza1WGMX8vZT5H8HwHtdinThQ9sdDUAfnbm",
  "key25": "3oJMpvBdvYqxQsNG6p1fuuxxKvDtofWG7vag5akFjUjseR1k5MNV2wX4gWHLmJqQnKyprW514ftx5uK9CUvzcXXR",
  "key26": "5vh5u5QdF9NJBS6u8NJUXdPjK9daVsw5BzEJE16fLiFtYeddueNeCYHmcrFyysKy6a4NwXGhhDnhaehyRCs3Xog3",
  "key27": "UkpNeKSNQv6yc4jfrbPLs9FSAQquAEFH98pgoMMM6x5JWqjVawvvYf1jZXSfSzHwWKY5QPpRGXtCZEoF4Sd9drL",
  "key28": "4xqs2pKgCFvzeVZW4gGY8mcPD8ou75RcEmYvGj2dvXktpZgSMrDRZKUwchPxDWTmRxLAsdFzHEoKtYDdQSwiAmuc",
  "key29": "3UWULXGx412922WLmWQddUnReh8poT4NhhaG5RrUVSY9fFiZn752oDeSB3HHvFD5SjQs88rCRfnRQYHszXujYPwU",
  "key30": "3hkQKXftq4B4LpNJrTtEYeh4C4o6MbmqHVUK7a3m38PZdQWhdaRY2owZba8GaBACEZ7kqYQmgYunBQ79B3omWg5f"
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

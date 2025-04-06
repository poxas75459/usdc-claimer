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
    "47fVdN5Pdrwna1ePGtNnwa2YxcZ1NBDgfqKT4kpqX8EQYt8K3dHggGnEiDteZnHEACLguTA7urbeDWkxkTY6Ryf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fis62ESnEbRFHUVdVYZqQ4xi2R1XfGZfMJiXVb6o5JZvCEeXwrdv9KXSYZJsvgeWo7EkFosUe5UBpVEjLaZ6h7S",
  "key1": "4tMVu5rrvJs45EeHqEHJDZgw2Ke6i3DSE8zsk2apvDEidZHdqxrDH936wK8iVunLZk9ZSVyTTMwY2Ao8MQzmhzKL",
  "key2": "2guxanDmqmQVMfjfTtbUQMnNNbgnbixw9KzX3Vizov6CxcQw2JtVGbqNxLX9PhR3b5AX1Pj9CmR3CR3jWskBkKe4",
  "key3": "afebfzPwkQ9Xn5zKPYYTRyQcA3bUC1op5RsaE59ArNQZQxMEjGrpPxSQb5fpTNSzfCvUkxPETHQzqjZFQhje8VJ",
  "key4": "4LtNE3cK4J4SMjBrHoRk13EjoafNYN6UdeSMgBsftDVHRNC4T9XzGjWQg1vLjiftAbDRJxnztRCYTiqAi6UeqXoV",
  "key5": "2cKZsX4kXHxrF5uf16bLRozCbE7bjPZTcXuvGQg36uzJMzXKpEZp8setjsUZVBd8SNxraiUBPhLRrqkSkgVD4uTr",
  "key6": "2YAZNtjqRixoNxDgGGrj66eiA4yivbKwBwUwwr5NnHUNjQrMD78Y9w8eydufYyHucTRPYsgBQ5wjkFQLNekzVmMx",
  "key7": "gzqaxU2UWLknjUXpZ7LAVGgnhG3jAt5yoVGFueUNiEV6BSVJbPp9tSQfYCbXVj1Ns5LF3Yx4puvmimZ3RMKPZhg",
  "key8": "4cvYLkjyyqJT4aShUFqZBwWSU23cCY3sNkHXx2okcxSE9zt3gzSbDJpoNvnpR8zYaSeWnPCStjWTFj4f267H3PKT",
  "key9": "2smCxbWKaxj3FGatr9MZcute9CnB8y3p2NAQeqiWPxYvMxkum66S2rhSvymZ4TTdYW2qaedrZAgygCCKG2pupxb1",
  "key10": "2qzxt9qBVVhdSSJxzoAohtdsVSgeqwzU1ZqVwWxSSAGFdQCvT1CnnKMmjoYiZRN1wCqZKJbXszfep9Y9HKtZM5r",
  "key11": "3kQG5ZL4V6tV9sTta8xJs4LDoF9YpkeX15YLsfKCVZBmbTEeayYUqNNgrqV7xXMdURH19AGaNmbrLXoRhNVkziwB",
  "key12": "25B4FMMfD2dbMG2yfT58qhKmuHD6BhhvBUfVLx4BSjtzQ8Nd7ma7138Bd1V3eRXXvhokrYd1sRFZaYWwkKpxMaQz",
  "key13": "Ud2fPDr5BczSNhwPbGzhzHN8SSx4ea33xMKSbCTca4gWFiYk3e4aLiyovwRbEooc9mJEobBLsiszpdjDHdiCnjF",
  "key14": "5bj9EyiwRUSahRfcAtNBNMXTG8x4mvVMmE1yVfcKqdVSZNdr4QMH6WcqN6WJ6uCqJY4Sw2cz3keFi66FPPoKn9K3",
  "key15": "r492qLLQ7GxL8ZpTjRFArCq6CMskYZUVJFpvDz3hJM6VPifsgaCr7sTmAMAwnBvRZWrgUdVftzzeEWSjLGnEd1p",
  "key16": "4mYJsomSrXgyEQVyowu7ncDB2vsQsvdnnTnt27QGVr81pXP6NGq4hHhSpWeTjZRxxpHHumWrcoAg5hPNHQeLkZNY",
  "key17": "5DpyHiB2grH58S44UeHDRe6kegVRRDsGRrtQof492LpQMZzNVyyXHgdKPaCFeCX8xZHTKoi16YJHAbWVnwRVQYGU",
  "key18": "Ekx52xru2G1rakLFd4fmcZWMTNy2XVjh3f1PpULDAFVYaqsP648BuT5RSA61QKVidaK5H1L7c9ZmAYWjFTyCTqg",
  "key19": "5GB6up96jMuTMer36XCYeXt5ehJ3twhSPcVJ1RpRtFC8yy2aoUj2m1wi9NtUuPwdwtvv94zM7wwJQuP6moz2XqoG",
  "key20": "4MRrhoEQpSQ9P3JfNaZQAYyjD1VgN9nAjcqCLYkd5zz966D7oTpmg2jUaMXuETUAbZNB9uoGkhBb9JQWfGVKiZvd",
  "key21": "iTopwXu1zQLZjnHYghqeVrXZUgPeKhvHyomx7DATqVqH5m5Q7JTyYR3vxacbDJqJbv3etksicStR8U6r5qoyZzu",
  "key22": "2XJPG34KpPvD2E5jvEa5iuPXEfFNptc47NyZZRQahkETNavy4jmrppwGtGkvK8KJb7AHr3FGSJSFRsVd6wn2XaJ2",
  "key23": "7iNgfb67wiAJHTu5S8nErLnsEenvqbSCr6cb3oeYVYTGQXr1kuseRWmEtzeZzsEF9ZLDgtpanYyEXnHuNLbnVXn",
  "key24": "37suuPA8CaitpYqZbH31qqXcLRGisboJv6kUkzt8ySqrtB6pTikidpZBonxMcYzg9jiiobj3XWryJSe8ZdSGbM3J",
  "key25": "dH6ND6bWimReH8fvvxXXoCTwLvHP2MNz5mgEphNvNRzxdaHoVq8MLXowA6uyLwrTdR6peDuV9Wzzn63gAB9xQsS",
  "key26": "2b5sLxZ6ZE9N9B6EEVV35fWhnPvS8n2Rvatueg78rw2HJPkmHnvvontfTE4eUEvLWpGPHYr1v4p4sLGY3em23aUr",
  "key27": "vmoW9yLmPQePV5VHffHrgCiKLKYqwB5vckRnqifjk26nidizhTiHYmaYgnY8x4KT51Bcqr4C35Zs7ZvZMhxSoPD",
  "key28": "3UAFR5n31kPhAscMmvd2s6KbHQMnbPXwoYKNqTn8b5Y9pbxKa6gjNt7jXeDkvCDaVQSLFhJCU8CRK6DQp7Q6irRY",
  "key29": "3jHVx7LYiHTeLj59MddRgj7q575M4atEqhc54fYpWkfWN5ASQfGVzXZygFFXg1HxMVGBvsgVtsszDhnWB9Grspau",
  "key30": "2fk2fnM7ugpQcgjs8qtQW92BkXfnSoawD23RDzKcYFr3rEqvDiCmqce5TyVt5zDgzTZKVN9hYxhwgvFXRAD7VtJ",
  "key31": "4QbR8kLVmevybxfGr2co7QV8doVa5YaWZVV8JqnZkEQU6ZwdAUqMLUfAdy3YfCUbMN5CpuZ2ManZ5MnhJMujutbJ",
  "key32": "2adurRPv8GXgpLrDzxDWvwaiCpTYvDoKCLuQCPzSQ8M2KH8DSGAsduzxxncx8vEUCXA2SrvNtdmRvcti9rzaUL8r",
  "key33": "4GNE7i1aG7vj1wS8CLGDweCtQsWBeVEYm9YraxTCB7YXMeipXjcedPH225VZTtwUbfR17KoGXbuiEdYJ5p6qD26s",
  "key34": "3HixgwxGUcAfzqj4juYTNx845pQsjAgF2eo1zcDaFwmzqyoAHWQCDF4Zj96w8aGEi9GH3f4penzMqoTvkQQneVTx",
  "key35": "4GNccG3bgABavMLKF9LMQnkULjBxNhEFMpsa13tCD7vY1icLuEivzRhucDozwqx5tKexkek7W8RWx42RPAqtuy1s",
  "key36": "2qEmK9KqYAYNVtWHMHLSogZuTHcoiUPVZ3j9MQn2NsLotHo8RVFKMzf65Q29ULX9jXsBjzMoXPFLoXmuYs2ZW344",
  "key37": "4awxHMmJWy6msK3Nmv3ABWhbxV6twRpMkP6GuLcZJyC3nqyS4GTzQtLNzCKsH23scmLzvGAewUtN3MNtmng9kwfc",
  "key38": "2vPpY1ieXPLoETTFxs43mgteWyy2kSaNC44s2WNEz3d1z3KKxaxtsYoKMnY6ZwfJeQFvHoqfF9Gecrkhu3e77z2Y",
  "key39": "5uKYZeTPfxo5kVkdRkNhTdDr1TE2AodSNWwaQYZGZMRumfLQVrbLVTMfWM33wreBAfD2iHKyHA4sPT3zfGbaaZPc",
  "key40": "X6fJeskWYbWqbV52dZkU52TCYt8vyNvNjZwh5KQdYmKkPq3FKZiQrrTqXm5DDYGfRqE2pbsy1asX7YfoyaQLwS5",
  "key41": "4TX1p2z8pA3izBN7tnXK8KRWH9CxPokoJ2hNUNUkmAnnWyNjD5a17hLSjUgiega4ovZgmCudf8XV2AsJk7u8JS61",
  "key42": "4qzwMsQdgLYUrVnG4xNuxx6F7fXwqssavQnbf2RvJMTtyNcSfFD5hoyzVUzHA978vGR1cnaVLYJY4J348hgyQCyp",
  "key43": "3dGFuSGviGMg6by3XsoWeDXzpVG5bkyn7kLCg3rsgk4mozrsfqwuEfXmnz3GEL1hoEhKhugKdGTFbVRfzjc8iPzk",
  "key44": "4d1kYsmWU9PC2YtU1wq7bsv1tRxPcFkq33FzLW57LZ2Kp4bXePZp3PR2P8YLD5cF51TMhusGiaPBM2FfNaLdrKMt"
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

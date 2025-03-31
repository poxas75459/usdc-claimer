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
    "25UnV3JoAyXKer1vfjhnDiW7Qs9qwS5vUiudNLq9CwRfKZ4BH1QQVMjsUBuG1Ya7fFPLxSkgXRu3bR7hBwTzGxDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wsutsh9dbVGGscPKyR9GCvDig3xrsE9atogQWpp7rTqZNWS2W7qHWCL7eRFw5hX7jnpLhUQPz83pKXAMz9aiAr7",
  "key1": "5zDSWzrrsMXaU68nMKHVUtcCfEUwKnDXoaWBXo1AQ73XCQnPLETY8gJo6E7FwCmza75teAeE8ZMggeYqf6671B1",
  "key2": "LzCyi5oRGyPMBvqeZ8pB5qgLEJwPDAbAEhpufcu8hNx2hL9QPQLKNmFgX3iuFBmSnRvhzLRk3sh6Y41HJHkLwjc",
  "key3": "5jTJuwacfFp42voWozLsPWBxgUi7FycYLRJ76UxmuxfLSctRSgZwj7FX3dEiGgrvxVUjnsGLKbW4WqR6amGpC3U4",
  "key4": "3Nnu9AwVeD2EG5GEXWM7g2st67yPptZwvQhimpUfSQZri4h4wNt5gzrdcDHqf27VmMZY9ztYeMFmT9kvdgA4225H",
  "key5": "232Tpi9JpeDRxM7XHyYazT98zDwweiXe255yurWHVMSqZ9Yx4B1tkAktUyN1RJVjW7DLJQgW7oVD1zuQo75JkYVz",
  "key6": "5MKEkGkEiQRii1Yn96nQ4QBFEPANBVrfmmX4Ldy8HU3yUmo6pRwa4ZZAG79oWqagSpzHfHoHxDQTMmvMX5EwWv2p",
  "key7": "4QQJ1SohLXawsBmjBJeVS5MPkgD8gvpSbn4j3W3b2k3PPXjmMHVdUyHgaDvM9qZauiCpZa3YzRks7Q9QqA8H9LhQ",
  "key8": "3EF2oBdtaosjFkbPxtiqFznHcBa6mNAmJMyfUP55Cr4m1WXpbR5qYSkCYtEkxNetNdBNTZwJxiBGDqW6MWRokk4Y",
  "key9": "2jh2eWvjvgaMqQjMS5UEFAghfUJRW8kncrarz2n8wN85KdE38rbuPhL21EJP33QziBu1LpuwumiGD6bYVw3r2AqE",
  "key10": "3inVjxyRevVh8aMqRwGPt8iVhiNJ8NzQQ73GEbwkd7jvSo1JjTRMzc2sNc3RfzBtkzKgsJZMo3Q8XQiWbHJD1G1D",
  "key11": "2PjjDwjRgaeT5mppDRb6P9xtKHStTZcvgkkj15eP6V9oePvCppXdHYHMAWBKUm7DK4UUk3ckxXAa41xGWKzXStL1",
  "key12": "25YNVd3ji7gt3MTtmJnK2gCBLZRmcQJoWpagzinqDfWJdrbfN1KYkU3zxVDArzzX2GY6XiF26ta1ECrX2vfc7owj",
  "key13": "2hrN1FfKZft6H7K4od25epSzZaWQ5aCpKiNB8eLQx1f14oJaGSWCphNx2oaR3Q5q3Wq8JAygF7JWMD46ojaq5Grq",
  "key14": "4sJ4N9EJGuhTjwpqNezTJNEqpY99n4K7USbTBk2evzFwK8f6fZSuFg8xwBAypzMWR4kKUEcVYMuhS3U1Dn7kRUG5",
  "key15": "3n4dJLdd6KKrdVoLT7FeG31F4XYcLNSUiGYhewzM8rQCkBjfP2GJFPZprNWwNzrMffbLY2XoEJKk6bXeE1W1aoAK",
  "key16": "4ZymFQQgkq7PM5NNTu4jCfaq5GZumV5pHJWc65fM2rM6M4WkjTUkqXFrrExrHg7iMVFCXCgTHi3ceke5H2CRsdun",
  "key17": "2vNhnCKr58etTRGGEqsaL4Q56xVhuP3RMtH8nrJQivuZQmH4x2fJpb1ZTaLTXjshrUXKF9pickzRCaxjcC82MSyt",
  "key18": "5Se27F8UWNAVSuKBDHmsTDVi6hP8AQkYG6Tt9L2CdGs4292CPqRRW7rXXLwdrF9Cfs5qkVZGYQxuaMvsCx24geuY",
  "key19": "A4kvsoYjmeZMFuDdabtEQt8z55RwvpCgSPZW39ow5KBHiESLwfQFJHHNvqvr7dKb8ZYHXzCuT6gvDf72knh2HKK",
  "key20": "2HCkq5xsUzz8MeGGjrS9cJKDGa6M2H2arHpmeBMVQpf9yCdM1sMyP3vtRyTSG47RxWf1FfX319wojiDtMgHyzDfe",
  "key21": "4Sn4T5jpoJe2EoUr6FX39ms1KKPVrZCMtZ4CFK48Vzp6wfXWcNRRumFTro1Q6VUDGnoo4MZhMEmFUHQ5Gi7PqGcz",
  "key22": "27Q56BuXtgf8T2zJtWpJotuHdBBvkF5CC3DjoTJdirbFuehseLpVx2hCBMFH6MkXwBiUE2wjvQbv9eZHwF4t31ty",
  "key23": "58shWZgXhgL6iyoMJic1q1JbMwTzDKX9N1FwxUusBwbpZGRqQXZvzVhH2AHEzwHkAs8ffmz9LTg48FoJZgNgWVWC",
  "key24": "e36GFbNgtUDRtycwfybvCgpuyskgaz478BnTRsaC13jCqJCn2woRYnWJyfSAGiRmCXaDpRH5M2ZtuF7zhExMUZh",
  "key25": "5id9DofypxLGC2shXJmWhwLead5J42ejqVu89GZW8WzyPvXi6Ws1ETcLUhULWR5aoDqKiCxNy4ZJNmL6rN5B13Vs",
  "key26": "5uahQcqvc7KbGGNVoyMhXPA17g6BsmPARKyjXZ3UoMPSGJYrdhw5kpzbdazzDpiYZorrH852DQk2r81oogdp3i4L",
  "key27": "244iejLzMbmH7P6dTo39uEK9XMPacWXooRKJcf1UwftnmzK6YjdM7Dk5gaGNfRdYophFhBT5DT3hs7Rzs1Q9NUKQ",
  "key28": "23jSpUL9fkFFafbawZfRBNPfVKPGJbvjLD4B1inURHWR9XQvu45MBp91y4MFQJYyAJ1zeyKGRXeJgSHU4CXtDFEc",
  "key29": "5UTYfwNnr7K6pL191SpJLaiYzJoWDwSmdNzBEviVwiJMVeJhcCeAaM63d8LNyVTp9C1pkCVk7JmzQMJzW8bFE7Yx",
  "key30": "izuXBnd4P3BAFXexV3rXWaoiCcsTELZgnM2bbjk8tN2LXPZWsn5P1irGjLaKMypsDZD2KJm8tRCCceLYKnV1hkj",
  "key31": "2xb6gba4WxSwDnQAxmX17z6v3qdMGXeq35pp1rsRG6ZVjLnUTjhtqkyf3bDvcpt7XvZ4MPTnATtvkcKevXxDqN9k",
  "key32": "2isEXKTLVQQT5PGdADHzvXDwgfXuc3VadXqg1CH9cLQscVciAB7poCKayWjrp7vLDQjpUCi5RtjjzVsTJaeYRJmQ",
  "key33": "3bkMqAwP3cuJhZETywGpy9PoXwVcq5GSNPDmnADYEzGwX8WMpLN7iwWDvHffPPfwwGU4bjn8E9WKno7H1TFyUrNK",
  "key34": "T41eJa2xtBvrf2BBDuKX3kveuTRhJr9qPH4B8awQWVH1o2YmkyUR88jUvrxinFvnCCnJHAT2QWGtBR9Sv7MZQZH",
  "key35": "64jWPB67d8EzTU482KSMYEwUEUfyVwuyzjTzk2nLf6PYk1QUgBU5Yo6z7jvnGUNwAR8uwZj1EoQzsFSDDem4ExJ9",
  "key36": "2wdPkTDLasqKQztZA4fsjy8LVHeowvMpkweZ3p5gfaCnWarSsnemfa1r3kMYyYzyr48GSymW28FbF5JmGhzXgGij"
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

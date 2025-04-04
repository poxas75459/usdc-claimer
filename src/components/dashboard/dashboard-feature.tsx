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
    "2b3r5gTmtceq3bxZ9z6iZfXBC343yeneUmCqzwBKLb3s9zv7jeZ6qddEgqVTW5ANPx3rJvdTKzBtZ8GQBtNU5DSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnSEHdF6VuaC7XesiGiHVyMx7XMEzviTz9gkhV97G2yvsFDtuHis7RmvkTko3Nwc1DnMHN8ELD6PAP43c7MQwjo",
  "key1": "9XiqvofShJNPXZWAAXfdG2Jm5oKdrznLLTYZdSSZsmYHUf1zz7prNgLu8kDkDLpLdZWqnAbsvvXFNRKJatTdVDL",
  "key2": "tpkLum8vMs6c1rsiEgJ5ah9GVhbN58tCWoXeMTLjgfGGcNm2GREsksPvWKSHR8KeTeUG8jF4E59s42AjzZLeTHV",
  "key3": "24oGbw9HXG5Qp4gK9jRxQyDBoARDUfrbDbgBfBjpgsoiLmE516TnGRfeMXuvi6aqXNYtoWZurdB61yQjU6fWiCWe",
  "key4": "3dNgcU4B6PB8KDUi3sbVeC8Cqt8ReRt5MN4vgg6HeLzR57ZtFJegwFeWkTD9fqcGFHp4NYV3pAkJ9cGcJisuecmm",
  "key5": "4xHJiUe19md5Gu5Ht2TLECgHssukqoE3DbKgXo1Qcroo6LTd9z8d9C8wLsP4ADRehj4RzA48idwr8t9vtE4z5dPW",
  "key6": "3d5QjJSU7ySyGAiPPnQgV7n4BU1Bv1HVTjy8B8SK2nHs1hqQhARrAbREkUrccSQb9gKxrqpfxwENydyad3wuS6Ty",
  "key7": "2j3PgyFLhL7qx8ekNwJicrTwxv6SXFQLeLQ1XA5x8GwZhNGwDd2BtaXR1BMHTyK7UERrnBSjZ47PfYpx2TWA4cjY",
  "key8": "yBjtpBkp3XWpabLry1NgLpUp4URhfp3e1h26A4g7SvW3FKZG1ZFi7bwJGRsuyPHZQypEdB5Stm87Tj3X2fW11xy",
  "key9": "3L7wgAWHYJNcFVCkGtbtc6AAYuNt3FogmBnAQmM9tabfhaoSmZZXXjy3zcE2R1covztHSbRJAXvURRVy5pkFTuSN",
  "key10": "2PjoYApQxahv9fkiPEFL9uSyYHEaSWwCdL5TaXakXygLB6TPP7GKpq3aEu5cpxYoN8HiTeHPYRFBHMRVkX6LjAri",
  "key11": "3s3QEXNEvnios8TbDTmxYiP2npt7huXmwbyQHGpzp4sEbs9ArYtGizywru5JPH7mbRZrcigLgvF76AzTqoLqSfob",
  "key12": "2DK7A8nPp9GTUiYRfN5WBpPLmtfmX17nserTm6jBvMxVL8UgSntrXkniL96Fdg3rMefmyMTQ2vcP5UVbaQFaRWTF",
  "key13": "5Sf4E7XvUKXoHodoBxm4epQwNxDyPaAZ5m1WxokKKgb88JNundiP3t2v56okRGNmG3QQudetD6NVdPvEKWTFYQXF",
  "key14": "3C1Hk5FiAx1WnEoLNbShwstp5XgdrSUPMjCDA8KjUhb9pspEK6hUacTkpsmcfD4cJfrsmuv7fwJqyquQRU7aXkTt",
  "key15": "cSzYTC8i98ECE9BVtJnsVkHZFEYL9bL3kjbTHpVjuS51emy386yDEjrEDXRd3yDnRkixXEvXCCVd7wmEbjgjJXL",
  "key16": "5NsrfXWL3fSiWR3djqG41X8SDtx1NwTjk9kVyekmbhKqCjUyRZheBA7CHymKpNWaAz7NmHPQeifwD1oN9xozKm6B",
  "key17": "4wX792rM7EDtN38zYdFmhhL8WmSmjErirrQb3P9FZ2iNNGwcqGqLknE5YsU11FqyDGKHQUuCq3oYmLzx8rcNW3G7",
  "key18": "2TzVgm4ghJ88upmGseEoyTu4E7ZjM8uSnuREmo4bK9LZfMwurgKFVB7V1hEqBQu2bwuFJkyLamQ7KgvuhDzb3k6U",
  "key19": "2P85Y7s19rrVEACV6pHvQwwmgU26x99RgqN4LM1M4qKxsyyvAdgAzj4TirnHfKWehtXHA3zny4UcLQZJAJ7fo2Hi",
  "key20": "5jPnK3ZahJG8AtZPyox2sn9RuJsZ4Lg4rWvCPg3H9oEbRHeqvXUnYRgpWQBEp3BuEz1Wwz6mXfB83fNXWdzoYc8X",
  "key21": "EgGDZsGQgM9tAV6DwKBYfJeWYNA4UxTU9Uw1GkeMYGUohafdrXhTb1cDHDnPLoNseUQpDhR9xkxDm8y15oA5R66",
  "key22": "3LVyypAoqyFBzFPvzmkrKG1GmkcybHEwDQRWxx1P7Dw6HnHuqfHHBqke9Tdqe93DxrGAHGPWrkZu51fncax2gk8E",
  "key23": "5v4Z1car4QscSqxuiEzf2VuySEwuKLajhMe21HqpUQr9ehc4fVYsuusDsLN35FK1P3VobKCn623vFd6hTwaYhoJc",
  "key24": "3Cb1656LfASVFnhtwnMkBKz1rMcU34hA1PQ3vuqPnHW1YcNPJuGS3zsamuvqyLhTa8r7CvM1FUELf4LmJJP7vNkX",
  "key25": "4ExGZkULbA16oGPrVxKmiTSrLhQPkmti8kRcVhNSNbgnyV4ThKJvHnrvpokdWatoBb44e6yTsxYCnF5bnCimbWqG"
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

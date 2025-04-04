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
    "3W4Nudjsw2qaiJFFK3Ah53Ek7QhtE7myRpTJdYsV6Vv4SXmUFLLisvzyspVFGmRTh5MBsf39Vkb27MBiKdQC3bwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLNtpxn8jkkoHNEWgnSamMzLW8Rr1etq9FuetmRSmhxWMv5rquBBLHUMH5JSiqokYGyaCTPVcXAvDy61kuYAtAK",
  "key1": "3evgiVGQnQXvXvBzgbxrazEjuHcUh4HWfM4HXwcyRj53jbyDckiTH1MwDq9FswWwnLgugieqckfXqxLZtU6FaoXu",
  "key2": "jGLrZHK54Aae3Bhr1DujNCc7Yuw6rtxGm3J4PWXRPr6Mxwri4C4hWSXBhSPUxNRmwRdYMgUjHZrZUw6UEAisTF1",
  "key3": "3Mf4HiJ63MrzkfoTQWn2gCYHYxhhSN2scv7rQdUavdHC5ck4cFbKmAn5tU9JCKo1iekDvcFsGWGUk319UargdyPS",
  "key4": "2EUyEwjVgBTkjpHEsmMw6fja4cqHNgxy2nbr9Sx2jBFWDv25JEoUmURBGDWb3mcMtSku48hdypXiJGrRgXcTYiiC",
  "key5": "4FdtXrzjsxfDi7WfJt3uDCHTS58mfftxZvUb5FpSJqxDqNk2E7e7DBdS5mn2y64qU3VBcqTvXgH6J1cFJKhRz4L7",
  "key6": "37GAvd37xx6gpcQDps4xnhEXPjQgQGgNfaMvMPbeJHR9x2jyhH3GM96iwqBTUzv6Se4Jdc1Wy4r3Qzhb4xaoqznV",
  "key7": "47KXFaJPGi7JWGJXeMAoSNeyUtm3jmVwVfDHEtSWUJKUNqMMtxr6K2QhSf1QBWKpeM9Zf8LtV9Re3vPVfGrdUv37",
  "key8": "2MfhmkX9WPFw61LwkbXhCr6JTpRT3tWkyxoGeA3u5zYFE2zWSt5sWTau49fcUQA5h8RYL5EfKgvp3ZkNYrUe76kY",
  "key9": "5DPfi8HkwAKUciUxD4PRMQrxTLyopiyY7VMAZnhUei8aK53Wc2XjZ6Z7FBhS8nQu4XvRJux2Rb1HoR6kRK1n91dd",
  "key10": "5tXsbjM4ARcMAFL6ZpvJc1EUDkR7mzdq1ZsTFBAziB2SsYFzpFFANkrwYPb3PRmH4CXW65ZWxUMiHy5y197jP5Vs",
  "key11": "3KoRXyNg8vcG4HgwCSvypejBrr6XxX6G7QoTD6QSCwJbkWY3ayCwzhgp3iMXDJSt8ebEzx1sLankGd3hbuDQWjKM",
  "key12": "26r7bToH1KkQaW8tsvgArRo4Ghc5zrUviL4V8BUENjwmTC2aQxTKY2etrELDFNNMAxcX9opuY5E4bigP8uTYh6SR",
  "key13": "4af7hPUfiFhVJwCZu1Mif82PhGdtJ6SiGqfYpyZqgEw7jFZLnNAdV2MUmzQjCgeVnQ8MxgT4gDoo3xXXo6ezGQz1",
  "key14": "5pwY978zrCgNy3Lr8c1fhrytgJYYSRSTHyDagTfzeT6s8pBTWMyuUAXeYn6Z4ZxG1hmETGXhvnw9ZNCMBPdLWyst",
  "key15": "2tRjE3BJjRvTbBmWFrvLixgCjsC7Y7bYxRPBRNVp5eEeG5KjexbLqm4R5dWWbQ3wGNfXsAvxm2zJyg5z6NXc3vyj",
  "key16": "3AGvW6BLnbtkXygfKjy2gczXVapspYiZouUDEuLMUDaYTovCTgXoWABuaABmuRwZNDvokRp3VCRZj7BPJsRF81S1",
  "key17": "2fJhYXQjwU4Go6J9E62AaEHTcLsepKWKM25TisJRr8D1Tte523wtXc9y4LyvoVCagHaK1huKvmx5NuMy5yA58Upt",
  "key18": "32V4p2LsNiwbYfhjn4uhUywQkmBByuHyoqbEmkvt6YZSXUPW5diW2NovdPNzQR3DfXTfGQhTtEaEkQBtNPNRiyd6",
  "key19": "2GxRMzsqX3hsmrNAN9hrC9dKEMYPe3xxvxmzMy85g244S3deLp6uGry5eJqy8yb1ifqJCtrhog6zpzKFs37pDG6q",
  "key20": "5AXUwkM6rEWDuhiJWPevCwQWKpWSMYATasvdMEF8ANN7vK19NKjaqznoLugbyjZKFEBvWYmstCp1FfbYzp7oi4PU",
  "key21": "nFvPZUJXvUAN3GxjF8oaUfpwENiqghzuwSzP9XA6RHLZ5VUg5aaKVR92AZN4X2rWpMon9Gm7a5DEXwhyPuz4wDN",
  "key22": "ewuJjjNF1S8iNHj4uvV74r9ni8SDtVqcDfs3cc6FLK34Q846XaeRFJH5ZTBfy1Cuc2ugemAoaij5mw5r2eXUvQY",
  "key23": "5zdFq7L1PVKvhH8ZRN5XzFuht2YLcXztxs99zFx5UovTUfQ3ePAQYwnD8oauU2qaG7Wuje1eKfknZAF3agL4PTPN",
  "key24": "28u1dRSNnn6FtQNe13DmaUub1uy5zogaMiW5b4h4Ct18zfZz5AYtJ3fAZEQf5VqkbiZhJyTaBN2hnVMR4KLrMXZD",
  "key25": "4Nz9jznRfcreYvziXDsnfPSp7XNzYnQSRS28E53G6exNk4ANFSWX1EBQScQwp9Y6SCSMvTz9LwG82pYtmRcWBuuZ",
  "key26": "2hdmJAV3fsk7g1XhxZjQvLs89j1i6hbwVjMhEPYtgzWxVrFNYuHHUka6xyafcHbmVPuLmDqmmNBi48vo3ix6wXqq"
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

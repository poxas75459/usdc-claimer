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
    "5292uv2qvWcpunbB6RccSyE56rG5yjkWFAQ65Ncpkvnqmvgv4kJ6QiWobyrWt4drQRqya55f43nk7aJVYNHcU4Vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5co7RAFQnL7aNVfLhFzo8oa7cTmhj3G6DwVnyTJnwGonjCXCBrTQbwepBZ2DRoP5uXrg6y2mHvmyaxGXDcwPAvpU",
  "key1": "4pjdMGgTL3Ceiyh6f7iNt2kamc6gdo4UdYGUyECSQCkUjFKSgpX69bTEikdxnC44d2ewJt4WEy5C6B4rcuJGiqH1",
  "key2": "2gkg5S4ayvSLqHjGbdPbWh4HvtxBipshAKD4wo77KEp2mQ5uysgBSpRGgyzZMzPm6tMq1zzZdz2nHEDfLBQrc1xE",
  "key3": "3XAGbuVV52uTbojbAhQo2yPn5gK5UFBJm6aLvG49M2fqh5taz5agR2236TbtFCZsFynfJsgb74MPkuX6wU8wjDZe",
  "key4": "55nrWeD2QquCf1SHTTUoAuHSWHCWHvQawE8xwk1UiVerGU3UMGYVyAHiBCeNbLs2LUqUQKnzas2WaWR66f1CPXGZ",
  "key5": "x116pZnoMJP6h8aHuwJ5QkhHhHiUDGMdL3XreXaSXH27zXh32Y2No4VUWHSVFrM4hrqR97XSj474Ytcph5EvVGy",
  "key6": "5excb611Nu7mEFkpAGMejSp2BbPxhbMtiGppeLyJhpduArTSySG9qXd6mzTWJZS6Wu5GDKrumLdHC4wFMLSggUds",
  "key7": "3Y618AxEYe6Si5byf9ga2iDmMMXsZG5i3hUTG96oxiY9P6ihYugHJTRyBY81zdEyTtmKrZiMLhdyU6dhrJB2GVx6",
  "key8": "3ZpbJhmvoUQyZVxC4spywuHHKGirHATPGJkRY7ZL25YV4x8a6pyaQnjkUvBn9uyx6mMF2qamjMkyXWjgewsDL7fx",
  "key9": "2YWLK4DHjkPLLoDNGPvFSDmt5qkatHjpcFvp2t2ifi9PAD5Fk57kzKeMVwoquz2dBotK5YcCM86iu8doRobHX1vg",
  "key10": "2vPhtM146wZ6fAQDEbdMBgDacp6P6KzH9FM2NjWXyf7ArQw72VuWwCzuz3S812ZcLDTo3RyQrRn12QTXzpFJiaFf",
  "key11": "3tfUDfBPSJbcVwtw2spwz9GMMoiaNSMFHeuLZDNj7qgWU1XhdUpCuDuW6KjtSYbaHAt16vgiAWkRvXbESxphTh1J",
  "key12": "4ygVxCvL9jAYh6S8517GTsA2nv6hBKhGZKATed2YJSZn2VAeRsQbo1xdvArjy72yw9xH3dfDGMMLFBZxjE2L7Tit",
  "key13": "4AVDwHSHPvc7To3JaZAuiGEYwg1oQ6nN3BUJqz4rR8n8oLBGqb4jW2yDPYnH1jXLTys1Ryvwai42DY4SRK3C5PZg",
  "key14": "HwaFcCXcLFJzNTd8EUXbCHfBmfz1K4bCM3MANAoExJwYx8ZkDYfiwVnS6amhYHcmnuzwxN4kGsTd8kzNJWMBE2H",
  "key15": "4QfsoQmud6B11W2ZxnbVs8peb3A2xWsvbNzNVPwUJE6oRfy59tQ6Uy4MRmVZ95W2rTYADv6jTusUu9NxYQrV3BfH",
  "key16": "5oCTEuPFiX8HheU3wuT4V7tFME3mpX5CLi7w8QFCQoRi6dyvDU4aJVXxWh1hoTxu1HorBNgY7WjzYcYz1MKWfFjN",
  "key17": "VmTcW62h9GXYRwPWrWezMQETgUawEojSXPfvo2dPHWaJBBfKPXtREhyUXnTpU9jyzL8cXuFuVcYXi13tLbvbwhd",
  "key18": "52YZVSuTxnaHe92ZDR9RDgZWuPW4Wt2MBhkjrpj7cy9bq2XTJjuS3Mh8MBdUxy4hDatBmSyDEVLHgViyLZd3fge8",
  "key19": "4iup7mk2mkJQkUfvBUc2d1YZbj4YUVBousQByQSbaRcS3fEyY1zmm11e3v2aJg9C1WFKVymdox7pov1hE9KsuD9H",
  "key20": "5oeGQ8ZiN61aNs2Qv9dicZYDudQxMBb94Y8FE9sw9MsRLrruoz6kM2kbCNSucEtJoVKdxZin2SJhQP7WP2m9smxn",
  "key21": "nUddq9oYdqiPYRCGcuQ1NcrX9skVTXayYdNxkoLGx3oxDQuYnGcZv1c6qdjd3orGbaxrXiEeJi9V4F95DML4t9e",
  "key22": "3AW31TXc8BWM8TT2MSXVRgjGxJaCqfMA575pYHUwfbCNneY2HbvYxgLfTpN5Tu5MbR2ps3qpNMi231oGxBric7jv",
  "key23": "5MG31iBTDVJ7nUC991jjUscjTz9GRbyone6yVcvG84mtDJeEM3fWZZ3avw9nXbyNzduERQJu7hghkfJN5RLpBaa4",
  "key24": "CTM6Xyq1LXt8wowaju3imz8EXKVgx4Ejg7HGWGhGGZyZLsc44WXSbmueCxrBVAFofY6HK6jm98cWhTkQhpSr9a6",
  "key25": "bsJqjMpzFDcEqoeDnU29LA9SMtxjaA7uhHSmfPHoS1faiDnjyDxuU9mvanrDF24gyAfL2hz8m2iYeocuv2R856q",
  "key26": "3mkrRB4pvCL3187QB8CqqZv6eHis3qBo6N1jBoNMkLsiZFFK9reQ2dYcmJ2ttffSoCFfcBJ1gtxqvMTq4p6agfbb",
  "key27": "3nr4ZBjY2A4sjzLhEB8bqerjyCJdtFFkBxXYiUrSKBwnyR9sXUBzdxvGqd4rTvPGXXmFXVUFxzNyD6y3Z72tqzg7",
  "key28": "2BTkzmcG1dVcp1zb7ooNoQdAgdQF2ndVAYRLCPF1svVKk1MwwjVU6ETq21f3sBrsePYjCnE1ebHJybvVDgRXRnvg",
  "key29": "4pHmujm6jQhdzU4MVpQRGVDXXrVfXrrymG2jCkNzeqyGPw9BCcChiYzUVSniMwC5GUd4u3VNq2NCbsJfsGZCsrL5",
  "key30": "4erPUty575kr6P89M34Bs7CCRQAfzdp9YH9ZtBDBNqELVj5u7VN7QyipdNEamHGQHi6AVX7CVCGZYEt7DKeEZYcC",
  "key31": "4SJXa2UBJc4BUN4PJghz1Z3KyZV7DAPTaYzKqCjGAztAJpN4uUgmaU6tjknpN3Yu48iuTcwACMYdqYqZKZVULr3k",
  "key32": "4EUDnnHHWfFNz8ixRkRncHJZzSGx6u4KGvx6q3s9i6wgDWjbiTTFr93isr5Arpm79pQGxUJxX1Sj33zo7gH8W8f4",
  "key33": "5auB9yEwprXR4Ny6vBa97evZUXekpggpigrQyDAANHM5vyG3sv2xJGvW7a5xfQP7rfoVQoRFSz11jqskWEnVvK5v",
  "key34": "3KnfReGk4HZUR3e9wq8a6w3hRyeGE3QMDryTud2NZmYNdNUpioexMLTXvBrPdzMhnGLZsFKCYTxMXfTgRoEtBRQ3",
  "key35": "cU3FCCdRA3tg1CpYPUZmxMbBPGKSkZMSLghzJU3VnTtKSA4f1YzgcbThmPBG5HYw9wVQ3uXZrPaGyUALsogWR1h",
  "key36": "M8s3R6MuTpBKdU77ZFYoiwGVVpLfEGiFxLbiqBwiHHjzRchhvF1NbrTKR1T5R9fvez1ekAjNZnrgd4qv12bwLZm",
  "key37": "5Q8k7Kkb5VNB4SAxET8WFjpvtguBaAE8XcD3NHGeYfeyxxagmd1F6ZoHnEeTdZ27z3rByhfGYAD3MLHiEVHYoefF"
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

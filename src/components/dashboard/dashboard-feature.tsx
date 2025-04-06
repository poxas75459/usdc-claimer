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
    "36xnRT9ZLtcXB1Bi5jNAo4XoMZfeiUWYz2kQJc4rVdKvFgYgRYY6GRXsywTqBMMSApxYV5yiREN2Qa4VEPw5Sx1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xVUKwcgomVpPkzSME3SQadtAVjbcSwq9Y16TtxmiLS6abesEzsaeMb4tR4pfbzq1DhgQ5AbxkVU5n14rbSM1UiU",
  "key1": "qxKoJZ9KbfxxbHu7SofquyTPmU9kYX8CRz4un9de9RYCbN4T4KeLfgP6rFC6zKnih34KGMwBrCRktcYVs9VkJ2M",
  "key2": "3bnWYDwi7fnf62Cha4iuxxDqooHBXiYiTncFhttre67AgnDggCJ9AuKTg2JdAHb5RVEmmVu4DeM6wgQkVJoe2WCX",
  "key3": "5FmUVYhBJGR3hWD8eniwcoH1cyxVtpuYrFkeVFhNkMYZjq25DSeZGZx9H8hGHgwM7TsB29iWStJp8y6HfjsBRnye",
  "key4": "4g25xZBmyQqarRZUCAW2X16eo5pjgT7GF6GBdr9G1gYVR2mf5FkbwBdEwhJYCkWQ3PJ1fPFp3Att28pzxwepaDVU",
  "key5": "AKVq3eCjkejAYis1EUGHLQZohaiL1gbDe8DXKuwdqg8eDgpeJjjHYtwtuafJTvhRqfVez34WKxXP7gJQ7Q6reJG",
  "key6": "5tzEEfrDbceodrrwtu1rZuK3vveYq8ND5NBwj3e8qo3SSn7m3yDT2LFKFd3dX2BhotwF3tLUbG1hocgfX43hZtf3",
  "key7": "278BJTT2uF7URXpkz3QZmvx1ToFCQftHF9Wkn7j291BE5mvM6wR4DerBZiKaStaPXHKFBQiWaVGFc9GtTG7ihBSZ",
  "key8": "3HwJ3QzFKmx5xuBTShNXtpZ3gz6QcxWMWoXX4UPNrYxEd8nJusrV4g3S9nqWSn7uMPWEzoXptanWE5EWdD1rDAq6",
  "key9": "2yUAinx6LBoTXqrCndo3jqAYeQuRSR3zyhX4oX4KN8iMb3Rq4hkyXDhbRGCwHE9dyNiWBjkKkRSnLGhH5mmkSZ2U",
  "key10": "2mptQ5SYBMsfJyPrd5zpWpSrJ3hzH3nhA2SWo4vCodLjjheTqj3fRcbF6kLpjC89Xp96u6wn8yHk8fZFby8dYJeo",
  "key11": "rvmJgT5DmggzamxWWvC8KG6q6kAQKcBC65PnEGwq1mhJ9wy4VebJfNE4uqXqhUUCsjgTnYkspEp6PnkEw8amXcz",
  "key12": "9pfaXeY8LwzyRek76mtYX8iLydWMoJGt3rQFzhX2LfcFKoxwymCM15jSucZ2vzj8q7VFZBcXhubox2ePe6RnZQG",
  "key13": "Zp3SKYztewuuvrmvfDDRXXEQjj9rh2QczKbJGNuZUJZpzg3i4wNc2sKT5CDTKAkyVMMiRJNDgMuUZSbNjq9yca7",
  "key14": "4Dxm1n1DJYKft3gM7iPr4B2xxDV1eTZtVxDeL8Bnhjqbhg6d2H6yKY3ZE6VGCSw9DPUYAj5ynuthfwTvpBFtH47t",
  "key15": "4naKxuwT2Ju7n78DUi15FJ1iFBYXtGyCeXeE37vd7fCLsTrSMyfSBQLKAyRTU3uStjYo3JghUottCuvANAK5dZYs",
  "key16": "676JfmzRb7CiUfYYvLVxvnYt1nsF8jbR6s8CSJLXBU2dE2bZTDeyqej54zWfiEex7EwfLrKkjwW8vqPjn4XJp99e",
  "key17": "2Ho9jEfScm7P72k2QdMr2n38vaGAkgFzmtweWmaubARfpKXE4eaAeTUoi7h5KAoc3d48FbQEeS95G6eJ8aubzHem",
  "key18": "4Cx9XAq87dAFDVxEVCC9Y3HuPT8TdighmDQo8FuhoeK3pHkDM8rHTs5WcZfEqJWaDz4qAqFxkhCNu6WVU4QX3Wq9",
  "key19": "3ahXci3EvBAatpacYS5hAJkKMmHWUNF9LZD2btobW2NJsaiEDNvaEYaiy59pkSRCwSumSgeu3cnPSzUPUgPy7ixz",
  "key20": "56nHCC2bNpest2iJtZtkrfGAyE8uYApmz2UhTMyvS4tqsB6Rs2Hija4DRtxH82KBUP6MR8RSP8PyzsXdUb2NW7XA",
  "key21": "5fGQxdfxUQWJzxUzGAQspiuVEqgdsS3bUzgH9Bz4dwBtmBtUPpk8XBT4ttX3KPFCHCfXzUizBky6z9QLTB36qmcV",
  "key22": "4p4Sc3mmt2F3sTnsPDdG59X64m7hHvAUWZQy8GRU1jqVM49dacj9vPtrTxuUKUg3tagPB4XUHwkJoibtSDevWWDf",
  "key23": "HLUr8Ry3D3s4Fa4JoAXS54KSZTXPXSdknWBUBo9jtZK1pwwnTMmoMWAXBek1haduqumFRPkLVhrpqcsfVXg9urg",
  "key24": "2AJfsaZkQiqsp5zMq1GCPf84gn2wfQTgFSkzWMobvyp5GizKzrDfVeQywib2Pa16wWUFbXDck6psJueY5QJxH3Re",
  "key25": "2K7UBCADfCPEQeE4PMb8ofRcdkm39isTSCW5jNj76y7FqmcjempNPgbHhC9ej68BvCsa4BfpiKGRUfy916Kp6Fq3",
  "key26": "3kQHrDAz1j1ayHb7Jf2fPqSExhxiCMDZorRbZhmEkUHRHYts7rzB4NKbvvSmZncwfvuhwbJGy2XsdwhRCVoQQHXD",
  "key27": "5AoZb63m7pXkc9TiQS6nzdKUcViKbqkbsas3peYXGfKd2e7XGWvMeQhPgKssikFMxpuYPyfARThUkUH7o7ZAXvMj",
  "key28": "5nmEH3dGbbyxy1na6uGKgWGMQ4uDrUFsKj2F7izwa7fDm7ejEUnuYZauNZ8zaoMPT9p5deMQLmUb8ZcYrx3wcgxv",
  "key29": "4iWSt1uPZViUS2MQXwQnkTVDtNf3NbSr1WoDQRmK2egeX98uuJe5rdFwk87p78NiiE9wmhXJLoMTBHh5oUncvEwo",
  "key30": "36AsPSEpj2owzMgzdxEE4xDzXwzDmHA21BDLC2MYhjDjAswNmVYgg5YS2KmkkDv71d6zGKk2X1Y47yZ5yFnxvdeJ",
  "key31": "4rkT3KkEgpAMfRG2W6qmTA3dKRboB8wgCkjkqQbradsXgpQeqxMwCPRezAg63ZggEji59YQGSxcbiTVPYz61xBEC",
  "key32": "5NsmGFwMn9PCqRW7TvQhGdRAqasbruFQbWZWGshnRVsb4waA6LjeddQp9L8sU6dG2qLsX94zuvkwNHMoM9uzz8kM",
  "key33": "3d8vVDyKR1mAfFwUk8N3FUFn3Quukp8vgmVTnQrRkyfUEyECrD2Axqosteu7aCtz8oniCk12jW17HMPquEziqkUv",
  "key34": "3RDKuKJcs9XRFrRV5n1PiVmWPDVQGtK8cBibNk5HEeoTw7qVw5ntUeSL7GSKa4tWfPpcQReDB8dqS4HQ7qd4miLq",
  "key35": "3NMsMDSDEGwkpPZcmgAkeNFMFF6zFe9NwaSqcCGAMYjnf98piJRhfFTzCUp4UDyCkzDZmeADRK9iNSvzi3NqxFL1",
  "key36": "28vGKEVMDbVETFGr4gov7VWoBibN2c1gg1XQDgBPbE1S2ehJAHGVRm3k23aWgEqDZgEBhhcKreSLERWG41emFDnZ",
  "key37": "LNQkiLA2uUjyDAXbSHZTmdL3vAeAWKVTeue8h6uyNEgUdnzwU1wqyh7dewDoqGmN1ed5i1qMzQxCtPbBm8AXgUp",
  "key38": "3gCtReuaAg6ct1vGGcAGGM1dF3x6d1oaRjbHuoJARixcdA1dzjd4k1F9akkKraDcRMTV4EWqfBRHzeNvXNYUAJA2",
  "key39": "QQ8CENyeQFGdhBsHa7jhwfyQyLMLDvBvMgDKf6XWJS2UHzAC46Go9CGA1Ey1cajuAj8UpXQaUtXZBEp9hZBXW7G",
  "key40": "2Y83V8NRAsgHqk1U6YCTfzX6VWeeRDvmy2mKkD3fT8iYakvSb4PeadYwqZdDdoZAjiJc1D485GkyUoy3MzSFWygT",
  "key41": "5UBYL9LsYw8YB2JJUuHXZwW5PGPARpQKqukYEraYnZEimtYSb8Bpckc7WoaFu7D7AxD82KJdJA4FtjcNorZtE3sW",
  "key42": "3MzfgMke6TwEnuyhtGa1f68EFqWiL5dEqzBRqmSZDULgHv1XL9pfK5JdQEW4LRQR1p7HV22X75yMVBxLrw3ekead",
  "key43": "58bcmFFgQ1oxWibNvRNowqgsZ2NZnysj6JxZWejBdzUwRTmTsKZqhGnNVm9x6CdTzCdk5SBHVRYVX1mansCceEnD",
  "key44": "4UzPvjgBjfhpMq7xwR2YC4wxb9AAZk3dzXNwkNegNMvPFs4JwU7CP9DS42jan34koypJupK5oY7DiZnSwpzsse8n",
  "key45": "4SCgLFREyqt3bnmyMm2eYaQqy561vbF6tR1fWSZfbr8JSQYjSyNA27NyNDFmhCuFLa4v7iSypno7A4WXVEZoxAh2",
  "key46": "gt5G9wo5ntE6X9MsDm45W2J69toKdv6KbeMUiEauB1YdugS7vEYmWJ4L8uyWvuyTgH36hmudcv62t1m4KSWPnDL",
  "key47": "3NkqXwq9xTjVoyg2xWntwnK2UttPgxaJBFPGyfi8R5ARDfC6icdFaBHYGfbyXu9frgDTTDtDEyfctGjVwkBjjg5E",
  "key48": "2AX7Q2mAuK52veZEX84vFYe3DfDfHequSkrTqJpr7pdopqD6vMqsEWfWXzSGYwmQ4t1UxuCBxQyjxW7fP7PBwA21",
  "key49": "2tNn52W7nePtfMqmQrhZfVQGVqLrsYo4U2mepiM6g2W67nX756hEXYA9kuC4tpCBaeZskVXD9BZ7BHanPh5PxWY1"
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

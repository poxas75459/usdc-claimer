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
    "3KJEDK3kL4Bv5e3NE6kKKbyfCWmgwroiZeWq8KJBAtp1CZjeTCEWEagRrTQ6DppWJQxYFSZH9N6f994uqjLnzpfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XR4qba8Afo1rZjZTB4xMN51bn3bNLQNAB2HBAZfdHXv9shEkaetiTn42Nx8kkACUY32aR162vf17ua9E3maA9E",
  "key1": "52kvNXuSMhov2rqEBZxECYRVFXEkumWqnE4CNFeaCrQFRnDtsx5TFvDbRZ8dRCRFjWxnVDytq3B1GR2PY7i4Qovx",
  "key2": "2s9SBSEknJfrqAq7LUFPLnthKjSTYkCrZHMs8AoAZwKSWJWzUHmwYGi9tqbCwt9XFoEsRFGb8troHGQW8UyA1UWg",
  "key3": "3j9U8eCJz9HjbvWNyw4BTSpJND7oMGKkDqaSDNcPb8ArMAkyrwpicPprhW6CQUzo93ak1M3WMZ8FwhzC5jXigMU7",
  "key4": "2Q9EwGDn4g2ZLePSYMw7zA6h4Krw7ZTvU3iibzQLsuKs5dLwVszFynwfBTTC6b4Kg1EsM4ynUtV9UUW3SV4pVyRx",
  "key5": "2KwonmHE3ug8yjZC2VdYKRHt4rL3tqCjNA1hPcX8tt6NJdHHat9Q5UGBULxXTkunu34gnA1XwyVHxeaGHZm8cMqp",
  "key6": "3tGZPezCU8GkYurRvwUD2ymSaS7nkFyXc6wzs7XWqWm945gxhevVTffE8pK5KHSPZYaJuK7v8Np9x3JdUQ2UrLmo",
  "key7": "ECwKvKD3maiMbuswdhvwsE4N7w46mHv92GZ5QP2PtBqpAi6eqmJNuaHwPHHgbGJMh9mZZVbuwAkY7qCRFYKJEF1",
  "key8": "39JFM8G2hfxtebviB5rVxXoxXf4rv6R5NXN2he6zXqszLhcwSvxgdnyZWSVS4xrb3iifczDpptEpBG9kiQD4Htqu",
  "key9": "38rnNpfcBGZw3nzUUxe5Y138C2R7Uv2rZzUyoVBYjaBKJz5dGUy1H1H8t4TEKCuBiXbWmBd5fCwTHq6nxFFr7FX6",
  "key10": "nXMbhZ3tu3zWJqkFmodMr45dsVCUdNMNb5opgzwJ9znBGADPAZqYkWbLi5BtS4G89fqtoB3KL38PT5ho4waLTKd",
  "key11": "5XHTsjwHo5uSHJPifc5s3fAiXZR8hszt6DpeWtZT2N5k9kvmvTrEuRzvLtreBFRRPQ99vGDuLgkjqg7UmCGtsATv",
  "key12": "3bLVR8gaYJg25LSsBYGxRqX81wL5Uz3umFqiWrMtuyB23C2XQRQhxxcgPMJkXjT24HhGEYCpxT5NVuYydUde43FD",
  "key13": "5yzHbz2j6qeS9zPYV7ZA6aHMcb2H6ohZGBeaXyn4CAXsxKHBNSgDD3Jt5xYfLDmFh9HUjaCbb9QtfvQYyNVSbMiM",
  "key14": "RWPdLFYgxoDJk4UDb7jKLbH9Zb5pnuxUqRaMvzMzTv6aw5g892rF3A1WEyTcwhgj7vV6asoKAhybTrPAacDhnpB",
  "key15": "2P39LD1HfaVRp5j2cSk9LupJxqFNhTitUGAQ6P7xC23sxH7bodw2AKL6dazhgSVbL9GaSNBZEjf9D1LUMUJyaw76",
  "key16": "beo5yyCGYK3oZoCAPraWzwTNmQTvPavc75DeVc1WfjjawWs1DgAmtEavHbav7TfUfe4K9CKDEmcxLs2PMkxuedR",
  "key17": "3ysas835bP3e6dGytFnh7XmjCqJ3AMQRCaLhb9Nu3LWUonB48HdTJ218VY6Uao6CigUHcVk49jQKWmXh92zsKM3D",
  "key18": "3D4yzSma3dapj7ZZbTMWZsm3FGWw85oupy29revDRxSyJYe1eEgX3ZJN9gD8vNsc3E73qcx2oLV9PLr1jJJM5a2P",
  "key19": "2AmpLfWib335TY41canhS4XXjk4y5YrYj83ENFdBaEFxzvXvtHTdztrhbAceXXuhHVwpaQvM1MiW5gJZG7JftdvT",
  "key20": "3XizerqsEmKGq8BZTdCBpxKr9uSwHMudMcn5TdarFRjcjtSDN5o4GqQzmtZu1EtLxs74WRDNdc4aVV1eQqjWDJj2",
  "key21": "5Kd1vKJcFmURvShxHTgDwzwQdb15wznTMeuzQtXQ1btgvJ6jv7rMDyNcTZBDQ6t7v3E9HL7RoonKnYBpZuVs1pWt",
  "key22": "5makxbFE4fydB6eg3mQxhFQz14CgFEAGQ4DvAMHEFYR6gDSn61p1vcWAkTBEzWXC75E7hb8Fhrzx64HHXEoEsTcW",
  "key23": "5vunBGPt9nX6z2YRauB1QCnHcyA1iVwu4sWAgBeGB5CuCNVQgN7v6x6qNsaaswtG4443ntHuCDBbXBTjZcqKPfdE",
  "key24": "4dtiHmoUeHC1oX6vtUPihAzsLDuXhRni5swZJiXbCVNWqh6SK3UvF7NxNxMHG1SC58vm86pfqY8tMvJ7WM8RHgTs",
  "key25": "5vxgd2jSyZz75qLiECgtwx3AP6dTwQyQLbFW7wVhZ9iAGdXuj6m3u3XZmnMoywqYMMf2ugweZk11ESB3dTwb4ZgJ",
  "key26": "W6m46GfbHXnPEA38yYbCqj7HgC9sHkgxGyXPGAWqA6mFfMi9v3Fez3r48EV7LeWuGsSkub4wrqGp3DTF37yFVGk",
  "key27": "oTc6QtS1Po5VcnhWKx4oQYBxm3AhND9E9XwvrFHq7bDNZWrqSZzysmXbbiGw3hEvTKHTSAzRCWyJDocJ2RvZwxt",
  "key28": "2iYjGYt3mUnbTwLCAHr2H9c5VoaiaP8anjGd4nQdd4xG4g6qmFAmh18yTCNREAQHgAYxn7APGhTzqopaz3e4sqtM",
  "key29": "57KsgYnTc363gpZEmLjQR89rKBr4eeTkzaDSgmq6HsjKUNSGGkiqWGr82YsB59z7HoDsM21mQPSe898Cw7s6VeTU",
  "key30": "5JtusE8JPQ8wAQUjT8q2vf1yKN3p5pu9stT7cx1nVUyfwqNV5GxQ5Z6y863uU8b8AUgs2Q3rgbkJYW2XQAtuK5XD",
  "key31": "5CztWAnGtRRH81xDgiucjjDZu6K7eQz1vCc7Yp5qKrGmBuGW2fmXaXGjo8MUX8159L8cjVZt4gcNvP9LEyPgjGxh",
  "key32": "3semN6KqrBkk9YMF2zLEoZqvkMQETT7K3XPrn7DSy5NmTWx9KWapVKk7mLhomeGveYkAj77z1m3YAVnsqKQzw7hw",
  "key33": "2kHCfiri1NR8iUWQCtXVoZcALs87ghtomzEHt5Nu4gm2jGGgNWyrWnPdRvcf6ZubsacQj5tMAEptt9hC2dYz1KTw",
  "key34": "4zo7rdFryFwTp9o1RigoiSPKJNJcq9H3FWcwWi9R5BD5Rw1Hv1ycePZ7MzamR5QXDr7882rsZ66oic8hX4tb3F6e",
  "key35": "2DktJdSCvkrkSizGYp9fGbYh5ird2qYhX8ha5TUhPSUhARymF98cL6gB6WwdT2PF4k3Gk61GcnaKTRZzaC7oJ8Ro"
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

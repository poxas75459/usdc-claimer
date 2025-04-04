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
    "24ts1xvQNZb8dwut2LrqPwUUxSf8cVZg1zrQN7Grq17yy5tgDLz7NkSpMCRRsKz7q9X4pAkp2to3NfDSfKv2ijNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5oUpTxyDCSWRUqjkLUYVuHH1zx67uvyVNAGUBztciqTHcHoXwDPkpiPbzp22fXpWW1bvW9suh8ioGszqiXMQ4Y",
  "key1": "3iXFr8KMJgnCvMDY63xwviWkA5J1gPm2TXGemzAyjtYk32HasijYQjDMRzzHAmpBAqjThdiUwjHYdCPa6YhatHJo",
  "key2": "1bCs9Q8LFgq9gFzh3dHnNm1z4UHD9NnoKj3f2QJrCvWBhkFdnSyrR99ughift4uEfyiv7wuZv5j4t1KXpJCqN1p",
  "key3": "249B7qny5A9ZYKmooYocGqQkvyinWNm6JCDpD254TKCf7Hbk7Mj6aeXFRaPyfhRxE5XVGhcSskvmx1YZjgvg3aFU",
  "key4": "2a89YU7ehBBCio5n8hSgyKYidf2WtrC9gzzf1Bsj1Q1YZN1H2YJ1HGXoCfbeKDcCNRpmn2WhotKSHcPikrSbgEZD",
  "key5": "36LMDL3upRTPWozbtE2pr3tGPGaoFP99d53hHtq6THVA3QHuBfjmpEkPFqnf1yvT5Fs3RYkGNGGWc32y7asQ2i4s",
  "key6": "31BpqNDzkenxTLiVfXS5eihfdAsbSqNknwHczh31fYJgaxKaP2yy1AyyKHYguWZBA8BAK5PNFVsG29uuoeA7bpbm",
  "key7": "66VXFjoX1KrY6534aPLEF34Fvxf6HQD4K5VZvVESomevHcgSD5wdtvP5amiQwKPsA1YCb2q33d5fQ6QFmvsUhaJi",
  "key8": "3GA2nFTxrLnfTA3Lg1tBTKTEE5Wyxa9mDJyEqPriKnanYZXXaWfqhD73oT81W96A5kGQWYeKQa4NHZH6KridwYZU",
  "key9": "4qMxKPhJbPJTud3WbzhTGX3ZpSF1LjU23dQ3jViJE7HsMTsGrUT773aKVivBeeRvsX7FT6cUCmm9g1R4JHUs8rbT",
  "key10": "mqXiGta1njyUTjfGrzA8jFh2oYXU112LQoEKrqrQxrwZaDy4PdBm1UQu1SCQXQAvmUUtMYrGXsrPbri6muvaE8J",
  "key11": "4dBQAgj1b1jRWA8JjNtz6jRr7KsGVbvLhHKeUcds36kvC9cPo9YLDW2CBjcPjrQJzc5JL347ahmj9yi75uj1qPA7",
  "key12": "4d3SqeAwmzi9fbUxp4JzLF9yzjDznrfH6mcCfa16P7cNmFxnjz5icmFFyjQVwv9k8qwRXhNWMVjfcwr7CHZGNz4w",
  "key13": "6QKtwCYMX1kNg6FHRVCUhVNCZYezL7ffMagDbeMt79KDnYz1ebwegTw8rJGg86zUeidrVq9fwSWUKjZftceSSZh",
  "key14": "3esRBqPzJ59RUMQEjP8g5wqbhXLFN9BtWK38ytSuxvivxxGMaMVumJfQxnaWTLNYZ5oduB74rWKo6A9zrx45QXQz",
  "key15": "egqy3PJWXhv8iUDLnN4GLmM6VvJH98bnbjeqX5UcMqDyBc3zmXNBFKn5Pn91hX6ymcvgPHkXmWbZ2CyKgamhfSd",
  "key16": "TGHjB4iagmxc6P1XsXQRwqYMHU47SpgkyHrT1JJBbeYqF852Sa8sf13gPqSYYV9vkXYv6XycoW1trsgKMWA6Nt5",
  "key17": "1K19bpxCDwmhif7cSNChoCq81JiKgSJb9EeRvXSFukf483dkhtPi6gkCrRzykCE6sDxweN28W9o21pXmYBvRGAQ",
  "key18": "2o7SoDH263yfWZcV1g6CwRoU6ikiUk985z8sBXtK1qnR7pHfkuwKsbBPV66exTCXV9NimNSZeK8HJnf8kVZcjat6",
  "key19": "4LueqRAczfEAu3PQ3qTK2VYwHyMrzje3nBpFKNLNhZu9mCTJqkpjZYuxZZPyqKchiu9z8gV5c4qctbSfuTY4rfNx",
  "key20": "akwJAro3ZrAe7WQxUEEG2PzHrZ8sys3s4pnJhgjBvknKowLyPrsTWJFamSaYqQV6RojJXHcLXUTPcJmGbh8VjiN",
  "key21": "5qgBJ7ahPzj9JekofSNrECqYCSyLN2paxMiukjg5yB3khUXMXN2MhTxBHYsMjGRMbVAUSFTH8tFRyPuUuLRML1U4",
  "key22": "641LqqfEYySaHeGCpJTpHxDYebzCHpFLycpqc6zi7LomysHXXu9Dgicex8LPv2HyyRGMPNE5sKdqSFozKiL4gj9P",
  "key23": "4VMx9dkM24PjqKNyLkTHoTeQViUMhxJnGTTUD1MHCTacrfSe1bRQTR9BXKowzuCjDGBgC2WQL1iYHt5JpUMnDtU7",
  "key24": "Mdk6pCcbB3HqEeyr9TdvDiqtpNTYAc4yemw6YtfDNu5TyGhG4uueVqRAzsHbHTmyv8jhQDExwFAzwbpGq41tHoq",
  "key25": "4eBbBvQD2nHAjQ5U9dWiHm7zB6gmKrD9AEueYRDEieG5NGsb9rHMYVc8eGAtU2Kimusc6qDsR5hB2WLCTcU4HxrX",
  "key26": "fNhdic6stHRGvGEtvgs24GpYPmEJoCGpCZ7vY7J1NotEiknTh6YWvrnCz8Ay4YmmmKRXDPbuocvp24uH3kbFkFC",
  "key27": "5t8KqPEdLUdHebfATHmWif8JnKtvYfp12yc5RC9VHSzGiKCewTEZpga5LzPCEVZkLttkAaFGvi1TkuViKJ7gWkzz",
  "key28": "ES82LpSp6kCFUaVyUa5XYXkbShnCpgRoNUaXq8GDSWaMimGDNmHXPLaPDofzajXjpKQHyLc8gNxkqifSQXg1x3r",
  "key29": "1g71NEHjdckx7K3LyqbTa5anCkcVHUwfb3buxJakGxnRUiiaCrkwya7cKLs9GVCWbxVuJNZqBDbTiKjqy8G7M5n",
  "key30": "2RgmzKmzASvt5VLHTRHCt3nJcjgAX2heTangvMtQCne86a3Gwfjf45d1M1G8C33bBvsVyRx1uioVou9UMtm9AJB5",
  "key31": "j26bKHu5svjkLFjp7ZHomF1p31QBKgfYHvibodb7B8QAmsYY2Fc3356HTwghwZzCx6hJvmGe6F7GSvbXpQNQ3RT",
  "key32": "FWa4xCgXaSB5QARfkdXD7LQHuGJnM69aPrqQJiLf9cZa1eoTKfnFhr174ENqM1v7H7qDzXaEc2ZngRn8ec42pJR",
  "key33": "4PMvBZZrVoo15Ac8dFtoeWdMJsuz3q9a8rJWgDcysCcTVPZFh2QvnwG33SxG8wGfE95smXYc8hq6UJhxtueGzsWt",
  "key34": "3MWqTUs7eAn1ioRXa5GKZHob2GhKSAcHgUTSPJt2SJ9PGECCKQGoHynXBGY7GokGWAv2u15ZVcAS7qMwHHVQ7KoW",
  "key35": "5DzEANPHQq3Hk6ECbB3pEMr9MNgze7yt5eY9tEqjimqj8k214RjpuVAjhb2vecDwxTKaZ5E7Q1KA14CptTQkVYSZ",
  "key36": "4Csp1W3erXWNwtnPQqgUMmMcJqBRBzcbaEVQTHJxfyRDcQNMYuSyas9TmdSXSvPjJtSSykpNXycvyKbPp2bCGGTs",
  "key37": "5X6rrLdm2qMAf7R5HntN5rarWYitB5ejw9PbG2wuLxJiz5wvpoYTdQT5p8KKU4BsWTGzkyhVn4L6KsexxsxYZ4s6",
  "key38": "2FE6bZT3hKktKg4wL8Zbozp9v96HTUUV9vmvU4qpdLRsAQmxSveatC4HFQ2Eeqh249sampsva6fAtJtaydbbpT61",
  "key39": "4vkh44Ncco6tVR97hsBzdzWaaUrkwsZ1mBvbLh7h69XgNKVmRYfq3HNzge9ah1TLULr3zdvtejsRG88zbi9hbBXf"
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

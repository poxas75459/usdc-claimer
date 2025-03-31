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
    "MHTiK1vgtxJ33UHRrHX4gxyw276zudMqeEwVgv49cAtqB2PiUvkYBV5SA1oi6qJijL7pVcV6XWMoW8AhTpJtUBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TghF3RpfPx2HoLnssrHga1RhHo9JwLW1xnuWriPqaSp9vP2YZySMwcSdCW42qrVfZ9kdUN7WxdReGuQBL6ciuRk",
  "key1": "5eoTUeJNMa7LSzWczLW2BUHuCNSjCEvhAPhNtWVa9f6Gvz4rEXfnWay48SgGFKz5TRZhCgitwpyhcgtPgBjiN7Zu",
  "key2": "3yDe81fszPGKmY8wv7v8575JN7UeaojfsDRZikH5WXxDYMkZHnApFLShL5kDviDSMC7zWzAa2GnFw5kR1eeyfDxT",
  "key3": "rZbeo5xrkBW8GDdgABR5oEfPqgiuTPmKeNHKs2YfVAZr8kQd3j2DFkZ3PJwpaf7H4vrQkMPJhpSG9LvC1Znko7a",
  "key4": "7nSuGUuZNUZzXwgVSwwvdf5skKtPayffAn5rgHBsgnFkqPQndjgoNnBdYtSZmwLNEcRtBsJ1t6zztJdSdrghBpC",
  "key5": "3opX45c2evVYBHTbJ7TnY9GH365DYkx4yjBAEFdG22HyapBV19MZfNcE4v2E7jjz2Gt9ZMgSWCxmXCPhJ3gHQgUp",
  "key6": "46nvHw2AvYiVtYb5WCw5pwahHaha7Dn2NXUeeN3mhuUAQ5VMfGf1TggJpMVXuXPG1H1tJvdJmVJH3dw3Qs9Qdgrk",
  "key7": "3weLVerMQjN6H13MqYa2fB5tLDKnPLduRvKpxsmuX9ybQjiBbiRCNzWW2gr1sMzguftpGWksU9UFRvLYw4EJj4MR",
  "key8": "2CqZpfzeDZXESs3oR82dNQvFsVoiSBRSMvjVfL3FyDHR1kGjP9LLgtHC31vsCsoqPYAPz4RFVkD3aeNwSLewRjd4",
  "key9": "4BaDZ9GaYi9C1V9Z59tSxKvLzEJMGuq9JBVcKLYyp8K8qZ6knejNKYGjjwaoMPCuSPUVsxmjhH5XkEA9M3nBu35B",
  "key10": "5u2HbwMRye45vy38UANKRZGeGQwYurKSCP3YGCFrYw1SxEx9u8TYDnuRo33oke2UBkf1Xcrue7DBtb83uvnxyekg",
  "key11": "2Ee6fVSDUMC9v2UHsmjBUHJTVpHvJSd6AGHcfHxotknJYUDHVQRAezJCngDVWN4KkC5eQrqA8fYxAwPcSThmuWvP",
  "key12": "7V3zG5sMpqX8No8cyBTJZh3sbx6LfZZaH2fwrtXtcrdPjDPzaJkzsuqAE9Zb1JvSfAGcJBhWLSoDG5HaF6AjKyk",
  "key13": "Byf5wMvWRwkAfot13YhZ5z8HUmfzCtUwDNUM9CRsrK5vBgePr39eSoEyYZLy47Pu8mtgC6ZtHxsUjZbmhSvUEyN",
  "key14": "2gXybh6MtvK6hp9iEcdrLYhAC2AHTKw4JGRPj86s7szGRqADbtrbo9pQjuJmadC5LbSSsqW1FCgtYTxkWYzzggFR",
  "key15": "3dHE7C9HY84FrBZbqTe3DNffU2b3NTa9uxejyVmXCmkHtmw4VrgRPtKmGsaCBDTfLGjrtpoxAgVrP9XjXufFjBtK",
  "key16": "62yr6dePTL6RwQ843AjoWRpXKhcEbjyowwgfdxDSd6KmD34rWvJEEmS86ybhu1bKKLw59XFAgjyDwJuPScopXT4R",
  "key17": "33q6vtzQeJcEHGd2tj9nEucSCJ3iCYzDw67UTaSt7bLrrvKkpKvWTzcmU2M8dtZKpdnJvKTv4Dx9LgFYyhUUj2Zk",
  "key18": "GvtLbosCo5pABEu7kFKkmDhXYGXUkucz9GXEjhKaLeiqZWuUZDeXLVhgDwzpcxaxeB57LpMNfYPtJuuMD5CmrF4",
  "key19": "4CyTnsR6Pnrzfn5afBmTzoBkGvN8XuPTPSuYNnvFzP4Xp3QMqtkVaU2sfrUARRqYNPihA4tQcHSZSRQY3u1wmBGb",
  "key20": "2jXz1MzJ8JYECTAcZkazjqWg9V132N6peu6gCqpAUChvbi42aQexunAAfepJs7B9p4RfknCR9X6mxa2ENiHBeHmx",
  "key21": "3XP8GN9FXoYQJYydVhUsHjHDRry19X3sSxwEbM7URDSxQc6AZgELJMpDGoxjNXYS9TYRQjSy6GK3eX9kJPHBsjLP",
  "key22": "LCNhogd7pWKJmzEcWjbAqSMkGHcJc2ikMW9tAsrjCyHKyw6hQNcYsXS8DvJFSgSDxMpu5m9WJZEG4DyjE9Dp7ei",
  "key23": "4QWsEf1iqNhd2Z6aqRLKGwpdCkh68aG1NuYtNUaRpGMriWdWBm2iMsZfBxUTFH6JzcQHqVjhcnzzetfQ3Eqy5kgK",
  "key24": "MHihrEWh7FG6CKUPh7d7zXb1A7RboDhSs1cu23kMTESbw4EDXRideQ7HemmcsAmyDUTZ6FcjZeH4wf8aCeXkWo8",
  "key25": "2UgS3bjbvwEvJqXuGSgijF8Ps1WuiyLgrCHhozpPEBHewHdQDVgCJ6GNGRWfTGGpZYMURVVg5kjgr3r9tV1o3Xut",
  "key26": "x8iPAPNkgFzBuPi2EYobau3cXG7sKXcqcBhU7fQR5QBG57vov8gmbEhcrdmvD8ovjadH4kA4gzPHZEjhxu9KdMB",
  "key27": "52kjrdZH59KDpjwD43ubJ6EW4zQrXtjkhdH6XqM2RxKMhBTesiDCxgJwJcWm8Qo8r1orTgYzBog7CbQTjhT6dAN2",
  "key28": "ozTu4X1h1tn6RCDQtsEbxhhFxe4td6LkHyP6jwYawyGJLJdMCEbCiAZ5ZzBruvkQmQnVLaxRq9GLYvNnPccFzwK",
  "key29": "5Ujb3HyjMPG6TNwHr6bbMexSnvruGbeisYSmeynEMafM37hqaAcNTMG6YZppS8SYKUZUW52RJZNTtZZBgD5Vu25E",
  "key30": "35Et5MzYv2pMLd2mTyBitrd4fuQFMC4fzYPKwBmxzfRV57KRtW29pB3suw3KPiX7swcH3AqxvMnvVWQweP63PbAC",
  "key31": "48jRYvW6396HnbtQWNi7CD4apz9MxnqiLKZAzKopqgrHJm9Ek6AHbUvHoinUWbynfVVrKvHqJyh2G2r3Sobc8z5N",
  "key32": "3AN1xy4Q5Fn8zve6u9z1Pnf9PXHVXjZZuMkMtJP1jP24gf6wsbLPYo3UcZtGXghquvDrhrkw6TwQ6MnAysmr35K",
  "key33": "1hTVT8bWbs6fSTz1UpQgo9SSAwrYUhsacMvFov2SpbCboZLBkiyCMX71qkfVBvpSQ37ZvP8Dp2iUbu8CmssRJn2",
  "key34": "2pKSwQR7oTdZxjXpJ1TG8pd544fbxEncK62DCYJLbVKExiydwhHWaDrJB9t4mFoZG4CvcwTbai5PhgK5ofN2D5WG",
  "key35": "2vfuic5Y1k2UnTKEFK3huKms4RQkSEi27SPTtg9kyKrvJRqKVSXv7sNNh6L7bVQc2Ex4Et7UWdSVnuvQpQPHfyhG",
  "key36": "67AsKgBtUhWQmVDBdgGvkGJA21RZT1ckEYTpXuZiFcHqTK8MAqyWHZFH2beherRaaSiUmHpYxPoX5My4xrimdQQP",
  "key37": "2NmERPBb9n7Y2uz51hKUfrCidsybwetNyTWmA2dG1ZQ8Hc6H7ACVo2KhwCoWpAB5ygZtioyKkiJ46ebbaPYuEfa5",
  "key38": "4dN8q4mnSn7APqk1dWqxnieQQ8qreaw5C75X9Fe6TfqpYfxUd9nCGBeHCsY2GaFUMtivC83DrGU2tPJF2y5VrWbg",
  "key39": "5KZ13eLtU5h9LameWrNggr174R7Muy4GELEy9cMvwDkun4HFn2afMcRjj9hCcToQP8UQD3ModiBzDRdrqr3vVANo",
  "key40": "2mu86ixrET8H1qzs567eXe1TRG7fje6AKZZqhkHsFApUyRcSiT743iLBGwQXXSkUooyHoZjCpoibGYuWET2r6Tu4"
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

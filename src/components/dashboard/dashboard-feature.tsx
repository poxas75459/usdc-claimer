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
    "4i1AHiChq7W1MTVnEdubjDf6Uwcb44u9foeFdY33vpynzNXLvkpcbkdkEvXNLwhKZeDp7LckokyNKwud1xVUc3QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnto465mpQYc2qUGHgp6Q2MNaDTpAkvAAGtaEiojrfbJu1qJivQwUyqTBfuohdspnTTWgLwmvPdsMfSWU9geEMH",
  "key1": "2bELnFQLZpLpyMhF7ooX4YouitePV9k3tq6benbYXeEujEPhcWaVeKHA4Kmb6EsMiWF4vjH8GVKgPk3K5aNVmCfq",
  "key2": "3JfFD2MoBNvJS4YQw8GCk9jKkd27Xd8RrMB6GFkYiUpetxMK7EX1d6KqQM9D3wTBm86CaBJBsJzJH76h7qNs8qsW",
  "key3": "3Y8QnJ3prPgaBzngfAQLf6GKQt8d7So2iVzzoijjkxcjBCF5DkAmWuEP8eiwRfjRNZQMWXANX648L8pYntrAPacp",
  "key4": "2wBbCdv8M1d26CfuMTCEW1WUFJK9PMvhfhnZaCjCGbCkzMN4a6LPHPFBJ3TComamV3eD9vMAX3tX7cucVdGYTE78",
  "key5": "311bWA9qEdaYf8DDaRx5fiyNHBcAK8c9XMyiFDbQdmqifMfsgeS3GJA3CTuAJriJbtg5Ub6UxnUqUEfjcexMCMYB",
  "key6": "2sRb3Hy5Eirp1vNDdzu8YASUF7cR3xmCsmmJCC6NStJHHp6BsqQwZ8PSepoBHFcnaS4mwRGHeJSBVhuE5n5rq3y8",
  "key7": "3DeceeLagNdz7VzZuSGaMkFVQjerr8vmLigqDaHXgN78GMMTdVUkkdxSMdQSHkfSm6gG7WpyjMczEwuddyW48vLJ",
  "key8": "65PGxF318h4q3qiYVgAZoLZ3WSNgqsGQFWPhdsKbB4QvvPRvvn3NhT89uBn7moLbYBHdGuHZnYz2qEKcYVTGE6TP",
  "key9": "4bAYXUivXoFCYuZ3cAQQ1vZHMx241jh1xqLBjSJLA6WLJWFJFXx8gWxc2DskSPbXHtgqw2oAmhx3ynrnGiAiiN3M",
  "key10": "4jCMayTWrEkfrkNHEZ2s2gfk3mJfvJ2opR86FE4epbtwo2C7ypZFkhnF3329Fqo8CpMcNwyaD9MDnWofYyCanRdB",
  "key11": "5T5jP7A77NgGWStbLRSk8eXX7xQphwkVUpg5PYkup3dH3pNo7auDCBwMqdckvotQ6jnXRXZ1NAHCtFFjDvujdKJ1",
  "key12": "3Z9yS6P3f12RUiAttbGQnXvYh1Y5ifzAZn91GECWraEepbpyGUrvheCF2zgoT1wpDDaSBXgE2R6fcRf2bYZw5Tgs",
  "key13": "AwMhkKYS3tLtEDCvWdCAg6raiCLoHGisVkoyF3qLTGQpqx9vSPB6jY9QWdJpVzTh8U3trDcYUjjtnEgj1QVf2UJ",
  "key14": "2S7KuwHbTqqTJr3t9dPiZEtnc1SorKbuUPE7Ni7SEa6zAvQoY4jVPPcKyXGAk6kXQHBr1X2iZHvVMNz6mKN6y3bi",
  "key15": "64QCyrT3Xi61dbNSKtf2ENTqFdumxpSgKkXoQt42bDnvMGzmedvgxqfCpABLtoepiMRTABZurVYEu2wdju24zF67",
  "key16": "4XLQ11GVXWxWjbZ9WsLxLZHTMZUX82cjVWEZgpxAs1NSP8YReH6JSK4iJNUGdzhMxqRMkJBNMj992Jh41cAqQcn4",
  "key17": "3K21ZtMb8fMLW3CC4qHiLH7dWcSAK3mJ2JhLFHepZ2xV1dKeCRdexYDog85eZk5vtTaPQ21Wez9EUZP7nnAXU9o6",
  "key18": "4emXmu4kymjZ7ms8jt4JtGQigzAjp6EU8zj2oyRuswm7SUgmq15qN6yhJCUv935jV9zDtVk483k1ucT9M6JhJdVD",
  "key19": "4y7E1axSBjoFPurRXDvUeK58tsMfGnAXsApJ7SEFxhmTiiAEuHo4f2gokVj9xAtkMHaoRWryzYxAhbLWYoZE1Yki",
  "key20": "5Gai6G5DrY8jJHhXqrjgWppiC8KzrkfL3KqhVt9cFt1ft77kPKN2WyJgF5J6r4WpVMnbhpcozHkjWzLXRPKEhuyc",
  "key21": "3VVEjGvBKedKbVZNm66gTtbiS6taueg1K4i1NEpSEdyP8sVMx5qCYS7YpvViB4KjYRDUWufFgXQXwR4LNXJ5p1wF",
  "key22": "2iFazqTUdWJew41bMbybifRvHj1ccXsMWCTd7q8Xk8Jw8UAdCUGJKiyZbHm8gkbmH5R2yFhgMp3JxDK3V7zHyUrE",
  "key23": "3WCnW896hfmfz4HrnjGosAejKLapWBVWFMeEjWmKMHu8Y1JPRtTGDBP89cswv9HcgsunZjTmxckdsLYNnzENe5Nu",
  "key24": "AHKSKio67Z2GTCRf8jMoCqLmbw3Mh3zaGEuJC1KjXewDy63UKz8cMwMXKUWGvJ1w7yjXro69o4jZx2unPRvF9aS",
  "key25": "2KDvsayL5CAJCSn3m1yFEQcpUC81rri3TXbcZZYHc76fqDGy2AGTWNTza2Uy1Y58xJKwrLQjBj6HT7prehaksKrH",
  "key26": "3DCv4USWacYw7fra2idPEqKaLsu8i7mZ3J7Q9asy6YjsrGatR7gNiMLT3vocszBd8zJ6Vfx7W6QEurLGuYPUSauR",
  "key27": "4x6McFof6U4AgAoCZN9rMi3SzTVB5hBr2ufpRs9KtX1o5dQrW6RCTLowT41k2Gh5jcqKKRc7kkcuXdZmmtgQ6h2C",
  "key28": "37Lu9mve6vPk4eVBe322vTzbWtA6m4WSvjag8rt411mMyDCZ2PAbCWEjsztmATehj97GDFzejcVJJNKyxRD61c8a",
  "key29": "3GY4b8xzaWpLAtN73bcSajY3RSFMrbPwUSGV6V8Do6PHhwQt6MekVTXZUZ4yfvHcfR5r5p4QYJs6WxeJw4Na122h",
  "key30": "oiXv3SWw45zFfh7kojdrWVQGVxAFzPiBEU92F5qcajRB6AZ8SwKWx1qCmkHqqvdmEELmtHcFoopNukE88QyanCs",
  "key31": "4Bk8Zpj5bmuDwBqcoXFbPQLXsr6uE1ZcTGrqE7LpXMYVV4eGBSpiGt6ZzGXG1g7j9rDLwVaMP3qGSJtJa8xK5fhy",
  "key32": "2UytMJn2SgJR2q6NpUTpt5wc22Z8LDeM2LgLWWn83vyDhe68ACpUQriYsnckJMLHgscuStaN1wCcDrriTzUvErHu",
  "key33": "3agqkUDanqqkXBUttfhEgAcV6wA3NhkaczdSf6Ev6SyZtHbgEXv1bynRTKSyPSgjm3Z8encc4nUQ48ZE17TDMgdK",
  "key34": "4vKkHEbTiPhdUxgxn9mws3zNh2ceKdGTU2E3Vr8ZETJ57n8tjrbxv8MT1j2tFEPztnqzhddMBhtwBVL5ThdxVY1e",
  "key35": "32KGJt2P6WSHtNfWAryBNLupq1BBPQw5yhxM5Eq57VrY4H9hJEZBm6wYc4KKt1RvjCxiNgsBJDxjnwMfMREeWkb2",
  "key36": "ZqcFaUYbyssnWFAJH9tLUPC27AAXbjw6cKecx62WaT6JbnRkpXQrq5wQoVEtWrxcb4xDKrBFMgQXMV49UQWULTu",
  "key37": "4MR7wv7hYv9EbiJgg67WTQJHp9Mr589SwTYjL64BtpHTLzWRnkGUMMoANQTTRC7Acmb4T9QHeeEyczicSvDN9oJg",
  "key38": "376iKd7hbT7KMU1UNVfE54xhKjq95CeWMsiKnMLaZkWvUpbwQY1VHyGPwigJd7ytyPngSfTsiBVUGNzLAwrsc1hz",
  "key39": "2onAAvewhg9691BpcRCfQkdYmb6YQZ4cRKnNUuiXQj11q8hfdnMtqd3KmHyTWBnsSJ75tJ2WJvUWyVkG7FxLMZ3a",
  "key40": "WeNbxfxsDhUVZ1jTG6FUHKfEp2k2Y1Mza5ZQ6nGtV9piftQEZtps8cDvrjsaeNpZ7razvsrmvMxs6Bz1cqCFzzX",
  "key41": "4nXe2S9zfELPLPhCqVKzbTemhpEhq4sTYAEz2G5SaXHik5dPpZTqoJmMkcXsoWNTdX6PG3RLRvKfRqS3DSU8Ztvx",
  "key42": "AExnJ5W3tDCrE7w8RneeTuARSpENNB25tPH3kQhUCQb85bWtQM15KvSYocaESatVpnADT7CjT5tuNKeV7d1NPJs",
  "key43": "5QwBBWXGsgxVgPWfWXsJFLXsBMcWMaCf3Pd1XvdnxWy1TWCzhCJX3EB3EQVJ7VZiujP4p5HWVUVt3R9khyo6vHRD",
  "key44": "2JKYsmBh1V8x8u47UUjGzmcHvSyu5WYwjhj6i4j4fF9NhoaVQwT3cTVeD3Et6WZ78XQzqM7w2GcE8QxrRQbSzNCM"
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

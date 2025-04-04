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
    "4CFMZ6LvveTgncpsYUMKUZWatBSsTBN4WHyVZ2HM9tpH3ov7p7iK4P1Bs78XEgsPj9JghtdyHMCRxDouhnBffVUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iUtqZz2xafasntwjRAZQgxSeDyGc3V4q5TihKfbMezGwxXsDP2moZVjhiAu1TCSsYpj6UHtTJiSr6XFCS6V7c1A",
  "key1": "gR4sGVB5FEcKXXBTgCvvAMk2D91tnbQts8gGtxjh1yP61j8Cn7JSiYcJJnxM7aqeeCbDm5CPK8o59fZ59NqeujF",
  "key2": "2FzNQUvAtzbVWnmqbc34AfYUVrgbYckk1vgEGpzTpGGc6bu7WueTL3y2AkXXtaeQdAApW6qpUGsgXx9ACkYAwBUh",
  "key3": "2TnYupLpGnvL6gdGoxcwxNiPbqafvNh9VsgdKmX9CNgWNqtfUe6LrB6zMf9VFWoSyCWoNWHBu1C3yX5WqpgnCXbW",
  "key4": "2M6pRyz2ydcpPAeQ4zeMZBXBSdEaRg4oNbjT5b7DgyBoNqkhvkzniF5cBzz1DCvxBmVLCiim7BT8YgSj5ovN7HgZ",
  "key5": "XmZhMEABJvuAjutHpmti53Xwh4xHx6GQg4yLa63qKWueYTwwuEUWp8nLWfax4cXz65yneetM2qWVPnFNK5Mhx3o",
  "key6": "24U1hKnhv2QaQJRqUs8CxqDVBueKnr2uWiTULRo37yhVA3eTsRe6mV7pf19tZxgMTxLpJ76WE3jC8Cfve2rR7ANY",
  "key7": "2KEhQXpiWBEnYrejSQTc1JrARY5261H9Fefp4YZKDHo5paFcVYoN2dqE8wokZVpXCD9zXQLKTjD4mdBkEVXbTwPX",
  "key8": "5VezL6YmCyXGtPZPvQYsdCe3y7ne1ZgWFe8f6GLuVkixn9m5uDd36bzT4sMNjGzVi7HB2aNe7ytCBGyy3zUakJ4M",
  "key9": "5vkBbBJL9h53aHv66fo76x7W1pgpMzTMopixsxnVgPkLk1EFoGqEQ97Ak988KQEsDs94zkaP4hJ7pBu5xJpL166D",
  "key10": "5MEV8yMF5ivcxK1Lvrz49r5Sp6xC2BH7bp1bH2Feh8kJFEYxijzXguzGXqfxfuy5JT1qS1812U9r4quYzoDWzDkk",
  "key11": "2yiDbowq9G7RcsDgR3VbwvfPTSoToLF8DRk8M9kQXR7r6pUy8rUBBAW6FsLqUti1TJV7LDu921y5zqD31ftszzsm",
  "key12": "xksWZadoQaziw5o9MmUBSJAhHmW567UuqwZxfiyQBo6uoHQ1cZ2MpquFAbBAD3yFewDJFtfF6Y7aFhThZCbMAup",
  "key13": "31pHWURdgEBQU4zYqU9MQSCwYH8uU8fPJ6NdhAZoGFs6RfMxfSREfuDbmNj9X4G9BjAizmq3DgpcdUyrVeQcQsFJ",
  "key14": "5mJcKYW3CK8gPzUXyzYp8m4yL9H6hd26gCiaDevguVikmSpZrbQx2963ftBnqRsETZLSn5gPgMGPMwG2aqJzFuJe",
  "key15": "sAjgVYAxktgdPrZazRUfugjJGX8C8sCZniDkwdBuHQQBWj3XfdQpvcV2fxpdWc7qPwyaVdiBeLr9NEu8MepF3ED",
  "key16": "59Ahcikikn61iR3F7dGcdXhE2NX4BKXQSubr9jbnhojuVZxr5p4NFpXPTKxkpe9E59LdfWobXb3wME9WxbpDyc39",
  "key17": "3JFDBn5h2XWhT2uNxW97AysqtGB211rE2rVax5KpFoKb3JzRbi3ZaWhaY8MTrPhaAV7RdreBnUoWuVygLAUNFCNV",
  "key18": "5w8FjoJJyqrv1EoVFABZ8WvXsjBYxaVpfC6FZy8xU2SyBQJBkJbRRx1rWsyvk6jRJFyG7K9BbU9tYLL9rmYPckYZ",
  "key19": "3bP4KikLa15rryXFrtTT2x2CEDeGkS9HBzFgmr7p2RgusKw811ABfCXzGwhV8LtXN9naMATXURUchJubQ2J6z7S4",
  "key20": "5pkbf7v5UfdbWN7NwZDMaywxMSeAzGmVcvss9vBZfJ9TxKZGAS8XUYZr2E9sH3XnYhTrpshiLRL4kfZsRJs6sfrT",
  "key21": "2fja7me5vCatBVs3YFGFm1eg47Gf5fsi66SQVPzfGC3LxmUwr9BpKU7nHLMp4CojU4JazpQtgsZN65LpnYipZrqb",
  "key22": "51tYi32VFkGiTefNn3jP5cnLYZ2SZ2Akc69QgVE6zoVwg9Q72T18WQG5L8XvWr36xzS8RfKQYLCeKG9rMQufxAix",
  "key23": "2GwaHxBcM3fMLGNuMCGvvRFLZXjV4kzGmFYXA8qySEgAmY1ervYUjBBDYE5zgHij85RJi12pxJquEphh5FKELwZ9",
  "key24": "62pJ1FatuYH9Wqp89Sm6gh4B72wauxadaUKe8MoxnSbRXxJPjnCf7mog3jMw2xji7LXdBZx93VKoCkxsLirmN89e",
  "key25": "eCcQ19DpfFfDTC14ZFsa6ovBhfNBEsdapnxMLkZgLRncoBQfn3KPsxJUyUjTesVsNpY3sDEQdcykwWFCT3gUfxt"
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

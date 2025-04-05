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
    "5jw3cSp4v89MZnUeaDttNxBkewfXJz2MP3u1PSJqqX9C6eiPnWvwW3d73DcfPpXFm1JjHv8J8Y2rSHciQBLwPB1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SyYts9JH2NW4uz4QFe7J62ZmrRzPMqrQ3MomaJN8uDD6qM9tXphu9xnUWhxFwNS1CjWXFn2VVfdcD4j11MSZA7Q",
  "key1": "myy8dzxhwTLnBMHP9qPvRtXiR1LdVETytz3Jqd5qVYKjohrtxtLgFNZUgrS2xRF5hySGbxwMQiJqCF7CC8YFWEg",
  "key2": "Hwa56FYMy9EiYnGNaBbWcCUeHhfqvoQkftUdd5Z15bWqPdFCdzAjDY31Meo88R7Pcq5rahxRu8Y2vbYASHBoxAV",
  "key3": "3BnDd4cvoeazS4yL22m7hQuF6184enUbes9LtNVng5KVGeo6T3GpGjQUbSDmbZfDJ4PWenpVt5xkxu5auA1MXFeS",
  "key4": "4MJgwEJ1hks1X2oFqmxUTRNVYueMy2ZJMZvuHbeHE8LvYaAUercXGfBMV4XprbnruBgYsgt3nWRjg4xspiuCxMw8",
  "key5": "3CypLav3aTUZszPr61jF27Edz2EPsBma9F6jJAqRMAtX57THXmjAAW1LSPEa7LYoYpgpnapy8E57sxYoH8Ks8L9o",
  "key6": "Ej7MAxVRntUg5i2DCtkPaXb7FG6PS23DZHQuh8tAu6EtwshNkDU2xAwjJAruVWSj7Gxdx7ecqe7vpidDDZ6GQEe",
  "key7": "W1rFfx99q7NQh9BP66LwHp5KAESK5QTRQ9mWzLp4QofVcWNx2VKENea29JPxa1XedPpQ9xeRyRHdBcb7VsGBsJm",
  "key8": "5vJCeT2w9D4KosDBZCY5o9yghE6UXgdQG2kUJGktVBEtYUibjqM2PtgHJnT9NZKUqYkdUTeNpQgcusbYC7YAjeMW",
  "key9": "5zJDpQWKCBi8KCr9UAgihGa5KeH4oNNPDZrWaWfB9DypuCmMbyV1FTXAAS4PxfpgDRvrvRhWmJYspQyTjDmK9HeX",
  "key10": "3ff3So6ejTgBf5i8YaGDWgfHWfrRQJArGGLJ4ADbJas9ssRfrjfh1YjydHYwsmNuAXMn6dVYvvyrNbDmesRk5gWg",
  "key11": "5TK22Vk9SBq6ZQLqUy1kg5xEWb7dJ6ZA4me13UYQTt6RAbpb98fDVvKgtPhhdnQ4BoSFopAXqwspQPvzWWH7kWor",
  "key12": "4wn1zyiswAGcqMQG6VvqwTQ8hiG7tcwK36aDqUb8C93YPAtcbbL5J9KgKmmjxqJyd6qyHS9M15qw2uzWUd9kDtip",
  "key13": "63tzckuTEvApgndw8euUGRY82D4kfdEyqt523ikAq8CZJLzRBFzRPmLXdxAT7TJMzDZokGobqp7HD25iyQWcd94t",
  "key14": "3At5JcD5nQpwUk3wcH7Dc3hN231F8BHUetxtamNT2QGKSfLtXbwZbJA6qanrBPTmPi55LwFAtP1nKAZaKLcYqZGF",
  "key15": "2YQHqUZkemNffpvq8TAGoaFtQj7JbHA8WeouEdfptmf5wpeBbosotnRmx4pdVxYQoKg2zLFQXgqBCGWhwK9hcurj",
  "key16": "2sEvJwLguCAiwyc8reddhPcLGRudDoJiaaUe1cw43FjSSZW7Nr6Uu2zLHyyrHnpCfpyUYc6kLZkjsSZWB9n9AtaC",
  "key17": "4JUbrjNQvg7nzNQu1oaBeFpzQjfX7pSM3Uj9k6WkocvqyBJEm5Z8d2b3obzpUsYDXCeFt3hU4n6RnwCieGCY4Swc",
  "key18": "2ggUN8hvpH1t13e9zsQ1Tm3m3rEHWHo5EsdrW6irtE69UFYuskkEMQhV9Wuhqcpp3jFrxB7PyDjuBbqHydKq1YsY",
  "key19": "bZdwQ2PUCRByWfkRPSAN1bC2B2uDF8EewaiPfLu3NZXtaoGr6kpwzAZdbfMkZmSa43iWAWGqstQxphKL3VaEq7d",
  "key20": "4tCv6hFnoXDWEFEsEvreRHbnwqLz6HyNJtooaCnG2cLx8BAxxsKxTuSnL8E8jkUMCyRimYGmC8aDUHvpcwE2YUPR",
  "key21": "42d8n5q1nZzxFQwHEUUhcd39iKL3MxtZ6sMsNnmydypZdNCMPTfT8KeMENk19NpUPy4NHYo1iNFanucBCRYYxDjP",
  "key22": "48tEtH3CHT425wdxrq69AXkXuXqdWieDz3kPAaSPU3mE3GEzdSHP6ikNAsMd2rff9NbB655JVH6isDFWANgtMj7s",
  "key23": "3GUHLFmBywP1bnLvDiEdDf71taWqVv1jVa2McKmrVxn46AMKJaHJXgtDTrqgmp3DVhQXTnw7ynSnuWGxXgkCWXkz",
  "key24": "b8873QrVrK2expPafenAr8rA7sibTUUBB2ssk2dDgz73uKn5RoibCNar5onRqMDqKUAGmqt8hUPyjKJ6Yb7y9y6",
  "key25": "2maytXCNonHYqiGSLyHK4bD7E8P1WjRS3dcnmiG8vvFMG4mWRrw6CEG8r9tcDmegZNc2jSaG1vrpPXaRPrbR4mbb",
  "key26": "26gA37dpiMfi9U57H8aQtChQ4ibT5ZZ3wcE3wxNdL45oaR6WnWv9SqiJU1QnTAQ3vsF3S43gWCgDAb3CmZE9VTUH"
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

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
    "64xbTEnS9iUHRwemuwoewz35Xm9M9Xg7SveNrZ27AdCknZB5FrH2RJzX6tQsZYYKMp8LCPapbhekYXKY8pZmzCjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bD6CMekHmDpBNnrFD1abyfheytukTSDfnCieSQr6NXq7mnN9AuiphuLUyhw7ggRHkDHZD8yAFQMBVMJtfRyhEJ",
  "key1": "K36Hj9ysqbcHjW844nXzGv9okoL7LUmknG2JGQrQeuHTjejzSZy9tHZVvqy7JF7m2UZNe1tfy87ng6n9BRhB1GA",
  "key2": "55As9DG4DeBbiv87x5YXnLsRiiShkjKxStQrAqTSpTHKTr6hrp36yXZw32YpApjuNNLszxTUfPXkejiaqnULefZ3",
  "key3": "XtFCedgbK6Kvfa6oss15CbsbXsFdpdG6eJ3BNUB5FdyMCD3pXpAEcsFHVMtLjimt3dDHmG3jw1YiSxPcKvYkkdx",
  "key4": "4kBcr4WvAfnB8djNnGM9rG5TUtfZDVjTYTURjzV7A9MrLQyjTvGMxGHJPzviibdVw5tB7wLQFhbzQ45eAiuieakL",
  "key5": "axjNygfjPWU4mXsXkHTMWdCWBVYj2pAP6hUuhR5gv595ozb7Y5yykpAQ7RyUiPZoiupVXS1yfHKjQn3zjmcAzCX",
  "key6": "3zfe8u8PS4RNPrqFohE2LFS9vQDhLyek1aZsAiCXdRhAPRecHdSbutqE8AQw8fLBc6Q7TwgmSu7aibyrqz2STNer",
  "key7": "1X4xair793TrLNsBqHj7422ZLTDG5VCMBRTPoRnca1t5wD5TXeWH3kZCMopKyjC1aps5yX8Ebw3e8XtfXfsax3x",
  "key8": "24WvdgVbnZWuVDxyJT4aGB5w2Gfe4HCj4quH2F2Gr5qyzGsaLgb2vPRQR2MEuTUyFtVEcPgCJmLqcAZJaLm6LP5Z",
  "key9": "44YNuU2C2o8B3uGxUYZWHBZBHa4KSK4RaaRUsMFUarRywQjUMXY7axANzTa5UFU2Pr5Fjom5tYv3JTw9DaLd8Lik",
  "key10": "R6ucJjSGBYuRTdb35kv9Du5R1vkdCY2FbqoKNyW7MJiRbmctoMZFyJffJFEsD4BvmU98NpUY7GyxuTAv3aWi6Nt",
  "key11": "NK2AL3UijJoiKszRV6wMh7eu9NBp5dbVr5bQARG6GRRBZs5ER9VQBcZgvsjnsB4MeMoQk5jfmG1uzE9CyA2bzdF",
  "key12": "27mnTZcr56zFE9ySMQGjVn2AMYzreg8nY8VEuKAMV8Sfcedqwv8oJr9EJwCAtGdArc4L7dBj46ZqXw2phkBS8vLT",
  "key13": "62ykRSeKmVufbr2scbjvkHyXY8aaWGqqVdgcqsfL75na2Z4WQPV12mT2cPbBH4a412VZyovekXAaV9XpZPFfkxwD",
  "key14": "62jbYh2pxdPp41VNsJeszwYNJYkb7qi6UUYzNqECmTKsL2ratpxtCnc7rHfoQRQCLqMy5aPYLQsWzDNcCFx493uT",
  "key15": "2394VKYB1WSQWaf7L3auJHDaFkXhDrS3HQfjWpt4aFwen64MyfGPEimfB1wsKaFNdLPKWyag8pfcmrAnqL4kW97y",
  "key16": "itdiqB9hsSmzht7nW83sk8m141AprHpKJ9ph1tJxkaLeoC1a5zXLURdH9wt6JaC2Ug5WPxy8psfgohri3JSevC2",
  "key17": "3wJkAbQD8eMjNWY9himc5R1ib9efKVxAnSX171WYs74S8zo8tbEi7kjHK45JMTBY4bhYpo9Z994LqwgMmtY4fNsL",
  "key18": "4meuU9AbB5MqzyBuHJ4iWf5UsFJ2dKj2HvZhbxSmW2KyJFU8yMD1g7qLgsTf8GGFn4KwhKrgtr68t7Buw4BmzE3a",
  "key19": "4EvDVQQWPytSwTopu24DY1Zuvwu3cLnQ4vahEra5J927FamSCuWdibCDvaRnMg12mfiwcKwiRVLVdRXUPsTNay3i",
  "key20": "5DJZTR5gmgUuBA3yVtpm3oqz3LvF2CsqRbaLBQKz8ALR1P82EbLQBwPbtXNski9R8muTmGaPztELFWmfpxaTwQHh",
  "key21": "5YdydyBK47fBNUZDV8wTKd3PnQhjNAiH1UdFTVXSrTVa4qBjQ1MXvcupaupaweaAoUWxP1gMDXkbSnjWt19M5PzA",
  "key22": "5Cb25Ep5WsnNf4phsH8uTKkc8hottCfk3TpLL1hbTkrRuVBtfB4kFXabm1mhQtpYqnZ8GynMr56bHVbQSkMMwMAq",
  "key23": "2iwAFABAoC9qLeKCDtC2LQWqJpgLUzUB3xDrXEWchmMiBAjj4Ww6iYB5zDjN5N96TZLGL2qeTD9xgNhBksTAVJcU",
  "key24": "JmduJFYKrGkscHDZbravoqcx74bfaZRdZvJ7hcgEKxoUDeuD13v9gRVCemzrZR49uZ7CY8CzMnQSzuQZ7iYpNw9",
  "key25": "2m9dc5tSRAGiRBfBuRgjVegwizc9BDb7zJqk6poiQJy3V6oSDFCUtXDXHroMu2GLApJG1ywQrghmE26PkzoNuK5A",
  "key26": "3vty4JeYSvadf1bshBNeiUH5cfGYo174r1uooc6vRfwNJwrWd2Hoo1QfE7gMKJ3f42SWtzgHUZMYfZNLvE3Ljkpr",
  "key27": "GQFMV8FitDAqKcZ1JaJPcoXr7NqTeudsvH6PFzbmKZ8c1wnXLp2RZLXTUc8dQdMqz4a7BbmBhQ26VnRrCapKtro",
  "key28": "2SHSmns7evPUfj1fHynTi33EzYM4sSwJuA5ocr2nFafQCRrh2pzGPMe2bxFF1DZi34Rchw5tDRsThFWFbZiRNYYH",
  "key29": "5RqCPrNCNWnmyzLib84z9mzRRoNDCoP8MZgyeCde924v91dz7fg6C1D2UmE248pAWpV6CdW96nKwZL3LVgdYwGbp",
  "key30": "2GghEVSHKQjkesLbNNtoph5Toh13GKFbsUrQ5N7YjmLq25tVxoqdAQKD7UhNt23ojR8i416AD9Lw1N6LJ5WxvmUG",
  "key31": "jbJeu8MZFBXkyQ9dvnrXbjG4HZEVghPoV9ssTZm6nXmx5DhJi2muDZ62PSrevhzokcbNSasMmezFmZ2ZA3hVCkg",
  "key32": "5wXgQVXvzafGbmtWzoLbF5nxdZ4F5LPhMei9JBfNyowF1YgCTgvAguxcUJiH73NrzaZsxR5rLTSZMpTCe6jhF66a",
  "key33": "4U61E2WoG2QzS36oj3gqe1GTXX5dWGG5bptV8HSkrQ936JaejhzwHxDaiApWtyV3V7k45brepqCxPFUKYL3Xjcw8",
  "key34": "5MPoDEYdaXH7zC6TpXaX1FvC8TJw1u4NYCJdw4aY5AHJsHWkFr9tcu6Hmp4JUeudmMb9qHmmZPuUQsfdhE9vnbWg",
  "key35": "5iG1kS7NovbmepgKFiWCagoKd1VCKpRYzUir5QvFDCNXEJaq1Wkgt3FquxhjzVAcZEDZMRVfZ5hh36ymzV7185Cz"
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

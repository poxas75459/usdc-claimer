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
    "3k5GncyUz5qM7b5PP7PET5xdtwf1dbk5HuL3MCRJyMXK12TjtbSWGWmCK8RqXL7BkcCw2XqnPsusgTrxgGrs4DMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u5AcZuYePiih5ub2fJ9DzmZcs29pqEXNnBZsT1QEZZPJGNN8c5QN4QmqgDNzo7V7KNaHdotkgPCYxKPJy7uQqET",
  "key1": "2QKQcuNWrK2U61JjMZx4ohNqNRDQVs8rdRgh82CNw3M59Pp2oup7EyyRxWSnNs95f3Qg13BU7E4dkhUTnpQ9u3km",
  "key2": "3LrusoqNEQ21xzyTUYMuMGFYDTBP9sb66v9xZYrfGGBm6rVUcioeh9zteMXF3BSEpVduWAaDMNAweEMfYcXNya3Z",
  "key3": "4WsTB3QyGLdAsRoTAcH29XjryGJ7aXhf8sZyFgVTtMznFc28rm4FRSkto7omf6jDoqVGDJtfRN7RQBDVS1JYKQ6d",
  "key4": "38qq2WRcLE6PWuKNGmSYPQFck12WARzauBP1dAXSRkCr5pidiBfFswV9xVNkeggaPwxox9kD5y2fqyChzCXhYY43",
  "key5": "63ni5gW5riEiMH2AA82LYh2YLpzniZkGwX1C3c3ZRYQXtjUTskpj2E2xNLVfRcJnWLdV3iWBkTLwd6sbpEFV1qSQ",
  "key6": "3sSxGQSS7CjeKUV9y7FbEjxEcaWVsVdVvu1Ka7rxY1No3o2oj5apffEnDUUXAzfsLTwqiZrYYZpAwNJYfmtbNrxz",
  "key7": "3A7V8JuXFhGZjjnofxwYmqWbzXobQPq2NtPxP2uVkDopYsUKUsK3g7MFWJSqFpdhZCYa6iPMS1S81DpZvspaTNED",
  "key8": "4byzBdHLmK5UdqeUWyYXTHfYJDgfv2LQ38QvGJJcRx9kEP1e5RVdcrvu4iSjus8q6VQYBu2YZD4KbsNJzHYnC2zn",
  "key9": "2GV19eQztKEKkuyrhFGdPLnmwDmJWbrSQfdeFqQgLRc8a7CpaT99xFPKDffzMxfCAqmhVdUTJhWLhbkzR9eMSa9",
  "key10": "5vkpGAcsV3XTv6Xhr3taN8QsQmB8eSY4RcsLMvx6qW9vgy6jfkQn7q1fwkCDpLNH4w4J6rDSxXP7QY4ybAmNkmft",
  "key11": "2moAv53WJTfFsi24ogeTfcDNaoJ1t2TX4fKYaFD8Gkm7oGBQwLKxYpVbQJLWwHho6CpG9xgRiGtkYaw5VB6dK9te",
  "key12": "4q3yQGkz1MAi9s1qLX9k8fi7mxVZigNjZuzTKaV5s35wp3kUkGJFEjazfHjR45VUKfm9kPA5SysqQXAp3VJQ6928",
  "key13": "5zvhb2WJTDmG6baqEvae7TcZCuW8PGUsvKKVyZQ5tkwHU3pA7DX5AtVHdtMqAcpTBoJUcXpo5oGL2RgCzVG3fRyd",
  "key14": "3fxWEwJfun3jFFdh6kBn2F3kVG3XBHD7KfsC9BxDgGUQVp6FqrZ4eit4dZoRXQcu67baZa3DS1t31VPpDhcJe1pY",
  "key15": "mm7UUJ1Aja6YtxkmAimrWQ9WL2oMZ5j8BdFxu8VsDdB3ZzFDNcaF6wqswwU54oBtm5EsU8dasQ2HYhsP2ANkPaC",
  "key16": "3kdLFcLxF3MFSVwF5R29V9AXE8RMZA7s4UvabmQEquoFsHNvES1gfAKtJM1mJ2SWFns3Z5v6qEEL3n3CyLbtC4rS",
  "key17": "5yGXBwp5tzFtVbehd66MbqaSUEmH6G1xQydZmN3YWdDsz8FwYieA13eh6AgKMKMUxNtHfb5LNZeGvDY6PrE9SvYg",
  "key18": "2wzXXp3ovRrnaBCj1Z4FyEL1ZVMEZpUpCLVpqiWz6TFMuR2vmubdBDHrTgRAMom5h4uvuEqNrD6iaSzrwEcA59sj",
  "key19": "2v1zg4YJMiwLxmUTHw6tGdkfRKkMMkKZv2Dg9yQWhZYWKe6Xt7pHWCSZnPYnb7tcwhjCHNmKthaiJNLpvXdpRdFi",
  "key20": "tppTDe81CVGB5rP7StJiR8Sp41pgxduQBaPgeiWn9eo8o9r6CJnsSL7jZAXP9mVxoEkVJm7W5UhNHrNrwWnAy3v",
  "key21": "5sEhxzB6t565KonpLL5u3sWysKghH1LkKMXXswMa2sQgiXxvQpYbP9BZAn58E3SAwccPMMMf8Y1mJvGUDzw2vMdU",
  "key22": "wffbrtKPJTmAKaGCtD2gJeQ6in1xvtbUhMwTykMD8wEjCqjKv6ZH42qgqoeRUknE3RG4shGACuzip7aDRcsugfe",
  "key23": "AUR2cbsWExMBHy8U3KUNhkRAjFRizBCY42CcVtGrTSATGRWdPLte19agusSQyskUgG8j7GzBbteZnkTW1kro5bT",
  "key24": "21S3PUguTnCt9WhkRG7FSm9aQ6WHYtKRmrsFqodGgooBsbqGDn4BSkoCeFSuuTqJZq4HNDhkFWdn1W7WH2273MqV",
  "key25": "5KexuL3T5zXPqpLhCo67yAZyKHLaDGRKocUojzvSngRub6Pz8Z7R3EktiRJodpVUBjvwzatcwh4XDbF3nEk3Fji3",
  "key26": "1ps4tDzFHbvy4MUGDhH2xRnCYkeZKscNLeqZqWutkUiKGRkZ2NgAVndDA5RL1g6nKkhauo8K85hsLjy1L5pFvF7",
  "key27": "gvsXTSq5EyjkaH2HV449g6153TViEYKxLNaK6o3KLPt1BkL7Hbec3Bj2z3MsuHphF4PpExthNg3FJF5P7cTvbX6",
  "key28": "5P3goqFJhs5APrzAwFfp8YWid2wrTu3Bug1e8w2yxwmg58J2EjVaFFHjk2uJbZE1DT7bobQeEbneeStbv8vKVEgm",
  "key29": "4FZmYDmKytGnGfiE5nvnLVLTw37KpoCj4pXZQY8b8FvrAqJ93YmdjCYJVsRRuJDSpwrNBFv8gE9uracNk5a84yGF",
  "key30": "3393M9RaS3YueUAytC786MupoTdkE28tbLKFkQ2wZFT565116GrbRUwawV3Lj4FoUX3d3HM9iFNKEYFTpQjNz25t",
  "key31": "2CfCehV5kgLYXrPUghNHjJxuRN2kQMTbGMRumaefTMaCrqK4WUWBXoaz8gXKhfaL6bMTaBUSo75wAh2Ep1JkvFnR",
  "key32": "3B86TbiNtXZq8B67X9bw4grLEy2jxxsSx4Av7xshHUsvAZKQ1NyS1DRFvCzzhcNH4tZSbmhYSMA6ABk2Rki9sMtt",
  "key33": "4Xj81GHTsdj9pGcFyiuXzZCJg7Z6eQSZoCt1xJSFWpGXetWT2cjYNcDzZngThNpq5XJ2YbC4CCcG21ggGbN3G7EF",
  "key34": "27PesbZwad4D8mfVvSBgrKjZFZVzpFdnErXbSWG43s8wxHXgW7PryLJAvvF6t8cL5F6poaawL4AgmXdbKBL8b8da",
  "key35": "2oT1yhkJd2xkx3RCkEbWx64PNpgQb3c14S39iNDa9qcUAcdGFxpxC7FLdKpqby28gcxMC7wVScMsgaioJ5kcxAt4"
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

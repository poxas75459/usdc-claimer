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
    "4wuMuk57YdXCw5TVbEiKobBJqKftSiNnmFsc8dTAqUV1Jz7chH3NzvCBmNEzdwGk1W5e755iaSzUuiT3pbvUzVLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJuvyCnVCCmLnKTSPeQ8JqFdnAnMDLo8ppoVfHnfeMDMB1xEt8D5idki7FJEjyuosCHXpSRsPqrwnoRNszrrmFN",
  "key1": "5rtDrZTeJcUYMJ4eNazXL5GBvVvtQs7vHR9UDmKX4gtN2CaFtkxV9NXYKmD6aecTdDq3FGeit9AQxhxZwN6wAkHJ",
  "key2": "45zmwZ3V6PSpQXn33a6JnLr1SfxysgnjDDaJcZiXFFsAyEibcHS25GXNfYwUVT3G97bRgHwKSYqRkjhwhasroP4S",
  "key3": "4PjjrFzsF6A1oLoVmRwLLfjLGvMSM3RNiJMJo9tPkVpZ6SFLgaQxhFZ5Y7GJ8e4c8Jc3pyfbNEyjmhnZzRpwdGDR",
  "key4": "2sPNmrcyN8GExdYzJ7oA9VWJ9x46gdDcFVRv7KxGvvKXDU7YnvSCdNhD3Tn96XokRJi4n2jdniKhRZ66HaRWD7dA",
  "key5": "4aa5guywhcKBNCBf3uw3M1QnVo6V1UxeY3MVKQWkoM2a7ivwAEwsnJrmRxZ1C7WA4wg7todPPBxf9NEpT7yhUdRr",
  "key6": "22mdb7Hf1oBPTMxkQfEG2Uj5e8cZsL6KR2H7ddxpmX3ARbZSbKbwSYyzooewQyaJGXPwR5v6tkyDrcDRE9uZ9L95",
  "key7": "kLMRPGG9frpYsNyoCRGMyQHcQNrK8KAkpiCtZbbaNPP82hz9eiYsjrrDsp3YtmfHR39nrDoAFAiTzWuqx99gKAF",
  "key8": "4EoSTujnY67NdT6GDXQpqFazpNjTzxCXTeovYstvmJs3i99EfoagaMowJwJHMh4ztCn2VSYTnCoPxi5pkivsB7dF",
  "key9": "5opogXG33BjcFRwnkF6yBj8ywnHxmsqYGa785fQnTfTVpecq24UiZCtRz6b217gXUeDrgeZ3izpwYJdGJciQAcVi",
  "key10": "4aJdbPWwSA2cFdBFW2BRowFdLox5GzoodeJ7WrBroAS7YEunB8wLeZwAT4zg3tD2r3ezr9nFZqoeC1i7zPd9y2Fx",
  "key11": "4XV7HxrzfGhNTbFynrmX1s5KWfR6yaxEgS6QnTGxtExyW3bB5VbVuT4fSWKinAWjsJDMopDWNSFge3m3HvKXyVgt",
  "key12": "8vWQPPe3HTNUHH4rULmTqv3rb3JFK9J9r9ysPV4x4ZNRtpj1fM88LTUnD2bv99fb95F3ktWBdbtxec5KpgHU25D",
  "key13": "5XBSsp5oo6qWdWiWroznVn5TUGW88wABofE3wSA7sriyb7zo558zzugsF8JaLdv7FCeE4TFtrSCZLjGuJZ9dYmkd",
  "key14": "3j9w3wczdRgt6BjbJtor43jmwvHdUkt2FLfzShKaRnaEAHhjQc8bzZdS8srS8UvfLXf5GsYHG2Zkqw4mThF8Ydn2",
  "key15": "65T17w2zdHgfuDJREPS5HxKu3sQXsntCQEhu44d4FiwxYdJFDFhXX4oQPZpc6bEe1K9tYo2f1sGdYHpMurq2knwX",
  "key16": "2HDgRN62267CxUq8LbdBpvxrJ87ybQxrgWMMWazNvZaFshKWWXuKGtERzoXiBSNNSPGg7rp3qXZsYYq1YGANCuMC",
  "key17": "4cdVrRG8FdPDXb5mHzLCHPbWhVtqoheYq7a7s3bRDSsFZvN61RA1ZrTGzCpppfY3wKXx8kPpFhRmx4L4jr69z1aA",
  "key18": "3N94yy6UcK6WQSmmM8Jw4FUCFmT2A6jMJbv6UzjAuD9RHyRGLvdXr6H2o6Hq45gLzv5DepLLoBNmFZBqXHEmuhtb",
  "key19": "kTcjTeV6wH5ZkDJLP8N8NhbTZnL3wtyqzCaHwHno19ECvtk5X4jSqBxGvkLGRU8GHkHewfyZWCKyBP2BMRcFYJ8",
  "key20": "52m76D1QBRL5aq1WmR1uY9xNU9KWdFEeC8qEZ7ccM5uw1ui5cHfxmDQ8rLNHoXPSuHzHT1CUkC3z2zyiFTGSn7kY",
  "key21": "3RPimQ9zRMCCNDMUFUZvVvxzDGaQrQLaHGiLjG2FpW6QUE5EB1B6xAJNSTma5HQ7Uq1tmTgW2xcKPpYRdcAWNqru",
  "key22": "4Ce5rQq9kxwaFbsQRjk3fenmJf7vg6yzPJtZsfKYjYdFUijEPRaEstc2NKjDyyHsA9NpCDXF2LoEmHWnk9XwtYiN",
  "key23": "usTh414cchXALugMTDk4SFQdR7WszTp1J1fyR7fNWUdqh2ceZCQdziao6QNcnx1RC2Py4oNKuw4NpnkLQo5jhJk",
  "key24": "32NeLe8NrWmLGWxqVZuDeVY62PQmEmY1T1yL1EB7fQTLUrco9GGfcrZ8iHg8hq3aqx9SoerW6qB4GD61QTgHmFtS",
  "key25": "31XCbpywRC3AAv9ASnrc6uhA5cF53Ppy7kfqkg8kFaon2qGUoWiNbVi6VPjbvp75q22xiWF9naY9JD7ZXmAkrgZa",
  "key26": "33nhLFY32QcXmBWLVXWb6a3fiFYcC3hG9sLDfASbdY2M4juxvWY1jHjhU45Hfa1HWWLQeDeU9WA5rNNNYPFGcnFN",
  "key27": "5bi2BMJeapBpN88RsSTjo7gtqYqUjXyL3HsieLNSMrA5Z3EPJFF3rh6Zxqgijxw4CZBBMowDDKenXXuMXYrsPYuh",
  "key28": "5srQRW2XHS225BzJHFc2hpqkTZLxMi6jhG8aCmXSVzbFeMfiDmdkxXQ9xUjiwmaR2dngmyvr8HeT1XVQweCwjFko",
  "key29": "UA7ZCz9xwaKYg7goLH3oPNRa4e8Swoqehxh8nJgUZrCgvCuFznxqfnCZTmwspdFFh9FBPBf4orea4zbY6peykdq",
  "key30": "2D6SRfPcTeKcXXZrdhWBTbY76xhJKhghryQFhsqecQebLV6KncB2ngUWZcJL2SQXjRu5Ri2VVjr7TGGyjdoDdPr1",
  "key31": "3kAmcCrWYRiAdWR9Cg85fptHS3sDnfVipT7WSvfiP74cjtU1mCpGdnuZatgLouJEQ1mDvkibi2Lrp2CRPzoEELoj",
  "key32": "5cNNCwYcvZAxQxBSfjtBrxHyfCSXBNzeKcRn4EpGrkmrne35H7DSkFokpahyw9g9krt2R79QxMP9raH5H2HqTePi",
  "key33": "3NJ5pgCRyiha9KQfYED652ZxGj2BaynbMRXzHfKbm53TWsKDer7GLaZHFhezstCBtG4X6RPTSiAUjAra9K8Brfyd",
  "key34": "2HULvZLZ6VX1nNBPN3JRr1wt2EjhcfdXY7eJ2nRo2qFcfUakUWupGL1hGRWh4pvU2ERgDUjPS4RZxY6mbkKVihJb",
  "key35": "2fWRKcdzGgwJ9XudcgkVQoTFYmYhySoXn1PmwdB1x8Ent1Zt2Ub4S5ffh72kJT8Vp4KmWgcAGzcV2rGzJsyReewD",
  "key36": "zQ31DS1ckwbszCfoiUYFTwKpaHAbr2rLZhJEY1zYMEY8YKRp6BZz9BMuLfPpHKDgSYKxtHAbfH9xgdunaKJjvWJ",
  "key37": "4eJzTju2CWxhEmMW8vctiKyJQwb2WpshvkN4Bd5uuzasnjJMeba1372bhgpiY5vm1fXb3gKsbSK6DdEiXJKgsTap",
  "key38": "3jhWFL82F4vmgrk1ZWmrCdJ8BTopqXZrcDHazoWFMDvNZ79fSxmoenP4LU7eVVMk57MxLFxgphDxZ7ahnAcEqfNw",
  "key39": "62LF75hxqCCcCRw9szCGnoN3MKaSauDcwBs312NBFf1FxcSNnE7c56oZXRn8aXNsFkXh7cGqvygD7XXmzx3v7CsF",
  "key40": "3z2ba7iTM6uKcinvfuLiMsF5fJUqpwvhAcgFmJZ7AWmF6j5WppDZRtnzqo5nWaHJnJEEc26KNdhPzio9uusrCPPf",
  "key41": "2i5MJEXkwUcT66uRmK36fTkgFaj1Ewi9Jre1TuK8dTt8WqfccQEtJeW2uywt73veuwqqSSayt4r1riz5MF5mHcen",
  "key42": "5wm1YGqAUkhVtBQ1m55BRwkv4zQpErkWGNW9AtBfJ9DSd1QghMJZCRtes59CPQBZk95GS4m5zJiHmpNzPQKgx4Ht",
  "key43": "2yznFkQyB2ZhUnx6ByYmapjx3umRC67gKKZhuqsk9KHkFpArjDxBcPJKGJC9g8yh4mUCmMhQzLBvV3xA11FyKbG9",
  "key44": "vwNTaQrNEGeYsKNTjzJ7q1S7MixyXHpSSjBTheP2ZVJEpCRwjUzZyGDSr77hdF53oZHCtZJVGcNNrfrKQiGi3ZE",
  "key45": "2kSTpG2t1epNxzBAMPoNHxZjH5Czs9ewGnxxM5fyX33fm64gwVF8YGqhZXNogDzEQneAQuKFGaoCeCmKRERqV8ud",
  "key46": "Mxr9D3GoiqEtGCaLNppzXCJ6JjzX1g5qkczS1cmx4RGL8kBNmkwELYt2Aw8BZBsZJCUwQBJYZtBSSMs9LVa8L3a",
  "key47": "52SnTauk59hRfxBZSRwtqiBR7j2tRANEwQGSetbvNKxf5fg8x4VFGtBeYFAfB6zoBgUdhBqV5k1bxSvKEkL2bEwf",
  "key48": "2mVEDGPdheb9ES9KqfUNe9sh6jLxxWk3VecffDgnQYU13zzE8qPd2LEXyPyBuCu4CCZSDU6XFQY9mmixS2hFp7BJ",
  "key49": "5RYq5yorscSLHPh3T3au844GmGtCWpzDU1aCKjGQQrWCjG5N2nTk8Xx7Vg8C37Gc9UE82WwB5u2vNvnBTTn7pSmn"
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

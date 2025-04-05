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
    "42CW359DJhy3PXjsWqCXCTncZeU8C1ry5JtWZyj8p18p9rLsQm4sjCutfkjbLyMJdXCERKvS1aAxTpqTfdLVNpep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5H8DNosGDp8QEjtYWf2ReEhMMCmXgTntoSrLwjztMbFwbXw55JCTPid5NDbKW6FXj9g6UtLff4Y8kp9JYhXsSr",
  "key1": "eRrcdGiGPQuiydyH8DUd4T5CtJQ923FKkqdo3c5k4WPcZHPVfcfYWJ6MiPQsn9zBUm2auqSpdqxzhUESCoeja63",
  "key2": "4viJLPshUhLCFk38iFhoznLUaCL1kh8vX5LivCRHbh2Rn1Nc2JPBiebjJ7NYXFurV8Sie8bfTeEKo47c4bE3d89E",
  "key3": "5PWhSkHJfYxn1wWJBsXarNRr3NqpLBnB72evCLuEuXAVorBijH3BTJaF5Zi8gNqAA8jRDCzjBmm3gvMVGjZNhjTV",
  "key4": "5qkYWNkMLeZ4ptuCifdKsKjBiiLoeuNWJfK5eULR6QEcUavBPi7KadcZho87k5Sv5N2wG8eGJqy18Z1XhAiuVYor",
  "key5": "51MpPXc4RdndTQTBdvXGiBRGLFJ7tETWCr9qinmouSAr81sztZMVDdBp5JUm6htc7pXpLDymLjhMXvXCgYV6coJr",
  "key6": "A2ZM6t88YrSZLkZnjfTKsrfxGjWuX6NJbm5KiBczVjuodiFn4Z7iGdaUomVM9MUBmk2QZiq5eZMzYKoxj9ZbFK6",
  "key7": "5pgfZ1o1K58EsJ21rSDL8Dhj1fqDq2dYgzHVzqBr3rVji64sT4GCwF2mxab6csa38mF1pjLWN6wpwaiNv7YT6zo4",
  "key8": "4USfqHzUtCdZYZS4RAfhFjXmGSh1jUV713hq7e8JEn792VzL5JAcypg8ftTbTthNZwSCXn8k1UZdYxZ1cyxW165M",
  "key9": "4cg4AkKEQTLjCCjKHWPR3WsAvsCrk5TL2S3Ez3nzFKNPZyAzF7hkAVoNYT9beARdQ2eAjbjjBUmwtPe92Y6p1dqw",
  "key10": "4H4GG5KaSdD9ULkSBBARWHbteWvD1WtT3YGB6PtHqznspdy33iajsBps6SkjA52SyTiG8hHdChbCu3VtB2NCmEmc",
  "key11": "2Ag1okZr1EypzvkFFamDUWQkzKXi3MrnGh4YZ6jrAWyW5TuWPjoiiBujPUAxv9RgKQPu1eeYG1QmRwURLTEyPGxo",
  "key12": "3TNyzw9Kysn1697xezdstnkL6JtwBoVR2c1TStePgJ2WuheheuheEivDFa2youDSNi4mUoc7Q21ywKbDmbBMLqZA",
  "key13": "2mjGaZy7yBPwA4gjiff84PUBLreko7z1DwyoUou8xpDJPNYV9JKnHDQz6cEUcRkNJjQwLuYEwqHGPLJYdQwL8NyV",
  "key14": "4F2xyEu8kg1LuC3KN3nUSFGN5vPp7ZfeQhkoQng4mjddhfFdYtCvdhqj7dmTZVVCTZntWfRt2uD98cnWnbkPUsxX",
  "key15": "2RBNXZpyViELupBWcczU7e1cRpsMW4DB14DouDtU53ojYpMCnFkd9VDuGafYwDNTS5mnUwV2uGLBP3YjnHL7yCo8",
  "key16": "5LGZBj9XGHMzfjTaJ9gk7Ld7pUPbWrEhVyBv4YgeNnLSo8DZ8jivnL9akvZkXwo2zQxTGQH5b8Rvix2v78Y12HVB",
  "key17": "5oa7nHcjmAgXZgvaJR4sKwSA63HqmLEy1uwxQ2reSLPavBh45uLPXhuC1dA92n4oMtKXBbrLrUdCrYVq7pVAzRWu",
  "key18": "4xyYdCnZnkN3LZig4zY6aK3fxpauQfz1a1S98JpSxR7PyhS5HLZCw8U6dCQsdW88Y3UTYWpmiwxhhjpsg8KEgKqd",
  "key19": "5oZUoAGErYwoA2PdgkEvLwP3hm57NwfY1G4edEQMJaXMiZf1fiFA1p8bVEFrf5ixQjTVtAcRPnoWTunMzreBjf52",
  "key20": "47FYUnwkWRanuwJuAatVTijfxN7m6ggS56VgauEd3yVU6R5YJLj9qnKh251Z6MXjrhkukQMEetZDsdBBoxsrro4v",
  "key21": "JiofknveTjpY7gt2bR1MWW2dWaGKz4oRHkehhA8THsDBfRjVJTAWMnYJ1XRt562F8CcNGSovPA5rdznDmHZ3Kan",
  "key22": "ipgQEcGSyknNsm1bMenY53c8sZXmLhH9aY5u7JRAKqPv848TdfrXkUgPuwCz7dSYJeJxEQvW28Xmgo7a7pRZzAq",
  "key23": "AyLE1k1Stzv9PWuNNMNDhMVYZb8utPNr8cCmgEoczmEVnn1rxbFfTdsFUyfT9nPF83BUVWCPzvoj7MZJ7W2VwgP",
  "key24": "2ZXTkhZypkeh4DHAeiMxvA7KSqA5hGwMNyPQQBsAjdLb9u1cZ3aWvSqUfrBWXxfPLJBL5Dpq3QiKMEfXXbrxSDLm",
  "key25": "4gi5fctnY1ubzAN5s66X6Q4as4afidLYL1UEucX2mY84bvqSwbCiWGYRD5RJGbTmHZmpXqHrWGgEFQEDaSG6yfDn",
  "key26": "59rfQBUczbJzbJcwC8nosybSfTTtwbf4d3HYRvde9Zqvk9RUAW6ZE2Y96oxCFrzbP2DrmWBnGw6LnDWTtjqG3QRf",
  "key27": "4CVzUFYH3H8297r5N1LYwGsRdnYvBR9knRo2SswvL8GNGMJd3PUFDakagxQCbNz7btxZdXJXnkPAaRJigz2FSJi8",
  "key28": "4QAPW3otEwsrXcEaSvubUPvxua6U4qe6NCzPUd3txRY7J795fvyXog3eMsEe82j1aPiT2Veb15HRrWB6s7fvUKBs",
  "key29": "4M2ieMCg326dfCQomVAGBpQZHL1evejKf1RKx6kjfKS7EQHjwWcUyZuHNrWeGvE4MxAeqtmXSdqDZCjFa7UWaSiE",
  "key30": "5mFKE8apLGpQTgpC2SbYFEzvrk1ZtfcDhx6UqVF9eeX3wLYPrXr7piVu3hREmiUBFc4oDoyjVpc69AhgE54V5i6F",
  "key31": "4jxMSWkFr5wizo8KLL1jiR8D76WdFXQeXd76qgbKULY8u3GUG8DjR88m3Vdy5jHepJTnS23QReih2MzenojyoQUK",
  "key32": "FUNpBiKbpJU22GRqFU9JoQuQPZqSCV5RN11KJEzyKqPFAebtXFMXefeq8frvMiYnj1DcYnHnjU7CUY8rz4rda6X",
  "key33": "5LAPwMecxcMHsZVKhtjh6mKduxQim8bhXbBWnPhohfo7dc1j9mwgrPNB3HwLiQSMqYUgpGh5UtbKucSrDoLn1SDh"
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

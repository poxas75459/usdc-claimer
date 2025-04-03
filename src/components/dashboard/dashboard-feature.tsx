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
    "5b3pGaE3RXmR8YTiRF5mnBrqSHJFt585f5U8yeCYDmp8fGm44nvvZorwUVKvwASdmcfFvGwp5YesQ7AcrXSmkYiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9kEqo3qgmUb2NK6c8stwTTgfHZd4i6J2JzD6DJufgBidL9QZVMuabuCnMNZzMfkTYMMa71hp84fz9R5K55fP6wk",
  "key1": "43M5weoJxsDSVqnfsNfnecJZbZHouFj8kmb9XN4KBmjh6kzYp13Z6S7s1Jic1VXb8rNHP25CXdRn1PNLvCzCLZkx",
  "key2": "3Xwx19AKUfR8ATknU7AJky9BEMq9E5nKMGA3yeMAfzmQzXTBLesx2ozUnE4oNkQxrK3CRGpnLbCYDFkk8Xq8kYha",
  "key3": "47725qBd5WzphXTySbh8pGSsBPi596wxuWfbQZb8fSb1D89ThoUbcUMmUCrhbM9gpiWm2Ts7AxvyDV7WsJHywVox",
  "key4": "4WTw8TWgduuKnAnoJKgfoDEEYC2zJpuMkQ87jUmzEE7S8rtgeH6MmJbYRLbwSTY7xoxNq2rCF6cGwhS7RDgjPG8V",
  "key5": "4Mg5viWNKEJCGeYcmiM9e5evi7EsBBKXd9ja6eU1YXH6jKgocGSiJDVTdHYHiiqojcJwEmVZx2uFPktw4PfKtAJR",
  "key6": "4qnE2AHbNj3QcFx5y2Dtn2LgQqap5HxE955Vq96xrNMVEpBpZ9a7Q7q7RJAzFFSKa1tktmrqkQWuEtTKR3BR3L5W",
  "key7": "233EjGn7QEe5fHcMqDjWCwBXdgDdoCpBgRGZ94rR7qdur16TELAjx7yKAhqEWjgZvk8z29Pph72aZ8FvADrx37U6",
  "key8": "3qJxt5X6c3SVgnBN53g2ip4GzF5RJUPauVGiRtxewKKzf5ovrwhWhKocgEWJH7UNuupwstQBfC8Y9SPdJT3Hx2uC",
  "key9": "4PVwrzp9efL8tcbSmsdEqZG3FK7hMd5iEXdKDWGU7Y3FB1bAJWxZ1cKNYMpVVuGGkgmKWHynpTXydRbHSA4XM5Vk",
  "key10": "2c824TeYNQRRi9kVQpDyfbGFtTKL2ZR32WcWH7efcSaNtqG78wsBvJQYuHNVzbneMG3snjFGdNVKXuFq5faeRuSX",
  "key11": "Z1Ea3cpDhfBqRpW4mm9GZfiweSK2kUeKVBbZS7wSZZiVbbb9Xz1tFTp9rmVpKLKSiotM9TDUXv5LrcugraF1FVf",
  "key12": "215JAoqR2UeN7yZZpHXDXjwAEagnRhjLK2qoK8u78oj2ueL6z98fKw3DRhQsgt5Nm6PxGTL19v7zvXwEEJoEf2Un",
  "key13": "3quQw7ejiZSU2sRVaVh76eUxUpxCVm3V5xwN2F3F2ZhmTw8PD8Bh3Lcm8dZxannugytNCRRg3RNNaiVkFfdE4E9E",
  "key14": "3QmhrFws5mnqwREjNLkpbmnqpHGngQGmSmuo3v6wSMerCa7GizGLCaH56yLBzXAiGYFs9KbkCZeQcu45AYF91HJy",
  "key15": "4y9XW5sUAvagc1UKAkk99qH4FqBQqaujXriDwQGwsA6nGd1uNGprQSJgqzh63ZCdCeZmyirs36EBraC938gMNCV2",
  "key16": "4kGuQaCKauZTS68t4wGR334fPkwx45QxKWYV3m6b3XAWqJCpKi2zACiuWvxiPqCYz6W7Bi62heaD4MJy5CSEc3Rs",
  "key17": "5M5wWiEePFPEy3MGaNi9c3kuXkCcD37NKvKDb7MTao2A9qJwLQozxhKdtqYFnXG5p7aLR5XVvzz4aY9WRAxUo8uf",
  "key18": "5ubuQS1x7jQr4xCbUDotuSpt3t1C4kMskgj9L7nWpnaaYGU7NFzrHP1CbEBm1shJim1neL1TtiaX4gaDJmiChZHP",
  "key19": "Q9A1svMGxBzGTW3Jjoaq4z8euh7TYCXbKjQEoozQUTLW3r7bErVGxbn9P67kNuMyNoqzc6sDCcsFjbF4NhuSnj7",
  "key20": "4dsA5fjoY7uJbzPzSdbPLztBHZt8JktVQzhgESV4PujS8esPToAQ9pvnoLwa2AmPY2nBicbbouQm78HnyEW8vPV5",
  "key21": "3nYymsnk215RLcjbJMzkgyXvHqis14BAg3ZbJH4CezgxH9WsL7wggTowAokYtgd5dkS4bLH95KCRLodEhQB8NDzc",
  "key22": "2JXVWyiJDdvoYFXC1Eq5DUxgadmd2qkFCCdFtS8jwgrFRZqYxdtNNhfz75rkAqhR2S5Jo6WyNjRMg8dkvZQfr7rm",
  "key23": "4GDR4N7PNBT1yCdbCfTLnaxuBppUQrpEGT3LQ6fZKMhjWGqzPTQYvkwe4twFDdaj5RbT9sqe7HjKWL29y5qNxLzr",
  "key24": "n7anP9yyemcV1DfkX24hxSWUYzV2wrhd7rMvLRaR7Rm393NqpUyymRhEti4rgW55sk7xLLQFzvmNMZAeyArkRtQ",
  "key25": "25gQTxhBmu7Lm1tGPrtntuTYVpLC31aredRWyRrVveGiih1Y9JEEX8Zj5sUxh78gQeARuDh1ziLaTXu12LzZDvtD",
  "key26": "3rA6vXmq7vJeDaccUM81CG81nhQTwie9eHWEbbZFug8mc4xgBiMvo7JuDCnYWRqA9Y96a8G4uYs7e8JA5XSwDoC1",
  "key27": "R6hB7CmYy7UV9mCbau1G7djCqK3uGKK1iBHi6VnAd5v2RM6RwqAoBhkVooRy8AYmWZ18oLQJVbG8E4NhfECXSkq",
  "key28": "2cpK9zxSypmRHGCKmTCX9kAptdEcyNvumopinGjrVEQoZBYAas3BWja5Zc5n82sezb9a4L1FF2jw6E7eHGDotPux",
  "key29": "27akSCc65egEqUWQn5gszGgnUY4r7JuKXewpJJPpQcDNjd8CapPVj9vqQ6QPsDqEeFzE9LhQs9G8TtPRaZsp4BSF",
  "key30": "3n4fx73tHzRCywU27bzgpyxVMR4fyg3v6RQ5fCD3KxRS3JGXEvfQ9EWzBBbiAgrCfwUgnLkFZyZ718j43E917J2x",
  "key31": "3y4ezNHK3HexBcaomu8DUwa2YzGHZZkeCZ257q39CUfNqmPE7f1fdFiRACb2V3U35TkufQwN3dpAWHoiW9terhuJ",
  "key32": "2y7NgDMFKkc7y4UT1pS2iKsEUe4c2AjznYhrn9dYVoqPrh98GT5vqHFxDoPYGsQLirH7ddsCTrAPs1sRUbY2GDxb",
  "key33": "29zBsDBFR5re6dbPnSpuTg7PrTLGWVZbZthsqFrAr1ukkFHy8HdLTQhP2JkgHTnUbgXLP9vzi8HC4NNfzaS4PVUZ",
  "key34": "4oTyZDruLTa6DeJJcMpLVDtVSLnfEE2GXtWnEoaZQKjTqSPN2EQrYYyvKyMrTRtf7dyaFJZtYSAWfUToF1pcjbPW"
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

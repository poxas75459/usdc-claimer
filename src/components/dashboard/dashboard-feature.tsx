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
    "2b5stbA6UNxRC8xhztMVtmfuuUkDJa3aHJGHLPYpFDH4e1SgA5zFGsD1LzwEzSSdpo2GSN3VeDRNjgw73AasvtNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hy16km9EyVom1iFoHFzFqj8HLFu9nV1BgnU8UyBjGcUREKLzQokjxFTmvhrjPSFe13Fvu1W7G4szSQ8hkeNQxSN",
  "key1": "3i9z4X2Dm3tTZCpzzusUqoPcogfgYF9Cx6ntpXiKXd34nwVipXc8VvRFwBqQPC6WV1y5zBuRiRSCmvqoGezoj9G1",
  "key2": "3MF8QikMZusm9Na8dsvR43EMP7rfqGED2kYCBTnafitTyZNXf7QkF2xAxJpEsJLDEAqqwHStbLispvMz6QWwBWwS",
  "key3": "4Lao6xCNiTBZUBsrCXtfpeNNQfXNoCHuNaZGBMupdx5odXwKfFnswhxTCcgWZX5GS7W3KgjLKzF7oS5xwxKuohdB",
  "key4": "4Zw1ZRAjP1uJz76quwbT8dvxxXSpzNa8T5NkjMs8kS2m7MNne58if84kYmKo4fJxQW4DsqWZUc6pJ1Xho78Yfwct",
  "key5": "2WyFPKhtShq5g4pm1QYNw8Wjr5MkURGa1Wv3TjxgpZ8rWdNhxxnihm9bZQzomkrgJHkbYXa1XNyNx4Xk9Uhyib9n",
  "key6": "3tuSZS7xy4gKBSSTfs4pTgDzVLrEo7hwWV2RuspRxTHNQ4Sfby7VfXbKAanKRh2shf9jznNXy1FaPYTqxLYj2VMF",
  "key7": "5gjgFR79Xs1tds6VeKpzCEDUDaDUee3j7iXYDcFZGjyNyFUwbVo5fwqrhiKFovZ6aW2UciCH3EebtMwNRmcv1gno",
  "key8": "UioJrrawStNP1b4A12m7qYC83uvgzZeBbCfHw4CeJNftS1VWgcSmzYajBj15Y1sQnuhJsds2o5giLvjn1vgkqSh",
  "key9": "5FHMDdq7SKSby4rnx8zwkEba3jRyacNS1RuKRqEkkAwvFrM1YQq8eUnfGitrJGeSyShP7a5V8gpbZoUE4Dx5LNXt",
  "key10": "QMwk8jW8PoXL2nsVBzG2uPBqBdS7oYj9X7i82bHgSf6W3mVNpZsML7zWAMKJBm4K94Pbjr8vewvoTpGvdwKDHep",
  "key11": "26sConiquTujiBJAUc3zZfK9fsvCstQRwq7Lm35dSyZzneeHtkYrAX1kyJgTxeRcKtk3Laq9N8jJ7CeEqUwkejeg",
  "key12": "3ccUCkNTY8XkenkHdtWWEKDGEe6aW59j7LmQcPJstohVMx9RaAphwHfWUGR7mL349x6TWnf1iSSgiJddhAQThF4",
  "key13": "5Ya7XP9dt3DKVddJqexDcAqTNhXX3vbi3YCScz49JuvpXrkCpUzp6WZjdfKX57XBYoR69jDMikeJhoKcqrpCVAq9",
  "key14": "2Wg56LckRiNMF6JD5wFc72xLGMvrLwHdqgjKL9tASeiRpugSVFH81H4TmMWcNdugB4EHUYFVsnQxfPyn95fjvRvm",
  "key15": "2Tvqb1yvjkM6BUMqiWXDMcD87bPu4mn25oWQtSf2CU42FRLYTuxBwabMGYmJpgPia9KJJUZyAJQiQd1CqzXeH9J1",
  "key16": "5ARaZtKP6xfFo7nR3S4FpjL868ksE58KbRzQaiFoXNEaCCJDwW29pqix4u5fU9dw6A5xoBQYPQYGyaDKFU3pW8F",
  "key17": "2niwBfqfKFM92a5JiPFdLza2L4x7SPmHCPzbuf4hYNuP4uARzSVyMHjtg4tEXK82Wzr5EpKBKr7GPbArdKs1Zgbg",
  "key18": "2aDzcG1LskGjYXWhUgqmDbrLHxh5D1waR8NFfZMayKrMpE3bPf4WaXeBn4QwQ3ZPjgzdMEeyhpppt81ooTpzJqCR",
  "key19": "3jMmizRxk41tVer1BpjHdn88nngok9gA6wB9ZCmL5gFaNFzw2h3LGzuUFGigReiuwcYh4wRHmmVZYZqUYKavwAo8",
  "key20": "2XHdjPr4sN7oFADdTg7CEJmpFdhaTtHAqNngLUUUvub5Pgqovf1No9YuT4v9p7FjE37bMSwKKdmLUa2imgFhTa5B",
  "key21": "5uchqu5p5H1f8WU4qsu6AwQhYnGEws97BUkvQpghEeqAJ8f44srMNxtpQ2rZztMuUWTTz2VzK8YqaP1jTPbfZDuD",
  "key22": "4YDAy6CCQNsuYwaspMoFCGKxsaviX4z3ChwATpUis4wqXMTXWzWHT8sUyJyhFHjWyYBA2FNPJqRC9H7Ts216pm8Y",
  "key23": "2fdYqVXC5w5fLSFq3SgBBdohzNvQbxyWxhmQaGAaUX4dLjekBcwhuPJsD3A6dqpgvuZQBEyaSmjtWcfyNH87xSJx",
  "key24": "6a7yCszhnJXBMj7bj3XnHtbw3NXRKBtTmuA5vRewVU4GXpAgygczZBBwH7T3pd7ehxfgKrkeb6wPh4hZcJi9dzg",
  "key25": "TTEwGUXhbpwCZUPyTTUyDwgVQNUTMbCAMErsAiRfhFMDkXTd4VbwXmXCr6rUbdPSi1YT6Fm2orbarwqo3dDtayx",
  "key26": "61pgkuvRzx9NaxFsDFUyrFA7Y66h1woP2AoefWN7bscyR3WwbALSmLmHwAmxTBwCFt5igdSDdNkUGmVXfr432W9g",
  "key27": "3RmRgyXTHWmcMa4RmKKRsbFJPTfZT9oACp8xqLgmzgrgT9a6zyz47FCo1qynViueoxPbbgm3eq2yGtYHAKuE1Q35",
  "key28": "2bihvrF9e9rFSFE5BytevQEB2kfRDZN2LnwPVVhTL8Bvi6moJvAcCfhti66YeaNNYhsxcbGCrpNbkxhuMFxUNBKk",
  "key29": "5HR4FHrwsfdWEoDq4yfDhC25Q8f7zRamrtYCZxdm9Z8UHmi9pNTga7exhJyx7JJHUoM7H8LsEVc8SrvKDpoCL1XT",
  "key30": "24b9Wix6x9ShqNwiCgvHvQXC1YWq79KfELJBWzsPEkAHxjEgGAGHr2ihRMNiLchg3V3YrRtGKJGzWuxEn1j6HW3s",
  "key31": "3dwFrkapJCdG84dD4fjmYm1yDTH4JiXnWi2q76cY2dtzvtYQoZkWbcWmKzDEQwPguzUQApBTf7j7BmtGj5HtUTLa",
  "key32": "bAA6R9YNJKHBK8KVWeyH9RDifMHXWdKiX79xSBM8PZb3Gkxc93dpLN2gwwo567KE3P6RYAHw9py3LAWdKmG2aYx",
  "key33": "3Wb1M7SXpv85chXEzAwCPD8Ne7nyK3fqMuGhvgQgoz78Ym4skcHoipp3sMANmL88Bqj2qk9yxeq7u9tfgq6KEWuP",
  "key34": "4XkwtHSQ3Geso79YbzeywgG5V1CxqSBEaBRrG5mBTKY4N5NYsEuGHUztc4nrzxtj9cwkmm5YTVRFctZjx4S6yBEo",
  "key35": "2ePJoRFYdH7mt4KCzMixeYJ4gmqTy71JaXnz9xr2QC4w3E4QvEvABjMfbdQMQ2dcNSPqKxhFTwy5JkgkWV6JqPEK",
  "key36": "2UQBJGwSbXp5ghdSG4EeyexNAa4dF95Puz619VW9TzHxCoUU6yHm1kRkikFZz9oMPn7CmAmj65ZyWcvvf3hyBa8v",
  "key37": "HSJgXVqhjd21MixPoFmo4u2uVWU8D1fYgcZLu9CawnXepmQVbrKY2cgCsx3ZMxd3CefMrbejeBG3xgWqthPoLfu",
  "key38": "22ejHhuoX8iAkurgXUUzVdG1e9UhMZmrYW5KnHArPHDfxVu9cwAsMZBKgKnTvKmHoDzru8SdpxwLRHR1MwJQwW5k"
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

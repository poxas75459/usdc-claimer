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
    "nwdq5cL3epvadiSM5QKZv6dFGGf8Mj78SNHCQ1cMm5CccZPFK9GEmGDBye4p7gSsmuPVJd3jEiP7UVK2ebqcJpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWc2dbFjf7rJ3pvrsoh3H9p81fgSCux43t7DPUQwDFc6dGkp4SKd4zLayhnqhGgMRwajhkLqKiDqHPAwyS48N8T",
  "key1": "2q5DeNmM4XaRGEtk2jGiPUHgPmrDuHaFurTKmg1yV7i6sKKjCUboYDuS29zWGPxnUL6QnWBmo7GCRiNRLqpigFjN",
  "key2": "4AvTndyTSnaDTycoeM8o65suizBv3FQrfEG8GG5z6V6QkCEkfYyTXVxKqKqBpTkHMqLi9ekdfaGLKmh8AnQsZjMy",
  "key3": "4eA5ETu7QiAmAziacdKG9uAfWWNF9FNMGuxxLonrD5GLxTE6QJ6hcMW2czS3vofpgQERcLMvReG82yAPxqSsBFKs",
  "key4": "2XfFvKRaU18vwV1cvDnqYUFvqNJTnbMpusjpfPiawMYt8LfVcZM6qTmVLTGkuV3Zgmrv4MW8DUbU9jSMtaabbaMw",
  "key5": "26iyHXhqa3sWjD1x5btvKd5TjMKJUZB63rntRqX27qFeh1woutwc2dK4huA1qXKJ1iepvBiR9SgDGT3SwVitSB7Q",
  "key6": "5yMckGEys4HYKH38xub4CaVTkdHXamAMt7Aw3bF5JfwhK9RhLnFUzxHNp3HYK9SESaJjvvnKg5cbkqdjLhnmoidy",
  "key7": "2qdMZS4zMookbQXdW2LrxEkZG8M97DPAkzxMCYdNDWyMSGou4hvfoY3oqyUWcgYUL1hDj8WqmrCa95samU3DpXRg",
  "key8": "3YqvjT1XWeBm9uypAVpbFbXEe6znj9AQj3EeARBodAXMkz6V2AX9zRTcNNZEuoVYdtdryXa4NiQB4Jb9JQerF5tR",
  "key9": "2p9QzFcZ1NGSwqkPwZ3D3RL5s5HXo7wvarok2k13k1oqJTeAtdFQAotVnpyLj9znay83sHmu94AjuimdmxSnusbf",
  "key10": "47QxyuUrpXdBW7gG6Gxw2G5G6bH3VgHPWiHqGf5Hy3jh3YmTis3TtvTNceo5UwK8Fx5MvFY742kSTQgUhU9iQMQc",
  "key11": "5aTRK8CFt7gBKCQ8EHpWXCCxGQbbMFGAWa7854S6Ha1Xxut4Rg4UshhQGvN8g3fHeUP6jYcbzAUSSJMxG5CaHPvg",
  "key12": "aGMUJhzPE687WAY379eRd8ac4ukuuTFpTT5uMJRxoe4ZFTTo7wtrTG8NBa5m4nGtBuCnC2U5ef2RdPPhm3TiHbz",
  "key13": "SfiXrFtJ38LYSvL9VZ54Cu6wyvGATCxwf5szsZvxqrhZFENX8YwLhRkxtzbc7Xwf6VfQ7TscesekCTKatWhhKD4",
  "key14": "38HA12XHSB9rNmKzVozcob7yWuSsFEJHBpaaW9MYbAajNWtGnNJXbndqEqa9Ro6e9L3AmZAJC7vpYe1BW777yVuo",
  "key15": "aBnGh8RjJ69NkWjWBzYc1PaL2ApiNpdXtJ3dhC16raizwCRqddkSVb8kCL1pcMbzmCqxveyuDVFDPZoesTSj6zk",
  "key16": "4Qto1AQTNKg4U6kmdB8cMzu2EvbSxEks6vtnavmfcamDP6GAHUfrVyeNMxi448eiBTwepsA45LiQp7FyrfXzZUBt",
  "key17": "3YRh3FWWerfpttTNMQupgdbncDoYYJVvokiYXvKbVsQuj44Ghy1LgRA4M1knG7x8TQeiMNL8pdEAFEdRbNvDFbAz",
  "key18": "23d9EfssiWeBg8QWf4fDxTg3xV1Hn6rvCmHuRZuoD74gT8kP132W73FBj8p8Vd7EVp686NtCF6frq4mfSJXEAXzw",
  "key19": "4g1Ht7bNUvquL1uhiYth6emXwAb16HeVVj4h8YekVj4rPXeEAe83FwnC8YtDZsXrSwRxNGGehNdC6v7nJETfjw9s",
  "key20": "4x5MK7WvqALVA5dKtYmiM9DX6tjhMiP9rY9Ua3Sas7AtFZvyZwwXDLcaEW82Jc64x2XkBnyNodBygiKXwnhSjLLK",
  "key21": "3EkYFFAaccR2JvxqdT2VRmj3mWSCrBxJgof3RBAQFTLz7CsisZfdd917SUVsf6vrSxHnzi61UGMtg4WDvQ3qhe7y",
  "key22": "kJSfrhZ2oD3hGpLP652VcpkRmNFde9QuCtTbaHnaj6xUQLCvTwhLDMr2zTtbyom6fm9HjXYSuh383LGSxUwy2zJ",
  "key23": "3v5wCXAeWogfSCJ8ND7faZtsoe6859uo1mAnq9wLQDgMjcXc2gXfTfeYXVja6f6aD3Yr8ThUqQ8vVhQ96iAnjHSX",
  "key24": "3pk2ny9mK34DRR7azYyR2prPi2TJXX1BSxoBfwzGNXc1cThVRk95VHqECqxd8E9UH6kHsiRAn6B6KiS8i6JMAkRK",
  "key25": "3M2f1mz2xGijzykGnjSM3v3yCbXpx2rgaycwFJNR2XaUSCu2gugWbS6G6iFBLxtdcfpM4Qbsu5jgUsDzL7MRvafw",
  "key26": "4J4ti4Axg33jvbikt9htq5EKwjjfNBodZ7hrnjHFs78rq13sRQ4tMs82cYQvG568seUUqXiJGkzrPg97bCnSG7nA",
  "key27": "z22f7HaSw35LRDjExvbEq8GjWV8Kdw5QKULzzDCLRq5uAAjq5zWabK6uUWbPU12tbgD46QQGimznVnRe2SqJFaE",
  "key28": "yAgkbt8bXkzmhyMVZQS8BM4SdDUhnqHeP6JDZVWCvxr8ZvPDr3Wn64pbJfjwgxzSB5j9VJ96FR7shgPmBTNUKk4",
  "key29": "3owj6dwydyKqsH3WBYtgwfkcC4ws5DMcQBgVo7eAQo4k5CFJnHMMVUiJ6BEkLZFkRsFehUHr4hHeUEJUiYJKVbV1",
  "key30": "5SWaCnoa3YBvgxgHgtEuZ1nSUTV2fS3mqvZ9X8BfUZ6aR3g7p7PsXpSGCXfb9XmGpxcEDhd7h9mjUfjpS5rQqji3",
  "key31": "jLKoK3G3r9KpSyVtURawus5iigq4x28FqQcNMy8hZxmgHNtPehTfrYxck3p7zXFAKCnTXG4XHQ8CRwNR548g6NN",
  "key32": "5BaMgUVwYgSXJM4J3bPWR3p6UcgYoJFcbRauaedax9ckJFQgHBD8AwDW5aJ2K1bvFcxw6XSYwVUGPvmSYXsAq4yX",
  "key33": "E8j2ecm27EDJ8f9r3nuW7N69sr4yHwBq34yCdqw7RUDqXtVbJ1x3zkvNoeJ2zQwc9k2tVCSpRQXCpJvP52iniLz",
  "key34": "2AhZ15dZTwyCp6GCqaz8NByCBNj7n9Uo3iKHA17fiZmCeB9PJhq7fExheBDZ7ts5Fob3QyihbEUEqzPoaxHPHQp8",
  "key35": "koRRDiBekku1L4SLmiouEUbRF5Kccv8BtWY6FPao1xhQEPd4yXSzajFB6cVoCo3tnuydzsdzDKxAY8iL7oiqfhj",
  "key36": "2p3iXnwHEL6T3fPDkeWPNFf8XQi9kkenDvUgY2F7sGpgDdWjj5AX5gjCCA92ePzqGkgXhpitsBXtcrvrKgYSA8b"
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

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
    "5wDy2wPuK4WNdMkyyogEYzVAqTp5iERwTbGnxM4mHmjwaGtWHYRUMo2Yiku2hsQuiPhADTCxgGsmEvnXiNdY1SQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uqp9ZPCCwTeUpmy6CwZNDbFNqfyTUq7JAhuzGxEETwGd32TimzjDqBh5fTqdm14Jh69tFZ8LCpyaT7r2Sy3os7",
  "key1": "3RHoG2Kr7BsonWANz53fPRHw7ES9UvEDr9ggtzELQK4dCJzSGFvk4msWA5ZuHqBpyuLa9xC9Eb8bNsWiC3ex6fQv",
  "key2": "2NYmoCYAtQJJqTJq8QvmrcmdYmL8bfqJEjCT1WSm3q5TcGgZofM3YN1A8tXHJyVfhzujkf2raAiM9FYZ1B9CGLtr",
  "key3": "3iRjXEyvbgxFP6SEVzq9fHWWxpwstY5ktfAVViytf33CxzD2b2JNSkQ9bpzn7y1FZ6YCnkQpMZXcd7jhZPitD1TQ",
  "key4": "3zbp6tAdR7e8gPKtgUFDRuHTMtCms3aXxecR2BrFYaQbK6xRttzL5dyeaHaaBRb9ad18xFtmeWcZy6r5baZrwL8W",
  "key5": "4BTG6R9E39KJQ4oiwyrK3nZZGdhhtAchuGFYc4ScxrvmMX5FCYaoxNc5xtF3XMXoMzuzq7zPsVpvpToCRDPmh2mq",
  "key6": "3MBDj8P4BrGoU12fWAKXcxtMynfExy28RS4B7GA8187e1o3ZUMtYcKbrseV3SCcyKLyQ54WGNLMZhiw4qDdTeJkD",
  "key7": "3DXpyS1TeBAEhM2jMV3hKjFqAoAxQNJk2WQSaC4Rc2XBPrHb1hMK8GDCLdK74sw7imVj7qLu8DhVYhDtBssEdijL",
  "key8": "5idJ9n5BhxLytMDqytmqjPJ8cAQPmJbgKvRAXdqecSRsAAtq7zNTRXg1roAo4mMzLpdrU5V3hYWi9termcQwkvFG",
  "key9": "5Gs8H4F5nnoZjtSC2grrHnfVv1JwDfVdRBrKgXV9KEznTDj2DWeszMfGkNdRH9SEwHBqvaqZrimBQ3o9EuHJSh9T",
  "key10": "3tavw3SjmCufZiHrEgoVo4MWM3sC4q6QWv7WJA82VHsHmcRm4CV5hJfom6AHRcgD54bvWAEjd5eog6xwBjDrs7Jv",
  "key11": "5gzHS3MtF96nHTxBxxw3jmw1ZzBmRqB7tj62RoskGkaNNsVWR8L1jzC32oGY9qiLrkHQVhSmwoNLvRrmjWf1UoMi",
  "key12": "2Q45FCZrJBxVjbkKPxnFUb7WSPTzBbUGDvkoUWjRHf34Ai9gEUZ1RzAhREoJYEnzwS2XR8cLrdyL5Ywj5mkZHwSG",
  "key13": "67V6NJEMiQo1ZyHPQgCq1EDKpQ6X5BaWYmCHu1GzwGmhLTbSXFwSuqteHGsHWrZMNJXSifiyNFEX9FT6CcRxoeP2",
  "key14": "NGMYCiYdnUvCJessdmVH1d4vLAsFHuhAbE9kcWthikam4yQA22nWqfSygb9k3m38LLwQoujboCgGzfLEGJQmN3q",
  "key15": "5p9V3JNiVD77uUtNk7aTV7Zhgv2bzKVYN7W7QFGSECVocz587UCefpqUcw8nFJt1DxpqBpVGmcwFgHLwY8XCfG7f",
  "key16": "Ag4edoQJP6ZSPPxBhfPeMPLsckzNhM2j7Wny43kVaKFeFA4ohnkhWufGNYVSc2c6tyFctPcyHgK3JK78kv5CBdr",
  "key17": "3gHeohV5dmsQGy2SGYxCkMakZUDWzRSwucycG9KViJNRnvGHkr8wMu8dsJfTQMEeuvRVJABAs7p7UPGbbiGuW6sM",
  "key18": "3cqpFp5eTN8yn8pzp1ZQA9rpKuiH3JdZ5XHL5JKCfskP1QXcBVZT1487iRqe3XwHBanrYA36eNKYGV7dVNkTP4Qk",
  "key19": "42Hv1Dgkm8zM4mJaWS7pNuPQkZ7x3oFrk8nLmZWVDTnC6QSM4sknrexu5B6kTJ6AAgzQJxbnywJpuf8onMKx4ksS",
  "key20": "9ZtGTUiH7iQCHiq7PhBaFPDim8M5xvvoVfaoSKWUHtoDqu2HKgGP3rsCeNd23fgz4RhMMPHXuekjtJFXejnCAUQ",
  "key21": "482M8C1FbQbioAyT3zXzqxgFgU77RUDDe8bdw2tpsawR5js6fnNJaeTCSvxd9Z4Fe9qD2e2b9WKGJS5qgaE7qgVs",
  "key22": "2CzcPgSDzDSthoTr2jog3dcu8e24HyXWNBHzEfccuytaWNpCnGTTWUWq5s2Tj2M5NuJgsMMFMHMYmQ5J6PSiSsLg",
  "key23": "5cD1EQY3vqQtsJH8wFKRj6VcF3guqeYANCfh67c1xvMC4ALYvFqSNVJgxbCs3WCSdk3APaYKNXWdnoc4ahWGHrkS",
  "key24": "2fyGMuwNnvKCBqL4GLvudg9HTXUmBVAcPM4aPjevKfBaooy3SMSUzYh925GpzSREgR8UnReSCMWaT7hKbmKj3H3U",
  "key25": "ZHLc6KggZhnQxE55iHvsNCHkb2VJfRk9r9G9U1SJAjfBRM8xYsffCVYU1zER9Su89vbC6F7tY84gdetn3AzEJRL",
  "key26": "4tcUqQUPajoKGbmuBsz3wZ4NgwV3RMQZhpzsSnJTZyj6WqEf3zcUs2ZvFaB9Xs4tkR7QkmJcuekipMRWTfSEQbV4",
  "key27": "4YTiGqvrbQaKc1TcL5MiFHNW2e9A5JGY1EckYntTkLU3cKoWnExV93LtcXYyhJxspGihY3y1CbHBmUStDaWzHmtn",
  "key28": "3JkUrwcHJaqSEL6cKFYmvpHPHVr2gq9SxzMpiaqfwmkJw731KYisWzzCafWkcCAFVkRh8Rqi8K8CdPpg453kVWiG",
  "key29": "4TGBG2SjHYdTAj3VGdgz5ZJppt7WkNqcjwUoy6atSNNBK84d1GQpa2icKj2YaCekvadsSMsdZGK3KnHU9dEGtYm4",
  "key30": "2btAq1vXtgF2L8wXX2zUXHm5H1ympRyCCdqbJcSM4HetQTpAB4t5NaoXGW3Cagi3QyoUKnMTHiQrKxzUr9Wd8oWA",
  "key31": "5GfQJi2efKeUeqnd3dmzTetH2ZzYhVJBMGwS62DPrvahrgrPmyqm3CLDoysc42AoKY5kzUoSLqoQdj9NQiiMw11a",
  "key32": "3aAzWVfKYvFG566bkC9jQXaoZBFPAV6p2wzWZKGAWVfPmRbLxrFzq4zgwNfi4UPTsiKChw4xMoBqeGB46zd7DRb7",
  "key33": "49tVsx7eHfcmgGRtJvzMPAkmvvVXwKJZryiQSy2phZUGj2N8NmrGUawsmS5k45u5tELqbk1AzV85m1zR1AspWfj3",
  "key34": "5eVAeBUfvjj3Fbd76eSreNgG6qrEfGu6xe12ofe5yvfBQQS3Z7m56iQAnLdm6SMuuDG3aFUkJcUa5c8CthxzStmT",
  "key35": "2fn376Le8of2UkXK5CtuFbzyW9ZyApuxvg7z4Y8CqCYnpQRBE1bQMhpTcYQjPaT4FV6maZgkft38uG1tcmXBa2ar",
  "key36": "5FUajhkrmusdEeFRg25CBXTsEqDydFG589bCAYhKYN5yNRWzfLJJ77czopzXnStfDVMPJoJ3cXM7VFHKHXD8dtjJ",
  "key37": "CTL8PNPa1L26ZkqhPcQL7QyiLShVvANW2GHJts7LRwpKQ9Lsg7VF5cRAEMuJCm1Yab63rmHN7sf6GGQABk69M3C",
  "key38": "2AXDGqzudaWgUXUSCYJbHTsTGp1Y1P5iGWymYvPQJfT1rqhEp2ywK7nKSRAa4AUuFpZQoVnEhzA5JkUsjYybhyDr",
  "key39": "4vAU257eZzfVvtM3DwwQgTqfA523miqWK4pm6qBmbxFc6G2rRqZNDDSEAtWdBcNrRs6zmE3YZH7yHN2Ww37UmHM4"
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

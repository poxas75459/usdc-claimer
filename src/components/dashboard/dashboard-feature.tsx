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
    "2SzkhL8hu8i1NNREzq7jBEjeQRWmTJ8qxzmtD6EbJzzMRgbMvzMzdTjerZz1wQkye5tDYFP82cQZRN4AbK25qEqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGHjrd5YVdeqxpStxuQMr4aWk6qPF7YYcy6o3bA8tKrQycffWbN5ZgKExyr4g7DLrYktvMhSW2dRwhJfoD4nDmJ",
  "key1": "JemDiM719yTDNWuKkcgUGVeTHotXqUPH3vxZKfkxErKrswubkkLzY6Emy9RmSvYiKEbY6329Wtiruxthze3Tnon",
  "key2": "25dgr3tfWoJJxx1RsiGh9RsR7jA1yrAj16V7nvMaD5taZ1JGduUKkS6aQcjSaXqRmHBQK4ofKSx2N6UJX5tXu5pt",
  "key3": "2oAZWcwChZMSi6eHmyuzibyF9cciUJEP5qkyBZzgeo2sxzRdZXAE1niZqf6kcKsZkWzXG5ZkRDDyLw4sAXPjCNQz",
  "key4": "p4nc31KRxQfZrGJugxMzCN4SG9gtzcneiKEVgA3J1Q3N8B2KuyZhN67crwVMoKUjfZhL8tRZCNTiJno8MHfVMmc",
  "key5": "5YohfEP3ybPeZk629hN66Lq7957gsCgLMXvmhy8pLwxku4yRpPnbdU5ZTHEoybVz2a1Y2BTZcyDwBSbcG9HTrZno",
  "key6": "56B7BW5y5oqvLBYCshDoAuRjFqq6bLfjAZpTDEt7db7Ac8oMQdLSNfJmHk2x5cDor5C2ntHXszsnPXst6Jzi4sFs",
  "key7": "6582VMDgwXSWUc4NhmqvtrWBqFk5PRqVthadyRMJ7yhGxUeXBi6pRB347SzqvvmUDKTv9GaVChX1tA2gDw9xohDD",
  "key8": "PadGxAhdEWifEaKcyVDePkrmecnfDWwN6TyKyJuNA5SXYCriECBqZA1jPbQj3bgb9FHKmRoDeK7B7onCnaXyNHx",
  "key9": "4rmxY82mkBcQZTVQHWBAxHScio9HqcubCp2SRNXemoXYuFNDtbYLUw1kLRJeLRWnkoJTCGwkchHtD1w8Mb65ewmq",
  "key10": "LvFKuyyJxoRjSsfYN49e3LVpr5R3LFDFxT9NnZmg1EczcJTirVtVQWmjTsP4nh5vCvb4nc1Ncsn2f1hTgm9AjKk",
  "key11": "3RNXCh2vQqeRwjsSc8arki81BJTEdDjXi96qA9NSH5hXJMePJsP3dr6mHgLobArWZNcJupXB3G4namBqnTPEjzhL",
  "key12": "5F3EcKs1kzpeKD7RujacGA9Db8drqyZRiKAL53UZzQXStv7ok5ekPUrjQGGY3AUhS2cVDWs23HHLMheV3zzNmeWD",
  "key13": "3Kk2BMJ2WSabzHXxftxSyfqS8dABxfGYb2b131GCCEiCtanQsXSGurwxRp7NM1TRuGP5Lo1nYZpPk9dRn4haBXph",
  "key14": "Rgxggj8DBWWELLveYdKggP8JEcDa8uXtn4dZGikWr7imN8ghA3fUdR5ShPLvNwFeXqvLjH3jvCK22fbyScNqboG",
  "key15": "4VEREWhYnsXsmm9HZEuG73GDSKchRHLYGCdTEuA7k14Gaz8qB6D8EcRS73X39ZRANzuxyPEEvcjfRJ9MdjfCPpvA",
  "key16": "3AMYnu637erfSntnJFZKyWh56su3dEhGbXofSzSNyhDU8U4eww7JHvrBtE65vsLzKvXJGyFFmQQvGdnvwbZzeY8w",
  "key17": "3b66TwiFbRBkGahEN5Bw8S4V9FUFVFkXSdv4CSNS35EjUV15PMgcxEkUuTRFLTTpvZgttrtf59LhFREVr5qSenrT",
  "key18": "S3UWJt31H6skukDnmMNXxKMSjXGpA4qvB16NyNbjof32fVXAErrq4DBovzhLXBydefYkXTw5eaZ66EfCb9obZLJ",
  "key19": "3Fvxdf7dQtNzvRTrv5JtYVyivUxEEZKpBDnQyQM2YasUJr8ZQUrjLPisULaPtBjjKaeZPchGt1gK2qKBnWvsbfL7",
  "key20": "5Jmj19AEoXfMZ4CFNCYRohX7oRa2ubqhpSbbFoVHfFgNhoUYuAWS58unhAtcUehu9Vv2AP9Ku3n3DPabbc1Ymd2E",
  "key21": "4N1LjTRgS8ggeSMDFWitgGeM4Tx5SLn5Upo55GW8pmqysFa4fhXUJ2WNcp38DVLvyaGaMtTs9N4L6HEfgjqyf36U",
  "key22": "7SNN2aR8ubxwBAMr7y1YU32qD1ChQ7wAckBhRc4F2WByzNVjAsz9CeTxWf92P13ieo68bhnzD7HxGbth2ZmF1eg",
  "key23": "5oTZpPPVCBg6UEf9cxWWkRuembUhgRhrviGn33smMwFE1pAZ2i886hcn9X8uXoa3DgS9VnypuyHqvpAd8jh6WVZS",
  "key24": "LBQczw7dhrZkmh2ahJKj4G67G7mFr6yJhaiP9zzegEPxVPp2sZSBJK51aZeLranWpxAjGcHLUkBHbwyFVPUsM7N",
  "key25": "44dySkDfwP1tbMqLBVzU8UHmJ4xatzLhUjverVFhwu3AdD3Pz8PmqMGtyV8n2xymGxZUbqBnSyjyNy34sjveUhU6",
  "key26": "3WJqe63UbsqPeDAXYqdVKU3NnyTUggD8NuYdzhpsZNLTbVEMeBQAoGVakzUnviRqDKtrmojgESpei89JCRBLR968",
  "key27": "SXQmvfHLGBcyByoUSUBb8dYs2S1yZ2VVxWSnRtNmudbeiRFngLcGNzjyTbhqhxAURQPGyqM4snz395GVRwEPWXB",
  "key28": "4BvhzHBs4ZA6iPfy68KUmdpHNF3PR2n5EqkCeJ4qfheTFXedFyVW5GoNMdWAEkuRdZDVxueBomb95ZRR6Yze8Pdc",
  "key29": "3txLh57kLTxWAX3zKfWpvGTpcpkWGZh8GfpxMNEjxebWvSwQ62Y1vbukXYLLTazqzTfgZDWvjuqJ8f9Ba58vxvP3",
  "key30": "52F1Jsp2kQvyKBa9XbsKzQEUY1RBBMyrADwEaopcqFicSFpfYGs9PJ1whKm9w1hSzhDa6AfKRKC1pkB2eGsFi5jo",
  "key31": "5g7ZhAG2JdgiyjcJaeJmdV89VLTqPemeMA1TCcvSSEnNqHuQZ5KDKMpdeuWnX9zjveuN65YBDXVxrMhwMw2ZpCYf",
  "key32": "oRPN8yKMwhctC588i8faSjHJcHET8VGAdNJKN7T9qtoViyXiJWXvnD9nHGPXwzTzRqgcvETtNtwYvNXFzraeECw",
  "key33": "4JUvjGc5Vh7V7xdYmQuEfJadKnrpnijD8Pr7z8BQhDCejVriQdiXqcvx71qrMGToYwSsyDjLbq8Sr7wd8TKZuFib",
  "key34": "3DqhnvRyR554PJZX63nWB3jXxPL8itAEnioDqv3m4iKbCBzrjZ649kvE1bVVte3Peuq6ve4hw4UdtxXaZ84VeUBY",
  "key35": "ezRYVyG48KnCAAH2oJ4MmUekvaSHDRNwXht5GsKrvE296YTexx645HfC2C1MZtnpZraf9zvQtSQeHyGQXjk3nuY",
  "key36": "5MDMLZGFncTiLwPJUus6vxadxfFNDs7rTxHGKdN8TRSt6WoofFf5PDdMw2sT5VCYGK8M8mzWUL9WiYDmyC7UkwCf",
  "key37": "3FnmzVK5kmWz3ibYVBukZ2nesCBZFcWLwoVDQbjsYZv9ffToAJufg67g4Gi4Y1cgrB9jZ9o4rTzDavnQ12FSdUzT",
  "key38": "5PQ8t1fvtCRwbir3bkDsYNJoFbTEfjpZunZxptHbvo7ZJ7jZRyFFgdxzyNzcBWJNLvRHRzERSM5JVw3u8yQHSUnj",
  "key39": "2SxshNNb4S6DciHZmH5SS5p2WmZ58MHwSPaTrN1Va2L1RqtZJk5neFYPYbnAGyjVMjyvCMYR1vW5V4iUd7LGCfo6",
  "key40": "4wtAo4jdAWaav1n35DpMSxGJmRAgiW8mMtHjaSC7bHrcc3xcExSAPh2wRoogPb6jzV34iUMu1PtfvqTVwwxKdF7w"
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

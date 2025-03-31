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
    "26dgPgk7LazW2tWBb7Ws39SxF5op3mT7dPbxvQvpNsnSPSx2P6Dd4Es7jvpcWs8uSzqkh8dfU9Xc6ryCqGLXgZEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ih97u8MJzPJ9DY5ei2Uj9Z33venfMJQEhspifFxD5TchHUpM6jBogKNnBuadLZ8p2842QBk765qkZDrS6i7ZEC1",
  "key1": "5x6WKem4nicJpGZiBwNi9kdk2KDpj9ibXXxPHfnk92GCF8ezS6RxzaKULrUgTdBu1Y77TtrGUTGmEs1v1PEZYVS",
  "key2": "5pUrgoWnVi5N4QuRDVz9dj2peZ7DWmNCWAaJ56KwgSWp9PhJPZmi5S9H46ygqbSLZ1kf6ZFjWfX9oXnJRyijoPNU",
  "key3": "5MdLQU12XJTkFibUnuAPDR2mUQP4F9um5vV6suEBrDqd6xWMX4znibiMyZJC83JgkrGSF87ZcXQt7FD3UkSLC95Y",
  "key4": "4ifF3AWLZ7CYrsYcDLqXy5u1owTaW32CMkYCN1qfK6voF5MqxwuEtnkTVxoRNEi76pqAaWxv7dzviCA5S6fgWpiB",
  "key5": "2cKNQFWARJxWymUvz6eM2xL4X5iTo5fkTsC5mnZRW1XySVGwL6Fr5ZUxmrsTo4ryFnbFiH5wDZ8rWenkhDaV9Y4d",
  "key6": "5uUPP2HFEqMBCLjUdELScHFKBDz9MtQygeemRzbtiwSYsTdgfd3iZcyD2ECv3AaQ8HgxU62qxmdegivYFRx8jYjf",
  "key7": "f5LDBDu9TJRjgvhU4KoJSAUXhA6xWYe5NWTUyeLcyCTSEs6MSYJVJDkBvKm1wBgFXDkt7C7XXpAj5AoZnLNtRyC",
  "key8": "3MwhWSH2JR4rjWKVk8WdDwSPqN8Ydfhb4BHgzhJkwYXhQG9GBf3DBHntEqc2xuAkgKCbY2dahWefbYoWnM29qDZH",
  "key9": "4uC27pxB69j35CpyqeE5g1jmdkwayxnav22162joY9X1H7DHRteasrXou4V7Yy2B69hFgoqcmG5jXewH5eoVGfd8",
  "key10": "49wT3e6cWmgQAzLaVrPg4iaM6QhNHwLWS1ZNvdmJJscNozMpdwACGo6sjb71oJSikAEVnY9GVLuCgcMtXi2Jjn2r",
  "key11": "9f265D66zX23x4LN4K85VYHC6ogjNJ3Ebb1hKngxPUTiHDpfXrYb81W2mPxjKbF4h1yxMZDzpfWCPmzuJWwuPY8",
  "key12": "fP4Vro7bSxEFMPqf92nb47MyhUFqPkugo93fcHWisvdDPDQT3ZU52PRNpBjKEo3Kz2N9TfQasBjEahNoM3XxCfK",
  "key13": "39wJD3SLWQHCdwCf3HKyKBRFx53g42VNRT9GBWBUdQ5A3vTrhsbmRmrwL4gR11Hqg92RWYAkDFZpdgozmPgDHUTa",
  "key14": "2D7CXZpHUSoRsTUt2TTsQjjkmEJbBD9BBTfkEgFgwdDf1RRDxE8UQjyFsHTaHZ1ccUQvgXBcxyCMKtqTxeZpnJTr",
  "key15": "YSAfeWQdaX4CY7kPgde9DLnBdFVuBw4UPVUvHBPU5GmQaMgRZhfzxvcfCAKpy2HeQCMFYwvFUpVZeSUw7s2uoFJ",
  "key16": "63Jaa7CCHumXN3hZZjRh6q2MovTTm8Kscbz4pkPnFTa2Z7TTZcQoL5FMCkszHT7TgFJPQTxZkQoCREXSUyRR9QYy",
  "key17": "VNYokqkiNuinpJaTdinCT3nytJKkp7jqu6W1L1xBSpJmaTzKZVqdNgxdzSjMGMunNACkzefZ2tGeAYwnbs5BLJr",
  "key18": "5yCfL7A8jT9rgDVpgZRDDuqjqipTDVxUtd98Lwm1wit3b2xiEhLAvH3aSL8eGdQW4einbJkN14YGqYTkA4Mi3N4K",
  "key19": "4n77htkvHfKMFg7coZMW6HfiKVK1yYXpAAGZYf8MNTaxLwcfYMoDRdScAzwfdCprKB5dhDDn6eCCVmP8VmYgd9vu",
  "key20": "ryyFHvyXPs69myRLCdyw553KH3T5YkKcutd3p5TdSyWtFxUAYGMRpjDmSVVbHZRMR2L5cF6GYWqYZVbEQhzcXKy",
  "key21": "3283ECLwJri1ikf6BwMXxvwXU9GnhkTL4j8K3nExvRgSgBWeikGi84oRmYshudqcwy9wyK2vepWdxQKxWy8p9Z7D",
  "key22": "XtuPcP4p3onfc5f8u3DAKivvEsGSXH8RKcLHHhGq9HHzBDjQEhLZVaKfX13Mf8sEAzDW7C818nm6qw1iKJTYFd3",
  "key23": "5E9zsnkHyJL9k3KBE2eYyU7Ni9U7DVFcPEW3DzQ1NcvYzyQkBBoQj2PN6apBNgKFN4Xn292ZDpyvcZf88PMBhbFC",
  "key24": "5MvXLiUwQw9NdtQhDs2U9cGHpAUicBKW6BhsZAUGieGP9mz6nMQbXoQduYk25cL1tccSzYVWF7CMFyfsUPgua2Py",
  "key25": "yZNGuYivK5c5xnwAJFnpjmUxFxfeprVgSVD5d3Y1yQboUrEAeDz3DbykofERYoQpr4xcRbkgHEQsczB88wg7Exh",
  "key26": "56W5azr49rrWFaAhKuk4HyTCi2ocsS2LnvEeZrMttjqGdEQPxVbZWAz2KvbkUKJCmvv1bCf4uDbPEv5zrmzwYRE8"
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

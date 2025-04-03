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
    "3Vv1HoCHstTcqU2ezmQAFma74DGuyJkB1fZMiVaUFsKwRxpphoUrx6dTuEpDT88Abq7xE9YkRsBULdyvNADPD4HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6kRcF7vJdjkxCMm1DBJFzj1i1MQ4rP1HZwUKbySmaZtEdAx4yF8Uznc9cGMfFMNng3HSkGnhpqvN965CjPVqzp",
  "key1": "5dhm8knejBFXmaak6W17e9aFccqKj9cksDrcfGQyArNi6y9ohvd2KosSVdUWYLNZi5DqJ8vnZNNewL1XJLPHLS8r",
  "key2": "5LCFaMJZSJoLbNqFHLhFtZrAjCWwvxWahUmdzEigBD9oAxqC1Z5wu5dNBbEj5GfnHp5PDLpTAUQ9idpdzS61Y5nm",
  "key3": "3PSxtKxQqDxQpFSFoEKfdjp4aQiXWYmf4qCuLsLpDuKaVESgNWVbAHKqkYEVpxqmdyzGGtSeRqyQbHMzZLBRDijc",
  "key4": "4N25XVX9i1yBAVXYLGrpmWugCLSfXiEk8tdYyPxuS3JovHJicgfJt433DE5bodaZJPvq8e6tmoUbY9Nw37zpDNRr",
  "key5": "3tVajAVZZsBtXrE4UMEaxB8f94JwV6KZjKzHZq55cR9h4i64k6TojnksaKp1RRFwx3f9fW55dx3Cx2gjBy2cbQyS",
  "key6": "2DdZBoReworCTdod8de5mbGnK8URTtQ8MXb3NmVpqKuPRHCptzJXQzYjH1p3q7XHTybjNMi3Nkb1htqdnsbdMgW6",
  "key7": "22LqrWoeeHPfYWk3nov9XTzy1YqapuUpcU9SCNfENQ89gtTtUomgJxRw2vxZdnv5E9LyRH9dNz7YVedXRhWBXfvz",
  "key8": "3VfwkJXsMZfbTUzWtMJY2Lu3btBTFtyS5bZNf1GquEc16JwTpYV3V6J1s1ahEK4HqXxbqykrxFzTNAi4nFmy4UAE",
  "key9": "5S3fHWACXNwEWYfr9v4SUpfpVumbbb6s1LKkjGdxteZwcWktGaftkaKexRCFtYQJBbboSSUK2MtRmgjWnD5Z8CuA",
  "key10": "5XN9WmRLU1zbPZz5cqUy22zLuHnBtXDCZpzmA1aHmsV3ZWtHhksuTffU8GyvsB6wJU9Zh9AtMSkkqrn6FcdtyKYd",
  "key11": "27nyJBvKujEaLdqTFiULYGyBaNuet1NAygukoSycyA7pvLrVU5QtDJghnk4ypLCC4MngzNyBBchgDJkuLj9WN6YD",
  "key12": "2WkCtyFYWt3tpBQggkGxqdsSZkE7jb9ZTZdRU5ExQvSWR7UkLakF39w6hwgvtijPociEABrvJNo1NHYsNNzXCuhG",
  "key13": "6726Mz7rDsFrskaHCDqKKHivwLAd4FRQ5yCJwkvvdRrhwLirdf2BZU94B3rY8Qddj4yBrBt75bPqTYdczmsGRLEi",
  "key14": "CSPjgv9yoF1opVbsMJbeMNWfnMqf16b8XeJEECdmceyQEs36p3eC9EpxD6W8xmDgUSr7XV4QyViAPixj4WQKyrr",
  "key15": "MmA7j587ehf8x7q2LAhDtatUp6f2Mv7TveNduiwD1Bh1GKa6GhbogHrjgEwG8ZSDF8oVdqqhxySmsW9TgkWwQtw",
  "key16": "3uVLHEM9miDnYBwisWWUXZQeAJjqLo62ttzuYDyFwPsHnyCXbSZw3TJaRWcCzoJerjkNg7E9dEEXUfMjuqjNzMsD",
  "key17": "2EmkTGPUSdgsJgDuTzCFxG7g6Y3rAV9jXYmrx65EPakENECNtRi1VeSNmMv5RivMEYXD3U9BoBiwfQZaxJanLmv",
  "key18": "64VATMHrMsxkBEcaNJFK1TyTEjEnUJGbfXY4D2juxL8KJkN7EcGmym5edFhRL18M1h1CgjFDWs1ef9VrpW9KJtqc",
  "key19": "4Q38Wv1Hz5uW4RKiFz6LKBUh2aV9u4KgZsWavnbupsQSvL4zZmGb89unZ98A9ZJ6yCoVUX7Q48d2PQgFxWRVXjkM",
  "key20": "4TffUyoN36CJm3qqnYs7FngCYy2qFqGv1BuhiwVaXfbmadn7xgANNoRZfky4ebyCUEkc8kxxeA5ijcPYdAfpfWpG",
  "key21": "4YFKHyk2yMHWNKc6rJdpCQ5Y4tPw5VQeFgxTpzCcvBVL2bTNkAUKSn8sKUtQPFWcouqpYsEgXZDEg2cCc4YUbbd7",
  "key22": "2LNwDtkRTFsL6j9BYdiS61P3rgbh72UnEB3nwmY2bDyw7n7V7hzf568MVU4W1ag6HzuzogSj5SjCcwn65YpeuJ9h",
  "key23": "3PT9Cbm6SHYNKdcjBFFsWk7iZKerW8w87KgpKspUffWTSK3aSiy6TWBuUFwwwvvmVmT81dkkinCwXS9YuWP8WvXJ",
  "key24": "5ctyHVRxrn7QjrYN69shrsN4ueRkHrSW7dApUg8pd6QyCLWhhVhuVth9atweHaqfDcJ2vYpwzEZEFwXBg1kSVQdV",
  "key25": "4iyTe24GhFDGomkfZJ1wUgcPmbaxXW6PKDzmavK759BzWEH6fWnxeNGLLCp7FR2u9CK9xoMxykMt9SG1eQPtCg65",
  "key26": "4qG5Zevao6vLDrHZpUrxYCUVLGZJq5vJwBnGemfuzYnXzRTGW2srQCRjGEy57EC1rqR74PePpKARDZRN5egSkk7k",
  "key27": "eGXBRhrj1JbnzFd29cUjtHjEMU4ZJzCTQxaWXFhybbef6AGJdTVBcEfzJFgQDQQb1VoDYvxCmQxhqi66ap4nkuL",
  "key28": "2U6AcHhXZ7JNBsEsnw73YFV5HLgaTebaqqamGdDho5Ly5GizTScALHdcjS8brnd9ohHC3paeYU95AjSBUKHdPQdw",
  "key29": "3badDZjbmjNipvjo5rMAycGWsxZJvhui8viXBu6nyjYWNvE2Vn6pmKio4y55smEAbM6UsMCQN7SKrear7DE52JE",
  "key30": "Cr8JvL6BdRK9CSXwsCxoJeFk4v1RefcYE3zKMrQkdnALSsGWVLLWSyzHgz97AechwZDDtzdstZt5TrnLj32xtJx"
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

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
    "4yH7LY4XCctrkAeZK9t5px6FtJKJXq51tqZQitXqQBqCpVq6zM6PowPePgs6WiAzzf3XLtnJRF1CFafW8pMnmB9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N41axrxycSGKfYiVFQ67NBHV81GBWLJBhLTf3FBEHQxafqpEu6irzH9XQjszTwWfi54dHZC33KoLZTyUz3VJSz6",
  "key1": "2uvPU3368pbHCfbzEELpAnU6j1XV3NoiDge54doZCGFwySX5j5CznuFESfQjrCyS1Mf1TDZ2djiiA4RiNkbhDyDP",
  "key2": "5DXx2E7AGWSZEryRi259bSFpGwzeiW6BzyowNdznTczD8Ui5q4dxPv55euTDu9kEHiweB13jepNuWyTtcyhnQRRd",
  "key3": "5bTZjzV696CR4CvTBgRTXn2shGApeEsXEPgDgBUvXVaUqd1zBjPjzdi6RvHb13yifebtyMUYJQiQz3zsyT6baYHM",
  "key4": "57QdWDqMbS74JoPkULFZmhNyYT1THCvK5JyYWYVNUKq8s5WunExCrmrKYbMxQh4u6P3m4WiGqCVbdrXQ93kjCZE7",
  "key5": "4inpbWS694aGNmfvGCLFDettgS8PkSAq94S1SEA9ByEvYii1Mta4nASeietmnTiLh6M143y5pM2ndkUJhfnAEQXp",
  "key6": "kqLxyfbrRXTog1SbRVRpxPKN7mTrR6TKogjEbEKpLSFmNRYbgDTa4Adt7Bo1nXhnR7BkHMQSWn6z7xgD8bE1x5u",
  "key7": "4jBk7SjaiPZNe5jcobxMdo4rK9LLjUugY3YNTwKDUkU8mz8k4Ce4YDVYqwN1bsiZ1xnDizuAKRv6HBaqhnGnc7jk",
  "key8": "2U9EpiZ27QV9PtcUiLC7SCLZiomXXmkWNZwXUDur1VAJZt7AwwrHyvnBuCcVDQsdpPtmuAUn5uv4uqS2VxgHGKn3",
  "key9": "2Fsc9dHPkxKG3Tac3EVmpdZrExAa4jMUWekq5gzXdF48yfQv7x63qpaubvMGcF8XTETbW1y1PhJ1E1q7JaZW3vuB",
  "key10": "3x5ToKaoLwNFdrjxiLB8t9rsU2UhhGU44tcYJ3Zs2j9XfvvcEWaVnZ1TbSUzvLj88dYF9wgqdYonAW8vietncSXW",
  "key11": "57B68HxtTJJKTSLgNvc4qgKzELAHKdoQU2VtxHqhQqkJtv9LKrGLcgdyogyzeRwpVmT8YSaB9tUNrF6Vnoj5dcev",
  "key12": "Mrx9yZwZg4FxQU5va2v46Z9HAGSe9kDkqcWBviif9pYQ9wsGkM7C7UXKg3mbpojNVuHoLG9zaAoQPijUGVrrp51",
  "key13": "grhDPUHppE2zPMtDrW6WKdbZrABHiXFtHGxgt7A4fWcLLTtnSXQez7otpf4rU769QC2gHLBWyG8tJELWXQbrrdP",
  "key14": "2nGUXxNSGAyLvhmck89bn5pvSEW8SHtHX9haCaCpkG7dCvtAsM8nsYJRtPE85GWy39vdkyZ6LR6ryRGMW2f7m2yY",
  "key15": "4ES3KnLfSi6XkbnXCEHuGB1g6WJM2ko4eDUD8LMw2kGcrez4DSc4hfW4rpHCgxgJFd96ihoxRVX6tHSFC4xGUS2",
  "key16": "Xy367wY67ddDahLSyGkmWdTrdLLx3p8M2mK8zHfx33CE2gRfqb43U6W4vZY5iKvZnNUgSKQgp3dc4F7iJeqPu7B",
  "key17": "3DtqQkTvuYA5PHyB2yMeEMcgSEJk2rTyhag8uogd7fH14NVSNhVvp57h7ZCoouKjEXTbfi3ABmr1G36kTyg5aqnD",
  "key18": "QxjgCPnWGpXgZeAzZjEZvtE2mi75qdZxctt6p3Fgf8Kmp7a9bvWArM42V8g8tudXoWnUk6rTnH7nucuZTroP9Yy",
  "key19": "2zjfTcE2DrFBLwW8UEZBWrVqgvq5EfCFFCjqxLDjESSxF6c1feQLpmwkUJDgt4Fywj9Xae9VsAQKUVUa2q8YLE2G",
  "key20": "54pEMmgXDe9rUKzxwDRqaw59suteJBu9mErQ1NcovTDLVK123JEMcjVck2KrBUqmgGGLo6jxj1rvfDNPz6ATN7r3",
  "key21": "48DpVMi4kLzdNNbk8WYi17cZR7fpYoChVkVtrFS4iWhqNKvxF5JkYBkKSAcRcECvYqLdtsJhLwvF8CREq7qWY8gs",
  "key22": "cej8ksCWpjzgHnyBLFEbnKo7YVfDcBL48jaW9KmubzktXcPXzrMzYPmPxQoth5ujQVN3vnHQ8MCrPorrGpqtWjq",
  "key23": "2Y2NTCafvmUuZtgeLq2wpWXbszxvEpoRVcrBVJGzu1PwmK9VRNAi4XoiqV2HApTdUpwnnxHMCWhFxKmZdaiHQwx5",
  "key24": "4ymkNnydtnr3nnocBMo3TsjEsM7GaRnF7hLtpGXR1G6R2twcFwAzB8ihLaDgB5C5VnkiPgD2miFiY8RJcbnJsZFa",
  "key25": "24w3R2EuHa1eVoMBf6HxHZNabuYgxALqxwN9PZNAUyZACiF7PSdbmEbeGEane6eNMiQ5oTvhCSfmErJb6JTqj3EX",
  "key26": "n4GXYgxeRvf7nzochKdcxuvs3fF2u7stN127YsF2L4n8SBNZg6KiJLN9qxzvYWNyZUCMcTXabxkWUma3zZTSxRv",
  "key27": "2BwaCS32h7e6GFwZrvxBxZjkVK71pkRajWXyHGwSAF2ANYErzXtnGPbevCs5UJKNwptkSjZW2U8D48qksQyhv1u5",
  "key28": "4DMB7kteJvfLmD6NhM5cHSKyawTa8ypEPnrcxWoccWAh3sEZ7uehyNmaXUWeq2s4khoDA6ecFVzuYxzNYLZT3B8Z",
  "key29": "5gDudzh5EfuCtRdtHHVk5zec4Lmu9REJdrQofh79BR6UG9upDSShCKLZG5bsEHW3RYVihogxnSpMadg1wMXCUCFu",
  "key30": "2fd4fd6pduTAGYg2h7otz9LjEN3oHsUsscPE4xKKxAeD2kZZVhKcioUvsYYmoeRBrPBe3YWP5PsnArrpXDQEKTYd",
  "key31": "2zvtFX8Rz7GsJM4ft87oMttMFtbaSCasmpikzbZiP7EZ9JzWwhLh9FjphtRAui46wjMNQRCeDB2fSPZGhqMmxUDx",
  "key32": "3t5GhbFZSo85WotjCE7mfvDUYvZ4or77zGKhRMdrD1Q4noe7J9nJY7WXFy186BoMKaRVg5NmauMcauCCMS1vezpW",
  "key33": "2DBYPnx3RcT9zTFyV32A7qCZ8MDXjmea1nX3ssxQiPibADR2A2ioBLbbPXSjvAmPzNpMXDyhapEPK9tkdTo8fZWB"
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

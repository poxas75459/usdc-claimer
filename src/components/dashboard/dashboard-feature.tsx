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
    "4RUsVfb8hsPeVYpfgJJfX5N4scgnTb2SWYemLuacyFYVPvmSctcSKFvXiqG35NvuNz8YLC8gHRiFXBcUJSbdvuiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3FJUUiMZySjDUx5yaXEvakrTphHhuJ1i7JRUDMDXoTchcZ6XJ21SiXaqKMX4btpPWFSCvKxjdgHoPzoUCNDsob",
  "key1": "jumH4b3uqGcNAorGz7LhM6pEpe2yFHL35eBsn7f5Y4VkuFqDxNEEvHrgrVeP7VTrWfWCtaFEhfEJeYby5Y4Qwoz",
  "key2": "5LwtwnmqmvQzX71Coh9kSgvQDUPb4oWd41H6UJv8WvfZGL3ZNRYxKkfqFiLQFju3tk896sPusFsvhGPJnswn2xFF",
  "key3": "vb6V6gXyKVhEMbAPP8ivLtdiJwA7byMeu874KKqSbjGDfW5ZGbQUvVfbQQL8qzpxpy7QPo2RiV8zgVh4k34t55g",
  "key4": "4DkcXEECW3M5r7woBdj5AaVNsFR1prkMwVNvpxN4BkHR46zFeLsj85ExSXTC82zVvgzU16aN4A8tE5RSLkVWsge9",
  "key5": "5xRc2WmseAGbEByFcFHKr4jRKSU82m49svM5sjnccapXWoFQXEPB3kRaMMUpGemCBiQq43LTsAwxBAdh4iS1oE5f",
  "key6": "5nWjws9CjC6LjrK1RJ4msFNnd9NZPPFm7TKpELCBSCtx1zCJhPm6WizNkwzmwX1MNpFjUpCGdKgzyYjFQKeF3Abz",
  "key7": "2zVF3D8RXtgJbud4rtYaQ53fDwDfr2nEM2rDAtPnaALLiGS5g5WU4frkzZpqXpuCWtKYUkyU35xRbZcfMr3hnNyB",
  "key8": "42M4iSzBmnEKPMLShyP4Ws1VdqS3UmGT9wMDrn4TCoEJoAfWEPG4hE2SVHd3Mk6VPvMgUxSEpKQb6mZwGzrir48L",
  "key9": "5BXjq4cHWY3ATw16PawTVqKT1R3FgjXbw2MLufDz42HLNbDp3idCgieZ14tmYYNCgaeAmc9XMtdWK81RRXAFjpEN",
  "key10": "3BLJvwAT7bTkvzgvMb1wURTN5TZG726UYx5efHK1G7k1VetDz9ca999q7bojizeubQnQpc6ryhENwW3YGFFoUWZZ",
  "key11": "3d4CCPJMaUnPVpMphwveYfwE5Tjm7WeBwdJZdYCTmaEk2WMdkaGdpH6r1UhuiD8p5G79y96tUGaFiXVC1XDPjpDg",
  "key12": "3KoDn21Sxk28bAzwQeghC9o3xXYGjbm2TwkFeVjrsjeugKZE1ZtT7xN6uJhRcrtanuC4vwecfWdEDgvyy25tFM7Y",
  "key13": "3upAGbH2Qvskta24rHYGBoC1NxXr5E4jcL2ZHY5quM7xwLD345Bj2u3RfTfWeB9Y3vZAsyPigb1U1d1cCpheydFN",
  "key14": "HxwRQtKs6Pesd2ukN3hNkN3jQMC2Yd56hKxE524i37qPtkSjPH9BKgLy5agUcyVWkwyuPNsPgKhN7wMMcJhfiY9",
  "key15": "3HMc8AKp7cuHujpg96ejHKSeciagB49kJfXb6ZJzmzAnyJyVuFDBtPCANdkopdtLAGGJg1oii97Ze6E3JRjPRMeA",
  "key16": "sxJbo4mJheSbz9ViGy3TteknjmBu2AtmfLnbwBxUHAgqMYJx1CeG9p7g277WKt45iK34CZwSatHQpBgv1VcDb22",
  "key17": "3N1CFXfCrGNNwzWbc3A9iyU5fsw6u1v8a3rz4KXrRQpiSzZCPbA9YwJtHAXcPUxTjdrE4PgqHPTycQwZBPWzuqtb",
  "key18": "3ajYZ6GzTkhBVkwkrY6m5DT9DuhpE8Lca8xX4UxnJk2LYG6cYc25aFEnRtZBV27zjGm8LKoeE19YNr2cpUXkM1mJ",
  "key19": "23w5KTRGhuCxg4ZmEnETnmeC6jWunTTUnsc5o1LZhRSfVPLkRTc3y8NNsWgiRay8fAhUK1X6e1UvsBJxx9bYURc1",
  "key20": "565B8A94BXEkjhEY2F33BgiSTorpm9iaHicnxemNbR3vGNR5FrKPv4UDeyoHFtW7poEuMFCuHPr9oaUQsCNUwSHF",
  "key21": "35b6aHtMZR68kxvHeAjHY9LjtKvg8m1u9yGfJN34qnVUGZfMHB9MWAvHTYbnzVSRbaifBSm9B4a1Gkdhp5UeqEQh",
  "key22": "5RTraPVddti93dUtL42gBMHDQuJjrxJ17Dc5ngeedrNpSyZdH51erTdqN9KrAycmLzAph2q9Px13sN2rt7k4RZR7",
  "key23": "4cqRHwhEgoEPJkxUzBja9N4H39QywK5i9bqcZixtL8K96WLZK361H6ZK1oYsjoJ2wzof3mRhzpPPF5XqQb2gCUFb",
  "key24": "drvKBiH8Es6CnVM18ZpgCSGhtssPETs3yCH4o2RXnzN5dDEr4CJv4Eieb8PmA5RgZ7MSvC9oA39YsVZ6kzBF1SM",
  "key25": "4xqcoYzBXwrhKPsMo9fyZGaCX4K3nLV1NCzRFq6UYhag68ZPPZnmdB3AqcngwXVh7yGrBqdn753soVqnWRd7cenf",
  "key26": "3MiWJymUNTq6dJ4hPKXjpersXD7Gg3y9D3EWqdvytEuhyUjBB4VYGsZrzezbaq5V3jbke1t148qHGQZwjk1KNfcn",
  "key27": "qpV6CkTLU8YADTcymJsQrsUdK3tG2GyduvVzeREVdRCnqQFfXdn1LQiRp1w1aWYVSCBwWB5fdf43JGCCibww2zD",
  "key28": "3g1fzqmTbzZcop6h15WtrpFyFSUy9az4hMApSHEpUUTwzX9ogekLdr9rttaESTaXK76ewBjahaQbt79uvNuFWT4s",
  "key29": "3WFjZg8iWGmSMHETBvdkdtHfNQtYkX2DJpCpXgWES1d1ZZqiPpxt2YaNseDLd7QAk8oz4aqnypz7pBpvLeFPf9WB",
  "key30": "3hc41DZR5n3tQgmegFFCRwZTwoBYV3qckkfzjZF7bfT1vTyf8aBuLQMNJUwRZ6gHckXsRmpvrcWRa4emfL3ZALNL",
  "key31": "25wmpgNcnvE9Hc3EBz9nYL8Ym3etrLvcgPM4gT7kwg3RJfwQbQr2U1yNTqDRpL1Qto8QVphz2a8nSuuZXsJbXyDP"
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

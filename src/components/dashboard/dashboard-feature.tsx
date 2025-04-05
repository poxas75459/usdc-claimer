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
    "37Vpurcrqv3i4FfkQTk7nba3RUENvtAN1RK7sxVXiWsVHE3669CQM2GCkh7x7nTGETrEbBhcMdQcCByh9b3of5mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsomK7xuMTwWQVds2ampr5BxAs6qoheYDJNTtnpuAo7ji322r9vtv63t6wGf86hVyPwJh4RXfc7EstrZUoUNjMt",
  "key1": "5thg2YGnbqmYcBn3n3P2A16Zei8oJa4uggEuF7CVrp9R3YPGJyGH2H5sLGC8DRS9N1G2h3yoioFDsYPXsJ4c3tSd",
  "key2": "2Sph2he7pRUwu3kSQmCrP5NqjmUZSH12HLK4pZGdzjK8ZEVCaHE38VcgMUJF4JvxYYRMABoa2EsBzPGaQRKZvUUc",
  "key3": "4yCmwnvCPeqgd8VQH3MgN4hgWECbAmjpma1tPNtMDK167c9kaNFFmoYcAwGdYFithGNgNCVpXixJTTsmrp55Xf26",
  "key4": "5pfqLhskaVsAhShZYHBATznNMsyaFk6oXXsQQmVCPwPnEg2tZMivLr4PytWej25SxRoRF2hoJFZ6GvpY4wBF2cPe",
  "key5": "2RTNBKXtc2N535kj3zNASrUiqGm1QTJzTztgiqZYQGmfdpvtrwaErmTcr6Lg3nT3kR8feEmnHLwXbuWcdhikFbQ3",
  "key6": "2LcfNwzQPE8fhof5XmaUif93Wz3SbJeWjA4Qt8QQNHPtgdky6aWbDqzdWhLXQJfr1MaxujMraaahN2oPgTGjyvXE",
  "key7": "32JMwS8wwZnMgpn3kxeaQj14ckgGy3kGyTrjzqTcrV4j6JP6eqXFzW9WWvG5Bw8LJ7ZQP7ttgtVFRGXuEcKc3veX",
  "key8": "5DMMcskWWCQpoMFuKjs4C4raBVNMwMD5tkRwSGhgi6e539AQDoHYaW3E81nrJ6pQnUrTSkJu5JNz6ydAq9pim72a",
  "key9": "2pbWvgT8ZmY4oLDgf9bD8nLMzcPh6BJmqYCazKUN2evTSyK2QDFLX4bgrTgwuPygMei4Q1CL3EzLQptdCD6THjPH",
  "key10": "5GhdE69Vf3GSfsSibz2NLxC8nppZ3M5QU3oLdkbfDJYwVAzWuSJLYuqC5Gia67jZ2zkgE1fSNGkXjt6TH97Y8KLd",
  "key11": "3pXY6b47LdHqqAeAwiCg1wzVbZuccYicsx71VD5WCjPH22PiNH8KVDeVbPUgwqPEYqsMCCPBZmnmdDPY8tzAJQuF",
  "key12": "26xRPWKJM81t7ABReX18WbStXKASEnfWppyHM4ufRT5DzjzhHroMRMhswgLyXSFZtHjLoU3pUdWWJd8YsToXiHiz",
  "key13": "5jA7sT9br9UEr8e4CgP9bBMHDKXHKhAahW9LJwueCHkHbXahwmSeBWRq5jcQinfhJ7rs9jbANqHPnAfKeKKPxPa7",
  "key14": "2BbbeofcM4bpGc6djFkBx3RcbHdJDkJZ65efiwQrorTjMYyjaeHzwQRNTtNVu2hvJF1UGfGW6SEsiHoBgqwYqiFv",
  "key15": "5UbL6PJtDj3abiLE6UfPP6YS16ZEDqugfyvu76RkZUDSwg3udZfLFgS9k1rAoD5at2CiNwSPirRvS4Cw8WicLaZa",
  "key16": "8grmfpESyQee4KG2QMk9WoHXNFj31dzxK2XZuFcunBSCgwk2eb4fD6N5QnKYm9GLCvuurgZgPkUwDyiAsWNCKSr",
  "key17": "4L3H5iU3fQu7drN5gzBcSNy5V8vpXH2YX3ctTSENBC7hko94f3LNJZZP29PSEJK7Wew8aePox8Nfj3XjDaCgVpRr",
  "key18": "61WQnSVPKLFZ1WAXfBXwLdSUyD89TYsbGhmCCTEKeLz33uXWzWya4ftg77erJMJCRgjW2auzbuUZP4FBxcxXza9Z",
  "key19": "3HZQQSoNQ9pXrKeJ4UsHi438yuCUL6WvfviKSAsva1MV4v5CAVapuZLoV3GQw2NUWm9hcKxhBN2yNnRzwXnNneC9",
  "key20": "2FwctLCb2PdvLD9NZoZmdCwRa5Sz585EvqAWK5hFjZHXAoMmEb6qUtNXuV8v9hTYpNhYAkFu7ptcSkPVcqDiYFDr",
  "key21": "2FkLFVLho2FBuprxLsZWvvtjPkwpL7QHaLqrDxw9oc25HizWxztFYCDPWUYD2UwLzgdv5TDkQibjzUDwU12MMCXR",
  "key22": "3EXoFZrxj7jhpmu687NW1ZRzSWrAEASeRfvBf5d6qpcFSoF76hLRXrLDGpscyNo6UzUCLfvoxsCekcuQwEWBRJru",
  "key23": "5p84t9NRedgv3LJDgGpJJqZgrqt42oQNezgmmixQjqPb5bcjrmrN3U2SLmQeovnpJkza7F8oGBiK6s3QqZNdS9Y8",
  "key24": "3gxKYAxJ3oSZxRcDvmWCqVJzCdHeK8FHr1M7uT1b3T5mEo4uYof9LUKoyz96fyYtw3rfqEtZo23qodQEo5k74pxL",
  "key25": "2UMxEDrqbSrUonx72iMqvk2neXvZuCTfh6mQuJZ5RRkfPDBytLZif2LKAxXhja1wjkocYJMZqNXK8wAmcmjfEGj1",
  "key26": "Cet2u7v7tqrTEXVcXpdQUKKRS2jtrPUWiaZDtT7yvfcMAUXmjPinSCVUnd6JkWo24MJBuy1SXN5t9ksSNV7SYwX",
  "key27": "5nfK91NefcTWNDVYkJymDekPBQGaoPo275B1AsZJ3Bg4LAzyPY2Qgm9X3i8yfU4UJG4ZvmLKpg4R4HC4vL8RdeNG",
  "key28": "5By3QPPSrXU3scZVSGevd2nDguKHJdUpGkQQwGh6Xu9tYrsyWjWr2RoQLsf3cZt6GcJ7q9biJpE7poFFy6uyvcq3",
  "key29": "3rw1zDqvWgN69dQdw8aJdZNfcoBY6tnYi31YFWXvFLe6AQNfPVFw6NVrSQH6mU7ZzFeabYRAevwj1ybbgZ8osPEn",
  "key30": "4wrbwk28d6DZX8ALqtjo1C7AMdN39AoiP4qGLW8Dt4W5N8eT5yp8Sh7HZ8CXcRGHuBgtf2JB1Lw8G4jrxnRfkZmH",
  "key31": "47gsDB5kS591SHFexgDpJfc7M47gVzBzFKCTuFPr8ovQ59X4yba7rF51EWsmfigHWRY2s7BePu6D8fovadq2nQzJ",
  "key32": "2yoQLyGYWPyo2mW292qSZbQ4FfhqZs82GNcem7Jvs6GaEvPkNAHaTvk8ZssCTxwCPpZxAqrTDtaDgcB8NEg4xu4H",
  "key33": "fhgSdK7XxoZK9JFjr7yrKXMstrzD1GDRWHMoVFiCrGqberKdSQ7A6J2NkrWcuq12F9nhLhCwr5fraEjWBLs1M8o",
  "key34": "3e4X4x1Szcj3vA5psQ6Pc2t7hAVQ4Ujyw52steAviPXKzak3apLH5RXuUaFQJMYEu7nj2GMxe6UZzLhsSC7rZW8w"
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

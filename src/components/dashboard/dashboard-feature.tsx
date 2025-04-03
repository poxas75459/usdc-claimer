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
    "3XUHjqduaojX4wUMFXBN3AD6m3mS2R6Samy8j36X5Ut764PYb9xqgioZrzpwGnHZjwbGkZtDW1qKLtducxpAvcaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sioGvJL5yxAvAFuiytwQwmm8CNgHzEa6Ge8jWPbJNhPzBKfqCrVVAhJAKArz83fxdBddM6PjYgfMkMASJo5GAyp",
  "key1": "3UkyypXHJxqpoLF6AsC2LsejH49vcYAqSHbvd1WnY8EaWopdrZp9doB5buEGC24jQAGjsF9yX3PmjJTT8DEABoH3",
  "key2": "4nFtJGq4Vike2Ga8ZzD4NfKMjB5MaHbkdRDFkdYTRYWggBE78ArWMHMTDnoa3P5SapcCo4QN37UXH9zCShfaenJJ",
  "key3": "2oWYV5pnuG2rnpzm3GTTz73uMmkr37FZE92Pq9o7maeZdAJdi9Dua3zfNEWA4Qkb2XJmsaZVyaZz274a5qdnF8tR",
  "key4": "3tXdv8dNMWNaBcS9DrUnMp2otjz5vyvnErSjePiBd5RMtZo3pmaqCX5ZSxn9tUzFV7wSp4NZXo59QADbbAKXxjV1",
  "key5": "4gddNgUwK8kNcMZpXanNNtSoHxZTNSTDftsZfKybHVNjrPCSZkiB3vynNt3nt1Wz4KYTVPC2GE1esa1rnNEAkhox",
  "key6": "34Xvs4uurnEGZvWAiaWF4wyV8GnKt3NTtNRyiwomct2uNNkdFL3qjZ9yxzVsDWfHHHz3KtYbCfrzwd8Br9CTBFbt",
  "key7": "qtZ2X6jbk1r15ZVfhbxcGkbHQiin4aZ42BrsX8Bju1qiPjLkJYig8QRnZ1PBFbEC7cxDnbxiQtPY3qaNT769yJp",
  "key8": "46JRbrp22y3XJygkiJYpeL8HgWkV53AUXxBNTQpN8iYpKgtQ7Q3A5pHhfNijVcuUKxwaA52b5Grf3ZfZB27ux1Jf",
  "key9": "4qpU4XZNiXDdL3Pjzkpev6tFPZ9hBnYivsrvYdf7LNk7SWK9pMV2JHjjAoZ16hhyzyBV1M9D64EEVbcKzCfaCQBL",
  "key10": "epkBgwf9DExbK5YiBQBYUHTpgpVgVodcieE23ayKbk68BheAkgwm1DUjZHozPamXBFuGjadrZNcvW9nd2QBFxXy",
  "key11": "2jG4rXCQPqCfrsd2cMCN2rPRpJT3LxCiGzWEWQq8RrKQXmEaF31sEXjBNydv2C3j7ojPVvpcDptcukd8d1eRSEhb",
  "key12": "bdUMXugDtnVorAYJNmcN4t9VF6kg4GEwU9y5ZBuNbMF7XBju4rweGuUnavjm15kz3tNAqVUkjCjyTpJdvBJhwds",
  "key13": "5QRjqaeesgUrxa1QzkEcSGHA3mGUdmbUKnAJmNi1uXiwU8M4VdXC2MgCdLCUCbrCAPs8742Hs3TtdyazApAw67Gd",
  "key14": "31FGt3FfJNKWX2Ji98uKdbWkKAkKYE5tXAC3cT5z2TfAgoeTiRno6RQ1j2egqbwwPNe1LAHRxdmmszuD81sxAgf6",
  "key15": "2xeAgS263zU2V4xgKgtMa8SGCk8nqy2o1CvQCpkYgAavRKK3SCY4eZ9cfXf9nj2KXwcPgfDt11C9nTaipF8kFmiG",
  "key16": "2GR5HN2iHXaT3Vti9mVeVTFHmDniH37fDKi2m9pzx4VYdqLBp65D2Npa3y87WaER96JiwZpf4tNZeXr1skFhswFc",
  "key17": "6Zre46n9YUYMf7uEyYmzMkDmjiCMXiTZVz878JNLzfK8xLx5ag2Qwuzm4UjQj6XQ1cB2miZmyRD1JN9L59Wztxt",
  "key18": "3BxJT9xiMLQZt7VikdZvdyq1FFRpcmuPdzDW3mi4XFEfmg4XVG2xjbSEBuusv6kQRsicz539JLuWL43EkPJ56KB3",
  "key19": "5MHfGAJ1qMxLWgK719PDfFSJJRtvxQcPEJG81XkcKawsFYa9DRQeQZ3M3mJFJKMAuYu9dJkqB77KJdfFA3ZFzijx",
  "key20": "DHV7yrKpAqSxZe4ZRugZ1JRYNsR2G4SkJ2b6JygiatuunAPopCkfsJE2Ke2bptgKo23dWefHDwJ66W5UVL6nLV5",
  "key21": "RQwDyKvgknHoCK8jr8SazLu9xmxv4vTLjWYndGoTrTQjchXVWSU3SQXGoavncRMLQhsFRuERggP2W9iUUnswha3",
  "key22": "5sHn8YdHzMgHNQunEdDFTrgtwMjBoaXTFNZQQ5nemGY7yGVwNri6B33ocqArPGbpnwc2E7vm9ZFCk9K6yoRAwXFC",
  "key23": "4CrpKRqu58FRsXr8B8Q3vm6RByV8E5yeA212Xurgabh43742B8rb33e8kGJUcEMNg8ieZcCMGCydLdjdpNjS73SK",
  "key24": "4XTNeuXuNMXa1Bg8Q6yKefgW7JuL2rb87WfJQRXLB5U62m22LqqLKj2FgTRWgucNTGGYjDbWRxJiRHAzHsozuyir",
  "key25": "dAD1TjNjjahgpNFGybwq4dW4FzgnxAPhuoqSZpwo7SeiYQJ3mHV2m4ZWE6gM8qdbt1DFqn3DvtkdfcUvV3mbPJ3",
  "key26": "27kG4GcUQLroEaC2Wvo5bAR1eEyiFhQakH7oCRVLoBnkYGsff41uDDsGTWuofEKFGK2Qiatx5h6gVWuE5nx35W8A",
  "key27": "3cU4rLKA33Y5NACGNizfCcuhRUiWd62owq76fBC3U7CP4vzBJQP78avDJeoPFNiDQ5LtFbsWiy7TkDjHtGuYUUT1",
  "key28": "2Q6M6YZe9f5qMzLhVjrzfLbNGmbRP4pmV81CfeMUNg7jY2DdhSjP3riPRdrcVYHzzRGwXah4SRjNvgqrhcapxemg",
  "key29": "31tHJ1KoYSX9SFuvSvS5MaQTaDbDB91NDKZLxnNUcpJzf2AzR8mFyx6oDzH1DwgqgAq1gQyMpR4q3AaYtSLgFJgZ",
  "key30": "5Dp3UrrcL8DjgPaYHVPmZUsaSXVdKLMXREyYFNV5vxooPh9kQJ7qt7cygMRCwNwmn45qnF39srLSYXn369qS1rDb"
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

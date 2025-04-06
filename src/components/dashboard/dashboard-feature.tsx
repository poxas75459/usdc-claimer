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
    "2wVv32cpwsbMmXfMXF61azAMqQeCXMsjeeQBRFdhRttgGC9FYtPU5qpaDQ3sBPHvqc3sQq1dNwGcCKtXuMycEUxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8hEXN3gnfgRGSF2K3AQNJfJHmAinseqqDSKBSWySyKuGuYkV72FZDSN7uve443A3AViBfFU2axYAhyiMa4CM7e",
  "key1": "YBc2iwsoU5sfagngwLeBchwEo6V3XrzMqZf54BJ1uZgs9GYSwytwPjZNp2ydQ2VFBaysuyRNonJnGCrQmCcQDYG",
  "key2": "5HAvdias1KHmAE1GTzpFBrUyrwhSZrCdi41uSFSJZDSXFfK8rV7vtgAmcyyDVmktshKKsRjSzExegkeMG5sGRMX2",
  "key3": "or3H6cQQ4VGvpcXQ4kr2VAqUNNRNpUPiEVf4tsKPivPT65ftEmPxR4wMFBTdnDwBkf49bLEkyY4WHei7BzgX1yu",
  "key4": "4duM5kDLzUmYD5PQmL9MvVFWWEzXncEBhhZD1Abeg3JYYjp7rhFDbrT4rCLwGbdRu2K39PgrT7FJJ1z9gh2eNUyx",
  "key5": "5uwctTf4S5fnPmbbSD6sd91w9RcFFSvcZsqpJt5bPdRHXvSH2ymcoGnQ8A5R61ByFhNEvD4bBxipSMiG9YsBMPZH",
  "key6": "2PG8A2Jn8rE31EBm38WNrFwZUmgZ3bhSKBbE155NNWySSk6kDwkFfFuGA3791Z59rv8YF6YY6ZwLDXfKUk3U1D8s",
  "key7": "2ciHn4eVtVnxf79DcoQG9UfAD3mWETcFJ1usogGCcCSGv7igCECqjgBYZU4jdU1sPicZhBMX9mDwQoAFLxp8hUYd",
  "key8": "2HSiR6tpFNbz15Z24JE6SaDZwxSHWLJ1NvjXseJvLSEQXauUEYNNUYB4bJ9sdU879xRTN7doKNVgYbPz29aH7ku4",
  "key9": "2hnnvu1u85woP2z38h48fsz7Hn9999YSExe8VWmbYXipd6RBfB2yXxrdmQScpnuaNiiLHGWmYikyFAc7f3Ky6aBe",
  "key10": "9cpyM433eRfSAbqAapS6Qkynz7v65c7K51oaLm76vweD7oQ5uNrHFavGUSyr3T9hU5jvmZGSh6VghxkBAter1qo",
  "key11": "3R1qv9JH3jxsyxCKGLershoBg9PKr4bWrcAvR2KHmQWXjq88XHwRRDeRyE3tmiVGM6zYvnMb4rp9tV8GWMQYpLZ4",
  "key12": "2mhUYv37L55nncg2RwWQNbdYSaymQFsaEeSrbrDfUBwZ6K67fQyuLZvJ4GheQgK7YNupb8QRuMjftyY4i6KCUx4H",
  "key13": "5oSxrv1oSeQUEwNjETmw7V1TJWKjGv5hd6PEu1un7qYnXhWSMkKRzGh3juvuJaZ6oYgkew45HBCsrqHWPbQEuUwm",
  "key14": "3SFY8AeU3FUbYiZMW1TEYLACkyX8eUX37dXhprFkdER91VgLTkwVbsHqvAFMQySFzVbG9zdErwAwoSAHXKr8rMhc",
  "key15": "4VXDaPUZtb3ZFDnk5wkW2Co45m7L58zaoB3hUFp3S7dqJKSa7hqBoyYRLxKCeNy5G96dhRCqyqenY8JuU1iXe1Bn",
  "key16": "3sNQmDqr71BEeVaJDFcuhuM96n9G3ZwRpGh3mrQJHDGN92E4sjqewPqC3JbDL2f4xUQD4yRrfAmdQe5a9SMveQbQ",
  "key17": "3boCZ5yX4qDTPTy9DHCgtJbDRQbrDRuZ16jxC8iC6q4AhbiLH34zEURJJ7GE938g7XB1BYpqPfdSwSN7hn98m47N",
  "key18": "268XpCyw3kXqxSFmMNg4HzEtusYAJzWSKrHCa8c1HZrVt5EhEqQ1fu96vV5ejG73R9agoH57LDT1DTQKu5GdFLL2",
  "key19": "2DC9QYaymyp4fDspPKAVYRVqfcoDP3Q6HcmYyug97hqAEcxoobxGTTsFb8Rp8uAWXW6BuqyFD4gFxCqK5CGRGCLW",
  "key20": "2UVFkgbcpm51s8NuxgzPj9tK9H5C7arR59CnHC5e4kUzk7sPErcYb2tieSUJsoytCYzads52QKfBtd3qUms69sLz",
  "key21": "5Exxhkz9JD1GnGabiW9CFRJLVPNW7ksApwnVDGgr88vwoLFDAtP59imrrr7vxpbH6pyXhQMzEpmbAqKWV71Y4rJg",
  "key22": "3EPHfprNUVAfSPasjJkrgCeXxWXYErZDMRS6y7pKX7tDtcYPeYxaXpRX3CryDTWRse8ZRVgzwQDRNzuBSmoiQgKM",
  "key23": "2ubDARP2s96j94anCL7iA5dys6QuuVrpx1VwPQa1tK3dVNB9yWZodjv2cE1i5JgrmV3AGA9o71EDm5cGvZc6xsFC",
  "key24": "5DBCWYgpK2H3NY6CxBhLG4e77pHByyi1n3KRhCNh3WM7ZfDBKHWDWp5BBnuCUeHn4anm9L2HmqoWYRDqYWkcBTZE",
  "key25": "5b3BZTiMnuGVjCsjPDcaDjzA2jJLkvMuRxdDhofuLqjpPZH3FnvTRr9pi8i5Lq7NWJWm7FQybiri5UNpLvnDQMDc",
  "key26": "4TEKvgCWsNsosV952fDMwfG3yWXWZY1DouNMrYyQ3AQpTj91k4AwQLMvnzxE6dLnyMCSf2ePGp2KetfaSU33MGpe",
  "key27": "4UzgsqXXLR6ZaenDk1yje3DaKSSQHajonZ25DM8XxeLTvb5PNpSkkf1fo3Z6FjdFvKtUjPQPJtqu7kjDr4ChGTU2",
  "key28": "5C3UbVQX4A8kLSndyyDsRrEU87t7arAZre4qkeTrRvpHLcBJBkSnLFNucRg4R7xmALo1SFBE55JT3ug5QXFmcNAn",
  "key29": "2wjjzmuz3Ri9CQBnN2Qnw5Eyua8uW8MiNkSvrP9HcFBFJ735dDvFFSL1vfgRCjqdKAU2RYQEWx4VFLDkdqDj6cJV",
  "key30": "cUwgyp5zatPJFeDKFNPLqy4LEQf5t7fgQrH58Me2EUZL4SF4XrRffnFuGJnATS64qka95GqqMXurxYJF8B7TkKG"
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

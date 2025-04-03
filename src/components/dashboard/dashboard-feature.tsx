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
    "5qX7dj3yNoq3drRuVaZdznQ49dRzNpowLkCUgdSQPcMTEz4VaxKYdU3Qtmfj6E6FzpXp5AnFTBRHY3qhUPjxEvGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYciU8BbnoTe5E2k3hxQfXAskCdrqJWizwSTB5cySiQYEzk2ixj47MkKatxJGqfWGmmQUnK8BrtNm4vwbGZxhBY",
  "key1": "paRFhnyFh1DKSSDZLDS1sKYHDUYtvpUZxfPnsg5iBXc4EXyPgzqPDzj9qiivVEB2LgWCdwpxqZnBAVYxhJ28UxR",
  "key2": "5KD7L1CATesqtRyUvZUoss4SjaKiYJbKMSq2mkYqwjLN1om8QM5mN2avtYLUTSccDoxj6669GZtWcJqRhND9wYGL",
  "key3": "498sJRi8VmExPGmq6zWJg63yPYtUivNrvxzya3xJ3A66JbztJRkFLVzEAjh9EDyW7fG4WBWEdgPzC9WqAQxLxMuX",
  "key4": "4jSwENe1VLer5RvisvpGcE1W1NVvqmq7ttVeTJsUeDpeP4K2X5pQxX75zyHrDZX9uuQZGsAXSwQoa5YfELC6PfQc",
  "key5": "3q2x5qih3Z5QSxXtDTboNr5ZB4Uk3Rd17jD55wSnD8SNLHoio3Lz7qrz6FFE3Mu8aVVSKZeDwdg25NVHuZBD4fia",
  "key6": "598AH71DoCscDk6VB9p4y27HRKsPXyhETqdYU5VPSB1VMDcC8TYLpy5eredxdan6UvVEGBEgWBZfXAu3mMKxpcMJ",
  "key7": "gpWQg3qp1c4jsRgw9vNgmMscRhxjkvn5mGJF4chh3gybPDDLCHAjA4Di5WCkH2YXoGwGK2AhsLoqRmHUgpcLMKB",
  "key8": "341Nuz39cccF4QMzqafSxZpuQ51EpUkGJQ5ue2CKHija9K18TgmPKJ2rYYYv9vXUixA4Hvqjz3nuMGhN2NNKQemV",
  "key9": "3zoGxtzMebKJs8VGoZHyKVg6DgHrzKvB3tHGSHcMqoWY1LuV5Wrowqw7M94vwtVwY1WiMVzYAfFbK1KKsNHnsojm",
  "key10": "33ZiBsr2qLaZCEq87JK4b4X54j6jxxDTDt8uE8SerouLMvT3nQ9ZYfzXjmPxwNc1VroWJXsNCXBgknidcYAq4gxu",
  "key11": "39i6gzRFURZGxGXHnmDXTUpvWkndFBTrw3GQknvWUy889tiyAzXfae4rdhy5184SaWnXXcjeUAnB2CEuceFNr2b",
  "key12": "3xFrykFeRqMXNY3GfVfsqrvm6yBTN17v43uz6QNmwGiq5GpnRWURwieQerkLd3YkFo5RJfTcnhKEcMiWpGwrHTTD",
  "key13": "Qgn5tUCxDD6wBgPFKEAyQ4PS5ZA1yiUQHsMKA9wCVu5pEzpwMxTWbywmU2gxbS6LMKmWYMeCVPAiU1odath2PGc",
  "key14": "5XA1riAhbocSkMCh9ZvadbnD3wJXxNhrFegcyLDZZQLW5kUjW418Ffh7iKZ5tet6JwRVXN4xxQXGie2KQ9mUaSkJ",
  "key15": "3iwnVqAjTBQuduKLhSibfMpPMRJ2yBN56X7LXcyoB1mq9YnhZVFmdCKzfBivLQP84J7oFX6A2cbEadcPzEBCZsPH",
  "key16": "36VVs7ptQCLxdbtbtFSd3T2u4u3fL6968UQFRjMs6tYHcayWcFQqL25v18K2Kr8HYMe1QmrkazXMTD4ATyLx15Tp",
  "key17": "43g6VnQiH4kguSrzHBchjAbw6G1tzmWT2ZkUMFuGnY2fYbbQbP2TNKaZDbS7enwfxupeMSoG5yZhqy1F3Ke5Upvf",
  "key18": "3LDiDPVYrTV8eBQJaTRZgLK19MrVzWo2ahN1vbnSzDZrg41NuRZefzUTu7cDcKWSEazvDK176XajikxEkRFG6bU9",
  "key19": "3qC6KvCLHi4mGff9Rcxd1nB8quwNJMwP5H7vXQy4tMydmbAzeQ2nZQGsDg8oA9NfCHkbMnKUNd2FxdycAcRiJT3o",
  "key20": "5TfkFfYbTBMWuzPusyUesnPkwQADA31eboPio8K1u397tN6PYcTF5h2nJEk7QfqWKQLsaCtv4mTxR9qJMq5NPqfg",
  "key21": "2ynVcBXMmQxiapMHGEensBhDJAF6x7PTi7o2oaKkCvGatr2F2HAzqCuXTcBDQMv1vCwRuMpRST84KB1bHKkTcgtj",
  "key22": "GTs5ScKfCtxWixsuQuNQB5W6iPjhkKZGhYuDgQ2DHi2SrmNDcMaKczRppuwBcYPcbvp4gx8vSbaCXuoW2BhbHuZ",
  "key23": "LYFyiKX3YEv5gdjPw5Bbk68fWvxcvsbp7KJjtgWjrM2TEpK5YUcMd3N8Za6KVWFyoF7EdDEHNgXKrTXAjduArER",
  "key24": "4BPS4ZQmdiE2mdCutGQDBK3wAB8XyokfoA5pxQb5KiGkN3zcHBxu4ae5CxHCmjnM1oTjfoNPj9uUJNJ2ULtqxKNc",
  "key25": "4tVFABN9SQ7ygDeoowG2D4ejVK9anSF6TMrMnH2W8dcRamtsFbewBfmotTzjWMTfJnXsSyc4ubA9fj4oHiJ162dG",
  "key26": "2J4QpoYA7VPcYt345egUWmPZ2CUMiT3DDn6j7dnea72LHdgv6ctWygiLvhgKPVLN4wegyQBRLXGUzuzT3kevrXEW",
  "key27": "4fLUXREuhzoB9Sg7wn44KdVQtpnCrfGTdRxv4U5Muui48WpZj2ZuD81eJWfJXcXRjvue85ok6qQXcqrPvsFbgPf",
  "key28": "sLGr6mKLUhkCEsR8zoHKL3VeU5Jiz3cKzmqgN5BiiJY62DDCFtdvE6sNWs3HGBbwd2vzdzvVv8Sqbnmf7MRZAeY",
  "key29": "4GAbrouuo1W2TkHCATHz7DivhTDUimK8RabjXXizUEzHiXThCYobRQ4JzNHMEtzZSRefNcx2QAnJm8vU7HrX2qfk",
  "key30": "QAJp2TjuQnD7xMqcPexT9erUTN73wy3uFa9LMts8yzyBo3rcFk182kn4HRu62trh9SFNKpK7HyhYXv45wQnxZYX",
  "key31": "3rYt8SqtteK8HeC63WfDrr5BPfCrASMQayURnVVH3XGbP7xp46VUaVYNhjTZD6xMKQei4SL5dtPiqRtZHEGqVKE1",
  "key32": "3hNy3jXmRCpBvAY4tDEbmMuTRBM7kszw7zVny8JP2cjKGfqJwiAKVUbNXXV5mupb73zf3GqFEAGdCgtToHetQEah"
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

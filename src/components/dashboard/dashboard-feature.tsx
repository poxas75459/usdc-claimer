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
    "4JavLqcDNRijiPhNn3xU4qG6WUUXbYtEFi86zKzMZVvLSQk4CCaQdm2tnYyjjchjkva7kfBKSGGHFkXsKnTKMkGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5suaDQ4JA9N3hgm3dYWVHqsfoqEzP2CrRxPzD7cgiYqrPPssvW7z9PcsdGYxVgKT4WoaiDEd5bd5mYLGfaaKWQtA",
  "key1": "23GBE5CEUsF3LnA7qp8NRfm3wn8uQZhdMGwc2ui6WyTULMwjkoyKtVGMPcRFt9ZbSfR6HeDTWeBCxv5iGLvcGG6w",
  "key2": "2SQdsfU8a2aML5UAFJQusEz3zij9bVXtoAMpMSSqqrqn4E1BGerPzZGrQCSyiNKUzUEdhKYRmxMWf8tKJVQ6KaPe",
  "key3": "QVHLgKDrRuf3YG8dzFGZBdJxgZin4bJ4P5uCoXNNd5VddxdKDu6G9JwdcWMPmoVo87bVHehtJihvzyQAiePKBTy",
  "key4": "2ZjiHf11uQp2JDzfGabcfdQddp2vbbUTPvduzuMs6fc3CE1ZKAJCVJc1vXQWzRjPPgW4Lz95vHzofzqZqmMJp8p1",
  "key5": "5wMJAA7oo5omVE68kwwFd4LDKDXMW2RftZfzPuHz2SkzDGu9GTRvsF87F6FL1Azh8Hvite77UqmEf4ztFfYa7T16",
  "key6": "3WQvJXyeS2zeUsXKLMyx3VmhpHPV6PWYpFpdPpX39MdxAVzMGJFyXc2aD57mTpkycgnrsRGWQXakHbGFpqWd7swZ",
  "key7": "64CxMU2TkLSnNVtZ7xHZ8a3sN3rX1Muy62N3B3g3gxWvqJQezkjKmTkDSJjEE9AbhMeHh9SN48BdsstHAV4aFSn7",
  "key8": "4mzYP4Dm319WzUbXkHiZ5tacDxo1mRBxZahKitpGNGcMs7KSTzLH9ze3Ut3s8QeZ4hCpUFL1GQUZX4rWjXm6KjS1",
  "key9": "2QGTrknsZVH6ft3ZXGV3o9PjcP9co6mTTbuuUjcHDrkE8Bw95hRRawWdqCPNYAKoiWCAZrpfMFZBEdAWHryEkazN",
  "key10": "5fbgECD16CW66fjfgzvTTm2zqC9ro3BjkVWj14DZUBKeVNYEH8QUrrDHAfG21GrMxg2rQeCfAApXu6Gpjeup4Jq",
  "key11": "2zbq8gKkq74VDMyZRSn6ujnvcpj5X1eeuEtAb1ZhTEuNq5EsXXbxezRSJrRQdJjieES7SXBBPUagsDh9pjkteS3i",
  "key12": "4UPJg9etGVr56Gzx2ZMhrqTrB4pATEJf9Z61YwfT5YCXZAJtqFbdg7rjY4YZm6WVng6SPFmFp9pDCFefBVd74UHZ",
  "key13": "23sSPS95AMgRgYbt3k5Fm9Ho2tUZLCd9d1LzKAaF4ZSiK3Kj4xW9EPXsiNNLwVhT7waBwrMtP58t6Z5N18ekvWXx",
  "key14": "6153tbkm2f3TTDATWSGkSi1TiZ9W2isP1fYaEW1LJzKvU3rrSZ4KGyw1kpijq4hK8SWkNhPG8eHUxzsxApo2pxeP",
  "key15": "3bF5kDs4815cxLHXcEXmaW1iEcQQSuJCY7vYYPv9hdwJ7n4pJXnwf8hbeRWchUs3V3wb4Ttb6FMss8f7ZdqPR1TJ",
  "key16": "3R9ayVCgDy1Mx6T5rc3gZ2svg4tCfCzJJpXEMDNXP3FFQjxSWs85xUqHAirc6zC6vNr12EV7gMJNQ3wXUXEpwn1y",
  "key17": "2MfL63D2HL4QLQ24iEi7FBMM6LW4v2mxSzddt6gfUkqdCqbyZ5a8MgVfTkzrFnhn7mxuBNTajpsKer7Gcio9wYAw",
  "key18": "5eNK8Xp7hDumjudRR2965PRrq9garPi1skq16MigKULkn3Z9xwypeTBnmRd7R5ugjSzoXBGBFqwowM6dXE31VPCM",
  "key19": "ZKGJmNNx9vmzzJqp3d3oY7fJRbC6oF8oeqX16GRHXy4gzqszUndfq7VBxdNghn2A6BTfHYT8JXe49EL9NMvoHBh",
  "key20": "5vMdFkX7hmikD73Wd66imGXuwPPVVLmSEY9SmZsjZMEbziK2AuE5N8iGbzBEawp1MSN5Dfxawd7T9pwvQwio186Q",
  "key21": "2cBn25MSDq41JvQJNXnqcJsstXUf4s62NPzRC1yAcYDStiduDbG4U9rNTtaDAYW9p1vPksRVRXxanrdZCVUWEpeJ",
  "key22": "FgaFqzkp83Kz8pgeQwgHkzS7DCQcH2nUzf8DiCfhxnwF8LrYLaKkftBAGViLdsVzFQH7x3PWRo3XVwwoCxmmrAc",
  "key23": "55ooPnepqX6KAR77rp5kTT9tKzb4cQdYJgZ8zW9iW61wwGtX1FpNbkk7UBCWmcF6Aa8jtNsx2RM6QS4uhATTsbE9",
  "key24": "v5X979fsR6iwaY14N1dnVnDnQaTcGLBTTx5jZfQtcyjT1TJdLr6bGbs6d2Tf3eRV6zVxhPEJViG96QzTs5r46XJ",
  "key25": "2LfjGAsuopwbM7tTgnrwEiMq1cg9rYFe6s3X6aL5LMamNPFdzFfVwkjjosYh1Lie5VegT54fBsvKkTQ6exQf9dhQ",
  "key26": "FBE7zau3THriAtMnjYdC3Px1z7LVujFN4WKZXw5gY5NDYhhbFMqk9QZ4zm7cHyDkPK31V4sRtbvGKowucyVzXeD",
  "key27": "jCZVZ3WUPEr6x8H57Ug3CSnVKakrc69ebci5h6TPeAkvrmpGnGre2YwekGBHwntiGnWfd62HygAb6EpVUx57g9b",
  "key28": "MfAkcyF7LNwD8rW6j5o9x5WLVA5K1UhN8MNjZivwvmGWMDkLCw3CngwoNFc7Z92NFMAgnwdgK9YdgruzBAqSuEk",
  "key29": "3VZ1yVB3w6XxAqSvndaRR2wGZPrcp2Cj8mNSvejibFKsq4gPYdmPfFSCy3tgbCHDNtikw5rcnVsGgMmqrytQs5rZ",
  "key30": "2LprsHD14MLKP6j6dcYqrHhq25gFDSrVmUbgREtbi5s4e1nZwbHDbfEQ7bSphEXbyL1iCpod1fwNGdjohezhzeF1",
  "key31": "JEhsvKJ4LNutuqbqZDiRknotgjJEKnGUt6NMs77YueaYCE5TYmEjgWyLhc6AfVZp8nMUew6XemQ9q8Cqyt48Pdd",
  "key32": "4B6ZNRZGDDyQEgAZCjVvnKV99uz99At4M3pvgd82vPuMZjeYHUJXb5mbxtNxxV1thcdzU98XPL7w8sptPzy3L9fv",
  "key33": "5n2baihZdPY5PKnNWLUJE4ZcFcrSWcdww9LA7hK5eZ8UQBhKug4MQUjQAVCJHDV283YaUNF1qpsDjBj82Q2iZimw",
  "key34": "ox9bhpXS75ipRZuQxjN3QUHhtZWQsRPWzKNy7WqkKSiSYdwDg8bULrLcRouB1PFspj78Eh3MfyPXHgK9BJQLnet",
  "key35": "WjzB51UNJYwiGPTEXPmrZR8eNMH2UwLmDsysXtG39XUij3opkTd38wRwhwCVwAsLda6khB6a1JdtUtK1ugqXyWY",
  "key36": "5yhEqLqqGkhofip6NrCShZXgfC5EW8ZDUUQUsbetaRRYAxfGVVzwZcq9jpc1obdeJreqYxgLmUcsjqE744f4EZ5o",
  "key37": "46xRWzAAemRV7G2uE3fXUSmHbxPbhhUfYhMvtPWeNAL774yMM4hyr9641eXi5ASgBXPbp6C94f2ZH8P3wEV5nQDn",
  "key38": "MscPuGXjw6LqGuWuL7pDz8EWgCgxJUXvM8phhA96TvBtDgWqZAPbHMbTPM5zrNb5BBeM39ZarwCYM3Gw2F5uxDP",
  "key39": "9xyMZ5UmC3Z9Qe8uQaHuSEdQUKhhCLCrhDoD8HTo68gyLSc5MPJ2VGybSdjFgBunt2H2JKfsyu8zxS6TkVk8oW4"
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

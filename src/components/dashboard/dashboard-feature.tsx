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
    "5bHqAvoViMNaRgGUZvQEzXpjqBEzdnWL2PuHysNRhCeBp7bdTvUpiWrrWjNqBt6CtXM46oEWSUUwWYiAttDL1Vhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUTwioeQzffsPmXvGMJDvafdcvZv3r7L1XLbm6rC6LmxTyLeZZZLFrLE9Zn94i9H42kpCJrR7RjE1baeNnfQSD2",
  "key1": "62uyUKXbHqc8gu7CjeKVjM5pYbRfBg64cgEWppdUA5ZuNNu7dQS8fRg9aRKXXeGpvaFiwmYqP9Yu7cHy1HcsZexE",
  "key2": "4L15zyBtXU7gRHdCBQHbUBVv6ChMsWVHjJzsCiga1FAJrtKMF28zk25Q5e6r6aTzPRGnaDujkuBkeQMRW4L64cLq",
  "key3": "58sfWP33MJU4yNgz8k9beSPaCcbxv3NK238b5ZftEvxhvxzd4e97PgPHkcEMJS8jTyxr8d7bGwh5Z7oUgndh3Bd8",
  "key4": "C8ANQeVXD24G767KHXdgEpZozHNKfnneQj26ypdgADDiyire9oTbH4fbmKehWU477QJAUk5Mnw9SZ8WeXSMQtEV",
  "key5": "5A3nUfxbVJvvSBiumtmEvS4kUaPPsHZ7gXvMHVLexSLGACgUuCPBviFztNrtGUQ48gdNsatkrMNZvaaeuMNPA47d",
  "key6": "h2GmPyEHgCNxRHhNc6D3pa2yKySXfoGyDpMx6sPMdTpgoJ8Euq3P56D2uczop9Jk1hSCjew4EQJYTabTEKCygZH",
  "key7": "389oM6qScMKaWGkzyyuiB6z1CuA6DkSBRmdLYBVpMXw6ZpXZ763yUxWC39CcDNkqi4qZPphTCjYG14zZD6bvXuQQ",
  "key8": "47tZ9AY4AVYVYxZDndgEv3i3Qq83n12q8gzTrnZBLeGKJLhNKBGn8TF4g7Gg3WnArvrA1hZSgm9FkNskMgadRrnM",
  "key9": "2141eYwgxNELszovyHZMn4bcQo2NwEqoExLHUVmaFQzUCKVHsaH4GLEMDfQ52ALXN37yLMBQdmV2f4KrxyWS17ZX",
  "key10": "aGvdrp654PAgsQgmgMdZec1E8Gu2a1EC3QMP3PxvTy58GyNiR1eDqWnZbYjtfcei6Fai1gxTUVdKJGMwjYKYLnT",
  "key11": "MygwUDDGkbutDJ3KQaLNWRxN3bFAkokB91UqCKUFM7jAbZTM1zewRve3JJSh3SoqxmTiVnBSfiowsjvmakc77nB",
  "key12": "2LN3HSKFWazY7ru74NCVvzVRGyKsqiURHZecAZnRX1f36X7NbbCmof5BG4RcqyhTjDAJdcW21bbG2qVMbWZnayBr",
  "key13": "2tPx6piPpGgtQFG5Hwv17W1zEb9tCkSMiW8qjj1rjzTjVPF2C6oLdoi4R4FrWKYScf73qnunLZnP38d43WGpbypC",
  "key14": "4SrcGme1NyuLhYzJzgzcAfGbRGGHx2iKzho54HyPJj9Uq9HuQWj3nHw8xNbxMN7Jz7f61UE5bnrsyRfTdw9Eu9rj",
  "key15": "2pLBDx6BJJNnivSCp6DCHFvtfew9puwLWogZQG9eSq6w39Lh4RfCghMMVGxHCBB1wNXUW3DMVX7hU9naviLNqvmi",
  "key16": "42jS5xMTZg41g22LkSrw2amebtiQjAE4Y4tVUXzfAj1q5em9W7KXVroz9bynnAWezpS6umYz9wrhHuVViBBGvnqi",
  "key17": "4xbkAimpZ2Vy2AAoTphdhMtoF96C6usTbUysTqpDUU295R3whmqJRjurhkysYY6CJbdPBkQzbHDCdCFfENmeeKx",
  "key18": "38PpUxLE8BaAgFgGRKYP6Dqzu3uMPnsxU89sfAmcxc5boUHK3z2cwM388Fa5DXZ7fE68CaensBh7X5BXeD3bxEcb",
  "key19": "WHb8ufbTeFqsJVA5QJbhWXFrsrQxu6SZULvLJhx39weTTfRcrJy9rKdWgEZJeBYPtBJRBF6dCNWLoqbKYXHUzDW",
  "key20": "pZcpczAS4Z8MjEK8NU4XFrJf1SCgMMS4YgR1tbLtXd6PkXTTSRnv8VcgRg1kAFgrG2L3UFsBCDHQhp9USbz7J3U",
  "key21": "4TrmENnHd18RwCG8hD6wM3RPVAA857HRb6T3xTShb8xBR5V41h1HNTPG2oGaQza9DwtrKqTjq49AW8xYpdkgDzHT",
  "key22": "54RKZ5DMpB3tiBosAgUBUswkZHJ6dbee6VMwdKzxijNMPCcPrMzgrZQQjy7yLnw1w4YhhH2XAHoXov7qXv6RkP1Q",
  "key23": "3zsQEPLcJVy4137KDvdjTM3YEvesZxn9GCdsWLdWyxrWCcE9DVpfeHq9Xiu3maNiKBMSoLVJFdcxxXvCZ7v1uzWa",
  "key24": "MUTN7uTcvh9kK4xZ6zNroANHoEQCsRZmosVHH9cRx7bKjoKCbW6cHExxqkikPzAtojhXy5rjhsoorzJyUrYX1U3",
  "key25": "3Q1MdHm9XnwVzLVzxmcwaRsB5xBKfstwCxfDkAKLBdGZxA5tv7s3qxnW5FkbNmTvjHYice4rFi5LSU6iSZTsBgoA",
  "key26": "2A5NXvx19dXBYemccjTwYxEjHEnpeyatxvgkuGbT4J2grH8B9uYVvJSzousEEURXaXAZbY9HDHJ8PRSoFjddxjgq",
  "key27": "h7Kr9uRB6AsbxAq4hyF7KcWwWgdjFdHKyAWknhX1w4KVAxPSt3MqTsWHLbKgE3YgXhxTak4QMkj2pmjzLDbxsEJ",
  "key28": "3e31Qpyrz1bHZMP6QnTMcUuqS5dfGoZbQsNwtNZBrDcCgWvtvbsDCmArGzNAv5UARbvE6dCwF62UcMqRozQ1SnYb",
  "key29": "5cBGTXi7gRnVBAm29vR3qxhnTUqaVx8d5PWxtTTA1RzAZGcDp75uzhncHEwzcSpdDYLucywUtN3giQjFp1YE3Pgp",
  "key30": "2ujY9bF7WBqkfamGNhxSeyNx8iTr9YszRP38tDdgAnHc9DzEK7F1SYrHAt6McLSVvYsQTQ4qhUZuojkXappH6qCU",
  "key31": "66SCoQvyprhJirTHNyKGkZR7e4RfVmbJ2BsYHrRZSFEPceoPy7eqaYMRCDCgMXQ6sdARVFT4bHP6GeGEjctGFPJs",
  "key32": "JUdVQURQceEvRJujnKqnViNZ3Y9TUSjmNoTSjrK8VnTABkeb5jxkyAJVgHToJ8x6ndQJ7dTS8Yj2n8Th3jh2qGQ",
  "key33": "36ZqGUh5RvyJ1qF5gJ9W3CMwTFBB4hDo6MSRx4LJBb7xY428sz77V365bccTjMmUe8x7a4ZebeKmSvLCWhPs3twv",
  "key34": "65E6W3fZAeThL6kwaAS5xk985h64t6Aq9fjgLLJvqJ8e3UyGRtNDhBErcurKht5JwfGaipNd7ygNX4Ej1osktnpH",
  "key35": "jxbyYLZZyzBqmYTjWK9tyAZjEj5Pe5xRTewQvsFi99oStRVH4jXo4uRRWLo6f5VdwroVjrNhXfK4ncSBk8rsRHj",
  "key36": "34KgzVXPnVsdtBvhSCiF6W8TPwj1GE22qaFua7NfCoyLznLBzNyAc6zSdpcUYuY4LsiFt1mPDoeZrasbTTWoXpkA",
  "key37": "2QnhNGeDsYKvK5sZ3oJatSAH6ToKhYyGkp4VRDY8nhw5pFztRrEzEuSLnDG59kb96murRDU4US19vmNnSKGLLSf6",
  "key38": "41UBWZYVKD8owkYq39HjLXsCvPVtKGsYDrVseEFn6cAhcvivMtp3GM34PkGh1rFBoyCVYNboknchBAr9LQvxYXA6",
  "key39": "4jf3MAhDC71yaSKbA5wwcvDCoBk4Pcy8BghfWXZume2oW27XGxBaxTRftX85TRqARtp18mdbnGbSV23u85HsUYYw",
  "key40": "2PDRdp5vx3EEM9EJbPm3S24tw9miU8XVkiCayJ2MQY2eZuxZrrmzGmdUPCfHAPVKoEXi9ik5a3cEQ1vn8MBuni2T",
  "key41": "4BhWhzcrLiRdr4NXqWGNdP23ouPQQd3zSFj2vhsWWBi8vhpRYcaV9pwMLzwDQxF3gCDFbqCM3VNid64Z4FNq6tf9",
  "key42": "2Y5Zo9s9jzJAZLc9fatQaAqZnidRi1rEfjp7NuGRCDXm73GbJpZcPs98nnv9fqtFt6FqBAHafAuu88z8gzjm6S9E",
  "key43": "ieL3ryijSzYauV4URVgA7RqecnLRG1TmMvvew77snMuoh64LRdHKafLkAbqfAZdRxp3YrmMfd8UoAYxpzd96vtq",
  "key44": "GDvWoTXBnsjZFEB377unU92vw7eeF7o37wqxq4hSan8mPEMqcwYhYEZSuk7k8kPTtyTVE8tLmwq9qMeXvnEaScq",
  "key45": "5cVfEMBQvHdS6PmmYWsNGVHwRvv1agX6mT7YT8eRYZGLYiepxqXAZ5JwT8EwD1bPB4TpkjexTikZD14ybu4EoxhU",
  "key46": "a8FydLNtnEtCeNswB2BqT65hHpQwHfLd1C5M918s8yVv9J9p93AiWYL4dTDAKxRNkRXmCFF2mJVCcGd73zWcTD9",
  "key47": "2tfETYfvK1d47DxAA7UJckSWuNUMBZycgMDwfjHDPmzV1TfDH79ebZL3B92FGfN2RyyUXApFTeYfpgm592Ds3rr1"
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

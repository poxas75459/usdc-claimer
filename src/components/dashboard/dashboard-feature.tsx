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
    "5Tx7Yi7QDWQAT1wS8yMw29imTfzYfPsNJiLPviidD7w1KNZxEbUFrRtvBkFzRmmXeT4FMdDSTcJwaX4ESk6oaRqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cjx3KoR6EQ5X2YDocrXv2V8ezdQ2n43Ab1vNBhK6e8Yctwxgsf1RXfvCNNjBDjwRNTAL2qf3S5jZ9HJBgXbRVD6",
  "key1": "5XFVdQcGqn25vSi9vmCmDT294hhB9St3VMWHoesM2UH1z1cPRbXt5vkDCpNe2GP4vvKtjUuFWL1CvQrT7hHoWCMi",
  "key2": "if5hoiVy5G26fYLSXcZvn953K3dXPxAtKdr2dBq6vXzahXpwGnTRfBZTF3rTunyVMP9JCqqFHXi3fK7b5XDhie2",
  "key3": "292RVUCqcVcuLFQxSQdrHAbA4XWDCwq5eqmxy4MtAe8UW69BEcBaLgL4nSBDbLSsLcHyqUaZYYBMvXfwsx8e8rBY",
  "key4": "2WWqjynry9KR43VdhjNTHoa7XUu3YCdqxpSs4tLuj6cHD1xxcpbccnFmS2HNR9uuAjiiwv4XN4P1FY6bzRNu28su",
  "key5": "2F9QRbHtYqDuveeE7Nx8rmHGXv5anYvbGrrfuGVjkh5F8cTCGG16EyqJkRWxSDphiurE8Zz4eCwopWmRw1CPpaXq",
  "key6": "3DgdzNMN44WWZPRPTLAviDvL1mKaHckYmgekT4yGLmxsjjN4L5nSKpdNiPjZAPE7CtGyb3dgo6EhQanWUBBLV9Q",
  "key7": "4RRRnsRGwZFt71p7gGGMA7HXsen7SbjWcUx8Lad49ATdLytDfJT9x6t9eznHWtZAznDx54zsMGiVpPD88CNavwy4",
  "key8": "2Z67viqWxBTTW73ycFSxmzB6wKo6PTDx5ySAdgCmsCct4ByGp4bnD5TEP3QFzNmPmBqqy62u2K1SZnoZo4RtQi9W",
  "key9": "LhBQN4EwRbGPVQFV1AejySbNru4AYhy7irLZHAX67ThisxcQpmEA1dqaAyYWWvTZ6cFk7wyLdPA1WHw54P8kh9T",
  "key10": "4yGq3yNBJQCRyvPjMB7YwsN5kBEJpVYYvq7qTAYVYJmmqznFyQa9Bso2VPp6puxWGRAyjSfRZXPy9bdNDr2qfPjp",
  "key11": "5AG51rdPRP992jnrAj7BMQxMRRvtVjEspAT4j5qf7knWMdbiMBzcSyzAKACZ3cdAKVpYprjXVGt8di1GLvfGjguE",
  "key12": "3oLDTW432xFHET2W5NvETUzwQu2e5LFmY7c7r2zkQJtTJAPYhwf1uJr2hMU4D2NSxfm73EQ4t2d8ijav8f7qfKhP",
  "key13": "2Vd9M1HibnGVBJGByJUNc76yGvoKwuXcgsRgo9iSGBAYBVf6XZQmE8vzQB8v4VxwAeqqjMtZuK5hCXiQ4d9DSj5A",
  "key14": "5x1Pr3moRkSDU1KZDpSUeZZu2X6FEGGcJqJ6PHjaHXtzqGuAfzRA9zVLhCRtpgDyww7SHzXZkefBdqqTFfuQppK3",
  "key15": "2m5oPhyNfFRto3Jp1wuSPbwWGNTxnpq9uScs6sU3R2qgxt5UybmmDTWXvp1UoQ8CF6fZ3GNZGF4RDW5fEPtrhZ6F",
  "key16": "nDcju6o2eebWF6FS3K6NhPrmngNWVsZxTvDdfg9cADXau3BsQAxsmcNALFwuUVWSBiqSLu6oaqeJWkpEhVdmD5T",
  "key17": "3d5JvbjpV5ohV1MekGaVKKVDeF8CkcVdVF2KEEz4J68Ymq7ctfuHEA7wqSWrFfwudx45GN8zv2xzUpdBh34diEzr",
  "key18": "3pUuDq7amDJ5G6k8eLhEAUBxpspWXN7pME2obHBcBB9EUnHWK6oWmKWkiWjYh8Bhnv6XehZdg1zq57uYJf6i9S2A",
  "key19": "2Rjz8aT9Aup8mKm1wgDGXZFGGGBX6eZgxqySofF5C3F6Zu3ZXYT28JuSFVwd4zhB8T8Di3GRdBCJmUpeYxspajzA",
  "key20": "28UoN7JKkNZZKnvxmZ6wtGEjgdb7ppgBqCUPVN1ryGWovJEiMZaVWiTDQaKNxe7KZUKQUB3nYo9caTMb2Pbpvh7R",
  "key21": "4dyiPNXDeKNJcc7d721RyEwJ5Gw6A9tVGvDrzsDKvEYTDzthhwDtm3NoUe7BCw3JbpSM2tUUfacLcZqznPscj4ak",
  "key22": "3cLbsBT8Lpegxyjpp3z34tmhCp9Rvh4aP7GfBZFJFuUniopuV7LoknLaN215TpXvdKYUCjLKdvNhxNgUsx5xCBXr",
  "key23": "4qc4Fn3GLc48StcyxjvmqukjFEkF8w52JdXL7cbaJzt6YyZSUYkSFPWv38L7dfUJfUrMjnx5LBJtV6jSckXar8KV",
  "key24": "5toycJew6JinjRTJfSCzeWrLT2YfSpprTeLMPx4jm8oYyjz4ktYTkBvTfRFWnVDfnQAJFu7sAuZiaPaBgtCk2Lkw",
  "key25": "4GyWMyt5cWeDq6dpDCgCjqVdMb1Uak9yFL3sjEvYx8a1JY3uw7X9wetuffBYR7H9isZymzFBPJm8YZ63F28k7X5q",
  "key26": "4AjYvFN1p9vAysELAUeXEZPi9xqe3GZqvpgNPxtbgXKKZYdJJ3TjwprGvAwGit5XVxGhJuN1B5oQpdZJuEFqoNuT",
  "key27": "27MRueEMoqW4MFuLqQAMdfWLBupPHcRUb68vLhUadNcKxKZytuWCW5Gggq3p3TVTMCzGvKsYBFdmXLZcSKA58v75",
  "key28": "272ipAuWXAcU9QP4P4e3itRXXbBKNnGWKkEsfnmX77CPa6Y9aKYFEWVZSX1D97WimC78sCTftj5QySa9rR76aS94",
  "key29": "4aAWGNmQVSiyA7iHeEGbWQSvdi6xcDYMQmzb5LcYp8bqciRqGgkPEchKmkL9jPm1kmwqmP9iw93AXToyVdMT63Pc",
  "key30": "5t3XP363kpvHsHVe4iWKMG1gPYg7zXzizA3zN1m3ZoyYHegaTZ6xhCmjokNXkqX33sffjKdv1AY6btQEd4bWVfwp",
  "key31": "4Luw7ZjDesqcqVazJ7XoigBfKUpXpi8NwLcsqoUH3jsELSAgKGaQsAWNF12yqSWuQqujmZ5vAnNgBf17MymaMWNw",
  "key32": "4zQjthjZzPvyZ9EG1WJLFppHdUqrxJFRoKF6Cug1NTqVDBJNPm9TtQLSQMGaXQHFCiKC2xkUbxGdEh97YQ8KcLF3",
  "key33": "2uh51dsWsbR61YkTQvZRHk6hzidHdoM3PAsVECQRUuwf2nL2DAoTPzmzS8tyCBDqgjovNdn2MJaES1NphEEmcViX",
  "key34": "2ciRbvuWKTjR69R7BVWPFqvDNWBSSs2Tcn5owYhK1XTTZEABkXpNnrqqi7rLLraDTFUpxSYWcmAjXmCgCRhshjYS",
  "key35": "27ikkU8o3bkha5QzMfE3kXRFYczkAE1JLxa1EQe8kgsKXCfToBrg4bSP343sxaN8BJ2Dw3fxUE6oaGqy7K3KVB9x",
  "key36": "5qDZQt9NtSosEXFo1zNkER5uMaDRtoGYjbL22jY3LvRPcXqXxLfHa5RVzVtGvuEgZonkXckqWrhFSP5cYtdN1Qdd",
  "key37": "2VsjCyfrghWwN6Zj6xof4fowTWCPdRCkj8TmmVvWMwEpWpibMKs41gAJm26MPpe84j7HuzvkqhZgeBCBziye5kms",
  "key38": "3hA8MtbBWwxTLkEQGbQheZmtxco4grJns4LhHUp6ZzGfGibNhiV44RYBELibssst88JdUWYdAx1QDgEVXmWxTi2A",
  "key39": "2mBprMtdH1tduxeca2fNmpYP3pij8kM8h4wqGqnJmeVkrsWHH4pFm5eEUNEa27KqKBwoYe7BjT3ocj55Anz1VJJY",
  "key40": "bkE57zxqGwhNR6PKGYh39UcpCN5jcD1DMmqybcgnYqMnHkCZuwmKEvjQ3ktH37Sq2ZtfJFZFkhsq9o5kufLWXpe"
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

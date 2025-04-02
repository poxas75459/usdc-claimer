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
    "26BAjT3sSiZKQ4vzWoWsw2bPMw4ZxXFWKaoEykboki7j8hZ5mgmLGpHCKKv9KGzAKnpd9yDa3k3ueTwVgG53HRzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heE2n7o57Nmp4btURPtwfpHd35DyWzUXsinG5zBMuRkn4Q73GJNiHvzA2QywA6bGyzWuANvGHjPnqJonYDDKVmk",
  "key1": "TY5uyjwHQTM2rMCsvWeAhHa3BcyL1qRjnwDQTkvuL6598TCQBeTRfwPVa18zwK3FjsFkKActkxTzCX9UYutCYkx",
  "key2": "R5JMxiEYpSGG2ZPirBG9ZD3a74GMaTrPTF769B6EPYRRn6NLq985u2ohSVpTWrVJq1nvdhRPbmg6EppXLXQEpG3",
  "key3": "KptPYsN8QYydv8HAhLqm4ZycwXny8Q7BntqxB7cYjhUwY2zvxzT7pvhMqMDdiyZNpxyBDkp5jY1eRZe7PgSCVBs",
  "key4": "3XHc4Mv7EbvrJXTwyeXb4edG3J1zYpE5o7uFJjeiJVFkBSBYkV8MAHysdfGaEZYXmmynwEECYehz3zVsNfgV4zEY",
  "key5": "4G29Raj8Y1YmcE9fPPmPpk8LSQY1yfYP7VPmgHhWoREmHWC6rw2eUKyRA8Sms6657Uw8hcv1w58L7Ro4TbQgrXqg",
  "key6": "2uhg7Zj9p92GjdBtM9EQTdcpxVLz4aJj4EMuwhHzCSKvAZJMAiB3GeN7HD1RVvdkAHdUMF8PwnNNh514E4fY81Cp",
  "key7": "CuHqUduLe8tJotRrZgY1S5rfWKswzYXBM6rKHBrGhL3hWoWLhsxvMHq5HfvAuSjNQzQacFzSqk2Zk4mogDsNEpW",
  "key8": "5k6v672sveUVz67gtVA4zkv6SfQUQMhKKBS7xKGf6vBtREWidr24tpt7LdGSvgcrWFcLCCVnKS3WKouTZn2dKaTJ",
  "key9": "4Uk9Q7SA1fqZpTj8YZRVeeQnfpQFgns1pnhmGpkMfYfA8zFBqfmXMPk89yWfduKoChWzTZqpaZRze9HtDB5KkRJr",
  "key10": "rPBWZCupESDDSGLztfFNdjb9t4zVFiEX93LgZXoRKq83M8ePgeDi749ztbZkpaNcjmSoiQTm8qzg2BZSJjVDxp7",
  "key11": "2SoFVfSsfM1wPVzVc2UPYTJYzz7bvsirzQ96GVsRDDDTsaQQycM5qzFmh3jEyfAgPSdbdxR9DqxWoWBpbVUrAzJe",
  "key12": "3kdVzhJCDx6vTybZpA7wGoVbEjA8Er6VJN4cZc7iiGrTRgjGt7AdfHDUxc1igcww1r8xNF6patQj4kJjRTuvznPY",
  "key13": "3ZxJjCRjJH8CMD6t7nK1EHHbcvvnqaPe6UretgJT1UhMvhQ3R2LrPvC8XzS4LKETXB1s3fWywxp87cBCyPbjExjN",
  "key14": "2QFvP4FGahYMKYC5Sr6EjrWYMjQgQr1kWv7QhzjVntscv99WHWjsLU4ygAbNw2FbJd16jgx5eGgFw1d7yGCEqc3T",
  "key15": "4YjLUMPaPdwwwJuP3tyGPQnaPTX4i3i8reEaW4EkwCm1zqCqNUyBqhsG1CnDZzJ4RxezhgdVr4YQb6vyCdmqMoPZ",
  "key16": "5YuXXydHKUbn2mG129zdRfNwCtV4ig8nRDigg6obSp7KsW3SQZgDz3835vpWrJ8NGhsDNv8UC95sYCKWggrg2kMV",
  "key17": "5a4Ngh5kiDXRK8MNJ7wvaV2XbUJnoUArigCpXyKdCjLqXkiZKRVAGybP67o3YW6B7mWatRZ5bxEr3MvtyaPfa6QK",
  "key18": "4MEmKcRr9o8ahNUPEAnwy2oG2VkSf1YT8ikJ17882XrCnNDx5jJ6YmH6y1xX9nYYH9CVRT3b1V4fTkEg46LrBka8",
  "key19": "5xzsJar9spTikwXA6E2KVif2jSfFtr96wMk98Sex15Hjfhu5yyFEVoiru4tKEc1ngtSSHxNEU9iYu6v9RspE4naV",
  "key20": "3RexT9N9VLGzLHjspqxRSQNvn4WyRPo4pahTGG6mgm8QNAQQ8h8o53cozNbFjwyVeQqDhhNjmxz6cgDWnrSY617e",
  "key21": "2cMB5bnNZfkVqLdHTAhomPKzWYffZ2dHNkFrnvyDJyiyVyVrR9Aebe8aVBGszWUqK6imz2J3VUi1FhheGrumXVV8",
  "key22": "3TgoHwrh7TpCC2HFeYEuaixHSmwXpNzBomNom8cvkrFp3tgMarM9VbejHA2x3b5DuGkiLMaTgosD7nqiSfoqAPei",
  "key23": "2c2bSAE2j4vtvVaZwQz8KTtMfRvZDuYn2uVTKgy1jtR2FpWAe5b6dGQP6HpWQcLBBNCLFy6YaaTwubhAtPCw4rBv",
  "key24": "5fp9rT4jTAUykN3z6hEsRDJYQvZtpwpRc9w3NxWAfk4vPUYJgvetydSERC3HBBxtshFQLAR9BosBX3XwhtS636m8",
  "key25": "3W7uKaZWfhGNHfTnGE65fhJaEcC189Puztm1qe9Lh2DsxuhfkD6sdr8tsvyFYPZDCdqA21RtKhhZiVdHbRHeHYzz",
  "key26": "4HuCig62E3LjTxeo4ci8zNSYd5tWAXV1nGLGy5AQtgchkFbnXYbKD63rbwfn25uvUqamJ8Zad8TGzNW51BZfkzq1",
  "key27": "3LiB2YeaYEgzdW9ETBykQ9wPHGwsSR82HbJ1Y6wUXBzvV7tdzc4sJzKTmosRyrWXY4qVUpahMmXbvQNfBqmTq2Bc",
  "key28": "2xtjs7qZErBBLTPNDfuviYEqrdj57Lh2nD9zWkbyHWikNjthk5c8H91UGDcGHKcQMdMDxewhv7pnTU58YcfNgBGk",
  "key29": "2WWrF5VDuf8fYky2miiHXhFDCnrbr9cSg17Pt28Xx3ifrDJRaoUrPgjHJYJW7Z5QVHnmMeojE9FpcCNqYgnCdaF7"
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

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
    "7JvMgba8fDZ9tgGyqgTxYSqNE5Fd7VEmdthnPU7yWoPMU8W31u9n9AhZ9jD1tio3CDhCAXXroTzEWo5p3SFxnhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55i16BD2ay8Kufuc7yzji9taC97fDZYS651pWz5yAw3Lk1HzmhdXG5qnhLXhTJQZAS4NQ1sHLNyyJqn2GW6w9LGG",
  "key1": "32HXfuQjHBYoYUGj6o9EciKGYvbn98RY1pxB6YpCtzUEs5htoqfDEV3ToGSBGBnqF4bVmem4bpxWz9tiCmUXnYMH",
  "key2": "2oBXkKg3vfJ5ABh5kViM4dVn4tFPFUvERBQiC4xMyLdqktBztQUoXFGq7nzhYGXmcbNwSVxx64YSHuu1suU9DiZU",
  "key3": "5XY38BoE9P2U2U1Asi7Gd7rc4iZV7RwmHPG5dtYkeSA6pRRp5MKowaevSuB1y4pL8uLDAL3d5o9Mkc3PaYgdgD2M",
  "key4": "2qEzi2iFNYmutd1o3fzJZFihXMcNbXs75tSD9NMTVkMiJsXiNY3emcK9NmdkeQWmQc8qtRbPNmynUUnVwEgvX8vA",
  "key5": "42EDSKnaBeFrYfHCqa44jFDu6hMr8hPfAjP3LNBKsA76LiTDKqGQWUW7pREjLAiB5fS6adqH1wbv4nFoKVngCSLg",
  "key6": "2jExKaXNsQ7bKTysHjZPB8YfxtXaoaM3973SmapkAMNr2Tm1L6b74g21zX3iQjdG75hFz7BSoKEBgVMU6mhYHtxw",
  "key7": "29rxDfoas2hJDWaX7gCsdas38KeyH3JPY3DcPPiC88gU1a5qaGRxT3TSQ8U21wK5YPASyfVyxhTiVjmxBwGS8DMJ",
  "key8": "3CqxWMiTLjtKUBa7PHjFy6Lny68ffjiypS8Ad8YYpQzi7WKjqy7Hm71MjPnxj13NGYheKQVUP5SxnVfTFy3ap2fs",
  "key9": "5vs341rRABVoKDgYJaT94vZE1wDhQuvXpZwcJN27UqSAYMgjX5haU9qRmkNffp4FaarP4te6hwCYfewN9FumzrC",
  "key10": "Hq4GCsiNdKSMfFaHu58bkZuGjy8t2zxyAB9cX4bzC6jYqrW5xnUbtiHSWJSTB6ps4Cb6EAsNTSqQKJktQ8tD8ox",
  "key11": "5bKwD3FLw3ifpdYSdveTy93n77Uw6B6MVNSLmFgt1M7dqSoDVmMRVtHwaiaJPUbmkAzDSyrcCgDJtVQ9EHazbFAE",
  "key12": "35P8PNyU8L14Hhzh7mdtYyssRdvtaaGEMHoscWP72Y1dfaifhzRbLVqtKZwyjMoJapsniXxinPXwGmeZSNNFpQCL",
  "key13": "3DrHEiLzXfygBcCQkac3akcKkT2BigXp2URM5uJ6kyFQWvYfTkh5thmALgcmM1FUrC7Aj5wk9A98w9SGrKkUHgBA",
  "key14": "5boL9QjiqZVXc9zaaAkYWnM92iSY9qcifG2DMt69mKGHXb67f49zWmn3iT5TcKydER8F51PBb7tV36arw3QLeMHM",
  "key15": "2BYvjso3N74b6mZp7631VdM1CQ794nXrZ7yJL41TFAtZpCwdiRWC58tV1YWWZUsuH4DkgmqdsYisDKvy91D4pVVn",
  "key16": "5CM6YMXH8fE2PQs3d6qft1dqqRF9wawGMre7Ztx2g1rzF2kZaTyQW1aaHezUjbb6WkbwSY571YLGiNVzCvqew3gD",
  "key17": "5qvE2iFqsbGERTKwMQCPr4DiZALSaVDBAvhBv4Xnrxq3L77isaM1h2vwYT5xUZQi6x3NTocZTXRgsQMWFH9i1q6F",
  "key18": "3frJn99u9v99fGSpta4KAErdYbCKTd37nEP1qXXfrpCqqCEEKzrBkwdv9UrhNis9BgwwGc9WsTuH9DkscVo8AkXM",
  "key19": "2PUPt6dB6rRXcpnXEaEHjwE8o5XP4HwyincNwzcMuqWMy28CLR3ybYu6YykYgEUgvkuLnyLoRczn6G9WQXViUMY3",
  "key20": "2uPZS2rwkTHuYbxGFm3nNsSrRSPxDkKZYUbq1UhHrc1j8kNELprx5UCwW9hRhfi7eK43gURJF4x7VvFafcMtPfMd",
  "key21": "395GRizpceHV6zNddnRced3jsWdmA2YfZDAd8jsmr7K8Kk14eqZSjj8oABpPYy1wkMo1MJjo5bVDuH7RFfNKZuyB",
  "key22": "43SP6tdi7ZcN777QzyEDbhgyPk9Pehksin38CG6d5HpjqjbqasnWNicNPomXyuR7hxEsNFEuTJV5snp4iEwUCmYB",
  "key23": "4BdY8tTD7ztHxr8KLLrwR56s67Ax7qhkn4CPtcNeh1BwNidJrxP5XHyQCnjA4B3tWcnxtYT2VCbRkHQKtxcZXjzc",
  "key24": "2hWxso8UtXGt4eFtkrkdwWukiYgEdD887LY98jW6Ng9gdHU4VZDma17MZo8dVGbzN4vP6N9BEubSGhGkbbQLjPSi",
  "key25": "3uTBRJsUMo42yidk1GQUBcgyr9UgtPj8HKUsqLK9oBnc9r7LBRXUNXpqbQhsHeEohQ42rYg2TLNxpgq5ZB1tXoCt",
  "key26": "58pQ1iPmqaW9DFZCk4spRj2bEiJKj5XLFmTeXurW4jFX7JudMbWWNMrAJfcmzEcie6zNGW9m54uJokh3Hngo2muG",
  "key27": "2FhyvudtW8bJ8FzEDxtGmCKrbXYNLAY3Ya6yhSwhWiHBRpkTsdMemjhumC4Ceo3VXvteTXmFLJzGKup3Sd3JAZPY",
  "key28": "3ZTY4sQfP1CVG8MU3wwT2Eb1F6kJvfvZvBTiDDBitKGL3DPEZhpxpEHtzFqjQ2v2iPpj9j31i6UDs7XPVkyikSot",
  "key29": "5tPFAycWUosuL1TBNWuv6PhHCfHn7TPV3YQhUJKKAThxFjpqZRL3kbradD4g54jL4CCz6tJhhCegG3rqmcWnWNbC",
  "key30": "2tvjQqB5ZMuk8Rcw2Ss58ZxYRVpCR6hRbFexnULgj59cPqdWZimcTeC3ScrhyFqnqFogyVgsk25rEWXxqNumfmD8",
  "key31": "4oXdgncn5SeDUFCXNQeaA9C12icAyZtFJk6zc9tKQPecCHCMrXD9hrs254wckfUTTNFns9XUwdvCKeJQsBizxLN9",
  "key32": "4XpLFWQS5vKhygkgPDgC6iSXLLBaqn9CFZEY1iBabXh6UcucuWxYAu2vhpb7sST8ZDXDWMheursKiasUQyUvUgRB",
  "key33": "3uhGyrmAC8DViQFpd59cmyLgkqS8dKAjwBtrYm6BQtKLd2ryGT7SDTD6gzKUb1wQn9gxVKZudhxbnS3EHyKby3z5",
  "key34": "5bjNRdmjcmvAb6VPA1rN16DwmcANJymoZxMC8DPXgLrUkDzW1Lq5cncKAprgM4ZA9Ki1Ntp8T8tH75ShmogCMBsG",
  "key35": "3uUH1Qsv9WP6P5AvhDRuRVrpc1rJd5SwJmU3Ebqx5L8fZCfwf8UoBW2JPoZQ9KvVrw7YcznCpyxfjyf28isWserx",
  "key36": "5UwowuGYUKFvb3Zz4DMBjS2dEMbsRaawKJbZ1Eu5c4LvqvnEYq4XpL1hkTqWfmnvbQiKDE4WerF8wEbKfKzNtGsP"
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

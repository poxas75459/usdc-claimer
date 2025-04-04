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
    "38GRLqD3p2Ri9A51Ys4b43SusTvmktrKeJd87CSW8sUufxL37j3QoeHWrJ5tp3c3g1J2DLpHfBhGKdtzKXPbMZav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKtwsWhc4WvfJr9eHaN72TGLTw2y6VBFaPxbqB1sEszpDhsEeeRE6CQ3BDRLfLtVhFyFfNce34SyoBkLYxM2Fbp",
  "key1": "oLJaQ1xjfNGJdSvcDDP7xKGe5P1MZVbkAZPsdDVoaaRzfLmW61EQknrt2v6recbH1GvD2xfbzhGJCpuTeJpe1ru",
  "key2": "3iw4Ug3JwCrZe2bAA75kiqGjAsFhogKoc1GcHhR9HbTNhFFHBibdfwZg3xF1YWb6eTgMyNxJvFp7yceL74vpdhLs",
  "key3": "63UZiB2F6a59UX1gWAAMs9C7v4xEdKrxhq8HBNrxUXry9ykfi5Gwdp8axHQ1SeKWAWsteFAxFTD6bPsJPm1mwQwj",
  "key4": "3ksbaco2xawvZjdJJ5SyDLdUqRJrxjbdgShaKszsdTxv9b55pxro1i7CrBZ7x1zyiYbGiUR2GcL4VxesRinidFHS",
  "key5": "33XsNpGX25ZpEVK6SyPYfsStvFzKg4VE3eTfxCpT9MaBc646NpmQnUUFuhqLAgWCPh5p4HJ5rL1VD6A3Dc4F34WS",
  "key6": "3cxWpb5iHMPe8Chi1ozjFYder2D65sxfc6Rig6FJsQxh4dB3nHEjUDLMdSKSyUcNRZfagJtWL2CtJvKknyAVaNxj",
  "key7": "2fM2Ubar7uXjuuw2jZMbKabi6KPv36aWxMrgJCxxhcaxMsLeHq9bRjXc761t9hefjidHNdfr2RrziHkF2Usw9RT8",
  "key8": "5ydPhkq4CeownoW6RdXyCSLv81LAy6guxxkzYvsnMLyahCc3zFxqp1uKMtdLRxRR4eehabQxJ2KUc9irz1skr9fL",
  "key9": "2XvyvEDDHpgGZPCBLKZmPJ8vmiyMHRPjZn8mgSTy9ZtmoUcJiwGMyuQpDbvznDWws3zePZ8k4RuxEyhy8HEHT5dx",
  "key10": "4wJ85jNEa3MCzeRzSpTZLgd7n2SFGcuuFKFSuQcapiLygLbXmmCCrW2DSrxv1r8tqeoYCxWmiTAb5VsEBN9HA5UV",
  "key11": "4ckhqcUucqdwdet5xWwYPvDJRJEZrUR5hJdEaVmSU8o7NzDVRpWGjSgcBqqryfopqwnPh54VGDNk1agE5euaQyCP",
  "key12": "38n67bq2hNvvDPD13w8XABwr36GZk7Pmv4jCMPRPuccrCEbY7gxDKuUAK9ECHUHkRWK8bcU3gXdhGiPK5P7qsve3",
  "key13": "3vefHRdj2xTTDFweMZXea3TmTSBYWsuqgFBUE1HrxPE6rA5k4FiVzgZPQ52RS3j92JwbT9GAFSGXfZNydYGFD85D",
  "key14": "4K6d5VSDNdwKzi9sAiN12T76B1iVj526TjvzrFuR2t6nq38GqhvECNdEvXMdzH2iWq8X3KMCskdB62r2sLkrd3Tm",
  "key15": "5tVqvugjYAjK7fRUonY8Pba99GS43NXjW27pZ5ZVjLP715wCoGBLgKBhzBGvDJaKpLiuvps9tQ9moSPybN4UCism",
  "key16": "23SVgLSTPNXLJ5M2B77BRz4F41R21pnzRSabxid2SijdcbTgJuJ2FBgaPgeqsCSmJKBKyqsQ4bHnwy8EqErDggGU",
  "key17": "5YqYS6ueGnP9qZMCg5jdPygiDSWhPL2PMeCyQyp1moULjftyjFmeHbbvds8kBfXFEvWn4h1xv9rxBygE2BfKhRrQ",
  "key18": "fSyVS9JgkeeCK6kH8HNPZZVWvaY4L112vV9ZUQHBqZmnVEAuJiNHGV8NaZZ4EptvnJkRWxnZYsqJWgKcwYXNgai",
  "key19": "wJSWabqBbtMkTtCLjB9qADPvDPtnUSe865soz9e9RooBVctgGwfrYKSTEX75D7gHGTPBZcuuQHWHQb7xtuDUL6J",
  "key20": "2rsjD8WLseipGk3jJquTBNmhtysdkoexexejVqDJRQdXG9Vzvj7X4xS9LvPTVVzKHxZBBfbmwQH6aYJ4oJxgLgs6",
  "key21": "4FFSrDfUSH6dcv6HqtjAaH93ADB1wGhYxnLEGBMnyW91vgjUTNDukbvx4WuSPm25eNX1GjbVETD9bNxx5FoEdPcQ",
  "key22": "3nreP9X5FYAa1CV1yAnECkrxuthmzHt2fbXbZ7B4aBa1xBEzQtoqKRrppxGEpa5EVZ54FZjurhJJkEcmaoVXzA11",
  "key23": "3A7nQyBEmHQFpEFteRnbhcKEenTtdLpvZPgmiCoEqXxFUtVHCrkUYzDTVM8hJ7CSAghdYsqjQ3yWZmnnuyhKfyVw",
  "key24": "izWz3Nit6v9A9EJ1UXX2HiyChxA5T8aaQ7mqgNtn4rjxhRirEWZkUajHyXNoD81oQVipUYc1cC7XXL3Zg6Wk6eT",
  "key25": "2zUwFePPoWtmyicg2ngEjV7jTuC7PToACGinXWZ2ntcLuuZCpL4kFKJamvcbhsnVDs6it3rLxCDTYSF2ar7TgeXt",
  "key26": "RmoWWDfw1FWqyMuLdrjKazfu1qWb2CVPjENNj6r8YavAXsHWrB98vdhaxbsDCsLAdGfcVyPTEaDzJmaZqtTGCDa",
  "key27": "2GcuN3DEcqhssrBZk5jtHMGRQtJ5zcx8HEHxaspW2LYmgerNvYtWoNFWmDzsUA4Kc5ZE4EtPbEaZQUsNxfZVtiUo",
  "key28": "CULufDkDKN12Fk72jDJRxhWNLZf8cFfoeXRKbNuwVKJdYofEqYKNCz9j8EuVpUckVsqHUGFbsZqcMcnvyweg7ka",
  "key29": "44CoRNEvveJ6Fm7thR9yKk5DwkfaeeTjVNnURA9MzcaqGrv7rs1zXZ8NyK1ZAhE7nNFkVFNBFoRYHVrXQyYjosyZ",
  "key30": "5WqJPHBKwq8QMSNxvzsZruj7wnCT2eyUCHRhYXJViPCBDSt94YY9J2XkXbUf5moUxRXEtCW99LhuomiHfxSgbAeh",
  "key31": "7GNuPUMAMnMWHcFiTArM3Ahu2KMTJhoiUrWwedZGdZd9Bo4kcnHEuSyDeKKM7HdZBkRLANkmDggUXR5k6jKbij1",
  "key32": "mpxfDKkRDvX9RWpyivURLkwASqcpnqdQg41FNcvpxLC45pfPMpPMkA2TKk12akF8U5uH3jJ5qen4YRef23ynPSC",
  "key33": "2V7XvJfaX3K2VV1kvLjfvvY5eZi1rxzcXzvfDu2iyWNcJDDkfU9DWzcnkjDgFxrRkcgNZThCqVrUdQQs9JmGYvbS",
  "key34": "5j7hDVoMWW3F1Ga1CvHDC65c3SKXwd5k62wp4d69DYmWaiVWSeWx5S2ZwKhYquMbN7VPQCfFVeNnE2id83MjRSAv",
  "key35": "2YUVzuPY62gNLgqeturZxq7R1J1wz2pkh4TuS8DpfxxunsHoxiWioz6cgRojdEAyg8t7vT7E3DCCF8o2eCRtstH1",
  "key36": "5amA5MTqBvN91FEf7xxs2qWrC1SxFdbCafaBdcVyzA3LVZiJP2cwcHnbgSZLotAEy3A3iULnAwamvYxCjrV5LU5A",
  "key37": "4z486P644wMU28SshqXm2g3TLmrw4bTiY7hjUQ67kCDPuBz9WQX1oTfGuhKJhvpihwb6HxDgymNN2f2LizyxX27z"
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

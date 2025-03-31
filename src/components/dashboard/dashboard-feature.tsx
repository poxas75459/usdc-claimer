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
    "LTWLEphQiL2oVfeGrDkShrtxTuwUnQKnVhDU6V8KBDhFPvtoxEWU5ABzPMCxWfnLyDy7kFMpL5scWcxiaFfXkt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449pw2js7p6vzSSr7XtkXQBvQJCqLdL4RqFLavUn8W5mBSuEii7ZwocaFfen63RgyqP34HRMuVxrNovRoL1LEzm2",
  "key1": "kdQADcfNtXafTfv3nVZAdr2544AhrUEcFiSc96y8ihrSU75WiBWE21UjUoqGrE1QgasHKEEUHVfKKWp1j3PFWvD",
  "key2": "5ccSHJcsNJCfDFZF496tt9MtmZ9Czad42cha15DUfFdmgPb7KQe8qtp4CRnDeCimnyDpXSJHGyCNjQbQnKJfUdWR",
  "key3": "YMLV7NTfLmuBWyGHdR3ob8FXqK2QD8uKb2W2vd9UxE1uCUswwWvm5JdAviRH32EbUbYeKzan2uLF3S3WLZpwuz1",
  "key4": "3kNuLivta3HDsCu63v4eEruzkLcTcAu7qfqz8rNPZXwexzoE645FuJqdvz6xopyYsk8i717gnZX9uwE4x7w9HhrQ",
  "key5": "4L4qrHsMQdt9QQ4hU1a3C2VDDUQ3JZ2bRjWZF7jPGEvpbHwAdjZyPbzS3UFxTUk7KkK1xk28L3Qte4zNYHWRcUG5",
  "key6": "4yVTbVN3DiwrMX2K5vpddwMEGm2HR6zKLEDn3HfTnHdAEEUop8jKAXT26yHjfMENvvJQYAwB2yJFdAJ4dh9QG4R",
  "key7": "4c9UmKkgFTxzcZCQksPcibWGia6rHyG3eeQaLJtUMWka3eKjyvtZN4b6dp3w3yHXB1z6pcRmhjD2nxX3ij9Aff2f",
  "key8": "Zk3cZTRzwvKK13YuVDp5btTmd6NXY8mT8kUWHzDE6NRSr5uM3AFSL1kzfEaXZ5FUPeeup7cmxZ18DESbKuvyn3h",
  "key9": "23B9bRMb1HhV6ZnEbkwkVSN5CM7awS1EoDXTipyqfzkpx5SjQ2atpXdjovo8JaqEMDAZ6XcjbFcxpXzHZYkDHri9",
  "key10": "4VkHdNJhkhXNhqXxJ46NMKdTWQnMNHjnwJRdQ7xK6zHAMEZWtmrxjKjVaYCXz18BiFqGZb9WCqQYNqUqeVMRenUD",
  "key11": "2xXCi9eyFFz8hgyquM32aip3daCVkriUBPSpAwTQe74NkGiJxhWc96ojaETqiZLB7dUm9agoN5USS8RntztAJygu",
  "key12": "4DWmJZdDm2MkBmA22XKZCvpWf8GmSNQaQjmHsn25wXTP5kQAFamC6KzqUuWVq7aPghTQDW8GHVZANG8pYkaez9VD",
  "key13": "2J1QHAdWmA7fcRR53LGcjndshtyc8PSg7Uka8KMtJZXmhG1SCCMr5ExCDLYryW637W4Ugwi2D5Q9rzJKY4znN2gy",
  "key14": "38TjvA9w6yBnhjTYH9eWRnFy64mvD1N84NNDG9GgxzaFkZUN8tebweS47vTwKQ9uPuXkv97YDXtbp7vjVdpHd4nh",
  "key15": "43ztckFh89EDf6mxvT5vKvWiRMTz76hC68CZjbVbgVa1hqSYQ9r2AQKwq6AEufiVXqjbQf5eSnM47zat2SW2SRMQ",
  "key16": "2LrsF7VW7DdBAqF1rUhXiY1VRh6aodm6NKj5ReFZXGbJNt8PXntdKSRdBDJNXxXs45PAVGSpC6bj4C16rsEduFoc",
  "key17": "wH5UNAK6gpSPJgwr5eWcCfF3X3gAXsyZbCzMfEY46cEumYX8myidMdNMpHDTLuqP1cf8RQCyKXuPy4FFnxFMcDE",
  "key18": "2aaBFyTmGfWThsNhXvKkdHhTM47XjySUbfqZBjaD27pZzwqE6JnCuBF6XXjVEZGNfv7sTgMG4d82vqN4NMSNw4SZ",
  "key19": "4wNCkCmh9UkjHXnZ1DoqUFLa1p39KPCinMMmM4qWNiJgHgiD4C7UBJtc8M7eWxP9JBPSDvRu1p5KwRaUBmsan757",
  "key20": "2tdy4UBcyRJ12pEZ1m2oC8vhYfNrtM8x8R58CCXaXZth22Kw9LoWoqQUeDnnAdj2L93cWEiYGQW8sxPSZffZ41Uf",
  "key21": "3TcQ3by94EDw5TcVEmQ9A75zoqybYPUiCxDJaLT1g39o5bnTSqWhzVrEg8TgF2RkCZxNmbK7wVHadq2RkPxxKQwW",
  "key22": "49JLKFsE8TjExubGQVYqmTHNLQZybqcb9iz47QGe6ckMkomPaKLyg11pLaTWjZi5PCtiJiL9EEzDz2hLbh9McUee",
  "key23": "2GCGdAfbXthYZQyhXhjQVHzw4sBi6EnKLxKzkMJDLgR6wGoBPWsC7VnXynCAGnhQQ1NatbceUz3Ltd7kNKYxu7xt",
  "key24": "5mGHcsji62vKMvdTGbb7YZeDwoLsoPjYV4XPo8HZdUqRcBWcmiXjnD6VoDLXd589AsKp4a9sCEhCtnHaXL2duCwi",
  "key25": "2UXj1UBRYLmXTAFY44GHWzmBN55XjoKwcjTkTTncdBPjdbz1NYosQxcQsC72abqkkjN43PX7bVzTiipg1yWUSGM5",
  "key26": "urPAcSrBvssJYQK3uoLsNc8v8qdQSpnpXegU9B4J49Th8LiPbo1pCRQHxpfGQcnL5axnk428aGEwP9iVGCNLmsS",
  "key27": "3L2jcL1Y99ckiNqjFmXpycnQnz8t5DFgz6hJ7cBpvqTwHa8SpnRwZrmvsv42dZuuFEd9X6aHHbYZMmukwLEq6WEB",
  "key28": "qUVQrYxFeS5icAjCSZJu3KKfftL6JXvppA9vZrLt1b5XdvSeyiGmh6RrLLBtp9Yt767Pr5EGb8at4nKKzdNLSAb",
  "key29": "4ohQYmhUt8ohTZmzhAoXx9vbMAxMwBZvz4WJXDmiiPRcEfpvpTxZnPRDc1ugthNKy9sznSt4qQSixeb82qEjVugy",
  "key30": "4dmig7BUkqHSJ23hXMfzUaGMCknCW8doqJNZv2KTcDJ2Y8fcwuiDdGvtwKU1zfwuATNrkhdWQxhQPaM7x5w9afKm",
  "key31": "4JLTqJ9M6xRM6TupcXPbE2YrgNAyaTHQXvpUKrb15my7EMqakGL61LS1SzmfPXkBBGaRhgu87UG2sSFf4Q3tZdUx",
  "key32": "4ya6ZUDQeDkZpv9U2cexWa9X8yHWoN4cG1pyEkP3t2RRy1Rt96RJo5WynY4MtMcJeL5ELwX87PHT6KknkK3vyu4X",
  "key33": "3yNGJ37185jT35XUoTxaZ4E8NpXEYSsufPxbBKtjiz9rSo3h43dNGvHN3iULCJg8htdwsfkoePW4RrBJHHaVRG43",
  "key34": "5S4mvp783LcUBgiV2PmryYUKuMJ44AwJ7tQXJkvRH4tTVuAt9W7zapnPgekXd8NMqTHFrovY497crYzcQRXiXKGa",
  "key35": "2Bpyjm7KA2SWC7XSGNEYgXJtTkVCj9qhxX7veMzjJvMBqM4sTKcapCmPLMEQC8p3SNbni5x685uVk3tzwBrtneS2",
  "key36": "3MQgTDQHtrhQcUvvpCf2M1CVHMf3vMgD4JZdcwx6wFauL2CEQ5AUeuSNwcUAhxCTkjZ6QvWs1bGuZcwaaFh87VAM",
  "key37": "4h7vJKSns6RKWv6GfSxtvPoEHVWk4TD2ZeZCE9dcGAFvMoHtoyDYhrpmoa2wGfmb4EFqaDAxdXSZmPG4guQs2xgi",
  "key38": "t2BsPePyRTPzyUHJHbX7P1wdEhBLiJFDdNzqzWEzd1Fx79Am21ppByVJWBrDVEqQwhNfZgbNtosZ5DKWiUMenbZ",
  "key39": "56kmfkvaXGhZY6qh2zHydiPURPXBCfA3gC3g3cbENNhpuRdGWSi4W9MV3LZ7kcL2KnqG61wSN1Myy3uKTJtUTm2m"
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

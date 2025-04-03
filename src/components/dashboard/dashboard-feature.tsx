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
    "4ZUs6J4DvANoNZs2MH8UoXTnEu5AoFNXyH5N88c8n9WpsxBBvnQeibNkohpY8fTcpuopurtsFtUbyTDLzS2H2iZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdwDTGsP7ATu5PyFV6Wbgcwe2EG3hyPG6x1CSd9KoZ71ym1byRKnq2QFbtZKse9Z4Lpf8T8usyvQ6FVMxdNYUY7",
  "key1": "5kC9yiSYWb45v5cEgVb16EFkcmaPe5jDQhCZ22VxRfHuoEZF5SZ9nFZCcdRFB28we6QccC57KwFTqUzy3bo4CV7U",
  "key2": "5QEPU4qT9EPCWtPdJUpcz2W1a2E4iL5RE8fy4oNkBtw44oGo1t8TBu1WK3BtAVDtS7aAUS5Ltv2xerjM2mwXv7nv",
  "key3": "5w8GYHvM7MnJd7MD48cZEveKyiFEvkBgmDCXDgrDE9FGLWMcw7SNPpaivPP5UGRQBxih1oAJyyCdAK2PjfNDQhRC",
  "key4": "3PEzdr7zVY7QAoVArp7A2kowNvJ2ivzKFqiv3Zfpsay3GASbPhaPTWWJbsimK3bVAaDoPBKtY6VjrcABgq3njmR9",
  "key5": "2EC4STawXBvrqJhcdkrMbCYmCePNHEXgsXbkumxijYpegPWxj7vMeEqsfsiRauibohDUGqMSNomhuvDK9fL1FeGr",
  "key6": "4mrnzCmQhsTo4gRVqYASUgqgWXK6rshFPtX7b1eTFuNMgfYpYmKNC53B2KADwqDWkagosYZACMoTKrXWnqEPwA76",
  "key7": "2CkxzWc1r8KM5eJctHXBQx7463fgM68P5G3yx2qmmfWCqJyTnGof3RT4S8QPBjgogdmnSbL4dgCnevwugPds9wTd",
  "key8": "3E3rPq2W8rciT7mQkd9RpGSc9dsRKkCmNXzSsujTYMwDT57Bv4UTBmZ1q6xqZ5YjZvb2g5sweodNPL1aXMjAzFA7",
  "key9": "2DbXiZWE9pnyHZmfgCEHkYxSQiBpFNJ7cd12REbLps7gRkhBQaAfKitVWr8i1tuLskS8pzmkBDUAZv57DHkBfc1r",
  "key10": "24maomwQwW8UB3McK12Vn7Q8GjziFk5h6AtXgHSbvp43j4KJoDjhdxPtRGh4qAjyCYupy5NwYi5H4hjjD2f6rpEP",
  "key11": "1KBATdb16sPn74GcCoZqTJjrW3ejFhSkZGj88s7EyXrD7DSJDsfb4hVfqPYcEQE1HbwEuTcb3RkCcDwWLZXMEGL",
  "key12": "2hhg5WguUG8dBaFkCx5zJrYNMxSJfaioHxebXX31ZVKq4aZL8QGRo2DUeTXvKmXqrM6uwqeubkrmtnJDMQaWpqo",
  "key13": "5oPQ4FXDmRHCZzRm64qvipjasE9d2MQT24Vjoumk2pmPn3LFuJTePvEEtNsnikKsd3sAYAZ64oG1nTrsQkkx9nfu",
  "key14": "27opgU1e6xfrmkv1BngXcafj3GfypRSaH1242Me37ewQNfuUhRwX2N6ob5Rw9ZwyxPLiLRXkpoPRh8J5i6M3idjB",
  "key15": "4JfKqEyjAnMEs3wjs1k5jqguhWgw7TX2PAUJy3DD6J7anpVFbZAeivj2BkRnyyHHBQVxaNhf7A1v4qnkQAD5of88",
  "key16": "5vS8XYygR9PyjMRQqGkSwrUXfG76eSnYnaF2RrERdXMaF541WYNaUWCv8eUwfjMu6r7URugGaKKDH5p9P346FJ6x",
  "key17": "2npmaJj1BYKWKxbaZ4L8p2dAZvbaRfrKSvBPM1XVeBiEMy5YzRKZHQruT3iGTMxQSgUtvobSNwUQ6y9dJE6yYJRB",
  "key18": "5wC1zYpKaWVJKktJJ9bVdZCXrYyt7drecxrPSqbs4V3tHWqLmcebXGVLHjeooeoJGuXm1s4jg4ZmYPc1XLDaNMaG",
  "key19": "27FJrJzAicdaApRtYVFv8VrVVrsKFCHWzJZamqGGLAuwmJ34X8FtwDbJ6dH3djT3dMdFbCoXmGPqhJxKC3hNSgFa",
  "key20": "4HvWNbWMemBwTaKqDuurUCGAHiM2Hm2RzTaMoTNrfbZ6zRyMEZ5ako3433fF9X6mnCGBEbc6yczjz8LeTsecciGY",
  "key21": "4usaDtkwLrn5gg9AmL3NFvAwm6SFL17117qSXxPVoTADYF1reC7GJjcrQ3wXDZESpu5gzfKuBf6zefJnLDE7J6hE",
  "key22": "5m4V4w6GwLuc28hPnbkQUeXERqirnVrQVbPV5ZL4XM5Ns6JrkvtW14X4qpPb51RPCLcU9j9SUjSQBAF45GBaGddu",
  "key23": "5e9xZ4jatbFGw6ySzSUF7T61kD9SFWQVsA5hvW5iHyiMamRbSPLxjc3o5JQnKqrBoKjX6EjtrkjD8Rk1xGx7wHyn",
  "key24": "5TAFQyG3n5gWjGyaXJ7br91dJMt3BJykTWp5gE2sSWCYyFGSqEJZ8pPHEd7rmS6w9KtTmcfNmjuWX67FotjiP6oG",
  "key25": "4deKZf9QLerMjJMF9GXZDNtwjmHuzhAhXyadGBVzYP722ei1TnYwEBd9SD7BLM6rRvA5NosbXoTsCXzaxY4f8Xhg",
  "key26": "5MbhrjH1yer93p85qEFzT9ANRGVkf9zH5Yue1HZrSP8datUmPkN9Nuiqrv8G6naPi6wyz8Lde5HVCVUHk7hpcyTc",
  "key27": "2VNkfJGhufPhkXxMpX4md1UyTd7DXN5obsgJfcrZUxNU9RydQBh3ptj27bHrLhyDnzUMjtmaYFLpsbvq9zrSzASS",
  "key28": "3PxyhLp8uyeLczAeT5KjVSo9yWKVJ5tYw3KyyG4E4zTmfnaMyjoS4nWh2VWfbRPPf6qJFy268wxevhRgwsBx2yCf",
  "key29": "32zyHr5i8CthctbtzVM3tnaCc7PaKSU7m9adVZMqq8Tsc2d87P6kDnwyHrwTNcSko46bWpRz2dZ6S3rXWXk9V3Ev",
  "key30": "211F6KBAk58M2BWfrUCQnNLYrWCVNU4jd2BHF1MSdC2cX4X6vH7E3ZK3Up9EgmGoYK9A8yVscvkcRFD9brSTWDno",
  "key31": "4furAcxiTqvutuZu58T6qrcz9zZsk41Huaoj1jitykr51UvanMyVEoEZ64hKFgNBkdNLyDRBBzEkwdWDf98VzyaF",
  "key32": "3K2gsKA4QmSRUsnUYvHnoA4biUres6AvZNQVMsqn7dzSDk1MfDa7nF31FjPEvMFr8uwsGakZQS7JEWzSzyBRdmnK",
  "key33": "5phpVaMCuVG6H8x6XKLwRhXJgqPKJnfvgwUkcHq9yJujGk9j2p5jAYeBYcibXHTRcdrCSNecgHGc4urKM5GjCdAB"
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

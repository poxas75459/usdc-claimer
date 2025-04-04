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
    "ukaXcordqtS1zCh3vVoK8wWb83At9X1QZbbcQ4D9m5gbUEottL5zL1LUUCKkUjmm2eAy7jsmz4z2pLBYnPvpx4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hS5iuLmuYacj2qYNDWfptxLin8c56b8HJE6FiuZsJGmjPfbf2DgCSi1rWSEm3S6SsjHFkt3QeEeZQ6sRH2fEYDu",
  "key1": "4Z85WRuuNYMLTFcDwaDz9HCzBaDfKhsaF4MUnMpMMPMkmzq5c1FAzikFeGTVzs7gXknvBGbHyyS4f8Ef89Ce7JMv",
  "key2": "4akKQk4xtCN6DsQht5J5pQ4SuJcMTiZhDEWM5b82XvYcyT2NfBcCtjGf1DYD4eoRDZfrkCiXbdwcQis8zeJG9scG",
  "key3": "9Hj5iA8aYED4DXBbhu5kCwqbZJ9BJDsAp3shVtEjVFziGYBb4DroPWEjcUVVsyDQdb76XfCbQmb3iujobxB1b51",
  "key4": "3eKEm6RBdvpc9BDQGXXihUP1LnAsZ8VYpq3SRdQjdSc7kCVwZeWBSfDWg6Ri5GygGu27WBoNP6QZdSant19KDPV2",
  "key5": "24W2LWr7BPzXQ5bHVwGTei3vRfGEb3RivL67LLReznJScN4CGxF3gJUXuwqC9cayg3YzteiskzfJVdhejQuLuURi",
  "key6": "KiaVwk1YSysmwq415Svg9fZxLndhPgN5oS7P9bxAkwHQk1qmNJFXr8b9fPvXsK1VZAT5aqcpAtqEEgMtuUzZyyN",
  "key7": "BVFSrKqAxWBPSbrBcoTqq5t94TAJ5pcLvZgm4DQ9ev2MG779VWEHME74BFJoVfUevNCdKq2iFFXprNNVriaXGYX",
  "key8": "3A8Jyy6ugZfGcsLAMV2i1HnG3TMAvNYYghqjNRQsVNWXL5QEVxuTi5F2K5YzQy6ELEd84L1NAoR6z6gpjJpB9q9P",
  "key9": "3JjLjJsvWZ95zsPkasRQ4jSFRPir1BwCJ4bZ6Ua4zxXryBGAz9H4SqpBNTVanx33yJ5NtkFdQsEPP2ayAvVBiB5m",
  "key10": "2ZG3vCZc81xHc6QviF5DdCCZEW3DXv549tDsD8V7eVqdaKUu4bQVMU5FBaGuvsy6utGDwK4HS6VKSUcXCTnCm8Jm",
  "key11": "4udNk17ayLmQNX4o7MBpgkjBxrT5nrknNDmUJsGcdDJyyxPuLxMqyd23ozKW783Nxbs4ZMtHTmPfN92x3LiHGVas",
  "key12": "4JhQxtChhxjLJq6bXHBFC78VZ7ucMgEn4BaVKf1ALcfyLMrRwjyGpP9U6t43jrXYSHnKdmNvmho8pwJxAPNzsKpx",
  "key13": "4tD4kR5afDuk3EUKJoMedqB7nHy4iW9MQEfeJEBBZVXXgPauV7CDUoM2jdrdgaDT6TSSASQhJ4Hacik9A7CZmRyE",
  "key14": "2tcJhjDzQzzciRg1sX7WswToiDtK12Zp1gQTVB79uHNFrGdgwGzRhfEzNvNuTxKLWUQdXFrJmizvKZUS4eUTzVDz",
  "key15": "49ciL7P2LAweuSgn6JVCpyQnETYNAmzsy1AJ6YwwXpd2eFjVCvAZQrCShJzFA7yHMrn77Zoceg4yxTqvfZpH7Uir",
  "key16": "5CNqY48PJC39ZuiVTcGv5jhbcy2cX4B7ndpBynamR4k4a4dFfAXXuJaLSJjzsHKBhKcb8U1FdvxWiPFE88MxHYvi",
  "key17": "3835rBiiiuWahtsSSwbnNKSULMc64Du7HbXPADN9bPYBaRPRwkJoxhKVWfJ2KKY9yf6dFSetffCQnuMU3wpj1qKF",
  "key18": "3CoNDELvi7pRM8DwaZb1fLSq5nRBXtARB5HrePvWRG4h5q7TofZKVKoyimrtKSLB8Zm4rk71LEJvaQW5UYDWJpGg",
  "key19": "2mEkA1Fi4ghjLRK3KWe3MyCBUnsan7U4CXSWRofGhUaqqFvVydtafzAzUvyKe6qBLXzHfRSEuKRAgEotznenVB4c",
  "key20": "9HHSB6HgJuYfrqRPMVkyiDYH7UAQ71iqMALwXX4XpNJWNWTkTMiyprTzWb8GyZ2MgWEqFMmktjDXY7iSG3cUC2D",
  "key21": "2bYtzZos1v7Z1PsoWJF27mi23ybprkX7iQvD3qPCk5a1wtDuNSXyHceuQuDifJR9uB4sDQfFszYEKGRir8kzxSQ4",
  "key22": "38PLBWn2X8yP5MRF6V1rHuNLkAnqXaAXe36MibThZr94GVV63iEXtrjRSJ5mb3xLE8aBd1Kw4rzVLpMCHHSKSiap",
  "key23": "j7sVx2MPnPADyAoqKgzHASVhGrhUfw8UaaSyhpuQPdg5Vn8HCG5j6jGZkSbpuVSYZv77mY7EB4XZcgDV4K1SJ7s",
  "key24": "gZkrK4F9iC5965y1znf8DNEYXfNpKG1bFyBcEKoEVZgBuJCZViNPsUm21kcsXpsDarVNHgvbaGKvoP3KEwPQCac",
  "key25": "4YmPdLWSYJ7cVhSGAbPBGEzBytV7QnahmYfZofPAG57Bd8xhp8T7XiLoV3APrAB1jugYY88cTBpgTqBJyViwhTig",
  "key26": "5aacriuH2mxDSwkeSHjErsKPcEFda7SfY7uTukw6e9EmAQhipNe49n2VLH1SeMNF2j1XCRo1nLoxMaCakUrhQoKa",
  "key27": "3rXjER9JKcraqAnGryrCoVhTg2eS7qbxW6DpGw3UGZMKEVwRLLBm3vZHtbAV6pKNDH4eHRdk69KttsjgjyQDnjvS",
  "key28": "4GS9jx5AVuox8j7EemEGGz3RBNDn7vxLaYLhHfJxhnz7dC1wjJmUVaHQtTP8JEKDwHqGramrFhKU7Sb13LJt6yw4",
  "key29": "43AB297H8qhYxVwJqiQurGcZXhehx9W4qodh7KLHqsZR4MkK3VzwSLpUq5ASGW8hxZXYSjmPpHfyohjCRdsDbV1N",
  "key30": "3fzSzmGYiFN5fxgAeZbGijFCnCCB575hunmF7nyRxR2qp9UNguqmt9F1xyGcHn5R6Fo37nhu2ir16zK9afurEu1v",
  "key31": "3ip5MwpoMezskvZQ2buhH9WqMBQtGqhzCv6QH7VnEim36Fz4qGcKXoAi5VD2tLHuxY67Ud3nR4fZyRjNiMcB4cai",
  "key32": "2y4GsBm4XQzh95ZFf2hnzhU8AnWSsceg4Gdne1NGyoxLWdBTP8JkLwfrReUFU1NhCC5s7bDDGC17y7CCLN9ZZkhw",
  "key33": "3Zjd12uQgLsSkqzMAFckSvyuwWVAHdPW6y9yDFS2n5msqEtQws8GLvZBsX2zBUFSGeb1vkwQGHemTv3dY4jroydT"
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

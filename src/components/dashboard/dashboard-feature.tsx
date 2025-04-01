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
    "3vQ4R8sFQJAd4gYBrgwLMc8W6MmF4fAy1MF36cJZvnnfJJ5i2WWCkjeegGKer65Hmz7Bk5FhXtirKfP752vnyHx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5iLD8ZtAzdzaXJMzj5g6XKm93EmFswCdN9hJm4fuJZnRGULBLzGsV68t6rn4UoVECTdYLjtP3HaWrQ5fgjcDZn",
  "key1": "4tQDpww4Puibzo79KhGrFuyYiVKwwViTrYZzMdJHm8ErerqLf1PSMwSEfTTWBqjoY6YBFecjNBqmJfRAdZPWsurN",
  "key2": "3jnurhgew4GkGCjXAsnDWqt3dafbTHmQTLsKwk7PH1ogDLhCWgner1PeupAa3JxfYQnQKaP6UBsuAh6qcB3Zwctu",
  "key3": "DhTupNXFNiJQgffXdPe4gXwSuW7dVnGsfmWVMioxBAwxqpXf3o36769WHR8CXxGzGJdAWfq6QZ5YWPQdw9DezLz",
  "key4": "2nA4NZbxZwn4Nu4QGRfq71C7Ndzw2qTfti2CcNWoMCRc68ZTMnh4m53AHCB8Mpo4JNxasisahdcm2KKa1tvFJ5hc",
  "key5": "5jKMTqRTckQ7vVThZHrYhxMNUSqP3gawSbhL9aLscUqDDw1s5wjvL5uUHH6NozYCLDDjdrVZJsRhaLk1yht1AAAC",
  "key6": "3QQWbQVp9uQpBwKbR4steuQYqZTaCJHN1jSXkZ9M5QEzRoiD4vHLunjU8hqMgwtAngBJR7BE4vLUUzVrrP1HyXTX",
  "key7": "4g9wpDPLCcWPsRdCfCL1rbG59fbE7qEvYvRKimNqzELfZoQYzbGMBronugHt27EUsNhCurTthrLJfSJ9bEWCn7fZ",
  "key8": "dWDG3V13sTe81FMyKy4FRrqD1ijpGkDmEdvuKqAQN7muBZKN8K24DE4TraTYSz7Qg2Z57dRto17nk29ZXBve94E",
  "key9": "2X1d74QqdmVZaTAgDt7cKvEMWKRZkUEjZTzX4q4wKm3gsSviQxJDAQLanikByzzPDnjDGDEd49p1as4NsQXa8n95",
  "key10": "3BguU9h8WGWyX9ZDcpTQk3mbj7tRMZWhrgRzf6bMgk75jqUYRyzmW27LBPkvYLvEQEZc5sHUV9PMyuELeuwMsCvg",
  "key11": "rtLEpsokDyqytqw1q4oyGyVeaDBTFChfiZUqfyBgMWqFPbAgybjvFTC7pbbJx3aZKEN7nct3GfCEQeNeg3Hsw1N",
  "key12": "3KRKnKuHqNLmJ3kfWT6epk7R8d9vAAsDBEAPeNEeXPFScv4EJ5AfcTRAyA9VtxHgtSQjnPxRT6FM4KqJ8Ny85LKg",
  "key13": "66nPzkNpdzegTPPeT2TbevLa1sJEkdbeEVJWmacHcKsNerB5oUF9jvg8YFMqobgSDWb1v3eLmvPJmJb11YwsXDkZ",
  "key14": "2YwTz6oB6hpcn5rfMow7ZbaqdiUNVxXXkn7L6JEezsWGBL1ajuWNUMFXrFgVgJqpSfw8FE7joQQ9LLnpVgLvHEtj",
  "key15": "rwPcbzfuarfQHcdjQMLQGt8GGnP2aMtevTzg3F7Q8msJ3jrkB4wbewUYFbseRVwY8njBmkdCJoqZiQLCUrXseLK",
  "key16": "5gxvkU1RHBWRbMe7uuLhqitiHBUQwLpdUryMbDEkHWNTSJVM7sy5Fgqhig4JZwogTjwPvQq8re9j8uRWNBs9assf",
  "key17": "36ZXHbym6sUy18JwKCPdnR6kz3Dd8bxXrtGbEdnDdEiNXExD5Fp5MKiSHsmBJoXcZ76VSAfMf3CZyDETovSpaxkU",
  "key18": "5yAMTJEEXS6mtohLifoRqf8AHHA6URumAtftQ6i87Dgs42EtHLQ7pLCJy65bKJi7zskDyCSVTxhQ1Tz5mnQdbiLe",
  "key19": "5zZxik9mLxx4jyEGKNNPDgam6yeiPPkxUWnmXmoa4e9xtV2r6A5V6ppgbczriqtpcivZgzb2dYPzbK5oCebAAXb3",
  "key20": "smWLoMtZEmqK2wGdRuDhvb82UUvnZph1CxBsCVxWcsCHBVhQ8M3GjM4WeD7p3YmcdUApSLd7mbken57pz8Ymp6n",
  "key21": "5ByHpBZpmE44AELi8ByNW99eHSfGAANwNds4MEApFJfKLa7KjENB5qJKSA6V9umN9MbckPBsiMxfosZwZjbot2nN",
  "key22": "3Hhtq42DoxWRjReCUKntYvRpXoKdQGqTpdeKwuNADBzA6nuyNFrg2ki9U3qKfnrDgpzrbb8stkYjAx2qTuy8WenT",
  "key23": "27JhV9oDoGYvyoUqAAY3vjJBvoLTgrapJ7XHRye6aq8UmijLDe9jxTR5VrzCYz8AS5Cqs45HhPtxKhNQ5kvMgw2K",
  "key24": "4iyxEF1GZ5wKfPpJBy8zo1MNckKkQWVfVYpetM1t3d9NwrCQM5WNtXSqHi139SwLnQ3Kn8P651nSdiK3Hfy6ffQp",
  "key25": "5mQX4CpAGDGGPU5qiezsWomfMyfEEUwdxm3dWBH2NGKn9y2mQgbsSJEDZJi3wF7F4nf7Jv1tyFv22phuERzH6AUB",
  "key26": "4S6NLXUa4QE7XeWDet1nUJWSnEw1unRAXQTiFPUChrSczYad37yVwjz2ToNw3zfK47iyr48eeNHgUS1xKCRZxnzh",
  "key27": "4P7UoUUmjvkZzGuvXsy2oCugbC3UoN7gLXqjqcPiurFR39BKuu6TjB2wbNvnvHwrVUNxWdgSZf2DkRmqcmP5Th8a",
  "key28": "5zmkDmCfXmajYgrC5LE7kmt8LJxSwmLXwbxWqAr6VFYZZNip7BMJ9Z7JMR8gD72XSJgovyKsjbFL4P5N2bzHKASX",
  "key29": "QGJeX8r1x5phQnenzdyGrVzGWiTybzqFUFyWaBTceU2icDctMHv8U9P8tVFvCFvwR3XSgeQkVpcyFHcLWdapDKZ",
  "key30": "4GLJ2JtfMQyhtfAX3HY5i3y7Cp5rcwwRxD8sDvAQF6XC6e3K1M56R1hxixfJnNpchETUSfEhdbfrRoLmzNDspadj",
  "key31": "cuMQDWeRJT764mWE4rwaN5QM7hzG1BoJq5Zpbb8QuVkVWC6Yk5Y13cpuop3fDeTQyimfUuVkkY3ZFtp5cxMBFTq",
  "key32": "29PDu3hfPcFXVGoHBPcr3UvxkSq6SKP6rPZUr9ZvjTEP2UiDicsiaQKxvaED5DXRTpLauASvnQ1JejuSw82W8Fwn",
  "key33": "2oFZKzUiUApTnQ8YAz7xuDR8VR457edXUbuzSGH62T4ripmbUrfrEok7dX2K6xN2K5JraCMde7izuQbNWSLA58Ne",
  "key34": "5Gmqt7T19kD5FHrAj21oJcmZwsFdqFbrnarUpZjmW3oYLcT6CibBFCBPGZtJ2MszE7u8bgR9xEKZsT3mBmW4jyaX",
  "key35": "8iAoWmXLkgKVw4yaCKh7Q5H5C51uuz6J5yvVfdGSwm1Xz8Dge3BTtcmRFFQBxnC9hiQhctni6nArYDBadEFjN62",
  "key36": "YR2P2yR6zkrn4Hk6RhKc1t35AsiF2i73BVQGjvVD4tF8p2zRh5Nb8wpci1ER6bat5UL32aXy4u9nmDzqU9wvgqG",
  "key37": "39tVRyXwzG4yoautviuQe7A6moboiSkGkWK1dboFAVM2q3gd4g3ANKc3zcGyrt3jnSx8YsXB8TP5g2p8N8hi5FFN",
  "key38": "4zySGeDMdfVEjss3aMSo6qeN5ikpWiS1CqvFdXZyQ8kbZj6ZMTmQNePPCxeghuydt79ffXGsmKhQNvQWrCyNbqph",
  "key39": "3QYvD97AXKesA447tYZoMqvrYQQiA6j3jcFyfUwqzvbQoFxpL9PsnrSNxxeRdbSDcNPTYXYi6VXoTcPEtyvhkR7c",
  "key40": "4vgNuHzVzgPYWXfmR626Qt7QeYTtZGG2CjthwKL5TL2KA5vzJrgCBWvEM2Z3kMyhGy5LXy29dRaQQBwsqm9N5N8E",
  "key41": "2FRjjc5muaYVCUWG6UJ6a52q3JwRMxzdazEWTNjFWGdmnbzXdVxWrMdEh1p7ypNymeE5Fh8vVTYA6BbUBeyrSE6m",
  "key42": "2eWujrvaTsj5hYCRaMcq1yxEkEUSza7UH9VrUBR81vaU9dw2ToeKjBQ9VE1nzWHGVQjzKFPKbBfLw9uSXuhtcBEt",
  "key43": "5tmAJCDnBvLjGnyija78bC69WcYTyY21Z4PsZn2R7BAvCLZiK99NuEH31z1xGSr9TQHAdeYXQ5XJrvqp66P1NHxn"
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

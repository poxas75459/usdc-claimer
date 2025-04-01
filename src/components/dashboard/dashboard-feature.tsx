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
    "29Z1vYy7MnLsqBiCnhS9oZg3GkMRApRA845uQ9ozQT6o5YzjAoPqDT4UfLWvndE4MF3H4EMo4QPTy5DM3w7kiHsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WtQGkKgHCDdm6XQtXPXmxHgU727Nkauc5EjHY281L8jUVm2amfdCHjHwGbdYbh7PkiDL36LYPjKn5xWEKXQ71S",
  "key1": "3b6VTowwpDJXmhwdRt6aXnu1ZY6evcqAt6pN2p2xwhFpf4W4SR1rqbvHYWSW54G8KGtobZu5J9HuhB5HLmTxXMMy",
  "key2": "3goLyozgPHqWL7rSMjg5Fk2tMDqapvzpFLrMuA4p7uKqpiqp1RmHftftbAVqtu3ht8rEobyUhMeEc2BPn5GKTXHS",
  "key3": "5Jsr3thKKWw8SgFd3Sc2yNux9YFVmXeSGBWjZ6QQRFuTwc74xcsH2pjBdNeGz2qCbTANGVeHqntdw1q33oDL5R8D",
  "key4": "3ZX9i1nhbBdgfzAD6EgDHmp5CmsGtxdichG9gHtuoz1zTB6wsXh9Zkpsmcvy7a6TfQmxNza3Qbe8P9K549TuYumB",
  "key5": "XYN2vUw4RL6zJ51rebzUmdbANh6tYR4UJUscBiLVsNAp34ZmvMB2fAuWohVu9SBJqKquVYmGxgSDvQKM3ep63TH",
  "key6": "2FGbZSTNy8LYonukHYGHpzu9KNbVHDyY36rfFTqZLqWE9Y7SbA4UDaUzAmmvCe9qTvmxYGC5vHYJ8q5MSg1xpnZC",
  "key7": "5jzxrzLGXFw3Bdjbg3qYmgEjLRhJi53mRUcqppMaBSFCzxxMzMo17yWTJp3mebHJy8Uz1WrAxMb3dNVWzzr6XG5J",
  "key8": "3d32qmehgxX4qjAWRgN95aQQxzopny4SU3vz4gyp3yapjsCF4W6LPBX8F6gnRA3orjLisc1U2tihgRxb3AYLccH9",
  "key9": "4fPs3KAQXHytBW7iN7NKxgqQbgNo2cwAvyFe5NkjG7WPj1XZeC41XLVcJwbafordrbzrQDjMoUBJx7RV8HE7czud",
  "key10": "4tSaLvng8zZc7fAeD81YaKS7NJENCXFgoitzHkJBu3qcT3TN32fahXsbtppJtpqueyBiudYVvuTGFLKdsF9u1YZB",
  "key11": "2oyk1rt6fnXhhFoti7TMUq1fRLqcUqcBUoqgzQNVTrQyLHoqcas7djaNauoUA548ZdFRnoitDVWPDZWnhQcs9iQ3",
  "key12": "2DAzrik5RJzzGyPEMvdF1dAUapMAL3VHipmWD7TXPn17fdizBqZpsT2cAysCJ1SR68LN39eafSpcc3pAxNRzrk5L",
  "key13": "5F3Sx3Ae5239Fgh4mwDj2wv1Nzqe1ZoQSEvdK3ZpjeCb2UMvsvtLqZV2cqzaoafsaz8zBpDwDsAgFEiiQeVpSaub",
  "key14": "2UWxh2nJhz11MxQWUZNKSYGDKiuSv2uguxZJfZPh899VLiCZYK1aQA94cXLS32MyrhnThMSRdGMNucQzsB8FR5FS",
  "key15": "2bELthhDK5FYnvCBzLmnHA3sYR3Y8QHKEvjxTAWLC9qzcytSMZkR72GbVRWWE723TaX82dfECnosuVmW2nccURj5",
  "key16": "4c9Ep9FTYeJLjC7kbnwQCjkXQQavbX2dPRALXFyKgZRHhjBD7Vb3YDZ5YFyiCDyufi4gmGAktGsS7sjryhuPexqC",
  "key17": "3rJXsyRe6Fb1djX2DyUUiqVCdLMtqPtZU3CUWh4TknoYv8UjKNpgq8RZvrp5Ft4oDy5KYMpWE54oCRo3sUuf7eDx",
  "key18": "3Nd2z6ZmV88y5M9fY6pK8K5h7bjvFSHZraV8pNVng2ZeUaYx7Bc3iheDm75mG8V9cem5vwng9p3boutb9iqBgPqB",
  "key19": "5nSXcGwmgSegPBQ17tMkcgrovsgnRQEqVLPA2FLaSH2ET9dEoHfE9oYZoqYNk1tDWUe5JgsBfpkC37CGt4BTRmc5",
  "key20": "8vRCdirnhkXqoaPjLGVSQpY3NpxZZLTojVMX9zpMdkbj5JWRUBavE6k2XKMVoJtaRrfaK2cLPokusZzkNB5qBZJ",
  "key21": "4GQ25A2vDY8hAKaQVMqE7JSHWN5buk5NTZGPcp5bSN2s3eiQwrRortxMFwZYMYaC812Gtet8vP8LwjxpP9ZdELYp",
  "key22": "aN31PGofgYkCiKizxg47EoMVy63P5kyJ8QkmY666Uedfv26Fk9N17j1mamH9PVw1G62tMkPpn3n1v8tAu73bf7g",
  "key23": "d4Jgni3CwqFbG6X3zrNXv87HHBZzf6cXXoGTn6xY26L3DBbWjEQxSYw93sQoff8rAKRnnzstbj9yj9gK7cwoLhE",
  "key24": "5XJZCaVzWHNvCap69myTurrf8pHWTp3whCVTdSsBf5yPAoqbwHgF3UgSFC2Ko4zBNd6KfHYRzQd2zFihz1AvwNqo",
  "key25": "5VQhtkZYtJRRkw8L5jh9jbECQNMvmUNajwVwdtJn2zbCFoeSQfVHw1aQNJriwKZsHc6vbprLByKZXW1UBSEzdZGq",
  "key26": "eAjyXyJbyiFLRtEgPdy3e4cCZPBTMoXdj8SifuXUWV56aT3EmQogVYaM5QBPzdFsnZb6nJMxkmFXJyU22EWvLdb",
  "key27": "129o5JSfWD6QVF8hu16ijXGGagxVQkAiozozjSiAm9vn3ND5JrTKa47g6P9n4dWnvA6VbuRSUa2FHFh4zdnfoWwm",
  "key28": "2TXgeoXGFbQjdxYnFLQREeKs9qaCpU9HaMmmJ2zKvUSvgD6X7HEnfrdhzKGR7vhUgyAAxdDQkRqCbM3n5soEXhpS"
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

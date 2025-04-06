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
    "3oRvPNvUdMLxKUAVtvU7k2Qx5EBwPC5KM8EsHDWH1P6CfMTN56SkMfCKRnYhi23WzK5KXHj6syaDbuKL9qVzzbs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYu2ALtWc8xooVaMvjGedcemvcTPChHY6K5Ca5QqMb4eC8E3KmLFUjDj33R6hAvuoYuXXMWRyhtR5rGUZMUk3V5",
  "key1": "2b85xzLtW99iXekmGFhvTcFbZZ8AeHqLpsKnzjMp9ekjtDPtK7X9fuYYGHwat8jWswvy6aFF8MZLic5wNcQNE1Xs",
  "key2": "2mY5mGbyupQxYvmzNUXdWLpiJKkXASEL8bc1yed1FtDAqrp4gT8NG1NvZMWHBQ78GDmUdXG9bfkBP3cpP3MhKpKE",
  "key3": "34JrfBYDUAYvm3wyB8PxJ6aZYmxUoKdHfwN9LzDNpay9G4FC9AL3jeCtpm2qeE8apsbYEKo9vDT7n34zMdxMxiWU",
  "key4": "UGJQihJLxi4tsSdZvz2QvEuS4B9cvKA51qPgne8JyTmhHAuGrDVzpcWaHQYiVDo7H7RKLzK4F84pDb5yT79qn2f",
  "key5": "37zqA82uEuaYxHq4TgC3G7wFUe2rFeCBVLWbdULZZwtsH1gzLPUdH6x9bZzjaMtJ3KnSMDJV8xWZSSVeUCuH8DQw",
  "key6": "3nR2VENmKhoh1efSSKsE5vnrpcv3jDD9DVZomPBpSBZ3NwurS1PnDg3U5W2yQ3GBsE6AnKkhgrFFMJvYStweUEjx",
  "key7": "2exMJLvMMzUK7PKazsBenTuoLhuweafKxuVM5XAmcGt8jTkQewQhcoCZPFzj9EoKsCUeYDb55PTHzxSmX679cEsF",
  "key8": "2rhmruSffwJxu6ad9nMXery4VddPPyeXr139L5o1DYyVwuUUDeA7qYX5oM6pJAvE28qkGck4KyahjCFu5V5XUYcd",
  "key9": "uh7GNbGZEz2ouZHsNDoYiLByZtPYBsSbFGNhJrfcrHKY8mbteE3f3g6Sfxdq6f2DSamGHFrooGCdg526dgfrLuk",
  "key10": "5iDACU5U91nfCPYhGUbyZbg8YDiSg2X3SxNHbNgfscRdGZ4fsXdoa65TpFADUDfKGy9Pp7g9j5yzUNCV32oXbFA7",
  "key11": "2KyRVQLNxPTY7Rw5mX7KTnkj6DqBJzX7fsUdDaLYMxqQiT4huiUJLvSQwhxJ7vfrWEXzzpudopkP2QN6xBkTY2Bs",
  "key12": "3mbUgC7oLLijiRMaPoUq2Ywy8Ak1C3pXDF2uXnxbDJVbSDvLSdu1Nu4h5Nh5Jd42vk22U6V8raYNav55BFsQRikd",
  "key13": "2KqSpEimF7Zg2VyJpP25tTsncG2o9eYwr5pqZDKUv5xy8rzZHUeedveQtVcJ6i1opg4ZpEETy5jtjb8F1tGfrPiF",
  "key14": "ERLsY8kyg6jUgiWFojZKEWq89GCV2CyTbgTs6S2exXa5PZkkAAiQfB6S9VDsDBQ3vDC7dqVHgMgViFaf4RwH6VF",
  "key15": "2MAKL8TWMixGW8oey5qaLx4LW3Am5iVRbciZ1sX97xdF5s2E5yRzkiA2ENEKRsn4FtpvU6qoTnvzi7rqMKkSgmEE",
  "key16": "3q5q6r8RMZyYsH3VhFTCpra3YucW3qmyFdP3GuwVmAvvdJ9pP1MY8zRm1jGeKvyneJgGnHsJ1sFpcxDKKQ3WZgWr",
  "key17": "32YySJwr76ArquT5hchW7tMNJZyciiMKPmGaHMqzTddmnHqMNuqaK1feoA3mAyPU3cyeQwKiERdZSzQVSef37tD2",
  "key18": "4SvEGUauRNvQzjAQNtWkf9JtggS3SAQw7P8SfXeTtpkN2Wg3CMWhC71dd3vWKcTJ8BhJ2PhTrGb8nLhtx6pgzZ3o",
  "key19": "a24Saeg1f7emQXTBbYudz6benhgD7MryYTuyDDUSTLbSbvM8rhuz4m6WuTMJYqJRDgwQJXvk8GLU1kXq3RozscM",
  "key20": "3Uk3ofWQzCzqV4MUdyNsyFE8Rbca5LFaGo47WncG56UdxWvGLo6xZrXvsqu74y3LDQK2b9ftYsiXCN7QVzLpr1MR",
  "key21": "4FYVQ63KN1zfCo3sYp5fbQuc5WkP7hJ6TeK4Z7sCGJiwmuU1nkcxv9tr1yvvbmKWPAVyx4wSyycQcnjwAiXC8bq3",
  "key22": "2KtHSexvxVoBDbb2ABifu6XrLspexzjpsWq4zqxhptJ7syqfEReZ5h8RucTrJjXon3JJ9BF8asSqEnAy7FS2pwEj",
  "key23": "6hCcYp8LHZD4KqSpZbcNNzHch4romAuY7ZFAd5T16U6iD9ZTrfHoN5ZGEbx2UEQFypiLggNFCDFCVEFt1rvXVdL",
  "key24": "okeV4wNp3nrnBPLnizogBCce54JXio131y9jxt1h16MPyMydH2uccTEgmvrtS2XNjKWeZvmg84xb6ihpdZ1GnkQ",
  "key25": "2w49GTAG3kXabeGVrncHHjFkc9zfbtUnTFSGf6MZ4ByJTs4oVaLvAFnyg6kawiSS6V4dErHQrvEQ8xvx7u8tYG4h",
  "key26": "2fvYz1gqYniGnyyXYztfAqzCJeRbdJtVpLdRFy7W4XL9PxKWCmhN8UbfLpvJwgzuDjjeg6xNQHiTeMMW3EBL7Bi8",
  "key27": "4QuGcLhGCPwTjJdBiRvXEUWuxdbgH8i7j4Y884SooZX2u3o8qbqf8EKuyMErdas3qFSgE7qCVQM45Hh1iZfai2Wn",
  "key28": "TaQRAVQC79ANWsJCznvFuunCnanRdsa3dvVsH7TryqRb1tHKyTKJwsKoTiqSsfot4BJyZiJCWdZPvBMbYfXUCmz",
  "key29": "3pqGnJadhoPdRWbPT4cMP8AEcKKLnYRjLK6YsSLBNU7DmRazLoR1B9aQLgZRD9GRjNPSpxteLFpeFuKmpVBchPfJ"
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

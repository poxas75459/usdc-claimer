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
    "2j1VUJka2b98vqZ6pbvrzr5CrK8VtEaRnLDPc3MZUvJFfxngkDGWMM3FjTy46u2FviTVt9oG35CDGRNUoFhdc2xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCtiTV8Euk1uFXtKCHfUQBB1KdeqpQFiGF9tjrQRC2RNdwSFvkzQdKyyfx6oyz15HtcXnaiF3LB2jbZVfaCJSLy",
  "key1": "Fjx52sMk1WeK8EeuTb4BZbv9sRyKS36vvhC8FnjeBv8iNtvfRnSsKDZV8sAygfKL753kAVWUP3PtY4rEpECdmbR",
  "key2": "4pTehxrRbxfoayqQiuuxqXsXnttMQzFCb75DCX9efYUWG78gFB59iYHdaT3eh3ZDY3CPRDvf73RYV6aYdqVSRVEs",
  "key3": "2GPXvDEARAikLygxqbV33oaqPEWxuZpZDJaUcAvmbpNGmKqm168iZ18F6KdHhm2qV1JeeiMg52s7R1gVTS2JRNsX",
  "key4": "31viDaWCfSyeMDTPHEf38V2p1PxGoomh5wZ4YWU3jALR2jxtNmSGJpBYah6QWTcCFbuHK7X8yrCjiR2ckWeYpSLF",
  "key5": "gKeB59bjGVrCt4rYLAcxBqyFiCApHnX3FkNvy7nrgcFeS7EG7ifvfpeoMs6UkuVnSx6kcSLNPYQhdSC3idyfC3t",
  "key6": "63RqBdeWbHWWbKotbi4N8Zxc9suUX8Sh7iTWKmp1ffzENUcQhUBWQHTirFEC9NWTbBi5vHhejuLKVxPv8u6Du2Vj",
  "key7": "39MVSukQQyASZ3rM54td4dNPw6wpBB9qXMAyy8jFtNf1BCmt3QNxJomaC4JzDHh2y6GmcUdBfH2MEhuZVP34SZav",
  "key8": "28bwyguN127rd3ThTDVcPVohR5cqgwG9Jtci48eSdUSmFSTKyJoNTgV9cJaHUSpeuVnsj1FD7TvyGoGXS2LWqEeB",
  "key9": "4exEtLix41zk8e8W6L96H7PpxkrvgTKFrgf4yXRSav99sVXxcDpVaV59MYwCevVyeCaP2Lizd8eybwaNFs81XLpX",
  "key10": "3c1P9PFJybfD88Je2k3bLdLPaQ2URNjEAik6uBanrV9n5pBVdEtKwJ1fffMXPKHUPbqzRhpk9TRB2hCPYeYVWmvj",
  "key11": "2xNjb7m2jT45M8hZ3wFCHanisqwdMxBvU1Q17DqyHWvuTn2Y9fjL7FTw46RAaSF9vocNVPmCvn171b1uRoP6Dgq2",
  "key12": "4mkzkqqSbWducdZ9LWjTpFrMbBCCQzdjdxGs4Qb1VEw9jwxf5xbwPX11imcKZ3KY1adxXsUR3mhmEgrpwNTRmHHL",
  "key13": "5edp5MGBem2o3UTUfuyLRpTGDfyL32NN4iD2kTeeQkVRfQhpbnpU4NmnUfddD5VSetgqU4KgyA94ntS59FkyDxQS",
  "key14": "5WCKA5EVUiZdGbmUoEuG4mbfENWx2NMU1bgpJiQAAJxtc45pHz71Y6BQaf5GtP99iET4ZCtUPq9MKQtbQZyT7Yvk",
  "key15": "2aLfKdxtYwPnVWtEfKLeaPh8ss5Tmu9CEmxc2SeBo9CTp3Ddm6Sci2gW1Jv5rVsFCggQEXK2aYEAhJcwe3PWAohy",
  "key16": "3gsTQHh1LZZXSepcBUGskPcLFgiLu3skdLLn3GYZMKzomkGrfQ1VY2uyJpTzwymnmAzB1kKAFRVnuMaGTskdes3a",
  "key17": "qa8Mm8kFQ9Z3caszZL32eBmPqL1axgpFYozXpYVrSQ6QWseMmvyPqaqupCuGc6SDc8Vuh8EYcRbYoQzC3rixxNE",
  "key18": "5a4BSrJeYeL2RuzL6bk1zZr5bMLJLDsFpfssKhkB8VA2MvauRTYy2G7WWCc6wSNjgs74jmsBWZNNTPP6bLHYTfyA",
  "key19": "fzKdFJEzViYMBAE9AWChSJEqiR4GXnuNCyGmy3agMTCCC8HsjarZsRtRYv23hUkhqoqtBsKGMDiBMxbqBujNZLb",
  "key20": "2AfqtQYs4kqfQWk1ZFDWCp7gUk2wak9VqrHQnhkraZAB2Eth2w2NJfVkLMMp7t8hiMGkYPthrUQxUSYySQzrR8u9",
  "key21": "uL78EhrYg9qLWRMM1gJNXDHTxxFsd2GWh7dK9fQng9YDAZDbCCWPje6mX2XVv8PrT1FgFbSs8Ymi4cHujwE4MD1",
  "key22": "4SPVrY9HKcMpkbDUu7pTNFCuAY21RXizDs7UtAUXnMJjEPnXAphyGzTEuvQScqSRmrHL1Y2hCqVMfAGMQkGU7jEc",
  "key23": "56BGTKtf5oNA1RVsGpRvUQKmGaGfookEiMrAFZ4Ejz7UuRZZhEMmptGnz35ARvB4mENnfY5K37tYrG2vLfWm7EB2",
  "key24": "56gLAFWQxNex2w17vf9UUhUZ1ntwBiacUuqrojNwokwXXMw9biuDeHQdmKeLsJergFh6CfyfxQB78cSm63EQWuEf",
  "key25": "2wf9Gjhjjyix5w1HghsetVvfS5nTvwDFoTY46UvYqfc3smB6xGu44GREFAchfoPWAqf8gD6fJmbJkonayjjYjBSq",
  "key26": "w4ae6Ube8pis7jL9tSpYHjYRsQpbXr5sHRxYNhPD6B8rejFWCWv6g6dURGc922eo3tnwU59vCqhtcJGGHg38KRR",
  "key27": "4tyyZ5rjmFFzTFdZbLJtadMtKT1p7WDxDacPR7jjcRrknFyUXomrJcT2SAqAeiMQMf9VTQygqFU8qDiLgYEttYv8",
  "key28": "2gx8fU9A87PBvZ1pRYN6g8cCMScpUy8w3zfzTPYyTP6eoQ3FPZjwAM4X1nD2YG9LSQ7PpV7DG718ddYviKmDLTtW",
  "key29": "4M8UYhvgU7c9MiUDCddKma81yBFWSpiNRByqoH4DMY68VvyrJUpP8qoLFqKFWQVeg9q9JdsGvhFHevQNvd8vwgva",
  "key30": "3va7eUxcmKNULjNc1WuyK1Vw9cz9e92PcgWi2Jufvf1XGN4SJh2dspiEjVXMVTYjdGAccFHEaj3LkbkTKe8LQ6zc",
  "key31": "356eKabKeyAbn1iaZHrQ4y3FX6VKvm8CRqXBwtSuK8xFWTPhSGrE6Bd69bhE8PBnudpKCHyXQCPC7m5Xv85sqUw7",
  "key32": "3onfMs3cPpB3eHuc6NUHthfirRbgvcdRVFr7wm9P8kEwdo4aaCiYpm2JpCgTmULQhNkvt4FHqRrZYCUgULAD4yz6",
  "key33": "5gkvZPLvR1zNPc5DeKH2ZifyQVAagEHkd7Ad3JL6wY42rFWD5ffeXQJs8gTHVgL5rdQkDA8iVbLp8AxSfZMgMNLv"
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

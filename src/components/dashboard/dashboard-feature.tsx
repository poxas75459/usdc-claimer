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
    "3J5zfu5iwVVrAYgZMp7f46gQkt5WGWacTK15jvwnM79Gt4wjUhdNrwyzRWVbqwLGuZ3kqfhePjpXkoFbbLaJGsKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65QyqbZLf9AKcxwYJY2fWoz2eeYjww3CNKNTmn1WQcMuLedCZ2bTqTYj9dJX39z8549NSaA3GVLxr7QHsZ3xAkaQ",
  "key1": "3uGDy1ZbZv1wWVpbihTf3xXXTBxeeDmJKdgaFZfn3Kfefn98WyWrHGq9shx7ivCbKUKCVxKcM33RCKnueMkbLzGr",
  "key2": "5doMpM5fBFuX4YhfXfqFeZergsrMaPavseJfHNkkZYZQokiWCe64Qi4FjM1kPBCG7FrrEFGG2zL3SLRARzczgueH",
  "key3": "5wMG2NpHSLPapxj9FQ15nUfcWvm1PbigZCBUbPEnxmfya8tDKhRYvWVK6cYF7YupHwNDGs5ZV7rZN8EVdFkF263P",
  "key4": "4ub5KcGRWJZWiG9wew6oyWeUCr6GkQ2Ss7gL8TSLEna5muCTXJG9AUALs7NFfqrpgWno27pkp3Me7DTLwJuUs5Bm",
  "key5": "U5WRyJq7Vuq8KU2vfQ7QsctVb8jKicLQmDRudLRZe4e8unrM3uUS4BHP4BzSJi9QhsBYkVuY1A4GbWM2Sr9bzR9",
  "key6": "2NYANKwrDDtAKZAj64irYTkSFQNaJCQQsPu4QW9MXZu7z829nErdLtyk2y75VVQgeDpf7X4WcqC8zDtE8RmYgCLY",
  "key7": "2fzdmxcikzB7jZwErTBCJsajTwqw4CUr337hMVphJf561eitgh9jGvA3XAQsd6GH9XsPrDKyEKGgXD7LFFFSQTHP",
  "key8": "41Bf7MgoFBx3uRF3GCSzQZTBhUk7p1dLowZNtpRd5CkQKPRgrrXDT2bTk92eKugeShVi1vnZCudWiB111cLb4EwE",
  "key9": "2MWB8ngDQV3k3YQGiV1hpUzCF3bshUN5ncSSCxPDi131WNgbCRB1aY1HyjaG68mqg4B6kbMh73suBbTFaPPH3bEN",
  "key10": "5p66QFTgBNBu6fGw7brMvfoXWL587CxnJ6nmtQz5uK8VTXyfteuXYgfnaAT31CCNixXcQztsd39riTGMbfmn5B9U",
  "key11": "5zKewK28nQdemHqWd2NDHG881KkGC7mvyFvMrXfw9X4e98RrhDU9m3byyfa15oZ42a3nhh7DjisGy1LhGeu72yAG",
  "key12": "3Joiabh616orKA14VTwBWZKGmzXge6bYhHjY8Ek2df4naNT9wvenfxc9Fg7enw7uzEt5rCYLgKiQL9RtoL2Misd9",
  "key13": "5Q81xzMvMiptQUEKSEMHVo7cQAxLohqVuTgMoLU5GEiVcaPACpWupSn6Rojp4Pi7EaAw99eT1KrgjuMPUKxiAJRD",
  "key14": "5eFgGkkjMTaZ7A6JuAwBEJuryz7mm37MCq1AABGpyitRJ8TLBiNzPBtc8DvMTAopjkskqidyF4gh5qNBwKQiqtZZ",
  "key15": "5ZZopdcRzUhBe4fXJuehSm2muhpuAZVPTMDBVF9mAnKf4tPW6hfSZncHoXkYfg7vhcxX81D7knnkHbvre1jr8htD",
  "key16": "2G5pvotPtBoCH1Dxf8TNfpy9vb9Rq2fZYbgqYr7GbkjAqraPJ8JHZQXk4ZpUELg2vEbU3imyYo5XKvV7DofNiUWq",
  "key17": "4Dbk3hquHym1MGj8ShTeEw2EzNiBK52xxAR6r9h8XV7ZmQxt7MEwSh4gtW6xyLi9kjP1D7TmUVEE69R1rS3Rg8hH",
  "key18": "2W9e3Z8bNyXZjh8s6JmcL3PLwFVWSguhf3h3pWw8WmuXrzbVnDcJ3bUo5xtsSPhjJCNvDLYanJWXm93yGZqj8f2a",
  "key19": "2HxEAbpRuMasQibxuwTBK4Xu7ubqb518BtZ7nULkqCrKuNtr4R2xP1tUBUpk7BkE82bXVqFdPLaookuMVut4CN7Z",
  "key20": "3omgxbCwu4zpatk32MjrWefDTD47Hypt8WLRMGmdAHAdQ3PDhpVhHbQoJe3kEzfod8MAzYotEcqbQf4sNkAAySYu",
  "key21": "5nK39TfKyTheKvP5LwoMB8EfKzxJk5ZBSrtkDuysCWBcWnzhAUyUVH3EjfcnarnciXUr6npgn5MeyooM686rWeyy",
  "key22": "2zH3658W8yRRN1kTsvoTrFnwPdCnEpdQ9GwEAdhWP34QW2uKtoeBMTFp5zXuxwqTdeSzdeHZtsfaSA4foN1GNVpx",
  "key23": "5HMf3SqXwwQeajRHB9FyyZ9x4uYWsFjMCAXBCaH117ZWUiPLK1MGc24sMxu7HmvxcS5syErQoz7c7bVVBZSHeWM9",
  "key24": "5a6AchVWvXYDWkMiHP5UAdPrEKYqctDaBx2hfpsBNey8c9eTv8CtD4kSRoKdKYCQjXPU5k4w84VoWdaVtfKYhPqb",
  "key25": "5QMPMFzKBtSmeJzvaT72ZxsbzuqtGghJe4YPP6ik3jDxShmDd2MoaM4Dyp7B2sdiZiMHMa8EKebTJ91HttSN7t3A",
  "key26": "2zYe1ziTpihjxraFR1Sgo95PgfSgMaPTXY4tjc9S9gKjY6WJxgQG6ZQNZ4QHG3G9SczK1dCvYv41exFq6ftfxvUG",
  "key27": "22Qw6AbGD9giezbowTJbgx44ZFx2W35ot2c5n4JdihaMdrrJBVFfogwHt5QikwasNfWYc668dKFWP25KVc6jYyCa",
  "key28": "4eqrpk6imNd7bBArEUdzdYkGk3VdJaS8kMmCPGrCBguRoU8kYsaYLfrbW7SPdv5WsimfDp3HqEwFv7JWGaWWKNsF",
  "key29": "2qLd3cbSdvu92xoVqFv62aUc44znkq941TfvjZtGq9AQ8HQkayDN48AeKSeuz5EkZmE9g16JNpoYA6i9XkMbmbD9"
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

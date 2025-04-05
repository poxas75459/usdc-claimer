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
    "D5q1h5W8bYMuV65m9ERCjuxEppxwNGCQZamLpnYimek5PMDNcA3pTvRmamyHXF2bnS5obdVkGm2twVRBzDUeNou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wkRAUVisZqJDMRJ2sRUkPcvHddLpVLqDKaxax7Y2DKHddWM3id5LrSNuCFMWB2TEZ578zLqoMa2GCY1wuEu2HQu",
  "key1": "2J2bpSjFVY13HDo7Z5CmwN2LmxqYFAfy9QqFAhcDysFs6aFqdyBfYMB4B1ToQWAwLp3wQmN2qyVYLCpB8MP6F71M",
  "key2": "2H2fJUMi8XJ6D2BXCFHPrHzCrCAQbZqD5QBhJtUwj5Nam9w4e4cPDHfsoN1ozxBpxgDesd5uB55y5LSAFNmwRdb2",
  "key3": "2Rwk5zb1iXExSXA3nk5idxZdty3CZnhVq55fu5LMFwV7YNjDKi4cpBYSwpkMxGbj3jd7NyxfHopJQoH8ygxSX6mT",
  "key4": "3wcQQ5fynwsho34tKUuUvp15854TWZ3tL3ma6z7zw3GeFHqu6YhWcgMeV1o7P9d2ju2QpfgK3VhU5KJGbkJAKn8s",
  "key5": "2MsrGaADpSatTWWUEM81r7tXWv3jWSt7hQG8NQhcbqzJsfatYMmuoGTe4RG7Kx9sVUChNnRbnjomipEyucJyLF3p",
  "key6": "3itUrmFuycBHCEi2isDzM3TvscQb2VbYi9ZNrsfHsFfKWkjy4WLwv65ZcUHZYeWZUkQswARggkaLRapr5cYm198Y",
  "key7": "2DAfLuGS7bXAn63veALm6MrgtmzhrSSGQJUrgnzTv7vswnVhkZKfqYwpmRfuFRSX7y4ggRFoZWLKQwDt4W4prdz6",
  "key8": "29kKKpsGvn5h21shJWsc5Q69FEnETPVs7KGXoCcmmz51fpP6G1JCY38DECUdLtXoWzeKhb8KSBcYZsDuBGdJkV6e",
  "key9": "2FmsS6zYkh6rdqpAmyDiJsVbs4VxdCCzQ1YwngGaBwqQC96s4QkZ3PFvaekL8dfGBjXhAs6tBuuu67iDfjTZMdZq",
  "key10": "3ujnTndM76XDBq6xtUcvf51cb8wo8A9sf2oMf76zStaaEviuh7VL91Attq5Br4XY3GjWdzqvncjxCEhujRbtGRws",
  "key11": "33Wt2mnDpEg79L4Qf23mboT4ZKTNxKQHc5XXUKekgjcwBoNcpnPz8rvyWFCwHgRPqnhK5tXUaYRHTP9e5jiSFdgf",
  "key12": "5YEdm7DonRjj1G5PfzJGYR9k2QuaaipaEUic5c5X2CQuUcAedM13tDJbuQFE1nxb8kWdTjAJqXCCrCuJMfLdASok",
  "key13": "2hBadmiMmDDQiPmPVj4CsjhsxcNqSzzTqp9ZgH8XeJRJ3QnLDwCfTeYiAdcgRtj5DE1XEx2oK5YNxPkLibAKuEig",
  "key14": "4vL7MqEdZw8nJYkWFspJAAK8Uf8kvxUViAWAV3Wi4oYpDcpYZkybre9vHZpgSzN4J9rNV65mhUqAPwVuyWmpQafY",
  "key15": "3zagbRNo8xFCAGb4ckATrxriui16DtLuasfMPrfpnK67BbX2wgawCnGzTYN9JKAf9GHqaQUHRmUd6rAkapb1B7Hf",
  "key16": "xwXy4HpC1HYVxcDnAST1wdNikLGAoBEZKwU52aMVwxXfeZxXRVim1C38RsdvuYaYNAxGrCaaB7CaeHhVLiDdbpR",
  "key17": "4Rp5DiFRmHWWJz1zJcHN6rknxB7pyc8Efi8S68NNRQTLoHWmUeLWnS4762D5W6bXSULXiCSVHi8D5LaVVZeuL63R",
  "key18": "4DkgSrmLxZLWLp574RhpCqsFa7x8fvmPBAM1T1CcLbNSGeXKMq7ndiASaq1oZzswB9XYCKzU85FFdWnsLScqGXV8",
  "key19": "8QfX8gHRBqvSZxyQgY8QoPFc4VHckCZy4jvfc882fGCFeYnfT1CedtrhPrrvYinCABzc6ecic3Mg4DBJ6yWro9o",
  "key20": "sy9o46ZVhscUFC25fQDuevApxLH4Q8RbqrtmyiUcQ9KRhwfJtCQKkKuDJRE7QuE1saoEP5FMrMgmJKBmz8yMVSL",
  "key21": "3DZgFq5NxK1HLCmg87KMBBtSpMKBfXj3cHsDsXbgdchCFvcez1jDVuga9gKh5BZmFB6SAehFmjgXDE8xAta3stV4",
  "key22": "mrRccCa1RccaW49g3ejNUwLHow2wBATJKMq287jtp1oYD6TR23GbDa6oPUAzMpbNEHqh9PsqU3f9kGyoyzytLp7",
  "key23": "CSj2A5stMmiWQzbcvXxzC8aVRWqKpKBwfdk6XngkRMWPB4VymZcygcrbQo7Htcir8LWLRsT25NWJepgJvdEFmxW",
  "key24": "5bvWuDhjeRgUa9kWCSE8eui8sL3dvCRqfZjsexa7x47nJb9sfBZfTyjkzRjdpDxAZ9g26RfMKVY2obaagxhnwqfw",
  "key25": "4RcuBx5CtV4QE39xX5i6ypCmXiLTUGU35U2fNmo9LwTFFXzGvT7LVcXKLgiVQABJRewzmm3j6iEW36Hxpu31NcaF",
  "key26": "5KPd737nXs1zvq34z3bNV2NChFWaJ3VSPbhRatEXybxZCgzZ3GXM9bsZaYSvzFZ2moCK4Xn5PJdNWdjiMSs6NGRi",
  "key27": "2uoc5EcvBFNJFSNNnQ2sUXces1J2aUPrNGbLufGHBde3W4Y1hd4hxJVjURveoUW1YM6xDS5DYXvqixs8nh6jnFGV",
  "key28": "g7VYeEuPAK4BaCUVPYZnnXpkDvwqYEUxcSuGbtXu7RpMVBxmCTq7Q5bnrjhcfirypU68bhKByWutVknCFzyVkZp",
  "key29": "5apsscpW6b5UBrymC1qZ66fuzeNNhdhZMvhML6an2N7P4YFouXWAxv3zKgiM4L8UAUjNLqgPjjRh8FmNJ6bi8S3V",
  "key30": "5C1baxn2rRGG1NSL9dU9KSMvPMXXQxYDfCwCRhNxm5uxL93HiMLTTneY9tQwVmJx1qtaxfcz5cQeWu2xDSf5W4jQ",
  "key31": "7nBtjwQGXtFTo7CXz9MJhd2vez2fL5oEtnKPAKih9nM34ywHHRGXQraCyr3xomBBUuJsQFXk9FsM5KFGm7ukQiR",
  "key32": "5HcwFvurPoLfAamvBCouz1iGw5yU8txQk9i81gw2DxbwBaj1WGeNfKW6P1xDxMRjiR45oHsriaSrRKKCAqe1ETav"
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

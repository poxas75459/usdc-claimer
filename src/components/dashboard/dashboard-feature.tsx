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
    "pAxBENeWebDCib8H4erPL6SkMLGQbTbtX8X53kEnhN8gmWWXAd2GnBv814CWQAQw4WTSZLKNKhnmSvdrpa4kfbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCz1MGLAFREXFFNyxHT9aW74umh9WZFhNhx6Qo2ntNvzKkUJY2eqFv69LuPthojwmxhEf4U6ZhyKcPex6LHNRyY",
  "key1": "hmHw3WnriUCwBbtFwyg9k1kccek3Dm1XdCSEvWzfszvgpgY1zn8Y2qGPyihmEZ81xgNMDUFw4BQZwAseRo1xcuT",
  "key2": "52qHWk2hsyD5Yq9d9EaVEd9W5drmrAykj1n9HwqAJWE4K98Yf1yW42WhZZQkrCEPDLiuB71fxzUdf5MriHrQhnbM",
  "key3": "5N2egj2F91URD9WK3KBUys3wWykDFremLXZbRW9pCpjAg7gFzy2Q2PEp9FaTrjwLPG4opPGzBWp7nsk868do2fiK",
  "key4": "2jdJ7NEP32Wp7kYHeAaNPcu5mepV8voK6cjpks6rCpNeS2CB9auTZYNDJA4HZMbK7oDzFSiQBoi45TS6BcUX3wQC",
  "key5": "2Vrh3DZyAxiXQtSb47gxgNV6C9NZV1ACmhxRByuhze68kZJug1iMSoUg1bmr2U7yxEtwDuRF9NwzpcSgTgY4AwQg",
  "key6": "4AXtQ3TgaucBtv6HcjsjmYPCxQtT3KofTv5kxuTSeRq8mkTWZCeLGyGiuwXiqTFwjdKrMyBnCgxvZqr1PzmgCbBD",
  "key7": "43pRp9tJwuENvsr9EjkPAUwKa54pcoEJeQRtdD7E1D7HN4YuG8Ngym4ksFJgM1wjfJRTcVZtb6zRW1vGbrGwzez6",
  "key8": "44Fy48SsHwvm4yixjqFek8LK6CAE4L8G6zrEX9zfuJ1eQkKgNtmXtDcxdcgP1TTCLqYFnykS1DzFuv1Kkc2zsUmJ",
  "key9": "2wu2izK3MkhdEjmffY8GAS4Y1o3bJP12VW7k3gqr6SoF9Af4Z1h5RRArEAeVvgbC9x1bEurLtWa7zzFweBZCis8F",
  "key10": "qw9wB5S8Y4rUrbQJoD5yNbtArwwYSPZQYJ6EGsQuWVkKhq61BhMhCFM6Gd65xWXMsXfTxFQbLiKcLrbVt3sabVi",
  "key11": "3Kwnn5A8EZmkg8NpQoidTNP3K8NTYL6oJEQHRySZyxGsMU52hq3vbPTbyg5hoC49LH7aKMZi5rRcDe9wvQRBaDBT",
  "key12": "3mDFyveMkD9H5DD9phcFjNJgNgzq8SzhhYM5qvBNiNuZikvDfNexNiKuvFiiJMbXwiR87X8AUgAWgQwzXEfAh8C4",
  "key13": "62UYH4uzVPoUpjHXvJesrN3M8qXfpzQDQKsJJ58zTcmPoQZFEvxtDu8AtZZeQwToMdk6EqGGkzf89Ze4sX817wQn",
  "key14": "2RBum9vumGigas4eJSHg8e1Ey8NyfBpgY4aRyp33HDyTy9WtZriCzaAHPkU4YUZCK6cPxFwF8HuqrHbJdvN55EqV",
  "key15": "41gPAkirEvqwxFRiqvPqyBrDjL3SqwhE8Vx1C3CQKgbK2f2m3yGFxVGTfhdoX8J4TVQQkWpJbbFMb67ruzXUY7Mb",
  "key16": "yfbtK3zXsMt6swjXxPwhdpo8aBRQrAyqtHR7bUbTVWE5hCfUMETMVZ1Bd9NsYdEKw58DGCPsYbKebbdnrVr2gaC",
  "key17": "2g2QzfFbuxBTWfoGEfPysZ39byYt3v4au3EdKnUz8XAN95ALhwvzApcFe2BU5oxnLqFzZSua2duSWPsK7FLx7BxS",
  "key18": "395eBqCgD2PT3EBUAZMJAR1e8463AkqxT8oaktu3zCNEZnUoZbW7hymYZNQN4e1R4rvYy2Hqc2f3SVcZSz7Aos3a",
  "key19": "28Q9uuXadSdrHA8GxtWX9A56JKy3VioHHmatLBGaTTTKozPxMEJt3SkATuG6gJRBTp1uQcpU6ayUDxkWLTNavmfx",
  "key20": "43peiTezvdWoFYwdxyRPWkUT5FbAH3JXz8XWf76DT1gu3E2zjwrK7AghrU9c4PcsAV8dfSsekPw8pWqWLfJViKLF",
  "key21": "5V93jsR8CkGWut3YsMeEQPqFQmqvNgvsVUFZTs5Dc7Q7hFhpUBxvJHANwgfZfk6ATQG4fuuZut2pW1oobo8yZ8yD",
  "key22": "5GTSGRqMHbXrE99ErELZryHS9g2eZntnArrdcSDvqxLTfWF4ZybgbE8VAUPei7y5HHPm7G8j8A3mGjJCLsxJEoG3",
  "key23": "3XJ5v59FtrWWRPchiGCD5VgY7FZ3yUb9c6YoE9Vv5JN9fXjmHrsdkmWwJTR4q2J6zVhWV7XTw18ZZippaarCdxpt",
  "key24": "2BK6M8Ar7N9tin4giibQHnxpXnKdr7k5nqFBTFzscnWsHm9HYXevMB4Z1n8b3cA6Y9BW6PiKGPqnaoGbXvAwWLd2",
  "key25": "5su4xBKCX6M6uYKUvZTeYGE4aS7qT8CFqGMd4Xa6R8iVZGeLnuzn5F4cGksJ6SabDE7yeWfyd7y3625BoNMje3bg",
  "key26": "3yC938dEubok1hq7cSLBaCkFhpSjoTarrwwHsetES5CCg5DLwELhmLVp4cRmW1YHXMuP5ErUHRSUR256nKkNk7FN",
  "key27": "Si5iBQBh162wcQ3ZRZ522LjRRt1PvuE3dcqsx1DxEYtGtqSmgQPKmy4Veis6L4HqucVeHMMZ1T3NsJ9TNnQXvsu",
  "key28": "3eVNBbdmvmLvwF17Y2jQoQ9LS4T5H68WArRdzfzkXFpSLXdBfnyozeizHjHr4DDDWddmDESW3pegMBZf38NX8iC6",
  "key29": "QS9P7CwiR4xcbicKknmNYHWzoAfRBmTA7xDpJQnxpaW7bPC2AmMC4y5CGg6tUhqa9XY8cCTG4NdFhrV1Eftt3yY",
  "key30": "5eqE8Wa4DH8fTxRbfReGbgqjsuREShRTzXRAmU5B1eEWwTXrm2aJ3TVhuafNZeK2ZnPdjj1F9i3LpJW1coiJvfHq",
  "key31": "5edW99WypBUJmuWz5ZD5jRKDBPqBm5Bvsx1Nb1nQP1ABjxxZzdQhXMnJGXv8s6bKRRQ263cWXj189ucKaosjRQQu"
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

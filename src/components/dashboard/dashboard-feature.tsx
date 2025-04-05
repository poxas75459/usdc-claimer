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
    "2RqX2y3Fx4n8LdoLih1JTfc3hKupJuurCjGkhsRV4SMK6omTt8XNkqMycXUbWKKjbvq8yGepwcmfbEeykEExaqiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JY4Jhw8wzu1bRQicfiwTJQ3dkRQWhKFqpAH1PQvJQwQznv1oKy3BFPK4GED431eJzcHVnL2Vt9u5PwX2jpWGmNb",
  "key1": "2sRqfzF6bAbRhTXoD94vym6o2HzEarDQSpNGCeiBaF11s5d1U3Z8JMN6CxFByPp6Vk9TybmFod2pWhKFn6BQQWkK",
  "key2": "3WKKa8rWWgrzNdKojMxVo4rrPneRz9bjrLEdcqAA6dw9b5CGVC5wmMYxcXFwnapBUPyKvLa8jRMsGd6rvx2LFEZz",
  "key3": "3Lqk1x3TZpGEYaQCFoNJR7U2Mr21bUXJSz93cw8NLLqxvczwBSyTQv32gksLtPychXkimH5rQzAQ35eyxL5ATdpZ",
  "key4": "uwQHTsunEkp6kGCdWRD3KCr6kg9sKdd9tN5o948Je1RMzjjrwrkudR3njaLcECQ56gZroDzHq86oZZsrFmwsS7H",
  "key5": "NEgKk1QwxFYndaKGDapp25f1TeThdT2BEkkmHH5JQ376CMurqV2ap1LLKZFJ6srem1xxQVmVqZpFS6J3R4or1jn",
  "key6": "233qKirQUSicry2snfNYQb2jmAQ5Po3LFeQjzhQJBoS5SYSM9c1pvYThhTyRjMVjYgJcePRYZ9QsAedd9NpefGZQ",
  "key7": "24aRxQM2QPx4qrMZGk52Fa99DqSp5KRphBntXn1DhsAm46hGM5io9o3F1iVm1posbWPWmNGa2dqEFmjiY3gCUTQT",
  "key8": "4dmr52xSoXKKC7rESTiaGG4cGHJRZs2ENEuMycABife2ksGjj6BgfAPbsY1Mj38ge4jDMctFWPWieRre19M6bQ5o",
  "key9": "398rLWKC3irxptCLeygj98XyLKeWaPEshwPun7KCCFw3uYJngN94ixsuwTb9EVjy687cg3xojGVJCydKi8A5XSUg",
  "key10": "4pLS5HVQUeSP8kwgHCy2X62fH7mfDLTPUa7CNQ98p8ZkS984vGmBz4NbPR4ME4BFFB7EhKZEeRksoFd8RRG6ndf6",
  "key11": "TbcpmDFzJUNv6uDL9MPLtgNb4CwnpZVcM7sbuFforavRfD2LJPCPSiNPcSWSK65zKyzNawe2KPL4vYKFzKkLzLb",
  "key12": "2V95yAnCPcNzBYFeJfG3pFC3yrWSa57jpeTJcxesEXaTz6Haw6qtF7namsm9zxWiDNw4aQhv7N8zwsT2XkEt2wJw",
  "key13": "5EytJ9pfHpf1gAFEz6AAe4aLG25f9PFtbTz9JdLHqtWnvDiZX5uzbTxXoq1yKf33gwcf6SWGBVWq5KWbjiduBho8",
  "key14": "tnR4hg8cuC7mAXomgg3LgrTpHakozreFEgqn1kUG4jqtaokYFTwtaeF7k5TW6a7fXiCe1Po2Tar2GqwDk5K9gd1",
  "key15": "mDPU38SfBGxL1ds5wV95W7WcJ1keZa2AgvG68cTjvRArvD6QSQhANuUjh34zhTcENrXrp3SAdNGjVazYXkHcBvS",
  "key16": "Pzq3vR1zA3QYhj275cAS5M39kT1Qyqc85Agm7PZsYsNYhjTEwEPufqFJZ1guw7t3EV8WBwg6xcKaVasZpQh11eM",
  "key17": "5sMCC8v8DUxrbjr7MzDes1i633sM6aXwC2BVgrBD7vz3hBkUkQUdRHmptnQc2V2sFb6r2uqmcKwM4Pok9k3CaUgg",
  "key18": "35hw99wgPmRPmCDTAE6R98uz4fCLM2zxHQkb7jjG8MF7DADHPh5izoQwaqWKiZCyBKZ92LQqYSkCvmkMVuj5HSpA",
  "key19": "4S6LT1cmuecjpRuyYz67CbwN1qy5jyQcd3aQN9jBWjrJ6wZLMTUv6om1EJJ9pR6GcvR3x3Zj9WRWn7Y26M4XtpnF",
  "key20": "S3mjjqVmEfp499h7ga99YuADwCwg9eoSRkVjXJt2xw3vLgP9mf9BGgZVoBbqrwkVrCVtfGFq59u2ye56QB3ehz9",
  "key21": "3kTcH2Dk9Hmdaky5J35HGZE6zSfkwJKreUVkd2wdzaCee4LgQUEMajYAmFJfYpFNKZMHYNoV5FYsEQdo63xth4Ln",
  "key22": "5peYBx3SgsME88fRhjHLnrfgeGSSxcn72x5dmx6J4hdZ9HbMFbCwQiCkJCq6JvWjbbtn2JKne8UUrGZxQipp3A7a",
  "key23": "4yEpNgeAnhk668yMQmdfHwFCFtjKBZPy1c9XWxpQNak3DE7cErkWi3vTDtEeRU2mcxbxQ7ymM3hpdBv7kWr2vJTv",
  "key24": "2mDNbAYtUKtsLHuVurW2X4rs6U8ExuJdzmkV1q4EAbLQF3c4DmY84WJTfAbCNg15Us69v7E6fSRDkwD2Y1DyYzym",
  "key25": "PQad9NvQEdRvEzaPZ56skKXyYQGuWnQ97SQzmKDEns3yTkyU5NqKLtUmMY32q29wYVKcJwjDsjqY9seeYPK9Yup",
  "key26": "LEJiubUssPFAgGv85K82abmsvaBW8raNWcWasRaKJKhxzDSf1CcjHjmqQhNSUTYG3ZXQmw96UY568KQ56nyRgYB",
  "key27": "2GeXBdetD2dUwhiEjYYyR1woDW2VaeWhNr8UEUdKBPp7KUWKGx7uPN5NNQiSTXfXgy5UxBFX1Maccza3VVQg3ADL",
  "key28": "4CW93rxrBLRtfBYHPrKfkgh89yq62ajRgUBZ4WSqauXCE5rXgShfw51Bvbva5ALNzNugBP9hc9UbVvwNmDoB2fiW",
  "key29": "53aQm8HiWtCFqNktH6uS1UrXhWJcXH6vPSZATjVps5tXGN2iB2evyCsLH4Ge9wVxxeVVhijNeXwP1fSqPuxVS5RK",
  "key30": "43oN7JWJRx9D74s6kPrewWB7VXpV78ry9gaP4jJBPsXqCqmCL9QQt1izidYpFYEidPCh1A6cMLrtojBSnwCpNwQL",
  "key31": "3Q6PniuUk2W48rwiyopDHCuZ7SGKuYFTZfooz3nRYAVZhBUxHvpE2uDQWKTvU11LiAZ5RrjbRLGMF6VHWtFzZRHt",
  "key32": "3ScuvdYqbFSHfnnnJ6vQjkfT8zcvgewQqrhPTA4RhCkiGGLfyCL6vWe11qvsvhk1j7qo14SRSAwssLWdikvESkkX",
  "key33": "3a7GTSis9KaDErJ9PfGcQhqSvp6zBKnG5q9jaQPySGK77Ex1LtHMub5DUTSrHjfSukPq2eYsbeaqmmoG3FmvProz",
  "key34": "5mD8y2KjhJSNP9UNZKjMkqqBskcaMZusDXSrdA57nJnmhpeA76ZZhMt2aQ3qcfKNab9AWLaXuzLAKS9bjXAtPz4x",
  "key35": "X66ZJfhhcvJt5mWm8dQmeg4QTm7ssR3ax11mjGt9FwjqALWuVcE9rbb4vf8KB4LuM575RGE37SNrJNQd4zYBSvp",
  "key36": "41vA5119yfaDhoDrN7NZgBXYUpH4gSrteRvVN4EoJ9FRJPpENjZRkvzbutWa6zv7x4wZYao8zAtcuLJYjnekBRwf",
  "key37": "54sfqkCGGrdNaM4N553pCaGkWhg8YG6QAY5aeXwK9KBZyY2gd1ovhD6YhCpyivyMfBb59bC5WecA2gejBEpncwhQ",
  "key38": "2qpNDAshX7Gnqhh7Q4AtobWGRHTKtXBqfMQoDy4NgGS8u1wWvgiuLcRQsKv347GdsHsjxZAdFBCCLBoGpVwCmE9Q",
  "key39": "5r8KYxarmarNiJ3EEsq7PioobUAkdCBseEBEJokGYkLHrgs4ke3VeZeeN2HEZ5u9vHaV2mSdXpUxguYR7RorPBwG"
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

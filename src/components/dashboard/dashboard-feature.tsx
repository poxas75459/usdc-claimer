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
    "4WtCycKYZvWCYgoaiD4ueBXKoPc2carApdsuZLPQGFhyyuii9GR5LZfDnNHqt593TDzccc8rN2o8TzQq26YzSJBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjKnV273S7C66vaahiScLrS3CkEAeRE22srZVpvtZiZ7mSk7N5y1C5GDeV7rqitC7zYPjeDVTf5vVG9uSw4RxST",
  "key1": "5Ay2R6h6rvxT3AZTTt6U6qGc1g1N7E2UdLnqZQqGLd2sNmytM8pb2RW3h2NcTsRoYggkaLyjNv6fZiawNGBM7vVB",
  "key2": "57zdkLaF5wFPZNEbTXArCtfjAg4DMh7wgb8UfWXpxbSmXpYXyYKoC32CS94yR69ezfr7X77U3a7vpWLerxytW7Ea",
  "key3": "5uYB3aQNhq1JSpmoeoCRsnnvVXkzjfamTcPKQsCo3pcUP49JyRNJgjauyd8HMXktugtgayKAzCm3RXy4M9mNwL2a",
  "key4": "5zS64vTTym5R9xjLtWgZ6PvN8j48asheV8oW2wqwoyHW4Pa4aLMXXji591Z8YzT16GHMQFcXbGaJ9xw3CTnfUykc",
  "key5": "4UX63SnfQHidEZSNj8v7gKCcFmPECD7SqB5hJUrgAbWpZwxjqAFHffkhP3BEFfUpXSigw7U8n6wejgshmnTkBsTW",
  "key6": "2iH4ohkmR4AyDYHT3UzfFWGP55ZMePJrnL1US4K9kkyL7mZPjm8okshE67EHojprnU3FDR4p4GbToUy6m8LHB4Cv",
  "key7": "xCFefkJoMzF46BfbTe9u2JMuhdW5T6QjB9PYDHj3nmQgYLM982nL7aZsA3WstFMifQp1a8XiVKjU3VBsGTvh8bY",
  "key8": "3wXcZ5D14KtNYoem3zYjyEnu12dEb97rJrPmGjfTsB6ZZdwKNHwauF9drXj7ANbaYcG2MnsKFHLW2pWg3JWHdZBT",
  "key9": "WnveweYzvQ72QXLnDZ5aHbPaafZkEPz3GamWuxurv8vtENY5ZR46sb8wRkv94YhRv2DobYMxQgyannoiKadSZYR",
  "key10": "C8zzwgMX1DJ9nrGENvvVQiXVcwrEQTaaAuJarmTSRne8NJUF63mj32FdRncaA1CRjjfykgq7WgsxabAaFcbnkwt",
  "key11": "5eQ9xbwA7dVn6By1CrKX7y33XbcCTBMALHrmdyXvj4EJrvsMDzj1q9wNzxJ7CBfZFrXSzFxXabSh4TLXneSRdgQG",
  "key12": "2guFSgYLmgrKanVWTWMoLP9dnN1SqwuyJaGL9BCzT6iUXXysipmJVVYKRTC6nNFMXunGjJtNzpZdRz4wmrMUBA3N",
  "key13": "5SzbQgAsZtxwbbwkmqVaFmyWdATnoc9wVrEguydW9dw8YiFBWriKtVWL6X8vByU7uNcra5svarpvYM78AfMdsKR7",
  "key14": "D6w7HhbTZusYMYDtHYhAuYU6B8dtXd2JXKXXhfqKnSWgppnqSJdpYfVy7NfzSnMkDTaZPztusYnynWnxatNVYNe",
  "key15": "62tzTzGQc3fv77WzuRndXjBwSVSTMwX1MWhY7FCtQNCAZHX8aVh1NzLUhEyApq6RGz3Bzk6EPvDidr3eD3K8U3VC",
  "key16": "64y1hJfAcYoyHYiDJYUEVEUr69Zj4vR1qGc4vzhCwTMrFgtPwCdczPvxhJDFU1TbS1N5yobaMeTYfhVzYwmv192t",
  "key17": "5KhETVWkd576x6QiheukwZExntULW1zctj91r59bW36ze6LXDwAvXeNYhiETuMRyaSkaTFPrt5gHW5p7ocwuPjXa",
  "key18": "38mRGU8rVHza48TdtnCNNfNAe1XNkeY1QmrHuH1RpTLHKVdQ3Mz7JKkX53vAs3oTQXd1zmY7D7gmMc9wo8SGDTNA",
  "key19": "3AB8QoREgNP47kXjQEseBngpAyemchSYL81mtsguaTmhjdDDf5UFyY1xDcGffZyyWZuA1AfSQ35EhUaVscw2cfES",
  "key20": "4UuAy6JrUN59xKC4hFY56QafV2VFWRMKGeQDJvDoX776UBC98fRdjkd4wLNoYtsC4tdaA8KUM7vu1PKEhePcjgKn",
  "key21": "2ps9dSJqT1bmfQefzp1VUr27aEYUi8j23fouE5hMe8ZZGmCbAa9Wn1HhQKwb6QaFhFFMo7UDqdQ5KwUyJqGAq9Qy",
  "key22": "5ejEseXZuU8wHkTmQ4tVoLoEJY1YVhqPV8nqSneCkMJLcoiZ7pZQXHLbcKJRvk4yDcTYEF4QgXDCZCurqn4p9f9c",
  "key23": "3Dmxp3CtnC1y7EVszawbNXGkp1WowbxAcWP2jyJiHZG64iQVYsGxEWYCrWzdb2b9EQbaUJkmbjR5fXu4XH3mRuy4",
  "key24": "5uUdWTuHtbLoumD2WuBdAVhpoRFY7eqUMvnMpkaSdnENfgVXEeQ2kbZWQUR13XDYbPJhH21VFpJdLtaL1cXbAKaK",
  "key25": "3JsXh6ZCcp19u5tEeCR3NLuvWbRwWSi9hhZgwJCLcDeCxhKCmWgCN15AYqmTx9Wq9gjTJGvK2b6WEsZDLZEAeq2E",
  "key26": "2cigr2Dqj8rMS2LBsz8jAeDeU7rZ5GtiQpFsVyJSRFSka7QH6g2zbKKKUbHGuSv9UgV127RVRJHN8AVywji925Hq",
  "key27": "4oCqyqRkGNEhAaJaRSASsWHPmAxR8hGhEPF8UuPvAf4vLq8ti4o7BWCwMK62raVCko2JgnZewesknUtEgVRMmfJ6",
  "key28": "3BsPUWmsf6uAUKfVjBTiJVjXjcpcvmRdAz52PPcjBrm4hsTKnNCkp5Fz2FuM6WktDPBt4cYT4FVuTsjRYxofChW6",
  "key29": "4Vh999G9jTqNiYkMoedqWynnztASvUdLbQCLLzvjZqKSUY7UADUyZUo71NZmJYcv3KPBmWsSLJY7MmikCmVjHQTV",
  "key30": "4FoNFaNRp3C8q3HSiuxhStcthGjDgYXNdi1LDDaZ6mgczyuDz98qd72zM8mhACQRuj1PEfDuhmEQeWNgqYYuyqve",
  "key31": "2DLrZgwW9rHnXNiJuKEiDuTcBq3zqJuDUwfpnaXhcx9yQPwp6ztijiReUN1czVke9rsBZzpniAKMkrEE6inJGEzb",
  "key32": "5jx8UqaD8KMe2Y5LjVSZmMRQWZX1uKNL8N2KuLTyxkQUyyShcyjGPwCrQEqGo4hevWWVpfQGJFkopbCCuAXDjPbY",
  "key33": "416StZY9wp9H4EZRvc9y7CzqHnpjBf3rk8n9WvPDSv9j5KN41M7XDhaoehZGS78E9xQydnGLQDK4x57F8UZsEzSs",
  "key34": "4MmQMUkwLX8vgvMS7RzPDK2MLyDcgsYmWc49HKW1u255FNjqm4c6EFQfgcHyWWVTs9yqyqk14ErsNusyGDtsaje3"
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

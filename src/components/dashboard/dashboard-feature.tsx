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
    "2LxeGSxbtNVpgvpuKcJ9gPHFENXW6CrqvYLpsHxMyfte548LS64apUv78XEwXfLDqFi123kgh4ox9fu38WQZDtiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sya8Sj3Lj4XyxZPePemXCyFgVmMGyK3xtZiN2FDUho72onk9QXpjvMestYt1iWUYEaF1SnBKoFiN5bX3SwooFsY",
  "key1": "WrqnbRecE8wAZe8bbmesxpEMdbDnGkmfRCDGDYPD25LgWQYyTEqVoHYcLqf4qB8H1KyeYLvzZtvTsgGEMUeb5Bd",
  "key2": "5PBrSd2wSh8wUsEq8UqjSAPNY4G9h68vJg3uqpbGj34Spgw2wToTYJKpnv7DithrZ8NHv6uJ3xznV7DrjseNvRJk",
  "key3": "2P5Q9oaCmuKNoPSsu8NXsGGZsoK7BuPS74yjuyY4hp4V3QVkfs35jXHkZxW78foGqMp62nEqrSoyryNExC1nL7oz",
  "key4": "3eMQFgZFH4cqwZtN7gDLd1om9sK3DvCs1eJjfaVxBGo71JnCgVvYcXg2K9phwukudJphNraZhb6g85HmJxxJymFx",
  "key5": "3MFxkNEtaG1afFyYsJzUSpReqJBySMSN66jfJW4wAeRWb1wHyiqvTuYUT2cnqSW3yFcXZydDb9sTotJFyYrSzyeH",
  "key6": "53nbSk4KdV9pFoTz7rjtsajwMBjXVXLG7AB9VLnTfk8RFZrUUYLPxU8BqujqWtz9vd9rk82hY4uxtmzoVS54ZBD7",
  "key7": "4odTpF5CTzkJEeRLjtEJtM8g3zuhtmtbcVW7mv8KHJZXTYvSH6VkRtZ2F4eTTk45yaxbRixZE1TfdgtASBag9y1X",
  "key8": "4Fcuwb5VHB9i9he7arT9sdv2m3aC8fVSuaJ1u7xQCno3E2FNXknxmRMkohWDss3bAxrtLgjWRpirh9kS83DQ1sTf",
  "key9": "3W3d1jKptNnx5LhPaNqf5eYPYhxDkRf8vKzRiy13HQarmKdU7z8BVy3LKxCoyrQ1YXAw3Da7Ebgw36rW2hb2FuN9",
  "key10": "FR24HXYUgppbsqrC5uan6m5A1NESET3XRuXLsPTcCu1XDK612mWk8HFPxBULE3PQeBe3BomXyY4UbRoMoGKB2cA",
  "key11": "2Q6zYB9dRb9G5CfB6Z2qD2pqH1EeYtYRfoqrhLEJkvRB2trZWCp2mH1AnqBdZsuvujHa2zHM61gTA1EeYPcSJqVt",
  "key12": "2qLv3DCGvNJEpLNm9Yu1wqjKriiwWUPys6oCoQ6P5gZpRSJBqUNr8AeX7xGfQKsaK44gVVfcKEmhfEySYmkxHimM",
  "key13": "5VBps1Lqq8EmbNdGNtQKkUJaZnaXrA1V3pDQbUB6ctsxrEv61oQTWjLGMYqHNxYz2iMzgpBWd7qgUjKxDZ2dSnKF",
  "key14": "2q4xhqE9DYeJgqHqLjDLkL23NmadAtEPwR5jdmPMC3msitwMVinT1BYv1bmLxGb5weSRvx5Utu91ismtBWvE9Acd",
  "key15": "5Xsq4PCz8DE7wbQGjnBaTnRgiZHV2QK4SuJNvccW6sS3W7EfsEeqjUhfwnTD3sVkbsSuFsnjD9PhmvFq4rg5VCxM",
  "key16": "WZo7Do9cLtwsHT9Bhisem64mG7xWBZG1jaXi2wHfABbjibcNGhb3kucX7TBoqK1rgaa24MZGjUqHW1gB9Z3kyYy",
  "key17": "2sJjCwWkMDMFKirKWv4jKYUcW5o876UwbLgicWp4G1LRyZGDSRvtsMYJgRhrcW8DLL1kcPyn2b22cyxPwiEi6jYK",
  "key18": "53yHdFf13WtyYCyN3xJgcTSVJP2o2b3baz5cH3Bqc9z8eNztSHuu1M5pnvtWzziputxR4Z5oZiU9uPfDrLXe8mhf",
  "key19": "4g2qbD37bdX9Q2amJJErorGc3NifdGvngEFsbwJCWRW3MgVXxC2BCiQGnxsBJvi4xhyqddW8dRY2GsiG1o1Qis75",
  "key20": "r27n5GPUDy45yJMUct8tFSDBsQk8GgGzha5TY4UNSaFJjcU9MXGUhmM5EJHw3uct4Zv89a2zH3bBaXq2Ut2gSCy",
  "key21": "2MUurVM1124T8t4KiTaNz7QiGob8nUWGLBN2XmW5hdzF3ewifHSNYwrQVfH92QawDuR9ytwF8yRZs9t2as6myxoE",
  "key22": "4Qw58bfHdYD2ENoPUbmc6NtCJRstfjPw74sx3X5bDMapxuazHavaJf7BG2h6N8hyNfvP782PpCM8YN71gvXFiGLD",
  "key23": "4JnhkiwMe2mWLpBHvTXgeuSU7S4Vk4r2YXypRU7reAFXKiiuGfF3jn3vjPW2tQs9j64N6Cb3j8wRM1PRfx5uxHNR",
  "key24": "cXwsTGugiEN9k9BPNHMjKfuCC5wVkMmbP9K1k1VZKYWAoqjBjXEQNqY6HjCvCCe6nVGTHxQwamSzCJ5qFYrU6h5",
  "key25": "4CkMtWQmT5xeQBfKYMTz1A5kZVb7DDBgHrTn9BwsXY3yifCh4ZL153Koi9i9EhFopUUABo3jryL8BDCCFEGngw4X",
  "key26": "4LfLGbRzp2AVyhGUGjPL7zy5XnxgGw5b6P2fGN637zMz3uKLFG7c9Jg9AtQmxuhDnjdA5kMzrfcQmLecH2Mdhdyz",
  "key27": "TJ1uJsEgx1TZqGTQi31fcdmSmrBwQEK1b42XUDnT8g6M7SLgE1aHkdNDar7cZtZ4dGqrS38wUTQp1roiQsmQgAc"
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

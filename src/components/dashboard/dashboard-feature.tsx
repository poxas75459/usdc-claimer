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
    "5BnUzYt2HULc4WkxeLLF2WS3RWJJ3zYXd2J1BPzZ7xis7sjUbW2dMv6P4dRaLqQ6sy6qWW7uNN5r1D713VCYLnbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPu3BPM3i69QCXYbUvR4uTaoSnABEQQefUPXU3H8Gj1NZNRENjLjQBQeyMHpDW96PBgSeje6pnnaJD1usKke3ng",
  "key1": "TDYKJuGbP4TJ3S8ZgnnZKmG7vD4vKWm3Fszz937TEtgU52S2oApMWCwfnS8W4GoCoyHbTH9wtJ8SMvR6D8tT3QY",
  "key2": "2RwCEttf1c4rfrHke8Azw6xkZBR3WWLFmGtKLiTKxtjYW7iMVAjNNjJJwwrhpCa7qZPhV46eqYQU14RxZbxsRqgU",
  "key3": "3gZfcF94JbGAWemx5zZEXvXo6Aft5AMrVndsTgjqTHqRg2EPBjNypmZx1zFxfF5DGroJvzyh8UYDnxtyZtA1qSku",
  "key4": "5Zc7WqFbcimGPqKnz9mgGmWH1jQLbiim7MoDJyMZE7meuWe2itYDWczn6g6VSMAXRQ4rdpN16CJrLzLvFRuW9puq",
  "key5": "3cDAAJw9o8L9jrEfeTKd8Xb57H2w4P6siJHTfxwKZ8KHBybDJoEucrR9VzqwuibmZA9VatsNGQ2kwt3Zw3AHDJ42",
  "key6": "dGHC2ivuPDDSBagzXxnRi5boPiYk2vRTbworJyXguF2juMfgRDPFD7ooZA6U9DFan1EedaVevCuH9yxjv5a3H3i",
  "key7": "5yQmaJJissgyHKDCUFJzj8ruaGFtCyEfRtH7w2qetpMq2q7T76mapQu24YjvrV9Zfpov9JvQeF5R3heFxrJ5VMEG",
  "key8": "3h7LD6owMywxPb7S9oybHwzQNakUr1iCKXSVDnbZSUPcZAEygFjvERPdVxFyFLUQGF3L8ZoA7tSXxe6knZCvtgMG",
  "key9": "cxX7hetvtNY2kR7kF5wZ2Xpp4ZZVByLZPyJsjGxeEDgQ9m7fZk7px3dewMCcTcddogdRyawhW1QGmfzMDNiUpWC",
  "key10": "2e48GPQghu1aUWKApN3nKT3FyXErso99C7vnj4beXvbbMCZbkGtzyoUwJBx31Vg9SJJo2NxDLcjZjJwBMsnq4mPQ",
  "key11": "c9hivKiXuTTxuxfB8ewPxQKn2Ho6KPWMkcoMmV9CH8e3AJXbhBkkT4nPajFvKPtd7k1yXRPDJyEW6QeKckR7gPB",
  "key12": "PJCXgbs3hvdJEJQSh5svtjHsf9iU7rcGGHjA4PUgnaAJbCaphHsMiUsMmSM6Uv4kB9mhJUY5GURgjBMwfa5Sosu",
  "key13": "5Q1DD2ompwq8BieLybHvvPt4redzQUUx7vcGa6rbfqpzcaaawfRiEkcmi3KnGvpUtK7AiYXvhnEnfd8LuGN1p7xh",
  "key14": "51XBAJgFzzX5Jg4ATAo2qPbL4tTmRr6Rds1vJP3zTGy2sts5uaNzxXdrtnZb5aipDLsfTkHKYNqSjZihn1sPae3k",
  "key15": "3X2w9mimCRqGPX9m9u7iwVsQ8Pywavwq2BtQkCoBUQASLc9tgYSJqrtLcw49MkWJotZDeRgdTgxELfUB5UF98DED",
  "key16": "2QeduCYY4xyJj1fkszyZj4HbYDeJiiDc3hQxjB4jsZtiu86mRthGqnfuV62GuaHXGYspCSoc3DRM12sAy4SQNFS8",
  "key17": "3cxyfxZXQwqh6YwGqhRcYSTZ2PnQ1ibZ9TdhjNJaJv1XdwiQBUiwVyQ2mhz8GiiKLhoo6np7Lro2ZjwLzH2t2f1w",
  "key18": "35hCDmRyF5MfX2jiEn861hPUh1oLRWN5XYHNkDpV4HeQ8wqvrkRMwytaXFUmzHQgSykR5EuwPDreihBpp5kEVzPw",
  "key19": "2Ko4ahooo4FA8VcnrefL2r97TJxK5TD7D8VxDUSMeZCMjYzkkggxrn3361G5pxm1SGSyt7mvKvhQkuomZLidMNcs",
  "key20": "g3rUdwfHFmi3aWmvnxKaBPu54mzdYyth6tN7brN5kf9Z1UGZHSN5AVig2hCNFLs5EX3Ddmhmw22WRKfUarYxQXX",
  "key21": "26YdQq28TGWWwTPdDg9XbihcQfJ9DKd3rK18wsDxy2ywSGCf1tE8J8f2MM2u2nrbauFGbpGako2hrNjB5kN3tyGv",
  "key22": "5a7cMGuV5piJdughNBt1C18XZnb33SqDzqeNtN3Q9m5U5Mz1HQDundGpqbXoVZqB1M8t3wdrjsMP4GLhw9Epnf84",
  "key23": "53owmVh4bUrnvhLjcQm45VwnwwKKbimfPEoj9oqx2LgskUvUiAvUzbmhzETbxzDY5hny7MLAy3awxd3TU8fP23ZW",
  "key24": "3ctQ4jpEnLVkChhMe4AMaQb2tDEePHCRwh4uuQjxBRJ7AWB6ARVsUQVESYaF332pD4xqsU77LpDPUyK4DHyzZKoy",
  "key25": "4D7yBvumTcoE5Kvsa7usAaFmVhq1iXybzSBLqMeDHykxA6rbnPvowJepA45WvpDhriioo6E9t2tp8y8M3VmV1nzt",
  "key26": "4nuAx4Th1ZFGdtkV3VZns1RCttnSSF79Jn5ComCd9anyHcvVoQsd7jDJVca4aGWUW57284dgH3rGuwpqAkshuCBv"
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

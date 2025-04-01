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
    "3WdP5MBVERUKKQ9NkrwSEwyUmW8k7gVVLMzFc5XhH3DTV2Ktv5L5fTY74Vw1Wn9wdrdZD83NbHZE4rtWTyc9LfTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3DoLUvg8gaG2hRys9cFZZQ2nobMrKzKNi3an9GJRuQPRSvGQJHT6NRVTqsF1Sy8mYrKfRtQ5EV88UXtn417qw5",
  "key1": "3eRm76ztwViotBTri3ytEgKpi1p25C76idEpF77YSqpXE9XZKThHihNApqcNdWWo4RtQhVF4wx27jnMuQ3vnQCfX",
  "key2": "2KgRHeAQLPph4zfs1HMXxfrA53wbtQrKCGZuW477k5fzcgMTwvRwbkXwEyKAhokENrjCrW3oZMdvKKR3Z8E7FHvp",
  "key3": "4akqgRyDFfvWkR6SHFMu7NNmfTqGsyuJzzAav5a8DfemfUZgo8s5gearwPCPgXzAdhVFArG1jkmXD4ua5NX8R4aJ",
  "key4": "4VpsXXMmJg3hsQkPebePRm5eBa98V94xkaMnbB1igR28gBRbjmgNbw2brHwMeFVJ52Q4d7P1vSUjMcnFT7AM74hc",
  "key5": "4ThHaPd3ndQTAQguLNsDsvDNpf1S9s6kCbg8RgXGc2wQq8dawyBzGXgR3MKrfVbZ6EtqEYJ1XS24fn2Hz4wiDC7s",
  "key6": "ZnbrexvrP85874JT5j6kjzubcRteTSCm8GbEqWTDj1nq4vJWbRc14THDWeKj422Bxt3P8tEHQQKSU8Uda6R889W",
  "key7": "2ZZVMrJeNBj3TFAbTtuL3JtsN8LMgDDV85T9wScJ9pqSJGwXnXxAHXzBM3aniZQUVKkYmg35qvjd1HNdCtHQPAk6",
  "key8": "3v1gYVphdCNeF8hpKwm7VbcccoSqZGgXJg5a3aMAvsvdubSNjXYxHqQiDAZSpC9c98gLueuyYnjLJZ2gcjuHoYdd",
  "key9": "3y92nEcopxcURCT43UNB97EB7qxw5wzcSzbo9SKgZCU6GyA3c6MpuuB7b918ypxZesynG5sDeWEH5ypEJeGLz92E",
  "key10": "5mzduwJQ3Vx597DZRw5kd9Mp3cT724tBFANcCCEjR9hQWLxforPJpLm1xYL6foSsmkoZme3b43bjfN3YanMsX4Db",
  "key11": "5LYuvo1f34XhUbqqRTVQb3MWWxfA4HLqo6y6xsy46EiiMMTke3LHdn6gKH19MWQmzfqtpoAZAcd4tjcQCPPemtHC",
  "key12": "4ndTGXAA4ycB9XxFTrAyLL6LzU6WfwfLE8bbebUSG4BhQmB4wg37Q63aNLAXPeBN48ahvaup5FdEfq2kjmPzafZx",
  "key13": "2QZuUjyY8pRdxTbaqvFMRPVPdoMGN4wBNWV2yJPh7D66JafhyvWBGzCpVwLH41cvYa8NE2DVAtspdKGGLw9JpiyZ",
  "key14": "4yzh2A2KqxPRuqQbhpb9WS3iCdH2kvw8CdiFVVyHabtbEzPfHWy85djnT7LYzKyNjT4xVd5uwMXtDhx4uqd5mdW1",
  "key15": "43gFwGwE4Pdn82bzUhtjn7HkZujirhZJhXBCwfirKEYoA5H7AEH5MqtYDskxfKpvcZqVYyrDF2St5k4vodQQve8n",
  "key16": "KbFKSnNyyNBQ388b6ch4mVAGe2m5oRX1V2XL7Z9LGrLGifGjMdMrDLRyo3uQSuhB7wE9aNi8LcApnGXkWNMDWNw",
  "key17": "24UJyA95qxoNSaHvf47RgrMjsfh6SE5hSFcapmNjfQrSrhSVSjwdnE2HsXYvhmLvFPAVr5eWyyDrjmvUru7AK1iE",
  "key18": "4BcxWsxLexoHjfS8moHQajhCNq2U2UdGkXekmznz4V7ERQzBTZkBMapTTMytSkZToT4LwGknBdtoeVDDsMzGbNJh",
  "key19": "3FgRaPDCepGKsE5NCNvQFgHYaGpejrqYqB2gooN1qwwFBXCGhsGtjYpDP2WV9MtqFWf3NAjCs8aER9ML1vcmK9Lk",
  "key20": "4EdVZvTyag2m4ymKhm49RM7gU9S2xjv2hdnywX16qZGV3dedctRVqczK8YwpbpDVkPiW4K6MENLfvnxsQ2okabFV",
  "key21": "fjg2ff5qir6uJydmUT5AMbm8FPanCCSj5z7MTSMnBPAhzNYauPRwtow4r5tBTHzPVCMxLHZCwKw5crt2QYhnFT4",
  "key22": "UtjDmt6G9KtGN7hKZn16isbMEGepNFhZ2xCni1rcaNZNWCZ1FjjZ8otLXK8nWoJUBF4gycrLmrsscaRfBRp63Yf",
  "key23": "DnnujrZRavgJiF77R9rhMJ1quW7LLTGQ5qy4gAcUxCty2zjqa5n9hqMBMXX8NvgpQ6q7feF32sSTKQD1nXg4HP2",
  "key24": "4XZnzuuDm611b8gyztig3upAMXYtK1gJSRXBxkvahmkZRhbKYrsuiYAKqa9Trqtw19JTLRbkNXjsk4vA6YWi72TM",
  "key25": "QSYAPWCbnW1Jw2zkYGY6eDLTWBE5yDeGMkQyUoUaeHpactKCQm1g2Eys7Dhc25gFvrU3VmMubzLymK1GSuEShtr",
  "key26": "ZWzCYMK3baVjtXikQavBHnAdZeBKmEb4Brk6iVGrQy51CJDz9diYbytwaLTD3ec6Abm5YqZEnS2Y4zmEo5GezKH",
  "key27": "29WajEsFxu5G89kGX7xMCjmVV7ziGp7Tqc1fW3hFKhb5VoZNahMtsffdMsFpvEDjT1Py44grbf3B8RguPfazpedS",
  "key28": "5fq3HjxWTJb7a4ZZhQj7vVVU2uL9ixwtNgG8YTpQcj9BWs8gfvuR6VVSMq18WzcdTJ1jRx2R3mRFGRXH6xh8ojEX"
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

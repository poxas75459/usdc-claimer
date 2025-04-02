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
    "4CpCtPsV9QJ3j8BJXTsZFby2qzvFJMmvm81ZqUkxqHtXds2cCbwjZoEz6jb3WKv4kzggUj3DfGuH2c64eDT7qdAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqyU1RtztZvaPdECH91QTFRUtz9W5wDfkVKtTtHveHmSuVX71orK5p8qKbD9h7vQ1c49CeW6xFYJjhhsfGmt9RJ",
  "key1": "31RL6JHSzc1H29yixaKDJdyXJoT6Wu2iubuFyW7RtPdkMFSH3HaKp24tjQzDuvtqTDKnWRrchX7K5gysrFtuKds5",
  "key2": "4qUa2yreK2YD3zbUq1yaG6V5B1osU5bk49nRZTfMaFxh7SPpfHAfMQ2Nr4qRidiFCgaPk24g5CjMbmTAYn31yTet",
  "key3": "3NqWb9UqV2epPVhDBNFCAQ1ee7xjwp4Pf4MUEPr5EC36SAnDKBXqCAZ9XdiAcKGuRzKpdejGAVfH4YtJgMhaz5PJ",
  "key4": "4k2nCr5hsHXwTw8sQJAo5dgb8LdcFdHuNMsJGsCPujdNKbw2CDLGNXvaMp1Z3TbqW9Y5NFqcJg7jUsSv9ng7P7gb",
  "key5": "3RMPKYVyziEtK2jwTnDqWrs6BRSRhfFTiJpWUVDXhcXiAgHnAhknoWsHbBGXZMSNZLQM8wZP9z89xjgLffrTPs3",
  "key6": "NN6B4pXPdz7VXEgxA8HzceCFg23rGyxgnFq8SsLkk15J1iu3dFAErZUsH3KP9KS4ur9NDoJzT1DSsQMYszLDSeS",
  "key7": "3j3BowAkeRBGNmQriiJagRPWf3kZRjqsWxZpxKMK88DUQDxb3PNvpWtkBDphmzRgyHSh6z4aP5EF9axhjsDBa358",
  "key8": "3rPuh4P4xpBQUEgHuqWBWTqUEwgiWSURgeZg6p1N4aimHUXkrv2Hgxr7cdeBU3eGuCjHkLxssficmnLzSwmwPmtF",
  "key9": "4e6QMLunjKxyN2TQHWD2YZbg8yDPBCyS66ih3wePiVyVjRddAAmBUL6LkcXC5Pfvb42mRrcWtL6X2V6aH8wjNZCs",
  "key10": "2yT3dVo4MTYfhzuunaYRj7DH2fGxFp2Qrxby9jxf7eGyNMyKAfwK8KZGieuNurFsiTajKbnKXkG9mcetxWEseDHy",
  "key11": "D5oi8WuW3jB7uhn6s96Xw5KKXW7VQ8avEKbfJBFxiQqdJwAYNS2Hn2KQAtyG5BjwcMzHzRTBcfTPVK2tZb4kCLL",
  "key12": "zYH9xAmmvekxwpGmThJTVYYY61ohZRmejDQKaYW1EcssetbNKY8GXH3L8sBchMAX2v1s6uikbdHPVJnbgMMxuZv",
  "key13": "5pRTDfhzbEecyuvSLQ6JRGBU4kuWvqo3JnaRewjvCy8S1rHvdbE4KDJfvgt2Tq4V5PM57Q8eD9M2Aukbn2SEZmfA",
  "key14": "39P7znVzmEpop5ysid59Cec5jNPxZdjyBT5BzWMRw9C1UVWKk3144GGXoFJBATAoZmjHhwoaXewWrrqciNVSFHT2",
  "key15": "22Ai1DQfmBfJHsvRiriA1RmUGGfVTCtLHx5knJRoiZS1B5X8CqQbuiQ2ZzgPyLbPLLfqE9VNmkDwUVJriTY4ojsZ",
  "key16": "5jcq5p5fQ9JWea1Qb4eCaaBEaKXge1N264CW8TWy86dnRAnYdMFPasZc3jJGCGN6WmKa7QFa9NdxEEVaZcs8e4MM",
  "key17": "jZs12KYhVo2Ex1nDpvuQQT6S4f5WcWfkGLy8MDbnV9QriVov3Ls2Dj1F6gRSoNs3pZ3h8t6LjqBmWtH3PKbUnhs",
  "key18": "towZ9P9S2966e9qX2qq4QQCXLpTqhA626JDXAGRKCJiTTftm2WYcVUN274ACwU8egbhZCHDaMjpbh85Gm7ttqyr",
  "key19": "3tuHSby7uBhjupvuvshAm6tsupF266KuEwQdTyb4r4FNk4X2yue7nVCdgGJEnvqiTBQQSPgwSbDxAMmiLmJhjYea",
  "key20": "ZJHE5ugGGTTtq5URpg5kDgVEtBAbKWUN8zW9gZYH4r7ZhTqCVPjdD15uwFqdtuLhavLTQCtt6XWYc4X428d7zWG",
  "key21": "3cg4FEh1VDJAar1aoF2j3JUV2mhoNn5LGpDLhpdZLgBG6NPhFP4wej3xUhjgAdrdowgSXqyPfYNt2r1oEQ8qeZRN",
  "key22": "5ePpjoq9TrWSamoxhV3nSuimj3e5Gq1wjdEg6XeUU1t7HBVp4tDZ3HycLeAJVWqEZR4vKm2DBDxy8zCWwTa4kaWM",
  "key23": "4jTTcfZeNYrntXKYstL9p1JMvXgzUgpEPYp3Y8i3jFjdc2sC7k2jECwvYzdg88868nRLi8XnYnrTTdCqsvhvqsj5",
  "key24": "5ZjxcdrLbVy5WfoWLcR38eFPhf3eJqWxw7VDQNQ2FhdRwfAQzFhMstUsdZyRKwWUv8KepEdnhPcXtaN9BS1vtoYU",
  "key25": "59zYsqxcQutSwnnfiQsiyLYzoaHRpxcEBaDG7vc8PrFCv4nG7kHvtHsDWdpY8MyoopTR5kTwWjA7r7xTRvqWedFr",
  "key26": "2YpxcsZRTZx745wFtexBaLd5MLRufYpnR76eT8tkk4rtYwVH1m5oReP7YXDFM5t25fncFSkkMDbFTZwyYpLy4YcD",
  "key27": "49kPxUkcQoJmyYckqzuc13r31GhqUG6qm5Yqs8AcedLgFDUQKZbrs44CNvAe46og1z3sYvYR8Lj1ZybmC668qWSr",
  "key28": "WXamzKQWJTRunuYxP6k465G5H6D1pPuNwYf3z8YLTK61FuwxtCPCYWgSWqntHdHphEsDJpgqf6EKUbqY3aMhpQM",
  "key29": "5BiVp6jKuVpywT2Dsrd8ZqFDNVaspcwzm6v1vfQRgguN3gN5h6Ha6iwTjh3ti4fcBYabpboER7tcGRVjMuyDLpP8"
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

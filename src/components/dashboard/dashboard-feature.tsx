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
    "2QY3tekBECBDRHqjaTt4hqrb3ZMSjmizMSPSyDvLEkkcEJ9J9BB4czKbcKEGSYpaCDwYFNRWR4xcEuyfhdM18Fv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RK44Qc2KNYdZuVm2iiUbDiwpAXd5f1xzxkLrcAhW3eCnQ7F8QgSfQAAQWngtpBqJP6HUAawbznbFsiQQi63KKTQ",
  "key1": "3BNdo8Jh2W6RMfB8dAitT5pJDBTD5poVj65WMHeYvrqktPrMyxcTkD8ZsxtAEtfTbv6LnQvV9WVhEA2yorSwqzjt",
  "key2": "2FzUk2sf38dNUkdCLdcvCJQh4sNhRaQ7XruiAETfaFFsZtu8Z7CGVkvqZDdoBgMAz56ZhtAXo2MQzitkpNx4stz8",
  "key3": "3gmPaAxPiqB7bLtTxtXSuc9TkSKB1xbWv46NFYuxx1WNnpAa5h8REs52cJ33dgcoDF9GuAMivYFtE7nXSzzWd4zJ",
  "key4": "5ZcFza1W5fZuXqi9fERtuU3xNxhWwTMAkK3akB9XhMbL9tbCr1xGGMEZmeNzABWFiCP6eR3rMPhNcma1GJmfwgBU",
  "key5": "2KH63ouwy4yLYLeExX3vyAoxgBxgNNyawFgHrQPjKR3iexi3XgBV1t8vXHtSSVEmRfDykgvVuT49fj27hGGP29vr",
  "key6": "5prTYN5kvV2uXVwcgTza5fd7ishUUBBsTnVhfaHSq4sgxibsEEzG6VsEavDrEwpKR8V4esC2BtmHJh8bHtyfUKM4",
  "key7": "3KXgapwJ288HqVM2qSFTTpf7Ebw2MT6w5eVD1gjZZAE31rrCtqKW2pAXCY1JnWKxVRWYiNPHbwjw6uy2HTdtg4Lz",
  "key8": "G7m7NiXTDo2Du7NpjLz9UisMB81ErLDc7odgAxZJbcR9fQkt6Te9hf7XzWgP2M7GWDq2msT2i9XPiq6NxToXiyU",
  "key9": "TDtiooQNosAXURNPyhfS2zyVVbCwouF2WcgMCiQ92fxc5baxpqBYCWYEddgxw9PprGqGggY4DFk3or81XGCV4J4",
  "key10": "4UgYSV1ikHB7NNGFn9N7sWonvg96SE9XvaT6FmobXtupcWTYUs75ni5UXZYFd17ZxbZNbnYVAjgPuy8gYS2syHjx",
  "key11": "5BVbNMGdfdxCTP3KxqbnwvMxqwpMYxjVTtv4HiR61x7uUQnKBekZHdun1z2s7HqpmLRchenHQwUXfnDhiFoH6fXU",
  "key12": "5bkkiyjyPbbjnHt4JnToPoG8suZqZnNV9DymroJCrPcT2d4nZ9YhiDh6JgXgLGnQMubPX9NsKjp913VFWM16qfif",
  "key13": "66bFhF3LhcCCFSgtEWP4QpRCr6fGkH96jbVgr5VLvwF8cJG9juc6eXMRfc2NzC1eENBBm53Fisi9ymwh67PS2cWS",
  "key14": "4a7y5XhZ31eT9fkFg9dnAUWoMWonPxRVKkyng6H64thmG46CFDgHFqPvrRtfumHTqYNEpsLTwakbsGp119c5dZGb",
  "key15": "3CkvoyvRCxNi9eSDLMDo5YGSFBQo8fGuxfrw6KC12aKXtpLwYqQrcTsum4nnxXvFokrRwxqU3EatKjTTMfDPrs3z",
  "key16": "5RnamttEWssLPGUPRapvuUMHsTadpYo9HwN3D27Au5hUD1XPfs9TUbkz6kyFL2GT4bnnjunSMusyHFLZUKwtjYeM",
  "key17": "5UdcewKQ1cnhisLj7n5Q6Rp3eJGEffJLGce8HNTzGJyntwEqcA2hCMuWrPEYzQkWtECr6FyW6mLBQS4Ta7sHjjG",
  "key18": "c2EPZXEiaE49pffiB1KwfbUDJ5kGw5q3ykZouUpTNNN1m62ijzH1kPUvPdL16GqCuMumDRv6K1cB5vKoKAWoask",
  "key19": "5GjuhS3X8ZMFWJXMFpmK8hnEpYUJdkhtXWWAL5L4Rs54FhZp8iXs3EWYa4hDNxCs2s2kosLTmPDcxdzpBbNxYnhJ",
  "key20": "23P4USoFZtrApeA7NAXyXoTMof3fpkA726QZaaLLpktG795m3ezjpMT421Cm44sgVwr827d9fFJRuqdQXx1huFah",
  "key21": "2ycFoxzATDQNviU8dAyzCBWQQNHP4DkNU9GNuRYm1DzX1zAuqu9CL3TZK4EDUmiuTuib3FqSJQALXEYhsvnbWGt8",
  "key22": "4KFmzhsoowZmTdFgrHZgQ7AbcYC1LkpPH2RQP9dFKFz1Xci2pwB5GiwpYqLhg4ogs59AEEx2aVxomn3SUNAjHtBd",
  "key23": "4AboMVwfLcfHQJ5mP9fyrKFTtqP63t7pu1719xJ7x9CYnyQWrzhT3KcZ6NBm1Cc3vvZboumoy1wNSkfrqqsDHEvx",
  "key24": "4D5HHZnaLiZKvTcKHWcX2rFGvEeWnQKm8WwgR24jq82NZ3xZkkYSxU48VNw4wF255EFAPd4avVHfLMHBvCHh6aZc",
  "key25": "3z2Asxt4poiGVPSVjc8pfrp1NW2QTxKVuRyvsgcdr2ZKc2mumJ7nQeUdYn7b1sxSyRZ5zGvQbf3Zat6o3n3A8Pra",
  "key26": "k9U7NnQzpotsw8hQxdHnFzdmcAQ8NJww46ndGbhVfHAxHGhByXGDHkwQWmZqxHdupzKzX5yvT42TRxAZW5avZv5",
  "key27": "2Agr51w5YjMxQsZsqigiDE45aXmbWVC7Z6o9FUHBEwU4SxGexqg5U9t6ejE4EAiduiKJjG2VnviE1ABJGeJngDgD",
  "key28": "CdPqNK3bQvUBxi1KWqZ2vDZA7LGyFk18JRpxyi3TPUtXwBbUrCgShwe2wqVUBjvzAs6XUraAmEdKL9m3qzx2q5z",
  "key29": "5apbMkrMHRYeV5C2yyzopvNZyExHUBpFFgQNUjPzFjzVkYgSDm55nx3Duh5dLGo5pUSmT62HgrM3WrbvQuBhLko5",
  "key30": "529cRguRk2tEZvACnxqHBAob3Hef8ay9dwsZRyus5yD7151vqnqFLqFeULiFtJnpWVWwV9MZCFsJHFsr6xxzt3sb",
  "key31": "2fVLyjT4GkdzKL4mYU36Xoz9uPHMDEMBEDHX79ExmRVM8cUzcyiRRACMHy3MYsx3M2TDQYv1NNngh2A7kthJTXdc",
  "key32": "4cvUaQDgs71Ye1StPiMcC3eTyPnr6ucTDikNxh7M83gPcmDPz7KgS2hN6wQexVXrVq97Yqkng15EYc7xZSdsqtCK",
  "key33": "2mnZS5Ns73gjPfVah2KJowS6edK7wGPQqUYiXjNRRSpcdg6gmtAEN3dvhEeYFhXST1KnvyXNxwLHMZEz4ayrb6uY",
  "key34": "24Pv9TUeuitYB6xVorVAuW6zhN65i1eePZ6Cz7d4232xndioJsW2YzHMM6E2ZptMyMFrsiq4mqrYdQoCggBaseLE"
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

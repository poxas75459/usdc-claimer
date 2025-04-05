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
    "5WvVxkyVdqbDpBn26iionSF5BK6eY7F6nXJVHDjsrCSa3qW5o2rPGCJVp7MZDkgbrv5PimcdAAuYE2bga85cNmPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vkgrM7H3ZcxvNXKyGmLixYrdmPN3zkxqcB1pe5Jd2GRKmJpw1S1tUhQLq4fHqf8PgRV2fYQUMGFaWT7HHVuRaM",
  "key1": "5ENkM3yoRQ3JHYxkAj62hF5UqkD29VDGoyyKSbeCvx2tMNYQzB2cnRaDQPiDHKX4eMnFLfvcW1xMMLFnrMbZALHB",
  "key2": "yWrYsdDK2rUcunPod1VN6NpjmzouXyTFsSmu6bsvY85DaoKAc2wWVuiF3j9JRtad1Y2bLo2SWdJGpTcdeqFrJQS",
  "key3": "2wLZvBYVTgKaRdP3WYBLB3QgFruXT9jZGibuh4DtLHWMcXdVQgyEn2Y9CLMuJ4zYrEZKHr4ow6zjiiQGjCrLJgkK",
  "key4": "56JNHHABNCxLAQYSZJcuEMrD5tBJEcuJpS2b8jj6jyyhzZVBun4Pe2QXgkLczonCxGEnuiXPtYUYzYgigWHQvs4W",
  "key5": "5D81UkYDqh8K2bEgvFcoYViAwsG1LBH6o3Xih7Xwf3pF4TgHbRT1dK5mfnenAyMXXLL214DkMBJXSHAVWhvxvyPu",
  "key6": "2WUCTKqphaU84RW6futQf9nJbbAK8f4amZYFikWX3wVWjigUVHCT3gQXiyQHKbMb236B6fvWEpPyzgguiT9XZpji",
  "key7": "5L4Rwg5FuKxr7NW7UJnPdkgFGjQ2jAUjB2q3f7pobqVLpjnAZ4LcnVaLM3NDHiTF26x1dYwaUb6e8n8cjfw8LPi1",
  "key8": "2kDErQeTCZEosQaW3QgqBkhcSNCpj4GeZSPZx14zvhsAqarT8FZpMTcszzeG81NzgP8S3YXpzC76wNdQDPucyniH",
  "key9": "juXVpgZXmez5A9dYaUBwM2d167RQU25peE5w8YJsfjJoHiWynhgDfwMCdqFuLhcmLC3p2p44pJBP6KSNF3gYaUt",
  "key10": "5NDqV8RdH9b8rAhbSoqwJimky8wXk4RQ3NZc1pfvXBtDhFRNQiPumDgiKVE5Mx27dmbbZv2xJNmKdRze8Xg7vfqM",
  "key11": "267tfAX7GQdaC4RUb8T34ECdpD2j2bPsrSdgR4GSsquLK6rg2DRrJXEPgntL1ipyKcqRTh6QnmyrACbsCUySfPDj",
  "key12": "3VfmX4nEgrvxNgzjydNh7pf3F3QBuskvtgSNYybXStVqTSFJHKLNsapZKxopHFzAcdcKwPbCUpvXBAo9AuXheJGD",
  "key13": "3Jh3ah96zPJqqs9v86HmH88JNxm7rkJMqYWMXV58pmwJZPeBiqnXXvXMPC96PC286WeTgDcEnGvZ6NFs1qnP4yFS",
  "key14": "5aEPoNEUpnWW93svipw2WWfJrKogbuG9W8X95FGs344XGHaj3jNWqf7KGtZ8PT53UsSJrKR4unviL5P97pE9zTbr",
  "key15": "2wAb3GP8UKkcHffcG9EZ5MEWP6BXjqzpoWgVsqHehTkhtrcXUG7Pu7X1t7b79yyiLeQ6RumGPjGr2WfwzZtzYgpC",
  "key16": "23QEWgp3NTyvaHYSVzTzy4zXvwANivcz4jiinUP6mx8wQtJUM8LocacdSVKR77tXB6FXyiv2fjmKyrVzkLAFQcpR",
  "key17": "32HGa8XbBzaVQeRig2HhNhsA5dTwUMiEgMvNVafzFknZC8s9NMUqKaq7UNhrwKckbjjqdTLnGfmmJ45topfWcj5Z",
  "key18": "hNFxRR6TPE26ZEQw33DBummRnT5TVu6U7scWVWavvwmkxq7FCHaQomQzFgy6AbocZULz1EJ5dtDEYhtJiG5jXgR",
  "key19": "3afhUoGYijVATLc8BUCDJgW8iP6Ze1sfK3d1BoERA1rkBU8gX7etVzKfTWoeueLazMpa7sxTL8kVupdpvaWGTvGh",
  "key20": "5QsStUbMP5Dv6dUNfPswRKyiR37H6CFiMJe9J7xBqy72PQPaiCZRxzmvySxhCNhAuFF9yz66ZNfCjGWcWv743fNT",
  "key21": "4Zf68DEkdPK9wB7Af7qNkHFnezJx2tHgzMFGvV73SjU8mZYpCxN6UCi1PQSEwpnkw7crdS1uJYNgNrE7r8JaVDDp",
  "key22": "33JPEuTzXe2o8i1fzd9cLPV4ggDJkewixjfqTLKaTWLSPcoHtNrzn65G5odNFzH4bQFzeGGbFRccEVSoeJQHRM4r",
  "key23": "FXFqM6TsxtZk8uMeXQqeQ1ymnqeVEsuNL3nrpet9RwM14eZ1q51rRy58kvngWSnr8vDrL8dDdgxTfjxJsN8FKXw",
  "key24": "NZdy4Pb8upCrZUb1rQ8eZZkkDN2H2AyN9qY8q6PFGVP3eVfRVyvdqyw69zWMQgcyypWmWxPdtC1LJi5kRHVg3r7",
  "key25": "5otjKoDKJAeMPZSUmKj5tpetdYSySycwjFyVbUYUvGprrcjvW7qBBfJKp3sL3pu1zAat476VQDFXTUKYuTSnsqdD"
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

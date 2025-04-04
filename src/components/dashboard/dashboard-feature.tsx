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
    "RtWsNio1qwXeaDrTLbG3YpdE1kTMiKvWBEYLYngvzvKVdzcU9aKGCUT1iwg3mQwxKz8DtTLLfWuUribHeTyNfY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iks91j6kSy54vGiy1G113jZjUuM3Aw1ySaLsjwZGFokLxRaJo3pEq3zeWHA6dCeTmQmcor9V9x9ofGhza7UTxez",
  "key1": "Zh3PDwRhZYSKe1oDG7oFpHGzKYqngknrtDMcv7WSfWXMamDVwe1G9cpgT7eTEsXfzu2HMtsUkqUoTRSQdzwheWq",
  "key2": "3g6o2JAjT8npGnBoYZL1PzE6nLKYvmPhpErXuCX3Q2bVPuoU41NFNeLnUvzj2uD9MkJMvQLhi4RG5UcQRXdH1NkE",
  "key3": "26xmZuc9q8oqcnB8zAFPP6YyQK5JFx1tcxUdRfxoVw6Mh2S4g2vZAxA8zHwknVNTdCyr45SeyMRJGRAVxmten7LQ",
  "key4": "51o9FeSTrnCXbGz8URARHFUgiND3A9QhJ63BFUw3JL58NJGpdeSTyzn2udY1ku5gXaoixyJYxP6vbEQntXJpRnLW",
  "key5": "2TeGxWHbpFL6nieEkLDnmqmQ7kzuddh6UVgwyZ3pHsxzTPeV27o5SVcseTyt5u52pUDca7fz1NnbEozKasdTNRSH",
  "key6": "2UmMhDs2n1iouKPK6ikZ8qw1u9P6p7YDMD3p1RaP4JbmGG1XTQp7oA6XMRRrJKNpLoZfjUTjv8fkbw2HtGrX1xTE",
  "key7": "ACJ4ULacKKfj9SLghyxE1nJGirkztWwA9Cd6mWBE4K7Ug2ZL4VsGh38GcVMjbE8WQvBqMp18UvoCRw9GRcGPg2F",
  "key8": "dQNxFfiKuESL5tFWxGujD9nQsrVDevTnzhaU4RAx3VbRW4LXq4ZNyXqWckzHeimCEMYJJybxDSbGt6L2nMjJGPU",
  "key9": "4QBRbmcoFJ3YdUXFrd4o6C15RD15YwnZifgsMdYX2pXvbxbA8SF1qzUbZNzUSBhaXBN3bhgCMQE4JXTE8mBUiiGS",
  "key10": "KjdmzvMU5KehXjvvBiGey19VjZWgTUqhnTKTw1Uaqb9pa592gNQqV8guqZQAh1cdLePi9s4XwTtQeQkFjFvnjhg",
  "key11": "2QyxzwpL6bA1K5kGopFZTLkekgxQjcnqgMojR1eJ8czFzPtC3CJCRPV6peNch4qgeRiFSm4N9KNajrZVpGkd4TQg",
  "key12": "ijo4A9tmNvaQQmnqXp8NZGkei3W3G7MhKSn885ZwSDtq3hhzUJJhuSVNfaMx7ppPmc1gV51iWXcJnjenwCSs1yZ",
  "key13": "2t7biQg5iQCqgx8B87YhEd1AF36SfoKuq3v6RLemWUHX5sBBfpR73u4HM1F7DBDM3b1ndYszUAguPhp6iT3DBEwR",
  "key14": "66XpsUxfTkLq4VhBBYJaH5VtLDHBLY1XbFNF7UJjpR9Y6dzfUhxsEHgKU5tz8PuKDWjB4UrS6HNVP4EMscsykuMT",
  "key15": "3yHKc119zTMnggtsR3xh5FLx3qVNv98JcPUmCX4jB58eMkSvpTe2xoPv4Gt4Tni15JeWmgxsndWvefzUiqWCGh5f",
  "key16": "2ets1bAhveUoWAUR41wQJNA5EpqpycM41kx5MWhR3a3SxZWjjesCYcJfkF7zT2HwKH1s1yXHpHQ6cfHUax4UTv78",
  "key17": "4aA6X547p1ozdKwnMeRD6TrBc1dYHU3DxqEbKCKspix5zjJVp6fGEvmPKmBCan8gYYq2PJDreDDhncZkh3twrRYu",
  "key18": "2aQFtthHfsycueJkc975sAEsE6sLJGW65ZwwDDKVxrWQz2xRQMYqX8PnZjdeR2ZVWXcC2k89hwKWnmpXJ9MvQ1px",
  "key19": "3cwaki83ejfWaMaWEBjfvw2dcqkdoMUH8cmmdQTUXKWYe5Wc2ct9GjJrMxi6LHrgHxpeNjy8qnLMqDqnUpeDUtZ7",
  "key20": "2Xd3tDkaByjoEJjbV9XUXgHu9Mdc9TyZH1gGLJQra8Bnm6EVwvQ2Ndt2E33YvPRCTgimmMvkBbkNBavR5GypBPot",
  "key21": "3Z9wqq7PZwa8koJoapmhLZVgV91tgAwp3UxN1YMRuu1zWLkYzg5KB9VAkmwwSSrGuF4zv754TZxV19F29PhoKgpb",
  "key22": "5SD2AM8VR9V9BqnnYNUTfSRcHVryj68Wt6JdjtTuATKEaQXhpXvu5ECxDXA79n7EoAYd1a5uSgt8ffyufK923EJQ",
  "key23": "3XZ6TPP9sEiJUi2XoN5xnNoutiQcXryvxRQx7EB5j5ArQNhCBrQWLEpucHXGkAxMpyw5N4EeN7pJ3JZZSoc3ukKd",
  "key24": "3HouvXAwaBwPdFiem2m53K69TtH2X9TCevRkJFKEJvvN5TaiUCxDSgBvJCRmxKwC7vjtBdKcJsX75AEZhJqfi6ex",
  "key25": "49tkFWwEVkXLi5obpAYD93egJAsEGJBf31HzDWhns5Cmn8d7ZE3nXjhJy7PoQ9ERsDBjj5PGXNcMszddfk2b4JQ2",
  "key26": "2Ww42HE25LrHK3HSJYB67THBkMZbQDEKxjyygQy586YrY9D6AXh5eksGfHsW1KjJ65Jbe5H6FvMbtMTvkJ1d6uxr",
  "key27": "3sHBAxJcaKVJeJMo9yonn7L8LcwbtGzntpJktHykJD6sUMtU3BAin4YbCsWrCB8mTQ9UyRnnzENREQ7LdmYYQJLc",
  "key28": "62JNHhoTi6j6hPgbre3HuiQ8QPZJpzxVKz74C1fKunexD73zLv9PkbpBkE4koG3xp6tqUx7vZJXd55GwfN2QZSED",
  "key29": "4dhRS5ouWsbdwkZaPSKo3ssYCgu9qR8UUcqApfWyH74pEYjTtw1uJjybfZV52FZBoWk36zJy3hksJb3PRxDU77fH",
  "key30": "2mGmP3UBEkYCq5GnF5MBZBnLGtQSp1QwXbFfYXCQHwmfpztiNi2NK5LeVtzHCmprnVu42sMpJUPQjj2udm7KVwA2",
  "key31": "ecq3mtj1uCvtnou1cBhPx7vx9b3k5i4XGwUwo5C8EqT4neTH3Wk7zz2ftffhCnMe7UdBDae2rw97KZZEdCvJ7hF",
  "key32": "3tV96JW1wtSgXQQAiTnkqay4LKd9pgyw53VMMHRCwF6weniRue4W294TTbNBWr2yoGPYWmEAw1sNTeu96jtcTzRf",
  "key33": "XGeqyxY7fVtWgSY4YAc9JbxASy8oeX5jpwvMS7wFy5Pt4oyct2D96yy1BtrcEYYyySWXijXDUeqKZ7iHvSrvVTp",
  "key34": "5Ua8xCcKxjfpBsvjownToskGw6f66AuZvzcWYbfFoNSZCkNspPcYFTXC3j2T9hbX9xj7WtcgHFFEaYEviib9v8YU",
  "key35": "2cgqkY2aNM9NRH3hwzLDUXTPJHQ82f8MYxaFHSv5ubaSMr3QAhJT1v4KWwnb2iraRcrp1CqmufXbEzPp62pa5Fhq",
  "key36": "5p7VofepnQhT2KTAkqSy5dM8tnruVp8mHV2y4A23EzV8zHiEJBopTfnFTh8yenddEsQptzAKPKWe3Xm9oLiHSjEs",
  "key37": "2PjXvTqMT8mGpwLWTeAqR1S56sX6R8EHgKHCc4pcjqCBaxdDSHJLGAUuNzpb6qyM8YKy1im3PNjPJbKDZzyCXqVU",
  "key38": "4pSCT1z4YXJvLc4bsA6oPtZKqB2FVqMpJXwsWL98UnN5iM4peDcEEgijwzAnhXkLfzF8CHs23zo3bV6QT3PySnkR",
  "key39": "2FPLjtLeZ7t3Dz7eoNcoZzn95K2YG1PyiQeYLNM8urWuSLKWn6CyBHncssmq1qN4J4QaXRgTkKEBQPtfPff3xvxn",
  "key40": "3trdsByz5kqnK1a7BvVAPvUpevtHTtpzJQB4qWHq3LMdDqXXfrP4enHC2sAkqwDUy9xQven2cQqMJ6muCCK8AxY3",
  "key41": "5d1qn25BViPJjXyX6ERqfqxUE73urwXcVubjm3Pr89QUF8RUD4W6bCRX2o1SQhMEZJv4g5Y3aYzBANhcz3RK2cWa",
  "key42": "35ySmDhwrPdLqLEfZeNvQBs7YLruye1rC1VKLUdfMWjgzuehe12sAo19He6UorBpH2Hvwakqgjk8Y9xrLLohTAHa",
  "key43": "bFauCbuBvrr37Nap7fbu8tARfDTFy6arv4BboG7cCZk9XbUkxGTBEN96irrX3pqXiPgiGTxiQ5yoS1jexCqPAk6",
  "key44": "5HZ7wQfhc6jDEbyhnK9vxJLeZ2x6UpSsaJSW29stbdfCLc628yAgBfHpMCRTw8GrUyyjUzcPrFkA7mGUr2Zr2SzV",
  "key45": "5M4FCouT4jwDYDQPqvcHZDzDSaQt7PmJiRLT9s2wwSFBWMqvVHyi1XC1VBXhq3Z8YjtYLArYVCyJf2jSvNYSvHR2",
  "key46": "2NZGxkVfkivQyZiv3c6CSRZDYJarzpXQ2vMGDqohHTbeJxNDv22iz98rkY7C8SXDx5PvFBccCRTqUNZdvAWcUGWn"
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

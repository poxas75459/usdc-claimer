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
    "4FBWNPkMiT1BHPTHwCwhHjT4dF527xhMHdJ1EiigwQzQs1L98v35Hi7fjCAPSJ9u9K9ftxAjriGdMZVb23b4VvsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYKRHHT4TutmHUg8kPJ6nQyZLw39JTNfeKrkzxQEjLiCz8nS8ycL8XnVjpyGoeEzAkMXhYfEgJPnggJ6x71CJfg",
  "key1": "4SgHjcADj9gs4ZQdpENGSsPfWuXymwNm4CktsiYBDvtBnq81zb2QQ7RWZF76RA81jXseqTmwnhWGWZr4g9f5qHGL",
  "key2": "3mY4NUPPCGis4zYX5ZqmeDazof5kTAduTKtMxSwPwniD1esM3tiKASoXnJeNBR8VanxhRAeStkRbKv2DUQvGFBJr",
  "key3": "2CXMSMPMZJAsuN54a6VW5iRZcyJazBPrYJEjqgMZJyWw94KK9yZH9MYBCHxJGTr6SrifSfWjjyHFggRsUvLDDAFK",
  "key4": "2KjAZDCn5PC2ZfNv9b43ZHQ2tJ56VrfKbc2pwUHNfTkoAfbHmQQTqVGK8nrmSS7NJkwsN3B6bgERtGNv1gAg1L7N",
  "key5": "36E9qGoxez8GKL7zoDKakyEQrAJ7mBVj5AXcm3VWU6o3BSLtTiwys2kxULZ41dbTJeLzPd31SaaWiZvAPhxTDVmw",
  "key6": "tih7asv5V812g2MqKeYEh1NEVnTXzWbP1A6JCP61yRbr7hAiDu2eXp1zifKTJn9DgzibEN3eaquVWxuHYGPffoU",
  "key7": "3t3BHCeGQCwytDqym7q1jbtAs8T4YVqpSH3HKXFq55kpgE72tkV8pxAhswPYmJn6X6TZrPfgtsWNGfZWvGedDEkg",
  "key8": "5E34ZR8KphoGrSXE7gqRuK8cZKkUPDFCrLkkQCDXCgjB8BZNruTLmJ1YwF8WRN1oPBP52KZzF6YzER4RA1c8F34g",
  "key9": "2TscpRCNMsBpsTd3DjTCM28Yr3eVfHWoqrSgdi9LR5JgBmy2gvhtvaHBHiW6UrdQ5CK1W3tKvegkYByxD2YBXHhs",
  "key10": "3xVB7bw4GJ2bHwCv6NUFGG8KvisUoX53iEC7VkzT8FEH9DRwJwKsksFVnQ2mLBw9pgtWdcW5WP8eBDHRGvpeLVBs",
  "key11": "47wwFRq8wHm6uyG7S7i883XJtRnqgsA17apwkjMjbWzr16UEDhdhW1A1HT4bKePrUEgs2NpYM1FKF4i5HFPud6aa",
  "key12": "36Uk79LLDz8b6tmTMHxyJmMRXZhsQTKkxEqDejWyUZ6x6mgavd8DCyZ6YQydzsDTogZraJEFZDAqCNnkvZqx56qK",
  "key13": "6185NwuoWwEDjA9hGMka3byTZMCnrR8vXj7omBPTTKQA7hdWzkxZmhKUJk5HkdY2qnegqRzoXhChrysBjiMJsSCT",
  "key14": "2FoKRxAv5zfb5zARDMBspz9ZRGRi4jswuwxznnfMkbAENiRVqFW6BoVmRrDnft1tK49zZq7ReTu4XiHViNHoKYaS",
  "key15": "3Q7Pvt5P1VKjnbR53cNP8TUvf8AWPhEg8oVwfH6ojQcM5tSsk3rUunwTUCaCpPGfQPa1rUEQpRserk31fpjafdHs",
  "key16": "3hcZTFXoNJPGi5Kdgv8UL2YePNxWgas3kTyXGpfponXCFUkgrvYhP89tpaDKzg8vHZfDievsHmHJPoXMLRXfSBvf",
  "key17": "5fXR1bgYYxGrFnn8DmqzPGbkLnXLL53somsifPv5uy22ygtH7LLMvECfW3CoXd6Q4yG9ZtRnU3dHTQLJr7NCkwgW",
  "key18": "2m9ubq4pMiNH9bPpNYstvdcDPGwhA2zo7Xo6m6kbvxBX71PxtypPiS1SxEKyG8S7bXZj6vSGMHfubavJSZ2gMTZH",
  "key19": "5GWnCK6dqfzDnEFvW7kHLGHFzPqwKVzyUrjCkfHTvKTVDJKkEzmqQV6hUQhUSNZAhcM633iUEe5LBLoFYyZ6KmHK",
  "key20": "53wfFNDK8hXUaeMh9YaEQcd2JYnRrhavH1TixYiX88CHXZuNmPTrnvgpJBfVt8fMY9Hd3Mv3eiuBeAXLQxuVN1hc",
  "key21": "3Rao33Mxniz6UMrYTD2WFrZit7d64rhk5oE35BeuC9gw4k4vgHJXnoBb22hKXAWdsQerXcRfav4mF9KvUa5mbSMY",
  "key22": "5vcPUNxAaBWwKLW5av4X5Zc8v8w6GHwDBsakJqSdrxzfQomVeiPyxPBYmrcAyxjbN4PYnLZwZumazKcgWWhmhUCv",
  "key23": "4puBS6eLcTWfduUEYc3bbVJEAHqT6XZdXKep5R3Q26atGHfx7ckqR7tiXXgphpWryPV4WGezhEjGN5o4X47xRWQF",
  "key24": "2hVTfnnavhmG8eALRCfNt9d2BogetNB4TmJDgDwUa4TUvJY8XgwnN2rDh5oyWB6gmiUmEFzJDVoVjwy294vKvGfY",
  "key25": "5oMpNpRizwNgcAi2zYfnyiqX9YKfm3VQnRM9NpqEEa4iBY7zazxb1RtE7Qw8SZeusA5NyTxM7FJcZVhMQ3NAupPE",
  "key26": "3gjYE8fA3imgykFGAPnKy7tdJ1xFaoVL8DvjoeZKnuzKfg2vCE2PeYqD4npGxY2aTPXKSPfEczXDE7cih7rCKgTH",
  "key27": "tm3WzeHdjDxEKTnBXPAJ1RNQFPnEiSdGjFfGXGMEo8s7DG9eSckjaH3bWawwBSPi6uS5HeQxHjmc6FNVLj49K7G",
  "key28": "5NRGzjFEVDyDFXPfeffc7TqJmkyEuAJfeWCf49Yzk8C6Eq1yoLg7Ff4ZsVeEjbrXKCJ6qXsVaaHrw3NZ46YQxd3x",
  "key29": "97yLsmuSxUHHdGdpavdTfYHVTVENzpgCF76MwJfiJgXKQwwbUFc4LbyqntEBCHzUoktKiZNRaXGg7mSAnVvC6rV",
  "key30": "4wpuFufmE7LiaBwDnVL2tS81ooydzXibScffFXm6MF4bMqXu6q8WsujLH9rMpEVN2sAZBA3JNSNG8RW7gKEuKix2",
  "key31": "4WXqXLykBjvniq3khV4TrpQzgYsKjXibgN9Rj9g7Yr4cnbfE3M9pdMtfTdhkzq5xMS29qwgJfhwNAXMRUYf18CiP"
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

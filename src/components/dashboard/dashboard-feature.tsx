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
    "5YYb6KWHgTwj4QA544dzPXexTu3UP2DK84vkF5kCBEDq7gG8QmARxF2sf9zT2a31DXmndWLCnAjeT7aAKVfrTcTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcRMYUW3VPJtRvAWduxagds7qNmMyebDszPGz8XR6LsxWKcEu8z8hAhKyrddHw73SkKAS5nheokphjuT97fK8A3",
  "key1": "5puW4TsU3WAgp5Vyp4avjJtNQEEnW78Z1U99rqQZ7nfWCQSELF7gQyqHzk2p8Xx4dEJZZNMLctTr49E7cfVsoGkr",
  "key2": "4rNCFyyVLdasQohV2RwLZvyjvVgFuANqkrMZzzS9yQ8odFJQLAK7CBGmTwn7e3eFXZ6p3GzMpRwLWvmbfx8zX7J7",
  "key3": "3EDwuPZEpGB9VJebrvdPxUiXEkmyUMfbEihcp5sz6UCpmPUnWRdnyAM2rLW6B8eZRSzMUs4Yfu959d5SzHibVh85",
  "key4": "47Vw4aWQDELQfRjAnHx1Pba8QnRM2X64gUYbdhfvojA2r5Tje3JncAdmd7EAA6jSUzvD2DtWvNuhDoxifJ5GFE75",
  "key5": "49wrTr6ZvjfJAf4q6UXmEJf4E3b92FHriLFFTrHRUUMQ8nCFzGuWnHeVkYKVmCkkxaiXuhNq3EpakiHwGgebB8TM",
  "key6": "4Vzg81cgsUsY6h8Kra4um8XkVJXo69wwy9F4ipPk1dWXTTLBUVtvEGJ3n1Anrs4n4migrqf7Jdgm8B5kysgASVo6",
  "key7": "5uVWGLrKZf2mJiZhgA7V77veHx5cbEn4hHyFVwT1LRZvzhSFiN6kDbVfqa9q5MqkrAjjDq91Ki2aJpLqBNvUcHuW",
  "key8": "37H5NhR5qgco6iXy5SmhFL65djn5Q51P4cf62RmmtKjDAzy4tdpD3K6K9E4saaPXC98Xt6EVjfV83HvYvLosNRrq",
  "key9": "YtBd26VyxCitmpBjTVZYEbuZhFAd243PPya93iFK2aBwWbHeTqzpUgo7E8Ps9rRkKis8EsspTLepwiNffshrW26",
  "key10": "qskoVjGfmUKCjDd5Nj8BfWfv9YrtJUr8v8BKJemo3RwzeFb4sVNXSMzahMA983CCfT44aqtTf7L4fWwXnaoYkeB",
  "key11": "VL7DSfPrZbarS9jMPac9Uw6ppamEtHsYzhE2n7inSZfHPMLsBzW3kGA1MraLhzRh84rHxrTaLibiHctUQYNWtEs",
  "key12": "vnpyp7bZmur6AqdV6zHfkzEXyK7DuGCV2CVZW7p6g42Km48biGzMqfU1X19Dn7am2P2vyPtJv7BjyLtn2yh1eYe",
  "key13": "3AHSCZte8g9BU8AFSD2zpxRUkKB2QLRjo9piE1xHEKW5ZWrhra1qoZFmadNzpHpT3FiYsyUWo3Seyu9pENBwEBkF",
  "key14": "4WjUxJFTcYuLi9EY5hH7XJDHVGrJmAda7CsgMsKgL9x3yojLLRxQ6FrE2CvTHYYzfCZE4Tv2sESYPwN8kSbij4Um",
  "key15": "4Y9azTLhvrwvRKgHCL1eM47Z3xCBWxzUvCsaKq7f9DNEsxC9vFdggXxioFtoHSiJYUrdnDMuqwsuvvEEew4LBKjF",
  "key16": "5xVGJZLQMim8e51AgmNQESejTnmoGMChYqEJ5smibohyPEXqRdrErUh6nVAgaiJmqo62e6SPhh3fH5s7mLjQK3tu",
  "key17": "3nuVH8CkNqoPgUyLXEcS62dzjRoebc3JZnuFahoy2ooYbX2tczGyyAmUCRXyfS9Kh17VcQC3KHckaH6MWrA5mKJk",
  "key18": "jopY2bQ8qGebGZQHxLh6MtwzSHoC9V55mW6KWVdVo5QqYrrTpfJrEbFMmy5YqipXZxSef7kvtYA7zeZcHFmau4J",
  "key19": "fnLGDqM9beuVF3BDHjnMJgWEb3JrniJutjWJVfDze9PNy8MyvttxYZxzm2mW5qFqEdwN35dkNUNm185q8XNuFPu",
  "key20": "EFr8BF5gkLcNcQ7y4TnuLXJV35wmXQv7y5XDs9H9CYW35fnm5PR5C1L8vedwQBLFHi6SArLFv3fBQC75Nqgfnq4",
  "key21": "4zHfaviHdeNEA8XrmYCtk7d5HgfqmetBTzhynksfeP71V5uYaVuRA8PyjHe37PQ8JVXaFDM5Tr5cH1YnZepG6GJc",
  "key22": "5s7HMaKioTrRLzyNVrYLztQKSk6U9hAEJkBfxZpbqNEvD2h4pLWyKLtcpBns6M6Aqv83ix2kqBrTXnzQFjqoXLFo",
  "key23": "qRWCsgHBJoHecsbNnfNZHBUnrrydLcupo76sS8V6KSS8t9dGdKMT9Vhj9fG94g95Zikb1oh92JDZJcUev3rMVDg",
  "key24": "5NsjjAVrCz3q6d67SXsUwrnmiiqGhF3cDM8ur6xgdCNkJtzF1MFqpgLwxD6XBgF6Rzgk1UE8FnEoaREc9yxf345R",
  "key25": "5DefMLJSbTQqHeexxfVdfgQABk2j4rW4UgQBQ4AvHjCDHqkz5XQTRqKrnYGNKdHoPeRe9QBgaNEXWiVaWjFWUK2r",
  "key26": "fKc7MjGtXjiYvBDFtc92cuJXi7srPcyezge4q7oAS6soJt9Yz4TuzAr9VBRefXhXESz5rVYTbhdAjg62LoQg3CS",
  "key27": "3SHGbEeKRNv8XBo4xfrjFxuxSDoPbqZ2WyCFtjanVph4S2dKwyrxfvq7vVjrU5HrPHSyesgC2QhQtYpRkVecEgad",
  "key28": "2KpgCe527wbqbp3ChUw2pp4eyvVPgXUaegvGJpG6kDdAQ9FBjBiaXoXWj3kQaDDNG8987bBbfuMwRFigoc7Cnqkh",
  "key29": "5mDxoZPirqkzDe4qQqFuVxVMfzxejyF5vBUGbmmN6g9AZpLc9k2BmkuH371ASzAPGpBLFcJKHYnntyqNDUhqsgtz"
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

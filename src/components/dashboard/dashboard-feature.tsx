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
    "2zMFrC2d1GMhcvHyU5Meiy7wZcA9Fcc7VJPPqEAm7XraWSZ4LandXijF7ndwi3jZS8RdCvjvdsJBBwan2w4rYLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5riXsenvapxKQ9NMNQE3f28bHqBHMnaS7EXiyhb3e4YD2MohXa7seuQov6ZmuWZFy1FZQp8zyZNgDNPAXABHyc8H",
  "key1": "32qkiXqfoVdCRp9qqu4ZHgTPwYRe294x6FeXE5ZtWRTgy58Jf2YLGHGzT2EKs9inCsQzCPrF7PmVnKSwhZ6YjWUq",
  "key2": "4mCh3k75wEd2RfRgQL98shdhNxfajpB7NPQutZigjiXHHB5eC1M21Mk2S8pa4oVZNFJ4fdg2Tey8W7PmwR3LpXj9",
  "key3": "B5DsRHNaEVvPHkwNvF8zYxGvbhpKVjrMpyVMNuziX639KQ1VkG8p8dPTLw9wk8UD8WJT5pEqeFwArRv5qiuSqL3",
  "key4": "3VdC3tttdoJqhx6iqGkEFyB9qXbGt87fax16pCbt8EoWELVZHFP35L7C4wnzP1FSvR2xPSdaxa5HBoY19ctt44y6",
  "key5": "22BaCQipD6ACoUkeH18Kk5YPpBZ81gb9o1FUezCuys3k6BH4t7CpPziPgCLqhLwpKdZinqnVT2BR3erg4WTbVkRJ",
  "key6": "41NC52PMiuzz3f1vfXZUmc8rEqZ5oBra4CqfgvLjquYxsbEiXkno1sCeWqzm6YURXqqo51nEEHgbCAaeoog7Shxx",
  "key7": "5p34haD4ijuwML6maHhwqJ3fQNRva1yySNB584edMgNbdNpqJ9uSjTQuwie5es1oU6Ny4Hm8NyPuQqUoQpAbwPeR",
  "key8": "4K5bzXntetoEbW7gzyicRzgnUZd4xgXGZ8acXqqKoE1DfkybxduAa4wdqruC7GAeA6jmAx2ndHwTSaJmb79yvT4Y",
  "key9": "5gHncUjuoU3apCGP7mLMfZNBp5T8wk4wzPMVeoWVQuHiSic5tKMyiVexeVEoxyzke6RdZw8i3SdD7J574pgxW5ML",
  "key10": "4zsWDN3mLBGBU4vGHZm3sRvQLUQJjncGMqtv18Gn7u7fdJomLLF4PrX5gGz3gDJBKCjovkRjRfAAaPKZA9XjTuEA",
  "key11": "33YsVZKaCcZEHE5yAMbs3MP2WPz38Ltn1HstULYPBrubkbNrYXjkGRzYBrL3hcKexW92sojv4ktS3zkyRpQoSuGX",
  "key12": "3jbxoD9xYSVgVhAU7K5hKVoNSomd9UvUfqU8xZEDdakHXg2gmGd2h2rKxNAQVQ3Tw1pfdrx6njFrrqPRREq8pNpa",
  "key13": "44VvaynG2PGjbcizHarpcvDBxoqCmf736d2TDDB5a8HWakKj1yoWH4o7keUhGZacu4Vjn26BwJHv7MF3jgHSGwx9",
  "key14": "41CCwRPGSYn6fxS76AM66pGepyx3vxWLQ62RhP8N6tMypGeeFtB1b6RPuaSpDQUHwnyrJXBW81DuHz16BaDGk4iK",
  "key15": "7jgwQ8MN4Y4ZXfziATHvo1u8csMYFxFhRE8sjtMNtanWasC4cmYEBovvvVAZJtdpNti4V8HrkEscnB1MjiCBmjy",
  "key16": "19F7KjNXJvEKJmm1EM49jqtvBQq2W1cpcuYJPZcshR8xEoMdgLmv47q7eTCP81L76AEthVgDZ7jbVvzuE1CDL1F",
  "key17": "4PznfA5t3QYgvCRJxp9AtRj2otpsKD6stMAJpwPyLXB5mFYCECZoHVN9St7P8VySQrnwsaikW4359UnYs55t2xh8",
  "key18": "3YwbtUJhWPav6G2HdVcm2hiGvgWDfd1BtMGfR1cwgXPyjdyN6zegdFGfyYd3q6hfZysLPi2enqLW3MAsvaYTKmK5",
  "key19": "5SaZVhMJHr6dHfRDzn3WXvv8iHvkEWMGkUwzeH2K6nhr8h2Mv9RUjoWhStm9HsuWnav53FTzrFx6VDUDK7xktzdU",
  "key20": "5NjPX7vFnYwJmF5LcCV2D6PHV26ekyx13H1t5NCEkgoizSHtffcNsqkNRbLsQmMD2pyKos8CBXwbRgWpnra75TBS",
  "key21": "2RoW18k9s7cmFZtZwG321dstWXaBvaYZgzDJ6s2rGKeumn8xjQXCJp644eCPY2wxvPuychDrWmt6q72SXqb3chgN",
  "key22": "4ebejByvkYTPq1J8KZrUT9MASSK6Crk6NE2XEgb4Kh9ettNovAC7GL9toXaEgg19JESgHBp8VvUgMmMk237cNfk4",
  "key23": "4FyrWYXBCwL58TWgteLza9zgyXweVKtGhb6MzPDUVsYdQ69qfSYRDsVoFJ43n7WMSqgPJjjEcwy1PhfWq6XxpyDV",
  "key24": "2ZiEdn4V4qx2a3nNNkHVpfuSSvVE6PsxWbZj7HxduxQUR39JgrQYne1jgC36xrmwMdiesGGDxFJRaqLJjGZNEZ8P",
  "key25": "3dSv3MHU3yWjssykeJvMfdMhKBGbt7BEjYfYC52rkDQMpfcrHSi4KTDTHS9RQubNJij3Tz8ALULLicVGB2BCoUyt",
  "key26": "3SACaBZe54og8o4WJFnqzgmsyEto4U73xMvZ9WEHBmzqT2SSKegTwP5vkvpAE2wDGSSuQYT4s4gjjncfFji3FbR9",
  "key27": "38ars225RuCohjE4r3EKZbCmgwUjS8PNW46mjQP3Rz7Qu4BkMcjE1GRHpYDoskFivuXz1xE6BKtHV8SEHHeVqXVQ",
  "key28": "2TaKa3LcSP8KETQ7VvTLBLt9CpFZApJHBoc7ivuCWSSHcb9TzDs6vrLti3TQ7MrMSqyQALv6PqvMvuEsrce4rwTa",
  "key29": "3T9uST5uzXXcDqxC8XTSFPsULF7Sd2v4z3ndsb1P6GaHWUb3mzTFVWygBoQm3949GQbKE8GPBLY6cwd3VzFuxApB"
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

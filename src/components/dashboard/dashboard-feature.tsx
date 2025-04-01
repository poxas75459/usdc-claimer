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
    "29oDx98E9RJdxM2QwmicNpHCDHrciXMVAy37MMKqX1QqUMQ8TJJnQays6vVMMyPqWFiEgSiRdR17jnLzdKnmJUDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pXrtyNeJqGfVSuu9NNK7AdSAbxnYNws14XPj7hPN29MaYRFc4cq6RYMUNKbVrjyFdnTS3j5fXuMUWkSVM24juKA",
  "key1": "818rfXV9s1zUwiCEsj2su9bbWXdpL5ocNZ5vxUyUJv4cdssiV97Uo9t65RyFQaY3Z6GuJk6fsGxP1vKJmf9GC1o",
  "key2": "341dCjjgXKQZjiekf6hgHuZV12PwwS8uxdAJGruMzFTavR52FV7ktTsWd4hM2H2daqNMeT1jfRJ4Gq4nn82aJ2kJ",
  "key3": "2VthUDczBKqynuJcZzdYJfaSmV5NqktGKbjmggzUdRQwUSCDv7kPkFtiJi8BArLYqxMLSZdB8es8m8u8fo9NBNLs",
  "key4": "2Eq6R8KQBCfXUi8q4JGv8TA9Lo3LovEq5LGjou9WivGMB9qazcP7EdWkqsVj927LzrAHfc1XiEJzDA619kn8727G",
  "key5": "9ksrYeWpyfKBVswaRNqZJJoaXirQsmSBERRtaW4WNjFZT2hy6eAN4b1qGBxDUenQ9Eeqi39hP3oh1PiGz6DLybi",
  "key6": "4dXtQyC1RzyahTKRfx1Nds31Y6itRqNMtdieWuDYRxSrXMUnmngeDr97S8dUSJLmSzELBkLsxGc4rXX8XJrKrJRK",
  "key7": "ziapsMBsrgFhNC5XRY8NkLNC8Ck1EDvrcRHeSVU4pqsh7sPBoJCYvMjB7kKvH7RCN2ZxA9SDMYnENrioSdF8BgJ",
  "key8": "5tRuPg53zUcUHk2S5VJZo9b9zxEyAhzntRbVwV7dNzWR59HrFS477hj13G8wU5TAxjKgdcDQZcXzNb94GnHKtodC",
  "key9": "4htJePUWg1B18uF8cR93Tx7UPWZHv5Fe1VjsjSaa4FFN4evFZkLJGhcMrGiLYAiNtSaxhwwf9sFCQnaTvqHRAqT",
  "key10": "KXfzdEvw93LyJhNHGAuy9drnahhx5amErexsryzkfCDpzbsrct7gThwDA7YUwVBQ67qE19AQXeYZTHiYhxi97CR",
  "key11": "3vycq8wSjCGfjothR5arEysGAoMqLKWhqU832P7PACDG2iwhCbs9NKq22AhUreYByM5X3oBokmj24TgUjoczu4Dj",
  "key12": "4FEzTME1SZTpsqhHA6RwBYhbBbf3kFwjFt2L2EjEN3oTFpoiQqWcSuXLm1XfTrRu5FRG9Zvd7dgLoftBMrcjGckj",
  "key13": "55XDEKmV5C7XUJM5JePGtxqBNioihnS1E65U9gv1LcCDYMtXSiRqJSDhncU9XmBdv6ijYXqabuFivbAqFp59Cdb9",
  "key14": "5fmtswVHL7R7L7cYDsaRKY3FVoVPC6rhtsuosJvzfMh98CxzKTGk4odyX5NxK4Jtt6hGR2wtNPb8iyHBTqjnqU2p",
  "key15": "3tfmSso8dy9hqLAD5yexrUC4kYaW1nL1Q3e1RH7aYmzPMBpGhK79KKkjqjp3gAQYY6v2t2CWYxkPjyK1nm4Lt2VA",
  "key16": "3TYAgnxW5GWexNuHuRXtVqaK9FzzpD8uK5q1pwUFSo9BAcLaHzoMbay676QPmAyQSJ6K6eSdp7m4R7ej1ZjbnjMC",
  "key17": "dnfrUbfScRUSiLyuksQNDFRVM4SmyABpu2Lk3qfd1K7163ekJRBvj8LCyGz9EreokbvxNuB7trZbTyye4Sc4FLF",
  "key18": "5sfred6vpZyPqamuJKAVWkjt1eQavUa9VUTXJ6suymZNy5JyLm4J7udjdkY9awsMBJqUKwFYj8MgPsy4Xb5yBdRr",
  "key19": "4zDNeJmfwrMABxUpkCwogcVgqv6AWTQbn6tCtDqQzcepvTj4YhQ6YUbJbxH7jJ1v58eta3rs4mkfkPDSTnVvpxkb",
  "key20": "3bWaWb9LUY981fdZ4X6BH6rMfYV4SRzQ52BGwKa9SPwDM8pPMYxSyd99KENFXVXCKMGqfsYWoaq1Ff6iY8VKSLP4",
  "key21": "2ERXXGCd8ZXRP4X6Gu2kbHMGPw7iK2w75GqzMJjNmy9sUuaxd3z9ST9GViJJqv644HPAuZ5dwqYWYt7SPSDLnURT",
  "key22": "4HyTh4HZ9YgctPELpQQ3a7RXtiURmAGqx6DZLGvmCtnyRXwa3rTWjcW9wCQVNuSYQUDagXMrSvYScioV7X2PcNHp",
  "key23": "a8WhNDgvvpjtK3H4Xd8iXVKWwaK3BVBZRfm54EAHFqvvjTCSf9RH8L17qtBBEnUpMkM1pFfvGqwZuQkpZSfHxPK",
  "key24": "5LuVhKcowHtJbpgNAwwezLRkv5nDyg7Qgbev6tejfrzJinQgEVbiCWRmXroeucTq1ujQFf5GgKoyB6GQHFF4X3Mn",
  "key25": "4EyXfyVYYTCsr4aqzepfrvpVocGHjRYNWTztWSY7u5WrD7TmNZvkdnRVaccCKWSC1DRFBoJwtePMGsUYEV1ETqHK",
  "key26": "yjWeeBs2zVMMexLvbeWFdcCduC2Pnr4csH29eizgCupftUn3bYzq3qg1kE8LKBE4G8SP8Tw7T82x288hoLHSi9J",
  "key27": "5JASjGCKimJH5r9NkVvuYdAaK5pxVeq5VYebbZf7QTNsocUry5NRjCggprTK1DVnz3b1vB5J7P5DxsEud2JwhdXX",
  "key28": "4t3BjKc3hchWzudM7pD3Bwq5bctPmXszoYe6LpFcW3GbSwKvgqCQDpJzJAEuyYVdtoSpvRSsaiNwtRUPyqHT5Pah",
  "key29": "bWGTxddCDiKG5mVZ9ZbbhhZuA15km3AENXu8cxHkuXwEC3xkfd29spxTo3nJpeiNymMj7WrV5SLvTssC7f2cQF4"
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

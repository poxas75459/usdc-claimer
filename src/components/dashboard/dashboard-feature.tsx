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
    "5XRqZMhucnqfgb4NaWaNTJfMMzeeXsQu4rKmR3sAEYneZbRWsHMZdWXG6uVg2uHZ5S8ScbHHRHU8AgRGVCXqjvJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FZNkj84bAQXpQNKmC1N6hd3ncKrzJFsLbhosJcd3kMQEDUjuHQvh5X53vt8V2RNvkRDk8mCm1medmBdnBej5bZn",
  "key1": "348aadBWB4HCfk7Bu4TVVvxSM9Xve7fBok1NU47fxK53kcM7ra8DTTcUXGExyi9kUEgDhrUi5uqFseYic9ghht3Y",
  "key2": "5NWheNwgbZdKegSUGHGGpvDXojhCECVSKCe5jPuDxmSZGEmYjLxoSvhkVzirimyVTsSFTDvJcsvGVxozed3Z6KR4",
  "key3": "Ae7XZ2yKa1B7fnaJn8Azo1u9EJHe8ZcS46Q9ZVNCi6WM6mpRVsM88wQQnvnqUbQbeCVzuXJh41pvK7efBexxUPC",
  "key4": "yXAwmLf1JkcGj3gn3tSbcCzUVbN3eLeGmcBcrKNdeuEz3C9kD4jbQsnTGiYtrWGA7PkPYenNw7wDoe17vpXKFPP",
  "key5": "2Jq16ibaqPk8Zn8HLiWJV1SRziNnUhnxVR2LmyhPrQJbRL8kkkNcggu4d3p5xh5cH9oVFR9G18xuVQ1JU3UwuUE5",
  "key6": "gi2i34yFX2XMuQ9oxsGK63biBmNSrxsoQ2NxZ8NDFQ4qyNazJBMTyMNdeCcxe2rLaSSzBGvJsBFK9YazCjPkMXh",
  "key7": "3iKjRAsZQo63vrjV76XnfkH75asEn9PUisCTdoV3NSqB6Y5dEKYtZkATRUDDhNQavvWx7Pqx53XaAjywbv1rfZXP",
  "key8": "2mzrmWVSHCpwLogCMGJ6oHjYwfwW8kmFtdFH6qa3E1EUaW6kov2nUdoDUpMxBp4EoMxrLA2y75UojeSfMZJeSzhn",
  "key9": "61Ko6ZrD3qveyF8dxpwvfmrBhFW33ZTjoqZE8Wz2GPXEqkzjvhMzyCnqggDVvEYyimbYgAdoxz61B1GRZuoQLQFU",
  "key10": "5FPddTiFNQvhFeqEiQUudemgJgXkapdTWxNQsXtAtBGxQKe9V7859EPyVntCZVcJRst2AeBxe2Q721Tb7NPUG8fG",
  "key11": "4QyBchzhXNJEuS3mrcxGcnw5KByzm1rRcWKoCzDbXVU5SkH3FDfDxXgQGJqTP5JXeCCApCSgaUzXb58pS1SnFz6F",
  "key12": "2UEa4Tw2ZMCzLZcZFHCPaKmaKAypCrwpRcWGpxnvD42EtR9cX11NGxQ6dUFKDrkpcc7vL9F9W54Fsh8ncV7M61Jc",
  "key13": "4io3CeRuAhvokcicqcfBnN2NTXWBAR8dkJ42pHeQK2Jq9Xy9HhLnYmWAtZFdLNtH8suPCv9ktEUqGGHNjA6nazsj",
  "key14": "5jM569Gt2rkR96ShM3MgZNwXjZXcKuzc1QQqcQ4mjQX1E9Q1FFJghq1wyJt1r2HpdxuWnwDVJfEaNfrnqCRu2sfT",
  "key15": "MdzpYuUfWfXL8j8RugWfyQdWNHpsaE5mfLCQjTzGZqVGTfwJVEGkHLDNpytbvMuwHxZ4Sug2YrpwCHRsCt6mWG9",
  "key16": "4o7z6tdtqpfgvEuS5Xtjam8vQVE4xQNAvmaco5DnYWJ8XiQ1JbrZC7yxRZxyj9fknESDAmdpEXB51W2U1r6abbV",
  "key17": "2CCbHz8RV1wkiFZjBn4YAmCLDmeXL5Mv6EZLuEDAZhF8C559ZSTafvyaQxuR1bhNNgWPfWWseqgXue99NrNnd27L",
  "key18": "5NAcXKGTyKg1jGGGP15xn8QjfsLn9qTSdz6aWx6Tn1zXnYoviFSZpDLbKr5Ki5R4ANZrKKxgoyeKQfgrzqgceuBb",
  "key19": "27vhMVcsu3LeWuh2hasxWPByNckBDKYedxs1Ns62ehQAawUKmiEBTtzjGSqmzzXseMJqS6XaMy1ci8mnYqhkdeS8",
  "key20": "4TiF2oB2NwFyueR1Uf6BKYd7ohMUEH5heFJJhEofzA4PJQUonQGagE2RpmwWx3GCM21JBWc3KRJqZepSKN3hikZR",
  "key21": "2XYSTct2mNahuTeHrNRVs7Jm5gRtNFKa5CpCneZk6dWQ1GGcKV19a2duPWMohvczh9nBc3CqUvdpdDk6JPPk4dkE",
  "key22": "yhi7JQBzcsUG6KgiVNpZFAUVMXcZaiBCXMp9ghC3WpacA1dhnMUii6zuoEELm2pWszQDcDENVGHiBLKrsXHw7AM",
  "key23": "2VhQss425w3oCjksrsqR2aboQZDtwZhWriA8u9e4JNvArhaEPBko7NQfHTgrF9WmFt2xwHF2cvgRcVe3oq1dnXYq",
  "key24": "2qB6btvFsVd2R9AZbJRcWYhwVurAjxtFGw8JDoNwCc5rXofhJRtAGMmv6hx9S23VGKnPS3EH8yDtcpUC6KockKqk",
  "key25": "3H7UYtpYXE1qW4RCEFeZ3Mrtm1KyQMaMLjCMaQxjppiGRJTmsJZ1jusYje2BpfaEyytdU8SnQ8NU2ahiWtffYVFN",
  "key26": "P36KoieB7yjK3EAQ3B8e9jdeyyknN2d4VE8WLUSKMmNT9MnSE6e8G6vNBUqsphoExpgKarJW9oWUjwRn9bZXUPe",
  "key27": "56NUK6gFD3aa5s9pcjZCibLi4Erezw5rCsnkqxfxQyXnhsnam3gmzqVa1rgzgQkUL2mTv6MdPjka3d9SMnxH2YEi",
  "key28": "2AAvfB5srNr1zLXKaY6Vw1jSxUkMnSKcLJ6qKhYdWVKA5tX5Azfh5zof3ZbjkpsTkhGVTEPEeei6ajxrULX3xvKQ",
  "key29": "2XfuNk7WPfTL6XRH1wmUDEL7woV3LHnSqzda5NF3H3W86jvQecDGvK3am3gV7NZM4vAsADbWMAJDCq62FSJKNSRf",
  "key30": "2Sn9tg5J8hE3KAk4JduvAu1ioFKcr9q4XUn5ASqrf23y9aBd1iwnBS7wQJMCz89ijWUBdbbWaNsJnEFp75YXFxnf",
  "key31": "4QrTjMfgRQ7J6zBjR7UYp3t8fJQ79pKK6X15hPzRhFLQmk16DExTmuu1utuS8M6wt58U8wyVHSaikMh38mxo55km",
  "key32": "4EQShuQAmhg2AVwRfjYKvz4VhpAGQGmTHWFdAt7iyvLMXSuzvEHseZ9dj8kk9jLFDWbdfN285K6nXxcutUGwFUW8",
  "key33": "5N6WWqMa8wZZBVtBudF7XhpzmoaYxLjmXUV6Udd4DbvJQbrpBFn3ZyBKQwdGBgcRaZcPLRxS17JJFk5bYa8abUwz",
  "key34": "4TdFUzqPD6VneoFeDgumvjQjLqkm3whazbXEKQKQhaMYw8L32ijRcfRrzosUDETmaTiQ3rPLNZDvwTnq86YEbYML",
  "key35": "4Z6wJArTWrSK9SUC2CYe6vQG64jkcViRhfUMjDUkT8diEZZW6w1czZ7wV6HQ3kB35iNVhzgJtQyGEKwMfSvGKmXn",
  "key36": "2f5FDSJ6k8J9wTPBswDY4PX1pBvpUN9Q1NTwLM6GZRdP2fVUAyhPT2EHSnbmWKGyLUUXeqKD89oZBy3AXyhscHz6",
  "key37": "4FUEaNiRMAn2U4U8xb5bJzgcVuAvARHtDGz7S5ESXvBi9fgtYtXUQXtTGqBjo826tb5hXzPqzpkwZjUFjjdDRqfR",
  "key38": "3MZkyMs48BHp9v2nL3aXPVisigBpcc5aL6q7PzXrY3NydHXbbZ7HF8hBwf63kVtREeKKnBjzdykPKqSMs7twxgcg",
  "key39": "4iqEQvVcjF3RVxPrymp1XwxaXFRJG4nKMzXqcamtZez4qw6mPoTfmQXtvRRpYVUa7Zex7VHm9kLoCzw47DUYYSjL",
  "key40": "r3RSKLoJqWtfv4nsg4SQJCL2BwUiNuo3Ap4QUvL8gTb8DMZ2o4Viem6ibprctiPxgywhY5Y2VgiYgb5LHtQy4JV",
  "key41": "2iAuM4GaWXGV8nJGmHJaa3gWcEs5qebWuJpCCfg97tXxUbwoBdnGB6UotbEMDmzF1pgyTDqAFff7F5jkJfKdWxPk"
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

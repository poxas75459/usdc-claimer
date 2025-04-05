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
    "3MEWPxPUcwNPHEzpH14m8B8iWF8E3GRtT14XtdYurEbDZY4DBTHHNuRUETKxrN3DcLNyMZkpHBwESGCV3aSdpMaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q74Cckz3igjQdSnLHX9CFAsLQ7qeiiJex8aRNRUj2dtEqa9SzLNgLxbBQx9QH6N2dhRuZR3VjUCjQGUdjZimiXL",
  "key1": "5owrh9RxcEfdFKSBGAVWtQbnxDBSPgSkSKiqhvetkesgJFE3XU6f52Lq57vqiPYhXaUVmhfgRhRQFEhcMPZyJ6oy",
  "key2": "5FNo4GL1L6cqpBQ6fmXYUs5uRztfpN7WM41RwmPejU9ZvCcG1w4cL1dpq2XjWz8nowRoDTaYg3d94G5MVdJpYBc2",
  "key3": "49Xbmp1xXcByYzrQo2Apov2BJ6Xzj2b8Dn9uTqpWa3Heg6k81hexeHL19mtcbDd9eze12JwFL5FhMwYVYs3WezEe",
  "key4": "Y7zfK2jys9rfq13E8MHoALG5zPnWAF4qEHqSJLHfux5d6dfDSUGueHwNB5MwW2DMWEjK1Zpg5UvxXp4TLnDS1L5",
  "key5": "5P5oMxdHuBJHBJrhJbYycaDXE6fyMP4BUxDJD1NzAca7axw3Ty9UJDXiME3L21HedYtsA5ghkFf6U6aNddrQaBXX",
  "key6": "2UZpFnvgky7o5beQ6oPc4fgEnYM1d8k7yBoaJ5SwEUv8bntCvwgtYvsP6ijdoXgEgV77zfyuZfCSaBAg1uiFqQLj",
  "key7": "8rVRafuQkmq9GkDqvMrFfSPTroJYiPSHQ9r6a8mtniA64fmTt8mjtUUeeztJ5afyxLhcde1jiBmT6kh6KTgcPWx",
  "key8": "5mCn6TwSeumPehRREe4a9AFKACKnGKdfbUwXKNYkywXnhKq48BK12f5wsA9J1txFf4KTaF2tHcYvZLikFX3GGZky",
  "key9": "3nza4vcqFz7jNhV4V6RV8PivYETjNF2Hr9gDjsqQ4NDBU8nsRqDKgMu9NoSmJvLM7EzYR3aYpjcjzuPckpMTWzT7",
  "key10": "7tVT3CPHvWMhho1aYgPG4aGiymQ9F9nJnQbg1sEJ5rZavaGCbrwcEyjyffHLXPuXjqNVQsyxqPznVj28q83GgKc",
  "key11": "4XyR8Dh43TNnw9Q2L4urH2yJiVh2kyjAMDrQMi2eoPLQf8nLiAnCzqnaJdyUmf5G7KDGdBaDx45TYgzcxxVceFRy",
  "key12": "4V9CyHNZAeucGhBhQd18GRUswkRkmUvpDhZLJQwPjiRc1q5w9RBmx2fHVmVxNNJv1XB4RVq2XSXoGPpCnVijRhdR",
  "key13": "52YKDdVak3KeEqWQ5S8PNcR1nZjkTe6NPMLnwhp5KvL51WG9Zgpm12aJgaMkp6rM7PSqiiVnGyTxZfbrTq5bbTe5",
  "key14": "51UmUpGgqz5ggkG9ukw8Ew8z8jns5F2UDnGHxTTrj1qxTL1u1YC4pJFoMZteGKx7VYZSCNSJZdDqcvgCi7dCyCJC",
  "key15": "655M9a3PwGRrfnJXD8oLAXq92SHgEZzZ5svifohYNbS63rN4SZLYBSttg169UBhPMwPmiaGuq3xy7sU5x1rqGfYt",
  "key16": "4h4bur2zf2ynUuy7YdGaec3xt8hkgjsRoHS5Sw3z1WujqvvHEhMqhWeAKfVANWeTFNvcmLDfC584qKgVN8E9W8UT",
  "key17": "5dTvTcF36inwDSzykuqtSUiZKGiirqG53sEAy6hzeiktatwQEjS8JxYzwCpY523JAobh9q6LyiZfSYAcnFN5X8FA",
  "key18": "2RGRBoybL3Mf5Y39rmfpSN7EVx7JwcSDdE1V9YTAHXvDZVtjSKis9ZtR3qGN3i4azK9K9iVJhEK3V8QnBY66Zyd8",
  "key19": "3qfYx6weyTcZtuxDuY6kW95euviEXvFPykPa7Zq7AbG2vQgEKLv6d3VmmkHJAsKgD6HQFEGTXZ3mK2rXXKnGZjGL",
  "key20": "5L8uyBdQUNQ89EdKdRArF92nCyZ7P6YM3ZKKd6qJBneVvoWEtVsifK27WFpnz1VWGZBBML2Kqdpkw8oAT3KnKHjc",
  "key21": "4pJhJXvmvPeg62D6z5L5dShFCH25DQs4aUhSSXRyRFrqJ1TuPmSVrE6moAeb8XHdinuENNfbG89QDyMYashVwmXi",
  "key22": "sHsRnGxLfL7T3dGUQNp4A1zzgZR17afYAaQUEETpwhjbnhWhsZckq6JvcmcQRVNyAiuxaB5UMPRH1eF7ESJR4XJ",
  "key23": "5jM8TawhaU9U8MSQ1tRKhsHTdkf5ZjNrnhYqqoYedTHBKdBWtVsrgTgRmZnvhck22R5tgutoH5cTzLeNAQb6Fo4Y",
  "key24": "3RUTfk2DTX8vfTAdafEXcPKTzZcZLT7PeNZvmzoQhpPkC5kh5YybB7CfmYP3TRTVqYpeigXUa5Hay4BP6AkuTwND",
  "key25": "X8qnRLco8zyscwJgenMdLyb3hDGEqHwnDHKhEtVDMo6jJ7D7XnVyhoY9t2TMH1d5y5TQUbmTv8DGRCHhfQw7Rb5",
  "key26": "24fqX8xPN58YsE3rZUUtJVE6WrzTK1biBzEEcEZLDfvLZCbcJH2GqarxVZWc7pixBDWZx8gJbyeJLG4Ersr4rXde",
  "key27": "BFVKhvPJvsqvzaEk57uB8LVXNeCMuYb5QKAmYMhedBpnLnFbdbT1Uzwmnv3mBKZWMWAzLjiVDgjw3f8HpB2prvX",
  "key28": "KAhdnr8Yn2YV24pAvcjVeC2UYcG8uBkZBfzkQXCWDbCJ48kmRwXWZhVh3oHzQDiXL75jtfEb4SwvSFFTe2pUtJN",
  "key29": "2KMWqey3Z2kt1AhzyebojnBNGBW2oQZ4hX4sP9puSVv6CmGZJnwkvdzEQupZ1ARANNk1sZJuSqnHJiZt98hbs74E",
  "key30": "5zpszGH1K7e4QPMytg9MMHAsASdoQ7YhQ4xjM24csM7BanpvyieSUbzV64Pdr4Xj6EPnxyX8NmMgPpEGN7oHXZ9e",
  "key31": "5ALAtyu6ec5Bfw7cY9R9og8dPkrw8UxYML1KpWVUxCYEArYQwvVw36EGz7DqbjR7aiZh5puTqNywrfmwRrD3ckxH",
  "key32": "5oAg7PeQEzPQ1Uf731GxDHWc2y8fEtzmBXZDC8dimRJ9mRU3RbFtTCFFRvDjEm5aSwW9YC4QZxVHVw5SfumzAk1E"
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

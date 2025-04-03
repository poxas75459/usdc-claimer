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
    "eKGqkf33QRB1YBDbotgygbtMxVa76rpMmFSwtA7qRqfWJhVDzuKhuYf42SRnaYoDc3KWrhf1yBEvKW3tr7HpE67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTXTiiFXTj3SGxBjDn6YTktYwNw4pwXyHUJVQSuN7c4mSyEGZfrPJHhbF4uMtHSjGZDiwvTrpx11WpCYvcB6bH2",
  "key1": "4oPTXbZs8r4cNUcD7F1NW9qB9ACSiXyQvvEZTe6J66xp4YYseCJTLMgqLnQAHZxptZ7C84HLiW6aS8EqaTn5ewSZ",
  "key2": "JB7wMXkgebp9nKNb1dpcv7qTH2XyqKgCCKytA7jYXiQH7AFJDkuzF1gmySWocYSe474CSuCLxy6SxcLFTLdEDJR",
  "key3": "3hodBXAN2hsLecep2YiBHkW9Q57tPjXqbBLyXbbiP6BXVBsiEDQ4QD6sBgpJNEaecwH6Aa43VAAkoUQPEkKFoCRU",
  "key4": "4T2nX1HXEoGZbSsACTtccD99PJjEE4KBQ7zN1EE7FKJmZjCcGnf7gz5KiFxefCzkrHddVhvB7xG7U8M7gesaU2LM",
  "key5": "PcVb8bvnGXzGwmSb6sVX4bN2h4mc9Y18oE5egvToLJ6nfNp2k9CnprzsqSMBgvbrVCWSLiCvCvXeHN3n7sXWt8B",
  "key6": "4EwhAv5Qj9NVuWTTqzJmazkcZDHtEh4orDmoT7AnL6BHrvCkPxs6ViBxDR1SGta3c7Ttp2hrV8q2dLhnmajPsRqb",
  "key7": "5wt3ax33yzZqqUuKhHYmADdavGchCkWgc918xTHJiqZidJetnMFSTbbg7pFygver62CRNFVrVdUHgVuFsaVbfZSX",
  "key8": "3RGRi3WLhNFR2cmFjsXiP9tud78AcTECfKg1bf7eArrZ6A23bjM9Xs5BRtwS2751w88YB73U3fKegHuEPdN1iVjT",
  "key9": "3aNibTQkRtw4xWKQt9k45PGhzrAvVDnP7b8yRjs1J1mdVGY4P8JzhW95N6yTWJxC2keGQQ7t4tbL7n9U1Vi2H1xD",
  "key10": "4B6K5zK12TKZm2rJFyeSYwJ6GQ8oUoFwAPXjQfbgvHxL7L8L3mL5JHHHz3fALkYp7RNV53ukfmCp34qFSTM6ZSxR",
  "key11": "3es5Eg9C7AHco9b5csu1pEbBphMroeZLRF2kAMmVieXCbjkEmKx8Do7Qn8jBb8ek5g33KgNYAmjC7w4h9yn5W8hA",
  "key12": "3NDQvM8dgM5YcYkmTi6k1KLa8zhd3sEBqfZ9GtdF64cz6poxNgZmoMfh8eX6EB5y5WwBVFdVnvLkvrYPPXa3L87n",
  "key13": "59KLiWH9cR5fVSvCtixVvRLLnymBY3MYqNHJSPxg1YcHrFZdhpe7oh7aXFoFLdPXXDkLVNHZtaDAYzDwXXbU5RL3",
  "key14": "3amtLmyke5oFKCin1UproJRVPLbre9uUKGEps57Duzb2VJWmm9PDSJmYrnW1U3fynEEmRR8wVkFQxjsps1BB6L6F",
  "key15": "5uo5LzSEuZreemAS6Xh9XotdWKDD1NdZXenavUHkjEXKxBvZ7PnXmc4LMdNzFLVjSAzUsgwgvj1me8mEQhHa3FhK",
  "key16": "4DqHzDWvfYGAPt6vzzmfDwLcQWqYwJ1SKDz4C624RmD9mF1RU8itnRKULuchajZ7AsdPubnMT7YrQcVsRq9yTAor",
  "key17": "5qVzWL3sGjU75ajgK6t3dpRCZrde5j8DQsFZGMMnj8ndS4KrH7D3fzK51mnHZcFFWPz6nz35tuLWt8yG7khQU6hR",
  "key18": "5HWfr1TQfrfDYKWhpYmFgwvXE4TnyDpPnXaUJsLXu248wdi1X82VLE6XPPCUmM6YY6SPzezJSWAGkJSCtQLLXgny",
  "key19": "3Me66KuMb2rTg1WqSEbceyWEsMdd81XiLu2whKHXQTEmBNXH6EUkTVMnqjpNtaodaU76wqfcQkx9MK5Ts9M55yTx",
  "key20": "262CZ8hXz1p3QjrQavwHxpRsTyB3WtDjPiCUKUjrZ2HjXuAqrm2XRLZXMy4N78HPNWbVVZvRHAgHvchPahtPaPEY",
  "key21": "zDKYFenzTkYF4X4iKdh53P6zMnhRyY9qVFhZoiem2sb5veKTEQrLQ3BC6NmZsBYUJYEVAVJq6YuDH1XD7D3iksX",
  "key22": "347yzaH6CiwsEb75RYGRNymCu1NqrnDKqsRf5HSb5hm77YvDW5o9G9Mhndq7GcSt2NeeMhUZpLAK4aFUMvKUi3tu",
  "key23": "3JrWVkEz5apt4QwyPMvHYkWbcipmYcGMMPPq9QqpLrm586Q2mhB87tXC9AXf2qVnDPahXeQnz6wqkoQYhmx3J76e",
  "key24": "2F8m2vZnPiYngDWN58N9WpFDY5baY1me2FH4xnq6ntQucJNrPfGNE7UuEFPkwz79SSmTtDCrDM6hTtz3D88inrhW",
  "key25": "4DPH3JTSoDhBaptS9d7ZfPy1WStJ2wbAZ3AzphnS8qZHyrewU7vP2znfzcjDSxhrc3x7vbA6oYhfwK2n9ihoxX9Q",
  "key26": "JutYqGpEahp7vyqVvtmEKr9FHxWnekHjo83L9vFmVGwSGFuRvwnp2umNN6caVZCt7ExSM8WnLMBHgr8mdV2dijz",
  "key27": "4Xn9KkQA1nkNs186xa77CyfbR1fd6LnTok3S4FhAWEkCMVFrqkgkVpFCcwtvxQ6WWtYFwQcsZijwoXn3fkeYpg8V",
  "key28": "5bEc31Yz1ihovozJiVAUT3irNs4rTex6z5qkhxHRwgD1cGVTm5oRVFdDr76j72oscntNqL53ygfzAJJfxdLJ6ZzC"
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

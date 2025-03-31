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
    "3aFPJfW5GpaFoLDqbNpTgfLSTpg7rfYzjWmDTPESfobR8Vt7ao9kNGhQSCRmMmeNE4heJde4VXfPvq8kcBY8sguK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azurXm9isg7eECqiaWvk6yjF4dJU6FhFk85Yemm68DFrjxk2S9LLWCFJbRgEdoKYLKQ73UyWKSsyVv3Vtb52XkD",
  "key1": "5eAjpWYeoCmH6rYBW3deuitjwuh4ud69Sr2gsuwY4Z3unXwgqma52qjr8phxWBHsnQJeBQ759iB6iAvu7pZV78xs",
  "key2": "2uX4Wg4jWdoidGY74noPZrQXY49NVERPrpFgoqnUzGK4Axx1Laj26Bn3fvrn6uS2zmqaFbGwEuR6DCyxtVrNGFCD",
  "key3": "5PxP7eHMHkHoE4T83FGY6KNxiygp5nxQfRvwcH2FSwLrwRMoDagGGapPksam6Bcqt9uCXV5J6a2WGzJeYcjsVJcT",
  "key4": "4JWTZnBjPjWbL67HCkmtgw1tRknbMGoTUUnxvTJVuJcAJC4qfVh3VtfrU93A1Nk5xdV3FCTb5GXD68jraeRjkdix",
  "key5": "3aEeF7XJCDn7qNnHdAfXHhDm33qcHPz8bn6EhSoWzVqjJMULxb3hsZmCJjE8cxbF4KLrHJyTt6ycLDQD8kZUDaST",
  "key6": "275NjF3hHd2YcH1eJqgbfpZSWmRtaNwmJazgxDKxXUfBUagLvkHWg3o9HaL6ns7LKmkPwSi57yyjgbtqqq2CCgVg",
  "key7": "2QxjQuaBK8J3vSgnNeKbDqeuFqMF7dEkyG5SmfQ6KYh196s56XjrFRcJ6ox4EDXnm6dCmgYowtPtE85wjBUcRB43",
  "key8": "3BebXhkUsPLsXTfXXRs97tTCWFH15jToYHMZ7228XnaYuc2NJpTLCywjCBn7iAYakFWZBGZvrMEUDAnQRPnybcgE",
  "key9": "5RCckWx2zFQ8rJXRU7Y4hBqUUX15HbrxzYbjNCgcszD1ho6tczJqsx8KutegkHLsXwrMNq9cAHJKXPBB4ZwAPzuJ",
  "key10": "4i4WL76Hdwu2dkoZREXzfqdAWeSM6wKt5E7pvijzRy3BxcMFzrC5xQd6SBjsP6TArQdAcbSWhWNx7VjztjUf2sGE",
  "key11": "2NtemGZiyt2syg1N9crnF2SmTuD2ovBaiMBcDXQgssX5VAEYkbCr47961cFea3HwwS53WujjyzvUjKop5XWS3WwA",
  "key12": "5z9K8PjpJRnAcn227ba9GqJXAHm9YW1M3XCA2N6oYm9SkJdLmY7CMUJmdB7nheSem5vopmPAgtMciVRvsiEQN5jt",
  "key13": "4UHgMTMhqS4TX9fvuaLhJ3xr6V1FSY1CC5TwhKqKj3z4qXr9rYUcD9p3wdTBNmbSncTriZg3anWDGdLyr8TByYAU",
  "key14": "3fHvF1m79j86YMv8j48WNSTE4CsDAmd8y9QKFf9Mhpo7oabzLoCcdNaCe2CFRs1vaSDrJ5nq2MmCDbZZzzw2LaeZ",
  "key15": "3J47toNZ8A52KmpMxifvG2umKEtavNGM67FBuD9zpNUh48tuv3buBuKzXLmFbzvWtivRuu4bmd9i2R5CBV3h3ZMR",
  "key16": "2kwDD6KiLuGjLgBche4t9a1ZRdzpSsYBToELLHhkDXGTvu8dyjXzm8GQPAfDYn6qzaZFoFvaKm9i9iiNQB9Yg1L4",
  "key17": "4ruMLRimtfKA43cMu6W8QsHqcxrqkDsPEttVYb4gexdDzD4TwzCcn4wWGzcEwP6ZyqgYSruJZrWMkP23UkuuhPns",
  "key18": "64GBQB6jqDUhiphpyXBBPWcCRWyJeLAS8SFF53EwYCPAUVV9da5wbLyQ4fCfGYrJK6UdrbHdtbhRTDYm8ekSJViy",
  "key19": "RZMupXfXaJa9jNqMScjDNk2Wm5LrdJ8kHMM38qZ6TZuazRCDsqUcngz6ei53fXDyhsUWM2AhSTLu5EJPDeAx9vo",
  "key20": "oz5iLEEmEYQL21UB7FXdBLJu1FEMz2uNykZBjM16YFcPv8RCCbc1buKjyXNRv8eQMWAnxsKgNkdT7YdbeTwGPPL",
  "key21": "2BDjTX3tskYn52JpJJYb4nkk5kpCgYah7tEkm86FsUYaCCn7fyYtActK5iMYXvsfnK1Y3gzKRsrkVmfhtryHDwUs",
  "key22": "5rt3rt55JvLtdaXjzTJ7MpsnbMNA7vzr7AUkZ6dUXENMnLBzLLWM7HAbptGeeoRRaxGvRWVWcDoAexg79XqcAvmK",
  "key23": "48mwSNzMjLpjaKy5s13GNxJj2doFEk1VZ2aDCS3htSkJtPauVqASi2FQoASktMefn8KJztN8KteSLsdGGXTWWfFc",
  "key24": "3F74BxP8XPdBnMGQdrep357NfzWTry5r4ME4zJRvMpuaphAXRwBxUTAonViPsMs717BvzYsEJpcxh8K4aN1GdW8D",
  "key25": "4iTLSu26oeNJSuSEcC8x3ZZ6d916uwm6M8XNXxfwhoM4PLZtD5qz9DDkKnhyRbi8orjEwDgQfiTSSD3A3gQAApb9"
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

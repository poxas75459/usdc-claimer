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
    "5M4aWfiX5pfAugXk85fvYNXX7GMAA1ymJ7VFBoPhYbYHYpExs125zyX4vbAsCmCRuRs5dCPpgQo4Ky5gq5pvwRvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VEZUYfMB922uyi5e9zgcSKyhAvnVozpRbRZRUkzNYLqEe4s5ZRzAu2LTMy2dKV8BwH9qV5TaooZYJTgAV2sS9d4",
  "key1": "4TASvVCHnKr4ZaRfKoT3dL6uT7Xjda89j5dfm3tBTAWriyHFN4mukXKqKMZK1mjDyLvzY7iYP3aE637bJ4MzMGJ6",
  "key2": "x1CcFc8JqrCgdXnq1xcHAijTAKwqADiky63QoCoCqSXwdj2sSFmLPGNCRbvTiwfhRujsBbGzoMUWHUcGWgTiMJi",
  "key3": "uKJwevK8XwhzSR3Th1CMvNJS2n6MqG5mqEzmtufMK3aPUvHPwMqBfHPQxB2tJBBisWYV68ENfqLSPSuBAPKLfA5",
  "key4": "5weZxYcAgWZ6UD1PhpbPCT7uXioaokWnMCyyA2UpwAUfkcmcvt1cz3aQfHzQsUekYrRodxzEEThLTTdVnR9RMTrk",
  "key5": "3jmVNLhVQMsMMtvArE6vjgrizCJTg9FUzXet9jqcUG3H57tYaRgzXFQvCKr1gTw9DioA1tqmQ7ifTwrWijSLZ5nX",
  "key6": "2iqwEhpUvjYQT2TBPcNs7y1awJN7oxkHRFQHU8bpZgErRnZrSZZxjS9QiFEUW7EKUkjn2Jybj5yXF1mau6R2Gy2P",
  "key7": "4f9dkDHsju3hKWPwXdts9Azmy3YUWcZNjzCFtt4snMVV8raVYUgnHKcw9SJ6foT4CgBjoEAbiSnQ7ePSAjA7YsEY",
  "key8": "3NKdX6LUaFY1YoidTwPEjuTMsiWpx6cpaLUGt4q9mi4jZ3QUZuTkCE2bwq9swnHv8bxk8ujzo2jmcbAjqmZ1YwcC",
  "key9": "gLP1j9s6uhWX9eRypBoLMBrqQPvwjvn9WM1qRM4qWnhyq8XynnWorPsrR6DL5pqiaPCM7sE29pJJJ7WXhTUmRgc",
  "key10": "2YEwbbGsA1fzhyoShenBfD2HT441VgoNq9hUUKS7h1GodAhfRv1SP1pcha5rsUrPRY4i3v4gKfoTW1iZHG4Y5xq2",
  "key11": "Zmu8nTem66bFCTAnbt8AHgUW9KDURt4d6zokV1ZPhtNUGYRW3M8t3JUSCyVhJtJGdZ7H4o9GcwgpLJZVnwmTtVK",
  "key12": "2FbWsR67u6ppgTogxq4iTm25teiTznvaiBZiyRjWoKcDahE8M2hTQTL4CsgQVzc2nZ7UE36zN6uxA5RMjmaGPyne",
  "key13": "5kBcpRasu1gWuP4LXeC2NPfHktyopD6HxQbjSYJKMP6aVtYC5NeyMw9rgiqtMmrDwmZ9YJqwBZ9bBthCqiodiLxG",
  "key14": "4kAAJNFNiV5qaHv7JWBax88xiDKjAiGNZJTPgC8uUTsbHH13Aqrmmpy2ytN6pMxPR1y6JaqKyMdGoL6uz7iT1oXh",
  "key15": "3AZkfrNK444iTd7SfjuDPorzJy7kWK9XFEa72jKAuug9uU6UfFfMbNxwEm5C6NuCmHV6YEAoqjo5vcB2G198Pxfk",
  "key16": "4k1ouXydfMnLrfEoJtbP8AeZKHa4iS8x4TPPGUxAHmjvhVyafmziphLjTe2yaoo5n16DJyFuTYpF3edW2y3GBcqd",
  "key17": "4NqxZrtNpheWzXfCxeD55WN7bGNkFjMMkmPUvoUih1y33AdBayQ7YpfUacyaAt44JCcWqqmsbDjBMgLu3Y1m3ETJ",
  "key18": "47jYdxguXzqZ8vLGNMhkCm7nDJrC1bTQz4AT3iCa7mfQg83FkK8DkPNHz5caDc6T65EwsSuRyVPeuMVVjAaZoa2J",
  "key19": "3wSbduDPhAtXqaf9FzMJsSiB5kvYqPSmigE3MjkX3rGcp7z73BB4xHCL1cX936g2dR6CavPWnsPPdm7cCvZXTyAR",
  "key20": "3cpD75wqhaxXvh91H57gqTjWfBCKtpBmWvYqHx6iC18gRpCyMdDJ2Vi9aw3Tg3jG7U2QgE37UAoS9goec2AGhNo6",
  "key21": "4D4dwVd5pANRDJGXpFXrFTEH9KXukBTHWj3mbmW23GZrNXjKTHayVcU3CYoAQP7sRdVsyDTQ7EpNFwMrSQZsQGMr",
  "key22": "57rGdjaBX6R2H81rMSgiJXRv1bM5y5PbWo3pis8kWNHgLPKkMnDxpENJyMW723Byc1cmEDvBBP8nuQiiWKqRjwjw",
  "key23": "4vTEA4cFudrwqB4LXdWKTRFyvBFKTbjZEkUeg552ot2dFhE9sSa44bR336Z6unSC2SHJhpwJBw1cjjdwfNoDsFqn",
  "key24": "55qCHziphGh8FxNdKKvVXASEhimxEEo9GwFBZViNDmR7vBu35WgNkfBmkU2KnXKRsovK3e5gvAsdEqVtCbrcZPSa",
  "key25": "55RZb1bN3YHBnSkc9r5jhdWih7Z2QPr31eAHPJbonh7zi7an9ZfKtw8DKxcRktsq92d6wg6XiZWkoJWosGUXB4Qb",
  "key26": "2FihfhpU1MxU6NGsg8qRKTbAZcpvQYkuXT4dfnAcGyZrQL4x48aEL9QK7sMphdGHxMHnyyrS1uXWtuGKufeNZFrk",
  "key27": "5dWLBg3edUNGWcenKWWf6x8bdf4DvQgczMbxjVdXbYkaUwKyVW8cCCkKXFpN9282graRQVYCD49Aa5PjSW1Q2BhG",
  "key28": "3YkwoMervtbHkDHzk6WkFbjoEMf5HxiwvNpdVkKL7mMwZAegSsdytVfaTPHoJp76bMqJb5hUSBNQMpj9VXRgW6Kx",
  "key29": "pP5kj2wuhML62gwQipJitvG6XH6trRRpmK8t5tQiF3nANoRHhtYcPhoM6x539dtYAAbwQ1PMF2wmpZ2w12HGtP8",
  "key30": "5k6L4QQosaRAZjxhJ8g22k59ufRva6B6HqutvyjE9495nS2rupg2W8VwYohW1kgJoDLa5kGtKSqLLrR3FNfd2AkL",
  "key31": "25GU1RBvcrotbNqqaHSdH9Azr3pF5VbQwsgaJS7gRCBgUStoTBUBnKi3ibuc4uyByVxvuto9KwTZzBPaEBN32PSx",
  "key32": "2BMhPbiJWYdFZPNyFAs5AbEKNfrF3pmyzDakxE5A9ED8jKq49KXZW4BdgkjR3CiyAQ1ZRDffYnvYk8YwwpQLSNQd",
  "key33": "Vt9YzrE36DHqtmsfbwcJYmAAgPqEaLqP6YDeA2YRuTu9enYQYMD6fD5HkpikYoEre7GiPppqzgx6D5uBybyFZz9"
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

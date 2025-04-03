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
    "4Y7FsX26EQkhRMCn2mZygbFGsqZmeMKrnamSdcy9fqBQhGpPNPdmxk5UgqW1m4odef2LgdtXL66D4oWv1U35HZKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVw9cYk41oW7d4ZG7Wf8JoBeMTvpinRc2ubBaQHAeyqboDNzHmDeP5obxnFj912YLYuX3tXZwxbia3Y6Dp2A91q",
  "key1": "jtgTVZeK8pvTJJ6KD5otpXTgtKToCVaWFuHLEKiJMX6gdf9KpH2RMzKAUcxDqqHACfYJNHafrAH8Nk11jtdo5yV",
  "key2": "Gs1kCSWVpKf9tTAM7W1Tk8VjV35ie4J8xYQaLjxe3n3xzfrwJ9TkvYvoaWvHbsHc2VS4mWyjRFWo7NwBgkVHDZo",
  "key3": "57pDs8i4CgwEikpMPjDFWwWP4XWgnuBuuNxqNzn6k3CcmKELq7JAZWAbmkZz9QvBMZvh7REHXqjtx7F1y4wiJYHW",
  "key4": "snUw1VpPyGwHn2zN9XJQZ5VkgtmAycaYfdMLdGcF3KZHUTWBkUArsFgKJJzk7Su5AuHnJwyw2AbUjv6aTw9v2Ns",
  "key5": "5YeZ1BHgN5piepphzFnEGscgMWmc9XDeosCeN6bYKrHE3AqDHVjxCbT34aoBQrk3sLDDsA39ncexGUG8sd3TLN9j",
  "key6": "42ueYLnbxFbd2JTVzUR1RecDBCreqMXnpNsaoHMUghokywYxsbSkyx6ATsPAvro6fDRLF8CBkbWeK4V7xAVFETPA",
  "key7": "LUyF147iJ488QjhDao1zhHdUn4aJd9X5KDVgStgQpxhhoCbD84YSb9MDBqNcxWeLso2xxuuZNbaGSPC3x3abQPH",
  "key8": "5DtbLEo1m5nZRdCfKEprMQmddwvz8H53f3zrjjq1C1Luossso1QHxR2Tu45b1SM7WMopCtWMojk4h7bNNiXs1UEi",
  "key9": "YEmsTe2ZfnYJxJQ6WdMYkT8pnbxGopiSRK8fH6fm9StT2ToFE1NX9v2SwZVQuV6BfKMYgxZkhMegAAAXQQ2yTHT",
  "key10": "2BCeJuXKze2pmcyBj1w9Co75eFqRjWJB1Y8HqFyCAXcFV5KXxbTGwtN7zVrcgK6S6gi3WPo9yt461KiPzJcaFMUP",
  "key11": "jV3N9moT6wVMTPvzuyYfud4mBypjwtXz89sZL9i5EccRNX7mziSshYvCZEUKTZuNWeh1VfPHD6JGVQonFqXsmGZ",
  "key12": "2sHa5C9Tk5KgLCQrJzYDeWdVygKqTGrFDpgrCQftvVB3VdC7Nxk4dnZRsgSLJMDoWgUcuM57k9x5atZeEDKcwPYX",
  "key13": "2Sog7kQB714bhViwjk3LSwQkHWtDddZKbVUdqiAz6U4EZAPbi4PCmBErwSPLG1RjQEyiKJro2nruFBHv2yLus8sX",
  "key14": "3g8UF21vsWdHgozsRbfx3aox4nL8foZyHVUwFec6KodkQyJ7fwDARLpX6e6JWpB5YQ1PLDhFqyJCFd8RceTLnG2u",
  "key15": "2Ei1CZSN1cmJh92TXoGuS4vYrpbnzCTwnFgoaWooCjZjSN7pKCtfvFjB2VqhuUtx2diPLPfG1K4s4R1gv1HovLzq",
  "key16": "3dac4JQQTaHJA6E8oPP5F6X95PaxGdFQ8wjzhtdz4jQv81JrfPFXvKY8d8tjTAjgRhzEX8fiS2j1uZ2jsq468v5u",
  "key17": "5Ch2KTAMu3nxPbqsVtxShTLH1BrTMUNCqRtYHwXm8nxmQ6eGHDJERrvqMRMNzYDJuyJkN9aoN969cZueQqRukjzV",
  "key18": "4tCJA2MfWQJCipAeBHaqA83Fa1oAZWrQrU4NKcPL6kCwEwnTxJfw42Jboj2HgKkfoBorY4UWqKQPL9tyz2qa1k8i",
  "key19": "5irdDTKmtScf3Wat94gFfNpHkPFmdyx8DZD8NjwAwzD2uf4SdsDBnVMXafAxrUfd9zU6jboVh5pHAGDVi79W8pvD",
  "key20": "62caCdKeonPSZHhKfqsiknM6m1WhJ9dX2Jc7WXoELaqxT5cTbV2WoMYyP7Av74xzNscLCp5zi5xXV4Ac3V6vLwuG",
  "key21": "5wzBJCrww7EJZ7cEqCUPdRiPy4G2NaVJZ5BUkwUkbZrtAXSyF4GJ1RdGYW1aFJ6xRfEeEHCCjFQeuGvLpN6uRhQm",
  "key22": "4KFBahyRpekoEwTXAPCcTazi1JhAHz9o4TD8rjED7N9UoYttmeE8Gwy4qXzwPpgcCvtVooC2SFshBLtdhVsZXiaW",
  "key23": "4MUrcrWvpKvTEH1LXwkyyFF6ZXkwqAq7zAfcjJyze6PxyigRjXD5C3imKSFpwcHDQWjn8gJw5TJ18qnJXgigJaFG",
  "key24": "3Z4iwis4pzUbA1FWiG4BjAu3EJooScQFdecn2gF1Q6va9BJTzFqZHQEGTeYGMMqDDxPN2d7GgKNiuw6gpzv8mV5C",
  "key25": "517MdhZ8FjvBuSamS6TdA5VpyTZvYog2S1aH3nQAg657qBKgS4aiskTXYcay8zyyGgxciAXNGWPUFe4taLJLduHy",
  "key26": "zfqne4AVoRDEDMxZ5djy4mvKG1Yca1NYepSm6T3LPdgk7bLQWD6Rpn1aJBVfQpDVkrwrkUBJ5CAVq7Tn88BRfge",
  "key27": "3cLo1JsHvfKnwRyHrgoVPmF7m5oVAJV6hEwog2TN3duRjw5maVhJjqDywnxReAavEfYoU1eLVXXmsFgPjrzcGrni",
  "key28": "2QcwbgU3sdCbVU2ZQBESg44Lr9aMihaku32XQuaKoixAam6BeYwEfS8pghQ9sdW7GkpC5mrj5fXWAAXqowm4NpCa",
  "key29": "4QUouippQMKLDjpnHvaAdR3eeefQvK4D6AySLLxjU4m7oUihkpHyJGNAFqPxXzdchLrE3fdceeYRze419pgvXiaC",
  "key30": "2uiWzjqJwUZQaZ4Pd4khernmaEeCpo1hkQhYF96CzdPQiW8StSbmSW1yrTUEb48tttSP8vap6oJkA5QbjhJjtfdw",
  "key31": "4FKysFXMmoUDJbabfYk6VThsBEizKGEBububWDGwyc9ETrVZAXMUF7up7sxYbRA4zi5YKMm8zhcDqfUt7CYHmtki",
  "key32": "2WkcpzFq632GsyiG7fiRkXGAfQByoprUzLob2mijhsey6MfF5ViJ7vCWHXWU9MayasqsBicgxdX6st1YmtaWboeK",
  "key33": "5rx2N8C2g4CNv5TPENgeBqrnJG7y9eNMFNCC3NtcC3AgJL7CxUzQQJuiTVTwJCAcvAzCCBZsAa8svgYRu4EmgS4p",
  "key34": "48edgYETZzed9f3kgSJZsS4WLC5Sz1C7S7b8L2aLiKbVjVWwLeDgUfYATUMHbCAe6p5fGF4Ywcy9pwx3DH8GWW9U",
  "key35": "hZHiA67VxPaaC6Zfj9mMk54JLhjuVvvvCZg2YeZSyELVZfUBvoACo8QUnpjRjQe4Qnio1tKsV2Db4yT7qmTAmpc",
  "key36": "3N3nCFRnEJkuXhFaoMK3MZS699QkdayVXfUWQqxDsfAG6i7K6oCEi58ffnThKNa8FBftkzinwzMWwzLhwutT2dzi",
  "key37": "9dEYvZv9vSoVARXgsf7ByuHyzgcaXZvHKBDWPnvs4gQuJUsaW5BQLoAPtPKhYzBKiwRvTa27KYWRXpc1aqDAyS4",
  "key38": "61mJ9p4sQW3U3AthGD8VTYRLZvQVPF3Ln5LsnHUg74K4o8TA7SZ6eXDEcZRco3osF5XXf4xiecFYJwTtQBUobpE2"
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

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
    "4zfjdDxLsmRWoQ3MurSKz3ytdvbbW8bYeUBVAgaXkCxkvFKPDZrCQnCDVjt3wnSYTc9FZFvqfpkZYFg8irZ4tFdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rNoP8nj3hCSfxCEGJpTnfbkFQH9zhB7iC1jABu4pL2rcTUWa22LXhdz1ogWW4dwFv7vnuKJsF9LwWRMfjnhAKd",
  "key1": "5m23xbG1E1vdKd2T3hv1vTqvjmKqcvLsKrtTNRn8heSV7Gv4fsnVKfMet9zquZAs2GBS7wWWbEy3w6r9zJNKygnr",
  "key2": "5sYLidDbnfgjjqXxSG3hyyDzSJQxHHJajaSLvCCWUc2fKi4qmGoSCoiTTYYwZpnaz9LzuA5qR28syNmvdivAQ3ZW",
  "key3": "Bx7akyjy3MdTQfE8Hp1kFumBeSUvGjJSzGp1ZRaRb6Ht8ZmpsW5jqGHuKWQVshWj9Nv1huqdZsvrmX3rr48SGC9",
  "key4": "5QUWzvHwfPJYyRNzPLtjRGGwVpUfNifx7FnKn7vaEfzza2afTfw9rHsdsv2Avunu4La7PEqNfT1qtMvQwBYHCzCp",
  "key5": "2d3BFpoWkXtbaQZA7Zg17zfXjehZsuPbkSV8yayf9sAtm5d7vHPJSXqjTRdeYSmsV9RMLq6yxgBHTqjCQGvuYtwa",
  "key6": "5QkrfMNtvF1q1cFkUDFjsibdy1P6aakwHE3BTt2PCSyevTkPU5QJqArNbPY6geZNEjEy7Wznv3aSbNTz5PFBajS5",
  "key7": "Kf6kjZ8hHRwzJbm3bbakm7Lvwyk7s28zaSrJY9YqaypS7KkzD6dV8QuoGJo1TsTh1rA1Bm6HmLGojbWQg8XWuPJ",
  "key8": "3GpvgCvJjHHRdiHipF4dxC854fnKQa6ERf2UdQgiDy8QfKFfcVb5aCJYpRWtHJ1tknqowz913kQeLKCauXBHbHjQ",
  "key9": "2nnQCDN23eQmyqnwYzvhxBnwUGd4Xa3nftq1yWjey9mEc8TfR617Xv8wtp2WC9KK3L6RHexq57oppffAx5eUYPVa",
  "key10": "6yuAPf6NRqAiW2L17KevxrKC5ciTGpWmptLVEVsch5qqXP1Fo8Sy7MBcGudHR4rrRgAKF9X1ZT1UPJQRAYrgsot",
  "key11": "B3ChRrwo5hXJDKm2ycjQ8Wgnx65KLbQ8TH2YbZsTXkM5rBawwDWVZM4SkCFFSHHnyMyU28APAULbaSuKZxNKf4y",
  "key12": "5enWjqUrVQcQJWDt4pWTthxYUxjmGU26m8VLzhuH9j2mKMctejdaQs5JuHeMMTeKMRP1dTCqUYE2GcDCLrEzTgJi",
  "key13": "5wQK6E8r9KHzDxABuXrbrYNnNPkaSn4TUpQD5p4cadTAexTUZqXSWESF56fJ6vowHn9BQMNqDEapQw5s4qDnuZis",
  "key14": "2vDP9etFeCU6kZh1Qaya8MY51VaVn4A4hajLBtUJmtsfGDZjz8WrTXGKQmo7BcwgNnMeTBiXk5Zt4MZZRi7o4hcG",
  "key15": "636JxPvBocyYJNNaADwhAgEymEL8soEK2Lf7TSk8evm3jhrf2B7BP45YhFdWxsjy3ANjiaGDRYy8Yt8iAnEUsAwN",
  "key16": "3xEMf7yK4h8KjUsZLeyT9erutLMw1pCdXkBKb54QmF1L61T38qLA3T4q6VEr3izkrZHvqR3syBC3V9UzAKep38wJ",
  "key17": "3s6gvVYsERW5BkqDPnGjomeRdBD3AyGvDXC4A8SFxkYMCK8XNAx3XjMdbceb9wGMPabDNbdVck3mK3kQSF4c5uQj",
  "key18": "gjph2cQb9FmpfEAk5j7RNS5cigLu2RwwMeDeDgx2rhT7t86TC4dsQbzn9DthJxri7zyTq67MWUNZTmS27ZDY9Bv",
  "key19": "35wZY4BDd8PKejZWPdiqUkCWp1xgEzvaxJMYWcdyTBpSL4DYpqpXJkpQf6fSuDZUNtH7YFmmcvufqi8S9X73k7fA",
  "key20": "3pGCabiQ53SN4Ap8yqP7JNeu1uNA7jzKwDKza41HE8kXNY72T23G3q3o8tL7VrPm2S6ow4Ug2uebiif2f9CmKsEH",
  "key21": "SveD86MoeyDVFqtVYuYq6TjzgkkzYpr2miX2MLYN9SKnyNAQLFneBu6MhLtwG1QycDYovHJG49jvFdo7pMY3QEb",
  "key22": "4vvEFkNhnND6emPBHJczT95pXb4UgqXdodzvBJNwGTGzq56KUeE6CLbifwrAyZym56F56bPcLA6NM46aUqiqKE4s",
  "key23": "4MRaxMq5cRTqaXMQ2Gpx7AKKpRyJQ99rCDGWGrzjhFWX5EhBjAEvoozKHYEVp5vNaUHn7R7u7pNJH6dmiqPrqtAY",
  "key24": "36n2qh4pYrheBjPzUUj3DAqoosFm3rsoFkoSg7nf16kUKfpHpFAnyZU9SQPEH5MAaySGAQGYnWU96yAqkgGzaCTq",
  "key25": "4eknSjNr3avKNPsfem6JhvH7EnZ2gjRzdwkY5S6Fiz6CtWfodgBADjrKrYe8r94U25rG1qLZ4qpUc4j1MF6perus",
  "key26": "2MwKzyUBmmHzY72xXhQQeFyDTK5UwYKxLy1iH8HkXfHZZ2P8H2YavZEEQ5jK6k4aVWNHgJEz8eN95YarZXHus6sJ",
  "key27": "8cScKuN1LPutLuDVPZH3hddx5SafPtxNdSpMpSpPqm8XH1pFSwZSUNSWJd75c5qJye14oh8MCegcHD9fBMLUZug",
  "key28": "6686sa72Y2izdhk5TL414ihPmECDSfgzyeHWnQBJFG1E4Skg5VGpUfeLs76SxgduHBxe3y7mE6Q1pGeSP7cSFpkv",
  "key29": "5LER9oNxTctLvqtt7thqZbsrm6vj59NFva2PiJ6SrSDp7vefdeY8KBAoVQuZbdFQSfh2tvETnzSd9oVdNRZmPmjL",
  "key30": "3bt7igktNqUrDer7Bf4BkwHBaMHXoTS2gKcMPKjXS1cN4PP2cXdapJh4aTnVVPNbSBtFJErhskUxyTaBo1LLuUNg",
  "key31": "3g4wpi1rdXjKTGjNRit2HckZVwAFBN7AKU2oeVDJDVhrx9dWDFTw1YHxJhQVMeCPDVSndT18Mhh6BwvBd6QKTCcr",
  "key32": "HcaJWPZcfQYU6wW2oJgKX7uCZSighoypP7ZzRkWS37yy6vm2vUUWumTZt5VZbsZeUP4ms1fifsEhiqLb5EFotQy"
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

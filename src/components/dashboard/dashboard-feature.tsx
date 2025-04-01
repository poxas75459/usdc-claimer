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
    "q6tXPbeYBByoeVVEMAwwaBfvu5gMHdFJiGdhNVEVokeQNuEuyEhQAAp5VFwj9x25VxoYGKiAcA2DgLn8YSKZWAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZAcJsKfkHf48DwxEEs4PcRJGL9aaoWCkuK7VUGghThwHBYoTfDyrgfMjnNV1VxmzMJjWr8PTtdgG56CcEaWmFo",
  "key1": "3qbPY62Gc5pMFPGUvsxon3VwxQKE7nutmoaeTbwWS6Ei332YyLXoVc5xb3MuuxbtzgPxDDCegZaqhJzNEPScB8NB",
  "key2": "aFxt66J6JhhRRA84TaNqFBs33JmapZxV3SUhMfsYBv8qCyRNmpohiJw7oZC25QmFSbM7sSf3WmxvFc4jj91enWX",
  "key3": "4j55Mxwv1tUpHXvUEBjTDBSiovzZGErQkG6E3x79UbFXMZkisSw5NWxTEyJd9V89JZPBUuS5d85vZ2d6a7M1SUJx",
  "key4": "5SdWFBHWu2QJeUukwbzRR9EAffNpUAWA1qY1o8P5C1Q3dkkHUzNuWZpVys7yvdj9i25KYovbU6esvvaw4SniiRWt",
  "key5": "3p9vpiS6hmo8iY2EuQBt6oK88f5YwSvN5GfXoKQSbFojq6PBf24MkWT52ccZi1Cs6QnfSt9t5cWwcutQui57MYR9",
  "key6": "YNBmrKbqgfbZf9kXD9zeRoTJgGP1yBjPmzCpCf3DFFnZuFqcPrieUNiwP6eCE2fzbcCBAotaxXZpuU59w9vJhi7",
  "key7": "ynMEuGzgfs2uQjyiyTZeBJvYt2nJWz2HvDUSmdusN9GHVtDdHtbfH8G5DG5AYvFSVp9vmix6rn1f28gRFUYjoB7",
  "key8": "3y1tAGd4RRGiEuswqM7GuxKi5gUwmgNZFf7chUtsnMebiJghaSRVY3WuiSPN8RFcKcRL8jJard4YxzTwBBVFKB8G",
  "key9": "2Lyf5hGJH4VyHRZnEzrbLB86WYcnAYuksNfS5EQ7EU827oGi4DV4HwHMnoKPL96FhXjrgCe6HUh7f6bSGh88gZ2f",
  "key10": "3wZeML3ictJDt8p8oQfhLqmq9bvVLpGH6DXnzUSfU2jpifYexNUwug5LvFcN1242YFuStQ2kLkazYdAkq7AbYg26",
  "key11": "2DbTjEVCL4KPYRhMBPuqrMk3hAWKCTnCFtsNCK6PW73ensWw18DVhJc8MGa3wV6HQ4rQ3zUJ842zAZM2aH51rZYw",
  "key12": "36EMAoS4pwkU5ehHgJiiQ4Mzye6n3v4nQbTZCfcx93CkDEqcnMDnQGPhFjjGoqSNWXCQ7QaifB9R1RbwCNy8BToE",
  "key13": "4qkcvgtDFDRF8kgAF2j5Y4oQh21FmQTWjh9UXa1HMziivKdXjmnKbvi38AmWbdjpLi6BXgDruNv8jASDzNxVsJHy",
  "key14": "3jPEms5bAhwWGqeWNK5kdEpREEuTQBT1E8igtNPBYzX9cKe7SmGir8VDAHuhm6T7Whrs8cVW3vKkuHD6y9XQtWUF",
  "key15": "qpncrBKbCmqH8Q21o7NVctTxUHaTDJGKL6JoSEBCL4DNZc8dioVsk4Y1ELCQTH4pfcRhzcu69kkiHmYAiXJC9CX",
  "key16": "jxgCDY6DkcazcJBZc2J37ZvrS5LRkT9Pc9yeuCxqBVep5GTPpDSeVFrdtgJepTpuSnv6TU2ZQRfJexF9aL8wEQn",
  "key17": "2De7L3ET2fWCGPwZ4xXCUmrnrYmtv1J72u33n6eDXTjsLJ2eTyNNbejWG62Zi8VpSBMVVCWcTK2tDPjYB9oMrHDC",
  "key18": "3M2d2WZMuPRFVqpCphNvFdU84UjtURJag8L4sr6ShmTPKc4AgzoSjNK1dK2oMX97D1FxyFc8UpfFPDHJ9sinFzeZ",
  "key19": "5L2vpNF7fJWa8BMV5u2jNf5caeZJNnXM19xeFZBtAZi86KcgTfk1rqErDE8RZyrfeVfrpqKTmzGPAbu8ubcQ5puV",
  "key20": "3f6iRBMVNg1xKhwCxJUSmif93b4oaq1S2rcodagNBFn53vse4D8N3gMAHZ2bfeLURz3wo7q9pY32HTWfYhUUzw4o",
  "key21": "NLjDLgaZc3KLVvSHeNBhnN5qYtTm6Bayp6bnpLMq5s7wbLMr39dmPzCK529vu39J3aUwzXY8XUcg6Qgioq1Nu8J",
  "key22": "3AtWP9mZuDgiGftKLQcaZEAgHwVBcL5daQJr9FN9xbuBHFvGQUAnpUuNgFSiCaPzrxHP5g5HceAR5sG1jXvvxU7e",
  "key23": "3wATNgvfH8xMobiNDot3iqCoyhD8BbRqqQcw81AACrTypzCAY4v7eLhXACjZDGioLQFkksLXHfS1oVniEHWa88XA",
  "key24": "4rjnxNGxDRPstuy3NdcZ9btfYheT9tHmgByKLreXmmLGf3TmjeKwqCtiN2iEJedmJ5RiHaGsM935FrYGfHX9zehy",
  "key25": "6182PvLZYYwvMum1GH4cAZBYXvCfbyMEEUTJV4x9ZEeRcrRU7Vs1HA5n76Mm9qosiBmWeXJyWAHQMtR7MSsiGEHf",
  "key26": "5W9f8ZR1LpH9PeFpxNvxeRqWk8EJuoCRju1FESrkE3uNvEnaLihA8fQrqPtNeWVBPpkHxNBz2nQKdpjorsYTUm1P",
  "key27": "5mn6k81Wxw4gLyYnucrvDxa9vbAoZqrZb2FNWZ4EG9PDGcRBXm6q5CParzFjWrDYZd32u9uVenmnKokJWKjtLzt4"
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

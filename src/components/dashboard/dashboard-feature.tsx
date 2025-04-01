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
    "2aYBssonpSzbHetcGfeLfEKiKrCPamm99GcbnhNACnZ9LDtZS2qAviqMCMbGTiZGKaamJFdFjDgojyUP3vvXdenf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubSA78P9SuaQfXT4SjhWf5hRmRJW5Sozi53nUKhs9GoHrCpHmnUyZQTp1NWFHRyQ3jDmfA3sdsdrG3GTabQDMWm",
  "key1": "nN2XtMUFjqm72uybEak2YxB3mFP7o2tiU8ULCSipBWRe7fRnjamcvyzepmF3DMBMh3Gc6zUFgHJ5r15viM3ZCuS",
  "key2": "UXeGagC3pwMDC6GzagniWfrTnqRxX3mCz5uciAMD1P6F43PoYNZRcXiCmmg2vBv8C9kFJ5HuexDp1xdVJdogSUW",
  "key3": "XvZovzZw5w7iaUj1AH2snsYUCf1iJPBi1yXnNzKpVommFqztFdXJD5YCo7fWp3TEr7ScyxvRx8Z1LhHWfjePqCu",
  "key4": "29vf3snC1Q5MLDnSuNbuZB2DL7JLJtJbi1ASEUwpA1vmeTJuFT4QCAYzy1FDkbEjDRD2Qdtsc4c3SsC68pVRTNbe",
  "key5": "2mAoegFMf4yaHkfvadiJiKMLiYistRjbSjtAgBV39VKRk7bDjk6m6DV9sc19rXk6WSZZQbJNm88FfVcXP5aK5w2",
  "key6": "4ZBgjrgHXiqVRF6cVv7RqH8QpQ4RDM37AkETagkfjCefGPov84e32cpg5MLY8Qwer1qa6XkjV9m1dYmveAZey5ue",
  "key7": "x1kZSdjSRqkrHKbR5pzC8YNrnsCzy712x2SPmm9Pbqr7q9N8mwSGYV45mwiTNBPvM65oNRawtQsu8RkJozLLuvi",
  "key8": "zHGD32P8cSgQtoXzHDt5paQyEchGewawCUH4g3bynmnpqVYyo2fHXJdD5MH6pVGF5adJyXcUZRYwA2bkS4ZZjZR",
  "key9": "3hs4hPBVUjdqAzC6YMQ8sj8fKb746hnHFs8HHz2aGxJHLRjDwtibuJjsMM6HKXjbWVjVv38zWY82fymm5a1RHjuX",
  "key10": "2APTZQZfHC4fMv9tFgptN22xgCiCogNh8iXfV4kzt7MgMzCkReBgeUui6wL71TqAFsddui7BmbzJnfpBwUdwJyJH",
  "key11": "4gVfPkQEJL7sc4CiMZmfNz47TWTdLRVo5QntsqELqdgaAh1hbEAK6ngFbmk51MPhP3CJZqnEwmdWbb5CaBrL7XeX",
  "key12": "3FQBZvrN4VPKrw6DVwB6k34numWV2Kvec2wycgXPSxH6HQxQvX4TmaKgwD2XizPDaCQz1wdCpepD2BAEnkBG1vJP",
  "key13": "24QYX6Ha9tp2TimHYQ9hdRg7uJFsnuk9rc4Rvozr86RfosW2quAiy3TqQzjX2UbEHEaHcHoZ8ErQ8TemperwHNYo",
  "key14": "xYppSoZ3ro8f6koGa7pnz8ZWhAxf4i6v8D6aT9KErF1gYEmksaXPiBdoLsRsbjgXqzjnPwAyuXaWc3RUCKo6oNq",
  "key15": "4UWXN8szqZd3jJsMhPRKAh8ZoGBBkviij5v4yWYGjL5GxiMymXwLsmHnYEiifmYaPd5AG452iMs8A7wekQGWbLhm",
  "key16": "31hpAU53aotDFMfUbyh89Q98rnSSSUzDV9BPhRU6PpxWkKCgZKyBV93E2dmguB4229NbcBfy1C2NugddFjar1oC3",
  "key17": "HLQognMocaFQSZ2aiv6VfKa67jmEkDu2gtfDGhYbkeLz6aYXSTrqtuizQoqVzUYGXFg8A3xMh13kF8B2Y4Vff9H",
  "key18": "8WSReQdo4rr1nZnnL6BiVax47guvvmic9J9gvjFdPkaUAUb9Q9tET622DE8u3ua7abhhD5jw1SvfsEKgXocjX4j",
  "key19": "266ptxGk1fbVtQnL7zVtUPYeUj8pf6H1hsqqtAKWo8Bb9pjD1bbPWEszXpMPx7gVxNwb2pfDuE8Kyt7Fqw3HAKxE",
  "key20": "3PFexhzUr8dXb4zN3MBZ24YQ552YdYzkMCQ6C5CAR6bkqVa5Ly4RNYG4AnFD5EivoRNQz2R9MBFpYZdZC3Vjd9Q7",
  "key21": "5kZTwDAEfR4qGZLzkbpmUSfiYegPa5Vaxb7X78Z97cc8f3qfB3gCxtoGLcKFyd3yUWKssD6vygSJPBTSURFvCDh1",
  "key22": "2uJozTYVqcUFNH9LipNrcMd8rHGJqH1Mo8EmzbLvdDxW1oDvASwywbG3cpCaTXaPf2Fa24xHXq5X7PMPj4mhgrE",
  "key23": "82AYsQ1QfZVE7oHaGyYEWDYJxMxAizZgxv7Vm22LqwZXVpVxNMgpVXyo9Wa41LtoYLGGeYHaERX24aGq2gtAMny",
  "key24": "B2vqN86NEiinQtTt46NSqPfEM2cbk7TXTEBH7dmHJF3CYCPXZtnpmHQ1hHnzipSiHvbdCWAGXMRX2pUq639942Z"
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

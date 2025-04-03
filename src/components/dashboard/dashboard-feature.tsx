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
    "LN2XF7wxDM47AzMiuaaggeSPnHDCnJvmikJVAYJpvzyFuizSX17J2RLFEHXwYU3N2K2ymeBoiFJs2YL8K5Jjwyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P2MbTHnAv4FtYJtdoGk7hMXfJ7WXS2dpCha1HqJjWrdGDoKhDH29kzaMxKqCJbE3Gqj9t8eZMdYBNc3R9H6PPqX",
  "key1": "2ER6e3pB8bimyqFRC5o7V1x7sz36we7N5xnkTLscPksK9E9vCHWj3QonnQz7pKJufgd8ixEYbpFUKWJjXmsJ3R5t",
  "key2": "qfBxjAhqmB9GY9TrFD9f17C77MvowCXaE9Dq2vMqbeEPUeVz8gdGN2pMDb9m5BeEDxtFpJsQ9JWbKwZTaEUiXuG",
  "key3": "2kXNeFuMQjpWq7v1mzAZSYcubaExdXXAUWvWrPBiRQLDqwxTZQ8B9GRJvfiuaPDKQJbQE1EmNjaHZX9V2VY2i1Sc",
  "key4": "5yHt1iZkQA5j4yLCevZ5aj8KBkHWYzVBRLWqRbLv58AiQuEowEp19RuGvht1VdCtwjuP95rTsh3keY525ruzhsvP",
  "key5": "4puuMW1aHwtvyryyrfqyxT15mcXkfHuRb76EM3Fp9TBaXSNWAtaWeescrLJDeFF4pudQymSQ232SxTy7MR2oxCby",
  "key6": "DEQEF1HxwzAXs7xwCWSasXcgcTnqkfDXU1DSqX7cbGNBaGEWdRkEduE5rWQcvXUdrfJUeNCNV7Tgh5H3kgADWLK",
  "key7": "5dZEGXT1LNwVKtNVEmro2dwr6uGiYUYpZvb8gK7gNscKdpuReRm6VRm92aGojrtwk2a9x6C83mKXunatdtiddBaQ",
  "key8": "5QH8NJzxLba11iKcxrX5C8y29DUGcyNipTJLazxe6nMg44TvizPnA4Cuwpobp7jA61UecjpRdYmExMZY4wdc4baM",
  "key9": "27Hka2drfn6tHSiFzwbceE2sahafhHWiPdeGgqEVEmNA5aQ2si26tCf5y6qxBd8gXBLR4A5DpUPRp8r2VjGfYk7D",
  "key10": "5gUvXXUbhBP1rswW5E9gazbxpzJWMzrWDf49UTHPJqFsgQq7BrFpE8mcqSkAzgkJGWbaVVXVKgoXgD4vr7KpXLb2",
  "key11": "4bLWj8cZ5W3xe9nogL8vqmp5EQEzA79WBjKthFo6pYGrZJzLWKpQ2316gNXoSdpGURgZbqBMjcedmMsVHbFRe4Bk",
  "key12": "25BvEB4Ya2tF2jqcwFvZNNrtxqh628FdaXFzaLCA5CzDwZYKc9HKsmVYreD3U251xKyQxvwYqysriJdrfcHmTLt8",
  "key13": "nFjJb2mWG353wjyhgcVvYY5GY5Vf9tXA63PT3dbMz6YPuWku1cu771yiEcCcZ5qrhkPEZrPfR3XGzzKW5GAHjhD",
  "key14": "5AcQTshnygPUAGXKohzPwWaQxdJDQuebLcavi3sLXb95XAS2txuKovVYK21X5JvfvGkJm5u7Uew2f45C7SbuSZXe",
  "key15": "5KWFMrgn82j5AaGfUXZ4SMmuKn1rWVdrWXkcbte7EGUXgu6dBVWpovjbpJCLpjYUoQh9WvZZ6vv1QYEnAT9uthJM",
  "key16": "3jHFEawUn58cvRLSMraEqUhbWR3ayUjfuvFzMKyL3gQZnR2CtfZ2drkqPWXSLJpV1ZjQirKCknSUpc9LDai5LUUN",
  "key17": "4SeR4ahMFPLLzAifNEU758Ed6ekcsCRjngrfJec8i32hHWECZSVj8s29dtDThy4NM1USWKvXbjjzUedUCGcHkDmE",
  "key18": "3ed1h3xQkmvfL6r27V87Pvveu3nQvEVqcQ8QTQygqmj8yagxZsnyePWUuXa4XJQS4nc98iT47GMdV6YxLtFPZ8zi",
  "key19": "vpN8yEPnkBbiHURJg6HA4iRv7jNxk2DKb2JQkHYxLkWdsjYdYSDoNZQigzMw3UdMwyCpjkwpNYEF9YF36mzqCRP",
  "key20": "4ytaon2EqRkBzk1fZfJVtfMewZF9JXYqpvgCt18XGTNxCPdMdcCM8jn6WiBVdgcWWPVJ3zkx8iTHLMYEiYxg5WDp",
  "key21": "B1JrzX22fSjG8koZoHKiJLGahT59SHi1ck3cPUosk5Xp84iaXpXbi9XLEVJ2GA5gchyxHgoRmjQ8mgkBLevXnVW",
  "key22": "3vXoWxWrJa6fhxvJCbgS5GAxesyxPpRiKSok5juHzxvQfoThHYHRtLZ8YcopNpgn55oFrXk7ZnjbzmppkzbLCvCS",
  "key23": "4f2cRRd7ULnKzBK7uPr2hGR9HdQ7q5toa5fMn1sJUPPGK5WtaLA6fcEaPQA9kbe1hcLNr791Nfp2NtUWbYJeen2w",
  "key24": "4KXJ8yj2yqHz3giLPQbrU2ba7SKDJPaBLKAGLNLdHrT4YxEvvbECoD1xQtWhJRXov5SfhT8oaqwqhNG41FfkyiVp",
  "key25": "2PVsHZrfRWAsHxkVwfmTnHNwdmpwkgUmTrAg33GSE1v8H1NMjF1UgUiyoRhtvRjwgT4EQvcFKAvgTAcNz8X5UgPT",
  "key26": "2MmnveUeZtSbjMoYyxzrbpojMgptjAap4ALC9fD993fiFktH2hTeQPeFQs8nrT7fDrnzeCjTy58u5ZQPNZqPM8b1",
  "key27": "3otTcE1TyDkLgdd7x9J8rAVikrmfKDQBvGwqXE1pnS9caep9vSfLWsMqQ3f3fvFbuAhhYPmAzvxnEbZQkB9g4ENW",
  "key28": "5snnhJ2qTxeGmuMjfeBTXYyfh5q2sWnDodLSqivuTi7eba144R4EsqVwpCqxLUhmMWvJqsHPyt4b7XSg3e4AqsMw",
  "key29": "4n5Z8DvCiEuGds2YPj8KyVQ6VHLPAZNhHhK9xbZ9YXh4YUSQ8ahqQsKc7GBcXkxtPH8g8JPgHfTXQwQHRg1JrMHN",
  "key30": "5BXxw7v7A4DVfywY1nXK6o2B4oSBgSyQfETrVQvXU8A6mSGxQ1zUyUqA2qkAsW9UzdsR5raDF1SDQ4PUSDumrX8F"
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

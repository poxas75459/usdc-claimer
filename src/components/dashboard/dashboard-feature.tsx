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
    "2rd2JLdGkWG5RVAHAmfwAyMw3Nx7j3jPYBHFrca3aADEtXrvLQVHFmmKJ3qnLbXHJKEEzLz5QjMD5ikKp9x7vNEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qvBiyPBE6Y4t5svHCnFRJexiKB1L881rMohJMHKdtRxG2qkn7x4kYfryqXk4o9E9f6JTAqVRng1u22iU6Wf16N",
  "key1": "2PMA1LWBJm6a57cLt4su5aQup9qpWYAs5A7VMyDQ44RUMuCG9Gsn1sVBgtiLvK2aV8RNwG94hQCjEDCxnn3e6w97",
  "key2": "XuNSH5iR5VZ6dTHe8Y4g219ogHEFdEA7x4Z4EmM9wZMt4zFpRSoLCaUKTsTAPWHy2t6xFNEtWQyvh5hm2iU8J47",
  "key3": "4M92RCRtyNU3hc1BEr4TFHGkL6EKFr5qukN98Vp7Af2kFDkPhdRK7D4zSc5aTSSkxjXJatnerAkSmfxx4fMkh51N",
  "key4": "KAgWzB1bGekPYG1tKK1hYZCkbEnnidThubf7UVP5NMr91RJ4mBDoCF2nhrANCrqz2zCHf3jMcvYYo4PmqGLvZ9q",
  "key5": "4x4vxtWPjjpyfT85MK6xJxbFNHe6Q75AyPhVTjLA1UcW81m3KAXA9Ck39vgPL2akB16kdBAqZ7m4Ei7koqyZhkDU",
  "key6": "5ZehzPxtNB6TNGQUFVy5ZQZpJNiy1pLSFsYptowtPnhFoZwiZ625bAfNbU2KuyrLdqVMLVPkmA1YoAWAXs68XLvj",
  "key7": "5wY5Kkz2FHgakCrD2LKPkMburGR7dWN1mApQbm9VzFw37YuZUNNvzKBXfn4NbW3xdHDVS1CtD1zvjkEMtJG3XV2Z",
  "key8": "5eG5K5zoqybpj48CRtj5MAAFpgebPJhTPpesaMP1CTum7GgbvCnk8sm2mHedmohMsht532UyEg2K1hruww5fYwo",
  "key9": "3f6qsjyT5nqsJYR9XnxsKwAs34yux7HCJ4P8rYyBAAp3SxhC7cModF1cnju9eaLzbSVW8qxm7HE6gxs2fP8pXSh1",
  "key10": "4qcEJ3L8xUkc8k67pq5eXo2HAqRVkYLCWMy6T87jSf6VsYDnT9YP3ipBJLfhakMPiPFsTzywt5SAhzZneXtFj1Yu",
  "key11": "487j6AyE9TH1rEmhiighqnaWkps2miee8oMaf2MxgX38bwmyGDeGPiFgPBaCK3y7q5W6CuPiWoJjoDUm1UgAoDzz",
  "key12": "64mv3X3ChWyVTVWazBiLAgs5tX96YHvg7JkRQfDZcSFmiUwMa2531F7D9Fa92iyHzip3rUZ7FrY8QJDeJi3Yzbgr",
  "key13": "5rw6es8awv5HiE5mKVZLekFsviAVTdMzk5EZsyXEJPhw1hTdzC5kT3BeS8JrdWeWs28CADH1Dq3PFBJzjZ4tTn2h",
  "key14": "4vSW3EApqifjvJRSy7huZwcXjpFHkdURZmnFcFjf338dh5UXbzdYZERjWLPtyQLCDQtxnm4Z7udK4RXXTRQQCSPj",
  "key15": "514A1R6CuBTeNF6Adzn2UVTKveEMpMD1ZEW6a22jGTS4ygwXwUWxpykmsCmgkuv4W1jnF7gB1rJfph5YLaTyJiBF",
  "key16": "uGQEZUxAwZ9JRWErbFWVdAq3H7Sb51mM7hScKmLcZ7i9L1g5ug2AnPBFjKdJjUfoTCN44zW7VDbynM83yXa9i57",
  "key17": "jaPpYbaSd8tU6yRDLQKPKCjM1aq1gdZkUCL11uj1yJnHzdVbe6Mtg1UNn69HJge6FeEtsqEZaMACenLCWhkY6zH",
  "key18": "2BKrMu2A7q9nkaUBVkmgDWeVFCgdDveqKsZ72MhaBXALsg3xMcUzjFmdQgfYSnZmbz9Efs689iVc4vQ654dUN5Se",
  "key19": "2viddoZTr6gjD77bA3uoLHEnAvi2nMfWLNC2gDAQPSeyLuGKJGu7f3JzjJTDACayEbTAUSYZqdWbLhpdmSyNMvbD",
  "key20": "22RqPFcxb2RXKFRz4qz2dVQ26mhkHi17sueh5jqAmMA66iwG41H7qXwZ3atArqTbbwP37gRkDLpTn9AGF3yP7pMq",
  "key21": "52fPRCBtZDdxQ1hN7auAUfRPvbN4gPMyZDya6SayuNY3MVca6mkxUeG8qSZ94ataEbQGM5y6rmysbQfjM24aadmN",
  "key22": "2fpvGXq6NtBdDJ1ZQHUSksYhvr265aC92EztoGWPiufSXbJHEFSAoVGKuVcdyhnfU7Er2RdwtkJfxMXAkvuyNfRH",
  "key23": "21N4UH16cWzi8VtLzBfPq7izL429sDT4Kh3BkrFcWLYTYz6RzDno6FhRsWacguUveZ98VPvbLSD6fFXfnr5nWAVp",
  "key24": "2aKhnWM6qwqvUhk1q8BX2gkJ2U68eTcQCcSRUu1T8eh2x4sqHwkp9jxGeXPr1DNXzFsn6h4DJKrLxzrCDZfU8dk9",
  "key25": "Mwn1KEhBWLt9SYotMq3PbbRPmvGqqAAiN9R1SC4A7yfJiANGvos5mZtnYKGVi9nJFf4QPw3Q9zow58Mx2ZJvL8K",
  "key26": "2j91JP9Pr5dH5t84tpqUmF72AbvREEuiRVBVfb8pYnrxU4V9tEPiWDTcDeyh8EkTjyFbLy4v1TbPS8U1vdt7zXrH",
  "key27": "2RtCSVVEpsVhVaHiD2TVmSvgPXkCtBS8kwBX75fnueRnkXfCgMc1kAWyv3uiPwj8VH1RefUCNJ9oWSadNPoR4RRm",
  "key28": "2xVYPQmGsfba8HUvcH8hec4qNXNkJyCNcZVfUN3tbq88PvXQNF9hhRsw1jF4uMVLjrQanKbrQWmZKGUXaUi42vBt",
  "key29": "AQy5Pkm9JXiQgbxhCeYQpU8VBKqhjYY5Y4Cft2HUVq4yj42dCoWGA2EqJeGw1KaFSU4FhdPhEsynoMZXwcbRPJd",
  "key30": "2KLbuxMud5euchEAMfFBQuLq6HZUogDrNocggJRu1TQdDb6Rhz3sCG4Uc3LVMWufqjoKuSynQZEGBgrPGKXNL5XV"
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

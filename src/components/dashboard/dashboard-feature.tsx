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
    "4hRsjcJiQGiNEKCqp7asRsNkq62CNxHZcDHivZr9nf8REkTCjJWgP1YeY7n95DCjA98T4r3qXSNDcRxPFz15UwVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emNBYCx269pXFLbAQtyGG3chMoAs19kykN6GKqTR4sPQ3vUjvZVFB4WoeRRcgemUjtJmgKCJEGozwrhYE65TtkE",
  "key1": "5ik3zTJx1NCCpuSTVZWNEuV5fK92ATVnnpKxaEcj1CJBVVSJt22YtfAV32Vt91zkewqRho5Qe1iJ9HyhK7DNuFz2",
  "key2": "26La9wYgJ9pSukWJfx1ygx8mBY5WRJK4PKc6YvowQLTVyYzEu6XrBmGTyij4rfQe4D2Qz5CWqED85An8EowA6DAG",
  "key3": "5aKKq2KxysrAmNimAFihirWD42J7s4CSXJ54beMPbcTTtfgk5KShVjXVKf3J8YWMezLoiWUbapGQSeZoHHXAyN2U",
  "key4": "5b6YY3tVS97vigmNCvtJhNf2JjGvSUrTRguvBoLumnGVq2PMAweGwgpGDenLf9kXSHrvEXnBth9L3rBVXmmRsJzB",
  "key5": "5YEYqYt3bS8RiPsheCmmaVG8tp2MWG5s9QUF6dibFiR3q4QJvHSxWnRGd9GmSkmBkXbQYP7s4qj3vpTvLdzGiAYG",
  "key6": "5QXhZP1qaRTj3GEQkrSg8FpMdBF3oTrVJ7aZwzDvizVYdf29iNVZ9gr4sNTA8YdXN1hvguqVgD3iTsdd8y1XCpmd",
  "key7": "4sXr8b9bMhUcF65tLnLqzy6AzFY8pLcdXLk5QGwXTErikFyNesLmeMqxduXehFxheCuzYoUFoX4pRoCDzsFdFayv",
  "key8": "5Hpi8L7pkWTH39kd6g8gBNXc9rggEuLm7f7kXzX6a9TeM44xHv3xULDKaB3RzYUyrgUPb5WnKCBPujrCnRB3yYj6",
  "key9": "4ei6UsodoXmhVuztECkCp1eD9ygYkybARLd6JTGcD9V1FTj1vhsmbnhUL3tQBEWZ9bnupL7fyjSaA57YXA2f2bra",
  "key10": "PEV2C4tmckYR8PKv2zEYeJ9AUC3mmeASzE51kSnQu2hEYCejYkUQVGyKknCQ6nYzDZQTwEetY3qJhzwVB6CLVrZ",
  "key11": "25U1mB6wqfJWzqfqvemcVyRbm4XFbeMAmZWP9yZ7yA7WyquhAhQegzrTyNoAY46dkrrGVXgaBhAR4zpifqqkDaxq",
  "key12": "5YK1DyJ85YgiJ7us7oYLFBisd8ys4ZFYNPD9PYp4JZmrUAsYnp1NDxttMT2H7k5pFm7mxTFTyLAmrEiqLcJ5Wec4",
  "key13": "HPfN4atcnHRubkP7744YYL1RbyRTbZrih3NSmYrBJ4vJRjyFmwiigLvjhnwAQBJYsDPrywiM7hBZkKMkMYkcLgH",
  "key14": "4vc7gNF4EyJ2WXsDrttBhHr6NVkqvTDa77smm17poyYZYyYPbF6HXptQmxrt6sPfZdMCvbHfX1ebm228u9LQbcV3",
  "key15": "2hMFTv6dGpzngzRcGwAAvzQ5G4YKXLTWwXL8mN6ZhsiAkVeS9w6tsUvKsr1kjJjeKndytfRywWeFi9wTyBF2o6G7",
  "key16": "2SZMFS3PfKu371YtretHBpsCbaRJbpLqX722shLpnDSU1egWNExEkvdTuoZH6R5kdz4QcRmRUQUcAfKHCQBSXfkG",
  "key17": "2VhgNKQzoQpUq5gKAcN4rgvH4Wze2ySEYacxNvYA2BzWi3VfJERsRq6vFfUipSgGFh4ypfnKLCxHiaWm2QyVre3H",
  "key18": "mUqRCFFi7r4Nknqy6LCYpc1bKiRa8Scxz5mdLpNuRVAH9Nkgfx6NFLxpVde1ERAH1AoEgCZ4KraMEnS3p1H83a7",
  "key19": "2oKbH3CUoErsSxnxxZAAN1SuCKfrtSRcZBL2MzUUkvhchHDWjk6BeJxuTEhVT5a5CEPgJVJdSYFMCefSr1RyRvFg",
  "key20": "4YBdassRMEbrhiYY2uJoa5nw9MSrMftxq1495tKsyWGzaxTSThFrwAybePqnBfPBDm25nQG2pZSFfN7FVDeFcAiR",
  "key21": "3x34B7Nb6McH5DhF3zZRVUaDdusYnQK9xQdnFywGiQcRDdZegprEy4ERis5PdQgNsVxxkeM5R8xM37DPCcEyjapR",
  "key22": "2kh7mxkiY1YPMuWb4XC4JRkEfAs43ZmCz49xirW1z37Ls3yNLKyZied1vGrVhAo45nEviX1mRb4bKE2mVpXGxS91",
  "key23": "5n8UATRhKapf9JBZDRMRLLN8CNM5p9mG824Ffc2nLdmKAQ9y2UcqPQnCxAKSwgwbjFtK4nb1VhWNyrxEgEi9DAbn",
  "key24": "3v5Hq1vGNdFN7N9frMpfLRBqMqRvRsEAjpfMCvh8aqoz2RXYKEso2hRfDEoibrTK9xyZZCyEqK8purfipWz1Gbjb",
  "key25": "2KmrzNwJCv1QR9Y782sjFwxZdtSZDiDVAASLFHvVSus7VtBVoGypyBnuWtxUFxbRnS5r6fNVorJprvibfPtdkToG",
  "key26": "kPMyievh5xzuCq7ntrT3zdN6ubzHYTW8hzvN3DmkY9PcrNF1Vzo5YQNSRvGiAQsAWzmrfngMKH97oWVuu1mCzjs"
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

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
    "uMgz3auwZFYfsUKuFC2d6jPF3mqiHo2Qcn4g2TPGGNgSXksxmpYsnVa78M7dFJzVTgzuvERLqP5Tkf9czznmUtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yu8yGrt8JVnqQgogsrnHwgfwGkAjZHBMpcy5HNEJvW1A9fpXnMgHJfwofxoeGGpb6s1ayMLDxuWF1Fpo71Df5sh",
  "key1": "3wuiwh7obMQocQQ8jx8TVGh31tvEp9rFpWFQ97hLnQRPDzscmdUpg7FM3pjWzLiy4PRe8kpPYsB2BjQhgnbv6ygG",
  "key2": "AQBs1F22s5vuvpHc4ujQ96hQQSXAM42CBob6bt5tnVov9JtCnrbs5DsJCyZyzJRzKKyxt5qikDGyDqRmSGxzBfe",
  "key3": "4gs7mSxT6sbDXBVJKg5TZhUFcbcLnkVADwZBvRgNUUbBm8Dnu6uYdk5PsuCyGTb5YgwqKydGs5DPFNTpCGq8G3Wg",
  "key4": "m4rQFzPf5aDys3dmAuYcvCM5zARs3tMLoKNbC4rfKXDH5AYWSPUYQ17Z3rr42qSVW9PzvxPTX9rAyoSfi1JvtXu",
  "key5": "2B9AgzwxSKVfQF37swLwAXLmedaUQ5WqZJBeT7rsYdhbkvBXeCsQMG6vvynUqPVDwWxsv484nbT7WbkwJEDo6qQP",
  "key6": "4HfsJWmw1v9X18QkLo3AsKUNyFtnFzK46i4ZiTbjAjBaquFoXfFo7zLqn9CBUajtwPGiaT14iGQoRU8Turni1QN",
  "key7": "3GHMjSwwX633pQC8RKx8BJHHWuFyJYcQuf4jcqyoMwk1dzRcAEVESZRSvgQDLqvEZqCsuvaTSkoRpPzbwhBvpRAW",
  "key8": "2ABEkJXEEF8hM8bKUftDX8JEhwvvhcUMgjPhkN99Vk8mMNhKMP9gjuCjGXFHeDRC9kcAmHiDCHZyVJoMxSxmAt6o",
  "key9": "5m1dXxGyxcjd5uQs8mmMfLuFsKXJu334iCE2jcChSsS75pPxwDZ4KspekrBtXUZ29RXgPzCFPF16FExPixoafrs9",
  "key10": "4iS8z17FPz4n53WUFdTk5DkpJwLTToGZVoZMY1SiM3LS9cZt8JxunhEdf99SS77DEFAUSEJSxPWVxBpfMQywiyes",
  "key11": "2kvHsj85ERo19Ypo1swxuF2o5FKzMM1PRrbvZPsfR8hke6FEjGx8j92Y1Ubj36yDrcq24G21Qa1ZKSDsnLmgqnBT",
  "key12": "3CXQHPr3MjLCJu6ptyJvjhv9v9wrix3ahBQD5H2uFBoS5mJTDXDTPUS7qkpS9duJAbtStmxUYpJ77LAqUShLuWmR",
  "key13": "2v31cyaJQTLyN2RcX1tygznD7vGJit5W67HRGCaGLwmX39Qiixqf7ARtSjbnUqoqTkeSf2xeL2b5CGTXi4zwifUe",
  "key14": "3AaqGiFP6KrrEQX23WwhcVy3AXVEDa4kJrwYEzDBHnFwMAJx2knVHynBgJdPpH7m6o9ssLsoKxtP2zD7hyW9Gm8Y",
  "key15": "Q3aCCxVpvnKf7nvDNv78FJeCS8LRMQQUzWhWueT4Y6Sxekc41NXyAegFhjEgo2p3aFYLqZrA1Hm5iw5z4zkmtcM",
  "key16": "5ZFPiZDC2jEExTXe6f1uFZuHw7uzp38vTryiqPAMAotdhQ3eeEGXhiSYqrZqPHWeJu8PMZz2tuBCczpyiqiYjQ7G",
  "key17": "5FGke3fRHi66DuicdvmJ6inMcaNNGPxDxag7daZTkvrjvLUjWgSpzrBs57rmMRutiMNxCboBZb3utFuC64PvRB2r",
  "key18": "5uaWzvv97ntF3P4WJvVTnwRzNdzUYMYh4VWNZwh1sXHdFMisaQfBb7X7dvYxKxE7nP5Z64sYFTobHk6ptBdDsKPj",
  "key19": "4YUJf6Jkm75rRQRDGyd2i8uUMt7QvkZVg9rjJdmsvYv5uYLvro1U7Yeve5DChGxSLJuk8HdnndLw2Kfe4tbBNrFV",
  "key20": "4rxY5R4nqKkPhohSYu3qhqXryitT4MoLu6gS9YorJQwmjvmkHcmDyFuuEFg8gQGUDLY4eMNo7bttsc6DZ17JVpTc",
  "key21": "66oPmTkkqg4AK7iJZu39Zn1pSqPZ7ajwddYQKcRW1CA9hLrtXREp7RX5RzfqUdtdoHGS4khnrmDyMWS1EQVe6ZZ7",
  "key22": "4MJH1gpt6NP8yhaNmPGzusTZNRnGuF3smYpYiRpoWhU7RbP43D89SrhJUqeAE2CuB48kGmYDShBRLVyuWRXeQYj5",
  "key23": "2xxpSMmmyfXHecQdB5iDmEnDtHcWaAypyvC5puSmTAHVofGfV32a2mb7Vv6SZPTbyEa5bi8SRyNiEma9BrjtjNmm",
  "key24": "2RfZJeM426YobnF4adjKVvn64RBmwAVt3FVZdyNtH3CrN4Gj15j2RrUe3XWgBABLwzxJ75sgpQhK1aoWz1hMqupG",
  "key25": "rFgJSxP3w7NEohiBxJkN1rWinBq2467wSEzZmVf14HFxCgm5uvDHCTpRJzLCbpFa2oSSwMHCxdL36h6szyscpPD",
  "key26": "2u9Ghgj55FhBwcKzgXDyn1ZEoiJYs5Uw6P3fcH3BVXwHokfrfSD3qcXfYnsY6sCjY8vHZ8rY9UNoctnEB88S29tK",
  "key27": "8XWjPUFiyfRYhyg9BbdDKsfGNUUjSQJDun61T3FyFMxDCuBS3ryFUUvXPYfuCuQehsBqGBXzumWDNGmeJoF1Unw",
  "key28": "4qB7sNiVrKqT6voBYEwefCgT8hFycDLLWH3Ayt5CuzVsbNrajDpCPhzhGJ3wr7t6N6G9EiKVs9idciD3V3eCebhj",
  "key29": "4sB3iZJbFw4Wuq2QC6taL9C7G6pH31oYgQ2qLTvzxDea28Q1u7k1RVocYZUWSvRJrtm5p5WcCphLKyir3hnwo47X",
  "key30": "HJRW45MqN9jT1qw5ALXp7Ddm3gSiHcEvBvbfom92KssaiEcHSg1E7KqFGSR38bXWwWW2hkjBYT5YssjFcTJhsMU",
  "key31": "2k9KLG6PwTjsBwsXLLPyueiSoM8Q3fM2CuR8cXvhkvxqJSv16Sm5jsf6crBWZGR6umCRLJR1eGXbFm92nQSrFvN2",
  "key32": "5ZXYgDzCKdCHwmhwHT87ymA9XenoRU5LGMSvKEsUXPD8N1Qi4njiVgbHQ4PMx2khYpHNWPfCEoHgwjwMzT8h5XQj",
  "key33": "kqAZXBKFwYaP61HcQEKFBpw1QHR4Re8JHYyN5sCPyachdTADsbaEsuJ3yrR638J7K7trPGX8dP9m4PQR8Lyu5tr",
  "key34": "5MQ4Wv1W3yPu1ZrQm5M4RBxjSMgu7hNgSgJtfeuwzxZ7J8EHTmLTE5iEEZ16b1UXWhAhL6eWnhZZ8p3heD5xYWVK",
  "key35": "4LZjVAUzVfwFWn2eQJC37AZ53Fz35YG3g4BVXDd4FYWfade77sCJ9oMnmbMJvERRDa4FV8Cxsf9BwKKLpKZrAS3h"
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

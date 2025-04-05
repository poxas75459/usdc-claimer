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
    "5Cdc4zdd4qATnHH2Dyh5sebWX4yQuZXpdv8Rz3uxNsxAat7ibndAXGu5wnBa8Tuuur8su5jaJ4gJd7c2bLM7hr5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8b4by2bqpyRdh9f4yJitQhorUbVGcEXwnfzWGFmYh6sQWz6SzMgsPnKe2Q2pFVrx1vU2A9HkuSt9vf26BYrVkZ",
  "key1": "3HP6bnqDeS8MH7SqQKAe2ueyFqHYQgAEfUd81eQcdgT8AJ4wQHG8NhUtP6Pb5aL7E6iHxghFxNmeKs5NQtRNpaQM",
  "key2": "2KdYLMTRAuKC5fBk6cYSjLKwVZkDpeGu7kj4F5try3QwxCUmiewTkm8kmdCQzGf49oJTvh9LxeXuLzHDvqefuhaS",
  "key3": "ea9wiF9VNNTY9Lx9kzYqr8uUpipUffZhjffqhbjcb2yri4PvUUjsrykj9UhfjZpdz1yC6TVaByDRn6h4w9NrecE",
  "key4": "4q7UofkWaki71cmTXHoprEp9pR4iky4MfUnY99j9AAC8oMqgBdmTib4QdoNBZTQiJD2iAUS9fehLCrrURoXkLhg8",
  "key5": "3hTdes24ueKqgzimU7y2ETJUQ179hU9tPFpoAtQHpfPRjXQFuA7a8kVMoUZtZKFvMxqStzE6NqbajdLZ1mUpTNAa",
  "key6": "4SHdHgfhqWtFLCbSAv3B531FNQydVh2CiMvqjC3rT6mpHgJUrbJrUy58zVHnfFB2JRXdqLKjEr8xQ3d8TaiJiDmv",
  "key7": "DiBDLUpNDcj9yGgHJGGZX2MaZT3KGMVEtfhh1SPXEoD2dvq2chLK6hwhCXZzUyF5B4NJXgPYXZBEju1RjErvSay",
  "key8": "2bRv1DzK7D1Zd3TZYNG3w81PWMEfggmJvWnSMbHE8HSdsgUgD2M8tB2WrZo7BqTf9p7BEoLVQra4KG6qnfkqfg5U",
  "key9": "v53BaFKJQTZd5cfyMtUpW4RthRG7tmE1snkpaH5t64qQKjHBK3m7UvTSsaprJVBm3nfiFboUvf5e7CtipPwu2HT",
  "key10": "5rmZw9zxq6k4sTWXAx2hZ2mzUHzmi2uHSAJ83j8tw37b4GnHVaUxgssADwxjk5w9e7GZnC2kN9kTjWPX9zxrP9Kx",
  "key11": "4hhBjBC6movW7QnvY7qSKhzLMtPThnFGHNJpYDwC2xdQKycBGg38fEVirT7g9jr2epLKPqDQiYhHk9xV5jLZGG2M",
  "key12": "LbBV9FN9EPuqrKKq7cLbuZ2HSUAMSP1kcQqYHrynys2kDYqvVoawyhy27AETZ3Fn26w7fUte6jq18ARbmKt9LY7",
  "key13": "RpJ2gFsjt6aujKGozpQvojSXyDooFQmZ4BCaKQL7AjtvZSXTr7owcJBe3UdZdnrtPxHim642TizFzMpe5JTJUoW",
  "key14": "5Se67dvyVeYWfnFhn7HSqTmQAUVT19Nqrx9s2JrzizxYf3ciDZgPczGC2JgNgfLcyebyS1vVoWGpABcdHBFrpCRs",
  "key15": "3DT3omeDpZMmpMFoHL8b32ji7aMRWFvcauivka64GN3S526kn4Pasn38HAzf9wivA8PJViy2VpaHQGVeQuMLe4bo",
  "key16": "2chFochwwS36gLCDxFaCohDwK87U7WSiG1QK5BMQbDttZyXPTE2yPNheTcE2pH9qjea13j3AqYTtJx6CHRPRKdxe",
  "key17": "gkW1Jt5yJtyLsrqbQfPNUqAhyKyE8gC3xui46VVwygBvLPRwA2VC6Sm9CAfKgR9VLGy5CXbXzCAnDfxMNGovcRL",
  "key18": "3DUZ2fUcXndXhZy7gJSg8ddEL3TdA6uRFLUQzLCK3qfSGNjsp4hDxL5M8TytgKN9t4ym1Sx6QfA1cVH4crpGzTZ2",
  "key19": "2H2miWfCYZyNWmqJ7wvDjH5VS39dofba6D9EdeEtsuTBYP8i1GsX4qrZzBnDmm1aRsKaBehfAzcoXHZjnmFC4rR",
  "key20": "37VDJe82xXLhFy8CF99z31TQN7uu6HfQW3qMq5XmK15W8dDPRuAo98QCoNN8xWrTXfQSgmQYhc6La662d6dDU776",
  "key21": "6nq5Qjxq5m2z5GypRaAuMZQp2egWuNx456ocyAX6ssch7Hg4a56oUvhJGrTMnkqw58WvZUnbkuUxx3KHuvd4uvF",
  "key22": "2B2zrQrCKTThc1zdrnxctF1umCDGhaNmt4zpKLwcHBPbUxT5cZBHS5c2iKW9ttPs3UTR7NnwyGG5CQYN7FRhTRna",
  "key23": "jUMsj8aeooec3JPCmhGtQAtYtPDsdoLyZZ5mm77YdWgGdWzHea9HrYXZaUsLPeH2ZrmppMur6iwiRnvQxzvSY3d",
  "key24": "2WEskUJ4DTcM9R44NBty977zVYceXYndDn35eYcMQEE9Gt6cCLZDdMf9MG1oV6DrAqmAHX5rvTCAjuEkSmPP7qs6",
  "key25": "bgiv1RLhF7AurYCaJwSht23Q4x1uTk9uzS72EwHtSasp4e9oiHuCVwfmesS4B2iA9cPWcjCLe47EL6NDq6oNvoN",
  "key26": "4jBUL75NucWDcqhUqQfRKZLVqWTfiiu1tnsku241sm8uJEbohQz9qSJdFKD55Ujk8FVZckFALSgNAnFULf5ZmcGM",
  "key27": "tiuCd5vMFfafLQanZFYpq1bosNM7n9L1fUTdomWoBpvirpQgaZaKHWPVsFE98wu4Pc2qZnwh7qFHcRGo5buKmGj",
  "key28": "2E6ifxrGsxYvJcnrgUHgmWppeFE69ra8Y1FeB8Fz1pT96X2JzBchMUpBFA1inBCGu9Hn29xKdxzTwDXWGRTBdWf7",
  "key29": "3zpaa1MeWeQF9im3V688Y2wBcDDcUa9aHGrt9SsoH9Sqyd6RvA41uYbqmv6tYNRTKgrHU5TEEqmY5mj9qLvfNcXG",
  "key30": "1RnzgjThY2YXNwZssj5Rz4EiMzaeKomredmWR1MXEzcEpp2eu1qSvYH5svkqb6z24W3BDnxufiVJHRyd4Z8wvZ8"
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

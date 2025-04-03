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
    "4rrNML2aoaxdSSk6QhxpXcSfRSeWBGmN4EmTjjkkokTCNzCgBWo449hfFefRb9JsP355mU3SS45DzmWyUFfyLvgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Go2uztPqiH37QKWK8LQdrgnD1pptp8YvEYc4PiFBAAXTGudp7o8iz5JeCg3GiwBLfw5AW3YRL2pPyeWpF6DkmX",
  "key1": "3Ghz2HzBC478UfREvTrP8RBakCLzBAdHiQboMogSr6KYnoNKLWVgE3MYaT6suh6p6KRPazMb8oTiiJpaTrJhhiAN",
  "key2": "59U68VHcC6aY4tfATaf6zx3MnymKhkf4A5Me1724vfRsnGSnAbS5ikMMB8Kcg63myj52s1KsBqQJ1Y9BtZbQF3zu",
  "key3": "5ZFXwL8mjhV486NGLbUsQx3zoZeqYejvSmm1kEm7MbKKf6EvKxYJ6mzcuwDrgJ1gEGV7Dg5wTTeukCBRdKAMTHDS",
  "key4": "zap19VhajJo549VFK3a7itAEFXbcyk2tkfcrWx2SFBYkSFk7ystCJ6wjGtDhqfM9ht44dUHAVVaNQmsCCL4p7gT",
  "key5": "cpxPBxTU6ar1VZUf7NA7bcThEf26RDUJink95V8qMQwYz1ryNErFVB6BAWDp7bkTUAeESv8xtnzpzwEswjJ3uKN",
  "key6": "3yZuJJUMyf5MBfT4ActfjY1uybky79TG9iJZNonx13yS1K1gPo6WgL8UXfAKUQKRNRFLzm65uCSmQRQBZB5cfNAa",
  "key7": "TR7RLh3MoGMaiDaXUckmRqJD3pP8Na5F5cdDCXgCXK18qSYyt3AjtXtrCUhmZkEwfdLGYB4Te8i7E69N5PTXxwG",
  "key8": "gGxAyNHZ64791Pbg5SKqbveSGVSUaSvux9MiHP6dbhYNGx4KiRZfy7jj6GJwyaBc8PM1V64obrcYYbUtuqYA4jw",
  "key9": "5WxLzfEKBak25Cn5bFjoibLZB9YgNg68AvM8S7CFsnHfVTXw5kzB6SZy3PBNqZTucr4UkuTo9Pc6yzjNckXi4aUK",
  "key10": "4Tug8TCpmMovWwMA5EwetwLWKHdQ55CQk8gox1eCBuJXTXDfuEVMBKUVGp8269cFccWDE1sZreXTjVWdKmNDoNtR",
  "key11": "ms1kePTpKhqL9WQbzPCG8BsCwM8riGN2f9iy2bhHf8q7ACdJuPDb2N4UPjzPcSd3zCC8NNo6ccj1bhUy3jxkxqw",
  "key12": "4fLunNxhNRy4ZXGLLXf2qanVYDeqk95cWGNPagrzqftFv8GQh7hh8E8N6vh37LFB114PN8qzDgar4nY4zkaJLBJH",
  "key13": "5HpdM9GjbDWwPkC26xCjh2kz44CcTE2PEfL1gAwdLhTTEBgWycHeagCrG2RVtCFW8UkrPw5uJN85K7xL8oUQ18Rj",
  "key14": "4oX8iFBg3uP5yQTavWSLPU1bKBg5jxWUSrtgsUzQXqkre4q8r8EYyN3TGB6jnpzDyknriwEa1VxSBbEYurrvYWXQ",
  "key15": "zZBWsyNMCZPcTnq9hgProbWByQ4B8fjmFPn9VNXhb9CAb2srtuWvL4fBJ7nmkp4NgHfGnBYAtgtRMNiCdAHEfVn",
  "key16": "3T1dX2Wt992PH4cfKk9FFhGcrJtvTYowg9em8eK1nNUFbm4oUumfJnDK39Acnzc3DbBTkjPRZNpo7Hh8FrrXY6xR",
  "key17": "3kEUdHVU9Hbv1DLcvWKJ7zHRVHdyC9GyYsetJ8Zy1egzmWwP6X9WGR4kQmqWJxNKKZ2NoRbXHwiMEHvtpQ87FGAt",
  "key18": "5hEz1PQmnwLFYSiaqKw2CZcj7ifho9mnoCSgLYKT1U5scmT46aBVnwQCHHwPCNzZTAVNfP3cF25CNRP2o7AxwgWS",
  "key19": "3tiXK5UXxdrLshhZKY2DJJwZakBQ3WQXPdWPU2X4eZYDK8pM4L6XEU2kEq8FFXcbQWKLQmSF9mfYsoW8WSoRf1Zs",
  "key20": "rC3FAMBejJagZr8fbcHgGwiCioh6LFicQtDxgwynyCCKFEsFJEcaALNtH4qi6GRZngoaNaokzbXu4RiZJcThwXf",
  "key21": "LsXtnB1dNvmeADB5mEW51NCRH56Kef7dPPf8wDqbfVPoifcmBtmFv1ZAdWG7N6uUSQvSin38Cg7C6EyzeLfscwq",
  "key22": "4ekSg5RtrreJFPuBUt9b1K1hsJJQdiCgnanh2YxVEjU5JBHuMp59XNYbvm5io1BzDsNRs8ayYdWwGwfmCSsBrX21",
  "key23": "2UAn2jysctFm3LGqzwJfRap2d1EARpNw52GibGeLMiqjyMMPBUh9nWDjLTCGan99SGakA7SijQ2LRKwFzuFLYqZg",
  "key24": "3zBS2Db5qaNkzrAmUEaBL8aSfkYPibeHsYTgLPiWxFXZjQszeRuKcuYPmDPRaMwCY8qUfYbs1EuiftujVs4kuZ7B",
  "key25": "GhTKZ94fQLeukt4MJPs6nW4nu2Q6JcRCQsQNLmVy3mLgjZRRKRBR7hq9qA3QoxiWBBAxF7S6G8svSCQBzJwTKxJ",
  "key26": "3sh3zvofAXqndKNGzURG6ov8UBi9c9ydE2aM4Y5aWfbcNwpHrwzP5MkV6yQGuwTeUdk5kHwGdqEZeBJULv2oDSuU",
  "key27": "3fUvrXokrg6vuK8McbXsaUqS7jB9yacUpbLz8AgTWKYSLzE2Hhi1gL83GJxyniybGDWwag23GCWNwF5UKMdTJRev",
  "key28": "243XNGn9sbAJXbAkMWt5C8akpSJVGfry2tLEocFGU2JyHqppDanh68QULSSrrREnUsKxqNvNYFxHAnYFAd85BED8",
  "key29": "5y8WV8xiA6bj6b3PV5p3TzZwTBZ9SZYjTPaNtdv6JsHQWQLngzBtuwwKvxYjcG23zBhZVSVcvEAEueaBysigr5rA",
  "key30": "P1A9o3rXZCRJWQJTEaxAQYKGF7FTZMxmAsQ5CqrxL952yN9f14XSxSfMzfpXVPNQPG4cdiYjk6dqbdzvZvTy3MY"
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

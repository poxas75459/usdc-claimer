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
    "4M4bSMLxiNqVuCpv8KeXHZiu17ncJ2J2fpxQS2HDWADUzrhEYFABPbfoMkqzso5FhmSueqQK2wirDCjEKb7yrk1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6rvA59JU5koFJtvLqJ4K5iQmRinWrgXE4Dhy7j9p1EfYCkwadVCkyNpT8Db8UueCZPBXcaS2rVqN71LkLQHxUF",
  "key1": "SN6GiiyauAHjtCHbrJVMXztPUMWNDxGv3JiwBnqVtLUkrBT1JeWYkvcWGMB6Mys3ju84eRNYeGFQKxcrsafhJDb",
  "key2": "CKvg9Tae7rxdq1V2QT7AHGxwtfbeQ93N9h42AX68nXWx8tHPpvMhgJoJPk1r9aMviLupBKTw1yyTsz8BJDKdxYM",
  "key3": "ku9FRBwm1XtokXiZoXLktmBgPEcWYfUVVXz3LYcFRMnRAPxskrJ8L11e8XZDNZyqDR7Co7q8N4LDmKn8FtKTLrR",
  "key4": "3Ta5RPJa21F5A2LEXvQYvcii7gUKCyauaMPKA98PD8DYjJ9FCXrWxzsP8gCQDF95pDbqVGpithWsuSgZeEvtQur9",
  "key5": "53YFnCcyU9UPTVHV4NyAmG64iWibiNMhSDaHYynNd81SZRrgyFADepZhZnMVhqD3Dyyfu5iz24PYNHpyL2obWqSW",
  "key6": "2fBPnEZedcsk77BVZZwS8Rf3qWJUSa5G74xRgEyTEZhefpg9N7pdAbHNG7EwJiZjWpyoV6Y9FuBVicLhC3QGVPvw",
  "key7": "hPdFLqoZbZUSLfDZ3cR3YTP6nQ6tDA1g6ivpa5Ekhi7He2wZ1n65EuGszSeAaFGWFaZEaP8q2GXJqNjcV5E2XLC",
  "key8": "3Vj9xCqnsF9odWzgXeb7xs51ShH51yvGm2soeatNBQApoVQwEE1yCk2aik6YerbeK1E5Vc2q7vYGJjV8rRFLtrDh",
  "key9": "3DywFGGkpzqAj3NKdNzmuf7pAm4oRK7aqGe71Y6pXjmA61U1gN7d4eKS6SbgieKavVBrnWeAHYmHbnQsQsFxG26S",
  "key10": "3auD8xKdDSJjzcHSU1C8ryKJCB3eNSUAKem5zdkcrAVtzBinkGqjLDGBgLMMrb8SxG1kCqBrNUi4vZBAwB9vnHMn",
  "key11": "4GQk9hXVJ7XWNaXvrh6ZDtJwfXMQfqpqALGrRwuZrfuQ7MKxp6MHnU5MUDERLsAzAdyr6SR5EQ6AhxjfGAfysqET",
  "key12": "5wQLtLHWkNDQZPRJzDmBXn7AgQeSzhyBzvUDRsXppBXfnpM7oi7YJveo9zkGCuF2uRuWN81CL9BRF3VS3UCSVV9Q",
  "key13": "JWuSHtGsfpD7iNUx8A5zcX7p5pn1R1HcDthtTMXYPwpoNXBwZzDqfd9e4xMU1peSRS9rjYZEmCP9SgdFnsT1upy",
  "key14": "5ZRUJqZAxpABZSrs8X1YnpuBf3WimYSt8e8bzoxcibx7sNRtNo2McfALjJdf3gcr3VTLWWhWk5Epi5vm8jxUMhB9",
  "key15": "4cePtnA2wsd6FoUfMxnh7jpwZCQp9etwNoY1hHSkydudbeH2KDFv6zRj91ysGhFZtQKxgBHMRsvKWJ6yrmj3VSM6",
  "key16": "4yN65uYVDwFFyTSbgzqz3wt3wygBCFgAyJUrN7AN2y43PXAs3sjwmSPhkc6Pm2zoDhtXohHKrZ7xdPhKt6b1uquS",
  "key17": "3hgTVNgF9EcPSBhFL7wx82EkT8KpJeh2ZPme2Z5yZrkHp3aiwqwmgX57Yi8RmAMpYXKEUDU6AJ8RWsQzjQjRMR4Y",
  "key18": "4xCWW9YsxmdSRUvRXKLEhaKkfF1A3piLmYZVYgR1P5M6CK4sC6sExUuBhs2RSFjyY12ARC2yjm2yLU6zViAFggk6",
  "key19": "KhuyRwAY4nFKKqVABGMn6p1dJZwmJUorNiGGKk6ZvR9hZaAnGGB7pi9DgvZDNwuiDWrySbYwpCfBab83BWSUVNn",
  "key20": "5f4JtNqj2YcvUjtVeXdsE1J1uvyGEset7JzGQUWDNAiSRSGzcRSK2Zs794bTwdAaaL4Reqy4LMYU3oJBoi2QpeD3",
  "key21": "4cPvx1oeGVzzAg1ZDvmjrX1P3wQbmoDF3W6dCdGb7PdhfsXFf2hkXysuqXyeaQ4c1RFSTTzChcfjNmjkEm6FZhXt",
  "key22": "41t3AuaHdHDa5A9WH3BvqGPcuF2gsTNbvpBrDTCFrXKUAByy9gMF4smnesHjYXi2gpHskp8daiWHVsmQk5uAZKXC",
  "key23": "5H2ht8kdviNLrj1pJy6aC93WnZVH6WSuBV8i9Hf5B3ey4ttmxCvd1fP58jd4xUojMfdE1msJcpKyqFVSGmsJukZU",
  "key24": "3Gzo88U3qkA2mfS5JLcNpL1HdfdJCtRg4Zi7awn5eSTzZqxnvsnpqDsaKP85DZhqFfsyEfoyNVHyvieVoHBzCUAq",
  "key25": "5rRRp847YVDDh5FZmn4H8GCGArjkgTqbkBw4E4UMxXVKNSeT75F9u5WRRHcH1vZGfNkB7GWjxJqZ5SUe7P8cRVsS",
  "key26": "AG4JDkSctEWDtiPEjV6HKzTAaRgHboXknsUHtTT9352ESwRwhdEqXmHFruW3vvWTwusvj8EWu9sTDYbmNLWHWBV",
  "key27": "2Y9hVkC4ErRSsSBcytoPnLvGDCdYpoSFdDFdo7TVTy6MeKgXpixjxiojDR16HWXPZ7U4ESwLhidJHz3eU75qMreK",
  "key28": "3MrR5qToJfMu6NYd8S32UCUr8qV41oNSYddxX11xAyYwDqQsRjrv8LELW9nHNyvZHzKV5T7BUgUFCNiXU2ChkHaH",
  "key29": "4FPND2RSihVA4ELx8dA6vgjtF416jcUKuzpEmBJY6fKie2G5JfKnQqXGjPqxBQ549Qv7K97QawGrBhHDgVih4cw4",
  "key30": "5vsk9nYN7uRQ48zEvc2a4TDip9SWPpDKfq7YgyW7Emvukqp5AAfzznRNCX1JdM7okMf28oDJ2sr9Es6sn7bzNWM3",
  "key31": "4Xni3dtM2iz6Mod19oK6xYjn7RWMpqdB1Tk5ZxCgRBh5RKNFxUwMaHg3yhd5bQRYBANFnLgse9kmcDkCYpUvNEmZ",
  "key32": "38DULWiNXM5ABGQu6pzaYuUAAvVYGEtDipd8nxraEHrNig3xQFuLy7FTS4ADWKfHQvTUgBvUz4J7WEBD7JpAufVv",
  "key33": "4mDdznS4pzHkemFdENAA9hmWs1AiEgXdVBqR2pTxYNNVZMb96D4W6weEC4mYU2K2X2aK6gfVoECepjJsgAPrKq53",
  "key34": "2JFGpcPmm2HuU6rqMQjvzpVZ6V4bTkBMbUwjezSycdA1SQUEbJqnPK7FJJabwzssAyWabodk4oGzguFmBFDiLjng",
  "key35": "3VJqXfUe7X6FJFbr11TC4A3NH8dq1jiwY9zyykhRcfdXY1MWrmHyAPTUzZi97MzvJTmy8xbq3kXqzBiBD4rgEMvB",
  "key36": "4qiexd635ZY3N9w5b3aGgEgUefWK11421fMT1W9vkqnPbGbJqfeKjR88SVRPoPgAfM21B7SqnAdbApanQp2cj8mg"
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

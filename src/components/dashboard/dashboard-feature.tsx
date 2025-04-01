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
    "2X4NABFpkkDGzT5Urb9N4VeNqcvpMQDBt5ngraXimqkWJHUMMJTwWPZbPczF2Y6bmupfykUHYDye91wEipqmQgof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rK5Pqn1rAM6TKqjh1dMEf2UEWYkjab3NpaQ16uTHBGHGkB41ryw3TnTaaTEZEaMVj4m8fuAmo2MFGHYGW6H4vqR",
  "key1": "3nb8quF59UMTVfaGy3F2CXcebfx88GVPwUniRahUYijwBGKf42JNqUZ7qHM9T2BKNCTXkJxGMhJZMhJuvCw8xst8",
  "key2": "XAT6KoktTsJRp6vdmjSC8MGSJauyJkxhnnjpYpnZ8GCHx9AzgJBjqETxoF6bWhyCjCEyRcSYf5zoCHAX4txXXaA",
  "key3": "5Ldvs989bXTAWFoUvbCtkpmLsZcZbku3eiQfiWCcu8eGng3L9XCHCHQFdSVU8xcKQak3oP7RWRrhBFrcvxXvZ6YK",
  "key4": "cqEtBKybXeT6LDrRBiBuYFwD3tzSMmGQRJJWSJmfbgKFEf619mSLJ1Nqok6qVTXXdpYTEGut5Lwhi2rhxV3Pqkx",
  "key5": "3CFhDDaxaozYstdqsZKTWvy99rDSnHgD7vbyHC3UAVCQuqvDxHs8NELBR9VS7ESeMUQ7vUb7xGjmLdCbcBmV7so8",
  "key6": "24vrEzoPNk3QadbmBDYpmi6uPLZQFiRra8VuzLPU5rxCbnUid9Uhc9Gr5za815LLWRpcbeQkSHJ7TMXpRQwHzdBF",
  "key7": "3M4F3x94mCBhKnMaT5T5KFzUx3bMJLMYHCx6FTMSVsoqYn1zUsanFvJbdo2zuMC39THqaNgrSjY8cHcay4YeKoDf",
  "key8": "3Vr1U8J6p4YWnKqAcsKoP1EV7YVqbPRzNPpSW6UBtZU3UXbX6TtpsnuqkXKM912jjHpSzHn7WSLuVLAsav7FXRYK",
  "key9": "5cJowZ4ibTUptST2h1dreAnMi9N287gVNKxgCxLffuDsVyRUHL8GVgTARA3vA7RnaTx6q9MyrtTTYq2CzxiCgg51",
  "key10": "64Scix3xzxHbNAQGc2LHs2csASJtbatfzQyby8sKP8pq4qAaG4wyDJxWXgNsd2F7QDprbR7zWgXwp33HU8oVYoKJ",
  "key11": "jN35yCf129yUSRQeyd5iuQYtojVHJcNKE3m5H22FuD29ysSmL4dMWGfjpSa41fSSg638yRHnkPEyPTas4P58iwd",
  "key12": "Sbr4YEpbMw1fGSWr6h2TZcNmKzgvkVo4EXBAfp3Z7ESXW7pMjWvHTCbhBDeFMgdbi8B6N6Jr8JzGPEGbQShN437",
  "key13": "5RRewbDF4WjpLAr3bKXqi2FUF9SyYgpt18B7ppicToWufn4mUGnHL4xjGkeK49hBRMn5oYJp6QcDE5dHBpGdEvLt",
  "key14": "j4UXA9MoXB31gPya8FpYktzarAwYuf1KnBzyNnvPyu13h4JXUXjxwC6dWc6Aaa5PF1tF1migCkfsDoS1xA2ga93",
  "key15": "4HXNXx7TahddqRPLYYWHEDC6vRYvJqffRYt45DePfJgJYMPTaSfDruV1R6kUUD7sNj8K9JsokHEBP5Mrx7bmq5kX",
  "key16": "3th6FWZqUx8e75DQcCCegJ5a1Kt3ZaT2239NDokoTVXsNXjzMxE9q2KPsxETs8rSngLrtCoka72T3erbV9yBaoe1",
  "key17": "4J2EdxiD2nwYZJhBMLHa63DvGofFvYA2uytCKJtHLn6y3GcgPXHnkZUsESVkyb3fGquBmSy1T8Voos5GmDw9V4Dc",
  "key18": "595RCs6xpb4Pfa2tQMtKUhy1c2HEBGSCdmNmj5mDPAhU986F6JxoQtY4Lf6Dfw7jesnGV7eUPW8JNszkwtARWPv",
  "key19": "yQ44tdDpTshbGweLUrgu7bdxsdMWJZfbaVrgtfQ7SBvDr5Mjvxix2G3aeoy8kCWYbxQXwMSAfu7VsFzWTABSQWo",
  "key20": "5CFDcFgmW6JC6su14wUFhKbH5XRYSNsPHci2FCPpByEyojnU2WGchhxojpMQx61ao4NDXFun8euSy6oL7kBBdcH",
  "key21": "5iX6sHKDVrLKscRwbL6fqPx5qdJ3vF7dpDqjXXH4wdceSjfBd2UZ2kgnZzEXBq5DuXpFVEKuPvffDRkyWk8NQa3q",
  "key22": "3QRb21g1WxXpHWo1cE1xS669yW8YgxP15HvnqhVb3mcf96arXY6hRvvn4n7P9FK82duLD7oE6Gwa6JcsRfJZ3bXp",
  "key23": "4Va5rSTCwVqzkymonfKS6sMv2BFfekyMbgWeyBCbWmGB6L8bS1y9i1SVz4B4KEyTk7k8R4SnmQAJ1AHJua36RwyR",
  "key24": "ErJNsnWhf7AdQcCvCLRgu7q5jN5gE7VsmGyPXj4PX8d8LUisJBY1zH84YTnWYRc2fo6mjUwMkaRqGHrZaQk7bPW",
  "key25": "29CScVmV7AJJTzqyztJhMbfvmn4ZedCB9cbVB7r5TmKko4fMH96GbG3wF2rnbaHr3KoTdwsHvgyaY8y1vHef4uYz",
  "key26": "2td3BcjUNRpzafXFK4ojsZpvaBngw6eLmL2aqaxcKoa2eoPhFWyQFycfozvWGt9cEHXFRJCQ869DMvMQ6HpK8rqi",
  "key27": "YN3gsg8DfdKg61oRxmve9Pjx2j3gDH6Vv4w9jYjZQi9cZ63iFsCUqEgkNkFSARUttSxTWfzSQBENoSn5cpT7sgh",
  "key28": "66c24Q5uFnBAEf3v8WQkdi5LZeamTtKANXXziQwbqGucVChz2Sizh8j56eTBuxGTkTPKqjJ45C5crSx9Yr4hSk3r",
  "key29": "2ibnwx5yXUgEURTJWnw8arse93TicubM7j4Tqg1L7UVdeYq4DvLEWyzKKtrCifhL7QZjBjHvEa8jkwaQgHHrHsyL",
  "key30": "2EoCJVUD1QM6cho3DHjESFyqLmg5NgxswhjzwPqMEnpdvmcsL7XAfRScbRtEsUEbPgTsayQAwcRT3z8ivTDisQEB",
  "key31": "3NByL6HFntFqYMgK8qMn6JiJNzgGm6SQrbpRd2iLHSrBeget1FceRbV2f6SrNSBfBrUTAzcUghu2pPQpnVMh35AE"
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

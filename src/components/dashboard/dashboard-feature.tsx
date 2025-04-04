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
    "3mD4FGC3Yb47E4i8b4e5ziY9gTaLVk4MGewFAnHN62M6vNZ8NYJqZ15RuCpDDdWYr5yDWakvqa4b3LGxhqLhDi1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zhaiZBnhVE5jJSqgSTzbhBrMTSfv6VUR2U1A4iF3D9Kmm2psnUr5PtwU4G1AgGrFR6FZer5hns1wzjGY76uMqUE",
  "key1": "4e9ChkHpJHBxv5U4LMEuFbFbkUAWK3Sn6ERmcY2XWNZpoQjpSEqygYL3RiCHvwR3zMYjW75FKhAPPQWXrwi1SVZM",
  "key2": "2A9kKeEcGncqVEhngonKYGbBCWNs5RAwiCZ5q7pARdua4RUuvMnML3186aXDrjfyZRyESBmtXTnx2MsD8HpE3Rvu",
  "key3": "4V6J8vx5k17p4oLFLMfNauxR98Kh6ugRvymKUKjV8qLfv4Y99HeCTu7QbybHRB1FhsT5aNWvZcEvCuzt2jrgM5Ld",
  "key4": "3YVCvkU3uTw4gpVXiQEj5AnytRZUDrBDrhExm1GEu3dCNF78zSnBF2t1TEy4GfcEavaYnbFGNnWTpQwLncEonG9a",
  "key5": "2oyjrQv5SzbzQXCXtCPpvvCnHivzxZZbczx6261e19JD7NJNeks5UhxK8K3V8dFps7ottHrcGyx9UqJYjeSeMMx2",
  "key6": "5ZhxfUHCuhUf5rjSJCm6vWKD6qtemNfoj57GtPX1rFfZXNYNpA6h7MSjXbPReugcCPcDUPcmXtubnRs1G4NUB4up",
  "key7": "3W7JGi5XuRQ3QgwemACHDvGkVneCwDoHn5BgQRQZG8nnPEx576FHi94krNzsPHpk7UGhZ2Xmv9scCBw2LqxJesNq",
  "key8": "4XzQft5CnucpV27hdMp1iTaWPLFaEpfiHbwX5yNKFYPNs7mzZHHvKWXHbWcT4wL3DkPaKJeew5qrUMd2NkixY7hU",
  "key9": "5UyPbGePimFKocvRUD7CzNJCrqjMdoorr5zu5MMh6mz2msrXdVFxFEYJJEX62eYsCCPkjuvgJgmL6v3RB2wdpG42",
  "key10": "2ZSvBqb1FrEt77PkBdfc7L59dCFu3a6b86iAhHkpzyY2YamQwz3eFRDxozb7NwfQFz6ik2z1cNEKXizZJK5FZFqo",
  "key11": "38q4jz8BXK2J8X2werg7HuWx1avVBMnpGMdhm84crzhH5HMah8vWugRmD4ADdXC9TstMdUWtY6fqbzYTRCGhL6qp",
  "key12": "4WLTRBiVoL1Adx82GkyQJnwSaNAFe4tL9pG9Hm3gN216ckyqG62XtVxnSZjyututAfBeYB1rvwgwSSMWU7Ca1wJV",
  "key13": "61hWWcKnHwfUV1G4hkyhEaeCZdRKKgk5LJjmPJAr6MyTdLiP6qgSk25wxuYHKabQXiDXDzwUTaYSGtJTYNDamGKY",
  "key14": "cH5CMsRPwhGdKHeRT6AXJaHDK2UzgJRmD1bjd6oZTqFjoqLmtG1Xoz9MoimxaVDQ6fgHv2uBotY2ajZhMgVc5qU",
  "key15": "4YChVppUhPqcqUbvmiTvMrSNhzsBL82eMVKkYhPgc2NHxpvMTjjw2vfdnjdR7XNdxRePuPmXiWbt8RsWaGYWuGcc",
  "key16": "5YsgNegZ8f4VcHngpqCpoDTVna68oieqk8wh6Xuqnk9NVdaxRPffHiGvr7gyundXV5nQpayLPQEeU3PzzgGySMrU",
  "key17": "5pmX48tfXSg9MM5tQtQgiA2RaYkHjzgAzcbKU3SAAHWhSEvi9XzbdnwGxMM2AELMTPjtWwmuWYpncMQdfNiFwvMd",
  "key18": "2q78EPfHDBp4TXbbvRG27atpRtsaQK9CWJacwV2FayVwF7Wn44Lmr3Cyt6p9cCGoRyfDbsFuaDkZ5hptUpX8xG1C",
  "key19": "3shx8SgYBNhEj4H3oEyQSj2FJNDoVhQNiAjFjwbBjtkrQenLPcwRkhz4n226urp1pxCwMkCARgjiTW2yrP7YnZr2",
  "key20": "j3vpkLq6MxXjhgqoC5y8Vq27AtwHh7zcCrzTdnEzf3YTdtA3MWYCJxJp6NcaKa7hF4idouJJmZEmcVDQnX1KFjf",
  "key21": "21mXmyr1WJNAY5frCdbq7s3PXvKzUWxYgEoXdyJSs3wxL1yf5XBri7JFuKRPfnij2VR3QpXxH799NztF1WjF3qAG",
  "key22": "5CfTAK1A1suXciitQLH8bn5GEUYD6BB5srjK5M2C4R8QvP8fVHPMfAQg7T2h23J2VAyzPeQQg1mYD2wZVTTeheXD",
  "key23": "36jp6MJVfkdm47WQdy2AQQUWVhYtFPLhUayAev1osZt1aPdPFb5yXt1F8vJsKtZwT4cXuiEh5EAzAsSTA35oSxqh",
  "key24": "2i5yYD7Tr3Rvj3NwZsjsFY5pUzRrs6obN2A4E3kf8RZbJe9en2ND4Q3tXPXb57V7L1p7X2KDjgjrQGDWwCorgypx",
  "key25": "4kdrS1Pn7WATsWiga6aebNBLvDfe28Vkph1eGMBTZmfHr3XXvvurtNouyQpAzowdjzsPiEMAbB5rvsXDX5oaAtTn",
  "key26": "j4cNVRrbhLfzBqYjE8hEmqXu4mYYbqoa1H6fB2WitqDhAbB8mToA7r9ijTvcadQ1BGnmS7u3mSyMRKEPhgC6xTv",
  "key27": "4VYrREbGX8MNrq2YNEncEBP63QfYuD1gkTMmiWwSffCUgMe3hkswmNCH1BvU4vgMeamitAivK2CxQTmhATRK93kF",
  "key28": "3rDNo2GRL1HhdnkTNzEzkY9wj2CBczvsiW9t6W1C6oU4MimHqurejUMXyB2UW1sAKqzywYyqHnQB5vd3nFksFXt3",
  "key29": "4h7uYCxzW6g35jCrKGcLxT2eNQDibYS5J6FfdzJhwYFfmZojpLgeTjKmwkwQTufwrmj91YTgmhnjrCi2Hd8VTVVn",
  "key30": "2Q6oJoPpnLNv4booj3bX8vr4TU9GdXAkyHsV1iJ3LHws5RbENVx2R1Wf1vdfZ7SM99mvE8Q7nxbgkU1Xg6NV2ovf",
  "key31": "3PTkgtLFB7zpScGtC1qNWB7r4zvAxV2Zs9yuHr79ZMEz3AdDahEouPf8BGFStcy1CrnwC1uSkkZ7MUn429RcYH11",
  "key32": "LDG9CXGfkmCSPzYNWtNG4bLGDXkqurz6ezkmjW7Q5kiWvGqfGz44XnTEMcGePPob4xX3WYon1XN9q79j6DgBu7B"
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

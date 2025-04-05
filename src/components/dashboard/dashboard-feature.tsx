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
    "2JuF9JEeYJmVc9ysUZLjpAjC6GUc6o39DMdkGKKHc8hx8ZeF3ZbFXrV6mBCgrPoaWVcXWw63e5h7VtUbG6JPLPnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gaDgYJaqLrXJtNxuEMUv6oSQBodBL21pUoYyBLknfeYS2RkD6ZAjMt8oykhm1wcSmG63Pgu1JhDhXPEZPcsbYZ3",
  "key1": "3xQrRWpRoPdBWnhkUQx8P5QEZ5mQopCEGdy1Dh8MtRnbQc7XATxTiQHFShhs1mKNFSCrM7Vyp3DqqhQQ9mNgN2ZS",
  "key2": "5FXA1iScPyGyuAraR8ahdNYPS7484v74bonnB3GLgtuLiMeM6gqyhdVjhLPkEJTtXMj4B1u8uE4ALFt2vVA8bk5r",
  "key3": "4r1fKzsjGy7jy7C3gzrmfPbMyWjHv2V7mFartR6pVaS4eqX1r4c3KYwvMv8FyVJcZSmH4RsWmH3VMBQ5KTVoP5ps",
  "key4": "2aRXTmDDmJZge3JSeGa8oE62J4d1RZyVamCmEibkhmjRicr1YTukEE7WL7Zr8r3t1ScoHAD9b6bhgdq7QehV6Muh",
  "key5": "49KGLyCcAUY5xm5pvU6hYkhi6zEEXtJYHkwzDNSMokDHwf5aMGK1iL5Y7X9V92bp3kySkefZJbqMSjp7JwS1QXpf",
  "key6": "7KPju2QJ9wHepRQWZuYJ8qHL4BZMZ93jg82M6Wwts2PPBKnYCKcathsrNXT5kCAzzCfBx2LBpWpVbtKvYQotFaR",
  "key7": "3evJRaqTW3L6jVMFMknw4dHm2nzPvGxYYwRMxbZfVRyRhRxm2rHTfYTJunVRWwjTg5AxLtm9EWwrURXAJEuVc4dC",
  "key8": "3aVbVm9cmUFhPoThDdkxLKsSYqfxRPyTDME6EQwoYmoAo7WjFq6EtSiRbsU7BU9B4X7RgBZ8uT6tT5AkXJgXwiPc",
  "key9": "7bMtGQWz24bNTgSUY3hvdvbn1wqGtDkQE4CdAh2U7jPJDr1qSDsXEfKdqgRVob8NNk2qa1GnuErKgPtEKfg2GKY",
  "key10": "4zQBvn2CszCq9TZvT17Ecrj9GuJkGTQSCCFZakyqxJPfGrE7Aeny3yFTg1jUrdQwsZd97thdKLh55RPhPqj5agPs",
  "key11": "2GbXgBT57uzkBtCpBpHxRghF9YP8LjteRSvAswCN1P5rxJ4fitNVX3NAeGD3mhaEien1RuVqBUwfJy9gMJ38kTpa",
  "key12": "EEnqNYrxD4xQppMBDmquuyL3s7S7hPYeiG8ZW7L8wh7p5qrdL5YJd9TcEB9M1UpgLvABTJkKjrNcMdvCfuqFdcY",
  "key13": "2b47mKDii4XjeVdDcd7aFAG35QpFp1af6y8UmeHL74tj35xuzz99NXZFjKcTsX8T4ay8t9B6RjfdD3ZKfmyvtWi8",
  "key14": "3JVYgY2r3hvW37zfdfJe4mtiYk5C2yJNnVNVTSCeyGNeCVkE4WvvuBWxfjhs3gNGQPJVtpvfMCyVKX7vc1FVn9t6",
  "key15": "5EUGQ2LHf8wpTRqXr1Q3wQ6Tc9tEgpyoTUmKv18JeFZZAZpw4hzZcxgcSYh6qBpov6Pn8YJj5npnZyeB5zrMiuzV",
  "key16": "5WcjgTbtzF2Tqd4StT2WCFs9eLVQ1sdE3J2cmezZEqUre2vwUyCjwL7WLAwwst33szYPqKUp1oXqocdM4nks5nYB",
  "key17": "3i98xmvNw1X2JdAFai7nXfabZdWmQW7AXA9qGFVFUV9qYY6k7d4f9PS5v4GUez5biGSvpUCsuFk9qJhnxGrJyFmb",
  "key18": "27dbr5JPUK7xPQzrKy3W9pa1CBGUc3Vmie4xg6ejS2J6axRPyg71eccHH3dsGFwBvpisEiPCsbeSWxLHgXFncAGp",
  "key19": "5yRouFHzYG3ifRBsx21utgZbWip3KKkimUh9QydGNai7CjvMtQPiatmc389JYKpb3r9nSSRW6mvADZpH79Rsjvmx",
  "key20": "3uJBt1D8WeiaFs9XiL5ZDP1Eu8gwocJ7QuyyoyHnshLUVQf46nMdxRVh9a5haE4meLw2cDjji8jhjMVirigfQHZS",
  "key21": "4szyBLQmrMCzE3eRsAQpAqMtSKcKbKDCZ487fjV82nWMrPRUWpM5BnyBJRseZawofbE7wNrjet8j5PdV9hGPWmmj",
  "key22": "3A4mr323cb2pRtnTyKxZY3hpofhJ7St4pLoVEwREA7W8aFNo9fbHf1Gbr98rV1bzqTH7917M7HknTso6MUKTDg5s",
  "key23": "5ayNqac1anPKSP3SW1Gt4qUwFYkAVQ9VmjJYAkcUcVQyw5QH7zwWapoLLQyW52fcpe1tpyuiDGaw9yrbWMDzH6zE",
  "key24": "4FVBn8EcyNhyTzNCLLY1X55LFHzrmj38bA5dz58qmGdiTBugGZ2cyJeq5uFvWrvXdSLTbY99ec8fxeVcx6a4Edmw",
  "key25": "cAbCrD6EoopMrnX5RPXLQK9ZHUnjndpFyomHvT7uUNmtoi21bG58Z4JrvtYnhXgAM1zBLd7aZTmSAc9vUqXCYXr",
  "key26": "4SgaE14DF9dcUUJ9bhz5xH62ih3cB2NqB6KSu6AaEByhsqkcLSEczpcBQCpYtFSTDoCmmJdptcWN54sbECbf2fpG",
  "key27": "i3z4sY9rjffKaF9m6kREgnGEa2g3Rdnf2Bwz3PhFMCuaQHqNkjmayrMnBve4Nzq9WeGmKevU2RRwqbu5aNJEGzN",
  "key28": "4Fvt9vKbacNQXUhJuU1Qi63ASCt4fXDcMuadrhJtsR1AtR12rRkPr6NVpx9v6cFxDCznTzYeysrJi4Gdsf7XTeb3",
  "key29": "2jL7cMk9ibbgJoHjimKJXT95UoiMQugdWZ2UteLxGwUB4zAZKvbcAWqAo5mJT9Upn98SWddCjhoQsyhzhP4EAAZc",
  "key30": "z9MsXyz7Qbk7C63ywyByTn8mmKc6qV8kHgqq7EKGczLZk1ZBq6XgQ989zJ8N7hZWQaQm1HXzd5VEj344t331D3E",
  "key31": "4U83MBUoR4Ptd5QEGRdLLZ2Q5agdHELF1HkNzzK614dHHcMYx3C9wYhL9kJ9m9dqJMrM7BDooBvtHF3MXhVxNCs8",
  "key32": "3HxfAvbDR75fNGF8tFPdKGioVhzo6dyKYbQgpmWbDsFXCWaT22NUS7BDZZjxX9GrqQXN24VHAEdu8gPf6fB2Frtw",
  "key33": "5ZpYac7mJZPXoBJ6rvTUjGNhjjLtZoqbKL5W73RzBKMFdj35BXuQV7GLDRvBkbtWbYD4aZzgeybmucP2bS2sY2ud",
  "key34": "3YSxBThgxvq9aidyzptw69HSpyN3pUrW7uiqwNzSjeezpwr7UYVb9uPYKzq6Squ3AzShsir36Byicu7ByErktUVT",
  "key35": "vMrWnipmJzdeGgin5Vnisod9FN7fJxx7S4HGb85DNnbG9eEzQoGDEPdK7KQ56SkzBAePM76QV9ernzXaUPNeAtW"
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

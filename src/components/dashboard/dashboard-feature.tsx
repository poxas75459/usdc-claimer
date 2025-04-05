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
    "cPMzWP5bUQ9pvJh9rzBCLpxQnLLtPQ4H3VzSxTa8d74dDFxzqfxTWdkAAypnpeWQzv19kkvoogXan1ackQjBXrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzmK8JyK9EkUpAubFkLn54BGfGRG8ekBhihqrd4vgfojVmh4jj3GNeYRFcfA6msZYYBKAXtp5tUkgC5ss8Htdzh",
  "key1": "5nVWSYpexok5qmZmJ6XcMmQMz7RMdtWSqMueGypMatanNbrr1AB2qa8iqQ296WNGAJfCzUa6AoPxJN2HVq3QGKnW",
  "key2": "3nTcB4nvv4yZShMSGtC6SYLYMj8PW46AhpkukytbmAdT1BRzJ6ZqPgNQwWzWfsFy1jqyq9eXZeTByZEhL1J8PdAq",
  "key3": "5fDEy3EebcBs9U7VjFiq5qEViqSuTc7Sywkf4raLzr2wHHtoQ5MLhW8uS3EvfDHsDWRsKkqnetpQCuPHSajM4taj",
  "key4": "3suMLNrm74nWB99TJeU3jxdmBbFYp7QVEzK4bdgRqMCmwJj43sjtDaaRi59iFkT7aRzytnLkQLvrDUVTedvyZf3D",
  "key5": "X3PWKXHeSFNe4mgbDDYAJfC1nG6cKtGST5ndEyJad3dasMRGiu3DMGEnve3iWKGRihJLFBFrNGLJSN5ZhyfsiEQ",
  "key6": "2VDJySUpuJFoYeuH8uo6tEukGyjghWZeSWDqASqfBVkcRtabwKpNYdXbJRsjYEvtbagdi1CymAMhrHqPm4esWEzf",
  "key7": "4TtS8TERE475uTRTBVtnZ3ZcuFEBZRMBtuRJxiopnJgPHVCe1N8GhFzH4bpRbfL6FuRyHQhmQ8CMdhkxj8dyorZq",
  "key8": "5hSPA2jn1Ei4QTEga5CsMpXMGQdwSx9u2Rqf4cx6MoTjqBZ5L6i1ESzZSD4BTsYrcqGyjN7n94H3CGdem57mgkv9",
  "key9": "45YH4ukotcm6LjohFCxy1H5WXtUejdej13Xo7GraiNXWcc3cbScTW1Z6Xrj47J4ZakMyZ1G4s1mWbwoT3rmqkBHE",
  "key10": "WunxyTcxFuUxHU6oB3oh317v4AqTdtegLpaxehL3YkgSa2ddY8Ea7RDErrYvVAbc3KktERUbdn8Mbqvaw9Nhzr2",
  "key11": "3wVxvCR5VPWPY65gz6SkopVWc5nqB16kLs8LuSPnKSR8UowLr52THDkXwAS6u9fogK65TbYgLe37W48ebWpD6poL",
  "key12": "5fATF9dGkfXqV1R2ectpAYBtwFN87kmqfyiK8hV89GKeQNEC9qkq7Se9vZvwcn1zHFfQkxtEWpN8cuDcDRtYXSDe",
  "key13": "3XMVEGjfiMrMUfcFBTBicWAvigeiwjzzqGyCrmEyC7smj6usu5URXomZFQuqqkaXhiSSb8nowNdW2mpRy5eJ13jF",
  "key14": "4uZr85X53oyzqiPaHEqZbmT8VT3fHjtPrB4gpfWHqJbcf99RXVaVj8HaJxEbuqrWnVZafsAwAqEecaUspDx3kRt2",
  "key15": "4UoeTtHLbBMKwrMFSJditRCWzt2QDgZy22Lofde9vU3jvKT6bRhUbDzwS6A33bfhsRCh4NzL7dfh3nrcTHj2ycuF",
  "key16": "euaJBuR6NQdgj7mrLXwf3QV3oZQBe4zAmHXN8jSaTCchVhN54QvsNexUPg3cyYHrZhU7g5cvT9XNTKcorpTJorF",
  "key17": "2AA1ZBo9uf2ZDXBWWfZVGAjfTeBtXi5KD82kVFZxriYQy3xqh5Ud5UWEx2zzmsf1NTaZ4qJD7BrPX7hUNBe4SzpX",
  "key18": "3DPixgnG8EaX4UryUgMVxy7X6XozmuHbHfaDqZmXeAPVVpHVSvCyg6JWxwgTf45GUUnjz9JRDqF89PvLPAJ6qGsH",
  "key19": "3cCFFmcZmuPjiT7nTY8QTzPgTzqj1vQ4YGvt8jCRi6Nm75kKVN5s219HyuVVvmKsnmDLn8sRChAbu2LcJyGAZCjr",
  "key20": "3SonxMRwEypvfbMGZFXhTrvHEhza4x6UZ6rMyaugHPL6YXgq1beFCxzD3pDP9mQ2AqJknP5sTYLrGaxw7DkV8jcx",
  "key21": "sPDP1inLw22NuSA3DBmr4XE85WXfkbeAqfELvG4FegBEGyC6KxdBNKN65rQpFcuNJwauqrQFmCaMNRuxTbQyRP9",
  "key22": "3CWMJWMfmRkrDmTE5s655GDZkt4grscEfKwhHtVL8f9HMxRswnjmzbyYVdgU2VKWH1RY3i5PUNqtThvv3VVDJ3ti",
  "key23": "3sP4QGn7YAjnaAQgzmQvJJq5E1j85z6GE3xph6kbMxQN98xVtsxTiGCtXzRhN6yuT3FLKZkdSu9WN3W8Kuts5ZsP",
  "key24": "zzHYV9Ete3MGcV3Nn7riPHiZjDorVrdcH2REbFbmkeAwW2rfCSxSg8vKkcHQVntfspp9kaeAxZksQD4zXjRn4ZY",
  "key25": "5UKQEzaSuLDWxJMKcq5ksBZNAs9sfy8ZNnpByj4zE8wR1BriNAdgvUSDjaF6NSgg8JhiFRuxbea9rvNKXkEP64zC",
  "key26": "43PUub9H163XJbCW3qVNXJB3h9EmAnooBaB56VDTL6W3jC8X3beL73XCBD2voqPgcVckJHiqdfz9TK1e7NmzqiXJ",
  "key27": "2X5z8G6emkPittD6rnxrEuisd4F8guuRP1oRAUin44ShUeyCqBbw9uA4qJJU57Hb6ggDkctN7uz7Kdabjy2LkwzG",
  "key28": "5C1EBhbwddFUv3fKACDWy735zLikPU5EiW1GqbBLFapR9gj3RLVGK8Xi3gCRs14mQVLmUhWKzPR3xgJNt7XWV6i6",
  "key29": "3CfWBf29GQTDwfa92dZHFA5NnY9v7yMkeXCayqVfrhYpv84M7LuVtRnFudSXCScze9miDVF6GG9oPG5hkCsYczRm",
  "key30": "5Y2qk6kHisfAML4JDmfL2KwxFAqW5gUCaouZEAxRHN53NunKPxuqKpRKvMjxCnNpS5zMYEBPoPeUVc9cR89Hwt4h",
  "key31": "3LcohfZHynRMCPybenozfgqrBMSr8s2FWVJH4aXCotuzuZ2tPJNghbVwjxu59QJaJtnN3iMkuv9tZKJNAspF7QKX",
  "key32": "2E1DnZLXoCL8CRzLnTvFAeuMjHzYvMvNH5fxEfZUovboxwMhmjwMnTvferjPL2jsks66HPCJz8WUGPNbRHfFUEyV",
  "key33": "2iN8V9LivVvR1UQn42jDT8Ap6XpqUAzww3eCcBvhdx8hRtbmP3VXssF3ynf295RRHchF7YXGHFk98pg7Pxv8KBqx",
  "key34": "48fbA25yuV7oJzr826LSfyBGJWjmqau5RJzeN3oXim6TVcH8Zeh2sVosuQBW39xWNU2qAFJJeSkvmpEgWCr5iNxm",
  "key35": "4EfsW8vcn58UMD9dkJJPfKAmjAArd3vhdDG47wBaKXrfUSb7N4WnEqEjKFhVRoVZwTJnbLZkWu8pbZNC9abYHCY3",
  "key36": "4YYnxvPq6fuW7Z1J55hNAmdxLUZsXVK1c15uMoKimrc2HFHnWFThFhyDq3dhddtGNTXkbPJWncsw8ZZ9N5Rp5kuU",
  "key37": "5HM2SHFwN9127ZcZN42XE8zSfehP2pdsCP6YcAFN6C3cxf9xF59dPGTKKFiSuLE7dWhvK8bPf1Xw5zjrdF1q4dPE",
  "key38": "3RG4EmPS23qqSZbSWd4tv8XMppmPAwv5x3WhyzMe4YUZgFBuefDTjdekH6pD5e8P8tnippn3cwEavgpnuHCKBPQK",
  "key39": "22kC3iQsPUDieijKCtQQi6VVKWxrwiFZ3XtQvcqzxMeUJoDLtFHNrTbZRpKdPSep4EfbMYwux37AWnDojznR3Npg",
  "key40": "W5ugjPdwHGtVXZhzqocVaD18oBD2t4Rymqej5wNyWYNJbVQqWUW58daZqAKZekeW8VriphTNX1xChcVRx8sNAbA"
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

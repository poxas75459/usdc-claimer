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
    "21pMCdBK9WozzN3iq3V6bPM8gWVmAVdp25MxHTgBKf54ETW8iZibesQHLNTC52SzpxjAeLDKUkt8ifazfPxJYFmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSEodLtgNMg94uQsfqZCpk2Arh5fKbotAAyYTx6ziKQqCHUEPWy6oFSAZ512jSf1jgacrcinEGH6c1PtQq9YSsT",
  "key1": "2ts3HDCKSyytdPtWUbQjY6ksJDjxCLe4CpeSDv1sxtm7PabQ3AY7Hf4HNEc5aeKQ1Qi1BifjRyCM4CSqgip5MDBn",
  "key2": "4APNkDsGg4HY3PwJQ6Zh86rjqjNUgRwR57Vqms3fRznEPdtenKjneTUp4tydzi8pACaHC31hJ5zcL7CvtXMPK73h",
  "key3": "4NSBffXagyoYqWM9N5h7A632nmENHLAUmF7TSAGHgQuJ3ji85JuqD3c297o5nLS8QEeLizu49hEqboo3sYm3A8wk",
  "key4": "55FPJ9RPmS8nCRsx8hbb8NjSKw5mVEhBxQiiPAJcBqm1ko62d3vQ88M7bheeQB1ofc8Rx3NXFcubJ56GZobyq3rV",
  "key5": "2ijH4o2SRbt3nbvx5Dt31hCa1tjHQ3hW5BywxayhjobArJjPrfWJXqausqNiTpoWqZYcxEvn6jHfVzk37ivaXeRW",
  "key6": "29FWVYaYPSiZz4smPJfJzW33UJ9CJdSQf4DdNdvsZ4FdtK7GLVVBJNQv6SsieummPWaoJ3S8aosZbxFsN5hDYJpb",
  "key7": "2ew5SsYpuFaT1JFGRSr4m9ocvsqiDbeQnJEbA5vy7Gbj2PeErsM4uYbhMCx6nAJnqfsxFApYoa2Y6nPCJEWFjCBJ",
  "key8": "52p3qawFwYBHn6BR5pPSix4HypZhNkqPxvtg8QuhT9LbCX6WV2SauVVcQi1a5ixYG1zYCLBdjCNAKPqrrL6UV1Lk",
  "key9": "2a68iK8KDWyNyfLZ9TfyLwUHSocb4LMrwZ12byc2yNvzApk7xjShAqCZdqWVbTytWeLW8MNfnVutdnDL2oLc9Z8f",
  "key10": "41eto9mM3yf1UnRPLjKFixrjLtRZX68bTkiLZBYjB5eQJCNye2H4LgWZT86xs3vFtfzxqGXGXH1aTayrfzmXswVk",
  "key11": "QncgpPhKRvZxmFudufhzrvivVDrzriM58GVBTiVm2C5daK2NTBz4MUcAXkK9ikBWN1x3FcDaPAYgxAFEi8NZA84",
  "key12": "49nmAmxQpexXtRhq3efCmedzafAvnrAnf8ooXfyvo3iLsGvhbvXWF6WjKi6EGfVmxZaMmRjxwHq2j6hGQVZz2cbj",
  "key13": "27j5BEeoH5fXKk4vGJYi6ASXBuVP6ow3o4g3eUUTK5imcNz6xVHWFD1A2bVPN3E1KWAbsPM2p8bpXqhsECBEFuKy",
  "key14": "4ZU57mGt7yvVecvU8VyCT7kVAAH5qnsKu6XYtBBn1d2HvYMUmJ1xXP3jZv84arkffaKg882ZMiQJgDHaiFpncCvD",
  "key15": "3mvepy4FrvdwLmSkYr7QcWXiew6ouqBkMnReqVKJ3KUEjSXDmK3PPhUumP65iYt9K6x5u1arjadSPVFofWpzX3un",
  "key16": "2RcJF6mc1nyV2NwuuYbbB3a215Rn5uEQ8xsgw1L78T7QEoyZSBB1Phkcsvsqy2W4tNXyqRasuG5ViccG63Eke6Lp",
  "key17": "5VYkumpaeuUpSz4VvjKzJmRYG62QRunKTgUXBUBm73nQBKN8M9yMS647ucYwQhKgstsxVqovQVwPXBe1SeVzSEXV",
  "key18": "ktPW3M1JiUeK8CRegXkU7KNfmraBJGuZa241Xw6yBPTpww361peSqnTzq5AnUjqcp6P9GSVUYMMEneENzkSUeSA",
  "key19": "sXinekfffXZVg6QsLvLDo8Qk4aGbTiJckDzT17iFRkgPvPjVi5kNCS3Zv79VEJ3DfV78uCkEe41uVuU9g8aNeLw",
  "key20": "KXCNL6SEoiNr2ZHbBmpqq9VmS9U3fTpzk6PG5tDGxG7a7zKnTAxvth4BJKGXSDKf1s9mM31KjmdrLxyGtH7PLnd",
  "key21": "5DyZkefz2VJ6fevLH15M23u2zJCNuTtN3BPRvTBgxpEk9g1MoWtniHAWv5Fi6HTN6FWqKJsi6C55dip9UkhSXgMv",
  "key22": "H8v5QHt51pyaSHngW4bjgqQ2udMGbSf3eivq8Mhdh5iFBgCxgH1hWpEzBBSaCvEx3Jce97uArvkuZULxWyDawiZ",
  "key23": "4BdySsrRUpPAPuQV9c1nN5n4PFcpyu7aJ5Q8HDsAU2mUxbeN66hZL9325A6GHVCzshwQ87pHo9iXGwzR6eV4zRWD",
  "key24": "3FpH4mpbfPdyCzUC5eKqhHzS2xa7eF9tGygwiZQzFtKj8sqcdLxA6Bvf5FkVboo7XY4nK9QLtpGy8e1iY65NkZ36",
  "key25": "3PASS1wFztr6oRPjXxEauixQyU86dwAaFx5MDkis4BNRYqgxG2zEiD5eVuVhfuSv5BoGq1ocgEy6L72yHjK3JLPA",
  "key26": "5eAZTgHjerqhfa2tGvt5dmNyr9dFJJuqgQQhPUFQwH7PDdVgu851oFrQsR1kzb9uo3s9xyUsFyFJxpvjeaN5sNNP",
  "key27": "55wa641po32Pqs4oReXi8dMezKsQU9UpJUym2Q4pv4rhVTSkve8XzsucxVtvigA7yvgphF7QnZSkthEKSKtpvehF",
  "key28": "47KUguuJsvoD35TDx2vKrkFw25oNVperu89gF8BhaeyzV13ULBE4SKrGtkrJ9SdGqHynq8mWNQjBvqHEeQBW2oCN",
  "key29": "3mem1cC3tGbPZuyeYoEgsuvG4YRon6ZRuyHUSj4ZDfCtp2GCP91c1nk1SxrjkyvdgH4bjnUrkgxbLBTZb22swdSo",
  "key30": "4QQMtRscx21YGemhhmBSwKki98TFWBpXUkBXdKjnaFGUC8N6nBvnVYZraP9AXBkUi5p35YRey9jyo7tNn679oGmm",
  "key31": "2bVXmNvK3B1YUXekeFVbHDAPqAgc1GFW7Yaajr33veb5F4cHiLq3NTRqKbEkihWJoNtZrsJVTH6QKkAd3ij4dHTv",
  "key32": "42FU9Cm2wirYJF7XMcBdP2Ad4VBQ51HH54oUvJw8CsdyJbwHZGCztxkr1HSoLVGp4H5dgxyfaif6QrkTnkBQYdTm",
  "key33": "2VX125pFHx36DYbp7AvCs1VybGaUvnpo5kPsF1KbjVxBioy7L6ZE1rURkhkyYXjT154UMP8F2DDDdnn5TXVYEgRT",
  "key34": "n3M41b9vkhgxzkhZ52LgRyXQUNkZ35FHfFKymiYiZEp9yTeyLoaX2qnkj4weq8BzVBuTtSLhSJCuG26Dwjr1iT8",
  "key35": "5yR7wJZuexTxFCv1Vv3398raDPumNQvoRRZFn85XWusR1XLf3hm4XEqoYHP5mE2WAKq1p8pSn7rJbw9LJeLDEhwV",
  "key36": "36FaecydvF7PZtRdAdxBKznrCf63exkFp92JGwvDDaGKp7pc9492e6i3bVt3K6dLPgBnGJ8CxYu73EyeYEMcWv8e",
  "key37": "4czqoyCNsoxfNHGeQLZJ6RLVaj1oYbLWThkDv9MALVCPWNrHZTQ2Ee2Bd84NMhDaVbgmh9HidpgHneREwRnoLp9M",
  "key38": "2cQZw1XZNpzQKrgxZrqQ5a9Sxo1Tkq3mtrUxCzm2h3VXfVEQvT969bn8SUvxjoXqj4DKuiJkWbCskxSGGhDrqkE4",
  "key39": "bYVaeL2ckZTESKrXAjA9kSER2qkVEZfgfC59e1VFUshjFf1V8nYfSjz94BJyN6f9hy5QWe6ZQndVkwksTXQGxmx",
  "key40": "3dkZodhQuPZSZDUaM7Vhd5wHCSBCpySALCwmUWgWLMr7CiUeMg5xevBTWvpkiKA9oLcYmB8tz1FT3GfEgGQpqmmj",
  "key41": "CZPWA2zNa4VE6hUyxFNGqw6BwWP4Zp6dMuC9enEm7DuVGHjUUMZLp1FHWZ2zsSc6FTA16B8CpN8AUEgfmGbFjE2",
  "key42": "4a7PggPre3Qht6sDR2yfpGhwwHEsUvmDuUfvDco5z7q8TMaGkgJzWaU6hE2337RZFL1v1U2QmGTioPx7d9qTYbsn",
  "key43": "2RLJk5ZEEb2HQ3ZLMHquFQ3hsp3zUXywuWwCKYU5QXWjSJhSSv11xS3CAH532ghDdQzoAot5VfVd22hjZqBB2tnV",
  "key44": "2DekGjV91MYqVFEkxHi7hxx8n4HfX9DXBPsnB3A78DAZjTH1v4W1h2jajRd8XFXCBFriwiVt2rucg3VqAPxKTVdy"
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

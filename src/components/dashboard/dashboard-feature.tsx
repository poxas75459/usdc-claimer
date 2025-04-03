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
    "4ZP6c6ncwDCEzwAgvekDksU1kmwqkNxoZmHd6eNj1LzQuFnkoWk31g4cN4W5deqFDpCR5ajRg5BMoeoGpAQyQrL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJNeDj1iMGfDEnKvZKe9AtTTrCQf5vDhZrdLgVNK49gSgS2WsWogbVghB4YehR8zRzXZewMaGd1Leqy2z3r7jbS",
  "key1": "z3a2uBYXpm6Ec9YcYbi1vpkezgZGC7Lx3PDzLeBDgRpQ8gWxyPJqQ5NUJ7X7U7qkvbMJR3Z76HGcDQU7k3y3dKS",
  "key2": "4u7yKQbjaZprcHGmMLv3YPxgUdWTyxsf7V7FG8Ge9nWeEJ7V84dEezkX9XJUBaeTkqFxPfPggfuV8b8vaYcqgWpY",
  "key3": "5rBNRthWoerNDfvkjGuQa7ZkFg7a9Ac2avWZFgzDtV1kUP33N8eKibDP21muVEUhdcoC1FiECEHPvgP3b173wQrY",
  "key4": "4uxqoTNpec2Ygdz8HUtBsYFEr2i692HnzBBRjJ1gVkR4jCrx9mVK3aEXeM7KD8YxaS2jFJtJVQpHoFmone24fAiz",
  "key5": "4Doj2ax8GEBCuxVWhpbqF64uYjyHtznw2weKaeoRa2oWS4iWuzstoHHLV8PzYz6ceFbPYFCqUs7YhKxTZsrnmWXi",
  "key6": "Anh237nFADv7jKbimS3KCdtem1f3gyeZF8fasrEfgDfJFFXMgknfKftgLJnGyEh4xkuASi4Sd9mEAccjLcZGN4H",
  "key7": "5Y2pb7UQqR6Fgvgn7THGtWFwjRqprRojnktV5cq3qYr5pWwxh3GMbgVRruap76sCqwwUbvbsXhQrDSD2G8ohTwMj",
  "key8": "5cGWRnWrS9CaKnktjTnsGfs4pUTshS8gYCpCyNyQ5o2eGPDtbTDq2WBihzZNw7qmhobeY4Gbv3GvFR3SpRPpyPN9",
  "key9": "4MfETT1eGq36Vo9opu5fDg8qzYE7mUWAVJezeabffBmmwFSBSLhUrUpE7HQZETdtSzic6KrsxVqo8n5Zhms5y8Rh",
  "key10": "31j73sM4bPEWUWxJpS2aBRUfMG5hv2HiFimNMYpqomHKpoBhyQ72pSaNT8w5UdR59tESo7ck8B9FZAcPUid8UwfD",
  "key11": "ewrkLBRnd2F1qrKDiJ7RhtDzdBxUqnmTotWMVK7HSsJAUvQ32KpXaAd5cHJdxMEtyN1tP5nB4dLLie5ZWDTsbfB",
  "key12": "3FSyJxd9dZMWHi6s8R2U37BGCaoFwmafqYCYeiepcnZNtJgiKtGW1e8mEZLpAbKzm5WCb133NN4X7FM1vCz4Huei",
  "key13": "2WRMxeoAU1ymLYd5iLxH1nwzNNF3LtSC9UoH9EXe8Pb1MPkCyqV25LC7ekzEb6dPAGRCbMVvnt4xdDY2WLu6xaTN",
  "key14": "5RPuM3SRPwhMoTVbyjKpUydKcbm6SHxEH6cGiYxHZDWEHfqbQzKauhKk38QPWvsVhZgkL4795jgGJGUigHdqzuCs",
  "key15": "jMLmyb5yRpZyHRpyS9vxJ4nvmkRZinX7wVCyhpNxEZNNauCZhNbUeQeDL2MGgs9Xf6XRTni6m6dsStcK8eNfrAc",
  "key16": "3i4YTueKTB8DvfeiB95qDHtchcZYhgniZ8EkCw54qRTf4z6ThpRGyasovnKgtTPGaFEX7qzTpoZmm8uDqZreqMt1",
  "key17": "46cgAGekji8nGVK1AFP16AtBk6pzampMpERFoVnyvVkCQgxJz3hXdUWvRBu7igT7XNxLKH5CtnGqtDtszZNbfFY4",
  "key18": "deityz4nGXGx7YkM3vQ6RfYJX4JxEz5494hGcK3R4q4oD2sEDkteY5UGbXWNUE4VRpp5tj5BuHmuekB39WVbRJQ",
  "key19": "2ug5stkCzG9dFAza81YtTU3UvvaGVNmGnhqemfmpgdYNwtttticSXyBLwXfn8HvHgfxNCzavjp4z8HU8wg3gEdTu",
  "key20": "3y77rWXr3G62zFModZWVr45fkeqtrA6zDnK1zEWxuchjP42W1jQazB3snz6nMjDqS2jZkTfY3SPPCZ8Fx782cuKv",
  "key21": "2tt1s2PXKPU9PVdwVug1Qf5ZVgGBZkttnfwMhyYAERzN53YcdjgqXKxQbns7fA8QzMtuUZAfixtoggPkWdEeCPer",
  "key22": "5tgmPkpKR9CzSMsufQhdzzedz5aFeyjJCPLcHJSVBjW3U3HE8sunANKV92M8B1WnkboM6NCfQJkc67CPdj6DtHBy",
  "key23": "5XYTZxvz1ktrxvebikr8Vx1VuDK72WdHpvv6o7CCnsJKUNqxTFDKfNywnQPiE924uoeUcNbhx99CWctS7ba117Ki",
  "key24": "3Rq1rStCkvjzqTRgQveXoFWmdhjtwBRTUsts2weUKkKiUWoBgSKLeCCwisaWbeArBaMY1BnJqDvnmzsJ8yYLfWKG",
  "key25": "2w3JMfFUu97JZK2pqMcKrbYvFTybx83Es9H4ybJAAHN6cfG7HSePu7VbwUac2ks3dn53vdjcHZnMxc1Lm23gsxop",
  "key26": "3oodQ9fbW5DUD9mE8VSah3KpXs9yH3sA27Po6acCqfceo3ccDzorEpf6kDgQHfSyrudTyAFxiVEVP429E7H5MBsL",
  "key27": "29Dn1YWmCnSs5WDMnWkaJzn6nNcneJniPEfBJhgT2uTmFC427UG4Fw3tL6nwZZHAG4mu48CjGRzfSoBCWYP1gost",
  "key28": "3fvLBDWLezjptaaGfWnqSsKMHssfnuaL9jPEPi8iKwVoq9MnPaJTVSkVJCz4p3g2Vov9sSvQ5EsvMxGSYBx2zkX2",
  "key29": "2U6NVq8SoJL8z9VEiWqgdJabChWCgoEaMENDW9nynpV1Hp9hGXmoXWETHW9osxkFf8Rj7un57oSccNPukACVgbde",
  "key30": "5j11d4Fh9AFnyUkycaWsfThBr7EDL4dxGwPC9Vzvz27MRcqraVhj3pMfrc3AzPLV8WVAyeGPzkS7MeeJQELqoBLH",
  "key31": "4dcKuMHDm1ce9MQHJbqX8PMdDDvyEeDchGEvmqrkemHNQXyz87muNpr2qb3iN5ETPiNqfXskF9bbf3ApLYDaE4Bn",
  "key32": "5nZgCyAbCdPKnWkCNJTH3NcLFaZ1S1xyKb9FurEFibJ819PTcnhQsM39e2dJZ66A1FbnKmDWd5ZMzGpe1FzJgDyx",
  "key33": "2Kfo6bXtanyM7BFLiW2qsnX3ezBexJtQ6jmHqYXH1wSo2mAobU5qy3DAoe2hih97q7mnJpWga4QKuAShDoEcYqRk",
  "key34": "3YJVNykPS9CGvWpW1EfMUVPPZuPDLVmYqhUc9DPbiMYc6p4uPb8FanUVy81trSQjr7AFmVnCGhcgZTesWyvMTwgz",
  "key35": "4ZKwzDq9uWXUuJpC29K6rD1xw9EpkKfrDwgC5S9hEzBmxRbuE5wTnEXMmBLNUNFqJUQ3SKw3Fzh81GKXrwtHpEqi",
  "key36": "4seBB2yqnZ8xTGhzqcqVMjpz226ypVV7X5QHDp45aq79eA7paftpU5gsFeAJPqS9EZnShd26nfZGG6QBXWFHCS9T",
  "key37": "kiL8nEr6Me41rzq6jaFzZrCE42NgeK4YqDQ7DtjoHfWn415TU6vVjq8m6X2wDPbx1ddnWv2AvCdpfpfok1cptp4",
  "key38": "3hvtwhesKyQ97yxuib4KuVWNLXHbMm6JUk8PaxHsDRu6EJFJ1GKutSam2iVXjKaf36u2Yn8TqSq28gzFgmBgxSjY",
  "key39": "5RNx9QboniwoHU1AqLEEUzCwpGr3UpKYyQQjxB9oERZKEpSyEM5o2Upajda2xkQxALiFDXTUu3sEVneoU2TGyq1h",
  "key40": "5gLc7vucLH6iYcyooRRbXcTRrgnuFf1ri9nZQCTXvTw9Tk2yzT8MDSuQznwAsrFsPdRUPvyrFhvELxcixSbfr3CS",
  "key41": "4j4Xkr8fK6VAE78y73gVi9WNmF6vy8ZkoaqwNhcaXcuKRB4wYd9Adg6T6jrvCft6rbjHh2rWpmGPDAUTT5DKgpnx",
  "key42": "aDFiDshYSSxaAw6nsv5MBGP2HTZHZMjGtad973AbfXnY1JYGurR5zDq4QgiLXYGTdNrTTeZZdkXc5Zs1Juhfsv4",
  "key43": "uQhEa6u566jqix5LG3w35dNMgVB9ZP4aD8VPnnZz6KiCRKAEGf3zvWBT6CkT1irHcwNAuwFD4nFm4uBrPgfrZTj",
  "key44": "4f4USNFWGER66smmKT7qeEVcQvwcGSuST8yTPuWefoBjmV34nxMR8iTjp5HCJZy3JqyKeUDXGapBJQk5VKkd3H82",
  "key45": "4uxM8JtSNKJxuGgzxQN9DnwHJQ69tBHr8gdtDftushPZBHz7s8jpAZxL6ndshRyVmwQwYhUsA6ie9XctTMntvKFU",
  "key46": "2xmiPFzafAgioHFwB76oJybJLvU3xKpQ41dHSmr36RfGzeh3cE3v5hTJ17UW5LPXDSjbnuFi5X9VvKbu1mfi1mKd"
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

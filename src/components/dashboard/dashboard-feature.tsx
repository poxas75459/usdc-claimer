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
    "2cFm6d4jXxmV4JrU53NaSLU7nobWoKRNF3dQnjF5tNApf649evCKXrUCZH63zqgVgAywu3m55DKVjM4cji38VMqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FAaw75DExsTPBZHHoFJEm8bKtumd9GQM2qh2o2UUdavbEnn522HBRDX5D3cekcAjucyRjLBPS4frhuGGW94ExKx",
  "key1": "3R81ibAffnofc3UKqGji1qga8W12CAFYiwnhVTP3XPhnZq87ofssTgm1AVnRYGAfNZiut1NhWsjA7AULmqm1W8jj",
  "key2": "456XdPKNsrgCDyx1veJVXwxXExH6t1y4K1PWGgo4q2jr4m2xGszWutcTmJUGUuDXkZYeByq3nKDPuwYUSKvcNe8r",
  "key3": "kXVCHjuTozJphz9tSUYbFKxtS96yedNcVyviv1jrQXnsYoye7zpdMC2L59CAUekVRM2dhVK9wvWJJdzuBgQdXnS",
  "key4": "2HeY6s5hWGEY97P359eu8bv3fMJ4w1a79rvSALxxVCJUA8ichD512WyPobKh5etrSNRX8SBwZ6rM88d1pVc8bbqJ",
  "key5": "3n29JNbdjU1XRNxJjXqojzrn5E37WEDdejppQobJJFEUVAfedgPnKsiFA22w7SCS7kvLXr1KAZva81MEMCqThrxi",
  "key6": "3YNpWSGF4qpjzjvfKkGruuC9Pzdhxsr1q4C8aP3SYquWCoPfHXWfNgm2FMYwPJ7M1aMnMBjLbaDBYhxVH5GEvddq",
  "key7": "4neW7Ss7kAzrUAQjb81HBsnvt1Kk1mauyh4bmt5A74RcJL3aNDXoYhvKVsQmY9Z4MUidruMVNVDowyDsELy1RJj4",
  "key8": "5Zm4WSqEYCYwwnou6Su4xXatc5SpMMoLJcsMXqVGsYPA1n63Lws6JwJgkQ3LTxP7gWudvdtgcmwC79vqf8mC6A7h",
  "key9": "difNGQyCTqYX1XEdZHiisKRwgbcxWkzdP2WGp2axoqunvc2h7V8JDbSkTUFnqi5zpcR45zw6DybAxNRLT5YMhqZ",
  "key10": "3N6MJbXRvcGcZuzMyeyyRUjtZ4Q29gssNCEfJivEh9Z4d2spyDqJkGscvexYNqcxqxjmYzf1Hbax4vrrgpj7ANuf",
  "key11": "EWsPFz2tF9q3NJ67FdQjaWHoxW7QFky2efkpEgMF9ZAfVufkexJKuaFvj5CSqQgr4s8j4sGvX1FWnUxFvZazZdk",
  "key12": "5jPhCmSP6eXQnn8BPn7iHjvEKDtPwbaMxuDVzaD41j9FJNCJPbhWteFdx55izddQBiVbqTmxqzNiZevz9y47uZYw",
  "key13": "4KBJvt8jjr5NvhzpW4dfN96sT97Tvg9R2fZGr34DzYZLexq5ocw9H2QPBWePheT1v6wdsgspAUF7dvdZZBfezZHY",
  "key14": "4r8h6NErvufUuF3uaWhL9CczA88hf3ezX9ECVKrMJGLKSGVmHEurGgaGK1y6h6qgYh9GPqhVjA6e6w9VwVRirTAB",
  "key15": "4qGXbuBnLJTbNKWfnecesaXpJCrugUxkboL6dg7xBDE2H2Tfhj6WiLWTi3F321nK6V6MLDz3ioBme2bXWhXy1CHC",
  "key16": "2CjsvsF3Q3RZkizSJUiyo5PqazkVXpFV9saoq78WongcZizAqV1NkKDrt94JDjkNQmgQ6XFmQxvY6qEzCemswRUW",
  "key17": "UMLKMeJqcYNvfhmgydoT6ojtRPuJQaweGdpFih64KszSrB2RLBpoKfJaRqmVjKGFxFJbs9CDm8JHPnqTeDXJ3dj",
  "key18": "3DudLiJpXtSYqhTtjZZypYKXkV7CMoqdXhatR3Kg2vzqz2Mh5Tzfc5NMKLzWudueyoPxq9mK9WSsDwu6L4KCKtUi",
  "key19": "4W52JnqqRUBq7Sp7vCTuMCYQG1XtqoPfhCKSjWZxLDQRcLRifYuMHRnPv1KZUkaoTTV7QuZPGuYLeTfwnM5LP1xb",
  "key20": "5rSyk2jcaUc4wev6ckY4mvNuyh59nyYx9U7aGJxfPZeT3LWB9GmRJuNdNbtgi98zEK93WYzqxJspKbxMiykaaCqv",
  "key21": "7qfnEp3Cx1UPCk9mB5b1YwvrrmnuDheX8XvLbYWCfZnQ1QkgEyyFUvumdrPSMHoFXtf85i92pzgFd6TroZRBuMx",
  "key22": "2U829tThNTB7M31vo7HaELMLACxpo4ZCsAbqD8JaQWyds9SXULL98CH5qGm6nAQcrKKkkPiuweCeeAnKyEDAczuN",
  "key23": "2yyAX7QFfTy8rrewB4FeGturTyM6j1JfMiriAjNb8t1etjDui3eZvP4CRJrwfkCPnAb7VxNEmp2hreQnXoUBEday",
  "key24": "5LdV81DG1vAhf88t8ZjKgBFL7Apy4cAKbjZghbqQE3FuXDC7BRMmtwRPczAfejGFxZriagBpp6Nbnt93M6o2rbAS",
  "key25": "47aTnW7Hd4jrtuLNnRnaAMjFvcK3tPyHnRdPERaEorYQQDiNWyDaCeYUBvisbF5tVhshRwykQtNWiUqXbbXukEKq",
  "key26": "3xWRxRX2jgpUhcL2ob3sbQgZMr8zjq6sZVL3JruLSpEhBfk3H9kZg4K27nm4LKzYgXhwWE4PVgzv5nqkJXo5U1vT",
  "key27": "517vaB6yLX3cQgrjv5WEDbWwftHu1xgQDNGob6SW85YWe3Mg5cMezY92wBGPP3K25EDCFLqLNmf8YjmaK7cXcw7K",
  "key28": "hC1GejCeZeiwVJEJ4LA52mh9XUp2gFgqMYgCqff5Tp5VeKSDm4i7FQ3JW1d2yxsD7pueL7CvmjovsdQNaqE298L",
  "key29": "2QYoCBbYJhPZkpXVbYzUkJuoVxwjqsweYJJz8vHXRFqST4zKMQHvfo4JUPWPPyDQoqMCY3KU9E1ZXb6UaCbQU3Cw",
  "key30": "Cfwd7Rc8wFbTiZbU5oYTZEpGW4VLQ6rPpEt6htbfpz6u6qQq7GcW3VTRPhy2gHxHExnW4bkpuJHv7RGL2awzaqM",
  "key31": "2aEkEAH3ECErPGEMS8K7zucx2UnfRyWW1w9ashc1tAQ3oxxNUjA3kLzDgTDDSa4LBEhyNgSP76MkdYVNs24hXtPT",
  "key32": "27ixpaeVfsDc5W6DshGjHkfQvG2Gd6E7jbBMntVygv2tt7CnxcJ8vvgAnGwSxYzTFsiv7Wh1fhZvQCXTYRPuM1Xc",
  "key33": "3zAaJjxqnwinhct3cebhun7w57r9eXPcg5hmZrc4gY7o7xVa8jJnR4HfR9uGbtuoLJzyXSUhjwZSDDzPQnyfUKge",
  "key34": "4spSAhkkHHV3WrWrzZ6ZrUAWtco5A9gTJqXDQEsJbDLFxWzaNojWHEAWvwPFnKCJ8Ti4BX6pwnXiL7BFqVxVqQTv",
  "key35": "62nvsR8wczNvEPHZ5tVTMHDSGpZ3FoP1Ap6yexeWJZwMXuGvR47fCzFS3KRNB3KTse6SfRgxm9mWyW7RjFXKCBM3",
  "key36": "52P8J6YTgMsLLEbop4akEhXvqAq8mCYN6jkXxwqTEeBe5eRfsUNrKen8eLrHHu3oR22c24o6kHutwy7dcKU8x6w7",
  "key37": "4bGdXHTryXvX7t2xGxi7xBP1VxuFUcdj968PGmAXqq2Jtn7yZz8nruPXkYGz6N3ytREnB19reNz4Zmsog7m1LaUS",
  "key38": "3xjuDyDLMiQy7Z51BrA9ycyVFNustf6HHVwWRCBMWcbNkmm5erm4m6FSeYn1PqFeg4ntbgpJrgxCPunzNjJYnnbN",
  "key39": "37YPGXSAwNfNnhncTc6hL5VY5Z7f7XyrirqySaxNSbycvkpvqx3vEKPMxLhXiP1kyLyW8wuruYBTeJR5opQ7HtXx",
  "key40": "BkhcnfnKH3h8712BP5eZte6wqm58cjEXgn9iSYQzEFZtwp5tM8R8kMCbLLeF5mRJRVrX9ib8s21W7UsphnaJSmF",
  "key41": "5C9L3KCnd4XLcKYc7K7jbEqFGgsTsjSHekvVZqfn6NMiJFN6jdd3GAgkxYfxGN7oiGGifrumchqrY2oVgm1vakVL",
  "key42": "7TENnxpZzyskRnvz8cVe7h2WxtY41m1pq4YnewMy8NzSqDamTWyMMnsnTvAQJxEJfGkgEaNZMU7wzbqbLBj34DT"
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

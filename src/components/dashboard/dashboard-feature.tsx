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
    "3juUT8idYqAp287nZM3Lk6beAuAjSDuaifp64BD64uYYenqomDG24pn6ftoY9XN9uTz4hp92tH6XqsLPPFksn3eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwmAoeNXmuxoNXfJRdr177Rt3J6HAVUsBLe4WDaEukoApwE2AmW5fhg5RLEt4rsAoUydY2iG51tKq989pvokB3A",
  "key1": "Wn2DobzYnCFsGud6pG4cJ6SYLXLzs6qr1qw1w4wDedE1Ud7S6kZ1vBCkagK2VAVxvEf5hHQXKw4YH6L67BXhBoD",
  "key2": "5Axnf4BjfE2Ez7bSTBmYk1ArWJ7zJqvw3rJX8k921sbfs1KwepELod6Rm9pbe7TjNDJXzVJ5entKT2nfwLt7mcFN",
  "key3": "2SFKHte2eZiDN1WuDGYeMS9M1VJZYbPrFk8a6xTazoCpnKxK3z1ssYRJvjxYLRzZdWMBJUoRJF8hdSEbATaTmbHj",
  "key4": "HJV971cTCZUcYYA4m1GkGtbPY2yHozuZSmNGCoazfhyh3a2LvxqSxcHB8L973zuHy18gybtPM9jfRQVMUpuJnDD",
  "key5": "2KJjZbdGqydYd45gXBq9fKUD3wEVhUkJRwb4kBfMBAzmCbp6WxGpeBmuigThw8j7nqVGERoqxuUBXjWfenAreuAu",
  "key6": "Kw4qM2tovdvCyTnnxssNMSC4Nmbepyt1vsEuEV3P5RSHZwEWyzFo3fS2cATxn8pRmC5qPme1H4mW9m5mdHGezJE",
  "key7": "5sJLyWcJMt7kCNDr3xqPtW2ZXMAAh2Xoj7ZqYCEid8FADyesQVN5K7kNKoi5kyg8FuFTwHL8sfBnD4MMukPVQeC4",
  "key8": "2UE9UpewG9J6ALAoFi4SVG4RdCACw1BEDB9KyZV8xfsPX2Py6KG7tdccTqbUcwPjm1UU57KT529CkvXcwf2tQiQR",
  "key9": "3xFAFmTqdWS24vX1RcuotuRjBX2ATk8hQym6rXM3SUCFuuC9qZm5C7DQa8DRd7f8op16DdHfJa4hVKrBcHCBbvM8",
  "key10": "4QaoVp61NyEuQR81Byja6CQ7JHv6CmnQhECEBCJKqtcqsNYgCAE6MUAAs4FMiq7TEngckf2B1TX2NKw9x3guN742",
  "key11": "2Cc1o2vSKjteaRBhVZ2shkZFaE7VPLE1FWVhsgNLPJrS3ErcuNFvNb6JdxpcQKx3me9eaMKozpNGp32QF6FUZnyx",
  "key12": "4mXPvEc9nAkQCgAvyojKUTm6CNvoWJsRhU7CWKTgLZciRnpgRQMt9GXisGMQUpYbD9cjxhFKLLpruV7idzFLJy7S",
  "key13": "46LxmUqHZXN2TL51zNCbnUemzTwYJDszSgKLdNpfkQRaPhMtmz2QoZSKzSQV4FUmYB23SgrySfo55o6AoroCmmZo",
  "key14": "3A47i5ZAwFXFzvcFdftatjKACXnGjjygcB9uCMMCLwXfgVxv3e6oc1JiUr61atAwv5qEx2MwxgDNecwqgNEP8hJb",
  "key15": "4AMmgTw9CUehDKHnTxW4zgrt5xF4rKoAqGqec7SqztNyqizTEVFf31tUrkkjvHYg7ReECZ52zndkeo9VkBpEGMgY",
  "key16": "35eVYpuXDwBMwgqha3dw7p1M6EwQ4ZPjegNvphVSdGrBDnrbsTWfkjKti1zQKqE7ZqV7ZDGD3uqLYrnWRJho1n8B",
  "key17": "4i6uurVsEQ7caXAB2ftbHnQFr3V6Mn6pTcimN4vsoGxVNVtT4BFQKnbLrf5undpQpKWy8PYiywRqYdogYB8kh6AX",
  "key18": "4gyHuT7yKXKZ6LpFGFFDZon1pw1q4uJrZ1vZzkasLoJNXUMQCnwCbFMgFoJeY68dZAwTUSXQmFB4LaycLCG8g9a5",
  "key19": "3PdK4eDnHT6yeiCteCzw3xkH2P54Y2XD9s2ujqYJYFESCeT5hCv4wzx7Jp8RqvrdPz9qRBBvAQdserodRU5LoCWM",
  "key20": "4YUDY246rQcV361JbUT2nBRTKk3VoqDJchSnqZWt9eZxy2CyYdmMHRYhgNrDHqqkvnKppQNxUZgKToNTy2hgTcRo",
  "key21": "2SgXMnJPuudyLxwhohiyTzvukqeANzeAfo3LQYAg73THK4HKmTpWX8QN57HbwTf16JwkbwWmAdAqpAjaSnmZmRxU",
  "key22": "2UJBYaqKp7k9qp1e1ze5mvDBRo9PrQsnJmAcsqJoHdcxHTBGgQq5jPcTH3opqkSm1kEhSk5N1S39CmD6mXJUK713",
  "key23": "2S1JvjcEDnwySXrgzD8sTvkdjH6Qx8qRap1EGfwBPKHzqQLn6yvnqxcNTK85aWwDG5HxqTjZuWr1xHTFKowkYfsZ",
  "key24": "2GD1RdoNkQuPrzQLqXfzZXbiSvjxsCpZDD3Nwie3VKXVB45LzYkjecdR6xf7rkqy6sSWToUnbuNT349H57azY7cQ",
  "key25": "79nt3s7AFbfSmNtrc9Wov8cbNnhps9sD3msbNcG1zFudHNsWdBzALUc9LEfsLcukv9hj5JarRUBaQXAMQwfahuB",
  "key26": "4YHADQqQyDWbxyuR1LAvSJiYvsxEfFYatAPPBUNtx8nHrRwxrYwmGZwxj3jXayfYMAEUzWcwo4Vyh2BLh6FgqTt8",
  "key27": "2PoTk1W2DMKd2Z3zbbMAcw8PVpxuznWkNAF12JT1A5VeFEgVCBevNh9MFfFsxBMAoQop5MgP9FdPFLprukm1pHbq",
  "key28": "VGDuKEjMZZtuiJ3E2ZgDDQEHeMNY3VnvtqYHwrbmeNM9SZdwpatSaMRk73V5EbWAtmkidMELzKyanYKcUEHUdbo",
  "key29": "5XEAswFywQiDW4dQHijPrsFXv7r9s54fH9xR8S8NRWBNkdWJGgJ649vSnUobeTfD5BqmGbvBAmwxwkek985PfQ2x",
  "key30": "4yR6wWDmUqnuDc9B53gZvVfwcDDbbL1XyZzZUG91UgqbEzacVMo7GaoNbNAoDiBwf1apEqVhj9f16YW9ETsRZ3Sw",
  "key31": "Vj81XPidGpyT6rakNiUN1J6ZfvjiffGvYR5vJNMvewZGU9y2BHCs9kaLrTczRTmRz627Gvda4HvJCBGqzU8QztF",
  "key32": "3DRcq2yAoZSALvW7eV1S6jRgRfaovmrS4EVMCu5A1V9xCp6cJQeBsGy7edsApp3NGrEf2z9PppytwTfbGfBLuhtm",
  "key33": "5wTU8SWJNBQ2TcGYboanQuEoe7Gty9hBeQMS7VUkVG21t6FvzR1Cb7C181xzTpuXArwCFwMruJys2QAnCV8oabm8",
  "key34": "3voLBMKi559BjQCaMBNZUoVuZm5hDx1FjrhJXqbGRAiGi31n6pgTa9xU7sLLLgu2WkkAfVMFD3QP2TiTK9oGRkfn",
  "key35": "4dUTVBwGLvN1PhXTPie22i3HLDBym62TwZSaiZ16ERcbSUE6A2gzdq4VR6koeda9qgqsxwNpf3aF9x5WAb7f2xLJ",
  "key36": "2qcWgfLFti6FqkAbau1bpM3kSTpjmnp1gemydyqvDkNwUrCDm2hPTyoPmEZJzRhPnJqUMBNhY5J93R4hyEbR8b9r",
  "key37": "3XqbxVeybKuSSjEuNJ3zcJXAVnyXGFuxpb8zFDisBpTStyzUfLSci7zscdDeRhmKSDP9Hii5sFeajcDwVBHZH2Tv",
  "key38": "4Z4ZtJzxJXeNabVpbJ5frGXYZn2rgfoEwbyunFBoyW4RxXppzteYnt2g7QXpAQpKiuH64atRWHLnkHL1oE8738sq",
  "key39": "4mpqJySN5zuBNeiRqoZwzbUs5BqQ4NWHU4XUDJWuzPy3XgwdEpP9dTx2zEKP9pJQDeyMWi82qWF7ZoaZq3nCSWDv",
  "key40": "2vBvSWqxJhkyLwQUgeQETAyq9uMUav9gHwCLnKNnmwXQcie69kQvopfM5TNeo3t51H9DsmVecezprJn6iyB15475",
  "key41": "2nmJjn2gkM9XByxKvFB369QCenScrDfZ5dgNU1GpJctAgjdtw3NGHskmEybV8xFfhTZTky4AFyd2rPzutnkajnfy",
  "key42": "2NVZHmtsQNx589khqKhGRyRr5gpdjY5sMRaqFMu6UKt44eNiAQwZHVytM9KtA4cRRbEjUvYYi5Ejh9CKrt6McJa6",
  "key43": "5LoYJVr8nTDN2U2zXmiSoJCjjoXckjuQ8ZTrsJVQBYN2zGwvFmCXtsLLMvfv8g8rrqBpB2KT7T5mPZJ7kvk8DBfm",
  "key44": "2Go2hjm2hZFeG8Vjkhw4psbdxcEJ2Ww9ZKcVzRXTgM96FQok11oubeq4zwawJYLwkpM5wiK6Y9oCN5kAVFEuFJBu"
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

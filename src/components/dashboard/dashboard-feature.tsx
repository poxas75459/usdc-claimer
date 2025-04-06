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
    "4gp1ZCHQS4kQvsZX6wAGJtShueGWUj1qFu4qk5xKUi7yXUFq5im9UZtoCZoXVSJvvbr29Gives5tNfagSjJLw3U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfqUiFpn1UF2KVFfyuhrD5etMWRUL6Debs9zLkZkPn5o74Fka7D9S4MfaYtuRw44Y2JUviNjeXkP8YHBsmQTB7K",
  "key1": "4DXhYqYzCTkrTHw1wgUfH17pZi7Gvpa2ZvC4aLLh2sFmr4gHFoTEE8oWUz7hPYbC78VvapAegK9LwyAevynsTRaX",
  "key2": "3jrdSGVeBnkxu7jdeF9vbKQXZhbWPYjwjFQpR4Dp7HuXqSvjg5dfkp5HpFLxAjMXvhpTCCqgJtf6gkxzv6TbxMPt",
  "key3": "3fZRS2pQ24XKAEV7jxu34JCrFYm99StfrBwv2KJaPgBW8qEjTzkDseUpr2HxtHFJxcBG15FYv95Kdb53QCcP9baa",
  "key4": "4nMfcLXEwpHPGKuqwVS3r7vmYgYaikBPM7bMJWC7fErdhDxyiaLVf3i7dDprSPNHTxuYzMxcmQdRm2JhkyhS6PNy",
  "key5": "5fvLkAFHgaKQgvmpN6JA871reRU9HxcqA8KrbUE7ENLaZrCT23DrEP8ifrWrt6MLfum819KvmbMn2LN6vYbvnneg",
  "key6": "3n7uZ7RsUNAAdfsYLAsGjNqYcMZX1zNfsjWcjm8JjCwLjFhsbfDAQRJLftYsUbgFT1KuFwjXPD4bhKL2WDq4kWNx",
  "key7": "4wd58juqVMFKsyRyA1cEputZHyNbGUErSYUHPcB2yP5tn6iATSJ3yixnzU2qfR6mt6DakwXSKbfWLmBpmjF5ECzC",
  "key8": "54ACNW95DirvR1LkdpfohMRfqGm1fCoNT8XJe4z8pj6Kv8CwMFpDAXFGcpYVxZ1tzBxG4MNiugWsWYbu979tViRB",
  "key9": "2hvawJ3sSByDsiUiyRq3oyu1TKwxCGmgcjVBpKdbkgWbBSqkEac6W26KAfhFAGuB9BaLPqvGLzZ7kTBqf2eUiHtV",
  "key10": "5awg6w2WNfYewb4aC2pcduDwGJ63rd9MaDX3k8TFdaAK3LEaFmHZZeM65XumDi6vQZUvXDBKdgq6DEv9gRrWvBDj",
  "key11": "2vtGSqvVgrh3T65ovPDcnXcdSjLL89R5nGtFoQzxyxpGdckiEuHbQHphFPPb99zv9CFENwJ3xUf1ip115J2Xjd8B",
  "key12": "krWvjQ9e6sULyyPjENQFPbooUG8q6PoGKKpJQxQxThwfgYHQifSn19CQ8xpxh3GxPkFzwNF3imaiVWXCctrmgds",
  "key13": "n6WTq6XYLBZWWWtDpVePkF3toEWeFUFmNMDEkizEhQ9mDuipHiUE1eTxTx6MBkEBoi5LngwrUYLJ6WFWX1xcirC",
  "key14": "5TqaumbqrEPnKdJZyBbuWLsNUQ2ph7GyWQpEHJqyYbNVnNwbqD2ydyVb95Ry7XvFZMgdpY6gp8xEatcukexNP5n9",
  "key15": "TMSsRG4QUdvzqThgSWDxxrXdvVjuKHj4FgxpEFBzyJJdHnW4t2tG2d9JMES62UHgFMDZfshqPXxZ2y3KzdTU3vU",
  "key16": "2GK4F9SmMk22xmCyyoupQEnXnNirNH5KjbfrzQdTJeGV6yFtGEEyMpsueN9zTjDLyrRrustTTJ8bKYvz1uKrceYz",
  "key17": "JahRx7Wier7LxRJfFvb1NZrUQjJVPEGU9cQUCY5iWRYZnsMNoYBMKVvEg5R5LM6nFDuX5fsJdZbm9irwqNe9a5E",
  "key18": "d7hgvspDrVmGfae31bWKa7vS7pxA81HZBTVfXpyt4nxQ8fT6tZxXjWamjjsJXwdXftsG4CJFqWBVjeecZgYJ4X6",
  "key19": "tXdN16yHkJndV1X2CHGH4NPLKeE639GbhTohrziwjoejLFDtpCWAuuB5e8nXG2uiGuxZCWrBJ6Cum4KiDPsmeSo",
  "key20": "34L9BvDZ2xrZs35T2jddFhRhqYGdPPoWqzESADM3KdLFknYSNQf7z3ZY7emCs5trg46uvCeUkwgXEDABXuMfqd1q",
  "key21": "3fSGqHF15pCj7TNhzqw4oSAhX2fMCCrC6R7T1haV1S1dQTdsBfUpuTW2XGHQ6foWw6ubB7Phdunpyzo6kFSRQj7u",
  "key22": "4mM8SyEHKbpaWNNYN7jCtZKg5ZHwyenEsfRQ9Ggre81fvjDvZTwKXhMsHJv4i38rbDkwAXrxT8bSxPoN1Ka1WJeF",
  "key23": "3y4id3JTW1tCwdghe5Lzdwf9FFZfdX6eYBXB4yAh8iunhY5GgSy9jHDzTpSURR38GbCwJrtRyQ5WfSVnigEX6Ure",
  "key24": "36GrWQnVRqmqpw4jtMEoYuiAgAUBdNPWcqS17DYAyg38TG26WVewzVa8FCvWFrRC5Ay44wNT2A3qafFFQULNH7N1",
  "key25": "3gf4L9S2SjkaVB6quyssNZ6MTrwqtvguRZBHzC2wb7HyB2cbuWtzYTwxyX7wYK9GVcKccED1fQvrkMKHNHqisiXX",
  "key26": "3jukuiu1Nu7hzpXXAJoYivfRgUPTL1ZV9HEsQM6a3apmjseh84TMofuND8DZ6qUs9eHrs5g3S9hT9XazvxjSDybG",
  "key27": "4Wq9g9HyDLWmib6qQc7b2BfWQKB1uXwaWJtei9tzPiEzsVipH4x1yR4iWzrht4aX2HZvWfELLWmg5pyupnykkJfD",
  "key28": "Waip8L4qe51oJtfY2V1S5n5mmg466PKg171gMY1ib29tU3at8pmnA2gRY4jYriGcJt9VBqzaQZqi4s8SauLgN1g",
  "key29": "419jh1f1wayNNe31ki3J3bGL4g7MPTEdQKLEtkM8ozPgZwKbaHipks1UCsk7s8EpsJ9Q5sMpRXssLwZ6kMoUxJa3",
  "key30": "5guhU53TVCmQkQW1KeXvzF6KUyY3hjK643oTjGvum1fDhgP4mLTPekZ6KDDuVMDCJMGRLtFnsB1niF6YnXXStR1T",
  "key31": "Si9qfQ7du4hJj2uUVC5rBgNMDJ2STarfjNyZSPxbY5W94oH71XaCXgwHSteb1s5T2Dsze84hLeVoKSZtJqs5cQi",
  "key32": "5hsf4yrr65Mrip4JBUMpCgqvxTJ4NJNUmJLRUxUVcaope5pabxnrwuFnvV7NaKs1Mj57B6UgwdTPrzAVU5f94D5u",
  "key33": "45SZaHW9kYWth5B9twBqDGxp41a8XadMyKRxwdRGNWPnH55mBKwXGqUZ8G2UYRDf9Ve7nrpsedorxDVhRkH36o2t",
  "key34": "4DiTCthBRLhCo4DvSkJrFVAFUYxa1rNuZAPKWEJVCPEBVyR1whWFJcABKE1yo3zRR86nf5oUKYeKt5PVEyMFDqtg",
  "key35": "5iktdiDVynfHurMW1h29wK6AsGULwwNiDDhdVUsjefLaomFGhEaFnpv9YXbfYv1vpYkpY3CQGMiZCx1sh9Kx5Ntu",
  "key36": "5rYYzP6rm6aW1FMQV5TGdBotZvYkFAtQbr35u8ihWPk479tMDHBADeWd4RnpnVG5xmTEfACgMt1vhVfXoHbRxi7Z"
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

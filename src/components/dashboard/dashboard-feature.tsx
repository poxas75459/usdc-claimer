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
    "2E4EyGvfw2um1fQXqgNNgayHFwH95cnoaanCRy3asKmEPYsYJ6SaUCMgFCgXeXapx7MfZvt6WL9TY4tQsxbCaRQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517doMAijuYxWh6C3B57wycMX4QvncNQGyVbzdxhGnHX5R26gKSrBtTrR6BhW46iRUapk6w3T6swYwo3pavPS3Gm",
  "key1": "Pk2EqqJmk2S6s3sQfBvdJytYv9DhjiMdLHnCXbHDddkhgdh7myFanK4S17VVV6J6ERbYgn9MXVFVjfD68CaUkdL",
  "key2": "3j7HKMnRgzB8y1pLUMNdUmcUpQNHJtXStXgUNnjg6iEaDZNTzjDYiHSfLMqQVzvW6y5gXCrHBBro4hixDr3g3XQ6",
  "key3": "z3QnmARLRiVA31hKGoD2H5CXR3uZFDVg1rYq7V75aKTpn4u5Z9oRiBmonhSB8pkBob3gchpZnPucZWAoDkx6wr5",
  "key4": "5Zee8jty7rFAJUmt17e1eisCry632okrXUKPwyqMg81Ja6FuqMxrL2h2gH5yFgkdXiB4Vi3wpsdSxoRfw5toEgwm",
  "key5": "2DaQxhUXGm3sP3ZR1VUuYKh1vvR7GrVvYfM98uU2GUVPPyD8PhzF2ocsxj4eTPnxkX9oNhKgv6rjAoPhsQ5ZtNKu",
  "key6": "3PDYgLRBVMZdRCXXFJGqBJBk2hMr17ytSXL8znn8Znyh4gzoxvKt5hLfmggorWxry1ErXMXfci7mueChjMTye54G",
  "key7": "tjf5USFBsAy9meAs3uiyaZJ4e8WtGXwcVvu75gXqo5j5Y8BeGjS4emJvnEGaSUhvnszAypRRyizkBCahWX4pqbQ",
  "key8": "kUdVukpw73RSHPsp9mMQbXvPU3ErPMFvMQiGN4ZsqrDFhmHiZBjLy6DQqf5hkj6nmewm1jhD6FeDzyhvbXmzN2B",
  "key9": "5pLjt188BPTD5wAuNA4pireufNVuDaELugRAqECoNGgiJUYrWqRhjkb17dPmcsphJYoMsXkJ3sD7iwpZGjhLLPSJ",
  "key10": "2jUgaizFjhdTAAPbSBZnovsJ4WFVctmowQVKVopbk8Jy7UCoPVy8GYDZAhkVpDT7GUiioroRNPjFfpfesqUPKbPB",
  "key11": "53HYZnQgwF9yvb3pmVjqepkhwaGTRoQjhp2k8dySfwYxYrP9FjCJBbEVGQXuFbbbY1mC72wxYbk9sQoNX9AjyR7Q",
  "key12": "32zLijMbJnH72g6yvnHPvPF2jtNDqSxtVxtqTJbwJbZTnwzLERyfhgebUJfYBLrkEnKg43oo8goYaLUeADag8NWb",
  "key13": "49UWsQBKZCZob4qhPM9yEgcbnwXNKHAgjvrLNK3bN7pXSGJKyvSzyhE4hcp6xpAGskjFNwjiAp1dwaiiZmxn2LXA",
  "key14": "JntwoGE1LZvd9sBEr9EgDs19CRJhMXuiJc8nwyxedt8CrXs3rmBQPwq2w2BqtckfrEaWy4AzKXpfUJTuc6chE2F",
  "key15": "2uyor5ypr7QZAnwzi8qAtvhy8dJr8M7josCmL3aENFVHFFQUBGGGAfDsHJ14b8nUv5uBV9pZ59Mvkx5kUSNbDHz4",
  "key16": "iKoLh7k64bGQMxSbA2CnJx2eyUUGrcx5EK3a6PPBzuaQqrE1qyzzcDAeQvoV8hXSHV7BAGofTmDKpNMyC5zxZB3",
  "key17": "2G9FKbziBzGxUEjMhsXHmjUbcSsr8sHbJi89J7qf4mSVZ2JQypG8ezf2Te2FtnEa1kuFKPaGFv4z5DcKTv6oGTgW",
  "key18": "57CZzUj6HVPFxAmACMP6aqsCUKCizkkF2pGeS38Fouu3ctD2B21BzGXetTbdrNX3pn4YQC9pd1NRgh5gfuZ8nsJd",
  "key19": "451BoskoHyGxEipmh2jbdEiMTMW67QDQAQEKnt9nYoV3ZiSdz8Jz99So67W9SsrHF1QKUhcb5mLkRZ1NNSXortDK",
  "key20": "nsD3vBZgni5UqDneTvXZpkXNN6gcaLUcVyJrs4KWEcd9PfY3LFRekb62Do2QfLts3hkqmzQLVaSW62o9Wm9ti8s",
  "key21": "4uBBSzfJg8tBBb4XXkuYFiRQYk6prL6EyhpGUz2nCvrDv5jUEbDiZHCxUAhHufbxAceS2QJyvv8bga4yR71gDP5S",
  "key22": "2Gk5JWBDWosd4mPgQw1nYDLZcmgF9eNQVwC5Gf8dbvhCiFaLFWNrk6KjHc5v6Ht2gqhgWtnxfKx4st8AwpFQeeW3",
  "key23": "5wwE14HhLzatEeEHUddtLcqdwV8HqWEHPMgjdGWWd7ULobmb7E8WXyCF93C44pTbRkRDe9QhrMSvy7ZzkpsucFwa",
  "key24": "sSH9nxWKqyvtvj5ksRua24vCHRFtArNi8hT7pAhALDRATSJF4gpFo1SXdKkX82fggiiGc2GoKBmRbPBPkGLBrg9",
  "key25": "4qwcpvyDpG1BcegJTptmgt4akt5ci9wxLzqoN4dycSzgNNuJRhZRhd2fg2bjj9z5vdrf2V7eBE62EH7ycqWZjPY9",
  "key26": "5ezhib1hrAm1LByh9cyDaNmx6Bbzqk8gguethsBonHTZbGxHdMoRmHxB6uCBJvmdiDWGkfC3wPWoUcGyYP9f5vNq",
  "key27": "4vs2uo2cTHiwRWuCmQjsKadkncpwaCh4n1MjGQVuaG1oyDDEqcEQYprvLNxxvCcYNkeunM1mXTvpmYqXe22sBNk4",
  "key28": "31yThwRSPuJNSkXqXEnmUhaEkARc47pdqMvbLQm2MM8tEW9KE8dC3JBmFApgxxQoE6CFSu19YGLLU3zSPbDybtck",
  "key29": "2sr29Cms1vrCqrJsiyzpxKJ2iUFXBNWicDPUZ6mecLnWsbsWJ43zfdApod3LMBryhT7KZLXLuPExJ93bFBDjyvxL",
  "key30": "3HBiA23YUmywPVDhajzQum5VqEjAdX9FPCYMsHQLtE2ve6MLZZZnBD6XVfSweGrC94z58U4pNYwv8eRZCkrjTNfv",
  "key31": "hRKSNArFZbvPdtFKkrLKcgjZSFqv3NRy1Sh3xHUSUe6mWURX4mf4iLEWjjgihCweSb7HP43Md6ufZ8gQa2h4YMw",
  "key32": "5Nq1f7rUH98UoHRrLEnjghb7GdCyfaa3AcSxgRzfN2NX5sLZjZQRBsXaBbQCVWEFRTyVX29hWPHUDNfuzZ1G5g1G"
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

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
    "5fsFcAY1vp6w6DEGoFcYBgmTUctzEEEm2abrQoFzkkryqFhvaV961vZhWwVoyujauT592uZ8ZFSpz6RBWU5Ndva2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3U1Tc3LxZm1zSSSyW2ATgKto3XjEFRc1PhAqyxd9wQ5zH6ycnC4eWKTsnW62FfNS6Nh2M85seUuQPwkThP4ppS",
  "key1": "4ZRVECSfMhKwpNwNF6SnkYbnzqH9a6qLGadeYpvJF3ctZyWsX9PfVuonUhwYUeYHuKMQyLhnto5Vh8qPYTyqGvD7",
  "key2": "3RQSmJhbcMrEQwsjmczBPL3CdqP694pn8ZEBEq8o1JtCSDjWoxUqrpvnSk8THbkrpoSZ8jnqNbEXdpsqwt5yRcQE",
  "key3": "5sVa1BUEVPwT5Tix3YjtQJL931KpcEwgGUL9raQ1gvF7st5DYMfYcLEP5QJ9GNLhTx3KnhCs1GtU2woPxTEi4p1A",
  "key4": "oYUnLmDyNTUbuz5YsxqP5Zp8gRMbGbFNGxZvhGgJf4sP1h4GeEa2USXdApck45oZzQf7vfFxtFe7VZZf9ves4YT",
  "key5": "4ueBaTg8qKBs5H9H4JXrZdSJdqgiiLzQapcrvgcgcwaxKQtHgM3ua8CPgTownHqA9bwK67KyXzoyGUsEmjrxR5zu",
  "key6": "3oXnMBQsFyz3hGhDrwaAnjGpN8xhcs7Jj6jDW3jk8NpBgEzTTkneE3u1ac7UmbUbYy2BBaXTcrqc1Peg8o6JVcJK",
  "key7": "63JCn1DUAT3b4sotW8fEexCzxM8dFUi2fLxkj5sbXuNHvSYiffZztjT8cQY9zdHUDNPEfST82ddCjRXtXJpR1vwQ",
  "key8": "4QmNQ9hqdDrss82MnqXackCTyDwS5Do6EhJXxoBHvaQ1EubZ6kZPwdzcCk8V5mibPXhTTANTNYjKe3oPcfLjwGRJ",
  "key9": "gDKb1QS2Lr4eMZKop8yfcJWJRpKBZCui4WMs2i6ECwqVm41YrS9prPzmsEXQoX6Nr7r8tPzJnDLQzSejhyfqiEA",
  "key10": "5ASx8qnyQYAedw8e2Bka75DgQ7LkVmsmqfq5kXW8JQrQWr6gQ3NQFUG4z8Ta7HK1AXyhBnN1AjDMBgMn9Lhzfbf3",
  "key11": "3UYw6EoMmwzGtkKBXFHjU3P9f8LeKXVRzRDxvkQE9VXCodM8dHbDbQWoo4SWBzUUBuy4E8C384B4rFM9U4bvkvU4",
  "key12": "3aE26Q6aB8FFrDiCzW5wj9rGTvwrg2KMnJtfTKBvqexy1duSrbvW8hwr7AsrZFpzbZkD5wfHXYQvcZ3fowdVc4uC",
  "key13": "4CyNYiEkZdhqQuVRA9yh4ioLcRSkirjUodt4aUreuuB2WnwSYnH81BnWRGGLR1Qb4k9hjFMrLwRUgVuwAZCpTdni",
  "key14": "5HgC7VTzecbZuFK1eFU2XEWvWtRroCGqo3cXyLhUEztLNcxpqYnuF2HdoUZRSxbFauDq2dKQkzXEUrM8QCM1KyNf",
  "key15": "2773JJttpjhw9bn2jK5N6N9w8puSpMc9wh9AKVrMX8GPubyjcnd3amj1rPfvbYLR6PJ6CtjAGSquHXJMAQizVUvg",
  "key16": "39tDgrzjDWMLRSvQWM2SAgbpPuSfpe1WEQCnWHZ8KQJpYVM7ewJiPJX3TY51TQJsvr3tMAkG7ibL2941NoaRNHot",
  "key17": "2TFbLbnwPJwEF8VJjbz87qMfhH4NVqvwhSGbdYcXdPHi9uLnr28kaHVhkzexdTvnsi7CcxkoE9m15EmYkrWQTyHa",
  "key18": "4jpkPYxxgVRqRX4mm8ND6gc9GiMWAmnWzEm5rKSqU1p6ySReKdraEzdCPaxbsWYhxYhUF56KsLGuHL63a6v17jqc",
  "key19": "58dB9tnvjtjnBwJsy7BxZAkw4Bi9n6Hqjv5dX9eypfjJ1Fzmif7KSLMRx7UnKmNs32LYyu5Qkjhvg2aL1qVaFGGk",
  "key20": "3J68xG8sCJTMpR1KP22GdFe9t3HF7BFzYxJrXdhm3D8T2VCHbv5qee9Cmo37rbo6MFn2HmaMXXn2MxqGHGHWzH1X",
  "key21": "5KC7oCzpEpVzAfSESwCrZjQmCZBtEk2fWGpficua8DqfHJsnWPBWEpLBmimeRdUZgLqauRbEkFtnoGWLMB2oc8Wi",
  "key22": "2RwgTCSLmy1q5J1H3HtmFUvXqJwVsHeRnbVF9G7gLgSS7rzXasF6sr4jHp2t8A2KQqiTqgJdj3oMfric8W16ZFcj",
  "key23": "dbHqACqW31xS8KHWnuvJetScBbpAdBZgN22M1k96nDK3UnhYbTSAG6SRw8a5mESfcFByY6q7hfqaTkTPwXxqiam",
  "key24": "65BfcK9DMQKvGWDhB2iSZPSMuP8tf4GrcCuUtywSXwFjRdpzb9Lwu8V27APorXbknd1ph2iQBsLR5UuKQCwXvesg",
  "key25": "3T3TXap7sfKmRNAWZAj4xwNY3kTy66oT5rUAdHx5PGyoqwky7aUf6tJdFoJBiRcK9XrbhYp6FqAv2nhgtgvLTUS6",
  "key26": "4X919s9CRo3pghQkUXXQm44PkSvt9pTwj7JyfPBvsoYPEooQDtQwsHU1Wio2eZ5hwBMAXpGjzPPj5RipA5XBtrur",
  "key27": "5RXLNivR4sxYrq5aWJR8D25YUrh1hLHav1M9qwVkzvKQKuNZ1Xm7vWhjtMa8UzJL7xV3VatbWJ6NzL9473PuzcaA",
  "key28": "5STFpASdWHQ3ofqcdqbjKMDKKCUHNmmHberACwYdmHFVbm1Bmy4rwfN2phyBAqAsAKjFLAqXch9FZY7r1gU62Fck",
  "key29": "5NCPZ7nmsyBmN7MkiBmUcrchJSxbunV6iPcRo8A3VosP9si1xvzHsUvPPQghdbcUS8YD9RsRsD3XvSfEmvUz17sP",
  "key30": "3Y9eDKjEb5eGThhoGpJGhfibCKdAU4ETEYQ8QCCvoViTjHL1RYd522FWWRVHLPus8vxYhfASGohADbPdg1oe1wH2",
  "key31": "3WcrXxs2AmBoHc2ojxp3WZNiPZg9dtu3eE4goegTf7shSkAjmjx7nQ59aBTEoWyaA9zrmMoy9si1LKKiz5DMQWjE",
  "key32": "3ZG6BBpAZbeSu2LdcmYeAxEKQnnY1rJEPF797n3efs9jZRJ9KiGLayQL5U8Sk2wecAcqZjk3edWma6jWbrmL4MzV",
  "key33": "4QmpZyPRSnVtCrJhumzGrsg3WcfTFpJJB4fd8GairmQTrELEEPynfzj7wkJj4ncKkEXumPtnKxPqBVzmS1XJCZZD",
  "key34": "YMnookBC37FCPkPR2eUkY6u8a3apC3dZYmh8FoFy9KZeJaqx48obAHsgYnX3xJagEsHct8Fjm5AZFKxHaSpzuuG",
  "key35": "QgZMN64e5p1YKxjDEhv1qNiJG9tRUV4aKy9dWJosFfATojMEqxPz6fVFycTYRq6mzjqx1bS2dbs8frxqGxBpt3E",
  "key36": "5HUjSWU1EzpMnN2i5xVYssF53F7dboiFJXZJxQRFgS6UtZe269BSx4BeMG9WYktsjtxzGxNc3iXujWTBqUoALeGv",
  "key37": "5JnYMz5qz4baWPTJsLifHoFGkK1933YszvmC5UkLQT1tTDE2JN92RMkx7nAVNKGkQjq9Pq18JysMAYAFxgV3mEXw",
  "key38": "2Z54ps2Sc4AziephFRN1nMAFYw1hYJUCpjY3Xm1U54EY6L1NWUbyfj9JKH6TdT69R4qviPMyRthcaN7XYKDasuEf",
  "key39": "2ian6Sv2p1xN9WXKMyCfnm8UQCgGEsTKtjAXsCVn6tqYWUssPmyWHqJXYr4532PHyTZ2sgADAQEPyCPEEjZxsQWE",
  "key40": "2L9GY2WqFXn9LeyvsAAJG5Ce1PuzvzuXZU214mgxTrD5j7s98uocDgxg1skqMYZ2apo238kAWXoR699co3Nnbfza",
  "key41": "uztJcKSgM4TmRL9bCyndSMtXMho367ZAz9JLhFD5JjJaDuCe9B5fDDHGs4aAxmiuRquP6fRJWXt7doKrc2k8HfG",
  "key42": "3QaiqB16UGfqmf9LWrWqYgQJeLUyfcmB1tpiHG9RKrReq9E11pEkFktbDDXvP81suWd6EJjWbqZi29XiC2tncG2w",
  "key43": "4uYgSG3VsYEYTupiaU8MW61Xdm91W2v2UH5RsRGWZHKQrjy3FBhXDNrBo8bpX17qv6Gwyinp2J23gMTSoc2qhQHx",
  "key44": "2FLTSxXAdTq9CWBE6z7LZsMah51EWVSZmCckGCPoTJ69z78UqxqAsNHs1cXxbQ2Vi3PAoyG7q7YzACDHayjknSMj",
  "key45": "377xLCzmAnx74V6aTrcegTRZiG9i3D4LLKwtUqb9UvyLyYUvr4k1auSJqX1GzYZ6VPkRizNXDcbpyTFq44oXTmDD"
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

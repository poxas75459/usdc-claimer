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
    "pJKseEpfm4C2Hs6VwpKY6ky3N9YBiHk8uf7nw7N2dysZuR52ZSsmCETMtaBvmhQzqHeWsjQVQSZ22nDmhWz4Wmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZ6taiYxzpnfvgdBwPdoUL4MqH4yMeB8mZDtnXC7fzXem9gRzuLyQis6iZf4YnR6q5vzCEYeA7ZF2Yvb6ziivBv",
  "key1": "5CcVFP1238UpG2Yq9PU4Ro7YrS3tfkxesAYikEJkH7WDrkVoguzQHnXknSgtwBzpa8umZdwm3jfUtmdxZyfS39CU",
  "key2": "LfeNAjP9AFLGed5VhJnF3cF9odQ6krc9omWEMLBYD848DXmyNUNP9x6aM1CMjTxBKAc3iwZQN9n2Pstk77KuE4n",
  "key3": "3wzuHQkx8JdmarBrbbW1ZAvoBmMB36nZkQ4UGJXavSqBYKdRWrbaCqtT7bWL2w2DLQBJ7NELPT7HyQKe8awBt2S7",
  "key4": "3FcDQX7jeLd8FxyFS92yDJnZRhucENwC12VLpKJsjqiAhTwDPMzbnSRm5AzYWugbS261mawwY2cvyZHJKiA5nbAb",
  "key5": "5cZjyoqk51XDe7HUZv6cH8X4wXoS1J2Udfpt9sDo1JvYuTvA4hgn7ppccX4npTsYqkYxpLe5pRqgyHVoCALv1omd",
  "key6": "3oUCHt4Y4z3CHd1xoMvK4gYrFHizHEPRQkLyhudQxu7GEoF89Sx8DtRVNF6QXYNoCxfSXSVNu3nLkGWT9KLX3Tas",
  "key7": "KC5LN31gDivxE96jJYipod49k7cXWWxeLcyQqRi4NQWSkdAXEP7oA9F1hukkwwsSfYTXJLGy5UnFDUd3n1aM91u",
  "key8": "UwNUYcGnuPPsr6SKZVLPhnNw4Jb7qDWgfVLpWR2W1iqeStxJ4Qb9jDKFMCNC3bUCS4aTyG5mg5NYP3EvvFoYUMi",
  "key9": "45LSzWHatW4ugH5pHYVAVi2BSstgD6ZRRq7KZG5a6dtCauJvtiQsm7s1qJAxKnnG29CiXkByUZ2pia1xpFvShAvo",
  "key10": "4b9XvqHe4gmyac4guCyqptK4NA6j4vnq9UfX3UjpFnmxxsbXUHg1e8EatxShTz8d5sJTB6MxZrkjNkFED3tWuLCN",
  "key11": "2bAZeA34NZz5zLJifT7Ffi28x9yey9XM4SMFYHJsUaSDSPrb67migQtRB8AimkzmhZZ2VWYbyjM9Y2kqnxGNYjSF",
  "key12": "41nzMPy5KUeToWMMk3ZZq4KbjsVZyNEryjVrTypcLGBhZ8pRrWGMjMcxNvNM3Ej97epzpoxRUAn8SopGXBRWgoDU",
  "key13": "35Q4NiFNi8benBt1KQXuDAg7JygJ7UrJSB8vMzwfwUbJWYY4FSMKfik38teViRxiM25EGB1kLhJyiJ9zpxXeKgMK",
  "key14": "4vNbRth7NvpfQzD5GCB6V6zvSnqyB7UtuRanVkBBvTJCupzZuy28w8sv6MDZLFfU9cDT63719b9sQjaG7b9NAxAf",
  "key15": "3B7JftiFvrb5icbhPfqASfm1e27ZYpFPMmvZbzPNHNtfYcevnz17dHnX3xnzuALAo98mQHrAywQqrrrfCAzoGubV",
  "key16": "3NDer3SjHRioP4Dhijk8jvEG2Wxjg2f4QSjxAwU26sj7hJ411H9ttWqMsP1Ny2DFxRdf6umMx67eMmvLJ5HZkj2c",
  "key17": "2NcMXHHwBcGQvfuwiqEU1yTHzNazU4EDySQG646VQrhan5apmiC37dtt68xQ2hBMqSGXn2afFqUdiZkq7N6ZDTHu",
  "key18": "3Q3KW38enmQFURbAtMEJTEir6WSqZFTrZnsoAJExVoTd9FrMdCZTKi2jULnNLPkhQx7gqS99cosuRiuHBdEXSSqQ",
  "key19": "43UqR9nXJtVG2qPHDXzVUvuZ8engs8tnpAXaYU5aAQPFdNA9ueWsLiBFDBiD1H5n4AZJKQ2Wp7TKbasmqR1teQsV",
  "key20": "3AsvnwhaimJ3ZsazeDfqMtmXuUSVfheRg2RrRU77rWj4q6xQpUfHDaYMrsBm9PCnMpyfNpgtKeVhGMgcq3nMthMi",
  "key21": "5pj37aLSWAk59J23ZQsozwVrgWy2p3p9BSALTHkFv7RzWhPLyUegMRYvYP68x2LdWuLM6EvMqmd8sbNA9TjGHRM3",
  "key22": "5UDZtHuwLqicZiSBpyhF8Vsd2gBAFRqfaGGdQ94H27Max8o15f8jhX8SKqiif4bYXo8wT9SBySxMYbf7e2tTKDPH",
  "key23": "5L2XessD6Y6TKJCpymGyJJ55CcekbAaYKJYjQiBv9D1njuiVWgzkmtFP8Np5bT5aRNRSkJmKbUxpuvbGt9WsjiTH",
  "key24": "4a1QGcrPRC2CDpxnMYtgLEgZj8jxrxCySfCXYpCw4VnntyU612n13jWZtj3LzT54FhAZzweuCYCr2jbV6vo3op5i",
  "key25": "58tbCpNJNUQcYGvUsPoP1LhEL2GaEzneQ1xCR7zJK3i7MiVqr7wU242sJsbQXSL4gXsEBAVxmmAVEsKTaDUBMJJa",
  "key26": "5ma3LuJ3ox5oPkbB9eJCZyXQK52yABQQeCcJUEQxEy2ZHYMjgDEm58ZMtxrBUvvwJ6Tc82s9M7CkjP4S2JfK37U3",
  "key27": "ADen7ryvd6GRiBcjkA16k9Rs5c4fYSf1zX8BS6z7KF66tEZc1PsJwooTT1Kw89uRGqQrsyU3KQYu1U8UD8s5dTp",
  "key28": "3KAXBBa9NgGJ9ke3nw9APHjdrBfjRmQwZNtjGkNtKnVpBkQ6g7DDaPxDBAivFLE3ypDNGSqfnQgipmJUd37pzoE2",
  "key29": "5Uz8SruwmZRRXRxpwDzN4d8npNZJDr2wc2qMGxANVKjGqSxagCG81HqyS7u4n9QkFhnD8WtTXkkaXUayX9EKyX3H",
  "key30": "5nmDhkdcTtmkJs2QJU4UheK6JFPPzVv9WTRjdApiME8t2j8nfyvWxp1ouTqeSEiAm9rKSWuJxMcKQH6Nht1s6fb1",
  "key31": "odTuepEseG55q4jpg66kPRU16WKwc2ygWuYSNDNeQNszca8YJWAn2u4kbkZNP9Sg6TBtfV1BdfuDxhgwDiYfBdB",
  "key32": "5tBirMjmnEKRxuNV12wLiba5xvhKMEfehYb2bLBh4Uv8k93CDihWu5v4qqtS4AvHFfbwdvKVB9MfKjjrgNbcc1DP",
  "key33": "2LxNrh7hLSG7gv49doFWjnYTS6PEaiuVoCi9TqLQZn6b7JfsrTqKv3acJ1baVMdUzMP7Jmugt9aHiCpkcZELiKBP",
  "key34": "3mXRK8NvJm1mco8UGwgx1binbUMyh98Xq2qX5nnCsXDwzcovHfN3Rm4QJHLiZAPLLJ2CcqbUfvAbXYtSJb7uu6Nr",
  "key35": "3hb54SaLXzwtR93pfrayk2puNHWwMJEvNZZbMQJAPpjNSbNeFuDtL2VCEwBYrX6RAJgy1r6SHtLLbCvLfKUUwBGA",
  "key36": "53FZYXJRfkbJu3rsFFCMuxDcXWL6jox6SsVzjzKLmQru51Cw4qM9nG4ffEZBZc4wys2vgcRFgM5e6n98pAhe8MdR"
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

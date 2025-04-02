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
    "5A4GoudFEbqociG9Xww7CqWC3zpmFu1Hm9qQaFG6io7xg6i9onfzpKyqKaWJABvp6tdSQUqSzz1dTgMLA35k5uNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qX3QwT7bZjg4yoCTEzXH4BTfGjZ5zXHCD172WdKPFmBYVuVZkdtapbJzgN5wmanFMHhqKmmnJQvpFk48KkepXwZ",
  "key1": "4Bq5QkAsSC8urMGJtmjRJeAi52sqzGTkLFj2VeJT5CsaHhZ4FbKUzDKpeg7zYTEynqbpVA8sBm86qga3KQXB9gdP",
  "key2": "5AsmVhbZCReEaidmfzgSYuAdKAogbY9dTGCpgJVpNEAYnKuZFjbcYbBgY9ACAo2Rwxr7N6aiqvJ3NKznDLtTv4Di",
  "key3": "44nUvSNGw7UVxAu1uUhtmxSoWN47GhUKWrSJR3mfUZn35vatQgCurFd16V5giz6P9FZt9QkyzUis8ApKJFfNhtb7",
  "key4": "4ax9g5QuMkexJanNYMg1ENhQAiNdpjUx2B3GFqrrQ6N789nm5kVx1reg2xhxZJw2J7LWH2f2jrjrZ3AX51UY7DN4",
  "key5": "49Vdn1Ez44VBBnKeebxYfVxrGeghtZzcywxAwhs4SDfirdsdnFfDJ24d36At3CLgEstYJ1AtDea8XadfjN3zPBjX",
  "key6": "MWQxUZwAJJXzcZTFkC9VDzAmmvrAGSgZqcyYFfEmBhnNAHn4YcMcAvtJKC3hxwYGTcEchBGBibDJWeKHkvyGndd",
  "key7": "3ws6GqzcFvETYoycVryHTyXhb5xX7AY76SVxjkFxz2NDxNQZxB4cMjBACYMrKcFZ3Sw9fXcbs8CMQarxQw12obyZ",
  "key8": "4ye2VEaWvJ7rawVyqMLUQxDM23Jsi9TW5vc79UGMbqLi4rBNNtTHHRPXBAbe3WaBGTnTp1UxYznab4RG1fn2XorF",
  "key9": "XhW6gFHL8KTYfcLZZmrkZ4qsqDHtH37hjvv9hTLRbCjD87Vp9rU8LxkZxV4wWL8BCP7NPGHrwHcwrz3BbERaitH",
  "key10": "55bKvU9mqd9x17CgxRryiKy58e2t3tmhzvAUnyDK5fwYift4Jocku7HYdtH5ReStMMcbbgdokBESEN6qniGdYkyu",
  "key11": "4PNjZbFH3CsutSq2Bju9KHpVnXFnFvv1J2T1rsE1HmKhqef1qXgEjQdGwid57TSAR3dk4kcZ2ckWjwGgH8fWLw7W",
  "key12": "QryQXUqTzSZCKbi8XfpyxWGk1iWPnL1rEYQVsgSUmeUCiP8aKXW6Ye18QHS1HmnUBtWE1G9q6iB31jg7ViBmA42",
  "key13": "xRhivKpVhhyVAciCuvpymAq9J8xA3f4nCt4agVaRSTadtErgwfrVtfWqu3LTvfgEHY5ypUW3WmdomWP58UP35uo",
  "key14": "3V3QEXg6haveHuMYNFF6jSJpHWVgxGvpL5krtFEBXKKBFuzTsR69kLcC8b4Qd2kq8hJhrNynMtKDXPnifZmutpGg",
  "key15": "4gKxgKKSB1EVy9WKPAqmZch79tWJZv4rxUKkzZPBrhTR2ZKYjJr8AisqnppEPL8VAAZKvyeZNX2DkCW7U5n29v7m",
  "key16": "2uyZUVy6JEymFM9C6Nxf3pcBoKPTuNrRsgWCyPuokzAyEdEZL8VBUTxagHcb2mgfXVyti9xdqvEjB3yqhqqfyJNU",
  "key17": "Sz5mTQ4dnL7jZSEWv36Q26UHPCbuo4rYpz2PwLGY9QRwS9YHWkXQYKZiv7zkXHavLrxpYjPzEj17nJLpff6hhpk",
  "key18": "44dkqXca8maQivLNiZrVexhnsEFqy9mrVE7HTx9PuqMhxvaFAyFNVPiYb6vnkL7hDDccw3TcDyeEWoGYFtZtWLfa",
  "key19": "48ptV2Qe1prxxNs1dVaM49XJ5WptWPnziYxrhYBYMR3oEUtoMkpUEjNMw3MCVF1cj1MZgaoEvxgGAWSaYwteDpEq",
  "key20": "2vG7htPcmoouPLheBY8rZUkRJbWYu2HbsZmtgb9bBUfQMRpUu1neSXKUGBEFSMiTbrXP47TKfJEJEhTBpoDNnEDz",
  "key21": "2hiEBJ1zSDXHUGhgHNFfpNK2JhPD7o1Vbqp1mQSZziWLeRFdA3v9VQwQJqzTULtNMSg1CpMYmykfX9jxMnnBD5Ea",
  "key22": "5yXZHF7Mt3Feaf5YgWTfAtMeHTmJeNe8FBwPNsHhJFUjiC4x2nSpaXu2GZvEYsA1JoiFur7ePE5b6eW4wFjoKhGk",
  "key23": "62gKN3avFHGBvVM4Q9BCvMasJ7BDYLtuchpiEbssPkhAAtX6Q91D8aB46nBgH6rWLSxWFgxkoRdPp44uJmsYYm88",
  "key24": "3ZCKcrsFhUaNeWh9vMfYMdQ6wT92nbXtG7PWQzSKxZzgcnjEJjdd8eoFoBVTsi1kTad3MvVtWWHQYAMKwa6bT9hW",
  "key25": "N7ZvPYw9AvQHjLFQGWKPP7VuMkZcMf9mVGtsey64QNPeC2fvd4bsGEPRpX4fKfWSbSHt17UgBUYfS7gMFSgNzmN",
  "key26": "4m2Qm9cStwcLrkyh3kgtPeH4GQxYNub8dQtcC3quNwTwk9QE8Xcg1fRCFxhJqdYRmyYXAXL8eJB5LjonYo4ZzsTc",
  "key27": "UA2RwKBw2nNWLJSxW7ZbceQZRNcLmM93RrWUtLYBJA1zdaikotG2ECMZusneSRTBWTF2nP5oommmXS34cfwX7eU",
  "key28": "4L8cGnVCHY8f1VduRoLJgEHsn8EgkRRdn4qcnncY3PzUzJBVtDt1sJPRBDrQKzDyUzPRh96KJh9dc5HGn6L3qWVu",
  "key29": "3CNFdLZdPmCXRhGJS5fhixjD1pE4YqPWv2v5W5hCGGW8bLF2FE7Sg4rS9b6tEJFyaZ7mrsTLad35S7jzuC8X2x3u",
  "key30": "4Lyir77t6kGkQkFcfVnEbzVYL2SkMeMUtffJMsidc957guTZ2vxhyHS5uGEZ5fMbqH1X7c2sNRWezDoaUF8fmfXk",
  "key31": "4mv9hkoDnvjWxwdL5wHnX3QDVHymdpTaQiSw8Lnp7RpmpMoSQrRAKemU6SiUjt8v3w4LD2PjYqPkzpkLbgfQDqEU",
  "key32": "2j3xxzZKrXJM94yim1v2cdYAf45Cvn43DvUmQSaEEfDmSdNj38uQnZ3XPTRZDc6d6zAJ8MaMSiuCyxtsKWymvSpA",
  "key33": "5ouXux93Atz3FjMcZc3zLah9Gb77uvvHqTYETEL2SSk7oFGuvakUVFzKNBFKRgg6ZA6UAKbNQ1TZLWtcEg8Pr4gB",
  "key34": "vVszzhwYWsNoqm1XbJDc4efVWRg1sbbAR45x1SgUTeyPLVTSu6adqGqyKxdEUB7TzCY37nW38z3dCWc3tiLThAH",
  "key35": "2xVnCs6ei6pHnvczn5iXgWEJHoGxYbgZdiSiB1PwgGQQ6uR9LSSeNQ28nxH4cXVgWmP1yC3MS2pKGgnCC6d9Tnnm",
  "key36": "39ipt7BhXnyH7c5xMJQKhpYJywFkqBrkzobG1XUwq5RTGL6NTYHwyRQXNsG4DUnyVAkwWPtYAR7LGL1dEkYrB3Ue",
  "key37": "2KAjQtJc4beBcBMAsNzxg7rcQu3jsfaoXdQ9srDtR2yw6yMtzcKa7Vf6Pi2nmyreFckPvbgQxgyUuP1oEFQu4Nac",
  "key38": "3XMy8aEbboMFNNkBwt4wCxytPrjQSQVAeLTjRbYnkTovrE4deEXcUyy7nXU3LqMbFGNCUWwfnyhsH3NcrocangfF",
  "key39": "2TXv8PGHRxdgWJNrEYTrf6XD4Xq94NGR2DyCwAkD9VULhTCURGd4YAmKkuJwjdt9ZHqS9TMw6x3ZFsRVJnAxDgVH",
  "key40": "3SduusxSBzmZ6wSewZPHX2516qkPEf6CYP9wmZjadq5z2kApowbQtE6qqUKMLCRPop4YkCXWapjFReZosLpnWYW8",
  "key41": "awv5RBcThvc1uhGhTub1iZqxFDgy4VWaStMwBzXiauRnSShYcbRKxZsbiiyf8vaejBeSo5joRLofwunRdaL1KF6",
  "key42": "drUNMuzGkjm1oC19qMgZrB5oXCryWQuM6bU7LikSUnqsMHwRAzMjGQ9aFwD1CZXNAGfTRHsNoS8249BkSUqQmxu",
  "key43": "AqhWgitm3kszSQ4wXrVUE9hKLcWDx14mqUghiNL9NUX6waLq9mnuEc4yAfQ1Q2yPYrHJPi1eVPBAFBxcWvVFuUZ",
  "key44": "3igwnKNLmFxR5N2rsp9S13iWBorCZGjr4MFJJ4puzp7Y5G9brWKCxFCUn5KT8D43P1fLQKPZu3RG36C7ox6fLg9P"
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

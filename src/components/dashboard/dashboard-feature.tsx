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
    "4xV8LFmXM9HMTjNHdD2wkLLEKP99CXrdEkYurTT9yWzmNM1oRo96z1NPzhLG6CxxopZKtvVqGnucHz2n8k1jKzgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wwHwktQ2XKXxtkoxhAANdAmxBC3nJxba1GtTuUumFtbkSxXt5fvruL4Q5sdGi6UJhTg37J9UHEwRrzRJz1QEug",
  "key1": "5YQspxCkGuceDbGh9Gk3LPvWcwcwSTrBwLQKYkxM6feyW85ez7i69DqvCXQK3eWNz692eui6k7VKxqtrYR366oqh",
  "key2": "4qwehUy6EpKqQmU1UBRwoNkpA8EVqe6viuqqCaP9cUUfJeXx48DgftJr6zHJBQRomd9epabECHLZcp5iFnGiuja3",
  "key3": "5UNRhPuzn26NvtoGoG2bCn4HjwhCNJrcigZusTQtuFyNcEzRTBkmqGHU3FcSPspt9fBe3cnjje2uh1Utcz4eeR3b",
  "key4": "WhR4hR85QcG6C5jaKYspon6dRT8QkJ5QZ1dKWPvTV5mFBHWQXLemAbFma8tZ8chEUxXfhchJBQkdex7xAAPakFS",
  "key5": "2GRD4m6UTCFqpUwKBDdzrQHCmkFEC4BKykU4bShSa9hE1cc7cYzbJhn3DTzaD9stGBJcchUXvUyE2BARz9Sn5Dfs",
  "key6": "3WrSxLyYT63XcNsZA8Fxsc4oHVrQCKBLF6C8Qq99MTgJb5sbzWMQFkcVWX3TP4Lv7kv3pGWNuitXyyWeafcyJAGG",
  "key7": "618LaSW7mmpVQhT8oGMTqaVB5418RBN7SZqCEg7ASGUbwVL6t1xn4pckR4FTxmZwVfVDnxXQJPYzfmbeshHGUUVg",
  "key8": "4aT6bitJjH6vAPxeGwpm5Q9WqGJutMzRpTWCRT4oUnpdcKtWa59qc8CBH17j5EYwXBPDAm7pa7yEfFr42gsmdn6h",
  "key9": "5Pg5WNfbxHDLJ4h1fsekhTjJMkAwmo8xjKcKriU98mBqLzWi8NVW2u1MviAPGdrs2rfGsqhnHNEfoXhDgWv1X3iz",
  "key10": "3wagasdkama8wUGquo6WLcYmPgoEbjH9R9xKYnQwfuHdoeEVNijanBrMnjXzvR7TczGDSn713RzatG8UV3QQ242d",
  "key11": "5QNfcUkKQsoFGs8CQFDyX38fqeZozFynavT3zUYVLiUJfgq8zUFbcYZrYr3ZrRRsoiCsphEHL9kqhR6b24jsKy2X",
  "key12": "22kWis8eddojmHdfaQjasM7UxxScUELJVS4ukCcdTMUnamaB5wQMBAVh57eqMKRYeaTUGEw5oVTZvYLeHDZ35UdG",
  "key13": "4AWKZ2XA3t1MJ4gTh3VAmrbp66YBV8MbundX9bmFi6cQtEREpeEjX35Cj494WbGToYLdKt9xnAT7Sm3JKrbV4Uj7",
  "key14": "4X4cer2Hq6RBEFLNEzFmE636TjMtKeLtMFSq3nJwN3kV6DGFXDoZVXGr451L1qq45kqriQh6ck69ECrpwpPEyWbY",
  "key15": "2L9BEMpYbCAAkHzFJ1UNAHmoJAGDrdG288b24kmBU6eUCsbAn3B27ydKQ6xKxB51rCXHq3L55oHfK5AKmP225GAe",
  "key16": "jVk8avvNyqwPeCd1JMkaAHC1xDvK7KYBdAGGDpro3mKkB7qPpwYJLBxtV5vWKDdi2X2mnp1mEqu1TDSU1yVn9DP",
  "key17": "rghn8RgtRE8hFPaNgRosLuv1Hfu1RAPsDn8dE8Evo4wGr8iU7j7Kq9ZyZbouLAunFDXvCGY2J6RFdmuhZxuC3dN",
  "key18": "HmcmbwtBAbxDDh3q1QjbHexv6Yd7agMhsYzUSvscBKAWe9hpkrFd6TXRcZhEBgANkJAhFXvU6vn9rXAtX6ewWzV",
  "key19": "3gxWFyqHQnjB5ZWcGsWVjKgu3mBxuib3Xq9EgKCYeRRj7sQonEKX6v3FWggQjnUjWXit7eYaXi5bJeZRRVVJjxBJ",
  "key20": "2gdHLxcj5N8E94TGhyNE8XdBBGLB5WYQfUCeJdvsNcpE3sK2jFivAEzuvbwSUDSVG2wtmuG21GPQqrj6rfZvUekd",
  "key21": "4krEh7VApNuZjvArBbB4wp3JE8TUoRSdaWnWor9doXd28uuU4tBny4kMQHSsJZW2h22M3BSLM7cuhYg2vJSpmkCD",
  "key22": "5XWuyg7a4e6hHV949aPi4KcKUjjeTTxkM6nv3DGFxjUNuiEigdMXuebsLsMvQtBJaZyYwP6dB1aYv5kSoCNkWMrd",
  "key23": "38ymrdAk9CC1hASwkojXGjxqrsPq6833fqwZyYCYuwkA8fD2wLhE2wZsB1G3WWDsc8RPKKRnk7YCG6SB7hRpPqyA",
  "key24": "247EGYdTECEX4mYcirBxbyaeKtEpfCZWqeQ3iN1uRGYTEe4EFn5cpi4if2qHQMCCiNR7WdHNS919SqeprxSAzouN",
  "key25": "5UJRB7TFSJ7W3paEB28eM2HUzH88rUTBuNXg4tnBxYFhfeQFB6BD1WnnyUev6aSZbj5KzDnrDkXV7xa3ifFgKu2c",
  "key26": "59tA8YddAaoWT2bWZz7Ux3gkFa5ybf4YgazdnRFgG9YPS1YMd7LtwUCVq417fAnY8axsGFMr1yDLev3q2YCkrWCB",
  "key27": "4Uo5vG5AUaBc3gbysuxNQo4urR56EPZKC7gwfmTMifwBfdrvDW45AAEcNAhp5ZM37bFrBJ9QJsob3mcSC5KtntL6",
  "key28": "YvuJ3N3fVKJjifNoUQnMgwSC5MQASa3pEjtbJ4mHWotRyPMZdA9zqSwcc6b9J2tDJPdg2NQZKnvjdXFZDWJpc8M",
  "key29": "3NvgaV3kZN91Du6CfY4WfvvkGy9XWHPkzSqY8nAT9raHHMMpL6n4SeLdosymkmEvdfeBd1KBgtJXpT8pWuexW7eT",
  "key30": "5F5fJuWMMgH6ZEnC2ebXdSVaUtXQMuNNBAPTPYEYMjTuD9tTzKMPmbWE84g6Y3VcJnvhka7fpqbpdVtCGg32Wv28",
  "key31": "pY7nCwK7yGRzkDRAfhHTFguECbYFwiJqMekGx9A8MwvYkQAzpoMPt6jEWVJBC5DaGX9gZYSaCVePAuER2FsiPr7"
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

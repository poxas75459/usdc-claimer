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
    "b4rXSTw6kSZNJSZwY4935X6L2EXg9wW8dyDrEwrkgriD8nSVCSxKBs55mngff3QGLgFD71GRbJ1G7d3HedMwNcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DY8Di4PvPyWpn4cLyTpCgXcai54KQiATMhYXuG6znUpg8UYTvQ2Tk96WT5bPotL4eB3DtvpXS5NpmFUb8ADfsUg",
  "key1": "2qh5PFPkxz1re4gt6eRoMV6dyZB7UoKJaYtTs16Hek9fFULkEZdwdW4pkWxXd3TXtUQSfsPyVSeTD11kTR6YHk4e",
  "key2": "3TK8LHU3KMvRchq2begpcNS5jD3vWgF5YnZJzP9VpTJmpp7E19nE3EaEaV4ZVEugfKL4kdz6uqSvZ5fJnGjHu24o",
  "key3": "4nSCAtrjM31GVYe3hi3DGadWkxmEBEM4DTjB9nTdthHfA16qGAehy3hv2G3AoiC5P1fP8pusC84MecoHBA8aBxor",
  "key4": "2qNLczc1XSmgNXnBs4czJTqxurggLXrPH5eHwWiK16gt1W4FYEcaoBvrhd8466MKxzLweyqQNGdG2cyMe8nL6LCx",
  "key5": "3JV6qb7VhrK7uEHdLWWR1Z7XcazF9SAZE2tvxL1Eqf3rRzLB5ZteJuZmL2EhabQGrv41axtZwqMs4qdJHvAueDxW",
  "key6": "51t1Vj42g3RceouLuZLM4CcL1FT23jtj9c69A4bY4uJvfxyrkthBDLgkcREJPKHgUQsCnmNiFzNxHwhudAcq67Ks",
  "key7": "x6ZroSLREUwTUj1RaChx4Jrx2a7XvKHUa1f7QJAK7cTUbYxjmHqN8QteLyeWZHTgku48NXGc8hz6iUK7Qgy6FZv",
  "key8": "3kzfGg1tgPjaWn1Uo8n7qB8AH3QFQpoehh6SQr9eYdSgFTPkoxRKWxMb7uoRFz9LxSJpnnM71G7y9NiBqhT6X7Z3",
  "key9": "21BLRhUWbERVGqb9gSoVjBaHdgcnT2JUjiFfmNuJvBgXqxtR3mBrepZgegWaFMZxHcb3TZrGmHhRb3ZMQwLQWCfJ",
  "key10": "2hGw5bF224pudZ6WudY62xkQUB3EC1vqwiBjKU5k4upL8Rm2A7dQqpSv3oJF8qWWZ2LRP3MJEivckQLwLYw4BN78",
  "key11": "2oRTkZPJ797LjCpcEahDD8z7zhFM7QPKnswbaaY6uKVVgpiw7C4siKx5paHcZkhRi99JJsAe7i8e1BTu3WFmKJjh",
  "key12": "49sJiZoQrrKpw42RZ4byMrAcaFYzT6BsGSDhRzBNDsUCu7KkoDCB9ZXH4ouQZCf6XocjkYxNLErxo5KwvJ33HUfQ",
  "key13": "5DFaVNDyPKCoRmnoA8waLxozHup1N9atsrERWpW8dEwVEVq894wkNgowRTGQa9NZzLR9hujPiX5TE7qTbXN3rpm",
  "key14": "2q93Smmz5AtaVgGBjeSPfZmGH4azjKPPNPkE37G8bQC29JEzEnp5Uq3ewsgr8RATy9FzHZSWychxh9FYmhjag3W8",
  "key15": "36Q7PVPK1eZGhhwLeXAECzYXrsxkYgzyHZZDFnn3sPPk5j7vFUHxGjGsLhcufBc1PMtGXwGhDikBAmgrjSuf9FS7",
  "key16": "GZRsVrBaHNGWiNhUFVp8qoaiohnoUEnbGA9PMUbgAhoXHjvSLSbnHJKLVHPJJbkTwsAwf1hyK7WLbZuxm5EED6V",
  "key17": "r6u4bBvjMSWKwKLtLZ3FgdSU4BtHhdDKSK3daQjtdS9sJi9Xuwy6H2r9vJpY1jA9rNgvAusZzXRQiERbYT44Eao",
  "key18": "2AJE41YQ71RKTsQ8RvwFkUAZbCQnigmFjs8jV1CVbPfiNkif35zvXUEvjhYF5dWV11RchwSb1pswiNtgfVSfGTE",
  "key19": "4JqzQX629E5GSjj7z9TtHUesXVdN3drLr8K7uwFZ5C3FiLjqekeYGSq4f2x9b2e6BVz4N9fFmfnyr8CFeUL6JnNK",
  "key20": "4o8nxLznZmuZsCt9e2ty9eNda483Ufm7o35buDQmnMurb1K68ypKhPusJ5CkW82bNb6cQeXAKCWy4W2Ebus2r31z",
  "key21": "3d8oAo6uEmu1691sxXX2fLVmuoeuKLfhvtJa39NE8piQAtwPEqgDk5wZsWEAvy1T7WW1ygXR1LpaLoGPyrbKecng",
  "key22": "2MLgJ6YcFM4wptthkxxtJtPotrvq7bSirHChgTeVHVYae12nPwV8uuDcsGsgh5iAu5DrQvquShBsGV2EcnPThGEM",
  "key23": "3h46D3Wft5SVU4WxrgWm9upcRAhcpBbPiGTW3wixcGeX4Lk24wQu3iiaRShnC8of922BMUeTghKAmqMvvdXzu1wq",
  "key24": "5xmqtizsi3cniTZY7TiJoZ8BbdKFrpmCWsFqz4Zw5QXSyDnPdaFtoENF84bZQk2i5qvqV43DFrUFfPDT3Sxto3Tj",
  "key25": "2rbZJSZShK4KEmafEyaqcLB8oNJkPZQDqmDCEmpYLWwge6F8s7rrtsBCp3srZPgpmDWqGm2rXxj29fAswoCU2L2d",
  "key26": "5mNbdY9hbfZYHVFnb4cfVtcsYcfgQ6m4JqQ7Jen1QFRFEb6A9rWpKga6uJh1fDUBao3uXhm7JxJsAEmv33toyXdg",
  "key27": "ijK4uoPGv2Urkxou6ptnjjgx1WyujgaketUqM91XbGEAF4GWLitrGP1dEoWNoHbRSFQ56mH5VhPF15sJrcy2fQn",
  "key28": "eEtE2DwvTwfN1LiUEutB4J4eEQGtCZ1V6SmaAeHgnBfJABsZosrAybvLSmLGmjvpvuzH9BLUjAYhbpmBYhhxAsW",
  "key29": "51tyM2xMH4nzf5jMCUvgxmaraY1ZiQiy5WwL6d1PPVDJnvi5BHkvN6BLXRAjz3ENzMPF3pVX4jvZdtPx9bcvZBf5",
  "key30": "39S5GYwjK8uzQpDxLv586BUEpUbvfXL9XmXERLKKkCtG5yASoK1hHE1ywnT9sKaXx1d295sXPVg6ecwR3pxQxfjp",
  "key31": "gMFgK7UkfqaF4GCddc8UoAzmn4jvQDRafWwxPM6JpeuEjzk6AAat6u9E2LPjyy7jNcpy7jTwuGLZFJLNm5G2tQr",
  "key32": "4ewP9FANjNS4wESKS32CAdRCEr18zZ8ocxyESPpyFUQhYKPecv4TmwPzLiDQPe68oqgwSjJodvkAXnUSGQXNNejE",
  "key33": "3jrKT5gKycWiUrm7pNC7asbUssSeHMpukb7jaMFgeqE82VREFxJxQxrBWFhJnDDPwpmMNd4gjB7BnApXsmDEqnru",
  "key34": "p6o35CxGgeUyi29fRto4oVGqtMWhSq6xH1DAtnj2qDLf7sgYqCErro4iBJLQzyTPGJFBenBwWyiRJvVu6sP28vY",
  "key35": "3qCz4NzjWNpuraFD46QMBas8eg7WjvBtkNS3rFVVgb85NZQq8uQ6nBqC9MkLBvZUxKYmtWoFCF8aJffaepyF8578",
  "key36": "AGGw3QoCXBVZrvHXzAhXrE5UkW9x8q8mqJG9GiumyCwHVVdES3cXqLmho6TApSZLnWi3g1Ju5FJ7U8oakyZah85",
  "key37": "3AbSz7PxceCfiJ8i7VY8U4SJyQWpPdGCHhz3TJb8yzbLjNbTxxFpBfNWJ3UML3LfcP3UWTNHvL2juEGw2h7AK12Y"
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

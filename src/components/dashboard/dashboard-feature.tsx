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
    "3RphwGygE3EH1Nkyv6JRqpiv8Xy63nExL8Qr7qBHbNNncmuU7hfH51LLWDH1KsYVZtNWKNdTJpK9DayYWf3ksH7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655PyuXbrMjxqE4ugAN9aSjP4RYrd2iwy6Q2Le7eH8K59AYVaCQ1BDTgJyPEaCgFze5aLZQG7GW9sTHFoW6CxCwQ",
  "key1": "4cpGhGDpZznCegjryDYW41dv8q9mz2K4zUK47qTFYp81v5XaPoJre4F1TfjEhpqT1WGwmDt6K7jwpfMggK8TXp3R",
  "key2": "2pH2suJ6uVy1hkuhYi2RzweW3zTwrL8m2ReTUSQdc6sa3kS6RoYk1MdvQKFjh8AR9XbPVE31NuUVUhUVoGKWBpPn",
  "key3": "57TUvyaamq4666qhMbyiKmrsESt1BUkhAmznfU29tEctZhLKcQzb2qm18qpDEtyYLxV29ArcEJ579dU2gJ5BH4QK",
  "key4": "5znncJRNpy3NjbeV4S8Y4Eea8MkzJ5FxAFx6M9WmwY8dPYpvfAXyC5BHwjwuzT1esnNwXzTedfmvxAZTxwStjVNn",
  "key5": "3VDWWyASVLjevz8ZRtMV7tXURBDEHgKMro4K618X1qAZj8GZtio55M5tvD2KQ6MeYKAQCfcLSaM8wZh3d8EM9TqZ",
  "key6": "3DjNfsMxY2iJfATqSjDqfcxDKpwHRPKAZn3BuHKpMGffVg4dELWVVQ4eANS4yy9v3T6k7cMHie8zrmuwcXZDFpfX",
  "key7": "14hCyBWTyWQr13DuALEx57ndezU2hYy3HuRuS2JQay6xGXQoZxBF6pWtKYTD6zRxYsoZAZeo7pQH4egqH8QUwhA",
  "key8": "KAKBymH9N2QRNEb6p3ZBHXHkXKaUAqvzohyiY4z96RYDXUSLobgkYv8EAdt5Cw2zjam8UYoHGMPtkX8uGXRpeZh",
  "key9": "5nwZt9Kf25eeJ5hJzVDiCDGWDR8JtQstVzqkZppHd6NhdxxuAuUDnkXfh7jhX32EJEAsBU1Z6MEexy8nV5PX2jhf",
  "key10": "5U6oD4mmftzUYtV5ZQrECmheo8YHAnnVV2APE2zzbiF1vtXiAX8A7VhTwDEExBL3ukZQQfoebsX5YgaZ5J48CQJ4",
  "key11": "4spgPL3nXjvBGs5RB7siyrNVzWVmh16VtahVENGDZBLJSMHRCs4nLVA67u9YjDzTng4JFVApD8jfz8D1AAnTKu4V",
  "key12": "4JxvDGeawyWBT7QQDX88HvB5wQkrv74TAkPuGvS6mr3qf68if2LuHWxjoAGNGimncz4xufDESeRqq55eTUv5cSiD",
  "key13": "3jDKtauiGdUisKAoqhShyDBptTFPT6gyWmNJYefKU8oS5wsCVJSfGLozJ45w6ivrMP5dHHSapYrJXeiy7f7NxsrK",
  "key14": "9kNMVagjgB2SB6Laq1gPxU3NP4dgWQoJMhPR5Gde8apv8x25GJS7nM8iYpKvyZpCFPkNkS7mpuZQryQkET4FfBW",
  "key15": "4jgwPPowWkRQZUQhk6EENANokS7bSgUerW45Kzvkqbq1ezRZwrC8SFg7R2H39qyzzUjgyiJikRaFkb4z4JXZzwq4",
  "key16": "4QLmNWTcpFzPxup7ATXLXuCxLj6DUcGtJGThFaMvKhJoASZxcianfpc111ioTBaGwbQt9t6kqZfNG36gXRE6e8iU",
  "key17": "4GgFPN2FUWMp3Lrz6b5rPp5URQLJvY8WqKHjD582jjEQzVpMbhkTD7nafCY1vJ2rSNyazHEReebXaGf6wPEdmb5X",
  "key18": "2gvDGciuawD2XV3wCteEBsQN3yNdoAcmaDBMfDm349kfJXixHnzf6j3dmpPBn5utgGawg7qTEyrmVjMMBaDmYdKE",
  "key19": "4j3JxzCAQtobxc7h3q2Wme1BbWcyRuGjNn7AjsuhcS1onhAdLF7k5iS1YPc4n9p1maVTKFByAuEPoNtekG9Sibn",
  "key20": "snRZWSXcruTuN3UoVnEBvWw7dnidsKApnA92Vrkf45Th1Bv7ihEp27sh3YCzjnEHGqkSeiHsjoxn88ydnLYkT2m",
  "key21": "4tKQCVgcXtDNVadVkDTRMPurnSi8YgPtorejagJZ7WdCSc3VPTzLpK8QekNKaVT2uierKxMfo5kvTdMHuCh8L886",
  "key22": "RA6gNCyCjbFSTzdnYNLd32cyU34CAx1vSjPs3G3APsUgSHSW9jYiktawBLpmhSVAjDgaSFoWh9MYyLQKQBPDYwA",
  "key23": "53FLx2N1a8MK9Nemp9RBJVNdhsuA2GMRpoXxnDqucWszjdq19Sc6ocfuZo1yk4AKjisZoSEZqDSDQQHBQkJoyQsh",
  "key24": "2YUcBsHHfZExoxtY8RxebuxH1fkeMGDosGGTBaZUNVmruwsJemeKv79DmXvcDU7evTKbbrfXnWfsvX4zT3ubXwMT",
  "key25": "5HTv19kkvUAGQFtpfapadc9AsZdrHkqv6gqCsy6v33sEC62yvc3hQybk96ZxTiwYqpunk4nK8VtWGvfGr77avzLv",
  "key26": "4xrn3nsUBQy26UfupM9gtD6d7qnbvCSD4K6gkQvjNDno33coZrDsyBuMXSooHVUkP9G2h6JP6MHDmrDRwL6uHG31",
  "key27": "4wfwTrABeng7QNTyaeYHM7KypyzrDBJ1EPg1U8v8N4nNVTPu2e5Fz4DD3X3Dck5fKv8ch25BsXJKmJ2vkh18Pv5d",
  "key28": "4rBZHgLaNGEb4ARTYpaXZAgWCLchbs62B4jG7XMidJPVFNhTSb4tTfN9q3zEALrPoEgEPzwS6Dx6RdSW6jvVgJGd",
  "key29": "qojw24atsfCb3ZqsWdenBU8T87Uec5FtjHK9hjnJ2DDRrZ52wadMrGuy1HugnDLWjDJnuURqFPqM5Kfn6pAdnk9",
  "key30": "4yS1Ua3aWnD1VNSgT6cudfwRcAZozUfWPVUjr9ohtUVrN7hxhjvw1TnuaSRvwWgaut3Ff2ZNVReehfaaBG9ce6L9",
  "key31": "5FqyEkENdSkN12wkTYHy8En8nfsWbgHtuxyN1EnEQqujTmmJQtXmcbSFBCuZE9x5DbyrWpr9JeHozhXiE4fxYgCs",
  "key32": "A1MVfoQR1Q7PNravZBSkxtu9p1EYzz7DgBAx1hx4BituPjZYBWYQzWvwvvFknXSCDpqZsajtB52bXrRTWaNvPYR",
  "key33": "4umDZB5h4EDkdvoDmHL8oS66PjL1SjZGrAYbHyer1zU8zsPWXADN9gEcyVoUGypP6vL39RHTHmVB6GSKMoiR8wWN",
  "key34": "3DzPgWoc5wEeSvZqyehTLVjUvVZVwhoozWnoPEpu8zxwX7TfSo8oeEk2iGNJKy5buRGsBme6AhCr2UB7EDQf5TeR",
  "key35": "2sB47eq15pe9YEL1CeiMpTRMwoycbdYQQBsrB6e8EPCi5XQKN4XdxiQdH4rQBfdK8Uig3nAWmMLPwAc4JUxfSkmN",
  "key36": "NAq1PhK69JTznh3jSaJgNRNrjgKQvYvBbmYjwAEVmu4K1gXVUcJGq1PDBU5xKU32rjc4FdPBXMGmqKxxoRXgxW3",
  "key37": "jVTvY67foxm4sR5dgg6gWByUjE5iZdFP7tHgxQzdZNmCaHkTwrLv6FiUhtMXFKpmiJsGq59TieFz4ugHcyaxSym",
  "key38": "612XforV2FCh2XTySa5g8b41b7R5F75QcdwJ7ZSiYguFTBCSgBKDjZHqDA29UwbXyZczvdNW65UvUk4F8bqRGSPL",
  "key39": "4sBFemLS8xzBqXteE8HhRtmDzrGTRMXrYEtPWGZX4MiQAtXMXd4Y1tH7PwCNj5X6ZYUgXkV2prVPtLhPhWvgRuj6",
  "key40": "5GUNijJoaH2eD4W2qbrA6TJpKPg6ZywPYKb4u6LTWAPY4Ac6x5r4ccovqYgr8F2Y8NguYJS7UGHts4NhBVLYoqab",
  "key41": "2aKTeuQsCPTevHb6u1beSDh3Dy4Z8RbiNQGykPYgarhHRFpU4QnPUxYk4DX1Lv6PYTB7YZUJpuJ1cXEVhMqzFWyz",
  "key42": "4aay4fiiVKCkFyF3NsCanqMaPdkx6HHaLBNJUyAwwjVpwTpWu9kpJjDQYjK3PTiTJfA3wtzbi9kbKTHQYpe6vVk"
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

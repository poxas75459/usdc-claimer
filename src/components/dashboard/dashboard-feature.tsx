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
    "5BbYF3L27ZfRLBjoWnC5XQnc1wBCF42GB6qzdFETMZDeELjPmTtdSMLDnoKGc4dYNYcV5H7icyRT2HV9JXsURxhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VejwDbZKCr9rnN5kVeUNuneiNubg1Duz2XaK8gTphoiGVZVzcEnUGxUaEurmrCTUyJizEnEw2pybrR2cp3FRPWu",
  "key1": "4SCAGEueTYLSc8LZWRc6Hj1R7EWHtkvfCe7fkbh7Qo8Qx2RkdnTKVXTxpipXJd5149Ug7dNQkQyWzhYrZ9mZm2J",
  "key2": "3AW2sidBMXHXBDeYEZHPpUCJMgTYoKoetQ9eiWEngNZVQJcJXiYu2seBgcy143tWCocGdeD6szhkTN6rfk1BnDVT",
  "key3": "DBpDjJZ4XbaRfkKK1skpyDpjQmyxULeqktRm2eGXqbGyLqt4V75Un7V7ygBPT3vne4DNucaKeDD5KAk3MrnuBKv",
  "key4": "2p4ebsmom5atAYuRrsHy5ZpZv4XWAs4ZYzRCCYbndDLCkGbr2oJQb9cLFRuFhBRHQf6AEcUr3eXbKfapzXRqCysQ",
  "key5": "RKrjtYHNwz9rBXJLm6h9cBDH5JqmbYE3NWerJvp9XNhbSbWE1iYUtSjP8VRufMEWS8CFMxRGGERJRvZpsdWd9TX",
  "key6": "4M3x6nrkVgAPSGPF6zLG4Asx7J9izURhfC3TvtyipsFrt2jrYVsuYPnna7NBiBW63VznYkVAD9juFPFM2pkaUx8x",
  "key7": "3vkQqgM1JLbfNhBeEdwgBzSPdhEBNgR8J7yXgwPTZzcSZp4uupdNRKcMqB9YbAWHNpHc3LUhmB668EdQQdLzqB86",
  "key8": "2YeXBSvrcPXbgvWzRNueub6Qk1qb9PLpMA9pQG3TThoQQaNHuxQ9C4zSY5dNvDtVqw1cUS9DM2sx8CvP4KwJxAzR",
  "key9": "5tYu1TwY7u5B4ghShHSgHupiFTspc2woNVuprTftk7WkCeTUCMJDgThzxBT6vr5nrww6TcdQC8mL313FCnky7HbN",
  "key10": "3BndneQ1mPKtths9fcpUTCRR9SFxUfLnAvEkfKaSGjre7s6D2Dx45J7x9xHPe1uMfGSXa4b1pahpkMuyZS25wejY",
  "key11": "5sekSTFLRuzowugmYcShyXqmdE6XikrEL6Yoy8Tmcg9t8gTvZE5RMyQcmmtHoH8hT6qM1AAat5RyTFNFSHSV8nqJ",
  "key12": "aMhS4jt6XWq3UVSBtrvGT9MukgvtWY4G5y74f4DAuhTypjPDJybrninRkbB9uniP5tV1QG64D7ns9nFmJrd6p1B",
  "key13": "2F3bqCw9QGARa5ZUSmKSYyWZXNhzu72dL41FQCChGqq6sC76NnUBAsxoG79Mn2gwwMtfQvorLn2aC3ECzRoWg3FT",
  "key14": "3Jmj7MtAgzFmyYKQW12HgKU3ZPHeusTMn2Qe2u6jxCNpDPLBEoxZhkzuznsTUAeVGdZgSZnhJKnTjhazDc8KaULn",
  "key15": "44YM5teKEru7j8SShrZDSRyvKiFaLCWHuQ4KhbZXcXuKgufLZ3HNTrvxnoEK1ZWiiSJrPKusJWYVtCtbeyWNzTED",
  "key16": "2fZpHo9t4akKedouAiB4bRr8E89VurjMef16YqFr7yT4Yj4Bkz1GhHXehCVYu6acHy9yMQCJm2jRsxPqd1NV9JoW",
  "key17": "3cYZNAKCQyXQdjY7e2J1g8EmwZ1ah6xza5QX1YpBHj1b7KW2of93oggstagF3hRAHKM28w9QKwwUXu3xSz34AJeW",
  "key18": "51LgtuXrbg54S9FM3qVbbraFPRqD5pPaeYm27vHfctT9rxV6Yustk8AsoHq9Wg2nj3PRh4rFBySwV7Xcsc3i1fVY",
  "key19": "4QQUBMpgSJ7QxqVEGvsK8xSjknHij2w2fuKXg4hFMPvWD95U1E23fH9eHM93DDCEB8YD4b6JRpWrtQHC1SNLXgn3",
  "key20": "2FvJPX4Wxk1X957pfTciuqMK2dYGrtEtTyVNp1DkV3aRfMt3jNonMJMbxW7D8r2P6mcaeMixPP8xJsLsobqTGubo",
  "key21": "4jPVR5fgyTbDqNHjBKr1xdN28gPCSW31yA8x6s5GyCo2Tjg9Aic6aXaHU95ZHFaWYNeA4u3Cz7TTeaGEz59waDMv",
  "key22": "5q3azyT4WNZ3CXpPAsMdx1ikeo8MrotvvCTmjjXzDYdPVvrc2HWPipnGoZq1veVTMnL4e9QPj8zc6JcYccAfKn5t",
  "key23": "4oPVEBptLKdK2CwPyAMbbvRm31mZucMJggz8yCm5HQ8E5dex6nq1czmnvUwBsrSQnmeC7RPoa69wkvQn36hYENwP",
  "key24": "5EpFq12ekh7tER8kBSvPo7sy53bumvXccyTTbZgWmM7fvKDBBMRz6ZBLkyPv44TdimgZqU8JQpmC5ZQuY25kxahT",
  "key25": "5jzcWczujmeob4MNULz3WJwdQHx8DX5oXEpFYjdRtiQGa9542UHY1C6Vwq5NMgmXmEvwYf5Ac2qsZqWb8P67kdTv",
  "key26": "2XJjhpn1qFvU74f9V9CVM6zGhZh6sfBphyLHbBeD8Tv3wDRa8HRfwTyYDs3xt1bps98Rn5yzDmA5VHuGQzYU4VpE",
  "key27": "3oRR8kzVJ1PtjNQbdzVpSi3azKc5gXHCENGexpQLgw6DmZ55S9SfeU44Lc2UvJnNwJW9mcoiBY7ZbeBuuPWXtNuB",
  "key28": "4ANhc3ANpCKHd8JQMM9QWBj8A8p76X6vV9vfG352phR5MSNjG6hY49o4sey8pjgorVs7HPP7TyJUXrnrb9n4MwVo",
  "key29": "4ZjnRfQNd5kToKKnVkZgxZ2SoPzarP4VTvefnACYbvQjsDpkToVhkVCJq7nAQXnfyspcVCQuGafYXwB5MW77wTgC",
  "key30": "2VANEEcN3iK7Hac5ouaepCQCzwsdaEDAPgjqsaCJYZDzuaD3JwABEUaCi4VufHxYHGNj3zohYiRYbrmMbKuqWwzt",
  "key31": "3FCAk8UaCCbQgwLvCDqYm7ebopDm5iFoJSvqVqpBzgFgLtcM1nwjR15xDoaPKxGnVXNZ8fr17gL87eqYU5bByNB1",
  "key32": "51LgXTDyj9CwH11EKjrRkfaa5UQsEJPNkMk23NZ2FFWPXqp9jjCZUVCXdq5R2LbQACzn8khyJqDq5yrLuAqeX6Vd",
  "key33": "5byr5RrocJYc6dUCA4xbF9rwG7ia8LEMFVMaVV3bPK9ccjpbFbkbusGPfjb2hKQTXqA3vR8BNVZk4r2zhMJArPAn",
  "key34": "2Qz6QsWsM796LTYZ7oJg64UsKYmKHUJwK1yVPyvMW4d5kE6F6kNfosR9XHjqWoSd25dzWvkaqXGvJcLJLeZD1Czb"
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

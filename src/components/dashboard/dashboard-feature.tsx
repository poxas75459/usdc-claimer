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
    "4MLUyzs9EdugeL5DDwaLzuGkFhMJz7KnnZRWCmR6s5d2KitQ8cRSLNto679QU2smGV9mXwYLAEX7uJiUKVrLBP3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFqw7Gr9hFcPwgxDy1vKHNQ5F2ABWW2ZHHG9rDXUPGnaQTSf8R35NAderHVimYb6k5BxMjmxGsQjpDXdusRKCTa",
  "key1": "2gnQMALZBQnz5eUdXjTWE1abBq3sR6egrDh6RkgiRC4MkYhc9d3GbmymB34yMzKWGFqQ6uUUsb1jsi2sscpNWpxD",
  "key2": "2Rs66o9a24zTmsZn6g2rKvYKgQGxpAA8FdEeTS9be9rF1p9TiEkiNqUmUJJT8hN1bjH23VGTbpifRSbfe6ekihK8",
  "key3": "4fn4WWRuqz9kjskggieDfZ3XESKEDC7o1D9TgVytxTyXbFfWcr1qG9Bi2SvtpxLbq6cTHTXrNRzuZkgEEnsHLmNX",
  "key4": "29j4L4oSphPMq7cP7WC4tDCLxJjA26aze2XpHWYqerotxp22A6pJ3Eonuyz8sFNYvLqMXx7DT96oLV3GujHouRou",
  "key5": "88hoQ8L5rDWi3RV6sncaRRWZbkfHxttYcjGGQaNuekeVPBkpggRTYpQFch66DEB6rc8YdQfQsonb8QAh9YWLpPM",
  "key6": "4MSwKQPT2BwvpFQTCXPnefjjfuvz3x99Ufna8QqpBRK5UYRhcJMyA44q1tZE1DbkLnwSwBY98M7JpXfk9HEobA2S",
  "key7": "4HwBMQhjAyUdwNeS6ZYyYMyfRLNToyYa1ecEM4bbgyVhAjhvaGXSDC3SRPaAVmEPtHJPUWrPUYV9aF6CvLfMhxZE",
  "key8": "4ipLGfitFbg6uK8z6DJwtTQfFugLcLKXVS4DMwVAqR2zuk38SYNdE7zjhCQwGUekkJSP9jADB5PHGVe4Vi6J8ddk",
  "key9": "4g5kN8Dd3z48g9y6gA8YvCaXMnWh7YeARAVVryhhMZdYry5a7i2cRoBByWruiebRJY4xJbqtVcPWUEjr5pUSCqZ6",
  "key10": "4fDik8B2PQikcXvYfroTzwiWADcpjTivG682J895wSuKzZexAH4jSJh7KhNfMwsZiKdY3GAcKHF6ENRiADuGmzVZ",
  "key11": "2TBCeihoVD1sdqRx7e7Ub5EZ164vjJv4miFUdUAFcxsudTEHCTsJZiWrXWAQiYmT3ALpmKtuT8H5zy4ADQRbP6Bv",
  "key12": "2AWGa2fQi7nDjG39m9WDadriKAm2GmaV1HCps7jWx9DD94t1XhLpZUnbxrhNXsuZRcoCc6AWvpVKL8NJaVPp4C2X",
  "key13": "5PVykkpQH78pzUWLDtS6eXagRQFb4fGfPzH5CnhAKuCTxWRBWVmxXsDXDsWfJx6TMPceoo1VXenaQ6JfaVAPFtij",
  "key14": "2D63PrZz5L5tcNzyrFgT5p4k8wMsQawyfkYcjN2zgA3qXLP2HtpcfzqB7whaQgyGkXjbrxbt1vgveCA9CWpQj2kc",
  "key15": "4i4hjKngzctgHFpNvTAeAJJajJWEgiAo4TRL23CUsmFbpdYbyFYSiNyby9W1Ek52n9Mrms3vCzhGvpRanYgWkb9f",
  "key16": "4tTngaSvjudghxmCW3ysz9odpawp4vKjGg3KiwvkSFYbVSnJaJMNw77Tn6mNKkyAjoVeUyWRWrpFDBBcWuot7rEv",
  "key17": "3H7h5m8epiA3KexBoDBxj51Yg8aafrd67P5eAv47uuyKjKR5AEiLbiLMzZo173CVsJf86tdRkd25LRzF8mWmYjTm",
  "key18": "3o9TT84kEuPA2x7SPgbhdbCgcKLg25Wci3oeCVDEosAwmwgnp1N4ji1sdz2fC7KNhns4vBkhcVXtQp2VtBEbstTQ",
  "key19": "JhTcPhULgBxmVo2CJYEBvnwLNN9WaMvRfEW4PHB3oN5NnvhphjuZYZWAzy3FUQXdfQdC5dEZM1sKUmWmCjKCHAq",
  "key20": "2nNfNn3U4cj1arSG9f7wsrnzSMwes4zKoYqFD8uXKCXmBtqWpMoyKMMn897CEvrZSBoY31FAM5Mg6DYVLpmtromi",
  "key21": "vbhGwZoZLC6RokKjgApMrwpCJzNUWJ6jhWUNUCJuRdwPrV9G9iYJvhVtoxtp6AGM6G1NWFbdVSEsbvEPhW1Vhc6",
  "key22": "5mxh8WVqZ5TSjXnC3MbVn9ncrPGZtqxTGXUHspYm7KL6EsDB99F17E8go69TAV7BD8wRop1mgR7RitPC9CaKyMFd",
  "key23": "2mpq9W18HR1SgFUfWkdyjEbKHxogYpGuFMpRqngAcA5NkKmJPthmibkHVjmntbwsCAGRR5ZbFC7Zkzr524ZjFC2a",
  "key24": "54ze894tTGwg2F9rScHcRMMmsYdncMaZYx4vvDTi8vD57fHNthHXDdHTJEJ8RS1JCCXJAgqeh9WxHgQVaicwjxwV",
  "key25": "gKVmzXuDj5trdM1NQsYUCRP1XpSXxcWa3y3jcXu5tJwe2UaHvYPaU7wWkv9AVLjdR7MbpzD53SVJj8gYBgtJ7T4",
  "key26": "5ahe9SSXeZYUdsHhnf7mhin3u28F1hTAqDqRof8UYT3ENKtSvbDY4jxzNNG6759KdgsHM2L7gtaaomMWyps5v3zm",
  "key27": "26Xu2s8GUb9eXpWkC57EXcVHRAk96uyCQZjKS21KchLuRpxMoBbg63WJpqM8XTGchsSTmEy7ddtf5inFDwjwhY7M",
  "key28": "2Zxz6jASaPyUgfc2JiG7E4bjXrXNgxdPuG7PFT74NStpuYTakCABFsVmoLTrAB8wZx1kP1wwkJkrFdfimzn6rowy",
  "key29": "5JZHv6TV1Bq5xpnhE7itf2Y3fBVf8RZxUFX4s1ZzVfNafKJYTpaCN79vt2FRnmdah1f5kSxty3GRiaz9Ev2YKYzN",
  "key30": "2RrJu6rPHcPxg4pVrT5ZJfqm2faWKmqXFLdP4opdrjZdKq8RRBo89qXvma7mEehjQrxmcdLBJMJxEeZGjnkLBaah",
  "key31": "5hte2pLsUhRjWnjVuPvY8jP7RsHGpDrcvrrBjQAD26PcU2uDs4BuXmumgpz6Kh6HYTwYhNyAwzxqUDFHMkNRnfUL",
  "key32": "46p3R7aZb3p9EEaVADr26tmvjcYhTzh4Dp5hv33PKqhfsnpbuvDxFh9NE5wAWNcf5kegXmZ4n3ZcAoLu1haqygJt",
  "key33": "3quXJ8c9PrLdvCFDXJzdox1AXAaVRs3K81ZNYkQf3G2GTRGeFAdACvYBWNQf6VawyJz3Q6Cek7zmnLXxiUcb1Qmo",
  "key34": "5MsXUfbXZFJsGDR2D1PL1GYH1Fo1hLretrnF8VrTUSZFcSAdMuAUgtmnAETLdqm4vgDH7BXaSS5JGyvxp1QiRCjY",
  "key35": "26DQqh5QRtHutsq9iFVxZ4NDqaH2X3999Q7Zbg3kYSfYTGdgSSnYNEXVzk8UdeNYxXuj7vyJb8LT3qmgENDT6GvM",
  "key36": "5qE5BVUZCAfrZpPRJ138KGp1tHaAeLsKb5PcQvhoZAe8cMpt877daGefBo9sGS7ySxeAxDR2fvvyjeBWT1gNTirY",
  "key37": "5dGyS4FzQBzS8LGwfrCyTZNTVWdWDvjVYKeTmYCQzqFDD7S3SC3TpX678uHtbE8iGVaoLkjtuEssds2kxDdUMpvc",
  "key38": "2nvTCVpCXy5YQx3A2mZQSspTuqYPCiWzhjANVt8hnJQ4c8wdHzrcqA8juhT3iYuWzM3AMm8QZAigLqhJHBB51HLA",
  "key39": "5eE7uZ9r7gBNjSQKicHfXfWkjDsPh7F1bL7yh3Wiw4ZkjdMTr8rrGWB67PU4UhJqUWnGoGnZY7v1hHgnkftrDmb",
  "key40": "4BFQbQhjYffrL5sYgKpxc5surAuzSr2ngZWpgUoE8ouRU81fopFrEh75NzNULdDn7xZP9i2D1usqpWtrUVURBaUm",
  "key41": "27aBkztrF9tHGv2YUiAzLu2LmfYdNeQs6UA84CZq5iiiLvGs2WY2vbw87H5vZ2gmxCy5n2wvyj15TXeqYA4qPFcA",
  "key42": "3w3QnfJ5symwF4kNBiqmBfiK349bGfrR9XEWYyKW1VvjjzTe2zSspAgBV5zLGXESNagATenHqQKUXDmagz3Nr92M",
  "key43": "5xCdYqEcvTnsubAQvfi2MgCtN6cUz51Kh2xPr5r3ZWvcECNG7y5wKcJT4cmiJ5th1dnze4DFGUMUKKVdDtQ6ecSW",
  "key44": "W44MG97tsVrJpEFteWPFgtgpzsqmB5ez4A8oTGbN6c7NK7NezTD9hNoQ6eNY8CM1ay35QgeBMPhTsatxLk2sBjX",
  "key45": "A5NmB4NmtJukYp1dAhWpQf4kf1iUnhgvj9ECE7DkCnhkEsWkmi21vw6oQhFiiahA2sq4SCPvx39zSD6HEdpKMWV",
  "key46": "2KMWEByz1j6Fejmj3swHdACsmMKNKWKvnKYR7gFP7hiGNMCuYRywbF9hfx21X7zQ2sFVau7raQAHS2buVYyQeUwi",
  "key47": "5FNEh1mkggYCQFcYMWQdzaKmrEi88fB9JwjWBrqUF72Z1uvcd5YD6jJJ68C8UheJkYYSs4VEvfwFPbqVSn2mRDxR",
  "key48": "2U2shBqBCgkqUaGAC9HqBfiJbfReVrWdEcoYiWGUXttTNMzP9RiF6vAPYmL4VSjuUXhYkLmvgSnhY8o4zA6ha8Da"
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

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
    "4Sdb85rkRFQFxAnY18AmH64AHsog6hgcoHM6GuR7tHMLpkJUtr31D5azeUpE7M3hYz7RUrCuj6rgQSZaJntpQWZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qR4vtstdFFwxhdGDJv18CbTb3CAfuU4ZvSbjCXXRruHvecW5yGJCDrCx3XVu2FD191ZHoSLHJNmw6m4sJAiUrK2",
  "key1": "48pkMTUGAG33KqVq3hg7ZukX8zHwJvPzuAWcbueiF8tkLq4ar3ppmLmUinSjp6rHEC61iqz7qaTk5WVAmnQoqREp",
  "key2": "5bfuNSYyg5cSXJqUD7wp5w2YXDWCjNKduq2PdZSxbAnvJEtwN8wzsqqR1ZAMduWKB6g2ewo8LwFPkbEufs2h3D7s",
  "key3": "2yGHVmnS9CdAxLpGabyYNF1SZS1diuvDDK3kvFNsR6NKCaQVNYfoL6CW68kH78SQCj8CBasxPR7J5eyHgqSXGjYE",
  "key4": "4xqBrMqZ1nTRjwdcFJfKXa3xTxXfsmxf84N65YcALrn5GTRToSrvUVPaQxUqHpK1FDZiWJHtP6irtzvNwY1byt1f",
  "key5": "iLhrnwoYe7bdyCz9bWh5pFMpQ2jhRJpNRK58zHeXChm8G2eg87BLz8o2JkBRo4yQwvqPCuv7XJuKgKNMiHMN9J1",
  "key6": "4yb5soUhhdpqMpm5v4dzxsGCggnAhrSV9bNXVsEH2iex4FyNQxxNU5L6ECgmpV7YdbM4jWdGWFKeviz5APtr4MRF",
  "key7": "4Yr2uBizEVHmWptSgukmPB7m4uyMvRv4VyZgvRCTaH93VJZYJ3sAqZcJcPP38NpBcpNjtyc5765zojnXtgiH9qDL",
  "key8": "ERaKDoK9HtYY7mUDAasGWj3vvCXtJCcr4KQsaNLhbhb87dSZZd8pQvRFYn5MomgL4iuarPSijeUYSQFpPaePYwQ",
  "key9": "47qE3hzCqGP3qzJyDkK8wo2bH6XJBufLYkZPHckcZKRQu9ZTJMpE3idsJLrNgWWQeBXYEAEBoLxoGejLewuWxgp8",
  "key10": "4jFt4C8dZfXz3JS55F1wyUjMJQrUJgrLDhZvB6SQ1XU7Re74XXcpxUVy1UFqTorDogJ9GkBjjVKGyiJ6mJ6qbDkH",
  "key11": "4at1LTStrCtsARvL4sxJ6EX9iBoXUK8kKemZnBHjm8TViminrxtLfx9bYbmnFc61YaqrXsZsnvF8ENrHQvjB9Zxe",
  "key12": "2KSnFqfKxV8U5GAmGMnkdcCfKcmveLW5274wX9Q9pvfEVxAXS9k8yMsEJtynfn2VVibFCwc2Gohp8rrFKSXbbnv2",
  "key13": "n9L5TdwVVNiexS2jVhuG6fvx1kbH537eNjNHqtgkZsVRtv7k1vnSNHWDC6y88XiRyLKgf7efY69FRwFqtNsgcz8",
  "key14": "vxVyKPh3WL1598ieYDYFzqgyN4tcfgaby6srBfTaUpQG9KwzkWcpr4719UHHn2LgpjBqsnVVL4txkLWYZhvP83L",
  "key15": "63LhDfcBc1w9TEDUAHcS99tgeYgfFWYGJg1TCvoqfV6uiSQB59LJKDUk1onLAEDGothZGqyoAbtW5qkUhj133CWZ",
  "key16": "4bgXWKPpSweDncm8sXzX2dyNxn1HE7weu5Ew5jvHts8T8J1iFdHZ49xKepny69VKkiuUvs7EA8cRD6t2RCEMewbx",
  "key17": "3iLGeMv19CGLRKRTqbrLyvsDv8j2mzNEzEUHc9nepLiBnezssLvenprxzkvz2MR1j6rXH5Fs4oHGqXfh25DAKQis",
  "key18": "sPdz86K8GSLk9NEeP3C6TjNbQ9UhJcea1jaesryafzNnUPDV7WM3wwYpCgzZoyokeDBdZichV3j6gQ3y4HBPc5y",
  "key19": "DXw6NmMUTZhKHFMCbxAU18nX6oAmaFZH1JhfG8JLQ77oBNXnNhTqfPb8DXSAyRCe1eY5xND3ZPPY2wfjLk2i73V",
  "key20": "5z4uUVf6JBS71sgYVDMpeYSD27KE3iNHULNmNVHPcHk9s6TTXcuD3N8m3svDm45rC2tXACogtdkFUdaZ16MHssZR",
  "key21": "51Lzoe8HoJmRWExx5pqDYDXB7qz74Kxeox6Vbhc9tkpJCBfwPaBJ3Sm8hSAmw4h8rPfvLkSsp5H8qq8xYb1oNA7b",
  "key22": "4AJrs1zQjbN1oBSZCXUZsuFBQYkxkNZbmZAGTWhjgE7R5MecjNyr2CDcuB5ZQ6CquamGQwM2uvfJX9cqQn3s9Vss",
  "key23": "Fj8BQ7jBici6rPokMsHe1FsZNjMgP7NntFFXRMKafk7w7sDA57Qksfy7QxrKguyhbPvayfWrtqL8sHyzBadRQxU",
  "key24": "3ffrKMHvdKkzDvxdSKNEUb3QrGDzbsK2EJfXA57XFc1GHgkeZebuPJfj1FoQgmhpR2zPAbBukb2H56K7xuxjbJVp",
  "key25": "3U1GUvJGNkVGt7DqbEwPptwKjY7cqW9qL1sMPPgK3LEG757La68iceDAVgxkqLksXnWxohoW9i8M1pM8XCHhP3Cv",
  "key26": "2wqtqzZwbzjifm7TWSjeNFMzb94Z12FYbDgEnnzFBu7b7U1iBkZmiBXYqerRtk7B5YUxrgZkdkFxRgFY6VqncHTv",
  "key27": "2cb5xBHJgVqPPzFvar5W4jnjymxbzm26ku19L1nfKwYaMbAWRh6paChNijzHhTs62nDRAmjFTLowETaGMzLzxMiz",
  "key28": "5muJYPYRcx89pWec6V1y4fNVz1AgNdxUmLfqgx6Mgj1oLgYWokWfZJwiZWS6eCDaTti9EiP3VYsJ61i7Nq22tJSe",
  "key29": "3uhWFqFxXLVYixuJbVtSvdCAhTyW3ym6uN3vNEeA1Mh3fBE6yFHF9Rv56VtYwDuoGMQtXNZyE37JD4kdJmcW2UM4",
  "key30": "54TT5krb5uKCQWS1uDMtbjCDtNxbyZ8CEDEWPQh5aRRey6mg6NvoBSvZqVwufjAsKAJXvgUbufxUfnjEgQVrwyHh",
  "key31": "2Nmvj23wrBKTtsPktpX69s5dHTycn86mRinFBxC6y3yyonNiLMWrdk9G3UTPS6dgSPWyHprmqyy19hg2FepeDdLm",
  "key32": "3s19nZs69F5FupgLzSZoqaL1c4Wmf59hddUjLDS4SnMaRCcRJLfwWGmLHi1HrGT16guNvpA4zZTt36SYwCaDhqUC",
  "key33": "36tsMFDGiLghA5kvj5A1TCLPNtemqaBqerp7xFGVzhXNRMMm18iTpfz1etwvcZ7eV9xGJM5b6hZcsuVRpPUP7VXD",
  "key34": "3rncNeexznXujKjXQi3uqoR6ARasyreXgv2jvmVjpWgTN2Bj8Xr54HAA8kD5sh3hn43k58dpx8LnR5ZftkqrMoo6",
  "key35": "4eDXzyLcsVkFsjHTxmewFKKNMmEM2grTWpqJYLFzrHponQ9DLk1MBGq5yJVomhrtvPc6QVoaLm3o7S8wJT21zEy2",
  "key36": "66fiBwt1HYqe8AVCiG1inRVZgX1rmFzFEbdegjjgSSyPJjXednDYacMxL8HtFpdiHuGa6MCdog4VaYmo1uyPnq9i",
  "key37": "4F11pjNaZNSr8enzNYzugtUrF6qveW4UhGdX58XaUwDGeCsZMPKxniZQeaFNjWYi2KWmvLVLbdVYER3aUuxfRkRq"
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

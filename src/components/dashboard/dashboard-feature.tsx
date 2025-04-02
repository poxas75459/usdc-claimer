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
    "Lx6ft8As6vLj3o5yN1ozkPhS4nXeL6DoDubB95j38ANTxfqHhzmtkPf1bHCjXcv37S4xDuPo4499Sjr5D6oESoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hYJWaRi2b7fkEu6Aq9EjpJCGkbEbvBbLGcAbWNynhvUzfp4YphX1kgPxTb2ujBu9vf82PoZrc1hq5uyXTZsVvgF",
  "key1": "5zSHERoRTXMUjdrgRott9DN6pJ27F6hYAmaWK9VdNUKScH6Yhx6qULBFT2zoADqTEYjT35JUPLxbJVxe95KjfkBS",
  "key2": "9EUCNQa9MKZWmXFWd4nkKWnDnWNg18H8LNTTa9zV9LCPDb7s7SrZ8waCQC2naZNyWLVZKKXzzN2gd3pWQHrR3Q8",
  "key3": "4nt4hBpcmQm2QAHjhjMqNuRzzTE3TDPCRhbrf1mYxjQhzLXEpLN6zy78r6jkFzabDkuVG22w6noNPqSvdBWV9VVB",
  "key4": "2etJjVHrHj5bmi21C4ATuUbKYgwehdvXSFTy5JafEhxseGD6gAcEFHaVkFfFHoT8z4mQWpCiZif73Ye8jEQGtnzc",
  "key5": "31aFyz14cBFjjh1mj3hxU8praMe8p8KC9e3WU1k6tTEuUZ1JYYjFgY15ncucEhxe6fy4YUdekxCsPb8qWXvFWnWE",
  "key6": "HSuAEF2oTx9fqut5anwhGPG1QopwdifJKQM1C85NRnkojwSWsVLuiuM3SgmeYF42hk5FXhCGCi5WV1dfpsDti8g",
  "key7": "4us6Z1yDvsYdKXsU4mmZzA4GqaAx175kCNXVHyBKk1aDPKNdQYBWzkRUP5U9cEq26miuAdEdBai6v7KRybtzKEw8",
  "key8": "3V8to3ssc71QoPWtzqPZe8qdf7CJ8jAhA9EojuApc78uVrXzGY5yBKsasVS4SMX9AwPM9ZQ1xPts8EEthx2461Uf",
  "key9": "5PN2rRcvxwvPRMFFKieWgsM1eAf8pu3sdtmxi4twxWSJbPqhC7SKasq4ioK1zDqsVdBM6EQfqEJBYtFoioRWfag8",
  "key10": "5hZLH6NgPtETnyDUadYTE5XVafk9aqkYybuH8XWhzX6KdEPuSwWySXRQtB7x63p49ZUjgwSUecm117fu5y5YP5Zp",
  "key11": "vMW4AbPvxGR1antNQp3f8mfpNgR4b6vdM462WLmyJ74KXNozL83r4MBGZ5MM6CsCR94PdgxwXo4QDzrtsTRv7Pp",
  "key12": "J1S3UU7j9ChV9kRkdTUvxoqmwiimTmg81Dn4nySQTTRM3JCtEbqq7jUxVt8embXgQXBuEwKLQEQ9gsMnXmyENL2",
  "key13": "48CBP1U72dFRgm8HLdPGkTGfBNmrkNR1gnZsxHMFuTQbXnsApk5vKYkLZ9ApVpDmsqqXGHKvsqgSTkPx5caWG7wW",
  "key14": "2XFyDxCnz6R59ZKeRG61pDPpQtzWcwMNjBfcDfqG8GEwEaDoUSaHFgREvmyTKGZCZJS9w9HnfVHgvEgxFJN9Awoe",
  "key15": "4jAoggcZvMig9drndkB9EZ9ojUuN6LmqLyNavApw8ZtCG3r42q2R2jCHeh647x4vc9bMKaZdMgeBxuJmu2DBxLyQ",
  "key16": "sHPkZgoABTzS2rH2EQCWG3B79WaMj8JMQwnUDx5Ez3Hgd5odrWgE87UGzonFMpsYyAJxem9ovbeTL5BzRCdmwEK",
  "key17": "4kDgFTer6sjUAvGpoodPZzGaxwFesZxWrhtjZd9PUpdE9h66aQMmNcdyyd6UP4vgHN87H15Tv2vo9oeBuq2Q2cGS",
  "key18": "5mHYrmff3jbNxErB79mUccZSb2CmzDRAmjfAJj4xfFC549yFxeikEdsggZby9xNchQCtwwsrDgvnVP7TXGrV5mmp",
  "key19": "66EsUgcVrxvLJ61Z9grwVVCf9BHPqSGW72F5kJ3g2PQnfrS8VAp1B7rr6qC2rvyh2g8gTPQTp1H6amU9CL6iQmKW",
  "key20": "asaon9xxefn4Lq1VgTkBPuAiUsHr5YivGLeox4aKjjAve8Nc8stJbGpDHPJgtXpgkJBj82VXjRZdXSaQvJJLg3G",
  "key21": "GR2whdivQJDoBZqBfvNZT8BKu1Jc2V2ZywYvrA7h5KSYbZvyYdN5EkuXGRY8nGgstozQFfTfhnviQsNRXCH8G6E",
  "key22": "4RF7qrVkuAL8wMgXQakoXyx7SQZ64isvqmCJoLV5RbiiSqvKSvYPYfpVTBXvgnq5U6P4BVYZmGTMkPbtFyavnPao",
  "key23": "3UC5vcsuY5wzDjR5vBfZfgEUWQVjiGmKzLQetBJLLpRXLLHBbujhTSGggFg4NAwvZzWEAtFbPANxpC8pb8UkegGu",
  "key24": "Hndk6fGRc4SXi6QaKHrKsAV6eNotC69wyK7zeGPwka26SKACpEvQ8oPG7uGwZZWtto9EwQ368rj6P5KF1cmEtez",
  "key25": "d8VGo4P8beuLxmpQ81fjpvGhr5cgXzMqXgyiCpdNG6gLCo8BSgeJpf28younNLxGrqX9Pe8Rkn1UXXaovu5m4vL",
  "key26": "38sjk4oHK2eitnMZAdqANtfinHDpKVYduVFYvXTYKqiL8W8rLXDmXnbSwFn3vPw5jgA8y7KAHkmTJkvz2cMpgXfW",
  "key27": "2oj4Y3odUofr6qA3iTak5BJTaw7gYuwnnW1r7tQvLZ5zH1XRHqQ4R5uaQohYW6ZG5WB39A1WAPTpcQ97zKQ29Wi6",
  "key28": "24gDH8FhiKyzhusK7rHCh8sWcTpUGenFTP7GFazk2rdQjhz4BgkszhDq4QGmdqu875QXFFgVum7LoftsCDrj8pBz",
  "key29": "5frac2GX2XdErzhRsnhAAJYeaAsCqAbFfjszrLYQ2HFutVTGjq2qoQTDvM8jCW4DYqXAnstg4wkeB9SZQFrWZHpC",
  "key30": "5p21h3b33dLYBbYomqKkkQ8Av16Mu6ziZV6X74zomyDZnsGXRvxFY86XYJL1NeEh5CLtPrYns5NZ6pSTJ5g22jtz",
  "key31": "2j9HQQNjqpnAeyim92ULp8jgN32qGScfrMWPKK246DhhVJV4a2BMnchhBcvtgjeufBk1K8zVJd72SDmxzU7goGDw",
  "key32": "3DFLvomAZQxQWpB71uwHADhdF7aHL1rpijtivC97gVFXdfPjQfymfP7Dbq2hbZ9NhFdDWv1NSBRvguPFf6B6XsQ5",
  "key33": "3rAJ7zxkBWHUwZWVUumZbv6H4HRxmKuxuZYXQspLLAXwwvMjri91jUfAonwDJorZUHNntb3iHK79bLaiRiPEe1mR",
  "key34": "3k8LvArbZ8uqmpgp5AUb1ExFGChshXrrRNUxUaXAN6ZapFyYk2qF1E8AhHTTzrkSH1DdirWuQDb4MYGas2Qh2tV4",
  "key35": "3WEKmCUj35TyJL69bDVJXdmaYhHbP1QqDQWwGthSPPAGC3TMLG3kicWHDkcYgnjALwDSXrWqYW2vvYGbK8KqXZ9Y",
  "key36": "3AemaSB3ofMVytAaY4NzVEB2QkiTtjvurfbpsB8Pz1SB4ooQppxnM6AaMp35W7eo7bVD5NgVUT6hkwMJcuKoH2zf",
  "key37": "3QkoTjAghJmz7qUBUYySNwnsVD9DPMfkKaR3Qkobz5yLNzZJm1ncqGVy7kf6u7sHSiMbtUHaAGein8N7j4caP2FK",
  "key38": "616ZT1xVMz3eaM5W3mTsq4u2GRDbsVtnRRak277oS2GUxpxibWFm6NnP3dkygGPRHZDXLLyk2nZ4G7Cx7zU9hnpS",
  "key39": "5Z7vDjJjx8wpwQXtPsjE5VQ43avq5Q4GiqawotyH3L4wmXUpvujnnmNb5uLFArqJkZVhPf6fWTwdTaVyGWYR7hRt"
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

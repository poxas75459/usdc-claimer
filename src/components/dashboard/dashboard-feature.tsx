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
    "2uuyLNoCEJbXvP8FsuorG6cZSEWpXP3djhxhduPAAN91Vb6MCGN6Eg9D7C8hB8tx5X5U8kLjZKQD91tXPDH4tnti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcxuJHaQyRR755pCZRL1hbPGkYdyTHLWxiSYhkYjzFVDRB4h4eD7tt1wJw6Zy9eewvgGS42J4g1m47vHobPjN6H",
  "key1": "34WtDAVB7UFcEUAL5rtrcf4cVRX8bkkYcXghvYuAwDmxrc2evLAVnE5Lr2W852TRwAbmSVqp52jWp4mKCQQw3BeV",
  "key2": "1RPhsSXXhue13pgetBKgmxbh5Gxr8AK8d1wAbyxRnY5XTQEvDiz2mq38oYUVHPRVLmzfJGkJNHUVV7qmmx93XKJ",
  "key3": "4zVocTVQbyZxS9jDeCu7Aa7ko8HfMMhCsHU4F97PiZfy9hxbE9TnCNGu3hcY1JW4cHW7vj5o6Er8zxj85vqMRQTD",
  "key4": "YVs7QEGGBVgoqJJVPQooQtRcBrVMi2V9kMviiY4Ct93pQ4kXK2iruWmvFaixsVUfPWgVH5BTC8RPw6JoZSu8omF",
  "key5": "2NCFxFEArYe3hLgdv7x1gAYM6fimURPMZy8xUyyUmepktqNu4Ao6RYzqnmXDFPCdjeZGo6NMJ7S47SAc1T2PMqF2",
  "key6": "5aoUZVGJFkieGJ92VGKrtaThyo3vgAHeKyKfGdrUToyBVpjwqEBnD3U7F9fd9HMp1S3ME3HpnUsFsF6JLN1r26xq",
  "key7": "W492qdkrT4xK9K3M7F9jDMAB1jMU11PwEkcBQc3QimDj5uj8iqzs3dQwJF95eYCsJBpizeWmtTwYU5GyM8dQJCk",
  "key8": "47GQ3vx4B4VZCE4p1V6AkiBV2zPo5U68Kon3QcFK7RbYgQ9hiTmfa3sg5oUQadNMXccp3UNH6tSYwL4MkcAUwGv8",
  "key9": "2yvw3NQWwAZDkPP8YZkBfjjaqBKF6f2YzCcJQLStwnMp9GxyMsmMpPS5GM7W5UeRNu56hgM2MHKaMjcovpQ7rDFk",
  "key10": "37zpQME3BNfnWwoaVxS9Pp9T1MYYnqrbt2iv1ijwCydxBvrSxtMrYU1tHr69SdMxj6hLVyTtL8ex32rk25A4nYq",
  "key11": "3GhNi5zTHRM1RrdSCFGf2A9fVSdSksd7282vhJbSQr2JpoD5s2BFzcvsdoweJ8sRYkBnZFSzecNSqkXDCB3o1oqM",
  "key12": "4JxYw8eJbEYryfbKm4zugCRfs8u2JRzYh9z5j4CGJi2ojbKhPcJQ1xHLWv3EXP6NFSDxjZf9BA11vKn8VLLDzcXa",
  "key13": "5avtXW6eTVQkst6smBTcJfnx8JNX2enYFYdSwfHKqV9UJDNVKQFF32M5F6zK3Nc9wQ6xwQuFnR3RnxQAnVNGWQYD",
  "key14": "2EAN9ypvCjZGMPGubEMD5JDvokuYcNpuwRBkYDFcfPA4ribcZyKkhNNnXSx33ne2LHjsE4aafHoi1BZyQp626o9C",
  "key15": "4Bu8zf1XqmxM18UHGPJbNdFJ1bsxJKZXMeXKsK2bAEG9AKGmU8429SZzxFqcvKwqTFFrZ2rFmmEBst8CXVZ7v3dj",
  "key16": "64VtWVNrgC1Whig5xLZGBfTQUxbZ3qAj1CRvjfPJJ1atDhsLAvddn6z4EYbVvUpTgxtp7brpGHtEVPsaTQjpFD14",
  "key17": "2ZqJUPkgsY3KUFihHh91VchUyiax5pBPDLAUVfRwHEeNXd4ZEe7j5B4VzotRwN5sTK7jLEWkJBgToLS8C3CyUctR",
  "key18": "3HDeMmpkcGXgfKLv6QGiSQrpmHHx3pLNHyWPvMqtbriNEs722hwkqjmVCbnvc2gDyLM2ukRrcYSovJ2vVcpkeQyi",
  "key19": "rcUrPzF2TsMtwpJwk1M2149qsk2kBenagj1p5C5pBkmqbLDYNsDM1EfQHBcuyJks2tUZPsujP3nEusiaeLSc5KP",
  "key20": "2BarPuFp6LWVNGkXuC91ExefeAMV853qbSvQn7KijH9P6P8rM1DpHHFSKgBQ7BAt6F8EK2kcRcJBo4RouGNE8U2H",
  "key21": "4RgHELWdGtJ567ZHeHt5gdpEhcAFPJAcEptbWrygb4LCM1Ay9Soq2i84Eodr6nAmyYMcyGNGeRhNUfFG7zdkirqB",
  "key22": "3b6J1mjkRRiri7nBqtxJtvGXqsBfzcnvMs6XRr7idYZLqcfXgF9iLWCabi9UarhXaEUgqpXSNLDHgcSNx3WaEqgg",
  "key23": "1UpmYwcP78Gv8UXBFe9nF3zbSnDqVJBzSEs91x5sLTSxDwdQq4bGNMy3WnYGn1rY41kku4STqo7DpBTkVq2aSN5",
  "key24": "3wjA2pHGSVkdb6NhZtX2kRjG9s9fCv4EMwQUzLxzVxU2pQs88u3J38iDg1ezGn5UtRcf4KVYRN2UoKHCgx9dL8eB",
  "key25": "3ggJKaF5db2vZi4Z73gagdCwgh5xERpKB35ZYMjTACJfYs7ox7VuHFLi2cFSutLtWePhPsyhVdQkZAJ79uehDLqe",
  "key26": "339wVhLw6we1ph2b7F9Mx22VnmtpP1Cq6aSrohJRaHHcErUvnhDJJ4eVNR7krndV4ddeXtoUnjkHSxSCfX9nVimw",
  "key27": "5STtuErwQRUpp9S1Fjgn7U3zxzWxt8Vfcc2H4D3arAHe7JR6ZoaySLFnBCeZohdcGZBsa16pDGBHkckW2bEY9jTH",
  "key28": "5EmsYWtaddSZXFdKymFxdwabjGnRGMcpykbPuPKhbb2c58fWcSGAaYd1UuN9TfDyWJoXhUtTU4YX53oqszUg8jnP",
  "key29": "8oKJDkpdJy8DJ2Uv9SNek6Lt9bex67aMEHhAJUUwNkgEdL5RBg4NEUUcJPn8T2uk8Feh9MwDKuxFhVQjefJP18q",
  "key30": "2ZySEWPJ5zjrfCmzYuhErpMuGjTAEG6h5E1jredhFvFWgjSdsWwBPievFXySYMgAHCshBKa2kEskyvQVsn5KyLPV",
  "key31": "vaNJhV8gDj2c12MxtLNB53hmgENkvib9V1hGqtpxga21Uw9bKVPX9C3sj9GgbPryjcgeUqztLrxDc8vgGzTVwW5",
  "key32": "5wefY3VpntM23GYrPieAf8gmjQdP3nExyMxiHDNfL21jxn2BfSHhMPBqb3GbztH9ZuHCupLthHCytCWgceg8Vzye",
  "key33": "5Fm7zkUQYZd4ejgJmF58VdkWageM9TwmNZC6LTk2AvfriQuq4z3Fnb5BfqVC2ayaMKkCr4BAP9YQKZ72CtF7vp8X",
  "key34": "4RLDcTwMzhBxReqHNNXgqwJ5UTqGq14CsmPKrWwWmABTaYQTesVj6Dp4y7qf8urAY59gfL7J12sP2SZAR1PLyaPP",
  "key35": "5u169NuayFrjX3TyxwGW47Ua9zZHfxVspaXs6oRCqLyjBTZ21Uxda3jggdkdWWBeprnGwkAk9LXb5p7eRe3okvgy",
  "key36": "ZkEUMiSQPSewgMnTuYxT7wQK9QSr6UPgBKTKBAmY9w6SBuhAb5NQ1R3b6ce2J8hnTLrJKRzrmxE1afMUyH4tmQR",
  "key37": "2H2kwUYeN8zygKYrKzUyEq89C9fvYCKTWk2Sq1SpvvSQcqa8aMkpgERr7V9sKdjt2oJBD1DBxoV5cTzXzMMzc7V",
  "key38": "knK6zbjoRK8KigzLZCyi6mqBSomjRWU8tNWsKfCTfcS3cFCUfZ2NnQRd3SqeSRG14JCf7ktaXUhPjbiTqWxxXjM",
  "key39": "5ZuvtzjvDyUFK4RuyEBoifhksiCp2egEYpuDeKhK2WznptsEfSQXtB2Y8NbHUuqYGiSkLoh4yTwxeWvbAqszSf3p",
  "key40": "3GmR9935jdxbq9A7UabXRVYSNKeywD4e9YJreWb9K7kRfV9p6V8a2qMaHEawYUAXH2ubnZt2vCMqKf1MVQduvy4u",
  "key41": "55kSXYdMEzwNmpoM71A9HLN1YZyAz3yNe4vc8aJDQuEACzEq7dLEzYYggXEfWbgwf2y6jo8kXMaxCpfWyXDAZ3o",
  "key42": "335b4YxxuPrCm4KZ7ZGqkjp83tUp6TYFSshb6tVhBGsCLjCVrYmNFZ9PgGjd3sP3tEntC4BtCShp2bSv23UtMAS2",
  "key43": "3SUyQ1RUW4PbBBakXCH77Ti5gt5D46BqobpRoYznk2hxxQ7sDuXkbq2WYm6Vdi8q8bD5YqYVi1HUunhxdVXW1Rog",
  "key44": "fPcHEYnbQq8k9a5AZQCDYfnZAcmQoQcCbYqjZcVAZKHw8n3PLjfwL5fGTHp9W6Jm5YamATZrzXiMpNY5Lnwt1LT",
  "key45": "4MggjYkCUugjiCq4Y5R9NUDhZhfayDWkUtMCg3DGphQ1fFvT7PTzfRNhQrgKoZ9jpo8YhJgzAMRjWGJGjUsV317j",
  "key46": "4pTWvFuP6M21xzepVQrRCqRAMcHuyPMkFfHr1Rg6qtVssxrvz5Pu3Rqtqs1KsazPwqX9g8ymP3aKPUxzKWJvoLs1",
  "key47": "45mT6ZCbJRpN9XrkgNHP5yVB3cXbG2NiiZ28Nj3FNKbvaPu3xhc15bNCiXoBCQSGNfWRU1M5DwiYUKJ5AbLUHSbH"
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

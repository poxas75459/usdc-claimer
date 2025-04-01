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
    "4RVimHaa3q9safWXtzzcLqpm5TXPHV7ow5w2o3zoQSpMv3MfUWh66vXT8cq8wqoGmH9u5uZwGV9pKp8AQmtNn6Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YqeBunhB7rU6w8KdEoxCFKHkMxBYBU7F5wYV3ST3cRUw3xXQcUJev9S3d4fNCyPaQWNfY4Khq5n9W2WpLAoCXJW",
  "key1": "3DYYXZ7BdqQEJmApgZNfk5tBV9Q7s6N5jSyBe7HghKSS35Yy4oWNyxv588yjRS78PnPzXo9pXf8rJhyaR6Sc6uMJ",
  "key2": "28QkWKdPfHynMo4geyq944mTu8kDYdrCUTqk44fYUUmfnk6ne7YnyQjZdq3TEwXUeCsX9LVvBzVqvkyHSa97makw",
  "key3": "2eA776cSkk9wGCYsvLsJVoWu1Eh1K75Cp1miy5d59msuCw7cHnVPRs3JBnUg8DWRvNJpsQKC9DNPxZy8sYdv3BcT",
  "key4": "2XKh4axbG9CFVx2rtbC8NWLfa3TXyHDCGq9EJzeQc32GtMwbD3mN7GBF77SSQAJZTgcfQv6t56FFHjjiN2SJir31",
  "key5": "2BMqxvHtV5Wg7hAfjNnzaM9uuwcYgFobC1boS7x3aNaKwV3Rn1FAdrP8GAx7qKiQKmu83a2kXD9xof7EEKiQZmEt",
  "key6": "fdp3yQyHQp4ozoegPtn1RggaHVpQD3V9WNwXffmQc3UtMLbT8nPrK55tRD419xQEGGGR5gbChPriGydh9YZ3pyk",
  "key7": "3hPtUAkGMy8wffZG4xUwrMmfi1xY1mgptchL73bqMWzhXysBDALF9oFjtwhwxEMbXLdwNw6n6927TThiAy395iix",
  "key8": "5YxtLFvYjsDEYDuZqADmbxP2FLS3LnKLe8c2ZzNUGHcMVLL4B4tAZkfCmPUqXB7VMFeZnpBWdJADom9nznK7QByQ",
  "key9": "4cUgJHRbNK99R6E7xKRCUNudRcACxx1H49FDRAL9PpPjhmwxxiAvPDj7ZXGAVuDfXtmo6GhwXvF4nuzjnuNz3Xad",
  "key10": "CjjMYAMTVWVDDmrcmsUVye9yCQvyGh73Fcnt77ieba3UCFwZi38PycPX4HJxzPSbLT4Ror2Cbgytc41upYGM2ch",
  "key11": "3uQ7tQjnAoTZmdvLgdYGHbU1exwy5bK1nHe1CZRdKiz7EHwkcjAmDBBpGq11yFirEpxfSgVVtkUH3hfw8T8h1h3M",
  "key12": "3aufdwRN8byHtMdoLah1R7c1eqG1rT2tjRi5YFEhK1NXnQzuC2BUcMU3GLFddJTqXCLX6kENne5zF1ZybcQ2USpf",
  "key13": "gQm9ykHAKR8gqQdNwvagBTNyhAT9cAfg4jv2NMCAkfZXg19YSTm78r22Sip5mbQEUo1i8YkhxTuM1D5X6QyrLfR",
  "key14": "5cR1hkm2Xpbqmn1R4jLrSmkLo8gvr36JdQb5zBYruc4EqSuQreLr28nY2MXwzAMTLkr9CxYK1qCpi8pouqqYcB4s",
  "key15": "3aVEUZ1wafopCe5SnCa7w6PsDzWvKSVjCXPinHHJ71ANeL9v876vzjpcKB8QwE5FLjSEpoazytkwC74xKeVLfZMp",
  "key16": "ygB8YfeZdFS7hCwu73hpZQQ4UyTKBY8vW2iRqdW8Mft7F5r1bQNWmqtNHqGWVu9Nwx72vWCYGhnysUw7iF8v2RD",
  "key17": "5oEbv5FQxEoTAytiyou7wiMrppe3J7j5oHBzzrieuQFNWqpYL9N6qmWnYeorJKysEnf4nkY6BdLwyrEUL5WZ9Rdf",
  "key18": "3xzEr6y7JY52kHsEg1WYDENxSbS9LmQzzkKrXMRReGL5JLaUqngSBDAHMEQzvYKg9RPZmwziNruC9pqPySQeiqF3",
  "key19": "5gbyWDpDrzpSkDNRKLsHmAKB3WKNKv35QgdFLD4MfVquNgdT4Lp4mPowKYDD41tha4kDjLsPrJdwBorzudrr5sub",
  "key20": "Li6QiFgzEFxcVTs4UZBGCCH1Erc3K28vFTENqETVEcbu71Ah4Zm8Ww5tRrZ6y9o572s18mcs2s7VH9qk3zjsGu9",
  "key21": "2dSPkpmTVBvryf6vPyW14yU5gEW14A7tfLs2MdsAY56RyrNBvjk8b2A91yaaxmtqJ9ijAnWjgsLZutiADvbRmEwB",
  "key22": "4xxJTnUUgDJZGy8MB8ezdWqmW8F9GHBS353PekbYbh8aCoxZwsrge5YHFKCQPAkGQX5Y9XLvF19b3UsxFNbQaGM2",
  "key23": "3hMTjfSnaNz5DdsKKBXk96FrDUabNYv3HeyRcD5PcyVA3q2R5frmZ1QLA6Wvqmpjk5mvTFjsp44hk26worrYnWAT",
  "key24": "57ktQTsoFKuAYFABFk21YH1BAW9BRDBERrdCaDqrmyXC9GZWrgZ1BX7gPC2PoY13pok7M7zDU5hr9uGiyK5NhukF",
  "key25": "6nXaJ6icM3HUvwTmRzTKUGdbrrT9kYT1BGUoyV9LtXgp2L6bfw4yZSLeQU3kixrVRFxKnawJ3KuWdneEmngYcVy",
  "key26": "327mcaDucjowQdiGZ3RGdoHnXhr5ZygXSeTNgDUSYugvSp3bXjbQ1qz6jBK2J7FFwHaGdhambCHFNvTct3FmGaqP",
  "key27": "4qmW4wTDqNFiFd9owjkXdW2KquRViprAG1VM9TLXcnaH68ACeiKhHKkdcBrTvzf9SK81eZyFQTNdwZMsQgsFBgoJ",
  "key28": "576Uuw5Ms9W8GDpcmbWoEVGr2TJ7Uw81HY8qQqjM3NdactzoiJtDADJh6AsGFpjA93g3qTmjkzsqBafhAbkSQBHg",
  "key29": "4EQf2DKmx1MdQkEVZb7NALfhJz33zPsDcMVqszbKaAoy6R76a7Eu6LMgvGC2h6oW55Kbd6AjRXXSgJeCgzfWZQhP",
  "key30": "3xQBRTinDKJird68ymCqqhVjnjH6VDuHsaCywPREVaigMC9We5ZM6REmb8XsnzTc6HtQM5xcp5oWATvMkPCKoBTC",
  "key31": "WpKD7DWPApQd363EV3dJKVnKUpbGbvfuHvFbA5GJUq2NpdNNkM67PNnsye1ibpirNFYM14AMRCcHspSjfGZUpus",
  "key32": "2iaQ15YDXrXpGP1LCTv6Rzrrnhu1CfADELS8CPsVgqb5zKgh9tQPHrr1sJCjJzNr7Vi5wE6VpiA9YsKNoQE7fEHf",
  "key33": "dA6Y32zrsKT1At2BDn6cSJG4JksJkMjh2A4fJGwyC5T1inGw6tqFbPUcnaRXWAfwvEHjmWSrzhjc1Dzjd2kTj8m",
  "key34": "22W2bhZoCcVWC2sbd4qXFQsxbnG8EXYHgLL73Hwnvt6Z6mSbYdqYzUBA53PYiNj7WugZYE6ZbRDGi7Fo11Am3hea",
  "key35": "2tpvzrbQ2S37FpUWQmPV9PKERroMsPrRbaz63rQv59nTZhSCfGJ9hZGppTFpEf7ZyBhpySTX3EYTasLR4H6RsSCe",
  "key36": "3G6fSQn5NNMExyXjHiptEyrcBcMgfnmrGTvDgtE9CbZV6fp8Hy7jHjwCnhjwWYKoDKcUn2Ff6u3naZRHMPKsaiYT",
  "key37": "3TwQX63CqoKEXB8R724f3qArFa9VVsnchpqKeVsEwMzzVAQgs7BxE7KBGpxbA7RazN7mfmuZi9KPwyqxt7HaLoAX",
  "key38": "2BbhZFwf3H5XuKnTu16fTwxCy7tHfGPvFfAv9wFDjpTBcza84UMnDrp3k1uWJYryLbT6nBLopWJn9RKahQxxHrP3",
  "key39": "5FsTqXpUbPZ1WniKDtrrHSdDyhULQE6eV9bTG4xvtbdacwST4gjGVGcWgzXAUkYfSREi3BxVitmjtdABDVoVMdSw",
  "key40": "35opH7b1tz4K75YKG4NR4xvEMWEKgT2ExFMHE9VdJC1EvKrxLKpupMXsWbNnSCC6qPMgghaLSqt5R1tAMu13LTZJ",
  "key41": "2id6quE953wATck8LdM3A8d3QfozasrEUPWupEkRsn2ZKdwaXxYcSzKSH2kECcrno5NrmqP96rCZBW1aecunG8AH",
  "key42": "5P866nhoKxchmoUHyy9QQw3Upr9PAY4XeafkvGSq7gG6NEXhDHcunjoXMuNLW5J7c81PLR42RFZyCwhfbWJik7fL",
  "key43": "2AoB1aRZTunDHtuLdnSJDK2o1jEuf6bmddLxKP4hC2HD6ymQLsbqthc5bHpe9kq9AUumZRwVZaDSfH47Cy1Kg5ri"
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

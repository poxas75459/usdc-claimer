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
    "31ZN5t3LntJaMo5fxHoWM7sMSjQr1caMrwgUTjkEKNqPp4jhLbvzozfUPh6pvZpFZK14vzDor5mSwHJrwns7rdFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bYHvfrFxvT2ke4Nh5CsN1t1iQcJdBDw9f7GpdsgzdcWFqpd6LWrhCk9hEkCaBEvXbVqCAsNKH5wyY8VjyYnobhB",
  "key1": "3XzJRKsbBMnjHdoPp6RrLtbug6QY9B6q2CtYQ6oWGpvLwdER4ZLJUgB62XCGVEpvK35v1xK3SCYakYRmhdaZ9eNo",
  "key2": "58FemD5Lq6ZUA7sC8ASuvSvvKiZ1G4RiwfKN67JsCvM7VtFdYVahe5oHJuhJeGA27DMrk8tJFwd5Gdsrqh7TotUT",
  "key3": "21nBd4BsYDQWzhhQdWtLtcA26JC7DR8JoAQfBQUptc7rShkCYKEdtkqPVW1exgNwawvCKCkMTGnoUpubpPpuDguK",
  "key4": "Nrrpf4hWQEdQNJWdUzXtuX5oa6bt76XZcajue462cgw2QiESecDUarke2Ww5mPEqJyT3a49My1fC8yo9xqX4d72",
  "key5": "5ndoUNuV9zu1ZwjQuj9FUfreWySCAK7kdBNNtSaKsvL6mPdY65ALH2ysG3kEoERH6ocygHmUFYys85PmhvmJUYCz",
  "key6": "2YQajWU38RzQiXkkNSY85KAoMrjRUqzHffSf7gaos8XGqSKmuxCYJr3T3Kpq5jnCxR9q6fxUZiwMhufHdYYTgtDg",
  "key7": "cY9fL1X5EzdVbsMvAUJy9rHTeASoE54dvomn6KzexWeGBE9DnA4HKsK6oATcLwXRAXytgXGUBYtqeFT1tBbcPtk",
  "key8": "4gXhfo9zyZQohFBpEPK4Ga5Jg6voExa7Cc2CncwTSTbGTSYhioSVxcCXZeYxLU4Qm86QRjffuowRoobha5xbhWJf",
  "key9": "E612fsSVtFfD4UdigqHyQgBq2pVthwjRmtfXm1BaRXp5oEgU16W38NZeYZyKRKxoGFduhkXCgBhiJqehLXDDNsT",
  "key10": "5Fv1ZLLQZAMY3FKDXsAR9oFWBfySnEVqUAs6Fk2cVGnHKGL1RJRzzS4Dm6S354ryp6Cgozn6t9ncjvqqUPHnFTRg",
  "key11": "643cfXef9Tat5T37r3qPqNLJNwuSttYoj4etqqiCw5QG7hy7HUSwiAqeQJTi3Vrq69vCXzA45PEoPEvyaJ4KHSKu",
  "key12": "3s1YLJ5ubu9Q3DzTzoKCpFTmVUVKNsQ7DWypQNHdS6TMouGAAEDAVHbcYUZPEkTGPuJtxF3XuJFPZihvoK5PPpU5",
  "key13": "5aZFVS5otAx7cbJYB58897etcAYLH52Qo8SeRqognZ4Jh3SVxbtUJkPDgeG3izaN3WY9dwmMSA4cNrKGEJmQewUk",
  "key14": "3WfsNT5jRSEL3ZWp7y3wvvTnsBFbs3zGVdEVLyvmkkT6FfeTEqHaNzPXJnAidDZFdkv3Ed4Ji75jrTCsgbERjLec",
  "key15": "2RpcAYG6NrDmjg1aey8T1EsEGbVA3f1mErJ2B4L12A2SHq6faUAx3JgBidDcscZKJXfnBq1S4mm237anSKDfidvE",
  "key16": "3WmitkuCbFsmBiV8KrfHRaWJ9pGVqvEwYsYufwm35NsEf8ewNS2ZgKwLtqrRiZADhjRBBZzkVJ42NyPvQtZSgiM3",
  "key17": "4MT3Mdf8qaogANpeJxyZsW2cu6CYVL6ojA1ZGj2hAkvk7PLrsnJbX3zdX3BP8bjb8mnsPJPunSB53A3dtbnXqHSL",
  "key18": "3vWhT8RQzbEDGtU3vNAUh5kvzNhcMt6RnWA3Sg3jGKB6TixSa2kAjiccDU6djv8Mj3up7sNoq5BrEVF52GMjp7aX",
  "key19": "sjBmTA3pY8LMU9H26R6kppWnPNT83UPaMEKwQ6FT7Qq85wj9NUihSosuVPr9oVe32A6QWdUB92g444kKmop3z5Z",
  "key20": "5bMKf7rcJEzwhgesa32CQpYPccMyqH9MFbX1xZVCNtbm7ALaemdwM56AP6uT7rP6w2F9xn1vTCP6m3yEKTnheaZW",
  "key21": "4R8i9kJqo1n5yyGzLTUkPwN8sh5Cs7GgQDntkHSow2ayFEvLRDU5xr7L2ubQJYNJXKxh3jyuq5QhPfq4E4XhAdhZ",
  "key22": "4PZQ475vshBaMqv3mr2q4PjWSqVbUKrxn6iGhmq9nCUd82u7s9WXDLve3PQPHaNM7Xz7z1KBR2fgXoiMSZzVoQDL",
  "key23": "3ekMBHR5fC5KxvRXSQGYNsei4fXN8R5PNgV7fzxefcWVBaCFXqeaFtu46DKAwNiG446PTmqcaGZzcPTQ6F5oPvQ3",
  "key24": "4XcL2izJBfHYJZVenRkJsaVN6QK8z6vKFfvk7ecxoBEfEEiJSA42kHENMEdkkqCnNdAkszmjDXMS91Bp2Ks6GMBR",
  "key25": "66qYaZ2DcXmzzTh3keVe9TYB4VG7eWSZqgaCih9B1MgzzkBBokrDPNiWxFP8EJFTdPW9quMSunPmXhzwBnHKMm4K",
  "key26": "2z7ftHF5gvhPzYunesvbkJ5HffmUU9jfhNXmKRBPfQ99L9QLvMVJissAuzcWjWvG9vmuo7FkggEFRpweAn4cfWHn",
  "key27": "3RxJfHwSvko6U3omfCin5gpfPM45xMt7ExBwNHKtxEwHQPyeCLYJii37nsSPK5vNXGQCRQq3oUzhPquytExrH4e9",
  "key28": "3i9z7KKNeKtBaXtd1A3TivFkGmD1TPrHmajBtzAzaCrpoB1PdZ7yeoKuAsUJ2imfRsFydQSj5Buw2aDMMsdUJp1Y",
  "key29": "kerdfQGS1HJUYeEETUbagGzzKdyBoQUhbf25abJLhqr6r5Kr7CXezmK9MG97bWmpJvjCRf5TSrrDFifCXSuTx9o",
  "key30": "4PVMJLH9dFNMzw3HW4FdUkkvQ2bz3LCn3h6LcxXLpDCMFh2fa1EqnSsnk7S1MuvXJbVtaGm3BxQMZsS3F16L7hqC",
  "key31": "2FRfArya3q98PGrcJhQhtrKPodebZ8moLxQGeJUqffUjRPk5he9pA1hJ6VZkuS9h5mkUGfLe86sXcDmhfDdYuUDy",
  "key32": "4gn7DnCtrhSnvES2aCZm9RNc3xpjXmZbaYrHyJ4aB5wu3ssvfUmKe95DNS3ycWehFuyWug9oZyxyp7gPbUMj3DoN",
  "key33": "5G74N3MH7Htm4WzW3HwsRiXenNaMs9bhr6TGVUS5hnUJtTzfJhvcV3ZQrMzDKiYxgX9T5qz2Fwsxq1ecp5CtJBTE",
  "key34": "Ck88ufEeiYdPmcmUbTgPks8a5a8xPHWKJTLP2CsBwcRJXq9RSw22mYBaevKjzFcDpE4a39y9N7tW5CPoG1ypo8A",
  "key35": "3zpL3ZWGG5WFGX6N8WSZVVh4wKU4wdRK2ycXqvKxaiApqRoTNWbLcdpqNudhMDiE898C9sUpe9HzuuFAd6AaQwGD",
  "key36": "5eKKEQsAj53Wt5HKmi93eko5UiwGxFK8LhARWfNGETG71PDpFxgmMARPYTDpSirTyE9FmYMCEgvAPnCSx8ZhVTUx",
  "key37": "5Fti1hQLwskbdsAP4aenQNaQGaodL6mX9qQRSor2ZF2gBatWysQ98nZA51eLfQjPwep4j3p1Ti2sKe7PpYGSstsH",
  "key38": "27qJJjQ1NHDMLnGsNcu2aKvkxujjaVkGQqrjuz9m133haFD3SFxUczMd4wf5cpHKNq9Uz78fbT3bGrMdMpshmMJ6",
  "key39": "432anTP8g7MsYWUqu8ma5eQYe9pDUMBLy7hZZbjcSNZtFWYeVNLdYiymoa8csgfKk434ixPZBHwufahqTzcM5tjx",
  "key40": "PaExRTGYJ7P81V7y58qbtnf1mC9RfU34KBfT9UZ7dEf4Vvxcjq31jZcC5q73XH7koxbJbbbMmWewvT6d8oSdEoQ",
  "key41": "2imFiLiBpfYeVLH8usmcb3BVdLdx54AZQgdADjFCZgRwKMk28PTcFvp4kDFMrmHPMAZZSYTf56SoySFH19iDSnsN",
  "key42": "wonAE6yGwo3dTEqtbR5N6TREQzLyFR2otLSya6hk5NHhib7ZJ1wQJQxTc21TzL1eUPZJtRvx6hESM4xa2ciiRbv",
  "key43": "5Yfq9ijkwshQzc9dfPCU7zNSDif9gMaGAVD8svkXTgSCAstcZaRo3S9NoWzcpTCzj4hA5yQv1QxrZ7itbC7LDiJx",
  "key44": "3BZUadUFzzQoWHhWnutmpCcmeXzsWRpw76gdhMsSDLgn1m8PLSDsdXgFHc12tM5r388QBYxJRa3RmhQ8kmkCae7K",
  "key45": "2AQ33fKSMt6fQJj9hfWGRuCNRu1iNFEK5ziAG1gLVERX4b79J6FmJ7QoXP33pLkKixtybQZBMgLfTUnWgB5USYhV",
  "key46": "4CytvhHSZxWqz5bEj5S23aZrKyhyQSafciGB4NeDuXDWCrcJXHh93vPuLDhAHVASdxLMgjRK9UsAWvsrtTYCvpGD"
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

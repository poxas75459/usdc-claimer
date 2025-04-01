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
    "3dcNPs6NswzWkHeN13azvStp5be6g1fsS8V1boj6g3hciUNXQLty8cQALddR7B5erBkeMap78BBnVPFUmcTVy9ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32q5hwFPLpyappWX7xWbmxExMDHumxTZbe1DwTqksV1T9BTQUwKBJo8ZHXBq8ajbRkV2G5GpMGHroGwEQn5puW6u",
  "key1": "ZDFXG3XcMBxDquSmPV2p1iy4uuf6oQjsQZEkYPaPN97sNxkuPiaRBSSkAXQFJUjy2TQvEDNPrmLxxgYp5nBwR84",
  "key2": "4SsScRBhjWHX8Vcmybfsvo7RSVwtKEGrfM8uv8syauEH4AztkcicbVjhC3GzFCNPnqNr3rZCWF3io9f1t1zgTaZg",
  "key3": "3wsuVTTjW4ZWux7xdr4PedFddKsmCZ8kPrQfRafREmP7J273nn1wgnGatofRejMnpPCgGbBuQvzUYA3HgSMxSVHw",
  "key4": "46scxn5UyTk6CaTBXhrZZKNbyUERp6SYMdiJ9YKy1ySvmqKg7iZWMY3jFgRUDQAgMADV7gYsev9h3wMGGirrtmpD",
  "key5": "45N5pTiEgDaxQbqPu55dGACwf6w1jrTXZT2TJuwjR6RMDhS8tJiTnfXi6KMfnrpNJFuY18f6ikfFxPrPPdgz5sfY",
  "key6": "2FvqfAMww1ddVjCstaeMMf7ergb78LyaogpYTCqw1Qu64bFBf1wpj7hECXQfwj97AHygD2AatnC7T2cYCnXFzHv1",
  "key7": "3q1bnAZCCnfkVGRAvKM7GXYy5iJdTFyRnHDNMaf316h2sKTA749hrQju8SrQxhEWGDPwYkEVGvF3TuCedguYnUyw",
  "key8": "5mKr5Yp7WdpE7FpTCL3H6NAeq7uyDvMUZSe2iyYCtBNg9D9naAbSns2NABwrdhbaroq1gN4E7Frma8jMgSjQ4kvB",
  "key9": "2cesvsTWP47rATsDzmHt9SyMUETPGieJ6nrXRQF6GfXUjwvnLoWtkfmsTHfNoL6eehipdsiADWZjDUWPrCVMRvzM",
  "key10": "2DtKsbfnUjEJpNG3HnQLH4DazHCrwodp87Rz2jAu9nUqHr3dtTUNKvQXFnYa4Y6MnvLa7A4aeabddXFRfQvECqzX",
  "key11": "2C4wT9g6yvN3GwGFuV6CbH9y5oX2Mf8CpeJVokYw2aqA3tWsmgk7WSYSn2yyjKkNDA4RwZARtwmcLU9YyfVmAtsK",
  "key12": "29Jd9j3JgLKCm3sTM8bazb7boS844rcgGKrZkfk36zqEY3GGcy5Bk3ygfyE9xhGY4B89STGEDivKo6XQSD8Pa881",
  "key13": "2QHnnTkNZf1ah7M3iVhFdSNaiauuCFgxvjZqUsaCD9PUP6rYcq5hvFHWeyMnPCouz68MEJzZKaVa6E2pKudDrvJw",
  "key14": "2AgDRgPgByq9F3HwGDmkDXnyfAbAAUE9NNB5f2kyzEfDsGcXBApwJ7vwkfxuMGscRjWZQA7DzL7LgFRnXUVE3Scu",
  "key15": "3XqVZkib2ZnfLe58pCniuvTqbzPTEGMqdf3yQBw6cTVayncBkoYQJx5RaBPb1vucV31iYtBSXmw2UAxmVZdKstMg",
  "key16": "zLN1vtVfbN1Rz4RZXmZ4YUFNcVBZY6smG24R6vYzr8MVPm6zz3x2iN2SeqXveLMDTXhNwXG6sMvMoDVQGqoAAtw",
  "key17": "sn6DH3TiqiLAfvfCm9tosdtHhx8wU24WgLh3cvw3fvRWpv5gX8bq7NQyYYrT2kuVkZexB6T9rZNwQXh1Yj1QbkJ",
  "key18": "3PhuqHyjcwpooe3UrdzrGWS2qJcVhnTrpas1BHWrU7ag4qv976DckVmzzRYpSKMPKFQcohe2zryAGGpLTUgUESco",
  "key19": "5soJmTm12U2hGAimy9SsqGeZzd5LdzQ2HSgJoK1N72BRgw9jRw9jzSNVCdaxyhVYz7CFnCUWjDuKYaay3ysvtYKw",
  "key20": "5oQVjf3ySBD76DbdFJdmCrJ1oLpW3RNGKe2Pt4tUnvXyzLd6chgD34dSZdjXES8qEZgwc3xMvbqxhNszkXz8mqe9",
  "key21": "2YfQTzywAyFHHQdu82jHzTB8MK4SV6sEG2wLLwycuwUfde6meHabWmMAKTsncGL3LA6VsVCJDpQJWMc9TLZK3ruq",
  "key22": "3zEcCpVzj2fXyRSjXasKR6JZwA6MsGzp2YdUinz8WRbNgeu3FaMYT5bnRLFLUFan4DjcVqcsDavFXHoAGXwECbVa",
  "key23": "2FUUfPtg2nToQ5BoGnVWFChY7GbAwwMqU78yEdhCU9W9bsNYd2dNsMj1dKgqsBiVRb5obZ8rC5Mjdd9Uq4awssVg",
  "key24": "4h2PLyL45VbiNpr3eJdm8rCD4hHfimhaM2Kcu8gpfBD2fNY37sTeX8vkNDkX1ZaC8pmK8kBQXgfhR4tjFLbkjEjL",
  "key25": "3r4dWMo6C6Yo5TJ3nMjJ1p3LtGv5TYt7rVCpmoLXZKMbd1gz4QaLeJj7d9R3QNStoGMBeReGnwnzyqr2fpf2uSoY",
  "key26": "5xpfjoK513v2RS1C9smHVp9Y7Ca7GfHH6ar4mKaLgqDKpnidAmMe7NEFZgTNCjJpSxf47aeuYEX74e2EgBm223pF",
  "key27": "5XTtftb4F8YduLqvjwttEqA4bqdPa25QSCafWcXcoLAayTuXHPe1vgT6M2gqCPFKb5dE7bAujYVkmzMmGAm4frGN",
  "key28": "29CCda5wB5BfSs36zqoS5yVBQrgC2n1swMBGfkW3U2fs67o7pD8maAJARCVXE2pWEgSzaTbLrtqRWR8wNb9bqYEN",
  "key29": "1bCdn7HhE4meFtR5VbGSNJxZr6fwC7g5t8WkMKuhVbmmyDfHRwgDPhwpiKmweCa45gWp9AbxEHGq8jGPGt5mdPn",
  "key30": "3sMEheLAwsTMnwj2xzDE4koXGsgyf6WxNH5KSpPo4UN2VCyYTPHCHPuggpgEB4hRe14unZ9He1PbRPrK39uPpRbK",
  "key31": "2mVaXM4qgTYqYc5YQeRb94b9t2eqM3PcP18d8hnnjPz5tQiXzVPMj5rgzC5m4kWW4MFAapqy4dqp9BJ111PVoNA3",
  "key32": "2yXV15XBqrAw6tLHzZuJdyMy59cD9Kqik4YSGXXLU9wJBGTA214LiiSFAuPobB5RsWveaS3sT3ozWr93tyFntpsT",
  "key33": "XQhNws7cYLJXCuN5cx8qcLed6KLkwHgU9pwpRPwKDRKfjCqH4jxBFWzW7pLduthREySPDWyeYQ3Hvbth7JbXiBB",
  "key34": "2t2mNqmQP5PEf7vjW8KDJXsmm8veSMx65ggiqejyoFFr2FmXSaaLqTJZ6SCjx62RDyDawvUvT98RKYpQSNQmLZGp",
  "key35": "2YuawxK5F2mngCWngaaPMv7AcXMa2RynE3Jt7jMy1Jc4ZnevduqwVU1kPsoSiyK9hHHZvosFXBmX7R2xMqqDWccs",
  "key36": "2SheWmqHnR3xYbSTWCQHwBG8RHEKLLM4KfiGctRqJDYcwrt4eZtXHTjRhYzm85DfbbFAsvMy6f5RKpj1FE7yfrgw",
  "key37": "2f4CR9abFxPZ59xPsYoDR8MD8BAmQBxNadmqtAG4k2AvxhrNfV5vnYu3cecWnMUt7TiCLiqZfTbTGC7dvKHysVDN",
  "key38": "5HjgHuSaYvAdRTzjnmaZpRtcN6vAYWu7WmmznvvEwRHbHgVAngy1zUdhxgZH8WtPpa72aqGQMaWnvdbWnEQyvSke",
  "key39": "58ae9wxJ4Cimrsv7zpDx6K46wTAJPmPQU9kfcqt7qtdwtwGP3LUf15qwEoerQRMxPVanArksfyN4nRtzkgkvk5Le",
  "key40": "2jLUQvEAyADHEmjedscyZU9xM9dA3saocsf1tTstJ9iLD9LrsJaLyVc3gzyNTKjKca13qEFaQkdHzCLgTtyH7RQ",
  "key41": "4SPytYbDpxJ6Ztib44uf6e2fstPbZmtiWx7UGSW8N9pWrLTk4p8TrZXeJRKkCwKZURaTvQ3D4k1LQHTXbFTgfUFt",
  "key42": "5mxZH6JisSzDgqXQkVMiSaTKahJattzUyop3sgdABezHH9edfzXMnZJkkigPudb5RDRD9YYvk9srUU18SLVznz6s"
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

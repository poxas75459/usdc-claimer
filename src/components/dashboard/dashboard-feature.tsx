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
    "2G5mo1XunY1FAV2wYjYUsptcjMnYYQB9eYynWL9BhBbv4e2Rx8z2iXY76eiW1nQ9teDzYv69UfPVMw59jdJccjpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbpb93r9D3AgTHBSQUmXqk1RoLQYFD4aZ3nPk23DZoqirFfgbFAZxQuVVpidDjmRoGxfd5y8be5skMapnaDvy2W",
  "key1": "5xU3yvMMshqGCbQJG4B9j1nB8ULMYH97gnADamMF1MA2sK9t39sWgZJmay1vyFBXdmkK3buRjtsmefFKtNa62pLJ",
  "key2": "1iQRtJ4PCixhTAYi4ePorSN3WaM8EjMtc2GWDsr31RAK7PHSrt8UScG1st5PV8u8s7Fnk7EA5LtGeCajG9z9GMy",
  "key3": "2DdQm6EwxJmdM1G7u2gCQ3KF3zW8dsCeacA7ZD8QsK9FJivLCZ2udWC9ZtfBfSsdbbgnUjuJv1BvznrPJsiejFVe",
  "key4": "2RMfCsaoqKDZhEPgAQefHmWbna2RbrQLseBQjHbkpQm5SEwfVr3UA5zEMZnq5QqJjCbmNxD7rvFABTXxBsbvXkNq",
  "key5": "9KGu6cSSpuTuFeierwsyjK5MEpUVHwpz6DbsuH8ydztmxepaoL3K2FC3eRwe2ynu2bBxEvfCnyUKVfvksdgKmoq",
  "key6": "3LHAPg2ZAs6i4R1rcTZaawhaV4bCehHD5z71Znuzb2UW5cL4VJL895fZFq89dWcLvUaBtZ1SZoEhDbdzXGfccLXx",
  "key7": "2YKKKWkQZnpqzHbmZa1ghvK9FqxJzgsDpcq49XV4pPbWuNHm2qCJQRjjG8zrxe7whAX2LNEq6H3bGvXJX6mw3tnH",
  "key8": "BcpmUCSz1uMV35H1kWPVrtwQ5hTXeWbe5SKASyuRjy6w33BP1WL6mZ3Up6Q3htGWCiGb98tV381RBxfh3v4zmGi",
  "key9": "scfafkN8o4TmEdenq3fBA7odYt6SSsguD4ryDf7GUJT3TqYJT6ywowLe6jLkQggbwoQzfEkN3MV5D693ipToA9A",
  "key10": "2FoWLTN8nqMJtg9UGeFCt3SYreTjXNubJWx62FGhaX6AjP9Vt24JXR5uHkZ5KUXCm1xGkizX7LPqmcdi5Zrx6qP9",
  "key11": "b1TNyPk7MVa4y2HoN4sZ7f1GZX2fAnQbCqYRbzECjvKB29E6fkirEJLAreAtHaPxaTPFi6QLhEppCH25U6G1GeA",
  "key12": "44ecCfxzZmswuxrJ8mF98MJY9eoZu5b21rT84oC8nbra5Vb3EiZsffr3rbDwEc16qxDVQZyti5yE6rTs4v2cPDYk",
  "key13": "2QAxgWfHotG4yVtyHaYFBvqVQUofXtpPkD4oGaBtb1HHMrLhrRK7KGEhaimmLeCWDHe6b1kLQRK8X3SBWQppFh7E",
  "key14": "2wMzBqHFehjgGtG13goSieFwntpUUftkfA8M7zRomPeG258Mnco91y6Cgxjf5B43ehmceHjRPN1v7HARLK9sxxSZ",
  "key15": "5xtxP1LTErKxiPoUr6QbpU11q7SXnaHbcji4eN8pYL6WUgEtHsXPyZbaf5yUFxeDCUk9zi3e6qi7P7EVzwKrDGMc",
  "key16": "2BgirkgpgHMwZSRCspv9tgADR86qFyv8VMi9ybxpWsicfYCv9ebxDmbubrMiZMAcVYzA2YvfGZv8yoXpQPkEEKqy",
  "key17": "UCebT9nW6YEHnfbN6zY1fGp1Z1hQoAmCsLcqchRdjVcE4RRHpuabkiSFStNr6AeTmhU1qcWexqJX3HcQTC8eskW",
  "key18": "34wCPWQ5mDiJwraudBxhaXvXcqAwqwaHGoovSTwTocokvjAq6UMgvCVpcusrxPXXY6LsLeqUyMRwYD7cAAeXSAfH",
  "key19": "44GHH4S9PVCaArTCRKkn8RpPDDQVZb2sr7Bq7VT9PFya9VksK98KfGJUabDCgxt6V5gzAZnuWNxi92dcTB6rit9t",
  "key20": "asCx1RPwyVpZ9XP1QGu66KYtqPbRxxGuxYUtDAQgeMYG17AMgUgJDxiEhD265ax94EpjWp4myFZeW9ParMwtGuW",
  "key21": "4ENjSN8AcqmbQM49yFdCwq6Zm3QUZQeJHZe8Ri7PVeQ9sVNeQK1MpvcrokRzMK2gR3ZGTh2qxrNtSVFAudFyen5a",
  "key22": "49rLM7cTswAJGSAxUkB5gZCtsHDTNVaGEe51zRz2pLayWB2yhicdhaQZ66TMrfyJzg6sTn2mN3psxJMdmZSCPi5h",
  "key23": "4s3wNBxUJVg2se68UdbVqSQVM1X1AunSwswHJgEj7FSzzEFENcxSxhFognguk8mKN3185vNxU8hd9tLff31op5hP",
  "key24": "4Tx75krJZefpcuTUEPExxfeqPE1FDpVyebSzkwRgYdDFddWtFYXKz8dSX1WYRAq5tt9Lxni7rTaX33AGhjLopfTS",
  "key25": "47xwtrzyQjJL3MpSACZ1meNJVy6F2TZVkF65PZSmcrgQ6pBJLNxp41GXSgeRPKz9wq4gJg9fusskVEX3rWVqkLHm",
  "key26": "4Lgr7y9nrg6KbVjUt9BJNUcVoCUBy7tyBm8aVDjqiw24jACPdqgbFYdkuwaMR36Dg7pH4dnrSUJexZii3iZxn3iW",
  "key27": "3E6NNqkUa3GLq4UrGiGBeL7kU978iz3LTFonCkeQZZRvoKCQW9odfnWch2sYzFRMPrt948zHGcydzQAR4Gx4W7Zw",
  "key28": "5pj4VZUHWb5s6WfM9vn8XMzfLjUkYLGLR54hR9UcrJJNfdvoFezhRsjZP9saGRwV4UvCzbLTDi6CKuhSQmdAs3Kk",
  "key29": "2D3tuXnV96CgDzQiwqsdzZyziH9iZeXQCMjk7p9s1kgiqMHVJ4uvbzsTv7QhntYPAfu6DCqwkQYJi8afmaRaTy7s",
  "key30": "3gNEmFLAt7p17XwHkkT7kFkxToH8ZNyeXHtAJet2ePW7jzE2sH8YPJ3fGrfqh9meRJydu4Zviiw2rP5S1NNC4jRj",
  "key31": "5JSkuiKwE7QvMAC8kBKevfHNxDDiQYLvwNtizWJBfRsNwzAkcFnpJC2MH6Y5UCsViVK5nqD4LTZ7nLiyBYLyKYkY",
  "key32": "5s7WJb3mZtzdrsvw4o7LnMBguQLb6ybhjQe8djj2tD4U1agEKXGuszVjhQ432VyckixbNf8Wy3hjBhHvsvEgq3Hj",
  "key33": "34RJCX2KisBgQQhWfSVw3tAQ6c2LVfgN7BvgRasACE7jrwiCzf1GpoX9jgr5ez2kxHKfvtdJDoDa7vw8hPwPtBit",
  "key34": "2kF8LiDPsAGDj33qqwZH1jbnVbmxuF9KEnpMKraeUC3wCbeyVoc9rMXENEjofUuBfr8jQgzfnjUsDe4gryzP6GBh",
  "key35": "4CimVvjwZDJuXy4fgvUkNTZ9JBL2dmcXZpiyXRkT6Kz54f3BiBdTw1SE9kEouWGVVCVn2J1rAq58Jgo4hLR4YGeD",
  "key36": "4UpzfNJ5vQFUs4WhRQk2xz1qrGp4o7qF9T1YujbPycn4768Pes6PwkTdcMztEHRbjk9zKeKdABoQ6CdE1bzEuURD",
  "key37": "5Fwi1Z4pRhegUpTLG3gRRhiQeHVArEaNqeTP1y9VQL4tTm3uwA3JtsKgn232aYSTxuyPnpsA8XFz78mbYtf2HBaZ",
  "key38": "5KYRfYT1XF6QfDVvCnH28QBGH5S3PxQpLzZf1hhKDdyvVBJi7GZ5nQCEmjNLHi6qkHznYyDARiGu6Knpuk6pC5nq",
  "key39": "gjptLPwfiRWcwmt2sgz6xhXKJwJtDVLbBRQwG3Jde4uyycLHjHtFCxLCHT3eUAPqwy4umhJ3umqPTHZJBaHWxQj",
  "key40": "3gKLhaQPKCynfJ5CpYFVNKGiCx2XY1WVFcMJ8FdzfSEzCqjmBG8xjT3tfeo4jfuFoN9XRAZUpqQfCxzQS1hQFYQF",
  "key41": "5Mm2xJ7rnMtKoVdUHn2oSSYKjgsajN29aqVVmw39LdnyDP6ypko6hMRdjmNzREp9CDS8pvkUAfeawr6WivH3qaWn",
  "key42": "4ubXfyWHGjio3nq7aR8E1AAvD8H6XDa1FSH2Hak3WpkjcuyFyzufJgtACm2Gz8yvznp1WdFHG9o77WvRHy4wXzgp"
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

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
    "PEkSP8dSa66LLqtUUoKxK2N735PfvSqndXoCyqoWX4yBwCHCH66owSzZyzutRT9woDomY5U5PhmmTAmi4hvsKts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcC2FRRKmB3gWYVqMHMPbfnnvcQ2vyEPZFtYTT6UMss1zutvtPr1CvBK69fNmRRr6aFZkSseTMmnPmh2ay9u8SU",
  "key1": "482QF5z4fkbkPoJF6rpcfUxTQ3C3b1W7dLPjc7y2uucyH9SBNFb5ZvCeRofY2f1RsPbijacqiJzbKLQmxYybs5Dh",
  "key2": "57FkjDNzahD7XHXQyMHEWNJzH5aDonuLPT1fDGZN21qbzAiW5EhttMkqAgBVJByyT5qHnygvjcBsQWkG11Yrs1iS",
  "key3": "5A2wKNDYfRByG6eSTaHo2xB8fj2zrE8GzitR84SvpzZzoi6Mzv6AsPEoefhZ4dfcEW381th54a3xLeXSCBjSAHaD",
  "key4": "2nrbaFH3wnEAeKhx5b7TndaWao5Pw8t1DCoQu4HXTmrX3fBLpqzPzfzszqEx4nmciUFnrfxL82jLVrwm2JApiPAb",
  "key5": "sqs19ZyG7dygEyCNJchaKJruWAkDvBzSnPuRAka7TS9mfi8rzAZM8AFSX516yztL8TrHxb5VLb4PjFhDMUyWCgU",
  "key6": "4SWcqFPLY7LD5JbzmeMcjTGaijPwXjdB1VJV3FMsu45ixFi1qWQYSJbgMrj7yeppDunBJ48zRbtrRGnNysXMg6HP",
  "key7": "3zhuntTwXp8EBsfUSWFcR63qHyVCtkpChR7kMRjYTTHTkwZMQTvQ5JQn4pEzrzm4cE2mGD98SV4fzL76amdhkTFX",
  "key8": "4ZzuDzP1srg35PUBeziZTg4gYVYghPqTLMX3r7cxsqhntujy2ozSrxBkB3inH3pRXitHh7C7g2Tpt4VCgEzccg8y",
  "key9": "3hSb3RP27cgx2W1LVxyDV1AkBd1iSgC1ijfucgGAQsbEhd198naKgDahnBNHhTxQuuEqVMB521wsNU1oCK71CA8G",
  "key10": "43YBw4R3n8Qq7P693upXVeAfK1MZN24xpLVdNj6pdnH2MesVRdXcb1ToD43EQ4JMj3WFrGtGTNAvBg2KKpNPpqdF",
  "key11": "4eCNW4Jum6aUquenEF5VeTCDJw5hLS235mBqiKibx9eFGjJUikC7iBNVHqMMK6mjxcNxeD7tGetecUgNWqfyoKt9",
  "key12": "66EjLo27AfdPEZdBj7PTuXxn9J42mF1RwpoYvf9Zzn9jeA9b8thrHY6HMjrNCAJVtB7mn7uKyGkvbUidVdm3etW4",
  "key13": "3mvvHVnSh7JXzqn3Uk14LJtnLRGgX45UyEMc4jnuyrgPBiQA55miBx3hYo6vTiEqc5LpQ24gMJo4Fpb2mFU6a9Cn",
  "key14": "u5zYXk5FHnB23xwNe3fXKCtXmEJ6bhZFvZnZdRFxUaWfWvubzCdLC3VYd6udUrxC9BB82E54NDSgg8QvvsiL8gH",
  "key15": "3bxFUdEsxnHXFU67uutjgoZ9hDcgJDvsxqRYfV2HxjYgScmKsJwdVCTKtKS59Mta7HgWPbEBX1FZq9TjXWHDpM3G",
  "key16": "5BaR4LjP9NcCBN86mAqn6ux2q4p5sqgsNhR3XYzq8y8io8PyMg6FrvPuroE77jAHijpMVi6Er9Ae33C3rXnwLX5c",
  "key17": "4VnFNi99ckTBYJGUq2tLa4PDg8djVqeS6AL3nbiwoakitZqNiwrJtK7gnBPFpTVsVZ7ycL65y66wxy3eTV87qRMZ",
  "key18": "3mTSmx9jDgmSC727KB8huX7uJurhiYRMrpFt3hxhJFRR79j7EfVXLiu8kTzwuP7AHnjN2ScDsHGJSSuEFPASYH6y",
  "key19": "2n2kb523N3h7LuE3EdhwQVvrx8jF77MKD7wcTyZYyB98GfTqwuxntU4ZgR677ouT9ZLzMsTuCvjXNtP1p4DN5hwc",
  "key20": "3vyJLrwyzyey9TLoLPp4djYYdnvxV8P46kxCFcQaZpkDQAafpkxJ1ZwYthNfJVBU9vCE2FGyNnjSGJ52khuzD43y",
  "key21": "5y6cEyuyGTXiHCDfphXYwfR5TNPSZxGxoCC5KsZ9kySHtjRRyAkkJHtc1KvEK7VWJaqu3d4oY6ydWCBKr4TpYcXZ",
  "key22": "4ntcinrJ9uXoSMWhAoXJ4KWcYxFvLqNzaivEvsmdk1k2TdLYrv6SQuUYSw3wwtTN2e9XQQrPxgkrnyTy7FwSzhJA",
  "key23": "3WR2s3shPWRtxFCMXY7KwtXo2p1BuikkHypR3t9Cy9vJkzLHfDKdvXEkWdKSQYPyJeYJQc2KYShE5r4YDGuEvR1m",
  "key24": "5xGw1KCb7mWCgG9F1iEoV8fExxQHV4CizayjKGArRZRjD7jgScAqK8ZRHR1RfqdutmxwA8QfTp8rM9y3QxcTk3cb",
  "key25": "2T15kUCMSVK1A72toXHaYXGpw6csWshHQwVEJxNuxUvbumqMzNm8LbXykTJEKpB5483jnSKRt461yYD4CqE9jmW7",
  "key26": "5NcKgUP6NX6gNFM58ND1spUWv6gVmFy9NPmB1zJFjZSTD3VdQGWZZoJUoRkqmdW4uDXMKrTw4LfzgNg6dtTaR9jJ",
  "key27": "4vWs22tfAoKZVic8tTj8f3EDrnW8UY6veWUvrJC7Cgg4ek59DSAwsZCV8gjRX8HDq8eBfx8BnSdGprNjJDFY3HiW",
  "key28": "4g1uZYrn6yLhwZ8h4PoXsqEBHSWinWAwbSRL75Y1oPCUrDusKgA5z4N1T9RufoYyoyTzf2FQPwk9ekeWvPvCzz92",
  "key29": "2BhAp4qxBJyZdLY4iyhrCni6sSqD5eh77b7vWrco7SRibzQD6n8ypDqqHC34WhRcQ8QMeXzQJiV2nYWx1icE544j",
  "key30": "zWvedxc7r7gzsiepUCRpc6wY3F9RoeHDjgWij34pZ1VZapcrQBinw3K6QbxWKfiFgY9a5NojqCCswjDHpoMGDet",
  "key31": "4vPRrxBPH7pG9vdrxxnGRJJe7JWE668c7C4SnBdzmAUfRvqdfVZDevuSPWvJhndCYj1DowVMV24BTosULGjGJRmT",
  "key32": "H3rr5nssepV7qNSpFhupykfhgmz5tkYUZmuE4i8yScoXVhP8Q4oeyu5rQi2YXb6ovXghPoeCPtBjAYmFXArASzM",
  "key33": "4j8ArkqEa2ehmP8bW7pwHmQqh9cAXtGZGtjZMEfi1jQTFhYmLr1XNfdnu9cSKRHheFx4vA5CEykfedhouYh2vj3K",
  "key34": "34eKhJVd4SoG9ZMnWCEPafpY5MzoSA9d1LQzMncksNYXJKyDT3oZ1EbA18ir2yhXwZco5kap56QonmviLPAWaFFt",
  "key35": "5p9hKexLCzpgxsyH7di1qVMb93txccGh1WmdmkxJWssUxExrMXHUujbq38M4hU2Cj73B4pUEqUXjekbBAWwBTofV",
  "key36": "67KkEqKRxFjPFA4WHPJGibxrwRdZwZETQz8GCH12kby4Z82JfhiMj3TPZa996FySJewbBo45vGmeiBQ5PTGRAQ2H",
  "key37": "2pe2sexEBwyrHvAt2mVPEvVCxqgn54CM1qM7cfz3hRzZjsNHBiFRSQCnwxWrDuxLuTv6g2rPuEU7H3a4zp79ThvM",
  "key38": "5qSexBFVpC6fAP8L7QRDRWMGMmkkj8DMxjgAhzVXZgqRrwd4kkjLrskpxqYSLFR49tQ4LU9MXBUUHD8rP8euSvD7",
  "key39": "5E4dvHh2JkW8YLT26XJA8NRtFmdvT4A2kascbHh3BmmRUYC7FiMaZHnrLHj9evxmqgydKK72Q4qDfbdG3Z3qi6dF",
  "key40": "Nokh6ENnnjYknN1kqBsUikjNfeGNtJAQQKoXnUVfsiDt4QcsmL7gG1D8Jq9JkUoUFxqheRMnNQD6F492hJSWVff",
  "key41": "2sdBqg7F9NFzRw7gkwrEGRb8NawG3t2boJcr3JR6vtYjFBmgsn6rYqUgwPzWbdv4uxy3At3ZTp3VDSfzigR6tiUx"
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

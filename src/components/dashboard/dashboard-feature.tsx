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
    "d5ZDzMy9rPgUneYSjN7UKNvGtaHvvicGeux6nYs5atQT8VzPCUUNa2YhEwnmoZE3kFveYexWKNcKmzDKu9okoX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66opmAK4zSXK2mmRyntcP2AE7iP6qDPCZynD2UUHfob8QiJ4tbLPJZcyNrzgzhGEhxxpDdDyYyf33RB9nRt2fLBY",
  "key1": "QS7KfjmKfj1aKMpK4SsnztZmYUMkwsG7dbCem2jQhUzrQJBiQahsAvdHc6cvE85uqck6MbDC24bkVE8UWmkjbNY",
  "key2": "4K4cKYb6Bsfkoa4m5ec3EmuDkJoDnLsD9to12BUDe2MmLGJvwap7gyhFARXNYx6DmbftGArKzAB4Lh8Rmu7nvLM9",
  "key3": "UcmQnyFZzTKFBZLRUPzADGWnoHALZDsG2YztqhPCRpA69Uyt6QeeouHJ7zdVHcCVqv9jJu6wdP1E5WU1gt7WCAW",
  "key4": "4VGY4SeV1W4nkKTmwobSHUdyoxVXdnmu8vnwQ13p6VRxgycVW97cXvkKtUwrAVCkaetk3b6ajKqhtZ3D8udfLmQ1",
  "key5": "2ibS3NVG5FrfMSzYmcb825yJao2W2HL2Fx4CZeFf9ZTUV6WXF9jKrkGFS1c2mCc5T8YWcmfG5E5XBe4R2S7goe8f",
  "key6": "3ecrsmbkHGWF4Hi2Fk5fxn4UK9hYQzpdMyzZobtDAMzPedQ8GEPdaFKBG2sbCE8LqUoRHM5Nd3CH6dEKZhfZWiRd",
  "key7": "K8LT2YULrXmbneB21iKXhfHhDTX1S8HPUgPkt5995bxaR2UWPBcDqXWmPJLZLhCkCkZ97ShaZRYYgx1Y8Y5xh3o",
  "key8": "4gm8rakeJSwhR2o7GRTVoyFQnNAGRPDadzmDUh9FgHRdVyVzR6i5wTgA79iN7WjQjw8UeFJrRjDrYoG4S6w5G7e",
  "key9": "RrBYKapoiJmfEp9gDEK5mX3FgAEAZCmsZnLWnyBw6nyZjW4jstSukCN9FZRrvrGYm8RTbXUV5UzwmhqrxqToR2v",
  "key10": "3yUwueeH45vs9mrLR8GVeq1HWCZyVL8PwnJN75AZBHTULtLDBfKem2ruFTvAM9odyh8XxtEXiJpudWrqE65vC3JG",
  "key11": "3m2X4J6h7iNLJYHqdR13Wxyk6JEbnzeGm5BgfKZrFgGGxAKTGWrCYwYMjH1YXUPRZFFgLjxfzuSCuz9zhmLfa9Fz",
  "key12": "2XdqfLjKMqYTouZfVZrueMCHPmKJBy2MW3WiuZK5veRjxGgiA5q6s6xJPjhwKGDvLXvHSJtS2gKzLfgsihp1odGc",
  "key13": "4Uj4oTU3Skv7q3yxYF9n61JL3p5veiwZsWQ5bhGEtXdmoqziNHkxstp5KRQZnyTLEXTUbZGbeunWjHJyCLMQFJw6",
  "key14": "5Ej9W5XcExZMYaMnEtUEYkUEw8Mfs9zcP1xYptgt4YawcwqSoZJb6TvYrDJdHzzbhGGMkh7v3jyApfHbg7PdVrWA",
  "key15": "vNFGi15PQsAqayNYTSJZUPW4rY7BfdJd23eBMZfrpb989bgcjs93L7voCS16zZ7CnFzkyHfb3uSVits4ccnasca",
  "key16": "462HHRDFpPJNT5RGUxXmqXzXEyu8sce8LLAVnisyFKtUzWoFYWYENDLYGpPHHCAdzLzoRzSqtviSunzKXChc8MTd",
  "key17": "4HgZqXJTgMsJ6eyaudSKe8tGifJZFjjC3Ebgt4wCMD2WWtQAXTQPV9n2gwk8tFsQXcCTLYCCX1q7m9pFSXwFdwBm",
  "key18": "HP1Y4MZ7sFo1bLuz3YNzW7Z1sH7eTwM3kUKUBtB2TXzRaPbWDzugfAZVWZQhCeiTYuaL1UqgWgFgiETWtMgiaQF",
  "key19": "22dDdnzbc4Prdf8d95CPA4h9WLXzUbpuwS7nhRuSVZtsxkmPUFdcMe3bK7wwThknccEQSRAeeQkFfnuG2PM45G6e",
  "key20": "2mrQRJXT6UtrWvE8bzAEfVtHJMfGPjxof3rFxqinEMZsahUokefWLJKVLSNnC4QmBMLrC2ReqQeYLgyeh6iXyYK8",
  "key21": "7UMDiaRGqXHECeGECfMy4UCzhrSPvJvxm7rKCrPVseEDnSe8RfAYszchgHm8YJsPuTFRQsw3Yf1146JSJSHmqy3",
  "key22": "rnHReFKGKqzw7CCaLz2cYZHQntBZHeLpoMfCBamW1KAkJFMS1FPCkKiorHkSxQ4i64jtFZPGPanv8qb9dVFAXse",
  "key23": "4gnM44D11PcrU1YhqcqVaisADeSSRNuLmFiWir6jGMYccF36QxhfxDSoRq1kBhjH94NGPwg9tzf8Hu4Caw3p3qce",
  "key24": "3vkxLYk8iW2wJwTGXP5WANzE7BmbSCg3sFiMm9DPoqdLfVg53gJmCN8Xvop7f3pWGSr1JH1qSuU2nT8XJQU7y5YS",
  "key25": "3zDbDntguwPTWbeVob8imytUpnfv2doFswWBxgm7HKLWgzvCdnS33U2FTX3MTB3CFkv1jxDEdji4UXQFo2SuN1SN",
  "key26": "5CpKfAAKQcrPa3jom3CdHmCdmeKMJMqjU46zZD3ZFuqhsLAZ92av6traWJ4gzcUp5iChPy8zKeqWCCAfqqJtN5BW",
  "key27": "28UGSW8EW2JukYUsDHJGf3qM6FBHVLHb5Ejpnc2ghEXNNx6heGQ1YP3sT8V1qJSVNsmqKFTeQxKRX5YsxcPKa3TV",
  "key28": "5uDivMukf7NjpZhR9Afc5euAvGB4fAyNgUJ6wCu7GbQn61J59UgN3MsQUioc69PkEH3pZsvz86Za1UpYjKYGaKUs",
  "key29": "2rvQ9fEnRDksAyvHMy4jipm8jju5e2UEkL5pSsRaUD3YfkqJuxCPFVYSH1ifJNZWxoHMmWPnDu8caCQgFLhVaid2",
  "key30": "4ASZumoZm4EBDPG8sSyc9RkK9NsXJRpQULJ4EGcgUXH8uyp5CdmHNiQLCjNBW1P47jM4YbZBefy772xoRRiw3ySU",
  "key31": "4DcoegYDnRqtc4Vxeih2ogoXuCXQ2c5kUdjgigfBzBo6pQ835kKr8TJ6DfVZ9Laxw9DrNvhJMTdLWiwoo3X26nkr",
  "key32": "UE9Mo4dVbj7vVkeks1CP5SeQxtdqQee2VNWbzcTkjvT92nqV97Bp5N5dWBUopmPwVwNB1uz71681NcF1hkuXy2J",
  "key33": "2WVHNQ2cGsXKykY3WV7uvRuqvuptvvYwCCMPrrw5Xk3tMKMgbiJaGjsvC9VNVdUKZDou1cX3v7npHMGBWeVQ6fF4"
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

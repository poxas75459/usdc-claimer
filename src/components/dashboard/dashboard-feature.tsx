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
    "5k8iciuR6D1zEsQsoU7CqS2LSUv74GTyZAEDyFM17t4uyWuvdb4dT5CTszL9X2ux4oNz7raz2Azi9dzAqiNujXJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wewmNYoRsuCtFkMv9Uca4Yo2EbEcLwCTnH3uFfvPEnzN6NgBvaeBHR3FNzvxfddkcLvXxcgGARt5JCMy2rSY64R",
  "key1": "5YpwyETfvR5mSjs7KP81df878avEk2MfS5rsd3emzMiW91dmuqY5uyNKiqTcHERGNEjn2A4gH7ZxoG2WwDNaG7mp",
  "key2": "2Q82ptQpQSXCcXX4D825Ech9TwxV5xs2opGJ6p8XcGo48pzcABRt751LfdiX72usaaVjH43uJtFR5f6vaLo1WaZH",
  "key3": "3NyioRBTHLe8rNxENuG8mxGRug1TcuwUHFg9UxwHzKp8exJCTK6hWA4piyQUYU8K1GMp8WnqakMZLRSMbH8bqizD",
  "key4": "3mcind8NETL3qvUTAZ6MMbNARMzjBaJoL4iviue3mUF3j86VbgieGy7KDLYaLxTLWvAE7xBMnaxgr3J74mV6hKZu",
  "key5": "2pfR2MKmJF1tqsUCwR3ohVJZhztKhxiitRY8p3Tzkkx4pvA2Wdv87EFGF2Dv6Z3fxAhKSKK8FMuc6AS7xyhdpqQp",
  "key6": "TudfZJ69xb1EHZGw2XpQJEvMwFftHuhzDbeTCU8tfn6T1Rdn1eBHpgppsEhNDFWetFUHcxCMherhCJk9yhJbv83",
  "key7": "JiEWJ7cjh2Qc7dZap4HjUS8vysBZbsDC97onapPNzMy2V7mZNcHkuP6RhdKEfQArNFpreifdB31HJwAwtzd8tUs",
  "key8": "2NMwHivHLfeYAoZnWbKY8i851AqjFFEpRBdjcs2C7wHbvrBsbxDSRXWMPeHfNFM1rjDbPMty67CxP7avMJGPGgSR",
  "key9": "suu3vY6fmEYJvE3oMfyW8juz6EuwYrX2n8QBDM4KAnuc9nMzCbCRuPJiHrWYA86qaWdJEvCTXdDchQUNnskkowN",
  "key10": "3LwLE5bvcMCtttkG7AoSommzFy1r3oYSr14tq8hdKDSHQvQTmg335FdDJNQTeDR4y1eQeZBVYZdCtyJhWPiXgPv9",
  "key11": "xiM22A4ZjDHxDyc8Jffe53fa5mWaGWT5r1RsEjbG7ecm74jNk9CcPN59QGe3YGrz3V734DxrWvERuAxJfPcCw7Q",
  "key12": "3spKhBaCPx2abhLWUmkFP8Ybkz2VgN2XHYY6HAZxiR1KVggBgWe4mFTQ2htsGNxVsRFXK9cdEAZCGXbD8wY2FMTo",
  "key13": "5P3Ssvq38TN1HUpdDbYyaGfV26THcUPqEWKewqVuKjGgfmsb4A42FJdNyXUaRRcvZEqk8ztXC8CDhw1RpjXsMF1F",
  "key14": "3gUi75xu6rfpLYq9sQYxJeuunB4DoMHLox4rU63zWgR5e3L9R3inYW5UFpuo6eEPw8KsAfXa93n5x4upaMWc4QSe",
  "key15": "mc2HiwUXKD2vN3ujAzffTo5F1Wc12iRHEo1KEdQ2TuGpjkXNFwQCvjQo8Uv8Ueo7RCE9uX2bEXcwUu7zr5pfHkC",
  "key16": "4wyMqX6vWF2k1Rxkv3kP3Ljvbw5sRKbWu7vsXFATTqzYQwVTRwqrMV7MYVF8aXL1zXJ2S3wnSpMZ1Ncuy3DjjJLs",
  "key17": "3QCt2xZ1mtgEmPGx2vPJjsWmjMDs2sjMsVKavkgBYiqZu3M2PM6W4McJyQjTMxAysDSgQtNN5FK4wjMk2GjoUKKz",
  "key18": "4GtQeWNahwP6gMPwrZstmxcpxr579A6BJqrqQYKcaSstjTRssyy7SVPV8xVyyLhwBV1K79fGSkpyy2dTYqVRrXh3",
  "key19": "2NzzGxkWqKUzgo7VxHLXMW4k94ubNdVXNT5j5MQDQ15wZLTV57J8Cd97EdagcUabTHhyppViLnX882vgWudtmr4d",
  "key20": "4TSyXdaH2Aeb7vtYodwzyZAeAHi6XR4WaeZGokr2wQ8cHePFQ8WTTnb95cKhiKEBv7UjP1afZoydQVeychKVk9BF",
  "key21": "2ck8NjhAAj9f1mFH8LGiyGdZmf8ZP7KtfKKC7wuKAYD3JeUjgjsTeTZ8a7hwVJ7Eecikj5a4f4LZeKnvsXGVDdAq",
  "key22": "42DRkg6oAy7jMCN9svQ25Br6raqQeiihuLmgo4B4doWNtjGtrKtEPRTEdDUdTFZwa5z9aBqun2CtLvZSCjovYVvS",
  "key23": "4SdWBtEU6PiPXo6Yr7cTZDvZMB19ofhAfqUYCSUHhGSY9qSiTCVZE5roMJE3UypxnSZhqZDYyjHQ5tqmcwPLsbrG",
  "key24": "5RWw9bGxuwsLNJK8anySqvPAYoGMEpaPicLgwpzzComgnkzdLSfMNL7RAFHJJCzBigBPzV8SunrPvyBhe7U1GUeP",
  "key25": "46bCyCB2zmovFi5LpcKALEFiKAZ37ry1tuxLfaPc5Cx89axXvmCjVuYLjseWGuriQub2kkPX31nczjuG172PGACY",
  "key26": "3qAxhPwdaEGiy2cYLomkqMuAS7dwwhspWuX2KMgJjvtiZWQRpDwtV9yLDGUqjHQ7Jeiwd2SDi1oa9YQwe3yJVB2D"
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

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
    "5YuARE7d2XLkpMXpDg7RvMZEmV3LFXrd7FfuHGCzUm5jEzgsfsFQibpLzv7eipj18CHSojS4VKKiDFqdZfxmBRHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdwbvdfbzgeWYekCW6K299t2cJ6ADAgjPKaHYntbcHswCq6xGWcRbJiXw5qcR9N4ai9AGCLMv3FhY2g7XwqKT5K",
  "key1": "3Kn5HWBGqucbGzxVNn98RJ8878cX14YcP4RyrccZXhWSUWQ3ckDoLsLTHE3ddVc2vVZKDQ1PwsX8izUMK4Px16gE",
  "key2": "418WeAMCc3JKYwSfD4TiSAqsr3pCfqeZqrirJbyrfTvWrYNLFEPfVBT3jz5N78WcdVSwjcAXDQTdybvVsM4wpgvE",
  "key3": "4kNH8yeYCz1XamN7ZdryfSWjRHv86socTLp4mY7cV1RYEBScuAfzA9wxRUpedjyozuUUv3D5LNnrjvN4dWgHxTtK",
  "key4": "2hP1yeGs96SakozhfDgiaokfCnNMgFNzYSxsVLp75By5CqTCsqPtmQLhh9hNSok3i7w9LU6Erk3RXVVE5Dxo5o91",
  "key5": "3JwiSG6e91MvmPgjQTh9fTM8peeqCP3vWCLVe76hQVqWacEXQ3TxiGGeWdYVVmm7trqHTcqeX9xpW8J8yLABkZfg",
  "key6": "jUgMuUtZZxiqJZ8ejQyKRLdvaQSJzCDLe8ugArrSu5TnnxeUdVcUvCDBL2HneJRjjRiUE1UwhrkifmLtWNv1PbF",
  "key7": "22GBp287oVAJpSohJLu1xTNeMgV6qs8239TTUrv82jRw4Pd5HjbFgbPzPWa13B75khhTJbk3CbSUSagrfKpR4o9P",
  "key8": "35festm3TH1kFA13cp2bL9TsuttfCf8kBbtfYU4JJf64Hpc5NSNUDakBJRiQWBnWSuXrkGSDyjNPkTzjimcT8H9S",
  "key9": "22rThMeX8jG8JKmvfJjeHWMxb2SpTKeQ2F2Zd31qybYEw6VAKFMA8QSLnKdFud8rjk6peEh1QV2X9ijqqERpx1o3",
  "key10": "2xN1ByALNZcNB5oLYiZVptSSuMWtgwvAHejVKrYETPdt1eim4aVTCe2Z94kPGdGgMfVNdqyNhJKcsVXHfanq7wyG",
  "key11": "4XEy766xgvc3kLpmMpDNnmJGNQtderxM2p9mP4yGTMAeNAu7jqGPqS2xHcxjQyp6HQ5YnuN2cBqUXuRfbg4WEjs8",
  "key12": "5nm4N4CLxwJxsgpX8uHMa3zhmEsGCSpC1cj44Gcjno5zt9thicVf1CCXmLG1ftM97SYAa5v3Vr7B76E4hAa95T6t",
  "key13": "3j77gDPa3g8aUVAqXp3VP4HnY4b4DzaKqqsNywEPgQzDvYmeKi9MfxKCXsJsSmd9a7SHHwkTCNtahZT8xLuN6DUW",
  "key14": "3WvvLAf11psMjaMpaQ2bkfucfQqXpSZmjcoEqgjs13wZYqPrwmZYySc8fuizcqD4bA9JqQN1C2vTxMALajjzLoS9",
  "key15": "2ofK4c8gFMkQoxLSXb4ikwQs6zVzcaWsQqv8PJXFLFbn6qRETV58zxQXrD2fnmSpXTerchZdsWikxMkiBPnFqgtd",
  "key16": "NxkzP5aX2oYcWB8Wc4tzDV9t5xzu2pZmktGNt1DWa2aArY3TPUBHP7skQgNkfNdRd66hJFpEhin3iDmuCo4FPQW",
  "key17": "4s5s7VJdoTozY1M3qZc5DiZQp6iRmNomCVrTkGnThirRX57kiZSQQfVZGm4UHmDsvtTbGUKFQjCden7c9ZivPMBK",
  "key18": "dsG5tHPznKXFMr9ppWm1iB4nLmMzdtjQzKhnhLLm8VYXqWWcECRQw4v1jq7gggA2UxVsuAEgZWzTmuRHN7MeCB2",
  "key19": "4LWX4ZGF231JvVkrJH5j52ma14Qmv9keAATNriEPcBykV1FcW7CgxLYQCGmDk1Js2UCe8zp66evaa144nTMRfnM4",
  "key20": "3mMY61tpEqoi5qCvPbracd2m4MsCWKobx26UHNPqT9KLs8noknX9mk7uqryg19TE3hWZPC7XZX8Lwu8hRYSh4UpS",
  "key21": "3JVehtPoQH39P53pA9Zs4Wx2fhYUHYRxVzzrhCDgDoJX2a8uYZpAKQKirQKoNrRX1AkPKNGuVQfKHxV7rE9o42eQ",
  "key22": "3mNydCPwxY3BUrDr8fjVnnsapmDMySKYGKE2tPvvkK4acNpMdufm8G86oS67XtVh2XHEUSgUCtmXLLMY2MMZzDK5",
  "key23": "4hrxNf8VeeW2qofNZJZT4ACQ8ZTDRdytVw6facpcfcAUmaxRYQjdkidTLUUpWx8Jk7yBRYKZjNf4CJGuMSEXMSei",
  "key24": "3g446h8h8QkjVYMjwK6qgwEfYyDMUtuqFKd6oiA5dLbPXp9avRRKTDF92xp4S6HcKW92qSCB38Fu4omH3Tium7kd",
  "key25": "4KmXp3sBwC4S7848xqSrLdwTnnLQyzZPZbBMuujvyQoKVophSvxPkGCwpfpZXjcTRV7NdkY8kd8SUCP98u74fbhx",
  "key26": "3tXPcypBtYMMEoqu8iLi8WMnCJLLTw3ML3ATCoAYbXZygfmrzPeUeNuJn9RYh1BaD1XSzBejmvbTTkc6ak6zs3h7",
  "key27": "5t29gwd7PsDrVQdP3TYVojeaFpk18DUJNyrcF77gomXczKfzXqEgr1put4LeDDgFfd6zSUBU2qeZ67Ns43ng4ZkD",
  "key28": "5HSxkaVqksFPvzHLSHzxBSVSjAXAdrBVfxPr1Y3fDeLuJbqF3Gz3EzFWpoHBzLT21yaraRFxxCRVN2s5GJqD4Sqx",
  "key29": "3NNn4ZUbPLiV8awySKTzajrhBFU68kTnpa3BrpwnHRb2K4Bd4Ar7TB3JJgoehfNtnUfgwSThkFgyXXBCPunuZZWN",
  "key30": "3G2777vb6M9ivCWXU78pmCBVcAiRsj6XepJzbiuMCNmZMNj5YgXiFAqa7reU2TSiuo1akrLK9TypTTV6JDgZcGVx",
  "key31": "4rrsonhCCacx3MCjs9cY2XFxZJmWuiC5yuYSWJG33xhprdvMZMta3sXUAAekSZNJkHMRM3T6V5wmYJG9Aiei5aR3",
  "key32": "2B6VftXEB9jAvaGB5eyUNebz3fWeWooYXU44CHpNfSez1A81RVv5i36qkkbTtxVHEMW6QkWWNBaa2JW2uCSQp4nu",
  "key33": "49jqRoRzYC1dEzjNKJdyeVkwfA4z7YjCpMazPgRpT3bi6iJfgLU3kEiQZY23t3WjXKmHY7NDFacqjwPyyjhfRyFm",
  "key34": "4RxwcrmfquJFqVSdNXa3uyNdMQ7pp8Xfb3PFm6N1nAAcshhTXEyNVU93cbhqSBAGX9dEa9T8MD4uCUWYiCUtRstA",
  "key35": "jjpC2EDs6pLXRKHKZhW9m8WaftG8dyGCxXbQQQgzhFMypCT5Ywx7wj6dpVnABzDwfZJZ3eV3qmV5mqnm8Y1vo2k",
  "key36": "5jiAnw5p7v4dJTXFR9GF7hzpBq2C3osd3kG9XABXZBCk1ZxtTGeNdatQWrKzmUDyQuxppBDh75PoHnhVmtAz2UBK",
  "key37": "ojurMjonNjS5yeYCM6McvN6o7fLXYGFTtj1av5ouRHJNs9NheHo5GqTPUeRMdYLGX228K4VsK37pGuCUp7jQzCA",
  "key38": "2idLN3vSTnZozBg8FLr233N2KSEUTnsgmvbsRUCcCtw5c4k2fQiYDUtY1foN6L39rRwbu7F8jYzsENy1CdBCcrtC",
  "key39": "3pBukY27Tf5Bf98QsgZxTDQ3saveB7Hs7oT6jp3hZimam9f2bVPNauuxooez8wwUhYXLYwJ2RnxTMzh6HRmXkBV5"
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

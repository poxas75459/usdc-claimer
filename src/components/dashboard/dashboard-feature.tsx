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
    "5TjmWYCNvq1u6FCBFdyFgCD8ePKMcXVm1nfgG9qUx9wSwMTrnMUrG3nZ423KCYDwzHDA8dTQLBXEsPmkjpcyBpaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHxEqc4fgGKXbxrnFp76pbQd9bYRfhn1jVrx1Y3tHuLBhfLjvyWGw43WGhF2iesy1ba4jFy3hQnWbfzFxmGaofs",
  "key1": "4oKZmPKzt3pDPkGadvXXtvwAnWK74RukLWGprViKuqSQGuyECi2jJSKWriZYXmccCp4SbZy5aBULSVfPLqNPH43f",
  "key2": "53NcU1UFejjBdahn2dqsfrzQzctVimF7gsfnoncNGXK5smQFiWtycArLNgSaY6sMGL3smoMLmtCGefqdLAFcoYjn",
  "key3": "uia9CJ7ELSt6JsVzTSRfdTxGkcavSyFcJKGbwsKLTNTLQv8nbnRpmFfG1T8CrQruc2QExjVddXqH5PcPsWTEPm4",
  "key4": "5NquV1dFyuJor9CGs7RDEyE7CbhR9oX87uKMmTTg5CqF8TC2ghDYnosbD6B7DDq25pJBd69mk43Kc62fd6BAf4kJ",
  "key5": "2zgmA7797JVVGRx4dLxQPd3PjMdjABKYJf12cvyZwU41RG6bYktGhURtmpmxmWPYs1BVJ5b3iGmCgahooJXvTG8q",
  "key6": "2yJt7hu1xef6egsVU8jFj9hKm5SJinrcptQANFGkjaLvJ1H4XauXvmg63ZU914Y23BeCCG89j57UUnESDP4Kqwzx",
  "key7": "CJkcnP2TEparbFa1e4aazmhvQk5rFXf5EjrUvTQct97gcAFwLbjXf1p6aVZ13B8csq7s5bbknPDFkQiKV8ve59h",
  "key8": "2w2WXtvzFdtDU3Wbg8QfeoQ5XdwQX9s7Jh9NKU5VhWwpgok5UFL3fjgJ4Ag2LFcHsrY11wgxHL1qUMeZM2qm8uoH",
  "key9": "2N9VBgMGwnBqvogVApNrMJrEyc7xK9SozJSUNvARkovGigK6DtmHwMGAHkboLyJSLp8ZWHKeeY6JaWciBjJusJuh",
  "key10": "4QdVQTseQCmyqUM4UhabBnH2shRcjBqPLMkbQ6m88D66BDK9jgkW2Em2Hxf5LYTcDqcq7mnYUCQFSzJV5PcVGW7W",
  "key11": "4mVFjkEry7tWPCHMANAmq7UMthSb5vPV7GGsUm4Qxo2wcn9gHyxBH9oLPmP5AzXcyxm75SF6qytA6z9S8JzB8HMM",
  "key12": "3Vhdgd8HUxjhCeoivtyBKj4DNUxHtjpsgunkU4BLs6awU7wAjzL7RuNXrFPSNgt6EKopUSh3Uw6goBu4Cs7T1q1L",
  "key13": "38MuGR3EH6k6Rkc7LnmPYGnRgRboeJKC6kAmhKhxsgYNwvZJjxf7AxwE2dQAeAWNAX1JrwXiLuhLZNcUXARyUcfY",
  "key14": "5Wdgi7FbnAyQsEnEfCh5P5R9cMicyVNS66JCncnVqrHAAJkk7nFkrffZPRCP6oBAS3UFAV5CvTDT7Yo9nF37zDvA",
  "key15": "k9bnXerNptCMuDeEq5uWiCCVCevisseoy5XonHF37cHed9Qq1kjyZJrNS33pnWgcREoASQsKNZkDmorLEHoyXfP",
  "key16": "4VZQDxMyxoVb61jf9AeNP56aP4eH3ZNVUHMfotQYgmjjawhwrBYSka6EUkG65S7wAPfh3wmNiqsVSshXSPVzex8H",
  "key17": "49y6xkchDo2zGejyB4N5tvNmwTiug6rcRzDhZcwmKgdHKV2aDdMoaWYN6YVwsbWkfMsLRFcRTnNhZQiwKmQwxoSv",
  "key18": "3XLL8VvrHASeSBkEbcy4gqhxpQDKkQAmofLEDBJkkrPKvdRFwbcZDqUr4MRHfDEyZupEpochBvctktNcCu2M3Edt",
  "key19": "47DaW2EKUo8wYhbtGbQwo7zx3sK8bBLhGomHuU46Q39DVPsf1xD2UQzuN9ba31agviuXr7JbuTK5K1NdmKMrExdD",
  "key20": "3XaNUg7E8gxdHW2hXXeGX5sXMEjfZPsWZ7jfPMEHbCUDgAQzmTy2utgavgWa7U7VZ7FzJaP8svwDMjQrEoK2mxq2",
  "key21": "3LuDjngWgM7GYQ8ivBdkUo4Js6PrABBHpTCrmUHmmA3F3AE6pLjyhubkJ2pkTghXAXZsRkXg6yksSjuw7MRNv556",
  "key22": "49HDP257pZ9oCTgHmTYvCnC8mhJLL8yqYkkzmEeVBdjAsuiE43k4agtcGQzd1YEA6Lab2a7W8musENEzy7ZjVs9U",
  "key23": "4eFToUUTu6NuGyUscpTSxvRsuMaQuXHr7cwxsDp5tpzNvYuZKPZg3ffBYPy2QbZj8eK8jC2iqRDgZAfuRooqMVmZ",
  "key24": "6gpwUhFb2JMdutkDFmo9UStUV3MzKT1FQ4SBmvk1oL4LukENgiXutjDLEBQMqUmQXtmS1wGtDYPXCpkQNfbQfve",
  "key25": "L9GzBUwcFWfMEdK7JfYpq4eTo9RzvFzdFwbanVRZVorUL5PCVcoj6jDkfbXTcNgaKDj5z9GpW5yShdCBHWZyPVY",
  "key26": "22gb8Zo4LpbwHhkJrC9xSSCiQAmCE98xB55689hyHi2ubZvpYpWJgx2FHepfqUGqpcNqXmsC3HGwpZWxJ8fVm6Lt",
  "key27": "4eYgu16w4nqjtvzfWnLmfKsmXAiukLzbAguAEykyBtFRy2k4pPn2U6ZhP9LwGKdf7iaLuSiv1wzVXAejqgbdFTfR",
  "key28": "XdK8ZuYkQKM9eUFntqeTPCgL7WEQqAdHR6KJtMRhXeYrjhG9hPKYDWhgCWdNKphhpsp65LdeRiBjqipW85Cs8a6",
  "key29": "fF6PefnkfLUEFmxbNGMgnJvvXmuHLM7tMkCP13S3u7ZjuSFPT69RsF9oysqcAjtMgfkq89hg3ZBwMobLkcYJ42Q",
  "key30": "4zN7axh1me5UGTQmyXJtbxQKDwvHYdWpahyQw6YtVV4SxK3qcva53UF71tMT3wfyXcftqrH1CyuRmhioTXtHEEuv",
  "key31": "5Pbhwkw2ucaaC35MRXeuGJg5ZP7BZRLfnmU3nV7oWA9qGyGcdevDsqfecnN6r7bNbAjB59bk75wsh6ARpbj2N92A"
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

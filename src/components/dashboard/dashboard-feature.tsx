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
    "34i2zZgomz7vU8tnRRLPv87AaHLxxv2yhr6GnaPwL6kn7PU4EjBuTTn7cUtV2ysRgyHtbr23TRW7hwEKLWDz1HbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngz7BAw6ZMHLXCksBApxfvCufi3ndMDrXojV2Daxkx4MFQk9LHUs2qCBKQMs1LxjR69LZyuxNB4wWtYZ6STM5xf",
  "key1": "scVZs2z71KpZ1xQkJXstVWcNJWdkB8orH6WDencWhHmNDki8au3E5D1wTM7zqcbLr8wBHNKReNZJv914ud4rg9L",
  "key2": "2YUXrB2CEbg3a3s7SzemtcmvvdtTNq3bNKng7pNSwDdW3JRH13EvPJj3f32qq77u6JrVBeBEYoozuoLeV7XbyTBV",
  "key3": "UQnhYgGy5YVSuLHBP6TwWuRPqGfUrJujVimaLwd1gucK2ZvRgqucnpSxvx8moTUcgxzsJ2N49FUcrxsAd36vSr7",
  "key4": "5CAYV9piwdxHRwkbJRnFm5B2W8CHQJJfafjsy1fWHzj5Fb9T37VoUveBXNLywmPtznYbNXDkV8iE78gfF71wE6Vk",
  "key5": "3Gs9tuoEHiz8BpELtezn3cYBivzfdW4PMuLoitUoTUQvGs8S1piDCSgtw8evnuamqVmtrRkw3e3bq4jfGWCUMc6S",
  "key6": "AxuLKdd66hSSDJ59e9oWRy1Ab7zw8eDxhekjP43E4xLAZQ6HDG133kwZUWo7HTVgAMhDQ3JhXDjDKmZTr7P87cK",
  "key7": "J8Wk2shanR8rfFZkYu8rcTxroz1JSogvYu31isfE6nMwUixhZYmhhag5kf96sSgpiMMMZ7XhDvP2E37oUMiooMu",
  "key8": "5LDfP4DrZ5E8yttooPY6fMQKgW7Fj4hS6czExTdVpeuSYE8BtESJiy2Q6AVH4NmHJNLnKRbvZqpqgoKsvqY5b333",
  "key9": "2gHDu22wd8QJhGLbzw5TW7p8W3sSVLeRTEEUHqKdu5haF5rJfFcn8xPRm5dMmVCkC2XyiuLxPVpgNd79EBvQCpYn",
  "key10": "3XSEoVAZvzzsH6x31NvuytWJsF5Q8pjmPRwQaUVfTfwAnYdWjQFF2PazxxAPGB7h4QQH6b3h21fxsPJM1tefsBM6",
  "key11": "3JEUSFZgtSj1arkTwT4QEVHoVFhjV7RYEQZDSwZJ4Gti5nMLtJRVyjesQUwPofzw6vjKVgaZKXcXNuvJ3SuBfonT",
  "key12": "3zUkB88bp77kf7hSEJLJbKVLY9U35tUBhLVPLZpoe1y8NTFtLCueK71PZnWjpjd95ZKCS7VQgAeFZEtrnMcYFLvy",
  "key13": "5d36tC2PEtNFoDrZ8cPt3xzmWBTNZRbFLhr4BjSZ8xbmdMVtij5ZQoLuwwHowCzQ9SjkTjtEkFZWPaH3NmMVRJxq",
  "key14": "4gbeBZsNdChntyDTs5JaH5Jd5Su1dUXxQ2ysLjX4kZJTKPVtojHRL8ig8xDjWaQn1AAyqbWqSJXBDahfJM49q3e8",
  "key15": "8odhxAhnfBQUt2tkhc9NVrQmJrVqYzvAu1RLTydTf878nNJTom2h9QwQxt2MXjnftq9f1Zk2np1bUkww6eVMfXK",
  "key16": "ZuabmJAx5QGaPQ4LW8fYTaoYCqYHov5Ho8cRMJVzb2taKxpABU72b4CyY1poQwwgfhJAYKNWgZNWWw868et98pZ",
  "key17": "2ajSd5UnVtYfUYNrTASerFUV9CWds67FqJtbAwHXpTPnW2fSQ4YDm3UvgGLRR8dDp1bMFgqJ9SEw7x2XtJBAmNxW",
  "key18": "dwgFU7xjoBoJv8tyvoDHCDNFQkFLZTQCyS1JcTc2RVmwrNzpuzHnE6CAdZVSxUGHqG7uTvd7VyQMBMCNxBtZKd6",
  "key19": "6331w6FRoYDunVkJgcQj73kMF6jx3riHzCYuSM2xZfGXTKr8ZcdSnWwiG7MKs77hrvPRSjQwLNfwYpkLgnD9rc4V",
  "key20": "4RUMwKpR73DfUQSoNVLhxwM1QiyyvZ2HWZmi6vHfiUvSV5jyxbrHCm6YhmHHRfwXK2MF8j6oYMUsjyuU2fAxaT8u",
  "key21": "4Mj7G68NUjx97SXNwxkMx4Buv4ooey8tPNCcBCvGTcqxCJCiGU7WCjWTB67LdvrJqd3ZvfKDwQMZeVrddCHmVrg9",
  "key22": "4Wb6xpcra2oAvi3XvnynG89PjQnywX4o4M4hrCSVgE8n9yq7tpGEFfTF1wcFqFyRE5MrrFbRzoYAXKF9cjAoFs1G",
  "key23": "2t2hEYJWNBpkKBhzjrQ8FKK85d51avH7U2zcq6aEq8vqn17joCLMVeqsbAt7KKcrASRnxU3Pn9dhoDa3gQdaYKiA",
  "key24": "BTfBQNTpqUMyQVob5XomVwZn7D3tKPbJW5etCDouRDCBcgYah51Vz5CLN154JSWjeDQ8FZCjWs5N7LP22eb1ruV",
  "key25": "4C4UYcUjkWFqm9wsyQhEQmHsmaa4Eh4TGf8gVsqyF96NgWJAXVZFjtXefoVVktc31AidhU2oocY46Brasmya88V2",
  "key26": "5wsz9gJKnu1Hs7XpdCgjRsYaBqY1vg8sPFYbtdFXsd4e8sgqquVtJKJ8qco9BH72M6L19NTdfo6ND7d9JTzRwwyS",
  "key27": "2d1NKB7gtQ1Cu2wgfym66pjy4Hz5jG94acqNyX6c2GRJAx6sB63oeFYpv4tbbgDEMT6kymuX9nLEMPWHejUcP8uX",
  "key28": "38dokHP1Nm9UrGdQYGcnGzbdG9zRQ22DYt45JtXfi7mxeC5LLA7X2Vwebhk9hmLq2Ed4sTZdUNoG2iEy7ZRbt9xc",
  "key29": "43ZhvEYYyKAyXEiBgs93RTWyW5mPt6n37Q36NMrPQn1gj2v2uhYEy6NbHgw7HZgiFTx5HDFDuuunoqH3mNpErNZj",
  "key30": "5qqypRL9LcYdkfEPcNxLq5GbNGjEb8tAwQ14spGj8xQ9iaACKeMXpUjKYbQhPyiPR8wZBHq1M1TFeP5xYHDUN1AV",
  "key31": "5Mu4g51NULw43xLqai273nx2Yj6ywTfCKMfcXx8Uz8Gx7pLP1jCW81gnzN5zgEfo4Q6KNUVys9P9Udz6GdjhDiUf",
  "key32": "5c92W4hhh4qCJjWdE4SM1AEXsPfphbXdtJngFPUreDoHyPRtr4aF1w6wBX4tCN7mHdwzV2DPMwmEyYzGDhuFwSTB",
  "key33": "tWKTjTQDLvUtJZjTXTV2b87nLueAiu1Jd7CoPQ8xTH6zd5teQySALxAo2GGBiH84fRw86iHSoymZ4KhUp5Kb1au",
  "key34": "2F98NFpAYqfvVXyKstDQfLG33UCva3aDvaZPg4LYkaioNdphhsfRytBijLYxb9gkzLyNte1LUWaa5NtaovKWd5hf",
  "key35": "5sQuFX9uMp1DonqpUJh6ZJnaAMoj64JWvmQAivBDjGMoWs2tzcPrzo1rBVRiANH1VRFnCMZyQDkAKwCZS2iaZKVK",
  "key36": "2VWE9ZikAZqP2FC9VSJxYJKtTYUNj6THDK3ksQsc1YcuN91PpsMsNh5jcMmJLRZPsLTwS2A4jBggYo8uZ17GSuhp",
  "key37": "4hZcajgQTgusLLJgdLdcHNmuaxdVZ7M8iCKVx1Ap8Zcf9hMvbgrSw3ZhX7jz9ejg2bDH5rqBfX85GVjacxykxJaA",
  "key38": "456RjdEuXNzoPSiijpsrFoPLYJfmbho9WUmWNFUmvq2nqKufMCRGqMWKkwBrrGakcGx5eYLyEKWm5V3CzdGHYXML",
  "key39": "2xAn5p1p8PmmbURf3Ro6DsL3ygjLMFmiQnq3R2Jd7PvMrtammNjdwjSB9VgM58CLjF7YX2T9BuU2FggB7QzH2anZ",
  "key40": "25mFuvYAWCdE9mFkLS6xLmHRnJZuk8nDd6KCFNL1BgFh7hfJdwJ8X2Zqsv3pukmDraNqDSuqa1kk4Bc4D7uD8odP",
  "key41": "5U8m4HRRnW2833nRQtoQoTW91B7DcBpZnS2ix7ZE53TNcQL2LUL2a4vzK1MAFa9nkfLTD6KwtsASZJ5tj97vtwDD",
  "key42": "3kb8qtWxB6rDehBTAUWHF4rxgWRc2fLVKqvp1nKw2Z91VayG27oYQaJ36uqm6jGTj5gHJDQD8A49THBTdwTBkGKs",
  "key43": "5QfbRwg1snErJZzkz7WuT5saXpLeufgCRfE4eRuwRx75CoJChTM21YC9LPpwb13EbRFtJWCARzaahVkLL4vpJMAB",
  "key44": "3SVfgJz6QtCGWfmQpQWJwiXoFKYkhi6nSGjMpDjqMNk3pjU6CjrMN35GthFt6Zrc9ZFnjVP88Z2VJK29pBB8htyn",
  "key45": "bXbHkZaoe7645FUA5ah712U3zjrFbrfLFxqk7AwtiQvaiksoza41XwTafcKt3DXsDr3x7AuuXtDLRz86YoCBRUM",
  "key46": "59XsYzPLjWNacy9MvMMS6UL5RX2EQbSYF1G98MRNrVJzrHooCFHzuVtthGF7PJTMCjznJ4TXg5kpk2tW7gG8gsuB",
  "key47": "427U5GTd6HNVEmp1JYpBrvRfqAEgAcN41fQMonnvP3as3UoXhrAjGBXPZYbEwitCHvjhREXaF7D1MZfHLFgognw2"
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

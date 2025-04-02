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
    "4o4kT4vkn8HzzVF2kv7QCHtVPh1oYUgRwKRHAsUjmEsy4Ww2jLCWBxdZipkR1UKv4RWZAk1byW2wD5CKkBRC6jhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4ikuq32vMNsbrHbtk3VPSVQD898T1wzpf5bH6YrFF6KqexnsePKYc41W4iZ15b4Y2FAPLLXGMuTkqFZ1Hf7i2y",
  "key1": "5aGP3nfsQqnrpP1MDRfB3eXfCTyhHDSgT9GLLeFbG2JaqFUQJ6cLHoyVaYk9ng371FsQME9GXzz8Tug4EYw4PuhX",
  "key2": "26QAzowVqyerEFeVrpW6Z8noxTHmxzWApP23S3SbTEgCq5eebKy5Zj9UhsVnj8LwGmNZ7Ahu1MdD57rseg3Ls8RY",
  "key3": "4CXvUdWKmseeTKqedNNmDEoop14FX5CN37tuVDccRRe4dcQX6W26nNKTYUKCii8vUzcjAPnnSQjQny3YxmYmD2nj",
  "key4": "5jWSGUKwYcVxqfEDgrnWQ1KkS9PqgZwwHnjhmctMgek636FCLdVbbR2Krr5Lk9HKcKL4ykbb5CB6ekQdbSrtNNpV",
  "key5": "4KGWaGUVtpvNSUeWxwwRY5XFuvf7kwSEo27aXg3FdhCyzyKr76oWdJnhKC5DKroYZ1YitRcXc1kWdNkFgpUeBSag",
  "key6": "nULgiPofr9cSGhbeJ7XGgp1MoDWE45tccKb6zesUP2uxih84Ls5xUxWHy5nzPsuRiJQj26qafZuSp6LURpUy6sL",
  "key7": "24gcFfrzTQqGM3STRG28Ub4qk6YewPWTvnsUYnrLNPkUgbB3rVfuApssLrFAWN5hPjmBtYYhnS9NJfS7PeT48pfd",
  "key8": "2gJk6ThaDqM5UsPCMGdHAz2BL2DaLCXrVR23zdUWAS7yp6Jyg5Xdfx8Rsfh27ykFQQgWs8oHnVg7wRPkQevSSLwK",
  "key9": "5hKuaQmfgyaAQffQ4Cw5B3dZv6iJW71BxEv91beLh35Q5vQJvfRf3WAQYpyrAmwpRAhjoXjijYhcD1XZ9i71n3iF",
  "key10": "439BGRmKCk3N69ng46rYKjoQssmqKS1ZWT2fnLZ4U34oBxo8U5CpRGWDDCU9Hn7f9GTC64bJD9n9hDVAZpEWcUJV",
  "key11": "5K3FnWrPchBUNoJUx4vcjFZ2mcfD5FjNmGrdb8EajjC2xpMF7e4wfWhXyxgqr7NW2bsMFrrzMzdqTBiw12hhKJfF",
  "key12": "GrWfsq9KcQsuScG4o6TPyvnHzHapKZdkoYEodmdG2KbjzsBVahhZ8sX2a9wSaxhUhtp2dCmupoiXMNaAgF7cRtq",
  "key13": "2e4iDHFNJTQFKG3L8tPuWu619XsqbRmzpM6oBL46Qsu78vRErQxcoVbRGoXNRw6UGV9XDTNLNH5wVRdBXCvonmnk",
  "key14": "3nnq4ZH6MFPnobcWeg67vdmxSTA73JcRPPRD37NZ3YzM3uG1P3tds7NL7cjuPgqiZvcw5Yon43Z8hj1tMupM9K79",
  "key15": "41GWhZNZkYSwcKJUYiYTCDfaPmtYULUA5Ebbf2QLe9HDpvoHhn3GZvfCdwG2mAu72nKJj158TpBvvaguBKFf2FAH",
  "key16": "3JSP4QpUg43ae3hAZoBxc3K7gyV45BTJWUk8q7z2B4ua23nfq1rNZBsWK7hY8MfLa3SSSTTmd69i4q8ddvFwebQ2",
  "key17": "JsePtDaJbrAg5XGvwVA4NpMgnVayhG2VW8XHyU4khhBv5ff1ZWg37WJmrwePHAWbFRL7RvyM35WWEhXnoTxvugK",
  "key18": "2aXRNEFdpgrQ7uKvFq1BXNsq5cLma7njfbmyPuzYtVjKgVziyTymBrjz7WYT2HYpnxkAiGycqB1DCvj3WXEv62SG",
  "key19": "3QUoEb7p6yxYgzpnJXqRFxp3oaErsapvMBXL9v8zz5t9p9YcigUfo3UQyre5KH4UvUxKE3ZpdFzpF1k5w12QH65",
  "key20": "pM2aeFtTGJFnqgiUwJSeJBVtgVXLq5xeCv9oLvLdGgKG2wt95qvWuNfpt9xMPXKHWEdR5xBQTSiTDvYQyRQqCVH",
  "key21": "2S19sDjpuPqkzT2Lk9RfRMSAQFjShGbdTQus3YgA9bE71YgAV2kxgweazJTbnrjii3uBLQDHeUCk4giqmdExwcCo",
  "key22": "28RRjMQrbC6S76RouU95eQpR6yybobA8sNLP4dNWdWnUX2ZSEpoMT7xswqrgAJckMFKXXEAs8fcaLpRH4znGxdNQ",
  "key23": "ZwfSqmQY7qB4rNzaKHjebX6At4Vi3JhgU8BvchHG7q3ex13MZQDQhk6WtpR2VgKFRUfPsukuigTesVNSPLXSRJe",
  "key24": "5QBpjga6HMG1mduVnPsEkhhXfQr2JyvK72PsAYGkiMWpAkdbyu95gzQhLE4HuefH5M5foKtRBGJZBVMXpEo4kmYS",
  "key25": "5tbHLrEnPm3mPDSD8NcxVa8NmhsJzLCyPXnraydTmWp9ZmFzJp91XuJihh9HpHrVNE35xJGJEX7qyeD9zLJw395N",
  "key26": "38ZU8rPMf38MGCNvc47oua9f8g6kYjybVqkhFe47mdt2qyxsRAuFspLKCsWtKZn2mFCeKtSx6BmTBdtURgKWhv5h",
  "key27": "666pvGGaatvyVw7nRUexWX7VP1q26mYJLiXNGvtvb9YQz7eoUCppTiLZDnwAd4qqi7Mip5WvYR1tCxsCfxCyKQzT",
  "key28": "2ZbmMPiXDDoBpU75GU8zxf6EN2xc1PxP3HrvRvTRi5ZPg3cPYv3iiJR6qK96X7FB26tDvHpgnZZNbTKS5vC7drQA",
  "key29": "2hmTx5UwDVf8yvwtiH5V9Ms7xu6WJf3xHFUVvWk5JspoDdHY3Ckz1vY3cvAFiMn5C3F1Y45HQLmm2sGBdxN5BoZu",
  "key30": "4Y87C3fqHFF18i3yieBPxzmLmVMiwNaqwHfNDYn7jKWsR92r3P8SLUcXDsuW4zBuxu9RzB1qdN2imzL4CGq1YyJ",
  "key31": "4xzPDZHdjFnkqosqwUzHe1qFkoTB58RHd1jVQGxDHX42Vpio5pV1938CavmSomLrk6vqfBEpGBEpHFNAt1QpAKrX"
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
